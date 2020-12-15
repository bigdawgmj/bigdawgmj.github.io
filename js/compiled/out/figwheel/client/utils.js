// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.pprint');
goog.require('goog.userAgent.product');
goog.require('goog.async.Deferred');
goog.require('goog.string.StringBuffer');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return (!((goog.global.document == null)));
});
figwheel.client.utils.react_native_env_QMARK_ = (function figwheel$client$utils$react_native_env_QMARK_(){
return (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.navigator !== 'undefined')) && (cljs.core._EQ_.call(null,goog.global.navigator.product,"ReactNative")));
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
figwheel.client.utils.html_or_react_native_env_QMARK_ = (function figwheel$client$utils$html_or_react_native_env_QMARK_(){
return ((figwheel.client.utils.html_env_QMARK_.call(null)) || (figwheel.client.utils.react_native_env_QMARK_.call(null)));
});
figwheel.client.utils.worker_env_QMARK_ = (function figwheel$client$utils$worker_env_QMARK_(){
return (((goog.global.document == null)) && ((typeof self !== 'undefined')) && ((!((self.importScripts == null)))));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"html","html",-998796897);
} else {
if(figwheel.client.utils.react_native_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"react-native","react-native",-1543085138);
} else {
if(figwheel.client.utils.worker_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"worker","worker",938239996);
} else {
return null;
}
}
}
}
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,"$1");
});
figwheel.client.utils.create_custom_event = (function figwheel$client$utils$create_custom_event(event_name,data){
if((!(goog.userAgent.product.IE))){
<<<<<<< HEAD
return (new CustomEvent(event_name,(function (){var obj34104 = ({"detail":data});
return obj34104;
=======
return (new CustomEvent(event_name,(function (){var obj34609 = ({"detail":data});
return obj34609;
>>>>>>> 8f3c68a (Initial Commit)
})()));
} else {
var event = document.createEvent("CustomEvent");
event.initCustomEvent(event_name,false,false,data);

return event;
}
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_(((figwheel.client.utils.html_env_QMARK_.call(null))?(function (){var and__4115__auto__ = goog.object.get(window,"CustomEvent");
if(cljs.core.truth_(and__4115__auto__)){
return typeof document !== 'undefined';
} else {
return and__4115__auto__;
}
})():false))){
return document.body.dispatchEvent(figwheel.client.utils.create_custom_event.call(null,event_name,data));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = ((((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o))))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
<<<<<<< HEAD
var G__34110 = arguments.length;
switch (G__34110) {
=======
var G__34615 = arguments.length;
switch (G__34615) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
}));

(figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
<<<<<<< HEAD
var f = (function (){var pred__34111 = cljs.core._EQ_;
var expr__34112 = ((figwheel.client.utils.html_or_react_native_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__34111.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__34112))){
return (function (p1__34105_SHARP_){
return console.warn(p1__34105_SHARP_);
});
} else {
if(cljs.core.truth_(pred__34111.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__34112))){
return (function (p1__34106_SHARP_){
return console.debug(p1__34106_SHARP_);
});
} else {
if(cljs.core.truth_(pred__34111.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__34112))){
return (function (p1__34107_SHARP_){
return console.error(p1__34107_SHARP_);
});
} else {
return (function (p1__34108_SHARP_){
return console.log(p1__34108_SHARP_);
=======
var f = (function (){var pred__34616 = cljs.core._EQ_;
var expr__34617 = ((figwheel.client.utils.html_or_react_native_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__34616.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__34617))){
return (function (p1__34610_SHARP_){
return console.warn(p1__34610_SHARP_);
});
} else {
if(cljs.core.truth_(pred__34616.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__34617))){
return (function (p1__34611_SHARP_){
return console.debug(p1__34611_SHARP_);
});
} else {
if(cljs.core.truth_(pred__34616.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__34617))){
return (function (p1__34612_SHARP_){
return console.error(p1__34612_SHARP_);
});
} else {
return (function (p1__34613_SHARP_){
return console.log(p1__34613_SHARP_);
>>>>>>> 8f3c68a (Initial Commit)
});
}
}
}
})();
return f.call(null,arg);
}));

(figwheel.client.utils.log.cljs$lang$maxFixedArity = 2);

<<<<<<< HEAD
figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__34115){
var map__34116 = p__34115;
var map__34116__$1 = (((((!((map__34116 == null))))?(((((map__34116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34116):map__34116);
var opts = map__34116__$1;
var eval_fn = cljs.core.get.call(null,map__34116__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
=======
figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__34620){
var map__34621 = p__34620;
var map__34621__$1 = (((((!((map__34621 == null))))?(((((map__34621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34621):map__34621);
var opts = map__34621__$1;
var eval_fn = cljs.core.get.call(null,map__34621__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(eval_fn)){
return eval_fn.call(null,code,opts);
} else {
return eval(code);
}
});
figwheel.client.utils.pprint_to_string = (function figwheel$client$utils$pprint_to_string(x){
var sb = (new goog.string.StringBuffer());
var sbw = (new cljs.core.StringBufferWriter(sb));
cljs.pprint.pprint.call(null,x,sbw);

return goog.string.trimRight(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
});
/**
 * chains an async action on to a deferred
 *   Must provide a goog.async.Deferred and action function that
 *   takes an initial value and a continuation fn to call with the result
 */
figwheel.client.utils.liftContD = (function figwheel$client$utils$liftContD(deferred,f){
return deferred.then((function (val){
var new_def = (new goog.async.Deferred());
<<<<<<< HEAD
f.call(null,val,(function (p1__34118_SHARP_){
return new_def.callback(p1__34118_SHARP_);
=======
f.call(null,val,(function (p1__34623_SHARP_){
return new_def.callback(p1__34623_SHARP_);
>>>>>>> 8f3c68a (Initial Commit)
}));

return new_def;
}));
});
/**
 * maps an async action across a collection and chains the results
 *   onto a deferred
 */
figwheel.client.utils.mapConcatD = (function figwheel$client$utils$mapConcatD(deferred,f,coll){
var results = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
return cljs.core.reduce.call(null,(function (defr,v){
return figwheel.client.utils.liftContD.call(null,defr,(function (_,fin){
return f.call(null,v,(function (v__$1){
cljs.core.swap_BANG_.call(null,results,cljs.core.conj,v__$1);

return fin.call(null,v__$1);
}));
}));
}),deferred,coll).then((function (_){
return goog.async.Deferred.succeed(cljs.core.deref.call(null,results));
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.utils !== 'undefined') && (typeof figwheel.client.utils.local_persistent_config !== 'undefined')){
} else {
figwheel.client.utils.local_persistent_config = (function (){var a = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((((typeof localStorage !== 'undefined')) && ((!((goog.object.get(localStorage,"setItem") == null)))))){
cljs.core.add_watch.call(null,a,new cljs.core.Keyword(null,"sync-local-storage","sync-local-storage",-473590105),(function (_,___$1,___$2,n){
<<<<<<< HEAD
return cljs.core.mapv.call(null,(function (p__34119){
var vec__34120 = p__34119;
var ky = cljs.core.nth.call(null,vec__34120,(0),null);
var v = cljs.core.nth.call(null,vec__34120,(1),null);
=======
return cljs.core.mapv.call(null,(function (p__34624){
var vec__34625 = p__34624;
var ky = cljs.core.nth.call(null,vec__34625,(0),null);
var v = cljs.core.nth.call(null,vec__34625,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return localStorage.setItem(cljs.core.name.call(null,ky),cljs.core.pr_str.call(null,v));
}),n);
}));
} else {
}

return a;
})();
}
/**
 * Set a local value on a key that in a browser will persist even when
 * the browser gets reloaded.
 */
figwheel.client.utils.persistent_config_set_BANG_ = (function figwheel$client$utils$persistent_config_set_BANG_(ky,v){
return cljs.core.swap_BANG_.call(null,figwheel.client.utils.local_persistent_config,cljs.core.assoc,ky,v);
});
figwheel.client.utils.persistent_config_get = (function figwheel$client$utils$persistent_config_get(var_args){
<<<<<<< HEAD
var G__34124 = arguments.length;
switch (G__34124) {
=======
var G__34629 = arguments.length;
switch (G__34629) {
>>>>>>> 8f3c68a (Initial Commit)
case 2:
return figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$2 = (function (ky,not_found){
try{if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,figwheel.client.utils.local_persistent_config),ky)){
return cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.utils.local_persistent_config),ky);
} else {
if(cljs.core.truth_((((((typeof localStorage !== 'undefined')) && ((!((goog.object.get(localStorage,"getItem") == null))))))?localStorage.getItem(cljs.core.name.call(null,ky)):false))){
var v = cljs.reader.read_string.call(null,localStorage.getItem(cljs.core.name.call(null,ky)));
figwheel.client.utils.persistent_config_set_BANG_.call(null,ky,v);

return v;
} else {
return not_found;

}
}
<<<<<<< HEAD
}catch (e34125){if((e34125 instanceof Error)){
var e = e34125;
return not_found;
} else {
throw e34125;
=======
}catch (e34630){if((e34630 instanceof Error)){
var e = e34630;
return not_found;
} else {
throw e34630;
>>>>>>> 8f3c68a (Initial Commit)

}
}}));

(figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$1 = (function (ky){
return figwheel.client.utils.persistent_config_get.call(null,ky,null);
}));

(figwheel.client.utils.persistent_config_get.cljs$lang$maxFixedArity = 2);


<<<<<<< HEAD
//# sourceMappingURL=utils.js.map?rel=1602979381336
=======
//# sourceMappingURL=utils.js.map?rel=1608004507536
>>>>>>> 8f3c68a (Initial Commit)
