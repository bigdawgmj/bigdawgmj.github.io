// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('devtools.util');
goog.require('cljs.core');
goog.require('goog.userAgent');
goog.require('clojure.data');
goog.require('devtools.version');
goog.require('devtools.context');
goog.require('cljs.pprint');
goog.require('devtools.prefs');
devtools.util.lib_info_style = "color:black;font-weight:bold;";
devtools.util.reset_style = "color:black";
devtools.util.advanced_build_explanation_url = "https://github.com/binaryage/cljs-devtools/blob/master/docs/faq.md#why-custom-formatters-do-not-work-for-advanced-builds";
devtools.util._STAR_custom_formatters_active_STAR_ = false;
devtools.util._STAR_console_open_STAR_ = false;
devtools.util._STAR_custom_formatters_warning_reported_STAR_ = false;
devtools.util.pprint_str = (function devtools$util$pprint_str(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___30051 = arguments.length;
var i__4737__auto___30052 = (0);
while(true){
if((i__4737__auto___30052 < len__4736__auto___30051)){
args__4742__auto__.push((arguments[i__4737__auto___30052]));

var G__30053 = (i__4737__auto___30052 + (1));
i__4737__auto___30052 = G__30053;
=======
var len__4736__auto___30556 = arguments.length;
var i__4737__auto___30557 = (0);
while(true){
if((i__4737__auto___30557 < len__4736__auto___30556)){
args__4742__auto__.push((arguments[i__4737__auto___30557]));

var G__30558 = (i__4737__auto___30557 + (1));
i__4737__auto___30557 = G__30558;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var sb__4667__auto__ = (new goog.string.StringBuffer());
<<<<<<< HEAD
var _STAR_print_newline_STAR__orig_val__30045_30054 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30046_30055 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30047_30056 = true;
var _STAR_print_fn_STAR__temp_val__30048_30057 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30047_30056);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30048_30057);

try{var _STAR_print_level_STAR__orig_val__30049_30058 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__30050_30059 = (300);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__30050_30059);

try{cljs.core.apply.call(null,cljs.pprint.pprint,args);
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__30049_30058);
}}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30046_30055);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30045_30054);
=======
var _STAR_print_newline_STAR__orig_val__30550_30559 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30551_30560 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30552_30561 = true;
var _STAR_print_fn_STAR__temp_val__30553_30562 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30552_30561);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30553_30562);

try{var _STAR_print_level_STAR__orig_val__30554_30563 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__30555_30564 = (300);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__30555_30564);

try{cljs.core.apply.call(null,cljs.pprint.pprint,args);
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__30554_30563);
}}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30551_30560);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30550_30559);
>>>>>>> 8f3c68a (Initial Commit)
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
}));

(devtools.util.pprint_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(devtools.util.pprint_str.cljs$lang$applyTo = (function (seq30044){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30044));
=======
(devtools.util.pprint_str.cljs$lang$applyTo = (function (seq30549){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30549));
>>>>>>> 8f3c68a (Initial Commit)
}));

