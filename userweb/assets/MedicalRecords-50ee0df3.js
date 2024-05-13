import{u as E,q as L,m as V,c as _,r as x,n as D,a as p,N as B,o as l,b as n,d as o,F as R,k as $,e as u,w as m,g as d,t as v,h,v as U,i as q}from"./index-477b0694.js";const S="/assets/file-77620a7b.png",A={class:"medical-record-page"},H={class:"medical-record-content"},O=o("div",{class:"top-btn-row mb-16"},[o("h3",null,"Medical Records")],-1),P={class:"file-list"},T=["onClick"],j=o("img",{src:S,alt:""},null,-1),z=[j],G={class:"bottom"},I={class:"title"},J={class:"option-btn"},K=o("div",{class:"float-card"},null,-1),Q=[K],W=o("div",{class:"title",showHeader:"true"},"Create Folder",-1),X={action:"",class:"form"},Y={class:"middle-content"},Z={class:"input-list"},ee={class:"form-item mb-16"},oe={key:0,class:"err-msg"},te={class:"save-btn"},se=o("h4",null," Are you sure want to Delete ",-1),ae={class:"btns"},ie={__name:"MedicalRecords",setup(le){const a=E();L();const b=V(),k=_(()=>a.state.E_Locker),e=x({downloadModal:!1,limit:10,offset:0,keyword:"",cPage:1,folderName:null,optionCard:!1,uploadModal:!1,editmode:!1,submit:!1,id:null});D(()=>{M(e.limit,e.offset,e.keyword)});function M(i,t,c){a.dispatch("E_Locker/getMyFolder",{limit:i,offset:t,keyword:c})}function C(){if(r.value){e.submit=!0;return}e.submit=!1,e.editmode?(a.dispatch("E_Locker/updateFolder",{id:e.id,name:e.folderName}),e.uploadModal=!1):(a.dispatch("E_Locker/createFolder",{name:e.folderName}),e.uploadModal=!1)}const w=()=>{e.optionCard=!1};function g(){a.dispatch("E_Locker/deleteFolder",{id:e.id}),e.confirmModal=!1}function y(i,t){b.push({path:i,query:{id:t}})}const r=_(()=>{if(!e.folderName)return"Enter folder name!"});return(i,t)=>{const c=p("icon-cross"),f=p("Modal"),N=B("click-outside");return l(),n("section",A,[o("div",H,[O,o("div",P,[(l(!0),n(R,null,$(k.value.data,(s,F)=>(l(),n("div",{class:"file",key:F},[o("div",{class:"img",onClick:d(ne=>y("/medical-record-files",s.id),["prevent"])},z,8,T),o("div",G,[o("div",I,v(s.name),1),h((l(),n("div",J,Q)),[[N,w]])])]))),128))])]),u(f,{show:e.uploadModal,"onUpdate:show":t[3]||(t[3]=s=>e.uploadModal=s),class:"upload-modall",headerClasses:"header-bg"},{header:m(()=>[W,o("div",{class:"close-btn",onClick:t[0]||(t[0]=d(s=>e.uploadModal=!1,["prevent"]))},[u(c)])]),default:m(()=>[o("form",X,[o("div",Y,[o("div",Z,[o("div",ee,[h(o("input",{type:"text",placeholder:"Name of Folder","onUpdate:modelValue":t[1]||(t[1]=s=>e.folderName=s)},null,512),[[U,e.folderName]]),e.submit&&r.value?(l(),n("div",oe,v(r.value),1)):q("",!0)])])]),o("div",te,[o("button",{class:"btn primary-btn",type:"button",onClick:t[2]||(t[2]=d(s=>C(),["prevent"]))},"Create")])])]),_:1},8,["show"]),u(f,{show:e.confirmModal,"onUpdate:show":t[5]||(t[5]=s=>e.confirmModal=s),class:"confirm-modal"},{default:m(()=>[se,o("div",ae,[o("button",{class:"btn grey-btn cancel-btn",onClick:t[4]||(t[4]=d(s=>e.confirmModal=!1,["prevent"]))},"Cancel"),o("button",{class:"btn confirm-btn",onClick:d(g,["prevent"])},"Confirm")])]),_:1},8,["show"])])}}};export{ie as default};
