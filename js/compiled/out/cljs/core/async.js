// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32696 = arguments.length;
switch (G__32696) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32697 = (function (f,blockable,meta32698){
this.f = f;
this.blockable = blockable;
this.meta32698 = meta32698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32699,meta32698__$1){
var self__ = this;
var _32699__$1 = this;
return (new cljs.core.async.t_cljs$core$async32697(self__.f,self__.blockable,meta32698__$1));
}));

(cljs.core.async.t_cljs$core$async32697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32699){
var self__ = this;
var _32699__$1 = this;
return self__.meta32698;
}));

(cljs.core.async.t_cljs$core$async32697.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32697.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32698","meta32698",247713300,null)], null);
}));

(cljs.core.async.t_cljs$core$async32697.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32697");

(cljs.core.async.t_cljs$core$async32697.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async32697");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32697.
 */
cljs.core.async.__GT_t_cljs$core$async32697 = (function cljs$core$async$__GT_t_cljs$core$async32697(f__$1,blockable__$1,meta32698){
return (new cljs.core.async.t_cljs$core$async32697(f__$1,blockable__$1,meta32698));
});

}

return (new cljs.core.async.t_cljs$core$async32697(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32703 = arguments.length;
switch (G__32703) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32706 = arguments.length;
switch (G__32706) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32709 = arguments.length;
switch (G__32709) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32711 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32711);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_32711);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32713 = arguments.length;
switch (G__32713) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32715 = n;
var x_32716 = (0);
while(true){
if((x_32716 < n__4613__auto___32715)){
(a[x_32716] = x_32716);

var G__32717 = (x_32716 + (1));
x_32716 = G__32717;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32718 = (function (flag,meta32719){
this.flag = flag;
this.meta32719 = meta32719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32720,meta32719__$1){
var self__ = this;
var _32720__$1 = this;
return (new cljs.core.async.t_cljs$core$async32718(self__.flag,meta32719__$1));
}));

(cljs.core.async.t_cljs$core$async32718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32720){
var self__ = this;
var _32720__$1 = this;
return self__.meta32719;
}));

(cljs.core.async.t_cljs$core$async32718.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async32718.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32719","meta32719",-799962050,null)], null);
}));

(cljs.core.async.t_cljs$core$async32718.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32718");

(cljs.core.async.t_cljs$core$async32718.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async32718");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32718.
 */
cljs.core.async.__GT_t_cljs$core$async32718 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32718(flag__$1,meta32719){
return (new cljs.core.async.t_cljs$core$async32718(flag__$1,meta32719));
});

}

return (new cljs.core.async.t_cljs$core$async32718(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32721 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32721 = (function (flag,cb,meta32722){
this.flag = flag;
this.cb = cb;
this.meta32722 = meta32722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32723,meta32722__$1){
var self__ = this;
var _32723__$1 = this;
return (new cljs.core.async.t_cljs$core$async32721(self__.flag,self__.cb,meta32722__$1));
}));

(cljs.core.async.t_cljs$core$async32721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32723){
var self__ = this;
var _32723__$1 = this;
return self__.meta32722;
}));

(cljs.core.async.t_cljs$core$async32721.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32721.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async32721.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32721.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32722","meta32722",-586899197,null)], null);
}));

(cljs.core.async.t_cljs$core$async32721.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32721");

(cljs.core.async.t_cljs$core$async32721.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async32721");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32721.
 */
cljs.core.async.__GT_t_cljs$core$async32721 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32721(flag__$1,cb__$1,meta32722){
return (new cljs.core.async.t_cljs$core$async32721(flag__$1,cb__$1,meta32722));
});

}

