(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"61e9":function(e,a,r){"use strict";r.r(a);var s=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6",lg:"4"}},[r("AppRegisterForm",{attrs:{value:e.userRegisterFormData},on:{input:e.onInput}})],1)],1)],1)},t=[],o=r("5530"),n=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("v-form",{ref:"loginForm"},[r("v-text-field",{attrs:{"append-icon":"fas fa-user","background-color":"white",label:"Никнейм",placeholder:"Введите никнейм",outlined:"",required:""},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),r("v-text-field",{attrs:{"append-icon":"fas fa-lock","background-color":"white",label:"Пароль",placeholder:"Введите пароль",outlined:"",type:"password",required:""},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),r("v-text-field",{attrs:{"append-icon":"fas fa-lock","background-color":"white",label:"Повторите пароль",placeholder:"Повторите пароль",outlined:"",type:"password",required:""},model:{value:e.repeatPassword,callback:function(a){e.repeatPassword=a},expression:"repeatPassword"}}),r("v-btn",{staticClass:"mb-4",attrs:{color:"primary",block:""},on:{click:e.submit}},[e._v(" Зарегистрироваться ")])],1)},i=[],l={name:"AppRegisterForm",props:{value:{type:Object,default:function(){return{username:"",password:"",repeatPassword:""}}}},data:function(){return{username:this.value.username,password:this.value.password,repeatPassword:this.value.repeatPassword}},watch:{value:function(e){var a=e.username,r=e.password,s=e.repeatPassword;this.username=a,this.password=r,this.repeatPassword=s}},methods:{submit:function(){this.$emit("input",{username:this.username,password:this.password,repeatPassword:this.repeatPassword})}}},u=l,d=r("2877"),p=r("6544"),c=r.n(p),m=r("8336"),w=r("4bd4"),f=r("8654"),b=Object(d["a"])(u,n,i,!1,null,"5d87bc98",null),h=b.exports;c()(b,{VBtn:m["a"],VForm:w["a"],VTextField:f["a"]});var v=r("a4b9"),g={name:"RegisterPage",components:{AppRegisterForm:h},data:function(){return{userRegisterFormData:{username:"",password:"",repeatPassword:""}}},methods:{onInput:function(e){this.userRegisterFormData=e,this.$store.dispatch("user/".concat(v["b"]),Object(o["a"])({},e))}}},k=g,P=r("62ad"),x=r("a523"),F=r("0fd9"),R=Object(d["a"])(k,s,t,!1,null,"fb52461a",null);a["default"]=R.exports;c()(R,{VCol:P["a"],VContainer:x["a"],VRow:F["a"]})}}]);
//# sourceMappingURL=register.f57f1060.js.map