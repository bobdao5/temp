var F={},Q={get exports(){return F},set exports(D){F=D}};(function(D,W){(function(B){function S(e){const f=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);let t=1779033703,c=3144134277,r=1013904242,i=2773480762,n=1359893119,s=2600822924,l=528734635,a=1541459225;const d=new Uint32Array(64);function y(E){let P=0,g=E.length;for(;g>=64;){let w=t,I=c,M=r,v=i,u=n,U=s,h=l,V=a,A,b,j,O,X;for(b=0;b<16;b++)j=P+b*4,d[b]=(E[j]&255)<<24|(E[j+1]&255)<<16|(E[j+2]&255)<<8|E[j+3]&255;for(b=16;b<64;b++)A=d[b-2],O=(A>>>17|A<<32-17)^(A>>>19|A<<32-19)^A>>>10,A=d[b-15],X=(A>>>7|A<<32-7)^(A>>>18|A<<32-18)^A>>>3,d[b]=(O+d[b-7]|0)+(X+d[b-16]|0)|0;for(b=0;b<64;b++)O=(((u>>>6|u<<32-6)^(u>>>11|u<<32-11)^(u>>>25|u<<32-25))+(u&U^~u&h)|0)+(V+(f[b]+d[b]|0)|0)|0,X=((w>>>2|w<<32-2)^(w>>>13|w<<32-13)^(w>>>22|w<<32-22))+(w&I^w&M^I&M)|0,V=h,h=U,U=u,u=v+O|0,v=M,M=I,I=w,w=O+X|0;t=t+w|0,c=c+I|0,r=r+M|0,i=i+v|0,n=n+u|0,s=s+U|0,l=l+h|0,a=a+V|0,P+=64,g-=64}}y(e);let _,H=e.length%64,m=e.length/536870912|0,p=e.length<<3,L=H<56?56:120,x=e.slice(e.length-H,e.length);for(x.push(128),_=H+1;_<L;_++)x.push(0);return x.push(m>>>24&255),x.push(m>>>16&255),x.push(m>>>8&255),x.push(m>>>0&255),x.push(p>>>24&255),x.push(p>>>16&255),x.push(p>>>8&255),x.push(p>>>0&255),y(x),[t>>>24&255,t>>>16&255,t>>>8&255,t>>>0&255,c>>>24&255,c>>>16&255,c>>>8&255,c>>>0&255,r>>>24&255,r>>>16&255,r>>>8&255,r>>>0&255,i>>>24&255,i>>>16&255,i>>>8&255,i>>>0&255,n>>>24&255,n>>>16&255,n>>>8&255,n>>>0&255,s>>>24&255,s>>>16&255,s>>>8&255,s>>>0&255,l>>>24&255,l>>>16&255,l>>>8&255,l>>>0&255,a>>>24&255,a>>>16&255,a>>>8&255,a>>>0&255]}function R(e,f,t){e=e.length<=64?e:S(e);const c=64+f.length+4,r=new Array(c),i=new Array(64);let n,s=[];for(n=0;n<64;n++)r[n]=54;for(n=0;n<e.length;n++)r[n]^=e[n];for(n=0;n<f.length;n++)r[64+n]=f[n];for(n=c-4;n<c;n++)r[n]=0;for(n=0;n<64;n++)i[n]=92;for(n=0;n<e.length;n++)i[n]^=e[n];function l(){for(let a=c-1;a>=c-4;a--){if(r[a]++,r[a]<=255)return;r[a]=0}}for(;t>=32;)l(),s=s.concat(S(i.concat(S(r)))),t-=32;return t>0&&(l(),s=s.concat(S(i.concat(S(r))).slice(0,t))),s}function Z(e,f,t,c,r){let i;for(K(e,(2*t-1)*16,r,0,16),i=0;i<2*t;i++)$(e,i*16,r,16),G(r,c),K(r,0,e,f+i*16,16);for(i=0;i<t;i++)K(e,f+i*2*16,e,i*16,16);for(i=0;i<t;i++)K(e,f+(i*2+1)*16,e,(i+t)*16,16)}function o(e,f){return e<<f|e>>>32-f}function G(e,f){K(e,0,f,0,16);for(let t=8;t>0;t-=2)f[4]^=o(f[0]+f[12],7),f[8]^=o(f[4]+f[0],9),f[12]^=o(f[8]+f[4],13),f[0]^=o(f[12]+f[8],18),f[9]^=o(f[5]+f[1],7),f[13]^=o(f[9]+f[5],9),f[1]^=o(f[13]+f[9],13),f[5]^=o(f[1]+f[13],18),f[14]^=o(f[10]+f[6],7),f[2]^=o(f[14]+f[10],9),f[6]^=o(f[2]+f[14],13),f[10]^=o(f[6]+f[2],18),f[3]^=o(f[15]+f[11],7),f[7]^=o(f[3]+f[15],9),f[11]^=o(f[7]+f[3],13),f[15]^=o(f[11]+f[7],18),f[1]^=o(f[0]+f[3],7),f[2]^=o(f[1]+f[0],9),f[3]^=o(f[2]+f[1],13),f[0]^=o(f[3]+f[2],18),f[6]^=o(f[5]+f[4],7),f[7]^=o(f[6]+f[5],9),f[4]^=o(f[7]+f[6],13),f[5]^=o(f[4]+f[7],18),f[11]^=o(f[10]+f[9],7),f[8]^=o(f[11]+f[10],9),f[9]^=o(f[8]+f[11],13),f[10]^=o(f[9]+f[8],18),f[12]^=o(f[15]+f[14],7),f[13]^=o(f[12]+f[15],9),f[14]^=o(f[13]+f[12],13),f[15]^=o(f[14]+f[13],18);for(let t=0;t<16;++t)e[t]+=f[t]}function $(e,f,t,c){for(let r=0;r<c;r++)t[r]^=e[f+r]}function K(e,f,t,c,r){for(;r--;)t[c++]=e[f++]}function q(e){if(!e||typeof e.length!="number")return!1;for(let f=0;f<e.length;f++){const t=e[f];if(typeof t!="number"||t%1||t<0||t>=256)return!1}return!0}function T(e,f){if(typeof e!="number"||e%1)throw new Error("invalid "+f);return e}function z(e,f,t,c,r,i,n){if(t=T(t,"N"),c=T(c,"r"),r=T(r,"p"),i=T(i,"dkLen"),t===0||t&t-1)throw new Error("N must be power of 2");if(t>2147483647/128/c)throw new Error("N too large");if(c>2147483647/128/r)throw new Error("r too large");if(!q(e))throw new Error("password must be an array or buffer");if(e=Array.prototype.slice.call(e),!q(f))throw new Error("salt must be an array or buffer");f=Array.prototype.slice.call(f);let s=R(e,f,r*128*c);const l=new Uint32Array(r*32*c);for(let u=0;u<l.length;u++){const U=u*4;l[u]=(s[U+3]&255)<<24|(s[U+2]&255)<<16|(s[U+1]&255)<<8|(s[U+0]&255)<<0}const a=new Uint32Array(64*c),d=new Uint32Array(32*c*t),y=32*c,_=new Uint32Array(16),H=new Uint32Array(16),m=r*t*2;let p=0,L=null,x=!1,E=0,P=0,g,w;const I=n?parseInt(1e3/c):4294967295,M=typeof setImmediate<"u"?setImmediate:setTimeout,v=function(){if(x)return n(new Error("cancelled"),p/m);let u;switch(E){case 0:w=P*32*c,K(l,w,a,0,y),E=1,g=0;case 1:u=t-g,u>I&&(u=I);for(let h=0;h<u;h++)K(a,0,d,(g+h)*y,y),Z(a,y,c,_,H);if(g+=u,p+=u,n){const h=parseInt(1e3*p/m);if(h!==L){if(x=n(null,p/m),x)break;L=h}}if(g<t)break;g=0,E=2;case 2:u=t-g,u>I&&(u=I);for(let h=0;h<u;h++){const V=(2*c-1)*16,A=a[V]&t-1;$(d,A*y,a,y),Z(a,y,c,_,H)}if(g+=u,p+=u,n){const h=parseInt(1e3*p/m);if(h!==L){if(x=n(null,p/m),x)break;L=h}}if(g<t)break;if(K(a,0,l,w,y),P++,P<r){E=0;break}s=[];for(let h=0;h<l.length;h++)s.push(l[h]>>0&255),s.push(l[h]>>8&255),s.push(l[h]>>16&255),s.push(l[h]>>24&255);const U=R(e,s,i);return n&&n(null,1,U),U}n&&M(v)};if(!n)for(;;){const u=v();if(u!=null)return u}v()}const J={scrypt:function(e,f,t,c,r,i,n){return new Promise(function(s,l){let a=0;n&&n(0),z(e,f,t,c,r,i,function(d,y,_){if(d)l(d);else if(_)n&&a!==1&&n(1),s(new Uint8Array(_));else if(n&&y!==a)return a=y,n(y)})})},syncScrypt:function(e,f,t,c,r,i){return new Uint8Array(z(e,f,t,c,r,i))}};D.exports=J})()})(Q);const Y=F;export{Y as s};
