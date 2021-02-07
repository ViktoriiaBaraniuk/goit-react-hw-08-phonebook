(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{139:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var r,c,a=n(0),i=n.n(a),o=n(8),s=n.n(o),u=n(26),l=n(7),b=n(90),j=n(61),d=n(12),f=n(91),O=n.n(f),h=n(31),m=n(92),g=n.n(m),p=n(9),x=n(18),v=Object(d.b)("contacts/fetchContactsSuccess"),_=Object(d.b)("contacts/fetchContactsRequest"),w=Object(d.b)("contacts/fetchContactsError"),C=Object(d.b)("contacts/addContactRequest"),k=Object(d.b)("contacts/addContactSuccess"),N=Object(d.b)("contacts/addContactError"),L=Object(d.b)("contacts/deleteContactRequest"),y=Object(d.b)("contacts/deleteContactSuccess"),I=Object(d.b)("contacts/deleteContactError"),S=Object(d.b)("contacts/changeFilter"),R=Object(d.d)([],(r={},Object(p.a)(r,v,(function(e,t){return t.payload})),Object(p.a)(r,k,(function(e,t){return[t.payload].concat(Object(j.a)(e))})),Object(p.a)(r,y,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),r)),F=Object(d.d)("",Object(p.a)({},S,(function(e,t){return t.payload}))),U=Object(d.d)(!1,(c={},Object(p.a)(c,_,(function(){return!0})),Object(p.a)(c,v,(function(){return!1})),Object(p.a)(c,w,(function(){return!1})),Object(p.a)(c,C,(function(){return!0})),Object(p.a)(c,k,(function(){return!1})),Object(p.a)(c,N,(function(){return!1})),Object(p.a)(c,L,(function(){return!0})),Object(p.a)(c,y,(function(){return!1})),Object(p.a)(c,I,(function(){return!1})),c)),E=Object(x.c)({items:R,filter:F,loading:U}),V=n(22),B=n.n(V),T=n(38),P=n(23),D=n.n(P);D.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var A,H=function(e){D.a.defaults.headers.common.Authorization="Bearer ".concat(e)},q=function(){D.a.defaults.headers.common.Authorization=""},z={register:Object(d.c)("auth/register",function(){var e=Object(T.a)(B.a.mark((function e(t){var n,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.post("/users/signup",t);case 3:return n=e.sent,r=n.data,H(r.token),e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),login:Object(d.c)("auth/login",function(){var e=Object(T.a)(B.a.mark((function e(t){var n,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.post("/users/login",t);case 3:return n=e.sent,r=n.data,H(r.token),e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),logOut:Object(d.c)("auth/logout",function(){var e=Object(T.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.post("/users/logout",t);case 3:q(),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),fetchCurrentUser:Object(d.c)("auth/refresh",function(){var e=Object(T.a)(B.a.mark((function e(t,n){var r,c,a,i;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),null!==(c=r.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return H(c),e.prev=5,e.next=8,D.a.get("/users/current");case 8:return a=e.sent,i=a.data,e.abrupt("return",i);case 13:e.prev=13,e.t0=e.catch(5);case 15:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}())},Q=Object(d.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1,errorLogin:null,errorRegister:null},extraReducers:(A={},Object(p.a)(A,z.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(p.a)(A,z.register.pending,(function(e,t){e.errorRegister=null})),Object(p.a)(A,z.register.rejected,(function(e,t){e.errorRegister="Registration error. Please try again"})),Object(p.a)(A,z.login.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(p.a)(A,z.login.pending,(function(e,t){e.errorLogin=null})),Object(p.a)(A,z.login.rejected,(function(e,t){e.errorLogin="Something went wrong. Please try again"})),Object(p.a)(A,z.logOut.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(p.a)(A,z.fetchCurrentUser.pending,(function(e,t){e.isFetchingCurrentUser=!0})),Object(p.a)(A,z.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isFetchingCurrentUser=!1})),Object(p.a)(A,z.fetchCurrentUser.rejected,(function(e,t){e.isFetchingCurrentUser=!1})),A)}).reducer,Z=[].concat(Object(j.a)(Object(d.f)({serializableCheck:{ignoredActions:[h.a,h.f,h.b,h.c,h.d,h.e]}})),[O.a]),J={key:"auth",storage:g.a,whitelist:["token"]},M=Object(d.a)({reducer:{auth:Object(h.g)(J,Q),contacts:E},middleware:Z,devTools:!1}),X=Object(h.h)(M),G=(n(139),n(15)),W=n(30),Y=n(43),K={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUsername:function(e){return e.auth.user.name},getIsFetchingCurrentUser:function(e){return e.auth.isFetchingCurrentUser},getErrorLogin:function(e){return e.auth.errorLogin},getErrorRegister:function(e){return e.auth.errorRegister},getLoading:function(e){return e.auth.isLoading}},$=n(2);function ee(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/":n,c=Object(Y.a)(e,["children","redirectTo"]),a=Object(l.c)(K.getIsLoggedIn);return Object($.jsx)(G.b,Object(W.a)(Object(W.a)({},c),{},{children:a?t:Object($.jsx)(G.a,{to:r})}))}function te(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,c=e.redirectTo,a=void 0===c?"/":c,i=Object(Y.a)(e,["children","restricted","redirectTo"]),o=Object(l.c)(K.getIsLoggedIn)&&r;return Object($.jsx)(G.b,Object(W.a)(Object(W.a)({},i),{},{children:o?Object($.jsx)(G.a,{to:a}):t}))}var ne=n(102),re=n(94),ce=n.n(re),ae=function(e){var t=e.children;return Object($.jsx)("div",{className:ce.a.container,children:t})},ie=n(52),oe=n.n(ie);var se=function(){var e=Object(l.c)(K.getIsLoggedIn);return Object($.jsxs)("nav",{children:[Object($.jsx)(u.b,{to:"/",exact:!0,className:oe.a.link,activeClassName:oe.a.activeLink,children:"Home"}),e&&Object($.jsx)($.Fragment,{children:Object($.jsx)(u.b,{to:"/contacts",exact:!0,className:oe.a.link,activeClassName:oe.a.activeLink,children:"Contacts"})})]})},ue=n(62),le=n.n(ue);function be(){var e=Object(l.b)(),t=Object(l.c)(K.getUsername);return Object($.jsxs)("div",{className:le.a.container,children:[Object($.jsxs)("span",{className:le.a.name,children:["Hello, ",t,"!"]}),Object($.jsx)("button",{className:le.a.button,type:"button",onClick:function(){return e(z.logOut())},children:"Log out"})]})}var je=n(71),de=n.n(je),fe={activeLink:{color:"#ffffff"}};function Oe(){return Object($.jsxs)("div",{children:[Object($.jsx)(u.b,{to:"/register",exact:!0,className:de.a.link,activeStyle:fe.activeLink,children:"Sign up"}),Object($.jsx)(u.b,{to:"/login",exact:!0,className:de.a.link,activeStyle:fe.activeLink,children:"Log in"})]})}var he=n(173),me=n(95),ge=n.n(me);function pe(){var e=Object(l.c)(K.getIsLoggedIn);return Object($.jsx)(he.a,{position:"static",children:Object($.jsxs)("header",{className:ge.a.header,children:[Object($.jsx)(se,{}),e?Object($.jsx)(be,{}):Object($.jsx)(Oe,{})]})})}var xe=n.p+"static/media/back.1928ae81.jpg",ve=n(63),_e=n.n(ve),we=function(){return Object($.jsxs)("div",{className:_e.a.container,children:[Object($.jsx)("h1",{className:_e.a.title,children:" Your contacts under reliable secure "}),Object($.jsx)("img",{className:_e.a.image,src:xe,alt:"open book"})]})},Ce=n(28),ke=n(178),Ne=n(179),Le=n(177),ye=n(47),Ie=n.n(ye),Se=Object(Le.a)((function(){return{root:{width:"30ch",display:"flex",flexDirection:"column",marginBottom:15}}}));function Re(){var e=Object(l.b)(),t=Object(a.useState)(""),n=Object(Ce.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),o=Object(Ce.a)(i,2),s=o[0],u=o[1],b=Object(a.useState)(""),j=Object(Ce.a)(b,2),d=j[0],f=j[1],O=Object(l.c)(K.getErrorRegister),h=Se(),m=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":return c(r);case"email":return u(r);case"password":return f(r);default:return}};return Object($.jsxs)("div",{className:Ie.a.container,children:[Object($.jsx)("p",{className:Ie.a.title,children:"Create your account"}),O&&Object($.jsx)("p",{className:Ie.a.star,children:O}),Object($.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(z.register({name:r,email:s,password:d})),c(""),u(""),f("")},className:Ie.a.form,autoComplete:"off",children:[Object($.jsxs)("div",{className:Ie.a.textfield,children:[Object($.jsx)(ke.a,{id:"name",variant:"outlined",label:"Name",value:r,name:"name",onChange:m,className:h.root}),Object($.jsx)(ke.a,{id:"email",variant:"outlined",label:"Email",name:"email",value:s,onChange:m,className:h.root}),Object($.jsx)(ke.a,{id:"password",variant:"outlined",label:"Password",name:"password",value:d,onChange:m,className:h.root})]}),Object($.jsx)(Ne.a,{variant:"contained",color:"secondary",type:"submit",children:"Create account"})]})]})}var Fe=n(48),Ue=n.n(Fe),Ee=Object(Le.a)((function(){return{root:{width:"30ch",display:"flex",flexDirection:"column",marginBottom:15}}}));function Ve(){var e=Object(l.b)(),t=Object(a.useState)(""),n=Object(Ce.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),o=Object(Ce.a)(i,2),s=o[0],u=o[1],b=Object(l.c)(K.getErrorLogin),j=Ee(),d=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"email":return c(r);case"password":return u(r);default:return}};return Object($.jsxs)("div",{className:Ue.a.container,children:[Object($.jsx)("p",{className:Ue.a.title,children:"Sign in to Phonebook"}),b&&Object($.jsx)("p",{className:Ue.a.error,children:b}),Object($.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(z.login({email:r,password:s})),c(""),u("")},className:Ue.a.form,autoComplete:"off",children:[Object($.jsxs)("div",{className:Ue.a.textfield,children:[Object($.jsx)(ke.a,{id:"email",variant:"outlined",label:"Email",name:"email",value:r,onChange:d,className:j.root}),Object($.jsx)(ke.a,{id:"password",variant:"outlined",label:"Password",name:"password",value:s,onChange:d,className:j.root})]}),Object($.jsx)(Ne.a,{variant:"contained",color:"secondary",type:"submit",children:"Sign in"})]})]})}var Be=n(100),Te=n.n(Be),Pe=n(101),De=n.n(Pe),Ae=n(54),He=function(e){return e.contacts.items},qe=function(e){return e.contacts.filter},ze=Object(Ae.a)([He,qe],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),Qe=function(){return function(){var e=Object(T.a)(B.a.mark((function e(t){var n,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(_()),e.prev=1,e.next=4,D.a.get("/contacts");case 4:n=e.sent,r=n.data,t(v(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(w(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},Ze=n(99),Je=n.n(Ze),Me=function(e){var t=e.children,n=e.onClick,r=Object(Y.a)(e,["children","onClick"]);return Object($.jsx)("button",Object(W.a)(Object(W.a)({type:"button",className:Je.a.IconButton,onClick:n},r),{},{children:t}))};Me.defaultProps={onClick:function(){return null},children:null};var Xe=Me,Ge=n(64),We=n.n(Ge);var Ye=function(){var e=Object(l.c)(ze),t=Object(l.b)();return Object(a.useEffect)((function(){t(Qe())}),[]),Object($.jsx)("ul",{className:We.a.list,children:e.map((function(e){var n=e.id,r=e.name,c=e.number;return Object($.jsxs)("li",{className:We.a.listItem,children:[Object($.jsx)(Te.a,{color:"primary"}),Object($.jsxs)("p",{className:We.a.itemName,children:[r,": ",c]}),Object($.jsx)(Xe,{onClick:function(){return t(function(e){return function(t){t(L()),D.a.delete("/contacts/".concat(e)).then((function(){return t(y(e))})).catch((function(e){return t(I(e))}))}}(n))},"aria-label":"Delete contact",children:Object($.jsx)(De.a,{color:"inherit",fontSize:"small"})})]},n)}))})},Ke=n(72),$e=n.n(Ke),et=Object(Le.a)((function(){return{root:{width:"30ch",display:"flex",flexDirection:"column",marginBottom:15}}}));function tt(){var e=Object(a.useState)(""),t=Object(Ce.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(Ce.a)(c,2),o=i[0],s=i[1],u=Object(l.c)(He),b=Object(l.b)(),j=et(),d=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":r(c);break;case"number":s(c);break;default:return}},f=function(){r(""),s("")};return Object($.jsxs)("form",{onSubmit:function(e){e.preventDefault(),(u.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?(alert("".concat(n," is already in contacts")),1):""===n||""===o?(alert("Please fill in all the fields"),1):void 0)||b(function(e,t){return function(n){var r={name:e,number:t};n(C()),D.a.post("/contacts",r).then((function(e){var t=e.data;return n(k(t))})).catch((function(e){return n(N(e))}))}}(n,o)),f()},className:$e.a.form,children:[Object($.jsx)(ke.a,{id:"outlined-basic",label:"Name",variant:"outlined",type:"text",name:"name",value:n,onChange:d,className:j.root}),Object($.jsx)(ke.a,{id:"outlined-basic",label:"Number",variant:"outlined",type:"text",name:"number",placeholder:"Enter your mobile number",value:o,onChange:d,className:j.root}),Object($.jsx)(Ne.a,{variant:"contained",color:"secondary",type:"submit",className:$e.a.button,children:"Add contact"})]})}var nt=n(73),rt=n.n(nt);var ct=function(){var e=Object(l.c)(qe),t=Object(l.b)();return Object($.jsxs)("label",{className:rt.a.filterForm,children:["Find contacts by name",Object($.jsx)("input",{type:"text",value:e,onChange:function(e){return t(S(e.target.value))},className:rt.a.filter})]})},at=n(74),it=n.n(at);function ot(){var e=Object(l.b)();return Object(a.useEffect)((function(){return e(Qe())}),[e]),Object($.jsxs)("div",{className:it.a.container,children:[Object($.jsx)("h1",{className:it.a.title,children:"Phonebook"}),Object($.jsx)(tt,{}),Object($.jsx)("h2",{children:"Contacts"}),Object($.jsx)(ct,{}),Object($.jsx)(Ye,{})]})}var st=function(){var e=Object(l.c)(K.getIsFetchingCurrentUser),t=Object(l.b)();return Object(a.useEffect)((function(){t(z.fetchCurrentUser())}),[t]),!e&&Object($.jsxs)(ae,{children:[Object($.jsx)(pe,{}),Object($.jsxs)(G.d,{children:[Object($.jsx)(te,{path:"/",exact:!0,children:Object($.jsx)(we,{})}),Object($.jsx)(te,{path:"/register",restricted:!0,redirectTo:"/contacts",children:Object($.jsx)(Re,{})}),Object($.jsx)(te,{path:"/login",restricted:!0,redirectTo:"/contacts",children:Object($.jsx)(Ve,{})}),Object($.jsx)(ee,{path:"/contacts",redirectTo:"/login",children:Object($.jsx)(ot,{})})]}),Object($.jsx)(ne.a,{autoClose:3e3,position:"top-center"})]})};s.a.render(Object($.jsx)(i.a.StrictMode,{children:Object($.jsx)(l.a,{store:M,children:Object($.jsx)(b.a,{loading:null,persistor:X,children:Object($.jsx)(u.a,{children:Object($.jsx)(st,{})})})})}),document.getElementById("root"))},47:function(e,t,n){e.exports={form:"RegisterView_form__6hoTd",label:"RegisterView_label__1H6Pi",container:"RegisterView_container___OIlZ",title:"RegisterView_title__vFORD",input:"RegisterView_input__1xBL-",textfield:"RegisterView_textfield__2zhbX"}},48:function(e,t,n){e.exports={container:"LoginView_container__d5Tuv",title:"LoginView_title__2VHOg",textfield:"LoginView_textfield__35wZ_",form:"LoginView_form__3EVgQ"}},52:function(e,t,n){e.exports={link:"Navigation_link__CEbUP"}},62:function(e,t,n){e.exports={button:"UserMenu_button__2BX6b"}},63:function(e,t,n){e.exports={container:"HomeView_container__1ngvQ",title:"HomeView_title__2l_1_",img:"HomeView_img__2imoa"}},64:function(e,t,n){e.exports={list:"ContactList_list__2j5ke",listItem:"ContactList_listItem__vR44b",deleteBtn:"ContactList_deleteBtn__3G5us",itemName:"ContactList_itemName__3ZfpA"}},71:function(e,t,n){e.exports={link:"AuthNav_link__1FwCS"}},72:function(e,t,n){e.exports={form:"ContactForm_form__sSqUt",button:"ContactForm_button__1ckQB"}},73:function(e,t,n){e.exports={filter:"Filter_filter__gq68P",filterForm:"Filter_filterForm__-xiDf"}},74:function(e,t,n){e.exports={container:"ContactsView_container__Eijwi"}},94:function(e,t,n){},95:function(e,t,n){e.exports={header:"AppBar_header__2l540"}},99:function(e,t,n){e.exports={IconButton:"IconButton_IconButton__wTt4U"}}},[[143,1,2]]]);
//# sourceMappingURL=main.6f32cdb2.chunk.js.map