// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.Uri');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!((self__.cached == null)))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
(self__.cached = x);
}

return x;
}
}));

(cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true);

(cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar");

(cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.spec.gen.alpha/LazyVar");
}));

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24321 = arguments.length;
var i__4737__auto___24322 = (0);
while(true){
if((i__4737__auto___24322 < len__4736__auto___24321)){
args__4742__auto__.push((arguments[i__4737__auto___24322]));

var G__24323 = (i__4737__auto___24322 + (1));
i__4737__auto___24322 = G__24323;
=======
var len__4736__auto___24658 = arguments.length;
var i__4737__auto___24659 = (0);
while(true){
if((i__4737__auto___24659 < len__4736__auto___24658)){
args__4742__auto__.push((arguments[i__4737__auto___24659]));

var G__24660 = (i__4737__auto___24659 + (1));
i__4737__auto___24659 = G__24660;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
}));

(cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq24320){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24320));
=======
(cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq24657){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24657));
>>>>>>> 8f3c68a (Initial Commit)
}));

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24325 = arguments.length;
var i__4737__auto___24326 = (0);
while(true){
if((i__4737__auto___24326 < len__4736__auto___24325)){
args__4742__auto__.push((arguments[i__4737__auto___24326]));

var G__24327 = (i__4737__auto___24326 + (1));
i__4737__auto___24326 = G__24327;
=======
var len__4736__auto___24662 = arguments.length;
var i__4737__auto___24663 = (0);
while(true){
if((i__4737__auto___24663 < len__4736__auto___24662)){
args__4742__auto__.push((arguments[i__4737__auto___24663]));

var G__24664 = (i__4737__auto___24663 + (1));
i__4737__auto___24663 = G__24664;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
}));

(cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq24324){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24324));
}));

var g_QMARK__24328 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq24661){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24661));
}));

var g_QMARK__24665 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," never required"].join('')));
}
}),null));
<<<<<<< HEAD
var g_24329 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
var g_24666 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," never required"].join('')));
}
}),null));
<<<<<<< HEAD
var mkg_24330 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
var mkg_24667 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.generator_QMARK_ = (function cljs$spec$gen$alpha$generator_QMARK_(x){
<<<<<<< HEAD
return cljs.core.deref.call(null,g_QMARK__24328).call(null,x);
});

cljs.spec.gen.alpha.generator = (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_24330).call(null,gfn);
=======
return cljs.core.deref.call(null,g_QMARK__24665).call(null,x);
});

cljs.spec.gen.alpha.generator = (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_24667).call(null,gfn);
>>>>>>> 8f3c68a (Initial Commit)
});

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = (function cljs$spec$gen$alpha$generate(generator){
<<<<<<< HEAD
return cljs.core.deref.call(null,g_24329).call(null,generator);
=======
return cljs.core.deref.call(null,g_24666).call(null,generator);
>>>>>>> 8f3c68a (Initial Commit)
});
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
<<<<<<< HEAD
var g__20971__auto___24351 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
var g__20971__auto___24688 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24352 = arguments.length;
var i__4737__auto___24353 = (0);
while(true){
if((i__4737__auto___24353 < len__4736__auto___24352)){
args__4742__auto__.push((arguments[i__4737__auto___24353]));

var G__24354 = (i__4737__auto___24353 + (1));
i__4737__auto___24353 = G__24354;
=======
var len__4736__auto___24689 = arguments.length;
var i__4737__auto___24690 = (0);
while(true){
if((i__4737__auto___24690 < len__4736__auto___24689)){
args__4742__auto__.push((arguments[i__4737__auto___24690]));

var G__24691 = (i__4737__auto___24690 + (1));
i__4737__auto___24690 = G__24691;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24351),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24688),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = (function (seq24331){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24331));
}));


var g__20971__auto___24355 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = (function (seq24668){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24668));
}));


var g__20971__auto___24692 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = (function cljs$spec$gen$alpha$list(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24356 = arguments.length;
var i__4737__auto___24357 = (0);
while(true){
if((i__4737__auto___24357 < len__4736__auto___24356)){
args__4742__auto__.push((arguments[i__4737__auto___24357]));

var G__24358 = (i__4737__auto___24357 + (1));
i__4737__auto___24357 = G__24358;
=======
var len__4736__auto___24693 = arguments.length;
var i__4737__auto___24694 = (0);
while(true){
if((i__4737__auto___24694 < len__4736__auto___24693)){
args__4742__auto__.push((arguments[i__4737__auto___24694]));

var G__24695 = (i__4737__auto___24694 + (1));
i__4737__auto___24694 = G__24695;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24355),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24692),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.list.cljs$lang$applyTo = (function (seq24332){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24332));
}));


var g__20971__auto___24359 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.list.cljs$lang$applyTo = (function (seq24669){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24669));
}));


var g__20971__auto___24696 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = (function cljs$spec$gen$alpha$map(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24360 = arguments.length;
var i__4737__auto___24361 = (0);
while(true){
if((i__4737__auto___24361 < len__4736__auto___24360)){
args__4742__auto__.push((arguments[i__4737__auto___24361]));

var G__24362 = (i__4737__auto___24361 + (1));
i__4737__auto___24361 = G__24362;
=======
var len__4736__auto___24697 = arguments.length;
var i__4737__auto___24698 = (0);
while(true){
if((i__4737__auto___24698 < len__4736__auto___24697)){
args__4742__auto__.push((arguments[i__4737__auto___24698]));

var G__24699 = (i__4737__auto___24698 + (1));
i__4737__auto___24698 = G__24699;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24359),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24696),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.map.cljs$lang$applyTo = (function (seq24333){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24333));
}));


var g__20971__auto___24363 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.map.cljs$lang$applyTo = (function (seq24670){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24670));
}));


