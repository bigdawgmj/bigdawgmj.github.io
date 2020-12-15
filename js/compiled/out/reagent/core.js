// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('reagent.core');
goog.require('cljs.core');
goog.require('reagent.impl.template');
goog.require('reagent.impl.component');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.dom');
reagent.core.node$module$react = require('react');
reagent.core.is_client = reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *   ```cljs
 *   (r/create-element "div" #js{:className "foo"}
 *  "Hi " (r/as-element [:strong "world!"])
 *   ```
 * 
 *   which is equivalent to
 * 
 *   ```cljs
 *   [:div.foo "Hi" [:strong "world!"]]
 *   ```
 */
reagent.core.create_element = (function reagent$core$create_element(var_args){
<<<<<<< HEAD
var G__26973 = arguments.length;
switch (G__26973) {
=======
var G__27430 = arguments.length;
switch (G__27430) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___26975 = arguments.length;
var i__4737__auto___26976 = (0);
while(true){
if((i__4737__auto___26976 < len__4736__auto___26975)){
args_arr__4757__auto__.push((arguments[i__4737__auto___26976]));

var G__26977 = (i__4737__auto___26976 + (1));
i__4737__auto___26976 = G__26977;
=======
var len__4736__auto___27432 = arguments.length;
var i__4737__auto___27433 = (0);
while(true){
if((i__4737__auto___27433 < len__4736__auto___27432)){
args_arr__4757__auto__.push((arguments[i__4737__auto___27433]));

var G__27434 = (i__4737__auto___27433 + (1));
i__4737__auto___27433 = G__27434;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return reagent.core.create_element.call(null,type,null);
}));

(reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return reagent.core.node$module$react.createElement(type,props);
}));

(reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return reagent.core.node$module$react.createElement(type,props,child);
}));

(reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return cljs.core.apply.call(null,reagent.core.node$module$react.createElement,type,props,child,children);
}));

