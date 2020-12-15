(ns myblog.core
    (:require
              [reagent.core :as r :refer [atom]]
              [secretary.core :as secretary :refer-macros [defroute]]
              [reitit.frontend :as rf]
              [reitit.frontend.easy :as rfe]
              [reitit.coercion.spec :as rss]
              [fipp.edn :as fedn]
              [reagent.dom :as rd]))
    ; (:import [goog History]
    ;          [goog.events goog.history Html5History EventType]))

(enable-console-print!)

(println "This text is printed from src/myblog/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom
                     {:text "mark.jensen1@gmail.com"
                      :title "Mark Jensen P.E."
                      :tweet "Tweet Me"
                      :contact "Contact Me"}))
(defn home-page []
  [:div.container
   [:div.header
    [:h1.main (:title @app-state)]
    [:h3.caption (:text @app-state)]]
   [:div.content
    [:div.img-main
     [:img {:src "img/IMG_1253.jpg"}]]
    [:div.break]
    [:div.blog
     [:h3.my-title "Civil / Data Engineer"]
     [:p "Whether designing pipelines for water or data, I enjoy implementing inovative solutions."]]]])
    ; [:div
    ;  [:button.btn-main
    ;  {:on-click (fn [e] (js/console.log "HelpMePressed!"))}
    ;  (:contact @app-state)]
    ; [:button.btn-main
    ;  {:on-click (fn [e] (js/console.log "HelpMePressed!"))}
    ;     (:tweet @app-state)]]]])

(defn about-page []
  [:div.container
   [:h1.about-title "Experience"]
   [:h2.employer "Pacific Northwest National Laboratory"]
   [:h3.about-header "Technology"]
   [:ul.experience
    [:li "Clojure, C#, Python, Java, C++, CUDA, Scala, Spark, Databricks"]
    [:li "ArcMap, QGIS"]
    [:li "Docker, Kubernetes"]
    [:li "Azure Functions, Logic Apps, Batch, AD, Elastic Container Registry, VM Setup"]
    [:li "Hurricane Event Two-Dimensional Floodplain Modeling"]]
   [:h3.about-header "Experience"]
   [:ul.experience
    [:li "Architect and develop applications using Microsoft Azure Cloud"]
    [:li "Develop geospatial data pipelines including creating vector/raster tiles"]
    [:li "Setup and configure Geoserver for OGC Standard Services"]
    [:li "Create a React.js client utilizing material-ui, mapbox-gl, kepler.gl and deck.gl"]
    [:li "Analyze Water System Models using a pressure dependent solver for resilency studies, writing reports to summarize results"]
    [:li "Model Hurricane Events using Two-Dimensional Floodplain Modeling Software"]]
   [:p.experience "About page"]])

(defn contact-page []
  [:div
   [:p "Contact page"]])

(defn item-page [match]
  (let [{:keys [path query]} (:parameters match)
        {:keys [id]} path]
    [:div
     [:h2 "Selected Item " id]
     (if (:foo query)
       [:p "Optional foo query param: " (:foo query)])]))

(defonce match (r/atom nil))


(defn current-page []
  [:div.home
   [:ul.navigation
    [:li [:a {:href (rfe/href ::homepage)} "Home"]]
    [:li [:a {:href (rfe/href ::about)} "About"]]
    [:li [:a {:href (rfe/href ::contact)} "Contact"]]]
    (if @match
      (let [view (:view (:data @match))]
        [view @match]))
    ])


(def routes
  [["/"
    {:name ::homepage
     :view home-page}]
   ["/about"
    {:name ::about
     :view about-page}]
   ["/contact"
    {:name ::contact
     :view contact-page}]])

(defn init! []
  (rfe/start!
    (rf/router routes {:data {:coercion rss/coercion}})
    (fn [m] (reset! match m))
    {:use-fragment true})
  (rd/render [current-page]
             (. js/document (getElementById "app"))))

; (rd/render [home-page]
;            (. js/document (getElementById "app"))))

(init!)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  (swap! app-state update-in [:__figwheel_counter] inc)
)
