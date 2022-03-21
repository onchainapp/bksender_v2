(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(34),o=n(205),r=n(1122);t.LinkFlow=class{constructor(e){this.subscriptions=new o.Subscription,this.isConnected=!1,this.isOpen=!1,this.onCancel=null,this.root=null,this.darkMode=e.darkMode,this.version=e.version,this.sessionId=e.sessionId,this.sessionSecret=e.sessionSecret,this.walletLinkUrl=e.walletLinkUrl,this.connected$=e.connected$}attach(e){this.root=document.createElement("div"),this.root.className="-walletlink-link-flow-root",e.appendChild(this.root),this.render(),this.subscriptions.add(this.connected$.subscribe(e=>{this.isConnected!==e&&(this.isConnected=e,this.render())}))}detach(){var e;this.root&&(this.subscriptions.unsubscribe(),l.render(null,this.root),null===(e=this.root.parentElement)||void 0===e||e.removeChild(this.root))}open(e){this.isOpen=!0,this.onCancel=e.onCancel,this.render()}close(){this.isOpen=!1,this.onCancel=null,this.render()}render(){this.root&&l.render(l.h(r.LinkDialog,{darkMode:this.darkMode,version:this.version,sessionId:this.sessionId,sessionSecret:this.sessionSecret,walletLinkUrl:this.walletLinkUrl,isOpen:this.isOpen,isConnected:this.isConnected,onCancel:this.onCancel}),this.root)}}},1122:function(e,t,n){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=l(n(612)),r=n(34),c=n(355),d=l(n(1123)),k=n(1124),h=n(1126);t.LinkDialog=e=>{const[t,n]=c.useState(!e.isOpen),[l,k]=c.useState(!e.isOpen);return c.useEffect(()=>{const{isOpen:t}=e,l=[window.setTimeout(()=>{k(!t)},10)];return t?n(!1):l.push(window.setTimeout(()=>{n(!0)},360)),()=>{l.forEach(window.clearTimeout)}},[e.isOpen]),r.h("div",{class:o.default("-walletlink-link-dialog-container",e.darkMode&&"-walletlink-link-dialog-container-dark",t&&"-walletlink-link-dialog-container-hidden")},r.h("style",null,d.default),r.h("div",{class:o.default("-walletlink-link-dialog-backdrop",l&&"-walletlink-link-dialog-backdrop-hidden")}),r.h("div",{class:"-walletlink-link-dialog"},r.h("div",{class:o.default("-walletlink-link-dialog-box",l&&"-walletlink-link-dialog-box-hidden")},r.h(w,{darkMode:e.darkMode,version:e.version,sessionId:e.sessionId,sessionSecret:e.sessionSecret,walletLinkUrl:e.walletLinkUrl,isConnected:e.isConnected}),e.onCancel&&r.h(f,{onClick:e.onCancel}))))};const w=e=>{const t=window.encodeURIComponent(e.walletLinkUrl),n=`${e.walletLinkUrl}/#/link?id=${e.sessionId}&secret=${e.sessionSecret}&server=${t}&v=1`;return r.h("div",{class:"-walletlink-link-dialog-box-content"},r.h("h3",null,"Scan to",r.h("br",null)," Connect"),r.h("div",{class:"-walletlink-link-dialog-box-content-qrcode"},r.h("div",{class:"-walletlink-link-dialog-box-content-qrcode-wrapper"},r.h(k.QRCode,{content:n,width:224,height:224,fgColor:"#000",bgColor:"transparent"})),r.h("input",{type:"hidden",value:n}),!e.isConnected&&r.h("div",{class:"-walletlink-link-dialog-box-content-qrcode-connecting"},r.h(h.Spinner,{size:128,color:e.darkMode?"#fff":"#000"}),r.h("p",null,"Connecting...")),r.h("p",{title:`WalletLink v${e.version}`},"Powered by WalletLink")),r.h("a",{href:`${e.walletLinkUrl}/#/wallets`,target:"_blank",rel:"noopener"},"Don’t have a wallet app?"))},f=e=>r.h("button",{class:"-walletlink-link-dialog-box-cancel",onClick:e.onClick},r.h("div",{class:"-walletlink-link-dialog-box-cancel-x"}))},1123:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default='.-walletlink-css-reset .-walletlink-link-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-walletlink-css-reset .-walletlink-link-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.33);transition:opacity .25s}.-walletlink-css-reset .-walletlink-link-dialog-backdrop-hidden{opacity:0}.-walletlink-css-reset .-walletlink-link-dialog-box{display:flex;position:relative;flex-direction:column;background-color:#f6f6f6;border-radius:16px;box-shadow:0px 16px 24px rgba(0,0,0,.1),0px 0px 8px rgba(0,0,0,.05);transform:scale(1);transition:opacity .25s,transform .25s;overflow:hidden}.-walletlink-css-reset .-walletlink-link-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-walletlink-css-reset .-walletlink-link-dialog-box-content{padding:24px;text-align:center}.-walletlink-css-reset .-walletlink-link-dialog-box-content h3{display:block;margin-bottom:24px;text-align:left;text-transform:uppercase;font-size:22px;font-weight:bold;line-height:1.2;color:#000}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode{position:relative;display:block;margin-bottom:24px;background-color:#f6f6f6;padding:16px;border-radius:16px;box-shadow:4px 4px 8px rgba(0,0,0,.15),-8px -8px 8px #fff;overflow:hidden}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-wrapper{display:block;width:232px;height:232px;padding:4px;border-radius:4px;background:#f4f4f4;margin-bottom:16px}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-wrapper img{display:block;width:224px;height:224px}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode>p{display:block;color:gray;font-weight:bold;font-size:12px;text-align:center}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-connecting{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(246,246,246,.98)}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-connecting p{margin-top:16px;color:#333;font-size:12px;font-weight:bold}.-walletlink-css-reset .-walletlink-link-dialog-box-content a{text-align:center;cursor:pointer;transition:color .1s;font-size:14px}.-walletlink-css-reset .-walletlink-link-dialog-box-content a,.-walletlink-css-reset .-walletlink-link-dialog-box-content a:link,.-walletlink-css-reset .-walletlink-link-dialog-box-content a:visited{color:#999}.-walletlink-css-reset .-walletlink-link-dialog-box-content a:hover,.-walletlink-css-reset .-walletlink-link-dialog-box-content a:active{color:#666;text-decoration:underline}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel{position:absolute;-webkit-appearance:none;display:flex;align-items:center;justify-content:center;top:24px;right:24px;width:24px;height:24px;border-radius:12px;background-color:#e7e7e7;cursor:pointer}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x{position:relative;display:block}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::after{content:"";position:absolute;display:block;top:-1px;left:-7px;width:14px;height:2px;background-color:#999;transition:background-color .2s}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::before{transform:rotate(45deg)}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::after{transform:rotate(135deg)}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x-a,.-walletlink-css-reset .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x-b{background-color:#000}.-walletlink-css-reset .-walletlink-link-dialog-container{display:block}.-walletlink-css-reset .-walletlink-link-dialog-container-hidden{display:none}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box{background-color:#2a2a2a}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content h3{color:#ccc}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode{background-color:#2a2a2a;box-shadow:4px 4px 8px rgba(0,0,0,.5),-8px -8px 8px #343434}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode>p{color:#999}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode-connecting{background:rgba(42,42,42,.98)}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode-connecting p{color:#ddd}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:link,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:visited{color:#888}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:hover,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:active{color:#aaa}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel{background-color:#333}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel-x::after{background-color:#aaa}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x::after{background-color:#eee}'},1124:function(e,t,n){"use strict";(function(e){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(34),r=n(355),c=l(n(1125));t.QRCode=t=>{const[svg,n]=r.useState("");return r.useEffect(()=>{var l,o;const r=new c.default({content:t.content,background:t.bgColor||"#ffffff",color:t.fgColor||"#000000",container:"svg",ecl:"M",width:null!==(l=t.width)&&void 0!==l?l:256,height:null!==(o=t.height)&&void 0!==o?o:256,padding:0}),d=e.from(r.svg(),"utf8").toString("base64");n(`data:image/svg+xml;base64,${d}`)}),svg?o.h("img",{src:svg,alt:"QR Code"}):null}}).call(this,n(9).Buffer)},1126:function(e,t,n){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(34),r=l(n(1127));t.Spinner=e=>{var t;const n=null!==(t=e.size)&&void 0!==t?t:64,l=e.color||"#000";return o.h("div",{class:"-walletlink-spinner"},o.h("style",null,r.default),o.h("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",style:{width:n,height:n}},o.h("circle",{style:{cx:50,cy:50,r:45,stroke:l}})))}},1127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=".-walletlink-css-reset .-walletlink-spinner{display:inline-block}.-walletlink-css-reset .-walletlink-spinner svg{display:inline-block;animation:2s linear infinite -walletlink-spinner-svg}.-walletlink-css-reset .-walletlink-spinner svg circle{animation:1.9s ease-in-out infinite both -walletlink-spinner-circle;display:block;fill:transparent;stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -walletlink-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -walletlink-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}"},1128:function(e,t,n){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=l(n(612)),r=n(34),c=n(355),d=l(n(1129));t.Snackbar=class{constructor(e){this.items=new Map,this.nextItemKey=0,this.root=null,this.darkMode=e.darkMode}attach(e){this.root=document.createElement("div"),this.root.className="-walletlink-snackbar-root",e.appendChild(this.root),this.render()}presentItem(e){const t=this.nextItemKey++;return this.items.set(t,e),this.render(),()=>{this.items.delete(t),this.render()}}clear(){this.items.clear(),this.render()}render(){this.root&&r.render(r.h(k,{darkMode:this.darkMode},Array.from(this.items.entries()).map(([e,t])=>r.h(h,Object.assign({},t,{key:e})))),this.root)}};const k=e=>r.h("div",{class:o.default("-walletlink-snackbar-container",e.darkMode&&"-walletlink-snackbar-container-dark")},r.h("style",null,d.default),r.h("div",{class:"-walletlink-snackbar"},e.children)),h=({message:e,showProgressBar:t,actions:n})=>{const[l,d]=c.useState(!0),[k,h]=c.useState(!1);c.useEffect(()=>{const e=[window.setTimeout(()=>{d(!1)},1),window.setTimeout(()=>{h(!0)},1e4)];return()=>{e.forEach(window.clearTimeout)}});return r.h("div",{class:o.default("-walletlink-snackbar-item",l&&"-walletlink-snackbar-item-hidden",k&&"-walletlink-snackbar-item-expanded")},r.h("div",{class:"-walletlink-snackbar-item-content",onClick:()=>{h(!k)}},r.h("div",{class:"-walletlink-snackbar-item-content-message"},e),r.h("div",{class:"-walletlink-snackbar-item-content-chevron",title:"Expand"})),t&&r.h("div",{class:"-walletlink-snackbar-item-progress-bar"}),n&&n.length>0&&r.h("div",{class:"-walletlink-snackbar-item-actions"},n.map((e,i)=>r.h("div",{class:"-walletlink-snackbar-item-actions-item",key:i},r.h("span",{class:"-walletlink-snackbar-item-actions-item-info"},e.info),r.h("button",{class:"-walletlink-snackbar-item-actions-item-button",onClick:e.onClick},e.buttonLabel)))))}},1129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default='.-walletlink-css-reset .-walletlink-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-walletlink-css-reset .-walletlink-snackbar-item{background-color:#fff;border-radius:8px;box-shadow:0px 16px 24px rgba(0,0,0,.06),0px 0px 8px rgba(0,0,0,.04);display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:hidden;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-walletlink-css-reset .-walletlink-snackbar-item-content{align-items:center;cursor:pointer;display:flex;flex-direction:row;justify-content:space-between;padding:8px 8px 8px 16px;user-select:none}.-walletlink-css-reset .-walletlink-snackbar-item-content-message{color:#000;font-size:14px;line-height:1.5}.-walletlink-css-reset .-walletlink-snackbar-item-content-chevron{position:relative;display:block;margin:0 8px;transition:transform .05s}.-walletlink-css-reset .-walletlink-snackbar-item-content-chevron::before{position:relative;top:-2px;content:"";display:block;border-top:2px solid #000;border-left:2px solid #000;width:8px;height:8px;transform:rotate(-135deg)}.-walletlink-css-reset .-walletlink-snackbar-item-progress-bar{display:block;height:2px;position:relative}.-walletlink-css-reset .-walletlink-snackbar-item-progress-bar::before{animation:-walletlink-snackbar-progressbar 2s linear infinite;background-image:linear-gradient(to right, rgba(22, 82, 240, 0) 0%, #1652f0 100%);content:"";height:100%;left:-100%;position:absolute;width:100%}.-walletlink-css-reset .-walletlink-snackbar-item-actions{display:none;flex-direction:column;border-top:1px solid #f5f7f8;padding:2px 16px 8px}.-walletlink-css-reset .-walletlink-snackbar-item-actions-item{margin:8px 0}.-walletlink-css-reset .-walletlink-snackbar-item-actions-item-info{color:#888;font-size:14px;margin:0 8px 0 0}.-walletlink-css-reset .-walletlink-snackbar-item-actions-item-button{-webkit-appearance:none;-webkit-text-fill-color:#1652f0;background:transparent;color:#1652f0;cursor:pointer;display:inline;font-size:14px;margin:0;padding:0;transition:opacity .25s}.-walletlink-css-reset .-walletlink-snackbar-item-actions-item-button:active{opacity:.6}.-walletlink-css-reset .-walletlink-snackbar-item-hidden{opacity:0;text-align:left;transform:translateX(25%)}.-walletlink-css-reset .-walletlink-snackbar-item-expanded .-walletlink-snackbar-item-content-chevron{transform:rotate(180deg)}.-walletlink-css-reset .-walletlink-snackbar-item-expanded .-walletlink-snackbar-item-actions{display:flex}.-walletlink-css-reset .-walletlink-snackbar-container-dark .-walletlink-snackbar-item{background-color:#2a2a2a}.-walletlink-css-reset .-walletlink-snackbar-container-dark .-walletlink-snackbar-item-content-message{color:#999}.-walletlink-css-reset .-walletlink-snackbar-container-dark .-walletlink-snackbar-item-content-chevron::before{border-top:2px solid #ccc;border-left:2px solid #ccc}.-walletlink-css-reset .-walletlink-snackbar-container-dark .-walletlink-snackbar-item-progress-bar::before{animation:-walletlink-snackbar-progressbar-dark 2s linear infinite;background-image:linear-gradient(to right, rgba(69, 120, 255, 0) 0%, #4578ff 100%)}.-walletlink-css-reset .-walletlink-snackbar-container-dark .-walletlink-snackbar-item-actions{border-top:1px solid #343434}.-walletlink-css-reset .-walletlink-snackbar-container-dark .-walletlink-snackbar-item-actions-item-button{-webkit-text-fill-color:#ccc;color:#ccc}@keyframes -walletlink-snackbar-progressbar{0%{left:0;width:0%;background-image:linear-gradient(to right, rgba(22, 82, 240, 0) 0%, #1652f0 100%)}25%{left:0;width:100%}50%{left:100%;width:0%;background-image:linear-gradient(to right, rgba(22, 82, 240, 0) 0%, #1652f0 100%)}50.01%{background-image:linear-gradient(to left, rgba(22, 82, 240, 0) 0%, #1652f0 100%)}75%{left:0;width:100%}100%{left:0;width:0%;background-image:linear-gradient(to left, rgba(22, 82, 240, 0) 0%, #1652f0 100%)}}@keyframes -walletlink-snackbar-progressbar-dark{0%{left:0;width:0%;background-image:linear-gradient(to right, rgba(69, 120, 255, 0) 0%, #4578ff 100%)}25%{left:0;width:100%}50%{left:100%;width:0%;background-image:linear-gradient(to right, rgba(69, 120, 255, 0) 0%, #4578ff 100%)}50.01%{background-image:linear-gradient(to left, rgba(69, 120, 255, 0) 0%, #4578ff 100%)}75%{left:0;width:100%}100%{left:0;width:0%;background-image:linear-gradient(to left, rgba(69, 120, 255, 0) 0%, #4578ff 100%)}}'},1130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(205),o=n(251),r=n(353),c=n(1131),d=n(1132),k=n(1133);t.WalletLinkConnection=class{constructor(e,t,n,c=WebSocket){this.sessionId=e,this.sessionKey=t,this.subscriptions=new l.Subscription,this.destroyed=!1,this.lastHeartbeatResponse=0,this.nextReqId=r.IntNumber(1),this.connectedSubject=new l.BehaviorSubject(!1),this.linkedSubject=new l.BehaviorSubject(!1),this.sessionConfigSubject=new l.ReplaySubject(1);const k=new d.RxWebSocket(n+"/rpc",c);this.ws=k,this.subscriptions.add(k.connectionState$.pipe(o.skip(1),o.filter(e=>e===d.ConnectionState.DISCONNECTED&&!this.destroyed),o.delay(5e3),o.filter(e=>!this.destroyed),o.flatMap(e=>k.connect()),o.retry()).subscribe()),this.subscriptions.add(k.connectionState$.pipe(o.skip(2),o.switchMap(e=>l.iif(()=>e===d.ConnectionState.CONNECTED,this.authenticate().pipe(o.tap(e=>this.sendIsLinked()),o.tap(e=>this.sendGetSessionConfig()),o.map(e=>!0)),l.of(!1))),o.distinctUntilChanged(),o.catchError(e=>l.of(!1))).subscribe(e=>this.connectedSubject.next(e))),this.subscriptions.add(k.connectionState$.pipe(o.skip(1),o.switchMap(e=>l.iif(()=>e===d.ConnectionState.CONNECTED,l.timer(0,1e4)))).subscribe(i=>0===i?this.updateLastHeartbeat():this.heartbeat())),this.subscriptions.add(k.incomingData$.pipe(o.filter(e=>"h"===e)).subscribe(e=>this.updateLastHeartbeat())),this.subscriptions.add(k.incomingJSONData$.pipe(o.filter(e=>["IsLinkedOK","Linked"].includes(e.type))).subscribe(e=>{const t=e;this.linkedSubject.next(t.linked||t.onlineGuests>0)})),this.subscriptions.add(k.incomingJSONData$.pipe(o.filter(e=>["GetSessionConfigOK","SessionConfigUpdated"].includes(e.type))).subscribe(e=>{const t=e;this.sessionConfigSubject.next({webhookId:t.webhookId,webhookUrl:t.webhookUrl,metadata:t.metadata})}))}connect(){if(this.destroyed)throw new Error("instance is destroyed");this.ws.connect().subscribe()}destroy(){this.subscriptions.unsubscribe(),this.ws.disconnect(),this.destroyed=!0}get connected$(){return this.connectedSubject.asObservable()}get onceConnected$(){return this.connected$.pipe(o.filter(e=>e),o.take(1),o.map(()=>{}))}get linked$(){return this.linkedSubject.asObservable()}get onceLinked$(){return this.linked$.pipe(o.filter(e=>e),o.take(1),o.map(()=>{}))}get sessionConfig$(){return this.sessionConfigSubject.asObservable()}get incomingEvent$(){return this.ws.incomingJSONData$.pipe(o.filter(e=>{if("Event"!==e.type)return!1;const t=e;return"string"==typeof t.sessionId&&"string"==typeof t.eventId&&"string"==typeof t.event&&"string"==typeof t.data}),o.map(e=>e))}setSessionMetadata(e,t){const n=c.ClientMessageSetSessionConfig({id:r.IntNumber(this.nextReqId++),sessionId:this.sessionId,metadata:{[e]:t}});return this.onceConnected$.pipe(o.flatMap(e=>this.makeRequest(n)),o.map(e=>{if(k.isServerMessageFail(e))throw new Error(e.error||"failed to set session metadata")}))}publishEvent(e,data,t=!1){const n=c.ClientMessagePublishEvent({id:r.IntNumber(this.nextReqId++),sessionId:this.sessionId,event:e,data:data,callWebhook:t});return this.onceLinked$.pipe(o.flatMap(e=>this.makeRequest(n)),o.map(e=>{if(k.isServerMessageFail(e))throw new Error(e.error||"failed to publish event");return e.eventId}))}sendData(e){this.ws.sendData(JSON.stringify(e))}updateLastHeartbeat(){this.lastHeartbeatResponse=Date.now()}heartbeat(){if(Date.now()-this.lastHeartbeatResponse>2e4)this.ws.disconnect();else try{this.ws.sendData("h")}catch(e){}}makeRequest(e,t=6e4){const n=e.id;try{this.sendData(e)}catch(e){return l.throwError(e)}return this.ws.incomingJSONData$.pipe(o.timeoutWith(t,l.throwError(new Error(`request ${n} timed out`))),o.filter(e=>e.id===n),o.take(1))}authenticate(){const e=c.ClientMessageHostSession({id:r.IntNumber(this.nextReqId++),sessionId:this.sessionId,sessionKey:this.sessionKey});return this.makeRequest(e).pipe(o.map(e=>{if(k.isServerMessageFail(e))throw new Error(e.error||"failed to authentcate")}))}sendIsLinked(){const e=c.ClientMessageIsLinked({id:r.IntNumber(this.nextReqId++),sessionId:this.sessionId});this.sendData(e)}sendGetSessionConfig(){const e=c.ClientMessageGetSessionConfig({id:r.IntNumber(this.nextReqId++),sessionId:this.sessionId});this.sendData(e)}}},1131:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClientMessageHostSession=function(e){return Object.assign({type:"HostSession"},e)},t.ClientMessageIsLinked=function(e){return Object.assign({type:"IsLinked"},e)},t.ClientMessageGetSessionConfig=function(e){return Object.assign({type:"GetSessionConfig"},e)},t.ClientMessageSetSessionConfig=function(e){return Object.assign({type:"SetSessionConfig"},e)},t.ClientMessagePublishEvent=function(e){return Object.assign({type:"PublishEvent"},e)}},1132:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const l=n(205),o=n(251);var r;!function(e){e[e.DISCONNECTED=0]="DISCONNECTED",e[e.CONNECTING=1]="CONNECTING",e[e.CONNECTED=2]="CONNECTED"}(r=t.ConnectionState||(t.ConnectionState={}));t.RxWebSocket=class{constructor(e,t=WebSocket){this.WebSocketClass=t,this.webSocket=null,this.connectionStateSubject=new l.BehaviorSubject(r.DISCONNECTED),this.incomingDataSubject=new l.Subject,this.url=e.replace(/^http/,"ws")}connect(){return this.webSocket?l.throwError(new Error("webSocket object is not null")):new l.Observable(e=>{let t;try{this.webSocket=t=new this.WebSocketClass(this.url)}catch(t){return void e.error(t)}this.connectionStateSubject.next(r.CONNECTING),t.onclose=t=>{this.clearWebSocket(),e.error(new Error(`websocket error ${t.code}: ${t.reason}`)),this.connectionStateSubject.next(r.DISCONNECTED)},t.onopen=t=>{e.next(),e.complete(),this.connectionStateSubject.next(r.CONNECTED)},t.onmessage=e=>{this.incomingDataSubject.next(e.data)}}).pipe(o.take(1))}disconnect(){const{webSocket:e}=this;if(e){this.clearWebSocket(),this.connectionStateSubject.next(r.DISCONNECTED);try{e.close()}catch(e){}}}get connectionState$(){return this.connectionStateSubject.asObservable()}get incomingData$(){return this.incomingDataSubject.asObservable()}get incomingJSONData$(){return this.incomingData$.pipe(o.flatMap(e=>{let t;try{t=JSON.parse(e)}catch(e){return l.empty()}return l.of(t)}))}sendData(data){const{webSocket:e}=this;if(!e)throw new Error("websocket is not connected");e.send(data)}clearWebSocket(){const{webSocket:e}=this;e&&(this.webSocket=null,e.onclose=null,e.onerror=null,e.onmessage=null,e.onopen=null)}}},1133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isServerMessageFail=function(e){return e&&"Fail"===e.type&&"number"==typeof e.id&&"string"==typeof e.sessionId&&"string"==typeof e.error}},516:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});const l=n(1117),o=n(352),r=n(1119),c=n(248),d=e.env.WALLETLINK_URL||"https://www.walletlink.org",k=e.env.WALLETLINK_VERSION||n(1141).version||"unknown";class h{constructor(e){this._appName="",this._appLogoUrl=null,this._relay=new r.WalletLinkRelay({walletLinkUrl:e.walletLinkUrl||d,version:k,darkMode:!!e.darkMode}),this.setAppInfo(e.appName,e.appLogoUrl),this._relay.attach(document.documentElement),l.injectCssReset()}makeWeb3Provider(e,t=1){return new o.WalletLinkProvider({relay:this._relay,jsonRpcUrl:e,chainId:t})}setAppInfo(e,t){this._appName=e||"DApp",this._appLogoUrl=t||c.getFavicon(),this._relay.setAppInfo(this._appName,this._appLogoUrl)}disconnect(){this._relay.resetAndReload()}}t.WalletLink=h,h.VERSION=k}).call(this,n(29))}}]);