var g__20971__auto___24700 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24364 = arguments.length;
var i__4737__auto___24365 = (0);
while(true){
if((i__4737__auto___24365 < len__4736__auto___24364)){
args__4742__auto__.push((arguments[i__4737__auto___24365]));

var G__24366 = (i__4737__auto___24365 + (1));
i__4737__auto___24365 = G__24366;
=======
var len__4736__auto___24701 = arguments.length;
var i__4737__auto___24702 = (0);
while(true){
if((i__4737__auto___24702 < len__4736__auto___24701)){
args__4742__auto__.push((arguments[i__4737__auto___24702]));

var G__24703 = (i__4737__auto___24702 + (1));
i__4737__auto___24702 = G__24703;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24363),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24700),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = (function (seq24334){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24334));
}));


var g__20971__auto___24367 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = (function (seq24671){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24671));
}));


var g__20971__auto___24704 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = (function cljs$spec$gen$alpha$set(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24368 = arguments.length;
var i__4737__auto___24369 = (0);
while(true){
if((i__4737__auto___24369 < len__4736__auto___24368)){
args__4742__auto__.push((arguments[i__4737__auto___24369]));

var G__24370 = (i__4737__auto___24369 + (1));
i__4737__auto___24369 = G__24370;
=======
var len__4736__auto___24705 = arguments.length;
var i__4737__auto___24706 = (0);
while(true){
if((i__4737__auto___24706 < len__4736__auto___24705)){
args__4742__auto__.push((arguments[i__4737__auto___24706]));

var G__24707 = (i__4737__auto___24706 + (1));
i__4737__auto___24706 = G__24707;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24367),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24704),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.set.cljs$lang$applyTo = (function (seq24335){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24335));
}));


var g__20971__auto___24371 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.set.cljs$lang$applyTo = (function (seq24672){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24672));
}));


var g__20971__auto___24708 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = (function cljs$spec$gen$alpha$vector(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24372 = arguments.length;
var i__4737__auto___24373 = (0);
while(true){
if((i__4737__auto___24373 < len__4736__auto___24372)){
args__4742__auto__.push((arguments[i__4737__auto___24373]));

var G__24374 = (i__4737__auto___24373 + (1));
i__4737__auto___24373 = G__24374;
=======
var len__4736__auto___24709 = arguments.length;
var i__4737__auto___24710 = (0);
while(true){
if((i__4737__auto___24710 < len__4736__auto___24709)){
args__4742__auto__.push((arguments[i__4737__auto___24710]));

var G__24711 = (i__4737__auto___24710 + (1));
i__4737__auto___24710 = G__24711;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24371),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24708),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.vector.cljs$lang$applyTo = (function (seq24336){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24336));
}));


var g__20971__auto___24375 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.vector.cljs$lang$applyTo = (function (seq24673){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24673));
}));


var g__20971__auto___24712 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24376 = arguments.length;
var i__4737__auto___24377 = (0);
while(true){
if((i__4737__auto___24377 < len__4736__auto___24376)){
args__4742__auto__.push((arguments[i__4737__auto___24377]));

var G__24378 = (i__4737__auto___24377 + (1));
i__4737__auto___24377 = G__24378;
=======
var len__4736__auto___24713 = arguments.length;
var i__4737__auto___24714 = (0);
while(true){
if((i__4737__auto___24714 < len__4736__auto___24713)){
args__4742__auto__.push((arguments[i__4737__auto___24714]));

var G__24715 = (i__4737__auto___24714 + (1));
i__4737__auto___24714 = G__24715;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24375),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24712),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = (function (seq24337){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24337));
}));


var g__20971__auto___24379 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = (function (seq24674){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24674));
}));


var g__20971__auto___24716 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = (function cljs$spec$gen$alpha$fmap(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24380 = arguments.length;
var i__4737__auto___24381 = (0);
while(true){
if((i__4737__auto___24381 < len__4736__auto___24380)){
args__4742__auto__.push((arguments[i__4737__auto___24381]));

var G__24382 = (i__4737__auto___24381 + (1));
i__4737__auto___24381 = G__24382;
=======
var len__4736__auto___24717 = arguments.length;
var i__4737__auto___24718 = (0);
while(true){
if((i__4737__auto___24718 < len__4736__auto___24717)){
args__4742__auto__.push((arguments[i__4737__auto___24718]));

var G__24719 = (i__4737__auto___24718 + (1));
i__4737__auto___24718 = G__24719;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24379),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24716),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = (function (seq24338){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24338));
}));


var g__20971__auto___24383 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = (function (seq24675){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24675));
}));


var g__20971__auto___24720 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = (function cljs$spec$gen$alpha$elements(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24384 = arguments.length;
var i__4737__auto___24385 = (0);
while(true){
if((i__4737__auto___24385 < len__4736__auto___24384)){
args__4742__auto__.push((arguments[i__4737__auto___24385]));

var G__24386 = (i__4737__auto___24385 + (1));
i__4737__auto___24385 = G__24386;
=======
var len__4736__auto___24721 = arguments.length;
var i__4737__auto___24722 = (0);
while(true){
if((i__4737__auto___24722 < len__4736__auto___24721)){
args__4742__auto__.push((arguments[i__4737__auto___24722]));

var G__24723 = (i__4737__auto___24722 + (1));
i__4737__auto___24722 = G__24723;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24383),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24720),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.elements.cljs$lang$applyTo = (function (seq24339){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24339));
}));


var g__20971__auto___24387 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.elements.cljs$lang$applyTo = (function (seq24676){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24676));
}));