devtools.util.make_version_info = (function devtools$util$make_version_info(){
return "1.0.0";
});
devtools.util.make_lib_info = (function devtools$util$make_lib_info(){
return ["CLJS DevTools ",devtools.util.make_version_info.call(null)].join('');
});
devtools.util.get_lib_info = (function devtools$util$get_lib_info(){
return devtools.util.make_lib_info.call(null);
});
devtools.util.get_node_info = (function devtools$util$get_node_info(root){
try{var temp__5724__auto__ = (root["process"]);
if((temp__5724__auto__ == null)){
return null;
} else {
var process = temp__5724__auto__;
var version = (process["version"]);
var platform = (process["platform"]);
if(cljs.core.truth_((function (){var and__4115__auto__ = version;
if(cljs.core.truth_(and__4115__auto__)){
return platform;
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),version,new cljs.core.Keyword(null,"platform","platform",-1086422114),platform], null);
} else {
return null;
}
}
<<<<<<< HEAD
}catch (e30060){var _ = e30060;
=======
}catch (e30565){var _ = e30565;
>>>>>>> 8f3c68a (Initial Commit)
return null;
}});
devtools.util.get_node_description = (function devtools$util$get_node_description(node_info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"platform","platform",-1086422114).cljs$core$IFn$_invoke$arity$1(node_info);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "?";
}
})()),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(node_info);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "?";
}
})())].join('');
});
devtools.util.in_node_context_QMARK_ = (function devtools$util$in_node_context_QMARK_(){
return (!((devtools.util.get_node_info.call(null,devtools.context.get_root.call(null)) == null)));
});
devtools.util.get_js_context_description = (function devtools$util$get_js_context_description(){
var temp__5718__auto__ = devtools.util.get_node_info.call(null,devtools.context.get_root.call(null));
if(cljs.core.truth_(temp__5718__auto__)){
var node_info = temp__5718__auto__;
return ["node/",devtools.util.get_node_description.call(null,node_info)].join('');
} else {
var user_agent = goog.userAgent.getUserAgentString();
if(cljs.core.empty_QMARK_.call(null,user_agent)){
return "<unknown context>";
} else {
return user_agent;
}
}
});
devtools.util.unknown_feature_msg = (function devtools$util$unknown_feature_msg(feature,known_features,lib_info){
return ["No such feature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)," is currently available in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_info),". ","The list of supported features is ",cljs.core.pr_str.call(null,known_features),"."].join('');
});
devtools.util.feature_not_available_msg = (function devtools$util$feature_not_available_msg(feature){
return ["Feature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)," cannot be installed. ","Unsupported Javascript context: ",devtools.util.get_js_context_description.call(null),"."].join('');
});
devtools.util.custom_formatters_not_active_msg = (function devtools$util$custom_formatters_not_active_msg(){
return ["CLJS DevTools: some custom formatters were not rendered.\n","https://github.com/binaryage/cljs-devtools/blob/master/docs/faq.md#why-some-custom-formatters-were-not-rendered"].join('');
});
devtools.util.formatter_key = "devtoolsFormatters";
devtools.util.get_formatters_safe = (function devtools$util$get_formatters_safe(){
var formatters = (devtools.context.get_root.call(null)[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_.call(null,formatters)){
return formatters;
} else {
return [];
}
});
devtools.util.set_formatters_safe_BANG_ = (function devtools$util$set_formatters_safe_BANG_(new_formatters){
if((((new_formatters == null)) || (cljs.core.array_QMARK_.call(null,new_formatters)))){
} else {
throw (new Error("Assert failed: (or (nil? new-formatters) (array? new-formatters))"));
}

return (devtools.context.get_root.call(null)[devtools.util.formatter_key] = ((cljs.core.empty_QMARK_.call(null,new_formatters))?null:new_formatters));
});
devtools.util.print_config_overrides_if_requested_BANG_ = (function devtools$util$print_config_overrides_if_requested_BANG_(msg){
if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"print-config-overrides","print-config-overrides",-274716965)))){
var diff = cljs.core.second.call(null,clojure.data.diff.call(null,cljs.core.deref.call(null,devtools.prefs.default_config),devtools.prefs.get_prefs.call(null)));
if((!(cljs.core.empty_QMARK_.call(null,diff)))){
return devtools.context.get_console.call(null).info(msg,devtools.util.pprint_str.call(null,diff));
} else {
return null;
}
} else {
return null;
}
});

/**
* @constructor
*/
devtools.util.CustomFormattersDetector = (function (){
});

(devtools.util.CustomFormattersDetector.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(devtools.util.CustomFormattersDetector.cljs$lang$type = true);

(devtools.util.CustomFormattersDetector.cljs$lang$ctorStr = "devtools.util/CustomFormattersDetector");

(devtools.util.CustomFormattersDetector.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"devtools.util/CustomFormattersDetector");
}));

/**
 * Positional factory function for devtools.util/CustomFormattersDetector.
 */
devtools.util.__GT_CustomFormattersDetector = (function devtools$util$__GT_CustomFormattersDetector(){
return (new devtools.util.CustomFormattersDetector());
});

