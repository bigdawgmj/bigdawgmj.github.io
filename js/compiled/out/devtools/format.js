// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

<<<<<<< HEAD
var devtools$format$IDevtoolsFormat$_header$dyn_27950 = (function (value){
=======
var devtools$format$IDevtoolsFormat$_header$dyn_28455 = (function (value){
>>>>>>> 8f3c68a (Initial Commit)
var x__4428__auto__ = (((value == null))?null:value);
var m__4429__auto__ = (devtools.format._header[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,value);
} else {
var m__4426__auto__ = (devtools.format._header["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
<<<<<<< HEAD
return devtools$format$IDevtoolsFormat$_header$dyn_27950.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_27951 = (function (value){
=======
return devtools$format$IDevtoolsFormat$_header$dyn_28455.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_28456 = (function (value){
>>>>>>> 8f3c68a (Initial Commit)
var x__4428__auto__ = (((value == null))?null:value);
var m__4429__auto__ = (devtools.format._has_body[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,value);
} else {
var m__4426__auto__ = (devtools.format._has_body["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
<<<<<<< HEAD
return devtools$format$IDevtoolsFormat$_has_body$dyn_27951.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_27952 = (function (value){
=======
return devtools$format$IDevtoolsFormat$_has_body$dyn_28456.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_28457 = (function (value){
>>>>>>> 8f3c68a (Initial Commit)
var x__4428__auto__ = (((value == null))?null:value);
var m__4429__auto__ = (devtools.format._body[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,value);
} else {
var m__4426__auto__ = (devtools.format._body["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
<<<<<<< HEAD
return devtools$format$IDevtoolsFormat$_body$dyn_27952.call(null,value);
=======
return devtools$format$IDevtoolsFormat$_body$dyn_28457.call(null,value);
>>>>>>> 8f3c68a (Initial Commit)
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
<<<<<<< HEAD
var o27953 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27953["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27954 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27954["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27955 = temp__5718__auto____$2;
return (o27955["make_template"]);
=======
var o28458 = temp__5718__auto__;
var temp__5718__auto____$1 = (o28458["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o28459 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o28459["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o28460 = temp__5718__auto____$2;
return (o28460["make_template"]);
>>>>>>> 8f3c68a (Initial Commit)
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
<<<<<<< HEAD
var o27956 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27956["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27957 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27957["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27958 = temp__5718__auto____$2;
return (o27958["make_group"]);
=======
var o28461 = temp__5718__auto__;
var temp__5718__auto____$1 = (o28461["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o28462 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o28462["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o28463 = temp__5718__auto____$2;
return (o28463["make_group"]);
>>>>>>> 8f3c68a (Initial Commit)
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
<<<<<<< HEAD
var o27959 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27959["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27960 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27960["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27961 = temp__5718__auto____$2;
return (o27961["make_reference"]);
=======
var o28464 = temp__5718__auto__;
var temp__5718__auto____$1 = (o28464["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o28465 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o28465["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o28466 = temp__5718__auto____$2;
return (o28466["make_reference"]);
>>>>>>> 8f3c68a (Initial Commit)
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
<<<<<<< HEAD
var o27962 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27962["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27963 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27963["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27964 = temp__5718__auto____$2;
return (o27964["make_surrogate"]);
=======
var o28467 = temp__5718__auto__;
var temp__5718__auto____$1 = (o28467["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o28468 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o28468["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o28469 = temp__5718__auto____$2;
return (o28469["make_surrogate"]);
>>>>>>> 8f3c68a (Initial Commit)
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
<<<<<<< HEAD
var o27965 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27965["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27966 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27966["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27967 = temp__5718__auto____$2;
return (o27967["render_markup"]);
=======
var o28470 = temp__5718__auto__;
var temp__5718__auto____$1 = (o28470["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o28471 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o28471["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o28472 = temp__5718__auto____$2;
return (o28472["render_markup"]);
>>>>>>> 8f3c68a (Initial Commit)
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
<<<<<<< HEAD
var o27968 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27968["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27969 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27969["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27970 = temp__5718__auto____$2;
return (o27970["_LT_header_GT_"]);
=======
var o28473 = temp__5718__auto__;
var temp__5718__auto____$1 = (o28473["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o28474 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o28474["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o28475 = temp__5718__auto____$2;
return (o28475["_LT_header_GT_"]);
>>>>>>> 8f3c68a (Initial Commit)
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
<<<<<<< HEAD
var o27971 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27971["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27972 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27972["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27973 = temp__5718__auto____$2;
return (o27973["_LT_standard_body_GT_"]);
=======
var o28476 = temp__5718__auto__;
var temp__5718__auto____$1 = (o28476["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o28477 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o28477["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o28478 = temp__5718__auto____$2;
return (o28478["_LT_standard_body_GT_"]);
>>>>>>> 8f3c68a (Initial Commit)
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___27975 = arguments.length;
var i__4737__auto___27976 = (0);
while(true){
if((i__4737__auto___27976 < len__4736__auto___27975)){
args__4742__auto__.push((arguments[i__4737__auto___27976]));

var G__27977 = (i__4737__auto___27976 + (1));
i__4737__auto___27976 = G__27977;
=======
var len__4736__auto___28480 = arguments.length;
var i__4737__auto___28481 = (0);
while(true){
if((i__4737__auto___28481 < len__4736__auto___28480)){
args__4742__auto__.push((arguments[i__4737__auto___28481]));

var G__28482 = (i__4737__auto___28481 + (1));
i__4737__auto___28481 = G__28482;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq27974){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27974));
=======
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq28479){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28479));
>>>>>>> 8f3c68a (Initial Commit)
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___27979 = arguments.length;
var i__4737__auto___27980 = (0);
while(true){
if((i__4737__auto___27980 < len__4736__auto___27979)){
args__4742__auto__.push((arguments[i__4737__auto___27980]));

var G__27981 = (i__4737__auto___27980 + (1));
i__4737__auto___27980 = G__27981;
=======
var len__4736__auto___28484 = arguments.length;
var i__4737__auto___28485 = (0);
while(true){
if((i__4737__auto___28485 < len__4736__auto___28484)){
args__4742__auto__.push((arguments[i__4737__auto___28485]));

var G__28486 = (i__4737__auto___28485 + (1));
i__4737__auto___28485 = G__28486;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(devtools.format.make_template.cljs$lang$applyTo = (function (seq27978){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27978));
=======
(devtools.format.make_template.cljs$lang$applyTo = (function (seq28483){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28483));
>>>>>>> 8f3c68a (Initial Commit)
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___27983 = arguments.length;
var i__4737__auto___27984 = (0);
while(true){
if((i__4737__auto___27984 < len__4736__auto___27983)){
args__4742__auto__.push((arguments[i__4737__auto___27984]));

var G__27985 = (i__4737__auto___27984 + (1));
i__4737__auto___27984 = G__27985;
=======
var len__4736__auto___28488 = arguments.length;
var i__4737__auto___28489 = (0);
while(true){
if((i__4737__auto___28489 < len__4736__auto___28488)){
args__4742__auto__.push((arguments[i__4737__auto___28489]));

var G__28490 = (i__4737__auto___28489 + (1));
i__4737__auto___28489 = G__28490;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(devtools.format.make_group.cljs$lang$applyTo = (function (seq27982){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27982));
=======
(devtools.format.make_group.cljs$lang$applyTo = (function (seq28487){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28487));
>>>>>>> 8f3c68a (Initial Commit)
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___27987 = arguments.length;
var i__4737__auto___27988 = (0);
while(true){
if((i__4737__auto___27988 < len__4736__auto___27987)){
args__4742__auto__.push((arguments[i__4737__auto___27988]));

var G__27989 = (i__4737__auto___27988 + (1));
i__4737__auto___27988 = G__27989;
=======
var len__4736__auto___28492 = arguments.length;
var i__4737__auto___28493 = (0);
while(true){
if((i__4737__auto___28493 < len__4736__auto___28492)){
args__4742__auto__.push((arguments[i__4737__auto___28493]));

var G__28494 = (i__4737__auto___28493 + (1));
i__4737__auto___28493 = G__28494;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq27986){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27986));
=======
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq28491){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28491));
>>>>>>> 8f3c68a (Initial Commit)
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___27991 = arguments.length;
var i__4737__auto___27992 = (0);
while(true){
if((i__4737__auto___27992 < len__4736__auto___27991)){
args__4742__auto__.push((arguments[i__4737__auto___27992]));

var G__27993 = (i__4737__auto___27992 + (1));
i__4737__auto___27992 = G__27993;
=======
var len__4736__auto___28496 = arguments.length;
var i__4737__auto___28497 = (0);
while(true){
if((i__4737__auto___28497 < len__4736__auto___28496)){
args__4742__auto__.push((arguments[i__4737__auto___28497]));

var G__28498 = (i__4737__auto___28497 + (1));
i__4737__auto___28497 = G__28498;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(devtools.format.template.cljs$lang$applyTo = (function (seq27990){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27990));
=======
(devtools.format.template.cljs$lang$applyTo = (function (seq28495){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28495));
>>>>>>> 8f3c68a (Initial Commit)
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___27995 = arguments.length;
var i__4737__auto___27996 = (0);
while(true){
if((i__4737__auto___27996 < len__4736__auto___27995)){
args__4742__auto__.push((arguments[i__4737__auto___27996]));

var G__27997 = (i__4737__auto___27996 + (1));
i__4737__auto___27996 = G__27997;
=======
var len__4736__auto___28500 = arguments.length;
var i__4737__auto___28501 = (0);
while(true){
if((i__4737__auto___28501 < len__4736__auto___28500)){
args__4742__auto__.push((arguments[i__4737__auto___28501]));

var G__28502 = (i__4737__auto___28501 + (1));
i__4737__auto___28501 = G__28502;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(devtools.format.group.cljs$lang$applyTo = (function (seq27994){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27994));
=======
(devtools.format.group.cljs$lang$applyTo = (function (seq28499){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28499));
>>>>>>> 8f3c68a (Initial Commit)
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___27999 = arguments.length;
var i__4737__auto___28000 = (0);
while(true){
if((i__4737__auto___28000 < len__4736__auto___27999)){
args__4742__auto__.push((arguments[i__4737__auto___28000]));

var G__28001 = (i__4737__auto___28000 + (1));
i__4737__auto___28000 = G__28001;
=======
var len__4736__auto___28504 = arguments.length;
var i__4737__auto___28505 = (0);
while(true){
if((i__4737__auto___28505 < len__4736__auto___28504)){
args__4742__auto__.push((arguments[i__4737__auto___28505]));

var G__28506 = (i__4737__auto___28505 + (1));
i__4737__auto___28505 = G__28506;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq27998){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27998));
=======
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq28503){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28503));
>>>>>>> 8f3c68a (Initial Commit)
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___28009 = arguments.length;
var i__4737__auto___28010 = (0);
while(true){
if((i__4737__auto___28010 < len__4736__auto___28009)){
args__4742__auto__.push((arguments[i__4737__auto___28010]));

var G__28011 = (i__4737__auto___28010 + (1));
i__4737__auto___28010 = G__28011;
=======
var len__4736__auto___28514 = arguments.length;
var i__4737__auto___28515 = (0);
while(true){
if((i__4737__auto___28515 < len__4736__auto___28514)){
args__4742__auto__.push((arguments[i__4737__auto___28515]));

var G__28516 = (i__4737__auto___28515 + (1));
i__4737__auto___28515 = G__28516;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

<<<<<<< HEAD
(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__28005){
var vec__28006 = p__28005;
var state_override = cljs.core.nth.call(null,vec__28006,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__28002_SHARP_){
return cljs.core.merge.call(null,p1__28002_SHARP_,state_override);
=======
(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__28510){
var vec__28511 = p__28510;
var state_override = cljs.core.nth.call(null,vec__28511,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__28507_SHARP_){
return cljs.core.merge.call(null,p1__28507_SHARP_,state_override);
>>>>>>> 8f3c68a (Initial Commit)
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
<<<<<<< HEAD
(devtools.format.reference.cljs$lang$applyTo = (function (seq28003){
var G__28004 = cljs.core.first.call(null,seq28003);
var seq28003__$1 = cljs.core.next.call(null,seq28003);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28004,seq28003__$1);
=======
(devtools.format.reference.cljs$lang$applyTo = (function (seq28508){
var G__28509 = cljs.core.first.call(null,seq28508);
var seq28508__$1 = cljs.core.next.call(null,seq28508);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28509,seq28508__$1);
>>>>>>> 8f3c68a (Initial Commit)
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___28013 = arguments.length;
var i__4737__auto___28014 = (0);
while(true){
if((i__4737__auto___28014 < len__4736__auto___28013)){
args__4742__auto__.push((arguments[i__4737__auto___28014]));

var G__28015 = (i__4737__auto___28014 + (1));
i__4737__auto___28014 = G__28015;
=======
var len__4736__auto___28518 = arguments.length;
var i__4737__auto___28519 = (0);
while(true){
if((i__4737__auto___28519 < len__4736__auto___28518)){
args__4742__auto__.push((arguments[i__4737__auto___28519]));

var G__28520 = (i__4737__auto___28519 + (1));
i__4737__auto___28519 = G__28520;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(devtools.format.build_header.cljs$lang$applyTo = (function (seq28012){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28012));
=======
(devtools.format.build_header.cljs$lang$applyTo = (function (seq28517){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28517));
>>>>>>> 8f3c68a (Initial Commit)
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___28018 = arguments.length;
var i__4737__auto___28019 = (0);
while(true){
if((i__4737__auto___28019 < len__4736__auto___28018)){
args__4742__auto__.push((arguments[i__4737__auto___28019]));

var G__28020 = (i__4737__auto___28019 + (1));
i__4737__auto___28019 = G__28020;
=======
var len__4736__auto___28523 = arguments.length;
var i__4737__auto___28524 = (0);
while(true){
if((i__4737__auto___28524 < len__4736__auto___28523)){
args__4742__auto__.push((arguments[i__4737__auto___28524]));

var G__28525 = (i__4737__auto___28524 + (1));
i__4737__auto___28524 = G__28525;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
<<<<<<< HEAD
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq28016){
var G__28017 = cljs.core.first.call(null,seq28016);
var seq28016__$1 = cljs.core.next.call(null,seq28016);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28017,seq28016__$1);
}));


//# sourceMappingURL=format.js.map?rel=1602979378051
=======
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq28521){
var G__28522 = cljs.core.first.call(null,seq28521);
var seq28521__$1 = cljs.core.next.call(null,seq28521);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28522,seq28521__$1);
}));


//# sourceMappingURL=format.js.map?rel=1608004503908
>>>>>>> 8f3c68a (Initial Commit)
