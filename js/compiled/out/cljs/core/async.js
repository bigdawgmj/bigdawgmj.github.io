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
var G__41169 = arguments.length;
switch (G__41169) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41170 = (function (f,blockable,meta41171){
this.f = f;
this.blockable = blockable;
this.meta41171 = meta41171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41172,meta41171__$1){
var self__ = this;
var _41172__$1 = this;
return (new cljs.core.async.t_cljs$core$async41170(self__.f,self__.blockable,meta41171__$1));
}));

(cljs.core.async.t_cljs$core$async41170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41172){
var self__ = this;
var _41172__$1 = this;
return self__.meta41171;
}));

(cljs.core.async.t_cljs$core$async41170.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41170.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41170.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async41170.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async41170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41171","meta41171",1282593379,null)], null);
}));

(cljs.core.async.t_cljs$core$async41170.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41170");

(cljs.core.async.t_cljs$core$async41170.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async41170");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41170.
 */
cljs.core.async.__GT_t_cljs$core$async41170 = (function cljs$core$async$__GT_t_cljs$core$async41170(f__$1,blockable__$1,meta41171){
return (new cljs.core.async.t_cljs$core$async41170(f__$1,blockable__$1,meta41171));
});

}

return (new cljs.core.async.t_cljs$core$async41170(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__41176 = arguments.length;
switch (G__41176) {
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
var G__41179 = arguments.length;
switch (G__41179) {
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
var G__41182 = arguments.length;
switch (G__41182) {
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
var val_41184 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_41184);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_41184);
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
var G__41186 = arguments.length;
switch (G__41186) {
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
var n__4613__auto___41188 = n;
var x_41189 = (0);
while(true){
if((x_41189 < n__4613__auto___41188)){
(a[x_41189] = x_41189);

var G__41190 = (x_41189 + (1));
x_41189 = G__41190;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41191 = (function (flag,meta41192){
this.flag = flag;
this.meta41192 = meta41192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41193,meta41192__$1){
var self__ = this;
var _41193__$1 = this;
return (new cljs.core.async.t_cljs$core$async41191(self__.flag,meta41192__$1));
}));

(cljs.core.async.t_cljs$core$async41191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41193){
var self__ = this;
var _41193__$1 = this;
return self__.meta41192;
}));

(cljs.core.async.t_cljs$core$async41191.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41191.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async41191.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41191.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async41191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41192","meta41192",-1471834627,null)], null);
}));

(cljs.core.async.t_cljs$core$async41191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41191");

(cljs.core.async.t_cljs$core$async41191.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async41191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41191.
 */
cljs.core.async.__GT_t_cljs$core$async41191 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41191(flag__$1,meta41192){
return (new cljs.core.async.t_cljs$core$async41191(flag__$1,meta41192));
});

}

return (new cljs.core.async.t_cljs$core$async41191(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41194 = (function (flag,cb,meta41195){
this.flag = flag;
this.cb = cb;
this.meta41195 = meta41195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41196,meta41195__$1){
var self__ = this;
var _41196__$1 = this;
return (new cljs.core.async.t_cljs$core$async41194(self__.flag,self__.cb,meta41195__$1));
}));

(cljs.core.async.t_cljs$core$async41194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41196){
var self__ = this;
var _41196__$1 = this;
return self__.meta41195;
}));

(cljs.core.async.t_cljs$core$async41194.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41194.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async41194.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41194.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async41194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41195","meta41195",921219177,null)], null);
}));

(cljs.core.async.t_cljs$core$async41194.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41194");

(cljs.core.async.t_cljs$core$async41194.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async41194");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41194.
 */
cljs.core.async.__GT_t_cljs$core$async41194 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async41194(flag__$1,cb__$1,meta41195){
return (new cljs.core.async.t_cljs$core$async41194(flag__$1,cb__$1,meta41195));
});

}

