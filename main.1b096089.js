parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";var e=document.querySelectorAll(".tech__button");e.forEach(function(e){e.addEventListener("click",function(){e.classList.toggle("tech__button--active")})});var t=document.querySelector("[type=number]"),n=document.querySelector(".buy__price-cost"),o=document.querySelectorAll(".buy__quantity-arrow");function c(){var e=1200*t.value;n.innerText=e+"$"}t.addEventListener("change",function(){c()}),o.forEach(function(e){e.addEventListener("click",function(){c()})});var i=document.querySelector("#countryBuy"),s=document.querySelector(".buy__dropdown-list--country"),l=document.querySelectorAll(".buy__dropdown-item");i.addEventListener("click",function(){d.classList.remove("buy__dropdown-list--city--show"),s.classList.toggle("buy__dropdown-list--country--show")}),l.forEach(function(e){e.addEventListener("click",function(){i.value=e.innerHTML,s.classList.remove("buy__dropdown-list--country--show")})});var a=document.querySelector("#cityBuy"),d=document.querySelector(".buy__dropdown-list--city"),r=document.querySelectorAll(".buy__dropdown-item--city");a.addEventListener("click",function(){s.classList.remove("buy__dropdown-list--country--show"),d.classList.toggle("buy__dropdown-list--city--show")}),r.forEach(function(e){e.addEventListener("click",function(){a.value=e.innerHTML,d.classList.remove("buy__dropdown-list--city--show")})});var u=document.getElementById("body"),y=document.querySelector(".overlay"),m=document.querySelector("#help"),_=document.getElementById("faq");window.addEventListener("hashchange",function(){"#menu"===window.location.hash?(u.classList.add("page__body--with-menu"),y.style.display="block",window.addEventListener("resize",function(){window.innerWidth>=1280&&(window.location.hash="#",y.style.display="none")})):"#buy"===window.location.hash?u.classList.add("page__body--with-menu"):"#help"===window.location.hash?(u.classList.add("page__body--with-menu"),m.classList.add("help--active"),y.style.display="block",window.addEventListener("resize",function(){window.innerWidth<=1280&&(window.location.hash="#",y.style.display="none")})):"#faq"===window.location.hash?(u.classList.add("page__body--with-menu"),_.classList.add("faq--active"),y.style.display="block",window.addEventListener("resize",function(){window.innerWidth<=1280&&(window.location.hash="#",y.style.display="none")})):"#video"===window.location.hash?(u.classList.add("page__body--with-menu"),y.style.display="block",P.classList.add("video--active")):(u.classList.remove("page__body--with-menu"),y.style.display="none",m.classList.remove("help--active"),_.classList.remove("faq--active"),P.classList.remove("video--active"),O.src+="")});var p=document.querySelector("#langMain"),v=document.querySelector("#langMenu"),f=document.querySelectorAll(".top-actions__langs-item");p.addEventListener("click",function(e){v.classList.toggle("top-actions__langs-container--show"),e.stopPropagation()}),f.forEach(function(e){e.addEventListener("click",function(){p.innerHTML=e.innerHTML,v.classList.remove("top-actions__langs-container--show")})}),window.onclick=function(e){e.target.matches("#langMain")||v.classList.contains("top-actions__langs-container--show")&&v.classList.remove("top-actions__langs-container--show")};var h=document.getElementById("formContact");h.addEventListener("submit",function(e){e.preventDefault(),h.reset()});var w=document.getElementById("formBuyOrder"),b=document.querySelector(".buy__form-order"),L=document.getElementById("formBuyPay"),q=document.querySelector(".buy__form-pay"),g=document.querySelector(".buy__button-next"),E=document.querySelector(".buy__button-purchase"),S=document.getElementById("tabOrder"),k=document.getElementById("tabPay"),B=document.getElementById("tabComplete"),A=document.querySelector(".buy__image"),H=document.querySelector(".buy__price-container"),I=document.querySelector(".buy__complete"),M=document.querySelector(".buy__complete-button");w.addEventListener("submit",function(e){e.preventDefault(),b.style.display="none",g.style.display="none",q.style.display="block",E.style.display="block",S.classList.remove("buy__tab--active"),k.classList.add("buy__tab--active")}),L.addEventListener("submit",function(e){e.preventDefault(),q.style.display="none",E.style.display="none",k.classList.remove("buy__tab--active"),B.classList.add("buy__tab--active"),A.style.display="none",H.style.display="none",I.style.display="block"}),M.addEventListener("click",function(){w.reset(),L.reset(),b.style.display="grid",g.style.display="block",I.style.display="none",A.style.display="block",H.style.display="flex",t.value="",n.innerHTML="0$",B.classList.remove("buy__tab--active"),S.classList.add("buy__tab--active")});var x=document.querySelector("#menuHelp"),D=document.querySelector("#menuHelpButton"),T=document.querySelector("#menuHelpCloseButton"),C=document.querySelector("#menuFAQ"),W=document.querySelector("#menuFAQButton"),z=document.querySelector("#menuFAQButton2"),F=document.querySelector("#menuFAQCloseButton"),Q=document.querySelector("#menuContent");D.addEventListener("click",function(e){Q.style.display="none",x.style.display="block",e.preventDefault()}),[W,z].forEach(function(e){e.addEventListener("click",function(e){Q.style.display="none",x.style.display="none",C.style.display="block",e.preventDefault()})}),[T,F].forEach(function(e){e.addEventListener("click",function(e){Q.style.display="block",x.style.display="none",C.style.display="none",e.preventDefault()})});var P=document.querySelector("#fullScreenVideo"),O=document.querySelector("#video"),$=document.querySelectorAll(".faq__question");function V(e){$.forEach(function(t,n){e!==n&&(t.classList.remove("faq__question--active"),t.querySelector(".faq__answer").style.height="0px",t.style.paddingBottom="0")})}$.forEach(function(e,t){e.addEventListener("click",function(){e.classList.toggle("faq__question--active");var n=e.querySelector(".faq__answer");e.classList.contains("faq__question--active")?(n.style.height="".concat(n.scrollHeight,"px"),e.style.paddingBottom="20px"):(n.style.height="0px",e.style.paddingBottom="0"),V(t)})}),window.addEventListener("resize",function(){window.innerWidth>=1280&&e.forEach(function(e){e.classList.remove("tech__button--active")}),window.innerWidth<1280&&v.classList.remove("top-actions__langs-container--show")});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.1b096089.js.map