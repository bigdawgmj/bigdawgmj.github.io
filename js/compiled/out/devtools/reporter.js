// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
goog.require('devtools.context');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___30423 = arguments.length;
var i__4737__auto___30424 = (0);
while(true){
if((i__4737__auto___30424 < len__4736__auto___30423)){
args__4742__auto__.push((arguments[i__4737__auto___30424]));

var G__30425 = (i__4737__auto___30424 + (1));
i__4737__auto___30424 = G__30425;
=======
var len__4736__auto___30928 = arguments.length;
var i__4737__auto___30929 = (0);
while(true){
if((i__4737__auto___30929 < len__4736__auto___30928)){
args__4742__auto__.push((arguments[i__4737__auto___30929]));

var G__30930 = (i__4737__auto___30929 + (1));
i__4737__auto___30929 = G__30930;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

<<<<<<< HEAD
(devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__30418){
var vec__30419 = p__30418;
var context = cljs.core.nth.call(null,vec__30419,(0),null);
var footer = cljs.core.nth.call(null,vec__30419,(1),null);
=======
(devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__30923){
var vec__30924 = p__30923;
var context = cljs.core.nth.call(null,vec__30924,(0),null);
var footer = cljs.core.nth.call(null,vec__30924,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var console = devtools.context.get_console.call(null);
try{var message = (((e instanceof Error))?(function (){var or__4126__auto__ = e.message;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",devtools.util.get_lib_info.call(null),(cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):"."),"\n\n"].join('');
var footer_msg = (((!((footer == null))))?footer:["\n\n","---\n","Please report the issue here: ",devtools.reporter.issues_url].join(''));
var details = [context_msg,e,footer_msg];
var group_collapsed = (console["groupCollapsed"]);
var log = (console["log"]);
var group_end = (console["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(console,header);

log.apply(console,details);

return group_end.call(console);
<<<<<<< HEAD
}catch (e30422){var e__$1 = e30422;
=======
}catch (e30927){var e__$1 = e30927;
>>>>>>> 8f3c68a (Initial Commit)
return console.error("FATAL: report-internal-error! failed",e__$1);
}}));

(devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
<<<<<<< HEAD
(devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq30416){
var G__30417 = cljs.core.first.call(null,seq30416);
var seq30416__$1 = cljs.core.next.call(null,seq30416);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30417,seq30416__$1);
}));


//# sourceMappingURL=reporter.js.map?rel=1602979379827
=======
(devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq30921){
var G__30922 = cljs.core.first.call(null,seq30921);
var seq30921__$1 = cljs.core.next.call(null,seq30921);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30922,seq30921__$1);
}));


//# sourceMappingURL=reporter.js.map?rel=1608004505834
>>>>>>> 8f3c68a (Initial Commit)
