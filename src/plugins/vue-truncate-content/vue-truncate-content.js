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
	data() {
		return {
			realLength: this.length
		};
	},
	computed: {
		content() {
			const scopeId = this.$parent.$options._scopeId;
			let counter = 0;

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
					} else if (counter < this.realLength) {
						vnode = Object.defineProperties(new vnode.constructor(), Object.getOwnPropertyDescriptors(vnode));

						if (vnode.text) {
							counter += vnode.text.length;

							if (counter > this.realLength) {
								vnode.text = vnode.text.slice(0, vnode.text.length - (counter - this.realLength));
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
			const beforeSlot = this.$scopedSlots.before && this.$scopedSlots.before();
			const afterSlot = this.$scopedSlots.after && this.$scopedSlots.after();

			if (content.length > 0) {
				const firstNode = content[0],
					lastNode = content[content.length - 1],
					ellipsis = this.$createElement('span', this.ellipsis),
					space = this.$createElement('span', ' ');

				if (beforeSlot) {
					if (firstNode.children) {
						firstNode.children.unshift(...beforeSlot, space);
					} else {
						content.unshift(...beforeSlot, space);
					}
				}

				if (this.truncated && counter > this.realLength) {
					if (lastNode.children) {
						lastNode.children.push(ellipsis);
					} else {
						content.push(ellipsis);
					}
				}

				if (afterSlot && counter > this.realLength) {
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
	},
	methods: {
		update() {
			console.log(this.$el.offsetHeight);
			console.log(this.$el.scrollHeight);

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
		console.log('render');

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
				on: {
					click: () => {
						// this.$emit('update:truncated', !this.truncated);
					}
				},
				key: Date.now()
			},
			this.content
		);
	},
	mounted() {
		console.log('mounted');

		this.update();
		window.addEventListener('resize', this.onWindowResize);
	},
	updated() {
		console.log('updated');

		this.update();
	},
	destroyed() {
		window.removeEventListener('resize', this.onWindowResize);
	}
};
