// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('reitit.impl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('meta_merge.core');
goog.require('reitit.trie');
goog.require('reitit.exception');
reitit.impl.parse = (function reitit$impl$parse(path,opts){
var path__$1 = reitit.trie.normalize.call(null,path,opts);
var path_parts = reitit.trie.split_path.call(null,path__$1,opts);
var path_params = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.call(null,cljs.core.string_QMARK_,path_parts)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),path_parts,new cljs.core.Keyword(null,"path","path",-188191168),path__$1], null);
});
reitit.impl.wild_path_QMARK_ = (function reitit$impl$wild_path_QMARK_(path,opts){
return cljs.core.boolean$.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(reitit.impl.parse.call(null,path,opts))));
});
reitit.impl.__GT_wild_route_QMARK_ = (function reitit$impl$__GT_wild_route_QMARK_(opts){
return (function (p__22910){
var vec__22911 = p__22910;
var path = cljs.core.nth.call(null,vec__22911,(0),null);
return cljs.core.boolean$.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(reitit.impl.parse.call(null,path,opts))));
});
});
/**
 * Applies a function to every value of a map, updates the value if not nil.
 *   Also works on vectors. Maintains key for maps, order for vectors.
 */
reitit.impl.maybe_map_values = (function reitit$impl$maybe_map_values(f,coll){
return cljs.core.reduce_kv.call(null,(function (coll__$1,k,v){
var temp__5722__auto__ = f.call(null,v);
if((temp__5722__auto__ == null)){
return coll__$1;
} else {
var v_SINGLEQUOTE_ = temp__5722__auto__;
return cljs.core.assoc.call(null,coll__$1,k,v_SINGLEQUOTE_);
}
}),coll,coll);
});
reitit.impl.walk = (function reitit$impl$walk(raw_routes,p__22916){
var map__22917 = p__22916;
var map__22917__$1 = (((((!((map__22917 == null))))?(((((map__22917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22917):map__22917);
var opts = map__22917__$1;
var path = cljs.core.get.call(null,map__22917__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__22917__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var routes = cljs.core.get.call(null,map__22917__$1,new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.PersistentVector.EMPTY);
var expand = cljs.core.get.call(null,map__22917__$1,new cljs.core.Keyword(null,"expand","expand",595248157));
var walk_many = (function reitit$impl$walk_$_walk_many(p,m,r){
return cljs.core.reduce.call(null,(function (p1__22914_SHARP_,p2__22915_SHARP_){
return cljs.core.into.call(null,p1__22914_SHARP_,walk_one.call(null,p,m,p2__22915_SHARP_));
}),cljs.core.PersistentVector.EMPTY,r);
});
var walk_one = (function reitit$impl$walk_$_walk_one(pacc,macc,routes__$1){
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,routes__$1))){
return walk_many.call(null,pacc,macc,routes__$1);
} else {
if(typeof cljs.core.first.call(null,routes__$1) === 'string'){
var vec__22928 = routes__$1;
var seq__22929 = cljs.core.seq.call(null,vec__22928);
var first__22930 = cljs.core.first.call(null,seq__22929);
var seq__22929__$1 = cljs.core.next.call(null,seq__22929);
var path__$1 = first__22930;
var vec__22931 = seq__22929__$1;
var maybe_arg = cljs.core.nth.call(null,vec__22931,(0),null);
var args = vec__22931;
var vec__22934 = ((((cljs.core.vector_QMARK_.call(null,maybe_arg)) || (((cljs.core.sequential_QMARK_.call(null,maybe_arg)) && (cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,maybe_arg))))) || ((maybe_arg == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_arg,cljs.core.rest.call(null,args)], null));
var data__$1 = cljs.core.nth.call(null,vec__22934,(0),null);
var childs = cljs.core.nth.call(null,vec__22934,(1),null);
var macc__$1 = cljs.core.into.call(null,macc,expand.call(null,data__$1,opts));
var child_routes = walk_many.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1,cljs.core.keep.call(null,cljs.core.identity,childs));
if(cljs.core.seq.call(null,childs)){
return cljs.core.seq.call(null,child_routes);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1], null)], null);
}
} else {
return null;
}
}
});
return walk_one.call(null,path,cljs.core.mapv.call(null,cljs.core.identity,data),raw_routes);
});
reitit.impl.map_data = (function reitit$impl$map_data(f,routes){
return cljs.core.mapv.call(null,(function (p__22937){
var vec__22938 = p__22937;
var p = cljs.core.nth.call(null,vec__22938,(0),null);
var ds = cljs.core.nth.call(null,vec__22938,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,f.call(null,p,ds)], null);
}),routes);
});
reitit.impl.merge_data = (function reitit$impl$merge_data(p,x){
return cljs.core.reduce.call(null,(function (acc,p__22941){
var vec__22942 = p__22941;
var k = cljs.core.nth.call(null,vec__22942,(0),null);
var v = cljs.core.nth.call(null,vec__22942,(1),null);
try{return meta_merge.core.meta_merge.call(null,acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));
}catch (e22945){if((e22945 instanceof Error)){
var e = e22945;
return reitit.exception.fail_BANG_.call(null,new cljs.core.Keyword("reitit.impl","merge-data","reitit.impl/merge-data",-588218417),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),p,new cljs.core.Keyword(null,"left","left",-399115937),acc,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]),new cljs.core.Keyword(null,"exception","exception",-335277064),e], null));
} else {
throw e22945;

}
}}),cljs.core.PersistentArrayMap.EMPTY,x);
});
reitit.impl.resolve_routes = (function reitit$impl$resolve_routes(raw_routes,p__22947){
var map__22948 = p__22947;
var map__22948__$1 = (((((!((map__22948 == null))))?(((((map__22948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22948):map__22948);
var opts = map__22948__$1;
var coerce = cljs.core.get.call(null,map__22948__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504));
var G__22950 = reitit.impl.map_data.call(null,reitit.impl.merge_data,reitit.impl.walk.call(null,raw_routes,opts));
if(cljs.core.truth_(coerce)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (p1__22946_SHARP_){
return coerce.call(null,p1__22946_SHARP_,opts);
})),G__22950);
} else {
return G__22950;
}
});
reitit.impl.path_conflicting_routes = (function reitit$impl$path_conflicting_routes(routes,opts){
var parts_and_routes = cljs.core.mapv.call(null,(function (p__22951){
var vec__22952 = p__22951;
var s = cljs.core.nth.call(null,vec__22952,(0),null);
var r = vec__22952;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.split_path.call(null,s,opts),r], null);
}),routes);
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map_indexed.call(null,(function (index,p__22955){
var vec__22956 = p__22955;
var p = cljs.core.nth.call(null,vec__22956,(0),null);
var r = cljs.core.nth.call(null,vec__22956,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.reduce.call(null,(function (acc,p__22959){
var vec__22960 = p__22959;
var p_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__22960,(0),null);
var r_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__22960,(1),null);
if(reitit.trie.conflicting_parts_QMARK_.call(null,p,p_SINGLEQUOTE_)){
return cljs.core.conj.call(null,acc,r_SINGLEQUOTE_);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.subvec.call(null,parts_and_routes,(index + (1))))], null);
})),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.seq,cljs.core.second))),parts_and_routes));
});
reitit.impl.unresolved_conflicts = (function reitit$impl$unresolved_conflicts(path_conflicting){
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__22963){
var vec__22964 = p__22963;
var vec__22967 = cljs.core.nth.call(null,vec__22964,(0),null);
var _ = cljs.core.nth.call(null,vec__22967,(0),null);
var route_data = cljs.core.nth.call(null,vec__22967,(1),null);
var conflicts = cljs.core.nth.call(null,vec__22964,(1),null);
var and__4115__auto__ = new cljs.core.Keyword(null,"conflicting","conflicting",2003828416).cljs$core$IFn$_invoke$arity$1(route_data);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.every_QMARK_.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"conflicting","conflicting",2003828416),cljs.core.second),conflicts);
} else {
return and__4115__auto__;
}
})),path_conflicting));
});
reitit.impl.conflicting_paths = (function reitit$impl$conflicting_paths(conflicts){
return cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4529__auto__ = (function reitit$impl$conflicting_paths_$_iter__22970(s__22971){
return (new cljs.core.LazySeq(null,(function (){
var s__22971__$1 = s__22971;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__22971__$1);
if(temp__5720__auto__){
var s__22971__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22971__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__22971__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__22973 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__22972 = (0);
while(true){
if((i__22972 < size__4528__auto__)){
var vec__22974 = cljs.core._nth.call(null,c__4527__auto__,i__22972);
var p = cljs.core.nth.call(null,vec__22974,(0),null);
var pc = cljs.core.nth.call(null,vec__22974,(1),null);
cljs.core.chunk_append.call(null,b__22973,cljs.core.conj.call(null,cljs.core.map.call(null,cljs.core.first,pc),cljs.core.first.call(null,p)));

var G__22980 = (i__22972 + (1));
i__22972 = G__22980;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22973),reitit$impl$conflicting_paths_$_iter__22970.call(null,cljs.core.chunk_rest.call(null,s__22971__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22973),null);
}
} else {
var vec__22977 = cljs.core.first.call(null,s__22971__$2);
var p = cljs.core.nth.call(null,vec__22977,(0),null);
var pc = cljs.core.nth.call(null,vec__22977,(1),null);
return cljs.core.cons.call(null,cljs.core.conj.call(null,cljs.core.map.call(null,cljs.core.first,pc),cljs.core.first.call(null,p)),reitit$impl$conflicting_paths_$_iter__22970.call(null,cljs.core.rest.call(null,s__22971__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,conflicts);
})()));
});
reitit.impl.name_conflicting_routes = (function reitit$impl$name_conflicting_routes(routes){
var G__22981 = routes;
var G__22981__$1 = (((G__22981 == null))?null:cljs.core.group_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.second),G__22981));
var G__22981__$2 = (((G__22981__$1 == null))?null:cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.first),G__22981__$1));
var G__22981__$3 = (((G__22981__$2 == null))?null:cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.pos_QMARK_,cljs.core.count,cljs.core.butlast,cljs.core.second),G__22981__$2));
var G__22981__$4 = (((G__22981__$3 == null))?null:cljs.core.seq.call(null,G__22981__$3));
var G__22981__$5 = (((G__22981__$4 == null))?null:cljs.core.map.call(null,(function (p__22982){
var vec__22983 = p__22982;
var k = cljs.core.nth.call(null,vec__22983,(0),null);
var v = cljs.core.nth.call(null,vec__22983,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set.call(null,v)], null);
}),G__22981__$4));
if((G__22981__$5 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22981__$5);
}
});
reitit.impl.find_names = (function reitit$impl$find_names(routes,_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (p1__22986_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__22986_SHARP_));
})),routes);
});
reitit.impl.compile_route = (function reitit$impl$compile_route(p__22987,p__22988){
var vec__22989 = p__22987;
var p = cljs.core.nth.call(null,vec__22989,(0),null);
var m = cljs.core.nth.call(null,vec__22989,(1),null);
var route = vec__22989;
var map__22992 = p__22988;
var map__22992__$1 = (((((!((map__22992 == null))))?(((((map__22992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22992):map__22992);
var opts = map__22992__$1;
var compile = cljs.core.get.call(null,map__22992__$1,new cljs.core.Keyword(null,"compile","compile",608186429));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,m,(cljs.core.truth_(compile)?compile.call(null,route,opts):null)], null);
});
reitit.impl.compile_routes = (function reitit$impl$compile_routes(routes,opts){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (p1__22994_SHARP_){
return reitit.impl.compile_route.call(null,p1__22994_SHARP_,opts);
}),routes));
});
reitit.impl.uncompile_routes = (function reitit$impl$uncompile_routes(routes){
return cljs.core.mapv.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.partial.call(null,cljs.core.take,(2))),routes);
});
reitit.impl.path_for = (function reitit$impl$path_for(route,path_params){
if(cljs.core.truth_(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route))){
var temp__5718__auto__ = cljs.core.reduce.call(null,(function (acc,part){
if(typeof part === 'string'){
return cljs.core.conj.call(null,acc,part);
} else {
var temp__5718__auto__ = cljs.core.get.call(null,path_params,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(part));
if(cljs.core.truth_(temp__5718__auto__)){
var p = temp__5718__auto__;
return cljs.core.conj.call(null,acc,p);
} else {
return cljs.core.reduced.call(null,null);
}
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(route));
if(cljs.core.truth_(temp__5718__auto__)){
var parts = temp__5718__auto__;
return cljs.core.apply.call(null,cljs.core.str,parts);
} else {
return null;
}
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route);
}
});
reitit.impl.throw_on_missing_path_params = (function reitit$impl$throw_on_missing_path_params(template,required,path_params){
if(cljs.core.every_QMARK_.call(null,(function (p1__22995_SHARP_){
return cljs.core.contains_QMARK_.call(null,path_params,p1__22995_SHARP_);
}),required)){
return null;
} else {
var defined = cljs.core.set.call(null,cljs.core.keys.call(null,path_params));
var missing = clojure.set.difference.call(null,required,defined);
return reitit.exception.fail_BANG_.call(null,["missing path-params for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(template)," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"required","required",1807647006),required], null));
}
});
reitit.impl.fast_assoc = (function reitit$impl$fast_assoc(a,k,v){
return cljs.core.assoc.call(null,a,k,v);
});
reitit.impl.fast_map = (function reitit$impl$fast_map(m){
return m;
});
reitit.impl.fast_get = (function reitit$impl$fast_get(m,k){
return m.call(null,k);
});
reitit.impl.strip_nils = (function reitit$impl$strip_nils(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),m));
});
reitit.impl.url_encode = (function reitit$impl$url_encode(s){
if(cljs.core.truth_(s)){
return encodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.maybe_url_decode = (function reitit$impl$maybe_url_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.url_decode = (function reitit$impl$url_decode(s){
var or__4126__auto__ = reitit.impl.maybe_url_decode.call(null,s);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return s;
}
});
reitit.impl.form_encode = (function reitit$impl$form_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,encodeURIComponent(s),"%20","+");
} else {
return null;
}
});
reitit.impl.form_decode = (function reitit$impl$form_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(clojure.string.replace.call(null,s,"+"," "));
} else {
return null;
}
});
/**
 * URL-decodes maps and vectors
 */
