(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},214:function(e,t,c){},227:function(e,t,c){"use strict";c.r(t);var a=c(34),r=c(1),n=c(62),s=c(14),i=c(40),o=c(37),l=(c(104),c.p+"static/media/mjolnir.61f31e18.png"),u=c(0),j=function(e){var t=e.character,c=t.name,a=t.description,r=t.thumbnail,n=t.homepage,s=t.wiki,i=r.indexOf("image_not_available")>-1?"randomchar__img contain":"randomchar__img";return Object(u.jsxs)("div",{className:"randomchar__block",children:[Object(u.jsx)("img",{src:r,alt:"Random character",className:i}),Object(u.jsxs)("div",{className:"randomchar__info",children:[Object(u.jsx)("p",{className:"randomchar__name",children:c}),Object(u.jsx)("p",{className:"randomchar__descr",children:a}),Object(u.jsxs)("div",{className:"randomchar__btns",children:[Object(u.jsx)("a",{href:n,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},h=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1],h=Object(i.a)(),b=h.loading,d=h.error,m=h.getCharacter,O=h.clearError;Object(r.useEffect)((function(){p()}),[]);var f=function(e){n(e)},p=function(){O();var e=Math.floor(400*Math.random()+1011e3);m(e).then(f)},x=d?Object(u.jsx)(o.a,{}):null,_=b?Object(u.jsx)(s.a,{}):null,v=b||d||!c?null:Object(u.jsx)(j,{character:c});return Object(u.jsxs)("div",{className:"randomchar",children:[x,_,v,Object(u.jsxs)("div",{className:"randomchar__static",children:[Object(u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(u.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(u.jsx)("button",{onClick:p,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"try it"})}),Object(u.jsx)("img",{src:l,alt:"mjolnir",className:"randomchar__decoration"})]})]})},b=c(49),d=(c(105),c(106),function(e){var t=Object(r.useState)([]),c=Object(a.a)(t,2),n=c[0],l=c[1],j=Object(r.useState)(!1),h=Object(a.a)(j,2),d=h[0],m=h[1],O=Object(r.useState)(210),f=Object(a.a)(O,2),p=f[0],x=f[1],_=Object(r.useState)(!1),v=Object(a.a)(_,2),g=v[0],N=v[1],k=Object(i.a)(),y=k.loading,w=k.error,C=k.getAllCharacters;Object(r.useEffect)((function(){S(p,!0)}),[]);var S=function(e,t){m(!t),C(e).then(E)},E=function(e){var t=!1;e.length<9&&(t=!0),l((function(t){return[].concat(Object(b.a)(t),Object(b.a)(e))})),m((function(e){return!1})),x((function(e){return e+9})),N((function(e){return t}))},F=Object(r.useRef)([]),T=function(e){F.current.forEach((function(e){return e.classList.remove("char__item_selected")})),F.current[e].classList.add("char__item_selected"),F.current[e].focus()};var q=function(t){var c=t.map((function(t,c){var a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(a={objectFit:"unset"}),Object(u.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return F.current[c]=e},onClick:function(){e.onCharacterSelected(t.id),T(c)},onKeyPress:function(a){""!==a.key&&"Enter"!==a.key||(e.onCharacterSelected(t.id),T(c))},children:[Object(u.jsx)("img",{src:t.thumbnail,alt:t.name,style:a}),Object(u.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(u.jsx)("ul",{className:"char__grid",children:c})}(n),I=w?Object(u.jsx)(o.a,{}):null,M=y&&!d?Object(u.jsx)(s.a,{}):null;return Object(u.jsxs)("div",{className:"char__list",children:[I,M,q,Object(u.jsx)("button",{className:"button button__main button__long",disabled:d,style:{display:g?"none":"block"},onClick:function(){return S(p)},children:Object(u.jsx)("div",{className:"inner",children:"load more"})})]})}),m=(c(107),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(u.jsxs)("div",{className:"skeleton",children:[Object(u.jsxs)("div",{className:"pulse skeleton__header",children:[Object(u.jsx)("div",{className:"pulse skeleton__circle"}),Object(u.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"})]})]})}),O=(c(108),function(e){var t=e.character,c=t.name,a=t.description,r=t.thumbnail,n=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(o={objectFit:"unset"}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"char__basics",children:[Object(u.jsx)("img",{src:r,alt:c,style:o}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"char__info-name",children:c}),Object(u.jsxs)("div",{className:"char__btns",children:[Object(u.jsx)("a",{href:n,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(u.jsx)("div",{className:"char__descr",children:a}),Object(u.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(u.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There are no comics with this character",i.map((function(e,t){if(!(t>9))return Object(u.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),f=function(e){var t=Object(r.useState)(null),c=Object(a.a)(t,2),n=c[0],l=c[1],j=Object(i.a)(),h=j.loading,b=j.error,d=j.getCharacter,f=j.clearError;Object(r.useEffect)((function(){p()}),[e.characterId]);var p=function(){var t=e.characterId;t&&(f(),d(t).then(x))},x=function(e){l(e)},_=n||h||b?null:Object(u.jsx)(m,{}),v=b?Object(u.jsx)(o.a,{}):null,g=h?Object(u.jsx)(s.a,{}):null,N=h||b||!n?null:Object(u.jsx)(O,{character:n});return Object(u.jsxs)("div",{className:"char__info",children:[_,v,g,N]})},p=c(35),x=c(36),_=c(44),v=c(46),g=function(e){Object(_.a)(c,e);var t=Object(v.a)(c);function c(){var e;Object(p.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(x.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(u.jsx)(o.a,{}):this.props.children}}]),c}(c(19).Component),N=c.p+"static/media/vision.067d4ae1.png",k=c(220),y=c(221),w=c(11),C=(c(214),function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(i.a)(),l=s.loading,j=s.error,h=s.getCharacterByName,b=s.clearError,d=function(e){n(e)},m=j?Object(u.jsx)("div",{className:"char__search-critical-error",children:Object(u.jsx)(o.a,{})}):null,O=c?c.length>0?Object(u.jsxs)("div",{className:"char__search-wrapper",children:[Object(u.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",c[0].name," page?"]}),Object(u.jsx)(w.a,{to:"/characters/".concat(c[0].id),className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"To page"})})]}):Object(u.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(u.jsxs)("div",{className:"char__search-form",children:[Object(u.jsx)(k.d,{initialValues:{charName:""},validationSchema:y.a({charName:y.b().required("This field is required")}),onSubmit:function(e){var t,c=e.charName;t=c,b(),h(t).then(d)},children:Object(u.jsxs)(k.c,{children:[Object(u.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),Object(u.jsxs)("div",{className:"char__search-wrapper",children:[Object(u.jsx)(k.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(u.jsx)("button",{type:"submit",className:"button button__main",disabled:l,children:Object(u.jsx)("div",{className:"inner",children:"find"})})]}),Object(u.jsx)(k.a,{component:"div",className:"char__search-error",name:"charName"})]})}),O,m]})});t.default=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(n.a,{children:[Object(u.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(u.jsx)("title",{children:"Marvel information portal"})]}),Object(u.jsx)(g,{children:Object(u.jsx)(h,{})}),Object(u.jsxs)("div",{className:"char__content",children:[Object(u.jsx)(g,{children:Object(u.jsx)(d,{onCharacterSelected:function(e){s(e)}})}),Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{children:Object(u.jsx)(f,{characterId:c})}),Object(u.jsx)(g,{children:Object(u.jsx)(C,{})})]})]}),Object(u.jsx)("img",{className:"bg-decoration",src:N,alt:"vision"})]})}},37:function(e,t,c){"use strict";var a=c.p+"static/media/error.42292aa1.gif",r=c(0);t.a=function(){return Object(r.jsx)("img",{style:{display:"block",width:"250px",hight:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"Error"})}},40:function(e,t,c){"use strict";var a=c(42),r=c.n(a),n=c(43),s=c(34),i=c(1);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],j=l[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(n.a)(r.a.mark((function e(t){var c,n,s,i,o,l=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",n=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},a(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,a(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),a(!1),j(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(i.useCallback)((function(){return j(null)}),[])}}(),t=e.loading,c=e.request,a=e.error,o=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="apikey=00ae2959aaae5275a6828832c52b7182",j=function(){var e=Object(n.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters?name=").concat(t,"&").concat(u));case 2:return a=e.sent,e.abrupt("return",a.data.results.map(d));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(n.a)(r.a.mark((function e(){var t,a,n=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:210,e.next=3,c("".concat(l,"characters?limit=9&offset=").concat(t,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(d));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(n.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters/").concat(t,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",d(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},m=function(){var e=Object(n.a)(r.a.mark((function e(){var t,a,n=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:0,e.next=3,c("".concat(l,"comics?&limit=8&offset=").concat(t,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(n.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"comics/").concat(t,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",f(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"n/a"}};return{loading:t,error:a,getAllCharacters:h,getCharacter:b,clearError:o,getComicsList:m,getComic:O,getCharacterByName:j}}}}]);
//# sourceMappingURL=6.0a547a5b.chunk.js.map