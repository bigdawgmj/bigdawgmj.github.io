// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('devtools.toolbox');
goog.require('cljs.core');
goog.require('devtools.protocols');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.markup');
/**
 * This is a simple wrapper for logging "busy" objects.
 *   This is especially handy when you happen to be logging javascript objects with many properties.
 *   Standard javascript console renderer tends to print a lot of infomation in the header in some cases and that can make
 *   console output pretty busy. By using envelope you can force your own short header and let the details expand on demand
 *   via disclosure triangle. The header can be styled and you can optionally specify preferred wrapping tag (advanced).
 */
devtools.toolbox.envelope = (function devtools$toolbox$envelope(var_args){
<<<<<<< HEAD
var G__30606 = arguments.length;
switch (G__30606) {
=======
var G__31111 = arguments.length;
switch (G__31111) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return devtools.toolbox.envelope.call(null,obj,new cljs.core.Keyword(null,"default-envelope-header","default-envelope-header",-90723598));
}));

(devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$2 = (function (obj,header){
return devtools.toolbox.envelope.call(null,obj,header,new cljs.core.Keyword(null,"default-envelope-style","default-envelope-style",-1676750479));
}));

(devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$3 = (function (obj,header,style){
return devtools.toolbox.envelope.call(null,obj,header,style,new cljs.core.Keyword(null,"span","span",1394872991));
}));

