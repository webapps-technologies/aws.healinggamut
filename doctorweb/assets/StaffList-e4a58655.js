import{u as O,B as R,C as $,c as i,v as z,D as G,r as p,o as n,a as d,b as t,t as a,g as A,x as u,y as c,F as H,E as K,d as f,w as C,e as X,f as r}from"./vendor-5e5c4e37.js";import{_ as j}from"./search-96d5dcc4.js";import{_ as q}from"./dr2-6b1c0b91.js";const J={class:"staff-list-page"},Q={class:"container"},W={class:"card staff-list"},Y={class:"card-header"},Z={class:"top"},ee={class:"head"},te=t("h4",null,"Staff Management",-1),se={class:"btn yellow-btn"},oe={class:"searchbar"},le=t("img",{src:j,alt:""},null,-1),ae={class:"card-body"},ne=t("div",{class:"img"},[t("img",{src:q,alt:"image"})],-1),de={class:"info"},ie={class:"staff-name"},re={class:"contact-info"},ue={class:"mail"},ce={class:"phone"},me=t("div",{class:"post dr"},"Doctor",-1),pe=t("div",{class:"title",showHeader:"true"},"Add Staff",-1),fe={class:"two-inputs"},_e={class:"form-item mb-16"},ve=t("div",{class:"title"},"Name",-1),he={key:0,class:"err-msg"},be={class:"form-item mb-16"},ge=t("div",{class:"title"},"Email",-1),Se={key:0,class:"err-msg"},ye={class:"two-inputs"},we={class:"form-item mb-16"},Ve=t("div",{class:"title"},"Select Gender",-1),ke={key:0,class:"err-msg"},Ee={class:"form-item mb-16"},Me=t("div",{class:"title"},"DOB",-1),Pe={key:0,class:"err-msg"},Ae={class:"two-inputs"},Ce={class:"form-item mb-16"},Ne=t("div",{class:"title"},"Phone No",-1),Ue={key:0,class:"err-msg"},De={class:"form-item mb-16"},Fe=t("div",{class:"title"},"Select Roles",-1),xe={key:0,class:"err-msg"},Be={class:"form-item mb-16"},Te=t("div",{class:"title"},"Password",-1),Ie={key:0,class:"err-msg"},Le=t("div",{class:"submit-btn"},[t("button",{type:"submit",class:"btn black-btn w-100 mt-16"},"Add")],-1),Ge={__name:"StaffList",setup(Oe){const _=[{id:"STAFF",name:"STAFF"}],v=[{id:null,name:"Select Gender"},{id:"MALE",name:"MALE"},{id:"FEMALE",name:"FEMALE"},{id:"UNISEX",name:"UNISEX"},{id:"OTHER",name:"OTHER"}],h=O();R(),$();const N=i(()=>h.state.Staff),e=z({addModal:!1,post:"",limit:10,offset:0,keyword:"",status:"ACTIVE",role:"STAFF",name:null,phone:null,email:null,address:null,post:_[0],dob:null,gender:v[0],password:null}),U=l=>{};G(()=>{b(e.limit,e.offset,e.keyword,e.status,e.role)});function b(l,s,M,P,m){h.dispatch("Staff/getStaff",{limit:l,offset:s,keyword:M,status:P,role:m})}function x(l){l.length>2?b(e.limit,e.offset,l,e.status,e.role):l.length<=0&&b(e.limit,e.offset,e.keyword,e.status,e.role)}const B=()=>{var l,s;if(g.value||w.value||y.value||k.value||E.value||S.value||V.value){e.submit=!0;return}e.submit=!1,h.dispatch("Staff/addStaff",{loginId:e.phone,name:e.name,emailId:e.email,gender:(l=e.gender)==null?void 0:l.id,dob:e.dob,roles:(s=e.post)==null?void 0:s.id,password:e.password}),e.addModal=!1,e.name=null,e.phone=null,e.email=null,e.address=null,e.post=_[0],e.dob=null,e.gender=v[0],e.password=null},g=i(()=>{if(!e.name)return"Please enter your name!"}),S=i(()=>{if(!e.dob)return"Please enter your dob!"}),y=i(()=>{let l=/^[6-9][0-9]{9}$/;if(e.phone){if(!l.test(e.phone))return"Please enter valid phone no!"}else return"Please enter your phone no!"}),w=i(()=>{let l=/^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/;if(e.email){if(!l.test(e.email))return"Please enter valid email!"}else return"Please enter your email!"}),V=i(()=>{var l;if(!((l=e.post)!=null&&l.id))return"Please select post!"}),k=i(()=>{if(!e.password)return"Please enter your password !"}),E=i(()=>{var l;if(!((l=e.gender)!=null&&l.id))return"Select gender !"});function T(l){let s=String.fromCharCode(l.keyCode);if(/^[0-9]+$/.test(s))return!0;l.preventDefault()}return(l,s)=>{const M=p("router-link"),P=p("icon-cross"),m=p("Select"),I=p("Modal");return n(),d("section",J,[t("div",Q,[t("div",W,[t("div",Y,[t("div",Z,[t("div",ee,[te,t("div",se,a(N.value.totalStaff),1)]),t("button",{class:"btn black-btn",onClick:s[0]||(s[0]=A(o=>e.addModal=!0,["prevent"]))}," + Add Staff ")]),t("div",oe,[u(t("input",{type:"text",placeholder:"Search for Staff","onUpdate:modelValue":s[1]||(s[1]=o=>e.keyword=o),onKeyup:s[2]||(s[2]=o=>x(o.target.value))},null,544),[[c,e.keyword]]),le])]),t("div",ae,[(n(!0),d(H,null,K(N.value.staffData,(o,L)=>(n(),X(M,{to:"/staff/details?id="+o.id,class:"list-item card1",key:L},{default:C(()=>{var D,F;return[ne,t("div",de,[t("div",ie,a((D=o.staffDetail)==null?void 0:D.name),1),t("div",re,[t("div",ue,a((F=o.staffDetail)==null?void 0:F.emailId),1),t("div",ce,a(o.phoneNumber),1)])]),me]}),_:2},1032,["to"]))),128))])])]),f(I,{show:e.addModal,"onUpdate:show":s[12]||(s[12]=o=>e.addModal=o),class:"",headerClasses:"header-bg"},{header:C(()=>[pe,t("div",{class:"close-btn",onClick:s[3]||(s[3]=A(o=>e.addModal=!1,["prevent"]))},[f(P)])]),default:C(()=>[t("form",{action:"",class:"form",onSubmit:A(B,["prevent"])},[t("div",fe,[t("div",_e,[ve,u(t("input",{type:"text","onUpdate:modelValue":s[4]||(s[4]=o=>e.name=o),placeholder:"Enter Name"},null,512),[[c,e.name]]),e.submit&&g.value?(n(),d("div",he,a(g.value),1)):r("",!0)]),t("div",be,[ge,u(t("input",{type:"text","onUpdate:modelValue":s[5]||(s[5]=o=>e.email=o),placeholder:"Enter Email"},null,512),[[c,e.email]]),e.submit&&w.value?(n(),d("div",Se,a(w.value),1)):r("",!0)])]),t("div",ye,[t("div",we,[Ve,f(m,{modelValue:e.gender,"onUpdate:modelValue":s[6]||(s[6]=o=>e.gender=o),options:v,onSelected:U,placeholder:"Select Gender"},null,8,["modelValue"]),e.submit&&E.value?(n(),d("div",ke,a(E.value),1)):r("",!0)]),t("div",Ee,[Me,u(t("input",{type:"date","onUpdate:modelValue":s[7]||(s[7]=o=>e.dob=o),placeholder:"Enter dob"},null,512),[[c,e.dob]]),e.submit&&S.value?(n(),d("div",Pe,a(S.value),1)):r("",!0)])]),t("div",Ae,[t("div",Ce,[Ne,u(t("input",{type:"number","onUpdate:modelValue":s[8]||(s[8]=o=>e.phone=o),placeholder:"Enter Phone No",onKeypress:s[9]||(s[9]=o=>T(o)),maxlength:"10"},null,544),[[c,e.phone]]),e.submit&&y.value?(n(),d("div",Ue,a(y.value),1)):r("",!0)]),t("div",De,[Fe,f(m,{modelValue:e.post,"onUpdate:modelValue":s[10]||(s[10]=o=>e.post=o),options:_,onSelected:U,placeholder:"Select Post"},null,8,["modelValue"]),e.submit&&V.value?(n(),d("div",xe,a(V.value),1)):r("",!0)])]),t("div",Be,[Te,u(t("input",{type:"text","onUpdate:modelValue":s[11]||(s[11]=o=>e.password=o),placeholder:"Enter Password"},null,512),[[c,e.password]]),e.submit&&k.value?(n(),d("div",Ie,a(k.value),1)):r("",!0)]),Le],32)]),_:1},8,["show"])])}}};export{Ge as default};
