import{e as h,c as le,B as ae,j as p,k as r,l as u,m as a,C as i,F as V,y as t,D as b,I as c,u as C,G as B,x as f,t as D,E as I}from"./@vue-_x7nCA0A.js";import{f as F,j as oe}from"./@mdi-D9eD29fv.js";import{b as de}from"./vue-router-Dl416FTG.js";import{u as ie}from"./vuex-TZZnsCVb.js";import{h as ne}from"./moment-Cl4UOzQZ.js";const re={class:"grid grid-cols-1 lg:grid-cols-1 gap-6"},ce={class:"grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6"},ue={for:"Name",class:"font-semibold text-slate-800 dark:text-white"},me=t("span",{class:"text-slate-400/[0.9]"},"Hotel Name : ",-1),fe={for:"Address",class:"font-semibold text-slate-800 dark:text-white"},pe=t("span",{class:"text-slate-400/[0.9]"},"Price Per Day : ",-1),_e={for:"State",class:"font-semibold text-slate-800 dark:text-white"},ge=t("span",{class:"text-slate-400/[0.9]"},"Discount : ",-1),he={class:"grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6"},be={for:"City",class:"font-semibold text-slate-800 dark:text-white"},ye=t("span",{class:"text-slate-400/[0.9]"},"Ratting : ",-1),ve={for:"Pincode",class:"font-semibold text-slate-800 dark:text-white col-span-2"},xe=t("span",{class:"text-slate-400/[0.9]"},"Short Description : ",-1),ke={class:"grid grid-cols-1 lg:grid-cols-1 gap-6"},Ie={for:"Pincode",class:"font-semibold text-slate-800 dark:text-white"},Ae=t("span",{class:"text-slate-400/[0.9]"},"Description : ",-1),Se={class:"grid grid-cols-1 lg:grid-cols-1 gap-6 border"},we={class:"mt-3 px-6 table-sec"},Ve={key:0},Ce=t("caption",null,null,-1),De=t("thead",{class:"bg-white dark:bg-gray-900/80 dark:backdrop-blur-md"},[t("tr",null,[t("th",null,"Sl.No."),t("th",null,"State Name"),t("th",null,"City Name"),t("th",null,"Address"),t("th",{class:"lg:flex lg:justify-center"},"Action")])],-1),Me={"data-label":"Sr.No"},je={"data-label":"State"},He={"data-label":"City"},Le={"data-label":"Address"},Ne={class:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 new-table"},Ue={key:0,class:"mt-3 table-sec"},Ee={class:"grid grid-cols-1 lg:grid-cols-3 gap-1"},Oe=["src"],Pe={class:"flex justify-right md:block"},Te={key:0,for:"Labtest Status"},Be=t("span",{class:"text-indigo-500 font-semibold"},"Status :",-1),Fe={class:"font-semibold pl-2 text-green-400"},Ye={key:1,for:"Labtest Status"},Re=t("span",{class:"text-indigo-500 font-semibold"},"Status : ",-1),$e={class:"font-semibold pl-2 text-red-400"},qe={key:2,for:"Labtest Status"},ze=t("span",{class:"text-indigo-500 font-semibold"},"Status : ",-1),Ge={class:"font-semibold pl-2 text-yellow-600"},Je={class:"mr-6 mb-3 last:mr-0 font-semibold text-slate-800 dark:text-white"},Ke=t("span",{class:"text-indigo-500"},"Created At :",-1),Qe={class:"control-label ml-1"},We=t("br",null,null,-1),Xe={class:"mr-6 mb-3 last:mr-0 font-semibold text-slate-800 dark:text-white"},Ze=t("span",{class:"text-indigo-500"},"Updated At :",-1),et={class:"control-label ml-1"},tt={class:"grid grid-cols-1 lg:grid-cols-2 gap-2"},st={class:"h-48 cursor-pointer relative flex justify-center items-center border-2 rounded-md bg-gray-200"},lt={class:"absolute flex justify-center items-center gap-2"},at=["src"],ot={key:1,class:"text-center text-neutral-400 font-bold"},dt=t("p",{class:"text-slate-600 dark:text-white/75 pb-5 text-xl flex justify-center"},"Are you sure, you want to Delete ?",-1),pt={__name:"HotelDetails",setup(it){const n=ie(),M=de(),d=h(()=>n.state.Hotels),A=h(()=>n.state.Location),e=le({limit:10,offset:0,keyword:"",status:!0,submit:!1,id:null,hotelId:null,addressModel:!1,imgModal:!1,deleteModelStatus:!1,addressId:null,state:null,city:null,area:null,address:null,selectStateId:null,selectCityId:null,image:null,imageFile:null});ae(()=>{M.query.id&&(e.hotelId=M.query.id,Y(e.hotelId),R())});const Y=s=>{n.dispatch("Hotels/getOneHotel",{id:s})};function R(){n.dispatch("Location/getState",{limit:e.limit,offset:e.offset,keyword:e.keyword,status:e.status})}function $(s){s&&n.dispatch("Location/getState",{limit:e.limit,offset:e.offset,keyword:s,status:e.status})}function q(s){s.id&&(e.selectStateId=s.id,n.dispatch("Location/getCity",{limit:e.limit,offset:e.offset,keyword:e.keyword,status:e.status,stateId:s.id}))}function z(s){var l;e.state?n.dispatch("Location/getCity",{limit:e.limit,offset:e.offset,keyword:s,status:e.status,stateId:(l=e.state)==null?void 0:l.id}):n.dispatch("Alert/error",{msg:"Please Select State"})}function G(s){s.id&&n.dispatch("Location/getArea",{limit:e.limit,offset:e.offset,keyword:e.keyword,status:e.status,cityId:s.id})}function J(s){var l;e.state&&e.city?n.dispatch("Location/getArea",{limit:e.limit,offset:e.offset,keyword:s,status:e.status,cityId:(l=e.city)==null?void 0:l.id}):n.dispatch("Alert/error",{msg:"Please Select City"})}function K(){var s,l,m;if(H.value||L.value||N.value||U.value){e.submit=!0;return}e.submit=!1,n.dispatch("Hotels/saveOneHotelAddress",{hotelId:e.hotelId,stateId:(s=e.state)==null?void 0:s.id,cityId:(l=e.city)==null?void 0:l.id,areaId:(m=e.area)==null?void 0:m.id,address:e.address}),e.addressModel=!1}function j(s){return s?ne(s).format("MMM Do YYYY hh:mm A"):"-"}function Q(s){e.deleteModelStatus=!0,e.addressId=s}function W(){n.dispatch("Hotels/saveOneHotelAddressDelete",{id:e.addressId}),e.deleteModelStatus=!1}function X(){e.addressModel=!0,e.state=null,e.city=null,e.area=null,e.address=null}function Z(){e.imgModal=!0,e.image=null,document.getElementById("image_input").value&&(document.getElementById("image_input").value=null)}async function ee(s){if(s){const l=await s.target;if(l.files[0].type==="image/png"||l.files[0].type==="image/jpg"||l.files[0].type==="image/jpeg")if(l.files[0].size<=1e6){if(l.files){const m=new FileReader;m.onload=_=>{e.image=_.target.result},e.imageFile=l.files[0],m.readAsDataURL(l.files[0])}}else n.dispatch("Alert/error",{msg:"Image too big (max 1 Mb allowed)"});else n.dispatch("Alert/error",{msg:"Upload image in png format."})}}function te(){e.imageFile&&(n.dispatch("Hotels/saveOneHotelImage",{hotelId:e.hotelId,file:e.imageFile}),e.imgModal=!1)}const H=h(()=>{var s;if(!((s=e.state)!=null&&s.id))return"Select State!"}),L=h(()=>{var s;if(!((s=e.city)!=null&&s.id))return"Select City!"}),N=h(()=>{var s;if(!((s=e.area)!=null&&s.id))return"Select area!"}),U=h(()=>{if(!e.address)return"Enter Address!"});return(s,l)=>{const m=p("new-card"),_=p("base-button"),v=p("base-buttons"),E=p("card-component"),O=p("main-section"),S=p("search-select"),x=p("field"),se=p("control"),w=p("modal-box");return r(),u(V,null,[a(O,null,{default:i(()=>[t("div",re,[a(m,{title:"Hotel Details"},{default:i(()=>[t("div",ce,[t("label",ue,[me,b(c(d.value.name),1)]),t("label",fe,[pe,b(c(d.value.pricePerDay),1)]),t("label",_e,[ge,b(c(d.value.discount)+"%",1)])]),t("div",he,[t("label",be,[ye,b(c(d.value.rating),1)]),t("label",ve,[xe,b(c(d.value.shortDesc),1)])]),t("div",ke,[t("label",Ie,[Ae,b(c(d.value.desc),1)])])]),_:1}),t("div",Se,[a(E,{class:"mb-6",title:"Address",onHeaderIconClicked:X,headerIcon:C(F),iconText:"Add Address","has-table":""},{default:i(()=>{var o,y;return[t("div",we,[((o=d.value.hotelAddress)==null?void 0:o.length)>0?(r(),u("table",Ve,[Ce,De,t("tbody",null,[(r(!0),u(V,null,B(d.value.hotelAddress,(g,k)=>{var P,T;return r(),u("tr",{key:k},[t("td",Me,c(k+1),1),t("td",je,c((P=g.state)==null?void 0:P.name),1),t("td",He,c((T=g.city)==null?void 0:T.name),1),t("td",Le,c(g.address),1),t("td",null,[a(v,{type:"justify-start lg:justify-center","no-wrap":""},{default:i(()=>[a(_,{type:"button",title:"Delete Address",color:"danger",icon:C(oe),small:"",rounded:"",onClick:I(nt=>Q(g.id),["prevent"])},null,8,["icon","onClick"])]),_:2},1024)])])}),128))])])):f("",!0)]),((y=d.value.hotelAddress)==null?void 0:y.length)<=0?(r(),D(m,{key:0,empty:""})):f("",!0)]}),_:1},8,["headerIcon"])])])]),_:1}),a(O,null,{default:i(()=>[t("div",Ne,[a(E,{title:"Hotel Images",onHeaderIconClicked:Z,headerIcon:C(F),"has-table":"",iconText:"Add Image"},{default:i(()=>{var o,y;return[((o=d.value.hotelImage)==null?void 0:o.length)>0?(r(),u("div",Ue,[t("div",Ee,[(r(!0),u(V,null,B(d.value.hotelImage,(g,k)=>(r(),u("div",{class:"h-[9rem] w-[11rem] gap-6",key:k},[t("img",{class:"w-full h-full",src:g.image,alt:""},null,8,Oe)]))),128))])])):f("",!0),((y=d.value.hotelImage)==null?void 0:y.length)<=0?(r(),D(m,{key:1,empty:""})):f("",!0)]}),_:1},8,["headerIcon"]),a(m,{title:"Dates"},{default:i(()=>[t("div",Pe,[d.value.status=="ACTIVE"?(r(),u("label",Te,[Be,t("span",Fe,c(d.value.status),1)])):f("",!0),d.value.status=="PENDING"?(r(),u("label",Ye,[Re,t("span",$e,c(d.value.status),1)])):f("",!0),d.value.status=="DEACTIVE"?(r(),u("label",qe,[ze,t("span",Ge,c(d.value.status),1)])):f("",!0)]),t("label",Je,[Ke,t("span",Qe,c(j(d.value.createdAt)),1)]),We,t("label",Xe,[Ze,t("span",et,c(j(d.value.updatedAt)),1)])]),_:1})]),a(w,{modelValue:e.addressModel,"onUpdate:modelValue":l[4]||(l[4]=o=>e.addressModel=o),title:"Add Address"},{default:i(()=>[t("div",tt,[a(x,{label:"State *",help:e.submit?H.value:""},{default:i(()=>[a(S,{modelValue:e.state,"onUpdate:modelValue":l[0]||(l[0]=o=>e.state=o),options:A.value.stateData,onOnType:$,onOnSelected:q},null,8,["modelValue","options"])]),_:1},8,["help"]),a(x,{label:"City *",help:e.submit?L.value:""},{default:i(()=>[a(S,{modelValue:e.city,"onUpdate:modelValue":l[1]||(l[1]=o=>e.city=o),options:A.value.cityData,onOnType:z,onOnSelected:G},null,8,["modelValue","options"])]),_:1},8,["help"]),a(x,{label:"Area *",help:e.submit?N.value:""},{default:i(()=>[a(S,{modelValue:e.area,"onUpdate:modelValue":l[2]||(l[2]=o=>e.area=o),options:A.value.areaData,onOnType:J,onOnSelected:s.selectArea},null,8,["modelValue","options","onOnSelected"])]),_:1},8,["help"])]),a(x,{label:"Address *",help:e.submit?U.value:""},{default:i(()=>[a(se,{modelValue:e.address,"onUpdate:modelValue":l[3]||(l[3]=o=>e.address=o),type:"textarea",name:"addre",autocomplete:"addre",placeholder:"Enter Address"},null,8,["modelValue"])]),_:1},8,["help"]),a(v,{type:"justify-center lg:justify-center pt-5"},{default:i(()=>[d.value.loaderNew?f("",!0):(r(),D(_,{key:0,type:"button",color:"info",small:"",label:"Submit",onClick:I(K,["prevent"])}))]),_:1})]),_:1},8,["modelValue"]),a(w,{modelValue:e.imgModal,"onUpdate:modelValue":l[7]||(l[7]=o=>e.imgModal=o),title:"Add Image"},{default:i(()=>[t("section",null,[t("div",st,[t("input",{type:"file",id:"image_input",name:"logo",accept:"image/*",onChange:l[5]||(l[5]=o=>ee(o)),class:"z-20 opacity-0 cursor-pointer h-full w-full"},null,32),t("div",lt,[e.image?(r(),u("img",{key:0,class:"h-48 opacity-1",src:e.image},null,8,at)):f("",!0),e.image?f("",!0):(r(),u("span",ot,"Upload Image"))])]),a(v,{type:"justify-center lg:justify-center pt-5"},{default:i(()=>[a(_,{type:"button",color:"danger",small:"",label:"Upload",onClick:I(te,["prevent"])}),a(_,{type:"button",color:"info",small:"",label:"Cancel",onClick:l[6]||(l[6]=I(o=>e.imgModal=!1,["prevent"]))})]),_:1})])]),_:1},8,["modelValue"]),a(w,{modelValue:e.deleteModelStatus,"onUpdate:modelValue":l[9]||(l[9]=o=>e.deleteModelStatus=o),title:"Logout",class:"backdrop-blur-sm"},{default:i(()=>[dt,a(v,{class:"flex justify-center"},{default:i(()=>[a(_,{onClick:W,color:"danger",small:"",label:"Yes"}),a(_,{onClick:l[8]||(l[8]=o=>e.deleteModelStatus=!1),color:"info",small:"",label:"No"})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}}};export{pt as default};
