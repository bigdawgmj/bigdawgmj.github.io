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
var G__44078 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__44078 == null)){
return null;
} else {
return goog.object.get(G__44078,"requires");
}
}):(function (path){
var G__44079 = goog.object.get(goog.dependencies_.requires,path);
if((G__44079 == null)){
return null;
} else {
return goog.object.getKeys(G__44079);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__44080_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__44080_SHARP_)));
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
var G__44081 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__44081__$1 = (((G__44081 == null))?null:goog.object.get(G__44081,"provides"));
if((G__44081__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__44081__$1);
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
var seq__44082 = cljs.core.seq.call(null,provides);
var chunk__44083 = null;
var count__44084 = (0);
var i__44085 = (0);
while(true){
if((i__44085 < count__44084)){
var prov = cljs.core._nth.call(null,chunk__44083,i__44085);
var seq__44094_44106 = cljs.core.seq.call(null,requires);
var chunk__44095_44107 = null;
var count__44096_44108 = (0);
var i__44097_44109 = (0);
while(true){
if((i__44097_44109 < count__44096_44108)){
var req_44110 = cljs.core._nth.call(null,chunk__44095_44107,i__44097_44109);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44110,prov);


var G__44111 = seq__44094_44106;
var G__44112 = chunk__44095_44107;
var G__44113 = count__44096_44108;
var G__44114 = (i__44097_44109 + (1));
seq__44094_44106 = G__44111;
chunk__44095_44107 = G__44112;
count__44096_44108 = G__44113;
i__44097_44109 = G__44114;
continue;
} else {
var temp__5720__auto___44115 = cljs.core.seq.call(null,seq__44094_44106);
if(temp__5720__auto___44115){
var seq__44094_44116__$1 = temp__5720__auto___44115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44094_44116__$1)){
var c__4556__auto___44117 = cljs.core.chunk_first.call(null,seq__44094_44116__$1);
var G__44118 = cljs.core.chunk_rest.call(null,seq__44094_44116__$1);
var G__44119 = c__4556__auto___44117;
var G__44120 = cljs.core.count.call(null,c__4556__auto___44117);
var G__44121 = (0);
seq__44094_44106 = G__44118;
chunk__44095_44107 = G__44119;
count__44096_44108 = G__44120;
i__44097_44109 = G__44121;
continue;
} else {
var req_44122 = cljs.core.first.call(null,seq__44094_44116__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44122,prov);


var G__44123 = cljs.core.next.call(null,seq__44094_44116__$1);
var G__44124 = null;
var G__44125 = (0);
var G__44126 = (0);
seq__44094_44106 = G__44123;
chunk__44095_44107 = G__44124;
count__44096_44108 = G__44125;
i__44097_44109 = G__44126;
continue;
}
} else {
}
}
break;
}


var G__44127 = seq__44082;
var G__44128 = chunk__44083;
var G__44129 = count__44084;
var G__44130 = (i__44085 + (1));
seq__44082 = G__44127;
chunk__44083 = G__44128;
count__44084 = G__44129;
i__44085 = G__44130;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__44082);
if(temp__5720__auto__){
var seq__44082__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44082__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__44082__$1);
var G__44131 = cljs.core.chunk_rest.call(null,seq__44082__$1);
var G__44132 = c__4556__auto__;
var G__44133 = cljs.core.count.call(null,c__4556__auto__);
var G__44134 = (0);
seq__44082 = G__44131;
chunk__44083 = G__44132;
count__44084 = G__44133;
i__44085 = G__44134;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44082__$1);
var seq__44098_44135 = cljs.core.seq.call(null,requires);
var chunk__44099_44136 = null;
var count__44100_44137 = (0);
var i__44101_44138 = (0);
while(true){
if((i__44101_44138 < count__44100_44137)){
var req_44139 = cljs.core._nth.call(null,chunk__44099_44136,i__44101_44138);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44139,prov);


var G__44140 = seq__44098_44135;
var G__44141 = chunk__44099_44136;
var G__44142 = count__44100_44137;
var G__44143 = (i__44101_44138 + (1));
seq__44098_44135 = G__44140;
chunk__44099_44136 = G__44141;
count__44100_44137 = G__44142;
i__44101_44138 = G__44143;
continue;
} else {
var temp__5720__auto___44144__$1 = cljs.core.seq.call(null,seq__44098_44135);
if(temp__5720__auto___44144__$1){
var seq__44098_44145__$1 = temp__5720__auto___44144__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44098_44145__$1)){
var c__4556__auto___44146 = cljs.core.chunk_first.call(null,seq__44098_44145__$1);
var G__44147 = cljs.core.chunk_rest.call(null,seq__44098_44145__$1);
var G__44148 = c__4556__auto___44146;
var G__44149 = cljs.core.count.call(null,c__4556__auto___44146);
var G__44150 = (0);
seq__44098_44135 = G__44147;
chunk__44099_44136 = G__44148;
count__44100_44137 = G__44149;
i__44101_44138 = G__44150;
continue;
} else {
var req_44151 = cljs.core.first.call(null,seq__44098_44145__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44151,prov);


var G__44152 = cljs.core.next.call(null,seq__44098_44145__$1);
var G__44153 = null;
var G__44154 = (0);
var G__44155 = (0);
seq__44098_44135 = G__44152;
chunk__44099_44136 = G__44153;
count__44100_44137 = G__44154;
i__44101_44138 = G__44155;
continue;
}
} else {
}
}
break;
}


