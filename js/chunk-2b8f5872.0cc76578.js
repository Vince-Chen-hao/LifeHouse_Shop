(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b8f5872"],{3650:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"container mb-4 "},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-3 text-center"},[a("div",{staticClass:"bg-muted py-1",class:{"bg-info text-white active":"1"===t.progress}},[a("strong",[t._v("STEP 01")]),a("p",{staticClass:"h6"},[t._v("確認訂單資訊")])])]),a("div",{staticClass:"col-3 text-center"},[a("div",{staticClass:"bg-muted py-1",class:{"bg-info text-white active ":"2"===t.progress}},[a("strong",[t._v("STEP 02")]),a("p",{staticClass:"h6"},[t._v("輸入訂購資料")])])]),a("div",{staticClass:"col-3 text-center"},[a("div",{staticClass:"bg-muted py-1",class:{"bg-info text-white active":"3"===t.progress}},[a("strong",[t._v("STEP 03")]),a("p",{staticClass:"h6"},[t._v("付款/完成訂單")])])])])])])},c=[],i={data:function(){return{}},props:["progress"]},r=i,n=a("2877"),o=Object(n["a"])(r,e,c,!1,null,null,null);s["a"]=o.exports},"6b01":function(t,s,a){},b480:function(t,s,a){"use strict";var e=a("6b01"),c=a.n(e);c.a},c0ad:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("BuyProgress",{attrs:{progress:t.step}}),a("div",{staticClass:"py-2 check-order container "},[a("table",{staticClass:"table table-sm my-4"},[t._m(0),a("tbody",t._l(t.cart.carts,(function(s,e){return a("tr",{key:e},[a("td",[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"order-product-img mr-3",style:{backgroundImage:"url("+s.product.imageUrl+")"}}),a("div",[t._v(t._s(s.product.title))])])]),a("td",{staticClass:"align-middle text-center"},[t._v(t._s(s.qty)+"/"+t._s(s.product.unit))]),a("td",{staticClass:"align-middle text-right"},[t._v(" "+t._s(t._f("currency")(s.product.origin_price))+" ")]),a("td",{staticClass:"align-middle text-right"},[t._v(" "+t._s(t._f("currency")(s.product.price))+" ")]),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(s.total)))]),a("td",{staticClass:"align-middle text-center"},[a("a",{staticClass:"text-danger",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.removeCart(s.id)}}},[a("i",{staticClass:"fas fa-trash-alt"})])])])})),0)]),a("hr"),a("div",{staticClass:"container mb-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"alert alert-secondary"},[t._v(" 輸入「NEWMEMBER2020」，新會員享88折優惠 ")]),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(s){s.target.composing||(t.coupon_code=s.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-info",on:{click:function(s){return s.preventDefault(),t.addCouponCode(s)}}},[t._v(" 套用優惠券 ")])])])]),a("div",{staticClass:"col-md-4"},[a("table",{staticClass:"table order-product-table border-0"},[a("tbody",[a("tr",[a("td",[t._v("總金額")]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.cart.total)))])]),a("tr",[a("td",[t._v("優惠折抵")]),a("td",{staticClass:"text-right"},[t._v("-"+t._s(t._f("currency")(t.cart.total-t.cart.final_total)))])]),a("tr",[a("td",[t._v("應付金額")]),a("td",{staticClass:"text-right text-secondary"},[t._v(" "+t._s(t._f("currency")(t.cart.final_total))+" ")])])])])]),a("div",{staticClass:"col"},[a("div",{staticClass:"d-flex mt-2"},[a("router-link",{staticClass:"btn btn-outline-info mr-auto",attrs:{to:"/product_list"}},[t._v("返回購物")]),a("router-link",{staticClass:"btn btn-outline-secondary",attrs:{to:"/client_info"}},[t._v("下一步")])],1)])])])])],1)},c=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",{staticClass:"my-4"},[a("tr",[a("th",{staticClass:"text-center"},[t._v("商品資訊")]),a("th",{staticClass:"text-center",attrs:{width:"50"}},[t._v("數量")]),a("th",{staticClass:"text-right",attrs:{width:"100"}},[t._v("單價")]),a("th",{staticClass:"text-right",attrs:{width:"100"}},[t._v("折扣價")]),a("th",{staticClass:"text-right",attrs:{width:"100"}},[t._v("小計")]),a("th",{staticClass:"text-center",attrs:{width:"100"}},[t._v("刪除")])])])}],i=(a("99af"),a("5530")),r=a("3650"),n=a("2f62"),o={components:{BuyProgress:r["a"]},data:function(){return{coupon_code:"",step:"1"}},methods:{getCart:function(){this.$store.dispatch("getCart")},removeCart:function(t){var s="".concat("https://vue-course-api.hexschool.io","/api/").concat("vincechen","/cart/").concat(t),a=this;a.$store.dispatch("updateLoading",!0),a.$http.delete(s).then((function(t){a.$bus.$emit("message:push",t.data.message,"danger"),a.$store.dispatch("updateLoading",!1),a.getCart()}))},addCouponCode:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("vincechen","/coupon"),s=this;s.$store.dispatch("updateLoading",!0);var a={data:{code:s.coupon_code}};s.$http.post(t,a).then((function(t){1==t.data.success?s.$bus.$emit("message:push",t.data.message,"success"):0==t.data.success&&s.$bus.$emit("message:push",t.data.message,"danger"),s.$store.dispatch("updateLoading",!1),s.getCart()}))},goCheckout:function(){this.$router.push("/customer_order")}},filters:{NumCeiling:function(t){return Math.ceil(t)}},computed:Object(i["a"])({},Object(n["b"])(["cart"])),created:function(){this.getCart()}},l=o,d=(a("b480"),a("2877")),u=Object(d["a"])(l,e,c,!1,null,"978b5832",null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2b8f5872.0cc76578.js.map