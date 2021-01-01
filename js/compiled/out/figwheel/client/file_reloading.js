// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__34653 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__34653 == null)){
return null;
} else {
return goog.object.get(G__34653,"requires");
}
}):(function (path){
var G__34654 = goog.object.get(goog.dependencies_.requires,path);
if((G__34654 == null)){
return null;
} else {
return goog.object.getKeys(G__34654);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34655_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34655_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__34656 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__34656__$1 = (((G__34656 == null))?null:goog.object.get(G__34656,"provides"));
if((G__34656__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__34656__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__34657 = cljs.core.seq.call(null,provides);
var chunk__34658 = null;
var count__34659 = (0);
var i__34660 = (0);
while(true){
if((i__34660 < count__34659)){
var prov = cljs.core._nth.call(null,chunk__34658,i__34660);
var seq__34669_34681 = cljs.core.seq.call(null,requires);
var chunk__34670_34682 = null;
var count__34671_34683 = (0);
var i__34672_34684 = (0);
while(true){
if((i__34672_34684 < count__34671_34683)){
var req_34685 = cljs.core._nth.call(null,chunk__34670_34682,i__34672_34684);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34685,prov);


var G__34686 = seq__34669_34681;
var G__34687 = chunk__34670_34682;
var G__34688 = count__34671_34683;
var G__34689 = (i__34672_34684 + (1));
seq__34669_34681 = G__34686;
chunk__34670_34682 = G__34687;
count__34671_34683 = G__34688;
i__34672_34684 = G__34689;
continue;
} else {
var temp__5720__auto___34690 = cljs.core.seq.call(null,seq__34669_34681);
if(temp__5720__auto___34690){
var seq__34669_34691__$1 = temp__5720__auto___34690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34669_34691__$1)){
var c__4556__auto___34692 = cljs.core.chunk_first.call(null,seq__34669_34691__$1);
var G__34693 = cljs.core.chunk_rest.call(null,seq__34669_34691__$1);
var G__34694 = c__4556__auto___34692;
var G__34695 = cljs.core.count.call(null,c__4556__auto___34692);
var G__34696 = (0);
seq__34669_34681 = G__34693;
chunk__34670_34682 = G__34694;
count__34671_34683 = G__34695;
i__34672_34684 = G__34696;
continue;
} else {
var req_34697 = cljs.core.first.call(null,seq__34669_34691__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34697,prov);


var G__34698 = cljs.core.next.call(null,seq__34669_34691__$1);
var G__34699 = null;
var G__34700 = (0);
var G__34701 = (0);
seq__34669_34681 = G__34698;
chunk__34670_34682 = G__34699;
count__34671_34683 = G__34700;
i__34672_34684 = G__34701;
continue;
}
} else {
}
}
break;
}


var G__34702 = seq__34657;
var G__34703 = chunk__34658;
var G__34704 = count__34659;
var G__34705 = (i__34660 + (1));
seq__34657 = G__34702;
chunk__34658 = G__34703;
count__34659 = G__34704;
i__34660 = G__34705;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34657);
if(temp__5720__auto__){
var seq__34657__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34657__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__34657__$1);
var G__34706 = cljs.core.chunk_rest.call(null,seq__34657__$1);
var G__34707 = c__4556__auto__;
var G__34708 = cljs.core.count.call(null,c__4556__auto__);
var G__34709 = (0);
seq__34657 = G__34706;
chunk__34658 = G__34707;
count__34659 = G__34708;
i__34660 = G__34709;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34657__$1);
var seq__34673_34710 = cljs.core.seq.call(null,requires);
var chunk__34674_34711 = null;
var count__34675_34712 = (0);
var i__34676_34713 = (0);
while(true){
if((i__34676_34713 < count__34675_34712)){
var req_34714 = cljs.core._nth.call(null,chunk__34674_34711,i__34676_34713);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34714,prov);


var G__34715 = seq__34673_34710;
var G__34716 = chunk__34674_34711;
var G__34717 = count__34675_34712;
var G__34718 = (i__34676_34713 + (1));
seq__34673_34710 = G__34715;
chunk__34674_34711 = G__34716;
count__34675_34712 = G__34717;
i__34676_34713 = G__34718;
continue;
} else {
var temp__5720__auto___34719__$1 = cljs.core.seq.call(null,seq__34673_34710);
if(temp__5720__auto___34719__$1){
var seq__34673_34720__$1 = temp__5720__auto___34719__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34673_34720__$1)){
var c__4556__auto___34721 = cljs.core.chunk_first.call(null,seq__34673_34720__$1);
var G__34722 = cljs.core.chunk_rest.call(null,seq__34673_34720__$1);
var G__34723 = c__4556__auto___34721;
var G__34724 = cljs.core.count.call(null,c__4556__auto___34721);
var G__34725 = (0);
seq__34673_34710 = G__34722;
chunk__34674_34711 = G__34723;
count__34675_34712 = G__34724;
i__34676_34713 = G__34725;
continue;
} else {
var req_34726 = cljs.core.first.call(null,seq__34673_34720__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34726,prov);


var G__34727 = cljs.core.next.call(null,seq__34673_34720__$1);
var G__34728 = null;
var G__34729 = (0);
var G__34730 = (0);
seq__34673_34710 = G__34727;
chunk__34674_34711 = G__34728;
count__34675_34712 = G__34729;
i__34676_34713 = G__34730;
continue;
}
} else {
}
}
break;
}


