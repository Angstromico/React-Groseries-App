(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),r=c(9),i=c.n(r),a=(c(16),c(11)),l=c(6),o=c(4),j=c(3),u=c(1),b=function(e){var t=e.items,c=e.removeItem,n=e.editItem;return Object(u.jsx)("div",{className:"grocery-list",children:t.map((function(e){var t=e.id,s=e.title;return Object(u.jsxs)("article",{className:"grocery-item",children:[Object(u.jsx)("p",{className:"title",children:s}),Object(u.jsxs)("div",{className:"btn-container",children:[Object(u.jsx)("button",{className:"edit-btn",type:"button",onClick:function(){return n(t)},children:Object(u.jsx)(j.b,{})}),Object(u.jsx)("button",{className:"delete-btn",type:"button",onClick:c,children:Object(u.jsx)(j.e,{})})]})]},t)}))})},d=function(e){var t=e.type,c=e.msg,s=e.removeAlert,r=e.list;return Object(n.useEffect)((function(){var e=setTimeout((function(){s()}),3e3);return function(){return clearTimeout(e)}}),[r]),Object(u.jsx)("p",{className:"alert alert-".concat(t),children:c})},m=c(10),O=[{id:1,url:"/",text:"home"},{id:2,url:"/about",text:"about"},{id:3,url:"/projects",text:"projects"},{id:4,url:"/contact",text:"contact"},{id:5,url:"/profile",text:"profile"}],h=[{id:1,url:"https://twitter.com/MoralesZuarez28",icon:Object(u.jsx)(j.c,{})},{id:2,url:"https://www.facebook.com/manuel.moraleszuarez/",icon:Object(u.jsx)(j.f,{})},{id:3,url:"https://www.linkedin.com/in/manuel-esteban-morales-zuarez-68573b189/",icon:Object(u.jsx)(j.d,{})},{id:4,url:"https://github.com/Angstromico",icon:Object(u.jsx)(m.a,{})}],x=c.p+"static/media/logo.f13078c1.svg",f=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useRef)(null),i=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=i.current.getBoundingClientRect().height;r.current.style.height=c?"".concat(e,"px"):"0px"}),[c]),Object(u.jsx)("nav",{children:Object(u.jsxs)("div",{className:"nav-center",children:[Object(u.jsxs)("div",{className:"nav-header",children:[Object(u.jsx)("img",{src:x,alt:"logo"}),Object(u.jsx)("button",{className:"nav-toggle",onClick:function(){return s(!c)},children:Object(u.jsx)(j.a,{})})]}),Object(u.jsx)("div",{className:"links-container",ref:r,children:Object(u.jsx)("ul",{className:"links",ref:i,children:O.map((function(e){var t=e.id,c=e.url,n=e.text;return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:c,children:n})},t)}))})}),Object(u.jsx)("ul",{className:"social-icons",children:h.map((function(e){var t=e.id,c=e.url,n=e.icon;return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:c,children:n})},t)}))})]})})},v=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("nav",{className:"nav",children:Object(u.jsxs)("div",{className:"nav-center",children:[Object(u.jsx)("ul",{className:"social-icons",children:h.map((function(e){var t=e.id,c=e.url,n=e.icon;return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:c,children:n})},t)}))}),Object(u.jsx)("div",{className:"links-container",children:Object(u.jsx)("ul",{className:"links",children:O.map((function(e){var t=e.id,c=e.url,n=e.text;return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:c,children:n})},t)}))})}),Object(u.jsx)("div",{className:"nav-header",children:Object(u.jsx)("img",{src:x,alt:"logo"})})]})})})};var g=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(function(){var e=localStorage.getItem("list");return e?JSON.parse(e):[]}()),i=Object(o.a)(r,2),j=i[0],m=i[1],O=Object(n.useState)(!1),h=Object(o.a)(O,2),x=h[0],g=h[1],p=Object(n.useState)(null),N=Object(o.a)(p,2),y=N[0],w=N[1],S=Object(n.useState)({show:!1,msg:"",type:""}),k=Object(o.a)(S,2),I=k[0],C=k[1],E=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";C({show:e,msg:t,type:c})};return Object(n.useEffect)((function(){localStorage.setItem("list",JSON.stringify(j))}),[j]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsxs)("section",{className:"section-center",children:[Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),c)if(c&&x)m(j.map((function(e){return e.id===y?Object(l.a)(Object(l.a)({},e),{},{title:c}):e}))),s(""),w(null),g(!1),E(!0,"You successfully change the Item ".concat(c),"success");else{E(!0,"You Succesfully Create the item ".concat(c),"success");var t={id:(new Date).getTime().toString(),title:c};m([].concat(Object(a.a)(j),[t])),s("")}else E(!0,"Please enter some Value","danger")},className:"grocery-form",children:[I.show&&Object(u.jsx)(d,Object(l.a)(Object(l.a)({},I),{},{removeAlert:E,list:j})),Object(u.jsx)("h3",{children:"grocery bud"}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("input",{type:"text",className:"grocery",placeholder:"Example: Eggs",value:c,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("button",{className:"submit-btn",type:"submit",children:x?"edit":"submit"})]})]}),j.length>0&&Object(u.jsxs)("div",{className:"grocery-container",children:[Object(u.jsx)(b,{items:j,removeItem:function(e){E(!0,"The item ".concat(c," was erase"),"danger"),m(j.filter((function(t){return t.id===e})))},editItem:function(e){var t=j.find((function(t){return t.id===e}));g(!0),w(e),s(t.title)}}),Object(u.jsx)("button",{className:"clear-btn",onClick:function(){E(!0,"The List of Items is now clear","danger"),m([])},children:"clear items"})]})]}),Object(u.jsx)(v,{})]})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.d06a91b2.chunk.js.map