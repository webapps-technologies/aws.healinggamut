import{h as v}from"./moment-Cl4UOzQZ.js";import{b as k}from"./vue-router-D5J0r3Gc.js";import{u as w}from"./vuex-DHdsu8jA.js";import{e as S,c as y,z as A,j as f,k as c,l as d,m as n,A as i,F as T,y as t,B as o,E as a,x as u}from"./@vue-bQO0P59g.js";const V={class:"grid grid-cols-1 lg:grid-cols-1 gap-6"},C={class:"grid grid-cols-1 lg:grid-cols-3 gap-6"},D={for:"Name",class:"font-semibold text-slate-800 dark:text-white"},E=t("span",{class:"text-slate-400/[0.9]"},"Name : ",-1),N={for:"Address",class:"font-semibold text-slate-800 dark:text-white"},O=t("span",{class:"text-slate-400/[0.9]"},"Address : ",-1),I={for:"State",class:"font-semibold text-slate-800 dark:text-white"},z=t("span",{class:"text-slate-400/[0.9]"},"State : ",-1),B={for:"City",class:"font-semibold text-slate-800 dark:text-white"},L=t("span",{class:"text-slate-400/[0.9]"},"City : ",-1),P={for:"Pincode",class:"font-semibold text-slate-800 dark:text-white"},j=t("span",{class:"text-slate-400/[0.9]"},"Pincode : ",-1),F={for:"Open Tome",class:"font-semibold text-slate-800 dark:text-white"},G=t("span",{class:"text-slate-400/[0.9]"},"Open Time : ",-1),q={class:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"},M={class:"flex justify-right md:block"},R={key:0,for:"Labtest Status"},U=t("span",{class:"text-slate-400 font-semibold"},"Status :",-1),H=t("span",{class:"font-semibold pl-2 text-green-400"},"ACTIVE",-1),J=[U,H],K={key:1,for:"Labtest Status"},Q=t("span",{class:"text-slate-400/[0.9]"},"Status : ",-1),W=t("span",{class:"font-semibold pl-2 text-red-400"},"DEACTIVE",-1),X=[Q,W],Y={key:2,for:"Labtest Status"},Z=t("span",{class:"text-slate-400/[0.9]"},"Status : ",-1),$=t("span",{class:"font-semibold pl-2 text-yellow-600"},"PENDING",-1),tt=[Z,$],st={class:"mr-6 mb-3 last:mr-0 font-semibold text-slate-800 dark:text-white"},et=t("span",{class:"text-indigo-500"},"Created At :",-1),at={class:"control-label ml-1"},ot=t("br",null,null,-1),lt={class:"mr-6 mb-3 last:mr-0 font-semibold text-slate-800 dark:text-white"},nt=t("span",{class:"text-indigo-500"},"Updated At :",-1),it={class:"control-label ml-1"},mt={__name:"ViewOrganization",setup(ct){const m=w(),x=k(),s=S(()=>m.state.Organization),r=y({id:null});A(()=>{r.id=x.query.id,r.id&&b(r.id)});const b=e=>{m.dispatch("Organization/getOneOrg",{id:e})};function h(e){if(e){const l=new Date(e).toString().split(" ");return l[2]+" "+l[1]+", "+l[3]+" "+l[4]}return"-"}function g(e){if(e)return v(e).format("LT")}return(e,l)=>{const _=f("new-card"),p=f("main-section");return c(),d(T,null,[n(p,null,{default:i(()=>[t("div",V,[n(_,{title:" Organization Details"},{default:i(()=>[t("div",C,[t("label",D,[E,o(a(s.value.name),1)]),t("label",N,[O,o(a(s.value.address),1)]),t("label",I,[z,o(a(s.value.state),1)]),t("label",B,[L,o(a(s.value.city),1)]),t("label",P,[j,o(a(s.value.pincode),1)]),t("label",F,[G,o(a(g(s.value.openTime)),1)])])]),_:1})])]),_:1}),n(p,null,{default:i(()=>[t("div",q,[n(_,{title:"Status"},{default:i(()=>[t("div",M,[s.value.status==="ACTIVE"?(c(),d("label",R,J)):u("",!0),s.value.status==="DEACTIVE"?(c(),d("label",K,X)):u("",!0),s.value.status==="PENDING"?(c(),d("label",Y,tt)):u("",!0)])]),_:1}),n(_,{title:"Dates"},{default:i(()=>[t("label",st,[et,t("span",at,a(h(s.value.createdAt)),1)]),ot,t("label",lt,[nt,t("span",it,a(h(s.value.updatedAt)),1)])]),_:1})])]),_:1})],64)}}};export{mt as default};