reitit.impl.url_decode_coll = (function reitit$impl$url_decode_coll(coll){
return reitit.impl.maybe_map_values.call(null,reitit.impl.maybe_url_decode,coll);
});

/**
 * @interface
 */
reitit.impl.IntoString = function(){};

var reitit$impl$IntoString$into_string$dyn_22997 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (reitit.impl.into_string[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (reitit.impl.into_string["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IntoString.into-string",_);
}
}
});
reitit.impl.into_string = (function reitit$impl$into_string(_){
if((((!((_ == null)))) && ((!((_.reitit$impl$IntoString$into_string$arity$1 == null)))))){
return _.reitit$impl$IntoString$into_string$arity$1(_);
} else {
return reitit$impl$IntoString$into_string$dyn_22997.call(null,_);
}
});

goog.object.set(reitit.impl.IntoString,"string",true);

goog.object.set(reitit.impl.into_string,"string",(function (this$){
return this$;
}));

(cljs.core.Keyword.prototype.reitit$impl$IntoString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.reitit$impl$IntoString$into_string$arity$1 = (function (this$){
var this$__$1 = this;
var ns = cljs.core.namespace.call(null,this$__$1);
return [ns,(cljs.core.truth_(ns)?"/":null),cljs.core.name.call(null,this$__$1)].join('');
}));

