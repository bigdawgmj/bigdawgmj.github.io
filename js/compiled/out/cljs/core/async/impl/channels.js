// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
<<<<<<< HEAD
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30503 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31008 !== 'undefined')){
>>>>>>> 8f3c68a (Initial Commit)
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30503 = (function (val,meta30504){
this.val = val;
this.meta30504 = meta30504;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30505,meta30504__$1){
var self__ = this;
var _30505__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30503(self__.val,meta30504__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30505){
var self__ = this;
var _30505__$1 = this;
return self__.meta30504;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30503.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
=======
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31008 = (function (val,meta31009){
this.val = val;
this.meta31009 = meta31009;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31010,meta31009__$1){
var self__ = this;
var _31010__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31008(self__.val,meta31009__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31010){
var self__ = this;
var _31010__$1 = this;
return self__.meta31009;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31008.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
>>>>>>> 8f3c68a (Initial Commit)
var self__ = this;
var ___$1 = this;
return self__.val;
}));

<<<<<<< HEAD
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta30504","meta30504",-1250201875,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30503.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30503.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels30503");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30503.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels30503");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels30503.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels30503 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels30503(val__$1,meta30504){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30503(val__$1,meta30504));
=======
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta31009","meta31009",706976912,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31008.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31008.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels31008");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31008.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels31008");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels31008.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels31008 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels31008(val__$1,meta31009){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31008(val__$1,meta31009));
>>>>>>> 8f3c68a (Initial Commit)
});

}

