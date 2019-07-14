export default {
	name: 'VueTruncateContent',
	props: {
		tag: {
			type: String,
			default: 'div'
		},
		ellipsis: {
			type: String,
			default: '...'
		},
		length: {
			type: Number,
			default: 100
		},
		truncated: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			realLength: this.length
		};
	},
	watch: {
		length() {
			this.realLength = this.length;
		}
	},
	methods: {
		getContent() {
			const scopeId = this.$parent.$options._scopeId;
			let counter = 0;

			const truncate = (vNodes = []) => {
				const result = [];

				vNodes.forEach(vNode => {
					// Copy vNode
					vNode = Object.defineProperties(new vNode.constructor(), Object.getOwnPropertyDescriptors(vNode));

					if (vNode.tag && scopeId) {
						vNode.data = vNode.data || {};
						vNode.data.attrs = vNode.data.attrs || {};
						vNode.data.attrs[scopeId] = '';
					}

					if (!this.truncated) {
						if (vNode.text) {
							counter += vNode.text.length;
						}

						if (vNode.children) {
							vNode.children = truncate(vNode.children);
						}

						result.push(vNode);
					} else if (counter < this.realLength) {
						if (vNode.text) {
							counter += vNode.text.length;

							if (counter > this.realLength) {
								vNode.text = vNode.text.slice(0, vNode.text.length - (counter - this.realLength));
							}
						}

						if (vNode.children) {
							vNode.children = truncate(vNode.children);
						}

						result.push(vNode);
					}
				});

				return result;
			};

			const content = truncate(this.$scopedSlots.default && this.$scopedSlots.default());
			const beforeSlot = this.$scopedSlots.before && this.$scopedSlots.before();
			const afterSlot = this.$scopedSlots.after && this.$scopedSlots.after();

			if (content.length > 0) {
				const firstVNode = content[0],
					lastVNode = content[content.length - 1],
					ellipsis = this.$createElement('span', this.ellipsis),
					space = this.$createElement('span', ' ');

				if (beforeSlot) {
					if (firstVNode.children) {
						firstVNode.children.unshift(...beforeSlot, space);
					} else {
						content.unshift(...beforeSlot, space);
					}
				}

				if (this.truncated && counter > this.realLength) {
					if (lastVNode.children) {
						lastVNode.children.push(ellipsis);
					} else {
						content.push(ellipsis);
					}
				}

				if (afterSlot && counter > this.realLength) {
					const space = this.$createElement('span', ' ');

					if (lastVNode.children) {
						lastVNode.children.push(space, ...afterSlot);
					} else {
						content.push(space, ...afterSlot);
					}
				}
			}

			return content;
		},
		update() {
			if (this.truncated && this.$el.scrollHeight > this.$el.offsetHeight) {
				this.realLength = this.realLength - 5;
			}
		},
		onWindowResize() {
			this.realLength = this.length;
			this.update();
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
				style: {
					overflow: 'hidden',
					height: this.truncated ? '' : 'auto'
				},
				key: Date.now()
			},
			this.getContent()
		);
	},
	mounted() {
		this.update();
		window.addEventListener('resize', this.onWindowResize);
	},
	updated() {
		this.update();
	},
	destroyed() {
		window.removeEventListener('resize', this.onWindowResize);
	}
};
