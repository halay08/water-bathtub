(this.webpackJsonpbathtub=this.webpackJsonpbathtub||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(5),i=n.n(a),r=(n(11),n(3)),j=n(0),l=function(e){var t=e.isAnimating,n=e.waterLevel;return Object(j.jsxs)("div",{className:"bath-container",children:[Object(j.jsx)("div",{className:"boat",children:Array(n).fill(1).map((function(e,t){return Object(j.jsx)("div",{className:"water-level slide-in-up"},t)}))}),Object(j.jsxs)("div",{className:"legs",children:[Object(j.jsx)("div",{className:"leg"}),Object(j.jsx)("div",{className:"leg"})]}),Object(j.jsxs)("div",{className:"taps",children:[Object(j.jsx)("div",{className:"pipe1"}),Object(j.jsx)("div",{className:"pipe2"}),Object(j.jsx)("div",{className:"pipe3"}),Object(j.jsx)("div",{className:"pipe4"}),t&&Object(j.jsx)("div",{className:"tap-water"})]})]})},u=(n(13),n(14),n(4)),b=n(6),o=["text"],d=function(e){var t=e.text,n=Object(b.a)(e,o);return Object(j.jsx)("button",Object(u.a)(Object(u.a)({className:"button"},n),{},{children:t}))},O=null;var v=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),i=Object(r.a)(a,2),u=i[0],b=i[1],o=function(){b(!1),clearInterval(O),O=null};return Object(c.useEffect)((function(){(n<=0||n>=5)&&o()}),[n]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{isAnimating:u,waterLevel:n}),Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{text:"Empty Water",onClick:function(){0!==n&&(O&&o(),s((function(e){return e-1})),O=setInterval((function(){s((function(e){return e-1}))}),2e3))}}),Object(j.jsx)(d,{text:"Fill Water",onClick:function(){5!==n&&(O&&o(),b(!0),s((function(e){return e+1})),O=setInterval((function(){b(!0),s((function(e){return e+1}))}),2e3))}})]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.e108c79e.chunk.js.map