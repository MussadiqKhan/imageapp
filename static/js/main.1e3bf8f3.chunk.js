(window.webpackJsonpimageapp=window.webpackJsonpimageapp||[]).push([[0],{444:function(e,t,n){e.exports=n(555)},449:function(e,t,n){},480:function(e,t,n){},555:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),c=n(18),o=n.n(c),i=(n(449),n(348)),u=n.n(i),s=n(429),l=n(82),d=n(64),f=n(430),h=n(57),p=n(356),b=n(431),m=n.n(b),w=n(126);n(479),n(480);var O=n(559),g=n(560),v=n(558),y=n(61),j=n(3),E=n(355),x=n(349),k=n.n(x);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var P=function(){Object(a.useEffect)(function(){!function(){o.apply(this,arguments)}()},[]);var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],c=t[1];function o(){return(o=Object(f.a)(u.a.mark(function e(){var t,n,a,r,o,i,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://picsum.photos/v2/list");case 3:for(a in t=e.sent,n=t.data)r="https://picsum.photos/id/",o=n[a].id,i=n[a].width,n[a].author="".concat(r).concat(o,"/").concat(i,"/").concat(n[a].height),n[a].height=j.jc(650*j.Td())+300,s=n[a].height,n[a].download_url="url(".concat(r).concat(o,"/").concat(i,"/").concat(s,")");c(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}))).apply(this,arguments)}var i=function(e,t,n){var r=function(){return t[e.findIndex(function(e){return matchMedia(e).matches})]||n},c=Object(a.useState)(r),o=Object(h.a)(c,2),i=o[0],u=o[1];return Object(a.useEffect)(function(){var e=function(){return u(r)};return window.addEventListener("resize",e),function(){return window.removeEventListener(e)}},[]),i}(["(min-width: 1500px)","(min-width: 1000px)","(min-width: 600px)"],[5,4,3],2),l=function(){var e=Object(a.useRef)(),t=Object(a.useState)({left:0,top:0,width:0,height:0}),n=Object(h.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(function(){return new w.a(function(e){var t=Object(h.a)(e,1)[0];return c(t.contentRect)})}),i=Object(h.a)(o,1)[0];return Object(a.useEffect)(function(){return i.observe(e.current),i.disconnect},[]),[{ref:e},r]}(),b=Object(h.a)(l,2),x=b[0],S=b[1].width;Object(a.useEffect)(function(){setInterval(function(){return c(m.a)},6e4)},[]);var P=new Array(i).fill(0),D=n.map(function(e,t){var n=P.indexOf(j.hd.apply(E,Object(d.a)(P)));return I({},e,{xy:[S/i*n,(P[n]+=e.height/2)-e.height/2],width:S/i,height:e.height/2})}),N=Object(p.b)(D,function(e){return e.download_url},{from:function(e){return{xy:e.xy,width:e.width,height:e.height,opacity:0}},enter:function(e){return{xy:e.xy,width:e.width,height:e.height,opacity:1}},update:function(e){return{xy:e.xy,width:e.width,height:e.height}},leave:{height:0,opacity:0},config:{mass:5,tension:500,friction:100},trail:25}),C=JSON.parse(localStorage.getItem("select"))||[],J=Object(a.useState)(C),L=Object(h.a)(J,2),R=L[0],_=L[1];Object(a.useEffect)(function(){localStorage.setItem("select",JSON.stringify(R))},[R]);var B=function(e){var t=e.target.id;if(console.log(R),R.includes(t)){var n=R.filter(function(e){return e!==t});_(n)}else _(function(e){return[].concat(Object(d.a)(e),[t])})},T=function(e){var t=e.target.id;k()({url:t,method:"GET",responseType:"blob"}).then(function(e){var t=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=t,n.setAttribute("download","file.jpg"),document.body.appendChild(n),n.click()})},A=O.a.confirm,U=function(e){var t=e.target.id;A({title:"Do you want to delete these items?",onOk:function(){for(var e=0;e<n.length-1;e++)n[e].id==t&&n.splice(e,1),c(n)},onCancel:function(){}})};return r.a.createElement("div",Object.assign({},x,{className:"list",style:{height:j.ed.apply(E,Object(d.a)(P))}}),N.map(function(e){var t=e.item,n=e.props,a=n.xy,c=Object(s.a)(n,["xy"]),o=e.key;return r.a.createElement(p.a.div,{key:o,style:I({transform:a.interpolate(function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0)")})},c)},r.a.createElement("div",{className:R.includes(t.id)?"imagediv ":"nodiv ",style:{backgroundImage:t.download_url},onClick:B,id:t.id},r.a.createElement(g.a,{className:"butt",overlay:r.a.createElement(v.a,null,r.a.createElement(v.a.Item,{key:"new"},r.a.createElement("a",{href:t.author,class:"w3-bar-item w3-button",target:"_blank"},"Open in new tab")),r.a.createElement(v.a.Item,{key:"download"},r.a.createElement("a",{id:t.author,onClick:T,class:"w3-bar-item w3-button"},"Download")),r.a.createElement(v.a.Item,{key:"delete"},r.a.createElement("a",{class:"w3-bar-item w3-button",id:t.id,onClick:U},"Delete")))},r.a.createElement(y.a,{className:"box"},"...")),","))}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(554);o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[444,1,2]]]);
//# sourceMappingURL=main.1e3bf8f3.chunk.js.map