/** @this {Function} */
<<<<<<< HEAD
(reagent.core.create_element.cljs$lang$applyTo = (function (seq26969){
var G__26970 = cljs.core.first.call(null,seq26969);
var seq26969__$1 = cljs.core.next.call(null,seq26969);
var G__26971 = cljs.core.first.call(null,seq26969__$1);
var seq26969__$2 = cljs.core.next.call(null,seq26969__$1);
var G__26972 = cljs.core.first.call(null,seq26969__$2);
var seq26969__$3 = cljs.core.next.call(null,seq26969__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26970,G__26971,G__26972,seq26969__$3);
=======
(reagent.core.create_element.cljs$lang$applyTo = (function (seq27426){
var G__27427 = cljs.core.first.call(null,seq27426);
var seq27426__$1 = cljs.core.next.call(null,seq27426);
var G__27428 = cljs.core.first.call(null,seq27426__$1);
var seq27426__$2 = cljs.core.next.call(null,seq27426__$1);
var G__27429 = cljs.core.first.call(null,seq27426__$2);
var seq27426__$3 = cljs.core.next.call(null,seq27426__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27427,G__27428,G__27429,seq27426__$3);
>>>>>>> 8f3c68a (Initial Commit)
}));

(reagent.core.create_element.cljs$lang$maxFixedArity = (3));

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
reagent.core.as_element = (function reagent$core$as_element(form){
return reagent.impl.template.as_element.call(null,form);
});
/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
reagent.core.adapt_react_class = (function reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return reagent.impl.template.adapt_react_class.call(null,c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
reagent.core.reactify_component = (function reagent$core$reactify_component(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return reagent.impl.component.reactify_component.call(null,c);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.core.render = (function reagent$core$render(var_args){
<<<<<<< HEAD
var G__26979 = arguments.length;
switch (G__26979) {
=======
var G__27436 = arguments.length;
switch (G__27436) {
>>>>>>> 8f3c68a (Initial Commit)
case 2:
return reagent.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.core.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container);
}));

(reagent.core.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
return reagent.dom.render.call(null,comp,container,callback);
}));

(reagent.core.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.core.unmount_component_at_node = (function reagent$core$unmount_component_at_node(container){
return reagent.dom.unmount_component_at_node.call(null,container);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.core.force_update_all = (function reagent$core$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

reagent.dom.force_update_all.call(null);

return reagent.impl.batching.flush_after_render.call(null);
});
/**
 * Creates JS class based on provided Clojure map, for example:
 * 
 *   ```cljs
 *   {;; Constructor
 * :constructor (fn [this props])
 * :get-initial-state (fn [this])
 * ;; Static methods
 * :get-derived-state-from-props (fn [props state] partial-state)
 * :get-derived-state-from-error (fn [error] partial-state)
 * ;; Methods
 * :get-snapshot-before-update (fn [this old-argv new-argv] snapshot)
 * :should-component-update (fn [this old-argv new-argv])
 * :component-did-mount (fn [this])
 * :component-did-update (fn [this old-argv old-state snapshot])
 * :component-will-unmount (fn [this])
 * :component-did-catch (fn [this error info])
 * :reagent-render (fn [args....])
 * ;; Or alternatively:
 * :render (fn [this])
 * ;; Deprecated methods:
 * :UNSAFE_component-will-receive-props (fn [this new-argv])
 * :UNSAFE_component-will-update (fn [this new-argv new-state])
 * :UNSAFE_component-will-mount (fn [this])}
 *   ```
 * 
 *   Everything is optional, except either :reagent-render or :render.
 * 
 *   Map keys should use `React.Component` method names (https://reactjs.org/docs/react-component.html),
 *   and can be provided in snake-case or camelCase.
 * 
 *   State can be initialized using constructor, which matches React.Component class,
 *   or using getInitialState which matches old React createClass function and is
 *   now implemented by Reagent for compatibility.
 * 
 *   State can usually be anything, e.g. Cljs object. But if using getDerivedState
 *   methods, the state has to be plain JS object as React implementation uses
 *   Object.assign to merge partial state into the current state.
 * 
 *   React built-in static methods or properties are automatically defined as statics.
 */
reagent.core.create_class = (function reagent$core$create_class(spec){
return reagent.impl.component.create_class.call(null,spec);
});
/**
 * Returns the current React component (a.k.a `this`) in a component
 *   function.
 */
reagent.core.current_component = (function reagent$core$current_component(){
return reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
reagent.core.state_atom = (function reagent$core$state_atom(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.state_atom.call(null,this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to `(deref (r/state-atom this))`
 */
reagent.core.state = (function reagent$core$state(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return cljs.core.deref.call(null,reagent.core.state_atom.call(null,this$));
});
/**
 * Set state of a component.
 *   Equivalent to `(reset! (state-atom this) new-state)`
 */
reagent.core.replace_state = (function reagent$core$replace_state(this$,new_state){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.call(null,new_state)].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.reset_BANG_.call(null,reagent.core.state_atom.call(null,this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to `(swap! (state-atom this) merge new-state)`
 */
reagent.core.set_state = (function reagent$core$set_state(this$,new_state){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.call(null,new_state)].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.swap_BANG_.call(null,reagent.core.state_atom.call(null,this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
reagent.core.force_update = (function reagent$core$force_update(var_args){
<<<<<<< HEAD
var G__26982 = arguments.length;
switch (G__26982) {
=======
var G__27439 = arguments.length;
switch (G__27439) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return reagent.core.force_update.call(null,this$,false);
}));

(reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
reagent.ratom.flush_BANG_.call(null);

reagent.impl.util.force_update.call(null,this$,deep);

return reagent.impl.batching.flush_after_render.call(null);
}));

(reagent.core.force_update.cljs$lang$maxFixedArity = 2);

/**
 * Returns the props passed to a component.
 */
reagent.core.props = (function reagent$core$props(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.get_props.call(null,this$);
});
/**
 * Returns the children passed to a component.
 */
reagent.core.children = (function reagent$core$children(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.get_children.call(null,this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
reagent.core.argv = (function reagent$core$argv(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.get_argv.call(null,this$);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.core.dom_node = (function reagent$core$dom_node(this$){
return reagent.dom.dom_node.call(null,this$);
});
/**
 * Function which normalizes and combines class values to a string
 * 
 *   Reagent allows classes to be defined as:
 *   - Strings
 *   - Named objects (Symbols or Keywords)
 *   - Collections of previous types
 */
reagent.core.class_names = (function reagent$core$class_names(var_args){
<<<<<<< HEAD
var G__26988 = arguments.length;
switch (G__26988) {
=======
var G__27445 = arguments.length;
switch (G__27445) {
>>>>>>> 8f3c68a (Initial Commit)
case 0:
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___26990 = arguments.length;
var i__4737__auto___26991 = (0);
while(true){
if((i__4737__auto___26991 < len__4736__auto___26990)){
args_arr__4757__auto__.push((arguments[i__4737__auto___26991]));

var G__26992 = (i__4737__auto___26991 + (1));
i__4737__auto___26991 = G__26992;
=======
var len__4736__auto___27447 = arguments.length;
var i__4737__auto___27448 = (0);
while(true){
if((i__4737__auto___27448 < len__4736__auto___27447)){
args_arr__4757__auto__.push((arguments[i__4737__auto___27448]));

var G__27449 = (i__4737__auto___27448 + (1));
i__4737__auto___27448 = G__27449;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(reagent.core.class_names.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(reagent.core.class_names.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return reagent.impl.util.class_names.call(null,class$);
}));

(reagent.core.class_names.cljs$core$IFn$_invoke$arity$2 = (function (class1,class2){
return reagent.impl.util.class_names.call(null,class1,class2);
}));

(reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic = (function (class1,class2,others){
return cljs.core.apply.call(null,reagent.impl.util.class_names,class1,class2,others);
}));

/** @this {Function} */
<<<<<<< HEAD
(reagent.core.class_names.cljs$lang$applyTo = (function (seq26985){
var G__26986 = cljs.core.first.call(null,seq26985);
var seq26985__$1 = cljs.core.next.call(null,seq26985);
var G__26987 = cljs.core.first.call(null,seq26985__$1);
var seq26985__$2 = cljs.core.next.call(null,seq26985__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26986,G__26987,seq26985__$2);
=======
(reagent.core.class_names.cljs$lang$applyTo = (function (seq27442){
var G__27443 = cljs.core.first.call(null,seq27442);
var seq27442__$1 = cljs.core.next.call(null,seq27442);
var G__27444 = cljs.core.first.call(null,seq27442__$1);
var seq27442__$2 = cljs.core.next.call(null,seq27442__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27443,G__27444,seq27442__$2);
>>>>>>> 8f3c68a (Initial Commit)
}));

(reagent.core.class_names.cljs$lang$maxFixedArity = (2));

/**
 * Utility function that merges some maps, handling `:class` and `:style`.
 * 
 *   The :class value is always normalized (using `class-names`) even if no
 *   merging is done.
 */
reagent.core.merge_props = (function reagent$core$merge_props(var_args){
<<<<<<< HEAD
var G__26997 = arguments.length;
switch (G__26997) {
=======
var G__27454 = arguments.length;
switch (G__27454) {
>>>>>>> 8f3c68a (Initial Commit)
case 0:
return reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___26999 = arguments.length;
var i__4737__auto___27000 = (0);
while(true){
if((i__4737__auto___27000 < len__4736__auto___26999)){
args_arr__4757__auto__.push((arguments[i__4737__auto___27000]));

var G__27001 = (i__4737__auto___27000 + (1));
i__4737__auto___27000 = G__27001;
=======
var len__4736__auto___27456 = arguments.length;
var i__4737__auto___27457 = (0);
while(true){
if((i__4737__auto___27457 < len__4736__auto___27456)){
args_arr__4757__auto__.push((arguments[i__4737__auto___27457]));

var G__27458 = (i__4737__auto___27457 + (1));
i__4737__auto___27457 = G__27458;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0 = (function (){
return reagent.impl.util.merge_props.call(null);
}));

(reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1 = (function (defaults){
return reagent.impl.util.merge_props.call(null,defaults);
}));

(reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2 = (function (defaults,props){
return reagent.impl.util.merge_props.call(null,defaults,props);
}));

(reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (defaults,props,others){
return cljs.core.apply.call(null,reagent.impl.util.merge_props,defaults,props,others);
}));

/** @this {Function} */
<<<<<<< HEAD
(reagent.core.merge_props.cljs$lang$applyTo = (function (seq26994){
var G__26995 = cljs.core.first.call(null,seq26994);
var seq26994__$1 = cljs.core.next.call(null,seq26994);
var G__26996 = cljs.core.first.call(null,seq26994__$1);
var seq26994__$2 = cljs.core.next.call(null,seq26994__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26995,G__26996,seq26994__$2);
=======
(reagent.core.merge_props.cljs$lang$applyTo = (function (seq27451){
var G__27452 = cljs.core.first.call(null,seq27451);
var seq27451__$1 = cljs.core.next.call(null,seq27451);
var G__27453 = cljs.core.first.call(null,seq27451__$1);
var seq27451__$2 = cljs.core.next.call(null,seq27451__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27452,G__27453,seq27451__$2);
>>>>>>> 8f3c68a (Initial Commit)
}));

(reagent.core.merge_props.cljs$lang$maxFixedArity = (2));

/**
 * Render dirty components immediately.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
reagent.core.flush = (function reagent$core$flush(){
return reagent.impl.batching.flush.call(null);
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
reagent.core.atom = (function reagent$core$atom(var_args){
<<<<<<< HEAD
var G__27005 = arguments.length;
switch (G__27005) {
=======
var G__27462 = arguments.length;
switch (G__27462) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___27007 = arguments.length;
var i__4737__auto___27008 = (0);
while(true){
if((i__4737__auto___27008 < len__4736__auto___27007)){
args_arr__4757__auto__.push((arguments[i__4737__auto___27008]));

var G__27009 = (i__4737__auto___27008 + (1));
i__4737__auto___27008 = G__27009;
=======
var len__4736__auto___27464 = arguments.length;
var i__4737__auto___27465 = (0);
while(true){
if((i__4737__auto___27465 < len__4736__auto___27464)){
args_arr__4757__auto__.push((arguments[i__4737__auto___27465]));

var G__27466 = (i__4737__auto___27465 + (1));
i__4737__auto___27465 = G__27466;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.ratom.atom.call(null,x);
}));

(reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.call(null,reagent.ratom.atom,x,rest);
}));

/** @this {Function} */
<<<<<<< HEAD
(reagent.core.atom.cljs$lang$applyTo = (function (seq27003){
var G__27004 = cljs.core.first.call(null,seq27003);
var seq27003__$1 = cljs.core.next.call(null,seq27003);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27004,seq27003__$1);
=======
(reagent.core.atom.cljs$lang$applyTo = (function (seq27460){
var G__27461 = cljs.core.first.call(null,seq27460);
var seq27460__$1 = cljs.core.next.call(null,seq27460);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27461,seq27460__$1);
>>>>>>> 8f3c68a (Initial Commit)
}));

(reagent.core.atom.cljs$lang$maxFixedArity = (1));

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, `@(track foo bar)` will produce the same result
 *   as `(foo bar)`, but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
reagent.core.track = (function reagent$core$track(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___27012 = arguments.length;
var i__4737__auto___27013 = (0);
while(true){
if((i__4737__auto___27013 < len__4736__auto___27012)){
args__4742__auto__.push((arguments[i__4737__auto___27013]));

var G__27014 = (i__4737__auto___27013 + (1));
i__4737__auto___27013 = G__27014;
=======
var len__4736__auto___27469 = arguments.length;
var i__4737__auto___27470 = (0);
while(true){
if((i__4737__auto___27470 < len__4736__auto___27469)){
args__4742__auto__.push((arguments[i__4737__auto___27470]));

var G__27471 = (i__4737__auto___27470 + (1));
i__4737__auto___27470 = G__27471;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track.call(null,f,args);
}));

(reagent.core.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
<<<<<<< HEAD
(reagent.core.track.cljs$lang$applyTo = (function (seq27010){
var G__27011 = cljs.core.first.call(null,seq27010);
var seq27010__$1 = cljs.core.next.call(null,seq27010);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27011,seq27010__$1);
=======
(reagent.core.track.cljs$lang$applyTo = (function (seq27467){
var G__27468 = cljs.core.first.call(null,seq27467);
var seq27467__$1 = cljs.core.next.call(null,seq27467);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27468,seq27467__$1);
>>>>>>> 8f3c68a (Initial Commit)
}));

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
reagent.core.track_BANG_ = (function reagent$core$track_BANG_(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___27017 = arguments.length;
var i__4737__auto___27018 = (0);
while(true){
if((i__4737__auto___27018 < len__4736__auto___27017)){
args__4742__auto__.push((arguments[i__4737__auto___27018]));

var G__27019 = (i__4737__auto___27018 + (1));
i__4737__auto___27018 = G__27019;
=======
var len__4736__auto___27474 = arguments.length;
var i__4737__auto___27475 = (0);
while(true){
if((i__4737__auto___27475 < len__4736__auto___27474)){
args__4742__auto__.push((arguments[i__4737__auto___27475]));

var G__27476 = (i__4737__auto___27475 + (1));
i__4737__auto___27475 = G__27476;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track_BANG_.call(null,f,args);
}));

(reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
<<<<<<< HEAD
(reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq27015){
var G__27016 = cljs.core.first.call(null,seq27015);
var seq27015__$1 = cljs.core.next.call(null,seq27015);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27016,seq27015__$1);
=======
(reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq27472){
var G__27473 = cljs.core.first.call(null,seq27472);
var seq27472__$1 = cljs.core.next.call(null,seq27472);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27473,seq27472__$1);
>>>>>>> 8f3c68a (Initial Commit)
}));

/**
 * Stop the result of track! from updating.
 */
reagent.core.dispose_BANG_ = (function reagent$core$dispose_BANG_(x){
return reagent.ratom.dispose_BANG_.call(null,x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   ```cljs
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 *   ```
 * 
 *   Probably useful only for passing to child components.
 */
reagent.core.wrap = (function reagent$core$wrap(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___27023 = arguments.length;
var i__4737__auto___27024 = (0);
while(true){
if((i__4737__auto___27024 < len__4736__auto___27023)){
args__4742__auto__.push((arguments[i__4737__auto___27024]));

var G__27025 = (i__4737__auto___27024 + (1));
i__4737__auto___27024 = G__27025;
=======
var len__4736__auto___27480 = arguments.length;
var i__4737__auto___27481 = (0);
while(true){
if((i__4737__auto___27481 < len__4736__auto___27480)){
args__4742__auto__.push((arguments[i__4737__auto___27481]));

var G__27482 = (i__4737__auto___27481 + (1));
i__4737__auto___27481 = G__27482;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_.call(null,reset_fn)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,reset_fn)].join(''),"\n","(clojure.core/ifn? reset-fn)"].join('')));
}

return reagent.ratom.make_wrapper.call(null,value,reset_fn,args);
}));

(reagent.core.wrap.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
<<<<<<< HEAD
(reagent.core.wrap.cljs$lang$applyTo = (function (seq27020){
var G__27021 = cljs.core.first.call(null,seq27020);
var seq27020__$1 = cljs.core.next.call(null,seq27020);
var G__27022 = cljs.core.first.call(null,seq27020__$1);
var seq27020__$2 = cljs.core.next.call(null,seq27020__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27021,G__27022,seq27020__$2);
=======
(reagent.core.wrap.cljs$lang$applyTo = (function (seq27477){
var G__27478 = cljs.core.first.call(null,seq27477);
var seq27477__$1 = cljs.core.next.call(null,seq27477);
var G__27479 = cljs.core.first.call(null,seq27477__$1);
var seq27477__$2 = cljs.core.next.call(null,seq27477__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27478,G__27479,seq27477__$2);
>>>>>>> 8f3c68a (Initial Commit)
}));

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 * 
 *   ```cljs
 *   (let [c (cursor ra [:nested :content])]
 *  ... @c ;; equivalent to (get-in @ra [:nested :content])
 *  ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *  ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *  )
 *   ```
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *   ```cljs
 *   (defn set-get
 *  ([k] (get-in @state k))
 *  ([k v] (swap! state assoc-in k v)))
 *   ```
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   `(cursor state [:foo])` and `(cursor set-get [:foo])`.
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
reagent.core.cursor = (function reagent$core$cursor(src,path){
return reagent.ratom.cursor.call(null,src,path);
});
/**
 * Swaps the value of a to be `(apply f current-value-of-atom args)`.
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
reagent.core.rswap_BANG_ = (function reagent$core$rswap_BANG_(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___27032 = arguments.length;
var i__4737__auto___27033 = (0);
while(true){
if((i__4737__auto___27033 < len__4736__auto___27032)){
args__4742__auto__.push((arguments[i__4737__auto___27033]));

var G__27034 = (i__4737__auto___27033 + (1));
i__4737__auto___27033 = G__27034;
=======
var len__4736__auto___27489 = arguments.length;
var i__4737__auto___27490 = (0);
while(true){
if((i__4737__auto___27490 < len__4736__auto___27489)){
args__4742__auto__.push((arguments[i__4737__auto___27490]));

var G__27491 = (i__4737__auto___27490 + (1));
i__4737__auto___27490 = G__27491;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if((((!((a == null))))?(((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$))))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__4126__auto__ = a.rswapfs;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (a.rswapfs = []);
}
<<<<<<< HEAD
})().push((function (p1__27026_SHARP_){
return cljs.core.apply.call(null,f,p1__27026_SHARP_,args);
=======
})().push((function (p1__27483_SHARP_){
return cljs.core.apply.call(null,f,p1__27483_SHARP_,args);
>>>>>>> 8f3c68a (Initial Commit)
}));
} else {
(a.rswapping = true);

try{cljs.core.swap_BANG_.call(null,a,(function (state){
var s = cljs.core.apply.call(null,f,state,args);
while(true){
<<<<<<< HEAD
var temp__5722__auto__ = (function (){var G__27031 = a;
var G__27031__$1 = (((G__27031 == null))?null:G__27031.rswapfs);
if((G__27031__$1 == null)){
return null;
} else {
return G__27031__$1.shift();
=======
var temp__5722__auto__ = (function (){var G__27488 = a;
var G__27488__$1 = (((G__27488 == null))?null:G__27488.rswapfs);
if((G__27488__$1 == null)){
return null;
} else {
return G__27488__$1.shift();
>>>>>>> 8f3c68a (Initial Commit)
}
})();
if((temp__5722__auto__ == null)){
return s;
} else {
var sf = temp__5722__auto__;
<<<<<<< HEAD
var G__27035 = sf.call(null,s);
s = G__27035;
=======
var G__27492 = sf.call(null,s);
s = G__27492;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
break;
}
}));
}finally {(a.rswapping = false);
}}

return null;
}));

(reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
<<<<<<< HEAD
(reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq27027){
var G__27028 = cljs.core.first.call(null,seq27027);
var seq27027__$1 = cljs.core.next.call(null,seq27027);
var G__27029 = cljs.core.first.call(null,seq27027__$1);
var seq27027__$2 = cljs.core.next.call(null,seq27027__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27028,G__27029,seq27027__$2);
=======
(reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq27484){
var G__27485 = cljs.core.first.call(null,seq27484);
var seq27484__$1 = cljs.core.next.call(null,seq27484);
var G__27486 = cljs.core.first.call(null,seq27484__$1);
var seq27484__$2 = cljs.core.next.call(null,seq27484__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27485,G__27486,seq27484__$2);
>>>>>>> 8f3c68a (Initial Commit)
}));

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
reagent.core.next_tick = (function reagent$core$next_tick(f){
return reagent.impl.batching.do_before_flush.call(null,f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
reagent.core.after_render = (function reagent$core$after_render(f){
return reagent.impl.batching.do_after_render.call(null,f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
reagent.core.partial = (function reagent$core$partial(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___27038 = arguments.length;
var i__4737__auto___27039 = (0);
while(true){
if((i__4737__auto___27039 < len__4736__auto___27038)){
args__4742__auto__.push((arguments[i__4737__auto___27039]));

var G__27040 = (i__4737__auto___27039 + (1));
i__4737__auto___27039 = G__27040;
=======
var len__4736__auto___27495 = arguments.length;
var i__4737__auto___27496 = (0);
while(true){
if((i__4737__auto___27496 < len__4736__auto___27495)){
args__4742__auto__.push((arguments[i__4737__auto___27496]));

var G__27497 = (i__4737__auto___27496 + (1));
i__4737__auto___27496 = G__27497;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return reagent.impl.util.make_partial_fn.call(null,f,args);
}));

(reagent.core.partial.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
<<<<<<< HEAD
(reagent.core.partial.cljs$lang$applyTo = (function (seq27036){
var G__27037 = cljs.core.first.call(null,seq27036);
var seq27036__$1 = cljs.core.next.call(null,seq27036);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27037,seq27036__$1);
}));


//# sourceMappingURL=core.js.map?rel=1602979377040
=======
(reagent.core.partial.cljs$lang$applyTo = (function (seq27493){
var G__27494 = cljs.core.first.call(null,seq27493);
var seq27493__$1 = cljs.core.next.call(null,seq27493);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27494,seq27493__$1);
}));


//# sourceMappingURL=core.js.map?rel=1608004502733
>>>>>>> 8f3c68a (Initial Commit)
