"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[141],{8141:function(e,n,r){r.r(n);var t=r(885),c=r(2791),a=r(501),o=r(1321),i=r(4002),u=r(184);n.default=function(){var e=(0,c.useState)([]),n=(0,t.Z)(e,2),r=n[0],s=n[1];return(0,c.useEffect)((function(){(0,o.Df)().then((function(e){return s(e.data.results)}))}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{children:"Trending today"}),(0,u.jsx)("ul",{className:i.Z.movies_list,children:r&&r.map((function(e){var n=e.id,r=e.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(n),children:r})},n)}))})]})}},1321:function(e,n,r){r.d(n,{Cm:function(){return _},Df:function(){return i},hG:function(){return s},jf:function(){return m},qF:function(){return u}});var t=r(4569),c=r.n(t),a="https://api.themoviedb.org/3",o="105389e3cecb1095d9153413896fdc0a",i=function(){var e=new URLSearchParams({api_key:o});return c()("".concat(a,"/trending/movie/day?").concat(e))},u=function(e){var n=new URLSearchParams({api_key:o,query:e});return c()("".concat(a,"/search/movie?").concat(n))},s=function(e){var n=new URLSearchParams({api_key:o});return c()("".concat(a,"/movie/").concat(e,"?").concat(n))},m=function(e){var n=new URLSearchParams({api_key:o});return c()("".concat(a,"/movie/").concat(e,"/credits?").concat(n))},_=function(e){var n=new URLSearchParams({api_key:o});return c()("".concat(a,"/movie/").concat(e,"/reviews?").concat(n))}},4002:function(e,n){n.Z={searchForm:"movies_searchForm__cDEKV",searchForm_button:"movies_searchForm_button__4MMV5",searchForm_button__label:"movies_searchForm_button__label__Jp0Em",searchForm_input:"movies_searchForm_input__MuOBN",movies_list:"movies_movies_list__pFMp4"}}}]);
//# sourceMappingURL=141.757a02f8.chunk.js.map