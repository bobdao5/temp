import{c as Qt}from"./@ethereumjs-ec0ac526.js";var Rt={},st={get exports(){return Rt},set exports(F){Rt=F}};/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */(function(F){(function(){var x="input is invalid type",Wt="finalize already called",Ct=typeof window=="object",y=Ct?window:{};y.JS_SHA3_NO_WINDOW&&(Ct=!1);var Gt=!Ct&&typeof self=="object",Vt=!y.JS_SHA3_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;Vt?y=Qt:Gt&&(y=self);var Yt=!y.JS_SHA3_NO_COMMON_JS&&!0&&F.exports,k=!y.JS_SHA3_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",p="0123456789abcdef".split(""),mt=[31,7936,2031616,520093696],It=[4,1024,262144,67108864],Lt=[1,256,65536,16777216],Xt=[6,1536,393216,100663296],b=[0,8,16,24],Nt=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],Dt=[224,256,384,512],Et=[128,256],Ht=["hex","buffer","arrayBuffer","array","digest"],gt={128:168,256:136};(y.JS_SHA3_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(t){return Object.prototype.toString.call(t)==="[object Array]"}),k&&(y.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(t){return typeof t=="object"&&t.buffer&&t.buffer.constructor===ArrayBuffer});for(var zt=function(t,e,r){return function(o){return new h(t,e,t).update(o)[r]()}},Kt=function(t,e,r){return function(o,n){return new h(t,e,n).update(o)[r]()}},Jt=function(t,e,r){return function(o,n,i,f){return v["cshake"+t].update(o,n,i,f)[r]()}},Ut=function(t,e,r){return function(o,n,i,f){return v["kmac"+t].update(o,n,i,f)[r]()}},S=function(t,e,r,o){for(var n=0;n<Ht.length;++n){var i=Ht[n];t[i]=e(r,o,i)}return t},jt=function(t,e){var r=zt(t,e,"hex");return r.create=function(){return new h(t,e,t)},r.update=function(o){return r.create().update(o)},S(r,zt,t,e)},Zt=function(t,e){var r=Kt(t,e,"hex");return r.create=function(o){return new h(t,e,o)},r.update=function(o,n){return r.create(n).update(o)},S(r,Kt,t,e)},$t=function(t,e){var r=gt[t],o=Jt(t,e,"hex");return o.create=function(n,i,f){return!i&&!f?v["shake"+t].create(n):new h(t,e,n).bytepad([i,f],r)},o.update=function(n,i,f,a){return o.create(i,f,a).update(n)},S(o,Jt,t,e)},qt=function(t,e){var r=gt[t],o=Ut(t,e,"hex");return o.create=function(n,i,f){return new Mt(t,e,i).bytepad(["KMAC",f],r).bytepad([n],r)},o.update=function(n,i,f,a){return o.create(n,f,a).update(i)},S(o,Ut,t,e)},Pt=[{name:"keccak",padding:Lt,bits:Dt,createMethod:jt},{name:"sha3",padding:Xt,bits:Dt,createMethod:jt},{name:"shake",padding:mt,bits:Et,createMethod:Zt},{name:"cshake",padding:It,bits:Et,createMethod:$t},{name:"kmac",padding:It,bits:Et,createMethod:qt}],v={},_=[],d=0;d<Pt.length;++d)for(var A=Pt[d],C=A.bits,w=0;w<C.length;++w){var Ot=A.name+"_"+C[w];if(_.push(Ot),v[Ot]=A.createMethod(C[w],A.padding),A.name!=="sha3"){var Tt=A.name+C[w];_.push(Tt),v[Tt]=v[Ot]}}function h(t,e,r){this.blocks=[],this.s=[],this.padding=e,this.outputBits=r,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(t<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(r&31)>>3;for(var o=0;o<50;++o)this.s[o]=0}h.prototype.update=function(t){if(this.finalized)throw new Error(Wt);var e,r=typeof t;if(r!=="string"){if(r==="object"){if(t===null)throw new Error(x);if(k&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!k||!ArrayBuffer.isView(t)))throw new Error(x)}else throw new Error(x);e=!0}for(var o=this.blocks,n=this.byteCount,i=t.length,f=this.blockCount,a=0,l=this.s,u,c;a<i;){if(this.reset)for(this.reset=!1,o[0]=this.block,u=1;u<f+1;++u)o[u]=0;if(e)for(u=this.start;a<i&&u<n;++a)o[u>>2]|=t[a]<<b[u++&3];else for(u=this.start;a<i&&u<n;++a)c=t.charCodeAt(a),c<128?o[u>>2]|=c<<b[u++&3]:c<2048?(o[u>>2]|=(192|c>>6)<<b[u++&3],o[u>>2]|=(128|c&63)<<b[u++&3]):c<55296||c>=57344?(o[u>>2]|=(224|c>>12)<<b[u++&3],o[u>>2]|=(128|c>>6&63)<<b[u++&3],o[u>>2]|=(128|c&63)<<b[u++&3]):(c=65536+((c&1023)<<10|t.charCodeAt(++a)&1023),o[u>>2]|=(240|c>>18)<<b[u++&3],o[u>>2]|=(128|c>>12&63)<<b[u++&3],o[u>>2]|=(128|c>>6&63)<<b[u++&3],o[u>>2]|=(128|c&63)<<b[u++&3]);if(this.lastByteIndex=u,u>=n){for(this.start=u-n,this.block=o[f],u=0;u<f;++u)l[u]^=o[u];B(l),this.reset=!0}else this.start=u}return this},h.prototype.encode=function(t,e){var r=t&255,o=1,n=[r];for(t=t>>8,r=t&255;r>0;)n.unshift(r),t=t>>8,r=t&255,++o;return e?n.push(o):n.unshift(o),this.update(n),n.length},h.prototype.encodeString=function(t){var e,r=typeof t;if(r!=="string"){if(r==="object"){if(t===null)throw new Error(x);if(k&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!k||!ArrayBuffer.isView(t)))throw new Error(x)}else throw new Error(x);e=!0}var o=0,n=t.length;if(e)o=n;else for(var i=0;i<t.length;++i){var f=t.charCodeAt(i);f<128?o+=1:f<2048?o+=2:f<55296||f>=57344?o+=3:(f=65536+((f&1023)<<10|t.charCodeAt(++i)&1023),o+=4)}return o+=this.encode(o*8),this.update(t),o},h.prototype.bytepad=function(t,e){for(var r=this.encode(e),o=0;o<t.length;++o)r+=this.encodeString(t[o]);var n=e-r%e,i=[];return i.length=n,this.update(i),this},h.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex,r=this.blockCount,o=this.s;if(t[e>>2]|=this.padding[e&3],this.lastByteIndex===this.byteCount)for(t[0]=t[r],e=1;e<r+1;++e)t[e]=0;for(t[r-1]|=2147483648,e=0;e<r;++e)o[e]^=t[e];B(o)}},h.prototype.toString=h.prototype.hex=function(){this.finalize();for(var t=this.blockCount,e=this.s,r=this.outputBlocks,o=this.extraBytes,n=0,i=0,f="",a;i<r;){for(n=0;n<t&&i<r;++n,++i)a=e[n],f+=p[a>>4&15]+p[a&15]+p[a>>12&15]+p[a>>8&15]+p[a>>20&15]+p[a>>16&15]+p[a>>28&15]+p[a>>24&15];i%t===0&&(B(e),n=0)}return o&&(a=e[n],f+=p[a>>4&15]+p[a&15],o>1&&(f+=p[a>>12&15]+p[a>>8&15]),o>2&&(f+=p[a>>20&15]+p[a>>16&15])),f},h.prototype.arrayBuffer=function(){this.finalize();var t=this.blockCount,e=this.s,r=this.outputBlocks,o=this.extraBytes,n=0,i=0,f=this.outputBits>>3,a;o?a=new ArrayBuffer(r+1<<2):a=new ArrayBuffer(f);for(var l=new Uint32Array(a);i<r;){for(n=0;n<t&&i<r;++n,++i)l[i]=e[n];i%t===0&&B(e)}return o&&(l[n]=e[n],a=a.slice(0,f)),a},h.prototype.buffer=h.prototype.arrayBuffer,h.prototype.digest=h.prototype.array=function(){this.finalize();for(var t=this.blockCount,e=this.s,r=this.outputBlocks,o=this.extraBytes,n=0,i=0,f=[],a,l;i<r;){for(n=0;n<t&&i<r;++n,++i)a=i<<2,l=e[n],f[a]=l&255,f[a+1]=l>>8&255,f[a+2]=l>>16&255,f[a+3]=l>>24&255;i%t===0&&B(e)}return o&&(a=i<<2,l=e[n],f[a]=l&255,o>1&&(f[a+1]=l>>8&255),o>2&&(f[a+2]=l>>16&255)),f};function Mt(t,e,r){h.call(this,t,e,r)}Mt.prototype=new h,Mt.prototype.finalize=function(){return this.encode(this.outputBits,!0),h.prototype.finalize.call(this)};var B=function(t){var e,r,o,n,i,f,a,l,u,c,E,O,M,R,I,N,D,H,g,z,K,J,U,j,P,T,W,G,V,Y,m,L,X,Z,$,q,Q,s,tt,et,rt,ot,nt,at,it,ft,ut,ct,ht,lt,pt,bt,yt,vt,dt,xt,At,kt,_t,wt,Bt,Ft,St;for(o=0;o<48;o+=2)n=t[0]^t[10]^t[20]^t[30]^t[40],i=t[1]^t[11]^t[21]^t[31]^t[41],f=t[2]^t[12]^t[22]^t[32]^t[42],a=t[3]^t[13]^t[23]^t[33]^t[43],l=t[4]^t[14]^t[24]^t[34]^t[44],u=t[5]^t[15]^t[25]^t[35]^t[45],c=t[6]^t[16]^t[26]^t[36]^t[46],E=t[7]^t[17]^t[27]^t[37]^t[47],O=t[8]^t[18]^t[28]^t[38]^t[48],M=t[9]^t[19]^t[29]^t[39]^t[49],e=O^(f<<1|a>>>31),r=M^(a<<1|f>>>31),t[0]^=e,t[1]^=r,t[10]^=e,t[11]^=r,t[20]^=e,t[21]^=r,t[30]^=e,t[31]^=r,t[40]^=e,t[41]^=r,e=n^(l<<1|u>>>31),r=i^(u<<1|l>>>31),t[2]^=e,t[3]^=r,t[12]^=e,t[13]^=r,t[22]^=e,t[23]^=r,t[32]^=e,t[33]^=r,t[42]^=e,t[43]^=r,e=f^(c<<1|E>>>31),r=a^(E<<1|c>>>31),t[4]^=e,t[5]^=r,t[14]^=e,t[15]^=r,t[24]^=e,t[25]^=r,t[34]^=e,t[35]^=r,t[44]^=e,t[45]^=r,e=l^(O<<1|M>>>31),r=u^(M<<1|O>>>31),t[6]^=e,t[7]^=r,t[16]^=e,t[17]^=r,t[26]^=e,t[27]^=r,t[36]^=e,t[37]^=r,t[46]^=e,t[47]^=r,e=c^(n<<1|i>>>31),r=E^(i<<1|n>>>31),t[8]^=e,t[9]^=r,t[18]^=e,t[19]^=r,t[28]^=e,t[29]^=r,t[38]^=e,t[39]^=r,t[48]^=e,t[49]^=r,R=t[0],I=t[1],ft=t[11]<<4|t[10]>>>28,ut=t[10]<<4|t[11]>>>28,G=t[20]<<3|t[21]>>>29,V=t[21]<<3|t[20]>>>29,wt=t[31]<<9|t[30]>>>23,Bt=t[30]<<9|t[31]>>>23,ot=t[40]<<18|t[41]>>>14,nt=t[41]<<18|t[40]>>>14,Z=t[2]<<1|t[3]>>>31,$=t[3]<<1|t[2]>>>31,N=t[13]<<12|t[12]>>>20,D=t[12]<<12|t[13]>>>20,ct=t[22]<<10|t[23]>>>22,ht=t[23]<<10|t[22]>>>22,Y=t[33]<<13|t[32]>>>19,m=t[32]<<13|t[33]>>>19,Ft=t[42]<<2|t[43]>>>30,St=t[43]<<2|t[42]>>>30,vt=t[5]<<30|t[4]>>>2,dt=t[4]<<30|t[5]>>>2,q=t[14]<<6|t[15]>>>26,Q=t[15]<<6|t[14]>>>26,H=t[25]<<11|t[24]>>>21,g=t[24]<<11|t[25]>>>21,lt=t[34]<<15|t[35]>>>17,pt=t[35]<<15|t[34]>>>17,L=t[45]<<29|t[44]>>>3,X=t[44]<<29|t[45]>>>3,j=t[6]<<28|t[7]>>>4,P=t[7]<<28|t[6]>>>4,xt=t[17]<<23|t[16]>>>9,At=t[16]<<23|t[17]>>>9,s=t[26]<<25|t[27]>>>7,tt=t[27]<<25|t[26]>>>7,z=t[36]<<21|t[37]>>>11,K=t[37]<<21|t[36]>>>11,bt=t[47]<<24|t[46]>>>8,yt=t[46]<<24|t[47]>>>8,at=t[8]<<27|t[9]>>>5,it=t[9]<<27|t[8]>>>5,T=t[18]<<20|t[19]>>>12,W=t[19]<<20|t[18]>>>12,kt=t[29]<<7|t[28]>>>25,_t=t[28]<<7|t[29]>>>25,et=t[38]<<8|t[39]>>>24,rt=t[39]<<8|t[38]>>>24,J=t[48]<<14|t[49]>>>18,U=t[49]<<14|t[48]>>>18,t[0]=R^~N&H,t[1]=I^~D&g,t[10]=j^~T&G,t[11]=P^~W&V,t[20]=Z^~q&s,t[21]=$^~Q&tt,t[30]=at^~ft&ct,t[31]=it^~ut&ht,t[40]=vt^~xt&kt,t[41]=dt^~At&_t,t[2]=N^~H&z,t[3]=D^~g&K,t[12]=T^~G&Y,t[13]=W^~V&m,t[22]=q^~s&et,t[23]=Q^~tt&rt,t[32]=ft^~ct&lt,t[33]=ut^~ht&pt,t[42]=xt^~kt&wt,t[43]=At^~_t&Bt,t[4]=H^~z&J,t[5]=g^~K&U,t[14]=G^~Y&L,t[15]=V^~m&X,t[24]=s^~et&ot,t[25]=tt^~rt&nt,t[34]=ct^~lt&bt,t[35]=ht^~pt&yt,t[44]=kt^~wt&Ft,t[45]=_t^~Bt&St,t[6]=z^~J&R,t[7]=K^~U&I,t[16]=Y^~L&j,t[17]=m^~X&P,t[26]=et^~ot&Z,t[27]=rt^~nt&$,t[36]=lt^~bt&at,t[37]=pt^~yt&it,t[46]=wt^~Ft&vt,t[47]=Bt^~St&dt,t[8]=J^~R&N,t[9]=U^~I&D,t[18]=L^~j&T,t[19]=X^~P&W,t[28]=ot^~Z&q,t[29]=nt^~$&Q,t[38]=bt^~at&ft,t[39]=yt^~it&ut,t[48]=Ft^~vt&xt,t[49]=St^~dt&At,t[0]^=Nt[o],t[1]^=Nt[o+1]};if(Yt)F.exports=v;else for(d=0;d<_.length;++d)y[_[d]]=v[_[d]]})()})(st);const ee=Rt;export{Rt as a,ee as s};