<<<<<<< HEAD
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels30503(val,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels31008(val,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 8f3c68a (Initial Commit)
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

<<<<<<< HEAD
var cljs$core$async$impl$channels$MMC$abort$dyn_30506 = (function (this$){
=======
var cljs$core$async$impl$channels$MMC$abort$dyn_31011 = (function (this$){
>>>>>>> 8f3c68a (Initial Commit)
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
});
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
<<<<<<< HEAD
return cljs$core$async$impl$channels$MMC$abort$dyn_30506.call(null,this$);
=======
return cljs$core$async$impl$channels$MMC$abort$dyn_31011.call(null,this$);
>>>>>>> 8f3c68a (Initial Commit)
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
<<<<<<< HEAD
var putter_30518 = self__.puts.pop();
if((putter_30518 == null)){
} else {
var put_handler_30519 = putter_30518.handler;
var val_30520 = putter_30518.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_30519)){
var put_cb_30521 = cljs.core.async.impl.protocols.commit.call(null,put_handler_30519);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_30521,put_handler_30519,val_30520,putter_30518,this$__$1){
return (function (){
return put_cb_30521.call(null,true);
});})(put_cb_30521,put_handler_30519,val_30520,putter_30518,this$__$1))
=======
var putter_31023 = self__.puts.pop();
if((putter_31023 == null)){
} else {
var put_handler_31024 = putter_31023.handler;
var val_31025 = putter_31023.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_31024)){
var put_cb_31026 = cljs.core.async.impl.protocols.commit.call(null,put_handler_31024);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_31026,put_handler_31024,val_31025,putter_31023,this$__$1){
return (function (){
return put_cb_31026.call(null,true);
});})(put_cb_31026,put_handler_31024,val_31025,putter_31023,this$__$1))
>>>>>>> 8f3c68a (Initial Commit)
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if(((closed__$1) || ((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))))){
return cljs.core.async.impl.channels.box.call(null,(!(closed__$1)));
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = self__.buf;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__4115__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
<<<<<<< HEAD
var G__30522 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
=======
var G__31027 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
>>>>>>> 8f3c68a (Initial Commit)
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
<<<<<<< HEAD
takers = G__30522;
continue;
} else {
var G__30523 = takers;
takers = G__30523;
=======
takers = G__31027;
continue;
} else {
var G__31028 = takers;
takers = G__31028;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
<<<<<<< HEAD
var seq__30507_30524 = cljs.core.seq.call(null,take_cbs);
var chunk__30508_30525 = null;
var count__30509_30526 = (0);
var i__30510_30527 = (0);
while(true){
if((i__30510_30527 < count__30509_30526)){
var f_30528 = cljs.core._nth.call(null,chunk__30508_30525,i__30510_30527);
cljs.core.async.impl.dispatch.run.call(null,f_30528);


var G__30529 = seq__30507_30524;
var G__30530 = chunk__30508_30525;
var G__30531 = count__30509_30526;
var G__30532 = (i__30510_30527 + (1));
seq__30507_30524 = G__30529;
chunk__30508_30525 = G__30530;
count__30509_30526 = G__30531;
i__30510_30527 = G__30532;
continue;
} else {
var temp__5720__auto___30533 = cljs.core.seq.call(null,seq__30507_30524);
if(temp__5720__auto___30533){
var seq__30507_30534__$1 = temp__5720__auto___30533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30507_30534__$1)){
var c__4556__auto___30535 = cljs.core.chunk_first.call(null,seq__30507_30534__$1);
var G__30536 = cljs.core.chunk_rest.call(null,seq__30507_30534__$1);
var G__30537 = c__4556__auto___30535;
var G__30538 = cljs.core.count.call(null,c__4556__auto___30535);
var G__30539 = (0);
seq__30507_30524 = G__30536;
chunk__30508_30525 = G__30537;
count__30509_30526 = G__30538;
i__30510_30527 = G__30539;
continue;
} else {
var f_30540 = cljs.core.first.call(null,seq__30507_30534__$1);
cljs.core.async.impl.dispatch.run.call(null,f_30540);


var G__30541 = cljs.core.next.call(null,seq__30507_30534__$1);
var G__30542 = null;
var G__30543 = (0);
var G__30544 = (0);
seq__30507_30524 = G__30541;
chunk__30508_30525 = G__30542;
count__30509_30526 = G__30543;
i__30510_30527 = G__30544;
=======
var seq__31012_31029 = cljs.core.seq.call(null,take_cbs);
var chunk__31013_31030 = null;
var count__31014_31031 = (0);
var i__31015_31032 = (0);
while(true){
if((i__31015_31032 < count__31014_31031)){
var f_31033 = cljs.core._nth.call(null,chunk__31013_31030,i__31015_31032);
cljs.core.async.impl.dispatch.run.call(null,f_31033);


var G__31034 = seq__31012_31029;
var G__31035 = chunk__31013_31030;
var G__31036 = count__31014_31031;
var G__31037 = (i__31015_31032 + (1));
seq__31012_31029 = G__31034;
chunk__31013_31030 = G__31035;
count__31014_31031 = G__31036;
i__31015_31032 = G__31037;
continue;
} else {
var temp__5720__auto___31038 = cljs.core.seq.call(null,seq__31012_31029);
if(temp__5720__auto___31038){
var seq__31012_31039__$1 = temp__5720__auto___31038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31012_31039__$1)){
var c__4556__auto___31040 = cljs.core.chunk_first.call(null,seq__31012_31039__$1);
var G__31041 = cljs.core.chunk_rest.call(null,seq__31012_31039__$1);
var G__31042 = c__4556__auto___31040;
var G__31043 = cljs.core.count.call(null,c__4556__auto___31040);
var G__31044 = (0);
seq__31012_31029 = G__31041;
chunk__31013_31030 = G__31042;
count__31014_31031 = G__31043;
i__31015_31032 = G__31044;
continue;
} else {
var f_31045 = cljs.core.first.call(null,seq__31012_31039__$1);
cljs.core.async.impl.dispatch.run.call(null,f_31045);


var G__31046 = cljs.core.next.call(null,seq__31012_31039__$1);
var G__31047 = null;
var G__31048 = (0);
var G__31049 = (0);
seq__31012_31029 = G__31046;
chunk__31013_31030 = G__31047;
count__31014_31031 = G__31048;
i__31015_31032 = G__31049;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return take_cb.call(null,val);
}));

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var temp__5718__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5718__auto__)){
var take_cb = temp__5718__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
<<<<<<< HEAD
var vec__30511 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
=======
var vec__31016 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
>>>>>>> 8f3c68a (Initial Commit)
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = ((cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler))?cljs.core.async.impl.protocols.commit.call(null,put_handler):false);
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if(((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0))))){
<<<<<<< HEAD
var G__30545 = cbs__$1;
cbs = G__30545;
=======
var G__31050 = cbs__$1;
cbs = G__31050;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
<<<<<<< HEAD
var done_QMARK_ = cljs.core.nth.call(null,vec__30511,(0),null);
var cbs = cljs.core.nth.call(null,vec__30511,(1),null);
=======
var done_QMARK_ = cljs.core.nth.call(null,vec__31016,(0),null);
var cbs = cljs.core.nth.call(null,vec__31016,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

<<<<<<< HEAD
var seq__30514_30546 = cljs.core.seq.call(null,cbs);
var chunk__30515_30547 = null;
var count__30516_30548 = (0);
var i__30517_30549 = (0);
while(true){
if((i__30517_30549 < count__30516_30548)){
var cb_30550 = cljs.core._nth.call(null,chunk__30515_30547,i__30517_30549);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__30514_30546,chunk__30515_30547,count__30516_30548,i__30517_30549,cb_30550,val,vec__30511,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1){
return (function (){
return cb_30550.call(null,true);
});})(seq__30514_30546,chunk__30515_30547,count__30516_30548,i__30517_30549,cb_30550,val,vec__30511,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1))
);


