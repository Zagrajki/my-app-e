(this["webpackJsonpmy-app-e"]=this["webpackJsonpmy-app-e"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),c=n(33),i=n.n(c),o=(n(40),n(41),n(14)),l=n(13),r=n(15),u=(n(20),n(29),n(18));n(43),n(51);u.a.apps.length?u.a.app():u.a.initializeApp({apiKey:"AIzaSyB3Cm0rejUVscGWivnwnJGmIz9G-fXWJ_Q",authDomain:"piwo6-cf927.firebaseapp.com",projectId:"piwo6-cf927",storageBucket:"piwo6-cf927.appspot.com",messagingSenderId:"260533889824",appId:"1:260533889824:web:93c2afc3de84a545944545",measurementId:"G-WJV2YQ1Z61"});var h=u.a.auth(),d=u.a.firestore(),j=function(e,t){d.collection("posts").add({owner:e.uid,dateCreated:u.a.firestore.FieldValue.serverTimestamp(),a:t.a,b:t.b,c:t.c,d:t.d})},m=function(){return d.collection("posts").get()},b=n(1),O=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],s=t[1];Object(a.useEffect)((function(){var e=h.onAuthStateChanged((function(e){e?s(e):(console.log("User not logged"),s(null))}));return function(){return e()}}),[]);return n?Object(b.jsxs)("div",{className:"header1",children:[Object(b.jsx)(l.b,{to:"/",exact:!0,className:"nav-button",children:n.displayName}),Object(b.jsx)(l.b,{to:"/add",className:"nav-button",children:"Dodaj"}),Object(b.jsx)(l.b,{to:"/search",exact:!0,className:"nav-button",children:"Szukaj"}),Object(b.jsx)("a",{href:"/",className:"nav-button",onClick:function(){h.signOut()},children:"Wyloguj"})]}):Object(b.jsxs)("div",{className:"header2",children:[Object(b.jsx)(l.b,{to:"/login",className:"nav-button",children:"Zaloguj"}),Object(b.jsx)(l.b,{to:"/register",className:"nav-button",children:"Zarejestruj"})]})},f=n(5),w=n(23),p=n(24),x=n(25),g=n(26),v=function(e){return Object(b.jsxs)("h2",{children:["Liczba znalezionych: ",e.found_num]})},y=function(e){return Object(b.jsxs)("div",{style:{border:"2px solid gold",background:"pink"},children:[Object(b.jsx)("h1",{style:{position:"static",top:"20px"},children:e.texta}),Object(b.jsx)("p",{style:{position:"static",top:"40px"},children:e.textb}),Object(b.jsx)("p",{style:{position:"static",top:"60px"},children:Object(b.jsxs)("a",{href:"mailto:"+e.textc,target:"_blank",rel:"noreferrer",children:[Object(b.jsx)("img",{src:"data:image/png;base64,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",height:20,alt:"Email: "}),e.textc]})}),Object(b.jsxs)("p",{style:{position:"static",top:"80px"},children:["Tagi: ",e.textd]})]})},V=function(e){return Object(b.jsx)("p",{children:Object(b.jsx)("input",{className:"form-input",type:"text",name:e.name,placeholder:e.name,value:e.newItemValue,onChange:e.handleOnChange,onKeyDown:e.handleOnKey})})},I=function(e){Object(x.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={usedList:[],secondList:[],newItemValueD:"",newItemValueB:"",whatToShow:!0},e.secondListHelper=[],e.found=0,e.all=0,e.handleNewEntryD=function(t){e.setState({newItemValueD:t.target.value})},e.handleNewEntryB=function(t){e.setState({newItemValueB:t.target.value})},e.handleEnterTags=function(t){if("Enter"===t.code)if(""===e.state.newItemValueD)e.setState({whatToShow:!0});else{e.secondListHelper=[],e.found=0;var n=e.state.newItemValueD.split(" ");m().then((function(t){t.forEach((function(t){var a=Object(r.a)({},t.data()),s=0;a.d.split(" ").forEach((function(t){n.forEach((function(n){t===n&&0===s&&(e.secondListHelper=e.secondListHelper.concat({a:a.a,b:a.b,c:a.c,d:a.d}),s=1,e.found=e.found+1)}))}))})),e.setState({secondList:e.secondListHelper.slice(0),whatToShow:!1})})).catch((function(e){console.log(e)}))}},e.handleEnterDes=function(t){"Enter"===t.code&&(""===e.state.newItemValueB?e.setState({whatToShow:!0}):(e.secondListHelper=[],e.found=0,m().then((function(t){t.forEach((function(t){var n=Object(r.a)({},t.data());-1!==n.b.search(e.state.newItemValueB)&&(e.secondListHelper=e.secondListHelper.concat({a:n.a,b:n.b,c:n.c,d:n.d}),e.found=e.found+1)})),e.setState({secondList:e.secondListHelper.slice(0),whatToShow:!1})})).catch((function(e){console.log(e)}))))},e.myList=[],e.tut=!1,e}return Object(p.a)(n,[{key:"render",value:function(){var e=this;!1===this.tut&&m().then((function(t){e.all=0,t.forEach((function(t){e.myList.push(Object(r.a)({},t.data())),e.all++})),e.setState({usedList:e.myList.map((function(e){return Object(b.jsx)(y,{texta:e.a,textb:e.b,textc:e.c,textd:e.d},e.a+e.c)}))}),e.myList=[],e.tut=!1})).catch((function(e){console.log(e)})),this.tut=!0;var t=this.state.secondList.map((function(e){return Object(b.jsx)(y,{texta:e.a,textb:e.b,textc:e.c,textd:e.d},e.a+e.c)}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:this.props.dummyText}),Object(b.jsx)(V,{name:"Wyszukiwanie po tagach",newItemValue:this.state.newItemValueD,handleOnChange:this.handleNewEntryD,handleOnKey:this.handleEnterTags}),Object(b.jsx)(V,{name:"Wyszukiwanie w opisach",newItemValue:this.state.newItemValueB,handleOnChange:this.handleNewEntryB,handleOnKey:this.handleEnterDes}),this.state.whatToShow&&Object(b.jsx)(v,{found_num:this.all}),!this.state.whatToShow&&Object(b.jsx)(v,{found_num:this.found}),this.state.whatToShow&&this.state.usedList,!this.state.whatToShow&&t]})}}]),n}(s.a.Component),E=function(e){Object(x.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={usedList:[]},e.myList=[],e.tut=!1,e}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return!1===this.tut&&m().then((function(t){t.forEach((function(t){e.myList.push(Object(r.a)({},t.data()))})),e.setState({usedList:e.myList.map((function(e){return Object(b.jsx)(y,{texta:e.a,textb:e.b,textc:e.c,textd:e.d},e.a+e.c)}))}),e.myList=[],e.tut=!1})).catch((function(e){console.log(e)})),this.tut=!0,Object(b.jsx)(b.Fragment,{children:this.state.usedList})}}]),n}(s.a.Component),N=function(e){Object(x.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={newItemValueA:"",newItemValueB:"",newItemValueC:"",newItemValueD:"",showWarning:!1},e.errorMessage="Wrong entry value",e.myList=[],e.handleNewEntryA=function(t){e.setState({newItemValueA:t.target.value})},e.handleNewEntryB=function(t){e.setState({newItemValueB:t.target.value})},e.handleNewEntryC=function(t){e.setState({newItemValueC:t.target.value})},e.handleNewEntryD=function(t){e.setState({newItemValueD:t.target.value})},e.addNew=function(){m().then((function(t){t.forEach((function(t){e.myList.push(Object(r.a)({},t.data()))})),e.myList.some((function(t){return t.a===e.state.newItemValueA&&t.c===e.state.newItemValueC}))||""===e.state.newItemValueA||""===e.state.newItemValueB||""===e.state.newItemValueC||""===e.state.newItemValueD?e.setState({showWarning:!0}):j(h.currentUser,{a:e.state.newItemValueA,b:e.state.newItemValueB,c:e.state.newItemValueC,d:e.state.newItemValueD}),e.myList=[]})).catch((function(e){console.log(e)}))},e.handleEnter=function(t){"Enter"===t.code?e.addNew():e.setState({showWarning:!1})},e}return Object(p.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"form",children:[Object(b.jsx)(V,{name:"imie",newItemValue:this.state.newItemValueA,handleOnChange:this.handleNewEntryA,handleOnKey:this.handleEnter}),Object(b.jsx)(V,{name:"opis",newItemValue:this.state.newItemValueB,handleOnChange:this.handleNewEntryB,handleOnKey:this.handleEnter}),Object(b.jsx)(V,{name:"email",newItemValue:this.state.newItemValueC,handleOnChange:this.handleNewEntryC,handleOnKey:this.handleEnter}),Object(b.jsx)(V,{name:"tagi",newItemValue:this.state.newItemValueD,handleOnChange:this.handleNewEntryD,handleOnKey:this.handleEnter}),Object(b.jsx)("button",{onClick:this.addNew,children:"Dodaj"}),this.state.showWarning&&Object(b.jsx)("h1",{style:{color:"red"},children:this.errorMessage})]})}}]),n}(s.a.Component),A=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),i=Object(o.a)(c,2),l=i[0],r=i[1],u=Object(a.useState)(!1),d=Object(o.a)(u,2),j=d[0],m=d[1];return j?Object(b.jsx)(f.a,{to:"/"}):Object(b.jsxs)("div",{className:"form",children:[Object(b.jsx)("input",{className:"form-input",placeholder:"Email",value:n,onChange:function(e){return s(e.target.value)}}),Object(b.jsx)("input",{className:"form-input",placeholder:"Has\u0142o",value:l,type:"password",onChange:function(e){return r(e.target.value)}}),Object(b.jsx)("button",{onClick:function(){h.signInWithEmailAndPassword(n,l).then((function(){console.log("Zalogowano"),m(!0)})).catch((function(e){console.log(e)}))},children:"Zaloguj si\u0119"})]})},S=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),i=Object(o.a)(c,2),l=i[0],r=i[1],u=Object(a.useState)(""),d=Object(o.a)(u,2),j=d[0],m=d[1],O=Object(a.useState)(!1),w=Object(o.a)(O,2),p=w[0],x=w[1];return p?Object(b.jsx)(f.a,{to:"/"}):Object(b.jsxs)("div",{className:"form",children:[Object(b.jsx)("label",{htmlFor:"displayName",children:"Wy\u015bwietlana nazwa"}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{id:"displayName",name:"username",className:"form-input has-hint",value:j,placeholder:"Nazwa wy\u015bwietlana",onChange:function(e){return m(e.target.value)}})}),Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{id:"email",name:"email",className:"form-input has-hint",value:n,placeholder:"Nazwa wy\u015bwietlana",onChange:function(e){return s(e.target.value)}}),Object(b.jsx)("div",{})]}),Object(b.jsx)("label",{htmlFor:"password",children:"Has\u0142o"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{id:"password",type:"password",name:"password",className:"form-input has-hint",value:l,placeholder:"Twoje has\u0142o",onChange:function(e){return r(e.target.value)}}),Object(b.jsx)("div",{children:"Has\u0142o musi zawiera\u0107 co najmniej 6 znak\xf3w"})]}),Object(b.jsx)("button",{onClick:function(){h.createUserWithEmailAndPassword(n,l).then((function(){h.signInWithEmailAndPassword(n,l).then((function(e){e.user.updateProfile({displayName:j})})).catch((function(e){console.log(e)})),x(!0)})).catch((function(e){console.log(e)}))},children:"Zarejestruj si\u0119"})]})},C=function(){return Object(b.jsx)("div",{className:"main-view",children:Object(b.jsxs)(f.d,{children:[Object(b.jsx)(f.b,{path:"/",exact:!0,children:Object(b.jsx)(E,{})}),Object(b.jsx)(f.b,{path:"/register",children:Object(b.jsx)(S,{})}),Object(b.jsx)(f.b,{path:"/login",children:Object(b.jsx)(A,{})}),Object(b.jsx)(f.b,{path:"/add",children:Object(b.jsx)(N,{})}),Object(b.jsx)(f.b,{path:"/search",children:Object(b.jsx)(I,{})})]})})};var B=function(){return Object(b.jsx)(l.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{}),Object(b.jsx)(C,{})]})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root")),Y()}},[[50,1,2]]]);
//# sourceMappingURL=main.229e7cbc.chunk.js.map