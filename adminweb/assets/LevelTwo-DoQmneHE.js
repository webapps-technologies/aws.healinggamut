import{h as s}from"./@vue-bQO0P59g.js";const r={name:"LevelTwo",props:{mobile:Boolean,type:{type:String,default:"justify-between"}},render(){const t=[this.type,"items-center"],l=["flex"],n=["block","md:flex"],e=["flex","flex-shrink-1","flex-grow-0","items-center","justify-center","w-full"];return s("div",{class:t.concat(this.mobile?l:n)},this.$slots.default().map((a,o)=>{const i=!this.mobile&&this.$slots.default().length>o+1?e.concat(["mb-6","md:mb-0"]):e;return s("div",{class:i},[a])}))}};export{r as default};
