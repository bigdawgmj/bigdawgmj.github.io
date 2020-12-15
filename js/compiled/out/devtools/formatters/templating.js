// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
<<<<<<< HEAD
var x30099_30100 = value;
(x30099_30100.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL);
=======
var x30604_30605 = value;
(x30604_30605.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL);
>>>>>>> 8f3c68a (Initial Commit)


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
<<<<<<< HEAD
var x30102_30103 = value;
(x30102_30103.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL);
=======
var x30607_30608 = value;
(x30607_30608.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL);
>>>>>>> 8f3c68a (Initial Commit)


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
<<<<<<< HEAD
var x30105_30106 = value;
(x30105_30106.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL);
=======
var x30610_30611 = value;
(x30610_30611.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL);
>>>>>>> 8f3c68a (Initial Commit)


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
return ((devtools.formatters.templating.group_QMARK_.call(null,value)) && (cljs.core._EQ_.call(null,(value[(0)]),"object")));
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___30113 = arguments.length;
var i__4737__auto___30114 = (0);
while(true){
if((i__4737__auto___30114 < len__4736__auto___30113)){
args__4742__auto__.push((arguments[i__4737__auto___30114]));

var G__30115 = (i__4737__auto___30114 + (1));
i__4737__auto___30114 = G__30115;
=======
var len__4736__auto___30618 = arguments.length;
var i__4737__auto___30619 = (0);
while(true){
if((i__4737__auto___30619 < len__4736__auto___30618)){
args__4742__auto__.push((arguments[i__4737__auto___30619]));

var G__30620 = (i__4737__auto___30619 + (1));
i__4737__auto___30619 = G__30620;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
<<<<<<< HEAD
var seq__30109_30116 = cljs.core.seq.call(null,items);
var chunk__30110_30117 = null;
var count__30111_30118 = (0);
var i__30112_30119 = (0);
while(true){
if((i__30112_30119 < count__30111_30118)){
var item_30120 = cljs.core._nth.call(null,chunk__30110_30117,i__30112_30119);
if((!((item_30120 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_30120)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_30120)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_30120));
=======
var seq__30614_30621 = cljs.core.seq.call(null,items);
var chunk__30615_30622 = null;
var count__30616_30623 = (0);
var i__30617_30624 = (0);
while(true){
if((i__30617_30624 < count__30616_30623)){
var item_30625 = cljs.core._nth.call(null,chunk__30615_30622,i__30617_30624);
if((!((item_30625 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_30625)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_30625)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_30625));
>>>>>>> 8f3c68a (Initial Commit)
}
} else {
}


<<<<<<< HEAD
var G__30121 = seq__30109_30116;
var G__30122 = chunk__30110_30117;
var G__30123 = count__30111_30118;
var G__30124 = (i__30112_30119 + (1));
seq__30109_30116 = G__30121;
chunk__30110_30117 = G__30122;
count__30111_30118 = G__30123;
i__30112_30119 = G__30124;
continue;
} else {
var temp__5720__auto___30125 = cljs.core.seq.call(null,seq__30109_30116);
if(temp__5720__auto___30125){
var seq__30109_30126__$1 = temp__5720__auto___30125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30109_30126__$1)){
var c__4556__auto___30127 = cljs.core.chunk_first.call(null,seq__30109_30126__$1);
var G__30128 = cljs.core.chunk_rest.call(null,seq__30109_30126__$1);
var G__30129 = c__4556__auto___30127;
var G__30130 = cljs.core.count.call(null,c__4556__auto___30127);
var G__30131 = (0);
seq__30109_30116 = G__30128;
chunk__30110_30117 = G__30129;
count__30111_30118 = G__30130;
i__30112_30119 = G__30131;
continue;
} else {
var item_30132 = cljs.core.first.call(null,seq__30109_30126__$1);
if((!((item_30132 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_30132)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_30132)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_30132));
=======
var G__30626 = seq__30614_30621;
var G__30627 = chunk__30615_30622;
var G__30628 = count__30616_30623;
var G__30629 = (i__30617_30624 + (1));
seq__30614_30621 = G__30626;
chunk__30615_30622 = G__30627;
count__30616_30623 = G__30628;
i__30617_30624 = G__30629;
continue;
} else {
var temp__5720__auto___30630 = cljs.core.seq.call(null,seq__30614_30621);
if(temp__5720__auto___30630){
var seq__30614_30631__$1 = temp__5720__auto___30630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30614_30631__$1)){
var c__4556__auto___30632 = cljs.core.chunk_first.call(null,seq__30614_30631__$1);
var G__30633 = cljs.core.chunk_rest.call(null,seq__30614_30631__$1);
var G__30634 = c__4556__auto___30632;
var G__30635 = cljs.core.count.call(null,c__4556__auto___30632);
var G__30636 = (0);
seq__30614_30621 = G__30633;
chunk__30615_30622 = G__30634;
count__30616_30623 = G__30635;
i__30617_30624 = G__30636;
continue;
} else {
var item_30637 = cljs.core.first.call(null,seq__30614_30631__$1);
if((!((item_30637 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_30637)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_30637)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_30637));
>>>>>>> 8f3c68a (Initial Commit)
}
} else {
}


<<<<<<< HEAD
var G__30133 = cljs.core.next.call(null,seq__30109_30126__$1);
var G__30134 = null;
var G__30135 = (0);
var G__30136 = (0);
seq__30109_30116 = G__30133;
chunk__30110_30117 = G__30134;
count__30111_30118 = G__30135;
i__30112_30119 = G__30136;
=======
var G__30638 = cljs.core.next.call(null,seq__30614_30631__$1);
var G__30639 = null;
var G__30640 = (0);
var G__30641 = (0);
seq__30614_30621 = G__30638;
chunk__30615_30622 = G__30639;
count__30616_30623 = G__30640;
i__30617_30624 = G__30641;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
}
}
break;
}

return group;
}));

(devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
<<<<<<< HEAD
(devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq30108){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30108));
=======
(devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq30613){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30613));
>>>>>>> 8f3c68a (Initial Commit)
}));

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___30144 = arguments.length;
var i__4737__auto___30145 = (0);
while(true){
if((i__4737__auto___30145 < len__4736__auto___30144)){
args__4742__auto__.push((arguments[i__4737__auto___30145]));

var G__30146 = (i__4737__auto___30145 + (1));
i__4737__auto___30145 = G__30146;
=======
var len__4736__auto___30649 = arguments.length;
var i__4737__auto___30650 = (0);
while(true){
if((i__4737__auto___30650 < len__4736__auto___30649)){
args__4742__auto__.push((arguments[i__4737__auto___30650]));

var G__30651 = (i__4737__auto___30650 + (1));
i__4737__auto___30650 = G__30651;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
<<<<<<< HEAD
var seq__30140_30147 = cljs.core.seq.call(null,children);
var chunk__30141_30148 = null;
var count__30142_30149 = (0);
var i__30143_30150 = (0);
while(true){
if((i__30143_30150 < count__30142_30149)){
var child_30151 = cljs.core._nth.call(null,chunk__30141_30148,i__30143_30150);
if((!((child_30151 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_30151)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_30151))));
} else {
var temp__5718__auto___30152 = devtools.formatters.helpers.pref.call(null,child_30151);
if(cljs.core.truth_(temp__5718__auto___30152)){
var child_value_30153 = temp__5718__auto___30152;
template.push(child_value_30153);
=======
var seq__30645_30652 = cljs.core.seq.call(null,children);
var chunk__30646_30653 = null;
var count__30647_30654 = (0);
var i__30648_30655 = (0);
while(true){
if((i__30648_30655 < count__30647_30654)){
var child_30656 = cljs.core._nth.call(null,chunk__30646_30653,i__30648_30655);
if((!((child_30656 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_30656)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_30656))));
} else {
var temp__5718__auto___30657 = devtools.formatters.helpers.pref.call(null,child_30656);
if(cljs.core.truth_(temp__5718__auto___30657)){
var child_value_30658 = temp__5718__auto___30657;
template.push(child_value_30658);
>>>>>>> 8f3c68a (Initial Commit)
} else {
}
}
} else {
}


<<<<<<< HEAD
var G__30154 = seq__30140_30147;
var G__30155 = chunk__30141_30148;
var G__30156 = count__30142_30149;
var G__30157 = (i__30143_30150 + (1));
seq__30140_30147 = G__30154;
chunk__30141_30148 = G__30155;
count__30142_30149 = G__30156;
i__30143_30150 = G__30157;
continue;
} else {
var temp__5720__auto___30158 = cljs.core.seq.call(null,seq__30140_30147);
if(temp__5720__auto___30158){
var seq__30140_30159__$1 = temp__5720__auto___30158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30140_30159__$1)){
var c__4556__auto___30160 = cljs.core.chunk_first.call(null,seq__30140_30159__$1);
var G__30161 = cljs.core.chunk_rest.call(null,seq__30140_30159__$1);
var G__30162 = c__4556__auto___30160;
var G__30163 = cljs.core.count.call(null,c__4556__auto___30160);
var G__30164 = (0);
seq__30140_30147 = G__30161;
chunk__30141_30148 = G__30162;
count__30142_30149 = G__30163;
i__30143_30150 = G__30164;
continue;
} else {
var child_30165 = cljs.core.first.call(null,seq__30140_30159__$1);
if((!((child_30165 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_30165)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_30165))));
} else {
var temp__5718__auto___30166 = devtools.formatters.helpers.pref.call(null,child_30165);
if(cljs.core.truth_(temp__5718__auto___30166)){
var child_value_30167 = temp__5718__auto___30166;
template.push(child_value_30167);
=======
var G__30659 = seq__30645_30652;
var G__30660 = chunk__30646_30653;
var G__30661 = count__30647_30654;
var G__30662 = (i__30648_30655 + (1));
seq__30645_30652 = G__30659;
chunk__30646_30653 = G__30660;
count__30647_30654 = G__30661;
i__30648_30655 = G__30662;
continue;
} else {
var temp__5720__auto___30663 = cljs.core.seq.call(null,seq__30645_30652);
if(temp__5720__auto___30663){
var seq__30645_30664__$1 = temp__5720__auto___30663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30645_30664__$1)){
var c__4556__auto___30665 = cljs.core.chunk_first.call(null,seq__30645_30664__$1);
var G__30666 = cljs.core.chunk_rest.call(null,seq__30645_30664__$1);
var G__30667 = c__4556__auto___30665;
var G__30668 = cljs.core.count.call(null,c__4556__auto___30665);
var G__30669 = (0);
seq__30645_30652 = G__30666;
chunk__30646_30653 = G__30667;
count__30647_30654 = G__30668;
i__30648_30655 = G__30669;
continue;
} else {
var child_30670 = cljs.core.first.call(null,seq__30645_30664__$1);
if((!((child_30670 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_30670)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_30670))));
} else {
var temp__5718__auto___30671 = devtools.formatters.helpers.pref.call(null,child_30670);
if(cljs.core.truth_(temp__5718__auto___30671)){
var child_value_30672 = temp__5718__auto___30671;
template.push(child_value_30672);
>>>>>>> 8f3c68a (Initial Commit)
} else {
}
}
} else {
}


<<<<<<< HEAD
var G__30168 = cljs.core.next.call(null,seq__30140_30159__$1);
var G__30169 = null;
var G__30170 = (0);
var G__30171 = (0);
seq__30140_30147 = G__30168;
chunk__30141_30148 = G__30169;
count__30142_30149 = G__30170;
i__30143_30150 = G__30171;
=======
var G__30673 = cljs.core.next.call(null,seq__30645_30664__$1);
var G__30674 = null;
var G__30675 = (0);
var G__30676 = (0);
seq__30645_30652 = G__30673;
chunk__30646_30653 = G__30674;
count__30647_30654 = G__30675;
i__30648_30655 = G__30676;
>>>>>>> 8f3c68a (Initial Commit)
continue;
}
} else {
}
}
break;
}