var g__20971__auto___24724 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = (function cljs$spec$gen$alpha$bind(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24388 = arguments.length;
var i__4737__auto___24389 = (0);
while(true){
if((i__4737__auto___24389 < len__4736__auto___24388)){
args__4742__auto__.push((arguments[i__4737__auto___24389]));

var G__24390 = (i__4737__auto___24389 + (1));
i__4737__auto___24389 = G__24390;
=======
var len__4736__auto___24725 = arguments.length;
var i__4737__auto___24726 = (0);
while(true){
if((i__4737__auto___24726 < len__4736__auto___24725)){
args__4742__auto__.push((arguments[i__4737__auto___24726]));

var G__24727 = (i__4737__auto___24726 + (1));
i__4737__auto___24726 = G__24727;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24387),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24724),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.bind.cljs$lang$applyTo = (function (seq24340){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24340));
}));


var g__20971__auto___24391 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.bind.cljs$lang$applyTo = (function (seq24677){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24677));
}));


var g__20971__auto___24728 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = (function cljs$spec$gen$alpha$choose(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24392 = arguments.length;
var i__4737__auto___24393 = (0);
while(true){
if((i__4737__auto___24393 < len__4736__auto___24392)){
args__4742__auto__.push((arguments[i__4737__auto___24393]));

var G__24394 = (i__4737__auto___24393 + (1));
i__4737__auto___24393 = G__24394;
=======
var len__4736__auto___24729 = arguments.length;
var i__4737__auto___24730 = (0);
while(true){
if((i__4737__auto___24730 < len__4736__auto___24729)){
args__4742__auto__.push((arguments[i__4737__auto___24730]));

var G__24731 = (i__4737__auto___24730 + (1));
i__4737__auto___24730 = G__24731;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24391),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24728),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.choose.cljs$lang$applyTo = (function (seq24341){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24341));
}));


var g__20971__auto___24395 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.choose.cljs$lang$applyTo = (function (seq24678){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24678));
}));


var g__20971__auto___24732 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = (function cljs$spec$gen$alpha$one_of(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24396 = arguments.length;
var i__4737__auto___24397 = (0);
while(true){
if((i__4737__auto___24397 < len__4736__auto___24396)){
args__4742__auto__.push((arguments[i__4737__auto___24397]));

var G__24398 = (i__4737__auto___24397 + (1));
i__4737__auto___24397 = G__24398;
=======
var len__4736__auto___24733 = arguments.length;
var i__4737__auto___24734 = (0);
while(true){
if((i__4737__auto___24734 < len__4736__auto___24733)){
args__4742__auto__.push((arguments[i__4737__auto___24734]));

var G__24735 = (i__4737__auto___24734 + (1));
i__4737__auto___24734 = G__24735;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24395),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24732),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = (function (seq24342){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24342));
}));


var g__20971__auto___24399 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = (function (seq24679){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24679));
}));


var g__20971__auto___24736 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = (function cljs$spec$gen$alpha$such_that(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24400 = arguments.length;
var i__4737__auto___24401 = (0);
while(true){
if((i__4737__auto___24401 < len__4736__auto___24400)){
args__4742__auto__.push((arguments[i__4737__auto___24401]));

var G__24402 = (i__4737__auto___24401 + (1));
i__4737__auto___24401 = G__24402;
=======
var len__4736__auto___24737 = arguments.length;
var i__4737__auto___24738 = (0);
while(true){
if((i__4737__auto___24738 < len__4736__auto___24737)){
args__4742__auto__.push((arguments[i__4737__auto___24738]));

var G__24739 = (i__4737__auto___24738 + (1));
i__4737__auto___24738 = G__24739;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24399),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24736),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = (function (seq24343){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24343));
}));


var g__20971__auto___24403 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = (function (seq24680){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24680));
}));


var g__20971__auto___24740 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = (function cljs$spec$gen$alpha$tuple(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24404 = arguments.length;
var i__4737__auto___24405 = (0);
while(true){
if((i__4737__auto___24405 < len__4736__auto___24404)){
args__4742__auto__.push((arguments[i__4737__auto___24405]));

var G__24406 = (i__4737__auto___24405 + (1));
i__4737__auto___24405 = G__24406;
=======
var len__4736__auto___24741 = arguments.length;
var i__4737__auto___24742 = (0);
while(true){
if((i__4737__auto___24742 < len__4736__auto___24741)){
args__4742__auto__.push((arguments[i__4737__auto___24742]));

var G__24743 = (i__4737__auto___24742 + (1));
i__4737__auto___24742 = G__24743;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24403),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24740),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = (function (seq24344){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24344));
}));


var g__20971__auto___24407 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = (function (seq24681){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24681));
}));


var g__20971__auto___24744 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = (function cljs$spec$gen$alpha$sample(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24408 = arguments.length;
var i__4737__auto___24409 = (0);
while(true){
if((i__4737__auto___24409 < len__4736__auto___24408)){
args__4742__auto__.push((arguments[i__4737__auto___24409]));

var G__24410 = (i__4737__auto___24409 + (1));
i__4737__auto___24409 = G__24410;
=======
var len__4736__auto___24745 = arguments.length;
var i__4737__auto___24746 = (0);
while(true){
if((i__4737__auto___24746 < len__4736__auto___24745)){
args__4742__auto__.push((arguments[i__4737__auto___24746]));

var G__24747 = (i__4737__auto___24746 + (1));
i__4737__auto___24746 = G__24747;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24407),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24744),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.sample.cljs$lang$applyTo = (function (seq24345){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24345));
}));


var g__20971__auto___24411 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.sample.cljs$lang$applyTo = (function (seq24682){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24682));
}));


