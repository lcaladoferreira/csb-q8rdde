(this["webpackJsonpreact-matrix-rainfall"]=this["webpackJsonpreact-matrix-rainfall"]||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(5),o=n.n(r),c=n(2),l=n(3),h=n(6),s=n(1),u=["draw","fps","establishContext","establishCanvasWidth","width","height"],f=function(t){var e=t.draw,n=t.fps,i=void 0===n?20:n,r=t.establishContext,o=t.establishCanvasWidth,f=t.width,d=void 0===f?"100%":f,v=t.height,b=void 0===v?"100%":v,w=Object(h.a)(t,u),j=Object(a.useRef)(null),g=Object(a.useState)(null),O=Object(c.a)(g,2),m=O[0],x=O[1],M=function(t){var e=t.canvas,n=e.getBoundingClientRect(),a=n.width,i=n.height;if(e.width!==a||e.height!==i){var r=window.devicePixelRatio,c=void 0===r?1:r;return e.width=a*c,e.height=i*c,o&&o(e.width),t.scale(c,c),!0}return!1};return Object(a.useEffect)((function(){if(j.current){var t=j.current.getContext("2d");x(t),M(t),r&&r(t)}else x(null)}),[]),Object(a.useEffect)((function(){var t,n,a,r,o;if(m){var c=function i(){t=window.requestAnimationFrame(i),a=Date.now(),(o=a-r)>n&&(r=a-o%n,e())};!function(t){n=1e3/t,r=Date.now(),c()}(i)}return function(){window.cancelAnimationFrame(t)}}),[e,m,M]),Object(s.jsx)("canvas",Object(l.a)(Object(l.a)({ref:j},w),{},{style:{backgroundColor:"black",width:d,height:b,position:"absolute"}}))},d=function(t){for(var e=Object(a.useState)(null),n=Object(c.a)(e,2),i=n[0],r=n[1],o=Object(a.useState)(null),l=Object(c.a)(o,2),h=l[0],u=l[1],d="L34ndr0CaladoFullStackDeveloperWithFrontEndMBA/|ANGULAR?REACT?Vue".split(""),v=12,b=h?h/v:28,w=[],j=0;j<b;j++)w[j]=1;var g,O=-1,m=-1;return Object(s.jsx)(f,{draw:function(){if(i){i.fillStyle="rgba(1, 0, 0, 0.05)",i.fillRect(0,0,i.canvas.width,i.canvas.height);for(var t=0;t<w.length;t++){var e=d[Math.floor(Math.random()*d.length)];if(i.fillStyle="#120a8f",i.fillText(e,t*v,w[t]*v),w[t]++,w[t]*v>i.canvas.height&&Math.random()>.95&&(w[t]=0),w[r=t]*v>O&&r===m){var n=Math.max(t-1,0),a=Math.min(t+1,Math.floor(b));w[n]=O,w[t]=O,w[a]=O}}}var r},onMouseMove:function(t){clearTimeout(g);var e=t.target.getBoundingClientRect(),n=function(t,e){var n=Math.floor(t/v);return{row:Math.min(Math.ceil(e/v),Math.floor(i.canvas.height)),col:n}}(t.clientX-e.left,t.clientY-e.top),a=n.row,r=n.col;O=a,m=r,g=setTimeout((function(){O=-1,m=-1}),50)},establishContext:function(t){r(t)},establishCanvasWidth:function(t){u(t)}})};var v=function(){return Object(s.jsx)("div",{style:{position:"relative",width:"100vw",height:"100vh"},children:Object(s.jsx)(d,{})})};o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d61ee452.chunk.js.map