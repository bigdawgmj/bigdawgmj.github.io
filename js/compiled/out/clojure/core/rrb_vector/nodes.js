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

var G__41051 = (i + (1));
var G__41052 = (r + step);
i = G__41051;
r = G__41052;
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
var G__41053 = (root.arr[(slc - (1))]);
var G__41054 = (shift - (5));
var G__41055 = (((rngs[(31)]) - (rngs[(30)])) + (32));
root = G__41053;
shift = G__41054;
cnt = G__41055;
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
var G__41056 = l;
var G__41057 = mid;
l = G__41056;
h = G__41057;
continue;
} else {
var G__41058 = (mid + (1));
var G__41059 = h;
l = G__41058;
h = G__41059;
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
var G__41060 = l;
var G__41061 = mid;
l = G__41060;
h = G__41061;
continue;
} else {
var G__41062 = (mid + (1));
var G__41063 = h;
l = G__41062;
h = G__41063;
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
var rngs_41064 = clojure.core.rrb_vector.nodes.node_ranges.call(null,parent);
var rng0_41065 = (rngs_41064[(0)]);
var new_rngs_41066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var lim_41067 = (rngs_41064[(32)]);
cljs.core.array_copy.call(null,rngs_41064,(1),new_rngs_41066,(0),(lim_41067 - (1)));

var i_41068 = (0);
while(true){
if((i_41068 < lim_41067)){
(new_rngs_41066[i_41068] = ((new_rngs_41066[i_41068]) - rng0_41065));

var G__41069 = (i_41068 + (1));
i_41068 = G__41069;
continue;
} else {
}
break;
}

(new_rngs_41066[(32)] = ((rngs_41064[(32)]) - (1)));

(new_rngs_41066[((rngs_41064[(32)]) - (1))] = (0));

(new_arr[(32)] = new_rngs_41066);
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

var i_41070 = (1);
while(true){
if((i_41070 <= li)){
(new_rngs[i_41070] = ((new_rngs[(i_41070 - (1))]) + step));

var G__41071 = (i_41070 + (1));
i_41070 = G__41071;
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

var i_41072 = (0);
while(true){
if((i_41072 <= li)){
(new_rngs[i_41072] = ((rngs[i_41072]) - d));

var G__41073 = (i_41072 + (1));
i_41072 = G__41073;
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

var j_41074 = (0);
var r_41075 = step;
while(true){
if((j_41074 <= i)){
(rngs[j_41074] = r_41075);

var G__41076 = (j_41074 + (1));
var G__41077 = (r_41075 + step);
j_41074 = G__41076;
r_41075 = G__41077;
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
var rngs = (((!(reg_QMARK_)))?(function (){var G__41078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__41078[(0)] = node.arr.length);

(G__41078[(32)] = (1));

return G__41078;
})():null);
var ret = cljs.core.__GT_VectorNode.call(null,null,arr);
var arr_41079__$1 = arr;
var shift_41080__$1 = shift;
while(true){
if((shift_41080__$1 === (5))){
if((!(reg_QMARK_))){
(arr_41079__$1[(32)] = rngs);
} else {
}

(arr_41079__$1[(0)] = node);
} else {
var a_41081 = (new Array(len));
var e_41082 = cljs.core.__GT_VectorNode.call(null,null,a_41081);
(arr_41079__$1[(0)] = e_41082);

if((!(reg_QMARK_))){
(arr_41079__$1[(32)] = rngs);
} else {
}

var G__41083 = a_41081;
var G__41084 = (shift_41080__$1 - (5));
arr_41079__$1 = G__41083;
shift_41080__$1 = G__41084;
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

//# sourceMappingURL=nodes.js.map?rel=1602993598289