var g__20971__auto___24748 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = (function cljs$spec$gen$alpha$return(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24412 = arguments.length;
var i__4737__auto___24413 = (0);
while(true){
if((i__4737__auto___24413 < len__4736__auto___24412)){
args__4742__auto__.push((arguments[i__4737__auto___24413]));

var G__24414 = (i__4737__auto___24413 + (1));
i__4737__auto___24413 = G__24414;
=======
var len__4736__auto___24749 = arguments.length;
var i__4737__auto___24750 = (0);
while(true){
if((i__4737__auto___24750 < len__4736__auto___24749)){
args__4742__auto__.push((arguments[i__4737__auto___24750]));

var G__24751 = (i__4737__auto___24750 + (1));
i__4737__auto___24750 = G__24751;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24411),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24748),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.return$.cljs$lang$applyTo = (function (seq24346){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24346));
}));


var g__20971__auto___24415 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.return$.cljs$lang$applyTo = (function (seq24683){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24683));
}));


var g__20971__auto___24752 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24416 = arguments.length;
var i__4737__auto___24417 = (0);
while(true){
if((i__4737__auto___24417 < len__4736__auto___24416)){
args__4742__auto__.push((arguments[i__4737__auto___24417]));

var G__24418 = (i__4737__auto___24417 + (1));
i__4737__auto___24417 = G__24418;
=======
var len__4736__auto___24753 = arguments.length;
var i__4737__auto___24754 = (0);
while(true){
if((i__4737__auto___24754 < len__4736__auto___24753)){
args__4742__auto__.push((arguments[i__4737__auto___24754]));

var G__24755 = (i__4737__auto___24754 + (1));
i__4737__auto___24754 = G__24755;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24415),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24752),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = (function (seq24347){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24347));
}));


var g__20971__auto___24419 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = (function (seq24684){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24684));
}));


var g__20971__auto___24756 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24420 = arguments.length;
var i__4737__auto___24421 = (0);
while(true){
if((i__4737__auto___24421 < len__4736__auto___24420)){
args__4742__auto__.push((arguments[i__4737__auto___24421]));

var G__24422 = (i__4737__auto___24421 + (1));
i__4737__auto___24421 = G__24422;
=======
var len__4736__auto___24757 = arguments.length;
var i__4737__auto___24758 = (0);
while(true){
if((i__4737__auto___24758 < len__4736__auto___24757)){
args__4742__auto__.push((arguments[i__4737__auto___24758]));

var G__24759 = (i__4737__auto___24758 + (1));
i__4737__auto___24758 = G__24759;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24419),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24756),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = (function (seq24348){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24348));
}));


var g__20971__auto___24423 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = (function (seq24685){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24685));
}));


var g__20971__auto___24760 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = (function cljs$spec$gen$alpha$frequency(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24424 = arguments.length;
var i__4737__auto___24425 = (0);
while(true){
if((i__4737__auto___24425 < len__4736__auto___24424)){
args__4742__auto__.push((arguments[i__4737__auto___24425]));

var G__24426 = (i__4737__auto___24425 + (1));
i__4737__auto___24425 = G__24426;
=======
var len__4736__auto___24761 = arguments.length;
var i__4737__auto___24762 = (0);
while(true){
if((i__4737__auto___24762 < len__4736__auto___24761)){
args__4742__auto__.push((arguments[i__4737__auto___24762]));

var G__24763 = (i__4737__auto___24762 + (1));
i__4737__auto___24762 = G__24763;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24423),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24760),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = (function (seq24349){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24349));
}));


var g__20971__auto___24427 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = (function (seq24686){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24686));
}));


var g__20971__auto___24764 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.shuffle !== 'undefined')){
return clojure.test.check.generators.shuffle;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/shuffle
 */
cljs.spec.gen.alpha.shuffle = (function cljs$spec$gen$alpha$shuffle(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24428 = arguments.length;
var i__4737__auto___24429 = (0);
while(true){
if((i__4737__auto___24429 < len__4736__auto___24428)){
args__4742__auto__.push((arguments[i__4737__auto___24429]));

var G__24430 = (i__4737__auto___24429 + (1));
i__4737__auto___24429 = G__24430;
=======
var len__4736__auto___24765 = arguments.length;
var i__4737__auto___24766 = (0);
while(true){
if((i__4737__auto___24766 < len__4736__auto___24765)){
args__4742__auto__.push((arguments[i__4737__auto___24766]));

var G__24767 = (i__4737__auto___24766 + (1));
i__4737__auto___24766 = G__24767;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24427),args);
=======
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20971__auto___24764),args);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.shuffle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.shuffle.cljs$lang$applyTo = (function (seq24350){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24350));
}));

var g__20984__auto___24452 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.shuffle.cljs$lang$applyTo = (function (seq24687){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24687));
}));

