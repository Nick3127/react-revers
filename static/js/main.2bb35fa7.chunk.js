(this["webpackJsonpreact-revers"]=this["webpackJsonpreact-revers"]||[]).push([[0],{20:function(e,t,c){e.exports={overlay:"Drawer_overlay__1hi8F",overlayVisible:"Drawer_overlayVisible__B8_o4",drawer:"Drawer_drawer__1ilaK",items:"Drawer_items__1FkK_"}},21:function(e,t,c){e.exports={card:"Card_card__1n_mr",plus:"Card_plus__2XPOp",favorite:"Card_favorite___Sgrt"}},42:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),n=c(13),s=c(35),i=c.n(s),l=(c(42),c(43),c(11)),o=c(14),d=c(8),j=c.n(d),u=c(12),b=c(4),h=a.a.createContext({}),x=function(){var e=a.a.useContext(h),t=e.cartItems,c=e.setCartItems,r=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:c,totalPrice:r}},m=c(0);var p=function(e){var t=x().totalPrice;return Object(m.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(m.jsx)(n.b,{to:"",children:Object(m.jsxs)("div",{className:"d-flex align-center",children:[Object(m.jsx)("img",{width:40,height:40,src:"img/logo.png",alt:"Logotype"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{className:"text-uppercase",children:"Reverse Company"}),Object(m.jsx)("p",{className:"opacity-5",children:"Good stuff community"})]})]})}),Object(m.jsxs)("ul",{className:"d-flex",children:[Object(m.jsx)("li",{children:Object(m.jsx)(n.b,{to:"gallery",children:Object(m.jsx)("img",{className:"mr-20 cu-p",width:55,height:25,src:"img/gallery.svg",alt:"\u0413\u0430\u043b\u0435\u0440\u0435\u044f"})})}),Object(m.jsxs)("li",{onClick:e.onClickCart,className:"mr-30 cu-p",children:[Object(m.jsx)("img",{width:18,height:18,src:"img/cart.svg",alt:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(m.jsxs)("span",{children:[t," \u20bd"]})]}),Object(m.jsx)("li",{children:Object(m.jsx)(n.b,{to:"favorites",children:Object(m.jsx)("img",{className:"mr-20 cu-p",width:18,height:18,src:"img/heart.svg",alt:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})})}),Object(m.jsx)("li",{children:Object(m.jsx)(n.b,{to:"orders",children:Object(m.jsx)("img",{width:18,height:18,src:"img/user.svg",alt:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"})})})]})]})},f=c(5),O=c.n(f),v=function(e){var t=e.title,c=e.image,r=e.description,n=a.a.useContext(h).setCartOpened;return Object(m.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(m.jsx)("img",{className:"mb-20",width:"120px",height:"120px",src:c,alt:"Empty"}),Object(m.jsx)("h2",{children:t}),Object(m.jsx)("p",{className:"opacity-6",children:r}),Object(m.jsxs)("button",{onClick:function(){return n(!1)},className:"greenButton",children:[Object(m.jsx)("img",{width:18,height:18,src:"img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},g=c(20),w=c.n(g),N=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var k=function(e){var t=e.onClose,c=e.onRemove,r=e.items,n=void 0===r?[]:r,s=e.opened,i=x(),l=i.cartItems,o=i.setCartItems,d=i.totalPrice,h=a.a.useState(null),p=Object(b.a)(h,2),f=p[0],g=p[1],k=a.a.useState(!1),y=Object(b.a)(k,2),C=y[0],_=y[1],I=a.a.useState(!1),S=Object(b.a)(I,2),A=S[0],F=S[1],P=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,F(!0),e.next=4,O.a.post("https://614c78ba59e92d00176ad282.mockapi.io/orders",{items:l});case 4:t=e.sent,c=t.data,g(c.id),_(!0),o([]),r=0;case 10:if(!(r<Array.length)){e.next=19;break}return a=l[r],e.next=14,O.a.put("https://614c78ba59e92d00176ad282.mockapi.io/cart/"+a.id);case 14:return e.next=16,N(1e3);case 16:r++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u0430!");case 24:F(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"".concat(w.a.overlay," ").concat(s?w.a.overlayVisible:""),children:Object(m.jsxs)("div",{className:w.a.drawer,children:[Object(m.jsxs)("h2",{className:"d-flex justify-between mb-30",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430"," ",Object(m.jsx)("img",{onClick:t,className:"cu-p",width:17,height:17,src:"/img/btn-remove.svg",alt:"Close"})]}),n.length>0?Object(m.jsxs)("div",{className:"d-flex flex-column flex",children:[Object(m.jsx)("div",{className:"items flex",children:n.map((function(e){return Object(m.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(m.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")")},className:"cartItemImg"}),Object(m.jsxs)("div",{className:"mr-20 flex",children:[Object(m.jsx)("p",{className:"mb-5",children:e.title}),Object(m.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(m.jsx)("img",{onClick:function(){return c(e.id)},className:"removeBtn",width:18,height:18,src:"img/btn-remove.svg",alt:"Remove"})]},e.id)}))}),Object(m.jsxs)("div",{className:"cartTotalBlock",children:[Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(m.jsx)("div",{}),Object(m.jsxs)("b",{children:[d," \u20bd"]})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(m.jsx)("div",{}),Object(m.jsxs)("b",{children:[5*d/100," \u20bd"]})]})]}),Object(m.jsxs)("button",{disabled:A,onClick:P,className:"greenButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",Object(m.jsx)("img",{width:18,height:18,src:"img/arrow.svg",alt:"Arrow"})]})]})]}):Object(m.jsx)(v,{title:C?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:C?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u2116".concat(f," \u0431\u0443\u0434\u0435\u0442 \u0443\u043f\u0430\u043a\u043e\u0432\u0430\u043d \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0435 2 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u044f"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u0442\u043e\u0432\u0430\u0440\u043e\u0432, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437!",image:C?"img/complete-order2.jpg":"img/empty-cart4.gif"})]})})},y=c(2),C=c(19),_=c(21),I=c.n(_);var S=function(e){var t=e.id,c=e.title,r=e.imageUrl,n=e.price,s=e.onFavorite,i=e.onPlus,l=e.favorited,o=void 0!==l&&l,d=e.loading,j=void 0!==d&&d,u=a.a.useContext(h).isItemAdded,x=a.a.useState(o),p=Object(b.a)(x,2),f=p[0],O=p[1],v={id:t,parentId:t,title:c,imageUrl:r,price:n};return Object(m.jsx)("div",{className:I.a.card,children:j?Object(m.jsxs)(C.a,{speed:2,width:150,height:250,viewBox:"0 0 150 265",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(m.jsx)("rect",{x:"1",y:"0",rx:"10",ry:"10",width:"155",height:"155"}),Object(m.jsx)("rect",{x:"0",y:"167",rx:"5",ry:"5",width:"155",height:"15"}),Object(m.jsx)("rect",{x:"0",y:"187",rx:"5",ry:"5",width:"100",height:"15"}),Object(m.jsx)("rect",{x:"1",y:"234",rx:"5",ry:"5",width:"80",height:"25"}),Object(m.jsx)("rect",{x:"124",y:"230",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(m.jsxs)(m.Fragment,{children:[s&&Object(m.jsx)("div",{className:I.a.favorite,onClick:function(){s(v),O(!f)},children:Object(m.jsx)("img",{width:17,height:17,src:f?"img/heart-liked.svg":"img/heart-unliked.svg",alt:"Favorite"})}),Object(m.jsx)("img",{width:112,height:133,src:r,alt:"Decks"}),Object(m.jsx)("h5",{children:c}),Object(m.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(m.jsxs)("div",{className:"d-flex flex-column",children:[Object(m.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(m.jsx)("b",{children:n})]}),i&&Object(m.jsx)("img",{className:I.a.plus,onClick:function(){i(v)},width:17,height:17,src:u(t)?"img/btn-checked.svg":"img/btn-plus.svg",alt:"Plus"})]})]})})};var A=function(e){var t=e.items,c=e.searchValue,r=e.setSearchValue,a=e.onChangeSearchInput,n=e.onAddToFavorite,s=e.onAddToCart,i=e.isLoading;return Object(m.jsxs)("div",{className:"content p-40",children:[Object(m.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(m.jsx)("h1",{children:c?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(c,'"'):"\u0410\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442"}),Object(m.jsxs)("div",{className:"search-block d-flex",children:[c&&Object(m.jsx)("img",{onClick:function(){return r("")},className:"clear cu-p",src:"img/btn-remove.svg",alt:"Clear"}),Object(m.jsx)("input",{onChange:a,value:c,placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]}),Object(m.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return(i?Object(o.a)(Array(8)):e).map((function(e,t){return Object(m.jsx)(S,Object(l.a)({onFavorite:function(e){return n(e)},onPlus:function(e){return s(e)},loading:i},e),t)}))}()})]})};var F=function(){var e=a.a.useContext(h),t=e.favorites,c=e.onAddToFavorite;return Object(m.jsxs)("div",{className:"content p-40",children:[Object(m.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(m.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(m.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e,t){return Object(m.jsx)(S,Object(l.a)({favorited:!0,onFavorite:c},e),t)}))})]})};var P=function(e){var t=e.isLoading,c=void 0===t||t;return Object(m.jsx)("div",{className:"content p-40",children:c?Object(m.jsx)(C.a,{speed:2,width:150,height:265,viewBox:"0 0 150 265",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:Object(m.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"389",height:"460"})}):Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"content p-40",children:[Object(m.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(m.jsx)("h1",{children:"\u0413\u0430\u043b\u0435\u0440\u0435\u044f"})}),Object(m.jsxs)("div",{className:"d-flex flex-wrap justify-between",children:[Object(m.jsx)("p",{children:Object(m.jsx)("img",{width:389,height:460,src:"img/11.jpg",alt:"\u0444\u043e\u0442\u043e1"})}),Object(m.jsx)("p",{children:Object(m.jsx)("img",{width:389,height:460,src:"img/12.jpg",alt:"\u0444\u043e\u0442\u043e2"})}),Object(m.jsx)("p",{children:Object(m.jsx)("img",{width:389,height:460,src:"img/13.jpg",alt:"\u0444\u043e\u0442\u043e3"})}),Object(m.jsx)("p",{children:Object(m.jsx)("img",{width:389,height:460,src:"img/14.jpg",alt:"\u0444\u043e\u0442\u043e4"})})]})]})})})};var T=function(){var e=a.a.useState([]),t=Object(b.a)(e,2),c=t[0],r=t[1],n=a.a.useState(!0),s=Object(b.a)(n,2),i=s[0],d=s[1];return a.a.useEffect((function(){Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://614c78ba59e92d00176ad282.mockapi.io/orders");case 3:t=e.sent,c=t.data,r(c.reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t.items))}),[])),d(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0437\u0430\u043a\u0430\u0437\u043e\u0432!"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(m.jsxs)("div",{className:"content p-40",children:[Object(m.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(m.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(m.jsx)("div",{className:"d-flex flex-wrap",children:c.map((function(e,t){return Object(m.jsx)(S,Object(l.a)({loading:i},e),t)}))})]})};var B=function(){var e=a.a.useState([]),t=Object(b.a)(e,2),c=t[0],r=t[1],n=a.a.useState([]),s=Object(b.a)(n,2),i=s[0],d=s[1],x=a.a.useState([]),f=Object(b.a)(x,2),v=f[0],g=f[1],w=a.a.useState(""),N=Object(b.a)(w,2),C=N[0],_=N[1],I=a.a.useState(!1),S=Object(b.a)(I,2),B=S[0],L=S[1],V=a.a.useState(!0),D=Object(b.a)(V,2),E=D[0],R=D[1];a.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,c,a,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([O.a.get("https://614c78ba59e92d00176ad282.mockapi.io/cart"),O.a.get("https://614c78ba59e92d00176ad282.mockapi.io/favorites"),O.a.get("https://614c78ba59e92d00176ad282.mockapi.io/items")]);case 3:t=e.sent,c=Object(b.a)(t,3),a=c[0],n=c[1],s=c[2],R(!1),d(a.data),g(n.data),r(s.data),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445!"),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var U=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=i.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return d((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,O.a.delete("https://614c78ba59e92d00176ad282.mockapi.io/cart/".concat(c.id));case 6:e.next=14;break;case 8:return d((function(e){return[].concat(Object(o.a)(e),[t])})),e.next=11,O.a.post("https://614c78ba59e92d00176ad282.mockapi.io/cart",t);case 11:r=e.sent,a=r.data,d((function(e){return e.map((function(e){return e.parentId===a.parentId?Object(l.a)(Object(l.a)({},e),{},{id:a.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443!"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!v.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}O.a.delete("https://614c78ba59e92d00176ad282.mockapi.io/favorites/".concat(t.id)),g((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,O.a.post("https://614c78ba59e92d00176ad282.mockapi.io/favorites",t);case 8:c=e.sent,r=c.data,g((function(e){return[].concat(Object(o.a)(e),[r])}));case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(h.Provider,{value:{items:c,cartItems:i,favorites:v,isItemAdded:function(e){return i.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToFavorite:J,onAddToCart:U,setCartOpened:L,setCartItems:d},children:Object(m.jsxs)("div",{className:"wrapper clear",children:[Object(m.jsx)(k,{items:i,onClose:function(){return L(!1)},onRemove:function(e){try{O.a.delete("https://614c78ba59e92d00176ad282.mockapi.io/cart/".concat(e)),d((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))}))}catch(t){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b!"),console.error(t)}},opened:B}),Object(m.jsx)(p,{onClickCart:function(){return L(!0)}}),Object(m.jsx)(y.a,{path:"",exact:!0,children:Object(m.jsx)(A,{items:c,cartItems:i,searchValue:C,setSearchValue:_,onChangeSearchInput:function(e){_(e.target.value)},onAddToFavorite:J,onAddToCart:U,isLoading:E})}),Object(m.jsx)(y.a,{path:"gallery",exact:!0,children:Object(m.jsx)(P,{isLoading:E})}),Object(m.jsx)(y.a,{path:"favorites",exact:!0,children:Object(m.jsx)(F,{})}),Object(m.jsx)(y.a,{path:"orders",exact:!0,children:Object(m.jsx)(T,{})})]})})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(n.a,{children:Object(m.jsx)(B,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.2bb35fa7.chunk.js.map