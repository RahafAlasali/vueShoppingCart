"use strict";(self["webpackChunkvueShoppingCart"]=self["webpackChunkvueShoppingCart"]||[]).push([[168],{6168:function(e,t,s){s.r(t),s.d(t,{default:function(){return N}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"my-3"},[t("div",{staticClass:"text-h4 mb-2"},[e._v("Users")]),t("Delete",{attrs:{showDialog:e.dialogDelete},on:{delete:()=>e.confirmDelete(),colseDialog:function(t){e.dialogDelete=!1}}}),t("edit-user",{attrs:{userEdit:e.userItem,showDialog:e.dialog},on:{colseDialog:function(t){e.dialog=!1}}}),t("data-table",{on:{edit:e.editItem,delete:e.deleteItem}})],1)},l=[],i=s(2749),n=s(375),r=s(1689),o=s(8834),d=s(1526),u=s(6278),c=s(4155),m=s(8412),h=s(7410),g=s(3406),p=function(){var e=this,t=e._self._c;return t("div",[t(c.A,{attrs:{persistent:"","max-width":"500px","hide-overlay":""},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[t(r.A,[t(o.ri,[t("span",{staticClass:"text-h5"},[e._v("Edit User")])]),t(o.OQ,[t(u.A,[t(m.A,[t(d.A,{attrs:{cols:"12",sm:"6",md:"6"}},[t(g.A,{attrs:{dense:"",label:"First Name","hide-details":"",outlined:""},model:{value:e.user.name.firstname,callback:function(t){e.$set(e.user.name,"firstname",t)},expression:"user.name.firstname"}})],1),t(d.A,{attrs:{cols:"12",sm:"6",md:"6"}},[t(g.A,{attrs:{dense:"",label:"Last Name","hide-details":"",outlined:""},model:{value:e.user.name.lastname,callback:function(t){e.$set(e.user.name,"lastname",t)},expression:"user.name.lastname"}})],1),t(d.A,{attrs:{cols:"12",sm:"6",md:"12"}},[t(g.A,{attrs:{dense:"",label:"Email","hide-details":"",outlined:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1)],1)],1)],1),t(o.SL,[t(h.A),t(n.A,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.closeDialog()}}},[e._v(" Cancel ")])],1)],1)],1)],1)},f=[],v={props:["userEdit","showDialog"],emits:["colseDialog"],data(){return{}},computed:{show(){return this.showDialog},user(){return this.userEdit}},methods:{closeDialog(){this.$emit("colseDialog")}}},D=v,x=s(1656),A=(0,x.A)(D,p,f,!1,null,null,null),b=A.exports,k=s(708),C=s(9456),w=s(3635),_=function(){var e=this,t=e._self._c;return t("div",[t(k.A,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.users,page:e.page,"items-per-page":e.itemsPerPage,"hide-default-footer":"",loading:e.loading,search:e.search},on:{"update:page":function(t){e.page=t},"page-count":function(t){e.pageCount=t}},scopedSlots:e._u([{key:"top",fn:function(){return[t("div",{staticClass:"d-flex justify-start pa-4"},[t("div",[t(g.A,{attrs:{"prepend-inner-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)])]},proxy:!0},{key:"item.actions",fn:function({item:s}){return[t(C.A,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.edit(s)}}},[e._v(" mdi-pencil ")]),t(C.A,{attrs:{small:""},on:{click:function(t){return e.Delete(s.id)}}},[e._v(" mdi-delete ")])]}}])}),t("div",{staticClass:"text-center pt-2"},[t(w.A,{attrs:{"total-visible":"",length:e.pageCount},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)],1)},U=[],y=s(5353),I={data(){return{loading:!1,page:1,pageCount:0,itemsPerPage:8,search:null,headers:[{text:"Id",value:"id",align:"center"},{text:"First name",value:"name.firstname",align:"center"},{text:"Last name",value:"name.lastname",align:"center"},{text:"Email",value:"email",align:"center"},{text:"Actions",value:"actions",sortable:!1}]}},emits:["delete","edit"],computed:{...(0,y.aH)("core",["users"])},methods:{...(0,y.i0)("core",["getUsers","deleteUser"]),Delete(e){this.$emit("delete",e)},edit(e){this.$emit("edit",e)},confirmDelete(){this.deleteUser(this.id),this.$toast.success("User delete successfully"),this.dialogDelete=!1},async getProducts(){this.loading=!0,await this.getUsers(),this.loading=!1}},mounted(){this.getProducts()}},$=I,E=(0,x.A)($,_,U,!1,null,null,null),P=E.exports,S={components:{Delete:i.A,EditUser:b,dataTable:P},data(){return{userItem:null,dialog:!1,dialogCreate:!1,dialogDelete:!1}},methods:{...(0,y.i0)("core",["deleteUser"]),deleteItem(e){this.dialogDelete=!0,this.id=e},editItem(e){this.userItem=e,this.dialog=!0},confirmDelete(){this.deleteUser(this.id),this.$toast.success("User delete successfully"),this.dialogDelete=!1}}},L=S,F=(0,x.A)(L,a,l,!1,null,null,null),N=F.exports}}]);
//# sourceMappingURL=168.1aeff981.js.map