var g__20984__auto___24789 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = (function cljs$spec$gen$alpha$any(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24453 = arguments.length;
var i__4737__auto___24454 = (0);
while(true){
if((i__4737__auto___24454 < len__4736__auto___24453)){
args__4742__auto__.push((arguments[i__4737__auto___24454]));

var G__24455 = (i__4737__auto___24454 + (1));
i__4737__auto___24454 = G__24455;
=======
var len__4736__auto___24790 = arguments.length;
var i__4737__auto___24791 = (0);
while(true){
if((i__4737__auto___24791 < len__4736__auto___24790)){
args__4742__auto__.push((arguments[i__4737__auto___24791]));

var G__24792 = (i__4737__auto___24791 + (1));
i__4737__auto___24791 = G__24792;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24452);
=======
return cljs.core.deref.call(null,g__20984__auto___24789);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.any.cljs$lang$applyTo = (function (seq24431){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24431));
}));


var g__20984__auto___24456 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.any.cljs$lang$applyTo = (function (seq24768){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24768));
}));


var g__20984__auto___24793 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24457 = arguments.length;
var i__4737__auto___24458 = (0);
while(true){
if((i__4737__auto___24458 < len__4736__auto___24457)){
args__4742__auto__.push((arguments[i__4737__auto___24458]));

var G__24459 = (i__4737__auto___24458 + (1));
i__4737__auto___24458 = G__24459;
=======
var len__4736__auto___24794 = arguments.length;
var i__4737__auto___24795 = (0);
while(true){
if((i__4737__auto___24795 < len__4736__auto___24794)){
args__4742__auto__.push((arguments[i__4737__auto___24795]));

var G__24796 = (i__4737__auto___24795 + (1));
i__4737__auto___24795 = G__24796;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24456);
=======
return cljs.core.deref.call(null,g__20984__auto___24793);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = (function (seq24432){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24432));
}));


var g__20984__auto___24460 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = (function (seq24769){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24769));
}));


var g__20984__auto___24797 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = (function cljs$spec$gen$alpha$boolean(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24461 = arguments.length;
var i__4737__auto___24462 = (0);
while(true){
if((i__4737__auto___24462 < len__4736__auto___24461)){
args__4742__auto__.push((arguments[i__4737__auto___24462]));

var G__24463 = (i__4737__auto___24462 + (1));
i__4737__auto___24462 = G__24463;
=======
var len__4736__auto___24798 = arguments.length;
var i__4737__auto___24799 = (0);
while(true){
if((i__4737__auto___24799 < len__4736__auto___24798)){
args__4742__auto__.push((arguments[i__4737__auto___24799]));

var G__24800 = (i__4737__auto___24799 + (1));
i__4737__auto___24799 = G__24800;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24460);
=======
return cljs.core.deref.call(null,g__20984__auto___24797);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = (function (seq24433){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24433));
}));


var g__20984__auto___24464 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = (function (seq24770){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24770));
}));


var g__20984__auto___24801 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = (function cljs$spec$gen$alpha$char(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24465 = arguments.length;
var i__4737__auto___24466 = (0);
while(true){
if((i__4737__auto___24466 < len__4736__auto___24465)){
args__4742__auto__.push((arguments[i__4737__auto___24466]));

var G__24467 = (i__4737__auto___24466 + (1));
i__4737__auto___24466 = G__24467;
=======
var len__4736__auto___24802 = arguments.length;
var i__4737__auto___24803 = (0);
while(true){
if((i__4737__auto___24803 < len__4736__auto___24802)){
args__4742__auto__.push((arguments[i__4737__auto___24803]));

var G__24804 = (i__4737__auto___24803 + (1));
i__4737__auto___24803 = G__24804;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24464);
=======
return cljs.core.deref.call(null,g__20984__auto___24801);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.char$.cljs$lang$applyTo = (function (seq24434){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24434));
}));


var g__20984__auto___24468 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.char$.cljs$lang$applyTo = (function (seq24771){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24771));
}));


var g__20984__auto___24805 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24469 = arguments.length;
var i__4737__auto___24470 = (0);
while(true){
if((i__4737__auto___24470 < len__4736__auto___24469)){
args__4742__auto__.push((arguments[i__4737__auto___24470]));

var G__24471 = (i__4737__auto___24470 + (1));
i__4737__auto___24470 = G__24471;
=======
var len__4736__auto___24806 = arguments.length;
var i__4737__auto___24807 = (0);
while(true){
if((i__4737__auto___24807 < len__4736__auto___24806)){
args__4742__auto__.push((arguments[i__4737__auto___24807]));

var G__24808 = (i__4737__auto___24807 + (1));
i__4737__auto___24807 = G__24808;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24468);
=======
return cljs.core.deref.call(null,g__20984__auto___24805);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = (function (seq24435){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24435));
}));


var g__20984__auto___24472 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = (function (seq24772){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24772));
}));


var g__20984__auto___24809 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24473 = arguments.length;
var i__4737__auto___24474 = (0);
while(true){
if((i__4737__auto___24474 < len__4736__auto___24473)){
args__4742__auto__.push((arguments[i__4737__auto___24474]));

var G__24475 = (i__4737__auto___24474 + (1));
i__4737__auto___24474 = G__24475;
=======
var len__4736__auto___24810 = arguments.length;
var i__4737__auto___24811 = (0);
while(true){
if((i__4737__auto___24811 < len__4736__auto___24810)){
args__4742__auto__.push((arguments[i__4737__auto___24811]));

var G__24812 = (i__4737__auto___24811 + (1));
i__4737__auto___24811 = G__24812;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24472);
=======
return cljs.core.deref.call(null,g__20984__auto___24809);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = (function (seq24436){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24436));
}));


var g__20984__auto___24476 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = (function (seq24773){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24773));
}));