devtools.util.make_detector = (function devtools$util$make_detector(){
var detector = (new devtools.util.CustomFormattersDetector());
(detector["header"] = (function (_object,_config){
(devtools.util._STAR_custom_formatters_active_STAR_ = true);

return null;
}));

(detector["hasBody"] = cljs.core.constantly.call(null,false));

(detector["body"] = cljs.core.constantly.call(null,null));

return detector;
});
devtools.util.install_detector_BANG_ = (function devtools$util$install_detector_BANG_(detector){
var formatters = devtools.util.get_formatters_safe.call(null);
formatters.push(detector);

return devtools.util.set_formatters_safe_BANG_.call(null,formatters);
});
devtools.util.uninstall_detector_BANG_ = (function devtools$util$uninstall_detector_BANG_(detector){
var current_formatters = (devtools.context.get_root.call(null)[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_.call(null,current_formatters)){
<<<<<<< HEAD
var new_formatters = current_formatters.filter((function (p1__30061_SHARP_){
return (!(cljs.core._EQ_.call(null,detector,p1__30061_SHARP_)));
=======
var new_formatters = current_formatters.filter((function (p1__30566_SHARP_){
return (!(cljs.core._EQ_.call(null,detector,p1__30566_SHARP_)));
>>>>>>> 8f3c68a (Initial Commit)
}));
return devtools.util.set_formatters_safe_BANG_.call(null,new_formatters);
} else {
return null;
}
});
devtools.util.check_custom_formatters_active_BANG_ = (function devtools$util$check_custom_formatters_active_BANG_(){
if(cljs.core.truth_((function (){var and__4115__auto__ = devtools.util._STAR_console_open_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,devtools.util._STAR_custom_formatters_active_STAR_);
} else {
return and__4115__auto__;
}
})())){
if(cljs.core.truth_(devtools.util._STAR_custom_formatters_warning_reported_STAR_)){
return null;
} else {
(devtools.util._STAR_custom_formatters_warning_reported_STAR_ = true);

return devtools.context.get_console.call(null).warn(devtools.util.custom_formatters_not_active_msg.call(null));
}
} else {
return null;
}
});
devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_ = (function devtools$util$uninstall_detector_and_check_custom_formatters_active_BANG_(detector){
devtools.util.uninstall_detector_BANG_.call(null,detector);

return devtools.util.check_custom_formatters_active_BANG_.call(null);
});
devtools.util.make_detection_printer = (function devtools$util$make_detection_printer(){
var f = (function (){
return null;
});
<<<<<<< HEAD
var G__30062_30063 = f;
var target__27919__auto___30064 = G__30062_30063;
if(cljs.core.truth_(target__27919__auto___30064)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30062_30063)].join(''),"\n","target__27919__auto__"].join('')));
}

(target__27919__auto___30064["toString"] = (function (){
=======
var G__30567_30568 = f;
var target__28424__auto___30569 = G__30567_30568;
if(cljs.core.truth_(target__28424__auto___30569)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30567_30568)].join(''),"\n","target__28424__auto__"].join('')));
}

(target__28424__auto___30569["toString"] = (function (){
>>>>>>> 8f3c68a (Initial Commit)
(devtools.util._STAR_console_open_STAR_ = true);

setTimeout(devtools.util.check_custom_formatters_active_BANG_,(0));

return "";
}));


