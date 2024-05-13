import{u as N,q as j,m as F,c as S,r as E,n as R,s as q,a as l,o as a,b as n,d as e,e as u,h as I,v as K,F as U,k as $,g as z,i as m,p as D,t as c,j as r,w as G}from"./index-477b0694.js";const H="/assets/ambulance-b15b1025.jpg",J={class:"ambulance-homepage doctor-list-page"},O={class:"container"},P={class:"main-card"},Q={class:"card-header"},W={class:"left"},X=e("h4",null,"Ambulance",-1),Y={class:"right"},Z={class:"card-body"},ee={class:"dr-cards rest-page--card"},te={key:0,class:"img"},se=["src"],ae={key:1,class:"img"},oe=e("img",{src:H,alt:""},null,-1),ne=[oe],ce={class:"info"},ie={class:"speciality"},le={class:"name"},re={class:"fee"},de={class:"experience"},_e=e("div",{class:"experience availability"},[r(" Availability : "),e("strong",null,"24/7")],-1),ue={class:"rating"},me={class:"schedule-btn"},pe={key:0,class:"load-btn mt-16 flex justify-center"},ye={__name:"Ambulance",setup(he){const p=N();j(),F();const i=S(()=>p.state.Ambulance),t=E({limit:10,offset:0,keyword:"",status:"ACTIVE",area:null,nurse:null,clinic:null,typingTimer:null,typingDelay:1e3});R(()=>{d(t.limit,t.offset,t.keyword)}),q(()=>t.keyword,()=>{clearTimeout(t.typingTimer),t.typingTimer=setTimeout(()=>{d(t.limit,t.offset,t.keyword)},t.typingDelay)});function d(h,o,_){p.dispatch("Ambulance/getAmbulanceLocation",{limit:h,offset:o,keyword:_})}const T=()=>{t.limit=t.limit+t.limit,d(t.limit,t.offset,t.keyword)};return(h,o)=>{var v;const _=l("icon-ambulance"),V=l("icon-star"),B=l("router-link"),C=l("NoData"),L=l("ListLoader");return a(),n("section",J,[e("div",O,[e("div",P,[e("div",Q,[e("div",W,[X,u(_)]),e("div",Y,[I(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=s=>t.keyword=s),placeholder:"Search By Area"},null,512),[[K,t.keyword]])])]),e("div",Z,[e("div",ee,[(a(!0),n(U,null,$(i.value.ambulanceData,(s,M)=>{var y,b,g,f,k,w,x,A;return a(),n("div",{class:"doctor-card",key:M},[(y=s.ambulance)!=null&&y.image?(a(),n("div",te,[e("img",{src:(b=s.ambulance)==null?void 0:b.image,alt:""},null,8,se)])):(a(),n("div",ae,ne)),e("div",ce,[e("div",ie,c((g=s.state)==null?void 0:g.name),1),e("h4",le,c((f=s.ambulance)==null?void 0:f.name)+" ",1),e("div",re,[r("Charges : "),e("strong",null,"₹"+c((k=s.ambulance)==null?void 0:k.price)+" / Km",1)]),e("div",de,[r(" City / Area : "),e("strong",null,c((w=s.city)==null?void 0:w.name)+" / "+c((x=s.area)==null?void 0:x.name),1)]),_e,e("div",ue,[u(V),r(" "+c((A=s.ambulance)==null?void 0:A.rating.toFixed(1)),1)]),e("div",me,[u(B,{to:"/ambulance/appointment?id="+s.id,class:"btn primary-btn"},{default:G(()=>[r("Book Ambulance")]),_:2},1032,["to"])])])])}),128))]),i.value.loadMore?(a(),n("div",pe,[e("button",{class:"btn primary-btn",onClick:o[1]||(o[1]=z(s=>T(),["prevent"]))},"Load More")])):m("",!0),!i.value.loader&&((v=i.value.ambulanceData)==null?void 0:v.length)<=0?(a(),D(C,{key:1})):m("",!0)]),i.value.loader?(a(),D(L,{key:0})):m("",!0)])])])}}};export{ye as default};
