"use strict";(self["webpackChunkvueShoppingCart"]=self["webpackChunkvueShoppingCart"]||[]).push([[73],{73:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var i=a(375),s=a(1689),r=a(8834),l=a(1526),n=a(6278),d=a(8230),o=a(8412),u=a(3406),h=function(){var t=this,e=t._self._c;return e("div",[e(o.A,{staticClass:"justify-center align-center",staticStyle:{height:"100vh"}},[e(l.A,{attrs:{cols:"10",md:"4"}},[e(s.A,{staticClass:"pa-4",attrs:{shaped:"",elevation:"4"}},[e(n.A,[e(r.ri,{staticClass:"text-center justify-center text-md-h4",staticStyle:{color:"transparent","background-clip":"text","background-image":"linear-gradient(to right, #8fb9aac4, #05453e, #8fb9aac4, #05453e)","font-weight":"bold"}},[t._v(t._s(t.$t("createAccount")))]),e(d.A,{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(u.A,{attrs:{rules:[e=>!!e||t.$t("fieldRequired")],label:t.$t("name"),filled:"",rounded:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),e(u.A,{attrs:{label:t.$t("email"),rules:[e=>!!e||t.$t("fieldRequired"),t=>/.+@.+\..+/.test(t)||"E-mail must be valid"],filled:"",rounded:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),e(u.A,{attrs:{label:t.$t("password"),type:"password",rules:[e=>!!e||t.$t("fieldRequired")],filled:"",rounded:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e(r.SL,{staticClass:"d-flex justify-center"},[e(i.A,{attrs:{dark:"",large:"",color:"primary",width:"200",type:"submit"}},[t._v(" "+t._s(t.$t("signUp"))+" ")])],1)],1),e("h6",{staticClass:"subtitle-1 text-center mt-3"},[t._v(" "+t._s(t.$t("alreadyHaveAccount"))+" "),e("span",[e("router-link",{attrs:{to:{name:"login"}}},[t._v(t._s(t.$t("login"))+" ")])],1)])],1)],1)],1)],1)],1)},c=[],p={data(){return{name:"",email:null,password:null,valid:!0}},methods:{submit(){this.$refs.form.validate()}}},m=p,f=a(1656),v=(0,f.A)(m,h,c,!1,null,null,null),g=v.exports},8230:function(t,e,a){a(4114);var i=a(3507),s=a(4765),r=a(8652),l=a(6960);e.A=(0,i.A)(s.A,(0,r.G)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))})):a.valid=e(t),a},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const a=this.watchers.find((t=>t._uid===e._uid));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},(0,l.$c)(this))}})}}]);
//# sourceMappingURL=73.a11329be.js.map