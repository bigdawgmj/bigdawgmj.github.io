// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34064){
var map__34065 = p__34064;
var map__34065__$1 = (((((!((map__34065 == null))))?(((((map__34065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34065):map__34065);
var m = map__34065__$1;
var n = cljs.core.get.call(null,map__34065__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34065__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34067_34099 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34068_34100 = null;
var count__34069_34101 = (0);
var i__34070_34102 = (0);
while(true){
if((i__34070_34102 < count__34069_34101)){
var f_34103 = cljs.core._nth.call(null,chunk__34068_34100,i__34070_34102);
cljs.core.println.call(null,"  ",f_34103);


var G__34104 = seq__34067_34099;
var G__34105 = chunk__34068_34100;
var G__34106 = count__34069_34101;
var G__34107 = (i__34070_34102 + (1));
seq__34067_34099 = G__34104;
chunk__34068_34100 = G__34105;
count__34069_34101 = G__34106;
i__34070_34102 = G__34107;
continue;
} else {
var temp__5720__auto___34108 = cljs.core.seq.call(null,seq__34067_34099);
if(temp__5720__auto___34108){
var seq__34067_34109__$1 = temp__5720__auto___34108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34067_34109__$1)){
var c__4556__auto___34110 = cljs.core.chunk_first.call(null,seq__34067_34109__$1);
var G__34111 = cljs.core.chunk_rest.call(null,seq__34067_34109__$1);
var G__34112 = c__4556__auto___34110;
var G__34113 = cljs.core.count.call(null,c__4556__auto___34110);
var G__34114 = (0);
seq__34067_34099 = G__34111;
chunk__34068_34100 = G__34112;
count__34069_34101 = G__34113;
i__34070_34102 = G__34114;
continue;
} else {
var f_34115 = cljs.core.first.call(null,seq__34067_34109__$1);
cljs.core.println.call(null,"  ",f_34115);


var G__34116 = cljs.core.next.call(null,seq__34067_34109__$1);
var G__34117 = null;
var G__34118 = (0);
var G__34119 = (0);
seq__34067_34099 = G__34116;
chunk__34068_34100 = G__34117;
count__34069_34101 = G__34118;
i__34070_34102 = G__34119;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34120 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34120);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34120)))?cljs.core.second.call(null,arglists_34120):arglists_34120));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34071_34121 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34072_34122 = null;
var count__34073_34123 = (0);
var i__34074_34124 = (0);
while(true){
if((i__34074_34124 < count__34073_34123)){
var vec__34085_34125 = cljs.core._nth.call(null,chunk__34072_34122,i__34074_34124);
var name_34126 = cljs.core.nth.call(null,vec__34085_34125,(0),null);
var map__34088_34127 = cljs.core.nth.call(null,vec__34085_34125,(1),null);
var map__34088_34128__$1 = (((((!((map__34088_34127 == null))))?(((((map__34088_34127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34088_34127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34088_34127):map__34088_34127);
var doc_34129 = cljs.core.get.call(null,map__34088_34128__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34130 = cljs.core.get.call(null,map__34088_34128__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34126);

cljs.core.println.call(null," ",arglists_34130);

if(cljs.core.truth_(doc_34129)){
cljs.core.println.call(null," ",doc_34129);
} else {
}


var G__34131 = seq__34071_34121;
var G__34132 = chunk__34072_34122;
var G__34133 = count__34073_34123;
var G__34134 = (i__34074_34124 + (1));
seq__34071_34121 = G__34131;
chunk__34072_34122 = G__34132;
count__34073_34123 = G__34133;
i__34074_34124 = G__34134;
continue;
} else {
var temp__5720__auto___34135 = cljs.core.seq.call(null,seq__34071_34121);
if(temp__5720__auto___34135){
var seq__34071_34136__$1 = temp__5720__auto___34135;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34071_34136__$1)){
var c__4556__auto___34137 = cljs.core.chunk_first.call(null,seq__34071_34136__$1);
var G__34138 = cljs.core.chunk_rest.call(null,seq__34071_34136__$1);
var G__34139 = c__4556__auto___34137;
var G__34140 = cljs.core.count.call(null,c__4556__auto___34137);
var G__34141 = (0);
seq__34071_34121 = G__34138;
chunk__34072_34122 = G__34139;
count__34073_34123 = G__34140;
i__34074_34124 = G__34141;
continue;
} else {
var vec__34090_34142 = cljs.core.first.call(null,seq__34071_34136__$1);
var name_34143 = cljs.core.nth.call(null,vec__34090_34142,(0),null);
var map__34093_34144 = cljs.core.nth.call(null,vec__34090_34142,(1),null);
var map__34093_34145__$1 = (((((!((map__34093_34144 == null))))?(((((map__34093_34144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34093_34144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34093_34144):map__34093_34144);
var doc_34146 = cljs.core.get.call(null,map__34093_34145__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34147 = cljs.core.get.call(null,map__34093_34145__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34143);

cljs.core.println.call(null," ",arglists_34147);

if(cljs.core.truth_(doc_34146)){
cljs.core.println.call(null," ",doc_34146);
} else {
}


var G__34148 = cljs.core.next.call(null,seq__34071_34136__$1);
var G__34149 = null;
var G__34150 = (0);
var G__34151 = (0);
seq__34071_34121 = G__34148;
chunk__34072_34122 = G__34149;
count__34073_34123 = G__34150;
i__34074_34124 = G__34151;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__34095 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34096 = null;
var count__34097 = (0);
var i__34098 = (0);
while(true){
if((i__34098 < count__34097)){
var role = cljs.core._nth.call(null,chunk__34096,i__34098);
var temp__5720__auto___34152__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___34152__$1)){
var spec_34153 = temp__5720__auto___34152__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34153));
} else {
}


var G__34154 = seq__34095;
var G__34155 = chunk__34096;
var G__34156 = count__34097;
var G__34157 = (i__34098 + (1));
seq__34095 = G__34154;
chunk__34096 = G__34155;
count__34097 = G__34156;
i__34098 = G__34157;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__34095);
if(temp__5720__auto____$1){
var seq__34095__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34095__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__34095__$1);
var G__34158 = cljs.core.chunk_rest.call(null,seq__34095__$1);
var G__34159 = c__4556__auto__;
var G__34160 = cljs.core.count.call(null,c__4556__auto__);
var G__34161 = (0);
seq__34095 = G__34158;
chunk__34096 = G__34159;
count__34097 = G__34160;
i__34098 = G__34161;
continue;
} else {
var role = cljs.core.first.call(null,seq__34095__$1);
var temp__5720__auto___34162__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___34162__$2)){
var spec_34163 = temp__5720__auto___34162__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34163));
} else {
}


var G__34164 = cljs.core.next.call(null,seq__34095__$1);
var G__34165 = null;
var G__34166 = (0);
var G__34167 = (0);
seq__34095 = G__34164;
chunk__34096 = G__34165;
count__34097 = G__34166;
i__34098 = G__34167;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34168 = cljs.core.conj.call(null,via,t);
var G__34169 = cljs.core.ex_cause.call(null,t);
via = G__34168;
t = G__34169;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34172 = datafied_throwable;
var map__34172__$1 = (((((!((map__34172 == null))))?(((((map__34172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34172):map__34172);
var via = cljs.core.get.call(null,map__34172__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__34172__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__34172__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34173 = cljs.core.last.call(null,via);
var map__34173__$1 = (((((!((map__34173 == null))))?(((((map__34173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34173):map__34173);
var type = cljs.core.get.call(null,map__34173__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__34173__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__34173__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34174 = data;
var map__34174__$1 = (((((!((map__34174 == null))))?(((((map__34174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34174):map__34174);
var problems = cljs.core.get.call(null,map__34174__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__34174__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__34174__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34175 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__34175__$1 = (((((!((map__34175 == null))))?(((((map__34175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34175):map__34175);
var top_data = map__34175__$1;
var source = cljs.core.get.call(null,map__34175__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__34180 = phase;
var G__34180__$1 = (((G__34180 instanceof cljs.core.Keyword))?G__34180.fqn:null);
switch (G__34180__$1) {
case "read-source":
var map__34181 = data;
var map__34181__$1 = (((((!((map__34181 == null))))?(((((map__34181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34181):map__34181);
var line = cljs.core.get.call(null,map__34181__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34181__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34183 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__34183__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34183,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34183);
var G__34183__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34183__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34183__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34183__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34183__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34184 = top_data;
var G__34184__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34184,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34184);
var G__34184__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34184__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34184__$1);
var G__34184__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34184__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34184__$2);
var G__34184__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34184__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34184__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34184__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34184__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34185 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34185,(0),null);
var method = cljs.core.nth.call(null,vec__34185,(1),null);
var file = cljs.core.nth.call(null,vec__34185,(2),null);
var line = cljs.core.nth.call(null,vec__34185,(3),null);
var G__34188 = top_data;
var G__34188__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__34188,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34188);
var G__34188__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__34188__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34188__$1);
var G__34188__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__34188__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34188__$2);
var G__34188__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34188__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34188__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34188__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34188__$4;
}

break;
case "execution":
var vec__34189 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34189,(0),null);
var method = cljs.core.nth.call(null,vec__34189,(1),null);
var file = cljs.core.nth.call(null,vec__34189,(2),null);
var line = cljs.core.nth.call(null,vec__34189,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__34171_SHARP_){
var or__4126__auto__ = (p1__34171_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__34171_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__34192 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34192__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__34192,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34192);
var G__34192__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34192__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34192__$1);
var G__34192__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__34192__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34192__$2);
var G__34192__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__34192__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34192__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34192__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34192__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34180__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34196){
var map__34197 = p__34196;
var map__34197__$1 = (((((!((map__34197 == null))))?(((((map__34197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34197):map__34197);
var triage_data = map__34197__$1;
var phase = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34199 = phase;
var G__34199__$1 = (((G__34199 instanceof cljs.core.Keyword))?G__34199.fqn:null);
switch (G__34199__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34200_34209 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34201_34210 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34202_34211 = true;
var _STAR_print_fn_STAR__temp_val__34203_34212 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34202_34211);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34203_34212);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__34194_SHARP_){
return cljs.core.dissoc.call(null,p1__34194_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34201_34210);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34200_34209);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34204_34213 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34205_34214 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34206_34215 = true;
var _STAR_print_fn_STAR__temp_val__34207_34216 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34206_34215);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34207_34216);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__34195_SHARP_){
return cljs.core.dissoc.call(null,p1__34195_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34205_34214);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34204_34213);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34199__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1608009988772
