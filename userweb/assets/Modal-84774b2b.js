import{o as l,b as d,h as r,W as c,d as t,B as o,X as n,i}from"./index-477b0694.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";const h={name:"modal",props:{show:Boolean,showHeader:{type:Boolean,default:!0},align:{type:Boolean,default:!1},showFooter:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},type:{type:String,default:"",validator(a){return["","lg"].indexOf(a)!==-1}},modalClasses:[Object,String],headerClasses:[Object,String],bodyClasses:[Object,String],footerClasses:[Object,String],animationDuration:{type:Number,default:500}},methods:{closeModal(){this.$emit("update:show",!1),this.$emit("close")}},watch:{show(a){const s=document.body.classList;a?s.add("modal-open"):s.remove("modal-open")}}},u=["duration"],f=["aria-hidden"],_={class:"modal-content"};function w(a,s,e,y,g,b){return l(),d("section",{duration:e.animationDuration},[r(t("div",{class:o(["modal fade",[{"show d-block":e.show},{"d-none":!e.show},{"align-center":e.align}]]),tabindex:"-1",role:"dialog","aria-hidden":!e.show},[t("div",{class:o(["modal-dialog",[{"modal-lg":e.type==="lg"},e.modalClasses]])},[t("div",_,[e.showHeader?(l(),d("div",{key:0,class:o(["modal-header",e.headerClasses])},[n(a.$slots,"header")],2)):i("",!0),t("div",{class:o(["modal-body",e.bodyClasses])},[n(a.$slots,"default")],2),e.showFooter&&a.$slots.footer?(l(),d("div",{key:1,class:o(["modal-footer",e.footerClasses])},[n(a.$slots,"footer")],2)):i("",!0)])],2)],10,f),[[c,e.show]])],8,u)}const B=m(h,[["render",w]]);export{B as default};
