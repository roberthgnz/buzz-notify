var f=o=>o.replace(/\s+/g," ").trim();var p=`
  #notify {
    position: relative;
    z-index: 999999;
    display: flex;
    flex-direction: column;
    width: 10vw;
  }
  #notify [data-notify] {
    position: fixed;
  }
  #notify [data-notify="top left"] {
    top: 10px;
    left: 10px;
  }
  #notify [data-notify="top center"] {
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  #notify [data-notify="top right"] {
    top: 10px;
    right: 10px;
  }
  #notify [data-notify="bottom left"] {
    bottom: 10px;
    left: 10px;
  }
  #notify [data-notify="bottom center"] {
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  #notify [data-notify="bottom right"] {
    bottom: 10px;
    right: 10px;
  }
  #notify [data-notify~="top"] .animate {
    opacity: 0;
    margin-top: -10px;
  }
  #notify [data-notify~="bottom"] .animate {
    opacity: 0;
    margin-bottom: -10px;
  }
  #notify .notify {
    padding: 0.25rem 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: all 300ms ease 0s;
    user-select: none;
    cursor: pointer;
  }
  #notify .notify__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    font-weight: 700;
    color: #0b2e13;
  }
  #notify .notify__title svg {
    margin-right: 7.5px;
  }
  #notify .notify--success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
  #notify .notify--danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }
  #notify .notify--warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  }
  `,m={success:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#155724" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2l4 -4" /></svg>',warning:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#856404" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>',danger:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#721c24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><path d="M12 9v2m0 4v.01" /><path d="M5.07 19H19a2 2 0 0 0 1.75 -2.75L13.75 4a2 2 0 0 0 -3.5 0L3.25 16.25a2 2 0 0 0 1.75 2.75" /></svg>'},l=new CSSStyleSheet;l.replaceSync(f(p));document.adoptedStyleSheets=[l];var n=document.querySelector("#notify");function g({title:o,html:d,type:i="success",position:e="top right",duration:r=3e3},s){if(!n.querySelector(`[data-notify='${e}']`)){let c=document.createElement("div");c.setAttribute("data-notify",e),n.appendChild(c)}let a=n.querySelector(`[data-notify='${e}']`),t=document.createElement("div");t.setAttribute("class",`notify notify--${i}`),t.classList.add("animate"),setTimeout(()=>t.classList.remove("animate"),300),t.innerHTML=`
          <div class="notify__title">${o}</div>
          ${d??""}
      `;let y=t.querySelector(".notify__title");y.innerHTML+=m[i],e.split(" ")[0]==="top"&&a.insertAdjacentElement("afterbegin",t),e.split(" ")[0]==="bottom"&&a.insertAdjacentElement("beforeend",t),r*1>0&&setTimeout(()=>{typeof s=="function"&&s(),t.remove()},r),t.addEventListener("click",function(){this.remove()})}var x=g;export{x as default};
