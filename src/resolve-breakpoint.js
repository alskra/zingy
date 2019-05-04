import {environmentVariables} from '../postcss.import';

export default function resolveBreakpoint() {
	let resolvedBreakpoint = window.innerWidth;

	const breakpoints = {};

	['--min-breakpoint', '--max-breakpoint'].forEach(value => {
		breakpoints[value.match(/--(\w+)-/)[1]] = parseFloat(environmentVariables[value]);
	});

	if (resolvedBreakpoint < breakpoints.min) {
		resolvedBreakpoint = breakpoints.min;
	} else if (resolvedBreakpoint > breakpoints.max) {
		resolvedBreakpoint = breakpoints.max;
	}

	document.documentElement.style.setProperty('--resolved-breakpoint', String(resolvedBreakpoint));

	window.addEventListener('resize', resolveBreakpoint);
}

resolveBreakpoint();
