(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{e6bf:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-select",{staticClass:"q-ma-sm",staticStyle:{"min-width":"150px"},attrs:{options:e.iconSetOptions,label:"Icon set",dense:"",borderless:"","emit-value":"","map-options":"","options-dense":""},model:{value:e.iconSet,callback:function(t){e.iconSet=t},expression:"iconSet"}}),a("q-media-player",{attrs:{type:"video",sources:e.sources,tracks:e.tracks,"mobile-mode":""}})],1)},s=[],o={data(){return{sources:[{src:"http://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/tears_of_steel_720p.mov",type:"video/mp4"}],tracks:[{src:"media/TearsOfSteel/TOS-en.vtt",kind:"subtitles",srclang:"en",label:"English"},{src:"media/TearsOfSteel/TOS-de.vtt",kind:"subtitles",srclang:"de",label:"German"},{src:"media/TearsOfSteel/TOS-es.vtt",kind:"subtitles",srclang:"es",label:"Spanish"},{src:"media/TearsOfSteel/TOS-fr-Goofy.vtt",kind:"subtitles",srclang:"fr",label:"French"},{src:"media/TearsOfSteel/TOS-it.vtt",kind:"subtitles",srclang:"it",label:"Italian"},{src:"media/TearsOfSteel/TOS-nl.vtt",kind:"subtitles",srclang:"nl",label:"Dutch"}],iconSet:this.$q.iconSet.name,iconSetOptions:[{label:"Eva Icons",value:"eva-icons"},{label:"Fontawesome",value:"fontawesome-v5"},{label:"Ion Icons",value:"ionicons-v4"},{label:"Material Icons",value:"material-icons"},{label:"MDI",value:"mdi-v4"},{label:"Themify",value:"themify"},{label:"Line Awesome",value:"line-awesome"}]}},watch:{iconSet(e){switch(e){case"eva-icons":this.changeIconSetToEvaIcons();break;case"fontawesome-v5":this.changeIconSetToFontAwesome();break;case"ionicons-v4":this.changeIconSetToIonIcons();break;case"material-icons":this.changeIconSetToMaterialIcons();break;case"mdi-v4":this.changeIconSetToMDI();break;case"themify":this.changeIconSetToThemify();break;case"line-awesome":this.changeIconSetToLineAwesome();break}}},methods:{changeIconSetToEvaIcons(){this.$q.iconSet=a("424a").default},changeIconSetToFontAwesome(){this.$q.iconSet=a("b3f7").default},changeIconSetToIonIcons(){this.$q.iconSet=a("8686").default},changeIconSetToMaterialIcons(){this.$q.iconSet=a("42d2").default},changeIconSetToMDI(){this.$q.iconSet=a("5c6e").default},changeIconSetToThemify(){this.$q.iconSet=a("db37").default},changeIconSetToLineAwesome(){this.$q.iconSet=a("2ec3").default}}},c=o,i=a("2877"),l=a("ddd8"),r=a("eebe"),h=a.n(r),d=Object(i["a"])(c,n,s,!1,null,null,null);t["default"]=d.exports;h()(d,"components",{QSelect:l["a"]})}}]);