var G__44156 = cljs.core.next.call(null,seq__44082__$1);
var G__44157 = null;
var G__44158 = (0);
var G__44159 = (0);
seq__44082 = G__44156;
chunk__44083 = G__44157;
count__44084 = G__44158;
i__44085 = G__44159;
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
var seq__44102 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__44103 = null;
var count__44104 = (0);
var i__44105 = (0);
while(true){
if((i__44105 < count__44104)){
var prov = cljs.core._nth.call(null,chunk__44103,i__44105);
goog.object.forEach(deps,((function (seq__44102,chunk__44103,count__44104,i__44105,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__44102,chunk__44103,count__44104,i__44105,prov,requires))
);


var G__44160 = seq__44102;
var G__44161 = chunk__44103;
var G__44162 = count__44104;
var G__44163 = (i__44105 + (1));
seq__44102 = G__44160;
chunk__44103 = G__44161;
count__44104 = G__44162;
i__44105 = G__44163;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__44102);
if(temp__5720__auto__){
var seq__44102__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44102__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__44102__$1);
var G__44164 = cljs.core.chunk_rest.call(null,seq__44102__$1);
var G__44165 = c__4556__auto__;
var G__44166 = cljs.core.count.call(null,c__4556__auto__);
var G__44167 = (0);
seq__44102 = G__44164;
chunk__44103 = G__44165;
count__44104 = G__44166;
i__44105 = G__44167;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44102__$1);
goog.object.forEach(deps,((function (seq__44102,chunk__44103,count__44104,i__44105,prov,seq__44102__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__44102,chunk__44103,count__44104,i__44105,prov,seq__44102__$1,temp__5720__auto__,requires))
);


var G__44168 = cljs.core.next.call(null,seq__44102__$1);
var G__44169 = null;
var G__44170 = (0);
var G__44171 = (0);
seq__44102 = G__44168;
chunk__44103 = G__44169;
count__44104 = G__44170;
i__44105 = G__44171;
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
return cljs.core.some.call(null,(function (p__44172){
var vec__44173 = p__44172;
var _ = cljs.core.nth.call(null,vec__44173,(0),null);
var v = cljs.core.nth.call(null,vec__44173,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__44176){
var vec__44177 = p__44176;
var k = cljs.core.nth.call(null,vec__44177,(0),null);
var v = cljs.core.nth.call(null,vec__44177,(1),null);
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

var seq__44189_44197 = cljs.core.seq.call(null,deps);
var chunk__44190_44198 = null;
var count__44191_44199 = (0);
var i__44192_44200 = (0);
while(true){
if((i__44192_44200 < count__44191_44199)){
var dep_44201 = cljs.core._nth.call(null,chunk__44190_44198,i__44192_44200);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_44201;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_44201));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_44201,(depth + (1)),state);
} else {
}


var G__44202 = seq__44189_44197;
var G__44203 = chunk__44190_44198;
var G__44204 = count__44191_44199;
var G__44205 = (i__44192_44200 + (1));
seq__44189_44197 = G__44202;
chunk__44190_44198 = G__44203;
count__44191_44199 = G__44204;
i__44192_44200 = G__44205;
continue;
} else {
var temp__5720__auto___44206 = cljs.core.seq.call(null,seq__44189_44197);
if(temp__5720__auto___44206){
var seq__44189_44207__$1 = temp__5720__auto___44206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44189_44207__$1)){
var c__4556__auto___44208 = cljs.core.chunk_first.call(null,seq__44189_44207__$1);
var G__44209 = cljs.core.chunk_rest.call(null,seq__44189_44207__$1);
var G__44210 = c__4556__auto___44208;
var G__44211 = cljs.core.count.call(null,c__4556__auto___44208);
var G__44212 = (0);
seq__44189_44197 = G__44209;
chunk__44190_44198 = G__44210;
count__44191_44199 = G__44211;
i__44192_44200 = G__44212;
continue;
} else {
var dep_44213 = cljs.core.first.call(null,seq__44189_44207__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_44213;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_44213));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_44213,(depth + (1)),state);
} else {
}


var G__44214 = cljs.core.next.call(null,seq__44189_44207__$1);
var G__44215 = null;
var G__44216 = (0);
var G__44217 = (0);
seq__44189_44197 = G__44214;
chunk__44190_44198 = G__44215;
count__44191_44199 = G__44216;
i__44192_44200 = G__44217;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__44193){
var vec__44194 = p__44193;
var seq__44195 = cljs.core.seq.call(null,vec__44194);
var first__44196 = cljs.core.first.call(null,seq__44195);
var seq__44195__$1 = cljs.core.next.call(null,seq__44195);
var x = first__44196;
var xs = seq__44195__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__44180_SHARP_){
return clojure.set.difference.call(null,p1__44180_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__44218_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__44218_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__44219 = cljs.core.seq.call(null,provides);
var chunk__44220 = null;
var count__44221 = (0);
var i__44222 = (0);
while(true){
if((i__44222 < count__44221)){
var prov = cljs.core._nth.call(null,chunk__44220,i__44222);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44231_44239 = cljs.core.seq.call(null,requires);
var chunk__44232_44240 = null;
var count__44233_44241 = (0);
var i__44234_44242 = (0);
while(true){
if((i__44234_44242 < count__44233_44241)){
var req_44243 = cljs.core._nth.call(null,chunk__44232_44240,i__44234_44242);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44243,prov);


var G__44244 = seq__44231_44239;
var G__44245 = chunk__44232_44240;
var G__44246 = count__44233_44241;
var G__44247 = (i__44234_44242 + (1));
seq__44231_44239 = G__44244;
chunk__44232_44240 = G__44245;
count__44233_44241 = G__44246;
i__44234_44242 = G__44247;
continue;
} else {
var temp__5720__auto___44248 = cljs.core.seq.call(null,seq__44231_44239);
if(temp__5720__auto___44248){
var seq__44231_44249__$1 = temp__5720__auto___44248;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44231_44249__$1)){
var c__4556__auto___44250 = cljs.core.chunk_first.call(null,seq__44231_44249__$1);
var G__44251 = cljs.core.chunk_rest.call(null,seq__44231_44249__$1);
var G__44252 = c__4556__auto___44250;
var G__44253 = cljs.core.count.call(null,c__4556__auto___44250);
var G__44254 = (0);
seq__44231_44239 = G__44251;
chunk__44232_44240 = G__44252;
count__44233_44241 = G__44253;
i__44234_44242 = G__44254;
continue;
} else {
var req_44255 = cljs.core.first.call(null,seq__44231_44249__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44255,prov);


var G__44256 = cljs.core.next.call(null,seq__44231_44249__$1);
var G__44257 = null;
var G__44258 = (0);
var G__44259 = (0);
seq__44231_44239 = G__44256;
chunk__44232_44240 = G__44257;
count__44233_44241 = G__44258;
i__44234_44242 = G__44259;
continue;
}
} else {
}
}
break;
}


var G__44260 = seq__44219;
var G__44261 = chunk__44220;
var G__44262 = count__44221;
var G__44263 = (i__44222 + (1));
seq__44219 = G__44260;
chunk__44220 = G__44261;
count__44221 = G__44262;
i__44222 = G__44263;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__44219);
if(temp__5720__auto__){
var seq__44219__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44219__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__44219__$1);
var G__44264 = cljs.core.chunk_rest.call(null,seq__44219__$1);
var G__44265 = c__4556__auto__;
var G__44266 = cljs.core.count.call(null,c__4556__auto__);
var G__44267 = (0);
seq__44219 = G__44264;
chunk__44220 = G__44265;
count__44221 = G__44266;
i__44222 = G__44267;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44219__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44235_44268 = cljs.core.seq.call(null,requires);
var chunk__44236_44269 = null;
var count__44237_44270 = (0);
var i__44238_44271 = (0);
while(true){
if((i__44238_44271 < count__44237_44270)){
var req_44272 = cljs.core._nth.call(null,chunk__44236_44269,i__44238_44271);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44272,prov);


var G__44273 = seq__44235_44268;
var G__44274 = chunk__44236_44269;
var G__44275 = count__44237_44270;
var G__44276 = (i__44238_44271 + (1));
seq__44235_44268 = G__44273;
chunk__44236_44269 = G__44274;
count__44237_44270 = G__44275;
i__44238_44271 = G__44276;
continue;
} else {
var temp__5720__auto___44277__$1 = cljs.core.seq.call(null,seq__44235_44268);
if(temp__5720__auto___44277__$1){
var seq__44235_44278__$1 = temp__5720__auto___44277__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44235_44278__$1)){
var c__4556__auto___44279 = cljs.core.chunk_first.call(null,seq__44235_44278__$1);
var G__44280 = cljs.core.chunk_rest.call(null,seq__44235_44278__$1);
var G__44281 = c__4556__auto___44279;
var G__44282 = cljs.core.count.call(null,c__4556__auto___44279);
var G__44283 = (0);
seq__44235_44268 = G__44280;
chunk__44236_44269 = G__44281;
count__44237_44270 = G__44282;
i__44238_44271 = G__44283;
continue;
} else {
var req_44284 = cljs.core.first.call(null,seq__44235_44278__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44284,prov);


var G__44285 = cljs.core.next.call(null,seq__44235_44278__$1);
var G__44286 = null;
var G__44287 = (0);
var G__44288 = (0);
seq__44235_44268 = G__44285;
chunk__44236_44269 = G__44286;
count__44237_44270 = G__44287;
i__44238_44271 = G__44288;
continue;
}
} else {
}
}
break;
}


