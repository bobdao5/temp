import{c as f}from"./@ethereumjs-ec0ac526.js";import{r as w}from"./safe-buffer-b298f5c8.js";var s={},u={get exports(){return s},set exports(r){s=r}},i;function y(){if(i)return s;i=1;var r=65536,m=4294967295;function p(){throw new Error(`Secure random number generation is not supported by this browser.
Use Chrome, Firefox or Internet Explorer 11`)}var l=w().Buffer,o=f.crypto||f.msCrypto;o&&o.getRandomValues?u.exports=c:u.exports=p;function c(e,a){if(e>m)throw new RangeError("requested too many random bytes");var t=l.allocUnsafe(e);if(e>0)if(e>r)for(var n=0;n<e;n+=r)o.getRandomValues(t.slice(n,n+r));else o.getRandomValues(t);return typeof a=="function"?process.nextTick(function(){a(null,t)}):t}return s}export{y as r};