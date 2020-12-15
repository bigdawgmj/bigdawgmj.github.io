// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('clojure.core.rrb_vector.nodes');
goog.require('cljs.core');
clojure.core.rrb_vector.nodes.empty_node = cljs.core.PersistentVector.EMPTY_NODE;
clojure.core.rrb_vector.nodes.clone = (function clojure$core$rrb_vector$nodes$clone(shift,node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone.call(null,node.arr)));
});
clojure.core.rrb_vector.nodes.regular_QMARK_ = (function clojure$core$rrb_vector$nodes$regular_QMARK_(node){
return (!((node.arr.length === (33))));
});
clojure.core.rrb_vector.nodes.node_ranges = (function clojure$core$rrb_vector$nodes$node_ranges(node){
return (node.arr[(32)]);
});
clojure.core.rrb_vector.nodes.last_range = (function clojure$core$rrb_vector$nodes$last_range(node){
var rngs = clojure.core.rrb_vector.nodes.node_ranges.call(null,node);
var i = ((rngs[(32)]) - (1));
return (rngs[i]);
});
clojure.core.rrb_vector.nodes.regular_ranges = (function clojure$core$rrb_vector$nodes$regular_ranges(shift,cnt){
var step = ((1) << shift);
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var i = (0);
var r = step;
while(true){
if((r < cnt)){
(rngs[i] = r);

var G__23055 = (i + (1));
var G__23056 = (r + step);
i = G__23055;
r = G__23056;
continue;
} else {
(rngs[i] = cnt);

(rngs[(32)] = (i + (1)));

return rngs;
}
break;
}
});
clojure.core.rrb_vector.nodes.overflow_QMARK_ = (function clojure$core$rrb_vector$nodes$overflow_QMARK_(root,shift,cnt){
while(true){
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,root)){
return ((cnt >> (5)) > ((1) << shift));
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges.call(null,root);
var slc = (rngs[(32)]);
if((slc === (32))){
var or__4126__auto__ = (shift === (5));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__23057 = (root.arr[(slc - (1))]);
var G__23058 = (shift - (5));
var G__23059 = (((rngs[(31)]) - (rngs[(30)])) + (32));
root = G__23057;
shift = G__23058;
cnt = G__23059;
continue;
}
} else {
return false;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.index_of_0 = (function clojure$core$rrb_vector$nodes$index_of_0(arr){
var l = (0);
var h = (31);
while(true){
if((l >= (h - (1)))){
if((((arr[l]) | (0)) === (0))){
return l;
} else {
if((((arr[h]) | (0)) === (0))){
return h;
} else {
return (32);
}
}
} else {
var mid = (l + ((h - l) >> (1)));
if((((arr[mid]) | (0)) === (0))){
var G__23060 = l;
var G__23061 = mid;
l = G__23060;
h = G__23061;
continue;
} else {
var G__23062 = (mid + (1));
var G__23063 = h;
l = G__23062;
h = G__23063;
continue;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.index_of_nil = (function clojure$core$rrb_vector$nodes$index_of_nil(arr){
var l = (0);
var h = (31);
while(true){
if((l >= (h - (1)))){
if(((arr[l]) == null)){
return l;
} else {
if(((arr[h]) == null)){
return h;
} else {
return (32);
}
}
} else {
var mid = (l + ((h - l) >> (1)));
if(((arr[mid]) == null)){
var G__23064 = l;
var G__23065 = mid;
l = G__23064;
h = G__23065;
continue;
} else {
var G__23066 = (mid + (1));
var G__23067 = h;
l = G__23066;
h = G__23067;
continue;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.first_child = (function clojure$core$rrb_vector$nodes$first_child(node){
return (node.arr[(0)]);
});
clojure.core.rrb_vector.nodes.last_child = (function clojure$core$rrb_vector$nodes$last_child(node){
var arr = node.arr;
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node)){
return (arr[(clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr) - (1))]);
} else {
return (arr[((clojure.core.rrb_vector.nodes.node_ranges.call(null,node)[(32)]) - (1))]);
}
});
clojure.core.rrb_vector.nodes.remove_leftmost_child = (function clojure$core$rrb_vector$nodes$remove_leftmost_child(shift,parent){
var arr = parent.arr;
if(((arr[(1)]) == null)){
return null;
} else {
var r_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,parent);
var new_arr = (new Array(((r_QMARK_)?(32):(33))));
cljs.core.array_copy.call(null,arr,(1),new_arr,(0),(31));

if((!(r_QMARK_))){
var rngs_23068 = clojure.core.rrb_vector.nodes.node_ranges.call(null,parent);
var rng0_23069 = (rngs_23068[(0)]);
var new_rngs_23070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var lim_23071 = (rngs_23068[(32)]);
cljs.core.array_copy.call(null,rngs_23068,(1),new_rngs_23070,(0),(lim_23071 - (1)));

var i_23072 = (0);
while(true){
if((i_23072 < lim_23071)){
(new_rngs_23070[i_23072] = ((new_rngs_23070[i_23072]) - rng0_23069));

var G__23073 = (i_23072 + (1));
i_23072 = G__23073;
continue;
} else {
}
break;
}

(new_rngs_23070[(32)] = ((rngs_23068[(32)]) - (1)));

(new_rngs_23070[((rngs_23068[(32)]) - (1))] = (0));

(new_arr[(32)] = new_rngs_23070);
} else {
}

return cljs.core.__GT_VectorNode.call(null,parent.edit,new_arr);
}
});
clojure.core.rrb_vector.nodes.replace_leftmost_child = (function clojure$core$rrb_vector$nodes$replace_leftmost_child(shift,parent,pcnt,child,d){
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,parent)){
var step = ((1) << shift);
var rng0 = (step - d);
var ncnt = (pcnt - d);
var li = ((shift >> (pcnt - (1))) & (31));
var arr = parent.arr;
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_arr[(0)] = child);

cljs.core.array_copy.call(null,arr,(1),new_arr,(1),li);

(new_arr[(32)] = new_rngs);

(new_rngs[(0)] = rng0);

(new_rngs[li] = ncnt);

(new_rngs[(32)] = (li + (1)));

var i_23074 = (1);
while(true){
if((i_23074 <= li)){
(new_rngs[i_23074] = ((new_rngs[(i_23074 - (1))]) + step));

var G__23075 = (i_23074 + (1));
i_23074 = G__23075;
continue;
} else {
}
break;
}

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else {
var new_arr = cljs.core.aclone.call(null,parent.arr);
var rngs = clojure.core.rrb_vector.nodes.node_ranges.call(null,parent);
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var li = ((rngs[(32)]) - (1));
(new_rngs[(32)] = (rngs[(32)]));

(new_arr[(32)] = new_rngs);

(new_arr[(0)] = child);

var i_23076 = (0);
while(true){
if((i_23076 <= li)){
(new_rngs[i_23076] = ((rngs[i_23076]) - d));

var G__23077 = (i_23076 + (1));
i_23076 = G__23077;
continue;
} else {
}
break;
}

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});
clojure.core.rrb_vector.nodes.replace_rightmost_child = (function clojure$core$rrb_vector$nodes$replace_rightmost_child(shift,parent,child,d){
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,parent)){
var arr = parent.arr;
var i = (clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr) - (1));
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,child)){
var new_arr = cljs.core.aclone.call(null,arr);
(new_arr[i] = child);

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else {
var arr__$1 = parent.arr;
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var step = ((1) << shift);
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(rngs[(32)] = (i + (1)));

(new_arr[(32)] = rngs);

cljs.core.array_copy.call(null,arr__$1,(0),new_arr,(0),i);

(new_arr[i] = child);

var j_23078 = (0);
var r_23079 = step;
while(true){
if((j_23078 <= i)){
(rngs[j_23078] = r_23079);

var G__23080 = (j_23078 + (1));
var G__23081 = (r_23079 + step);
j_23078 = G__23080;
r_23079 = G__23081;
continue;
} else {
}
break;
}

(rngs[i] = clojure.core.rrb_vector.nodes.last_range.call(null,child));

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges.call(null,parent);
var new_rngs = cljs.core.aclone.call(null,rngs);
var i = ((rngs[(32)]) - (1));
var new_arr = cljs.core.aclone.call(null,parent.arr);
(new_arr[i] = child);

(new_arr[(32)] = new_rngs);

(new_rngs[i] = ((rngs[i]) + d));

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});
clojure.core.rrb_vector.nodes.new_path_STAR_ = (function clojure$core$rrb_vector$nodes$new_path_STAR_(shift,node){
var reg_QMARK_ = ((32) === node.arr.length);
var len = ((reg_QMARK_)?(32):(33));
var arr = (new Array(len));
var rngs = (((!(reg_QMARK_)))?(function (){var G__23082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__23082[(0)] = node.arr.length);

(G__23082[(32)] = (1));

return G__23082;
})():null);
var ret = cljs.core.__GT_VectorNode.call(null,null,arr);
var arr_23083__$1 = arr;
var shift_23084__$1 = shift;
while(true){
if((shift_23084__$1 === (5))){
if((!(reg_QMARK_))){
(arr_23083__$1[(32)] = rngs);
} else {
}

(arr_23083__$1[(0)] = node);
} else {
var a_23085 = (new Array(len));
var e_23086 = cljs.core.__GT_VectorNode.call(null,null,a_23085);
(arr_23083__$1[(0)] = e_23086);

if((!(reg_QMARK_))){
(arr_23083__$1[(32)] = rngs);
} else {
}

var G__23087 = a_23085;
var G__23088 = (shift_23084__$1 - (5));
arr_23083__$1 = G__23087;
shift_23084__$1 = G__23088;
continue;
}
break;
}

return ret;
});
clojure.core.rrb_vector.nodes.fold_tail = (function clojure$core$rrb_vector$nodes$fold_tail(node,shift,cnt,tail){
var tlen = tail.length;
var reg_QMARK_ = ((clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node)) && ((tlen === (32))));
var arr = node.arr;
var li = clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr);
var new_arr = (new Array(((reg_QMARK_)?(32):(33))));
var rngs = (((!(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))))?clojure.core.rrb_vector.nodes.node_ranges.call(null,node):null);
var cret = (((shift === (5)))?cljs.core.__GT_VectorNode.call(null,null,tail):clojure.core.rrb_vector.nodes.fold_tail.call(null,(arr[(li - (1))]),(shift - (5)),((clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))?cljs.core.mod.call(null,cnt,((1) << shift)):(function (){var li__$1 = ((rngs[(32)]) - (1));
if((li__$1 > (0))){
return ((rngs[li__$1]) - (rngs[(li__$1 - (1))]));
} else {
return (rngs[(0)]);
}
})()),tail));
var new_rngs = (((!(reg_QMARK_)))?(cljs.core.truth_(rngs)?cljs.core.aclone.call(null,rngs):clojure.core.rrb_vector.nodes.regular_ranges.call(null,shift,cnt)):null);
if((((((cret == null)) || ((shift === (5))))) && ((li === (32))))){
return null;
} else {
cljs.core.array_copy.call(null,arr,(0),new_arr,(0),li);

if(reg_QMARK_){
} else {
if((((cret == null)) || ((shift === (5))))){
(new_rngs[li] = ((((li > (0)))?(new_rngs[(li - (1))]):((0) | (0))) + tlen));

(new_rngs[(32)] = (li + (1)));
} else {
if((li > (0))){
(new_rngs[(li - (1))] = ((new_rngs[(li - (1))]) + tlen));
} else {
}

(new_rngs[(32)] = li);
}
}

if((!(reg_QMARK_))){
(new_arr[(32)] = new_rngs);
} else {
}

if((cret == null)){
(new_arr[li] = clojure.core.rrb_vector.nodes.new_path_STAR_.call(null,(shift - (5)),cljs.core.__GT_VectorNode.call(null,null,tail)));
} else {
(new_arr[(((shift === (5)))?li:(li - (1)))] = cret);
}

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});

//# sourceMappingURL=nodes.js.map?rel=1608009505768