goog.object.set(reitit.impl.IntoString,"boolean",true);

goog.object.set(reitit.impl.into_string,"boolean",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(reitit.impl.IntoString,"number",true);

goog.object.set(reitit.impl.into_string,"number",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(reitit.impl.IntoString,"object",true);

goog.object.set(reitit.impl.into_string,"object",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(reitit.impl.IntoString,"null",true);

goog.object.set(reitit.impl.into_string,"null",(function (_){
return null;
}));
/**
 * Convert parameters' values into URL-encoded strings, suitable for URL paths
 */
reitit.impl.path_params = (function reitit$impl$path_params(params){
return reitit.impl.maybe_map_values.call(null,(function (p1__22998_SHARP_){
return reitit.impl.url_encode.call(null,reitit.impl.into_string.call(null,p1__22998_SHARP_));
}),params);
});
reitit.impl.query_parameter = (function reitit$impl$query_parameter(k,v){
return [reitit.impl.form_encode.call(null,reitit.impl.into_string.call(null,k)),"=",reitit.impl.form_encode.call(null,reitit.impl.into_string.call(null,v))].join('');
});
/**
 * shallow transform of query parameters into query string
 */
reitit.impl.query_string = (function reitit$impl$query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__22999){
var vec__23000 = p__22999;
var k = cljs.core.nth.call(null,vec__23000,(0),null);
var v = cljs.core.nth.call(null,vec__23000,(1),null);
if(((cljs.core.sequential_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v)))){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,reitit.impl.query_parameter,cljs.core.repeat.call(null,k),v));
} else {
return reitit.impl.query_parameter.call(null,k,v);
}
}),params));
});
var ret__4785__auto___23009 = (function (){
reitit.impl.goog_extend = (function reitit$impl$goog_extend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23010 = arguments.length;
var i__4737__auto___23011 = (0);
while(true){
if((i__4737__auto___23011 < len__4736__auto___23010)){
args__4742__auto__.push((arguments[i__4737__auto___23011]));

var G__23012 = (i__4737__auto___23011 + (1));
i__4737__auto___23011 = G__23012;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((5) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((5)),(0),null)):null);
return reitit.impl.goog_extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4743__auto__);
});

