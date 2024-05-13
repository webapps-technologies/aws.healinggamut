import{u as V,c as D,v as F,D as A,r as l,o as m,a as h,b as t,t as n,d as c,w as v,g,F as b,E as x,z as B,H as N}from"./vendor-5e5c4e37.js";import{_ as R}from"./search-96d5dcc4.js";import{_ as T}from"./dr2-6b1c0b91.js";import{r as E}from"./index-728dc27d.js";const I={class:"staff-layout"},z={class:"container"},L={class:"staff-content row"},O={class:"card staff-listbar col-4"},U={class:"card-header"},$={class:"top"},q={class:"head"},H=t("h4",null,"Staff Management",-1),K={class:"btn yellow-btn"},j={class:"searchbar"},G={class:"search"},J={class:"drop"},P={class:"card-body"},Q=["onClick"],W=t("div",{class:"img"},[t("img",{src:T,alt:"image"})],-1),X={class:"info"},Y={class:"staff-name"},Z={class:"contact-info"},tt={class:"mail"},st={class:"phone"},ot={class:"staff-card-outer col-6"},et=t("h4",null," Are you sure want to Delete ",-1),at={class:"btns"},nt=t("button",{class:"btn confirm-btn"},"Confirm",-1),_t={__name:"StaffLayout",setup(it){const r=V(),p=D(()=>r.state.Staff),d=[{id:"STAFF",name:"STAFF"}],s=F({confirmModal:!1,tab:1,limit:10,offset:0,keyword:"",status:"ACTIVE",role:d[0],changeRole:d[0]});A(()=>{var o;i(s.limit,s.offset,s.keyword,s.status,(o=s.role)==null?void 0:o.id)});function i(o,e,f,_,u){r.dispatch("Staff/getStaff",{limit:o,offset:e,keyword:f,status:_,role:u})}function S(){var o;i(s.limit,s.offset,s.keyword,s.status,(o=s.changeRole)==null?void 0:o.id)}function w(o){r.dispatch("Staff/getOneStaff",{id:o}),E.push({path:"/staff/details",query:{id:o}})}function y(){var o;i(s.limit,s.offset,s.keyword,s.status,(o=s.role)==null?void 0:o.id)}function k(o){var e;s.keyword=o,o===""&&i(s.limit,s.offset,s.keyword,s.status,(e=s.role)==null?void 0:e.id)}return(o,e)=>{const f=l("router-link"),_=l("Select"),u=l("router-view"),C=l("Modal");return m(),h(b,null,[t("section",I,[t("div",z,[t("div",L,[t("div",O,[t("div",U,[t("div",$,[t("div",q,[H,t("div",K,n(p.value.totalStaff),1)]),c(f,{to:"/staff-add",class:"btn black-btn"},{default:v(()=>[B("+ Add Staff")]),_:1})]),t("div",j,[t("div",G,[t("input",{type:"text",placeholder:"Search for Staff",onKeyup:e[0]||(e[0]=a=>k(a.target.value))},null,32),t("img",{src:R,alt:"",onClick:y})]),t("div",J,[c(_,{modelValue:s.changeRole,"onUpdate:modelValue":e[1]||(e[1]=a=>s.changeRole=a),options:d,onChange:g(S,["prevent"])},null,8,["modelValue"])])])]),t("div",P,[(m(!0),h(b,null,x(p.value.staffData,(a,M)=>(m(),h("div",{onClick:lt=>w(a.id),class:"list-item card1",key:M},[W,t("div",X,[t("div",Y,n(a.staffDetail.name),1),t("div",Z,[t("div",tt,n(a.staffDetail.emailId),1),t("div",st,n(a.phoneNumber),1)])]),t("div",{class:N(["post",a.roles])},n(a.roles),3)],8,Q))),128))])]),t("div",ot,[c(u)])])])]),c(C,{show:s.confirmModal,"onUpdate:show":e[3]||(e[3]=a=>s.confirmModal=a),class:"confirm-modal"},{default:v(()=>[et,t("div",at,[t("button",{class:"btn grey-btn cancel-btn",onClick:e[2]||(e[2]=g(a=>s.confirmModal=!1,["prevent"]))},"Cancel"),nt])]),_:1},8,["show"])],64)}}};export{_t as default};
