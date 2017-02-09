// @flow
import { Application } from 'pixi.js';

type Props = {
	size: {
		width: number,
		height: number,
	},
	options: Object,
};
const defaults = {
	size: {
		width: 800,
		height: 600,
	},
	options: {
		backgroundColor: 0x1099bb,
		antialias: true,
	},
};

// TODO hooks for constructor, get props, etc
export default function App({ size, options }: Props = defaults) {
	const app = new Application(size.width, size.height, options);

	document.body.appendChild(app.view);

	return app;
}
