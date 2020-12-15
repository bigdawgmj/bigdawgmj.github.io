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
}catch (e45687){if((e45687 instanceof Error)){
var e = e45687;
return "Error: Unable to stringify";
} else {
throw e45687;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__45690 = arguments.length;
switch (G__45690) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__45688_SHARP_){
if(typeof p1__45688_SHARP_ === 'string'){
return p1__45688_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__45688_SHARP_);
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
var len__4736__auto___45693 = arguments.length;
var i__4737__auto___45694 = (0);
while(true){
if((i__4737__auto___45694 < len__4736__auto___45693)){
args__4742__auto__.push((arguments[i__4737__auto___45694]));

var G__45695 = (i__4737__auto___45694 + (1));
i__4737__auto___45694 = G__45695;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq45692){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45692));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45697 = arguments.length;
var i__4737__auto___45698 = (0);
while(true){
if((i__4737__auto___45698 < len__4736__auto___45697)){
args__4742__auto__.push((arguments[i__4737__auto___45698]));

var G__45699 = (i__4737__auto___45698 + (1));
i__4737__auto___45698 = G__45699;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq45696){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45696));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__45700){
var map__45701 = p__45700;
var map__45701__$1 = (((((!((map__45701 == null))))?(((((map__45701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45701):map__45701);
var message = cljs.core.get.call(null,map__45701__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__45701__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__41109__auto___45780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_45752){
var state_val_45753 = (state_45752[(1)]);
if((state_val_45753 === (7))){
var inst_45748 = (state_45752[(2)]);
var state_45752__$1 = state_45752;
var statearr_45754_45781 = state_45752__$1;
(statearr_45754_45781[(2)] = inst_45748);

(statearr_45754_45781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45753 === (1))){
var state_45752__$1 = state_45752;
var statearr_45755_45782 = state_45752__$1;
(statearr_45755_45782[(2)] = null);

(statearr_45755_45782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45753 === (4))){
var inst_45705 = (state_45752[(7)]);
var inst_45705__$1 = (state_45752[(2)]);
var state_45752__$1 = (function (){var statearr_45756 = state_45752;
(statearr_45756[(7)] = inst_45705__$1);

return statearr_45756;
})();
if(cljs.core.truth_(inst_45705__$1)){
var statearr_45757_45783 = state_45752__$1;
(statearr_45757_45783[(1)] = (5));

} else {
var statearr_45758_45784 = state_45752__$1;
(statearr_45758_45784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45753 === (15))){
var inst_45712 = (state_45752[(8)]);
var inst_45727 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45712);
var inst_45728 = cljs.core.first.call(null,inst_45727);
var inst_45729 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_45728);
var inst_45730 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45729)].join('');
var inst_45731 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_45730);
var state_45752__$1 = state_45752;
var statearr_45759_45785 = state_45752__$1;
(statearr_45759_45785[(2)] = inst_45731);

(statearr_45759_45785[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45753 === (13))){
var inst_45736 = (state_45752[(2)]);
var state_45752__$1 = state_45752;
var statearr_45760_45786 = state_45752__$1;
(statearr_45760_45786[(2)] = inst_45736);

(statearr_45760_45786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45753 === (6))){
var state_45752__$1 = state_45752;
var statearr_45761_45787 = state_45752__$1;
(statearr_45761_45787[(2)] = null);

(statearr_45761_45787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45753 === (17))){
var inst_45734 = (state_45752[(2)]);
var state_45752__$1 = state_45752;
var statearr_45762_45788 = state_45752__$1;
(statearr_45762_45788[(2)] = inst_45734);

(statearr_45762_45788[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45753 === (3))){
var inst_45750 = (state_45752[(2)]);
var state_45752__$1 = state_45752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45752__$1,inst_45750);
} else {
if((state_val_45753 === (12))){
var inst_45711 = (state_45752[(9)]);
var inst_45725 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_45711,opts);
var state_45752__$1 = state_45752;
if(inst_45725){
var statearr_45763_45789 = state_45752__$1;
(statearr_45763_45789[(1)] = (15));

} else {
var statearr_45764_45790 = state_45752__$1;
(statearr_45764_45790[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45753 === (2))){
var state_45752__$1 = state_45752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45752__$1,(4),ch);
} else {
if((state_val_45753 === (11))){
var inst_45712 = (state_45752[(8)]);
var inst_45717 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45718 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_45712);
var inst_45719 = cljs.core.async.timeout.call(null,(1000));
var inst_45720 = [inst_45718,inst_45719];
var inst_45721 = (new cljs.core.PersistentVector(null,2,(5),inst_45717,inst_45720,null));
var state_45752__$1 = state_45752;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45752__$1,(14),inst_45721);
} else {
if((state_val_45753 === (9))){
var inst_45712 = (state_45752[(8)]);
var inst_45738 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_45739 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45712);
var inst_45740 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45739);
var inst_45741 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45740)].join('');
var inst_45742 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_45741);
var state_45752__$1 = (function (){var statearr_45765 = state_45752;
(statearr_45765[(10)] = inst_45738);

return statearr_45765;
})();
var statearr_45766_45791 = state_45752__$1;
(statearr_45766_45791[(2)] = inst_45742);

(statearr_45766_45791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45753 === (5))){
var inst_45705 = (state_45752[(7)]);
var inst_45707 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_45708 = (new cljs.core.PersistentArrayMap(null,2,inst_45707,null));
var inst_45709 = (new cljs.core.PersistentHashSet(null,inst_45708,null));
var inst_45710 = figwheel.client.focus_msgs.call(null,inst_45709,inst_45705);
var inst_45711 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_45710);
var inst_45712 = cljs.core.first.call(null,inst_45710);
var inst_45713 = figwheel.client.autoload_QMARK_.call(null);
var state_45752__$1 = (function (){var statearr_45767 = state_45752;
(statearr_45767[(9)] = inst_45711);

(statearr_45767[(8)] = inst_45712);

return statearr_45767;
})();
if(cljs.core.truth_(inst_45713)){
var statearr_45768_45792 = state_45752__$1;
(statearr_45768_45792[(1)] = (8));

} else {
var statearr_45769_45793 = state_45752__$1;
(statearr_45769_45793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45753 === (14))){
var inst_45723 = (state_45752[(2)]);
var state_45752__$1 = state_45752;
var statearr_45770_45794 = state_45752__$1;
(statearr_45770_45794[(2)] = inst_45723);

(statearr_45770_45794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45753 === (16))){
var state_45752__$1 = state_45752;
var statearr_45771_45795 = state_45752__$1;
(statearr_45771_45795[(2)] = null);

(statearr_45771_45795[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45753 === (10))){
var inst_45744 = (state_45752[(2)]);
var state_45752__$1 = (function (){var statearr_45772 = state_45752;
(statearr_45772[(11)] = inst_45744);

return statearr_45772;
})();
var statearr_45773_45796 = state_45752__$1;
(statearr_45773_45796[(2)] = null);

(statearr_45773_45796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45753 === (8))){
var inst_45711 = (state_45752[(9)]);
var inst_45715 = figwheel.client.reload_file_state_QMARK_.call(null,inst_45711,opts);
var state_45752__$1 = state_45752;
if(cljs.core.truth_(inst_45715)){
var statearr_45774_45797 = state_45752__$1;
(statearr_45774_45797[(1)] = (11));

} else {
var statearr_45775_45798 = state_45752__$1;
(statearr_45775_45798[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__41015__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__41015__auto____0 = (function (){
var statearr_45776 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45776[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__41015__auto__);

(statearr_45776[(1)] = (1));

return statearr_45776;
});
var figwheel$client$file_reloader_plugin_$_state_machine__41015__auto____1 = (function (state_45752){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_45752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e45777){if((e45777 instanceof Object)){
var ex__41018__auto__ = e45777;
var statearr_45778_45799 = state_45752;
(statearr_45778_45799[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45800 = state_45752;
state_45752 = G__45800;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__41015__auto__ = function(state_45752){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__41015__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__41015__auto____1.call(this,state_45752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__41015__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__41015__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_45779 = f__41110__auto__.call(null);
(statearr_45779[(6)] = c__41109__auto___45780);

return statearr_45779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__45801_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__45801_SHARP_));
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
var base_path_45807 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45803 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45804 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45805 = true;
var _STAR_print_fn_STAR__temp_val__45806 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45805);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45806);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45804);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45803);
}}catch (e45802){if((e45802 instanceof Error)){
var e = e45802;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_45807], null));
} else {
var e = e45802;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__45808){
var map__45809 = p__45808;
var map__45809__$1 = (((((!((map__45809 == null))))?(((((map__45809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45809):map__45809);
var opts = map__45809__$1;
var build_id = cljs.core.get.call(null,map__45809__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__45811){
var vec__45812 = p__45811;
var seq__45813 = cljs.core.seq.call(null,vec__45812);
var first__45814 = cljs.core.first.call(null,seq__45813);
var seq__45813__$1 = cljs.core.next.call(null,seq__45813);
var map__45815 = first__45814;
var map__45815__$1 = (((((!((map__45815 == null))))?(((((map__45815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45815):map__45815);
var msg = map__45815__$1;
var msg_name = cljs.core.get.call(null,map__45815__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45813__$1;
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
return (function (p__45817){
var vec__45818 = p__45817;
var seq__45819 = cljs.core.seq.call(null,vec__45818);
var first__45820 = cljs.core.first.call(null,seq__45819);
var seq__45819__$1 = cljs.core.next.call(null,seq__45819);
var map__45821 = first__45820;
var map__45821__$1 = (((((!((map__45821 == null))))?(((((map__45821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45821):map__45821);
var msg = map__45821__$1;
var msg_name = cljs.core.get.call(null,map__45821__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45819__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__45823){
var map__45824 = p__45823;
var map__45824__$1 = (((((!((map__45824 == null))))?(((((map__45824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45824):map__45824);
var on_compile_warning = cljs.core.get.call(null,map__45824__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__45824__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__45826){
var vec__45827 = p__45826;
var seq__45828 = cljs.core.seq.call(null,vec__45827);
var first__45829 = cljs.core.first.call(null,seq__45828);
var seq__45828__$1 = cljs.core.next.call(null,seq__45828);
var map__45830 = first__45829;
var map__45830__$1 = (((((!((map__45830 == null))))?(((((map__45830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45830):map__45830);
var msg = map__45830__$1;
var msg_name = cljs.core.get.call(null,map__45830__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45828__$1;
var pred__45832 = cljs.core._EQ_;
var expr__45833 = msg_name;
if(cljs.core.truth_(pred__45832.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__45833))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__45832.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__45833))){
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
var c__41109__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_45922){
var state_val_45923 = (state_45922[(1)]);
if((state_val_45923 === (7))){
var inst_45842 = (state_45922[(2)]);
var state_45922__$1 = state_45922;
if(cljs.core.truth_(inst_45842)){
var statearr_45924_45971 = state_45922__$1;
(statearr_45924_45971[(1)] = (8));

} else {
var statearr_45925_45972 = state_45922__$1;
(statearr_45925_45972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (20))){
var inst_45916 = (state_45922[(2)]);
var state_45922__$1 = state_45922;
var statearr_45926_45973 = state_45922__$1;
(statearr_45926_45973[(2)] = inst_45916);

(statearr_45926_45973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (27))){
var inst_45912 = (state_45922[(2)]);
var state_45922__$1 = state_45922;
var statearr_45927_45974 = state_45922__$1;
(statearr_45927_45974[(2)] = inst_45912);

(statearr_45927_45974[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (1))){
var inst_45835 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_45922__$1 = state_45922;
if(cljs.core.truth_(inst_45835)){
var statearr_45928_45975 = state_45922__$1;
(statearr_45928_45975[(1)] = (2));

} else {
var statearr_45929_45976 = state_45922__$1;
(statearr_45929_45976[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (24))){
var inst_45914 = (state_45922[(2)]);
var state_45922__$1 = state_45922;
var statearr_45930_45977 = state_45922__$1;
(statearr_45930_45977[(2)] = inst_45914);

(statearr_45930_45977[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (4))){
var inst_45920 = (state_45922[(2)]);
var state_45922__$1 = state_45922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45922__$1,inst_45920);
} else {
if((state_val_45923 === (15))){
var inst_45918 = (state_45922[(2)]);
var state_45922__$1 = state_45922;
var statearr_45931_45978 = state_45922__$1;
(statearr_45931_45978[(2)] = inst_45918);

(statearr_45931_45978[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (21))){
var inst_45871 = (state_45922[(2)]);
var inst_45872 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45873 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45872);
var state_45922__$1 = (function (){var statearr_45932 = state_45922;
(statearr_45932[(7)] = inst_45871);

return statearr_45932;
})();
var statearr_45933_45979 = state_45922__$1;
(statearr_45933_45979[(2)] = inst_45873);

(statearr_45933_45979[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (31))){
var inst_45901 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_45922__$1 = state_45922;
if(inst_45901){
var statearr_45934_45980 = state_45922__$1;
(statearr_45934_45980[(1)] = (34));

} else {
var statearr_45935_45981 = state_45922__$1;
(statearr_45935_45981[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (32))){
var inst_45910 = (state_45922[(2)]);
var state_45922__$1 = state_45922;
var statearr_45936_45982 = state_45922__$1;
(statearr_45936_45982[(2)] = inst_45910);

(statearr_45936_45982[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (33))){
var inst_45897 = (state_45922[(2)]);
var inst_45898 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45899 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45898);
var state_45922__$1 = (function (){var statearr_45937 = state_45922;
(statearr_45937[(8)] = inst_45897);

return statearr_45937;
})();
var statearr_45938_45983 = state_45922__$1;
(statearr_45938_45983[(2)] = inst_45899);

(statearr_45938_45983[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (13))){
var inst_45856 = figwheel.client.heads_up.clear.call(null);
var state_45922__$1 = state_45922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45922__$1,(16),inst_45856);
} else {
if((state_val_45923 === (22))){
var inst_45877 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45878 = figwheel.client.heads_up.append_warning_message.call(null,inst_45877);
var state_45922__$1 = state_45922;
var statearr_45939_45984 = state_45922__$1;
(statearr_45939_45984[(2)] = inst_45878);

(statearr_45939_45984[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (36))){
var inst_45908 = (state_45922[(2)]);
var state_45922__$1 = state_45922;
var statearr_45940_45985 = state_45922__$1;
(statearr_45940_45985[(2)] = inst_45908);

(statearr_45940_45985[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (29))){
var inst_45888 = (state_45922[(2)]);
var inst_45889 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45890 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45889);
var state_45922__$1 = (function (){var statearr_45941 = state_45922;
(statearr_45941[(9)] = inst_45888);

return statearr_45941;
})();
var statearr_45942_45986 = state_45922__$1;
(statearr_45942_45986[(2)] = inst_45890);

(statearr_45942_45986[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (6))){
var inst_45837 = (state_45922[(10)]);
var state_45922__$1 = state_45922;
var statearr_45943_45987 = state_45922__$1;
(statearr_45943_45987[(2)] = inst_45837);

(statearr_45943_45987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (28))){
var inst_45884 = (state_45922[(2)]);
var inst_45885 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45886 = figwheel.client.heads_up.display_warning.call(null,inst_45885);
var state_45922__$1 = (function (){var statearr_45944 = state_45922;
(statearr_45944[(11)] = inst_45884);

return statearr_45944;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45922__$1,(29),inst_45886);
} else {
if((state_val_45923 === (25))){
var inst_45882 = figwheel.client.heads_up.clear.call(null);
var state_45922__$1 = state_45922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45922__$1,(28),inst_45882);
} else {
if((state_val_45923 === (34))){
var inst_45903 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45922__$1 = state_45922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45922__$1,(37),inst_45903);
} else {
if((state_val_45923 === (17))){
var inst_45862 = (state_45922[(2)]);
var inst_45863 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45864 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45863);
var state_45922__$1 = (function (){var statearr_45945 = state_45922;
(statearr_45945[(12)] = inst_45862);

return statearr_45945;
})();
var statearr_45946_45988 = state_45922__$1;
(statearr_45946_45988[(2)] = inst_45864);

(statearr_45946_45988[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (3))){
var inst_45854 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_45922__$1 = state_45922;
if(inst_45854){
var statearr_45947_45989 = state_45922__$1;
(statearr_45947_45989[(1)] = (13));

} else {
var statearr_45948_45990 = state_45922__$1;
(statearr_45948_45990[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (12))){
var inst_45850 = (state_45922[(2)]);
var state_45922__$1 = state_45922;
var statearr_45949_45991 = state_45922__$1;
(statearr_45949_45991[(2)] = inst_45850);

(statearr_45949_45991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (2))){
var inst_45837 = (state_45922[(10)]);
var inst_45837__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_45922__$1 = (function (){var statearr_45950 = state_45922;
(statearr_45950[(10)] = inst_45837__$1);

return statearr_45950;
})();
if(cljs.core.truth_(inst_45837__$1)){
var statearr_45951_45992 = state_45922__$1;
(statearr_45951_45992[(1)] = (5));

} else {
var statearr_45952_45993 = state_45922__$1;
(statearr_45952_45993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (23))){
var inst_45880 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_45922__$1 = state_45922;
if(inst_45880){
var statearr_45953_45994 = state_45922__$1;
(statearr_45953_45994[(1)] = (25));

} else {
var statearr_45954_45995 = state_45922__$1;
(statearr_45954_45995[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (35))){
var state_45922__$1 = state_45922;
var statearr_45955_45996 = state_45922__$1;
(statearr_45955_45996[(2)] = null);

(statearr_45955_45996[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (19))){
var inst_45875 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_45922__$1 = state_45922;
if(inst_45875){
var statearr_45956_45997 = state_45922__$1;
(statearr_45956_45997[(1)] = (22));

} else {
var statearr_45957_45998 = state_45922__$1;
(statearr_45957_45998[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (11))){
var inst_45846 = (state_45922[(2)]);
var state_45922__$1 = state_45922;
var statearr_45958_45999 = state_45922__$1;
(statearr_45958_45999[(2)] = inst_45846);

(statearr_45958_45999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (9))){
var inst_45848 = figwheel.client.heads_up.clear.call(null);
var state_45922__$1 = state_45922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45922__$1,(12),inst_45848);
} else {
if((state_val_45923 === (5))){
var inst_45839 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_45922__$1 = state_45922;
var statearr_45959_46000 = state_45922__$1;
(statearr_45959_46000[(2)] = inst_45839);

(statearr_45959_46000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (14))){
var inst_45866 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_45922__$1 = state_45922;
if(inst_45866){
var statearr_45960_46001 = state_45922__$1;
(statearr_45960_46001[(1)] = (18));

} else {
var statearr_45961_46002 = state_45922__$1;
(statearr_45961_46002[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (26))){
var inst_45892 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_45922__$1 = state_45922;
if(inst_45892){
var statearr_45962_46003 = state_45922__$1;
(statearr_45962_46003[(1)] = (30));

} else {
var statearr_45963_46004 = state_45922__$1;
(statearr_45963_46004[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (16))){
var inst_45858 = (state_45922[(2)]);
var inst_45859 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45860 = figwheel.client.heads_up.display_exception.call(null,inst_45859);
var state_45922__$1 = (function (){var statearr_45964 = state_45922;
(statearr_45964[(13)] = inst_45858);

return statearr_45964;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45922__$1,(17),inst_45860);
} else {
if((state_val_45923 === (30))){
var inst_45894 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45895 = figwheel.client.heads_up.display_warning.call(null,inst_45894);
var state_45922__$1 = state_45922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45922__$1,(33),inst_45895);
} else {
if((state_val_45923 === (10))){
var inst_45852 = (state_45922[(2)]);
var state_45922__$1 = state_45922;
var statearr_45965_46005 = state_45922__$1;
(statearr_45965_46005[(2)] = inst_45852);

(statearr_45965_46005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (18))){
var inst_45868 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45869 = figwheel.client.heads_up.display_exception.call(null,inst_45868);
var state_45922__$1 = state_45922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45922__$1,(21),inst_45869);
} else {
if((state_val_45923 === (37))){
var inst_45905 = (state_45922[(2)]);
var state_45922__$1 = state_45922;
var statearr_45966_46006 = state_45922__$1;
(statearr_45966_46006[(2)] = inst_45905);

(statearr_45966_46006[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45923 === (8))){
var inst_45844 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45922__$1 = state_45922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45922__$1,(11),inst_45844);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41015__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41015__auto____0 = (function (){
var statearr_45967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45967[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41015__auto__);

(statearr_45967[(1)] = (1));

return statearr_45967;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41015__auto____1 = (function (state_45922){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_45922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e45968){if((e45968 instanceof Object)){
var ex__41018__auto__ = e45968;
var statearr_45969_46007 = state_45922;
(statearr_45969_46007[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46008 = state_45922;
state_45922 = G__46008;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41015__auto__ = function(state_45922){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41015__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41015__auto____1.call(this,state_45922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41015__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41015__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_45970 = f__41110__auto__.call(null);
(statearr_45970[(6)] = c__41109__auto__);

return statearr_45970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
}));

return c__41109__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__41109__auto___46037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_46023){
var state_val_46024 = (state_46023[(1)]);
if((state_val_46024 === (1))){
var state_46023__$1 = state_46023;
var statearr_46025_46038 = state_46023__$1;
(statearr_46025_46038[(2)] = null);

(statearr_46025_46038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46024 === (2))){
var state_46023__$1 = state_46023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46023__$1,(4),ch);
} else {
if((state_val_46024 === (3))){
var inst_46021 = (state_46023[(2)]);
var state_46023__$1 = state_46023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46023__$1,inst_46021);
} else {
if((state_val_46024 === (4))){
var inst_46011 = (state_46023[(7)]);
var inst_46011__$1 = (state_46023[(2)]);
var state_46023__$1 = (function (){var statearr_46026 = state_46023;
(statearr_46026[(7)] = inst_46011__$1);

return statearr_46026;
})();
if(cljs.core.truth_(inst_46011__$1)){
var statearr_46027_46039 = state_46023__$1;
(statearr_46027_46039[(1)] = (5));

} else {
var statearr_46028_46040 = state_46023__$1;
(statearr_46028_46040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46024 === (5))){
var inst_46011 = (state_46023[(7)]);
var inst_46013 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_46011);
var state_46023__$1 = state_46023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46023__$1,(8),inst_46013);
} else {
if((state_val_46024 === (6))){
var state_46023__$1 = state_46023;
var statearr_46029_46041 = state_46023__$1;
(statearr_46029_46041[(2)] = null);

(statearr_46029_46041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46024 === (7))){
var inst_46019 = (state_46023[(2)]);
var state_46023__$1 = state_46023;
var statearr_46030_46042 = state_46023__$1;
(statearr_46030_46042[(2)] = inst_46019);

(statearr_46030_46042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46024 === (8))){
var inst_46015 = (state_46023[(2)]);
var state_46023__$1 = (function (){var statearr_46031 = state_46023;
(statearr_46031[(8)] = inst_46015);

return statearr_46031;
})();
var statearr_46032_46043 = state_46023__$1;
(statearr_46032_46043[(2)] = null);

(statearr_46032_46043[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__41015__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__41015__auto____0 = (function (){
var statearr_46033 = [null,null,null,null,null,null,null,null,null];
(statearr_46033[(0)] = figwheel$client$heads_up_plugin_$_state_machine__41015__auto__);

(statearr_46033[(1)] = (1));

return statearr_46033;
});
var figwheel$client$heads_up_plugin_$_state_machine__41015__auto____1 = (function (state_46023){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_46023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e46034){if((e46034 instanceof Object)){
var ex__41018__auto__ = e46034;
var statearr_46035_46044 = state_46023;
(statearr_46035_46044[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46045 = state_46023;
state_46023 = G__46045;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__41015__auto__ = function(state_46023){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__41015__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__41015__auto____1.call(this,state_46023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__41015__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__41015__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_46036 = f__41110__auto__.call(null);
(statearr_46036[(6)] = c__41109__auto___46037);

return statearr_46036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
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
var c__41109__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_46051){
var state_val_46052 = (state_46051[(1)]);
if((state_val_46052 === (1))){
var inst_46046 = cljs.core.async.timeout.call(null,(3000));
var state_46051__$1 = state_46051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46051__$1,(2),inst_46046);
} else {
if((state_val_46052 === (2))){
var inst_46048 = (state_46051[(2)]);
var inst_46049 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_46051__$1 = (function (){var statearr_46053 = state_46051;
(statearr_46053[(7)] = inst_46048);

return statearr_46053;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46051__$1,inst_46049);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__41015__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__41015__auto____0 = (function (){
var statearr_46054 = [null,null,null,null,null,null,null,null];
(statearr_46054[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__41015__auto__);

(statearr_46054[(1)] = (1));

return statearr_46054;
});
var figwheel$client$enforce_project_plugin_$_state_machine__41015__auto____1 = (function (state_46051){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_46051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e46055){if((e46055 instanceof Object)){
var ex__41018__auto__ = e46055;
var statearr_46056_46058 = state_46051;
(statearr_46056_46058[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46059 = state_46051;
state_46051 = G__46059;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__41015__auto__ = function(state_46051){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__41015__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__41015__auto____1.call(this,state_46051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__41015__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__41015__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_46057 = f__41110__auto__.call(null);
(statearr_46057[(6)] = c__41109__auto__);

return statearr_46057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
}));

return c__41109__auto__;
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
var c__41109__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_46066){
var state_val_46067 = (state_46066[(1)]);
if((state_val_46067 === (1))){
var inst_46060 = cljs.core.async.timeout.call(null,(2000));
var state_46066__$1 = state_46066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46066__$1,(2),inst_46060);
} else {
if((state_val_46067 === (2))){
var inst_46062 = (state_46066[(2)]);
var inst_46063 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_46064 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_46063);
var state_46066__$1 = (function (){var statearr_46068 = state_46066;
(statearr_46068[(7)] = inst_46062);

return statearr_46068;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46066__$1,inst_46064);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41015__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41015__auto____0 = (function (){
var statearr_46069 = [null,null,null,null,null,null,null,null];
(statearr_46069[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41015__auto__);

(statearr_46069[(1)] = (1));

return statearr_46069;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41015__auto____1 = (function (state_46066){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_46066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e46070){if((e46070 instanceof Object)){
var ex__41018__auto__ = e46070;
var statearr_46071_46073 = state_46066;
(statearr_46071_46073[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46074 = state_46066;
state_46066 = G__46074;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41015__auto__ = function(state_46066){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41015__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41015__auto____1.call(this,state_46066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41015__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41015__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_46072 = f__41110__auto__.call(null);
(statearr_46072[(6)] = c__41109__auto__);

return statearr_46072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
}));

return c__41109__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__46075){
var map__46076 = p__46075;
var map__46076__$1 = (((((!((map__46076 == null))))?(((((map__46076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46076):map__46076);
var file = cljs.core.get.call(null,map__46076__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__46076__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__46076__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__46078 = "";
var G__46078__$1 = (cljs.core.truth_(file)?[G__46078,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__46078);
var G__46078__$2 = (cljs.core.truth_(line)?[G__46078__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__46078__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__46078__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__46078__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__46079){
var map__46080 = p__46079;
var map__46080__$1 = (((((!((map__46080 == null))))?(((((map__46080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46080):map__46080);
var ed = map__46080__$1;
var exception_data = cljs.core.get.call(null,map__46080__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__46080__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_46083 = (function (){var G__46082 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46082)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__46082;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_46083);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__46084){
var map__46085 = p__46084;
var map__46085__$1 = (((((!((map__46085 == null))))?(((((map__46085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46085):map__46085);
var w = map__46085__$1;
var message = cljs.core.get.call(null,map__46085__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__46087 = cljs.core.seq.call(null,plugins);
var chunk__46088 = null;
var count__46089 = (0);
var i__46090 = (0);
while(true){
if((i__46090 < count__46089)){
var vec__46097 = cljs.core._nth.call(null,chunk__46088,i__46090);
var k = cljs.core.nth.call(null,vec__46097,(0),null);
var plugin = cljs.core.nth.call(null,vec__46097,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46103 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46087,chunk__46088,count__46089,i__46090,pl_46103,vec__46097,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_46103.call(null,msg_hist);
});})(seq__46087,chunk__46088,count__46089,i__46090,pl_46103,vec__46097,k,plugin))
);
} else {
}


var G__46104 = seq__46087;
var G__46105 = chunk__46088;
var G__46106 = count__46089;
var G__46107 = (i__46090 + (1));
seq__46087 = G__46104;
chunk__46088 = G__46105;
count__46089 = G__46106;
i__46090 = G__46107;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__46087);
if(temp__5720__auto__){
var seq__46087__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46087__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__46087__$1);
var G__46108 = cljs.core.chunk_rest.call(null,seq__46087__$1);
var G__46109 = c__4556__auto__;
var G__46110 = cljs.core.count.call(null,c__4556__auto__);
var G__46111 = (0);
seq__46087 = G__46108;
chunk__46088 = G__46109;
count__46089 = G__46110;
i__46090 = G__46111;
continue;
} else {
var vec__46100 = cljs.core.first.call(null,seq__46087__$1);
var k = cljs.core.nth.call(null,vec__46100,(0),null);
var plugin = cljs.core.nth.call(null,vec__46100,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46112 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46087,chunk__46088,count__46089,i__46090,pl_46112,vec__46100,k,plugin,seq__46087__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_46112.call(null,msg_hist);
});})(seq__46087,chunk__46088,count__46089,i__46090,pl_46112,vec__46100,k,plugin,seq__46087__$1,temp__5720__auto__))
);
} else {
}


var G__46113 = cljs.core.next.call(null,seq__46087__$1);
var G__46114 = null;
var G__46115 = (0);
var G__46116 = (0);
seq__46087 = G__46113;
chunk__46088 = G__46114;
count__46089 = G__46115;
i__46090 = G__46116;
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
var G__46118 = arguments.length;
switch (G__46118) {
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

var seq__46119_46124 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__46120_46125 = null;
var count__46121_46126 = (0);
var i__46122_46127 = (0);
while(true){
if((i__46122_46127 < count__46121_46126)){
var msg_46128 = cljs.core._nth.call(null,chunk__46120_46125,i__46122_46127);
figwheel.client.socket.handle_incoming_message.call(null,msg_46128);


var G__46129 = seq__46119_46124;
var G__46130 = chunk__46120_46125;
var G__46131 = count__46121_46126;
var G__46132 = (i__46122_46127 + (1));
seq__46119_46124 = G__46129;
chunk__46120_46125 = G__46130;
count__46121_46126 = G__46131;
i__46122_46127 = G__46132;
continue;
} else {
var temp__5720__auto___46133 = cljs.core.seq.call(null,seq__46119_46124);
if(temp__5720__auto___46133){
var seq__46119_46134__$1 = temp__5720__auto___46133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46119_46134__$1)){
var c__4556__auto___46135 = cljs.core.chunk_first.call(null,seq__46119_46134__$1);
var G__46136 = cljs.core.chunk_rest.call(null,seq__46119_46134__$1);
var G__46137 = c__4556__auto___46135;
var G__46138 = cljs.core.count.call(null,c__4556__auto___46135);
var G__46139 = (0);
seq__46119_46124 = G__46136;
chunk__46120_46125 = G__46137;
count__46121_46126 = G__46138;
i__46122_46127 = G__46139;
continue;
} else {
var msg_46140 = cljs.core.first.call(null,seq__46119_46134__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_46140);


var G__46141 = cljs.core.next.call(null,seq__46119_46134__$1);
var G__46142 = null;
var G__46143 = (0);
var G__46144 = (0);
seq__46119_46124 = G__46141;
chunk__46120_46125 = G__46142;
count__46121_46126 = G__46143;
i__46122_46127 = G__46144;
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
var len__4736__auto___46149 = arguments.length;
var i__4737__auto___46150 = (0);
while(true){
if((i__4737__auto___46150 < len__4736__auto___46149)){
args__4742__auto__.push((arguments[i__4737__auto___46150]));

var G__46151 = (i__4737__auto___46150 + (1));
i__4737__auto___46150 = G__46151;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__46146){
var map__46147 = p__46146;
var map__46147__$1 = (((((!((map__46147 == null))))?(((((map__46147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46147):map__46147);
var opts = map__46147__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq46145){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46145));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e46152){if((e46152 instanceof Error)){
var e = e46152;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e46152;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__46153){
var map__46154 = p__46153;
var map__46154__$1 = (((((!((map__46154 == null))))?(((((map__46154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46154):map__46154);
var msg_name = cljs.core.get.call(null,map__46154__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1608009996591