var G__34731 = cljs.core.next.call(null,seq__34657__$1);
var G__34732 = null;
var G__34733 = (0);
var G__34734 = (0);
seq__34657 = G__34731;
chunk__34658 = G__34732;
count__34659 = G__34733;
i__34660 = G__34734;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__34677 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__34678 = null;
var count__34679 = (0);
var i__34680 = (0);
while(true){
if((i__34680 < count__34679)){
var prov = cljs.core._nth.call(null,chunk__34678,i__34680);
goog.object.forEach(deps,((function (seq__34677,chunk__34678,count__34679,i__34680,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__34677,chunk__34678,count__34679,i__34680,prov,requires))
);


var G__34735 = seq__34677;
var G__34736 = chunk__34678;
var G__34737 = count__34679;
var G__34738 = (i__34680 + (1));
seq__34677 = G__34735;
chunk__34678 = G__34736;
count__34679 = G__34737;
i__34680 = G__34738;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34677);
if(temp__5720__auto__){
var seq__34677__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34677__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__34677__$1);
var G__34739 = cljs.core.chunk_rest.call(null,seq__34677__$1);
var G__34740 = c__4556__auto__;
var G__34741 = cljs.core.count.call(null,c__4556__auto__);
var G__34742 = (0);
seq__34677 = G__34739;
chunk__34678 = G__34740;
count__34679 = G__34741;
i__34680 = G__34742;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34677__$1);
goog.object.forEach(deps,((function (seq__34677,chunk__34678,count__34679,i__34680,prov,seq__34677__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__34677,chunk__34678,count__34679,i__34680,prov,seq__34677__$1,temp__5720__auto__,requires))
);


var G__34743 = cljs.core.next.call(null,seq__34677__$1);
var G__34744 = null;
var G__34745 = (0);
var G__34746 = (0);
seq__34677 = G__34743;
chunk__34678 = G__34744;
count__34679 = G__34745;
i__34680 = G__34746;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__34747){
var vec__34748 = p__34747;
var _ = cljs.core.nth.call(null,vec__34748,(0),null);
var v = cljs.core.nth.call(null,vec__34748,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__34751){
var vec__34752 = p__34751;
var k = cljs.core.nth.call(null,vec__34752,(0),null);
var v = cljs.core.nth.call(null,vec__34752,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34764_34772 = cljs.core.seq.call(null,deps);
var chunk__34765_34773 = null;
var count__34766_34774 = (0);
var i__34767_34775 = (0);
while(true){
if((i__34767_34775 < count__34766_34774)){
var dep_34776 = cljs.core._nth.call(null,chunk__34765_34773,i__34767_34775);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_34776;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34776));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34776,(depth + (1)),state);
} else {
}


var G__34777 = seq__34764_34772;
var G__34778 = chunk__34765_34773;
var G__34779 = count__34766_34774;
var G__34780 = (i__34767_34775 + (1));
seq__34764_34772 = G__34777;
chunk__34765_34773 = G__34778;
count__34766_34774 = G__34779;
i__34767_34775 = G__34780;
continue;
} else {
var temp__5720__auto___34781 = cljs.core.seq.call(null,seq__34764_34772);
if(temp__5720__auto___34781){
var seq__34764_34782__$1 = temp__5720__auto___34781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34764_34782__$1)){
var c__4556__auto___34783 = cljs.core.chunk_first.call(null,seq__34764_34782__$1);
var G__34784 = cljs.core.chunk_rest.call(null,seq__34764_34782__$1);
var G__34785 = c__4556__auto___34783;
var G__34786 = cljs.core.count.call(null,c__4556__auto___34783);
var G__34787 = (0);
seq__34764_34772 = G__34784;
chunk__34765_34773 = G__34785;
count__34766_34774 = G__34786;
i__34767_34775 = G__34787;
continue;
} else {
var dep_34788 = cljs.core.first.call(null,seq__34764_34782__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_34788;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34788));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34788,(depth + (1)),state);
} else {
}


var G__34789 = cljs.core.next.call(null,seq__34764_34782__$1);
var G__34790 = null;
var G__34791 = (0);
var G__34792 = (0);
seq__34764_34772 = G__34789;
chunk__34765_34773 = G__34790;
count__34766_34774 = G__34791;
i__34767_34775 = G__34792;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34768){
var vec__34769 = p__34768;
var seq__34770 = cljs.core.seq.call(null,vec__34769);
var first__34771 = cljs.core.first.call(null,seq__34770);
var seq__34770__$1 = cljs.core.next.call(null,seq__34770);
var x = first__34771;
var xs = seq__34770__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__34755_SHARP_){
return clojure.set.difference.call(null,p1__34755_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__34793_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__34793_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34794 = cljs.core.seq.call(null,provides);
var chunk__34795 = null;
var count__34796 = (0);
var i__34797 = (0);
while(true){
if((i__34797 < count__34796)){
var prov = cljs.core._nth.call(null,chunk__34795,i__34797);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34806_34814 = cljs.core.seq.call(null,requires);
var chunk__34807_34815 = null;
var count__34808_34816 = (0);
var i__34809_34817 = (0);
while(true){
if((i__34809_34817 < count__34808_34816)){
var req_34818 = cljs.core._nth.call(null,chunk__34807_34815,i__34809_34817);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34818,prov);


var G__34819 = seq__34806_34814;
var G__34820 = chunk__34807_34815;
var G__34821 = count__34808_34816;
var G__34822 = (i__34809_34817 + (1));
seq__34806_34814 = G__34819;
chunk__34807_34815 = G__34820;
count__34808_34816 = G__34821;
i__34809_34817 = G__34822;
continue;
} else {
var temp__5720__auto___34823 = cljs.core.seq.call(null,seq__34806_34814);
if(temp__5720__auto___34823){
var seq__34806_34824__$1 = temp__5720__auto___34823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34806_34824__$1)){
var c__4556__auto___34825 = cljs.core.chunk_first.call(null,seq__34806_34824__$1);
var G__34826 = cljs.core.chunk_rest.call(null,seq__34806_34824__$1);
var G__34827 = c__4556__auto___34825;
var G__34828 = cljs.core.count.call(null,c__4556__auto___34825);
var G__34829 = (0);
seq__34806_34814 = G__34826;
chunk__34807_34815 = G__34827;
count__34808_34816 = G__34828;
i__34809_34817 = G__34829;
continue;
} else {
var req_34830 = cljs.core.first.call(null,seq__34806_34824__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34830,prov);


var G__34831 = cljs.core.next.call(null,seq__34806_34824__$1);
var G__34832 = null;
var G__34833 = (0);
var G__34834 = (0);
seq__34806_34814 = G__34831;
chunk__34807_34815 = G__34832;
count__34808_34816 = G__34833;
i__34809_34817 = G__34834;
continue;
}
} else {
}
}
break;
}


var G__34835 = seq__34794;
var G__34836 = chunk__34795;
var G__34837 = count__34796;
var G__34838 = (i__34797 + (1));
seq__34794 = G__34835;
chunk__34795 = G__34836;
count__34796 = G__34837;
i__34797 = G__34838;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34794);
if(temp__5720__auto__){
var seq__34794__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34794__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__34794__$1);
var G__34839 = cljs.core.chunk_rest.call(null,seq__34794__$1);
var G__34840 = c__4556__auto__;
var G__34841 = cljs.core.count.call(null,c__4556__auto__);
var G__34842 = (0);
seq__34794 = G__34839;
chunk__34795 = G__34840;
count__34796 = G__34841;
i__34797 = G__34842;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34794__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34810_34843 = cljs.core.seq.call(null,requires);
var chunk__34811_34844 = null;
var count__34812_34845 = (0);
var i__34813_34846 = (0);
while(true){
if((i__34813_34846 < count__34812_34845)){
var req_34847 = cljs.core._nth.call(null,chunk__34811_34844,i__34813_34846);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34847,prov);


var G__34848 = seq__34810_34843;
var G__34849 = chunk__34811_34844;
var G__34850 = count__34812_34845;
var G__34851 = (i__34813_34846 + (1));
seq__34810_34843 = G__34848;
chunk__34811_34844 = G__34849;
count__34812_34845 = G__34850;
i__34813_34846 = G__34851;
continue;
} else {
var temp__5720__auto___34852__$1 = cljs.core.seq.call(null,seq__34810_34843);
if(temp__5720__auto___34852__$1){
var seq__34810_34853__$1 = temp__5720__auto___34852__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34810_34853__$1)){
var c__4556__auto___34854 = cljs.core.chunk_first.call(null,seq__34810_34853__$1);
var G__34855 = cljs.core.chunk_rest.call(null,seq__34810_34853__$1);
var G__34856 = c__4556__auto___34854;
var G__34857 = cljs.core.count.call(null,c__4556__auto___34854);
var G__34858 = (0);
seq__34810_34843 = G__34855;
chunk__34811_34844 = G__34856;
count__34812_34845 = G__34857;
i__34813_34846 = G__34858;
continue;
} else {
var req_34859 = cljs.core.first.call(null,seq__34810_34853__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34859,prov);


var G__34860 = cljs.core.next.call(null,seq__34810_34853__$1);
var G__34861 = null;
var G__34862 = (0);
var G__34863 = (0);
seq__34810_34843 = G__34860;
chunk__34811_34844 = G__34861;
count__34812_34845 = G__34862;
i__34813_34846 = G__34863;
continue;
}
} else {
}
}
break;
}


