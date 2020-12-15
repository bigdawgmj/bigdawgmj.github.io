// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___28827 = arguments.length;
var i__4737__auto___28828 = (0);
while(true){
if((i__4737__auto___28828 < len__4736__auto___28827)){
args__4742__auto__.push((arguments[i__4737__auto___28828]));

var G__28829 = (i__4737__auto___28828 + (1));
i__4737__auto___28828 = G__28829;
=======
var len__4736__auto___29332 = arguments.length;
var i__4737__auto___29333 = (0);
while(true){
if((i__4737__auto___29333 < len__4736__auto___29332)){
args__4742__auto__.push((arguments[i__4737__auto___29333]));

var G__29334 = (i__4737__auto___29333 + (1));
i__4737__auto___29333 = G__29334;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.print_str,more));
}));

(cljs.pprint.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.pprint.print.cljs$lang$applyTo = (function (seq28826){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28826));
=======
(cljs.pprint.print.cljs$lang$applyTo = (function (seq29331){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29331));
>>>>>>> 8f3c68a (Initial Commit)
}));

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___28831 = arguments.length;
var i__4737__auto___28832 = (0);
while(true){
if((i__4737__auto___28832 < len__4736__auto___28831)){
args__4742__auto__.push((arguments[i__4737__auto___28832]));

var G__28833 = (i__4737__auto___28832 + (1));
i__4737__auto___28832 = G__28833;
=======
var len__4736__auto___29336 = arguments.length;
var i__4737__auto___29337 = (0);
while(true){
if((i__4737__auto___29337 < len__4736__auto___29336)){
args__4742__auto__.push((arguments[i__4737__auto___29337]));

var G__29338 = (i__4737__auto___29337 + (1));
i__4737__auto___29337 = G__29338;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.print,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
}));

(cljs.pprint.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.pprint.println.cljs$lang$applyTo = (function (seq28830){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28830));
}));

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,(function (){var pred__28834 = cljs.core._EQ_;
var expr__28835 = c;
if(cljs.core.truth_(pred__28834.call(null,"\b",expr__28835))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__28834.call(null," ",expr__28835))){
return "\\space";
} else {
if(cljs.core.truth_(pred__28834.call(null,"\t",expr__28835))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__28834.call(null,"\n",expr__28835))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__28834.call(null,"\f",expr__28835))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__28834.call(null,"\r",expr__28835))){
return "\\return";
} else {
if(cljs.core.truth_(pred__28834.call(null,"\"",expr__28835))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__28834.call(null,"\\",expr__28835))){
=======
(cljs.pprint.println.cljs$lang$applyTo = (function (seq29335){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29335));
}));

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,(function (){var pred__29339 = cljs.core._EQ_;
var expr__29340 = c;
if(cljs.core.truth_(pred__29339.call(null,"\b",expr__29340))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__29339.call(null," ",expr__29340))){
return "\\space";
} else {
if(cljs.core.truth_(pred__29339.call(null,"\t",expr__29340))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__29339.call(null,"\n",expr__29340))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__29339.call(null,"\f",expr__29340))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__29339.call(null,"\r",expr__29340))){
return "\\return";
} else {
if(cljs.core.truth_(pred__29339.call(null,"\"",expr__29340))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__29339.call(null,"\\",expr__29340))){
>>>>>>> 8f3c68a (Initial Commit)
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___28838 = arguments.length;
var i__4737__auto___28839 = (0);
while(true){
if((i__4737__auto___28839 < len__4736__auto___28838)){
args__4742__auto__.push((arguments[i__4737__auto___28839]));

var G__28840 = (i__4737__auto___28839 + (1));
i__4737__auto___28839 = G__28840;
=======
var len__4736__auto___29343 = arguments.length;
var i__4737__auto___29344 = (0);
while(true){
if((i__4737__auto___29344 < len__4736__auto___29343)){
args__4742__auto__.push((arguments[i__4737__auto___29344]));

var G__29345 = (i__4737__auto___29344 + (1));
i__4737__auto___29344 = G__29345;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.pr_str,more));
}));

(cljs.pprint.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.pprint.pr.cljs$lang$applyTo = (function (seq28837){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28837));
=======
(cljs.pprint.pr.cljs$lang$applyTo = (function (seq29342){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29342));
>>>>>>> 8f3c68a (Initial Commit)
}));

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___28842 = arguments.length;
var i__4737__auto___28843 = (0);
while(true){
if((i__4737__auto___28843 < len__4736__auto___28842)){
args__4742__auto__.push((arguments[i__4737__auto___28843]));

var G__28844 = (i__4737__auto___28843 + (1));
i__4737__auto___28843 = G__28844;
=======
var len__4736__auto___29347 = arguments.length;
var i__4737__auto___29348 = (0);
while(true){
if((i__4737__auto___29348 < len__4736__auto___29347)){
args__4742__auto__.push((arguments[i__4737__auto___29348]));

var G__29349 = (i__4737__auto___29348 + (1));
i__4737__auto___29348 = G__29349;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.pr,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
}));

(cljs.pprint.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(cljs.pprint.prn.cljs$lang$applyTo = (function (seq28841){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28841));
=======
(cljs.pprint.prn.cljs$lang$applyTo = (function (seq29346){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29346));
>>>>>>> 8f3c68a (Initial Commit)
}));

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && ((!(isNaN(n)))) && ((!((n === Infinity)))) && ((!((parseFloat(n) === parseInt(n,(10)))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first.call(null,lis__$1);
var remainder = cljs.core.next.call(null,lis__$1);
<<<<<<< HEAD
var vec__28848 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__28848,(0),null);
var new_context = cljs.core.nth.call(null,vec__28848,(1),null);
var G__28851 = new_context;
var G__28852 = remainder;
var G__28853 = cljs.core.conj.call(null,acc,result);
context = G__28851;
lis__$1 = G__28852;
acc = G__28853;
=======
var vec__29353 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__29353,(0),null);
var new_context = cljs.core.nth.call(null,vec__29353,(1),null);
var G__29356 = new_context;
var G__29357 = remainder;
var G__29358 = cljs.core.conj.call(null,acc,result);
context = G__29356;
lis__$1 = G__29357;
acc = G__29358;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
<<<<<<< HEAD
var vec__28857 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__28857,(0),null);
var new_context = cljs.core.nth.call(null,vec__28857,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__28860 = new_context;
var G__28861 = cljs.core.conj.call(null,acc,result);
context = G__28860;
acc = G__28861;
=======
var vec__29362 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__29362,(0),null);
var new_context = cljs.core.nth.call(null,vec__29362,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__29365 = new_context;
var G__29366 = cljs.core.conj.call(null,acc,result);
context = G__29365;
acc = G__29366;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
<<<<<<< HEAD
var vec__28865 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__28865,(0),null);
var continue$ = cljs.core.nth.call(null,vec__28865,(1),null);
var new_context = cljs.core.nth.call(null,vec__28865,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__28868 = new_context;
var G__28869 = cljs.core.conj.call(null,acc,result);
context = G__28868;
acc = G__28869;
=======
var vec__29370 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__29370,(0),null);
var continue$ = cljs.core.nth.call(null,vec__29370,(1),null);
var new_context = cljs.core.nth.call(null,vec__29370,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__29373 = new_context;
var G__29374 = cljs.core.conj.call(null,acc,result);
context = G__29373;
acc = G__29374;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

<<<<<<< HEAD
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs$pprint$unzip_map_$_iter__28870(s__28871){
return (new cljs.core.LazySeq(null,(function (){
var s__28871__$1 = s__28871;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28871__$1);
if(temp__5720__auto__){
var s__28871__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28871__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__28871__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__28873 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__28872 = (0);
while(true){
if((i__28872 < size__4528__auto__)){
var vec__28874 = cljs.core._nth.call(null,c__4527__auto__,i__28872);
var k = cljs.core.nth.call(null,vec__28874,(0),null);
var vec__28877 = cljs.core.nth.call(null,vec__28874,(1),null);
var v1 = cljs.core.nth.call(null,vec__28877,(0),null);
var v2 = cljs.core.nth.call(null,vec__28877,(1),null);
cljs.core.chunk_append.call(null,b__28873,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__28902 = (i__28872 + (1));
i__28872 = G__28902;
=======
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs$pprint$unzip_map_$_iter__29375(s__29376){
return (new cljs.core.LazySeq(null,(function (){
var s__29376__$1 = s__29376;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__29376__$1);
if(temp__5720__auto__){
var s__29376__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29376__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__29376__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__29378 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__29377 = (0);
while(true){
if((i__29377 < size__4528__auto__)){
var vec__29379 = cljs.core._nth.call(null,c__4527__auto__,i__29377);
var k = cljs.core.nth.call(null,vec__29379,(0),null);
var vec__29382 = cljs.core.nth.call(null,vec__29379,(1),null);
var v1 = cljs.core.nth.call(null,vec__29382,(0),null);
var v2 = cljs.core.nth.call(null,vec__29382,(1),null);
cljs.core.chunk_append.call(null,b__29378,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__29407 = (i__29377 + (1));
i__29377 = G__29407;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
return true;
}
break;
}
})()){
<<<<<<< HEAD
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28873),cljs$pprint$unzip_map_$_iter__28870.call(null,cljs.core.chunk_rest.call(null,s__28871__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28873),null);
}
} else {
var vec__28880 = cljs.core.first.call(null,s__28871__$2);
var k = cljs.core.nth.call(null,vec__28880,(0),null);
var vec__28883 = cljs.core.nth.call(null,vec__28880,(1),null);
var v1 = cljs.core.nth.call(null,vec__28883,(0),null);
var v2 = cljs.core.nth.call(null,vec__28883,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__28870.call(null,cljs.core.rest.call(null,s__28871__$2)));
=======
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29378),cljs$pprint$unzip_map_$_iter__29375.call(null,cljs.core.chunk_rest.call(null,s__29376__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29378),null);
}
} else {
var vec__29385 = cljs.core.first.call(null,s__29376__$2);
var k = cljs.core.nth.call(null,vec__29385,(0),null);
var vec__29388 = cljs.core.nth.call(null,vec__29385,(1),null);
var v1 = cljs.core.nth.call(null,vec__29388,(0),null);
var v2 = cljs.core.nth.call(null,vec__29388,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__29375.call(null,cljs.core.rest.call(null,s__29376__$2)));
>>>>>>> 8f3c68a (Initial Commit)
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,m);
<<<<<<< HEAD
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs$pprint$unzip_map_$_iter__28886(s__28887){
return (new cljs.core.LazySeq(null,(function (){
var s__28887__$1 = s__28887;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28887__$1);
if(temp__5720__auto__){
var s__28887__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28887__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__28887__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__28889 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__28888 = (0);
while(true){
if((i__28888 < size__4528__auto__)){
var vec__28890 = cljs.core._nth.call(null,c__4527__auto__,i__28888);
var k = cljs.core.nth.call(null,vec__28890,(0),null);
var vec__28893 = cljs.core.nth.call(null,vec__28890,(1),null);
var v1 = cljs.core.nth.call(null,vec__28893,(0),null);
var v2 = cljs.core.nth.call(null,vec__28893,(1),null);
cljs.core.chunk_append.call(null,b__28889,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__28903 = (i__28888 + (1));
i__28888 = G__28903;
=======
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs$pprint$unzip_map_$_iter__29391(s__29392){
return (new cljs.core.LazySeq(null,(function (){
var s__29392__$1 = s__29392;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__29392__$1);
if(temp__5720__auto__){
var s__29392__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29392__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__29392__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__29394 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__29393 = (0);
while(true){
if((i__29393 < size__4528__auto__)){
var vec__29395 = cljs.core._nth.call(null,c__4527__auto__,i__29393);
var k = cljs.core.nth.call(null,vec__29395,(0),null);
var vec__29398 = cljs.core.nth.call(null,vec__29395,(1),null);
var v1 = cljs.core.nth.call(null,vec__29398,(0),null);
var v2 = cljs.core.nth.call(null,vec__29398,(1),null);
cljs.core.chunk_append.call(null,b__29394,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__29408 = (i__29393 + (1));
i__29393 = G__29408;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
return true;
}
break;
}
})()){
<<<<<<< HEAD
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28889),cljs$pprint$unzip_map_$_iter__28886.call(null,cljs.core.chunk_rest.call(null,s__28887__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28889),null);
}
} else {
var vec__28896 = cljs.core.first.call(null,s__28887__$2);
var k = cljs.core.nth.call(null,vec__28896,(0),null);
var vec__28899 = cljs.core.nth.call(null,vec__28896,(1),null);
var v1 = cljs.core.nth.call(null,vec__28899,(0),null);
var v2 = cljs.core.nth.call(null,vec__28899,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__28886.call(null,cljs.core.rest.call(null,s__28887__$2)));
=======
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29394),cljs$pprint$unzip_map_$_iter__29391.call(null,cljs.core.chunk_rest.call(null,s__29392__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29394),null);
}
} else {
var vec__29401 = cljs.core.first.call(null,s__29392__$2);
var k = cljs.core.nth.call(null,vec__29401,(0),null);
var vec__29404 = cljs.core.nth.call(null,vec__29401,(1),null);
var v1 = cljs.core.nth.call(null,vec__29404,(0),null);
var v2 = cljs.core.nth.call(null,vec__29404,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__29391.call(null,cljs.core.rest.call(null,s__29392__$2)));
>>>>>>> 8f3c68a (Initial Commit)
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

<<<<<<< HEAD
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs$pprint$tuple_map_$_iter__28904(s__28905){
return (new cljs.core.LazySeq(null,(function (){
var s__28905__$1 = s__28905;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28905__$1);
if(temp__5720__auto__){
var s__28905__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28905__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__28905__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__28907 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__28906 = (0);
while(true){
if((i__28906 < size__4528__auto__)){
var vec__28908 = cljs.core._nth.call(null,c__4527__auto__,i__28906);
var k = cljs.core.nth.call(null,vec__28908,(0),null);
var v = cljs.core.nth.call(null,vec__28908,(1),null);
cljs.core.chunk_append.call(null,b__28907,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__28914 = (i__28906 + (1));
i__28906 = G__28914;
=======
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs$pprint$tuple_map_$_iter__29409(s__29410){
return (new cljs.core.LazySeq(null,(function (){
var s__29410__$1 = s__29410;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__29410__$1);
if(temp__5720__auto__){
var s__29410__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29410__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__29410__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__29412 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__29411 = (0);
while(true){
if((i__29411 < size__4528__auto__)){
var vec__29413 = cljs.core._nth.call(null,c__4527__auto__,i__29411);
var k = cljs.core.nth.call(null,vec__29413,(0),null);
var v = cljs.core.nth.call(null,vec__29413,(1),null);
cljs.core.chunk_append.call(null,b__29412,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__29419 = (i__29411 + (1));
i__29411 = G__29419;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
return true;
}
break;
}
})()){
<<<<<<< HEAD
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28907),cljs$pprint$tuple_map_$_iter__28904.call(null,cljs.core.chunk_rest.call(null,s__28905__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28907),null);
}
} else {
var vec__28911 = cljs.core.first.call(null,s__28905__$2);
var k = cljs.core.nth.call(null,vec__28911,(0),null);
var v = cljs.core.nth.call(null,vec__28911,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__28904.call(null,cljs.core.rest.call(null,s__28905__$2)));
=======
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29412),cljs$pprint$tuple_map_$_iter__29409.call(null,cljs.core.chunk_rest.call(null,s__29410__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29412),null);
}
} else {
var vec__29416 = cljs.core.first.call(null,s__29410__$2);
var k = cljs.core.nth.call(null,vec__29416,(0),null);
var v = cljs.core.nth.call(null,vec__29416,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__29409.call(null,cljs.core.rest.call(null,s__29410__$2)));
>>>>>>> 8f3c68a (Initial Commit)
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count.call(null,s);
if((((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if((!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))){
return cljs.core.subs.call(null,s,(0),(n + (1)));
} else {
<<<<<<< HEAD
var G__28915 = (n - (1));
n = G__28915;
=======
var G__29420 = (n - (1));
n = G__29420;
>>>>>>> 8f3c68a (Initial Commit)
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count.call(null,s);
if((((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.call(null,n,len)) || ((!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))))){
return cljs.core.subs.call(null,s,n);
} else {
<<<<<<< HEAD
var G__28916 = (n + (1));
n = G__28916;
=======
var G__29421 = (n + (1));
n = G__29421;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_.call(null,val))?cljs.core.set.call(null,val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.call(null,pos,cljs.core.count.call(null,aseq))) || (cljs.core.not.call(null,test.call(null,cljs.core.nth.call(null,aseq,pos)))))){
return pos;
} else {
<<<<<<< HEAD
var G__28917 = (pos + (1));
pos = G__28917;
=======
var G__29422 = (pos + (1));
pos = G__29422;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

<<<<<<< HEAD
var cljs$pprint$IPrettyFlush$_ppflush$dyn_28918 = (function (pp){
=======
var cljs$pprint$IPrettyFlush$_ppflush$dyn_29423 = (function (pp){
>>>>>>> 8f3c68a (Initial Commit)
var x__4428__auto__ = (((pp == null))?null:pp);
var m__4429__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,pp);
} else {
var m__4426__auto__ = (cljs.pprint._ppflush["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,pp);
} else {
throw cljs.core.missing_protocol.call(null,"IPrettyFlush.-ppflush",pp);
}
}
});
cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((((!((pp == null)))) && ((!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
<<<<<<< HEAD
return cljs$pprint$IPrettyFlush$_ppflush$dyn_28918.call(null,pp);
=======
return cljs$pprint$IPrettyFlush$_ppflush$dyn_29423.call(null,pp);
>>>>>>> 8f3c68a (Initial Commit)
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
return sym.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.call(null,c,"\n")){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
<<<<<<< HEAD
var G__28921 = arguments.length;
switch (G__28921) {
=======
var G__29426 = arguments.length;
switch (G__29426) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.call(null,writer,cljs.pprint._STAR_default_page_width_STAR_);
}));

(cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
<<<<<<< HEAD
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint28922 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint29427 !== 'undefined')){
>>>>>>> 8f3c68a (Initial Commit)
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.pprint.t_cljs$pprint28922 = (function (writer,max_columns,fields,meta28923){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta28923 = meta28923;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint28922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28924,meta28923__$1){
var self__ = this;
var _28924__$1 = this;
return (new cljs.pprint.t_cljs$pprint28922(self__.writer,self__.max_columns,self__.fields,meta28923__$1));
}));

(cljs.pprint.t_cljs$pprint28922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28924){
var self__ = this;
var _28924__$1 = this;
return self__.meta28923;
}));

(cljs.pprint.t_cljs$pprint28922.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
=======
cljs.pprint.t_cljs$pprint29427 = (function (writer,max_columns,fields,meta29428){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta29428 = meta29428;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint29427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29429,meta29428__$1){
var self__ = this;
var _29429__$1 = this;
return (new cljs.pprint.t_cljs$pprint29427(self__.writer,self__.max_columns,self__.fields,meta29428__$1));
}));

(cljs.pprint.t_cljs$pprint29427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29429){
var self__ = this;
var _29429__$1 = this;
return self__.meta29428;
}));

(cljs.pprint.t_cljs$pprint29427.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
>>>>>>> 8f3c68a (Initial Commit)
var self__ = this;
var ___$1 = this;
return self__.fields;
}));

<<<<<<< HEAD
(cljs.pprint.t_cljs$pprint28922.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
=======
(cljs.pprint.t_cljs$pprint29427.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
>>>>>>> 8f3c68a (Initial Commit)
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
}));

<<<<<<< HEAD
(cljs.pprint.t_cljs$pprint28922.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28925 = cljs.core._EQ_;
var expr__28926 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__28925.call(null,String,expr__28926))){
=======
(cljs.pprint.t_cljs$pprint29427.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29430 = cljs.core._EQ_;
var expr__29431 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__29430.call(null,String,expr__29431))){
>>>>>>> 8f3c68a (Initial Commit)
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count.call(null,s)));
} else {
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count.call(null,s) - nl) - (1)));

<<<<<<< HEAD
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__28919_SHARP_){
return cljs.core._EQ_.call(null,p1__28919_SHARP_,"\n");
=======
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__29424_SHARP_){
return cljs.core._EQ_.call(null,p1__29424_SHARP_,"\n");
>>>>>>> 8f3c68a (Initial Commit)
}),s))));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
<<<<<<< HEAD
if(cljs.core.truth_(pred__28925.call(null,Number,expr__28926))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28926)].join('')));
=======
if(cljs.core.truth_(pred__29430.call(null,Number,expr__29431))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29431)].join('')));
>>>>>>> 8f3c68a (Initial Commit)
}
}
}));

<<<<<<< HEAD
(cljs.pprint.t_cljs$pprint28922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta28923","meta28923",-519051101,null)], null);
}));

(cljs.pprint.t_cljs$pprint28922.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint28922.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28922");

(cljs.pprint.t_cljs$pprint28922.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.pprint/t_cljs$pprint28922");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28922.
 */
cljs.pprint.__GT_t_cljs$pprint28922 = (function cljs$pprint$__GT_t_cljs$pprint28922(writer__$1,max_columns__$1,fields__$1,meta28923){
return (new cljs.pprint.t_cljs$pprint28922(writer__$1,max_columns__$1,fields__$1,meta28923));
=======
(cljs.pprint.t_cljs$pprint29427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta29428","meta29428",1827456527,null)], null);
}));

(cljs.pprint.t_cljs$pprint29427.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint29427.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29427");

(cljs.pprint.t_cljs$pprint29427.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.pprint/t_cljs$pprint29427");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint29427.
 */
cljs.pprint.__GT_t_cljs$pprint29427 = (function cljs$pprint$__GT_t_cljs$pprint29427(writer__$1,max_columns__$1,fields__$1,meta29428){
return (new cljs.pprint.t_cljs$pprint29427(writer__$1,max_columns__$1,fields__$1,meta29428));
>>>>>>> 8f3c68a (Initial Commit)
});

}

<<<<<<< HEAD
return (new cljs.pprint.t_cljs$pprint28922(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.pprint.t_cljs$pprint29427(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

<<<<<<< HEAD
(cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k28930,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__28934 = k28930;
var G__28934__$1 = (((G__28934 instanceof cljs.core.Keyword))?G__28934.fqn:null);
switch (G__28934__$1) {
=======
(cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k29435,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__29439 = k29435;
var G__29439__$1 = (((G__29439 instanceof cljs.core.Keyword))?G__29439.fqn:null);
switch (G__29439__$1) {
>>>>>>> 8f3c68a (Initial Commit)
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
<<<<<<< HEAD
return cljs.core.get.call(null,self__.__extmap,k28930,else__4383__auto__);
=======
return cljs.core.get.call(null,self__.__extmap,k29435,else__4383__auto__);
>>>>>>> 8f3c68a (Initial Commit)

}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
<<<<<<< HEAD
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__28935){
var vec__28936 = p__28935;
var k__4403__auto__ = cljs.core.nth.call(null,vec__28936,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__28936,(1),null);
=======
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__29440){
var vec__29441 = p__29440;
var k__4403__auto__ = cljs.core.nth.call(null,vec__29441,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__29441,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.logical-block{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
}));

<<<<<<< HEAD
(cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28929){
var self__ = this;
var G__28929__$1 = this;
return (new cljs.core.RecordIter((0),G__28929__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
=======
(cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29434){
var self__ = this;
var G__29434__$1 = this;
return (new cljs.core.RecordIter((0),G__29434__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

<<<<<<< HEAD
(cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28931,other28932){
var self__ = this;
var this28931__$1 = this;
return (((!((other28932 == null)))) && ((this28931__$1.constructor === other28932.constructor)) && (cljs.core._EQ_.call(null,this28931__$1.parent,other28932.parent)) && (cljs.core._EQ_.call(null,this28931__$1.section,other28932.section)) && (cljs.core._EQ_.call(null,this28931__$1.start_col,other28932.start_col)) && (cljs.core._EQ_.call(null,this28931__$1.indent,other28932.indent)) && (cljs.core._EQ_.call(null,this28931__$1.done_nl,other28932.done_nl)) && (cljs.core._EQ_.call(null,this28931__$1.intra_block_nl,other28932.intra_block_nl)) && (cljs.core._EQ_.call(null,this28931__$1.prefix,other28932.prefix)) && (cljs.core._EQ_.call(null,this28931__$1.per_line_prefix,other28932.per_line_prefix)) && (cljs.core._EQ_.call(null,this28931__$1.suffix,other28932.suffix)) && (cljs.core._EQ_.call(null,this28931__$1.logical_block_callback,other28932.logical_block_callback)) && (cljs.core._EQ_.call(null,this28931__$1.__extmap,other28932.__extmap)));
=======
(cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29436,other29437){
var self__ = this;
var this29436__$1 = this;
return (((!((other29437 == null)))) && ((this29436__$1.constructor === other29437.constructor)) && (cljs.core._EQ_.call(null,this29436__$1.parent,other29437.parent)) && (cljs.core._EQ_.call(null,this29436__$1.section,other29437.section)) && (cljs.core._EQ_.call(null,this29436__$1.start_col,other29437.start_col)) && (cljs.core._EQ_.call(null,this29436__$1.indent,other29437.indent)) && (cljs.core._EQ_.call(null,this29436__$1.done_nl,other29437.done_nl)) && (cljs.core._EQ_.call(null,this29436__$1.intra_block_nl,other29437.intra_block_nl)) && (cljs.core._EQ_.call(null,this29436__$1.prefix,other29437.prefix)) && (cljs.core._EQ_.call(null,this29436__$1.per_line_prefix,other29437.per_line_prefix)) && (cljs.core._EQ_.call(null,this29436__$1.suffix,other29437.suffix)) && (cljs.core._EQ_.call(null,this29436__$1.logical_block_callback,other29437.logical_block_callback)) && (cljs.core._EQ_.call(null,this29436__$1.__extmap,other29437.__extmap)));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

<<<<<<< HEAD
(cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__28929){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__28939 = cljs.core.keyword_identical_QMARK_;
var expr__28940 = k__4388__auto__;
if(cljs.core.truth_(pred__28939.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__28940))){
return (new cljs.pprint.logical_block(G__28929,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28939.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__28940))){
return (new cljs.pprint.logical_block(self__.parent,G__28929,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28939.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__28940))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__28929,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28939.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__28940))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__28929,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28939.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__28940))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__28929,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28939.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__28940))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__28929,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28939.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__28940))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__28929,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28939.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__28940))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__28929,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28939.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__28940))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__28929,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28939.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__28940))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__28929,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__28929),null));
=======
(cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__29434){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__29444 = cljs.core.keyword_identical_QMARK_;
var expr__29445 = k__4388__auto__;
if(cljs.core.truth_(pred__29444.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__29445))){
return (new cljs.pprint.logical_block(G__29434,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29444.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__29445))){
return (new cljs.pprint.logical_block(self__.parent,G__29434,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29444.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__29445))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__29434,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29444.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__29445))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__29434,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29444.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__29445))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__29434,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29444.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__29445))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__29434,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29444.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__29445))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__29434,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29444.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__29445))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__29434,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29444.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__29445))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__29434,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29444.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__29445))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__29434,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__29434),null));
>>>>>>> 8f3c68a (Initial Commit)
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
}));

(cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"section","section",-300141526),self__.section,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback,null))], null),self__.__extmap));
}));

<<<<<<< HEAD
(cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__28929){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__28929,self__.__extmap,self__.__hash));
=======
(cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__29434){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__29434,self__.__extmap,self__.__hash));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
}));

(cljs.pprint.logical_block.cljs$lang$type = true);

(cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
}));

(cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"cljs.pprint/logical-block");
}));

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
<<<<<<< HEAD
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__28933){
var extmap__4419__auto__ = (function (){var G__28942 = cljs.core.dissoc.call(null,G__28933,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194));
if(cljs.core.record_QMARK_.call(null,G__28933)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__28942);
} else {
return G__28942;
}
})();
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__28933),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__28933),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__28933),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__28933),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__28933),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__28933),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__28933),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__28933),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__28933),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__28933),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
=======
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__29438){
var extmap__4419__auto__ = (function (){var G__29447 = cljs.core.dissoc.call(null,G__29438,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194));
if(cljs.core.record_QMARK_.call(null,G__29438)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__29447);
} else {
return G__29447;
}
})();
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__29438),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__29438),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__29438),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__29438),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__29438),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__29438),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__29438),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__29438),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__29438),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__29438),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
>>>>>>> 8f3c68a (Initial Commit)
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
<<<<<<< HEAD
var G__28944 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__28944;
=======
var G__29449 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__29449;
>>>>>>> 8f3c68a (Initial Commit)
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq.call(null,l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

<<<<<<< HEAD
(cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k28946,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__28950 = k28946;
var G__28950__$1 = (((G__28950 instanceof cljs.core.Keyword))?G__28950.fqn:null);
switch (G__28950__$1) {
=======
(cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k29451,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__29455 = k29451;
var G__29455__$1 = (((G__29455 instanceof cljs.core.Keyword))?G__29455.fqn:null);
switch (G__29455__$1) {
>>>>>>> 8f3c68a (Initial Commit)
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
<<<<<<< HEAD
return cljs.core.get.call(null,self__.__extmap,k28946,else__4383__auto__);
=======
return cljs.core.get.call(null,self__.__extmap,k29451,else__4383__auto__);
>>>>>>> 8f3c68a (Initial Commit)

}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
<<<<<<< HEAD
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__28951){
var vec__28952 = p__28951;
var k__4403__auto__ = cljs.core.nth.call(null,vec__28952,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__28952,(1),null);
=======
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__29456){
var vec__29457 = p__29456;
var k__4403__auto__ = cljs.core.nth.call(null,vec__29457,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__29457,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

<<<<<<< HEAD
(cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28945){
var self__ = this;
var G__28945__$1 = this;
return (new cljs.core.RecordIter((0),G__28945__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
=======
(cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29450){
var self__ = this;
var G__29450__$1 = this;
return (new cljs.core.RecordIter((0),G__29450__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

<<<<<<< HEAD
(cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28947,other28948){
var self__ = this;
var this28947__$1 = this;
return (((!((other28948 == null)))) && ((this28947__$1.constructor === other28948.constructor)) && (cljs.core._EQ_.call(null,this28947__$1.type_tag,other28948.type_tag)) && (cljs.core._EQ_.call(null,this28947__$1.data,other28948.data)) && (cljs.core._EQ_.call(null,this28947__$1.trailing_white_space,other28948.trailing_white_space)) && (cljs.core._EQ_.call(null,this28947__$1.start_pos,other28948.start_pos)) && (cljs.core._EQ_.call(null,this28947__$1.end_pos,other28948.end_pos)) && (cljs.core._EQ_.call(null,this28947__$1.__extmap,other28948.__extmap)));
=======
(cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29452,other29453){
var self__ = this;
var this29452__$1 = this;
return (((!((other29453 == null)))) && ((this29452__$1.constructor === other29453.constructor)) && (cljs.core._EQ_.call(null,this29452__$1.type_tag,other29453.type_tag)) && (cljs.core._EQ_.call(null,this29452__$1.data,other29453.data)) && (cljs.core._EQ_.call(null,this29452__$1.trailing_white_space,other29453.trailing_white_space)) && (cljs.core._EQ_.call(null,this29452__$1.start_pos,other29453.start_pos)) && (cljs.core._EQ_.call(null,this29452__$1.end_pos,other29453.end_pos)) && (cljs.core._EQ_.call(null,this29452__$1.__extmap,other29453.__extmap)));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

<<<<<<< HEAD
(cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__28945){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__28955 = cljs.core.keyword_identical_QMARK_;
var expr__28956 = k__4388__auto__;
if(cljs.core.truth_(pred__28955.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__28956))){
return (new cljs.pprint.buffer_blob(G__28945,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28955.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__28956))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__28945,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28955.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__28956))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__28945,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28955.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__28956))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__28945,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28955.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__28956))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__28945,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__28945),null));
=======
(cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__29450){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__29460 = cljs.core.keyword_identical_QMARK_;
var expr__29461 = k__4388__auto__;
if(cljs.core.truth_(pred__29460.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__29461))){
return (new cljs.pprint.buffer_blob(G__29450,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29460.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__29461))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__29450,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29460.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__29461))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__29450,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29460.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__29461))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__29450,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29460.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__29461))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__29450,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__29450),null));
>>>>>>> 8f3c68a (Initial Commit)
}
}
}
}
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

