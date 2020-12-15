// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('reitit.coercion.spec');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.core');
goog.require('spec_tools.data_spec');
goog.require('spec_tools.swagger.core');
goog.require('reitit.coercion');
goog.require('clojure.set');
reitit.coercion.spec.string_transformer = spec_tools.core.type_transformer.call(null,spec_tools.core.strip_extra_keys_transformer,spec_tools.core.string_transformer);
reitit.coercion.spec.json_transformer = spec_tools.core.type_transformer.call(null,spec_tools.core.strip_extra_keys_transformer,spec_tools.core.json_transformer);
reitit.coercion.spec.strip_extra_keys_transformer = spec_tools.core.strip_extra_keys_transformer;
reitit.coercion.spec.no_op_transformer = (function (){
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.t_reitit$coercion$spec31723 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {spec_tools.core.Transformer}
 * @implements {cljs.core.IWithMeta}
*/
reitit.coercion.spec.t_reitit$coercion$spec31723 = (function (meta31724){
this.meta31724 = meta31724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.spec.t_reitit$coercion$spec31723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31725,meta31724__$1){
var self__ = this;
var _31725__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec31723(meta31724__$1));
}));

(reitit.coercion.spec.t_reitit$coercion$spec31723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31725){
var self__ = this;
var _31725__$1 = this;
return self__.meta31724;
}));

(reitit.coercion.spec.t_reitit$coercion$spec31723.prototype.spec_tools$core$Transformer$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.spec.t_reitit$coercion$spec31723.prototype.spec_tools$core$Transformer$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("reitit.coercion.spec","no-op","reitit.coercion.spec/no-op",-549362779);
}));

(reitit.coercion.spec.t_reitit$coercion$spec31723.prototype.spec_tools$core$Transformer$_encoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
}));

(reitit.coercion.spec.t_reitit$coercion$spec31723.prototype.spec_tools$core$Transformer$_decoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
}));

(reitit.coercion.spec.t_reitit$coercion$spec31723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31724","meta31724",-1675536980,null)], null);
}));

(reitit.coercion.spec.t_reitit$coercion$spec31723.cljs$lang$type = true);

(reitit.coercion.spec.t_reitit$coercion$spec31723.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec31723");

(reitit.coercion.spec.t_reitit$coercion$spec31723.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.coercion.spec/t_reitit$coercion$spec31723");
}));

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec31723.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec31723 = (function reitit$coercion$spec$__GT_t_reitit$coercion$spec31723(meta31724){
return (new reitit.coercion.spec.t_reitit$coercion$spec31723(meta31724));
});

}

return (new reitit.coercion.spec.t_reitit$coercion$spec31723(cljs.core.PersistentArrayMap.EMPTY));
})()
;

/**
 * @interface
 */
reitit.coercion.spec.IntoSpec = function(){};

var reitit$coercion$spec$IntoSpec$into_spec$dyn_31726 = (function (this$,name){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (reitit.coercion.spec.into_spec[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,name);
} else {
var m__4426__auto__ = (reitit.coercion.spec.into_spec["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,name);
} else {
throw cljs.core.missing_protocol.call(null,"IntoSpec.into-spec",this$);
}
}
});
reitit.coercion.spec.into_spec = (function reitit$coercion$spec$into_spec(this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2 == null)))))){
return this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2(this$,name);
} else {
return reitit$coercion$spec$IntoSpec$into_spec$dyn_31726.call(null,this$,name);
}
});

