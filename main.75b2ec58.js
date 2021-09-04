!function(e){var t={};function i(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=4)}([function(e,t,i){var r=i(2).stringify,s=i(3);e.exports=function(e){return{parse:s(e),stringify:r}},e.exports.parse=s(),e.exports.stringify=r},function(e,t,i){var r;!function(s){"use strict";var n,o=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,a=Math.ceil,l=Math.floor,c="[BigNumber Error] ",h=c+"Number primitive has more than 15 significant digits: ",u=1e14,d=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],p=1e9;function f(e){var t=0|e;return e>0||e===t?t:t-1}function g(e){for(var t,i,r=1,s=e.length,n=e[0]+"";r<s;){for(i=14-(t=e[r++]+"").length;i--;t="0"+t);n+=t}for(s=n.length;48===n.charCodeAt(--s););return n.slice(0,s+1||1)}function m(e,t){var i,r,s=e.c,n=t.c,o=e.s,a=t.s,l=e.e,c=t.e;if(!o||!a)return null;if(i=s&&!s[0],r=n&&!n[0],i||r)return i?r?0:-a:o;if(o!=a)return o;if(i=o<0,r=l==c,!s||!n)return r?0:!s^i?1:-1;if(!r)return l>c^i?1:-1;for(a=(l=s.length)<(c=n.length)?l:c,o=0;o<a;o++)if(s[o]!=n[o])return s[o]>n[o]^i?1:-1;return l==c?0:l>c^i?1:-1}function y(e,t,i,r){if(e<t||e>i||e!==l(e))throw Error(c+(r||"Argument")+("number"==typeof e?e<t||e>i?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function v(e){var t=e.c.length-1;return f(e.e/14)==t&&e.c[t]%2!=0}function w(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function b(e,t,i){var r,s;if(t<0){for(s=i+".";++t;s+=i);e=s+e}else if(++t>(r=e.length)){for(s=i,t-=r;--t;s+=i);e+=s}else t<r&&(e=e.slice(0,t)+"."+e.slice(t));return e}(n=function e(t){var i,r,s,n,S,_,x,N,A,C=j.prototype={constructor:j,toString:null,valueOf:null},P=new j(1),k=20,I=4,E=-7,O=21,U=-1e7,M=1e7,T=!1,B=1,$=0,R={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},V="0123456789abcdefghijklmnopqrstuvwxyz",D=!0;function j(e,t){var i,n,a,c,u,d,p,f,g=this;if(!(g instanceof j))return new j(e,t);if(null==t){if(e&&!0===e._isBigNumber)return g.s=e.s,void(!e.c||e.e>M?g.c=g.e=null:e.e<U?g.c=[g.e=0]:(g.e=e.e,g.c=e.c.slice()));if((d="number"==typeof e)&&0*e==0){if(g.s=1/e<0?(e=-e,-1):1,e===~~e){for(c=0,u=e;u>=10;u/=10,c++);return void(c>M?g.c=g.e=null:(g.e=c,g.c=[e]))}f=String(e)}else{if(!o.test(f=String(e)))return s(g,f,d);g.s=45==f.charCodeAt(0)?(f=f.slice(1),-1):1}(c=f.indexOf("."))>-1&&(f=f.replace(".","")),(u=f.search(/e/i))>0?(c<0&&(c=u),c+=+f.slice(u+1),f=f.substring(0,u)):c<0&&(c=f.length)}else{if(y(t,2,V.length,"Base"),10==t&&D)return q(g=new j(e),k+g.e+1,I);if(f=String(e),d="number"==typeof e){if(0*e!=0)return s(g,f,d,t);if(g.s=1/e<0?(f=f.slice(1),-1):1,j.DEBUG&&f.replace(/^0\.0*|\./,"").length>15)throw Error(h+e)}else g.s=45===f.charCodeAt(0)?(f=f.slice(1),-1):1;for(i=V.slice(0,t),c=u=0,p=f.length;u<p;u++)if(i.indexOf(n=f.charAt(u))<0){if("."==n){if(u>c){c=p;continue}}else if(!a&&(f==f.toUpperCase()&&(f=f.toLowerCase())||f==f.toLowerCase()&&(f=f.toUpperCase()))){a=!0,u=-1,c=0;continue}return s(g,String(e),d,t)}d=!1,(c=(f=r(f,t,10,g.s)).indexOf("."))>-1?f=f.replace(".",""):c=f.length}for(u=0;48===f.charCodeAt(u);u++);for(p=f.length;48===f.charCodeAt(--p););if(f=f.slice(u,++p)){if(p-=u,d&&j.DEBUG&&p>15&&(e>9007199254740991||e!==l(e)))throw Error(h+g.s*e);if((c=c-u-1)>M)g.c=g.e=null;else if(c<U)g.c=[g.e=0];else{if(g.e=c,g.c=[],u=(c+1)%14,c<0&&(u+=14),u<p){for(u&&g.c.push(+f.slice(0,u)),p-=14;u<p;)g.c.push(+f.slice(u,u+=14));u=14-(f=f.slice(u)).length}else u-=p;for(;u--;f+="0");g.c.push(+f)}}else g.c=[g.e=0]}function F(e,t,i,r){var s,n,o,a,l;if(null==i?i=I:y(i,0,8),!e.c)return e.toString();if(s=e.c[0],o=e.e,null==t)l=g(e.c),l=1==r||2==r&&(o<=E||o>=O)?w(l,o):b(l,o,"0");else if(n=(e=q(new j(e),t,i)).e,a=(l=g(e.c)).length,1==r||2==r&&(t<=n||n<=E)){for(;a<t;l+="0",a++);l=w(l,n)}else if(t-=o,l=b(l,n,"0"),n+1>a){if(--t>0)for(l+=".";t--;l+="0");}else if((t+=n-a)>0)for(n+1==a&&(l+=".");t--;l+="0");return e.s<0&&s?"-"+l:l}function L(e,t){for(var i,r=1,s=new j(e[0]);r<e.length;r++){if(!(i=new j(e[r])).s){s=i;break}t.call(s,i)&&(s=i)}return s}function H(e,t,i){for(var r=1,s=t.length;!t[--s];t.pop());for(s=t[0];s>=10;s/=10,r++);return(i=r+14*i-1)>M?e.c=e.e=null:i<U?e.c=[e.e=0]:(e.e=i,e.c=t),e}function q(e,t,i,r){var s,n,o,c,h,p,f,g=e.c,m=d;if(g){e:{for(s=1,c=g[0];c>=10;c/=10,s++);if((n=t-s)<0)n+=14,o=t,f=(h=g[p=0])/m[s-o-1]%10|0;else if((p=a((n+1)/14))>=g.length){if(!r)break e;for(;g.length<=p;g.push(0));h=f=0,s=1,o=(n%=14)-14+1}else{for(h=c=g[p],s=1;c>=10;c/=10,s++);f=(o=(n%=14)-14+s)<0?0:h/m[s-o-1]%10|0}if(r=r||t<0||null!=g[p+1]||(o<0?h:h%m[s-o-1]),r=i<4?(f||r)&&(0==i||i==(e.s<0?3:2)):f>5||5==f&&(4==i||r||6==i&&(n>0?o>0?h/m[s-o]:0:g[p-1])%10&1||i==(e.s<0?8:7)),t<1||!g[0])return g.length=0,r?(t-=e.e+1,g[0]=m[(14-t%14)%14],e.e=-t||0):g[0]=e.e=0,e;if(0==n?(g.length=p,c=1,p--):(g.length=p+1,c=m[14-n],g[p]=o>0?l(h/m[s-o]%m[o])*c:0),r)for(;;){if(0==p){for(n=1,o=g[0];o>=10;o/=10,n++);for(o=g[0]+=c,c=1;o>=10;o/=10,c++);n!=c&&(e.e++,g[0]==u&&(g[0]=1));break}if(g[p]+=c,g[p]!=u)break;g[p--]=0,c=1}for(n=g.length;0===g[--n];g.pop());}e.e>M?e.c=e.e=null:e.e<U&&(e.c=[e.e=0])}return e}function z(e){var t,i=e.e;return null===i?e.toString():(t=g(e.c),t=i<=E||i>=O?w(t,i):b(t,i,"0"),e.s<0?"-"+t:t)}return j.clone=e,j.ROUND_UP=0,j.ROUND_DOWN=1,j.ROUND_CEIL=2,j.ROUND_FLOOR=3,j.ROUND_HALF_UP=4,j.ROUND_HALF_DOWN=5,j.ROUND_HALF_EVEN=6,j.ROUND_HALF_CEIL=7,j.ROUND_HALF_FLOOR=8,j.EUCLID=9,j.config=j.set=function(e){var t,i;if(null!=e){if("object"!=typeof e)throw Error(c+"Object expected: "+e);if(e.hasOwnProperty(t="DECIMAL_PLACES")&&(y(i=e[t],0,p,t),k=i),e.hasOwnProperty(t="ROUNDING_MODE")&&(y(i=e[t],0,8,t),I=i),e.hasOwnProperty(t="EXPONENTIAL_AT")&&((i=e[t])&&i.pop?(y(i[0],-p,0,t),y(i[1],0,p,t),E=i[0],O=i[1]):(y(i,-p,p,t),E=-(O=i<0?-i:i))),e.hasOwnProperty(t="RANGE"))if((i=e[t])&&i.pop)y(i[0],-p,-1,t),y(i[1],1,p,t),U=i[0],M=i[1];else{if(y(i,-p,p,t),!i)throw Error(c+t+" cannot be zero: "+i);U=-(M=i<0?-i:i)}if(e.hasOwnProperty(t="CRYPTO")){if((i=e[t])!==!!i)throw Error(c+t+" not true or false: "+i);if(i){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw T=!i,Error(c+"crypto unavailable");T=i}else T=i}if(e.hasOwnProperty(t="MODULO_MODE")&&(y(i=e[t],0,9,t),B=i),e.hasOwnProperty(t="POW_PRECISION")&&(y(i=e[t],0,p,t),$=i),e.hasOwnProperty(t="FORMAT")){if("object"!=typeof(i=e[t]))throw Error(c+t+" not an object: "+i);R=i}if(e.hasOwnProperty(t="ALPHABET")){if("string"!=typeof(i=e[t])||/^.?$|[+\-.\s]|(.).*\1/.test(i))throw Error(c+t+" invalid: "+i);D="0123456789"==i.slice(0,10),V=i}}return{DECIMAL_PLACES:k,ROUNDING_MODE:I,EXPONENTIAL_AT:[E,O],RANGE:[U,M],CRYPTO:T,MODULO_MODE:B,POW_PRECISION:$,FORMAT:R,ALPHABET:V}},j.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!j.DEBUG)return!0;var t,i,r=e.c,s=e.e,n=e.s;e:if("[object Array]"=={}.toString.call(r)){if((1===n||-1===n)&&s>=-p&&s<=p&&s===l(s)){if(0===r[0]){if(0===s&&1===r.length)return!0;break e}if((t=(s+1)%14)<1&&(t+=14),String(r[0]).length==t){for(t=0;t<r.length;t++)if((i=r[t])<0||i>=u||i!==l(i))break e;if(0!==i)return!0}}}else if(null===r&&null===s&&(null===n||1===n||-1===n))return!0;throw Error(c+"Invalid BigNumber: "+e)},j.maximum=j.max=function(){return L(arguments,C.lt)},j.minimum=j.min=function(){return L(arguments,C.gt)},j.random=(n=9007199254740992*Math.random()&2097151?function(){return l(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var t,i,r,s,o,h=0,u=[],f=new j(P);if(null==e?e=k:y(e,0,p),s=a(e/14),T)if(crypto.getRandomValues){for(t=crypto.getRandomValues(new Uint32Array(s*=2));h<s;)(o=131072*t[h]+(t[h+1]>>>11))>=9e15?(i=crypto.getRandomValues(new Uint32Array(2)),t[h]=i[0],t[h+1]=i[1]):(u.push(o%1e14),h+=2);h=s/2}else{if(!crypto.randomBytes)throw T=!1,Error(c+"crypto unavailable");for(t=crypto.randomBytes(s*=7);h<s;)(o=281474976710656*(31&t[h])+1099511627776*t[h+1]+4294967296*t[h+2]+16777216*t[h+3]+(t[h+4]<<16)+(t[h+5]<<8)+t[h+6])>=9e15?crypto.randomBytes(7).copy(t,h):(u.push(o%1e14),h+=7);h=s/7}if(!T)for(;h<s;)(o=n())<9e15&&(u[h++]=o%1e14);for(e%=14,(s=u[--h])&&e&&(o=d[14-e],u[h]=l(s/o)*o);0===u[h];u.pop(),h--);if(h<0)u=[r=0];else{for(r=-1;0===u[0];u.splice(0,1),r-=14);for(h=1,o=u[0];o>=10;o/=10,h++);h<14&&(r-=14-h)}return f.e=r,f.c=u,f}),j.sum=function(){for(var e=1,t=arguments,i=new j(t[0]);e<t.length;)i=i.plus(t[e++]);return i},r=function(){function e(e,t,i,r){for(var s,n,o=[0],a=0,l=e.length;a<l;){for(n=o.length;n--;o[n]*=t);for(o[0]+=r.indexOf(e.charAt(a++)),s=0;s<o.length;s++)o[s]>i-1&&(null==o[s+1]&&(o[s+1]=0),o[s+1]+=o[s]/i|0,o[s]%=i)}return o.reverse()}return function(t,r,s,n,o){var a,l,c,h,u,d,p,f,m=t.indexOf("."),y=k,v=I;for(m>=0&&(h=$,$=0,t=t.replace(".",""),d=(f=new j(r)).pow(t.length-m),$=h,f.c=e(b(g(d.c),d.e,"0"),10,s,"0123456789"),f.e=f.c.length),c=h=(p=e(t,r,s,o?(a=V,"0123456789"):(a="0123456789",V))).length;0==p[--h];p.pop());if(!p[0])return a.charAt(0);if(m<0?--c:(d.c=p,d.e=c,d.s=n,p=(d=i(d,f,y,v,s)).c,u=d.r,c=d.e),m=p[l=c+y+1],h=s/2,u=u||l<0||null!=p[l+1],u=v<4?(null!=m||u)&&(0==v||v==(d.s<0?3:2)):m>h||m==h&&(4==v||u||6==v&&1&p[l-1]||v==(d.s<0?8:7)),l<1||!p[0])t=u?b(a.charAt(1),-y,a.charAt(0)):a.charAt(0);else{if(p.length=l,u)for(--s;++p[--l]>s;)p[l]=0,l||(++c,p=[1].concat(p));for(h=p.length;!p[--h];);for(m=0,t="";m<=h;t+=a.charAt(p[m++]));t=b(t,c,a.charAt(0))}return t}}(),i=function(){function e(e,t,i){var r,s,n,o,a=0,l=e.length,c=t%1e7,h=t/1e7|0;for(e=e.slice();l--;)a=((s=c*(n=e[l]%1e7)+(r=h*n+(o=e[l]/1e7|0)*c)%1e7*1e7+a)/i|0)+(r/1e7|0)+h*o,e[l]=s%i;return a&&(e=[a].concat(e)),e}function t(e,t,i,r){var s,n;if(i!=r)n=i>r?1:-1;else for(s=n=0;s<i;s++)if(e[s]!=t[s]){n=e[s]>t[s]?1:-1;break}return n}function i(e,t,i,r){for(var s=0;i--;)e[i]-=s,s=e[i]<t[i]?1:0,e[i]=s*r+e[i]-t[i];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(r,s,n,o,a){var c,h,d,p,g,m,y,v,w,b,S,_,x,N,A,C,P,k=r.s==s.s?1:-1,I=r.c,E=s.c;if(!(I&&I[0]&&E&&E[0]))return new j(r.s&&s.s&&(I?!E||I[0]!=E[0]:E)?I&&0==I[0]||!E?0*k:k/0:NaN);for(w=(v=new j(k)).c=[],k=n+(h=r.e-s.e)+1,a||(a=u,h=f(r.e/14)-f(s.e/14),k=k/14|0),d=0;E[d]==(I[d]||0);d++);if(E[d]>(I[d]||0)&&h--,k<0)w.push(1),p=!0;else{for(N=I.length,C=E.length,d=0,k+=2,(g=l(a/(E[0]+1)))>1&&(E=e(E,g,a),I=e(I,g,a),C=E.length,N=I.length),x=C,S=(b=I.slice(0,C)).length;S<C;b[S++]=0);P=E.slice(),P=[0].concat(P),A=E[0],E[1]>=a/2&&A++;do{if(g=0,(c=t(E,b,C,S))<0){if(_=b[0],C!=S&&(_=_*a+(b[1]||0)),(g=l(_/A))>1)for(g>=a&&(g=a-1),y=(m=e(E,g,a)).length,S=b.length;1==t(m,b,y,S);)g--,i(m,C<y?P:E,y,a),y=m.length,c=1;else 0==g&&(c=g=1),y=(m=E.slice()).length;if(y<S&&(m=[0].concat(m)),i(b,m,S,a),S=b.length,-1==c)for(;t(E,b,C,S)<1;)g++,i(b,C<S?P:E,S,a),S=b.length}else 0===c&&(g++,b=[0]);w[d++]=g,b[0]?b[S++]=I[x]||0:(b=[I[x]],S=1)}while((x++<N||null!=b[0])&&k--);p=null!=b[0],w[0]||w.splice(0,1)}if(a==u){for(d=1,k=w[0];k>=10;k/=10,d++);q(v,n+(v.e=d+14*h-1)+1,o,p)}else v.e=h,v.r=+p;return v}}(),S=/^(-?)0([xbo])(?=\w[\w.]*$)/i,_=/^([^.]+)\.$/,x=/^\.([^.]+)$/,N=/^-?(Infinity|NaN)$/,A=/^\s*\+(?=[\w.])|^\s+|\s+$/g,s=function(e,t,i,r){var s,n=i?t:t.replace(A,"");if(N.test(n))e.s=isNaN(n)?null:n<0?-1:1;else{if(!i&&(n=n.replace(S,(function(e,t,i){return s="x"==(i=i.toLowerCase())?16:"b"==i?2:8,r&&r!=s?e:t})),r&&(s=r,n=n.replace(_,"$1").replace(x,"0.$1")),t!=n))return new j(n,s);if(j.DEBUG)throw Error(c+"Not a"+(r?" base "+r:"")+" number: "+t);e.s=null}e.c=e.e=null},C.absoluteValue=C.abs=function(){var e=new j(this);return e.s<0&&(e.s=1),e},C.comparedTo=function(e,t){return m(this,new j(e,t))},C.decimalPlaces=C.dp=function(e,t){var i,r,s,n=this;if(null!=e)return y(e,0,p),null==t?t=I:y(t,0,8),q(new j(n),e+n.e+1,t);if(!(i=n.c))return null;if(r=14*((s=i.length-1)-f(this.e/14)),s=i[s])for(;s%10==0;s/=10,r--);return r<0&&(r=0),r},C.dividedBy=C.div=function(e,t){return i(this,new j(e,t),k,I)},C.dividedToIntegerBy=C.idiv=function(e,t){return i(this,new j(e,t),0,1)},C.exponentiatedBy=C.pow=function(e,t){var i,r,s,n,o,h,u,d,p=this;if((e=new j(e)).c&&!e.isInteger())throw Error(c+"Exponent not an integer: "+z(e));if(null!=t&&(t=new j(t)),o=e.e>14,!p.c||!p.c[0]||1==p.c[0]&&!p.e&&1==p.c.length||!e.c||!e.c[0])return d=new j(Math.pow(+z(p),o?2-v(e):+z(e))),t?d.mod(t):d;if(h=e.s<0,t){if(t.c?!t.c[0]:!t.s)return new j(NaN);(r=!h&&p.isInteger()&&t.isInteger())&&(p=p.mod(t))}else{if(e.e>9&&(p.e>0||p.e<-1||(0==p.e?p.c[0]>1||o&&p.c[1]>=24e7:p.c[0]<8e13||o&&p.c[0]<=9999975e7)))return n=p.s<0&&v(e)?-0:0,p.e>-1&&(n=1/n),new j(h?1/n:n);$&&(n=a($/14+2))}for(o?(i=new j(.5),h&&(e.s=1),u=v(e)):u=(s=Math.abs(+z(e)))%2,d=new j(P);;){if(u){if(!(d=d.times(p)).c)break;n?d.c.length>n&&(d.c.length=n):r&&(d=d.mod(t))}if(s){if(0===(s=l(s/2)))break;u=s%2}else if(q(e=e.times(i),e.e+1,1),e.e>14)u=v(e);else{if(0===(s=+z(e)))break;u=s%2}p=p.times(p),n?p.c&&p.c.length>n&&(p.c.length=n):r&&(p=p.mod(t))}return r?d:(h&&(d=P.div(d)),t?d.mod(t):n?q(d,$,I,void 0):d)},C.integerValue=function(e){var t=new j(this);return null==e?e=I:y(e,0,8),q(t,t.e+1,e)},C.isEqualTo=C.eq=function(e,t){return 0===m(this,new j(e,t))},C.isFinite=function(){return!!this.c},C.isGreaterThan=C.gt=function(e,t){return m(this,new j(e,t))>0},C.isGreaterThanOrEqualTo=C.gte=function(e,t){return 1===(t=m(this,new j(e,t)))||0===t},C.isInteger=function(){return!!this.c&&f(this.e/14)>this.c.length-2},C.isLessThan=C.lt=function(e,t){return m(this,new j(e,t))<0},C.isLessThanOrEqualTo=C.lte=function(e,t){return-1===(t=m(this,new j(e,t)))||0===t},C.isNaN=function(){return!this.s},C.isNegative=function(){return this.s<0},C.isPositive=function(){return this.s>0},C.isZero=function(){return!!this.c&&0==this.c[0]},C.minus=function(e,t){var i,r,s,n,o=this,a=o.s;if(t=(e=new j(e,t)).s,!a||!t)return new j(NaN);if(a!=t)return e.s=-t,o.plus(e);var l=o.e/14,c=e.e/14,h=o.c,d=e.c;if(!l||!c){if(!h||!d)return h?(e.s=-t,e):new j(d?o:NaN);if(!h[0]||!d[0])return d[0]?(e.s=-t,e):new j(h[0]?o:3==I?-0:0)}if(l=f(l),c=f(c),h=h.slice(),a=l-c){for((n=a<0)?(a=-a,s=h):(c=l,s=d),s.reverse(),t=a;t--;s.push(0));s.reverse()}else for(r=(n=(a=h.length)<(t=d.length))?a:t,a=t=0;t<r;t++)if(h[t]!=d[t]){n=h[t]<d[t];break}if(n&&(s=h,h=d,d=s,e.s=-e.s),(t=(r=d.length)-(i=h.length))>0)for(;t--;h[i++]=0);for(t=u-1;r>a;){if(h[--r]<d[r]){for(i=r;i&&!h[--i];h[i]=t);--h[i],h[r]+=u}h[r]-=d[r]}for(;0==h[0];h.splice(0,1),--c);return h[0]?H(e,h,c):(e.s=3==I?-1:1,e.c=[e.e=0],e)},C.modulo=C.mod=function(e,t){var r,s,n=this;return e=new j(e,t),!n.c||!e.s||e.c&&!e.c[0]?new j(NaN):!e.c||n.c&&!n.c[0]?new j(n):(9==B?(s=e.s,e.s=1,r=i(n,e,0,3),e.s=s,r.s*=s):r=i(n,e,0,B),(e=n.minus(r.times(e))).c[0]||1!=B||(e.s=n.s),e)},C.multipliedBy=C.times=function(e,t){var i,r,s,n,o,a,l,c,h,d,p,g,m,y,v=this,w=v.c,b=(e=new j(e,t)).c;if(!(w&&b&&w[0]&&b[0]))return!v.s||!e.s||w&&!w[0]&&!b||b&&!b[0]&&!w?e.c=e.e=e.s=null:(e.s*=v.s,w&&b?(e.c=[0],e.e=0):e.c=e.e=null),e;for(r=f(v.e/14)+f(e.e/14),e.s*=v.s,(l=w.length)<(d=b.length)&&(m=w,w=b,b=m,s=l,l=d,d=s),s=l+d,m=[];s--;m.push(0));for(y=u,1e7,s=d;--s>=0;){for(i=0,p=b[s]%1e7,g=b[s]/1e7|0,n=s+(o=l);n>s;)i=((c=p*(c=w[--o]%1e7)+(a=g*c+(h=w[o]/1e7|0)*p)%1e7*1e7+m[n]+i)/y|0)+(a/1e7|0)+g*h,m[n--]=c%y;m[n]=i}return i?++r:m.splice(0,1),H(e,m,r)},C.negated=function(){var e=new j(this);return e.s=-e.s||null,e},C.plus=function(e,t){var i,r=this,s=r.s;if(t=(e=new j(e,t)).s,!s||!t)return new j(NaN);if(s!=t)return e.s=-t,r.minus(e);var n=r.e/14,o=e.e/14,a=r.c,l=e.c;if(!n||!o){if(!a||!l)return new j(s/0);if(!a[0]||!l[0])return l[0]?e:new j(a[0]?r:0*s)}if(n=f(n),o=f(o),a=a.slice(),s=n-o){for(s>0?(o=n,i=l):(s=-s,i=a),i.reverse();s--;i.push(0));i.reverse()}for((s=a.length)-(t=l.length)<0&&(i=l,l=a,a=i,t=s),s=0;t;)s=(a[--t]=a[t]+l[t]+s)/u|0,a[t]=u===a[t]?0:a[t]%u;return s&&(a=[s].concat(a),++o),H(e,a,o)},C.precision=C.sd=function(e,t){var i,r,s,n=this;if(null!=e&&e!==!!e)return y(e,1,p),null==t?t=I:y(t,0,8),q(new j(n),e,t);if(!(i=n.c))return null;if(r=14*(s=i.length-1)+1,s=i[s]){for(;s%10==0;s/=10,r--);for(s=i[0];s>=10;s/=10,r++);}return e&&n.e+1>r&&(r=n.e+1),r},C.shiftedBy=function(e){return y(e,-9007199254740991,9007199254740991),this.times("1e"+e)},C.squareRoot=C.sqrt=function(){var e,t,r,s,n,o=this,a=o.c,l=o.s,c=o.e,h=k+4,u=new j("0.5");if(1!==l||!a||!a[0])return new j(!l||l<0&&(!a||a[0])?NaN:a?o:1/0);if(0==(l=Math.sqrt(+z(o)))||l==1/0?(((t=g(a)).length+c)%2==0&&(t+="0"),l=Math.sqrt(+t),c=f((c+1)/2)-(c<0||c%2),r=new j(t=l==1/0?"5e"+c:(t=l.toExponential()).slice(0,t.indexOf("e")+1)+c)):r=new j(l+""),r.c[0])for((l=(c=r.e)+h)<3&&(l=0);;)if(n=r,r=u.times(n.plus(i(o,n,h,1))),g(n.c).slice(0,l)===(t=g(r.c)).slice(0,l)){if(r.e<c&&--l,"9999"!=(t=t.slice(l-3,l+1))&&(s||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(q(r,r.e+k+2,1),e=!r.times(r).eq(o));break}if(!s&&(q(n,n.e+k+2,0),n.times(n).eq(o))){r=n;break}h+=4,l+=4,s=1}return q(r,r.e+k+1,I,e)},C.toExponential=function(e,t){return null!=e&&(y(e,0,p),e++),F(this,e,t,1)},C.toFixed=function(e,t){return null!=e&&(y(e,0,p),e=e+this.e+1),F(this,e,t)},C.toFormat=function(e,t,i){var r,s=this;if(null==i)null!=e&&t&&"object"==typeof t?(i=t,t=null):e&&"object"==typeof e?(i=e,e=t=null):i=R;else if("object"!=typeof i)throw Error(c+"Argument not an object: "+i);if(r=s.toFixed(e,t),s.c){var n,o=r.split("."),a=+i.groupSize,l=+i.secondaryGroupSize,h=i.groupSeparator||"",u=o[0],d=o[1],p=s.s<0,f=p?u.slice(1):u,g=f.length;if(l&&(n=a,a=l,l=n,g-=n),a>0&&g>0){for(n=g%a||a,u=f.substr(0,n);n<g;n+=a)u+=h+f.substr(n,a);l>0&&(u+=h+f.slice(n)),p&&(u="-"+u)}r=d?u+(i.decimalSeparator||"")+((l=+i.fractionGroupSize)?d.replace(new RegExp("\\d{"+l+"}\\B","g"),"$&"+(i.fractionGroupSeparator||"")):d):u}return(i.prefix||"")+r+(i.suffix||"")},C.toFraction=function(e){var t,r,s,n,o,a,l,h,u,p,f,m,y=this,v=y.c;if(null!=e&&(!(l=new j(e)).isInteger()&&(l.c||1!==l.s)||l.lt(P)))throw Error(c+"Argument "+(l.isInteger()?"out of range: ":"not an integer: ")+z(l));if(!v)return new j(y);for(t=new j(P),u=r=new j(P),s=h=new j(P),m=g(v),o=t.e=m.length-y.e-1,t.c[0]=d[(a=o%14)<0?14+a:a],e=!e||l.comparedTo(t)>0?o>0?t:u:l,a=M,M=1/0,l=new j(m),h.c[0]=0;p=i(l,t,0,1),1!=(n=r.plus(p.times(s))).comparedTo(e);)r=s,s=n,u=h.plus(p.times(n=u)),h=n,t=l.minus(p.times(n=t)),l=n;return n=i(e.minus(r),s,0,1),h=h.plus(n.times(u)),r=r.plus(n.times(s)),h.s=u.s=y.s,f=i(u,s,o*=2,I).minus(y).abs().comparedTo(i(h,r,o,I).minus(y).abs())<1?[u,s]:[h,r],M=a,f},C.toNumber=function(){return+z(this)},C.toPrecision=function(e,t){return null!=e&&y(e,1,p),F(this,e,t,2)},C.toString=function(e){var t,i=this,s=i.s,n=i.e;return null===n?s?(t="Infinity",s<0&&(t="-"+t)):t="NaN":(null==e?t=n<=E||n>=O?w(g(i.c),n):b(g(i.c),n,"0"):10===e&&D?t=b(g((i=q(new j(i),k+n+1,I)).c),i.e,"0"):(y(e,2,V.length,"Base"),t=r(b(g(i.c),n,"0"),10,e,s,!0)),s<0&&i.c[0]&&(t="-"+t)),t},C.valueOf=C.toJSON=function(){return z(this)},C._isBigNumber=!0,null!=t&&j.set(t),j}()).default=n.BigNumber=n,void 0===(r=function(){return n}.call(t,i,t,e))||(e.exports=r)}()},function(e,t,i){var r=i(1),s=e.exports;!function(){"use strict";var e,t,i,n=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,o={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function a(e){return n.lastIndex=0,n.test(e)?'"'+e.replace(n,(function(e){var t=o[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+e+'"'}"function"!=typeof s.stringify&&(s.stringify=function(s,n,o){var l;if(e="",t="","number"==typeof o)for(l=0;l<o;l+=1)t+=" ";else"string"==typeof o&&(t=o);if(i=n,n&&"function"!=typeof n&&("object"!=typeof n||"number"!=typeof n.length))throw new Error("JSON.stringify");return function s(n,o){var l,c,h,u,d,p=e,f=o[n],g=null!=f&&(f instanceof r||r.isBigNumber(f));switch(f&&"object"==typeof f&&"function"==typeof f.toJSON&&(f=f.toJSON(n)),"function"==typeof i&&(f=i.call(o,n,f)),typeof f){case"string":return g?f:a(f);case"number":return isFinite(f)?String(f):"null";case"boolean":case"null":case"bigint":return String(f);case"object":if(!f)return"null";if(e+=t,d=[],"[object Array]"===Object.prototype.toString.apply(f)){for(u=f.length,l=0;l<u;l+=1)d[l]=s(l,f)||"null";return h=0===d.length?"[]":e?"[\n"+e+d.join(",\n"+e)+"\n"+p+"]":"["+d.join(",")+"]",e=p,h}if(i&&"object"==typeof i)for(u=i.length,l=0;l<u;l+=1)"string"==typeof i[l]&&(h=s(c=i[l],f))&&d.push(a(c)+(e?": ":":")+h);else Object.keys(f).forEach((function(t){var i=s(t,f);i&&d.push(a(t)+(e?": ":":")+i)}));return h=0===d.length?"{}":e?"{\n"+e+d.join(",\n"+e)+"\n"+p+"}":"{"+d.join(",")+"}",e=p,h}}("",{"":s})})}()},function(e,t,i){var r=null;const s=/(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,n=/(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;e.exports=function(e){"use strict";var t={strict:!1,storeAsString:!1,alwaysParseAsBig:!1,useNativeBigInt:!1,protoAction:"error",constructorAction:"error"};if(null!=e){if(!0===e.strict&&(t.strict=!0),!0===e.storeAsString&&(t.storeAsString=!0),t.alwaysParseAsBig=!0===e.alwaysParseAsBig&&e.alwaysParseAsBig,t.useNativeBigInt=!0===e.useNativeBigInt&&e.useNativeBigInt,void 0!==e.constructorAction){if("error"!==e.constructorAction&&"ignore"!==e.constructorAction&&"preserve"!==e.constructorAction)throw new Error('Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed '+e.constructorAction);t.constructorAction=e.constructorAction}if(void 0!==e.protoAction){if("error"!==e.protoAction&&"ignore"!==e.protoAction&&"preserve"!==e.protoAction)throw new Error('Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed '+e.protoAction);t.protoAction=e.protoAction}}var o,a,l,c,h={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},u=function(e){throw{name:"SyntaxError",message:e,at:o,text:l}},d=function(e){return e&&e!==a&&u("Expected '"+e+"' instead of '"+a+"'"),a=l.charAt(o),o+=1,a},p=function(){var e,s="";for("-"===a&&(s="-",d("-"));a>="0"&&a<="9";)s+=a,d();if("."===a)for(s+=".";d()&&a>="0"&&a<="9";)s+=a;if("e"===a||"E"===a)for(s+=a,d(),"-"!==a&&"+"!==a||(s+=a,d());a>="0"&&a<="9";)s+=a,d();if(e=+s,isFinite(e))return null==r&&(r=i(1)),s.length>15?t.storeAsString?s:t.useNativeBigInt?BigInt(s):new r(s):t.alwaysParseAsBig?t.useNativeBigInt?BigInt(e):new r(e):e;u("Bad number")},f=function(){var e,t,i,r="";if('"'===a)for(var s=o;d();){if('"'===a)return o-1>s&&(r+=l.substring(s,o-1)),d(),r;if("\\"===a){if(o-1>s&&(r+=l.substring(s,o-1)),d(),"u"===a){for(i=0,t=0;t<4&&(e=parseInt(d(),16),isFinite(e));t+=1)i=16*i+e;r+=String.fromCharCode(i)}else{if("string"!=typeof h[a])break;r+=h[a]}s=o}}u("Bad string")},g=function(){for(;a&&a<=" ";)d()};return c=function(){switch(g(),a){case"{":return function(){var e,i=Object.create(null);if("{"===a){if(d("{"),g(),"}"===a)return d("}"),i;for(;a;){if(e=f(),g(),d(":"),!0===t.strict&&Object.hasOwnProperty.call(i,e)&&u('Duplicate key "'+e+'"'),!0===s.test(e)?"error"===t.protoAction?u("Object contains forbidden prototype property"):"ignore"===t.protoAction?c():i[e]=c():!0===n.test(e)?"error"===t.constructorAction?u("Object contains forbidden constructor property"):"ignore"===t.constructorAction?c():i[e]=c():i[e]=c(),g(),"}"===a)return d("}"),i;d(","),g()}}u("Bad object")}();case"[":return function(){var e=[];if("["===a){if(d("["),g(),"]"===a)return d("]"),e;for(;a;){if(e.push(c()),g(),"]"===a)return d("]"),e;d(","),g()}}u("Bad array")}();case'"':return f();case"-":return p();default:return a>="0"&&a<="9"?p():function(){switch(a){case"t":return d("t"),d("r"),d("u"),d("e"),!0;case"f":return d("f"),d("a"),d("l"),d("s"),d("e"),!1;case"n":return d("n"),d("u"),d("l"),d("l"),null}u("Unexpected '"+a+"'")}()}},function(e,t){var i;return l=e+"",o=0,a=" ",i=c(),g(),a&&u("Syntax error"),"function"==typeof t?function e(i,r){var s,n=i[r];return n&&"object"==typeof n&&Object.keys(n).forEach((function(t){void 0!==(s=e(n,t))?n[t]=s:delete n[t]})),t.call(i,r,n)}({"":i},""):i}}},function(e,t,i){"use strict";i.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},n=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${n}--\x3e`,a=new RegExp(`${n}|${o}`);class l{constructor(e,t){this.parts=[],this.element=t;const i=[],r=[],s=document.createTreeWalker(t.content,133,null,!1);let o=0,l=-1,h=0;const{strings:p,values:{length:f}}=e;for(;h<f;){const e=s.nextNode();if(null!==e){if(l++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let r=0;for(let e=0;e<i;e++)c(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=p[h],i=d.exec(t)[2],r=i.toLowerCase()+"$lit$",s=e.getAttribute(r);e.removeAttribute(r);const n=s.split(a);this.parts.push({type:"attribute",index:l,name:i,strings:n}),h+=n.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(n)>=0){const r=e.parentNode,s=t.split(a),n=s.length-1;for(let t=0;t<n;t++){let i,n=s[t];if(""===n)i=u();else{const e=d.exec(n);null!==e&&c(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(n)}r.insertBefore(i,e),this.parts.push({type:"node",index:++l})}""===s[n]?(r.insertBefore(u(),e),i.push(e)):e.data=s[n],h+=n}}else if(8===e.nodeType)if(e.data===n){const t=e.parentNode;null!==e.previousSibling&&l!==o||(l++,t.insertBefore(u(),e)),o=l,this.parts.push({type:"node",index:l}),null===e.nextSibling?e.data="":(i.push(e),l--),h++}else{let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)this.parts.push({type:"node",index:-1}),h++}}else s.currentNode=r.pop()}for(const e of i)e.parentNode.removeChild(e)}}const c=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},h=e=>-1!==e.index,u=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(e,t){const{element:{content:i},parts:r}=e,s=document.createTreeWalker(i,133,null,!1);let n=g(r),o=r[n],a=-1,l=0;const c=[];let h=null;for(;s.nextNode();){a++;const e=s.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,n=g(r,n),o=r[n]}c.forEach(e=>e.parentNode.removeChild(e))}const f=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},g=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(h(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,y=e=>"function"==typeof e&&m.has(e),v={},w={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let n,o=0,a=0,l=s.nextNode();for(;o<i.length;)if(n=i[o],h(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),s.currentNode=l.content),null===(l=s.nextNode())&&(s.currentNode=t.pop(),l=s.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),_=` ${n} `;class x{constructor(e,t,i,r){this.strings=e,this.values=t,this.type=i,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let r=0;r<e;r++){const e=this.strings[r],s=e.lastIndexOf("\x3c!--");i=(s>-1||i)&&-1===e.indexOf("--\x3e",s+1);const a=d.exec(e);t+=null===a?e+(i?_:o):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+n}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==S&&(t=S.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const N=e=>null===e||!("object"==typeof e||"function"==typeof e),A=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class C{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new P(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!A(e))return e}let r="";for(let s=0;s<t;s++){r+=e[s];const t=i[s];if(void 0!==t){const e=t.value;if(N(e)||!A(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===v||N(e)&&e===this.value||(this.value=e,y(e)||(this.committer.dirty=!0))}commit(){for(;y(this.value);){const e=this.value;this.value=v,e(this)}this.value!==v&&this.committer.commit()}}class k{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(u()),this.endNode=e.appendChild(u())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=u()),e.__insert(this.endNode=u())}insertAfterPart(e){e.__insert(this.startNode=u()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;y(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}const e=this.__pendingValue;e!==v&&(N(e)?e!==this.value&&this.__commitText(e):e instanceof x?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):A(e)?this.__commitIterable(e):e===w?(this.value=w,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{const i=new b(t,e.processor,this.options),r=i._clone();i.update(e.values),this.__commitNode(r),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,r=0;for(const s of e)i=t[r],void 0===i&&(i=new k(this.options),t.push(i),0===r?i.appendIntoPart(this):i.insertAfterPart(t[r-1])),i.setValue(s),i.commit(),r++;r<t.length&&(t.length=r,this.clear(i&&i.endNode))}clear(e=this.startNode){s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class I{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;y(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=v}}class E extends C{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends P{}let U=!1;(()=>{try{const e={get capture(){return U=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class M{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;y(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=T(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=v}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const T=e=>e&&(U?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function B(e){let t=$.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},$.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const r=e.strings.join(n);return i=t.keyString.get(r),void 0===i&&(i=new l(e,e.getTemplateElement()),t.keyString.set(r,i)),t.stringsArray.set(e.strings,i),i}const $=new Map,R=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const V=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,i,r){const s=t[0];if("."===s){return new E(e,t.slice(1),i).parts}if("@"===s)return[new M(e,t.slice(1),r.eventContext)];if("?"===s)return[new I(e,t.slice(1),i)];return new C(e,t,i).parts}handleTextExpression(e){return new k(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const D=(e,...t)=>new x(e,t,"html",V),j=(e,t)=>`${e}--${t}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const L=e=>t=>{const i=j(t.type,e);let r=$.get(i);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},$.set(i,r));let s=r.stringsArray.get(t.strings);if(void 0!==s)return s;const o=t.strings.join(n);if(s=r.keyString.get(o),void 0===s){const i=t.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(i,e),s=new l(t,i),r.keyString.set(o,s)}return r.stringsArray.set(t.strings,s),s},H=["html","svg"],q=new Set,z=(e,t,i)=>{q.add(e);const r=i?i.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:n}=s;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(r,e);const o=document.createElement("style");for(let e=0;e<n;e++){const t=s[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{H.forEach(t=>{const i=$.get(j(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),p(e,i)})})})(e);const a=r.content;i?function(e,t,i=null){const{element:{content:r},parts:s}=e;if(null==i)return void r.appendChild(t);const n=document.createTreeWalker(r,133,null,!1);let o=g(s),a=0,l=-1;for(;n.nextNode();){l++;for(n.currentNode===i&&(a=f(t),i.parentNode.insertBefore(t,i));-1!==o&&s[o].index===l;){if(a>0){for(;-1!==o;)s[o].index+=a,o=g(s,o);return}o=g(s,o)}}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),p(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const W={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},G=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:G};class Y extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const r=this._attributeNameForProperty(i,t);void 0!==r&&(this._attributeToPropertyMap.set(r,i),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdateInternal(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||J}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=G){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,r=t.converter||W,s="function"==typeof r?r:r.fromAttribute;return s?s(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,r=t.converter;return(r&&r.toAttribute||W.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=J){const r=this.constructor,s=r._attributeNameForProperty(e,i);if(void 0!==s){const e=r._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(e);if(void 0!==r){const e=i.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let r=!0;if(void 0!==e){const s=this.constructor;i=i||s.getPropertyOptions(e),s._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Y.finalized=!0;const X=Element.prototype;X.msMatchesSelector||X.webkitMatchesSelector;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol();class Q{constructor(e,t){if(t!==Z)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ee=(e,...t)=>{const i=t.reduce((t,i,r)=>t+(e=>{if(e instanceof Q)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[r+1],e[0]);return new Q(i,Z)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const te={};class ie extends Y{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),r=[];i.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!K){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new Q(String(t),Z)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==te&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return te}}ie.finalized=!0,ie.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,n=R.has(t),o=F&&11===t.nodeType&&!!t.host,a=o&&!q.has(r),l=a?document.createDocumentFragment():t;if(((e,t,i)=>{let r=R.get(t);void 0===r&&(s(t,t.firstChild),R.set(t,r=new k(Object.assign({templateFactory:B},i))),r.appendInto(t)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:L(r)},i)),a){const e=R.get(l);R.delete(l);const i=e.value instanceof b?e.value.template:void 0;z(r,l,i),s(t,t.firstChild),t.appendChild(l),R.set(t,e)}!n&&o&&window.ShadyCSS.styleElement(t.host)},ie.shadowRootOptions={mode:"open"};var re=i(0),se=i.n(re);class ne{constructor(e){this.backend=e}async getIndices(){return se.a.parse(await(await fetch(this.backend+"/indices-list",{})).text())}async callClipService(e,t,i,r,s,n,o,a,l,c,h,u,d){console.log("calling",e,s);return se.a.parse(await(await fetch(this.backend+"/knn-service",{method:"POST",body:JSON.stringify({text:e,image:t,image_url:i,modality:r,num_images:s,indice_name:n,num_result_ids:o,use_mclip:a,deduplicate:l,use_safety_model:c,use_violence_detector:h,aesthetic_score:u,aesthetic_weight:d})})).text())}async getMetadata(e,t){return se.a.parse(await(await fetch(this.backend+"/metadata",{method:"POST",body:JSON.stringify({ids:e,indice_name:t})})).text())}}customElements.define("clip-front",class extends ie{constructor(){super(),window.fetch("config.json").then(e=>e.json()).then(e=>{this.defaultIndex=e.defaultIndex,this.defaultBackend=e.defaultBackend,this.urlColumn=e.urlColumn||"url",this.init()})}init(){const e=new URLSearchParams(window.location.search),t=e.get("back"),i=e.get("index"),r=e.get("query"),s=e.get("useMclip"),n=e.get("imageUrl");this.currentIndex=null!=i?i:null===t||t===this.defaultBackend?this.defaultIndex:"",this.backendHost=null!=t?t:this.defaultBackend,this.text=null!=r?r:"",this.useMclip=null!=s&&"true"===s,this.service=new ne(this.backendHost),this.numImages=40,this.numResultIds=3e3,this.lastMetadataId=null,this.onGoingMetadataFetch=!1,this.indices=[],this.images=[],this.modality="image",this.blacklist={},this.lastSearch="text",this.displayCaptions=!0,this.displaySimilarities=!1,this.displayFullCaptions=!1,this.safeMode=!0,this.removeViolence=!0,this.firstLoad=!0,this.imageUrl=null===n?void 0:n,this.hideDuplicateUrls=!0,this.hideDuplicateImages=!0,this.aestheticScore="9",this.aestheticWeight="0.5",this.initIndices()}setBackendToDefault(){this.backendHost=this.defaultBackend,this.initIndices(!0)}initIndices(e){this.service.getIndices().then(t=>{this.indices=t,(e||""===this.currentIndex)&&(this.currentIndex=this.indices[0])}).catch(e=>{console.error(e),this.setBackendToDefault()})}static get properties(){return{service:{type:Object},images:{type:Array},image:{type:String},imageUrl:{type:String},text:{type:String},numImages:{type:Number},modality:{type:String},indices:{type:Array},currentIndex:{type:String},backendHost:{type:String},blacklist:{type:Object},displaySimilarities:{type:Boolean},displayCaptions:{type:Boolean},displayFullCaptions:{type:Boolean},safeMode:{type:Boolean},removeViolence:{type:Boolean},hideDuplicateUrls:{type:Boolean},hideDuplicateImages:{type:Boolean},useMclip:{type:Boolean},aestheticWeight:{type:String},aestheticScore:{type:String}}}firstUpdated(){this.shadowRoot.getElementById("searchBar").addEventListener("keyup",e=>{13===e.keyCode&&this.textSearch()});const e=this.shadowRoot.getElementById("products");window.onscroll=()=>{window.innerHeight+window.pageYOffset>=e.offsetHeight&&this.fetchMoreMetadata()}}async initialScroll(){const e=this.shadowRoot.getElementById("products");let t=0;for(;window.innerHeight+window.pageYOffset>=e.offsetHeight&&(await this.fetchMoreMetadata(),t+=1,!(t>5)););}updated(e){e.has("backendHost")&&(this.service.backend=this.backendHost,this.initIndices(!this.firstLoad),this.firstLoad=!1,this.setUrlParams()),e.has("currentIndex")&&this.setUrlParams(),e.has("image")&&void 0!==this.image?this.imageSearch():e.has("imageUrl")&&void 0!==this.imageUrl?this.imageUrlSearch():(e.has("useMclip")||e.has("modality")||e.has("currentIndex")||e.has("hideDuplicateUrls")||e.has("hideDuplicateImages")||e.has("safeMode")||e.has("removeViolence")||e.has("aestheticScore")||e.has("aestheticWeight"))&&(void 0===this.image&&""===this.text&&void 0===this.imageUrl||this.redoSearch())}async redoSearch(){"text"===this.lastSearch?this.textSearch():"image"===this.lastSearch?this.imageSearch():"imageUrl"===this.lastSearch&&this.imageUrlSearch()}setUrlParams(){const e=new URLSearchParams(window.location.search);""!==this.text?e.set("query",this.text):e.delete("query"),void 0!==this.imageUrl?e.set("imageUrl",this.imageUrl):e.delete("imageUrl"),e.set("back",this.backendHost),e.set("index",this.currentIndex),e.set("useMclip",this.useMclip),window.history.pushState({},"","?"+e.toString())}async fetchMoreMetadata(e=40){if(this.onGoingMetadataFetch)return;if(this.onGoingMetadataFetch=!0,console.log("fetching more metadata starting from position",this.lastMetadataId),null===this.lastMetadataId)return void(this.onGoingMetadataFetch=!1);if((e=Math.min(e,this.numResultIds-this.lastMetadataId-1))<=0)return void(this.onGoingMetadataFetch=!1);const t=this.images.slice(this.lastMetadataId+1,this.lastMetadataId+e+1).map(e=>e.id);try{const i=Object.fromEntries((await this.service.getMetadata(t,this.currentIndex)).map(({id:e,metadata:t})=>[e,t]));this.images=this.images.map(e=>(void 0!==i[e.id]&&(e={...i[e.id],...e}),e)),this.lastMetadataId+=e}catch(e){console.log(e)}this.onGoingMetadataFetch=!1}async download(){const e=void 0===this.text?null:this.text,t=void 0===this.image?null:this.image,i=void 0===this.imageUrl?null:this.imageUrl,r="image"===this.modality&&this.currentIndex===this.indices[0]?1e4:100,s=await this.service.callClipService(e,t,i,this.modality,r,this.currentIndex,r,this.useMclip,this.hideDuplicateImages,this.safeMode,this.removeViolence,this.aestheticScore,this.aestheticWeight);!function(e,t){var i=document.createElement("a");i.setAttribute("href","data:application/json;charset=utf-8,"+encodeURIComponent(t)),i.setAttribute("download",e),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)}("clipsubset.json",JSON.stringify(s,null,2))}async textSearch(){if(""===this.text)return;this.image=void 0,this.imageUrl=void 0;const e=await this.service.callClipService(this.text,null,null,this.modality,this.numImages,this.currentIndex,this.numResultIds,this.useMclip,this.hideDuplicateImages,this.safeMode,this.removeViolence,this.aestheticScore,this.aestheticWeight);console.log(e),this.images=e,this.lastMetadataId=Math.min(this.numImages,e.length)-1,this.lastSearch="text",this.setUrlParams(),setTimeout(()=>this.initialScroll(),0)}async imageSearch(){this.text="",this.imageUrl=void 0;const e=await this.service.callClipService(null,this.image,null,this.modality,this.numImages,this.currentIndex,this.numResultIds,this.useMclip,this.hideDuplicateImages,this.safeMode,this.removeViolence,this.aestheticScore,this.aestheticWeight);console.log(e),this.images=e,this.lastMetadataId=Math.min(this.numImages,e.length)-1,this.lastSearch="image",this.setUrlParams(),setTimeout(()=>this.initialScroll(),0)}async imageUrlSearch(){this.text="",this.image=void 0;const e=await this.service.callClipService(null,null,this.imageUrl,this.modality,this.numImages,this.currentIndex,this.numResultIds,this.useMclip,this.hideDuplicateImages,this.safeMode,this.removeViolence,this.aestheticScore,this.aestheticWeight);console.log(e),this.images=e,this.lastMetadataId=Math.min(this.numImages,e.length)-1,this.lastSearch="imageUrl",this.setUrlParams(),setTimeout(()=>this.initialScroll(),0)}static get styles(){return ee`
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
        -webkit-transition-delay: 9999s;
    }

    figcaption {
      display: table-caption;
      caption-side: bottom;
      background: #fff;
      padding: 0 0px 0px;
    }

    #searchBar, #searchBar:hover, #searchBar:focus, #searchBar:valid {
      border-radius: 25px;
      border-color: #ddd;
      background-color:white;
      border-width:1px;
      width:85%;
      padding:15px;
      outline: none;
      border-style: solid;
      font-size:16px;
      font-family:arial, sans-serif;
    }
    #searchBar:hover, #searchBar:focus {
      box-shadow: 0px 0px 7px  #ccc;
    }
    #all {
      margin-left:2%;
      margin-right:2%;
      margin-top:2%;
    }
    #inputSearchBar:hover > #searchBar {
      box-shadow: 0px 0px 7px  #ccc !important;
    }
    #download {
      width: 22px;
      margin-left:0.5%;
      vertical-align:middle;
      cursor:pointer;
    }
    #imageSearch {
      width: 22px;
      margin-left:0.5%;
      vertical-align:middle;
      cursor:pointer;
    }
    #textSearch {
      width: 22px;
      margin-left:1.5%;
      vertical-align:middle;
      cursor:pointer;
    }
    .subImageSearch {
      width: 22px;
      height: 22px:
      cursor:pointer;
      float:right;
      z-index:90;
      display:None;
    }
    .subTextSearch {
      width: 22px;
      height: 22px:
      cursor:pointer;
      margin-left:5%;
      margin-right:5%;
      float:right;
      z-index:90;
      display:None;
    }
    figure:hover > .subImageSearch {
      display:inline;
      cursor:pointer;
    }
    figure:hover > .subTextSearch {
      display:inline;
      cursor:pointer;
    }
    #products {
      margin-top:50px;
      width:85%;
      float:right;
      display: inline-grid;
    }
    @media (min-width: 500px) {
      #products {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 700px) {
      #products{
        grid-template-columns: repeat(4, 1fr);
      }
    }
    
    @media (min-width: 1000px) {
      #products {
        grid-template-columns: repeat(5, 1fr);
      }
    }
    
    @media (min-width: 1300px) {
      #products {
        grid-template-columns: repeat(7, 1fr);
      }
    }
    
    @media (min-width: 1600px) {
      #products{
        grid-template-columns: repeat(8, 1fr);
      }
    }
    #filter {
      position:absolute;
      top:20px;
      width:12%;
      float:left;
    }
    #searchLine {
      margin-left:15%;
    }

    figcaption {
      font-size:16px;
    }

    figure,img.pic,figcaption {
      width:150px;
    }

    @media (max-width: 500px) {

      #searchBar, #searchBar:hover, #searchBar:focus, #searchBar:valid {
        width:60%;
      }
      #filter {
        font-size:14px;
        width:100px;
      }

      #products {
        grid-template-columns: repeat(3, 1fr);
      }
      figure,img.pic,figcaption {
      width:70px;
      }
      #searchLine {
        margin-left:100px;
      }

      figcaption {
        font-size:12px;
      }

    #products {
      width:60%;
    }
    }

    `}updateImage(e){var t=new FileReader;t.readAsDataURL(e),t.onload=()=>{this.image=t.result.split(",")[1]},t.onerror=e=>{console.log("Error: ",e)}}renderImage(e){let t;return void 0!==e.image&&(t="data:image/png;base64, "+e.image),void 0!==e[this.urlColumn]&&(t=e[this.urlColumn]),D`
    <figure style="margin:5px;display:table" 
    style=${"margin:1px; "+(void 0!==this.blacklist[t]?"display:none":"display:inline")}>
     ${this.displaySimilarities?D`<p>${e.similarity.toFixed(4)}</p>`:""}
      ${void 0!==e.caption?D`<img src="assets/search.png" class="subTextSearch" @click=${()=>{this.text=e.caption,this.textSearch()}} />`:""}
     
     <img src="assets/image-search.png" class="subImageSearch" @click=${()=>{void 0!==e.image?this.image=e.image:void 0!==e[this.urlColumn]&&(this.imageUrl=e[this.urlColumn])}} />
      <img class="pic" src="${t}" alt="${void 0!==e.caption?e.caption:""}"" 
      title="${void 0!==e.caption?e.caption:""}"
      @error=${()=>{this.blacklist={...this.blacklist,[t]:!0}}} />
      
      ${this.displayCaptions?D`<figcaption>
      ${void 0!==e.caption&&e.caption.length>50&&!this.displayFullCaptions?e.caption.substr(0,50)+"...":e.caption}</figcaption>`:""}
    
    
    </figure>
    `}filterDuplicateUrls(e){const t={};return e.filter(e=>void 0===e[this.urlColumn]||void 0===t[e[this.urlColumn]]&&(t[e[this.urlColumn]]=!0,!0))}render(){const e=this.images.filter(e=>void 0!==e.caption||void 0!==e[this.urlColumn]||void 0!==e.image),t=this.hideDuplicateUrls?this.filterDuplicateUrls(e):e;return D`
    <div id="all">
    <div id="searchLine">
      <span id="inputSearchBar">
        <input id="searchBar" type="text" .value=${this.text} @input=${e=>{this.text=e.target.value}}/>
        <img src="assets/search.png" id="textSearch" @click=${()=>{this.textSearch()}} />
        <img src="assets/image-search.png" id="imageSearch" @click=${()=>{this.shadowRoot.getElementById("filechooser").click()}} />
        <img src="assets/download.png" id="download" @click=${()=>{this.download()}} />
        <input type="file" id="filechooser" style="position:absolute;top:-100px" @change=${()=>this.updateImage(this.shadowRoot.getElementById("filechooser").files[0])}>
      </span>
     
    </div>
    <div id="filter">
    Backend url: <br /><input type="text" style="width:80px" value=${this.backendHost} @input=${e=>{this.backendHost=e.target.value}}/><br />
    Index: <br /><select style="margin-bottom:50px;" @input=${e=>{this.currentIndex=e.target.value}}>${this.indices.map(e=>D`<option value=${e} ?selected=${e===this.currentIndex}>${e}</option>`)}</select><br />
      ${void 0!==this.image?D`<img width="100px" src="data:image/png;base64, ${this.image}"" /><br />`:""}
      ${void 0!==this.imageUrl?D`<img width="100px" src="${this.imageUrl}"" /><br />`:""}
      <a href="https://github.com/rom1504/clip-retrieval">Clip retrieval</a> works by converting the text query to a CLIP embedding
      , then using that embedding to query a knn index of clip image embedddings<br /><br />
      <label>Display captions<input type="checkbox" ?checked="${this.displayCaptions}" @click=${()=>{this.displayCaptions=!this.displayCaptions}} /></label><br />
      <label>Display full captions<input type="checkbox" ?checked="${this.displayFullCaptions}" @click=${()=>{this.displayFullCaptions=!this.displayFullCaptions}} /></label><br />
      <label>Display similarities<input type="checkbox" ?checked="${this.displaySimilarities}" @click=${()=>{this.displaySimilarities=!this.displaySimilarities}} /></label><br />
      <label>Safe mode<input type="checkbox" ?checked="${this.safeMode}" @click=${()=>{this.safeMode=!this.safeMode}} /></label><br />
      <label>Remove violence<input type="checkbox" ?checked="${this.removeViolence}" @click=${()=>{this.removeViolence=!this.removeViolence}} /></label><br />
      <label>Hide duplicate urls<input type="checkbox" ?checked="${this.hideDuplicateUrls}" @click=${()=>{this.hideDuplicateUrls=!this.hideDuplicateUrls}} /></label><br />
      <label>Hide (near) duplicate images<input type="checkbox" ?checked="${this.hideDuplicateImages}" @click=${()=>{this.hideDuplicateImages=!this.hideDuplicateImages}} /></label><br />
      <label>Enable aesthetic scoring<input type="checkbox" ?checked="${""!==this.aestheticScore}" @click=${()=>{this.aestheticScore=""===this.aestheticScore?"9":""}} /></label><br />
      <label>Aesthetic score <select @input=${e=>{this.aestheticScore=e.target.value}}>
        ${["",...Array(10).keys()].map(e=>D`<option ?selected="${this.aestheticScore===e.toString()}" value=${e}>${e}</option>`)}</select></label><br />
      <label>Aesthetic weight<input type="input" value="${this.aestheticWeight}" @input=${e=>{this.aestheticWeight=e.target.value}} /></label><br />
      <label>Search over <select @input=${e=>{this.modality=e.target.value}}>${["image","text"].map(e=>D`<option value=${e} ?selected=${e===this.modality}>${e}</option>`)}</select><br />
      <label>Search with multilingual clip <input type="checkbox" ?checked="${this.useMclip}" @click=${()=>{this.useMclip=!this.useMclip}} /></label><br />
        <p>This UI may contain results with nudity and is best used by adults. The images are under their own copyright.</p>
        <p>Are you seeing near duplicates ? KNN search are good at spotting those, especially so in large datasets.</p>
     </div>

    <div id="products">
    ${t.map(e=>this.renderImage(e))}
    ${this.safeMode&&0!==this.images.length&&0===t.length?"Displaying only nice pictures in safe mode!":""}
    </div>
    </div>
    `}})}]);
//# sourceMappingURL=main.75b2ec58.js.map