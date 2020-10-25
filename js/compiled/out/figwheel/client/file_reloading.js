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
var G__34148 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__34148 == null)){
return null;
} else {
return goog.object.get(G__34148,"requires");
}
}):(function (path){
var G__34149 = goog.object.get(goog.dependencies_.requires,path);
if((G__34149 == null)){
return null;
} else {
return goog.object.getKeys(G__34149);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34150_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34150_SHARP_)));
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
var G__34151 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__34151__$1 = (((G__34151 == null))?null:goog.object.get(G__34151,"provides"));
if((G__34151__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__34151__$1);
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
var seq__34152 = cljs.core.seq.call(null,provides);
var chunk__34153 = null;
var count__34154 = (0);
var i__34155 = (0);
while(true){
if((i__34155 < count__34154)){
var prov = cljs.core._nth.call(null,chunk__34153,i__34155);
var seq__34164_34176 = cljs.core.seq.call(null,requires);
var chunk__34165_34177 = null;
var count__34166_34178 = (0);
var i__34167_34179 = (0);
while(true){
if((i__34167_34179 < count__34166_34178)){
var req_34180 = cljs.core._nth.call(null,chunk__34165_34177,i__34167_34179);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34180,prov);


var G__34181 = seq__34164_34176;
var G__34182 = chunk__34165_34177;
var G__34183 = count__34166_34178;
var G__34184 = (i__34167_34179 + (1));
seq__34164_34176 = G__34181;
chunk__34165_34177 = G__34182;
count__34166_34178 = G__34183;
i__34167_34179 = G__34184;
continue;
} else {
var temp__5720__auto___34185 = cljs.core.seq.call(null,seq__34164_34176);
if(temp__5720__auto___34185){
var seq__34164_34186__$1 = temp__5720__auto___34185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34164_34186__$1)){
var c__4556__auto___34187 = cljs.core.chunk_first.call(null,seq__34164_34186__$1);
var G__34188 = cljs.core.chunk_rest.call(null,seq__34164_34186__$1);
var G__34189 = c__4556__auto___34187;
var G__34190 = cljs.core.count.call(null,c__4556__auto___34187);
var G__34191 = (0);
seq__34164_34176 = G__34188;
chunk__34165_34177 = G__34189;
count__34166_34178 = G__34190;
i__34167_34179 = G__34191;
continue;
} else {
var req_34192 = cljs.core.first.call(null,seq__34164_34186__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34192,prov);


var G__34193 = cljs.core.next.call(null,seq__34164_34186__$1);
var G__34194 = null;
var G__34195 = (0);
var G__34196 = (0);
seq__34164_34176 = G__34193;
chunk__34165_34177 = G__34194;
count__34166_34178 = G__34195;
i__34167_34179 = G__34196;
continue;
}
} else {
}
}
break;
}


var G__34197 = seq__34152;
var G__34198 = chunk__34153;
var G__34199 = count__34154;
var G__34200 = (i__34155 + (1));
seq__34152 = G__34197;
chunk__34153 = G__34198;
count__34154 = G__34199;
i__34155 = G__34200;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34152);
if(temp__5720__auto__){
var seq__34152__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34152__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__34152__$1);
var G__34201 = cljs.core.chunk_rest.call(null,seq__34152__$1);
var G__34202 = c__4556__auto__;
var G__34203 = cljs.core.count.call(null,c__4556__auto__);
var G__34204 = (0);
seq__34152 = G__34201;
chunk__34153 = G__34202;
count__34154 = G__34203;
i__34155 = G__34204;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34152__$1);
var seq__34168_34205 = cljs.core.seq.call(null,requires);
var chunk__34169_34206 = null;
var count__34170_34207 = (0);
var i__34171_34208 = (0);
while(true){
if((i__34171_34208 < count__34170_34207)){
var req_34209 = cljs.core._nth.call(null,chunk__34169_34206,i__34171_34208);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34209,prov);


var G__34210 = seq__34168_34205;
var G__34211 = chunk__34169_34206;
var G__34212 = count__34170_34207;
var G__34213 = (i__34171_34208 + (1));
seq__34168_34205 = G__34210;
chunk__34169_34206 = G__34211;
count__34170_34207 = G__34212;
i__34171_34208 = G__34213;
continue;
} else {
var temp__5720__auto___34214__$1 = cljs.core.seq.call(null,seq__34168_34205);
if(temp__5720__auto___34214__$1){
var seq__34168_34215__$1 = temp__5720__auto___34214__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34168_34215__$1)){
var c__4556__auto___34216 = cljs.core.chunk_first.call(null,seq__34168_34215__$1);
var G__34217 = cljs.core.chunk_rest.call(null,seq__34168_34215__$1);
var G__34218 = c__4556__auto___34216;
var G__34219 = cljs.core.count.call(null,c__4556__auto___34216);
var G__34220 = (0);
seq__34168_34205 = G__34217;
chunk__34169_34206 = G__34218;
count__34170_34207 = G__34219;
i__34171_34208 = G__34220;
continue;
} else {
var req_34221 = cljs.core.first.call(null,seq__34168_34215__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34221,prov);


var G__34222 = cljs.core.next.call(null,seq__34168_34215__$1);
var G__34223 = null;
var G__34224 = (0);
var G__34225 = (0);
seq__34168_34205 = G__34222;
chunk__34169_34206 = G__34223;
count__34170_34207 = G__34224;
i__34171_34208 = G__34225;
continue;
}
} else {
}
}
break;
}


