export function getText(vNodes = []) {
	return vNodes.map(vNode => vNode.children ?
		getText(vNode.children)
		: vNode.text
	).join('');
}

export function filterTags(vNodes = []) {
	return vNodes.filter(vNode => vNode.tag);
}

export function defineVNodeSlots(vNode) {
	if (vNode) {
		vNode.slots = {};

		if (vNode.children) {
			vNode.children.forEach(child => {
				defineVNodeSlots(child);

				const slotName = child.data && child.data.slot;

				if (slotName) {
					const slotVNodes =
						child.tag === 'template' && child.children ?
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

		return vNode;
	}
}

export function getSlot(slotName) {
	const slotVNodes = this.$scopedSlots[slotName] && this.$scopedSlots[slotName]()
		.filter(vNode => {
			if (vNode.tag) {
				defineVNodeSlots(vNode);

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