var g__20984__auto___24813 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24477 = arguments.length;
var i__4737__auto___24478 = (0);
while(true){
if((i__4737__auto___24478 < len__4736__auto___24477)){
args__4742__auto__.push((arguments[i__4737__auto___24478]));

var G__24479 = (i__4737__auto___24478 + (1));
i__4737__auto___24478 = G__24479;
=======
var len__4736__auto___24814 = arguments.length;
var i__4737__auto___24815 = (0);
while(true){
if((i__4737__auto___24815 < len__4736__auto___24814)){
args__4742__auto__.push((arguments[i__4737__auto___24815]));

var G__24816 = (i__4737__auto___24815 + (1));
i__4737__auto___24815 = G__24816;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24476);
=======
return cljs.core.deref.call(null,g__20984__auto___24813);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = (function (seq24437){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24437));
}));


var g__20984__auto___24480 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = (function (seq24774){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24774));
}));


var g__20984__auto___24817 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = (function cljs$spec$gen$alpha$double(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24481 = arguments.length;
var i__4737__auto___24482 = (0);
while(true){
if((i__4737__auto___24482 < len__4736__auto___24481)){
args__4742__auto__.push((arguments[i__4737__auto___24482]));

var G__24483 = (i__4737__auto___24482 + (1));
i__4737__auto___24482 = G__24483;
=======
var len__4736__auto___24818 = arguments.length;
var i__4737__auto___24819 = (0);
while(true){
if((i__4737__auto___24819 < len__4736__auto___24818)){
args__4742__auto__.push((arguments[i__4737__auto___24819]));

var G__24820 = (i__4737__auto___24819 + (1));
i__4737__auto___24819 = G__24820;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24480);
=======
return cljs.core.deref.call(null,g__20984__auto___24817);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.double$.cljs$lang$applyTo = (function (seq24438){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24438));
}));


var g__20984__auto___24484 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.double$.cljs$lang$applyTo = (function (seq24775){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24775));
}));


var g__20984__auto___24821 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = (function cljs$spec$gen$alpha$int(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24485 = arguments.length;
var i__4737__auto___24486 = (0);
while(true){
if((i__4737__auto___24486 < len__4736__auto___24485)){
args__4742__auto__.push((arguments[i__4737__auto___24486]));

var G__24487 = (i__4737__auto___24486 + (1));
i__4737__auto___24486 = G__24487;
=======
var len__4736__auto___24822 = arguments.length;
var i__4737__auto___24823 = (0);
while(true){
if((i__4737__auto___24823 < len__4736__auto___24822)){
args__4742__auto__.push((arguments[i__4737__auto___24823]));

var G__24824 = (i__4737__auto___24823 + (1));
i__4737__auto___24823 = G__24824;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24484);
=======
return cljs.core.deref.call(null,g__20984__auto___24821);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.int$.cljs$lang$applyTo = (function (seq24439){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24439));
}));


var g__20984__auto___24488 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.int$.cljs$lang$applyTo = (function (seq24776){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24776));
}));


var g__20984__auto___24825 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = (function cljs$spec$gen$alpha$keyword(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24489 = arguments.length;
var i__4737__auto___24490 = (0);
while(true){
if((i__4737__auto___24490 < len__4736__auto___24489)){
args__4742__auto__.push((arguments[i__4737__auto___24490]));

var G__24491 = (i__4737__auto___24490 + (1));
i__4737__auto___24490 = G__24491;
=======
var len__4736__auto___24826 = arguments.length;
var i__4737__auto___24827 = (0);
while(true){
if((i__4737__auto___24827 < len__4736__auto___24826)){
args__4742__auto__.push((arguments[i__4737__auto___24827]));

var G__24828 = (i__4737__auto___24827 + (1));
i__4737__auto___24827 = G__24828;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24488);
=======
return cljs.core.deref.call(null,g__20984__auto___24825);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = (function (seq24440){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24440));
}));


var g__20984__auto___24492 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = (function (seq24777){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24777));
}));


var g__20984__auto___24829 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24493 = arguments.length;
var i__4737__auto___24494 = (0);
while(true){
if((i__4737__auto___24494 < len__4736__auto___24493)){
args__4742__auto__.push((arguments[i__4737__auto___24494]));

var G__24495 = (i__4737__auto___24494 + (1));
i__4737__auto___24494 = G__24495;
=======
var len__4736__auto___24830 = arguments.length;
var i__4737__auto___24831 = (0);
while(true){
if((i__4737__auto___24831 < len__4736__auto___24830)){
args__4742__auto__.push((arguments[i__4737__auto___24831]));

var G__24832 = (i__4737__auto___24831 + (1));
i__4737__auto___24831 = G__24832;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24492);
=======
return cljs.core.deref.call(null,g__20984__auto___24829);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = (function (seq24441){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24441));
}));


var g__20984__auto___24496 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = (function (seq24778){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24778));
}));


var g__20984__auto___24833 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24497 = arguments.length;
var i__4737__auto___24498 = (0);
while(true){
if((i__4737__auto___24498 < len__4736__auto___24497)){
args__4742__auto__.push((arguments[i__4737__auto___24498]));

var G__24499 = (i__4737__auto___24498 + (1));
i__4737__auto___24498 = G__24499;
=======
var len__4736__auto___24834 = arguments.length;
var i__4737__auto___24835 = (0);
while(true){
if((i__4737__auto___24835 < len__4736__auto___24834)){
args__4742__auto__.push((arguments[i__4737__auto___24835]));

var G__24836 = (i__4737__auto___24835 + (1));
i__4737__auto___24835 = G__24836;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24496);
=======
return cljs.core.deref.call(null,g__20984__auto___24833);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = (function (seq24442){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24442));
}));


