export function getVNodesTextContent(vnodes) {
	return vnodes.map(vnode => vnode.children ? getVNodesTextContent(vnode.children) : vnode.text).join('');
}