<<<<<<< HEAD
(cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__28945){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__28945,self__.__extmap,self__.__hash));
=======
(cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__29450){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__29450,self__.__extmap,self__.__hash));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.buffer_blob.cljs$lang$type = true);

(cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
}));

(cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"cljs.pprint/buffer-blob");
}));

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
<<<<<<< HEAD
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__28949){
var extmap__4419__auto__ = (function (){var G__28958 = cljs.core.dissoc.call(null,G__28949,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__28949)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__28958);
} else {
return G__28958;
}
})();
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__28949),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__28949),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__28949),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__28949),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__28949),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
=======
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__29454){
var extmap__4419__auto__ = (function (){var G__29463 = cljs.core.dissoc.call(null,G__29454,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__29454)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__29463);
} else {
return G__29463;
}
})();
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__29454),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__29454),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__29454),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__29454),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__29454),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
>>>>>>> 8f3c68a (Initial Commit)
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

<<<<<<< HEAD
cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__28757__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__28757__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
=======
cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__29262__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__29262__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
>>>>>>> 8f3c68a (Initial Commit)
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

<<<<<<< HEAD
(cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k28961,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__28965 = k28961;
var G__28965__$1 = (((G__28965 instanceof cljs.core.Keyword))?G__28965.fqn:null);
switch (G__28965__$1) {
=======
(cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k29466,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__29470 = k29466;
var G__29470__$1 = (((G__29470 instanceof cljs.core.Keyword))?G__29470.fqn:null);
switch (G__29470__$1) {
>>>>>>> 8f3c68a (Initial Commit)
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
<<<<<<< HEAD
return cljs.core.get.call(null,self__.__extmap,k28961,else__4383__auto__);
=======
return cljs.core.get.call(null,self__.__extmap,k29466,else__4383__auto__);
>>>>>>> 8f3c68a (Initial Commit)

}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
<<<<<<< HEAD
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__28966){
var vec__28967 = p__28966;
var k__4403__auto__ = cljs.core.nth.call(null,vec__28967,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__28967,(1),null);
=======
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__29471){
var vec__29472 = p__29471;
var k__4403__auto__ = cljs.core.nth.call(null,vec__29472,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__29472,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.nl-t{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

<<<<<<< HEAD
(cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28960){
var self__ = this;
var G__28960__$1 = this;
return (new cljs.core.RecordIter((0),G__28960__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
=======
(cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29465){
var self__ = this;
var G__29465__$1 = this;
return (new cljs.core.RecordIter((0),G__29465__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

<<<<<<< HEAD
(cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28962,other28963){
var self__ = this;
var this28962__$1 = this;
return (((!((other28963 == null)))) && ((this28962__$1.constructor === other28963.constructor)) && (cljs.core._EQ_.call(null,this28962__$1.type_tag,other28963.type_tag)) && (cljs.core._EQ_.call(null,this28962__$1.type,other28963.type)) && (cljs.core._EQ_.call(null,this28962__$1.logical_block,other28963.logical_block)) && (cljs.core._EQ_.call(null,this28962__$1.start_pos,other28963.start_pos)) && (cljs.core._EQ_.call(null,this28962__$1.end_pos,other28963.end_pos)) && (cljs.core._EQ_.call(null,this28962__$1.__extmap,other28963.__extmap)));
=======
(cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29467,other29468){
var self__ = this;
var this29467__$1 = this;
return (((!((other29468 == null)))) && ((this29467__$1.constructor === other29468.constructor)) && (cljs.core._EQ_.call(null,this29467__$1.type_tag,other29468.type_tag)) && (cljs.core._EQ_.call(null,this29467__$1.type,other29468.type)) && (cljs.core._EQ_.call(null,this29467__$1.logical_block,other29468.logical_block)) && (cljs.core._EQ_.call(null,this29467__$1.start_pos,other29468.start_pos)) && (cljs.core._EQ_.call(null,this29467__$1.end_pos,other29468.end_pos)) && (cljs.core._EQ_.call(null,this29467__$1.__extmap,other29468.__extmap)));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

<<<<<<< HEAD
(cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__28960){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__28970 = cljs.core.keyword_identical_QMARK_;
var expr__28971 = k__4388__auto__;
if(cljs.core.truth_(pred__28970.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__28971))){
return (new cljs.pprint.nl_t(G__28960,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28970.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__28971))){
return (new cljs.pprint.nl_t(self__.type_tag,G__28960,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28970.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__28971))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__28960,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28970.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__28971))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__28960,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28970.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__28971))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__28960,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__28960),null));
=======
(cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__29465){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__29475 = cljs.core.keyword_identical_QMARK_;
var expr__29476 = k__4388__auto__;
if(cljs.core.truth_(pred__29475.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__29476))){
return (new cljs.pprint.nl_t(G__29465,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29475.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__29476))){
return (new cljs.pprint.nl_t(self__.type_tag,G__29465,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29475.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__29476))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__29465,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29475.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__29476))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__29465,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29475.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__29476))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__29465,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__29465),null));
>>>>>>> 8f3c68a (Initial Commit)
}
}
}
}
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

<<<<<<< HEAD
(cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__28960){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__28960,self__.__extmap,self__.__hash));
=======
(cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__29465){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__29465,self__.__extmap,self__.__hash));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.nl_t.cljs$lang$type = true);

(cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
}));

(cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"cljs.pprint/nl-t");
}));

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
<<<<<<< HEAD
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__28964){
var extmap__4419__auto__ = (function (){var G__28973 = cljs.core.dissoc.call(null,G__28964,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__28964)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__28973);
} else {
return G__28973;
}
})();
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__28964),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__28964),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__28964),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__28964),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__28964),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
=======
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__29469){
var extmap__4419__auto__ = (function (){var G__29478 = cljs.core.dissoc.call(null,G__29469,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__29469)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__29478);
} else {
return G__29478;
}
})();
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__29469),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__29469),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__29469),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__29469),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__29469),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
>>>>>>> 8f3c68a (Initial Commit)
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

<<<<<<< HEAD
cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__28757__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__28757__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
=======
cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__29262__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__29262__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
>>>>>>> 8f3c68a (Initial Commit)
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

<<<<<<< HEAD
(cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k28976,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__28980 = k28976;
var G__28980__$1 = (((G__28980 instanceof cljs.core.Keyword))?G__28980.fqn:null);
switch (G__28980__$1) {
=======
(cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k29481,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__29485 = k29481;
var G__29485__$1 = (((G__29485 instanceof cljs.core.Keyword))?G__29485.fqn:null);
switch (G__29485__$1) {
>>>>>>> 8f3c68a (Initial Commit)
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
<<<<<<< HEAD
return cljs.core.get.call(null,self__.__extmap,k28976,else__4383__auto__);
=======
return cljs.core.get.call(null,self__.__extmap,k29481,else__4383__auto__);
>>>>>>> 8f3c68a (Initial Commit)

}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
<<<<<<< HEAD
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__28981){
var vec__28982 = p__28981;
var k__4403__auto__ = cljs.core.nth.call(null,vec__28982,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__28982,(1),null);
=======
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__29486){
var vec__29487 = p__29486;
var k__4403__auto__ = cljs.core.nth.call(null,vec__29487,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__29487,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

<<<<<<< HEAD
(cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28975){
var self__ = this;
var G__28975__$1 = this;
return (new cljs.core.RecordIter((0),G__28975__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
=======
(cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29480){
var self__ = this;
var G__29480__$1 = this;
return (new cljs.core.RecordIter((0),G__29480__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

<<<<<<< HEAD
(cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28977,other28978){
var self__ = this;
var this28977__$1 = this;
return (((!((other28978 == null)))) && ((this28977__$1.constructor === other28978.constructor)) && (cljs.core._EQ_.call(null,this28977__$1.type_tag,other28978.type_tag)) && (cljs.core._EQ_.call(null,this28977__$1.logical_block,other28978.logical_block)) && (cljs.core._EQ_.call(null,this28977__$1.start_pos,other28978.start_pos)) && (cljs.core._EQ_.call(null,this28977__$1.end_pos,other28978.end_pos)) && (cljs.core._EQ_.call(null,this28977__$1.__extmap,other28978.__extmap)));
=======
(cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29482,other29483){
var self__ = this;
var this29482__$1 = this;
return (((!((other29483 == null)))) && ((this29482__$1.constructor === other29483.constructor)) && (cljs.core._EQ_.call(null,this29482__$1.type_tag,other29483.type_tag)) && (cljs.core._EQ_.call(null,this29482__$1.logical_block,other29483.logical_block)) && (cljs.core._EQ_.call(null,this29482__$1.start_pos,other29483.start_pos)) && (cljs.core._EQ_.call(null,this29482__$1.end_pos,other29483.end_pos)) && (cljs.core._EQ_.call(null,this29482__$1.__extmap,other29483.__extmap)));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

<<<<<<< HEAD
(cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__28975){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__28985 = cljs.core.keyword_identical_QMARK_;
var expr__28986 = k__4388__auto__;
if(cljs.core.truth_(pred__28985.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__28986))){
return (new cljs.pprint.start_block_t(G__28975,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28985.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__28986))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__28975,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28985.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__28986))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__28975,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28985.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__28986))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__28975,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__28975),null));
=======
(cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__29480){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__29490 = cljs.core.keyword_identical_QMARK_;
var expr__29491 = k__4388__auto__;
if(cljs.core.truth_(pred__29490.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__29491))){
return (new cljs.pprint.start_block_t(G__29480,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29490.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__29491))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__29480,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29490.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__29491))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__29480,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29490.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__29491))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__29480,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__29480),null));
>>>>>>> 8f3c68a (Initial Commit)
}
}
}
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

<<<<<<< HEAD
(cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__28975){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__28975,self__.__extmap,self__.__hash));
=======
(cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__29480){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__29480,self__.__extmap,self__.__hash));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.start_block_t.cljs$lang$type = true);

(cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
}));

(cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"cljs.pprint/start-block-t");
}));

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
<<<<<<< HEAD
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__28979){
var extmap__4419__auto__ = (function (){var G__28988 = cljs.core.dissoc.call(null,G__28979,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__28979)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__28988);
} else {
return G__28988;
}
})();
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__28979),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__28979),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__28979),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__28979),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
=======
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__29484){
var extmap__4419__auto__ = (function (){var G__29493 = cljs.core.dissoc.call(null,G__29484,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__29484)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__29493);
} else {
return G__29493;
}
})();
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__29484),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__29484),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__29484),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__29484),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
>>>>>>> 8f3c68a (Initial Commit)
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

<<<<<<< HEAD
cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__28757__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__28757__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
=======
cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__29262__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__29262__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
>>>>>>> 8f3c68a (Initial Commit)
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

<<<<<<< HEAD
(cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k28991,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__28995 = k28991;
var G__28995__$1 = (((G__28995 instanceof cljs.core.Keyword))?G__28995.fqn:null);
switch (G__28995__$1) {
=======
(cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k29496,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__29500 = k29496;
var G__29500__$1 = (((G__29500 instanceof cljs.core.Keyword))?G__29500.fqn:null);
switch (G__29500__$1) {
>>>>>>> 8f3c68a (Initial Commit)
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
<<<<<<< HEAD
return cljs.core.get.call(null,self__.__extmap,k28991,else__4383__auto__);
=======
return cljs.core.get.call(null,self__.__extmap,k29496,else__4383__auto__);
>>>>>>> 8f3c68a (Initial Commit)

}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
<<<<<<< HEAD
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__28996){
var vec__28997 = p__28996;
var k__4403__auto__ = cljs.core.nth.call(null,vec__28997,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__28997,(1),null);
=======
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__29501){
var vec__29502 = p__29501;
var k__4403__auto__ = cljs.core.nth.call(null,vec__29502,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__29502,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

<<<<<<< HEAD
(cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28990){
var self__ = this;
var G__28990__$1 = this;
return (new cljs.core.RecordIter((0),G__28990__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
=======
(cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29495){
var self__ = this;
var G__29495__$1 = this;
return (new cljs.core.RecordIter((0),G__29495__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

<<<<<<< HEAD
(cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28992,other28993){
var self__ = this;
var this28992__$1 = this;
return (((!((other28993 == null)))) && ((this28992__$1.constructor === other28993.constructor)) && (cljs.core._EQ_.call(null,this28992__$1.type_tag,other28993.type_tag)) && (cljs.core._EQ_.call(null,this28992__$1.logical_block,other28993.logical_block)) && (cljs.core._EQ_.call(null,this28992__$1.start_pos,other28993.start_pos)) && (cljs.core._EQ_.call(null,this28992__$1.end_pos,other28993.end_pos)) && (cljs.core._EQ_.call(null,this28992__$1.__extmap,other28993.__extmap)));
=======
(cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29497,other29498){
var self__ = this;
var this29497__$1 = this;
return (((!((other29498 == null)))) && ((this29497__$1.constructor === other29498.constructor)) && (cljs.core._EQ_.call(null,this29497__$1.type_tag,other29498.type_tag)) && (cljs.core._EQ_.call(null,this29497__$1.logical_block,other29498.logical_block)) && (cljs.core._EQ_.call(null,this29497__$1.start_pos,other29498.start_pos)) && (cljs.core._EQ_.call(null,this29497__$1.end_pos,other29498.end_pos)) && (cljs.core._EQ_.call(null,this29497__$1.__extmap,other29498.__extmap)));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

<<<<<<< HEAD
(cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__28990){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__29000 = cljs.core.keyword_identical_QMARK_;
var expr__29001 = k__4388__auto__;
if(cljs.core.truth_(pred__29000.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__29001))){
return (new cljs.pprint.end_block_t(G__28990,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29000.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__29001))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__28990,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29000.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__29001))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__28990,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29000.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__29001))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__28990,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__28990),null));
=======
(cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__29495){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__29505 = cljs.core.keyword_identical_QMARK_;
var expr__29506 = k__4388__auto__;
if(cljs.core.truth_(pred__29505.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__29506))){
return (new cljs.pprint.end_block_t(G__29495,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29505.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__29506))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__29495,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29505.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__29506))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__29495,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29505.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__29506))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__29495,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__29495),null));
>>>>>>> 8f3c68a (Initial Commit)
}
}
}
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

<<<<<<< HEAD
(cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__28990){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__28990,self__.__extmap,self__.__hash));
=======
(cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__29495){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__29495,self__.__extmap,self__.__hash));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.end_block_t.cljs$lang$type = true);

(cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
}));

(cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"cljs.pprint/end-block-t");
}));

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
<<<<<<< HEAD
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__28994){
var extmap__4419__auto__ = (function (){var G__29003 = cljs.core.dissoc.call(null,G__28994,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__28994)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__29003);
} else {
return G__29003;
}
})();
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__28994),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__28994),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__28994),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__28994),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
=======
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__29499){
var extmap__4419__auto__ = (function (){var G__29508 = cljs.core.dissoc.call(null,G__29499,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__29499)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__29508);
} else {
return G__29508;
}
})();
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__29499),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__29499),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__29499),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__29499),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
>>>>>>> 8f3c68a (Initial Commit)
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

<<<<<<< HEAD
cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__28757__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__28757__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
=======
cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__29262__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__29262__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
>>>>>>> 8f3c68a (Initial Commit)
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

<<<<<<< HEAD
(cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k29006,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__29010 = k29006;
var G__29010__$1 = (((G__29010 instanceof cljs.core.Keyword))?G__29010.fqn:null);
switch (G__29010__$1) {
=======
(cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k29511,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__29515 = k29511;
var G__29515__$1 = (((G__29515 instanceof cljs.core.Keyword))?G__29515.fqn:null);
switch (G__29515__$1) {
>>>>>>> 8f3c68a (Initial Commit)
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
<<<<<<< HEAD
return cljs.core.get.call(null,self__.__extmap,k29006,else__4383__auto__);
=======
return cljs.core.get.call(null,self__.__extmap,k29511,else__4383__auto__);
>>>>>>> 8f3c68a (Initial Commit)

}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
<<<<<<< HEAD
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__29011){
var vec__29012 = p__29011;
var k__4403__auto__ = cljs.core.nth.call(null,vec__29012,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__29012,(1),null);
=======
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__29516){
var vec__29517 = p__29516;
var k__4403__auto__ = cljs.core.nth.call(null,vec__29517,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__29517,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.indent-t{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

<<<<<<< HEAD
(cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29005){
var self__ = this;
var G__29005__$1 = this;
return (new cljs.core.RecordIter((0),G__29005__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
=======
(cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29510){
var self__ = this;
var G__29510__$1 = this;
return (new cljs.core.RecordIter((0),G__29510__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

<<<<<<< HEAD
(cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29007,other29008){
var self__ = this;
var this29007__$1 = this;
return (((!((other29008 == null)))) && ((this29007__$1.constructor === other29008.constructor)) && (cljs.core._EQ_.call(null,this29007__$1.type_tag,other29008.type_tag)) && (cljs.core._EQ_.call(null,this29007__$1.logical_block,other29008.logical_block)) && (cljs.core._EQ_.call(null,this29007__$1.relative_to,other29008.relative_to)) && (cljs.core._EQ_.call(null,this29007__$1.offset,other29008.offset)) && (cljs.core._EQ_.call(null,this29007__$1.start_pos,other29008.start_pos)) && (cljs.core._EQ_.call(null,this29007__$1.end_pos,other29008.end_pos)) && (cljs.core._EQ_.call(null,this29007__$1.__extmap,other29008.__extmap)));
=======
(cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29512,other29513){
var self__ = this;
var this29512__$1 = this;
return (((!((other29513 == null)))) && ((this29512__$1.constructor === other29513.constructor)) && (cljs.core._EQ_.call(null,this29512__$1.type_tag,other29513.type_tag)) && (cljs.core._EQ_.call(null,this29512__$1.logical_block,other29513.logical_block)) && (cljs.core._EQ_.call(null,this29512__$1.relative_to,other29513.relative_to)) && (cljs.core._EQ_.call(null,this29512__$1.offset,other29513.offset)) && (cljs.core._EQ_.call(null,this29512__$1.start_pos,other29513.start_pos)) && (cljs.core._EQ_.call(null,this29512__$1.end_pos,other29513.end_pos)) && (cljs.core._EQ_.call(null,this29512__$1.__extmap,other29513.__extmap)));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

<<<<<<< HEAD
(cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__29005){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__29015 = cljs.core.keyword_identical_QMARK_;
var expr__29016 = k__4388__auto__;
if(cljs.core.truth_(pred__29015.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__29016))){
return (new cljs.pprint.indent_t(G__29005,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29015.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__29016))){
return (new cljs.pprint.indent_t(self__.type_tag,G__29005,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29015.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__29016))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__29005,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29015.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__29016))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__29005,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29015.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__29016))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__29005,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29015.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__29016))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__29005,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__29005),null));
=======
(cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__29510){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__29520 = cljs.core.keyword_identical_QMARK_;
var expr__29521 = k__4388__auto__;
if(cljs.core.truth_(pred__29520.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__29521))){
return (new cljs.pprint.indent_t(G__29510,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29520.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__29521))){
return (new cljs.pprint.indent_t(self__.type_tag,G__29510,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29520.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__29521))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__29510,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29520.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__29521))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__29510,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29520.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__29521))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__29510,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29520.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__29521))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__29510,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__29510),null));
>>>>>>> 8f3c68a (Initial Commit)
}
}
}
}
}
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

<<<<<<< HEAD
(cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__29005){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__29005,self__.__extmap,self__.__hash));
=======
(cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__29510){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__29510,self__.__extmap,self__.__hash));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.indent_t.cljs$lang$type = true);

(cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
}));

(cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"cljs.pprint/indent-t");
}));

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
<<<<<<< HEAD
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__29009){
var extmap__4419__auto__ = (function (){var G__29018 = cljs.core.dissoc.call(null,G__29009,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__29009)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__29018);
} else {
return G__29018;
}
})();
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__29009),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__29009),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__29009),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__29009),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__29009),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__29009),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
=======
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__29514){
var extmap__4419__auto__ = (function (){var G__29523 = cljs.core.dissoc.call(null,G__29514,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926));
if(cljs.core.record_QMARK_.call(null,G__29514)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__29523);
} else {
return G__29523;
}
})();
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__29514),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__29514),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__29514),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__29514),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__29514),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__29514),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
>>>>>>> 8f3c68a (Initial Commit)
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

<<<<<<< HEAD
cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__28757__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__28757__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
=======
cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__29262__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__29262__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
>>>>>>> 8f3c68a (Initial Commit)
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.write_token !== 'undefined')){
} else {
cljs.pprint.write_token = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
<<<<<<< HEAD
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","write-token"),(function (p1__29021_SHARP_,p2__29020_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__29020_SHARP_);
=======
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","write-token"),(function (p1__29526_SHARP_,p2__29525_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__29525_SHARP_);
>>>>>>> 8f3c68a (Initial Commit)
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
<<<<<<< HEAD
var temp__5720__auto___29022 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___29022)){
var cb_29023 = temp__5720__auto___29022;
cb_29023.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
=======
var temp__5720__auto___29527 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___29527)){
var cb_29528 = temp__5720__auto___29527;
cb_29528.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
>>>>>>> 8f3c68a (Initial Commit)
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
<<<<<<< HEAD
var temp__5720__auto___29024 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5720__auto___29024)){
var prefix_29025 = temp__5720__auto___29024;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_29025);
=======
var temp__5720__auto___29529 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5720__auto___29529)){
var prefix_29530 = temp__5720__auto___29529;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_29530);
>>>>>>> 8f3c68a (Initial Commit)
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
<<<<<<< HEAD
var temp__5720__auto___29026 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___29026)){
var cb_29027 = temp__5720__auto___29026;
cb_29027.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
=======
var temp__5720__auto___29531 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___29531)){
var cb_29532 = temp__5720__auto___29531;
cb_29532.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
>>>>>>> 8f3c68a (Initial Commit)
} else {
}

var temp__5720__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5720__auto__)){
var suffix = temp__5720__auto__;
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
<<<<<<< HEAD
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__29028 = cljs.core._EQ_;
var expr__29029 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__29028.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__29029))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__29028.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__29029))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29029)].join('')));
=======
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__29533 = cljs.core._EQ_;
var expr__29534 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__29533.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__29534))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__29533.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__29534))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29534)].join('')));
>>>>>>> 8f3c68a (Initial Commit)
}
}
})()));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889))))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return false;
}
}
})())){
cljs.pprint.emit_nl.call(null,this$,token);
} else {
<<<<<<< HEAD
var temp__5718__auto___29031 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto___29031)){
var tws_29032 = temp__5718__auto___29031;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_29032);
=======
var temp__5718__auto___29536 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto___29536)){
var tws_29537 = temp__5718__auto___29536;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_29537);
>>>>>>> 8f3c68a (Initial Commit)
} else {
}
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
<<<<<<< HEAD
var seq__29033 = cljs.core.seq.call(null,tokens);
var chunk__29034 = null;
var count__29035 = (0);
var i__29036 = (0);
while(true){
if((i__29036 < count__29035)){
var token = cljs.core._nth.call(null,chunk__29034,i__29036);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5718__auto___29037 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto___29037)){
var tws_29038 = temp__5718__auto___29037;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_29038);
=======
var seq__29538 = cljs.core.seq.call(null,tokens);
var chunk__29539 = null;
var count__29540 = (0);
var i__29541 = (0);
while(true){
if((i__29541 < count__29540)){
var token = cljs.core._nth.call(null,chunk__29539,i__29541);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5718__auto___29542 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto___29542)){
var tws_29543 = temp__5718__auto___29542;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_29543);
>>>>>>> 8f3c68a (Initial Commit)
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

<<<<<<< HEAD
var tws_29039 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__4115__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4115__auto__)){
return tws_29039;
=======
var tws_29544 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__4115__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4115__auto__)){
return tws_29544;
>>>>>>> 8f3c68a (Initial Commit)
} else {
return and__4115__auto__;
}
})())){
<<<<<<< HEAD
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_29039);
=======
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_29544);
>>>>>>> 8f3c68a (Initial Commit)

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


<<<<<<< HEAD
var G__29040 = seq__29033;
var G__29041 = chunk__29034;
var G__29042 = count__29035;
var G__29043 = (i__29036 + (1));
seq__29033 = G__29040;
chunk__29034 = G__29041;
count__29035 = G__29042;
i__29036 = G__29043;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29033);
if(temp__5720__auto__){
var seq__29033__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29033__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29033__$1);
var G__29044 = cljs.core.chunk_rest.call(null,seq__29033__$1);
var G__29045 = c__4556__auto__;
var G__29046 = cljs.core.count.call(null,c__4556__auto__);
var G__29047 = (0);
seq__29033 = G__29044;
chunk__29034 = G__29045;
count__29035 = G__29046;
i__29036 = G__29047;
continue;
} else {
var token = cljs.core.first.call(null,seq__29033__$1);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5718__auto___29048 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto___29048)){
var tws_29049 = temp__5718__auto___29048;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_29049);
=======
var G__29545 = seq__29538;
var G__29546 = chunk__29539;
var G__29547 = count__29540;
var G__29548 = (i__29541 + (1));
seq__29538 = G__29545;
chunk__29539 = G__29546;
count__29540 = G__29547;
i__29541 = G__29548;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29538);
if(temp__5720__auto__){
var seq__29538__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29538__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29538__$1);
var G__29549 = cljs.core.chunk_rest.call(null,seq__29538__$1);
var G__29550 = c__4556__auto__;
var G__29551 = cljs.core.count.call(null,c__4556__auto__);
var G__29552 = (0);
seq__29538 = G__29549;
chunk__29539 = G__29550;
count__29540 = G__29551;
i__29541 = G__29552;
continue;
} else {
var token = cljs.core.first.call(null,seq__29538__$1);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5718__auto___29553 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto___29553)){
var tws_29554 = temp__5718__auto___29553;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_29554);
>>>>>>> 8f3c68a (Initial Commit)
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

<<<<<<< HEAD
var tws_29050 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__4115__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4115__auto__)){
return tws_29050;
=======
var tws_29555 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__4115__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4115__auto__)){
return tws_29555;
>>>>>>> 8f3c68a (Initial Commit)
} else {
return and__4115__auto__;
}
})())){
<<<<<<< HEAD
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_29050);
=======
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_29555);
>>>>>>> 8f3c68a (Initial Commit)

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


<<<<<<< HEAD
var G__29051 = cljs.core.next.call(null,seq__29033__$1);
var G__29052 = null;
var G__29053 = (0);
var G__29054 = (0);
seq__29033 = G__29051;
chunk__29034 = G__29052;
count__29035 = G__29053;
i__29036 = G__29054;
=======
var G__29556 = cljs.core.next.call(null,seq__29538__$1);
var G__29557 = null;
var G__29558 = (0);
var G__29559 = (0);
seq__29538 = G__29556;
chunk__29539 = G__29557;
count__29540 = G__29558;
i__29541 = G__29559;
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
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))) + cljs.pprint.buffer_length.call(null,tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__4126__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,section)));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width.call(null,this$);
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
var and__4115__auto__ = miser_width;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = maxcol;
if(cljs.core.truth_(and__4115__auto____$1)){
if((cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width))){
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined')){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","emit-nl?"),(function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__4126__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,subsection)));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}
}
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
<<<<<<< HEAD
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__29055_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__29055_SHARP_)) && (cljs.pprint.ancestor_QMARK_.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__29055_SHARP_),lb)))));
=======
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__29560_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__29560_SHARP_)) && (cljs.pprint.ancestor_QMARK_.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__29560_SHARP_),lb)))));
>>>>>>> 8f3c68a (Initial Commit)
}),cljs.core.next.call(null,buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
<<<<<<< HEAD
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__29056_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__29056_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__29056_SHARP_)) && (((cljs.core._EQ_.call(null,nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb)))))));
=======
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__29561_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__29561_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_.call(null,p1__29561_SHARP_)) && (((cljs.core._EQ_.call(null,nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb)))))));
>>>>>>> 8f3c68a (Initial Commit)
}),cljs.core.next.call(null,buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

<<<<<<< HEAD
var G__29057 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__29057;
=======
var G__29562 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__29562;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

<<<<<<< HEAD
var istr_29058 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_29058);
=======
var istr_29563 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_29563);
>>>>>>> 8f3c68a (Initial Commit)

return cljs.pprint.update_nl_state.call(null,lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
<<<<<<< HEAD
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__29059_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_.call(null,p1__29059_SHARP_)));
=======
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__29564_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_.call(null,p1__29564_SHARP_)));
>>>>>>> 8f3c68a (Initial Commit)
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
<<<<<<< HEAD
var vec__29060 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__29060,(0),null);
var b = cljs.core.nth.call(null,vec__29060,(1),null);
=======
var vec__29565 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__29565,(0),null);
var b = cljs.core.nth.call(null,vec__29565,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens.call(null,this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
<<<<<<< HEAD
var vec__29063 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__29063,(0),null);
var remainder = cljs.core.nth.call(null,vec__29063,(1),null);
=======
var vec__29568 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__29568,(0),null);
var remainder = cljs.core.nth.call(null,vec__29568,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var newl = cljs.core.first.call(null,b);
var do_nl = cljs.pprint.emit_nl_QMARK_.call(null,newl,this$,section,cljs.pprint.get_sub_section.call(null,b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl.call(null,this$,newl);

return cljs.core.next.call(null,b);
})()
:b);
var long_section = (!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,result)));
var result__$1 = ((long_section)?(function (){var rem2 = cljs.pprint.write_token_string.call(null,this$,section);
if(cljs.core._EQ_.call(null,rem2,section)){
cljs.pprint.write_tokens.call(null,this$,section,false);

return remainder;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
while(true){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,buffer));

if((!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,buffer)))){
var new_buffer = cljs.pprint.write_token_string.call(null,this$,buffer);
if((!((buffer === new_buffer)))){
<<<<<<< HEAD
var G__29066 = new_buffer;
buffer = G__29066;
=======
var G__29571 = new_buffer;
buffer = G__29571;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),token));

if((!(cljs.pprint.tokens_fit_QMARK_.call(null,this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))))){
return cljs.pprint.write_line.call(null,this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line.call(null,this$);

var temp__5718__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5718__auto__)){
var buf = temp__5718__auto__;
cljs.pprint.write_tokens.call(null,this$,buf,true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5720__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto__)){
var tws = temp__5720__auto__;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.call(null,s,"\n",(-1));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))));
var l = cljs.core.first.call(null,lines);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))){
<<<<<<< HEAD
var oldpos_29071 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_29072 = (oldpos_29071 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_29072);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_29071,newpos_29072));
=======
var oldpos_29576 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_29577 = (oldpos_29576 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_29577);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_29576,newpos_29577));
>>>>>>> 8f3c68a (Initial Commit)

cljs.pprint.write_buffered_output.call(null,this$);
} else {
cljs.pprint.write_white_space.call(null,this$);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l);
}

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),"\n");

