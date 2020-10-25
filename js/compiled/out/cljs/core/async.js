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
var G__32191 = arguments.length;
switch (G__32191) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32192 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32192 = (function (f,blockable,meta32193){
this.f = f;
this.blockable = blockable;
this.meta32193 = meta32193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32194,meta32193__$1){
var self__ = this;
var _32194__$1 = this;
return (new cljs.core.async.t_cljs$core$async32192(self__.f,self__.blockable,meta32193__$1));
}));

(cljs.core.async.t_cljs$core$async32192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32194){
var self__ = this;
var _32194__$1 = this;
return self__.meta32193;
}));

(cljs.core.async.t_cljs$core$async32192.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32192.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32192.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32192.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32193","meta32193",66055078,null)], null);
}));

(cljs.core.async.t_cljs$core$async32192.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32192");

(cljs.core.async.t_cljs$core$async32192.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async32192");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32192.
 */
cljs.core.async.__GT_t_cljs$core$async32192 = (function cljs$core$async$__GT_t_cljs$core$async32192(f__$1,blockable__$1,meta32193){
return (new cljs.core.async.t_cljs$core$async32192(f__$1,blockable__$1,meta32193));
});

}

return (new cljs.core.async.t_cljs$core$async32192(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32198 = arguments.length;
switch (G__32198) {
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
var G__32201 = arguments.length;
switch (G__32201) {
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
var G__32204 = arguments.length;
switch (G__32204) {
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
var val_32206 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32206);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_32206);
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
var G__32208 = arguments.length;
switch (G__32208) {
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
var n__4613__auto___32210 = n;
var x_32211 = (0);
while(true){
if((x_32211 < n__4613__auto___32210)){
(a[x_32211] = x_32211);

var G__32212 = (x_32211 + (1));
x_32211 = G__32212;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32213 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32213 = (function (flag,meta32214){
this.flag = flag;
this.meta32214 = meta32214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32215,meta32214__$1){
var self__ = this;
var _32215__$1 = this;
return (new cljs.core.async.t_cljs$core$async32213(self__.flag,meta32214__$1));
}));

(cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32215){
var self__ = this;
var _32215__$1 = this;
return self__.meta32214;
}));

(cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32214","meta32214",1908496581,null)], null);
}));

(cljs.core.async.t_cljs$core$async32213.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32213");

(cljs.core.async.t_cljs$core$async32213.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async32213");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32213.
 */
cljs.core.async.__GT_t_cljs$core$async32213 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32213(flag__$1,meta32214){
return (new cljs.core.async.t_cljs$core$async32213(flag__$1,meta32214));
});

}

return (new cljs.core.async.t_cljs$core$async32213(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32216 = (function (flag,cb,meta32217){
this.flag = flag;
this.cb = cb;
this.meta32217 = meta32217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32218,meta32217__$1){
var self__ = this;
var _32218__$1 = this;
return (new cljs.core.async.t_cljs$core$async32216(self__.flag,self__.cb,meta32217__$1));
}));

(cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32218){
var self__ = this;
var _32218__$1 = this;
return self__.meta32217;
}));

(cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32217","meta32217",-277366093,null)], null);
}));

(cljs.core.async.t_cljs$core$async32216.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32216");

(cljs.core.async.t_cljs$core$async32216.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async32216");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32216.
 */
cljs.core.async.__GT_t_cljs$core$async32216 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32216(flag__$1,cb__$1,meta32217){
return (new cljs.core.async.t_cljs$core$async32216(flag__$1,cb__$1,meta32217));
});

}

