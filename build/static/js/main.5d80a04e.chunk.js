(this["webpackJsonpphotos-app"]=this["webpackJsonpphotos-app"]||[]).push([[0],{22:function(t,e,c){},24:function(t,e,c){},44:function(t,e,c){"use strict";c.r(e);var n=c(2),s=c.n(n),i=c(12),l=c.n(i),a=(c(22),c(13)),o=c(14),r=c(17),b=c(16),d=(c(23),c(24),c(15)),j=c.n(d),h=c(0),u=function(t){Object(r.a)(c,t);var e=Object(b.a)(c);function c(t){var n;return Object(a.a)(this,c),(n=e.call(this,t)).getPhotosOfAnAlbum=function(t){t.preventDefault();var e=t.target.elements.album;j()("https://jsonplaceholder.typicode.com/albums/".concat(e.value,"/photos")).then((function(t){var e=t.data;n.setState({titles:e})})).catch((function(t){console.log(t)}))},n.state={titles:[]},n}return Object(o.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"t-container",children:Object(h.jsx)("div",{className:"h-100 w-100 py-2",children:Object(h.jsx)("div",{className:"col-12 tab_container-stock ",children:Object(h.jsxs)("form",{onSubmit:this.getPhotosOfAnAlbum.bind(this),children:[Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("input",{type:"number",className:"form-control",placeholder:"Enter Album's id","aria-label":"Recipient's username","aria-describedby":"basic-addon2",id:"album"}),Object(h.jsx)("div",{className:"input-group-append",children:Object(h.jsx)("button",{className:"btn btn-outline-secondary",type:"submit",value:"submit",children:"Get Album Photos By Id"})})]}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("div",{children:Object(h.jsxs)("table",{className:"table table-borderless",id:"TableForSuppliers",onSubmit:this.getPhotosOfAnAlbum,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"#"}),Object(h.jsx)("th",{scope:"col",children:"Title"}),Object(h.jsx)("th",{scope:"col",children:"Thumbnails"})]})}),this.state.titles.sort((function(t,e){return t.id-e.id})).map((function(t,e){return Object(h.jsx)("tbody",{children:Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:e+1}),Object(h.jsxs)("td",{children:[" ",t.title]}),Object(h.jsxs)("td",{children:["  ",Object(h.jsx)("img",{src:t.thumbnailUrl})," "]})]})})})}))]})})})]})})})})}}]),c}(n.Component),m=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,l=e.getTTFB;c(t),n(t),s(t),i(t),l(t)}))};l.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(u,{})}),document.getElementById("root")),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.5d80a04e.chunk.js.map