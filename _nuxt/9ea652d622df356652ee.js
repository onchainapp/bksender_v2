(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1166:function(e,r,n){"use strict";var t;function o(e,r,n){if(!n||typeof n.value!==t.typeOfFunction)throw new TypeError("Only methods can be decorated with @bind. <"+r+"> is not a method!");return{configurable:t.boolTrue,get:function(){var e=n.value.bind(this);return Object.defineProperty(this,r,{value:e,configurable:t.boolTrue,writable:t.boolTrue}),e}}}Object.defineProperty(r,"__esModule",{value:!0}),function(e){e.typeOfFunction="function",e.boolTrue=!0}(t||(t={})),r.bind=o,r.default=o},481:function(e,r,n){"use strict";var t=n(20).Buffer;e.exports=function(e){if(e.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var i=0;i<e.length;i++){var o=e.charAt(i),f=o.charCodeAt(0);if(255!==r[f])throw new TypeError(o+" is ambiguous");r[f]=i}var c=e.length,l=e.charAt(0),h=Math.log(c)/Math.log(256),w=Math.log(256)/Math.log(c);function d(source){if("string"!=typeof source)throw new TypeError("Expected String");if(0===source.length)return t.alloc(0);for(var e=0,n=0,o=0;source[e]===l;)n++,e++;for(var f=(source.length-e)*h+1>>>0,w=new Uint8Array(f);source[e];){var d=r[source.charCodeAt(e)];if(255===d)return;for(var i=0,v=f-1;(0!==d||i<o)&&-1!==v;v--,i++)d+=c*w[v]>>>0,w[v]=d%256>>>0,d=d/256>>>0;if(0!==d)throw new Error("Non-zero carry");o=i,e++}for(var m=f-o;m!==f&&0===w[m];)m++;var y=t.allocUnsafe(n+(f-m));y.fill(0,0,n);for(var A=n;m!==f;)y[A++]=w[m++];return y}return{encode:function(source){if((Array.isArray(source)||source instanceof Uint8Array)&&(source=t.from(source)),!t.isBuffer(source))throw new TypeError("Expected Buffer");if(0===source.length)return"";for(var r=0,n=0,o=0,f=source.length;o!==f&&0===source[o];)o++,r++;for(var h=(f-o)*w+1>>>0,d=new Uint8Array(h);o!==f;){for(var v=source[o],i=0,m=h-1;(0!==v||i<n)&&-1!==m;m--,i++)v+=256*d[m]>>>0,d[m]=v%c>>>0,v=v/c>>>0;if(0!==v)throw new Error("Non-zero carry");n=i,o++}for(var y=h-n;y!==h&&0===d[y];)y++;for(var A=l.repeat(r);y<h;++y)A+=e.charAt(d[y]);return A},decodeUnsafe:d,decode:function(e){var r=d(e);if(r)return r;throw new Error("Non-base"+c+" character")}}}},729:function(e,r,n){"use strict";r.byteLength=function(e){var r=l(e),n=r[0],t=r[1];return 3*(n+t)/4-t},r.toByteArray=function(e){var r,i,n=l(e),t=n[0],c=n[1],h=new f(function(e,r,n){return 3*(r+n)/4-n}(0,t,c)),w=0,d=c>0?t-4:t;for(i=0;i<d;i+=4)r=o[e.charCodeAt(i)]<<18|o[e.charCodeAt(i+1)]<<12|o[e.charCodeAt(i+2)]<<6|o[e.charCodeAt(i+3)],h[w++]=r>>16&255,h[w++]=r>>8&255,h[w++]=255&r;2===c&&(r=o[e.charCodeAt(i)]<<2|o[e.charCodeAt(i+1)]>>4,h[w++]=255&r);1===c&&(r=o[e.charCodeAt(i)]<<10|o[e.charCodeAt(i+1)]<<4|o[e.charCodeAt(i+2)]>>2,h[w++]=r>>8&255,h[w++]=255&r);return h},r.fromByteArray=function(e){for(var r,n=e.length,o=n%3,f=[],i=0,c=n-o;i<c;i+=16383)f.push(h(e,i,i+16383>c?c:i+16383));1===o?(r=e[n-1],f.push(t[r>>2]+t[r<<4&63]+"==")):2===o&&(r=(e[n-2]<<8)+e[n-1],f.push(t[r>>10]+t[r>>4&63]+t[r<<2&63]+"="));return f.join("")};for(var t=[],o=[],f="undefined"!=typeof Uint8Array?Uint8Array:Array,code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,c=code.length;i<c;++i)t[i]=code[i],o[code.charCodeAt(i)]=i;function l(e){var r=e.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=r),[n,n===r?0:4-n%4]}function h(e,r,n){for(var o,f,output=[],i=r;i<n;i+=3)o=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(255&e[i+2]),output.push(t[(f=o)>>18&63]+t[f>>12&63]+t[f>>6&63]+t[63&f]);return output.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},967:function(e,r,n){var t;!function(o){"use strict";var f,c=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,l=Math.ceil,h=Math.floor,w="[BigNumber Error] ",d=w+"Number primitive has more than 15 significant digits: ",v=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13];function m(e){var i=0|e;return e>0||e===i?i:i-1}function y(a){for(var s,e,i=1,r=a.length,n=a[0]+"";i<r;){for(e=14-(s=a[i++]+"").length;e--;s="0"+s);n+=s}for(r=n.length;48===n.charCodeAt(--r););return n.slice(0,r+1||1)}function A(e,r){var a,b,n=e.c,t=r.c,i=e.s,o=r.s,f=e.e,c=r.e;if(!i||!o)return null;if(a=n&&!n[0],b=t&&!t[0],a||b)return a?b?0:-o:i;if(i!=o)return i;if(a=i<0,b=f==c,!n||!t)return b?0:!n^a?1:-1;if(!b)return f>c^a?1:-1;for(o=(f=n.length)<(c=t.length)?f:c,i=0;i<o;i++)if(n[i]!=t[i])return n[i]>t[i]^a?1:-1;return f==c?0:f>c^a?1:-1}function O(e,r,n,t){if(e<r||e>n||e!==h(e))throw Error(w+(t||"Argument")+("number"==typeof e?e<r||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function E(e){var r=e.c.length-1;return m(e.e/14)==r&&e.c[r]%2!=0}function N(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function C(e,r,n){var t,o;if(r<0){for(o=n+".";++r;o+=n);e=o+e}else if(++r>(t=e.length)){for(o=n,r-=t;--r;o+=n);e+=o}else r<t&&(e=e.slice(0,r)+"."+e.slice(r));return e}(f=function e(r){var div,n,t,o,f,U,T,B,S,_=$.prototype={constructor:$,toString:null,valueOf:null},x=new $(1),P=20,L=4,R=-7,D=21,M=-1e7,I=1e7,k=!1,F=1,G=0,j={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},z="0123456789abcdefghijklmnopqrstuvwxyz";function $(e,b){var r,o,f,l,i,w,v,m,y=this;if(!(y instanceof $))return new $(e,b);if(null==b){if(e&&!0===e._isBigNumber)return y.s=e.s,void(!e.c||e.e>I?y.c=y.e=null:e.e<M?y.c=[y.e=0]:(y.e=e.e,y.c=e.c.slice()));if((w="number"==typeof e)&&0*e==0){if(y.s=1/e<0?(e=-e,-1):1,e===~~e){for(l=0,i=e;i>=10;i/=10,l++);return void(l>I?y.c=y.e=null:(y.e=l,y.c=[e]))}m=String(e)}else{if(!c.test(m=String(e)))return t(y,m,w);y.s=45==m.charCodeAt(0)?(m=m.slice(1),-1):1}(l=m.indexOf("."))>-1&&(m=m.replace(".","")),(i=m.search(/e/i))>0?(l<0&&(l=i),l+=+m.slice(i+1),m=m.substring(0,i)):l<0&&(l=m.length)}else{if(O(b,2,z.length,"Base"),10==b)return J(y=new $(e),P+y.e+1,L);if(m=String(e),w="number"==typeof e){if(0*e!=0)return t(y,m,w,b);if(y.s=1/e<0?(m=m.slice(1),-1):1,$.DEBUG&&m.replace(/^0\.0*|\./,"").length>15)throw Error(d+e)}else y.s=45===m.charCodeAt(0)?(m=m.slice(1),-1):1;for(r=z.slice(0,b),l=i=0,v=m.length;i<v;i++)if(r.indexOf(o=m.charAt(i))<0){if("."==o){if(i>l){l=v;continue}}else if(!f&&(m==m.toUpperCase()&&(m=m.toLowerCase())||m==m.toLowerCase()&&(m=m.toUpperCase()))){f=!0,i=-1,l=0;continue}return t(y,String(e),w,b)}w=!1,(l=(m=n(m,b,10,y.s)).indexOf("."))>-1?m=m.replace(".",""):l=m.length}for(i=0;48===m.charCodeAt(i);i++);for(v=m.length;48===m.charCodeAt(--v););if(m=m.slice(i,++v)){if(v-=i,w&&$.DEBUG&&v>15&&(e>9007199254740991||e!==h(e)))throw Error(d+y.s*e);if((l=l-i-1)>I)y.c=y.e=null;else if(l<M)y.c=[y.e=0];else{if(y.e=l,y.c=[],i=(l+1)%14,l<0&&(i+=14),i<v){for(i&&y.c.push(+m.slice(0,i)),v-=14;i<v;)y.c.push(+m.slice(i,i+=14));i=14-(m=m.slice(i)).length}else i-=v;for(;i--;m+="0");y.c.push(+m)}}else y.c=[y.e=0]}function H(e,i,r,n){var t,o,f,c,l;if(null==r?r=L:O(r,0,8),!e.c)return e.toString();if(t=e.c[0],f=e.e,null==i)l=y(e.c),l=1==n||2==n&&(f<=R||f>=D)?N(l,f):C(l,f,"0");else if(o=(e=J(new $(e),i,r)).e,c=(l=y(e.c)).length,1==n||2==n&&(i<=o||o<=R)){for(;c<i;l+="0",c++);l=N(l,o)}else if(i-=f,l=C(l,o,"0"),o+1>c){if(--i>0)for(l+=".";i--;l+="0");}else if((i+=o-c)>0)for(o+1==c&&(l+=".");i--;l+="0");return e.s<0&&t?"-"+l:l}function V(e,r){for(var n,i=1,t=new $(e[0]);i<e.length;i++){if(!(n=new $(e[i])).s){t=n;break}r.call(t,n)&&(t=n)}return t}function W(e,r,n){for(var i=1,t=r.length;!r[--t];r.pop());for(t=r[0];t>=10;t/=10,i++);return(n=i+14*n-1)>I?e.c=e.e=null:n<M?e.c=[e.e=0]:(e.e=n,e.c=r),e}function J(e,r,n,t){var o,i,f,c,w,d,m,y=e.c,A=v;if(y){e:{for(o=1,c=y[0];c>=10;c/=10,o++);if((i=r-o)<0)i+=14,f=r,m=(w=y[d=0])/A[o-f-1]%10|0;else if((d=l((i+1)/14))>=y.length){if(!t)break e;for(;y.length<=d;y.push(0));w=m=0,o=1,f=(i%=14)-14+1}else{for(w=c=y[d],o=1;c>=10;c/=10,o++);m=(f=(i%=14)-14+o)<0?0:w/A[o-f-1]%10|0}if(t=t||r<0||null!=y[d+1]||(f<0?w:w%A[o-f-1]),t=n<4?(m||t)&&(0==n||n==(e.s<0?3:2)):m>5||5==m&&(4==n||t||6==n&&(i>0?f>0?w/A[o-f]:0:y[d-1])%10&1||n==(e.s<0?8:7)),r<1||!y[0])return y.length=0,t?(r-=e.e+1,y[0]=A[(14-r%14)%14],e.e=-r||0):y[0]=e.e=0,e;if(0==i?(y.length=d,c=1,d--):(y.length=d+1,c=A[14-i],y[d]=f>0?h(w/A[o-f]%A[f])*c:0),t)for(;;){if(0==d){for(i=1,f=y[0];f>=10;f/=10,i++);for(f=y[0]+=c,c=1;f>=10;f/=10,c++);i!=c&&(e.e++,1e14==y[0]&&(y[0]=1));break}if(y[d]+=c,1e14!=y[d])break;y[d--]=0,c=1}for(i=y.length;0===y[--i];y.pop());}e.e>I?e.c=e.e=null:e.e<M&&(e.c=[e.e=0])}return e}function X(e){var r,n=e.e;return null===n?e.toString():(r=y(e.c),r=n<=R||n>=D?N(r,n):C(r,n,"0"),e.s<0?"-"+r:r)}return $.clone=e,$.ROUND_UP=0,$.ROUND_DOWN=1,$.ROUND_CEIL=2,$.ROUND_FLOOR=3,$.ROUND_HALF_UP=4,$.ROUND_HALF_DOWN=5,$.ROUND_HALF_EVEN=6,$.ROUND_HALF_CEIL=7,$.ROUND_HALF_FLOOR=8,$.EUCLID=9,$.config=$.set=function(e){var p,r;if(null!=e){if("object"!=typeof e)throw Error(w+"Object expected: "+e);if(e.hasOwnProperty(p="DECIMAL_PLACES")&&(O(r=e[p],0,1e9,p),P=r),e.hasOwnProperty(p="ROUNDING_MODE")&&(O(r=e[p],0,8,p),L=r),e.hasOwnProperty(p="EXPONENTIAL_AT")&&((r=e[p])&&r.pop?(O(r[0],-1e9,0,p),O(r[1],0,1e9,p),R=r[0],D=r[1]):(O(r,-1e9,1e9,p),R=-(D=r<0?-r:r))),e.hasOwnProperty(p="RANGE"))if((r=e[p])&&r.pop)O(r[0],-1e9,-1,p),O(r[1],1,1e9,p),M=r[0],I=r[1];else{if(O(r,-1e9,1e9,p),!r)throw Error(w+p+" cannot be zero: "+r);M=-(I=r<0?-r:r)}if(e.hasOwnProperty(p="CRYPTO")){if((r=e[p])!==!!r)throw Error(w+p+" not true or false: "+r);if(r){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw k=!r,Error(w+"crypto unavailable");k=r}else k=r}if(e.hasOwnProperty(p="MODULO_MODE")&&(O(r=e[p],0,9,p),F=r),e.hasOwnProperty(p="POW_PRECISION")&&(O(r=e[p],0,1e9,p),G=r),e.hasOwnProperty(p="FORMAT")){if("object"!=typeof(r=e[p]))throw Error(w+p+" not an object: "+r);j=r}if(e.hasOwnProperty(p="ALPHABET")){if("string"!=typeof(r=e[p])||/^.$|[+-.\s]|(.).*\1/.test(r))throw Error(w+p+" invalid: "+r);z=r}}return{DECIMAL_PLACES:P,ROUNDING_MODE:L,EXPONENTIAL_AT:[R,D],RANGE:[M,I],CRYPTO:k,MODULO_MODE:F,POW_PRECISION:G,FORMAT:j,ALPHABET:z}},$.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!$.DEBUG)return!0;var i,r,n=e.c,t=e.e,s=e.s;e:if("[object Array]"=={}.toString.call(n)){if((1===s||-1===s)&&t>=-1e9&&t<=1e9&&t===h(t)){if(0===n[0]){if(0===t&&1===n.length)return!0;break e}if((i=(t+1)%14)<1&&(i+=14),String(n[0]).length==i){for(i=0;i<n.length;i++)if((r=n[i])<0||r>=1e14||r!==h(r))break e;if(0!==r)return!0}}}else if(null===n&&null===t&&(null===s||1===s||-1===s))return!0;throw Error(w+"Invalid BigNumber: "+e)},$.maximum=$.max=function(){return V(arguments,_.lt)},$.minimum=$.min=function(){return V(arguments,_.gt)},$.random=(o=9007199254740992*Math.random()&2097151?function(){return h(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var a,b,r,n,t,i=0,f=[],c=new $(x);if(null==e?e=P:O(e,0,1e9),n=l(e/14),k)if(crypto.getRandomValues){for(a=crypto.getRandomValues(new Uint32Array(n*=2));i<n;)(t=131072*a[i]+(a[i+1]>>>11))>=9e15?(b=crypto.getRandomValues(new Uint32Array(2)),a[i]=b[0],a[i+1]=b[1]):(f.push(t%1e14),i+=2);i=n/2}else{if(!crypto.randomBytes)throw k=!1,Error(w+"crypto unavailable");for(a=crypto.randomBytes(n*=7);i<n;)(t=281474976710656*(31&a[i])+1099511627776*a[i+1]+4294967296*a[i+2]+16777216*a[i+3]+(a[i+4]<<16)+(a[i+5]<<8)+a[i+6])>=9e15?crypto.randomBytes(7).copy(a,i):(f.push(t%1e14),i+=7);i=n/7}if(!k)for(;i<n;)(t=o())<9e15&&(f[i++]=t%1e14);for(e%=14,(n=f[--i])&&e&&(t=v[14-e],f[i]=h(n/t)*t);0===f[i];f.pop(),i--);if(i<0)f=[r=0];else{for(r=-1;0===f[0];f.splice(0,1),r-=14);for(i=1,t=f[0];t>=10;t/=10,i++);i<14&&(r-=14-i)}return c.e=r,c.c=f,c}),$.sum=function(){for(var i=1,e=arguments,r=new $(e[0]);i<e.length;)r=r.plus(e[i++]);return r},n=function(){function e(e,r,n,t){for(var o,f,c=[0],i=0,l=e.length;i<l;){for(f=c.length;f--;c[f]*=r);for(c[0]+=t.indexOf(e.charAt(i++)),o=0;o<c.length;o++)c[o]>n-1&&(null==c[o+1]&&(c[o+1]=0),c[o+1]+=c[o]/n|0,c[o]%=n)}return c.reverse()}return function(r,n,t,o,f){var c,l,h,w,d,v,m,A,i=r.indexOf("."),O=P,E=L;for(i>=0&&(w=G,G=0,r=r.replace(".",""),v=(A=new $(n)).pow(r.length-i),G=w,A.c=e(C(y(v.c),v.e,"0"),10,t,"0123456789"),A.e=A.c.length),h=w=(m=e(r,n,t,f?(c=z,"0123456789"):(c="0123456789",z))).length;0==m[--w];m.pop());if(!m[0])return c.charAt(0);if(i<0?--h:(v.c=m,v.e=h,v.s=o,m=(v=div(v,A,O,E,t)).c,d=v.r,h=v.e),i=m[l=h+O+1],w=t/2,d=d||l<0||null!=m[l+1],d=E<4?(null!=i||d)&&(0==E||E==(v.s<0?3:2)):i>w||i==w&&(4==E||d||6==E&&1&m[l-1]||E==(v.s<0?8:7)),l<1||!m[0])r=d?C(c.charAt(1),-O,c.charAt(0)):c.charAt(0);else{if(m.length=l,d)for(--t;++m[--l]>t;)m[l]=0,l||(++h,m=[1].concat(m));for(w=m.length;!m[--w];);for(i=0,r="";i<=w;r+=c.charAt(m[i++]));r=C(r,h,c.charAt(0))}return r}}(),div=function(){function e(e,r,base){var n,t,o,f,c=0,i=e.length,l=r%1e7,h=r/1e7|0;for(e=e.slice();i--;)c=((t=l*(o=e[i]%1e7)+(n=h*o+(f=e[i]/1e7|0)*l)%1e7*1e7+c)/base|0)+(n/1e7|0)+h*f,e[i]=t%base;return c&&(e=[c].concat(e)),e}function r(a,b,e,r){var i,n;if(e!=r)n=e>r?1:-1;else for(i=n=0;i<e;i++)if(a[i]!=b[i]){n=a[i]>b[i]?1:-1;break}return n}function n(a,b,e,base){for(var i=0;e--;)a[e]-=i,i=a[e]<b[e]?1:0,a[e]=i*base+a[e]-b[e];for(;!a[0]&&a.length>1;a.splice(0,1));}return function(t,o,f,c,base){var l,w,i,d,v,y,A,q,O,E,N,C,U,T,B,S,_,s=t.s==o.s?1:-1,x=t.c,P=o.c;if(!(x&&x[0]&&P&&P[0]))return new $(t.s&&o.s&&(x?!P||x[0]!=P[0]:P)?x&&0==x[0]||!P?0*s:s/0:NaN);for(O=(q=new $(s)).c=[],s=f+(w=t.e-o.e)+1,base||(base=1e14,w=m(t.e/14)-m(o.e/14),s=s/14|0),i=0;P[i]==(x[i]||0);i++);if(P[i]>(x[i]||0)&&w--,s<0)O.push(1),d=!0;else{for(T=x.length,S=P.length,i=0,s+=2,(v=h(base/(P[0]+1)))>1&&(P=e(P,v,base),x=e(x,v,base),S=P.length,T=x.length),U=S,N=(E=x.slice(0,S)).length;N<S;E[N++]=0);_=P.slice(),_=[0].concat(_),B=P[0],P[1]>=base/2&&B++;do{if(v=0,(l=r(P,E,S,N))<0){if(C=E[0],S!=N&&(C=C*base+(E[1]||0)),(v=h(C/B))>1)for(v>=base&&(v=base-1),A=(y=e(P,v,base)).length,N=E.length;1==r(y,E,A,N);)v--,n(y,S<A?_:P,A,base),A=y.length,l=1;else 0==v&&(l=v=1),A=(y=P.slice()).length;if(A<N&&(y=[0].concat(y)),n(E,y,N,base),N=E.length,-1==l)for(;r(P,E,S,N)<1;)v++,n(E,S<N?_:P,N,base),N=E.length}else 0===l&&(v++,E=[0]);O[i++]=v,E[0]?E[N++]=x[U]||0:(E=[x[U]],N=1)}while((U++<T||null!=E[0])&&s--);d=null!=E[0],O[0]||O.splice(0,1)}if(1e14==base){for(i=1,s=O[0];s>=10;s/=10,i++);J(q,f+(q.e=i+14*w-1)+1,c,d)}else q.e=w,q.r=+d;return q}}(),f=/^(-?)0([xbo])(?=\w[\w.]*$)/i,U=/^([^.]+)\.$/,T=/^\.([^.]+)$/,B=/^-?(Infinity|NaN)$/,S=/^\s*\+(?=[\w.])|^\s+|\s+$/g,t=function(e,r,n,b){var base,s=n?r:r.replace(S,"");if(B.test(s))e.s=isNaN(s)?null:s<0?-1:1;else{if(!n&&(s=s.replace(f,(function(e,r,n){return base="x"==(n=n.toLowerCase())?16:"b"==n?2:8,b&&b!=base?e:r})),b&&(base=b,s=s.replace(U,"$1").replace(T,"0.$1")),r!=s))return new $(s,base);if($.DEBUG)throw Error(w+"Not a"+(b?" base "+b:"")+" number: "+r);e.s=null}e.c=e.e=null},_.absoluteValue=_.abs=function(){var e=new $(this);return e.s<0&&(e.s=1),e},_.comparedTo=function(e,b){return A(this,new $(e,b))},_.decimalPlaces=_.dp=function(e,r){var n,t,o,f=this;if(null!=e)return O(e,0,1e9),null==r?r=L:O(r,0,8),J(new $(f),e+f.e+1,r);if(!(n=f.c))return null;if(t=14*((o=n.length-1)-m(this.e/14)),o=n[o])for(;o%10==0;o/=10,t--);return t<0&&(t=0),t},_.dividedBy=_.div=function(e,b){return div(this,new $(e,b),P,L)},_.dividedToIntegerBy=_.idiv=function(e,b){return div(this,new $(e,b),0,1)},_.exponentiatedBy=_.pow=function(e,r){var n,t,i,o,f,c,d,v,m=this;if((e=new $(e)).c&&!e.isInteger())throw Error(w+"Exponent not an integer: "+X(e));if(null!=r&&(r=new $(r)),f=e.e>14,!m.c||!m.c[0]||1==m.c[0]&&!m.e&&1==m.c.length||!e.c||!e.c[0])return v=new $(Math.pow(+X(m),f?2-E(e):+X(e))),r?v.mod(r):v;if(c=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new $(NaN);(t=!c&&m.isInteger()&&r.isInteger())&&(m=m.mod(r))}else{if(e.e>9&&(m.e>0||m.e<-1||(0==m.e?m.c[0]>1||f&&m.c[1]>=24e7:m.c[0]<8e13||f&&m.c[0]<=9999975e7)))return o=m.s<0&&E(e)?-0:0,m.e>-1&&(o=1/o),new $(c?1/o:o);G&&(o=l(G/14+2))}for(f?(n=new $(.5),c&&(e.s=1),d=E(e)):d=(i=Math.abs(+X(e)))%2,v=new $(x);;){if(d){if(!(v=v.times(m)).c)break;o?v.c.length>o&&(v.c.length=o):t&&(v=v.mod(r))}if(i){if(0===(i=h(i/2)))break;d=i%2}else if(J(e=e.times(n),e.e+1,1),e.e>14)d=E(e);else{if(0===(i=+X(e)))break;d=i%2}m=m.times(m),o?m.c&&m.c.length>o&&(m.c.length=o):t&&(m=m.mod(r))}return t?v:(c&&(v=x.div(v)),r?v.mod(r):o?J(v,G,L,void 0):v)},_.integerValue=function(e){var r=new $(this);return null==e?e=L:O(e,0,8),J(r,r.e+1,e)},_.isEqualTo=_.eq=function(e,b){return 0===A(this,new $(e,b))},_.isFinite=function(){return!!this.c},_.isGreaterThan=_.gt=function(e,b){return A(this,new $(e,b))>0},_.isGreaterThanOrEqualTo=_.gte=function(e,b){return 1===(b=A(this,new $(e,b)))||0===b},_.isInteger=function(){return!!this.c&&m(this.e/14)>this.c.length-2},_.isLessThan=_.lt=function(e,b){return A(this,new $(e,b))<0},_.isLessThanOrEqualTo=_.lte=function(e,b){return-1===(b=A(this,new $(e,b)))||0===b},_.isNaN=function(){return!this.s},_.isNegative=function(){return this.s<0},_.isPositive=function(){return this.s>0},_.isZero=function(){return!!this.c&&0==this.c[0]},_.minus=function(e,b){var i,r,n,t,o=this,a=o.s;if(b=(e=new $(e,b)).s,!a||!b)return new $(NaN);if(a!=b)return e.s=-b,o.plus(e);var f=o.e/14,c=e.e/14,l=o.c,h=e.c;if(!f||!c){if(!l||!h)return l?(e.s=-b,e):new $(h?o:NaN);if(!l[0]||!h[0])return h[0]?(e.s=-b,e):new $(l[0]?o:3==L?-0:0)}if(f=m(f),c=m(c),l=l.slice(),a=f-c){for((t=a<0)?(a=-a,n=l):(c=f,n=h),n.reverse(),b=a;b--;n.push(0));n.reverse()}else for(r=(t=(a=l.length)<(b=h.length))?a:b,a=b=0;b<r;b++)if(l[b]!=h[b]){t=l[b]<h[b];break}if(t&&(n=l,l=h,h=n,e.s=-e.s),(b=(r=h.length)-(i=l.length))>0)for(;b--;l[i++]=0);for(b=1e14-1;r>a;){if(l[--r]<h[r]){for(i=r;i&&!l[--i];l[i]=b);--l[i],l[r]+=1e14}l[r]-=h[r]}for(;0==l[0];l.splice(0,1),--c);return l[0]?W(e,l,c):(e.s=3==L?-1:1,e.c=[e.e=0],e)},_.modulo=_.mod=function(e,b){var q,s,r=this;return e=new $(e,b),!r.c||!e.s||e.c&&!e.c[0]?new $(NaN):!e.c||r.c&&!r.c[0]?new $(r):(9==F?(s=e.s,e.s=1,q=div(r,e,0,3),e.s=s,q.s*=s):q=div(r,e,0,F),(e=r.minus(q.times(e))).c[0]||1!=F||(e.s=r.s),e)},_.multipliedBy=_.times=function(e,b){var r,n,i,t,o,f,c,l,h,w,d,v,y,A=this,O=A.c,E=(e=new $(e,b)).c;if(!(O&&E&&O[0]&&E[0]))return!A.s||!e.s||O&&!O[0]&&!E||E&&!E[0]&&!O?e.c=e.e=e.s=null:(e.s*=A.s,O&&E?(e.c=[0],e.e=0):e.c=e.e=null),e;for(n=m(A.e/14)+m(e.e/14),e.s*=A.s,(c=O.length)<(w=E.length)&&(y=O,O=E,E=y,i=c,c=w,w=i),i=c+w,y=[];i--;y.push(0));for(1e14,1e7,i=w;--i>=0;){for(r=0,d=E[i]%1e7,v=E[i]/1e7|0,t=i+(o=c);t>i;)r=((l=d*(l=O[--o]%1e7)+(f=v*l+(h=O[o]/1e7|0)*d)%1e7*1e7+y[t]+r)/1e14|0)+(f/1e7|0)+v*h,y[t--]=l%1e14;y[t]=r}return r?++n:y.splice(0,1),W(e,y,n)},_.negated=function(){var e=new $(this);return e.s=-e.s||null,e},_.plus=function(e,b){var r,n=this,a=n.s;if(b=(e=new $(e,b)).s,!a||!b)return new $(NaN);if(a!=b)return e.s=-b,n.minus(e);var t=n.e/14,o=e.e/14,f=n.c,c=e.c;if(!t||!o){if(!f||!c)return new $(a/0);if(!f[0]||!c[0])return c[0]?e:new $(f[0]?n:0*a)}if(t=m(t),o=m(o),f=f.slice(),a=t-o){for(a>0?(o=t,r=c):(a=-a,r=f),r.reverse();a--;r.push(0));r.reverse()}for((a=f.length)-(b=c.length)<0&&(r=c,c=f,f=r,b=a),a=0;b;)a=(f[--b]=f[b]+c[b]+a)/1e14|0,f[b]=1e14===f[b]?0:f[b]%1e14;return a&&(f=[a].concat(f),++o),W(e,f,o)},_.precision=_.sd=function(e,r){var n,t,o,f=this;if(null!=e&&e!==!!e)return O(e,1,1e9),null==r?r=L:O(r,0,8),J(new $(f),e,r);if(!(n=f.c))return null;if(t=14*(o=n.length-1)+1,o=n[o]){for(;o%10==0;o/=10,t--);for(o=n[0];o>=10;o/=10,t++);}return e&&f.e+1>t&&(t=f.e+1),t},_.shiftedBy=function(e){return O(e,-9007199254740991,9007199254740991),this.times("1e"+e)},_.squareRoot=_.sqrt=function(){var e,r,n,t,o,f=this,c=f.c,s=f.s,l=f.e,h=P+4,w=new $("0.5");if(1!==s||!c||!c[0])return new $(!s||s<0&&(!c||c[0])?NaN:c?f:1/0);if(0==(s=Math.sqrt(+X(f)))||s==1/0?(((r=y(c)).length+l)%2==0&&(r+="0"),s=Math.sqrt(+r),l=m((l+1)/2)-(l<0||l%2),n=new $(r=s==1/0?"1e"+l:(r=s.toExponential()).slice(0,r.indexOf("e")+1)+l)):n=new $(s+""),n.c[0])for((s=(l=n.e)+h)<3&&(s=0);;)if(o=n,n=w.times(o.plus(div(f,o,h,1))),y(o.c).slice(0,s)===(r=y(n.c)).slice(0,s)){if(n.e<l&&--s,"9999"!=(r=r.slice(s-3,s+1))&&(t||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(J(n,n.e+P+2,1),e=!n.times(n).eq(f));break}if(!t&&(J(o,o.e+P+2,0),o.times(o).eq(f))){n=o;break}h+=4,s+=4,t=1}return J(n,n.e+P+1,L,e)},_.toExponential=function(e,r){return null!=e&&(O(e,0,1e9),e++),H(this,e,r,1)},_.toFixed=function(e,r){return null!=e&&(O(e,0,1e9),e=e+this.e+1),H(this,e,r)},_.toFormat=function(e,r,n){var t,o=this;if(null==n)null!=e&&r&&"object"==typeof r?(n=r,r=null):e&&"object"==typeof e?(n=e,e=r=null):n=j;else if("object"!=typeof n)throw Error(w+"Argument not an object: "+n);if(t=o.toFixed(e,r),o.c){var i,f=t.split("."),c=+n.groupSize,l=+n.secondaryGroupSize,h=n.groupSeparator||"",d=f[0],v=f[1],m=o.s<0,y=m?d.slice(1):d,A=y.length;if(l&&(i=c,c=l,l=i,A-=i),c>0&&A>0){for(i=A%c||c,d=y.substr(0,i);i<A;i+=c)d+=h+y.substr(i,c);l>0&&(d+=h+y.slice(i)),m&&(d="-"+d)}t=v?d+(n.decimalSeparator||"")+((l=+n.fractionGroupSize)?v.replace(new RegExp("\\d{"+l+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):v):d}return(n.prefix||"")+t+(n.suffix||"")},_.toFraction=function(e){var r,n,t,o,f,c,l,h,d,q,m,s,A=this,O=A.c;if(null!=e&&(!(l=new $(e)).isInteger()&&(l.c||1!==l.s)||l.lt(x)))throw Error(w+"Argument "+(l.isInteger()?"out of range: ":"not an integer: ")+X(l));if(!O)return new $(A);for(r=new $(x),d=n=new $(x),t=h=new $(x),s=y(O),f=r.e=s.length-A.e-1,r.c[0]=v[(c=f%14)<0?14+c:c],e=!e||l.comparedTo(r)>0?f>0?r:d:l,c=I,I=1/0,l=new $(s),h.c[0]=0;q=div(l,r,0,1),1!=(o=n.plus(q.times(t))).comparedTo(e);)n=t,t=o,d=h.plus(q.times(o=d)),h=o,r=l.minus(q.times(o=r)),l=o;return o=div(e.minus(n),t,0,1),h=h.plus(o.times(d)),n=n.plus(o.times(t)),h.s=d.s=A.s,m=div(d,t,f*=2,L).minus(A).abs().comparedTo(div(h,n,f,L).minus(A).abs())<1?[d,t]:[h,n],I=c,m},_.toNumber=function(){return+X(this)},_.toPrecision=function(e,r){return null!=e&&O(e,1,1e9),H(this,e,r,2)},_.toString=function(b){var e,r=this,s=r.s,t=r.e;return null===t?s?(e="Infinity",s<0&&(e="-"+e)):e="NaN":(null==b?e=t<=R||t>=D?N(y(r.c),t):C(y(r.c),t,"0"):10===b?e=C(y((r=J(new $(r),P+t+1,L)).c),r.e,"0"):(O(b,2,z.length,"Base"),e=n(C(y(r.c),t,"0"),10,b,s,!0)),s<0&&r.c[0]&&(e="-"+e)),e},_.valueOf=_.toJSON=function(){return X(this)},_._isBigNumber=!0,null!=r&&$.set(r),$}()).default=f.BigNumber=f,void 0===(t=function(){return f}.call(r,n,r,e))||(e.exports=t)}()}}]);