var G__34226 = cljs.core.next.call(null,seq__34152__$1);
var G__34227 = null;
var G__34228 = (0);
var G__34229 = (0);
seq__34152 = G__34226;
chunk__34153 = G__34227;
count__34154 = G__34228;
i__34155 = G__34229;
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
var seq__34172 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__34173 = null;
var count__34174 = (0);
var i__34175 = (0);
while(true){
if((i__34175 < count__34174)){
var prov = cljs.core._nth.call(null,chunk__34173,i__34175);
goog.object.forEach(deps,((function (seq__34172,chunk__34173,count__34174,i__34175,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__34172,chunk__34173,count__34174,i__34175,prov,requires))
);


var G__34230 = seq__34172;
var G__34231 = chunk__34173;
var G__34232 = count__34174;
var G__34233 = (i__34175 + (1));
seq__34172 = G__34230;
chunk__34173 = G__34231;
count__34174 = G__34232;
i__34175 = G__34233;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34172);
if(temp__5720__auto__){
var seq__34172__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34172__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__34172__$1);
var G__34234 = cljs.core.chunk_rest.call(null,seq__34172__$1);
var G__34235 = c__4556__auto__;
var G__34236 = cljs.core.count.call(null,c__4556__auto__);
var G__34237 = (0);
seq__34172 = G__34234;
chunk__34173 = G__34235;
count__34174 = G__34236;
i__34175 = G__34237;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34172__$1);
goog.object.forEach(deps,((function (seq__34172,chunk__34173,count__34174,i__34175,prov,seq__34172__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__34172,chunk__34173,count__34174,i__34175,prov,seq__34172__$1,temp__5720__auto__,requires))
);


var G__34238 = cljs.core.next.call(null,seq__34172__$1);
var G__34239 = null;
var G__34240 = (0);
var G__34241 = (0);
seq__34172 = G__34238;
chunk__34173 = G__34239;
count__34174 = G__34240;
i__34175 = G__34241;
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
return cljs.core.some.call(null,(function (p__34242){
var vec__34243 = p__34242;
var _ = cljs.core.nth.call(null,vec__34243,(0),null);
var v = cljs.core.nth.call(null,vec__34243,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__34246){
var vec__34247 = p__34246;
var k = cljs.core.nth.call(null,vec__34247,(0),null);
var v = cljs.core.nth.call(null,vec__34247,(1),null);
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

var seq__34259_34267 = cljs.core.seq.call(null,deps);
var chunk__34260_34268 = null;
var count__34261_34269 = (0);
var i__34262_34270 = (0);
while(true){
if((i__34262_34270 < count__34261_34269)){
var dep_34271 = cljs.core._nth.call(null,chunk__34260_34268,i__34262_34270);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_34271;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34271));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34271,(depth + (1)),state);
} else {
}


var G__34272 = seq__34259_34267;
var G__34273 = chunk__34260_34268;
var G__34274 = count__34261_34269;
var G__34275 = (i__34262_34270 + (1));
seq__34259_34267 = G__34272;
chunk__34260_34268 = G__34273;
count__34261_34269 = G__34274;
i__34262_34270 = G__34275;
continue;
} else {
var temp__5720__auto___34276 = cljs.core.seq.call(null,seq__34259_34267);
if(temp__5720__auto___34276){
var seq__34259_34277__$1 = temp__5720__auto___34276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34259_34277__$1)){
var c__4556__auto___34278 = cljs.core.chunk_first.call(null,seq__34259_34277__$1);
var G__34279 = cljs.core.chunk_rest.call(null,seq__34259_34277__$1);
var G__34280 = c__4556__auto___34278;
var G__34281 = cljs.core.count.call(null,c__4556__auto___34278);
var G__34282 = (0);
seq__34259_34267 = G__34279;
chunk__34260_34268 = G__34280;
count__34261_34269 = G__34281;
i__34262_34270 = G__34282;
continue;
} else {
var dep_34283 = cljs.core.first.call(null,seq__34259_34277__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_34283;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34283));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34283,(depth + (1)),state);
} else {
}


var G__34284 = cljs.core.next.call(null,seq__34259_34277__$1);
var G__34285 = null;
var G__34286 = (0);
var G__34287 = (0);
seq__34259_34267 = G__34284;
chunk__34260_34268 = G__34285;
count__34261_34269 = G__34286;
i__34262_34270 = G__34287;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34263){
var vec__34264 = p__34263;
var seq__34265 = cljs.core.seq.call(null,vec__34264);
var first__34266 = cljs.core.first.call(null,seq__34265);
var seq__34265__$1 = cljs.core.next.call(null,seq__34265);
var x = first__34266;
var xs = seq__34265__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__34250_SHARP_){
return clojure.set.difference.call(null,p1__34250_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__34288_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__34288_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34289 = cljs.core.seq.call(null,provides);
var chunk__34290 = null;
var count__34291 = (0);
var i__34292 = (0);
while(true){
if((i__34292 < count__34291)){
var prov = cljs.core._nth.call(null,chunk__34290,i__34292);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34301_34309 = cljs.core.seq.call(null,requires);
var chunk__34302_34310 = null;
var count__34303_34311 = (0);
var i__34304_34312 = (0);
while(true){
if((i__34304_34312 < count__34303_34311)){
var req_34313 = cljs.core._nth.call(null,chunk__34302_34310,i__34304_34312);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34313,prov);


var G__34314 = seq__34301_34309;
var G__34315 = chunk__34302_34310;
var G__34316 = count__34303_34311;
var G__34317 = (i__34304_34312 + (1));
seq__34301_34309 = G__34314;
chunk__34302_34310 = G__34315;
count__34303_34311 = G__34316;
i__34304_34312 = G__34317;
continue;
} else {
var temp__5720__auto___34318 = cljs.core.seq.call(null,seq__34301_34309);
if(temp__5720__auto___34318){
var seq__34301_34319__$1 = temp__5720__auto___34318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34301_34319__$1)){
var c__4556__auto___34320 = cljs.core.chunk_first.call(null,seq__34301_34319__$1);
var G__34321 = cljs.core.chunk_rest.call(null,seq__34301_34319__$1);
var G__34322 = c__4556__auto___34320;
var G__34323 = cljs.core.count.call(null,c__4556__auto___34320);
var G__34324 = (0);
seq__34301_34309 = G__34321;
chunk__34302_34310 = G__34322;
count__34303_34311 = G__34323;
i__34304_34312 = G__34324;
continue;
} else {
var req_34325 = cljs.core.first.call(null,seq__34301_34319__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34325,prov);


var G__34326 = cljs.core.next.call(null,seq__34301_34319__$1);
var G__34327 = null;
var G__34328 = (0);
var G__34329 = (0);
seq__34301_34309 = G__34326;
chunk__34302_34310 = G__34327;
count__34303_34311 = G__34328;
i__34304_34312 = G__34329;
continue;
}
} else {
}
}
break;
}


var G__34330 = seq__34289;
var G__34331 = chunk__34290;
var G__34332 = count__34291;
var G__34333 = (i__34292 + (1));
seq__34289 = G__34330;
chunk__34290 = G__34331;
count__34291 = G__34332;
i__34292 = G__34333;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34289);
if(temp__5720__auto__){
var seq__34289__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34289__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__34289__$1);
var G__34334 = cljs.core.chunk_rest.call(null,seq__34289__$1);
var G__34335 = c__4556__auto__;
var G__34336 = cljs.core.count.call(null,c__4556__auto__);
var G__34337 = (0);
seq__34289 = G__34334;
chunk__34290 = G__34335;
count__34291 = G__34336;
i__34292 = G__34337;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34289__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34305_34338 = cljs.core.seq.call(null,requires);
var chunk__34306_34339 = null;
var count__34307_34340 = (0);
var i__34308_34341 = (0);
while(true){
if((i__34308_34341 < count__34307_34340)){
var req_34342 = cljs.core._nth.call(null,chunk__34306_34339,i__34308_34341);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34342,prov);


var G__34343 = seq__34305_34338;
var G__34344 = chunk__34306_34339;
var G__34345 = count__34307_34340;
var G__34346 = (i__34308_34341 + (1));
seq__34305_34338 = G__34343;
chunk__34306_34339 = G__34344;
count__34307_34340 = G__34345;
i__34308_34341 = G__34346;
continue;
} else {
var temp__5720__auto___34347__$1 = cljs.core.seq.call(null,seq__34305_34338);
if(temp__5720__auto___34347__$1){
var seq__34305_34348__$1 = temp__5720__auto___34347__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34305_34348__$1)){
var c__4556__auto___34349 = cljs.core.chunk_first.call(null,seq__34305_34348__$1);
var G__34350 = cljs.core.chunk_rest.call(null,seq__34305_34348__$1);
var G__34351 = c__4556__auto___34349;
var G__34352 = cljs.core.count.call(null,c__4556__auto___34349);
var G__34353 = (0);
seq__34305_34338 = G__34350;
chunk__34306_34339 = G__34351;
count__34307_34340 = G__34352;
i__34308_34341 = G__34353;
continue;
} else {
var req_34354 = cljs.core.first.call(null,seq__34305_34348__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34354,prov);


var G__34355 = cljs.core.next.call(null,seq__34305_34348__$1);
var G__34356 = null;
var G__34357 = (0);
var G__34358 = (0);
seq__34305_34338 = G__34355;
chunk__34306_34339 = G__34356;
count__34307_34340 = G__34357;
i__34308_34341 = G__34358;
continue;
}
} else {
}
}
break;
}


