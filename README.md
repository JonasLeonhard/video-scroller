# Video Scroller
Smooth scroll based video scrolling usable as a Svelte Component or as a plain old Vanilla Js.

## Demo
<a href="https://jonasleonhard.github.io/video-scroller/versions/0.0.1/dist-demo/">Demo 0.0.1</a>

## Integrating Svelte Component:

```svelte
<script lang="ts">
	import { VideoScroller } from '$lib';

	import '../app.css';
</script>

<div style="height: 800px"></div>

<VideoScroller
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
	// you have to style your html content yourself! the component comes with basically no styling out of the box.
	:global(.my-headline) {
		color: white;
		font-size: 2rem;
	}
</style>
```
## Integrating Vanilla Javascript Component:
```html
<!doctype html>
<html>
	<head>
		<title>Vanilla Html example</title>
		<style>
			.my-headline {
				color: white;
				font-size: 2rem;
			}
		</style>

		<script type="module">
			import { VideoScroller } from 'https://jonasleonhard.github.io/video-scroller/versions/0.0.1/dist-js/components.js'

			new VideoScroller({
				target: document.querySelector('#app'),
				props: {
					animations: {[
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
					trackHeightPx: 9600
					videoUrl: "https://jonasleonhard.github.io/video-scroller/versions/0.0.1/dist-demo/scrollvideo.mp4"
				}
			});
		</script>
	</head>
	<body>
		<div id="app"></div>
	</body>
</html>
```

## Props
todo...

## Comparible Projects
<a href="https://github.com/dkaoster/scrolly-video">Scrolly Video</a>

## Developing

Once you've created a project and installed dependencies with `pnpm install` (or `ppnpm install` or `yarn`), start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build the library run:

```bash
pnpm run build
```

-> This outputs the following directories:
1. dist-demo -> The Showcase app
2. dist -> The svelte component
3. dist-js -> A Vanilla js component

If you want to update the versions folder run

```bash
pnpm run buildToVersion
```
This will ask you for a version number to put in the versions folder, and put the output dirs there for github pages.

You can preview the production build with `pnpm run preview`.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [pnpm](https://www.pnpmjs.com):

```bash
pnpm publish
```
