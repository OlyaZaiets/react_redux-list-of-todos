(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{29:function(e,t,c){},31:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a,n=c(10),s=c.n(n),r=c(9),i=c(18),l=c(7),o=c(16),d=c(17),u=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/REMOVE":return null;case"currentTodo/SET":return t.payload;default:return e}},h=c(4);!function(e){e.ALL="all",e.COMPLETED="completed",e.ACTIVE="active"}(a||(a={}));var O=function(e){return{type:"filter/QUERY",payload:e}},f=function(e){return{type:"filter/STATUS",payload:e}},m={status:a.ALL,query:""},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/QUERY":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"filter/STATUS":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});default:return e}},p=c(19),v=function(e){return{type:"todos/SET",payload:e}},y={todos:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?Object(h.a)(Object(h.a)({},e),{},{todos:Object(p.a)(t.payload)}):e},g=Object(l.combineReducers)({currentTodo:b,filter:x,todos:N}),T=Object(l.createStore)(g,Object(o.composeWithDevTools)(Object(l.applyMiddleware)(d.a))),E=c(0),k=(c(27),c(28),c(29),c(11)),S=c(3),w=c(6),C=c.n(w),L=c(12),A=c.n(L),q=r.b,D=r.c;function I(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(31);var M=c(1),R=function(){return Object(M.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(M.jsx)("div",{className:"Loader__content"})})},_=function(){var e=q(),t=Object(E.useState)(!0),c=Object(S.a)(t,2),n=c[0],s=c[1],r=Object(E.useState)(!1),i=Object(S.a)(r,2),l=i[0],o=i[1],d=D((function(e){return e.todos})).todos,j=D((function(e){return e.currentTodo})),b=D((function(e){return e.filter})),h=function(e,t,c){var n=e;switch(t){case a.ACTIVE:n=e.filter((function(e){return!e.completed}));break;case a.COMPLETED:n=e.filter((function(e){return e.completed}))}var s=c.toLocaleLowerCase().trim();return n.filter((function(e){return e.title.toLocaleLowerCase().includes(s)}))}(d,b.status,b.query);return Object(E.useEffect)((function(){var t=function(){var t=Object(k.a)(C.a.mark((function t(){var c;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I("/todos");case 3:c=t.sent,e(v(c)),s(!1),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),o(!0);case 11:return t.prev=11,s(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),n?Object(M.jsx)(R,{}):l?Object(M.jsx)("p",{className:"notification is-danger",children:"Opppsss server error"}):Object(M.jsx)(M.Fragment,{children:h.length?Object(M.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(M.jsx)("thead",{children:Object(M.jsxs)("tr",{children:[Object(M.jsx)("th",{children:"#"}),Object(M.jsx)("th",{children:Object(M.jsx)("span",{className:"icon",children:Object(M.jsx)("i",{className:"fas fa-check"})})}),Object(M.jsx)("th",{children:"Title"}),Object(M.jsx)("th",{children:" "})]})}),Object(M.jsx)("tbody",{children:h.map((function(t){var c=t.id,a=t.title,n=t.completed,s=(null===j||void 0===j?void 0:j.id)===c;return Object(M.jsxs)("tr",{"data-cy":"todo",className:A()({"has-background-info-light":s}),children:[Object(M.jsx)("td",{className:"is-vcentered",children:c}),Object(M.jsx)("td",{className:"is-vcentered",children:n&&Object(M.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(M.jsx)("i",{className:"fas fa-check"})})}),Object(M.jsx)("td",{className:"is-vcentered is-expanded",children:Object(M.jsx)("p",{className:A()({"has-text-danger":!n,"has-text-success":n}),children:a})}),Object(M.jsx)("td",{className:"has-text-right is-vcentered",children:Object(M.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return e(u(t))},children:Object(M.jsx)("span",{className:"icon",children:Object(M.jsx)("i",{className:A()({"far fa-eye-slash":s,"far fa-eye":!s})})})})})]},c)}))})]}):Object(M.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})})},P=function(){var e=q(),t=D((function(e){return e.filter})),c=t.status,a=t.query;return Object(M.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(M.jsx)("p",{className:"control",children:Object(M.jsx)("span",{className:"select",children:Object(M.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(t){e(f(t.target.value))},children:[Object(M.jsx)("option",{value:"all",children:"All"}),Object(M.jsx)("option",{value:"active",children:"Active"}),Object(M.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(M.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(M.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(t){e(O(t.target.value))}}),Object(M.jsx)("span",{className:"icon is-left",children:Object(M.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(M.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:a&&Object(M.jsx)("button",{"aria-label":"clear query","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){e(O(""))}})})]})]})},U=function(){var e=Object(E.useState)(null),t=Object(S.a)(e,2),c=t[0],a=t[1],n=Object(E.useState)(!1),s=Object(S.a)(n,2),r=s[0],i=s[1],l=Object(E.useState)(!0),o=Object(S.a)(l,2),d=o[0],u=o[1],b=q(),h=D((function(e){return e.currentTodo}));return Object(E.useEffect)((function(){var e=function(){var e=Object(k.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!h){e.next=6;break}return e.next=4,c=h.userId,I("/users/".concat(c));case 4:t=e.sent,a(t);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),i(!0);case 11:return e.prev=11,u(!1),e.finish(11);case 14:case"end":return e.stop()}var c}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),h?Object(M.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(M.jsx)("div",{className:"modal-background"}),d?Object(M.jsx)(R,{}):Object(M.jsxs)("div",{className:"modal-card",children:[Object(M.jsxs)("header",{className:"modal-card-head",children:[Object(M.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",null===h||void 0===h?void 0:h.id]}),Object(M.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return b(j())}})]}),Object(M.jsxs)("div",{className:"modal-card-body",children:[Object(M.jsx)("p",{className:"block","data-cy":"modal-title",children:null===h||void 0===h?void 0:h.title}),Object(M.jsxs)("p",{className:"block","data-cy":"modal-user",children:[!(null!==h&&void 0!==h&&h.completed)&&Object(M.jsx)("strong",{className:"has-text-danger",children:"Planned"}),(null===h||void 0===h?void 0:h.completed)&&Object(M.jsx)("strong",{className:"has-text-success",children:"Done"})," by ",Object(M.jsx)("a",{href:"mailto:".concat(null===c||void 0===c?void 0:c.email),children:null===c||void 0===c?void 0:c.name})]}),r&&Object(M.jsx)("div",{className:"notification is-warning",children:"Server error!"})]})]})]}):null},V=function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("div",{className:"section",children:Object(M.jsx)("div",{className:"container",children:Object(M.jsxs)("div",{className:"box",children:[Object(M.jsx)("h1",{className:"title",children:"Todos:"}),Object(M.jsx)("div",{className:"block",children:Object(M.jsx)(P,{})}),Object(M.jsx)("div",{className:"block",children:Object(M.jsx)(_,{})})]})})}),Object(M.jsx)(U,{})]})},B=function(){return Object(M.jsx)(r.a,{store:T,children:Object(M.jsx)(i.a,{children:Object(M.jsx)(V,{})})})};s.a.render(Object(M.jsx)(B,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.eb09df0e.chunk.js.map