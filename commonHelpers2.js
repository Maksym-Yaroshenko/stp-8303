/* empty css                      */import{e as u,d as a}from"./assets/vendor-9ceb8365.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const o=document.querySelector(".backdrop"),n=document.querySelector(".button-burger-menu"),f=document.querySelector(".button-close"),c=()=>{const r=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!r),o.classList.toggle("is-open"),r?u(o):a(o)};n.addEventListener("click",c);f.addEventListener("click",c);o.addEventListener("click",r=>{r.target===o&&c()});window.matchMedia("(min-width: 1200px)").addEventListener("change",r=>{r.matches&&(o.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),u(o))});
//# sourceMappingURL=commonHelpers2.js.map
