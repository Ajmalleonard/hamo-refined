!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("react"),require("@studio-freight/tempus"),require("throttle-debounce")):"function"==typeof define&&define.amd?define(["exports","react","@studio-freight/tempus","throttle-debounce"],n):n((e||self).hamo={},e.react,e.tempus,e.throttleDebounce)}(this,function(e,n,t,r){var u="undefined"!=typeof window,o=u?function(){return n.useMemo(function(){return(window.location.href.includes("#debug")||"development"===process.env.NODE_ENV)&&!window.location.href.includes("#production")},[])}:function(){},c=u?n.useLayoutEffect:n.useEffect,i=u?function(){var e=n.useState(function(){return"undefined"!=typeof document?document.readyState:"loading"}),t=e[0],r=e[1];return c(function(){if("undefined"!=typeof document)return r(document.readyState),document.addEventListener("readystatechange",e,!1),function(){return document.removeEventListener("readystatechange",e,!1)};function e(){r(document.readyState)}},[]),n.useEffect(function(){"undefined"!=typeof document&&"complete"===document.readyState&&r("complete")},[]),t}:function(){},f=[];function s(e){var n=e.type;"string"==typeof e&&(n=e);var t=[];t.push("string"==typeof e?{type:n}:e),f.forEach(function(e){var r=e[0],u=e[1];"string"==typeof r&&r!==n||("function"!=typeof r||r.apply(void 0,t))&&u.apply(void 0,t)})}var a=u?function(){var e=n.useCallback(function(){try{return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}catch(e){return!1}},[]),t=n.useState(e()),r=t[0],u=t[1],o=n.useCallback(function(){u(e())},[e]);return n.useEffect(function(){return o(),window.addEventListener("resize",o,{passive:!0}),function(){window.removeEventListener("resize",o,{passive:!0})}},[o]),r}:function(){};function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},d.apply(this,arguments)}function l(e,n){void 0===n&&(n=0);var t=n+e.offsetTop;return e.offsetParent?l(e.offsetParent,t):t}function v(e,n){void 0===n&&(n=0);var t=n+e.offsetLeft;return e.offsetParent?v(e.offsetParent,t):t}e.dispatch=s,e.useDebug=o,e.useDocumentReadyState=i,e.useEventBus=function(e,t,r){return void 0===r&&(r=[]),n.useEffect(function(){return function(e,n){if(null==e)throw new Error("Invalid filter");if(null==n)throw new Error("Invalid callback");return f=[].concat(f,[[e,n]]),function(){f=f.filter(function(e){return e[1]!==n})}}(e,t)},[].concat(r,[t,e])),s},e.useFrame=function(e,n){void 0===n&&(n=0),c(function(){if(e){var r=t.raf.add(e,n);return function(){t.raf.remove(r)}}},[e,n])},e.useInterval=function(e,t){var r=n.useRef(),u=n.useRef();return n.useEffect(function(){r.current=e}),n.useEffect(function(){if(null!==t)return u.current=setInterval(function(){r.current()},t),function(){return clearInterval(u.current)}},[t]),function(){return clearInterval(u.current)}},e.useIsTouchDevice=a,e.useIsVisible=function(e){var t=void 0===e?{}:e,r=t.root,u=void 0===r?null:r,o=t.rootMargin,c=void 0===o?"0px":o,i=t.threshold,f=void 0===i?1:i,s=t.once,a=void 0!==s&&s,d=n.useRef(),l=n.useRef(),v=n.useState(!1),p=v[0],h=v[1],m=n.useCallback(function(e){l.current||(l.current=e)},[]),y=n.useCallback(function(e){h(e[0].isIntersecting)},[]);return n.useEffect(function(){return d.current=new IntersectionObserver(y,{root:u,rootMargin:c,threshold:f}),l.current&&d.current.observe(l.current),function(){d.current&&d.current.disconnect()}},[y]),n.useEffect(function(){a&&p&&d.current.disconnect()},[p]),{setRef:m,inView:p}},e.useLayoutEffect=c,e.useMediaQuery=function(e){var t=n.useMemo(function(){if(u)try{return window.matchMedia(e)}catch(e){"production"!==process.env.NODE_ENV&&console.error(e)}return null},[e]),r=n.useState(!!t&&t.matches),o=r[0],c=r[1],i=n.useCallback(function(e){c(e.matches)},[]);return n.useEffect(function(){if(t)return i(t),t.addEventListener("change",i,{passive:!0}),function(){t.removeEventListener("change",i,{passive:!0})}},[t,i]),o},e.useOutsideClickEvent=function(e,t){var r=n.useCallback(function(n){e.current&&!e.current.contains(n.target)&&t()},[e,t]);n.useEffect(function(){if(e.current)return document.addEventListener("mousedown",r),function(){document.removeEventListener("mousedown",r)}},[r,e])},e.useRect=function(e){var t=void 0===e?{}:e,u=t.lazy,o=void 0!==u&&u,c=t.debounce,i=void 0===c?1e3:c,f=n.useRef(),s=n.useRef(),a=n.useState({}),p=a[0],h=a[1],m=n.useRef(p),y=n.useCallback(function(){if(f.current){var e=l(f.current),n=v(f.current);m.current=d({},m.current,{top:e,left:n}),o||h(m.current)}},[o]);n.useEffect(function(){var e=r.throttle(i,y),n=new ResizeObserver(e);return n.observe(document.body),function(){n.disconnect(),e.cancel({upcomingOnly:!0})}},[i,y]);var E=n.useCallback(function(e){var n=e[0].contentRect;m.current=d({},m.current,{width:n.width,height:n.height}),o||h(m.current)},[o]),b=n.useCallback(function(){return m.current},[]);return n.useEffect(function(){return function(){var e;"development"!==process.env.NODE_ENV&&(null==(e=s.current)||e.disconnect())}},[]),[n.useCallback(function(e){var n;e&&e!==f.current&&(null==(n=s.current)||n.disconnect(),s.current=new ResizeObserver(E),s.current.observe(e),f.current=e)},[y]),o?b:p]},e.useSlots=function(e,t){void 0===e&&(e=[]),void 0===t&&(t=[]);var r=n.useMemo(function(){return t&&[t].flat()},[t]),u=n.useMemo(function(){return e&&[e].flat()},[e]);return n.useMemo(function(){if(r&&u){var n=u.map(function(e){var n;return null==(n=r.find(function(n){return n.type===e}))?void 0:n.props.children});return e[0]?n:n[0]}},[r,u])}});
//# sourceMappingURL=index.umd.js.map