(devtools.toolbox.envelope.cljs$core$IFn$_invoke$arity$4 = (function (obj,header,style,tag){
<<<<<<< HEAD
if((typeof devtools !== 'undefined') && (typeof devtools.toolbox !== 'undefined') && (typeof devtools.toolbox.t_devtools$toolbox30607 !== 'undefined')){
=======
if((typeof devtools !== 'undefined') && (typeof devtools.toolbox !== 'undefined') && (typeof devtools.toolbox.t_devtools$toolbox31112 !== 'undefined')){
>>>>>>> 8f3c68a (Initial Commit)
} else {

/**
* @constructor
 * @implements {devtools.protocols.IFormat}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
devtools.toolbox.t_devtools$toolbox30607 = (function (obj,header,style,tag,meta30608){
=======
devtools.toolbox.t_devtools$toolbox31112 = (function (obj,header,style,tag,meta31113){
>>>>>>> 8f3c68a (Initial Commit)
this.obj = obj;
this.header = header;
this.style = style;
this.tag = tag;
<<<<<<< HEAD
this.meta30608 = meta30608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(devtools.toolbox.t_devtools$toolbox30607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30609,meta30608__$1){
var self__ = this;
var _30609__$1 = this;
return (new devtools.toolbox.t_devtools$toolbox30607(self__.obj,self__.header,self__.style,self__.tag,meta30608__$1));
}));

(devtools.toolbox.t_devtools$toolbox30607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30609){
var self__ = this;
var _30609__$1 = this;
return self__.meta30608;
}));

(devtools.toolbox.t_devtools$toolbox30607.prototype.devtools$protocols$IFormat$ = cljs.core.PROTOCOL_SENTINEL);

(devtools.toolbox.t_devtools$toolbox30607.prototype.devtools$protocols$IFormat$_header$arity$1 = (function (_){
=======
this.meta31113 = meta31113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(devtools.toolbox.t_devtools$toolbox31112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31114,meta31113__$1){
var self__ = this;
var _31114__$1 = this;
return (new devtools.toolbox.t_devtools$toolbox31112(self__.obj,self__.header,self__.style,self__.tag,meta31113__$1));
}));

(devtools.toolbox.t_devtools$toolbox31112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31114){
var self__ = this;
var _31114__$1 = this;
return self__.meta31113;
}));

(devtools.toolbox.t_devtools$toolbox31112.prototype.devtools$protocols$IFormat$ = cljs.core.PROTOCOL_SENTINEL);

(devtools.toolbox.t_devtools$toolbox31112.prototype.devtools$protocols$IFormat$_header$arity$1 = (function (_){
>>>>>>> 8f3c68a (Initial Commit)
var self__ = this;
var ___$1 = this;
return devtools.formatters.templating.render_markup.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.tag,self__.style], null),((cljs.core.fn_QMARK_.call(null,self__.header))?self__.header.call(null,self__.obj):self__.header)], null));
}));

<<<<<<< HEAD
(devtools.toolbox.t_devtools$toolbox30607.prototype.devtools$protocols$IFormat$_has_body$arity$1 = (function (_){
=======
(devtools.toolbox.t_devtools$toolbox31112.prototype.devtools$protocols$IFormat$_has_body$arity$1 = (function (_){
>>>>>>> 8f3c68a (Initial Commit)
var self__ = this;
var ___$1 = this;
return true;
}));

<<<<<<< HEAD
(devtools.toolbox.t_devtools$toolbox30607.prototype.devtools$protocols$IFormat$_body$arity$1 = (function (_){
=======
(devtools.toolbox.t_devtools$toolbox31112.prototype.devtools$protocols$IFormat$_body$arity$1 = (function (_){
>>>>>>> 8f3c68a (Initial Commit)
var self__ = this;
var ___$1 = this;
return devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_body_GT_.call(null,devtools.formatters.markup._LT_standard_body_reference_GT_.call(null,self__.obj)));
}));

<<<<<<< HEAD
(devtools.toolbox.t_devtools$toolbox30607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta30608","meta30608",-2088232669,null)], null);
}));

(devtools.toolbox.t_devtools$toolbox30607.cljs$lang$type = true);

(devtools.toolbox.t_devtools$toolbox30607.cljs$lang$ctorStr = "devtools.toolbox/t_devtools$toolbox30607");

(devtools.toolbox.t_devtools$toolbox30607.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"devtools.toolbox/t_devtools$toolbox30607");
}));

/**
 * Positional factory function for devtools.toolbox/t_devtools$toolbox30607.
 */
devtools.toolbox.__GT_t_devtools$toolbox30607 = (function devtools$toolbox$__GT_t_devtools$toolbox30607(obj__$1,header__$1,style__$1,tag__$1,meta30608){
return (new devtools.toolbox.t_devtools$toolbox30607(obj__$1,header__$1,style__$1,tag__$1,meta30608));
=======
(devtools.toolbox.t_devtools$toolbox31112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null),new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta31113","meta31113",61243993,null)], null);
}));

(devtools.toolbox.t_devtools$toolbox31112.cljs$lang$type = true);

(devtools.toolbox.t_devtools$toolbox31112.cljs$lang$ctorStr = "devtools.toolbox/t_devtools$toolbox31112");

(devtools.toolbox.t_devtools$toolbox31112.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"devtools.toolbox/t_devtools$toolbox31112");
}));

/**
 * Positional factory function for devtools.toolbox/t_devtools$toolbox31112.
 */
devtools.toolbox.__GT_t_devtools$toolbox31112 = (function devtools$toolbox$__GT_t_devtools$toolbox31112(obj__$1,header__$1,style__$1,tag__$1,meta31113){
return (new devtools.toolbox.t_devtools$toolbox31112(obj__$1,header__$1,style__$1,tag__$1,meta31113));
>>>>>>> 8f3c68a (Initial Commit)
});

}

<<<<<<< HEAD
return (new devtools.toolbox.t_devtools$toolbox30607(obj,header,style,tag,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new devtools.toolbox.t_devtools$toolbox31112(obj,header,style,tag,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 8f3c68a (Initial Commit)
}));

(devtools.toolbox.envelope.cljs$lang$maxFixedArity = 4);

/**
 * Forces object to be rendered by cljs-devtools during console logging.
 * 
 *   Unfortunately custom formatters subsystem in DevTools is not applied to primitive values like numbers, strings, null, etc.
 *   This wrapper can be used as a workaround if you really need to force cljs-devtools rendering:
 * 
 *  (.log js/console nil) ; will render 'null'
 *  (.log js/console (force-format nil)) ; will render 'nil' and not 'null'
 * 
 *   See https://github.com/binaryage/cljs-devtools/issues/17
 *   
 */
devtools.toolbox.force_format = (function devtools$toolbox$force_format(obj){
return devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_surrogate_GT_.call(null,obj));
});

<<<<<<< HEAD
//# sourceMappingURL=toolbox.js.map?rel=1602979380047
=======
//# sourceMappingURL=toolbox.js.map?rel=1608004506088
>>>>>>> 8f3c68a (Initial Commit)
