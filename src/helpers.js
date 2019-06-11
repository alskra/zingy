export function getVNodesTextContent(vnodes) {
	return vnodes.map(vnode => vnode.children ? getVNodesTextContent(vnode.children) : vnode.text).join('');
}

export function preventClickOnScroll(evt, delta) {
	if (Math.abs(delta) >= 3) {
		evt.target.addEventListener('click', evt => {
			evt.preventDefault();
			evt.stopPropagation();
		}, {
			capture: true,
			once: true
		});
	}
}
