// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('devtools.formatters.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.format');
goog.require('devtools.protocols');
goog.require('devtools.reporter');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.markup');
goog.require('devtools.formatters.budgeting');
devtools.formatters.core.want_value_QMARK__STAR_ = (function devtools$formatters$core$want_value_QMARK__STAR_(value){
if(cljs.core.not.call(null,devtools.formatters.state.prevent_recursion_QMARK_.call(null))){
var or__4126__auto__ = devtools.formatters.helpers.cljs_value_QMARK_.call(null,value);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return devtools.formatters.templating.surrogate_QMARK_.call(null,value);
}
} else {
return false;
}
});
devtools.formatters.core.header_STAR_ = (function devtools$formatters$core$header_STAR_(value){
var json_ml = ((devtools.formatters.templating.surrogate_QMARK_.call(null,value))?devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_surrogate_header_GT_.call(null,value)):(cljs.core.truth_((function (){try{if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$format$IDevtoolsFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
}
<<<<<<< HEAD
}catch (e30457){var _e__27921__auto__ = e30457;
=======
}catch (e30962){var _e__28426__auto__ = e30962;
>>>>>>> 8f3c68a (Initial Commit)
return false;
}})())?devtools.format._header.call(null,value):(cljs.core.truth_((function (){try{if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
}
<<<<<<< HEAD
}catch (e30459){var _e__27921__auto__ = e30459;
=======
}catch (e30964){var _e__28426__auto__ = e30964;
>>>>>>> 8f3c68a (Initial Commit)
return false;
}})())?devtools.protocols._header.call(null,value):devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_GT_.call(null,value))
)));
return devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_.call(null,value,json_ml);
});
devtools.formatters.core.has_body_STAR_ = (function devtools$formatters$core$has_body_STAR_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.was_over_budget_QMARK__BANG_.call(null,value))){
return false;
} else {
return cljs.core.boolean$.call(null,((devtools.formatters.templating.surrogate_QMARK_.call(null,value))?(!((devtools.formatters.templating.get_surrogate_body.call(null,value) == null))):(cljs.core.truth_((function (){try{if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$format$IDevtoolsFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
}
<<<<<<< HEAD
}catch (e30461){var _e__27921__auto__ = e30461;
=======
}catch (e30966){var _e__28426__auto__ = e30966;
>>>>>>> 8f3c68a (Initial Commit)
return false;
}})())?devtools.format._has_body.call(null,value):(cljs.core.truth_((function (){try{if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
}
<<<<<<< HEAD
}catch (e30463){var _e__27921__auto__ = e30463;
=======
}catch (e30968){var _e__28426__auto__ = e30968;
>>>>>>> 8f3c68a (Initial Commit)
return false;
}})())?devtools.protocols._has_body.call(null,value):false
))));
}
});
devtools.formatters.core.body_STAR_ = (function devtools$formatters$core$body_STAR_(value){
devtools.formatters.state.update_current_state_BANG_.call(null,devtools.formatters.state.reset_depth_limits);

if(devtools.formatters.templating.surrogate_QMARK_.call(null,value)){
return devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_surrogate_body_GT_.call(null,value));
} else {
if(cljs.core.truth_((function (){try{if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$format$IDevtoolsFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
}
<<<<<<< HEAD
}catch (e30465){var _e__27921__auto__ = e30465;
=======
}catch (e30970){var _e__28426__auto__ = e30970;
>>>>>>> 8f3c68a (Initial Commit)
return false;
}})())){
return devtools.format._body.call(null,value);
} else {
if(cljs.core.truth_((function (){try{if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
}
<<<<<<< HEAD
}catch (e30467){var _e__27921__auto__ = e30467;
=======
}catch (e30972){var _e__28426__auto__ = e30972;
>>>>>>> 8f3c68a (Initial Commit)
return false;
}})())){
return devtools.protocols._body.call(null,value);
} else {
return null;
}
}
}
});
devtools.formatters.core.config_wrapper = (function devtools$formatters$core$config_wrapper(raw_fn){
return (function (value,config){
<<<<<<< HEAD
var _STAR_current_state_STAR__orig_val__30469 = devtools.formatters.state._STAR_current_state_STAR_;
var _STAR_current_state_STAR__temp_val__30470 = (function (){var or__4126__auto__ = config;
=======
var _STAR_current_state_STAR__orig_val__30974 = devtools.formatters.state._STAR_current_state_STAR_;
var _STAR_current_state_STAR__temp_val__30975 = (function (){var or__4126__auto__ = config;
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return devtools.formatters.state.get_default_state.call(null);
}
})();
<<<<<<< HEAD
(devtools.formatters.state._STAR_current_state_STAR_ = _STAR_current_state_STAR__temp_val__30470);

try{return raw_fn.call(null,value);
}finally {(devtools.formatters.state._STAR_current_state_STAR_ = _STAR_current_state_STAR__orig_val__30469);
=======
(devtools.formatters.state._STAR_current_state_STAR_ = _STAR_current_state_STAR__temp_val__30975);

try{return raw_fn.call(null,value);
}finally {(devtools.formatters.state._STAR_current_state_STAR_ = _STAR_current_state_STAR__orig_val__30974);
>>>>>>> 8f3c68a (Initial Commit)
}});
});
devtools.formatters.core.want_value_QMARK_ = devtools.formatters.core.config_wrapper.call(null,devtools.formatters.core.want_value_QMARK__STAR_);
devtools.formatters.core.header = devtools.formatters.core.config_wrapper.call(null,devtools.formatters.core.header_STAR_);
devtools.formatters.core.has_body = devtools.formatters.core.config_wrapper.call(null,devtools.formatters.core.has_body_STAR_);
devtools.formatters.core.body = devtools.formatters.core.config_wrapper.call(null,devtools.formatters.core.body_STAR_);
devtools.formatters.core.wrap_with_exception_guard = (function devtools$formatters$core$wrap_with_exception_guard(f){
return (function() { 
<<<<<<< HEAD
var G__30472__delegate = function (args){
try{return cljs.core.apply.call(null,f,args);
}catch (e30471){var e = e30471;
=======
var G__30977__delegate = function (args){
try{return cljs.core.apply.call(null,f,args);
}catch (e30976){var e = e30976;
>>>>>>> 8f3c68a (Initial Commit)
devtools.reporter.report_internal_error_BANG_.call(null,e,"an exception was raised during value formatting");

return null;
}};
<<<<<<< HEAD
var G__30472 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30473__i = 0, G__30473__a = new Array(arguments.length -  0);
while (G__30473__i < G__30473__a.length) {G__30473__a[G__30473__i] = arguments[G__30473__i + 0]; ++G__30473__i;}
  args = new cljs.core.IndexedSeq(G__30473__a,0,null);
} 
return G__30472__delegate.call(this,args);};
G__30472.cljs$lang$maxFixedArity = 0;
G__30472.cljs$lang$applyTo = (function (arglist__30474){
var args = cljs.core.seq(arglist__30474);
return G__30472__delegate(args);
});
G__30472.cljs$core$IFn$_invoke$arity$variadic = G__30472__delegate;
return G__30472;
=======
var G__30977 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30978__i = 0, G__30978__a = new Array(arguments.length -  0);
while (G__30978__i < G__30978__a.length) {G__30978__a[G__30978__i] = arguments[G__30978__i + 0]; ++G__30978__i;}
  args = new cljs.core.IndexedSeq(G__30978__a,0,null);
} 
return G__30977__delegate.call(this,args);};
G__30977.cljs$lang$maxFixedArity = 0;
G__30977.cljs$lang$applyTo = (function (arglist__30979){
var args = cljs.core.seq(arglist__30979);
return G__30977__delegate(args);
});
G__30977.cljs$core$IFn$_invoke$arity$variadic = G__30977__delegate;
return G__30977;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
});
devtools.formatters.core.build_api_call = (function devtools$formatters$core$build_api_call(raw_fn,pre_handler_key,post_handler_key){

var handler = (function (value,config){
var pre_handler = (function (){var or__4126__auto__ = devtools.prefs.pref.call(null,pre_handler_key);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.identity;
}
})();
var post_handler = (function (){var or__4126__auto__ = devtools.prefs.pref.call(null,post_handler_key);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.identity;
}
})();
var preprocessed_value = pre_handler.call(null,value);
var result = (cljs.core.truth_(devtools.formatters.core.want_value_QMARK_.call(null,preprocessed_value,config))?raw_fn.call(null,preprocessed_value,config):null);
return post_handler.call(null,result);
});
return devtools.formatters.core.wrap_with_exception_guard.call(null,handler);
});
devtools.formatters.core.header_api_call = devtools.formatters.core.build_api_call.call(null,devtools.formatters.core.header,new cljs.core.Keyword(null,"header-pre-handler","header-pre-handler",-1997722262),new cljs.core.Keyword(null,"header-post-handler","header-post-handler",514828618));
devtools.formatters.core.has_body_api_call = devtools.formatters.core.build_api_call.call(null,devtools.formatters.core.has_body,new cljs.core.Keyword(null,"has-body-pre-handler","has-body-pre-handler",1787020038),new cljs.core.Keyword(null,"has-body-post-handler","has-body-post-handler",-863451271));
devtools.formatters.core.body_api_call = devtools.formatters.core.build_api_call.call(null,devtools.formatters.core.body,new cljs.core.Keyword(null,"body-pre-handler","body-pre-handler",1211926529),new cljs.core.Keyword(null,"body-post-handler","body-post-handler",-1040905424));

<<<<<<< HEAD
//# sourceMappingURL=core.js.map?rel=1602979379874
=======
//# sourceMappingURL=core.js.map?rel=1608004505889
>>>>>>> 8f3c68a (Initial Commit)
