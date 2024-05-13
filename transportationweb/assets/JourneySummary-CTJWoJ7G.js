import{e as V,c as $,B as q,j as p,k as n,l as c,m as o,C as d,D as C,y as t,E as b,F as z,G as K,x as u,t as k,q as P,H as A,I as m,u as Q}from"./@vue-_x7nCA0A.js";import{e as W}from"./@mdi-D9eD29fv.js";import{h as X}from"./moment-Cl4UOzQZ.js";import{u as Z,b as ee}from"./vue-router-Dl416FTG.js";import{u as te}from"./vuex-TZZnsCVb.js";const ae={class:"grid grid-cols-1 lg:grid-cols-3 gap-6"},le={class:"grid grid-cols-1 lg:grid-cols-1 gap-6 new-table"},oe={class:"table-sec"},se={key:0},ne=t("caption",null,null,-1),ie=t("thead",{class:"bg-white dark:bg-gray-900/80 dark:backdrop-blur-md"},[t("tr",null,[t("th",null,"Sl.No."),t("th",null,"Name"),t("th",null,"Email"),t("th",null,"Phone"),t("th",null,"Hospital"),t("th",null,"Hotel"),t("th",null,"Booking"),t("th",null,"Created At"),t("th",null,"Status"),t("th",{class:"lg:flex lg:justify-center"},"Action")])],-1),de={"data-label":"Sr.No"},ue={"data-label":"Name"},re={"data-label":"email"},ce={"data-label":"phone"},me={"data-label":"Hospital"},pe={"data-label":"Hotel"},fe={"data-label":"Meal Date"},_e={"data-label":"phone"},he={"data-label":"Status"},ye={key:0},be={key:1},ge={key:2},ve={key:0,class:"flex justify-center items-center"},ke=t("div",{class:"spinner-dual-ring"},[t("div",{class:"ldio"},[t("div"),t("div",null,[t("div")])])],-1),Ee=[ke],Ve={key:0},Ce={class:"flex justify-center"},De={class:"form-check form-check-inline"},Me={class:"form-check-label inline-block text-gray-800 dark:text-slate-300 mr-2 cursor-pointer"},Ne={class:"form-check form-check-inline"},Se={class:"form-check-label inline-block text-gray-800 dark:text-slate-300 mr-2 cursor-pointer"},Te={class:"grid grid-cols-1 lg:grid-cols-1 gap-2"},Ue={__name:"JourneySummary",setup(xe){const U=[{id:10,label:"10"},{id:50,label:"50"},{id:250,label:"250"},{id:1e3,label:"1000"},{id:2500,label:"2500"},{id:5e3,label:"5000"},{id:1e4,label:"10000"}],_=te(),R=Z();ee();const r=V(()=>_.state.TourismSummary),D=[{id:"PENDING",name:"PENDING"},{id:"REJECTED",name:"REJECTED"},{id:"COMPLETED",name:"COMPLETED"}],e=$({limit:U[0],offset:0,search:"",status:D[0],statusChange:null,id:null,cityId:null,cityName:null,submit:!1,statusModal:!1,addModal:!1,editMode:!1,name:null,pincode:null});q(()=>{h()});const B=()=>{var i;h(e.limit.id,e.offset,e.search,(i=e.status)==null?void 0:i.id)};function h(){_.dispatch("TourismSummary/getTourismSummary",{limit:e.limit.id,offset:e.offset,keyword:e.search,status:e.status.id})}function O(){if(M.value||N.value){e.submit=!0;return}e.submit=!1,e.editMode?(_.dispatch("Location/updateArea",{id:e.id,name:e.name,pincode:e.pincode,cityId:e.cityId}),e.addModal=!1):(_.dispatch("Location/saveArea",{name:e.name,pincode:e.pincode,cityId:e.cityId}),e.addModal=!1)}function J(){e.id&&_.dispatch("Location/setAreaStatus",{id:e.id,status:e.statusChange}),e.statusModal=!1}function G(){e.offset=e.offset+e.limit.id,h()}function H(i){var a,f;e.offset=0,i.length>2?h(e.limit.id,e.offset,i,(a=e.status)==null?void 0:a.id):i.length<=0&&h(e.limit.id,e.offset,e.search,(f=e.status)==null?void 0:f.id)}function Y(i,a,f){R.push({path:i,query:{id:a,name:f}})}const M=V(()=>{if(!e.name)return"Enter Area Name!"}),N=V(()=>{if(!e.pincode)return"Enter Pincode!"});function E(i){if(i)return X(i).format("MMM Do YYYY")}return(i,a)=>{const f=p("hero-bar"),g=p("control"),y=p("base-button"),v=p("base-buttons"),S=p("new-card"),F=p("main-section"),T=p("modal-box"),x=p("field");return n(),c("section",null,[o(f,null,{default:d(()=>[C("Journey Summary ")]),_:1}),o(F,null,{default:d(()=>[t("div",ae,[o(g,{modelValue:e.search,"onUpdate:modelValue":a[0]||(a[0]=l=>e.search=l),onKeyup:a[1]||(a[1]=l=>H(l.target.value)),type:"text",placeholder:"Search by : Username or Name"},null,8,["modelValue"]),o(g,{modelValue:e.status,"onUpdate:modelValue":a[2]||(a[2]=l=>e.status=l),options:D},null,8,["modelValue"]),o(y,{type:"button",color:"themeColor",small:"",label:"SUBMIT",onClick:a[3]||(a[3]=b(l=>B(),["prevent"]))})]),t("div",le,[o(S,{class:"mb-6",title:"List (Total: "+r.value.totalSummary+")"},{default:d(()=>{var l,j;return[t("div",oe,[((l=r.value.summaryData)==null?void 0:l.length)>0?(n(),c("table",se,[ne,ie,t("tbody",null,[(n(!0),c(z,null,K(r.value.summaryData,(s,I)=>{var w,L;return n(),c("tr",{key:I},[t("td",de,m(I+1),1),t("td",ue,m(s.patientName),1),t("td",re,m(s.email),1),t("td",ce,m(s.contactNumber),1),t("td",me,m((w=s.organization)==null?void 0:w.name),1),t("td",pe,m((L=s.hotel)==null?void 0:L.name),1),t("td",fe,m(E(s.mealFrom))+" - "+m(E(s.mealTo)),1),t("td",_e,m(E(s.createdAt)),1),t("td",he,[s.status==="PENDING"?(n(),c("span",ye,"PENDING")):u("",!0),s.status==="REJECTED"?(n(),c("span",be,"REJECTED")):u("",!0),s.status==="COMPLETED"?(n(),c("span",ge,"COMPLETED")):u("",!0)]),t("td",null,[o(v,{type:"justify-start lg:justify-center","no-wrap":""},{default:d(()=>[o(y,{type:"button",title:"View Details",color:"info",icon:Q(W),small:"",rounded:"",onClick:b(je=>Y("/journey-summary/details",s.id,s.name),["prevent"])},null,8,["icon","onClick"])]),_:2},1024)])])}),128))])])):u("",!0)]),((j=r.value.summaryData)==null?void 0:j.length)<=0?(n(),k(S,{key:0,empty:""})):u("",!0)]}),_:1},8,["title"])]),r.value.dataLoader?(n(),c("div",ve,Ee)):u("",!0),r.value.loadMore&&!r.value.dataLoader?(n(),k(v,{key:1,type:"justify-center lg:justify-center"},{default:d(()=>[o(y,{type:"button",color:"themeColor",label:"Load More",onClick:a[4]||(a[4]=b(l=>G(),["prevent"]))})]),_:1})):u("",!0)]),_:1}),o(T,{modelValue:e.statusModal,"onUpdate:modelValue":a[7]||(a[7]=l=>e.statusModal=l),title:"State status"},{default:d(()=>[e.id?(n(),c("section",Ve,[t("div",Ce,[t("div",De,[t("label",Me,[P(t("input",{class:"form-check-input ml-2",type:"radio",name:"inlineRadioOptions","onUpdate:modelValue":a[5]||(a[5]=l=>e.statusChange=l),value:!0},null,512),[[A,e.statusChange]]),C(" ACTIVE ")])]),t("div",Ne,[t("label",Se,[P(t("input",{class:"form-check-input ml-2",type:"radio",name:"inlineRadioOptions","onUpdate:modelValue":a[6]||(a[6]=l=>e.statusChange=l),value:!1},null,512),[[A,e.statusChange]]),C(" DEACTIVE")])])]),o(v,{type:"justify-center lg:justify-center pt-5"},{default:d(()=>[r.value.loaderNew?u("",!0):(n(),k(y,{key:0,type:"button",color:"info",small:"",label:"Change Status",onClick:b(J,["prevent"])}))]),_:1})])):u("",!0)]),_:1},8,["modelValue"]),o(T,{modelValue:e.addModal,"onUpdate:modelValue":a[10]||(a[10]=l=>e.addModal=l),title:"State"},{default:d(()=>[t("div",Te,[o(x,{label:"Name *",help:e.submit?M.value:""},{default:d(()=>[o(g,{modelValue:e.name,"onUpdate:modelValue":a[8]||(a[8]=l=>e.name=l),type:"text",name:"name",autocomplete:"name",placeholder:"Enter State Name"},null,8,["modelValue"])]),_:1},8,["help"]),o(x,{label:"Pincode *",help:e.submit?N.value:""},{default:d(()=>[o(g,{modelValue:e.pincode,"onUpdate:modelValue":a[9]||(a[9]=l=>e.pincode=l),type:"text",name:"pincode",autocomplete:"pincode",placeholder:"Enter Pincode"},null,8,["modelValue"])]),_:1},8,["help"])]),o(v,{type:"justify-center lg:justify-center pt-5"},{default:d(()=>[r.value.loaderNew?u("",!0):(n(),k(y,{key:0,type:"button",color:"info",small:"",label:"Submit",onClick:b(O,["prevent"])}))]),_:1})]),_:1},8,["modelValue"])])}}};export{Ue as default};
