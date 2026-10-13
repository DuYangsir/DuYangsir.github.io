(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const v="modulepreload",x=function(e,n){return new URL(e,n).href},g={},w=function(n,r,d){let t=Promise.resolve();if(r&&r.length>0){let y=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),b=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));t=y(r.map(l=>{if(l=x(l,d),l in g)return;g[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(d)for(let m=a.length-1;m>=0;m--){const p=a[m];if(p.href===l&&(!u||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${f}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":v,u||(c.as="script"),c.crossOrigin="",c.href=l,b&&c.setAttribute("nonce",b),document.head.appendChild(c),u)return new Promise((m,p)=>{c.addEventListener("load",m),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return t.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return n().catch(o)})},i="boot-splash",S=`
#${i} {
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background: radial-gradient(120% 80% at 50% 0%, #0d1730 0%, #0b1322 45%, #04060c 100%);
  color: #e9eefb;
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", system-ui, sans-serif;
  transition: opacity 220ms ease;
  -webkit-user-select: none;
  user-select: none;
  /* iOS：加载页长按同样不弹系统选择菜单 */
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}
#${i}[data-leaving="1"] {
  opacity: 0;
  pointer-events: none;
}
#${i} .boot-tagline {
  color: #5c6b8d;
  font-size: 30px;
  letter-spacing: 3px;
}
#${i} .boot-subtitle {
  color: #93a3c6;
  font-size: 12px;
}
#${i} .boot-stage {
  min-height: 17px;
  color: #93a3c6;
  font-size: 12px;
}
#${i} .boot-bar {
  position: relative;
  width: min(220px, 62vw);
  height: 4px;
  overflow: hidden;
  border-radius: 2px;
  background: rgba(147, 163, 198, 0.18);
}
#${i} .boot-bar i {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 38%;
  border-radius: 2px;
  background: linear-gradient(90deg, rgba(92, 198, 232, 0.35), #e7c369);
  animation: boot-slide 1.15s ease-in-out infinite;
}
#${i}[data-done="1"] .boot-bar i {
  width: 100%;
  animation: none;
}
#${i}[data-failed="1"] .boot-bar {
  display: none;
}
@keyframes boot-slide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(265%); }
}
#${i} .boot-error {
  max-width: min(340px, 80vw);
  color: #e8837f;
  font-size: 12px;
  line-height: 1.7;
  text-align: center;
  word-break: break-word;
}
#${i} .boot-retry {
  margin-top: 6px;
  padding: 9px 22px;
  border: 1px solid #67d59a;
  border-radius: 4px;
  background: rgba(103, 213, 154, 0.14);
  color: #67d59a;
  font: 600 13px/1 inherit;
  cursor: pointer;
}
#${i} .boot-retry:active {
  background: rgba(103, 213, 154, 0.28);
}
`;function E(){const e=`${i}-style`;if(document.getElementById(e))return;const n=document.createElement("style");n.id=e,n.textContent=S,document.head.appendChild(n)}function $(){E();const e=document.createElement("div");e.id=i,e.innerHTML=`
    <div class="boot-tagline">DAVID</div>
    <div class="boot-subtitle">像素风叙事探索游戏</div>
    <div class="boot-bar" role="progressbar" aria-label="加载进度"><i></i></div>
    <div class="boot-stage" role="status" aria-live="polite">正在初始化页面…</div>
  `,document.body.appendChild(e);const n=e.querySelector(".boot-stage");return{setStage(r){n.textContent=r},done(){e.dataset.done="1"},hide(){return e.dataset.leaving="1",new Promise(r=>{setTimeout(()=>{e.remove(),r()},260)})},fail(r,d){n.remove(),e.dataset.failed="1";const t=document.createElement("div");t.className="boot-error",t.textContent=`页面初始化失败：${r instanceof Error?r.message:String(r)}`,e.appendChild(t);const o=document.createElement("button");o.className="boot-retry",o.type="button",o.textContent="重试",o.addEventListener("click",()=>{e.remove(),d()}),e.appendChild(o)}}}async function h(){const e=$();e.setStage("正在加载游戏资源…");try{const{start:n}=await w(async()=>{const{start:r}=await import("./app-Btb9U9ig.js");return{start:r}},[],import.meta.url);e.setStage("正在准备画面…"),await new Promise(r=>n({onReady:r})),e.done(),await e.hide()}catch(n){e.fail(n,h)}}h();
