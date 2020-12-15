// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.analyzer');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.env');
goog.require('cljs.tagged_literals');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.reader');
cljs.analyzer._STAR_cljs_ns_STAR_ = new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
cljs.analyzer._STAR_cljs_file_STAR_ = null;
cljs.analyzer._STAR_checked_arrays_STAR_ = false;
cljs.analyzer._STAR_check_alias_dupes_STAR_ = true;
cljs.analyzer._STAR_cljs_static_fns_STAR_ = false;
cljs.analyzer._STAR_fn_invoke_direct_STAR_ = false;
cljs.analyzer._STAR_cljs_macros_path_STAR_ = "/cljs/core";
cljs.analyzer._STAR_cljs_macros_is_classpath_STAR_ = true;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558),cljs.core.PersistentVector.EMPTY], null));
cljs.analyzer._STAR_analyze_deps_STAR_ = true;
cljs.analyzer._STAR_load_tests_STAR_ = true;
cljs.analyzer._STAR_load_macros_STAR_ = true;
cljs.analyzer._STAR_reload_macros_STAR_ = false;
cljs.analyzer._STAR_macro_infer_STAR_ = true;
cljs.analyzer._STAR_passes_STAR_ = null;
cljs.analyzer._STAR_file_defs_STAR_ = null;
cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = false;
/**
 * The namespace of the constants table as a symbol.
 */
cljs.analyzer.constants_ns_sym = new cljs.core.Symbol(null,"cljs.core.constants","cljs.core.constants",2057417066,null);
cljs.analyzer._STAR_verbose_STAR_ = false;
cljs.analyzer._cljs_macros_loaded = cljs.core.atom.call(null,false);
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"protocol-with-overwriting-method","protocol-with-overwriting-method",319993011),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]);
cljs.analyzer.unchecked_arrays_QMARK_ = (function cljs$analyzer$unchecked_arrays_QMARK_(){
return cljs.core._STAR_unchecked_arrays_STAR_;
});
cljs.analyzer.compiler_options = (function cljs$analyzer$compiler_options(){
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
});
cljs.analyzer.get_externs = (function cljs$analyzer$get_externs(){
return new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
});
/**
 * Returns false-y, :warn, or :error based on configuration and the
 * current value of *unchecked-arrays*.
 */
cljs.analyzer.checked_arrays = (function cljs$analyzer$checked_arrays(){
if(((cljs.core.not.call(null,new cljs.core.Keyword(null,"advanced","advanced",-451287892).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.compiler_options.call(null)))) && ((!(cljs.core._STAR_unchecked_arrays_STAR_))))){
return cljs.analyzer._STAR_checked_arrays_STAR_;
} else {
return null;
}
});
cljs.analyzer.js_reserved = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 63, ["typeof",null,"float",null,"implements",null,"else",null,"boolean",null,"abstract",null,"int",null,"static",null,"package",null,"this",null,"await",null,"yield",null,"interface",null,"void",null,"delete",null,"class",null,"export",null,"var",null,"try",null,"long",null,"null",null,"return",null,"methods",null,"native",null,"private",null,"new",null,"for",null,"catch",null,"extends",null,"short",null,"protected",null,"throws",null,"synchronized",null,"transient",null,"super",null,"if",null,"let",null,"import",null,"char",null,"switch",null,"const",null,"case",null,"break",null,"volatile",null,"function",null,"continue",null,"final",null,"do",null,"double",null,"while",null,"public",null,"arguments",null,"debugger",null,"with",null,"instanceof",null,"default",null,"throw",null,"goto",null,"finally",null,"byte",null,"constructor",null,"in",null,"enum",null], null), null);
cljs.analyzer.es5_allowed = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["default",null], null), null);
cljs.analyzer.SENTINEL = ({});
cljs.analyzer.gets = (function cljs$analyzer$gets(var_args){
<<<<<<< HEAD
var G__23138 = arguments.length;
switch (G__23138) {
=======
var G__23475 = arguments.length;
switch (G__23475) {
>>>>>>> 8f3c68a (Initial Commit)
case 3:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3 = (function (m,k0,k1){
var m__$1 = cljs.core.get.call(null,m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.call(null,m__$1,k1);
}
}));

(cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4 = (function (m,k0,k1,k2){
var m__$1 = cljs.core.get.call(null,m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.call(null,m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.call(null,m__$2,k2);
}
}
}));

(cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5 = (function (m,k0,k1,k2,k3){
var m__$1 = cljs.core.get.call(null,m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.call(null,m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$3 = cljs.core.get.call(null,m__$2,k2,cljs.analyzer.SENTINEL);
if((m__$3 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.call(null,m__$3,k3);
}
}
}
}));

(cljs.analyzer.gets.cljs$lang$maxFixedArity = 5);

cljs.analyzer.CLJ_NIL_SYM = new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null);
cljs.analyzer.NUMBER_SYM = new cljs.core.Symbol(null,"number","number",-1084057331,null);
cljs.analyzer.STRING_SYM = new cljs.core.Symbol(null,"string","string",-349010059,null);
cljs.analyzer.BOOLEAN_SYM = new cljs.core.Symbol(null,"boolean","boolean",-278886877,null);
cljs.analyzer.JS_STAR_SYM = new cljs.core.Symbol(null,"js*","js*",-1134233646,null);
cljs.analyzer.DOT_SYM = new cljs.core.Symbol(null,".",".",1975675962,null);
cljs.analyzer.NEW_SYM = new cljs.core.Symbol(null,"new","new",-444906321,null);
cljs.analyzer.CLJS_CORE_SYM = new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null);
cljs.analyzer.CLJS_CORE_MACROS_SYM = new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null);
cljs.analyzer.IGNORE_SYM = new cljs.core.Symbol(null,"ignore","ignore",8989494,null);
cljs.analyzer.ANY_SYM = new cljs.core.Symbol(null,"any","any",-948528346,null);
cljs.analyzer.cljs_seq_QMARK_ = (function cljs$analyzer$cljs_seq_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISeq$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_map_QMARK_ = (function cljs$analyzer$cljs_map_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_vector_QMARK_ = (function cljs$analyzer$cljs_vector_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IVector$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_set_QMARK_ = (function cljs$analyzer$cljs_set_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.munge_path = (function cljs$analyzer$munge_path(ss){
return cljs.core.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ss));
});
/**
 * Given a namespace as a symbol return the relative path. May optionally
 *   provide the file extension, defaults to :cljs.
 */
cljs.analyzer.ns__GT_relpath = (function cljs$analyzer$ns__GT_relpath(var_args){
<<<<<<< HEAD
var G__23145 = arguments.length;
switch (G__23145) {
=======
var G__23482 = arguments.length;
switch (G__23482) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.ns__GT_relpath.call(null,ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629));
}));

(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2 = (function (ns,ext){
return [clojure.string.replace.call(null,cljs.analyzer.munge_path.call(null,ns),".","/"),".",cljs.core.name.call(null,ext)].join('');
}));

(cljs.analyzer.ns__GT_relpath.cljs$lang$maxFixedArity = 2);

cljs.analyzer.topo_sort = (function cljs$analyzer$topo_sort(var_args){
<<<<<<< HEAD
var G__23148 = arguments.length;
switch (G__23148) {
=======
var G__23485 = arguments.length;
switch (G__23485) {
>>>>>>> 8f3c68a (Initial Commit)
case 2:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2 = (function (x,get_deps){
return cljs.analyzer.topo_sort.call(null,x,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)),cljs.core.memoize.call(null,get_deps));
}));

(cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4 = (function (x,depth,state,memo_get_deps){
var deps = memo_get_deps.call(null,x);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

<<<<<<< HEAD
var seq__23149_23170 = cljs.core.seq.call(null,deps);
var chunk__23150_23171 = null;
var count__23151_23172 = (0);
var i__23152_23173 = (0);
while(true){
if((i__23152_23173 < count__23151_23172)){
var dep_23174 = cljs.core._nth.call(null,chunk__23150_23171,i__23152_23173);
cljs.analyzer.topo_sort.call(null,dep_23174,(depth + (1)),state,memo_get_deps);


var G__23175 = seq__23149_23170;
var G__23176 = chunk__23150_23171;
var G__23177 = count__23151_23172;
var G__23178 = (i__23152_23173 + (1));
seq__23149_23170 = G__23175;
chunk__23150_23171 = G__23176;
count__23151_23172 = G__23177;
i__23152_23173 = G__23178;
continue;
} else {
var temp__5720__auto___23179 = cljs.core.seq.call(null,seq__23149_23170);
if(temp__5720__auto___23179){
var seq__23149_23180__$1 = temp__5720__auto___23179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23149_23180__$1)){
var c__4556__auto___23181 = cljs.core.chunk_first.call(null,seq__23149_23180__$1);
var G__23182 = cljs.core.chunk_rest.call(null,seq__23149_23180__$1);
var G__23183 = c__4556__auto___23181;
var G__23184 = cljs.core.count.call(null,c__4556__auto___23181);
var G__23185 = (0);
seq__23149_23170 = G__23182;
chunk__23150_23171 = G__23183;
count__23151_23172 = G__23184;
i__23152_23173 = G__23185;
continue;
} else {
var dep_23186 = cljs.core.first.call(null,seq__23149_23180__$1);
cljs.analyzer.topo_sort.call(null,dep_23186,(depth + (1)),state,memo_get_deps);


var G__23187 = cljs.core.next.call(null,seq__23149_23180__$1);
var G__23188 = null;
var G__23189 = (0);
var G__23190 = (0);
seq__23149_23170 = G__23187;
chunk__23150_23171 = G__23188;
count__23151_23172 = G__23189;
i__23152_23173 = G__23190;
=======
var seq__23486_23507 = cljs.core.seq.call(null,deps);
var chunk__23487_23508 = null;
var count__23488_23509 = (0);
var i__23489_23510 = (0);
while(true){
if((i__23489_23510 < count__23488_23509)){
var dep_23511 = cljs.core._nth.call(null,chunk__23487_23508,i__23489_23510);
cljs.analyzer.topo_sort.call(null,dep_23511,(depth + (1)),state,memo_get_deps);


var G__23512 = seq__23486_23507;
var G__23513 = chunk__23487_23508;
var G__23514 = count__23488_23509;
var G__23515 = (i__23489_23510 + (1));
seq__23486_23507 = G__23512;
chunk__23487_23508 = G__23513;
count__23488_23509 = G__23514;
i__23489_23510 = G__23515;
continue;
} else {
var temp__5720__auto___23516 = cljs.core.seq.call(null,seq__23486_23507);
if(temp__5720__auto___23516){
var seq__23486_23517__$1 = temp__5720__auto___23516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23486_23517__$1)){
var c__4556__auto___23518 = cljs.core.chunk_first.call(null,seq__23486_23517__$1);
var G__23519 = cljs.core.chunk_rest.call(null,seq__23486_23517__$1);
var G__23520 = c__4556__auto___23518;
var G__23521 = cljs.core.count.call(null,c__4556__auto___23518);
var G__23522 = (0);
seq__23486_23507 = G__23519;
chunk__23487_23508 = G__23520;
count__23488_23509 = G__23521;
i__23489_23510 = G__23522;
continue;
} else {
var dep_23523 = cljs.core.first.call(null,seq__23486_23517__$1);
cljs.analyzer.topo_sort.call(null,dep_23523,(depth + (1)),state,memo_get_deps);


var G__23524 = cljs.core.next.call(null,seq__23486_23517__$1);
var G__23525 = null;
var G__23526 = (0);
var G__23527 = (0);
seq__23486_23507 = G__23524;
chunk__23487_23508 = G__23525;
count__23488_23509 = G__23526;
i__23489_23510 = G__23527;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
}
}
break;
}

<<<<<<< HEAD
var seq__23153_23191 = cljs.core.seq.call(null,cljs.core.subseq.call(null,cljs.core.deref.call(null,state),cljs.core._LT_,depth));
var chunk__23154_23192 = null;
var count__23155_23193 = (0);
var i__23156_23194 = (0);
while(true){
if((i__23156_23194 < count__23155_23193)){
var vec__23163_23195 = cljs.core._nth.call(null,chunk__23154_23192,i__23156_23194);
var _LT_depth_23196 = cljs.core.nth.call(null,vec__23163_23195,(0),null);
var __23197 = cljs.core.nth.call(null,vec__23163_23195,(1),null);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_23196], null),clojure.set.difference,deps);


var G__23198 = seq__23153_23191;
var G__23199 = chunk__23154_23192;
var G__23200 = count__23155_23193;
var G__23201 = (i__23156_23194 + (1));
seq__23153_23191 = G__23198;
chunk__23154_23192 = G__23199;
count__23155_23193 = G__23200;
i__23156_23194 = G__23201;
continue;
} else {
var temp__5720__auto___23202 = cljs.core.seq.call(null,seq__23153_23191);
if(temp__5720__auto___23202){
var seq__23153_23203__$1 = temp__5720__auto___23202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23153_23203__$1)){
var c__4556__auto___23204 = cljs.core.chunk_first.call(null,seq__23153_23203__$1);
var G__23205 = cljs.core.chunk_rest.call(null,seq__23153_23203__$1);
var G__23206 = c__4556__auto___23204;
var G__23207 = cljs.core.count.call(null,c__4556__auto___23204);
var G__23208 = (0);
seq__23153_23191 = G__23205;
chunk__23154_23192 = G__23206;
count__23155_23193 = G__23207;
i__23156_23194 = G__23208;
continue;
} else {
var vec__23166_23209 = cljs.core.first.call(null,seq__23153_23203__$1);
var _LT_depth_23210 = cljs.core.nth.call(null,vec__23166_23209,(0),null);
var __23211 = cljs.core.nth.call(null,vec__23166_23209,(1),null);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_23210], null),clojure.set.difference,deps);


var G__23212 = cljs.core.next.call(null,seq__23153_23203__$1);
var G__23213 = null;
var G__23214 = (0);
var G__23215 = (0);
seq__23153_23191 = G__23212;
chunk__23154_23192 = G__23213;
count__23155_23193 = G__23214;
i__23156_23194 = G__23215;
=======
var seq__23490_23528 = cljs.core.seq.call(null,cljs.core.subseq.call(null,cljs.core.deref.call(null,state),cljs.core._LT_,depth));
var chunk__23491_23529 = null;
var count__23492_23530 = (0);
var i__23493_23531 = (0);
while(true){
if((i__23493_23531 < count__23492_23530)){
var vec__23500_23532 = cljs.core._nth.call(null,chunk__23491_23529,i__23493_23531);
var _LT_depth_23533 = cljs.core.nth.call(null,vec__23500_23532,(0),null);
var __23534 = cljs.core.nth.call(null,vec__23500_23532,(1),null);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_23533], null),clojure.set.difference,deps);


var G__23535 = seq__23490_23528;
var G__23536 = chunk__23491_23529;
var G__23537 = count__23492_23530;
var G__23538 = (i__23493_23531 + (1));
seq__23490_23528 = G__23535;
chunk__23491_23529 = G__23536;
count__23492_23530 = G__23537;
i__23493_23531 = G__23538;
continue;
} else {
var temp__5720__auto___23539 = cljs.core.seq.call(null,seq__23490_23528);
if(temp__5720__auto___23539){
var seq__23490_23540__$1 = temp__5720__auto___23539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23490_23540__$1)){
var c__4556__auto___23541 = cljs.core.chunk_first.call(null,seq__23490_23540__$1);
var G__23542 = cljs.core.chunk_rest.call(null,seq__23490_23540__$1);
var G__23543 = c__4556__auto___23541;
var G__23544 = cljs.core.count.call(null,c__4556__auto___23541);
var G__23545 = (0);
seq__23490_23528 = G__23542;
chunk__23491_23529 = G__23543;
count__23492_23530 = G__23544;
i__23493_23531 = G__23545;
continue;
} else {
var vec__23503_23546 = cljs.core.first.call(null,seq__23490_23540__$1);
var _LT_depth_23547 = cljs.core.nth.call(null,vec__23503_23546,(0),null);
var __23548 = cljs.core.nth.call(null,vec__23503_23546,(1),null);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_23547], null),clojure.set.difference,deps);


var G__23549 = cljs.core.next.call(null,seq__23490_23540__$1);
var G__23550 = null;
var G__23551 = (0);
var G__23552 = (0);
seq__23490_23528 = G__23549;
chunk__23491_23529 = G__23550;
count__23492_23530 = G__23551;
i__23493_23531 = G__23552;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return cljs.core.distinct.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
}));

(cljs.analyzer.topo_sort.cljs$lang$maxFixedArity = 4);


cljs.analyzer.ast_QMARK_ = (function cljs$analyzer$ast_QMARK_(x){
return ((cljs.core.map_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,x,new cljs.core.Keyword(null,"op","op",-1882987955))));
});
if((typeof cljs !== 'undefined') && (typeof cljs.analyzer !== 'undefined') && (typeof cljs.analyzer.error_message !== 'undefined')){
} else {
cljs.analyzer.error_message = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.analyzer","error-message"),(function() { 
<<<<<<< HEAD
var G__23216__delegate = function (warning_type,_){
return warning_type;
};
var G__23216 = function (warning_type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__23217__i = 0, G__23217__a = new Array(arguments.length -  1);
while (G__23217__i < G__23217__a.length) {G__23217__a[G__23217__i] = arguments[G__23217__i + 1]; ++G__23217__i;}
  _ = new cljs.core.IndexedSeq(G__23217__a,0,null);
} 
return G__23216__delegate.call(this,warning_type,_);};
G__23216.cljs$lang$maxFixedArity = 1;
G__23216.cljs$lang$applyTo = (function (arglist__23218){
var warning_type = cljs.core.first(arglist__23218);
var _ = cljs.core.rest(arglist__23218);
return G__23216__delegate(warning_type,_);
});
G__23216.cljs$core$IFn$_invoke$arity$variadic = G__23216__delegate;
return G__23216;
=======
var G__23553__delegate = function (warning_type,_){
return warning_type;
};
var G__23553 = function (warning_type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__23554__i = 0, G__23554__a = new Array(arguments.length -  1);
while (G__23554__i < G__23554__a.length) {G__23554__a[G__23554__i] = arguments[G__23554__i + 1]; ++G__23554__i;}
  _ = new cljs.core.IndexedSeq(G__23554__a,0,null);
} 
return G__23553__delegate.call(this,warning_type,_);};
G__23553.cljs$lang$maxFixedArity = 1;
G__23553.cljs$lang$applyTo = (function (arglist__23555){
var warning_type = cljs.core.first(arglist__23555);
var _ = cljs.core.rest(arglist__23555);
return G__23553__delegate(warning_type,_);
});
G__23553.cljs$core$IFn$_invoke$arity$variadic = G__23553__delegate;
return G__23553;
>>>>>>> 8f3c68a (Initial Commit)
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),(function (warning_type,info){
return ["Preamble resource file not found: ",clojure.string.join.call(null," ",new cljs.core.Keyword(null,"missing","missing",362507769).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),(function (warning_type,info){
return ["Required namespace not provided for ",clojure.string.join.call(null," ",new cljs.core.Keyword(null,"unprovided","unprovided",-652330764).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),(function (warning_type,info){
return [(cljs.core.truth_(new cljs.core.Keyword(null,"macro-present?","macro-present?",-1397713205).cljs$core$IFn$_invoke$arity$1(info))?"Can't take value of macro ":"Use of undeclared Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(info)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),(function (warning_type,info){
return ["var: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))," is not public"].join('');
}));
<<<<<<< HEAD
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),(function (warning_type,p__23219){
var map__23220 = p__23219;
var map__23220__$1 = (((((!((map__23220 == null))))?(((((map__23220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23220):map__23220);
var info = map__23220__$1;
var ns_sym = cljs.core.get.call(null,map__23220__$1,new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605));
var js_provide = cljs.core.get.call(null,map__23220__$1,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493));
return ["No such namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym),", could not locate ",cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"cljs","cljs",1492417629)),", ",cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"cljc","cljc",-1728400583)),", or JavaScript source providing \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_provide),"\"",((clojure.string.includes_QMARK_.call(null,cljs.analyzer.ns__GT_relpath.call(null,ns_sym),"_"))?" (Please check that namespaces with dashes use underscores in the ClojureScript file name)":null)].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-macros-ns","undeclared-macros-ns",-438029430),(function (warning_type,p__23222){
var map__23223 = p__23222;
var map__23223__$1 = (((((!((map__23223 == null))))?(((((map__23223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23223):map__23223);
var info = map__23223__$1;
var ns_sym = cljs.core.get.call(null,map__23223__$1,new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605));
var js_provide = cljs.core.get.call(null,map__23223__$1,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493));
=======
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),(function (warning_type,p__23556){
var map__23557 = p__23556;
var map__23557__$1 = (((((!((map__23557 == null))))?(((((map__23557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23557):map__23557);
var info = map__23557__$1;
var ns_sym = cljs.core.get.call(null,map__23557__$1,new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605));
var js_provide = cljs.core.get.call(null,map__23557__$1,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493));
return ["No such namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym),", could not locate ",cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"cljs","cljs",1492417629)),", ",cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"cljc","cljc",-1728400583)),", or JavaScript source providing \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_provide),"\"",((clojure.string.includes_QMARK_.call(null,cljs.analyzer.ns__GT_relpath.call(null,ns_sym),"_"))?" (Please check that namespaces with dashes use underscores in the ClojureScript file name)":null)].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-macros-ns","undeclared-macros-ns",-438029430),(function (warning_type,p__23559){
var map__23560 = p__23559;
var map__23560__$1 = (((((!((map__23560 == null))))?(((((map__23560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23560):map__23560);
var info = map__23560__$1;
var ns_sym = cljs.core.get.call(null,map__23560__$1,new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605));
var js_provide = cljs.core.get.call(null,map__23560__$1,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493));
>>>>>>> 8f3c68a (Initial Commit)
return ["No such macros namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym),", could not locate ",cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"clj","clj",-660495428))," or ",cljs.analyzer.ns__GT_relpath.call(null,ns_sym,new cljs.core.Keyword(null,"cljc","cljc",-1728400583))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info))," not declared ^:dynamic"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"redef","redef",1032704258),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))," already refers to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))))," being replaced by: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(info))," is being replaced"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))))," no longer fn, references are stale"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),(function (warning_type,info){
return ["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"argc","argc",-1452839519).cljs$core$IFn$_invoke$arity$1(info)),") passed to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"ctor","ctor",1750864802).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
}
})())].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fexpr","fexpr",-122857150).cljs$core$IFn$_invoke$arity$1(info))))," is deprecated"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))))," declared arglists ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(info))," mismatch defined arglists ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"defined","defined",-1805032318).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),(function (warning_type,info){
return ["Invalid :refer, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(info))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lib","lib",191808726).cljs$core$IFn$_invoke$arity$1(info)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))," does not exist"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),(function (warning_type,info){
return ["Protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," is deprecated"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),(function (warning_type,info){
return ["Can't resolve protocol symbol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),(function (warning_type,info){
return ["Symbol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," is not a protocol"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),(function (warning_type,info){
if(cljs.core.truth_(new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840).cljs$core$IFn$_invoke$arity$1(info))){
return ["Bad method signature in protocol implementation, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," does not declare method called ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(info))].join('');
} else {
return ["Bad method signature in protocol implementation, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(info))," does not declare arity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949).cljs$core$IFn$_invoke$arity$1(info))].join('');
}
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),(function (warning_type,info){
return ["Duplicated methods in protocol implementation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),(function (warning_type,info){
return ["Protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," implemented multiple times"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),(function (warning_type,info){
return ["Protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," declares method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info))," with variadic signature (&)"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-with-overwriting-method","protocol-with-overwriting-method",319993011),(function (warning_type,info){
var overwritten_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"existing","existing",-340796094).cljs$core$IFn$_invoke$arity$1(info));
return ["Protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," is overwriting ",(cljs.core.truth_(overwritten_protocol)?"method":"function")," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),(cljs.core.truth_(overwritten_protocol)?[" of protocol ",cljs.core.name.call(null,overwritten_protocol)].join(''):null)].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217),(function (warning_type,info){
return ["Protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))," implements method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info))," with variadic signature (&)"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),(function (warning_type,info){
return ["Ignoring target object \"",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(info)),"\" passed in recur to protocol method head"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),": Can't have more than 1 variadic overload"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),": Can't have fixed arity function with more params than variadic function"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),": Can't have 2 overloads with same arity"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),(function (warning_type,info){
return ["Extending an existing JavaScript type - use a different symbol name ","instead of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075).cljs$core$IFn$_invoke$arity$1(info))," e.g ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(info)),", all arguments must be numbers, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(info))," instead"].join('');
}));
<<<<<<< HEAD
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),(function (warning_type,p__23225){
var map__23226 = p__23225;
var map__23226__$1 = (((((!((map__23226 == null))))?(((((map__23226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23226):map__23226);
var name = cljs.core.get.call(null,map__23226__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var types = cljs.core.get.call(null,map__23226__$1,new cljs.core.Keyword(null,"types","types",590030639));
var G__23228 = name;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),G__23228)){
return ["cljs.core/aget, arguments must be an array followed by numeric indices, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.rest.call(null,types)))))?[" (consider ",((((2) === cljs.core.count.call(null,types)))?"goog.object/get":"goog.object/getValueByKeys")," for object access)"].join(''):null)].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),G__23228)){
return ["cljs.core/aget, arguments must be an array followed by numeric indices, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.rest.call(null,types)))))?[" (consider ",((((2) === cljs.core.count.call(null,types)))?"goog.object/get":"goog.object/getValueByKeys")," for object access)"].join(''):null)].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),G__23228)){
return ["cljs.core/aset, arguments must be an array, followed by numeric indices, followed by a value, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.butlast.call(null,cljs.core.rest.call(null,types))))))?" (consider goog.object/set for object access)":null)].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),G__23228)){
return ["cljs.core/aset, arguments must be an array, followed by numeric indices, followed by a value, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.butlast.call(null,cljs.core.rest.call(null,types))))))?" (consider goog.object/set for object access)":null)].join('');
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23228)].join('')));
=======
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),(function (warning_type,p__23562){
var map__23563 = p__23562;
var map__23563__$1 = (((((!((map__23563 == null))))?(((((map__23563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23563):map__23563);
var name = cljs.core.get.call(null,map__23563__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var types = cljs.core.get.call(null,map__23563__$1,new cljs.core.Keyword(null,"types","types",590030639));
var G__23565 = name;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),G__23565)){
return ["cljs.core/aget, arguments must be an array followed by numeric indices, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.rest.call(null,types)))))?[" (consider ",((((2) === cljs.core.count.call(null,types)))?"goog.object/get":"goog.object/getValueByKeys")," for object access)"].join(''):null)].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),G__23565)){
return ["cljs.core/aget, arguments must be an array followed by numeric indices, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.rest.call(null,types)))))?[" (consider ",((((2) === cljs.core.count.call(null,types)))?"goog.object/get":"goog.object/getValueByKeys")," for object access)"].join(''):null)].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),G__23565)){
return ["cljs.core/aset, arguments must be an array, followed by numeric indices, followed by a value, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.butlast.call(null,cljs.core.rest.call(null,types))))))?" (consider goog.object/set for object access)":null)].join('');
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),G__23565)){
return ["cljs.core/aset, arguments must be an array, followed by numeric indices, followed by a value, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," instead",((((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"object","object",-1179821820,null),cljs.core.first.call(null,types))) || (cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),null], null), null),cljs.core.butlast.call(null,cljs.core.rest.call(null,types))))))?" (consider goog.object/set for object access)":null)].join('');
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23565)].join('')));
>>>>>>> 8f3c68a (Initial Commit)

}
}
}
}
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),(function (warning_type,info){
return ["Cannot invoke type constructor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fexpr","fexpr",-122857150).cljs$core$IFn$_invoke$arity$1(info))))," as function "].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),(function (warning_type,info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info))," is a single segment namespace"].join('');
}));
<<<<<<< HEAD
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),(function (warning_type,p__23230){
var map__23231 = p__23230;
var map__23231__$1 = (((((!((map__23231 == null))))?(((((map__23231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23231):map__23231);
var info = map__23231__$1;
var name = cljs.core.get.call(null,map__23231__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var munged = cljs.core.munge.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,(function (p1__23229_SHARP_){
if(cljs.core.truth_(cljs.analyzer.js_reserved.call(null,p1__23229_SHARP_))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23229_SHARP_),"$"].join('');
} else {
return p1__23229_SHARP_;
=======
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),(function (warning_type,p__23567){
var map__23568 = p__23567;
var map__23568__$1 = (((((!((map__23568 == null))))?(((((map__23568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23568):map__23568);
var info = map__23568__$1;
var name = cljs.core.get.call(null,map__23568__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var munged = cljs.core.munge.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,(function (p1__23566_SHARP_){
if(cljs.core.truth_(cljs.analyzer.js_reserved.call(null,p1__23566_SHARP_))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23566_SHARP_),"$"].join('');
} else {
return p1__23566_SHARP_;
>>>>>>> 8f3c68a (Initial Commit)
}
}),clojure.string.split.call(null,cljs.core.name.call(null,name),/\./))));
return ["Namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," contains a reserved JavaScript keyword,"," the corresponding Google Closure namespace will be munged to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged)].join('');
}));
<<<<<<< HEAD
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),(function (warning_type,p__23233){
var map__23234 = p__23233;
var map__23234__$1 = (((((!((map__23234 == null))))?(((((map__23234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23234):map__23234);
var info = map__23234__$1;
var ns = cljs.core.get.call(null,map__23234__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var var$ = cljs.core.get.call(null,map__23234__$1,new cljs.core.Keyword(null,"var","var",-769682797));
return ["Namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," clashes with var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),(function (warning_type,p__23236){
var map__23237 = p__23236;
var map__23237__$1 = (((((!((map__23237 == null))))?(((((map__23237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23237):map__23237);
var info = map__23237__$1;
var var$ = cljs.core.get.call(null,map__23237__$1,new cljs.core.Keyword(null,"var","var",-769682797));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)," not declared dynamic and thus is not dynamically rebindable, but its name ","suggests otherwise. Please either indicate ^:dynamic ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)," or change the name"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),(function (warning_type,p__23239){
var map__23240 = p__23239;
var map__23240__$1 = (((((!((map__23240 == null))))?(((((map__23240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23240):map__23240);
var info = map__23240__$1;
var protocol = cljs.core.get.call(null,map__23240__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var method = cljs.core.get.call(null,map__23240__$1,new cljs.core.Keyword(null,"method","method",55703592));
return ["Bad extend-type method shape for protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol)," method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method),", method arities must be grouped together"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),(function (warning_type,p__23242){
var map__23243 = p__23242;
var map__23243__$1 = (((((!((map__23243 == null))))?(((((map__23243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23243):map__23243);
var info = map__23243__$1;
var module_type = cljs.core.get.call(null,map__23243__$1,new cljs.core.Keyword(null,"module-type","module-type",1392760304));
var file = cljs.core.get.call(null,map__23243__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return ["Unsupported JavaScript module type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module_type)," for foreign library ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"."].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),(function (warning_type,p__23245){
var map__23246 = p__23245;
var map__23246__$1 = (((((!((map__23246 == null))))?(((((map__23246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23246):map__23246);
var preprocess = cljs.core.get.call(null,map__23246__$1,new cljs.core.Keyword(null,"preprocess","preprocess",1208285012));
var file = cljs.core.get.call(null,map__23246__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return ["Unsupported preprocess value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(preprocess)," for foreign library ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"."].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),(function (warning_type,p__23248){
var map__23249 = p__23248;
var map__23249__$1 = (((((!((map__23249 == null))))?(((((map__23249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23249):map__23249);
var name = cljs.core.get.call(null,map__23249__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," is shadowed by a local"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),(function (warning_type,p__23251){
var map__23252 = p__23251;
var map__23252__$1 = (((((!((map__23252 == null))))?(((((map__23252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23252):map__23252);
var warn_type = cljs.core.get.call(null,map__23252__$1,new cljs.core.Keyword(null,"warn-type","warn-type",-790105219));
var form = cljs.core.get.call(null,map__23252__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var type = cljs.core.get.call(null,map__23252__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var property = cljs.core.get.call(null,map__23252__$1,new cljs.core.Keyword(null,"property","property",-1114278232));
var G__23254 = warn_type;
var G__23254__$1 = (((G__23254 instanceof cljs.core.Keyword))?G__23254.fqn:null);
switch (G__23254__$1) {
=======
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),(function (warning_type,p__23570){
var map__23571 = p__23570;
var map__23571__$1 = (((((!((map__23571 == null))))?(((((map__23571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23571):map__23571);
var info = map__23571__$1;
var ns = cljs.core.get.call(null,map__23571__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var var$ = cljs.core.get.call(null,map__23571__$1,new cljs.core.Keyword(null,"var","var",-769682797));
return ["Namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," clashes with var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),(function (warning_type,p__23573){
var map__23574 = p__23573;
var map__23574__$1 = (((((!((map__23574 == null))))?(((((map__23574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23574):map__23574);
var info = map__23574__$1;
var var$ = cljs.core.get.call(null,map__23574__$1,new cljs.core.Keyword(null,"var","var",-769682797));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)," not declared dynamic and thus is not dynamically rebindable, but its name ","suggests otherwise. Please either indicate ^:dynamic ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)," or change the name"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),(function (warning_type,p__23576){
var map__23577 = p__23576;
var map__23577__$1 = (((((!((map__23577 == null))))?(((((map__23577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23577):map__23577);
var info = map__23577__$1;
var protocol = cljs.core.get.call(null,map__23577__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var method = cljs.core.get.call(null,map__23577__$1,new cljs.core.Keyword(null,"method","method",55703592));
return ["Bad extend-type method shape for protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol)," method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method),", method arities must be grouped together"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),(function (warning_type,p__23579){
var map__23580 = p__23579;
var map__23580__$1 = (((((!((map__23580 == null))))?(((((map__23580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23580):map__23580);
var info = map__23580__$1;
var module_type = cljs.core.get.call(null,map__23580__$1,new cljs.core.Keyword(null,"module-type","module-type",1392760304));
var file = cljs.core.get.call(null,map__23580__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return ["Unsupported JavaScript module type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(module_type)," for foreign library ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"."].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),(function (warning_type,p__23582){
var map__23583 = p__23582;
var map__23583__$1 = (((((!((map__23583 == null))))?(((((map__23583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23583):map__23583);
var preprocess = cljs.core.get.call(null,map__23583__$1,new cljs.core.Keyword(null,"preprocess","preprocess",1208285012));
var file = cljs.core.get.call(null,map__23583__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return ["Unsupported preprocess value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(preprocess)," for foreign library ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"."].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),(function (warning_type,p__23585){
var map__23586 = p__23585;
var map__23586__$1 = (((((!((map__23586 == null))))?(((((map__23586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23586):map__23586);
var name = cljs.core.get.call(null,map__23586__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," is shadowed by a local"].join('');
}));
cljs.core._add_method.call(null,cljs.analyzer.error_message,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),(function (warning_type,p__23588){
var map__23589 = p__23588;
var map__23589__$1 = (((((!((map__23589 == null))))?(((((map__23589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23589):map__23589);
var warn_type = cljs.core.get.call(null,map__23589__$1,new cljs.core.Keyword(null,"warn-type","warn-type",-790105219));
var form = cljs.core.get.call(null,map__23589__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var type = cljs.core.get.call(null,map__23589__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var property = cljs.core.get.call(null,map__23589__$1,new cljs.core.Keyword(null,"property","property",-1114278232));
var G__23591 = warn_type;
var G__23591__$1 = (((G__23591 instanceof cljs.core.Keyword))?G__23591.fqn:null);
switch (G__23591__$1) {
>>>>>>> 8f3c68a (Initial Commit)
case "target":
return ["Cannot infer target type in expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form),""].join('');

break;
case "property":
return ["Cannot resolve property ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(property)," for inferred type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," in expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('');

break;
case "object":
return ["Adding extern to Object for property ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(property)," due to ","ambiguous expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('');

break;
default:
<<<<<<< HEAD
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23254__$1)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23591__$1)].join('')));
>>>>>>> 8f3c68a (Initial Commit)

}
}));
cljs.analyzer.default_warning_handler = (function cljs$analyzer$default_warning_handler(warning_type,env,extra){
if(cljs.core.truth_(warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_))){
var temp__5720__auto__ = cljs.analyzer.error_message.call(null,warning_type,extra);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
<<<<<<< HEAD
var _STAR_print_fn_STAR__orig_val__23256 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__23257 = cljs.core._STAR_print_err_fn_STAR_;
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23257);

try{return cljs.core.println.call(null,cljs.analyzer.message.call(null,env,["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23256);
=======
var _STAR_print_fn_STAR__orig_val__23593 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__23594 = cljs.core._STAR_print_err_fn_STAR_;
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23594);

try{return cljs.core.println.call(null,cljs.analyzer.message.call(null,env,["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23593);
>>>>>>> 8f3c68a (Initial Commit)
}} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.default_warning_handler], null);
cljs.analyzer.repeat_char = (function cljs$analyzer$repeat_char(c,n){
var ret = c;
var n__$1 = n;
while(true){
if((n__$1 > (0))){
<<<<<<< HEAD
var G__23258 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
var G__23259 = (n__$1 - (1));
ret = G__23258;
n__$1 = G__23259;
=======
var G__23595 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
var G__23596 = (n__$1 - (1));
ret = G__23595;
n__$1 = G__23596;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
return ret;
}
break;
}
});
cljs.analyzer.hex_format = (function cljs$analyzer$hex_format(s,pad){
var hex = s.charCodeAt((0)).toString((16));
var len = hex.length;
var hex__$1 = (((len < pad))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.repeat_char.call(null,"0",(pad - len))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)].join(''):hex);
return ["_u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex__$1),"_"].join('');
});
cljs.analyzer.gen_constant_id = (function cljs$analyzer$gen_constant_id(value){
var prefix = (((value instanceof cljs.core.Keyword))?"cst$kw$":(((value instanceof cljs.core.Symbol))?"cst$sym$":(function(){throw (new Error(["constant type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,value))," not supported"].join('')))})()
));
var name = (((value instanceof cljs.core.Keyword))?cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),(1)):cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
<<<<<<< HEAD
var name__$1 = ((cljs.core._EQ_.call(null,".",name))?"_DOT_":clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.munge.call(null,clojure.string.replace.call(null,name,"-","_DASH_")),".","$"),/[^a-z0-9$_]/i,(function (p1__23260_SHARP_){
return cljs.analyzer.hex_format.call(null,p1__23260_SHARP_,(4));
=======
var name__$1 = ((cljs.core._EQ_.call(null,".",name))?"_DOT_":clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.munge.call(null,clojure.string.replace.call(null,name,"-","_DASH_")),".","$"),/[^a-z0-9$_]/i,(function (p1__23597_SHARP_){
return cljs.analyzer.hex_format.call(null,p1__23597_SHARP_,(4));
>>>>>>> 8f3c68a (Initial Commit)
})));
return cljs.core.symbol.call(null,[prefix,name__$1].join(''));
});
cljs.analyzer.register_constant_BANG_ = (function cljs$analyzer$register_constant_BANG_(var_args){
<<<<<<< HEAD
var G__23262 = arguments.length;
switch (G__23262) {
=======
var G__23599 = arguments.length;
switch (G__23599) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (val){
return cljs.analyzer.register_constant_BANG_.call(null,null,val);
}));

(cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (env,val){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,(function (cenv){
<<<<<<< HEAD
var G__23263 = cljs.core.update_in.call(null,cenv,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889)], null),(function (table){
=======
var G__23600 = cljs.core.update_in.call(null,cenv,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889)], null),(function (table){
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(cljs.core.get.call(null,table,val))){
return table;
} else {
return cljs.core.assoc.call(null,table,val,cljs.analyzer.gen_constant_id.call(null,val));
}
}));
if(cljs.core.truth_(env)){
<<<<<<< HEAD
return cljs.core.update_in.call(null,G__23263,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("cljs.analyzer","constants","cljs.analyzer/constants",1697083770)], null),(function (p__23264){
var map__23265 = p__23264;
var map__23265__$1 = (((((!((map__23265 == null))))?(((((map__23265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23265):map__23265);
var constants = map__23265__$1;
var seen = cljs.core.get.call(null,map__23265__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var order = cljs.core.get.call(null,map__23265__$1,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.PersistentVector.EMPTY);
var G__23267 = constants;
if((!(cljs.core.contains_QMARK_.call(null,seen,val)))){
return cljs.core.assoc.call(null,G__23267,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.conj.call(null,seen,val),new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.conj.call(null,order,val));
} else {
return G__23267;
}
}));
} else {
return G__23263;
=======
return cljs.core.update_in.call(null,G__23600,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("cljs.analyzer","constants","cljs.analyzer/constants",1697083770)], null),(function (p__23601){
var map__23602 = p__23601;
var map__23602__$1 = (((((!((map__23602 == null))))?(((((map__23602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23602):map__23602);
var constants = map__23602__$1;
var seen = cljs.core.get.call(null,map__23602__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var order = cljs.core.get.call(null,map__23602__$1,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.PersistentVector.EMPTY);
var G__23604 = constants;
if((!(cljs.core.contains_QMARK_.call(null,seen,val)))){
return cljs.core.assoc.call(null,G__23604,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.conj.call(null,seen,val),new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.conj.call(null,order,val));
} else {
return G__23604;
}
}));
} else {
return G__23600;
>>>>>>> 8f3c68a (Initial Commit)
}
}));
}));

(cljs.analyzer.register_constant_BANG_.cljs$lang$maxFixedArity = 2);

cljs.analyzer.default_namespaces = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null)], null);
cljs.analyzer.namespaces = (function (){
<<<<<<< HEAD
if((typeof cljs !== 'undefined') && (typeof cljs.analyzer !== 'undefined') && (typeof cljs.analyzer.t_cljs$analyzer23269 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.analyzer !== 'undefined') && (typeof cljs.analyzer.t_cljs$analyzer23606 !== 'undefined')){
>>>>>>> 8f3c68a (Initial Commit)
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.analyzer.t_cljs$analyzer23269 = (function (meta23270){
this.meta23270 = meta23270;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.analyzer.t_cljs$analyzer23269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23271,meta23270__$1){
var self__ = this;
var _23271__$1 = this;
return (new cljs.analyzer.t_cljs$analyzer23269(meta23270__$1));
}));

(cljs.analyzer.t_cljs$analyzer23269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23271){
var self__ = this;
var _23271__$1 = this;
return self__.meta23270;
}));

(cljs.analyzer.t_cljs$analyzer23269.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
=======
cljs.analyzer.t_cljs$analyzer23606 = (function (meta23607){
this.meta23607 = meta23607;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.analyzer.t_cljs$analyzer23606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23608,meta23607__$1){
var self__ = this;
var _23608__$1 = this;
return (new cljs.analyzer.t_cljs$analyzer23606(meta23607__$1));
}));

(cljs.analyzer.t_cljs$analyzer23606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23608){
var self__ = this;
var _23608__$1 = this;
return self__.meta23607;
}));

(cljs.analyzer.t_cljs$analyzer23606.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
>>>>>>> 8f3c68a (Initial Commit)
var self__ = this;
var ___$1 = this;
if((!((cljs.env._STAR_compiler_STAR_ == null)))){
return new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
} else {
return cljs.analyzer.default_namespaces;
}
}));

<<<<<<< HEAD
(cljs.analyzer.t_cljs$analyzer23269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23270","meta23270",-1486817211,null)], null);
}));

(cljs.analyzer.t_cljs$analyzer23269.cljs$lang$type = true);

(cljs.analyzer.t_cljs$analyzer23269.cljs$lang$ctorStr = "cljs.analyzer/t_cljs$analyzer23269");

(cljs.analyzer.t_cljs$analyzer23269.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.analyzer/t_cljs$analyzer23269");
}));

/**
 * Positional factory function for cljs.analyzer/t_cljs$analyzer23269.
 */
cljs.analyzer.__GT_t_cljs$analyzer23269 = (function cljs$analyzer$__GT_t_cljs$analyzer23269(meta23270){
return (new cljs.analyzer.t_cljs$analyzer23269(meta23270));
=======
(cljs.analyzer.t_cljs$analyzer23606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23607","meta23607",-903177640,null)], null);
}));

(cljs.analyzer.t_cljs$analyzer23606.cljs$lang$type = true);

(cljs.analyzer.t_cljs$analyzer23606.cljs$lang$ctorStr = "cljs.analyzer/t_cljs$analyzer23606");

(cljs.analyzer.t_cljs$analyzer23606.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.analyzer/t_cljs$analyzer23606");
}));

/**
 * Positional factory function for cljs.analyzer/t_cljs$analyzer23606.
 */
cljs.analyzer.__GT_t_cljs$analyzer23606 = (function cljs$analyzer$__GT_t_cljs$analyzer23606(meta23607){
return (new cljs.analyzer.t_cljs$analyzer23606(meta23607));
>>>>>>> 8f3c68a (Initial Commit)
});

}

<<<<<<< HEAD
return (new cljs.analyzer.t_cljs$analyzer23269(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cljs.analyzer.get_namespace = (function cljs$analyzer$get_namespace(var_args){
var G__23273 = arguments.length;
switch (G__23273) {
=======
return (new cljs.analyzer.t_cljs$analyzer23606(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cljs.analyzer.get_namespace = (function cljs$analyzer$get_namespace(var_args){
var G__23610 = arguments.length;
switch (G__23610) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1 = (function (key){
return cljs.analyzer.get_namespace.call(null,cljs.env._STAR_compiler_STAR_,key);
}));

(cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2 = (function (cenv,key){
var temp__5722__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,cenv),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),key], null));
if((temp__5722__auto__ == null)){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),key)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null);
} else {
return null;
}
} else {
var ns = temp__5722__auto__;
return ns;
}
}));

(cljs.analyzer.get_namespace.cljs$lang$maxFixedArity = 2);

cljs.analyzer.get_line = (function cljs$analyzer$get_line(x,env){
var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env);
}
});
cljs.analyzer.get_col = (function cljs$analyzer$get_col(x,env){
var or__4126__auto__ = new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(env);
}
});
/**
 * Given a Clojure namespace intern all macros into the ambient ClojureScript
 * analysis environment.
 */
cljs.analyzer.intern_macros = (function cljs$analyzer$intern_macros(var_args){
<<<<<<< HEAD
var G__23276 = arguments.length;
switch (G__23276) {
=======
var G__23613 = arguments.length;
switch (G__23613) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.intern_macros.call(null,ns,false);
}));

(cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2 = (function (ns,reload){
if(cljs.core.truth_((function (){var or__4126__auto__ = (cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)) == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return reload;
}
})())){
<<<<<<< HEAD
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__23277){
var vec__23278 = p__23277;
var k = cljs.core.nth.call(null,vec__23278,(0),null);
var v = cljs.core.nth.call(null,vec__23278,(1),null);
=======
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__23614){
var vec__23615 = p__23614;
var k = cljs.core.nth.call(null,vec__23615,(0),null);
var v = cljs.core.nth.call(null,vec__23615,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var vm = cljs.core.meta.call(null,v);
var ns__$1 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(vm).getName();
return cljs.core.assoc.call(null,vm,new cljs.core.Keyword(null,"ns","ns",441598760),ns__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),new cljs.core.Keyword(null,"macro","macro",-867863404),true);
})()], null);
<<<<<<< HEAD
}),cljs.core.filter.call(null,(function (p__23281){
var vec__23282 = p__23281;
var _ = cljs.core.nth.call(null,vec__23282,(0),null);
var v = cljs.core.nth.call(null,vec__23282,(1),null);
=======
}),cljs.core.filter.call(null,(function (p__23618){
var vec__23619 = p__23618;
var _ = cljs.core.nth.call(null,vec__23619,(0),null);
var v = cljs.core.nth.call(null,vec__23619,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return v.isMacro();
}),cljs.core.ns_interns_STAR_.call(null,ns)))));
} else {
return null;
}
}));

(cljs.analyzer.intern_macros.cljs$lang$maxFixedArity = 2);

/**
 * Construct an empty analysis environment. Required to analyze forms.
 */
cljs.analyzer.empty_env = (function cljs$analyzer$empty_env(){
<<<<<<< HEAD
var val__23076__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__23076__auto__ == null)){
=======
var val__23413__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__23413__auto__ == null)){
>>>>>>> 8f3c68a (Initial Commit)
(cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null));
} else {
}

<<<<<<< HEAD
try{return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"locals","locals",535295783),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"js-globals","js-globals",1670394727),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__23286_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__23286_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"name","name",1843675177),p1__23286_SHARP_,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)],null));
}),cljs.core.list(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.Symbol(null,"window","window",-1929916235,null),new cljs.core.Symbol(null,"document","document",311342840,null),new cljs.core.Symbol(null,"console","console",-1426363712,null),new cljs.core.Symbol(null,"escape","escape",648929575,null),new cljs.core.Symbol(null,"unescape","unescape",-2037730561,null),new cljs.core.Symbol(null,"screen","screen",-664376021,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"navigator","navigator",-604431588,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"global","global",1734126574,null),new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"require","require",1172530194,null),new cljs.core.Symbol(null,"module","module",-1229817578,null),new cljs.core.Symbol(null,"exports","exports",895523255,null))))], null);
}finally {if((val__23076__auto__ == null)){
=======
try{return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"locals","locals",535295783),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"js-globals","js-globals",1670394727),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__23623_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__23623_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"name","name",1843675177),p1__23623_SHARP_,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)],null));
}),cljs.core.list(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.Symbol(null,"window","window",-1929916235,null),new cljs.core.Symbol(null,"document","document",311342840,null),new cljs.core.Symbol(null,"console","console",-1426363712,null),new cljs.core.Symbol(null,"escape","escape",648929575,null),new cljs.core.Symbol(null,"unescape","unescape",-2037730561,null),new cljs.core.Symbol(null,"screen","screen",-664376021,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"navigator","navigator",-604431588,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"global","global",1734126574,null),new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"require","require",1172530194,null),new cljs.core.Symbol(null,"module","module",-1229817578,null),new cljs.core.Symbol(null,"exports","exports",895523255,null))))], null);
}finally {if((val__23413__auto__ == null)){
>>>>>>> 8f3c68a (Initial Commit)
(cljs.env._STAR_compiler_STAR_ = null);
} else {
}
}});
<<<<<<< HEAD
cljs.analyzer.source_info__GT_error_data = (function cljs$analyzer$source_info__GT_error_data(p__23287){
var map__23288 = p__23287;
var map__23288__$1 = (((((!((map__23288 == null))))?(((((map__23288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23288):map__23288);
var file = cljs.core.get.call(null,map__23288__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__23288__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__23288__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553),column], null);
});
cljs.analyzer.source_info = (function cljs$analyzer$source_info(var_args){
var G__23291 = arguments.length;
switch (G__23291) {
=======
cljs.analyzer.source_info__GT_error_data = (function cljs$analyzer$source_info__GT_error_data(p__23624){
var map__23625 = p__23624;
var map__23625__$1 = (((((!((map__23625 == null))))?(((((map__23625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23625):map__23625);
var file = cljs.core.get.call(null,map__23625__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__23625__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__23625__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553),column], null);
});
cljs.analyzer.source_info = (function cljs$analyzer$source_info(var_args){
var G__23628 = arguments.length;
switch (G__23628) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1 = (function (env){
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.analyzer.source_info.call(null,null,env);
} else {
return null;
}
}));

(cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2 = (function (name,env){
<<<<<<< HEAD
var G__23292 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)))?"cljs/core.cljs":cljs.analyzer._STAR_cljs_file_STAR_),new cljs.core.Keyword(null,"line","line",212345235),cljs.analyzer.get_line.call(null,name,env),new cljs.core.Keyword(null,"column","column",2078222095),cljs.analyzer.get_col.call(null,name,env)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"root-source-info","root-source-info",-1436144912).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.core.merge.call(null,G__23292,cljs.core.select_keys.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root-source-info","root-source-info",-1436144912)], null)));
} else {
return G__23292;
=======
var G__23629 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)))?"cljs/core.cljs":cljs.analyzer._STAR_cljs_file_STAR_),new cljs.core.Keyword(null,"line","line",212345235),cljs.analyzer.get_line.call(null,name,env),new cljs.core.Keyword(null,"column","column",2078222095),cljs.analyzer.get_col.call(null,name,env)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"root-source-info","root-source-info",-1436144912).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.core.merge.call(null,G__23629,cljs.core.select_keys.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root-source-info","root-source-info",-1436144912)], null)));
} else {
return G__23629;
>>>>>>> 8f3c68a (Initial Commit)
}
}));

(cljs.analyzer.source_info.cljs$lang$maxFixedArity = 2);

cljs.analyzer.message = (function cljs$analyzer$message(env,s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[" at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):(cljs.core.truth_(cljs.analyzer._STAR_cljs_file_STAR_)?[" in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('');
});
cljs.analyzer.warning = (function cljs$analyzer$warning(warning_type,env,extra){
<<<<<<< HEAD
var seq__23294 = cljs.core.seq.call(null,cljs.analyzer._STAR_cljs_warning_handlers_STAR_);
var chunk__23295 = null;
var count__23296 = (0);
var i__23297 = (0);
while(true){
if((i__23297 < count__23296)){
var handler = cljs.core._nth.call(null,chunk__23295,i__23297);
handler.call(null,warning_type,env,extra);


var G__23298 = seq__23294;
var G__23299 = chunk__23295;
var G__23300 = count__23296;
var G__23301 = (i__23297 + (1));
seq__23294 = G__23298;
chunk__23295 = G__23299;
count__23296 = G__23300;
i__23297 = G__23301;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23294);
if(temp__5720__auto__){
var seq__23294__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23294__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__23294__$1);
var G__23302 = cljs.core.chunk_rest.call(null,seq__23294__$1);
var G__23303 = c__4556__auto__;
var G__23304 = cljs.core.count.call(null,c__4556__auto__);
var G__23305 = (0);
seq__23294 = G__23302;
chunk__23295 = G__23303;
count__23296 = G__23304;
i__23297 = G__23305;
continue;
} else {
var handler = cljs.core.first.call(null,seq__23294__$1);
handler.call(null,warning_type,env,extra);


var G__23306 = cljs.core.next.call(null,seq__23294__$1);
var G__23307 = null;
var G__23308 = (0);
var G__23309 = (0);
seq__23294 = G__23306;
chunk__23295 = G__23307;
count__23296 = G__23308;
i__23297 = G__23309;
=======
var seq__23631 = cljs.core.seq.call(null,cljs.analyzer._STAR_cljs_warning_handlers_STAR_);
var chunk__23632 = null;
var count__23633 = (0);
var i__23634 = (0);
while(true){
if((i__23634 < count__23633)){
var handler = cljs.core._nth.call(null,chunk__23632,i__23634);
handler.call(null,warning_type,env,extra);


var G__23635 = seq__23631;
var G__23636 = chunk__23632;
var G__23637 = count__23633;
var G__23638 = (i__23634 + (1));
seq__23631 = G__23635;
chunk__23632 = G__23636;
count__23633 = G__23637;
i__23634 = G__23638;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23631);
if(temp__5720__auto__){
var seq__23631__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23631__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__23631__$1);
var G__23639 = cljs.core.chunk_rest.call(null,seq__23631__$1);
var G__23640 = c__4556__auto__;
var G__23641 = cljs.core.count.call(null,c__4556__auto__);
var G__23642 = (0);
seq__23631 = G__23639;
chunk__23632 = G__23640;
count__23633 = G__23641;
i__23634 = G__23642;
continue;
} else {
var handler = cljs.core.first.call(null,seq__23631__$1);
handler.call(null,warning_type,env,extra);


var G__23643 = cljs.core.next.call(null,seq__23631__$1);
var G__23644 = null;
var G__23645 = (0);
var G__23646 = (0);
seq__23631 = G__23643;
chunk__23632 = G__23644;
count__23633 = G__23645;
i__23634 = G__23646;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.accumulating_warning_handler = (function cljs$analyzer$accumulating_warning_handler(warn_acc){
return (function (warning_type,env,extra){
if(cljs.core.truth_(warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.core.swap_BANG_.call(null,warn_acc,cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [warning_type,env,extra], null));
} else {
return null;
}
});
});
cljs.analyzer.replay_accumulated_warnings = (function cljs$analyzer$replay_accumulated_warnings(warn_acc){
<<<<<<< HEAD
return cljs.core.run_BANG_.call(null,(function (p1__23310_SHARP_){
return cljs.core.apply.call(null,cljs.analyzer.warning,p1__23310_SHARP_);
}),cljs.core.deref.call(null,warn_acc));
});
cljs.analyzer.error_data = (function cljs$analyzer$error_data(var_args){
var G__23312 = arguments.length;
switch (G__23312) {
=======
return cljs.core.run_BANG_.call(null,(function (p1__23647_SHARP_){
return cljs.core.apply.call(null,cljs.analyzer.warning,p1__23647_SHARP_);
}),cljs.core.deref.call(null,warn_acc));
});
cljs.analyzer.error_data = (function cljs$analyzer$error_data(var_args){
var G__23649 = arguments.length;
switch (G__23649) {
>>>>>>> 8f3c68a (Initial Commit)
case 2:
return cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$2 = (function (env,phase){
return cljs.analyzer.error_data.call(null,env,phase,null);
}));

(cljs.analyzer.error_data.cljs$core$IFn$_invoke$arity$3 = (function (env,phase,symbol){
return cljs.core.merge.call(null,cljs.analyzer.source_info__GT_error_data.call(null,cljs.analyzer.source_info.call(null,env)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase], null),(cljs.core.truth_(symbol)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),symbol], null):null));
}));

(cljs.analyzer.error_data.cljs$lang$maxFixedArity = 3);

cljs.analyzer.compile_syntax_error = (function cljs$analyzer$compile_syntax_error(env,msg,symbol){
return cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compile-syntax-check","compile-syntax-check",-1865080468),symbol),(new Error(msg)));
});
cljs.analyzer.error = (function cljs$analyzer$error(var_args){
<<<<<<< HEAD
var G__23315 = arguments.length;
switch (G__23315) {
=======
var G__23652 = arguments.length;
switch (G__23652) {
>>>>>>> 8f3c68a (Initial Commit)
case 2:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2 = (function (env,msg){
return cljs.analyzer.error.call(null,env,msg,null);
}));

(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3 = (function (env,msg,cause){
return cljs.core.ex_info.call(null,cljs.analyzer.message.call(null,env,msg),cljs.core.assoc.call(null,cljs.analyzer.source_info.call(null,env),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349)),cause);
}));

(cljs.analyzer.error.cljs$lang$maxFixedArity = 3);

cljs.analyzer.analysis_error_QMARK_ = (function cljs$analyzer$analysis_error_QMARK_(ex){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,ex)));
});
cljs.analyzer.has_error_data_QMARK_ = (function cljs$analyzer$has_error_data_QMARK_(ex){
return cljs.core.contains_QMARK_.call(null,cljs.core.ex_data.call(null,ex),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
});
cljs.analyzer.implicit_nses = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"String","String",-2070057435,null),"null",new cljs.core.Symbol(null,"goog.string","goog.string",-2055533048,null),"null",new cljs.core.Symbol(null,"goog","goog",-70603925,null),"null",new cljs.core.Symbol(null,"goog.object","goog.object",678593132,null),"null",new cljs.core.Symbol(null,"Math","Math",2033287572,null),"null",new cljs.core.Symbol(null,"goog.array","goog.array",-671977860,null),"null"], null), null);
cljs.analyzer.implicit_import_QMARK_ = (function cljs$analyzer$implicit_import_QMARK_(env,prefix,suffix){
return cljs.core.contains_QMARK_.call(null,cljs.analyzer.implicit_nses,prefix);
});
cljs.analyzer.confirm_var_exist_warning = (function cljs$analyzer$confirm_var_exist_warning(env,prefix,suffix){
return (function (env__$1,prefix__$1,suffix__$1){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),env__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057),suffix__$1,new cljs.core.Keyword(null,"macro-present?","macro-present?",-1397713205),(!((cljs.analyzer.get_expander.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix__$1)),env__$1) == null)))], null));
});
});
/**
 * Check if a JavaScript namespace has been loaded. JavaScript vars are
 *   not currently checked.
 */
cljs.analyzer.loaded_js_ns_QMARK_ = (function cljs$analyzer$loaded_js_ns_QMARK_(env,prefix){
if(cljs.core.truth_(cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),prefix))){
return null;
} else {
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env);
return (((!((cljs.core.get.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(ns),prefix) == null)))) || ((!((cljs.core.get.call(null,new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ns),prefix) == null)))));
}
});
cljs.analyzer.internal_js_module_exists_QMARK_ = (function cljs$analyzer$internal_js_module_exists_QMARK_(js_module_index,module){
<<<<<<< HEAD
return cljs.core.contains_QMARK_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,(function (p__23318){
var vec__23319 = p__23318;
var k = cljs.core.nth.call(null,vec__23319,(0),null);
var v = cljs.core.nth.call(null,vec__23319,(1),null);
=======
return cljs.core.contains_QMARK_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,(function (p__23655){
var vec__23656 = p__23655;
var k = cljs.core.nth.call(null,vec__23656,(0),null);
var v = cljs.core.nth.call(null,vec__23656,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v)], null);
})),js_module_index),cljs.core.str.cljs$core$IFn$_invoke$arity$1(module));
});
cljs.analyzer.js_module_exists_QMARK__STAR_ = cljs.core.memoize.call(null,cljs.analyzer.internal_js_module_exists_QMARK_);
cljs.analyzer.js_module_exists_QMARK_ = (function cljs$analyzer$js_module_exists_QMARK_(module){
return cljs.analyzer.js_module_exists_QMARK__STAR_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931)], null)),module);
});
cljs.analyzer.node_module_dep_QMARK_ = (function cljs$analyzer$node_module_dep_QMARK_(module){
try{return ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs")) && (cljs.core.boolean$.call(null,require.resolve(cljs.core.str.cljs$core$IFn$_invoke$arity$1(module)))));
<<<<<<< HEAD
}catch (e23322){var _ = e23322;
=======
}catch (e23659){var _ = e23659;
>>>>>>> 8f3c68a (Initial Commit)
return false;
}});
cljs.analyzer.dep_has_global_exports_QMARK_ = (function cljs$analyzer$dep_has_global_exports_QMARK_(module){
var global_exports = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131),cljs.core.str.cljs$core$IFn$_invoke$arity$1(module),new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592)], null));
return ((cljs.core.contains_QMARK_.call(null,global_exports,cljs.core.symbol.call(null,module))) || (cljs.core.contains_QMARK_.call(null,global_exports,cljs.core.name.call(null,module))));
});
cljs.analyzer.confirm_var_exists = (function cljs$analyzer$confirm_var_exists(var_args){
<<<<<<< HEAD
var G__23324 = arguments.length;
switch (G__23324) {
=======
var G__23661 = arguments.length;
switch (G__23661) {
>>>>>>> 8f3c68a (Initial Commit)
case 3:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3 = (function (env,prefix,suffix){
var warn = cljs.analyzer.confirm_var_exist_warning.call(null,env,prefix,suffix);
return cljs.analyzer.confirm_var_exists.call(null,env,prefix,suffix,warn);
}));

(cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4 = (function (env,prefix,suffix,missing_fn){
var sufstr = cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix);
var suffix_str = (((((!((".." === sufstr)))) && (/\./.test(sufstr))))?cljs.core.first.call(null,clojure.string.split.call(null,sufstr,/\./)):suffix);
var suffix__$1 = cljs.core.symbol.call(null,suffix_str);
if((((!(cljs.analyzer.implicit_import_QMARK_.call(null,env,prefix,suffix__$1)))) && ((!(cljs.analyzer.loaded_js_ns_QMARK_.call(null,env,prefix)))) && ((!(((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),prefix)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),suffix__$1)))))) && ((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),prefix,new cljs.core.Keyword(null,"defs","defs",1398449717),suffix__$1) == null)) && (cljs.core.not.call(null,cljs.analyzer.js_module_exists_QMARK_.call(null,prefix))))){
return missing_fn.call(null,env,prefix,suffix__$1);
} else {
return null;
}
}));

(cljs.analyzer.confirm_var_exists.cljs$lang$maxFixedArity = 4);

cljs.analyzer.confirm_var_exists_throw = (function cljs$analyzer$confirm_var_exists_throw(){
return (function (env,prefix,suffix){
return cljs.analyzer.confirm_var_exists.call(null,env,prefix,suffix,(function (env__$1,prefix__$1,suffix__$1){
throw cljs.analyzer.error.call(null,env__$1,["Unable to resolve var: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix__$1)," in this context"].join(''));
}));
});
});
cljs.analyzer.resolve_ns_alias = (function cljs$analyzer$resolve_ns_alias(var_args){
<<<<<<< HEAD
var G__23327 = arguments.length;
switch (G__23327) {
=======
var G__23664 = arguments.length;
switch (G__23664) {
>>>>>>> 8f3c68a (Initial Commit)
case 2:
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$2 = (function (env,name){
return cljs.analyzer.resolve_ns_alias.call(null,env,name,cljs.core.symbol.call(null,name));
}));

(cljs.analyzer.resolve_ns_alias.cljs$core$IFn$_invoke$arity$3 = (function (env,name,not_found){
var sym = cljs.core.symbol.call(null,name);
return cljs.core.get.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),sym,not_found);
}));

(cljs.analyzer.resolve_ns_alias.cljs$lang$maxFixedArity = 3);

cljs.analyzer.resolve_macro_ns_alias = (function cljs$analyzer$resolve_macro_ns_alias(var_args){
<<<<<<< HEAD
var G__23330 = arguments.length;
switch (G__23330) {
=======
var G__23667 = arguments.length;
switch (G__23667) {
>>>>>>> 8f3c68a (Initial Commit)
case 2:
return cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$2 = (function (env,name){
return cljs.analyzer.resolve_macro_ns_alias.call(null,env,name,cljs.core.symbol.call(null,name));
}));

(cljs.analyzer.resolve_macro_ns_alias.cljs$core$IFn$_invoke$arity$3 = (function (env,name,not_found){
var sym = cljs.core.symbol.call(null,name);
return cljs.core.get.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),sym,not_found);
}));

(cljs.analyzer.resolve_macro_ns_alias.cljs$lang$maxFixedArity = 3);

/**
 * Given env, an analysis environment, and ns-sym, a symbol identifying a
 * namespace, confirm that the namespace exists. Warn if not found.
 */
cljs.analyzer.confirm_ns = (function cljs$analyzer$confirm_ns(env,ns_sym){
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),ns_sym)) && ((cljs.core.get.call(null,cljs.analyzer.implicit_nses,ns_sym) == null)) && ((cljs.core.get.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),ns_sym) == null)) && ((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_sym) == null)) && (cljs.core.not.call(null,cljs.analyzer.js_module_exists_QMARK_.call(null,ns_sym))))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),ns_sym,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),ns_sym], null));
} else {
return null;
}
});
/**
 * Is sym visible from core in the current compilation namespace?
 */
cljs.analyzer.core_name_QMARK_ = (function cljs$analyzer$core_name_QMARK_(env,sym){
if((function (){var or__4126__auto__ = (!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Keyword(null,"defs","defs",1398449717),sym) == null)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var temp__5722__auto__ = cljs.analyzer.get_expander.call(null,sym,env);
if((temp__5722__auto__ == null)){
return false;
} else {
var mac = temp__5722__auto__;
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,mac));
return cljs.core._EQ_.call(null,ns.getName(),new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null));
}
}
})()){
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"excludes","excludes",-1791725945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),sym)));
} else {
return false;
}
});
/**
 * Is sym public?
 */
cljs.analyzer.public_name_QMARK_ = (function cljs$analyzer$public_name_QMARK_(ns,sym){
var var_ast = (function (){var or__4126__auto__ = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.symbol.call(null,[cljs.core.name.call(null,ns),"$macros"].join('')),new cljs.core.Keyword(null,"defs","defs",1398449717),sym);
}
})();
return (((!((var_ast == null)))) && (cljs.core.not.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(var_ast);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"anonymous","anonymous",447897231).cljs$core$IFn$_invoke$arity$1(var_ast);
}
})())));
});
cljs.analyzer.js_tag_QMARK_ = (function cljs$analyzer$js_tag_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"js","js",-886355190,null),x)) || (cljs.core._EQ_.call(null,"js",cljs.core.namespace.call(null,x))))));
});
cljs.analyzer.normalize_js_tag = (function cljs$analyzer$normalize_js_tag(x){
if((!(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"js","js",-886355190,null),x)))){
return cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.symbol,clojure.string.split.call(null,cljs.core.name.call(null,x),/\./))),new cljs.core.Symbol(null,"prototype","prototype",519166522,null))], null));
} else {
return x;
}
});
/**
 * Ensures that a type tag is a set.
 */
cljs.analyzer.__GT_type_set = (function cljs$analyzer$__GT_type_set(t){
if(cljs.analyzer.cljs_set_QMARK_.call(null,t)){
return t;
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([t]);
}
});
cljs.analyzer.canonicalize_type = (function cljs$analyzer$canonicalize_type(t){

if((t instanceof cljs.core.Symbol)){
return t;
} else {
if(cljs.core.empty_QMARK_.call(null,t)){
return null;
} else {
if(((1) === cljs.core.count.call(null,t))){
return cljs.core.first.call(null,t);
} else {
if(cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"any","any",-948528346,null))){
return new cljs.core.Symbol(null,"any","any",-948528346,null);
} else {
if(cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"seq","seq",-177272256,null))){
var res = cljs.core.disj.call(null,t,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null));
if(((1) === cljs.core.count.call(null,res))){
return new cljs.core.Symbol(null,"seq","seq",-177272256,null);
} else {
return res;
}
} else {
return t;

}
}
}
}
}
});
/**
 * Produces a union of types.
 */
cljs.analyzer.add_types = (function cljs$analyzer$add_types(var_args){
<<<<<<< HEAD
var G__23336 = arguments.length;
switch (G__23336) {
=======
var G__23673 = arguments.length;
switch (G__23673) {
>>>>>>> 8f3c68a (Initial Commit)
case 0:
return cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___23338 = arguments.length;
var i__4737__auto___23339 = (0);
while(true){
if((i__4737__auto___23339 < len__4736__auto___23338)){
args_arr__4757__auto__.push((arguments[i__4737__auto___23339]));

var G__23340 = (i__4737__auto___23339 + (1));
i__4737__auto___23339 = G__23340;
=======
var len__4736__auto___23675 = arguments.length;
var i__4737__auto___23676 = (0);
while(true){
if((i__4737__auto___23676 < len__4736__auto___23675)){
args_arr__4757__auto__.push((arguments[i__4737__auto___23676]));

var G__23677 = (i__4737__auto___23676 + (1));
i__4737__auto___23676 = G__23677;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.Symbol(null,"any","any",-948528346,null);
}));

(cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$1 = (function (t1){
return t1;
}));

(cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$2 = (function (t1,t2){
if((((t1 == null)) || ((t2 == null)))){
return new cljs.core.Symbol(null,"any","any",-948528346,null);
} else {
return cljs.analyzer.canonicalize_type.call(null,clojure.set.union.call(null,cljs.analyzer.__GT_type_set.call(null,t1),cljs.analyzer.__GT_type_set.call(null,t2)));
}
}));

(cljs.analyzer.add_types.cljs$core$IFn$_invoke$arity$variadic = (function (t1,t2,ts){
return cljs.core.apply.call(null,cljs.analyzer.add_types,cljs.analyzer.add_types.call(null,t1,t2),ts);
}));

/** @this {Function} */
<<<<<<< HEAD
(cljs.analyzer.add_types.cljs$lang$applyTo = (function (seq23333){
var G__23334 = cljs.core.first.call(null,seq23333);
var seq23333__$1 = cljs.core.next.call(null,seq23333);
var G__23335 = cljs.core.first.call(null,seq23333__$1);
var seq23333__$2 = cljs.core.next.call(null,seq23333__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23334,G__23335,seq23333__$2);
=======
(cljs.analyzer.add_types.cljs$lang$applyTo = (function (seq23670){
var G__23671 = cljs.core.first.call(null,seq23670);
var seq23670__$1 = cljs.core.next.call(null,seq23670);
var G__23672 = cljs.core.first.call(null,seq23670__$1);
var seq23670__$2 = cljs.core.next.call(null,seq23670__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23671,G__23672,seq23670__$2);
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.analyzer.add_types.cljs$lang$maxFixedArity = (2));

cljs.analyzer.alias__GT_type = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"object","object",-1179821820,null),new cljs.core.Symbol(null,"Object","Object",61210754,null),new cljs.core.Symbol(null,"string","string",-349010059,null),new cljs.core.Symbol(null,"String","String",-2070057435,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol(null,"Number","Number",-508146185,null),new cljs.core.Symbol(null,"array","array",-440182315,null),new cljs.core.Symbol(null,"Array","Array",-423496279,null),new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"Function","Function",-749895448,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Symbol(null,"Boolean","Boolean",1661141587,null),new cljs.core.Symbol(null,"symbol","symbol",601958831,null),new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null)], null);
cljs.analyzer.has_extern_QMARK__STAR_ = (function cljs$analyzer$has_extern_QMARK__STAR_(var_args){
<<<<<<< HEAD
var G__23342 = arguments.length;
switch (G__23342) {
=======
var G__23679 = arguments.length;
switch (G__23679) {
>>>>>>> 8f3c68a (Initial Commit)
case 2:
return cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$2 = (function (pre,externs){
var pre__$1 = (function (){var temp__5722__auto__ = cljs.core.find.call(null,cljs.core.get_in.call(null,externs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Window","Window",-138860255,null),new cljs.core.Symbol(null,"prototype","prototype",519166522,null)], null)),cljs.core.first.call(null,pre));
if((temp__5722__auto__ == null)){
return pre;
} else {
var me = temp__5722__auto__;
var temp__5722__auto____$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.first.call(null,me)));
if((temp__5722__auto____$1 == null)){
return pre;
} else {
var tag = temp__5722__auto____$1;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,new cljs.core.Symbol(null,"prototype","prototype",519166522,null)], null),cljs.core.next.call(null,pre));
}
}
})();
return cljs.analyzer.has_extern_QMARK__STAR_.call(null,pre__$1,externs,externs);
}));

(cljs.analyzer.has_extern_QMARK__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (pre,externs,top){
while(true){
if(cljs.core.empty_QMARK_.call(null,pre)){
return true;
} else {
var x = cljs.core.first.call(null,pre);
var me = cljs.core.find.call(null,externs,x);
if(cljs.core.not.call(null,me)){
return false;
} else {
<<<<<<< HEAD
var vec__23343 = me;
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__23343,(0),null);
var externs_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__23343,(1),null);
=======
var vec__23680 = me;
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__23680,(0),null);
var externs_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__23680,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var xmeta = cljs.core.meta.call(null,x_SINGLEQUOTE_);
if(cljs.core.truth_(((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Function","Function",-749895448,null),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(xmeta)))?new cljs.core.Keyword(null,"ctor","ctor",1750864802).cljs$core$IFn$_invoke$arity$1(xmeta):false))){
var or__4126__auto__ = cljs.analyzer.has_extern_QMARK__STAR_.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prototype","prototype",519166522,null)], null),cljs.core.next.call(null,pre)),externs_SINGLEQUOTE_,top);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.analyzer.has_extern_QMARK__STAR_.call(null,cljs.core.next.call(null,pre),externs_SINGLEQUOTE_,top);
}
} else {
<<<<<<< HEAD
var G__23347 = cljs.core.next.call(null,pre);
var G__23348 = externs_SINGLEQUOTE_;
var G__23349 = top;
pre = G__23347;
externs = G__23348;
top = G__23349;
=======
var G__23684 = cljs.core.next.call(null,pre);
var G__23685 = externs_SINGLEQUOTE_;
var G__23686 = top;
pre = G__23684;
externs = G__23685;
top = G__23686;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}

}

}
break;
}
}));

(cljs.analyzer.has_extern_QMARK__STAR_.cljs$lang$maxFixedArity = 3);

cljs.analyzer.has_extern_QMARK_ = (function cljs$analyzer$has_extern_QMARK_(var_args){
<<<<<<< HEAD
var G__23351 = arguments.length;
switch (G__23351) {
=======
var G__23688 = arguments.length;
switch (G__23688) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (pre){
return cljs.analyzer.has_extern_QMARK_.call(null,pre,cljs.analyzer.get_externs.call(null));
}));

(cljs.analyzer.has_extern_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pre,externs){
var or__4126__auto__ = cljs.analyzer.has_extern_QMARK__STAR_.call(null,pre,externs);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pre)))?(function (){var x = cljs.core.first.call(null,pre);
var or__4126__auto____$1 = cljs.core.get_in.call(null,externs,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Window","Window",-138860255,null),new cljs.core.Symbol(null,"prototype","prototype",519166522,null)], null),x));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.get_in.call(null,externs,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Number","Number",-508146185,null)], null),x));
}
})():null);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return clojure.string.starts_with_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pre)),"cljs$");
}
}
}));

(cljs.analyzer.has_extern_QMARK_.cljs$lang$maxFixedArity = 2);

cljs.analyzer.js_tag = (function cljs$analyzer$js_tag(var_args){
<<<<<<< HEAD
var G__23354 = arguments.length;
switch (G__23354) {
=======
var G__23691 = arguments.length;
switch (G__23691) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$1 = (function (pre){
return cljs.analyzer.js_tag.call(null,pre,new cljs.core.Keyword(null,"tag","tag",-1290361223));
}));

(cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$2 = (function (pre,tag_type){
return cljs.analyzer.js_tag.call(null,pre,tag_type,cljs.analyzer.get_externs.call(null));
}));

(cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$3 = (function (pre,tag_type,externs){
return cljs.analyzer.js_tag.call(null,pre,tag_type,externs,externs);
}));

(cljs.analyzer.js_tag.cljs$core$IFn$_invoke$arity$4 = (function (pre,tag_type,externs,top){
var temp__5720__auto__ = cljs.core.find.call(null,externs,cljs.core.first.call(null,pre));
if(cljs.core.truth_(temp__5720__auto__)){
<<<<<<< HEAD
var vec__23355 = temp__5720__auto__;
var p = cljs.core.nth.call(null,vec__23355,(0),null);
var externs_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__23355,(1),null);
var me = vec__23355;
=======
var vec__23692 = temp__5720__auto__;
var p = cljs.core.nth.call(null,vec__23692,(0),null);
var externs_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__23692,(1),null);
var me = vec__23692;
>>>>>>> 8f3c68a (Initial Commit)
var tag = tag_type.call(null,cljs.core.meta.call(null,p));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pre),(1))){
if(cljs.core.truth_(tag)){
return cljs.core.symbol.call(null,"js",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.alias__GT_type.call(null,tag,tag)));
} else {
return null;
}
} else {
var or__4126__auto__ = cljs.analyzer.js_tag.call(null,cljs.core.next.call(null,pre),tag_type,externs_SINGLEQUOTE_,top);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.analyzer.js_tag.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prototype","prototype",519166522,null)], null),cljs.core.next.call(null,pre)),tag_type,cljs.core.get.call(null,top,tag),top);
}
}
} else {
return null;
}
}));

(cljs.analyzer.js_tag.cljs$lang$maxFixedArity = 4);

cljs.analyzer.dotted_symbol_QMARK_ = (function cljs$analyzer$dotted_symbol_QMARK_(sym){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym);
return ((goog.string.contains(s,".")) && ((!(goog.string.contains(s,"..")))));
});
cljs.analyzer.munge_node_lib = (function cljs$analyzer$munge_node_lib(name){
return ["node$module$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),/[.\\/]/,"$$")))].join('');
});
cljs.analyzer.munge_global_export = (function cljs$analyzer$munge_global_export(name){
return ["global$module$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),/[.\\/]/,"$$")))].join('');
});
/**
 * Takes a namespace and an unqualified symbol and potentially returns a new
 *   symbol to be used in lieu of the original.
 */
cljs.analyzer.resolve_alias = (function cljs$analyzer$resolve_alias(ns,sym){
if(cljs.core.truth_(((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),ns))?(function (){var and__4115__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"aget","aget",1491056546,null),"null",new cljs.core.Symbol(null,"aset","aset",900773178,null),"null"], null), null).call(null,sym);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.analyzer.checked_arrays.call(null);
} else {
return and__4115__auto__;
}
})():false))){
return cljs.core.get_in.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"aget","aget",1491056546,null),new cljs.core.Symbol(null,"checked-aget","checked-aget",950823006,null),new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"checked-aset","checked-aset",1556136760,null)], null),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"aget","aget",1491056546,null),new cljs.core.Symbol(null,"checked-aget'","checked-aget'",212330530,null),new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"checked-aset'","checked-aset'",-510930777,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.checked_arrays.call(null),sym], null));
} else {
return sym;
}
});
cljs.analyzer.ns__GT_module_type = (function cljs$analyzer$ns__GT_module_type(ns){
if(cljs.core.truth_(cljs.analyzer.js_module_exists_QMARK_.call(null,ns))){
return new cljs.core.Keyword(null,"js","js",1768080579);
} else {
if(cljs.analyzer.node_module_dep_QMARK_.call(null,ns)){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
if(cljs.analyzer.dep_has_global_exports_QMARK_.call(null,ns)){
return new cljs.core.Keyword(null,"global","global",93595047);
} else {
return null;
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.analyzer !== 'undefined') && (typeof cljs.analyzer.resolve_STAR_ !== 'undefined')){
} else {
cljs.analyzer.resolve_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.analyzer","resolve*"),(function (env,sym,full_ns,current_ns){
return cljs.analyzer.ns__GT_module_type.call(null,full_ns);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,cljs.analyzer.resolve_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (env,sym,full_ns,current_ns){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns),cljs.core.name.call(null,sym)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"ns","ns",441598760),full_ns], null);
}));
cljs.analyzer.extern_pre = (function cljs$analyzer$extern_pre(sym,current_ns){
var pre = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Object","Object",61210754,null)], null),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.symbol,clojure.string.split.call(null,cljs.core.name.call(null,sym),/\./))));
if(cljs.core.truth_(cljs.analyzer.has_extern_QMARK_.call(null,pre))){
} else {
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"externs","externs",221720677)], null),pre),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY);
}

return pre;
});
cljs.analyzer.node_like_QMARK_ = (function cljs$analyzer$node_like_QMARK_(var_args){
<<<<<<< HEAD
var G__23360 = arguments.length;
switch (G__23360) {
=======
var G__23697 = arguments.length;
switch (G__23697) {
>>>>>>> 8f3c68a (Initial Commit)
case 0:
return cljs.analyzer.node_like_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.node_like_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.node_like_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.node_like_QMARK_.call(null,cljs.analyzer.compiler_options.call(null));
}));

(cljs.analyzer.node_like_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts))) && (new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071).cljs$core$IFn$_invoke$arity$1(opts) === false));
}));

(cljs.analyzer.node_like_QMARK_.cljs$lang$maxFixedArity = 1);

cljs.core._add_method.call(null,cljs.analyzer.resolve_STAR_,new cljs.core.Keyword(null,"node","node",581201198),(function (env,sym,full_ns,current_ns){
if(cljs.core.truth_(cljs.analyzer.node_like_QMARK_.call(null))){
var pre = cljs.analyzer.extern_pre.call(null,sym,current_ns);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),current_ns,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),[cljs.analyzer.munge_node_lib.call(null,full_ns),".",cljs.core.name.call(null,sym)].join('')),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),pre], null)),new cljs.core.Keyword(null,"foreign","foreign",990521149),true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),current_ns,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),[cljs.analyzer.munge_node_lib.call(null,full_ns),".",cljs.core.name.call(null,sym)].join('')),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"foreign","foreign",990521149),true], null);
}
}));
cljs.core._add_method.call(null,cljs.analyzer.resolve_STAR_,new cljs.core.Keyword(null,"global","global",93595047),(function (env,sym,full_ns,current_ns){
var pre = cljs.analyzer.extern_pre.call(null,sym,current_ns);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),current_ns,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),[cljs.analyzer.munge_global_export.call(null,full_ns),".",cljs.core.name.call(null,sym)].join('')),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),pre], null)),new cljs.core.Keyword(null,"foreign","foreign",990521149),true], null);
}));
/**
 * Specially-treated symbols for which we don't trigger :private-var-access warnings.
 */
cljs.analyzer.private_var_access_exceptions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),"null",new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),"null",new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),"null",new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),"null"], null), null);
cljs.core._add_method.call(null,cljs.analyzer.resolve_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,sym,full_ns,current_ns){
var sym_ast = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),full_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,sym)));
var sym_name = cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns),cljs.core.name.call(null,sym));
if(cljs.core.truth_(((cljs.core.not_EQ_.call(null,current_ns,full_ns))?(function (){var and__4115__auto__ = new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(sym_ast);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,cljs.analyzer._STAR_private_var_access_nowarn_STAR_)) && ((!(cljs.core.contains_QMARK_.call(null,cljs.analyzer.private_var_access_exceptions,sym_name)))));
} else {
return and__4115__auto__;
}
})():false))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym_name], null));
} else {
}

return cljs.core.merge.call(null,sym_ast,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sym_name,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"ns","ns",441598760),full_ns], null));
}));
cljs.analyzer.required_QMARK_ = (function cljs$analyzer$required_QMARK_(ns,env){
return ((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"requires","requires",-1201390927)))),ns)) || (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"uses","uses",232664692)))),ns)));
});
/**
 * Returns true if ns is a required namespace and a JavaScript module that
 * might be invokeable as a function.
 */
cljs.analyzer.invokeable_ns_QMARK_ = (function cljs$analyzer$invokeable_ns_QMARK_(ns,env){
var ns__$1 = cljs.analyzer.resolve_ns_alias.call(null,env,ns);
if(cljs.analyzer.required_QMARK_.call(null,ns__$1,env)){
var or__4126__auto__ = cljs.analyzer.js_module_exists_QMARK_.call(null,ns__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((cljs.analyzer.node_module_dep_QMARK_.call(null,ns__$1)) || (cljs.analyzer.dep_has_global_exports_QMARK_.call(null,ns__$1)));
}
} else {
return false;
}
});
cljs.analyzer.resolve_invokeable_ns = (function cljs$analyzer$resolve_invokeable_ns(ns,current_ns,env){
var ns__$1 = cljs.analyzer.resolve_ns_alias.call(null,env,ns);
var module_type = cljs.analyzer.ns__GT_module_type.call(null,ns__$1);
<<<<<<< HEAD
var G__23362 = module_type;
var G__23362__$1 = (((G__23362 instanceof cljs.core.Keyword))?G__23362.fqn:null);
switch (G__23362__$1) {
=======
var G__23699 = module_type;
var G__23699__$1 = (((G__23699 instanceof cljs.core.Keyword))?G__23699.fqn:null);
switch (G__23699__$1) {
>>>>>>> 8f3c68a (Initial Commit)
case "js":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,(function (){var or__4126__auto__ = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),ns__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.analyzer.resolve_ns_alias.call(null,env,ns__$1);
}
})()),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"js","js",-886355190,null)], null);

break;
case "node":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),cljs.analyzer.munge_node_lib.call(null,cljs.analyzer.resolve_ns_alias.call(null,env,ns__$1))),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"ns","ns",441598760),current_ns], null);

break;
case "global":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),cljs.analyzer.munge_global_export.call(null,cljs.analyzer.resolve_ns_alias.call(null,env,ns__$1))),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"ns","ns",441598760),current_ns], null);

break;
default:
<<<<<<< HEAD
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23362__$1)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23699__$1)].join('')));
>>>>>>> 8f3c68a (Initial Commit)

}
});
cljs.analyzer.handle_symbol_local = (function cljs$analyzer$handle_symbol_local(sym,lb){
if((lb instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),sym], null);
} else {
return lb;
}
});
/**
 * Resolve a var. Accepts a side-effecting confirm fn for producing
 * warnings about unresolved vars.
 */
cljs.analyzer.resolve_var = (function cljs$analyzer$resolve_var(var_args){
<<<<<<< HEAD
var G__23366 = arguments.length;
switch (G__23366) {
=======
var G__23703 = arguments.length;
switch (G__23703) {
>>>>>>> 8f3c68a (Initial Commit)
case 2:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2 = (function (env,sym){
return cljs.analyzer.resolve_var.call(null,env,sym,null);
}));

(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3 = (function (env,sym,confirm){
return cljs.analyzer.resolve_var.call(null,env,sym,confirm,true);
}));

(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$4 = (function (env,sym,confirm,default_QMARK_){
while(true){
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
if(("js" === cljs.core.namespace.call(null,sym))){
var symn = cljs.core.symbol.call(null,cljs.core.name.call(null,sym));
var shadowed_by_local = cljs.analyzer.handle_symbol_local.call(null,symn,cljs.core.get.call(null,locals,symn));
if((!((shadowed_by_local == null)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),sym], null));

return cljs.core.assoc.call(null,shadowed_by_local,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"local","local",-1497766724));
} else {
var pre = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.symbol,clojure.string.split.call(null,cljs.core.name.call(null,sym),/\./)));
if(((cljs.core.not.call(null,cljs.analyzer.has_extern_QMARK_.call(null,pre))) && (cljs.core.not.call(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym)))))){
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"externs","externs",221720677)], null),pre),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),sym,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-var","js-var",-1177899142),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.with_meta.call(null,(function (){var or__4126__auto__ = cljs.analyzer.js_tag.call(null,pre);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Symbol(null,"js","js",-886355190,null);
}
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),pre], null))], null),(function (){var temp__5720__auto__ = cljs.analyzer.js_tag.call(null,pre,new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990));
if(cljs.core.truth_(temp__5720__auto__)){
var ret_tag = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"js-fn-var","js-fn-var",-565665358),true,new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),ret_tag], null);
} else {
return null;
}
})());

}
} else {
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym);
var lb = cljs.analyzer.handle_symbol_local.call(null,sym,cljs.core.get.call(null,locals,sym));
var current_ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
if((!((lb == null)))){
return cljs.core.assoc.call(null,lb,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"local","local",-1497766724));
} else {
if((!((cljs.core.namespace.call(null,sym) == null)))){
var ns = cljs.core.namespace.call(null,sym);
var ns__$1 = ((("clojure.core" === ns))?"cljs.core":ns);
var full_ns = cljs.analyzer.resolve_ns_alias.call(null,env,ns__$1,(function (){var or__4126__auto__ = (function (){var and__4115__auto__ = cljs.analyzer.js_module_exists_QMARK_.call(null,ns__$1);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),ns__$1,new cljs.core.Keyword(null,"name","name",1843675177));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.symbol.call(null,ns__$1);
}
})());
if((!((confirm == null)))){
if(cljs.core.not_EQ_.call(null,current_ns,full_ns)){
cljs.analyzer.confirm_ns.call(null,env,full_ns);
} else {
}

confirm.call(null,env,full_ns,cljs.core.symbol.call(null,cljs.core.name.call(null,sym)));
} else {
}

return cljs.analyzer.resolve_STAR_.call(null,env,sym,full_ns,current_ns);
} else {
if(cljs.analyzer.dotted_symbol_QMARK_.call(null,sym)){
var idx = s.indexOf(".");
var prefix = cljs.core.symbol.call(null,cljs.core.subs.call(null,s,(0),idx));
var suffix = cljs.core.subs.call(null,s,(idx + (1)));
var temp__5718__auto__ = cljs.analyzer.resolve_var.call(null,env,prefix,null,false);
if(cljs.core.truth_(temp__5718__auto__)){
var resolved = temp__5718__auto__;
return cljs.core.update.call(null,resolved,new cljs.core.Keyword(null,"name","name",1843675177),((function (env,sym,confirm,default_QMARK_,resolved,temp__5718__auto__,idx,prefix,suffix,s,lb,current_ns,locals){
<<<<<<< HEAD
return (function (p1__23364_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23364_SHARP_),".",suffix].join(''));
=======
return (function (p1__23701_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23701_SHARP_),".",suffix].join(''));
>>>>>>> 8f3c68a (Initial Commit)
});})(env,sym,confirm,default_QMARK_,resolved,temp__5718__auto__,idx,prefix,suffix,s,lb,current_ns,locals))
);
} else {
var idx__$1 = s.lastIndexOf(".");
var pre = cljs.core.subs.call(null,s,(0),idx__$1);
var suf = cljs.core.subs.call(null,s,(idx__$1 + (1)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,pre,suf),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.call(null,pre)], null);
}
} else {
if((!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"uses","uses",232664692),sym) == null)))){
var full_ns = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"uses","uses",232664692),sym);
return cljs.analyzer.resolve_STAR_.call(null,env,sym,full_ns,current_ns);
} else {
if((!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"renames","renames",343278368),sym) == null)))){
var qualified_symbol = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"renames","renames",343278368),sym);
var full_ns = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_symbol));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,qualified_symbol));
return cljs.analyzer.resolve_STAR_.call(null,env,sym__$1,full_ns,current_ns);
} else {
if((!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"imports","imports",-1249933394),sym) == null)))){
<<<<<<< HEAD
var G__23368 = env;
var G__23369 = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"imports","imports",-1249933394),sym);
var G__23370 = confirm;
var G__23371 = default_QMARK_;
env = G__23368;
sym = G__23369;
confirm = G__23370;
default_QMARK_ = G__23371;
=======
var G__23705 = env;
var G__23706 = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"imports","imports",-1249933394),sym);
var G__23707 = confirm;
var G__23708 = default_QMARK_;
env = G__23705;
sym = G__23706;
confirm = G__23707;
default_QMARK_ = G__23708;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
if((!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym) == null)))){
if((!((confirm == null)))){
confirm.call(null,env,current_ns,sym);
} else {
}

return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"ns","ns",441598760),current_ns], null));
} else {
if(cljs.analyzer.core_name_QMARK_.call(null,env,sym)){
if((!((confirm == null)))){
confirm.call(null,env,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),sym);
} else {
}

return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Keyword(null,"defs","defs",1398449717),sym),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,"cljs.core",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null));
} else {
if(cljs.core.truth_(cljs.analyzer.invokeable_ns_QMARK_.call(null,s,env))){
return cljs.analyzer.resolve_invokeable_ns.call(null,s,current_ns,env);
} else {
if(cljs.core.truth_(default_QMARK_)){
if((!((confirm == null)))){
confirm.call(null,env,current_ns,sym);
} else {
}

return cljs.core.merge.call(null,cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),current_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"ns","ns",441598760),current_ns], null));
} else {
return null;
}

}
}
}
}
}
}
}
}
}
}
break;
}
}));

(cljs.analyzer.resolve_var.cljs$lang$maxFixedArity = 4);

/**
 * Given env, an analysis environment, and sym, a symbol, resolve an existing var.
 * Emits a warning if no such var exists.
 */
cljs.analyzer.resolve_existing_var = (function cljs$analyzer$resolve_existing_var(env,sym){
if(cljs.core.not.call(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym)))){
return cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists);
} else {
return cljs.analyzer.resolve_var.call(null,env,sym);
}
});
/**
 * Given env, an analysis environment env, and names, a list of symbols, confirm
 * that all correspond to declared dynamic vars.
 */
cljs.analyzer.confirm_bindings = (function cljs$analyzer$confirm_bindings(env,names){
<<<<<<< HEAD
var seq__23372 = cljs.core.seq.call(null,names);
var chunk__23373 = null;
var count__23374 = (0);
var i__23375 = (0);
while(true){
if((i__23375 < count__23374)){
var name = cljs.core._nth.call(null,chunk__23373,i__23375);
var env_23376__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_23377 = cljs.analyzer.resolve_existing_var.call(null,env_23376__$1,name);
if(cljs.core.truth_((function (){var and__4115__auto__ = ev_23377;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(ev_23377));
=======
var seq__23709 = cljs.core.seq.call(null,names);
var chunk__23710 = null;
var count__23711 = (0);
var i__23712 = (0);
while(true){
if((i__23712 < count__23711)){
var name = cljs.core._nth.call(null,chunk__23710,i__23712);
var env_23713__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_23714 = cljs.analyzer.resolve_existing_var.call(null,env_23713__$1,name);
if(cljs.core.truth_((function (){var and__4115__auto__ = ev_23714;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(ev_23714));
>>>>>>> 8f3c68a (Initial Commit)
} else {
return and__4115__auto__;
}
})())){
<<<<<<< HEAD
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),env_23376__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ev","ev",-406827324),ev_23377,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ev_23377)], null));
=======
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),env_23713__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ev","ev",-406827324),ev_23714,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ev_23714)], null));
>>>>>>> 8f3c68a (Initial Commit)
} else {
}


<<<<<<< HEAD
var G__23378 = seq__23372;
var G__23379 = chunk__23373;
var G__23380 = count__23374;
var G__23381 = (i__23375 + (1));
seq__23372 = G__23378;
chunk__23373 = G__23379;
count__23374 = G__23380;
i__23375 = G__23381;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23372);
if(temp__5720__auto__){
var seq__23372__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23372__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__23372__$1);
var G__23382 = cljs.core.chunk_rest.call(null,seq__23372__$1);
var G__23383 = c__4556__auto__;
var G__23384 = cljs.core.count.call(null,c__4556__auto__);
var G__23385 = (0);
seq__23372 = G__23382;
chunk__23373 = G__23383;
count__23374 = G__23384;
i__23375 = G__23385;
continue;
} else {
var name = cljs.core.first.call(null,seq__23372__$1);
var env_23386__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_23387 = cljs.analyzer.resolve_existing_var.call(null,env_23386__$1,name);
if(cljs.core.truth_((function (){var and__4115__auto__ = ev_23387;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(ev_23387));
=======
var G__23715 = seq__23709;
var G__23716 = chunk__23710;
var G__23717 = count__23711;
var G__23718 = (i__23712 + (1));
seq__23709 = G__23715;
chunk__23710 = G__23716;
count__23711 = G__23717;
i__23712 = G__23718;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23709);
if(temp__5720__auto__){
var seq__23709__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23709__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__23709__$1);
var G__23719 = cljs.core.chunk_rest.call(null,seq__23709__$1);
var G__23720 = c__4556__auto__;
var G__23721 = cljs.core.count.call(null,c__4556__auto__);
var G__23722 = (0);
seq__23709 = G__23719;
chunk__23710 = G__23720;
count__23711 = G__23721;
i__23712 = G__23722;
continue;
} else {
var name = cljs.core.first.call(null,seq__23709__$1);
var env_23723__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_23724 = cljs.analyzer.resolve_existing_var.call(null,env_23723__$1,name);
if(cljs.core.truth_((function (){var and__4115__auto__ = ev_23724;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(ev_23724));
>>>>>>> 8f3c68a (Initial Commit)
} else {
return and__4115__auto__;
}
})())){
<<<<<<< HEAD
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),env_23386__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ev","ev",-406827324),ev_23387,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ev_23387)], null));
=======
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),env_23723__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ev","ev",-406827324),ev_23724,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ev_23724)], null));
>>>>>>> 8f3c68a (Initial Commit)
} else {
}


<<<<<<< HEAD
var G__23388 = cljs.core.next.call(null,seq__23372__$1);
var G__23389 = null;
var G__23390 = (0);
var G__23391 = (0);
seq__23372 = G__23388;
chunk__23373 = G__23389;
count__23374 = G__23390;
i__23375 = G__23391;
=======
var G__23725 = cljs.core.next.call(null,seq__23709__$1);
var G__23726 = null;
var G__23727 = (0);
var G__23728 = (0);
seq__23709 = G__23725;
chunk__23710 = G__23726;
count__23711 = G__23727;
i__23712 = G__23728;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given env, an analysis environment, and sym, a symbol, resolve a macro.
 */
cljs.analyzer.resolve_macro_var = (function cljs$analyzer$resolve_macro_var(env,sym){
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var namespaces = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927));
if((!((cljs.core.namespace.call(null,sym) == null)))){
var ns__$1 = cljs.core.namespace.call(null,sym);
var ns__$2 = ((cljs.core._EQ_.call(null,"clojure.core",ns__$1))?"cljs.core":ns__$1);
var full_ns = cljs.analyzer.resolve_macro_ns_alias.call(null,env,ns__$2);
var full_ns__$1 = (((!(clojure.string.ends_with_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns),"$macros"))))?cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_ns),"$macros"].join('')):full_ns);
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns__$1,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,sym))], null));
} else {
if((!((cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym], null)) == null)))){
var full_ns = cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym], null));
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,new cljs.core.Keyword(null,"macros","macros",811339431),sym], null));
} else {
if((!((cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),sym], null)) == null)))){
var qualified_symbol = cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),sym], null));
var full_ns = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_symbol));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,qualified_symbol));
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,new cljs.core.Keyword(null,"macros","macros",811339431),sym__$1], null));
} else {
var ns__$1 = (((!((cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"macros","macros",811339431),sym], null)) == null))))?ns:((cljs.analyzer.core_name_QMARK_.call(null,env,sym))?cljs.analyzer.CLJS_CORE_MACROS_SYM:null));
if((!((ns__$1 == null)))){
return cljs.core.get_in.call(null,namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns__$1,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null));
} else {
return null;
}

}
}
}
});


cljs.analyzer.specials = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 22, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null",new cljs.core.Symbol(null,"case*","case*",-1938255072,null),"null",new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),"null",new cljs.core.Symbol(null,"loop*","loop*",615029416,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"ns","ns",2082130287,null),"null",new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),"null",new cljs.core.Symbol(null,"let*","let*",1920721458,null),"null",new cljs.core.Symbol(null,"js*","js*",-1134233646,null),"null",new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),"null",new cljs.core.Symbol(null,"recur","recur",1202958259,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"throw","throw",595905694,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
cljs.analyzer._STAR_recur_frames_STAR_ = null;
cljs.analyzer._STAR_loop_lets_STAR_ = cljs.core.List.EMPTY;
cljs.analyzer._STAR_allow_redef_STAR_ = false;
cljs.analyzer._STAR_allow_ns_STAR_ = true;
cljs.analyzer.analyze_keyword = (function cljs$analyzer$analyze_keyword(env,sym){
cljs.analyzer.register_constant_BANG_.call(null,env,sym);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"val","val",128701612),sym,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),sym,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)], null);
});
cljs.analyzer.get_tag = (function cljs$analyzer$get_tag(e){
var temp__5722__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(e)));
if((temp__5722__auto__ == null)){
var temp__5722__auto____$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(e);
if((temp__5722__auto____$1 == null)){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(e));
} else {
var tag = temp__5722__auto____$1;
return tag;
}
} else {
var tag = temp__5722__auto__;
return tag;
}
});
cljs.analyzer.find_matching_method = (function cljs$analyzer$find_matching_method(f,params){
var methods$ = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(f);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f));
}
})();
var c = cljs.core.count.call(null,params);
return cljs.core.some.call(null,(function (m){
var and__4115__auto__ = (function (){var or__4126__auto__ = (new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(m) === c);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m);
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return m;
} else {
return and__4115__auto__;
}
}),methods$);
});
cljs.analyzer.type_QMARK_ = (function cljs$analyzer$type_QMARK_(env,t){
if((((!((t == null)))) && ((t instanceof cljs.core.Symbol)))){
var var$ = cljs.analyzer.resolve_var.call(null,env,t);
var temp__5722__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(var$);
if((temp__5722__auto__ == null)){
var temp__5722__auto____$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$));
if((temp__5722__auto____$1 == null)){
var temp__5722__auto____$2 = new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$);
if((temp__5722__auto____$2 == null)){
return cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null),"null",new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null),"null"], null), null),t);
} else {
var proto = temp__5722__auto____$2;
return proto;
}
} else {
var type = temp__5722__auto____$1;
return type;
}
} else {
var type = temp__5722__auto__;
return type;
}
} else {
return null;
}
});
cljs.analyzer.NOT_NATIVE = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"not-native","not-native",-236392494,null),"null"], null), null);
cljs.analyzer.BOOLEAN_OR_SEQ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null"], null), null);
<<<<<<< HEAD
cljs.analyzer.unwrap_quote = (function cljs$analyzer$unwrap_quote(p__23392){
var map__23393 = p__23392;
var map__23393__$1 = (((((!((map__23393 == null))))?(((((map__23393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23393):map__23393);
var expr = map__23393__$1;
var op = cljs.core.get.call(null,map__23393__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
=======
cljs.analyzer.unwrap_quote = (function cljs$analyzer$unwrap_quote(p__23729){
var map__23730 = p__23729;
var map__23730__$1 = (((((!((map__23730 == null))))?(((((map__23730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23730):map__23730);
var expr = map__23730__$1;
var op = cljs.core.get.call(null,map__23730__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.keyword_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"quote","quote",-262615245))){
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(expr);
} else {
return expr;
}
});
cljs.analyzer.infer_if = (function cljs$analyzer$infer_if(env,e){
<<<<<<< HEAD
var map__23395 = cljs.analyzer.unwrap_quote.call(null,new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(e));
var map__23395__$1 = (((((!((map__23395 == null))))?(((((map__23395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23395):map__23395);
var op = cljs.core.get.call(null,map__23395__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__23395__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
=======
var map__23732 = cljs.analyzer.unwrap_quote.call(null,new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(e));
var map__23732__$1 = (((((!((map__23732 == null))))?(((((map__23732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23732):map__23732);
var op = cljs.core.get.call(null,map__23732__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__23732__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
>>>>>>> 8f3c68a (Initial Commit)
var then_tag = cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(e));
if(((cljs.core.keyword_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && ((!((form == null)))) && ((!(form === false))))){
return then_tag;
} else {
var else_tag = cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(e));
if(((cljs.core.symbol_identical_QMARK_.call(null,then_tag,else_tag)) || (cljs.core.symbol_identical_QMARK_.call(null,else_tag,cljs.analyzer.IGNORE_SYM)))){
return then_tag;
} else {
if(cljs.core.symbol_identical_QMARK_.call(null,then_tag,cljs.analyzer.IGNORE_SYM)){
return else_tag;
} else {
if((((((!((cljs.core.get.call(null,cljs.analyzer.NOT_NATIVE,then_tag) == null)))) || (cljs.analyzer.type_QMARK_.call(null,env,then_tag)))) && ((((!((cljs.core.get.call(null,cljs.analyzer.NOT_NATIVE,else_tag) == null)))) || (cljs.analyzer.type_QMARK_.call(null,env,else_tag)))))){
return new cljs.core.Symbol(null,"clj","clj",980036099,null);
} else {
if((((!((cljs.core.get.call(null,cljs.analyzer.BOOLEAN_OR_SEQ,then_tag) == null)))) && ((!((cljs.core.get.call(null,cljs.analyzer.BOOLEAN_OR_SEQ,else_tag) == null)))))){
return new cljs.core.Symbol(null,"seq","seq",-177272256,null);
} else {
var then_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_.call(null,then_tag))?then_tag:cljs.core.PersistentHashSet.createAsIfByAssoc([then_tag]));
var else_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_.call(null,else_tag))?else_tag:cljs.core.PersistentHashSet.createAsIfByAssoc([else_tag]));
return cljs.core.into.call(null,then_tag__$1,else_tag__$1);
}

}
}
}
}
});
<<<<<<< HEAD
cljs.analyzer.infer_invoke = (function cljs$analyzer$infer_invoke(env,p__23397){
var map__23398 = p__23397;
var map__23398__$1 = (((((!((map__23398 == null))))?(((((map__23398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23398):map__23398);
var e = map__23398__$1;
var f = cljs.core.get.call(null,map__23398__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__23398__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var me = cljs.core.assoc.call(null,cljs.analyzer.find_matching_method.call(null,f,args),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"fn-method","fn-method",236100839));
var temp__5722__auto__ = cljs.analyzer.infer_tag.call(null,env,me);
if((temp__5722__auto__ == null)){
var map__23400 = f;
var map__23400__$1 = (((((!((map__23400 == null))))?(((((map__23400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23400):map__23400);
var info = cljs.core.get.call(null,map__23400__$1,new cljs.core.Keyword(null,"info","info",-317069002));
=======
cljs.analyzer.infer_invoke = (function cljs$analyzer$infer_invoke(env,p__23734){
var map__23735 = p__23734;
var map__23735__$1 = (((((!((map__23735 == null))))?(((((map__23735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23735):map__23735);
var e = map__23735__$1;
var f = cljs.core.get.call(null,map__23735__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__23735__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var me = cljs.core.assoc.call(null,cljs.analyzer.find_matching_method.call(null,f,args),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"fn-method","fn-method",236100839));
var temp__5722__auto__ = cljs.analyzer.infer_tag.call(null,env,me);
if((temp__5722__auto__ == null)){
var map__23737 = f;
var map__23737__$1 = (((((!((map__23737 == null))))?(((((map__23737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23737):map__23737);
var info = cljs.core.get.call(null,map__23737__$1,new cljs.core.Keyword(null,"info","info",-317069002));
>>>>>>> 8f3c68a (Initial Commit)
var temp__5722__auto____$1 = ((((new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info) === true) || (new cljs.core.Keyword(null,"js-fn-var","js-fn-var",-565665358).cljs$core$IFn$_invoke$arity$1(info) === true)))?new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990).cljs$core$IFn$_invoke$arity$1(info):((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info)))?new cljs.core.Symbol(null,"js","js",-886355190,null):null));
if((temp__5722__auto____$1 == null)){
return cljs.analyzer.ANY_SYM;
} else {
var ret_tag = temp__5722__auto____$1;
return ret_tag;
}
} else {
var ret_tag = temp__5722__auto__;
return ret_tag;
}
});
/**
 * Given env, an analysis environment, and e, an AST node, return the inferred
 * type of the node
 */
cljs.analyzer.infer_tag = (function cljs$analyzer$infer_tag(env,e){
var temp__5722__auto__ = cljs.analyzer.get_tag.call(null,e);
if((temp__5722__auto__ == null)){
<<<<<<< HEAD
var G__23402 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(e);
var G__23402__$1 = (((G__23402 instanceof cljs.core.Keyword))?G__23402.fqn:null);
switch (G__23402__$1) {
=======
var G__23739 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(e);
var G__23739__$1 = (((G__23739 instanceof cljs.core.Keyword))?G__23739.fqn:null);
switch (G__23739__$1) {
>>>>>>> 8f3c68a (Initial Commit)
case "recur":
return cljs.analyzer.IGNORE_SYM;

break;
case "throw":
return cljs.analyzer.IGNORE_SYM;

break;
case "let":
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(e));

break;
case "loop":
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(e));

break;
case "do":
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(e));

break;
case "fn-method":
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(e));

break;
case "def":
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(e));

break;
case "invoke":
return cljs.analyzer.infer_invoke.call(null,env,e);

break;
case "if":
return cljs.analyzer.infer_if.call(null,env,e);

break;
case "const":
<<<<<<< HEAD
var G__23403 = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core._EQ_.call(null,true,G__23403)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
if(cljs.core._EQ_.call(null,false,G__23403)){
=======
var G__23740 = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core._EQ_.call(null,true,G__23740)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
if(cljs.core._EQ_.call(null,false,G__23740)){
>>>>>>> 8f3c68a (Initial Commit)
return cljs.analyzer.BOOLEAN_SYM;
} else {
return cljs.analyzer.ANY_SYM;

}
}

break;
case "quote":
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(e));

break;
case "var":
case "local":
case "js-var":
case "binding":
var temp__5722__auto____$1 = new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(e);
if((temp__5722__auto____$1 == null)){
return cljs.analyzer.infer_tag.call(null,env,new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(e));
} else {
var init = temp__5722__auto____$1;
return cljs.analyzer.infer_tag.call(null,env,init);
}

break;
case "host-field":
case "host-call":
return cljs.analyzer.ANY_SYM;

break;
case "js":
return cljs.analyzer.ANY_SYM;

break;
default:
return null;

}
} else {
var tag = temp__5722__auto__;
return tag;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.analyzer !== 'undefined') && (typeof cljs.analyzer.parse !== 'undefined')){
} else {
cljs.analyzer.parse = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.analyzer","parse"),(function() { 
<<<<<<< HEAD
var G__23405__delegate = function (op,rest){
return op;
};
var G__23405 = function (op,var_args){
var rest = null;
if (arguments.length > 1) {
var G__23406__i = 0, G__23406__a = new Array(arguments.length -  1);
while (G__23406__i < G__23406__a.length) {G__23406__a[G__23406__i] = arguments[G__23406__i + 1]; ++G__23406__i;}
  rest = new cljs.core.IndexedSeq(G__23406__a,0,null);
} 
return G__23405__delegate.call(this,op,rest);};
G__23405.cljs$lang$maxFixedArity = 1;
G__23405.cljs$lang$applyTo = (function (arglist__23407){
var op = cljs.core.first(arglist__23407);
var rest = cljs.core.rest(arglist__23407);
return G__23405__delegate(op,rest);
});
G__23405.cljs$core$IFn$_invoke$arity$variadic = G__23405__delegate;
return G__23405;
=======
var G__23742__delegate = function (op,rest){
return op;
};
var G__23742 = function (op,var_args){
var rest = null;
if (arguments.length > 1) {
var G__23743__i = 0, G__23743__a = new Array(arguments.length -  1);
while (G__23743__i < G__23743__a.length) {G__23743__a[G__23743__i] = arguments[G__23743__i + 1]; ++G__23743__i;}
  rest = new cljs.core.IndexedSeq(G__23743__a,0,null);
} 
return G__23742__delegate.call(this,op,rest);};
G__23742.cljs$lang$maxFixedArity = 1;
G__23742.cljs$lang$applyTo = (function (arglist__23744){
var op = cljs.core.first(arglist__23744);
var rest = cljs.core.rest(arglist__23744);
return G__23742__delegate(op,rest);
});
G__23742.cljs$core$IFn$_invoke$arity$variadic = G__23742__delegate;
return G__23742;
>>>>>>> 8f3c68a (Initial Commit)
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.analyzer.var_meta = (function cljs$analyzer$var_meta(var_args){
<<<<<<< HEAD
var G__23411 = arguments.length;
switch (G__23411) {
=======
var G__23748 = arguments.length;
switch (G__23748) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$1 = (function (var$){
return cljs.analyzer.var_meta.call(null,var$,null);
}));

(cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$2 = (function (var$,expr_env){
var sym = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$);
var ks = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null);
var m = cljs.core.merge.call(null,(function (){var user_meta = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(var$);
var uks = cljs.core.keys.call(null,user_meta);
<<<<<<< HEAD
return cljs.core.zipmap.call(null,uks,cljs.core.map.call(null,(function (p1__23408_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.get.call(null,user_meta,p1__23408_SHARP_),null,(1),null)),(2),null));
}),uks));
})(),cljs.core.assoc.call(null,cljs.core.zipmap.call(null,ks,cljs.core.map.call(null,(function (p1__23409_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.get.call(null,var$,p1__23409_SHARP_),null,(1),null)),(2),null));
=======
return cljs.core.zipmap.call(null,uks,cljs.core.map.call(null,(function (p1__23745_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.get.call(null,user_meta,p1__23745_SHARP_),null,(1),null)),(2),null));
}),uks));
})(),cljs.core.assoc.call(null,cljs.core.zipmap.call(null,ks,cljs.core.map.call(null,(function (p1__23746_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.get.call(null,var$,p1__23746_SHARP_),null,(1),null)),(2),null));
>>>>>>> 8f3c68a (Initial Commit)
}),ks)),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$))),null,(1),null))))),new cljs.core.Keyword(null,"test","test",577538877),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$test",".-cljs$lang$test",718963148,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),null,(1),null))))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(var$);
var arglists_SINGLEQUOTE_ = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists)))?cljs.core.second.call(null,arglists):arglists);
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.with_meta,arglists_SINGLEQUOTE_,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838).cljs$core$IFn$_invoke$arity$1(var$))),null,(1),null)),(2),null));
})()));
if(cljs.core.truth_(expr_env)){
return cljs.analyzer.analyze.call(null,expr_env,m);
} else {
return m;
}
}));

(cljs.analyzer.var_meta.cljs$lang$maxFixedArity = 2);

cljs.analyzer.var_ast = (function cljs$analyzer$var_ast(env,sym){
<<<<<<< HEAD
var _STAR_private_var_access_nowarn_STAR__orig_val__23413 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__23414 = true;
(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__23414);
=======
var _STAR_private_var_access_nowarn_STAR__orig_val__23750 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__23751 = true;
(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__23751);
>>>>>>> 8f3c68a (Initial Commit)

try{var env__$1 = cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783));
var var$ = cljs.analyzer.resolve_var.call(null,env__$1,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
var expr_env = cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var temp__5724__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$);
if((temp__5724__auto__ == null)){
return null;
} else {
var var_ns = temp__5724__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),cljs.analyzer.analyze.call(null,expr_env,sym),new cljs.core.Keyword(null,"sym","sym",-1444860305),cljs.analyzer.analyze.call(null,expr_env,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,cljs.core.name.call(null,var_ns),cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$))),null,(1),null)))))),new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.analyzer.var_meta.call(null,var$,expr_env)], null);
}
<<<<<<< HEAD
}finally {(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__23413);
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"var","var",870848730,null),(function (op,env,p__23415,_,___$1){
var vec__23416 = p__23415;
var ___$2 = cljs.core.nth.call(null,vec__23416,(0),null);
var sym = cljs.core.nth.call(null,vec__23416,(1),null);
var form = vec__23416;
=======
}finally {(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__23750);
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"var","var",870848730,null),(function (op,env,p__23752,_,___$1){
var vec__23753 = p__23752;
var ___$2 = cljs.core.nth.call(null,vec__23753,(0),null);
var sym = cljs.core.nth.call(null,vec__23753,(1),null);
var form = vec__23753;
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.not_EQ_.call(null,(2),cljs.core.count.call(null,form))){
throw cljs.analyzer.error.call(null,env,"Wrong number of args to var");
} else {
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.call(null,env,"Argument to var must be symbol");
}

return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"meta","meta",1499536964)], null),new cljs.core.Keyword(null,"form","form",-1624062471),form], null),cljs.analyzer.var_ast.call(null,env,sym));
}));
cljs.analyzer.predicate__GT_tag = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Symbol("cljs.core","char?","cljs.core/char?",416405281,null),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Symbol("cljs.core","qualified-symbol?","cljs.core/qualified-symbol?",1570873476,null),new cljs.core.Symbol("cljs.core","var?","cljs.core/var?",1711182854,null),new cljs.core.Symbol("cljs.core","map-entry?","cljs.core/map-entry?",465406728,null),new cljs.core.Symbol("cljs.core","double?","cljs.core/double?",1757455529,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","qualified-ident?","cljs.core/qualified-ident?",-1863492566,null),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null),new cljs.core.Symbol("cljs.core","inst?","cljs.core/inst?",1216133710,null),new cljs.core.Symbol("cljs.core","float?","cljs.core/float?",-941017745,null),new cljs.core.Symbol("cljs.core","true?","cljs.core/true?",-77973136,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Symbol("cljs.core","volatile?","cljs.core/volatile?",-1122186415,null),new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",1710697810,null),new cljs.core.Symbol("cljs.core","infinite?","cljs.core/infinite?",-1069503726,null),new cljs.core.Symbol("cljs.core","undefined?","cljs.core/undefined?",-1206515693,null),new cljs.core.Symbol("cljs.core","uuid?","cljs.core/uuid?",-15131116,null),new cljs.core.Symbol("cljs.core","record?","cljs.core/record?",1307655860,null),new cljs.core.Symbol("cljs.core","reduced?","cljs.core/reduced?",-1192491371,null),new cljs.core.Symbol("cljs.core","tagged-literal?","cljs.core/tagged-literal?",-1159666987,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol("cljs.core","zero?","cljs.core/zero?",-341242858,null),new cljs.core.Symbol("cljs.core","false?","cljs.core/false?",-1660815306,null),new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null),new cljs.core.Symbol("cljs.core","simple-ident?","cljs.core/simple-ident?",1674885558,null),new cljs.core.Symbol("cljs.core","simple-keyword?","cljs.core/simple-keyword?",39474330,null),new cljs.core.Symbol("cljs.core","seqable?","cljs.core/seqable?",-745394886,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol("cljs.core","delay?","cljs.core/delay?",2099859324,null),new cljs.core.Symbol("cljs.core","regexp?","cljs.core/regexp?",-348418979,null),new cljs.core.Symbol("cljs.core","ident?","cljs.core/ident?",1567441535,null),new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)],[new cljs.core.Symbol(null,"array","array",-440182315,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Symbol(null,"string","string",-349010059,null),new cljs.core.Symbol("cljs.core","ISequential","cljs.core/ISequential",-950981796,null),new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null),new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null),new cljs.core.Symbol("cljs.core","Var","cljs.core/Var",2071014443,null),new cljs.core.Symbol("cljs.core","IMapEntry","cljs.core/IMapEntry",535941300,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol(null,"string","string",-349010059,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),"null",new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null),"null"], null), null),new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),new cljs.core.Symbol("cljs.core","Inst","cljs.core/Inst",959205835,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol("cljs.core","Volatile","cljs.core/Volatile",-1098692185,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),new cljs.core.Symbol("cljs.core","IUUID","cljs.core/IUUID",-1606521379,null),new cljs.core.Symbol("cljs.core","IRecord","cljs.core/IRecord",635852000,null),new cljs.core.Symbol("cljs.core","Reduced","cljs.core/Reduced",971663396,null),new cljs.core.Symbol("cljs.core","ITaggedLiteral","cljs.core/ITaggedLiteral",-1236965094,null),new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Symbol("cljs.core","IList","cljs.core/IList",1015168964,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),"null",new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null),"null"], null), null),new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","ISeqable","cljs.core/ISeqable",137437203,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null),new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null),new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null),new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),"null",new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null),"null"], null), null),new cljs.core.Symbol("cljs.core","IChunkedSeq","cljs.core/IChunkedSeq",-892943716,null)]);
/**
 * Look for a predicate-induced tag when the test expression is a simple
 * application of a predicate to a local, as in (string? x).
 */
cljs.analyzer.simple_predicate_induced_tag = (function cljs$analyzer$simple_predicate_induced_tag(env,test){
if(((cljs.core.list_QMARK_.call(null,test)) && (((2) === cljs.core.count.call(null,test))) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,test)))){
<<<<<<< HEAD
var analyzed_fn = (function (){var _STAR_cljs_warnings_STAR__orig_val__23419 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__23420 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__23420);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),cljs.core.first.call(null,test));
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__23419);
=======
var analyzed_fn = (function (){var _STAR_cljs_warnings_STAR__orig_val__23756 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__23757 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__23757);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),cljs.core.first.call(null,test));
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__23756);
>>>>>>> 8f3c68a (Initial Commit)
}})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(analyzed_fn))){
var temp__5720__auto__ = cljs.analyzer.predicate__GT_tag.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(analyzed_fn));
if(cljs.core.truth_(temp__5720__auto__)){
var tag = temp__5720__auto__;
var sym = cljs.core.last.call(null,test);
if(cljs.core.truth_((((cljs.core.namespace.call(null,sym) == null))?cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),sym], null)):false))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,tag], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Look for a type-check-induced tag when the test expression is the use of
 *   instance? on a local, as in (instance? UUID x) or implements? on a local, as
 *   in (implements? ICounted x).
 */
cljs.analyzer.type_check_induced_tag = (function cljs$analyzer$type_check_induced_tag(env,test){
if(((cljs.core.list_QMARK_.call(null,test)) && (((3) === cljs.core.count.call(null,test))) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,test)) && ((!(cljs.core.contains_QMARK_.call(null,cljs.analyzer.specials,cljs.core.first.call(null,test))))))){
<<<<<<< HEAD
var analyzed_fn = (function (){var _STAR_cljs_warnings_STAR__orig_val__23421 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__23422 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__23422);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),cljs.core.first.call(null,test));
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__23421);
}})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(analyzed_fn))){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",-251485149,null),"null",new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),"null"], null), null).call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(analyzed_fn)))){
var analyzed_type = (function (){var _STAR_cljs_warnings_STAR__orig_val__23423 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__23424 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__23424);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),cljs.core.second.call(null,test));
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__23423);
=======
var analyzed_fn = (function (){var _STAR_cljs_warnings_STAR__orig_val__23758 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__23759 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__23759);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),cljs.core.first.call(null,test));
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__23758);
}})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(analyzed_fn))){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",-251485149,null),"null",new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),"null"], null), null).call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(analyzed_fn)))){
var analyzed_type = (function (){var _STAR_cljs_warnings_STAR__orig_val__23760 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__23761 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__23761);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),cljs.core.second.call(null,test));
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__23760);
>>>>>>> 8f3c68a (Initial Commit)
}})();
var tag = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(analyzed_type);
var sym = cljs.core.last.call(null,test);
if(cljs.core.truth_(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(analyzed_type)))?(((cljs.core.namespace.call(null,sym) == null))?cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),sym], null)):false):false))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,tag], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Refine a tag to exclude clj-nil if the test is a local.
 */
cljs.analyzer.truth_induced_tag = (function cljs$analyzer$truth_induced_tag(env,test){
if(cljs.core.truth_((((test instanceof cljs.core.Symbol))?(((cljs.core.namespace.call(null,test) == null))?cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),test], null)):false):false))){
<<<<<<< HEAD
var analyzed_symbol = (function (){var _STAR_cljs_warnings_STAR__orig_val__23425 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__23426 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__23426);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),test);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__23425);
=======
var analyzed_symbol = (function (){var _STAR_cljs_warnings_STAR__orig_val__23762 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__23763 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__23763);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),test);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__23762);
>>>>>>> 8f3c68a (Initial Commit)
}})();
var temp__5720__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(analyzed_symbol);
if(cljs.core.truth_(temp__5720__auto__)){
var tag = temp__5720__auto__;
if(((cljs.core.set_QMARK_.call(null,tag)) && (cljs.core.contains_QMARK_.call(null,tag,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test,cljs.analyzer.canonicalize_type.call(null,cljs.core.disj.call(null,tag,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null)))], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Looks at the test and sets any tags which are induced by virtue
 *   of the test being truthy. For example in (if (string? x) x :bar)
 *   the local x in the then branch must be of string type.
 */
cljs.analyzer.set_test_induced_tags = (function cljs$analyzer$set_test_induced_tags(env,test){
<<<<<<< HEAD
var vec__23427 = (function (){var or__4126__auto__ = cljs.analyzer.simple_predicate_induced_tag.call(null,env,test);
=======
var vec__23764 = (function (){var or__4126__auto__ = cljs.analyzer.simple_predicate_induced_tag.call(null,env,test);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.analyzer.type_check_induced_tag.call(null,env,test);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.analyzer.truth_induced_tag.call(null,env,test);
}
}
})();
<<<<<<< HEAD
var local = cljs.core.nth.call(null,vec__23427,(0),null);
var tag = cljs.core.nth.call(null,vec__23427,(1),null);
var G__23430 = env;
if(cljs.core.truth_(local)){
return cljs.core.assoc_in.call(null,G__23430,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),local,new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),tag);
} else {
return G__23430;
}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"if","if",1181717262,null),(function (op,env,p__23431,name,_){
var vec__23432 = p__23431;
var ___$1 = cljs.core.nth.call(null,vec__23432,(0),null);
var test = cljs.core.nth.call(null,vec__23432,(1),null);
var then = cljs.core.nth.call(null,vec__23432,(2),null);
var else$ = cljs.core.nth.call(null,vec__23432,(3),null);
var form = vec__23432;
=======
var local = cljs.core.nth.call(null,vec__23764,(0),null);
var tag = cljs.core.nth.call(null,vec__23764,(1),null);
var G__23767 = env;
if(cljs.core.truth_(local)){
return cljs.core.assoc_in.call(null,G__23767,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),local,new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),tag);
} else {
return G__23767;
}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"if","if",1181717262,null),(function (op,env,p__23768,name,_){
var vec__23769 = p__23768;
var ___$1 = cljs.core.nth.call(null,vec__23769,(0),null);
var test = cljs.core.nth.call(null,vec__23769,(1),null);
var then = cljs.core.nth.call(null,vec__23769,(2),null);
var else$ = cljs.core.nth.call(null,vec__23769,(3),null);
var form = vec__23769;
>>>>>>> 8f3c68a (Initial Commit)
if((cljs.core.count.call(null,form) < (3))){
throw cljs.analyzer.compile_syntax_error.call(null,env,"Too few arguments to if",new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
}

if((cljs.core.count.call(null,form) > (4))){
throw cljs.analyzer.compile_syntax_error.call(null,env,"Too many arguments to if",new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
}

<<<<<<< HEAD
var test_expr = (function (){var _STAR_recur_frames_STAR__orig_val__23435 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23436 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23436);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),test);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23435);
}})();
var then_expr = (function (){var _STAR_allow_redef_STAR__orig_val__23437 = cljs.analyzer._STAR_allow_redef_STAR_;
var _STAR_allow_redef_STAR__temp_val__23438 = true;
(cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__temp_val__23438);

try{return cljs.analyzer.analyze.call(null,cljs.analyzer.set_test_induced_tags.call(null,env,test),then);
}finally {(cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__orig_val__23437);
}})();
var else_expr = (function (){var _STAR_allow_redef_STAR__orig_val__23439 = cljs.analyzer._STAR_allow_redef_STAR_;
var _STAR_allow_redef_STAR__temp_val__23440 = true;
(cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__temp_val__23440);

try{return cljs.analyzer.analyze.call(null,env,else$);
}finally {(cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__orig_val__23439);
}})();
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"test","test",577538877),test_expr,new cljs.core.Keyword(null,"then","then",460598070),then_expr,new cljs.core.Keyword(null,"else","else",-1508377146),else_expr,new cljs.core.Keyword(null,"unchecked","unchecked",924418378),cljs.core._STAR_unchecked_if_STAR_,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.Keyword(null,"else","else",-1508377146)], null)], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),(function (op,env,p__23443,name,_){
var vec__23444 = p__23443;
var ___$1 = cljs.core.nth.call(null,vec__23444,(0),null);
var sym = cljs.core.nth.call(null,vec__23444,(1),null);
var tests = cljs.core.nth.call(null,vec__23444,(2),null);
var thens = cljs.core.nth.call(null,vec__23444,(3),null);
var default$ = cljs.core.nth.call(null,vec__23444,(4),null);
var form = vec__23444;
=======
var test_expr = (function (){var _STAR_recur_frames_STAR__orig_val__23772 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23773 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23773);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),test);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23772);
}})();
var then_expr = (function (){var _STAR_allow_redef_STAR__orig_val__23774 = cljs.analyzer._STAR_allow_redef_STAR_;
var _STAR_allow_redef_STAR__temp_val__23775 = true;
(cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__temp_val__23775);

try{return cljs.analyzer.analyze.call(null,cljs.analyzer.set_test_induced_tags.call(null,env,test),then);
}finally {(cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__orig_val__23774);
}})();
var else_expr = (function (){var _STAR_allow_redef_STAR__orig_val__23776 = cljs.analyzer._STAR_allow_redef_STAR_;
var _STAR_allow_redef_STAR__temp_val__23777 = true;
(cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__temp_val__23777);

try{return cljs.analyzer.analyze.call(null,env,else$);
}finally {(cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR__orig_val__23776);
}})();
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"test","test",577538877),test_expr,new cljs.core.Keyword(null,"then","then",460598070),then_expr,new cljs.core.Keyword(null,"else","else",-1508377146),else_expr,new cljs.core.Keyword(null,"unchecked","unchecked",924418378),cljs.core._STAR_unchecked_if_STAR_,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.Keyword(null,"else","else",-1508377146)], null)], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),(function (op,env,p__23780,name,_){
var vec__23781 = p__23780;
var ___$1 = cljs.core.nth.call(null,vec__23781,(0),null);
var sym = cljs.core.nth.call(null,vec__23781,(1),null);
var tests = cljs.core.nth.call(null,vec__23781,(2),null);
var thens = cljs.core.nth.call(null,vec__23781,(3),null);
var default$ = cljs.core.nth.call(null,vec__23781,(4),null);
var form = vec__23781;
>>>>>>> 8f3c68a (Initial Commit)
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","case* must switch on symbol","\n","(symbol? sym)"].join('')));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,tests)){
} else {
throw (new Error(["Assert failed: ","case* tests must be grouped in vectors","\n","(every? vector? tests)"].join('')));
}

var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
<<<<<<< HEAD
var v = (function (){var _STAR_recur_frames_STAR__orig_val__23447 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23448 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23448);

try{return cljs.analyzer.analyze.call(null,expr_env,sym);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23447);
}})();
var tests__$1 = cljs.core.mapv.call(null,(function (p1__23441_SHARP_){
return cljs.core.mapv.call(null,(function (t){
return cljs.analyzer.analyze.call(null,expr_env,t);
}),p1__23441_SHARP_);
}),tests);
var thens__$1 = cljs.core.mapv.call(null,(function (p1__23442_SHARP_){
return cljs.analyzer.analyze.call(null,env,p1__23442_SHARP_);
=======
var v = (function (){var _STAR_recur_frames_STAR__orig_val__23784 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23785 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23785);

try{return cljs.analyzer.analyze.call(null,expr_env,sym);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23784);
}})();
var tests__$1 = cljs.core.mapv.call(null,(function (p1__23778_SHARP_){
return cljs.core.mapv.call(null,(function (t){
return cljs.analyzer.analyze.call(null,expr_env,t);
}),p1__23778_SHARP_);
}),tests);
var thens__$1 = cljs.core.mapv.call(null,(function (p1__23779_SHARP_){
return cljs.analyzer.analyze.call(null,env,p1__23779_SHARP_);
>>>>>>> 8f3c68a (Initial Commit)
}),thens);
var nodes = cljs.core.mapv.call(null,(function (tests__$2,then){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"case-node","case-node",1016946320),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"tests","tests",-1041085625),cljs.core.mapv.call(null,(function (test){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"case-test","case-test",-213512472),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(test),new cljs.core.Keyword(null,"env","env",-1815813235),expr_env,new cljs.core.Keyword(null,"test","test",577538877),test,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",577538877)], null)], null);
}),tests__$2),new cljs.core.Keyword(null,"then","then",460598070),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"case-then","case-then",2107591745),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(then),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"then","then",460598070),then,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"then","then",460598070)], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.Keyword(null,"then","then",460598070)], null)], null);
}),tests__$1,thens__$1);
var default$__$1 = cljs.analyzer.analyze.call(null,env,default$);
if(cljs.core.every_QMARK_.call(null,(function (t){
var or__4126__auto__ = new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(t))){
return cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.char_QMARK_).call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(t));
} else {
return false;
}
}
}),cljs.core.apply.call(null,cljs.core.concat,tests__$1))){
} else {
throw (new Error(["Assert failed: ","case* tests must be numbers, strings, or constants","\n","(every? (fn [t] (or (-> t :info :const) (and (= :const (:op t)) ((some-fn number? string? char?) (:form t))))) (apply concat tests))"].join('')));
}

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"test","test",577538877),v,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"default","default",-1987822328)], null)], null);
}));
<<<<<<< HEAD
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"throw","throw",595905694,null),(function (op,env,p__23449,name,_){
var vec__23450 = p__23449;
var ___$1 = cljs.core.nth.call(null,vec__23450,(0),null);
var throw_form = cljs.core.nth.call(null,vec__23450,(1),null);
var form = vec__23450;
=======
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"throw","throw",595905694,null),(function (op,env,p__23786,name,_){
var vec__23787 = p__23786;
var ___$1 = cljs.core.nth.call(null,vec__23787,(0),null);
var throw_form = cljs.core.nth.call(null,vec__23787,(1),null);
var form = vec__23787;
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,form))){
throw cljs.analyzer.error.call(null,env,"Too few arguments to throw, throw expects a single Error instance");
} else {
if(((2) < cljs.core.count.call(null,form))){
throw cljs.analyzer.error.call(null,env,"Too many arguments to throw, throw expects a single Error instance");
} else {
}
}

<<<<<<< HEAD
var throw_expr = (function (){var _STAR_recur_frames_STAR__orig_val__23453 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23454 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23454);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),throw_form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23453);
}})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"exception","exception",-335277064),throw_expr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception","exception",-335277064)], null)], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"try","try",-1273693247,null),(function (op,env,p__23459,name,_){
var vec__23460 = p__23459;
var seq__23461 = cljs.core.seq.call(null,vec__23460);
var first__23462 = cljs.core.first.call(null,seq__23461);
var seq__23461__$1 = cljs.core.next.call(null,seq__23461);
var ___$1 = first__23462;
var body = seq__23461__$1;
var form = vec__23460;
var catchenv = cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113)], null),(function (p1__23455_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),p1__23455_SHARP_)){
return new cljs.core.Keyword(null,"return","return",-1891502105);
} else {
return p1__23455_SHARP_;
}
}));
var catch_QMARK_ = cljs.core.every_pred.call(null,cljs.core.seq_QMARK_,(function (p1__23456_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__23456_SHARP_),new cljs.core.Symbol(null,"catch","catch",-1616370245,null));
}));
var default_QMARK_ = cljs.core.every_pred.call(null,catch_QMARK_,(function (p1__23457_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__23457_SHARP_),new cljs.core.Keyword(null,"default","default",-1987822328));
}));
var finally_QMARK_ = cljs.core.every_pred.call(null,cljs.core.seq_QMARK_,(function (p1__23458_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__23458_SHARP_),new cljs.core.Symbol(null,"finally","finally",-1065347064,null));
}));
var map__23463 = (function (){var parser = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"forms","forms",2045992350),body,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"dblock","dblock",-1325623381),null,new cljs.core.Keyword(null,"fblock","fblock",-1236607426),null], null);
while(true){
if(cljs.core.seq_QMARK_.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(parser))){
var vec__23468 = new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(parser);
var seq__23469 = cljs.core.seq.call(null,vec__23468);
var first__23470 = cljs.core.first.call(null,seq__23469);
var seq__23469__$1 = cljs.core.next.call(null,seq__23469);
var form__$1 = first__23470;
var forms_STAR_ = seq__23469__$1;
var parser_STAR_ = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"forms","forms",2045992350),forms_STAR_);
var G__23471 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(parser);
var G__23471__$1 = (((G__23471 instanceof cljs.core.Keyword))?G__23471.fqn:null);
switch (G__23471__$1) {
case "start":
if(cljs.core.truth_(catch_QMARK_.call(null,form__$1))){
var G__23487 = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"catches","catches",-1478797617));
parser = G__23487;
continue;
} else {
if(cljs.core.truth_(finally_QMARK_.call(null,form__$1))){
var G__23488 = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__23488;
continue;
} else {
var G__23489 = cljs.core.update_in.call(null,parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),cljs.core.conj,form__$1);
parser = G__23489;
=======
var throw_expr = (function (){var _STAR_recur_frames_STAR__orig_val__23790 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23791 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23791);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),throw_form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23790);
}})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"exception","exception",-335277064),throw_expr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception","exception",-335277064)], null)], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"try","try",-1273693247,null),(function (op,env,p__23796,name,_){
var vec__23797 = p__23796;
var seq__23798 = cljs.core.seq.call(null,vec__23797);
var first__23799 = cljs.core.first.call(null,seq__23798);
var seq__23798__$1 = cljs.core.next.call(null,seq__23798);
var ___$1 = first__23799;
var body = seq__23798__$1;
var form = vec__23797;
var catchenv = cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113)], null),(function (p1__23792_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),p1__23792_SHARP_)){
return new cljs.core.Keyword(null,"return","return",-1891502105);
} else {
return p1__23792_SHARP_;
}
}));
var catch_QMARK_ = cljs.core.every_pred.call(null,cljs.core.seq_QMARK_,(function (p1__23793_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__23793_SHARP_),new cljs.core.Symbol(null,"catch","catch",-1616370245,null));
}));
var default_QMARK_ = cljs.core.every_pred.call(null,catch_QMARK_,(function (p1__23794_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__23794_SHARP_),new cljs.core.Keyword(null,"default","default",-1987822328));
}));
var finally_QMARK_ = cljs.core.every_pred.call(null,cljs.core.seq_QMARK_,(function (p1__23795_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__23795_SHARP_),new cljs.core.Symbol(null,"finally","finally",-1065347064,null));
}));
var map__23800 = (function (){var parser = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"forms","forms",2045992350),body,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"dblock","dblock",-1325623381),null,new cljs.core.Keyword(null,"fblock","fblock",-1236607426),null], null);
while(true){
if(cljs.core.seq_QMARK_.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(parser))){
var vec__23805 = new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(parser);
var seq__23806 = cljs.core.seq.call(null,vec__23805);
var first__23807 = cljs.core.first.call(null,seq__23806);
var seq__23806__$1 = cljs.core.next.call(null,seq__23806);
var form__$1 = first__23807;
var forms_STAR_ = seq__23806__$1;
var parser_STAR_ = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"forms","forms",2045992350),forms_STAR_);
var G__23808 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(parser);
var G__23808__$1 = (((G__23808 instanceof cljs.core.Keyword))?G__23808.fqn:null);
switch (G__23808__$1) {
case "start":
if(cljs.core.truth_(catch_QMARK_.call(null,form__$1))){
var G__23824 = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"catches","catches",-1478797617));
parser = G__23824;
continue;
} else {
if(cljs.core.truth_(finally_QMARK_.call(null,form__$1))){
var G__23825 = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__23825;
continue;
} else {
var G__23826 = cljs.core.update_in.call(null,parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),cljs.core.conj,form__$1);
parser = G__23826;
>>>>>>> 8f3c68a (Initial Commit)
continue;

}
}

break;
case "catches":
if(cljs.core.truth_(default_QMARK_.call(null,form__$1))){
<<<<<<< HEAD
var G__23490 = cljs.core.assoc.call(null,parser_STAR_,new cljs.core.Keyword(null,"dblock","dblock",-1325623381),form__$1,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__23490;
continue;
} else {
if(cljs.core.truth_(catch_QMARK_.call(null,form__$1))){
var G__23491 = cljs.core.update_in.call(null,parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138)], null),cljs.core.conj,form__$1);
parser = G__23491;
continue;
} else {
if(cljs.core.truth_(finally_QMARK_.call(null,form__$1))){
var G__23492 = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__23492;
=======
var G__23827 = cljs.core.assoc.call(null,parser_STAR_,new cljs.core.Keyword(null,"dblock","dblock",-1325623381),form__$1,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__23827;
continue;
} else {
if(cljs.core.truth_(catch_QMARK_.call(null,form__$1))){
var G__23828 = cljs.core.update_in.call(null,parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138)], null),cljs.core.conj,form__$1);
parser = G__23828;
continue;
} else {
if(cljs.core.truth_(finally_QMARK_.call(null,form__$1))){
var G__23829 = cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__23829;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
throw cljs.analyzer.error.call(null,env,"Invalid try form");

}
}
}

break;
case "finally":
<<<<<<< HEAD
var G__23493 = cljs.core.assoc.call(null,parser_STAR_,new cljs.core.Keyword(null,"fblock","fblock",-1236607426),form__$1,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188));
parser = G__23493;
=======
var G__23830 = cljs.core.assoc.call(null,parser_STAR_,new cljs.core.Keyword(null,"fblock","fblock",-1236607426),form__$1,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188));
parser = G__23830;
>>>>>>> 8f3c68a (Initial Commit)
continue;

break;
case "done":
throw cljs.analyzer.error.call(null,env,"Unexpected form after finally");

break;
default:
<<<<<<< HEAD
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23471__$1)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23808__$1)].join('')));
>>>>>>> 8f3c68a (Initial Commit)

}
} else {
return parser;
}
break;
}
})();
<<<<<<< HEAD
var map__23463__$1 = (((((!((map__23463 == null))))?(((((map__23463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23463):map__23463);
var body__$1 = cljs.core.get.call(null,map__23463__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var cblocks = cljs.core.get.call(null,map__23463__$1,new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138));
var dblock = cljs.core.get.call(null,map__23463__$1,new cljs.core.Keyword(null,"dblock","dblock",-1325623381));
var fblock = cljs.core.get.call(null,map__23463__$1,new cljs.core.Keyword(null,"fblock","fblock",-1236607426));
var finally$ = ((cljs.core.seq.call(null,fblock))?cljs.core.assoc.call(null,(function (){var _STAR_recur_frames_STAR__orig_val__23473 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23474 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23474);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863)),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.rest.call(null,fblock)))));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23473);
=======
var map__23800__$1 = (((((!((map__23800 == null))))?(((((map__23800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23800):map__23800);
var body__$1 = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var cblocks = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138));
var dblock = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"dblock","dblock",-1325623381));
var fblock = cljs.core.get.call(null,map__23800__$1,new cljs.core.Keyword(null,"fblock","fblock",-1236607426));
var finally$ = ((cljs.core.seq.call(null,fblock))?cljs.core.assoc.call(null,(function (){var _STAR_recur_frames_STAR__orig_val__23810 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23811 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23811);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863)),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.rest.call(null,fblock)))));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23810);
>>>>>>> 8f3c68a (Initial Commit)
}})(),new cljs.core.Keyword(null,"body?","body?",-1333761917),true):null);
var e = (cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.seq.call(null,cblocks);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return dblock;
}
})())?cljs.core.gensym.call(null,"e"):null);
var default$ = (function (){var temp__5718__auto__ = dblock;
if(cljs.core.truth_(temp__5718__auto__)){
<<<<<<< HEAD
var vec__23475 = temp__5718__auto__;
var seq__23476 = cljs.core.seq.call(null,vec__23475);
var first__23477 = cljs.core.first.call(null,seq__23476);
var seq__23476__$1 = cljs.core.next.call(null,seq__23476);
var ___$2 = first__23477;
var first__23477__$1 = cljs.core.first.call(null,seq__23476__$1);
var seq__23476__$2 = cljs.core.next.call(null,seq__23476__$1);
var ___$3 = first__23477__$1;
var first__23477__$2 = cljs.core.first.call(null,seq__23476__$2);
var seq__23476__$3 = cljs.core.next.call(null,seq__23476__$2);
var name__$1 = first__23477__$2;
var cb = seq__23476__$3;
=======
var vec__23812 = temp__5718__auto__;
var seq__23813 = cljs.core.seq.call(null,vec__23812);
var first__23814 = cljs.core.first.call(null,seq__23813);
var seq__23813__$1 = cljs.core.next.call(null,seq__23813);
var ___$2 = first__23814;
var first__23814__$1 = cljs.core.first.call(null,seq__23813__$1);
var seq__23813__$2 = cljs.core.next.call(null,seq__23813__$1);
var ___$3 = first__23814__$1;
var first__23814__$2 = cljs.core.first.call(null,seq__23813__$2);
var seq__23813__$3 = cljs.core.next.call(null,seq__23813__$2);
var name__$1 = first__23814__$2;
var cb = seq__23813__$3;
>>>>>>> 8f3c68a (Initial Commit)
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name__$1,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))))),null,(1),null)),cb)));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))));
}
})();
<<<<<<< HEAD
var cblock = ((cljs.core.seq.call(null,cblocks))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),cljs.core.mapcat.call(null,(function (p__23478){
var vec__23479 = p__23478;
var seq__23480 = cljs.core.seq.call(null,vec__23479);
var first__23481 = cljs.core.first.call(null,seq__23480);
var seq__23480__$1 = cljs.core.next.call(null,seq__23480);
var ___$2 = first__23481;
var first__23481__$1 = cljs.core.first.call(null,seq__23480__$1);
var seq__23480__$2 = cljs.core.next.call(null,seq__23480__$1);
var type = first__23481__$1;
var first__23481__$2 = cljs.core.first.call(null,seq__23480__$2);
var seq__23480__$3 = cljs.core.next.call(null,seq__23480__$2);
var name__$1 = first__23481__$2;
var cb = seq__23480__$3;
=======
var cblock = ((cljs.core.seq.call(null,cblocks))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),cljs.core.mapcat.call(null,(function (p__23815){
var vec__23816 = p__23815;
var seq__23817 = cljs.core.seq.call(null,vec__23816);
var first__23818 = cljs.core.first.call(null,seq__23817);
var seq__23817__$1 = cljs.core.next.call(null,seq__23817);
var ___$2 = first__23818;
var first__23818__$1 = cljs.core.first.call(null,seq__23817__$1);
var seq__23817__$2 = cljs.core.next.call(null,seq__23817__$1);
var type = first__23818__$1;
var first__23818__$2 = cljs.core.first.call(null,seq__23817__$2);
var seq__23817__$3 = cljs.core.next.call(null,seq__23817__$2);
var name__$1 = first__23818__$2;
var cb = seq__23817__$3;
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(name__$1)){
if(cljs.core.not.call(null,cljs.core.namespace.call(null,name__$1))){
} else {
throw (new Error(["Assert failed: ","Can't qualify symbol in catch","\n","(not (namespace name))"].join('')));
}
} else {
}

return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,e,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name__$1,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))))),null,(1),null)),cb))),null,(1),null))))));
}),cblocks),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))))):default$);
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(catchenv);
var locals__$1 = (cljs.core.truth_(e)?cljs.core.assoc.call(null,locals,e,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),e,new cljs.core.Keyword(null,"line","line",212345235),cljs.analyzer.get_line.call(null,e,env),new cljs.core.Keyword(null,"column","column",2078222095),cljs.analyzer.get_col.call(null,e,env)], null)):locals);
<<<<<<< HEAD
var catch$ = (cljs.core.truth_(cblock)?(function (){var _STAR_recur_frames_STAR__orig_val__23482 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23483 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23483);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,catchenv,new cljs.core.Keyword(null,"locals","locals",535295783),locals__$1),cblock);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23482);
}})():null);
var try$ = (function (){var _STAR_recur_frames_STAR__orig_val__23484 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23485 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23485);
=======
var catch$ = (cljs.core.truth_(cblock)?(function (){var _STAR_recur_frames_STAR__orig_val__23819 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23820 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23820);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,catchenv,new cljs.core.Keyword(null,"locals","locals",535295783),locals__$1),cblock);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23819);
}})():null);
var try$ = (function (){var _STAR_recur_frames_STAR__orig_val__23821 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23822 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23822);
>>>>>>> 8f3c68a (Initial Commit)

try{return cljs.analyzer.analyze.call(null,(cljs.core.truth_((function (){var or__4126__auto__ = e;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return finally$;
}
})())?catchenv:env),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))));
<<<<<<< HEAD
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23484);
=======
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23821);
>>>>>>> 8f3c68a (Initial Commit)
}})();
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"try","try",1380742522),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.assoc.call(null,try$,new cljs.core.Keyword(null,"body?","body?",-1333761917),true),new cljs.core.Keyword(null,"finally","finally",1589088705),finally$,new cljs.core.Keyword(null,"name","name",1843675177),e,new cljs.core.Keyword(null,"catch","catch",1038065524),catch$,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),(cljs.core.truth_(catch$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch","catch",1038065524)], null):null),(cljs.core.truth_(finally$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"finally","finally",1589088705)], null):null)))], null);
}));
cljs.analyzer.valid_proto = (function cljs$analyzer$valid_proto(x){
if((x instanceof cljs.core.Symbol)){
return x;
} else {
return null;
}
});
cljs.analyzer.elide_env = (function cljs$analyzer$elide_env(env,ast,opts){
return cljs.core.dissoc.call(null,ast,new cljs.core.Keyword(null,"env","env",-1815813235));
});
cljs.analyzer.replace_env_pass = (function cljs$analyzer$replace_env_pass(new_env){
return (function (env,ast,opts){
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"env","env",-1815813235),new_env);
});
});
cljs.analyzer.ast_children = (function cljs$analyzer$ast_children(ast){
return cljs.core.mapcat.call(null,(function (c){
var g = cljs.core.get.call(null,ast,c);
if(cljs.core.vector_QMARK_.call(null,g)){
return g;
} else {
if(cljs.core.truth_(g)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null);
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
});
<<<<<<< HEAD
cljs.analyzer.constant_value_QMARK_ = (function cljs$analyzer$constant_value_QMARK_(p__23494){
var map__23495 = p__23494;
var map__23495__$1 = (((((!((map__23495 == null))))?(((((map__23495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23495):map__23495);
var ast = map__23495__$1;
var op = cljs.core.get.call(null,map__23495__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
=======
cljs.analyzer.constant_value_QMARK_ = (function cljs$analyzer$constant_value_QMARK_(p__23831){
var map__23832 = p__23831;
var map__23832__$1 = (((((!((map__23832 == null))))?(((((map__23832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23832):map__23832);
var ast = map__23832__$1;
var op = cljs.core.get.call(null,map__23832__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
>>>>>>> 8f3c68a (Initial Commit)
var or__4126__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"const","const",1709929842),null,new cljs.core.Keyword(null,"quote","quote",-262615245),null], null), null).call(null,op);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null).call(null,op);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.every_QMARK_.call(null,cljs.analyzer.constant_value_QMARK_,cljs.analyzer.ast_children.call(null,ast));
} else {
return and__4115__auto__;
}
}
});
<<<<<<< HEAD
cljs.analyzer.const_expr__GT_constant_value = (function cljs$analyzer$const_expr__GT_constant_value(p__23497){
var map__23498 = p__23497;
var map__23498__$1 = (((((!((map__23498 == null))))?(((((map__23498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23498):map__23498);
var e = map__23498__$1;
var op = cljs.core.get.call(null,map__23498__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var G__23500 = op;
var G__23500__$1 = (((G__23500 instanceof cljs.core.Keyword))?G__23500.fqn:null);
switch (G__23500__$1) {
=======
cljs.analyzer.const_expr__GT_constant_value = (function cljs$analyzer$const_expr__GT_constant_value(p__23834){
var map__23835 = p__23834;
var map__23835__$1 = (((((!((map__23835 == null))))?(((((map__23835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23835):map__23835);
var e = map__23835__$1;
var op = cljs.core.get.call(null,map__23835__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var G__23837 = op;
var G__23837__$1 = (((G__23837 instanceof cljs.core.Keyword))?G__23837.fqn:null);
switch (G__23837__$1) {
>>>>>>> 8f3c68a (Initial Commit)
case "quote":
return cljs.analyzer.const_expr__GT_constant_value.call(null,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(e));

break;
case "const":
return new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(e);

break;
case "map":
return cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.analyzer.const_expr__GT_constant_value,new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(e)),cljs.core.map.call(null,cljs.analyzer.const_expr__GT_constant_value,new cljs.core.Keyword(null,"vals","vals",768058733).cljs$core$IFn$_invoke$arity$1(e)));

break;
case "set":
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.analyzer.const_expr__GT_constant_value,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(e)));

break;
case "vector":
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.analyzer.const_expr__GT_constant_value,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(e)));

break;
default:
<<<<<<< HEAD
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23500__$1)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23837__$1)].join('')));
>>>>>>> 8f3c68a (Initial Commit)

}
});
cljs.analyzer.earmuffed_QMARK_ = (function cljs$analyzer$earmuffed_QMARK_(sym){
var s = cljs.core.name.call(null,sym);
return (((((s).length) > (2))) && (clojure.string.starts_with_QMARK_.call(null,s,"*")) && (clojure.string.ends_with_QMARK_.call(null,s,"*")));
});
cljs.analyzer.core_ns_QMARK_ = (function cljs$analyzer$core_ns_QMARK_(ns_sym){
var s = cljs.core.name.call(null,ns_sym);
return ((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),ns_sym)) && (((clojure.string.starts_with_QMARK_.call(null,s,"cljs.")) || (clojure.string.starts_with_QMARK_.call(null,s,"clojure.")))));
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"def","def",597100991,null),(function (op,env,form,_,___$1){
if((cljs.core.count.call(null,form) > (4))){
throw cljs.analyzer.error.call(null,env,"Too many arguments to def");
} else {
}

var pfn = (function() {
<<<<<<< HEAD
var G__23510 = null;
var G__23510__2 = (function (___$2,sym){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null);
});
var G__23510__3 = (function (___$2,sym,init){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"init","init",-1875481434),init], null);
});
var G__23510__4 = (function (___$2,sym,doc,init){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"init","init",-1875481434),init], null);
});
G__23510 = function(___$2,sym,doc,init){
switch(arguments.length){
case 2:
return G__23510__2.call(this,___$2,sym);
case 3:
return G__23510__3.call(this,___$2,sym,doc);
case 4:
return G__23510__4.call(this,___$2,sym,doc,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23510.cljs$core$IFn$_invoke$arity$2 = G__23510__2;
G__23510.cljs$core$IFn$_invoke$arity$3 = G__23510__3;
G__23510.cljs$core$IFn$_invoke$arity$4 = G__23510__4;
return G__23510;
=======
var G__23847 = null;
var G__23847__2 = (function (___$2,sym){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null);
});
var G__23847__3 = (function (___$2,sym,init){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"init","init",-1875481434),init], null);
});
var G__23847__4 = (function (___$2,sym,doc,init){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"init","init",-1875481434),init], null);
});
G__23847 = function(___$2,sym,doc,init){
switch(arguments.length){
case 2:
return G__23847__2.call(this,___$2,sym);
case 3:
return G__23847__3.call(this,___$2,sym,doc);
case 4:
return G__23847__4.call(this,___$2,sym,doc,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23847.cljs$core$IFn$_invoke$arity$2 = G__23847__2;
G__23847.cljs$core$IFn$_invoke$arity$3 = G__23847__3;
G__23847.cljs$core$IFn$_invoke$arity$4 = G__23847__4;
return G__23847;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
var args = cljs.core.apply.call(null,pfn,form);
var sym = new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(args);
var const_QMARK_ = new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym));
var sym_meta = cljs.core.meta.call(null,sym);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym));
var protocol = cljs.analyzer.valid_proto.call(null,new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym)));
var dynamic = new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym));
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
var clash_ns = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var sym_ns = cljs.core.namespace.call(null,sym);
var sym__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = sym_ns;
if(cljs.core.truth_(and__4115__auto__)){
return (!(cljs.core.symbol_identical_QMARK_.call(null,cljs.core.symbol.call(null,sym_ns),ns_name)));
} else {
return and__4115__auto__;
}
})())?(function(){throw cljs.analyzer.error.call(null,env,["Can't def ns-qualified name in namespace ",sym_ns].join(''))})():(((!((sym_ns == null))))?cljs.core.symbol.call(null,cljs.core.name.call(null,sym)):sym
));
if((!((cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),clash_ns], null)) == null)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)].join('')),new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1))], null));
} else {
}

if((!((new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),sym__$1)) == null)))){
throw cljs.analyzer.error.call(null,env,"Can't redefine a constant");
} else {
}

<<<<<<< HEAD
var temp__5724__auto___23511 = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(args);
if((temp__5724__auto___23511 == null)){
} else {
var doc_23512 = temp__5724__auto___23511;
if(typeof doc_23512 === 'string'){
=======
var temp__5724__auto___23848 = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(args);
if((temp__5724__auto___23848 == null)){
} else {
var doc_23849 = temp__5724__auto___23848;
if(typeof doc_23849 === 'string'){
>>>>>>> 8f3c68a (Initial Commit)
} else {
throw cljs.analyzer.error.call(null,env,"Too many arguments to def");
}
}

if(((cljs.core.not.call(null,dynamic)) && (cljs.analyzer.earmuffed_QMARK_.call(null,sym__$1)) && ((!(cljs.analyzer.core_ns_QMARK_.call(null,ns_name)))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1)], null));
} else {
}

<<<<<<< HEAD
var temp__5724__auto___23513 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null));
if((temp__5724__auto___23513 == null)){
} else {
var v_23514 = temp__5724__auto___23513;
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.analyzer._STAR_allow_redef_STAR_))?((cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(v_23514)))?((cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(sym_meta)))?(function (){var and__4115__auto__ = cljs.analyzer._STAR_file_defs_STAR_;
=======
var temp__5724__auto___23850 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null));
if((temp__5724__auto___23850 == null)){
} else {
var v_23851 = temp__5724__auto___23850;
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.analyzer._STAR_allow_redef_STAR_))?((cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(v_23851)))?((cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(sym_meta)))?(function (){var and__4115__auto__ = cljs.analyzer._STAR_file_defs_STAR_;
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.analyzer._STAR_file_defs_STAR_),sym__$1);
} else {
return and__4115__auto__;
}
})():false):false):false))){
<<<<<<< HEAD
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym__$1,new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(v_23514)], null));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(v_23514);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(v_23514);
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(v_23514),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta));
=======
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym__$1,new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(v_23851)], null));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(v_23851);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(v_23851);
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(v_23851),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta));
>>>>>>> 8f3c68a (Initial Commit)
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
<<<<<<< HEAD
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323),ns_name,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym__$1,new cljs.core.Keyword(null,"declared","declared",92336021),cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(v_23514)),new cljs.core.Keyword(null,"defined","defined",-1805032318),cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta))], null));
=======
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323),ns_name,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym__$1,new cljs.core.Keyword(null,"declared","declared",92336021),cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(v_23851)),new cljs.core.Keyword(null,"defined","defined",-1805032318),cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta))], null));
>>>>>>> 8f3c68a (Initial Commit)
} else {
}
}

var env__$1 = ((((((cljs.core.not_EQ_.call(null,ns_name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))) && (cljs.analyzer.core_name_QMARK_.call(null,env,sym__$1)))) || ((!((cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"uses","uses",232664692),sym__$1], null)) == null))))))?(function (){var ev = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),cljs.core.with_meta.call(null,sym__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
var conj_to_set = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
if(cljs.analyzer.public_name_QMARK_.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(ev),sym__$1)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"redef","redef",1032704258),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym__$1,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(ev),new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323),ns_name], null));
} else {
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),conj_to_set,sym__$1);

return cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),conj_to_set,sym__$1);
})():env);
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env__$1,new cljs.core.Keyword(null,"locals","locals",535295783)),sym__$1));
var init_expr = ((cljs.core.contains_QMARK_.call(null,args,new cljs.core.Keyword(null,"init","init",-1875481434)))?(function (){
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),var_name], null),sym_meta,((dynamic === true)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null):null),cljs.analyzer.source_info.call(null,var_name,env__$1)));

<<<<<<< HEAD
var _STAR_recur_frames_STAR__orig_val__23503 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23504 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23504);

try{var _STAR_allow_ns_STAR__orig_val__23505 = cljs.analyzer._STAR_allow_ns_STAR_;
var _STAR_allow_ns_STAR__temp_val__23506 = false;
(cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__temp_val__23506);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(args),sym__$1);
}finally {(cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__orig_val__23505);
}}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23503);
=======
var _STAR_recur_frames_STAR__orig_val__23840 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23841 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23841);

try{var _STAR_allow_ns_STAR__orig_val__23842 = cljs.analyzer._STAR_allow_ns_STAR_;
var _STAR_allow_ns_STAR__temp_val__23843 = false;
(cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__temp_val__23843);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(args),sym__$1);
}finally {(cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__orig_val__23842);
}}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23840);
>>>>>>> 8f3c68a (Initial Commit)
}})()
:null);
var fn_var_QMARK_ = (((!((init_expr == null)))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"fn","fn",-1175266204))));
var tag__$1 = ((fn_var_QMARK_)?(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990).cljs$core$IFn$_invoke$arity$1(init_expr);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = tag;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"inferred-ret-tag","inferred-ret-tag",798934347).cljs$core$IFn$_invoke$arity$1(init_expr);
}
}
})():(cljs.core.truth_(tag)?tag:(cljs.core.truth_(dynamic)?cljs.analyzer.ANY_SYM:new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(init_expr)
)));
var export_as = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"export","export",214356590).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1));
if(cljs.core.truth_(temp__5720__auto__)){
var export_val = temp__5720__auto__;
if(cljs.core._EQ_.call(null,true,export_val)){
return var_name;
} else {
return export_val;
}
} else {
return null;
}
})();
var doc = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1));
}
})();
<<<<<<< HEAD
var temp__5724__auto___23515 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null));
if((temp__5724__auto___23515 == null)){
} else {
var v_23516 = temp__5724__auto___23515;
if(((cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1)))) && (((new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(v_23516) === true) && ((!(fn_var_QMARK_))))))){
=======
var temp__5724__auto___23852 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null));
if((temp__5724__auto___23852 == null)){
} else {
var v_23853 = temp__5724__auto___23852;
if(((cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1)))) && (((new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(v_23853) === true) && ((!(fn_var_QMARK_))))))){
>>>>>>> 8f3c68a (Initial Commit)
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323),ns_name,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym__$1], null));
} else {
}
}

if((((cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null)) == null)) || (cljs.core.not.call(null,new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(sym_meta))))){
if(cljs.core.truth_(cljs.analyzer._STAR_file_defs_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.analyzer._STAR_file_defs_STAR_,cljs.core.conj,sym__$1);
} else {
}

<<<<<<< HEAD
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),var_name], null),(function (){var G__23507 = sym_meta;
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(sym_meta))){
return cljs.core.assoc.call(null,G__23507,new cljs.core.Keyword(null,"test","test",577538877),true);
} else {
return G__23507;
=======
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym__$1], null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),var_name], null),(function (){var G__23844 = sym_meta;
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(sym_meta))){
return cljs.core.assoc.call(null,G__23844,new cljs.core.Keyword(null,"test","test",577538877),true);
} else {
return G__23844;
>>>>>>> 8f3c68a (Initial Commit)
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.update_in.call(null,cljs.core.dissoc.call(null,sym_meta,new cljs.core.Keyword(null,"test","test",577538877)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878)], null),(function (f){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env__$1)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
return "cljs/core.cljs";
} else {
return f;
}
<<<<<<< HEAD
}))], null),(cljs.core.truth_(doc)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc], null):null),(cljs.core.truth_(const_QMARK_)?(function (){var const_expr = (function (){var _STAR_passes_STAR__orig_val__23508 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_passes_STAR__temp_val__23509 = cljs.core.conj.call(null,cljs.analyzer._STAR_passes_STAR_,cljs.analyzer.replace_env_pass.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null)));
(cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__23509);

try{return cljs.analyzer.analyze.call(null,env__$1,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(args));
}finally {(cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__23508);
=======
}))], null),(cljs.core.truth_(doc)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc], null):null),(cljs.core.truth_(const_QMARK_)?(function (){var const_expr = (function (){var _STAR_passes_STAR__orig_val__23845 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_passes_STAR__temp_val__23846 = cljs.core.conj.call(null,cljs.analyzer._STAR_passes_STAR_,cljs.analyzer.replace_env_pass.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null)));
(cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__23846);

try{return cljs.analyzer.analyze.call(null,env__$1,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(args));
}finally {(cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__23845);
>>>>>>> 8f3c68a (Initial Commit)
}})();
if(cljs.core.truth_(cljs.analyzer.constant_value_QMARK_.call(null,const_expr))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292),const_expr], null);
} else {
return null;
}
})():null),((dynamic === true)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null):null),cljs.analyzer.source_info.call(null,var_name,env__$1),(cljs.core.truth_(protocol)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),protocol], null):null),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sym__$1));
if(cljs.core.truth_(temp__5720__auto__)){
var protocol_symbol = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),protocol_symbol,new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,protocol_symbol)),new cljs.core.Keyword(null,"impls","impls",-1314014853),cljs.core.PersistentHashSet.EMPTY], null);
} else {
return null;
}
<<<<<<< HEAD
})(),((fn_var_QMARK_)?(function (){var params = cljs.core.map.call(null,(function (p1__23502_SHARP_){
return cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(p1__23502_SHARP_)));
=======
})(),((fn_var_QMARK_)?(function (){var params = cljs.core.map.call(null,(function (p1__23839_SHARP_){
return cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(p1__23839_SHARP_)));
>>>>>>> 8f3c68a (Initial Commit)
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(init_expr));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),cljs.core.not.call(null,new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(sym_meta)),new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556),new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(init_expr)], null),(function (){var temp__5722__auto__ = new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173).cljs$core$IFn$_invoke$arity$1(sym_meta);
if((temp__5722__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),params,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.meta,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta)))], null);
} else {
var top_fn_meta = temp__5722__auto__;
return top_fn_meta;
}
})());
})():null),(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(sym_meta);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta);
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"declared","declared",92336021),true,new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),true,new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta))], null):null),((((fn_var_QMARK_) && ((!((tag__$1 == null))))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),tag__$1], null):(cljs.core.truth_(tag__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag__$1], null):null))));
} else {
}

return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"ns","ns",441598760),ns_name,new cljs.core.Keyword(null,"name","name",1843675177),var_name,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.assoc.call(null,cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,env__$1,new cljs.core.Keyword(null,"locals","locals",535295783)),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),new cljs.core.Keyword(null,"def-var","def-var",-698214377),true),sym__$1),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797)),new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516),new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(sym_meta)], null),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441).cljs$core$IFn$_invoke$arity$1(sym_meta);
if(cljs.core.truth_(temp__5720__auto__)){
var goog_type = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441),goog_type], null);
} else {
return null;
}
})(),((new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env__$1) === true)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var-ast","var-ast",1200379319),cljs.analyzer.var_ast.call(null,env__$1,sym__$1)], null):null),(function (){var temp__5724__auto__ = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(sym_meta);
if((temp__5724__auto__ == null)){
return null;
} else {
var test = temp__5724__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test","test",577538877),cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),test)], null);
}
})(),(((!((tag__$1 == null))))?((fn_var_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),tag__$1], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag__$1], null)):null),((dynamic === true)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null):null),(((!((export_as == null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export","export",214356590),export_as], null):null),(((!((init_expr == null))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),init_expr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"init","init",-1875481434)], null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"var","var",-769682797)], null)], null)));
}));
cljs.analyzer.analyze_fn_method_param = (function cljs$analyzer$analyze_fn_method_param(env){
<<<<<<< HEAD
return (function (p__23517,p__23518){
var vec__23519 = p__23517;
var locals = cljs.core.nth.call(null,vec__23519,(0),null);
var params = cljs.core.nth.call(null,vec__23519,(1),null);
var vec__23522 = p__23518;
var arg_id = cljs.core.nth.call(null,vec__23522,(0),null);
var name = cljs.core.nth.call(null,vec__23522,(1),null);
=======
return (function (p__23854,p__23855){
var vec__23856 = p__23854;
var locals = cljs.core.nth.call(null,vec__23856,(0),null);
var params = cljs.core.nth.call(null,vec__23856,(1),null);
var vec__23859 = p__23855;
var arg_id = cljs.core.nth.call(null,vec__23859,(0),null);
var name = cljs.core.nth.call(null,vec__23859,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(cljs.core.namespace.call(null,name))){
throw cljs.analyzer.error.call(null,env,["Can't use qualified name as parameter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

var line = cljs.analyzer.get_line.call(null,name,env);
var column = cljs.analyzer.get_col.call(null,name,env);
var nmeta = cljs.core.meta.call(null,name);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(nmeta);
var shadow = (((!((locals == null))))?cljs.analyzer.handle_symbol_local.call(null,name,locals.call(null,name)):null);
var env__$1 = cljs.core.merge.call(null,cljs.core.select_keys.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null));
var param = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"arg-id","arg-id",-767177868),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"local","local",-1497766724)],[name,true,new cljs.core.Keyword(null,"binding","binding",539932593),env__$1,column,line,arg_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"shadow","shadow",873231803),shadow], null),tag,shadow,new cljs.core.Keyword(null,"arg","arg",-1747261837)]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,locals,name,param),cljs.core.conj.call(null,params,param)], null);
});
});
cljs.analyzer.analyze_fn_method_body = (function cljs$analyzer$analyze_fn_method_body(env,form,recur_frames){
<<<<<<< HEAD
var _STAR_recur_frames_STAR__orig_val__23525 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23526 = recur_frames;
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23526);

try{return cljs.analyzer.analyze.call(null,env,form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23525);
=======
var _STAR_recur_frames_STAR__orig_val__23862 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23863 = recur_frames;
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23863);

try{return cljs.analyzer.analyze.call(null,env,form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23862);
>>>>>>> 8f3c68a (Initial Commit)
}});
cljs.analyzer.analyze_fn_method = (function cljs$analyzer$analyze_fn_method(env,locals,form,type,analyze_body_QMARK_){
var param_names = cljs.core.first.call(null,form);
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),param_names));
var param_names__$1 = cljs.core.vec.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),param_names));
var body = cljs.core.next.call(null,form);
var step = cljs.analyzer.analyze_fn_method_param.call(null,env);
var step_init = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [locals,cljs.core.PersistentVector.EMPTY], null);
<<<<<<< HEAD
var vec__23527 = cljs.core.reduce.call(null,step,step_init,cljs.core.map_indexed.call(null,cljs.core.vector,param_names__$1));
var locals__$1 = cljs.core.nth.call(null,vec__23527,(0),null);
var params = cljs.core.nth.call(null,vec__23527,(1),null);
=======
var vec__23864 = cljs.core.reduce.call(null,step,step_init,cljs.core.map_indexed.call(null,cljs.core.vector,param_names__$1));
var locals__$1 = cljs.core.nth.call(null,vec__23864,(0),null);
var params = cljs.core.nth.call(null,vec__23864,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var params_SINGLEQUOTE_ = ((variadic === true)?cljs.core.butlast.call(null,params):params);
var fixed_arity = cljs.core.count.call(null,params_SINGLEQUOTE_);
var recur_frame = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"flag","flag",1088647881),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)], null);
var recur_frames = cljs.core.cons.call(null,recur_frame,cljs.analyzer._STAR_recur_frames_STAR_);
var body_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"locals","locals",535295783),locals__$1);
var body_form = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body)));
var expr = (cljs.core.truth_(analyze_body_QMARK_)?cljs.analyzer.analyze_fn_method_body.call(null,body_env,body_form,recur_frames):null);
var recurs = cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(recur_frame));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"fn-method","fn-method",236100839),new cljs.core.Keyword(null,"variadic?","variadic?",584179762),variadic,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),fixed_arity,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"recurs","recurs",-1959309309),recurs], null),(((!((expr == null))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.assoc.call(null,expr,new cljs.core.Keyword(null,"body?","body?",-1333761917),true),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"body","body",-2049205669)], null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null)], null)));
});
cljs.analyzer.fn_name_var = (function cljs$analyzer$fn_name_var(env,locals,name){
if((!((name == null)))){
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var shadow = cljs.analyzer.handle_symbol_local.call(null,name,cljs.core.get.call(null,locals,name));
var shadow__$1 = (((shadow == null))?cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-globals","js-globals",1670394727),name], null)):null);
var fn_scope = new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859).cljs$core$IFn$_invoke$arity$1(env);
var name_var = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531),true,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859),fn_scope,new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"shadow","shadow",873231803),shadow__$1], null)], null);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name));
var ret_tag = (((!((tag == null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),tag], null):null);
return cljs.core.merge.call(null,name_var,ret_tag);
} else {
return null;
}
});
cljs.analyzer.analyze_fn_methods_pass2_STAR_ = (function cljs$analyzer$analyze_fn_methods_pass2_STAR_(menv,locals,type,meths){
<<<<<<< HEAD
return cljs.core.mapv.call(null,(function (p1__23530_SHARP_){
return cljs.analyzer.analyze_fn_method.call(null,menv,locals,p1__23530_SHARP_,type,true);
=======
return cljs.core.mapv.call(null,(function (p1__23867_SHARP_){
return cljs.analyzer.analyze_fn_method.call(null,menv,locals,p1__23867_SHARP_,type,true);
>>>>>>> 8f3c68a (Initial Commit)
}),meths);
});
cljs.analyzer.analyze_fn_methods_pass2 = (function cljs$analyzer$analyze_fn_methods_pass2(menv,locals,type,meths){
return cljs.analyzer.analyze_fn_methods_pass2_STAR_.call(null,menv,locals,type,meths);
});
<<<<<<< HEAD
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(function (op,env,p__23532,name,_){
var vec__23533 = p__23532;
var seq__23534 = cljs.core.seq.call(null,vec__23533);
var first__23535 = cljs.core.first.call(null,seq__23534);
var seq__23534__$1 = cljs.core.next.call(null,seq__23534);
var ___$1 = first__23535;
var args = seq__23534__$1;
var form = vec__23533;
var named_fn_QMARK_ = (cljs.core.first.call(null,args) instanceof cljs.core.Symbol);
var vec__23536 = ((named_fn_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.seq.call(null,args)], null));
var name__$1 = cljs.core.nth.call(null,vec__23536,(0),null);
var meths = cljs.core.nth.call(null,vec__23536,(1),null);
=======
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(function (op,env,p__23869,name,_){
var vec__23870 = p__23869;
var seq__23871 = cljs.core.seq.call(null,vec__23870);
var first__23872 = cljs.core.first.call(null,seq__23871);
var seq__23871__$1 = cljs.core.next.call(null,seq__23871);
var ___$1 = first__23872;
var args = seq__23871__$1;
var form = vec__23870;
var named_fn_QMARK_ = (cljs.core.first.call(null,args) instanceof cljs.core.Symbol);
var vec__23873 = ((named_fn_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.seq.call(null,args)], null));
var name__$1 = cljs.core.nth.call(null,vec__23873,(0),null);
var meths = cljs.core.nth.call(null,vec__23873,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var meths__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?(new cljs.core.List(null,meths,null,(1),null)):meths);
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
var name_var = cljs.analyzer.fn_name_var.call(null,env,locals,name__$1);
var env__$1 = (((!((name__$1 == null))))?cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859)], null),cljs.core.conj,name_var):env);
var locals__$1 = (((((!((locals == null)))) && (named_fn_QMARK_)))?cljs.core.assoc.call(null,locals,name__$1,name_var):locals);
var form_meta = cljs.core.meta.call(null,form);
var type = new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742).cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_impl = new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409).cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_inline = new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026).cljs$core$IFn$_invoke$arity$1(form_meta);
<<<<<<< HEAD
var menv = cljs.core.merge.call(null,cljs.core.dissoc.call(null,(function (){var G__23539 = env__$1;
if((cljs.core.count.call(null,meths__$1) > (1))){
return cljs.core.assoc.call(null,G__23539,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
} else {
return G__23539;
}
})(),new cljs.core.Keyword(null,"in-loop","in-loop",-187298246)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),proto_impl,new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556),proto_inline], null));
var methods$ = cljs.core.map.call(null,(function (p1__23531_SHARP_){
var _STAR_allow_ns_STAR__orig_val__23540 = cljs.analyzer._STAR_allow_ns_STAR_;
var _STAR_allow_ns_STAR__temp_val__23541 = false;
(cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__temp_val__23541);

try{return cljs.analyzer.analyze_fn_method.call(null,menv,locals__$1,p1__23531_SHARP_,type,(name__$1 == null));
}finally {(cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__orig_val__23540);
=======
var menv = cljs.core.merge.call(null,cljs.core.dissoc.call(null,(function (){var G__23876 = env__$1;
if((cljs.core.count.call(null,meths__$1) > (1))){
return cljs.core.assoc.call(null,G__23876,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
} else {
return G__23876;
}
})(),new cljs.core.Keyword(null,"in-loop","in-loop",-187298246)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),proto_impl,new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556),proto_inline], null));
var methods$ = cljs.core.map.call(null,(function (p1__23868_SHARP_){
var _STAR_allow_ns_STAR__orig_val__23877 = cljs.analyzer._STAR_allow_ns_STAR_;
var _STAR_allow_ns_STAR__temp_val__23878 = false;
(cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__temp_val__23878);

try{return cljs.analyzer.analyze_fn_method.call(null,menv,locals__$1,p1__23868_SHARP_,type,(name__$1 == null));
}finally {(cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__orig_val__23877);
>>>>>>> 8f3c68a (Initial Commit)
}}),meths__$1);
var mfa = cljs.core.transduce.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869)),cljs.core.max,(0),methods$);
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,new cljs.core.Keyword(null,"variadic?","variadic?",584179762),methods$));
var locals__$2 = ((named_fn_QMARK_)?cljs.core.update_in.call(null,locals__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null),cljs.core.assoc,new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),true,new cljs.core.Keyword(null,"variadic?","variadic?",584179762),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$)):locals__$1);
<<<<<<< HEAD
var methods$__$1 = (((!((name__$1 == null))))?(function (){var _STAR_allow_ns_STAR__orig_val__23542 = cljs.analyzer._STAR_allow_ns_STAR_;
var _STAR_allow_ns_STAR__temp_val__23543 = false;
(cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__temp_val__23543);

try{return cljs.analyzer.analyze_fn_methods_pass2.call(null,menv,locals__$2,type,meths__$1);
}finally {(cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__orig_val__23542);
=======
var methods$__$1 = (((!((name__$1 == null))))?(function (){var _STAR_allow_ns_STAR__orig_val__23879 = cljs.analyzer._STAR_allow_ns_STAR_;
var _STAR_allow_ns_STAR__temp_val__23880 = false;
(cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__temp_val__23880);

try{return cljs.analyzer.analyze_fn_methods_pass2.call(null,menv,locals__$2,type,meths__$1);
}finally {(cljs.analyzer._STAR_allow_ns_STAR_ = _STAR_allow_ns_STAR__orig_val__23879);
>>>>>>> 8f3c68a (Initial Commit)
}})():cljs.core.vec.call(null,methods$));
var form__$1 = cljs.core.vary_meta.call(null,form,cljs.core.dissoc,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742));
var js_doc = ((variadic === true)?"@param {...*} var_args":null);
var children = (((!((name_var == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword(null,"methods","methods",453930866)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"methods","methods",453930866)], null));
var inferred_ret_tag = (function (){var inferred_tags = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.analyzer.infer_tag,env__$1),cljs.core.map.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),methods$__$1));
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,inferred_tags))){
return cljs.core.first.call(null,inferred_tags);
} else {
return null;
}
})();
var ast = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185),new cljs.core.Keyword(null,"inferred-ret-tag","inferred-ret-tag",798934347),new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"variadic?","variadic?",584179762),new cljs.core.Keyword(null,"methods","methods",453930866),new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"in-loop","in-loop",-187298246),new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)],[children,proto_inline,name_var,cljs.analyzer._STAR_loop_lets_STAR_,inferred_ret_tag,proto_impl,new cljs.core.Keyword(null,"fn","fn",-1175266204),env__$1,variadic,methods$__$1,cljs.analyzer._STAR_recur_frames_STAR_,mfa,form__$1,new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Keyword(null,"in-loop","in-loop",-187298246).cljs$core$IFn$_invoke$arity$1(env__$1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_doc], null)]),(((!((name_var == null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"local","local",-1497766724),name_var], null):null));
<<<<<<< HEAD
var variadic_methods_23544 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"variadic?","variadic?",584179762)),cljs.core.take.call(null,(1))),methods$__$1);
var variadic_params_23545 = (((cljs.core.count.call(null,variadic_methods_23544) > (0)))?cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,variadic_methods_23544,(0)))):(0));
var param_counts_23546 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.count,new cljs.core.Keyword(null,"params","params",710516235))),methods$__$1);
if(((1) < cljs.core.count.call(null,variadic_methods_23544))){
=======
var variadic_methods_23881 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"variadic?","variadic?",584179762)),cljs.core.take.call(null,(1))),methods$__$1);
var variadic_params_23882 = (((cljs.core.count.call(null,variadic_methods_23881) > (0)))?cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,variadic_methods_23881,(0)))):(0));
var param_counts_23883 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.count,new cljs.core.Keyword(null,"params","params",710516235))),methods$__$1);
if(((1) < cljs.core.count.call(null,variadic_methods_23881))){
>>>>>>> 8f3c68a (Initial Commit)
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),env__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name_var], null));
} else {
}

<<<<<<< HEAD
if((!((((variadic_params_23545 === (0))) || ((variadic_params_23545 === ((1) + mfa))))))){
=======
if((!((((variadic_params_23882 === (0))) || ((variadic_params_23882 === ((1) + mfa))))))){
>>>>>>> 8f3c68a (Initial Commit)
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),env__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name_var], null));
} else {
}

<<<<<<< HEAD
if(cljs.core.not_EQ_.call(null,cljs.core.distinct.call(null,param_counts_23546),param_counts_23546)){
=======
if(cljs.core.not_EQ_.call(null,cljs.core.distinct.call(null,param_counts_23883),param_counts_23883)){
>>>>>>> 8f3c68a (Initial Commit)
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),env__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name_var], null));
} else {
}

return cljs.analyzer.analyze_wrap_meta.call(null,ast);
}));
<<<<<<< HEAD
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),(function (op,env,p__23547,name,_){
var vec__23548 = p__23547;
var seq__23549 = cljs.core.seq.call(null,vec__23548);
var first__23550 = cljs.core.first.call(null,seq__23549);
var seq__23549__$1 = cljs.core.next.call(null,seq__23549);
var ___$1 = first__23550;
var first__23550__$1 = cljs.core.first.call(null,seq__23549__$1);
var seq__23549__$2 = cljs.core.next.call(null,seq__23549__$1);
var bindings = first__23550__$1;
var exprs = seq__23549__$2;
var form = vec__23548;
=======
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),(function (op,env,p__23884,name,_){
var vec__23885 = p__23884;
var seq__23886 = cljs.core.seq.call(null,vec__23885);
var first__23887 = cljs.core.first.call(null,seq__23886);
var seq__23886__$1 = cljs.core.next.call(null,seq__23886);
var ___$1 = first__23887;
var first__23887__$1 = cljs.core.first.call(null,seq__23886__$1);
var seq__23886__$2 = cljs.core.next.call(null,seq__23886__$1);
var bindings = first__23887__$1;
var exprs = seq__23886__$2;
var form = vec__23885;
>>>>>>> 8f3c68a (Initial Commit)
if(((cljs.core.vector_QMARK_.call(null,bindings)) && (cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))))){
} else {
throw cljs.analyzer.error.call(null,env,"bindings must be vector of even number of elements");
}

var n__GT_fexpr = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.first,cljs.core.second),cljs.core.partition.call(null,(2),bindings)));
var names = cljs.core.keys.call(null,n__GT_fexpr);
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
<<<<<<< HEAD
var vec__23551 = cljs.core.reduce.call(null,(function (p__23557,n){
var vec__23558 = p__23557;
var map__23561 = cljs.core.nth.call(null,vec__23558,(0),null);
var map__23561__$1 = (((((!((map__23561 == null))))?(((((map__23561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23561):map__23561);
var env__$1 = map__23561__$1;
var locals = cljs.core.get.call(null,map__23561__$1,new cljs.core.Keyword(null,"locals","locals",535295783));
var bes = cljs.core.nth.call(null,vec__23558,(1),null);
var ret_tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,n));
var fexpr = (function (){var _STAR_cljs_warnings_STAR__orig_val__23563 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__23564 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__23564);

try{return cljs.analyzer.analyze.call(null,env__$1,n__GT_fexpr.call(null,n));
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__23563);
}})();
var be = (function (){var G__23565 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"variadic?","variadic?",584179762),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"local","local",-1497766724)],[n,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(fexpr)),new cljs.core.Keyword(null,"binding","binding",539932593),cljs.analyzer.get_col.call(null,n,env__$1),new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(fexpr),cljs.analyzer.get_line.call(null,n,env__$1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(fexpr),true,cljs.analyzer.handle_symbol_local.call(null,n,locals.call(null,n)),new cljs.core.Keyword(null,"letfn","letfn",-2121022354)]);
if(cljs.core.truth_(ret_tag)){
return cljs.core.assoc.call(null,G__23565,new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),ret_tag);
} else {
return G__23565;
=======
var vec__23888 = cljs.core.reduce.call(null,(function (p__23894,n){
var vec__23895 = p__23894;
var map__23898 = cljs.core.nth.call(null,vec__23895,(0),null);
var map__23898__$1 = (((((!((map__23898 == null))))?(((((map__23898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23898):map__23898);
var env__$1 = map__23898__$1;
var locals = cljs.core.get.call(null,map__23898__$1,new cljs.core.Keyword(null,"locals","locals",535295783));
var bes = cljs.core.nth.call(null,vec__23895,(1),null);
var ret_tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,n));
var fexpr = (function (){var _STAR_cljs_warnings_STAR__orig_val__23900 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__23901 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__23901);

try{return cljs.analyzer.analyze.call(null,env__$1,n__GT_fexpr.call(null,n));
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__23900);
}})();
var be = (function (){var G__23902 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"variadic?","variadic?",584179762),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"local","local",-1497766724)],[n,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(fexpr)),new cljs.core.Keyword(null,"binding","binding",539932593),cljs.analyzer.get_col.call(null,n,env__$1),new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(fexpr),cljs.analyzer.get_line.call(null,n,env__$1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(fexpr),true,cljs.analyzer.handle_symbol_local.call(null,n,locals.call(null,n)),new cljs.core.Keyword(null,"letfn","letfn",-2121022354)]);
if(cljs.core.truth_(ret_tag)){
return cljs.core.assoc.call(null,G__23902,new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),ret_tag);
} else {
return G__23902;
>>>>>>> 8f3c68a (Initial Commit)
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in.call(null,env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),n], null),be),cljs.core.conj.call(null,bes,be)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,cljs.core.PersistentVector.EMPTY], null),names);
<<<<<<< HEAD
var meth_env = cljs.core.nth.call(null,vec__23551,(0),null);
var bes = cljs.core.nth.call(null,vec__23551,(1),null);
var meth_env__$1 = cljs.core.assoc.call(null,meth_env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var vec__23554 = cljs.core.reduce.call(null,(function (p__23566,p__23567){
var vec__23568 = p__23566;
var meth_env__$2 = cljs.core.nth.call(null,vec__23568,(0),null);
var bes__$1 = cljs.core.nth.call(null,vec__23568,(1),null);
var map__23571 = p__23567;
var map__23571__$1 = (((((!((map__23571 == null))))?(((((map__23571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23571):map__23571);
var be = map__23571__$1;
var name__$1 = cljs.core.get.call(null,map__23571__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var shadow = cljs.core.get.call(null,map__23571__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
=======
var meth_env = cljs.core.nth.call(null,vec__23888,(0),null);
var bes = cljs.core.nth.call(null,vec__23888,(1),null);
var meth_env__$1 = cljs.core.assoc.call(null,meth_env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var vec__23891 = cljs.core.reduce.call(null,(function (p__23903,p__23904){
var vec__23905 = p__23903;
var meth_env__$2 = cljs.core.nth.call(null,vec__23905,(0),null);
var bes__$1 = cljs.core.nth.call(null,vec__23905,(1),null);
var map__23908 = p__23904;
var map__23908__$1 = (((((!((map__23908 == null))))?(((((map__23908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23908):map__23908);
var be = map__23908__$1;
var name__$1 = cljs.core.get.call(null,map__23908__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var shadow = cljs.core.get.call(null,map__23908__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
>>>>>>> 8f3c68a (Initial Commit)
var env__$1 = cljs.core.assoc_in.call(null,meth_env__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name__$1], null),shadow);
var fexpr = cljs.analyzer.analyze.call(null,env__$1,n__GT_fexpr.call(null,name__$1));
var be_SINGLEQUOTE_ = cljs.core.assoc.call(null,be,new cljs.core.Keyword(null,"init","init",-1875481434),fexpr,new cljs.core.Keyword(null,"variadic?","variadic?",584179762),new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(fexpr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(fexpr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(fexpr)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in.call(null,env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name__$1], null),be_SINGLEQUOTE_),cljs.core.conj.call(null,bes__$1,be_SINGLEQUOTE_)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth_env__$1,cljs.core.PersistentVector.EMPTY], null),bes);
<<<<<<< HEAD
var meth_env__$2 = cljs.core.nth.call(null,vec__23554,(0),null);
var bes__$1 = cljs.core.nth.call(null,vec__23554,(1),null);
=======
var meth_env__$2 = cljs.core.nth.call(null,vec__23891,(0),null);
var bes__$1 = cljs.core.nth.call(null,vec__23891,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var expr = cljs.core.assoc.call(null,cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,meth_env__$2,new cljs.core.Keyword(null,"context","context",-830191113),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context))?new cljs.core.Keyword(null,"return","return",-1891502105):context)),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),exprs)))),new cljs.core.Keyword(null,"body?","body?",-1333761917),true);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"letfn","letfn",-2121022354),new cljs.core.Keyword(null,"bindings","bindings",1271397192),bes__$1,new cljs.core.Keyword(null,"body","body",-2049205669),expr,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"body","body",-2049205669)], null)], null);
}));
cljs.analyzer.analyze_do_statements_STAR_ = (function cljs$analyzer$analyze_do_statements_STAR_(env,exprs){
<<<<<<< HEAD
return cljs.core.mapv.call(null,(function (p1__23573_SHARP_){
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863)),p1__23573_SHARP_);
}),cljs.core.butlast.call(null,exprs));
});
cljs.analyzer.analyze_do_statements = (function cljs$analyzer$analyze_do_statements(env,exprs){
var _STAR_recur_frames_STAR__orig_val__23574 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23575 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23575);

try{return cljs.analyzer.analyze_do_statements_STAR_.call(null,env,exprs);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23574);
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"do","do",1686842252,null),(function (op,env,p__23576,_,___$1){
var vec__23577 = p__23576;
var seq__23578 = cljs.core.seq.call(null,vec__23577);
var first__23579 = cljs.core.first.call(null,seq__23578);
var seq__23578__$1 = cljs.core.next.call(null,seq__23578);
var ___$2 = first__23579;
var exprs = seq__23578__$1;
var form = vec__23577;
=======
return cljs.core.mapv.call(null,(function (p1__23910_SHARP_){
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863)),p1__23910_SHARP_);
}),cljs.core.butlast.call(null,exprs));
});
cljs.analyzer.analyze_do_statements = (function cljs$analyzer$analyze_do_statements(env,exprs){
var _STAR_recur_frames_STAR__orig_val__23911 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23912 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23912);

try{return cljs.analyzer.analyze_do_statements_STAR_.call(null,env,exprs);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23911);
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"do","do",1686842252,null),(function (op,env,p__23913,_,___$1){
var vec__23914 = p__23913;
var seq__23915 = cljs.core.seq.call(null,vec__23914);
var first__23916 = cljs.core.first.call(null,seq__23915);
var seq__23915__$1 = cljs.core.next.call(null,seq__23915);
var ___$2 = first__23916;
var exprs = seq__23915__$1;
var form = vec__23914;
>>>>>>> 8f3c68a (Initial Commit)
var statements = cljs.analyzer.analyze_do_statements.call(null,env,exprs);
if((cljs.core.count.call(null,exprs) <= (1))){
var ret = cljs.analyzer.analyze.call(null,env,cljs.core.first.call(null,exprs));
var children = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"statements","statements",600349855),new cljs.core.Keyword(null,"ret","ret",-468222814)], null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"statements","statements",600349855),statements,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else {
var ret_env = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env)))?cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863)):cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"return","return",-1891502105)));
var ret = cljs.analyzer.analyze.call(null,ret_env,cljs.core.last.call(null,exprs));
var children = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"statements","statements",600349855),new cljs.core.Keyword(null,"ret","ret",-468222814)], null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"statements","statements",600349855),statements,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
}
}));
cljs.analyzer.analyze_let_binding_init = (function cljs$analyzer$analyze_let_binding_init(env,init,loop_lets){
<<<<<<< HEAD
var _STAR_loop_lets_STAR__orig_val__23580 = cljs.analyzer._STAR_loop_lets_STAR_;
var _STAR_loop_lets_STAR__temp_val__23581 = loop_lets;
(cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__temp_val__23581);

try{return cljs.analyzer.analyze.call(null,env,init);
}finally {(cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__orig_val__23580);
=======
var _STAR_loop_lets_STAR__orig_val__23917 = cljs.analyzer._STAR_loop_lets_STAR_;
var _STAR_loop_lets_STAR__temp_val__23918 = loop_lets;
(cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__temp_val__23918);

try{return cljs.analyzer.analyze.call(null,env,init);
}finally {(cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__orig_val__23917);
>>>>>>> 8f3c68a (Initial Commit)
}});
cljs.analyzer.get_let_tag = (function cljs$analyzer$get_let_tag(name,init_expr){
var temp__5722__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name));
if((temp__5722__auto__ == null)){
var temp__5722__auto____$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(init_expr);
if((temp__5722__auto____$1 == null)){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(init_expr));
} else {
var tag = temp__5722__auto____$1;
return tag;
}
} else {
var tag = temp__5722__auto__;
return tag;
}
});
cljs.analyzer.analyze_let_bindings_STAR_ = (function cljs$analyzer$analyze_let_bindings_STAR_(encl_env,bindings,op){
var bes = cljs.core.PersistentVector.EMPTY;
var env = cljs.core.assoc.call(null,encl_env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var bindings__$1 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),bindings));
while(true){
var temp__5722__auto__ = cljs.core.first.call(null,bindings__$1);
if((temp__5722__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bes,env], null);
} else {
<<<<<<< HEAD
var vec__23586 = temp__5722__auto__;
var name = cljs.core.nth.call(null,vec__23586,(0),null);
var init = cljs.core.nth.call(null,vec__23586,(1),null);
=======
var vec__23923 = temp__5722__auto__;
var name = cljs.core.nth.call(null,vec__23923,(0),null);
var init = cljs.core.nth.call(null,vec__23923,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
if((((!((cljs.core.namespace.call(null,name) == null)))) || (goog.string.contains(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),".")))){
throw cljs.analyzer.error.call(null,encl_env,["Invalid local name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
} else {
}

var init_expr = cljs.analyzer.analyze_let_binding_init.call(null,env,init,cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),bes], null),cljs.analyzer._STAR_loop_lets_STAR_));
var line = cljs.analyzer.get_line.call(null,name,env);
var col = cljs.analyzer.get_col.call(null,name,env);
var shadow = cljs.analyzer.handle_symbol_local.call(null,name,cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name], null)));
var be = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"local","local",-1497766724)],[init_expr,name,true,new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null),col,line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"shadow","shadow",873231803),shadow], null),cljs.analyzer.get_let_tag.call(null,name,init_expr),shadow,op]);
<<<<<<< HEAD
var be__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(init_expr)))?cljs.core.merge.call(null,be,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),true,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (bes,env,bindings__$1,init_expr,line,col,shadow,be,vec__23586,name,init,temp__5722__auto__){
return (function (p1__23582_SHARP_){
return cljs.core.select_keys.call(null,p1__23582_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"variadic?","variadic?",584179762)], null));
});})(bes,env,bindings__$1,init_expr,line,col,shadow,be,vec__23586,name,init,temp__5722__auto__))
,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(init_expr))),new cljs.core.Keyword(null,"variadic?","variadic?",584179762),new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(init_expr))], null)):be);
var G__23589 = cljs.core.conj.call(null,bes,be__$1);
var G__23590 = cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name], null),be__$1);
var G__23591 = cljs.core.next.call(null,bindings__$1);
bes = G__23589;
env = G__23590;
bindings__$1 = G__23591;
=======
var be__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(init_expr)))?cljs.core.merge.call(null,be,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),true,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (bes,env,bindings__$1,init_expr,line,col,shadow,be,vec__23923,name,init,temp__5722__auto__){
return (function (p1__23919_SHARP_){
return cljs.core.select_keys.call(null,p1__23919_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"variadic?","variadic?",584179762)], null));
});})(bes,env,bindings__$1,init_expr,line,col,shadow,be,vec__23923,name,init,temp__5722__auto__))
,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(init_expr))),new cljs.core.Keyword(null,"variadic?","variadic?",584179762),new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(init_expr))], null)):be);
var G__23926 = cljs.core.conj.call(null,bes,be__$1);
var G__23927 = cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name], null),be__$1);
var G__23928 = cljs.core.next.call(null,bindings__$1);
bes = G__23926;
env = G__23927;
bindings__$1 = G__23928;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
break;
}
});
cljs.analyzer.analyze_let_bindings = (function cljs$analyzer$analyze_let_bindings(encl_env,bindings,op){
<<<<<<< HEAD
var _STAR_recur_frames_STAR__orig_val__23592 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23593 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23593);

try{return cljs.analyzer.analyze_let_bindings_STAR_.call(null,encl_env,bindings,op);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23592);
=======
var _STAR_recur_frames_STAR__orig_val__23929 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23930 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23930);

try{return cljs.analyzer.analyze_let_bindings_STAR_.call(null,encl_env,bindings,op);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23929);
>>>>>>> 8f3c68a (Initial Commit)
}});
cljs.analyzer.analyze_let_body_STAR_ = (function cljs$analyzer$analyze_let_body_STAR_(env,context,exprs){
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context))?new cljs.core.Keyword(null,"return","return",-1891502105):context)),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),exprs))));
});
cljs.analyzer.analyze_let_body = (function cljs$analyzer$analyze_let_body(env,context,exprs,recur_frames,loop_lets){
<<<<<<< HEAD
var _STAR_recur_frames_STAR__orig_val__23594 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_loop_lets_STAR__orig_val__23595 = cljs.analyzer._STAR_loop_lets_STAR_;
var _STAR_recur_frames_STAR__temp_val__23596 = recur_frames;
var _STAR_loop_lets_STAR__temp_val__23597 = loop_lets;
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23596);

(cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__temp_val__23597);

try{return cljs.analyzer.analyze_let_body_STAR_.call(null,env,context,exprs);
}finally {(cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__orig_val__23595);

(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23594);
}});
cljs.analyzer.analyze_let = (function cljs$analyzer$analyze_let(encl_env,p__23598,is_loop,widened_tags){
while(true){
var vec__23599 = p__23598;
var seq__23600 = cljs.core.seq.call(null,vec__23599);
var first__23601 = cljs.core.first.call(null,seq__23600);
var seq__23600__$1 = cljs.core.next.call(null,seq__23600);
var _ = first__23601;
var first__23601__$1 = cljs.core.first.call(null,seq__23600__$1);
var seq__23600__$2 = cljs.core.next.call(null,seq__23600__$1);
var bindings = first__23601__$1;
var exprs = seq__23600__$2;
var form = vec__23599;
=======
var _STAR_recur_frames_STAR__orig_val__23931 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_loop_lets_STAR__orig_val__23932 = cljs.analyzer._STAR_loop_lets_STAR_;
var _STAR_recur_frames_STAR__temp_val__23933 = recur_frames;
var _STAR_loop_lets_STAR__temp_val__23934 = loop_lets;
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23933);

(cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__temp_val__23934);

try{return cljs.analyzer.analyze_let_body_STAR_.call(null,env,context,exprs);
}finally {(cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR__orig_val__23932);

(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23931);
}});
cljs.analyzer.analyze_let = (function cljs$analyzer$analyze_let(encl_env,p__23935,is_loop,widened_tags){
while(true){
var vec__23936 = p__23935;
var seq__23937 = cljs.core.seq.call(null,vec__23936);
var first__23938 = cljs.core.first.call(null,seq__23937);
var seq__23937__$1 = cljs.core.next.call(null,seq__23937);
var _ = first__23938;
var first__23938__$1 = cljs.core.first.call(null,seq__23937__$1);
var seq__23937__$2 = cljs.core.next.call(null,seq__23937__$1);
var bindings = first__23938__$1;
var exprs = seq__23937__$2;
var form = vec__23936;
>>>>>>> 8f3c68a (Initial Commit)
if(((cljs.core.vector_QMARK_.call(null,bindings)) && (cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))))){
} else {
throw cljs.analyzer.error.call(null,encl_env,"bindings must be vector of even number of elements");
}

var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(encl_env);
var op = ((is_loop === true)?new cljs.core.Keyword(null,"loop","loop",-395552849):new cljs.core.Keyword(null,"let","let",-1282412701));
<<<<<<< HEAD
var bindings__$1 = (cljs.core.truth_(widened_tags)?cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (encl_env,p__23598,is_loop,widened_tags,context,op,vec__23599,seq__23600,first__23601,seq__23600__$1,_,first__23601__$1,seq__23600__$2,bindings,exprs,form){
return (function (p__23605,widened_tag){
var vec__23606 = p__23605;
var name = cljs.core.nth.call(null,vec__23606,(0),null);
var init = cljs.core.nth.call(null,vec__23606,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),widened_tag),init], null);
});})(encl_env,p__23598,is_loop,widened_tags,context,op,vec__23599,seq__23600,first__23601,seq__23600__$1,_,first__23601__$1,seq__23600__$2,bindings,exprs,form))
,cljs.core.partition.call(null,(2),bindings),widened_tags)):bindings);
var vec__23602 = cljs.analyzer.analyze_let_bindings.call(null,(function (){var G__23609 = encl_env;
if(is_loop === true){
return cljs.core.assoc.call(null,G__23609,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246),true);
} else {
return G__23609;
}
})(),bindings__$1,op);
var bes = cljs.core.nth.call(null,vec__23602,(0),null);
var env = cljs.core.nth.call(null,vec__23602,(1),null);
=======
var bindings__$1 = (cljs.core.truth_(widened_tags)?cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (encl_env,p__23935,is_loop,widened_tags,context,op,vec__23936,seq__23937,first__23938,seq__23937__$1,_,first__23938__$1,seq__23937__$2,bindings,exprs,form){
return (function (p__23942,widened_tag){
var vec__23943 = p__23942;
var name = cljs.core.nth.call(null,vec__23943,(0),null);
var init = cljs.core.nth.call(null,vec__23943,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),widened_tag),init], null);
});})(encl_env,p__23935,is_loop,widened_tags,context,op,vec__23936,seq__23937,first__23938,seq__23937__$1,_,first__23938__$1,seq__23937__$2,bindings,exprs,form))
,cljs.core.partition.call(null,(2),bindings),widened_tags)):bindings);
var vec__23939 = cljs.analyzer.analyze_let_bindings.call(null,(function (){var G__23946 = encl_env;
if(is_loop === true){
return cljs.core.assoc.call(null,G__23946,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246),true);
} else {
return G__23946;
}
})(),bindings__$1,op);
var bes = cljs.core.nth.call(null,vec__23939,(0),null);
var env = cljs.core.nth.call(null,vec__23939,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var recur_frame = ((is_loop === true)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),bes,new cljs.core.Keyword(null,"flag","flag",1088647881),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.atom.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),bes))], null):null);
var recur_frames = (cljs.core.truth_(recur_frame)?cljs.core.cons.call(null,recur_frame,cljs.analyzer._STAR_recur_frames_STAR_):cljs.analyzer._STAR_recur_frames_STAR_);
var loop_lets = ((is_loop === true)?cljs.analyzer._STAR_loop_lets_STAR_:(((!((cljs.analyzer._STAR_loop_lets_STAR_ == null))))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),bes], null),cljs.analyzer._STAR_loop_lets_STAR_):null));
var warn_acc = (cljs.core.truth_((function (){var and__4115__auto__ = is_loop;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,widened_tags);
} else {
return and__4115__auto__;
}
})())?cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY):null);
<<<<<<< HEAD
var expr = (cljs.core.truth_(warn_acc)?(function (){var _STAR_cljs_warning_handlers_STAR__orig_val__23610 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__23611 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.accumulating_warning_handler.call(null,warn_acc)], null);
(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__23611);

try{return cljs.analyzer.analyze_let_body.call(null,env,context,exprs,recur_frames,loop_lets);
}finally {(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__23610);
=======
var expr = (cljs.core.truth_(warn_acc)?(function (){var _STAR_cljs_warning_handlers_STAR__orig_val__23947 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__23948 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.accumulating_warning_handler.call(null,warn_acc)], null);
(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__23948);

try{return cljs.analyzer.analyze_let_body.call(null,env,context,exprs,recur_frames,loop_lets);
}finally {(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__23947);
>>>>>>> 8f3c68a (Initial Commit)
}})():cljs.analyzer.analyze_let_body.call(null,env,context,exprs,recur_frames,loop_lets));
var children = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"body","body",-2049205669)], null);
var nil__GT_any = cljs.core.fnil.call(null,cljs.core.identity,new cljs.core.Symbol(null,"any","any",-948528346,null));
if(cljs.core.truth_((function (){var and__4115__auto__ = is_loop;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,widened_tags)) && (cljs.core.not_EQ_.call(null,cljs.core.mapv.call(null,nil__GT_any,cljs.core.deref.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(recur_frame))),cljs.core.mapv.call(null,cljs.core.comp.call(null,nil__GT_any,new cljs.core.Keyword(null,"tag","tag",-1290361223)),bes))));
} else {
return and__4115__auto__;
}
})())){
<<<<<<< HEAD
var G__23612 = encl_env;
var G__23613 = form;
var G__23614 = is_loop;
var G__23615 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(recur_frame));
encl_env = G__23612;
p__23598 = G__23613;
is_loop = G__23614;
widened_tags = G__23615;
=======
var G__23949 = encl_env;
var G__23950 = form;
var G__23951 = is_loop;
var G__23952 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(recur_frame));
encl_env = G__23949;
p__23935 = G__23950;
is_loop = G__23951;
widened_tags = G__23952;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
if(cljs.core.truth_(warn_acc)){
cljs.analyzer.replay_accumulated_warnings.call(null,warn_acc);
} else {
}

return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),op,new cljs.core.Keyword(null,"env","env",-1815813235),encl_env,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bes,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.assoc.call(null,expr,new cljs.core.Keyword(null,"body?","body?",-1333761917),true),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
}
break;
}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"let*","let*",1920721458,null),(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let.call(null,encl_env,form,false,null);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let.call(null,encl_env,form,true,null);
}));
<<<<<<< HEAD
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"recur","recur",1202958259,null),(function (op,env,p__23617,_,___$1){
var vec__23618 = p__23617;
var seq__23619 = cljs.core.seq.call(null,vec__23618);
var first__23620 = cljs.core.first.call(null,seq__23619);
var seq__23619__$1 = cljs.core.next.call(null,seq__23619);
var ___$2 = first__23620;
var exprs = seq__23619__$1;
var form = vec__23618;
=======
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"recur","recur",1202958259,null),(function (op,env,p__23954,_,___$1){
var vec__23955 = p__23954;
var seq__23956 = cljs.core.seq.call(null,vec__23955);
var first__23957 = cljs.core.first.call(null,seq__23956);
var seq__23956__$1 = cljs.core.next.call(null,seq__23956);
var ___$2 = first__23957;
var exprs = seq__23956__$1;
var form = vec__23955;
>>>>>>> 8f3c68a (Initial Commit)
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var frame = cljs.core.first.call(null,cljs.analyzer._STAR_recur_frames_STAR_);
var add_implicit_target_object_QMARK_ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365).cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,exprs),(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame)) - (1)));
} else {
return and__4115__auto__;
}
})();
<<<<<<< HEAD
var exprs__$1 = (function (){var G__23621 = exprs;
if(cljs.core.truth_(add_implicit_target_object_QMARK_)){
return cljs.core.cons.call(null,null,G__23621);
} else {
return G__23621;
}
})();
var exprs__$2 = (function (){var _STAR_recur_frames_STAR__orig_val__23622 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23623 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23623);

try{return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__23616_SHARP_){
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),p1__23616_SHARP_);
}),exprs__$1));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23622);
=======
var exprs__$1 = (function (){var G__23958 = exprs;
if(cljs.core.truth_(add_implicit_target_object_QMARK_)){
return cljs.core.cons.call(null,null,G__23958);
} else {
return G__23958;
}
})();
var exprs__$2 = (function (){var _STAR_recur_frames_STAR__orig_val__23959 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23960 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23960);

try{return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__23953_SHARP_){
return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),p1__23953_SHARP_);
}),exprs__$1));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23959);
>>>>>>> 8f3c68a (Initial Commit)
}})();
if(cljs.core.truth_(frame)){
} else {
throw cljs.analyzer.error.call(null,env,"Can't recur here");
}

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,exprs__$2),cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame)))){
} else {
throw cljs.analyzer.error.call(null,env,["recur argument count mismatch, expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame)))," args, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,exprs__$2))].join(''));
}

if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365).cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,add_implicit_target_object_QMARK_);
} else {
return and__4115__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,exprs__$2))], null));
} else {
}

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(frame),true);

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(frame),(function (tags){
return cljs.core.mapv.call(null,(function (tag,expr){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"loop","loop",-395552849),new cljs.core.Keyword(null,"local","local",-1497766724).cljs$core$IFn$_invoke$arity$1(expr))){
return new cljs.core.Symbol(null,"any","any",-948528346,null);
} else {
return cljs.analyzer.add_types.call(null,tag,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(expr));
}
}),tags,exprs__$2);
}));

return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"recur","recur",-437573268),new cljs.core.Keyword(null,"form","form",-1624062471),form], null),new cljs.core.Keyword(null,"frame","frame",-1711082588),frame,new cljs.core.Keyword(null,"exprs","exprs",1795829094),exprs__$2,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exprs","exprs",1795829094)], null));
}));
cljs.analyzer.analyze_const = (function cljs$analyzer$analyze_const(env,form){
<<<<<<< HEAD
var map__23624 = cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"quoted?","quoted?",1464649621),true),form);
var map__23624__$1 = (((((!((map__23624 == null))))?(((((map__23624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23624):map__23624);
var tag = cljs.core.get.call(null,map__23624__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"literal?","literal?",352485871),true,new cljs.core.Keyword(null,"val","val",128701612),form,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"form","form",-1624062471),form], null);
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(function (_,env,p__23626,___$1,___$2){
var vec__23627 = p__23626;
var ___$3 = cljs.core.nth.call(null,vec__23627,(0),null);
var x = cljs.core.nth.call(null,vec__23627,(1),null);
var form = vec__23627;
=======
var map__23961 = cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"quoted?","quoted?",1464649621),true),form);
var map__23961__$1 = (((((!((map__23961 == null))))?(((((map__23961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23961):map__23961);
var tag = cljs.core.get.call(null,map__23961__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"literal?","literal?",352485871),true,new cljs.core.Keyword(null,"val","val",128701612),form,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"form","form",-1624062471),form], null);
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(function (_,env,p__23963,___$1,___$2){
var vec__23964 = p__23963;
var ___$3 = cljs.core.nth.call(null,vec__23964,(0),null);
var x = cljs.core.nth.call(null,vec__23964,(1),null);
var form = vec__23964;
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.not_EQ_.call(null,(2),cljs.core.count.call(null,form))){
throw cljs.analyzer.error.call(null,env,"Wrong number of args to quote");
} else {
}

var expr = cljs.analyzer.analyze_const.call(null,env,x);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(expr),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expr","expr",745722291)], null)], null);
}));
<<<<<<< HEAD
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"new","new",-444906321,null),(function (_,env,p__23631,___$1,___$2){
var vec__23632 = p__23631;
var seq__23633 = cljs.core.seq.call(null,vec__23632);
var first__23634 = cljs.core.first.call(null,seq__23633);
var seq__23633__$1 = cljs.core.next.call(null,seq__23633);
var ___$3 = first__23634;
var first__23634__$1 = cljs.core.first.call(null,seq__23633__$1);
var seq__23633__$2 = cljs.core.next.call(null,seq__23633__$1);
var ctor = first__23634__$1;
var args = seq__23633__$2;
var form = vec__23632;
var _STAR_recur_frames_STAR__orig_val__23635 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23636 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23636);
=======
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"new","new",-444906321,null),(function (_,env,p__23968,___$1,___$2){
var vec__23969 = p__23968;
var seq__23970 = cljs.core.seq.call(null,vec__23969);
var first__23971 = cljs.core.first.call(null,seq__23970);
var seq__23970__$1 = cljs.core.next.call(null,seq__23970);
var ___$3 = first__23971;
var first__23971__$1 = cljs.core.first.call(null,seq__23970__$1);
var seq__23970__$2 = cljs.core.next.call(null,seq__23970__$1);
var ctor = first__23971__$1;
var args = seq__23970__$2;
var form = vec__23969;
var _STAR_recur_frames_STAR__orig_val__23972 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23973 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23973);
>>>>>>> 8f3c68a (Initial Commit)

try{var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var ctorexpr = cljs.analyzer.analyze.call(null,enve,ctor);
var ctor_var = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ctorexpr)))?cljs.analyzer.resolve_existing_var.call(null,env,ctor):null);
var record_args = (cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"record","record",-779106859).cljs$core$IFn$_invoke$arity$1(ctor_var);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor)));
} else {
return and__4115__auto__;
}
})())?cljs.core.repeat.call(null,(3),cljs.analyzer.analyze.call(null,enve,null)):null);
<<<<<<< HEAD
var argexprs = cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__23630_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__23630_SHARP_);
=======
var argexprs = cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__23967_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__23967_SHARP_);
>>>>>>> 8f3c68a (Initial Commit)
}),args)),record_args);
var known_num_fields = new cljs.core.Keyword(null,"num-fields","num-fields",1529154024).cljs$core$IFn$_invoke$arity$1(ctor_var);
var argc = cljs.core.count.call(null,args);
if(((cljs.core.not.call(null,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor)))) && ((!((known_num_fields == null)))) && (cljs.core.not_EQ_.call(null,known_num_fields,argc)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"argc","argc",-1452839519),argc,new cljs.core.Keyword(null,"ctor","ctor",1750864802),ctor], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"class","class",-2030961996),ctorexpr,new cljs.core.Keyword(null,"args","args",1315556576),argexprs,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),(function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ctorexpr));
var or__4126__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Object","js/Object",61215323,null),new cljs.core.Symbol(null,"object","object",-1179821820,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),new cljs.core.Symbol(null,"string","string",-349010059,null),new cljs.core.Symbol("js","Array","js/Array",-423508366,null),new cljs.core.Symbol(null,"array","array",-440182315,null),new cljs.core.Symbol("js","Number","js/Number",-508133572,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol("js","Function","js/Function",-749892063,null),new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null).call(null,name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return name;
}
})()], null);
<<<<<<< HEAD
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23635);
}}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"set!","set!",250714521,null),(function (_,env,p__23637,___$1,___$2){
var vec__23638 = p__23637;
var ___$3 = cljs.core.nth.call(null,vec__23638,(0),null);
var target = cljs.core.nth.call(null,vec__23638,(1),null);
var val = cljs.core.nth.call(null,vec__23638,(2),null);
var alt = cljs.core.nth.call(null,vec__23638,(3),null);
var form = vec__23638;
var vec__23641 = (cljs.core.truth_(alt)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,target,null,(1),null)),(new cljs.core.List(null,val,null,(1),null))))),alt], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,val], null));
var target__$1 = cljs.core.nth.call(null,vec__23641,(0),null);
var val__$1 = cljs.core.nth.call(null,vec__23641,(1),null);
var _STAR_recur_frames_STAR__orig_val__23644 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23645 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23645);

try{var _STAR_private_var_access_nowarn_STAR__orig_val__23646 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__23647 = true;
(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__23647);
=======
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23972);
}}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"set!","set!",250714521,null),(function (_,env,p__23974,___$1,___$2){
var vec__23975 = p__23974;
var ___$3 = cljs.core.nth.call(null,vec__23975,(0),null);
var target = cljs.core.nth.call(null,vec__23975,(1),null);
var val = cljs.core.nth.call(null,vec__23975,(2),null);
var alt = cljs.core.nth.call(null,vec__23975,(3),null);
var form = vec__23975;
var vec__23978 = (cljs.core.truth_(alt)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,target,null,(1),null)),(new cljs.core.List(null,val,null,(1),null))))),alt], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,val], null));
var target__$1 = cljs.core.nth.call(null,vec__23978,(0),null);
var val__$1 = cljs.core.nth.call(null,vec__23978,(1),null);
var _STAR_recur_frames_STAR__orig_val__23981 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__23982 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__23982);

try{var _STAR_private_var_access_nowarn_STAR__orig_val__23983 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__23984 = true;
(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__23984);
>>>>>>> 8f3c68a (Initial Commit)

try{var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var texpr = (((target__$1 instanceof cljs.core.Symbol))?(function (){
if(((cljs.core._EQ_.call(null,target__$1,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null))) && (((val__$1 === true) || (val__$1 === false))))){
} else {
if(((cljs.core._EQ_.call(null,target__$1,new cljs.core.Symbol(null,"*unchecked-arrays*","*unchecked-arrays*",-381849911,null))) && (((val__$1 === true) || (val__$1 === false))))){
} else {
if(((cljs.core._EQ_.call(null,target__$1,new cljs.core.Symbol(null,"*warn-on-infer*","*warn-on-infer*",1890277318,null))) && (((val__$1 === true) || (val__$1 === false))))){
(cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.assoc.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),val__$1));
} else {
}
}
}

if((!((new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),target__$1)) == null)))){
throw cljs.analyzer.error.call(null,env,"Can't set! a constant");
} else {
}

<<<<<<< HEAD
var local_23651 = cljs.analyzer.handle_symbol_local.call(null,target__$1,target__$1.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env)));
if(cljs.core.truth_((function (){var or__4126__auto__ = (local_23651 == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(local_23651);
if(cljs.core.truth_(and__4115__auto__)){
var or__4126__auto____$1 = new cljs.core.Keyword(null,"mutable","mutable",875778266).cljs$core$IFn$_invoke$arity$1(local_23651);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950).cljs$core$IFn$_invoke$arity$1(local_23651);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411).cljs$core$IFn$_invoke$arity$1(local_23651);
=======
var local_23988 = cljs.analyzer.handle_symbol_local.call(null,target__$1,target__$1.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env)));
if(cljs.core.truth_((function (){var or__4126__auto__ = (local_23988 == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(local_23988);
if(cljs.core.truth_(and__4115__auto__)){
var or__4126__auto____$1 = new cljs.core.Keyword(null,"mutable","mutable",875778266).cljs$core$IFn$_invoke$arity$1(local_23988);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950).cljs$core$IFn$_invoke$arity$1(local_23988);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411).cljs$core$IFn$_invoke$arity$1(local_23988);
>>>>>>> 8f3c68a (Initial Commit)
}
}
} else {
return and__4115__auto__;
}
}
})())){
} else {
throw cljs.analyzer.error.call(null,env,"Can't set! local var or non-mutable field");
}

return cljs.analyzer.analyze_symbol.call(null,enve,target__$1);
})()
<<<<<<< HEAD
:((cljs.core.seq_QMARK_.call(null,target__$1))?(function (){var texpr = (cljs.core.truth_(new cljs.core.Keyword(null,"extend-type","extend-type",-517175606).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,target__$1)))?(function (){var _STAR_cljs_warnings_STAR__orig_val__23648 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__23649 = cljs.core.assoc.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),false);
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__23649);

try{return cljs.analyzer.analyze_seq.call(null,enve,target__$1,null);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__23648);
=======
:((cljs.core.seq_QMARK_.call(null,target__$1))?(function (){var texpr = (cljs.core.truth_(new cljs.core.Keyword(null,"extend-type","extend-type",-517175606).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,target__$1)))?(function (){var _STAR_cljs_warnings_STAR__orig_val__23985 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__23986 = cljs.core.assoc.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),false);
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__23986);

try{return cljs.analyzer.analyze_seq.call(null,enve,target__$1,null);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__23985);
>>>>>>> 8f3c68a (Initial Commit)
}})():cljs.analyzer.analyze_seq.call(null,enve,target__$1,null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(texpr))){
return texpr;
} else {
return null;
}
})():null)
);
var vexpr = cljs.analyzer.analyze.call(null,enve,val__$1);
if(cljs.core.seq_QMARK_.call(null,target__$1)){
<<<<<<< HEAD
var sym_23652 = (function (){var G__23650 = target__$1;
if((G__23650 == null)){
return null;
} else {
return cljs.core.second.call(null,G__23650);
}
})();
var meta_23653 = cljs.core.meta.call(null,sym_23652);
var temp__5720__auto___23654 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(vexpr)))?new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173).cljs$core$IFn$_invoke$arity$1(meta_23653):false);
if(cljs.core.truth_(temp__5720__auto___23654)){
var info_23655 = temp__5720__auto___23654;
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"defs","defs",1398449717),sym_23652,new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.merge.call(null,cljs.core.select_keys.call(null,info_23655,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"variadic?","variadic?",584179762)], null)),cljs.core.select_keys.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(vexpr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223)], null))));
=======
var sym_23989 = (function (){var G__23987 = target__$1;
if((G__23987 == null)){
return null;
} else {
return cljs.core.second.call(null,G__23987);
}
})();
var meta_23990 = cljs.core.meta.call(null,sym_23989);
var temp__5720__auto___23991 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(vexpr)))?new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173).cljs$core$IFn$_invoke$arity$1(meta_23990):false);
if(cljs.core.truth_(temp__5720__auto___23991)){
var info_23992 = temp__5720__auto___23991;
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"defs","defs",1398449717),sym_23989,new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.merge.call(null,cljs.core.select_keys.call(null,info_23992,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"variadic?","variadic?",584179762)], null)),cljs.core.select_keys.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(vexpr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223)], null))));
>>>>>>> 8f3c68a (Initial Commit)
} else {
}
} else {
}

if(cljs.core.truth_(texpr)){
} else {
throw cljs.analyzer.error.call(null,env,"set! target must be a field or a symbol naming a var");
}

if(((cljs.core.not.call(null,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))) && ((!((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"*warn-on-infer*","*warn-on-infer*",1890277318,null),"null",new cljs.core.Symbol(null,"*unchecked-arrays*","*unchecked-arrays*",-381849911,null),"null",new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),"null"], null), null).call(null,target__$1) == null)))))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"no-op","no-op",-93046065)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"set!","set!",-1389817006),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"target","target",253001721),texpr,new cljs.core.Keyword(null,"val","val",128701612),vexpr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"val","val",128701612)], null)], null);

}
<<<<<<< HEAD
}finally {(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__23646);
}}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23644);
=======
}finally {(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__23983);
}}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__23981);
>>>>>>> 8f3c68a (Initial Commit)
}}));
cljs.analyzer.foreign_dep_QMARK_ = (function cljs$analyzer$foreign_dep_QMARK_(dep){
var js_index = new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
var temp__5722__auto__ = cljs.core.find.call(null,js_index,cljs.core.name.call(null,dep));
if((temp__5722__auto__ == null)){
return false;
} else {
<<<<<<< HEAD
var vec__23656 = temp__5722__auto__;
var _ = cljs.core.nth.call(null,vec__23656,(0),null);
var map__23659 = cljs.core.nth.call(null,vec__23656,(1),null);
var map__23659__$1 = (((((!((map__23659 == null))))?(((((map__23659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23659):map__23659);
var foreign = cljs.core.get.call(null,map__23659__$1,new cljs.core.Keyword(null,"foreign","foreign",990521149));
=======
var vec__23993 = temp__5722__auto__;
var _ = cljs.core.nth.call(null,vec__23993,(0),null);
var map__23996 = cljs.core.nth.call(null,vec__23993,(1),null);
var map__23996__$1 = (((((!((map__23996 == null))))?(((((map__23996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23996):map__23996);
var foreign = cljs.core.get.call(null,map__23996__$1,new cljs.core.Keyword(null,"foreign","foreign",990521149));
>>>>>>> 8f3c68a (Initial Commit)
return foreign;
}
});
/**
 * Given a lib, a namespace, deps, its dependencies, env, an analysis environment
 * and opts, compiler options - analyze all of the dependencies. Required to
 * correctly analyze usage of other namespaces.
 */
cljs.analyzer.analyze_deps = (function cljs$analyzer$analyze_deps(var_args){
<<<<<<< HEAD
var G__23663 = arguments.length;
switch (G__23663) {
=======
var G__24000 = arguments.length;
switch (G__24000) {
>>>>>>> 8f3c68a (Initial Commit)
case 3:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3 = (function (lib,deps,env){
return cljs.analyzer.analyze_deps.call(null,lib,deps,env,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
}));

(cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4 = (function (lib,deps,env,opts){
var compiler = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
<<<<<<< HEAD
var _STAR_cljs_dep_set_STAR__orig_val__23664 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__23665 = cljs.core.vary_meta.call(null,cljs.core.conj.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);
(cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__23665);

try{if(cljs.core.every_QMARK_.call(null,(function (p1__23661_SHARP_){
return (!(cljs.core.contains_QMARK_.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__23661_SHARP_)));
}),deps)){
} else {
throw (new Error(["Assert failed: ",["Circular dependency detected, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," -> ",cljs.core.conj.call(null,new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join(''),"\n","(every? (fn* [p1__23661#] (not (contains? *cljs-dep-set* p1__23661#))) deps)"].join('')));
}

var seq__23666 = cljs.core.seq.call(null,deps);
var chunk__23667 = null;
var count__23668 = (0);
var i__23669 = (0);
while(true){
if((i__23669 < count__23668)){
var dep = cljs.core._nth.call(null,chunk__23667,i__23669);
=======
var _STAR_cljs_dep_set_STAR__orig_val__24001 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__24002 = cljs.core.vary_meta.call(null,cljs.core.conj.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);
(cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__24002);

try{if(cljs.core.every_QMARK_.call(null,(function (p1__23998_SHARP_){
return (!(cljs.core.contains_QMARK_.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__23998_SHARP_)));
}),deps)){
} else {
throw (new Error(["Assert failed: ",["Circular dependency detected, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," -> ",cljs.core.conj.call(null,new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join(''),"\n","(every? (fn* [p1__23998#] (not (contains? *cljs-dep-set* p1__23998#))) deps)"].join('')));
}

var seq__24003 = cljs.core.seq.call(null,deps);
var chunk__24004 = null;
var count__24005 = (0);
var i__24006 = (0);
while(true){
if((i__24006 < count__24005)){
var dep = cljs.core._nth.call(null,chunk__24004,i__24006);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_((function (){var or__4126__auto__ = (!((cljs.core.get_in.call(null,compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),dep,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)) == null)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.analyzer.node_module_dep_QMARK_.call(null,dep);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return cljs.analyzer.js_module_exists_QMARK_.call(null,cljs.core.name.call(null,dep));
}
}
})())){
} else {
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131).cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name.call(null,dep))){
<<<<<<< HEAD
var dep_name_23671 = cljs.core.name.call(null,dep);
if(clojure.string.starts_with_QMARK_.call(null,dep_name_23671,"goog.")){
=======
var dep_name_24008 = cljs.core.name.call(null,dep);
if(clojure.string.starts_with_QMARK_.call(null,dep_name_24008,"goog.")){
>>>>>>> 8f3c68a (Initial Commit)
} else {
}
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name.call(null,dep)], null)));
}
}


<<<<<<< HEAD
var G__23672 = seq__23666;
var G__23673 = chunk__23667;
var G__23674 = count__23668;
var G__23675 = (i__23669 + (1));
seq__23666 = G__23672;
chunk__23667 = G__23673;
count__23668 = G__23674;
i__23669 = G__23675;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23666);
if(temp__5720__auto__){
var seq__23666__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23666__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__23666__$1);
var G__23676 = cljs.core.chunk_rest.call(null,seq__23666__$1);
var G__23677 = c__4556__auto__;
var G__23678 = cljs.core.count.call(null,c__4556__auto__);
var G__23679 = (0);
seq__23666 = G__23676;
chunk__23667 = G__23677;
count__23668 = G__23678;
i__23669 = G__23679;
continue;
} else {
var dep = cljs.core.first.call(null,seq__23666__$1);
=======
var G__24009 = seq__24003;
var G__24010 = chunk__24004;
var G__24011 = count__24005;
var G__24012 = (i__24006 + (1));
seq__24003 = G__24009;
chunk__24004 = G__24010;
count__24005 = G__24011;
i__24006 = G__24012;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__24003);
if(temp__5720__auto__){
var seq__24003__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24003__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__24003__$1);
var G__24013 = cljs.core.chunk_rest.call(null,seq__24003__$1);
var G__24014 = c__4556__auto__;
var G__24015 = cljs.core.count.call(null,c__4556__auto__);
var G__24016 = (0);
seq__24003 = G__24013;
chunk__24004 = G__24014;
count__24005 = G__24015;
i__24006 = G__24016;
continue;
} else {
var dep = cljs.core.first.call(null,seq__24003__$1);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_((function (){var or__4126__auto__ = (!((cljs.core.get_in.call(null,compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),dep,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)) == null)));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.analyzer.node_module_dep_QMARK_.call(null,dep);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return cljs.analyzer.js_module_exists_QMARK_.call(null,cljs.core.name.call(null,dep));
}
}
})())){
} else {
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131).cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name.call(null,dep))){
<<<<<<< HEAD
var dep_name_23680 = cljs.core.name.call(null,dep);
if(clojure.string.starts_with_QMARK_.call(null,dep_name_23680,"goog.")){
=======
var dep_name_24017 = cljs.core.name.call(null,dep);
if(clojure.string.starts_with_QMARK_.call(null,dep_name_24017,"goog.")){
>>>>>>> 8f3c68a (Initial Commit)
} else {
}
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name.call(null,dep)], null)));
}
}


<<<<<<< HEAD
var G__23681 = cljs.core.next.call(null,seq__23666__$1);
var G__23682 = null;
var G__23683 = (0);
var G__23684 = (0);
seq__23666 = G__23681;
chunk__23667 = G__23682;
count__23668 = G__23683;
i__23669 = G__23684;
=======
var G__24018 = cljs.core.next.call(null,seq__24003__$1);
var G__24019 = null;
var G__24020 = (0);
var G__24021 = (0);
seq__24003 = G__24018;
chunk__24004 = G__24019;
count__24005 = G__24020;
i__24006 = G__24021;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
return null;
}
}
break;
}
<<<<<<< HEAD
}finally {(cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__23664);
=======
}finally {(cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__24001);
>>>>>>> 8f3c68a (Initial Commit)
}}));

(cljs.analyzer.analyze_deps.cljs$lang$maxFixedArity = 4);

cljs.analyzer.missing_use_QMARK_ = (function cljs$analyzer$missing_use_QMARK_(lib,sym,cenv){
var js_lib = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131),cljs.core.name.call(null,lib)], null));
return ((cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),lib,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null),new cljs.core.Keyword("cljs.analyzer","not-found","cljs.analyzer/not-found",427220150)),new cljs.core.Keyword("cljs.analyzer","not-found","cljs.analyzer/not-found",427220150))) && ((!(cljs.core._EQ_.call(null,cljs.core.get.call(null,js_lib,new cljs.core.Keyword(null,"group","group",582596132)),new cljs.core.Keyword(null,"goog","goog",-1711135452))))) && (cljs.core.not.call(null,cljs.core.get.call(null,js_lib,new cljs.core.Keyword(null,"closure-lib","closure-lib",2105917916)))) && ((!(cljs.analyzer.node_module_dep_QMARK_.call(null,lib)))) && ((!(cljs.analyzer.dep_has_global_exports_QMARK_.call(null,lib)))));
});
cljs.analyzer.missing_rename_QMARK_ = (function cljs$analyzer$missing_rename_QMARK_(sym,cenv){
var lib = cljs.core.symbol.call(null,cljs.core.namespace.call(null,sym));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,sym));
return cljs.analyzer.missing_use_QMARK_.call(null,lib,sym__$1,cenv);
});
cljs.analyzer.missing_use_macro_QMARK_ = (function cljs$analyzer$missing_use_macro_QMARK_(lib,sym){
if((lib instanceof cljs.core.Symbol)){
var the_ns = cljs.core.find_macros_ns.call(null,lib);
return (((the_ns == null)) || ((the_ns.findInternedVar(sym) == null)));
} else {
return null;
}
});
cljs.analyzer.missing_rename_macro_QMARK_ = (function cljs$analyzer$missing_rename_macro_QMARK_(sym){
var lib = cljs.core.symbol.call(null,cljs.core.namespace.call(null,sym));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,sym));
var the_ns = cljs.core.find_macros_ns.call(null,lib);
return (((the_ns == null)) || ((the_ns.findInternedVar(sym__$1) == null)));
});
cljs.analyzer.missing_uses = (function cljs$analyzer$missing_uses(uses,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
<<<<<<< HEAD
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__23685){
var vec__23686 = p__23685;
var sym = cljs.core.nth.call(null,vec__23686,(0),null);
var lib = cljs.core.nth.call(null,vec__23686,(1),null);
=======
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__24022){
var vec__24023 = p__24022;
var sym = cljs.core.nth.call(null,vec__24023,(0),null);
var lib = cljs.core.nth.call(null,vec__24023,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return cljs.analyzer.missing_use_QMARK_.call(null,lib,sym,cenv);
}),uses));
});
cljs.analyzer.missing_renames = (function cljs$analyzer$missing_renames(renames,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
<<<<<<< HEAD
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__23689){
var vec__23690 = p__23689;
var _ = cljs.core.nth.call(null,vec__23690,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__23690,(1),null);
=======
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__24026){
var vec__24027 = p__24026;
var _ = cljs.core.nth.call(null,vec__24027,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__24027,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return cljs.analyzer.missing_rename_QMARK_.call(null,qualified_sym,cenv);
}),renames));
});
cljs.analyzer.missing_use_macros = (function cljs$analyzer$missing_use_macros(use_macros,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
<<<<<<< HEAD
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__23693){
var vec__23694 = p__23693;
var sym = cljs.core.nth.call(null,vec__23694,(0),null);
var lib = cljs.core.nth.call(null,vec__23694,(1),null);
=======
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__24030){
var vec__24031 = p__24030;
var sym = cljs.core.nth.call(null,vec__24031,(0),null);
var lib = cljs.core.nth.call(null,vec__24031,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return cljs.analyzer.missing_use_macro_QMARK_.call(null,lib,sym);
}),use_macros));
});
cljs.analyzer.inferred_use_macros = (function cljs$analyzer$inferred_use_macros(use_macros,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
<<<<<<< HEAD
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__23697){
var vec__23698 = p__23697;
var sym = cljs.core.nth.call(null,vec__23698,(0),null);
var lib = cljs.core.nth.call(null,vec__23698,(1),null);
=======
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__24034){
var vec__24035 = p__24034;
var sym = cljs.core.nth.call(null,vec__24035,(0),null);
var lib = cljs.core.nth.call(null,vec__24035,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return cljs.core.not.call(null,cljs.analyzer.missing_use_macro_QMARK_.call(null,lib,sym));
}),use_macros));
});
cljs.analyzer.inferred_rename_macros = (function cljs$analyzer$inferred_rename_macros(rename_macros,env){
<<<<<<< HEAD
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__23701){
var vec__23702 = p__23701;
var _ = cljs.core.nth.call(null,vec__23702,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__23702,(1),null);
=======
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__24038){
var vec__24039 = p__24038;
var _ = cljs.core.nth.call(null,vec__24039,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__24039,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return (!(cljs.analyzer.missing_rename_macro_QMARK_.call(null,qualified_sym)));
}),rename_macros));
});
cljs.analyzer.check_uses = (function cljs$analyzer$check_uses(uses,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
<<<<<<< HEAD
var seq__23705 = cljs.core.seq.call(null,uses);
var chunk__23706 = null;
var count__23707 = (0);
var i__23708 = (0);
while(true){
if((i__23708 < count__23707)){
var vec__23715 = cljs.core._nth.call(null,chunk__23706,i__23708);
var sym = cljs.core.nth.call(null,vec__23715,(0),null);
var lib = cljs.core.nth.call(null,vec__23715,(1),null);
=======
var seq__24042 = cljs.core.seq.call(null,uses);
var chunk__24043 = null;
var count__24044 = (0);
var i__24045 = (0);
while(true){
if((i__24045 < count__24044)){
var vec__24052 = cljs.core._nth.call(null,chunk__24043,i__24045);
var sym = cljs.core.nth.call(null,vec__24052,(0),null);
var lib = cljs.core.nth.call(null,vec__24052,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.analyzer.missing_use_QMARK_.call(null,lib,sym,cenv)){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"var",new cljs.core.Keyword(null,"lib","lib",191808726),lib,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null)));
} else {
}


<<<<<<< HEAD
var G__23721 = seq__23705;
var G__23722 = chunk__23706;
var G__23723 = count__23707;
var G__23724 = (i__23708 + (1));
seq__23705 = G__23721;
chunk__23706 = G__23722;
count__23707 = G__23723;
i__23708 = G__23724;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23705);
if(temp__5720__auto__){
var seq__23705__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23705__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__23705__$1);
var G__23725 = cljs.core.chunk_rest.call(null,seq__23705__$1);
var G__23726 = c__4556__auto__;
var G__23727 = cljs.core.count.call(null,c__4556__auto__);
var G__23728 = (0);
seq__23705 = G__23725;
chunk__23706 = G__23726;
count__23707 = G__23727;
i__23708 = G__23728;
continue;
} else {
var vec__23718 = cljs.core.first.call(null,seq__23705__$1);
var sym = cljs.core.nth.call(null,vec__23718,(0),null);
var lib = cljs.core.nth.call(null,vec__23718,(1),null);
=======
var G__24058 = seq__24042;
var G__24059 = chunk__24043;
var G__24060 = count__24044;
var G__24061 = (i__24045 + (1));
seq__24042 = G__24058;
chunk__24043 = G__24059;
count__24044 = G__24060;
i__24045 = G__24061;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__24042);
if(temp__5720__auto__){
var seq__24042__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24042__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__24042__$1);
var G__24062 = cljs.core.chunk_rest.call(null,seq__24042__$1);
var G__24063 = c__4556__auto__;
var G__24064 = cljs.core.count.call(null,c__4556__auto__);
var G__24065 = (0);
seq__24042 = G__24062;
chunk__24043 = G__24063;
count__24044 = G__24064;
i__24045 = G__24065;
continue;
} else {
var vec__24055 = cljs.core.first.call(null,seq__24042__$1);
var sym = cljs.core.nth.call(null,vec__24055,(0),null);
var lib = cljs.core.nth.call(null,vec__24055,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.analyzer.missing_use_QMARK_.call(null,lib,sym,cenv)){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"var",new cljs.core.Keyword(null,"lib","lib",191808726),lib,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null)));
} else {
}


<<<<<<< HEAD
var G__23729 = cljs.core.next.call(null,seq__23705__$1);
var G__23730 = null;
var G__23731 = (0);
var G__23732 = (0);
seq__23705 = G__23729;
chunk__23706 = G__23730;
count__23707 = G__23731;
i__23708 = G__23732;
=======
var G__24066 = cljs.core.next.call(null,seq__24042__$1);
var G__24067 = null;
var G__24068 = (0);
var G__24069 = (0);
seq__24042 = G__24066;
chunk__24043 = G__24067;
count__24044 = G__24068;
i__24045 = G__24069;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.check_use_macros = (function cljs$analyzer$check_use_macros(var_args){
<<<<<<< HEAD
var G__23734 = arguments.length;
switch (G__23734) {
=======
var G__24071 = arguments.length;
switch (G__24071) {
>>>>>>> 8f3c68a (Initial Commit)
case 2:
return cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2 = (function (use_macros,env){
return cljs.analyzer.check_use_macros.call(null,use_macros,null,env);
}));

(cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$3 = (function (use_macros,missing_uses,env){
var cenv = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
<<<<<<< HEAD
var seq__23735_23752 = cljs.core.seq.call(null,use_macros);
var chunk__23736_23753 = null;
var count__23737_23754 = (0);
var i__23738_23755 = (0);
while(true){
if((i__23738_23755 < count__23737_23754)){
var vec__23745_23756 = cljs.core._nth.call(null,chunk__23736_23753,i__23738_23755);
var sym_23757 = cljs.core.nth.call(null,vec__23745_23756,(0),null);
var lib_23758 = cljs.core.nth.call(null,vec__23745_23756,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_.call(null,lib_23758,sym_23757))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"macro",new cljs.core.Keyword(null,"lib","lib",191808726),lib_23758,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym_23757], null)));
=======
var seq__24072_24089 = cljs.core.seq.call(null,use_macros);
var chunk__24073_24090 = null;
var count__24074_24091 = (0);
var i__24075_24092 = (0);
while(true){
if((i__24075_24092 < count__24074_24091)){
var vec__24082_24093 = cljs.core._nth.call(null,chunk__24073_24090,i__24075_24092);
var sym_24094 = cljs.core.nth.call(null,vec__24082_24093,(0),null);
var lib_24095 = cljs.core.nth.call(null,vec__24082_24093,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_.call(null,lib_24095,sym_24094))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"macro",new cljs.core.Keyword(null,"lib","lib",191808726),lib_24095,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym_24094], null)));
>>>>>>> 8f3c68a (Initial Commit)
} else {
}


<<<<<<< HEAD
var G__23759 = seq__23735_23752;
var G__23760 = chunk__23736_23753;
var G__23761 = count__23737_23754;
var G__23762 = (i__23738_23755 + (1));
seq__23735_23752 = G__23759;
chunk__23736_23753 = G__23760;
count__23737_23754 = G__23761;
i__23738_23755 = G__23762;
continue;
} else {
var temp__5720__auto___23763 = cljs.core.seq.call(null,seq__23735_23752);
if(temp__5720__auto___23763){
var seq__23735_23764__$1 = temp__5720__auto___23763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23735_23764__$1)){
var c__4556__auto___23765 = cljs.core.chunk_first.call(null,seq__23735_23764__$1);
var G__23766 = cljs.core.chunk_rest.call(null,seq__23735_23764__$1);
var G__23767 = c__4556__auto___23765;
var G__23768 = cljs.core.count.call(null,c__4556__auto___23765);
var G__23769 = (0);
seq__23735_23752 = G__23766;
chunk__23736_23753 = G__23767;
count__23737_23754 = G__23768;
i__23738_23755 = G__23769;
continue;
} else {
var vec__23748_23770 = cljs.core.first.call(null,seq__23735_23764__$1);
var sym_23771 = cljs.core.nth.call(null,vec__23748_23770,(0),null);
var lib_23772 = cljs.core.nth.call(null,vec__23748_23770,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_.call(null,lib_23772,sym_23771))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"macro",new cljs.core.Keyword(null,"lib","lib",191808726),lib_23772,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym_23771], null)));
=======
var G__24096 = seq__24072_24089;
var G__24097 = chunk__24073_24090;
var G__24098 = count__24074_24091;
var G__24099 = (i__24075_24092 + (1));
seq__24072_24089 = G__24096;
chunk__24073_24090 = G__24097;
count__24074_24091 = G__24098;
i__24075_24092 = G__24099;
continue;
} else {
var temp__5720__auto___24100 = cljs.core.seq.call(null,seq__24072_24089);
if(temp__5720__auto___24100){
var seq__24072_24101__$1 = temp__5720__auto___24100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24072_24101__$1)){
var c__4556__auto___24102 = cljs.core.chunk_first.call(null,seq__24072_24101__$1);
var G__24103 = cljs.core.chunk_rest.call(null,seq__24072_24101__$1);
var G__24104 = c__4556__auto___24102;
var G__24105 = cljs.core.count.call(null,c__4556__auto___24102);
var G__24106 = (0);
seq__24072_24089 = G__24103;
chunk__24073_24090 = G__24104;
count__24074_24091 = G__24105;
i__24075_24092 = G__24106;
continue;
} else {
var vec__24085_24107 = cljs.core.first.call(null,seq__24072_24101__$1);
var sym_24108 = cljs.core.nth.call(null,vec__24085_24107,(0),null);
var lib_24109 = cljs.core.nth.call(null,vec__24085_24107,(1),null);
if(cljs.core.truth_(cljs.analyzer.missing_use_macro_QMARK_.call(null,lib_24109,sym_24108))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"macro",new cljs.core.Keyword(null,"lib","lib",191808726),lib_24109,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym_24108], null)));
>>>>>>> 8f3c68a (Initial Commit)
} else {
}


<<<<<<< HEAD
var G__23773 = cljs.core.next.call(null,seq__23735_23764__$1);
var G__23774 = null;
var G__23775 = (0);
var G__23776 = (0);
seq__23735_23752 = G__23773;
chunk__23736_23753 = G__23774;
count__23737_23754 = G__23775;
i__23738_23755 = G__23776;
=======
var G__24110 = cljs.core.next.call(null,seq__24072_24101__$1);
var G__24111 = null;
var G__24112 = (0);
var G__24113 = (0);
seq__24072_24089 = G__24110;
chunk__24073_24090 = G__24111;
count__24074_24091 = G__24112;
i__24075_24092 = G__24113;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
}
}
break;
}

cljs.analyzer.check_uses.call(null,cljs.analyzer.missing_use_macros.call(null,missing_uses,env),env);

return cljs.analyzer.inferred_use_macros.call(null,missing_uses,env);
}));

(cljs.analyzer.check_use_macros.cljs$lang$maxFixedArity = 3);

<<<<<<< HEAD
cljs.analyzer.check_use_macros_inferring_missing = (function cljs$analyzer$check_use_macros_inferring_missing(p__23780,env){
var map__23781 = p__23780;
var map__23781__$1 = (((((!((map__23781 == null))))?(((((map__23781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23781):map__23781);
var ast = map__23781__$1;
var name = cljs.core.get.call(null,map__23781__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var uses = cljs.core.get.call(null,map__23781__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var use_macros = cljs.core.get.call(null,map__23781__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
=======
cljs.analyzer.check_use_macros_inferring_missing = (function cljs$analyzer$check_use_macros_inferring_missing(p__24117,env){
var map__24118 = p__24117;
var map__24118__$1 = (((((!((map__24118 == null))))?(((((map__24118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24118):map__24118);
var ast = map__24118__$1;
var name = cljs.core.get.call(null,map__24118__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var uses = cljs.core.get.call(null,map__24118__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var use_macros = cljs.core.get.call(null,map__24118__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
>>>>>>> 8f3c68a (Initial Commit)
var missing_uses = (cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_analyze_deps_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.seq.call(null,uses);
} else {
return and__4115__auto__;
}
})())?cljs.analyzer.missing_uses.call(null,uses,env):null);
var maybe_macros = cljs.core.apply.call(null,cljs.core.dissoc,uses,cljs.core.keys.call(null,missing_uses));
<<<<<<< HEAD
var remove_missing_uses = (function (p1__23777_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__23777_SHARP_,cljs.core.keys.call(null,missing_uses));
});
var ast_SINGLEQUOTE_ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null),(function (p1__23778_SHARP_){
return cljs.core.merge.call(null,cljs.core.merge.call(null,p1__23778_SHARP_,cljs.analyzer.check_use_macros.call(null,use_macros,missing_uses,env)),cljs.analyzer.inferred_use_macros.call(null,maybe_macros,env));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692)], null),remove_missing_uses);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,(function (p1__23779_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__23779_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null),cljs.core.merge,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393).cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"uses","uses",232664692)], null),remove_missing_uses);
=======
var remove_missing_uses = (function (p1__24114_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__24114_SHARP_,cljs.core.keys.call(null,missing_uses));
});
var ast_SINGLEQUOTE_ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null),(function (p1__24115_SHARP_){
return cljs.core.merge.call(null,cljs.core.merge.call(null,p1__24115_SHARP_,cljs.analyzer.check_use_macros.call(null,use_macros,missing_uses,env)),cljs.analyzer.inferred_use_macros.call(null,maybe_macros,env));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692)], null),remove_missing_uses);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,(function (p1__24116_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__24116_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null),cljs.core.merge,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393).cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"uses","uses",232664692)], null),remove_missing_uses);
>>>>>>> 8f3c68a (Initial Commit)
}));

return ast_SINGLEQUOTE_;
});
<<<<<<< HEAD
cljs.analyzer.check_rename_macros_inferring_missing = (function cljs$analyzer$check_rename_macros_inferring_missing(p__23786,env){
var map__23787 = p__23786;
var map__23787__$1 = (((((!((map__23787 == null))))?(((((map__23787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23787):map__23787);
var ast = map__23787__$1;
var name = cljs.core.get.call(null,map__23787__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var renames = cljs.core.get.call(null,map__23787__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
=======
cljs.analyzer.check_rename_macros_inferring_missing = (function cljs$analyzer$check_rename_macros_inferring_missing(p__24123,env){
var map__24124 = p__24123;
var map__24124__$1 = (((((!((map__24124 == null))))?(((((map__24124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24124):map__24124);
var ast = map__24124__$1;
var name = cljs.core.get.call(null,map__24124__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var renames = cljs.core.get.call(null,map__24124__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
>>>>>>> 8f3c68a (Initial Commit)
var missing_renames = (cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_analyze_deps_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.seq.call(null,renames);
} else {
return and__4115__auto__;
}
})())?cljs.analyzer.missing_renames.call(null,renames,env):null);
var maybe_macros = cljs.core.apply.call(null,cljs.core.dissoc,renames,cljs.core.keys.call(null,missing_renames));
var missing_rename_macros = cljs.analyzer.inferred_rename_macros.call(null,missing_renames,env);
<<<<<<< HEAD
var remove_missing_renames = (function (p1__23783_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__23783_SHARP_,cljs.core.keys.call(null,missing_renames));
});
var ast_SINGLEQUOTE_ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null),(function (p1__23784_SHARP_){
return cljs.core.merge.call(null,cljs.core.merge.call(null,p1__23784_SHARP_,missing_rename_macros),cljs.analyzer.inferred_rename_macros.call(null,maybe_macros,env));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renames","renames",343278368)], null),remove_missing_renames);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,(function (p1__23785_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__23785_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null),cljs.core.merge,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512).cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"renames","renames",343278368)], null),remove_missing_renames);
=======
var remove_missing_renames = (function (p1__24120_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__24120_SHARP_,cljs.core.keys.call(null,missing_renames));
});
var ast_SINGLEQUOTE_ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null),(function (p1__24121_SHARP_){
return cljs.core.merge.call(null,cljs.core.merge.call(null,p1__24121_SHARP_,missing_rename_macros),cljs.analyzer.inferred_rename_macros.call(null,maybe_macros,env));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renames","renames",343278368)], null),remove_missing_renames);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,(function (p1__24122_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,p1__24122_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null),cljs.core.merge,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512).cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"renames","renames",343278368)], null),remove_missing_renames);
>>>>>>> 8f3c68a (Initial Commit)
}));

return ast_SINGLEQUOTE_;
});
cljs.analyzer.parse_ns_error_msg = (function cljs$analyzer$parse_ns_error_msg(spec,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"; offending spec: ",cljs.core.pr_str.call(null,spec)].join('');
});
cljs.analyzer.basic_validate_ns_spec = (function cljs$analyzer$basic_validate_ns_spec(env,macros_QMARK_,spec){
if((((spec instanceof cljs.core.Symbol)) || (typeof spec === 'string') || (cljs.core.sequential_QMARK_.call(null,spec)))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only [lib.ns & options] and lib.ns specs supported in :require / :require-macros"));
}

if(cljs.core.sequential_QMARK_.call(null,spec)){
if((((cljs.core.first.call(null,spec) instanceof cljs.core.Symbol)) || (typeof cljs.core.first.call(null,spec) === 'string'))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Library name must be specified as a symbol in :require / :require-macros"));
}

if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,spec))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only :as alias, :refer (names) and :rename {from to} options supported in :require"));
}

if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"rename","rename",1508157613),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null),cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),cljs.core.next.call(null,spec))))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only :as, :refer and :rename options supported in :require / :require-macros"));
}

if((function (){var fs = cljs.core.frequencies.call(null,cljs.core.next.call(null,spec));
return (((fs.call(null,new cljs.core.Keyword(null,"as","as",1148689641),(0)) <= (1))) && ((fs.call(null,new cljs.core.Keyword(null,"refer","refer",-964295553),(0)) <= (1))));
})()){
return null;
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Each of :as and :refer options may only be specified once in :require / :require-macros"));
}
} else {
return null;
}
});
cljs.analyzer.parse_ns_excludes = (function cljs$analyzer$parse_ns_excludes(env,args){
<<<<<<< HEAD
return cljs.core.reduce.call(null,(function (s,p__23790){
var vec__23791 = p__23790;
var seq__23792 = cljs.core.seq.call(null,vec__23791);
var first__23793 = cljs.core.first.call(null,seq__23792);
var seq__23792__$1 = cljs.core.next.call(null,seq__23792);
var k = first__23793;
var filters = seq__23792__$1;
=======
return cljs.core.reduce.call(null,(function (s,p__24127){
var vec__24128 = p__24127;
var seq__24129 = cljs.core.seq.call(null,vec__24128);
var first__24130 = cljs.core.first.call(null,seq__24129);
var seq__24129__$1 = cljs.core.next.call(null,seq__24129);
var k = first__24130;
var filters = seq__24129__$1;
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440))){
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"excludes","excludes",-1791725945).cljs$core$IFn$_invoke$arity$1(s))){
throw cljs.analyzer.error.call(null,env,"Only one :refer-clojure form is allowed per namespace definition");
} else {
}

var valid_kws = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exclude","exclude",-1230250334),null,new cljs.core.Keyword(null,"rename","rename",1508157613),null], null), null);
var xs = (function (){var fs = cljs.core.seq.call(null,filters);
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"renames","renames",343278368),cljs.core.PersistentArrayMap.EMPTY], null);
var err = (!(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,filters))));
while(true){
if(err === true){
throw cljs.analyzer.error.call(null,env,"Only [:refer-clojure :exclude (names)] and optionally `:rename {from to}` specs supported");
} else {
if((!((fs == null)))){
var kw = cljs.core.first.call(null,fs);
if(cljs.core.truth_(valid_kws.call(null,kw))){
var refs = cljs.core.second.call(null,fs);
<<<<<<< HEAD
if((!(((((cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"exclude","exclude",-1230250334))) && (cljs.core.sequential_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,refs)))) || (((cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))) && (cljs.core.map_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,((function (fs,ret,err,refs,kw,valid_kws,vec__23791,seq__23792,first__23793,seq__23792__$1,k,filters){
return (function (p1__23789_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,p1__23789_SHARP_);
});})(fs,ret,err,refs,kw,valid_kws,vec__23791,seq__23792,first__23793,seq__23792__$1,k,filters))
,refs)))))))){
var G__23794 = fs;
var G__23795 = ret;
var G__23796 = true;
fs = G__23794;
ret = G__23795;
err = G__23796;
continue;
} else {
if(cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"exclude","exclude",-1230250334))){
var G__23797 = cljs.core.nnext.call(null,fs);
var G__23798 = cljs.core.update_in.call(null,ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),cljs.core.into,refs);
var G__23799 = false;
fs = G__23797;
ret = G__23798;
err = G__23799;
continue;
} else {
if(cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))){
var G__23800 = cljs.core.nnext.call(null,fs);
var G__23801 = cljs.core.update_in.call(null,ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renames","renames",343278368)], null),cljs.core.merge,refs);
var G__23802 = false;
fs = G__23800;
ret = G__23801;
err = G__23802;
=======
if((!(((((cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"exclude","exclude",-1230250334))) && (cljs.core.sequential_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,refs)))) || (((cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))) && (cljs.core.map_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,((function (fs,ret,err,refs,kw,valid_kws,vec__24128,seq__24129,first__24130,seq__24129__$1,k,filters){
return (function (p1__24126_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,p1__24126_SHARP_);
});})(fs,ret,err,refs,kw,valid_kws,vec__24128,seq__24129,first__24130,seq__24129__$1,k,filters))
,refs)))))))){
var G__24131 = fs;
var G__24132 = ret;
var G__24133 = true;
fs = G__24131;
ret = G__24132;
err = G__24133;
continue;
} else {
if(cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"exclude","exclude",-1230250334))){
var G__24134 = cljs.core.nnext.call(null,fs);
var G__24135 = cljs.core.update_in.call(null,ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),cljs.core.into,refs);
var G__24136 = false;
fs = G__24134;
ret = G__24135;
err = G__24136;
continue;
} else {
if(cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))){
var G__24137 = cljs.core.nnext.call(null,fs);
var G__24138 = cljs.core.update_in.call(null,ret,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renames","renames",343278368)], null),cljs.core.merge,refs);
var G__24139 = false;
fs = G__24137;
ret = G__24138;
err = G__24139;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
return null;
}
}
}
} else {
<<<<<<< HEAD
var G__23803 = fs;
var G__23804 = ret;
var G__23805 = true;
fs = G__23803;
ret = G__23804;
err = G__23805;
=======
var G__24140 = fs;
var G__24141 = ret;
var G__24142 = true;
fs = G__24140;
ret = G__24141;
err = G__24142;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
return ret;

}
}
break;
}
})();
return cljs.core.merge_with.call(null,cljs.core.into,s,xs);
} else {
return s;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"renames","renames",343278368),cljs.core.PersistentArrayMap.EMPTY], null),args);
});
<<<<<<< HEAD
cljs.analyzer.use__GT_require = (function cljs$analyzer$use__GT_require(env,p__23807){
var vec__23808 = p__23807;
var seq__23809 = cljs.core.seq.call(null,vec__23808);
var first__23810 = cljs.core.first.call(null,seq__23809);
var seq__23809__$1 = cljs.core.next.call(null,seq__23809);
var lib = first__23810;
var filters = seq__23809__$1;
var spec = vec__23808;
=======
cljs.analyzer.use__GT_require = (function cljs$analyzer$use__GT_require(env,p__24144){
var vec__24145 = p__24144;
var seq__24146 = cljs.core.seq.call(null,vec__24145);
var first__24147 = cljs.core.first.call(null,seq__24146);
var seq__24146__$1 = cljs.core.next.call(null,seq__24146);
var lib = first__24147;
var filters = seq__24146__$1;
var spec = vec__24145;
>>>>>>> 8f3c68a (Initial Commit)
if((((lib instanceof cljs.core.Symbol)) && (cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,spec))))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only [lib.ns :only (names)] and optionally `:rename {from to}` specs supported in :use / :use-macros"));
}

var fs = cljs.core.seq.call(null,filters);
var ret = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null);
var err = false;
while(true){
if(err === true){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only [lib.ns :only (names)] and optionally `:rename {from to}` specs supported in :use / :use-macros"));
} else {
if((!((fs == null)))){
var kw = cljs.core.first.call(null,fs);
var only_QMARK_ = cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"only","only",1907811652));
if(((only_QMARK_) || (cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))))){
if((!((cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([((only_QMARK_)?new cljs.core.Keyword(null,"refer","refer",-964295553):kw)]),ret) == null)))){
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Each of :only and :rename options may only be specified once in :use / :use-macros"));
} else {
var refs = cljs.core.second.call(null,fs);
<<<<<<< HEAD
if((!(((((only_QMARK_) && (cljs.core.sequential_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,refs)))) || (((cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))) && (cljs.core.map_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,((function (fs,ret,err,refs,kw,only_QMARK_,vec__23808,seq__23809,first__23810,seq__23809__$1,lib,filters,spec){
return (function (p1__23806_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,p1__23806_SHARP_);
});})(fs,ret,err,refs,kw,only_QMARK_,vec__23808,seq__23809,first__23810,seq__23809__$1,lib,filters,spec))
,refs)))))))){
var G__23811 = fs;
var G__23812 = ret;
var G__23813 = true;
fs = G__23811;
ret = G__23812;
err = G__23813;
continue;
} else {
var G__23814 = cljs.core.nnext.call(null,fs);
var G__23815 = cljs.core.into.call(null,ret,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((only_QMARK_)?new cljs.core.Keyword(null,"refer","refer",-964295553):kw),refs], null));
var G__23816 = false;
fs = G__23814;
ret = G__23815;
err = G__23816;
=======
if((!(((((only_QMARK_) && (cljs.core.sequential_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,refs)))) || (((cljs.core._EQ_.call(null,kw,new cljs.core.Keyword(null,"rename","rename",1508157613))) && (cljs.core.map_QMARK_.call(null,refs)) && (cljs.core.every_QMARK_.call(null,((function (fs,ret,err,refs,kw,only_QMARK_,vec__24145,seq__24146,first__24147,seq__24146__$1,lib,filters,spec){
return (function (p1__24143_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,p1__24143_SHARP_);
});})(fs,ret,err,refs,kw,only_QMARK_,vec__24145,seq__24146,first__24147,seq__24146__$1,lib,filters,spec))
,refs)))))))){
var G__24148 = fs;
var G__24149 = ret;
var G__24150 = true;
fs = G__24148;
ret = G__24149;
err = G__24150;
continue;
} else {
var G__24151 = cljs.core.nnext.call(null,fs);
var G__24152 = cljs.core.into.call(null,ret,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((only_QMARK_)?new cljs.core.Keyword(null,"refer","refer",-964295553):kw),refs], null));
var G__24153 = false;
fs = G__24151;
ret = G__24152;
err = G__24153;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
}
} else {
<<<<<<< HEAD
var G__23817 = fs;
var G__23818 = ret;
var G__23819 = true;
fs = G__23817;
ret = G__23818;
err = G__23819;
=======
var G__24154 = fs;
var G__24155 = ret;
var G__24156 = true;
fs = G__24154;
ret = G__24155;
err = G__24156;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
if((!((cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null),ret) == null)))){
return ret;
} else {
<<<<<<< HEAD
var G__23820 = fs;
var G__23821 = ret;
var G__23822 = true;
fs = G__23820;
ret = G__23821;
err = G__23822;
=======
var G__24157 = fs;
var G__24158 = ret;
var G__24159 = true;
fs = G__24157;
ret = G__24158;
err = G__24159;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}

}
}
break;
}
});
cljs.analyzer.parse_require_spec = (function cljs$analyzer$parse_require_spec(env,macros_QMARK_,deps,aliases,spec){
while(true){
if((((spec instanceof cljs.core.Symbol)) || (typeof spec === 'string'))){
<<<<<<< HEAD
var G__23838 = env;
var G__23839 = macros_QMARK_;
var G__23840 = deps;
var G__23841 = aliases;
var G__23842 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
env = G__23838;
macros_QMARK_ = G__23839;
deps = G__23840;
aliases = G__23841;
spec = G__23842;
=======
var G__24175 = env;
var G__24176 = macros_QMARK_;
var G__24177 = deps;
var G__24178 = aliases;
var G__24179 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
env = G__24175;
macros_QMARK_ = G__24176;
deps = G__24177;
aliases = G__24178;
spec = G__24179;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
cljs.analyzer.basic_validate_ns_spec.call(null,env,macros_QMARK_,spec);

<<<<<<< HEAD
var vec__23823 = spec;
var seq__23824 = cljs.core.seq.call(null,vec__23823);
var first__23825 = cljs.core.first.call(null,seq__23824);
var seq__23824__$1 = cljs.core.next.call(null,seq__23824);
var lib = first__23825;
var opts = seq__23824__$1;
var vec__23826 = (function (){var temp__5722__auto__ = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),new cljs.core.Keyword(null,"name","name",1843675177));
=======
var vec__24160 = spec;
var seq__24161 = cljs.core.seq.call(null,vec__24160);
var first__24162 = cljs.core.first.call(null,seq__24161);
var seq__24161__$1 = cljs.core.next.call(null,seq__24161);
var lib = first__24162;
var opts = seq__24161__$1;
var vec__24163 = (function (){var temp__5722__auto__ = cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),new cljs.core.Keyword(null,"name","name",1843675177));
>>>>>>> 8f3c68a (Initial Commit)
if((temp__5722__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib,null], null);
} else {
var js_module_name = temp__5722__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,js_module_name),lib], null);
}
})();
<<<<<<< HEAD
var lib__$1 = cljs.core.nth.call(null,vec__23826,(0),null);
var js_module_provides = cljs.core.nth.call(null,vec__23826,(1),null);
var map__23829 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var map__23829__$1 = (((((!((map__23829 == null))))?(((((map__23829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23829):map__23829);
var alias = cljs.core.get.call(null,map__23829__$1,new cljs.core.Keyword(null,"as","as",1148689641),((typeof lib__$1 === 'string')?cljs.core.symbol.call(null,cljs.core.munge.call(null,lib__$1)):lib__$1));
var referred = cljs.core.get.call(null,map__23829__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var renamed = cljs.core.get.call(null,map__23829__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var referred_without_renamed = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,renamed)),referred));
var vec__23830 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require","require",-468001333),new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.Keyword(null,"rename","rename",1508157613)], null));
var rk = cljs.core.nth.call(null,vec__23830,(0),null);
var uk = cljs.core.nth.call(null,vec__23830,(1),null);
var renk = cljs.core.nth.call(null,vec__23830,(2),null);
=======
var lib__$1 = cljs.core.nth.call(null,vec__24163,(0),null);
var js_module_provides = cljs.core.nth.call(null,vec__24163,(1),null);
var map__24166 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var map__24166__$1 = (((((!((map__24166 == null))))?(((((map__24166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24166):map__24166);
var alias = cljs.core.get.call(null,map__24166__$1,new cljs.core.Keyword(null,"as","as",1148689641),((typeof lib__$1 === 'string')?cljs.core.symbol.call(null,cljs.core.munge.call(null,lib__$1)):lib__$1));
var referred = cljs.core.get.call(null,map__24166__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var renamed = cljs.core.get.call(null,map__24166__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var referred_without_renamed = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,renamed)),referred));
var vec__24167 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require","require",-468001333),new cljs.core.Keyword(null,"use","use",-1846382424),new cljs.core.Keyword(null,"rename","rename",1508157613)], null));
var rk = cljs.core.nth.call(null,vec__24167,(0),null);
var uk = cljs.core.nth.call(null,vec__24167,(1),null);
var renk = cljs.core.nth.call(null,vec__24167,(2),null);
>>>>>>> 8f3c68a (Initial Commit)
if((((alias instanceof cljs.core.Symbol)) || ((alias == null)))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,":as must be followed by a symbol in :require / :require-macros"));
}

if((!((alias == null)))){
<<<<<<< HEAD
var alias_type_23843 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.Keyword(null,"macros","macros",811339431):new cljs.core.Keyword(null,"fns","fns",1185138786));
var lib_SINGLEQUOTE__23844 = alias_type_23843.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aliases)).call(null,alias);
if((((!((lib_SINGLEQUOTE__23844 == null)))) && (cljs.core.not_EQ_.call(null,lib__$1,lib_SINGLEQUOTE__23844)))){
=======
var alias_type_24180 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.Keyword(null,"macros","macros",811339431):new cljs.core.Keyword(null,"fns","fns",1185138786));
var lib_SINGLEQUOTE__24181 = alias_type_24180.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aliases)).call(null,alias);
if((((!((lib_SINGLEQUOTE__24181 == null)))) && (cljs.core.not_EQ_.call(null,lib__$1,lib_SINGLEQUOTE__24181)))){
>>>>>>> 8f3c68a (Initial Commit)
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,":as alias must be unique"));
} else {
}

<<<<<<< HEAD
cljs.core.swap_BANG_.call(null,aliases,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias_type_23843], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,lib__$1], null),(cljs.core.truth_(js_module_provides)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_module_provides,lib__$1], null):null));
=======
cljs.core.swap_BANG_.call(null,aliases,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias_type_24180], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,lib__$1], null),(cljs.core.truth_(js_module_provides)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_module_provides,lib__$1], null):null));
>>>>>>> 8f3c68a (Initial Commit)
} else {
}

if(((((cljs.core.sequential_QMARK_.call(null,referred)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,referred)))) || ((referred == null)))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,":refer must be followed by a sequence of symbols in :require / :require-macros"));
}

if(cljs.core.truth_(macros_QMARK_)){
} else {
cljs.core.swap_BANG_.call(null,deps,cljs.core.conj,lib__$1);
}

<<<<<<< HEAD
return cljs.core.merge.call(null,(((!((alias == null))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([rk,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib__$1]),cljs.core.PersistentArrayMap.createAsIfByAssoc([lib__$1,lib__$1]),(cljs.core.truth_(js_module_provides)?cljs.core.PersistentArrayMap.createAsIfByAssoc([js_module_provides,lib__$1]):null))]):null),(((!((referred_without_renamed == null))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([uk,cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.interleave.call(null,referred_without_renamed,cljs.core.repeat.call(null,lib__$1)))]):null),(((!((renamed == null))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([renk,cljs.core.reduce.call(null,((function (env,macros_QMARK_,deps,aliases,spec,vec__23823,seq__23824,first__23825,seq__23824__$1,lib,opts,vec__23826,lib__$1,js_module_provides,map__23829,map__23829__$1,alias,referred,renamed,referred_without_renamed,vec__23830,rk,uk,renk){
return (function (m,p__23834){
var vec__23835 = p__23834;
var original = cljs.core.nth.call(null,vec__23835,(0),null);
var renamed__$1 = cljs.core.nth.call(null,vec__23835,(1),null);
=======
return cljs.core.merge.call(null,(((!((alias == null))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([rk,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib__$1]),cljs.core.PersistentArrayMap.createAsIfByAssoc([lib__$1,lib__$1]),(cljs.core.truth_(js_module_provides)?cljs.core.PersistentArrayMap.createAsIfByAssoc([js_module_provides,lib__$1]):null))]):null),(((!((referred_without_renamed == null))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([uk,cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.interleave.call(null,referred_without_renamed,cljs.core.repeat.call(null,lib__$1)))]):null),(((!((renamed == null))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([renk,cljs.core.reduce.call(null,((function (env,macros_QMARK_,deps,aliases,spec,vec__24160,seq__24161,first__24162,seq__24161__$1,lib,opts,vec__24163,lib__$1,js_module_provides,map__24166,map__24166__$1,alias,referred,renamed,referred_without_renamed,vec__24167,rk,uk,renk){
return (function (m,p__24171){
var vec__24172 = p__24171;
var original = cljs.core.nth.call(null,vec__24172,(0),null);
var renamed__$1 = cljs.core.nth.call(null,vec__24172,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([original]),referred))){
} else {
throw cljs.analyzer.error.call(null,env,["Renamed symbol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)," not referred"].join(''));
}

return cljs.core.assoc.call(null,m,renamed__$1,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)));
<<<<<<< HEAD
});})(env,macros_QMARK_,deps,aliases,spec,vec__23823,seq__23824,first__23825,seq__23824__$1,lib,opts,vec__23826,lib__$1,js_module_provides,map__23829,map__23829__$1,alias,referred,renamed,referred_without_renamed,vec__23830,rk,uk,renk))
=======
});})(env,macros_QMARK_,deps,aliases,spec,vec__24160,seq__24161,first__24162,seq__24161__$1,lib,opts,vec__24163,lib__$1,js_module_provides,map__24166,map__24166__$1,alias,referred,renamed,referred_without_renamed,vec__24167,rk,uk,renk))
>>>>>>> 8f3c68a (Initial Commit)
,cljs.core.PersistentArrayMap.EMPTY,renamed)]):null));
}
break;
}
});
cljs.analyzer.parse_import_spec = (function cljs$analyzer$parse_import_spec(env,deps,spec){
if(((((cljs.core.sequential_QMARK_.call(null,spec)) && (cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,spec)))) || ((((spec instanceof cljs.core.Symbol)) && ((cljs.core.namespace.call(null,spec) == null)))))){
} else {
throw cljs.analyzer.error.call(null,env,cljs.analyzer.parse_ns_error_msg.call(null,spec,"Only lib.ns.Ctor or [lib.ns Ctor*] spec supported in :import"));
}

<<<<<<< HEAD
var import_map = ((cljs.core.sequential_QMARK_.call(null,spec))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__23845_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__23845_SHARP_,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,spec)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23845_SHARP_)].join(''))],null));
}),cljs.core.rest.call(null,spec))):(((!(((-1) === cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec).indexOf(".")))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.symbol.call(null,cljs.core.last.call(null,clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec),/\./))),spec]):cljs.core.PersistentArrayMap.EMPTY
));
var seq__23846_23862 = cljs.core.seq.call(null,import_map);
var chunk__23847_23863 = null;
var count__23848_23864 = (0);
var i__23849_23865 = (0);
while(true){
if((i__23849_23865 < count__23848_23864)){
var vec__23856_23866 = cljs.core._nth.call(null,chunk__23847_23863,i__23849_23865);
var __23867 = cljs.core.nth.call(null,vec__23856_23866,(0),null);
var spec_23868__$1 = cljs.core.nth.call(null,vec__23856_23866,(1),null);
cljs.core.swap_BANG_.call(null,deps,cljs.core.conj,spec_23868__$1);


var G__23869 = seq__23846_23862;
var G__23870 = chunk__23847_23863;
var G__23871 = count__23848_23864;
var G__23872 = (i__23849_23865 + (1));
seq__23846_23862 = G__23869;
chunk__23847_23863 = G__23870;
count__23848_23864 = G__23871;
i__23849_23865 = G__23872;
continue;
} else {
var temp__5720__auto___23873 = cljs.core.seq.call(null,seq__23846_23862);
if(temp__5720__auto___23873){
var seq__23846_23874__$1 = temp__5720__auto___23873;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23846_23874__$1)){
var c__4556__auto___23875 = cljs.core.chunk_first.call(null,seq__23846_23874__$1);
var G__23876 = cljs.core.chunk_rest.call(null,seq__23846_23874__$1);
var G__23877 = c__4556__auto___23875;
var G__23878 = cljs.core.count.call(null,c__4556__auto___23875);
var G__23879 = (0);
seq__23846_23862 = G__23876;
chunk__23847_23863 = G__23877;
count__23848_23864 = G__23878;
i__23849_23865 = G__23879;
continue;
} else {
var vec__23859_23880 = cljs.core.first.call(null,seq__23846_23874__$1);
var __23881 = cljs.core.nth.call(null,vec__23859_23880,(0),null);
var spec_23882__$1 = cljs.core.nth.call(null,vec__23859_23880,(1),null);
cljs.core.swap_BANG_.call(null,deps,cljs.core.conj,spec_23882__$1);


var G__23883 = cljs.core.next.call(null,seq__23846_23874__$1);
var G__23884 = null;
var G__23885 = (0);
var G__23886 = (0);
seq__23846_23862 = G__23883;
chunk__23847_23863 = G__23884;
count__23848_23864 = G__23885;
i__23849_23865 = G__23886;
=======
var import_map = ((cljs.core.sequential_QMARK_.call(null,spec))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__24182_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__24182_SHARP_,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,spec)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24182_SHARP_)].join(''))],null));
}),cljs.core.rest.call(null,spec))):(((!(((-1) === cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec).indexOf(".")))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.symbol.call(null,cljs.core.last.call(null,clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec),/\./))),spec]):cljs.core.PersistentArrayMap.EMPTY
));
var seq__24183_24199 = cljs.core.seq.call(null,import_map);
var chunk__24184_24200 = null;
var count__24185_24201 = (0);
var i__24186_24202 = (0);
while(true){
if((i__24186_24202 < count__24185_24201)){
var vec__24193_24203 = cljs.core._nth.call(null,chunk__24184_24200,i__24186_24202);
var __24204 = cljs.core.nth.call(null,vec__24193_24203,(0),null);
var spec_24205__$1 = cljs.core.nth.call(null,vec__24193_24203,(1),null);
cljs.core.swap_BANG_.call(null,deps,cljs.core.conj,spec_24205__$1);


var G__24206 = seq__24183_24199;
var G__24207 = chunk__24184_24200;
var G__24208 = count__24185_24201;
var G__24209 = (i__24186_24202 + (1));
seq__24183_24199 = G__24206;
chunk__24184_24200 = G__24207;
count__24185_24201 = G__24208;
i__24186_24202 = G__24209;
continue;
} else {
var temp__5720__auto___24210 = cljs.core.seq.call(null,seq__24183_24199);
if(temp__5720__auto___24210){
var seq__24183_24211__$1 = temp__5720__auto___24210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24183_24211__$1)){
var c__4556__auto___24212 = cljs.core.chunk_first.call(null,seq__24183_24211__$1);
var G__24213 = cljs.core.chunk_rest.call(null,seq__24183_24211__$1);
var G__24214 = c__4556__auto___24212;
var G__24215 = cljs.core.count.call(null,c__4556__auto___24212);
var G__24216 = (0);
seq__24183_24199 = G__24213;
chunk__24184_24200 = G__24214;
count__24185_24201 = G__24215;
i__24186_24202 = G__24216;
continue;
} else {
var vec__24196_24217 = cljs.core.first.call(null,seq__24183_24211__$1);
var __24218 = cljs.core.nth.call(null,vec__24196_24217,(0),null);
var spec_24219__$1 = cljs.core.nth.call(null,vec__24196_24217,(1),null);
cljs.core.swap_BANG_.call(null,deps,cljs.core.conj,spec_24219__$1);


var G__24220 = cljs.core.next.call(null,seq__24183_24211__$1);
var G__24221 = null;
var G__24222 = (0);
var G__24223 = (0);
seq__24183_24199 = G__24220;
chunk__24184_24200 = G__24221;
count__24185_24201 = G__24222;
i__24186_24202 = G__24223;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"import","import",-1399500709),import_map,new cljs.core.Keyword(null,"require","require",-468001333),import_map], null);
});
/**
 * Given a spec form check whether the spec namespace requires a macro file
 * of the same name. If so return true.
 */
cljs.analyzer.macro_autoload_ns_QMARK_ = (function cljs$analyzer$macro_autoload_ns_QMARK_(form){
if(cljs.core.truth_(cljs.analyzer._STAR_macro_infer_STAR_)){
var ns = ((cljs.core.sequential_QMARK_.call(null,form))?cljs.core.first.call(null,form):form);
<<<<<<< HEAD
var map__23887 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null));
var map__23887__$1 = (((((!((map__23887 == null))))?(((((map__23887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23887):map__23887);
var use_macros = cljs.core.get.call(null,map__23887__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__23887__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
=======
var map__24224 = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null));
var map__24224__$1 = (((((!((map__24224 == null))))?(((((map__24224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24224):map__24224);
var use_macros = cljs.core.get.call(null,map__24224__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__24224__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
>>>>>>> 8f3c68a (Initial Commit)
var or__4126__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([ns]),cljs.core.vals.call(null,use_macros));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([ns]),cljs.core.vals.call(null,require_macros));
}
} else {
return null;
}
});
/**
 * Given a symbol that starts with clojure as the first segment return the
 * same symbol with the first segment replaced with cljs
 */
cljs.analyzer.clj_ns__GT_cljs_ns = (function cljs$analyzer$clj_ns__GT_cljs_ns(sym){
var segs = clojure.string.split.call(null,cljs.core.name.call(null,sym),/\./);
if(cljs.core._EQ_.call(null,"clojure",cljs.core.first.call(null,segs))){
return cljs.core.symbol.call(null,clojure.string.join.call(null,".",cljs.core.cons.call(null,"cljs",cljs.core.next.call(null,segs))));
} else {
return sym;
}
});
cljs.analyzer.canonicalize_specs = (function cljs$analyzer$canonicalize_specs(specs){
var canonicalize = (function cljs$analyzer$canonicalize_specs_$_canonicalize(quoted_spec_or_kw){
if((quoted_spec_or_kw instanceof cljs.core.Keyword)){
return quoted_spec_or_kw;
} else {
var spec = cljs.core.second.call(null,quoted_spec_or_kw);
if(((cljs.core.vector_QMARK_.call(null,spec)) || (cljs.core.map_QMARK_.call(null,spec)))){
return spec;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
}
}
});
return cljs.core.map.call(null,canonicalize,specs);
});
cljs.analyzer.canonicalize_import_specs = (function cljs$analyzer$canonicalize_import_specs(specs){
var canonicalize = (function cljs$analyzer$canonicalize_import_specs_$_canonicalize(quoted_spec_or_kw){
if((quoted_spec_or_kw instanceof cljs.core.Keyword)){
return quoted_spec_or_kw;
} else {
return cljs.core.second.call(null,quoted_spec_or_kw);
}
});
return cljs.core.map.call(null,canonicalize,specs);
});
/**
 * Given an original set of ns specs desugar :include-macros and :refer-macros
 * usage into only primitive spec forms - :use, :require, :use-macros,
 * :require-macros. If a library includes a macro file of with the same name
 * as the namespace will also be desugared.
 */
cljs.analyzer.desugar_ns_specs = (function cljs$analyzer$desugar_ns_specs(args){
<<<<<<< HEAD
var map__23890 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__23891){
var vec__23892 = p__23891;
var seq__23893 = cljs.core.seq.call(null,vec__23892);
var first__23894 = cljs.core.first.call(null,seq__23893);
var seq__23893__$1 = cljs.core.next.call(null,seq__23893);
var k = first__23894;
var specs = seq__23893__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,specs)], null);
}),args));
var map__23890__$1 = (((((!((map__23890 == null))))?(((((map__23890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23890):map__23890);
var indexed = map__23890__$1;
var require = cljs.core.get.call(null,map__23890__$1,new cljs.core.Keyword(null,"require","require",-468001333));
=======
var map__24227 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__24228){
var vec__24229 = p__24228;
var seq__24230 = cljs.core.seq.call(null,vec__24229);
var first__24231 = cljs.core.first.call(null,seq__24230);
var seq__24230__$1 = cljs.core.next.call(null,seq__24230);
var k = first__24231;
var specs = seq__24230__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,specs)], null);
}),args));
var map__24227__$1 = (((((!((map__24227 == null))))?(((((map__24227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24227):map__24227);
var indexed = map__24227__$1;
var require = cljs.core.get.call(null,map__24227__$1,new cljs.core.Keyword(null,"require","require",-468001333));
>>>>>>> 8f3c68a (Initial Commit)
var sugar_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include-macros","include-macros",1228110289),null,new cljs.core.Keyword(null,"refer-macros","refer-macros",-1906841953),null], null), null);
var remove_from_spec = (function (pred,spec){
while(true){
if(cljs.core.not.call(null,((cljs.core.sequential_QMARK_.call(null,spec))?cljs.core.some.call(null,pred,spec):false))){
return spec;
} else {
<<<<<<< HEAD
var vec__23896 = cljs.core.split_with.call(null,cljs.core.complement.call(null,pred),spec);
var l = cljs.core.nth.call(null,vec__23896,(0),null);
var r = cljs.core.nth.call(null,vec__23896,(1),null);
var G__23902 = pred;
var G__23903 = cljs.core.concat.call(null,l,cljs.core.drop.call(null,(2),r));
pred = G__23902;
spec = G__23903;
=======
var vec__24233 = cljs.core.split_with.call(null,cljs.core.complement.call(null,pred),spec);
var l = cljs.core.nth.call(null,vec__24233,(0),null);
var r = cljs.core.nth.call(null,vec__24233,(1),null);
var G__24239 = pred;
var G__24240 = cljs.core.concat.call(null,l,cljs.core.drop.call(null,(2),r));
pred = G__24239;
spec = G__24240;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
break;
}
});
var replace_refer_macros = (function (spec){
if((!(cljs.core.sequential_QMARK_.call(null,spec)))){
return spec;
} else {
return cljs.core.map.call(null,(function (x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"refer-macros","refer-macros",-1906841953))){
return new cljs.core.Keyword(null,"refer","refer",-964295553);
} else {
return x;
}
}),spec);
}
});
<<<<<<< HEAD
var reload_spec_QMARK_ = (function (p1__23889_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null).call(null,p1__23889_SHARP_);
=======
var reload_spec_QMARK_ = (function (p1__24226_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null).call(null,p1__24226_SHARP_);
>>>>>>> 8f3c68a (Initial Commit)
});
var to_macro_specs = (function (specs){
return cljs.core.map.call(null,(function (x){
if(cljs.core.not.call(null,reload_spec_QMARK_.call(null,x))){
return replace_refer_macros.call(null,remove_from_spec.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rename","rename",1508157613),null], null), null),remove_from_spec.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null),remove_from_spec.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-macros","include-macros",1228110289),null], null), null),x))));
} else {
return x;
}
}),cljs.core.filter.call(null,(function (x){
var or__4126__auto__ = ((cljs.core.sequential_QMARK_.call(null,x))?cljs.core.some.call(null,sugar_keys,x):false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = reload_spec_QMARK_.call(null,x);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.analyzer.macro_autoload_ns_QMARK_.call(null,x);
}
}
}),specs));
});
var remove_sugar = cljs.core.partial.call(null,remove_from_spec,sugar_keys);
var temp__5722__auto__ = cljs.core.seq.call(null,to_macro_specs.call(null,require));
if((temp__5722__auto__ == null)){
return args;
} else {
var require_specs = temp__5722__auto__;
return cljs.core.map.call(null,(function (x){
if(cljs.core.not.call(null,reload_spec_QMARK_.call(null,x))){
<<<<<<< HEAD
var vec__23899 = x;
var k = cljs.core.nth.call(null,vec__23899,(0),null);
var v = cljs.core.nth.call(null,vec__23899,(1),null);
=======
var vec__24236 = x;
var k = cljs.core.nth.call(null,vec__24236,(0),null);
var v = cljs.core.nth.call(null,vec__24236,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return cljs.core.cons.call(null,k,cljs.core.map.call(null,remove_sugar,v));
} else {
return x;
}
}),cljs.core.update_in.call(null,indexed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),require_specs));
}
});
cljs.analyzer.find_def_clash = (function cljs$analyzer$find_def_clash(env,ns,segments){
var to_check = cljs.core.map.call(null,(function (xs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,clojure.string.join.call(null,".",cljs.core.butlast.call(null,xs))),cljs.core.symbol.call(null,cljs.core.last.call(null,xs))], null);
}),cljs.core.drop.call(null,(2),cljs.core.reductions.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,segments)));
<<<<<<< HEAD
var seq__23904 = cljs.core.seq.call(null,to_check);
var chunk__23905 = null;
var count__23906 = (0);
var i__23907 = (0);
while(true){
if((i__23907 < count__23906)){
var vec__23914 = cljs.core._nth.call(null,chunk__23905,i__23907);
var clash_ns = cljs.core.nth.call(null,vec__23914,(0),null);
var name = cljs.core.nth.call(null,vec__23914,(1),null);
=======
var seq__24241 = cljs.core.seq.call(null,to_check);
var chunk__24242 = null;
var count__24243 = (0);
var i__24244 = (0);
while(true){
if((i__24244 < count__24243)){
var vec__24251 = cljs.core._nth.call(null,chunk__24242,i__24244);
var clash_ns = cljs.core.nth.call(null,vec__24251,(0),null);
var name = cljs.core.nth.call(null,vec__24251,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),clash_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),name], null)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(clash_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))], null));
} else {
}


<<<<<<< HEAD
var G__23920 = seq__23904;
var G__23921 = chunk__23905;
var G__23922 = count__23906;
var G__23923 = (i__23907 + (1));
seq__23904 = G__23920;
chunk__23905 = G__23921;
count__23906 = G__23922;
i__23907 = G__23923;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23904);
if(temp__5720__auto__){
var seq__23904__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23904__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__23904__$1);
var G__23924 = cljs.core.chunk_rest.call(null,seq__23904__$1);
var G__23925 = c__4556__auto__;
var G__23926 = cljs.core.count.call(null,c__4556__auto__);
var G__23927 = (0);
seq__23904 = G__23924;
chunk__23905 = G__23925;
count__23906 = G__23926;
i__23907 = G__23927;
continue;
} else {
var vec__23917 = cljs.core.first.call(null,seq__23904__$1);
var clash_ns = cljs.core.nth.call(null,vec__23917,(0),null);
var name = cljs.core.nth.call(null,vec__23917,(1),null);
=======
var G__24257 = seq__24241;
var G__24258 = chunk__24242;
var G__24259 = count__24243;
var G__24260 = (i__24244 + (1));
seq__24241 = G__24257;
chunk__24242 = G__24258;
count__24243 = G__24259;
i__24244 = G__24260;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__24241);
if(temp__5720__auto__){
var seq__24241__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24241__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__24241__$1);
var G__24261 = cljs.core.chunk_rest.call(null,seq__24241__$1);
var G__24262 = c__4556__auto__;
var G__24263 = cljs.core.count.call(null,c__4556__auto__);
var G__24264 = (0);
seq__24241 = G__24261;
chunk__24242 = G__24262;
count__24243 = G__24263;
i__24244 = G__24264;
continue;
} else {
var vec__24254 = cljs.core.first.call(null,seq__24241__$1);
var clash_ns = cljs.core.nth.call(null,vec__24254,(0),null);
var name = cljs.core.nth.call(null,vec__24254,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),clash_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),name], null)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(clash_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))], null));
} else {
}


<<<<<<< HEAD
var G__23928 = cljs.core.next.call(null,seq__23904__$1);
var G__23929 = null;
var G__23930 = (0);
var G__23931 = (0);
seq__23904 = G__23928;
chunk__23905 = G__23929;
count__23906 = G__23930;
i__23907 = G__23931;
=======
var G__24265 = cljs.core.next.call(null,seq__24241__$1);
var G__24266 = null;
var G__24267 = (0);
var G__24268 = (0);
seq__24241 = G__24265;
chunk__24242 = G__24266;
count__24243 = G__24267;
i__24244 = G__24268;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.macro_ns_name = (function cljs$analyzer$macro_ns_name(name){
var name_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(name);
if((!(goog.string.endsWith(name_str,"$macros")))){
return cljs.core.symbol.call(null,[name_str,"$macros"].join(''));
} else {
return name;
}
});
<<<<<<< HEAD
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"ns","ns",2082130287,null),(function (_,env,p__23934,___$1,opts){
var vec__23935 = p__23934;
var seq__23936 = cljs.core.seq.call(null,vec__23935);
var first__23937 = cljs.core.first.call(null,seq__23936);
var seq__23936__$1 = cljs.core.next.call(null,seq__23936);
var ___$2 = first__23937;
var first__23937__$1 = cljs.core.first.call(null,seq__23936__$1);
var seq__23936__$2 = cljs.core.next.call(null,seq__23936__$1);
var name = first__23937__$1;
var args = seq__23936__$2;
var form = vec__23935;
=======
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"ns","ns",2082130287,null),(function (_,env,p__24271,___$1,opts){
var vec__24272 = p__24271;
var seq__24273 = cljs.core.seq.call(null,vec__24272);
var first__24274 = cljs.core.first.call(null,seq__24273);
var seq__24273__$1 = cljs.core.next.call(null,seq__24273);
var ___$2 = first__24274;
var first__24274__$1 = cljs.core.first.call(null,seq__24273__$1);
var seq__24273__$2 = cljs.core.next.call(null,seq__24273__$1);
var name = first__24274__$1;
var args = seq__24273__$2;
var form = vec__24272;
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(cljs.analyzer._STAR_allow_ns_STAR_)){
} else {
throw cljs.analyzer.error.call(null,env,"Namespace declarations must appear at the top-level.");
}

if((name instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.call(null,env,"Namespaces must be named by a symbol.");
}

<<<<<<< HEAD
var name__$1 = (function (){var G__23938 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name.call(null,G__23938);
} else {
return G__23938;
}
})();
var segments_23964 = clojure.string.split.call(null,cljs.core.name.call(null,name__$1),/\./);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,segments_23964))){
=======
var name__$1 = (function (){var G__24275 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name.call(null,G__24275);
} else {
return G__24275;
}
})();
var segments_24301 = clojure.string.split.call(null,cljs.core.name.call(null,name__$1),/\./);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,segments_24301))){
>>>>>>> 8f3c68a (Initial Commit)
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

<<<<<<< HEAD
var segment_23965 = cljs.core.some.call(null,cljs.analyzer.js_reserved,segments_23964);
if((!((segment_23965 == null)))){
=======
var segment_24302 = cljs.core.some.call(null,cljs.analyzer.js_reserved,segments_24301);
if((!((segment_24302 == null)))){
>>>>>>> 8f3c68a (Initial Commit)
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

<<<<<<< HEAD
cljs.analyzer.find_def_clash.call(null,env,name__$1,segments_23964);
=======
cljs.analyzer.find_def_clash.call(null,env,name__$1,segments_24301);
>>>>>>> 8f3c68a (Initial Commit)

var docstring = ((typeof cljs.core.first.call(null,args) === 'string')?cljs.core.first.call(null,args):null);
var mdocstr = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name__$1));
var args__$1 = (((!((docstring == null))))?cljs.core.next.call(null,args):args);
var metadata = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__$1)))?cljs.core.first.call(null,args__$1):null);
var args__$2 = cljs.analyzer.desugar_ns_specs.call(null,(((!((metadata == null))))?cljs.core.next.call(null,args__$1):args__$1));
var name__$2 = cljs.core.vary_meta.call(null,name__$1,cljs.core.merge,metadata);
<<<<<<< HEAD
var map__23939 = cljs.analyzer.parse_ns_excludes.call(null,env,args__$2);
var map__23939__$1 = (((((!((map__23939 == null))))?(((((map__23939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23939):map__23939);
var excludes = cljs.core.get.call(null,map__23939__$1,new cljs.core.Keyword(null,"excludes","excludes",-1791725945));
var core_renames = cljs.core.get.call(null,map__23939__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var core_renames__$1 = cljs.core.reduce.call(null,(function (m,p__23945){
var vec__23946 = p__23945;
var original = cljs.core.nth.call(null,vec__23946,(0),null);
var renamed = cljs.core.nth.call(null,vec__23946,(1),null);
=======
var map__24276 = cljs.analyzer.parse_ns_excludes.call(null,env,args__$2);
var map__24276__$1 = (((((!((map__24276 == null))))?(((((map__24276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24276):map__24276);
var excludes = cljs.core.get.call(null,map__24276__$1,new cljs.core.Keyword(null,"excludes","excludes",-1791725945));
var core_renames = cljs.core.get.call(null,map__24276__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var core_renames__$1 = cljs.core.reduce.call(null,(function (m,p__24282){
var vec__24283 = p__24282;
var original = cljs.core.nth.call(null,vec__24283,(0),null);
var renamed = cljs.core.nth.call(null,vec__24283,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return cljs.core.assoc.call(null,m,renamed,cljs.core.symbol.call(null,"cljs.core",cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)));
}),cljs.core.PersistentArrayMap.EMPTY,core_renames);
var deps = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var aliases = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fns","fns",1185138786),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"macros","macros",811339431),cljs.core.PersistentArrayMap.EMPTY], null));
var spec_parsers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"require","require",-468001333),cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,false,deps,aliases),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,true,deps,aliases),new cljs.core.Keyword(null,"use","use",-1846382424),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,false,deps,aliases),cljs.core.partial.call(null,cljs.analyzer.use__GT_require,env)),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,true,deps,aliases),cljs.core.partial.call(null,cljs.analyzer.use__GT_require,env)),new cljs.core.Keyword(null,"import","import",-1399500709),cljs.core.partial.call(null,cljs.analyzer.parse_import_spec,env,deps)], null);
var valid_forms = cljs.core.atom.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null,new cljs.core.Keyword(null,"import","import",-1399500709),null], null), null));
var reload = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null], null));
var reloads = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
<<<<<<< HEAD
var map__23940 = cljs.core.reduce.call(null,(function (m,p__23949){
var vec__23950 = p__23949;
var seq__23951 = cljs.core.seq.call(null,vec__23950);
var first__23952 = cljs.core.first.call(null,seq__23951);
var seq__23951__$1 = cljs.core.next.call(null,seq__23951);
var k = first__23952;
var libs = seq__23951__$1;
var libspec = vec__23950;
=======
var map__24277 = cljs.core.reduce.call(null,(function (m,p__24286){
var vec__24287 = p__24286;
var seq__24288 = cljs.core.seq.call(null,vec__24287);
var first__24289 = cljs.core.first.call(null,seq__24288);
var seq__24288__$1 = cljs.core.next.call(null,seq__24288);
var k = first__24289;
var libs = seq__24288__$1;
var libspec = vec__24287;
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null,new cljs.core.Keyword(null,"import","import",-1399500709),null], null), null).call(null,k))){
} else {
throw cljs.analyzer.error.call(null,env,["Only :refer-clojure, :require, :require-macros, :use, :use-macros, and :import libspecs supported. Got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)," instead."].join(''));
}

if(cljs.core.truth_(cljs.core.deref.call(null,valid_forms).call(null,k))){
} else {
throw cljs.analyzer.error.call(null,env,["Only one ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," form is allowed per namespace definition"].join(''));
}

cljs.core.swap_BANG_.call(null,valid_forms,cljs.core.disj,k);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),k)){
} else {
if((!((cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reload","reload",863702807),null], null), null),libs) == null)))){
cljs.core.swap_BANG_.call(null,reload,cljs.core.assoc,k,new cljs.core.Keyword(null,"reload","reload",863702807));
} else {
}

if((!((cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs) == null)))){
cljs.core.swap_BANG_.call(null,reload,cljs.core.assoc,k,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
} else {
}
}

<<<<<<< HEAD
var temp__5720__auto___23966 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__23932_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__23932_SHARP_));
}),libs));
if(temp__5720__auto___23966){
var xs_23967 = temp__5720__auto___23966;
cljs.core.swap_BANG_.call(null,reloads,cljs.core.assoc,k,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.first,xs_23967),cljs.core.map.call(null,(function (p1__23933_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__23933_SHARP_));
}),xs_23967)));
=======
var temp__5720__auto___24303 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__24269_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__24269_SHARP_));
}),libs));
if(temp__5720__auto___24303){
var xs_24304 = temp__5720__auto___24303;
cljs.core.swap_BANG_.call(null,reloads,cljs.core.assoc,k,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.first,xs_24304),cljs.core.map.call(null,(function (p1__24270_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__24270_SHARP_));
}),xs_24304)));
>>>>>>> 8f3c68a (Initial Commit)
} else {
}

return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.call(null,spec_parsers.call(null,k),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs)));
<<<<<<< HEAD
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__23953){
var vec__23954 = p__23953;
var r = cljs.core.nth.call(null,vec__23954,(0),null);
return cljs.core._EQ_.call(null,r,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440));
}),args__$2));
var map__23940__$1 = (((((!((map__23940 == null))))?(((((map__23940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23940):map__23940);
var params = map__23940__$1;
var uses = cljs.core.get.call(null,map__23940__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var requires = cljs.core.get.call(null,map__23940__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var renames = cljs.core.get.call(null,map__23940__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var use_macros = cljs.core.get.call(null,map__23940__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__23940__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var rename_macros = cljs.core.get.call(null,map__23940__$1,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
var imports = cljs.core.get.call(null,map__23940__$1,new cljs.core.Keyword(null,"import","import",-1399500709));
var vec__23941 = cljs.core.map.call(null,(function (spec_map){
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
var ns = cljs.core.symbol.call(null,cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$2),(0),(((cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$2)).length) - (7))));
return cljs.core.reduce.call(null,(function (m,p__23958){
var vec__23959 = p__23958;
var k = cljs.core.nth.call(null,vec__23959,(0),null);
var v = cljs.core.nth.call(null,vec__23959,(1),null);
var G__23962 = m;
if((!(cljs.core.symbol_identical_QMARK_.call(null,v,ns)))){
return cljs.core.assoc.call(null,G__23962,k,v);
} else {
return G__23962;
=======
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__24290){
var vec__24291 = p__24290;
var r = cljs.core.nth.call(null,vec__24291,(0),null);
return cljs.core._EQ_.call(null,r,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440));
}),args__$2));
var map__24277__$1 = (((((!((map__24277 == null))))?(((((map__24277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24277):map__24277);
var params = map__24277__$1;
var uses = cljs.core.get.call(null,map__24277__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var requires = cljs.core.get.call(null,map__24277__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var renames = cljs.core.get.call(null,map__24277__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var use_macros = cljs.core.get.call(null,map__24277__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__24277__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var rename_macros = cljs.core.get.call(null,map__24277__$1,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
var imports = cljs.core.get.call(null,map__24277__$1,new cljs.core.Keyword(null,"import","import",-1399500709));
var vec__24278 = cljs.core.map.call(null,(function (spec_map){
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
var ns = cljs.core.symbol.call(null,cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$2),(0),(((cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$2)).length) - (7))));
return cljs.core.reduce.call(null,(function (m,p__24295){
var vec__24296 = p__24295;
var k = cljs.core.nth.call(null,vec__24296,(0),null);
var v = cljs.core.nth.call(null,vec__24296,(1),null);
var G__24299 = m;
if((!(cljs.core.symbol_identical_QMARK_.call(null,v,ns)))){
return cljs.core.assoc.call(null,G__24299,k,v);
} else {
return G__24299;
>>>>>>> 8f3c68a (Initial Commit)
}
}),cljs.core.PersistentArrayMap.EMPTY,spec_map);
} else {
return spec_map;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [require_macros,use_macros], null));
<<<<<<< HEAD
var require_macros__$1 = cljs.core.nth.call(null,vec__23941,(0),null);
var use_macros__$1 = cljs.core.nth.call(null,vec__23941,(1),null);
=======
var require_macros__$1 = cljs.core.nth.call(null,vec__24278,(0),null);
var use_macros__$1 = cljs.core.nth.call(null,vec__24278,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
(cljs.analyzer._STAR_cljs_ns_STAR_ = name__$2);

var ns_info = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),new cljs.core.Keyword(null,"renames","renames",343278368),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"doc","doc",1913296891)],[rename_macros,cljs.core.merge.call(null,renames,core_renames__$1),use_macros__$1,excludes,name__$2,imports,requires,uses,require_macros__$1,(function (){var or__4126__auto__ = docstring;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return mdocstr;
}
})()]);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name__$2], null),cljs.core.merge,ns_info);

<<<<<<< HEAD
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"deps","deps",1883360319),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null,cljs.core.deref.call(null,deps))),new cljs.core.Keyword(null,"reload","reload",863702807),cljs.core.deref.call(null,reload),new cljs.core.Keyword(null,"reloads","reloads",610698522),cljs.core.deref.call(null,reloads)], null),(function (){var G__23963 = ns_info;
var G__23963__$1 = (cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)))?cljs.core.update_in.call(null,G__23963,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692)], null),(function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)),true]));
})):G__23963);
if(cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)))){
return cljs.core.update_in.call(null,G__23963__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires","requires",-1201390927)], null),(function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)),true]));
}));
} else {
return G__23963__$1;
=======
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"deps","deps",1883360319),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null,cljs.core.deref.call(null,deps))),new cljs.core.Keyword(null,"reload","reload",863702807),cljs.core.deref.call(null,reload),new cljs.core.Keyword(null,"reloads","reloads",610698522),cljs.core.deref.call(null,reloads)], null),(function (){var G__24300 = ns_info;
var G__24300__$1 = (cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)))?cljs.core.update_in.call(null,G__24300,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692)], null),(function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)),true]));
})):G__24300);
if(cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)))){
return cljs.core.update_in.call(null,G__24300__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires","requires",-1201390927)], null),(function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)),true]));
}));
} else {
return G__24300__$1;
>>>>>>> 8f3c68a (Initial Commit)
}
})());
}));
cljs.analyzer.check_duplicate_aliases = (function cljs$analyzer$check_duplicate_aliases(env,old,new$){
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(old);
<<<<<<< HEAD
var seq__23968 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null));
var chunk__23969 = null;
var count__23970 = (0);
var i__23971 = (0);
while(true){
if((i__23971 < count__23970)){
var k = cljs.core._nth.call(null,chunk__23969,i__23971);
var old_aliases_23988 = cljs.core.get.call(null,old,k);
var new_aliases_23989 = cljs.core.get.call(null,new$,k);
var temp__5724__auto___23990 = cljs.core.some.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_aliases_23989)),cljs.core.keys.call(null,cljs.core.remove.call(null,((function (seq__23968,chunk__23969,count__23970,i__23971,old_aliases_23988,new_aliases_23989,k,ns_name){
return (function (p__23980){
var vec__23981 = p__23980;
var k__$1 = cljs.core.nth.call(null,vec__23981,(0),null);
var v = cljs.core.nth.call(null,vec__23981,(1),null);
var entry = vec__23981;
return ((cljs.core._EQ_.call(null,k__$1,v)) || (cljs.core._EQ_.call(null,entry,cljs.core.find.call(null,new_aliases_23989,k__$1))));
});})(seq__23968,chunk__23969,count__23970,i__23971,old_aliases_23988,new_aliases_23989,k,ns_name))
,old_aliases_23988)));
if((temp__5724__auto___23990 == null)){
} else {
var alias_23991 = temp__5724__auto___23990;
throw cljs.analyzer.error.call(null,env,["Alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_23991)," already exists in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),", aliasing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,old_aliases_23988,alias_23991))].join(''));
}


var G__23992 = seq__23968;
var G__23993 = chunk__23969;
var G__23994 = count__23970;
var G__23995 = (i__23971 + (1));
seq__23968 = G__23992;
chunk__23969 = G__23993;
count__23970 = G__23994;
i__23971 = G__23995;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23968);
if(temp__5720__auto__){
var seq__23968__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23968__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__23968__$1);
var G__23996 = cljs.core.chunk_rest.call(null,seq__23968__$1);
var G__23997 = c__4556__auto__;
var G__23998 = cljs.core.count.call(null,c__4556__auto__);
var G__23999 = (0);
seq__23968 = G__23996;
chunk__23969 = G__23997;
count__23970 = G__23998;
i__23971 = G__23999;
continue;
} else {
var k = cljs.core.first.call(null,seq__23968__$1);
var old_aliases_24000 = cljs.core.get.call(null,old,k);
var new_aliases_24001 = cljs.core.get.call(null,new$,k);
var temp__5724__auto___24002 = cljs.core.some.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_aliases_24001)),cljs.core.keys.call(null,cljs.core.remove.call(null,((function (seq__23968,chunk__23969,count__23970,i__23971,old_aliases_24000,new_aliases_24001,k,seq__23968__$1,temp__5720__auto__,ns_name){
return (function (p__23984){
var vec__23985 = p__23984;
var k__$1 = cljs.core.nth.call(null,vec__23985,(0),null);
var v = cljs.core.nth.call(null,vec__23985,(1),null);
var entry = vec__23985;
return ((cljs.core._EQ_.call(null,k__$1,v)) || (cljs.core._EQ_.call(null,entry,cljs.core.find.call(null,new_aliases_24001,k__$1))));
});})(seq__23968,chunk__23969,count__23970,i__23971,old_aliases_24000,new_aliases_24001,k,seq__23968__$1,temp__5720__auto__,ns_name))
,old_aliases_24000)));
if((temp__5724__auto___24002 == null)){
} else {
var alias_24003 = temp__5724__auto___24002;
throw cljs.analyzer.error.call(null,env,["Alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_24003)," already exists in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),", aliasing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,old_aliases_24000,alias_24003))].join(''));
}


var G__24004 = cljs.core.next.call(null,seq__23968__$1);
var G__24005 = null;
var G__24006 = (0);
var G__24007 = (0);
seq__23968 = G__24004;
chunk__23969 = G__24005;
count__23970 = G__24006;
i__23971 = G__24007;
=======
var seq__24305 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null));
var chunk__24306 = null;
var count__24307 = (0);
var i__24308 = (0);
while(true){
if((i__24308 < count__24307)){
var k = cljs.core._nth.call(null,chunk__24306,i__24308);
var old_aliases_24325 = cljs.core.get.call(null,old,k);
var new_aliases_24326 = cljs.core.get.call(null,new$,k);
var temp__5724__auto___24327 = cljs.core.some.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_aliases_24326)),cljs.core.keys.call(null,cljs.core.remove.call(null,((function (seq__24305,chunk__24306,count__24307,i__24308,old_aliases_24325,new_aliases_24326,k,ns_name){
return (function (p__24317){
var vec__24318 = p__24317;
var k__$1 = cljs.core.nth.call(null,vec__24318,(0),null);
var v = cljs.core.nth.call(null,vec__24318,(1),null);
var entry = vec__24318;
return ((cljs.core._EQ_.call(null,k__$1,v)) || (cljs.core._EQ_.call(null,entry,cljs.core.find.call(null,new_aliases_24326,k__$1))));
});})(seq__24305,chunk__24306,count__24307,i__24308,old_aliases_24325,new_aliases_24326,k,ns_name))
,old_aliases_24325)));
if((temp__5724__auto___24327 == null)){
} else {
var alias_24328 = temp__5724__auto___24327;
throw cljs.analyzer.error.call(null,env,["Alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_24328)," already exists in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),", aliasing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,old_aliases_24325,alias_24328))].join(''));
}


var G__24329 = seq__24305;
var G__24330 = chunk__24306;
var G__24331 = count__24307;
var G__24332 = (i__24308 + (1));
seq__24305 = G__24329;
chunk__24306 = G__24330;
count__24307 = G__24331;
i__24308 = G__24332;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__24305);
if(temp__5720__auto__){
var seq__24305__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24305__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__24305__$1);
var G__24333 = cljs.core.chunk_rest.call(null,seq__24305__$1);
var G__24334 = c__4556__auto__;
var G__24335 = cljs.core.count.call(null,c__4556__auto__);
var G__24336 = (0);
seq__24305 = G__24333;
chunk__24306 = G__24334;
count__24307 = G__24335;
i__24308 = G__24336;
continue;
} else {
var k = cljs.core.first.call(null,seq__24305__$1);
var old_aliases_24337 = cljs.core.get.call(null,old,k);
var new_aliases_24338 = cljs.core.get.call(null,new$,k);
var temp__5724__auto___24339 = cljs.core.some.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_aliases_24338)),cljs.core.keys.call(null,cljs.core.remove.call(null,((function (seq__24305,chunk__24306,count__24307,i__24308,old_aliases_24337,new_aliases_24338,k,seq__24305__$1,temp__5720__auto__,ns_name){
return (function (p__24321){
var vec__24322 = p__24321;
var k__$1 = cljs.core.nth.call(null,vec__24322,(0),null);
var v = cljs.core.nth.call(null,vec__24322,(1),null);
var entry = vec__24322;
return ((cljs.core._EQ_.call(null,k__$1,v)) || (cljs.core._EQ_.call(null,entry,cljs.core.find.call(null,new_aliases_24338,k__$1))));
});})(seq__24305,chunk__24306,count__24307,i__24308,old_aliases_24337,new_aliases_24338,k,seq__24305__$1,temp__5720__auto__,ns_name))
,old_aliases_24337)));
if((temp__5724__auto___24339 == null)){
} else {
var alias_24340 = temp__5724__auto___24339;
throw cljs.analyzer.error.call(null,env,["Alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias_24340)," already exists in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),", aliasing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,old_aliases_24337,alias_24340))].join(''));
}


var G__24341 = cljs.core.next.call(null,seq__24305__$1);
var G__24342 = null;
var G__24343 = (0);
var G__24344 = (0);
seq__24305 = G__24341;
chunk__24306 = G__24342;
count__24307 = G__24343;
i__24308 = G__24344;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
return null;
}
}
break;
}
});
<<<<<<< HEAD
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),(function (_,env,p__24011,___$1,opts){
var vec__24012 = p__24011;
var ___$2 = cljs.core.nth.call(null,vec__24012,(0),null);
var quoted_specs = cljs.core.nth.call(null,vec__24012,(1),null);
var form = vec__24012;
var temp__5720__auto___24032 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__24008_SHARP_){
return ((cljs.core.seq_QMARK_.call(null,p1__24008_SHARP_)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,p1__24008_SHARP_))));
}),cljs.core.remove.call(null,cljs.core.keyword_QMARK_,quoted_specs)));
if(cljs.core.truth_(temp__5720__auto___24032)){
var not_quoted_24033 = temp__5720__auto___24032;
throw cljs.analyzer.error.call(null,env,["Arguments to ",cljs.core.name.call(null,cljs.core.first.call(null,quoted_specs))," must be quoted. Offending spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(not_quoted_24033)].join(''));
=======
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),(function (_,env,p__24348,___$1,opts){
var vec__24349 = p__24348;
var ___$2 = cljs.core.nth.call(null,vec__24349,(0),null);
var quoted_specs = cljs.core.nth.call(null,vec__24349,(1),null);
var form = vec__24349;
var temp__5720__auto___24369 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__24345_SHARP_){
return ((cljs.core.seq_QMARK_.call(null,p1__24345_SHARP_)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,p1__24345_SHARP_))));
}),cljs.core.remove.call(null,cljs.core.keyword_QMARK_,quoted_specs)));
if(cljs.core.truth_(temp__5720__auto___24369)){
var not_quoted_24370 = temp__5720__auto___24369;
throw cljs.analyzer.error.call(null,env,["Arguments to ",cljs.core.name.call(null,cljs.core.first.call(null,quoted_specs))," must be quoted. Offending spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(not_quoted_24370)].join(''));
>>>>>>> 8f3c68a (Initial Commit)
} else {
}

if(cljs.core.truth_(cljs.analyzer._STAR_allow_ns_STAR_)){
} else {
throw cljs.analyzer.error.call(null,env,["Calls to `",cljs.core.name.call(null,cljs.core.first.call(null,quoted_specs)),"` must appear at the top-level."].join(''));
}

var specs = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),cljs.core.first.call(null,quoted_specs)))?cljs.analyzer.canonicalize_import_specs.call(null,quoted_specs):cljs.analyzer.canonicalize_specs.call(null,quoted_specs));
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var args = cljs.analyzer.desugar_ns_specs.call(null,(new cljs.core.List(null,specs,null,(1),null)));
<<<<<<< HEAD
var map__24015 = cljs.analyzer.parse_ns_excludes.call(null,env,args);
var map__24015__$1 = (((((!((map__24015 == null))))?(((((map__24015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24015):map__24015);
var excludes = cljs.core.get.call(null,map__24015__$1,new cljs.core.Keyword(null,"excludes","excludes",-1791725945));
var core_renames = cljs.core.get.call(null,map__24015__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var core_renames__$1 = cljs.core.reduce.call(null,(function (m,p__24018){
var vec__24019 = p__24018;
var original = cljs.core.nth.call(null,vec__24019,(0),null);
var renamed = cljs.core.nth.call(null,vec__24019,(1),null);
=======
var map__24352 = cljs.analyzer.parse_ns_excludes.call(null,env,args);
var map__24352__$1 = (((((!((map__24352 == null))))?(((((map__24352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24352):map__24352);
var excludes = cljs.core.get.call(null,map__24352__$1,new cljs.core.Keyword(null,"excludes","excludes",-1791725945));
var core_renames = cljs.core.get.call(null,map__24352__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var core_renames__$1 = cljs.core.reduce.call(null,(function (m,p__24355){
var vec__24356 = p__24355;
var original = cljs.core.nth.call(null,vec__24356,(0),null);
var renamed = cljs.core.nth.call(null,vec__24356,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return cljs.core.assoc.call(null,m,renamed,cljs.core.symbol.call(null,"cljs.core",cljs.core.str.cljs$core$IFn$_invoke$arity$1(original)));
}),cljs.core.PersistentArrayMap.EMPTY,core_renames);
var deps = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var aliases = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fns","fns",1185138786),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"macros","macros",811339431),cljs.core.PersistentArrayMap.EMPTY], null));
var spec_parsers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"require","require",-468001333),cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,false,deps,aliases),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,true,deps,aliases),new cljs.core.Keyword(null,"use","use",-1846382424),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,false,deps,aliases),cljs.core.partial.call(null,cljs.analyzer.use__GT_require,env)),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.analyzer.parse_require_spec,env,true,deps,aliases),cljs.core.partial.call(null,cljs.analyzer.use__GT_require,env)),new cljs.core.Keyword(null,"import","import",-1399500709),cljs.core.partial.call(null,cljs.analyzer.parse_import_spec,env,deps)], null);
var reload = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null], null));
var reloads = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
<<<<<<< HEAD
var map__24016 = cljs.core.reduce.call(null,(function (m,p__24022){
var vec__24023 = p__24022;
var seq__24024 = cljs.core.seq.call(null,vec__24023);
var first__24025 = cljs.core.first.call(null,seq__24024);
var seq__24024__$1 = cljs.core.next.call(null,seq__24024);
var k = first__24025;
var libs = seq__24024__$1;
=======
var map__24353 = cljs.core.reduce.call(null,(function (m,p__24359){
var vec__24360 = p__24359;
var seq__24361 = cljs.core.seq.call(null,vec__24360);
var first__24362 = cljs.core.first.call(null,seq__24361);
var seq__24361__$1 = cljs.core.next.call(null,seq__24361);
var k = first__24362;
var libs = seq__24361__$1;
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),k)){
} else {
if((!((cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reload","reload",863702807),null], null), null),libs) == null)))){
cljs.core.swap_BANG_.call(null,reload,cljs.core.assoc,k,new cljs.core.Keyword(null,"reload","reload",863702807));
} else {
}

if((!((cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs) == null)))){
cljs.core.swap_BANG_.call(null,reload,cljs.core.assoc,k,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
} else {
}
}

<<<<<<< HEAD
var temp__5724__auto___24034 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__24009_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__24009_SHARP_));
}),libs));
if((temp__5724__auto___24034 == null)){
} else {
var xs_24035 = temp__5724__auto___24034;
cljs.core.swap_BANG_.call(null,reloads,cljs.core.assoc,k,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.first,xs_24035),cljs.core.map.call(null,(function (p1__24010_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__24010_SHARP_));
}),xs_24035)));
}

return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.call(null,spec_parsers.call(null,k),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs)));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__24026){
var vec__24027 = p__24026;
var r = cljs.core.nth.call(null,vec__24027,(0),null);
return cljs.core._EQ_.call(null,r,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440));
}),args));
var map__24016__$1 = (((((!((map__24016 == null))))?(((((map__24016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24016):map__24016);
var params = map__24016__$1;
var uses = cljs.core.get.call(null,map__24016__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var requires = cljs.core.get.call(null,map__24016__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var renames = cljs.core.get.call(null,map__24016__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var use_macros = cljs.core.get.call(null,map__24016__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__24016__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var rename_macros = cljs.core.get.call(null,map__24016__$1,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
var imports = cljs.core.get.call(null,map__24016__$1,new cljs.core.Keyword(null,"import","import",-1399500709));
=======
var temp__5724__auto___24371 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__24346_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__24346_SHARP_));
}),libs));
if((temp__5724__auto___24371 == null)){
} else {
var xs_24372 = temp__5724__auto___24371;
cljs.core.swap_BANG_.call(null,reloads,cljs.core.assoc,k,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.first,xs_24372),cljs.core.map.call(null,(function (p1__24347_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__24347_SHARP_));
}),xs_24372)));
}

return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.call(null,spec_parsers.call(null,k),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs)));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__24363){
var vec__24364 = p__24363;
var r = cljs.core.nth.call(null,vec__24364,(0),null);
return cljs.core._EQ_.call(null,r,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440));
}),args));
var map__24353__$1 = (((((!((map__24353 == null))))?(((((map__24353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24353):map__24353);
var params = map__24353__$1;
var uses = cljs.core.get.call(null,map__24353__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var requires = cljs.core.get.call(null,map__24353__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var renames = cljs.core.get.call(null,map__24353__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var use_macros = cljs.core.get.call(null,map__24353__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__24353__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var rename_macros = cljs.core.get.call(null,map__24353__$1,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
var imports = cljs.core.get.call(null,map__24353__$1,new cljs.core.Keyword(null,"import","import",-1399500709));
>>>>>>> 8f3c68a (Initial Commit)
(cljs.analyzer._STAR_cljs_ns_STAR_ = name);

var require_info = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),new cljs.core.Keyword(null,"renames","renames",343278368),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"require-macros","require-macros",707947416)],[rename_macros,cljs.core.merge.call(null,renames,core_renames__$1),use_macros,excludes,name,imports,requires,uses,require_macros]);
var ns_info = (function (){var ns_info_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name], null));
if((cljs.core.count.call(null,ns_info_SINGLEQUOTE_) > (0))){
var merge_keys = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"renames","renames",343278368),new cljs.core.Keyword(null,"imports","imports",-1249933394)], null);
return cljs.core.merge.call(null,ns_info_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945),excludes], null),cljs.core.merge_with.call(null,cljs.core.merge,cljs.core.select_keys.call(null,ns_info_SINGLEQUOTE_,merge_keys),cljs.core.select_keys.call(null,require_info,merge_keys)));
} else {
return require_info;
}
})();
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name], null),cljs.core.merge,ns_info);

<<<<<<< HEAD
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"ns*","ns*",200417856),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"deps","deps",1883360319),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null,cljs.core.deref.call(null,deps))),new cljs.core.Keyword(null,"reload","reload",863702807),cljs.core.deref.call(null,reload),new cljs.core.Keyword(null,"reloads","reloads",610698522),cljs.core.deref.call(null,reloads)], null),(function (){var G__24031 = require_info;
var G__24031__$1 = (cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)))?cljs.core.update_in.call(null,G__24031,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692)], null),(function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)),true]));
})):G__24031);
if(cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)))){
return cljs.core.update_in.call(null,G__24031__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires","requires",-1201390927)], null),(function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)),true]));
}));
} else {
return G__24031__$1;
}
})());
}));
cljs.analyzer.parse_type = (function cljs$analyzer$parse_type(op,env,p__24036){
var vec__24037 = p__24036;
var _ = cljs.core.nth.call(null,vec__24037,(0),null);
var tsym = cljs.core.nth.call(null,vec__24037,(1),null);
var fields = cljs.core.nth.call(null,vec__24037,(2),null);
var pmasks = cljs.core.nth.call(null,vec__24037,(3),null);
var body = cljs.core.nth.call(null,vec__24037,(4),null);
var form = vec__24037;
=======
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"ns*","ns*",200417856),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"deps","deps",1883360319),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null,cljs.core.deref.call(null,deps))),new cljs.core.Keyword(null,"reload","reload",863702807),cljs.core.deref.call(null,reload),new cljs.core.Keyword(null,"reloads","reloads",610698522),cljs.core.deref.call(null,reloads)], null),(function (){var G__24368 = require_info;
var G__24368__$1 = (cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)))?cljs.core.update_in.call(null,G__24368,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692)], null),(function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)),true]));
})):G__24368);
if(cljs.core.truth_(cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)))){
return cljs.core.update_in.call(null,G__24368__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires","requires",-1201390927)], null),(function (m){
return cljs.core.with_meta.call(null,m,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.deref.call(null,reload).call(null,new cljs.core.Keyword(null,"require","require",-468001333)),true]));
}));
} else {
return G__24368__$1;
}
})());
}));
cljs.analyzer.parse_type = (function cljs$analyzer$parse_type(op,env,p__24373){
var vec__24374 = p__24373;
var _ = cljs.core.nth.call(null,vec__24374,(0),null);
var tsym = cljs.core.nth.call(null,vec__24374,(1),null);
var fields = cljs.core.nth.call(null,vec__24374,(2),null);
var pmasks = cljs.core.nth.call(null,vec__24374,(3),null);
var body = cljs.core.nth.call(null,vec__24374,(4),null);
var form = vec__24374;
>>>>>>> 8f3c68a (Initial Commit)
var t = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tsym));
var locals = cljs.core.reduce.call(null,(function (m,fld){
return cljs.core.assoc.call(null,m,fld,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"mutable","mutable",875778266),new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"local","local",-1497766724)],[fld,true,cljs.analyzer.get_col.call(null,fld,env),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),cljs.analyzer.get_line.call(null,fld,env),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),new cljs.core.Keyword(null,"mutable","mutable",875778266).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,fld)),m.call(null,fld),new cljs.core.Keyword(null,"field","field",-1302436500)]));
}),cljs.core.PersistentArrayMap.EMPTY,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),op))?cljs.core.concat.call(null,fields,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null)):fields));
var protocols = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"defs","defs",1398449717),tsym], null),(function (m){
var m__$1 = cljs.core.assoc.call(null,(function (){var or__4126__auto__ = m;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"name","name",1843675177),t,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Keyword(null,"type","type",1174270348),true,new cljs.core.Keyword(null,"num-fields","num-fields",1529154024),cljs.core.count.call(null,fields),new cljs.core.Keyword(null,"record","record",-779106859),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),op));
return cljs.core.merge.call(null,m__$1,cljs.core.dissoc.call(null,cljs.core.meta.call(null,tsym),new cljs.core.Keyword(null,"protocols","protocols",-5615896)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols], null),cljs.analyzer.source_info.call(null,tsym,env));
}));

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"pmasks","pmasks",-871416698),new cljs.core.Keyword(null,"protocols","protocols",-5615896),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"body","body",-2049205669)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),pmasks,cljs.core.disj.call(null,protocols,new cljs.core.Symbol("cljs.core","Object","cljs.core/Object",-345545431,null)),fields,op,env,t,form,new cljs.core.Symbol(null,"function","function",-486723946,null),cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783),locals),body)]);
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type.call(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),env,form);
}));
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type.call(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),env,form);
}));
<<<<<<< HEAD
cljs.analyzer.property_symbol_QMARK_ = (function cljs$analyzer$property_symbol_QMARK_(p1__24040_SHARP_){
return cljs.core.boolean$.call(null,(((p1__24040_SHARP_ instanceof cljs.core.Symbol))?cljs.core.re_matches.call(null,/^-.*/,cljs.core.name.call(null,p1__24040_SHARP_)):false));
});
cljs.analyzer.classify_dot_form = (function cljs$analyzer$classify_dot_form(p__24041){
var vec__24042 = p__24041;
var target = cljs.core.nth.call(null,vec__24042,(0),null);
var member = cljs.core.nth.call(null,vec__24042,(1),null);
var args = cljs.core.nth.call(null,vec__24042,(2),null);
=======
cljs.analyzer.property_symbol_QMARK_ = (function cljs$analyzer$property_symbol_QMARK_(p1__24377_SHARP_){
return cljs.core.boolean$.call(null,(((p1__24377_SHARP_ instanceof cljs.core.Symbol))?cljs.core.re_matches.call(null,/^-.*/,cljs.core.name.call(null,p1__24377_SHARP_)):false));
});
cljs.analyzer.classify_dot_form = (function cljs$analyzer$classify_dot_form(p__24378){
var vec__24379 = p__24378;
var target = cljs.core.nth.call(null,vec__24379,(0),null);
var member = cljs.core.nth.call(null,vec__24379,(1),null);
var args = cljs.core.nth.call(null,vec__24379,(2),null);
>>>>>>> 8f3c68a (Initial Commit)
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((target == null))?new cljs.core.Keyword("cljs.analyzer","error","cljs.analyzer/error",-65289642):new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)
),((cljs.analyzer.property_symbol_QMARK_.call(null,member))?new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886):(((member instanceof cljs.core.Symbol))?new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902):((cljs.core.seq_QMARK_.call(null,member))?new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923):new cljs.core.Keyword("cljs.analyzer","error","cljs.analyzer/error",-65289642)
))),(((args == null))?cljs.core.List.EMPTY:new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)
)], null);
});
if((typeof cljs !== 'undefined') && (typeof cljs.analyzer !== 'undefined') && (typeof cljs.analyzer.build_dot_form !== 'undefined')){
} else {
cljs.analyzer.build_dot_form = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
<<<<<<< HEAD
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.analyzer","build-dot-form"),(function (p1__24045_SHARP_){
return cljs.analyzer.classify_dot_form.call(null,p1__24045_SHARP_);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886),cljs.core.List.EMPTY], null),(function (p__24046){
var vec__24047 = p__24046;
var target = cljs.core.nth.call(null,vec__24047,(0),null);
var prop = cljs.core.nth.call(null,vec__24047,(1),null);
var _ = cljs.core.nth.call(null,vec__24047,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","access","cljs.analyzer/access",-1639036494),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"field","field",-1302436500),cljs.core.with_meta.call(null,cljs.core.symbol.call(null,cljs.core.name.call(null,prop).substring((1))),cljs.core.meta.call(null,prop))], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886),new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923)], null),(function (p__24050){
var vec__24051 = p__24050;
var target = cljs.core.nth.call(null,vec__24051,(0),null);
var prop = cljs.core.nth.call(null,vec__24051,(1),null);
var args = cljs.core.nth.call(null,vec__24051,(2),null);
=======
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.analyzer","build-dot-form"),(function (p1__24382_SHARP_){
return cljs.analyzer.classify_dot_form.call(null,p1__24382_SHARP_);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886),cljs.core.List.EMPTY], null),(function (p__24383){
var vec__24384 = p__24383;
var target = cljs.core.nth.call(null,vec__24384,(0),null);
var prop = cljs.core.nth.call(null,vec__24384,(1),null);
var _ = cljs.core.nth.call(null,vec__24384,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","access","cljs.analyzer/access",-1639036494),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"field","field",-1302436500),cljs.core.with_meta.call(null,cljs.core.symbol.call(null,cljs.core.name.call(null,prop).substring((1))),cljs.core.meta.call(null,prop))], null);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886),new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923)], null),(function (p__24387){
var vec__24388 = p__24387;
var target = cljs.core.nth.call(null,vec__24388,(0),null);
var prop = cljs.core.nth.call(null,vec__24388,(1),null);
var args = cljs.core.nth.call(null,vec__24388,(2),null);
>>>>>>> 8f3c68a (Initial Commit)
throw (new Error(["Cannot provide arguments ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)," on property access ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop)].join('')));
}));
/**
 * Builds the intermediate method call map used to reason about the parsed form during
 *   compilation.
 */
cljs.analyzer.build_method_call = (function cljs$analyzer$build_method_call(target,meth,args){
if((meth instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","call","cljs.analyzer/call",964149800),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"method","method",55703592),meth,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","call","cljs.analyzer/call",964149800),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"method","method",55703592),cljs.core.first.call(null,meth),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
});
<<<<<<< HEAD
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902),new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)], null),(function (p__24054){
var vec__24055 = p__24054;
var target = cljs.core.nth.call(null,vec__24055,(0),null);
var meth = cljs.core.nth.call(null,vec__24055,(1),null);
var args = cljs.core.nth.call(null,vec__24055,(2),null);
return cljs.analyzer.build_method_call.call(null,target,meth,args);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902),cljs.core.List.EMPTY], null),(function (p__24058){
var vec__24059 = p__24058;
var target = cljs.core.nth.call(null,vec__24059,(0),null);
var meth = cljs.core.nth.call(null,vec__24059,(1),null);
var args = cljs.core.nth.call(null,vec__24059,(2),null);
return cljs.analyzer.build_method_call.call(null,target,meth,args);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923),cljs.core.List.EMPTY], null),(function (p__24062){
var vec__24063 = p__24062;
var target = cljs.core.nth.call(null,vec__24063,(0),null);
var meth_expr = cljs.core.nth.call(null,vec__24063,(1),null);
var _ = cljs.core.nth.call(null,vec__24063,(2),null);
=======
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902),new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)], null),(function (p__24391){
var vec__24392 = p__24391;
var target = cljs.core.nth.call(null,vec__24392,(0),null);
var meth = cljs.core.nth.call(null,vec__24392,(1),null);
var args = cljs.core.nth.call(null,vec__24392,(2),null);
return cljs.analyzer.build_method_call.call(null,target,meth,args);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902),cljs.core.List.EMPTY], null),(function (p__24395){
var vec__24396 = p__24395;
var target = cljs.core.nth.call(null,vec__24396,(0),null);
var meth = cljs.core.nth.call(null,vec__24396,(1),null);
var args = cljs.core.nth.call(null,vec__24396,(2),null);
return cljs.analyzer.build_method_call.call(null,target,meth,args);
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923),cljs.core.List.EMPTY], null),(function (p__24399){
var vec__24400 = p__24399;
var target = cljs.core.nth.call(null,vec__24400,(0),null);
var meth_expr = cljs.core.nth.call(null,vec__24400,(1),null);
var _ = cljs.core.nth.call(null,vec__24400,(2),null);
>>>>>>> 8f3c68a (Initial Commit)
return cljs.analyzer.build_method_call.call(null,target,cljs.core.first.call(null,meth_expr),cljs.core.rest.call(null,meth_expr));
}));
cljs.core._add_method.call(null,cljs.analyzer.build_dot_form,new cljs.core.Keyword(null,"default","default",-1987822328),(function (dot_form){
throw (new Error(["Unknown dot form of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,".",".",1975675962,null),dot_form))," with classification ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.classify_dot_form.call(null,dot_form))].join('')));
}));
cljs.analyzer.analyze_dot = (function cljs$analyzer$analyze_dot(env,target,field,member_PLUS_,form){
var v = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,field,member_PLUS_], null);
<<<<<<< HEAD
var map__24067 = cljs.analyzer.build_dot_form.call(null,v);
var map__24067__$1 = (((((!((map__24067 == null))))?(((((map__24067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24067):map__24067);
var dot_action = cljs.core.get.call(null,map__24067__$1,new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601));
var target__$1 = cljs.core.get.call(null,map__24067__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.call(null,map__24067__$1,new cljs.core.Keyword(null,"method","method",55703592));
var field__$1 = cljs.core.get.call(null,map__24067__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var args = cljs.core.get.call(null,map__24067__$1,new cljs.core.Keyword(null,"args","args",1315556576));
=======
var map__24404 = cljs.analyzer.build_dot_form.call(null,v);
var map__24404__$1 = (((((!((map__24404 == null))))?(((((map__24404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24404):map__24404);
var dot_action = cljs.core.get.call(null,map__24404__$1,new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601));
var target__$1 = cljs.core.get.call(null,map__24404__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.call(null,map__24404__$1,new cljs.core.Keyword(null,"method","method",55703592));
var field__$1 = cljs.core.get.call(null,map__24404__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var args = cljs.core.get.call(null,map__24404__$1,new cljs.core.Keyword(null,"args","args",1315556576));
>>>>>>> 8f3c68a (Initial Commit)
var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var targetexpr = cljs.analyzer.analyze.call(null,enve,target__$1);
var form_meta = cljs.core.meta.call(null,form);
var target_tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(targetexpr);
var prop = (function (){var or__4126__auto__ = field__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return method;
}
})();
var tag = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(form_meta);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = ((cljs.analyzer.js_tag_QMARK_.call(null,target_tag))?cljs.core.vary_meta.call(null,cljs.analyzer.normalize_js_tag.call(null,target_tag),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null),cljs.core.fnil.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Object","Object",61210754,null)], null)),prop):false);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return null;
}
}
})();
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"constructor","constructor",-313397284,null),prop)) && ((!(clojure.string.starts_with_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"cljs$")))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"protocol-method","protocol-method",1794903206).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,prop)))))){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),cljs.core.first.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tag))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"warn-type","warn-type",-790105219),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"property","property",-1114278232),prop], null));
} else {
}

if(cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"js","js",-886355190,null),target_tag)){
if(cljs.core.truth_((function (){var or__4126__auto__ = (target_tag == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"any","any",-948528346,null),"null"], null), null).call(null,target_tag);
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"warn-type","warn-type",-790105219),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"property","property",-1114278232),prop], null));
} else {
}

<<<<<<< HEAD
var vec__24069_24074 = cljs.core.juxt.call(null,cljs.core.butlast,cljs.core.identity).call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tag)));
var pre_SINGLEQUOTE__24075 = cljs.core.nth.call(null,vec__24069_24074,(0),null);
var pre_24076 = cljs.core.nth.call(null,vec__24069_24074,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer.has_extern_QMARK_.call(null,pre_SINGLEQUOTE__24075);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,cljs.analyzer.has_extern_QMARK_.call(null,pre_24076));
=======
var vec__24406_24411 = cljs.core.juxt.call(null,cljs.core.butlast,cljs.core.identity).call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tag)));
var pre_SINGLEQUOTE__24412 = cljs.core.nth.call(null,vec__24406_24411,(0),null);
var pre_24413 = cljs.core.nth.call(null,vec__24406_24411,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer.has_extern_QMARK_.call(null,pre_SINGLEQUOTE__24412);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,cljs.analyzer.has_extern_QMARK_.call(null,pre_24413));
>>>>>>> 8f3c68a (Initial Commit)
} else {
return and__4115__auto__;
}
})())){
<<<<<<< HEAD
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"warn-type","warn-type",-790105219),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.symbol.call(null,"js",clojure.string.join.call(null,".",(function (){var G__24072 = pre_SINGLEQUOTE__24075;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),cljs.core.last.call(null,pre_SINGLEQUOTE__24075))){
return cljs.core.butlast.call(null,G__24072);
} else {
return G__24072;
=======
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"warn-type","warn-type",-790105219),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.symbol.call(null,"js",clojure.string.join.call(null,".",(function (){var G__24409 = pre_SINGLEQUOTE__24412;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),cljs.core.last.call(null,pre_SINGLEQUOTE__24412))){
return cljs.core.butlast.call(null,G__24409);
} else {
return G__24409;
>>>>>>> 8f3c68a (Initial Commit)
}
})())),new cljs.core.Keyword(null,"property","property",-1114278232),prop], null));
} else {
}
} else {
}
} else {
}

if(cljs.analyzer.js_tag_QMARK_.call(null,tag)){
<<<<<<< HEAD
var pre_24077 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tag));
if(cljs.core.truth_(cljs.analyzer.has_extern_QMARK_.call(null,pre_24077))){
} else {
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"externs","externs",221720677)], null),pre_24077),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY);
=======
var pre_24414 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tag));
if(cljs.core.truth_(cljs.analyzer.has_extern_QMARK_.call(null,pre_24414))){
} else {
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"externs","externs",221720677)], null),pre_24414),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY);
>>>>>>> 8f3c68a (Initial Commit)
}
} else {
}

<<<<<<< HEAD
var G__24073 = dot_action;
var G__24073__$1 = (((G__24073 instanceof cljs.core.Keyword))?G__24073.fqn:null);
switch (G__24073__$1) {
=======
var G__24410 = dot_action;
var G__24410__$1 = (((G__24410 instanceof cljs.core.Keyword))?G__24410.fqn:null);
switch (G__24410__$1) {
>>>>>>> 8f3c68a (Initial Commit)
case "cljs.analyzer/access":
var children = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"host-field","host-field",-72662140),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"target","target",253001721),targetexpr,new cljs.core.Keyword(null,"field","field",-1302436500),field__$1,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.analyzer.js_tag_QMARK_.call(null,tag))?(function (){var or__4126__auto__ = cljs.analyzer.js_tag.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tag)),new cljs.core.Keyword(null,"tag","tag",-1290361223));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return tag;
}
})():tag)], null);

break;
case "cljs.analyzer/call":
<<<<<<< HEAD
var argexprs = cljs.core.mapv.call(null,(function (p1__24066_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__24066_SHARP_);
=======
var argexprs = cljs.core.mapv.call(null,(function (p1__24403_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__24403_SHARP_);
>>>>>>> 8f3c68a (Initial Commit)
}),args);
var children = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"args","args",1315556576)], null);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"host-call","host-call",1059629755),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"target","target",253001721),targetexpr,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"args","args",1315556576),argexprs,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.analyzer.js_tag_QMARK_.call(null,tag))?(function (){var or__4126__auto__ = cljs.analyzer.js_tag.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tag)),new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol(null,"js","js",-886355190,null);
}
})():tag)], null);

break;
default:
<<<<<<< HEAD
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24073__$1)].join('')));

}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,".",".",1975675962,null),(function (_,env,p__24079,___$1,___$2){
var vec__24080 = p__24079;
var seq__24081 = cljs.core.seq.call(null,vec__24080);
var first__24082 = cljs.core.first.call(null,seq__24081);
var seq__24081__$1 = cljs.core.next.call(null,seq__24081);
var ___$3 = first__24082;
var first__24082__$1 = cljs.core.first.call(null,seq__24081__$1);
var seq__24081__$2 = cljs.core.next.call(null,seq__24081__$1);
var target = first__24082__$1;
var vec__24083 = seq__24081__$2;
var seq__24084 = cljs.core.seq.call(null,vec__24083);
var first__24085 = cljs.core.first.call(null,seq__24084);
var seq__24084__$1 = cljs.core.next.call(null,seq__24084);
var field = first__24085;
var member_PLUS_ = seq__24084__$1;
var form = vec__24080;
var _STAR_recur_frames_STAR__orig_val__24086 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24087 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24087);

try{return cljs.analyzer.analyze_dot.call(null,env,target,field,member_PLUS_,form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24086);
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24410__$1)].join('')));

}
});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,".",".",1975675962,null),(function (_,env,p__24416,___$1,___$2){
var vec__24417 = p__24416;
var seq__24418 = cljs.core.seq.call(null,vec__24417);
var first__24419 = cljs.core.first.call(null,seq__24418);
var seq__24418__$1 = cljs.core.next.call(null,seq__24418);
var ___$3 = first__24419;
var first__24419__$1 = cljs.core.first.call(null,seq__24418__$1);
var seq__24418__$2 = cljs.core.next.call(null,seq__24418__$1);
var target = first__24419__$1;
var vec__24420 = seq__24418__$2;
var seq__24421 = cljs.core.seq.call(null,vec__24420);
var first__24422 = cljs.core.first.call(null,seq__24421);
var seq__24421__$1 = cljs.core.next.call(null,seq__24421);
var field = first__24422;
var member_PLUS_ = seq__24421__$1;
var form = vec__24417;
var _STAR_recur_frames_STAR__orig_val__24423 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24424 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24424);

try{return cljs.analyzer.analyze_dot.call(null,env,target,field,member_PLUS_,form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24423);
>>>>>>> 8f3c68a (Initial Commit)
}}));
cljs.analyzer.get_js_tag = (function cljs$analyzer$get_js_tag(form){
var form_meta = cljs.core.meta.call(null,form);
var temp__5722__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(form_meta);
if((temp__5722__auto__ == null)){
if(new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(form_meta) === true){
return new cljs.core.Symbol(null,"number","number",-1084057331,null);
} else {
return null;
}
} else {
var tag = temp__5722__auto__;
return tag;
}
});
cljs.analyzer.js_star_interp = (function cljs$analyzer$js_star_interp(env,s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
return (new cljs.core.List(null,s,null,(1),null));
} else {
var end = s.indexOf("}",idx);
var inner = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.subs.call(null,s,((2) + idx),end))));
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,cljs.core.subs.call(null,s,(0),idx),cljs.core.cons.call(null,inner,cljs.analyzer.js_star_interp.call(null,env,cljs.core.subs.call(null,s,(end + (1))))));
}),null,null));
}
});
cljs.analyzer.js_star_seg = (function cljs$analyzer$js_star_seg(s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
return (new cljs.core.List(null,s,null,(1),null));
} else {
var end = s.indexOf("}",idx);
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,cljs.core.subs.call(null,s,(0),idx),cljs.analyzer.js_star_seg.call(null,cljs.core.subs.call(null,s,(end + (1)))));
}),null,null));
}
});
cljs.analyzer.NUMERIC_SET = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"long","long",1469079434,null),"null",new cljs.core.Symbol(null,"double","double",-1769548886,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null"], null), null);
cljs.analyzer.numeric_type_QMARK_ = (function cljs$analyzer$numeric_type_QMARK_(t){
if((t == null)){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),t)){
return true;
} else {
if(cljs.analyzer.js_tag_QMARK_.call(null,t)){
return true;
} else {
if((((t instanceof cljs.core.Symbol)) && ((!((cljs.core.get.call(null,cljs.analyzer.NUMERIC_SET,t) == null)))))){
return true;
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,t)){
return ((cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"number","number",-1084057331,null))) || (cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"long","long",1469079434,null))) || (cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"double","double",-1769548886,null))) || (cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"any","any",-948528346,null))) || (cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"js","js",-886355190,null))));
} else {
return null;
}
}

}
}
}
});
cljs.analyzer.array_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"floats","floats",513591110,null),"null",new cljs.core.Symbol(null,"longs","longs",-1017696020,null),"null",new cljs.core.Symbol(null,"objects","objects",-554722035,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"doubles","doubles",-1517872169,null),"null",new cljs.core.Symbol(null,"chars","chars",545901210,null),"null",new cljs.core.Symbol(null,"ints","ints",-1761239845,null),"null",new cljs.core.Symbol(null,"shorts","shorts",107738238,null),"null",new cljs.core.Symbol(null,"bytes","bytes",-1478569089,null),"null"], null), null);
cljs.analyzer.array_type_QMARK_ = (function cljs$analyzer$array_type_QMARK_(t){
if((t == null)){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),t)){
return true;
} else {
if(cljs.analyzer.js_tag_QMARK_.call(null,t)){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"any","any",-948528346,null),t)){
return true;
} else {
if(cljs.core.contains_QMARK_.call(null,cljs.analyzer.array_types,t)){
return true;
} else {
return cljs.core.boolean$.call(null,((cljs.analyzer.cljs_set_QMARK_.call(null,t))?(function (){var or__4126__auto__ = cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"any","any",-948528346,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.contains_QMARK_.call(null,t,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return cljs.core.some.call(null,cljs.analyzer.array_types,t);
}
}
})():null));

}
}
}
}
}
});
cljs.analyzer.analyze_js_star_args = (function cljs$analyzer$analyze_js_star_args(js_op,env,args){
<<<<<<< HEAD
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__24088,arg){
var vec__24089 = p__24088;
var argexprs = cljs.core.nth.call(null,vec__24089,(0),null);
var env__$1 = cljs.core.nth.call(null,vec__24089,(1),null);
=======
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__24425,arg){
var vec__24426 = p__24425;
var argexprs = cljs.core.nth.call(null,vec__24426,(0),null);
var env__$1 = cljs.core.nth.call(null,vec__24426,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,argexprs,cljs.analyzer.analyze.call(null,env__$1,arg)),((cljs.core._EQ_.call(null,js_op,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)))?cljs.analyzer.set_test_induced_tags.call(null,env__$1,arg):env__$1)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,env], null),args));
});
cljs.analyzer.analyze_js_star_STAR_ = (function cljs$analyzer$analyze_js_star_STAR_(env,jsform,args,form){
var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var form_meta = cljs.core.meta.call(null,form);
var segs = cljs.analyzer.js_star_seg.call(null,jsform);
var tag = cljs.analyzer.get_js_tag.call(null,form);
var js_op = new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(form_meta);
var argexprs = cljs.analyzer.analyze_js_star_args.call(null,js_op,enve,args);
var numeric = new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(form_meta);
var validate = (function (warning_type,valid_types_QMARK_){
<<<<<<< HEAD
var types = cljs.core.map.call(null,(function (p1__24092_SHARP_){
return cljs.analyzer.infer_tag.call(null,env,p1__24092_SHARP_);
=======
var types = cljs.core.map.call(null,(function (p1__24429_SHARP_){
return cljs.analyzer.infer_tag.call(null,env,p1__24429_SHARP_);
>>>>>>> 8f3c68a (Initial Commit)
}),argexprs);
if(cljs.core.truth_(valid_types_QMARK_.call(null,types))){
return null;
} else {
return cljs.analyzer.warning.call(null,warning_type,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"js-op","js-op",-1046277897),js_op,new cljs.core.Keyword(null,"types","types",590030639),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,types)], null));
}
});
var op_match_QMARK_ = (function (sym){
return cljs.core.symbol_identical_QMARK_.call(null,sym,new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(form_meta));
});
if(numeric === true){
<<<<<<< HEAD
validate.call(null,new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),(function (p1__24093_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.analyzer.numeric_type_QMARK_,p1__24093_SHARP_);
=======
validate.call(null,new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),(function (p1__24430_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.analyzer.numeric_type_QMARK_,p1__24430_SHARP_);
>>>>>>> 8f3c68a (Initial Commit)
}));
} else {
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"segs","segs",-1940299576),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"js-op","js-op",-1046277897),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tag","tag",-1290361223)],[argexprs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),numeric,segs,new cljs.core.Keyword(null,"js","js",1768080579),env,js_op,form,tag]);
});
cljs.analyzer.analyze_js_star = (function cljs$analyzer$analyze_js_star(env,jsform,args,form){
<<<<<<< HEAD
var _STAR_recur_frames_STAR__orig_val__24094 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24095 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24095);

try{return cljs.analyzer.analyze_js_star_STAR_.call(null,env,jsform,args,form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24094);
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(function (op,env,p__24096,_,___$1){
var vec__24097 = p__24096;
var seq__24098 = cljs.core.seq.call(null,vec__24097);
var first__24099 = cljs.core.first.call(null,seq__24098);
var seq__24098__$1 = cljs.core.next.call(null,seq__24098);
var ___$2 = first__24099;
var first__24099__$1 = cljs.core.first.call(null,seq__24098__$1);
var seq__24098__$2 = cljs.core.next.call(null,seq__24098__$1);
var jsform = first__24099__$1;
var args = seq__24098__$2;
var form = vec__24097;
=======
var _STAR_recur_frames_STAR__orig_val__24431 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24432 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24432);

try{return cljs.analyzer.analyze_js_star_STAR_.call(null,env,jsform,args,form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24431);
}});
cljs.core._add_method.call(null,cljs.analyzer.parse,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(function (op,env,p__24433,_,___$1){
var vec__24434 = p__24433;
var seq__24435 = cljs.core.seq.call(null,vec__24434);
var first__24436 = cljs.core.first.call(null,seq__24435);
var seq__24435__$1 = cljs.core.next.call(null,seq__24435);
var ___$2 = first__24436;
var first__24436__$1 = cljs.core.first.call(null,seq__24435__$1);
var seq__24435__$2 = cljs.core.next.call(null,seq__24435__$1);
var jsform = first__24436__$1;
var args = seq__24435__$2;
var form = vec__24434;
>>>>>>> 8f3c68a (Initial Commit)
if(typeof jsform === 'string'){
} else {
throw cljs.analyzer.error.call(null,env,"Invalid js* form");
}

if((!((args == null)))){
return cljs.analyzer.analyze_js_star.call(null,env,jsform,args,form);
} else {
var code = cljs.core.apply.call(null,cljs.core.str,cljs.analyzer.js_star_interp.call(null,env,jsform));
var tag = cljs.analyzer.get_js_tag.call(null,form);
var form_meta = cljs.core.meta.call(null,form);
var js_op = new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(form_meta);
var numeric = new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(form_meta);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"js-op","js-op",-1046277897),js_op,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),numeric], null);
}
}));
cljs.analyzer.unsorted_map_QMARK_ = (function cljs$analyzer$unsorted_map_QMARK_(x){
return ((cljs.core.map_QMARK_.call(null,x)) && ((!(cljs.core.sorted_QMARK_.call(null,x)))));
});
/**
 * Mark a form as being analyzed. Assumes x satisfies IMeta. Useful to suppress
 *   warnings that will have been caught by a first compiler pass.
 */
cljs.analyzer.analyzed = (function cljs$analyzer$analyzed(x){
if(cljs.analyzer.unsorted_map_QMARK_.call(null,x)){
return cljs.core.assoc.call(null,x,new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true);
} else {
return cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true);

}
});
/**
 * Returns boolean if the form has already been marked as analyzed.
 */
cljs.analyzer.analyzed_QMARK_ = (function cljs$analyzer$analyzed_QMARK_(x){
return cljs.core.boolean$.call(null,((cljs.analyzer.unsorted_map_QMARK_.call(null,x))?new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162).cljs$core$IFn$_invoke$arity$1(x):new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x))
));
});
cljs.analyzer.all_values_QMARK_ = (function cljs$analyzer$all_values_QMARK_(exprs){
<<<<<<< HEAD
return cljs.core.every_QMARK_.call(null,(function (p1__24100_SHARP_){
return (((p1__24100_SHARP_ == null)) || ((p1__24100_SHARP_ instanceof cljs.core.Symbol)) || (typeof p1__24100_SHARP_ === 'string') || (typeof p1__24100_SHARP_ === 'number') || (p1__24100_SHARP_ === true) || (p1__24100_SHARP_ === false));
=======
return cljs.core.every_QMARK_.call(null,(function (p1__24437_SHARP_){
return (((p1__24437_SHARP_ == null)) || ((p1__24437_SHARP_ instanceof cljs.core.Symbol)) || (typeof p1__24437_SHARP_ === 'string') || (typeof p1__24437_SHARP_ === 'number') || (p1__24437_SHARP_ === true) || (p1__24437_SHARP_ === false));
>>>>>>> 8f3c68a (Initial Commit)
}),exprs);
});
cljs.analyzer.valid_arity_QMARK_ = (function cljs$analyzer$valid_arity_QMARK_(argc,method_params){
return (((method_params == null)) || (cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([argc]),cljs.core.map.call(null,cljs.core.count,method_params)))));
});
cljs.analyzer.record_tag_QMARK_ = (function cljs$analyzer$record_tag_QMARK_(tag){
return cljs.core.boolean$.call(null,(((tag instanceof cljs.core.Symbol))?(((!((cljs.core.namespace.call(null,tag) == null))))?cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.symbol.call(null,cljs.core.namespace.call(null,tag)),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,tag)),new cljs.core.Keyword(null,"record","record",-779106859)], null)):false):false));
});
cljs.analyzer.record_basis = (function cljs$analyzer$record_basis(tag){
var positional_factory = cljs.core.symbol.call(null,["->",cljs.core.name.call(null,tag)].join(''));
var fields = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.symbol.call(null,cljs.core.namespace.call(null,tag)),new cljs.core.Keyword(null,"defs","defs",1398449717),positional_factory,new cljs.core.Keyword(null,"method-params","method-params",-980792179)], null)));
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,fields);
});
cljs.analyzer.record_with_field_QMARK_ = (function cljs$analyzer$record_with_field_QMARK_(tag,field){
return ((cljs.analyzer.record_tag_QMARK_.call(null,tag)) && (cljs.core.contains_QMARK_.call(null,cljs.analyzer.record_basis.call(null,tag),field)));
});
cljs.analyzer.invalid_arity_QMARK_ = (function cljs$analyzer$invalid_arity_QMARK_(argc,method_params,variadic,max_fixed_arity){
if((!(cljs.analyzer.valid_arity_QMARK_.call(null,argc,method_params)))){
var or__4126__auto__ = cljs.core.not.call(null,variadic);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = variadic;
if(cljs.core.truth_(and__4115__auto__)){
return (argc < max_fixed_arity);
} else {
return and__4115__auto__;
}
}
} else {
return false;
}
});
<<<<<<< HEAD
cljs.analyzer.parse_invoke_STAR_ = (function cljs$analyzer$parse_invoke_STAR_(env,p__24102){
var vec__24103 = p__24102;
var seq__24104 = cljs.core.seq.call(null,vec__24103);
var first__24105 = cljs.core.first.call(null,seq__24104);
var seq__24104__$1 = cljs.core.next.call(null,seq__24104);
var f = first__24105;
var args = seq__24104__$1;
var form = vec__24103;
=======
cljs.analyzer.parse_invoke_STAR_ = (function cljs$analyzer$parse_invoke_STAR_(env,p__24439){
var vec__24440 = p__24439;
var seq__24441 = cljs.core.seq.call(null,vec__24440);
var first__24442 = cljs.core.first.call(null,seq__24441);
var seq__24441__$1 = cljs.core.next.call(null,seq__24441);
var f = first__24442;
var args = seq__24441__$1;
var form = vec__24440;
>>>>>>> 8f3c68a (Initial Commit)
var enve = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var fexpr = cljs.analyzer.analyze.call(null,enve,f);
var argc = cljs.core.count.call(null,args);
var fn_var_QMARK_ = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"js-fn-var","js-fn-var",-565665358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr));
}
})();
var kw_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(fexpr));
var cur_ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var HO_invoke_QMARK_ = ((cljs.core.boolean$.call(null,cljs.analyzer._STAR_cljs_static_fns_STAR_)) && (cljs.core.not.call(null,fn_var_QMARK_)) && ((!(cljs.analyzer.js_tag_QMARK_.call(null,f)))) && ((!(kw_QMARK_))) && ((!(cljs.analyzer.analyzed_QMARK_.call(null,f)))));
var bind_f_expr_QMARK_ = ((HO_invoke_QMARK_) && ((!((f instanceof cljs.core.Symbol)))));
var bind_args_QMARK_ = ((HO_invoke_QMARK_) && ((!(cljs.analyzer.all_values_QMARK_.call(null,args)))));
if(fn_var_QMARK_){
<<<<<<< HEAD
var map__24106_24111 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr);
var map__24106_24112__$1 = (((((!((map__24106_24111 == null))))?(((((map__24106_24111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24106_24111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24106_24111):map__24106_24111);
var variadic_24113 = cljs.core.get.call(null,map__24106_24112__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var max_fixed_arity_24114 = cljs.core.get.call(null,map__24106_24112__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var method_params_24115 = cljs.core.get.call(null,map__24106_24112__$1,new cljs.core.Keyword(null,"method-params","method-params",-980792179));
var name_24116 = cljs.core.get.call(null,map__24106_24112__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ns_24117 = cljs.core.get.call(null,map__24106_24112__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var macro_24118 = cljs.core.get.call(null,map__24106_24112__$1,new cljs.core.Keyword(null,"macro","macro",-867863404));
if(cljs.core.truth_((((!(((goog.string.endsWith(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur_ns),"$macros")) && (cljs.core.symbol_identical_QMARK_.call(null,cur_ns,ns_24117)) && (macro_24118 === true)))))?cljs.analyzer.invalid_arity_QMARK_.call(null,argc,method_params_24115,variadic_24113,max_fixed_arity_24114):false))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name_24116,new cljs.core.Keyword(null,"argc","argc",-1452839519),argc], null));
=======
var map__24443_24448 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr);
var map__24443_24449__$1 = (((((!((map__24443_24448 == null))))?(((((map__24443_24448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24443_24448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24443_24448):map__24443_24448);
var variadic_24450 = cljs.core.get.call(null,map__24443_24449__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var max_fixed_arity_24451 = cljs.core.get.call(null,map__24443_24449__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var method_params_24452 = cljs.core.get.call(null,map__24443_24449__$1,new cljs.core.Keyword(null,"method-params","method-params",-980792179));
var name_24453 = cljs.core.get.call(null,map__24443_24449__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ns_24454 = cljs.core.get.call(null,map__24443_24449__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var macro_24455 = cljs.core.get.call(null,map__24443_24449__$1,new cljs.core.Keyword(null,"macro","macro",-867863404));
if(cljs.core.truth_((((!(((goog.string.endsWith(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur_ns),"$macros")) && (cljs.core.symbol_identical_QMARK_.call(null,cur_ns,ns_24454)) && (macro_24455 === true)))))?cljs.analyzer.invalid_arity_QMARK_.call(null,argc,method_params_24452,variadic_24450,max_fixed_arity_24451):false))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name_24453,new cljs.core.Keyword(null,"argc","argc",-1452839519),argc], null));
>>>>>>> 8f3c68a (Initial Commit)
} else {
}
} else {
}

if(((kw_QMARK_) && ((!(((((1) === argc)) || (((2) === argc)))))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.first.call(null,form),new cljs.core.Keyword(null,"argc","argc",-1452839519),argc], null));
} else {
}

<<<<<<< HEAD
var deprecated_QMARK__24119 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr));
var no_warn_QMARK__24120 = new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form));
if(((cljs.core.boolean$.call(null,deprecated_QMARK__24119)) && ((!(cljs.core.boolean$.call(null,no_warn_QMARK__24120)))))){
=======
var deprecated_QMARK__24456 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr));
var no_warn_QMARK__24457 = new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form));
if(((cljs.core.boolean$.call(null,deprecated_QMARK__24456)) && ((!(cljs.core.boolean$.call(null,no_warn_QMARK__24457)))))){
>>>>>>> 8f3c68a (Initial Commit)
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fexpr","fexpr",-122857150),fexpr], null));
} else {
}

if((!((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr)) == null)))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fexpr","fexpr",-122857150),fexpr], null));
} else {
}

if(((bind_args_QMARK_) || (bind_f_expr_QMARK_))){
var arg_syms = ((bind_args_QMARK_)?cljs.core.take.call(null,argc,cljs.core.repeatedly.call(null,cljs.core.gensym)):null);
var f_sym = ((bind_f_expr_QMARK_)?cljs.core.gensym.call(null,"fexpr__"):null);
<<<<<<< HEAD
var bindings = (function (){var G__24108 = cljs.core.PersistentVector.EMPTY;
var G__24108__$1 = ((bind_args_QMARK_)?cljs.core.into.call(null,G__24108,cljs.core.interleave.call(null,arg_syms,args)):G__24108);
if(bind_f_expr_QMARK_){
return cljs.core.conj.call(null,G__24108__$1,f_sym,cljs.analyzer.analyzed.call(null,f));
} else {
return G__24108__$1;
=======
var bindings = (function (){var G__24445 = cljs.core.PersistentVector.EMPTY;
var G__24445__$1 = ((bind_args_QMARK_)?cljs.core.into.call(null,G__24445,cljs.core.interleave.call(null,arg_syms,args)):G__24445);
if(bind_f_expr_QMARK_){
return cljs.core.conj.call(null,G__24445__$1,f_sym,cljs.analyzer.analyzed.call(null,f));
} else {
return G__24445__$1;
>>>>>>> 8f3c68a (Initial Commit)
}
})();
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form));
return cljs.analyzer.analyze.call(null,env,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,bindings)))),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.analyzer.analyzed.call(null,((bind_f_expr_QMARK_)?f_sym:f)),null,(1),null)),((bind_args_QMARK_)?arg_syms:args)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null)),null,(1),null))))));
} else {
<<<<<<< HEAD
var ana_expr = (function (p1__24101_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__24101_SHARP_);
=======
var ana_expr = (function (p1__24438_SHARP_){
return cljs.analyzer.analyze.call(null,enve,p1__24438_SHARP_);
>>>>>>> 8f3c68a (Initial Commit)
});
var argexprs = cljs.core.mapv.call(null,ana_expr,args);
if((((((f instanceof cljs.core.Keyword)) && ((cljs.core.namespace.call(null,f) == null)))) && (((1) === cljs.core.count.call(null,args))) && (cljs.analyzer.record_with_field_QMARK_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,argexprs)),cljs.core.symbol.call(null,cljs.core.name.call(null,f)))))){
var field_access_form = cljs.core.list_STAR_.call(null,cljs.core.symbol.call(null,[".-",cljs.core.name.call(null,f)].join('')),args);
<<<<<<< HEAD
var _STAR_cljs_warnings_STAR__orig_val__24109 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__24110 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__24110);

try{return cljs.analyzer.analyze.call(null,env,field_access_form);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__24109);
=======
var _STAR_cljs_warnings_STAR__orig_val__24446 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__24447 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__24447);

try{return cljs.analyzer.analyze.call(null,env,field_access_form);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__24446);
>>>>>>> 8f3c68a (Initial Commit)
}} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"fn","fn",-1175266204),fexpr,new cljs.core.Keyword(null,"args","args",1315556576),argexprs,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null)], null);
}
}
});
cljs.analyzer.parse_invoke = (function cljs$analyzer$parse_invoke(env,form){
<<<<<<< HEAD
var _STAR_recur_frames_STAR__orig_val__24121 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24122 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24122);

try{return cljs.analyzer.parse_invoke_STAR_.call(null,env,form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24121);
}});
cljs.analyzer.desugar_dotted_expr = (function cljs$analyzer$desugar_dotted_expr(p__24123){
var map__24124 = p__24123;
var map__24124__$1 = (((((!((map__24124 == null))))?(((((map__24124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24124):map__24124);
var expr = map__24124__$1;
var op = cljs.core.get.call(null,map__24124__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var G__24126 = op;
var G__24126__$1 = (((G__24126 instanceof cljs.core.Keyword))?G__24126.fqn:null);
switch (G__24126__$1) {
=======
var _STAR_recur_frames_STAR__orig_val__24458 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24459 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24459);

try{return cljs.analyzer.parse_invoke_STAR_.call(null,env,form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24458);
}});
cljs.analyzer.desugar_dotted_expr = (function cljs$analyzer$desugar_dotted_expr(p__24460){
var map__24461 = p__24460;
var map__24461__$1 = (((((!((map__24461 == null))))?(((((map__24461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24461):map__24461);
var expr = map__24461__$1;
var op = cljs.core.get.call(null,map__24461__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var G__24463 = op;
var G__24463__$1 = (((G__24463 instanceof cljs.core.Keyword))?G__24463.fqn:null);
switch (G__24463__$1) {
>>>>>>> 8f3c68a (Initial Commit)
case "var":
case "local":
if(cljs.analyzer.dotted_symbol_QMARK_.call(null,cljs.core.symbol.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(expr))))){
var s = cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(expr));
var idx = s.lastIndexOf(".");
var _ = ((cljs.core.not_EQ_.call(null,(idx + (1)),((s).length)))?null:(function(){throw (new Error("Assert failed: (not= (inc idx) (count s))"))})());
var prefix = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,cljs.core.namespace.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(expr)),cljs.core.subs.call(null,s,(0),idx)),cljs.core.meta.call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(expr)));
var field = cljs.core.symbol.call(null,cljs.core.subs.call(null,s,(idx + (1))));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(expr))){
} else {
throw (new Error("Assert failed: (not (:const-expr expr))"));
}

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"host-field","host-field",-72662140),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(expr),new cljs.core.Keyword(null,"form","form",-1624062471),(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,prefix,(new cljs.core.List(null,field,null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"target","target",253001721),cljs.analyzer.desugar_dotted_expr.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,expr,new cljs.core.Keyword(null,"name","name",1843675177),prefix,new cljs.core.Keyword(null,"form","form",-1624062471),prefix),new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"name","name",1843675177)], null),prefix),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"context","context",-830191113)], null),new cljs.core.Keyword(null,"expr","expr",745722291))),new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(expr),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721)], null)], null);
} else {
return expr;
}

break;
default:
return expr;

}
});
/**
 * Finds the var associated with sym
 */
cljs.analyzer.analyze_symbol = (function cljs$analyzer$analyze_symbol(env,sym){
if(new cljs.core.Keyword(null,"quoted?","quoted?",1464649621).cljs$core$IFn$_invoke$arity$1(env)){
cljs.analyzer.register_constant_BANG_.call(null,env,sym);

return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"val","val",128701612),sym,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),sym,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)], null));
} else {
<<<<<<< HEAD
var map__24128 = cljs.core.meta.call(null,sym);
var map__24128__$1 = (((((!((map__24128 == null))))?(((((map__24128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24128):map__24128);
var line = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24128__$1,new cljs.core.Keyword(null,"column","column",2078222095));
=======
var map__24465 = cljs.core.meta.call(null,sym);
var map__24465__$1 = (((((!((map__24465 == null))))?(((((map__24465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24465):map__24465);
var line = cljs.core.get.call(null,map__24465__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24465__$1,new cljs.core.Keyword(null,"column","column",2078222095));
>>>>>>> 8f3c68a (Initial Commit)
var env__$1 = (((!((line == null))))?cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"line","line",212345235),line):env);
var env__$2 = (((!((column == null))))?cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"column","column",2078222095),column):env__$1);
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env__$2,new cljs.core.Keyword(null,"form","form",-1624062471),sym], null);
var lcls = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env__$2);
var temp__5722__auto__ = cljs.analyzer.handle_symbol_local.call(null,sym,cljs.core.get.call(null,lcls,sym));
if((temp__5722__auto__ == null)){
var sym_meta = cljs.core.meta.call(null,sym);
var sym_ns = cljs.core.namespace.call(null,sym);
var cur_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env__$2)));
var sym__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = sym_ns;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not_EQ_.call(null,sym_ns,"cljs.core")) && (goog.string.endsWith(cur_ns,"$macros")) && ((!(goog.string.endsWith(sym_ns,"$macros")))) && (cljs.core._EQ_.call(null,sym_ns,cljs.core.subs.call(null,cur_ns,(0),(((cur_ns).length) - (7))))));
} else {
return and__4115__auto__;
}
})())?cljs.core.symbol.call(null,[sym_ns,"$macros"].join(''),cljs.core.name.call(null,sym)):sym);
var info = (((!(cljs.core.contains_QMARK_.call(null,sym_meta,new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162)))))?cljs.analyzer.resolve_existing_var.call(null,env__$2,sym__$1):cljs.analyzer.resolve_var.call(null,env__$2,sym__$1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(info))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(info)),"\n","(:op info)"].join('')));
}

return cljs.analyzer.desugar_dotted_expr.call(null,(((!(new cljs.core.Keyword(null,"def-var","def-var",-698214377).cljs$core$IFn$_invoke$arity$1(env__$2) === true)))?cljs.core.merge.call(null,cljs.core.assoc.call(null,ret,new cljs.core.Keyword(null,"info","info",-317069002),info),cljs.core.select_keys.call(null,info,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null)),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5720__auto__)){
var const_expr = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292),const_expr], null);
} else {
return null;
}
})()):(function (){var info__$1 = cljs.analyzer.resolve_var.call(null,env__$2,sym__$1);
return cljs.core.merge.call(null,cljs.core.assoc.call(null,ret,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"info","info",-317069002),info__$1),cljs.core.select_keys.call(null,info__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null)));
})()));
} else {
var lb = temp__5722__auto__;
return cljs.core.merge.call(null,cljs.core.assoc.call(null,ret,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword(null,"info","info",-317069002),lb),((cljs.core.map_QMARK_.call(null,lb))?cljs.core.select_keys.call(null,lb,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword(null,"arg-id","arg-id",-767177868),new cljs.core.Keyword(null,"variadic?","variadic?",584179762),new cljs.core.Keyword(null,"init","init",-1875481434)], null)):null));
}
}
});
cljs.analyzer.excluded_QMARK_ = (function cljs$analyzer$excluded_QMARK_(env,sym){
return (((!((cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),sym) == null)))) || ((!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),sym) == null)))));
});
cljs.analyzer.used_QMARK_ = (function cljs$analyzer$used_QMARK_(env,sym){
return (((!((cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym) == null)))) || ((!((cljs.analyzer.gets.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym) == null)))));
});
cljs.analyzer.get_expander_ns = (function cljs$analyzer$get_expander_ns(env,nstr){
var res = (function (){var or__4126__auto__ = cljs.analyzer.resolve_macro_ns_alias.call(null,env,nstr,null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.analyzer.resolve_ns_alias.call(null,env,nstr,null);
}
})();
var nstr__$1 = (((!((res == null))))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(res):nstr);
if(("clojure.core" === nstr__$1)){
return cljs.core.find_macros_ns.call(null,cljs.analyzer.CLJS_CORE_MACROS_SYM);
} else {
if(("clojure.repl" === nstr__$1)){
return cljs.core.find_macros_ns.call(null,new cljs.core.Symbol(null,"cljs.repl","cljs.repl",1767065658,null));
} else {
if(goog.string.contains(nstr__$1,".")){
return cljs.core.find_macros_ns.call(null,cljs.core.symbol.call(null,nstr__$1));
} else {
<<<<<<< HEAD
var G__24130 = env;
var G__24130__$1 = (((G__24130 == null))?null:new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(G__24130));
var G__24130__$2 = (((G__24130__$1 == null))?null:new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(G__24130__$1));
var G__24130__$3 = (((G__24130__$2 == null))?null:cljs.core.get.call(null,G__24130__$2,cljs.core.symbol.call(null,nstr__$1)));
if((G__24130__$3 == null)){
return null;
} else {
return cljs.core.find_macros_ns.call(null,G__24130__$3);
=======
var G__24467 = env;
var G__24467__$1 = (((G__24467 == null))?null:new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(G__24467));
var G__24467__$2 = (((G__24467__$1 == null))?null:new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(G__24467__$1));
var G__24467__$3 = (((G__24467__$2 == null))?null:cljs.core.get.call(null,G__24467__$2,cljs.core.symbol.call(null,nstr__$1)));
if((G__24467__$3 == null)){
return null;
} else {
return cljs.core.find_macros_ns.call(null,G__24467__$3);
>>>>>>> 8f3c68a (Initial Commit)
}

}
}
}
});
cljs.analyzer.get_expander_STAR_ = (function cljs$analyzer$get_expander_STAR_(sym,env){
if((((!((cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783),sym) == null)))) || (((cljs.analyzer.excluded_QMARK_.call(null,env,sym)) && ((!(cljs.analyzer.used_QMARK_.call(null,env,sym)))))))){
return null;
} else {
var nstr = cljs.core.namespace.call(null,sym);
if((!((nstr == null)))){
var ns = cljs.analyzer.get_expander_ns.call(null,env,nstr);
if((!((ns == null)))){
return ns.findInternedVar(cljs.core.symbol.call(null,cljs.core.name.call(null,sym)));
} else {
return null;
}
} else {
if((!((cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),sym) == null)))){
var qualified_symbol = cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),sym);
var nsym = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_symbol));
var sym__$1 = cljs.core.symbol.call(null,cljs.core.name.call(null,qualified_symbol));
return cljs.core.find_macros_ns.call(null,nsym).findInternedVar(sym__$1);
} else {
var nsym = cljs.analyzer.gets.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym);
if((((!((nsym == null)))) && ((nsym instanceof cljs.core.Symbol)))){
return cljs.core.find_macros_ns.call(null,nsym).findInternedVar(sym);
} else {
return cljs.core.find_macros_ns.call(null,cljs.analyzer.CLJS_CORE_MACROS_SYM).findInternedVar(sym);
}

}
}
}
});
/**
 * Given a sym, a symbol identifying a macro, and env, an analysis environment
 * return the corresponding Clojure macroexpander.
 */
cljs.analyzer.get_expander = (function cljs$analyzer$get_expander(sym,env){
var mvar = cljs.analyzer.get_expander_STAR_.call(null,sym,env);
if((((!((mvar == null)))) && (mvar.isMacro()))){
return mvar;
} else {
return null;
}
});
<<<<<<< HEAD
var cached_var_24131 = (new cljs.core.Delay((function (){
=======
var cached_var_24468 = (new cljs.core.Delay((function (){
>>>>>>> 8f3c68a (Initial Commit)
return cljs.core.get.call(null,cljs.core.ns_interns_STAR_.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null)),new cljs.core.Symbol(null,"macroexpand-check","macroexpand-check",699092091,null));
}),null));
cljs.analyzer.get_macroexpand_check_var = (function cljs$analyzer$get_macroexpand_check_var(){
if((!((cljs.core.find_ns_obj.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null)) == null)))){
<<<<<<< HEAD
return cljs.core.deref.call(null,cached_var_24131);
=======
return cljs.core.deref.call(null,cached_var_24468);
>>>>>>> 8f3c68a (Initial Commit)
} else {
return null;
}
});
cljs.analyzer.var__GT_sym = (function cljs$analyzer$var__GT_sym(var$){
return var$.sym;
});
cljs.analyzer.do_macroexpand_check = (function cljs$analyzer$do_macroexpand_check(env,form,mac_var){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"spec-skip-macros","spec-skip-macros",-645015958).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var mchk = cljs.analyzer.get_macroexpand_check_var.call(null);
if((!((mchk == null)))){
try{return mchk.call(null,mac_var,cljs.core.next.call(null,form));
<<<<<<< HEAD
}catch (e24132){var e = e24132;
=======
}catch (e24469){var e = e24469;
>>>>>>> 8f3c68a (Initial Commit)
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373),cljs.analyzer.var__GT_sym.call(null,mac_var)),e);
}} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer.check_macro_arity = (function cljs$analyzer$check_macro_arity(mac_var,form){
var mac_sym = mac_var.sym;
var temp__5720__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.symbol.call(null,cljs.core.namespace.call(null,mac_sym)),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,mac_sym))], null));
if(cljs.core.truth_(temp__5720__auto__)){
<<<<<<< HEAD
var map__24134 = temp__5720__auto__;
var map__24134__$1 = (((((!((map__24134 == null))))?(((((map__24134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24134):map__24134);
var variadic_QMARK_ = cljs.core.get.call(null,map__24134__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var max_fixed_arity = cljs.core.get.call(null,map__24134__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var method_params = cljs.core.get.call(null,map__24134__$1,new cljs.core.Keyword(null,"method-params","method-params",-980792179));
var argc = cljs.core.count.call(null,cljs.core.rest.call(null,form));
var offset = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.ffirst.call(null,method_params)))?(2):(0));
if(cljs.core.truth_(cljs.analyzer.invalid_arity_QMARK_.call(null,argc,cljs.core.map.call(null,(function (p1__24133_SHARP_){
return cljs.core.nthrest.call(null,p1__24133_SHARP_,offset);
=======
var map__24471 = temp__5720__auto__;
var map__24471__$1 = (((((!((map__24471 == null))))?(((((map__24471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24471):map__24471);
var variadic_QMARK_ = cljs.core.get.call(null,map__24471__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var max_fixed_arity = cljs.core.get.call(null,map__24471__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var method_params = cljs.core.get.call(null,map__24471__$1,new cljs.core.Keyword(null,"method-params","method-params",-980792179));
var argc = cljs.core.count.call(null,cljs.core.rest.call(null,form));
var offset = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.ffirst.call(null,method_params)))?(2):(0));
if(cljs.core.truth_(cljs.analyzer.invalid_arity_QMARK_.call(null,argc,cljs.core.map.call(null,(function (p1__24470_SHARP_){
return cljs.core.nthrest.call(null,p1__24470_SHARP_,offset);
>>>>>>> 8f3c68a (Initial Commit)
}),method_params),variadic_QMARK_,(cljs.core.truth_(max_fixed_arity)?(max_fixed_arity - offset):null)))){
throw (new Error(cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"argc","argc",-1452839519),argc,new cljs.core.Keyword(null,"name","name",1843675177),mac_sym], null))));
} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer.macroexpand_1_STAR_ = (function cljs$analyzer$macroexpand_1_STAR_(env,form){
var op = cljs.core.first.call(null,form);
if(cljs.core.contains_QMARK_.call(null,cljs.analyzer.specials,op)){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),op)){
cljs.analyzer.do_macroexpand_check.call(null,env,form,cljs.analyzer.get_expander.call(null,new cljs.core.Symbol("cljs.core","ns-special-form","cljs.core/ns-special-form",1585185745,null),env));
} else {
}

return form;
} else {
var temp__5722__auto__ = (((op instanceof cljs.core.Symbol))?cljs.analyzer.get_expander.call(null,op,env):null);
if((temp__5722__auto__ == null)){
if((op instanceof cljs.core.Symbol)){
var opname = cljs.core.str.cljs$core$IFn$_invoke$arity$1(op);
if(("." === opname.charAt((0)))){
<<<<<<< HEAD
var vec__24136 = cljs.core.next.call(null,form);
var seq__24137 = cljs.core.seq.call(null,vec__24136);
var first__24138 = cljs.core.first.call(null,seq__24137);
var seq__24137__$1 = cljs.core.next.call(null,seq__24137);
var target = first__24138;
var args = seq__24137__$1;
=======
var vec__24473 = cljs.core.next.call(null,form);
var seq__24474 = cljs.core.seq.call(null,vec__24473);
var first__24475 = cljs.core.first.call(null,seq__24474);
var seq__24474__$1 = cljs.core.next.call(null,seq__24474);
var target = first__24475;
var args = seq__24474__$1;
>>>>>>> 8f3c68a (Initial Commit)
return cljs.core.with_meta.call(null,cljs.core.list_STAR_.call(null,cljs.analyzer.DOT_SYM,target,cljs.core.symbol.call(null,cljs.core.subs.call(null,opname,(1))),args),cljs.core.meta.call(null,form));
} else {
if(("." === opname.charAt((opname.length - (1))))){
return cljs.core.with_meta.call(null,cljs.core.list_STAR_.call(null,cljs.analyzer.NEW_SYM,cljs.core.symbol.call(null,cljs.core.subs.call(null,opname,(0),(((opname).length) - (1)))),cljs.core.next.call(null,form)),cljs.core.meta.call(null,form));
} else {
return form;

}
}
} else {
return form;
}
} else {
var mac_var = temp__5722__auto__;
cljs.analyzer.do_macroexpand_check.call(null,env,form,mac_var);

var form_SINGLEQUOTE_ = (function (){try{cljs.analyzer.check_macro_arity.call(null,mac_var,form);

return cljs.core.apply.call(null,cljs.core.deref.call(null,mac_var),form,env,cljs.core.rest.call(null,form));
<<<<<<< HEAD
}catch (e24139){var e = e24139;
=======
}catch (e24476){var e = e24476;
>>>>>>> 8f3c68a (Initial Commit)
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"macroexpansion","macroexpansion",706274075),cljs.analyzer.var__GT_sym.call(null,mac_var)),e);
}})();
if(cljs.analyzer.cljs_seq_QMARK_.call(null,form_SINGLEQUOTE_)){
var sym_SINGLEQUOTE_ = cljs.core.first.call(null,form_SINGLEQUOTE_);
var sym = cljs.core.first.call(null,form);
if(cljs.core.symbol_identical_QMARK_.call(null,sym_SINGLEQUOTE_,cljs.analyzer.JS_STAR_SYM)){
var sym__$1 = (((!((cljs.core.namespace.call(null,sym) == null))))?sym:cljs.core.symbol.call(null,"cljs.core",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)));
var js_op = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-op","js-op",-1046277897),sym__$1], null);
var numeric = (function (){var mac_var_ns = cljs.core.symbol.call(null,cljs.core.namespace.call(null,mac_var.sym));
var mac_var_name = cljs.core.symbol.call(null,cljs.core.name.call(null,mac_var.sym));
return cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),mac_var_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),mac_var_name,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword("cljs.analyzer","numeric","cljs.analyzer/numeric",1415704188)], null));
})();
var js_op__$1 = ((numeric === true)?cljs.core.assoc.call(null,js_op,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),true):js_op);
return cljs.core.vary_meta.call(null,form_SINGLEQUOTE_,cljs.core.merge,js_op__$1);
} else {
return form_SINGLEQUOTE_;
}
} else {
return form_SINGLEQUOTE_;
}
}
}
});
/**
 * Given a env, an analysis environment, and form, a ClojureScript form,
 * macroexpand the form once.
 */
cljs.analyzer.macroexpand_1 = (function cljs$analyzer$macroexpand_1(env,form){
try{return cljs.analyzer.macroexpand_1_STAR_.call(null,env,form);
<<<<<<< HEAD
}catch (e24140){var err__23112__auto__ = e24140;
if(cljs.analyzer.has_error_data_QMARK_.call(null,err__23112__auto__)){
throw err__23112__auto__;
} else {
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__23112__auto__)){
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),err__23112__auto__);
} else {
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),cljs.analyzer.error.call(null,env,err__23112__auto__.message,err__23112__auto__));
=======
}catch (e24477){var err__23449__auto__ = e24477;
if(cljs.analyzer.has_error_data_QMARK_.call(null,err__23449__auto__)){
throw err__23449__auto__;
} else {
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__23449__auto__)){
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),err__23449__auto__);
} else {
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),cljs.analyzer.error.call(null,env,err__23449__auto__.message,err__23449__auto__));
>>>>>>> 8f3c68a (Initial Commit)

}
}
}});
cljs.analyzer.analyze_seq_STAR_ = (function cljs$analyzer$analyze_seq_STAR_(op,env,form,name,opts){
if(cljs.core.contains_QMARK_.call(null,cljs.analyzer.specials,op)){
return cljs.analyzer.parse.call(null,op,env,form,name,opts);
} else {
return cljs.analyzer.parse_invoke.call(null,env,form);
}
});
cljs.analyzer.analyze_seq_STAR__wrap = (function cljs$analyzer$analyze_seq_STAR__wrap(op,env,form,name,opts){
try{return cljs.analyzer.analyze_seq_STAR_.call(null,op,env,form,name,opts);
<<<<<<< HEAD
}catch (e24141){var err__23112__auto__ = e24141;
if(cljs.analyzer.has_error_data_QMARK_.call(null,err__23112__auto__)){
throw err__23112__auto__;
} else {
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__23112__auto__)){
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),err__23112__auto__);
} else {
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),cljs.analyzer.error.call(null,env,err__23112__auto__.message,err__23112__auto__));
=======
}catch (e24478){var err__23449__auto__ = e24478;
if(cljs.analyzer.has_error_data_QMARK_.call(null,err__23449__auto__)){
throw err__23449__auto__;
} else {
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__23449__auto__)){
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),err__23449__auto__);
} else {
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),cljs.analyzer.error.call(null,env,err__23449__auto__.message,err__23449__auto__));
>>>>>>> 8f3c68a (Initial Commit)

}
}
}});
cljs.analyzer.analyze_seq = (function cljs$analyzer$analyze_seq(var_args){
<<<<<<< HEAD
var G__24143 = arguments.length;
switch (G__24143) {
=======
var G__24480 = arguments.length;
switch (G__24480) {
>>>>>>> 8f3c68a (Initial Commit)
case 3:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze_seq.call(null,env,form,name,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
}));

(cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
if(new cljs.core.Keyword(null,"quoted?","quoted?",1464649621).cljs$core$IFn$_invoke$arity$1(env)){
return cljs.analyzer.analyze_list.call(null,env,form);
} else {
var line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form));
var line__$1 = (((line == null))?new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env):line);
var col = new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,form));
var col__$1 = (((col == null))?new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(env):col);
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"line","line",212345235),line__$1,new cljs.core.Keyword(null,"column","column",2078222095),col__$1);
var op = cljs.core.first.call(null,form);
if((op == null)){
throw cljs.analyzer.error.call(null,env__$1,"Can't call nil");
} else {
}

var mform = cljs.analyzer.macroexpand_1.call(null,env__$1,form);
if((form === mform)){
return cljs.analyzer.analyze_seq_STAR__wrap.call(null,op,env__$1,form,name,opts);
} else {
return cljs.analyzer.analyze.call(null,env__$1,mform,name,opts);
}
}
}));

(cljs.analyzer.analyze_seq.cljs$lang$maxFixedArity = 4);

cljs.analyzer.analyze_map = (function cljs$analyzer$analyze_map(env,form){
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
<<<<<<< HEAD
var ks = (function (){var _STAR_recur_frames_STAR__orig_val__24147 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24148 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24148);

try{return cljs.core.mapv.call(null,(function (p1__24145_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__24145_SHARP_);
}),cljs.core.keys.call(null,form));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24147);
}})();
var vs = (function (){var _STAR_recur_frames_STAR__orig_val__24149 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24150 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24150);

try{return cljs.core.mapv.call(null,(function (p1__24146_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__24146_SHARP_);
}),cljs.core.vals.call(null,form));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24149);
=======
var ks = (function (){var _STAR_recur_frames_STAR__orig_val__24484 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24485 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24485);

try{return cljs.core.mapv.call(null,(function (p1__24482_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__24482_SHARP_);
}),cljs.core.keys.call(null,form));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24484);
}})();
var vs = (function (){var _STAR_recur_frames_STAR__orig_val__24486 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24487 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24487);

try{return cljs.core.mapv.call(null,(function (p1__24483_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__24483_SHARP_);
}),cljs.core.vals.call(null,form));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24486);
>>>>>>> 8f3c68a (Initial Commit)
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"keys","keys",1068423698),ks,new cljs.core.Keyword(null,"vals","vals",768058733),vs,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"vals","vals",768058733)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","IMap","cljs.core/IMap",1407777598,null)], null));
});
cljs.analyzer.analyze_list = (function cljs$analyzer$analyze_list(env,form){
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
<<<<<<< HEAD
var items = (function (){var _STAR_recur_frames_STAR__orig_val__24152 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24153 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24153);

try{return cljs.core.mapv.call(null,(function (p1__24151_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__24151_SHARP_);
}),form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24152);
=======
var items = (function (){var _STAR_recur_frames_STAR__orig_val__24489 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24490 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24490);

try{return cljs.core.mapv.call(null,(function (p1__24488_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__24488_SHARP_);
}),form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24489);
>>>>>>> 8f3c68a (Initial Commit)
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","IList","cljs.core/IList",1015168964,null)], null));
});
cljs.analyzer.analyze_vector = (function cljs$analyzer$analyze_vector(env,form){
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
<<<<<<< HEAD
var items = (function (){var _STAR_recur_frames_STAR__orig_val__24155 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24156 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24156);

try{return cljs.core.mapv.call(null,(function (p1__24154_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__24154_SHARP_);
}),form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24155);
=======
var items = (function (){var _STAR_recur_frames_STAR__orig_val__24492 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24493 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24493);

try{return cljs.core.mapv.call(null,(function (p1__24491_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__24491_SHARP_);
}),form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24492);
>>>>>>> 8f3c68a (Initial Commit)
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","IVector","cljs.core/IVector",1711112835,null)], null));
});
cljs.analyzer.analyze_set = (function cljs$analyzer$analyze_set(env,form){
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
<<<<<<< HEAD
var items = (function (){var _STAR_recur_frames_STAR__orig_val__24158 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24159 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24159);

try{return cljs.core.mapv.call(null,(function (p1__24157_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__24157_SHARP_);
}),form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24158);
=======
var items = (function (){var _STAR_recur_frames_STAR__orig_val__24495 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24496 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24496);

try{return cljs.core.mapv.call(null,(function (p1__24494_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__24494_SHARP_);
}),form);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24495);
>>>>>>> 8f3c68a (Initial Commit)
}})();
return cljs.analyzer.analyze_wrap_meta.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","ISet","cljs.core/ISet",2003412810,null)], null));
});
cljs.analyzer.analyze_js_value = (function cljs$analyzer$analyze_js_value(env,form){
var val = form.val;
var expr_env = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
if(cljs.core.map_QMARK_.call(null,val)){
var keys = cljs.core.vec.call(null,cljs.core.keys.call(null,val));
<<<<<<< HEAD
var vals = (function (){var _STAR_recur_frames_STAR__orig_val__24162 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24163 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24163);

try{return cljs.core.mapv.call(null,(function (p1__24160_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__24160_SHARP_);
}),cljs.core.vals.call(null,val));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24162);
}})();
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-object","js-object",1830199158),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"keys","keys",1068423698),keys,new cljs.core.Keyword(null,"vals","vals",768058733),vals,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vals","vals",768058733)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null)], null);
} else {
var items = (function (){var _STAR_recur_frames_STAR__orig_val__24164 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24165 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24165);

try{return cljs.core.mapv.call(null,(function (p1__24161_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__24161_SHARP_);
}),val);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24164);
=======
var vals = (function (){var _STAR_recur_frames_STAR__orig_val__24499 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24500 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24500);

try{return cljs.core.mapv.call(null,(function (p1__24497_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__24497_SHARP_);
}),cljs.core.vals.call(null,val));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24499);
}})();
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-object","js-object",1830199158),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"keys","keys",1068423698),keys,new cljs.core.Keyword(null,"vals","vals",768058733),vals,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vals","vals",768058733)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null)], null);
} else {
var items = (function (){var _STAR_recur_frames_STAR__orig_val__24501 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24502 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24502);

try{return cljs.core.mapv.call(null,(function (p1__24498_SHARP_){
return cljs.analyzer.analyze.call(null,expr_env,p1__24498_SHARP_);
}),val);
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24501);
>>>>>>> 8f3c68a (Initial Commit)
}})();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-array","js-array",-1210185421),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null)], null);
}
});
cljs.analyzer.record_ns_PLUS_name = (function cljs$analyzer$record_ns_PLUS_name(x){
return cljs.core.map.call(null,cljs.core.symbol,clojure.string.split.call(null,cljs.core.pr_str.call(null,cljs.core.type.call(null,x)),/\//));
});
cljs.analyzer.analyze_record = (function cljs$analyzer$analyze_record(env,x){
<<<<<<< HEAD
var _items_ = (function (){var _STAR_recur_frames_STAR__orig_val__24170 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24171 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24171);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24170);
}})();
var vec__24167 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__24167,(0),null);
var name = cljs.core.nth.call(null,vec__24167,(1),null);
=======
var _items_ = (function (){var _STAR_recur_frames_STAR__orig_val__24507 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_recur_frames_STAR__temp_val__24508 = cljs.core.cons.call(null,null,cljs.analyzer._STAR_recur_frames_STAR_);
(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__temp_val__24508);

try{return cljs.analyzer.analyze.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
}finally {(cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR__orig_val__24507);
}})();
var vec__24504 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__24504,(0),null);
var name = cljs.core.nth.call(null,vec__24504,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),x,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))], null);
});
cljs.analyzer.elide_reader_meta = (function cljs$analyzer$elide_reader_meta(m){
return cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"source","source",-433931539));
});
cljs.analyzer.elide_analyzer_meta = (function cljs$analyzer$elide_analyzer_meta(m){
return cljs.core.dissoc.call(null,m,new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162));
});
cljs.analyzer.elide_irrelevant_meta = (function cljs$analyzer$elide_irrelevant_meta(m){
return cljs.analyzer.elide_analyzer_meta.call(null,cljs.analyzer.elide_reader_meta.call(null,m));
});
cljs.analyzer.analyze_wrap_meta = (function cljs$analyzer$analyze_wrap_meta(expr){
var form = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(expr);
var m = cljs.analyzer.elide_irrelevant_meta.call(null,cljs.core.meta.call(null,form));
if((!((cljs.core.seq.call(null,m) == null)))){
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(expr);
var expr__$1 = cljs.core.assoc_in.call(null,expr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"context","context",-830191113)], null),new cljs.core.Keyword(null,"expr","expr",745722291));
var meta_expr = cljs.analyzer.analyze_map.call(null,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(expr__$1),m);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"meta","meta",1499536964),meta_expr,new cljs.core.Keyword(null,"expr","expr",745722291),expr__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"expr","expr",745722291)], null)], null);
} else {
return expr;
}
});
<<<<<<< HEAD
cljs.analyzer.infer_type = (function cljs$analyzer$infer_type(env,p__24173,_){
var map__24174 = p__24173;
var map__24174__$1 = (((((!((map__24174 == null))))?(((((map__24174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24174):map__24174);
var ast = map__24174__$1;
var tag = cljs.core.get.call(null,map__24174__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
if((((tag == null)) || (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"function","function",-486723946,null),tag)))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"methods","methods",453930866),(function (ms){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__24172_SHARP_){
return cljs.analyzer.infer_type.call(null,env,p1__24172_SHARP_,_);
=======
cljs.analyzer.infer_type = (function cljs$analyzer$infer_type(env,p__24510,_){
var map__24511 = p__24510;
var map__24511__$1 = (((((!((map__24511 == null))))?(((((map__24511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24511):map__24511);
var ast = map__24511__$1;
var tag = cljs.core.get.call(null,map__24511__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
if((((tag == null)) || (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"function","function",-486723946,null),tag)))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"methods","methods",453930866),(function (ms){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__24509_SHARP_){
return cljs.analyzer.infer_type.call(null,env,p1__24509_SHARP_,_);
>>>>>>> 8f3c68a (Initial Commit)
})),ms);
}));
} else {
var temp__5722__auto__ = cljs.analyzer.infer_tag.call(null,env,ast);
if((temp__5722__auto__ == null)){
return ast;
} else {
var tag__$1 = temp__5722__auto__;
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag__$1);
}
}
} else {
return ast;
}
});
cljs.analyzer.repl_self_require_QMARK_ = (function cljs$analyzer$repl_self_require_QMARK_(env,deps){
var and__4115__auto__ = new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.analyzer._STAR_cljs_ns_STAR_]),deps);
} else {
return and__4115__auto__;
}
});
<<<<<<< HEAD
cljs.analyzer.invoke_arg_type_validators = (function (){var aget_validator = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valid?","valid?",-212412379),(function (p1__24176_SHARP_){
return ((cljs.analyzer.array_type_QMARK_.call(null,cljs.core.first.call(null,p1__24176_SHARP_))) && (cljs.core.every_QMARK_.call(null,cljs.analyzer.numeric_type_QMARK_,cljs.core.rest.call(null,p1__24176_SHARP_))));
}),new cljs.core.Keyword(null,"warning-type","warning-type",1711103595),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236)], null);
var aset_validator = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valid?","valid?",-212412379),(function (p1__24177_SHARP_){
return ((cljs.analyzer.array_type_QMARK_.call(null,cljs.core.first.call(null,p1__24177_SHARP_))) && (cljs.core.every_QMARK_.call(null,cljs.analyzer.numeric_type_QMARK_,cljs.core.butlast.call(null,cljs.core.rest.call(null,p1__24177_SHARP_)))));
}),new cljs.core.Keyword(null,"warning-type","warning-type",1711103595),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236)], null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),aget_validator,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),aset_validator,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),aget_validator,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),aset_validator], null);
})();
cljs.analyzer.check_invoke_arg_types = (function cljs$analyzer$check_invoke_arg_types(env,p__24178,opts){
var map__24179 = p__24178;
var map__24179__$1 = (((((!((map__24179 == null))))?(((((map__24179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24179):map__24179);
var ast = map__24179__$1;
var op = cljs.core.get.call(null,map__24179__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
if((((!(cljs.analyzer.analyzed_QMARK_.call(null,ast)))) && (cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),op)))){
var temp__5724__auto___24186 = cljs.core.find.call(null,cljs.analyzer.invoke_arg_type_validators,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(ast))));
if((temp__5724__auto___24186 == null)){
} else {
var vec__24181_24187 = temp__5724__auto___24186;
var name_24188 = cljs.core.nth.call(null,vec__24181_24187,(0),null);
var map__24184_24189 = cljs.core.nth.call(null,vec__24181_24187,(1),null);
var map__24184_24190__$1 = (((((!((map__24184_24189 == null))))?(((((map__24184_24189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24184_24189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24184_24189):map__24184_24189);
var valid_QMARK__24191 = cljs.core.get.call(null,map__24184_24190__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var warning_type_24192 = cljs.core.get.call(null,map__24184_24190__$1,new cljs.core.Keyword(null,"warning-type","warning-type",1711103595));
var types_24193 = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(valid_QMARK__24191.call(null,types_24193))){
} else {
cljs.analyzer.warning.call(null,warning_type_24192,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name_24188,new cljs.core.Keyword(null,"types","types",590030639),types_24193], null));
=======
cljs.analyzer.invoke_arg_type_validators = (function (){var aget_validator = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valid?","valid?",-212412379),(function (p1__24513_SHARP_){
return ((cljs.analyzer.array_type_QMARK_.call(null,cljs.core.first.call(null,p1__24513_SHARP_))) && (cljs.core.every_QMARK_.call(null,cljs.analyzer.numeric_type_QMARK_,cljs.core.rest.call(null,p1__24513_SHARP_))));
}),new cljs.core.Keyword(null,"warning-type","warning-type",1711103595),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236)], null);
var aset_validator = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"valid?","valid?",-212412379),(function (p1__24514_SHARP_){
return ((cljs.analyzer.array_type_QMARK_.call(null,cljs.core.first.call(null,p1__24514_SHARP_))) && (cljs.core.every_QMARK_.call(null,cljs.analyzer.numeric_type_QMARK_,cljs.core.butlast.call(null,cljs.core.rest.call(null,p1__24514_SHARP_)))));
}),new cljs.core.Keyword(null,"warning-type","warning-type",1711103595),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236)], null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),aget_validator,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),aset_validator,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),aget_validator,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),aset_validator], null);
})();
cljs.analyzer.check_invoke_arg_types = (function cljs$analyzer$check_invoke_arg_types(env,p__24515,opts){
var map__24516 = p__24515;
var map__24516__$1 = (((((!((map__24516 == null))))?(((((map__24516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24516):map__24516);
var ast = map__24516__$1;
var op = cljs.core.get.call(null,map__24516__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
if((((!(cljs.analyzer.analyzed_QMARK_.call(null,ast)))) && (cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),op)))){
var temp__5724__auto___24523 = cljs.core.find.call(null,cljs.analyzer.invoke_arg_type_validators,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(ast))));
if((temp__5724__auto___24523 == null)){
} else {
var vec__24518_24524 = temp__5724__auto___24523;
var name_24525 = cljs.core.nth.call(null,vec__24518_24524,(0),null);
var map__24521_24526 = cljs.core.nth.call(null,vec__24518_24524,(1),null);
var map__24521_24527__$1 = (((((!((map__24521_24526 == null))))?(((((map__24521_24526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24521_24526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24521_24526):map__24521_24526);
var valid_QMARK__24528 = cljs.core.get.call(null,map__24521_24527__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var warning_type_24529 = cljs.core.get.call(null,map__24521_24527__$1,new cljs.core.Keyword(null,"warning-type","warning-type",1711103595));
var types_24530 = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(valid_QMARK__24528.call(null,types_24530))){
} else {
cljs.analyzer.warning.call(null,warning_type_24529,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name_24525,new cljs.core.Keyword(null,"types","types",590030639),types_24530], null));
>>>>>>> 8f3c68a (Initial Commit)
}
}
} else {
}

return cljs.analyzer.analyzed.call(null,ast);
});
cljs.analyzer.analyze_form = (function cljs$analyzer$analyze_form(env,form,name,opts){
if((form instanceof cljs.core.Symbol)){
return cljs.analyzer.analyze_symbol.call(null,env,form);
} else {
if(((cljs.analyzer.cljs_seq_QMARK_.call(null,form)) && ((!((cljs.core.seq.call(null,form) == null)))))){
return cljs.analyzer.analyze_seq.call(null,env,form,name,opts);
} else {
if(cljs.core.record_QMARK_.call(null,form)){
return cljs.analyzer.analyze_record.call(null,env,form);
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,form)){
return cljs.analyzer.analyze_map.call(null,env,form);
} else {
if(cljs.analyzer.cljs_vector_QMARK_.call(null,form)){
return cljs.analyzer.analyze_vector.call(null,env,form);
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,form)){
return cljs.analyzer.analyze_set.call(null,env,form);
} else {
if((form instanceof cljs.core.Keyword)){
return cljs.analyzer.analyze_keyword.call(null,env,form);
} else {
if((form instanceof cljs.tagged_literals.JSValue)){
return cljs.analyzer.analyze_js_value.call(null,env,form);
} else {
var tag = (((form == null))?cljs.analyzer.CLJ_NIL_SYM:((typeof form === 'number')?cljs.analyzer.NUMBER_SYM:((typeof form === 'string')?cljs.analyzer.STRING_SYM:((form === true)?cljs.analyzer.BOOLEAN_SYM:((form === false)?cljs.analyzer.BOOLEAN_SYM:((cljs.core._EQ_.call(null,cljs.core.List.EMPTY,form))?new cljs.core.Symbol("cljs.core","IList","cljs.core/IList",1015168964,null):null))))));
<<<<<<< HEAD
var G__24194 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"val","val",128701612),form,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form], null);
if(cljs.core.truth_(tag)){
return cljs.core.assoc.call(null,G__24194,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag);
} else {
return G__24194;
=======
var G__24531 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"val","val",128701612),form,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form], null);
if(cljs.core.truth_(tag)){
return cljs.core.assoc.call(null,G__24531,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag);
} else {
return G__24531;
>>>>>>> 8f3c68a (Initial Commit)
}

}
}
}
}
}
}
}
}
});
cljs.analyzer.default_passes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.infer_type,cljs.analyzer.check_invoke_arg_types], null);
cljs.analyzer.analyze_STAR_ = (function cljs$analyzer$analyze_STAR_(env,form,name,opts){
var passes = cljs.analyzer._STAR_passes_STAR_;
var passes__$1 = (((passes == null))?cljs.analyzer.default_passes:passes);
var form__$1 = (((form instanceof cljs.core.LazySeq))?((cljs.core.seq.call(null,form))?form:cljs.core.List.EMPTY):form);
var ast = cljs.analyzer.analyze_form.call(null,env,form__$1,name,opts);
return cljs.core.reduce.call(null,(function (ast__$1,pass){
return pass.call(null,env,ast__$1,opts);
}),ast,passes__$1);
});
/**
 * Given an environment, a map containing {:locals (mapping of names to bindings), :context
 *   (one of :statement, :expr, :return), :ns (a symbol naming the
 *   compilation ns)}, and form, returns an expression object (a map
 *   containing at least :form, :op and :env keys). If expr has any (immediately)
 *   nested exprs, must have a :children entry. This must be a vector of keywords naming
 *   the immediately nested fields mapped to an expr or vector of exprs. This will
 *   facilitate code walking without knowing the details of the op set.
 */
cljs.analyzer.analyze = (function cljs$analyzer$analyze(var_args){
<<<<<<< HEAD
var G__24196 = arguments.length;
switch (G__24196) {
=======
var G__24533 = arguments.length;
switch (G__24533) {
>>>>>>> 8f3c68a (Initial Commit)
case 2:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (env,form){
return cljs.analyzer.analyze.call(null,env,form,null);
}));

(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze.call(null,env,form,name,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
}));

(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
try{if(cljs.analyzer.analyzed_QMARK_.call(null,form)){
<<<<<<< HEAD
var _STAR_cljs_warnings_STAR__orig_val__24198 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__24199 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__24199);

try{return cljs.analyzer.analyze_STAR_.call(null,env,form,name,opts);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__24198);
}} else {
return cljs.analyzer.analyze_STAR_.call(null,env,form,name,opts);
}
}catch (e24197){var err__23112__auto__ = e24197;
if(cljs.analyzer.has_error_data_QMARK_.call(null,err__23112__auto__)){
throw err__23112__auto__;
} else {
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__23112__auto__)){
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),err__23112__auto__);
} else {
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),cljs.analyzer.error.call(null,env,err__23112__auto__.message,err__23112__auto__));
=======
var _STAR_cljs_warnings_STAR__orig_val__24535 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__24536 = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__24536);

try{return cljs.analyzer.analyze_STAR_.call(null,env,form,name,opts);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__24535);
}} else {
return cljs.analyzer.analyze_STAR_.call(null,env,form,name,opts);
}
}catch (e24534){var err__23449__auto__ = e24534;
if(cljs.analyzer.has_error_data_QMARK_.call(null,err__23449__auto__)){
throw err__23449__auto__;
} else {
if(cljs.analyzer.analysis_error_QMARK_.call(null,err__23449__auto__)){
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),err__23449__auto__);
} else {
throw cljs.core.ex_info.call(null,null,cljs.analyzer.error_data.call(null,env,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),cljs.analyzer.error.call(null,env,err__23449__auto__.message,err__23449__auto__));
>>>>>>> 8f3c68a (Initial Commit)

}
}
}}));

(cljs.analyzer.analyze.cljs$lang$maxFixedArity = 4);

/**
 * Given a compiler state and a map from fully qualified symbols to constant
 *   EDN values, update the compiler state marking these vars as const to support
 *   direct substitution of these vars in source.
 */
cljs.analyzer.add_consts = (function cljs$analyzer$add_consts(compiler_state,constants_map){
return cljs.core.reduce_kv.call(null,(function (compiler_state__$1,sym,value){
var ns = cljs.core.symbol.call(null,cljs.core.namespace.call(null,sym));
<<<<<<< HEAD
return cljs.core.update_in.call(null,compiler_state__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,sym))], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292),(function (){var _STAR_passes_STAR__orig_val__24201 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_passes_STAR__temp_val__24202 = cljs.core.conj.call(null,cljs.analyzer._STAR_passes_STAR_,cljs.analyzer.replace_env_pass.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null)));
(cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__24202);

try{return cljs.analyzer.analyze.call(null,cljs.analyzer.empty_env.call(null),value);
}finally {(cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__24201);
=======
return cljs.core.update_in.call(null,compiler_state__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,sym))], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292),(function (){var _STAR_passes_STAR__orig_val__24538 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_passes_STAR__temp_val__24539 = cljs.core.conj.call(null,cljs.analyzer._STAR_passes_STAR_,cljs.analyzer.replace_env_pass.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null)));
(cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__24539);

try{return cljs.analyzer.analyze.call(null,cljs.analyzer.empty_env.call(null),value);
}finally {(cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__24538);
>>>>>>> 8f3c68a (Initial Commit)
}})()], null));
}),compiler_state,constants_map);
});
cljs.analyzer.resolve_symbol = (function cljs$analyzer$resolve_symbol(sym){
if(((cljs.core.not.call(null,cljs.core.namespace.call(null,sym))) && (cljs.analyzer.dotted_symbol_QMARK_.call(null,sym)))){
return sym;
} else {
<<<<<<< HEAD
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1((function (){var _STAR_private_var_access_nowarn_STAR__orig_val__24203 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__24204 = true;
(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__24204);

try{return cljs.analyzer.resolve_var.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_)),sym);
}finally {(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__24203);
}})());
}
});
var registry_ref_24205 = (new cljs.core.Delay((function (){
return cljs.core.get.call(null,cljs.core.ns_interns_STAR_.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",-896343615,null)),new cljs.core.Symbol(null,"registry-ref","registry-ref",1975823941,null));
}),null));
var speced_vars_24206 = (new cljs.core.Delay((function (){
=======
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1((function (){var _STAR_private_var_access_nowarn_STAR__orig_val__24540 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__24541 = true;
(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__24541);

try{return cljs.analyzer.resolve_var.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_)),sym);
}finally {(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__24540);
}})());
}
});
var registry_ref_24542 = (new cljs.core.Delay((function (){
return cljs.core.get.call(null,cljs.core.ns_interns_STAR_.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",-896343615,null)),new cljs.core.Symbol(null,"registry-ref","registry-ref",1975823941,null));
}),null));
var speced_vars_24543 = (new cljs.core.Delay((function (){
>>>>>>> 8f3c68a (Initial Commit)
return cljs.core.get.call(null,cljs.core.ns_interns_STAR_.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",-896343615,null)),new cljs.core.Symbol(null,"-speced-vars","-speced-vars",1758723085,null));
}),null));
cljs.analyzer.get_spec_vars = (function cljs$analyzer$get_spec_vars(){
if((!((cljs.core.find_ns_obj.call(null,new cljs.core.Symbol(null,"cljs.spec.alpha$macros","cljs.spec.alpha$macros",-896343615,null)) == null)))){
<<<<<<< HEAD
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"registry-ref","registry-ref",335292414),cljs.core.deref.call(null,registry_ref_24205),new cljs.core.Keyword(null,"speced-vars","speced-vars",-1813125988),cljs.core.deref.call(null,speced_vars_24206)], null);
=======
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"registry-ref","registry-ref",335292414),cljs.core.deref.call(null,registry_ref_24542),new cljs.core.Keyword(null,"speced-vars","speced-vars",-1813125988),cljs.core.deref.call(null,speced_vars_24543)], null);
>>>>>>> 8f3c68a (Initial Commit)
} else {
return null;
}
});
/**
 * Dumps registered speced vars for a given namespace into the compiler
 *   environment.
 */
cljs.analyzer.dump_specs = (function cljs$analyzer$dump_specs(ns){
var spec_vars = cljs.analyzer.get_spec_vars.call(null);
var ns_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null),cljs.core.merge,(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"registry-ref","registry-ref",335292414).cljs$core$IFn$_invoke$arity$1(spec_vars);
if(cljs.core.truth_(temp__5720__auto__)){
var registry_ref = temp__5720__auto__;
<<<<<<< HEAD
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","registry-ref","cljs.spec/registry-ref",-71711915),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p__24207){
var vec__24208 = p__24207;
var k = cljs.core.nth.call(null,vec__24208,(0),null);
var _ = cljs.core.nth.call(null,vec__24208,(1),null);
=======
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","registry-ref","cljs.spec/registry-ref",-71711915),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p__24544){
var vec__24545 = p__24544;
var k = cljs.core.nth.call(null,vec__24545,(0),null);
var _ = cljs.core.nth.call(null,vec__24545,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return cljs.core._EQ_.call(null,ns_str,cljs.core.namespace.call(null,k));
})),cljs.core.deref.call(null,cljs.core.deref.call(null,registry_ref)))], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"speced-vars","speced-vars",-1813125988).cljs$core$IFn$_invoke$arity$1(spec_vars);
if(cljs.core.truth_(temp__5720__auto__)){
var speced_vars = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","speced-vars","cljs.spec/speced-vars",1010010387),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (v){
return ((cljs.core._EQ_.call(null,ns_str,cljs.core.namespace.call(null,v))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Keyword(null,"fdef-ns","fdef-ns",-1602124254).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))));
})),cljs.core.deref.call(null,cljs.core.deref.call(null,speced_vars)))], null);
} else {
return null;
}
})());
});
/**
 * Registers speced vars found in a namespace analysis cache.
 */
cljs.analyzer.register_specs = (function cljs$analyzer$register_specs(cached_ns){
<<<<<<< HEAD
var map__24211 = cljs.analyzer.get_spec_vars.call(null);
var map__24211__$1 = (((((!((map__24211 == null))))?(((((map__24211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24211):map__24211);
var registry_ref = cljs.core.get.call(null,map__24211__$1,new cljs.core.Keyword(null,"registry-ref","registry-ref",335292414));
var speced_vars = cljs.core.get.call(null,map__24211__$1,new cljs.core.Keyword(null,"speced-vars","speced-vars",-1813125988));
var temp__5720__auto___24213 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","registry-ref","cljs.spec/registry-ref",-71711915).cljs$core$IFn$_invoke$arity$1(cached_ns));
if(temp__5720__auto___24213){
var registry_24214 = temp__5720__auto___24213;
if(cljs.core.truth_(registry_ref)){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,registry_ref),cljs.core.into,registry_24214);
=======
var map__24548 = cljs.analyzer.get_spec_vars.call(null);
var map__24548__$1 = (((((!((map__24548 == null))))?(((((map__24548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24548):map__24548);
var registry_ref = cljs.core.get.call(null,map__24548__$1,new cljs.core.Keyword(null,"registry-ref","registry-ref",335292414));
var speced_vars = cljs.core.get.call(null,map__24548__$1,new cljs.core.Keyword(null,"speced-vars","speced-vars",-1813125988));
var temp__5720__auto___24550 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","registry-ref","cljs.spec/registry-ref",-71711915).cljs$core$IFn$_invoke$arity$1(cached_ns));
if(temp__5720__auto___24550){
var registry_24551 = temp__5720__auto___24550;
if(cljs.core.truth_(registry_ref)){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,registry_ref),cljs.core.into,registry_24551);
>>>>>>> 8f3c68a (Initial Commit)
} else {
}
} else {
}

var temp__5720__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","speced-vars","cljs.spec/speced-vars",1010010387).cljs$core$IFn$_invoke$arity$1(cached_ns));
if(temp__5720__auto__){
var vars = temp__5720__auto__;
if(cljs.core.truth_(speced_vars)){
return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,speced_vars),cljs.core.into,vars);
} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer.analyze_form_seq = (function cljs$analyzer$analyze_form_seq(var_args){
<<<<<<< HEAD
var G__24216 = arguments.length;
switch (G__24216) {
=======
var G__24553 = arguments.length;
switch (G__24553) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$1 = (function (forms){
return cljs.analyzer.analyze_form_seq.call(null,forms,(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
}));

(cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$2 = (function (forms,opts){
return cljs.analyzer.analyze_form_seq.call(null,forms,opts,false);
}));

(cljs.analyzer.analyze_form_seq.cljs$core$IFn$_invoke$arity$3 = (function (forms,opts,return_last_QMARK_){
var env = cljs.core.assoc.call(null,cljs.analyzer.empty_env.call(null),new cljs.core.Keyword(null,"build-options","build-options",1183685779),opts);
<<<<<<< HEAD
var _STAR_file_defs_STAR__orig_val__24217 = cljs.analyzer._STAR_file_defs_STAR_;
var _STAR_cljs_ns_STAR__orig_val__24218 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_file_STAR__orig_val__24219 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_alias_map_STAR__orig_val__24220 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_file_defs_STAR__temp_val__24221 = null;
var _STAR_cljs_ns_STAR__temp_val__24222 = new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
var _STAR_cljs_file_STAR__temp_val__24223 = null;
var _STAR_alias_map_STAR__temp_val__24224 = (function (){var or__4126__auto__ = cljs.tools.reader._STAR_alias_map_STAR_;
=======
var _STAR_file_defs_STAR__orig_val__24554 = cljs.analyzer._STAR_file_defs_STAR_;
var _STAR_cljs_ns_STAR__orig_val__24555 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_file_STAR__orig_val__24556 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_alias_map_STAR__orig_val__24557 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_file_defs_STAR__temp_val__24558 = null;
var _STAR_cljs_ns_STAR__temp_val__24559 = new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
var _STAR_cljs_file_STAR__temp_val__24560 = null;
var _STAR_alias_map_STAR__temp_val__24561 = (function (){var or__4126__auto__ = cljs.tools.reader._STAR_alias_map_STAR_;
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
<<<<<<< HEAD
(cljs.analyzer._STAR_file_defs_STAR_ = _STAR_file_defs_STAR__temp_val__24221);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__24222);

(cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__24223);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__24224);
=======
(cljs.analyzer._STAR_file_defs_STAR_ = _STAR_file_defs_STAR__temp_val__24558);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__24559);

(cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__24560);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__24561);
>>>>>>> 8f3c68a (Initial Commit)

try{var ns = null;
var forms__$1 = forms;
var last_ast = null;
while(true){
if((!((forms__$1 == null)))){
var form = cljs.core.first.call(null,forms__$1);
var env__$1 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var ast = cljs.analyzer.analyze.call(null,env__$1,form,null,opts);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"ns","ns",441598760))){
<<<<<<< HEAD
var G__24226 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast);
var G__24227 = cljs.core.next.call(null,forms__$1);
var G__24228 = ast;
ns = G__24226;
forms__$1 = G__24227;
last_ast = G__24228;
continue;
} else {
var G__24229 = ns;
var G__24230 = cljs.core.next.call(null,forms__$1);
var G__24231 = ast;
ns = G__24229;
forms__$1 = G__24230;
last_ast = G__24231;
=======
var G__24563 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast);
var G__24564 = cljs.core.next.call(null,forms__$1);
var G__24565 = ast;
ns = G__24563;
forms__$1 = G__24564;
last_ast = G__24565;
continue;
} else {
var G__24566 = ns;
var G__24567 = cljs.core.next.call(null,forms__$1);
var G__24568 = ast;
ns = G__24566;
forms__$1 = G__24567;
last_ast = G__24568;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
if(cljs.core.truth_(return_last_QMARK_)){
return last_ast;
} else {
return ns;
}
}
break;
}
<<<<<<< HEAD
}finally {(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__24220);

(cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__24219);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__24218);

(cljs.analyzer._STAR_file_defs_STAR_ = _STAR_file_defs_STAR__orig_val__24217);
=======
}finally {(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__24557);

(cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__24556);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__24555);

(cljs.analyzer._STAR_file_defs_STAR_ = _STAR_file_defs_STAR__orig_val__24554);
>>>>>>> 8f3c68a (Initial Commit)
}}));

(cljs.analyzer.analyze_form_seq.cljs$lang$maxFixedArity = 3);

/**
 * Ensures that a non-nil defs map exists in the compiler state for a given
 *   ns. (A non-nil defs map signifies that the namespace has been analyzed.)
 */
cljs.analyzer.ensure_defs = (function cljs$analyzer$ensure_defs(ns){
<<<<<<< HEAD
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),(function (p1__24232_SHARP_){
var or__4126__auto__ = p1__24232_SHARP_;
=======
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),(function (p1__24569_SHARP_){
var or__4126__auto__ = p1__24569_SHARP_;
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
});

<<<<<<< HEAD
//# sourceMappingURL=analyzer.js.map?rel=1602979374700
=======
//# sourceMappingURL=analyzer.js.map?rel=1608004499966
>>>>>>> 8f3c68a (Initial Commit)
