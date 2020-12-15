// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
<<<<<<< HEAD
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27732){
var map__27733 = p__27732;
var map__27733__$1 = (((((!((map__27733 == null))))?(((((map__27733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27733):map__27733);
var m = map__27733__$1;
var n = cljs.core.get.call(null,map__27733__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__27733__$1,new cljs.core.Keyword(null,"name","name",1843675177));
=======
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28237){
var map__28238 = p__28237;
var map__28238__$1 = (((((!((map__28238 == null))))?(((((map__28238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28238):map__28238);
var m = map__28238__$1;
var n = cljs.core.get.call(null,map__28238__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28238__$1,new cljs.core.Keyword(null,"name","name",1843675177));
>>>>>>> 8f3c68a (Initial Commit)
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
<<<<<<< HEAD
var seq__27735_27767 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27736_27768 = null;
var count__27737_27769 = (0);
var i__27738_27770 = (0);
while(true){
if((i__27738_27770 < count__27737_27769)){
var f_27771 = cljs.core._nth.call(null,chunk__27736_27768,i__27738_27770);
cljs.core.println.call(null,"  ",f_27771);


var G__27772 = seq__27735_27767;
var G__27773 = chunk__27736_27768;
var G__27774 = count__27737_27769;
var G__27775 = (i__27738_27770 + (1));
seq__27735_27767 = G__27772;
chunk__27736_27768 = G__27773;
count__27737_27769 = G__27774;
i__27738_27770 = G__27775;
continue;
} else {
var temp__5720__auto___27776 = cljs.core.seq.call(null,seq__27735_27767);
if(temp__5720__auto___27776){
var seq__27735_27777__$1 = temp__5720__auto___27776;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27735_27777__$1)){
var c__4556__auto___27778 = cljs.core.chunk_first.call(null,seq__27735_27777__$1);
var G__27779 = cljs.core.chunk_rest.call(null,seq__27735_27777__$1);
var G__27780 = c__4556__auto___27778;
var G__27781 = cljs.core.count.call(null,c__4556__auto___27778);
var G__27782 = (0);
seq__27735_27767 = G__27779;
chunk__27736_27768 = G__27780;
count__27737_27769 = G__27781;
i__27738_27770 = G__27782;
continue;
} else {
var f_27783 = cljs.core.first.call(null,seq__27735_27777__$1);
cljs.core.println.call(null,"  ",f_27783);


var G__27784 = cljs.core.next.call(null,seq__27735_27777__$1);
var G__27785 = null;
var G__27786 = (0);
var G__27787 = (0);
seq__27735_27767 = G__27784;
chunk__27736_27768 = G__27785;
count__27737_27769 = G__27786;
i__27738_27770 = G__27787;
=======
var seq__28240_28272 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28241_28273 = null;
var count__28242_28274 = (0);
var i__28243_28275 = (0);
while(true){
if((i__28243_28275 < count__28242_28274)){
var f_28276 = cljs.core._nth.call(null,chunk__28241_28273,i__28243_28275);
cljs.core.println.call(null,"  ",f_28276);


var G__28277 = seq__28240_28272;
var G__28278 = chunk__28241_28273;
var G__28279 = count__28242_28274;
var G__28280 = (i__28243_28275 + (1));
seq__28240_28272 = G__28277;
chunk__28241_28273 = G__28278;
count__28242_28274 = G__28279;
i__28243_28275 = G__28280;
continue;
} else {
var temp__5720__auto___28281 = cljs.core.seq.call(null,seq__28240_28272);
if(temp__5720__auto___28281){
var seq__28240_28282__$1 = temp__5720__auto___28281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28240_28282__$1)){
var c__4556__auto___28283 = cljs.core.chunk_first.call(null,seq__28240_28282__$1);
var G__28284 = cljs.core.chunk_rest.call(null,seq__28240_28282__$1);
var G__28285 = c__4556__auto___28283;
var G__28286 = cljs.core.count.call(null,c__4556__auto___28283);
var G__28287 = (0);
seq__28240_28272 = G__28284;
chunk__28241_28273 = G__28285;
count__28242_28274 = G__28286;
i__28243_28275 = G__28287;
continue;
} else {
var f_28288 = cljs.core.first.call(null,seq__28240_28282__$1);
cljs.core.println.call(null,"  ",f_28288);


var G__28289 = cljs.core.next.call(null,seq__28240_28282__$1);
var G__28290 = null;
var G__28291 = (0);
var G__28292 = (0);
seq__28240_28272 = G__28289;
chunk__28241_28273 = G__28290;
count__28242_28274 = G__28291;
i__28243_28275 = G__28292;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
<<<<<<< HEAD
var arglists_27788 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
=======
var arglists_28293 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
<<<<<<< HEAD
cljs.core.prn.call(null,arglists_27788);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27788)))?cljs.core.second.call(null,arglists_27788):arglists_27788));
=======
cljs.core.prn.call(null,arglists_28293);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28293)))?cljs.core.second.call(null,arglists_28293):arglists_28293));
>>>>>>> 8f3c68a (Initial Commit)
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
<<<<<<< HEAD
var seq__27739_27789 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27740_27790 = null;
var count__27741_27791 = (0);
var i__27742_27792 = (0);
while(true){
if((i__27742_27792 < count__27741_27791)){
var vec__27753_27793 = cljs.core._nth.call(null,chunk__27740_27790,i__27742_27792);
var name_27794 = cljs.core.nth.call(null,vec__27753_27793,(0),null);
var map__27756_27795 = cljs.core.nth.call(null,vec__27753_27793,(1),null);
var map__27756_27796__$1 = (((((!((map__27756_27795 == null))))?(((((map__27756_27795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27756_27795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27756_27795):map__27756_27795);
var doc_27797 = cljs.core.get.call(null,map__27756_27796__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27798 = cljs.core.get.call(null,map__27756_27796__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27794);

cljs.core.println.call(null," ",arglists_27798);

if(cljs.core.truth_(doc_27797)){
cljs.core.println.call(null," ",doc_27797);
=======
var seq__28244_28294 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28245_28295 = null;
var count__28246_28296 = (0);
var i__28247_28297 = (0);
while(true){
if((i__28247_28297 < count__28246_28296)){
var vec__28258_28298 = cljs.core._nth.call(null,chunk__28245_28295,i__28247_28297);
var name_28299 = cljs.core.nth.call(null,vec__28258_28298,(0),null);
var map__28261_28300 = cljs.core.nth.call(null,vec__28258_28298,(1),null);
var map__28261_28301__$1 = (((((!((map__28261_28300 == null))))?(((((map__28261_28300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28261_28300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28261_28300):map__28261_28300);
var doc_28302 = cljs.core.get.call(null,map__28261_28301__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28303 = cljs.core.get.call(null,map__28261_28301__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28299);

cljs.core.println.call(null," ",arglists_28303);

if(cljs.core.truth_(doc_28302)){
cljs.core.println.call(null," ",doc_28302);
>>>>>>> 8f3c68a (Initial Commit)
} else {
}


<<<<<<< HEAD
var G__27799 = seq__27739_27789;
var G__27800 = chunk__27740_27790;
var G__27801 = count__27741_27791;
var G__27802 = (i__27742_27792 + (1));
seq__27739_27789 = G__27799;
chunk__27740_27790 = G__27800;
count__27741_27791 = G__27801;
i__27742_27792 = G__27802;
continue;
} else {
var temp__5720__auto___27803 = cljs.core.seq.call(null,seq__27739_27789);
if(temp__5720__auto___27803){
var seq__27739_27804__$1 = temp__5720__auto___27803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27739_27804__$1)){
var c__4556__auto___27805 = cljs.core.chunk_first.call(null,seq__27739_27804__$1);
var G__27806 = cljs.core.chunk_rest.call(null,seq__27739_27804__$1);
var G__27807 = c__4556__auto___27805;
var G__27808 = cljs.core.count.call(null,c__4556__auto___27805);
var G__27809 = (0);
seq__27739_27789 = G__27806;
chunk__27740_27790 = G__27807;
count__27741_27791 = G__27808;
i__27742_27792 = G__27809;
continue;
} else {
var vec__27758_27810 = cljs.core.first.call(null,seq__27739_27804__$1);
var name_27811 = cljs.core.nth.call(null,vec__27758_27810,(0),null);
var map__27761_27812 = cljs.core.nth.call(null,vec__27758_27810,(1),null);
var map__27761_27813__$1 = (((((!((map__27761_27812 == null))))?(((((map__27761_27812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27761_27812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27761_27812):map__27761_27812);
var doc_27814 = cljs.core.get.call(null,map__27761_27813__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27815 = cljs.core.get.call(null,map__27761_27813__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27811);

cljs.core.println.call(null," ",arglists_27815);

if(cljs.core.truth_(doc_27814)){
cljs.core.println.call(null," ",doc_27814);
=======
var G__28304 = seq__28244_28294;
var G__28305 = chunk__28245_28295;
var G__28306 = count__28246_28296;
var G__28307 = (i__28247_28297 + (1));
seq__28244_28294 = G__28304;
chunk__28245_28295 = G__28305;
count__28246_28296 = G__28306;
i__28247_28297 = G__28307;
continue;
} else {
var temp__5720__auto___28308 = cljs.core.seq.call(null,seq__28244_28294);
if(temp__5720__auto___28308){
var seq__28244_28309__$1 = temp__5720__auto___28308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28244_28309__$1)){
var c__4556__auto___28310 = cljs.core.chunk_first.call(null,seq__28244_28309__$1);
var G__28311 = cljs.core.chunk_rest.call(null,seq__28244_28309__$1);
var G__28312 = c__4556__auto___28310;
var G__28313 = cljs.core.count.call(null,c__4556__auto___28310);
var G__28314 = (0);
seq__28244_28294 = G__28311;
chunk__28245_28295 = G__28312;
count__28246_28296 = G__28313;
i__28247_28297 = G__28314;
continue;
} else {
var vec__28263_28315 = cljs.core.first.call(null,seq__28244_28309__$1);
var name_28316 = cljs.core.nth.call(null,vec__28263_28315,(0),null);
var map__28266_28317 = cljs.core.nth.call(null,vec__28263_28315,(1),null);
var map__28266_28318__$1 = (((((!((map__28266_28317 == null))))?(((((map__28266_28317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28266_28317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28266_28317):map__28266_28317);
var doc_28319 = cljs.core.get.call(null,map__28266_28318__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28320 = cljs.core.get.call(null,map__28266_28318__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28316);

cljs.core.println.call(null," ",arglists_28320);

if(cljs.core.truth_(doc_28319)){
cljs.core.println.call(null," ",doc_28319);
>>>>>>> 8f3c68a (Initial Commit)
} else {
}


<<<<<<< HEAD
var G__27816 = cljs.core.next.call(null,seq__27739_27804__$1);
var G__27817 = null;
var G__27818 = (0);
var G__27819 = (0);
seq__27739_27789 = G__27816;
chunk__27740_27790 = G__27817;
count__27741_27791 = G__27818;
i__27742_27792 = G__27819;
=======
var G__28321 = cljs.core.next.call(null,seq__28244_28309__$1);
var G__28322 = null;
var G__28323 = (0);
var G__28324 = (0);
seq__28244_28294 = G__28321;
chunk__28245_28295 = G__28322;
count__28246_28296 = G__28323;
i__28247_28297 = G__28324;
>>>>>>> 8f3c68a (Initial Commit)
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

<<<<<<< HEAD
var seq__27763 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27764 = null;
var count__27765 = (0);
var i__27766 = (0);
while(true){
if((i__27766 < count__27765)){
var role = cljs.core._nth.call(null,chunk__27764,i__27766);
var temp__5720__auto___27820__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___27820__$1)){
var spec_27821 = temp__5720__auto___27820__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27821));
=======
var seq__28268 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28269 = null;
var count__28270 = (0);
var i__28271 = (0);
while(true){
if((i__28271 < count__28270)){
var role = cljs.core._nth.call(null,chunk__28269,i__28271);
var temp__5720__auto___28325__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28325__$1)){
var spec_28326 = temp__5720__auto___28325__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28326));
>>>>>>> 8f3c68a (Initial Commit)
} else {
}


<<<<<<< HEAD
var G__27822 = seq__27763;
var G__27823 = chunk__27764;
var G__27824 = count__27765;
var G__27825 = (i__27766 + (1));
seq__27763 = G__27822;
chunk__27764 = G__27823;
count__27765 = G__27824;
i__27766 = G__27825;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__27763);
if(temp__5720__auto____$1){
var seq__27763__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27763__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__27763__$1);
var G__27826 = cljs.core.chunk_rest.call(null,seq__27763__$1);
var G__27827 = c__4556__auto__;
var G__27828 = cljs.core.count.call(null,c__4556__auto__);
var G__27829 = (0);
seq__27763 = G__27826;
chunk__27764 = G__27827;
count__27765 = G__27828;
i__27766 = G__27829;
continue;
} else {
var role = cljs.core.first.call(null,seq__27763__$1);
var temp__5720__auto___27830__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___27830__$2)){
var spec_27831 = temp__5720__auto___27830__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27831));
=======
var G__28327 = seq__28268;
var G__28328 = chunk__28269;
var G__28329 = count__28270;
var G__28330 = (i__28271 + (1));
seq__28268 = G__28327;
chunk__28269 = G__28328;
count__28270 = G__28329;
i__28271 = G__28330;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__28268);
if(temp__5720__auto____$1){
var seq__28268__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28268__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28268__$1);
var G__28331 = cljs.core.chunk_rest.call(null,seq__28268__$1);
var G__28332 = c__4556__auto__;
var G__28333 = cljs.core.count.call(null,c__4556__auto__);
var G__28334 = (0);
seq__28268 = G__28331;
chunk__28269 = G__28332;
count__28270 = G__28333;
i__28271 = G__28334;
continue;
} else {
var role = cljs.core.first.call(null,seq__28268__$1);
var temp__5720__auto___28335__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28335__$2)){
var spec_28336 = temp__5720__auto___28335__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28336));
>>>>>>> 8f3c68a (Initial Commit)
} else {
}


<<<<<<< HEAD
var G__27832 = cljs.core.next.call(null,seq__27763__$1);
var G__27833 = null;
var G__27834 = (0);
var G__27835 = (0);
seq__27763 = G__27832;
chunk__27764 = G__27833;
count__27765 = G__27834;
i__27766 = G__27835;
=======
var G__28337 = cljs.core.next.call(null,seq__28268__$1);
var G__28338 = null;
var G__28339 = (0);
var G__28340 = (0);
seq__28268 = G__28337;
chunk__28269 = G__28338;
count__28270 = G__28339;
i__28271 = G__28340;
>>>>>>> 8f3c68a (Initial Commit)
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
<<<<<<< HEAD
var G__27836 = cljs.core.conj.call(null,via,t);
var G__27837 = cljs.core.ex_cause.call(null,t);
via = G__27836;
t = G__27837;
=======
var G__28341 = cljs.core.conj.call(null,via,t);
var G__28342 = cljs.core.ex_cause.call(null,t);
via = G__28341;
t = G__28342;
>>>>>>> 8f3c68a (Initial Commit)
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
<<<<<<< HEAD
var map__27840 = datafied_throwable;
var map__27840__$1 = (((((!((map__27840 == null))))?(((((map__27840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27840):map__27840);
var via = cljs.core.get.call(null,map__27840__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__27840__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__27840__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27841 = cljs.core.last.call(null,via);
var map__27841__$1 = (((((!((map__27841 == null))))?(((((map__27841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27841):map__27841);
var type = cljs.core.get.call(null,map__27841__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__27841__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__27841__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27842 = data;
var map__27842__$1 = (((((!((map__27842 == null))))?(((((map__27842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27842):map__27842);
var problems = cljs.core.get.call(null,map__27842__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__27842__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__27842__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27843 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__27843__$1 = (((((!((map__27843 == null))))?(((((map__27843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27843):map__27843);
var top_data = map__27843__$1;
var source = cljs.core.get.call(null,map__27843__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__27848 = phase;
var G__27848__$1 = (((G__27848 instanceof cljs.core.Keyword))?G__27848.fqn:null);
switch (G__27848__$1) {
case "read-source":
var map__27849 = data;
var map__27849__$1 = (((((!((map__27849 == null))))?(((((map__27849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27849):map__27849);
var line = cljs.core.get.call(null,map__27849__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27849__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27851 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__27851__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27851,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27851);
var G__27851__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27851__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27851__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27851__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27851__$2;
=======
var map__28345 = datafied_throwable;
var map__28345__$1 = (((((!((map__28345 == null))))?(((((map__28345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28345):map__28345);
var via = cljs.core.get.call(null,map__28345__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__28345__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__28345__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28346 = cljs.core.last.call(null,via);
var map__28346__$1 = (((((!((map__28346 == null))))?(((((map__28346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28346):map__28346);
var type = cljs.core.get.call(null,map__28346__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28346__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__28346__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28347 = data;
var map__28347__$1 = (((((!((map__28347 == null))))?(((((map__28347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28347):map__28347);
var problems = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28348 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__28348__$1 = (((((!((map__28348 == null))))?(((((map__28348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28348):map__28348);
var top_data = map__28348__$1;
var source = cljs.core.get.call(null,map__28348__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__28353 = phase;
var G__28353__$1 = (((G__28353 instanceof cljs.core.Keyword))?G__28353.fqn:null);
switch (G__28353__$1) {
case "read-source":
var map__28354 = data;
var map__28354__$1 = (((((!((map__28354 == null))))?(((((map__28354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28354):map__28354);
var line = cljs.core.get.call(null,map__28354__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28354__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28356 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__28356__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28356,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28356);
var G__28356__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28356__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28356__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28356__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28356__$2;
>>>>>>> 8f3c68a (Initial Commit)
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
<<<<<<< HEAD
var G__27852 = top_data;
var G__27852__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27852,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27852);
var G__27852__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27852__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27852__$1);
var G__27852__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27852__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27852__$2);
var G__27852__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27852__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27852__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27852__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27852__$4;
=======
var G__28357 = top_data;
var G__28357__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28357,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28357);
var G__28357__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28357__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28357__$1);
var G__28357__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28357__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28357__$2);
var G__28357__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28357__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28357__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28357__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28357__$4;
>>>>>>> 8f3c68a (Initial Commit)
}

break;
case "read-eval-result":
case "print-eval-result":
<<<<<<< HEAD
var vec__27853 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27853,(0),null);
var method = cljs.core.nth.call(null,vec__27853,(1),null);
var file = cljs.core.nth.call(null,vec__27853,(2),null);
var line = cljs.core.nth.call(null,vec__27853,(3),null);
var G__27856 = top_data;
var G__27856__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__27856,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27856);
var G__27856__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__27856__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27856__$1);
var G__27856__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
=======
var vec__28358 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28358,(0),null);
var method = cljs.core.nth.call(null,vec__28358,(1),null);
var file = cljs.core.nth.call(null,vec__28358,(2),null);
var line = cljs.core.nth.call(null,vec__28358,(3),null);
var G__28361 = top_data;
var G__28361__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__28361,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28361);
var G__28361__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__28361__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28361__$1);
var G__28361__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
<<<<<<< HEAD
})())?cljs.core.assoc.call(null,G__27856__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27856__$2);
var G__27856__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27856__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27856__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27856__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27856__$4;
=======
})())?cljs.core.assoc.call(null,G__28361__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28361__$2);
var G__28361__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28361__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28361__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28361__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28361__$4;
>>>>>>> 8f3c68a (Initial Commit)
}

break;
case "execution":
<<<<<<< HEAD
var vec__27857 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27857,(0),null);
var method = cljs.core.nth.call(null,vec__27857,(1),null);
var file = cljs.core.nth.call(null,vec__27857,(2),null);
var line = cljs.core.nth.call(null,vec__27857,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__27839_SHARP_){
var or__4126__auto__ = (p1__27839_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__27839_SHARP_);
=======
var vec__28362 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28362,(0),null);
var method = cljs.core.nth.call(null,vec__28362,(1),null);
var file = cljs.core.nth.call(null,vec__28362,(2),null);
var line = cljs.core.nth.call(null,vec__28362,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__28344_SHARP_){
var or__4126__auto__ = (p1__28344_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__28344_SHARP_);
>>>>>>> 8f3c68a (Initial Commit)
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
<<<<<<< HEAD
var G__27860 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27860__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__27860,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27860);
var G__27860__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27860__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27860__$1);
var G__27860__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
=======
var G__28365 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28365__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__28365,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28365);
var G__28365__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28365__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28365__$1);
var G__28365__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
>>>>>>> 8f3c68a (Initial Commit)
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
<<<<<<< HEAD
})())?cljs.core.assoc.call(null,G__27860__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
=======
})())?cljs.core.assoc.call(null,G__28365__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
<<<<<<< HEAD
})()):G__27860__$2);
var G__27860__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__27860__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27860__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27860__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27860__$4;
=======
})()):G__28365__$2);
var G__28365__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__28365__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28365__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28365__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28365__$4;
>>>>>>> 8f3c68a (Initial Commit)
}

break;
default:
<<<<<<< HEAD
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27848__$1)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28353__$1)].join('')));
>>>>>>> 8f3c68a (Initial Commit)

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
<<<<<<< HEAD
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27864){
var map__27865 = p__27864;
var map__27865__$1 = (((((!((map__27865 == null))))?(((((map__27865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27865):map__27865);
var triage_data = map__27865__$1;
var phase = cljs.core.get.call(null,map__27865__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__27865__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__27865__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27865__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__27865__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__27865__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__27865__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__27865__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
=======
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28369){
var map__28370 = p__28369;
var map__28370__$1 = (((((!((map__28370 == null))))?(((((map__28370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28370):map__28370);
var triage_data = map__28370__$1;
var phase = cljs.core.get.call(null,map__28370__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__28370__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__28370__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28370__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__28370__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__28370__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__28370__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__28370__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
>>>>>>> 8f3c68a (Initial Commit)
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
<<<<<<< HEAD
var G__27867 = phase;
var G__27867__$1 = (((G__27867 instanceof cljs.core.Keyword))?G__27867.fqn:null);
switch (G__27867__$1) {
=======
var G__28372 = phase;
var G__28372__$1 = (((G__28372 instanceof cljs.core.Keyword))?G__28372.fqn:null);
switch (G__28372__$1) {
>>>>>>> 8f3c68a (Initial Commit)
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
<<<<<<< HEAD
var _STAR_print_newline_STAR__orig_val__27868_27877 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27869_27878 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27870_27879 = true;
var _STAR_print_fn_STAR__temp_val__27871_27880 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27870_27879);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27871_27880);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__27862_SHARP_){
return cljs.core.dissoc.call(null,p1__27862_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27869_27878);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27868_27877);
=======
var _STAR_print_newline_STAR__orig_val__28373_28382 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28374_28383 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28375_28384 = true;
var _STAR_print_fn_STAR__temp_val__28376_28385 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28375_28384);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28376_28385);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__28367_SHARP_){
return cljs.core.dissoc.call(null,p1__28367_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28374_28383);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28373_28382);
>>>>>>> 8f3c68a (Initial Commit)
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
<<<<<<< HEAD
var _STAR_print_newline_STAR__orig_val__27872_27881 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27873_27882 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27874_27883 = true;
var _STAR_print_fn_STAR__temp_val__27875_27884 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27874_27883);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27875_27884);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__27863_SHARP_){
return cljs.core.dissoc.call(null,p1__27863_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27873_27882);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27872_27881);
=======
var _STAR_print_newline_STAR__orig_val__28377_28386 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28378_28387 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28379_28388 = true;
var _STAR_print_fn_STAR__temp_val__28380_28389 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28379_28388);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28380_28389);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__28368_SHARP_){
return cljs.core.dissoc.call(null,p1__28368_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28378_28387);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28377_28386);
>>>>>>> 8f3c68a (Initial Commit)
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
<<<<<<< HEAD
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27867__$1)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28372__$1)].join('')));
>>>>>>> 8f3c68a (Initial Commit)

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

<<<<<<< HEAD
//# sourceMappingURL=repl.js.map?rel=1602979377951
=======
//# sourceMappingURL=repl.js.map?rel=1608004503807
>>>>>>> 8f3c68a (Initial Commit)
