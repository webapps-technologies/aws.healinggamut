import{v as y,w as k}from"./@mdi-D9eD29fv.js";import{u as w}from"./vuex-TZZnsCVb.js";import"./moment-Cl4UOzQZ.js";import{r as j,e as b,c as C,j as d,k as c,l as N,m,C as A,y as e,I as a,t as p,u as x,x as _,D as o,F as V}from"./@vue-_x7nCA0A.js";const F=e("div",{class:"pt-6"},null,-1),I={type:"justify-around lg:justify-center",class:"flex"},D={for:"fileInput",class:"w-[30%] flex justify-center items-top"},B={class:"w-[70%] flex flex-col text-right md:text-left pl-4"},E={class:"flex justify-left"},P={class:"text-3xl font-bold text-[#1670ffaf] dark:text-[#1670ff]"},W={class:"flex justify-left my-3"},z={class:"flex justify-left mr-12 font-medium text-[#00000080] dark:text-[#ffffff50]"},L={class:"text-[#1f3d9d] dark:text-[#6e90ff]"},R={class:"flex justify-left mr-12"},S={class:"text-[#1f3d9d] dark:text-[#6e90ff]"},T={class:"flex justify-left my-3 font-medium text-[#00000080] dark:text-[#ffffff50]"},U={class:"flex justify-left mr-12"},G={class:"text-[#1f3d9d] dark:text-[#6e90ff]"},M={class:"flex justify-left my-3 font-medium text-[#00000080] dark:text-[#ffffff50]"},$={class:"flex justify-left mr-12"},q={class:"text-[#1f3d9d] dark:text-[#6e90ff]"},H={class:"flex text-left font-medium text-[#00000080] dark:text-[#ffffff50]"},J={class:"text-[#1f3d9d] dark:text-[#6e90ff]"},Z={__name:"FranchiseCard",setup(K){const h=j(!1),l=w(),s=b(()=>l.state.Franchise),r=C({profile:null}),g=async n=>{if(n){const t=n.target;if(t.files[0].type==="image/png"||t.files[0].type==="image/jpeg"||t.files[0].type==="image/jpg"){if(t.files[0].size>512e3)return r.profile=null,l.dispatch("Alert/error",{msg:"Profile image size must be less than 500kb."});if(t.files){const i=new FileReader;i.onload=f=>{r.profile=f.target.result},t.files[0]&&(i.readAsDataURL(t.files[0]),l.dispatch("Franchise/profileImage",{id:s.value.user.id,data:t.files[0],link:r.profile}))}}else r.profile=null,l.dispatch("Alert/error",{msg:"Upload image in png, jpeg, jpg format."})}};return(n,t)=>{const i=d("user-avatar"),f=d("pill"),v=d("card-component");return c(),N(V,null,[F,m(v,{rounded:"",class:"justify-between items-start m-6 mt-0 md:rounded-md lg:rounded-xl shadow-xl shadow-indigo-400/[0.2] bg-gradient-to-br from-indigo-400/[0.2] via-indigo-200/[0.2] to-indigo-100/[0.2]"},{default:A(()=>[e("div",I,[e("label",D,[m(i,{image:s.value.user.image1,class:"lg:mx-12 rounded-lg cursor-pointer",classess:"rounded-full h-44 w-44 border-4 border-[#fff] shadow-lg shadow-[#1670ff50] hover:shadow-xl  hover:shadow-[#1670ff70] hover:border-[#418aff] transition duration-500",onClick:t[0]||(t[0]=u=>h.value=!0)},null,8,["image"])]),e("div",B,[e("div",E,[e("h1",P,a(s.value.user.name||"-"),1),s.value.user.status==="ACTIVE"?(c(),p(f,{key:0,text:s.value.user.status,type:"danger",icon:x(y),class:"border-0 text-green-500"},null,8,["text","icon"])):_("",!0),s.value.user.status==="PENDING"?(c(),p(f,{key:1,text:s.value.user.status,type:"danger",icon:x(k),class:"border-0 text-yellow-400"},null,8,["text","icon"])):_("",!0)]),e("div",W,[e("p",z,[o(" Phone Number :  "),e("span",L,a(s.value.user.contactNumber)+" ",1)]),e("p",R,[o(" Email :  "),e("span",S,a(s.value.user.email),1)])]),e("div",T,[e("p",U,[o(" Address :  "),e("span",G,a(s.value.user.address),1)])]),e("div",M,[e("p",$,[o(" Wallet :  "),e("span",q,"₹ "+a(s.value.user.walletCash),1)]),e("p",H,[o(" Last Withdraw :  "),e("span",J,"₹ "+a(s.value.user.lastWithdrawCash),1)])])]),e("input",{name:"photo",id:"fileInput",accept:"image/*",class:"hidden",type:"file",onChange:t[1]||(t[1]=u=>g(u))},null,32)])]),_:1})],64)}}};export{Z as default};
