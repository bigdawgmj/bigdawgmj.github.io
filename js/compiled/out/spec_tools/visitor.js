// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('spec_tools.visitor');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.core');
goog.require('spec_tools.parse');
goog.require('spec_tools.impl');
goog.require('spec_tools.form');
spec_tools.visitor.spec_dispatch = (function spec_tools$visitor$spec_dispatch(spec,accept,options){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.spec.alpha.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (spec instanceof cljs.core.Keyword);
}
}
})())){
var form = cljs.spec.alpha.form.call(null,spec);
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818))){
if(cljs.core.seq_QMARK_.call(null,form)){
return spec_tools.impl.normalize_symbol.call(null,cljs.core.first.call(null,form));
} else {
return spec_tools.visitor.spec_dispatch.call(null,form,accept,options);
}
} else {
return spec;
}
} else {
if(cljs.core.set_QMARK_.call(null,spec)){
return new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415);
} else {
if(cljs.core.seq_QMARK_.call(null,spec)){
return spec_tools.impl.normalize_symbol.call(null,cljs.core.first.call(null,spec_tools.impl.strip_fn_if_needed.call(null,spec)));
} else {
if((spec instanceof cljs.core.Symbol)){
return spec_tools.impl.normalize_symbol.call(null,spec);
} else {
return spec_tools.impl.normalize_symbol.call(null,spec_tools.form.resolve_form.call(null,spec));

}
}
}
}
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.visitor !== 'undefined') && (typeof spec_tools.visitor.visit_spec !== 'undefined')){
} else {
spec_tools.visitor.visit_spec = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"spec-tools.visitor","visit-spec"),spec_tools.visitor.spec_dispatch,new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
/**
 * Walk a spec definition. Takes 2-3 arguments, the spec and the accept
 *   function, and optionally a options map, and returns the result of
 *   calling the accept function. Options map can be used to pass in context-
 *   specific information to to sub-visits & accepts.
 * 
 *   The accept function is called with 4 arguments: the dispatch term for the
 *   spec (see below), the spec itself, vector with the results of
 *   recursively walking the children of the spec and the options map.
 * 
 *   The dispatch term is one of the following
 *   * if the spec is a function call: a fully qualified symbol for the function
 *  with the following exceptions:
 *  - cljs.core symbols are converted to clojure.core symbols
 *  - cljs.spec.alpha symbols are converted to clojure.spec.alpha symbols
 *   * if the spec is a set: :spec-tools.visitor/set
 *   * otherwise: the spec itself
 */
