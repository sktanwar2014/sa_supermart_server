(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[10],{80:function(e,t,r){"use strict";r.r(t);var a=r(5),n=r.n(a),c=r(9);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var u=r(11),i=r(0),p=r.n(i),l=r(1),m=r(12),b=r.n(m),f=r(13),d=r(18),h=function(e){var t=e.methodType;return{method:void 0===t?"GET":t,headers:Object(d.a)()}},v={login:function(){var e=Object(c.a)(n.a.mark((function e(t){var r,a,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object.assign({},t),a="".concat(l.a,"/auth/login"),e.prev=2,e.next=5,b()(a,Object.assign({},h({methodType:"POST"}),{data:r}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(f.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),addUpdateFormContent:function(){var e=Object(c.a)(n.a.mark((function e(t){var r,a,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object.assign({},t),a="".concat(l.a,"/api/addUpdateFormContent"),e.prev=2,e.next=5,b()(a,Object.assign({},h({methodType:"POST"}),{data:r.formData}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(f.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getTabRelatedList:function(){var e=Object(c.a)(n.a.mark((function e(t){var r,a,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object.assign({},t),a="".concat(l.a,"/api/getTabRelatedList"),e.prev=2,e.next=5,b()(a,Object.assign({},h({methodType:"POST"}),{data:r}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(f.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getContactList:function(){var e=Object(c.a)(n.a.mark((function e(t){var r,a,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object.assign({},t),a="".concat(l.a,"/api/getContactList"),e.prev=2,e.next=5,b()(a,Object.assign({},h({methodType:"GET"}),{data:r}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(f.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),changeState:function(){var e=Object(c.a)(n.a.mark((function e(t){var r,a,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object.assign({},t),a="".concat(l.a,"/api/changeState"),e.prev=2,e.next=5,b()(a,Object.assign({},h({methodType:"POST"}),{data:r}));case 5:return c=e.sent,s=c.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),Object(f.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()};function O(e){l.b.remove();var t=e.history,r=Object(i.useState)({username:"",password:""}),a=Object(u.a)(r,2),m=a[0],b=a[1],f=function(e){b(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},m,s({},e.target.name,e.target.value)))},d=function(){var e=Object(c.a)(n.a.mark((function e(){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===m.username||""===m.password){e.next=13;break}return e.prev=1,e.next=4,v.login({username:m.username,password:m.password});case 4:void 0!==(r=e.sent).length&&r.length>0?(l.b.set(r[0]),t.push("/")):alert("Invalid Credentials"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Error...",e.t0);case 11:e.next=14;break;case 13:alert("Fill the details");case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return p.a.createElement("section",{className:"login_form_inner"},p.a.createElement("div",{className:"container"},p.a.createElement("div",{className:"row"},p.a.createElement("div",{className:"col-md-12"},p.a.createElement("h3",null,"Log in to enter"),p.a.createElement("div",{className:"bg-white p-5 contact-form"},p.a.createElement("div",{className:"form-group"},p.a.createElement("input",{type:"text",className:"form-control login_form_input",placeholder:"Username",name:"username",onChange:f,required:!0})),p.a.createElement("div",{className:"form-group"},p.a.createElement("input",{type:"password",className:"form-control login_form_input",placeholder:"Password",name:"password",onChange:f,required:!0})),p.a.createElement("div",{className:"form-group",style:{marginTop:"30px"}},p.a.createElement("button",{type:"submit",value:"submit",className:"btn submit_btn",onClick:d},"Log In")))))))}r.d(t,"default",(function(){return O}))}}]);
//# sourceMappingURL=10.bc68e02a.chunk.js.map