return (new cljs.core.async.t_cljs$core$async32721(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32724_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32724_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32725_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32725_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32726 = (i + (1));
i = G__32726;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32732 = arguments.length;
var i__4737__auto___32733 = (0);
while(true){
if((i__4737__auto___32733 < len__4736__auto___32732)){
args__4742__auto__.push((arguments[i__4737__auto___32733]));

var G__32734 = (i__4737__auto___32733 + (1));
i__4737__auto___32733 = G__32734;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32729){
var map__32730 = p__32729;
var map__32730__$1 = (((((!((map__32730 == null))))?(((((map__32730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32730):map__32730);
var opts = map__32730__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32727){
var G__32728 = cljs.core.first.call(null,seq32727);
var seq32727__$1 = cljs.core.next.call(null,seq32727);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32728,seq32727__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32736 = arguments.length;
switch (G__32736) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32636__auto___32782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_32760){
var state_val_32761 = (state_32760[(1)]);
if((state_val_32761 === (7))){
var inst_32756 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
var statearr_32762_32783 = state_32760__$1;
(statearr_32762_32783[(2)] = inst_32756);

(statearr_32762_32783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (1))){
var state_32760__$1 = state_32760;
var statearr_32763_32784 = state_32760__$1;
(statearr_32763_32784[(2)] = null);

(statearr_32763_32784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (4))){
var inst_32739 = (state_32760[(7)]);
var inst_32739__$1 = (state_32760[(2)]);
var inst_32740 = (inst_32739__$1 == null);
var state_32760__$1 = (function (){var statearr_32764 = state_32760;
(statearr_32764[(7)] = inst_32739__$1);

return statearr_32764;
})();
if(cljs.core.truth_(inst_32740)){
var statearr_32765_32785 = state_32760__$1;
(statearr_32765_32785[(1)] = (5));

} else {
var statearr_32766_32786 = state_32760__$1;
(statearr_32766_32786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (13))){
var state_32760__$1 = state_32760;
var statearr_32767_32787 = state_32760__$1;
(statearr_32767_32787[(2)] = null);

(statearr_32767_32787[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (6))){
var inst_32739 = (state_32760[(7)]);
var state_32760__$1 = state_32760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32760__$1,(11),to,inst_32739);
} else {
if((state_val_32761 === (3))){
var inst_32758 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32760__$1,inst_32758);
} else {
if((state_val_32761 === (12))){
var state_32760__$1 = state_32760;
var statearr_32768_32788 = state_32760__$1;
(statearr_32768_32788[(2)] = null);

(statearr_32768_32788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (2))){
var state_32760__$1 = state_32760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32760__$1,(4),from);
} else {
if((state_val_32761 === (11))){
var inst_32749 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
if(cljs.core.truth_(inst_32749)){
var statearr_32769_32789 = state_32760__$1;
(statearr_32769_32789[(1)] = (12));

} else {
var statearr_32770_32790 = state_32760__$1;
(statearr_32770_32790[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (9))){
var state_32760__$1 = state_32760;
var statearr_32771_32791 = state_32760__$1;
(statearr_32771_32791[(2)] = null);

(statearr_32771_32791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (5))){
var state_32760__$1 = state_32760;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32772_32792 = state_32760__$1;
(statearr_32772_32792[(1)] = (8));

} else {
var statearr_32773_32793 = state_32760__$1;
(statearr_32773_32793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (14))){
var inst_32754 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
var statearr_32774_32794 = state_32760__$1;
(statearr_32774_32794[(2)] = inst_32754);

(statearr_32774_32794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (10))){
var inst_32746 = (state_32760[(2)]);
var state_32760__$1 = state_32760;
var statearr_32775_32795 = state_32760__$1;
(statearr_32775_32795[(2)] = inst_32746);

(statearr_32775_32795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32761 === (8))){
var inst_32743 = cljs.core.async.close_BANG_.call(null,to);
var state_32760__$1 = state_32760;
var statearr_32776_32796 = state_32760__$1;
(statearr_32776_32796[(2)] = inst_32743);

(statearr_32776_32796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32542__auto__ = null;
var cljs$core$async$state_machine__32542__auto____0 = (function (){
var statearr_32777 = [null,null,null,null,null,null,null,null];
(statearr_32777[(0)] = cljs$core$async$state_machine__32542__auto__);

(statearr_32777[(1)] = (1));

return statearr_32777;
});
var cljs$core$async$state_machine__32542__auto____1 = (function (state_32760){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_32760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e32778){if((e32778 instanceof Object)){
var ex__32545__auto__ = e32778;
var statearr_32779_32797 = state_32760;
(statearr_32779_32797[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32798 = state_32760;
state_32760 = G__32798;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$state_machine__32542__auto__ = function(state_32760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32542__auto____1.call(this,state_32760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32542__auto____0;
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32542__auto____1;
return cljs$core$async$state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_32780 = f__32637__auto__.call(null);
(statearr_32780[(6)] = c__32636__auto___32782);

return statearr_32780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__32799){
var vec__32800 = p__32799;
var v = cljs.core.nth.call(null,vec__32800,(0),null);
var p = cljs.core.nth.call(null,vec__32800,(1),null);
var job = vec__32800;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32636__auto___32971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_32807){
var state_val_32808 = (state_32807[(1)]);
if((state_val_32808 === (1))){
var state_32807__$1 = state_32807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32807__$1,(2),res,v);
} else {
if((state_val_32808 === (2))){
var inst_32804 = (state_32807[(2)]);
var inst_32805 = cljs.core.async.close_BANG_.call(null,res);
var state_32807__$1 = (function (){var statearr_32809 = state_32807;
(statearr_32809[(7)] = inst_32804);

return statearr_32809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32807__$1,inst_32805);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____0 = (function (){
var statearr_32810 = [null,null,null,null,null,null,null,null];
(statearr_32810[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__);

(statearr_32810[(1)] = (1));

return statearr_32810;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____1 = (function (state_32807){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_32807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e32811){if((e32811 instanceof Object)){
var ex__32545__auto__ = e32811;
var statearr_32812_32972 = state_32807;
(statearr_32812_32972[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32973 = state_32807;
state_32807 = G__32973;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__ = function(state_32807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____1.call(this,state_32807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_32813 = f__32637__auto__.call(null);
(statearr_32813[(6)] = c__32636__auto___32971);

return statearr_32813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__32814){
var vec__32815 = p__32814;
var v = cljs.core.nth.call(null,vec__32815,(0),null);
var p = cljs.core.nth.call(null,vec__32815,(1),null);
var job = vec__32815;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___32974 = n;
var __32975 = (0);
while(true){
if((__32975 < n__4613__auto___32974)){
var G__32818_32976 = type;
var G__32818_32977__$1 = (((G__32818_32976 instanceof cljs.core.Keyword))?G__32818_32976.fqn:null);
switch (G__32818_32977__$1) {
case "compute":
var c__32636__auto___32979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32975,c__32636__auto___32979,G__32818_32976,G__32818_32977__$1,n__4613__auto___32974,jobs,results,process,async){
return (function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = ((function (__32975,c__32636__auto___32979,G__32818_32976,G__32818_32977__$1,n__4613__auto___32974,jobs,results,process,async){
return (function (state_32831){
var state_val_32832 = (state_32831[(1)]);
if((state_val_32832 === (1))){
var state_32831__$1 = state_32831;
var statearr_32833_32980 = state_32831__$1;
(statearr_32833_32980[(2)] = null);

(statearr_32833_32980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (2))){
var state_32831__$1 = state_32831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32831__$1,(4),jobs);
} else {
if((state_val_32832 === (3))){
var inst_32829 = (state_32831[(2)]);
var state_32831__$1 = state_32831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32831__$1,inst_32829);
} else {
if((state_val_32832 === (4))){
var inst_32821 = (state_32831[(2)]);
var inst_32822 = process.call(null,inst_32821);
var state_32831__$1 = state_32831;
if(cljs.core.truth_(inst_32822)){
var statearr_32834_32981 = state_32831__$1;
(statearr_32834_32981[(1)] = (5));

} else {
var statearr_32835_32982 = state_32831__$1;
(statearr_32835_32982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (5))){
var state_32831__$1 = state_32831;
var statearr_32836_32983 = state_32831__$1;
(statearr_32836_32983[(2)] = null);

(statearr_32836_32983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (6))){
var state_32831__$1 = state_32831;
var statearr_32837_32984 = state_32831__$1;
(statearr_32837_32984[(2)] = null);

(statearr_32837_32984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (7))){
var inst_32827 = (state_32831[(2)]);
var state_32831__$1 = state_32831;
var statearr_32838_32985 = state_32831__$1;
(statearr_32838_32985[(2)] = inst_32827);

(statearr_32838_32985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32975,c__32636__auto___32979,G__32818_32976,G__32818_32977__$1,n__4613__auto___32974,jobs,results,process,async))
;
return ((function (__32975,switch__32541__auto__,c__32636__auto___32979,G__32818_32976,G__32818_32977__$1,n__4613__auto___32974,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____0 = (function (){
var statearr_32839 = [null,null,null,null,null,null,null];
(statearr_32839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__);

(statearr_32839[(1)] = (1));

return statearr_32839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____1 = (function (state_32831){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_32831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e32840){if((e32840 instanceof Object)){
var ex__32545__auto__ = e32840;
var statearr_32841_32986 = state_32831;
(statearr_32841_32986[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32987 = state_32831;
state_32831 = G__32987;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__ = function(state_32831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____1.call(this,state_32831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__;
})()
;})(__32975,switch__32541__auto__,c__32636__auto___32979,G__32818_32976,G__32818_32977__$1,n__4613__auto___32974,jobs,results,process,async))
})();
var state__32638__auto__ = (function (){var statearr_32842 = f__32637__auto__.call(null);
(statearr_32842[(6)] = c__32636__auto___32979);

return statearr_32842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
});})(__32975,c__32636__auto___32979,G__32818_32976,G__32818_32977__$1,n__4613__auto___32974,jobs,results,process,async))
);


break;
case "async":
var c__32636__auto___32988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32975,c__32636__auto___32988,G__32818_32976,G__32818_32977__$1,n__4613__auto___32974,jobs,results,process,async){
return (function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = ((function (__32975,c__32636__auto___32988,G__32818_32976,G__32818_32977__$1,n__4613__auto___32974,jobs,results,process,async){
return (function (state_32855){
var state_val_32856 = (state_32855[(1)]);
if((state_val_32856 === (1))){
var state_32855__$1 = state_32855;
var statearr_32857_32989 = state_32855__$1;
(statearr_32857_32989[(2)] = null);

(statearr_32857_32989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (2))){
var state_32855__$1 = state_32855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32855__$1,(4),jobs);
} else {
if((state_val_32856 === (3))){
var inst_32853 = (state_32855[(2)]);
var state_32855__$1 = state_32855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32855__$1,inst_32853);
} else {
if((state_val_32856 === (4))){
var inst_32845 = (state_32855[(2)]);
var inst_32846 = async.call(null,inst_32845);
var state_32855__$1 = state_32855;
if(cljs.core.truth_(inst_32846)){
var statearr_32858_32990 = state_32855__$1;
(statearr_32858_32990[(1)] = (5));

} else {
var statearr_32859_32991 = state_32855__$1;
(statearr_32859_32991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (5))){
var state_32855__$1 = state_32855;
var statearr_32860_32992 = state_32855__$1;
(statearr_32860_32992[(2)] = null);

(statearr_32860_32992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (6))){
var state_32855__$1 = state_32855;
var statearr_32861_32993 = state_32855__$1;
(statearr_32861_32993[(2)] = null);

(statearr_32861_32993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32856 === (7))){
var inst_32851 = (state_32855[(2)]);
var state_32855__$1 = state_32855;
var statearr_32862_32994 = state_32855__$1;
(statearr_32862_32994[(2)] = inst_32851);

(statearr_32862_32994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32975,c__32636__auto___32988,G__32818_32976,G__32818_32977__$1,n__4613__auto___32974,jobs,results,process,async))
;
return ((function (__32975,switch__32541__auto__,c__32636__auto___32988,G__32818_32976,G__32818_32977__$1,n__4613__auto___32974,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____0 = (function (){
var statearr_32863 = [null,null,null,null,null,null,null];
(statearr_32863[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__);

(statearr_32863[(1)] = (1));

return statearr_32863;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____1 = (function (state_32855){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_32855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e32864){if((e32864 instanceof Object)){
var ex__32545__auto__ = e32864;
var statearr_32865_32995 = state_32855;
(statearr_32865_32995[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32996 = state_32855;
state_32855 = G__32996;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__ = function(state_32855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____1.call(this,state_32855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__;
})()
;})(__32975,switch__32541__auto__,c__32636__auto___32988,G__32818_32976,G__32818_32977__$1,n__4613__auto___32974,jobs,results,process,async))
})();
var state__32638__auto__ = (function (){var statearr_32866 = f__32637__auto__.call(null);
(statearr_32866[(6)] = c__32636__auto___32988);

return statearr_32866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
});})(__32975,c__32636__auto___32988,G__32818_32976,G__32818_32977__$1,n__4613__auto___32974,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32818_32977__$1)].join('')));

}

var G__32997 = (__32975 + (1));
__32975 = G__32997;
continue;
} else {
}
break;
}

var c__32636__auto___32998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_32888){
var state_val_32889 = (state_32888[(1)]);
if((state_val_32889 === (7))){
var inst_32884 = (state_32888[(2)]);
var state_32888__$1 = state_32888;
var statearr_32890_32999 = state_32888__$1;
(statearr_32890_32999[(2)] = inst_32884);

(statearr_32890_32999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (1))){
var state_32888__$1 = state_32888;
var statearr_32891_33000 = state_32888__$1;
(statearr_32891_33000[(2)] = null);

(statearr_32891_33000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (4))){
var inst_32869 = (state_32888[(7)]);
var inst_32869__$1 = (state_32888[(2)]);
var inst_32870 = (inst_32869__$1 == null);
var state_32888__$1 = (function (){var statearr_32892 = state_32888;
(statearr_32892[(7)] = inst_32869__$1);

return statearr_32892;
})();
if(cljs.core.truth_(inst_32870)){
var statearr_32893_33001 = state_32888__$1;
(statearr_32893_33001[(1)] = (5));

} else {
var statearr_32894_33002 = state_32888__$1;
(statearr_32894_33002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (6))){
var inst_32874 = (state_32888[(8)]);
var inst_32869 = (state_32888[(7)]);
var inst_32874__$1 = cljs.core.async.chan.call(null,(1));
var inst_32875 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32876 = [inst_32869,inst_32874__$1];
var inst_32877 = (new cljs.core.PersistentVector(null,2,(5),inst_32875,inst_32876,null));
var state_32888__$1 = (function (){var statearr_32895 = state_32888;
(statearr_32895[(8)] = inst_32874__$1);

return statearr_32895;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32888__$1,(8),jobs,inst_32877);
} else {
if((state_val_32889 === (3))){
var inst_32886 = (state_32888[(2)]);
var state_32888__$1 = state_32888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32888__$1,inst_32886);
} else {
if((state_val_32889 === (2))){
var state_32888__$1 = state_32888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32888__$1,(4),from);
} else {
if((state_val_32889 === (9))){
var inst_32881 = (state_32888[(2)]);
var state_32888__$1 = (function (){var statearr_32896 = state_32888;
(statearr_32896[(9)] = inst_32881);

return statearr_32896;
})();
var statearr_32897_33003 = state_32888__$1;
(statearr_32897_33003[(2)] = null);

(statearr_32897_33003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (5))){
var inst_32872 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32888__$1 = state_32888;
var statearr_32898_33004 = state_32888__$1;
(statearr_32898_33004[(2)] = inst_32872);

(statearr_32898_33004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (8))){
var inst_32874 = (state_32888[(8)]);
var inst_32879 = (state_32888[(2)]);
var state_32888__$1 = (function (){var statearr_32899 = state_32888;
(statearr_32899[(10)] = inst_32879);

return statearr_32899;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32888__$1,(9),results,inst_32874);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____0 = (function (){
var statearr_32900 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__);

(statearr_32900[(1)] = (1));

return statearr_32900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____1 = (function (state_32888){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_32888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e32901){if((e32901 instanceof Object)){
var ex__32545__auto__ = e32901;
var statearr_32902_33005 = state_32888;
(statearr_32902_33005[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33006 = state_32888;
state_32888 = G__33006;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__ = function(state_32888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____1.call(this,state_32888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_32903 = f__32637__auto__.call(null);
(statearr_32903[(6)] = c__32636__auto___32998);

return statearr_32903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));


var c__32636__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_32941){
var state_val_32942 = (state_32941[(1)]);
if((state_val_32942 === (7))){
var inst_32937 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
var statearr_32943_33007 = state_32941__$1;
(statearr_32943_33007[(2)] = inst_32937);

(statearr_32943_33007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (20))){
var state_32941__$1 = state_32941;
var statearr_32944_33008 = state_32941__$1;
(statearr_32944_33008[(2)] = null);

(statearr_32944_33008[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (1))){
var state_32941__$1 = state_32941;
var statearr_32945_33009 = state_32941__$1;
(statearr_32945_33009[(2)] = null);

(statearr_32945_33009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (4))){
var inst_32906 = (state_32941[(7)]);
var inst_32906__$1 = (state_32941[(2)]);
var inst_32907 = (inst_32906__$1 == null);
var state_32941__$1 = (function (){var statearr_32946 = state_32941;
(statearr_32946[(7)] = inst_32906__$1);

return statearr_32946;
})();
if(cljs.core.truth_(inst_32907)){
var statearr_32947_33010 = state_32941__$1;
(statearr_32947_33010[(1)] = (5));

} else {
var statearr_32948_33011 = state_32941__$1;
(statearr_32948_33011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (15))){
var inst_32919 = (state_32941[(8)]);
var state_32941__$1 = state_32941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32941__$1,(18),to,inst_32919);
} else {
if((state_val_32942 === (21))){
var inst_32932 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
var statearr_32949_33012 = state_32941__$1;
(statearr_32949_33012[(2)] = inst_32932);

(statearr_32949_33012[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (13))){
var inst_32934 = (state_32941[(2)]);
var state_32941__$1 = (function (){var statearr_32950 = state_32941;
(statearr_32950[(9)] = inst_32934);

return statearr_32950;
})();
var statearr_32951_33013 = state_32941__$1;
(statearr_32951_33013[(2)] = null);

(statearr_32951_33013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (6))){
var inst_32906 = (state_32941[(7)]);
var state_32941__$1 = state_32941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32941__$1,(11),inst_32906);
} else {
if((state_val_32942 === (17))){
var inst_32927 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
if(cljs.core.truth_(inst_32927)){
var statearr_32952_33014 = state_32941__$1;
(statearr_32952_33014[(1)] = (19));

} else {
var statearr_32953_33015 = state_32941__$1;
(statearr_32953_33015[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (3))){
var inst_32939 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32941__$1,inst_32939);
} else {
if((state_val_32942 === (12))){
var inst_32916 = (state_32941[(10)]);
var state_32941__$1 = state_32941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32941__$1,(14),inst_32916);
} else {
if((state_val_32942 === (2))){
var state_32941__$1 = state_32941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32941__$1,(4),results);
} else {
if((state_val_32942 === (19))){
var state_32941__$1 = state_32941;
var statearr_32954_33016 = state_32941__$1;
(statearr_32954_33016[(2)] = null);

(statearr_32954_33016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (11))){
var inst_32916 = (state_32941[(2)]);
var state_32941__$1 = (function (){var statearr_32955 = state_32941;
(statearr_32955[(10)] = inst_32916);

return statearr_32955;
})();
var statearr_32956_33017 = state_32941__$1;
(statearr_32956_33017[(2)] = null);

(statearr_32956_33017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (9))){
var state_32941__$1 = state_32941;
var statearr_32957_33018 = state_32941__$1;
(statearr_32957_33018[(2)] = null);

(statearr_32957_33018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (5))){
var state_32941__$1 = state_32941;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32958_33019 = state_32941__$1;
(statearr_32958_33019[(1)] = (8));

} else {
var statearr_32959_33020 = state_32941__$1;
(statearr_32959_33020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (14))){
var inst_32919 = (state_32941[(8)]);
var inst_32919__$1 = (state_32941[(2)]);
var inst_32920 = (inst_32919__$1 == null);
var inst_32921 = cljs.core.not.call(null,inst_32920);
var state_32941__$1 = (function (){var statearr_32960 = state_32941;
(statearr_32960[(8)] = inst_32919__$1);

return statearr_32960;
})();
if(inst_32921){
var statearr_32961_33021 = state_32941__$1;
(statearr_32961_33021[(1)] = (15));

} else {
var statearr_32962_33022 = state_32941__$1;
(statearr_32962_33022[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (16))){
var state_32941__$1 = state_32941;
var statearr_32963_33023 = state_32941__$1;
(statearr_32963_33023[(2)] = false);

(statearr_32963_33023[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (10))){
var inst_32913 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
var statearr_32964_33024 = state_32941__$1;
(statearr_32964_33024[(2)] = inst_32913);

(statearr_32964_33024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (18))){
var inst_32924 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
var statearr_32965_33025 = state_32941__$1;
(statearr_32965_33025[(2)] = inst_32924);

(statearr_32965_33025[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (8))){
var inst_32910 = cljs.core.async.close_BANG_.call(null,to);
var state_32941__$1 = state_32941;
var statearr_32966_33026 = state_32941__$1;
(statearr_32966_33026[(2)] = inst_32910);

(statearr_32966_33026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____0 = (function (){
var statearr_32967 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32967[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__);

(statearr_32967[(1)] = (1));

return statearr_32967;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____1 = (function (state_32941){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_32941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e32968){if((e32968 instanceof Object)){
var ex__32545__auto__ = e32968;
var statearr_32969_33027 = state_32941;
(statearr_32969_33027[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33028 = state_32941;
state_32941 = G__33028;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__ = function(state_32941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____1.call(this,state_32941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_32970 = f__32637__auto__.call(null);
(statearr_32970[(6)] = c__32636__auto__);

return statearr_32970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));

return c__32636__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33030 = arguments.length;
switch (G__33030) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33033 = arguments.length;
switch (G__33033) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33036 = arguments.length;
switch (G__33036) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32636__auto___33085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_33062){
var state_val_33063 = (state_33062[(1)]);
if((state_val_33063 === (7))){
var inst_33058 = (state_33062[(2)]);
var state_33062__$1 = state_33062;
var statearr_33064_33086 = state_33062__$1;
(statearr_33064_33086[(2)] = inst_33058);

(statearr_33064_33086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (1))){
var state_33062__$1 = state_33062;
var statearr_33065_33087 = state_33062__$1;
(statearr_33065_33087[(2)] = null);

(statearr_33065_33087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (4))){
var inst_33039 = (state_33062[(7)]);
var inst_33039__$1 = (state_33062[(2)]);
var inst_33040 = (inst_33039__$1 == null);
var state_33062__$1 = (function (){var statearr_33066 = state_33062;
(statearr_33066[(7)] = inst_33039__$1);

return statearr_33066;
})();
if(cljs.core.truth_(inst_33040)){
var statearr_33067_33088 = state_33062__$1;
(statearr_33067_33088[(1)] = (5));

} else {
var statearr_33068_33089 = state_33062__$1;
(statearr_33068_33089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (13))){
var state_33062__$1 = state_33062;
var statearr_33069_33090 = state_33062__$1;
(statearr_33069_33090[(2)] = null);

(statearr_33069_33090[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (6))){
var inst_33039 = (state_33062[(7)]);
var inst_33045 = p.call(null,inst_33039);
var state_33062__$1 = state_33062;
if(cljs.core.truth_(inst_33045)){
var statearr_33070_33091 = state_33062__$1;
(statearr_33070_33091[(1)] = (9));

} else {
var statearr_33071_33092 = state_33062__$1;
(statearr_33071_33092[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (3))){
var inst_33060 = (state_33062[(2)]);
var state_33062__$1 = state_33062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33062__$1,inst_33060);
} else {
if((state_val_33063 === (12))){
var state_33062__$1 = state_33062;
var statearr_33072_33093 = state_33062__$1;
(statearr_33072_33093[(2)] = null);

(statearr_33072_33093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (2))){
var state_33062__$1 = state_33062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33062__$1,(4),ch);
} else {
if((state_val_33063 === (11))){
var inst_33039 = (state_33062[(7)]);
var inst_33049 = (state_33062[(2)]);
var state_33062__$1 = state_33062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33062__$1,(8),inst_33049,inst_33039);
} else {
if((state_val_33063 === (9))){
var state_33062__$1 = state_33062;
var statearr_33073_33094 = state_33062__$1;
(statearr_33073_33094[(2)] = tc);

(statearr_33073_33094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (5))){
var inst_33042 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33043 = cljs.core.async.close_BANG_.call(null,fc);
var state_33062__$1 = (function (){var statearr_33074 = state_33062;
(statearr_33074[(8)] = inst_33042);

return statearr_33074;
})();
var statearr_33075_33095 = state_33062__$1;
(statearr_33075_33095[(2)] = inst_33043);

(statearr_33075_33095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (14))){
var inst_33056 = (state_33062[(2)]);
var state_33062__$1 = state_33062;
var statearr_33076_33096 = state_33062__$1;
(statearr_33076_33096[(2)] = inst_33056);

(statearr_33076_33096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (10))){
var state_33062__$1 = state_33062;
var statearr_33077_33097 = state_33062__$1;
(statearr_33077_33097[(2)] = fc);

(statearr_33077_33097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (8))){
var inst_33051 = (state_33062[(2)]);
var state_33062__$1 = state_33062;
if(cljs.core.truth_(inst_33051)){
var statearr_33078_33098 = state_33062__$1;
(statearr_33078_33098[(1)] = (12));

} else {
var statearr_33079_33099 = state_33062__$1;
(statearr_33079_33099[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32542__auto__ = null;
var cljs$core$async$state_machine__32542__auto____0 = (function (){
var statearr_33080 = [null,null,null,null,null,null,null,null,null];
(statearr_33080[(0)] = cljs$core$async$state_machine__32542__auto__);

(statearr_33080[(1)] = (1));

return statearr_33080;
});
var cljs$core$async$state_machine__32542__auto____1 = (function (state_33062){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_33062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e33081){if((e33081 instanceof Object)){
var ex__32545__auto__ = e33081;
var statearr_33082_33100 = state_33062;
(statearr_33082_33100[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33101 = state_33062;
state_33062 = G__33101;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$state_machine__32542__auto__ = function(state_33062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32542__auto____1.call(this,state_33062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32542__auto____0;
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32542__auto____1;
return cljs$core$async$state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_33083 = f__32637__auto__.call(null);
(statearr_33083[(6)] = c__32636__auto___33085);

return statearr_33083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32636__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_33122){
var state_val_33123 = (state_33122[(1)]);
if((state_val_33123 === (7))){
var inst_33118 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
var statearr_33124_33142 = state_33122__$1;
(statearr_33124_33142[(2)] = inst_33118);

(statearr_33124_33142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (1))){
var inst_33102 = init;
var state_33122__$1 = (function (){var statearr_33125 = state_33122;
(statearr_33125[(7)] = inst_33102);

return statearr_33125;
})();
var statearr_33126_33143 = state_33122__$1;
(statearr_33126_33143[(2)] = null);

(statearr_33126_33143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (4))){
var inst_33105 = (state_33122[(8)]);
var inst_33105__$1 = (state_33122[(2)]);
var inst_33106 = (inst_33105__$1 == null);
var state_33122__$1 = (function (){var statearr_33127 = state_33122;
(statearr_33127[(8)] = inst_33105__$1);

return statearr_33127;
})();
if(cljs.core.truth_(inst_33106)){
var statearr_33128_33144 = state_33122__$1;
(statearr_33128_33144[(1)] = (5));

} else {
var statearr_33129_33145 = state_33122__$1;
(statearr_33129_33145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (6))){
var inst_33109 = (state_33122[(9)]);
var inst_33105 = (state_33122[(8)]);
var inst_33102 = (state_33122[(7)]);
var inst_33109__$1 = f.call(null,inst_33102,inst_33105);
var inst_33110 = cljs.core.reduced_QMARK_.call(null,inst_33109__$1);
var state_33122__$1 = (function (){var statearr_33130 = state_33122;
(statearr_33130[(9)] = inst_33109__$1);

return statearr_33130;
})();
if(inst_33110){
var statearr_33131_33146 = state_33122__$1;
(statearr_33131_33146[(1)] = (8));

} else {
var statearr_33132_33147 = state_33122__$1;
(statearr_33132_33147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (3))){
var inst_33120 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33122__$1,inst_33120);
} else {
if((state_val_33123 === (2))){
var state_33122__$1 = state_33122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33122__$1,(4),ch);
} else {
if((state_val_33123 === (9))){
var inst_33109 = (state_33122[(9)]);
var inst_33102 = inst_33109;
var state_33122__$1 = (function (){var statearr_33133 = state_33122;
(statearr_33133[(7)] = inst_33102);

return statearr_33133;
})();
var statearr_33134_33148 = state_33122__$1;
(statearr_33134_33148[(2)] = null);

(statearr_33134_33148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (5))){
var inst_33102 = (state_33122[(7)]);
var state_33122__$1 = state_33122;
var statearr_33135_33149 = state_33122__$1;
(statearr_33135_33149[(2)] = inst_33102);

(statearr_33135_33149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (10))){
var inst_33116 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
var statearr_33136_33150 = state_33122__$1;
(statearr_33136_33150[(2)] = inst_33116);

(statearr_33136_33150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (8))){
var inst_33109 = (state_33122[(9)]);
var inst_33112 = cljs.core.deref.call(null,inst_33109);
var state_33122__$1 = state_33122;
var statearr_33137_33151 = state_33122__$1;
(statearr_33137_33151[(2)] = inst_33112);

(statearr_33137_33151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32542__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32542__auto____0 = (function (){
var statearr_33138 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33138[(0)] = cljs$core$async$reduce_$_state_machine__32542__auto__);

(statearr_33138[(1)] = (1));

return statearr_33138;
});
var cljs$core$async$reduce_$_state_machine__32542__auto____1 = (function (state_33122){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_33122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e33139){if((e33139 instanceof Object)){
var ex__32545__auto__ = e33139;
var statearr_33140_33152 = state_33122;
(statearr_33140_33152[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33153 = state_33122;
state_33122 = G__33153;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32542__auto__ = function(state_33122){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32542__auto____1.call(this,state_33122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32542__auto____0;
cljs$core$async$reduce_$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32542__auto____1;
return cljs$core$async$reduce_$_state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_33141 = f__32637__auto__.call(null);
(statearr_33141[(6)] = c__32636__auto__);

return statearr_33141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));

return c__32636__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32636__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_33159){
var state_val_33160 = (state_33159[(1)]);
if((state_val_33160 === (1))){
var inst_33154 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33159__$1 = state_33159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33159__$1,(2),inst_33154);
} else {
if((state_val_33160 === (2))){
var inst_33156 = (state_33159[(2)]);
var inst_33157 = f__$1.call(null,inst_33156);
var state_33159__$1 = state_33159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33159__$1,inst_33157);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32542__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32542__auto____0 = (function (){
var statearr_33161 = [null,null,null,null,null,null,null];
(statearr_33161[(0)] = cljs$core$async$transduce_$_state_machine__32542__auto__);

(statearr_33161[(1)] = (1));

return statearr_33161;
});
var cljs$core$async$transduce_$_state_machine__32542__auto____1 = (function (state_33159){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_33159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e33162){if((e33162 instanceof Object)){
var ex__32545__auto__ = e33162;
var statearr_33163_33165 = state_33159;
(statearr_33163_33165[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33166 = state_33159;
state_33159 = G__33166;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32542__auto__ = function(state_33159){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32542__auto____1.call(this,state_33159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32542__auto____0;
cljs$core$async$transduce_$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32542__auto____1;
return cljs$core$async$transduce_$_state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_33164 = f__32637__auto__.call(null);
(statearr_33164[(6)] = c__32636__auto__);

return statearr_33164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));

return c__32636__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33168 = arguments.length;
switch (G__33168) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32636__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_33193){
var state_val_33194 = (state_33193[(1)]);
if((state_val_33194 === (7))){
var inst_33175 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
var statearr_33195_33216 = state_33193__$1;
(statearr_33195_33216[(2)] = inst_33175);

(statearr_33195_33216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (1))){
var inst_33169 = cljs.core.seq.call(null,coll);
var inst_33170 = inst_33169;
var state_33193__$1 = (function (){var statearr_33196 = state_33193;
(statearr_33196[(7)] = inst_33170);

return statearr_33196;
})();
var statearr_33197_33217 = state_33193__$1;
(statearr_33197_33217[(2)] = null);

(statearr_33197_33217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (4))){
var inst_33170 = (state_33193[(7)]);
var inst_33173 = cljs.core.first.call(null,inst_33170);
var state_33193__$1 = state_33193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33193__$1,(7),ch,inst_33173);
} else {
if((state_val_33194 === (13))){
var inst_33187 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
var statearr_33198_33218 = state_33193__$1;
(statearr_33198_33218[(2)] = inst_33187);

(statearr_33198_33218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (6))){
var inst_33178 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
if(cljs.core.truth_(inst_33178)){
var statearr_33199_33219 = state_33193__$1;
(statearr_33199_33219[(1)] = (8));

} else {
var statearr_33200_33220 = state_33193__$1;
(statearr_33200_33220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (3))){
var inst_33191 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33193__$1,inst_33191);
} else {
if((state_val_33194 === (12))){
var state_33193__$1 = state_33193;
var statearr_33201_33221 = state_33193__$1;
(statearr_33201_33221[(2)] = null);

(statearr_33201_33221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (2))){
var inst_33170 = (state_33193[(7)]);
var state_33193__$1 = state_33193;
if(cljs.core.truth_(inst_33170)){
var statearr_33202_33222 = state_33193__$1;
(statearr_33202_33222[(1)] = (4));

} else {
var statearr_33203_33223 = state_33193__$1;
(statearr_33203_33223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (11))){
var inst_33184 = cljs.core.async.close_BANG_.call(null,ch);
var state_33193__$1 = state_33193;
var statearr_33204_33224 = state_33193__$1;
(statearr_33204_33224[(2)] = inst_33184);

(statearr_33204_33224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (9))){
var state_33193__$1 = state_33193;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33205_33225 = state_33193__$1;
(statearr_33205_33225[(1)] = (11));

} else {
var statearr_33206_33226 = state_33193__$1;
(statearr_33206_33226[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (5))){
var inst_33170 = (state_33193[(7)]);
var state_33193__$1 = state_33193;
var statearr_33207_33227 = state_33193__$1;
(statearr_33207_33227[(2)] = inst_33170);

(statearr_33207_33227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (10))){
var inst_33189 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
var statearr_33208_33228 = state_33193__$1;
(statearr_33208_33228[(2)] = inst_33189);

(statearr_33208_33228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (8))){
var inst_33170 = (state_33193[(7)]);
var inst_33180 = cljs.core.next.call(null,inst_33170);
var inst_33170__$1 = inst_33180;
var state_33193__$1 = (function (){var statearr_33209 = state_33193;
(statearr_33209[(7)] = inst_33170__$1);

return statearr_33209;
})();
var statearr_33210_33229 = state_33193__$1;
(statearr_33210_33229[(2)] = null);

(statearr_33210_33229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});
return (function() {
var cljs$core$async$state_machine__32542__auto__ = null;
var cljs$core$async$state_machine__32542__auto____0 = (function (){
var statearr_33211 = [null,null,null,null,null,null,null,null];
(statearr_33211[(0)] = cljs$core$async$state_machine__32542__auto__);

(statearr_33211[(1)] = (1));

return statearr_33211;
});
var cljs$core$async$state_machine__32542__auto____1 = (function (state_33193){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_33193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e33212){if((e33212 instanceof Object)){
var ex__32545__auto__ = e33212;
var statearr_33213_33230 = state_33193;
(statearr_33213_33230[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33231 = state_33193;
state_33193 = G__33231;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$state_machine__32542__auto__ = function(state_33193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32542__auto____1.call(this,state_33193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32542__auto____0;
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32542__auto____1;
return cljs$core$async$state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_33214 = f__32637__auto__.call(null);
(statearr_33214[(6)] = c__32636__auto__);

return statearr_33214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));

return c__32636__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33232 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33232.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33233 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33233.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33234 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33234.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33235 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33235.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33236 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33236 = (function (ch,cs,meta33237){
this.ch = ch;
this.cs = cs;
this.meta33237 = meta33237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33238,meta33237__$1){
var self__ = this;
var _33238__$1 = this;
return (new cljs.core.async.t_cljs$core$async33236(self__.ch,self__.cs,meta33237__$1));
}));

(cljs.core.async.t_cljs$core$async33236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33238){
var self__ = this;
var _33238__$1 = this;
return self__.meta33237;
}));

(cljs.core.async.t_cljs$core$async33236.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33236.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33236.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33236.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33236.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33236.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33237","meta33237",-1381123029,null)], null);
}));

(cljs.core.async.t_cljs$core$async33236.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33236");

(cljs.core.async.t_cljs$core$async33236.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33236");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33236.
 */
cljs.core.async.__GT_t_cljs$core$async33236 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33236(ch__$1,cs__$1,meta33237){
return (new cljs.core.async.t_cljs$core$async33236(ch__$1,cs__$1,meta33237));
});

}

return (new cljs.core.async.t_cljs$core$async33236(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__32636__auto___33458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_33373){
var state_val_33374 = (state_33373[(1)]);
if((state_val_33374 === (7))){
var inst_33369 = (state_33373[(2)]);
var state_33373__$1 = state_33373;
var statearr_33375_33459 = state_33373__$1;
(statearr_33375_33459[(2)] = inst_33369);

(statearr_33375_33459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (20))){
var inst_33272 = (state_33373[(7)]);
var inst_33284 = cljs.core.first.call(null,inst_33272);
var inst_33285 = cljs.core.nth.call(null,inst_33284,(0),null);
var inst_33286 = cljs.core.nth.call(null,inst_33284,(1),null);
var state_33373__$1 = (function (){var statearr_33376 = state_33373;
(statearr_33376[(8)] = inst_33285);

return statearr_33376;
})();
if(cljs.core.truth_(inst_33286)){
var statearr_33377_33460 = state_33373__$1;
(statearr_33377_33460[(1)] = (22));

} else {
var statearr_33378_33461 = state_33373__$1;
(statearr_33378_33461[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (27))){
var inst_33316 = (state_33373[(9)]);
var inst_33321 = (state_33373[(10)]);
var inst_33241 = (state_33373[(11)]);
var inst_33314 = (state_33373[(12)]);
var inst_33321__$1 = cljs.core._nth.call(null,inst_33314,inst_33316);
var inst_33322 = cljs.core.async.put_BANG_.call(null,inst_33321__$1,inst_33241,done);
var state_33373__$1 = (function (){var statearr_33379 = state_33373;
(statearr_33379[(10)] = inst_33321__$1);

return statearr_33379;
})();
if(cljs.core.truth_(inst_33322)){
var statearr_33380_33462 = state_33373__$1;
(statearr_33380_33462[(1)] = (30));

} else {
var statearr_33381_33463 = state_33373__$1;
(statearr_33381_33463[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (1))){
var state_33373__$1 = state_33373;
var statearr_33382_33464 = state_33373__$1;
(statearr_33382_33464[(2)] = null);

(statearr_33382_33464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (24))){
var inst_33272 = (state_33373[(7)]);
var inst_33291 = (state_33373[(2)]);
var inst_33292 = cljs.core.next.call(null,inst_33272);
var inst_33250 = inst_33292;
var inst_33251 = null;
var inst_33252 = (0);
var inst_33253 = (0);
var state_33373__$1 = (function (){var statearr_33383 = state_33373;
(statearr_33383[(13)] = inst_33251);

(statearr_33383[(14)] = inst_33291);

(statearr_33383[(15)] = inst_33250);

(statearr_33383[(16)] = inst_33253);

(statearr_33383[(17)] = inst_33252);

return statearr_33383;
})();
var statearr_33384_33465 = state_33373__$1;
(statearr_33384_33465[(2)] = null);

(statearr_33384_33465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (39))){
var state_33373__$1 = state_33373;
var statearr_33388_33466 = state_33373__$1;
(statearr_33388_33466[(2)] = null);

(statearr_33388_33466[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (4))){
var inst_33241 = (state_33373[(11)]);
var inst_33241__$1 = (state_33373[(2)]);
var inst_33242 = (inst_33241__$1 == null);
var state_33373__$1 = (function (){var statearr_33389 = state_33373;
(statearr_33389[(11)] = inst_33241__$1);

return statearr_33389;
})();
if(cljs.core.truth_(inst_33242)){
var statearr_33390_33467 = state_33373__$1;
(statearr_33390_33467[(1)] = (5));

} else {
var statearr_33391_33468 = state_33373__$1;
(statearr_33391_33468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (15))){
var inst_33251 = (state_33373[(13)]);
var inst_33250 = (state_33373[(15)]);
var inst_33253 = (state_33373[(16)]);
var inst_33252 = (state_33373[(17)]);
var inst_33268 = (state_33373[(2)]);
var inst_33269 = (inst_33253 + (1));
var tmp33385 = inst_33251;
var tmp33386 = inst_33250;
var tmp33387 = inst_33252;
var inst_33250__$1 = tmp33386;
var inst_33251__$1 = tmp33385;
var inst_33252__$1 = tmp33387;
var inst_33253__$1 = inst_33269;
var state_33373__$1 = (function (){var statearr_33392 = state_33373;
(statearr_33392[(13)] = inst_33251__$1);

(statearr_33392[(18)] = inst_33268);

(statearr_33392[(15)] = inst_33250__$1);

(statearr_33392[(16)] = inst_33253__$1);

(statearr_33392[(17)] = inst_33252__$1);

return statearr_33392;
})();
var statearr_33393_33469 = state_33373__$1;
(statearr_33393_33469[(2)] = null);

(statearr_33393_33469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (21))){
var inst_33295 = (state_33373[(2)]);
var state_33373__$1 = state_33373;
var statearr_33397_33470 = state_33373__$1;
(statearr_33397_33470[(2)] = inst_33295);

(statearr_33397_33470[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (31))){
var inst_33321 = (state_33373[(10)]);
var inst_33325 = done.call(null,null);
var inst_33326 = cljs.core.async.untap_STAR_.call(null,m,inst_33321);
var state_33373__$1 = (function (){var statearr_33398 = state_33373;
(statearr_33398[(19)] = inst_33325);

return statearr_33398;
})();
var statearr_33399_33471 = state_33373__$1;
(statearr_33399_33471[(2)] = inst_33326);

(statearr_33399_33471[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (32))){
var inst_33313 = (state_33373[(20)]);
var inst_33315 = (state_33373[(21)]);
var inst_33316 = (state_33373[(9)]);
var inst_33314 = (state_33373[(12)]);
var inst_33328 = (state_33373[(2)]);
var inst_33329 = (inst_33316 + (1));
var tmp33394 = inst_33313;
var tmp33395 = inst_33315;
var tmp33396 = inst_33314;
var inst_33313__$1 = tmp33394;
var inst_33314__$1 = tmp33396;
var inst_33315__$1 = tmp33395;
var inst_33316__$1 = inst_33329;
var state_33373__$1 = (function (){var statearr_33400 = state_33373;
(statearr_33400[(22)] = inst_33328);

(statearr_33400[(20)] = inst_33313__$1);

(statearr_33400[(21)] = inst_33315__$1);

(statearr_33400[(9)] = inst_33316__$1);

(statearr_33400[(12)] = inst_33314__$1);

return statearr_33400;
})();
var statearr_33401_33472 = state_33373__$1;
(statearr_33401_33472[(2)] = null);

(statearr_33401_33472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (40))){
var inst_33341 = (state_33373[(23)]);
var inst_33345 = done.call(null,null);
var inst_33346 = cljs.core.async.untap_STAR_.call(null,m,inst_33341);
var state_33373__$1 = (function (){var statearr_33402 = state_33373;
(statearr_33402[(24)] = inst_33345);

return statearr_33402;
})();
var statearr_33403_33473 = state_33373__$1;
(statearr_33403_33473[(2)] = inst_33346);

(statearr_33403_33473[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (33))){
var inst_33332 = (state_33373[(25)]);
var inst_33334 = cljs.core.chunked_seq_QMARK_.call(null,inst_33332);
var state_33373__$1 = state_33373;
if(inst_33334){
var statearr_33404_33474 = state_33373__$1;
(statearr_33404_33474[(1)] = (36));

} else {
var statearr_33405_33475 = state_33373__$1;
(statearr_33405_33475[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (13))){
var inst_33262 = (state_33373[(26)]);
var inst_33265 = cljs.core.async.close_BANG_.call(null,inst_33262);
var state_33373__$1 = state_33373;
var statearr_33406_33476 = state_33373__$1;
(statearr_33406_33476[(2)] = inst_33265);

(statearr_33406_33476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (22))){
var inst_33285 = (state_33373[(8)]);
var inst_33288 = cljs.core.async.close_BANG_.call(null,inst_33285);
var state_33373__$1 = state_33373;
var statearr_33407_33477 = state_33373__$1;
(statearr_33407_33477[(2)] = inst_33288);

(statearr_33407_33477[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (36))){
var inst_33332 = (state_33373[(25)]);
var inst_33336 = cljs.core.chunk_first.call(null,inst_33332);
var inst_33337 = cljs.core.chunk_rest.call(null,inst_33332);
var inst_33338 = cljs.core.count.call(null,inst_33336);
var inst_33313 = inst_33337;
var inst_33314 = inst_33336;
var inst_33315 = inst_33338;
var inst_33316 = (0);
var state_33373__$1 = (function (){var statearr_33408 = state_33373;
(statearr_33408[(20)] = inst_33313);

(statearr_33408[(21)] = inst_33315);

(statearr_33408[(9)] = inst_33316);

(statearr_33408[(12)] = inst_33314);

return statearr_33408;
})();
var statearr_33409_33478 = state_33373__$1;
(statearr_33409_33478[(2)] = null);

(statearr_33409_33478[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (41))){
var inst_33332 = (state_33373[(25)]);
var inst_33348 = (state_33373[(2)]);
var inst_33349 = cljs.core.next.call(null,inst_33332);
var inst_33313 = inst_33349;
var inst_33314 = null;
var inst_33315 = (0);
var inst_33316 = (0);
var state_33373__$1 = (function (){var statearr_33410 = state_33373;
(statearr_33410[(20)] = inst_33313);

(statearr_33410[(21)] = inst_33315);

(statearr_33410[(9)] = inst_33316);

(statearr_33410[(27)] = inst_33348);

(statearr_33410[(12)] = inst_33314);

return statearr_33410;
})();
var statearr_33411_33479 = state_33373__$1;
(statearr_33411_33479[(2)] = null);

(statearr_33411_33479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (43))){
var state_33373__$1 = state_33373;
var statearr_33412_33480 = state_33373__$1;
(statearr_33412_33480[(2)] = null);

(statearr_33412_33480[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (29))){
var inst_33357 = (state_33373[(2)]);
var state_33373__$1 = state_33373;
var statearr_33413_33481 = state_33373__$1;
(statearr_33413_33481[(2)] = inst_33357);

(statearr_33413_33481[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (44))){
var inst_33366 = (state_33373[(2)]);
var state_33373__$1 = (function (){var statearr_33414 = state_33373;
(statearr_33414[(28)] = inst_33366);

return statearr_33414;
})();
var statearr_33415_33482 = state_33373__$1;
(statearr_33415_33482[(2)] = null);

(statearr_33415_33482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (6))){
var inst_33305 = (state_33373[(29)]);
var inst_33304 = cljs.core.deref.call(null,cs);
var inst_33305__$1 = cljs.core.keys.call(null,inst_33304);
var inst_33306 = cljs.core.count.call(null,inst_33305__$1);
var inst_33307 = cljs.core.reset_BANG_.call(null,dctr,inst_33306);
var inst_33312 = cljs.core.seq.call(null,inst_33305__$1);
var inst_33313 = inst_33312;
var inst_33314 = null;
var inst_33315 = (0);
var inst_33316 = (0);
var state_33373__$1 = (function (){var statearr_33416 = state_33373;
(statearr_33416[(20)] = inst_33313);

(statearr_33416[(30)] = inst_33307);

(statearr_33416[(21)] = inst_33315);

(statearr_33416[(29)] = inst_33305__$1);

(statearr_33416[(9)] = inst_33316);

(statearr_33416[(12)] = inst_33314);

return statearr_33416;
})();
var statearr_33417_33483 = state_33373__$1;
(statearr_33417_33483[(2)] = null);

(statearr_33417_33483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (28))){
var inst_33313 = (state_33373[(20)]);
var inst_33332 = (state_33373[(25)]);
var inst_33332__$1 = cljs.core.seq.call(null,inst_33313);
var state_33373__$1 = (function (){var statearr_33418 = state_33373;
(statearr_33418[(25)] = inst_33332__$1);

return statearr_33418;
})();
if(inst_33332__$1){
var statearr_33419_33484 = state_33373__$1;
(statearr_33419_33484[(1)] = (33));

} else {
var statearr_33420_33485 = state_33373__$1;
(statearr_33420_33485[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (25))){
var inst_33315 = (state_33373[(21)]);
var inst_33316 = (state_33373[(9)]);
var inst_33318 = (inst_33316 < inst_33315);
var inst_33319 = inst_33318;
var state_33373__$1 = state_33373;
if(cljs.core.truth_(inst_33319)){
var statearr_33421_33486 = state_33373__$1;
(statearr_33421_33486[(1)] = (27));

} else {
var statearr_33422_33487 = state_33373__$1;
(statearr_33422_33487[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (34))){
var state_33373__$1 = state_33373;
var statearr_33423_33488 = state_33373__$1;
(statearr_33423_33488[(2)] = null);

(statearr_33423_33488[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (17))){
var state_33373__$1 = state_33373;
var statearr_33424_33489 = state_33373__$1;
(statearr_33424_33489[(2)] = null);

(statearr_33424_33489[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (3))){
var inst_33371 = (state_33373[(2)]);
var state_33373__$1 = state_33373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33373__$1,inst_33371);
} else {
if((state_val_33374 === (12))){
var inst_33300 = (state_33373[(2)]);
var state_33373__$1 = state_33373;
var statearr_33425_33490 = state_33373__$1;
(statearr_33425_33490[(2)] = inst_33300);

(statearr_33425_33490[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (2))){
var state_33373__$1 = state_33373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33373__$1,(4),ch);
} else {
if((state_val_33374 === (23))){
var state_33373__$1 = state_33373;
var statearr_33426_33491 = state_33373__$1;
(statearr_33426_33491[(2)] = null);

(statearr_33426_33491[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (35))){
var inst_33355 = (state_33373[(2)]);
var state_33373__$1 = state_33373;
var statearr_33427_33492 = state_33373__$1;
(statearr_33427_33492[(2)] = inst_33355);

(statearr_33427_33492[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (19))){
var inst_33272 = (state_33373[(7)]);
var inst_33276 = cljs.core.chunk_first.call(null,inst_33272);
var inst_33277 = cljs.core.chunk_rest.call(null,inst_33272);
var inst_33278 = cljs.core.count.call(null,inst_33276);
var inst_33250 = inst_33277;
var inst_33251 = inst_33276;
var inst_33252 = inst_33278;
var inst_33253 = (0);
var state_33373__$1 = (function (){var statearr_33428 = state_33373;
(statearr_33428[(13)] = inst_33251);

(statearr_33428[(15)] = inst_33250);

(statearr_33428[(16)] = inst_33253);

(statearr_33428[(17)] = inst_33252);

return statearr_33428;
})();
var statearr_33429_33493 = state_33373__$1;
(statearr_33429_33493[(2)] = null);

(statearr_33429_33493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (11))){
var inst_33272 = (state_33373[(7)]);
var inst_33250 = (state_33373[(15)]);
var inst_33272__$1 = cljs.core.seq.call(null,inst_33250);
var state_33373__$1 = (function (){var statearr_33430 = state_33373;
(statearr_33430[(7)] = inst_33272__$1);

return statearr_33430;
})();
if(inst_33272__$1){
var statearr_33431_33494 = state_33373__$1;
(statearr_33431_33494[(1)] = (16));

} else {
var statearr_33432_33495 = state_33373__$1;
(statearr_33432_33495[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (9))){
var inst_33302 = (state_33373[(2)]);
var state_33373__$1 = state_33373;
var statearr_33433_33496 = state_33373__$1;
(statearr_33433_33496[(2)] = inst_33302);

(statearr_33433_33496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (5))){
var inst_33248 = cljs.core.deref.call(null,cs);
var inst_33249 = cljs.core.seq.call(null,inst_33248);
var inst_33250 = inst_33249;
var inst_33251 = null;
var inst_33252 = (0);
var inst_33253 = (0);
var state_33373__$1 = (function (){var statearr_33434 = state_33373;
(statearr_33434[(13)] = inst_33251);

(statearr_33434[(15)] = inst_33250);

(statearr_33434[(16)] = inst_33253);

(statearr_33434[(17)] = inst_33252);

return statearr_33434;
})();
var statearr_33435_33497 = state_33373__$1;
(statearr_33435_33497[(2)] = null);

(statearr_33435_33497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (14))){
var state_33373__$1 = state_33373;
var statearr_33436_33498 = state_33373__$1;
(statearr_33436_33498[(2)] = null);

(statearr_33436_33498[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (45))){
var inst_33363 = (state_33373[(2)]);
var state_33373__$1 = state_33373;
var statearr_33437_33499 = state_33373__$1;
(statearr_33437_33499[(2)] = inst_33363);

(statearr_33437_33499[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (26))){
var inst_33305 = (state_33373[(29)]);
var inst_33359 = (state_33373[(2)]);
var inst_33360 = cljs.core.seq.call(null,inst_33305);
var state_33373__$1 = (function (){var statearr_33438 = state_33373;
(statearr_33438[(31)] = inst_33359);

return statearr_33438;
})();
if(inst_33360){
var statearr_33439_33500 = state_33373__$1;
(statearr_33439_33500[(1)] = (42));

} else {
var statearr_33440_33501 = state_33373__$1;
(statearr_33440_33501[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (16))){
var inst_33272 = (state_33373[(7)]);
var inst_33274 = cljs.core.chunked_seq_QMARK_.call(null,inst_33272);
var state_33373__$1 = state_33373;
if(inst_33274){
var statearr_33441_33502 = state_33373__$1;
(statearr_33441_33502[(1)] = (19));

} else {
var statearr_33442_33503 = state_33373__$1;
(statearr_33442_33503[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (38))){
var inst_33352 = (state_33373[(2)]);
var state_33373__$1 = state_33373;
var statearr_33443_33504 = state_33373__$1;
(statearr_33443_33504[(2)] = inst_33352);

(statearr_33443_33504[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (30))){
var state_33373__$1 = state_33373;
var statearr_33444_33505 = state_33373__$1;
(statearr_33444_33505[(2)] = null);

(statearr_33444_33505[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (10))){
var inst_33251 = (state_33373[(13)]);
var inst_33253 = (state_33373[(16)]);
var inst_33261 = cljs.core._nth.call(null,inst_33251,inst_33253);
var inst_33262 = cljs.core.nth.call(null,inst_33261,(0),null);
var inst_33263 = cljs.core.nth.call(null,inst_33261,(1),null);
var state_33373__$1 = (function (){var statearr_33445 = state_33373;
(statearr_33445[(26)] = inst_33262);

return statearr_33445;
})();
if(cljs.core.truth_(inst_33263)){
var statearr_33446_33506 = state_33373__$1;
(statearr_33446_33506[(1)] = (13));

} else {
var statearr_33447_33507 = state_33373__$1;
(statearr_33447_33507[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (18))){
var inst_33298 = (state_33373[(2)]);
var state_33373__$1 = state_33373;
var statearr_33448_33508 = state_33373__$1;
(statearr_33448_33508[(2)] = inst_33298);

(statearr_33448_33508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (42))){
var state_33373__$1 = state_33373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33373__$1,(45),dchan);
} else {
if((state_val_33374 === (37))){
var inst_33332 = (state_33373[(25)]);
var inst_33341 = (state_33373[(23)]);
var inst_33241 = (state_33373[(11)]);
var inst_33341__$1 = cljs.core.first.call(null,inst_33332);
var inst_33342 = cljs.core.async.put_BANG_.call(null,inst_33341__$1,inst_33241,done);
var state_33373__$1 = (function (){var statearr_33449 = state_33373;
(statearr_33449[(23)] = inst_33341__$1);

return statearr_33449;
})();
if(cljs.core.truth_(inst_33342)){
var statearr_33450_33509 = state_33373__$1;
(statearr_33450_33509[(1)] = (39));

} else {
var statearr_33451_33510 = state_33373__$1;
(statearr_33451_33510[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33374 === (8))){
var inst_33253 = (state_33373[(16)]);
var inst_33252 = (state_33373[(17)]);
var inst_33255 = (inst_33253 < inst_33252);
var inst_33256 = inst_33255;
var state_33373__$1 = state_33373;
if(cljs.core.truth_(inst_33256)){
var statearr_33452_33511 = state_33373__$1;
(statearr_33452_33511[(1)] = (10));

} else {
var statearr_33453_33512 = state_33373__$1;
(statearr_33453_33512[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32542__auto__ = null;
var cljs$core$async$mult_$_state_machine__32542__auto____0 = (function (){
var statearr_33454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33454[(0)] = cljs$core$async$mult_$_state_machine__32542__auto__);

(statearr_33454[(1)] = (1));

return statearr_33454;
});
var cljs$core$async$mult_$_state_machine__32542__auto____1 = (function (state_33373){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_33373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e33455){if((e33455 instanceof Object)){
var ex__32545__auto__ = e33455;
var statearr_33456_33513 = state_33373;
(statearr_33456_33513[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33514 = state_33373;
state_33373 = G__33514;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32542__auto__ = function(state_33373){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32542__auto____1.call(this,state_33373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32542__auto____0;
cljs$core$async$mult_$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32542__auto____1;
return cljs$core$async$mult_$_state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_33457 = f__32637__auto__.call(null);
(statearr_33457[(6)] = c__32636__auto___33458);

return statearr_33457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33516 = arguments.length;
switch (G__33516) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33518 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33518.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33519 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33519.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33520 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33520.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33521 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33521.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33522 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33522.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33533 = arguments.length;
var i__4737__auto___33534 = (0);
while(true){
if((i__4737__auto___33534 < len__4736__auto___33533)){
args__4742__auto__.push((arguments[i__4737__auto___33534]));

var G__33535 = (i__4737__auto___33534 + (1));
i__4737__auto___33534 = G__33535;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33527){
var map__33528 = p__33527;
var map__33528__$1 = (((((!((map__33528 == null))))?(((((map__33528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33528):map__33528);
var opts = map__33528__$1;
var statearr_33530_33536 = state;
(statearr_33530_33536[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_33531_33537 = state;
(statearr_33531_33537[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_33532_33538 = state;
(statearr_33532_33538[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33523){
var G__33524 = cljs.core.first.call(null,seq33523);
var seq33523__$1 = cljs.core.next.call(null,seq33523);
var G__33525 = cljs.core.first.call(null,seq33523__$1);
var seq33523__$2 = cljs.core.next.call(null,seq33523__$1);
var G__33526 = cljs.core.first.call(null,seq33523__$2);
var seq33523__$3 = cljs.core.next.call(null,seq33523__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33524,G__33525,G__33526,seq33523__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33539 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33539 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33540){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33540 = meta33540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33541,meta33540__$1){
var self__ = this;
var _33541__$1 = this;
return (new cljs.core.async.t_cljs$core$async33539(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33540__$1));
}));

(cljs.core.async.t_cljs$core$async33539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33541){
var self__ = this;
var _33541__$1 = this;
return self__.meta33540;
}));

(cljs.core.async.t_cljs$core$async33539.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33539.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33539.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33539.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async33539.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async33539.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async33539.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async33539.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async33539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33540","meta33540",1709408981,null)], null);
}));

(cljs.core.async.t_cljs$core$async33539.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33539");

(cljs.core.async.t_cljs$core$async33539.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33539");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33539.
 */
cljs.core.async.__GT_t_cljs$core$async33539 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33539(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33540){
return (new cljs.core.async.t_cljs$core$async33539(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33540));
});

}

return (new cljs.core.async.t_cljs$core$async33539(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32636__auto___33703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_33643){
var state_val_33644 = (state_33643[(1)]);
if((state_val_33644 === (7))){
var inst_33558 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
var statearr_33645_33704 = state_33643__$1;
(statearr_33645_33704[(2)] = inst_33558);

(statearr_33645_33704[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (20))){
var inst_33570 = (state_33643[(7)]);
var state_33643__$1 = state_33643;
var statearr_33646_33705 = state_33643__$1;
(statearr_33646_33705[(2)] = inst_33570);

(statearr_33646_33705[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (27))){
var state_33643__$1 = state_33643;
var statearr_33647_33706 = state_33643__$1;
(statearr_33647_33706[(2)] = null);

(statearr_33647_33706[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (1))){
var inst_33545 = (state_33643[(8)]);
var inst_33545__$1 = calc_state.call(null);
var inst_33547 = (inst_33545__$1 == null);
var inst_33548 = cljs.core.not.call(null,inst_33547);
var state_33643__$1 = (function (){var statearr_33648 = state_33643;
(statearr_33648[(8)] = inst_33545__$1);

return statearr_33648;
})();
if(inst_33548){
var statearr_33649_33707 = state_33643__$1;
(statearr_33649_33707[(1)] = (2));

} else {
var statearr_33650_33708 = state_33643__$1;
(statearr_33650_33708[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (24))){
var inst_33603 = (state_33643[(9)]);
var inst_33594 = (state_33643[(10)]);
var inst_33617 = (state_33643[(11)]);
var inst_33617__$1 = inst_33594.call(null,inst_33603);
var state_33643__$1 = (function (){var statearr_33651 = state_33643;
(statearr_33651[(11)] = inst_33617__$1);

return statearr_33651;
})();
if(cljs.core.truth_(inst_33617__$1)){
var statearr_33652_33709 = state_33643__$1;
(statearr_33652_33709[(1)] = (29));

} else {
var statearr_33653_33710 = state_33643__$1;
(statearr_33653_33710[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (4))){
var inst_33561 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
if(cljs.core.truth_(inst_33561)){
var statearr_33654_33711 = state_33643__$1;
(statearr_33654_33711[(1)] = (8));

} else {
var statearr_33655_33712 = state_33643__$1;
(statearr_33655_33712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (15))){
var inst_33588 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
if(cljs.core.truth_(inst_33588)){
var statearr_33656_33713 = state_33643__$1;
(statearr_33656_33713[(1)] = (19));

} else {
var statearr_33657_33714 = state_33643__$1;
(statearr_33657_33714[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (21))){
var inst_33593 = (state_33643[(12)]);
var inst_33593__$1 = (state_33643[(2)]);
var inst_33594 = cljs.core.get.call(null,inst_33593__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33595 = cljs.core.get.call(null,inst_33593__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33596 = cljs.core.get.call(null,inst_33593__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33643__$1 = (function (){var statearr_33658 = state_33643;
(statearr_33658[(12)] = inst_33593__$1);

(statearr_33658[(13)] = inst_33595);

(statearr_33658[(10)] = inst_33594);

return statearr_33658;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33643__$1,(22),inst_33596);
} else {
if((state_val_33644 === (31))){
var inst_33625 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
if(cljs.core.truth_(inst_33625)){
var statearr_33659_33715 = state_33643__$1;
(statearr_33659_33715[(1)] = (32));

} else {
var statearr_33660_33716 = state_33643__$1;
(statearr_33660_33716[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (32))){
var inst_33602 = (state_33643[(14)]);
var state_33643__$1 = state_33643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33643__$1,(35),out,inst_33602);
} else {
if((state_val_33644 === (33))){
var inst_33593 = (state_33643[(12)]);
var inst_33570 = inst_33593;
var state_33643__$1 = (function (){var statearr_33661 = state_33643;
(statearr_33661[(7)] = inst_33570);

return statearr_33661;
})();
var statearr_33662_33717 = state_33643__$1;
(statearr_33662_33717[(2)] = null);

(statearr_33662_33717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (13))){
var inst_33570 = (state_33643[(7)]);
var inst_33577 = inst_33570.cljs$lang$protocol_mask$partition0$;
var inst_33578 = (inst_33577 & (64));
var inst_33579 = inst_33570.cljs$core$ISeq$;
var inst_33580 = (cljs.core.PROTOCOL_SENTINEL === inst_33579);
var inst_33581 = ((inst_33578) || (inst_33580));
var state_33643__$1 = state_33643;
if(cljs.core.truth_(inst_33581)){
var statearr_33663_33718 = state_33643__$1;
(statearr_33663_33718[(1)] = (16));

} else {
var statearr_33664_33719 = state_33643__$1;
(statearr_33664_33719[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (22))){
var inst_33603 = (state_33643[(9)]);
var inst_33602 = (state_33643[(14)]);
var inst_33601 = (state_33643[(2)]);
var inst_33602__$1 = cljs.core.nth.call(null,inst_33601,(0),null);
var inst_33603__$1 = cljs.core.nth.call(null,inst_33601,(1),null);
var inst_33604 = (inst_33602__$1 == null);
var inst_33605 = cljs.core._EQ_.call(null,inst_33603__$1,change);
var inst_33606 = ((inst_33604) || (inst_33605));
var state_33643__$1 = (function (){var statearr_33665 = state_33643;
(statearr_33665[(9)] = inst_33603__$1);

(statearr_33665[(14)] = inst_33602__$1);

return statearr_33665;
})();
if(cljs.core.truth_(inst_33606)){
var statearr_33666_33720 = state_33643__$1;
(statearr_33666_33720[(1)] = (23));

} else {
var statearr_33667_33721 = state_33643__$1;
(statearr_33667_33721[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (36))){
var inst_33593 = (state_33643[(12)]);
var inst_33570 = inst_33593;
var state_33643__$1 = (function (){var statearr_33668 = state_33643;
(statearr_33668[(7)] = inst_33570);

return statearr_33668;
})();
var statearr_33669_33722 = state_33643__$1;
(statearr_33669_33722[(2)] = null);

(statearr_33669_33722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (29))){
var inst_33617 = (state_33643[(11)]);
var state_33643__$1 = state_33643;
var statearr_33670_33723 = state_33643__$1;
(statearr_33670_33723[(2)] = inst_33617);

(statearr_33670_33723[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (6))){
var state_33643__$1 = state_33643;
var statearr_33671_33724 = state_33643__$1;
(statearr_33671_33724[(2)] = false);

(statearr_33671_33724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (28))){
var inst_33613 = (state_33643[(2)]);
var inst_33614 = calc_state.call(null);
var inst_33570 = inst_33614;
var state_33643__$1 = (function (){var statearr_33672 = state_33643;
(statearr_33672[(7)] = inst_33570);

(statearr_33672[(15)] = inst_33613);

return statearr_33672;
})();
var statearr_33673_33725 = state_33643__$1;
(statearr_33673_33725[(2)] = null);

(statearr_33673_33725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (25))){
var inst_33639 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
var statearr_33674_33726 = state_33643__$1;
(statearr_33674_33726[(2)] = inst_33639);

(statearr_33674_33726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (34))){
var inst_33637 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
var statearr_33675_33727 = state_33643__$1;
(statearr_33675_33727[(2)] = inst_33637);

(statearr_33675_33727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (17))){
var state_33643__$1 = state_33643;
var statearr_33676_33728 = state_33643__$1;
(statearr_33676_33728[(2)] = false);

(statearr_33676_33728[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (3))){
var state_33643__$1 = state_33643;
var statearr_33677_33729 = state_33643__$1;
(statearr_33677_33729[(2)] = false);

(statearr_33677_33729[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (12))){
var inst_33641 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33643__$1,inst_33641);
} else {
if((state_val_33644 === (2))){
var inst_33545 = (state_33643[(8)]);
var inst_33550 = inst_33545.cljs$lang$protocol_mask$partition0$;
var inst_33551 = (inst_33550 & (64));
var inst_33552 = inst_33545.cljs$core$ISeq$;
var inst_33553 = (cljs.core.PROTOCOL_SENTINEL === inst_33552);
var inst_33554 = ((inst_33551) || (inst_33553));
var state_33643__$1 = state_33643;
if(cljs.core.truth_(inst_33554)){
var statearr_33678_33730 = state_33643__$1;
(statearr_33678_33730[(1)] = (5));

} else {
var statearr_33679_33731 = state_33643__$1;
(statearr_33679_33731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (23))){
var inst_33602 = (state_33643[(14)]);
var inst_33608 = (inst_33602 == null);
var state_33643__$1 = state_33643;
if(cljs.core.truth_(inst_33608)){
var statearr_33680_33732 = state_33643__$1;
(statearr_33680_33732[(1)] = (26));

} else {
var statearr_33681_33733 = state_33643__$1;
(statearr_33681_33733[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (35))){
var inst_33628 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
if(cljs.core.truth_(inst_33628)){
var statearr_33682_33734 = state_33643__$1;
(statearr_33682_33734[(1)] = (36));

} else {
var statearr_33683_33735 = state_33643__$1;
(statearr_33683_33735[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (19))){
var inst_33570 = (state_33643[(7)]);
var inst_33590 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33570);
var state_33643__$1 = state_33643;
var statearr_33684_33736 = state_33643__$1;
(statearr_33684_33736[(2)] = inst_33590);

(statearr_33684_33736[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (11))){
var inst_33570 = (state_33643[(7)]);
var inst_33574 = (inst_33570 == null);
var inst_33575 = cljs.core.not.call(null,inst_33574);
var state_33643__$1 = state_33643;
if(inst_33575){
var statearr_33685_33737 = state_33643__$1;
(statearr_33685_33737[(1)] = (13));

} else {
var statearr_33686_33738 = state_33643__$1;
(statearr_33686_33738[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (9))){
var inst_33545 = (state_33643[(8)]);
var state_33643__$1 = state_33643;
var statearr_33687_33739 = state_33643__$1;
(statearr_33687_33739[(2)] = inst_33545);

(statearr_33687_33739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (5))){
var state_33643__$1 = state_33643;
var statearr_33688_33740 = state_33643__$1;
(statearr_33688_33740[(2)] = true);

(statearr_33688_33740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (14))){
var state_33643__$1 = state_33643;
var statearr_33689_33741 = state_33643__$1;
(statearr_33689_33741[(2)] = false);

(statearr_33689_33741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (26))){
var inst_33603 = (state_33643[(9)]);
var inst_33610 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33603);
var state_33643__$1 = state_33643;
var statearr_33690_33742 = state_33643__$1;
(statearr_33690_33742[(2)] = inst_33610);

(statearr_33690_33742[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (16))){
var state_33643__$1 = state_33643;
var statearr_33691_33743 = state_33643__$1;
(statearr_33691_33743[(2)] = true);

(statearr_33691_33743[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (38))){
var inst_33633 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
var statearr_33692_33744 = state_33643__$1;
(statearr_33692_33744[(2)] = inst_33633);

(statearr_33692_33744[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (30))){
var inst_33603 = (state_33643[(9)]);
var inst_33595 = (state_33643[(13)]);
var inst_33594 = (state_33643[(10)]);
var inst_33620 = cljs.core.empty_QMARK_.call(null,inst_33594);
var inst_33621 = inst_33595.call(null,inst_33603);
var inst_33622 = cljs.core.not.call(null,inst_33621);
var inst_33623 = ((inst_33620) && (inst_33622));
var state_33643__$1 = state_33643;
var statearr_33693_33745 = state_33643__$1;
(statearr_33693_33745[(2)] = inst_33623);

(statearr_33693_33745[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (10))){
var inst_33545 = (state_33643[(8)]);
var inst_33566 = (state_33643[(2)]);
var inst_33567 = cljs.core.get.call(null,inst_33566,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33568 = cljs.core.get.call(null,inst_33566,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33569 = cljs.core.get.call(null,inst_33566,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33570 = inst_33545;
var state_33643__$1 = (function (){var statearr_33694 = state_33643;
(statearr_33694[(7)] = inst_33570);

(statearr_33694[(16)] = inst_33569);

(statearr_33694[(17)] = inst_33567);

(statearr_33694[(18)] = inst_33568);

return statearr_33694;
})();
var statearr_33695_33746 = state_33643__$1;
(statearr_33695_33746[(2)] = null);

(statearr_33695_33746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (18))){
var inst_33585 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
var statearr_33696_33747 = state_33643__$1;
(statearr_33696_33747[(2)] = inst_33585);

(statearr_33696_33747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (37))){
var state_33643__$1 = state_33643;
var statearr_33697_33748 = state_33643__$1;
(statearr_33697_33748[(2)] = null);

(statearr_33697_33748[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (8))){
var inst_33545 = (state_33643[(8)]);
var inst_33563 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33545);
var state_33643__$1 = state_33643;
var statearr_33698_33749 = state_33643__$1;
(statearr_33698_33749[(2)] = inst_33563);

(statearr_33698_33749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32542__auto__ = null;
var cljs$core$async$mix_$_state_machine__32542__auto____0 = (function (){
var statearr_33699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33699[(0)] = cljs$core$async$mix_$_state_machine__32542__auto__);

(statearr_33699[(1)] = (1));

return statearr_33699;
});
var cljs$core$async$mix_$_state_machine__32542__auto____1 = (function (state_33643){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_33643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e33700){if((e33700 instanceof Object)){
var ex__32545__auto__ = e33700;
var statearr_33701_33750 = state_33643;
(statearr_33701_33750[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33751 = state_33643;
state_33643 = G__33751;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32542__auto__ = function(state_33643){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32542__auto____1.call(this,state_33643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32542__auto____0;
cljs$core$async$mix_$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32542__auto____1;
return cljs$core$async$mix_$_state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_33702 = f__32637__auto__.call(null);
(statearr_33702[(6)] = c__32636__auto___33703);

return statearr_33702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33754 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33754.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33755 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33755.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33756 = (function() {
var G__33757 = null;
var G__33757__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__33757__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__33757 = function(p,v){
switch(arguments.length){
case 1:
return G__33757__1.call(this,p);
case 2:
return G__33757__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33757.cljs$core$IFn$_invoke$arity$1 = G__33757__1;
G__33757.cljs$core$IFn$_invoke$arity$2 = G__33757__2;
return G__33757;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33753 = arguments.length;
switch (G__33753) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33756.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33756.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33761 = arguments.length;
switch (G__33761) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__33759_SHARP_){
if(cljs.core.truth_(p1__33759_SHARP_.call(null,topic))){
return p1__33759_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33759_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33762 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33762 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33763){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33763 = meta33763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33764,meta33763__$1){
var self__ = this;
var _33764__$1 = this;
return (new cljs.core.async.t_cljs$core$async33762(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33763__$1));
}));

(cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33764){
var self__ = this;
var _33764__$1 = this;
return self__.meta33763;
}));

(cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33763","meta33763",-187457009,null)], null);
}));

(cljs.core.async.t_cljs$core$async33762.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33762");

(cljs.core.async.t_cljs$core$async33762.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33762");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33762.
 */
cljs.core.async.__GT_t_cljs$core$async33762 = (function cljs$core$async$__GT_t_cljs$core$async33762(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33763){
return (new cljs.core.async.t_cljs$core$async33762(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33763));
});

}

return (new cljs.core.async.t_cljs$core$async33762(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32636__auto___33882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_33836){
var state_val_33837 = (state_33836[(1)]);
if((state_val_33837 === (7))){
var inst_33832 = (state_33836[(2)]);
var state_33836__$1 = state_33836;
var statearr_33838_33883 = state_33836__$1;
(statearr_33838_33883[(2)] = inst_33832);

(statearr_33838_33883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (20))){
var state_33836__$1 = state_33836;
var statearr_33839_33884 = state_33836__$1;
(statearr_33839_33884[(2)] = null);

(statearr_33839_33884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (1))){
var state_33836__$1 = state_33836;
var statearr_33840_33885 = state_33836__$1;
(statearr_33840_33885[(2)] = null);

(statearr_33840_33885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (24))){
var inst_33815 = (state_33836[(7)]);
var inst_33824 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33815);
var state_33836__$1 = state_33836;
var statearr_33841_33886 = state_33836__$1;
(statearr_33841_33886[(2)] = inst_33824);

(statearr_33841_33886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (4))){
var inst_33767 = (state_33836[(8)]);
var inst_33767__$1 = (state_33836[(2)]);
var inst_33768 = (inst_33767__$1 == null);
var state_33836__$1 = (function (){var statearr_33842 = state_33836;
(statearr_33842[(8)] = inst_33767__$1);

return statearr_33842;
})();
if(cljs.core.truth_(inst_33768)){
var statearr_33843_33887 = state_33836__$1;
(statearr_33843_33887[(1)] = (5));

} else {
var statearr_33844_33888 = state_33836__$1;
(statearr_33844_33888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (15))){
var inst_33809 = (state_33836[(2)]);
var state_33836__$1 = state_33836;
var statearr_33845_33889 = state_33836__$1;
(statearr_33845_33889[(2)] = inst_33809);

(statearr_33845_33889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (21))){
var inst_33829 = (state_33836[(2)]);
var state_33836__$1 = (function (){var statearr_33846 = state_33836;
(statearr_33846[(9)] = inst_33829);

return statearr_33846;
})();
var statearr_33847_33890 = state_33836__$1;
(statearr_33847_33890[(2)] = null);

(statearr_33847_33890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (13))){
var inst_33791 = (state_33836[(10)]);
var inst_33793 = cljs.core.chunked_seq_QMARK_.call(null,inst_33791);
var state_33836__$1 = state_33836;
if(inst_33793){
var statearr_33848_33891 = state_33836__$1;
(statearr_33848_33891[(1)] = (16));

} else {
var statearr_33849_33892 = state_33836__$1;
(statearr_33849_33892[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (22))){
var inst_33821 = (state_33836[(2)]);
var state_33836__$1 = state_33836;
if(cljs.core.truth_(inst_33821)){
var statearr_33850_33893 = state_33836__$1;
(statearr_33850_33893[(1)] = (23));

} else {
var statearr_33851_33894 = state_33836__$1;
(statearr_33851_33894[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (6))){
var inst_33817 = (state_33836[(11)]);
var inst_33767 = (state_33836[(8)]);
var inst_33815 = (state_33836[(7)]);
var inst_33815__$1 = topic_fn.call(null,inst_33767);
var inst_33816 = cljs.core.deref.call(null,mults);
var inst_33817__$1 = cljs.core.get.call(null,inst_33816,inst_33815__$1);
var state_33836__$1 = (function (){var statearr_33852 = state_33836;
(statearr_33852[(11)] = inst_33817__$1);

(statearr_33852[(7)] = inst_33815__$1);

return statearr_33852;
})();
if(cljs.core.truth_(inst_33817__$1)){
var statearr_33853_33895 = state_33836__$1;
(statearr_33853_33895[(1)] = (19));

} else {
var statearr_33854_33896 = state_33836__$1;
(statearr_33854_33896[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (25))){
var inst_33826 = (state_33836[(2)]);
var state_33836__$1 = state_33836;
var statearr_33855_33897 = state_33836__$1;
(statearr_33855_33897[(2)] = inst_33826);

(statearr_33855_33897[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (17))){
var inst_33791 = (state_33836[(10)]);
var inst_33800 = cljs.core.first.call(null,inst_33791);
var inst_33801 = cljs.core.async.muxch_STAR_.call(null,inst_33800);
var inst_33802 = cljs.core.async.close_BANG_.call(null,inst_33801);
var inst_33803 = cljs.core.next.call(null,inst_33791);
var inst_33777 = inst_33803;
var inst_33778 = null;
var inst_33779 = (0);
var inst_33780 = (0);
var state_33836__$1 = (function (){var statearr_33856 = state_33836;
(statearr_33856[(12)] = inst_33779);

(statearr_33856[(13)] = inst_33780);

(statearr_33856[(14)] = inst_33802);

(statearr_33856[(15)] = inst_33778);

(statearr_33856[(16)] = inst_33777);

return statearr_33856;
})();
var statearr_33857_33898 = state_33836__$1;
(statearr_33857_33898[(2)] = null);

(statearr_33857_33898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (3))){
var inst_33834 = (state_33836[(2)]);
var state_33836__$1 = state_33836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33836__$1,inst_33834);
} else {
if((state_val_33837 === (12))){
var inst_33811 = (state_33836[(2)]);
var state_33836__$1 = state_33836;
var statearr_33858_33899 = state_33836__$1;
(statearr_33858_33899[(2)] = inst_33811);

(statearr_33858_33899[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (2))){
var state_33836__$1 = state_33836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33836__$1,(4),ch);
} else {
if((state_val_33837 === (23))){
var state_33836__$1 = state_33836;
var statearr_33859_33900 = state_33836__$1;
(statearr_33859_33900[(2)] = null);

(statearr_33859_33900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (19))){
var inst_33817 = (state_33836[(11)]);
var inst_33767 = (state_33836[(8)]);
var inst_33819 = cljs.core.async.muxch_STAR_.call(null,inst_33817);
var state_33836__$1 = state_33836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33836__$1,(22),inst_33819,inst_33767);
} else {
if((state_val_33837 === (11))){
var inst_33791 = (state_33836[(10)]);
var inst_33777 = (state_33836[(16)]);
var inst_33791__$1 = cljs.core.seq.call(null,inst_33777);
var state_33836__$1 = (function (){var statearr_33860 = state_33836;
(statearr_33860[(10)] = inst_33791__$1);

return statearr_33860;
})();
if(inst_33791__$1){
var statearr_33861_33901 = state_33836__$1;
(statearr_33861_33901[(1)] = (13));

} else {
var statearr_33862_33902 = state_33836__$1;
(statearr_33862_33902[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (9))){
var inst_33813 = (state_33836[(2)]);
var state_33836__$1 = state_33836;
var statearr_33863_33903 = state_33836__$1;
(statearr_33863_33903[(2)] = inst_33813);

(statearr_33863_33903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (5))){
var inst_33774 = cljs.core.deref.call(null,mults);
var inst_33775 = cljs.core.vals.call(null,inst_33774);
var inst_33776 = cljs.core.seq.call(null,inst_33775);
var inst_33777 = inst_33776;
var inst_33778 = null;
var inst_33779 = (0);
var inst_33780 = (0);
var state_33836__$1 = (function (){var statearr_33864 = state_33836;
(statearr_33864[(12)] = inst_33779);

(statearr_33864[(13)] = inst_33780);

(statearr_33864[(15)] = inst_33778);

(statearr_33864[(16)] = inst_33777);

return statearr_33864;
})();
var statearr_33865_33904 = state_33836__$1;
(statearr_33865_33904[(2)] = null);

(statearr_33865_33904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (14))){
var state_33836__$1 = state_33836;
var statearr_33869_33905 = state_33836__$1;
(statearr_33869_33905[(2)] = null);

(statearr_33869_33905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (16))){
var inst_33791 = (state_33836[(10)]);
var inst_33795 = cljs.core.chunk_first.call(null,inst_33791);
var inst_33796 = cljs.core.chunk_rest.call(null,inst_33791);
var inst_33797 = cljs.core.count.call(null,inst_33795);
var inst_33777 = inst_33796;
var inst_33778 = inst_33795;
var inst_33779 = inst_33797;
var inst_33780 = (0);
var state_33836__$1 = (function (){var statearr_33870 = state_33836;
(statearr_33870[(12)] = inst_33779);

(statearr_33870[(13)] = inst_33780);

(statearr_33870[(15)] = inst_33778);

(statearr_33870[(16)] = inst_33777);

return statearr_33870;
})();
var statearr_33871_33906 = state_33836__$1;
(statearr_33871_33906[(2)] = null);

(statearr_33871_33906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (10))){
var inst_33779 = (state_33836[(12)]);
var inst_33780 = (state_33836[(13)]);
var inst_33778 = (state_33836[(15)]);
var inst_33777 = (state_33836[(16)]);
var inst_33785 = cljs.core._nth.call(null,inst_33778,inst_33780);
var inst_33786 = cljs.core.async.muxch_STAR_.call(null,inst_33785);
var inst_33787 = cljs.core.async.close_BANG_.call(null,inst_33786);
var inst_33788 = (inst_33780 + (1));
var tmp33866 = inst_33779;
var tmp33867 = inst_33778;
var tmp33868 = inst_33777;
var inst_33777__$1 = tmp33868;
var inst_33778__$1 = tmp33867;
var inst_33779__$1 = tmp33866;
var inst_33780__$1 = inst_33788;
var state_33836__$1 = (function (){var statearr_33872 = state_33836;
(statearr_33872[(12)] = inst_33779__$1);

(statearr_33872[(13)] = inst_33780__$1);

(statearr_33872[(15)] = inst_33778__$1);

(statearr_33872[(17)] = inst_33787);

(statearr_33872[(16)] = inst_33777__$1);

return statearr_33872;
})();
var statearr_33873_33907 = state_33836__$1;
(statearr_33873_33907[(2)] = null);

(statearr_33873_33907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (18))){
var inst_33806 = (state_33836[(2)]);
var state_33836__$1 = state_33836;
var statearr_33874_33908 = state_33836__$1;
(statearr_33874_33908[(2)] = inst_33806);

(statearr_33874_33908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33837 === (8))){
var inst_33779 = (state_33836[(12)]);
var inst_33780 = (state_33836[(13)]);
var inst_33782 = (inst_33780 < inst_33779);
var inst_33783 = inst_33782;
var state_33836__$1 = state_33836;
if(cljs.core.truth_(inst_33783)){
var statearr_33875_33909 = state_33836__$1;
(statearr_33875_33909[(1)] = (10));

} else {
var statearr_33876_33910 = state_33836__$1;
(statearr_33876_33910[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32542__auto__ = null;
var cljs$core$async$state_machine__32542__auto____0 = (function (){
var statearr_33877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33877[(0)] = cljs$core$async$state_machine__32542__auto__);

(statearr_33877[(1)] = (1));

return statearr_33877;
});
var cljs$core$async$state_machine__32542__auto____1 = (function (state_33836){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_33836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e33878){if((e33878 instanceof Object)){
var ex__32545__auto__ = e33878;
var statearr_33879_33911 = state_33836;
(statearr_33879_33911[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33912 = state_33836;
state_33836 = G__33912;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$state_machine__32542__auto__ = function(state_33836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32542__auto____1.call(this,state_33836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32542__auto____0;
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32542__auto____1;
return cljs$core$async$state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_33880 = f__32637__auto__.call(null);
(statearr_33880[(6)] = c__32636__auto___33882);

return statearr_33880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33914 = arguments.length;
switch (G__33914) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33917 = arguments.length;
switch (G__33917) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33920 = arguments.length;
switch (G__33920) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__32636__auto___33987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_33959){
var state_val_33960 = (state_33959[(1)]);
if((state_val_33960 === (7))){
var state_33959__$1 = state_33959;
var statearr_33961_33988 = state_33959__$1;
(statearr_33961_33988[(2)] = null);

(statearr_33961_33988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (1))){
var state_33959__$1 = state_33959;
var statearr_33962_33989 = state_33959__$1;
(statearr_33962_33989[(2)] = null);

(statearr_33962_33989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (4))){
var inst_33923 = (state_33959[(7)]);
var inst_33925 = (inst_33923 < cnt);
var state_33959__$1 = state_33959;
if(cljs.core.truth_(inst_33925)){
var statearr_33963_33990 = state_33959__$1;
(statearr_33963_33990[(1)] = (6));

} else {
var statearr_33964_33991 = state_33959__$1;
(statearr_33964_33991[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (15))){
var inst_33955 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33965_33992 = state_33959__$1;
(statearr_33965_33992[(2)] = inst_33955);

(statearr_33965_33992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (13))){
var inst_33948 = cljs.core.async.close_BANG_.call(null,out);
var state_33959__$1 = state_33959;
var statearr_33966_33993 = state_33959__$1;
(statearr_33966_33993[(2)] = inst_33948);

(statearr_33966_33993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (6))){
var state_33959__$1 = state_33959;
var statearr_33967_33994 = state_33959__$1;
(statearr_33967_33994[(2)] = null);

(statearr_33967_33994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (3))){
var inst_33957 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33959__$1,inst_33957);
} else {
if((state_val_33960 === (12))){
var inst_33945 = (state_33959[(8)]);
var inst_33945__$1 = (state_33959[(2)]);
var inst_33946 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33945__$1);
var state_33959__$1 = (function (){var statearr_33968 = state_33959;
(statearr_33968[(8)] = inst_33945__$1);

return statearr_33968;
})();
if(cljs.core.truth_(inst_33946)){
var statearr_33969_33995 = state_33959__$1;
(statearr_33969_33995[(1)] = (13));

} else {
var statearr_33970_33996 = state_33959__$1;
(statearr_33970_33996[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (2))){
var inst_33922 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33923 = (0);
var state_33959__$1 = (function (){var statearr_33971 = state_33959;
(statearr_33971[(7)] = inst_33923);

(statearr_33971[(9)] = inst_33922);

return statearr_33971;
})();
var statearr_33972_33997 = state_33959__$1;
(statearr_33972_33997[(2)] = null);

(statearr_33972_33997[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (11))){
var inst_33923 = (state_33959[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33959,(10),Object,null,(9));
var inst_33932 = chs__$1.call(null,inst_33923);
var inst_33933 = done.call(null,inst_33923);
var inst_33934 = cljs.core.async.take_BANG_.call(null,inst_33932,inst_33933);
var state_33959__$1 = state_33959;
var statearr_33973_33998 = state_33959__$1;
(statearr_33973_33998[(2)] = inst_33934);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33959__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (9))){
var inst_33923 = (state_33959[(7)]);
var inst_33936 = (state_33959[(2)]);
var inst_33937 = (inst_33923 + (1));
var inst_33923__$1 = inst_33937;
var state_33959__$1 = (function (){var statearr_33974 = state_33959;
(statearr_33974[(7)] = inst_33923__$1);

(statearr_33974[(10)] = inst_33936);

return statearr_33974;
})();
var statearr_33975_33999 = state_33959__$1;
(statearr_33975_33999[(2)] = null);

(statearr_33975_33999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (5))){
var inst_33943 = (state_33959[(2)]);
var state_33959__$1 = (function (){var statearr_33976 = state_33959;
(statearr_33976[(11)] = inst_33943);

return statearr_33976;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33959__$1,(12),dchan);
} else {
if((state_val_33960 === (14))){
var inst_33945 = (state_33959[(8)]);
var inst_33950 = cljs.core.apply.call(null,f,inst_33945);
var state_33959__$1 = state_33959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33959__$1,(16),out,inst_33950);
} else {
if((state_val_33960 === (16))){
var inst_33952 = (state_33959[(2)]);
var state_33959__$1 = (function (){var statearr_33977 = state_33959;
(statearr_33977[(12)] = inst_33952);

return statearr_33977;
})();
var statearr_33978_34000 = state_33959__$1;
(statearr_33978_34000[(2)] = null);

(statearr_33978_34000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (10))){
var inst_33927 = (state_33959[(2)]);
var inst_33928 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33959__$1 = (function (){var statearr_33979 = state_33959;
(statearr_33979[(13)] = inst_33927);

return statearr_33979;
})();
var statearr_33980_34001 = state_33959__$1;
(statearr_33980_34001[(2)] = inst_33928);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33959__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33960 === (8))){
var inst_33941 = (state_33959[(2)]);
var state_33959__$1 = state_33959;
var statearr_33981_34002 = state_33959__$1;
(statearr_33981_34002[(2)] = inst_33941);

(statearr_33981_34002[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32542__auto__ = null;
var cljs$core$async$state_machine__32542__auto____0 = (function (){
var statearr_33982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33982[(0)] = cljs$core$async$state_machine__32542__auto__);

(statearr_33982[(1)] = (1));

return statearr_33982;
});
var cljs$core$async$state_machine__32542__auto____1 = (function (state_33959){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_33959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e33983){if((e33983 instanceof Object)){
var ex__32545__auto__ = e33983;
var statearr_33984_34003 = state_33959;
(statearr_33984_34003[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34004 = state_33959;
state_33959 = G__34004;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$state_machine__32542__auto__ = function(state_33959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32542__auto____1.call(this,state_33959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32542__auto____0;
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32542__auto____1;
return cljs$core$async$state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_33985 = f__32637__auto__.call(null);
(statearr_33985[(6)] = c__32636__auto___33987);

return statearr_33985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34007 = arguments.length;
switch (G__34007) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32636__auto___34061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_34039){
var state_val_34040 = (state_34039[(1)]);
if((state_val_34040 === (7))){
var inst_34019 = (state_34039[(7)]);
var inst_34018 = (state_34039[(8)]);
var inst_34018__$1 = (state_34039[(2)]);
var inst_34019__$1 = cljs.core.nth.call(null,inst_34018__$1,(0),null);
var inst_34020 = cljs.core.nth.call(null,inst_34018__$1,(1),null);
var inst_34021 = (inst_34019__$1 == null);
var state_34039__$1 = (function (){var statearr_34041 = state_34039;
(statearr_34041[(9)] = inst_34020);

(statearr_34041[(7)] = inst_34019__$1);

(statearr_34041[(8)] = inst_34018__$1);

return statearr_34041;
})();
if(cljs.core.truth_(inst_34021)){
var statearr_34042_34062 = state_34039__$1;
(statearr_34042_34062[(1)] = (8));

} else {
var statearr_34043_34063 = state_34039__$1;
(statearr_34043_34063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (1))){
var inst_34008 = cljs.core.vec.call(null,chs);
var inst_34009 = inst_34008;
var state_34039__$1 = (function (){var statearr_34044 = state_34039;
(statearr_34044[(10)] = inst_34009);

return statearr_34044;
})();
var statearr_34045_34064 = state_34039__$1;
(statearr_34045_34064[(2)] = null);

(statearr_34045_34064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (4))){
var inst_34009 = (state_34039[(10)]);
var state_34039__$1 = state_34039;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34039__$1,(7),inst_34009);
} else {
if((state_val_34040 === (6))){
var inst_34035 = (state_34039[(2)]);
var state_34039__$1 = state_34039;
var statearr_34046_34065 = state_34039__$1;
(statearr_34046_34065[(2)] = inst_34035);

(statearr_34046_34065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (3))){
var inst_34037 = (state_34039[(2)]);
var state_34039__$1 = state_34039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34039__$1,inst_34037);
} else {
if((state_val_34040 === (2))){
var inst_34009 = (state_34039[(10)]);
var inst_34011 = cljs.core.count.call(null,inst_34009);
var inst_34012 = (inst_34011 > (0));
var state_34039__$1 = state_34039;
if(cljs.core.truth_(inst_34012)){
var statearr_34048_34066 = state_34039__$1;
(statearr_34048_34066[(1)] = (4));

} else {
var statearr_34049_34067 = state_34039__$1;
(statearr_34049_34067[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (11))){
var inst_34009 = (state_34039[(10)]);
var inst_34028 = (state_34039[(2)]);
var tmp34047 = inst_34009;
var inst_34009__$1 = tmp34047;
var state_34039__$1 = (function (){var statearr_34050 = state_34039;
(statearr_34050[(11)] = inst_34028);

(statearr_34050[(10)] = inst_34009__$1);

return statearr_34050;
})();
var statearr_34051_34068 = state_34039__$1;
(statearr_34051_34068[(2)] = null);

(statearr_34051_34068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (9))){
var inst_34019 = (state_34039[(7)]);
var state_34039__$1 = state_34039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34039__$1,(11),out,inst_34019);
} else {
if((state_val_34040 === (5))){
var inst_34033 = cljs.core.async.close_BANG_.call(null,out);
var state_34039__$1 = state_34039;
var statearr_34052_34069 = state_34039__$1;
(statearr_34052_34069[(2)] = inst_34033);

(statearr_34052_34069[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (10))){
var inst_34031 = (state_34039[(2)]);
var state_34039__$1 = state_34039;
var statearr_34053_34070 = state_34039__$1;
(statearr_34053_34070[(2)] = inst_34031);

(statearr_34053_34070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (8))){
var inst_34020 = (state_34039[(9)]);
var inst_34019 = (state_34039[(7)]);
var inst_34018 = (state_34039[(8)]);
var inst_34009 = (state_34039[(10)]);
var inst_34023 = (function (){var cs = inst_34009;
var vec__34014 = inst_34018;
var v = inst_34019;
var c = inst_34020;
return (function (p1__34005_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34005_SHARP_);
});
})();
var inst_34024 = cljs.core.filterv.call(null,inst_34023,inst_34009);
var inst_34009__$1 = inst_34024;
var state_34039__$1 = (function (){var statearr_34054 = state_34039;
(statearr_34054[(10)] = inst_34009__$1);

return statearr_34054;
})();
var statearr_34055_34071 = state_34039__$1;
(statearr_34055_34071[(2)] = null);

(statearr_34055_34071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__32542__auto__ = null;
var cljs$core$async$state_machine__32542__auto____0 = (function (){
var statearr_34056 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34056[(0)] = cljs$core$async$state_machine__32542__auto__);

(statearr_34056[(1)] = (1));

return statearr_34056;
});
var cljs$core$async$state_machine__32542__auto____1 = (function (state_34039){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_34039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e34057){if((e34057 instanceof Object)){
var ex__32545__auto__ = e34057;
var statearr_34058_34072 = state_34039;
(statearr_34058_34072[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34073 = state_34039;
state_34039 = G__34073;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$state_machine__32542__auto__ = function(state_34039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32542__auto____1.call(this,state_34039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32542__auto____0;
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32542__auto____1;
return cljs$core$async$state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_34059 = f__32637__auto__.call(null);
(statearr_34059[(6)] = c__32636__auto___34061);

return statearr_34059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34075 = arguments.length;
switch (G__34075) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32636__auto___34120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_34099){
var state_val_34100 = (state_34099[(1)]);
if((state_val_34100 === (7))){
var inst_34081 = (state_34099[(7)]);
var inst_34081__$1 = (state_34099[(2)]);
var inst_34082 = (inst_34081__$1 == null);
var inst_34083 = cljs.core.not.call(null,inst_34082);
var state_34099__$1 = (function (){var statearr_34101 = state_34099;
(statearr_34101[(7)] = inst_34081__$1);

return statearr_34101;
})();
if(inst_34083){
var statearr_34102_34121 = state_34099__$1;
(statearr_34102_34121[(1)] = (8));

} else {
var statearr_34103_34122 = state_34099__$1;
(statearr_34103_34122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (1))){
var inst_34076 = (0);
var state_34099__$1 = (function (){var statearr_34104 = state_34099;
(statearr_34104[(8)] = inst_34076);

return statearr_34104;
})();
var statearr_34105_34123 = state_34099__$1;
(statearr_34105_34123[(2)] = null);

(statearr_34105_34123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (4))){
var state_34099__$1 = state_34099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34099__$1,(7),ch);
} else {
if((state_val_34100 === (6))){
var inst_34094 = (state_34099[(2)]);
var state_34099__$1 = state_34099;
var statearr_34106_34124 = state_34099__$1;
(statearr_34106_34124[(2)] = inst_34094);

(statearr_34106_34124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (3))){
var inst_34096 = (state_34099[(2)]);
var inst_34097 = cljs.core.async.close_BANG_.call(null,out);
var state_34099__$1 = (function (){var statearr_34107 = state_34099;
(statearr_34107[(9)] = inst_34096);

return statearr_34107;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34099__$1,inst_34097);
} else {
if((state_val_34100 === (2))){
var inst_34076 = (state_34099[(8)]);
var inst_34078 = (inst_34076 < n);
var state_34099__$1 = state_34099;
if(cljs.core.truth_(inst_34078)){
var statearr_34108_34125 = state_34099__$1;
(statearr_34108_34125[(1)] = (4));

} else {
var statearr_34109_34126 = state_34099__$1;
(statearr_34109_34126[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (11))){
var inst_34076 = (state_34099[(8)]);
var inst_34086 = (state_34099[(2)]);
var inst_34087 = (inst_34076 + (1));
var inst_34076__$1 = inst_34087;
var state_34099__$1 = (function (){var statearr_34110 = state_34099;
(statearr_34110[(8)] = inst_34076__$1);

(statearr_34110[(10)] = inst_34086);

return statearr_34110;
})();
var statearr_34111_34127 = state_34099__$1;
(statearr_34111_34127[(2)] = null);

(statearr_34111_34127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (9))){
var state_34099__$1 = state_34099;
var statearr_34112_34128 = state_34099__$1;
(statearr_34112_34128[(2)] = null);

(statearr_34112_34128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (5))){
var state_34099__$1 = state_34099;
var statearr_34113_34129 = state_34099__$1;
(statearr_34113_34129[(2)] = null);

(statearr_34113_34129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (10))){
var inst_34091 = (state_34099[(2)]);
var state_34099__$1 = state_34099;
var statearr_34114_34130 = state_34099__$1;
(statearr_34114_34130[(2)] = inst_34091);

(statearr_34114_34130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34100 === (8))){
var inst_34081 = (state_34099[(7)]);
var state_34099__$1 = state_34099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34099__$1,(11),out,inst_34081);
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
});
return (function() {
var cljs$core$async$state_machine__32542__auto__ = null;
var cljs$core$async$state_machine__32542__auto____0 = (function (){
var statearr_34115 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34115[(0)] = cljs$core$async$state_machine__32542__auto__);

(statearr_34115[(1)] = (1));

return statearr_34115;
});
var cljs$core$async$state_machine__32542__auto____1 = (function (state_34099){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_34099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e34116){if((e34116 instanceof Object)){
var ex__32545__auto__ = e34116;
var statearr_34117_34131 = state_34099;
(statearr_34117_34131[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34132 = state_34099;
state_34099 = G__34132;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$state_machine__32542__auto__ = function(state_34099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32542__auto____1.call(this,state_34099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32542__auto____0;
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32542__auto____1;
return cljs$core$async$state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_34118 = f__32637__auto__.call(null);
(statearr_34118[(6)] = c__32636__auto___34120);

return statearr_34118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34134 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34134 = (function (f,ch,meta34135){
this.f = f;
this.ch = ch;
this.meta34135 = meta34135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34136,meta34135__$1){
var self__ = this;
var _34136__$1 = this;
return (new cljs.core.async.t_cljs$core$async34134(self__.f,self__.ch,meta34135__$1));
}));

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34136){
var self__ = this;
var _34136__$1 = this;
return self__.meta34135;
}));

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34137 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34137 = (function (f,ch,meta34135,_,fn1,meta34138){
this.f = f;
this.ch = ch;
this.meta34135 = meta34135;
this._ = _;
this.fn1 = fn1;
this.meta34138 = meta34138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34139,meta34138__$1){
var self__ = this;
var _34139__$1 = this;
return (new cljs.core.async.t_cljs$core$async34137(self__.f,self__.ch,self__.meta34135,self__._,self__.fn1,meta34138__$1));
}));

(cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34139){
var self__ = this;
var _34139__$1 = this;
return self__.meta34138;
}));

(cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__34133_SHARP_){
return f1.call(null,(((p1__34133_SHARP_ == null))?null:self__.f.call(null,p1__34133_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async34137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34135","meta34135",1267019723,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34134","cljs.core.async/t_cljs$core$async34134",-1220924658,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34138","meta34138",-1526378639,null)], null);
}));

(cljs.core.async.t_cljs$core$async34137.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34137");

(cljs.core.async.t_cljs$core$async34137.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async34137");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34137.
 */
cljs.core.async.__GT_t_cljs$core$async34137 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34137(f__$1,ch__$1,meta34135__$1,___$2,fn1__$1,meta34138){
return (new cljs.core.async.t_cljs$core$async34137(f__$1,ch__$1,meta34135__$1,___$2,fn1__$1,meta34138));
});

}

return (new cljs.core.async.t_cljs$core$async34137(self__.f,self__.ch,self__.meta34135,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34135","meta34135",1267019723,null)], null);
}));

(cljs.core.async.t_cljs$core$async34134.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34134");

(cljs.core.async.t_cljs$core$async34134.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async34134");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34134.
 */
cljs.core.async.__GT_t_cljs$core$async34134 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34134(f__$1,ch__$1,meta34135){
return (new cljs.core.async.t_cljs$core$async34134(f__$1,ch__$1,meta34135));
});

}

return (new cljs.core.async.t_cljs$core$async34134(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34140 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34140 = (function (f,ch,meta34141){
this.f = f;
this.ch = ch;
this.meta34141 = meta34141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34142,meta34141__$1){
var self__ = this;
var _34142__$1 = this;
return (new cljs.core.async.t_cljs$core$async34140(self__.f,self__.ch,meta34141__$1));
}));

(cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34142){
var self__ = this;
var _34142__$1 = this;
return self__.meta34141;
}));

(cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34140.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async34140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34141","meta34141",846809801,null)], null);
}));

(cljs.core.async.t_cljs$core$async34140.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34140");

(cljs.core.async.t_cljs$core$async34140.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async34140");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34140.
 */
cljs.core.async.__GT_t_cljs$core$async34140 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34140(f__$1,ch__$1,meta34141){
return (new cljs.core.async.t_cljs$core$async34140(f__$1,ch__$1,meta34141));
});

}

return (new cljs.core.async.t_cljs$core$async34140(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34143 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34143 = (function (p,ch,meta34144){
this.p = p;
this.ch = ch;
this.meta34144 = meta34144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34145,meta34144__$1){
var self__ = this;
var _34145__$1 = this;
return (new cljs.core.async.t_cljs$core$async34143(self__.p,self__.ch,meta34144__$1));
}));

(cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34145){
var self__ = this;
var _34145__$1 = this;
return self__.meta34144;
}));

(cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34144","meta34144",1629469954,null)], null);
}));

(cljs.core.async.t_cljs$core$async34143.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34143");

(cljs.core.async.t_cljs$core$async34143.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async34143");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34143.
 */
cljs.core.async.__GT_t_cljs$core$async34143 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34143(p__$1,ch__$1,meta34144){
return (new cljs.core.async.t_cljs$core$async34143(p__$1,ch__$1,meta34144));
});

}

return (new cljs.core.async.t_cljs$core$async34143(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34147 = arguments.length;
switch (G__34147) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32636__auto___34187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_34168){
var state_val_34169 = (state_34168[(1)]);
if((state_val_34169 === (7))){
var inst_34164 = (state_34168[(2)]);
var state_34168__$1 = state_34168;
var statearr_34170_34188 = state_34168__$1;
(statearr_34170_34188[(2)] = inst_34164);

(statearr_34170_34188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34169 === (1))){
var state_34168__$1 = state_34168;
var statearr_34171_34189 = state_34168__$1;
(statearr_34171_34189[(2)] = null);

(statearr_34171_34189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34169 === (4))){
var inst_34150 = (state_34168[(7)]);
var inst_34150__$1 = (state_34168[(2)]);
var inst_34151 = (inst_34150__$1 == null);
var state_34168__$1 = (function (){var statearr_34172 = state_34168;
(statearr_34172[(7)] = inst_34150__$1);

return statearr_34172;
})();
if(cljs.core.truth_(inst_34151)){
var statearr_34173_34190 = state_34168__$1;
(statearr_34173_34190[(1)] = (5));

} else {
var statearr_34174_34191 = state_34168__$1;
(statearr_34174_34191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34169 === (6))){
var inst_34150 = (state_34168[(7)]);
var inst_34155 = p.call(null,inst_34150);
var state_34168__$1 = state_34168;
if(cljs.core.truth_(inst_34155)){
var statearr_34175_34192 = state_34168__$1;
(statearr_34175_34192[(1)] = (8));

} else {
var statearr_34176_34193 = state_34168__$1;
(statearr_34176_34193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34169 === (3))){
var inst_34166 = (state_34168[(2)]);
var state_34168__$1 = state_34168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34168__$1,inst_34166);
} else {
if((state_val_34169 === (2))){
var state_34168__$1 = state_34168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34168__$1,(4),ch);
} else {
if((state_val_34169 === (11))){
var inst_34158 = (state_34168[(2)]);
var state_34168__$1 = state_34168;
var statearr_34177_34194 = state_34168__$1;
(statearr_34177_34194[(2)] = inst_34158);

(statearr_34177_34194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34169 === (9))){
var state_34168__$1 = state_34168;
var statearr_34178_34195 = state_34168__$1;
(statearr_34178_34195[(2)] = null);

(statearr_34178_34195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34169 === (5))){
var inst_34153 = cljs.core.async.close_BANG_.call(null,out);
var state_34168__$1 = state_34168;
var statearr_34179_34196 = state_34168__$1;
(statearr_34179_34196[(2)] = inst_34153);

(statearr_34179_34196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34169 === (10))){
var inst_34161 = (state_34168[(2)]);
var state_34168__$1 = (function (){var statearr_34180 = state_34168;
(statearr_34180[(8)] = inst_34161);

return statearr_34180;
})();
var statearr_34181_34197 = state_34168__$1;
(statearr_34181_34197[(2)] = null);

(statearr_34181_34197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34169 === (8))){
var inst_34150 = (state_34168[(7)]);
var state_34168__$1 = state_34168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34168__$1,(11),out,inst_34150);
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
});
return (function() {
var cljs$core$async$state_machine__32542__auto__ = null;
var cljs$core$async$state_machine__32542__auto____0 = (function (){
var statearr_34182 = [null,null,null,null,null,null,null,null,null];
(statearr_34182[(0)] = cljs$core$async$state_machine__32542__auto__);

(statearr_34182[(1)] = (1));

return statearr_34182;
});
var cljs$core$async$state_machine__32542__auto____1 = (function (state_34168){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_34168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e34183){if((e34183 instanceof Object)){
var ex__32545__auto__ = e34183;
var statearr_34184_34198 = state_34168;
(statearr_34184_34198[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34199 = state_34168;
state_34168 = G__34199;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$state_machine__32542__auto__ = function(state_34168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32542__auto____1.call(this,state_34168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32542__auto____0;
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32542__auto____1;
return cljs$core$async$state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_34185 = f__32637__auto__.call(null);
(statearr_34185[(6)] = c__32636__auto___34187);

return statearr_34185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34201 = arguments.length;
switch (G__34201) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32636__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_34264){
var state_val_34265 = (state_34264[(1)]);
if((state_val_34265 === (7))){
var inst_34260 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34266_34304 = state_34264__$1;
(statearr_34266_34304[(2)] = inst_34260);

(statearr_34266_34304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (20))){
var inst_34230 = (state_34264[(7)]);
var inst_34241 = (state_34264[(2)]);
var inst_34242 = cljs.core.next.call(null,inst_34230);
var inst_34216 = inst_34242;
var inst_34217 = null;
var inst_34218 = (0);
var inst_34219 = (0);
var state_34264__$1 = (function (){var statearr_34267 = state_34264;
(statearr_34267[(8)] = inst_34241);

(statearr_34267[(9)] = inst_34218);

(statearr_34267[(10)] = inst_34216);

(statearr_34267[(11)] = inst_34217);

(statearr_34267[(12)] = inst_34219);

return statearr_34267;
})();
var statearr_34268_34305 = state_34264__$1;
(statearr_34268_34305[(2)] = null);

(statearr_34268_34305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (1))){
var state_34264__$1 = state_34264;
var statearr_34269_34306 = state_34264__$1;
(statearr_34269_34306[(2)] = null);

(statearr_34269_34306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (4))){
var inst_34205 = (state_34264[(13)]);
var inst_34205__$1 = (state_34264[(2)]);
var inst_34206 = (inst_34205__$1 == null);
var state_34264__$1 = (function (){var statearr_34270 = state_34264;
(statearr_34270[(13)] = inst_34205__$1);

return statearr_34270;
})();
if(cljs.core.truth_(inst_34206)){
var statearr_34271_34307 = state_34264__$1;
(statearr_34271_34307[(1)] = (5));

} else {
var statearr_34272_34308 = state_34264__$1;
(statearr_34272_34308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (15))){
var state_34264__$1 = state_34264;
var statearr_34276_34309 = state_34264__$1;
(statearr_34276_34309[(2)] = null);

(statearr_34276_34309[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (21))){
var state_34264__$1 = state_34264;
var statearr_34277_34310 = state_34264__$1;
(statearr_34277_34310[(2)] = null);

(statearr_34277_34310[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (13))){
var inst_34218 = (state_34264[(9)]);
var inst_34216 = (state_34264[(10)]);
var inst_34217 = (state_34264[(11)]);
var inst_34219 = (state_34264[(12)]);
var inst_34226 = (state_34264[(2)]);
var inst_34227 = (inst_34219 + (1));
var tmp34273 = inst_34218;
var tmp34274 = inst_34216;
var tmp34275 = inst_34217;
var inst_34216__$1 = tmp34274;
var inst_34217__$1 = tmp34275;
var inst_34218__$1 = tmp34273;
var inst_34219__$1 = inst_34227;
var state_34264__$1 = (function (){var statearr_34278 = state_34264;
(statearr_34278[(9)] = inst_34218__$1);

(statearr_34278[(10)] = inst_34216__$1);

(statearr_34278[(11)] = inst_34217__$1);

(statearr_34278[(12)] = inst_34219__$1);

(statearr_34278[(14)] = inst_34226);

return statearr_34278;
})();
var statearr_34279_34311 = state_34264__$1;
(statearr_34279_34311[(2)] = null);

(statearr_34279_34311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (22))){
var state_34264__$1 = state_34264;
var statearr_34280_34312 = state_34264__$1;
(statearr_34280_34312[(2)] = null);

(statearr_34280_34312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (6))){
var inst_34205 = (state_34264[(13)]);
var inst_34214 = f.call(null,inst_34205);
var inst_34215 = cljs.core.seq.call(null,inst_34214);
var inst_34216 = inst_34215;
var inst_34217 = null;
var inst_34218 = (0);
var inst_34219 = (0);
var state_34264__$1 = (function (){var statearr_34281 = state_34264;
(statearr_34281[(9)] = inst_34218);

(statearr_34281[(10)] = inst_34216);

(statearr_34281[(11)] = inst_34217);

(statearr_34281[(12)] = inst_34219);

return statearr_34281;
})();
var statearr_34282_34313 = state_34264__$1;
(statearr_34282_34313[(2)] = null);

(statearr_34282_34313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (17))){
var inst_34230 = (state_34264[(7)]);
var inst_34234 = cljs.core.chunk_first.call(null,inst_34230);
var inst_34235 = cljs.core.chunk_rest.call(null,inst_34230);
var inst_34236 = cljs.core.count.call(null,inst_34234);
var inst_34216 = inst_34235;
var inst_34217 = inst_34234;
var inst_34218 = inst_34236;
var inst_34219 = (0);
var state_34264__$1 = (function (){var statearr_34283 = state_34264;
(statearr_34283[(9)] = inst_34218);

(statearr_34283[(10)] = inst_34216);

(statearr_34283[(11)] = inst_34217);

(statearr_34283[(12)] = inst_34219);

return statearr_34283;
})();
var statearr_34284_34314 = state_34264__$1;
(statearr_34284_34314[(2)] = null);

(statearr_34284_34314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (3))){
var inst_34262 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34264__$1,inst_34262);
} else {
if((state_val_34265 === (12))){
var inst_34250 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34285_34315 = state_34264__$1;
(statearr_34285_34315[(2)] = inst_34250);

(statearr_34285_34315[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (2))){
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34264__$1,(4),in$);
} else {
if((state_val_34265 === (23))){
var inst_34258 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34286_34316 = state_34264__$1;
(statearr_34286_34316[(2)] = inst_34258);

(statearr_34286_34316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (19))){
var inst_34245 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34287_34317 = state_34264__$1;
(statearr_34287_34317[(2)] = inst_34245);

(statearr_34287_34317[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (11))){
var inst_34216 = (state_34264[(10)]);
var inst_34230 = (state_34264[(7)]);
var inst_34230__$1 = cljs.core.seq.call(null,inst_34216);
var state_34264__$1 = (function (){var statearr_34288 = state_34264;
(statearr_34288[(7)] = inst_34230__$1);

return statearr_34288;
})();
if(inst_34230__$1){
var statearr_34289_34318 = state_34264__$1;
(statearr_34289_34318[(1)] = (14));

} else {
var statearr_34290_34319 = state_34264__$1;
(statearr_34290_34319[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (9))){
var inst_34252 = (state_34264[(2)]);
var inst_34253 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34264__$1 = (function (){var statearr_34291 = state_34264;
(statearr_34291[(15)] = inst_34252);

return statearr_34291;
})();
if(cljs.core.truth_(inst_34253)){
var statearr_34292_34320 = state_34264__$1;
(statearr_34292_34320[(1)] = (21));

} else {
var statearr_34293_34321 = state_34264__$1;
(statearr_34293_34321[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (5))){
var inst_34208 = cljs.core.async.close_BANG_.call(null,out);
var state_34264__$1 = state_34264;
var statearr_34294_34322 = state_34264__$1;
(statearr_34294_34322[(2)] = inst_34208);

(statearr_34294_34322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (14))){
var inst_34230 = (state_34264[(7)]);
var inst_34232 = cljs.core.chunked_seq_QMARK_.call(null,inst_34230);
var state_34264__$1 = state_34264;
if(inst_34232){
var statearr_34295_34323 = state_34264__$1;
(statearr_34295_34323[(1)] = (17));

} else {
var statearr_34296_34324 = state_34264__$1;
(statearr_34296_34324[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (16))){
var inst_34248 = (state_34264[(2)]);
var state_34264__$1 = state_34264;
var statearr_34297_34325 = state_34264__$1;
(statearr_34297_34325[(2)] = inst_34248);

(statearr_34297_34325[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34265 === (10))){
var inst_34217 = (state_34264[(11)]);
var inst_34219 = (state_34264[(12)]);
var inst_34224 = cljs.core._nth.call(null,inst_34217,inst_34219);
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34264__$1,(13),out,inst_34224);
} else {
if((state_val_34265 === (18))){
var inst_34230 = (state_34264[(7)]);
var inst_34239 = cljs.core.first.call(null,inst_34230);
var state_34264__$1 = state_34264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34264__$1,(20),out,inst_34239);
} else {
if((state_val_34265 === (8))){
var inst_34218 = (state_34264[(9)]);
var inst_34219 = (state_34264[(12)]);
var inst_34221 = (inst_34219 < inst_34218);
var inst_34222 = inst_34221;
var state_34264__$1 = state_34264;
if(cljs.core.truth_(inst_34222)){
var statearr_34298_34326 = state_34264__$1;
(statearr_34298_34326[(1)] = (10));

} else {
var statearr_34299_34327 = state_34264__$1;
(statearr_34299_34327[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32542__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32542__auto____0 = (function (){
var statearr_34300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34300[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32542__auto__);

(statearr_34300[(1)] = (1));

return statearr_34300;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32542__auto____1 = (function (state_34264){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_34264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e34301){if((e34301 instanceof Object)){
var ex__32545__auto__ = e34301;
var statearr_34302_34328 = state_34264;
(statearr_34302_34328[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34329 = state_34264;
state_34264 = G__34329;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32542__auto__ = function(state_34264){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32542__auto____1.call(this,state_34264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32542__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32542__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_34303 = f__32637__auto__.call(null);
(statearr_34303[(6)] = c__32636__auto__);

return statearr_34303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));

return c__32636__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34331 = arguments.length;
switch (G__34331) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34334 = arguments.length;
switch (G__34334) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34337 = arguments.length;
switch (G__34337) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32636__auto___34384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_34361){
var state_val_34362 = (state_34361[(1)]);
if((state_val_34362 === (7))){
var inst_34356 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34363_34385 = state_34361__$1;
(statearr_34363_34385[(2)] = inst_34356);

(statearr_34363_34385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (1))){
var inst_34338 = null;
var state_34361__$1 = (function (){var statearr_34364 = state_34361;
(statearr_34364[(7)] = inst_34338);

return statearr_34364;
})();
var statearr_34365_34386 = state_34361__$1;
(statearr_34365_34386[(2)] = null);

(statearr_34365_34386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (4))){
var inst_34341 = (state_34361[(8)]);
var inst_34341__$1 = (state_34361[(2)]);
var inst_34342 = (inst_34341__$1 == null);
var inst_34343 = cljs.core.not.call(null,inst_34342);
var state_34361__$1 = (function (){var statearr_34366 = state_34361;
(statearr_34366[(8)] = inst_34341__$1);

return statearr_34366;
})();
if(inst_34343){
var statearr_34367_34387 = state_34361__$1;
(statearr_34367_34387[(1)] = (5));

} else {
var statearr_34368_34388 = state_34361__$1;
(statearr_34368_34388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (6))){
var state_34361__$1 = state_34361;
var statearr_34369_34389 = state_34361__$1;
(statearr_34369_34389[(2)] = null);

(statearr_34369_34389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (3))){
var inst_34358 = (state_34361[(2)]);
var inst_34359 = cljs.core.async.close_BANG_.call(null,out);
var state_34361__$1 = (function (){var statearr_34370 = state_34361;
(statearr_34370[(9)] = inst_34358);

return statearr_34370;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34361__$1,inst_34359);
} else {
if((state_val_34362 === (2))){
var state_34361__$1 = state_34361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34361__$1,(4),ch);
} else {
if((state_val_34362 === (11))){
var inst_34341 = (state_34361[(8)]);
var inst_34350 = (state_34361[(2)]);
var inst_34338 = inst_34341;
var state_34361__$1 = (function (){var statearr_34371 = state_34361;
(statearr_34371[(7)] = inst_34338);

(statearr_34371[(10)] = inst_34350);

return statearr_34371;
})();
var statearr_34372_34390 = state_34361__$1;
(statearr_34372_34390[(2)] = null);

(statearr_34372_34390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (9))){
var inst_34341 = (state_34361[(8)]);
var state_34361__$1 = state_34361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34361__$1,(11),out,inst_34341);
} else {
if((state_val_34362 === (5))){
var inst_34341 = (state_34361[(8)]);
var inst_34338 = (state_34361[(7)]);
var inst_34345 = cljs.core._EQ_.call(null,inst_34341,inst_34338);
var state_34361__$1 = state_34361;
if(inst_34345){
var statearr_34374_34391 = state_34361__$1;
(statearr_34374_34391[(1)] = (8));

} else {
var statearr_34375_34392 = state_34361__$1;
(statearr_34375_34392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (10))){
var inst_34353 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34376_34393 = state_34361__$1;
(statearr_34376_34393[(2)] = inst_34353);

(statearr_34376_34393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (8))){
var inst_34338 = (state_34361[(7)]);
var tmp34373 = inst_34338;
var inst_34338__$1 = tmp34373;
var state_34361__$1 = (function (){var statearr_34377 = state_34361;
(statearr_34377[(7)] = inst_34338__$1);

return statearr_34377;
})();
var statearr_34378_34394 = state_34361__$1;
(statearr_34378_34394[(2)] = null);

(statearr_34378_34394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__32542__auto__ = null;
var cljs$core$async$state_machine__32542__auto____0 = (function (){
var statearr_34379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34379[(0)] = cljs$core$async$state_machine__32542__auto__);

(statearr_34379[(1)] = (1));

return statearr_34379;
});
var cljs$core$async$state_machine__32542__auto____1 = (function (state_34361){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_34361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e34380){if((e34380 instanceof Object)){
var ex__32545__auto__ = e34380;
var statearr_34381_34395 = state_34361;
(statearr_34381_34395[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34396 = state_34361;
state_34361 = G__34396;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$state_machine__32542__auto__ = function(state_34361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32542__auto____1.call(this,state_34361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32542__auto____0;
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32542__auto____1;
return cljs$core$async$state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_34382 = f__32637__auto__.call(null);
(statearr_34382[(6)] = c__32636__auto___34384);

return statearr_34382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34398 = arguments.length;
switch (G__34398) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32636__auto___34464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_34436){
var state_val_34437 = (state_34436[(1)]);
if((state_val_34437 === (7))){
var inst_34432 = (state_34436[(2)]);
var state_34436__$1 = state_34436;
var statearr_34438_34465 = state_34436__$1;
(statearr_34438_34465[(2)] = inst_34432);

(statearr_34438_34465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (1))){
var inst_34399 = (new Array(n));
var inst_34400 = inst_34399;
var inst_34401 = (0);
var state_34436__$1 = (function (){var statearr_34439 = state_34436;
(statearr_34439[(7)] = inst_34400);

(statearr_34439[(8)] = inst_34401);

return statearr_34439;
})();
var statearr_34440_34466 = state_34436__$1;
(statearr_34440_34466[(2)] = null);

(statearr_34440_34466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (4))){
var inst_34404 = (state_34436[(9)]);
var inst_34404__$1 = (state_34436[(2)]);
var inst_34405 = (inst_34404__$1 == null);
var inst_34406 = cljs.core.not.call(null,inst_34405);
var state_34436__$1 = (function (){var statearr_34441 = state_34436;
(statearr_34441[(9)] = inst_34404__$1);

return statearr_34441;
})();
if(inst_34406){
var statearr_34442_34467 = state_34436__$1;
(statearr_34442_34467[(1)] = (5));

} else {
var statearr_34443_34468 = state_34436__$1;
(statearr_34443_34468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (15))){
var inst_34426 = (state_34436[(2)]);
var state_34436__$1 = state_34436;
var statearr_34444_34469 = state_34436__$1;
(statearr_34444_34469[(2)] = inst_34426);

(statearr_34444_34469[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (13))){
var state_34436__$1 = state_34436;
var statearr_34445_34470 = state_34436__$1;
(statearr_34445_34470[(2)] = null);

(statearr_34445_34470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (6))){
var inst_34401 = (state_34436[(8)]);
var inst_34422 = (inst_34401 > (0));
var state_34436__$1 = state_34436;
if(cljs.core.truth_(inst_34422)){
var statearr_34446_34471 = state_34436__$1;
(statearr_34446_34471[(1)] = (12));

} else {
var statearr_34447_34472 = state_34436__$1;
(statearr_34447_34472[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (3))){
var inst_34434 = (state_34436[(2)]);
var state_34436__$1 = state_34436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34436__$1,inst_34434);
} else {
if((state_val_34437 === (12))){
var inst_34400 = (state_34436[(7)]);
var inst_34424 = cljs.core.vec.call(null,inst_34400);
var state_34436__$1 = state_34436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34436__$1,(15),out,inst_34424);
} else {
if((state_val_34437 === (2))){
var state_34436__$1 = state_34436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34436__$1,(4),ch);
} else {
if((state_val_34437 === (11))){
var inst_34416 = (state_34436[(2)]);
var inst_34417 = (new Array(n));
var inst_34400 = inst_34417;
var inst_34401 = (0);
var state_34436__$1 = (function (){var statearr_34448 = state_34436;
(statearr_34448[(7)] = inst_34400);

(statearr_34448[(8)] = inst_34401);

(statearr_34448[(10)] = inst_34416);

return statearr_34448;
})();
var statearr_34449_34473 = state_34436__$1;
(statearr_34449_34473[(2)] = null);

(statearr_34449_34473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (9))){
var inst_34400 = (state_34436[(7)]);
var inst_34414 = cljs.core.vec.call(null,inst_34400);
var state_34436__$1 = state_34436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34436__$1,(11),out,inst_34414);
} else {
if((state_val_34437 === (5))){
var inst_34400 = (state_34436[(7)]);
var inst_34409 = (state_34436[(11)]);
var inst_34401 = (state_34436[(8)]);
var inst_34404 = (state_34436[(9)]);
var inst_34408 = (inst_34400[inst_34401] = inst_34404);
var inst_34409__$1 = (inst_34401 + (1));
var inst_34410 = (inst_34409__$1 < n);
var state_34436__$1 = (function (){var statearr_34450 = state_34436;
(statearr_34450[(11)] = inst_34409__$1);

(statearr_34450[(12)] = inst_34408);

return statearr_34450;
})();
if(cljs.core.truth_(inst_34410)){
var statearr_34451_34474 = state_34436__$1;
(statearr_34451_34474[(1)] = (8));

} else {
var statearr_34452_34475 = state_34436__$1;
(statearr_34452_34475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (14))){
var inst_34429 = (state_34436[(2)]);
var inst_34430 = cljs.core.async.close_BANG_.call(null,out);
var state_34436__$1 = (function (){var statearr_34454 = state_34436;
(statearr_34454[(13)] = inst_34429);

return statearr_34454;
})();
var statearr_34455_34476 = state_34436__$1;
(statearr_34455_34476[(2)] = inst_34430);

(statearr_34455_34476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (10))){
var inst_34420 = (state_34436[(2)]);
var state_34436__$1 = state_34436;
var statearr_34456_34477 = state_34436__$1;
(statearr_34456_34477[(2)] = inst_34420);

(statearr_34456_34477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (8))){
var inst_34400 = (state_34436[(7)]);
var inst_34409 = (state_34436[(11)]);
var tmp34453 = inst_34400;
var inst_34400__$1 = tmp34453;
var inst_34401 = inst_34409;
var state_34436__$1 = (function (){var statearr_34457 = state_34436;
(statearr_34457[(7)] = inst_34400__$1);

(statearr_34457[(8)] = inst_34401);

return statearr_34457;
})();
var statearr_34458_34478 = state_34436__$1;
(statearr_34458_34478[(2)] = null);

(statearr_34458_34478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32542__auto__ = null;
var cljs$core$async$state_machine__32542__auto____0 = (function (){
var statearr_34459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34459[(0)] = cljs$core$async$state_machine__32542__auto__);

(statearr_34459[(1)] = (1));

return statearr_34459;
});
var cljs$core$async$state_machine__32542__auto____1 = (function (state_34436){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_34436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e34460){if((e34460 instanceof Object)){
var ex__32545__auto__ = e34460;
var statearr_34461_34479 = state_34436;
(statearr_34461_34479[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34480 = state_34436;
state_34436 = G__34480;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$state_machine__32542__auto__ = function(state_34436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32542__auto____1.call(this,state_34436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32542__auto____0;
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32542__auto____1;
return cljs$core$async$state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_34462 = f__32637__auto__.call(null);
(statearr_34462[(6)] = c__32636__auto___34464);

return statearr_34462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34482 = arguments.length;
switch (G__34482) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32636__auto___34552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_34524){
var state_val_34525 = (state_34524[(1)]);
if((state_val_34525 === (7))){
var inst_34520 = (state_34524[(2)]);
var state_34524__$1 = state_34524;
var statearr_34526_34553 = state_34524__$1;
(statearr_34526_34553[(2)] = inst_34520);

(statearr_34526_34553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (1))){
var inst_34483 = [];
var inst_34484 = inst_34483;
var inst_34485 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34524__$1 = (function (){var statearr_34527 = state_34524;
(statearr_34527[(7)] = inst_34485);

(statearr_34527[(8)] = inst_34484);

return statearr_34527;
})();
var statearr_34528_34554 = state_34524__$1;
(statearr_34528_34554[(2)] = null);

(statearr_34528_34554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (4))){
var inst_34488 = (state_34524[(9)]);
var inst_34488__$1 = (state_34524[(2)]);
var inst_34489 = (inst_34488__$1 == null);
var inst_34490 = cljs.core.not.call(null,inst_34489);
var state_34524__$1 = (function (){var statearr_34529 = state_34524;
(statearr_34529[(9)] = inst_34488__$1);

return statearr_34529;
})();
if(inst_34490){
var statearr_34530_34555 = state_34524__$1;
(statearr_34530_34555[(1)] = (5));

} else {
var statearr_34531_34556 = state_34524__$1;
(statearr_34531_34556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (15))){
var inst_34514 = (state_34524[(2)]);
var state_34524__$1 = state_34524;
var statearr_34532_34557 = state_34524__$1;
(statearr_34532_34557[(2)] = inst_34514);

(statearr_34532_34557[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (13))){
var state_34524__$1 = state_34524;
var statearr_34533_34558 = state_34524__$1;
(statearr_34533_34558[(2)] = null);

(statearr_34533_34558[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (6))){
var inst_34484 = (state_34524[(8)]);
var inst_34509 = inst_34484.length;
var inst_34510 = (inst_34509 > (0));
var state_34524__$1 = state_34524;
if(cljs.core.truth_(inst_34510)){
var statearr_34534_34559 = state_34524__$1;
(statearr_34534_34559[(1)] = (12));

} else {
var statearr_34535_34560 = state_34524__$1;
(statearr_34535_34560[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (3))){
var inst_34522 = (state_34524[(2)]);
var state_34524__$1 = state_34524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34524__$1,inst_34522);
} else {
if((state_val_34525 === (12))){
var inst_34484 = (state_34524[(8)]);
var inst_34512 = cljs.core.vec.call(null,inst_34484);
var state_34524__$1 = state_34524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34524__$1,(15),out,inst_34512);
} else {
if((state_val_34525 === (2))){
var state_34524__$1 = state_34524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34524__$1,(4),ch);
} else {
if((state_val_34525 === (11))){
var inst_34488 = (state_34524[(9)]);
var inst_34492 = (state_34524[(10)]);
var inst_34502 = (state_34524[(2)]);
var inst_34503 = [];
var inst_34504 = inst_34503.push(inst_34488);
var inst_34484 = inst_34503;
var inst_34485 = inst_34492;
var state_34524__$1 = (function (){var statearr_34536 = state_34524;
(statearr_34536[(7)] = inst_34485);

(statearr_34536[(8)] = inst_34484);

(statearr_34536[(11)] = inst_34504);

(statearr_34536[(12)] = inst_34502);

return statearr_34536;
})();
var statearr_34537_34561 = state_34524__$1;
(statearr_34537_34561[(2)] = null);

(statearr_34537_34561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (9))){
var inst_34484 = (state_34524[(8)]);
var inst_34500 = cljs.core.vec.call(null,inst_34484);
var state_34524__$1 = state_34524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34524__$1,(11),out,inst_34500);
} else {
if((state_val_34525 === (5))){
var inst_34485 = (state_34524[(7)]);
var inst_34488 = (state_34524[(9)]);
var inst_34492 = (state_34524[(10)]);
var inst_34492__$1 = f.call(null,inst_34488);
var inst_34493 = cljs.core._EQ_.call(null,inst_34492__$1,inst_34485);
var inst_34494 = cljs.core.keyword_identical_QMARK_.call(null,inst_34485,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34495 = ((inst_34493) || (inst_34494));
var state_34524__$1 = (function (){var statearr_34538 = state_34524;
(statearr_34538[(10)] = inst_34492__$1);

return statearr_34538;
})();
if(cljs.core.truth_(inst_34495)){
var statearr_34539_34562 = state_34524__$1;
(statearr_34539_34562[(1)] = (8));

} else {
var statearr_34540_34563 = state_34524__$1;
(statearr_34540_34563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (14))){
var inst_34517 = (state_34524[(2)]);
var inst_34518 = cljs.core.async.close_BANG_.call(null,out);
var state_34524__$1 = (function (){var statearr_34542 = state_34524;
(statearr_34542[(13)] = inst_34517);

return statearr_34542;
})();
var statearr_34543_34564 = state_34524__$1;
(statearr_34543_34564[(2)] = inst_34518);

(statearr_34543_34564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (10))){
var inst_34507 = (state_34524[(2)]);
var state_34524__$1 = state_34524;
var statearr_34544_34565 = state_34524__$1;
(statearr_34544_34565[(2)] = inst_34507);

(statearr_34544_34565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34525 === (8))){
var inst_34488 = (state_34524[(9)]);
var inst_34484 = (state_34524[(8)]);
var inst_34492 = (state_34524[(10)]);
var inst_34497 = inst_34484.push(inst_34488);
var tmp34541 = inst_34484;
var inst_34484__$1 = tmp34541;
var inst_34485 = inst_34492;
var state_34524__$1 = (function (){var statearr_34545 = state_34524;
(statearr_34545[(7)] = inst_34485);

(statearr_34545[(14)] = inst_34497);

(statearr_34545[(8)] = inst_34484__$1);

return statearr_34545;
})();
var statearr_34546_34566 = state_34524__$1;
(statearr_34546_34566[(2)] = null);

(statearr_34546_34566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32542__auto__ = null;
var cljs$core$async$state_machine__32542__auto____0 = (function (){
var statearr_34547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34547[(0)] = cljs$core$async$state_machine__32542__auto__);

(statearr_34547[(1)] = (1));

return statearr_34547;
});
var cljs$core$async$state_machine__32542__auto____1 = (function (state_34524){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_34524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e34548){if((e34548 instanceof Object)){
var ex__32545__auto__ = e34548;
var statearr_34549_34567 = state_34524;
(statearr_34549_34567[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34568 = state_34524;
state_34524 = G__34568;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
cljs$core$async$state_machine__32542__auto__ = function(state_34524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32542__auto____1.call(this,state_34524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32542__auto____0;
cljs$core$async$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32542__auto____1;
return cljs$core$async$state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_34550 = f__32637__auto__.call(null);
(statearr_34550[(6)] = c__32636__auto___34552);

return statearr_34550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1609481680925