reitit.coercion.spec.ensure_name = (function reitit$coercion$spec$ensure_name(_QMARK_name){
var or__4126__auto__ = _QMARK_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.keyword.call(null,"spec",cljs.core.name.call(null,cljs.core.gensym.call(null,"")));
}
});
(cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.call(null,spec_tools.data_spec.spec.call(null,reitit.coercion.spec.ensure_name.call(null,name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.call(null,spec_tools.data_spec.spec.call(null,reitit.coercion.spec.ensure_name.call(null,name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.call(null,spec_tools.data_spec.spec.call(null,reitit.coercion.spec.ensure_name.call(null,name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return spec_tools.data_spec.spec.call(null,reitit.coercion.spec.ensure_name.call(null,name),this$__$1);
}));

(spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

goog.object.set(reitit.coercion.spec.IntoSpec,"_",true);

goog.object.set(reitit.coercion.spec.into_spec,"_",(function (this$,_){
return spec_tools.core.create_spec.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),this$], null));
}));

goog.object.set(reitit.coercion.spec.IntoSpec,"null",true);

goog.object.set(reitit.coercion.spec.into_spec,"null",(function (this$,_){
return null;
}));
reitit.coercion.spec.stringify_pred = (function reitit$coercion$spec$stringify_pred(pred){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq_QMARK_.call(null,pred))?cljs.core.seq.call(null,pred):pred));
});
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.coerce_response_QMARK_ !== 'undefined')){
} else {
reitit.coercion.spec.coerce_response_QMARK_ = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reitit.coercion.spec","coerce-response?"),cljs.core.identity,new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,reitit.coercion.spec.coerce_response_QMARK_,new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218),(function (_){
return true;
}));
reitit.coercion.spec.default_options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coerce-response?","coerce-response?",1125033091),reitit.coercion.spec.coerce_response_QMARK_,new cljs.core.Keyword(null,"transformers","transformers",-734201565),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.strip_extra_keys_transformer,new cljs.core.Keyword(null,"formats","formats",-1397890976),new cljs.core.PersistentArrayMap(null, 1, ["application/json",reitit.coercion.spec.json_transformer], null)], null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.string_transformer], null),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.no_op_transformer], null)], null)], null);
reitit.coercion.spec.create = (function reitit$coercion$spec$create(p__31729){
var map__31730 = p__31729;
var map__31730__$1 = (((((!((map__31730 == null))))?(((((map__31730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31730):map__31730);
var opts = map__31730__$1;
var transformers = cljs.core.get.call(null,map__31730__$1,new cljs.core.Keyword(null,"transformers","transformers",-734201565));
var coerce_response_QMARK_ = cljs.core.get.call(null,map__31730__$1,new cljs.core.Keyword(null,"coerce-response?","coerce-response?",1125033091));
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.t_reitit$coercion$spec31732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {reitit.coercion.Coercion}
*/
reitit.coercion.spec.t_reitit$coercion$spec31732 = (function (p__31729,map__31730,opts,transformers,coerce_response_QMARK_,meta31733){
this.p__31729 = p__31729;
this.map__31730 = map__31730;
this.opts = opts;
this.transformers = transformers;
this.coerce_response_QMARK_ = coerce_response_QMARK_;
this.meta31733 = meta31733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.spec.t_reitit$coercion$spec31732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31734,meta31733__$1){
var self__ = this;
var _31734__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec31732(self__.p__31729,self__.map__31730,self__.opts,self__.transformers,self__.coerce_response_QMARK_,meta31733__$1));
}));

(reitit.coercion.spec.t_reitit$coercion$spec31732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31734){
var self__ = this;
var _31734__$1 = this;
return self__.meta31733;
}));

(reitit.coercion.spec.t_reitit$coercion$spec31732.prototype.reitit$coercion$Coercion$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.spec.t_reitit$coercion$spec31732.prototype.reitit$coercion$Coercion$_get_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"spec","spec",347520401);
}));

(reitit.coercion.spec.t_reitit$coercion$spec31732.prototype.reitit$coercion$Coercion$_get_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.coercion.spec.t_reitit$coercion$spec31732.prototype.reitit$coercion$Coercion$_get_apidocs$arity$3 = (function (this$,specification,p__31735){
var self__ = this;
var map__31736 = p__31735;
var map__31736__$1 = (((((!((map__31736 == null))))?(((((map__31736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31736):map__31736);
var parameters = cljs.core.get.call(null,map__31736__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var responses = cljs.core.get.call(null,map__31736__$1,new cljs.core.Keyword(null,"responses","responses",1257546453));
var this$__$1 = this;
var G__31738 = specification;
var G__31738__$1 = (((G__31738 instanceof cljs.core.Keyword))?G__31738.fqn:null);
switch (G__31738__$1) {
case "swagger":
return spec_tools.swagger.core.swagger_spec.call(null,cljs.core.merge.call(null,(cljs.core.truth_(parameters)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("spec-tools.swagger.core","parameters","spec-tools.swagger.core/parameters",-239005676),cljs.core.into.call(null,cljs.core.empty.call(null,parameters),(function (){var iter__4529__auto__ = (function reitit$coercion$spec$create_$_iter__31739(s__31740){
return (new cljs.core.LazySeq(null,(function (){
var s__31740__$1 = s__31740;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__31740__$1);
if(temp__5720__auto__){
var s__31740__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31740__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__31740__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__31742 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__31741 = (0);
while(true){
if((i__31741 < size__4528__auto__)){
var vec__31743 = cljs.core._nth.call(null,c__4527__auto__,i__31741);
var k = cljs.core.nth.call(null,vec__31743,(0),null);
var v = cljs.core.nth.call(null,vec__31743,(1),null);
cljs.core.chunk_append.call(null,b__31742,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion._compile_model.call(null,this$__$1,v,null)], null));

var G__31762 = (i__31741 + (1));
i__31741 = G__31762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31742),reitit$coercion$spec$create_$_iter__31739.call(null,cljs.core.chunk_rest.call(null,s__31740__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31742),null);
}
} else {
var vec__31746 = cljs.core.first.call(null,s__31740__$2);
var k = cljs.core.nth.call(null,vec__31746,(0),null);
var v = cljs.core.nth.call(null,vec__31746,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion._compile_model.call(null,this$__$1,v,null)], null),reitit$coercion$spec$create_$_iter__31739.call(null,cljs.core.rest.call(null,s__31740__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,parameters);
})())], null):null),(cljs.core.truth_(responses)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("spec-tools.swagger.core","responses","spec-tools.swagger.core/responses",308528333),cljs.core.into.call(null,cljs.core.empty.call(null,responses),(function (){var iter__4529__auto__ = (function reitit$coercion$spec$create_$_iter__31749(s__31750){
return (new cljs.core.LazySeq(null,(function (){
var s__31750__$1 = s__31750;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__31750__$1);
if(temp__5720__auto__){
var s__31750__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31750__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__31750__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__31752 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__31751 = (0);
while(true){
if((i__31751 < size__4528__auto__)){
var vec__31753 = cljs.core._nth.call(null,c__4527__auto__,i__31751);
var k = cljs.core.nth.call(null,vec__31753,(0),null);
var response = cljs.core.nth.call(null,vec__31753,(1),null);
cljs.core.chunk_append.call(null,b__31752,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys.call(null,$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.call(null,$__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),((function (i__31751,$,$__$1,vec__31753,k,response,c__4527__auto__,size__4528__auto__,b__31752,s__31750__$2,temp__5720__auto__,G__31738,G__31738__$1,this$__$1,map__31736,map__31736__$1,parameters,responses,map__31730,map__31730__$1,opts,transformers,coerce_response_QMARK_){
return (function (p1__31727_SHARP_){
return reitit.coercion._compile_model.call(null,this$__$1,p1__31727_SHARP_,null);
});})(i__31751,$,$__$1,vec__31753,k,response,c__4527__auto__,size__4528__auto__,b__31752,s__31750__$2,temp__5720__auto__,G__31738,G__31738__$1,this$__$1,map__31736,map__31736__$1,parameters,responses,map__31730,map__31730__$1,opts,transformers,coerce_response_QMARK_))
);
} else {
return $__$1;
}
})()], null));

var G__31763 = (i__31751 + (1));
i__31751 = G__31763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31752),reitit$coercion$spec$create_$_iter__31749.call(null,cljs.core.chunk_rest.call(null,s__31750__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31752),null);
}
} else {
var vec__31756 = cljs.core.first.call(null,s__31750__$2);
var k = cljs.core.nth.call(null,vec__31756,(0),null);
var response = cljs.core.nth.call(null,vec__31756,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys.call(null,$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.call(null,$__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),((function ($,$__$1,vec__31756,k,response,s__31750__$2,temp__5720__auto__,G__31738,G__31738__$1,this$__$1,map__31736,map__31736__$1,parameters,responses,map__31730,map__31730__$1,opts,transformers,coerce_response_QMARK_){
return (function (p1__31727_SHARP_){
return reitit.coercion._compile_model.call(null,this$__$1,p1__31727_SHARP_,null);
});})($,$__$1,vec__31756,k,response,s__31750__$2,temp__5720__auto__,G__31738,G__31738__$1,this$__$1,map__31736,map__31736__$1,parameters,responses,map__31730,map__31730__$1,opts,transformers,coerce_response_QMARK_))
);
} else {
return $__$1;
}
})()], null),reitit$coercion$spec$create_$_iter__31749.call(null,cljs.core.rest.call(null,s__31750__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,responses);
})())], null):null)));

break;
default:
throw cljs.core.ex_info.call(null,["Can't produce Spec apidocs for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specification)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"specification","specification",22067900),specification,new cljs.core.Keyword(null,"coercion","coercion",904067157),new cljs.core.Keyword(null,"spec","spec",347520401)], null));

}
}));

(reitit.coercion.spec.t_reitit$coercion$spec31732.prototype.reitit$coercion$Coercion$_compile_model$arity$3 = (function (_,model,name){
var self__ = this;
var ___$1 = this;
return reitit.coercion.spec.into_spec.call(null,model,name);
}));

(reitit.coercion.spec.t_reitit$coercion$spec31732.prototype.reitit$coercion$Coercion$_open_model$arity$2 = (function (_,spec){
var self__ = this;
var ___$1 = this;
return spec;
}));

(reitit.coercion.spec.t_reitit$coercion$spec31732.prototype.reitit$coercion$Coercion$_encode_error$arity$2 = (function (_,error){
var self__ = this;
var ___$1 = this;
var problems = new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(error));
return cljs.core.assoc.call(null,cljs.core.update.call(null,error,new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.comp.call(null,cljs.core.str,cljs.spec.alpha.form)),new cljs.core.Keyword(null,"problems","problems",2097327077),cljs.core.mapv.call(null,(function (p1__31728_SHARP_){
return cljs.core.update.call(null,p1__31728_SHARP_,new cljs.core.Keyword(null,"pred","pred",1927423397),reitit.coercion.spec.stringify_pred);
}),problems));
}));

(reitit.coercion.spec.t_reitit$coercion$spec31732.prototype.reitit$coercion$Coercion$_request_coercer$arity$3 = (function (this$,type,spec){
var self__ = this;
var this$__$1 = this;
var spec__$1 = reitit.coercion._compile_model.call(null,this$__$1,spec,null);
var map__31759 = self__.transformers.call(null,type);
var map__31759__$1 = (((((!((map__31759 == null))))?(((((map__31759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31759):map__31759);
var formats = cljs.core.get.call(null,map__31759__$1,new cljs.core.Keyword(null,"formats","formats",-1397890976));
var default$ = cljs.core.get.call(null,map__31759__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
return (function (value,format){
var temp__5718__auto__ = (function (){var or__4126__auto__ = cljs.core.get.call(null,formats,format);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var transformer = temp__5718__auto__;
var coerced = spec_tools.core.coerce.call(null,spec__$1,value,transformer);
if(cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,coerced)){
return coerced;
} else {
var transformed = spec_tools.core.conform.call(null,spec__$1,coerced,transformer);
if(cljs.spec.alpha.invalid_QMARK_.call(null,transformed)){
var problems = spec_tools.core.explain_data.call(null,spec__$1,coerced,transformer);
return reitit.coercion.map__GT_CoercionError.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),spec__$1,new cljs.core.Keyword(null,"problems","problems",2097327077),problems], null));
} else {
return cljs.spec.alpha.unform.call(null,spec__$1,transformed);
}
}
} else {
return value;
}
});
}));

(reitit.coercion.spec.t_reitit$coercion$spec31732.prototype.reitit$coercion$Coercion$_response_coercer$arity$2 = (function (this$,spec){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.coerce_response_QMARK_.call(null,spec))){
return reitit.coercion._request_coercer.call(null,this$__$1,new cljs.core.Keyword(null,"response","response",-1068424192),spec);
} else {
return null;
}
}));

(reitit.coercion.spec.t_reitit$coercion$spec31732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__31729","p__31729",1313829378,null),new cljs.core.Symbol(null,"map__31730","map__31730",-459979769,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"transformers","transformers",906329962,null),new cljs.core.Symbol(null,"coerce-response?","coerce-response?",-1529402678,null),new cljs.core.Symbol(null,"meta31733","meta31733",2110159672,null)], null);
}));

(reitit.coercion.spec.t_reitit$coercion$spec31732.cljs$lang$type = true);

(reitit.coercion.spec.t_reitit$coercion$spec31732.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec31732");

(reitit.coercion.spec.t_reitit$coercion$spec31732.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reitit.coercion.spec/t_reitit$coercion$spec31732");
}));

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec31732.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec31732 = (function reitit$coercion$spec$create_$___GT_t_reitit$coercion$spec31732(p__31729__$1,map__31730__$2,opts__$1,transformers__$1,coerce_response_QMARK___$1,meta31733){
return (new reitit.coercion.spec.t_reitit$coercion$spec31732(p__31729__$1,map__31730__$2,opts__$1,transformers__$1,coerce_response_QMARK___$1,meta31733));
});

}

return (new reitit.coercion.spec.t_reitit$coercion$spec31732(p__31729,map__31730__$1,opts,transformers,coerce_response_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","coercion","reitit.coercion/coercion",-866612966)], null)));
});
reitit.coercion.spec.coercion = reitit.coercion.spec.create.call(null,reitit.coercion.spec.default_options);

//# sourceMappingURL=spec.js.map?rel=1608011916313
