// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__46190__delegate = function (x__46169__auto__){
if(cljs.core.truth_(myblog.core.on_js_reload)){
return cljs.core.apply.call(null,myblog.core.on_js_reload,x__46169__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","myblog.core/on-js-reload","' is missing"].join(''));
}
};
var G__46190 = function (var_args){
var x__46169__auto__ = null;
if (arguments.length > 0) {
var G__46191__i = 0, G__46191__a = new Array(arguments.length -  0);
while (G__46191__i < G__46191__a.length) {G__46191__a[G__46191__i] = arguments[G__46191__i + 0]; ++G__46191__i;}
  x__46169__auto__ = new cljs.core.IndexedSeq(G__46191__a,0,null);
} 
return G__46190__delegate.call(this,x__46169__auto__);};
G__46190.cljs$lang$maxFixedArity = 0;
G__46190.cljs$lang$applyTo = (function (arglist__46192){
var x__46169__auto__ = cljs.core.seq(arglist__46192);
return G__46190__delegate(x__46169__auto__);
});
G__46190.cljs$core$IFn$_invoke$arity$variadic = G__46190__delegate;
return G__46190;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1608009996640
