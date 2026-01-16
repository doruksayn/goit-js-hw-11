/* empty css                      */import{S as p,i as h}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y="54219478-952de2791b1b40d9ff96d9b02",g="https://pixabay.com/api/",b=document.getElementById("search-form"),u=document.querySelector(".gallery"),d=document.querySelector(".loader");let a=null;b.addEventListener("submit",v);function v(o){o.preventDefault();const i=o.target.elements.searchQuery.value.trim();u.innerHTML="",S(),L(i).then(t=>{if(l(),t.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}w(t.hits),a===null?a=new p(".gallery a",{captionsData:"alt",captionDelay:250}):a.refresh()}).catch(t=>{l(),console.error("Error fetching images:",t),c("An error occurred while fetching images. Please try again!")})}async function L(o){const i=new URLSearchParams({key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=await fetch(`${g}?${i}`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return await t.json()}function w(o){const i=o.map(({webformatURL:t,largeImageURL:n,tags:e,likes:r,views:s,comments:f,downloads:m})=>`
    <div class="gallery-item">
      <a href="${n}" class="gallery-link">
        <img src="${t}" alt="${e}" loading="lazy" />
      </a>
      <div class="info">
        <div class="info-item">
          <b>Likes</b>
          <span>${r}</span>
        </div>
        <div class="info-item">
          <b>Views</b>
          <span>${s}</span>
        </div>
        <div class="info-item">
          <b>Comments</b>
          <span>${f}</span>
        </div>
        <div class="info-item">
          <b>Downloads</b>
          <span>${m}</span>
        </div>
      </div>
    </div>
  `).join("");u.innerHTML=i}function c(o){h.error({title:"Error",message:o,position:"topRight",timeout:5e3})}function S(){d.style.display="block"}function l(){d.style.display="none"}
//# sourceMappingURL=01-page.js.map
