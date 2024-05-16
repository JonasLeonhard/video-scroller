## Demo
<a href="https://jonasleonhard.github.io/video-scroller/versions/0.0.1/dist-demo/">Demo</a>


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
1. .svelte-kit -> The Showcase app
2. dist -> The svelte component
3. dist-js -> A Vanilla js component

You can preview the production build with `pnpm run preview`.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [pnpm](https://www.pnpmjs.com):

```bash
pnpm publish
```

## Integrating Svelte Component:

TODO

## Integrating dist:
TODO

## Integrating dist-js:
TODO
```html
<!doctype html>
<html>
	<head>
		<title>Vanilla Html example</title>
		<script type="module">
			import { Unstable3d } from './components.js';
			new Unstable3d({
				target: document.querySelector('#app'),
				props: {
					// initial property values
				}
			});
		</script>
	</head>
	<body>
		<div id="app"></div>
	</body>
</html>
```
