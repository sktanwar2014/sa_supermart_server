(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[7],{34:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(7);function a(e){(e||401===e.response.status)&&(r.b.remove(),document.location.reload())}},35:function(e,t,n){"use strict";function r(){return{Authorization:"Basic ".concat(sessionStorage.token),"content-type":"application/json"}}n.d(t,"a",(function(){return r}))},70:function(e,t,n){"use strict";n.r(t);var r=n(32),a=n.n(r),c=n(33);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var u=n(41),i=n(0),p=n.n(i),l=n(7),m=n(36),f=n.n(m),d=n(34),b=n(35),v=function(e){var t=e.methodType;return{method:void 0===t?"GET":t,headers:Object(b.a)()}},h={login:function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.assign({},t),r="".concat(l.a,"/auth/login"),e.prev=2,e.next=5,f()(r,Object.assign({},v({methodType:"POST"}),{data:n}));case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),Object(d.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),addUpdateFormContent:function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.assign({},t),r="".concat(l.a,"/api/addUpdateFormContent"),e.prev=2,e.next=5,f()(r,Object.assign({},v({methodType:"POST"}),{data:n.formData}));case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),Object(d.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getTabRelatedList:function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.assign({},t),r="".concat(l.a,"/api/getTabRelatedList"),e.prev=2,e.next=5,f()(r,Object.assign({},v({methodType:"POST"}),{data:n}));case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),Object(d.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),getContactList:function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.assign({},t),r="".concat(l.a,"/api/getContactList"),e.prev=2,e.next=5,f()(r,Object.assign({},v({methodType:"GET"}),{data:n}));case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),Object(d.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),changeState:function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.assign({},t),r="".concat(l.a,"/api/changeState"),e.prev=2,e.next=5,f()(r,Object.assign({},v({methodType:"POST"}),{data:n}));case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(2),Object(d.a)(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()};function g(e){l.b.remove();var t=e.history,n=Object(i.useState)({username:"",password:""}),r=Object(u.a)(n,2),m=r[0],f=r[1],d=function(e){f(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},m,o({},e.target.name,e.target.value)))},b=function(){var e=Object(c.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===m.username||""===m.password){e.next=12;break}return e.prev=1,e.next=4,h.login({username:m.username,password:m.password});case 4:n=e.sent,console.log(n),void 0!==n.length&&n.length>0?(l.b.set(n[0]),t.push("/")):alert("Invalid Credentials"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Error...",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return p.a.createElement("section",{className:"login_form_inner"},p.a.createElement("div",{className:"container"},p.a.createElement("div",{className:"row"},p.a.createElement("div",{className:"col-md-12"},p.a.createElement("h3",null,"Log in to enter"),p.a.createElement("div",{className:"bg-white p-5 contact-form"},p.a.createElement("div",{className:"form-group"},p.a.createElement("input",{type:"text",className:"form-control login_form_input",placeholder:"Username",name:"username",onChange:d,required:!0})),p.a.createElement("div",{className:"form-group"},p.a.createElement("input",{type:"password",className:"form-control login_form_input",placeholder:"Password",name:"password",onChange:d,required:!0})),p.a.createElement("div",{className:"form-group",style:{marginTop:"30px"}},p.a.createElement("button",{type:"submit",value:"submit",className:"btn submit_btn",onClick:b},"Log In")))))))}n.d(t,"default",(function(){return g}))}}]);
//# sourceMappingURL=7.38cbb32b.chunk.js.map