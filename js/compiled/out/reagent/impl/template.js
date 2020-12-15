// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('goog.object');
reagent.impl.template.node$module$react = require('react');
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (tag,id,className){
this.tag = tag;
this.id = id;
this.className = className;
});

(reagent.impl.template.NativeWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"className","className",-342755530,null)], null);
}));

(reagent.impl.template.NativeWrapper.cljs$lang$type = true);

(reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper");

(reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reagent.impl.template/NativeWrapper");
}));

/**
 * Positional factory function for reagent.impl.template/NativeWrapper.
 */
reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(tag,id,className){
return (new reagent.impl.template.NativeWrapper(tag,id,className));
});

reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
return ((reagent.impl.util.named_QMARK_.call(null,x)) || (typeof x === 'string'));
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
return ((reagent.impl.template.hiccup_tag_QMARK_.call(null,x)) || (cljs.core.ifn_QMARK_.call(null,x)) || ((x instanceof reagent.impl.template.NativeWrapper)));
});
reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
reagent.impl.template.cache_get = (function reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return goog.object.get(o,k);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(reagent.impl.util.named_QMARK_.call(null,k)){
var temp__5722__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.prop_name_cache,cljs.core.name.call(null,k));
if((temp__5722__auto__ == null)){
var v = reagent.impl.util.dash_to_prop_name.call(null,k);
goog.object.set(reagent.impl.template.prop_name_cache,cljs.core.name.call(null,k),v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5722__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.js_val_QMARK_ = (function reagent$impl$template$js_val_QMARK_(x){
return (!(("object" === goog.typeOf(x))));
});
reagent.impl.template.kv_conv = (function reagent$impl$template$kv_conv(o,k,v){
<<<<<<< HEAD
var G__26875 = o;
goog.object.set(G__26875,reagent.impl.template.cached_prop_name.call(null,k),reagent.impl.template.convert_prop_value.call(null,v));

return G__26875;
=======
var G__27332 = o;
goog.object.set(G__27332,reagent.impl.template.cached_prop_name.call(null,k),reagent.impl.template.convert_prop_value.call(null,v));

return G__27332;
>>>>>>> 8f3c68a (Initial Commit)
});
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if(reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(reagent.impl.util.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.clj__GT_js.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return (function() { 
<<<<<<< HEAD
var G__26876__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__26876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26877__i = 0, G__26877__a = new Array(arguments.length -  0);
while (G__26877__i < G__26877__a.length) {G__26877__a[G__26877__i] = arguments[G__26877__i + 0]; ++G__26877__i;}
  args = new cljs.core.IndexedSeq(G__26877__a,0,null);
} 
return G__26876__delegate.call(this,args);};
G__26876.cljs$lang$maxFixedArity = 0;
G__26876.cljs$lang$applyTo = (function (arglist__26878){
var args = cljs.core.seq(arglist__26878);
return G__26876__delegate(args);
});
G__26876.cljs$core$IFn$_invoke$arity$variadic = G__26876__delegate;
return G__26876;
=======
var G__27333__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__27333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27334__i = 0, G__27334__a = new Array(arguments.length -  0);
while (G__27334__i < G__27334__a.length) {G__27334__a[G__27334__i] = arguments[G__27334__i + 0]; ++G__27334__i;}
  args = new cljs.core.IndexedSeq(G__27334__a,0,null);
} 
return G__27333__delegate.call(this,args);};
G__27333.cljs$lang$maxFixedArity = 0;
G__27333.cljs$lang$applyTo = (function (arglist__27335){
var args = cljs.core.seq(arglist__27335);
return G__27333__delegate(args);
});
G__27333.cljs$core$IFn$_invoke$arity$variadic = G__27333__delegate;
return G__27333;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
} else {
return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
});
reagent.impl.template.custom_prop_name_cache = ({});
reagent.impl.template.cached_custom_prop_name = (function reagent$impl$template$cached_custom_prop_name(k){
if(reagent.impl.util.named_QMARK_.call(null,k)){
var temp__5722__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.custom_prop_name_cache,cljs.core.name.call(null,k));
if((temp__5722__auto__ == null)){
var v = reagent.impl.util.dash_to_prop_name.call(null,k);
goog.object.set(reagent.impl.template.custom_prop_name_cache,cljs.core.name.call(null,k),v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5722__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.custom_kv_conv = (function reagent$impl$template$custom_kv_conv(o,k,v){
<<<<<<< HEAD
var G__26879 = o;
goog.object.set(G__26879,reagent.impl.template.cached_custom_prop_name.call(null,k),reagent.impl.template.convert_prop_value.call(null,v));

return G__26879;
=======
var G__27336 = o;
goog.object.set(G__27336,reagent.impl.template.cached_custom_prop_name.call(null,k),reagent.impl.template.convert_prop_value.call(null,v));

return G__27336;
>>>>>>> 8f3c68a (Initial Commit)
});
reagent.impl.template.convert_custom_prop_value = (function reagent$impl$template$convert_custom_prop_value(x){
if(reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(reagent.impl.util.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,reagent.impl.template.custom_kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.clj__GT_js.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return (function() { 
<<<<<<< HEAD
var G__26880__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__26880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26881__i = 0, G__26881__a = new Array(arguments.length -  0);
while (G__26881__i < G__26881__a.length) {G__26881__a[G__26881__i] = arguments[G__26881__i + 0]; ++G__26881__i;}
  args = new cljs.core.IndexedSeq(G__26881__a,0,null);
} 
return G__26880__delegate.call(this,args);};
G__26880.cljs$lang$maxFixedArity = 0;
G__26880.cljs$lang$applyTo = (function (arglist__26882){
var args = cljs.core.seq(arglist__26882);
return G__26880__delegate(args);
});
G__26880.cljs$core$IFn$_invoke$arity$variadic = G__26880__delegate;
return G__26880;
=======
var G__27337__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__27337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27338__i = 0, G__27338__a = new Array(arguments.length -  0);
while (G__27338__i < G__27338__a.length) {G__27338__a[G__27338__i] = arguments[G__27338__i + 0]; ++G__27338__i;}
  args = new cljs.core.IndexedSeq(G__27338__a,0,null);
} 
return G__27337__delegate.call(this,args);};
G__27337.cljs$lang$maxFixedArity = 0;
G__27337.cljs$lang$applyTo = (function (arglist__27339){
var args = cljs.core.seq(arglist__27339);
return G__27337__delegate(args);
});
G__27337.cljs$core$IFn$_invoke$arity$variadic = G__27337__delegate;
return G__27337;
>>>>>>> 8f3c68a (Initial Commit)
})()
;
} else {
return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
});
/**
 * Takes the id and class from tag keyword, and adds them to the
 *   other props. Parsed tag is JS object with :id and :class properties.
 */
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(props,id_class){
var id = id_class.id;
var class$ = id_class.className;
<<<<<<< HEAD
var G__26883 = props;
var G__26883__$1 = (((((!((id == null)))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props) == null))))?cljs.core.assoc.call(null,G__26883,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__26883);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.call(null,G__26883__$1,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.call(null,class$,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props)));
} else {
return G__26883__$1;
=======
var G__27340 = props;
var G__27340__$1 = (((((!((id == null)))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props) == null))))?cljs.core.assoc.call(null,G__27340,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__27340);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.call(null,G__27340__$1,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.call(null,class$,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props)));
} else {
return G__27340__$1;
>>>>>>> 8f3c68a (Initial Commit)
}
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
var class$ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
<<<<<<< HEAD
var props__$1 = reagent.impl.template.set_id_class.call(null,(function (){var G__26884 = props;
if(cljs.core.truth_(class$)){
return cljs.core.assoc.call(null,G__26884,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.call(null,class$));
} else {
return G__26884;
=======
var props__$1 = reagent.impl.template.set_id_class.call(null,(function (){var G__27341 = props;
if(cljs.core.truth_(class$)){
return cljs.core.assoc.call(null,G__27341,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.call(null,class$));
} else {
return G__27341;
>>>>>>> 8f3c68a (Initial Commit)
}
})(),id_class);
if(cljs.core.truth_(id_class.custom)){
return reagent.impl.template.convert_custom_prop_value.call(null,props__$1);
} else {
return reagent.impl.template.convert_prop_value.call(null,props__$1);
}
});
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.template !== 'undefined') && (typeof reagent.impl.template.find_dom_node !== 'undefined')){
} else {
reagent.impl.template.find_dom_node = null;
}
reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
reagent.impl.template.has_selection_api_QMARK_ = (function reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_.call(null,reagent.impl.template.these_inputs_have_selection_api,input_type);
});
<<<<<<< HEAD
reagent.impl.template.input_node_set_value = (function reagent$impl$template$input_node_set_value(node,rendered_value,dom_value,component,p__26885){
var map__26886 = p__26885;
var map__26886__$1 = (((((!((map__26886 == null))))?(((((map__26886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26886):map__26886);
var on_write = cljs.core.get.call(null,map__26886__$1,new cljs.core.Keyword(null,"on-write","on-write",31519475));
=======
reagent.impl.template.input_node_set_value = (function reagent$impl$template$input_node_set_value(node,rendered_value,dom_value,component,p__27342){
var map__27343 = p__27342;
var map__27343__$1 = (((((!((map__27343 == null))))?(((((map__27343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27343):map__27343);
var on_write = cljs.core.get.call(null,map__27343__$1,new cljs.core.Keyword(null,"on-write","on-write",31519475));
>>>>>>> 8f3c68a (Initial Commit)
if((!((((node === document.activeElement)) && (reagent.impl.template.has_selection_api_QMARK_.call(null,node.type)) && (typeof rendered_value === 'string') && (typeof dom_value === 'string'))))){
(component.cljsDOMValue = rendered_value);

(node.value = rendered_value);

if(cljs.core.fn_QMARK_.call(null,on_write)){
return on_write.call(null,rendered_value);
} else {
return null;
}
} else {
var node_value = node.value;
if(cljs.core.not_EQ_.call(null,node_value,dom_value)){
return reagent.impl.batching.do_after_render.call(null,(function (){
return reagent.impl.template.input_component_set_value.call(null,component);
}));
} else {
var existing_offset_from_end = (cljs.core.count.call(null,node_value) - node.selectionStart);
var new_cursor_offset = (cljs.core.count.call(null,rendered_value) - existing_offset_from_end);
(component.cljsDOMValue = rendered_value);

(node.value = rendered_value);

if(cljs.core.fn_QMARK_.call(null,on_write)){
on_write.call(null,rendered_value);
} else {
}

(node.selectionStart = new_cursor_offset);

return (node.selectionEnd = new_cursor_offset);
}
}
});
reagent.impl.template.input_component_set_value = (function reagent$impl$template$input_component_set_value(this$){
if(cljs.core.truth_(this$.cljsInputLive)){
(this$.cljsInputDirty = false);

var rendered_value = this$.cljsRenderedValue;
var dom_value = this$.cljsDOMValue;
var node = reagent.impl.template.find_dom_node.call(null,this$);
if(cljs.core.not_EQ_.call(null,rendered_value,dom_value)){
return reagent.impl.template.input_node_set_value.call(null,node,rendered_value,dom_value,this$,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
return null;
}
});
reagent.impl.template.input_handle_change = (function reagent$impl$template$input_handle_change(this$,on_change,e){
(this$.cljsDOMValue = e.target.value);

if(cljs.core.truth_(this$.cljsInputDirty)){
} else {
(this$.cljsInputDirty = true);

reagent.impl.batching.do_after_render.call(null,(function (){
return reagent.impl.template.input_component_set_value.call(null,this$);
}));
}

return on_change.call(null,e);
});
reagent.impl.template.input_render_setup = (function reagent$impl$template$input_render_setup(this$,jsprops){
if(cljs.core.truth_((((!((jsprops == null))))?(function (){var and__4115__auto__ = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__4115__auto__)){
return jsprops.hasOwnProperty("value");
} else {
return and__4115__auto__;
}
})():false))){
if(cljs.core.truth_(reagent.impl.template.find_dom_node)){
} else {
throw (new Error(["Assert failed: ","reagent.dom needs to be loaded for controlled input to work","\n","find-dom-node"].join('')));
}

var v = jsprops.value;
var value = (((v == null))?"":v);
var on_change = jsprops.onChange;
if(cljs.core.truth_(this$.cljsInputLive)){
} else {
(this$.cljsInputLive = true);

(this$.cljsDOMValue = value);
}

(this$.cljsRenderedValue = value);

delete jsprops["value"];

(jsprops.defaultValue = value);

<<<<<<< HEAD
return (jsprops.onChange = (function (p1__26888_SHARP_){
return reagent.impl.template.input_handle_change.call(null,this$,on_change,p1__26888_SHARP_);
=======
return (jsprops.onChange = (function (p1__27345_SHARP_){
return reagent.impl.template.input_handle_change.call(null,this$,on_change,p1__27345_SHARP_);
>>>>>>> 8f3c68a (Initial Commit)
}));
} else {
return null;
}
});
reagent.impl.template.input_unmount = (function reagent$impl$template$input_unmount(this$){
return (this$.cljsInputLive = null);
});
reagent.impl.template.input_component_QMARK_ = (function reagent$impl$template$input_component_QMARK_(x){
<<<<<<< HEAD
var G__26889 = x;
switch (G__26889) {
=======
var G__27346 = x;
switch (G__27346) {
>>>>>>> 8f3c68a (Initial Commit)
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
reagent.impl.template.reagent_input_class = null;
reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),reagent.impl.template.input_component_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,component,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup.call(null,this$,jsprops);

return reagent.impl.template.make_element.call(null,argv,component,jsprops,first_child);
})], null);
reagent.impl.template.reagent_input = (function reagent$impl$template$reagent_input(){
if((reagent.impl.template.reagent_input_class == null)){
(reagent.impl.template.reagent_input_class = reagent.impl.component.create_class.call(null,reagent.impl.template.input_spec));
} else {
}

return reagent.impl.template.reagent_input_class;
});

/**
* @constructor
*/
reagent.impl.template.HiccupTag = (function (tag,id,className,custom){
this.tag = tag;
this.id = id;
this.className = className;
this.custom = custom;
});

(reagent.impl.template.HiccupTag.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"className","className",-342755530,null),new cljs.core.Symbol(null,"custom","custom",1980683475,null)], null);
}));

(reagent.impl.template.HiccupTag.cljs$lang$type = true);

(reagent.impl.template.HiccupTag.cljs$lang$ctorStr = "reagent.impl.template/HiccupTag");

(reagent.impl.template.HiccupTag.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"reagent.impl.template/HiccupTag");
}));

/**
 * Positional factory function for reagent.impl.template/HiccupTag.
 */
reagent.impl.template.__GT_HiccupTag = (function reagent$impl$template$__GT_HiccupTag(tag,id,className,custom){
return (new reagent.impl.template.HiccupTag(tag,id,className,custom));
});

reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
<<<<<<< HEAD
var vec__26891 = cljs.core.next.call(null,cljs.core.re_matches.call(null,reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));
var tag = cljs.core.nth.call(null,vec__26891,(0),null);
var id = cljs.core.nth.call(null,vec__26891,(1),null);
var className = cljs.core.nth.call(null,vec__26891,(2),null);
=======
var vec__27348 = cljs.core.next.call(null,cljs.core.re_matches.call(null,reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));
var tag = cljs.core.nth.call(null,vec__27348,(0),null);
var id = cljs.core.nth.call(null,vec__27348,(1),null);
var className = cljs.core.nth.call(null,vec__27348,(2),null);
>>>>>>> 8f3c68a (Initial Commit)
var className__$1 = (((className == null))?null:clojure.string.replace.call(null,className,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",reagent.impl.component.comp_name.call(null)].join(''),"\n","tag"].join('')));
}

return reagent.impl.template.__GT_HiccupTag.call(null,tag,id,className__$1,cljs.core.not_EQ_.call(null,(-1),tag.indexOf("-")));
});
reagent.impl.template.try_get_key = (function reagent$impl$template$try_get_key(x){
try{return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"key","key",-1516042587));
<<<<<<< HEAD
}catch (e26894){var e = e26894;
=======
}catch (e27351){var e = e27351;
>>>>>>> 8f3c68a (Initial Commit)
return null;
}});
reagent.impl.template.get_key = (function reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_.call(null,x)){
return reagent.impl.template.try_get_key.call(null,x);
} else {
return null;
}
});
reagent.impl.template.key_from_vec = (function reagent$impl$template$key_from_vec(v){
var temp__5722__auto__ = reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,v));
if((temp__5722__auto__ == null)){
return reagent.impl.template.get_key.call(null,cljs.core.nth.call(null,v,(1),null));
} else {
var k = temp__5722__auto__;
return k;
}
});
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v){
var c = reagent.impl.component.as_class.call(null,tag);
var jsprops = ({});
(jsprops.argv = v);

<<<<<<< HEAD
var temp__5724__auto___26895 = reagent.impl.template.key_from_vec.call(null,v);
if((temp__5724__auto___26895 == null)){
} else {
var key_26896 = temp__5724__auto___26895;
(jsprops.key = key_26896);
=======
var temp__5724__auto___27352 = reagent.impl.template.key_from_vec.call(null,v);
if((temp__5724__auto___27352 == null)){
} else {
var key_27353 = temp__5724__auto___27352;
(jsprops.key = key_27353);
>>>>>>> 8f3c68a (Initial Commit)
}

return reagent.impl.template.node$module$react.createElement(c,jsprops);
});
reagent.impl.template.fragment_element = (function reagent$impl$template$fragment_element(argv){
var props = cljs.core.nth.call(null,argv,(1),null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_.call(null,props)));
var jsprops = (function (){var or__4126__auto__ = reagent.impl.template.convert_prop_value.call(null,((hasprops)?props:null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ({});
}
})();
var first_child = ((1) + ((hasprops)?(1):(0)));
<<<<<<< HEAD
var temp__5724__auto___26897 = reagent.impl.template.key_from_vec.call(null,argv);
if((temp__5724__auto___26897 == null)){
} else {
var key_26898 = temp__5724__auto___26897;
(jsprops.key = key_26898);
=======
var temp__5724__auto___27354 = reagent.impl.template.key_from_vec.call(null,argv);
if((temp__5724__auto___27354 == null)){
} else {
var key_27355 = temp__5724__auto___27354;
(jsprops.key = key_27355);
>>>>>>> 8f3c68a (Initial Commit)
}

return reagent.impl.template.make_element.call(null,argv,reagent.impl.template.node$module$react.Fragment,jsprops,first_child);
});
reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(c){
return reagent.impl.template.__GT_NativeWrapper.call(null,c,null,null);
});
reagent.impl.template.tag_name_cache = ({});
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(x){
var temp__5722__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.tag_name_cache,x);
if((temp__5722__auto__ == null)){
var v = reagent.impl.template.parse_tag.call(null,x);
goog.object.set(reagent.impl.template.tag_name_cache,x,v);

return v;
} else {
var s = temp__5722__auto__;
return s;
}
});
reagent.impl.template.native_element = (function reagent$impl$template$native_element(parsed,argv,first){
var component = parsed.tag;
var props = cljs.core.nth.call(null,argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_.call(null,props)));
var jsprops = (function (){var or__4126__auto__ = reagent.impl.template.convert_props.call(null,((hasprops)?props:null),parsed);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ({});
}
})();
var first_child = (first + ((hasprops)?(1):(0)));
if(reagent.impl.template.input_component_QMARK_.call(null,component)){
return reagent.impl.template.as_element.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_input.call(null),argv,component,jsprops,first_child], null),cljs.core.meta.call(null,argv)));
} else {
<<<<<<< HEAD
var temp__5724__auto___26899 = reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,argv));
if((temp__5724__auto___26899 == null)){
} else {
var key_26900 = temp__5724__auto___26899;
(jsprops.key = key_26900);
=======
var temp__5724__auto___27356 = reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,argv));
if((temp__5724__auto___27356 == null)){
} else {
var key_27357 = temp__5724__auto___27356;
(jsprops.key = key_27357);
>>>>>>> 8f3c68a (Initial Commit)
}

