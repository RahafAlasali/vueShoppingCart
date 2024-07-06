"use strict";(self["webpackChunkvueShoppingCart"]=self["webpackChunkvueShoppingCart"]||[]).push([[932],{2932:function(t,e,i){i.r(e),i.d(e,{default:function(){return T}});var s=i(1526),a=i(6278),o=i(1770),n=i(6543),r=i(6960),l=n.A.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:i,footer:s,insetFooter:a,bottom:o,left:n}=this.$vuetify.application;return{paddingTop:`${e+t}px`,paddingRight:`${i}px`,paddingBottom:`${s+a+o}px`,paddingLeft:`${n}px`}}},render(t){const e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},(0,r.$c)(this))])}}),c=i(8412),d=function(){var t=this,e=t._self._c;return e("div",[e(c.A,[e(s.A,{attrs:{sm:"2"}},[e("SideBar")],1),e(s.A,{attrs:{cols:"12",sm:"10"}},[e(a.A,[e("Nav"),e(o.A,{staticClass:"px-2"}),e(l,[e("router-view")],1)],1)],1)],1)],1)},u=[],h=i(9456),p=i(2987),m=i(1075),f=i(7382),g=i(24),v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-4 primary px-4",staticStyle:{position:"fixed",height:"100vh"}},[e(p.A,{staticClass:"align-center primary my-5",attrs:{dark:"",nav:"",flat:""}},t._l(t.links,(function(i,s){return e(m.A,{key:s,staticClass:"d-flex justify-center rounded-pill px-6",attrs:{exact:"",to:i.to,"active-class":"active-item"}},[e(g.A,{staticClass:"mr-4 hidden-sm-and-down"},[e(h.A,[t._v(t._s(i.icon))])],1),e(f.pr,{staticClass:"text-capitalize"},[e(f.UZ,[t._v(t._s(i.title))])],1)],1)})),1)],1)},b=[],A={data(){return{links:[{title:"Dashboard",icon:"mdi-home-outline",to:"/dashboard"},{title:"Products",icon:"mdi-view-quilt",to:"/dashboard/products"},{title:"categories",icon:"mdi-tag-outline"},{title:"Users",icon:"mdi-account-outline",to:"/dashboard/users"},{title:"Settings",icon:"mdi-cog-outline"}]}}},y=A,x=i(1656),$=(0,x.A)(y,v,b,!1,null,null,null),_=$.exports,C=i(6074),S=i(6370),B=i(375),k=i(6160),w=i(7410),O=i(3406),X=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"d-flex mb-2"},[e("div",{staticClass:"text-h5 grey--text"},[t._v("Welcome")]),e(w.A),e(O.A,{staticClass:"mx-4",staticStyle:{"max-width":"200px"},attrs:{solo:"",label:"Search","prepend-inner-icon":"mdi-magnify","hide-details":"",dense:""}}),e(B.A,{staticClass:"mx-3 button-bell",attrs:{icon:"",elevation:"4"}},[e(S.A,{attrs:{overlap:"",content:"2",value:"2"}},[e(h.A,[t._v(" mdi-bell")])],1)],1),e(k.A,{attrs:{"open-on-hover":"",bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[e(B.A,t._g(t._b({attrs:{icon:""}},"v-btn",s,!1),i),[e(C.A,{attrs:{size:"40"}},[e("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})])],1)]}}])},[e(p.A,{staticClass:"text-center",staticStyle:{"letter-spacing":"0.3px"}},[e(m.A,{attrs:{link:""}},[e(f.UZ,[t._v(t._s(t.$t("profile")))])],1),e(o.A),e(m.A,{attrs:{link:""}},[e(f.UZ,{on:{click:t.logout}},[e(B.A,{staticClass:"mt-1 rounded-pill",attrs:{small:"",outlined:"",color:"primary "}},[t._v(" "+t._s(t.$t("logOut"))+" ")])],1)],1)],1)],1)],1)])},L=[],P=(i(4114),i(5353)),R={methods:{...(0,P.PY)("auth",["setLogin"]),logout(){console.log("log"),this.setLogin(!1),this.$toast.success("Logout"),localStorage.removeItem("token"),this.$router.push("/")}}},Y=R,j=(0,x.A)(Y,X,L,!1,null,null,null),E=j.exports,N={name:"App",components:{SideBar:_,Nav:E}},U=N,q=(0,x.A)(U,d,u,!1,null,null,null),T=q.exports},6370:function(t,e,i){i.d(e,{A:function(){return h}});i(4114);var s=i(9456),a=i(8767),o=i(3661),n=i(9748),r=i(5471),l=r.Ay.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),c=i(9923),d=i(3507),u=i(6960),h=(0,d.A)(a.A,(0,c.P)(["left","bottom"]),o.A,n.A,l).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes(){return{"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile,...this.themeClasses}},computedBottom(){return this.bottom?"auto":this.computedYOffset},computedLeft(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop(){return this.bottom?this.computedYOffset:"auto"},computedXOffset(){return this.calcPosition(this.offsetX)},computedYOffset(){return this.calcPosition(this.offsetY)},isRtl(){return this.$vuetify.rtl},offset(){return this.overlap?this.dot?8:12:this.dot?2:4},styles(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition(t){return`calc(100% - ${(0,u.Dg)(t||this.offset)})`},genBadge(){const t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),i=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),s=this.$createElement("span",i,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[s]):s},genBadgeContent(){if(this.dot)return;const t=(0,u.$c)(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(s.A,this.icon):void 0)},genBadgeWrapper(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render(t){const e=[this.genBadgeWrapper()],i=[(0,u.$c)(this)],{"aria-atomic":s,"aria-label":a,"aria-live":o,role:n,title:r,...l}=this.$attrs;return this.inline&&this.left?i.unshift(e):i.push(e),t("span",{staticClass:"v-badge",attrs:l,class:this.classes},i)}})},7410:function(t,e,i){i(158);var s=i(6960);e.A=(0,s.Gn)("spacer","div","v-spacer")},6543:function(t,e,i){var s=i(5471);e.A=s.Ay.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame((()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0}))}})}}]);
//# sourceMappingURL=932.d8d16358.js.map