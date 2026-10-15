(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const E="modulepreload",x=function(t,r){return new URL(t,r).href},g={},S=function(r,n,i){let e=Promise.resolve();if(n&&n.length>0){let y=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const s=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),b=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));e=y(n.map(c=>{if(c=x(c,i),c in g)return;g[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(i)for(let m=s.length-1;m>=0;m--){const h=s[m];if(h.href===c&&(!u||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":E,u||(d.as="script"),d.crossOrigin="",d.href=c,b&&d.setAttribute("nonce",b),document.head.appendChild(d),u)return new Promise((m,h)=>{d.addEventListener("load",m),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return e.then(s=>{for(const l of s||[])l.status==="rejected"&&o(l.reason);return r().catch(o)})},a="boot-splash",w=`
#${a} {
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background: radial-gradient(120% 80% at 50% 0%, #E8DFC9 0%, #DED4BC 45%, #CFC4AB 100%);
  color: #332E27;
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", system-ui, sans-serif;
  transition: opacity 220ms ease;
  -webkit-user-select: none;
  user-select: none;
  /* iOS：加载页长按同样不弹系统选择菜单 */
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}
#${a}[data-leaving="1"] {
  opacity: 0;
  pointer-events: none;
}
#${a} .boot-tagline {
  color: #867963;
  font-size: 30px;
  letter-spacing: 3px;
}
#${a} .boot-subtitle {
  color: #5E5346;
  font-size: 12px;
}
#${a} .boot-stage {
  min-height: 17px;
  color: #5E5346;
  font-size: 12px;
}
#${a} .boot-bar {
  position: relative;
  width: min(220px, 62vw);
  height: 4px;
  overflow: hidden;
  border-radius: 2px;
  background: rgba(90, 74, 54, 0.20);
}
#${a} .boot-bar i {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 38%;
  border-radius: 2px;
  background: linear-gradient(90deg, rgba(120, 138, 145, 0.45), #B79A5E);
  animation: boot-slide 1.15s ease-in-out infinite;
}
#${a}[data-done="1"] .boot-bar i {
  width: 100%;
  animation: none;
}
#${a}[data-failed="1"] .boot-bar {
  display: none;
}
@keyframes boot-slide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(265%); }
}
#${a} .boot-error {
  max-width: min(340px, 80vw);
  color: #8C4F4C;
  font-size: 12px;
  line-height: 1.7;
  text-align: center;
  word-break: break-word;
}
#${a} .boot-retry {
  margin-top: 6px;
  padding: 9px 22px;
  border: 1px solid #4C5A3F;
  border-radius: 4px;
  background: rgba(76, 90, 63, 0.14);
  color: #4C5A3F;
  font: 600 13px/1 inherit;
  cursor: pointer;
}
#${a} .boot-retry:active {
  background: rgba(76, 90, 63, 0.26);
}
`;function C(){const t=`${a}-style`;if(document.getElementById(t))return;const r=document.createElement("style");r.id=t,r.textContent=w,document.head.appendChild(r)}let p=null;function L(){if(p)return p;const t=e=>{var o;return!!((o=e==null?void 0:e.closest)!=null&&o.call(e,"button, a, input, textarea, select, [contenteditable]"))},r=e=>{t(e.target)||e.cancelable!==!1&&e.preventDefault()},n=e=>{e.cancelable!==!1&&e.preventDefault()},i=()=>{var o,s;const e=(o=document.getSelection)==null?void 0:o.call(document);e&&e.isCollapsed===!1&&((s=e.removeAllRanges)==null||s.call(e))};return document.addEventListener("touchstart",r,{passive:!1}),document.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("selectionchange",i),p=()=>{document.removeEventListener("touchstart",r),document.removeEventListener("touchmove",n),document.removeEventListener("selectionchange",i),p=null},p}function $(){C();const t=document.createElement("div");t.id=a,t.innerHTML=`
    <div class="boot-tagline">《窄门》</div>
    <div class="boot-subtitle">像素风叙事探索游戏</div>
    <div class="boot-bar" role="progressbar" aria-label="加载进度"><i></i></div>
    <div class="boot-stage" role="status" aria-live="polite">正在初始化页面…</div>
  `,document.body.appendChild(t);const r=t.querySelector(".boot-stage");return{setStage(n){r.textContent=n},done(){t.dataset.done="1"},hide(){return t.dataset.leaving="1",new Promise(n=>{setTimeout(()=>{t.remove(),n()},260)})},fail(n,i){r.remove(),t.dataset.failed="1";const e=document.createElement("div");e.className="boot-error",e.textContent=`页面初始化失败：${n instanceof Error?n.message:String(n)}`,t.appendChild(e);const o=document.createElement("button");o.className="boot-retry",o.type="button",o.textContent="重试",o.addEventListener("click",()=>{t.remove(),i()}),t.appendChild(o)}}}async function v(){const t=$(),r=L();t.setStage("正在加载游戏资源…");try{const{start:n}=await S(async()=>{const{start:i}=await import("./app-DQNMJUYk.js");return{start:i}},[],import.meta.url);t.setStage("正在准备画面…"),await new Promise(i=>n({onReady:i})),t.done(),await t.hide(),r()}catch(n){t.fail(n,v)}}v();
