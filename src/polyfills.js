import './resolve-breakpoint';
// import cssBlankPseudo from 'css-blank-pseudo/legacy';
import 'focus-visible';
import focusWithin from 'focus-within';
import cssVars from 'css-vars-ponyfill';

// cssBlankPseudo(document, {force: true});

focusWithin(document, {force: true});

cssVars();
