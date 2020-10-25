// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('myblog.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('reitit.frontend');
goog.require('reitit.frontend.easy');
goog.require('reitit.coercion.spec');
goog.require('fipp.edn');
goog.require('reagent.dom');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/myblog/core.cljs. Go ahead and edit it and see reloading in action.");
if((typeof myblog !== 'undefined') && (typeof myblog.core !== 'undefined') && (typeof myblog.core.app_state !== 'undefined')){
} else {
myblog.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"mark.jensen1@gmail.com",new cljs.core.Keyword(null,"title","title",636505583),"Mark Jensen P.E.",new cljs.core.Keyword(null,"tweet","tweet",-864583252),"Tweet Me",new cljs.core.Keyword(null,"contact","contact",609093372),"Contact Me"], null));
}
myblog.core.home_page = (function myblog$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.main","h1.main",1446374679),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,myblog.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.caption","h3.caption",1878141365),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,myblog.core.app_state))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.img-main","div.img-main",1603624473),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/IMG_1253.jpg"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.break","div.break",-562691729)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.blog","div.blog",-1563586969),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.my-title","h3.my-title",137207766),"Civil / Data Engineer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Whether designing pipelines for water or data, I enjoy implementing inovative solutions."], null)], null)], null)], null);
});
myblog.core.about_page = (function myblog$core$about_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"About page"], null)], null);
});
myblog.core.contact_page = (function myblog$core$contact_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Contact page"], null)], null);
});
myblog.core.item_page = (function myblog$core$item_page(match){
var map__29131 = new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match);
var map__29131__$1 = (((((!((map__29131 == null))))?(((((map__29131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29131):map__29131);
var path = cljs.core.get.call(null,map__29131__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var query = cljs.core.get.call(null,map__29131__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__29132 = path;
var map__29132__$1 = (((((!((map__29132 == null))))?(((((map__29132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29132):map__29132);
var id = cljs.core.get.call(null,map__29132__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Selected Item ",id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"foo","foo",1268894036).cljs$core$IFn$_invoke$arity$1(query))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Optional foo query param: ",new cljs.core.Keyword(null,"foo","foo",1268894036).cljs$core$IFn$_invoke$arity$1(query)], null):null)], null);
});
if((typeof myblog !== 'undefined') && (typeof myblog.core !== 'undefined') && (typeof myblog.core.match !== 'undefined')){
} else {
myblog.core.match = reagent.core.atom.call(null,null);
}
myblog.core.current_page = (function myblog$core$current_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.home","div.home",945363175),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.navigation","ul.navigation",-1679523197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.call(null,new cljs.core.Keyword("myblog.core","homepage","myblog.core/homepage",1885843304))], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.call(null,new cljs.core.Keyword("myblog.core","about","myblog.core/about",1091870208))], null),"About"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.call(null,new cljs.core.Keyword("myblog.core","contact","myblog.core/contact",815253691))], null),"Contact"], null)], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,myblog.core.match))?(function (){var view = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,myblog.core.match)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,cljs.core.deref.call(null,myblog.core.match)], null);
})():null)], null);
});
myblog.core.routes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("myblog.core","homepage","myblog.core/homepage",1885843304),new cljs.core.Keyword(null,"view","view",1247994814),myblog.core.home_page], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("myblog.core","about","myblog.core/about",1091870208),new cljs.core.Keyword(null,"view","view",1247994814),myblog.core.about_page], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/contact",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("myblog.core","contact","myblog.core/contact",815253691),new cljs.core.Keyword(null,"view","view",1247994814),myblog.core.contact_page], null)], null)], null);
myblog.core.init_BANG_ = (function myblog$core$init_BANG_(){
reitit.frontend.easy.start_BANG_.call(null,reitit.frontend.router.call(null,myblog.core.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null)),(function (m){
return cljs.core.reset_BANG_.call(null,myblog.core.match,m);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [myblog.core.current_page], null),document.getElementById("app"));
});
myblog.core.init_BANG_.call(null);
myblog.core.on_js_reload = (function myblog$core$on_js_reload(){
return cljs.core.swap_BANG_.call(null,myblog.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__figwheel_counter","__figwheel_counter",-1660671811)], null),cljs.core.inc);
});

//# sourceMappingURL=core.js.map?rel=1603607912649
