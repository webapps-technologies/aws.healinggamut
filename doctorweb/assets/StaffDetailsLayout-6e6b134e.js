import{_ as m}from"./dr2-6b1c0b91.js";import{u as p,c as v,r as f,o as h,a as b,b as s,t as n,d as o,w as l,z as r}from"./vendor-5e5c4e37.js";import{r as k}from"./index-728dc27d.js";const y={class:"staff-details-layout"},g={class:"card staff-info-card"},C={class:"card-header"},w={class:"top-info"},x=s("div",{class:"img"},[s("img",{src:m,alt:"image"})],-1),S={class:"staff-name"},V={class:"name"},B={class:"sub"},D={class:"post Admin"},I={class:"tabs"},N={class:"card-body"},z={__name:"StaffDetailsLayout",setup($){const _=p(),a=v(()=>_.state.Staff);function e(c,t){k.push({path:c,query:{id:t}})}return(c,t)=>{const i=f("router-link"),u=f("router-view");return h(),b("section",y,[s("div",g,[s("div",C,[s("div",w,[x,s("div",S,[s("p",V,n(a.value.name),1),s("p",B,"Phone : "+n(a.value.mobile),1)]),s("div",D,n(a.value.roles2),1)]),s("div",I,[o(i,{to:"/staff/details",onClick:t[0]||(t[0]=d=>e("/staff/details",a.value.staffId)),class:"tab"},{default:l(()=>[r("Details")]),_:1}),o(i,{to:"/staff/permission",onClick:t[1]||(t[1]=d=>e("/staff/permission",a.value.staffId)),class:"tab"},{default:l(()=>[r("Permission")]),_:1}),o(i,{to:"/staff/slot",onClick:t[2]||(t[2]=d=>e("/staff/slot",a.value.staffId)),class:"tab"},{default:l(()=>[r("Availability")]),_:1})])]),s("div",N,[o(u)])])])}}};export{z as default};