return (new cljs.core.async.t_cljs$core$async41194(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__41197_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41197_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41198_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41198_SHARP_,port], null));
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
var G__41199 = (i + (1));
i = G__41199;
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
var len__4736__auto___41205 = arguments.length;
var i__4737__auto___41206 = (0);
while(true){
if((i__4737__auto___41206 < len__4736__auto___41205)){
args__4742__auto__.push((arguments[i__4737__auto___41206]));

var G__41207 = (i__4737__auto___41206 + (1));
i__4737__auto___41206 = G__41207;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41202){
var map__41203 = p__41202;
var map__41203__$1 = (((((!((map__41203 == null))))?(((((map__41203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41203):map__41203);
var opts = map__41203__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41200){
var G__41201 = cljs.core.first.call(null,seq41200);
var seq41200__$1 = cljs.core.next.call(null,seq41200);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41201,seq41200__$1);
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
var G__41209 = arguments.length;
switch (G__41209) {
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
var c__41109__auto___41255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_41233){
var state_val_41234 = (state_41233[(1)]);
if((state_val_41234 === (7))){
var inst_41229 = (state_41233[(2)]);
var state_41233__$1 = state_41233;
var statearr_41235_41256 = state_41233__$1;
(statearr_41235_41256[(2)] = inst_41229);

(statearr_41235_41256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41234 === (1))){
var state_41233__$1 = state_41233;
var statearr_41236_41257 = state_41233__$1;
(statearr_41236_41257[(2)] = null);

(statearr_41236_41257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41234 === (4))){
var inst_41212 = (state_41233[(7)]);
var inst_41212__$1 = (state_41233[(2)]);
var inst_41213 = (inst_41212__$1 == null);
var state_41233__$1 = (function (){var statearr_41237 = state_41233;
(statearr_41237[(7)] = inst_41212__$1);

return statearr_41237;
})();
if(cljs.core.truth_(inst_41213)){
var statearr_41238_41258 = state_41233__$1;
(statearr_41238_41258[(1)] = (5));

} else {
var statearr_41239_41259 = state_41233__$1;
(statearr_41239_41259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41234 === (13))){
var state_41233__$1 = state_41233;
var statearr_41240_41260 = state_41233__$1;
(statearr_41240_41260[(2)] = null);

(statearr_41240_41260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41234 === (6))){
var inst_41212 = (state_41233[(7)]);
var state_41233__$1 = state_41233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41233__$1,(11),to,inst_41212);
} else {
if((state_val_41234 === (3))){
var inst_41231 = (state_41233[(2)]);
var state_41233__$1 = state_41233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41233__$1,inst_41231);
} else {
if((state_val_41234 === (12))){
var state_41233__$1 = state_41233;
var statearr_41241_41261 = state_41233__$1;
(statearr_41241_41261[(2)] = null);

(statearr_41241_41261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41234 === (2))){
var state_41233__$1 = state_41233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41233__$1,(4),from);
} else {
if((state_val_41234 === (11))){
var inst_41222 = (state_41233[(2)]);
var state_41233__$1 = state_41233;
if(cljs.core.truth_(inst_41222)){
var statearr_41242_41262 = state_41233__$1;
(statearr_41242_41262[(1)] = (12));

} else {
var statearr_41243_41263 = state_41233__$1;
(statearr_41243_41263[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41234 === (9))){
var state_41233__$1 = state_41233;
var statearr_41244_41264 = state_41233__$1;
(statearr_41244_41264[(2)] = null);

(statearr_41244_41264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41234 === (5))){
var state_41233__$1 = state_41233;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41245_41265 = state_41233__$1;
(statearr_41245_41265[(1)] = (8));

} else {
var statearr_41246_41266 = state_41233__$1;
(statearr_41246_41266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41234 === (14))){
var inst_41227 = (state_41233[(2)]);
var state_41233__$1 = state_41233;
var statearr_41247_41267 = state_41233__$1;
(statearr_41247_41267[(2)] = inst_41227);

(statearr_41247_41267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41234 === (10))){
var inst_41219 = (state_41233[(2)]);
var state_41233__$1 = state_41233;
var statearr_41248_41268 = state_41233__$1;
(statearr_41248_41268[(2)] = inst_41219);

(statearr_41248_41268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41234 === (8))){
var inst_41216 = cljs.core.async.close_BANG_.call(null,to);
var state_41233__$1 = state_41233;
var statearr_41249_41269 = state_41233__$1;
(statearr_41249_41269[(2)] = inst_41216);

(statearr_41249_41269[(1)] = (10));


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
var cljs$core$async$state_machine__41015__auto__ = null;
var cljs$core$async$state_machine__41015__auto____0 = (function (){
var statearr_41250 = [null,null,null,null,null,null,null,null];
(statearr_41250[(0)] = cljs$core$async$state_machine__41015__auto__);

(statearr_41250[(1)] = (1));

return statearr_41250;
});
var cljs$core$async$state_machine__41015__auto____1 = (function (state_41233){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_41233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e41251){if((e41251 instanceof Object)){
var ex__41018__auto__ = e41251;
var statearr_41252_41270 = state_41233;
(statearr_41252_41270[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41271 = state_41233;
state_41233 = G__41271;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$state_machine__41015__auto__ = function(state_41233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41015__auto____1.call(this,state_41233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41015__auto____0;
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41015__auto____1;
return cljs$core$async$state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_41253 = f__41110__auto__.call(null);
(statearr_41253[(6)] = c__41109__auto___41255);

return statearr_41253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
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
var process = (function (p__41272){
var vec__41273 = p__41272;
var v = cljs.core.nth.call(null,vec__41273,(0),null);
var p = cljs.core.nth.call(null,vec__41273,(1),null);
var job = vec__41273;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__41109__auto___41444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_41280){
var state_val_41281 = (state_41280[(1)]);
if((state_val_41281 === (1))){
var state_41280__$1 = state_41280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41280__$1,(2),res,v);
} else {
if((state_val_41281 === (2))){
var inst_41277 = (state_41280[(2)]);
var inst_41278 = cljs.core.async.close_BANG_.call(null,res);
var state_41280__$1 = (function (){var statearr_41282 = state_41280;
(statearr_41282[(7)] = inst_41277);

return statearr_41282;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41280__$1,inst_41278);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____0 = (function (){
var statearr_41283 = [null,null,null,null,null,null,null,null];
(statearr_41283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__);

(statearr_41283[(1)] = (1));

return statearr_41283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____1 = (function (state_41280){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_41280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e41284){if((e41284 instanceof Object)){
var ex__41018__auto__ = e41284;
var statearr_41285_41445 = state_41280;
(statearr_41285_41445[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41446 = state_41280;
state_41280 = G__41446;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__ = function(state_41280){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____1.call(this,state_41280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_41286 = f__41110__auto__.call(null);
(statearr_41286[(6)] = c__41109__auto___41444);

return statearr_41286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__41287){
var vec__41288 = p__41287;
var v = cljs.core.nth.call(null,vec__41288,(0),null);
var p = cljs.core.nth.call(null,vec__41288,(1),null);
var job = vec__41288;
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
var n__4613__auto___41447 = n;
var __41448 = (0);
while(true){
if((__41448 < n__4613__auto___41447)){
var G__41291_41449 = type;
var G__41291_41450__$1 = (((G__41291_41449 instanceof cljs.core.Keyword))?G__41291_41449.fqn:null);
switch (G__41291_41450__$1) {
case "compute":
var c__41109__auto___41452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41448,c__41109__auto___41452,G__41291_41449,G__41291_41450__$1,n__4613__auto___41447,jobs,results,process,async){
return (function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = ((function (__41448,c__41109__auto___41452,G__41291_41449,G__41291_41450__$1,n__4613__auto___41447,jobs,results,process,async){
return (function (state_41304){
var state_val_41305 = (state_41304[(1)]);
if((state_val_41305 === (1))){
var state_41304__$1 = state_41304;
var statearr_41306_41453 = state_41304__$1;
(statearr_41306_41453[(2)] = null);

(statearr_41306_41453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (2))){
var state_41304__$1 = state_41304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41304__$1,(4),jobs);
} else {
if((state_val_41305 === (3))){
var inst_41302 = (state_41304[(2)]);
var state_41304__$1 = state_41304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41304__$1,inst_41302);
} else {
if((state_val_41305 === (4))){
var inst_41294 = (state_41304[(2)]);
var inst_41295 = process.call(null,inst_41294);
var state_41304__$1 = state_41304;
if(cljs.core.truth_(inst_41295)){
var statearr_41307_41454 = state_41304__$1;
(statearr_41307_41454[(1)] = (5));

} else {
var statearr_41308_41455 = state_41304__$1;
(statearr_41308_41455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (5))){
var state_41304__$1 = state_41304;
var statearr_41309_41456 = state_41304__$1;
(statearr_41309_41456[(2)] = null);

(statearr_41309_41456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (6))){
var state_41304__$1 = state_41304;
var statearr_41310_41457 = state_41304__$1;
(statearr_41310_41457[(2)] = null);

(statearr_41310_41457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41305 === (7))){
var inst_41300 = (state_41304[(2)]);
var state_41304__$1 = state_41304;
var statearr_41311_41458 = state_41304__$1;
(statearr_41311_41458[(2)] = inst_41300);

(statearr_41311_41458[(1)] = (3));


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
});})(__41448,c__41109__auto___41452,G__41291_41449,G__41291_41450__$1,n__4613__auto___41447,jobs,results,process,async))
;
return ((function (__41448,switch__41014__auto__,c__41109__auto___41452,G__41291_41449,G__41291_41450__$1,n__4613__auto___41447,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____0 = (function (){
var statearr_41312 = [null,null,null,null,null,null,null];
(statearr_41312[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__);

(statearr_41312[(1)] = (1));

return statearr_41312;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____1 = (function (state_41304){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_41304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e41313){if((e41313 instanceof Object)){
var ex__41018__auto__ = e41313;
var statearr_41314_41459 = state_41304;
(statearr_41314_41459[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41460 = state_41304;
state_41304 = G__41460;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__ = function(state_41304){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____1.call(this,state_41304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__;
})()
;})(__41448,switch__41014__auto__,c__41109__auto___41452,G__41291_41449,G__41291_41450__$1,n__4613__auto___41447,jobs,results,process,async))
})();
var state__41111__auto__ = (function (){var statearr_41315 = f__41110__auto__.call(null);
(statearr_41315[(6)] = c__41109__auto___41452);

return statearr_41315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
});})(__41448,c__41109__auto___41452,G__41291_41449,G__41291_41450__$1,n__4613__auto___41447,jobs,results,process,async))
);


break;
case "async":
var c__41109__auto___41461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41448,c__41109__auto___41461,G__41291_41449,G__41291_41450__$1,n__4613__auto___41447,jobs,results,process,async){
return (function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = ((function (__41448,c__41109__auto___41461,G__41291_41449,G__41291_41450__$1,n__4613__auto___41447,jobs,results,process,async){
return (function (state_41328){
var state_val_41329 = (state_41328[(1)]);
if((state_val_41329 === (1))){
var state_41328__$1 = state_41328;
var statearr_41330_41462 = state_41328__$1;
(statearr_41330_41462[(2)] = null);

(statearr_41330_41462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41329 === (2))){
var state_41328__$1 = state_41328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41328__$1,(4),jobs);
} else {
if((state_val_41329 === (3))){
var inst_41326 = (state_41328[(2)]);
var state_41328__$1 = state_41328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41328__$1,inst_41326);
} else {
if((state_val_41329 === (4))){
var inst_41318 = (state_41328[(2)]);
var inst_41319 = async.call(null,inst_41318);
var state_41328__$1 = state_41328;
if(cljs.core.truth_(inst_41319)){
var statearr_41331_41463 = state_41328__$1;
(statearr_41331_41463[(1)] = (5));

} else {
var statearr_41332_41464 = state_41328__$1;
(statearr_41332_41464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41329 === (5))){
var state_41328__$1 = state_41328;
var statearr_41333_41465 = state_41328__$1;
(statearr_41333_41465[(2)] = null);

(statearr_41333_41465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41329 === (6))){
var state_41328__$1 = state_41328;
var statearr_41334_41466 = state_41328__$1;
(statearr_41334_41466[(2)] = null);

(statearr_41334_41466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41329 === (7))){
var inst_41324 = (state_41328[(2)]);
var state_41328__$1 = state_41328;
var statearr_41335_41467 = state_41328__$1;
(statearr_41335_41467[(2)] = inst_41324);

(statearr_41335_41467[(1)] = (3));


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
});})(__41448,c__41109__auto___41461,G__41291_41449,G__41291_41450__$1,n__4613__auto___41447,jobs,results,process,async))
;
return ((function (__41448,switch__41014__auto__,c__41109__auto___41461,G__41291_41449,G__41291_41450__$1,n__4613__auto___41447,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____0 = (function (){
var statearr_41336 = [null,null,null,null,null,null,null];
(statearr_41336[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__);

(statearr_41336[(1)] = (1));

return statearr_41336;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____1 = (function (state_41328){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_41328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e41337){if((e41337 instanceof Object)){
var ex__41018__auto__ = e41337;
var statearr_41338_41468 = state_41328;
(statearr_41338_41468[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41469 = state_41328;
state_41328 = G__41469;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__ = function(state_41328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____1.call(this,state_41328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__;
})()
;})(__41448,switch__41014__auto__,c__41109__auto___41461,G__41291_41449,G__41291_41450__$1,n__4613__auto___41447,jobs,results,process,async))
})();
var state__41111__auto__ = (function (){var statearr_41339 = f__41110__auto__.call(null);
(statearr_41339[(6)] = c__41109__auto___41461);

return statearr_41339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
});})(__41448,c__41109__auto___41461,G__41291_41449,G__41291_41450__$1,n__4613__auto___41447,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41291_41450__$1)].join('')));

}

var G__41470 = (__41448 + (1));
__41448 = G__41470;
continue;
} else {
}
break;
}

var c__41109__auto___41471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_41361){
var state_val_41362 = (state_41361[(1)]);
if((state_val_41362 === (7))){
var inst_41357 = (state_41361[(2)]);
var state_41361__$1 = state_41361;
var statearr_41363_41472 = state_41361__$1;
(statearr_41363_41472[(2)] = inst_41357);

(statearr_41363_41472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41362 === (1))){
var state_41361__$1 = state_41361;
var statearr_41364_41473 = state_41361__$1;
(statearr_41364_41473[(2)] = null);

(statearr_41364_41473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41362 === (4))){
var inst_41342 = (state_41361[(7)]);
var inst_41342__$1 = (state_41361[(2)]);
var inst_41343 = (inst_41342__$1 == null);
var state_41361__$1 = (function (){var statearr_41365 = state_41361;
(statearr_41365[(7)] = inst_41342__$1);

return statearr_41365;
})();
if(cljs.core.truth_(inst_41343)){
var statearr_41366_41474 = state_41361__$1;
(statearr_41366_41474[(1)] = (5));

} else {
var statearr_41367_41475 = state_41361__$1;
(statearr_41367_41475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41362 === (6))){
var inst_41347 = (state_41361[(8)]);
var inst_41342 = (state_41361[(7)]);
var inst_41347__$1 = cljs.core.async.chan.call(null,(1));
var inst_41348 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41349 = [inst_41342,inst_41347__$1];
var inst_41350 = (new cljs.core.PersistentVector(null,2,(5),inst_41348,inst_41349,null));
var state_41361__$1 = (function (){var statearr_41368 = state_41361;
(statearr_41368[(8)] = inst_41347__$1);

return statearr_41368;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41361__$1,(8),jobs,inst_41350);
} else {
if((state_val_41362 === (3))){
var inst_41359 = (state_41361[(2)]);
var state_41361__$1 = state_41361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41361__$1,inst_41359);
} else {
if((state_val_41362 === (2))){
var state_41361__$1 = state_41361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41361__$1,(4),from);
} else {
if((state_val_41362 === (9))){
var inst_41354 = (state_41361[(2)]);
var state_41361__$1 = (function (){var statearr_41369 = state_41361;
(statearr_41369[(9)] = inst_41354);

return statearr_41369;
})();
var statearr_41370_41476 = state_41361__$1;
(statearr_41370_41476[(2)] = null);

(statearr_41370_41476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41362 === (5))){
var inst_41345 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41361__$1 = state_41361;
var statearr_41371_41477 = state_41361__$1;
(statearr_41371_41477[(2)] = inst_41345);

(statearr_41371_41477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41362 === (8))){
var inst_41347 = (state_41361[(8)]);
var inst_41352 = (state_41361[(2)]);
var state_41361__$1 = (function (){var statearr_41372 = state_41361;
(statearr_41372[(10)] = inst_41352);

return statearr_41372;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41361__$1,(9),results,inst_41347);
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
var cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____0 = (function (){
var statearr_41373 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__);

(statearr_41373[(1)] = (1));

return statearr_41373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____1 = (function (state_41361){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_41361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e41374){if((e41374 instanceof Object)){
var ex__41018__auto__ = e41374;
var statearr_41375_41478 = state_41361;
(statearr_41375_41478[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41479 = state_41361;
state_41361 = G__41479;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__ = function(state_41361){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____1.call(this,state_41361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_41376 = f__41110__auto__.call(null);
(statearr_41376[(6)] = c__41109__auto___41471);

return statearr_41376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
}));


var c__41109__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_41414){
var state_val_41415 = (state_41414[(1)]);
if((state_val_41415 === (7))){
var inst_41410 = (state_41414[(2)]);
var state_41414__$1 = state_41414;
var statearr_41416_41480 = state_41414__$1;
(statearr_41416_41480[(2)] = inst_41410);

(statearr_41416_41480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41415 === (20))){
var state_41414__$1 = state_41414;
var statearr_41417_41481 = state_41414__$1;
(statearr_41417_41481[(2)] = null);

(statearr_41417_41481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41415 === (1))){
var state_41414__$1 = state_41414;
var statearr_41418_41482 = state_41414__$1;
(statearr_41418_41482[(2)] = null);

(statearr_41418_41482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41415 === (4))){
var inst_41379 = (state_41414[(7)]);
var inst_41379__$1 = (state_41414[(2)]);
var inst_41380 = (inst_41379__$1 == null);
var state_41414__$1 = (function (){var statearr_41419 = state_41414;
(statearr_41419[(7)] = inst_41379__$1);

return statearr_41419;
})();
if(cljs.core.truth_(inst_41380)){
var statearr_41420_41483 = state_41414__$1;
(statearr_41420_41483[(1)] = (5));

} else {
var statearr_41421_41484 = state_41414__$1;
(statearr_41421_41484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41415 === (15))){
var inst_41392 = (state_41414[(8)]);
var state_41414__$1 = state_41414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41414__$1,(18),to,inst_41392);
} else {
if((state_val_41415 === (21))){
var inst_41405 = (state_41414[(2)]);
var state_41414__$1 = state_41414;
var statearr_41422_41485 = state_41414__$1;
(statearr_41422_41485[(2)] = inst_41405);

(statearr_41422_41485[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41415 === (13))){
var inst_41407 = (state_41414[(2)]);
var state_41414__$1 = (function (){var statearr_41423 = state_41414;
(statearr_41423[(9)] = inst_41407);

return statearr_41423;
})();
var statearr_41424_41486 = state_41414__$1;
(statearr_41424_41486[(2)] = null);

(statearr_41424_41486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41415 === (6))){
var inst_41379 = (state_41414[(7)]);
var state_41414__$1 = state_41414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41414__$1,(11),inst_41379);
} else {
if((state_val_41415 === (17))){
var inst_41400 = (state_41414[(2)]);
var state_41414__$1 = state_41414;
if(cljs.core.truth_(inst_41400)){
var statearr_41425_41487 = state_41414__$1;
(statearr_41425_41487[(1)] = (19));

} else {
var statearr_41426_41488 = state_41414__$1;
(statearr_41426_41488[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41415 === (3))){
var inst_41412 = (state_41414[(2)]);
var state_41414__$1 = state_41414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41414__$1,inst_41412);
} else {
if((state_val_41415 === (12))){
var inst_41389 = (state_41414[(10)]);
var state_41414__$1 = state_41414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41414__$1,(14),inst_41389);
} else {
if((state_val_41415 === (2))){
var state_41414__$1 = state_41414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41414__$1,(4),results);
} else {
if((state_val_41415 === (19))){
var state_41414__$1 = state_41414;
var statearr_41427_41489 = state_41414__$1;
(statearr_41427_41489[(2)] = null);

(statearr_41427_41489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41415 === (11))){
var inst_41389 = (state_41414[(2)]);
var state_41414__$1 = (function (){var statearr_41428 = state_41414;
(statearr_41428[(10)] = inst_41389);

return statearr_41428;
})();
var statearr_41429_41490 = state_41414__$1;
(statearr_41429_41490[(2)] = null);

(statearr_41429_41490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41415 === (9))){
var state_41414__$1 = state_41414;
var statearr_41430_41491 = state_41414__$1;
(statearr_41430_41491[(2)] = null);

(statearr_41430_41491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41415 === (5))){
var state_41414__$1 = state_41414;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41431_41492 = state_41414__$1;
(statearr_41431_41492[(1)] = (8));

} else {
var statearr_41432_41493 = state_41414__$1;
(statearr_41432_41493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41415 === (14))){
var inst_41392 = (state_41414[(8)]);
var inst_41392__$1 = (state_41414[(2)]);
var inst_41393 = (inst_41392__$1 == null);
var inst_41394 = cljs.core.not.call(null,inst_41393);
var state_41414__$1 = (function (){var statearr_41433 = state_41414;
(statearr_41433[(8)] = inst_41392__$1);

return statearr_41433;
})();
if(inst_41394){
var statearr_41434_41494 = state_41414__$1;
(statearr_41434_41494[(1)] = (15));

} else {
var statearr_41435_41495 = state_41414__$1;
(statearr_41435_41495[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41415 === (16))){
var state_41414__$1 = state_41414;
var statearr_41436_41496 = state_41414__$1;
(statearr_41436_41496[(2)] = false);

(statearr_41436_41496[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41415 === (10))){
var inst_41386 = (state_41414[(2)]);
var state_41414__$1 = state_41414;
var statearr_41437_41497 = state_41414__$1;
(statearr_41437_41497[(2)] = inst_41386);

(statearr_41437_41497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41415 === (18))){
var inst_41397 = (state_41414[(2)]);
var state_41414__$1 = state_41414;
var statearr_41438_41498 = state_41414__$1;
(statearr_41438_41498[(2)] = inst_41397);

(statearr_41438_41498[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41415 === (8))){
var inst_41383 = cljs.core.async.close_BANG_.call(null,to);
var state_41414__$1 = state_41414;
var statearr_41439_41499 = state_41414__$1;
(statearr_41439_41499[(2)] = inst_41383);

(statearr_41439_41499[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____0 = (function (){
var statearr_41440 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41440[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__);

(statearr_41440[(1)] = (1));

return statearr_41440;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____1 = (function (state_41414){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_41414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e41441){if((e41441 instanceof Object)){
var ex__41018__auto__ = e41441;
var statearr_41442_41500 = state_41414;
(statearr_41442_41500[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41501 = state_41414;
state_41414 = G__41501;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__ = function(state_41414){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____1.call(this,state_41414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_41443 = f__41110__auto__.call(null);
(statearr_41443[(6)] = c__41109__auto__);

return statearr_41443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
}));

return c__41109__auto__;
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
var G__41503 = arguments.length;
switch (G__41503) {
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
var G__41506 = arguments.length;
switch (G__41506) {
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
var G__41509 = arguments.length;
switch (G__41509) {
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
var c__41109__auto___41558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_41535){
var state_val_41536 = (state_41535[(1)]);
if((state_val_41536 === (7))){
var inst_41531 = (state_41535[(2)]);
var state_41535__$1 = state_41535;
var statearr_41537_41559 = state_41535__$1;
(statearr_41537_41559[(2)] = inst_41531);

(statearr_41537_41559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41536 === (1))){
var state_41535__$1 = state_41535;
var statearr_41538_41560 = state_41535__$1;
(statearr_41538_41560[(2)] = null);

(statearr_41538_41560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41536 === (4))){
var inst_41512 = (state_41535[(7)]);
var inst_41512__$1 = (state_41535[(2)]);
var inst_41513 = (inst_41512__$1 == null);
var state_41535__$1 = (function (){var statearr_41539 = state_41535;
(statearr_41539[(7)] = inst_41512__$1);

return statearr_41539;
})();
if(cljs.core.truth_(inst_41513)){
var statearr_41540_41561 = state_41535__$1;
(statearr_41540_41561[(1)] = (5));

} else {
var statearr_41541_41562 = state_41535__$1;
(statearr_41541_41562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41536 === (13))){
var state_41535__$1 = state_41535;
var statearr_41542_41563 = state_41535__$1;
(statearr_41542_41563[(2)] = null);

(statearr_41542_41563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41536 === (6))){
var inst_41512 = (state_41535[(7)]);
var inst_41518 = p.call(null,inst_41512);
var state_41535__$1 = state_41535;
if(cljs.core.truth_(inst_41518)){
var statearr_41543_41564 = state_41535__$1;
(statearr_41543_41564[(1)] = (9));

} else {
var statearr_41544_41565 = state_41535__$1;
(statearr_41544_41565[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41536 === (3))){
var inst_41533 = (state_41535[(2)]);
var state_41535__$1 = state_41535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41535__$1,inst_41533);
} else {
if((state_val_41536 === (12))){
var state_41535__$1 = state_41535;
var statearr_41545_41566 = state_41535__$1;
(statearr_41545_41566[(2)] = null);

(statearr_41545_41566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41536 === (2))){
var state_41535__$1 = state_41535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41535__$1,(4),ch);
} else {
if((state_val_41536 === (11))){
var inst_41512 = (state_41535[(7)]);
var inst_41522 = (state_41535[(2)]);
var state_41535__$1 = state_41535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41535__$1,(8),inst_41522,inst_41512);
} else {
if((state_val_41536 === (9))){
var state_41535__$1 = state_41535;
var statearr_41546_41567 = state_41535__$1;
(statearr_41546_41567[(2)] = tc);

(statearr_41546_41567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41536 === (5))){
var inst_41515 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41516 = cljs.core.async.close_BANG_.call(null,fc);
var state_41535__$1 = (function (){var statearr_41547 = state_41535;
(statearr_41547[(8)] = inst_41515);

return statearr_41547;
})();
var statearr_41548_41568 = state_41535__$1;
(statearr_41548_41568[(2)] = inst_41516);

(statearr_41548_41568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41536 === (14))){
var inst_41529 = (state_41535[(2)]);
var state_41535__$1 = state_41535;
var statearr_41549_41569 = state_41535__$1;
(statearr_41549_41569[(2)] = inst_41529);

(statearr_41549_41569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41536 === (10))){
var state_41535__$1 = state_41535;
var statearr_41550_41570 = state_41535__$1;
(statearr_41550_41570[(2)] = fc);

(statearr_41550_41570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41536 === (8))){
var inst_41524 = (state_41535[(2)]);
var state_41535__$1 = state_41535;
if(cljs.core.truth_(inst_41524)){
var statearr_41551_41571 = state_41535__$1;
(statearr_41551_41571[(1)] = (12));

} else {
var statearr_41552_41572 = state_41535__$1;
(statearr_41552_41572[(1)] = (13));

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
var cljs$core$async$state_machine__41015__auto__ = null;
var cljs$core$async$state_machine__41015__auto____0 = (function (){
var statearr_41553 = [null,null,null,null,null,null,null,null,null];
(statearr_41553[(0)] = cljs$core$async$state_machine__41015__auto__);

(statearr_41553[(1)] = (1));

return statearr_41553;
});
var cljs$core$async$state_machine__41015__auto____1 = (function (state_41535){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_41535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e41554){if((e41554 instanceof Object)){
var ex__41018__auto__ = e41554;
var statearr_41555_41573 = state_41535;
(statearr_41555_41573[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41574 = state_41535;
state_41535 = G__41574;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$state_machine__41015__auto__ = function(state_41535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41015__auto____1.call(this,state_41535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41015__auto____0;
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41015__auto____1;
return cljs$core$async$state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_41556 = f__41110__auto__.call(null);
(statearr_41556[(6)] = c__41109__auto___41558);

return statearr_41556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
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
var c__41109__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_41595){
var state_val_41596 = (state_41595[(1)]);
if((state_val_41596 === (7))){
var inst_41591 = (state_41595[(2)]);
var state_41595__$1 = state_41595;
var statearr_41597_41615 = state_41595__$1;
(statearr_41597_41615[(2)] = inst_41591);

(statearr_41597_41615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41596 === (1))){
var inst_41575 = init;
var state_41595__$1 = (function (){var statearr_41598 = state_41595;
(statearr_41598[(7)] = inst_41575);

return statearr_41598;
})();
var statearr_41599_41616 = state_41595__$1;
(statearr_41599_41616[(2)] = null);

(statearr_41599_41616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41596 === (4))){
var inst_41578 = (state_41595[(8)]);
var inst_41578__$1 = (state_41595[(2)]);
var inst_41579 = (inst_41578__$1 == null);
var state_41595__$1 = (function (){var statearr_41600 = state_41595;
(statearr_41600[(8)] = inst_41578__$1);

return statearr_41600;
})();
if(cljs.core.truth_(inst_41579)){
var statearr_41601_41617 = state_41595__$1;
(statearr_41601_41617[(1)] = (5));

} else {
var statearr_41602_41618 = state_41595__$1;
(statearr_41602_41618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41596 === (6))){
var inst_41582 = (state_41595[(9)]);
var inst_41575 = (state_41595[(7)]);
var inst_41578 = (state_41595[(8)]);
var inst_41582__$1 = f.call(null,inst_41575,inst_41578);
var inst_41583 = cljs.core.reduced_QMARK_.call(null,inst_41582__$1);
var state_41595__$1 = (function (){var statearr_41603 = state_41595;
(statearr_41603[(9)] = inst_41582__$1);

return statearr_41603;
})();
if(inst_41583){
var statearr_41604_41619 = state_41595__$1;
(statearr_41604_41619[(1)] = (8));

} else {
var statearr_41605_41620 = state_41595__$1;
(statearr_41605_41620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41596 === (3))){
var inst_41593 = (state_41595[(2)]);
var state_41595__$1 = state_41595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41595__$1,inst_41593);
} else {
if((state_val_41596 === (2))){
var state_41595__$1 = state_41595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41595__$1,(4),ch);
} else {
if((state_val_41596 === (9))){
var inst_41582 = (state_41595[(9)]);
var inst_41575 = inst_41582;
var state_41595__$1 = (function (){var statearr_41606 = state_41595;
(statearr_41606[(7)] = inst_41575);

return statearr_41606;
})();
var statearr_41607_41621 = state_41595__$1;
(statearr_41607_41621[(2)] = null);

(statearr_41607_41621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41596 === (5))){
var inst_41575 = (state_41595[(7)]);
var state_41595__$1 = state_41595;
var statearr_41608_41622 = state_41595__$1;
(statearr_41608_41622[(2)] = inst_41575);

(statearr_41608_41622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41596 === (10))){
var inst_41589 = (state_41595[(2)]);
var state_41595__$1 = state_41595;
var statearr_41609_41623 = state_41595__$1;
(statearr_41609_41623[(2)] = inst_41589);

(statearr_41609_41623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41596 === (8))){
var inst_41582 = (state_41595[(9)]);
var inst_41585 = cljs.core.deref.call(null,inst_41582);
var state_41595__$1 = state_41595;
var statearr_41610_41624 = state_41595__$1;
(statearr_41610_41624[(2)] = inst_41585);

(statearr_41610_41624[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__41015__auto__ = null;
var cljs$core$async$reduce_$_state_machine__41015__auto____0 = (function (){
var statearr_41611 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41611[(0)] = cljs$core$async$reduce_$_state_machine__41015__auto__);

(statearr_41611[(1)] = (1));

return statearr_41611;
});
var cljs$core$async$reduce_$_state_machine__41015__auto____1 = (function (state_41595){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_41595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e41612){if((e41612 instanceof Object)){
var ex__41018__auto__ = e41612;
var statearr_41613_41625 = state_41595;
(statearr_41613_41625[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41626 = state_41595;
state_41595 = G__41626;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__41015__auto__ = function(state_41595){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__41015__auto____1.call(this,state_41595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__41015__auto____0;
cljs$core$async$reduce_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__41015__auto____1;
return cljs$core$async$reduce_$_state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_41614 = f__41110__auto__.call(null);
(statearr_41614[(6)] = c__41109__auto__);

return statearr_41614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
}));

return c__41109__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__41109__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_41632){
var state_val_41633 = (state_41632[(1)]);
if((state_val_41633 === (1))){
var inst_41627 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_41632__$1 = state_41632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41632__$1,(2),inst_41627);
} else {
if((state_val_41633 === (2))){
var inst_41629 = (state_41632[(2)]);
var inst_41630 = f__$1.call(null,inst_41629);
var state_41632__$1 = state_41632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41632__$1,inst_41630);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__41015__auto__ = null;
var cljs$core$async$transduce_$_state_machine__41015__auto____0 = (function (){
var statearr_41634 = [null,null,null,null,null,null,null];
(statearr_41634[(0)] = cljs$core$async$transduce_$_state_machine__41015__auto__);

(statearr_41634[(1)] = (1));

return statearr_41634;
});
var cljs$core$async$transduce_$_state_machine__41015__auto____1 = (function (state_41632){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_41632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e41635){if((e41635 instanceof Object)){
var ex__41018__auto__ = e41635;
var statearr_41636_41638 = state_41632;
(statearr_41636_41638[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41639 = state_41632;
state_41632 = G__41639;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__41015__auto__ = function(state_41632){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__41015__auto____1.call(this,state_41632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__41015__auto____0;
cljs$core$async$transduce_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__41015__auto____1;
return cljs$core$async$transduce_$_state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_41637 = f__41110__auto__.call(null);
(statearr_41637[(6)] = c__41109__auto__);

return statearr_41637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
}));

return c__41109__auto__;
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
var G__41641 = arguments.length;
switch (G__41641) {
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
var c__41109__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_41666){
var state_val_41667 = (state_41666[(1)]);
if((state_val_41667 === (7))){
var inst_41648 = (state_41666[(2)]);
var state_41666__$1 = state_41666;
var statearr_41668_41689 = state_41666__$1;
(statearr_41668_41689[(2)] = inst_41648);

(statearr_41668_41689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41667 === (1))){
var inst_41642 = cljs.core.seq.call(null,coll);
var inst_41643 = inst_41642;
var state_41666__$1 = (function (){var statearr_41669 = state_41666;
(statearr_41669[(7)] = inst_41643);

return statearr_41669;
})();
var statearr_41670_41690 = state_41666__$1;
(statearr_41670_41690[(2)] = null);

(statearr_41670_41690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41667 === (4))){
var inst_41643 = (state_41666[(7)]);
var inst_41646 = cljs.core.first.call(null,inst_41643);
var state_41666__$1 = state_41666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41666__$1,(7),ch,inst_41646);
} else {
if((state_val_41667 === (13))){
var inst_41660 = (state_41666[(2)]);
var state_41666__$1 = state_41666;
var statearr_41671_41691 = state_41666__$1;
(statearr_41671_41691[(2)] = inst_41660);

(statearr_41671_41691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41667 === (6))){
var inst_41651 = (state_41666[(2)]);
var state_41666__$1 = state_41666;
if(cljs.core.truth_(inst_41651)){
var statearr_41672_41692 = state_41666__$1;
(statearr_41672_41692[(1)] = (8));

} else {
var statearr_41673_41693 = state_41666__$1;
(statearr_41673_41693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41667 === (3))){
var inst_41664 = (state_41666[(2)]);
var state_41666__$1 = state_41666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41666__$1,inst_41664);
} else {
if((state_val_41667 === (12))){
var state_41666__$1 = state_41666;
var statearr_41674_41694 = state_41666__$1;
(statearr_41674_41694[(2)] = null);

(statearr_41674_41694[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41667 === (2))){
var inst_41643 = (state_41666[(7)]);
var state_41666__$1 = state_41666;
if(cljs.core.truth_(inst_41643)){
var statearr_41675_41695 = state_41666__$1;
(statearr_41675_41695[(1)] = (4));

} else {
var statearr_41676_41696 = state_41666__$1;
(statearr_41676_41696[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41667 === (11))){
var inst_41657 = cljs.core.async.close_BANG_.call(null,ch);
var state_41666__$1 = state_41666;
var statearr_41677_41697 = state_41666__$1;
(statearr_41677_41697[(2)] = inst_41657);

(statearr_41677_41697[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41667 === (9))){
var state_41666__$1 = state_41666;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41678_41698 = state_41666__$1;
(statearr_41678_41698[(1)] = (11));

} else {
var statearr_41679_41699 = state_41666__$1;
(statearr_41679_41699[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41667 === (5))){
var inst_41643 = (state_41666[(7)]);
var state_41666__$1 = state_41666;
var statearr_41680_41700 = state_41666__$1;
(statearr_41680_41700[(2)] = inst_41643);

(statearr_41680_41700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41667 === (10))){
var inst_41662 = (state_41666[(2)]);
var state_41666__$1 = state_41666;
var statearr_41681_41701 = state_41666__$1;
(statearr_41681_41701[(2)] = inst_41662);

(statearr_41681_41701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41667 === (8))){
var inst_41643 = (state_41666[(7)]);
var inst_41653 = cljs.core.next.call(null,inst_41643);
var inst_41643__$1 = inst_41653;
var state_41666__$1 = (function (){var statearr_41682 = state_41666;
(statearr_41682[(7)] = inst_41643__$1);

return statearr_41682;
})();
var statearr_41683_41702 = state_41666__$1;
(statearr_41683_41702[(2)] = null);

(statearr_41683_41702[(1)] = (2));


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
var cljs$core$async$state_machine__41015__auto__ = null;
var cljs$core$async$state_machine__41015__auto____0 = (function (){
var statearr_41684 = [null,null,null,null,null,null,null,null];
(statearr_41684[(0)] = cljs$core$async$state_machine__41015__auto__);

(statearr_41684[(1)] = (1));

return statearr_41684;
});
var cljs$core$async$state_machine__41015__auto____1 = (function (state_41666){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_41666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e41685){if((e41685 instanceof Object)){
var ex__41018__auto__ = e41685;
var statearr_41686_41703 = state_41666;
(statearr_41686_41703[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41704 = state_41666;
state_41666 = G__41704;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$state_machine__41015__auto__ = function(state_41666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41015__auto____1.call(this,state_41666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41015__auto____0;
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41015__auto____1;
return cljs$core$async$state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_41687 = f__41110__auto__.call(null);
(statearr_41687[(6)] = c__41109__auto__);

return statearr_41687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
}));

return c__41109__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_41705 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_41705.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_41706 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_41706.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_41707 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_41707.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_41708 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_41708.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41709 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41709 = (function (ch,cs,meta41710){
this.ch = ch;
this.cs = cs;
this.meta41710 = meta41710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41711,meta41710__$1){
var self__ = this;
var _41711__$1 = this;
return (new cljs.core.async.t_cljs$core$async41709(self__.ch,self__.cs,meta41710__$1));
}));

(cljs.core.async.t_cljs$core$async41709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41711){
var self__ = this;
var _41711__$1 = this;
return self__.meta41710;
}));

(cljs.core.async.t_cljs$core$async41709.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41709.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41709.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41709.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async41709.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async41709.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async41709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41710","meta41710",-1101037659,null)], null);
}));

(cljs.core.async.t_cljs$core$async41709.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41709");

(cljs.core.async.t_cljs$core$async41709.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async41709");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41709.
 */
cljs.core.async.__GT_t_cljs$core$async41709 = (function cljs$core$async$mult_$___GT_t_cljs$core$async41709(ch__$1,cs__$1,meta41710){
return (new cljs.core.async.t_cljs$core$async41709(ch__$1,cs__$1,meta41710));
});

}

return (new cljs.core.async.t_cljs$core$async41709(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__41109__auto___41931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_41846){
var state_val_41847 = (state_41846[(1)]);
if((state_val_41847 === (7))){
var inst_41842 = (state_41846[(2)]);
var state_41846__$1 = state_41846;
var statearr_41848_41932 = state_41846__$1;
(statearr_41848_41932[(2)] = inst_41842);

(statearr_41848_41932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (20))){
var inst_41745 = (state_41846[(7)]);
var inst_41757 = cljs.core.first.call(null,inst_41745);
var inst_41758 = cljs.core.nth.call(null,inst_41757,(0),null);
var inst_41759 = cljs.core.nth.call(null,inst_41757,(1),null);
var state_41846__$1 = (function (){var statearr_41849 = state_41846;
(statearr_41849[(8)] = inst_41758);

return statearr_41849;
})();
if(cljs.core.truth_(inst_41759)){
var statearr_41850_41933 = state_41846__$1;
(statearr_41850_41933[(1)] = (22));

} else {
var statearr_41851_41934 = state_41846__$1;
(statearr_41851_41934[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (27))){
var inst_41787 = (state_41846[(9)]);
var inst_41794 = (state_41846[(10)]);
var inst_41714 = (state_41846[(11)]);
var inst_41789 = (state_41846[(12)]);
var inst_41794__$1 = cljs.core._nth.call(null,inst_41787,inst_41789);
var inst_41795 = cljs.core.async.put_BANG_.call(null,inst_41794__$1,inst_41714,done);
var state_41846__$1 = (function (){var statearr_41852 = state_41846;
(statearr_41852[(10)] = inst_41794__$1);

return statearr_41852;
})();
if(cljs.core.truth_(inst_41795)){
var statearr_41853_41935 = state_41846__$1;
(statearr_41853_41935[(1)] = (30));

} else {
var statearr_41854_41936 = state_41846__$1;
(statearr_41854_41936[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (1))){
var state_41846__$1 = state_41846;
var statearr_41855_41937 = state_41846__$1;
(statearr_41855_41937[(2)] = null);

(statearr_41855_41937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (24))){
var inst_41745 = (state_41846[(7)]);
var inst_41764 = (state_41846[(2)]);
var inst_41765 = cljs.core.next.call(null,inst_41745);
var inst_41723 = inst_41765;
var inst_41724 = null;
var inst_41725 = (0);
var inst_41726 = (0);
var state_41846__$1 = (function (){var statearr_41856 = state_41846;
(statearr_41856[(13)] = inst_41725);

(statearr_41856[(14)] = inst_41723);

(statearr_41856[(15)] = inst_41726);

(statearr_41856[(16)] = inst_41764);

(statearr_41856[(17)] = inst_41724);

return statearr_41856;
})();
var statearr_41857_41938 = state_41846__$1;
(statearr_41857_41938[(2)] = null);

(statearr_41857_41938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (39))){
var state_41846__$1 = state_41846;
var statearr_41861_41939 = state_41846__$1;
(statearr_41861_41939[(2)] = null);

(statearr_41861_41939[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (4))){
var inst_41714 = (state_41846[(11)]);
var inst_41714__$1 = (state_41846[(2)]);
var inst_41715 = (inst_41714__$1 == null);
var state_41846__$1 = (function (){var statearr_41862 = state_41846;
(statearr_41862[(11)] = inst_41714__$1);

return statearr_41862;
})();
if(cljs.core.truth_(inst_41715)){
var statearr_41863_41940 = state_41846__$1;
(statearr_41863_41940[(1)] = (5));

} else {
var statearr_41864_41941 = state_41846__$1;
(statearr_41864_41941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (15))){
var inst_41725 = (state_41846[(13)]);
var inst_41723 = (state_41846[(14)]);
var inst_41726 = (state_41846[(15)]);
var inst_41724 = (state_41846[(17)]);
var inst_41741 = (state_41846[(2)]);
var inst_41742 = (inst_41726 + (1));
var tmp41858 = inst_41725;
var tmp41859 = inst_41723;
var tmp41860 = inst_41724;
var inst_41723__$1 = tmp41859;
var inst_41724__$1 = tmp41860;
var inst_41725__$1 = tmp41858;
var inst_41726__$1 = inst_41742;
var state_41846__$1 = (function (){var statearr_41865 = state_41846;
(statearr_41865[(13)] = inst_41725__$1);

(statearr_41865[(14)] = inst_41723__$1);

(statearr_41865[(18)] = inst_41741);

(statearr_41865[(15)] = inst_41726__$1);

(statearr_41865[(17)] = inst_41724__$1);

return statearr_41865;
})();
var statearr_41866_41942 = state_41846__$1;
(statearr_41866_41942[(2)] = null);

(statearr_41866_41942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (21))){
var inst_41768 = (state_41846[(2)]);
var state_41846__$1 = state_41846;
var statearr_41870_41943 = state_41846__$1;
(statearr_41870_41943[(2)] = inst_41768);

(statearr_41870_41943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (31))){
var inst_41794 = (state_41846[(10)]);
var inst_41798 = done.call(null,null);
var inst_41799 = cljs.core.async.untap_STAR_.call(null,m,inst_41794);
var state_41846__$1 = (function (){var statearr_41871 = state_41846;
(statearr_41871[(19)] = inst_41798);

return statearr_41871;
})();
var statearr_41872_41944 = state_41846__$1;
(statearr_41872_41944[(2)] = inst_41799);

(statearr_41872_41944[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (32))){
var inst_41787 = (state_41846[(9)]);
var inst_41786 = (state_41846[(20)]);
var inst_41788 = (state_41846[(21)]);
var inst_41789 = (state_41846[(12)]);
var inst_41801 = (state_41846[(2)]);
var inst_41802 = (inst_41789 + (1));
var tmp41867 = inst_41787;
var tmp41868 = inst_41786;
var tmp41869 = inst_41788;
var inst_41786__$1 = tmp41868;
var inst_41787__$1 = tmp41867;
var inst_41788__$1 = tmp41869;
var inst_41789__$1 = inst_41802;
var state_41846__$1 = (function (){var statearr_41873 = state_41846;
(statearr_41873[(9)] = inst_41787__$1);

(statearr_41873[(22)] = inst_41801);

(statearr_41873[(20)] = inst_41786__$1);

(statearr_41873[(21)] = inst_41788__$1);

(statearr_41873[(12)] = inst_41789__$1);

return statearr_41873;
})();
var statearr_41874_41945 = state_41846__$1;
(statearr_41874_41945[(2)] = null);

(statearr_41874_41945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (40))){
var inst_41814 = (state_41846[(23)]);
var inst_41818 = done.call(null,null);
var inst_41819 = cljs.core.async.untap_STAR_.call(null,m,inst_41814);
var state_41846__$1 = (function (){var statearr_41875 = state_41846;
(statearr_41875[(24)] = inst_41818);

return statearr_41875;
})();
var statearr_41876_41946 = state_41846__$1;
(statearr_41876_41946[(2)] = inst_41819);

(statearr_41876_41946[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (33))){
var inst_41805 = (state_41846[(25)]);
var inst_41807 = cljs.core.chunked_seq_QMARK_.call(null,inst_41805);
var state_41846__$1 = state_41846;
if(inst_41807){
var statearr_41877_41947 = state_41846__$1;
(statearr_41877_41947[(1)] = (36));

} else {
var statearr_41878_41948 = state_41846__$1;
(statearr_41878_41948[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (13))){
var inst_41735 = (state_41846[(26)]);
var inst_41738 = cljs.core.async.close_BANG_.call(null,inst_41735);
var state_41846__$1 = state_41846;
var statearr_41879_41949 = state_41846__$1;
(statearr_41879_41949[(2)] = inst_41738);

(statearr_41879_41949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (22))){
var inst_41758 = (state_41846[(8)]);
var inst_41761 = cljs.core.async.close_BANG_.call(null,inst_41758);
var state_41846__$1 = state_41846;
var statearr_41880_41950 = state_41846__$1;
(statearr_41880_41950[(2)] = inst_41761);

(statearr_41880_41950[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (36))){
var inst_41805 = (state_41846[(25)]);
var inst_41809 = cljs.core.chunk_first.call(null,inst_41805);
var inst_41810 = cljs.core.chunk_rest.call(null,inst_41805);
var inst_41811 = cljs.core.count.call(null,inst_41809);
var inst_41786 = inst_41810;
var inst_41787 = inst_41809;
var inst_41788 = inst_41811;
var inst_41789 = (0);
var state_41846__$1 = (function (){var statearr_41881 = state_41846;
(statearr_41881[(9)] = inst_41787);

(statearr_41881[(20)] = inst_41786);

(statearr_41881[(21)] = inst_41788);

(statearr_41881[(12)] = inst_41789);

return statearr_41881;
})();
var statearr_41882_41951 = state_41846__$1;
(statearr_41882_41951[(2)] = null);

(statearr_41882_41951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (41))){
var inst_41805 = (state_41846[(25)]);
var inst_41821 = (state_41846[(2)]);
var inst_41822 = cljs.core.next.call(null,inst_41805);
var inst_41786 = inst_41822;
var inst_41787 = null;
var inst_41788 = (0);
var inst_41789 = (0);
var state_41846__$1 = (function (){var statearr_41883 = state_41846;
(statearr_41883[(9)] = inst_41787);

(statearr_41883[(20)] = inst_41786);

(statearr_41883[(21)] = inst_41788);

(statearr_41883[(12)] = inst_41789);

(statearr_41883[(27)] = inst_41821);

return statearr_41883;
})();
var statearr_41884_41952 = state_41846__$1;
(statearr_41884_41952[(2)] = null);

(statearr_41884_41952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (43))){
var state_41846__$1 = state_41846;
var statearr_41885_41953 = state_41846__$1;
(statearr_41885_41953[(2)] = null);

(statearr_41885_41953[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (29))){
var inst_41830 = (state_41846[(2)]);
var state_41846__$1 = state_41846;
var statearr_41886_41954 = state_41846__$1;
(statearr_41886_41954[(2)] = inst_41830);

(statearr_41886_41954[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (44))){
var inst_41839 = (state_41846[(2)]);
var state_41846__$1 = (function (){var statearr_41887 = state_41846;
(statearr_41887[(28)] = inst_41839);

return statearr_41887;
})();
var statearr_41888_41955 = state_41846__$1;
(statearr_41888_41955[(2)] = null);

(statearr_41888_41955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (6))){
var inst_41778 = (state_41846[(29)]);
var inst_41777 = cljs.core.deref.call(null,cs);
var inst_41778__$1 = cljs.core.keys.call(null,inst_41777);
var inst_41779 = cljs.core.count.call(null,inst_41778__$1);
var inst_41780 = cljs.core.reset_BANG_.call(null,dctr,inst_41779);
var inst_41785 = cljs.core.seq.call(null,inst_41778__$1);
var inst_41786 = inst_41785;
var inst_41787 = null;
var inst_41788 = (0);
var inst_41789 = (0);
var state_41846__$1 = (function (){var statearr_41889 = state_41846;
(statearr_41889[(30)] = inst_41780);

(statearr_41889[(9)] = inst_41787);

(statearr_41889[(29)] = inst_41778__$1);

(statearr_41889[(20)] = inst_41786);

(statearr_41889[(21)] = inst_41788);

(statearr_41889[(12)] = inst_41789);

return statearr_41889;
})();
var statearr_41890_41956 = state_41846__$1;
(statearr_41890_41956[(2)] = null);

(statearr_41890_41956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (28))){
var inst_41805 = (state_41846[(25)]);
var inst_41786 = (state_41846[(20)]);
var inst_41805__$1 = cljs.core.seq.call(null,inst_41786);
var state_41846__$1 = (function (){var statearr_41891 = state_41846;
(statearr_41891[(25)] = inst_41805__$1);

return statearr_41891;
})();
if(inst_41805__$1){
var statearr_41892_41957 = state_41846__$1;
(statearr_41892_41957[(1)] = (33));

} else {
var statearr_41893_41958 = state_41846__$1;
(statearr_41893_41958[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (25))){
var inst_41788 = (state_41846[(21)]);
var inst_41789 = (state_41846[(12)]);
var inst_41791 = (inst_41789 < inst_41788);
var inst_41792 = inst_41791;
var state_41846__$1 = state_41846;
if(cljs.core.truth_(inst_41792)){
var statearr_41894_41959 = state_41846__$1;
(statearr_41894_41959[(1)] = (27));

} else {
var statearr_41895_41960 = state_41846__$1;
(statearr_41895_41960[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (34))){
var state_41846__$1 = state_41846;
var statearr_41896_41961 = state_41846__$1;
(statearr_41896_41961[(2)] = null);

(statearr_41896_41961[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (17))){
var state_41846__$1 = state_41846;
var statearr_41897_41962 = state_41846__$1;
(statearr_41897_41962[(2)] = null);

(statearr_41897_41962[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (3))){
var inst_41844 = (state_41846[(2)]);
var state_41846__$1 = state_41846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41846__$1,inst_41844);
} else {
if((state_val_41847 === (12))){
var inst_41773 = (state_41846[(2)]);
var state_41846__$1 = state_41846;
var statearr_41898_41963 = state_41846__$1;
(statearr_41898_41963[(2)] = inst_41773);

(statearr_41898_41963[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (2))){
var state_41846__$1 = state_41846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41846__$1,(4),ch);
} else {
if((state_val_41847 === (23))){
var state_41846__$1 = state_41846;
var statearr_41899_41964 = state_41846__$1;
(statearr_41899_41964[(2)] = null);

(statearr_41899_41964[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (35))){
var inst_41828 = (state_41846[(2)]);
var state_41846__$1 = state_41846;
var statearr_41900_41965 = state_41846__$1;
(statearr_41900_41965[(2)] = inst_41828);

(statearr_41900_41965[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (19))){
var inst_41745 = (state_41846[(7)]);
var inst_41749 = cljs.core.chunk_first.call(null,inst_41745);
var inst_41750 = cljs.core.chunk_rest.call(null,inst_41745);
var inst_41751 = cljs.core.count.call(null,inst_41749);
var inst_41723 = inst_41750;
var inst_41724 = inst_41749;
var inst_41725 = inst_41751;
var inst_41726 = (0);
var state_41846__$1 = (function (){var statearr_41901 = state_41846;
(statearr_41901[(13)] = inst_41725);

(statearr_41901[(14)] = inst_41723);

(statearr_41901[(15)] = inst_41726);

(statearr_41901[(17)] = inst_41724);

return statearr_41901;
})();
var statearr_41902_41966 = state_41846__$1;
(statearr_41902_41966[(2)] = null);

(statearr_41902_41966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (11))){
var inst_41723 = (state_41846[(14)]);
var inst_41745 = (state_41846[(7)]);
var inst_41745__$1 = cljs.core.seq.call(null,inst_41723);
var state_41846__$1 = (function (){var statearr_41903 = state_41846;
(statearr_41903[(7)] = inst_41745__$1);

return statearr_41903;
})();
if(inst_41745__$1){
var statearr_41904_41967 = state_41846__$1;
(statearr_41904_41967[(1)] = (16));

} else {
var statearr_41905_41968 = state_41846__$1;
(statearr_41905_41968[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (9))){
var inst_41775 = (state_41846[(2)]);
var state_41846__$1 = state_41846;
var statearr_41906_41969 = state_41846__$1;
(statearr_41906_41969[(2)] = inst_41775);

(statearr_41906_41969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (5))){
var inst_41721 = cljs.core.deref.call(null,cs);
var inst_41722 = cljs.core.seq.call(null,inst_41721);
var inst_41723 = inst_41722;
var inst_41724 = null;
var inst_41725 = (0);
var inst_41726 = (0);
var state_41846__$1 = (function (){var statearr_41907 = state_41846;
(statearr_41907[(13)] = inst_41725);

(statearr_41907[(14)] = inst_41723);

(statearr_41907[(15)] = inst_41726);

(statearr_41907[(17)] = inst_41724);

return statearr_41907;
})();
var statearr_41908_41970 = state_41846__$1;
(statearr_41908_41970[(2)] = null);

(statearr_41908_41970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (14))){
var state_41846__$1 = state_41846;
var statearr_41909_41971 = state_41846__$1;
(statearr_41909_41971[(2)] = null);

(statearr_41909_41971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (45))){
var inst_41836 = (state_41846[(2)]);
var state_41846__$1 = state_41846;
var statearr_41910_41972 = state_41846__$1;
(statearr_41910_41972[(2)] = inst_41836);

(statearr_41910_41972[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (26))){
var inst_41778 = (state_41846[(29)]);
var inst_41832 = (state_41846[(2)]);
var inst_41833 = cljs.core.seq.call(null,inst_41778);
var state_41846__$1 = (function (){var statearr_41911 = state_41846;
(statearr_41911[(31)] = inst_41832);

return statearr_41911;
})();
if(inst_41833){
var statearr_41912_41973 = state_41846__$1;
(statearr_41912_41973[(1)] = (42));

} else {
var statearr_41913_41974 = state_41846__$1;
(statearr_41913_41974[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (16))){
var inst_41745 = (state_41846[(7)]);
var inst_41747 = cljs.core.chunked_seq_QMARK_.call(null,inst_41745);
var state_41846__$1 = state_41846;
if(inst_41747){
var statearr_41914_41975 = state_41846__$1;
(statearr_41914_41975[(1)] = (19));

} else {
var statearr_41915_41976 = state_41846__$1;
(statearr_41915_41976[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (38))){
var inst_41825 = (state_41846[(2)]);
var state_41846__$1 = state_41846;
var statearr_41916_41977 = state_41846__$1;
(statearr_41916_41977[(2)] = inst_41825);

(statearr_41916_41977[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (30))){
var state_41846__$1 = state_41846;
var statearr_41917_41978 = state_41846__$1;
(statearr_41917_41978[(2)] = null);

(statearr_41917_41978[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (10))){
var inst_41726 = (state_41846[(15)]);
var inst_41724 = (state_41846[(17)]);
var inst_41734 = cljs.core._nth.call(null,inst_41724,inst_41726);
var inst_41735 = cljs.core.nth.call(null,inst_41734,(0),null);
var inst_41736 = cljs.core.nth.call(null,inst_41734,(1),null);
var state_41846__$1 = (function (){var statearr_41918 = state_41846;
(statearr_41918[(26)] = inst_41735);

return statearr_41918;
})();
if(cljs.core.truth_(inst_41736)){
var statearr_41919_41979 = state_41846__$1;
(statearr_41919_41979[(1)] = (13));

} else {
var statearr_41920_41980 = state_41846__$1;
(statearr_41920_41980[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (18))){
var inst_41771 = (state_41846[(2)]);
var state_41846__$1 = state_41846;
var statearr_41921_41981 = state_41846__$1;
(statearr_41921_41981[(2)] = inst_41771);

(statearr_41921_41981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (42))){
var state_41846__$1 = state_41846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41846__$1,(45),dchan);
} else {
if((state_val_41847 === (37))){
var inst_41805 = (state_41846[(25)]);
var inst_41814 = (state_41846[(23)]);
var inst_41714 = (state_41846[(11)]);
var inst_41814__$1 = cljs.core.first.call(null,inst_41805);
var inst_41815 = cljs.core.async.put_BANG_.call(null,inst_41814__$1,inst_41714,done);
var state_41846__$1 = (function (){var statearr_41922 = state_41846;
(statearr_41922[(23)] = inst_41814__$1);

return statearr_41922;
})();
if(cljs.core.truth_(inst_41815)){
var statearr_41923_41982 = state_41846__$1;
(statearr_41923_41982[(1)] = (39));

} else {
var statearr_41924_41983 = state_41846__$1;
(statearr_41924_41983[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41847 === (8))){
var inst_41725 = (state_41846[(13)]);
var inst_41726 = (state_41846[(15)]);
var inst_41728 = (inst_41726 < inst_41725);
var inst_41729 = inst_41728;
var state_41846__$1 = state_41846;
if(cljs.core.truth_(inst_41729)){
var statearr_41925_41984 = state_41846__$1;
(statearr_41925_41984[(1)] = (10));

} else {
var statearr_41926_41985 = state_41846__$1;
(statearr_41926_41985[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__41015__auto__ = null;
var cljs$core$async$mult_$_state_machine__41015__auto____0 = (function (){
var statearr_41927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41927[(0)] = cljs$core$async$mult_$_state_machine__41015__auto__);

(statearr_41927[(1)] = (1));

return statearr_41927;
});
var cljs$core$async$mult_$_state_machine__41015__auto____1 = (function (state_41846){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_41846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e41928){if((e41928 instanceof Object)){
var ex__41018__auto__ = e41928;
var statearr_41929_41986 = state_41846;
(statearr_41929_41986[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41987 = state_41846;
state_41846 = G__41987;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__41015__auto__ = function(state_41846){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__41015__auto____1.call(this,state_41846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__41015__auto____0;
cljs$core$async$mult_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__41015__auto____1;
return cljs$core$async$mult_$_state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_41930 = f__41110__auto__.call(null);
(statearr_41930[(6)] = c__41109__auto___41931);

return statearr_41930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
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
var G__41989 = arguments.length;
switch (G__41989) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_41991 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_41991.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_41992 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_41992.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_41993 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_41993.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_41994 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_41994.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_41995 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_41995.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42006 = arguments.length;
var i__4737__auto___42007 = (0);
while(true){
if((i__4737__auto___42007 < len__4736__auto___42006)){
args__4742__auto__.push((arguments[i__4737__auto___42007]));

var G__42008 = (i__4737__auto___42007 + (1));
i__4737__auto___42007 = G__42008;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42000){
var map__42001 = p__42000;
var map__42001__$1 = (((((!((map__42001 == null))))?(((((map__42001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42001):map__42001);
var opts = map__42001__$1;
var statearr_42003_42009 = state;
(statearr_42003_42009[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_42004_42010 = state;
(statearr_42004_42010[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_42005_42011 = state;
(statearr_42005_42011[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41996){
var G__41997 = cljs.core.first.call(null,seq41996);
var seq41996__$1 = cljs.core.next.call(null,seq41996);
var G__41998 = cljs.core.first.call(null,seq41996__$1);
var seq41996__$2 = cljs.core.next.call(null,seq41996__$1);
var G__41999 = cljs.core.first.call(null,seq41996__$2);
var seq41996__$3 = cljs.core.next.call(null,seq41996__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41997,G__41998,G__41999,seq41996__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42012 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42012 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42013){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta42013 = meta42013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42014,meta42013__$1){
var self__ = this;
var _42014__$1 = this;
return (new cljs.core.async.t_cljs$core$async42012(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42013__$1));
}));

(cljs.core.async.t_cljs$core$async42012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42014){
var self__ = this;
var _42014__$1 = this;
return self__.meta42013;
}));

(cljs.core.async.t_cljs$core$async42012.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async42012.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42012.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async42012.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async42012.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async42012.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async42012.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async42012.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42013","meta42013",-595005596,null)], null);
}));

(cljs.core.async.t_cljs$core$async42012.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42012");

(cljs.core.async.t_cljs$core$async42012.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async42012");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42012.
 */
cljs.core.async.__GT_t_cljs$core$async42012 = (function cljs$core$async$mix_$___GT_t_cljs$core$async42012(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42013){
return (new cljs.core.async.t_cljs$core$async42012(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42013));
});

}

return (new cljs.core.async.t_cljs$core$async42012(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41109__auto___42176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_42116){
var state_val_42117 = (state_42116[(1)]);
if((state_val_42117 === (7))){
var inst_42031 = (state_42116[(2)]);
var state_42116__$1 = state_42116;
var statearr_42118_42177 = state_42116__$1;
(statearr_42118_42177[(2)] = inst_42031);

(statearr_42118_42177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (20))){
var inst_42043 = (state_42116[(7)]);
var state_42116__$1 = state_42116;
var statearr_42119_42178 = state_42116__$1;
(statearr_42119_42178[(2)] = inst_42043);

(statearr_42119_42178[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (27))){
var state_42116__$1 = state_42116;
var statearr_42120_42179 = state_42116__$1;
(statearr_42120_42179[(2)] = null);

(statearr_42120_42179[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (1))){
var inst_42018 = (state_42116[(8)]);
var inst_42018__$1 = calc_state.call(null);
var inst_42020 = (inst_42018__$1 == null);
var inst_42021 = cljs.core.not.call(null,inst_42020);
var state_42116__$1 = (function (){var statearr_42121 = state_42116;
(statearr_42121[(8)] = inst_42018__$1);

return statearr_42121;
})();
if(inst_42021){
var statearr_42122_42180 = state_42116__$1;
(statearr_42122_42180[(1)] = (2));

} else {
var statearr_42123_42181 = state_42116__$1;
(statearr_42123_42181[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (24))){
var inst_42076 = (state_42116[(9)]);
var inst_42090 = (state_42116[(10)]);
var inst_42067 = (state_42116[(11)]);
var inst_42090__$1 = inst_42067.call(null,inst_42076);
var state_42116__$1 = (function (){var statearr_42124 = state_42116;
(statearr_42124[(10)] = inst_42090__$1);

return statearr_42124;
})();
if(cljs.core.truth_(inst_42090__$1)){
var statearr_42125_42182 = state_42116__$1;
(statearr_42125_42182[(1)] = (29));

} else {
var statearr_42126_42183 = state_42116__$1;
(statearr_42126_42183[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (4))){
var inst_42034 = (state_42116[(2)]);
var state_42116__$1 = state_42116;
if(cljs.core.truth_(inst_42034)){
var statearr_42127_42184 = state_42116__$1;
(statearr_42127_42184[(1)] = (8));

} else {
var statearr_42128_42185 = state_42116__$1;
(statearr_42128_42185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (15))){
var inst_42061 = (state_42116[(2)]);
var state_42116__$1 = state_42116;
if(cljs.core.truth_(inst_42061)){
var statearr_42129_42186 = state_42116__$1;
(statearr_42129_42186[(1)] = (19));

} else {
var statearr_42130_42187 = state_42116__$1;
(statearr_42130_42187[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (21))){
var inst_42066 = (state_42116[(12)]);
var inst_42066__$1 = (state_42116[(2)]);
var inst_42067 = cljs.core.get.call(null,inst_42066__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42068 = cljs.core.get.call(null,inst_42066__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42069 = cljs.core.get.call(null,inst_42066__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42116__$1 = (function (){var statearr_42131 = state_42116;
(statearr_42131[(11)] = inst_42067);

(statearr_42131[(13)] = inst_42068);

(statearr_42131[(12)] = inst_42066__$1);

return statearr_42131;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42116__$1,(22),inst_42069);
} else {
if((state_val_42117 === (31))){
var inst_42098 = (state_42116[(2)]);
var state_42116__$1 = state_42116;
if(cljs.core.truth_(inst_42098)){
var statearr_42132_42188 = state_42116__$1;
(statearr_42132_42188[(1)] = (32));

} else {
var statearr_42133_42189 = state_42116__$1;
(statearr_42133_42189[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (32))){
var inst_42075 = (state_42116[(14)]);
var state_42116__$1 = state_42116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42116__$1,(35),out,inst_42075);
} else {
if((state_val_42117 === (33))){
var inst_42066 = (state_42116[(12)]);
var inst_42043 = inst_42066;
var state_42116__$1 = (function (){var statearr_42134 = state_42116;
(statearr_42134[(7)] = inst_42043);

return statearr_42134;
})();
var statearr_42135_42190 = state_42116__$1;
(statearr_42135_42190[(2)] = null);

(statearr_42135_42190[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (13))){
var inst_42043 = (state_42116[(7)]);
var inst_42050 = inst_42043.cljs$lang$protocol_mask$partition0$;
var inst_42051 = (inst_42050 & (64));
var inst_42052 = inst_42043.cljs$core$ISeq$;
var inst_42053 = (cljs.core.PROTOCOL_SENTINEL === inst_42052);
var inst_42054 = ((inst_42051) || (inst_42053));
var state_42116__$1 = state_42116;
if(cljs.core.truth_(inst_42054)){
var statearr_42136_42191 = state_42116__$1;
(statearr_42136_42191[(1)] = (16));

} else {
var statearr_42137_42192 = state_42116__$1;
(statearr_42137_42192[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (22))){
var inst_42076 = (state_42116[(9)]);
var inst_42075 = (state_42116[(14)]);
var inst_42074 = (state_42116[(2)]);
var inst_42075__$1 = cljs.core.nth.call(null,inst_42074,(0),null);
var inst_42076__$1 = cljs.core.nth.call(null,inst_42074,(1),null);
var inst_42077 = (inst_42075__$1 == null);
var inst_42078 = cljs.core._EQ_.call(null,inst_42076__$1,change);
var inst_42079 = ((inst_42077) || (inst_42078));
var state_42116__$1 = (function (){var statearr_42138 = state_42116;
(statearr_42138[(9)] = inst_42076__$1);

(statearr_42138[(14)] = inst_42075__$1);

return statearr_42138;
})();
if(cljs.core.truth_(inst_42079)){
var statearr_42139_42193 = state_42116__$1;
(statearr_42139_42193[(1)] = (23));

} else {
var statearr_42140_42194 = state_42116__$1;
(statearr_42140_42194[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (36))){
var inst_42066 = (state_42116[(12)]);
var inst_42043 = inst_42066;
var state_42116__$1 = (function (){var statearr_42141 = state_42116;
(statearr_42141[(7)] = inst_42043);

return statearr_42141;
})();
var statearr_42142_42195 = state_42116__$1;
(statearr_42142_42195[(2)] = null);

(statearr_42142_42195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (29))){
var inst_42090 = (state_42116[(10)]);
var state_42116__$1 = state_42116;
var statearr_42143_42196 = state_42116__$1;
(statearr_42143_42196[(2)] = inst_42090);

(statearr_42143_42196[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (6))){
var state_42116__$1 = state_42116;
var statearr_42144_42197 = state_42116__$1;
(statearr_42144_42197[(2)] = false);

(statearr_42144_42197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (28))){
var inst_42086 = (state_42116[(2)]);
var inst_42087 = calc_state.call(null);
var inst_42043 = inst_42087;
var state_42116__$1 = (function (){var statearr_42145 = state_42116;
(statearr_42145[(15)] = inst_42086);

(statearr_42145[(7)] = inst_42043);

return statearr_42145;
})();
var statearr_42146_42198 = state_42116__$1;
(statearr_42146_42198[(2)] = null);

(statearr_42146_42198[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (25))){
var inst_42112 = (state_42116[(2)]);
var state_42116__$1 = state_42116;
var statearr_42147_42199 = state_42116__$1;
(statearr_42147_42199[(2)] = inst_42112);

(statearr_42147_42199[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (34))){
var inst_42110 = (state_42116[(2)]);
var state_42116__$1 = state_42116;
var statearr_42148_42200 = state_42116__$1;
(statearr_42148_42200[(2)] = inst_42110);

(statearr_42148_42200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (17))){
var state_42116__$1 = state_42116;
var statearr_42149_42201 = state_42116__$1;
(statearr_42149_42201[(2)] = false);

(statearr_42149_42201[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (3))){
var state_42116__$1 = state_42116;
var statearr_42150_42202 = state_42116__$1;
(statearr_42150_42202[(2)] = false);

(statearr_42150_42202[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (12))){
var inst_42114 = (state_42116[(2)]);
var state_42116__$1 = state_42116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42116__$1,inst_42114);
} else {
if((state_val_42117 === (2))){
var inst_42018 = (state_42116[(8)]);
var inst_42023 = inst_42018.cljs$lang$protocol_mask$partition0$;
var inst_42024 = (inst_42023 & (64));
var inst_42025 = inst_42018.cljs$core$ISeq$;
var inst_42026 = (cljs.core.PROTOCOL_SENTINEL === inst_42025);
var inst_42027 = ((inst_42024) || (inst_42026));
var state_42116__$1 = state_42116;
if(cljs.core.truth_(inst_42027)){
var statearr_42151_42203 = state_42116__$1;
(statearr_42151_42203[(1)] = (5));

} else {
var statearr_42152_42204 = state_42116__$1;
(statearr_42152_42204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (23))){
var inst_42075 = (state_42116[(14)]);
var inst_42081 = (inst_42075 == null);
var state_42116__$1 = state_42116;
if(cljs.core.truth_(inst_42081)){
var statearr_42153_42205 = state_42116__$1;
(statearr_42153_42205[(1)] = (26));

} else {
var statearr_42154_42206 = state_42116__$1;
(statearr_42154_42206[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (35))){
var inst_42101 = (state_42116[(2)]);
var state_42116__$1 = state_42116;
if(cljs.core.truth_(inst_42101)){
var statearr_42155_42207 = state_42116__$1;
(statearr_42155_42207[(1)] = (36));

} else {
var statearr_42156_42208 = state_42116__$1;
(statearr_42156_42208[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (19))){
var inst_42043 = (state_42116[(7)]);
var inst_42063 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42043);
var state_42116__$1 = state_42116;
var statearr_42157_42209 = state_42116__$1;
(statearr_42157_42209[(2)] = inst_42063);

(statearr_42157_42209[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (11))){
var inst_42043 = (state_42116[(7)]);
var inst_42047 = (inst_42043 == null);
var inst_42048 = cljs.core.not.call(null,inst_42047);
var state_42116__$1 = state_42116;
if(inst_42048){
var statearr_42158_42210 = state_42116__$1;
(statearr_42158_42210[(1)] = (13));

} else {
var statearr_42159_42211 = state_42116__$1;
(statearr_42159_42211[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (9))){
var inst_42018 = (state_42116[(8)]);
var state_42116__$1 = state_42116;
var statearr_42160_42212 = state_42116__$1;
(statearr_42160_42212[(2)] = inst_42018);

(statearr_42160_42212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (5))){
var state_42116__$1 = state_42116;
var statearr_42161_42213 = state_42116__$1;
(statearr_42161_42213[(2)] = true);

(statearr_42161_42213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (14))){
var state_42116__$1 = state_42116;
var statearr_42162_42214 = state_42116__$1;
(statearr_42162_42214[(2)] = false);

(statearr_42162_42214[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (26))){
var inst_42076 = (state_42116[(9)]);
var inst_42083 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42076);
var state_42116__$1 = state_42116;
var statearr_42163_42215 = state_42116__$1;
(statearr_42163_42215[(2)] = inst_42083);

(statearr_42163_42215[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (16))){
var state_42116__$1 = state_42116;
var statearr_42164_42216 = state_42116__$1;
(statearr_42164_42216[(2)] = true);

(statearr_42164_42216[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (38))){
var inst_42106 = (state_42116[(2)]);
var state_42116__$1 = state_42116;
var statearr_42165_42217 = state_42116__$1;
(statearr_42165_42217[(2)] = inst_42106);

(statearr_42165_42217[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (30))){
var inst_42076 = (state_42116[(9)]);
var inst_42067 = (state_42116[(11)]);
var inst_42068 = (state_42116[(13)]);
var inst_42093 = cljs.core.empty_QMARK_.call(null,inst_42067);
var inst_42094 = inst_42068.call(null,inst_42076);
var inst_42095 = cljs.core.not.call(null,inst_42094);
var inst_42096 = ((inst_42093) && (inst_42095));
var state_42116__$1 = state_42116;
var statearr_42166_42218 = state_42116__$1;
(statearr_42166_42218[(2)] = inst_42096);

(statearr_42166_42218[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (10))){
var inst_42018 = (state_42116[(8)]);
var inst_42039 = (state_42116[(2)]);
var inst_42040 = cljs.core.get.call(null,inst_42039,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42041 = cljs.core.get.call(null,inst_42039,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42042 = cljs.core.get.call(null,inst_42039,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42043 = inst_42018;
var state_42116__$1 = (function (){var statearr_42167 = state_42116;
(statearr_42167[(16)] = inst_42041);

(statearr_42167[(7)] = inst_42043);

(statearr_42167[(17)] = inst_42042);

(statearr_42167[(18)] = inst_42040);

return statearr_42167;
})();
var statearr_42168_42219 = state_42116__$1;
(statearr_42168_42219[(2)] = null);

(statearr_42168_42219[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (18))){
var inst_42058 = (state_42116[(2)]);
var state_42116__$1 = state_42116;
var statearr_42169_42220 = state_42116__$1;
(statearr_42169_42220[(2)] = inst_42058);

(statearr_42169_42220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (37))){
var state_42116__$1 = state_42116;
var statearr_42170_42221 = state_42116__$1;
(statearr_42170_42221[(2)] = null);

(statearr_42170_42221[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (8))){
var inst_42018 = (state_42116[(8)]);
var inst_42036 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42018);
var state_42116__$1 = state_42116;
var statearr_42171_42222 = state_42116__$1;
(statearr_42171_42222[(2)] = inst_42036);

(statearr_42171_42222[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__41015__auto__ = null;
var cljs$core$async$mix_$_state_machine__41015__auto____0 = (function (){
var statearr_42172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42172[(0)] = cljs$core$async$mix_$_state_machine__41015__auto__);

(statearr_42172[(1)] = (1));

return statearr_42172;
});
var cljs$core$async$mix_$_state_machine__41015__auto____1 = (function (state_42116){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_42116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e42173){if((e42173 instanceof Object)){
var ex__41018__auto__ = e42173;
var statearr_42174_42223 = state_42116;
(statearr_42174_42223[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42224 = state_42116;
state_42116 = G__42224;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__41015__auto__ = function(state_42116){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__41015__auto____1.call(this,state_42116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__41015__auto____0;
cljs$core$async$mix_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__41015__auto____1;
return cljs$core$async$mix_$_state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_42175 = f__41110__auto__.call(null);
(statearr_42175[(6)] = c__41109__auto___42176);

return statearr_42175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_42227 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_42227.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_42228 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_42228.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_42229 = (function() {
var G__42230 = null;
var G__42230__1 = (function (p){
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
var G__42230__2 = (function (p,v){
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
G__42230 = function(p,v){
switch(arguments.length){
case 1:
return G__42230__1.call(this,p);
case 2:
return G__42230__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42230.cljs$core$IFn$_invoke$arity$1 = G__42230__1;
G__42230.cljs$core$IFn$_invoke$arity$2 = G__42230__2;
return G__42230;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__42226 = arguments.length;
switch (G__42226) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42229.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42229.call(null,p,v);
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
var G__42234 = arguments.length;
switch (G__42234) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__42232_SHARP_){
if(cljs.core.truth_(p1__42232_SHARP_.call(null,topic))){
return p1__42232_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42232_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42235 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42235 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42236){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42236 = meta42236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42237,meta42236__$1){
var self__ = this;
var _42237__$1 = this;
return (new cljs.core.async.t_cljs$core$async42235(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42236__$1));
}));

(cljs.core.async.t_cljs$core$async42235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42237){
var self__ = this;
var _42237__$1 = this;
return self__.meta42236;
}));

(cljs.core.async.t_cljs$core$async42235.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42235.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42235.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42235.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async42235.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async42235.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async42235.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async42235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42236","meta42236",571381099,null)], null);
}));

(cljs.core.async.t_cljs$core$async42235.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42235");

(cljs.core.async.t_cljs$core$async42235.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async42235");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42235.
 */
cljs.core.async.__GT_t_cljs$core$async42235 = (function cljs$core$async$__GT_t_cljs$core$async42235(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42236){
return (new cljs.core.async.t_cljs$core$async42235(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42236));
});

}

return (new cljs.core.async.t_cljs$core$async42235(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41109__auto___42355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_42309){
var state_val_42310 = (state_42309[(1)]);
if((state_val_42310 === (7))){
var inst_42305 = (state_42309[(2)]);
var state_42309__$1 = state_42309;
var statearr_42311_42356 = state_42309__$1;
(statearr_42311_42356[(2)] = inst_42305);

(statearr_42311_42356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (20))){
var state_42309__$1 = state_42309;
var statearr_42312_42357 = state_42309__$1;
(statearr_42312_42357[(2)] = null);

(statearr_42312_42357[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (1))){
var state_42309__$1 = state_42309;
var statearr_42313_42358 = state_42309__$1;
(statearr_42313_42358[(2)] = null);

(statearr_42313_42358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (24))){
var inst_42288 = (state_42309[(7)]);
var inst_42297 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42288);
var state_42309__$1 = state_42309;
var statearr_42314_42359 = state_42309__$1;
(statearr_42314_42359[(2)] = inst_42297);

(statearr_42314_42359[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (4))){
var inst_42240 = (state_42309[(8)]);
var inst_42240__$1 = (state_42309[(2)]);
var inst_42241 = (inst_42240__$1 == null);
var state_42309__$1 = (function (){var statearr_42315 = state_42309;
(statearr_42315[(8)] = inst_42240__$1);

return statearr_42315;
})();
if(cljs.core.truth_(inst_42241)){
var statearr_42316_42360 = state_42309__$1;
(statearr_42316_42360[(1)] = (5));

} else {
var statearr_42317_42361 = state_42309__$1;
(statearr_42317_42361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (15))){
var inst_42282 = (state_42309[(2)]);
var state_42309__$1 = state_42309;
var statearr_42318_42362 = state_42309__$1;
(statearr_42318_42362[(2)] = inst_42282);

(statearr_42318_42362[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (21))){
var inst_42302 = (state_42309[(2)]);
var state_42309__$1 = (function (){var statearr_42319 = state_42309;
(statearr_42319[(9)] = inst_42302);

return statearr_42319;
})();
var statearr_42320_42363 = state_42309__$1;
(statearr_42320_42363[(2)] = null);

(statearr_42320_42363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (13))){
var inst_42264 = (state_42309[(10)]);
var inst_42266 = cljs.core.chunked_seq_QMARK_.call(null,inst_42264);
var state_42309__$1 = state_42309;
if(inst_42266){
var statearr_42321_42364 = state_42309__$1;
(statearr_42321_42364[(1)] = (16));

} else {
var statearr_42322_42365 = state_42309__$1;
(statearr_42322_42365[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (22))){
var inst_42294 = (state_42309[(2)]);
var state_42309__$1 = state_42309;
if(cljs.core.truth_(inst_42294)){
var statearr_42323_42366 = state_42309__$1;
(statearr_42323_42366[(1)] = (23));

} else {
var statearr_42324_42367 = state_42309__$1;
(statearr_42324_42367[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (6))){
var inst_42288 = (state_42309[(7)]);
var inst_42240 = (state_42309[(8)]);
var inst_42290 = (state_42309[(11)]);
var inst_42288__$1 = topic_fn.call(null,inst_42240);
var inst_42289 = cljs.core.deref.call(null,mults);
var inst_42290__$1 = cljs.core.get.call(null,inst_42289,inst_42288__$1);
var state_42309__$1 = (function (){var statearr_42325 = state_42309;
(statearr_42325[(7)] = inst_42288__$1);

(statearr_42325[(11)] = inst_42290__$1);

return statearr_42325;
})();
if(cljs.core.truth_(inst_42290__$1)){
var statearr_42326_42368 = state_42309__$1;
(statearr_42326_42368[(1)] = (19));

} else {
var statearr_42327_42369 = state_42309__$1;
(statearr_42327_42369[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (25))){
var inst_42299 = (state_42309[(2)]);
var state_42309__$1 = state_42309;
var statearr_42328_42370 = state_42309__$1;
(statearr_42328_42370[(2)] = inst_42299);

(statearr_42328_42370[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (17))){
var inst_42264 = (state_42309[(10)]);
var inst_42273 = cljs.core.first.call(null,inst_42264);
var inst_42274 = cljs.core.async.muxch_STAR_.call(null,inst_42273);
var inst_42275 = cljs.core.async.close_BANG_.call(null,inst_42274);
var inst_42276 = cljs.core.next.call(null,inst_42264);
var inst_42250 = inst_42276;
var inst_42251 = null;
var inst_42252 = (0);
var inst_42253 = (0);
var state_42309__$1 = (function (){var statearr_42329 = state_42309;
(statearr_42329[(12)] = inst_42251);

(statearr_42329[(13)] = inst_42253);

(statearr_42329[(14)] = inst_42252);

(statearr_42329[(15)] = inst_42250);

(statearr_42329[(16)] = inst_42275);

return statearr_42329;
})();
var statearr_42330_42371 = state_42309__$1;
(statearr_42330_42371[(2)] = null);

(statearr_42330_42371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (3))){
var inst_42307 = (state_42309[(2)]);
var state_42309__$1 = state_42309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42309__$1,inst_42307);
} else {
if((state_val_42310 === (12))){
var inst_42284 = (state_42309[(2)]);
var state_42309__$1 = state_42309;
var statearr_42331_42372 = state_42309__$1;
(statearr_42331_42372[(2)] = inst_42284);

(statearr_42331_42372[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (2))){
var state_42309__$1 = state_42309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42309__$1,(4),ch);
} else {
if((state_val_42310 === (23))){
var state_42309__$1 = state_42309;
var statearr_42332_42373 = state_42309__$1;
(statearr_42332_42373[(2)] = null);

(statearr_42332_42373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (19))){
var inst_42240 = (state_42309[(8)]);
var inst_42290 = (state_42309[(11)]);
var inst_42292 = cljs.core.async.muxch_STAR_.call(null,inst_42290);
var state_42309__$1 = state_42309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42309__$1,(22),inst_42292,inst_42240);
} else {
if((state_val_42310 === (11))){
var inst_42264 = (state_42309[(10)]);
var inst_42250 = (state_42309[(15)]);
var inst_42264__$1 = cljs.core.seq.call(null,inst_42250);
var state_42309__$1 = (function (){var statearr_42333 = state_42309;
(statearr_42333[(10)] = inst_42264__$1);

return statearr_42333;
})();
if(inst_42264__$1){
var statearr_42334_42374 = state_42309__$1;
(statearr_42334_42374[(1)] = (13));

} else {
var statearr_42335_42375 = state_42309__$1;
(statearr_42335_42375[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (9))){
var inst_42286 = (state_42309[(2)]);
var state_42309__$1 = state_42309;
var statearr_42336_42376 = state_42309__$1;
(statearr_42336_42376[(2)] = inst_42286);

(statearr_42336_42376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (5))){
var inst_42247 = cljs.core.deref.call(null,mults);
var inst_42248 = cljs.core.vals.call(null,inst_42247);
var inst_42249 = cljs.core.seq.call(null,inst_42248);
var inst_42250 = inst_42249;
var inst_42251 = null;
var inst_42252 = (0);
var inst_42253 = (0);
var state_42309__$1 = (function (){var statearr_42337 = state_42309;
(statearr_42337[(12)] = inst_42251);

(statearr_42337[(13)] = inst_42253);

(statearr_42337[(14)] = inst_42252);

(statearr_42337[(15)] = inst_42250);

return statearr_42337;
})();
var statearr_42338_42377 = state_42309__$1;
(statearr_42338_42377[(2)] = null);

(statearr_42338_42377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (14))){
var state_42309__$1 = state_42309;
var statearr_42342_42378 = state_42309__$1;
(statearr_42342_42378[(2)] = null);

(statearr_42342_42378[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (16))){
var inst_42264 = (state_42309[(10)]);
var inst_42268 = cljs.core.chunk_first.call(null,inst_42264);
var inst_42269 = cljs.core.chunk_rest.call(null,inst_42264);
var inst_42270 = cljs.core.count.call(null,inst_42268);
var inst_42250 = inst_42269;
var inst_42251 = inst_42268;
var inst_42252 = inst_42270;
var inst_42253 = (0);
var state_42309__$1 = (function (){var statearr_42343 = state_42309;
(statearr_42343[(12)] = inst_42251);

(statearr_42343[(13)] = inst_42253);

(statearr_42343[(14)] = inst_42252);

(statearr_42343[(15)] = inst_42250);

return statearr_42343;
})();
var statearr_42344_42379 = state_42309__$1;
(statearr_42344_42379[(2)] = null);

(statearr_42344_42379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (10))){
var inst_42251 = (state_42309[(12)]);
var inst_42253 = (state_42309[(13)]);
var inst_42252 = (state_42309[(14)]);
var inst_42250 = (state_42309[(15)]);
var inst_42258 = cljs.core._nth.call(null,inst_42251,inst_42253);
var inst_42259 = cljs.core.async.muxch_STAR_.call(null,inst_42258);
var inst_42260 = cljs.core.async.close_BANG_.call(null,inst_42259);
var inst_42261 = (inst_42253 + (1));
var tmp42339 = inst_42251;
var tmp42340 = inst_42252;
var tmp42341 = inst_42250;
var inst_42250__$1 = tmp42341;
var inst_42251__$1 = tmp42339;
var inst_42252__$1 = tmp42340;
var inst_42253__$1 = inst_42261;
var state_42309__$1 = (function (){var statearr_42345 = state_42309;
(statearr_42345[(12)] = inst_42251__$1);

(statearr_42345[(13)] = inst_42253__$1);

(statearr_42345[(17)] = inst_42260);

(statearr_42345[(14)] = inst_42252__$1);

(statearr_42345[(15)] = inst_42250__$1);

return statearr_42345;
})();
var statearr_42346_42380 = state_42309__$1;
(statearr_42346_42380[(2)] = null);

(statearr_42346_42380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (18))){
var inst_42279 = (state_42309[(2)]);
var state_42309__$1 = state_42309;
var statearr_42347_42381 = state_42309__$1;
(statearr_42347_42381[(2)] = inst_42279);

(statearr_42347_42381[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42310 === (8))){
var inst_42253 = (state_42309[(13)]);
var inst_42252 = (state_42309[(14)]);
var inst_42255 = (inst_42253 < inst_42252);
var inst_42256 = inst_42255;
var state_42309__$1 = state_42309;
if(cljs.core.truth_(inst_42256)){
var statearr_42348_42382 = state_42309__$1;
(statearr_42348_42382[(1)] = (10));

} else {
var statearr_42349_42383 = state_42309__$1;
(statearr_42349_42383[(1)] = (11));

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
var cljs$core$async$state_machine__41015__auto__ = null;
var cljs$core$async$state_machine__41015__auto____0 = (function (){
var statearr_42350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42350[(0)] = cljs$core$async$state_machine__41015__auto__);

(statearr_42350[(1)] = (1));

return statearr_42350;
});
var cljs$core$async$state_machine__41015__auto____1 = (function (state_42309){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_42309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e42351){if((e42351 instanceof Object)){
var ex__41018__auto__ = e42351;
var statearr_42352_42384 = state_42309;
(statearr_42352_42384[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42385 = state_42309;
state_42309 = G__42385;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$state_machine__41015__auto__ = function(state_42309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41015__auto____1.call(this,state_42309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41015__auto____0;
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41015__auto____1;
return cljs$core$async$state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_42353 = f__41110__auto__.call(null);
(statearr_42353[(6)] = c__41109__auto___42355);

return statearr_42353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
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
var G__42387 = arguments.length;
switch (G__42387) {
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
var G__42390 = arguments.length;
switch (G__42390) {
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
var G__42393 = arguments.length;
switch (G__42393) {
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
var c__41109__auto___42460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_42432){
var state_val_42433 = (state_42432[(1)]);
if((state_val_42433 === (7))){
var state_42432__$1 = state_42432;
var statearr_42434_42461 = state_42432__$1;
(statearr_42434_42461[(2)] = null);

(statearr_42434_42461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (1))){
var state_42432__$1 = state_42432;
var statearr_42435_42462 = state_42432__$1;
(statearr_42435_42462[(2)] = null);

(statearr_42435_42462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (4))){
var inst_42396 = (state_42432[(7)]);
var inst_42398 = (inst_42396 < cnt);
var state_42432__$1 = state_42432;
if(cljs.core.truth_(inst_42398)){
var statearr_42436_42463 = state_42432__$1;
(statearr_42436_42463[(1)] = (6));

} else {
var statearr_42437_42464 = state_42432__$1;
(statearr_42437_42464[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (15))){
var inst_42428 = (state_42432[(2)]);
var state_42432__$1 = state_42432;
var statearr_42438_42465 = state_42432__$1;
(statearr_42438_42465[(2)] = inst_42428);

(statearr_42438_42465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (13))){
var inst_42421 = cljs.core.async.close_BANG_.call(null,out);
var state_42432__$1 = state_42432;
var statearr_42439_42466 = state_42432__$1;
(statearr_42439_42466[(2)] = inst_42421);

(statearr_42439_42466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (6))){
var state_42432__$1 = state_42432;
var statearr_42440_42467 = state_42432__$1;
(statearr_42440_42467[(2)] = null);

(statearr_42440_42467[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (3))){
var inst_42430 = (state_42432[(2)]);
var state_42432__$1 = state_42432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42432__$1,inst_42430);
} else {
if((state_val_42433 === (12))){
var inst_42418 = (state_42432[(8)]);
var inst_42418__$1 = (state_42432[(2)]);
var inst_42419 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42418__$1);
var state_42432__$1 = (function (){var statearr_42441 = state_42432;
(statearr_42441[(8)] = inst_42418__$1);

return statearr_42441;
})();
if(cljs.core.truth_(inst_42419)){
var statearr_42442_42468 = state_42432__$1;
(statearr_42442_42468[(1)] = (13));

} else {
var statearr_42443_42469 = state_42432__$1;
(statearr_42443_42469[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (2))){
var inst_42395 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42396 = (0);
var state_42432__$1 = (function (){var statearr_42444 = state_42432;
(statearr_42444[(9)] = inst_42395);

(statearr_42444[(7)] = inst_42396);

return statearr_42444;
})();
var statearr_42445_42470 = state_42432__$1;
(statearr_42445_42470[(2)] = null);

(statearr_42445_42470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (11))){
var inst_42396 = (state_42432[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42432,(10),Object,null,(9));
var inst_42405 = chs__$1.call(null,inst_42396);
var inst_42406 = done.call(null,inst_42396);
var inst_42407 = cljs.core.async.take_BANG_.call(null,inst_42405,inst_42406);
var state_42432__$1 = state_42432;
var statearr_42446_42471 = state_42432__$1;
(statearr_42446_42471[(2)] = inst_42407);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42432__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (9))){
var inst_42396 = (state_42432[(7)]);
var inst_42409 = (state_42432[(2)]);
var inst_42410 = (inst_42396 + (1));
var inst_42396__$1 = inst_42410;
var state_42432__$1 = (function (){var statearr_42447 = state_42432;
(statearr_42447[(10)] = inst_42409);

(statearr_42447[(7)] = inst_42396__$1);

return statearr_42447;
})();
var statearr_42448_42472 = state_42432__$1;
(statearr_42448_42472[(2)] = null);

(statearr_42448_42472[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (5))){
var inst_42416 = (state_42432[(2)]);
var state_42432__$1 = (function (){var statearr_42449 = state_42432;
(statearr_42449[(11)] = inst_42416);

return statearr_42449;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42432__$1,(12),dchan);
} else {
if((state_val_42433 === (14))){
var inst_42418 = (state_42432[(8)]);
var inst_42423 = cljs.core.apply.call(null,f,inst_42418);
var state_42432__$1 = state_42432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42432__$1,(16),out,inst_42423);
} else {
if((state_val_42433 === (16))){
var inst_42425 = (state_42432[(2)]);
var state_42432__$1 = (function (){var statearr_42450 = state_42432;
(statearr_42450[(12)] = inst_42425);

return statearr_42450;
})();
var statearr_42451_42473 = state_42432__$1;
(statearr_42451_42473[(2)] = null);

(statearr_42451_42473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (10))){
var inst_42400 = (state_42432[(2)]);
var inst_42401 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42432__$1 = (function (){var statearr_42452 = state_42432;
(statearr_42452[(13)] = inst_42400);

return statearr_42452;
})();
var statearr_42453_42474 = state_42432__$1;
(statearr_42453_42474[(2)] = inst_42401);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42432__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42433 === (8))){
var inst_42414 = (state_42432[(2)]);
var state_42432__$1 = state_42432;
var statearr_42454_42475 = state_42432__$1;
(statearr_42454_42475[(2)] = inst_42414);

(statearr_42454_42475[(1)] = (5));


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
var cljs$core$async$state_machine__41015__auto__ = null;
var cljs$core$async$state_machine__41015__auto____0 = (function (){
var statearr_42455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42455[(0)] = cljs$core$async$state_machine__41015__auto__);

(statearr_42455[(1)] = (1));

return statearr_42455;
});
var cljs$core$async$state_machine__41015__auto____1 = (function (state_42432){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_42432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e42456){if((e42456 instanceof Object)){
var ex__41018__auto__ = e42456;
var statearr_42457_42476 = state_42432;
(statearr_42457_42476[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42477 = state_42432;
state_42432 = G__42477;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$state_machine__41015__auto__ = function(state_42432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41015__auto____1.call(this,state_42432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41015__auto____0;
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41015__auto____1;
return cljs$core$async$state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_42458 = f__41110__auto__.call(null);
(statearr_42458[(6)] = c__41109__auto___42460);

return statearr_42458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
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
var G__42480 = arguments.length;
switch (G__42480) {
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
var c__41109__auto___42534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_42512){
var state_val_42513 = (state_42512[(1)]);
if((state_val_42513 === (7))){
var inst_42491 = (state_42512[(7)]);
var inst_42492 = (state_42512[(8)]);
var inst_42491__$1 = (state_42512[(2)]);
var inst_42492__$1 = cljs.core.nth.call(null,inst_42491__$1,(0),null);
var inst_42493 = cljs.core.nth.call(null,inst_42491__$1,(1),null);
var inst_42494 = (inst_42492__$1 == null);
var state_42512__$1 = (function (){var statearr_42514 = state_42512;
(statearr_42514[(7)] = inst_42491__$1);

(statearr_42514[(8)] = inst_42492__$1);

(statearr_42514[(9)] = inst_42493);

return statearr_42514;
})();
if(cljs.core.truth_(inst_42494)){
var statearr_42515_42535 = state_42512__$1;
(statearr_42515_42535[(1)] = (8));

} else {
var statearr_42516_42536 = state_42512__$1;
(statearr_42516_42536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42513 === (1))){
var inst_42481 = cljs.core.vec.call(null,chs);
var inst_42482 = inst_42481;
var state_42512__$1 = (function (){var statearr_42517 = state_42512;
(statearr_42517[(10)] = inst_42482);

return statearr_42517;
})();
var statearr_42518_42537 = state_42512__$1;
(statearr_42518_42537[(2)] = null);

(statearr_42518_42537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42513 === (4))){
var inst_42482 = (state_42512[(10)]);
var state_42512__$1 = state_42512;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42512__$1,(7),inst_42482);
} else {
if((state_val_42513 === (6))){
var inst_42508 = (state_42512[(2)]);
var state_42512__$1 = state_42512;
var statearr_42519_42538 = state_42512__$1;
(statearr_42519_42538[(2)] = inst_42508);

(statearr_42519_42538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42513 === (3))){
var inst_42510 = (state_42512[(2)]);
var state_42512__$1 = state_42512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42512__$1,inst_42510);
} else {
if((state_val_42513 === (2))){
var inst_42482 = (state_42512[(10)]);
var inst_42484 = cljs.core.count.call(null,inst_42482);
var inst_42485 = (inst_42484 > (0));
var state_42512__$1 = state_42512;
if(cljs.core.truth_(inst_42485)){
var statearr_42521_42539 = state_42512__$1;
(statearr_42521_42539[(1)] = (4));

} else {
var statearr_42522_42540 = state_42512__$1;
(statearr_42522_42540[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42513 === (11))){
var inst_42482 = (state_42512[(10)]);
var inst_42501 = (state_42512[(2)]);
var tmp42520 = inst_42482;
var inst_42482__$1 = tmp42520;
var state_42512__$1 = (function (){var statearr_42523 = state_42512;
(statearr_42523[(10)] = inst_42482__$1);

(statearr_42523[(11)] = inst_42501);

return statearr_42523;
})();
var statearr_42524_42541 = state_42512__$1;
(statearr_42524_42541[(2)] = null);

(statearr_42524_42541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42513 === (9))){
var inst_42492 = (state_42512[(8)]);
var state_42512__$1 = state_42512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42512__$1,(11),out,inst_42492);
} else {
if((state_val_42513 === (5))){
var inst_42506 = cljs.core.async.close_BANG_.call(null,out);
var state_42512__$1 = state_42512;
var statearr_42525_42542 = state_42512__$1;
(statearr_42525_42542[(2)] = inst_42506);

(statearr_42525_42542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42513 === (10))){
var inst_42504 = (state_42512[(2)]);
var state_42512__$1 = state_42512;
var statearr_42526_42543 = state_42512__$1;
(statearr_42526_42543[(2)] = inst_42504);

(statearr_42526_42543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42513 === (8))){
var inst_42491 = (state_42512[(7)]);
var inst_42482 = (state_42512[(10)]);
var inst_42492 = (state_42512[(8)]);
var inst_42493 = (state_42512[(9)]);
var inst_42496 = (function (){var cs = inst_42482;
var vec__42487 = inst_42491;
var v = inst_42492;
var c = inst_42493;
return (function (p1__42478_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42478_SHARP_);
});
})();
var inst_42497 = cljs.core.filterv.call(null,inst_42496,inst_42482);
var inst_42482__$1 = inst_42497;
var state_42512__$1 = (function (){var statearr_42527 = state_42512;
(statearr_42527[(10)] = inst_42482__$1);

return statearr_42527;
})();
var statearr_42528_42544 = state_42512__$1;
(statearr_42528_42544[(2)] = null);

(statearr_42528_42544[(1)] = (2));


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
var cljs$core$async$state_machine__41015__auto__ = null;
var cljs$core$async$state_machine__41015__auto____0 = (function (){
var statearr_42529 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42529[(0)] = cljs$core$async$state_machine__41015__auto__);

(statearr_42529[(1)] = (1));

return statearr_42529;
});
var cljs$core$async$state_machine__41015__auto____1 = (function (state_42512){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_42512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e42530){if((e42530 instanceof Object)){
var ex__41018__auto__ = e42530;
var statearr_42531_42545 = state_42512;
(statearr_42531_42545[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42546 = state_42512;
state_42512 = G__42546;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$state_machine__41015__auto__ = function(state_42512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41015__auto____1.call(this,state_42512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41015__auto____0;
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41015__auto____1;
return cljs$core$async$state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_42532 = f__41110__auto__.call(null);
(statearr_42532[(6)] = c__41109__auto___42534);

return statearr_42532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
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
var G__42548 = arguments.length;
switch (G__42548) {
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
var c__41109__auto___42593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_42572){
var state_val_42573 = (state_42572[(1)]);
if((state_val_42573 === (7))){
var inst_42554 = (state_42572[(7)]);
var inst_42554__$1 = (state_42572[(2)]);
var inst_42555 = (inst_42554__$1 == null);
var inst_42556 = cljs.core.not.call(null,inst_42555);
var state_42572__$1 = (function (){var statearr_42574 = state_42572;
(statearr_42574[(7)] = inst_42554__$1);

return statearr_42574;
})();
if(inst_42556){
var statearr_42575_42594 = state_42572__$1;
(statearr_42575_42594[(1)] = (8));

} else {
var statearr_42576_42595 = state_42572__$1;
(statearr_42576_42595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42573 === (1))){
var inst_42549 = (0);
var state_42572__$1 = (function (){var statearr_42577 = state_42572;
(statearr_42577[(8)] = inst_42549);

return statearr_42577;
})();
var statearr_42578_42596 = state_42572__$1;
(statearr_42578_42596[(2)] = null);

(statearr_42578_42596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42573 === (4))){
var state_42572__$1 = state_42572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42572__$1,(7),ch);
} else {
if((state_val_42573 === (6))){
var inst_42567 = (state_42572[(2)]);
var state_42572__$1 = state_42572;
var statearr_42579_42597 = state_42572__$1;
(statearr_42579_42597[(2)] = inst_42567);

(statearr_42579_42597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42573 === (3))){
var inst_42569 = (state_42572[(2)]);
var inst_42570 = cljs.core.async.close_BANG_.call(null,out);
var state_42572__$1 = (function (){var statearr_42580 = state_42572;
(statearr_42580[(9)] = inst_42569);

return statearr_42580;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42572__$1,inst_42570);
} else {
if((state_val_42573 === (2))){
var inst_42549 = (state_42572[(8)]);
var inst_42551 = (inst_42549 < n);
var state_42572__$1 = state_42572;
if(cljs.core.truth_(inst_42551)){
var statearr_42581_42598 = state_42572__$1;
(statearr_42581_42598[(1)] = (4));

} else {
var statearr_42582_42599 = state_42572__$1;
(statearr_42582_42599[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42573 === (11))){
var inst_42549 = (state_42572[(8)]);
var inst_42559 = (state_42572[(2)]);
var inst_42560 = (inst_42549 + (1));
var inst_42549__$1 = inst_42560;
var state_42572__$1 = (function (){var statearr_42583 = state_42572;
(statearr_42583[(10)] = inst_42559);

(statearr_42583[(8)] = inst_42549__$1);

return statearr_42583;
})();
var statearr_42584_42600 = state_42572__$1;
(statearr_42584_42600[(2)] = null);

(statearr_42584_42600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42573 === (9))){
var state_42572__$1 = state_42572;
var statearr_42585_42601 = state_42572__$1;
(statearr_42585_42601[(2)] = null);

(statearr_42585_42601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42573 === (5))){
var state_42572__$1 = state_42572;
var statearr_42586_42602 = state_42572__$1;
(statearr_42586_42602[(2)] = null);

(statearr_42586_42602[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42573 === (10))){
var inst_42564 = (state_42572[(2)]);
var state_42572__$1 = state_42572;
var statearr_42587_42603 = state_42572__$1;
(statearr_42587_42603[(2)] = inst_42564);

(statearr_42587_42603[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42573 === (8))){
var inst_42554 = (state_42572[(7)]);
var state_42572__$1 = state_42572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42572__$1,(11),out,inst_42554);
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
var cljs$core$async$state_machine__41015__auto__ = null;
var cljs$core$async$state_machine__41015__auto____0 = (function (){
var statearr_42588 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42588[(0)] = cljs$core$async$state_machine__41015__auto__);

(statearr_42588[(1)] = (1));

return statearr_42588;
});
var cljs$core$async$state_machine__41015__auto____1 = (function (state_42572){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_42572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e42589){if((e42589 instanceof Object)){
var ex__41018__auto__ = e42589;
var statearr_42590_42604 = state_42572;
(statearr_42590_42604[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42605 = state_42572;
state_42572 = G__42605;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$state_machine__41015__auto__ = function(state_42572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41015__auto____1.call(this,state_42572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41015__auto____0;
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41015__auto____1;
return cljs$core$async$state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_42591 = f__41110__auto__.call(null);
(statearr_42591[(6)] = c__41109__auto___42593);

return statearr_42591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42607 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42607 = (function (f,ch,meta42608){
this.f = f;
this.ch = ch;
this.meta42608 = meta42608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42609,meta42608__$1){
var self__ = this;
var _42609__$1 = this;
return (new cljs.core.async.t_cljs$core$async42607(self__.f,self__.ch,meta42608__$1));
}));

(cljs.core.async.t_cljs$core$async42607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42609){
var self__ = this;
var _42609__$1 = this;
return self__.meta42608;
}));

(cljs.core.async.t_cljs$core$async42607.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42607.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async42607.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async42607.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42607.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42610 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42610 = (function (f,ch,meta42608,_,fn1,meta42611){
this.f = f;
this.ch = ch;
this.meta42608 = meta42608;
this._ = _;
this.fn1 = fn1;
this.meta42611 = meta42611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42612,meta42611__$1){
var self__ = this;
var _42612__$1 = this;
return (new cljs.core.async.t_cljs$core$async42610(self__.f,self__.ch,self__.meta42608,self__._,self__.fn1,meta42611__$1));
}));

(cljs.core.async.t_cljs$core$async42610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42612){
var self__ = this;
var _42612__$1 = this;
return self__.meta42611;
}));

(cljs.core.async.t_cljs$core$async42610.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42610.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async42610.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42610.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__42606_SHARP_){
return f1.call(null,(((p1__42606_SHARP_ == null))?null:self__.f.call(null,p1__42606_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async42610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42608","meta42608",1522013182,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42607","cljs.core.async/t_cljs$core$async42607",991033762,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42611","meta42611",382263508,null)], null);
}));

(cljs.core.async.t_cljs$core$async42610.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42610");

(cljs.core.async.t_cljs$core$async42610.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async42610");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42610.
 */
cljs.core.async.__GT_t_cljs$core$async42610 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42610(f__$1,ch__$1,meta42608__$1,___$2,fn1__$1,meta42611){
return (new cljs.core.async.t_cljs$core$async42610(f__$1,ch__$1,meta42608__$1,___$2,fn1__$1,meta42611));
});

}

return (new cljs.core.async.t_cljs$core$async42610(self__.f,self__.ch,self__.meta42608,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async42607.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42607.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async42607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42608","meta42608",1522013182,null)], null);
}));

(cljs.core.async.t_cljs$core$async42607.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42607");

(cljs.core.async.t_cljs$core$async42607.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async42607");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42607.
 */
cljs.core.async.__GT_t_cljs$core$async42607 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42607(f__$1,ch__$1,meta42608){
return (new cljs.core.async.t_cljs$core$async42607(f__$1,ch__$1,meta42608));
});

}

return (new cljs.core.async.t_cljs$core$async42607(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42613 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42613 = (function (f,ch,meta42614){
this.f = f;
this.ch = ch;
this.meta42614 = meta42614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42615,meta42614__$1){
var self__ = this;
var _42615__$1 = this;
return (new cljs.core.async.t_cljs$core$async42613(self__.f,self__.ch,meta42614__$1));
}));

(cljs.core.async.t_cljs$core$async42613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42615){
var self__ = this;
var _42615__$1 = this;
return self__.meta42614;
}));

(cljs.core.async.t_cljs$core$async42613.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42613.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async42613.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42613.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42613.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42613.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async42613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42614","meta42614",2069138766,null)], null);
}));

(cljs.core.async.t_cljs$core$async42613.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42613");

(cljs.core.async.t_cljs$core$async42613.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async42613");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42613.
 */
cljs.core.async.__GT_t_cljs$core$async42613 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42613(f__$1,ch__$1,meta42614){
return (new cljs.core.async.t_cljs$core$async42613(f__$1,ch__$1,meta42614));
});

}

return (new cljs.core.async.t_cljs$core$async42613(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42616 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42616 = (function (p,ch,meta42617){
this.p = p;
this.ch = ch;
this.meta42617 = meta42617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42618,meta42617__$1){
var self__ = this;
var _42618__$1 = this;
return (new cljs.core.async.t_cljs$core$async42616(self__.p,self__.ch,meta42617__$1));
}));

(cljs.core.async.t_cljs$core$async42616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42618){
var self__ = this;
var _42618__$1 = this;
return self__.meta42617;
}));

(cljs.core.async.t_cljs$core$async42616.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42616.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async42616.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async42616.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42616.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42616.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42616.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async42616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42617","meta42617",110416561,null)], null);
}));

(cljs.core.async.t_cljs$core$async42616.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42616");

(cljs.core.async.t_cljs$core$async42616.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async42616");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42616.
 */
cljs.core.async.__GT_t_cljs$core$async42616 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42616(p__$1,ch__$1,meta42617){
return (new cljs.core.async.t_cljs$core$async42616(p__$1,ch__$1,meta42617));
});

}

return (new cljs.core.async.t_cljs$core$async42616(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42620 = arguments.length;
switch (G__42620) {
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
var c__41109__auto___42660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_42641){
var state_val_42642 = (state_42641[(1)]);
if((state_val_42642 === (7))){
var inst_42637 = (state_42641[(2)]);
var state_42641__$1 = state_42641;
var statearr_42643_42661 = state_42641__$1;
(statearr_42643_42661[(2)] = inst_42637);

(statearr_42643_42661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42642 === (1))){
var state_42641__$1 = state_42641;
var statearr_42644_42662 = state_42641__$1;
(statearr_42644_42662[(2)] = null);

(statearr_42644_42662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42642 === (4))){
var inst_42623 = (state_42641[(7)]);
var inst_42623__$1 = (state_42641[(2)]);
var inst_42624 = (inst_42623__$1 == null);
var state_42641__$1 = (function (){var statearr_42645 = state_42641;
(statearr_42645[(7)] = inst_42623__$1);

return statearr_42645;
})();
if(cljs.core.truth_(inst_42624)){
var statearr_42646_42663 = state_42641__$1;
(statearr_42646_42663[(1)] = (5));

} else {
var statearr_42647_42664 = state_42641__$1;
(statearr_42647_42664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42642 === (6))){
var inst_42623 = (state_42641[(7)]);
var inst_42628 = p.call(null,inst_42623);
var state_42641__$1 = state_42641;
if(cljs.core.truth_(inst_42628)){
var statearr_42648_42665 = state_42641__$1;
(statearr_42648_42665[(1)] = (8));

} else {
var statearr_42649_42666 = state_42641__$1;
(statearr_42649_42666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42642 === (3))){
var inst_42639 = (state_42641[(2)]);
var state_42641__$1 = state_42641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42641__$1,inst_42639);
} else {
if((state_val_42642 === (2))){
var state_42641__$1 = state_42641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42641__$1,(4),ch);
} else {
if((state_val_42642 === (11))){
var inst_42631 = (state_42641[(2)]);
var state_42641__$1 = state_42641;
var statearr_42650_42667 = state_42641__$1;
(statearr_42650_42667[(2)] = inst_42631);

(statearr_42650_42667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42642 === (9))){
var state_42641__$1 = state_42641;
var statearr_42651_42668 = state_42641__$1;
(statearr_42651_42668[(2)] = null);

(statearr_42651_42668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42642 === (5))){
var inst_42626 = cljs.core.async.close_BANG_.call(null,out);
var state_42641__$1 = state_42641;
var statearr_42652_42669 = state_42641__$1;
(statearr_42652_42669[(2)] = inst_42626);

(statearr_42652_42669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42642 === (10))){
var inst_42634 = (state_42641[(2)]);
var state_42641__$1 = (function (){var statearr_42653 = state_42641;
(statearr_42653[(8)] = inst_42634);

return statearr_42653;
})();
var statearr_42654_42670 = state_42641__$1;
(statearr_42654_42670[(2)] = null);

(statearr_42654_42670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42642 === (8))){
var inst_42623 = (state_42641[(7)]);
var state_42641__$1 = state_42641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42641__$1,(11),out,inst_42623);
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
var cljs$core$async$state_machine__41015__auto__ = null;
var cljs$core$async$state_machine__41015__auto____0 = (function (){
var statearr_42655 = [null,null,null,null,null,null,null,null,null];
(statearr_42655[(0)] = cljs$core$async$state_machine__41015__auto__);

(statearr_42655[(1)] = (1));

return statearr_42655;
});
var cljs$core$async$state_machine__41015__auto____1 = (function (state_42641){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_42641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e42656){if((e42656 instanceof Object)){
var ex__41018__auto__ = e42656;
var statearr_42657_42671 = state_42641;
(statearr_42657_42671[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42672 = state_42641;
state_42641 = G__42672;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$state_machine__41015__auto__ = function(state_42641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41015__auto____1.call(this,state_42641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41015__auto____0;
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41015__auto____1;
return cljs$core$async$state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_42658 = f__41110__auto__.call(null);
(statearr_42658[(6)] = c__41109__auto___42660);

return statearr_42658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__42674 = arguments.length;
switch (G__42674) {
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
var c__41109__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_42737){
var state_val_42738 = (state_42737[(1)]);
if((state_val_42738 === (7))){
var inst_42733 = (state_42737[(2)]);
var state_42737__$1 = state_42737;
var statearr_42739_42777 = state_42737__$1;
(statearr_42739_42777[(2)] = inst_42733);

(statearr_42739_42777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42738 === (20))){
var inst_42703 = (state_42737[(7)]);
var inst_42714 = (state_42737[(2)]);
var inst_42715 = cljs.core.next.call(null,inst_42703);
var inst_42689 = inst_42715;
var inst_42690 = null;
var inst_42691 = (0);
var inst_42692 = (0);
var state_42737__$1 = (function (){var statearr_42740 = state_42737;
(statearr_42740[(8)] = inst_42691);

(statearr_42740[(9)] = inst_42714);

(statearr_42740[(10)] = inst_42692);

(statearr_42740[(11)] = inst_42690);

(statearr_42740[(12)] = inst_42689);

return statearr_42740;
})();
var statearr_42741_42778 = state_42737__$1;
(statearr_42741_42778[(2)] = null);

(statearr_42741_42778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42738 === (1))){
var state_42737__$1 = state_42737;
var statearr_42742_42779 = state_42737__$1;
(statearr_42742_42779[(2)] = null);

(statearr_42742_42779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42738 === (4))){
var inst_42678 = (state_42737[(13)]);
var inst_42678__$1 = (state_42737[(2)]);
var inst_42679 = (inst_42678__$1 == null);
var state_42737__$1 = (function (){var statearr_42743 = state_42737;
(statearr_42743[(13)] = inst_42678__$1);

return statearr_42743;
})();
if(cljs.core.truth_(inst_42679)){
var statearr_42744_42780 = state_42737__$1;
(statearr_42744_42780[(1)] = (5));

} else {
var statearr_42745_42781 = state_42737__$1;
(statearr_42745_42781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42738 === (15))){
var state_42737__$1 = state_42737;
var statearr_42749_42782 = state_42737__$1;
(statearr_42749_42782[(2)] = null);

(statearr_42749_42782[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42738 === (21))){
var state_42737__$1 = state_42737;
var statearr_42750_42783 = state_42737__$1;
(statearr_42750_42783[(2)] = null);

(statearr_42750_42783[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42738 === (13))){
var inst_42691 = (state_42737[(8)]);
var inst_42692 = (state_42737[(10)]);
var inst_42690 = (state_42737[(11)]);
var inst_42689 = (state_42737[(12)]);
var inst_42699 = (state_42737[(2)]);
var inst_42700 = (inst_42692 + (1));
var tmp42746 = inst_42691;
var tmp42747 = inst_42690;
var tmp42748 = inst_42689;
var inst_42689__$1 = tmp42748;
var inst_42690__$1 = tmp42747;
var inst_42691__$1 = tmp42746;
var inst_42692__$1 = inst_42700;
var state_42737__$1 = (function (){var statearr_42751 = state_42737;
(statearr_42751[(8)] = inst_42691__$1);

(statearr_42751[(10)] = inst_42692__$1);

(statearr_42751[(11)] = inst_42690__$1);

(statearr_42751[(12)] = inst_42689__$1);

(statearr_42751[(14)] = inst_42699);

return statearr_42751;
})();
var statearr_42752_42784 = state_42737__$1;
(statearr_42752_42784[(2)] = null);

(statearr_42752_42784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42738 === (22))){
var state_42737__$1 = state_42737;
var statearr_42753_42785 = state_42737__$1;
(statearr_42753_42785[(2)] = null);

(statearr_42753_42785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42738 === (6))){
var inst_42678 = (state_42737[(13)]);
var inst_42687 = f.call(null,inst_42678);
var inst_42688 = cljs.core.seq.call(null,inst_42687);
var inst_42689 = inst_42688;
var inst_42690 = null;
var inst_42691 = (0);
var inst_42692 = (0);
var state_42737__$1 = (function (){var statearr_42754 = state_42737;
(statearr_42754[(8)] = inst_42691);

(statearr_42754[(10)] = inst_42692);

(statearr_42754[(11)] = inst_42690);

(statearr_42754[(12)] = inst_42689);

return statearr_42754;
})();
var statearr_42755_42786 = state_42737__$1;
(statearr_42755_42786[(2)] = null);

(statearr_42755_42786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42738 === (17))){
var inst_42703 = (state_42737[(7)]);
var inst_42707 = cljs.core.chunk_first.call(null,inst_42703);
var inst_42708 = cljs.core.chunk_rest.call(null,inst_42703);
var inst_42709 = cljs.core.count.call(null,inst_42707);
var inst_42689 = inst_42708;
var inst_42690 = inst_42707;
var inst_42691 = inst_42709;
var inst_42692 = (0);
var state_42737__$1 = (function (){var statearr_42756 = state_42737;
(statearr_42756[(8)] = inst_42691);

(statearr_42756[(10)] = inst_42692);

(statearr_42756[(11)] = inst_42690);

(statearr_42756[(12)] = inst_42689);

return statearr_42756;
})();
var statearr_42757_42787 = state_42737__$1;
(statearr_42757_42787[(2)] = null);

(statearr_42757_42787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42738 === (3))){
var inst_42735 = (state_42737[(2)]);
var state_42737__$1 = state_42737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42737__$1,inst_42735);
} else {
if((state_val_42738 === (12))){
var inst_42723 = (state_42737[(2)]);
var state_42737__$1 = state_42737;
var statearr_42758_42788 = state_42737__$1;
(statearr_42758_42788[(2)] = inst_42723);

(statearr_42758_42788[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42738 === (2))){
var state_42737__$1 = state_42737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42737__$1,(4),in$);
} else {
if((state_val_42738 === (23))){
var inst_42731 = (state_42737[(2)]);
var state_42737__$1 = state_42737;
var statearr_42759_42789 = state_42737__$1;
(statearr_42759_42789[(2)] = inst_42731);

(statearr_42759_42789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42738 === (19))){
var inst_42718 = (state_42737[(2)]);
var state_42737__$1 = state_42737;
var statearr_42760_42790 = state_42737__$1;
(statearr_42760_42790[(2)] = inst_42718);

(statearr_42760_42790[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42738 === (11))){
var inst_42703 = (state_42737[(7)]);
var inst_42689 = (state_42737[(12)]);
var inst_42703__$1 = cljs.core.seq.call(null,inst_42689);
var state_42737__$1 = (function (){var statearr_42761 = state_42737;
(statearr_42761[(7)] = inst_42703__$1);

return statearr_42761;
})();
if(inst_42703__$1){
var statearr_42762_42791 = state_42737__$1;
(statearr_42762_42791[(1)] = (14));

} else {
var statearr_42763_42792 = state_42737__$1;
(statearr_42763_42792[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42738 === (9))){
var inst_42725 = (state_42737[(2)]);
var inst_42726 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_42737__$1 = (function (){var statearr_42764 = state_42737;
(statearr_42764[(15)] = inst_42725);

return statearr_42764;
})();
if(cljs.core.truth_(inst_42726)){
var statearr_42765_42793 = state_42737__$1;
(statearr_42765_42793[(1)] = (21));

} else {
var statearr_42766_42794 = state_42737__$1;
(statearr_42766_42794[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42738 === (5))){
var inst_42681 = cljs.core.async.close_BANG_.call(null,out);
var state_42737__$1 = state_42737;
var statearr_42767_42795 = state_42737__$1;
(statearr_42767_42795[(2)] = inst_42681);

(statearr_42767_42795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42738 === (14))){
var inst_42703 = (state_42737[(7)]);
var inst_42705 = cljs.core.chunked_seq_QMARK_.call(null,inst_42703);
var state_42737__$1 = state_42737;
if(inst_42705){
var statearr_42768_42796 = state_42737__$1;
(statearr_42768_42796[(1)] = (17));

} else {
var statearr_42769_42797 = state_42737__$1;
(statearr_42769_42797[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42738 === (16))){
var inst_42721 = (state_42737[(2)]);
var state_42737__$1 = state_42737;
var statearr_42770_42798 = state_42737__$1;
(statearr_42770_42798[(2)] = inst_42721);

(statearr_42770_42798[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42738 === (10))){
var inst_42692 = (state_42737[(10)]);
var inst_42690 = (state_42737[(11)]);
var inst_42697 = cljs.core._nth.call(null,inst_42690,inst_42692);
var state_42737__$1 = state_42737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42737__$1,(13),out,inst_42697);
} else {
if((state_val_42738 === (18))){
var inst_42703 = (state_42737[(7)]);
var inst_42712 = cljs.core.first.call(null,inst_42703);
var state_42737__$1 = state_42737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42737__$1,(20),out,inst_42712);
} else {
if((state_val_42738 === (8))){
var inst_42691 = (state_42737[(8)]);
var inst_42692 = (state_42737[(10)]);
var inst_42694 = (inst_42692 < inst_42691);
var inst_42695 = inst_42694;
var state_42737__$1 = state_42737;
if(cljs.core.truth_(inst_42695)){
var statearr_42771_42799 = state_42737__$1;
(statearr_42771_42799[(1)] = (10));

} else {
var statearr_42772_42800 = state_42737__$1;
(statearr_42772_42800[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__41015__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__41015__auto____0 = (function (){
var statearr_42773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42773[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__41015__auto__);

(statearr_42773[(1)] = (1));

return statearr_42773;
});
var cljs$core$async$mapcat_STAR__$_state_machine__41015__auto____1 = (function (state_42737){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_42737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e42774){if((e42774 instanceof Object)){
var ex__41018__auto__ = e42774;
var statearr_42775_42801 = state_42737;
(statearr_42775_42801[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42802 = state_42737;
state_42737 = G__42802;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__41015__auto__ = function(state_42737){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__41015__auto____1.call(this,state_42737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__41015__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__41015__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_42776 = f__41110__auto__.call(null);
(statearr_42776[(6)] = c__41109__auto__);

return statearr_42776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
}));

return c__41109__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__42804 = arguments.length;
switch (G__42804) {
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
var G__42807 = arguments.length;
switch (G__42807) {
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
var G__42810 = arguments.length;
switch (G__42810) {
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
var c__41109__auto___42857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_42834){
var state_val_42835 = (state_42834[(1)]);
if((state_val_42835 === (7))){
var inst_42829 = (state_42834[(2)]);
var state_42834__$1 = state_42834;
var statearr_42836_42858 = state_42834__$1;
(statearr_42836_42858[(2)] = inst_42829);

(statearr_42836_42858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42835 === (1))){
var inst_42811 = null;
var state_42834__$1 = (function (){var statearr_42837 = state_42834;
(statearr_42837[(7)] = inst_42811);

return statearr_42837;
})();
var statearr_42838_42859 = state_42834__$1;
(statearr_42838_42859[(2)] = null);

(statearr_42838_42859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42835 === (4))){
var inst_42814 = (state_42834[(8)]);
var inst_42814__$1 = (state_42834[(2)]);
var inst_42815 = (inst_42814__$1 == null);
var inst_42816 = cljs.core.not.call(null,inst_42815);
var state_42834__$1 = (function (){var statearr_42839 = state_42834;
(statearr_42839[(8)] = inst_42814__$1);

return statearr_42839;
})();
if(inst_42816){
var statearr_42840_42860 = state_42834__$1;
(statearr_42840_42860[(1)] = (5));

} else {
var statearr_42841_42861 = state_42834__$1;
(statearr_42841_42861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42835 === (6))){
var state_42834__$1 = state_42834;
var statearr_42842_42862 = state_42834__$1;
(statearr_42842_42862[(2)] = null);

(statearr_42842_42862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42835 === (3))){
var inst_42831 = (state_42834[(2)]);
var inst_42832 = cljs.core.async.close_BANG_.call(null,out);
var state_42834__$1 = (function (){var statearr_42843 = state_42834;
(statearr_42843[(9)] = inst_42831);

return statearr_42843;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42834__$1,inst_42832);
} else {
if((state_val_42835 === (2))){
var state_42834__$1 = state_42834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42834__$1,(4),ch);
} else {
if((state_val_42835 === (11))){
var inst_42814 = (state_42834[(8)]);
var inst_42823 = (state_42834[(2)]);
var inst_42811 = inst_42814;
var state_42834__$1 = (function (){var statearr_42844 = state_42834;
(statearr_42844[(7)] = inst_42811);

(statearr_42844[(10)] = inst_42823);

return statearr_42844;
})();
var statearr_42845_42863 = state_42834__$1;
(statearr_42845_42863[(2)] = null);

(statearr_42845_42863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42835 === (9))){
var inst_42814 = (state_42834[(8)]);
var state_42834__$1 = state_42834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42834__$1,(11),out,inst_42814);
} else {
if((state_val_42835 === (5))){
var inst_42811 = (state_42834[(7)]);
var inst_42814 = (state_42834[(8)]);
var inst_42818 = cljs.core._EQ_.call(null,inst_42814,inst_42811);
var state_42834__$1 = state_42834;
if(inst_42818){
var statearr_42847_42864 = state_42834__$1;
(statearr_42847_42864[(1)] = (8));

} else {
var statearr_42848_42865 = state_42834__$1;
(statearr_42848_42865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42835 === (10))){
var inst_42826 = (state_42834[(2)]);
var state_42834__$1 = state_42834;
var statearr_42849_42866 = state_42834__$1;
(statearr_42849_42866[(2)] = inst_42826);

(statearr_42849_42866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42835 === (8))){
var inst_42811 = (state_42834[(7)]);
var tmp42846 = inst_42811;
var inst_42811__$1 = tmp42846;
var state_42834__$1 = (function (){var statearr_42850 = state_42834;
(statearr_42850[(7)] = inst_42811__$1);

return statearr_42850;
})();
var statearr_42851_42867 = state_42834__$1;
(statearr_42851_42867[(2)] = null);

(statearr_42851_42867[(1)] = (2));


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
var cljs$core$async$state_machine__41015__auto__ = null;
var cljs$core$async$state_machine__41015__auto____0 = (function (){
var statearr_42852 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42852[(0)] = cljs$core$async$state_machine__41015__auto__);

(statearr_42852[(1)] = (1));

return statearr_42852;
});
var cljs$core$async$state_machine__41015__auto____1 = (function (state_42834){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_42834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e42853){if((e42853 instanceof Object)){
var ex__41018__auto__ = e42853;
var statearr_42854_42868 = state_42834;
(statearr_42854_42868[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42869 = state_42834;
state_42834 = G__42869;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$state_machine__41015__auto__ = function(state_42834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41015__auto____1.call(this,state_42834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41015__auto____0;
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41015__auto____1;
return cljs$core$async$state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_42855 = f__41110__auto__.call(null);
(statearr_42855[(6)] = c__41109__auto___42857);

return statearr_42855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__42871 = arguments.length;
switch (G__42871) {
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
var c__41109__auto___42937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_42909){
var state_val_42910 = (state_42909[(1)]);
if((state_val_42910 === (7))){
var inst_42905 = (state_42909[(2)]);
var state_42909__$1 = state_42909;
var statearr_42911_42938 = state_42909__$1;
(statearr_42911_42938[(2)] = inst_42905);

(statearr_42911_42938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42910 === (1))){
var inst_42872 = (new Array(n));
var inst_42873 = inst_42872;
var inst_42874 = (0);
var state_42909__$1 = (function (){var statearr_42912 = state_42909;
(statearr_42912[(7)] = inst_42874);

(statearr_42912[(8)] = inst_42873);

return statearr_42912;
})();
var statearr_42913_42939 = state_42909__$1;
(statearr_42913_42939[(2)] = null);

(statearr_42913_42939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42910 === (4))){
var inst_42877 = (state_42909[(9)]);
var inst_42877__$1 = (state_42909[(2)]);
var inst_42878 = (inst_42877__$1 == null);
var inst_42879 = cljs.core.not.call(null,inst_42878);
var state_42909__$1 = (function (){var statearr_42914 = state_42909;
(statearr_42914[(9)] = inst_42877__$1);

return statearr_42914;
})();
if(inst_42879){
var statearr_42915_42940 = state_42909__$1;
(statearr_42915_42940[(1)] = (5));

} else {
var statearr_42916_42941 = state_42909__$1;
(statearr_42916_42941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42910 === (15))){
var inst_42899 = (state_42909[(2)]);
var state_42909__$1 = state_42909;
var statearr_42917_42942 = state_42909__$1;
(statearr_42917_42942[(2)] = inst_42899);

(statearr_42917_42942[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42910 === (13))){
var state_42909__$1 = state_42909;
var statearr_42918_42943 = state_42909__$1;
(statearr_42918_42943[(2)] = null);

(statearr_42918_42943[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42910 === (6))){
var inst_42874 = (state_42909[(7)]);
var inst_42895 = (inst_42874 > (0));
var state_42909__$1 = state_42909;
if(cljs.core.truth_(inst_42895)){
var statearr_42919_42944 = state_42909__$1;
(statearr_42919_42944[(1)] = (12));

} else {
var statearr_42920_42945 = state_42909__$1;
(statearr_42920_42945[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42910 === (3))){
var inst_42907 = (state_42909[(2)]);
var state_42909__$1 = state_42909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42909__$1,inst_42907);
} else {
if((state_val_42910 === (12))){
var inst_42873 = (state_42909[(8)]);
var inst_42897 = cljs.core.vec.call(null,inst_42873);
var state_42909__$1 = state_42909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42909__$1,(15),out,inst_42897);
} else {
if((state_val_42910 === (2))){
var state_42909__$1 = state_42909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42909__$1,(4),ch);
} else {
if((state_val_42910 === (11))){
var inst_42889 = (state_42909[(2)]);
var inst_42890 = (new Array(n));
var inst_42873 = inst_42890;
var inst_42874 = (0);
var state_42909__$1 = (function (){var statearr_42921 = state_42909;
(statearr_42921[(7)] = inst_42874);

(statearr_42921[(10)] = inst_42889);

(statearr_42921[(8)] = inst_42873);

return statearr_42921;
})();
var statearr_42922_42946 = state_42909__$1;
(statearr_42922_42946[(2)] = null);

(statearr_42922_42946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42910 === (9))){
var inst_42873 = (state_42909[(8)]);
var inst_42887 = cljs.core.vec.call(null,inst_42873);
var state_42909__$1 = state_42909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42909__$1,(11),out,inst_42887);
} else {
if((state_val_42910 === (5))){
var inst_42874 = (state_42909[(7)]);
var inst_42873 = (state_42909[(8)]);
var inst_42877 = (state_42909[(9)]);
var inst_42882 = (state_42909[(11)]);
var inst_42881 = (inst_42873[inst_42874] = inst_42877);
var inst_42882__$1 = (inst_42874 + (1));
var inst_42883 = (inst_42882__$1 < n);
var state_42909__$1 = (function (){var statearr_42923 = state_42909;
(statearr_42923[(11)] = inst_42882__$1);

(statearr_42923[(12)] = inst_42881);

return statearr_42923;
})();
if(cljs.core.truth_(inst_42883)){
var statearr_42924_42947 = state_42909__$1;
(statearr_42924_42947[(1)] = (8));

} else {
var statearr_42925_42948 = state_42909__$1;
(statearr_42925_42948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42910 === (14))){
var inst_42902 = (state_42909[(2)]);
var inst_42903 = cljs.core.async.close_BANG_.call(null,out);
var state_42909__$1 = (function (){var statearr_42927 = state_42909;
(statearr_42927[(13)] = inst_42902);

return statearr_42927;
})();
var statearr_42928_42949 = state_42909__$1;
(statearr_42928_42949[(2)] = inst_42903);

(statearr_42928_42949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42910 === (10))){
var inst_42893 = (state_42909[(2)]);
var state_42909__$1 = state_42909;
var statearr_42929_42950 = state_42909__$1;
(statearr_42929_42950[(2)] = inst_42893);

(statearr_42929_42950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42910 === (8))){
var inst_42873 = (state_42909[(8)]);
var inst_42882 = (state_42909[(11)]);
var tmp42926 = inst_42873;
var inst_42873__$1 = tmp42926;
var inst_42874 = inst_42882;
var state_42909__$1 = (function (){var statearr_42930 = state_42909;
(statearr_42930[(7)] = inst_42874);

(statearr_42930[(8)] = inst_42873__$1);

return statearr_42930;
})();
var statearr_42931_42951 = state_42909__$1;
(statearr_42931_42951[(2)] = null);

(statearr_42931_42951[(1)] = (2));


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
var cljs$core$async$state_machine__41015__auto__ = null;
var cljs$core$async$state_machine__41015__auto____0 = (function (){
var statearr_42932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42932[(0)] = cljs$core$async$state_machine__41015__auto__);

(statearr_42932[(1)] = (1));

return statearr_42932;
});
var cljs$core$async$state_machine__41015__auto____1 = (function (state_42909){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_42909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e42933){if((e42933 instanceof Object)){
var ex__41018__auto__ = e42933;
var statearr_42934_42952 = state_42909;
(statearr_42934_42952[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42953 = state_42909;
state_42909 = G__42953;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$state_machine__41015__auto__ = function(state_42909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41015__auto____1.call(this,state_42909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41015__auto____0;
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41015__auto____1;
return cljs$core$async$state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_42935 = f__41110__auto__.call(null);
(statearr_42935[(6)] = c__41109__auto___42937);

return statearr_42935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__42955 = arguments.length;
switch (G__42955) {
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
var c__41109__auto___43025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_42997){
var state_val_42998 = (state_42997[(1)]);
if((state_val_42998 === (7))){
var inst_42993 = (state_42997[(2)]);
var state_42997__$1 = state_42997;
var statearr_42999_43026 = state_42997__$1;
(statearr_42999_43026[(2)] = inst_42993);

(statearr_42999_43026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42998 === (1))){
var inst_42956 = [];
var inst_42957 = inst_42956;
var inst_42958 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42997__$1 = (function (){var statearr_43000 = state_42997;
(statearr_43000[(7)] = inst_42957);

(statearr_43000[(8)] = inst_42958);

return statearr_43000;
})();
var statearr_43001_43027 = state_42997__$1;
(statearr_43001_43027[(2)] = null);

(statearr_43001_43027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42998 === (4))){
var inst_42961 = (state_42997[(9)]);
var inst_42961__$1 = (state_42997[(2)]);
var inst_42962 = (inst_42961__$1 == null);
var inst_42963 = cljs.core.not.call(null,inst_42962);
var state_42997__$1 = (function (){var statearr_43002 = state_42997;
(statearr_43002[(9)] = inst_42961__$1);

return statearr_43002;
})();
if(inst_42963){
var statearr_43003_43028 = state_42997__$1;
(statearr_43003_43028[(1)] = (5));

} else {
var statearr_43004_43029 = state_42997__$1;
(statearr_43004_43029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42998 === (15))){
var inst_42987 = (state_42997[(2)]);
var state_42997__$1 = state_42997;
var statearr_43005_43030 = state_42997__$1;
(statearr_43005_43030[(2)] = inst_42987);

(statearr_43005_43030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42998 === (13))){
var state_42997__$1 = state_42997;
var statearr_43006_43031 = state_42997__$1;
(statearr_43006_43031[(2)] = null);

(statearr_43006_43031[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42998 === (6))){
var inst_42957 = (state_42997[(7)]);
var inst_42982 = inst_42957.length;
var inst_42983 = (inst_42982 > (0));
var state_42997__$1 = state_42997;
if(cljs.core.truth_(inst_42983)){
var statearr_43007_43032 = state_42997__$1;
(statearr_43007_43032[(1)] = (12));

} else {
var statearr_43008_43033 = state_42997__$1;
(statearr_43008_43033[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42998 === (3))){
var inst_42995 = (state_42997[(2)]);
var state_42997__$1 = state_42997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42997__$1,inst_42995);
} else {
if((state_val_42998 === (12))){
var inst_42957 = (state_42997[(7)]);
var inst_42985 = cljs.core.vec.call(null,inst_42957);
var state_42997__$1 = state_42997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42997__$1,(15),out,inst_42985);
} else {
if((state_val_42998 === (2))){
var state_42997__$1 = state_42997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42997__$1,(4),ch);
} else {
if((state_val_42998 === (11))){
var inst_42961 = (state_42997[(9)]);
var inst_42965 = (state_42997[(10)]);
var inst_42975 = (state_42997[(2)]);
var inst_42976 = [];
var inst_42977 = inst_42976.push(inst_42961);
var inst_42957 = inst_42976;
var inst_42958 = inst_42965;
var state_42997__$1 = (function (){var statearr_43009 = state_42997;
(statearr_43009[(7)] = inst_42957);

(statearr_43009[(11)] = inst_42975);

(statearr_43009[(8)] = inst_42958);

(statearr_43009[(12)] = inst_42977);

return statearr_43009;
})();
var statearr_43010_43034 = state_42997__$1;
(statearr_43010_43034[(2)] = null);

(statearr_43010_43034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42998 === (9))){
var inst_42957 = (state_42997[(7)]);
var inst_42973 = cljs.core.vec.call(null,inst_42957);
var state_42997__$1 = state_42997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42997__$1,(11),out,inst_42973);
} else {
if((state_val_42998 === (5))){
var inst_42961 = (state_42997[(9)]);
var inst_42965 = (state_42997[(10)]);
var inst_42958 = (state_42997[(8)]);
var inst_42965__$1 = f.call(null,inst_42961);
var inst_42966 = cljs.core._EQ_.call(null,inst_42965__$1,inst_42958);
var inst_42967 = cljs.core.keyword_identical_QMARK_.call(null,inst_42958,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42968 = ((inst_42966) || (inst_42967));
var state_42997__$1 = (function (){var statearr_43011 = state_42997;
(statearr_43011[(10)] = inst_42965__$1);

return statearr_43011;
})();
if(cljs.core.truth_(inst_42968)){
var statearr_43012_43035 = state_42997__$1;
(statearr_43012_43035[(1)] = (8));

} else {
var statearr_43013_43036 = state_42997__$1;
(statearr_43013_43036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42998 === (14))){
var inst_42990 = (state_42997[(2)]);
var inst_42991 = cljs.core.async.close_BANG_.call(null,out);
var state_42997__$1 = (function (){var statearr_43015 = state_42997;
(statearr_43015[(13)] = inst_42990);

return statearr_43015;
})();
var statearr_43016_43037 = state_42997__$1;
(statearr_43016_43037[(2)] = inst_42991);

(statearr_43016_43037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42998 === (10))){
var inst_42980 = (state_42997[(2)]);
var state_42997__$1 = state_42997;
var statearr_43017_43038 = state_42997__$1;
(statearr_43017_43038[(2)] = inst_42980);

(statearr_43017_43038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42998 === (8))){
var inst_42961 = (state_42997[(9)]);
var inst_42965 = (state_42997[(10)]);
var inst_42957 = (state_42997[(7)]);
var inst_42970 = inst_42957.push(inst_42961);
var tmp43014 = inst_42957;
var inst_42957__$1 = tmp43014;
var inst_42958 = inst_42965;
var state_42997__$1 = (function (){var statearr_43018 = state_42997;
(statearr_43018[(7)] = inst_42957__$1);

(statearr_43018[(8)] = inst_42958);

(statearr_43018[(14)] = inst_42970);

return statearr_43018;
})();
var statearr_43019_43039 = state_42997__$1;
(statearr_43019_43039[(2)] = null);

(statearr_43019_43039[(1)] = (2));


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
var cljs$core$async$state_machine__41015__auto__ = null;
var cljs$core$async$state_machine__41015__auto____0 = (function (){
var statearr_43020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43020[(0)] = cljs$core$async$state_machine__41015__auto__);

(statearr_43020[(1)] = (1));

return statearr_43020;
});
var cljs$core$async$state_machine__41015__auto____1 = (function (state_42997){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_42997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e43021){if((e43021 instanceof Object)){
var ex__41018__auto__ = e43021;
var statearr_43022_43040 = state_42997;
(statearr_43022_43040[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43041 = state_42997;
state_42997 = G__43041;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
cljs$core$async$state_machine__41015__auto__ = function(state_42997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41015__auto____1.call(this,state_42997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41015__auto____0;
cljs$core$async$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41015__auto____1;
return cljs$core$async$state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_43023 = f__41110__auto__.call(null);
(statearr_43023[(6)] = c__41109__auto___43025);

return statearr_43023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1608009994978
