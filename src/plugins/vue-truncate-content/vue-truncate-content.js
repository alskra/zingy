export default {
	name: 'VueTruncateContent',
	props: {
		tag: {
			type: String,
			default: 'div'
		},
		length: {
			type: Number,
			default: 100
		},
		ellipsis: {
			type: String,
			default: '...'
		},
		truncated: {
			type: Boolean,
			default: true
		}
	},
	render(createElement) {
		return createElement(
			this.tag,
			{
				class: {
					'vue-truncate-content': true,
					truncated: this.truncated
				},
				on: {
					click: () => {
						// this.$emit('update:truncated', !this.truncated);
					}
				},
				key: Date.now(),
			},
			this.getContent()
		);
	},
	methods: {
		getContent() {
			const scopeId = this.$parent.$options._scopeId;

			let counter = 0,
				truncated = false;

			const truncate = (vnodes = []) => {
				const result = [];

				vnodes.forEach(vnode => {
					if (vnode.tag && scopeId) {
						vnode.data = vnode.data || {};
						vnode.data.attrs = vnode.data.attrs || {};
						vnode.data.attrs[scopeId] = '';
					}

					if (!this.truncated) {
						if (vnode.text) {
							counter += vnode.text.length;
						}

						truncate(vnode.children);
						result.push(vnode);
					} else if (counter < this.length) {
						vnode = Object.defineProperties(new vnode.constructor(), Object.getOwnPropertyDescriptors(vnode));

						if (vnode.text) {
							counter += vnode.text.length;

							if (counter > this.length) {
								vnode.text = vnode.text.slice(0, vnode.text.length - (counter - this.length));
								truncated = true;
							}
						}

						if (vnode.children) {
							vnode.children = truncate(vnode.children);
						}

						result.push(vnode);
					}
				});

				return result;
			};

			const content = truncate(this.$scopedSlots.default && this.$scopedSlots.default());
			const beforeSlot = this.$scopedSlots.before && this.$scopedSlots.before() || [];
			const afterSlot = this.$scopedSlots.after && this.$scopedSlots.after() || [];

			if (content.length > 0) {
				const firstNode = content[0],
					lastNode = content[content.length - 1],
					ellipsis = this.$createElement('span', this.ellipsis),
					space = this.$createElement('span', ' ');

				if (firstNode.children) {
					firstNode.children.unshift(space, ...beforeSlot);
				} else {
					content.unshift(space, ...beforeSlot);
				}

				if (truncated) {
					if (lastNode.children) {
						lastNode.children.push(ellipsis);
					} else {
						content.push(ellipsis);
					}
				}

				if (counter > this.length) {
					const space = this.$createElement('span', ' ');

					if (lastNode.children) {
						lastNode.children.push(space, ...afterSlot);
					} else {
						content.push(space, ...afterSlot);
					}
				}
			}

			return content;
		}
	}
};