var g__20984__auto___24500 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = (function (seq24779){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24779));
}));


var g__20984__auto___24837 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = (function cljs$spec$gen$alpha$ratio(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24501 = arguments.length;
var i__4737__auto___24502 = (0);
while(true){
if((i__4737__auto___24502 < len__4736__auto___24501)){
args__4742__auto__.push((arguments[i__4737__auto___24502]));

var G__24503 = (i__4737__auto___24502 + (1));
i__4737__auto___24502 = G__24503;
=======
var len__4736__auto___24838 = arguments.length;
var i__4737__auto___24839 = (0);
while(true){
if((i__4737__auto___24839 < len__4736__auto___24838)){
args__4742__auto__.push((arguments[i__4737__auto___24839]));

var G__24840 = (i__4737__auto___24839 + (1));
i__4737__auto___24839 = G__24840;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24500);
=======
return cljs.core.deref.call(null,g__20984__auto___24837);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = (function (seq24443){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24443));
}));


var g__20984__auto___24504 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = (function (seq24780){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24780));
}));


var g__20984__auto___24841 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24505 = arguments.length;
var i__4737__auto___24506 = (0);
while(true){
if((i__4737__auto___24506 < len__4736__auto___24505)){
args__4742__auto__.push((arguments[i__4737__auto___24506]));

var G__24507 = (i__4737__auto___24506 + (1));
i__4737__auto___24506 = G__24507;
=======
var len__4736__auto___24842 = arguments.length;
var i__4737__auto___24843 = (0);
while(true){
if((i__4737__auto___24843 < len__4736__auto___24842)){
args__4742__auto__.push((arguments[i__4737__auto___24843]));

var G__24844 = (i__4737__auto___24843 + (1));
i__4737__auto___24843 = G__24844;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24504);
=======
return cljs.core.deref.call(null,g__20984__auto___24841);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = (function (seq24444){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24444));
}));


var g__20984__auto___24508 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = (function (seq24781){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24781));
}));


var g__20984__auto___24845 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24509 = arguments.length;
var i__4737__auto___24510 = (0);
while(true){
if((i__4737__auto___24510 < len__4736__auto___24509)){
args__4742__auto__.push((arguments[i__4737__auto___24510]));

var G__24511 = (i__4737__auto___24510 + (1));
i__4737__auto___24510 = G__24511;
=======
var len__4736__auto___24846 = arguments.length;
var i__4737__auto___24847 = (0);
while(true){
if((i__4737__auto___24847 < len__4736__auto___24846)){
args__4742__auto__.push((arguments[i__4737__auto___24847]));

var G__24848 = (i__4737__auto___24847 + (1));
i__4737__auto___24847 = G__24848;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24508);
=======
return cljs.core.deref.call(null,g__20984__auto___24845);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = (function (seq24445){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24445));
}));


var g__20984__auto___24512 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = (function (seq24782){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24782));
}));


var g__20984__auto___24849 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = (function cljs$spec$gen$alpha$string(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24513 = arguments.length;
var i__4737__auto___24514 = (0);
while(true){
if((i__4737__auto___24514 < len__4736__auto___24513)){
args__4742__auto__.push((arguments[i__4737__auto___24514]));

var G__24515 = (i__4737__auto___24514 + (1));
i__4737__auto___24514 = G__24515;
=======
var len__4736__auto___24850 = arguments.length;
var i__4737__auto___24851 = (0);
while(true){
if((i__4737__auto___24851 < len__4736__auto___24850)){
args__4742__auto__.push((arguments[i__4737__auto___24851]));

var G__24852 = (i__4737__auto___24851 + (1));
i__4737__auto___24851 = G__24852;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24512);
=======
return cljs.core.deref.call(null,g__20984__auto___24849);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.string.cljs$lang$applyTo = (function (seq24446){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24446));
}));


var g__20984__auto___24516 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.string.cljs$lang$applyTo = (function (seq24783){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24783));
}));


var g__20984__auto___24853 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24517 = arguments.length;
var i__4737__auto___24518 = (0);
while(true){
if((i__4737__auto___24518 < len__4736__auto___24517)){
args__4742__auto__.push((arguments[i__4737__auto___24518]));

var G__24519 = (i__4737__auto___24518 + (1));
i__4737__auto___24518 = G__24519;
=======
var len__4736__auto___24854 = arguments.length;
var i__4737__auto___24855 = (0);
while(true){
if((i__4737__auto___24855 < len__4736__auto___24854)){
args__4742__auto__.push((arguments[i__4737__auto___24855]));

var G__24856 = (i__4737__auto___24855 + (1));
i__4737__auto___24855 = G__24856;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24516);
=======
return cljs.core.deref.call(null,g__20984__auto___24853);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = (function (seq24447){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24447));
}));


var g__20984__auto___24520 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = (function (seq24784){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24784));
}));


var g__20984__auto___24857 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24521 = arguments.length;
var i__4737__auto___24522 = (0);
while(true){
if((i__4737__auto___24522 < len__4736__auto___24521)){
args__4742__auto__.push((arguments[i__4737__auto___24522]));

var G__24523 = (i__4737__auto___24522 + (1));
i__4737__auto___24522 = G__24523;
=======
var len__4736__auto___24858 = arguments.length;
var i__4737__auto___24859 = (0);
while(true){
if((i__4737__auto___24859 < len__4736__auto___24858)){
args__4742__auto__.push((arguments[i__4737__auto___24859]));

var G__24860 = (i__4737__auto___24859 + (1));
i__4737__auto___24859 = G__24860;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24520);
=======
return cljs.core.deref.call(null,g__20984__auto___24857);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = (function (seq24448){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24448));
}));