<<<<<<< HEAD
var seq__29067_29073 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__29068_29074 = null;
var count__29069_29075 = (0);
var i__29070_29076 = (0);
while(true){
if((i__29070_29076 < count__29069_29075)){
var l_29077__$1 = cljs.core._nth.call(null,chunk__29068_29074,i__29070_29076);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_29077__$1);
=======
var seq__29572_29578 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__29573_29579 = null;
var count__29574_29580 = (0);
var i__29575_29581 = (0);
while(true){
if((i__29575_29581 < count__29574_29580)){
var l_29582__$1 = cljs.core._nth.call(null,chunk__29573_29579,i__29575_29581);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_29582__$1);
>>>>>>> 8f3c68a (Initial Commit)

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


<<<<<<< HEAD
var G__29078 = seq__29067_29073;
var G__29079 = chunk__29068_29074;
var G__29080 = count__29069_29075;
var G__29081 = (i__29070_29076 + (1));
seq__29067_29073 = G__29078;
chunk__29068_29074 = G__29079;
count__29069_29075 = G__29080;
i__29070_29076 = G__29081;
continue;
} else {
var temp__5720__auto___29082 = cljs.core.seq.call(null,seq__29067_29073);
if(temp__5720__auto___29082){
var seq__29067_29083__$1 = temp__5720__auto___29082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29067_29083__$1)){
var c__4556__auto___29084 = cljs.core.chunk_first.call(null,seq__29067_29083__$1);
var G__29085 = cljs.core.chunk_rest.call(null,seq__29067_29083__$1);
var G__29086 = c__4556__auto___29084;
var G__29087 = cljs.core.count.call(null,c__4556__auto___29084);
var G__29088 = (0);
seq__29067_29073 = G__29085;
chunk__29068_29074 = G__29086;
count__29069_29075 = G__29087;
i__29070_29076 = G__29088;
continue;
} else {
var l_29089__$1 = cljs.core.first.call(null,seq__29067_29083__$1);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_29089__$1);
=======
var G__29583 = seq__29572_29578;
var G__29584 = chunk__29573_29579;
var G__29585 = count__29574_29580;
var G__29586 = (i__29575_29581 + (1));
seq__29572_29578 = G__29583;
chunk__29573_29579 = G__29584;
count__29574_29580 = G__29585;
i__29575_29581 = G__29586;
continue;
} else {
var temp__5720__auto___29587 = cljs.core.seq.call(null,seq__29572_29578);
if(temp__5720__auto___29587){
var seq__29572_29588__$1 = temp__5720__auto___29587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29572_29588__$1)){
var c__4556__auto___29589 = cljs.core.chunk_first.call(null,seq__29572_29588__$1);
var G__29590 = cljs.core.chunk_rest.call(null,seq__29572_29588__$1);
var G__29591 = c__4556__auto___29589;
var G__29592 = cljs.core.count.call(null,c__4556__auto___29589);
var G__29593 = (0);
seq__29572_29578 = G__29590;
chunk__29573_29579 = G__29591;
count__29574_29580 = G__29592;
i__29575_29581 = G__29593;
continue;
} else {
var l_29594__$1 = cljs.core.first.call(null,seq__29572_29588__$1);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_29594__$1);
>>>>>>> 8f3c68a (Initial Commit)

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


<<<<<<< HEAD
var G__29090 = cljs.core.next.call(null,seq__29067_29083__$1);
var G__29091 = null;
var G__29092 = (0);
var G__29093 = (0);
seq__29067_29073 = G__29090;
chunk__29068_29074 = G__29091;
count__29069_29075 = G__29092;
i__29070_29076 = G__29093;
=======
var G__29595 = cljs.core.next.call(null,seq__29572_29588__$1);
var G__29596 = null;
var G__29597 = (0);
var G__29598 = (0);
seq__29572_29578 = G__29595;
chunk__29573_29579 = G__29596;
count__29574_29580 = G__29597;
i__29575_29581 = G__29598;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last.call(null,lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),c);
} else {
if(cljs.core._EQ_.call(null,c,"\n")){
return cljs.pprint.write_initial_lines.call(null,this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,cljs.core.char$.call(null,c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.call(null,writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
<<<<<<< HEAD
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint29094 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint29599 !== 'undefined')){
>>>>>>> 8f3c68a (Initial Commit)
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.pprint.t_cljs$pprint29094 = (function (writer,max_columns,miser_width,lb,fields,meta29095){
=======
cljs.pprint.t_cljs$pprint29599 = (function (writer,max_columns,miser_width,lb,fields,meta29600){
>>>>>>> 8f3c68a (Initial Commit)
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
<<<<<<< HEAD
this.meta29095 = meta29095;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint29094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29096,meta29095__$1){
var self__ = this;
var _29096__$1 = this;
return (new cljs.pprint.t_cljs$pprint29094(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta29095__$1));
}));

(cljs.pprint.t_cljs$pprint29094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29096){
var self__ = this;
var _29096__$1 = this;
return self__.meta29095;
}));

(cljs.pprint.t_cljs$pprint29094.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
=======
this.meta29600 = meta29600;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint29599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29601,meta29600__$1){
var self__ = this;
var _29601__$1 = this;
return (new cljs.pprint.t_cljs$pprint29599(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta29600__$1));
}));

(cljs.pprint.t_cljs$pprint29599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29601){
var self__ = this;
var _29601__$1 = this;
return self__.meta29600;
}));

(cljs.pprint.t_cljs$pprint29599.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
>>>>>>> 8f3c68a (Initial Commit)
var self__ = this;
var ___$1 = this;
return self__.fields;
}));

<<<<<<< HEAD
(cljs.pprint.t_cljs$pprint29094.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29097 = cljs.core._EQ_;
var expr__29098 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__29097.call(null,String,expr__29098))){
=======
(cljs.pprint.t_cljs$pprint29599.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29602 = cljs.core._EQ_;
var expr__29603 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__29602.call(null,String,expr__29603))){
>>>>>>> 8f3c68a (Initial Commit)
var s0 = cljs.pprint.write_initial_lines.call(null,this$__$1,x);
var s = clojure.string.replace_first.call(null,s0,/\s+$/,"");
var white_space = cljs.core.subs.call(null,s0,((s).length));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),s);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
var newpos = (oldpos + cljs.core.count.call(null,s0));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$__$1,cljs.pprint.make_buffer_blob.call(null,s,white_space,oldpos,newpos));
}
} else {
<<<<<<< HEAD
if(cljs.core.truth_(pred__29097.call(null,Number,expr__29098))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29098)].join('')));
=======
if(cljs.core.truth_(pred__29602.call(null,Number,expr__29603))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29603)].join('')));
>>>>>>> 8f3c68a (Initial Commit)
}
}
}));

<<<<<<< HEAD
(cljs.pprint.t_cljs$pprint29094.prototype.cljs$core$IWriter$_flush$arity$1 = (function (this$){
=======
(cljs.pprint.t_cljs$pprint29599.prototype.cljs$core$IWriter$_flush$arity$1 = (function (this$){
>>>>>>> 8f3c68a (Initial Commit)
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush.call(null,this$__$1);

return cljs.core._flush.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))));
}));

<<<<<<< HEAD
(cljs.pprint.t_cljs$pprint29094.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.pprint.t_cljs$pprint29094.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = (function (this$){
=======
(cljs.pprint.t_cljs$pprint29599.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.pprint.t_cljs$pprint29599.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = (function (this$){
>>>>>>> 8f3c68a (Initial Commit)
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens.call(null,this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space.call(null,this$__$1);
}
}));

<<<<<<< HEAD
(cljs.pprint.t_cljs$pprint29094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta29095","meta29095",-1106665729,null)], null);
}));

(cljs.pprint.t_cljs$pprint29094.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint29094.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29094");

(cljs.pprint.t_cljs$pprint29094.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.pprint/t_cljs$pprint29094");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint29094.
 */
cljs.pprint.__GT_t_cljs$pprint29094 = (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint29094(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta29095){
return (new cljs.pprint.t_cljs$pprint29094(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta29095));
=======
(cljs.pprint.t_cljs$pprint29599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta29600","meta29600",1415748470,null)], null);
}));

(cljs.pprint.t_cljs$pprint29599.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint29599.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29599");

(cljs.pprint.t_cljs$pprint29599.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.pprint/t_cljs$pprint29599");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint29599.
 */
cljs.pprint.__GT_t_cljs$pprint29599 = (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint29599(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta29600){
return (new cljs.pprint.t_cljs$pprint29599(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta29600));
>>>>>>> 8f3c68a (Initial Commit)
});

}

<<<<<<< HEAD
return (new cljs.pprint.t_cljs$pprint29094(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.pprint.t_cljs$pprint29599(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 8f3c68a (Initial Commit)
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

<<<<<<< HEAD
var temp__5720__auto___29100 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___29100)){
var cb_29101 = temp__5720__auto___29100;
cb_29101.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
=======
var temp__5720__auto___29605 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___29605)){
var cb_29606 = temp__5720__auto___29605;
cb_29606.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
>>>>>>> 8f3c68a (Initial Commit)
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,lb.start_col,col);

return cljs.core.reset_BANG_.call(null,lb.indent,col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count.call(null,prefix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_start_block_t.call(null,lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

if(cljs.core.truth_(suffix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
}

<<<<<<< HEAD
var temp__5720__auto___29102 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___29102)){
var cb_29103 = temp__5720__auto___29102;
cb_29103.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}
} else {
var oldpos_29104 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_29105 = (oldpos_29104 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_29105);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_29104,newpos_29105));
=======
var temp__5720__auto___29607 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5720__auto___29607)){
var cb_29608 = temp__5720__auto___29607;
cb_29608.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}
} else {
var oldpos_29609 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_29610 = (oldpos_29609 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_29610);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_29609,newpos_29610));
>>>>>>> 8f3c68a (Initial Commit)
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_nl_t.call(null,type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

<<<<<<< HEAD
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__29106 = cljs.core._EQ_;
var expr__29107 = relative_to;
if(cljs.core.truth_(pred__29106.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__29107))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__29106.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__29107))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29107)].join('')));
=======
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__29611 = cljs.core._EQ_;
var expr__29612 = relative_to;
if(cljs.core.truth_(pred__29611.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__29612))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__29611.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__29612))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29612)].join('')));
>>>>>>> 8f3c68a (Initial Commit)
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_indent_t.call(null,lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined')){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__29109_SHARP_){
var temp__5720__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__29109_SHARP_));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__29109_SHARP_)], null);
=======
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__29614_SHARP_){
var temp__5720__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__29614_SHARP_));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__29614_SHARP_)], null);
>>>>>>> 8f3c68a (Initial Commit)
} else {
return null;
}
}),m));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x))){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,x)));
} else {
return false;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer.call(null,base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__4115__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__4115__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.not.call(null,cljs.pprint._STAR_print_pretty_STAR_)){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
(cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1)));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___29143 = arguments.length;
var i__4737__auto___29144 = (0);
while(true){
if((i__4737__auto___29144 < len__4736__auto___29143)){
args__4742__auto__.push((arguments[i__4737__auto___29144]));

var G__29145 = (i__4737__auto___29144 + (1));
i__4737__auto___29144 = G__29145;
=======
var len__4736__auto___29648 = arguments.length;
var i__4737__auto___29649 = (0);
while(true){
if((i__4737__auto___29649 < len__4736__auto___29648)){
args__4742__auto__.push((arguments[i__4737__auto___29649]));

var G__29650 = (i__4737__auto___29649 + (1));
i__4737__auto___29649 = G__29650;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_args));
<<<<<<< HEAD
var _STAR_print_base_STAR__orig_val__29115 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__29116 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__29117 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__29118 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__29119 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__29120 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__29121 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__29122 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__29123 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__29124 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__29125 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__29126 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__29127 = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__29128 = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__29129 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__29130 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__29131 = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__29132 = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__29133 = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__29134 = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__29135 = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__29136 = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__29137 = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__29138 = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__29127);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__29128);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__29129);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__29130);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__29131);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__29132);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__29133);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__29134);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__29135);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__29136);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__29137);

(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__29138);
=======
var _STAR_print_base_STAR__orig_val__29620 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__29621 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__29622 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__29623 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__29624 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__29625 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__29626 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__29627 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__29628 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__29629 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__29630 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__29631 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__29632 = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__29633 = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__29634 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__29635 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__29636 = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__29637 = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__29638 = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__29639 = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__29640 = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__29641 = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__29642 = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__29643 = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__29632);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__29633);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__29634);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__29635);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__29636);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__29637);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__29638);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__29639);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__29640);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__29641);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__29642);

(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__29643);
>>>>>>> 8f3c68a (Initial Commit)

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)){
<<<<<<< HEAD
var base_writer__28740__auto___29146 = base_writer;
var new_writer__28741__auto___29147 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__28740__auto___29146));
var _STAR_out_STAR__orig_val__29139_29148 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29140_29149 = ((new_writer__28741__auto___29147)?cljs.pprint.make_pretty_writer.call(null,base_writer__28740__auto___29146,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__28740__auto___29146);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29140_29149);
=======
var base_writer__29245__auto___29651 = base_writer;
var new_writer__29246__auto___29652 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__29245__auto___29651));
var _STAR_out_STAR__orig_val__29644_29653 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29645_29654 = ((new_writer__29246__auto___29652)?cljs.pprint.make_pretty_writer.call(null,base_writer__29245__auto___29651,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__29245__auto___29651);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29645_29654);
>>>>>>> 8f3c68a (Initial Commit)

try{cljs.pprint.write_out.call(null,object);

cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29139_29148);
}} else {
var _STAR_out_STAR__orig_val__29141_29150 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29142_29151 = base_writer;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29142_29151);

try{cljs.pprint.pr.call(null,object);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29141_29150);
=======
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29644_29653);
}} else {
var _STAR_out_STAR__orig_val__29646_29655 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29647_29656 = base_writer;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29647_29656);

try{cljs.pprint.pr.call(null,object);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29646_29655);
>>>>>>> 8f3c68a (Initial Commit)
}}

if(optval === true){
cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
}

if((optval == null)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
<<<<<<< HEAD
}finally {}}finally {(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__29126);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__29125);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__29124);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__29123);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__29122);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__29121);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__29120);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__29119);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__29118);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__29117);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__29116);

(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__29115);
=======
}finally {}}finally {(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__29631);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__29630);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__29629);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__29628);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__29627);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__29626);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__29625);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__29624);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__29623);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__29622);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__29621);

(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__29620);
>>>>>>> 8f3c68a (Initial Commit)
}}));

(cljs.pprint.write.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
<<<<<<< HEAD
(cljs.pprint.write.cljs$lang$applyTo = (function (seq29113){
var G__29114 = cljs.core.first.call(null,seq29113);
var seq29113__$1 = cljs.core.next.call(null,seq29113);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29114,seq29113__$1);
}));

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__29153 = arguments.length;
switch (G__29153) {
=======
(cljs.pprint.write.cljs$lang$applyTo = (function (seq29618){
var G__29619 = cljs.core.first.call(null,seq29618);
var seq29618__$1 = cljs.core.next.call(null,seq29618);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29619,seq29618__$1);
}));

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__29658 = arguments.length;
switch (G__29658) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
<<<<<<< HEAD
var _STAR_out_STAR__orig_val__29154 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29155 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29155);
=======
var _STAR_out_STAR__orig_val__29659 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29660 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29660);
>>>>>>> 8f3c68a (Initial Commit)

try{cljs.pprint.pprint.call(null,object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
<<<<<<< HEAD
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29154);
}}));

(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__28740__auto__ = writer;
var new_writer__28741__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__28740__auto__));
var _STAR_out_STAR__orig_val__29156 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29157 = ((new_writer__28741__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__28740__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__28740__auto__);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29157);

try{var _STAR_print_pretty_STAR__orig_val__29158_29161 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__29159_29162 = true;
(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__29159_29162);

try{cljs.pprint.write_out.call(null,object);
}finally {(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__29158_29161);
=======
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29659);
}}));

(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__29245__auto__ = writer;
var new_writer__29246__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__29245__auto__));
var _STAR_out_STAR__orig_val__29661 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29662 = ((new_writer__29246__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__29245__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__29245__auto__);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29662);

try{var _STAR_print_pretty_STAR__orig_val__29663_29666 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__29664_29667 = true;
(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__29664_29667);

try{cljs.pprint.write_out.call(null,object);
}finally {(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__29663_29666);
>>>>>>> 8f3c68a (Initial Commit)
}
if((!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.core._STAR_out_STAR_))))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29156);
=======
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29661);
>>>>>>> 8f3c68a (Initial Commit)
}}));

(cljs.pprint.pprint.cljs$lang$maxFixedArity = 2);

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$);

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not.call(null,choices.call(null,arg))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__4115__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__4115__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl.call(null,cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg.call(null,relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent.call(null,cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___29166 = arguments.length;
var i__4737__auto___29167 = (0);
while(true){
if((i__4737__auto___29167 < len__4736__auto___29166)){
args__4742__auto__.push((arguments[i__4737__auto___29167]));

var G__29168 = (i__4737__auto___29167 + (1));
i__4737__auto___29167 = G__29168;
=======
var len__4736__auto___29671 = arguments.length;
var i__4737__auto___29672 = (0);
while(true){
if((i__4737__auto___29672 < len__4736__auto___29671)){
args__4742__auto__.push((arguments[i__4737__auto___29672]));

var G__29673 = (i__4737__auto___29672 + (1));
i__4737__auto___29672 = G__29673;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format.call(null,format_in):format_in);
var navigator = cljs.pprint.init_navigator.call(null,args);
return cljs.pprint.execute_format.call(null,writer,compiled_format,navigator);
}));

(cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
<<<<<<< HEAD
(cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq29163){
var G__29164 = cljs.core.first.call(null,seq29163);
var seq29163__$1 = cljs.core.next.call(null,seq29163);
var G__29165 = cljs.core.first.call(null,seq29163__$1);
var seq29163__$2 = cljs.core.next.call(null,seq29163__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29164,G__29165,seq29163__$2);
=======
(cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq29668){
var G__29669 = cljs.core.first.call(null,seq29668);
var seq29668__$1 = cljs.core.next.call(null,seq29668);
var G__29670 = cljs.core.first.call(null,seq29668__$1);
var seq29668__$2 = cljs.core.next.call(null,seq29668__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29669,G__29670,seq29668__$2);
>>>>>>> 8f3c68a (Initial Commit)
}));

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,offset," "))),"^","\n"].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

<<<<<<< HEAD
(cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k29170,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__29174 = k29170;
var G__29174__$1 = (((G__29174 instanceof cljs.core.Keyword))?G__29174.fqn:null);
switch (G__29174__$1) {
=======
(cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k29675,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__29679 = k29675;
var G__29679__$1 = (((G__29679 instanceof cljs.core.Keyword))?G__29679.fqn:null);
switch (G__29679__$1) {
>>>>>>> 8f3c68a (Initial Commit)
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
<<<<<<< HEAD
return cljs.core.get.call(null,self__.__extmap,k29170,else__4383__auto__);
=======
return cljs.core.get.call(null,self__.__extmap,k29675,else__4383__auto__);
>>>>>>> 8f3c68a (Initial Commit)

}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
<<<<<<< HEAD
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__29175){
var vec__29176 = p__29175;
var k__4403__auto__ = cljs.core.nth.call(null,vec__29176,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__29176,(1),null);
=======
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__29680){
var vec__29681 = p__29680;
var k__4403__auto__ = cljs.core.nth.call(null,vec__29681,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__29681,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
}));

<<<<<<< HEAD
(cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29169){
var self__ = this;
var G__29169__$1 = this;
return (new cljs.core.RecordIter((0),G__29169__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
=======
(cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29674){
var self__ = this;
var G__29674__$1 = this;
return (new cljs.core.RecordIter((0),G__29674__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

<<<<<<< HEAD
(cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29171,other29172){
var self__ = this;
var this29171__$1 = this;
return (((!((other29172 == null)))) && ((this29171__$1.constructor === other29172.constructor)) && (cljs.core._EQ_.call(null,this29171__$1.seq,other29172.seq)) && (cljs.core._EQ_.call(null,this29171__$1.rest,other29172.rest)) && (cljs.core._EQ_.call(null,this29171__$1.pos,other29172.pos)) && (cljs.core._EQ_.call(null,this29171__$1.__extmap,other29172.__extmap)));
=======
(cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29676,other29677){
var self__ = this;
var this29676__$1 = this;
return (((!((other29677 == null)))) && ((this29676__$1.constructor === other29677.constructor)) && (cljs.core._EQ_.call(null,this29676__$1.seq,other29677.seq)) && (cljs.core._EQ_.call(null,this29676__$1.rest,other29677.rest)) && (cljs.core._EQ_.call(null,this29676__$1.pos,other29677.pos)) && (cljs.core._EQ_.call(null,this29676__$1.__extmap,other29677.__extmap)));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

<<<<<<< HEAD
(cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__29169){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__29179 = cljs.core.keyword_identical_QMARK_;
var expr__29180 = k__4388__auto__;
if(cljs.core.truth_(pred__29179.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__29180))){
return (new cljs.pprint.arg_navigator(G__29169,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29179.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__29180))){
return (new cljs.pprint.arg_navigator(self__.seq,G__29169,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29179.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__29180))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__29169,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__29169),null));
=======
(cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__29674){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__29684 = cljs.core.keyword_identical_QMARK_;
var expr__29685 = k__4388__auto__;
if(cljs.core.truth_(pred__29684.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__29685))){
return (new cljs.pprint.arg_navigator(G__29674,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29684.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__29685))){
return (new cljs.pprint.arg_navigator(self__.seq,G__29674,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29684.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__29685))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__29674,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__29674),null));
>>>>>>> 8f3c68a (Initial Commit)
}
}
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null))], null),self__.__extmap));
}));

<<<<<<< HEAD
(cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__29169){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__29169,self__.__extmap,self__.__hash));
=======
(cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__29674){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__29674,self__.__extmap,self__.__hash));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
}));

(cljs.pprint.arg_navigator.cljs$lang$type = true);

(cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
}));

(cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"cljs.pprint/arg-navigator");
}));

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
<<<<<<< HEAD
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__29173){
var extmap__4419__auto__ = (function (){var G__29182 = cljs.core.dissoc.call(null,G__29173,new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220));
if(cljs.core.record_QMARK_.call(null,G__29173)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__29182);
} else {
return G__29182;
}
})();
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__29173),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__29173),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__29173),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
=======
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__29678){
var extmap__4419__auto__ = (function (){var G__29687 = cljs.core.dissoc.call(null,G__29678,new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220));
if(cljs.core.record_QMARK_.call(null,G__29678)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__29687);
} else {
return G__29687;
}
})();
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__29678),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__29678),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__29678),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
>>>>>>> 8f3c68a (Initial Commit)
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq.call(null,s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
<<<<<<< HEAD
var vec__29184 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__29184,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29184,(1),null);
=======
var vec__29689 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__29689,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29689,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format.call(null,raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
return cljs.pprint.relative_reposition.call(null,navigator,(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition.call(null,navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

<<<<<<< HEAD
(cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k29188,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__29192 = k29188;
var G__29192__$1 = (((G__29192 instanceof cljs.core.Keyword))?G__29192.fqn:null);
switch (G__29192__$1) {
=======
(cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k29693,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__29697 = k29693;
var G__29697__$1 = (((G__29697 instanceof cljs.core.Keyword))?G__29697.fqn:null);
switch (G__29697__$1) {
>>>>>>> 8f3c68a (Initial Commit)
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
<<<<<<< HEAD
return cljs.core.get.call(null,self__.__extmap,k29188,else__4383__auto__);
=======
return cljs.core.get.call(null,self__.__extmap,k29693,else__4383__auto__);
>>>>>>> 8f3c68a (Initial Commit)

}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
<<<<<<< HEAD
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__29193){
var vec__29194 = p__29193;
var k__4403__auto__ = cljs.core.nth.call(null,vec__29194,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__29194,(1),null);
=======
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__29698){
var vec__29699 = p__29698;
var k__4403__auto__ = cljs.core.nth.call(null,vec__29699,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__29699,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
}));

<<<<<<< HEAD
(cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29187){
var self__ = this;
var G__29187__$1 = this;
return (new cljs.core.RecordIter((0),G__29187__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
=======
(cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29692){
var self__ = this;
var G__29692__$1 = this;
return (new cljs.core.RecordIter((0),G__29692__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

<<<<<<< HEAD
(cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29189,other29190){
var self__ = this;
var this29189__$1 = this;
return (((!((other29190 == null)))) && ((this29189__$1.constructor === other29190.constructor)) && (cljs.core._EQ_.call(null,this29189__$1.func,other29190.func)) && (cljs.core._EQ_.call(null,this29189__$1.def,other29190.def)) && (cljs.core._EQ_.call(null,this29189__$1.params,other29190.params)) && (cljs.core._EQ_.call(null,this29189__$1.offset,other29190.offset)) && (cljs.core._EQ_.call(null,this29189__$1.__extmap,other29190.__extmap)));
=======
(cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29694,other29695){
var self__ = this;
var this29694__$1 = this;
return (((!((other29695 == null)))) && ((this29694__$1.constructor === other29695.constructor)) && (cljs.core._EQ_.call(null,this29694__$1.func,other29695.func)) && (cljs.core._EQ_.call(null,this29694__$1.def,other29695.def)) && (cljs.core._EQ_.call(null,this29694__$1.params,other29695.params)) && (cljs.core._EQ_.call(null,this29694__$1.offset,other29695.offset)) && (cljs.core._EQ_.call(null,this29694__$1.__extmap,other29695.__extmap)));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

<<<<<<< HEAD
(cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__29187){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__29197 = cljs.core.keyword_identical_QMARK_;
var expr__29198 = k__4388__auto__;
if(cljs.core.truth_(pred__29197.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__29198))){
return (new cljs.pprint.compiled_directive(G__29187,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29197.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__29198))){
return (new cljs.pprint.compiled_directive(self__.func,G__29187,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29197.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__29198))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__29187,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29197.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__29198))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__29187,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__29187),null));
=======
(cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__29692){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__29702 = cljs.core.keyword_identical_QMARK_;
var expr__29703 = k__4388__auto__;
if(cljs.core.truth_(pred__29702.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__29703))){
return (new cljs.pprint.compiled_directive(G__29692,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29702.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__29703))){
return (new cljs.pprint.compiled_directive(self__.func,G__29692,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29702.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__29703))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__29692,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29702.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__29703))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__29692,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__29692),null));
>>>>>>> 8f3c68a (Initial Commit)
}
}
}
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"func","func",-238706040),self__.func,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"def","def",-1043430536),self__.def,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null))], null),self__.__extmap));
}));

<<<<<<< HEAD
(cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__29187){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__29187,self__.__extmap,self__.__hash));
=======
(cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__29692){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__29692,self__.__extmap,self__.__hash));
>>>>>>> 8f3c68a (Initial Commit)
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
}));

(cljs.pprint.compiled_directive.cljs$lang$type = true);

(cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
}));

(cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"cljs.pprint/compiled-directive");
}));

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
<<<<<<< HEAD
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__29191){
var extmap__4419__auto__ = (function (){var G__29200 = cljs.core.dissoc.call(null,G__29191,new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311));
if(cljs.core.record_QMARK_.call(null,G__29191)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__29200);
} else {
return G__29200;
}
})();
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__29191),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__29191),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__29191),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__29191),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__29202,navigator){
var vec__29203 = p__29202;
var param = cljs.core.nth.call(null,vec__29203,(0),null);
var vec__29206 = cljs.core.nth.call(null,vec__29203,(1),null);
var raw_val = cljs.core.nth.call(null,vec__29206,(0),null);
var offset = cljs.core.nth.call(null,vec__29206,(1),null);
var vec__29209 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__29209,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__29209,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__29212 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__29212,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__29212,(1),null);
=======
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__29696){
var extmap__4419__auto__ = (function (){var G__29705 = cljs.core.dissoc.call(null,G__29696,new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311));
if(cljs.core.record_QMARK_.call(null,G__29696)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__29705);
} else {
return G__29705;
}
})();
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__29696),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__29696),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__29696),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__29696),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__29707,navigator){
var vec__29708 = p__29707;
var param = cljs.core.nth.call(null,vec__29708,(0),null);
var vec__29711 = cljs.core.nth.call(null,vec__29708,(1),null);
var raw_val = cljs.core.nth.call(null,vec__29711,(0),null);
var offset = cljs.core.nth.call(null,vec__29711,(1),null);
var vec__29714 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__29714,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__29714,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__29717 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__29717,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__29717,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if(cljs.core._EQ_.call(null,cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__4126__auto__ = cljs.core.get.call(null,cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
<<<<<<< HEAD
var vec__29215 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__29215,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__29215,(1),null);
=======
var vec__29720 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__29720,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__29720,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var base_output = (function (){var or__4126__auto__ = cljs.pprint.format_simple_number.call(null,arg);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return print_func.call(null,arg);
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot.call(null,((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join(''));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join(''));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_.call(null,x)){
return true;
} else {
if(cljs.pprint.float_QMARK_.call(null,x)){
return cljs.core._EQ_.call(null,x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
<<<<<<< HEAD
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__29218_SHARP_){
if((p1__29218_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__29218_SHARP_,base),cljs.core.quot.call(null,p1__29218_SHARP_,base)], null);
=======
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__29723_SHARP_){
if((p1__29723_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__29723_SHARP_,base),cljs.core.quot.call(null,p1__29723_SHARP_,base)], null);
>>>>>>> 8f3c68a (Initial Commit)
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__29219_SHARP_){
if((p1__29219_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__29219_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__29219_SHARP_ - (10))));
=======
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__29724_SHARP_){
if((p1__29724_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__29724_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__29724_SHARP_ - (10))));
>>>>>>> 8f3c68a (Initial Commit)
}
}),cljs.pprint.remainders.call(null,base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str.call(null,base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.take.call(null,unit,x))),cljs.core.seq.call(null,cljs.core.drop.call(null,unit,x))], null);
}),cljs.core.reverse.call(null,lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
<<<<<<< HEAD
var vec__29221 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__29221,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__29221,(1),null);
if(cljs.pprint.integral_QMARK_.call(null,arg)){
var neg_29224 = (arg < (0));
var pos_arg_29225 = ((neg_29224)?(- arg):arg);
var raw_str_29226 = cljs.pprint.opt_base_str.call(null,base,pos_arg_29225);
var group_str_29227 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,(function (p1__29220_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__29220_SHARP_);
}),cljs.pprint.group_by_STAR_.call(null,new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_29226));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_29226);
var signed_str_29228 = ((neg_29224)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_29227)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_29227)].join(''):group_str_29227
));
var padded_str_29229 = (((signed_str_29228.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_29228.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_29228)].join(''):signed_str_29228);
cljs.pprint.print.call(null,padded_str_29229);
=======
var vec__29726 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__29726,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__29726,(1),null);
if(cljs.pprint.integral_QMARK_.call(null,arg)){
var neg_29729 = (arg < (0));
var pos_arg_29730 = ((neg_29729)?(- arg):arg);
var raw_str_29731 = cljs.pprint.opt_base_str.call(null,base,pos_arg_29730);
var group_str_29732 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,(function (p1__29725_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__29725_SHARP_);
}),cljs.pprint.group_by_STAR_.call(null,new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_29731));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_29731);
var signed_str_29733 = ((neg_29729)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_29732)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_29732)].join(''):group_str_29732
));
var padded_str_29734 = (((signed_str_29733.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_29733.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_29733)].join(''):signed_str_29733);
cljs.pprint.print.call(null,padded_str_29734);
>>>>>>> 8f3c68a (Initial Commit)
} else {
cljs.pprint.format_ascii.call(null,cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count.call(null,parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first.call(null,parts);
var remainder = cljs.core.next.call(null,parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",acc))),(((((!(cljs.core.empty_QMARK_.call(null,this$)))) && ((!(cljs.core.empty_QMARK_.call(null,acc))))))?", ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),(((((!(cljs.core.empty_QMARK_.call(null,this$)))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null)].join('');
} else {
<<<<<<< HEAD
var G__29230 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__29231 = (pos - (1));
var G__29232 = cljs.core.first.call(null,remainder);
var G__29233 = cljs.core.next.call(null,remainder);
acc = G__29230;
pos = G__29231;
this$ = G__29232;
remainder = G__29233;
=======
var G__29735 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__29736 = (pos - (1));
var G__29737 = cljs.core.first.call(null,remainder);
var G__29738 = cljs.core.next.call(null,remainder);
acc = G__29735;
pos = G__29736;
this$ = G__29737;
remainder = G__29738;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
<<<<<<< HEAD
var vec__29234 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__29234,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29234,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_29237 = (((arg < (0)))?(- arg):arg);
var parts_29238 = cljs.pprint.remainders.call(null,(1000),abs_arg_29237);
if((cljs.core.count.call(null,parts_29238) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_29239 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_29238);
var full_str_29240 = cljs.pprint.add_english_scales.call(null,parts_strs_29239,(0));
cljs.pprint.print.call(null,[(((arg < (0)))?"minus ":null),full_str_29240].join(''));
=======
var vec__29739 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__29739,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29739,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_29742 = (((arg < (0)))?(- arg):arg);
var parts_29743 = cljs.pprint.remainders.call(null,(1000),abs_arg_29742);
if((cljs.core.count.call(null,parts_29743) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_29744 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_29743);
var full_str_29745 = cljs.pprint.add_english_scales.call(null,parts_strs_29744,(0));
cljs.pprint.print.call(null,[(((arg < (0)))?"minus ":null),full_str_29745].join(''));
>>>>>>> 8f3c68a (Initial Commit)
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
if((((ten_digit > (0))) && ((!((unit_digit > (0))))))){
return cljs.core.nth.call(null,cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
<<<<<<< HEAD
var vec__29241 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__29241,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29241,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_29244 = (((arg < (0)))?(- arg):arg);
var parts_29245 = cljs.pprint.remainders.call(null,(1000),abs_arg_29244);
if((cljs.core.count.call(null,parts_29245) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_29246 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_29245));
var head_str_29247 = cljs.pprint.add_english_scales.call(null,parts_strs_29246,(1));
var tail_str_29248 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_29245));
cljs.pprint.print.call(null,[(((arg < (0)))?"minus ":null),(((((!(cljs.core.empty_QMARK_.call(null,head_str_29247)))) && ((!(cljs.core.empty_QMARK_.call(null,tail_str_29248))))))?[head_str_29247,", ",tail_str_29248].join(''):(((!(cljs.core.empty_QMARK_.call(null,head_str_29247))))?[head_str_29247,"th"].join(''):tail_str_29248
=======
var vec__29746 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__29746,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29746,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_29749 = (((arg < (0)))?(- arg):arg);
var parts_29750 = cljs.pprint.remainders.call(null,(1000),abs_arg_29749);
if((cljs.core.count.call(null,parts_29750) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_29751 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_29750));
var head_str_29752 = cljs.pprint.add_english_scales.call(null,parts_strs_29751,(1));
var tail_str_29753 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_29750));
cljs.pprint.print.call(null,[(((arg < (0)))?"minus ":null),(((((!(cljs.core.empty_QMARK_.call(null,head_str_29752)))) && ((!(cljs.core.empty_QMARK_.call(null,tail_str_29753))))))?[head_str_29752,", ",tail_str_29753].join(''):(((!(cljs.core.empty_QMARK_.call(null,head_str_29752))))?[head_str_29752,"th"].join(''):tail_str_29753
>>>>>>> 8f3c68a (Initial Commit)
))].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

<<<<<<< HEAD
var low_two_digits_29249 = cljs.core.rem.call(null,arg,(100));
var not_teens_29250 = ((((11) < low_two_digits_29249)) || (((19) > low_two_digits_29249)));
var low_digit_29251 = cljs.core.rem.call(null,low_two_digits_29249,(10));
cljs.pprint.print.call(null,(((((low_digit_29251 === (1))) && (not_teens_29250)))?"st":(((((low_digit_29251 === (2))) && (not_teens_29250)))?"nd":(((((low_digit_29251 === (3))) && (not_teens_29250)))?"rd":"th"
=======
var low_two_digits_29754 = cljs.core.rem.call(null,arg,(100));
var not_teens_29755 = ((((11) < low_two_digits_29754)) || (((19) > low_two_digits_29754)));
var low_digit_29756 = cljs.core.rem.call(null,low_two_digits_29754,(10));
cljs.pprint.print.call(null,(((((low_digit_29756 === (1))) && (not_teens_29755)))?"st":(((((low_digit_29756 === (2))) && (not_teens_29755)))?"nd":(((((low_digit_29756 === (3))) && (not_teens_29755)))?"rd":"th"
>>>>>>> 8f3c68a (Initial Commit)
))));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
<<<<<<< HEAD
var vec__29252 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__29252,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29252,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_29255 = cljs.pprint.remainders.call(null,(10),arg);
var acc_29256 = cljs.core.PersistentVector.EMPTY;
var pos_29257 = (cljs.core.count.call(null,digits_29255) - (1));
var digits_29258__$1 = digits_29255;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_29258__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_29256));
} else {
var digit_29259 = cljs.core.first.call(null,digits_29258__$1);
var G__29260 = ((cljs.core._EQ_.call(null,(0),digit_29259))?acc_29256:cljs.core.conj.call(null,acc_29256,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_29257),(digit_29259 - (1)))));
var G__29261 = (pos_29257 - (1));
var G__29262 = cljs.core.next.call(null,digits_29258__$1);
acc_29256 = G__29260;
pos_29257 = G__29261;
digits_29258__$1 = G__29262;
=======
var vec__29757 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__29757,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29757,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_29760 = cljs.pprint.remainders.call(null,(10),arg);
var acc_29761 = cljs.core.PersistentVector.EMPTY;
var pos_29762 = (cljs.core.count.call(null,digits_29760) - (1));
var digits_29763__$1 = digits_29760;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_29763__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_29761));
} else {
var digit_29764 = cljs.core.first.call(null,digits_29763__$1);
var G__29765 = ((cljs.core._EQ_.call(null,(0),digit_29764))?acc_29761:cljs.core.conj.call(null,acc_29761,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_29762),(digit_29764 - (1)))));
var G__29766 = (pos_29762 - (1));
var G__29767 = cljs.core.next.call(null,digits_29763__$1);
acc_29761 = G__29765;
pos_29762 = G__29766;
digits_29763__$1 = G__29767;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
break;
}
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
<<<<<<< HEAD
var vec__29263 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__29263,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29263,(1),null);
=======
var vec__29768 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__29768,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29768,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var as_int = cljs.pprint.char_code.call(null,c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.call(null,cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.call(null,"Meta-");
} else {
}

cljs.pprint.print.call(null,(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(base_char + (64))))].join(''):((cljs.core._EQ_.call(null,base_char,(127)))?"Control-?":cljs.core.char$.call(null,base_char)
))));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
<<<<<<< HEAD
var vec__29266 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__29266,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29266,(1),null);
var pred__29269_29272 = cljs.core._EQ_;
var expr__29270_29273 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__29269_29272.call(null,"o",expr__29270_29273))){
cljs.pprint.cl_format.call(null,true,"\\o~3, '0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__29269_29272.call(null,"u",expr__29270_29273))){
cljs.pprint.cl_format.call(null,true,"\\u~4, '0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__29269_29272.call(null,null,expr__29270_29273))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29270_29273)].join('')));
=======
var vec__29771 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__29771,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29771,(1),null);
var pred__29774_29777 = cljs.core._EQ_;
var expr__29775_29778 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__29774_29777.call(null,"o",expr__29775_29778))){
cljs.pprint.cl_format.call(null,true,"\\o~3, '0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__29774_29777.call(null,"u",expr__29775_29778))){
cljs.pprint.cl_format.call(null,true,"\\u~4, '0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__29774_29777.call(null,null,expr__29775_29778))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29775_29778)].join('')));
>>>>>>> 8f3c68a (Initial Commit)
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
<<<<<<< HEAD
var vec__29274 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__29274,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29274,(1),null);
=======
var vec__29779 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__29779,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29779,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
cljs.pprint.print.call(null,char$);

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first.call(null,context);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second.call(null,cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.pprint.abort_QMARK_.call(null,context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
<<<<<<< HEAD
var vec__29277 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__29277,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__29277,(1),null);
var vec__29280 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__29280,(0),null);
var offsets = cljs.core.nth.call(null,vec__29280,(1),null);
=======
var vec__29782 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__29782,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__29782,(1),null);
var vec__29785 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__29785,(0),null);
var offsets = cljs.core.nth.call(null,vec__29785,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(f));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,cljs.core.str.cljs$core$IFn$_invoke$arity$1((((s).length) - (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.call(null,s,(0),dotloc),cljs.core.subs.call(null,s,(dotloc + (1)))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(0),exploc),cljs.core.subs.call(null,s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.call(null,s,(0),(1)),cljs.core.subs.call(null,s,(2),exploc)].join(''),cljs.core.subs.call(null,s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
<<<<<<< HEAD
var vec__29283 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__29283,(0),null);
var e = cljs.core.nth.call(null,vec__29283,(1),null);
=======
var vec__29788 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__29788,(0),null);
var e = cljs.core.nth.call(null,vec__29788,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var m1 = cljs.pprint.rtrim.call(null,m,"0");
var m2 = cljs.pprint.ltrim.call(null,m1,"0");
var delta = (cljs.core.count.call(null,m1) - cljs.core.count.call(null,m2));
var e__$1 = (((((cljs.core.count.call(null,e) > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,e,(0)),"+"))))?cljs.core.subs.call(null,e,(1)):e);
if(cljs.core.empty_QMARK_.call(null,m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count.call(null,s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.call(null,cljs.core.str,"1",cljs.core.repeat.call(null,(len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.call(null,"9",s.charAt(i))){
<<<<<<< HEAD
var G__29286 = (i - (1));
i = G__29286;
=======
var G__29791 = (i - (1));
i = G__29791;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.subs.call(null,s,(0),i),cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,s.charAt(i)) + (1))),cljs.core.repeat.call(null,(len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__4126__auto__ = d;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count.call(null,m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4214__auto__ = (2);
var y__4215__auto__ = w;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4214__auto__ = (e + (1));
var y__4215__auto__ = (w__$1 - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})():(w__$1 + e)
));
<<<<<<< HEAD
var vec__29287 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__29287,(0),null);
var e1 = cljs.core.nth.call(null,vec__29287,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__29287,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__29287,(3),null);
=======
var vec__29792 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__29792,(0),null);
var e1 = cljs.core.nth.call(null,vec__29792,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__29792,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__29792,(3),null);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.call(null,m1,round_pos__$1);
var result = cljs.core.subs.call(null,m1,(0),round_pos__$1);
if((cljs.pprint.char_code.call(null,round_char) >= cljs.pprint.char_code.call(null,"5"))){
var round_up_result = cljs.pprint.inc_s.call(null,result);
var expanded = (cljs.core.count.call(null,round_up_result) > ((result).length));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.call(null,round_up_result,(0),(cljs.core.count.call(null,round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
<<<<<<< HEAD
var vec__29290 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__29290,(0),null);
var e1 = cljs.core.nth.call(null,vec__29290,(1),null);
=======
var vec__29795 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__29795,(0),null);
var e1 = cljs.core.nth.call(null,vec__29795,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var len = cljs.core.count.call(null,m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.subs.call(null,m,(0),loc),".",cljs.core.subs.call(null,m,loc)].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal.call(null,cljs.pprint.expand_fixed.call(null,m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.subs.call(null,m,(0),k),".",cljs.core.subs.call(null,m,k)].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
<<<<<<< HEAD
var vec__29293 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__29293,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29293,(1),null);
var vec__29296 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__29296,(0),null);
var abs = cljs.core.nth.call(null,vec__29296,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__29299 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__29299,(0),null);
var exp = cljs.core.nth.call(null,vec__29299,(1),null);
=======
var vec__29798 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__29798,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29798,(1),null);
var vec__29801 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__29801,(0),null);
var abs = cljs.core.nth.call(null,vec__29801,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__29804 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__29804,(0),null);
var exp = cljs.core.nth.call(null,vec__29804,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not.call(null,d)) && (((cljs.core.count.call(null,mantissa) - (1)) <= scaled_exp)));
<<<<<<< HEAD
var vec__29302 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__29302,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__29302,(1),null);
var expanded = cljs.core.nth.call(null,vec__29302,(2),null);
=======
var vec__29807 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__29807,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__29807,(1),null);
var expanded = cljs.core.nth.call(null,vec__29807,(2),null);
>>>>>>> 8f3c68a (Initial Commit)
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = w;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = d;
if(cljs.core.truth_(and__4115__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.call(null,fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.call(null,fixed_repr.charAt((1)),".")) && ((((fixed_repr).length) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())?cljs.core.subs.call(null,fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.call(null,cljs.core.first.call(null,fixed_repr__$1),".");
if(cljs.core.truth_(w)){
<<<<<<< HEAD
var len_29305 = ((fixed_repr__$1).length);
var signed_len_29306 = (cljs.core.truth_(add_sign)?(len_29305 + (1)):len_29305);
var prepend_zero_29307__$1 = ((prepend_zero) && ((!((signed_len_29306 >= w)))));
var append_zero_29308__$1 = ((append_zero) && ((!((signed_len_29306 >= w)))));
var full_len_29309 = ((((prepend_zero_29307__$1) || (append_zero_29308__$1)))?(signed_len_29306 + (1)):signed_len_29306);
if(cljs.core.truth_((((full_len_29309 > w))?new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params):false))){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_29309),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero_29307__$1)?"0":null),fixed_repr__$1,((append_zero_29308__$1)?"0":null)].join(''));
=======
var len_29810 = ((fixed_repr__$1).length);
var signed_len_29811 = (cljs.core.truth_(add_sign)?(len_29810 + (1)):len_29810);
var prepend_zero_29812__$1 = ((prepend_zero) && ((!((signed_len_29811 >= w)))));
var append_zero_29813__$1 = ((append_zero) && ((!((signed_len_29811 >= w)))));
var full_len_29814 = ((((prepend_zero_29812__$1) || (append_zero_29813__$1)))?(signed_len_29811 + (1)):signed_len_29811);
if(cljs.core.truth_((((full_len_29814 > w))?new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params):false))){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_29814),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero_29812__$1)?"0":null),fixed_repr__$1,((append_zero_29813__$1)?"0":null)].join(''));
>>>>>>> 8f3c68a (Initial Commit)
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero)?"0":null),fixed_repr__$1,((append_zero)?"0":null)].join(''));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
<<<<<<< HEAD
var vec__29310 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__29310,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29310,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__29316_29326 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__29317_29327 = G__29316_29326;
var mantissa_29328 = cljs.core.nth.call(null,vec__29317_29327,(0),null);
var exp_29329 = cljs.core.nth.call(null,vec__29317_29327,(1),null);
var G__29316_29330__$1 = G__29316_29326;
while(true){
var vec__29320_29331 = G__29316_29330__$1;
var mantissa_29332__$1 = cljs.core.nth.call(null,vec__29320_29331,(0),null);
var exp_29333__$1 = cljs.core.nth.call(null,vec__29320_29331,(1),null);
var w_29334 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_29335 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_29336 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_29337 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_29338 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
=======
var vec__29815 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__29815,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29815,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__29821_29831 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__29822_29832 = G__29821_29831;
var mantissa_29833 = cljs.core.nth.call(null,vec__29822_29832,(0),null);
var exp_29834 = cljs.core.nth.call(null,vec__29822_29832,(1),null);
var G__29821_29835__$1 = G__29821_29831;
while(true){
var vec__29825_29836 = G__29821_29835__$1;
var mantissa_29837__$1 = cljs.core.nth.call(null,vec__29825_29836,(0),null);
var exp_29838__$1 = cljs.core.nth.call(null,vec__29825_29836,(1),null);
var w_29839 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_29840 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_29841 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_29842 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_29843 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "E";
}
})();
<<<<<<< HEAD
var add_sign_29339 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
=======
var add_sign_29844 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (arg__$1 < (0));
}
})();
<<<<<<< HEAD
var prepend_zero_29340 = (k_29337 <= (0));
var scaled_exp_29341 = (exp_29333__$1 - (k_29337 - (1)));
var scaled_exp_str_29342 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_29341));
var scaled_exp_str_29343__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_29338),(((scaled_exp_29341 < (0)))?"-":"+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_29336)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_29336 - ((scaled_exp_str_29342).length)),"0")):null)),scaled_exp_str_29342].join('');
var exp_width_29344 = ((scaled_exp_str_29343__$1).length);
var base_mantissa_width_29345 = cljs.core.count.call(null,mantissa_29332__$1);
var scaled_mantissa_29346 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_29337),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_29332__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_29335)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_29335 - (base_mantissa_width_29345 - (1))) - (((k_29337 < (0)))?(- k_29337):(0))),"0")):null))].join('');
var w_mantissa_29347 = (cljs.core.truth_(w_29334)?(w_29334 - exp_width_29344):null);
var vec__29323_29348 = cljs.pprint.round_str.call(null,scaled_mantissa_29346,(0),((cljs.core._EQ_.call(null,k_29337,(0)))?(d_29335 - (1)):(((k_29337 > (0)))?d_29335:(((k_29337 < (0)))?(d_29335 - (1)):null))),(cljs.core.truth_(w_mantissa_29347)?(w_mantissa_29347 - (cljs.core.truth_(add_sign_29339)?(1):(0))):null));
var rounded_mantissa_29349 = cljs.core.nth.call(null,vec__29323_29348,(0),null);
var __29350 = cljs.core.nth.call(null,vec__29323_29348,(1),null);
var incr_exp_29351 = cljs.core.nth.call(null,vec__29323_29348,(2),null);
var full_mantissa_29352 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_29349,k_29337);
var append_zero_29353 = ((cljs.core._EQ_.call(null,k_29337,cljs.core.count.call(null,rounded_mantissa_29349))) && ((d_29335 == null)));
if(cljs.core.not.call(null,incr_exp_29351)){
if(cljs.core.truth_(w_29334)){
var len_29354 = (((full_mantissa_29352).length) + exp_width_29344);
var signed_len_29355 = (cljs.core.truth_(add_sign_29339)?(len_29354 + (1)):len_29354);
var prepend_zero_29356__$1 = ((prepend_zero_29340) && ((!(cljs.core._EQ_.call(null,signed_len_29355,w_29334)))));
var full_len_29357 = ((prepend_zero_29356__$1)?(signed_len_29355 + (1)):signed_len_29355);
var append_zero_29358__$1 = ((append_zero_29353) && ((full_len_29357 < w_29334)));
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = (full_len_29357 > w_29334);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = e_29336;
if(cljs.core.truth_(and__4115__auto__)){
return ((exp_width_29344 - (2)) > e_29336);
=======
var prepend_zero_29845 = (k_29842 <= (0));
var scaled_exp_29846 = (exp_29838__$1 - (k_29842 - (1)));
var scaled_exp_str_29847 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_29846));
var scaled_exp_str_29848__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_29843),(((scaled_exp_29846 < (0)))?"-":"+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_29841)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_29841 - ((scaled_exp_str_29847).length)),"0")):null)),scaled_exp_str_29847].join('');
var exp_width_29849 = ((scaled_exp_str_29848__$1).length);
var base_mantissa_width_29850 = cljs.core.count.call(null,mantissa_29837__$1);
var scaled_mantissa_29851 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_29842),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_29837__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_29840)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_29840 - (base_mantissa_width_29850 - (1))) - (((k_29842 < (0)))?(- k_29842):(0))),"0")):null))].join('');
var w_mantissa_29852 = (cljs.core.truth_(w_29839)?(w_29839 - exp_width_29849):null);
var vec__29828_29853 = cljs.pprint.round_str.call(null,scaled_mantissa_29851,(0),((cljs.core._EQ_.call(null,k_29842,(0)))?(d_29840 - (1)):(((k_29842 > (0)))?d_29840:(((k_29842 < (0)))?(d_29840 - (1)):null))),(cljs.core.truth_(w_mantissa_29852)?(w_mantissa_29852 - (cljs.core.truth_(add_sign_29844)?(1):(0))):null));
var rounded_mantissa_29854 = cljs.core.nth.call(null,vec__29828_29853,(0),null);
var __29855 = cljs.core.nth.call(null,vec__29828_29853,(1),null);
var incr_exp_29856 = cljs.core.nth.call(null,vec__29828_29853,(2),null);
var full_mantissa_29857 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_29854,k_29842);
var append_zero_29858 = ((cljs.core._EQ_.call(null,k_29842,cljs.core.count.call(null,rounded_mantissa_29854))) && ((d_29840 == null)));
if(cljs.core.not.call(null,incr_exp_29856)){
if(cljs.core.truth_(w_29839)){
var len_29859 = (((full_mantissa_29857).length) + exp_width_29849);
var signed_len_29860 = (cljs.core.truth_(add_sign_29844)?(len_29859 + (1)):len_29859);
var prepend_zero_29861__$1 = ((prepend_zero_29845) && ((!(cljs.core._EQ_.call(null,signed_len_29860,w_29839)))));
var full_len_29862 = ((prepend_zero_29861__$1)?(signed_len_29860 + (1)):signed_len_29860);
var append_zero_29863__$1 = ((append_zero_29858) && ((full_len_29862 < w_29839)));
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = (full_len_29862 > w_29839);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = e_29841;
if(cljs.core.truth_(and__4115__auto__)){
return ((exp_width_29849 - (2)) > e_29841);
>>>>>>> 8f3c68a (Initial Commit)
} else {
return and__4115__auto__;
}
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())){
<<<<<<< HEAD
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_29334,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_29334 - full_len_29357) - ((append_zero_29358__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(add_sign_29339)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_29356__$1)?"0":null),full_mantissa_29352,((append_zero_29358__$1)?"0":null),scaled_exp_str_29343__$1].join(''));
}
} else {
cljs.pprint.print.call(null,[(cljs.core.truth_(add_sign_29339)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_29340)?"0":null),full_mantissa_29352,((append_zero_29353)?"0":null),scaled_exp_str_29343__$1].join(''));
}
} else {
var G__29359 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_29349,(exp_29333__$1 + (1))], null);
G__29316_29330__$1 = G__29359;
=======
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_29839,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_29839 - full_len_29862) - ((append_zero_29863__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(add_sign_29844)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_29861__$1)?"0":null),full_mantissa_29857,((append_zero_29863__$1)?"0":null),scaled_exp_str_29848__$1].join(''));
}
} else {
cljs.pprint.print.call(null,[(cljs.core.truth_(add_sign_29844)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_29845)?"0":null),full_mantissa_29857,((append_zero_29858)?"0":null),scaled_exp_str_29848__$1].join(''));
}
} else {
var G__29864 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_29854,(exp_29838__$1 + (1))], null);
G__29821_29835__$1 = G__29864;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
<<<<<<< HEAD
var vec__29360 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__29360,(0),null);
var _ = cljs.core.nth.call(null,vec__29360,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__29363 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__29363,(0),null);
var exp = cljs.core.nth.call(null,vec__29363,(1),null);
=======
var vec__29865 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__29865,(0),null);
var _ = cljs.core.nth.call(null,vec__29865,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__29868 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__29868,(0),null);
var exp = cljs.core.nth.call(null,vec__29868,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.call(null,arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4214__auto__ = cljs.core.count.call(null,mantissa);
var y__4215__auto__ = (function (){var x__4217__auto__ = n;
var y__4218__auto__ = (7);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,ee," ")));

return navigator__$1;
} else {
return cljs.pprint.exponential_float.call(null,params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
<<<<<<< HEAD
var vec__29366 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__29366,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29366,(1),null);
var vec__29369 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__29369,(0),null);
var exp = cljs.core.nth.call(null,vec__29369,(1),null);
=======
var vec__29871 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__29871,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29871,(1),null);
var vec__29874 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__29874,(0),null);
var exp = cljs.core.nth.call(null,vec__29874,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (arg < (0));
}
})();
<<<<<<< HEAD
var vec__29372 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__29372,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__29372,(1),null);
var expanded = cljs.core.nth.call(null,vec__29372,(2),null);
=======
var vec__29877 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__29877,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__29877,(1),null);
var expanded = cljs.core.nth.call(null,vec__29877,(2),null);
>>>>>>> 8f3c68a (Initial Commit)
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - fixed_repr.indexOf(".")),"0"))),fixed_repr].join('');
var full_len = (((full_repr).length) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.call(null,[(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return add_sign;
} else {
return and__4115__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params)))?add_sign:false))?(((arg < (0)))?"-":"+"):null),full_repr].join(''));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
<<<<<<< HEAD
var vec__29375 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__29375,(0),null);
var navigator = cljs.core.nth.call(null,vec__29375,(1),null);
=======
var vec__29880 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__29880,(0),null);
var navigator = cljs.core.nth.call(null,vec__29880,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count.call(null,clauses)))))?cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.call(null,clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
<<<<<<< HEAD
var vec__29378 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__29378,(0),null);
var navigator = cljs.core.nth.call(null,vec__29378,(1),null);
=======
var vec__29883 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__29883,(0),null);
var navigator = cljs.core.nth.call(null,vec__29883,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second.call(null,clauses):cljs.core.first.call(null,clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
<<<<<<< HEAD
var vec__29381 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__29381,(0),null);
var navigator = cljs.core.nth.call(null,vec__29381,(1),null);
=======
var vec__29886 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__29886,(0),null);
var navigator = cljs.core.nth.call(null,vec__29886,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first.call(null,clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
<<<<<<< HEAD
var vec__29384 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__29384,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29384,(1),null);
var vec__29387 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__29387,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__29387,(1),null);
=======
var vec__29889 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__29889,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29889,(1),null);
var vec__29892 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__29892,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__29892,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var args = cljs.pprint.init_navigator.call(null,arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
<<<<<<< HEAD
var G__29390 = (count + (1));
var G__29391 = iter_result;
var G__29392 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__29390;
args__$1 = G__29391;
last_pos = G__29392;
=======
var G__29895 = (count + (1));
var G__29896 = iter_result;
var G__29897 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__29895;
args__$1 = G__29896;
last_pos = G__29897;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
<<<<<<< HEAD
var vec__29393 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__29393,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29393,(1),null);
var vec__29396 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__29396,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__29396,(1),null);
=======
var vec__29898 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__29898,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29898,(1),null);
var vec__29901 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__29901,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__29901,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_.call(null,arg_list__$1)) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,cljs.core.first.call(null,arg_list__$1)),cljs.pprint.init_navigator.call(null,cljs.core.next.call(null,arg_list__$1)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
<<<<<<< HEAD
var G__29399 = (count + (1));
var G__29400 = cljs.core.next.call(null,arg_list__$1);
count = G__29399;
arg_list__$1 = G__29400;
=======
var G__29904 = (count + (1));
var G__29905 = cljs.core.next.call(null,arg_list__$1);
count = G__29904;
arg_list__$1 = G__29905;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
<<<<<<< HEAD
var vec__29401 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__29401,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29401,(1),null);
=======
var vec__29906 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__29906,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29906,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return cljs.core.second.call(null,iter_result);
} else {
<<<<<<< HEAD
var G__29404 = (count + (1));
var G__29405 = iter_result;
var G__29406 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__29404;
navigator__$2 = G__29405;
last_pos = G__29406;
=======
var G__29909 = (count + (1));
var G__29910 = iter_result;
var G__29911 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__29909;
navigator__$2 = G__29910;
last_pos = G__29911;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
<<<<<<< HEAD
var vec__29407 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__29407,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29407,(1),null);
=======
var vec__29912 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__29912,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29912,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
<<<<<<< HEAD
var vec__29413 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__29413,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__29413,(1),null);
=======
var vec__29918 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__29918,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__29918,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,sublist),navigator__$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$3;
} else {
<<<<<<< HEAD
var G__29416 = (count + (1));
var G__29417 = navigator__$3;
count = G__29416;
navigator__$2 = G__29417;
=======
var G__29921 = (count + (1));
var G__29922 = navigator__$3;
count = G__29921;
navigator__$2 = G__29922;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block.call(null,params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses.call(null,params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_.call(null,clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first.call(null,clauses__$1);
<<<<<<< HEAD
var vec__29423 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__29426 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29427 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29427);

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29426);
}})();
var iter_result = cljs.core.nth.call(null,vec__29423,(0),null);
var result_str = cljs.core.nth.call(null,vec__29423,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__29428 = cljs.core.next.call(null,clauses__$1);
var G__29429 = cljs.core.conj.call(null,acc,result_str);
var G__29430 = iter_result;
clauses__$1 = G__29428;
acc = G__29429;
navigator__$1 = G__29430;
=======
var vec__29928 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__29931 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29932 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29932);

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29931);
}})();
var iter_result = cljs.core.nth.call(null,vec__29928,(0),null);
var result_str = cljs.core.nth.call(null,vec__29928,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__29933 = cljs.core.next.call(null,clauses__$1);
var G__29934 = cljs.core.conj.call(null,acc,result_str);
var G__29935 = iter_result;
clauses__$1 = G__29933;
acc = G__29934;
navigator__$1 = G__29935;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
<<<<<<< HEAD
var vec__29431 = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
=======
var vec__29936 = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(temp__5720__auto__)){
var else$ = temp__5720__auto__;
return cljs.pprint.render_clauses.call(null,else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
<<<<<<< HEAD
var vec__29434 = cljs.core.nth.call(null,vec__29431,(0),null);
var eol_str = cljs.core.nth.call(null,vec__29434,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__29431,(1),null);
=======
var vec__29939 = cljs.core.nth.call(null,vec__29936,(0),null);
var eol_str = cljs.core.nth.call(null,vec__29939,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__29936,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var navigator__$1 = (function (){var or__4126__auto__ = new_navigator;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return navigator;
}
})();
<<<<<<< HEAD
var vec__29437 = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
=======
var vec__29942 = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(temp__5720__auto__)){
var p = temp__5720__auto__;
return cljs.pprint.realize_parameter_list.call(null,p,navigator__$1);
} else {
return null;
}
})();
<<<<<<< HEAD
var else_params = cljs.core.nth.call(null,vec__29437,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__29437,(1),null);
=======
var else_params = cljs.core.nth.call(null,vec__29942,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__29942,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var navigator__$2 = (function (){var or__4126__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__4126__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__4126__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.pprint.get_max_column.call(null,cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
<<<<<<< HEAD
var vec__29440 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__29440,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__29440,(1),null);
=======
var vec__29945 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__29945,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__29945,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var slots = (function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (((cljs.core.count.call(null,strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var chars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot.call(null,((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4214__auto__ = minpad;
var y__4215__auto__ = cljs.core.quot.call(null,total_pad,slots);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__4115__auto__ = eol_str;
if(cljs.core.truth_(and__4115__auto__)){
return (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__4115__auto__;
}
})())){
cljs.pprint.print.call(null,eol_str);
} else {
}

<<<<<<< HEAD
var slots_29443__$1 = slots;
var extra_pad_29444__$1 = extra_pad;
var strs_29445__$1 = strs;
var pad_only_29446 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_29445__$1),(1))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_29445__$1)){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,pad_only_29446))?cljs.core.first.call(null,strs_29445__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__4126__auto__ = pad_only_29446;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.next.call(null,strs_29445__$1);
=======
var slots_29948__$1 = slots;
var extra_pad_29949__$1 = extra_pad;
var strs_29950__$1 = strs;
var pad_only_29951 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_29950__$1),(1))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_29950__$1)){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,pad_only_29951))?cljs.core.first.call(null,strs_29950__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__4126__auto__ = pad_only_29951;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.next.call(null,strs_29950__$1);
>>>>>>> 8f3c68a (Initial Commit)
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
<<<<<<< HEAD
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_29444__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__29447 = (slots_29443__$1 - (1));
var G__29448 = (extra_pad_29444__$1 - (1));
var G__29449 = (cljs.core.truth_(pad_only_29446)?strs_29445__$1:cljs.core.next.call(null,strs_29445__$1));
var G__29450 = false;
slots_29443__$1 = G__29447;
extra_pad_29444__$1 = G__29448;
strs_29445__$1 = G__29449;
pad_only_29446 = G__29450;
=======
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_29949__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__29952 = (slots_29948__$1 - (1));
var G__29953 = (extra_pad_29949__$1 - (1));
var G__29954 = (cljs.core.truth_(pad_only_29951)?strs_29950__$1:cljs.core.next.call(null,strs_29950__$1));
var G__29955 = false;
slots_29948__$1 = G__29952;
extra_pad_29949__$1 = G__29953;
strs_29950__$1 = G__29954;
pad_only_29951 = G__29955;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
<<<<<<< HEAD
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint29451 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint29956 !== 'undefined')){
>>>>>>> 8f3c68a (Initial Commit)
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.pprint.t_cljs$pprint29451 = (function (writer,meta29452){
this.writer = writer;
this.meta29452 = meta29452;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint29451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29453,meta29452__$1){
var self__ = this;
var _29453__$1 = this;
return (new cljs.pprint.t_cljs$pprint29451(self__.writer,meta29452__$1));
}));

(cljs.pprint.t_cljs$pprint29451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29453){
var self__ = this;
var _29453__$1 = this;
return self__.meta29452;
}));

(cljs.pprint.t_cljs$pprint29451.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
=======
cljs.pprint.t_cljs$pprint29956 = (function (writer,meta29957){
this.writer = writer;
this.meta29957 = meta29957;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint29956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29958,meta29957__$1){
var self__ = this;
var _29958__$1 = this;
return (new cljs.pprint.t_cljs$pprint29956(self__.writer,meta29957__$1));
}));

(cljs.pprint.t_cljs$pprint29956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29958){
var self__ = this;
var _29958__$1 = this;
return self__.meta29957;
}));