var G__44289 = cljs.core.next.call(null,seq__44219__$1);
var G__44290 = null;
var G__44291 = (0);
var G__44292 = (0);
seq__44219 = G__44289;
chunk__44220 = G__44290;
count__44221 = G__44291;
i__44222 = G__44292;
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
var seq__44293_44297 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__44294_44298 = null;
var count__44295_44299 = (0);
var i__44296_44300 = (0);
while(true){
if((i__44296_44300 < count__44295_44299)){
var ns_44301 = cljs.core._nth.call(null,chunk__44294_44298,i__44296_44300);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44301);


var G__44302 = seq__44293_44297;
var G__44303 = chunk__44294_44298;
var G__44304 = count__44295_44299;
var G__44305 = (i__44296_44300 + (1));
seq__44293_44297 = G__44302;
chunk__44294_44298 = G__44303;
count__44295_44299 = G__44304;
i__44296_44300 = G__44305;
continue;
} else {
var temp__5720__auto___44306 = cljs.core.seq.call(null,seq__44293_44297);
if(temp__5720__auto___44306){
var seq__44293_44307__$1 = temp__5720__auto___44306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44293_44307__$1)){
var c__4556__auto___44308 = cljs.core.chunk_first.call(null,seq__44293_44307__$1);
var G__44309 = cljs.core.chunk_rest.call(null,seq__44293_44307__$1);
var G__44310 = c__4556__auto___44308;
var G__44311 = cljs.core.count.call(null,c__4556__auto___44308);
var G__44312 = (0);
seq__44293_44297 = G__44309;
chunk__44294_44298 = G__44310;
count__44295_44299 = G__44311;
i__44296_44300 = G__44312;
continue;
} else {
var ns_44313 = cljs.core.first.call(null,seq__44293_44307__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44313);


var G__44314 = cljs.core.next.call(null,seq__44293_44307__$1);
var G__44315 = null;
var G__44316 = (0);
var G__44317 = (0);
seq__44293_44297 = G__44314;
chunk__44294_44298 = G__44315;
count__44295_44299 = G__44316;
i__44296_44300 = G__44317;
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
var G__44318__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__44318 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44319__i = 0, G__44319__a = new Array(arguments.length -  0);
while (G__44319__i < G__44319__a.length) {G__44319__a[G__44319__i] = arguments[G__44319__i + 0]; ++G__44319__i;}
  args = new cljs.core.IndexedSeq(G__44319__a,0,null);
} 
return G__44318__delegate.call(this,args);};
G__44318.cljs$lang$maxFixedArity = 0;
G__44318.cljs$lang$applyTo = (function (arglist__44320){
var args = cljs.core.seq(arglist__44320);
return G__44318__delegate(args);
});
G__44318.cljs$core$IFn$_invoke$arity$variadic = G__44318__delegate;
return G__44318;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__44321_SHARP_,p2__44322_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44321_SHARP_)),p2__44322_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__44323_SHARP_,p2__44324_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44323_SHARP_),p2__44324_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__44325 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__44325.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__44325.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__44325;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e44326){if((e44326 instanceof Error)){
var e = e44326;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44326;

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
}catch (e44327){if((e44327 instanceof Error)){
var e = e44327;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44327;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__44328 = cljs.core._EQ_;
var expr__44329 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__44328.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__44329))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__44328.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__44329))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__44328.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__44329))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__44331,callback){
var map__44332 = p__44331;
var map__44332__$1 = (((((!((map__44332 == null))))?(((((map__44332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44332):map__44332);
var file_msg = map__44332__$1;
var request_url = cljs.core.get.call(null,map__44332__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__41109__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_44370){
var state_val_44371 = (state_44370[(1)]);
if((state_val_44371 === (7))){
var inst_44366 = (state_44370[(2)]);
var state_44370__$1 = state_44370;
var statearr_44372_44398 = state_44370__$1;
(statearr_44372_44398[(2)] = inst_44366);

(statearr_44372_44398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (1))){
var state_44370__$1 = state_44370;
var statearr_44373_44399 = state_44370__$1;
(statearr_44373_44399[(2)] = null);

(statearr_44373_44399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (4))){
var inst_44336 = (state_44370[(7)]);
var inst_44336__$1 = (state_44370[(2)]);
var state_44370__$1 = (function (){var statearr_44374 = state_44370;
(statearr_44374[(7)] = inst_44336__$1);

return statearr_44374;
})();
if(cljs.core.truth_(inst_44336__$1)){
var statearr_44375_44400 = state_44370__$1;
(statearr_44375_44400[(1)] = (5));

} else {
var statearr_44376_44401 = state_44370__$1;
(statearr_44376_44401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (15))){
var inst_44351 = (state_44370[(8)]);
var inst_44349 = (state_44370[(9)]);
var inst_44353 = inst_44351.call(null,inst_44349);
var state_44370__$1 = state_44370;
var statearr_44377_44402 = state_44370__$1;
(statearr_44377_44402[(2)] = inst_44353);

(statearr_44377_44402[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (13))){
var inst_44360 = (state_44370[(2)]);
var state_44370__$1 = state_44370;
var statearr_44378_44403 = state_44370__$1;
(statearr_44378_44403[(2)] = inst_44360);

(statearr_44378_44403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (6))){
var state_44370__$1 = state_44370;
var statearr_44379_44404 = state_44370__$1;
(statearr_44379_44404[(2)] = null);

(statearr_44379_44404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (17))){
var inst_44357 = (state_44370[(2)]);
var state_44370__$1 = state_44370;
var statearr_44380_44405 = state_44370__$1;
(statearr_44380_44405[(2)] = inst_44357);

(statearr_44380_44405[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (3))){
var inst_44368 = (state_44370[(2)]);
var state_44370__$1 = state_44370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44370__$1,inst_44368);
} else {
if((state_val_44371 === (12))){
var state_44370__$1 = state_44370;
var statearr_44381_44406 = state_44370__$1;
(statearr_44381_44406[(2)] = null);

(statearr_44381_44406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (2))){
var state_44370__$1 = state_44370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44370__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_44371 === (11))){
var inst_44341 = (state_44370[(10)]);
var inst_44347 = figwheel.client.file_reloading.blocking_load.call(null,inst_44341);
var state_44370__$1 = state_44370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44370__$1,(14),inst_44347);
} else {
if((state_val_44371 === (9))){
var inst_44341 = (state_44370[(10)]);
var state_44370__$1 = state_44370;
if(cljs.core.truth_(inst_44341)){
var statearr_44382_44407 = state_44370__$1;
(statearr_44382_44407[(1)] = (11));

} else {
var statearr_44383_44408 = state_44370__$1;
(statearr_44383_44408[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (5))){
var inst_44342 = (state_44370[(11)]);
var inst_44336 = (state_44370[(7)]);
var inst_44341 = cljs.core.nth.call(null,inst_44336,(0),null);
var inst_44342__$1 = cljs.core.nth.call(null,inst_44336,(1),null);
var state_44370__$1 = (function (){var statearr_44384 = state_44370;
(statearr_44384[(10)] = inst_44341);

(statearr_44384[(11)] = inst_44342__$1);

return statearr_44384;
})();
if(cljs.core.truth_(inst_44342__$1)){
var statearr_44385_44409 = state_44370__$1;
(statearr_44385_44409[(1)] = (8));

} else {
var statearr_44386_44410 = state_44370__$1;
(statearr_44386_44410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (14))){
var inst_44351 = (state_44370[(8)]);
var inst_44341 = (state_44370[(10)]);
var inst_44349 = (state_44370[(2)]);
var inst_44350 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_44351__$1 = cljs.core.get.call(null,inst_44350,inst_44341);
var state_44370__$1 = (function (){var statearr_44387 = state_44370;
(statearr_44387[(8)] = inst_44351__$1);

(statearr_44387[(9)] = inst_44349);

return statearr_44387;
})();
if(cljs.core.truth_(inst_44351__$1)){
var statearr_44388_44411 = state_44370__$1;
(statearr_44388_44411[(1)] = (15));

} else {
var statearr_44389_44412 = state_44370__$1;
(statearr_44389_44412[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (16))){
var inst_44349 = (state_44370[(9)]);
var inst_44355 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_44349);
var state_44370__$1 = state_44370;
var statearr_44390_44413 = state_44370__$1;
(statearr_44390_44413[(2)] = inst_44355);

(statearr_44390_44413[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (10))){
var inst_44362 = (state_44370[(2)]);
var state_44370__$1 = (function (){var statearr_44391 = state_44370;
(statearr_44391[(12)] = inst_44362);

return statearr_44391;
})();
var statearr_44392_44414 = state_44370__$1;
(statearr_44392_44414[(2)] = null);

(statearr_44392_44414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44371 === (8))){
var inst_44342 = (state_44370[(11)]);
var inst_44344 = eval(inst_44342);
var state_44370__$1 = state_44370;
var statearr_44393_44415 = state_44370__$1;
(statearr_44393_44415[(2)] = inst_44344);

(statearr_44393_44415[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__41015__auto__ = null;
var figwheel$client$file_reloading$state_machine__41015__auto____0 = (function (){
var statearr_44394 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44394[(0)] = figwheel$client$file_reloading$state_machine__41015__auto__);

(statearr_44394[(1)] = (1));

return statearr_44394;
});
var figwheel$client$file_reloading$state_machine__41015__auto____1 = (function (state_44370){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_44370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e44395){if((e44395 instanceof Object)){
var ex__41018__auto__ = e44395;
var statearr_44396_44416 = state_44370;
(statearr_44396_44416[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44417 = state_44370;
state_44370 = G__44417;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__41015__auto__ = function(state_44370){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__41015__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__41015__auto____1.call(this,state_44370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__41015__auto____0;
figwheel$client$file_reloading$state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__41015__auto____1;
return figwheel$client$file_reloading$state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_44397 = f__41110__auto__.call(null);
(statearr_44397[(6)] = c__41109__auto__);

return statearr_44397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
}));

return c__41109__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__44419 = arguments.length;
switch (G__44419) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__44421,callback){
var map__44422 = p__44421;
var map__44422__$1 = (((((!((map__44422 == null))))?(((((map__44422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44422):map__44422);
var file_msg = map__44422__$1;
var namespace = cljs.core.get.call(null,map__44422__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__44424){
var map__44425 = p__44424;
var map__44425__$1 = (((((!((map__44425 == null))))?(((((map__44425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44425):map__44425);
var file_msg = map__44425__$1;
var namespace = cljs.core.get.call(null,map__44425__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__44427){
var map__44428 = p__44427;
var map__44428__$1 = (((((!((map__44428 == null))))?(((((map__44428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44428):map__44428);
var file_msg = map__44428__$1;
var namespace = cljs.core.get.call(null,map__44428__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__44430,callback){
var map__44431 = p__44430;
var map__44431__$1 = (((((!((map__44431 == null))))?(((((map__44431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44431):map__44431);
var file_msg = map__44431__$1;
var request_url = cljs.core.get.call(null,map__44431__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__44431__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__41109__auto___44481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_44466){
var state_val_44467 = (state_44466[(1)]);
if((state_val_44467 === (1))){
var inst_44440 = cljs.core.seq.call(null,files);
var inst_44441 = cljs.core.first.call(null,inst_44440);
var inst_44442 = cljs.core.next.call(null,inst_44440);
var inst_44443 = files;
var state_44466__$1 = (function (){var statearr_44468 = state_44466;
(statearr_44468[(7)] = inst_44442);

(statearr_44468[(8)] = inst_44443);

(statearr_44468[(9)] = inst_44441);

return statearr_44468;
})();
var statearr_44469_44482 = state_44466__$1;
(statearr_44469_44482[(2)] = null);

(statearr_44469_44482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44467 === (2))){
var inst_44449 = (state_44466[(10)]);
var inst_44443 = (state_44466[(8)]);
var inst_44448 = cljs.core.seq.call(null,inst_44443);
var inst_44449__$1 = cljs.core.first.call(null,inst_44448);
var inst_44450 = cljs.core.next.call(null,inst_44448);
var inst_44451 = (inst_44449__$1 == null);
var inst_44452 = cljs.core.not.call(null,inst_44451);
var state_44466__$1 = (function (){var statearr_44470 = state_44466;
(statearr_44470[(10)] = inst_44449__$1);

(statearr_44470[(11)] = inst_44450);

return statearr_44470;
})();
if(inst_44452){
var statearr_44471_44483 = state_44466__$1;
(statearr_44471_44483[(1)] = (4));

} else {
var statearr_44472_44484 = state_44466__$1;
(statearr_44472_44484[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44467 === (3))){
var inst_44464 = (state_44466[(2)]);
var state_44466__$1 = state_44466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44466__$1,inst_44464);
} else {
if((state_val_44467 === (4))){
var inst_44449 = (state_44466[(10)]);
var inst_44454 = figwheel.client.file_reloading.reload_js_file.call(null,inst_44449);
var state_44466__$1 = state_44466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44466__$1,(7),inst_44454);
} else {
if((state_val_44467 === (5))){
var inst_44460 = cljs.core.async.close_BANG_.call(null,out);
var state_44466__$1 = state_44466;
var statearr_44473_44485 = state_44466__$1;
(statearr_44473_44485[(2)] = inst_44460);

(statearr_44473_44485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44467 === (6))){
var inst_44462 = (state_44466[(2)]);
var state_44466__$1 = state_44466;
var statearr_44474_44486 = state_44466__$1;
(statearr_44474_44486[(2)] = inst_44462);

(statearr_44474_44486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44467 === (7))){
var inst_44450 = (state_44466[(11)]);
var inst_44456 = (state_44466[(2)]);
var inst_44457 = cljs.core.async.put_BANG_.call(null,out,inst_44456);
var inst_44443 = inst_44450;
var state_44466__$1 = (function (){var statearr_44475 = state_44466;
(statearr_44475[(8)] = inst_44443);

(statearr_44475[(12)] = inst_44457);

return statearr_44475;
})();
var statearr_44476_44487 = state_44466__$1;
(statearr_44476_44487[(2)] = null);

(statearr_44476_44487[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41015__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41015__auto____0 = (function (){
var statearr_44477 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44477[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41015__auto__);

(statearr_44477[(1)] = (1));

return statearr_44477;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41015__auto____1 = (function (state_44466){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_44466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e44478){if((e44478 instanceof Object)){
var ex__41018__auto__ = e44478;
var statearr_44479_44488 = state_44466;
(statearr_44479_44488[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44489 = state_44466;
state_44466 = G__44489;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41015__auto__ = function(state_44466){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41015__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41015__auto____1.call(this,state_44466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41015__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41015__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_44480 = f__41110__auto__.call(null);
(statearr_44480[(6)] = c__41109__auto___44481);

return statearr_44480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__44490,opts){
var map__44491 = p__44490;
var map__44491__$1 = (((((!((map__44491 == null))))?(((((map__44491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44491):map__44491);
var eval_body = cljs.core.get.call(null,map__44491__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__44491__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e44493){var e = e44493;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__44494_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44494_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__44495){
var vec__44496 = p__44495;
var k = cljs.core.nth.call(null,vec__44496,(0),null);
var v = cljs.core.nth.call(null,vec__44496,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__44499){
var vec__44500 = p__44499;
var k = cljs.core.nth.call(null,vec__44500,(0),null);
var v = cljs.core.nth.call(null,vec__44500,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__44506,p__44507){
var map__44508 = p__44506;
var map__44508__$1 = (((((!((map__44508 == null))))?(((((map__44508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44508):map__44508);
var opts = map__44508__$1;
var before_jsload = cljs.core.get.call(null,map__44508__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__44508__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__44508__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__44509 = p__44507;
var map__44509__$1 = (((((!((map__44509 == null))))?(((((map__44509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44509):map__44509);
var msg = map__44509__$1;
var files = cljs.core.get.call(null,map__44509__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__44509__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__44509__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__41109__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__41110__auto__ = (function (){var switch__41014__auto__ = (function (state_44663){
var state_val_44664 = (state_44663[(1)]);
if((state_val_44664 === (7))){
var inst_44526 = (state_44663[(7)]);
var inst_44524 = (state_44663[(8)]);
var inst_44523 = (state_44663[(9)]);
var inst_44525 = (state_44663[(10)]);
var inst_44531 = cljs.core._nth.call(null,inst_44524,inst_44526);
var inst_44532 = figwheel.client.file_reloading.eval_body.call(null,inst_44531,opts);
var inst_44533 = (inst_44526 + (1));
var tmp44665 = inst_44524;
var tmp44666 = inst_44523;
var tmp44667 = inst_44525;
var inst_44523__$1 = tmp44666;
var inst_44524__$1 = tmp44665;
var inst_44525__$1 = tmp44667;
var inst_44526__$1 = inst_44533;
var state_44663__$1 = (function (){var statearr_44668 = state_44663;
(statearr_44668[(7)] = inst_44526__$1);

(statearr_44668[(11)] = inst_44532);

(statearr_44668[(8)] = inst_44524__$1);

(statearr_44668[(9)] = inst_44523__$1);

(statearr_44668[(10)] = inst_44525__$1);

return statearr_44668;
})();
var statearr_44669_44752 = state_44663__$1;
(statearr_44669_44752[(2)] = null);

(statearr_44669_44752[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (20))){
var inst_44566 = (state_44663[(12)]);
var inst_44574 = figwheel.client.file_reloading.sort_files.call(null,inst_44566);
var state_44663__$1 = state_44663;
var statearr_44670_44753 = state_44663__$1;
(statearr_44670_44753[(2)] = inst_44574);

(statearr_44670_44753[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (27))){
var state_44663__$1 = state_44663;
var statearr_44671_44754 = state_44663__$1;
(statearr_44671_44754[(2)] = null);

(statearr_44671_44754[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (1))){
var inst_44515 = (state_44663[(13)]);
var inst_44512 = before_jsload.call(null,files);
var inst_44513 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_44514 = (function (){return (function (p1__44503_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44503_SHARP_);
});
})();
var inst_44515__$1 = cljs.core.filter.call(null,inst_44514,files);
var inst_44516 = cljs.core.not_empty.call(null,inst_44515__$1);
var state_44663__$1 = (function (){var statearr_44672 = state_44663;
(statearr_44672[(14)] = inst_44513);

(statearr_44672[(13)] = inst_44515__$1);

(statearr_44672[(15)] = inst_44512);

return statearr_44672;
})();
if(cljs.core.truth_(inst_44516)){
var statearr_44673_44755 = state_44663__$1;
(statearr_44673_44755[(1)] = (2));

} else {
var statearr_44674_44756 = state_44663__$1;
(statearr_44674_44756[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (24))){
var state_44663__$1 = state_44663;
var statearr_44675_44757 = state_44663__$1;
(statearr_44675_44757[(2)] = null);

(statearr_44675_44757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (39))){
var inst_44616 = (state_44663[(16)]);
var state_44663__$1 = state_44663;
var statearr_44676_44758 = state_44663__$1;
(statearr_44676_44758[(2)] = inst_44616);

(statearr_44676_44758[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (46))){
var inst_44658 = (state_44663[(2)]);
var state_44663__$1 = state_44663;
var statearr_44677_44759 = state_44663__$1;
(statearr_44677_44759[(2)] = inst_44658);

(statearr_44677_44759[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (4))){
var inst_44560 = (state_44663[(2)]);
var inst_44561 = cljs.core.List.EMPTY;
var inst_44562 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_44561);
var inst_44563 = (function (){return (function (p1__44504_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44504_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44504_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__44504_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_44564 = cljs.core.filter.call(null,inst_44563,files);
var inst_44565 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_44566 = cljs.core.concat.call(null,inst_44564,inst_44565);
var state_44663__$1 = (function (){var statearr_44678 = state_44663;
(statearr_44678[(17)] = inst_44560);

(statearr_44678[(18)] = inst_44562);

(statearr_44678[(12)] = inst_44566);

return statearr_44678;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_44679_44760 = state_44663__$1;
(statearr_44679_44760[(1)] = (16));

} else {
var statearr_44680_44761 = state_44663__$1;
(statearr_44680_44761[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (15))){
var inst_44550 = (state_44663[(2)]);
var state_44663__$1 = state_44663;
var statearr_44681_44762 = state_44663__$1;
(statearr_44681_44762[(2)] = inst_44550);

(statearr_44681_44762[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (21))){
var inst_44576 = (state_44663[(19)]);
var inst_44576__$1 = (state_44663[(2)]);
var inst_44577 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_44576__$1);
var state_44663__$1 = (function (){var statearr_44682 = state_44663;
(statearr_44682[(19)] = inst_44576__$1);

return statearr_44682;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44663__$1,(22),inst_44577);
} else {
if((state_val_44664 === (31))){
var inst_44661 = (state_44663[(2)]);
var state_44663__$1 = state_44663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44663__$1,inst_44661);
} else {
if((state_val_44664 === (32))){
var inst_44616 = (state_44663[(16)]);
var inst_44621 = inst_44616.cljs$lang$protocol_mask$partition0$;
var inst_44622 = (inst_44621 & (64));
var inst_44623 = inst_44616.cljs$core$ISeq$;
var inst_44624 = (cljs.core.PROTOCOL_SENTINEL === inst_44623);
var inst_44625 = ((inst_44622) || (inst_44624));
var state_44663__$1 = state_44663;
if(cljs.core.truth_(inst_44625)){
var statearr_44683_44763 = state_44663__$1;
(statearr_44683_44763[(1)] = (35));

} else {
var statearr_44684_44764 = state_44663__$1;
(statearr_44684_44764[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (40))){
var inst_44638 = (state_44663[(20)]);
var inst_44637 = (state_44663[(2)]);
var inst_44638__$1 = cljs.core.get.call(null,inst_44637,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_44639 = cljs.core.get.call(null,inst_44637,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_44640 = cljs.core.not_empty.call(null,inst_44638__$1);
var state_44663__$1 = (function (){var statearr_44685 = state_44663;
(statearr_44685[(21)] = inst_44639);

(statearr_44685[(20)] = inst_44638__$1);

return statearr_44685;
})();
if(cljs.core.truth_(inst_44640)){
var statearr_44686_44765 = state_44663__$1;
(statearr_44686_44765[(1)] = (41));

} else {
var statearr_44687_44766 = state_44663__$1;
(statearr_44687_44766[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (33))){
var state_44663__$1 = state_44663;
var statearr_44688_44767 = state_44663__$1;
(statearr_44688_44767[(2)] = false);

(statearr_44688_44767[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (13))){
var inst_44536 = (state_44663[(22)]);
var inst_44540 = cljs.core.chunk_first.call(null,inst_44536);
var inst_44541 = cljs.core.chunk_rest.call(null,inst_44536);
var inst_44542 = cljs.core.count.call(null,inst_44540);
var inst_44523 = inst_44541;
var inst_44524 = inst_44540;
var inst_44525 = inst_44542;
var inst_44526 = (0);
var state_44663__$1 = (function (){var statearr_44689 = state_44663;
(statearr_44689[(7)] = inst_44526);

(statearr_44689[(8)] = inst_44524);

(statearr_44689[(9)] = inst_44523);

(statearr_44689[(10)] = inst_44525);

return statearr_44689;
})();
var statearr_44690_44768 = state_44663__$1;
(statearr_44690_44768[(2)] = null);

(statearr_44690_44768[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (22))){
var inst_44576 = (state_44663[(19)]);
var inst_44580 = (state_44663[(23)]);
var inst_44584 = (state_44663[(24)]);
var inst_44579 = (state_44663[(25)]);
var inst_44579__$1 = (state_44663[(2)]);
var inst_44580__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44579__$1);
var inst_44581 = (function (){var all_files = inst_44576;
var res_SINGLEQUOTE_ = inst_44579__$1;
var res = inst_44580__$1;
return (function (p1__44505_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__44505_SHARP_));
});
})();
var inst_44582 = cljs.core.filter.call(null,inst_44581,inst_44579__$1);
var inst_44583 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_44584__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44583);
var inst_44585 = cljs.core.not_empty.call(null,inst_44584__$1);
var state_44663__$1 = (function (){var statearr_44691 = state_44663;
(statearr_44691[(23)] = inst_44580__$1);

(statearr_44691[(26)] = inst_44582);

(statearr_44691[(24)] = inst_44584__$1);

(statearr_44691[(25)] = inst_44579__$1);

return statearr_44691;
})();
if(cljs.core.truth_(inst_44585)){
var statearr_44692_44769 = state_44663__$1;
(statearr_44692_44769[(1)] = (23));

} else {
var statearr_44693_44770 = state_44663__$1;
(statearr_44693_44770[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (36))){
var state_44663__$1 = state_44663;
var statearr_44694_44771 = state_44663__$1;
(statearr_44694_44771[(2)] = false);

(statearr_44694_44771[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (41))){
var inst_44638 = (state_44663[(20)]);
var inst_44642 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_44643 = cljs.core.map.call(null,inst_44642,inst_44638);
var inst_44644 = cljs.core.pr_str.call(null,inst_44643);
var inst_44645 = ["figwheel-no-load meta-data: ",inst_44644].join('');
var inst_44646 = figwheel.client.utils.log.call(null,inst_44645);
var state_44663__$1 = state_44663;
var statearr_44695_44772 = state_44663__$1;
(statearr_44695_44772[(2)] = inst_44646);

(statearr_44695_44772[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (43))){
var inst_44639 = (state_44663[(21)]);
var inst_44649 = (state_44663[(2)]);
var inst_44650 = cljs.core.not_empty.call(null,inst_44639);
var state_44663__$1 = (function (){var statearr_44696 = state_44663;
(statearr_44696[(27)] = inst_44649);

return statearr_44696;
})();
if(cljs.core.truth_(inst_44650)){
var statearr_44697_44773 = state_44663__$1;
(statearr_44697_44773[(1)] = (44));

} else {
var statearr_44698_44774 = state_44663__$1;
(statearr_44698_44774[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (29))){
var inst_44616 = (state_44663[(16)]);
var inst_44576 = (state_44663[(19)]);
var inst_44580 = (state_44663[(23)]);
var inst_44582 = (state_44663[(26)]);
var inst_44584 = (state_44663[(24)]);
var inst_44579 = (state_44663[(25)]);
var inst_44612 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_44615 = (function (){var all_files = inst_44576;
var res_SINGLEQUOTE_ = inst_44579;
var res = inst_44580;
var files_not_loaded = inst_44582;
var dependencies_that_loaded = inst_44584;
return (function (p__44614){
var map__44699 = p__44614;
var map__44699__$1 = (((((!((map__44699 == null))))?(((((map__44699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44699):map__44699);
var namespace = cljs.core.get.call(null,map__44699__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_44616__$1 = cljs.core.group_by.call(null,inst_44615,inst_44582);
var inst_44618 = (inst_44616__$1 == null);
var inst_44619 = cljs.core.not.call(null,inst_44618);
var state_44663__$1 = (function (){var statearr_44701 = state_44663;
(statearr_44701[(28)] = inst_44612);

(statearr_44701[(16)] = inst_44616__$1);

return statearr_44701;
})();
if(inst_44619){
var statearr_44702_44775 = state_44663__$1;
(statearr_44702_44775[(1)] = (32));

} else {
var statearr_44703_44776 = state_44663__$1;
(statearr_44703_44776[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (44))){
var inst_44639 = (state_44663[(21)]);
var inst_44652 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44639);
var inst_44653 = cljs.core.pr_str.call(null,inst_44652);
var inst_44654 = ["not required: ",inst_44653].join('');
var inst_44655 = figwheel.client.utils.log.call(null,inst_44654);
var state_44663__$1 = state_44663;
var statearr_44704_44777 = state_44663__$1;
(statearr_44704_44777[(2)] = inst_44655);

(statearr_44704_44777[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (6))){
var inst_44557 = (state_44663[(2)]);
var state_44663__$1 = state_44663;
var statearr_44705_44778 = state_44663__$1;
(statearr_44705_44778[(2)] = inst_44557);

(statearr_44705_44778[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (28))){
var inst_44582 = (state_44663[(26)]);
var inst_44609 = (state_44663[(2)]);
var inst_44610 = cljs.core.not_empty.call(null,inst_44582);
var state_44663__$1 = (function (){var statearr_44706 = state_44663;
(statearr_44706[(29)] = inst_44609);

return statearr_44706;
})();
if(cljs.core.truth_(inst_44610)){
var statearr_44707_44779 = state_44663__$1;
(statearr_44707_44779[(1)] = (29));

} else {
var statearr_44708_44780 = state_44663__$1;
(statearr_44708_44780[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (25))){
var inst_44580 = (state_44663[(23)]);
var inst_44596 = (state_44663[(2)]);
var inst_44597 = cljs.core.not_empty.call(null,inst_44580);
var state_44663__$1 = (function (){var statearr_44709 = state_44663;
(statearr_44709[(30)] = inst_44596);

return statearr_44709;
})();
if(cljs.core.truth_(inst_44597)){
var statearr_44710_44781 = state_44663__$1;
(statearr_44710_44781[(1)] = (26));

} else {
var statearr_44711_44782 = state_44663__$1;
(statearr_44711_44782[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (34))){
var inst_44632 = (state_44663[(2)]);
var state_44663__$1 = state_44663;
if(cljs.core.truth_(inst_44632)){
var statearr_44712_44783 = state_44663__$1;
(statearr_44712_44783[(1)] = (38));

} else {
var statearr_44713_44784 = state_44663__$1;
(statearr_44713_44784[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (17))){
var state_44663__$1 = state_44663;
var statearr_44714_44785 = state_44663__$1;
(statearr_44714_44785[(2)] = recompile_dependents);

(statearr_44714_44785[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (3))){
var state_44663__$1 = state_44663;
var statearr_44715_44786 = state_44663__$1;
(statearr_44715_44786[(2)] = null);

(statearr_44715_44786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (12))){
var inst_44553 = (state_44663[(2)]);
var state_44663__$1 = state_44663;
var statearr_44716_44787 = state_44663__$1;
(statearr_44716_44787[(2)] = inst_44553);

(statearr_44716_44787[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (2))){
var inst_44515 = (state_44663[(13)]);
var inst_44522 = cljs.core.seq.call(null,inst_44515);
var inst_44523 = inst_44522;
var inst_44524 = null;
var inst_44525 = (0);
var inst_44526 = (0);
var state_44663__$1 = (function (){var statearr_44717 = state_44663;
(statearr_44717[(7)] = inst_44526);

(statearr_44717[(8)] = inst_44524);

(statearr_44717[(9)] = inst_44523);

(statearr_44717[(10)] = inst_44525);

return statearr_44717;
})();
var statearr_44718_44788 = state_44663__$1;
(statearr_44718_44788[(2)] = null);

(statearr_44718_44788[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (23))){
var inst_44576 = (state_44663[(19)]);
var inst_44580 = (state_44663[(23)]);
var inst_44582 = (state_44663[(26)]);
var inst_44584 = (state_44663[(24)]);
var inst_44579 = (state_44663[(25)]);
var inst_44587 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_44589 = (function (){var all_files = inst_44576;
var res_SINGLEQUOTE_ = inst_44579;
var res = inst_44580;
var files_not_loaded = inst_44582;
var dependencies_that_loaded = inst_44584;
return (function (p__44588){
var map__44719 = p__44588;
var map__44719__$1 = (((((!((map__44719 == null))))?(((((map__44719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44719):map__44719);
var request_url = cljs.core.get.call(null,map__44719__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_44590 = cljs.core.reverse.call(null,inst_44584);
var inst_44591 = cljs.core.map.call(null,inst_44589,inst_44590);
var inst_44592 = cljs.core.pr_str.call(null,inst_44591);
var inst_44593 = figwheel.client.utils.log.call(null,inst_44592);
var state_44663__$1 = (function (){var statearr_44721 = state_44663;
(statearr_44721[(31)] = inst_44587);

return statearr_44721;
})();
var statearr_44722_44789 = state_44663__$1;
(statearr_44722_44789[(2)] = inst_44593);

(statearr_44722_44789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (35))){
var state_44663__$1 = state_44663;
var statearr_44723_44790 = state_44663__$1;
(statearr_44723_44790[(2)] = true);

(statearr_44723_44790[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (19))){
var inst_44566 = (state_44663[(12)]);
var inst_44572 = figwheel.client.file_reloading.expand_files.call(null,inst_44566);
var state_44663__$1 = state_44663;
var statearr_44724_44791 = state_44663__$1;
(statearr_44724_44791[(2)] = inst_44572);

(statearr_44724_44791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (11))){
var state_44663__$1 = state_44663;
var statearr_44725_44792 = state_44663__$1;
(statearr_44725_44792[(2)] = null);

(statearr_44725_44792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (9))){
var inst_44555 = (state_44663[(2)]);
var state_44663__$1 = state_44663;
var statearr_44726_44793 = state_44663__$1;
(statearr_44726_44793[(2)] = inst_44555);

(statearr_44726_44793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (5))){
var inst_44526 = (state_44663[(7)]);
var inst_44525 = (state_44663[(10)]);
var inst_44528 = (inst_44526 < inst_44525);
var inst_44529 = inst_44528;
var state_44663__$1 = state_44663;
if(cljs.core.truth_(inst_44529)){
var statearr_44727_44794 = state_44663__$1;
(statearr_44727_44794[(1)] = (7));

} else {
var statearr_44728_44795 = state_44663__$1;
(statearr_44728_44795[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (14))){
var inst_44536 = (state_44663[(22)]);
var inst_44545 = cljs.core.first.call(null,inst_44536);
var inst_44546 = figwheel.client.file_reloading.eval_body.call(null,inst_44545,opts);
var inst_44547 = cljs.core.next.call(null,inst_44536);
var inst_44523 = inst_44547;
var inst_44524 = null;
var inst_44525 = (0);
var inst_44526 = (0);
var state_44663__$1 = (function (){var statearr_44729 = state_44663;
(statearr_44729[(7)] = inst_44526);

(statearr_44729[(32)] = inst_44546);

(statearr_44729[(8)] = inst_44524);

(statearr_44729[(9)] = inst_44523);

(statearr_44729[(10)] = inst_44525);

return statearr_44729;
})();
var statearr_44730_44796 = state_44663__$1;
(statearr_44730_44796[(2)] = null);

(statearr_44730_44796[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (45))){
var state_44663__$1 = state_44663;
var statearr_44731_44797 = state_44663__$1;
(statearr_44731_44797[(2)] = null);

(statearr_44731_44797[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (26))){
var inst_44576 = (state_44663[(19)]);
var inst_44580 = (state_44663[(23)]);
var inst_44582 = (state_44663[(26)]);
var inst_44584 = (state_44663[(24)]);
var inst_44579 = (state_44663[(25)]);
var inst_44599 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_44601 = (function (){var all_files = inst_44576;
var res_SINGLEQUOTE_ = inst_44579;
var res = inst_44580;
var files_not_loaded = inst_44582;
var dependencies_that_loaded = inst_44584;
return (function (p__44600){
var map__44732 = p__44600;
var map__44732__$1 = (((((!((map__44732 == null))))?(((((map__44732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44732):map__44732);
var namespace = cljs.core.get.call(null,map__44732__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__44732__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_44602 = cljs.core.map.call(null,inst_44601,inst_44580);
var inst_44603 = cljs.core.pr_str.call(null,inst_44602);
var inst_44604 = figwheel.client.utils.log.call(null,inst_44603);
var inst_44605 = (function (){var all_files = inst_44576;
var res_SINGLEQUOTE_ = inst_44579;
var res = inst_44580;
var files_not_loaded = inst_44582;
var dependencies_that_loaded = inst_44584;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_44606 = setTimeout(inst_44605,(10));
var state_44663__$1 = (function (){var statearr_44734 = state_44663;
(statearr_44734[(33)] = inst_44599);

(statearr_44734[(34)] = inst_44604);

return statearr_44734;
})();
var statearr_44735_44798 = state_44663__$1;
(statearr_44735_44798[(2)] = inst_44606);

(statearr_44735_44798[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (16))){
var state_44663__$1 = state_44663;
var statearr_44736_44799 = state_44663__$1;
(statearr_44736_44799[(2)] = reload_dependents);

(statearr_44736_44799[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (38))){
var inst_44616 = (state_44663[(16)]);
var inst_44634 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44616);
var state_44663__$1 = state_44663;
var statearr_44737_44800 = state_44663__$1;
(statearr_44737_44800[(2)] = inst_44634);

(statearr_44737_44800[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (30))){
var state_44663__$1 = state_44663;
var statearr_44738_44801 = state_44663__$1;
(statearr_44738_44801[(2)] = null);

(statearr_44738_44801[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (10))){
var inst_44536 = (state_44663[(22)]);
var inst_44538 = cljs.core.chunked_seq_QMARK_.call(null,inst_44536);
var state_44663__$1 = state_44663;
if(inst_44538){
var statearr_44739_44802 = state_44663__$1;
(statearr_44739_44802[(1)] = (13));

} else {
var statearr_44740_44803 = state_44663__$1;
(statearr_44740_44803[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (18))){
var inst_44570 = (state_44663[(2)]);
var state_44663__$1 = state_44663;
if(cljs.core.truth_(inst_44570)){
var statearr_44741_44804 = state_44663__$1;
(statearr_44741_44804[(1)] = (19));

} else {
var statearr_44742_44805 = state_44663__$1;
(statearr_44742_44805[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (42))){
var state_44663__$1 = state_44663;
var statearr_44743_44806 = state_44663__$1;
(statearr_44743_44806[(2)] = null);

(statearr_44743_44806[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (37))){
var inst_44629 = (state_44663[(2)]);
var state_44663__$1 = state_44663;
var statearr_44744_44807 = state_44663__$1;
(statearr_44744_44807[(2)] = inst_44629);

(statearr_44744_44807[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44664 === (8))){
var inst_44536 = (state_44663[(22)]);
var inst_44523 = (state_44663[(9)]);
var inst_44536__$1 = cljs.core.seq.call(null,inst_44523);
var state_44663__$1 = (function (){var statearr_44745 = state_44663;
(statearr_44745[(22)] = inst_44536__$1);

return statearr_44745;
})();
if(inst_44536__$1){
var statearr_44746_44808 = state_44663__$1;
(statearr_44746_44808[(1)] = (10));

} else {
var statearr_44747_44809 = state_44663__$1;
(statearr_44747_44809[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41015__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41015__auto____0 = (function (){
var statearr_44748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44748[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__41015__auto__);

(statearr_44748[(1)] = (1));

return statearr_44748;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41015__auto____1 = (function (state_44663){
while(true){
var ret_value__41016__auto__ = (function (){try{while(true){
var result__41017__auto__ = switch__41014__auto__.call(null,state_44663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41017__auto__;
}
break;
}
}catch (e44749){if((e44749 instanceof Object)){
var ex__41018__auto__ = e44749;
var statearr_44750_44810 = state_44663;
(statearr_44750_44810[(5)] = ex__41018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44811 = state_44663;
state_44663 = G__44811;
continue;
} else {
return ret_value__41016__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__41015__auto__ = function(state_44663){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41015__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41015__auto____1.call(this,state_44663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__41015__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__41015__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__41015__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41015__auto__;
})()
})();
var state__41111__auto__ = (function (){var statearr_44751 = f__41110__auto__.call(null);
(statearr_44751[(6)] = c__41109__auto__);

return statearr_44751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41111__auto__);
}));

return c__41109__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__44814,link){
var map__44815 = p__44814;
var map__44815__$1 = (((((!((map__44815 == null))))?(((((map__44815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44815):map__44815);
var file = cljs.core.get.call(null,map__44815__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__44812_SHARP_,p2__44813_SHARP_){
if(cljs.core._EQ_.call(null,p1__44812_SHARP_,p2__44813_SHARP_)){
return p1__44812_SHARP_;
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__44818){
var map__44819 = p__44818;
var map__44819__$1 = (((((!((map__44819 == null))))?(((((map__44819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44819):map__44819);
var match_length = cljs.core.get.call(null,map__44819__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__44819__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__44817_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__44817_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__44821_SHARP_,p2__44822_SHARP_){
return cljs.core.assoc.call(null,p1__44821_SHARP_,cljs.core.get.call(null,p2__44822_SHARP_,key),p2__44822_SHARP_);
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
var loaded_f_datas_44823 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_44823);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_44823);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__44824,p__44825){
var map__44826 = p__44824;
var map__44826__$1 = (((((!((map__44826 == null))))?(((((map__44826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44826):map__44826);
var on_cssload = cljs.core.get.call(null,map__44826__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__44827 = p__44825;
var map__44827__$1 = (((((!((map__44827 == null))))?(((((map__44827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44827):map__44827);
var files_msg = map__44827__$1;
var files = cljs.core.get.call(null,map__44827__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1608009995844