return template;
}));

(devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
<<<<<<< HEAD
(devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq30137){
var G__30138 = cljs.core.first.call(null,seq30137);
var seq30137__$1 = cljs.core.next.call(null,seq30137);
var G__30139 = cljs.core.first.call(null,seq30137__$1);
var seq30137__$2 = cljs.core.next.call(null,seq30137__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30138,G__30139,seq30137__$2);
=======
(devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq30642){
var G__30643 = cljs.core.first.call(null,seq30642);
var seq30642__$1 = cljs.core.next.call(null,seq30642);
var G__30644 = cljs.core.first.call(null,seq30642__$1);
var seq30642__$2 = cljs.core.next.call(null,seq30642__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30643,G__30644,seq30642__$2);
>>>>>>> 8f3c68a (Initial Commit)
}));

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___30174 = arguments.length;
var i__4737__auto___30175 = (0);
while(true){
if((i__4737__auto___30175 < len__4736__auto___30174)){
args__4742__auto__.push((arguments[i__4737__auto___30175]));

var G__30176 = (i__4737__auto___30175 + (1));
i__4737__auto___30175 = G__30176;
=======
var len__4736__auto___30679 = arguments.length;
var i__4737__auto___30680 = (0);
while(true){
if((i__4737__auto___30680 < len__4736__auto___30679)){
args__4742__auto__.push((arguments[i__4737__auto___30680]));

var G__30681 = (i__4737__auto___30680 + (1));
i__4737__auto___30680 = G__30681;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
}));

(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
<<<<<<< HEAD
(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq30172){
var G__30173 = cljs.core.first.call(null,seq30172);
var seq30172__$1 = cljs.core.next.call(null,seq30172);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30173,seq30172__$1);
=======
(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq30677){
var G__30678 = cljs.core.first.call(null,seq30677);
var seq30677__$1 = cljs.core.next.call(null,seq30677);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30678,seq30677__$1);
>>>>>>> 8f3c68a (Initial Commit)
}));

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___30179 = arguments.length;
var i__4737__auto___30180 = (0);
while(true){
if((i__4737__auto___30180 < len__4736__auto___30179)){
args__4742__auto__.push((arguments[i__4737__auto___30180]));

var G__30181 = (i__4737__auto___30180 + (1));
i__4737__auto___30180 = G__30181;
=======
var len__4736__auto___30684 = arguments.length;
var i__4737__auto___30685 = (0);
while(true){
if((i__4737__auto___30685 < len__4736__auto___30684)){
args__4742__auto__.push((arguments[i__4737__auto___30685]));

var G__30686 = (i__4737__auto___30685 + (1));
i__4737__auto___30685 = G__30686;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
}));

(devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
<<<<<<< HEAD
(devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq30177){
var G__30178 = cljs.core.first.call(null,seq30177);
var seq30177__$1 = cljs.core.next.call(null,seq30177);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30178,seq30177__$1);
}));

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__30183 = arguments.length;
switch (G__30183) {
=======
(devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq30682){
var G__30683 = cljs.core.first.call(null,seq30682);
var seq30682__$1 = cljs.core.next.call(null,seq30682);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30683,seq30682__$1);
}));

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__30688 = arguments.length;
switch (G__30688) {
>>>>>>> 8f3c68a (Initial Commit)
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
<<<<<<< HEAD
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj30185 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__4126__auto__ = start_index;
=======
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj30690 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__4126__auto__ = start_index;
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()});
<<<<<<< HEAD
return obj30185;
=======
return obj30690;
>>>>>>> 8f3c68a (Initial Commit)
})());
}));

(devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4);

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___30193 = arguments.length;
var i__4737__auto___30194 = (0);
while(true){
if((i__4737__auto___30194 < len__4736__auto___30193)){
args__4742__auto__.push((arguments[i__4737__auto___30194]));

var G__30195 = (i__4737__auto___30194 + (1));
i__4737__auto___30194 = G__30195;
=======
var len__4736__auto___30698 = arguments.length;
var i__4737__auto___30699 = (0);
while(true){
if((i__4737__auto___30699 < len__4736__auto___30698)){
args__4742__auto__.push((arguments[i__4737__auto___30699]));

var G__30700 = (i__4737__auto___30699 + (1));
i__4737__auto___30699 = G__30700;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

<<<<<<< HEAD
(devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__30189){
var vec__30190 = p__30189;
var state_override_fn = cljs.core.nth.call(null,vec__30190,(0),null);
=======
(devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__30694){
var vec__30695 = p__30694;
var state_override_fn = cljs.core.nth.call(null,vec__30695,(0),null);
>>>>>>> 8f3c68a (Initial Commit)
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = (((!((state_override_fn == null))))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
}));

(devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
<<<<<<< HEAD
(devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq30187){
var G__30188 = cljs.core.first.call(null,seq30187);
var seq30187__$1 = cljs.core.next.call(null,seq30187);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30188,seq30187__$1);
=======
(devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq30692){
var G__30693 = cljs.core.first.call(null,seq30692);
var seq30692__$1 = cljs.core.next.call(null,seq30692);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30693,seq30692__$1);
>>>>>>> 8f3c68a (Initial Commit)
}));

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
<<<<<<< HEAD
var _STAR_print_level_STAR__orig_val__30196 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__30197 = (1);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__30197);

try{return cljs.core.pr_str.call(null,markup);
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__30196);
=======
var _STAR_print_level_STAR__orig_val__30701 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__30702 = (1);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__30702);