return (new cljs.core.async.t_cljs$core$async32216(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32219_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32219_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32220_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32220_SHARP_,port], null));
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
var G__32221 = (i + (1));
i = G__32221;
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
var len__4736__auto___32227 = arguments.length;
var i__4737__auto___32228 = (0);
while(true){
if((i__4737__auto___32228 < len__4736__auto___32227)){
args__4742__auto__.push((arguments[i__4737__auto___32228]));

var G__32229 = (i__4737__auto___32228 + (1));
i__4737__auto___32228 = G__32229;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32224){
var map__32225 = p__32224;
var map__32225__$1 = (((((!((map__32225 == null))))?(((((map__32225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32225):map__32225);
var opts = map__32225__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32222){
var G__32223 = cljs.core.first.call(null,seq32222);
var seq32222__$1 = cljs.core.next.call(null,seq32222);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32223,seq32222__$1);
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
var G__32231 = arguments.length;
switch (G__32231) {
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
var c__32131__auto___32277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_32255){
var state_val_32256 = (state_32255[(1)]);
if((state_val_32256 === (7))){
var inst_32251 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
var statearr_32257_32278 = state_32255__$1;
(statearr_32257_32278[(2)] = inst_32251);

(statearr_32257_32278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (1))){
var state_32255__$1 = state_32255;
var statearr_32258_32279 = state_32255__$1;
(statearr_32258_32279[(2)] = null);

(statearr_32258_32279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (4))){
var inst_32234 = (state_32255[(7)]);
var inst_32234__$1 = (state_32255[(2)]);
var inst_32235 = (inst_32234__$1 == null);
var state_32255__$1 = (function (){var statearr_32259 = state_32255;
(statearr_32259[(7)] = inst_32234__$1);

return statearr_32259;
})();
if(cljs.core.truth_(inst_32235)){
var statearr_32260_32280 = state_32255__$1;
(statearr_32260_32280[(1)] = (5));

} else {
var statearr_32261_32281 = state_32255__$1;
(statearr_32261_32281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (13))){
var state_32255__$1 = state_32255;
var statearr_32262_32282 = state_32255__$1;
(statearr_32262_32282[(2)] = null);

(statearr_32262_32282[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (6))){
var inst_32234 = (state_32255[(7)]);
var state_32255__$1 = state_32255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32255__$1,(11),to,inst_32234);
} else {
if((state_val_32256 === (3))){
var inst_32253 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32255__$1,inst_32253);
} else {
if((state_val_32256 === (12))){
var state_32255__$1 = state_32255;
var statearr_32263_32283 = state_32255__$1;
(statearr_32263_32283[(2)] = null);

(statearr_32263_32283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (2))){
var state_32255__$1 = state_32255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32255__$1,(4),from);
} else {
if((state_val_32256 === (11))){
var inst_32244 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
if(cljs.core.truth_(inst_32244)){
var statearr_32264_32284 = state_32255__$1;
(statearr_32264_32284[(1)] = (12));

} else {
var statearr_32265_32285 = state_32255__$1;
(statearr_32265_32285[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (9))){
var state_32255__$1 = state_32255;
var statearr_32266_32286 = state_32255__$1;
(statearr_32266_32286[(2)] = null);

(statearr_32266_32286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (5))){
var state_32255__$1 = state_32255;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32267_32287 = state_32255__$1;
(statearr_32267_32287[(1)] = (8));

} else {
var statearr_32268_32288 = state_32255__$1;
(statearr_32268_32288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (14))){
var inst_32249 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
var statearr_32269_32289 = state_32255__$1;
(statearr_32269_32289[(2)] = inst_32249);

(statearr_32269_32289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (10))){
var inst_32241 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
var statearr_32270_32290 = state_32255__$1;
(statearr_32270_32290[(2)] = inst_32241);

(statearr_32270_32290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (8))){
var inst_32238 = cljs.core.async.close_BANG_.call(null,to);
var state_32255__$1 = state_32255;
var statearr_32271_32291 = state_32255__$1;
(statearr_32271_32291[(2)] = inst_32238);

(statearr_32271_32291[(1)] = (10));


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
var cljs$core$async$state_machine__32037__auto__ = null;
var cljs$core$async$state_machine__32037__auto____0 = (function (){
var statearr_32272 = [null,null,null,null,null,null,null,null];
(statearr_32272[(0)] = cljs$core$async$state_machine__32037__auto__);

(statearr_32272[(1)] = (1));

return statearr_32272;
});
var cljs$core$async$state_machine__32037__auto____1 = (function (state_32255){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_32255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e32273){if((e32273 instanceof Object)){
var ex__32040__auto__ = e32273;
var statearr_32274_32292 = state_32255;
(statearr_32274_32292[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32293 = state_32255;
state_32255 = G__32293;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$state_machine__32037__auto__ = function(state_32255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32037__auto____1.call(this,state_32255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32037__auto____0;
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32037__auto____1;
return cljs$core$async$state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_32275 = f__32132__auto__.call(null);
(statearr_32275[(6)] = c__32131__auto___32277);

return statearr_32275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
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
var process = (function (p__32294){
var vec__32295 = p__32294;
var v = cljs.core.nth.call(null,vec__32295,(0),null);
var p = cljs.core.nth.call(null,vec__32295,(1),null);
var job = vec__32295;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32131__auto___32466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_32302){
var state_val_32303 = (state_32302[(1)]);
if((state_val_32303 === (1))){
var state_32302__$1 = state_32302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32302__$1,(2),res,v);
} else {
if((state_val_32303 === (2))){
var inst_32299 = (state_32302[(2)]);
var inst_32300 = cljs.core.async.close_BANG_.call(null,res);
var state_32302__$1 = (function (){var statearr_32304 = state_32302;
(statearr_32304[(7)] = inst_32299);

return statearr_32304;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32302__$1,inst_32300);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____0 = (function (){
var statearr_32305 = [null,null,null,null,null,null,null,null];
(statearr_32305[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__);

(statearr_32305[(1)] = (1));

return statearr_32305;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____1 = (function (state_32302){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_32302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e32306){if((e32306 instanceof Object)){
var ex__32040__auto__ = e32306;
var statearr_32307_32467 = state_32302;
(statearr_32307_32467[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32468 = state_32302;
state_32302 = G__32468;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__ = function(state_32302){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____1.call(this,state_32302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_32308 = f__32132__auto__.call(null);
(statearr_32308[(6)] = c__32131__auto___32466);

return statearr_32308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__32309){
var vec__32310 = p__32309;
var v = cljs.core.nth.call(null,vec__32310,(0),null);
var p = cljs.core.nth.call(null,vec__32310,(1),null);
var job = vec__32310;
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
var n__4613__auto___32469 = n;
var __32470 = (0);
while(true){
if((__32470 < n__4613__auto___32469)){
var G__32313_32471 = type;
var G__32313_32472__$1 = (((G__32313_32471 instanceof cljs.core.Keyword))?G__32313_32471.fqn:null);
switch (G__32313_32472__$1) {
case "compute":
var c__32131__auto___32474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32470,c__32131__auto___32474,G__32313_32471,G__32313_32472__$1,n__4613__auto___32469,jobs,results,process,async){
return (function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = ((function (__32470,c__32131__auto___32474,G__32313_32471,G__32313_32472__$1,n__4613__auto___32469,jobs,results,process,async){
return (function (state_32326){
var state_val_32327 = (state_32326[(1)]);
if((state_val_32327 === (1))){
var state_32326__$1 = state_32326;
var statearr_32328_32475 = state_32326__$1;
(statearr_32328_32475[(2)] = null);

(statearr_32328_32475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (2))){
var state_32326__$1 = state_32326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32326__$1,(4),jobs);
} else {
if((state_val_32327 === (3))){
var inst_32324 = (state_32326[(2)]);
var state_32326__$1 = state_32326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32326__$1,inst_32324);
} else {
if((state_val_32327 === (4))){
var inst_32316 = (state_32326[(2)]);
var inst_32317 = process.call(null,inst_32316);
var state_32326__$1 = state_32326;
if(cljs.core.truth_(inst_32317)){
var statearr_32329_32476 = state_32326__$1;
(statearr_32329_32476[(1)] = (5));

} else {
var statearr_32330_32477 = state_32326__$1;
(statearr_32330_32477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (5))){
var state_32326__$1 = state_32326;
var statearr_32331_32478 = state_32326__$1;
(statearr_32331_32478[(2)] = null);

(statearr_32331_32478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (6))){
var state_32326__$1 = state_32326;
var statearr_32332_32479 = state_32326__$1;
(statearr_32332_32479[(2)] = null);

(statearr_32332_32479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (7))){
var inst_32322 = (state_32326[(2)]);
var state_32326__$1 = state_32326;
var statearr_32333_32480 = state_32326__$1;
(statearr_32333_32480[(2)] = inst_32322);

(statearr_32333_32480[(1)] = (3));


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
});})(__32470,c__32131__auto___32474,G__32313_32471,G__32313_32472__$1,n__4613__auto___32469,jobs,results,process,async))
;
return ((function (__32470,switch__32036__auto__,c__32131__auto___32474,G__32313_32471,G__32313_32472__$1,n__4613__auto___32469,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____0 = (function (){
var statearr_32334 = [null,null,null,null,null,null,null];
(statearr_32334[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__);

(statearr_32334[(1)] = (1));

return statearr_32334;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____1 = (function (state_32326){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_32326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e32335){if((e32335 instanceof Object)){
var ex__32040__auto__ = e32335;
var statearr_32336_32481 = state_32326;
(statearr_32336_32481[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32482 = state_32326;
state_32326 = G__32482;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__ = function(state_32326){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____1.call(this,state_32326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__;
})()
;})(__32470,switch__32036__auto__,c__32131__auto___32474,G__32313_32471,G__32313_32472__$1,n__4613__auto___32469,jobs,results,process,async))
})();
var state__32133__auto__ = (function (){var statearr_32337 = f__32132__auto__.call(null);
(statearr_32337[(6)] = c__32131__auto___32474);

return statearr_32337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
});})(__32470,c__32131__auto___32474,G__32313_32471,G__32313_32472__$1,n__4613__auto___32469,jobs,results,process,async))
);


break;
case "async":
var c__32131__auto___32483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32470,c__32131__auto___32483,G__32313_32471,G__32313_32472__$1,n__4613__auto___32469,jobs,results,process,async){
return (function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = ((function (__32470,c__32131__auto___32483,G__32313_32471,G__32313_32472__$1,n__4613__auto___32469,jobs,results,process,async){
return (function (state_32350){
var state_val_32351 = (state_32350[(1)]);
if((state_val_32351 === (1))){
var state_32350__$1 = state_32350;
var statearr_32352_32484 = state_32350__$1;
(statearr_32352_32484[(2)] = null);

(statearr_32352_32484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (2))){
var state_32350__$1 = state_32350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32350__$1,(4),jobs);
} else {
if((state_val_32351 === (3))){
var inst_32348 = (state_32350[(2)]);
var state_32350__$1 = state_32350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32350__$1,inst_32348);
} else {
if((state_val_32351 === (4))){
var inst_32340 = (state_32350[(2)]);
var inst_32341 = async.call(null,inst_32340);
var state_32350__$1 = state_32350;
if(cljs.core.truth_(inst_32341)){
var statearr_32353_32485 = state_32350__$1;
(statearr_32353_32485[(1)] = (5));

} else {
var statearr_32354_32486 = state_32350__$1;
(statearr_32354_32486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (5))){
var state_32350__$1 = state_32350;
var statearr_32355_32487 = state_32350__$1;
(statearr_32355_32487[(2)] = null);

(statearr_32355_32487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (6))){
var state_32350__$1 = state_32350;
var statearr_32356_32488 = state_32350__$1;
(statearr_32356_32488[(2)] = null);

(statearr_32356_32488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (7))){
var inst_32346 = (state_32350[(2)]);
var state_32350__$1 = state_32350;
var statearr_32357_32489 = state_32350__$1;
(statearr_32357_32489[(2)] = inst_32346);

(statearr_32357_32489[(1)] = (3));


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
});})(__32470,c__32131__auto___32483,G__32313_32471,G__32313_32472__$1,n__4613__auto___32469,jobs,results,process,async))
;
return ((function (__32470,switch__32036__auto__,c__32131__auto___32483,G__32313_32471,G__32313_32472__$1,n__4613__auto___32469,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____0 = (function (){
var statearr_32358 = [null,null,null,null,null,null,null];
(statearr_32358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__);

(statearr_32358[(1)] = (1));

return statearr_32358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____1 = (function (state_32350){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_32350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e32359){if((e32359 instanceof Object)){
var ex__32040__auto__ = e32359;
var statearr_32360_32490 = state_32350;
(statearr_32360_32490[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32491 = state_32350;
state_32350 = G__32491;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__ = function(state_32350){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____1.call(this,state_32350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__;
})()
;})(__32470,switch__32036__auto__,c__32131__auto___32483,G__32313_32471,G__32313_32472__$1,n__4613__auto___32469,jobs,results,process,async))
})();
var state__32133__auto__ = (function (){var statearr_32361 = f__32132__auto__.call(null);
(statearr_32361[(6)] = c__32131__auto___32483);

return statearr_32361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
});})(__32470,c__32131__auto___32483,G__32313_32471,G__32313_32472__$1,n__4613__auto___32469,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32313_32472__$1)].join('')));

}

var G__32492 = (__32470 + (1));
__32470 = G__32492;
continue;
} else {
}
break;
}

var c__32131__auto___32493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_32383){
var state_val_32384 = (state_32383[(1)]);
if((state_val_32384 === (7))){
var inst_32379 = (state_32383[(2)]);
var state_32383__$1 = state_32383;
var statearr_32385_32494 = state_32383__$1;
(statearr_32385_32494[(2)] = inst_32379);

(statearr_32385_32494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (1))){
var state_32383__$1 = state_32383;
var statearr_32386_32495 = state_32383__$1;
(statearr_32386_32495[(2)] = null);

(statearr_32386_32495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (4))){
var inst_32364 = (state_32383[(7)]);
var inst_32364__$1 = (state_32383[(2)]);
var inst_32365 = (inst_32364__$1 == null);
var state_32383__$1 = (function (){var statearr_32387 = state_32383;
(statearr_32387[(7)] = inst_32364__$1);

return statearr_32387;
})();
if(cljs.core.truth_(inst_32365)){
var statearr_32388_32496 = state_32383__$1;
(statearr_32388_32496[(1)] = (5));

} else {
var statearr_32389_32497 = state_32383__$1;
(statearr_32389_32497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (6))){
var inst_32369 = (state_32383[(8)]);
var inst_32364 = (state_32383[(7)]);
var inst_32369__$1 = cljs.core.async.chan.call(null,(1));
var inst_32370 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32371 = [inst_32364,inst_32369__$1];
var inst_32372 = (new cljs.core.PersistentVector(null,2,(5),inst_32370,inst_32371,null));
var state_32383__$1 = (function (){var statearr_32390 = state_32383;
(statearr_32390[(8)] = inst_32369__$1);

return statearr_32390;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32383__$1,(8),jobs,inst_32372);
} else {
if((state_val_32384 === (3))){
var inst_32381 = (state_32383[(2)]);
var state_32383__$1 = state_32383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32383__$1,inst_32381);
} else {
if((state_val_32384 === (2))){
var state_32383__$1 = state_32383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32383__$1,(4),from);
} else {
if((state_val_32384 === (9))){
var inst_32376 = (state_32383[(2)]);
var state_32383__$1 = (function (){var statearr_32391 = state_32383;
(statearr_32391[(9)] = inst_32376);

return statearr_32391;
})();
var statearr_32392_32498 = state_32383__$1;
(statearr_32392_32498[(2)] = null);

(statearr_32392_32498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (5))){
var inst_32367 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32383__$1 = state_32383;
var statearr_32393_32499 = state_32383__$1;
(statearr_32393_32499[(2)] = inst_32367);

(statearr_32393_32499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32384 === (8))){
var inst_32369 = (state_32383[(8)]);
var inst_32374 = (state_32383[(2)]);
var state_32383__$1 = (function (){var statearr_32394 = state_32383;
(statearr_32394[(10)] = inst_32374);

return statearr_32394;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32383__$1,(9),results,inst_32369);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____0 = (function (){
var statearr_32395 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32395[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__);

(statearr_32395[(1)] = (1));

return statearr_32395;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____1 = (function (state_32383){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_32383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e32396){if((e32396 instanceof Object)){
var ex__32040__auto__ = e32396;
var statearr_32397_32500 = state_32383;
(statearr_32397_32500[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32501 = state_32383;
state_32383 = G__32501;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__ = function(state_32383){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____1.call(this,state_32383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_32398 = f__32132__auto__.call(null);
(statearr_32398[(6)] = c__32131__auto___32493);

return statearr_32398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));


var c__32131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_32436){
var state_val_32437 = (state_32436[(1)]);
if((state_val_32437 === (7))){
var inst_32432 = (state_32436[(2)]);
var state_32436__$1 = state_32436;
var statearr_32438_32502 = state_32436__$1;
(statearr_32438_32502[(2)] = inst_32432);

(statearr_32438_32502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (20))){
var state_32436__$1 = state_32436;
var statearr_32439_32503 = state_32436__$1;
(statearr_32439_32503[(2)] = null);

(statearr_32439_32503[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (1))){
var state_32436__$1 = state_32436;
var statearr_32440_32504 = state_32436__$1;
(statearr_32440_32504[(2)] = null);

(statearr_32440_32504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (4))){
var inst_32401 = (state_32436[(7)]);
var inst_32401__$1 = (state_32436[(2)]);
var inst_32402 = (inst_32401__$1 == null);
var state_32436__$1 = (function (){var statearr_32441 = state_32436;
(statearr_32441[(7)] = inst_32401__$1);

return statearr_32441;
})();
if(cljs.core.truth_(inst_32402)){
var statearr_32442_32505 = state_32436__$1;
(statearr_32442_32505[(1)] = (5));

} else {
var statearr_32443_32506 = state_32436__$1;
(statearr_32443_32506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (15))){
var inst_32414 = (state_32436[(8)]);
var state_32436__$1 = state_32436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32436__$1,(18),to,inst_32414);
} else {
if((state_val_32437 === (21))){
var inst_32427 = (state_32436[(2)]);
var state_32436__$1 = state_32436;
var statearr_32444_32507 = state_32436__$1;
(statearr_32444_32507[(2)] = inst_32427);

(statearr_32444_32507[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (13))){
var inst_32429 = (state_32436[(2)]);
var state_32436__$1 = (function (){var statearr_32445 = state_32436;
(statearr_32445[(9)] = inst_32429);

return statearr_32445;
})();
var statearr_32446_32508 = state_32436__$1;
(statearr_32446_32508[(2)] = null);

(statearr_32446_32508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (6))){
var inst_32401 = (state_32436[(7)]);
var state_32436__$1 = state_32436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32436__$1,(11),inst_32401);
} else {
if((state_val_32437 === (17))){
var inst_32422 = (state_32436[(2)]);
var state_32436__$1 = state_32436;
if(cljs.core.truth_(inst_32422)){
var statearr_32447_32509 = state_32436__$1;
(statearr_32447_32509[(1)] = (19));

} else {
var statearr_32448_32510 = state_32436__$1;
(statearr_32448_32510[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (3))){
var inst_32434 = (state_32436[(2)]);
var state_32436__$1 = state_32436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32436__$1,inst_32434);
} else {
if((state_val_32437 === (12))){
var inst_32411 = (state_32436[(10)]);
var state_32436__$1 = state_32436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32436__$1,(14),inst_32411);
} else {
if((state_val_32437 === (2))){
var state_32436__$1 = state_32436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32436__$1,(4),results);
} else {
if((state_val_32437 === (19))){
var state_32436__$1 = state_32436;
var statearr_32449_32511 = state_32436__$1;
(statearr_32449_32511[(2)] = null);

(statearr_32449_32511[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (11))){
var inst_32411 = (state_32436[(2)]);
var state_32436__$1 = (function (){var statearr_32450 = state_32436;
(statearr_32450[(10)] = inst_32411);

return statearr_32450;
})();
var statearr_32451_32512 = state_32436__$1;
(statearr_32451_32512[(2)] = null);

(statearr_32451_32512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (9))){
var state_32436__$1 = state_32436;
var statearr_32452_32513 = state_32436__$1;
(statearr_32452_32513[(2)] = null);

(statearr_32452_32513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (5))){
var state_32436__$1 = state_32436;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32453_32514 = state_32436__$1;
(statearr_32453_32514[(1)] = (8));

} else {
var statearr_32454_32515 = state_32436__$1;
(statearr_32454_32515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (14))){
var inst_32414 = (state_32436[(8)]);
var inst_32414__$1 = (state_32436[(2)]);
var inst_32415 = (inst_32414__$1 == null);
var inst_32416 = cljs.core.not.call(null,inst_32415);
var state_32436__$1 = (function (){var statearr_32455 = state_32436;
(statearr_32455[(8)] = inst_32414__$1);

return statearr_32455;
})();
if(inst_32416){
var statearr_32456_32516 = state_32436__$1;
(statearr_32456_32516[(1)] = (15));

} else {
var statearr_32457_32517 = state_32436__$1;
(statearr_32457_32517[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (16))){
var state_32436__$1 = state_32436;
var statearr_32458_32518 = state_32436__$1;
(statearr_32458_32518[(2)] = false);

(statearr_32458_32518[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (10))){
var inst_32408 = (state_32436[(2)]);
var state_32436__$1 = state_32436;
var statearr_32459_32519 = state_32436__$1;
(statearr_32459_32519[(2)] = inst_32408);

(statearr_32459_32519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (18))){
var inst_32419 = (state_32436[(2)]);
var state_32436__$1 = state_32436;
var statearr_32460_32520 = state_32436__$1;
(statearr_32460_32520[(2)] = inst_32419);

(statearr_32460_32520[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32437 === (8))){
var inst_32405 = cljs.core.async.close_BANG_.call(null,to);
var state_32436__$1 = state_32436;
var statearr_32461_32521 = state_32436__$1;
(statearr_32461_32521[(2)] = inst_32405);

(statearr_32461_32521[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____0 = (function (){
var statearr_32462 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32462[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__);

(statearr_32462[(1)] = (1));

return statearr_32462;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____1 = (function (state_32436){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_32436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e32463){if((e32463 instanceof Object)){
var ex__32040__auto__ = e32463;
var statearr_32464_32522 = state_32436;
(statearr_32464_32522[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32523 = state_32436;
state_32436 = G__32523;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__ = function(state_32436){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____1.call(this,state_32436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32037__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_32465 = f__32132__auto__.call(null);
(statearr_32465[(6)] = c__32131__auto__);

return statearr_32465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));

return c__32131__auto__;
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
var G__32525 = arguments.length;
switch (G__32525) {
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
var G__32528 = arguments.length;
switch (G__32528) {
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
var G__32531 = arguments.length;
switch (G__32531) {
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
var c__32131__auto___32580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_32557){
var state_val_32558 = (state_32557[(1)]);
if((state_val_32558 === (7))){
var inst_32553 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32559_32581 = state_32557__$1;
(statearr_32559_32581[(2)] = inst_32553);

(statearr_32559_32581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (1))){
var state_32557__$1 = state_32557;
var statearr_32560_32582 = state_32557__$1;
(statearr_32560_32582[(2)] = null);

(statearr_32560_32582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (4))){
var inst_32534 = (state_32557[(7)]);
var inst_32534__$1 = (state_32557[(2)]);
var inst_32535 = (inst_32534__$1 == null);
var state_32557__$1 = (function (){var statearr_32561 = state_32557;
(statearr_32561[(7)] = inst_32534__$1);

return statearr_32561;
})();
if(cljs.core.truth_(inst_32535)){
var statearr_32562_32583 = state_32557__$1;
(statearr_32562_32583[(1)] = (5));

} else {
var statearr_32563_32584 = state_32557__$1;
(statearr_32563_32584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (13))){
var state_32557__$1 = state_32557;
var statearr_32564_32585 = state_32557__$1;
(statearr_32564_32585[(2)] = null);

(statearr_32564_32585[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (6))){
var inst_32534 = (state_32557[(7)]);
var inst_32540 = p.call(null,inst_32534);
var state_32557__$1 = state_32557;
if(cljs.core.truth_(inst_32540)){
var statearr_32565_32586 = state_32557__$1;
(statearr_32565_32586[(1)] = (9));

} else {
var statearr_32566_32587 = state_32557__$1;
(statearr_32566_32587[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (3))){
var inst_32555 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32557__$1,inst_32555);
} else {
if((state_val_32558 === (12))){
var state_32557__$1 = state_32557;
var statearr_32567_32588 = state_32557__$1;
(statearr_32567_32588[(2)] = null);

(statearr_32567_32588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (2))){
var state_32557__$1 = state_32557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32557__$1,(4),ch);
} else {
if((state_val_32558 === (11))){
var inst_32534 = (state_32557[(7)]);
var inst_32544 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32557__$1,(8),inst_32544,inst_32534);
} else {
if((state_val_32558 === (9))){
var state_32557__$1 = state_32557;
var statearr_32568_32589 = state_32557__$1;
(statearr_32568_32589[(2)] = tc);

(statearr_32568_32589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (5))){
var inst_32537 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32538 = cljs.core.async.close_BANG_.call(null,fc);
var state_32557__$1 = (function (){var statearr_32569 = state_32557;
(statearr_32569[(8)] = inst_32537);

return statearr_32569;
})();
var statearr_32570_32590 = state_32557__$1;
(statearr_32570_32590[(2)] = inst_32538);

(statearr_32570_32590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (14))){
var inst_32551 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32571_32591 = state_32557__$1;
(statearr_32571_32591[(2)] = inst_32551);

(statearr_32571_32591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (10))){
var state_32557__$1 = state_32557;
var statearr_32572_32592 = state_32557__$1;
(statearr_32572_32592[(2)] = fc);

(statearr_32572_32592[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (8))){
var inst_32546 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
if(cljs.core.truth_(inst_32546)){
var statearr_32573_32593 = state_32557__$1;
(statearr_32573_32593[(1)] = (12));

} else {
var statearr_32574_32594 = state_32557__$1;
(statearr_32574_32594[(1)] = (13));

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
var cljs$core$async$state_machine__32037__auto__ = null;
var cljs$core$async$state_machine__32037__auto____0 = (function (){
var statearr_32575 = [null,null,null,null,null,null,null,null,null];
(statearr_32575[(0)] = cljs$core$async$state_machine__32037__auto__);

(statearr_32575[(1)] = (1));

return statearr_32575;
});
var cljs$core$async$state_machine__32037__auto____1 = (function (state_32557){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_32557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e32576){if((e32576 instanceof Object)){
var ex__32040__auto__ = e32576;
var statearr_32577_32595 = state_32557;
(statearr_32577_32595[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32596 = state_32557;
state_32557 = G__32596;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$state_machine__32037__auto__ = function(state_32557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32037__auto____1.call(this,state_32557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32037__auto____0;
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32037__auto____1;
return cljs$core$async$state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_32578 = f__32132__auto__.call(null);
(statearr_32578[(6)] = c__32131__auto___32580);

return statearr_32578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
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
var c__32131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_32617){
var state_val_32618 = (state_32617[(1)]);
if((state_val_32618 === (7))){
var inst_32613 = (state_32617[(2)]);
var state_32617__$1 = state_32617;
var statearr_32619_32637 = state_32617__$1;
(statearr_32619_32637[(2)] = inst_32613);

(statearr_32619_32637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32618 === (1))){
var inst_32597 = init;
var state_32617__$1 = (function (){var statearr_32620 = state_32617;
(statearr_32620[(7)] = inst_32597);

return statearr_32620;
})();
var statearr_32621_32638 = state_32617__$1;
(statearr_32621_32638[(2)] = null);

(statearr_32621_32638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32618 === (4))){
var inst_32600 = (state_32617[(8)]);
var inst_32600__$1 = (state_32617[(2)]);
var inst_32601 = (inst_32600__$1 == null);
var state_32617__$1 = (function (){var statearr_32622 = state_32617;
(statearr_32622[(8)] = inst_32600__$1);

return statearr_32622;
})();
if(cljs.core.truth_(inst_32601)){
var statearr_32623_32639 = state_32617__$1;
(statearr_32623_32639[(1)] = (5));

} else {
var statearr_32624_32640 = state_32617__$1;
(statearr_32624_32640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32618 === (6))){
var inst_32604 = (state_32617[(9)]);
var inst_32597 = (state_32617[(7)]);
var inst_32600 = (state_32617[(8)]);
var inst_32604__$1 = f.call(null,inst_32597,inst_32600);
var inst_32605 = cljs.core.reduced_QMARK_.call(null,inst_32604__$1);
var state_32617__$1 = (function (){var statearr_32625 = state_32617;
(statearr_32625[(9)] = inst_32604__$1);

return statearr_32625;
})();
if(inst_32605){
var statearr_32626_32641 = state_32617__$1;
(statearr_32626_32641[(1)] = (8));

} else {
var statearr_32627_32642 = state_32617__$1;
(statearr_32627_32642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32618 === (3))){
var inst_32615 = (state_32617[(2)]);
var state_32617__$1 = state_32617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32617__$1,inst_32615);
} else {
if((state_val_32618 === (2))){
var state_32617__$1 = state_32617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32617__$1,(4),ch);
} else {
if((state_val_32618 === (9))){
var inst_32604 = (state_32617[(9)]);
var inst_32597 = inst_32604;
var state_32617__$1 = (function (){var statearr_32628 = state_32617;
(statearr_32628[(7)] = inst_32597);

return statearr_32628;
})();
var statearr_32629_32643 = state_32617__$1;
(statearr_32629_32643[(2)] = null);

(statearr_32629_32643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32618 === (5))){
var inst_32597 = (state_32617[(7)]);
var state_32617__$1 = state_32617;
var statearr_32630_32644 = state_32617__$1;
(statearr_32630_32644[(2)] = inst_32597);

(statearr_32630_32644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32618 === (10))){
var inst_32611 = (state_32617[(2)]);
var state_32617__$1 = state_32617;
var statearr_32631_32645 = state_32617__$1;
(statearr_32631_32645[(2)] = inst_32611);

(statearr_32631_32645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32618 === (8))){
var inst_32604 = (state_32617[(9)]);
var inst_32607 = cljs.core.deref.call(null,inst_32604);
var state_32617__$1 = state_32617;
var statearr_32632_32646 = state_32617__$1;
(statearr_32632_32646[(2)] = inst_32607);

(statearr_32632_32646[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32037__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32037__auto____0 = (function (){
var statearr_32633 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32633[(0)] = cljs$core$async$reduce_$_state_machine__32037__auto__);

(statearr_32633[(1)] = (1));

return statearr_32633;
});
var cljs$core$async$reduce_$_state_machine__32037__auto____1 = (function (state_32617){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_32617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e32634){if((e32634 instanceof Object)){
var ex__32040__auto__ = e32634;
var statearr_32635_32647 = state_32617;
(statearr_32635_32647[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32648 = state_32617;
state_32617 = G__32648;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32037__auto__ = function(state_32617){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32037__auto____1.call(this,state_32617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32037__auto____0;
cljs$core$async$reduce_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32037__auto____1;
return cljs$core$async$reduce_$_state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_32636 = f__32132__auto__.call(null);
(statearr_32636[(6)] = c__32131__auto__);

return statearr_32636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));

return c__32131__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_32654){
var state_val_32655 = (state_32654[(1)]);
if((state_val_32655 === (1))){
var inst_32649 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32654__$1 = state_32654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32654__$1,(2),inst_32649);
} else {
if((state_val_32655 === (2))){
var inst_32651 = (state_32654[(2)]);
var inst_32652 = f__$1.call(null,inst_32651);
var state_32654__$1 = state_32654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32654__$1,inst_32652);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32037__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32037__auto____0 = (function (){
var statearr_32656 = [null,null,null,null,null,null,null];
(statearr_32656[(0)] = cljs$core$async$transduce_$_state_machine__32037__auto__);

(statearr_32656[(1)] = (1));

return statearr_32656;
});
var cljs$core$async$transduce_$_state_machine__32037__auto____1 = (function (state_32654){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_32654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e32657){if((e32657 instanceof Object)){
var ex__32040__auto__ = e32657;
var statearr_32658_32660 = state_32654;
(statearr_32658_32660[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32661 = state_32654;
state_32654 = G__32661;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32037__auto__ = function(state_32654){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32037__auto____1.call(this,state_32654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32037__auto____0;
cljs$core$async$transduce_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32037__auto____1;
return cljs$core$async$transduce_$_state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_32659 = f__32132__auto__.call(null);
(statearr_32659[(6)] = c__32131__auto__);

return statearr_32659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));

return c__32131__auto__;
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
var G__32663 = arguments.length;
switch (G__32663) {
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
var c__32131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_32688){
var state_val_32689 = (state_32688[(1)]);
if((state_val_32689 === (7))){
var inst_32670 = (state_32688[(2)]);
var state_32688__$1 = state_32688;
var statearr_32690_32711 = state_32688__$1;
(statearr_32690_32711[(2)] = inst_32670);

(statearr_32690_32711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32689 === (1))){
var inst_32664 = cljs.core.seq.call(null,coll);
var inst_32665 = inst_32664;
var state_32688__$1 = (function (){var statearr_32691 = state_32688;
(statearr_32691[(7)] = inst_32665);

return statearr_32691;
})();
var statearr_32692_32712 = state_32688__$1;
(statearr_32692_32712[(2)] = null);

(statearr_32692_32712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32689 === (4))){
var inst_32665 = (state_32688[(7)]);
var inst_32668 = cljs.core.first.call(null,inst_32665);
var state_32688__$1 = state_32688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32688__$1,(7),ch,inst_32668);
} else {
if((state_val_32689 === (13))){
var inst_32682 = (state_32688[(2)]);
var state_32688__$1 = state_32688;
var statearr_32693_32713 = state_32688__$1;
(statearr_32693_32713[(2)] = inst_32682);

(statearr_32693_32713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32689 === (6))){
var inst_32673 = (state_32688[(2)]);
var state_32688__$1 = state_32688;
if(cljs.core.truth_(inst_32673)){
var statearr_32694_32714 = state_32688__$1;
(statearr_32694_32714[(1)] = (8));

} else {
var statearr_32695_32715 = state_32688__$1;
(statearr_32695_32715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32689 === (3))){
var inst_32686 = (state_32688[(2)]);
var state_32688__$1 = state_32688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32688__$1,inst_32686);
} else {
if((state_val_32689 === (12))){
var state_32688__$1 = state_32688;
var statearr_32696_32716 = state_32688__$1;
(statearr_32696_32716[(2)] = null);

(statearr_32696_32716[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32689 === (2))){
var inst_32665 = (state_32688[(7)]);
var state_32688__$1 = state_32688;
if(cljs.core.truth_(inst_32665)){
var statearr_32697_32717 = state_32688__$1;
(statearr_32697_32717[(1)] = (4));

} else {
var statearr_32698_32718 = state_32688__$1;
(statearr_32698_32718[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32689 === (11))){
var inst_32679 = cljs.core.async.close_BANG_.call(null,ch);
var state_32688__$1 = state_32688;
var statearr_32699_32719 = state_32688__$1;
(statearr_32699_32719[(2)] = inst_32679);

(statearr_32699_32719[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32689 === (9))){
var state_32688__$1 = state_32688;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32700_32720 = state_32688__$1;
(statearr_32700_32720[(1)] = (11));

} else {
var statearr_32701_32721 = state_32688__$1;
(statearr_32701_32721[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32689 === (5))){
var inst_32665 = (state_32688[(7)]);
var state_32688__$1 = state_32688;
var statearr_32702_32722 = state_32688__$1;
(statearr_32702_32722[(2)] = inst_32665);

(statearr_32702_32722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32689 === (10))){
var inst_32684 = (state_32688[(2)]);
var state_32688__$1 = state_32688;
var statearr_32703_32723 = state_32688__$1;
(statearr_32703_32723[(2)] = inst_32684);

(statearr_32703_32723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32689 === (8))){
var inst_32665 = (state_32688[(7)]);
var inst_32675 = cljs.core.next.call(null,inst_32665);
var inst_32665__$1 = inst_32675;
var state_32688__$1 = (function (){var statearr_32704 = state_32688;
(statearr_32704[(7)] = inst_32665__$1);

return statearr_32704;
})();
var statearr_32705_32724 = state_32688__$1;
(statearr_32705_32724[(2)] = null);

(statearr_32705_32724[(1)] = (2));


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
var cljs$core$async$state_machine__32037__auto__ = null;
var cljs$core$async$state_machine__32037__auto____0 = (function (){
var statearr_32706 = [null,null,null,null,null,null,null,null];
(statearr_32706[(0)] = cljs$core$async$state_machine__32037__auto__);

(statearr_32706[(1)] = (1));

return statearr_32706;
});
var cljs$core$async$state_machine__32037__auto____1 = (function (state_32688){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_32688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e32707){if((e32707 instanceof Object)){
var ex__32040__auto__ = e32707;
var statearr_32708_32725 = state_32688;
(statearr_32708_32725[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32726 = state_32688;
state_32688 = G__32726;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$state_machine__32037__auto__ = function(state_32688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32037__auto____1.call(this,state_32688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32037__auto____0;
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32037__auto____1;
return cljs$core$async$state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_32709 = f__32132__auto__.call(null);
(statearr_32709[(6)] = c__32131__auto__);

return statearr_32709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));

return c__32131__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_32727 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_32727.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32728 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_32728.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32729 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_32729.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32730 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_32730.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32731 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32731 = (function (ch,cs,meta32732){
this.ch = ch;
this.cs = cs;
this.meta32732 = meta32732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32733,meta32732__$1){
var self__ = this;
var _32733__$1 = this;
return (new cljs.core.async.t_cljs$core$async32731(self__.ch,self__.cs,meta32732__$1));
}));

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32733){
var self__ = this;
var _32733__$1 = this;
return self__.meta32732;
}));

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32731.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32732","meta32732",-946698619,null)], null);
}));

(cljs.core.async.t_cljs$core$async32731.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32731");

(cljs.core.async.t_cljs$core$async32731.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async32731");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32731.
 */
cljs.core.async.__GT_t_cljs$core$async32731 = (function cljs$core$async$mult_$___GT_t_cljs$core$async32731(ch__$1,cs__$1,meta32732){
return (new cljs.core.async.t_cljs$core$async32731(ch__$1,cs__$1,meta32732));
});

}

return (new cljs.core.async.t_cljs$core$async32731(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32131__auto___32953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_32868){
var state_val_32869 = (state_32868[(1)]);
if((state_val_32869 === (7))){
var inst_32864 = (state_32868[(2)]);
var state_32868__$1 = state_32868;
var statearr_32870_32954 = state_32868__$1;
(statearr_32870_32954[(2)] = inst_32864);

(statearr_32870_32954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (20))){
var inst_32767 = (state_32868[(7)]);
var inst_32779 = cljs.core.first.call(null,inst_32767);
var inst_32780 = cljs.core.nth.call(null,inst_32779,(0),null);
var inst_32781 = cljs.core.nth.call(null,inst_32779,(1),null);
var state_32868__$1 = (function (){var statearr_32871 = state_32868;
(statearr_32871[(8)] = inst_32780);

return statearr_32871;
})();
if(cljs.core.truth_(inst_32781)){
var statearr_32872_32955 = state_32868__$1;
(statearr_32872_32955[(1)] = (22));

} else {
var statearr_32873_32956 = state_32868__$1;
(statearr_32873_32956[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (27))){
var inst_32811 = (state_32868[(9)]);
var inst_32809 = (state_32868[(10)]);
var inst_32816 = (state_32868[(11)]);
var inst_32736 = (state_32868[(12)]);
var inst_32816__$1 = cljs.core._nth.call(null,inst_32809,inst_32811);
var inst_32817 = cljs.core.async.put_BANG_.call(null,inst_32816__$1,inst_32736,done);
var state_32868__$1 = (function (){var statearr_32874 = state_32868;
(statearr_32874[(11)] = inst_32816__$1);

return statearr_32874;
})();
if(cljs.core.truth_(inst_32817)){
var statearr_32875_32957 = state_32868__$1;
(statearr_32875_32957[(1)] = (30));

} else {
var statearr_32876_32958 = state_32868__$1;
(statearr_32876_32958[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (1))){
var state_32868__$1 = state_32868;
var statearr_32877_32959 = state_32868__$1;
(statearr_32877_32959[(2)] = null);

(statearr_32877_32959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (24))){
var inst_32767 = (state_32868[(7)]);
var inst_32786 = (state_32868[(2)]);
var inst_32787 = cljs.core.next.call(null,inst_32767);
var inst_32745 = inst_32787;
var inst_32746 = null;
var inst_32747 = (0);
var inst_32748 = (0);
var state_32868__$1 = (function (){var statearr_32878 = state_32868;
(statearr_32878[(13)] = inst_32748);

(statearr_32878[(14)] = inst_32746);

(statearr_32878[(15)] = inst_32786);

(statearr_32878[(16)] = inst_32747);

(statearr_32878[(17)] = inst_32745);

return statearr_32878;
})();
var statearr_32879_32960 = state_32868__$1;
(statearr_32879_32960[(2)] = null);

(statearr_32879_32960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (39))){
var state_32868__$1 = state_32868;
var statearr_32883_32961 = state_32868__$1;
(statearr_32883_32961[(2)] = null);

(statearr_32883_32961[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (4))){
var inst_32736 = (state_32868[(12)]);
var inst_32736__$1 = (state_32868[(2)]);
var inst_32737 = (inst_32736__$1 == null);
var state_32868__$1 = (function (){var statearr_32884 = state_32868;
(statearr_32884[(12)] = inst_32736__$1);

return statearr_32884;
})();
if(cljs.core.truth_(inst_32737)){
var statearr_32885_32962 = state_32868__$1;
(statearr_32885_32962[(1)] = (5));

} else {
var statearr_32886_32963 = state_32868__$1;
(statearr_32886_32963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (15))){
var inst_32748 = (state_32868[(13)]);
var inst_32746 = (state_32868[(14)]);
var inst_32747 = (state_32868[(16)]);
var inst_32745 = (state_32868[(17)]);
var inst_32763 = (state_32868[(2)]);
var inst_32764 = (inst_32748 + (1));
var tmp32880 = inst_32746;
var tmp32881 = inst_32747;
var tmp32882 = inst_32745;
var inst_32745__$1 = tmp32882;
var inst_32746__$1 = tmp32880;
var inst_32747__$1 = tmp32881;
var inst_32748__$1 = inst_32764;
var state_32868__$1 = (function (){var statearr_32887 = state_32868;
(statearr_32887[(13)] = inst_32748__$1);

(statearr_32887[(18)] = inst_32763);

(statearr_32887[(14)] = inst_32746__$1);

(statearr_32887[(16)] = inst_32747__$1);

(statearr_32887[(17)] = inst_32745__$1);

return statearr_32887;
})();
var statearr_32888_32964 = state_32868__$1;
(statearr_32888_32964[(2)] = null);

(statearr_32888_32964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (21))){
var inst_32790 = (state_32868[(2)]);
var state_32868__$1 = state_32868;
var statearr_32892_32965 = state_32868__$1;
(statearr_32892_32965[(2)] = inst_32790);

(statearr_32892_32965[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (31))){
var inst_32816 = (state_32868[(11)]);
var inst_32820 = done.call(null,null);
var inst_32821 = cljs.core.async.untap_STAR_.call(null,m,inst_32816);
var state_32868__$1 = (function (){var statearr_32893 = state_32868;
(statearr_32893[(19)] = inst_32820);

return statearr_32893;
})();
var statearr_32894_32966 = state_32868__$1;
(statearr_32894_32966[(2)] = inst_32821);

(statearr_32894_32966[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (32))){
var inst_32811 = (state_32868[(9)]);
var inst_32810 = (state_32868[(20)]);
var inst_32809 = (state_32868[(10)]);
var inst_32808 = (state_32868[(21)]);
var inst_32823 = (state_32868[(2)]);
var inst_32824 = (inst_32811 + (1));
var tmp32889 = inst_32810;
var tmp32890 = inst_32809;
var tmp32891 = inst_32808;
var inst_32808__$1 = tmp32891;
var inst_32809__$1 = tmp32890;
var inst_32810__$1 = tmp32889;
var inst_32811__$1 = inst_32824;
var state_32868__$1 = (function (){var statearr_32895 = state_32868;
(statearr_32895[(9)] = inst_32811__$1);

(statearr_32895[(20)] = inst_32810__$1);

(statearr_32895[(22)] = inst_32823);

(statearr_32895[(10)] = inst_32809__$1);

(statearr_32895[(21)] = inst_32808__$1);

return statearr_32895;
})();
var statearr_32896_32967 = state_32868__$1;
(statearr_32896_32967[(2)] = null);

(statearr_32896_32967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (40))){
var inst_32836 = (state_32868[(23)]);
var inst_32840 = done.call(null,null);
var inst_32841 = cljs.core.async.untap_STAR_.call(null,m,inst_32836);
var state_32868__$1 = (function (){var statearr_32897 = state_32868;
(statearr_32897[(24)] = inst_32840);

return statearr_32897;
})();
var statearr_32898_32968 = state_32868__$1;
(statearr_32898_32968[(2)] = inst_32841);

(statearr_32898_32968[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (33))){
var inst_32827 = (state_32868[(25)]);
var inst_32829 = cljs.core.chunked_seq_QMARK_.call(null,inst_32827);
var state_32868__$1 = state_32868;
if(inst_32829){
var statearr_32899_32969 = state_32868__$1;
(statearr_32899_32969[(1)] = (36));

} else {
var statearr_32900_32970 = state_32868__$1;
(statearr_32900_32970[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (13))){
var inst_32757 = (state_32868[(26)]);
var inst_32760 = cljs.core.async.close_BANG_.call(null,inst_32757);
var state_32868__$1 = state_32868;
var statearr_32901_32971 = state_32868__$1;
(statearr_32901_32971[(2)] = inst_32760);

(statearr_32901_32971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (22))){
var inst_32780 = (state_32868[(8)]);
var inst_32783 = cljs.core.async.close_BANG_.call(null,inst_32780);
var state_32868__$1 = state_32868;
var statearr_32902_32972 = state_32868__$1;
(statearr_32902_32972[(2)] = inst_32783);

(statearr_32902_32972[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (36))){
var inst_32827 = (state_32868[(25)]);
var inst_32831 = cljs.core.chunk_first.call(null,inst_32827);
var inst_32832 = cljs.core.chunk_rest.call(null,inst_32827);
var inst_32833 = cljs.core.count.call(null,inst_32831);
var inst_32808 = inst_32832;
var inst_32809 = inst_32831;
var inst_32810 = inst_32833;
var inst_32811 = (0);
var state_32868__$1 = (function (){var statearr_32903 = state_32868;
(statearr_32903[(9)] = inst_32811);

(statearr_32903[(20)] = inst_32810);

(statearr_32903[(10)] = inst_32809);

(statearr_32903[(21)] = inst_32808);

return statearr_32903;
})();
var statearr_32904_32973 = state_32868__$1;
(statearr_32904_32973[(2)] = null);

(statearr_32904_32973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (41))){
var inst_32827 = (state_32868[(25)]);
var inst_32843 = (state_32868[(2)]);
var inst_32844 = cljs.core.next.call(null,inst_32827);
var inst_32808 = inst_32844;
var inst_32809 = null;
var inst_32810 = (0);
var inst_32811 = (0);
var state_32868__$1 = (function (){var statearr_32905 = state_32868;
(statearr_32905[(27)] = inst_32843);

(statearr_32905[(9)] = inst_32811);

(statearr_32905[(20)] = inst_32810);

(statearr_32905[(10)] = inst_32809);

(statearr_32905[(21)] = inst_32808);

return statearr_32905;
})();
var statearr_32906_32974 = state_32868__$1;
(statearr_32906_32974[(2)] = null);

(statearr_32906_32974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (43))){
var state_32868__$1 = state_32868;
var statearr_32907_32975 = state_32868__$1;
(statearr_32907_32975[(2)] = null);

(statearr_32907_32975[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (29))){
var inst_32852 = (state_32868[(2)]);
var state_32868__$1 = state_32868;
var statearr_32908_32976 = state_32868__$1;
(statearr_32908_32976[(2)] = inst_32852);

(statearr_32908_32976[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (44))){
var inst_32861 = (state_32868[(2)]);
var state_32868__$1 = (function (){var statearr_32909 = state_32868;
(statearr_32909[(28)] = inst_32861);

return statearr_32909;
})();
var statearr_32910_32977 = state_32868__$1;
(statearr_32910_32977[(2)] = null);

(statearr_32910_32977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (6))){
var inst_32800 = (state_32868[(29)]);
var inst_32799 = cljs.core.deref.call(null,cs);
var inst_32800__$1 = cljs.core.keys.call(null,inst_32799);
var inst_32801 = cljs.core.count.call(null,inst_32800__$1);
var inst_32802 = cljs.core.reset_BANG_.call(null,dctr,inst_32801);
var inst_32807 = cljs.core.seq.call(null,inst_32800__$1);
var inst_32808 = inst_32807;
var inst_32809 = null;
var inst_32810 = (0);
var inst_32811 = (0);
var state_32868__$1 = (function (){var statearr_32911 = state_32868;
(statearr_32911[(30)] = inst_32802);

(statearr_32911[(9)] = inst_32811);

(statearr_32911[(20)] = inst_32810);

(statearr_32911[(10)] = inst_32809);

(statearr_32911[(21)] = inst_32808);

(statearr_32911[(29)] = inst_32800__$1);

return statearr_32911;
})();
var statearr_32912_32978 = state_32868__$1;
(statearr_32912_32978[(2)] = null);

(statearr_32912_32978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (28))){
var inst_32827 = (state_32868[(25)]);
var inst_32808 = (state_32868[(21)]);
var inst_32827__$1 = cljs.core.seq.call(null,inst_32808);
var state_32868__$1 = (function (){var statearr_32913 = state_32868;
(statearr_32913[(25)] = inst_32827__$1);

return statearr_32913;
})();
if(inst_32827__$1){
var statearr_32914_32979 = state_32868__$1;
(statearr_32914_32979[(1)] = (33));

} else {
var statearr_32915_32980 = state_32868__$1;
(statearr_32915_32980[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (25))){
var inst_32811 = (state_32868[(9)]);
var inst_32810 = (state_32868[(20)]);
var inst_32813 = (inst_32811 < inst_32810);
var inst_32814 = inst_32813;
var state_32868__$1 = state_32868;
if(cljs.core.truth_(inst_32814)){
var statearr_32916_32981 = state_32868__$1;
(statearr_32916_32981[(1)] = (27));

} else {
var statearr_32917_32982 = state_32868__$1;
(statearr_32917_32982[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (34))){
var state_32868__$1 = state_32868;
var statearr_32918_32983 = state_32868__$1;
(statearr_32918_32983[(2)] = null);

(statearr_32918_32983[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (17))){
var state_32868__$1 = state_32868;
var statearr_32919_32984 = state_32868__$1;
(statearr_32919_32984[(2)] = null);

(statearr_32919_32984[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (3))){
var inst_32866 = (state_32868[(2)]);
var state_32868__$1 = state_32868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32868__$1,inst_32866);
} else {
if((state_val_32869 === (12))){
var inst_32795 = (state_32868[(2)]);
var state_32868__$1 = state_32868;
var statearr_32920_32985 = state_32868__$1;
(statearr_32920_32985[(2)] = inst_32795);

(statearr_32920_32985[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (2))){
var state_32868__$1 = state_32868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32868__$1,(4),ch);
} else {
if((state_val_32869 === (23))){
var state_32868__$1 = state_32868;
var statearr_32921_32986 = state_32868__$1;
(statearr_32921_32986[(2)] = null);

(statearr_32921_32986[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (35))){
var inst_32850 = (state_32868[(2)]);
var state_32868__$1 = state_32868;
var statearr_32922_32987 = state_32868__$1;
(statearr_32922_32987[(2)] = inst_32850);

(statearr_32922_32987[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (19))){
var inst_32767 = (state_32868[(7)]);
var inst_32771 = cljs.core.chunk_first.call(null,inst_32767);
var inst_32772 = cljs.core.chunk_rest.call(null,inst_32767);
var inst_32773 = cljs.core.count.call(null,inst_32771);
var inst_32745 = inst_32772;
var inst_32746 = inst_32771;
var inst_32747 = inst_32773;
var inst_32748 = (0);
var state_32868__$1 = (function (){var statearr_32923 = state_32868;
(statearr_32923[(13)] = inst_32748);

(statearr_32923[(14)] = inst_32746);

(statearr_32923[(16)] = inst_32747);

(statearr_32923[(17)] = inst_32745);

return statearr_32923;
})();
var statearr_32924_32988 = state_32868__$1;
(statearr_32924_32988[(2)] = null);

(statearr_32924_32988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (11))){
var inst_32767 = (state_32868[(7)]);
var inst_32745 = (state_32868[(17)]);
var inst_32767__$1 = cljs.core.seq.call(null,inst_32745);
var state_32868__$1 = (function (){var statearr_32925 = state_32868;
(statearr_32925[(7)] = inst_32767__$1);

return statearr_32925;
})();
if(inst_32767__$1){
var statearr_32926_32989 = state_32868__$1;
(statearr_32926_32989[(1)] = (16));

} else {
var statearr_32927_32990 = state_32868__$1;
(statearr_32927_32990[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (9))){
var inst_32797 = (state_32868[(2)]);
var state_32868__$1 = state_32868;
var statearr_32928_32991 = state_32868__$1;
(statearr_32928_32991[(2)] = inst_32797);

(statearr_32928_32991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (5))){
var inst_32743 = cljs.core.deref.call(null,cs);
var inst_32744 = cljs.core.seq.call(null,inst_32743);
var inst_32745 = inst_32744;
var inst_32746 = null;
var inst_32747 = (0);
var inst_32748 = (0);
var state_32868__$1 = (function (){var statearr_32929 = state_32868;
(statearr_32929[(13)] = inst_32748);

(statearr_32929[(14)] = inst_32746);

(statearr_32929[(16)] = inst_32747);

(statearr_32929[(17)] = inst_32745);

return statearr_32929;
})();
var statearr_32930_32992 = state_32868__$1;
(statearr_32930_32992[(2)] = null);

(statearr_32930_32992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (14))){
var state_32868__$1 = state_32868;
var statearr_32931_32993 = state_32868__$1;
(statearr_32931_32993[(2)] = null);

(statearr_32931_32993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (45))){
var inst_32858 = (state_32868[(2)]);
var state_32868__$1 = state_32868;
var statearr_32932_32994 = state_32868__$1;
(statearr_32932_32994[(2)] = inst_32858);

(statearr_32932_32994[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (26))){
var inst_32800 = (state_32868[(29)]);
var inst_32854 = (state_32868[(2)]);
var inst_32855 = cljs.core.seq.call(null,inst_32800);
var state_32868__$1 = (function (){var statearr_32933 = state_32868;
(statearr_32933[(31)] = inst_32854);

return statearr_32933;
})();
if(inst_32855){
var statearr_32934_32995 = state_32868__$1;
(statearr_32934_32995[(1)] = (42));

} else {
var statearr_32935_32996 = state_32868__$1;
(statearr_32935_32996[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (16))){
var inst_32767 = (state_32868[(7)]);
var inst_32769 = cljs.core.chunked_seq_QMARK_.call(null,inst_32767);
var state_32868__$1 = state_32868;
if(inst_32769){
var statearr_32936_32997 = state_32868__$1;
(statearr_32936_32997[(1)] = (19));

} else {
var statearr_32937_32998 = state_32868__$1;
(statearr_32937_32998[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (38))){
var inst_32847 = (state_32868[(2)]);
var state_32868__$1 = state_32868;
var statearr_32938_32999 = state_32868__$1;
(statearr_32938_32999[(2)] = inst_32847);

(statearr_32938_32999[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (30))){
var state_32868__$1 = state_32868;
var statearr_32939_33000 = state_32868__$1;
(statearr_32939_33000[(2)] = null);

(statearr_32939_33000[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (10))){
var inst_32748 = (state_32868[(13)]);
var inst_32746 = (state_32868[(14)]);
var inst_32756 = cljs.core._nth.call(null,inst_32746,inst_32748);
var inst_32757 = cljs.core.nth.call(null,inst_32756,(0),null);
var inst_32758 = cljs.core.nth.call(null,inst_32756,(1),null);
var state_32868__$1 = (function (){var statearr_32940 = state_32868;
(statearr_32940[(26)] = inst_32757);

return statearr_32940;
})();
if(cljs.core.truth_(inst_32758)){
var statearr_32941_33001 = state_32868__$1;
(statearr_32941_33001[(1)] = (13));

} else {
var statearr_32942_33002 = state_32868__$1;
(statearr_32942_33002[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (18))){
var inst_32793 = (state_32868[(2)]);
var state_32868__$1 = state_32868;
var statearr_32943_33003 = state_32868__$1;
(statearr_32943_33003[(2)] = inst_32793);

(statearr_32943_33003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (42))){
var state_32868__$1 = state_32868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32868__$1,(45),dchan);
} else {
if((state_val_32869 === (37))){
var inst_32836 = (state_32868[(23)]);
var inst_32827 = (state_32868[(25)]);
var inst_32736 = (state_32868[(12)]);
var inst_32836__$1 = cljs.core.first.call(null,inst_32827);
var inst_32837 = cljs.core.async.put_BANG_.call(null,inst_32836__$1,inst_32736,done);
var state_32868__$1 = (function (){var statearr_32944 = state_32868;
(statearr_32944[(23)] = inst_32836__$1);

return statearr_32944;
})();
if(cljs.core.truth_(inst_32837)){
var statearr_32945_33004 = state_32868__$1;
(statearr_32945_33004[(1)] = (39));

} else {
var statearr_32946_33005 = state_32868__$1;
(statearr_32946_33005[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32869 === (8))){
var inst_32748 = (state_32868[(13)]);
var inst_32747 = (state_32868[(16)]);
var inst_32750 = (inst_32748 < inst_32747);
var inst_32751 = inst_32750;
var state_32868__$1 = state_32868;
if(cljs.core.truth_(inst_32751)){
var statearr_32947_33006 = state_32868__$1;
(statearr_32947_33006[(1)] = (10));

} else {
var statearr_32948_33007 = state_32868__$1;
(statearr_32948_33007[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32037__auto__ = null;
var cljs$core$async$mult_$_state_machine__32037__auto____0 = (function (){
var statearr_32949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32949[(0)] = cljs$core$async$mult_$_state_machine__32037__auto__);

(statearr_32949[(1)] = (1));

return statearr_32949;
});
var cljs$core$async$mult_$_state_machine__32037__auto____1 = (function (state_32868){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_32868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e32950){if((e32950 instanceof Object)){
var ex__32040__auto__ = e32950;
var statearr_32951_33008 = state_32868;
(statearr_32951_33008[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33009 = state_32868;
state_32868 = G__33009;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32037__auto__ = function(state_32868){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32037__auto____1.call(this,state_32868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32037__auto____0;
cljs$core$async$mult_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32037__auto____1;
return cljs$core$async$mult_$_state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_32952 = f__32132__auto__.call(null);
(statearr_32952[(6)] = c__32131__auto___32953);

return statearr_32952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
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
var G__33011 = arguments.length;
switch (G__33011) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33013 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33013.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33014 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33014.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33015 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33015.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33016 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33016.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33017 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33017.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33028 = arguments.length;
var i__4737__auto___33029 = (0);
while(true){
if((i__4737__auto___33029 < len__4736__auto___33028)){
args__4742__auto__.push((arguments[i__4737__auto___33029]));

var G__33030 = (i__4737__auto___33029 + (1));
i__4737__auto___33029 = G__33030;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33022){
var map__33023 = p__33022;
var map__33023__$1 = (((((!((map__33023 == null))))?(((((map__33023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33023):map__33023);
var opts = map__33023__$1;
var statearr_33025_33031 = state;
(statearr_33025_33031[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_33026_33032 = state;
(statearr_33026_33032[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_33027_33033 = state;
(statearr_33027_33033[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33018){
var G__33019 = cljs.core.first.call(null,seq33018);
var seq33018__$1 = cljs.core.next.call(null,seq33018);
var G__33020 = cljs.core.first.call(null,seq33018__$1);
var seq33018__$2 = cljs.core.next.call(null,seq33018__$1);
var G__33021 = cljs.core.first.call(null,seq33018__$2);
var seq33018__$3 = cljs.core.next.call(null,seq33018__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33019,G__33020,G__33021,seq33018__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33034 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33034 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33035){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33035 = meta33035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33036,meta33035__$1){
var self__ = this;
var _33036__$1 = this;
return (new cljs.core.async.t_cljs$core$async33034(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33035__$1));
}));

(cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33036){
var self__ = this;
var _33036__$1 = this;
return self__.meta33035;
}));

(cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async33034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33035","meta33035",2121980559,null)], null);
}));

(cljs.core.async.t_cljs$core$async33034.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33034");

(cljs.core.async.t_cljs$core$async33034.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33034");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33034.
 */
cljs.core.async.__GT_t_cljs$core$async33034 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33034(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33035){
return (new cljs.core.async.t_cljs$core$async33034(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33035));
});

}

return (new cljs.core.async.t_cljs$core$async33034(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32131__auto___33198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_33138){
var state_val_33139 = (state_33138[(1)]);
if((state_val_33139 === (7))){
var inst_33053 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
var statearr_33140_33199 = state_33138__$1;
(statearr_33140_33199[(2)] = inst_33053);

(statearr_33140_33199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (20))){
var inst_33065 = (state_33138[(7)]);
var state_33138__$1 = state_33138;
var statearr_33141_33200 = state_33138__$1;
(statearr_33141_33200[(2)] = inst_33065);

(statearr_33141_33200[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (27))){
var state_33138__$1 = state_33138;
var statearr_33142_33201 = state_33138__$1;
(statearr_33142_33201[(2)] = null);

(statearr_33142_33201[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (1))){
var inst_33040 = (state_33138[(8)]);
var inst_33040__$1 = calc_state.call(null);
var inst_33042 = (inst_33040__$1 == null);
var inst_33043 = cljs.core.not.call(null,inst_33042);
var state_33138__$1 = (function (){var statearr_33143 = state_33138;
(statearr_33143[(8)] = inst_33040__$1);

return statearr_33143;
})();
if(inst_33043){
var statearr_33144_33202 = state_33138__$1;
(statearr_33144_33202[(1)] = (2));

} else {
var statearr_33145_33203 = state_33138__$1;
(statearr_33145_33203[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (24))){
var inst_33089 = (state_33138[(9)]);
var inst_33112 = (state_33138[(10)]);
var inst_33098 = (state_33138[(11)]);
var inst_33112__$1 = inst_33089.call(null,inst_33098);
var state_33138__$1 = (function (){var statearr_33146 = state_33138;
(statearr_33146[(10)] = inst_33112__$1);

return statearr_33146;
})();
if(cljs.core.truth_(inst_33112__$1)){
var statearr_33147_33204 = state_33138__$1;
(statearr_33147_33204[(1)] = (29));

} else {
var statearr_33148_33205 = state_33138__$1;
(statearr_33148_33205[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (4))){
var inst_33056 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
if(cljs.core.truth_(inst_33056)){
var statearr_33149_33206 = state_33138__$1;
(statearr_33149_33206[(1)] = (8));

} else {
var statearr_33150_33207 = state_33138__$1;
(statearr_33150_33207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (15))){
var inst_33083 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
if(cljs.core.truth_(inst_33083)){
var statearr_33151_33208 = state_33138__$1;
(statearr_33151_33208[(1)] = (19));

} else {
var statearr_33152_33209 = state_33138__$1;
(statearr_33152_33209[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (21))){
var inst_33088 = (state_33138[(12)]);
var inst_33088__$1 = (state_33138[(2)]);
var inst_33089 = cljs.core.get.call(null,inst_33088__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33090 = cljs.core.get.call(null,inst_33088__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33091 = cljs.core.get.call(null,inst_33088__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33138__$1 = (function (){var statearr_33153 = state_33138;
(statearr_33153[(9)] = inst_33089);

(statearr_33153[(13)] = inst_33090);

(statearr_33153[(12)] = inst_33088__$1);

return statearr_33153;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33138__$1,(22),inst_33091);
} else {
if((state_val_33139 === (31))){
var inst_33120 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
if(cljs.core.truth_(inst_33120)){
var statearr_33154_33210 = state_33138__$1;
(statearr_33154_33210[(1)] = (32));

} else {
var statearr_33155_33211 = state_33138__$1;
(statearr_33155_33211[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (32))){
var inst_33097 = (state_33138[(14)]);
var state_33138__$1 = state_33138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33138__$1,(35),out,inst_33097);
} else {
if((state_val_33139 === (33))){
var inst_33088 = (state_33138[(12)]);
var inst_33065 = inst_33088;
var state_33138__$1 = (function (){var statearr_33156 = state_33138;
(statearr_33156[(7)] = inst_33065);

return statearr_33156;
})();
var statearr_33157_33212 = state_33138__$1;
(statearr_33157_33212[(2)] = null);

(statearr_33157_33212[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (13))){
var inst_33065 = (state_33138[(7)]);
var inst_33072 = inst_33065.cljs$lang$protocol_mask$partition0$;
var inst_33073 = (inst_33072 & (64));
var inst_33074 = inst_33065.cljs$core$ISeq$;
var inst_33075 = (cljs.core.PROTOCOL_SENTINEL === inst_33074);
var inst_33076 = ((inst_33073) || (inst_33075));
var state_33138__$1 = state_33138;
if(cljs.core.truth_(inst_33076)){
var statearr_33158_33213 = state_33138__$1;
(statearr_33158_33213[(1)] = (16));

} else {
var statearr_33159_33214 = state_33138__$1;
(statearr_33159_33214[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (22))){
var inst_33098 = (state_33138[(11)]);
var inst_33097 = (state_33138[(14)]);
var inst_33096 = (state_33138[(2)]);
var inst_33097__$1 = cljs.core.nth.call(null,inst_33096,(0),null);
var inst_33098__$1 = cljs.core.nth.call(null,inst_33096,(1),null);
var inst_33099 = (inst_33097__$1 == null);
var inst_33100 = cljs.core._EQ_.call(null,inst_33098__$1,change);
var inst_33101 = ((inst_33099) || (inst_33100));
var state_33138__$1 = (function (){var statearr_33160 = state_33138;
(statearr_33160[(11)] = inst_33098__$1);

(statearr_33160[(14)] = inst_33097__$1);

return statearr_33160;
})();
if(cljs.core.truth_(inst_33101)){
var statearr_33161_33215 = state_33138__$1;
(statearr_33161_33215[(1)] = (23));

} else {
var statearr_33162_33216 = state_33138__$1;
(statearr_33162_33216[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (36))){
var inst_33088 = (state_33138[(12)]);
var inst_33065 = inst_33088;
var state_33138__$1 = (function (){var statearr_33163 = state_33138;
(statearr_33163[(7)] = inst_33065);

return statearr_33163;
})();
var statearr_33164_33217 = state_33138__$1;
(statearr_33164_33217[(2)] = null);

(statearr_33164_33217[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (29))){
var inst_33112 = (state_33138[(10)]);
var state_33138__$1 = state_33138;
var statearr_33165_33218 = state_33138__$1;
(statearr_33165_33218[(2)] = inst_33112);

(statearr_33165_33218[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (6))){
var state_33138__$1 = state_33138;
var statearr_33166_33219 = state_33138__$1;
(statearr_33166_33219[(2)] = false);

(statearr_33166_33219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (28))){
var inst_33108 = (state_33138[(2)]);
var inst_33109 = calc_state.call(null);
var inst_33065 = inst_33109;
var state_33138__$1 = (function (){var statearr_33167 = state_33138;
(statearr_33167[(7)] = inst_33065);

(statearr_33167[(15)] = inst_33108);

return statearr_33167;
})();
var statearr_33168_33220 = state_33138__$1;
(statearr_33168_33220[(2)] = null);

(statearr_33168_33220[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (25))){
var inst_33134 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
var statearr_33169_33221 = state_33138__$1;
(statearr_33169_33221[(2)] = inst_33134);

(statearr_33169_33221[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (34))){
var inst_33132 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
var statearr_33170_33222 = state_33138__$1;
(statearr_33170_33222[(2)] = inst_33132);

(statearr_33170_33222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (17))){
var state_33138__$1 = state_33138;
var statearr_33171_33223 = state_33138__$1;
(statearr_33171_33223[(2)] = false);

(statearr_33171_33223[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (3))){
var state_33138__$1 = state_33138;
var statearr_33172_33224 = state_33138__$1;
(statearr_33172_33224[(2)] = false);

(statearr_33172_33224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (12))){
var inst_33136 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33138__$1,inst_33136);
} else {
if((state_val_33139 === (2))){
var inst_33040 = (state_33138[(8)]);
var inst_33045 = inst_33040.cljs$lang$protocol_mask$partition0$;
var inst_33046 = (inst_33045 & (64));
var inst_33047 = inst_33040.cljs$core$ISeq$;
var inst_33048 = (cljs.core.PROTOCOL_SENTINEL === inst_33047);
var inst_33049 = ((inst_33046) || (inst_33048));
var state_33138__$1 = state_33138;
if(cljs.core.truth_(inst_33049)){
var statearr_33173_33225 = state_33138__$1;
(statearr_33173_33225[(1)] = (5));

} else {
var statearr_33174_33226 = state_33138__$1;
(statearr_33174_33226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (23))){
var inst_33097 = (state_33138[(14)]);
var inst_33103 = (inst_33097 == null);
var state_33138__$1 = state_33138;
if(cljs.core.truth_(inst_33103)){
var statearr_33175_33227 = state_33138__$1;
(statearr_33175_33227[(1)] = (26));

} else {
var statearr_33176_33228 = state_33138__$1;
(statearr_33176_33228[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (35))){
var inst_33123 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
if(cljs.core.truth_(inst_33123)){
var statearr_33177_33229 = state_33138__$1;
(statearr_33177_33229[(1)] = (36));

} else {
var statearr_33178_33230 = state_33138__$1;
(statearr_33178_33230[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (19))){
var inst_33065 = (state_33138[(7)]);
var inst_33085 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33065);
var state_33138__$1 = state_33138;
var statearr_33179_33231 = state_33138__$1;
(statearr_33179_33231[(2)] = inst_33085);

(statearr_33179_33231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (11))){
var inst_33065 = (state_33138[(7)]);
var inst_33069 = (inst_33065 == null);
var inst_33070 = cljs.core.not.call(null,inst_33069);
var state_33138__$1 = state_33138;
if(inst_33070){
var statearr_33180_33232 = state_33138__$1;
(statearr_33180_33232[(1)] = (13));

} else {
var statearr_33181_33233 = state_33138__$1;
(statearr_33181_33233[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (9))){
var inst_33040 = (state_33138[(8)]);
var state_33138__$1 = state_33138;
var statearr_33182_33234 = state_33138__$1;
(statearr_33182_33234[(2)] = inst_33040);

(statearr_33182_33234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (5))){
var state_33138__$1 = state_33138;
var statearr_33183_33235 = state_33138__$1;
(statearr_33183_33235[(2)] = true);

(statearr_33183_33235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (14))){
var state_33138__$1 = state_33138;
var statearr_33184_33236 = state_33138__$1;
(statearr_33184_33236[(2)] = false);

(statearr_33184_33236[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (26))){
var inst_33098 = (state_33138[(11)]);
var inst_33105 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33098);
var state_33138__$1 = state_33138;
var statearr_33185_33237 = state_33138__$1;
(statearr_33185_33237[(2)] = inst_33105);

(statearr_33185_33237[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (16))){
var state_33138__$1 = state_33138;
var statearr_33186_33238 = state_33138__$1;
(statearr_33186_33238[(2)] = true);

(statearr_33186_33238[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (38))){
var inst_33128 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
var statearr_33187_33239 = state_33138__$1;
(statearr_33187_33239[(2)] = inst_33128);

(statearr_33187_33239[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (30))){
var inst_33089 = (state_33138[(9)]);
var inst_33090 = (state_33138[(13)]);
var inst_33098 = (state_33138[(11)]);
var inst_33115 = cljs.core.empty_QMARK_.call(null,inst_33089);
var inst_33116 = inst_33090.call(null,inst_33098);
var inst_33117 = cljs.core.not.call(null,inst_33116);
var inst_33118 = ((inst_33115) && (inst_33117));
var state_33138__$1 = state_33138;
var statearr_33188_33240 = state_33138__$1;
(statearr_33188_33240[(2)] = inst_33118);

(statearr_33188_33240[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (10))){
var inst_33040 = (state_33138[(8)]);
var inst_33061 = (state_33138[(2)]);
var inst_33062 = cljs.core.get.call(null,inst_33061,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33063 = cljs.core.get.call(null,inst_33061,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33064 = cljs.core.get.call(null,inst_33061,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33065 = inst_33040;
var state_33138__$1 = (function (){var statearr_33189 = state_33138;
(statearr_33189[(7)] = inst_33065);

(statearr_33189[(16)] = inst_33063);

(statearr_33189[(17)] = inst_33064);

(statearr_33189[(18)] = inst_33062);

return statearr_33189;
})();
var statearr_33190_33241 = state_33138__$1;
(statearr_33190_33241[(2)] = null);

(statearr_33190_33241[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (18))){
var inst_33080 = (state_33138[(2)]);
var state_33138__$1 = state_33138;
var statearr_33191_33242 = state_33138__$1;
(statearr_33191_33242[(2)] = inst_33080);

(statearr_33191_33242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (37))){
var state_33138__$1 = state_33138;
var statearr_33192_33243 = state_33138__$1;
(statearr_33192_33243[(2)] = null);

(statearr_33192_33243[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33139 === (8))){
var inst_33040 = (state_33138[(8)]);
var inst_33058 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33040);
var state_33138__$1 = state_33138;
var statearr_33193_33244 = state_33138__$1;
(statearr_33193_33244[(2)] = inst_33058);

(statearr_33193_33244[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__32037__auto__ = null;
var cljs$core$async$mix_$_state_machine__32037__auto____0 = (function (){
var statearr_33194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33194[(0)] = cljs$core$async$mix_$_state_machine__32037__auto__);

(statearr_33194[(1)] = (1));

return statearr_33194;
});
var cljs$core$async$mix_$_state_machine__32037__auto____1 = (function (state_33138){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_33138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e33195){if((e33195 instanceof Object)){
var ex__32040__auto__ = e33195;
var statearr_33196_33245 = state_33138;
(statearr_33196_33245[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33246 = state_33138;
state_33138 = G__33246;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32037__auto__ = function(state_33138){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32037__auto____1.call(this,state_33138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32037__auto____0;
cljs$core$async$mix_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32037__auto____1;
return cljs$core$async$mix_$_state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_33197 = f__32132__auto__.call(null);
(statearr_33197[(6)] = c__32131__auto___33198);

return statearr_33197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33249 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33249.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33250 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33250.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33251 = (function() {
var G__33252 = null;
var G__33252__1 = (function (p){
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
var G__33252__2 = (function (p,v){
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
G__33252 = function(p,v){
switch(arguments.length){
case 1:
return G__33252__1.call(this,p);
case 2:
return G__33252__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33252.cljs$core$IFn$_invoke$arity$1 = G__33252__1;
G__33252.cljs$core$IFn$_invoke$arity$2 = G__33252__2;
return G__33252;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33248 = arguments.length;
switch (G__33248) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33251.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33251.call(null,p,v);
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
var G__33256 = arguments.length;
switch (G__33256) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__33254_SHARP_){
if(cljs.core.truth_(p1__33254_SHARP_.call(null,topic))){
return p1__33254_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33254_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33257 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33257 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33258){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33258 = meta33258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33259,meta33258__$1){
var self__ = this;
var _33259__$1 = this;
return (new cljs.core.async.t_cljs$core$async33257(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33258__$1));
}));

(cljs.core.async.t_cljs$core$async33257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33259){
var self__ = this;
var _33259__$1 = this;
return self__.meta33258;
}));

(cljs.core.async.t_cljs$core$async33257.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33257.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33257.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33257.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33257.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33257.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33257.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33258","meta33258",1828318996,null)], null);
}));

(cljs.core.async.t_cljs$core$async33257.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33257");

(cljs.core.async.t_cljs$core$async33257.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33257");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33257.
 */
cljs.core.async.__GT_t_cljs$core$async33257 = (function cljs$core$async$__GT_t_cljs$core$async33257(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33258){
return (new cljs.core.async.t_cljs$core$async33257(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33258));
});

}

return (new cljs.core.async.t_cljs$core$async33257(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32131__auto___33377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_33331){
var state_val_33332 = (state_33331[(1)]);
if((state_val_33332 === (7))){
var inst_33327 = (state_33331[(2)]);
var state_33331__$1 = state_33331;
var statearr_33333_33378 = state_33331__$1;
(statearr_33333_33378[(2)] = inst_33327);

(statearr_33333_33378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (20))){
var state_33331__$1 = state_33331;
var statearr_33334_33379 = state_33331__$1;
(statearr_33334_33379[(2)] = null);

(statearr_33334_33379[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (1))){
var state_33331__$1 = state_33331;
var statearr_33335_33380 = state_33331__$1;
(statearr_33335_33380[(2)] = null);

(statearr_33335_33380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (24))){
var inst_33310 = (state_33331[(7)]);
var inst_33319 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33310);
var state_33331__$1 = state_33331;
var statearr_33336_33381 = state_33331__$1;
(statearr_33336_33381[(2)] = inst_33319);

(statearr_33336_33381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (4))){
var inst_33262 = (state_33331[(8)]);
var inst_33262__$1 = (state_33331[(2)]);
var inst_33263 = (inst_33262__$1 == null);
var state_33331__$1 = (function (){var statearr_33337 = state_33331;
(statearr_33337[(8)] = inst_33262__$1);

return statearr_33337;
})();
if(cljs.core.truth_(inst_33263)){
var statearr_33338_33382 = state_33331__$1;
(statearr_33338_33382[(1)] = (5));

} else {
var statearr_33339_33383 = state_33331__$1;
(statearr_33339_33383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (15))){
var inst_33304 = (state_33331[(2)]);
var state_33331__$1 = state_33331;
var statearr_33340_33384 = state_33331__$1;
(statearr_33340_33384[(2)] = inst_33304);

(statearr_33340_33384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (21))){
var inst_33324 = (state_33331[(2)]);
var state_33331__$1 = (function (){var statearr_33341 = state_33331;
(statearr_33341[(9)] = inst_33324);

return statearr_33341;
})();
var statearr_33342_33385 = state_33331__$1;
(statearr_33342_33385[(2)] = null);

(statearr_33342_33385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (13))){
var inst_33286 = (state_33331[(10)]);
var inst_33288 = cljs.core.chunked_seq_QMARK_.call(null,inst_33286);
var state_33331__$1 = state_33331;
if(inst_33288){
var statearr_33343_33386 = state_33331__$1;
(statearr_33343_33386[(1)] = (16));

} else {
var statearr_33344_33387 = state_33331__$1;
(statearr_33344_33387[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (22))){
var inst_33316 = (state_33331[(2)]);
var state_33331__$1 = state_33331;
if(cljs.core.truth_(inst_33316)){
var statearr_33345_33388 = state_33331__$1;
(statearr_33345_33388[(1)] = (23));

} else {
var statearr_33346_33389 = state_33331__$1;
(statearr_33346_33389[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (6))){
var inst_33310 = (state_33331[(7)]);
var inst_33312 = (state_33331[(11)]);
var inst_33262 = (state_33331[(8)]);
var inst_33310__$1 = topic_fn.call(null,inst_33262);
var inst_33311 = cljs.core.deref.call(null,mults);
var inst_33312__$1 = cljs.core.get.call(null,inst_33311,inst_33310__$1);
var state_33331__$1 = (function (){var statearr_33347 = state_33331;
(statearr_33347[(7)] = inst_33310__$1);

(statearr_33347[(11)] = inst_33312__$1);

return statearr_33347;
})();
if(cljs.core.truth_(inst_33312__$1)){
var statearr_33348_33390 = state_33331__$1;
(statearr_33348_33390[(1)] = (19));

} else {
var statearr_33349_33391 = state_33331__$1;
(statearr_33349_33391[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (25))){
var inst_33321 = (state_33331[(2)]);
var state_33331__$1 = state_33331;
var statearr_33350_33392 = state_33331__$1;
(statearr_33350_33392[(2)] = inst_33321);

(statearr_33350_33392[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (17))){
var inst_33286 = (state_33331[(10)]);
var inst_33295 = cljs.core.first.call(null,inst_33286);
var inst_33296 = cljs.core.async.muxch_STAR_.call(null,inst_33295);
var inst_33297 = cljs.core.async.close_BANG_.call(null,inst_33296);
var inst_33298 = cljs.core.next.call(null,inst_33286);
var inst_33272 = inst_33298;
var inst_33273 = null;
var inst_33274 = (0);
var inst_33275 = (0);
var state_33331__$1 = (function (){var statearr_33351 = state_33331;
(statearr_33351[(12)] = inst_33274);

(statearr_33351[(13)] = inst_33273);

(statearr_33351[(14)] = inst_33297);

(statearr_33351[(15)] = inst_33272);

(statearr_33351[(16)] = inst_33275);

return statearr_33351;
})();
var statearr_33352_33393 = state_33331__$1;
(statearr_33352_33393[(2)] = null);

(statearr_33352_33393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (3))){
var inst_33329 = (state_33331[(2)]);
var state_33331__$1 = state_33331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33331__$1,inst_33329);
} else {
if((state_val_33332 === (12))){
var inst_33306 = (state_33331[(2)]);
var state_33331__$1 = state_33331;
var statearr_33353_33394 = state_33331__$1;
(statearr_33353_33394[(2)] = inst_33306);

(statearr_33353_33394[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (2))){
var state_33331__$1 = state_33331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33331__$1,(4),ch);
} else {
if((state_val_33332 === (23))){
var state_33331__$1 = state_33331;
var statearr_33354_33395 = state_33331__$1;
(statearr_33354_33395[(2)] = null);

(statearr_33354_33395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (19))){
var inst_33312 = (state_33331[(11)]);
var inst_33262 = (state_33331[(8)]);
var inst_33314 = cljs.core.async.muxch_STAR_.call(null,inst_33312);
var state_33331__$1 = state_33331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33331__$1,(22),inst_33314,inst_33262);
} else {
if((state_val_33332 === (11))){
var inst_33272 = (state_33331[(15)]);
var inst_33286 = (state_33331[(10)]);
var inst_33286__$1 = cljs.core.seq.call(null,inst_33272);
var state_33331__$1 = (function (){var statearr_33355 = state_33331;
(statearr_33355[(10)] = inst_33286__$1);

return statearr_33355;
})();
if(inst_33286__$1){
var statearr_33356_33396 = state_33331__$1;
(statearr_33356_33396[(1)] = (13));

} else {
var statearr_33357_33397 = state_33331__$1;
(statearr_33357_33397[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (9))){
var inst_33308 = (state_33331[(2)]);
var state_33331__$1 = state_33331;
var statearr_33358_33398 = state_33331__$1;
(statearr_33358_33398[(2)] = inst_33308);

(statearr_33358_33398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (5))){
var inst_33269 = cljs.core.deref.call(null,mults);
var inst_33270 = cljs.core.vals.call(null,inst_33269);
var inst_33271 = cljs.core.seq.call(null,inst_33270);
var inst_33272 = inst_33271;
var inst_33273 = null;
var inst_33274 = (0);
var inst_33275 = (0);
var state_33331__$1 = (function (){var statearr_33359 = state_33331;
(statearr_33359[(12)] = inst_33274);

(statearr_33359[(13)] = inst_33273);

(statearr_33359[(15)] = inst_33272);

(statearr_33359[(16)] = inst_33275);

return statearr_33359;
})();
var statearr_33360_33399 = state_33331__$1;
(statearr_33360_33399[(2)] = null);

(statearr_33360_33399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (14))){
var state_33331__$1 = state_33331;
var statearr_33364_33400 = state_33331__$1;
(statearr_33364_33400[(2)] = null);

(statearr_33364_33400[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (16))){
var inst_33286 = (state_33331[(10)]);
var inst_33290 = cljs.core.chunk_first.call(null,inst_33286);
var inst_33291 = cljs.core.chunk_rest.call(null,inst_33286);
var inst_33292 = cljs.core.count.call(null,inst_33290);
var inst_33272 = inst_33291;
var inst_33273 = inst_33290;
var inst_33274 = inst_33292;
var inst_33275 = (0);
var state_33331__$1 = (function (){var statearr_33365 = state_33331;
(statearr_33365[(12)] = inst_33274);

(statearr_33365[(13)] = inst_33273);

(statearr_33365[(15)] = inst_33272);

(statearr_33365[(16)] = inst_33275);

return statearr_33365;
})();
var statearr_33366_33401 = state_33331__$1;
(statearr_33366_33401[(2)] = null);

(statearr_33366_33401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (10))){
var inst_33274 = (state_33331[(12)]);
var inst_33273 = (state_33331[(13)]);
var inst_33272 = (state_33331[(15)]);
var inst_33275 = (state_33331[(16)]);
var inst_33280 = cljs.core._nth.call(null,inst_33273,inst_33275);
var inst_33281 = cljs.core.async.muxch_STAR_.call(null,inst_33280);
var inst_33282 = cljs.core.async.close_BANG_.call(null,inst_33281);
var inst_33283 = (inst_33275 + (1));
var tmp33361 = inst_33274;
var tmp33362 = inst_33273;
var tmp33363 = inst_33272;
var inst_33272__$1 = tmp33363;
var inst_33273__$1 = tmp33362;
var inst_33274__$1 = tmp33361;
var inst_33275__$1 = inst_33283;
var state_33331__$1 = (function (){var statearr_33367 = state_33331;
(statearr_33367[(17)] = inst_33282);

(statearr_33367[(12)] = inst_33274__$1);

(statearr_33367[(13)] = inst_33273__$1);

(statearr_33367[(15)] = inst_33272__$1);

(statearr_33367[(16)] = inst_33275__$1);

return statearr_33367;
})();
var statearr_33368_33402 = state_33331__$1;
(statearr_33368_33402[(2)] = null);

(statearr_33368_33402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (18))){
var inst_33301 = (state_33331[(2)]);
var state_33331__$1 = state_33331;
var statearr_33369_33403 = state_33331__$1;
(statearr_33369_33403[(2)] = inst_33301);

(statearr_33369_33403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33332 === (8))){
var inst_33274 = (state_33331[(12)]);
var inst_33275 = (state_33331[(16)]);
var inst_33277 = (inst_33275 < inst_33274);
var inst_33278 = inst_33277;
var state_33331__$1 = state_33331;
if(cljs.core.truth_(inst_33278)){
var statearr_33370_33404 = state_33331__$1;
(statearr_33370_33404[(1)] = (10));

} else {
var statearr_33371_33405 = state_33331__$1;
(statearr_33371_33405[(1)] = (11));

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
var cljs$core$async$state_machine__32037__auto__ = null;
var cljs$core$async$state_machine__32037__auto____0 = (function (){
var statearr_33372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33372[(0)] = cljs$core$async$state_machine__32037__auto__);

(statearr_33372[(1)] = (1));

return statearr_33372;
});
var cljs$core$async$state_machine__32037__auto____1 = (function (state_33331){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_33331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e33373){if((e33373 instanceof Object)){
var ex__32040__auto__ = e33373;
var statearr_33374_33406 = state_33331;
(statearr_33374_33406[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33407 = state_33331;
state_33331 = G__33407;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$state_machine__32037__auto__ = function(state_33331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32037__auto____1.call(this,state_33331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32037__auto____0;
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32037__auto____1;
return cljs$core$async$state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_33375 = f__32132__auto__.call(null);
(statearr_33375[(6)] = c__32131__auto___33377);

return statearr_33375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
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
var G__33409 = arguments.length;
switch (G__33409) {
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
var G__33412 = arguments.length;
switch (G__33412) {
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
var G__33415 = arguments.length;
switch (G__33415) {
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
var c__32131__auto___33482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_33454){
var state_val_33455 = (state_33454[(1)]);
if((state_val_33455 === (7))){
var state_33454__$1 = state_33454;
var statearr_33456_33483 = state_33454__$1;
(statearr_33456_33483[(2)] = null);

(statearr_33456_33483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33455 === (1))){
var state_33454__$1 = state_33454;
var statearr_33457_33484 = state_33454__$1;
(statearr_33457_33484[(2)] = null);

(statearr_33457_33484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33455 === (4))){
var inst_33418 = (state_33454[(7)]);
var inst_33420 = (inst_33418 < cnt);
var state_33454__$1 = state_33454;
if(cljs.core.truth_(inst_33420)){
var statearr_33458_33485 = state_33454__$1;
(statearr_33458_33485[(1)] = (6));

} else {
var statearr_33459_33486 = state_33454__$1;
(statearr_33459_33486[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33455 === (15))){
var inst_33450 = (state_33454[(2)]);
var state_33454__$1 = state_33454;
var statearr_33460_33487 = state_33454__$1;
(statearr_33460_33487[(2)] = inst_33450);

(statearr_33460_33487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33455 === (13))){
var inst_33443 = cljs.core.async.close_BANG_.call(null,out);
var state_33454__$1 = state_33454;
var statearr_33461_33488 = state_33454__$1;
(statearr_33461_33488[(2)] = inst_33443);

(statearr_33461_33488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33455 === (6))){
var state_33454__$1 = state_33454;
var statearr_33462_33489 = state_33454__$1;
(statearr_33462_33489[(2)] = null);

(statearr_33462_33489[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33455 === (3))){
var inst_33452 = (state_33454[(2)]);
var state_33454__$1 = state_33454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33454__$1,inst_33452);
} else {
if((state_val_33455 === (12))){
var inst_33440 = (state_33454[(8)]);
var inst_33440__$1 = (state_33454[(2)]);
var inst_33441 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33440__$1);
var state_33454__$1 = (function (){var statearr_33463 = state_33454;
(statearr_33463[(8)] = inst_33440__$1);

return statearr_33463;
})();
if(cljs.core.truth_(inst_33441)){
var statearr_33464_33490 = state_33454__$1;
(statearr_33464_33490[(1)] = (13));

} else {
var statearr_33465_33491 = state_33454__$1;
(statearr_33465_33491[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33455 === (2))){
var inst_33417 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33418 = (0);
var state_33454__$1 = (function (){var statearr_33466 = state_33454;
(statearr_33466[(7)] = inst_33418);

(statearr_33466[(9)] = inst_33417);

return statearr_33466;
})();
var statearr_33467_33492 = state_33454__$1;
(statearr_33467_33492[(2)] = null);

(statearr_33467_33492[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33455 === (11))){
var inst_33418 = (state_33454[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33454,(10),Object,null,(9));
var inst_33427 = chs__$1.call(null,inst_33418);
var inst_33428 = done.call(null,inst_33418);
var inst_33429 = cljs.core.async.take_BANG_.call(null,inst_33427,inst_33428);
var state_33454__$1 = state_33454;
var statearr_33468_33493 = state_33454__$1;
(statearr_33468_33493[(2)] = inst_33429);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33454__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33455 === (9))){
var inst_33418 = (state_33454[(7)]);
var inst_33431 = (state_33454[(2)]);
var inst_33432 = (inst_33418 + (1));
var inst_33418__$1 = inst_33432;
var state_33454__$1 = (function (){var statearr_33469 = state_33454;
(statearr_33469[(7)] = inst_33418__$1);

(statearr_33469[(10)] = inst_33431);

return statearr_33469;
})();
var statearr_33470_33494 = state_33454__$1;
(statearr_33470_33494[(2)] = null);

(statearr_33470_33494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33455 === (5))){
var inst_33438 = (state_33454[(2)]);
var state_33454__$1 = (function (){var statearr_33471 = state_33454;
(statearr_33471[(11)] = inst_33438);

return statearr_33471;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33454__$1,(12),dchan);
} else {
if((state_val_33455 === (14))){
var inst_33440 = (state_33454[(8)]);
var inst_33445 = cljs.core.apply.call(null,f,inst_33440);
var state_33454__$1 = state_33454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33454__$1,(16),out,inst_33445);
} else {
if((state_val_33455 === (16))){
var inst_33447 = (state_33454[(2)]);
var state_33454__$1 = (function (){var statearr_33472 = state_33454;
(statearr_33472[(12)] = inst_33447);

return statearr_33472;
})();
var statearr_33473_33495 = state_33454__$1;
(statearr_33473_33495[(2)] = null);

(statearr_33473_33495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33455 === (10))){
var inst_33422 = (state_33454[(2)]);
var inst_33423 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33454__$1 = (function (){var statearr_33474 = state_33454;
(statearr_33474[(13)] = inst_33422);

return statearr_33474;
})();
var statearr_33475_33496 = state_33454__$1;
(statearr_33475_33496[(2)] = inst_33423);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33454__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33455 === (8))){
var inst_33436 = (state_33454[(2)]);
var state_33454__$1 = state_33454;
var statearr_33476_33497 = state_33454__$1;
(statearr_33476_33497[(2)] = inst_33436);

(statearr_33476_33497[(1)] = (5));


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
var cljs$core$async$state_machine__32037__auto__ = null;
var cljs$core$async$state_machine__32037__auto____0 = (function (){
var statearr_33477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33477[(0)] = cljs$core$async$state_machine__32037__auto__);

(statearr_33477[(1)] = (1));

return statearr_33477;
});
var cljs$core$async$state_machine__32037__auto____1 = (function (state_33454){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_33454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e33478){if((e33478 instanceof Object)){
var ex__32040__auto__ = e33478;
var statearr_33479_33498 = state_33454;
(statearr_33479_33498[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33499 = state_33454;
state_33454 = G__33499;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$state_machine__32037__auto__ = function(state_33454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32037__auto____1.call(this,state_33454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32037__auto____0;
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32037__auto____1;
return cljs$core$async$state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_33480 = f__32132__auto__.call(null);
(statearr_33480[(6)] = c__32131__auto___33482);

return statearr_33480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
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
var G__33502 = arguments.length;
switch (G__33502) {
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
var c__32131__auto___33556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_33534){
var state_val_33535 = (state_33534[(1)]);
if((state_val_33535 === (7))){
var inst_33514 = (state_33534[(7)]);
var inst_33513 = (state_33534[(8)]);
var inst_33513__$1 = (state_33534[(2)]);
var inst_33514__$1 = cljs.core.nth.call(null,inst_33513__$1,(0),null);
var inst_33515 = cljs.core.nth.call(null,inst_33513__$1,(1),null);
var inst_33516 = (inst_33514__$1 == null);
var state_33534__$1 = (function (){var statearr_33536 = state_33534;
(statearr_33536[(7)] = inst_33514__$1);

(statearr_33536[(8)] = inst_33513__$1);

(statearr_33536[(9)] = inst_33515);

return statearr_33536;
})();
if(cljs.core.truth_(inst_33516)){
var statearr_33537_33557 = state_33534__$1;
(statearr_33537_33557[(1)] = (8));

} else {
var statearr_33538_33558 = state_33534__$1;
(statearr_33538_33558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (1))){
var inst_33503 = cljs.core.vec.call(null,chs);
var inst_33504 = inst_33503;
var state_33534__$1 = (function (){var statearr_33539 = state_33534;
(statearr_33539[(10)] = inst_33504);

return statearr_33539;
})();
var statearr_33540_33559 = state_33534__$1;
(statearr_33540_33559[(2)] = null);

(statearr_33540_33559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (4))){
var inst_33504 = (state_33534[(10)]);
var state_33534__$1 = state_33534;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33534__$1,(7),inst_33504);
} else {
if((state_val_33535 === (6))){
var inst_33530 = (state_33534[(2)]);
var state_33534__$1 = state_33534;
var statearr_33541_33560 = state_33534__$1;
(statearr_33541_33560[(2)] = inst_33530);

(statearr_33541_33560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (3))){
var inst_33532 = (state_33534[(2)]);
var state_33534__$1 = state_33534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33534__$1,inst_33532);
} else {
if((state_val_33535 === (2))){
var inst_33504 = (state_33534[(10)]);
var inst_33506 = cljs.core.count.call(null,inst_33504);
var inst_33507 = (inst_33506 > (0));
var state_33534__$1 = state_33534;
if(cljs.core.truth_(inst_33507)){
var statearr_33543_33561 = state_33534__$1;
(statearr_33543_33561[(1)] = (4));

} else {
var statearr_33544_33562 = state_33534__$1;
(statearr_33544_33562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (11))){
var inst_33504 = (state_33534[(10)]);
var inst_33523 = (state_33534[(2)]);
var tmp33542 = inst_33504;
var inst_33504__$1 = tmp33542;
var state_33534__$1 = (function (){var statearr_33545 = state_33534;
(statearr_33545[(11)] = inst_33523);

(statearr_33545[(10)] = inst_33504__$1);

return statearr_33545;
})();
var statearr_33546_33563 = state_33534__$1;
(statearr_33546_33563[(2)] = null);

(statearr_33546_33563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (9))){
var inst_33514 = (state_33534[(7)]);
var state_33534__$1 = state_33534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33534__$1,(11),out,inst_33514);
} else {
if((state_val_33535 === (5))){
var inst_33528 = cljs.core.async.close_BANG_.call(null,out);
var state_33534__$1 = state_33534;
var statearr_33547_33564 = state_33534__$1;
(statearr_33547_33564[(2)] = inst_33528);

(statearr_33547_33564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (10))){
var inst_33526 = (state_33534[(2)]);
var state_33534__$1 = state_33534;
var statearr_33548_33565 = state_33534__$1;
(statearr_33548_33565[(2)] = inst_33526);

(statearr_33548_33565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33535 === (8))){
var inst_33514 = (state_33534[(7)]);
var inst_33513 = (state_33534[(8)]);
var inst_33515 = (state_33534[(9)]);
var inst_33504 = (state_33534[(10)]);
var inst_33518 = (function (){var cs = inst_33504;
var vec__33509 = inst_33513;
var v = inst_33514;
var c = inst_33515;
return (function (p1__33500_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33500_SHARP_);
});
})();
var inst_33519 = cljs.core.filterv.call(null,inst_33518,inst_33504);
var inst_33504__$1 = inst_33519;
var state_33534__$1 = (function (){var statearr_33549 = state_33534;
(statearr_33549[(10)] = inst_33504__$1);

return statearr_33549;
})();
var statearr_33550_33566 = state_33534__$1;
(statearr_33550_33566[(2)] = null);

(statearr_33550_33566[(1)] = (2));


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
var cljs$core$async$state_machine__32037__auto__ = null;
var cljs$core$async$state_machine__32037__auto____0 = (function (){
var statearr_33551 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33551[(0)] = cljs$core$async$state_machine__32037__auto__);

(statearr_33551[(1)] = (1));

return statearr_33551;
});
var cljs$core$async$state_machine__32037__auto____1 = (function (state_33534){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_33534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e33552){if((e33552 instanceof Object)){
var ex__32040__auto__ = e33552;
var statearr_33553_33567 = state_33534;
(statearr_33553_33567[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33568 = state_33534;
state_33534 = G__33568;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$state_machine__32037__auto__ = function(state_33534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32037__auto____1.call(this,state_33534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32037__auto____0;
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32037__auto____1;
return cljs$core$async$state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_33554 = f__32132__auto__.call(null);
(statearr_33554[(6)] = c__32131__auto___33556);

return statearr_33554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
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
var G__33570 = arguments.length;
switch (G__33570) {
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
var c__32131__auto___33615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_33594){
var state_val_33595 = (state_33594[(1)]);
if((state_val_33595 === (7))){
var inst_33576 = (state_33594[(7)]);
var inst_33576__$1 = (state_33594[(2)]);
var inst_33577 = (inst_33576__$1 == null);
var inst_33578 = cljs.core.not.call(null,inst_33577);
var state_33594__$1 = (function (){var statearr_33596 = state_33594;
(statearr_33596[(7)] = inst_33576__$1);

return statearr_33596;
})();
if(inst_33578){
var statearr_33597_33616 = state_33594__$1;
(statearr_33597_33616[(1)] = (8));

} else {
var statearr_33598_33617 = state_33594__$1;
(statearr_33598_33617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (1))){
var inst_33571 = (0);
var state_33594__$1 = (function (){var statearr_33599 = state_33594;
(statearr_33599[(8)] = inst_33571);

return statearr_33599;
})();
var statearr_33600_33618 = state_33594__$1;
(statearr_33600_33618[(2)] = null);

(statearr_33600_33618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (4))){
var state_33594__$1 = state_33594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33594__$1,(7),ch);
} else {
if((state_val_33595 === (6))){
var inst_33589 = (state_33594[(2)]);
var state_33594__$1 = state_33594;
var statearr_33601_33619 = state_33594__$1;
(statearr_33601_33619[(2)] = inst_33589);

(statearr_33601_33619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (3))){
var inst_33591 = (state_33594[(2)]);
var inst_33592 = cljs.core.async.close_BANG_.call(null,out);
var state_33594__$1 = (function (){var statearr_33602 = state_33594;
(statearr_33602[(9)] = inst_33591);

return statearr_33602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33594__$1,inst_33592);
} else {
if((state_val_33595 === (2))){
var inst_33571 = (state_33594[(8)]);
var inst_33573 = (inst_33571 < n);
var state_33594__$1 = state_33594;
if(cljs.core.truth_(inst_33573)){
var statearr_33603_33620 = state_33594__$1;
(statearr_33603_33620[(1)] = (4));

} else {
var statearr_33604_33621 = state_33594__$1;
(statearr_33604_33621[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (11))){
var inst_33571 = (state_33594[(8)]);
var inst_33581 = (state_33594[(2)]);
var inst_33582 = (inst_33571 + (1));
var inst_33571__$1 = inst_33582;
var state_33594__$1 = (function (){var statearr_33605 = state_33594;
(statearr_33605[(8)] = inst_33571__$1);

(statearr_33605[(10)] = inst_33581);

return statearr_33605;
})();
var statearr_33606_33622 = state_33594__$1;
(statearr_33606_33622[(2)] = null);

(statearr_33606_33622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (9))){
var state_33594__$1 = state_33594;
var statearr_33607_33623 = state_33594__$1;
(statearr_33607_33623[(2)] = null);

(statearr_33607_33623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (5))){
var state_33594__$1 = state_33594;
var statearr_33608_33624 = state_33594__$1;
(statearr_33608_33624[(2)] = null);

(statearr_33608_33624[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (10))){
var inst_33586 = (state_33594[(2)]);
var state_33594__$1 = state_33594;
var statearr_33609_33625 = state_33594__$1;
(statearr_33609_33625[(2)] = inst_33586);

(statearr_33609_33625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33595 === (8))){
var inst_33576 = (state_33594[(7)]);
var state_33594__$1 = state_33594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33594__$1,(11),out,inst_33576);
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
var cljs$core$async$state_machine__32037__auto__ = null;
var cljs$core$async$state_machine__32037__auto____0 = (function (){
var statearr_33610 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33610[(0)] = cljs$core$async$state_machine__32037__auto__);

(statearr_33610[(1)] = (1));

return statearr_33610;
});
var cljs$core$async$state_machine__32037__auto____1 = (function (state_33594){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_33594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e33611){if((e33611 instanceof Object)){
var ex__32040__auto__ = e33611;
var statearr_33612_33626 = state_33594;
(statearr_33612_33626[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33627 = state_33594;
state_33594 = G__33627;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$state_machine__32037__auto__ = function(state_33594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32037__auto____1.call(this,state_33594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32037__auto____0;
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32037__auto____1;
return cljs$core$async$state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_33613 = f__32132__auto__.call(null);
(statearr_33613[(6)] = c__32131__auto___33615);

return statearr_33613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33629 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33629 = (function (f,ch,meta33630){
this.f = f;
this.ch = ch;
this.meta33630 = meta33630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33631,meta33630__$1){
var self__ = this;
var _33631__$1 = this;
return (new cljs.core.async.t_cljs$core$async33629(self__.f,self__.ch,meta33630__$1));
}));

(cljs.core.async.t_cljs$core$async33629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33631){
var self__ = this;
var _33631__$1 = this;
return self__.meta33630;
}));

(cljs.core.async.t_cljs$core$async33629.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33629.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async33629.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async33629.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33629.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33632 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33632 = (function (f,ch,meta33630,_,fn1,meta33633){
this.f = f;
this.ch = ch;
this.meta33630 = meta33630;
this._ = _;
this.fn1 = fn1;
this.meta33633 = meta33633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33634,meta33633__$1){
var self__ = this;
var _33634__$1 = this;
return (new cljs.core.async.t_cljs$core$async33632(self__.f,self__.ch,self__.meta33630,self__._,self__.fn1,meta33633__$1));
}));

(cljs.core.async.t_cljs$core$async33632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33634){
var self__ = this;
var _33634__$1 = this;
return self__.meta33633;
}));

(cljs.core.async.t_cljs$core$async33632.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33632.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33632.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33632.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__33628_SHARP_){
return f1.call(null,(((p1__33628_SHARP_ == null))?null:self__.f.call(null,p1__33628_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async33632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33630","meta33630",674511488,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33629","cljs.core.async/t_cljs$core$async33629",568009608,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33633","meta33633",1147284837,null)], null);
}));

(cljs.core.async.t_cljs$core$async33632.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33632");

(cljs.core.async.t_cljs$core$async33632.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33632");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33632.
 */
cljs.core.async.__GT_t_cljs$core$async33632 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33632(f__$1,ch__$1,meta33630__$1,___$2,fn1__$1,meta33633){
return (new cljs.core.async.t_cljs$core$async33632(f__$1,ch__$1,meta33630__$1,___$2,fn1__$1,meta33633));
});

}

return (new cljs.core.async.t_cljs$core$async33632(self__.f,self__.ch,self__.meta33630,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async33629.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33629.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33630","meta33630",674511488,null)], null);
}));

(cljs.core.async.t_cljs$core$async33629.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33629");

(cljs.core.async.t_cljs$core$async33629.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33629");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33629.
 */
cljs.core.async.__GT_t_cljs$core$async33629 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33629(f__$1,ch__$1,meta33630){
return (new cljs.core.async.t_cljs$core$async33629(f__$1,ch__$1,meta33630));
});

}

return (new cljs.core.async.t_cljs$core$async33629(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33635 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33635 = (function (f,ch,meta33636){
this.f = f;
this.ch = ch;
this.meta33636 = meta33636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33637,meta33636__$1){
var self__ = this;
var _33637__$1 = this;
return (new cljs.core.async.t_cljs$core$async33635(self__.f,self__.ch,meta33636__$1));
}));

(cljs.core.async.t_cljs$core$async33635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33637){
var self__ = this;
var _33637__$1 = this;
return self__.meta33636;
}));

(cljs.core.async.t_cljs$core$async33635.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33635.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async33635.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33635.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33635.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33635.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async33635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33636","meta33636",-772440423,null)], null);
}));

(cljs.core.async.t_cljs$core$async33635.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33635");

(cljs.core.async.t_cljs$core$async33635.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33635");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33635.
 */
cljs.core.async.__GT_t_cljs$core$async33635 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33635(f__$1,ch__$1,meta33636){
return (new cljs.core.async.t_cljs$core$async33635(f__$1,ch__$1,meta33636));
});

}

return (new cljs.core.async.t_cljs$core$async33635(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33638 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33638 = (function (p,ch,meta33639){
this.p = p;
this.ch = ch;
this.meta33639 = meta33639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33640,meta33639__$1){
var self__ = this;
var _33640__$1 = this;
return (new cljs.core.async.t_cljs$core$async33638(self__.p,self__.ch,meta33639__$1));
}));

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33640){
var self__ = this;
var _33640__$1 = this;
return self__.meta33639;
}));

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33638.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33639","meta33639",-1221976122,null)], null);
}));

(cljs.core.async.t_cljs$core$async33638.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33638");

(cljs.core.async.t_cljs$core$async33638.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async33638");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33638.
 */
cljs.core.async.__GT_t_cljs$core$async33638 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33638(p__$1,ch__$1,meta33639){
return (new cljs.core.async.t_cljs$core$async33638(p__$1,ch__$1,meta33639));
});

}

return (new cljs.core.async.t_cljs$core$async33638(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33642 = arguments.length;
switch (G__33642) {
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
var c__32131__auto___33682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_33663){
var state_val_33664 = (state_33663[(1)]);
if((state_val_33664 === (7))){
var inst_33659 = (state_33663[(2)]);
var state_33663__$1 = state_33663;
var statearr_33665_33683 = state_33663__$1;
(statearr_33665_33683[(2)] = inst_33659);

(statearr_33665_33683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33664 === (1))){
var state_33663__$1 = state_33663;
var statearr_33666_33684 = state_33663__$1;
(statearr_33666_33684[(2)] = null);

(statearr_33666_33684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33664 === (4))){
var inst_33645 = (state_33663[(7)]);
var inst_33645__$1 = (state_33663[(2)]);
var inst_33646 = (inst_33645__$1 == null);
var state_33663__$1 = (function (){var statearr_33667 = state_33663;
(statearr_33667[(7)] = inst_33645__$1);

return statearr_33667;
})();
if(cljs.core.truth_(inst_33646)){
var statearr_33668_33685 = state_33663__$1;
(statearr_33668_33685[(1)] = (5));

} else {
var statearr_33669_33686 = state_33663__$1;
(statearr_33669_33686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33664 === (6))){
var inst_33645 = (state_33663[(7)]);
var inst_33650 = p.call(null,inst_33645);
var state_33663__$1 = state_33663;
if(cljs.core.truth_(inst_33650)){
var statearr_33670_33687 = state_33663__$1;
(statearr_33670_33687[(1)] = (8));

} else {
var statearr_33671_33688 = state_33663__$1;
(statearr_33671_33688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33664 === (3))){
var inst_33661 = (state_33663[(2)]);
var state_33663__$1 = state_33663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33663__$1,inst_33661);
} else {
if((state_val_33664 === (2))){
var state_33663__$1 = state_33663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33663__$1,(4),ch);
} else {
if((state_val_33664 === (11))){
var inst_33653 = (state_33663[(2)]);
var state_33663__$1 = state_33663;
var statearr_33672_33689 = state_33663__$1;
(statearr_33672_33689[(2)] = inst_33653);

(statearr_33672_33689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33664 === (9))){
var state_33663__$1 = state_33663;
var statearr_33673_33690 = state_33663__$1;
(statearr_33673_33690[(2)] = null);

(statearr_33673_33690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33664 === (5))){
var inst_33648 = cljs.core.async.close_BANG_.call(null,out);
var state_33663__$1 = state_33663;
var statearr_33674_33691 = state_33663__$1;
(statearr_33674_33691[(2)] = inst_33648);

(statearr_33674_33691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33664 === (10))){
var inst_33656 = (state_33663[(2)]);
var state_33663__$1 = (function (){var statearr_33675 = state_33663;
(statearr_33675[(8)] = inst_33656);

return statearr_33675;
})();
var statearr_33676_33692 = state_33663__$1;
(statearr_33676_33692[(2)] = null);

(statearr_33676_33692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33664 === (8))){
var inst_33645 = (state_33663[(7)]);
var state_33663__$1 = state_33663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33663__$1,(11),out,inst_33645);
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
var cljs$core$async$state_machine__32037__auto__ = null;
var cljs$core$async$state_machine__32037__auto____0 = (function (){
var statearr_33677 = [null,null,null,null,null,null,null,null,null];
(statearr_33677[(0)] = cljs$core$async$state_machine__32037__auto__);

(statearr_33677[(1)] = (1));

return statearr_33677;
});
var cljs$core$async$state_machine__32037__auto____1 = (function (state_33663){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_33663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e33678){if((e33678 instanceof Object)){
var ex__32040__auto__ = e33678;
var statearr_33679_33693 = state_33663;
(statearr_33679_33693[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33694 = state_33663;
state_33663 = G__33694;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$state_machine__32037__auto__ = function(state_33663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32037__auto____1.call(this,state_33663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32037__auto____0;
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32037__auto____1;
return cljs$core$async$state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_33680 = f__32132__auto__.call(null);
(statearr_33680[(6)] = c__32131__auto___33682);

return statearr_33680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33696 = arguments.length;
switch (G__33696) {
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
var c__32131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_33759){
var state_val_33760 = (state_33759[(1)]);
if((state_val_33760 === (7))){
var inst_33755 = (state_33759[(2)]);
var state_33759__$1 = state_33759;
var statearr_33761_33799 = state_33759__$1;
(statearr_33761_33799[(2)] = inst_33755);

(statearr_33761_33799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (20))){
var inst_33725 = (state_33759[(7)]);
var inst_33736 = (state_33759[(2)]);
var inst_33737 = cljs.core.next.call(null,inst_33725);
var inst_33711 = inst_33737;
var inst_33712 = null;
var inst_33713 = (0);
var inst_33714 = (0);
var state_33759__$1 = (function (){var statearr_33762 = state_33759;
(statearr_33762[(8)] = inst_33714);

(statearr_33762[(9)] = inst_33713);

(statearr_33762[(10)] = inst_33712);

(statearr_33762[(11)] = inst_33711);

(statearr_33762[(12)] = inst_33736);

return statearr_33762;
})();
var statearr_33763_33800 = state_33759__$1;
(statearr_33763_33800[(2)] = null);

(statearr_33763_33800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (1))){
var state_33759__$1 = state_33759;
var statearr_33764_33801 = state_33759__$1;
(statearr_33764_33801[(2)] = null);

(statearr_33764_33801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (4))){
var inst_33700 = (state_33759[(13)]);
var inst_33700__$1 = (state_33759[(2)]);
var inst_33701 = (inst_33700__$1 == null);
var state_33759__$1 = (function (){var statearr_33765 = state_33759;
(statearr_33765[(13)] = inst_33700__$1);

return statearr_33765;
})();
if(cljs.core.truth_(inst_33701)){
var statearr_33766_33802 = state_33759__$1;
(statearr_33766_33802[(1)] = (5));

} else {
var statearr_33767_33803 = state_33759__$1;
(statearr_33767_33803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (15))){
var state_33759__$1 = state_33759;
var statearr_33771_33804 = state_33759__$1;
(statearr_33771_33804[(2)] = null);

(statearr_33771_33804[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (21))){
var state_33759__$1 = state_33759;
var statearr_33772_33805 = state_33759__$1;
(statearr_33772_33805[(2)] = null);

(statearr_33772_33805[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (13))){
var inst_33714 = (state_33759[(8)]);
var inst_33713 = (state_33759[(9)]);
var inst_33712 = (state_33759[(10)]);
var inst_33711 = (state_33759[(11)]);
var inst_33721 = (state_33759[(2)]);
var inst_33722 = (inst_33714 + (1));
var tmp33768 = inst_33713;
var tmp33769 = inst_33712;
var tmp33770 = inst_33711;
var inst_33711__$1 = tmp33770;
var inst_33712__$1 = tmp33769;
var inst_33713__$1 = tmp33768;
var inst_33714__$1 = inst_33722;
var state_33759__$1 = (function (){var statearr_33773 = state_33759;
(statearr_33773[(8)] = inst_33714__$1);

(statearr_33773[(14)] = inst_33721);

(statearr_33773[(9)] = inst_33713__$1);

(statearr_33773[(10)] = inst_33712__$1);

(statearr_33773[(11)] = inst_33711__$1);

return statearr_33773;
})();
var statearr_33774_33806 = state_33759__$1;
(statearr_33774_33806[(2)] = null);

(statearr_33774_33806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (22))){
var state_33759__$1 = state_33759;
var statearr_33775_33807 = state_33759__$1;
(statearr_33775_33807[(2)] = null);

(statearr_33775_33807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (6))){
var inst_33700 = (state_33759[(13)]);
var inst_33709 = f.call(null,inst_33700);
var inst_33710 = cljs.core.seq.call(null,inst_33709);
var inst_33711 = inst_33710;
var inst_33712 = null;
var inst_33713 = (0);
var inst_33714 = (0);
var state_33759__$1 = (function (){var statearr_33776 = state_33759;
(statearr_33776[(8)] = inst_33714);

(statearr_33776[(9)] = inst_33713);

(statearr_33776[(10)] = inst_33712);

(statearr_33776[(11)] = inst_33711);

return statearr_33776;
})();
var statearr_33777_33808 = state_33759__$1;
(statearr_33777_33808[(2)] = null);

(statearr_33777_33808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (17))){
var inst_33725 = (state_33759[(7)]);
var inst_33729 = cljs.core.chunk_first.call(null,inst_33725);
var inst_33730 = cljs.core.chunk_rest.call(null,inst_33725);
var inst_33731 = cljs.core.count.call(null,inst_33729);
var inst_33711 = inst_33730;
var inst_33712 = inst_33729;
var inst_33713 = inst_33731;
var inst_33714 = (0);
var state_33759__$1 = (function (){var statearr_33778 = state_33759;
(statearr_33778[(8)] = inst_33714);

(statearr_33778[(9)] = inst_33713);

(statearr_33778[(10)] = inst_33712);

(statearr_33778[(11)] = inst_33711);

return statearr_33778;
})();
var statearr_33779_33809 = state_33759__$1;
(statearr_33779_33809[(2)] = null);

(statearr_33779_33809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (3))){
var inst_33757 = (state_33759[(2)]);
var state_33759__$1 = state_33759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33759__$1,inst_33757);
} else {
if((state_val_33760 === (12))){
var inst_33745 = (state_33759[(2)]);
var state_33759__$1 = state_33759;
var statearr_33780_33810 = state_33759__$1;
(statearr_33780_33810[(2)] = inst_33745);

(statearr_33780_33810[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (2))){
var state_33759__$1 = state_33759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33759__$1,(4),in$);
} else {
if((state_val_33760 === (23))){
var inst_33753 = (state_33759[(2)]);
var state_33759__$1 = state_33759;
var statearr_33781_33811 = state_33759__$1;
(statearr_33781_33811[(2)] = inst_33753);

(statearr_33781_33811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (19))){
var inst_33740 = (state_33759[(2)]);
var state_33759__$1 = state_33759;
var statearr_33782_33812 = state_33759__$1;
(statearr_33782_33812[(2)] = inst_33740);

(statearr_33782_33812[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (11))){
var inst_33725 = (state_33759[(7)]);
var inst_33711 = (state_33759[(11)]);
var inst_33725__$1 = cljs.core.seq.call(null,inst_33711);
var state_33759__$1 = (function (){var statearr_33783 = state_33759;
(statearr_33783[(7)] = inst_33725__$1);

return statearr_33783;
})();
if(inst_33725__$1){
var statearr_33784_33813 = state_33759__$1;
(statearr_33784_33813[(1)] = (14));

} else {
var statearr_33785_33814 = state_33759__$1;
(statearr_33785_33814[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (9))){
var inst_33747 = (state_33759[(2)]);
var inst_33748 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33759__$1 = (function (){var statearr_33786 = state_33759;
(statearr_33786[(15)] = inst_33747);

return statearr_33786;
})();
if(cljs.core.truth_(inst_33748)){
var statearr_33787_33815 = state_33759__$1;
(statearr_33787_33815[(1)] = (21));

} else {
var statearr_33788_33816 = state_33759__$1;
(statearr_33788_33816[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (5))){
var inst_33703 = cljs.core.async.close_BANG_.call(null,out);
var state_33759__$1 = state_33759;
var statearr_33789_33817 = state_33759__$1;
(statearr_33789_33817[(2)] = inst_33703);

(statearr_33789_33817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (14))){
var inst_33725 = (state_33759[(7)]);
var inst_33727 = cljs.core.chunked_seq_QMARK_.call(null,inst_33725);
var state_33759__$1 = state_33759;
if(inst_33727){
var statearr_33790_33818 = state_33759__$1;
(statearr_33790_33818[(1)] = (17));

} else {
var statearr_33791_33819 = state_33759__$1;
(statearr_33791_33819[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (16))){
var inst_33743 = (state_33759[(2)]);
var state_33759__$1 = state_33759;
var statearr_33792_33820 = state_33759__$1;
(statearr_33792_33820[(2)] = inst_33743);

(statearr_33792_33820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33760 === (10))){
var inst_33714 = (state_33759[(8)]);
var inst_33712 = (state_33759[(10)]);
var inst_33719 = cljs.core._nth.call(null,inst_33712,inst_33714);
var state_33759__$1 = state_33759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33759__$1,(13),out,inst_33719);
} else {
if((state_val_33760 === (18))){
var inst_33725 = (state_33759[(7)]);
var inst_33734 = cljs.core.first.call(null,inst_33725);
var state_33759__$1 = state_33759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33759__$1,(20),out,inst_33734);
} else {
if((state_val_33760 === (8))){
var inst_33714 = (state_33759[(8)]);
var inst_33713 = (state_33759[(9)]);
var inst_33716 = (inst_33714 < inst_33713);
var inst_33717 = inst_33716;
var state_33759__$1 = state_33759;
if(cljs.core.truth_(inst_33717)){
var statearr_33793_33821 = state_33759__$1;
(statearr_33793_33821[(1)] = (10));

} else {
var statearr_33794_33822 = state_33759__$1;
(statearr_33794_33822[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32037__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32037__auto____0 = (function (){
var statearr_33795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33795[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32037__auto__);

(statearr_33795[(1)] = (1));

return statearr_33795;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32037__auto____1 = (function (state_33759){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_33759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e33796){if((e33796 instanceof Object)){
var ex__32040__auto__ = e33796;
var statearr_33797_33823 = state_33759;
(statearr_33797_33823[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33824 = state_33759;
state_33759 = G__33824;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32037__auto__ = function(state_33759){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32037__auto____1.call(this,state_33759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32037__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32037__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_33798 = f__32132__auto__.call(null);
(statearr_33798[(6)] = c__32131__auto__);

return statearr_33798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));

return c__32131__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33826 = arguments.length;
switch (G__33826) {
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
var G__33829 = arguments.length;
switch (G__33829) {
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
var G__33832 = arguments.length;
switch (G__33832) {
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
var c__32131__auto___33879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_33856){
var state_val_33857 = (state_33856[(1)]);
if((state_val_33857 === (7))){
var inst_33851 = (state_33856[(2)]);
var state_33856__$1 = state_33856;
var statearr_33858_33880 = state_33856__$1;
(statearr_33858_33880[(2)] = inst_33851);

(statearr_33858_33880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33857 === (1))){
var inst_33833 = null;
var state_33856__$1 = (function (){var statearr_33859 = state_33856;
(statearr_33859[(7)] = inst_33833);

return statearr_33859;
})();
var statearr_33860_33881 = state_33856__$1;
(statearr_33860_33881[(2)] = null);

(statearr_33860_33881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33857 === (4))){
var inst_33836 = (state_33856[(8)]);
var inst_33836__$1 = (state_33856[(2)]);
var inst_33837 = (inst_33836__$1 == null);
var inst_33838 = cljs.core.not.call(null,inst_33837);
var state_33856__$1 = (function (){var statearr_33861 = state_33856;
(statearr_33861[(8)] = inst_33836__$1);

return statearr_33861;
})();
if(inst_33838){
var statearr_33862_33882 = state_33856__$1;
(statearr_33862_33882[(1)] = (5));

} else {
var statearr_33863_33883 = state_33856__$1;
(statearr_33863_33883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33857 === (6))){
var state_33856__$1 = state_33856;
var statearr_33864_33884 = state_33856__$1;
(statearr_33864_33884[(2)] = null);

(statearr_33864_33884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33857 === (3))){
var inst_33853 = (state_33856[(2)]);
var inst_33854 = cljs.core.async.close_BANG_.call(null,out);
var state_33856__$1 = (function (){var statearr_33865 = state_33856;
(statearr_33865[(9)] = inst_33853);

return statearr_33865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33856__$1,inst_33854);
} else {
if((state_val_33857 === (2))){
var state_33856__$1 = state_33856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33856__$1,(4),ch);
} else {
if((state_val_33857 === (11))){
var inst_33836 = (state_33856[(8)]);
var inst_33845 = (state_33856[(2)]);
var inst_33833 = inst_33836;
var state_33856__$1 = (function (){var statearr_33866 = state_33856;
(statearr_33866[(10)] = inst_33845);

(statearr_33866[(7)] = inst_33833);

return statearr_33866;
})();
var statearr_33867_33885 = state_33856__$1;
(statearr_33867_33885[(2)] = null);

(statearr_33867_33885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33857 === (9))){
var inst_33836 = (state_33856[(8)]);
var state_33856__$1 = state_33856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33856__$1,(11),out,inst_33836);
} else {
if((state_val_33857 === (5))){
var inst_33836 = (state_33856[(8)]);
var inst_33833 = (state_33856[(7)]);
var inst_33840 = cljs.core._EQ_.call(null,inst_33836,inst_33833);
var state_33856__$1 = state_33856;
if(inst_33840){
var statearr_33869_33886 = state_33856__$1;
(statearr_33869_33886[(1)] = (8));

} else {
var statearr_33870_33887 = state_33856__$1;
(statearr_33870_33887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33857 === (10))){
var inst_33848 = (state_33856[(2)]);
var state_33856__$1 = state_33856;
var statearr_33871_33888 = state_33856__$1;
(statearr_33871_33888[(2)] = inst_33848);

(statearr_33871_33888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33857 === (8))){
var inst_33833 = (state_33856[(7)]);
var tmp33868 = inst_33833;
var inst_33833__$1 = tmp33868;
var state_33856__$1 = (function (){var statearr_33872 = state_33856;
(statearr_33872[(7)] = inst_33833__$1);

return statearr_33872;
})();
var statearr_33873_33889 = state_33856__$1;
(statearr_33873_33889[(2)] = null);

(statearr_33873_33889[(1)] = (2));


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
var cljs$core$async$state_machine__32037__auto__ = null;
var cljs$core$async$state_machine__32037__auto____0 = (function (){
var statearr_33874 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33874[(0)] = cljs$core$async$state_machine__32037__auto__);

(statearr_33874[(1)] = (1));

return statearr_33874;
});
var cljs$core$async$state_machine__32037__auto____1 = (function (state_33856){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_33856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e33875){if((e33875 instanceof Object)){
var ex__32040__auto__ = e33875;
var statearr_33876_33890 = state_33856;
(statearr_33876_33890[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33891 = state_33856;
state_33856 = G__33891;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$state_machine__32037__auto__ = function(state_33856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32037__auto____1.call(this,state_33856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32037__auto____0;
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32037__auto____1;
return cljs$core$async$state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_33877 = f__32132__auto__.call(null);
(statearr_33877[(6)] = c__32131__auto___33879);

return statearr_33877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33893 = arguments.length;
switch (G__33893) {
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
var c__32131__auto___33959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_33931){
var state_val_33932 = (state_33931[(1)]);
if((state_val_33932 === (7))){
var inst_33927 = (state_33931[(2)]);
var state_33931__$1 = state_33931;
var statearr_33933_33960 = state_33931__$1;
(statearr_33933_33960[(2)] = inst_33927);

(statearr_33933_33960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33932 === (1))){
var inst_33894 = (new Array(n));
var inst_33895 = inst_33894;
var inst_33896 = (0);
var state_33931__$1 = (function (){var statearr_33934 = state_33931;
(statearr_33934[(7)] = inst_33895);

(statearr_33934[(8)] = inst_33896);

return statearr_33934;
})();
var statearr_33935_33961 = state_33931__$1;
(statearr_33935_33961[(2)] = null);

(statearr_33935_33961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33932 === (4))){
var inst_33899 = (state_33931[(9)]);
var inst_33899__$1 = (state_33931[(2)]);
var inst_33900 = (inst_33899__$1 == null);
var inst_33901 = cljs.core.not.call(null,inst_33900);
var state_33931__$1 = (function (){var statearr_33936 = state_33931;
(statearr_33936[(9)] = inst_33899__$1);

return statearr_33936;
})();
if(inst_33901){
var statearr_33937_33962 = state_33931__$1;
(statearr_33937_33962[(1)] = (5));

} else {
var statearr_33938_33963 = state_33931__$1;
(statearr_33938_33963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33932 === (15))){
var inst_33921 = (state_33931[(2)]);
var state_33931__$1 = state_33931;
var statearr_33939_33964 = state_33931__$1;
(statearr_33939_33964[(2)] = inst_33921);

(statearr_33939_33964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33932 === (13))){
var state_33931__$1 = state_33931;
var statearr_33940_33965 = state_33931__$1;
(statearr_33940_33965[(2)] = null);

(statearr_33940_33965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33932 === (6))){
var inst_33896 = (state_33931[(8)]);
var inst_33917 = (inst_33896 > (0));
var state_33931__$1 = state_33931;
if(cljs.core.truth_(inst_33917)){
var statearr_33941_33966 = state_33931__$1;
(statearr_33941_33966[(1)] = (12));

} else {
var statearr_33942_33967 = state_33931__$1;
(statearr_33942_33967[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33932 === (3))){
var inst_33929 = (state_33931[(2)]);
var state_33931__$1 = state_33931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33931__$1,inst_33929);
} else {
if((state_val_33932 === (12))){
var inst_33895 = (state_33931[(7)]);
var inst_33919 = cljs.core.vec.call(null,inst_33895);
var state_33931__$1 = state_33931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33931__$1,(15),out,inst_33919);
} else {
if((state_val_33932 === (2))){
var state_33931__$1 = state_33931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33931__$1,(4),ch);
} else {
if((state_val_33932 === (11))){
var inst_33911 = (state_33931[(2)]);
var inst_33912 = (new Array(n));
var inst_33895 = inst_33912;
var inst_33896 = (0);
var state_33931__$1 = (function (){var statearr_33943 = state_33931;
(statearr_33943[(7)] = inst_33895);

(statearr_33943[(10)] = inst_33911);

(statearr_33943[(8)] = inst_33896);

return statearr_33943;
})();
var statearr_33944_33968 = state_33931__$1;
(statearr_33944_33968[(2)] = null);

(statearr_33944_33968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33932 === (9))){
var inst_33895 = (state_33931[(7)]);
var inst_33909 = cljs.core.vec.call(null,inst_33895);
var state_33931__$1 = state_33931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33931__$1,(11),out,inst_33909);
} else {
if((state_val_33932 === (5))){
var inst_33899 = (state_33931[(9)]);
var inst_33904 = (state_33931[(11)]);
var inst_33895 = (state_33931[(7)]);
var inst_33896 = (state_33931[(8)]);
var inst_33903 = (inst_33895[inst_33896] = inst_33899);
var inst_33904__$1 = (inst_33896 + (1));
var inst_33905 = (inst_33904__$1 < n);
var state_33931__$1 = (function (){var statearr_33945 = state_33931;
(statearr_33945[(11)] = inst_33904__$1);

(statearr_33945[(12)] = inst_33903);

return statearr_33945;
})();
if(cljs.core.truth_(inst_33905)){
var statearr_33946_33969 = state_33931__$1;
(statearr_33946_33969[(1)] = (8));

} else {
var statearr_33947_33970 = state_33931__$1;
(statearr_33947_33970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33932 === (14))){
var inst_33924 = (state_33931[(2)]);
var inst_33925 = cljs.core.async.close_BANG_.call(null,out);
var state_33931__$1 = (function (){var statearr_33949 = state_33931;
(statearr_33949[(13)] = inst_33924);

return statearr_33949;
})();
var statearr_33950_33971 = state_33931__$1;
(statearr_33950_33971[(2)] = inst_33925);

(statearr_33950_33971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33932 === (10))){
var inst_33915 = (state_33931[(2)]);
var state_33931__$1 = state_33931;
var statearr_33951_33972 = state_33931__$1;
(statearr_33951_33972[(2)] = inst_33915);

(statearr_33951_33972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33932 === (8))){
var inst_33904 = (state_33931[(11)]);
var inst_33895 = (state_33931[(7)]);
var tmp33948 = inst_33895;
var inst_33895__$1 = tmp33948;
var inst_33896 = inst_33904;
var state_33931__$1 = (function (){var statearr_33952 = state_33931;
(statearr_33952[(7)] = inst_33895__$1);

(statearr_33952[(8)] = inst_33896);

return statearr_33952;
})();
var statearr_33953_33973 = state_33931__$1;
(statearr_33953_33973[(2)] = null);

(statearr_33953_33973[(1)] = (2));


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
var cljs$core$async$state_machine__32037__auto__ = null;
var cljs$core$async$state_machine__32037__auto____0 = (function (){
var statearr_33954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33954[(0)] = cljs$core$async$state_machine__32037__auto__);

(statearr_33954[(1)] = (1));

return statearr_33954;
});
var cljs$core$async$state_machine__32037__auto____1 = (function (state_33931){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_33931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e33955){if((e33955 instanceof Object)){
var ex__32040__auto__ = e33955;
var statearr_33956_33974 = state_33931;
(statearr_33956_33974[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33975 = state_33931;
state_33931 = G__33975;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$state_machine__32037__auto__ = function(state_33931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32037__auto____1.call(this,state_33931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32037__auto____0;
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32037__auto____1;
return cljs$core$async$state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_33957 = f__32132__auto__.call(null);
(statearr_33957[(6)] = c__32131__auto___33959);

return statearr_33957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33977 = arguments.length;
switch (G__33977) {
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
var c__32131__auto___34047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_34019){
var state_val_34020 = (state_34019[(1)]);
if((state_val_34020 === (7))){
var inst_34015 = (state_34019[(2)]);
var state_34019__$1 = state_34019;
var statearr_34021_34048 = state_34019__$1;
(statearr_34021_34048[(2)] = inst_34015);

(statearr_34021_34048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (1))){
var inst_33978 = [];
var inst_33979 = inst_33978;
var inst_33980 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34019__$1 = (function (){var statearr_34022 = state_34019;
(statearr_34022[(7)] = inst_33980);

(statearr_34022[(8)] = inst_33979);

return statearr_34022;
})();
var statearr_34023_34049 = state_34019__$1;
(statearr_34023_34049[(2)] = null);

(statearr_34023_34049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (4))){
var inst_33983 = (state_34019[(9)]);
var inst_33983__$1 = (state_34019[(2)]);
var inst_33984 = (inst_33983__$1 == null);
var inst_33985 = cljs.core.not.call(null,inst_33984);
var state_34019__$1 = (function (){var statearr_34024 = state_34019;
(statearr_34024[(9)] = inst_33983__$1);

return statearr_34024;
})();
if(inst_33985){
var statearr_34025_34050 = state_34019__$1;
(statearr_34025_34050[(1)] = (5));

} else {
var statearr_34026_34051 = state_34019__$1;
(statearr_34026_34051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (15))){
var inst_34009 = (state_34019[(2)]);
var state_34019__$1 = state_34019;
var statearr_34027_34052 = state_34019__$1;
(statearr_34027_34052[(2)] = inst_34009);

(statearr_34027_34052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (13))){
var state_34019__$1 = state_34019;
var statearr_34028_34053 = state_34019__$1;
(statearr_34028_34053[(2)] = null);

(statearr_34028_34053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (6))){
var inst_33979 = (state_34019[(8)]);
var inst_34004 = inst_33979.length;
var inst_34005 = (inst_34004 > (0));
var state_34019__$1 = state_34019;
if(cljs.core.truth_(inst_34005)){
var statearr_34029_34054 = state_34019__$1;
(statearr_34029_34054[(1)] = (12));

} else {
var statearr_34030_34055 = state_34019__$1;
(statearr_34030_34055[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (3))){
var inst_34017 = (state_34019[(2)]);
var state_34019__$1 = state_34019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34019__$1,inst_34017);
} else {
if((state_val_34020 === (12))){
var inst_33979 = (state_34019[(8)]);
var inst_34007 = cljs.core.vec.call(null,inst_33979);
var state_34019__$1 = state_34019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34019__$1,(15),out,inst_34007);
} else {
if((state_val_34020 === (2))){
var state_34019__$1 = state_34019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34019__$1,(4),ch);
} else {
if((state_val_34020 === (11))){
var inst_33987 = (state_34019[(10)]);
var inst_33983 = (state_34019[(9)]);
var inst_33997 = (state_34019[(2)]);
var inst_33998 = [];
var inst_33999 = inst_33998.push(inst_33983);
var inst_33979 = inst_33998;
var inst_33980 = inst_33987;
var state_34019__$1 = (function (){var statearr_34031 = state_34019;
(statearr_34031[(11)] = inst_33999);

(statearr_34031[(7)] = inst_33980);

(statearr_34031[(12)] = inst_33997);

(statearr_34031[(8)] = inst_33979);

return statearr_34031;
})();
var statearr_34032_34056 = state_34019__$1;
(statearr_34032_34056[(2)] = null);

(statearr_34032_34056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (9))){
var inst_33979 = (state_34019[(8)]);
var inst_33995 = cljs.core.vec.call(null,inst_33979);
var state_34019__$1 = state_34019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34019__$1,(11),out,inst_33995);
} else {
if((state_val_34020 === (5))){
var inst_33987 = (state_34019[(10)]);
var inst_33983 = (state_34019[(9)]);
var inst_33980 = (state_34019[(7)]);
var inst_33987__$1 = f.call(null,inst_33983);
var inst_33988 = cljs.core._EQ_.call(null,inst_33987__$1,inst_33980);
var inst_33989 = cljs.core.keyword_identical_QMARK_.call(null,inst_33980,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33990 = ((inst_33988) || (inst_33989));
var state_34019__$1 = (function (){var statearr_34033 = state_34019;
(statearr_34033[(10)] = inst_33987__$1);

return statearr_34033;
})();
if(cljs.core.truth_(inst_33990)){
var statearr_34034_34057 = state_34019__$1;
(statearr_34034_34057[(1)] = (8));

} else {
var statearr_34035_34058 = state_34019__$1;
(statearr_34035_34058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (14))){
var inst_34012 = (state_34019[(2)]);
var inst_34013 = cljs.core.async.close_BANG_.call(null,out);
var state_34019__$1 = (function (){var statearr_34037 = state_34019;
(statearr_34037[(13)] = inst_34012);

return statearr_34037;
})();
var statearr_34038_34059 = state_34019__$1;
(statearr_34038_34059[(2)] = inst_34013);

(statearr_34038_34059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (10))){
var inst_34002 = (state_34019[(2)]);
var state_34019__$1 = state_34019;
var statearr_34039_34060 = state_34019__$1;
(statearr_34039_34060[(2)] = inst_34002);

(statearr_34039_34060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (8))){
var inst_33987 = (state_34019[(10)]);
var inst_33983 = (state_34019[(9)]);
var inst_33979 = (state_34019[(8)]);
var inst_33992 = inst_33979.push(inst_33983);
var tmp34036 = inst_33979;
var inst_33979__$1 = tmp34036;
var inst_33980 = inst_33987;
var state_34019__$1 = (function (){var statearr_34040 = state_34019;
(statearr_34040[(7)] = inst_33980);

(statearr_34040[(8)] = inst_33979__$1);

(statearr_34040[(14)] = inst_33992);

return statearr_34040;
})();
var statearr_34041_34061 = state_34019__$1;
(statearr_34041_34061[(2)] = null);

(statearr_34041_34061[(1)] = (2));


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
var cljs$core$async$state_machine__32037__auto__ = null;
var cljs$core$async$state_machine__32037__auto____0 = (function (){
var statearr_34042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34042[(0)] = cljs$core$async$state_machine__32037__auto__);

(statearr_34042[(1)] = (1));

return statearr_34042;
});
var cljs$core$async$state_machine__32037__auto____1 = (function (state_34019){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_34019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e34043){if((e34043 instanceof Object)){
var ex__32040__auto__ = e34043;
var statearr_34044_34062 = state_34019;
(statearr_34044_34062[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34063 = state_34019;
state_34019 = G__34063;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
cljs$core$async$state_machine__32037__auto__ = function(state_34019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32037__auto____1.call(this,state_34019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32037__auto____0;
cljs$core$async$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32037__auto____1;
return cljs$core$async$state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_34045 = f__32132__auto__.call(null);
(statearr_34045[(6)] = c__32131__auto___34047);

return statearr_34045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1602979381183
