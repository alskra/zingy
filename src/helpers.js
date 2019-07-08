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
		vnode.slots = vnode.slots || {};

		if (Array.isArray(vnode.children)) {
			vnode.children.forEach(child => {
				if (child.tag && child.data && child.data.slot) {
					const slots = child.tag === 'template' ?
						getTagVNodes(child.children)
						: [child];

					if (slots.length > 0) {
						const name = child.data.slot;

						vnode.slots[name] = (vnode.slots[name] || []).concat(slots);
					}

				}
			});
		}
	});

	// console.log(vnodes);
	return vnodes;
}

export function getScopedSlot(fn) {
	return fn && defineVNodesSlots(getTagVNodes(fn()));
}
