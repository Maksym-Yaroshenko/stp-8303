/* empty css                      */import{e as p,d as w}from"./assets/vendor-9ceb8365.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const c=document.querySelector(".backdrop"),a=document.querySelector(".button-burger-menu"),f=document.querySelector(".button-close"),m=document.querySelectorAll(".burger-links"),l=()=>{const e=a.getAttribute("aria-expanded")==="true"||!1;a.setAttribute("aria-expanded",!e),c.classList.toggle("is-open"),e?p(c):w(c)};a.addEventListener("click",l);f.addEventListener("click",l);c.addEventListener("click",e=>{e.target===c&&l()});m.forEach(e=>{e.addEventListener("click",l)});window.matchMedia("(min-width: 1200px)").addEventListener("change",e=>{e.matches&&(c.classList.remove("is-open"),a.setAttribute("aria-expanded",!1),p(c))});const n=(e,r,i,o)=>new Swiper(e,{direction:"horizontal",slidesPerView:r,spaceBetween:i,speed:1e3,loop:!0,autoplay:{delay:o,disableOnInteraction:!1},pagination:{el:`${e} .swiper-pagination`,clickable:!0},navigation:{nextEl:`${e} .swiper-button-next`,prevEl:`${e} .swiper-button-prev`},breakpoints:{320:{slidesPerView:1,spaceBetween:24},1200:{slidesPerView:e===".swiper-gallery"?1:e===".swiper-reviews"?3:4,spaceBetween:e===".swiper-reviews"?50:24,speed:1e3,mousewheel:e!==".swiper-about",keyboard:e!==".swiper-about"}}}),y=()=>{let e=n(".swiper-about",1,24,5e3),r=n(".swiper-gallery",1,24,5e3),i=n(".swiper-reviews",1,24,5e3);const o=()=>{e.destroy(!0,!0),r.destroy(!0,!0),i.destroy(!0,!0),window.innerWidth>=1200?(e=n(".swiper-about",4,24,5e3),r=n(".swiper-gallery",1,24,5e3),i=n(".swiper-reviews",3,50,5e3)):(e=n(".swiper-about",1,24,5e3),r=n(".swiper-gallery",1,24,5e3),i=n(".swiper-reviews",1,24,5e3))};window.addEventListener("resize",o)};y();const u=document.querySelectorAll(".item-faq");u.forEach(e=>{e.addEventListener("click",()=>{const r=e.classList.contains("active");u.forEach(i=>{i.classList.remove("active")}),r||e.classList.add("active")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".modal-cookies"),r=document.querySelector(".accept-button"),i=document.querySelector(".decline-button");localStorage.getItem("cookiesAccepted")||setTimeout(()=>e.classList.add("is-open"),3e3);const o=()=>{e.classList.remove("is-open")};r.addEventListener("click",()=>{localStorage.setItem("cookiesAccepted","true"),o()}),i.addEventListener("click",o)});
//# sourceMappingURL=commonHelpers2.js.map