(cljs.pprint.t_cljs$pprint29956.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
>>>>>>> 8f3c68a (Initial Commit)
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
}));

<<<<<<< HEAD
(cljs.pprint.t_cljs$pprint29451.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29454 = cljs.core._EQ_;
var expr__29455 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__29454.call(null,String,expr__29455))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__29454.call(null,Number,expr__29455))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29455)].join('')));
=======
(cljs.pprint.t_cljs$pprint29956.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29959 = cljs.core._EQ_;
var expr__29960 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__29959.call(null,String,expr__29960))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__29959.call(null,Number,expr__29960))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29960)].join('')));
>>>>>>> 8f3c68a (Initial Commit)
}
}
}));

<<<<<<< HEAD
(cljs.pprint.t_cljs$pprint29451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta29452","meta29452",-591676334,null)], null);
}));

(cljs.pprint.t_cljs$pprint29451.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint29451.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29451");

(cljs.pprint.t_cljs$pprint29451.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.pprint/t_cljs$pprint29451");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint29451.
 */
cljs.pprint.__GT_t_cljs$pprint29451 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint29451(writer__$1,meta29452){
return (new cljs.pprint.t_cljs$pprint29451(writer__$1,meta29452));
=======
(cljs.pprint.t_cljs$pprint29956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta29957","meta29957",892734294,null)], null);
}));

(cljs.pprint.t_cljs$pprint29956.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint29956.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29956");

(cljs.pprint.t_cljs$pprint29956.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.pprint/t_cljs$pprint29956");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint29956.
 */
cljs.pprint.__GT_t_cljs$pprint29956 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint29956(writer__$1,meta29957){
return (new cljs.pprint.t_cljs$pprint29956(writer__$1,meta29957));
>>>>>>> 8f3c68a (Initial Commit)
});

}

<<<<<<< HEAD
return (new cljs.pprint.t_cljs$pprint29451(writer,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.pprint.t_cljs$pprint29956(writer,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 8f3c68a (Initial Commit)
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
<<<<<<< HEAD
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint29457 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint29962 !== 'undefined')){
>>>>>>> 8f3c68a (Initial Commit)
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.pprint.t_cljs$pprint29457 = (function (writer,meta29458){
this.writer = writer;
this.meta29458 = meta29458;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint29457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29459,meta29458__$1){
var self__ = this;
var _29459__$1 = this;
return (new cljs.pprint.t_cljs$pprint29457(self__.writer,meta29458__$1));
}));

(cljs.pprint.t_cljs$pprint29457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29459){
var self__ = this;
var _29459__$1 = this;
return self__.meta29458;
}));

(cljs.pprint.t_cljs$pprint29457.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
=======
cljs.pprint.t_cljs$pprint29962 = (function (writer,meta29963){
this.writer = writer;
this.meta29963 = meta29963;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint29962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29964,meta29963__$1){
var self__ = this;
var _29964__$1 = this;
return (new cljs.pprint.t_cljs$pprint29962(self__.writer,meta29963__$1));
}));

(cljs.pprint.t_cljs$pprint29962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29964){
var self__ = this;
var _29964__$1 = this;
return self__.meta29963;
}));

(cljs.pprint.t_cljs$pprint29962.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
>>>>>>> 8f3c68a (Initial Commit)
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
}));

<<<<<<< HEAD
(cljs.pprint.t_cljs$pprint29457.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29460 = cljs.core._EQ_;
var expr__29461 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__29460.call(null,String,expr__29461))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__29460.call(null,Number,expr__29461))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29461)].join('')));
=======
(cljs.pprint.t_cljs$pprint29962.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29965 = cljs.core._EQ_;
var expr__29966 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__29965.call(null,String,expr__29966))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__29965.call(null,Number,expr__29966))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29966)].join('')));
>>>>>>> 8f3c68a (Initial Commit)
}
}
}));

<<<<<<< HEAD
(cljs.pprint.t_cljs$pprint29457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta29458","meta29458",-1968941550,null)], null);
}));

(cljs.pprint.t_cljs$pprint29457.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint29457.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29457");

(cljs.pprint.t_cljs$pprint29457.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.pprint/t_cljs$pprint29457");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint29457.
 */
cljs.pprint.__GT_t_cljs$pprint29457 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint29457(writer__$1,meta29458){
return (new cljs.pprint.t_cljs$pprint29457(writer__$1,meta29458));
=======
(cljs.pprint.t_cljs$pprint29962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta29963","meta29963",35092916,null)], null);
}));

(cljs.pprint.t_cljs$pprint29962.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint29962.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29962");

(cljs.pprint.t_cljs$pprint29962.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.pprint/t_cljs$pprint29962");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint29962.
 */
cljs.pprint.__GT_t_cljs$pprint29962 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint29962(writer__$1,meta29963){
return (new cljs.pprint.t_cljs$pprint29962(writer__$1,meta29963));
>>>>>>> 8f3c68a (Initial Commit)
});

}

<<<<<<< HEAD
return (new cljs.pprint.t_cljs$pprint29457(writer,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.pprint.t_cljs$pprint29962(writer,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 8f3c68a (Initial Commit)
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first.call(null,s);
var s__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = first_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = f;
if(cljs.core.truth_(and__4115__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())?[clojure.string.upper_case.call(null,f),cljs.core.subs.call(null,s,(1))].join(''):s);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (s__$2){
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__4115__auto__ = m;
if(cljs.core.truth_(and__4115__auto__)){
return (m.index + (1));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.call(null,s__$2,(0),offset),clojure.string.upper_case.call(null,cljs.core.nth.call(null,s__$2,offset))].join(''),cljs.core.subs.call(null,s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
}),s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.call(null,true);
<<<<<<< HEAD
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint29463 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint29968 !== 'undefined')){
>>>>>>> 8f3c68a (Initial Commit)
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.pprint.t_cljs$pprint29463 = (function (writer,last_was_whitespace_QMARK_,meta29464){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta29464 = meta29464;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint29463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29465,meta29464__$1){
var self__ = this;
var _29465__$1 = this;
return (new cljs.pprint.t_cljs$pprint29463(self__.writer,self__.last_was_whitespace_QMARK_,meta29464__$1));
}));

(cljs.pprint.t_cljs$pprint29463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29465){
var self__ = this;
var _29465__$1 = this;
return self__.meta29464;
}));

(cljs.pprint.t_cljs$pprint29463.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
=======
cljs.pprint.t_cljs$pprint29968 = (function (writer,last_was_whitespace_QMARK_,meta29969){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta29969 = meta29969;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint29968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29970,meta29969__$1){
var self__ = this;
var _29970__$1 = this;
return (new cljs.pprint.t_cljs$pprint29968(self__.writer,self__.last_was_whitespace_QMARK_,meta29969__$1));
}));

(cljs.pprint.t_cljs$pprint29968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29970){
var self__ = this;
var _29970__$1 = this;
return self__.meta29969;
}));

(cljs.pprint.t_cljs$pprint29968.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
>>>>>>> 8f3c68a (Initial Commit)
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
}));

<<<<<<< HEAD
(cljs.pprint.t_cljs$pprint29463.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29466 = cljs.core._EQ_;
var expr__29467 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__29466.call(null,String,expr__29467))){
=======
(cljs.pprint.t_cljs$pprint29968.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29971 = cljs.core._EQ_;
var expr__29972 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__29971.call(null,String,expr__29972))){
>>>>>>> 8f3c68a (Initial Commit)
var s = x;
cljs.core._write.call(null,self__.writer,cljs.pprint.capitalize_string.call(null,s.toLowerCase(),cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)))));
} else {
return null;
}
} else {
<<<<<<< HEAD
if(cljs.core.truth_(pred__29466.call(null,Number,expr__29467))){
=======
if(cljs.core.truth_(pred__29971.call(null,Number,expr__29972))){
>>>>>>> 8f3c68a (Initial Commit)
var c = cljs.core.char$.call(null,x);
var mod_c = (cljs.core.truth_(cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))?clojure.string.upper_case.call(null,c):c);
cljs.core._write.call(null,self__.writer,mod_c);

return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
<<<<<<< HEAD
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29467)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29972)].join('')));
>>>>>>> 8f3c68a (Initial Commit)
}
}
}));

<<<<<<< HEAD
(cljs.pprint.t_cljs$pprint29463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta29464","meta29464",-1768419981,null)], null);
}));

(cljs.pprint.t_cljs$pprint29463.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint29463.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29463");

(cljs.pprint.t_cljs$pprint29463.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.pprint/t_cljs$pprint29463");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint29463.
 */
cljs.pprint.__GT_t_cljs$pprint29463 = (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint29463(writer__$1,last_was_whitespace_QMARK___$1,meta29464){
return (new cljs.pprint.t_cljs$pprint29463(writer__$1,last_was_whitespace_QMARK___$1,meta29464));
=======
(cljs.pprint.t_cljs$pprint29968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta29969","meta29969",846958596,null)], null);
}));

(cljs.pprint.t_cljs$pprint29968.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint29968.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29968");

(cljs.pprint.t_cljs$pprint29968.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.pprint/t_cljs$pprint29968");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint29968.
 */
cljs.pprint.__GT_t_cljs$pprint29968 = (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint29968(writer__$1,last_was_whitespace_QMARK___$1,meta29969){
return (new cljs.pprint.t_cljs$pprint29968(writer__$1,last_was_whitespace_QMARK___$1,meta29969));
>>>>>>> 8f3c68a (Initial Commit)
});

}

<<<<<<< HEAD
return (new cljs.pprint.t_cljs$pprint29463(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
=======
return (new cljs.pprint.t_cljs$pprint29968(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
>>>>>>> 8f3c68a (Initial Commit)
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.call(null,false);
<<<<<<< HEAD
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint29469 !== 'undefined')){
=======
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint29974 !== 'undefined')){
>>>>>>> 8f3c68a (Initial Commit)
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
<<<<<<< HEAD
cljs.pprint.t_cljs$pprint29469 = (function (writer,capped,meta29470){
this.writer = writer;
this.capped = capped;
this.meta29470 = meta29470;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint29469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29471,meta29470__$1){
var self__ = this;
var _29471__$1 = this;
return (new cljs.pprint.t_cljs$pprint29469(self__.writer,self__.capped,meta29470__$1));
}));

(cljs.pprint.t_cljs$pprint29469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29471){
var self__ = this;
var _29471__$1 = this;
return self__.meta29470;
}));

(cljs.pprint.t_cljs$pprint29469.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
=======
cljs.pprint.t_cljs$pprint29974 = (function (writer,capped,meta29975){
this.writer = writer;
this.capped = capped;
this.meta29975 = meta29975;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint29974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29976,meta29975__$1){
var self__ = this;
var _29976__$1 = this;
return (new cljs.pprint.t_cljs$pprint29974(self__.writer,self__.capped,meta29975__$1));
}));

(cljs.pprint.t_cljs$pprint29974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29976){
var self__ = this;
var _29976__$1 = this;
return self__.meta29975;
}));

(cljs.pprint.t_cljs$pprint29974.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
>>>>>>> 8f3c68a (Initial Commit)
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
}));

<<<<<<< HEAD
(cljs.pprint.t_cljs$pprint29469.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29472 = cljs.core._EQ_;
var expr__29473 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__29472.call(null,String,expr__29473))){
=======
(cljs.pprint.t_cljs$pprint29974.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29977 = cljs.core._EQ_;
var expr__29978 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__29977.call(null,String,expr__29978))){
>>>>>>> 8f3c68a (Initial Commit)
var s = clojure.string.lower_case.call(null,x);
if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__4115__auto__ = m;
if(cljs.core.truth_(and__4115__auto__)){
return m.index;
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write.call(null,self__.writer,[cljs.core.subs.call(null,s,(0),offset),clojure.string.upper_case.call(null,cljs.core.nth.call(null,s,offset)),clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,(offset + (1))))].join(''));

return cljs.core.reset_BANG_.call(null,self__.capped,true);
} else {
return cljs.core._write.call(null,self__.writer,s);
}
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
}
} else {
<<<<<<< HEAD
if(cljs.core.truth_(pred__29472.call(null,Number,expr__29473))){
=======
if(cljs.core.truth_(pred__29977.call(null,Number,expr__29978))){
>>>>>>> 8f3c68a (Initial Commit)
var c = cljs.core.char$.call(null,x);
if(((cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))) && (goog.string.isUnicodeChar(c)))){
cljs.core.reset_BANG_.call(null,self__.capped,true);

return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,c));
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,c));
}
} else {
<<<<<<< HEAD
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29473)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29978)].join('')));
>>>>>>> 8f3c68a (Initial Commit)
}
}
}));

<<<<<<< HEAD
(cljs.pprint.t_cljs$pprint29469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta29470","meta29470",-1560174056,null)], null);
}));

(cljs.pprint.t_cljs$pprint29469.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint29469.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29469");

(cljs.pprint.t_cljs$pprint29469.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.pprint/t_cljs$pprint29469");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint29469.
 */
cljs.pprint.__GT_t_cljs$pprint29469 = (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint29469(writer__$1,capped__$1,meta29470){
return (new cljs.pprint.t_cljs$pprint29469(writer__$1,capped__$1,meta29470));
=======
(cljs.pprint.t_cljs$pprint29974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta29975","meta29975",840209272,null)], null);
}));

(cljs.pprint.t_cljs$pprint29974.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint29974.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29974");

(cljs.pprint.t_cljs$pprint29974.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.pprint/t_cljs$pprint29974");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint29974.
 */
cljs.pprint.__GT_t_cljs$pprint29974 = (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint29974(writer__$1,capped__$1,meta29975){
return (new cljs.pprint.t_cljs$pprint29974(writer__$1,capped__$1,meta29975));
>>>>>>> 8f3c68a (Initial Commit)
});

}

<<<<<<< HEAD
return (new cljs.pprint.t_cljs$pprint29469(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__29475 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29476 = make_writer.call(null,cljs.core._STAR_out_STAR_);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29476);

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29475);
=======
return (new cljs.pprint.t_cljs$pprint29974(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__29980 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29981 = make_writer.call(null,cljs.core._STAR_out_STAR_);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29981);

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29980);
>>>>>>> 8f3c68a (Initial Commit)
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_.call(null,writer))){
return writer;
} else {
return cljs.pprint.pretty_writer.call(null,writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if((((!((cljs.core._STAR_out_STAR_ == null))))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if((!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))))))){
return cljs.pprint.prn.call(null);
} else {
return null;
}
} else {
return cljs.pprint.prn.call(null);
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
<<<<<<< HEAD
var colnum_29478 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_29479 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_29480 = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))));
var space_count_29481 = (((current_29480 < colnum_29478))?(colnum_29478 - current_29480):((cljs.core._EQ_.call(null,colinc_29479,(0)))?(0):(colinc_29479 - cljs.core.rem.call(null,(current_29480 - colnum_29478),colinc_29479))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_29481," ")));
=======
var colnum_29983 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_29984 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_29985 = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))));
var space_count_29986 = (((current_29985 < colnum_29983))?(colnum_29983 - current_29985):((cljs.core._EQ_.call(null,colinc_29984,(0)))?(0):(colinc_29984 - cljs.core.rem.call(null,(current_29985 - colnum_29983),colinc_29984))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_29986," ")));
>>>>>>> 8f3c68a (Initial Commit)

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
<<<<<<< HEAD
var colrel_29482 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_29483 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_29484 = (colrel_29482 + cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))));
var offset_29485 = (((colinc_29483 > (0)))?cljs.core.rem.call(null,start_col_29484,colinc_29483):(0));
var space_count_29486 = (colrel_29482 + ((cljs.core._EQ_.call(null,(0),offset_29485))?(0):(colinc_29483 - offset_29485)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_29486," ")));
=======
var colrel_29987 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_29988 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_29989 = (colrel_29987 + cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))));
var offset_29990 = (((colinc_29988 > (0)))?cljs.core.rem.call(null,start_col_29989,colinc_29988):(0));
var space_count_29991 = (colrel_29987 + ((cljs.core._EQ_.call(null,(0),offset_29990))?(0):(colinc_29988 - offset_29990)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_29991," ")));
>>>>>>> 8f3c68a (Initial Commit)

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count.call(null,clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.call(null,clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
<<<<<<< HEAD
var vec__29487 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__29487,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29487,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29490_29494 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29491_29495 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29492_29496 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29493_29497 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29492_29496);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29493_29497);
=======
var vec__29992 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__29992,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29992,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29995_29999 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29996_30000 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29997_30001 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29998_30002 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29997_30001);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29998_30002);
>>>>>>> 8f3c68a (Initial Commit)

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format.call(null,body,cljs.pprint.init_navigator.call(null,arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29491_29495);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29490_29494);
=======
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29996_30000);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29995_29999);
>>>>>>> 8f3c68a (Initial Commit)
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent.call(null,relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline.call(null,kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
<<<<<<< HEAD
return (function (p1__29498_SHARP_,p2__29499_SHARP_,p3__29500_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__29498_SHARP_,p2__29499_SHARP_,p3__29500_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29501_SHARP_,p2__29502_SHARP_,p3__29503_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__29501_SHARP_,p2__29502_SHARP_,p3__29503_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29504_SHARP_,p2__29505_SHARP_,p3__29506_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__29504_SHARP_,p2__29505_SHARP_,p3__29506_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29507_SHARP_,p2__29508_SHARP_,p3__29509_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__29507_SHARP_,p2__29508_SHARP_,p3__29509_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29510_SHARP_,p2__29511_SHARP_,p3__29512_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__29510_SHARP_,p2__29511_SHARP_,p3__29512_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29513_SHARP_,p2__29514_SHARP_,p3__29515_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__29513_SHARP_,p2__29514_SHARP_,p3__29515_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__29516_SHARP_,p2__29517_SHARP_,p3__29518_SHARP_){
return cljs.pprint.format_integer.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__29516_SHARP_),p1__29516_SHARP_,p2__29517_SHARP_,p3__29518_SHARP_);
=======
return (function (p1__30003_SHARP_,p2__30004_SHARP_,p3__30005_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__30003_SHARP_,p2__30004_SHARP_,p3__30005_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__30006_SHARP_,p2__30007_SHARP_,p3__30008_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__30006_SHARP_,p2__30007_SHARP_,p3__30008_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__30009_SHARP_,p2__30010_SHARP_,p3__30011_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__30009_SHARP_,p2__30010_SHARP_,p3__30011_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__30012_SHARP_,p2__30013_SHARP_,p3__30014_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__30012_SHARP_,p2__30013_SHARP_,p3__30014_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__30015_SHARP_,p2__30016_SHARP_,p3__30017_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__30015_SHARP_,p2__30016_SHARP_,p3__30017_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__30018_SHARP_,p2__30019_SHARP_,p3__30020_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__30018_SHARP_,p2__30019_SHARP_,p3__30020_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__30021_SHARP_,p2__30022_SHARP_,p3__30023_SHARP_){
return cljs.pprint.format_integer.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__30021_SHARP_),p1__30021_SHARP_,p2__30022_SHARP_,p3__30023_SHARP_);
>>>>>>> 8f3c68a (Initial Commit)
});
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())){
<<<<<<< HEAD
return (function (p1__29519_SHARP_,p2__29520_SHARP_,p3__29521_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__29519_SHARP_,p2__29520_SHARP_,p3__29521_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__29522_SHARP_,p2__29523_SHARP_,p3__29524_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__29522_SHARP_,p2__29523_SHARP_,p3__29524_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__29525_SHARP_,p2__29526_SHARP_,p3__29527_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__29525_SHARP_,p2__29526_SHARP_,p3__29527_SHARP_);
});
} else {
return (function (p1__29528_SHARP_,p2__29529_SHARP_,p3__29530_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__29528_SHARP_,p2__29529_SHARP_,p3__29530_SHARP_);
=======
return (function (p1__30024_SHARP_,p2__30025_SHARP_,p3__30026_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__30024_SHARP_,p2__30025_SHARP_,p3__30026_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__30027_SHARP_,p2__30028_SHARP_,p3__30029_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__30027_SHARP_,p2__30028_SHARP_,p3__30029_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__30030_SHARP_,p2__30031_SHARP_,p3__30032_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__30030_SHARP_,p2__30031_SHARP_,p3__30032_SHARP_);
});
} else {
return (function (p1__30033_SHARP_,p2__30034_SHARP_,p3__30035_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__30033_SHARP_,p2__30034_SHARP_,p3__30035_SHARP_);
>>>>>>> 8f3c68a (Initial Commit)
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition.call(null,navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
<<<<<<< HEAD
var vec__29540 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__29540,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__29540,(1),null);
=======
var vec__30045 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__30045,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__30045,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
cljs.pprint.print.call(null,((cljs.core._EQ_.call(null,arg,(1)))?cljs.core.first.call(null,strs):cljs.core.second.call(null,strs)));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
<<<<<<< HEAD
var n__4613__auto___29558 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_29559 = (0);
while(true){
if((i_29559 < n__4613__auto___29558)){
cljs.pprint.prn.call(null);

var G__29560 = (i_29559 + (1));
i_29559 = G__29560;
=======
var n__4613__auto___30063 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_30064 = (0);
while(true){
if((i_30064 < n__4613__auto___30063)){
cljs.pprint.prn.call(null);

var G__30065 = (i_30064 + (1));
i_30064 = G__30065;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
<<<<<<< HEAD
var cnt_29561 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_29561 > (0))){
=======
var cnt_30066 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_30066 > (0))){
>>>>>>> 8f3c68a (Initial Commit)
cljs.pprint.fresh_line.call(null);
} else {
}

<<<<<<< HEAD
var n__4613__auto___29562 = (cnt_29561 - (1));
var i_29563 = (0);
while(true){
if((i_29563 < n__4613__auto___29562)){
cljs.pprint.prn.call(null);

var G__29564 = (i_29563 + (1));
i_29563 = G__29564;
=======
var n__4613__auto___30067 = (cnt_30066 - (1));
var i_30068 = (0);
while(true){
if((i_30068 < n__4613__auto___30067)){
cljs.pprint.prn.call(null);

var G__30069 = (i_30068 + (1));
i_30068 = G__30069;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
<<<<<<< HEAD
var n__4613__auto___29565 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_29566 = (0);
while(true){
if((i_29566 < n__4613__auto___29565)){
cljs.pprint.print.call(null,"\f");

var G__29567 = (i_29566 + (1));
i_29566 = G__29567;
=======
var n__4613__auto___30070 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_30071 = (0);
while(true){
if((i_30071 < n__4613__auto___30070)){
cljs.pprint.print.call(null,"\f");

var G__30072 = (i_30071 + (1));
i_30071 = G__30072;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"~")));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn.call(null);
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
<<<<<<< HEAD
return (function (p1__29531_SHARP_,p2__29532_SHARP_,p3__29533_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__29531_SHARP_,p2__29532_SHARP_,p3__29533_SHARP_);
});
} else {
return (function (p1__29534_SHARP_,p2__29535_SHARP_,p3__29536_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__29534_SHARP_,p2__29535_SHARP_,p3__29536_SHARP_);
=======
return (function (p1__30036_SHARP_,p2__30037_SHARP_,p3__30038_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__30036_SHARP_,p2__30037_SHARP_,p3__30038_SHARP_);
});
} else {
return (function (p1__30039_SHARP_,p2__30040_SHARP_,p3__30041_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__30039_SHARP_,p2__30040_SHARP_,p3__30041_SHARP_);
>>>>>>> 8f3c68a (Initial Commit)
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition.call(null,navigator,n);
} else {
return cljs.pprint.relative_reposition.call(null,navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
<<<<<<< HEAD
var vec__29543 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__29543,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29543,(1),null);
=======
var vec__30048 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__30048,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__30048,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return cljs.pprint.execute_sub_format.call(null,subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
<<<<<<< HEAD
var vec__29546 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__29546,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29546,(1),null);
var vec__29549 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__29549,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__29549,(1),null);
=======
var vec__30051 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__30051,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__30051,(1),null);
var vec__30054 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__30054,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__30054,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var sub_navigator = cljs.pprint.init_navigator.call(null,subargs);
cljs.pprint.execute_sub_format.call(null,subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
<<<<<<< HEAD
return (function (p1__29537_SHARP_,p2__29538_SHARP_,p3__29539_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__29537_SHARP_,p2__29538_SHARP_,p3__29539_SHARP_);
=======
return (function (p1__30042_SHARP_,p2__30043_SHARP_,p3__30044_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__30042_SHARP_,p2__30043_SHARP_,p3__30044_SHARP_);
>>>>>>> 8f3c68a (Initial Commit)
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__4115__auto__ = arg1;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = arg2;
if(cljs.core.truth_(and__4115__auto____$1)){
return arg3;
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = arg1;
if(cljs.core.truth_(and__4115__auto__)){
return arg2;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.call(null,arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.call(null,arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return (function (params__$1,navigator,offsets){
<<<<<<< HEAD
var vec__29552 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__29552,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29552,(1),null);
=======
var vec__30057 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__30057,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__30057,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
} else {
return (function (params__$1,navigator,offsets){
<<<<<<< HEAD
var vec__29555 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__29555,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__29555,(1),null);
=======
var vec__30060 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__30060,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__30060,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(cljs.pprint.write_out.call(null,arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
<<<<<<< HEAD
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__29568){
var vec__29569 = p__29568;
var s = cljs.core.nth.call(null,vec__29569,(0),null);
var offset = cljs.core.nth.call(null,vec__29569,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__29569,(2),null);
=======
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__30073){
var vec__30074 = p__30073;
var s = cljs.core.nth.call(null,vec__30074,(0),null);
var offset = cljs.core.nth.call(null,vec__30074,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__30074,(2),null);
>>>>>>> 8f3c68a (Initial Commit)
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first.call(null,param);
var remainder = cljs.core.subs.call(null,s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if((!(cljs.core._EQ_.call(null,",",cljs.core.nth.call(null,remainder,(0)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error.call(null,"Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume.call(null,cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
<<<<<<< HEAD
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__29572){
var vec__29573 = p__29572;
var p = cljs.core.nth.call(null,vec__29573,(0),null);
var offset = cljs.core.nth.call(null,vec__29573,(1),null);
=======
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__30077){
var vec__30078 = p__30077;
var p = cljs.core.nth.call(null,vec__30078,(0),null);
var offset = cljs.core.nth.call(null,vec__30078,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,p.length,(0)))?null:((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.call(null,p,(0))))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core._EQ_.call(null,"#",cljs.core.nth.call(null,p,(0))))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):((((cljs.core._EQ_.call(null,p.length,(2))) && (cljs.core._EQ_.call(null,"'",cljs.core.nth.call(null,p,(0))))))?cljs.core.nth.call(null,p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
<<<<<<< HEAD
return cljs.pprint.consume.call(null,(function (p__29576){
var vec__29577 = p__29576;
var s__$1 = cljs.core.nth.call(null,vec__29577,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__29577,(1),null);
var flags = cljs.core.nth.call(null,vec__29577,(2),null);
=======
return cljs.pprint.consume.call(null,(function (p__30081){
var vec__30082 = p__30081;
var s__$1 = cljs.core.nth.call(null,vec__30082,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__30082,(1),null);
var flags = cljs.core.nth.call(null,vec__30082,(2),null);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.call(null,cljs.pprint.flag_defs,cljs.core.first.call(null,s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_.call(null,flags,flag)){
return cljs.pprint.format_error.call(null,["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.call(null,flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_(((cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed)))?new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags):false))){
cljs.pprint.format_error.call(null,["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_(((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed)))?new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags):false))){
cljs.pprint.format_error.call(null,["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_(((cljs.core.not.call(null,new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed)))?(function (){var and__4115__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4115__auto__;
}
})():false))){
return cljs.pprint.format_error.call(null,["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__4217__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__4218__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags.call(null,def,flags);

if((cljs.core.count.call(null,params) > cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error.call(null,cljs.pprint.cl_format.call(null,null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count.call(null,params),cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))),cljs.core.second.call(null,cljs.core.first.call(null,params)));
} else {
}

<<<<<<< HEAD
cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__29580_SHARP_,p2__29581_SHARP_){
var val = cljs.core.first.call(null,p1__29580_SHARP_);
if((!((((val == null)) || (cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__29581_SHARP_)),cljs.core.type.call(null,val))))))){
return cljs.pprint.format_error.call(null,["Parameter ",cljs.core.name.call(null,cljs.core.first.call(null,p2__29581_SHARP_))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__29580_SHARP_));
=======
cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__30085_SHARP_,p2__30086_SHARP_){
var val = cljs.core.first.call(null,p1__30085_SHARP_);
if((!((((val == null)) || (cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__30086_SHARP_)),cljs.core.type.call(null,val))))))){
return cljs.pprint.format_error.call(null,["Parameter ",cljs.core.name.call(null,cljs.core.first.call(null,p2__30086_SHARP_))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__30085_SHARP_));
>>>>>>> 8f3c68a (Initial Commit)
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

<<<<<<< HEAD
return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__4529__auto__ = (function cljs$pprint$map_params_$_iter__29585(s__29586){
return (new cljs.core.LazySeq(null,(function (){
var s__29586__$1 = s__29586;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__29586__$1);
if(temp__5720__auto__){
var s__29586__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29586__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__29586__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__29588 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__29587 = (0);
while(true){
if((i__29587 < size__4528__auto__)){
var vec__29589 = cljs.core._nth.call(null,c__4527__auto__,i__29587);
var name = cljs.core.nth.call(null,vec__29589,(0),null);
var vec__29592 = cljs.core.nth.call(null,vec__29589,(1),null);
var default$ = cljs.core.nth.call(null,vec__29592,(0),null);
cljs.core.chunk_append.call(null,b__29588,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__29601 = (i__29587 + (1));
i__29587 = G__29601;
=======
return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__4529__auto__ = (function cljs$pprint$map_params_$_iter__30090(s__30091){
return (new cljs.core.LazySeq(null,(function (){
var s__30091__$1 = s__30091;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30091__$1);
if(temp__5720__auto__){
var s__30091__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30091__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__30091__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__30093 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__30092 = (0);
while(true){
if((i__30092 < size__4528__auto__)){
var vec__30094 = cljs.core._nth.call(null,c__4527__auto__,i__30092);
var name = cljs.core.nth.call(null,vec__30094,(0),null);
var vec__30097 = cljs.core.nth.call(null,vec__30094,(1),null);
var default$ = cljs.core.nth.call(null,vec__30097,(0),null);
cljs.core.chunk_append.call(null,b__30093,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__30106 = (i__30092 + (1));
i__30092 = G__30106;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
return true;
}
break;
}
})()){
<<<<<<< HEAD
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29588),cljs$pprint$map_params_$_iter__29585.call(null,cljs.core.chunk_rest.call(null,s__29586__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29588),null);
}
} else {
var vec__29595 = cljs.core.first.call(null,s__29586__$2);
var name = cljs.core.nth.call(null,vec__29595,(0),null);
var vec__29598 = cljs.core.nth.call(null,vec__29595,(1),null);
var default$ = cljs.core.nth.call(null,vec__29598,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__29585.call(null,cljs.core.rest.call(null,s__29586__$2)));
=======
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30093),cljs$pprint$map_params_$_iter__30090.call(null,cljs.core.chunk_rest.call(null,s__30091__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30093),null);
}
} else {
var vec__30100 = cljs.core.first.call(null,s__30091__$2);
var name = cljs.core.nth.call(null,vec__30100,(0),null);
var vec__30103 = cljs.core.nth.call(null,vec__30100,(1),null);
var default$ = cljs.core.nth.call(null,vec__30103,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__30090.call(null,cljs.core.rest.call(null,s__30091__$2)));
>>>>>>> 8f3c68a (Initial Commit)
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
<<<<<<< HEAD
})())),cljs.core.reduce.call(null,(function (p1__29582_SHARP_,p2__29583_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__29582_SHARP_,p2__29583_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__29584_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__29584_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__29602 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__29602,(0),null);
var vec__29605 = cljs.core.nth.call(null,vec__29602,(1),null);
var rest = cljs.core.nth.call(null,vec__29605,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__29605,(1),null);
var vec__29608 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__29608,(0),null);
var vec__29611 = cljs.core.nth.call(null,vec__29608,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__29611,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__29611,(1),null);
var flags = cljs.core.nth.call(null,vec__29611,(2),null);
=======
})())),cljs.core.reduce.call(null,(function (p1__30087_SHARP_,p2__30088_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__30087_SHARP_,p2__30088_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__30089_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__30089_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__30107 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__30107,(0),null);
var vec__30110 = cljs.core.nth.call(null,vec__30107,(1),null);
var rest = cljs.core.nth.call(null,vec__30110,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__30110,(1),null);
var vec__30113 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__30113,(0),null);
var vec__30116 = cljs.core.nth.call(null,vec__30113,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__30116,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__30116,(1),null);
var flags = cljs.core.nth.call(null,vec__30116,(2),null);
>>>>>>> 8f3c68a (Initial Commit)
var directive = cljs.core.first.call(null,rest__$1);
var def = cljs.core.get.call(null,cljs.pprint.directive_table,clojure.string.upper_case.call(null,directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params.call(null,def,cljs.core.map.call(null,cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not.call(null,directive)){
cljs.pprint.format_error.call(null,"Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not.call(null,def)){
cljs.pprint.format_error.call(null,["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.call(null,rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.call(null,"\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count.call(null,remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.call(null,remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.call(null,s);

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__4115__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__4115__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
<<<<<<< HEAD
var vec__29614 = cljs.pprint.collect_clauses.call(null,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__29614,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__29614,(1),null);
=======
var vec__30119 = cljs.pprint.collect_clauses.call(null,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__30119,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__30119,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map.call(null,subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume.call(null,(function (remainder__$1){
if(cljs.core.empty_QMARK_.call(null,remainder__$1)){
return cljs.pprint.format_error.call(null,"No closing bracket found.",offset);
} else {
var this$ = cljs.core.first.call(null,remainder__$1);
var remainder__$2 = cljs.core.next.call(null,remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket.call(null,this$))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
<<<<<<< HEAD
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__29617){
var vec__29618 = p__29617;
var clause_map = cljs.core.nth.call(null,vec__29618,(0),null);
var saw_else = cljs.core.nth.call(null,vec__29618,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__29618,(2),null);
var vec__29621 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__29621,(0),null);
var vec__29624 = cljs.core.nth.call(null,vec__29621,(1),null);
var type = cljs.core.nth.call(null,vec__29624,(0),null);
var right_params = cljs.core.nth.call(null,vec__29624,(1),null);
var else_params = cljs.core.nth.call(null,vec__29624,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__29624,(3),null);
=======
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__30122){
var vec__30123 = p__30122;
var clause_map = cljs.core.nth.call(null,vec__30123,(0),null);
var saw_else = cljs.core.nth.call(null,vec__30123,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__30123,(2),null);
var vec__30126 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__30126,(0),null);
var vec__30129 = cljs.core.nth.call(null,vec__30126,(1),null);
var type = cljs.core.nth.call(null,vec__30129,(0),null);
var right_params = cljs.core.nth.call(null,vec__30129,(1),null);
var else_params = cljs.core.nth.call(null,vec__30129,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__30129,(3),null);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params])),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error.call(null,"Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error.call(null,"The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error.call(null,"A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (remainder){
var this$ = cljs.core.first.call(null,remainder);
var remainder__$1 = cljs.core.next.call(null,remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
<<<<<<< HEAD
var _STAR_format_str_STAR__orig_val__29627 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__29628 = format_str;
(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__29628);

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p__29629){
var vec__29630 = p__29629;
var s = cljs.core.nth.call(null,vec__29630,(0),null);
var offset = cljs.core.nth.call(null,vec__29630,(1),null);
=======
var _STAR_format_str_STAR__orig_val__30132 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__30133 = format_str;
(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__30133);

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p__30134){
var vec__30135 = p__30134;
var s = cljs.core.nth.call(null,vec__30135,(0),null);
var offset = cljs.core.nth.call(null,vec__30135,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive.call(null,cljs.core.subs.call(null,s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,cljs.core.subs.call(null,s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,tilde),(tilde + offset)], null)], null);

}
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
<<<<<<< HEAD
}finally {(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__29627);
=======
}finally {(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__30132);
>>>>>>> 8f3c68a (Initial Commit)
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_.call(null,format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1))));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
}
}
})())){
return true;
} else {
<<<<<<< HEAD
var G__29633 = cljs.core.next.call(null,format__$1);
format__$1 = G__29633;
=======
var G__30138 = cljs.core.next.call(null,format__$1);
format__$1 = G__30138;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
<<<<<<< HEAD
var G__29635 = arguments.length;
switch (G__29635) {
=======
var G__30140 = arguments.length;
switch (G__30140) {
>>>>>>> 8f3c68a (Initial Commit)
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not.call(null,stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = ((((cljs.pprint.needs_pretty.call(null,format)) && (cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,real_stream)))))?cljs.pprint.get_pretty_writer.call(null,real_stream):real_stream);
<<<<<<< HEAD
var _STAR_out_STAR__orig_val__29636 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29637 = wrapped_stream;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29637);
=======
var _STAR_out_STAR__orig_val__30141 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__30142 = wrapped_stream;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__30142);
>>>>>>> 8f3c68a (Initial Commit)

try{try{cljs.pprint.execute_format.call(null,format,args);
}finally {if((!((real_stream === wrapped_stream)))){
cljs.core._flush.call(null,wrapped_stream);
} else {
}
}
if(cljs.core.not.call(null,stream)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if(stream === true){
return cljs.core.string_print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
return null;

}
}
<<<<<<< HEAD
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29636);
=======
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__30141);
>>>>>>> 8f3c68a (Initial Commit)
}}));

(cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.pprint.abort_QMARK_.call(null,context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
<<<<<<< HEAD
var vec__29638 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__29638,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__29638,(1),null);
var vec__29641 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__29641,(0),null);
var offsets = cljs.core.nth.call(null,vec__29641,(1),null);
=======
var vec__30143 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__30143,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__30143,(1),null);
var vec__30146 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__30146,(0),null);
var offsets = cljs.core.nth.call(null,vec__30146,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
}));

(cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3);

cljs.pprint.cached_compile = cljs.core.memoize.call(null,cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method.call(null,multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = cljs.pprint.reader_macros.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_((function (){var and__4115__auto__ = macro_char;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,alis));
} else {
return and__4115__auto__;
}
})())){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
<<<<<<< HEAD
var _STAR_current_level_STAR__orig_val__29645_29650 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29646_29651 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29647_29652 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29648_29653 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29647_29652);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29648_29653);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

var length_count29649_29654 = (0);
var alis_29655__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count29649_29654 < cljs.core._STAR_print_length_STAR_)))){
if(alis_29655__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_29655__$1));

if(cljs.core.next.call(null,alis_29655__$1)){
=======
var _STAR_current_level_STAR__orig_val__30150_30155 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30151_30156 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30152_30157 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30153_30158 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30152_30157);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30153_30158);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

var length_count30154_30159 = (0);
var alis_30160__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count30154_30159 < cljs.core._STAR_print_length_STAR_)))){
if(alis_30160__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_30160__$1));

if(cljs.core.next.call(null,alis_30160__$1)){
>>>>>>> 8f3c68a (Initial Commit)
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

<<<<<<< HEAD
var G__29656 = (length_count29649_29654 + (1));
var G__29657 = cljs.core.next.call(null,alis_29655__$1);
length_count29649_29654 = G__29656;
alis_29655__$1 = G__29657;
=======
var G__30161 = (length_count30154_30159 + (1));
var G__30162 = cljs.core.next.call(null,alis_30160__$1);
length_count30154_30159 = G__30161;
alis_30160__$1 = G__30162;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29646_29651);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29645_29650);
=======
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30151_30156);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30150_30155);
>>>>>>> 8f3c68a (Initial Commit)
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
return cljs.pprint.pprint_simple_list.call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
<<<<<<< HEAD
var _STAR_current_level_STAR__orig_val__29658_29663 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29659_29664 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29660_29665 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29661_29666 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29660_29665);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29661_29666);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count29662_29667 = (0);
var aseq_29668 = cljs.core.seq.call(null,avec);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count29662_29667 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_29668){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_29668));

if(cljs.core.next.call(null,aseq_29668)){
=======
var _STAR_current_level_STAR__orig_val__30163_30168 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30164_30169 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30165_30170 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30166_30171 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30165_30170);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30166_30171);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count30167_30172 = (0);
var aseq_30173 = cljs.core.seq.call(null,avec);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count30167_30172 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_30173){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_30173));

if(cljs.core.next.call(null,aseq_30173)){
>>>>>>> 8f3c68a (Initial Commit)
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

<<<<<<< HEAD
var G__29669 = (length_count29662_29667 + (1));
var G__29670 = cljs.core.next.call(null,aseq_29668);
length_count29662_29667 = G__29669;
aseq_29668 = G__29670;
=======
var G__30174 = (length_count30167_30172 + (1));
var G__30175 = cljs.core.next.call(null,aseq_30173);
length_count30167_30172 = G__30174;
aseq_30173 = G__30175;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29659_29664);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29658_29663);
=======
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30164_30169);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30163_30168);
>>>>>>> 8f3c68a (Initial Commit)
}}