var G__34864 = cljs.core.next.call(null,seq__34794__$1);
var G__34865 = null;
var G__34866 = (0);
var G__34867 = (0);
seq__34794 = G__34864;
chunk__34795 = G__34865;
count__34796 = G__34866;
i__34797 = G__34867;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34868_34872 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34869_34873 = null;
var count__34870_34874 = (0);
var i__34871_34875 = (0);
while(true){
if((i__34871_34875 < count__34870_34874)){
var ns_34876 = cljs.core._nth.call(null,chunk__34869_34873,i__34871_34875);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34876);


var G__34877 = seq__34868_34872;
var G__34878 = chunk__34869_34873;
var G__34879 = count__34870_34874;
var G__34880 = (i__34871_34875 + (1));
seq__34868_34872 = G__34877;
chunk__34869_34873 = G__34878;
count__34870_34874 = G__34879;
i__34871_34875 = G__34880;
continue;
} else {
var temp__5720__auto___34881 = cljs.core.seq.call(null,seq__34868_34872);
if(temp__5720__auto___34881){
var seq__34868_34882__$1 = temp__5720__auto___34881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34868_34882__$1)){
var c__4556__auto___34883 = cljs.core.chunk_first.call(null,seq__34868_34882__$1);
var G__34884 = cljs.core.chunk_rest.call(null,seq__34868_34882__$1);
var G__34885 = c__4556__auto___34883;
var G__34886 = cljs.core.count.call(null,c__4556__auto___34883);
var G__34887 = (0);
seq__34868_34872 = G__34884;
chunk__34869_34873 = G__34885;
count__34870_34874 = G__34886;
i__34871_34875 = G__34887;
continue;
} else {
var ns_34888 = cljs.core.first.call(null,seq__34868_34882__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34888);


var G__34889 = cljs.core.next.call(null,seq__34868_34882__$1);
var G__34890 = null;
var G__34891 = (0);
var G__34892 = (0);
seq__34868_34872 = G__34889;
chunk__34869_34873 = G__34890;
count__34870_34874 = G__34891;
i__34871_34875 = G__34892;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__34893__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34894__i = 0, G__34894__a = new Array(arguments.length -  0);
while (G__34894__i < G__34894__a.length) {G__34894__a[G__34894__i] = arguments[G__34894__i + 0]; ++G__34894__i;}
  args = new cljs.core.IndexedSeq(G__34894__a,0,null);
} 
return G__34893__delegate.call(this,args);};
G__34893.cljs$lang$maxFixedArity = 0;
G__34893.cljs$lang$applyTo = (function (arglist__34895){
var args = cljs.core.seq(arglist__34895);
return G__34893__delegate(args);
});
G__34893.cljs$core$IFn$_invoke$arity$variadic = G__34893__delegate;
return G__34893;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__34896_SHARP_,p2__34897_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34896_SHARP_)),p2__34897_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__34898_SHARP_,p2__34899_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34898_SHARP_),p2__34899_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34900 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34900.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__34900.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__34900;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34901){if((e34901 instanceof Error)){
var e = e34901;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34901;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34902){if((e34902 instanceof Error)){
var e = e34902;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34902;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34903 = cljs.core._EQ_;
var expr__34904 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34903.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34904))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__34903.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34904))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__34903.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34904))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34906,callback){
var map__34907 = p__34906;
var map__34907__$1 = (((((!((map__34907 == null))))?(((((map__34907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34907):map__34907);
var file_msg = map__34907__$1;
var request_url = cljs.core.get.call(null,map__34907__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32636__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_34945){
var state_val_34946 = (state_34945[(1)]);
if((state_val_34946 === (7))){
var inst_34941 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
var statearr_34947_34973 = state_34945__$1;
(statearr_34947_34973[(2)] = inst_34941);

(statearr_34947_34973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (1))){
var state_34945__$1 = state_34945;
var statearr_34948_34974 = state_34945__$1;
(statearr_34948_34974[(2)] = null);

(statearr_34948_34974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (4))){
var inst_34911 = (state_34945[(7)]);
var inst_34911__$1 = (state_34945[(2)]);
var state_34945__$1 = (function (){var statearr_34949 = state_34945;
(statearr_34949[(7)] = inst_34911__$1);

return statearr_34949;
})();
if(cljs.core.truth_(inst_34911__$1)){
var statearr_34950_34975 = state_34945__$1;
(statearr_34950_34975[(1)] = (5));

} else {
var statearr_34951_34976 = state_34945__$1;
(statearr_34951_34976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (15))){
var inst_34924 = (state_34945[(8)]);
var inst_34926 = (state_34945[(9)]);
var inst_34928 = inst_34926.call(null,inst_34924);
var state_34945__$1 = state_34945;
var statearr_34952_34977 = state_34945__$1;
(statearr_34952_34977[(2)] = inst_34928);

(statearr_34952_34977[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (13))){
var inst_34935 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
var statearr_34953_34978 = state_34945__$1;
(statearr_34953_34978[(2)] = inst_34935);

(statearr_34953_34978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (6))){
var state_34945__$1 = state_34945;
var statearr_34954_34979 = state_34945__$1;
(statearr_34954_34979[(2)] = null);

(statearr_34954_34979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (17))){
var inst_34932 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
var statearr_34955_34980 = state_34945__$1;
(statearr_34955_34980[(2)] = inst_34932);

(statearr_34955_34980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (3))){
var inst_34943 = (state_34945[(2)]);
var state_34945__$1 = state_34945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34945__$1,inst_34943);
} else {
if((state_val_34946 === (12))){
var state_34945__$1 = state_34945;
var statearr_34956_34981 = state_34945__$1;
(statearr_34956_34981[(2)] = null);

(statearr_34956_34981[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (2))){
var state_34945__$1 = state_34945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34945__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34946 === (11))){
var inst_34916 = (state_34945[(10)]);
var inst_34922 = figwheel.client.file_reloading.blocking_load.call(null,inst_34916);
var state_34945__$1 = state_34945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34945__$1,(14),inst_34922);
} else {
if((state_val_34946 === (9))){
var inst_34916 = (state_34945[(10)]);
var state_34945__$1 = state_34945;
if(cljs.core.truth_(inst_34916)){
var statearr_34957_34982 = state_34945__$1;
(statearr_34957_34982[(1)] = (11));

} else {
var statearr_34958_34983 = state_34945__$1;
(statearr_34958_34983[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (5))){
var inst_34917 = (state_34945[(11)]);
var inst_34911 = (state_34945[(7)]);
var inst_34916 = cljs.core.nth.call(null,inst_34911,(0),null);
var inst_34917__$1 = cljs.core.nth.call(null,inst_34911,(1),null);
var state_34945__$1 = (function (){var statearr_34959 = state_34945;
(statearr_34959[(10)] = inst_34916);

(statearr_34959[(11)] = inst_34917__$1);

return statearr_34959;
})();
if(cljs.core.truth_(inst_34917__$1)){
var statearr_34960_34984 = state_34945__$1;
(statearr_34960_34984[(1)] = (8));

} else {
var statearr_34961_34985 = state_34945__$1;
(statearr_34961_34985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (14))){
var inst_34926 = (state_34945[(9)]);
var inst_34916 = (state_34945[(10)]);
var inst_34924 = (state_34945[(2)]);
var inst_34925 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34926__$1 = cljs.core.get.call(null,inst_34925,inst_34916);
var state_34945__$1 = (function (){var statearr_34962 = state_34945;
(statearr_34962[(8)] = inst_34924);

(statearr_34962[(9)] = inst_34926__$1);

return statearr_34962;
})();
if(cljs.core.truth_(inst_34926__$1)){
var statearr_34963_34986 = state_34945__$1;
(statearr_34963_34986[(1)] = (15));

} else {
var statearr_34964_34987 = state_34945__$1;
(statearr_34964_34987[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (16))){
var inst_34924 = (state_34945[(8)]);
var inst_34930 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34924);
var state_34945__$1 = state_34945;
var statearr_34965_34988 = state_34945__$1;
(statearr_34965_34988[(2)] = inst_34930);

(statearr_34965_34988[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (10))){
var inst_34937 = (state_34945[(2)]);
var state_34945__$1 = (function (){var statearr_34966 = state_34945;
(statearr_34966[(12)] = inst_34937);

return statearr_34966;
})();
var statearr_34967_34989 = state_34945__$1;
(statearr_34967_34989[(2)] = null);

(statearr_34967_34989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34946 === (8))){
var inst_34917 = (state_34945[(11)]);
var inst_34919 = eval(inst_34917);
var state_34945__$1 = state_34945;
var statearr_34968_34990 = state_34945__$1;
(statearr_34968_34990[(2)] = inst_34919);

(statearr_34968_34990[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__32542__auto__ = null;
var figwheel$client$file_reloading$state_machine__32542__auto____0 = (function (){
var statearr_34969 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34969[(0)] = figwheel$client$file_reloading$state_machine__32542__auto__);

(statearr_34969[(1)] = (1));

return statearr_34969;
});
var figwheel$client$file_reloading$state_machine__32542__auto____1 = (function (state_34945){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_34945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e34970){if((e34970 instanceof Object)){
var ex__32545__auto__ = e34970;
var statearr_34971_34991 = state_34945;
(statearr_34971_34991[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34992 = state_34945;
state_34945 = G__34992;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32542__auto__ = function(state_34945){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32542__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32542__auto____1.call(this,state_34945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32542__auto____0;
figwheel$client$file_reloading$state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32542__auto____1;
return figwheel$client$file_reloading$state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_34972 = f__32637__auto__.call(null);
(statearr_34972[(6)] = c__32636__auto__);

return statearr_34972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));

return c__32636__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__34994 = arguments.length;
switch (G__34994) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34996,callback){
var map__34997 = p__34996;
var map__34997__$1 = (((((!((map__34997 == null))))?(((((map__34997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34997):map__34997);
var file_msg = map__34997__$1;
var namespace = cljs.core.get.call(null,map__34997__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34999){
var map__35000 = p__34999;
var map__35000__$1 = (((((!((map__35000 == null))))?(((((map__35000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35000):map__35000);
var file_msg = map__35000__$1;
var namespace = cljs.core.get.call(null,map__35000__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35002){
var map__35003 = p__35002;
var map__35003__$1 = (((((!((map__35003 == null))))?(((((map__35003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35003):map__35003);
var file_msg = map__35003__$1;
var namespace = cljs.core.get.call(null,map__35003__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35005,callback){
var map__35006 = p__35005;
var map__35006__$1 = (((((!((map__35006 == null))))?(((((map__35006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35006):map__35006);
var file_msg = map__35006__$1;
var request_url = cljs.core.get.call(null,map__35006__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35006__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32636__auto___35056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_35041){
var state_val_35042 = (state_35041[(1)]);
if((state_val_35042 === (1))){
var inst_35015 = cljs.core.seq.call(null,files);
var inst_35016 = cljs.core.first.call(null,inst_35015);
var inst_35017 = cljs.core.next.call(null,inst_35015);
var inst_35018 = files;
var state_35041__$1 = (function (){var statearr_35043 = state_35041;
(statearr_35043[(7)] = inst_35018);

(statearr_35043[(8)] = inst_35017);

(statearr_35043[(9)] = inst_35016);

return statearr_35043;
})();
var statearr_35044_35057 = state_35041__$1;
(statearr_35044_35057[(2)] = null);

(statearr_35044_35057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (2))){
var inst_35018 = (state_35041[(7)]);
var inst_35024 = (state_35041[(10)]);
var inst_35023 = cljs.core.seq.call(null,inst_35018);
var inst_35024__$1 = cljs.core.first.call(null,inst_35023);
var inst_35025 = cljs.core.next.call(null,inst_35023);
var inst_35026 = (inst_35024__$1 == null);
var inst_35027 = cljs.core.not.call(null,inst_35026);
var state_35041__$1 = (function (){var statearr_35045 = state_35041;
(statearr_35045[(10)] = inst_35024__$1);

(statearr_35045[(11)] = inst_35025);

return statearr_35045;
})();
if(inst_35027){
var statearr_35046_35058 = state_35041__$1;
(statearr_35046_35058[(1)] = (4));

} else {
var statearr_35047_35059 = state_35041__$1;
(statearr_35047_35059[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (3))){
var inst_35039 = (state_35041[(2)]);
var state_35041__$1 = state_35041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35041__$1,inst_35039);
} else {
if((state_val_35042 === (4))){
var inst_35024 = (state_35041[(10)]);
var inst_35029 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35024);
var state_35041__$1 = state_35041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35041__$1,(7),inst_35029);
} else {
if((state_val_35042 === (5))){
var inst_35035 = cljs.core.async.close_BANG_.call(null,out);
var state_35041__$1 = state_35041;
var statearr_35048_35060 = state_35041__$1;
(statearr_35048_35060[(2)] = inst_35035);

(statearr_35048_35060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (6))){
var inst_35037 = (state_35041[(2)]);
var state_35041__$1 = state_35041;
var statearr_35049_35061 = state_35041__$1;
(statearr_35049_35061[(2)] = inst_35037);

(statearr_35049_35061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (7))){
var inst_35025 = (state_35041[(11)]);
var inst_35031 = (state_35041[(2)]);
var inst_35032 = cljs.core.async.put_BANG_.call(null,out,inst_35031);
var inst_35018 = inst_35025;
var state_35041__$1 = (function (){var statearr_35050 = state_35041;
(statearr_35050[(7)] = inst_35018);

(statearr_35050[(12)] = inst_35032);

return statearr_35050;
})();
var statearr_35051_35062 = state_35041__$1;
(statearr_35051_35062[(2)] = null);

(statearr_35051_35062[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32542__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32542__auto____0 = (function (){
var statearr_35052 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35052[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32542__auto__);

(statearr_35052[(1)] = (1));

return statearr_35052;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32542__auto____1 = (function (state_35041){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_35041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e35053){if((e35053 instanceof Object)){
var ex__32545__auto__ = e35053;
var statearr_35054_35063 = state_35041;
(statearr_35054_35063[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35064 = state_35041;
state_35041 = G__35064;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32542__auto__ = function(state_35041){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32542__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32542__auto____1.call(this,state_35041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32542__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32542__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_35055 = f__32637__auto__.call(null);
(statearr_35055[(6)] = c__32636__auto___35056);

return statearr_35055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35065,opts){
var map__35066 = p__35065;
var map__35066__$1 = (((((!((map__35066 == null))))?(((((map__35066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35066):map__35066);
var eval_body = cljs.core.get.call(null,map__35066__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35066__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35068){var e = e35068;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__35069_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35069_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35070){
var vec__35071 = p__35070;
var k = cljs.core.nth.call(null,vec__35071,(0),null);
var v = cljs.core.nth.call(null,vec__35071,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35074){
var vec__35075 = p__35074;
var k = cljs.core.nth.call(null,vec__35075,(0),null);
var v = cljs.core.nth.call(null,vec__35075,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35081,p__35082){
var map__35083 = p__35081;
var map__35083__$1 = (((((!((map__35083 == null))))?(((((map__35083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35083):map__35083);
var opts = map__35083__$1;
var before_jsload = cljs.core.get.call(null,map__35083__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35083__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35083__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35084 = p__35082;
var map__35084__$1 = (((((!((map__35084 == null))))?(((((map__35084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35084):map__35084);
var msg = map__35084__$1;
var files = cljs.core.get.call(null,map__35084__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35084__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35084__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32636__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32637__auto__ = (function (){var switch__32541__auto__ = (function (state_35238){
var state_val_35239 = (state_35238[(1)]);
if((state_val_35239 === (7))){
var inst_35098 = (state_35238[(7)]);
var inst_35101 = (state_35238[(8)]);
var inst_35099 = (state_35238[(9)]);
var inst_35100 = (state_35238[(10)]);
var inst_35106 = cljs.core._nth.call(null,inst_35099,inst_35101);
var inst_35107 = figwheel.client.file_reloading.eval_body.call(null,inst_35106,opts);
var inst_35108 = (inst_35101 + (1));
var tmp35240 = inst_35098;
var tmp35241 = inst_35099;
var tmp35242 = inst_35100;
var inst_35098__$1 = tmp35240;
var inst_35099__$1 = tmp35241;
var inst_35100__$1 = tmp35242;
var inst_35101__$1 = inst_35108;
var state_35238__$1 = (function (){var statearr_35243 = state_35238;
(statearr_35243[(11)] = inst_35107);

(statearr_35243[(7)] = inst_35098__$1);

(statearr_35243[(8)] = inst_35101__$1);

(statearr_35243[(9)] = inst_35099__$1);

(statearr_35243[(10)] = inst_35100__$1);

return statearr_35243;
})();
var statearr_35244_35327 = state_35238__$1;
(statearr_35244_35327[(2)] = null);

(statearr_35244_35327[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (20))){
var inst_35141 = (state_35238[(12)]);
var inst_35149 = figwheel.client.file_reloading.sort_files.call(null,inst_35141);
var state_35238__$1 = state_35238;
var statearr_35245_35328 = state_35238__$1;
(statearr_35245_35328[(2)] = inst_35149);

(statearr_35245_35328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (27))){
var state_35238__$1 = state_35238;
var statearr_35246_35329 = state_35238__$1;
(statearr_35246_35329[(2)] = null);

(statearr_35246_35329[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (1))){
var inst_35090 = (state_35238[(13)]);
var inst_35087 = before_jsload.call(null,files);
var inst_35088 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35089 = (function (){return (function (p1__35078_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35078_SHARP_);
});
})();
var inst_35090__$1 = cljs.core.filter.call(null,inst_35089,files);
var inst_35091 = cljs.core.not_empty.call(null,inst_35090__$1);
var state_35238__$1 = (function (){var statearr_35247 = state_35238;
(statearr_35247[(13)] = inst_35090__$1);

(statearr_35247[(14)] = inst_35088);

(statearr_35247[(15)] = inst_35087);

return statearr_35247;
})();
if(cljs.core.truth_(inst_35091)){
var statearr_35248_35330 = state_35238__$1;
(statearr_35248_35330[(1)] = (2));

} else {
var statearr_35249_35331 = state_35238__$1;
(statearr_35249_35331[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (24))){
var state_35238__$1 = state_35238;
var statearr_35250_35332 = state_35238__$1;
(statearr_35250_35332[(2)] = null);

(statearr_35250_35332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (39))){
var inst_35191 = (state_35238[(16)]);
var state_35238__$1 = state_35238;
var statearr_35251_35333 = state_35238__$1;
(statearr_35251_35333[(2)] = inst_35191);

(statearr_35251_35333[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (46))){
var inst_35233 = (state_35238[(2)]);
var state_35238__$1 = state_35238;
var statearr_35252_35334 = state_35238__$1;
(statearr_35252_35334[(2)] = inst_35233);

(statearr_35252_35334[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (4))){
var inst_35135 = (state_35238[(2)]);
var inst_35136 = cljs.core.List.EMPTY;
var inst_35137 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35136);
var inst_35138 = (function (){return (function (p1__35079_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35079_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35079_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35079_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_35139 = cljs.core.filter.call(null,inst_35138,files);
var inst_35140 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35141 = cljs.core.concat.call(null,inst_35139,inst_35140);
var state_35238__$1 = (function (){var statearr_35253 = state_35238;
(statearr_35253[(17)] = inst_35135);

(statearr_35253[(18)] = inst_35137);

(statearr_35253[(12)] = inst_35141);

return statearr_35253;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35254_35335 = state_35238__$1;
(statearr_35254_35335[(1)] = (16));

} else {
var statearr_35255_35336 = state_35238__$1;
(statearr_35255_35336[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (15))){
var inst_35125 = (state_35238[(2)]);
var state_35238__$1 = state_35238;
var statearr_35256_35337 = state_35238__$1;
(statearr_35256_35337[(2)] = inst_35125);

(statearr_35256_35337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (21))){
var inst_35151 = (state_35238[(19)]);
var inst_35151__$1 = (state_35238[(2)]);
var inst_35152 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35151__$1);
var state_35238__$1 = (function (){var statearr_35257 = state_35238;
(statearr_35257[(19)] = inst_35151__$1);

return statearr_35257;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35238__$1,(22),inst_35152);
} else {
if((state_val_35239 === (31))){
var inst_35236 = (state_35238[(2)]);
var state_35238__$1 = state_35238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35238__$1,inst_35236);
} else {
if((state_val_35239 === (32))){
var inst_35191 = (state_35238[(16)]);
var inst_35196 = inst_35191.cljs$lang$protocol_mask$partition0$;
var inst_35197 = (inst_35196 & (64));
var inst_35198 = inst_35191.cljs$core$ISeq$;
var inst_35199 = (cljs.core.PROTOCOL_SENTINEL === inst_35198);
var inst_35200 = ((inst_35197) || (inst_35199));
var state_35238__$1 = state_35238;
if(cljs.core.truth_(inst_35200)){
var statearr_35258_35338 = state_35238__$1;
(statearr_35258_35338[(1)] = (35));

} else {
var statearr_35259_35339 = state_35238__$1;
(statearr_35259_35339[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (40))){
var inst_35213 = (state_35238[(20)]);
var inst_35212 = (state_35238[(2)]);
var inst_35213__$1 = cljs.core.get.call(null,inst_35212,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35214 = cljs.core.get.call(null,inst_35212,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35215 = cljs.core.not_empty.call(null,inst_35213__$1);
var state_35238__$1 = (function (){var statearr_35260 = state_35238;
(statearr_35260[(20)] = inst_35213__$1);

(statearr_35260[(21)] = inst_35214);

return statearr_35260;
})();
if(cljs.core.truth_(inst_35215)){
var statearr_35261_35340 = state_35238__$1;
(statearr_35261_35340[(1)] = (41));

} else {
var statearr_35262_35341 = state_35238__$1;
(statearr_35262_35341[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (33))){
var state_35238__$1 = state_35238;
var statearr_35263_35342 = state_35238__$1;
(statearr_35263_35342[(2)] = false);

(statearr_35263_35342[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (13))){
var inst_35111 = (state_35238[(22)]);
var inst_35115 = cljs.core.chunk_first.call(null,inst_35111);
var inst_35116 = cljs.core.chunk_rest.call(null,inst_35111);
var inst_35117 = cljs.core.count.call(null,inst_35115);
var inst_35098 = inst_35116;
var inst_35099 = inst_35115;
var inst_35100 = inst_35117;
var inst_35101 = (0);
var state_35238__$1 = (function (){var statearr_35264 = state_35238;
(statearr_35264[(7)] = inst_35098);

(statearr_35264[(8)] = inst_35101);

(statearr_35264[(9)] = inst_35099);

(statearr_35264[(10)] = inst_35100);

return statearr_35264;
})();
var statearr_35265_35343 = state_35238__$1;
(statearr_35265_35343[(2)] = null);

(statearr_35265_35343[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (22))){
var inst_35159 = (state_35238[(23)]);
var inst_35155 = (state_35238[(24)]);
var inst_35151 = (state_35238[(19)]);
var inst_35154 = (state_35238[(25)]);
var inst_35154__$1 = (state_35238[(2)]);
var inst_35155__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35154__$1);
var inst_35156 = (function (){var all_files = inst_35151;
var res_SINGLEQUOTE_ = inst_35154__$1;
var res = inst_35155__$1;
return (function (p1__35080_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35080_SHARP_));
});
})();
var inst_35157 = cljs.core.filter.call(null,inst_35156,inst_35154__$1);
var inst_35158 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35159__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35158);
var inst_35160 = cljs.core.not_empty.call(null,inst_35159__$1);
var state_35238__$1 = (function (){var statearr_35266 = state_35238;
(statearr_35266[(23)] = inst_35159__$1);

(statearr_35266[(24)] = inst_35155__$1);

(statearr_35266[(26)] = inst_35157);

(statearr_35266[(25)] = inst_35154__$1);

return statearr_35266;
})();
if(cljs.core.truth_(inst_35160)){
var statearr_35267_35344 = state_35238__$1;
(statearr_35267_35344[(1)] = (23));

} else {
var statearr_35268_35345 = state_35238__$1;
(statearr_35268_35345[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (36))){
var state_35238__$1 = state_35238;
var statearr_35269_35346 = state_35238__$1;
(statearr_35269_35346[(2)] = false);

(statearr_35269_35346[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (41))){
var inst_35213 = (state_35238[(20)]);
var inst_35217 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35218 = cljs.core.map.call(null,inst_35217,inst_35213);
var inst_35219 = cljs.core.pr_str.call(null,inst_35218);
var inst_35220 = ["figwheel-no-load meta-data: ",inst_35219].join('');
var inst_35221 = figwheel.client.utils.log.call(null,inst_35220);
var state_35238__$1 = state_35238;
var statearr_35270_35347 = state_35238__$1;
(statearr_35270_35347[(2)] = inst_35221);

(statearr_35270_35347[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (43))){
var inst_35214 = (state_35238[(21)]);
var inst_35224 = (state_35238[(2)]);
var inst_35225 = cljs.core.not_empty.call(null,inst_35214);
var state_35238__$1 = (function (){var statearr_35271 = state_35238;
(statearr_35271[(27)] = inst_35224);

return statearr_35271;
})();
if(cljs.core.truth_(inst_35225)){
var statearr_35272_35348 = state_35238__$1;
(statearr_35272_35348[(1)] = (44));

} else {
var statearr_35273_35349 = state_35238__$1;
(statearr_35273_35349[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (29))){
var inst_35159 = (state_35238[(23)]);
var inst_35155 = (state_35238[(24)]);
var inst_35157 = (state_35238[(26)]);
var inst_35151 = (state_35238[(19)]);
var inst_35191 = (state_35238[(16)]);
var inst_35154 = (state_35238[(25)]);
var inst_35187 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35190 = (function (){var all_files = inst_35151;
var res_SINGLEQUOTE_ = inst_35154;
var res = inst_35155;
var files_not_loaded = inst_35157;
var dependencies_that_loaded = inst_35159;
return (function (p__35189){
var map__35274 = p__35189;
var map__35274__$1 = (((((!((map__35274 == null))))?(((((map__35274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35274):map__35274);
var namespace = cljs.core.get.call(null,map__35274__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_35191__$1 = cljs.core.group_by.call(null,inst_35190,inst_35157);
var inst_35193 = (inst_35191__$1 == null);
var inst_35194 = cljs.core.not.call(null,inst_35193);
var state_35238__$1 = (function (){var statearr_35276 = state_35238;
(statearr_35276[(28)] = inst_35187);

(statearr_35276[(16)] = inst_35191__$1);

return statearr_35276;
})();
if(inst_35194){
var statearr_35277_35350 = state_35238__$1;
(statearr_35277_35350[(1)] = (32));

} else {
var statearr_35278_35351 = state_35238__$1;
(statearr_35278_35351[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (44))){
var inst_35214 = (state_35238[(21)]);
var inst_35227 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35214);
var inst_35228 = cljs.core.pr_str.call(null,inst_35227);
var inst_35229 = ["not required: ",inst_35228].join('');
var inst_35230 = figwheel.client.utils.log.call(null,inst_35229);
var state_35238__$1 = state_35238;
var statearr_35279_35352 = state_35238__$1;
(statearr_35279_35352[(2)] = inst_35230);

(statearr_35279_35352[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (6))){
var inst_35132 = (state_35238[(2)]);
var state_35238__$1 = state_35238;
var statearr_35280_35353 = state_35238__$1;
(statearr_35280_35353[(2)] = inst_35132);

(statearr_35280_35353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (28))){
var inst_35157 = (state_35238[(26)]);
var inst_35184 = (state_35238[(2)]);
var inst_35185 = cljs.core.not_empty.call(null,inst_35157);
var state_35238__$1 = (function (){var statearr_35281 = state_35238;
(statearr_35281[(29)] = inst_35184);

return statearr_35281;
})();
if(cljs.core.truth_(inst_35185)){
var statearr_35282_35354 = state_35238__$1;
(statearr_35282_35354[(1)] = (29));

} else {
var statearr_35283_35355 = state_35238__$1;
(statearr_35283_35355[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (25))){
var inst_35155 = (state_35238[(24)]);
var inst_35171 = (state_35238[(2)]);
var inst_35172 = cljs.core.not_empty.call(null,inst_35155);
var state_35238__$1 = (function (){var statearr_35284 = state_35238;
(statearr_35284[(30)] = inst_35171);

return statearr_35284;
})();
if(cljs.core.truth_(inst_35172)){
var statearr_35285_35356 = state_35238__$1;
(statearr_35285_35356[(1)] = (26));

} else {
var statearr_35286_35357 = state_35238__$1;
(statearr_35286_35357[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (34))){
var inst_35207 = (state_35238[(2)]);
var state_35238__$1 = state_35238;
if(cljs.core.truth_(inst_35207)){
var statearr_35287_35358 = state_35238__$1;
(statearr_35287_35358[(1)] = (38));

} else {
var statearr_35288_35359 = state_35238__$1;
(statearr_35288_35359[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (17))){
var state_35238__$1 = state_35238;
var statearr_35289_35360 = state_35238__$1;
(statearr_35289_35360[(2)] = recompile_dependents);

(statearr_35289_35360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (3))){
var state_35238__$1 = state_35238;
var statearr_35290_35361 = state_35238__$1;
(statearr_35290_35361[(2)] = null);

(statearr_35290_35361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (12))){
var inst_35128 = (state_35238[(2)]);
var state_35238__$1 = state_35238;
var statearr_35291_35362 = state_35238__$1;
(statearr_35291_35362[(2)] = inst_35128);

(statearr_35291_35362[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (2))){
var inst_35090 = (state_35238[(13)]);
var inst_35097 = cljs.core.seq.call(null,inst_35090);
var inst_35098 = inst_35097;
var inst_35099 = null;
var inst_35100 = (0);
var inst_35101 = (0);
var state_35238__$1 = (function (){var statearr_35292 = state_35238;
(statearr_35292[(7)] = inst_35098);

(statearr_35292[(8)] = inst_35101);

(statearr_35292[(9)] = inst_35099);

(statearr_35292[(10)] = inst_35100);

return statearr_35292;
})();
var statearr_35293_35363 = state_35238__$1;
(statearr_35293_35363[(2)] = null);

(statearr_35293_35363[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (23))){
var inst_35159 = (state_35238[(23)]);
var inst_35155 = (state_35238[(24)]);
var inst_35157 = (state_35238[(26)]);
var inst_35151 = (state_35238[(19)]);
var inst_35154 = (state_35238[(25)]);
var inst_35162 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35164 = (function (){var all_files = inst_35151;
var res_SINGLEQUOTE_ = inst_35154;
var res = inst_35155;
var files_not_loaded = inst_35157;
var dependencies_that_loaded = inst_35159;
return (function (p__35163){
var map__35294 = p__35163;
var map__35294__$1 = (((((!((map__35294 == null))))?(((((map__35294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35294):map__35294);
var request_url = cljs.core.get.call(null,map__35294__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_35165 = cljs.core.reverse.call(null,inst_35159);
var inst_35166 = cljs.core.map.call(null,inst_35164,inst_35165);
var inst_35167 = cljs.core.pr_str.call(null,inst_35166);
var inst_35168 = figwheel.client.utils.log.call(null,inst_35167);
var state_35238__$1 = (function (){var statearr_35296 = state_35238;
(statearr_35296[(31)] = inst_35162);

return statearr_35296;
})();
var statearr_35297_35364 = state_35238__$1;
(statearr_35297_35364[(2)] = inst_35168);

(statearr_35297_35364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (35))){
var state_35238__$1 = state_35238;
var statearr_35298_35365 = state_35238__$1;
(statearr_35298_35365[(2)] = true);

(statearr_35298_35365[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (19))){
var inst_35141 = (state_35238[(12)]);
var inst_35147 = figwheel.client.file_reloading.expand_files.call(null,inst_35141);
var state_35238__$1 = state_35238;
var statearr_35299_35366 = state_35238__$1;
(statearr_35299_35366[(2)] = inst_35147);

(statearr_35299_35366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (11))){
var state_35238__$1 = state_35238;
var statearr_35300_35367 = state_35238__$1;
(statearr_35300_35367[(2)] = null);

(statearr_35300_35367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (9))){
var inst_35130 = (state_35238[(2)]);
var state_35238__$1 = state_35238;
var statearr_35301_35368 = state_35238__$1;
(statearr_35301_35368[(2)] = inst_35130);

(statearr_35301_35368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (5))){
var inst_35101 = (state_35238[(8)]);
var inst_35100 = (state_35238[(10)]);
var inst_35103 = (inst_35101 < inst_35100);
var inst_35104 = inst_35103;
var state_35238__$1 = state_35238;
if(cljs.core.truth_(inst_35104)){
var statearr_35302_35369 = state_35238__$1;
(statearr_35302_35369[(1)] = (7));

} else {
var statearr_35303_35370 = state_35238__$1;
(statearr_35303_35370[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (14))){
var inst_35111 = (state_35238[(22)]);
var inst_35120 = cljs.core.first.call(null,inst_35111);
var inst_35121 = figwheel.client.file_reloading.eval_body.call(null,inst_35120,opts);
var inst_35122 = cljs.core.next.call(null,inst_35111);
var inst_35098 = inst_35122;
var inst_35099 = null;
var inst_35100 = (0);
var inst_35101 = (0);
var state_35238__$1 = (function (){var statearr_35304 = state_35238;
(statearr_35304[(32)] = inst_35121);

(statearr_35304[(7)] = inst_35098);

(statearr_35304[(8)] = inst_35101);

(statearr_35304[(9)] = inst_35099);

(statearr_35304[(10)] = inst_35100);

return statearr_35304;
})();
var statearr_35305_35371 = state_35238__$1;
(statearr_35305_35371[(2)] = null);

(statearr_35305_35371[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (45))){
var state_35238__$1 = state_35238;
var statearr_35306_35372 = state_35238__$1;
(statearr_35306_35372[(2)] = null);

(statearr_35306_35372[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (26))){
var inst_35159 = (state_35238[(23)]);
var inst_35155 = (state_35238[(24)]);
var inst_35157 = (state_35238[(26)]);
var inst_35151 = (state_35238[(19)]);
var inst_35154 = (state_35238[(25)]);
var inst_35174 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35176 = (function (){var all_files = inst_35151;
var res_SINGLEQUOTE_ = inst_35154;
var res = inst_35155;
var files_not_loaded = inst_35157;
var dependencies_that_loaded = inst_35159;
return (function (p__35175){
var map__35307 = p__35175;
var map__35307__$1 = (((((!((map__35307 == null))))?(((((map__35307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35307):map__35307);
var namespace = cljs.core.get.call(null,map__35307__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35307__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_35177 = cljs.core.map.call(null,inst_35176,inst_35155);
var inst_35178 = cljs.core.pr_str.call(null,inst_35177);
var inst_35179 = figwheel.client.utils.log.call(null,inst_35178);
var inst_35180 = (function (){var all_files = inst_35151;
var res_SINGLEQUOTE_ = inst_35154;
var res = inst_35155;
var files_not_loaded = inst_35157;
var dependencies_that_loaded = inst_35159;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_35181 = setTimeout(inst_35180,(10));
var state_35238__$1 = (function (){var statearr_35309 = state_35238;
(statearr_35309[(33)] = inst_35179);

(statearr_35309[(34)] = inst_35174);

return statearr_35309;
})();
var statearr_35310_35373 = state_35238__$1;
(statearr_35310_35373[(2)] = inst_35181);

(statearr_35310_35373[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (16))){
var state_35238__$1 = state_35238;
var statearr_35311_35374 = state_35238__$1;
(statearr_35311_35374[(2)] = reload_dependents);

(statearr_35311_35374[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (38))){
var inst_35191 = (state_35238[(16)]);
var inst_35209 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35191);
var state_35238__$1 = state_35238;
var statearr_35312_35375 = state_35238__$1;
(statearr_35312_35375[(2)] = inst_35209);

(statearr_35312_35375[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (30))){
var state_35238__$1 = state_35238;
var statearr_35313_35376 = state_35238__$1;
(statearr_35313_35376[(2)] = null);

(statearr_35313_35376[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (10))){
var inst_35111 = (state_35238[(22)]);
var inst_35113 = cljs.core.chunked_seq_QMARK_.call(null,inst_35111);
var state_35238__$1 = state_35238;
if(inst_35113){
var statearr_35314_35377 = state_35238__$1;
(statearr_35314_35377[(1)] = (13));

} else {
var statearr_35315_35378 = state_35238__$1;
(statearr_35315_35378[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (18))){
var inst_35145 = (state_35238[(2)]);
var state_35238__$1 = state_35238;
if(cljs.core.truth_(inst_35145)){
var statearr_35316_35379 = state_35238__$1;
(statearr_35316_35379[(1)] = (19));

} else {
var statearr_35317_35380 = state_35238__$1;
(statearr_35317_35380[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (42))){
var state_35238__$1 = state_35238;
var statearr_35318_35381 = state_35238__$1;
(statearr_35318_35381[(2)] = null);

(statearr_35318_35381[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (37))){
var inst_35204 = (state_35238[(2)]);
var state_35238__$1 = state_35238;
var statearr_35319_35382 = state_35238__$1;
(statearr_35319_35382[(2)] = inst_35204);

(statearr_35319_35382[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35239 === (8))){
var inst_35111 = (state_35238[(22)]);
var inst_35098 = (state_35238[(7)]);
var inst_35111__$1 = cljs.core.seq.call(null,inst_35098);
var state_35238__$1 = (function (){var statearr_35320 = state_35238;
(statearr_35320[(22)] = inst_35111__$1);

return statearr_35320;
})();
if(inst_35111__$1){
var statearr_35321_35383 = state_35238__$1;
(statearr_35321_35383[(1)] = (10));

} else {
var statearr_35322_35384 = state_35238__$1;
(statearr_35322_35384[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32542__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32542__auto____0 = (function (){
var statearr_35323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35323[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32542__auto__);

(statearr_35323[(1)] = (1));

return statearr_35323;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32542__auto____1 = (function (state_35238){
while(true){
var ret_value__32543__auto__ = (function (){try{while(true){
var result__32544__auto__ = switch__32541__auto__.call(null,state_35238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32544__auto__;
}
break;
}
}catch (e35324){if((e35324 instanceof Object)){
var ex__32545__auto__ = e35324;
var statearr_35325_35385 = state_35238;
(statearr_35325_35385[(5)] = ex__32545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35386 = state_35238;
state_35238 = G__35386;
continue;
} else {
return ret_value__32543__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32542__auto__ = function(state_35238){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32542__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32542__auto____1.call(this,state_35238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32542__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32542__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32542__auto__;
})()
})();
var state__32638__auto__ = (function (){var statearr_35326 = f__32637__auto__.call(null);
(statearr_35326[(6)] = c__32636__auto__);

return statearr_35326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32638__auto__);
}));

return c__32636__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35389,link){
var map__35390 = p__35389;
var map__35390__$1 = (((((!((map__35390 == null))))?(((((map__35390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35390):map__35390);
var file = cljs.core.get.call(null,map__35390__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__35387_SHARP_,p2__35388_SHARP_){
if(cljs.core._EQ_.call(null,p1__35387_SHARP_,p2__35388_SHARP_)){
return p1__35387_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35393){
var map__35394 = p__35393;
var map__35394__$1 = (((((!((map__35394 == null))))?(((((map__35394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35394):map__35394);
var match_length = cljs.core.get.call(null,map__35394__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35394__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35392_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35392_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35396_SHARP_,p2__35397_SHARP_){
return cljs.core.assoc.call(null,p1__35396_SHARP_,cljs.core.get.call(null,p2__35397_SHARP_,key),p2__35397_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35398 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35398);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35398);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35399,p__35400){
var map__35401 = p__35399;
var map__35401__$1 = (((((!((map__35401 == null))))?(((((map__35401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35401):map__35401);
var on_cssload = cljs.core.get.call(null,map__35401__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35402 = p__35400;
var map__35402__$1 = (((((!((map__35402 == null))))?(((((map__35402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35402):map__35402);
var files_msg = map__35402__$1;
var files = cljs.core.get.call(null,map__35402__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1609481681394