return reagent.impl.template.make_element.call(null,argv,component,jsprops,first_child);
}
});
reagent.impl.template.str_coll = (function reagent$impl$template$str_coll(coll){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk.call(null,(function (x){
if(cljs.core.fn_QMARK_.call(null,x)){
var n = reagent.impl.util.fun_name.call(null,x);
<<<<<<< HEAD
var G__26902 = n;
if(cljs.core._EQ_.call(null,"",G__26902)){
return x;
} else {
if(cljs.core._EQ_.call(null,null,G__26902)){
=======
var G__27359 = n;
if(cljs.core._EQ_.call(null,"",G__27359)){
return x;
} else {
if(cljs.core._EQ_.call(null,null,G__27359)){
>>>>>>> 8f3c68a (Initial Commit)
return x;
} else {
return cljs.core.symbol.call(null,n);

}
}
} else {
return x;
}
}),coll));

});
reagent.impl.template.hiccup_err = (function reagent$impl$template$hiccup_err(var_args){
var args__4742__auto__ = [];
<<<<<<< HEAD
var len__4736__auto___26905 = arguments.length;
var i__4737__auto___26906 = (0);
while(true){
if((i__4737__auto___26906 < len__4736__auto___26905)){
args__4742__auto__.push((arguments[i__4737__auto___26906]));

var G__26907 = (i__4737__auto___26906 + (1));
i__4737__auto___26906 = G__26907;
=======
var len__4736__auto___27362 = arguments.length;
var i__4737__auto___27363 = (0);
while(true){
if((i__4737__auto___27363 < len__4736__auto___27362)){
args__4742__auto__.push((arguments[i__4737__auto___27363]));

var G__27364 = (i__4737__auto___27363 + (1));
i__4737__auto___27363 = G__27364;
>>>>>>> 8f3c68a (Initial Commit)
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,msg)),": ",reagent.impl.template.str_coll.call(null,v),"\n",reagent.impl.component.comp_name.call(null)].join('');
}));

(reagent.impl.template.hiccup_err.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
<<<<<<< HEAD
(reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq26903){
var G__26904 = cljs.core.first.call(null,seq26903);
var seq26903__$1 = cljs.core.next.call(null,seq26903);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26904,seq26903__$1);
=======
(reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq27360){
var G__27361 = cljs.core.first.call(null,seq27360);
var seq27360__$1 = cljs.core.next.call(null,seq27360);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27361,seq27360__$1);
>>>>>>> 8f3c68a (Initial Commit)
}));

reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v){
while(true){
if((cljs.core.count.call(null,v) > (0))){
} else {
throw (new Error(["Assert failed: ",reagent.impl.template.hiccup_err.call(null,v,"Hiccup form should not be empty"),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.call(null,v,(0),null);
if(reagent.impl.template.valid_tag_QMARK_.call(null,tag)){
} else {
throw (new Error(["Assert failed: ",reagent.impl.template.hiccup_err.call(null,v,"Invalid Hiccup form"),"\n","(valid-tag? tag)"].join('')));
}

if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"<>","<>",1280186386),tag)){
return reagent.impl.template.fragment_element.call(null,v);
} else {
if(reagent.impl.template.hiccup_tag_QMARK_.call(null,tag)){
var n = cljs.core.name.call(null,tag);
var pos = n.indexOf(">");
<<<<<<< HEAD
var G__26908 = pos;
switch (G__26908) {
=======
var G__27365 = pos;
switch (G__27365) {
>>>>>>> 8f3c68a (Initial Commit)
case (-1):
return reagent.impl.template.native_element.call(null,reagent.impl.template.cached_parse.call(null,n),v,(1));

break;
case (0):
var component = cljs.core.nth.call(null,v,(1),null);
if(cljs.core._EQ_.call(null,">",n)){
} else {
throw (new Error(["Assert failed: ",reagent.impl.template.hiccup_err.call(null,v,"Invalid Hiccup tag"),"\n","(= \">\" n)"].join('')));
}

return reagent.impl.template.native_element.call(null,reagent.impl.template.__GT_HiccupTag.call(null,component,null,null,null),v,(2));

break;
default:
<<<<<<< HEAD
var G__26910 = cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,n,(0),pos),cljs.core.assoc.call(null,cljs.core.with_meta.call(null,v,null),(0),cljs.core.subs.call(null,n,(pos + (1))))], null),cljs.core.meta.call(null,v));
v = G__26910;
=======
var G__27367 = cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,n,(0),pos),cljs.core.assoc.call(null,cljs.core.with_meta.call(null,v,null),(0),cljs.core.subs.call(null,n,(pos + (1))))], null),cljs.core.meta.call(null,v));
v = G__27367;
>>>>>>> 8f3c68a (Initial Commit)
continue;

}
} else {
if((tag instanceof reagent.impl.template.NativeWrapper)){
return reagent.impl.template.native_element.call(null,tag,v,(1));
} else {
return reagent.impl.template.reag_element.call(null,tag,v);

}
}
}
break;
}
});
reagent.impl.template.as_element = (function reagent$impl$template$as_element(x){
if(reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return reagent.impl.template.vec_to_elem.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return reagent.impl.template.expand_seq_check.call(null,x);

} else {
if(reagent.impl.util.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.call(null,x);
} else {
return x;

}
}
}
}
}
});
(reagent.impl.component.as_element = reagent.impl.template.as_element);
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s){
return cljs.core.into_array.call(null,cljs.core.map.call(null,reagent.impl.template.as_element,s));
});
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o){
return cljs.core.into_array.call(null,cljs.core.map.call(null,(function (val){
if(((cljs.core.vector_QMARK_.call(null,val)) && ((reagent.impl.template.key_from_vec.call(null,val) == null)))){
(o.no_key = true);
} else {
}

return reagent.impl.template.as_element.call(null,val);
}),s));
});
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x){
var ctx = ({});
<<<<<<< HEAD
var vec__26912 = reagent.ratom.check_derefs.call(null,(function (){
return reagent.impl.template.expand_seq_dev.call(null,x,ctx);
}));
var res = cljs.core.nth.call(null,vec__26912,(0),null);
var derefed = cljs.core.nth.call(null,vec__26912,(1),null);
=======
var vec__27369 = reagent.ratom.check_derefs.call(null,(function (){
return reagent.impl.template.expand_seq_dev.call(null,x,ctx);
}));
var res = cljs.core.nth.call(null,vec__27369,(0),null);
var derefed = cljs.core.nth.call(null,vec__27369,(1),null);
>>>>>>> 8f3c68a (Initial Commit)
if(cljs.core.truth_(derefed)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",reagent.impl.template.hiccup_err.call(null,x,"Reactive deref not supported in lazy seq, ","it should be wrapped in doall")].join(''));
} else {
}
} else {
}