var G__34359 = cljs.core.next.call(null,seq__34289__$1);
var G__34360 = null;
var G__34361 = (0);
var G__34362 = (0);
seq__34289 = G__34359;
chunk__34290 = G__34360;
count__34291 = G__34361;
i__34292 = G__34362;
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
var seq__34363_34367 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34364_34368 = null;
var count__34365_34369 = (0);
var i__34366_34370 = (0);
while(true){
if((i__34366_34370 < count__34365_34369)){
var ns_34371 = cljs.core._nth.call(null,chunk__34364_34368,i__34366_34370);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34371);


var G__34372 = seq__34363_34367;
var G__34373 = chunk__34364_34368;
var G__34374 = count__34365_34369;
var G__34375 = (i__34366_34370 + (1));
seq__34363_34367 = G__34372;
chunk__34364_34368 = G__34373;
count__34365_34369 = G__34374;
i__34366_34370 = G__34375;
continue;
} else {
var temp__5720__auto___34376 = cljs.core.seq.call(null,seq__34363_34367);
if(temp__5720__auto___34376){
var seq__34363_34377__$1 = temp__5720__auto___34376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34363_34377__$1)){
var c__4556__auto___34378 = cljs.core.chunk_first.call(null,seq__34363_34377__$1);
var G__34379 = cljs.core.chunk_rest.call(null,seq__34363_34377__$1);
var G__34380 = c__4556__auto___34378;
var G__34381 = cljs.core.count.call(null,c__4556__auto___34378);
var G__34382 = (0);
seq__34363_34367 = G__34379;
chunk__34364_34368 = G__34380;
count__34365_34369 = G__34381;
i__34366_34370 = G__34382;
continue;
} else {
var ns_34383 = cljs.core.first.call(null,seq__34363_34377__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34383);


var G__34384 = cljs.core.next.call(null,seq__34363_34377__$1);
var G__34385 = null;
var G__34386 = (0);
var G__34387 = (0);
seq__34363_34367 = G__34384;
chunk__34364_34368 = G__34385;
count__34365_34369 = G__34386;
i__34366_34370 = G__34387;
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
var G__34388__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34389__i = 0, G__34389__a = new Array(arguments.length -  0);
while (G__34389__i < G__34389__a.length) {G__34389__a[G__34389__i] = arguments[G__34389__i + 0]; ++G__34389__i;}
  args = new cljs.core.IndexedSeq(G__34389__a,0,null);
} 
return G__34388__delegate.call(this,args);};
G__34388.cljs$lang$maxFixedArity = 0;
G__34388.cljs$lang$applyTo = (function (arglist__34390){
var args = cljs.core.seq(arglist__34390);
return G__34388__delegate(args);
});
G__34388.cljs$core$IFn$_invoke$arity$variadic = G__34388__delegate;
return G__34388;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__34391_SHARP_,p2__34392_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34391_SHARP_)),p2__34392_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__34393_SHARP_,p2__34394_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34393_SHARP_),p2__34394_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34395 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34395.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__34395.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__34395;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34396){if((e34396 instanceof Error)){
var e = e34396;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34396;

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
}catch (e34397){if((e34397 instanceof Error)){
var e = e34397;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34397;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34398 = cljs.core._EQ_;
var expr__34399 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34398.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34399))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__34398.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34399))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__34398.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34399))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34401,callback){
var map__34402 = p__34401;
var map__34402__$1 = (((((!((map__34402 == null))))?(((((map__34402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34402):map__34402);
var file_msg = map__34402__$1;
var request_url = cljs.core.get.call(null,map__34402__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__32131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_34440){
var state_val_34441 = (state_34440[(1)]);
if((state_val_34441 === (7))){
var inst_34436 = (state_34440[(2)]);
var state_34440__$1 = state_34440;
var statearr_34442_34468 = state_34440__$1;
(statearr_34442_34468[(2)] = inst_34436);

(statearr_34442_34468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (1))){
var state_34440__$1 = state_34440;
var statearr_34443_34469 = state_34440__$1;
(statearr_34443_34469[(2)] = null);

(statearr_34443_34469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (4))){
var inst_34406 = (state_34440[(7)]);
var inst_34406__$1 = (state_34440[(2)]);
var state_34440__$1 = (function (){var statearr_34444 = state_34440;
(statearr_34444[(7)] = inst_34406__$1);

return statearr_34444;
})();
if(cljs.core.truth_(inst_34406__$1)){
var statearr_34445_34470 = state_34440__$1;
(statearr_34445_34470[(1)] = (5));

} else {
var statearr_34446_34471 = state_34440__$1;
(statearr_34446_34471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (15))){
var inst_34421 = (state_34440[(8)]);
var inst_34419 = (state_34440[(9)]);
var inst_34423 = inst_34421.call(null,inst_34419);
var state_34440__$1 = state_34440;
var statearr_34447_34472 = state_34440__$1;
(statearr_34447_34472[(2)] = inst_34423);

(statearr_34447_34472[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (13))){
var inst_34430 = (state_34440[(2)]);
var state_34440__$1 = state_34440;
var statearr_34448_34473 = state_34440__$1;
(statearr_34448_34473[(2)] = inst_34430);

(statearr_34448_34473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (6))){
var state_34440__$1 = state_34440;
var statearr_34449_34474 = state_34440__$1;
(statearr_34449_34474[(2)] = null);

(statearr_34449_34474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (17))){
var inst_34427 = (state_34440[(2)]);
var state_34440__$1 = state_34440;
var statearr_34450_34475 = state_34440__$1;
(statearr_34450_34475[(2)] = inst_34427);

(statearr_34450_34475[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (3))){
var inst_34438 = (state_34440[(2)]);
var state_34440__$1 = state_34440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34440__$1,inst_34438);
} else {
if((state_val_34441 === (12))){
var state_34440__$1 = state_34440;
var statearr_34451_34476 = state_34440__$1;
(statearr_34451_34476[(2)] = null);

(statearr_34451_34476[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (2))){
var state_34440__$1 = state_34440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34440__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34441 === (11))){
var inst_34411 = (state_34440[(10)]);
var inst_34417 = figwheel.client.file_reloading.blocking_load.call(null,inst_34411);
var state_34440__$1 = state_34440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34440__$1,(14),inst_34417);
} else {
if((state_val_34441 === (9))){
var inst_34411 = (state_34440[(10)]);
var state_34440__$1 = state_34440;
if(cljs.core.truth_(inst_34411)){
var statearr_34452_34477 = state_34440__$1;
(statearr_34452_34477[(1)] = (11));

} else {
var statearr_34453_34478 = state_34440__$1;
(statearr_34453_34478[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (5))){
var inst_34412 = (state_34440[(11)]);
var inst_34406 = (state_34440[(7)]);
var inst_34411 = cljs.core.nth.call(null,inst_34406,(0),null);
var inst_34412__$1 = cljs.core.nth.call(null,inst_34406,(1),null);
var state_34440__$1 = (function (){var statearr_34454 = state_34440;
(statearr_34454[(10)] = inst_34411);

(statearr_34454[(11)] = inst_34412__$1);

return statearr_34454;
})();
if(cljs.core.truth_(inst_34412__$1)){
var statearr_34455_34479 = state_34440__$1;
(statearr_34455_34479[(1)] = (8));

} else {
var statearr_34456_34480 = state_34440__$1;
(statearr_34456_34480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (14))){
var inst_34411 = (state_34440[(10)]);
var inst_34421 = (state_34440[(8)]);
var inst_34419 = (state_34440[(2)]);
var inst_34420 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34421__$1 = cljs.core.get.call(null,inst_34420,inst_34411);
var state_34440__$1 = (function (){var statearr_34457 = state_34440;
(statearr_34457[(8)] = inst_34421__$1);

(statearr_34457[(9)] = inst_34419);

return statearr_34457;
})();
if(cljs.core.truth_(inst_34421__$1)){
var statearr_34458_34481 = state_34440__$1;
(statearr_34458_34481[(1)] = (15));

} else {
var statearr_34459_34482 = state_34440__$1;
(statearr_34459_34482[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (16))){
var inst_34419 = (state_34440[(9)]);
var inst_34425 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34419);
var state_34440__$1 = state_34440;
var statearr_34460_34483 = state_34440__$1;
(statearr_34460_34483[(2)] = inst_34425);

(statearr_34460_34483[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (10))){
var inst_34432 = (state_34440[(2)]);
var state_34440__$1 = (function (){var statearr_34461 = state_34440;
(statearr_34461[(12)] = inst_34432);

return statearr_34461;
})();
var statearr_34462_34484 = state_34440__$1;
(statearr_34462_34484[(2)] = null);

(statearr_34462_34484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34441 === (8))){
var inst_34412 = (state_34440[(11)]);
var inst_34414 = eval(inst_34412);
var state_34440__$1 = state_34440;
var statearr_34463_34485 = state_34440__$1;
(statearr_34463_34485[(2)] = inst_34414);

(statearr_34463_34485[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__32037__auto__ = null;
var figwheel$client$file_reloading$state_machine__32037__auto____0 = (function (){
var statearr_34464 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34464[(0)] = figwheel$client$file_reloading$state_machine__32037__auto__);

(statearr_34464[(1)] = (1));

return statearr_34464;
});
var figwheel$client$file_reloading$state_machine__32037__auto____1 = (function (state_34440){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_34440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e34465){if((e34465 instanceof Object)){
var ex__32040__auto__ = e34465;
var statearr_34466_34486 = state_34440;
(statearr_34466_34486[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34487 = state_34440;
state_34440 = G__34487;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32037__auto__ = function(state_34440){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32037__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32037__auto____1.call(this,state_34440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32037__auto____0;
figwheel$client$file_reloading$state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32037__auto____1;
return figwheel$client$file_reloading$state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_34467 = f__32132__auto__.call(null);
(statearr_34467[(6)] = c__32131__auto__);

return statearr_34467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));

return c__32131__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__34489 = arguments.length;
switch (G__34489) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34491,callback){
var map__34492 = p__34491;
var map__34492__$1 = (((((!((map__34492 == null))))?(((((map__34492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34492):map__34492);
var file_msg = map__34492__$1;
var namespace = cljs.core.get.call(null,map__34492__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34494){
var map__34495 = p__34494;
var map__34495__$1 = (((((!((map__34495 == null))))?(((((map__34495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34495):map__34495);
var file_msg = map__34495__$1;
var namespace = cljs.core.get.call(null,map__34495__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34497){
var map__34498 = p__34497;
var map__34498__$1 = (((((!((map__34498 == null))))?(((((map__34498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34498):map__34498);
var file_msg = map__34498__$1;
var namespace = cljs.core.get.call(null,map__34498__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34500,callback){
var map__34501 = p__34500;
var map__34501__$1 = (((((!((map__34501 == null))))?(((((map__34501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34501):map__34501);
var file_msg = map__34501__$1;
var request_url = cljs.core.get.call(null,map__34501__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34501__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__32131__auto___34551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_34536){
var state_val_34537 = (state_34536[(1)]);
if((state_val_34537 === (1))){
var inst_34510 = cljs.core.seq.call(null,files);
var inst_34511 = cljs.core.first.call(null,inst_34510);
var inst_34512 = cljs.core.next.call(null,inst_34510);
var inst_34513 = files;
var state_34536__$1 = (function (){var statearr_34538 = state_34536;
(statearr_34538[(7)] = inst_34513);

(statearr_34538[(8)] = inst_34511);

(statearr_34538[(9)] = inst_34512);

return statearr_34538;
})();
var statearr_34539_34552 = state_34536__$1;
(statearr_34539_34552[(2)] = null);

(statearr_34539_34552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (2))){
var inst_34513 = (state_34536[(7)]);
var inst_34519 = (state_34536[(10)]);
var inst_34518 = cljs.core.seq.call(null,inst_34513);
var inst_34519__$1 = cljs.core.first.call(null,inst_34518);
var inst_34520 = cljs.core.next.call(null,inst_34518);
var inst_34521 = (inst_34519__$1 == null);
var inst_34522 = cljs.core.not.call(null,inst_34521);
var state_34536__$1 = (function (){var statearr_34540 = state_34536;
(statearr_34540[(11)] = inst_34520);

(statearr_34540[(10)] = inst_34519__$1);

return statearr_34540;
})();
if(inst_34522){
var statearr_34541_34553 = state_34536__$1;
(statearr_34541_34553[(1)] = (4));

} else {
var statearr_34542_34554 = state_34536__$1;
(statearr_34542_34554[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (3))){
var inst_34534 = (state_34536[(2)]);
var state_34536__$1 = state_34536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34536__$1,inst_34534);
} else {
if((state_val_34537 === (4))){
var inst_34519 = (state_34536[(10)]);
var inst_34524 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34519);
var state_34536__$1 = state_34536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34536__$1,(7),inst_34524);
} else {
if((state_val_34537 === (5))){
var inst_34530 = cljs.core.async.close_BANG_.call(null,out);
var state_34536__$1 = state_34536;
var statearr_34543_34555 = state_34536__$1;
(statearr_34543_34555[(2)] = inst_34530);

(statearr_34543_34555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (6))){
var inst_34532 = (state_34536[(2)]);
var state_34536__$1 = state_34536;
var statearr_34544_34556 = state_34536__$1;
(statearr_34544_34556[(2)] = inst_34532);

(statearr_34544_34556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (7))){
var inst_34520 = (state_34536[(11)]);
var inst_34526 = (state_34536[(2)]);
var inst_34527 = cljs.core.async.put_BANG_.call(null,out,inst_34526);
var inst_34513 = inst_34520;
var state_34536__$1 = (function (){var statearr_34545 = state_34536;
(statearr_34545[(7)] = inst_34513);

(statearr_34545[(12)] = inst_34527);

return statearr_34545;
})();
var statearr_34546_34557 = state_34536__$1;
(statearr_34546_34557[(2)] = null);

(statearr_34546_34557[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32037__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32037__auto____0 = (function (){
var statearr_34547 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34547[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32037__auto__);

(statearr_34547[(1)] = (1));

return statearr_34547;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32037__auto____1 = (function (state_34536){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_34536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e34548){if((e34548 instanceof Object)){
var ex__32040__auto__ = e34548;
var statearr_34549_34558 = state_34536;
(statearr_34549_34558[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34559 = state_34536;
state_34536 = G__34559;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32037__auto__ = function(state_34536){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32037__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32037__auto____1.call(this,state_34536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32037__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32037__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_34550 = f__32132__auto__.call(null);
(statearr_34550[(6)] = c__32131__auto___34551);

return statearr_34550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34560,opts){
var map__34561 = p__34560;
var map__34561__$1 = (((((!((map__34561 == null))))?(((((map__34561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34561):map__34561);
var eval_body = cljs.core.get.call(null,map__34561__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34561__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e34563){var e = e34563;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__34564_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34564_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34565){
var vec__34566 = p__34565;
var k = cljs.core.nth.call(null,vec__34566,(0),null);
var v = cljs.core.nth.call(null,vec__34566,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34569){
var vec__34570 = p__34569;
var k = cljs.core.nth.call(null,vec__34570,(0),null);
var v = cljs.core.nth.call(null,vec__34570,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34576,p__34577){
var map__34578 = p__34576;
var map__34578__$1 = (((((!((map__34578 == null))))?(((((map__34578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34578):map__34578);
var opts = map__34578__$1;
var before_jsload = cljs.core.get.call(null,map__34578__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34578__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34578__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34579 = p__34577;
var map__34579__$1 = (((((!((map__34579 == null))))?(((((map__34579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34579):map__34579);
var msg = map__34579__$1;
var files = cljs.core.get.call(null,map__34579__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34579__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34579__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__32132__auto__ = (function (){var switch__32036__auto__ = (function (state_34733){
var state_val_34734 = (state_34733[(1)]);
if((state_val_34734 === (7))){
var inst_34595 = (state_34733[(7)]);
var inst_34594 = (state_34733[(8)]);
var inst_34596 = (state_34733[(9)]);
var inst_34593 = (state_34733[(10)]);
var inst_34601 = cljs.core._nth.call(null,inst_34594,inst_34596);
var inst_34602 = figwheel.client.file_reloading.eval_body.call(null,inst_34601,opts);
var inst_34603 = (inst_34596 + (1));
var tmp34735 = inst_34595;
var tmp34736 = inst_34594;
var tmp34737 = inst_34593;
var inst_34593__$1 = tmp34737;
var inst_34594__$1 = tmp34736;
var inst_34595__$1 = tmp34735;
var inst_34596__$1 = inst_34603;
var state_34733__$1 = (function (){var statearr_34738 = state_34733;
(statearr_34738[(7)] = inst_34595__$1);

(statearr_34738[(8)] = inst_34594__$1);

(statearr_34738[(9)] = inst_34596__$1);

(statearr_34738[(10)] = inst_34593__$1);

(statearr_34738[(11)] = inst_34602);

return statearr_34738;
})();
var statearr_34739_34822 = state_34733__$1;
(statearr_34739_34822[(2)] = null);

(statearr_34739_34822[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (20))){
var inst_34636 = (state_34733[(12)]);
var inst_34644 = figwheel.client.file_reloading.sort_files.call(null,inst_34636);
var state_34733__$1 = state_34733;
var statearr_34740_34823 = state_34733__$1;
(statearr_34740_34823[(2)] = inst_34644);

(statearr_34740_34823[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (27))){
var state_34733__$1 = state_34733;
var statearr_34741_34824 = state_34733__$1;
(statearr_34741_34824[(2)] = null);

(statearr_34741_34824[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (1))){
var inst_34585 = (state_34733[(13)]);
var inst_34582 = before_jsload.call(null,files);
var inst_34583 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34584 = (function (){return (function (p1__34573_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34573_SHARP_);
});
})();
var inst_34585__$1 = cljs.core.filter.call(null,inst_34584,files);
var inst_34586 = cljs.core.not_empty.call(null,inst_34585__$1);
var state_34733__$1 = (function (){var statearr_34742 = state_34733;
(statearr_34742[(13)] = inst_34585__$1);

(statearr_34742[(14)] = inst_34583);

(statearr_34742[(15)] = inst_34582);

return statearr_34742;
})();
if(cljs.core.truth_(inst_34586)){
var statearr_34743_34825 = state_34733__$1;
(statearr_34743_34825[(1)] = (2));

} else {
var statearr_34744_34826 = state_34733__$1;
(statearr_34744_34826[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (24))){
var state_34733__$1 = state_34733;
var statearr_34745_34827 = state_34733__$1;
(statearr_34745_34827[(2)] = null);

(statearr_34745_34827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (39))){
var inst_34686 = (state_34733[(16)]);
var state_34733__$1 = state_34733;
var statearr_34746_34828 = state_34733__$1;
(statearr_34746_34828[(2)] = inst_34686);

(statearr_34746_34828[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (46))){
var inst_34728 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34747_34829 = state_34733__$1;
(statearr_34747_34829[(2)] = inst_34728);

(statearr_34747_34829[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (4))){
var inst_34630 = (state_34733[(2)]);
var inst_34631 = cljs.core.List.EMPTY;
var inst_34632 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34631);
var inst_34633 = (function (){return (function (p1__34574_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34574_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34574_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34574_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_34634 = cljs.core.filter.call(null,inst_34633,files);
var inst_34635 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34636 = cljs.core.concat.call(null,inst_34634,inst_34635);
var state_34733__$1 = (function (){var statearr_34748 = state_34733;
(statearr_34748[(17)] = inst_34632);

(statearr_34748[(12)] = inst_34636);

(statearr_34748[(18)] = inst_34630);

return statearr_34748;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34749_34830 = state_34733__$1;
(statearr_34749_34830[(1)] = (16));

} else {
var statearr_34750_34831 = state_34733__$1;
(statearr_34750_34831[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (15))){
var inst_34620 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34751_34832 = state_34733__$1;
(statearr_34751_34832[(2)] = inst_34620);

(statearr_34751_34832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (21))){
var inst_34646 = (state_34733[(19)]);
var inst_34646__$1 = (state_34733[(2)]);
var inst_34647 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34646__$1);
var state_34733__$1 = (function (){var statearr_34752 = state_34733;
(statearr_34752[(19)] = inst_34646__$1);

return statearr_34752;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34733__$1,(22),inst_34647);
} else {
if((state_val_34734 === (31))){
var inst_34731 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34733__$1,inst_34731);
} else {
if((state_val_34734 === (32))){
var inst_34686 = (state_34733[(16)]);
var inst_34691 = inst_34686.cljs$lang$protocol_mask$partition0$;
var inst_34692 = (inst_34691 & (64));
var inst_34693 = inst_34686.cljs$core$ISeq$;
var inst_34694 = (cljs.core.PROTOCOL_SENTINEL === inst_34693);
var inst_34695 = ((inst_34692) || (inst_34694));
var state_34733__$1 = state_34733;
if(cljs.core.truth_(inst_34695)){
var statearr_34753_34833 = state_34733__$1;
(statearr_34753_34833[(1)] = (35));

} else {
var statearr_34754_34834 = state_34733__$1;
(statearr_34754_34834[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (40))){
var inst_34708 = (state_34733[(20)]);
var inst_34707 = (state_34733[(2)]);
var inst_34708__$1 = cljs.core.get.call(null,inst_34707,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34709 = cljs.core.get.call(null,inst_34707,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34710 = cljs.core.not_empty.call(null,inst_34708__$1);
var state_34733__$1 = (function (){var statearr_34755 = state_34733;
(statearr_34755[(20)] = inst_34708__$1);

(statearr_34755[(21)] = inst_34709);

return statearr_34755;
})();
if(cljs.core.truth_(inst_34710)){
var statearr_34756_34835 = state_34733__$1;
(statearr_34756_34835[(1)] = (41));

} else {
var statearr_34757_34836 = state_34733__$1;
(statearr_34757_34836[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (33))){
var state_34733__$1 = state_34733;
var statearr_34758_34837 = state_34733__$1;
(statearr_34758_34837[(2)] = false);

(statearr_34758_34837[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (13))){
var inst_34606 = (state_34733[(22)]);
var inst_34610 = cljs.core.chunk_first.call(null,inst_34606);
var inst_34611 = cljs.core.chunk_rest.call(null,inst_34606);
var inst_34612 = cljs.core.count.call(null,inst_34610);
var inst_34593 = inst_34611;
var inst_34594 = inst_34610;
var inst_34595 = inst_34612;
var inst_34596 = (0);
var state_34733__$1 = (function (){var statearr_34759 = state_34733;
(statearr_34759[(7)] = inst_34595);

(statearr_34759[(8)] = inst_34594);

(statearr_34759[(9)] = inst_34596);

(statearr_34759[(10)] = inst_34593);

return statearr_34759;
})();
var statearr_34760_34838 = state_34733__$1;
(statearr_34760_34838[(2)] = null);

(statearr_34760_34838[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (22))){
var inst_34646 = (state_34733[(19)]);
var inst_34654 = (state_34733[(23)]);
var inst_34650 = (state_34733[(24)]);
var inst_34649 = (state_34733[(25)]);
var inst_34649__$1 = (state_34733[(2)]);
var inst_34650__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34649__$1);
var inst_34651 = (function (){var all_files = inst_34646;
var res_SINGLEQUOTE_ = inst_34649__$1;
var res = inst_34650__$1;
return (function (p1__34575_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34575_SHARP_));
});
})();
var inst_34652 = cljs.core.filter.call(null,inst_34651,inst_34649__$1);
var inst_34653 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34654__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34653);
var inst_34655 = cljs.core.not_empty.call(null,inst_34654__$1);
var state_34733__$1 = (function (){var statearr_34761 = state_34733;
(statearr_34761[(23)] = inst_34654__$1);

(statearr_34761[(24)] = inst_34650__$1);

(statearr_34761[(26)] = inst_34652);

(statearr_34761[(25)] = inst_34649__$1);

return statearr_34761;
})();
if(cljs.core.truth_(inst_34655)){
var statearr_34762_34839 = state_34733__$1;
(statearr_34762_34839[(1)] = (23));

} else {
var statearr_34763_34840 = state_34733__$1;
(statearr_34763_34840[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (36))){
var state_34733__$1 = state_34733;
var statearr_34764_34841 = state_34733__$1;
(statearr_34764_34841[(2)] = false);

(statearr_34764_34841[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (41))){
var inst_34708 = (state_34733[(20)]);
var inst_34712 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34713 = cljs.core.map.call(null,inst_34712,inst_34708);
var inst_34714 = cljs.core.pr_str.call(null,inst_34713);
var inst_34715 = ["figwheel-no-load meta-data: ",inst_34714].join('');
var inst_34716 = figwheel.client.utils.log.call(null,inst_34715);
var state_34733__$1 = state_34733;
var statearr_34765_34842 = state_34733__$1;
(statearr_34765_34842[(2)] = inst_34716);

(statearr_34765_34842[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (43))){
var inst_34709 = (state_34733[(21)]);
var inst_34719 = (state_34733[(2)]);
var inst_34720 = cljs.core.not_empty.call(null,inst_34709);
var state_34733__$1 = (function (){var statearr_34766 = state_34733;
(statearr_34766[(27)] = inst_34719);

return statearr_34766;
})();
if(cljs.core.truth_(inst_34720)){
var statearr_34767_34843 = state_34733__$1;
(statearr_34767_34843[(1)] = (44));

} else {
var statearr_34768_34844 = state_34733__$1;
(statearr_34768_34844[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (29))){
var inst_34646 = (state_34733[(19)]);
var inst_34654 = (state_34733[(23)]);
var inst_34650 = (state_34733[(24)]);
var inst_34652 = (state_34733[(26)]);
var inst_34686 = (state_34733[(16)]);
var inst_34649 = (state_34733[(25)]);
var inst_34682 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34685 = (function (){var all_files = inst_34646;
var res_SINGLEQUOTE_ = inst_34649;
var res = inst_34650;
var files_not_loaded = inst_34652;
var dependencies_that_loaded = inst_34654;
return (function (p__34684){
var map__34769 = p__34684;
var map__34769__$1 = (((((!((map__34769 == null))))?(((((map__34769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34769):map__34769);
var namespace = cljs.core.get.call(null,map__34769__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_34686__$1 = cljs.core.group_by.call(null,inst_34685,inst_34652);
var inst_34688 = (inst_34686__$1 == null);
var inst_34689 = cljs.core.not.call(null,inst_34688);
var state_34733__$1 = (function (){var statearr_34771 = state_34733;
(statearr_34771[(28)] = inst_34682);

(statearr_34771[(16)] = inst_34686__$1);

return statearr_34771;
})();
if(inst_34689){
var statearr_34772_34845 = state_34733__$1;
(statearr_34772_34845[(1)] = (32));

} else {
var statearr_34773_34846 = state_34733__$1;
(statearr_34773_34846[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (44))){
var inst_34709 = (state_34733[(21)]);
var inst_34722 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34709);
var inst_34723 = cljs.core.pr_str.call(null,inst_34722);
var inst_34724 = ["not required: ",inst_34723].join('');
var inst_34725 = figwheel.client.utils.log.call(null,inst_34724);
var state_34733__$1 = state_34733;
var statearr_34774_34847 = state_34733__$1;
(statearr_34774_34847[(2)] = inst_34725);

(statearr_34774_34847[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (6))){
var inst_34627 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34775_34848 = state_34733__$1;
(statearr_34775_34848[(2)] = inst_34627);

(statearr_34775_34848[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (28))){
var inst_34652 = (state_34733[(26)]);
var inst_34679 = (state_34733[(2)]);
var inst_34680 = cljs.core.not_empty.call(null,inst_34652);
var state_34733__$1 = (function (){var statearr_34776 = state_34733;
(statearr_34776[(29)] = inst_34679);

return statearr_34776;
})();
if(cljs.core.truth_(inst_34680)){
var statearr_34777_34849 = state_34733__$1;
(statearr_34777_34849[(1)] = (29));

} else {
var statearr_34778_34850 = state_34733__$1;
(statearr_34778_34850[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (25))){
var inst_34650 = (state_34733[(24)]);
var inst_34666 = (state_34733[(2)]);
var inst_34667 = cljs.core.not_empty.call(null,inst_34650);
var state_34733__$1 = (function (){var statearr_34779 = state_34733;
(statearr_34779[(30)] = inst_34666);

return statearr_34779;
})();
if(cljs.core.truth_(inst_34667)){
var statearr_34780_34851 = state_34733__$1;
(statearr_34780_34851[(1)] = (26));

} else {
var statearr_34781_34852 = state_34733__$1;
(statearr_34781_34852[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (34))){
var inst_34702 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
if(cljs.core.truth_(inst_34702)){
var statearr_34782_34853 = state_34733__$1;
(statearr_34782_34853[(1)] = (38));

} else {
var statearr_34783_34854 = state_34733__$1;
(statearr_34783_34854[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (17))){
var state_34733__$1 = state_34733;
var statearr_34784_34855 = state_34733__$1;
(statearr_34784_34855[(2)] = recompile_dependents);

(statearr_34784_34855[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (3))){
var state_34733__$1 = state_34733;
var statearr_34785_34856 = state_34733__$1;
(statearr_34785_34856[(2)] = null);

(statearr_34785_34856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (12))){
var inst_34623 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34786_34857 = state_34733__$1;
(statearr_34786_34857[(2)] = inst_34623);

(statearr_34786_34857[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (2))){
var inst_34585 = (state_34733[(13)]);
var inst_34592 = cljs.core.seq.call(null,inst_34585);
var inst_34593 = inst_34592;
var inst_34594 = null;
var inst_34595 = (0);
var inst_34596 = (0);
var state_34733__$1 = (function (){var statearr_34787 = state_34733;
(statearr_34787[(7)] = inst_34595);

(statearr_34787[(8)] = inst_34594);

(statearr_34787[(9)] = inst_34596);

(statearr_34787[(10)] = inst_34593);

return statearr_34787;
})();
var statearr_34788_34858 = state_34733__$1;
(statearr_34788_34858[(2)] = null);

(statearr_34788_34858[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (23))){
var inst_34646 = (state_34733[(19)]);
var inst_34654 = (state_34733[(23)]);
var inst_34650 = (state_34733[(24)]);
var inst_34652 = (state_34733[(26)]);
var inst_34649 = (state_34733[(25)]);
var inst_34657 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34659 = (function (){var all_files = inst_34646;
var res_SINGLEQUOTE_ = inst_34649;
var res = inst_34650;
var files_not_loaded = inst_34652;
var dependencies_that_loaded = inst_34654;
return (function (p__34658){
var map__34789 = p__34658;
var map__34789__$1 = (((((!((map__34789 == null))))?(((((map__34789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34789):map__34789);
var request_url = cljs.core.get.call(null,map__34789__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_34660 = cljs.core.reverse.call(null,inst_34654);
var inst_34661 = cljs.core.map.call(null,inst_34659,inst_34660);
var inst_34662 = cljs.core.pr_str.call(null,inst_34661);
var inst_34663 = figwheel.client.utils.log.call(null,inst_34662);
var state_34733__$1 = (function (){var statearr_34791 = state_34733;
(statearr_34791[(31)] = inst_34657);

return statearr_34791;
})();
var statearr_34792_34859 = state_34733__$1;
(statearr_34792_34859[(2)] = inst_34663);

(statearr_34792_34859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (35))){
var state_34733__$1 = state_34733;
var statearr_34793_34860 = state_34733__$1;
(statearr_34793_34860[(2)] = true);

(statearr_34793_34860[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (19))){
var inst_34636 = (state_34733[(12)]);
var inst_34642 = figwheel.client.file_reloading.expand_files.call(null,inst_34636);
var state_34733__$1 = state_34733;
var statearr_34794_34861 = state_34733__$1;
(statearr_34794_34861[(2)] = inst_34642);

(statearr_34794_34861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (11))){
var state_34733__$1 = state_34733;
var statearr_34795_34862 = state_34733__$1;
(statearr_34795_34862[(2)] = null);

(statearr_34795_34862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (9))){
var inst_34625 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34796_34863 = state_34733__$1;
(statearr_34796_34863[(2)] = inst_34625);

(statearr_34796_34863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (5))){
var inst_34595 = (state_34733[(7)]);
var inst_34596 = (state_34733[(9)]);
var inst_34598 = (inst_34596 < inst_34595);
var inst_34599 = inst_34598;
var state_34733__$1 = state_34733;
if(cljs.core.truth_(inst_34599)){
var statearr_34797_34864 = state_34733__$1;
(statearr_34797_34864[(1)] = (7));

} else {
var statearr_34798_34865 = state_34733__$1;
(statearr_34798_34865[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (14))){
var inst_34606 = (state_34733[(22)]);
var inst_34615 = cljs.core.first.call(null,inst_34606);
var inst_34616 = figwheel.client.file_reloading.eval_body.call(null,inst_34615,opts);
var inst_34617 = cljs.core.next.call(null,inst_34606);
var inst_34593 = inst_34617;
var inst_34594 = null;
var inst_34595 = (0);
var inst_34596 = (0);
var state_34733__$1 = (function (){var statearr_34799 = state_34733;
(statearr_34799[(32)] = inst_34616);

(statearr_34799[(7)] = inst_34595);

(statearr_34799[(8)] = inst_34594);

(statearr_34799[(9)] = inst_34596);

(statearr_34799[(10)] = inst_34593);

return statearr_34799;
})();
var statearr_34800_34866 = state_34733__$1;
(statearr_34800_34866[(2)] = null);

(statearr_34800_34866[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (45))){
var state_34733__$1 = state_34733;
var statearr_34801_34867 = state_34733__$1;
(statearr_34801_34867[(2)] = null);

(statearr_34801_34867[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (26))){
var inst_34646 = (state_34733[(19)]);
var inst_34654 = (state_34733[(23)]);
var inst_34650 = (state_34733[(24)]);
var inst_34652 = (state_34733[(26)]);
var inst_34649 = (state_34733[(25)]);
var inst_34669 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34671 = (function (){var all_files = inst_34646;
var res_SINGLEQUOTE_ = inst_34649;
var res = inst_34650;
var files_not_loaded = inst_34652;
var dependencies_that_loaded = inst_34654;
return (function (p__34670){
var map__34802 = p__34670;
var map__34802__$1 = (((((!((map__34802 == null))))?(((((map__34802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34802):map__34802);
var namespace = cljs.core.get.call(null,map__34802__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34802__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_34672 = cljs.core.map.call(null,inst_34671,inst_34650);
var inst_34673 = cljs.core.pr_str.call(null,inst_34672);
var inst_34674 = figwheel.client.utils.log.call(null,inst_34673);
var inst_34675 = (function (){var all_files = inst_34646;
var res_SINGLEQUOTE_ = inst_34649;
var res = inst_34650;
var files_not_loaded = inst_34652;
var dependencies_that_loaded = inst_34654;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_34676 = setTimeout(inst_34675,(10));
var state_34733__$1 = (function (){var statearr_34804 = state_34733;
(statearr_34804[(33)] = inst_34674);

(statearr_34804[(34)] = inst_34669);

return statearr_34804;
})();
var statearr_34805_34868 = state_34733__$1;
(statearr_34805_34868[(2)] = inst_34676);

(statearr_34805_34868[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (16))){
var state_34733__$1 = state_34733;
var statearr_34806_34869 = state_34733__$1;
(statearr_34806_34869[(2)] = reload_dependents);

(statearr_34806_34869[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (38))){
var inst_34686 = (state_34733[(16)]);
var inst_34704 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34686);
var state_34733__$1 = state_34733;
var statearr_34807_34870 = state_34733__$1;
(statearr_34807_34870[(2)] = inst_34704);

(statearr_34807_34870[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (30))){
var state_34733__$1 = state_34733;
var statearr_34808_34871 = state_34733__$1;
(statearr_34808_34871[(2)] = null);

(statearr_34808_34871[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (10))){
var inst_34606 = (state_34733[(22)]);
var inst_34608 = cljs.core.chunked_seq_QMARK_.call(null,inst_34606);
var state_34733__$1 = state_34733;
if(inst_34608){
var statearr_34809_34872 = state_34733__$1;
(statearr_34809_34872[(1)] = (13));

} else {
var statearr_34810_34873 = state_34733__$1;
(statearr_34810_34873[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (18))){
var inst_34640 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
if(cljs.core.truth_(inst_34640)){
var statearr_34811_34874 = state_34733__$1;
(statearr_34811_34874[(1)] = (19));

} else {
var statearr_34812_34875 = state_34733__$1;
(statearr_34812_34875[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (42))){
var state_34733__$1 = state_34733;
var statearr_34813_34876 = state_34733__$1;
(statearr_34813_34876[(2)] = null);

(statearr_34813_34876[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (37))){
var inst_34699 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34814_34877 = state_34733__$1;
(statearr_34814_34877[(2)] = inst_34699);

(statearr_34814_34877[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (8))){
var inst_34593 = (state_34733[(10)]);
var inst_34606 = (state_34733[(22)]);
var inst_34606__$1 = cljs.core.seq.call(null,inst_34593);
var state_34733__$1 = (function (){var statearr_34815 = state_34733;
(statearr_34815[(22)] = inst_34606__$1);

return statearr_34815;
})();
if(inst_34606__$1){
var statearr_34816_34878 = state_34733__$1;
(statearr_34816_34878[(1)] = (10));

} else {
var statearr_34817_34879 = state_34733__$1;
(statearr_34817_34879[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32037__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32037__auto____0 = (function (){
var statearr_34818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34818[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32037__auto__);

(statearr_34818[(1)] = (1));

return statearr_34818;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32037__auto____1 = (function (state_34733){
while(true){
var ret_value__32038__auto__ = (function (){try{while(true){
var result__32039__auto__ = switch__32036__auto__.call(null,state_34733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32039__auto__;
}
break;
}
}catch (e34819){if((e34819 instanceof Object)){
var ex__32040__auto__ = e34819;
var statearr_34820_34880 = state_34733;
(statearr_34820_34880[(5)] = ex__32040__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34881 = state_34733;
state_34733 = G__34881;
continue;
} else {
return ret_value__32038__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32037__auto__ = function(state_34733){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32037__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32037__auto____1.call(this,state_34733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32037__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32037__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32037__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32037__auto__;
})()
})();
var state__32133__auto__ = (function (){var statearr_34821 = f__32132__auto__.call(null);
(statearr_34821[(6)] = c__32131__auto__);

return statearr_34821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32133__auto__);
}));

return c__32131__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34884,link){
var map__34885 = p__34884;
var map__34885__$1 = (((((!((map__34885 == null))))?(((((map__34885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34885):map__34885);
var file = cljs.core.get.call(null,map__34885__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__34882_SHARP_,p2__34883_SHARP_){
if(cljs.core._EQ_.call(null,p1__34882_SHARP_,p2__34883_SHARP_)){
return p1__34882_SHARP_;
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34888){
var map__34889 = p__34888;
var map__34889__$1 = (((((!((map__34889 == null))))?(((((map__34889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34889):map__34889);
var match_length = cljs.core.get.call(null,map__34889__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34889__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34887_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34887_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34891_SHARP_,p2__34892_SHARP_){
return cljs.core.assoc.call(null,p1__34891_SHARP_,cljs.core.get.call(null,p2__34892_SHARP_,key),p2__34892_SHARP_);
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
var loaded_f_datas_34893 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34893);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34893);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34894,p__34895){
var map__34896 = p__34894;
var map__34896__$1 = (((((!((map__34896 == null))))?(((((map__34896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34896):map__34896);
var on_cssload = cljs.core.get.call(null,map__34896__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34897 = p__34895;
var map__34897__$1 = (((((!((map__34897 == null))))?(((((map__34897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34897):map__34897);
var files_msg = map__34897__$1;
var files = cljs.core.get.call(null,map__34897__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1602979381592
