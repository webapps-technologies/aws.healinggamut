import{e as b,c as ae,B as se,j as y,k as r,l as c,m as a,C as i,D as k,y as o,E as p,F as ne,G as ie,x as d,t as S,q as E,H as V,I as C,u as T}from"./@vue-_x7nCA0A.js";import{e as re,g as de,h as ue,k as ce,j as pe}from"./@mdi-D9eD29fv.js";import"./moment-Cl4UOzQZ.js";import{u as me}from"./vue-router-Dl416FTG.js";import{u as fe}from"./vuex-TZZnsCVb.js";const ge={class:"grid grid-cols-1 lg:grid-cols-3 gap-6"},he={class:"grid grid-cols-1 lg:grid-cols-1 gap-6 new-table"},ye={class:"mt-3 table-sec"},be={key:0},_e=o("caption",null,null,-1),De=o("thead",{class:"bg-white dark:bg-gray-900/80 dark:backdrop-blur-md"},[o("tr",null,[o("th",null,"Sl.No."),o("th",null,"Image"),o("th",null,"Name"),o("th",null,"Price"),o("th",null,"Discount %"),o("th",null,"Ratting"),o("th",null,"Status"),o("th",{class:"lg:flex lg:justify-center"},"Action")])],-1),ke={"data-label":"Sr.No"},ve={"data-label":"image"},Ee=["src"],Ve={"data-label":"Name"},Ce={"data-label":"Price"},Te={"data-label":"Discount"},xe={"data-label":"Rating"},Me={"data-label":"Status"},Se={key:0},Ie={key:1},Ne={key:2},Ue={key:3},je={key:4},we={key:0,class:"flex justify-center items-center"},Ae=o("div",{class:"spinner-dual-ring"},[o("div",{class:"ldio"},[o("div"),o("div",null,[o("div")])])],-1),Pe=[Ae],Le={key:0},Re={class:"flex justify-center"},$e={class:"form-check form-check-inline"},Be={class:"form-check-label inline-block text-gray-800 dark:text-slate-300 mr-2 cursor-pointer"},Fe={class:"form-check form-check-inline"},Ge={class:"form-check-label inline-block text-gray-800 dark:text-slate-300 mr-2 cursor-pointer"},Oe={class:"form-check form-check-inline"},Ke={class:"form-check-label inline-block text-gray-800 dark:text-slate-300 mr-2 cursor-pointer"},ze={class:"form-check form-check-inline"},qe={class:"form-check-label inline-block text-gray-800 dark:text-slate-300 mr-2 cursor-pointer"},He={class:"form-check form-check-inline"},Ye={class:"form-check-label inline-block text-gray-800 dark:text-slate-300 mr-2 cursor-pointer"},We={class:"grid grid-cols-1 lg:grid-cols-2 gap-2"},Ze=o("p",{class:"text-slate-600 dark:text-white/75 pb-5 text-xl flex justify-center"},"Are you sure, you want to Delete ?",-1),Je={class:"h-48 cursor-pointer relative flex justify-center items-center border-2 rounded-md bg-gray-200"},Qe={class:"absolute flex justify-center items-center gap-2"},Xe=["src"],et={key:1,class:"text-center text-neutral-400 font-bold"},it={__name:"Transportations",setup(tt){const g=fe(),B=me(),m=b(()=>g.state.Transportation);console.log(m);const I=[{id:"ACTIVE",name:"ACTIVE"},{id:"DEACTIVE",name:"DEACTIVE"},{id:"PENDING",name:"PENDING"},{id:"SUSPENDED",name:"SUSPENDED"},{id:"DELETED",name:"DELETED"}],e=ae({limit:10,offset:0,search:"",status:I[0],statusChange:I[0],id:null,submit:!1,statusModal:!1,addModal:!1,addAddressModal:!1,deleteModelStatus:!1,editMode:!1,transId:null,imgModal:!1,logoImage:null,name:null,rating:null,price:null,discounted:null,shortDesc:null,desc:null});se(()=>{v()});const F=()=>{var s;v(e.limit,e.offset,e.search,(s=e.status)==null?void 0:s.id)};function v(){g.dispatch("Transportation/gettrans",{limit:e.limit,offset:e.offset,keyword:e.search,status:e.status.id})}function G(){if(U.value||j.value||w.value||A.value||P.value||L.value){e.submit=!0;return}e.submit=!1,e.editMode?(g.dispatch("Transportation/updatetrans",{id:e.id,name:e.name,rating:e.rating,price:e.price,discounted:e.discounted,shortDesc:e.shortDesc,desc:e.desc}),e.addModal=!1):(g.dispatch("Transportation/savetrans",{name:e.name,rating:e.rating,price:e.price,discounted:e.discounted,shortDesc:e.shortDesc,desc:e.desc}),e.addModal=!1)}function O(){e.id&&g.dispatch("Transportation/setTransStatus",{id:e.id,status:e.status}),e.statusModal=!1}function K(){var s;e.offset=e.offset+e.limit,v(e.limit,e.offset,e.search,(s=e.status)==null?void 0:s.id)}function z(s){e.deleteModelStatus=!0,e.transId=s}function q(){g.dispatch("Transportation/oneTransDelete",{id:e.transId}),e.deleteModelStatus=!1}function H(s){var t,h;e.offset=0,s.length>2?v(e.limit,e.offset,s,(t=e.status)==null?void 0:t.id):s.length<=0&&v(e.limit,e.offset,e.search,(h=e.status)==null?void 0:h.id)}function Y(s,t){e.id=s,e.name=t.name,e.price=t.price,e.discounted=t.discounted,e.rating=t.rating,e.shortDesc=t.shortDesc,e.desc=t.desc,e.editMode=!0,e.addModal=!0}function W(s,t,h){B.push({path:s,query:{id:t,name:h}})}function Z(s,t){e.imgModal=!0,e.id=s,e.logoImage=t}async function J(s){if(s){const t=await s.target;if(t.files[0].type==="image/png"||t.files[0].type==="image/jpg"||t.files[0].type==="image/jpeg")if(t.files[0].size<=1e6){if(t.files){const h=new FileReader;h.onload=f=>{e.logoImage=f.target.result},e.imageFile=t.files[0],h.readAsDataURL(t.files[0])}}else g.dispatch("Alert/error",{msg:"Image too big (max 1 Mb allowed)"});else g.dispatch("Alert/error",{msg:"Upload image in png format."})}}function Q(){e.imageFile&&(g.dispatch("Transportation/setTransImage",{id:e.id,file:e.imageFile}),e.imgModal=!1)}function X(s,t){e.statusModal=!0,e.id=s,e.status=t}const U=b(()=>{if(!e.name)return"Enter Hotel Name!"}),j=b(()=>{if(!e.price)return"Enter Price!"}),w=b(()=>{if(!e.discounted)return"Enter discount!"}),A=b(()=>{if(!e.rating)return"Enter rating!"}),P=b(()=>{if(!e.shortDesc)return"Enter Short Description!"}),L=b(()=>{if(!e.desc)return"Enter Description!"});function N(s){let t=String.fromCharCode(s.keyCode);if(/^[0-9]+$/.test(t))return!0;s.preventDefault()}function ee(s){let t=String.fromCharCode(s.keyCode);if(/^[a-zA-Z ]+$/.test(t))return!0;s.preventDefault()}return(s,t)=>{const h=y("hero-bar"),f=y("control"),u=y("base-button"),_=y("base-buttons"),te=y("new-card"),le=y("card-component"),oe=y("main-section"),x=y("modal-box"),D=y("field");return r(),c("section",null,[a(h,null,{default:i(()=>[k("Transportations")]),_:1}),a(oe,null,{default:i(()=>[o("div",ge,[a(f,{modelValue:e.search,"onUpdate:modelValue":t[0]||(t[0]=l=>e.search=l),onKeyup:t[1]||(t[1]=l=>H(l.target.value)),type:"text",placeholder:"Search by : Name"},null,8,["modelValue"]),a(f,{modelValue:e.status,"onUpdate:modelValue":t[2]||(t[2]=l=>e.status=l),options:I},null,8,["modelValue"]),a(u,{type:"button",color:"themeColor",small:"",label:"SUBMIT",onClick:t[3]||(t[3]=p(l=>F(),["prevent"]))})]),o("div",he,[a(le,{class:"mb-6",title:"List (Total: "+m.value.totalMeals+")","has-table":""},{default:i(()=>{var l,R;return[o("div",ye,[((l=m.value.mealsData)==null?void 0:l.length)>0?(r(),c("table",be,[_e,De,o("tbody",null,[(r(!0),c(ne,null,ie(m.value.mealsData,(n,$)=>(r(),c("tr",{key:$},[o("td",ke,C($+1),1),o("td",ve,[o("img",{src:n.image,class:"h-8 w-14"},null,8,Ee)]),o("td",Ve,C(n.name),1),o("td",Ce,"₹"+C(n.price),1),o("td",Te,C(n.discounted),1),o("td",xe,C(n.rating),1),o("td",Me,[n.status=="ACTIVE"?(r(),c("span",Se,"ACTIVE")):d("",!0),n.status=="DEACTIVE"?(r(),c("span",Ie,"DEACTIVE")):d("",!0),n.status=="PENDING"?(r(),c("span",Ne,"PENDING")):d("",!0),n.status=="SUSPENDED"?(r(),c("span",Ue,"SUSPENDED")):d("",!0),n.status=="DELETED"?(r(),c("span",je,"DELETED")):d("",!0)]),o("td",null,[a(_,{type:"justify-start lg:justify-center","no-wrap":""},{default:i(()=>[a(u,{type:"button",title:"View Transportation",color:"orange",icon:T(re),small:"",rounded:"",onClick:p(M=>W("/transportation/details",n.id,n.name),["prevent"])},null,8,["icon","onClick"]),a(u,{type:"button",title:"Update Transportation",color:"info",icon:T(de),small:"",rounded:"",onClick:p(M=>Y(n.id,n),["prevent"])},null,8,["icon","onClick"]),a(u,{type:"button",title:"Change Status",color:"purple",icon:T(ue),small:"",rounded:"",onClick:p(M=>X(n.id,n.status),["prevent"])},null,8,["icon","onClick"]),a(u,{color:"success",title:"Change Image",small:"",rounded:"",icon:T(ce),onClick:p(M=>Z(n.id,n.image),["prevent"])},null,8,["icon","onClick"]),a(u,{type:"button",title:"Delete Transportation",color:"danger",icon:T(pe),small:"",rounded:"",onClick:p(M=>z(n.id),["prevent"])},null,8,["icon","onClick"])]),_:2},1024)])]))),128))])])):d("",!0)]),((R=m.value.mealsData)==null?void 0:R.length)<=0?(r(),S(te,{key:0,empty:""})):d("",!0)]}),_:1},8,["title"])]),m.value.dataLoader?(r(),c("div",we,Pe)):d("",!0),m.value.loadMore&&!m.value.dataLoader?(r(),S(_,{key:1,type:"justify-center lg:justify-center"},{default:i(()=>[a(u,{type:"button",color:"themeColor",label:"Load More",onClick:t[4]||(t[4]=p(l=>K(),["prevent"]))})]),_:1})):d("",!0)]),_:1}),a(x,{modelValue:e.statusModal,"onUpdate:modelValue":t[10]||(t[10]=l=>e.statusModal=l),title:"Transportation status"},{default:i(()=>[e.id?(r(),c("section",Le,[o("div",Re,[o("div",$e,[o("label",Be,[E(o("input",{class:"form-check-input ml-2",type:"radio",name:"inlineRadioOptions","onUpdate:modelValue":t[5]||(t[5]=l=>e.status=l),value:"ACTIVE"},null,512),[[V,e.status]]),k(" ACTIVE ")])]),o("div",Fe,[o("label",Ge,[E(o("input",{class:"form-check-input ml-2",type:"radio",name:"inlineRadioOptions","onUpdate:modelValue":t[6]||(t[6]=l=>e.status=l),value:"DEACTIVE"},null,512),[[V,e.status]]),k(" DEACTIVE")])]),o("div",Oe,[o("label",Ke,[E(o("input",{class:"form-check-input ml-2",type:"radio",name:"inlineRadioOptions","onUpdate:modelValue":t[7]||(t[7]=l=>e.status=l),value:"PENDING"},null,512),[[V,e.status]]),k(" PENDING")])]),o("div",ze,[o("label",qe,[E(o("input",{class:"form-check-input ml-2",type:"radio",name:"inlineRadioOptions","onUpdate:modelValue":t[8]||(t[8]=l=>e.status=l),value:"SUSPENDED"},null,512),[[V,e.status]]),k(" SUSPENDED")])]),o("div",He,[o("label",Ye,[E(o("input",{class:"form-check-input ml-2",type:"radio",name:"inlineRadioOptions","onUpdate:modelValue":t[9]||(t[9]=l=>e.status=l),value:"DELETED"},null,512),[[V,e.status]]),k(" DELETED")])])]),a(_,{type:"justify-center lg:justify-center pt-5"},{default:i(()=>[m.value.loaderNew?d("",!0):(r(),S(u,{key:0,type:"button",color:"info",small:"",label:"Change Status",onClick:p(O,["prevent"])}))]),_:1})])):d("",!0)]),_:1},8,["modelValue"]),a(x,{modelValue:e.addModal,"onUpdate:modelValue":t[21]||(t[21]=l=>e.addModal=l),title:"Add Transportation"},{default:i(()=>[o("div",We,[a(D,{label:"Transportation Name *",help:e.submit?U.value:""},{default:i(()=>[a(f,{modelValue:e.name,"onUpdate:modelValue":t[11]||(t[11]=l=>e.name=l),type:"text",name:"name",autocomplete:"name",placeholder:"Enter Transportation Name",onKeypress:t[12]||(t[12]=l=>ee(l)),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["help"]),a(D,{label:"Price *",help:e.submit?j.value:""},{default:i(()=>[a(f,{modelValue:e.price,"onUpdate:modelValue":t[13]||(t[13]=l=>e.price=l),type:"text",name:"price",autocomplete:"price",placeholder:"Enter Price",onKeypress:t[14]||(t[14]=l=>N(l)),maxlength:"6"},null,8,["modelValue"])]),_:1},8,["help"]),a(D,{label:"Discount *",help:e.submit?w.value:""},{default:i(()=>[a(f,{modelValue:e.discounted,"onUpdate:modelValue":t[15]||(t[15]=l=>e.discounted=l),type:"text",name:"discount",autocomplete:"discount",placeholder:"Enter Discount",onKeypress:t[16]||(t[16]=l=>N(l)),maxlength:"3"},null,8,["modelValue"])]),_:1},8,["help"]),a(D,{label:"Rating *",help:e.submit?A.value:""},{default:i(()=>[a(f,{modelValue:e.rating,"onUpdate:modelValue":t[17]||(t[17]=l=>e.rating=l),type:"text",name:"rating",autocomplete:"rating",placeholder:"Enter Rating",onKeypress:t[18]||(t[18]=l=>N(l)),maxlength:"1"},null,8,["modelValue"])]),_:1},8,["help"]),a(D,{label:"Short Description *",help:e.submit?P.value:""},{default:i(()=>[a(f,{modelValue:e.shortDesc,"onUpdate:modelValue":t[19]||(t[19]=l=>e.shortDesc=l),type:"text",name:"shortDesc",autocomplete:"shortDesc",placeholder:"Enter Short Description"},null,8,["modelValue"])]),_:1},8,["help"]),a(D,{label:"Description *",help:e.submit?L.value:""},{default:i(()=>[a(f,{modelValue:e.desc,"onUpdate:modelValue":t[20]||(t[20]=l=>e.desc=l),type:"textarea",name:"desc",autocomplete:"desc",placeholder:"Enter Description"},null,8,["modelValue"])]),_:1},8,["help"])]),a(_,{type:"justify-center lg:justify-center pt-5"},{default:i(()=>[m.value.loaderNew?d("",!0):(r(),S(u,{key:0,type:"button",color:"info",small:"",label:"Submit",onClick:p(G,["prevent"])}))]),_:1})]),_:1},8,["modelValue"]),a(x,{modelValue:e.deleteModelStatus,"onUpdate:modelValue":t[23]||(t[23]=l=>e.deleteModelStatus=l),title:"Delete Transportations",class:"backdrop-blur-sm"},{default:i(()=>[Ze,a(_,{class:"flex justify-center"},{default:i(()=>[a(u,{onClick:q,color:"danger",small:"",label:"Yes"}),a(u,{onClick:t[22]||(t[22]=l=>e.deleteModelStatus=!1),color:"info",small:"",label:"No"})]),_:1})]),_:1},8,["modelValue"]),a(x,{modelValue:e.imgModal,"onUpdate:modelValue":t[26]||(t[26]=l=>e.imgModal=l),title:"Update Image"},{default:i(()=>[o("section",null,[o("div",Je,[o("input",{type:"file",name:"logo",id:"image_input",accept:"image/*",onChange:t[24]||(t[24]=l=>J(l)),class:"z-20 opacity-0 cursor-pointer h-full w-full"},null,32),o("div",Qe,[e.logoImage?(r(),c("img",{key:0,class:"h-48 opacity-1",src:e.logoImage},null,8,Xe)):d("",!0),e.logoImage?d("",!0):(r(),c("span",et,"Upload Image"))])]),a(_,{type:"justify-center lg:justify-center pt-5"},{default:i(()=>[a(u,{type:"button",color:"danger",small:"",label:"Upload",onClick:p(Q,["prevent"])}),a(u,{type:"button",color:"info",small:"",label:"Cancel",onClick:t[25]||(t[25]=p(l=>e.imgModal=!1,["prevent"]))})]),_:1})])]),_:1},8,["modelValue"])])}}};export{it as default};
