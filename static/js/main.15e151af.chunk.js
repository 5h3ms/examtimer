(this.webpackJsonpexamtimer=this.webpackJsonpexamtimer||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(0),i=n.n(r),a=n(10),s=n.n(a),u=(n(35),n(17));n(36),n(37);function o(e){var t={};return e>0&&(t={days:Math.floor(e/86400),hours:Math.floor(e/3600%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}),t}var j=function(e){var t=e.days,n=void 0===t?0:t,i=e.hours,a=void 0===i?0:i,s=e.minutes,j=void 0===s?0:s,h=e.seconds,d=void 0===h?0:h,b=Object(r.useState)(24*n*60*60+60*a*60+60*j+d),f=Object(u.a)(b,2),l=f[0],O=f[1],v=Object(r.useState)(o(l)),x=Object(u.a)(v,2),m=x[0],p=x[1];Object(r.useEffect)((function(){O(24*n*60*60+60*a*60+60*j+d);var e=setInterval((function(){O((function(e){return e-1}))}),1e3);return function(){return clearTimeout(e)}}),[n,a,j,d]),Object(r.useEffect)((function(){p(o(l))}),[l]);var g=Object(r.useMemo)((function(){return function(e){var t=[];return Object.keys(e).forEach((function(n){e[n]&&t.push(Object(c.jsxs)("span",{children:[e[n]," ",n," "]},n))})),t}(m)}),[m]);return Object(c.jsx)("div",{children:g.length?g:Object(c.jsx)("span",{children:"Time is up!"})})},h=n(44),d=n(64),b=n(65),f=n(66),l=n(67),O=n(28),v=n(63);var x=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(O.a)({palette:{type:n?"dark":"light"}});return Object(c.jsx)(v.a,{theme:a,children:Object(c.jsxs)(h.a,{style:{height:"100vh"},children:[Object(c.jsx)(d.a,{variant:"h3",children:"Centre number RU105"}),Object(c.jsxs)(b.a,{container:!0,spacing:5,justify:"center",children:[Object(c.jsx)(b.a,{item:!0,children:Object(c.jsxs)(f.a,{variant:"outlined",children:[Object(c.jsx)(d.a,{variant:"h5",children:"Mathematics paper 1"}),Object(c.jsx)(j,{minutes:5})]})}),Object(c.jsx)(b.a,{item:!0,children:Object(c.jsxs)(f.a,{variant:"outlined",children:[Object(c.jsx)(d.a,{variant:"h5",children:"Science paper 2"}),Object(c.jsx)(j,{days:1,hours:2,minutes:5,seconds:3})]})})]}),Object(c.jsx)(l.a,{checked:n,onChange:function(){return i(!n)}})]})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),m()}},[[42,1,2]]]);
//# sourceMappingURL=main.15e151af.chunk.js.map