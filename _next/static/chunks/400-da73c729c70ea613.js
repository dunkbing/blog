(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[400],{46:function(e,t,n){"use strict";n(1671);var i=n(6141);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(5321).Z,o=n(1322).Z,a=n(6687).Z,l=n(6239).Z,c=a(n(959)),u=o(n(4157)),s=n(4835),d=n(9332),f=n(6819);n(530);var g=o(n(883)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://dunkbing.github.io/",loader:"imgix",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function v(e,t,n,i,o){e&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode){if(null==n?void 0:n.current){var t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});var o=!1,a=!1;n.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:function(){return o},isPropagationStopped:function(){return a},persist:function(){},preventDefault:function(){o=!0,t.preventDefault()},stopPropagation:function(){a=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}}))}var b=c.forwardRef(function(e,t){var n=e.imgAttributes,i=e.heightInt,o=e.widthInt,a=(e.qualityInt,e.className),u=e.imgStyle,s=e.blurStyle,d=e.isLazy,f=e.fill,g=e.placeholder,h=e.loading,m=e.srcString,p=(e.config,e.unoptimized),b=(e.loader,e.onLoadRef),w=e.onLoadingCompleteRef,y=(e.onLoad,e.onError),z=l(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","onLoad","onError"]);return h=d?"lazy":h,c.default.createElement(c.default.Fragment,null,c.default.createElement("img",Object.assign({},z,n,{width:o,height:i,decoding:"async","data-nimg":f?"fill":"1",className:a,loading:h,style:r({},u,s),ref:c.useCallback(function(e){t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(y&&(e.src=e.src),e.complete&&v(e,m,b,w,p))},[m,b,w,y,p,t]),onLoad:function(e){v(e.currentTarget,m,b,w,p)},onError:function(e){var t=e.currentTarget.style;"transparent"===t.color&&(t.color=""),"blur"===g&&t.backgroundImage&&(t.backgroundSize="",t.backgroundPosition="",t.backgroundRepeat="",t.backgroundImage=""),y&&y(e)}})))}),w=c.forwardRef(function(e,t){var n,o,a,v=e.src,w=e.sizes,y=e.unoptimized,z=void 0!==y&&y,C=e.priority,S=void 0!==C&&C,E=e.loading,I=e.className,j=e.quality,k=e.width,R=e.height,_=e.fill,x=e.style,L=e.onLoad,M=e.onLoadingComplete,P=e.placeholder,O=void 0===P?"empty":P,D=e.blurDataURL,q=e.layout,N=e.objectFit,A=e.objectPosition,T=(e.lazyBoundary,e.lazyRoot,l(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"])),W=c.useContext(f.ImageConfigContext),F=c.useMemo(function(){var e=h||W||d.imageConfigDefault,t=[].concat(i(e.deviceSizes),i(e.imageSizes)).sort(function(e,t){return e-t}),n=e.deviceSizes.sort(function(e,t){return e-t});return r({},e,{allSizes:t,deviceSizes:n})},[W]),B=T,U=B.loader||g.default;if(delete B.loader,"__next_img_default"in U){if("custom"===F.loader)throw Error('Image with src "'.concat(v,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{var H=U;U=function(e){return e.config,H(l(e,["config"]))}}if(q){"fill"===q&&(_=!0);var G={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[q];G&&(x=r({},x,G));var X={responsive:"100vw",fill:"100vw"}[q];X&&!w&&(w=X)}var Z="",V=p(k),J=p(R);if("object"==typeof(n=v)&&(m(n)||void 0!==n.src)){var $=m(v)?v.default:v;if(!$.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify($)));if(!$.height||!$.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify($)));if(o=$.blurWidth,a=$.blurHeight,D=D||$.blurDataURL,Z=$.src,!_){if(V||J){if(V&&!J){var K=V/$.width;J=Math.round($.height*K)}else if(!V&&J){var Q=J/$.height;V=Math.round($.width*Q)}}else V=$.width,J=$.height}}var Y=!S&&("lazy"===E||void 0===E);((v="string"==typeof v?v:Z).startsWith("data:")||v.startsWith("blob:"))&&(z=!0,Y=!1),F.unoptimized&&(z=!0);var ee=p(j),et=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:A}:{},{color:"transparent"},x),en="blur"===O&&D?{backgroundSize:et.objectFit||"cover",backgroundPosition:et.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({widthInt:V,heightInt:J,blurWidth:o,blurHeight:a,blurDataURL:D}),'")')}:{},ei=function(e){var t=e.config,n=e.src,r=e.unoptimized,o=e.width,a=e.quality,l=e.sizes,c=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n){var r=e.deviceSizes,o=e.allSizes;if(n){for(var a,l=/(^|\s)(1?\d?\d)vw/g,c=[];a=l.exec(n);a)c.push(parseInt(a[2]));if(c.length){var u=.01*Math.min.apply(Math,c);return{widths:o.filter(function(e){return e>=r[0]*u}),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:i(new Set([t,2*t].map(function(e){return o.find(function(t){return t>=e})||o[o.length-1]}))),kind:"x"}}(t,o,l),s=u.widths,d=u.kind,f=s.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:s.map(function(e,i){return"".concat(c({config:t,src:n,quality:a,width:e})," ").concat("w"===d?e:i+1).concat(d)}).join(", "),src:c({config:t,src:n,quality:a,width:s[f]})}}({config:F,src:v,unoptimized:z,width:V,quality:ee,sizes:w,loader:U}),er=v,eo={imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:B.crossOrigin},ea=c.useRef(L);c.useEffect(function(){ea.current=L},[L]);var el=c.useRef(M);c.useEffect(function(){el.current=M},[M]);var ec=r({isLazy:Y,imgAttributes:ei,heightInt:J,widthInt:V,qualityInt:ee,className:I,imgStyle:et,blurStyle:en,loading:E,config:F,fill:_,unoptimized:z,placeholder:O,loader:U,srcString:er,onLoadRef:ea,onLoadingCompleteRef:el},B);return c.default.createElement(c.default.Fragment,null,c.default.createElement(b,Object.assign({},ec,{ref:t})),S?c.default.createElement(u.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src},eo))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4835:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){var t=e.widthInt,n=e.heightInt,i=e.blurWidth,r=e.blurHeight,o=e.blurDataURL,a=i||t,l=r||n,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&r?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},883:function(e,t){"use strict";function n(e){var t=e.config,n=e.src,i=e.width,r=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},1734:function(e,t,n){e.exports=n(46)},6636:function(e,t,n){e.exports=n(9985)},8460:function(e,t,n){let i=n(1527);e.exports.c=i},42:function(e,t,n){"use strict";n.d(t,{R:function(){return d}});var i={};n.r(i),n.d(i,{MDXContext:function(){return a},MDXProvider:function(){return s},useMDXComponents:function(){return c},withMDXComponents:function(){return l}});var r=n(959),o=n(8460);let a=r.createContext({});function l(e){return function(t){let n=c(t.components);return r.createElement(e,{...t,allComponents:n})}}function c(e){let t=r.useContext(a);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let u={};function s({components:e,children:t,disableParentContext:n}){let i=c(e);return n&&(i=e||u),r.createElement(a.Provider,{value:i},t)}function d({compiledSource:e,frontmatter:t,scope:n,components:a={},lazy:l}){let[c,u]=(0,r.useState)(!l||"undefined"==typeof window);(0,r.useEffect)(()=>{if(l){let e=window.requestIdleCallback(()=>{u(!0)});return()=>window.cancelIdleCallback(e)}},[]);let d=(0,r.useMemo)(()=>{let r=Object.assign({opts:{...i,...o.c}},{frontmatter:t},n),a=Object.keys(r),l=Object.values(r),c=Reflect.construct(Function,a.concat(`${e}`));return c.apply(c,l).default},[n,e]);if(!c)return r.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let f=r.createElement(s,{components:a},r.createElement(d,null));return l?r.createElement("div",null,f):f}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})}}]);