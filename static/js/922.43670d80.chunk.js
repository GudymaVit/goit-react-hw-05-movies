"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[922],{3922:function(n,e,t){t.r(e);var r=t(885),c=t(6871),a=t(2791),o=t(1321),i=t(184);e.default=function(){var n=(0,a.useState)(null),e=(0,r.Z)(n,2),t=e[0],u=e[1],s=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,o.Cm)(s).then((function(n){u(n.data)}))}),[s]),(0,i.jsx)(i.Fragment,{children:t&&(t.results.length>0?(0,i.jsx)("ul",{children:t.results.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,i.jsxs)("li",{children:[(0,i.jsxs)("h2",{children:["Author: ",t]}),(0,i.jsxs)("p",{children:[" ",r]})]},e)}))}):(0,i.jsx)("p",{children:"No rewiews for this movie"}))})}},1321:function(n,e,t){t.d(e,{Cm:function(){return f},Df:function(){return i},hG:function(){return s},jf:function(){return h},qF:function(){return u}});var r=t(4569),c=t.n(r),a="https://api.themoviedb.org/3",o="105389e3cecb1095d9153413896fdc0a",i=function(){var n=new URLSearchParams({api_key:o});return c()("".concat(a,"/trending/movie/day?").concat(n))},u=function(n){var e=new URLSearchParams({api_key:o,query:n});return c()("".concat(a,"/search/movie?").concat(e))},s=function(n){var e=new URLSearchParams({api_key:o});return c()("".concat(a,"/movie/").concat(n,"?").concat(e))},h=function(n){var e=new URLSearchParams({api_key:o});return c()("".concat(a,"/movie/").concat(n,"/credits?").concat(e))},f=function(n){var e=new URLSearchParams({api_key:o});return c()("".concat(a,"/movie/").concat(n,"/reviews?").concat(e))}}}]);
//# sourceMappingURL=922.43670d80.chunk.js.map