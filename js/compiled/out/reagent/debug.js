// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__26130__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26131__i = 0, G__26131__a = new Array(arguments.length -  0);
while (G__26131__i < G__26131__a.length) {G__26131__a[G__26131__i] = arguments[G__26131__i + 0]; ++G__26131__i;}
  args = new cljs.core.IndexedSeq(G__26131__a,0,null);
} 
return G__26130__delegate.call(this,args);};
G__26130.cljs$lang$maxFixedArity = 0;
G__26130.cljs$lang$applyTo = (function (arglist__26132){
var args = cljs.core.seq(arglist__26132);
return G__26130__delegate(args);
});
G__26130.cljs$core$IFn$_invoke$arity$variadic = G__26130__delegate;
return G__26130;
})()
);

(o.error = (function() { 
var G__26133__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26133 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26134__i = 0, G__26134__a = new Array(arguments.length -  0);
while (G__26134__i < G__26134__a.length) {G__26134__a[G__26134__i] = arguments[G__26134__i + 0]; ++G__26134__i;}
  args = new cljs.core.IndexedSeq(G__26134__a,0,null);
} 
return G__26133__delegate.call(this,args);};
G__26133.cljs$lang$maxFixedArity = 0;
G__26133.cljs$lang$applyTo = (function (arglist__26135){
var args = cljs.core.seq(arglist__26135);
return G__26133__delegate(args);
});
G__26133.cljs$core$IFn$_invoke$arity$variadic = G__26133__delegate;
return G__26133;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1608009508797