(reitit.impl.goog_extend.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,base_type,ctor,methods$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),ctor))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("goog","inherits","goog/inherits",1191617838,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,base_type,null,(1),null))))),null,(1),null)),cljs.core.map.call(null,(function (method){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("reitit.impl","-prototype","reitit.impl/-prototype",-650268084,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,method))].join('')),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),cljs.core.rest.call(null,method)))),null,(1),null)))));
}),methods$))));
}));

(reitit.impl.goog_extend.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(reitit.impl.goog_extend.cljs$lang$applyTo = (function (seq23003){
var G__23004 = cljs.core.first.call(null,seq23003);
var seq23003__$1 = cljs.core.next.call(null,seq23003);
var G__23005 = cljs.core.first.call(null,seq23003__$1);
var seq23003__$2 = cljs.core.next.call(null,seq23003__$1);
var G__23006 = cljs.core.first.call(null,seq23003__$2);
var seq23003__$3 = cljs.core.next.call(null,seq23003__$2);
var G__23007 = cljs.core.first.call(null,seq23003__$3);
var seq23003__$4 = cljs.core.next.call(null,seq23003__$3);
var G__23008 = cljs.core.first.call(null,seq23003__$4);
var seq23003__$5 = cljs.core.next.call(null,seq23003__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23004,G__23005,G__23006,G__23007,G__23008,seq23003__$5);
}));

return null;
})()
;
(reitit.impl.goog_extend.cljs$lang$macro = true);


//# sourceMappingURL=impl.js.map?rel=1609481672401