spec_tools.visitor.visit = (function spec_tools$visitor$visit(var_args){
var G__27173 = arguments.length;
switch (G__27173) {
case 2:
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$2 = (function (spec,accept){
return spec_tools.visitor.visit.call(null,spec,accept,null);
}));

(spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3 = (function (spec,accept,p__27174){
var map__27175 = p__27174;
var map__27175__$1 = (((((!((map__27175 == null))))?(((((map__27175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27175):map__27175);
var options = map__27175__$1;
var visited = cljs.core.get.call(null,map__27175__$1,new cljs.core.Keyword("spec-tools.visitor","visited","spec-tools.visitor/visited",820668632));
if(cljs.core.not.call(null,cljs.core.get.call(null,visited,spec))){
var options__$1 = (((spec instanceof cljs.core.Keyword))?cljs.core.update.call(null,options,new cljs.core.Keyword("spec-tools.visitor","visited","spec-tools.visitor/visited",820668632),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),spec):options);
return spec_tools.visitor.visit_spec.call(null,spec,accept,options__$1);
} else {
return spec_tools.visitor.visit_spec.call(null,null,accept,options);
}
}));

(spec_tools.visitor.visit.cljs$lang$maxFixedArity = 3);

cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415),(function (spec,accept,options){
return accept.call(null,new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415),spec,cljs.core.vec.call(null,(((spec instanceof cljs.core.Keyword))?spec_tools.impl.extract_form.call(null,spec):spec)),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null),(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys.call(null,spec_tools.impl.extract_form.call(null,spec));
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",-90227326,null),spec,cljs.core.mapv.call(null,(function (p1__27178_SHARP_){
return spec_tools.visitor.visit.call(null,p1__27178_SHARP_,accept,options);
}),keys),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null),(function (spec,accept,options){
var vec__27180 = spec_tools.impl.extract_form.call(null,spec);
var seq__27181 = cljs.core.seq.call(null,vec__27180);
var first__27182 = cljs.core.first.call(null,seq__27181);
var seq__27181__$1 = cljs.core.next.call(null,seq__27181);
var _ = first__27182;
var map__27183 = seq__27181__$1;
var map__27183__$1 = (((((!((map__27183 == null))))?(((((map__27183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27183):map__27183);
var inner_spec_map = map__27183__$1;
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","or","clojure.spec.alpha/or",434904251,null),spec,cljs.core.mapv.call(null,(function (p1__27179_SHARP_){
return spec_tools.visitor.visit.call(null,p1__27179_SHARP_,accept,options);
}),cljs.core.vals.call(null,inner_spec_map)),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null),(function (spec,accept,options){
var vec__27186 = spec_tools.impl.extract_form.call(null,spec);
var seq__27187 = cljs.core.seq.call(null,vec__27186);
var first__27188 = cljs.core.first.call(null,seq__27187);
var seq__27187__$1 = cljs.core.next.call(null,seq__27187);
var _ = first__27188;
var inner_specs = seq__27187__$1;
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","and","clojure.spec.alpha/and",-843882543,null),spec,cljs.core.mapv.call(null,(function (p1__27185_SHARP_){
return spec_tools.visitor.visit.call(null,p1__27185_SHARP_,accept,options);
}),inner_specs),options);
}));
spec_tools.visitor.visit_merge = (function spec_tools$visitor$visit_merge(spec,accept,options){
var vec__27190 = spec_tools.impl.extract_form.call(null,spec);
var seq__27191 = cljs.core.seq.call(null,vec__27190);
var first__27192 = cljs.core.first.call(null,seq__27191);
var seq__27191__$1 = cljs.core.next.call(null,seq__27191);
var _ = first__27192;
var inner_specs = seq__27191__$1;
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null),spec,cljs.core.mapv.call(null,(function (p1__27189_SHARP_){
return spec_tools.visitor.visit.call(null,p1__27189_SHARP_,accept,options);
}),inner_specs),options);
});
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","merge","clojure.spec.alpha/merge",472136035,null),(function (spec,accept,options){
return spec_tools.visitor.visit_merge.call(null,spec,accept,options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("spec-tools.core","merge","spec-tools.core/merge",2048449266,null),(function (spec,accept,options){
return spec_tools.visitor.visit_merge.call(null,spec,accept,options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","every","clojure.spec.alpha/every",-1327408778,null),(function (spec,accept,options){
var vec__27193 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__27193,(0),null);
var inner_spec = cljs.core.nth.call(null,vec__27193,(1),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","every","clojure.spec.alpha/every",-1327408778,null),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","every-kv","clojure.spec.alpha/every-kv",814515928,null),(function (spec,accept,options){
var vec__27197 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__27197,(0),null);
var inner_spec1 = cljs.core.nth.call(null,vec__27197,(1),null);
var inner_spec2 = cljs.core.nth.call(null,vec__27197,(2),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","every-kv","clojure.spec.alpha/every-kv",814515928,null),spec,cljs.core.mapv.call(null,(function (p1__27196_SHARP_){
return spec_tools.visitor.visit.call(null,p1__27196_SHARP_,accept,options);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inner_spec1,inner_spec2], null)),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","coll-of","clojure.spec.alpha/coll-of",-465249451,null),(function (spec,accept,options){
var form = spec_tools.impl.extract_form.call(null,spec);
var pred = cljs.core.second.call(null,form);
var map__27200 = spec_tools.parse.parse_spec.call(null,form);
var map__27200__$1 = (((((!((map__27200 == null))))?(((((map__27200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27200):map__27200);
var type = cljs.core.get.call(null,map__27200__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var dispatch = (function (){var G__27202 = type;
var G__27202__$1 = (((G__27202 instanceof cljs.core.Keyword))?G__27202.fqn:null);
switch (G__27202__$1) {
case "map-of":
return new cljs.core.Keyword("spec-tools.visitor","map-of","spec-tools.visitor/map-of",-972613908);

break;
case "set":
return new cljs.core.Keyword("spec-tools.visitor","set-of","spec-tools.visitor/set-of",983982444);

break;
case "vector":
return new cljs.core.Keyword("spec-tools.visitor","vector-of","spec-tools.visitor/vector-of",-1693991985);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27202__$1)].join('')));

}
})();
return accept.call(null,dispatch,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,pred,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","map-of","clojure.spec.alpha/map-of",2125010727,null),(function (spec,accept,options){
var vec__27205 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__27205,(0),null);
var k = cljs.core.nth.call(null,vec__27205,(1),null);
var v = cljs.core.nth.call(null,vec__27205,(2),null);
return accept.call(null,new cljs.core.Keyword("spec-tools.visitor","map-of","spec-tools.visitor/map-of",-972613908),spec,cljs.core.mapv.call(null,(function (p1__27204_SHARP_){
return spec_tools.visitor.visit.call(null,p1__27204_SHARP_,accept,options);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","*","clojure.spec.alpha/*",-21649262,null),(function (spec,accept,options){
var vec__27208 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__27208,(0),null);
var inner_spec = cljs.core.nth.call(null,vec__27208,(1),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","*","clojure.spec.alpha/*",-21649262,null),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","+","clojure.spec.alpha/+",96423191,null),(function (spec,accept,options){
var vec__27211 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__27211,(0),null);
var inner_spec = cljs.core.nth.call(null,vec__27211,(1),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","+","clojure.spec.alpha/+",96423191,null),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","?","clojure.spec.alpha/?",-1775438615,null),(function (spec,accept,options){
var vec__27214 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__27214,(0),null);
var inner_spec = cljs.core.nth.call(null,vec__27214,(1),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","?","clojure.spec.alpha/?",-1775438615,null),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null),(function (spec,accept,options){
var vec__27218 = spec_tools.impl.extract_form.call(null,spec);
var seq__27219 = cljs.core.seq.call(null,vec__27218);
var first__27220 = cljs.core.first.call(null,seq__27219);
var seq__27219__$1 = cljs.core.next.call(null,seq__27219);
var _ = first__27220;
var map__27221 = seq__27219__$1;
var map__27221__$1 = (((((!((map__27221 == null))))?(((((map__27221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27221):map__27221);
var inner_spec_map = map__27221__$1;
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null),spec,cljs.core.mapv.call(null,(function (p1__27217_SHARP_){
return spec_tools.visitor.visit.call(null,p1__27217_SHARP_,accept,options);
}),cljs.core.vals.call(null,inner_spec_map)),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","cat","clojure.spec.alpha/cat",-523389547,null),(function (spec,accept,options){
var vec__27224 = spec_tools.impl.extract_form.call(null,spec);
var seq__27225 = cljs.core.seq.call(null,vec__27224);
var first__27226 = cljs.core.first.call(null,seq__27225);
var seq__27225__$1 = cljs.core.next.call(null,seq__27225);
var _ = first__27226;
var map__27227 = seq__27225__$1;
var map__27227__$1 = (((((!((map__27227 == null))))?(((((map__27227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27227):map__27227);
var inner_spec_map = map__27227__$1;
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","cat","clojure.spec.alpha/cat",-523389547,null),spec,cljs.core.mapv.call(null,(function (p1__27223_SHARP_){
return spec_tools.visitor.visit.call(null,p1__27223_SHARP_,accept,options);
}),cljs.core.vals.call(null,inner_spec_map)),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","&","clojure.spec.alpha/&",704695533,null),(function (spec,accept,options){
var vec__27229 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__27229,(0),null);
var inner_spec = cljs.core.nth.call(null,vec__27229,(1),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","&","clojure.spec.alpha/&",704695533,null),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null),(function (spec,accept,options){
var vec__27233 = spec_tools.impl.extract_form.call(null,spec);
var seq__27234 = cljs.core.seq.call(null,vec__27233);
var first__27235 = cljs.core.first.call(null,seq__27234);
var seq__27234__$1 = cljs.core.next.call(null,seq__27234);
var _ = first__27235;
var inner_specs = seq__27234__$1;
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null),spec,cljs.core.mapv.call(null,(function (p1__27232_SHARP_){
return spec_tools.visitor.visit.call(null,p1__27232_SHARP_,accept,options);
}),inner_specs),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","keys*","clojure.spec.alpha/keys*",-1790941751,null),(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys.call(null,spec_tools.impl.extract_form.call(null,spec));
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","keys*","clojure.spec.alpha/keys*",-1790941751,null),spec,cljs.core.mapv.call(null,(function (p1__27236_SHARP_){
return spec_tools.visitor.visit.call(null,p1__27236_SHARP_,accept,options);
}),keys),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null),(function (spec,accept,options){
var vec__27237 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__27237,(0),null);
var inner_spec = cljs.core.nth.call(null,vec__27237,(1),null);
return accept.call(null,new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Symbol("spec-tools.core","spec","spec-tools.core/spec",-497332036,null),(function (spec,accept,options){
var vec__27240 = spec_tools.impl.extract_form.call(null,spec);
var _ = cljs.core.nth.call(null,vec__27240,(0),null);
var map__27243 = cljs.core.nth.call(null,vec__27240,(1),null);
var map__27243__$1 = (((((!((map__27243 == null))))?(((((map__27243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27243):map__27243);
var inner_spec = cljs.core.get.call(null,map__27243__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
return accept.call(null,new cljs.core.Keyword("spec-tools.visitor","spec","spec-tools.visitor/spec",1770325200),spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.call(null,inner_spec,accept,options)], null),options);
}));
cljs.core._add_method.call(null,spec_tools.visitor.visit_spec,new cljs.core.Keyword("spec-tools.visitor","default","spec-tools.visitor/default",49677361),(function (spec,accept,options){
return accept.call(null,spec_tools.visitor.spec_dispatch.call(null,spec,accept,options),spec,null,options);
}));
/**
 * a visitor that collects all registered specs. Returns
 *   a map of spec-name => spec.
 */
spec_tools.visitor.spec_collector = (function spec_tools$visitor$spec_collector(){
var specs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return (function (_,spec,___$1,___$2){
var temp__5718__auto__ = cljs.spec.alpha.get_spec.call(null,spec);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return cljs.core.swap_BANG_.call(null,specs,cljs.core.assoc,spec,s);
} else {
return cljs.core.deref.call(null,specs);
}
});
});

//# sourceMappingURL=visitor.js.map?rel=1609481676184
