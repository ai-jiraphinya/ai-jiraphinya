(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{61912:function(e,n,r){Promise.resolve().then(r.bind(r,25967)),Promise.resolve().then(r.bind(r,91978)),Promise.resolve().then(r.bind(r,99795)),Promise.resolve().then(r.bind(r,80855)),Promise.resolve().then(r.bind(r,5347))},91978:function(e,n,r){"use strict";r.r(n),r.d(n,{WelcomeMessage:function(){return u}});var t=r(27573),s=r(33772),o=r(7653),i=r(5537);let l="## Welcome to Pulumi AI.\n\nWhat cloud infrastructure would you like to build?\n\nTry something like _I want a static website on AWS behind a CloudFront CDN_, or\n_I want an Ubuntu Linux server that I can access over SSH_.";function u(){let[e,n]=(0,o.useState)(""),r=(0,o.useRef)(),u=(0,i.CG)(e=>e.chat.versions.length>0);return((0,o.useEffect)(()=>{if(r.current)return;let e=3;r.current=setInterval(function(){var t;if("_"===l[(e+=1)-1]&&(e+=1),e>l.length){clearInterval(r.current);return}let s=l.slice(0,e).trimEnd();(null!==(t=s.match(/_/g))&&void 0!==t?t:[]).length%2==1&&(s+="_"),n(s)},15)},[]),u&&r.current&&clearInterval(r.current),u)?(0,t.jsx)(s.D,{className:"welcome prose prose-sm dark:prose-invert max-w-none",children:l}):(0,t.jsx)(s.D,{className:"welcome prose prose-sm dark:prose-invert max-w-none",children:e})}}},function(e){e.O(0,[1685,2910,37,7531,1293,1362,1591,1744],function(){return e(e.s=61912)}),_N_E=e.O()}]);