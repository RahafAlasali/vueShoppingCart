"use strict";(self["webpackChunkvueShoppingCart"]=self["webpackChunkvueShoppingCart"]||[]).push([[628],{1628:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var i=s(375),a=s(1526),r=s(6278),l=s(8230),n=s(8412),o=s(3406),d=function(){var t=this,e=t._self._c;return e("div",[e(n.A,{staticClass:"align-center",staticStyle:{height:"100vh"}},[e(a.A,{staticClass:"offset-md-2",attrs:{cols:"2",md:"4"}},[e(r.A,[e("div",[e("div",{staticClass:"mb-6 text-center text-md-h4",staticStyle:{color:"transparent","background-clip":"text","background-image":"linear-gradient(to right, #8fb9aac4, #05453e, #8fb9aac4, #05453e)","font-weight":"bold"}},[t._v(t._s(t.$t("login")))]),e(l.A,{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(o.A,{attrs:{rules:[e=>!!e||t.$t("fieldRequired")],label:t.$t("name"),filled:"",rounded:""},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}}),e(o.A,{attrs:{"append-icon":t.show2?"mdi-eye":"mdi-eye-off",label:t.$t("password"),type:t.show2?"text":"password",rules:[e=>!!e||t.$t("fieldRequired")],filled:"",rounded:""},on:{"click:append":function(e){t.show2=!t.show2}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),e("div",{staticClass:"d-flex justify-center"},[e(i.A,{staticStyle:{width:"100%"},attrs:{"x-large":"",type:"submit",color:"primary",rounded:""}},[t._v(" "+t._s(t.$t("login"))+" ")])],1)],1),e("h6",{staticClass:"subtitle-1 text-center mt-3"},[t._v(" "+t._s(t.$t("noAccount"))+" "),e("span",[e("router-link",{attrs:{to:{name:"register"}}},[t._v(" "+t._s(t.$t("register")))])],1)])],1)])],1),e(a.A,{staticStyle:{height:"100%"},attrs:{cols:"7",md:"6"}},[e("div",{staticClass:"shape-left"})])],1)],1)},u=[],h=(s(4114),s(5353)),c={data(){return{valid:!0,show2:!1,user:{username:"mor_2314",password:"83r5^_"}}},methods:{...(0,h.i0)("auth",["addUser"]),submit(){this.$refs.form.validate(),this.addUser(this.user),this.$toast.success("Registered Successfully!"),this.$router.push({name:"home"})}}},p=c,f=s(1656),m=(0,f.A)(p,d,u,!1,null,"024b7ba0",null),v=m.exports},8230:function(t,e,s){s(4114);var i=s(3507),a=s(4765),r=s(8652),l=s(6960);e.A=(0,i.A)(a.A,(0,r.G)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))})):s.valid=e(t),s},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const s=this.watchers.find((t=>t._uid===e._uid));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},(0,l.$c)(this))}})}}]);
//# sourceMappingURL=628.496deac0.js.map