return f;
});
devtools.util.wrap_with_custom_formatter_detection_BANG_ = (function devtools$util$wrap_with_custom_formatter_detection_BANG_(f){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-detect-custom-formatters","dont-detect-custom-formatters",-29005804)))){
var detector = devtools.util.make_detector.call(null);
devtools.util.install_detector_BANG_.call(null,detector);

f.call(null,"%c%s","color:transparent",devtools.util.make_detection_printer.call(null));

return setTimeout(cljs.core.partial.call(null,devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_,detector),(0));
} else {
return f.call(null);
}
});
devtools.util.feature_for_display = (function devtools$util$feature_for_display(installed_features,feature){
var color = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),installed_features))?"color:#0000ff":"color:#ccc");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%c%s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)], null)], null);
});
devtools.util.feature_list_display = (function devtools$util$feature_list_display(installed_features,feature_groups){
var labels = cljs.core.map.call(null,cljs.core.partial.call(null,devtools.util.feature_for_display,installed_features),new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups));
var _STAR_ = (function (accum,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,accum))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,val))].join(''),cljs.core.concat.call(null,cljs.core.second.call(null,accum),cljs.core.second.call(null,val))], null);
});
return cljs.core.reduce.call(null,_STAR_,cljs.core.first.call(null,labels),cljs.core.rest.call(null,labels));
});
devtools.util.display_banner_BANG_ = (function devtools$util$display_banner_BANG_(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___30072 = arguments.length;
var i__4737__auto___30073 = (0);
while(true){
if((i__4737__auto___30073 < len__4736__auto___30072)){
args__4742__auto__.push((arguments[i__4737__auto___30073]));

var G__30074 = (i__4737__auto___30073 + (1));
i__4737__auto___30073 = G__30074;
=======
var len__4736__auto___30577 = arguments.length;
var i__4737__auto___30578 = (0);
while(true){
if((i__4737__auto___30578 < len__4736__auto___30577)){
args__4742__auto__.push((arguments[i__4737__auto___30578]));

var G__30579 = (i__4737__auto___30578 + (1));
i__4737__auto___30578 = G__30579;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (installed_features,feature_groups,fmt,params){
<<<<<<< HEAD
var vec__30069 = devtools.util.feature_list_display.call(null,installed_features,feature_groups);
var fmt_str = cljs.core.nth.call(null,vec__30069,(0),null);
var fmt_params = cljs.core.nth.call(null,vec__30069,(1),null);
return devtools.util.wrap_with_custom_formatter_detection_BANG_.call(null,(function() { 
var G__30075__delegate = function (add_fmt,add_args){
=======
var vec__30574 = devtools.util.feature_list_display.call(null,installed_features,feature_groups);
var fmt_str = cljs.core.nth.call(null,vec__30574,(0),null);
var fmt_params = cljs.core.nth.call(null,vec__30574,(1),null);
return devtools.util.wrap_with_custom_formatter_detection_BANG_.call(null,(function() { 
var G__30580__delegate = function (add_fmt,add_args){
>>>>>>> 8f3c68a (Initial Commit)
var items = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(add_fmt)].join('')], null),params,fmt_params,add_args);
var console = devtools.context.get_console.call(null);
return console.info.apply(console,cljs.core.into_array.call(null,items));
};
<<<<<<< HEAD
var G__30075 = function (add_fmt,var_args){
var add_args = null;
if (arguments.length > 1) {
var G__30076__i = 0, G__30076__a = new Array(arguments.length -  1);
while (G__30076__i < G__30076__a.length) {G__30076__a[G__30076__i] = arguments[G__30076__i + 1]; ++G__30076__i;}
  add_args = new cljs.core.IndexedSeq(G__30076__a,0,null);
} 
return G__30075__delegate.call(this,add_fmt,add_args);};
G__30075.cljs$lang$maxFixedArity = 1;
G__30075.cljs$lang$applyTo = (function (arglist__30077){
var add_fmt = cljs.core.first(arglist__30077);
var add_args = cljs.core.rest(arglist__30077);
return G__30075__delegate(add_fmt,add_args);
});
G__30075.cljs$core$IFn$_invoke$arity$variadic = G__30075__delegate;
return G__30075;
=======
var G__30580 = function (add_fmt,var_args){
var add_args = null;
if (arguments.length > 1) {
var G__30581__i = 0, G__30581__a = new Array(arguments.length -  1);
while (G__30581__i < G__30581__a.length) {G__30581__a[G__30581__i] = arguments[G__30581__i + 1]; ++G__30581__i;}
  add_args = new cljs.core.IndexedSeq(G__30581__a,0,null);
} 
return G__30580__delegate.call(this,add_fmt,add_args);};
G__30580.cljs$lang$maxFixedArity = 1;
G__30580.cljs$lang$applyTo = (function (arglist__30582){
var add_fmt = cljs.core.first(arglist__30582);
var add_args = cljs.core.rest(arglist__30582);
return G__30580__delegate(add_fmt,add_args);
});
G__30580.cljs$core$IFn$_invoke$arity$variadic = G__30580__delegate;
return G__30580;
>>>>>>> 8f3c68a (Initial Commit)
})()
);
}));

(devtools.util.display_banner_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
<<<<<<< HEAD
(devtools.util.display_banner_BANG_.cljs$lang$applyTo = (function (seq30065){
var G__30066 = cljs.core.first.call(null,seq30065);
var seq30065__$1 = cljs.core.next.call(null,seq30065);
var G__30067 = cljs.core.first.call(null,seq30065__$1);
var seq30065__$2 = cljs.core.next.call(null,seq30065__$1);
var G__30068 = cljs.core.first.call(null,seq30065__$2);
var seq30065__$3 = cljs.core.next.call(null,seq30065__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30066,G__30067,G__30068,seq30065__$3);
=======
(devtools.util.display_banner_BANG_.cljs$lang$applyTo = (function (seq30570){
var G__30571 = cljs.core.first.call(null,seq30570);
var seq30570__$1 = cljs.core.next.call(null,seq30570);
var G__30572 = cljs.core.first.call(null,seq30570__$1);
var seq30570__$2 = cljs.core.next.call(null,seq30570__$1);
var G__30573 = cljs.core.first.call(null,seq30570__$2);
var seq30570__$3 = cljs.core.next.call(null,seq30570__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30571,G__30572,G__30573,seq30570__$3);
>>>>>>> 8f3c68a (Initial Commit)
}));

devtools.util.display_banner_if_needed_BANG_ = (function devtools$util$display_banner_if_needed_BANG_(features_to_install,feature_groups){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-display-banner","dont-display-banner",-1175550370)))){
var banner = "Installing %c%s%c and enabling features";
return devtools.util.display_banner_BANG_.call(null,features_to_install,feature_groups,banner,devtools.util.lib_info_style,devtools.util.get_lib_info.call(null),devtools.util.reset_style);
} else {
return (devtools.util._STAR_custom_formatters_active_STAR_ = true);
}
});
devtools.util.report_unknown_features_BANG_ = (function devtools$util$report_unknown_features_BANG_(features,known_features){
var lib_info = devtools.util.get_lib_info.call(null);
<<<<<<< HEAD
var seq__30078 = cljs.core.seq.call(null,features);
var chunk__30079 = null;
var count__30080 = (0);
var i__30081 = (0);
while(true){
if((i__30081 < count__30080)){
var feature = cljs.core._nth.call(null,chunk__30079,i__30081);
=======
var seq__30583 = cljs.core.seq.call(null,features);
var chunk__30584 = null;
var count__30585 = (0);
var i__30586 = (0);
while(true){
if((i__30586 < count__30585)){
var feature = cljs.core._nth.call(null,chunk__30584,i__30586);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features))){
devtools.context.get_console.call(null).warn(devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}


<<<<<<< HEAD
var G__30082 = seq__30078;
var G__30083 = chunk__30079;
var G__30084 = count__30080;
var G__30085 = (i__30081 + (1));
seq__30078 = G__30082;
chunk__30079 = G__30083;
count__30080 = G__30084;
i__30081 = G__30085;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30078);
if(temp__5720__auto__){
var seq__30078__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30078__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30078__$1);
var G__30086 = cljs.core.chunk_rest.call(null,seq__30078__$1);
var G__30087 = c__4556__auto__;
var G__30088 = cljs.core.count.call(null,c__4556__auto__);
var G__30089 = (0);
seq__30078 = G__30086;
chunk__30079 = G__30087;
count__30080 = G__30088;
i__30081 = G__30089;
continue;
} else {
var feature = cljs.core.first.call(null,seq__30078__$1);
=======
var G__30587 = seq__30583;
var G__30588 = chunk__30584;
var G__30589 = count__30585;
var G__30590 = (i__30586 + (1));
seq__30583 = G__30587;
chunk__30584 = G__30588;
count__30585 = G__30589;
i__30586 = G__30590;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30583);
if(temp__5720__auto__){
var seq__30583__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30583__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30583__$1);
var G__30591 = cljs.core.chunk_rest.call(null,seq__30583__$1);
var G__30592 = c__4556__auto__;
var G__30593 = cljs.core.count.call(null,c__4556__auto__);
var G__30594 = (0);
seq__30583 = G__30591;
chunk__30584 = G__30592;
count__30585 = G__30593;
i__30586 = G__30594;
continue;
} else {
var feature = cljs.core.first.call(null,seq__30583__$1);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features))){
devtools.context.get_console.call(null).warn(devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}


<<<<<<< HEAD
var G__30090 = cljs.core.next.call(null,seq__30078__$1);
var G__30091 = null;
var G__30092 = (0);
var G__30093 = (0);
seq__30078 = G__30090;
chunk__30079 = G__30091;
count__30080 = G__30092;
i__30081 = G__30093;
=======
var G__30595 = cljs.core.next.call(null,seq__30583__$1);
var G__30596 = null;
var G__30597 = (0);
var G__30598 = (0);
seq__30583 = G__30595;
chunk__30584 = G__30596;
count__30585 = G__30597;
i__30586 = G__30598;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
return null;
}
}
break;
}
});
devtools.util.is_known_feature_QMARK_ = (function devtools$util$is_known_feature_QMARK_(known_features,feature){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features));
});
devtools.util.convert_legacy_feature = (function devtools$util$convert_legacy_feature(feature){
<<<<<<< HEAD
var G__30094 = feature;
var G__30094__$1 = (((G__30094 instanceof cljs.core.Keyword))?G__30094.fqn:null);
switch (G__30094__$1) {
=======
var G__30599 = feature;
var G__30599__$1 = (((G__30599 instanceof cljs.core.Keyword))?G__30599.fqn:null);
switch (G__30599__$1) {
>>>>>>> 8f3c68a (Initial Commit)
case "custom-formatters":
return new cljs.core.Keyword(null,"formatters","formatters",-1875637118);

break;
case "sanity-hints":
return new cljs.core.Keyword(null,"hints","hints",-991113151);

break;
default:
return feature;

}
});
devtools.util.convert_legacy_features = (function devtools$util$convert_legacy_features(features){
return cljs.core.map.call(null,devtools.util.convert_legacy_feature,features);
});
devtools.util.sanititze_features_BANG_ = (function devtools$util$sanititze_features_BANG_(features,feature_groups){
var known_features = new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups);
var features__$1 = devtools.util.convert_legacy_features.call(null,features);
devtools.util.report_unknown_features_BANG_.call(null,features__$1,known_features);

return cljs.core.filter.call(null,cljs.core.partial.call(null,devtools.util.is_known_feature_QMARK_,known_features),features__$1);
});
devtools.util.resolve_features_BANG_ = (function devtools$util$resolve_features_BANG_(features_desc,feature_groups){
var features = (cljs.core.truth_((((features_desc instanceof cljs.core.Keyword))?features_desc.cljs$core$IFn$_invoke$arity$1(feature_groups):false))?features_desc.call(null,feature_groups):(((features_desc == null))?new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(feature_groups):((cljs.core.seqable_QMARK_.call(null,features_desc))?features_desc:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features_desc], null)
)));
return devtools.util.sanititze_features_BANG_.call(null,features,feature_groups);
});
devtools.util.under_advanced_build_QMARK_ = (function devtools$util$under_advanced_build_QMARK_(){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"disable-advanced-mode-check","disable-advanced-mode-check",-968346539)))){
return ((function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
<<<<<<< HEAD
var o30096 = temp__5718__auto__;
return (o30096["version"]);
=======
var o30601 = temp__5718__auto__;
return (o30601["version"]);
>>>>>>> 8f3c68a (Initial Commit)
} else {
return null;
}
})() == null);
} else {
return null;
}
});
devtools.util.display_advanced_build_warning_if_needed_BANG_ = (function devtools$util$display_advanced_build_warning_if_needed_BANG_(){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-display-advanced-build-warning","dont-display-advanced-build-warning",-91321563)))){
var banner = ["%cNOT%c installing %c%s%c under advanced build. See ",devtools.util.advanced_build_explanation_url,"."].join('');
return devtools.context.get_console.call(null).warn(banner,"font-weight:bold",devtools.util.reset_style,devtools.util.lib_info_style,devtools.util.get_lib_info.call(null),devtools.util.reset_style);
} else {
return null;
}
});
devtools.util.install_feature_BANG_ = (function devtools$util$install_feature_BANG_(feature,features_to_install,available_fn,install_fn){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),features_to_install))){
if(cljs.core.truth_((function (){var or__4126__auto__ = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"bypass-availability-checks","bypass-availability-checks",1934691680));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return available_fn.call(null,feature);
}
})())){
return install_fn.call(null);
} else {
return devtools.context.get_console.call(null).warn(devtools.util.feature_not_available_msg.call(null,feature));
}
} else {
return null;
}
});

<<<<<<< HEAD
//# sourceMappingURL=util.js.map?rel=1602979379570
=======
//# sourceMappingURL=util.js.map?rel=1608004505566
>>>>>>> 8f3c68a (Initial Commit)