return null;
});
<<<<<<< HEAD
cljs.pprint.pprint_array = (function (){var format_in__28805__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29671__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29671 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29672__i = 0, G__29672__a = new Array(arguments.length -  0);
while (G__29672__i < G__29672__a.length) {G__29672__a[G__29672__i] = arguments[G__29672__i + 0]; ++G__29672__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29672__a,0,null);
} 
return G__29671__delegate.call(this,args__28807__auto__);};
G__29671.cljs$lang$maxFixedArity = 0;
G__29671.cljs$lang$applyTo = (function (arglist__29673){
var args__28807__auto__ = cljs.core.seq(arglist__29673);
return G__29671__delegate(args__28807__auto__);
});
G__29671.cljs$core$IFn$_invoke$arity$variadic = G__29671__delegate;
return G__29671;
=======
cljs.pprint.pprint_array = (function (){var format_in__29310__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30176__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30176 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30177__i = 0, G__30177__a = new Array(arguments.length -  0);
while (G__30177__i < G__30177__a.length) {G__30177__a[G__30177__i] = arguments[G__30177__i + 0]; ++G__30177__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30177__a,0,null);
} 
return G__30176__delegate.call(this,args__29312__auto__);};
G__30176.cljs$lang$maxFixedArity = 0;
G__30176.cljs$lang$applyTo = (function (arglist__30178){
var args__29312__auto__ = cljs.core.seq(arglist__30178);
return G__30176__delegate(args__29312__auto__);
});
G__30176.cljs$core$IFn$_invoke$arity$variadic = G__30176__delegate;
return G__30176;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
<<<<<<< HEAD
var vec__29674 = (((!(cljs.core.record_QMARK_.call(null,amap))))?new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",(15),(1),(10307),(10307),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)])).call(null,amap):null);
var ns = cljs.core.nth.call(null,vec__29674,(0),null);
var lift_map = cljs.core.nth.call(null,vec__29674,(1),null);
=======
var vec__30179 = (((!(cljs.core.record_QMARK_.call(null,amap))))?new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",(15),(1),(10307),(10307),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)])).call(null,amap):null);
var ns = cljs.core.nth.call(null,vec__30179,(0),null);
var lift_map = cljs.core.nth.call(null,vec__30179,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
var amap__$1 = (function (){var or__4126__auto__ = lift_map;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
<<<<<<< HEAD
var _STAR_current_level_STAR__orig_val__29677_29686 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29678_29687 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29679_29688 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29680_29689 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29679_29688);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29680_29689);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count29681_29690 = (0);
var aseq_29691 = cljs.core.seq.call(null,amap__$1);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count29681_29690 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_29691){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29682_29692 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29683_29693 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29684_29694 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29685_29695 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29684_29694);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29685_29695);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_29691));
=======
var _STAR_current_level_STAR__orig_val__30182_30191 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30183_30192 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30184_30193 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30185_30194 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30184_30193);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30185_30194);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count30186_30195 = (0);
var aseq_30196 = cljs.core.seq.call(null,amap__$1);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count30186_30195 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_30196){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30187_30197 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30188_30198 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30189_30199 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30190_30200 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30189_30199);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30190_30200);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_30196));
>>>>>>> 8f3c68a (Initial Commit)

cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

(cljs.pprint._STAR_current_length_STAR_ = (0));

<<<<<<< HEAD
cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_29691)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29683_29693);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29682_29692);
}}


if(cljs.core.next.call(null,aseq_29691)){
=======
cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_30196)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30188_30198);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30187_30197);
}}


if(cljs.core.next.call(null,aseq_30196)){
>>>>>>> 8f3c68a (Initial Commit)
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

<<<<<<< HEAD
var G__29696 = (length_count29681_29690 + (1));
var G__29697 = cljs.core.next.call(null,aseq_29691);
length_count29681_29690 = G__29696;
aseq_29691 = G__29697;
=======
var G__30201 = (length_count30186_30195 + (1));
var G__30202 = cljs.core.next.call(null,aseq_30196);
length_count30186_30195 = G__30201;
aseq_30196 = G__30202;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29678_29687);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29677_29686);
=======
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30183_30192);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30182_30191);
>>>>>>> 8f3c68a (Initial Commit)
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,obj));
});
<<<<<<< HEAD
cljs.pprint.pprint_set = (function (){var format_in__28805__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29698__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29698 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29699__i = 0, G__29699__a = new Array(arguments.length -  0);
while (G__29699__i < G__29699__a.length) {G__29699__a[G__29699__i] = arguments[G__29699__i + 0]; ++G__29699__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29699__a,0,null);
} 
return G__29698__delegate.call(this,args__28807__auto__);};
G__29698.cljs$lang$maxFixedArity = 0;
G__29698.cljs$lang$applyTo = (function (arglist__29700){
var args__28807__auto__ = cljs.core.seq(arglist__29700);
return G__29698__delegate(args__28807__auto__);
});
G__29698.cljs$core$IFn$_invoke$arity$variadic = G__29698__delegate;
return G__29698;
=======
cljs.pprint.pprint_set = (function (){var format_in__29310__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30203__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30203 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30204__i = 0, G__30204__a = new Array(arguments.length -  0);
while (G__30204__i < G__30204__a.length) {G__30204__a[G__30204__i] = arguments[G__30204__i + 0]; ++G__30204__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30204__a,0,null);
} 
return G__30203__delegate.call(this,args__29312__auto__);};
G__30203.cljs$lang$maxFixedArity = 0;
G__30203.cljs$lang$applyTo = (function (arglist__30205){
var args__29312__auto__ = cljs.core.seq(arglist__30205);
return G__30203__delegate(args__29312__auto__);
});
G__30203.cljs$core$IFn$_invoke$arity$variadic = G__30203__delegate;
return G__30203;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__4126__auto__ = (function (){var temp__5720__auto__ = cljs.core.re_find.call(null,/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5720__auto__)){
var match = temp__5720__auto__;
return cljs.pprint.type_map.call(null,match);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type.call(null,cljs.core.type.call(null,o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
<<<<<<< HEAD
var _STAR_current_level_STAR__orig_val__29701_29708 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29702_29709 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29703_29710 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29704_29711 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29703_29710);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29704_29711);
=======
var _STAR_current_level_STAR__orig_val__30206_30213 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30207_30214 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30208_30215 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30209_30216 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30208_30215);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30209_30216);
>>>>>>> 8f3c68a (Initial Commit)

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(- (((prefix).length) - (2))));

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out.call(null,(((((((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o)))?(!(cljs.core._realized_QMARK_.call(null,o))):false))?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref.call(null,o)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29702_29709);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29701_29708);
=======
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30207_30214);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30206_30213);
>>>>>>> 8f3c68a (Initial Commit)
}}

return null;
});
<<<<<<< HEAD
cljs.pprint.pprint_pqueue = (function (){var format_in__28805__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29712__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29712 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29713__i = 0, G__29713__a = new Array(arguments.length -  0);
while (G__29713__i < G__29713__a.length) {G__29713__a[G__29713__i] = arguments[G__29713__i + 0]; ++G__29713__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29713__a,0,null);
} 
return G__29712__delegate.call(this,args__28807__auto__);};
G__29712.cljs$lang$maxFixedArity = 0;
G__29712.cljs$lang$applyTo = (function (arglist__29714){
var args__28807__auto__ = cljs.core.seq(arglist__29714);
return G__29712__delegate(args__28807__auto__);
});
G__29712.cljs$core$IFn$_invoke$arity$variadic = G__29712__delegate;
return G__29712;
=======
cljs.pprint.pprint_pqueue = (function (){var format_in__29310__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30217__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30217 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30218__i = 0, G__30218__a = new Array(arguments.length -  0);
while (G__30218__i < G__30218__a.length) {G__30218__a[G__30218__i] = arguments[G__30218__i + 0]; ++G__30218__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30218__a,0,null);
} 
return G__30217__delegate.call(this,args__29312__auto__);};
G__30217.cljs$lang$maxFixedArity = 0;
G__30217.cljs$lang$applyTo = (function (arglist__30219){
var args__29312__auto__ = cljs.core.seq(arglist__30219);
return G__30217__delegate(args__29312__auto__);
});
G__30217.cljs$core$IFn$_invoke$arity$variadic = G__30217__delegate;
return G__30217;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.simple_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,null));
}));
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_.call(null,form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_.call(null,reference)){
<<<<<<< HEAD
var vec__29716 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__29716,(0),null);
var end = cljs.core.nth.call(null,vec__29716,(1),null);
var vec__29719 = reference;
var seq__29720 = cljs.core.seq.call(null,vec__29719);
var first__29721 = cljs.core.first.call(null,seq__29720);
var seq__29720__$1 = cljs.core.next.call(null,seq__29720);
var keyw = first__29721;
var args = seq__29720__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29722_29736 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29723_29737 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29724_29738 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29725_29739 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29724_29738);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29725_29739);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__28805__auto__ = "~w~:i";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29740__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29740 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29741__i = 0, G__29741__a = new Array(arguments.length -  0);
while (G__29741__i < G__29741__a.length) {G__29741__a[G__29741__i] = arguments[G__29741__i + 0]; ++G__29741__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29741__a,0,null);
} 
return G__29740__delegate.call(this,args__28807__auto__);};
G__29740.cljs$lang$maxFixedArity = 0;
G__29740.cljs$lang$applyTo = (function (arglist__29742){
var args__28807__auto__ = cljs.core.seq(arglist__29742);
return G__29740__delegate(args__28807__auto__);
});
G__29740.cljs$core$IFn$_invoke$arity$variadic = G__29740__delegate;
return G__29740;
=======
var vec__30221 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__30221,(0),null);
var end = cljs.core.nth.call(null,vec__30221,(1),null);
var vec__30224 = reference;
var seq__30225 = cljs.core.seq.call(null,vec__30224);
var first__30226 = cljs.core.first.call(null,seq__30225);
var seq__30225__$1 = cljs.core.next.call(null,seq__30225);
var keyw = first__30226;
var args = seq__30225__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30227_30241 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30228_30242 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30229_30243 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30230_30244 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30229_30243);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30230_30244);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__29310__auto__ = "~w~:i";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30245__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30245 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30246__i = 0, G__30246__a = new Array(arguments.length -  0);
while (G__30246__i < G__30246__a.length) {G__30246__a[G__30246__i] = arguments[G__30246__i + 0]; ++G__30246__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30246__a,0,null);
} 
return G__30245__delegate.call(this,args__29312__auto__);};
G__30245.cljs$lang$maxFixedArity = 0;
G__30245.cljs$lang$applyTo = (function (arglist__30247){
var args__29312__auto__ = cljs.core.seq(arglist__30247);
return G__30245__delegate(args__29312__auto__);
});
G__30245.cljs$core$IFn$_invoke$arity$variadic = G__30245__delegate;
return G__30245;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
})().call(null,keyw);

<<<<<<< HEAD
var args_29743__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_29743__$1)){
(function (){var format_in__28805__auto__ = " ";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return ((function (args_29743__$1,format_in__28805__auto__,cf__28806__auto__,_STAR_current_level_STAR__orig_val__29722_29736,_STAR_current_length_STAR__orig_val__29723_29737,_STAR_current_level_STAR__temp_val__29724_29738,_STAR_current_length_STAR__temp_val__29725_29739,vec__29716,start,end,vec__29719,seq__29720,first__29721,seq__29720__$1,keyw,args){
return (function() { 
var G__29744__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29744 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29745__i = 0, G__29745__a = new Array(arguments.length -  0);
while (G__29745__i < G__29745__a.length) {G__29745__a[G__29745__i] = arguments[G__29745__i + 0]; ++G__29745__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29745__a,0,null);
} 
return G__29744__delegate.call(this,args__28807__auto__);};
G__29744.cljs$lang$maxFixedArity = 0;
G__29744.cljs$lang$applyTo = (function (arglist__29746){
var args__28807__auto__ = cljs.core.seq(arglist__29746);
return G__29744__delegate(args__28807__auto__);
});
G__29744.cljs$core$IFn$_invoke$arity$variadic = G__29744__delegate;
return G__29744;
})()
;
;})(args_29743__$1,format_in__28805__auto__,cf__28806__auto__,_STAR_current_level_STAR__orig_val__29722_29736,_STAR_current_length_STAR__orig_val__29723_29737,_STAR_current_level_STAR__temp_val__29724_29738,_STAR_current_length_STAR__temp_val__29725_29739,vec__29716,start,end,vec__29719,seq__29720,first__29721,seq__29720__$1,keyw,args))
})().call(null);

var arg_29747 = cljs.core.first.call(null,args_29743__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_29747)){
var vec__29726_29748 = cljs.pprint.brackets.call(null,arg_29747);
var start_29749__$1 = cljs.core.nth.call(null,vec__29726_29748,(0),null);
var end_29750__$1 = cljs.core.nth.call(null,vec__29726_29748,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29729_29751 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29730_29752 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29731_29753 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29732_29754 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29731_29753);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29732_29754);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start_29749__$1,null,end_29750__$1);

if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_29747),(3))) && ((cljs.core.second.call(null,arg_29747) instanceof cljs.core.Keyword)))){
var vec__29733_29755 = arg_29747;
var ns_29756 = cljs.core.nth.call(null,vec__29733_29755,(0),null);
var kw_29757 = cljs.core.nth.call(null,vec__29733_29755,(1),null);
var lis_29758 = cljs.core.nth.call(null,vec__29733_29755,(2),null);
(function (){var format_in__28805__auto__ = "~w ~w ";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return ((function (args_29743__$1,format_in__28805__auto__,cf__28806__auto__,vec__29733_29755,ns_29756,kw_29757,lis_29758,_STAR_current_level_STAR__orig_val__29729_29751,_STAR_current_length_STAR__orig_val__29730_29752,_STAR_current_level_STAR__temp_val__29731_29753,_STAR_current_length_STAR__temp_val__29732_29754,vec__29726_29748,start_29749__$1,end_29750__$1,arg_29747,_STAR_current_level_STAR__orig_val__29722_29736,_STAR_current_length_STAR__orig_val__29723_29737,_STAR_current_level_STAR__temp_val__29724_29738,_STAR_current_length_STAR__temp_val__29725_29739,vec__29716,start,end,vec__29719,seq__29720,first__29721,seq__29720__$1,keyw,args){
return (function() { 
var G__29759__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29759 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29760__i = 0, G__29760__a = new Array(arguments.length -  0);
while (G__29760__i < G__29760__a.length) {G__29760__a[G__29760__i] = arguments[G__29760__i + 0]; ++G__29760__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29760__a,0,null);
} 
return G__29759__delegate.call(this,args__28807__auto__);};
G__29759.cljs$lang$maxFixedArity = 0;
G__29759.cljs$lang$applyTo = (function (arglist__29761){
var args__28807__auto__ = cljs.core.seq(arglist__29761);
return G__29759__delegate(args__28807__auto__);
});
G__29759.cljs$core$IFn$_invoke$arity$variadic = G__29759__delegate;
return G__29759;
})()
;
;})(args_29743__$1,format_in__28805__auto__,cf__28806__auto__,vec__29733_29755,ns_29756,kw_29757,lis_29758,_STAR_current_level_STAR__orig_val__29729_29751,_STAR_current_length_STAR__orig_val__29730_29752,_STAR_current_level_STAR__temp_val__29731_29753,_STAR_current_length_STAR__temp_val__29732_29754,vec__29726_29748,start_29749__$1,end_29750__$1,arg_29747,_STAR_current_level_STAR__orig_val__29722_29736,_STAR_current_length_STAR__orig_val__29723_29737,_STAR_current_level_STAR__temp_val__29724_29738,_STAR_current_length_STAR__temp_val__29725_29739,vec__29716,start,end,vec__29719,seq__29720,first__29721,seq__29720__$1,keyw,args))
})().call(null,ns_29756,kw_29757);

if(cljs.core.sequential_QMARK_.call(null,lis_29758)){
(function (){var format_in__28805__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_29758))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return ((function (args_29743__$1,format_in__28805__auto__,cf__28806__auto__,vec__29733_29755,ns_29756,kw_29757,lis_29758,_STAR_current_level_STAR__orig_val__29729_29751,_STAR_current_length_STAR__orig_val__29730_29752,_STAR_current_level_STAR__temp_val__29731_29753,_STAR_current_length_STAR__temp_val__29732_29754,vec__29726_29748,start_29749__$1,end_29750__$1,arg_29747,_STAR_current_level_STAR__orig_val__29722_29736,_STAR_current_length_STAR__orig_val__29723_29737,_STAR_current_level_STAR__temp_val__29724_29738,_STAR_current_length_STAR__temp_val__29725_29739,vec__29716,start,end,vec__29719,seq__29720,first__29721,seq__29720__$1,keyw,args){
return (function() { 
var G__29762__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29762 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29763__i = 0, G__29763__a = new Array(arguments.length -  0);
while (G__29763__i < G__29763__a.length) {G__29763__a[G__29763__i] = arguments[G__29763__i + 0]; ++G__29763__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29763__a,0,null);
} 
return G__29762__delegate.call(this,args__28807__auto__);};
G__29762.cljs$lang$maxFixedArity = 0;
G__29762.cljs$lang$applyTo = (function (arglist__29764){
var args__28807__auto__ = cljs.core.seq(arglist__29764);
return G__29762__delegate(args__28807__auto__);
});
G__29762.cljs$core$IFn$_invoke$arity$variadic = G__29762__delegate;
return G__29762;
})()
;
;})(args_29743__$1,format_in__28805__auto__,cf__28806__auto__,vec__29733_29755,ns_29756,kw_29757,lis_29758,_STAR_current_level_STAR__orig_val__29729_29751,_STAR_current_length_STAR__orig_val__29730_29752,_STAR_current_level_STAR__temp_val__29731_29753,_STAR_current_length_STAR__temp_val__29732_29754,vec__29726_29748,start_29749__$1,end_29750__$1,arg_29747,_STAR_current_level_STAR__orig_val__29722_29736,_STAR_current_length_STAR__orig_val__29723_29737,_STAR_current_level_STAR__temp_val__29724_29738,_STAR_current_length_STAR__temp_val__29725_29739,vec__29716,start,end,vec__29719,seq__29720,first__29721,seq__29720__$1,keyw,args))
})().call(null,lis_29758);
} else {
cljs.pprint.write_out.call(null,lis_29758);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__28805__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return ((function (args_29743__$1,format_in__28805__auto__,cf__28806__auto__,_STAR_current_level_STAR__orig_val__29729_29751,_STAR_current_length_STAR__orig_val__29730_29752,_STAR_current_level_STAR__temp_val__29731_29753,_STAR_current_length_STAR__temp_val__29732_29754,vec__29726_29748,start_29749__$1,end_29750__$1,arg_29747,_STAR_current_level_STAR__orig_val__29722_29736,_STAR_current_length_STAR__orig_val__29723_29737,_STAR_current_level_STAR__temp_val__29724_29738,_STAR_current_length_STAR__temp_val__29725_29739,vec__29716,start,end,vec__29719,seq__29720,first__29721,seq__29720__$1,keyw,args){
return (function() { 
var G__29765__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29765 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29766__i = 0, G__29766__a = new Array(arguments.length -  0);
while (G__29766__i < G__29766__a.length) {G__29766__a[G__29766__i] = arguments[G__29766__i + 0]; ++G__29766__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29766__a,0,null);
} 
return G__29765__delegate.call(this,args__28807__auto__);};
G__29765.cljs$lang$maxFixedArity = 0;
G__29765.cljs$lang$applyTo = (function (arglist__29767){
var args__28807__auto__ = cljs.core.seq(arglist__29767);
return G__29765__delegate(args__28807__auto__);
});
G__29765.cljs$core$IFn$_invoke$arity$variadic = G__29765__delegate;
return G__29765;
})()
;
;})(args_29743__$1,format_in__28805__auto__,cf__28806__auto__,_STAR_current_level_STAR__orig_val__29729_29751,_STAR_current_length_STAR__orig_val__29730_29752,_STAR_current_level_STAR__temp_val__29731_29753,_STAR_current_length_STAR__temp_val__29732_29754,vec__29726_29748,start_29749__$1,end_29750__$1,arg_29747,_STAR_current_level_STAR__orig_val__29722_29736,_STAR_current_length_STAR__orig_val__29723_29737,_STAR_current_level_STAR__temp_val__29724_29738,_STAR_current_length_STAR__temp_val__29725_29739,vec__29716,start,end,vec__29719,seq__29720,first__29721,seq__29720__$1,keyw,args))
})(),arg_29747);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29730_29752);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29729_29751);
}}


if(cljs.core.next.call(null,args_29743__$1)){
(function (){var format_in__28805__auto__ = "~_";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return ((function (args_29743__$1,format_in__28805__auto__,cf__28806__auto__,vec__29726_29748,start_29749__$1,end_29750__$1,arg_29747,_STAR_current_level_STAR__orig_val__29722_29736,_STAR_current_length_STAR__orig_val__29723_29737,_STAR_current_level_STAR__temp_val__29724_29738,_STAR_current_length_STAR__temp_val__29725_29739,vec__29716,start,end,vec__29719,seq__29720,first__29721,seq__29720__$1,keyw,args){
return (function() { 
var G__29768__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29768 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29769__i = 0, G__29769__a = new Array(arguments.length -  0);
while (G__29769__i < G__29769__a.length) {G__29769__a[G__29769__i] = arguments[G__29769__i + 0]; ++G__29769__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29769__a,0,null);
} 
return G__29768__delegate.call(this,args__28807__auto__);};
G__29768.cljs$lang$maxFixedArity = 0;
G__29768.cljs$lang$applyTo = (function (arglist__29770){
var args__28807__auto__ = cljs.core.seq(arglist__29770);
return G__29768__delegate(args__28807__auto__);
});
G__29768.cljs$core$IFn$_invoke$arity$variadic = G__29768__delegate;
return G__29768;
})()
;
;})(args_29743__$1,format_in__28805__auto__,cf__28806__auto__,vec__29726_29748,start_29749__$1,end_29750__$1,arg_29747,_STAR_current_level_STAR__orig_val__29722_29736,_STAR_current_length_STAR__orig_val__29723_29737,_STAR_current_level_STAR__temp_val__29724_29738,_STAR_current_length_STAR__temp_val__29725_29739,vec__29716,start,end,vec__29719,seq__29720,first__29721,seq__29720__$1,keyw,args))
=======
var args_30248__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_30248__$1)){
(function (){var format_in__29310__auto__ = " ";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return ((function (args_30248__$1,format_in__29310__auto__,cf__29311__auto__,_STAR_current_level_STAR__orig_val__30227_30241,_STAR_current_length_STAR__orig_val__30228_30242,_STAR_current_level_STAR__temp_val__30229_30243,_STAR_current_length_STAR__temp_val__30230_30244,vec__30221,start,end,vec__30224,seq__30225,first__30226,seq__30225__$1,keyw,args){
return (function() { 
var G__30249__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30249 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30250__i = 0, G__30250__a = new Array(arguments.length -  0);
while (G__30250__i < G__30250__a.length) {G__30250__a[G__30250__i] = arguments[G__30250__i + 0]; ++G__30250__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30250__a,0,null);
} 
return G__30249__delegate.call(this,args__29312__auto__);};
G__30249.cljs$lang$maxFixedArity = 0;
G__30249.cljs$lang$applyTo = (function (arglist__30251){
var args__29312__auto__ = cljs.core.seq(arglist__30251);
return G__30249__delegate(args__29312__auto__);
});
G__30249.cljs$core$IFn$_invoke$arity$variadic = G__30249__delegate;
return G__30249;
})()
;
;})(args_30248__$1,format_in__29310__auto__,cf__29311__auto__,_STAR_current_level_STAR__orig_val__30227_30241,_STAR_current_length_STAR__orig_val__30228_30242,_STAR_current_level_STAR__temp_val__30229_30243,_STAR_current_length_STAR__temp_val__30230_30244,vec__30221,start,end,vec__30224,seq__30225,first__30226,seq__30225__$1,keyw,args))
})().call(null);

