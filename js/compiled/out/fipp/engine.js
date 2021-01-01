// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('fipp.engine');
goog.require('cljs.core');
goog.require('fipp.deque');
if((typeof fipp !== 'undefined') && (typeof fipp.engine !== 'undefined') && (typeof fipp.engine.serialize_node !== 'undefined')){
} else {
fipp.engine.serialize_node = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fipp.engine","serialize-node"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
fipp.engine.serialize = (function fipp$engine$serialize(doc){
if((doc == null)){
return null;
} else {
if(cljs.core.seq_QMARK_.call(null,doc)){
return cljs.core.mapcat.call(null,fipp.engine.serialize,doc);
} else {
if(typeof doc === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),doc], null)], null);
} else {
if((doc instanceof cljs.core.Keyword)){
return fipp.engine.serialize_node.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null));
} else {
if(cljs.core.vector_QMARK_.call(null,doc)){
return fipp.engine.serialize_node.call(null,doc);
} else {
throw cljs.core.ex_info.call(null,"Unexpected class for doc node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),doc], null));

}
}
}
}
}
});
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__25967){
var vec__25968 = p__25967;
var seq__25969 = cljs.core.seq.call(null,vec__25968);
var first__25970 = cljs.core.first.call(null,seq__25969);
var seq__25969__$1 = cljs.core.next.call(null,seq__25969);
var _ = first__25970;
var text = seq__25969__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__25971){
var vec__25972 = p__25971;
var seq__25973 = cljs.core.seq.call(null,vec__25972);
var first__25974 = cljs.core.first.call(null,seq__25973);
var seq__25973__$1 = cljs.core.next.call(null,seq__25973);
var _ = first__25974;
var text = seq__25973__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"escaped","escaped",-1007929769),(function (p__25975){
var vec__25976 = p__25975;
var _ = cljs.core.nth.call(null,vec__25976,(0),null);
var text = cljs.core.nth.call(null,vec__25976,(1),null);
if(typeof text === 'string'){
} else {
throw (new Error("Assert failed: (string? text)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"escaped","escaped",-1007929769),new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"span","span",1394872991),(function (p__25979){
var vec__25980 = p__25979;
var seq__25981 = cljs.core.seq.call(null,vec__25980);
var first__25982 = cljs.core.first.call(null,seq__25981);
var seq__25981__$1 = cljs.core.next.call(null,seq__25981);
var _ = first__25982;
var children = seq__25981__$1;
return fipp.engine.serialize.call(null,children);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"line","line",212345235),(function (p__25983){
var vec__25984 = p__25983;
var _ = cljs.core.nth.call(null,vec__25984,(0),null);
var inline = cljs.core.nth.call(null,vec__25984,(1),null);
var terminate = cljs.core.nth.call(null,vec__25984,(2),null);
var inline__$1 = (function (){var or__4126__auto__ = inline;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return " ";
}
})();
var terminate__$1 = (function (){var or__4126__auto__ = terminate;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})();
if(typeof inline__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? inline)"));
}

if(typeof terminate__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? terminate)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"inline","inline",1399884222),inline__$1,new cljs.core.Keyword(null,"terminate","terminate",1256003496),terminate__$1], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"break","break",126570225),(function() { 
var G__25987__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"break","break",126570225)], null)], null);
};
var G__25987 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__25988__i = 0, G__25988__a = new Array(arguments.length -  0);
while (G__25988__i < G__25988__a.length) {G__25988__a[G__25988__i] = arguments[G__25988__i + 0]; ++G__25988__i;}
  _ = new cljs.core.IndexedSeq(G__25988__a,0,null);
} 
return G__25987__delegate.call(this,_);};
G__25987.cljs$lang$maxFixedArity = 0;
G__25987.cljs$lang$applyTo = (function (arglist__25989){
var _ = cljs.core.seq(arglist__25989);
return G__25987__delegate(_);
});
G__25987.cljs$core$IFn$_invoke$arity$variadic = G__25987__delegate;
return G__25987;
})()
);
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"group","group",582596132),(function (p__25990){
var vec__25991 = p__25990;
var seq__25992 = cljs.core.seq.call(null,vec__25991);
var first__25993 = cljs.core.first.call(null,seq__25992);
var seq__25992__$1 = cljs.core.next.call(null,seq__25992);
var _ = first__25993;
var children = seq__25992__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319)], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"end","end",-268185958)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (p__25994){
var vec__25995 = p__25994;
var seq__25996 = cljs.core.seq.call(null,vec__25995);
var first__25997 = cljs.core.first.call(null,seq__25996);
var seq__25996__$1 = cljs.core.next.call(null,seq__25996);
var _ = first__25997;
var args = seq__25996__$1;
var vec__25998 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(2),args));
var seq__25999 = cljs.core.seq.call(null,vec__25998);
var first__26000 = cljs.core.first.call(null,seq__25999);
var seq__25999__$1 = cljs.core.next.call(null,seq__25999);
var offset = first__26000;
var children = seq__25999__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"align","align",1964212802),(function (p__26001){
var vec__26002 = p__26001;
var seq__26003 = cljs.core.seq.call(null,vec__26002);
var first__26004 = cljs.core.first.call(null,seq__26003);
var seq__26003__$1 = cljs.core.next.call(null,seq__26003);
var _ = first__26004;
var args = seq__26003__$1;
var vec__26005 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(0),args));
var seq__26006 = cljs.core.seq.call(null,vec__26005);
var first__26007 = cljs.core.first.call(null,seq__26006);
var seq__26006__$1 = cljs.core.next.call(null,seq__26006);
var offset = first__26007;
var children = seq__26006__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
/**
 * A transducer which annotates the right-side of nodes assuming a
 *   hypothetical single-line formatting of the document. Groups and indentation
 *   directives are temporarily assumed to be zero-width. These values are used
 *   by subsequent passes to produce the final layout.
 */
