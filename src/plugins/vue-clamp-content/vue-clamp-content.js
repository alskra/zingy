export default {
	props: {
		tag: {
			type: String,
			default: 'div'
		},
		length: {
			type: Number,
			default: 100
		}
	},
	data() {
		return {
			expanded: false
		};
	},
	render(createElement) {
		const vnodes = this.$scopedSlots.default && this.$scopedSlots.default();

		return createElement(
			this.tag,
			{class: 'vue-clamp-content'},
			this.getClampedContent(vnodes)
		);
	},
	methods: {
		getClampedContent(vnodes) {
			let counter = 0;

			const clamp = (vnodes = []) => vnodes.map(vnode => {
				const scopeId = this.$parent.$options._scopeId;

				if (vnode.tag && scopeId) {
					vnode.data = vnode.data || {};
					vnode.data.attrs = vnode.data.attrs || {};
					vnode.data.attrs[scopeId] = '';
				}

				if (!this.expanded) {
					if (counter < this.length) {
						if (vnode.text) {
							let text = vnode.text;

							counter += vnode.text.length;

							if (counter > this.length) {
								text = text.slice(0, text.length - (counter - this.length)) + '...';
							}

							return text;
						}

						return this.$createElement(vnode.tag, vnode.data, clamp(vnode.children));
					}

					return null;
				}

				return vnode.text || this.$createElement(vnode.tag, vnode.data, clamp(vnode.children));
			});

			return clamp(vnodes);
		}
	}
};
