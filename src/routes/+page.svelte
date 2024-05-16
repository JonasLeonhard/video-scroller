<script lang="ts">
	import { Unstable3d } from '$lib';

	import '../app.css';
</script>

<div style="height: 800px"></div>

<Unstable3d
	animations={[
		{
			enter: {
				time: 8.2,
				transition: {
					data: {
						duration: 500,
						y: -20
					},
					type: 'fly'
				}
			},
			html: '<h1 class="my-headline">My Headline</h1>',
			leave: {
				time: 14.8,
				transition: {
					data: {
						duration: 500,
						y: 0
					},
					type: 'fly'
				}
			},
			position: { x: '80%', y: '50%' }
		},
		{
			enter: {
				time: 3.2,
				transition: {
					data: {
						duration: 500,
						y: -20
					},
					type: 'fly'
				}
			},
			html: '<h1 class="my-headline">Another Headline</h1>',
			leave: {
				time: 5,
				transition: {
					data: {
						duration: 500,
						y: 0
					},
					type: 'fly'
				}
			},
			position: { x: '15%', y: '15%' }
		}
	]}
	trackHeightPx={9600}
	videoUrl="https://jonasleonhard.github.io/video-scroller/versions/0.0.1/dist-demo/scrollvideo.mp4"
/>

<div style="height: 800px"></div>

<style>
	:global(.my-headline) {
		color: white;
		font-size: 2rem;
	}
</style>
