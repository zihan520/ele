webpackJsonp([1],[,,,,,,,,,function(t,s,e){function a(t){e(45)}var i=e(1)(e(39),e(54),a,null,null);t.exports=i.exports},function(t,s,e){function a(t){e(43)}var i=e(1)(e(34),e(51),a,null,null);t.exports=i.exports},function(t,s,e){function a(t){e(41)}var i=e(1)(e(35),e(49),a,null,null);t.exports=i.exports},function(t,s,e){function a(t){e(42)}var i=e(1)(e(37),e(50),a,null,null);t.exports=i.exports},function(t,s,e){var a=e(1)(e(38),e(53),null,null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(15),i=e(14),n=e(10),l=e.n(n),r=e(11),c=e.n(r),o=e(12),v=e.n(o),u=e(13),d=e.n(u);a.a.config.productionTip=!1,a.a.use(i.a);var _=new i.a({routes:[{path:"/goods",component:c.a},{path:"/ratings",component:v.a},{path:"/seller",component:d.a}],linkActiveClass:"active"});new a.a({el:"#app",router:_,template:"<App/>",components:{App:l.a}}),_.push("goods")},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(48),i=e.n(a),n=e(2),l=e.n(n);s.default={data:function(){return{seller:{}}},created:function(){var t=this;l.a.get("static/data.json").then(function(s){t.seller=s.data.seller,console.log(t.seller)})},components:{"v-header":i.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(2),i=e.n(a),n=e(40);e.n(n);s.default={props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],foodsScrollY:0}},created:function(){var t=this;i.a.get("static/data.json").then(function(s){t.goods=s.data.goods,console.log(t.goods)}),this.iconClassMap=["decrease","discount","special","invoice","guarantee"]},computed:{menuCurrentIndex:function(){for(var t=0,s=this.listHeight.length;t<s;t++){var e=this.listHeight[t],a=this.listHeight[t+1];if(!a||this.foodsScrollY>=e&&this.foodsScrollY<a)return t}return 0}},methods:{menuClick:function(t,s){s._constructed}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(9),i=e.n(a);s.default={props:{seller:{type:Object}},created:function(){this.iconClassMap=["decrease","discount","special","invoice","guarantee"]},data:function(){return{detailShow:!1}},components:{Star:i.a},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(2),i=e.n(a),n=e(9),l=e.n(n);s.default={components:{Star:l.a},data:function(){return{ratings:[],seller:[],classifyArr:[{name:"全部",count:0,active:!0},{name:"推荐",count:0,active:!1},{name:"吐槽",count:0,active:!1}],evelflag:!0}},created:function(){var t=this;i.a.get("static/data.json").then(function(s){t.ratings=s.data.ratings,t.seller=s.data.seller})},methods:{filterEvel:function(t){this.classifyArr.forEach(function(t){t.active=!1}),t.active=!0}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});s.default={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=Math.floor(this.score),a=s%1!=0,i=0;i<e;i++)t.push("on");for(a&&t.push("half");t.length<5;)t.push("off");return t}}}},,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,,function(t,s,e){function a(t){e(44)}var i=e(1)(e(36),e(52),a,null,null);t.exports=i.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,a){return e("li",{staticClass:"menu-item",on:{click:function(s){t.menuClick(a,s)}}},[e("span",{staticClass:"text"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.iconClassMap[s.type]}),t._v(t._s(s.name))])])}))]),t._v(" "),e("div",{staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"food-list"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item"},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.icon,width:"57",height:"57"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"sellCount"},[e("span",[t._v("月销"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"),e("b",{staticStyle:{"font-weight":"600"}},[t._v(t._s(s.price))])]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"oldPrice"},[t._v("￥"+t._s(s.oldPrice))]),t._v(" "),t._m(0,!0)])])])}))])}))])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol-wrapper"},[e("div",{staticClass:"cart-decrease"}),t._v(" "),e("span",{staticClass:"cart-count"}),t._v(" "),e("div",{staticClass:"cart-add"})])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratings-wrapper"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"info"},[e("div",{staticClass:"score"},[e("div",{staticClass:"num"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"text"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"contrast"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"service"},[e("div",{staticClass:"serviceScore"},[e("span",{staticClass:"text"},[t._v("服务态度")]),e("Star",{attrs:{size:36,score:t.seller.serviceScore}}),e("span",{staticClass:"num"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"foodScore"},[e("span",{staticClass:"text"},[t._v("美食口味")]),t._v(" "),e("Star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"num"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"deliveryTime"},[e("span",{staticClass:"text"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"evaluation"},[e("div",{staticClass:"classify"},t._l(t.classifyArr,function(s,a){return e("span",{staticClass:"item",class:{active:s.active,bad:2==a,badActive:s.active&&2==a},on:{click:function(e){t.filterEvel(s)}}},[t._v("\n\t\t\t\t\t"+t._s(s.name)),e("span",{staticClass:"count"},[t._v(t._s(s.count))])])})),t._v(" "),e("div",{staticClass:"switch"}),t._v(" "),e("div",{staticClass:"evel-list"})])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("router-view")],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n\t\t\t\t"+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n\t\t\t")]),t._v(" "),t.seller.supports?e("div",{staticClass:"supports"},[e("span",{staticClass:"icon"}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),e("div",{staticClass:"support-count",on:{click:function(s){t.showDetail()}}},[t.seller.supports?e("span",{staticClass:"count"},[t._v("\n\t\t\t\t"+t._s(t.seller.supports.length)+"个\n\t\t\t")]):t._e(),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})])]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:function(s){t.showDetail()}}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detial-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("p",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("Star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.iconClassMap[s.type]}),t._v(" "),e("span",[t._v(t._s(s.description))])])})),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[t._v("\n\t\t\t\t\t\t"+t._s(t.seller.bulletin)+"\n\t\t\t\t\t")])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:function(s){t.hideDetail()}}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"seller"},[t._v("\n\t商家\n")])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses,function(t){return e("span",{staticClass:"star-item",class:t})}))},staticRenderFns:[]}}],[33]);
//# sourceMappingURL=app.6188c4214eb0054403bc.js.map