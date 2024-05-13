import{e as H,c as R,z as W,j as u,k as r,l as m,y as t,m as o,A as d,u as C,H as p,F as M,I as j,E as N,q as _,L as f,B as k,x as v}from"./@vue-bQO0P59g.js";import{G as Y,W as J,a6 as K}from"./@mdi-CZk6uuAL.js";import{b as Q}from"./vue-router-D5J0r3Gc.js";import{u as X}from"./vuex-DHdsu8jA.js";const Z={class:"grid grid-cols-1 lg:grid-cols-1 gap-6"},w={class:"border-b"},ee={class:"border-transparent"},te={class:"flex justify-between items-center p-2 pl-2 pr-8 cursor-pointer select-none bg-gray-100"},le={class:"text-grey-darkest font-bold"},oe={class:"grid grid-cols-1 lg:grid-cols-2"},ie={class:"checkbox font-semibold"},ne=["onUpdate:modelValue"],se=t("span",{class:"check"},null,-1),de={key:0,class:"border-b"},ae={class:"flex flex-row"},ce={class:"grid grid-cols-1 lg:grid-cols-1 mb-5"},ue={class:"flex justify-end"},re={"wrap-body":""},me={class:"grid grid-cols-1 lg:grid-cols-3 pt-2"},pe={key:0,class:"checkbox text-xs font-semibold"},_e=["onUpdate:modelValue"],fe=t("span",{class:"check h-2 w-2"},null,-1),be={key:1,class:"checkbox text-xs font-semibold"},he=["onUpdate:modelValue"],ge=t("span",{class:"check"},null,-1),Ve={key:2,class:"checkbox text-xs font-semibold"},ke=["onUpdate:modelValue"],xe=t("span",{class:"check"},null,-1),ye={class:"grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5"},Se={class:"grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5"},ve={class:"grid grid-cols-1 lg:grid-cols-3 pt-2"},Ue={class:"checkbox text-xs font-semibold"},De=t("span",{class:"check h-2 w-2"},null,-1),Ce={class:"checkbox text-xs font-semibold"},Me=t("span",{class:"check"},null,-1),Le={class:"checkbox text-xs font-semibold"},ze=t("span",{class:"check"},null,-1),Ie={class:"grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5"},Oe={class:"grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5"},Te=t("div",{class:"text-center pb-5"},[t("h2",{class:"text-lg text-red-500"}," Are you sure you want to delete this Schedule? ")],-1),Ae={__name:"Schedule",setup(je){const x=X(),L=Q(),y=H(()=>x.state.Doctor),z=[{id:"5",label:"5"},{id:"10",label:"10"},{id:"15",label:"15"},{id:"20",label:"20"},{id:"25",label:"25"},{id:"30",label:"30"},{id:"35",label:"35"},{id:"40",label:"40"},{id:"45",label:"45"},{id:"50",label:"50"},{id:"55",label:"55"},{id:"60",label:"60"}],e=R({tab:1,weekTab:0,editMode:!1,scheduleSubmit:!1,cModal:!1,deleteModal:!1,id:null,doctorScheduleId:null,organization:null,online:!1,offline:!1,clinicVisitStatus:!1,time_start:"00:00",time_end:"00:00",timeDiff:z[0],patientLimit:0,periodId:null}),I=c=>c?"Organization ("+c.name+")":"Organization";W(()=>{O("")});const B=()=>{y.value.user.doctorSchedule.length>0&&L.query.id&&x.dispatch("Doctor/updateSchedule",{schedule:y.value.user.doctorSchedule,id:L.query.id})},O=c=>{x.dispatch("Doctor/getOrganization",{limit:10,offset:0,search:c,status:"ACTIVE"})};function E(c,i,S,b,a,h,U,g,V,D){e.cModal=!0,e.id=c,e.doctorScheduleId=i,e.organization=S,e.online=b,e.offline=a,e.clinicVisitStatus=h,e.time_start=U,e.time_end=g,e.timeDiff={id:V,label:V},e.patientLimit=D}async function $(){await x.dispatch("Doctor/updateSchedule",{periodId:e.id,clinicVisitStatus:e.clinicVisitStatus,online:e.online,offline:e.offline,time_start:e.time_start,time_end:e.time_end,timeDiff:e.timeDiff.id,patientLimit:e.patientLimit,doctorScheduleId:e.doctorScheduleId}),e.cModal=!1}const A=c=>{e.periodId=c,e.deleteModal=!0},q=()=>{e.periodId&&x.dispatch("Doctor/deleteSchedule",{id:e.periodId})};return(c,i)=>{const S=u("icon"),b=u("time-picker"),a=u("field"),h=u("control"),U=u("divider"),g=u("base-button"),V=u("base-buttons"),D=u("card-component"),P=u("search-select"),T=u("modal-box");return r(),m(M,null,[t("div",Z,[o(D,{title:"Schedule Detail",icon:C(K)},{default:d(()=>[(r(!0),m(M,null,j(y.value.user.doctorSchedule,(n,F)=>(r(),m("section",{class:"shadow",key:F},[t("article",w,[t("div",ee,[t("header",te,[t("span",le,N(n.name),1),t("div",oe,[t("label",ie,[_(t("input",{type:"checkbox","onUpdate:modelValue":l=>n.status=l},null,8,ne),[[f,n.status]]),se])])])])]),n.status?(r(),m("article",de,[t("div",ae,[(r(!0),m(M,null,j(n.period,(l,G)=>(r(),m("div",{class:"w-full border rounded m-1 p-4",key:G},[t("div",ce,[t("div",ue,[o(S,{path:C(Y),onClick:p(s=>E(l.id,l.doctorScheduleId,l.organization,l.online,l.offline,l.clinicVisitStatus,l.time_start,l.time_end,l.timeDiff,l.patientLimit),["prevent"])},null,8,["path","onClick"]),o(S,{path:C(J),onClick:p(s=>A(l.id),["prevent"])},null,8,["path","onClick"])]),t("label",re,N(I(l.organization)),1)]),t("div",me,[l.periodStatus?(r(),m("label",pe,[_(t("input",{type:"checkbox",class:"h-2 w-2","onUpdate:modelValue":s=>l.online=s,disabled:""},null,8,_e),[[f,l.online]]),fe,k("   Online ")])):v("",!0),l.periodStatus?(r(),m("label",be,[_(t("input",{type:"checkbox","onUpdate:modelValue":s=>l.offline=s,disabled:""},null,8,he),[[f,l.offline]]),ge,k("   Ofline ")])):v("",!0),l.periodStatus?(r(),m("label",Ve,[_(t("input",{type:"checkbox","onUpdate:modelValue":s=>l.clinicVisitStatus=s,disabled:""},null,8,ke),[[f,l.clinicVisitStatus]]),xe,k("   Clinic Visit ")])):v("",!0)]),t("div",ye,[o(a,{label:"Start Time"},{default:d(()=>[o(b,{modelValue:l.time_start,"onUpdate:modelValue":s=>l.time_start=s,disabled:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),o(a,{label:"End Time"},{default:d(()=>[o(b,{modelValue:l.time_end,"onUpdate:modelValue":s=>l.time_end=s,disabled:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),t("div",Se,[o(a,{label:"Time Diff"},{default:d(()=>[o(h,{modelValue:l.timeDiff,"onUpdate:modelValue":s=>l.timeDiff=s,type:"text",name:"timeDiff",disabled:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),o(a,{label:"Patient Limit"},{default:d(()=>[o(h,{modelValue:l.patientLimit,"onUpdate:modelValue":s=>l.patientLimit=s,type:"text",name:"patientLimit",disabled:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)])]))),128))])])):v("",!0)]))),128)),o(U),o(V,null,{default:d(()=>[o(g,{color:"themeColor",type:"button",label:"Submit",onClick:p(B,["prevent"])})]),_:1})]),_:1},8,["icon"])]),o(T,{modelValue:e.cModal,"onUpdate:modelValue":i[9]||(i[9]=n=>e.cModal=n),title:"Update Schedule",form:"",onSubmit:i[10]||(i[10]=p(n=>c.onSubmit(),["prevent"]))},{default:d(()=>[t("section",null,[o(a,{label:I(e.organization),"wrap-body":""},{default:d(()=>[o(P,{modelValue:e.organization,"onUpdate:modelValue":i[0]||(i[0]=n=>e.organization=n),options:y.value.organizations,onOnType:i[1]||(i[1]=n=>O(n))},null,8,["modelValue","options"])]),_:1},8,["label"]),t("div",ve,[t("label",Ue,[_(t("input",{type:"checkbox",class:"h-2 w-2","onUpdate:modelValue":i[2]||(i[2]=n=>e.online=n)},null,512),[[f,e.online]]),De,k("   Online ")]),t("label",Ce,[_(t("input",{type:"checkbox","onUpdate:modelValue":i[3]||(i[3]=n=>e.offline=n)},null,512),[[f,e.offline]]),Me,k("   Ofline ")]),t("label",Le,[_(t("input",{type:"checkbox","onUpdate:modelValue":i[4]||(i[4]=n=>e.clinicVisitStatus=n)},null,512),[[f,e.clinicVisitStatus]]),ze,k("   Clinic Visit ")])]),t("div",Ie,[o(a,{label:"Start Time"},{default:d(()=>[o(b,{modelValue:e.time_start,"onUpdate:modelValue":i[5]||(i[5]=n=>e.time_start=n)},null,8,["modelValue"])]),_:1}),o(a,{label:"End Time"},{default:d(()=>[o(b,{modelValue:e.time_end,"onUpdate:modelValue":i[6]||(i[6]=n=>e.time_end=n)},null,8,["modelValue"])]),_:1})]),t("div",Oe,[o(a,{label:"Time Diff"},{default:d(()=>[o(h,{modelValue:e.timeDiff,"onUpdate:modelValue":i[7]||(i[7]=n=>e.timeDiff=n),options:z},null,8,["modelValue"])]),_:1}),o(a,{label:"Patient Limit"},{default:d(()=>[o(h,{modelValue:e.patientLimit,"onUpdate:modelValue":i[8]||(i[8]=n=>e.patientLimit=n),type:"text",name:"patientLimit"},null,8,["modelValue"])]),_:1})]),o(V,{type:"justify-center lg:justify-center pt-5"},{default:d(()=>[o(g,{type:"button",color:"themeColor",small:"",label:"Submit",onClick:p($,["prevent"]),effect:""})]),_:1})])]),_:1},8,["modelValue"]),o(T,{modelValue:e.deleteModal,"onUpdate:modelValue":i[13]||(i[13]=n=>e.deleteModal=n),title:"Delete Schedule"},{default:d(()=>[t("section",null,[Te,o(V,{type:"justify-center lg:justify-center pt-5"},{default:d(()=>[o(g,{type:"button",color:"danger",small:"",label:"Yes",onClick:i[11]||(i[11]=p(n=>q(),["prevent"]))}),o(g,{type:"button",color:"info",small:"",label:"No",onClick:i[12]||(i[12]=p(n=>y.value.deleteModal=!1,["prevent"]))})]),_:1})])]),_:1},8,["modelValue"])],64)}}};export{Ae as default};
