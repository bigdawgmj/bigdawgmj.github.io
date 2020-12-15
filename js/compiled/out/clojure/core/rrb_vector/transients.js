// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('clojure.core.rrb_vector.transients');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.nodes');
goog.require('clojure.core.rrb_vector.trees');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone.call(null,node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone.call(null,(new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
return (new cljs.core.VectorNode(({}),cljs.core.aclone.call(null,root.arr)));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy.call(null,tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,ret)){
<<<<<<< HEAD
var n_41121 = ret;
var shift_41122__$1 = shift;
while(true){
var arr_41123 = n_41121.arr;
var subidx_41124 = (((cnt - (1)) >> shift_41122__$1) & (31));
if((shift_41122__$1 === (5))){
(arr_41123[subidx_41124] = tail_node);
} else {
var child_41125 = (arr_41123[subidx_41124]);
if((child_41125 == null)){
(arr_41123[subidx_41124] = clojure.core.rrb_vector.trees.new_path.call(null,tail_node.arr,root_edit,(shift_41122__$1 - (5)),tail_node));
} else {
var editable_child_41126 = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,child_41125);
(arr_41123[subidx_41124] = editable_child_41126);

var G__41127 = editable_child_41126;
var G__41128 = (shift_41122__$1 - (5));
n_41121 = G__41127;
shift_41122__$1 = G__41128;
=======
var n_23125 = ret;
var shift_23126__$1 = shift;
while(true){
var arr_23127 = n_23125.arr;
var subidx_23128 = (((cnt - (1)) >> shift_23126__$1) & (31));
if((shift_23126__$1 === (5))){
(arr_23127[subidx_23128] = tail_node);
} else {
var child_23129 = (arr_23127[subidx_23128]);
if((child_23129 == null)){
(arr_23127[subidx_23128] = clojure.core.rrb_vector.trees.new_path.call(null,tail_node.arr,root_edit,(shift_23126__$1 - (5)),tail_node));
} else {
var editable_child_23130 = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,child_23129);
(arr_23127[subidx_23128] = editable_child_23130);

var G__23131 = editable_child_23130;
var G__23132 = (shift_23126__$1 - (5));
n_23125 = G__23131;
shift_23126__$1 = G__23132;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges.call(null,ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,(arr[li]));
var ccnt = (((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)]));
if((!((ccnt === ((1) << shift))))){
return clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,(shift - (5)),(ccnt + (1)),root_edit,child,tail_node);
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path.call(null,tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,ret)){
var subidx = (((cnt - (1)) >> shift) & (31));
if((shift > (5))){
var child = clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,(shift - (5)),cnt,root_edit,(ret.arr[subidx]));
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var subidx = (((cnt - (1)) >> shift) & (31));
var rngs = clojure.core.rrb_vector.nodes.node_ranges.call(null,ret);
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if((((((rngs[(subidx__$1 + (1))]) | (0)) === (0))) || ((subidx__$1 === (31))))){
return subidx__$1;
} else {
<<<<<<< HEAD
var G__41129 = (subidx__$1 + (1));
subidx__$1 = G__41129;
=======
var G__23133 = (subidx__$1 + (1));
subidx__$1 = G__23133;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
break;
}
})();
if((shift > (5))){
var child = (ret.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,(shift - (5)),child_cnt,root_edit,child);
if((((new_child == null)) && ((subidx__$1 === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,child)){
var arr = ret.arr;
(rngs[subidx__$1] = ((rngs[subidx__$1]) - (32)));

(arr[subidx__$1] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range.call(null,child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range.call(null,new_child):(0)));
var arr = ret.arr;
(rngs[subidx__$1] = ((rngs[subidx__$1]) - diff));

(arr[subidx__$1] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx__$1 === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx__$1]);
(arr[subidx__$1] = null);

(rngs[subidx__$1] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,ret)){
<<<<<<< HEAD
var shift_41130__$1 = shift;
var node_41131 = ret;
while(true){
if((shift_41130__$1 === (0))){
var arr_41132 = node_41131.arr;
(arr_41132[(i & (31))] = val);
} else {
var arr_41133 = node_41131.arr;
var subidx_41134 = ((i >> shift_41130__$1) & (31));
var child_41135 = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,(arr_41133[subidx_41134]));
(arr_41133[subidx_41134] = child_41135);

var G__41136 = (shift_41130__$1 - (5));
var G__41137 = child_41135;
shift_41130__$1 = G__41136;
node_41131 = G__41137;
=======
var shift_23134__$1 = shift;
var node_23135 = ret;
while(true){
if((shift_23134__$1 === (0))){
var arr_23136 = node_23135.arr;
(arr_23136[(i & (31))] = val);
} else {
var arr_23137 = node_23135.arr;
var subidx_23138 = ((i >> shift_23134__$1) & (31));
var child_23139 = clojure.core.rrb_vector.transients.ensure_editable.call(null,root_edit,(arr_23137[subidx_23138]));
(arr_23137[subidx_23138] = child_23139);

var G__23140 = (shift_23134__$1 - (5));
var G__23141 = child_23139;
shift_23134__$1 = G__23140;
node_23135 = G__23141;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
break;
}
} else {
<<<<<<< HEAD
var arr_41138 = ret.arr;
var rngs_41139 = clojure.core.rrb_vector.nodes.node_ranges.call(null,ret);
var subidx_41140 = ((i >> shift) & (31));
var subidx_41141__$1 = (function (){var subidx_41141__$1 = subidx_41140;
while(true){
if((i < ((rngs_41139[subidx_41141__$1]) | (0)))){
return subidx_41141__$1;
} else {
var G__41143 = (subidx_41141__$1 + (1));
subidx_41141__$1 = G__41143;
=======
var arr_23142 = ret.arr;
var rngs_23143 = clojure.core.rrb_vector.nodes.node_ranges.call(null,ret);
var subidx_23144 = ((i >> shift) & (31));
var subidx_23145__$1 = (function (){var subidx_23145__$1 = subidx_23144;
while(true){
if((i < ((rngs_23143[subidx_23145__$1]) | (0)))){
return subidx_23145__$1;
} else {
var G__23147 = (subidx_23145__$1 + (1));
subidx_23145__$1 = G__23147;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
break;
}
})();
<<<<<<< HEAD
var i_41142__$1 = (((subidx_41141__$1 === (0)))?i:(i - (rngs_41139[(subidx_41141__$1 - (1))])));
(arr_41138[subidx_41141__$1] = clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,(shift - (5)),root_edit,(arr_41138[subidx_41141__$1]),i_41142__$1,val));
=======
var i_23146__$1 = (((subidx_23145__$1 === (0)))?i:(i - (rngs_23143[(subidx_23145__$1 - (1))])));
(arr_23142[subidx_23145__$1] = clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,(shift - (5)),root_edit,(arr_23142[subidx_23145__$1]),i_23146__$1,val));
>>>>>>> 8f3c68a (Initial Commit)
}

return ret;
});

<<<<<<< HEAD
//# sourceMappingURL=transients.js.map?rel=1602993598355
=======
//# sourceMappingURL=transients.js.map?rel=1608004498707
>>>>>>> 8f3c68a (Initial Commit)
