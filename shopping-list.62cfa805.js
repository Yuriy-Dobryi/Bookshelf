var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o.register("ftg0l",(function(e,t){const n=document.querySelector(".foundations-list"),o=document.querySelector(".foundations-more");let i=window.innerWidth<768?4:6,l=0;function r(e,t){for(let e=0;e<n.children.length;e++)n.children[e].classList.add("hidden");for(let o=e;o<e+t;o++){const e=n.children[o];if(e){e.classList.remove("hidden");let t=e.querySelector("span");t||(t=document.createElement("span"),e.insertBefore(t,e.firstChild)),t.classList.add("foundation-counter"),t.textContent="0"+(o+1)}}e+t-1>=n.children.length-1?o.classList.add("up"):o.classList.remove("up");const i=document.querySelectorAll(".foundation.visible");i.forEach(((e,t)=>{setTimeout((()=>{e.style.opacity="0",e.style.pointerEvents="none"}),50*t)})),setTimeout((()=>{for(let o=e;o<e+t;o++){const e=n.children[o];e&&(e.classList.add("visible"),e.style.opacity="1",e.style.pointerEvents="auto")}}),50*i.length)}r(l,i),o.addEventListener("click",(function(){l+=i,l>=n.children.length&&(l=0),r(l,i)}))})),o("ftg0l");
//# sourceMappingURL=shopping-list.62cfa805.js.map