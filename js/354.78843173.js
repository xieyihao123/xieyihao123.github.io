"use strict";(self["webpackChunklianxi_1"]=self["webpackChunklianxi_1"]||[]).push([[354],{9354:function(e,s,t){t.r(s),t.d(s,{default:function(){return l}});var a=function(){var e=this,s=e._self._c;return s("div",{staticClass:"register-container"},[s("div",{staticClass:"register"},[e._m(0),s("div",{staticClass:"content"},[s("label",[e._v("手机号:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"请输入你的手机号"},domProps:{value:e.phone},on:{input:function(s){s.target.composing||(e.phone=s.target.value)}}}),s("span",{staticClass:"error-msg"},[e._v("错误提示信息")])]),s("div",{staticClass:"content"},[s("label",[e._v("验证码:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:e.code},on:{input:function(s){s.target.composing||(e.code=s.target.value)}}}),s("button",{staticStyle:{width:"100px",height:"40px"},on:{click:e.getCode}},[e._v("获取验证码")]),s("span",{staticClass:"error-msg"},[e._v("错误提示信息")])]),s("div",{staticClass:"content"},[s("label",[e._v("登录密码:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入你的登录密码"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}}),s("span",{staticClass:"error-msg"},[e._v("错误提示信息")])]),s("div",{staticClass:"content"},[s("label",[e._v("确认密码:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password1,expression:"password1"}],attrs:{type:"password",placeholder:"请输入确认密码"},domProps:{value:e.password1},on:{input:function(s){s.target.composing||(e.password1=s.target.value)}}}),s("span",{staticClass:"error-msg"},[e._v("错误提示信息")])]),s("div",{staticClass:"controls"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.agree,expression:"agree"}],attrs:{name:"m1",type:"checkbox"},domProps:{checked:Array.isArray(e.agree)?e._i(e.agree,null)>-1:e.agree},on:{change:function(s){var t=e.agree,a=s.target,r=!!a.checked;if(Array.isArray(t)){var o=null,n=e._i(t,o);a.checked?n<0&&(e.agree=t.concat([o])):n>-1&&(e.agree=t.slice(0,n).concat(t.slice(n+1)))}else e.agree=r}}}),s("span",[e._v("同意协议并注册《尚品汇用户协议》")]),s("span",{staticClass:"error-msg"},[e._v("错误提示信息")])]),s("div",{staticClass:"btn"},[s("button",{on:{click:e.userRegister}},[e._v("完成注册")])])])])},r=[function(){var e=this,s=e._self._c;return s("h3",[e._v("注册新用户 "),s("span",{staticClass:"go"},[e._v("我有账号，去 "),s("a",{attrs:{href:"login.html",target:"_blank"}},[e._v("登陆")])])])}],o={name:"Register",data(){return{phone:"",code:"",password:"",password1:"",agree:""}},methods:{async getCode(){try{const{phone:e}=this;e&&await this.$store.dispatch("getCode",e),this.code=this.$store.state.user.code}catch(e){}},async userRegister(){try{const{phone:e,code:s,password:t,password1:a}=this;e&&s&&t==a&&await this.$store.dispatch("userRegister",{phone:e,code:s,password:t})}catch(e){}}}},n=o,i=t(1656),c=(0,i.A)(n,a,r,!1,null,"4f8eb734",null),l=c.exports}}]);