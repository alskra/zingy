import 'css-initials/all.css';
import './resolve-breakpoint';
// import cssBlankPseudo from 'css-blank-pseudo/legacy';
import 'focus-visible';
import focusWithin from 'focus-within';
import cssVars from 'css-vars-ponyfill';
import Vue from 'vue';

// cssBlankPseudo(document, {force: true});

focusWithin(document, {force: true});

cssVars();

// `all: initial` polyfill
if (!(window.CSS && CSS.supports('color', 'var(--primary)'))) {
	Vue.mixin({
		methods: {
			addInitialClass() {
				if (this.$el.classList) {
					this.$el.classList.add('initials-all');
				}
			}
		},
		mounted() {
			this.addInitialClass();
		},
		updated() {
			this.addInitialClass();
		}
	})
}