fipp.engine.annotate_rights = (function fipp$engine$annotate_rights(rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
return (function() {
var G__26009 = null;
var G__26009__0 = (function (){
return rf.call(null);
});
var G__26009__1 = (function (res){
return rf.call(null,res);
});
var G__26009__2 = (function (res,node){
var delta = (function (){var G__26008 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node);
var G__26008__$1 = (((G__26008 instanceof cljs.core.Keyword))?G__26008.fqn:null);
switch (G__26008__$1) {
case "text":
return cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node));

break;
case "line":
return cljs.core.count.call(null,new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node));

break;
case "escaped":
return (1);

break;
default:
return (0);

}
})();
var p = cljs.core._vreset_BANG_.call(null,pos,(cljs.core._deref.call(null,pos) + delta));
return rf.call(null,res,cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"right","right",-452581833),p));
});
G__26009 = function(res,node){
switch(arguments.length){
case 0:
return G__26009__0.call(this);
case 1:
return G__26009__1.call(this,res);
case 2:
return G__26009__2.call(this,res,node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26009.cljs$core$IFn$_invoke$arity$0 = G__26009__0;
G__26009.cljs$core$IFn$_invoke$arity$1 = G__26009__1;
G__26009.cljs$core$IFn$_invoke$arity$2 = G__26009__2;
return G__26009;
})()
});
fipp.engine.update_right = (function fipp$engine$update_right(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26014 = arguments.length;
var i__4737__auto___26015 = (0);
while(true){
if((i__4737__auto___26015 < len__4736__auto___26014)){
args__4742__auto__.push((arguments[i__4737__auto___26015]));

var G__26016 = (i__4737__auto___26015 + (1));
i__4737__auto___26015 = G__26016;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic = (function (deque,f,args){
return fipp.deque.conjr.call(null,cljs.core.pop.call(null,deque),cljs.core.apply.call(null,f,cljs.core.peek.call(null,deque),args));
}));

(fipp.engine.update_right.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(fipp.engine.update_right.cljs$lang$applyTo = (function (seq26011){
var G__26012 = cljs.core.first.call(null,seq26011);
var seq26011__$1 = cljs.core.next.call(null,seq26011);
var G__26013 = cljs.core.first.call(null,seq26011__$1);
var seq26011__$2 = cljs.core.next.call(null,seq26011__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26012,G__26013,seq26011__$2);
}));

/**
 * Given printing options, returns a transducer which annotate the right-side
 *   of groups on their :begin nodes.  This includes the pruning algorithm which
 *   will annotate some :begin nodes as being :too-far to the right without
 *   calculating their exact sizes.
 */
fipp.engine.annotate_begins = (function fipp$engine$annotate_begins(p__26017){
var map__26018 = p__26017;
var map__26018__$1 = (((((!((map__26018 == null))))?(((((map__26018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26018):map__26018);
var options = map__26018__$1;
var width = cljs.core.get.call(null,map__26018__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return (function (rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
var bufs = cljs.core.volatile_BANG_.call(null,fipp.deque.empty);
return (function() {
var G__26023 = null;
var G__26023__0 = (function (){
return rf.call(null);
});
var G__26023__1 = (function (res){
return rf.call(null,res);
});
var G__26023__2 = (function (res,p__26020){
var map__26021 = p__26020;
var map__26021__$1 = (((((!((map__26021 == null))))?(((((map__26021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26021):map__26021);
var node = map__26021__$1;
var op = cljs.core.get.call(null,map__26021__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__26021__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var buffers = cljs.core.deref.call(null,bufs);
if(cljs.core.empty_QMARK_.call(null,buffers)){
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"begin","begin",-319034319))){
var position_STAR_ = (right + width);
var buffer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),position_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null);
cljs.core.vreset_BANG_.call(null,pos,position_STAR_);

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.create.call(null,buffer));

return res;
} else {
return rf.call(null,res,node);
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"end","end",-268185958))){
var buffer = cljs.core.peek.call(null,buffers);
var buffers_STAR_ = cljs.core.pop.call(null,buffers);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),right], null);
var nodes = fipp.deque.conjlr.call(null,begin,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer),node);
if(cljs.core.empty_QMARK_.call(null,buffers_STAR_)){
cljs.core.vreset_BANG_.call(null,pos,(0));

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.empty);

return cljs.core.reduce.call(null,rf,res,nodes);
} else {
if(cljs.core.vector_QMARK_.call(null,buffers_STAR_)){
} else {
throw (new Error("Assert failed: (vector? buffers*)"));
}

if(cljs.core.vector_QMARK_.call(null,nodes)){
} else {
throw (new Error("Assert failed: (vector? nodes)"));
}

cljs.core.vreset_BANG_.call(null,bufs,fipp.engine.update_right.call(null,buffers_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.concat,nodes));

return res;
}
} else {
var buffers_STAR_ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"begin","begin",-319034319)))?fipp.deque.conjr.call(null,buffers,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),(right + width),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null)):fipp.engine.update_right.call(null,buffers,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.conjr,node));
var res__$1 = res;
while(true){
if((((right <= cljs.core.deref.call(null,pos))) && ((cljs.core.count.call(null,buffers_STAR_) <= width)))){
cljs.core.vreset_BANG_.call(null,bufs,buffers_STAR_);

return res__$1;
} else {
var buffer = cljs.core.first.call(null,buffers_STAR_);
var buffers_STAR__STAR_ = fipp.deque.popl.call(null,buffers_STAR_);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"too-far","too-far",85800617)], null);
var res_STAR_ = rf.call(null,res__$1,begin);
var res_STAR___$1 = cljs.core.reduce.call(null,rf,res_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer));
if(cljs.core.empty_QMARK_.call(null,buffers_STAR__STAR_)){
cljs.core.vreset_BANG_.call(null,pos,(0));

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.empty);

return res_STAR___$1;
} else {
cljs.core.vreset_BANG_.call(null,pos,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,buffers_STAR__STAR_)));

var G__26024 = buffers_STAR__STAR_;
var G__26025 = res_STAR___$1;
buffers_STAR_ = G__26024;
res__$1 = G__26025;
continue;
}
}
break;
}
}
}
});
G__26023 = function(res,p__26020){
switch(arguments.length){
case 0:
return G__26023__0.call(this);
case 1:
return G__26023__1.call(this,res);
case 2:
return G__26023__2.call(this,res,p__26020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26023.cljs$core$IFn$_invoke$arity$0 = G__26023__0;
G__26023.cljs$core$IFn$_invoke$arity$1 = G__26023__1;
G__26023.cljs$core$IFn$_invoke$arity$2 = G__26023__2;
return G__26023;
})()
});
});
/**
 * Given printing options, returns a transducer which produces the fully
 *   laid-out strings.
 */
