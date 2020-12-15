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
var G__29220__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29221__i = 0, G__29221__a = new Array(arguments.length -  0);
while (G__29221__i < G__29221__a.length) {G__29221__a[G__29221__i] = arguments[G__29221__i + 0]; ++G__29221__i;}
  args = new cljs.core.IndexedSeq(G__29221__a,0,null);
} 
return G__29220__delegate.call(this,args);};
G__29220.cljs$lang$maxFixedArity = 0;
G__29220.cljs$lang$applyTo = (function (arglist__29222){
var args = cljs.core.seq(arglist__29222);
return G__29220__delegate(args);
});
G__29220.cljs$core$IFn$_invoke$arity$variadic = G__29220__delegate;
return G__29220;
})()
);

(o.error = (function() { 
var G__29223__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29224__i = 0, G__29224__a = new Array(arguments.length -  0);
while (G__29224__i < G__29224__a.length) {G__29224__a[G__29224__i] = arguments[G__29224__i + 0]; ++G__29224__i;}
  args = new cljs.core.IndexedSeq(G__29224__a,0,null);
} 
return G__29223__delegate.call(this,args);};
G__29223.cljs$lang$maxFixedArity = 0;
G__29223.cljs$lang$applyTo = (function (arglist__29225){
var args = cljs.core.seq(arglist__29225);
return G__29223__delegate(args);
});
G__29223.cljs$core$IFn$_invoke$arity$variadic = G__29223__delegate;
return G__29223;
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

//# sourceMappingURL=debug.js.map?rel=1608011913935
