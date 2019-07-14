/**
 * Deprecated
 */

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

/**
 * Actual
 */

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
 * @returns {*|((props: any) => ScopedSlotChildren)|undefined|*[]}
 */
export function getSlot(slotName) {
	return this.$scopedSlots[slotName]
		&& filterTags(this.$scopedSlots[slotName]())
			.map(vNode => {
				vNode.slots = {};

				if (Array.isArray(vNode.children)) {
					vNode.children.forEach(child => {
						const slotName = child.tag && child.data && child.data.slot;

						if (slotName) {
							const slotVNodes = child.tag === 'template' ?
								filterTags(child.children)
								: [child];

							if (slotVNodes.length > 0) {
								vNode.slots[slotName] = (vNode.slots[slotName] || []).concat(slotVNodes);
							}
						}
					});
				}

				return vNode;
			});
}

export default {
	install(Vue) {
		Vue.prototype.$getText = getText;
		Vue.prototype.$filterTags = filterTags;
		Vue.prototype.$getSlot = getSlot;
	}
};
