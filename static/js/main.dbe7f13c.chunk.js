(this["webpackJsonpspa-sample-app"]=this["webpackJsonpspa-sample-app"]||[]).push([[0],{17:function(e,t,n){e.exports=n(57)},22:function(e,t,n){},23:function(e,t,n){},5:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(11),i=n.n(o),c=(n(22),n(23),n(5)),s=n.n(c),l=n(12),u=function(e){var t=e.cqPath,n=e.richText,r=e.text;return n?a.a.createElement("div",{className:s.a.aem_text,id:t.substr(t.lastIndexOf("/")+1),"data-rte-editelement":!0,dangerouslySetInnerHTML:{__html:r}}):a.a.createElement("div",{className:s.a.aem_text},r)},p=Object(l.withMappable)(u,{emptyLabel:"Text",isEmpty:function(e){return!e||!e.text||e.text.trim().length<1},resourceType:"editorxpdevelopment/components/content/text"}),m=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(p,{pagePath:"/content/editorxpdevelopment/us/en",itemPath:"/root/responsivegrid/text"}),a.a.createElement(p,{pagePath:"/content/editorxpdevelopment/us/en",itemPath:"/root/responsivegrid/text_23"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=n(1),h=n(13),f=n(14),v=n(16),g=n(15),x={headers:{}},w=new(function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"fetch",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){if(!e){var t="Fetching model rejected for path: "+e;return Promise.reject(new Error(t))}var n="".concat(this._apiHost).concat(e);return fetch(n,x).then((function(e){if(e.status>=200&&e.status<300)return e.json();var t=new Error("while fetching the model for url: "+n,e.statusText||e.status);return t.response=e,Promise.reject(t)}))}))}]),n}(d.ModelClient))("https://author-p15902-e23962-cmstg.adobeaemcloud.com");d.ModelManager.initializeAsync({modelClient:w,path:"/content/editorxpdevelopment/us/en.model.json"}),i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.dbe7f13c.chunk.js.map