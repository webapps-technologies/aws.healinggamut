import{q as m,u as k,c as b,n as f,a as t,o as n,b as i,d as s,t as y,e as o,w as e}from"./index-477b0694.js";const x="/assets/success-cff22944.svg",g={class:"booking-success-page"},B={class:"container"},S={key:0,class:"content"},w=s("div",{class:"payment-loader"},[s("div",{class:"lds-spinner"},[s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div")]),s("br"),s("br")],-1),C=s("h2",null,"Please wait don't refresh the page!",-1),H=[w,C],N={key:1,class:"content"},P=s("div",{class:"img"},[s("img",{src:x,alt:""})],-1),V=s("div",{class:"sub-text"},"You can book your next journey :",-1),D={class:"cards"},L={class:"icon"},M=s("div",{class:"text"},"Doctor",-1),j={class:"icon"},q=s("div",{class:"text"},"Hospital",-1),A={class:"icon"},E=s("div",{class:"text"},"Studio Clinic",-1),R={class:"icon"},Y=s("div",{class:"text"},"Ambulance",-1),z={class:"icon"},F=s("div",{class:"text"},"Nurse",-1),G={class:"icon"},I=s("div",{class:"text"},"Laboratories",-1),T={__name:"BookingSuccess",setup(J){const _=m(),a=k(),d=b(()=>a.state.PaymentHistory);return f(()=>{a.dispatch("PaymentHistory/paymentStatus",{id:_.params.signature})}),(K,O)=>{const l=t("icon-doctor"),c=t("router-link"),r=t("icon-hospital"),u=t("icon-clinic"),p=t("icon-ambulance"),v=t("icon-nurse"),h=t("icon-lab");return n(),i("section",g,[s("div",B,[d.value.paymentLoader?(n(),i("div",S,H)):(n(),i("div",N,[P,s("h2",null,y(d.value.paymentMessage),1),V,s("div",D,[o(c,{to:"/panel/doctors",class:"link-card"},{default:e(()=>[s("div",L,[o(l)]),M]),_:1}),o(c,{to:"/panel/hospitals",class:"link-card"},{default:e(()=>[s("div",j,[o(r)]),q]),_:1}),o(c,{to:"/panel/studio-clinics",class:"link-card"},{default:e(()=>[s("div",A,[o(u)]),E]),_:1}),o(c,{to:"/panel/ambulance",class:"link-card"},{default:e(()=>[s("div",R,[o(p)]),Y]),_:1}),o(c,{to:"/panel/nurses",class:"link-card"},{default:e(()=>[s("div",z,[o(v)]),F]),_:1}),o(c,{to:"/panel/laboratories",class:"link-card"},{default:e(()=>[s("div",G,[o(h)]),I]),_:1})])]))])])}}};export{T as default};