var arg_30252 = cljs.core.first.call(null,args_30248__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_30252)){
var vec__30231_30253 = cljs.pprint.brackets.call(null,arg_30252);
var start_30254__$1 = cljs.core.nth.call(null,vec__30231_30253,(0),null);
var end_30255__$1 = cljs.core.nth.call(null,vec__30231_30253,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30234_30256 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30235_30257 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30236_30258 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30237_30259 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30236_30258);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30237_30259);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start_30254__$1,null,end_30255__$1);

if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_30252),(3))) && ((cljs.core.second.call(null,arg_30252) instanceof cljs.core.Keyword)))){
var vec__30238_30260 = arg_30252;
var ns_30261 = cljs.core.nth.call(null,vec__30238_30260,(0),null);
var kw_30262 = cljs.core.nth.call(null,vec__30238_30260,(1),null);
var lis_30263 = cljs.core.nth.call(null,vec__30238_30260,(2),null);
(function (){var format_in__29310__auto__ = "~w ~w ";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return ((function (args_30248__$1,format_in__29310__auto__,cf__29311__auto__,vec__30238_30260,ns_30261,kw_30262,lis_30263,_STAR_current_level_STAR__orig_val__30234_30256,_STAR_current_length_STAR__orig_val__30235_30257,_STAR_current_level_STAR__temp_val__30236_30258,_STAR_current_length_STAR__temp_val__30237_30259,vec__30231_30253,start_30254__$1,end_30255__$1,arg_30252,_STAR_current_level_STAR__orig_val__30227_30241,_STAR_current_length_STAR__orig_val__30228_30242,_STAR_current_level_STAR__temp_val__30229_30243,_STAR_current_length_STAR__temp_val__30230_30244,vec__30221,start,end,vec__30224,seq__30225,first__30226,seq__30225__$1,keyw,args){
return (function() { 
var G__30264__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30264 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30265__i = 0, G__30265__a = new Array(arguments.length -  0);
while (G__30265__i < G__30265__a.length) {G__30265__a[G__30265__i] = arguments[G__30265__i + 0]; ++G__30265__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30265__a,0,null);
} 
return G__30264__delegate.call(this,args__29312__auto__);};
G__30264.cljs$lang$maxFixedArity = 0;
G__30264.cljs$lang$applyTo = (function (arglist__30266){
var args__29312__auto__ = cljs.core.seq(arglist__30266);
return G__30264__delegate(args__29312__auto__);
});
G__30264.cljs$core$IFn$_invoke$arity$variadic = G__30264__delegate;
return G__30264;
})()
;
;})(args_30248__$1,format_in__29310__auto__,cf__29311__auto__,vec__30238_30260,ns_30261,kw_30262,lis_30263,_STAR_current_level_STAR__orig_val__30234_30256,_STAR_current_length_STAR__orig_val__30235_30257,_STAR_current_level_STAR__temp_val__30236_30258,_STAR_current_length_STAR__temp_val__30237_30259,vec__30231_30253,start_30254__$1,end_30255__$1,arg_30252,_STAR_current_level_STAR__orig_val__30227_30241,_STAR_current_length_STAR__orig_val__30228_30242,_STAR_current_level_STAR__temp_val__30229_30243,_STAR_current_length_STAR__temp_val__30230_30244,vec__30221,start,end,vec__30224,seq__30225,first__30226,seq__30225__$1,keyw,args))
})().call(null,ns_30261,kw_30262);

if(cljs.core.sequential_QMARK_.call(null,lis_30263)){
(function (){var format_in__29310__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_30263))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return ((function (args_30248__$1,format_in__29310__auto__,cf__29311__auto__,vec__30238_30260,ns_30261,kw_30262,lis_30263,_STAR_current_level_STAR__orig_val__30234_30256,_STAR_current_length_STAR__orig_val__30235_30257,_STAR_current_level_STAR__temp_val__30236_30258,_STAR_current_length_STAR__temp_val__30237_30259,vec__30231_30253,start_30254__$1,end_30255__$1,arg_30252,_STAR_current_level_STAR__orig_val__30227_30241,_STAR_current_length_STAR__orig_val__30228_30242,_STAR_current_level_STAR__temp_val__30229_30243,_STAR_current_length_STAR__temp_val__30230_30244,vec__30221,start,end,vec__30224,seq__30225,first__30226,seq__30225__$1,keyw,args){
return (function() { 
var G__30267__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30267 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30268__i = 0, G__30268__a = new Array(arguments.length -  0);
while (G__30268__i < G__30268__a.length) {G__30268__a[G__30268__i] = arguments[G__30268__i + 0]; ++G__30268__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30268__a,0,null);
} 
return G__30267__delegate.call(this,args__29312__auto__);};
G__30267.cljs$lang$maxFixedArity = 0;
G__30267.cljs$lang$applyTo = (function (arglist__30269){
var args__29312__auto__ = cljs.core.seq(arglist__30269);
return G__30267__delegate(args__29312__auto__);
});
G__30267.cljs$core$IFn$_invoke$arity$variadic = G__30267__delegate;
return G__30267;
})()
;
;})(args_30248__$1,format_in__29310__auto__,cf__29311__auto__,vec__30238_30260,ns_30261,kw_30262,lis_30263,_STAR_current_level_STAR__orig_val__30234_30256,_STAR_current_length_STAR__orig_val__30235_30257,_STAR_current_level_STAR__temp_val__30236_30258,_STAR_current_length_STAR__temp_val__30237_30259,vec__30231_30253,start_30254__$1,end_30255__$1,arg_30252,_STAR_current_level_STAR__orig_val__30227_30241,_STAR_current_length_STAR__orig_val__30228_30242,_STAR_current_level_STAR__temp_val__30229_30243,_STAR_current_length_STAR__temp_val__30230_30244,vec__30221,start,end,vec__30224,seq__30225,first__30226,seq__30225__$1,keyw,args))
})().call(null,lis_30263);
} else {
cljs.pprint.write_out.call(null,lis_30263);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__29310__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return ((function (args_30248__$1,format_in__29310__auto__,cf__29311__auto__,_STAR_current_level_STAR__orig_val__30234_30256,_STAR_current_length_STAR__orig_val__30235_30257,_STAR_current_level_STAR__temp_val__30236_30258,_STAR_current_length_STAR__temp_val__30237_30259,vec__30231_30253,start_30254__$1,end_30255__$1,arg_30252,_STAR_current_level_STAR__orig_val__30227_30241,_STAR_current_length_STAR__orig_val__30228_30242,_STAR_current_level_STAR__temp_val__30229_30243,_STAR_current_length_STAR__temp_val__30230_30244,vec__30221,start,end,vec__30224,seq__30225,first__30226,seq__30225__$1,keyw,args){
return (function() { 
var G__30270__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30270 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30271__i = 0, G__30271__a = new Array(arguments.length -  0);
while (G__30271__i < G__30271__a.length) {G__30271__a[G__30271__i] = arguments[G__30271__i + 0]; ++G__30271__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30271__a,0,null);
} 
return G__30270__delegate.call(this,args__29312__auto__);};
G__30270.cljs$lang$maxFixedArity = 0;
G__30270.cljs$lang$applyTo = (function (arglist__30272){
var args__29312__auto__ = cljs.core.seq(arglist__30272);
return G__30270__delegate(args__29312__auto__);
});
G__30270.cljs$core$IFn$_invoke$arity$variadic = G__30270__delegate;
return G__30270;
})()
;
;})(args_30248__$1,format_in__29310__auto__,cf__29311__auto__,_STAR_current_level_STAR__orig_val__30234_30256,_STAR_current_length_STAR__orig_val__30235_30257,_STAR_current_level_STAR__temp_val__30236_30258,_STAR_current_length_STAR__temp_val__30237_30259,vec__30231_30253,start_30254__$1,end_30255__$1,arg_30252,_STAR_current_level_STAR__orig_val__30227_30241,_STAR_current_length_STAR__orig_val__30228_30242,_STAR_current_level_STAR__temp_val__30229_30243,_STAR_current_length_STAR__temp_val__30230_30244,vec__30221,start,end,vec__30224,seq__30225,first__30226,seq__30225__$1,keyw,args))
})(),arg_30252);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30235_30257);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30234_30256);
}}


if(cljs.core.next.call(null,args_30248__$1)){
(function (){var format_in__29310__auto__ = "~_";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return ((function (args_30248__$1,format_in__29310__auto__,cf__29311__auto__,vec__30231_30253,start_30254__$1,end_30255__$1,arg_30252,_STAR_current_level_STAR__orig_val__30227_30241,_STAR_current_length_STAR__orig_val__30228_30242,_STAR_current_level_STAR__temp_val__30229_30243,_STAR_current_length_STAR__temp_val__30230_30244,vec__30221,start,end,vec__30224,seq__30225,first__30226,seq__30225__$1,keyw,args){
return (function() { 
var G__30273__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30273 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30274__i = 0, G__30274__a = new Array(arguments.length -  0);
while (G__30274__i < G__30274__a.length) {G__30274__a[G__30274__i] = arguments[G__30274__i + 0]; ++G__30274__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30274__a,0,null);
} 
return G__30273__delegate.call(this,args__29312__auto__);};
G__30273.cljs$lang$maxFixedArity = 0;
G__30273.cljs$lang$applyTo = (function (arglist__30275){
var args__29312__auto__ = cljs.core.seq(arglist__30275);
return G__30273__delegate(args__29312__auto__);
});
G__30273.cljs$core$IFn$_invoke$arity$variadic = G__30273__delegate;
return G__30273;
})()
;
;})(args_30248__$1,format_in__29310__auto__,cf__29311__auto__,vec__30231_30253,start_30254__$1,end_30255__$1,arg_30252,_STAR_current_level_STAR__orig_val__30227_30241,_STAR_current_length_STAR__orig_val__30228_30242,_STAR_current_level_STAR__temp_val__30229_30243,_STAR_current_length_STAR__temp_val__30230_30244,vec__30221,start,end,vec__30224,seq__30225,first__30226,seq__30225__$1,keyw,args))
>>>>>>> 8f3c68a (Initial Commit)
})().call(null);
} else {
}
} else {
<<<<<<< HEAD
cljs.pprint.write_out.call(null,arg_29747);

if(cljs.core.next.call(null,args_29743__$1)){
(function (){var format_in__28805__auto__ = "~:_";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return ((function (args_29743__$1,format_in__28805__auto__,cf__28806__auto__,arg_29747,_STAR_current_level_STAR__orig_val__29722_29736,_STAR_current_length_STAR__orig_val__29723_29737,_STAR_current_level_STAR__temp_val__29724_29738,_STAR_current_length_STAR__temp_val__29725_29739,vec__29716,start,end,vec__29719,seq__29720,first__29721,seq__29720__$1,keyw,args){
return (function() { 
var G__29771__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29771 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29772__i = 0, G__29772__a = new Array(arguments.length -  0);
while (G__29772__i < G__29772__a.length) {G__29772__a[G__29772__i] = arguments[G__29772__i + 0]; ++G__29772__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29772__a,0,null);
} 
return G__29771__delegate.call(this,args__28807__auto__);};
G__29771.cljs$lang$maxFixedArity = 0;
G__29771.cljs$lang$applyTo = (function (arglist__29773){
var args__28807__auto__ = cljs.core.seq(arglist__29773);
return G__29771__delegate(args__28807__auto__);
});
G__29771.cljs$core$IFn$_invoke$arity$variadic = G__29771__delegate;
return G__29771;
})()
;
;})(args_29743__$1,format_in__28805__auto__,cf__28806__auto__,arg_29747,_STAR_current_level_STAR__orig_val__29722_29736,_STAR_current_length_STAR__orig_val__29723_29737,_STAR_current_level_STAR__temp_val__29724_29738,_STAR_current_length_STAR__temp_val__29725_29739,vec__29716,start,end,vec__29719,seq__29720,first__29721,seq__29720__$1,keyw,args))
=======
cljs.pprint.write_out.call(null,arg_30252);

if(cljs.core.next.call(null,args_30248__$1)){
(function (){var format_in__29310__auto__ = "~:_";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return ((function (args_30248__$1,format_in__29310__auto__,cf__29311__auto__,arg_30252,_STAR_current_level_STAR__orig_val__30227_30241,_STAR_current_length_STAR__orig_val__30228_30242,_STAR_current_level_STAR__temp_val__30229_30243,_STAR_current_length_STAR__temp_val__30230_30244,vec__30221,start,end,vec__30224,seq__30225,first__30226,seq__30225__$1,keyw,args){
return (function() { 
var G__30276__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30276 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30277__i = 0, G__30277__a = new Array(arguments.length -  0);
while (G__30277__i < G__30277__a.length) {G__30277__a[G__30277__i] = arguments[G__30277__i + 0]; ++G__30277__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30277__a,0,null);
} 
return G__30276__delegate.call(this,args__29312__auto__);};
G__30276.cljs$lang$maxFixedArity = 0;
G__30276.cljs$lang$applyTo = (function (arglist__30278){
var args__29312__auto__ = cljs.core.seq(arglist__30278);
return G__30276__delegate(args__29312__auto__);
});
G__30276.cljs$core$IFn$_invoke$arity$variadic = G__30276__delegate;
return G__30276;
})()
;
;})(args_30248__$1,format_in__29310__auto__,cf__29311__auto__,arg_30252,_STAR_current_level_STAR__orig_val__30227_30241,_STAR_current_length_STAR__orig_val__30228_30242,_STAR_current_level_STAR__temp_val__30229_30243,_STAR_current_length_STAR__temp_val__30230_30244,vec__30221,start,end,vec__30224,seq__30225,first__30226,seq__30225__$1,keyw,args))
>>>>>>> 8f3c68a (Initial Commit)
})().call(null);
} else {
}
}

<<<<<<< HEAD
var G__29774 = cljs.core.next.call(null,args_29743__$1);
args_29743__$1 = G__29774;
=======
var G__30279 = cljs.core.next.call(null,args_30248__$1);
args_30248__$1 = G__30279;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29723_29737);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29722_29736);
=======
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30228_30242);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30227_30241);
>>>>>>> 8f3c68a (Initial Commit)
}}

return null;
} else {
return cljs.pprint.write_out.call(null,reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next.call(null,alis)){
<<<<<<< HEAD
var vec__29775 = alis;
var seq__29776 = cljs.core.seq.call(null,vec__29775);
var first__29777 = cljs.core.first.call(null,seq__29776);
var seq__29776__$1 = cljs.core.next.call(null,seq__29776);
var ns_sym = first__29777;
var first__29777__$1 = cljs.core.first.call(null,seq__29776__$1);
var seq__29776__$2 = cljs.core.next.call(null,seq__29776__$1);
var ns_name = first__29777__$1;
var stuff = seq__29776__$2;
var vec__29778 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__29778,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__29778,(1),null);
var vec__29781 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__29781,(0),null);
var references = cljs.core.nth.call(null,vec__29781,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29784_29788 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29785_29789 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29786_29790 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29787_29791 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29786_29790);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29787_29791);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__28805__auto__ = "~w ~1I~@_~w";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29792__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29792 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29793__i = 0, G__29793__a = new Array(arguments.length -  0);
while (G__29793__i < G__29793__a.length) {G__29793__a[G__29793__i] = arguments[G__29793__i + 0]; ++G__29793__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29793__a,0,null);
} 
return G__29792__delegate.call(this,args__28807__auto__);};
G__29792.cljs$lang$maxFixedArity = 0;
G__29792.cljs$lang$applyTo = (function (arglist__29794){
var args__28807__auto__ = cljs.core.seq(arglist__29794);
return G__29792__delegate(args__28807__auto__);
});
G__29792.cljs$core$IFn$_invoke$arity$variadic = G__29792__delegate;
return G__29792;
=======
var vec__30280 = alis;
var seq__30281 = cljs.core.seq.call(null,vec__30280);
var first__30282 = cljs.core.first.call(null,seq__30281);
var seq__30281__$1 = cljs.core.next.call(null,seq__30281);
var ns_sym = first__30282;
var first__30282__$1 = cljs.core.first.call(null,seq__30281__$1);
var seq__30281__$2 = cljs.core.next.call(null,seq__30281__$1);
var ns_name = first__30282__$1;
var stuff = seq__30281__$2;
var vec__30283 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__30283,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__30283,(1),null);
var vec__30286 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__30286,(0),null);
var references = cljs.core.nth.call(null,vec__30286,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30289_30293 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30290_30294 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30291_30295 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30292_30296 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30291_30295);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30292_30296);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__29310__auto__ = "~w ~1I~@_~w";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30297__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30297 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30298__i = 0, G__30298__a = new Array(arguments.length -  0);
while (G__30298__i < G__30298__a.length) {G__30298__a[G__30298__i] = arguments[G__30298__i + 0]; ++G__30298__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30298__a,0,null);
} 
return G__30297__delegate.call(this,args__29312__auto__);};
G__30297.cljs$lang$maxFixedArity = 0;
G__30297.cljs$lang$applyTo = (function (arglist__30299){
var args__29312__auto__ = cljs.core.seq(arglist__30299);
return G__30297__delegate(args__29312__auto__);
});
G__30297.cljs$core$IFn$_invoke$arity$variadic = G__30297__delegate;
return G__30297;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__4126__auto__ = doc_str;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = attr_map;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.seq.call(null,references);
}
}
})())){
<<<<<<< HEAD
(function (){var format_in__28805__auto__ = "~@:_";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29795__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29795 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29796__i = 0, G__29796__a = new Array(arguments.length -  0);
while (G__29796__i < G__29796__a.length) {G__29796__a[G__29796__i] = arguments[G__29796__i + 0]; ++G__29796__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29796__a,0,null);
} 
return G__29795__delegate.call(this,args__28807__auto__);};
G__29795.cljs$lang$maxFixedArity = 0;
G__29795.cljs$lang$applyTo = (function (arglist__29797){
var args__28807__auto__ = cljs.core.seq(arglist__29797);
return G__29795__delegate(args__28807__auto__);
});
G__29795.cljs$core$IFn$_invoke$arity$variadic = G__29795__delegate;
return G__29795;
=======
(function (){var format_in__29310__auto__ = "~@:_";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30300__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30300 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30301__i = 0, G__30301__a = new Array(arguments.length -  0);
while (G__30301__i < G__30301__a.length) {G__30301__a[G__30301__i] = arguments[G__30301__i + 0]; ++G__30301__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30301__a,0,null);
} 
return G__30300__delegate.call(this,args__29312__auto__);};
G__30300.cljs$lang$maxFixedArity = 0;
G__30300.cljs$lang$applyTo = (function (arglist__30302){
var args__29312__auto__ = cljs.core.seq(arglist__30302);
return G__30300__delegate(args__29312__auto__);
});
G__30300.cljs$core$IFn$_invoke$arity$variadic = G__30300__delegate;
return G__30300;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.call(null,true,"\"~a\"~:[~;~:@_~]",doc_str,(function (){var or__4126__auto__ = attr_map;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.seq.call(null,references);
}
})());
} else {
}

if(cljs.core.truth_(attr_map)){
<<<<<<< HEAD
(function (){var format_in__28805__auto__ = "~w~:[~;~:@_~]";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29798__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29798 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29799__i = 0, G__29799__a = new Array(arguments.length -  0);
while (G__29799__i < G__29799__a.length) {G__29799__a[G__29799__i] = arguments[G__29799__i + 0]; ++G__29799__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29799__a,0,null);
} 
return G__29798__delegate.call(this,args__28807__auto__);};
G__29798.cljs$lang$maxFixedArity = 0;
G__29798.cljs$lang$applyTo = (function (arglist__29800){
var args__28807__auto__ = cljs.core.seq(arglist__29800);
return G__29798__delegate(args__28807__auto__);
});
G__29798.cljs$core$IFn$_invoke$arity$variadic = G__29798__delegate;
return G__29798;
=======
(function (){var format_in__29310__auto__ = "~w~:[~;~:@_~]";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30303__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30303 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30304__i = 0, G__30304__a = new Array(arguments.length -  0);
while (G__30304__i < G__30304__a.length) {G__30304__a[G__30304__i] = arguments[G__30304__i + 0]; ++G__30304__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30304__a,0,null);
} 
return G__30303__delegate.call(this,args__29312__auto__);};
G__30303.cljs$lang$maxFixedArity = 0;
G__30303.cljs$lang$applyTo = (function (arglist__30305){
var args__29312__auto__ = cljs.core.seq(arglist__30305);
return G__30303__delegate(args__29312__auto__);
});
G__30303.cljs$core$IFn$_invoke$arity$variadic = G__30303__delegate;
return G__30303;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
})().call(null,attr_map,cljs.core.seq.call(null,references));
} else {
}

<<<<<<< HEAD
var references_29801__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_29801__$1));

var temp__5720__auto___29802 = cljs.core.next.call(null,references_29801__$1);
if(temp__5720__auto___29802){
var references_29803__$2 = temp__5720__auto___29802;
cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__29804 = references_29803__$2;
references_29801__$1 = G__29804;
=======
var references_30306__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_30306__$1));

var temp__5720__auto___30307 = cljs.core.next.call(null,references_30306__$1);
if(temp__5720__auto___30307){
var references_30308__$2 = temp__5720__auto___30307;
cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__30309 = references_30308__$2;
references_30306__$1 = G__30309;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29785_29789);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29784_29788);
=======
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30290_30294);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30289_30293);
>>>>>>> 8f3c68a (Initial Commit)
}}

return null;
} else {
return cljs.pprint.write_out.call(null,alis);
}
});
<<<<<<< HEAD
cljs.pprint.pprint_hold_first = (function (){var format_in__28805__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29805__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29805 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29806__i = 0, G__29806__a = new Array(arguments.length -  0);
while (G__29806__i < G__29806__a.length) {G__29806__a[G__29806__i] = arguments[G__29806__i + 0]; ++G__29806__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29806__a,0,null);
} 
return G__29805__delegate.call(this,args__28807__auto__);};
G__29805.cljs$lang$maxFixedArity = 0;
G__29805.cljs$lang$applyTo = (function (arglist__29807){
var args__28807__auto__ = cljs.core.seq(arglist__29807);
return G__29805__delegate(args__28807__auto__);
});
G__29805.cljs$core$IFn$_invoke$arity$variadic = G__29805__delegate;
return G__29805;
=======
cljs.pprint.pprint_hold_first = (function (){var format_in__29310__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30310__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30310 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30311__i = 0, G__30311__a = new Array(arguments.length -  0);
while (G__30311__i < G__30311__a.length) {G__30311__a[G__30311__i] = arguments[G__30311__i + 0]; ++G__30311__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30311__a,0,null);
} 
return G__30310__delegate.call(this,args__29312__auto__);};
G__30310.cljs$lang$maxFixedArity = 0;
G__30310.cljs$lang$applyTo = (function (arglist__30312){
var args__29312__auto__ = cljs.core.seq(arglist__30312);
return G__30310__delegate(args__29312__auto__);
});
G__30310.cljs$core$IFn$_invoke$arity$variadic = G__30310__delegate;
return G__30310;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
<<<<<<< HEAD
(function (){var format_in__28805__auto__ = " ~_";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29808__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29808 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29809__i = 0, G__29809__a = new Array(arguments.length -  0);
while (G__29809__i < G__29809__a.length) {G__29809__a[G__29809__i] = arguments[G__29809__i + 0]; ++G__29809__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29809__a,0,null);
} 
return G__29808__delegate.call(this,args__28807__auto__);};
G__29808.cljs$lang$maxFixedArity = 0;
G__29808.cljs$lang$applyTo = (function (arglist__29810){
var args__28807__auto__ = cljs.core.seq(arglist__29810);
return G__29808__delegate(args__28807__auto__);
});
G__29808.cljs$core$IFn$_invoke$arity$variadic = G__29808__delegate;
return G__29808;
=======
(function (){var format_in__29310__auto__ = " ~_";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30313__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30313 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30314__i = 0, G__30314__a = new Array(arguments.length -  0);
while (G__30314__i < G__30314__a.length) {G__30314__a[G__30314__i] = arguments[G__30314__i + 0]; ++G__30314__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30314__a,0,null);
} 
return G__30313__delegate.call(this,args__29312__auto__);};
G__30313.cljs$lang$maxFixedArity = 0;
G__30313.cljs$lang$applyTo = (function (arglist__30315){
var args__29312__auto__ = cljs.core.seq(arglist__30315);
return G__30313__delegate(args__29312__auto__);
});
G__30313.cljs$core$IFn$_invoke$arity$variadic = G__30313__delegate;
return G__30313;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
})().call(null);
} else {
<<<<<<< HEAD
(function (){var format_in__28805__auto__ = " ~@_";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29811__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29811 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29812__i = 0, G__29812__a = new Array(arguments.length -  0);
while (G__29812__i < G__29812__a.length) {G__29812__a[G__29812__i] = arguments[G__29812__i + 0]; ++G__29812__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29812__a,0,null);
} 
return G__29811__delegate.call(this,args__28807__auto__);};
G__29811.cljs$lang$maxFixedArity = 0;
G__29811.cljs$lang$applyTo = (function (arglist__29813){
var args__28807__auto__ = cljs.core.seq(arglist__29813);
return G__29811__delegate(args__28807__auto__);
});
G__29811.cljs$core$IFn$_invoke$arity$variadic = G__29811__delegate;
return G__29811;
=======
(function (){var format_in__29310__auto__ = " ~@_";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30316__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30316 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30317__i = 0, G__30317__a = new Array(arguments.length -  0);
while (G__30317__i < G__30317__a.length) {G__30317__a[G__30317__i] = arguments[G__30317__i + 0]; ++G__30317__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30317__a,0,null);
} 
return G__30316__delegate.call(this,args__29312__auto__);};
G__30316.cljs$lang$maxFixedArity = 0;
G__30316.cljs$lang$applyTo = (function (arglist__30318){
var args__29312__auto__ = cljs.core.seq(arglist__30318);
return G__30316__delegate(args__29312__auto__);
});
G__30316.cljs$core$IFn$_invoke$arity$variadic = G__30316__delegate;
return G__30316;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
})().call(null);
}

<<<<<<< HEAD
return (function (){var format_in__28805__auto__ = "~{~w~^ ~_~}";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29814__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29814 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29815__i = 0, G__29815__a = new Array(arguments.length -  0);
while (G__29815__i < G__29815__a.length) {G__29815__a[G__29815__i] = arguments[G__29815__i + 0]; ++G__29815__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29815__a,0,null);
} 
return G__29814__delegate.call(this,args__28807__auto__);};
G__29814.cljs$lang$maxFixedArity = 0;
G__29814.cljs$lang$applyTo = (function (arglist__29816){
var args__28807__auto__ = cljs.core.seq(arglist__29816);
return G__29814__delegate(args__28807__auto__);
});
G__29814.cljs$core$IFn$_invoke$arity$variadic = G__29814__delegate;
return G__29814;
=======
return (function (){var format_in__29310__auto__ = "~{~w~^ ~_~}";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30319__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30319 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30320__i = 0, G__30320__a = new Array(arguments.length -  0);
while (G__30320__i < G__30320__a.length) {G__30320__a[G__30320__i] = arguments[G__30320__i + 0]; ++G__30320__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30320__a,0,null);
} 
return G__30319__delegate.call(this,args__29312__auto__);};
G__30319.cljs$lang$maxFixedArity = 0;
G__30319.cljs$lang$applyTo = (function (arglist__30321){
var args__29312__auto__ = cljs.core.seq(arglist__30321);
return G__30319__delegate(args__29312__auto__);
});
G__30319.cljs$core$IFn$_invoke$arity$variadic = G__30319__delegate;
return G__30319;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
<<<<<<< HEAD
return (function (){var format_in__28805__auto__ = " ~_~{~w~^ ~_~}";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29817__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29817 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29818__i = 0, G__29818__a = new Array(arguments.length -  0);
while (G__29818__i < G__29818__a.length) {G__29818__a[G__29818__i] = arguments[G__29818__i + 0]; ++G__29818__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29818__a,0,null);
} 
return G__29817__delegate.call(this,args__28807__auto__);};
G__29817.cljs$lang$maxFixedArity = 0;
G__29817.cljs$lang$applyTo = (function (arglist__29819){
var args__28807__auto__ = cljs.core.seq(arglist__29819);
return G__29817__delegate(args__28807__auto__);
});
G__29817.cljs$core$IFn$_invoke$arity$variadic = G__29817__delegate;
return G__29817;
=======
return (function (){var format_in__29310__auto__ = " ~_~{~w~^ ~_~}";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30322__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30322 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30323__i = 0, G__30323__a = new Array(arguments.length -  0);
while (G__30323__i < G__30323__a.length) {G__30323__a[G__30323__i] = arguments[G__30323__i + 0]; ++G__30323__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30323__a,0,null);
} 
return G__30322__delegate.call(this,args__29312__auto__);};
G__30322.cljs$lang$maxFixedArity = 0;
G__30322.cljs$lang$applyTo = (function (arglist__30324){
var args__29312__auto__ = cljs.core.seq(arglist__30324);
return G__30322__delegate(args__29312__auto__);
});
G__30322.cljs$core$IFn$_invoke$arity$variadic = G__30322__delegate;
return G__30322;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next.call(null,alis)){
<<<<<<< HEAD
var vec__29820 = alis;
var seq__29821 = cljs.core.seq.call(null,vec__29820);
var first__29822 = cljs.core.first.call(null,seq__29821);
var seq__29821__$1 = cljs.core.next.call(null,seq__29821);
var defn_sym = first__29822;
var first__29822__$1 = cljs.core.first.call(null,seq__29821__$1);
var seq__29821__$2 = cljs.core.next.call(null,seq__29821__$1);
var defn_name = first__29822__$1;
var stuff = seq__29821__$2;
var vec__29823 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__29823,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__29823,(1),null);
var vec__29826 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__29826,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__29826,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29829_29833 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29830_29834 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29831_29835 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29832_29836 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29831_29835);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29832_29836);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__28805__auto__ = "~w ~1I~@_~w";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29837__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29837 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29838__i = 0, G__29838__a = new Array(arguments.length -  0);
while (G__29838__i < G__29838__a.length) {G__29838__a[G__29838__i] = arguments[G__29838__i + 0]; ++G__29838__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29838__a,0,null);
} 
return G__29837__delegate.call(this,args__28807__auto__);};
G__29837.cljs$lang$maxFixedArity = 0;
G__29837.cljs$lang$applyTo = (function (arglist__29839){
var args__28807__auto__ = cljs.core.seq(arglist__29839);
return G__29837__delegate(args__28807__auto__);
});
G__29837.cljs$core$IFn$_invoke$arity$variadic = G__29837__delegate;
return G__29837;
=======
var vec__30325 = alis;
var seq__30326 = cljs.core.seq.call(null,vec__30325);
var first__30327 = cljs.core.first.call(null,seq__30326);
var seq__30326__$1 = cljs.core.next.call(null,seq__30326);
var defn_sym = first__30327;
var first__30327__$1 = cljs.core.first.call(null,seq__30326__$1);
var seq__30326__$2 = cljs.core.next.call(null,seq__30326__$1);
var defn_name = first__30327__$1;
var stuff = seq__30326__$2;
var vec__30328 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__30328,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__30328,(1),null);
var vec__30331 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__30331,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__30331,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30334_30338 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30335_30339 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30336_30340 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30337_30341 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30336_30340);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30337_30341);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__29310__auto__ = "~w ~1I~@_~w";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30342__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30342 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30343__i = 0, G__30343__a = new Array(arguments.length -  0);
while (G__30343__i < G__30343__a.length) {G__30343__a[G__30343__i] = arguments[G__30343__i + 0]; ++G__30343__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30343__a,0,null);
} 
return G__30342__delegate.call(this,args__29312__auto__);};
G__30342.cljs$lang$maxFixedArity = 0;
G__30342.cljs$lang$applyTo = (function (arglist__30344){
var args__29312__auto__ = cljs.core.seq(arglist__30344);
return G__30342__delegate(args__29312__auto__);
});
G__30342.cljs$core$IFn$_invoke$arity$variadic = G__30342__delegate;
return G__30342;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
<<<<<<< HEAD
(function (){var format_in__28805__auto__ = " ~_~w";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29840__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29840 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29841__i = 0, G__29841__a = new Array(arguments.length -  0);
while (G__29841__i < G__29841__a.length) {G__29841__a[G__29841__i] = arguments[G__29841__i + 0]; ++G__29841__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29841__a,0,null);
} 
return G__29840__delegate.call(this,args__28807__auto__);};
G__29840.cljs$lang$maxFixedArity = 0;
G__29840.cljs$lang$applyTo = (function (arglist__29842){
var args__28807__auto__ = cljs.core.seq(arglist__29842);
return G__29840__delegate(args__28807__auto__);
});
G__29840.cljs$core$IFn$_invoke$arity$variadic = G__29840__delegate;
return G__29840;
=======
(function (){var format_in__29310__auto__ = " ~_~w";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30345__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30345 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30346__i = 0, G__30346__a = new Array(arguments.length -  0);
while (G__30346__i < G__30346__a.length) {G__30346__a[G__30346__i] = arguments[G__30346__i + 0]; ++G__30346__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30346__a,0,null);
} 
return G__30345__delegate.call(this,args__29312__auto__);};
G__30345.cljs$lang$maxFixedArity = 0;
G__30345.cljs$lang$applyTo = (function (arglist__30347){
var args__29312__auto__ = cljs.core.seq(arglist__30347);
return G__30345__delegate(args__29312__auto__);
});
G__30345.cljs$core$IFn$_invoke$arity$variadic = G__30345__delegate;
return G__30345;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
<<<<<<< HEAD
(function (){var format_in__28805__auto__ = " ~_~w";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29843__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29843 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29844__i = 0, G__29844__a = new Array(arguments.length -  0);
while (G__29844__i < G__29844__a.length) {G__29844__a[G__29844__i] = arguments[G__29844__i + 0]; ++G__29844__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29844__a,0,null);
} 
return G__29843__delegate.call(this,args__28807__auto__);};
G__29843.cljs$lang$maxFixedArity = 0;
G__29843.cljs$lang$applyTo = (function (arglist__29845){
var args__28807__auto__ = cljs.core.seq(arglist__29845);
return G__29843__delegate(args__28807__auto__);
});
G__29843.cljs$core$IFn$_invoke$arity$variadic = G__29843__delegate;
return G__29843;
=======
(function (){var format_in__29310__auto__ = " ~_~w";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30348__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30348 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30349__i = 0, G__30349__a = new Array(arguments.length -  0);
while (G__30349__i < G__30349__a.length) {G__30349__a[G__30349__i] = arguments[G__30349__i + 0]; ++G__30349__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30349__a,0,null);
} 
return G__30348__delegate.call(this,args__29312__auto__);};
G__30348.cljs$lang$maxFixedArity = 0;
G__30348.cljs$lang$applyTo = (function (arglist__30350){
var args__29312__auto__ = cljs.core.seq(arglist__30350);
return G__30348__delegate(args__29312__auto__);
});
G__30348.cljs$core$IFn$_invoke$arity$variadic = G__30348__delegate;
return G__30348;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,stuff__$2))){
cljs.pprint.single_defn.call(null,stuff__$2,(function (){var or__4126__auto__ = doc_str;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn.call(null,stuff__$2,(function (){var or__4126__auto__ = doc_str;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29830_29834);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29829_29833);
=======
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30335_30339);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30334_30338);
>>>>>>> 8f3c68a (Initial Commit)
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
<<<<<<< HEAD
var _STAR_current_level_STAR__orig_val__29846_29855 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29847_29856 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29848_29857 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29849_29858 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29848_29857);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29849_29858);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count29850_29859 = (0);
var binding_29860 = binding_vec;
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count29850_29859 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq.call(null,binding_29860)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29851_29861 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29852_29862 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29853_29863 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29854_29864 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29853_29863);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29854_29864);
=======
var _STAR_current_level_STAR__orig_val__30351_30360 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30352_30361 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30353_30362 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30354_30363 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30353_30362);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30354_30363);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count30355_30364 = (0);
var binding_30365 = binding_vec;
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count30355_30364 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq.call(null,binding_30365)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30356_30366 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30357_30367 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30358_30368 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30359_30369 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30358_30368);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30359_30369);
>>>>>>> 8f3c68a (Initial Commit)

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


