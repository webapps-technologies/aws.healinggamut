import{u as et,B as st,C as ot,c as k,v as it,D as at,r as y,o as l,a as c,b as t,t as n,g as H,d as b,w,e as nt,F as N,E as R,f as v,z as lt,m as I}from"./vendor-5e5c4e37.js";import{_ as F}from"./microscope2-8ae241b5.js";const ct="/assets/file2-77620a7b.png",dt="/assets/pdf-9a42c0fc.png",rt="/assets/no-image2-2ab3dc4f.png",_t="/assets/payments-f770fece.png",ut={class:"total-visits-page"},vt={class:"container"},pt={class:"name-card-header mb-16"},ht={class:"top-details"},mt={class:"left"},ft={class:"top"},gt={class:"name grade-text"},kt={class:"id"},yt={class:"options"},bt={class:"option"},wt=t("img",{src:F,alt:"image"},null,-1),It=[wt],Dt=t("div",{class:"text"},"Consult",-1),Ct=t("div",{class:"img grade-btn"},[t("img",{src:F,alt:"image"})],-1),Nt=t("div",{class:"text"},"Helth Locker",-1),Ft=[Ct,Nt],Mt=t("div",{class:"img grade-btn"},[t("img",{src:F,alt:"image"})],-1),Tt=t("div",{class:"text"},"Test",-1),At={key:0},Pt=t("button",{class:"btn grade-btn"},"Upload Documents",-1),Lt=[Pt],Yt=t("button",{class:"btn grade-btn"},"New Prescription",-1),xt={class:"bottom-details"},Et={class:"row"},St={class:"data col-5 mb-16"},Vt=t("div",{class:"title"},"Gender :",-1),Bt={class:"val"},$t={class:"data col-5 mb-16"},qt=t("div",{class:"title"},"Age :",-1),Ht={class:"val"},Rt={class:"row"},Ot={class:"data col-5 mb-16"},Ut=t("div",{class:"title"},"Mobile No :",-1),zt={class:"val"},Gt={class:"data col-5 mb-16"},Kt=t("div",{class:"title"},"Email :",-1),jt={class:"val"},Jt={class:"row"},Qt={class:"data col-5 mb-16"},Wt=t("div",{class:"title"},"Date & Time :",-1),Xt={class:"val"},Zt={class:"data col-5 mb-16"},te=t("div",{class:"title"},"Mode :",-1),ee={class:"val"},se={class:"row"},oe={class:"data col-5 mb-16"},ie=t("div",{class:"title"},"Type :",-1),ae={class:"val"},ne={class:"data col-5 mb-16"},le=t("div",{class:"title"},"Status :",-1),ce={class:"val"},de={class:"row"},re={class:"data col-5 mb-16"},_e=t("div",{class:"title"},"Token :",-1),ue={class:"val"},ve={class:"data col-5 mb-16"},pe=t("div",{class:"title"},"Payment :",-1),he={class:"val"},me={class:"visit-section"},fe={key:0,class:"file-list"},ge=["onClick"],ke=t("img",{src:ct,alt:""},null,-1),ye=[ke],be={class:"bottom"},we={class:"title"},Ie={key:1,class:"top-btn-row mb-16"},De={class:"fileHeading"},Ce={key:2,class:"top-btn-row mb-16"},Ne={class:"fileHeading"},Fe={key:3,class:"file-list"},Me={key:0,class:"img"},Te={key:0},Ae=["onClick"],Pe=["src"],Le=["href"],Ye=t("img",{class:"doc-img",src:dt,alt:""},null,-1),xe=[Ye],Ee={key:1,class:"img"},Se=t("img",{class:"doc-img",src:rt,alt:""},null,-1),Ve=[Se],Be={class:"bottom"},$e={class:"title"},qe={key:4,class:"no-data-found"},He=t("div",{class:"img"},[t("img",{src:_t,alt:""})],-1),Re=t("div",{class:"text"},"You do not have any Medical Doucoment!",-1),Oe=[He,Re],Ue=t("div",{class:"title",showHeader:"true"},"Documents",-1),ze={class:"d-body"},Ge={key:0,class:"img"},Ke=["src"],We={__name:"E_Helth_Locker",setup(je){const r=et(),h=st(),M=ot(),O=k(()=>r.state.Agora),a=k(()=>r.state.Prescription),m=k(()=>r.state.Auth),D=k(()=>r.state.E_Locker),e=it({limit:10,offset:0,keyword:"",id:null,appointmentId:null,userAccountId:null,docType:"Folder",folderId:null,folderName:null,previewImgLink:null,openPreview:!1,roles:null});at(()=>{h.query.pid&&(document.addEventListener("keyup",o=>{o.key=="PrintScreen"&&(navigator.clipboard.writeText(""),alert("Screenshots disabled!"))}),document.addEventListener("keydown",o=>{o.ctrlKey&&o.key=="p"&&(alert("This section is not allowed to print or export to PDF"),o.cancelBubble=!0,o.preventDefault(),o.stopImmediatePropagation())}),e.roles=localStorage.getItem("roles"),e.id=h.query.pid,e.appointmentId=h.query.aid,e.userAccountId=h.query.accountId,U(e.limit,e.offset,e.keyword,e.userAccountId),z(e.id,e.limit,e.offset,e.keyword,e.appointmentId))});function U(o,s,d,_){r.dispatch("E_Locker/getMyUserFolder",{limit:o,offset:s,keyword:d,id:_})}function z(o,s,d,_,p){r.dispatch("Prescription/getPrescription",{id:o,limit:s,offset:d,keyword:_,appointmentId:p})}function G(o){if(o){const s=I(),d=I(o);return`${s.diff(d,"years")}`}return"Not Mentioned"}function K(){return I().format("YYYY-MM-DD")}function T(o,s,d){M.push({path:o,query:{pid:s,aid:d}})}const j=async(o,s,d,_,p,C,f)=>{O.value.callModal=!0,await r.dispatch("Agora/connectCall",{callFrom:"DOCTOR",channel:null,callerName:s,doctorDetailId:d,callerAccountId:_,franchiseId:null,callerPhone:p,token:null,receiverAccountId:o,appointmentId:C,userName:f})};function J(o){const s=o.target.files[0];s&&r.dispatch("E_Locker/createFiles",{file:s,folderId:e.folderId,userId:e.userAccountId})}function Q(o,s){e.folderId=o,e.docType="Files",e.folderName=s,r.dispatch("E_Locker/getMyUserFiles",{limit:e.limit,offset:e.offset,keyword:e.keyword,folderId:e.folderId,id:e.userAccountId})}function W(){e.folderId=null,e.docType="Folder",e.folderName=null}function X(o,s,d,_){a.value.lockerStatus==="YES"?M.push({path:o,query:{pid:s,aid:d,accountId:_}}):r.dispatch("Alert/error",{msg:"Not Allow"})}function Z(o){e.previewImgLink=o,e.openPreview=!0}function A(o){return o.split(".")[1]}function tt(o){if(o)return I(o).subtract({hours:4,minutes:30}).format("MMM Do YYYY, h:mm A")}return(o,s)=>{var f,P,L,Y,x,E,S,V,B,$;const d=y("router-link"),_=y("icon-back"),p=y("icon-cross"),C=y("Modal");return l(),c(N,null,[t("section",ut,[t("div",vt,[t("div",pt,[t("div",ht,[t("div",mt,[t("div",ft,[t("h3",gt,n((f=a.value.patientDetail)==null?void 0:f.firstName)+" "+n((P=a.value.patientDetail)==null?void 0:P.lastName),1),t("div",kt,"("+n((L=a.value.patientDetail)==null?void 0:L.pid)+")",1)])]),t("div",yt,[t("a",bt,[t("div",{class:"img grade-btn",onClick:s[0]||(s[0]=H(i=>{var u,g,q;return j((u=a.value.patientDetail)==null?void 0:u.accountId,m.value.name,m.value.id,m.value.accountId,m.value.mobile,e.appointmentId,((g=a.value.patientDetail)==null?void 0:g.firstName)+((q=a.value.patientDetail)==null?void 0:q.lastName))},["prevent"]))},It),Dt]),t("a",{class:"option",onClick:s[1]||(s[1]=i=>{var u;return X("/e-locker",e.id,e.appointmentId,(u=a.value.patientDetail)==null?void 0:u.accountId)})},Ft),b(d,{to:"/patient/appointment",class:"option"},{default:w(()=>[Mt,Tt]),_:1}),a.value.roles==="LABORATORY"?(l(),c("div",At,Lt)):(l(),nt(d,{key:1,to:"",onClick:s[2]||(s[2]=i=>T("/new-prescription",e.id,e.appointmentId))},{default:w(()=>[Yt]),_:1})),t("div",{class:"visit-btn btn",onClick:s[3]||(s[3]=i=>T("/visit-summary",e.id,e.appointmentId))},[t("h5",null,n((Y=a.value.prescriptionData)==null?void 0:Y.length)+" Visits",1),t("span",null,"Since "+n(K()),1)])])]),t("div",xt,[t("div",Et,[t("div",St,[Vt,t("div",Bt,n((x=a.value.patientDetail)==null?void 0:x.gender),1)]),t("div",$t,[qt,t("div",Ht,n(G((E=a.value.patientDetail)==null?void 0:E.dob))+" Years",1)])]),t("div",Rt,[t("div",Ot,[Ut,t("div",zt,"+91 "+n((S=a.value.patientDetail)==null?void 0:S.mobile),1)]),t("div",Gt,[Kt,t("div",jt,n((V=a.value.patientDetail)==null?void 0:V.email),1)])]),t("div",Jt,[t("div",Qt,[Wt,t("div",Xt,n(tt(a.value.scheduleOn)),1)]),t("div",Zt,[te,t("div",ee,n(a.value.mode),1)])]),t("div",se,[t("div",oe,[ie,t("div",ae,n(a.value.type),1)]),t("div",ne,[le,t("div",ce,n(a.value.status),1)])]),t("div",de,[t("div",re,[_e,t("div",ue,n(a.value.appointmentId),1)]),t("div",ve,[pe,t("div",he,n((B=a.value.paymentHistory)==null?void 0:B.status),1)])])])]),t("div",me,[e.docType==="Folder"?(l(),c("div",fe,[(l(!0),c(N,null,R(D.value.data,(i,u)=>(l(),c("div",{class:"file",key:u},[t("div",{class:"img",onClick:g=>Q(i.id,i.name)},ye,8,ge),t("div",be,[t("div",we,n(i.name),1)])]))),128))])):v("",!0),e.docType==="Files"?(l(),c("div",Ie,[t("div",De,[b(_,{onClick:s[4]||(s[4]=i=>W())}),lt(" Medical Records Files "+n("> "+e.folderName),1)])])):v("",!0),e.docType==="Files"?(l(),c("div",Ce,[t("div",Ne,[t("input",{type:"file",name:"",id:"",onChange:s[5]||(s[5]=i=>J(i))},null,32)])])):v("",!0),e.docType==="Files"?(l(),c("div",Fe,[(l(!0),c(N,null,R(D.value.filesData,(i,u)=>(l(),c("div",{class:"file",key:u},[i.file?(l(),c("div",Me,[A(i.filePath)==="webp"?(l(),c("div",Te,[t("span",{onClick:g=>Z(i.file)},[t("img",{class:"doc-img",src:i.file,alt:""},null,8,Pe)],8,Ae)])):v("",!0),A(i.filePath)==="pdf"?(l(),c("a",{key:1,href:i.file,target:"_blank",rel:"noopener noreferrer"},xe,8,Le)):v("",!0)])):(l(),c("div",Ee,Ve)),t("div",Be,[t("div",$e,n(i.fileName),1)])]))),128))])):v("",!0),(($=D.value.filesData)==null?void 0:$.length)<=0&&e.docType==="Files"?(l(),c("div",qe,Oe)):v("",!0)])])]),b(C,{show:e.openPreview,"onUpdate:show":s[7]||(s[7]=i=>e.openPreview=i),class:"image-view-modal",headerClasses:"header-bg"},{header:w(()=>[Ue,t("div",{class:"close-btn",onClick:s[6]||(s[6]=H(i=>e.openPreview=!1,["prevent"]))},[b(p)])]),default:w(()=>[t("div",ze,[e.previewImgLink?(l(),c("div",Ge,[t("img",{src:e.previewImgLink,alt:""},null,8,Ke)])):v("",!0)])]),_:1},8,["show"])],64)}}};export{We as default};
