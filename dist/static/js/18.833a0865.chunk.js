(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[18],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var r=a(31),n=a.n(r),c=a(48),s=a(32),l=a(35),i=a(0),o=a.n(i),d=a(1),u=a(44),m=a(37),p=a(38),v=a(41),f=a(36),h=a(61);function b(e){var t=d.c.get().userId,a=Object(i.useState)(e.location.state.order),r=Object(l.a)(a,2),b=r[0],E=(r[1],Object(i.useState)([])),g=Object(l.a)(E,2),w=g[0],O=g[1],y=Object(i.useState)([]),j=Object(l.a)(y,2),_=j[0],x=j[1],N=Object(i.useState)(!1),k=Object(l.a)(N,2),P=k[0],S=k[1],T=Object(i.useState)(!1),D=Object(l.a)(T,2),q=D[0],C=D[1];Object(i.useEffect)((function(){F()}),[]);var F=function(){var e=Object(s.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.prev=1,e.next=4,u.a.fetchDeliveryFormData({orderId:b.id,order_date:Object(v.a)(b.order_date)});case 4:t=e.sent,(a=Object(c.a)(t.deliveryFormData)).push({break_here:1}),O(a),x(t.extraPurchased),S(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("Error...",e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),A=function(e){var t=Object(c.a)(w),a=e.target.name.split("-")[1],r=e.target.value;t.map((function(e){if(e.product_id==a){var t=Object(h.isNotEmpty)(e.paid_quantity)?Number(e.purchased_quantity-e.paid_quantity).toFixed(3):Number(e.purchased_quantity).toFixed(3);if(Number(t)<Number(r))e.will_give="",e.price="",e.is_delivered=0,alert("input quantity is out of stock");else{var n=e.cost/e.purchased_quantity*r;e.price=Number(n).toFixed(2),e.will_give=r,e.is_delivered=1}}})),O(t)},L=function(){var e=Object(s.a)(n.a.mark((function e(a){var r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),S(!0),C(!0),e.prev=3,r=[],w.map((function(e){1===e.is_delivered&&r.push({order_id:b.id,ordered_id:e.id,product_id:e.product_id,tracking_id:e.tracking_id,delivery_date:Object(v.a)(new Date),order_date:Object(v.a)(b.order_date),paid_quantity:e.will_give,unit_id:e.purchased_unit_id,price:e.price,created_by:t})})),e.next=8,u.a.submitDeliveryDetails({productData:r,orderId:b.id});case 8:c=e.sent,S(!1),C(!1),!0===c?window.location.pathname="/view-order-list":alert("Failed Insertion"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log("Error...",e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(a=Object(c.a)(w)).splice(t,1),O(a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(i.Fragment,null,o.a.createElement(m.a,null),o.a.createElement("section",{class:"ftco-section"},o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"row justify-content-center"},o.a.createElement("div",{class:"col-xl-12 ftco-animate fadeInUp ftco-animated"},o.a.createElement("h3",{class:"mb-4 billing-heading"},"Delivery Form"),o.a.createElement("form",{onSubmit:L,class:"p-5 bg-light b-top-dark"},o.a.createElement("div",{class:"row align-items-end"},o.a.createElement("div",{class:"col-md-4"},o.a.createElement("div",{class:"form-group"},o.a.createElement("label",null,"Order Id: "),o.a.createElement("div",{class:"d-flex"},o.a.createElement("h6",null,b.order_id)))),o.a.createElement("div",{class:"col-md-4"},o.a.createElement("div",{class:"form-group"},o.a.createElement("label",null,"Order Date: "),o.a.createElement("div",{class:"d-flex"},o.a.createElement("h6",null,Object(v.b)(b.order_date))))),o.a.createElement("div",{class:"col-md-4"},o.a.createElement("div",{class:"form-group"},o.a.createElement("label",null,"Mobile No.: "),o.a.createElement("div",{class:"d-flex"},o.a.createElement("h6",null,b.mobile)))),o.a.createElement("div",{class:"col-md-4"},o.a.createElement("div",{class:"form-group"},o.a.createElement("label",null,"Customer Name: "),o.a.createElement("div",{class:"d-flex"},o.a.createElement("h6",null,b.full_name)))),o.a.createElement("div",{class:"col-md-8"},o.a.createElement("div",{class:"form-group"},o.a.createElement("label",null,"Address: "),o.a.createElement("div",{class:"d-flex"},o.a.createElement("h6",null,b.flat_add+", "+b.street_add+", "+b.city+", "+b.state+" - "+b.pincode)))),o.a.createElement("div",{class:"col-md-12"}," ",o.a.createElement("hr",null)," "),o.a.createElement("div",{class:"col-md-12"},o.a.createElement("h5",null,"Ordered Product List")),o.a.createElement("div",{class:"w-100 table-div"},o.a.createElement("table",{className:"table table-td"},o.a.createElement("thead",{className:"thead-primary"},o.a.createElement("tr",{className:"text-center"},o.a.createElement("th",{style:{minWidth:"250px"}},"Product"),o.a.createElement("th",{style:{minWidth:"100px"}},"Demand"),o.a.createElement("th",{style:{minWidth:"150px"}},"Available in Stock"),o.a.createElement("th",{style:{minWidth:"150px"}},"Given Quantity"),o.a.createElement("th",{style:{minWidth:"150px"}},"Price"),o.a.createElement("th",null,"\xa0"))),o.a.createElement("tbody",null,(w.length>0?w:[]).map((function(e,t){var a=null===e.purchased_quantity?0:Object(h.isNotEmpty)(e.paid_quantity)?Number(e.purchased_quantity-e.paid_quantity).toFixed(3):Number(e.purchased_quantity).toFixed(3);return 1===e.break_here?o.a.createElement("tr",null,o.a.createElement("td",{colSpan:6},"Extra Products for Delivery")):o.a.createElement("tr",null,o.a.createElement("td",null,e.product_name),o.a.createElement("td",null,e.quantity+" "+e.ordered_unit_name),o.a.createElement("td",null,a>0?a+" "+e.purchased_unit_name:"Not available"),o.a.createElement("td",null,o.a.createElement("div",{class:"d-flex justify-content-center"},o.a.createElement("input",{type:"number",name:"provideQuantity-"+e.product_id,value:e.will_give,class:"cost-input",id:"provideQuantity-"+e.product_id,min:"0",step:"0.01",onChange:A,required:!0,disabled:a<=0}),a>0?o.a.createElement("p",{class:"cost-input-adoptment"}," ",e.purchased_unit_name," "):"")),o.a.createElement("td",{colSpan:1!==e.add_remove?2:0},o.a.createElement("p",{id:"productPrice-"+e.product_id},e.price)),1===e.add_remove&&o.a.createElement("td",{class:"product-remove"},o.a.createElement("a",{onClick:function(){I(t)}},o.a.createElement("span",{class:"ion-ios-close"}))))}))))),o.a.createElement("div",{class:"form-group p-4"},void 0===w.find((function(e){return null!==e.purchased_quantity&&e.purchased_quantity-e.paid_quantity>0}))?o.a.createElement("input",{type:"button",value:"Go Back",class:"btn  px-4 btn-primary",onClick:function(e){window.location.pathname="/view-order-list"}}):o.a.createElement("input",{type:"submit",value:"Submit",class:"btn  px-4 btn-primary",disabled:q}))),o.a.createElement("div",{class:"col-md-12"}," ",o.a.createElement("hr",null)," "),o.a.createElement("div",{class:"col-md-12"},o.a.createElement("h5",null,"Extra Purchased Products")),o.a.createElement("div",{class:"w-100 table-div"},o.a.createElement("table",{className:"table table-td"},o.a.createElement("thead",{className:"thead-primary"},o.a.createElement("tr",{className:"text-center"},o.a.createElement("th",{style:{minWidth:"350px"}},"Product"),o.a.createElement("th",{style:{minWidth:"250px"}},"Available in Stock"),o.a.createElement("th",{style:{minWidth:"200px"}},"Cost"),o.a.createElement("th",{style:{minWidth:"80px"}},"\xa0"))),o.a.createElement("tbody",null,(_.length>0?_:[]).map((function(e,t){var a=null===e.purchased_quantity?0:Object(h.isNotEmpty)(e.paid_quantity)?Number(e.purchased_quantity-e.paid_quantity).toFixed(3):Number(e.purchased_quantity).toFixed(3);return o.a.createElement("tr",null,o.a.createElement("td",null,e.product_name),o.a.createElement("td",null,a>0?a+" "+e.purchased_unit_name:"Not available"),o.a.createElement("td",null,e.cost_of_each*a),o.a.createElement("td",{class:"product-remove"},o.a.createElement("a",{onClick:function(){!function(e){if(!w.find((function(t){return t.product_id===e.product_id}))){var t=Object(c.a)(w);t.push({id:0,product_id:e.product_id,tracking_id:Math.ceil(1e9*Math.random()).toString(),product_name:e.product_name,quantity:0,purchased_unit_id:e.purchased_unit_id,ordered_unit_name:e.purchased_unit_name,purchased_quantity:e.purchased_quantity,purchased_unit_name:e.purchased_unit_name,paid_quantity:e.paid_quantity,cost:e.cost,add_remove:1}),O(t)}}(e)}},o.a.createElement("span",null,"+"))))})))))))))),o.a.createElement(p.a,null),P?o.a.createElement(f.a,null):null)}},33:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(1);function n(e){(e||401===e.response.status)&&(r.c.remove(),document.location.reload())}},34:function(e,t,a){"use strict";function r(){return{Authorization:"Basic ".concat(sessionStorage.token),"content-type":"application/json"}}a.d(t,"a",(function(){return r}))},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a.n(r);function c(){return n.a.createElement("div",{id:"ftco-loader",class:"show fullscreen",style:{visibility:"visible",opacity:".5"}},n.a.createElement("svg",{class:"circular",width:"48px",height:"48px"},n.a.createElement("circle",{class:"path-bg",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4",stroke:"#eeeeee"}),n.a.createElement("circle",{class:"path",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"#F96D00"})))}},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(35),n=a(0),c=a.n(n),s=a(1);function l(){var e=s.c.get().userId,t=s.c.get().role_id,a=Object(n.useState)(s.d.get().cartTotal),l=Object(r.a)(a,2),i=l[0],o=l[1];return Object(n.useEffect)((function(){o(s.d.get().cartTotal)})),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"py-1 bg-primary"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row no-gutters d-flex align-items-start align-items-center px-md-0"},c.a.createElement("div",{className:"col-lg-12 d-block"},c.a.createElement("div",{className:"row d-flex",style:{padding:"10px"}}))))),c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light",id:"ftco-navbar"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{className:"navbar-brand",href:"/"},"SA SUPERMART"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#ftco-nav","aria-controls":"ftco-nav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"oi oi-menu"})," Menu"),c.a.createElement("div",{className:"collapse navbar-collapse",id:"ftco-nav"},1==e&&1==t?c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:"nav-link"},"Home")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Products"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/add-new-product"},"Add New"),c.a.createElement("a",{className:"dropdown-item",href:"/view-added-product"},"View List"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Orders"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-order-list"},"View Customer Wise"),c.a.createElement("a",{className:"dropdown-item",href:"/view-ordered-product"},"View Product Wise"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Reports"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-order-report"},"Order Report"),c.a.createElement("a",{className:"dropdown-item",href:"/view-ordered-product-report"},"Ordered Product Report"))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Settings"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/change-password"},"Change Password"),c.a.createElement("hr",null),c.a.createElement("a",{className:"dropdown-item",href:"/alter-categories"},"Categories"),c.a.createElement("a",{className:"dropdown-item",href:"/alter-units"},"Units"),c.a.createElement("a",{className:"dropdown-item",href:"/handle-clients"},"Clients"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/logout",className:"nav-link"},"Logout"))):c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:"nav-link"},"Home")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Orders"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/view-user-order-list"},"View "))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown04","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Settings"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdown04"},c.a.createElement("a",{className:"dropdown-item",href:"/change-password"},"Change Password"))),c.a.createElement("li",{className:"nav-item cta cta-colored"},c.a.createElement("a",{href:"/cart-list",className:"nav-link"},c.a.createElement("span",{className:"icon-shopping_cart"}),"[",i,"]")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/logout",className:"nav-link"},"Logout")))))))}},38:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a.n(r);function c(){return n.a.createElement("footer",{style:{backgroundColor:"#82ae46"}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row no-gutters d-flex align-items-start align-items-center px-md-0"},n.a.createElement("div",{className:"col-lg-12 d-block"},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-md pr-4 d-flex topper align-items-center"},n.a.createElement("p",{className:"text"},"Copyright 2019 \xa9All rights reserved | A1abilities PTY TLD  ABN# 82631548224")))))))}},41:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}));var r=a(57);function n(e){return r(e).format("YYYY-MM-DD")}function c(e){return r(e).format("DD-MM-YYYY")}},44:function(e,t,a){"use strict";var r=a(31),n=a.n(r),c=a(32),s=a(39),l=a.n(s),i=a(1),o=a(33),d=a(34),u=function(e){var t=e.methodType;return{method:void 0===t?"GET":t,headers:Object(d.a)()}};t.a={handleOrderConfirmation:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/handleOrderConfirmation"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),generateInvoice:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/generateInvoice"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),submitDeliveryDetails:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/submitDeliveryDetails"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),orderVerificationByCustomer:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/orderVerificationByCustomer"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),fetchDeliveryFormData:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/fetchDeliveryFormData"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),handlePurchasedRecord:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/handlePurchasedRecord"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderedProductList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/getOrderedProductList"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),generatePDFOfOrderedProducts:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/generatePDFOfOrderedProducts"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderedProductListSingleDay:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/getOrderedProductListSingleDay"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),fetchPreviousBillingAddresss:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/fetchPreviousBillingAddresss"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),removeSelectedAddress:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/removeSelectedAddress"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/getOrderList"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getOrderListOfSingleDay:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/getOrderListOfSingleDay"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getCustomerOrderList:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/getCustomerOrderList"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),addNewOrder:function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),r="".concat(i.a,"/order/addNewOrder"),e.prev=2,e.next=5,l()(r,Object.assign({},u({methodType:"POST"}),{data:a}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(o.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}},48:function(e,t,a){"use strict";var r=a(56);var n=a(55);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return c}))},61:function(e,t){e.exports={isNotEmpty:function(e){return null!==e&&void 0!==e&&""!==e}}}}]);
//# sourceMappingURL=18.833a0865.chunk.js.map