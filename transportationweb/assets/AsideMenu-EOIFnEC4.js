import{e as r,j as v,q as y,v as x,k as e,l as t,y as s,m as n,C as w,u as A,x as c,F as d,G as C,I as S,t as F,J as M}from"./@vue-_x7nCA0A.js";import{u as L}from"./vuex-TZZnsCVb.js";import{l as B}from"./@mdi-D9eD29fv.js";import N from"./NavBarItem-BOxoISEY.js";import $ from"./Icon-D-8XWZqN.js";const z="/assets/logo-CR73u6s9.png",D={class:"flex flex-row w-full bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-amber-200 via-cyan-600 to-sky-900 dark:bg-slate-900/[0.7] backdrop-blur-sm text-white flex-1 h-14 items-center top-titles"},E={class:"flex items-center px-3"},I=s("div",{class:"w-[4rem] h-[3rem] mr-2"},[s("img",{class:"w-full h-full",src:z,alt:""})],-1),V={key:0,class:"font-black"},H={key:1,class:"font-black"},J={__name:"AsideMenu",props:{menu:{type:Array,default:()=>[]}},setup(m){const a=L(),u=r(()=>a.state.isFullScreen),g=r(()=>a.state.isAsideMobileExpanded),f=r(()=>a.state.isAsideLgActive),p=()=>{a.dispatch("asideLgToggle",!1)},_=(b,k)=>{};function l(){return localStorage.getItem("loginRole")}return(b,k)=>{const h=v("aside-menu-list");return y((e(),t("aside",{class:M(["w-60 fixed top-0 z-40 h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-amber-200 via-cyan-600 to-sky-900 dark:from-blue-800/[0.3] dark:to-cyan-400/[0.3] transition-position lg:left-0 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-600 scrollbar-track-gray-900 dark:border-r dark:border-gray-800 dark:scrollbar-track-gray-800 dark:bg-gray-900 overflow-auto side-nav-sec",[g.value?"left-0":"-left-60",f.value?"block":"lg:hidden xl:block"]])},[s("div",D,[n(N,{type:"hidden lg:flex xl:hidden","active-color":"text-white",active:"",onClick:p},{default:w(()=>[n($,{path:A(B),class:"cursor-pointer",size:"24"},null,8,["path"])]),_:1}),s("div",E,[I,l()=="STAFF"?(e(),t("b",V,"Healing Gamut ")):c("",!0),l()=="ADMIN"?(e(),t("b",H,"Healing Gamut ")):c("",!0)])]),s("div",null,[(e(!0),t(d,null,C(m.menu,(o,i)=>(e(),t(d,null,[typeof o=="string"?(e(),t("p",{key:`a-${i}`,class:"p-3 text-xs font-semibold uppercase text-white/[0.7] tracking-widest"},S(o),1)):(e(),F(h,{key:`b-${i}`,menu:o,onMenuClick:_},null,8,["menu"]))],64))),256))])],2)),[[x,!u.value]])}}};export{J as default};