fipp.engine.format_nodes = (function fipp$engine$format_nodes(p__26026){
var map__26027 = p__26026;
var map__26027__$1 = (((((!((map__26027 == null))))?(((((map__26027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26027):map__26027);
var options = map__26027__$1;
var width = cljs.core.get.call(null,map__26027__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return (function (rf){
var fits = cljs.core.volatile_BANG_.call(null,(0));
var length = cljs.core.volatile_BANG_.call(null,width);
var tab_stops = cljs.core.volatile_BANG_.call(null,cljs.core.list((0)));
var column = cljs.core.volatile_BANG_.call(null,(0));
return (function() {
var G__26033 = null;
var G__26033__0 = (function (){
return rf.call(null);
});
var G__26033__1 = (function (res){
return rf.call(null,res);
});
var G__26033__2 = (function (res,p__26029){
var map__26030 = p__26029;
var map__26030__$1 = (((((!((map__26030 == null))))?(((((map__26030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26030):map__26030);
var node = map__26030__$1;
var op = cljs.core.get.call(null,map__26030__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__26030__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var indent = cljs.core.peek.call(null,cljs.core.deref.call(null,tab_stops));
var format_text = (function (text,width__$1){
var res_STAR_ = (((cljs.core.deref.call(null,column) === (0)))?(function (){
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + indent));

return rf.call(null,res,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,indent," ")));
})()
:res);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + width__$1));

return rf.call(null,res_STAR_,text);
});
var G__26032 = op;
var G__26032__$1 = (((G__26032 instanceof cljs.core.Keyword))?G__26032.fqn:null);
switch (G__26032__$1) {
case "text":
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
return format_text.call(null,text,cljs.core.count.call(null,text));

break;
case "escaped":
return format_text.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node),(1));

break;
case "pass":
return format_text.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node),(0));

break;
case "line":
if((cljs.core.deref.call(null,fits) === (0))){
cljs.core.vreset_BANG_.call(null,length,((right + width) - indent));

cljs.core.vreset_BANG_.call(null,column,(0));

return rf.call(null,res,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminate","terminate",1256003496).cljs$core$IFn$_invoke$arity$1(node)),"\n"].join(''));
} else {
var inline = new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + cljs.core.count.call(null,inline)));

return rf.call(null,res,inline);
}

break;
case "break":
cljs.core.vreset_BANG_.call(null,length,((right + width) - indent));

cljs.core.vreset_BANG_.call(null,column,(0));

return rf.call(null,res,"\n");

break;
case "nest":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.conj.call(null,cljs.core._deref.call(null,tab_stops),(indent + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "align":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.conj.call(null,cljs.core._deref.call(null,tab_stops),(cljs.core.deref.call(null,column) + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "outdent":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.pop.call(null,cljs.core._deref.call(null,tab_stops)));

return res;

break;
case "begin":
cljs.core.vreset_BANG_.call(null,fits,(((cljs.core.deref.call(null,fits) > (0)))?(cljs.core.deref.call(null,fits) + (1)):((cljs.core._EQ_.call(null,right,new cljs.core.Keyword(null,"too-far","too-far",85800617)))?(0):(((right <= cljs.core.deref.call(null,length)))?(1):(0)
))));

return res;

break;
case "end":
cljs.core.vreset_BANG_.call(null,fits,(function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (cljs.core.deref.call(null,fits) - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})());

return res;

break;
default:
throw cljs.core.ex_info.call(null,"Unexpected node op",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));

}
});
G__26033 = function(res,p__26029){
switch(arguments.length){
case 0:
return G__26033__0.call(this);
case 1:
return G__26033__1.call(this,res);
case 2:
return G__26033__2.call(this,res,p__26029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26033.cljs$core$IFn$_invoke$arity$0 = G__26033__0;
G__26033.cljs$core$IFn$_invoke$arity$1 = G__26033__1;
G__26033.cljs$core$IFn$_invoke$arity$2 = G__26033__2;
return G__26033;
})()
});
});
fipp.engine.print_fns = (function fipp$engine$print_fns(options){
var map__26036 = options;
var map__26036__$1 = (((((!((map__26036 == null))))?(((((map__26036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26036):map__26036);
var print_fn = cljs.core.get.call(null,map__26036__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),cljs.core._STAR_print_fn_STAR_);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"print","print",1299562414),print_fn,new cljs.core.Keyword(null,"println","println",1920840330),(function (){
var _STAR_print_fn_STAR__orig_val__26038 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__26039 = print_fn;
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26039);

try{return cljs.core.println.call(null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26038);
}})], null);
});
fipp.engine.pprint_document = (function fipp$engine$pprint_document(var_args){
var G__26041 = arguments.length;
switch (G__26041) {
case 1:
return fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$1 = (function (document){
return fipp.engine.pprint_document.call(null,document,cljs.core.PersistentArrayMap.EMPTY);
}));

(fipp.engine.pprint_document.cljs$core$IFn$_invoke$arity$2 = (function (document,options){
var options__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),options);
var map__26042 = fipp.engine.print_fns.call(null,options__$1);
var map__26042__$1 = (((((!((map__26042 == null))))?(((((map__26042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26042):map__26042);
var print = cljs.core.get.call(null,map__26042__$1,new cljs.core.Keyword(null,"print","print",1299562414));
var println = cljs.core.get.call(null,map__26042__$1,new cljs.core.Keyword(null,"println","println",1920840330));
cljs.core.run_BANG_.call(null,print,cljs.core.eduction.call(null,fipp.engine.annotate_rights,fipp.engine.annotate_begins.call(null,options__$1),fipp.engine.format_nodes.call(null,options__$1),fipp.engine.serialize.call(null,document)));

return println.call(null);
}));

(fipp.engine.pprint_document.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=engine.js.map?rel=1609481675470
