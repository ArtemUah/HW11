const e=document.querySelector(".breed-select"),n=document.querySelector(".error"),t=document.querySelector(".loader"),r=document.querySelector(".cat-info");function d(){return fetch("https://api.thecatapi.com/v1/breeds?api_key=live_doTbMTwObRXtXZUCULbmGq4E1tkllVbR0BUk2pZfxhZyz7qz8tRCunpfCyR7ZfSH").then((e=>{if(!e.ok)throw new Error;return e.json()}))}d().then((n=>{e.innerHTML=n.map((({name:e,id:n})=>`<option value="${n}">${e}</option>`)).join(""),e.hidden=!1,t.hidden=!0})).catch((e=>{n.hidden=!1,t.hidden=!0})),e.addEventListener("change",(function(i){t.hidden=!1,d().then((e=>{r.innerHTML=function(e,n){const t=e.find((e=>n===e.id)),{id:r,name:d,temperament:i,description:o,image:{url:c}}=t;return`<img src="${c}" alt="${d}" width="300px">\n    <h2>${d}</h2>\n    <p>${o}</p>\n    <h3>Temperament</h3>\n    <p>${i}</p>`}(e,i.target.value),t.hidden=!0})).catch((t=>{n.hidden=!1,e.hidden=!1}))}));
//# sourceMappingURL=index.29d44d0c.js.map
