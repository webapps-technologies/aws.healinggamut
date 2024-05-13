import{u as C,c as u,v as A,o as s,a as o,b as t,x as r,y as d,t as c,f as i,F as x,E as V}from"./vendor-5e5c4e37.js";import{_ as w}from"./edit-icon-6e27bb0f.js";const D={class:"doctor-education-details"},F={action:"",class:"form mb-16"},S={class:"two-inputs"},P={class:"form-item col-5 mb-16"},E=t("div",{class:"title"},"Bank Name",-1),I={key:0,class:"err-msg"},U={class:"form-item col-5 mb-16"},M=t("div",{class:"title"},"Branch Name",-1),H={key:0,class:"err-msg"},$={class:"form-item col-5 mb-16"},K=t("div",{class:"title"},"IFSC",-1),L={key:0,class:"err-msg"},Z={class:"two-inputs"},j={class:"form-item col-5 mb-16"},q=t("div",{class:"title"},"Holder Name",-1),T={key:0,class:"err-msg"},Y={class:"form-item col-5 mb-16"},z=t("div",{class:"title"},"Account Number",-1),G={key:0,class:"err-msg"},J={class:"save-btn flex justify-start"},O={class:"table-outer w-100"},Q={class:"table"},R=t("thead",null,[t("th",null,"Sl no"),t("th",null,"Bank Name"),t("th",null,"Account Number"),t("th",null,"Holder Name"),t("th",null,"Branch Name"),t("th",null,"IFSC"),t("th",null,"Action")],-1),W={class:"text-center"},X={class:"option-btns"},ee=["onClick"],te=t("img",{src:w,alt:""},null,-1),le=t("div",{class:"tooltip"},"Edit",-1),ae=[te,le],ne={key:0,class:"table-no-data"},se=t("div",null,"No records Found!",-1),oe=[se],de={__name:"BankDetails",setup(ce){const m=C(),v=u(()=>m.state.Auth);u(()=>m.state.BankDetails);const e=A({submit:!1,addDocModal:!1,qualification:null,college:null,city:null,passingYear:null,imagePreview:null,docFile:null,eduId:null,previewImgLink:null,openPreview:!1,editmode:!1,id:null,bankName:null,branchName:null,holderName:null,accountNumber:null,ifsc:null});function p(){if(b.value||N.value||_.value||h.value||f.value){e.submit=!0;return}e.submit=!1,e.editmode?(m.dispatch("BankDetails/editBankAccount",{id:e.id,bankName:e.bankName,branchName:e.branchName,holderName:e.holderName,accountNumber:e.accountNumber,ifsc:e.ifsc}),e.addModal=!1):(m.dispatch("BankDetails/addBankAccount",{bankName:e.bankName,branchName:e.branchName,holderName:e.holderName,accountNumber:e.accountNumber,ifsc:e.ifsc}),e.addModal=!1,e.editmode=!1,e.id=null,e.bankName=null,e.branchName=null,e.holderName=null,e.accountNumber=null,e.ifsc=null)}function g(n){e.editmode=!0,e.id=n.id,e.bankName=n.bankName,e.branchName=n.branchName,e.holderName=n.holderName,e.accountNumber=n.accountNumber,e.ifsc=n.ifsc,e.addModal=!0}const b=u(()=>{if(!e.bankName)return"Please bank name!"}),h=u(()=>{if(!e.holderName)return"Please holder name!"}),N=u(()=>{let n=/^[0-9]{9,18}$/;if(e.accountNumber){if(!n.test(e.accountNumber))return"Enter valid account number."}else return"Please account number!"}),_=u(()=>{if(!e.branchName)return"Please branch name!"}),f=u(()=>{let n=/^[A-Z]{4}0[A-Z0-9]{6}$/;if(e.ifsc){if(!n.test(e.ifsc))return"Enter valid IFSC code."}else return"Please ifsc code!"});function B(n){let a=String.fromCharCode(n.keyCode);if(/^[0-9]+$/.test(a))return!0;n.preventDefault()}return(n,a)=>{var k;return s(),o("section",D,[t("form",F,[t("div",S,[t("div",P,[E,r(t("input",{type:"text",placeholder:"Bank name","onUpdate:modelValue":a[0]||(a[0]=l=>e.bankName=l)},null,512),[[d,e.bankName]]),e.submit&&b.value?(s(),o("div",I,c(b.value),1)):i("",!0)]),t("div",U,[M,r(t("input",{type:"text",placeholder:"Branch name","onUpdate:modelValue":a[1]||(a[1]=l=>e.branchName=l)},null,512),[[d,e.branchName]]),e.submit&&_.value?(s(),o("div",H,c(_.value),1)):i("",!0)]),t("div",$,[K,r(t("input",{type:"text",placeholder:"IFSC Code","onUpdate:modelValue":a[2]||(a[2]=l=>e.ifsc=l),onKeyup:a[3]||(a[3]=l=>l.target.value=l.target.value.slice(0,11))},null,544),[[d,e.ifsc]]),e.submit&&f.value?(s(),o("div",L,c(f.value),1)):i("",!0)])]),t("div",Z,[t("div",j,[q,r(t("input",{type:"text",placeholder:"Holder Name","onUpdate:modelValue":a[4]||(a[4]=l=>e.holderName=l)},null,512),[[d,e.holderName]]),e.submit&&h.value?(s(),o("div",T,c(h.value),1)):i("",!0)]),t("div",Y,[z,r(t("input",{type:"text",placeholder:"Account Number","onUpdate:modelValue":a[5]||(a[5]=l=>e.accountNumber=l),onKeypress:a[6]||(a[6]=l=>B(l)),maxlength:"16"},null,544),[[d,e.accountNumber]]),e.submit&&N.value?(s(),o("div",G,c(N.value),1)):i("",!0)])]),t("div",J,[e.editmode?(s(),o("button",{key:0,type:"button",class:"btn black-btn w-10-r",onClick:p},"Update")):(s(),o("button",{key:1,type:"button",class:"btn black-btn w-10-r",onClick:p},"Add"))])]),t("div",O,[t("table",Q,[R,t("tbody",null,[(s(!0),o(x,null,V(v.value.bankAccount,(l,y)=>(s(),o("tr",{key:y},[t("td",null,c(y+1),1),t("td",null,c(l.bankName),1),t("td",null,c(l.accountNumber),1),t("td",null,c(l.holderName),1),t("td",null,c(l.branchName),1),t("td",null,c(l.ifsc),1),t("td",W,[t("div",X,[t("div",{class:"action-icon",onClick:ue=>g(l)},ae,8,ee)])])]))),128))])])]),((k=v.value.bankAccount)==null?void 0:k.length)<=0?(s(),o("div",ne,oe)):i("",!0)])}}};export{de as default};
