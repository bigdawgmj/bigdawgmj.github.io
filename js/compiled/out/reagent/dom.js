// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
reagent.dom.node$module$react_dom = require('react-dom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.node$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
<<<<<<< HEAD
var _STAR_always_update_STAR__orig_val__26919 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26920 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26920);

try{return reagent.dom.node$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__26921 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26922 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26922);
=======
var _STAR_always_update_STAR__orig_val__27376 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__27377 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__27377);

try{return reagent.dom.node$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__27378 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__27379 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__27379);
>>>>>>> 8f3c68a (Initial Commit)

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
<<<<<<< HEAD
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26921);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26919);
=======
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__27378);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__27376);
>>>>>>> 8f3c68a (Initial Commit)
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
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
reagent.dom.render = (function reagent$dom$render(var_args){
<<<<<<< HEAD
var G__26924 = arguments.length;
switch (G__26924) {
=======
var G__27381 = arguments.length;
switch (G__27381) {
>>>>>>> 8f3c68a (Initial Commit)
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.node$module$react_dom.findDOMNode(this$);
});
(reagent.impl.template.find_dom_node = reagent.dom.dom_node);
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
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

<<<<<<< HEAD
var seq__26926_26930 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__26927_26931 = null;
var count__26928_26932 = (0);
var i__26929_26933 = (0);
while(true){
if((i__26929_26933 < count__26928_26932)){
var v_26934 = cljs.core._nth.call(null,chunk__26927_26931,i__26929_26933);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_26934);


var G__26935 = seq__26926_26930;
var G__26936 = chunk__26927_26931;
var G__26937 = count__26928_26932;
var G__26938 = (i__26929_26933 + (1));
seq__26926_26930 = G__26935;
chunk__26927_26931 = G__26936;
count__26928_26932 = G__26937;
i__26929_26933 = G__26938;
continue;
} else {
var temp__5720__auto___26939 = cljs.core.seq.call(null,seq__26926_26930);
if(temp__5720__auto___26939){
var seq__26926_26940__$1 = temp__5720__auto___26939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26926_26940__$1)){
var c__4556__auto___26941 = cljs.core.chunk_first.call(null,seq__26926_26940__$1);
var G__26942 = cljs.core.chunk_rest.call(null,seq__26926_26940__$1);
var G__26943 = c__4556__auto___26941;
var G__26944 = cljs.core.count.call(null,c__4556__auto___26941);
var G__26945 = (0);
seq__26926_26930 = G__26942;
chunk__26927_26931 = G__26943;
count__26928_26932 = G__26944;
i__26929_26933 = G__26945;
continue;
} else {
var v_26946 = cljs.core.first.call(null,seq__26926_26940__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_26946);


var G__26947 = cljs.core.next.call(null,seq__26926_26940__$1);
var G__26948 = null;
var G__26949 = (0);
var G__26950 = (0);
seq__26926_26930 = G__26947;
chunk__26927_26931 = G__26948;
count__26928_26932 = G__26949;
i__26929_26933 = G__26950;
=======
var seq__27383_27387 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__27384_27388 = null;
var count__27385_27389 = (0);
var i__27386_27390 = (0);
while(true){
if((i__27386_27390 < count__27385_27389)){
var v_27391 = cljs.core._nth.call(null,chunk__27384_27388,i__27386_27390);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_27391);


var G__27392 = seq__27383_27387;
var G__27393 = chunk__27384_27388;
var G__27394 = count__27385_27389;
var G__27395 = (i__27386_27390 + (1));
seq__27383_27387 = G__27392;
chunk__27384_27388 = G__27393;
count__27385_27389 = G__27394;
i__27386_27390 = G__27395;
continue;
} else {
var temp__5720__auto___27396 = cljs.core.seq.call(null,seq__27383_27387);
if(temp__5720__auto___27396){
var seq__27383_27397__$1 = temp__5720__auto___27396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27383_27397__$1)){
var c__4556__auto___27398 = cljs.core.chunk_first.call(null,seq__27383_27397__$1);
var G__27399 = cljs.core.chunk_rest.call(null,seq__27383_27397__$1);
var G__27400 = c__4556__auto___27398;
var G__27401 = cljs.core.count.call(null,c__4556__auto___27398);
var G__27402 = (0);
seq__27383_27387 = G__27399;
chunk__27384_27388 = G__27400;
count__27385_27389 = G__27401;
i__27386_27390 = G__27402;
continue;
} else {
var v_27403 = cljs.core.first.call(null,seq__27383_27397__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_27403);


var G__27404 = cljs.core.next.call(null,seq__27383_27397__$1);
var G__27405 = null;
var G__27406 = (0);
var G__27407 = (0);
seq__27383_27387 = G__27404;
chunk__27384_27388 = G__27405;
count__27385_27389 = G__27406;
i__27386_27390 = G__27407;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

<<<<<<< HEAD
//# sourceMappingURL=dom.js.map?rel=1602979376966
=======
//# sourceMappingURL=dom.js.map?rel=1608004502654
>>>>>>> 8f3c68a (Initial Commit)
