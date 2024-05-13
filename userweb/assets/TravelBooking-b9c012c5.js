import{u as J,m as O,c,r as G,n as K,a as m,o as a,b as i,d as t,e as d,w as v,g as E,h as p,v as h,t as n,i as l,F as Q,k as W,p as j,l as X,y as Z,j as M,B as I}from"./index-477b0694.js";import{_ as q,a as tt,b as st,c as et,d as ot,e as at}from"./check-circle-svgrepo-com-03a38f81.js";import{_ as it}from"./calender-9d47370a.js";const nt="/assets/ambulance-00ce5a2e.png",lt={class:"travel-booking-page"},rt={class:"container"},ct={class:"breadcrumb"},dt={class:"main"},_t=t("div",{class:"three"},null,-1),ut=t("div",{class:"one"},null,-1),mt=t("div",{class:"two"},null,-1),vt=t("div",{class:"content"},[t("img",{src:q,alt:"img"}),t("span",{class:""},"Location")],-1),pt=t("div",{class:"one"},null,-1),ht=t("div",{class:"two"},null,-1),gt=t("div",{class:"content"},[t("img",{src:tt,alt:"img"}),t("span",null,"Hospital")],-1),yt=t("div",{class:"one"},null,-1),ft=t("div",{class:"two"},null,-1),bt=t("div",{class:"content"},[t("img",{src:st,alt:"img"}),t("span",null,"Doctor")],-1),kt=t("div",{class:"one"},null,-1),Ct=t("div",{class:"two"},null,-1),wt=t("div",{class:"content"},[t("img",{src:et,alt:"img"}),t("span",null,"Home & Food")],-1),Tt=X('<div class="item active"><div class="one"></div><div class="two"></div><div class="content"><img src="'+ot+'" alt="img"><span>Transport</span></div></div><div class="item"><div class="one"></div><div class="two"></div><div class="content"><img src="'+at+'" alt="img"><span>Review</span></div></div>',2),St=t("div",{class:"card third-party-card mb-16"},[t("h3",null,"For Flight booking you can book from 3rd Party"),t("a",{href:"https://www.goindigo.in/flight-booking.html",target:"_blank",class:"btn primary-btn"},"Book Now")],-1),Dt=t("div",{class:"card third-party-card mb-16"},[t("h3",null,"For Train booking you can book from 3rd Party"),t("a",{href:"https://www.irctc.co.in/nget/train-search",target:"_blank",class:"btn primary-btn"},"Book Now")],-1),Vt={class:"main-card local-card"},Nt={class:"card-header"},xt=t("h3",null,"Local Transportation",-1),Bt={class:"save-btn flex justify-center"},Ft={class:"card-body"},Lt={class:"search-row"},Et={class:"form-item"},jt=t("div",{class:"title"},"From",-1),Mt={key:0,class:"err-msg"},Pt={class:"form-item"},Ut=t("div",{class:"title"},"To",-1),Yt={key:0,class:"err-msg"},$t={class:"form-item"},Ht=t("div",{class:"title"},"Select Date",-1),At={class:"date-input"},Rt=["min"],zt=t("div",{class:"icon"},[t("img",{src:it,alt:""})],-1),Jt={key:0,class:"err-msg"},Ot={class:"form-item"},Gt=t("div",{class:"title"},"Select Time",-1),Kt={key:0,class:"err-msg"},Qt={class:"form-item"},Wt=t("div",{class:"title v-none"},".",-1),Xt=t("div",{class:"err-msg opacity-none"},"k",-1),Zt={key:0,class:"dr-cards rest-page--card"},It={key:0,class:"img"},qt=["src"],ts={key:1,class:"img"},ss=t("img",{src:nt,alt:""},null,-1),es=[ss],os={class:"info"},as={class:"speciality"},is={class:"name"},ns={class:"desc mb-10"},ls={class:"fee"},rs={class:"rating"},cs={class:"schedule-btn"},ds=["onClick"],hs={__name:"TravelBooking",setup(_s){const g=J(),P=O(),r=c(()=>g.state.Transportation),s=G({limit:10,offset:0,keyword:"",submit:!1,fromCity:null,toCity:null,date:null,time:null,objInd:null,selectTransport:null});K(()=>{U()});const U=()=>{g.dispatch("Transportation/getTransportationAddres",{limit:s.limit,offset:s.offset,keyword:s.keyword})};function Y(_){r.value.transportData.forEach(o=>{o.id===_.id?(o.selectStatus=!o.selectStatus,o.selectStatus?s.selectTransport=o:s.selectTransport=null):o.selectStatus=!1})}function $(){return Z().format("YYYY-MM-DD")}function C(_){if(s.selectTransport){if(y.value||f.value||b.value||k.value)return s.submit=!0,null;s.submit=!1,s.selectTransport.fromCity=s.fromCity,s.selectTransport.toCity=s.toCity,s.selectTransport.date=s.date,s.selectTransport.time=s.time,localStorage.setItem("TransportData",JSON.stringify(s.selectTransport)),P.push({path:_})}else g.dispatch("Alert/error",{msg:"Please Select Transportation"})}const y=c(()=>{if(!s.fromCity)return"Enter starting point"}),f=c(()=>{if(!s.toCity)return"Enter destination"}),b=c(()=>{if(!s.date)return"Please select date"}),k=c(()=>{if(!s.time)return"Please select time"});return(_,o)=>{var w,T;const u=m("router-link"),H=m("icon-star"),A=m("NoData"),R=m("ListLoader");return a(),i("section",lt,[t("div",rt,[t("div",ct,[t("div",dt,[d(u,{to:"/medical-tourism",class:"item active"},{default:v(()=>[_t,ut,mt,vt]),_:1}),d(u,{to:"/medical-tourism/hospitals",class:"item active"},{default:v(()=>[pt,ht,gt]),_:1}),d(u,{to:"/medical-tourism/hospital-details",class:"item active"},{default:v(()=>[yt,ft,bt]),_:1}),d(u,{to:"/medical-tourism/hotels",class:"item active"},{default:v(()=>[kt,Ct,wt]),_:1}),Tt])]),St,Dt,t("div",Vt,[t("div",Nt,[xt,t("div",Bt,[t("button",{class:"btn primary-btn",onClick:o[0]||(o[0]=E(e=>C("/medical-tourism/journey-summary"),["prevent"]))}," Continue ")])]),t("div",Ft,[t("div",Lt,[t("div",Et,[jt,p(t("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=e=>s.fromCity=e),placeholder:"Enter starting point"},null,512),[[h,s.fromCity]]),s.submit&&y.value?(a(),i("div",Mt,n(y.value),1)):l("",!0)]),t("div",Pt,[Ut,p(t("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=e=>s.toCity=e),placeholder:"Enter destination"},null,512),[[h,s.toCity]]),s.submit&&f.value?(a(),i("div",Yt,n(f.value),1)):l("",!0)]),t("div",$t,[Ht,t("div",At,[p(t("input",{type:"date","onUpdate:modelValue":o[3]||(o[3]=e=>s.date=e),min:$()},null,8,Rt),[[h,s.date]]),zt]),s.submit&&b.value?(a(),i("div",Jt,n(b.value),1)):l("",!0)]),t("div",Ot,[Gt,p(t("input",{type:"time","onUpdate:modelValue":o[4]||(o[4]=e=>s.time=e)},null,512),[[h,s.time]]),s.submit&&k.value?(a(),i("div",Kt,n(k.value),1)):l("",!0)]),t("div",Qt,[Wt,t("button",{class:"btn primary-btn",onClick:o[5]||(o[5]=E(e=>C("/medical-tourism/journey-summary"),["prevent"]))}," Continue "),Xt])]),((w=r.value.transportData)==null?void 0:w.length)>0?(a(),i("div",Zt,[(a(!0),i(Q,null,W(r.value.transportData,(e,z)=>{var S,D,V,N,x,B,F,L;return a(),i("div",{class:"doctor-card",key:z},[(S=e.transportation)!=null&&S.image?(a(),i("div",It,[t("img",{src:(D=e.transportation)==null?void 0:D.image,alt:""},null,8,qt)])):(a(),i("div",ts,es)),t("div",os,[t("div",as,n((V=e.state)==null?void 0:V.name),1),t("h4",is,n((N=e.transportation)==null?void 0:N.name)+" ",1),t("div",ns,n((x=e.transportation)==null?void 0:x.shortDesc),1),t("div",ls,[M(" Charges : "),t("strong",null,"₹"+n((B=e.transportation)==null?void 0:B.price),1)]),t("div",rs,[d(H),M(" "+n((L=(F=e.transportation)==null?void 0:F.rating)==null?void 0:L.toFixed(1)),1)]),t("div",cs,[t("div",{class:I(["btn primary-btn",{"selected-btn":e.selectStatus}]),onClick:us=>Y(e)},n(e.selectStatus?"Selected":"Select"),11,ds)])])])}),128))])):l("",!0),!r.value.loader&&((T=r.value.transportData)==null?void 0:T.length)<=0?(a(),j(A,{key:1})):l("",!0),r.value.loader?(a(),j(R,{key:2})):l("",!0)])])])])}}};export{hs as default};
