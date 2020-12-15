// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.analyzer.api');
goog.require('cljs.core');
goog.require('cljs.analyzer');
goog.require('cljs.env');
/**
 * Creates an empty compilation state Atom<Map>. The optional opts arg is a map
 * representing the compiler configuration. See the documentation
 * for details: https://clojurescript.org/reference/compiler-options
 */
cljs.analyzer.api.empty_state = (function cljs$analyzer$api$empty_state(var_args){
<<<<<<< HEAD
var G__24236 = arguments.length;
switch (G__24236) {
=======
var G__24573 = arguments.length;
switch (G__24573) {
>>>>>>> 8f3c68a (Initial Commit)
case 0:
return cljs.analyzer.api.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
if((!((cljs.env._STAR_compiler_STAR_ == null)))){
return cljs.env._STAR_compiler_STAR_;
} else {
return cljs.env.default_compiler_env.call(null);
}
}));

(cljs.analyzer.api.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cljs.env.default_compiler_env.call(null,opts);
}));

(cljs.analyzer.api.empty_state.cljs$lang$maxFixedArity = 1);

/**
 * Return the current compiler state atom.
 */
cljs.analyzer.api.current_state = (function cljs$analyzer$api$current_state(){
return cljs.env._STAR_compiler_STAR_;
});
/**
 * Return the current file under analysis or compilation.
 */
cljs.analyzer.api.current_file = (function cljs$analyzer$api$current_file(){
return cljs.analyzer._STAR_cljs_file_STAR_;
});
/**
 * Return the current ns under analysis or compilation.
 */
