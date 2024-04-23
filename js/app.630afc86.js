(function(){"use strict";var t={5172:function(t,e,r){var a=r(6848),o=function(){var t=this,e=t._self._c;return e("div",[e("Header"),e("router-view"),e("Footer",{directives:[{name:"show",rawName:"v-show",value:t.$route.meta.show,expression:"$route.meta.show"}]})],1)},s=[],i=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("div",{staticClass:"top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"loginList"},[e("p",[t._v("尚品汇欢迎您！")]),e("p",[e("span",[t._v("请")]),e("router-link",{attrs:{to:"/login"}},[t._v("登录")]),e("router-link",{staticClass:"register",attrs:{to:"/register"}},[t._v("免费注册")])],1)]),t._m(0)])]),e("div",{staticClass:"bottom"},[e("h1",{staticClass:"logoArea"},[e("router-link",{staticClass:"logo",attrs:{to:"/home"}},[e("img",{attrs:{src:r(4595),alt:""}})])],1),e("div",{staticClass:"searchArea"},[e("form",{staticClass:"searchForm",attrs:{action:"###"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"input-error input-xxlarge",attrs:{type:"text",id:"autocomplete"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),e("button",{staticClass:"sui-btn btn-xlarge btn-danger",attrs:{type:"button"},on:{click:t.goSearch}},[t._v("搜索")])])])])])},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"typeList"},[e("a",{attrs:{href:"###"}},[t._v("我的订单")]),e("a",{attrs:{href:"###"}},[t._v("我的购物车")]),e("a",{attrs:{href:"###"}},[t._v("我的尚品汇")]),e("a",{attrs:{href:"###"}},[t._v("尚品汇会员")]),e("a",{attrs:{href:"###"}},[t._v("企业采购")]),e("a",{attrs:{href:"###"}},[t._v("关注尚品汇")]),e("a",{attrs:{href:"###"}},[t._v("合作招商")]),e("a",{attrs:{href:"###"}},[t._v("商家后台")])])}],c=(r(4114),{name:"Hearder",data(){return{keyword:""}},mounted(){this.$bus.$on("clear",(()=>{this.keyword=""}))},methods:{goSearch(){let t={name:"search",params:{keyword:this.keyword||void 0}};this.$route.query&&(t.query=this.$route.query),this.$router.push(t)}}}),l=c,u=r(1656),d=(0,u.A)(l,i,n,!1,null,"33726e7f",null),m=d.exports,f=function(){var t=this;t._self._c;return t._m(0)},g=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-container"},[e("div",{staticClass:"footerList"},[e("div",{staticClass:"footerItem"},[e("h4",[t._v("购物指南")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("购物流程")]),e("li",[t._v("会员介绍")]),e("li",[t._v("生活旅行/团购")]),e("li",[t._v("常见问题")]),e("li",[t._v("购物指南")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("配送方式")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("上门自提")]),e("li",[t._v("211限时达")]),e("li",[t._v("配送服务查询")]),e("li",[t._v("配送费收取标准")]),e("li",[t._v("海外配送")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("支付方式")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("货到付款")]),e("li",[t._v("在线支付")]),e("li",[t._v("分期付款")]),e("li",[t._v("邮局汇款")]),e("li",[t._v("公司转账")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("售后服务")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("售后政策")]),e("li",[t._v("价格保护")]),e("li",[t._v("退款说明")]),e("li",[t._v("返修/退换货")]),e("li",[t._v("取消订单")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("特色服务")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("夺宝岛")]),e("li",[t._v("DIY装机")]),e("li",[t._v("延保服务")]),e("li",[t._v("尚品汇E卡")]),e("li",[t._v("尚品汇通信")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("帮助中心")]),e("img",{attrs:{src:r(9745)}})])]),e("div",{staticClass:"copyright"},[e("ul",{staticClass:"helpLink"},[e("li",[t._v("关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v("联系我们 "),e("span",{staticClass:"space"})]),e("li",[t._v("关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v("商家入驻 "),e("span",{staticClass:"space"})]),e("li",[t._v("营销中心 "),e("span",{staticClass:"space"})]),e("li",[t._v("友情链接 "),e("span",{staticClass:"space"})]),e("li",[t._v("关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v("营销中心 "),e("span",{staticClass:"space"})]),e("li",[t._v("友情链接 "),e("span",{staticClass:"space"})]),e("li",[t._v("关于我们")])]),e("p",[t._v("地址：北京市昌平区宏福科技园综合楼6层")]),e("p",[t._v("京ICP备19006430号")])])])])}],p={},h=p,v=(0,u.A)(h,f,g,!1,null,"263d9edd",null),y=v.exports,_={mounted(){this.$store.dispatch("categoryList")},components:{Header:m,Footer:y}},C=_,w=(0,u.A)(C,o,s,!1,null,null,null),b=w.exports,I=function(){var t=this,e=t._self._c;return e("div",{staticClass:"type-nav"},[e("div",{staticClass:"container"},[e("div",{on:{mouseenter:t.enterShow,mouseleave:t.leaveShow}},[e("h2",{staticClass:"all"},[t._v("全部商品分类")]),e("transition",{attrs:{name:"sort"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"sort"},[e("div",{staticClass:"all-sort-list2",on:{click:t.goSearch}},t._l(t.categoryList,(function(r,a){return e("div",{key:r.categoryId,staticClass:"item",class:{cur:t.currentIndex==a},on:{mouseenter:function(e){return t.changIndex(a)}}},[e("h3",[e("a",{attrs:{"data-categoryName":r.categoryName,"data-category1Id":r.categoryId}},[t._v(t._s(r.categoryName))])]),e("div",{staticClass:"item-list clearfix"},t._l(r.categoryChild,(function(r,a){return e("div",{key:r.categoryId,staticClass:"subitem"},[e("dl",{staticClass:"fore"},[e("dt",[e("a",{attrs:{"data-categoryName":r.categoryName,"data-category2Id":r.categoryId}},[t._v(t._s(r.categoryName))])]),e("dd",t._l(r.categoryChild,(function(r,a){return e("em",{key:r.categoryId},[e("a",{attrs:{"data-categoryName":r.categoryName,"data-category3Id":r.categoryId}},[t._v(t._s(r.categoryName))])])})),0)])])})),0)])})),0)])])],1),t._m(0)])])},L=[function(){var t=this,e=t._self._c;return e("nav",{staticClass:"nav"},[e("a",{attrs:{href:"###"}},[t._v("服装城")]),e("a",{attrs:{href:"###"}},[t._v("美妆馆")]),e("a",{attrs:{href:"###"}},[t._v("尚品汇超市")]),e("a",{attrs:{href:"###"}},[t._v("全球购")]),e("a",{attrs:{href:"###"}},[t._v("闪购")]),e("a",{attrs:{href:"###"}},[t._v("团购")]),e("a",{attrs:{href:"###"}},[t._v("有趣")]),e("a",{attrs:{href:"###"}},[t._v("秒杀")])])}],k=r(3518),S=r(1795),E=r.n(S),T={name:"TypeNev",data(){return{currentIndex:-1,show:!1}},mounted(){"/home"===this.$route.path&&(this.show=!0)},computed:{...(0,k.aH)({categoryList:t=>t.home.categoryList})},methods:{changIndex:E()((function(t){this.currentIndex=t}),50),enterShow(){this.show=!0},leaveShow(){this.currentIndex=-1,"/home"!=this.$route.path&&(this.show=!1)},goSearch(t){let e=t.target,{categoryname:r,category1id:a,category2id:o,category3id:s}=e.dataset;if(r){let t={name:"search"},e={categoryName:r};a?e.category1Id=a:o?e.category2Id=o:e.category3Id=s,this.$route.params&&(t.params=this.$route.params),t.query=e,this.$router.push(t)}}}},x=T,O=(0,u.A)(x,I,L,!1,null,"f7c523e8",null),A=O.exports,N=function(){var t=this,e=t._self._c;return e("div",{ref:"floorSwiper",staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.list,(function(t,r){return e("div",{key:t.id,staticClass:"swiper-slide"},[e("img",{attrs:{src:t.imgUrl}})])})),0),e("div",{staticClass:"swiper-pagination"}),e("div",{staticClass:"swiper-button-prev"}),e("div",{staticClass:"swiper-button-next"})])},U=[],G=r(1535),$={name:"Carousel",props:["list"],watch:{list:{immediate:!0,handler(t,e){this.$nextTick((()=>{new G.A(this.$refs.floorSwiper,{loop:!0,pagination:{el:".swiper-paginagion",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}))}}}},j=$,R=(0,u.A)(j,N,U,!1,null,null,null),P=R.exports,F=r(8355);let B=F.A.create({baseURL:"/api",timeout:5e3});B.interceptors.request.use((t=>(xt.state.detail.uuid_token&&(t.headers.userTempId=xt.state.detail.uuid_token),xt.state.user.token&&(t.headers.token=xt.state.user.token),t))),B.interceptors.response.use((t=>t.data),(t=>{}));var D=B;const H=F.A.create({baseURL:"/mock",timeout:5e3});H.interceptors.request.use((t=>t)),H.interceptors.response.use((t=>t.data));var q=H;const K=()=>D.get("/product/getBaseCategoryList"),M=()=>q.get("/banner"),Y=()=>q.get("/floor"),J=t=>D({url:"/list",method:"POST",data:t}),V=t=>D({url:`/item/${t}`,method:"GET"}),z=(t,e)=>D({url:`/cart/addToCart/${t}/${e}`,method:"POST"}),Q=()=>D({url:"/cart/cartList",method:"GET"}),W=t=>D({url:`/cart/cartList/${t}`,method:"DELETE"}),X=t=>D({url:`/user/passport/sendCode/${t}`,method:"GET"}),Z=t=>D({url:"/user/passport/register",data:t,method:"POST"}),tt=t=>D({url:"/user/passport/login",data:t,method:"POST"}),et=()=>{D({url:"/user/passport/auth/getUserInfo",method:"GET"})},rt={categoryList:[],bannerList:[],floorList:[]},at={CATEGORYLIST(t,e){t.categoryList=e},GETBANNERLIST(t,e){t.bannerList=e},GETFLOORLIST(t,e){t.floorList=e}},ot={async categoryList({commit:t}){let e=await K();200===e.code&&t("CATEGORYLIST",e.data)},async getBannerList({commit:t}){let e=await M();200===e.code&&t("GETBANNERLIST",e.data)},async getFloorList({commit:t}){let e=await Y();200===e.code&&t("GETFLOORLIST",e.data)}},st={};var it={state:rt,mutations:at,actions:ot,getters:st};const nt={searchList:{}},ct={GETSEARCHLIST(t,e){t.searchList=e}},lt={async getSearchList({commit:t},e={}){let r=await J(e);200==r.code&&t("GETSEARCHLIST",r.data)}},ut={goodsList(t){return t.searchList.goodsList||[]},trademarkList(t){return t.searchList.trademarkList},attrsList(t){return t.searchList.attrsList}};var dt={state:nt,mutations:ct,actions:lt,getters:ut},mt=r(794);const ft=()=>{let t=localStorage.getItem("UUIDTOKEN");return t||(t=(0,mt.A)(),localStorage.setItem("UUIDTOKEN",t)),t},gt={goodInfo:{},uuid_token:ft()},pt={GETGOODINFO(t,e){t.goodInfo=e}},ht={async getGoodInfo({commit:t},e){let r=await V(e);200==r.code&&t("GETGOODINFO",r.data)},async addOrUpdateShopCart({commit:t},{skuId:e,skuNum:r}){await z(e,r)}},vt={categoryView(t){return t.goodInfo.categoryView||{}},skuInfo(t){return t.goodInfo.skuInfo||{}},spuSaleAttrList(t){return t.goodInfo.spuSaleAttrList||[]}};var yt={state:gt,mutations:pt,actions:ht,getters:vt};const _t={cartList:[]},Ct={GETCARTLIST(t,e){t.cartList=e}},wt={async getCartList({commit:t}){let e=await Q();200===e.code&&t("GETCARTLIST",e.data)},async deleteCartListBySkuId({commit:t},e){let r=await W(e);return 200===r.code?"ok":Promise.reject(new Error("faile"))}},bt={cartList(){return _t.cartList[0]||[]}};var It={state:_t,mutations:Ct,actions:wt,getters:bt};const Lt={code:"",token:"",userInfo:{}},kt={GETCODE(t,e){t.code=e},USERLOGIN(t,e){t.token=e},USERSERINFO(t,e){t.userInfo=e}},St={async getCode({commit:t},e){let r=await X(e);return console.log(r),200==r.code?(t("GETCODE",r.data),"ok"):Promise.reject(new Error("faile"))},async userRegister({commit:t},e){let r=await Z(e);if(console.log(r),200!=r.code)return Promise.reject(new Error("faile"));console.log("ok")},async userLogin({commit:t},e){let r=await tt(e);200==r.code&&t("USERLOGIN",r.data.token)},async getUserInfo({commit:t}){let e=await et();t("USERSERINFO",e)}},Et={};var Tt={state:Lt,mutations:kt,actions:St,getters:Et};a.Ay.use(k.Ay);var xt=new k.Ay.Store({modules:{home:it,search:dt,detail:yt,shopcart:It,user:Tt}}),Ot=r(6178);a.Ay.use(Ot.A);var At=new Ot.A({routes:[{path:"/",redirect:"/home"},{name:"home",path:"/home",component:()=>r.e(838).then(r.bind(r,9838)),meta:{show:!0}},{name:"login",path:"/login",component:()=>r.e(207).then(r.bind(r,2207)),meta:{show:!1}},{name:"register",path:"/register",component:()=>r.e(354).then(r.bind(r,9354)),meta:{show:!1}},{name:"search",path:"/search/:keyword?",component:()=>r.e(522).then(r.bind(r,2522)),meta:{show:!0}},{name:"detail",path:"/detail/:skuid",component:()=>r.e(958).then(r.bind(r,958)),meta:{show:!0}},{name:"addCartSuccess",path:"/addCartSuccess",component:()=>r.e(930).then(r.bind(r,6930)),meta:{show:!0}},{name:"shopCart",path:"/shopCart",component:()=>r.e(684).then(r.bind(r,5684))}],scrollBehavior(t,e,r){return{y:0}}}),Nt=r(4240),Ut=r.n(Nt),Gt=JSON.parse('[{"id":"001","name":"家用电器","keywords":["节能补贴","4K电视","空气净化器","IH电饭煲","滚筒洗衣机","电热水器"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","text":"热门"},{"url":"#","text":"大家电"},{"url":"#","text":"生活电器"},{"url":"#","text":"厨房电器"},{"url":"#","text":"应季电器"},{"url":"#","text":"空气/净水"},{"url":"#","text":"高端电器"}],"carouselList":[{"id":"0011","imgUrl":"/images/floor-1-b01.png"},{"id":"0012","imgUrl":"/images/floor-1-b02.png"},{"id":"0013","imgUrl":"/images/floor-1-b03.png"}],"recommendList":["/images/floor-1-2.png","/images/floor-1-3.png","/images/floor-1-5.png","/images/floor-1-6.png"],"bigImg":"/images/floor-1-4.png"},{"id":"002","name":"手机通讯","keywords":["节能补贴2","4K电视2","空气净化器2","IH电饭煲2","滚筒洗衣机2","电热水器2"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","text":"热门2"},{"url":"#","text":"大家电2"},{"url":"#","text":"生活电器2"},{"url":"#","text":"厨房电器2"},{"url":"#","text":"应季电器2"},{"url":"#","text":"空气/净水2"},{"url":"#","text":"高端电器2"}],"carouselList":[{"id":"0011","imgUrl":"/images/floor-1-b01.png"},{"id":"0012","imgUrl":"/images/floor-1-b02.png"},{"id":"0013","imgUrl":"/images/floor-1-b03.png"}],"recommendList":["/images/floor-1-2.png","/images/floor-1-3.png","/images/floor-1-5.png","/images/floor-1-6.png"],"bigImg":"/images/floor-1-4.png"}]'),$t=JSON.parse('[{"id":"1","imgUrl":"/images/banner1.jpg"},{"id":"2","imgUrl":"/images/banner2.jpg"},{"id":"3","imgUrl":"/images/banner3.jpg"},{"id":"4","imgUrl":"/images/banner4.jpg"}]');Ut().mock("/mock/banner",{code:200,data:$t}),Ut().mock("/mock/floor",{code:200,data:Gt}),a.Ay.component(A.name,A),a.Ay.component(P.name,P),a.Ay.config.productionTip=!1,new a.Ay({render:t=>t(b),beforeCreate(){a.Ay.prototype.$bus=this},router:At,store:xt}).$mount("#app")},9745:function(t,e,r){t.exports=r.p+"img/wx_cz.5d92bf53.jpg"},4595:function(t,e,r){t.exports=r.p+"img/logo.d600ca2b.png"}},e={};function r(a){var o=e[a];if(void 0!==o)return o.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,a,o,s){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],o=t[u][1],s=t[u][2];for(var n=!0,c=0;c<a.length;c++)(!1&s||i>=s)&&Object.keys(r.O).every((function(t){return r.O[t](a[c])}))?a.splice(c--,1):(n=!1,s<i&&(i=s));if(n){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[a,o,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,a){return r.f[a](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/"+t+"."+{207:"7c1ea234",354:"78843173",522:"c333fc7c",684:"58048cd6",838:"5422be5b",930:"a0777516",958:"dcac7791"}[t]+".js"}}(),function(){r.miniCssF=function(t){return"css/"+t+"."+{207:"7997beb9",354:"cfb38394",522:"48bdfe74",684:"543fd4e1",838:"206c9693",930:"32c71762",958:"d93cc3cc"}[t]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="lianxi_1:";r.l=function(a,o,s,i){if(t[a])t[a].push(o);else{var n,c;if(void 0!==s)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+s){n=d;break}}n||(c=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,r.nc&&n.setAttribute("nonce",r.nc),n.setAttribute("data-webpack",e+s),n.src=a),t[a]=[o];var m=function(e,r){n.onerror=n.onload=null,clearTimeout(f);var o=t[a];if(delete t[a],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((function(t){return t(r)})),e)return e(r)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=m.bind(null,n.onerror),n.onload=m.bind(null,n.onload),c&&document.head.appendChild(n)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,r,a,o){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var i=function(r){if(s.onerror=s.onload=null,"load"===r.type)a();else{var i=r&&r.type,n=r&&r.target&&r.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+i+": "+n+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=n,s.parentNode&&s.parentNode.removeChild(s),o(c)}};return s.onerror=s.onload=i,s.href=e,r?r.parentNode.insertBefore(s,r.nextSibling):document.head.appendChild(s),s},e=function(t,e){for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var o=r[a],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===t||s===e))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],s=o.getAttribute("data-href");if(s===t||s===e)return o}},a=function(a){return new Promise((function(o,s){var i=r.miniCssF(a),n=r.p+i;if(e(i,n))return o();t(a,n,null,o,s)}))},o={524:0};r.f.miniCss=function(t,e){var r={207:1,354:1,522:1,684:1,838:1,930:1,958:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=a(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={524:0};r.f.j=function(e,a){var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)a.push(o[2]);else{var s=new Promise((function(r,a){o=t[e]=[r,a]}));a.push(o[2]=s);var i=r.p+r.u(e),n=new Error,c=function(a){if(r.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;n.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",n.name="ChunkLoadError",n.type=s,n.request=i,o[1](n)}};r.l(i,c,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,s,i=a[0],n=a[1],c=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in n)r.o(n,o)&&(r.m[o]=n[o]);if(c)var u=c(r)}for(e&&e(a);l<i.length;l++)s=i[l],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(u)},a=self["webpackChunklianxi_1"]=self["webpackChunklianxi_1"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[504],(function(){return r(5172)}));a=r.O(a)})();