try{return cljs.core.pr_str.call(null,markup);
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__30701);
>>>>>>> 8f3c68a (Initial Commit)
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_),"\n","Render stack:\n",devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
<<<<<<< HEAD
var G__30198 = name;
switch (G__30198) {
=======
var G__30703 = name;
switch (G__30703) {
>>>>>>> 8f3c68a (Initial Commit)
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = ((devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string'))){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
<<<<<<< HEAD
var vec__30200 = tag;
var html_tag = cljs.core.nth.call(null,vec__30200,(0),null);
var style = cljs.core.nth.call(null,vec__30200,(1),null);
=======
var vec__30705 = tag;
var html_tag = cljs.core.nth.call(null,vec__30705,(0),null);
var style = cljs.core.nth.call(null,vec__30705,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_.call(null,markup)))){
return markup;
} else {
<<<<<<< HEAD
var _STAR_current_render_path_STAR__orig_val__30203 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__30204 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));
(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__30204);
=======
var _STAR_current_render_path_STAR__orig_val__30708 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__30709 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));
(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__30709);
>>>>>>> 8f3c68a (Initial Commit)

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
<<<<<<< HEAD
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__30203);
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__30205 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__30206 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__30207 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__30208 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__30207);

(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__30208);

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__30206);

(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__30205);
=======
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__30708);
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__30710 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__30711 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__30712 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__30713 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__30712);

(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__30713);

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__30711);

(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__30710);
>>>>>>> 8f3c68a (Initial Commit)
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",["result of markup rendering must be a template,\n","resolved to ",devtools.util.pprint_str.call(null,value),"initial value: ",devtools.util.pprint_str.call(null,initial_value)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
<<<<<<< HEAD
var G__30209 = initial_value;
var G__30210 = value.call(null);
initial_value = G__30209;
value = G__30210;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__30211 = initial_value;
var G__30212 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__30211;
value = G__30212;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__30213 = initial_value;
var G__30214 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__30213;
value = G__30214;
=======
var G__30714 = initial_value;
var G__30715 = value.call(null);
initial_value = G__30714;
value = G__30715;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__30716 = initial_value;
var G__30717 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__30716;
value = G__30717;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__30718 = initial_value;
var G__30719 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__30718;
value = G__30719;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
if(devtools.formatters.templating.template_QMARK_.call(null,value)){
return value;
} else {
if(devtools.formatters.templating.surrogate_QMARK_.call(null,value)){
return value;
} else {
if(devtools.formatters.templating.reference_QMARK_.call(null,value)){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

<<<<<<< HEAD
//# sourceMappingURL=templating.js.map?rel=1602979379645
=======
//# sourceMappingURL=templating.js.map?rel=1608004505642
>>>>>>> 8f3c68a (Initial Commit)
