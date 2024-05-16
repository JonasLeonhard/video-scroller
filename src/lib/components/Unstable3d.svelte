<script lang="ts">
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import { type FlyParams, fly } from 'svelte/transition';

	type Transition = {
		data: FlyParams;
		type: string;
	};

	type Animation = {
		enter: {
			time: number;
			transition: Transition;
		};
		html: string;
		leave: {
			time: number;
			transition: Transition;
		};
		position: {
			x: string;
			y: string;
		};
	};

	export let videoUrl: string;
	export let trackHeightPx: number;
	export let animations: Animation[];

	let track: HTMLDivElement;
	let video: HTMLVideoElement;
	let currentTimeSpring = spring(0);

	const onLoadedVideo = () => {
		const displayScrolledFrame = async () => {
			if (!video || !track || !video?.duration) {
				return false;
			}

			const distanceFromTop = window.scrollY + track.getBoundingClientRect().top;
			const rawPercentScrolled =
				(window.scrollY - distanceFromTop) / (track.scrollHeight - window.innerHeight);
			const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

			// update the spring's value instead of directly setting video.currentTime
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

<style lang="scss">
	.unstable3d {
		&__track {
			position: relative;
		}

		&__animation-layer {
			position: sticky;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
		}

		&__video {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		&__animation-item {
			position: absolute;
			top: 0;
			left: 0;
			transform: translate(-50%, -50%);
		}
	}
</style>