cljs.analyzer.api.current_ns = (function cljs$analyzer$api$current_ns(){
return cljs.analyzer._STAR_cljs_ns_STAR_;
});
<<<<<<< HEAD
var ret__4785__auto___24242 = (function (){
=======
var ret__4785__auto___24579 = (function (){
>>>>>>> 8f3c68a (Initial Commit)
/**
 * Run the body with the given compilation state Atom<Map>.
 */
cljs.analyzer.api.with_state = (function cljs$analyzer$api$with_state(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24243 = arguments.length;
var i__4737__auto___24244 = (0);
while(true){
if((i__4737__auto___24244 < len__4736__auto___24243)){
args__4742__auto__.push((arguments[i__4737__auto___24244]));

var G__24245 = (i__4737__auto___24244 + (1));
i__4737__auto___24244 = G__24245;
=======
var len__4736__auto___24580 = arguments.length;
var i__4737__auto___24581 = (0);
while(true){
if((i__4737__auto___24581 < len__4736__auto___24580)){
args__4742__auto__.push((arguments[i__4737__auto___24581]));

var G__24582 = (i__4737__auto___24581 + (1));
i__4737__auto___24581 = G__24582;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.api.with_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.analyzer.api.with_state.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,state,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.env","with-compiler-env","cljs.env/with-compiler-env",-1219561832,null),null,(1),null)),(new cljs.core.List(null,state,null,(1),null)),body)));
}));

(cljs.analyzer.api.with_state.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
<<<<<<< HEAD
(cljs.analyzer.api.with_state.cljs$lang$applyTo = (function (seq24238){
var G__24239 = cljs.core.first.call(null,seq24238);
var seq24238__$1 = cljs.core.next.call(null,seq24238);
var G__24240 = cljs.core.first.call(null,seq24238__$1);
var seq24238__$2 = cljs.core.next.call(null,seq24238__$1);
var G__24241 = cljs.core.first.call(null,seq24238__$2);
var seq24238__$3 = cljs.core.next.call(null,seq24238__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24239,G__24240,G__24241,seq24238__$3);
=======
(cljs.analyzer.api.with_state.cljs$lang$applyTo = (function (seq24575){
var G__24576 = cljs.core.first.call(null,seq24575);
var seq24575__$1 = cljs.core.next.call(null,seq24575);
var G__24577 = cljs.core.first.call(null,seq24575__$1);
var seq24575__$2 = cljs.core.next.call(null,seq24575__$1);
var G__24578 = cljs.core.first.call(null,seq24575__$2);
var seq24575__$3 = cljs.core.next.call(null,seq24575__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24576,G__24577,G__24578,seq24575__$3);
>>>>>>> 8f3c68a (Initial Commit)
}));

return null;
})()
;
(cljs.analyzer.api.with_state.cljs$lang$macro = true);

/**
 * Creates an empty analysis environment.
 */
cljs.analyzer.api.empty_env = (function cljs$analyzer$api$empty_env(){
return cljs.analyzer.empty_env.call(null);
});
<<<<<<< HEAD
var ret__4785__auto___24249 = (function (){
=======
var ret__4785__auto___24586 = (function (){
>>>>>>> 8f3c68a (Initial Commit)
/**
 * Disable analyzer warnings for any analysis executed in body.
 */
cljs.analyzer.api.no_warn = (function cljs$analyzer$api$no_warn(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24250 = arguments.length;
var i__4737__auto___24251 = (0);
while(true){
if((i__4737__auto___24251 < len__4736__auto___24250)){
args__4742__auto__.push((arguments[i__4737__auto___24251]));

var G__24252 = (i__4737__auto___24251 + (1));
i__4737__auto___24251 = G__24252;
=======
var len__4736__auto___24587 = arguments.length;
var i__4737__auto___24588 = (0);
while(true){
if((i__4737__auto___24588 < len__4736__auto___24587)){
args__4742__auto__.push((arguments[i__4737__auto___24588]));

var G__24589 = (i__4737__auto___24588 + (1));
i__4737__auto___24588 = G__24589;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
var no_warnings = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-warnings*","cljs.analyzer/*cljs-warnings*",-289667730,null),null,(1),null)),(new cljs.core.List(null,no_warnings,null,(1),null)))))),null,(1),null)),body)));
}));

(cljs.analyzer.api.no_warn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
<<<<<<< HEAD
(cljs.analyzer.api.no_warn.cljs$lang$applyTo = (function (seq24246){
var G__24247 = cljs.core.first.call(null,seq24246);
var seq24246__$1 = cljs.core.next.call(null,seq24246);
var G__24248 = cljs.core.first.call(null,seq24246__$1);
var seq24246__$2 = cljs.core.next.call(null,seq24246__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24247,G__24248,seq24246__$2);
=======
(cljs.analyzer.api.no_warn.cljs$lang$applyTo = (function (seq24583){
var G__24584 = cljs.core.first.call(null,seq24583);
var seq24583__$1 = cljs.core.next.call(null,seq24583);
var G__24585 = cljs.core.first.call(null,seq24583__$1);
var seq24583__$2 = cljs.core.next.call(null,seq24583__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24584,G__24585,seq24583__$2);
>>>>>>> 8f3c68a (Initial Commit)
}));

return null;
})()
;
(cljs.analyzer.api.no_warn.cljs$lang$macro = true);

/**
 * Test if the given warning-type is enabled.
 */
cljs.analyzer.api.warning_enabled_QMARK_ = (function cljs$analyzer$api$warning_enabled_QMARK_(warning_type){
return cljs.analyzer._STAR_cljs_warnings_STAR_.call(null,warning_type);
});
/**
 * The default warning handler.
 * 
 * Outputs the warning messages to *err*.
 */
cljs.analyzer.api.default_warning_handler = (function cljs$analyzer$api$default_warning_handler(warning_type,env,extra){
return cljs.analyzer.default_warning_handler.call(null,warning_type,env,extra);
});
<<<<<<< HEAD
var ret__4785__auto___24257 = (function (){
=======
var ret__4785__auto___24594 = (function (){
>>>>>>> 8f3c68a (Initial Commit)
/**
 * Helper macro for custom handling of emitted warnings. Handlers should be
 * a vector of functions. The signature of these functions is
 * [warn-type env warn-info]. warn-type is a keyword describing the warning,
 * env is the analysis environment, and warn-info is a map of extra useful
 * information for a particular warning type.
 */
cljs.analyzer.api.with_warning_handlers = (function cljs$analyzer$api$with_warning_handlers(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24258 = arguments.length;
var i__4737__auto___24259 = (0);
while(true){
if((i__4737__auto___24259 < len__4736__auto___24258)){
args__4742__auto__.push((arguments[i__4737__auto___24259]));

var G__24260 = (i__4737__auto___24259 + (1));
i__4737__auto___24259 = G__24260;
=======
var len__4736__auto___24595 = arguments.length;
var i__4737__auto___24596 = (0);
while(true){
if((i__4737__auto___24596 < len__4736__auto___24595)){
args__4742__auto__.push((arguments[i__4737__auto___24596]));

var G__24597 = (i__4737__auto___24596 + (1));
i__4737__auto___24596 = G__24597;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.api.with_warning_handlers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.analyzer.api.with_warning_handlers.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,handlers,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","with-warning-handlers","cljs.analyzer/with-warning-handlers",-107222204,null),null,(1),null)),(new cljs.core.List(null,handlers,null,(1),null)),body)));
}));

(cljs.analyzer.api.with_warning_handlers.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
<<<<<<< HEAD
(cljs.analyzer.api.with_warning_handlers.cljs$lang$applyTo = (function (seq24253){
var G__24254 = cljs.core.first.call(null,seq24253);
var seq24253__$1 = cljs.core.next.call(null,seq24253);
var G__24255 = cljs.core.first.call(null,seq24253__$1);
var seq24253__$2 = cljs.core.next.call(null,seq24253__$1);
var G__24256 = cljs.core.first.call(null,seq24253__$2);
var seq24253__$3 = cljs.core.next.call(null,seq24253__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24254,G__24255,G__24256,seq24253__$3);
=======
(cljs.analyzer.api.with_warning_handlers.cljs$lang$applyTo = (function (seq24590){
var G__24591 = cljs.core.first.call(null,seq24590);
var seq24590__$1 = cljs.core.next.call(null,seq24590);
var G__24592 = cljs.core.first.call(null,seq24590__$1);
var seq24590__$2 = cljs.core.next.call(null,seq24590__$1);
var G__24593 = cljs.core.first.call(null,seq24590__$2);
var seq24590__$3 = cljs.core.next.call(null,seq24590__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24591,G__24592,G__24593,seq24590__$3);
>>>>>>> 8f3c68a (Initial Commit)
}));

return null;
})()
;
(cljs.analyzer.api.with_warning_handlers.cljs$lang$macro = true);

/**
 * Helper for generating the standard analyzer messages for warnings. Should be
 *   passed warn-type and warn-info. See with-warning-handlers.
 */
cljs.analyzer.api.warning_message = (function cljs$analyzer$api$warning_message(warn_type,warn_info){
return cljs.analyzer.error_message.call(null,warn_type,warn_info);
});
/**
 * Get the enabled warning types.
 */
cljs.analyzer.api.enabled_warnings = (function cljs$analyzer$api$enabled_warnings(){
return cljs.analyzer._STAR_cljs_warnings_STAR_;
});
/**
 * Return the compiler options from compiler state.
 */
cljs.analyzer.api.get_options = (function cljs$analyzer$api$get_options(var_args){
<<<<<<< HEAD
var G__24262 = arguments.length;
switch (G__24262) {
=======
var G__24599 = arguments.length;
switch (G__24599) {
>>>>>>> 8f3c68a (Initial Commit)
case 0:
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.get_options.call(null,cljs.analyzer.api.current_state.call(null));
}));

(cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"options","options",99638489));
}));

(cljs.analyzer.api.get_options.cljs$lang$maxFixedArity = 1);

/**
 * Return the currently computed Google Closure js dependency index from the
 *   compiler state.
 */
cljs.analyzer.api.get_js_index = (function cljs$analyzer$api$get_js_index(var_args){
<<<<<<< HEAD
var G__24265 = arguments.length;
switch (G__24265) {
=======
var G__24602 = arguments.length;
switch (G__24602) {
>>>>>>> 8f3c68a (Initial Commit)
case 0:
return cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.get_js_index.call(null,cljs.analyzer.api.current_state.call(null));
}));

(cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
}));

(cljs.analyzer.api.get_js_index.cljs$lang$maxFixedArity = 1);

/**
 * ClojureScript's default analysis passes.
 */
cljs.analyzer.api.default_passes = cljs.analyzer.default_passes;
<<<<<<< HEAD
var ret__4785__auto___24271 = (function (){
=======
var ret__4785__auto___24608 = (function (){
>>>>>>> 8f3c68a (Initial Commit)
/**
 * Evaluate the body with the provided sequence of compiler passes.
 */
cljs.analyzer.api.with_passes = (function cljs$analyzer$api$with_passes(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24272 = arguments.length;
var i__4737__auto___24273 = (0);
while(true){
if((i__4737__auto___24273 < len__4736__auto___24272)){
args__4742__auto__.push((arguments[i__4737__auto___24273]));

var G__24274 = (i__4737__auto___24273 + (1));
i__4737__auto___24273 = G__24274;
=======
var len__4736__auto___24609 = arguments.length;
var i__4737__auto___24610 = (0);
while(true){
if((i__4737__auto___24610 < len__4736__auto___24609)){
args__4742__auto__.push((arguments[i__4737__auto___24610]));

var G__24611 = (i__4737__auto___24610 + (1));
i__4737__auto___24610 = G__24611;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.api.with_passes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.analyzer.api.with_passes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,passes,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*passes*","cljs.analyzer/*passes*",1273642043,null),null,(1),null)),(new cljs.core.List(null,passes,null,(1),null)))))),null,(1),null)),body)));
}));

(cljs.analyzer.api.with_passes.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
<<<<<<< HEAD
(cljs.analyzer.api.with_passes.cljs$lang$applyTo = (function (seq24267){
var G__24268 = cljs.core.first.call(null,seq24267);
var seq24267__$1 = cljs.core.next.call(null,seq24267);
var G__24269 = cljs.core.first.call(null,seq24267__$1);
var seq24267__$2 = cljs.core.next.call(null,seq24267__$1);
var G__24270 = cljs.core.first.call(null,seq24267__$2);
var seq24267__$3 = cljs.core.next.call(null,seq24267__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24268,G__24269,G__24270,seq24267__$3);
=======
(cljs.analyzer.api.with_passes.cljs$lang$applyTo = (function (seq24604){
var G__24605 = cljs.core.first.call(null,seq24604);
var seq24604__$1 = cljs.core.next.call(null,seq24604);
var G__24606 = cljs.core.first.call(null,seq24604__$1);
var seq24604__$2 = cljs.core.next.call(null,seq24604__$1);
var G__24607 = cljs.core.first.call(null,seq24604__$2);
var seq24604__$3 = cljs.core.next.call(null,seq24604__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24605,G__24606,G__24607,seq24604__$3);
>>>>>>> 8f3c68a (Initial Commit)
}));

return null;
})()
;
(cljs.analyzer.api.with_passes.cljs$lang$macro = true);

/**
 * Given an analysis environment resolve a var. Analogous to
 * clojure.core/resolve
 */
cljs.analyzer.api.resolve = (function cljs$analyzer$api$resolve(env,sym){
if(cljs.core.map_QMARK_.call(null,env)){
} else {
throw (new Error("Assert failed: (map? env)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

<<<<<<< HEAD
try{var _STAR_private_var_access_nowarn_STAR__orig_val__24276 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__24277 = true;
(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__24277);

try{return cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
}finally {(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__24276);
}}catch (e24275){var e = e24275;
=======
try{var _STAR_private_var_access_nowarn_STAR__orig_val__24613 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__24614 = true;
(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__24614);

try{return cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
}finally {(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__24613);
}}catch (e24612){var e = e24612;
>>>>>>> 8f3c68a (Initial Commit)
return cljs.analyzer.resolve_macro_var.call(null,env,sym);
}});
/**
 * Return all namespaces. Analagous to clojure.core/all-ns but
 *   returns symbols identifying namespaces not Namespace instances.
 */
cljs.analyzer.api.all_ns = (function cljs$analyzer$api$all_ns(var_args){
<<<<<<< HEAD
var G__24279 = arguments.length;
switch (G__24279) {
=======
var G__24616 = arguments.length;
switch (G__24616) {
>>>>>>> 8f3c68a (Initial Commit)
case 0:
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.all_ns.call(null,cljs.env._STAR_compiler_STAR_);
}));

(cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.keys.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)));
}));

(cljs.analyzer.api.all_ns.cljs$lang$maxFixedArity = 1);

/**
 * Given a namespace return the corresponding namespace analysis map. Analagous
 *   to clojure.core/find-ns.
 */
cljs.analyzer.api.find_ns = (function cljs$analyzer$api$find_ns(var_args){
<<<<<<< HEAD
var G__24282 = arguments.length;
switch (G__24282) {
=======
var G__24619 = arguments.length;
switch (G__24619) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1 = (function (sym){
return cljs.analyzer.api.find_ns.call(null,cljs.env._STAR_compiler_STAR_,sym);
}));

(cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2 = (function (state,sym){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),sym], null));
}));

(cljs.analyzer.api.find_ns.cljs$lang$maxFixedArity = 2);

/**
 * Given a namespace return all the var analysis maps. Analagous to
 *   clojure.core/ns-interns but returns var analysis maps not vars.
 */
cljs.analyzer.api.ns_interns = (function cljs$analyzer$api$ns_interns(var_args){
<<<<<<< HEAD
var G__24285 = arguments.length;
switch (G__24285) {
=======
var G__24622 = arguments.length;
switch (G__24622) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.ns_interns.call(null,cljs.env._STAR_compiler_STAR_,ns);
}));

(cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)));
}));

(cljs.analyzer.api.ns_interns.cljs$lang$maxFixedArity = 2);

/**
 * Given a namespace return all the public var analysis maps. Analagous to
 *   clojure.core/ns-publics but returns var analysis maps not vars.
 */
cljs.analyzer.api.ns_publics = (function cljs$analyzer$api$ns_publics(var_args){
<<<<<<< HEAD
var G__24288 = arguments.length;
switch (G__24288) {
=======
var G__24625 = arguments.length;
switch (G__24625) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.ns_publics.call(null,cljs.env._STAR_compiler_STAR_,ns);
}));

(cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

<<<<<<< HEAD
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__24289){
var vec__24290 = p__24289;
var k = cljs.core.nth.call(null,vec__24290,(0),null);
var v = cljs.core.nth.call(null,vec__24290,(1),null);
=======
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__24626){
var vec__24627 = p__24626;
var k = cljs.core.nth.call(null,vec__24627,(0),null);
var v = cljs.core.nth.call(null,vec__24627,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))));
}));

(cljs.analyzer.api.ns_publics.cljs$lang$maxFixedArity = 2);

/**
 * Given a namespace and a symbol return the corresponding var analysis map.
 *   Analagous to clojure.core/ns-resolve but returns var analysis map not Var.
 */
cljs.analyzer.api.ns_resolve = (function cljs$analyzer$api$ns_resolve(var_args){
<<<<<<< HEAD
var G__24295 = arguments.length;
switch (G__24295) {
=======
var G__24632 = arguments.length;
switch (G__24632) {
>>>>>>> 8f3c68a (Initial Commit)
case 2:
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2 = (function (ns,sym){
return cljs.analyzer.api.ns_resolve.call(null,cljs.env._STAR_compiler_STAR_,ns,sym);
}));

(cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3 = (function (state,ns,sym){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null));
}));

(cljs.analyzer.api.ns_resolve.cljs$lang$maxFixedArity = 3);

/**
 * Removes the namespace named by the symbol.
 */
cljs.analyzer.api.remove_ns = (function cljs$analyzer$api$remove_ns(var_args){
<<<<<<< HEAD
var G__24298 = arguments.length;
switch (G__24298) {
=======
var G__24635 = arguments.length;
switch (G__24635) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.remove_ns.call(null,cljs.env._STAR_compiler_STAR_,ns);
}));

(cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),cljs.core.dissoc,ns);
}));

(cljs.analyzer.api.remove_ns.cljs$lang$maxFixedArity = 2);

<<<<<<< HEAD
var ret__4785__auto___24304 = (function (){
=======
var ret__4785__auto___24641 = (function (){
>>>>>>> 8f3c68a (Initial Commit)
/**
 * Binds cljs.analyzer/*cljs-ns* to 'cljs.user and uses the given compilation
 *   environment atom and runs body.
 */
cljs.analyzer.api.in_cljs_user = (function cljs$analyzer$api$in_cljs_user(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24305 = arguments.length;
var i__4737__auto___24306 = (0);
while(true){
if((i__4737__auto___24306 < len__4736__auto___24305)){
args__4742__auto__.push((arguments[i__4737__auto___24306]));

var G__24307 = (i__4737__auto___24306 + (1));
i__4737__auto___24306 = G__24307;
=======
var len__4736__auto___24642 = arguments.length;
var i__4737__auto___24643 = (0);
while(true){
if((i__4737__auto___24643 < len__4736__auto___24642)){
args__4742__auto__.push((arguments[i__4737__auto___24643]));

var G__24644 = (i__4737__auto___24643 + (1));
i__4737__auto___24643 = G__24644;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.analyzer","*cljs-ns*","cljs.analyzer/*cljs-ns*",1242529789,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.env","with-compiler-env","cljs.env/with-compiler-env",-1219561832,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),body))),null,(1),null)))));
}));

(cljs.analyzer.api.in_cljs_user.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
<<<<<<< HEAD
(cljs.analyzer.api.in_cljs_user.cljs$lang$applyTo = (function (seq24300){
var G__24301 = cljs.core.first.call(null,seq24300);
var seq24300__$1 = cljs.core.next.call(null,seq24300);
var G__24302 = cljs.core.first.call(null,seq24300__$1);
var seq24300__$2 = cljs.core.next.call(null,seq24300__$1);
var G__24303 = cljs.core.first.call(null,seq24300__$2);
var seq24300__$3 = cljs.core.next.call(null,seq24300__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24301,G__24302,G__24303,seq24300__$3);
=======
(cljs.analyzer.api.in_cljs_user.cljs$lang$applyTo = (function (seq24637){
var G__24638 = cljs.core.first.call(null,seq24637);
var seq24637__$1 = cljs.core.next.call(null,seq24637);
var G__24639 = cljs.core.first.call(null,seq24637__$1);
var seq24637__$2 = cljs.core.next.call(null,seq24637__$1);
var G__24640 = cljs.core.first.call(null,seq24637__$2);
var seq24637__$3 = cljs.core.next.call(null,seq24637__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24638,G__24639,G__24640,seq24637__$3);
>>>>>>> 8f3c68a (Initial Commit)
}));

return null;
})()
;
(cljs.analyzer.api.in_cljs_user.cljs$lang$macro = true);


<<<<<<< HEAD
//# sourceMappingURL=api.js.map?rel=1602979374903
=======
//# sourceMappingURL=api.js.map?rel=1608004500191
>>>>>>> 8f3c68a (Initial Commit)