<<<<<<< HEAD
cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_29860));

if(cljs.core.next.call(null,binding_29860)){
=======
cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_30365));

if(cljs.core.next.call(null,binding_30365)){
>>>>>>> 8f3c68a (Initial Commit)
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

<<<<<<< HEAD
cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_29860));
=======
cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_30365));
>>>>>>> 8f3c68a (Initial Commit)
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29852_29862);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29851_29861);
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_29860))){
=======
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30357_30367);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30356_30366);
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_30365))){
>>>>>>> 8f3c68a (Initial Commit)
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

<<<<<<< HEAD
var G__29865 = (length_count29850_29859 + (1));
var G__29866 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_29860));
length_count29850_29859 = G__29865;
binding_29860 = G__29866;
=======
var G__30370 = (length_count30355_30364 + (1));
var G__30371 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_30365));
length_count30355_30364 = G__30370;
binding_30365 = G__30371;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29847_29856);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29846_29855);
=======
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30352_30361);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30351_30360);
>>>>>>> 8f3c68a (Initial Commit)
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first.call(null,alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
<<<<<<< HEAD
var _STAR_current_level_STAR__orig_val__29867_29871 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29868_29872 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29869_29873 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29870_29874 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29869_29873);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29870_29874);
=======
var _STAR_current_level_STAR__orig_val__30372_30376 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30373_30377 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30374_30378 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30375_30379 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30374_30378);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30375_30379);
>>>>>>> 8f3c68a (Initial Commit)

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next.call(null,alis)) && (cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,alis))))){
<<<<<<< HEAD
(function (){var format_in__28805__auto__ = "~w ~1I~@_";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29875__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29875 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29876__i = 0, G__29876__a = new Array(arguments.length -  0);
while (G__29876__i < G__29876__a.length) {G__29876__a[G__29876__i] = arguments[G__29876__i + 0]; ++G__29876__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29876__a,0,null);
} 
return G__29875__delegate.call(this,args__28807__auto__);};
G__29875.cljs$lang$maxFixedArity = 0;
G__29875.cljs$lang$applyTo = (function (arglist__29877){
var args__28807__auto__ = cljs.core.seq(arglist__29877);
return G__29875__delegate(args__28807__auto__);
});
G__29875.cljs$core$IFn$_invoke$arity$variadic = G__29875__delegate;
return G__29875;
=======
(function (){var format_in__29310__auto__ = "~w ~1I~@_";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30380__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30380 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30381__i = 0, G__30381__a = new Array(arguments.length -  0);
while (G__30381__i < G__30381__a.length) {G__30381__a[G__30381__i] = arguments[G__30381__i + 0]; ++G__30381__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30381__a,0,null);
} 
return G__30380__delegate.call(this,args__29312__auto__);};
G__30380.cljs$lang$maxFixedArity = 0;
G__30380.cljs$lang$applyTo = (function (arglist__30382){
var args__29312__auto__ = cljs.core.seq(arglist__30382);
return G__30380__delegate(args__29312__auto__);
});
G__30380.cljs$core$IFn$_invoke$arity$variadic = G__30380__delegate;
return G__30380;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
})().call(null,base_sym);

cljs.pprint.pprint_binding_form.call(null,cljs.core.second.call(null,alis));

<<<<<<< HEAD
(function (){var format_in__28805__auto__ = " ~_~{~w~^ ~_~}";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29878__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29878 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29879__i = 0, G__29879__a = new Array(arguments.length -  0);
while (G__29879__i < G__29879__a.length) {G__29879__a[G__29879__i] = arguments[G__29879__i + 0]; ++G__29879__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29879__a,0,null);
} 
return G__29878__delegate.call(this,args__28807__auto__);};
G__29878.cljs$lang$maxFixedArity = 0;
G__29878.cljs$lang$applyTo = (function (arglist__29880){
var args__28807__auto__ = cljs.core.seq(arglist__29880);
return G__29878__delegate(args__28807__auto__);
});
G__29878.cljs$core$IFn$_invoke$arity$variadic = G__29878__delegate;
return G__29878;
=======
(function (){var format_in__29310__auto__ = " ~_~{~w~^ ~_~}";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30383__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30383 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30384__i = 0, G__30384__a = new Array(arguments.length -  0);
while (G__30384__i < G__30384__a.length) {G__30384__a[G__30384__i] = arguments[G__30384__i + 0]; ++G__30384__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30384__a,0,null);
} 
return G__30383__delegate.call(this,args__29312__auto__);};
G__30383.cljs$lang$maxFixedArity = 0;
G__30383.cljs$lang$applyTo = (function (arglist__30385){
var args__29312__auto__ = cljs.core.seq(arglist__30385);
return G__30383__delegate(args__29312__auto__);
});
G__30383.cljs$core$IFn$_invoke$arity$variadic = G__30383__delegate;
return G__30383;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
})().call(null,cljs.core.next.call(null,cljs.core.rest.call(null,alis)));
} else {
cljs.pprint.pprint_simple_code_list.call(null,alis);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29868_29872);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29867_29871);
=======
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30373_30377);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30372_30376);
>>>>>>> 8f3c68a (Initial Commit)
}}

return null;
});
<<<<<<< HEAD
cljs.pprint.pprint_if = (function (){var format_in__28805__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29881__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29881 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29882__i = 0, G__29882__a = new Array(arguments.length -  0);
while (G__29882__i < G__29882__a.length) {G__29882__a[G__29882__i] = arguments[G__29882__i + 0]; ++G__29882__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29882__a,0,null);
} 
return G__29881__delegate.call(this,args__28807__auto__);};
G__29881.cljs$lang$maxFixedArity = 0;
G__29881.cljs$lang$applyTo = (function (arglist__29883){
var args__28807__auto__ = cljs.core.seq(arglist__29883);
return G__29881__delegate(args__28807__auto__);
});
G__29881.cljs$core$IFn$_invoke$arity$variadic = G__29881__delegate;
return G__29881;
=======
cljs.pprint.pprint_if = (function (){var format_in__29310__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30386__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30386 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30387__i = 0, G__30387__a = new Array(arguments.length -  0);
while (G__30387__i < G__30387__a.length) {G__30387__a[G__30387__i] = arguments[G__30387__i + 0]; ++G__30387__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30387__a,0,null);
} 
return G__30386__delegate.call(this,args__29312__auto__);};
G__30386.cljs$lang$maxFixedArity = 0;
G__30386.cljs$lang$applyTo = (function (arglist__30388){
var args__29312__auto__ = cljs.core.seq(arglist__30388);
return G__30386__delegate(args__29312__auto__);
});
G__30386.cljs$core$IFn$_invoke$arity$variadic = G__30386__delegate;
return G__30386;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
<<<<<<< HEAD
var _STAR_current_level_STAR__orig_val__29884_29893 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29885_29894 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29886_29895 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29887_29896 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29886_29895);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29887_29896);
=======
var _STAR_current_level_STAR__orig_val__30389_30398 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30390_30399 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30391_30400 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30392_30401 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30391_30400);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30392_30401);
>>>>>>> 8f3c68a (Initial Commit)

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis));

if(cljs.core.next.call(null,alis)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

<<<<<<< HEAD
var length_count29888_29897 = (0);
var alis_29898__$1 = cljs.core.next.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count29888_29897 < cljs.core._STAR_print_length_STAR_)))){
if(alis_29898__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29889_29899 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29890_29900 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29891_29901 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29892_29902 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29891_29901);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29892_29902);
=======
var length_count30393_30402 = (0);
var alis_30403__$1 = cljs.core.next.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count30393_30402 < cljs.core._STAR_print_length_STAR_)))){
if(alis_30403__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30394_30404 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30395_30405 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30396_30406 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30397_30407 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30396_30406);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30397_30407);
>>>>>>> 8f3c68a (Initial Commit)

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


<<<<<<< HEAD
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_29898__$1));

if(cljs.core.next.call(null,alis_29898__$1)){
=======
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_30403__$1));

if(cljs.core.next.call(null,alis_30403__$1)){
>>>>>>> 8f3c68a (Initial Commit)
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

<<<<<<< HEAD
cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_29898__$1));
=======
cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_30403__$1));
>>>>>>> 8f3c68a (Initial Commit)
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29890_29900);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29889_29899);
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_29898__$1))){
=======
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30395_30405);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30394_30404);
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_30403__$1))){
>>>>>>> 8f3c68a (Initial Commit)
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

<<<<<<< HEAD
var G__29903 = (length_count29888_29897 + (1));
var G__29904 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_29898__$1));
length_count29888_29897 = G__29903;
alis_29898__$1 = G__29904;
=======
var G__30408 = (length_count30393_30402 + (1));
var G__30409 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_30403__$1));
length_count30393_30402 = G__30408;
alis_30403__$1 = G__30409;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29885_29894);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29884_29893);
=======
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30390_30399);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30389_30398);
>>>>>>> 8f3c68a (Initial Commit)
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count.call(null,alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
<<<<<<< HEAD
var _STAR_current_level_STAR__orig_val__29905_29914 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29906_29915 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29907_29916 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29908_29917 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29907_29916);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29908_29917);
=======
var _STAR_current_level_STAR__orig_val__30410_30419 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30411_30420 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30412_30421 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30413_30422 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30412_30421);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30413_30422);
>>>>>>> 8f3c68a (Initial Commit)

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

<<<<<<< HEAD
cljs.core.apply.call(null,(function (){var format_in__28805__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29918__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29918 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29919__i = 0, G__29919__a = new Array(arguments.length -  0);
while (G__29919__i < G__29919__a.length) {G__29919__a[G__29919__i] = arguments[G__29919__i + 0]; ++G__29919__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29919__a,0,null);
} 
return G__29918__delegate.call(this,args__28807__auto__);};
G__29918.cljs$lang$maxFixedArity = 0;
G__29918.cljs$lang$applyTo = (function (arglist__29920){
var args__28807__auto__ = cljs.core.seq(arglist__29920);
return G__29918__delegate(args__28807__auto__);
});
G__29918.cljs$core$IFn$_invoke$arity$variadic = G__29918__delegate;
return G__29918;
=======
cljs.core.apply.call(null,(function (){var format_in__29310__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30423__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30423 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30424__i = 0, G__30424__a = new Array(arguments.length -  0);
while (G__30424__i < G__30424__a.length) {G__30424__a[G__30424__i] = arguments[G__30424__i + 0]; ++G__30424__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30424__a,0,null);
} 
return G__30423__delegate.call(this,args__29312__auto__);};
G__30423.cljs$lang$maxFixedArity = 0;
G__30423.cljs$lang$applyTo = (function (arglist__30425){
var args__29312__auto__ = cljs.core.seq(arglist__30425);
return G__30423__delegate(args__29312__auto__);
});
G__30423.cljs$core$IFn$_invoke$arity$variadic = G__30423__delegate;
return G__30423;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
})(),alis);

<<<<<<< HEAD
var length_count29909_29921 = (0);
var alis_29922__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count29909_29921 < cljs.core._STAR_print_length_STAR_)))){
if(alis_29922__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29910_29923 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29911_29924 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29912_29925 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29913_29926 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29912_29925);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29913_29926);
=======
var length_count30414_30426 = (0);
var alis_30427__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count30414_30426 < cljs.core._STAR_print_length_STAR_)))){
if(alis_30427__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__30415_30428 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30416_30429 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30417_30430 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30418_30431 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30417_30430);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30418_30431);
>>>>>>> 8f3c68a (Initial Commit)

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


<<<<<<< HEAD
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_29922__$1));

if(cljs.core.next.call(null,alis_29922__$1)){
=======
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_30427__$1));

if(cljs.core.next.call(null,alis_30427__$1)){
>>>>>>> 8f3c68a (Initial Commit)
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

<<<<<<< HEAD
cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_29922__$1));
=======
cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_30427__$1));
>>>>>>> 8f3c68a (Initial Commit)
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29911_29924);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29910_29923);
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_29922__$1))){
=======
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30416_30429);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30415_30428);
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_30427__$1))){
>>>>>>> 8f3c68a (Initial Commit)
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

<<<<<<< HEAD
var G__29927 = (length_count29909_29921 + (1));
var G__29928 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_29922__$1));
length_count29909_29921 = G__29927;
alis_29922__$1 = G__29928;
=======
var G__30432 = (length_count30414_30426 + (1));
var G__30433 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_30427__$1));
length_count30414_30426 = G__30432;
alis_30427__$1 = G__30433;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29906_29915);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29905_29914);
=======
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30411_30420);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30410_30419);
>>>>>>> 8f3c68a (Initial Commit)
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second.call(null,alis);
var nlis = cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,alis)));
if(cljs.core.vector_QMARK_.call(null,args)){
<<<<<<< HEAD
var _STAR_symbol_map_STAR__orig_val__29931 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__29932 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,args),"%"]):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__29929_SHARP_,p2__29930_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__29929_SHARP_,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__29930_SHARP_)].join('')],null));
}),args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));
(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__29932);

try{return (function (){var format_in__28805__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__28806__auto__ = ((typeof format_in__28805__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__28805__auto__):format_in__28805__auto__);
return (function() { 
var G__29933__delegate = function (args__28807__auto__){
var navigator__28808__auto__ = cljs.pprint.init_navigator.call(null,args__28807__auto__);
return cljs.pprint.execute_format.call(null,cf__28806__auto__,navigator__28808__auto__);
};
var G__29933 = function (var_args){
var args__28807__auto__ = null;
if (arguments.length > 0) {
var G__29934__i = 0, G__29934__a = new Array(arguments.length -  0);
while (G__29934__i < G__29934__a.length) {G__29934__a[G__29934__i] = arguments[G__29934__i + 0]; ++G__29934__i;}
  args__28807__auto__ = new cljs.core.IndexedSeq(G__29934__a,0,null);
} 
return G__29933__delegate.call(this,args__28807__auto__);};
G__29933.cljs$lang$maxFixedArity = 0;
G__29933.cljs$lang$applyTo = (function (arglist__29935){
var args__28807__auto__ = cljs.core.seq(arglist__29935);
return G__29933__delegate(args__28807__auto__);
});
G__29933.cljs$core$IFn$_invoke$arity$variadic = G__29933__delegate;
return G__29933;
})()
;
})().call(null,nlis);
}finally {(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__29931);
=======
var _STAR_symbol_map_STAR__orig_val__30436 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__30437 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,args),"%"]):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__30434_SHARP_,p2__30435_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__30434_SHARP_,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__30435_SHARP_)].join('')],null));
}),args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));
(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__30437);

try{return (function (){var format_in__29310__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__29311__auto__ = ((typeof format_in__29310__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__29310__auto__):format_in__29310__auto__);
return (function() { 
var G__30438__delegate = function (args__29312__auto__){
var navigator__29313__auto__ = cljs.pprint.init_navigator.call(null,args__29312__auto__);
return cljs.pprint.execute_format.call(null,cf__29311__auto__,navigator__29313__auto__);
};
var G__30438 = function (var_args){
var args__29312__auto__ = null;
if (arguments.length > 0) {
var G__30439__i = 0, G__30439__a = new Array(arguments.length -  0);
while (G__30439__i < G__30439__a.length) {G__30439__a[G__30439__i] = arguments[G__30439__i + 0]; ++G__30439__i;}
  args__29312__auto__ = new cljs.core.IndexedSeq(G__30439__a,0,null);
} 
return G__30438__delegate.call(this,args__29312__auto__);};
G__30438.cljs$lang$maxFixedArity = 0;
G__30438.cljs$lang$applyTo = (function (arglist__30440){
var args__29312__auto__ = cljs.core.seq(arglist__30440);
return G__30438__delegate(args__29312__auto__);
});
G__30438.cljs$core$IFn$_invoke$arity$variadic = G__30438__delegate;
return G__30438;
})()
;
})().call(null,nlis);
}finally {(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__30436);
>>>>>>> 8f3c68a (Initial Commit)
}} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
<<<<<<< HEAD
var _STAR_current_level_STAR__orig_val__29936_29941 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29937_29942 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29938_29943 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29939_29944 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29938_29943);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29939_29944);
=======
var _STAR_current_level_STAR__orig_val__30441_30446 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__30442_30447 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__30443_30448 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__30444_30449 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__30443_30448);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__30444_30449);
>>>>>>> 8f3c68a (Initial Commit)

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

<<<<<<< HEAD
var length_count29940_29945 = (0);
var alis_29946__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count29940_29945 < cljs.core._STAR_print_length_STAR_)))){
if(alis_29946__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_29946__$1));

if(cljs.core.next.call(null,alis_29946__$1)){
=======
var length_count30445_30450 = (0);
var alis_30451__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count30445_30450 < cljs.core._STAR_print_length_STAR_)))){
if(alis_30451__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_30451__$1));

if(cljs.core.next.call(null,alis_30451__$1)){
>>>>>>> 8f3c68a (Initial Commit)
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

<<<<<<< HEAD
var G__29947 = (length_count29940_29945 + (1));
var G__29948 = cljs.core.next.call(null,alis_29946__$1);
length_count29940_29945 = G__29947;
alis_29946__$1 = G__29948;
=======
var G__30452 = (length_count30445_30450 + (1));
var G__30453 = cljs.core.next.call(null,alis_30451__$1);
length_count30445_30450 = G__30452;
alis_30451__$1 = G__30453;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
<<<<<<< HEAD
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29937_29942);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29936_29941);
=======
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__30442_30447);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__30441_30446);
>>>>>>> 8f3c68a (Initial Commit)
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
<<<<<<< HEAD
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__4529__auto__ = (function cljs$pprint$two_forms_$_iter__29949(s__29950){
return (new cljs.core.LazySeq(null,(function (){
var s__29950__$1 = s__29950;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__29950__$1);
if(temp__5720__auto__){
var s__29950__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29950__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__29950__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__29952 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__29951 = (0);
while(true){
if((i__29951 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__29951);
cljs.core.chunk_append.call(null,b__29952,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__29953 = (i__29951 + (1));
i__29951 = G__29953;
=======
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__4529__auto__ = (function cljs$pprint$two_forms_$_iter__30454(s__30455){
return (new cljs.core.LazySeq(null,(function (){
var s__30455__$1 = s__30455;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30455__$1);
if(temp__5720__auto__){
var s__30455__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30455__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__30455__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__30457 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__30456 = (0);
while(true){
if((i__30456 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__30456);
cljs.core.chunk_append.call(null,b__30457,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__30458 = (i__30456 + (1));
i__30456 = G__30458;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
return true;
}
break;
}
})()){
<<<<<<< HEAD
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29952),cljs$pprint$two_forms_$_iter__29949.call(null,cljs.core.chunk_rest.call(null,s__29950__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29952),null);
}
} else {
var x = cljs.core.first.call(null,s__29950__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__29949.call(null,cljs.core.rest.call(null,s__29950__$2)));
=======
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30457),cljs$pprint$two_forms_$_iter__30454.call(null,cljs.core.chunk_rest.call(null,s__30455__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30457),null);
}
} else {
var x = cljs.core.first.call(null,s__30455__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__30454.call(null,cljs.core.rest.call(null,s__30455__$2)));
>>>>>>> 8f3c68a (Initial Commit)
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,amap);
})()));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
<<<<<<< HEAD
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__29954_SHARP_){
var vec__29955 = p1__29954_SHARP_;
var s = cljs.core.nth.call(null,vec__29955,(0),null);
var f = cljs.core.nth.call(null,vec__29955,(1),null);
=======
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__30459_SHARP_){
var vec__30460 = p1__30459_SHARP_;
var s = cljs.core.nth.call(null,vec__30460,(0),null);
var f = cljs.core.nth.call(null,vec__30460,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.not.call(null,(function (){var or__4126__auto__ = cljs.core.namespace.call(null,s);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.special_symbol_QMARK_.call(null,s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,core,cljs.core.name.call(null,s)),f], null);
} else {
<<<<<<< HEAD
return p1__29954_SHARP_;
=======
return p1__30459_SHARP_;
>>>>>>> 8f3c68a (Initial Commit)
}
}),amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms.call(null,cljs.pprint.add_core_ns.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
var temp__5718__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_(temp__5718__auto__)){
var special_form = temp__5718__auto__;
return special_form.call(null,alis);
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5718__auto__ = sym.call(null,cljs.pprint._STAR_symbol_map_STAR_);
if(cljs.core.truth_(temp__5718__auto__)){
var arg_num = temp__5718__auto__;
return cljs.pprint.print.call(null,arg_num);
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.call(null,cljs.core.name.call(null,sym));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.code_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (width - cljs.core.count.call(null,s));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
return cljs.core.apply.call(null,cljs.core.str,clojure.string.join.call(null,cljs.core.repeat.call(null,padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
<<<<<<< HEAD
var G__29962 = arguments.length;
switch (G__29962) {
=======
var G__30467 = arguments.length;
switch (G__30467) {
>>>>>>> 8f3c68a (Initial Commit)
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
if(cljs.core.seq.call(null,rows)){
var widths = cljs.core.map.call(null,(function (k){
<<<<<<< HEAD
return cljs.core.apply.call(null,cljs.core.max,((cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)).length),cljs.core.map.call(null,(function (p1__29958_SHARP_){
return ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,p1__29958_SHARP_,k))).length);
}),rows));
}),ks);
var spacers = cljs.core.map.call(null,(function (p1__29959_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__29959_SHARP_,"-"));
}),widths);
var fmt_row = (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,divider,(function (){var iter__4529__auto__ = (function cljs$pprint$iter__29973(s__29974){
return (new cljs.core.LazySeq(null,(function (){
var s__29974__$1 = s__29974;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__29974__$1);
if(temp__5720__auto__){
var s__29974__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29974__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__29974__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__29976 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__29975 = (0);
while(true){
if((i__29975 < size__4528__auto__)){
var vec__29977 = cljs.core._nth.call(null,c__4527__auto__,i__29975);
var col = cljs.core.nth.call(null,vec__29977,(0),null);
var width = cljs.core.nth.call(null,vec__29977,(1),null);
cljs.core.chunk_append.call(null,b__29976,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__29988 = (i__29975 + (1));
i__29975 = G__29988;
=======
return cljs.core.apply.call(null,cljs.core.max,((cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)).length),cljs.core.map.call(null,(function (p1__30463_SHARP_){
return ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,p1__30463_SHARP_,k))).length);
}),rows));
}),ks);
var spacers = cljs.core.map.call(null,(function (p1__30464_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__30464_SHARP_,"-"));
}),widths);
var fmt_row = (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,divider,(function (){var iter__4529__auto__ = (function cljs$pprint$iter__30478(s__30479){
return (new cljs.core.LazySeq(null,(function (){
var s__30479__$1 = s__30479;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30479__$1);
if(temp__5720__auto__){
var s__30479__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30479__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__30479__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__30481 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__30480 = (0);
while(true){
if((i__30480 < size__4528__auto__)){
var vec__30482 = cljs.core._nth.call(null,c__4527__auto__,i__30480);
var col = cljs.core.nth.call(null,vec__30482,(0),null);
var width = cljs.core.nth.call(null,vec__30482,(1),null);
cljs.core.chunk_append.call(null,b__30481,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__30493 = (i__30480 + (1));
i__30480 = G__30493;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
return true;
}
break;
}
})()){
<<<<<<< HEAD
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29976),cljs$pprint$iter__29973.call(null,cljs.core.chunk_rest.call(null,s__29974__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29976),null);
}
} else {
var vec__29980 = cljs.core.first.call(null,s__29974__$2);
var col = cljs.core.nth.call(null,vec__29980,(0),null);
var width = cljs.core.nth.call(null,vec__29980,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__29973.call(null,cljs.core.rest.call(null,s__29974__$2)));
=======
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30481),cljs$pprint$iter__30478.call(null,cljs.core.chunk_rest.call(null,s__30479__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30481),null);
}
} else {
var vec__30485 = cljs.core.first.call(null,s__30479__$2);
var col = cljs.core.nth.call(null,vec__30485,(0),null);
var width = cljs.core.nth.call(null,vec__30485,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__30478.call(null,cljs.core.rest.call(null,s__30479__$2)));
>>>>>>> 8f3c68a (Initial Commit)
}
} else {
return null;
}
break;
}
}),null,null));
});
<<<<<<< HEAD
return iter__4529__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__29960_SHARP_){
return cljs.core.get.call(null,row,p1__29960_SHARP_);
=======
return iter__4529__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__30465_SHARP_){
return cljs.core.get.call(null,row,p1__30465_SHARP_);
>>>>>>> 8f3c68a (Initial Commit)
}),ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});
cljs.core.println.call(null);

cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",cljs.core.zipmap.call(null,ks,ks)));

cljs.core.println.call(null,fmt_row.call(null,"|-","-+-","-|",cljs.core.zipmap.call(null,ks,spacers)));

<<<<<<< HEAD
var seq__29983 = cljs.core.seq.call(null,rows);
var chunk__29984 = null;
var count__29985 = (0);
var i__29986 = (0);
while(true){
if((i__29986 < count__29985)){
var row = cljs.core._nth.call(null,chunk__29984,i__29986);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__29989 = seq__29983;
var G__29990 = chunk__29984;
var G__29991 = count__29985;
var G__29992 = (i__29986 + (1));
seq__29983 = G__29989;
chunk__29984 = G__29990;
count__29985 = G__29991;
i__29986 = G__29992;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29983);
if(temp__5720__auto__){
var seq__29983__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29983__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29983__$1);
var G__29993 = cljs.core.chunk_rest.call(null,seq__29983__$1);
var G__29994 = c__4556__auto__;
var G__29995 = cljs.core.count.call(null,c__4556__auto__);
var G__29996 = (0);
seq__29983 = G__29993;
chunk__29984 = G__29994;
count__29985 = G__29995;
i__29986 = G__29996;
continue;
} else {
var row = cljs.core.first.call(null,seq__29983__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__29997 = cljs.core.next.call(null,seq__29983__$1);
var G__29998 = null;
var G__29999 = (0);
var G__30000 = (0);
seq__29983 = G__29997;
chunk__29984 = G__29998;
count__29985 = G__29999;
i__29986 = G__30000;
=======
var seq__30488 = cljs.core.seq.call(null,rows);
var chunk__30489 = null;
var count__30490 = (0);
var i__30491 = (0);
while(true){
if((i__30491 < count__30490)){
var row = cljs.core._nth.call(null,chunk__30489,i__30491);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__30494 = seq__30488;
var G__30495 = chunk__30489;
var G__30496 = count__30490;
var G__30497 = (i__30491 + (1));
seq__30488 = G__30494;
chunk__30489 = G__30495;
count__30490 = G__30496;
i__30491 = G__30497;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30488);
if(temp__5720__auto__){
var seq__30488__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30488__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30488__$1);
var G__30498 = cljs.core.chunk_rest.call(null,seq__30488__$1);
var G__30499 = c__4556__auto__;
var G__30500 = cljs.core.count.call(null,c__4556__auto__);
var G__30501 = (0);
seq__30488 = G__30498;
chunk__30489 = G__30499;
count__30490 = G__30500;
i__30491 = G__30501;
continue;
} else {
var row = cljs.core.first.call(null,seq__30488__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__30502 = cljs.core.next.call(null,seq__30488__$1);
var G__30503 = null;
var G__30504 = (0);
var G__30505 = (0);
seq__30488 = G__30502;
chunk__30489 = G__30503;
count__30490 = G__30504;
i__30491 = G__30505;
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
}));

(cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,rows)),rows);
}));

(cljs.pprint.print_table.cljs$lang$maxFixedArity = 2);


<<<<<<< HEAD
//# sourceMappingURL=pprint.js.map?rel=1602979379320
=======
//# sourceMappingURL=pprint.js.map?rel=1608004505280
>>>>>>> 8f3c68a (Initial Commit)
