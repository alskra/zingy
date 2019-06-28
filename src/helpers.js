export function getVNodesTextContent(VNodes) {
	return VNodes.map(VNode => VNode.children ? getVNodesTextContent(VNode.children) : VNode.text).join('');
}