var G__30551 = seq__30514_30546;
var G__30552 = chunk__30515_30547;
var G__30553 = count__30516_30548;
var G__30554 = (i__30517_30549 + (1));
seq__30514_30546 = G__30551;
chunk__30515_30547 = G__30552;
count__30516_30548 = G__30553;
i__30517_30549 = G__30554;
continue;
} else {
var temp__5720__auto___30555 = cljs.core.seq.call(null,seq__30514_30546);
if(temp__5720__auto___30555){
var seq__30514_30556__$1 = temp__5720__auto___30555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30514_30556__$1)){
var c__4556__auto___30557 = cljs.core.chunk_first.call(null,seq__30514_30556__$1);
var G__30558 = cljs.core.chunk_rest.call(null,seq__30514_30556__$1);
var G__30559 = c__4556__auto___30557;
var G__30560 = cljs.core.count.call(null,c__4556__auto___30557);
var G__30561 = (0);
seq__30514_30546 = G__30558;
chunk__30515_30547 = G__30559;
count__30516_30548 = G__30560;
i__30517_30549 = G__30561;
continue;
} else {
var cb_30562 = cljs.core.first.call(null,seq__30514_30556__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__30514_30546,chunk__30515_30547,count__30516_30548,i__30517_30549,cb_30562,seq__30514_30556__$1,temp__5720__auto___30555,val,vec__30511,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1){
return (function (){
return cb_30562.call(null,true);
});})(seq__30514_30546,chunk__30515_30547,count__30516_30548,i__30517_30549,cb_30562,seq__30514_30556__$1,temp__5720__auto___30555,val,vec__30511,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1))
);


var G__30563 = cljs.core.next.call(null,seq__30514_30556__$1);
var G__30564 = null;
var G__30565 = (0);
var G__30566 = (0);
seq__30514_30546 = G__30563;
chunk__30515_30547 = G__30564;
count__30516_30548 = G__30565;
i__30517_30549 = G__30566;
=======
var seq__31019_31051 = cljs.core.seq.call(null,cbs);
var chunk__31020_31052 = null;
var count__31021_31053 = (0);
var i__31022_31054 = (0);
while(true){
if((i__31022_31054 < count__31021_31053)){
var cb_31055 = cljs.core._nth.call(null,chunk__31020_31052,i__31022_31054);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__31019_31051,chunk__31020_31052,count__31021_31053,i__31022_31054,cb_31055,val,vec__31016,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1){
return (function (){
return cb_31055.call(null,true);
});})(seq__31019_31051,chunk__31020_31052,count__31021_31053,i__31022_31054,cb_31055,val,vec__31016,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1))
);


