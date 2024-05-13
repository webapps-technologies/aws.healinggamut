import{e as M,c as O,z as P,j as u,k as s,l as r,m as n,A as i,H as f,B as Q,y as l,q as k,M as z,u as C,F as J,I as K,E as g,x as c,t as y,J as A}from"./@vue-bQO0P59g.js";import{C as G,E as W,S as X}from"./@mdi-CZk6uuAL.js";import{u as Y}from"./vue-router-D5J0r3Gc.js";import{u as Z}from"./vuex-DHdsu8jA.js";const ee={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},te=l("option",{value:!0},"Active",-1),oe=l("option",{value:!1},"Inactive",-1),le=[te,oe],ne={class:"grid grid-cols-1 lg:grid-cols-1 gap-6 new-table"},ae={class:"mt-3 table-sec"},se={key:0},ie=l("thead",{class:"bg-white dark:bg-gray-900/80 dark:backdrop-blur-md"},[l("tr",null,[l("th",null,"Sl.No."),l("th",null,"Medicine Name"),l("th",null,"Composition"),l("th",null,"Created"),l("th",null,"Status"),l("th",{class:"text-center"},"Actions")])],-1),de={"data-label":"Sr.No"},ue={"data-label":"Name"},re={"data-label":"Composition",class:"break-all"},ce={"data-label":"Created"},me={key:0,"data-label":"Status",class:"text-green-500 font-bold"},fe={key:1,"data-label":"Status",class:"text-rose-500 font-bold"},pe={class:"actions-cell"},_e={key:0,class:"flex justify-center items-center"},he=l("div",{class:"spinner-dual-ring"},[l("div",{class:"ldio"},[l("div"),l("div",null,[l("div")])])],-1),be=[he],ve={key:0},ge={class:"flex justify-center"},ye={class:"form-check form-check-inline"},Me=l("label",{class:"form-check-label inline-block text-gray-800 dark:text-slate-300 mr-2",for:"inlineRadio10"},"Active",-1),ke={class:"form-check form-check-inline"},Ce=l("label",{class:"form-check-label inline-block text-gray-800 dark:text-slate-300 mr-2",for:"inlineRadio20"},"Inactive",-1),je={__name:"Medicines",setup(Ve){const p=Z();Y();const d=M(()=>p.state.Medicine),e=O({limit:10,offset:0,search:"",status:!0,statusChange:!0,editMode:!1,cModal:!1,id:null,name:null,desc:null,statusModal:!1});P(()=>{m(e.limit,e.offset,e.search,e.status)});function m(a,t,_,b){p.dispatch("Medicine/getMedicine",{limit:a,offset:t,search:_,status:b})}function E(){e.offset=e.offset+e.limit,m(e.limit,e.offset,e.search,e.status)}function I(a){a.length>2?m(e.limit,0,a,e.status):m(e.limit,0,e.search,e.status)}function R(){m(e.limit,0,e.search,e.statusChange)}function $(a){if(a){const t=new Date(a).toString().split(" ");return t[2]+" "+t[1]+", "+t[3]}return"-"}function B(){e.cModal=!0,e.editMode=!1,e.id=null,e.name=null,e.desc=null}function D(a,t,_){e.cModal=!0,e.editMode=!0,e.id=a,e.name=t,e.desc=_}async function L(){if(V.value)return null;e.editMode?await p.dispatch("Medicine/update",{id:e.id,name:e.name,desc:e.desc}):await p.dispatch("Medicine/save",{name:e.name,desc:e.desc}),m(e.limit,e.offset,e.search,e.status),e.cModal=!1}function q(a,t){e.statusModal=!0,e.id=a,e.status=t}function T(){e.id&&p.dispatch("Medicine/setMedicineStatus",{id:e.id,status:e.status}),e.statusModal=!1}const V=M(()=>e.name?null:"Required.");return M(()=>e.desc?null:"Required."),(a,t)=>{const _=u("hero-bar"),b=u("control"),x=u("field"),S=u("main-section"),h=u("base-button"),v=u("base-buttons"),w=u("card-component"),F=u("QuillEditor"),N=u("modal-box");return s(),r("section",null,[n(_,null,{default:i(()=>[Q("Medicines")]),_:1}),n(S,null,{default:i(()=>[l("div",ee,[n(b,{modelValue:e.search,"onUpdate:modelValue":t[0]||(t[0]=o=>e.search=o),onKeyup:t[1]||(t[1]=o=>I(o.target.value)),type:"text",placeholder:"Search by : Medicine name"},null,8,["modelValue"]),n(x,null,{default:i(()=>[k(l("select",{"onUpdate:modelValue":t[2]||(t[2]=o=>e.statusChange=o),onChange:t[3]||(t[3]=o=>R()),class:"form-select appearance-none block w-full px-3 py-2 h-10 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-dark-700 focus:bg-white focus:border-blue-600 focus:outline-none"},le,544),[[z,e.statusChange]])]),_:1})])]),_:1}),n(S,null,{default:i(()=>[l("div",ne,[n(w,{class:"mb-6",title:"List (Total: "+d.value.total+")",onHeaderIconClicked:t[4]||(t[4]=o=>B()),headerIcon:C(G),iconText:"Add Medicines","has-table":""},{default:i(()=>[l("div",ae,[d.value.data.length>0?(s(),r("table",se,[ie,l("tbody",null,[(s(!0),r(J,null,K(d.value.data,(o,j)=>{var U;return s(),r("tr",{key:j},[l("td",de,g(j+1),1),l("td",ue,g(o.name),1),l("td",re,g((U=o==null?void 0:o.desc)==null?void 0:U.replace(/<\/?[^>]+(>|$)/g,`
`)),1),l("td",ce,g($(o.createdAt)),1),o.status==!0?(s(),r("td",me," Active ")):(s(),r("td",fe," Inactive ")),l("td",pe,[n(v,{type:"justify-center lg:justify-center","no-wrap":""},{default:i(()=>[n(h,{type:"button",title:"Change Status",color:"info",icon:C(W),small:"",rounded:"",onClick:f(H=>q(o.id,o.status),["prevent"])},null,8,["icon","onClick"]),n(h,{color:"info",icon:C(X),title:"Edit Medicines",small:"",rounded:"",onClick:f(H=>D(o.id,o.name,o.desc),["prevent"])},null,8,["icon","onClick"])]),_:2},1024)])])}),128))])])):c("",!0)]),d.value.data.length<=0?(s(),y(w,{key:0,empty:""})):c("",!0)]),_:1},8,["title","headerIcon"])]),d.value.dataLoader?(s(),r("div",_e,be)):c("",!0),d.value.loadMore&&!d.value.dataLoader?(s(),y(v,{key:1,type:"justify-center lg:justify-center"},{default:i(()=>[n(h,{type:"button",color:"themeColor",label:"Load More",onClick:t[5]||(t[5]=f(o=>E(),["prevent"]))})]),_:1})):c("",!0)]),_:1}),n(N,{modelValue:e.cModal,"onUpdate:modelValue":t[8]||(t[8]=o=>e.cModal=o),title:e.editMode?"Update Medicine":"Add Medicine",form:"",onSubmit:t[9]||(t[9]=f(o=>a.onSubmit(),["prevent"]))},{default:i(()=>[l("section",null,[n(x,{help:V.value},{default:i(()=>[n(b,{modelValue:e.name,"onUpdate:modelValue":t[6]||(t[6]=o=>e.name=o),type:"text",name:"name",autocomplete:"Name",placeholder:"Medicine Name"},null,8,["modelValue"])]),_:1},8,["help"]),n(F,{content:e.desc,"onUpdate:content":t[7]||(t[7]=o=>e.desc=o),ref:"targetElement","content-type":"html",theme:"snow",toolbar:"full"},null,8,["content"]),n(v,{type:"justify-center lg:justify-center pt-5"},{default:i(()=>[d.value.loaderNew?c("",!0):(s(),y(h,{key:0,type:"button",color:"themeColor",small:"",label:"Submit",onClick:f(L,["prevent"])}))]),_:1})])]),_:1},8,["modelValue","title"]),n(N,{modelValue:e.statusModal,"onUpdate:modelValue":t[12]||(t[12]=o=>e.statusModal=o),title:"Medicine Status"},{default:i(()=>[e.id?(s(),r("section",ve,[l("div",ge,[l("div",ye,[k(l("input",{class:"form-check-input mr-2",type:"radio",name:"inlineRadioOptions","onUpdate:modelValue":t[10]||(t[10]=o=>e.status=o),value:!0},null,512),[[A,e.status]]),Me]),l("div",ke,[k(l("input",{class:"form-check-input mr-2",type:"radio",name:"inlineRadioOptions","onUpdate:modelValue":t[11]||(t[11]=o=>e.status=o),value:!1},null,512),[[A,e.status]]),Ce])]),n(v,{type:"justify-center lg:justify-center pt-5"},{default:i(()=>[d.value.loaderNew?c("",!0):(s(),y(h,{key:0,type:"button",color:"info",small:"",label:"Change Status",onClick:f(T,["prevent"])}))]),_:1})])):c("",!0)]),_:1},8,["modelValue"])])}}};export{je as default};
