// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e35094){if((e35094 instanceof Error)){
var e = e35094;
return "Error: Unable to stringify";
} else {
throw e35094;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__35097 = arguments.length;
switch (G__35097) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__35095_SHARP_){
if(typeof p1__35095_SHARP_ === 'string'){
return p1__35095_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__35095_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35100 = arguments.length;
var i__4737__auto___35101 = (0);
while(true){
if((i__4737__auto___35101 < len__4736__auto___35100)){
args__4742__auto__.push((arguments[i__4737__auto___35101]));

var G__35102 = (i__4737__auto___35101 + (1));
i__4737__auto___35101 = G__35102;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35099){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35099));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35104 = arguments.length;
var i__4737__auto___35105 = (0);
while(true){
if((i__4737__auto___35105 < len__4736__auto___35104)){
args__4742__auto__.push((arguments[i__4737__auto___35105]));

var G__35106 = (i__4737__auto___35105 + (1));
i__4737__auto___35105 = G__35106;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35103){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35103));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35107){
var map__35108 = p__35107;
var map__35108__$1 = (((((!((map__35108 == null))))?(((((map__35108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35108):map__35108);
var message = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32131__auto___35187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_35159){
var state_val_35160 = (state_35159[(1)]);
if((state_val_35160 === (7))){
var inst_35155 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
var statearr_35161_35188 = state_35159__$1;
(statearr_35161_35188[(2)] = inst_35155);

(statearr_35161_35188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (1))){
var state_35159__$1 = state_35159;
var statearr_35162_35189 = state_35159__$1;
(statearr_35162_35189[(2)] = null);

(statearr_35162_35189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (4))){
var inst_35112 = (state_35159[(7)]);
var inst_35112__$1 = (state_35159[(2)]);
var state_35159__$1 = (function (){var statearr_35163 = state_35159;
(statearr_35163[(7)] = inst_35112__$1);

return statearr_35163;
})();
if(cljs.core.truth_(inst_35112__$1)){
var statearr_35164_35190 = state_35159__$1;
(statearr_35164_35190[(1)] = (5));

} else {
var statearr_35165_35191 = state_35159__$1;
(statearr_35165_35191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (15))){
var inst_35119 = (state_35159[(8)]);
var inst_35134 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35119);
var inst_35135 = cljs.core.first.call(null,inst_35134);
var inst_35136 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35135);
var inst_35137 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35136)].join('');
var inst_35138 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35137);
var state_35159__$1 = state_35159;
var statearr_35166_35192 = state_35159__$1;
(statearr_35166_35192[(2)] = inst_35138);

(statearr_35166_35192[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (13))){
var inst_35143 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
var statearr_35167_35193 = state_35159__$1;
(statearr_35167_35193[(2)] = inst_35143);

(statearr_35167_35193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (6))){
var state_35159__$1 = state_35159;
var statearr_35168_35194 = state_35159__$1;
(statearr_35168_35194[(2)] = null);

(statearr_35168_35194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (17))){
var inst_35141 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
var statearr_35169_35195 = state_35159__$1;
(statearr_35169_35195[(2)] = inst_35141);

(statearr_35169_35195[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (3))){
var inst_35157 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35159__$1,inst_35157);
} else {
if((state_val_35160 === (12))){
var inst_35118 = (state_35159[(9)]);
var inst_35132 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35118,opts);
var state_35159__$1 = state_35159;
if(inst_35132){
var statearr_35170_35196 = state_35159__$1;
(statearr_35170_35196[(1)] = (15));

} else {
var statearr_35171_35197 = state_35159__$1;
(statearr_35171_35197[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (2))){
var state_35159__$1 = state_35159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35159__$1,(4),ch);
} else {
if((state_val_35160 === (11))){
var inst_35119 = (state_35159[(8)]);
var inst_35124 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35125 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35119);
var inst_35126 = cljs.core.async.timeout.call(null,(1000));
var inst_35127 = [inst_35125,inst_35126];
var inst_35128 = (new cljs.core.PersistentVector(null,2,(5),inst_35124,inst_35127,null));
var state_35159__$1 = state_35159;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35159__$1,(14),inst_35128);
} else {
if((state_val_35160 === (9))){
var inst_35119 = (state_35159[(8)]);
var inst_35145 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35146 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35119);
var inst_35147 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35146);
var inst_35148 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35147)].join('');
var inst_35149 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35148);
var state_35159__$1 = (function (){var statearr_35172 = state_35159;
(statearr_35172[(10)] = inst_35145);

return statearr_35172;
})();
var statearr_35173_35198 = state_35159__$1;
(statearr_35173_35198[(2)] = inst_35149);

(statearr_35173_35198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (5))){
var inst_35112 = (state_35159[(7)]);
var inst_35114 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35115 = (new cljs.core.PersistentArrayMap(null,2,inst_35114,null));
var inst_35116 = (new cljs.core.PersistentHashSet(null,inst_35115,null));
var inst_35117 = figwheel.client.focus_msgs.call(null,inst_35116,inst_35112);
var inst_35118 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35117);
var inst_35119 = cljs.core.first.call(null,inst_35117);
var inst_35120 = figwheel.client.autoload_QMARK_.call(null);
var state_35159__$1 = (function (){var statearr_35174 = state_35159;
(statearr_35174[(8)] = inst_35119);

(statearr_35174[(9)] = inst_35118);

return statearr_35174;
})();
if(cljs.core.truth_(inst_35120)){
var statearr_35175_35199 = state_35159__$1;
(statearr_35175_35199[(1)] = (8));

} else {
var statearr_35176_35200 = state_35159__$1;
(statearr_35176_35200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (14))){
var inst_35130 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
var statearr_35177_35201 = state_35159__$1;
(statearr_35177_35201[(2)] = inst_35130);

(statearr_35177_35201[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (16))){
var state_35159__$1 = state_35159;
var statearr_35178_35202 = state_35159__$1;
(statearr_35178_35202[(2)] = null);

(statearr_35178_35202[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (10))){
var inst_35151 = (state_35159[(2)]);
var state_35159__$1 = (function (){var statearr_35179 = state_35159;
(statearr_35179[(11)] = inst_35151);

return statearr_35179;
})();
var statearr_35180_35203 = state_35159__$1;
(statearr_35180_35203[(2)] = null);

(statearr_35180_35203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (8))){
var inst_35118 = (state_35159[(9)]);
var inst_35122 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35118,opts);
var state_35159__$1 = state_35159;
if(cljs.core.truth_(inst_35122)){
var statearr_35181_35204 = state_35159__$1;
(statearr_35181_35204[(1)] = (11));

} else {
var statearr_35182_35205 = state_35159__$1;
(statearr_35182_35205[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32037__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32037__auto____0 = (function (){
var statearr_35183 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35183[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32037__auto__);

(statearr_35183[(1)] = (1));

return statearr_35183;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32037__auto____1 = (function (state_35159){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_35159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e35184){if((e35184 instanceof Object)){
var ex__32040__auto__ = e35184;
var statearr_35185_35206 = state_35159;
(statearr_35185_35206[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35207 = state_35159;
state_35159 = G__35207;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32037__auto__ = function(state_35159){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32037__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32037__auto____1.call(this,state_35159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32037__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32037__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_35186 = f__32132__auto__.call(null);
(statearr_35186[(6)] = c__32131__auto___35187);

return statearr_35186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35208_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35208_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35214 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35210 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35211 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35212 = true;
var _STAR_print_fn_STAR__temp_val__35213 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35212);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35213);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35211);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35210);
}}catch (e35209){if((e35209 instanceof Error)){
var e = e35209;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35214], null));
} else {
var e = e35209;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35215){
var map__35216 = p__35215;
var map__35216__$1 = (((((!((map__35216 == null))))?(((((map__35216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35216):map__35216);
var opts = map__35216__$1;
var build_id = cljs.core.get.call(null,map__35216__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__35218){
var vec__35219 = p__35218;
var seq__35220 = cljs.core.seq.call(null,vec__35219);
var first__35221 = cljs.core.first.call(null,seq__35220);
var seq__35220__$1 = cljs.core.next.call(null,seq__35220);
var map__35222 = first__35221;
var map__35222__$1 = (((((!((map__35222 == null))))?(((((map__35222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35222):map__35222);
var msg = map__35222__$1;
var msg_name = cljs.core.get.call(null,map__35222__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35220__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35224){
var vec__35225 = p__35224;
var seq__35226 = cljs.core.seq.call(null,vec__35225);
var first__35227 = cljs.core.first.call(null,seq__35226);
var seq__35226__$1 = cljs.core.next.call(null,seq__35226);
var map__35228 = first__35227;
var map__35228__$1 = (((((!((map__35228 == null))))?(((((map__35228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35228):map__35228);
var msg = map__35228__$1;
var msg_name = cljs.core.get.call(null,map__35228__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35226__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35230){
var map__35231 = p__35230;
var map__35231__$1 = (((((!((map__35231 == null))))?(((((map__35231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35231):map__35231);
var on_compile_warning = cljs.core.get.call(null,map__35231__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35231__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__35233){
var vec__35234 = p__35233;
var seq__35235 = cljs.core.seq.call(null,vec__35234);
var first__35236 = cljs.core.first.call(null,seq__35235);
var seq__35235__$1 = cljs.core.next.call(null,seq__35235);
var map__35237 = first__35236;
var map__35237__$1 = (((((!((map__35237 == null))))?(((((map__35237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35237):map__35237);
var msg = map__35237__$1;
var msg_name = cljs.core.get.call(null,map__35237__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35235__$1;
var pred__35239 = cljs.core._EQ_;
var expr__35240 = msg_name;
if(cljs.core.truth_(pred__35239.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35240))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35239.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35240))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_35329){
var state_val_35330 = (state_35329[(1)]);
if((state_val_35330 === (7))){
var inst_35249 = (state_35329[(2)]);
var state_35329__$1 = state_35329;
if(cljs.core.truth_(inst_35249)){
var statearr_35331_35378 = state_35329__$1;
(statearr_35331_35378[(1)] = (8));

} else {
var statearr_35332_35379 = state_35329__$1;
(statearr_35332_35379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (20))){
var inst_35323 = (state_35329[(2)]);
var state_35329__$1 = state_35329;
var statearr_35333_35380 = state_35329__$1;
(statearr_35333_35380[(2)] = inst_35323);

(statearr_35333_35380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (27))){
var inst_35319 = (state_35329[(2)]);
var state_35329__$1 = state_35329;
var statearr_35334_35381 = state_35329__$1;
(statearr_35334_35381[(2)] = inst_35319);

(statearr_35334_35381[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (1))){
var inst_35242 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35329__$1 = state_35329;
if(cljs.core.truth_(inst_35242)){
var statearr_35335_35382 = state_35329__$1;
(statearr_35335_35382[(1)] = (2));

} else {
var statearr_35336_35383 = state_35329__$1;
(statearr_35336_35383[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (24))){
var inst_35321 = (state_35329[(2)]);
var state_35329__$1 = state_35329;
var statearr_35337_35384 = state_35329__$1;
(statearr_35337_35384[(2)] = inst_35321);

(statearr_35337_35384[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (4))){
var inst_35327 = (state_35329[(2)]);
var state_35329__$1 = state_35329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35329__$1,inst_35327);
} else {
if((state_val_35330 === (15))){
var inst_35325 = (state_35329[(2)]);
var state_35329__$1 = state_35329;
var statearr_35338_35385 = state_35329__$1;
(statearr_35338_35385[(2)] = inst_35325);

(statearr_35338_35385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (21))){
var inst_35278 = (state_35329[(2)]);
var inst_35279 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35280 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35279);
var state_35329__$1 = (function (){var statearr_35339 = state_35329;
(statearr_35339[(7)] = inst_35278);

return statearr_35339;
})();
var statearr_35340_35386 = state_35329__$1;
(statearr_35340_35386[(2)] = inst_35280);

(statearr_35340_35386[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (31))){
var inst_35308 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35329__$1 = state_35329;
if(inst_35308){
var statearr_35341_35387 = state_35329__$1;
(statearr_35341_35387[(1)] = (34));

} else {
var statearr_35342_35388 = state_35329__$1;
(statearr_35342_35388[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (32))){
var inst_35317 = (state_35329[(2)]);
var state_35329__$1 = state_35329;
var statearr_35343_35389 = state_35329__$1;
(statearr_35343_35389[(2)] = inst_35317);

(statearr_35343_35389[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (33))){
var inst_35304 = (state_35329[(2)]);
var inst_35305 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35306 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35305);
var state_35329__$1 = (function (){var statearr_35344 = state_35329;
(statearr_35344[(8)] = inst_35304);

return statearr_35344;
})();
var statearr_35345_35390 = state_35329__$1;
(statearr_35345_35390[(2)] = inst_35306);

(statearr_35345_35390[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (13))){
var inst_35263 = figwheel.client.heads_up.clear.call(null);
var state_35329__$1 = state_35329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35329__$1,(16),inst_35263);
} else {
if((state_val_35330 === (22))){
var inst_35284 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35285 = figwheel.client.heads_up.append_warning_message.call(null,inst_35284);
var state_35329__$1 = state_35329;
var statearr_35346_35391 = state_35329__$1;
(statearr_35346_35391[(2)] = inst_35285);

(statearr_35346_35391[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (36))){
var inst_35315 = (state_35329[(2)]);
var state_35329__$1 = state_35329;
var statearr_35347_35392 = state_35329__$1;
(statearr_35347_35392[(2)] = inst_35315);

(statearr_35347_35392[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (29))){
var inst_35295 = (state_35329[(2)]);
var inst_35296 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35297 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35296);
var state_35329__$1 = (function (){var statearr_35348 = state_35329;
(statearr_35348[(9)] = inst_35295);

return statearr_35348;
})();
var statearr_35349_35393 = state_35329__$1;
(statearr_35349_35393[(2)] = inst_35297);

(statearr_35349_35393[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (6))){
var inst_35244 = (state_35329[(10)]);
var state_35329__$1 = state_35329;
var statearr_35350_35394 = state_35329__$1;
(statearr_35350_35394[(2)] = inst_35244);

(statearr_35350_35394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (28))){
var inst_35291 = (state_35329[(2)]);
var inst_35292 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35293 = figwheel.client.heads_up.display_warning.call(null,inst_35292);
var state_35329__$1 = (function (){var statearr_35351 = state_35329;
(statearr_35351[(11)] = inst_35291);

return statearr_35351;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35329__$1,(29),inst_35293);
} else {
if((state_val_35330 === (25))){
var inst_35289 = figwheel.client.heads_up.clear.call(null);
var state_35329__$1 = state_35329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35329__$1,(28),inst_35289);
} else {
if((state_val_35330 === (34))){
var inst_35310 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35329__$1 = state_35329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35329__$1,(37),inst_35310);
} else {
if((state_val_35330 === (17))){
var inst_35269 = (state_35329[(2)]);
var inst_35270 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35271 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35270);
var state_35329__$1 = (function (){var statearr_35352 = state_35329;
(statearr_35352[(12)] = inst_35269);

return statearr_35352;
})();
var statearr_35353_35395 = state_35329__$1;
(statearr_35353_35395[(2)] = inst_35271);

(statearr_35353_35395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (3))){
var inst_35261 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35329__$1 = state_35329;
if(inst_35261){
var statearr_35354_35396 = state_35329__$1;
(statearr_35354_35396[(1)] = (13));

} else {
var statearr_35355_35397 = state_35329__$1;
(statearr_35355_35397[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (12))){
var inst_35257 = (state_35329[(2)]);
var state_35329__$1 = state_35329;
var statearr_35356_35398 = state_35329__$1;
(statearr_35356_35398[(2)] = inst_35257);

(statearr_35356_35398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (2))){
var inst_35244 = (state_35329[(10)]);
var inst_35244__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35329__$1 = (function (){var statearr_35357 = state_35329;
(statearr_35357[(10)] = inst_35244__$1);

return statearr_35357;
})();
if(cljs.core.truth_(inst_35244__$1)){
var statearr_35358_35399 = state_35329__$1;
(statearr_35358_35399[(1)] = (5));

} else {
var statearr_35359_35400 = state_35329__$1;
(statearr_35359_35400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (23))){
var inst_35287 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35329__$1 = state_35329;
if(inst_35287){
var statearr_35360_35401 = state_35329__$1;
(statearr_35360_35401[(1)] = (25));

} else {
var statearr_35361_35402 = state_35329__$1;
(statearr_35361_35402[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (35))){
var state_35329__$1 = state_35329;
var statearr_35362_35403 = state_35329__$1;
(statearr_35362_35403[(2)] = null);

(statearr_35362_35403[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (19))){
var inst_35282 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35329__$1 = state_35329;
if(inst_35282){
var statearr_35363_35404 = state_35329__$1;
(statearr_35363_35404[(1)] = (22));

} else {
var statearr_35364_35405 = state_35329__$1;
(statearr_35364_35405[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (11))){
var inst_35253 = (state_35329[(2)]);
var state_35329__$1 = state_35329;
var statearr_35365_35406 = state_35329__$1;
(statearr_35365_35406[(2)] = inst_35253);

(statearr_35365_35406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (9))){
var inst_35255 = figwheel.client.heads_up.clear.call(null);
var state_35329__$1 = state_35329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35329__$1,(12),inst_35255);
} else {
if((state_val_35330 === (5))){
var inst_35246 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35329__$1 = state_35329;
var statearr_35366_35407 = state_35329__$1;
(statearr_35366_35407[(2)] = inst_35246);

(statearr_35366_35407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (14))){
var inst_35273 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35329__$1 = state_35329;
if(inst_35273){
var statearr_35367_35408 = state_35329__$1;
(statearr_35367_35408[(1)] = (18));

} else {
var statearr_35368_35409 = state_35329__$1;
(statearr_35368_35409[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (26))){
var inst_35299 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35329__$1 = state_35329;
if(inst_35299){
var statearr_35369_35410 = state_35329__$1;
(statearr_35369_35410[(1)] = (30));

} else {
var statearr_35370_35411 = state_35329__$1;
(statearr_35370_35411[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (16))){
var inst_35265 = (state_35329[(2)]);
var inst_35266 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35267 = figwheel.client.heads_up.display_exception.call(null,inst_35266);
var state_35329__$1 = (function (){var statearr_35371 = state_35329;
(statearr_35371[(13)] = inst_35265);

return statearr_35371;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35329__$1,(17),inst_35267);
} else {
if((state_val_35330 === (30))){
var inst_35301 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35302 = figwheel.client.heads_up.display_warning.call(null,inst_35301);
var state_35329__$1 = state_35329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35329__$1,(33),inst_35302);
} else {
if((state_val_35330 === (10))){
var inst_35259 = (state_35329[(2)]);
var state_35329__$1 = state_35329;
var statearr_35372_35412 = state_35329__$1;
(statearr_35372_35412[(2)] = inst_35259);

(statearr_35372_35412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (18))){
var inst_35275 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35276 = figwheel.client.heads_up.display_exception.call(null,inst_35275);
var state_35329__$1 = state_35329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35329__$1,(21),inst_35276);
} else {
if((state_val_35330 === (37))){
var inst_35312 = (state_35329[(2)]);
var state_35329__$1 = state_35329;
var statearr_35373_35413 = state_35329__$1;
(statearr_35373_35413[(2)] = inst_35312);

(statearr_35373_35413[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35330 === (8))){
var inst_35251 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35329__$1 = state_35329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35329__$1,(11),inst_35251);
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
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32037__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32037__auto____0 = (function (){
var statearr_35374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35374[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32037__auto__);

(statearr_35374[(1)] = (1));

return statearr_35374;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32037__auto____1 = (function (state_35329){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_35329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e35375){if((e35375 instanceof Object)){
var ex__32040__auto__ = e35375;
var statearr_35376_35414 = state_35329;
(statearr_35376_35414[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35415 = state_35329;
state_35329 = G__35415;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32037__auto__ = function(state_35329){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32037__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32037__auto____1.call(this,state_35329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32037__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32037__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_35377 = f__32132__auto__.call(null);
(statearr_35377[(6)] = c__32131__auto__);

return statearr_35377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));

return c__32131__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32131__auto___35444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_35430){
var state_val_35431 = (state_35430[(1)]);
if((state_val_35431 === (1))){
var state_35430__$1 = state_35430;
var statearr_35432_35445 = state_35430__$1;
(statearr_35432_35445[(2)] = null);

(statearr_35432_35445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (2))){
var state_35430__$1 = state_35430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35430__$1,(4),ch);
} else {
if((state_val_35431 === (3))){
var inst_35428 = (state_35430[(2)]);
var state_35430__$1 = state_35430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35430__$1,inst_35428);
} else {
if((state_val_35431 === (4))){
var inst_35418 = (state_35430[(7)]);
var inst_35418__$1 = (state_35430[(2)]);
var state_35430__$1 = (function (){var statearr_35433 = state_35430;
(statearr_35433[(7)] = inst_35418__$1);

return statearr_35433;
})();
if(cljs.core.truth_(inst_35418__$1)){
var statearr_35434_35446 = state_35430__$1;
(statearr_35434_35446[(1)] = (5));

} else {
var statearr_35435_35447 = state_35430__$1;
(statearr_35435_35447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (5))){
var inst_35418 = (state_35430[(7)]);
var inst_35420 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35418);
var state_35430__$1 = state_35430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35430__$1,(8),inst_35420);
} else {
if((state_val_35431 === (6))){
var state_35430__$1 = state_35430;
var statearr_35436_35448 = state_35430__$1;
(statearr_35436_35448[(2)] = null);

(statearr_35436_35448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (7))){
var inst_35426 = (state_35430[(2)]);
var state_35430__$1 = state_35430;
var statearr_35437_35449 = state_35430__$1;
(statearr_35437_35449[(2)] = inst_35426);

(statearr_35437_35449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35431 === (8))){
var inst_35422 = (state_35430[(2)]);
var state_35430__$1 = (function (){var statearr_35438 = state_35430;
(statearr_35438[(8)] = inst_35422);

return statearr_35438;
})();
var statearr_35439_35450 = state_35430__$1;
(statearr_35439_35450[(2)] = null);

(statearr_35439_35450[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32037__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32037__auto____0 = (function (){
var statearr_35440 = [null,null,null,null,null,null,null,null,null];
(statearr_35440[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32037__auto__);

(statearr_35440[(1)] = (1));

return statearr_35440;
});
var figwheel$client$heads_up_plugin_$_state_machine__32037__auto____1 = (function (state_35430){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_35430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e35441){if((e35441 instanceof Object)){
var ex__32040__auto__ = e35441;
var statearr_35442_35451 = state_35430;
(statearr_35442_35451[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35452 = state_35430;
state_35430 = G__35452;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32037__auto__ = function(state_35430){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32037__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32037__auto____1.call(this,state_35430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32037__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32037__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_35443 = f__32132__auto__.call(null);
(statearr_35443[(6)] = c__32131__auto___35444);

return statearr_35443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_35458){
var state_val_35459 = (state_35458[(1)]);
if((state_val_35459 === (1))){
var inst_35453 = cljs.core.async.timeout.call(null,(3000));
var state_35458__$1 = state_35458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35458__$1,(2),inst_35453);
} else {
if((state_val_35459 === (2))){
var inst_35455 = (state_35458[(2)]);
var inst_35456 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35458__$1 = (function (){var statearr_35460 = state_35458;
(statearr_35460[(7)] = inst_35455);

return statearr_35460;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35458__$1,inst_35456);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32037__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32037__auto____0 = (function (){
var statearr_35461 = [null,null,null,null,null,null,null,null];
(statearr_35461[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32037__auto__);

(statearr_35461[(1)] = (1));

return statearr_35461;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32037__auto____1 = (function (state_35458){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_35458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e35462){if((e35462 instanceof Object)){
var ex__32040__auto__ = e35462;
var statearr_35463_35465 = state_35458;
(statearr_35463_35465[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35466 = state_35458;
state_35458 = G__35466;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32037__auto__ = function(state_35458){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32037__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32037__auto____1.call(this,state_35458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32037__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32037__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_35464 = f__32132__auto__.call(null);
(statearr_35464[(6)] = c__32131__auto__);

return statearr_35464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));

return c__32131__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_35473){
var state_val_35474 = (state_35473[(1)]);
if((state_val_35474 === (1))){
var inst_35467 = cljs.core.async.timeout.call(null,(2000));
var state_35473__$1 = state_35473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35473__$1,(2),inst_35467);
} else {
if((state_val_35474 === (2))){
var inst_35469 = (state_35473[(2)]);
var inst_35470 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_35471 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35470);
var state_35473__$1 = (function (){var statearr_35475 = state_35473;
(statearr_35475[(7)] = inst_35469);

return statearr_35475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35473__$1,inst_35471);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32037__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32037__auto____0 = (function (){
var statearr_35476 = [null,null,null,null,null,null,null,null];
(statearr_35476[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32037__auto__);

(statearr_35476[(1)] = (1));

return statearr_35476;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32037__auto____1 = (function (state_35473){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_35473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e35477){if((e35477 instanceof Object)){
var ex__32040__auto__ = e35477;
var statearr_35478_35480 = state_35473;
(statearr_35478_35480[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35481 = state_35473;
state_35473 = G__35481;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32037__auto__ = function(state_35473){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32037__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32037__auto____1.call(this,state_35473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32037__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32037__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_35479 = f__32132__auto__.call(null);
(statearr_35479[(6)] = c__32131__auto__);

return statearr_35479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));

return c__32131__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35482){
var map__35483 = p__35482;
var map__35483__$1 = (((((!((map__35483 == null))))?(((((map__35483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35483):map__35483);
var file = cljs.core.get.call(null,map__35483__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35483__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35483__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35485 = "";
var G__35485__$1 = (cljs.core.truth_(file)?[G__35485,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__35485);
var G__35485__$2 = (cljs.core.truth_(line)?[G__35485__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__35485__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__35485__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__35485__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35486){
var map__35487 = p__35486;
var map__35487__$1 = (((((!((map__35487 == null))))?(((((map__35487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35487):map__35487);
var ed = map__35487__$1;
var exception_data = cljs.core.get.call(null,map__35487__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35487__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_35490 = (function (){var G__35489 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35489)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__35489;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_35490);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35491){
var map__35492 = p__35491;
var map__35492__$1 = (((((!((map__35492 == null))))?(((((map__35492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35492):map__35492);
var w = map__35492__$1;
var message = cljs.core.get.call(null,map__35492__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35494 = cljs.core.seq.call(null,plugins);
var chunk__35495 = null;
var count__35496 = (0);
var i__35497 = (0);
while(true){
if((i__35497 < count__35496)){
var vec__35504 = cljs.core._nth.call(null,chunk__35495,i__35497);
var k = cljs.core.nth.call(null,vec__35504,(0),null);
var plugin = cljs.core.nth.call(null,vec__35504,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35510 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35494,chunk__35495,count__35496,i__35497,pl_35510,vec__35504,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35510.call(null,msg_hist);
});})(seq__35494,chunk__35495,count__35496,i__35497,pl_35510,vec__35504,k,plugin))
);
} else {
}


var G__35511 = seq__35494;
var G__35512 = chunk__35495;
var G__35513 = count__35496;
var G__35514 = (i__35497 + (1));
seq__35494 = G__35511;
chunk__35495 = G__35512;
count__35496 = G__35513;
i__35497 = G__35514;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35494);
if(temp__5720__auto__){
var seq__35494__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35494__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__35494__$1);
var G__35515 = cljs.core.chunk_rest.call(null,seq__35494__$1);
var G__35516 = c__4556__auto__;
var G__35517 = cljs.core.count.call(null,c__4556__auto__);
var G__35518 = (0);
seq__35494 = G__35515;
chunk__35495 = G__35516;
count__35496 = G__35517;
i__35497 = G__35518;
continue;
} else {
var vec__35507 = cljs.core.first.call(null,seq__35494__$1);
var k = cljs.core.nth.call(null,vec__35507,(0),null);
var plugin = cljs.core.nth.call(null,vec__35507,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35519 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35494,chunk__35495,count__35496,i__35497,pl_35519,vec__35507,k,plugin,seq__35494__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35519.call(null,msg_hist);
});})(seq__35494,chunk__35495,count__35496,i__35497,pl_35519,vec__35507,k,plugin,seq__35494__$1,temp__5720__auto__))
);
} else {
}


var G__35520 = cljs.core.next.call(null,seq__35494__$1);
var G__35521 = null;
var G__35522 = (0);
var G__35523 = (0);
seq__35494 = G__35520;
chunk__35495 = G__35521;
count__35496 = G__35522;
i__35497 = G__35523;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__35525 = arguments.length;
switch (G__35525) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35526_35531 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35527_35532 = null;
var count__35528_35533 = (0);
var i__35529_35534 = (0);
while(true){
if((i__35529_35534 < count__35528_35533)){
var msg_35535 = cljs.core._nth.call(null,chunk__35527_35532,i__35529_35534);
figwheel.client.socket.handle_incoming_message.call(null,msg_35535);


var G__35536 = seq__35526_35531;
var G__35537 = chunk__35527_35532;
var G__35538 = count__35528_35533;
var G__35539 = (i__35529_35534 + (1));
seq__35526_35531 = G__35536;
chunk__35527_35532 = G__35537;
count__35528_35533 = G__35538;
i__35529_35534 = G__35539;
continue;
} else {
var temp__5720__auto___35540 = cljs.core.seq.call(null,seq__35526_35531);
if(temp__5720__auto___35540){
var seq__35526_35541__$1 = temp__5720__auto___35540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35526_35541__$1)){
var c__4556__auto___35542 = cljs.core.chunk_first.call(null,seq__35526_35541__$1);
var G__35543 = cljs.core.chunk_rest.call(null,seq__35526_35541__$1);
var G__35544 = c__4556__auto___35542;
var G__35545 = cljs.core.count.call(null,c__4556__auto___35542);
var G__35546 = (0);
seq__35526_35531 = G__35543;
chunk__35527_35532 = G__35544;
count__35528_35533 = G__35545;
i__35529_35534 = G__35546;
continue;
} else {
var msg_35547 = cljs.core.first.call(null,seq__35526_35541__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35547);


var G__35548 = cljs.core.next.call(null,seq__35526_35541__$1);
var G__35549 = null;
var G__35550 = (0);
var G__35551 = (0);
seq__35526_35531 = G__35548;
chunk__35527_35532 = G__35549;
count__35528_35533 = G__35550;
i__35529_35534 = G__35551;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35556 = arguments.length;
var i__4737__auto___35557 = (0);
while(true){
if((i__4737__auto___35557 < len__4736__auto___35556)){
args__4742__auto__.push((arguments[i__4737__auto___35557]));

var G__35558 = (i__4737__auto___35557 + (1));
i__4737__auto___35557 = G__35558;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35553){
var map__35554 = p__35553;
var map__35554__$1 = (((((!((map__35554 == null))))?(((((map__35554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35554):map__35554);
var opts = map__35554__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35552){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35552));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35559){if((e35559 instanceof Error)){
var e = e35559;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35559;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__35560){
var map__35561 = p__35560;
var map__35561__$1 = (((((!((map__35561 == null))))?(((((map__35561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35561):map__35561);
var msg_name = cljs.core.get.call(null,map__35561__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1602979381966