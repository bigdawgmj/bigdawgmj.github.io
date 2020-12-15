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
   [:h2.employer "Pacific Northwest National Laboratory - Data Scientist"]
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
   [:h2.employer "Davis County - Software Engineer IV"]
   [:h3.about-header "Technology"]
   [:ul.experience
    [:li "Dotnet core, .NET MVC, C#, Angular 5+, Python"]
    [:li "ArcMap, ESRI Javascript API"]]
   [:h3.about-header "Experience"]
   [:ul.experience
    [:li "Develop dotnet core web applications using TDD"]
    [:li "Create client applications using Angular 5+, and ESRI Javascript API"]
    [:li "Architect new projects and design the backend and front-end interactions"]
    [:li "Mentor junior developers and teach Agile and TDD principles to development team"]]
   [:h2.employer "3M - Senior Software Engineer"]
   [:h3.about-header "Technology"]
   [:ul.experience
    [:li "C++"]]
   [:h3.about-header "Experience"]
   [:ul.experience
    [:li "Fix bugs in one of the highest selling products"]
    [:li "Develop product using c++"]
    [:li "Create a diversity of skills"]]
   [:h2.employer "Intermountain Healthcare - Software Engineer"]
   [:h3.about-header "Technology"]
   [:ul.experience
    [:li "Java, Spring boot, Angular.js, D3.js, Apache SOLR, Apache Zookeeper, R, Spark, SQL"]]
   [:h3.about-header "Experience"]
   [:ul.experience
    [:li "Develop a physician facing dashboard returning complicated statistics in under 1 second"]
    [:li "Lead the technical team in API and Angular.js client development"]
    [:li "Update the Doctor Preference Card (DPC) Application that lead to millions in savings within Intermountain Healthcare"]]
   [:h2.employer "Intermountain Healthcare - Senior Outcomes Analyst"]
   [:h3.about-header "Technology"]
   [:ul.experience
    [:li "SQL, R, Java, Excel"]]
   [:h3.about-header "Experience"]
   [:ul.experience
    [:li "Develop complex queries for various outcome improvement projects"]
    [:li "Analyze Geriatric hip fracture, spine, tonsilectomy & adnoidectomy and blood transfusion cohorts"]
    [:li "Perform multiple statistical analyses including linear and logistic regression, ANOVA, MANOVA, summary statistics"]
    [:li "Present statistical outcomes to physician groups including defense of statistical methods"]]
   [:h2.employer "Herriman City - City Engineer"]
   [:h3.about-header "Technology"]
   [:ul.experience
    [:li "ArcMAP, AutoCAD Civil 3D, SWMM, WaterCAD, HEC-RAS, ESRI Javascript API, python"]]
   [:h3.about-header "Experience"]
   [:ul.experience
    [:li "Manage engineering and infrastructure inspection departments"]
    [:li "Present at City Council and City Planning Meetings"]
    [:li "Meet with residents regarding traffic, water, and stormwater concerns"]
    [:li "Resolve conflicts among staff, residents and developers"]
    [:li "Ensure City engineering codes were up to date and being met in new developments"]
    [:li "Model the water infrasturture within the City"]
    [:li "Design round about conceptual drawing for an intersection"]
    [:li "Manage and design the construction of a stormwater connection through the busiest intersection (13400 S 5600 W)"]
    [:li "Develop a plan set for a water line build along 5600 West and managed the construction"]
    [:li "Create multiple stormwater models in SWMM to ensure proper drainage"]
    [:li "Work with consultants on FEMA Flood Plain maps, water analyses, and development of Water, Stormwater, and Traffic Master Plans"]
    [:li "Direct the development of capital improvement plans"]
    [:li "Coordinate with developers on development plans and ensure city standards were being met"]]
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