if(cljs.core.truth_(ctx.no_key)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",reagent.impl.template.hiccup_err.call(null,x,"Every element in a seq should have a unique :key")].join(''));
} else {
}
} else {
}

return res;
});
reagent.impl.template.make_element = (function reagent$impl$template$make_element(argv,component,jsprops,first_child){
<<<<<<< HEAD
var G__26915 = (cljs.core.count.call(null,argv) - first_child);
switch (G__26915) {
=======
var G__27372 = (cljs.core.count.call(null,argv) - first_child);
switch (G__27372) {
>>>>>>> 8f3c68a (Initial Commit)
case (0):
return reagent.impl.template.node$module$react.createElement(component,jsprops);

break;
case (1):
return reagent.impl.template.node$module$react.createElement(component,jsprops,reagent.impl.template.as_element.call(null,cljs.core.nth.call(null,argv,first_child,null)));

break;
default:
return reagent.impl.template.node$module$react.createElement.apply(null,cljs.core.reduce_kv.call(null,(function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.template.as_element.call(null,v));
} else {
}

return a;
}),[component,jsprops],argv));

}
});

<<<<<<< HEAD
//# sourceMappingURL=template.js.map?rel=1602979376937
=======
//# sourceMappingURL=template.js.map?rel=1608004502621
>>>>>>> 8f3c68a (Initial Commit)
