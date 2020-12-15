// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('goog.async.nextTick');
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer.call(null,(32));
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = (1024);
cljs.core.async.impl.dispatch.process_messages = (function cljs$core$async$impl$dispatch$process_messages(){
(cljs.core.async.impl.dispatch.running_QMARK_ = true);

(cljs.core.async.impl.dispatch.queued_QMARK_ = false);

<<<<<<< HEAD
var count_30498 = (0);
while(true){
var m_30499 = cljs.core.async.impl.dispatch.tasks.pop();
if((m_30499 == null)){
} else {
m_30499.call(null);

if((count_30498 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE)){
var G__30500 = (count_30498 + (1));
count_30498 = G__30500;
=======
var count_31003 = (0);
while(true){
var m_31004 = cljs.core.async.impl.dispatch.tasks.pop();
if((m_31004 == null)){
} else {
m_31004.call(null);

if((count_31003 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE)){
var G__31005 = (count_31003 + (1));
count_31003 = G__31005;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
}
break;
}

(cljs.core.async.impl.dispatch.running_QMARK_ = false);

if((cljs.core.async.impl.dispatch.tasks.length > (0))){
return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
} else {
return null;
}
});
cljs.core.async.impl.dispatch.queue_dispatcher = (function cljs$core$async$impl$dispatch$queue_dispatcher(){
if(((cljs.core.async.impl.dispatch.queued_QMARK_) && (cljs.core.async.impl.dispatch.running_QMARK_))){
return null;
} else {
(cljs.core.async.impl.dispatch.queued_QMARK_ = true);

return goog.async.nextTick(cljs.core.async.impl.dispatch.process_messages);
}
});
cljs.core.async.impl.dispatch.run = (function cljs$core$async$impl$dispatch$run(f){
cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);

return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
});
cljs.core.async.impl.dispatch.queue_delay = (function cljs$core$async$impl$dispatch$queue_delay(f,delay){
return setTimeout(f,delay);
});

<<<<<<< HEAD
//# sourceMappingURL=dispatch.js.map?rel=1602979379962
=======
//# sourceMappingURL=dispatch.js.map?rel=1608004505999
>>>>>>> 8f3c68a (Initial Commit)