var G__31056 = seq__31019_31051;
var G__31057 = chunk__31020_31052;
var G__31058 = count__31021_31053;
var G__31059 = (i__31022_31054 + (1));
seq__31019_31051 = G__31056;
chunk__31020_31052 = G__31057;
count__31021_31053 = G__31058;
i__31022_31054 = G__31059;
continue;
} else {
var temp__5720__auto___31060 = cljs.core.seq.call(null,seq__31019_31051);
if(temp__5720__auto___31060){
var seq__31019_31061__$1 = temp__5720__auto___31060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31019_31061__$1)){
var c__4556__auto___31062 = cljs.core.chunk_first.call(null,seq__31019_31061__$1);
var G__31063 = cljs.core.chunk_rest.call(null,seq__31019_31061__$1);
var G__31064 = c__4556__auto___31062;
var G__31065 = cljs.core.count.call(null,c__4556__auto___31062);
var G__31066 = (0);
seq__31019_31051 = G__31063;
chunk__31020_31052 = G__31064;
count__31021_31053 = G__31065;
i__31022_31054 = G__31066;
continue;
} else {
var cb_31067 = cljs.core.first.call(null,seq__31019_31061__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__31019_31051,chunk__31020_31052,count__31021_31053,i__31022_31054,cb_31067,seq__31019_31061__$1,temp__5720__auto___31060,val,vec__31016,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1){
return (function (){
return cb_31067.call(null,true);
});})(seq__31019_31051,chunk__31020_31052,count__31021_31053,i__31022_31054,cb_31067,seq__31019_31061__$1,temp__5720__auto___31060,val,vec__31016,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1))
);


var G__31068 = cljs.core.next.call(null,seq__31019_31061__$1);
var G__31069 = null;
var G__31070 = (0);
var G__31071 = (0);
seq__31019_31051 = G__31068;
chunk__31020_31052 = G__31069;
count__31021_31053 = G__31070;
i__31022_31054 = G__31071;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return put_cb.call(null,true);
}));

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__4115__auto__;
}
})())){
var has_val = (function (){var and__4115__auto__ = self__.buf;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__4115__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__4115__auto__ = self__.buf;
if(cljs.core.truth_(and__4115__auto__)){
return (self__.puts.length === (0));
} else {
return and__4115__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
<<<<<<< HEAD
var taker_30567 = self__.takes.pop();
if((taker_30567 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_30567)){
var take_cb_30568 = cljs.core.async.impl.protocols.commit.call(null,taker_30567);
var val_30569 = (cljs.core.truth_((function (){var and__4115__auto__ = self__.buf;
=======
var taker_31072 = self__.takes.pop();
if((taker_31072 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_31072)){
var take_cb_31073 = cljs.core.async.impl.protocols.commit.call(null,taker_31072);
var val_31074 = (cljs.core.truth_((function (){var and__4115__auto__ = self__.buf;
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__4115__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
<<<<<<< HEAD
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_30568,val_30569,taker_30567,this$__$1){
return (function (){
return take_cb_30568.call(null,val_30569);
});})(take_cb_30568,val_30569,taker_30567,this$__$1))
=======
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_31073,val_31074,taker_31072,this$__$1){
return (function (){
return take_cb_31073.call(null,val_31074);
});})(take_cb_31073,val_31074,taker_31072,this$__$1))
>>>>>>> 8f3c68a (Initial Commit)
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__4126__auto__ = exh;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
<<<<<<< HEAD
var G__30571 = arguments.length;
switch (G__30571) {
=======
var G__31076 = arguments.length;
switch (G__31076) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
<<<<<<< HEAD
var G__30575 = null;
var G__30575__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e30572){var t = e30572;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__30575__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e30573){var t = e30573;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__30575 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__30575__1.call(this,buf__$1);
case 2:
return G__30575__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30575.cljs$core$IFn$_invoke$arity$1 = G__30575__1;
G__30575.cljs$core$IFn$_invoke$arity$2 = G__30575__2;
return G__30575;
=======
var G__31080 = null;
var G__31080__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e31077){var t = e31077;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__31080__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e31078){var t = e31078;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__31080 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__31080__1.call(this,buf__$1);
case 2:
return G__31080__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31080.cljs$core$IFn$_invoke$arity$1 = G__31080__1;
G__31080.cljs$core$IFn$_invoke$arity$2 = G__31080__2;
return G__31080;
>>>>>>> 8f3c68a (Initial Commit)
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


<<<<<<< HEAD
//# sourceMappingURL=channels.js.map?rel=1602979380012
=======
//# sourceMappingURL=channels.js.map?rel=1608004506051
>>>>>>> 8f3c68a (Initial Commit)