var g__20984__auto___24524 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = (function (seq24785){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24785));
}));


var g__20984__auto___24861 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = (function cljs$spec$gen$alpha$symbol(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24525 = arguments.length;
var i__4737__auto___24526 = (0);
while(true){
if((i__4737__auto___24526 < len__4736__auto___24525)){
args__4742__auto__.push((arguments[i__4737__auto___24526]));

var G__24527 = (i__4737__auto___24526 + (1));
i__4737__auto___24526 = G__24527;
=======
var len__4736__auto___24862 = arguments.length;
var i__4737__auto___24863 = (0);
while(true){
if((i__4737__auto___24863 < len__4736__auto___24862)){
args__4742__auto__.push((arguments[i__4737__auto___24863]));

var G__24864 = (i__4737__auto___24863 + (1));
i__4737__auto___24863 = G__24864;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24524);
=======
return cljs.core.deref.call(null,g__20984__auto___24861);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = (function (seq24449){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24449));
}));


var g__20984__auto___24528 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = (function (seq24786){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24786));
}));


var g__20984__auto___24865 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24529 = arguments.length;
var i__4737__auto___24530 = (0);
while(true){
if((i__4737__auto___24530 < len__4736__auto___24529)){
args__4742__auto__.push((arguments[i__4737__auto___24530]));

var G__24531 = (i__4737__auto___24530 + (1));
i__4737__auto___24530 = G__24531;
=======
var len__4736__auto___24866 = arguments.length;
var i__4737__auto___24867 = (0);
while(true){
if((i__4737__auto___24867 < len__4736__auto___24866)){
args__4742__auto__.push((arguments[i__4737__auto___24867]));

var G__24868 = (i__4737__auto___24867 + (1));
i__4737__auto___24867 = G__24868;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24528);
=======
return cljs.core.deref.call(null,g__20984__auto___24865);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = (function (seq24450){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24450));
}));


var g__20984__auto___24532 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
(cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = (function (seq24787){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24787));
}));


var g__20984__auto___24869 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 8f3c68a (Initial Commit)
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = (function cljs$spec$gen$alpha$uuid(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24533 = arguments.length;
var i__4737__auto___24534 = (0);
while(true){
if((i__4737__auto___24534 < len__4736__auto___24533)){
args__4742__auto__.push((arguments[i__4737__auto___24534]));

var G__24535 = (i__4737__auto___24534 + (1));
i__4737__auto___24534 = G__24535;
=======
var len__4736__auto___24870 = arguments.length;
var i__4737__auto___24871 = (0);
while(true){
if((i__4737__auto___24871 < len__4736__auto___24870)){
args__4742__auto__.push((arguments[i__4737__auto___24871]));

var G__24872 = (i__4737__auto___24871 + (1));
i__4737__auto___24871 = G__24872;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = (function (args){
<<<<<<< HEAD
return cljs.core.deref.call(null,g__20984__auto___24532);
=======
return cljs.core.deref.call(null,g__20984__auto___24869);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = (function (seq24451){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24451));
=======
(cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = (function (seq24788){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24788));
>>>>>>> 8f3c68a (Initial Commit)
}));

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___24538 = arguments.length;
var i__4737__auto___24539 = (0);
while(true){
if((i__4737__auto___24539 < len__4736__auto___24538)){
args__4742__auto__.push((arguments[i__4737__auto___24539]));

var G__24540 = (i__4737__auto___24539 + (1));
i__4737__auto___24539 = G__24540;
=======
var len__4736__auto___24875 = arguments.length;
var i__4737__auto___24876 = (0);
while(true){
if((i__4737__auto___24876 < len__4736__auto___24875)){
args__4742__auto__.push((arguments[i__4737__auto___24876]));

var G__24877 = (i__4737__auto___24876 + (1));
i__4737__auto___24876 = G__24877;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
<<<<<<< HEAD
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__24536_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__24536_SHARP_);
=======
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__24873_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__24873_SHARP_);
>>>>>>> 8f3c68a (Initial Commit)
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
}));

(cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq24537){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24537));
=======
(cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq24874){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24874));
>>>>>>> 8f3c68a (Initial Commit)
}));

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return (!((cljs.core.namespace.call(null,ident) == null)));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
<<<<<<< HEAD
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.some_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.uri_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.such_that.call(null,cljs.core.some_QMARK_,cljs.spec.gen.alpha.any_printable.call(null)),cljs.spec.gen.alpha.fmap.call(null,(function (p1__24542_SHARP_){
return (new Date(p1__24542_SHARP_));
}),cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.fmap.call(null,(function (p1__24541_SHARP_){
return (new goog.Uri(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24541_SHARP_),".com"].join('')));
=======
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.some_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.uri_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.such_that.call(null,cljs.core.some_QMARK_,cljs.spec.gen.alpha.any_printable.call(null)),cljs.spec.gen.alpha.fmap.call(null,(function (p1__24879_SHARP_){
return (new Date(p1__24879_SHARP_));
}),cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.fmap.call(null,(function (p1__24878_SHARP_){
return (new goog.Uri(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24878_SHARP_),".com"].join('')));
>>>>>>> 8f3c68a (Initial Commit)
}),cljs.spec.gen.alpha.uuid.call(null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

<<<<<<< HEAD
//# sourceMappingURL=alpha.js.map?rel=1602979375092
=======
//# sourceMappingURL=alpha.js.map?rel=1608004500382
>>>>>>> 8f3c68a (Initial Commit)
