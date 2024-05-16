<script>import { onMount } from "svelte";
import { spring } from "svelte/motion";
import { fly } from "svelte/transition";
export let videoUrl;
export let trackHeightPx;
export let animations;
let track;
let video;
let currentTimeSpring = spring(0);
const onLoadedVideo = () => {
  const displayScrolledFrame = async () => {
    if (!video || !track || !video?.duration) {
      return false;
    }
    const distanceFromTop = window.scrollY + track.getBoundingClientRect().top;
    const rawPercentScrolled = (window.scrollY - distanceFromTop) / (track.scrollHeight - window.innerHeight);
    const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
    currentTimeSpring.set(video.duration * percentScrolled);
  };
  requestAnimationFrame(displayScrolledFrame);
};
onMount(() => {
  if (video.readyState > 2) {
    onLoadedVideo();
  }
  const unsubscribe = currentTimeSpring.subscribe(async (value) => {
    await video.play();
    video.currentTime = value;
    video.pause();
  });
  return unsubscribe;
});
</script>

<svelte:window on:scroll={onLoadedVideo} />

<div bind:this={track} class="unstable3d__track" style="height: {trackHeightPx}px">
	<div class="unstable3d__animation-layer">
		<video
			bind:this={video}
			class="unstable3d__video"
			muted
			on:loadedmetadata={onLoadedVideo}
			preload="metadata"
			src={videoUrl}
		></video>
		{#each animations as animation}
			{#if $currentTimeSpring >= animation.enter.time && $currentTimeSpring <= animation.leave.time}
				<div
					class="unstable3d__animation-item"
					in:fly={animation.enter.transition.data}
					out:fly={animation.leave.transition.data}
					style="left: {animation.position.x}; top: {animation.position.y}"
				>
					{@html animation.html}
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>.unstable3d__track {
  position: relative;
}
.unstable3d__animation-layer {
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.unstable3d__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.unstable3d__animation-item {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
}</style>
