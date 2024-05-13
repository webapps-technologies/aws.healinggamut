import{u as ie,c as d,v as de,D as re,r as f,o as a,a as i,b as t,F as ue,E as ce,f as u,d as r,w as V,t as n,g as B,x as v,y as _,m as P}from"./vendor-5e5c4e37.js";import{_ as me}from"./search-96d5dcc4.js";import{_ as pe}from"./man-7260f652.js";import{_ as ve}from"./calender-9d47370a.js";import{r as _e}from"./index-728dc27d.js";const fe={class:"patients-page common-list-page"},he={class:"container"},ge={class:"card"},be={class:"heading"},ye=t("div",{class:"title"},"All Patients",-1),Ve={class:"right"},Pe={class:"searchbar"},Se=t("img",{src:me,alt:""},null,-1),ke={class:"card-body"},Me={class:"table-outer"},we={class:"table"},xe=t("thead",null,[t("th",null,"Sr. No."),t("th",null,"ID"),t("th",null,"Name"),t("th",null,"Phone"),t("th",null,"Email"),t("th",null,"Gender"),t("th",null,"Appointments"),t("th",{class:"text-center"},"View")],-1),Oe={class:"text-center"},Ae={class:"option-btns"},Ue=t("img",{src:pe,alt:""},null,-1),Ce=t("div",{class:"tooltip"},"Profile",-1),Ee={key:0,class:"table-no-data"},De=t("div",null,"No records Found!",-1),Ne=[De],Le={key:1,class:"table-footer"},Be=t("h4",null,"Are you sure want to Delete",-1),Ye={class:"btns"},$e=t("button",{class:"btn confirm-btn"},"Confirm",-1),Fe=t("div",{class:"title",showHeader:"true"},"Add Patient",-1),Ie={class:"row"},He={class:"col-25 form-item mb-16"},Te={key:0,class:"err-msg"},ze={class:"col-75 form-item mb-16"},Re={key:0,class:"err-msg"},Ge={class:"row"},Ke={class:"col-25 form-item mb-16"},je={key:0,class:"err-msg"},qe={class:"col-5 form-item mb-16"},Je={class:"date-input"},Qe=["max"],We=t("div",{class:"icon"},[t("img",{src:ve,alt:""})],-1),Xe={key:0,class:"err-msg"},Ze={class:"col-25 form-item mb-16"},et={class:"row"},tt={class:"col-5 form-item mb-16"},ot={key:0,class:"err-msg"},st={class:"col-5 form-item mb-16"},lt={key:0,class:"err-msg"},nt={class:"row"},at={class:"col-5 form-item mb-16"},it={class:"col-5 form-item mb-16"},dt={class:"row"},rt={class:"col-5 form-item mb-16"},ut={class:"col-5 form-item mb-16"},ct={class:"row"},mt={class:"form-item mb-16"},pt={key:0,class:"err-msg"},vt={class:"form-item mb-16"},_t={key:0,class:"err-msg"},ft={class:"row"},ht={class:"col-5 form-item mb-16"},gt={key:0,class:"err-msg"},bt={class:"col-5 form-item mb-16"},yt={key:0,class:"err-msg"},Vt={class:"form-item mb-16"},Pt={key:0,class:"err-msg"},St={class:"two-inputs"},kt={class:"col-5 form-item mb-16"},Mt={class:"dr-input"},wt=t("div",{class:"dr-tag"},"Dr",-1),xt={key:0,class:"err-msg"},Ot={class:"col-5 form-item mb-16"},At={key:0,class:"err-msg"},Ut=t("div",{class:"save-btn flex justify-end"},[t("button",{type:"submit",class:"btn black-btn w-10-r"},"Add")],-1),$t={__name:"Patients",setup(Ct){const h=ie(),g=d(()=>h.state.Patients);d(()=>h.state.Auth),d(()=>h.state.Agora);const e=de({submit:!1,limit:10,offset:0,keyword:"",confirmModal:!1,addModal:!1,prefix:"",gender:"MALE",blood:"",state:"",city:"",speciality:"",language:"",name:null,dob:null,phone:null,email:null,address:null,doctor:null,maritalStatus:null,activityLevel:null,smoking:null,alcohol:null,cPage:1}),$=[{id:1,name:"Option1"},{id:2,name:"Option2"}],F=[{id:1,name:"Option1"},{id:2,name:"Option2"}],I=[{id:1,name:"Option1"},{id:2,name:"Option2"}],H=[{id:1,name:"Option1"},{id:2,name:"Option2"}],T=[{name:"MALE",id:"MALE"},{name:"FEMALE",id:"FEMALE"},{name:"OTHER",id:"OTHER"}],z=[{name:"Mr.",id:"mr"},{name:"Mrs.",id:"mrs"}],R=[{name:"A+",id:"a+"},{name:"B+",id:"b+"},{name:"O+",id:"o+"},{name:"AB+",id:"ab+"},{name:"A-",id:"a-"},{name:"B-",id:"b-"},{name:"O-",id:"o-"},{name:"AB-",id:"ab-"}],G=[{name:"Married",id:"1"},{name:"Unmarried",id:"2"}],K=[{name:"regular",id:"1"},{name:"never",id:"2"}],j=[{name:"Yes",id:"1"},{name:"No",id:"2"}],q=[{name:"Yes",id:"1"},{name:"No",id:"2"}];re(()=>{b(e.limit,e.offset,e.keyword,e.cPage)});function b(l,o,p,y){h.dispatch("Patients/getPatients",{limit:l,offset:o,keyword:p,cPage:y})}function J(l){l.length>2?b(e.limit,e.offset,l,e.cPage):l.length<=0&&b(e.limit,e.offset,e.keyword,e.cPage)}const Q=l=>{e.cPage=l,e.offset=e.limit*(l-1),b(e.limit,e.offset,e.keyword,e.cPage)},W=()=>{if(S.value||M.value||U.value||k.value||w.value||x.value||O.value||D.value||N.value||L.value||A.value||C.value||E.value){e.submit=!0;return}e.submit=!1,h.dispatch("Auth/verifyUser",{userId:10563543453,password:4532453})};function X(l){return P(l).format("MMM Do YY, hh:mm A")}const c=l=>{};function Z(){return P().format("YYYY-MM-DD")}function ee(l){if(l){const o=P(),p=P(l);return`${o.diff(p,"years")}Y`}return"Not Mentioned"}const te=d(()=>{e.dob&&ee(e.dob)});function oe(l,o,p){_e.push({path:l,query:{id:o,aid:p}})}const S=d(()=>{if(!e.name)return"Enter patient name!"}),k=d(()=>{if(!e.dob)return"Select dob!"}),M=d(()=>{if(!e.prefix)return"Select prefix!"}),w=d(()=>{if(!e.blood)return"Select blood group!"}),x=d(()=>{let l=/^[6-9][0-9]{9}$/;if(e.phone){if(!l.test(e.phone))return"Please enter valid phone no!"}else return"Please enter phone no!"}),O=d(()=>{let l=/^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/;if(e.email){if(!l.test(e.email))return"Please enter valid email!"}else return"Please enter your email!"}),A=d(()=>{if(!e.doctor)return"Please enter doctor!"}),U=d(()=>{if(!e.gender)return"Please select gender!"}),C=d(()=>{if(!e.speciality)return"Please select speciality!"}),E=d(()=>{if(!e.language)return"Please select language!"}),D=d(()=>{if(!e.address)return"Please enter address!"}),N=d(()=>{if(!e.state)return"Please select state!"}),L=d(()=>{if(!e.city)return"Please select city!"});function se(l){let o=String.fromCharCode(l.keyCode);if(/^[0-9]+$/.test(o))return!0;l.preventDefault()}return(l,o)=>{const p=f("router-link"),y=f("Pagination"),Y=f("Modal"),le=f("icon-cross"),m=f("SingleSelect"),ne=f("Select");return a(),i("section",fe,[t("div",he,[t("div",ge,[t("div",be,[ye,t("div",Ve,[t("div",Pe,[t("input",{type:"text",placeholder:"Search Patients",onKeyup:o[0]||(o[0]=s=>J(s.target.value))},null,32),Se])])]),t("div",ke,[t("div",Me,[t("table",we,[xe,t("tbody",null,[(a(!0),i(ue,null,ce(g.value.patientsData,(s,ae)=>(a(),i("tr",{key:s},[t("td",null,n(ae+1),1),t("td",null,n(s.pid),1),t("td",null,n(s.firstName)+" "+n(s.middleName)+" "+n(s.lastName),1),t("td",null,n(s.mobile),1),t("td",null,n(s.email),1),t("td",null,n(s.gender),1),t("td",null,n(X(s.createdAt)),1),t("td",Oe,[t("div",Ae,[r(p,{to:"",class:"action-icon",onClick:Et=>oe("/patient/profile",s.id,s.accountId)},{default:V(()=>[Ue,Ce]),_:2},1032,["onClick"])])])]))),128))])])]),g.value.patientsData.length<=0?(a(),i("div",Ee,Ne)):u("",!0),g.value.patientsData.length>0?(a(),i("div",Le,[r(y,{currentPage:e.cPage,totalItem:g.value.totalPatients,itemsPerPage:e.limit,"onUpdate:currentPage":o[1]||(o[1]=s=>Q(s))},null,8,["currentPage","totalItem","itemsPerPage"])])):u("",!0)])])]),r(Y,{show:e.confirmModal,"onUpdate:show":o[3]||(o[3]=s=>e.confirmModal=s),class:"confirm-modal"},{default:V(()=>[Be,t("div",Ye,[t("button",{class:"btn grey-btn cancel-btn",onClick:o[2]||(o[2]=B(s=>e.confirmModal=!1,["prevent"]))}," Cancel "),$e])]),_:1},8,["show"]),r(Y,{show:e.addModal,"onUpdate:show":o[24]||(o[24]=s=>e.addModal=s),class:"mid-modal",headerClasses:"header-bg"},{header:V(()=>[Fe,t("div",{class:"close-btn",onClick:o[4]||(o[4]=B(s=>e.addModal=!1,["prevent"]))},[r(le)])]),default:V(()=>[t("form",{action:"",class:"form",onSubmit:B(W,["prevent"])},[t("div",Ie,[t("div",He,[r(m,{modelValue:e.prefix,"onUpdate:modelValue":o[5]||(o[5]=s=>e.prefix=s),options:z,onSelected:c,placeholder:"Select Prefix"},null,8,["modelValue"]),e.submit&&M.value?(a(),i("div",Te,n(M.value),1)):u("",!0)]),t("div",ze,[v(t("input",{type:"text","onUpdate:modelValue":o[6]||(o[6]=s=>e.name=s),placeholder:"Patient Name"},null,512),[[_,e.name]]),e.submit&&S.value?(a(),i("div",Re,n(S.value),1)):u("",!0)])]),t("div",Ge,[t("div",Ke,[r(ne,{modelValue:e.gender,"onUpdate:modelValue":o[7]||(o[7]=s=>e.gender=s),options:T},null,8,["modelValue"]),e.submit&&U.value?(a(),i("div",je,n(U.value),1)):u("",!0)]),t("div",qe,[t("div",Je,[v(t("input",{type:"date","onUpdate:modelValue":o[8]||(o[8]=s=>e.dob=s),max:Z()},null,8,Qe),[[_,e.dob]]),We]),t("div",null,n(te.value),1),e.submit&&k.value?(a(),i("div",Xe,n(k.value),1)):u("",!0)]),t("div",Ze,[v(t("input",{type:"text","onUpdate:modelValue":o[9]||(o[9]=s=>e.age=s),class:"bg-blue",disabled:""},null,512),[[_,e.age]])])]),t("div",et,[t("div",tt,[r(m,{modelValue:e.blood,"onUpdate:modelValue":o[10]||(o[10]=s=>e.blood=s),options:R,onSelected:c,placeholder:"Select Blood Group"},null,8,["modelValue"]),e.submit&&w.value?(a(),i("div",ot,n(w.value),1)):u("",!0)]),t("div",st,[r(m,{modelValue:e.language,"onUpdate:modelValue":o[11]||(o[11]=s=>e.language=s),options:I,onSelected:c,placeholder:"Select Language"},null,8,["modelValue"]),e.submit&&E.value?(a(),i("div",lt,n(E.value),1)):u("",!0)])]),t("div",nt,[t("div",at,[r(m,{modelValue:e.maritalStatus,"onUpdate:modelValue":o[12]||(o[12]=s=>e.maritalStatus=s),options:G,onSelected:c,placeholder:"Marital Status"},null,8,["modelValue"])]),t("div",it,[r(m,{modelValue:e.activityLevel,"onUpdate:modelValue":o[13]||(o[13]=s=>e.activityLevel=s),options:K,onSelected:c,placeholder:"Activity Level"},null,8,["modelValue"])])]),t("div",dt,[t("div",rt,[r(m,{modelValue:e.smoking,"onUpdate:modelValue":o[14]||(o[14]=s=>e.smoking=s),options:q,onSelected:c,placeholder:"Smoking Habit"},null,8,["modelValue"])]),t("div",ut,[r(m,{modelValue:e.alcohol,"onUpdate:modelValue":o[15]||(o[15]=s=>e.alcohol=s),options:j,onSelected:c,placeholder:"Alcohol Consumption"},null,8,["modelValue"])])]),t("div",ct,[t("div",mt,[v(t("input",{type:"text","onUpdate:modelValue":o[16]||(o[16]=s=>e.phone=s),placeholder:"Enter Phone no",onKeypress:o[17]||(o[17]=s=>se(s)),maxlength:"10"},null,544),[[_,e.phone]]),e.submit&&x.value?(a(),i("div",pt,n(x.value),1)):u("",!0)]),t("div",vt,[v(t("input",{type:"text","onUpdate:modelValue":o[18]||(o[18]=s=>e.email=s),placeholder:"Enter Email"},null,512),[[_,e.email]]),e.submit&&O.value?(a(),i("div",_t,n(O.value),1)):u("",!0)])]),t("div",ft,[t("div",ht,[r(m,{modelValue:e.state,"onUpdate:modelValue":o[19]||(o[19]=s=>e.state=s),options:$,onSelected:c,placeholder:"Select State"},null,8,["modelValue"]),e.submit&&N.value?(a(),i("div",gt,n(N.value),1)):u("",!0)]),t("div",bt,[r(m,{modelValue:e.city,"onUpdate:modelValue":o[20]||(o[20]=s=>e.city=s),options:F,onSelected:c,placeholder:"Select City"},null,8,["modelValue"]),e.submit&&L.value?(a(),i("div",yt,n(L.value),1)):u("",!0)])]),t("div",Vt,[v(t("textarea",{type:"text","onUpdate:modelValue":o[21]||(o[21]=s=>e.address=s),placeholder:"Enter Address"},null,512),[[_,e.address]]),e.submit&&D.value?(a(),i("div",Pt,n(D.value),1)):u("",!0)]),t("div",St,[t("div",kt,[t("div",Mt,[wt,v(t("input",{type:"text","onUpdate:modelValue":o[22]||(o[22]=s=>e.doctor=s),placeholder:"Refered by"},null,512),[[_,e.doctor]])]),e.submit&&A.value?(a(),i("div",xt,n(A.value),1)):u("",!0)]),t("div",Ot,[r(m,{modelValue:e.speciality,"onUpdate:modelValue":o[23]||(o[23]=s=>e.speciality=s),options:H,onSelected:c,placeholder:"Select Speciality"},null,8,["modelValue"]),e.submit&&C.value?(a(),i("div",At,n(C.value),1)):u("",!0)])]),Ut],32)]),_:1},8,["show"])])}}};export{$t as default};
