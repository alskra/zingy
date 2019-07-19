/** Deprecated */

export function getVNodesTextContent(vnodes = []) {
	return vnodes.map(vnode => vnode.children ?
		getVNodesTextContent(vnode.children)
		: vnode.text
	).join('');
}

export function getTagVNodes(vnodes = []) {
	return vnodes.filter(vnode => vnode.tag);
}

export function defineVNodesSlots(vnodes = []) {
	vnodes.forEach(vnode => {
		vnode.slots = {};

		if (Array.isArray(vnode.children)) {
			vnode.children.forEach(child => {
				const slotName = child.tag && child.data && child.data.slot;

				if (slotName) {
					const slotNodes = child.tag === 'template' ?
						getTagVNodes(child.children)
						: [child];

					if (slotNodes.length > 0) {
						vnode.slots[slotName] = (vnode.slots[slotName] || []).concat(slotNodes);
					}
				}
			});
		}
	});

	return vnodes;
}

export function getScopedSlot(fn) {
	return fn && defineVNodesSlots(getTagVNodes(fn()));
}

/** Actual */

/**
 * @param vNodes
 * @returns {string}
 */
export function getText(vNodes = []) {
	return vNodes.map(vNode => vNode.children ?
		getVNodesTextContent(vNode.children)
		: vNode.text
	).join('');
}

/**
 * @param vNodes
 * @returns {*[]}
 */
export function filterTags(vNodes = []) {
	return vNodes.filter(vNode => vNode.tag);
}

/**
 * @param slotName
 * @returns {*|((props: any) => ScopedSlotChildren)|undefined|T[]}
 */
export function getSlot(slotName) {
	const slotVNodes = this.$scopedSlots[slotName]
		&& this.$scopedSlots[slotName]()
			.filter(vNode => {
				if (vNode.tag) {
					vNode.slots = {};

					if (vNode.children) {
						vNode.children.forEach(child => {
							const slotName = child.data && child.data.slot;

							if (slotName) {
								const slotVNodes = child.tag === 'template' && child.children ?
									child.children
									: child.tag !== 'template' ?
										child
										: null;

								if (slotVNodes) {
									vNode.slots[slotName] = (vNode.slots[slotName] || []).concat(slotVNodes);
								}
							}
						});
					}

					return true;
				}

				return false;
			});

	if (slotVNodes && slotVNodes.length > 0) {
		return slotVNodes;
	}
}

export default {
	install(Vue) {
		Vue.prototype.$publicPath = process.env.BASE_URL;
		Vue.prototype.$getText = getText;
		Vue.prototype.$filterTags = filterTags;
		Vue.prototype.$getSlot = getSlot;
	}
};
