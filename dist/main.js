!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=(e,t,n)=>{e.addEventListener(t,n)},o={id:0,value:"",completed:!1},u=(e,t,n)=>{if(void 0!==n.target&&void 0!==n.target.value&&0===n.target.value.length)return;if(void 0!==n.value&&0===n.value.length)return;const r=document.createElement("button"),u=document.createElement("li");o.id+=1;const l={id:o.id,value:o.value,completed:!1,delete:!1};e.push(l),e.forEach(o=>{u.textContent=o.value,r.addEventListener("click",()=>((e,t,n)=>{const r=t.filter(t=>t.id===e.id),o=document.createElement("li");r.forEach(e=>{n.appendChild(o)})})(o,e,t)),r.textContent="Delete",n.value="",u.appendChild(r),t.appendChild(u)})},l=document.querySelector("input"),a=document.querySelector(".add"),d=document.querySelector(".todos"),i=[];l.placeholder="Add new task",r(l,"keyup",e=>((e,t,n)=>{if(console.log({e:n}),!n.target.value||0!==n.target.value.length)return o.value=n.target.value,13===n.keyCode&&(u(e,t,n),n.target.value=""),o})(i,d,e)),r(a,"click",e=>u(i,d,l))}]);