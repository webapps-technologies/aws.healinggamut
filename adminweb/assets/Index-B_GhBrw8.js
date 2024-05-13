import{e as m,z as V,j as a,k as U,l as w,m as e,A as t,F as B,y as c,u as l,B as n,H as L}from"./@vue-bQO0P59g.js";import{b as M}from"./vue-router-D5J0r3Gc.js";import{u as C}from"./vuex-DHdsu8jA.js";const j={class:"text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"},H={class:"flex flex-wrap"},N={class:"grid grid-cols-1 lg:grid-cols-1 gap-6"},z={__name:"Index",setup(P){const p=/^((\+91))[6-9]\d{9}$/,d=C(),o=M(),r=m(()=>d.state.Laboratory);V(()=>{o.query.id&&d.dispatch("Laboratory/getOneLab",{id:o.query.id})});const _=()=>{b.value||(d.dispatch("Laboratory/updateUsername",{id:o.query.accountId,username:r.value.Username}),r.value.usernameModal=!1)},b=m(()=>{if(!r.value.Username||!p.test(r.value.Username))return"Phone number like +919876543210!"});return(S,u)=>{const y=a("laboratory-card"),s=a("router-link"),f=a("router-view"),v=a("main-section"),x=a("control"),g=a("field"),q=a("base-button"),h=a("base-buttons"),k=a("modal-box");return U(),w(B,null,[e(y),e(v,null,{default:t(()=>[c("div",j,[c("div",H,[e(s,{to:{path:"/laboratory/account/profile",query:{id:l(o).query.id}},class:"p-3","active-class":"border-b-2 border-indigo-500 text-blue-600"},{default:t(()=>[n("Profile")]),_:1},8,["to"]),e(s,{to:{path:"/laboratory/account/schedule",query:{id:l(o).query.id}},class:"p-3","active-class":"border-b-2 border-indigo-500 text-blue-600"},{default:t(()=>[n("Schedule")]),_:1},8,["to"]),e(s,{to:{path:"/laboratory/account/ourlabtest",query:{id:l(o).query.id}},class:"p-3","active-class":"border-b-2 border-indigo-500 text-blue-600"},{default:t(()=>[n("Our Labtest")]),_:1},8,["to"]),e(s,{to:{path:"/laboratory/account/wallet",query:{id:l(o).query.id}},class:"p-3","active-class":"border-b-2 border-indigo-500 text-blue-600"},{default:t(()=>[n("Wallet History")]),_:1},8,["to"]),e(s,{to:{path:"/laboratory/account/payment",query:{id:l(o).query.id}},class:"p-3","active-class":"border-b-2 border-indigo-500 text-blue-600"},{default:t(()=>[n("Payment History")]),_:1},8,["to"]),e(s,{to:{path:"/laboratory/account/bank",query:{id:l(o).query.id}},class:"p-3","active-class":"border-b-2 border-indigo-500 text-blue-600"},{default:t(()=>[n("Bank Details")]),_:1},8,["to"]),e(s,{to:{path:"/laboratory/account/commission",query:{id:l(o).query.id}},class:"p-3","active-class":"border-b-2 border-indigo-500 text-blue-600"},{default:t(()=>[n("Commission")]),_:1},8,["to"])])]),e(f)]),_:1}),e(k,{modelValue:r.value.usernameModal,"onUpdate:modelValue":u[1]||(u[1]=i=>r.value.usernameModal=i),title:"Username/Loginid"},{default:t(()=>[c("div",N,[e(g,{help:b.value},{default:t(()=>[e(x,{modelValue:r.value.Username,"onUpdate:modelValue":u[0]||(u[0]=i=>r.value.Username=i),type:"text"},null,8,["modelValue"])]),_:1},8,["help"])]),e(h,{type:"justify-center lg:justify-center pt-5"},{default:t(()=>[e(q,{type:"button",color:"info",small:"",label:"Update",onClick:L(_,["prevent"])})]),_:1})]),_:1},8,["modelValue"])],64)}}};export{z as default};
