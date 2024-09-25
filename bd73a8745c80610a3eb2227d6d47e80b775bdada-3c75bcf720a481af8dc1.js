/*! For license information please see bd73a8745c80610a3eb2227d6d47e80b775bdada-3c75bcf720a481af8dc1.js.LICENSE.txt */
"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[461],{2682:function(e,t,r){r.d(t,{A:function(){return k}});var n=r(6540);function o(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(null,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=r(5540),i=r(4146);function u(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var l=n.createContext();var f={initialChunks:{}},p="PENDING",d="REJECTED";var y=function(e){return e};function m(e){var t=e.defaultResolveComponent,r=void 0===t?y:t,m=e.render,h=e.onLoad;function v(e,t){void 0===t&&(t={});var y=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),v={};function b(e){return t.cacheKey?t.cacheKey(e):y.resolve?y.resolve(e):"static"}function g(e,n,o){var a=t.resolveComponent?t.resolveComponent(e,n):r(e);return i(o,a,{preload:!0}),a}var S,C,w=function(e){var t=b(e),r=v[t];return r&&r.status!==d||((r=y.requireAsync(e)).status=p,v[t]=r,r.then((function(){r.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:y.resolve(e),chunkName:y.chunkName(e),error:t?t.message:t}),r.status=d}))),r},E=function(e){function r(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:b(r)},u(!r.__chunkExtractor||y.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(y.requireAsync(r).catch((function(){return null})),n.loadSync(),r.__chunkExtractor.addChunk(y.chunkName(r))),c(n)):(!1!==t.ssr&&(y.isReady&&y.isReady(r)||y.chunkName&&f.initialChunks[y.chunkName(r)])&&n.loadSync(),n)}(0,s.A)(r,e),r.getDerivedStateFromProps=function(e,t){var r=b(e);return a({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var n=r.prototype;return n.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===d&&this.setCache(),this.state.loading&&this.loadAsync()},n.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},n.componentWillUnmount=function(){this.mounted=!1},n.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},n.getCacheKey=function(){return b(this.props)},n.getCache=function(){return v[this.getCacheKey()]},n.setCache=function(e){void 0===e&&(e=void 0),v[this.getCacheKey()]=e},n.triggerOnLoad=function(){var e=this;h&&setTimeout((function(){h(e.state.result,e.props)}))},n.loadSync=function(){if(this.state.loading)try{var e=g(y.requireSync(this.props),this.props,$);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:y.resolve(this.props),chunkName:y.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},n.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var r=g(t,e.props,$);e.safeSetState({result:r,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},n.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,o(e,["__chunkExtractor","forwardedRef"]));return w(t)},n.render=function(){var e=this.props,r=e.forwardedRef,n=e.fallback,c=(e.__chunkExtractor,o(e,["forwardedRef","fallback","__chunkExtractor"])),s=this.state,i=s.error,u=s.loading,l=s.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===p)throw this.loadAsync();if(i)throw i;var f=n||t.fallback||null;return u?f:m({fallback:f,result:l,options:t,props:a({},c,{ref:r})})},r}(n.Component),k=(C=function(e){return n.createElement(l.Consumer,null,(function(t){return n.createElement(S,Object.assign({__chunkExtractor:t},e))}))},(S=E).displayName&&(C.displayName=S.displayName+"WithChunkExtractor"),C),$=n.forwardRef((function(e,t){return n.createElement(k,Object.assign({forwardedRef:t},e))}));return $.displayName="Loadable",$.preload=function(e){$.load(e)},$.load=function(e){return w(e)},$}return{loadable:v,lazy:function(e,t){return v(e,a({},t,{suspense:!0}))}}}var h=m({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return n.createElement(t,r)}}),v=h.loadable,b=h.lazy,g=m({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),S=g.loadable,C=g.lazy;var w=v;w.lib=S,b.lib=C;const E=w((()=>Promise.all([r.e(593),r.e(791),r.e(108)]).then(r.bind(r,9108))));var k=e=>{let{children:t}=e;const{0:r,1:o}=(0,n.useState)(0);return n.createElement("div",{className:"font-display"},n.createElement("div",{className:"container mx-auto py-5"},n.createElement("div",{className:"home-module--hero-gradient--eca70 min-h-80"},n.createElement("div",{className:"p-5 flex"},n.createElement("p",{className:"font-semibold text-white"},"YouCompany"),n.createElement(E,null),n.createElement("button",{onClick:()=>o(r+1)},r))),t))}},4146:function(e,t,r){var n=r(4363),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function i(e){return n.isMemo(e)?c:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=c;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var c=l(r);f&&(c=c.concat(f(r)));for(var s=i(t),m=i(r),h=0;h<c.length;++h){var v=c[h];if(!(a[v]||n&&n[v]||m&&m[v]||s&&s[v])){var b=p(r,v);try{u(t,v,b)}catch(g){}}}}return t}},2799:function(e,t){var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,S=r?Symbol.for("react.scope"):60119;function C(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case f:case a:case s:case c:case d:return e;default:switch(e=e&&e.$$typeof){case u:case p:case h:case m:case i:return e;default:return t}}case o:return t}}}function w(e){return C(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=i,t.Element=n,t.ForwardRef=p,t.Fragment=a,t.Lazy=h,t.Memo=m,t.Portal=o,t.Profiler=s,t.StrictMode=c,t.Suspense=d,t.isAsyncMode=function(e){return w(e)||C(e)===l},t.isConcurrentMode=w,t.isContextConsumer=function(e){return C(e)===u},t.isContextProvider=function(e){return C(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return C(e)===p},t.isFragment=function(e){return C(e)===a},t.isLazy=function(e){return C(e)===h},t.isMemo=function(e){return C(e)===m},t.isPortal=function(e){return C(e)===o},t.isProfiler=function(e){return C(e)===s},t.isStrictMode=function(e){return C(e)===c},t.isSuspense=function(e){return C(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===f||e===s||e===c||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===i||e.$$typeof===u||e.$$typeof===p||e.$$typeof===b||e.$$typeof===g||e.$$typeof===S||e.$$typeof===v)},t.typeOf=C},4363:function(e,t,r){e.exports=r(2799)}}]);
//# sourceMappingURL=bd73a8745c80610a3eb2227d6d47e80b775bdada-3c75bcf720a481af8dc1.js.map