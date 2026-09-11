(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ls="180",wn={ROTATE:0,DOLLY:1,PAN:2},En={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kl=0,mo=1,Dl=2,Uc=1,Pc=2,ga=3,Ia=0,Tt=1,zt=2,ka=0,An=1,go=2,vo=3,_o=4,Il=5,Ga=100,Ul=101,Pl=102,Nl=103,Ll=104,Fl=200,jl=201,Ol=202,Bl=203,Fr=204,jr=205,zl=206,Hl=207,Gl=208,Vl=209,Wl=210,ql=211,Xl=212,Kl=213,Jl=214,Or=0,Br=1,zr=2,Rn=3,Hr=4,Gr=5,Vr=6,Wr=7,Fs=0,Yl=1,Zl=2,Da=0,Ql=1,$l=2,ed=3,Nc=4,td=5,ad=6,nd=7,Lc=300,Cn=301,kn=302,qr=303,Xr=304,Ji=306,Kr=1e3,Wa=1001,Jr=1002,Ht=1003,id=1004,fi=1005,oa=1006,ar=1007,qa=1008,da=1009,Fc=1010,jc=1011,ei=1012,js=1013,Ka=1014,ca=1015,oi=1016,Os=1017,Bs=1018,ti=1020,Oc=35902,Bc=35899,zc=1021,Hc=1022,ea=1023,ai=1026,ni=1027,zs=1028,Hs=1029,Gc=1030,Gs=1031,Vs=1033,ji=33776,Oi=33777,Bi=33778,zi=33779,Yr=35840,Zr=35841,Qr=35842,$r=35843,es=36196,ts=37492,as=37496,ns=37808,is=37809,rs=37810,ss=37811,os=37812,cs=37813,ls=37814,ds=37815,hs=37816,fs=37817,us=37818,bs=37819,ps=37820,ms=37821,gs=36492,vs=36494,_s=36495,xs=36283,Ms=36284,ys=36285,Es=36286,rd=3200,sd=3201,Ws=0,od=1,Ca="",Ut="srgb",Dn="srgb-linear",Gi="linear",Ze="srgb",rn=7680,xo=519,cd=512,ld=513,dd=514,Vc=515,hd=516,fd=517,ud=518,bd=519,Mo=35044,yo="300 es",la=2e3,Vi=2001;class $a{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){const a=this._listeners;if(a===void 0)return;const i=a[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const a=t[e.type];if(a!==void 0){e.target=this;const i=a.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eo=1234567;const Zn=Math.PI/180,ii=180/Math.PI;function Pn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[a&255]+Mt[a>>8&255]+Mt[a>>16&255]+Mt[a>>24&255]).toLowerCase()}function Be(n,e,t){return Math.max(e,Math.min(t,n))}function qs(n,e){return(n%e+e)%e}function pd(n,e,t,a,i){return a+(n-e)*(i-a)/(t-e)}function md(n,e,t){return n!==e?(t-n)/(e-n):0}function Qn(n,e,t){return(1-t)*n+t*e}function gd(n,e,t,a){return Qn(n,e,1-Math.exp(-t*a))}function vd(n,e=1){return e-Math.abs(qs(n,e*2)-e)}function _d(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function xd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Md(n,e){return n+Math.floor(Math.random()*(e-n+1))}function yd(n,e){return n+Math.random()*(e-n)}function Ed(n){return n*(.5-Math.random())}function Sd(n){n!==void 0&&(Eo=n);let e=Eo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wd(n){return n*Zn}function Ad(n){return n*ii}function Td(n){return(n&n-1)===0&&n!==0}function Rd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Cd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kd(n,e,t,a,i){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),d=r((e+a)/2),h=s((e+a)/2),b=r((e-a)/2),p=s((e-a)/2),u=r((a-e)/2),g=s((a-e)/2);switch(i){case"XYX":n.set(o*h,l*b,l*p,o*d);break;case"YZY":n.set(l*p,o*h,l*b,o*d);break;case"ZXZ":n.set(l*b,l*p,o*h,o*d);break;case"XZX":n.set(o*h,l*g,l*u,o*d);break;case"YXY":n.set(l*u,o*h,l*g,o*d);break;case"ZYZ":n.set(l*g,l*u,o*h,o*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Wc={DEG2RAD:Zn,RAD2DEG:ii,generateUUID:Pn,clamp:Be,euclideanModulo:qs,mapLinear:pd,inverseLerp:md,lerp:Qn,damp:gd,pingpong:vd,smoothstep:_d,smootherstep:xd,randInt:Md,randFloat:yd,randFloatSpread:Ed,seededRandom:Sd,degToRad:wd,radToDeg:Ad,isPowerOfTwo:Td,ceilPowerOfTwo:Rd,floorPowerOfTwo:Cd,setQuaternionFromProperEuler:kd,normalize:wt,denormalize:Mn};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,a=this.y,i=e.elements;return this.x=i[0]*t+i[3]*a+i[6],this.y=i[1]*t+i[4]*a+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Be(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(Be(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const a=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*a-s*i+e.x,this.y=r*i+s*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ja{constructor(e=0,t=0,a=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=i}static slerpFlat(e,t,a,i,r,s,o){let l=a[i+0],d=a[i+1],h=a[i+2],b=a[i+3];const p=r[s+0],u=r[s+1],g=r[s+2],m=r[s+3];if(o===0){e[t+0]=l,e[t+1]=d,e[t+2]=h,e[t+3]=b;return}if(o===1){e[t+0]=p,e[t+1]=u,e[t+2]=g,e[t+3]=m;return}if(b!==m||l!==p||d!==u||h!==g){let f=1-o;const c=l*p+d*u+h*g+b*m,_=c>=0?1:-1,x=1-c*c;if(x>Number.EPSILON){const w=Math.sqrt(x),A=Math.atan2(w,c*_);f=Math.sin(f*A)/w,o=Math.sin(o*A)/w}const v=o*_;if(l=l*f+p*v,d=d*f+u*v,h=h*f+g*v,b=b*f+m*v,f===1-o){const w=1/Math.sqrt(l*l+d*d+h*h+b*b);l*=w,d*=w,h*=w,b*=w}}e[t]=l,e[t+1]=d,e[t+2]=h,e[t+3]=b}static multiplyQuaternionsFlat(e,t,a,i,r,s){const o=a[i],l=a[i+1],d=a[i+2],h=a[i+3],b=r[s],p=r[s+1],u=r[s+2],g=r[s+3];return e[t]=o*g+h*b+l*u-d*p,e[t+1]=l*g+h*p+d*b-o*u,e[t+2]=d*g+h*u+o*p-l*b,e[t+3]=h*g-o*b-l*p-d*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,i){return this._x=e,this._y=t,this._z=a,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const a=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,d=o(a/2),h=o(i/2),b=o(r/2),p=l(a/2),u=l(i/2),g=l(r/2);switch(s){case"XYZ":this._x=p*h*b+d*u*g,this._y=d*u*b-p*h*g,this._z=d*h*g+p*u*b,this._w=d*h*b-p*u*g;break;case"YXZ":this._x=p*h*b+d*u*g,this._y=d*u*b-p*h*g,this._z=d*h*g-p*u*b,this._w=d*h*b+p*u*g;break;case"ZXY":this._x=p*h*b-d*u*g,this._y=d*u*b+p*h*g,this._z=d*h*g+p*u*b,this._w=d*h*b-p*u*g;break;case"ZYX":this._x=p*h*b-d*u*g,this._y=d*u*b+p*h*g,this._z=d*h*g-p*u*b,this._w=d*h*b+p*u*g;break;case"YZX":this._x=p*h*b+d*u*g,this._y=d*u*b+p*h*g,this._z=d*h*g-p*u*b,this._w=d*h*b-p*u*g;break;case"XZY":this._x=p*h*b-d*u*g,this._y=d*u*b-p*h*g,this._z=d*h*g+p*u*b,this._w=d*h*b+p*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const a=t/2,i=Math.sin(a);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,a=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],d=t[2],h=t[6],b=t[10],p=a+o+b;if(p>0){const u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-d)*u,this._z=(s-i)*u}else if(a>o&&a>b){const u=2*Math.sqrt(1+a-o-b);this._w=(h-l)/u,this._x=.25*u,this._y=(i+s)/u,this._z=(r+d)/u}else if(o>b){const u=2*Math.sqrt(1+o-a-b);this._w=(r-d)/u,this._x=(i+s)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+b-a-o);this._w=(s-i)/u,this._x=(r+d)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){const a=this.angleTo(e);if(a===0)return this;const i=Math.min(1,t/a);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const a=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,d=t._z,h=t._w;return this._x=a*h+s*o+i*d-r*l,this._y=i*h+s*l+r*o-a*d,this._z=r*h+s*d+a*l-i*o,this._w=s*h-a*o-i*l-r*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const a=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+a*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=a,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const u=1-t;return this._w=u*s+t*this._w,this._x=u*a+t*this._x,this._y=u*i+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}const d=Math.sqrt(l),h=Math.atan2(d,o),b=Math.sin((1-t)*h)/d,p=Math.sin(t*h)/d;return this._w=s*b+this._w*p,this._x=a*b+this._x*p,this._y=i*b+this._y*p,this._z=r*b+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),i=Math.sqrt(1-a),r=Math.sqrt(a);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,a=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(So.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(So.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,a=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*a+r[6]*i,this.y=r[1]*t+r[4]*a+r[7]*i,this.z=r[2]*t+r[5]*a+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,a=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*a+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*a+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*a+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*a+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,a=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,d=2*(s*i-o*a),h=2*(o*t-r*i),b=2*(r*a-s*t);return this.x=t+l*d+s*b-o*h,this.y=a+l*h+o*d-r*b,this.z=i+l*b+r*h-s*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,a=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*a+r[8]*i,this.y=r[1]*t+r[5]*a+r[9]*i,this.z=r[2]*t+r[6]*a+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Be(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const a=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-a*l,this.z=a*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return nr.copy(this).projectOnVector(e),this.sub(nr)}reflect(e){return this.sub(nr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(Be(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y,i=this.z-e.z;return t*t+a*a+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){const i=Math.sin(t)*e;return this.x=i*Math.sin(a),this.y=Math.cos(t)*e,this.z=i*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nr=new U,So=new Ja;class Fe{constructor(e,t,a,i,r,s,o,l,d){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,i,r,s,o,l,d)}set(e,t,a,i,r,s,o,l,d){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=a,h[7]=s,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,i=t.elements,r=this.elements,s=a[0],o=a[3],l=a[6],d=a[1],h=a[4],b=a[7],p=a[2],u=a[5],g=a[8],m=i[0],f=i[3],c=i[6],_=i[1],x=i[4],v=i[7],w=i[2],A=i[5],R=i[8];return r[0]=s*m+o*_+l*w,r[3]=s*f+o*x+l*A,r[6]=s*c+o*v+l*R,r[1]=d*m+h*_+b*w,r[4]=d*f+h*x+b*A,r[7]=d*c+h*v+b*R,r[2]=p*m+u*_+g*w,r[5]=p*f+u*x+g*A,r[8]=p*c+u*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],d=e[7],h=e[8];return t*s*h-t*o*d-a*r*h+a*o*l+i*r*d-i*s*l}invert(){const e=this.elements,t=e[0],a=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],d=e[7],h=e[8],b=h*s-o*d,p=o*l-h*r,u=d*r-s*l,g=t*b+a*p+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=b*m,e[1]=(i*d-h*a)*m,e[2]=(o*a-i*s)*m,e[3]=p*m,e[4]=(h*t-i*l)*m,e[5]=(i*r-o*t)*m,e[6]=u*m,e[7]=(a*l-d*t)*m,e[8]=(s*t-a*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,i,r,s,o){const l=Math.cos(r),d=Math.sin(r);return this.set(a*l,a*d,-a*(l*s+d*o)+s+e,-i*d,i*l,-i*(-d*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ir.makeScale(e,t)),this}rotate(e){return this.premultiply(ir.makeRotation(-e)),this}translate(e,t){return this.premultiply(ir.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,a=e.elements;for(let i=0;i<9;i++)if(t[i]!==a[i])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ir=new Fe;function qc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wi(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dd(){const n=Wi("canvas");return n.style.display="block",n}const wo={};function ri(n){n in wo||(wo[n]=!0,console.warn(n))}function Id(n,e,t){return new Promise(function(a,i){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:a()}}setTimeout(r,t)})}const Ao=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),To=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ud(){const n={enabled:!0,workingColorSpace:Dn,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Ze&&(i.r=xa(i.r),i.g=xa(i.g),i.b=xa(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Ze&&(i.r=Tn(i.r),i.g=Tn(i.g),i.b=Tn(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ca?Gi:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ri("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ri("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return n.define({[Dn]:{primaries:e,whitePoint:a,transfer:Gi,toXYZ:Ao,fromXYZ:To,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:a,transfer:Ze,toXYZ:Ao,fromXYZ:To,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),n}const Xe=Ud();function xa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Tn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let sn;class Pd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{sn===void 0&&(sn=Wi("canvas")),sn.width=e.width,sn.height=e.height;const i=sn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),a=sn}return a.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wi("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const i=a.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=xa(r[s]/255)*255;return a.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(xa(t[a]/255)*255):t[a]=xa(t[a]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nd=0;class Xs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(rr(i[s].image)):r.push(rr(i[s]))}else r=rr(i);a.url=r}return t||(e.images[this.uuid]=a),a}}function rr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ld=0;const sr=new U;class Rt extends $a{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,a=Wa,i=Wa,r=oa,s=qa,o=ea,l=da,d=Rt.DEFAULT_ANISOTROPY,h=Ca){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Pn(),this.name="",this.source=new Xs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sr).x}get height(){return this.source.getSize(sr).y}get depth(){return this.source.getSize(sr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const a=e[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&a&&i.isVector2&&a.isVector2||i&&a&&i.isVector3&&a.isVector3||i&&a&&i.isMatrix3&&a.isMatrix3?i.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kr:e.x=e.x-Math.floor(e.x);break;case Wa:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kr:e.y=e.y-Math.floor(e.y);break;case Wa:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Lc;Rt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,a=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=a,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,i){return this.x=e,this.y=t,this.z=a,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,a=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*a+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*a+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*a+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*a+s[11]*i+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,i,r;const l=e.elements,d=l[0],h=l[4],b=l[8],p=l[1],u=l[5],g=l[9],m=l[2],f=l[6],c=l[10];if(Math.abs(h-p)<.01&&Math.abs(b-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(b+m)<.1&&Math.abs(g+f)<.1&&Math.abs(d+u+c-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(d+1)/2,v=(u+1)/2,w=(c+1)/2,A=(h+p)/4,R=(b+m)/4,k=(g+f)/4;return x>v&&x>w?x<.01?(a=0,i=.707106781,r=.707106781):(a=Math.sqrt(x),i=A/a,r=R/a):v>w?v<.01?(a=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),a=A/i,r=k/i):w<.01?(a=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),a=R/r,i=k/r),this.set(a,i,r,t),this}let _=Math.sqrt((f-g)*(f-g)+(b-m)*(b-m)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(f-g)/_,this.y=(b-m)/_,this.z=(p-h)/_,this.w=Math.acos((d+u+c-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Be(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fd extends $a{constructor(e=1,t=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=a.depth,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:a.depth},r=new Rt(i);this.textures=[];const s=a.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const t={minFilter:oa,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=a,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,a=e.textures.length;t<a;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Xs(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ya extends Fd{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}}class Xc extends Rt{constructor(e=null,t=1,a=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jd extends Rt{constructor(e=null,t=1,a=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const a=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const r=a.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Jt):Jt.fromBufferAttribute(r,s),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ui.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),ui.copy(a.boundingBox)),ui.applyMatrix4(e.matrixWorld),this.union(ui)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bn),bi.subVectors(this.max,Bn),on.subVectors(e.a,Bn),cn.subVectors(e.b,Bn),ln.subVectors(e.c,Bn),ya.subVectors(cn,on),Ea.subVectors(ln,cn),La.subVectors(on,ln);let t=[0,-ya.z,ya.y,0,-Ea.z,Ea.y,0,-La.z,La.y,ya.z,0,-ya.x,Ea.z,0,-Ea.x,La.z,0,-La.x,-ya.y,ya.x,0,-Ea.y,Ea.x,0,-La.y,La.x,0];return!or(t,on,cn,ln,bi)||(t=[1,0,0,0,1,0,0,0,1],!or(t,on,cn,ln,bi))?!1:(pi.crossVectors(ya,Ea),t=[pi.x,pi.y,pi.z],or(t,on,cn,ln,bi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fa=[new U,new U,new U,new U,new U,new U,new U,new U],Jt=new U,ui=new en,on=new U,cn=new U,ln=new U,ya=new U,Ea=new U,La=new U,Bn=new U,bi=new U,pi=new U,Fa=new U;function or(n,e,t,a,i){for(let r=0,s=n.length-3;r<=s;r+=3){Fa.fromArray(n,r);const o=i.x*Math.abs(Fa.x)+i.y*Math.abs(Fa.y)+i.z*Math.abs(Fa.z),l=e.dot(Fa),d=t.dot(Fa),h=a.dot(Fa);if(Math.max(-Math.max(l,d,h),Math.min(l,d,h))>o)return!1}return!0}const Od=new en,zn=new U,cr=new U;class Nn{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const a=this.center;t!==void 0?a.copy(t):Od.setFromPoints(e).getCenter(a);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,a.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zn.subVectors(e,this.center);const t=zn.lengthSq();if(t>this.radius*this.radius){const a=Math.sqrt(t),i=(a-this.radius)*.5;this.center.addScaledVector(zn,i/a),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zn.copy(e.center).add(cr)),this.expandByPoint(zn.copy(e.center).sub(cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ua=new U,lr=new U,mi=new U,Sa=new U,dr=new U,gi=new U,hr=new U;class Yi{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ua)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ua.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ua.copy(this.origin).addScaledVector(this.direction,t),ua.distanceToSquared(e))}distanceSqToSegment(e,t,a,i){lr.copy(e).add(t).multiplyScalar(.5),mi.copy(t).sub(e).normalize(),Sa.copy(this.origin).sub(lr);const r=e.distanceTo(t)*.5,s=-this.direction.dot(mi),o=Sa.dot(this.direction),l=-Sa.dot(mi),d=Sa.lengthSq(),h=Math.abs(1-s*s);let b,p,u,g;if(h>0)if(b=s*l-o,p=s*o-l,g=r*h,b>=0)if(p>=-g)if(p<=g){const m=1/h;b*=m,p*=m,u=b*(b+s*p+2*o)+p*(s*b+p+2*l)+d}else p=r,b=Math.max(0,-(s*p+o)),u=-b*b+p*(p+2*l)+d;else p=-r,b=Math.max(0,-(s*p+o)),u=-b*b+p*(p+2*l)+d;else p<=-g?(b=Math.max(0,-(-s*r+o)),p=b>0?-r:Math.min(Math.max(-r,-l),r),u=-b*b+p*(p+2*l)+d):p<=g?(b=0,p=Math.min(Math.max(-r,-l),r),u=p*(p+2*l)+d):(b=Math.max(0,-(s*r+o)),p=b>0?r:Math.min(Math.max(-r,-l),r),u=-b*b+p*(p+2*l)+d);else p=s>0?-r:r,b=Math.max(0,-(s*p+o)),u=-b*b+p*(p+2*l)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,b),i&&i.copy(lr).addScaledVector(mi,p),u}intersectSphere(e,t){ua.subVectors(e.center,this.origin);const a=ua.dot(this.direction),i=ua.dot(ua)-a*a,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=a-s,l=a+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){const a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,i,r,s,o,l;const d=1/this.direction.x,h=1/this.direction.y,b=1/this.direction.z,p=this.origin;return d>=0?(a=(e.min.x-p.x)*d,i=(e.max.x-p.x)*d):(a=(e.max.x-p.x)*d,i=(e.min.x-p.x)*d),h>=0?(r=(e.min.y-p.y)*h,s=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,s=(e.min.y-p.y)*h),a>s||r>i||((r>a||isNaN(a))&&(a=r),(s<i||isNaN(i))&&(i=s),b>=0?(o=(e.min.z-p.z)*b,l=(e.max.z-p.z)*b):(o=(e.max.z-p.z)*b,l=(e.min.z-p.z)*b),a>l||o>i)||((o>a||a!==a)&&(a=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(a>=0?a:i,t)}intersectsBox(e){return this.intersectBox(e,ua)!==null}intersectTriangle(e,t,a,i,r){dr.subVectors(t,e),gi.subVectors(a,e),hr.crossVectors(dr,gi);let s=this.direction.dot(hr),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Sa.subVectors(this.origin,e);const l=o*this.direction.dot(gi.crossVectors(Sa,gi));if(l<0)return null;const d=o*this.direction.dot(dr.cross(Sa));if(d<0||l+d>s)return null;const h=-o*Sa.dot(hr);return h<0?null:this.at(h/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(e,t,a,i,r,s,o,l,d,h,b,p,u,g,m,f){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,i,r,s,o,l,d,h,b,p,u,g,m,f)}set(e,t,a,i,r,s,o,l,d,h,b,p,u,g,m,f){const c=this.elements;return c[0]=e,c[4]=t,c[8]=a,c[12]=i,c[1]=r,c[5]=s,c[9]=o,c[13]=l,c[2]=d,c[6]=h,c[10]=b,c[14]=p,c[3]=u,c[7]=g,c[11]=m,c[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){const t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,a=e.elements,i=1/dn.setFromMatrixColumn(e,0).length(),r=1/dn.setFromMatrixColumn(e,1).length(),s=1/dn.setFromMatrixColumn(e,2).length();return t[0]=a[0]*i,t[1]=a[1]*i,t[2]=a[2]*i,t[3]=0,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=0,t[8]=a[8]*s,t[9]=a[9]*s,t[10]=a[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,a=e.x,i=e.y,r=e.z,s=Math.cos(a),o=Math.sin(a),l=Math.cos(i),d=Math.sin(i),h=Math.cos(r),b=Math.sin(r);if(e.order==="XYZ"){const p=s*h,u=s*b,g=o*h,m=o*b;t[0]=l*h,t[4]=-l*b,t[8]=d,t[1]=u+g*d,t[5]=p-m*d,t[9]=-o*l,t[2]=m-p*d,t[6]=g+u*d,t[10]=s*l}else if(e.order==="YXZ"){const p=l*h,u=l*b,g=d*h,m=d*b;t[0]=p+m*o,t[4]=g*o-u,t[8]=s*d,t[1]=s*b,t[5]=s*h,t[9]=-o,t[2]=u*o-g,t[6]=m+p*o,t[10]=s*l}else if(e.order==="ZXY"){const p=l*h,u=l*b,g=d*h,m=d*b;t[0]=p-m*o,t[4]=-s*b,t[8]=g+u*o,t[1]=u+g*o,t[5]=s*h,t[9]=m-p*o,t[2]=-s*d,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const p=s*h,u=s*b,g=o*h,m=o*b;t[0]=l*h,t[4]=g*d-u,t[8]=p*d+m,t[1]=l*b,t[5]=m*d+p,t[9]=u*d-g,t[2]=-d,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const p=s*l,u=s*d,g=o*l,m=o*d;t[0]=l*h,t[4]=m-p*b,t[8]=g*b+u,t[1]=b,t[5]=s*h,t[9]=-o*h,t[2]=-d*h,t[6]=u*b+g,t[10]=p-m*b}else if(e.order==="XZY"){const p=s*l,u=s*d,g=o*l,m=o*d;t[0]=l*h,t[4]=-b,t[8]=d*h,t[1]=p*b+m,t[5]=s*h,t[9]=u*b-g,t[2]=g*b-u,t[6]=o*h,t[10]=m*b+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bd,e,zd)}lookAt(e,t,a){const i=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),wa.crossVectors(a,Lt),wa.lengthSq()===0&&(Math.abs(a.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),wa.crossVectors(a,Lt)),wa.normalize(),vi.crossVectors(Lt,wa),i[0]=wa.x,i[4]=vi.x,i[8]=Lt.x,i[1]=wa.y,i[5]=vi.y,i[9]=Lt.y,i[2]=wa.z,i[6]=vi.z,i[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,i=t.elements,r=this.elements,s=a[0],o=a[4],l=a[8],d=a[12],h=a[1],b=a[5],p=a[9],u=a[13],g=a[2],m=a[6],f=a[10],c=a[14],_=a[3],x=a[7],v=a[11],w=a[15],A=i[0],R=i[4],k=i[8],S=i[12],y=i[1],C=i[5],L=i[9],j=i[13],F=i[2],V=i[6],B=i[10],J=i[14],z=i[3],ne=i[7],oe=i[11],he=i[15];return r[0]=s*A+o*y+l*F+d*z,r[4]=s*R+o*C+l*V+d*ne,r[8]=s*k+o*L+l*B+d*oe,r[12]=s*S+o*j+l*J+d*he,r[1]=h*A+b*y+p*F+u*z,r[5]=h*R+b*C+p*V+u*ne,r[9]=h*k+b*L+p*B+u*oe,r[13]=h*S+b*j+p*J+u*he,r[2]=g*A+m*y+f*F+c*z,r[6]=g*R+m*C+f*V+c*ne,r[10]=g*k+m*L+f*B+c*oe,r[14]=g*S+m*j+f*J+c*he,r[3]=_*A+x*y+v*F+w*z,r[7]=_*R+x*C+v*V+w*ne,r[11]=_*k+x*L+v*B+w*oe,r[15]=_*S+x*j+v*J+w*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],d=e[13],h=e[2],b=e[6],p=e[10],u=e[14],g=e[3],m=e[7],f=e[11],c=e[15];return g*(+r*l*b-i*d*b-r*o*p+a*d*p+i*o*u-a*l*u)+m*(+t*l*u-t*d*p+r*s*p-i*s*u+i*d*h-r*l*h)+f*(+t*d*b-t*o*u-r*s*b+a*s*u+r*o*h-a*d*h)+c*(-i*o*h-t*l*b+t*o*p+i*s*b-a*s*p+a*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=a),this}invert(){const e=this.elements,t=e[0],a=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],d=e[7],h=e[8],b=e[9],p=e[10],u=e[11],g=e[12],m=e[13],f=e[14],c=e[15],_=b*f*d-m*p*d+m*l*u-o*f*u-b*l*c+o*p*c,x=g*p*d-h*f*d-g*l*u+s*f*u+h*l*c-s*p*c,v=h*m*d-g*b*d+g*o*u-s*m*u-h*o*c+s*b*c,w=g*b*l-h*m*l-g*o*p+s*m*p+h*o*f-s*b*f,A=t*_+a*x+i*v+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=_*R,e[1]=(m*p*r-b*f*r-m*i*u+a*f*u+b*i*c-a*p*c)*R,e[2]=(o*f*r-m*l*r+m*i*d-a*f*d-o*i*c+a*l*c)*R,e[3]=(b*l*r-o*p*r-b*i*d+a*p*d+o*i*u-a*l*u)*R,e[4]=x*R,e[5]=(h*f*r-g*p*r+g*i*u-t*f*u-h*i*c+t*p*c)*R,e[6]=(g*l*r-s*f*r-g*i*d+t*f*d+s*i*c-t*l*c)*R,e[7]=(s*p*r-h*l*r+h*i*d-t*p*d-s*i*u+t*l*u)*R,e[8]=v*R,e[9]=(g*b*r-h*m*r-g*a*u+t*m*u+h*a*c-t*b*c)*R,e[10]=(s*m*r-g*o*r+g*a*d-t*m*d-s*a*c+t*o*c)*R,e[11]=(h*o*r-s*b*r-h*a*d+t*b*d+s*a*u-t*o*u)*R,e[12]=w*R,e[13]=(h*m*i-g*b*i+g*a*p-t*m*p-h*a*f+t*b*f)*R,e[14]=(g*o*i-s*m*i-g*a*l+t*m*l+s*a*f-t*o*f)*R,e[15]=(s*b*i-h*o*i+h*a*l-t*b*l-s*a*p+t*o*p)*R,this}scale(e){const t=this.elements,a=e.x,i=e.y,r=e.z;return t[0]*=a,t[4]*=i,t[8]*=r,t[1]*=a,t[5]*=i,t[9]*=r,t[2]*=a,t[6]*=i,t[10]*=r,t[3]*=a,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,i))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),i=Math.sin(t),r=1-a,s=e.x,o=e.y,l=e.z,d=r*s,h=r*o;return this.set(d*s+a,d*o-i*l,d*l+i*o,0,d*o+i*l,h*o+a,h*l-i*s,0,d*l-i*o,h*l+i*s,r*l*l+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,i,r,s){return this.set(1,a,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,a){const i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,d=r+r,h=s+s,b=o+o,p=r*d,u=r*h,g=r*b,m=s*h,f=s*b,c=o*b,_=l*d,x=l*h,v=l*b,w=a.x,A=a.y,R=a.z;return i[0]=(1-(m+c))*w,i[1]=(u+v)*w,i[2]=(g-x)*w,i[3]=0,i[4]=(u-v)*A,i[5]=(1-(p+c))*A,i[6]=(f+_)*A,i[7]=0,i[8]=(g+x)*R,i[9]=(f-_)*R,i[10]=(1-(p+m))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,a){const i=this.elements;let r=dn.set(i[0],i[1],i[2]).length();const s=dn.set(i[4],i[5],i[6]).length(),o=dn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Yt.copy(this);const d=1/r,h=1/s,b=1/o;return Yt.elements[0]*=d,Yt.elements[1]*=d,Yt.elements[2]*=d,Yt.elements[4]*=h,Yt.elements[5]*=h,Yt.elements[6]*=h,Yt.elements[8]*=b,Yt.elements[9]*=b,Yt.elements[10]*=b,t.setFromRotationMatrix(Yt),a.x=r,a.y=s,a.z=o,this}makePerspective(e,t,a,i,r,s,o=la,l=!1){const d=this.elements,h=2*r/(t-e),b=2*r/(a-i),p=(t+e)/(t-e),u=(a+i)/(a-i);let g,m;if(l)g=r/(s-r),m=s*r/(s-r);else if(o===la)g=-(s+r)/(s-r),m=-2*s*r/(s-r);else if(o===Vi)g=-s/(s-r),m=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return d[0]=h,d[4]=0,d[8]=p,d[12]=0,d[1]=0,d[5]=b,d[9]=u,d[13]=0,d[2]=0,d[6]=0,d[10]=g,d[14]=m,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,a,i,r,s,o=la,l=!1){const d=this.elements,h=2/(t-e),b=2/(a-i),p=-(t+e)/(t-e),u=-(a+i)/(a-i);let g,m;if(l)g=1/(s-r),m=s/(s-r);else if(o===la)g=-2/(s-r),m=-(s+r)/(s-r);else if(o===Vi)g=-1/(s-r),m=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return d[0]=h,d[4]=0,d[8]=0,d[12]=p,d[1]=0,d[5]=b,d[9]=0,d[13]=u,d[2]=0,d[6]=0,d[10]=g,d[14]=m,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,a=e.elements;for(let i=0;i<16;i++)if(t[i]!==a[i])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}}const dn=new U,Yt=new We,Bd=new U(0,0,0),zd=new U(1,1,1),wa=new U,vi=new U,Lt=new U,Ro=new We,Co=new Ja;class ta{constructor(e=0,t=0,a=0,i=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,i=this._order){return this._x=e,this._y=t,this._z=a,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){const i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],d=i[5],h=i[9],b=i[2],p=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(p,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-b,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-b,u),this._z=Math.atan2(-s,d)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(b,-1,1)),Math.abs(b)<.9999999?(this._x=Math.atan2(p,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,d));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-b,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Be(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,d),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return Ro.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ro,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Co.setFromEuler(this),this.setFromQuaternion(Co,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class Ks{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hd=0;const ko=new U,hn=new Ja,ba=new We,_i=new U,Hn=new U,Gd=new U,Vd=new Ja,Do=new U(1,0,0),Io=new U(0,1,0),Uo=new U(0,0,1),Po={type:"added"},Wd={type:"removed"},fn={type:"childadded",child:null},fr={type:"childremoved",child:null};class bt extends $a{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new U,t=new ta,a=new Ja,i=new U(1,1,1);function r(){a.setFromEuler(t,!1)}function s(){t.setFromQuaternion(a,void 0,!1)}t._onChange(r),a._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new We},normalMatrix:{value:new Fe}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hn.setFromAxisAngle(e,t),this.quaternion.multiply(hn),this}rotateOnWorldAxis(e,t){return hn.setFromAxisAngle(e,t),this.quaternion.premultiply(hn),this}rotateX(e){return this.rotateOnAxis(Do,e)}rotateY(e){return this.rotateOnAxis(Io,e)}rotateZ(e){return this.rotateOnAxis(Uo,e)}translateOnAxis(e,t){return ko.copy(e).applyQuaternion(this.quaternion),this.position.add(ko.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Do,e)}translateY(e){return this.translateOnAxis(Io,e)}translateZ(e){return this.translateOnAxis(Uo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?_i.copy(e):_i.set(e,t,a);const i=this.parent;this.updateWorldMatrix(!0,!1),Hn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(Hn,_i,this.up):ba.lookAt(_i,Hn,this.up),this.quaternion.setFromRotationMatrix(ba),i&&(ba.extractRotation(i.matrixWorld),hn.setFromRotationMatrix(ba),this.quaternion.premultiply(hn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Po),fn.child=e,this.dispatchEvent(fn),fn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wd),fr.child=e,this.dispatchEvent(fr),fr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ba.multiply(e.parent.matrixWorld)),e.applyMatrix4(ba),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Po),fn.child=e,this.dispatchEvent(fn),fn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,i=this.children.length;a<i;a++){const s=this.children[a].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hn,e,Gd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hn,Vd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let a=0,i=t.length;a<i;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let a=0,i=t.length;a<i;a++)t[a].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let a=0,i=t.length;a<i;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let d=0,h=l.length;d<h;d++){const b=l[d];r(e.shapes,b)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,d=this.material.length;l<d;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),d=s(e.textures),h=s(e.images),b=s(e.shapes),p=s(e.skeletons),u=s(e.animations),g=s(e.nodes);o.length>0&&(a.geometries=o),l.length>0&&(a.materials=l),d.length>0&&(a.textures=d),h.length>0&&(a.images=h),b.length>0&&(a.shapes=b),p.length>0&&(a.skeletons=p),u.length>0&&(a.animations=u),g.length>0&&(a.nodes=g)}return a.object=i,a;function s(o){const l=[];for(const d in o){const h=o[d];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){const i=e.children[a];this.add(i.clone())}return this}}bt.DEFAULT_UP=new U(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zt=new U,pa=new U,ur=new U,ma=new U,un=new U,bn=new U,No=new U,br=new U,pr=new U,mr=new U,gr=new $e,vr=new $e,_r=new $e;class Qt{constructor(e=new U,t=new U,a=new U){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,i){i.subVectors(a,t),Zt.subVectors(e,t),i.cross(Zt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,a,i,r){Zt.subVectors(i,t),pa.subVectors(a,t),ur.subVectors(e,t);const s=Zt.dot(Zt),o=Zt.dot(pa),l=Zt.dot(ur),d=pa.dot(pa),h=pa.dot(ur),b=s*d-o*o;if(b===0)return r.set(0,0,0),null;const p=1/b,u=(d*l-o*h)*p,g=(s*h-o*l)*p;return r.set(1-u-g,g,u)}static containsPoint(e,t,a,i){return this.getBarycoord(e,t,a,i,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(e,t,a,i,r,s,o,l){return this.getBarycoord(e,t,a,i,ma)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ma.x),l.addScaledVector(s,ma.y),l.addScaledVector(o,ma.z),l)}static getInterpolatedAttribute(e,t,a,i,r,s){return gr.setScalar(0),vr.setScalar(0),_r.setScalar(0),gr.fromBufferAttribute(e,t),vr.fromBufferAttribute(e,a),_r.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(gr,r.x),s.addScaledVector(vr,r.y),s.addScaledVector(_r,r.z),s}static isFrontFacing(e,t,a,i){return Zt.subVectors(a,t),pa.subVectors(e,t),Zt.cross(pa).dot(i)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,i){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,a,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Zt.cross(pa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,i,r){return Qt.getInterpolation(e,this.a,this.b,this.c,t,a,i,r)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const a=this.a,i=this.b,r=this.c;let s,o;un.subVectors(i,a),bn.subVectors(r,a),br.subVectors(e,a);const l=un.dot(br),d=bn.dot(br);if(l<=0&&d<=0)return t.copy(a);pr.subVectors(e,i);const h=un.dot(pr),b=bn.dot(pr);if(h>=0&&b<=h)return t.copy(i);const p=l*b-h*d;if(p<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(a).addScaledVector(un,s);mr.subVectors(e,r);const u=un.dot(mr),g=bn.dot(mr);if(g>=0&&u<=g)return t.copy(r);const m=u*d-l*g;if(m<=0&&d>=0&&g<=0)return o=d/(d-g),t.copy(a).addScaledVector(bn,o);const f=h*g-u*b;if(f<=0&&b-h>=0&&u-g>=0)return No.subVectors(r,i),o=(b-h)/(b-h+(u-g)),t.copy(i).addScaledVector(No,o);const c=1/(f+m+p);return s=m*c,o=p*c,t.copy(a).addScaledVector(un,s).addScaledVector(bn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Aa={h:0,s:0,l:0},xi={h:0,s:0,l:0};function xr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ne{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,a,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=a,Xe.colorSpaceToWorking(this,i),this}setHSL(e,t,a,i=Xe.workingColorSpace){if(e=qs(e,1),t=Be(t,0,1),a=Be(a,0,1),t===0)this.r=this.g=this.b=a;else{const r=a<=.5?a*(1+t):a+t-a*t,s=2*a-r;this.r=xr(s,r,e+1/3),this.g=xr(s,r,e),this.b=xr(s,r,e-1/3)}return Xe.colorSpaceToWorking(this,i),this}setStyle(e,t=Ut){function a(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return a(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return a(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return a(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const a=Kc[e.toLowerCase()];return a!==void 0?this.setHex(a,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Xe.workingToColorSpace(yt.copy(this),e),Math.round(Be(yt.r*255,0,255))*65536+Math.round(Be(yt.g*255,0,255))*256+Math.round(Be(yt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(yt.copy(this),t);const a=yt.r,i=yt.g,r=yt.b,s=Math.max(a,i,r),o=Math.min(a,i,r);let l,d;const h=(o+s)/2;if(o===s)l=0,d=0;else{const b=s-o;switch(d=h<=.5?b/(s+o):b/(2-s-o),s){case a:l=(i-r)/b+(i<r?6:0);break;case i:l=(r-a)/b+2;break;case r:l=(a-i)/b+4;break}l/=6}return e.h=l,e.s=d,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Ut){Xe.workingToColorSpace(yt.copy(this),e);const t=yt.r,a=yt.g,i=yt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(i*255)})`}offsetHSL(e,t,a){return this.getHSL(Aa),this.setHSL(Aa.h+e,Aa.s+t,Aa.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(Aa),e.getHSL(xi);const a=Qn(Aa.h,xi.h,t),i=Qn(Aa.s,xi.s,t),r=Qn(Aa.l,xi.l,t);return this.setHSL(a,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,a=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*a+r[6]*i,this.g=r[1]*t+r[4]*a+r[7]*i,this.b=r[2]*t+r[5]*a+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Ne;Ne.NAMES=Kc;let qd=0;class tn extends $a{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=An,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fr,this.blendDst=jr,this.blendEquation=Ga,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Rn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rn,this.stencilZFail=rn,this.stencilZPass=rn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const a=e[t];if(a===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(a):i&&i.isVector3&&a&&a.isVector3?i.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==An&&(a.blending=this.blending),this.side!==Ia&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Fr&&(a.blendSrc=this.blendSrc),this.blendDst!==jr&&(a.blendDst=this.blendDst),this.blendEquation!==Ga&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Rn&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xo&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rn&&(a.stencilFail=this.stencilFail),this.stencilZFail!==rn&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==rn&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function i(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(a.textures=r),s.length>0&&(a.images=s)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let a=null;if(t!==null){const i=t.length;a=new Array(i);for(let r=0;r!==i;++r)a[r]=t[r].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ci extends tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=Fs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new U,Mi=new De;let Xd=0;class _t{constructor(e,t,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=Mo,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[a+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)Mi.fromBufferAttribute(this,t),Mi.applyMatrix3(e),this.setXY(t,Mi.x,Mi.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=Mn(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=wt(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),a=wt(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),a=wt(a,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=i,this}setXYZW(e,t,a,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),a=wt(a,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mo&&(e.usage=this.usage),e}}class Jc extends _t{constructor(e,t,a){super(new Uint16Array(e),t,a)}}class Yc extends _t{constructor(e,t,a){super(new Uint32Array(e),t,a)}}class Ct extends _t{constructor(e,t,a){super(new Float32Array(e),t,a)}}let Kd=0;const Kt=new We,Mr=new bt,pn=new U,Ft=new en,Gn=new en,vt=new U;class Wt extends $a{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qc(e)?Yc:Jc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const r=new Fe().getNormalMatrix(e);a.applyNormalMatrix(r),a.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,a){return Kt.makeTranslation(e,t,a),this.applyMatrix4(Kt),this}scale(e,t,a){return Kt.makeScale(e,t,a),this.applyMatrix4(Kt),this}lookAt(e){return Mr.lookAt(e),Mr.updateMatrix(),this.applyMatrix4(Mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pn).negate(),this.translate(pn.x,pn.y,pn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const a=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];a.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ct(a,3))}else{const a=Math.min(e.length,t.count);for(let i=0;i<a;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,i=t.length;a<i;a++){const r=t[a];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const a=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Gn.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Ft.min,Gn.min),Ft.expandByPoint(vt),vt.addVectors(Ft.max,Gn.max),Ft.expandByPoint(vt)):(Ft.expandByPoint(Gn.min),Ft.expandByPoint(Gn.max))}Ft.getCenter(a);let i=0;for(let r=0,s=e.count;r<s;r++)vt.fromBufferAttribute(e,r),i=Math.max(i,a.distanceToSquared(vt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let d=0,h=o.count;d<h;d++)vt.fromBufferAttribute(o,d),l&&(pn.fromBufferAttribute(e,d),vt.add(pn)),i=Math.max(i,a.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*a.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let k=0;k<a.count;k++)o[k]=new U,l[k]=new U;const d=new U,h=new U,b=new U,p=new De,u=new De,g=new De,m=new U,f=new U;function c(k,S,y){d.fromBufferAttribute(a,k),h.fromBufferAttribute(a,S),b.fromBufferAttribute(a,y),p.fromBufferAttribute(r,k),u.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(d),b.sub(d),u.sub(p),g.sub(p);const C=1/(u.x*g.y-g.x*u.y);isFinite(C)&&(m.copy(h).multiplyScalar(g.y).addScaledVector(b,-u.y).multiplyScalar(C),f.copy(b).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(C),o[k].add(m),o[S].add(m),o[y].add(m),l[k].add(f),l[S].add(f),l[y].add(f))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let k=0,S=_.length;k<S;++k){const y=_[k],C=y.start,L=y.count;for(let j=C,F=C+L;j<F;j+=3)c(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const x=new U,v=new U,w=new U,A=new U;function R(k){w.fromBufferAttribute(i,k),A.copy(w);const S=o[k];x.copy(S),x.sub(w.multiplyScalar(w.dot(S))).normalize(),v.crossVectors(A,S);const C=v.dot(l[k])<0?-1:1;s.setXYZW(k,x.x,x.y,x.z,C)}for(let k=0,S=_.length;k<S;++k){const y=_[k],C=y.start,L=y.count;for(let j=C,F=C+L;j<F;j+=3)R(e.getX(j+0)),R(e.getX(j+1)),R(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let p=0,u=a.count;p<u;p++)a.setXYZ(p,0,0,0);const i=new U,r=new U,s=new U,o=new U,l=new U,d=new U,h=new U,b=new U;if(e)for(let p=0,u=e.count;p<u;p+=3){const g=e.getX(p+0),m=e.getX(p+1),f=e.getX(p+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,f),h.subVectors(s,r),b.subVectors(i,r),h.cross(b),o.fromBufferAttribute(a,g),l.fromBufferAttribute(a,m),d.fromBufferAttribute(a,f),o.add(h),l.add(h),d.add(h),a.setXYZ(g,o.x,o.y,o.z),a.setXYZ(m,l.x,l.y,l.z),a.setXYZ(f,d.x,d.y,d.z)}else for(let p=0,u=t.count;p<u;p+=3)i.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),h.subVectors(s,r),b.subVectors(i,r),h.cross(b),a.setXYZ(p+0,h.x,h.y,h.z),a.setXYZ(p+1,h.x,h.y,h.z),a.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const d=o.array,h=o.itemSize,b=o.normalized,p=new d.constructor(l.length*h);let u=0,g=0;for(let m=0,f=l.length;m<f;m++){o.isInterleavedBufferAttribute?u=l[m]*o.data.stride+o.offset:u=l[m]*h;for(let c=0;c<h;c++)p[g++]=d[u++]}return new _t(p,h,b)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,a=this.index.array,i=this.attributes;for(const o in i){const l=i[o],d=e(l,a);t.setAttribute(o,d)}const r=this.morphAttributes;for(const o in r){const l=[],d=r[o];for(let h=0,b=d.length;h<b;h++){const p=d[h],u=e(p,a);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const d=s[o];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const a=this.attributes;for(const l in a){const d=a[l];e.data.attributes[l]=d.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const d=this.morphAttributes[l],h=[];for(let b=0,p=d.length;b<p;b++){const u=d[b];h.push(u.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const i=e.attributes;for(const d in i){const h=i[d];this.setAttribute(d,h.clone(t))}const r=e.morphAttributes;for(const d in r){const h=[],b=r[d];for(let p=0,u=b.length;p<u;p++)h.push(b[p].clone(t));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let d=0,h=s.length;d<h;d++){const b=s[d];this.addGroup(b.start,b.count,b.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lo=new We,ja=new Yi,yi=new Nn,Fo=new U,Ei=new U,Si=new U,wi=new U,yr=new U,Ai=new U,jo=new U,Ti=new U;class rt extends bt{constructor(e=new Wt,t=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const i=t[a[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const a=this.geometry,i=a.attributes.position,r=a.morphAttributes.position,s=a.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ai.set(0,0,0);for(let l=0,d=r.length;l<d;l++){const h=o[l],b=r[l];h!==0&&(yr.fromBufferAttribute(b,e),s?Ai.addScaledVector(yr,h):Ai.addScaledVector(yr.sub(t),h))}t.add(Ai)}return t}raycast(e,t){const a=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),yi.copy(a.boundingSphere),yi.applyMatrix4(r),ja.copy(e.ray).recast(e.near),!(yi.containsPoint(ja.origin)===!1&&(ja.intersectSphere(yi,Fo)===null||ja.origin.distanceToSquared(Fo)>(e.far-e.near)**2))&&(Lo.copy(r).invert(),ja.copy(e.ray).applyMatrix4(Lo),!(a.boundingBox!==null&&ja.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,ja)))}_computeIntersections(e,t,a){let i;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,d=r.attributes.uv,h=r.attributes.uv1,b=r.attributes.normal,p=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,m=p.length;g<m;g++){const f=p[g],c=s[f.materialIndex],_=Math.max(f.start,u.start),x=Math.min(o.count,Math.min(f.start+f.count,u.start+u.count));for(let v=_,w=x;v<w;v+=3){const A=o.getX(v),R=o.getX(v+1),k=o.getX(v+2);i=Ri(this,c,e,a,d,h,b,A,R,k),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),m=Math.min(o.count,u.start+u.count);for(let f=g,c=m;f<c;f+=3){const _=o.getX(f),x=o.getX(f+1),v=o.getX(f+2);i=Ri(this,s,e,a,d,h,b,_,x,v),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,m=p.length;g<m;g++){const f=p[g],c=s[f.materialIndex],_=Math.max(f.start,u.start),x=Math.min(l.count,Math.min(f.start+f.count,u.start+u.count));for(let v=_,w=x;v<w;v+=3){const A=v,R=v+1,k=v+2;i=Ri(this,c,e,a,d,h,b,A,R,k),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),m=Math.min(l.count,u.start+u.count);for(let f=g,c=m;f<c;f+=3){const _=f,x=f+1,v=f+2;i=Ri(this,s,e,a,d,h,b,_,x,v),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function Jd(n,e,t,a,i,r,s,o){let l;if(e.side===Tt?l=a.intersectTriangle(s,r,i,!0,o):l=a.intersectTriangle(i,r,s,e.side===Ia,o),l===null)return null;Ti.copy(o),Ti.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(Ti);return d<t.near||d>t.far?null:{distance:d,point:Ti.clone(),object:n}}function Ri(n,e,t,a,i,r,s,o,l,d){n.getVertexPosition(o,Ei),n.getVertexPosition(l,Si),n.getVertexPosition(d,wi);const h=Jd(n,e,t,a,Ei,Si,wi,jo);if(h){const b=new U;Qt.getBarycoord(jo,Ei,Si,wi,b),i&&(h.uv=Qt.getInterpolatedAttribute(i,o,l,d,b,new De)),r&&(h.uv1=Qt.getInterpolatedAttribute(r,o,l,d,b,new De)),s&&(h.normal=Qt.getInterpolatedAttribute(s,o,l,d,b,new U),h.normal.dot(a.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c:d,normal:new U,materialIndex:0};Qt.getNormal(Ei,Si,wi,p.normal),h.face=p,h.barycoord=b}return h}class an extends Wt{constructor(e=1,t=1,a=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],d=[],h=[],b=[];let p=0,u=0;g("z","y","x",-1,-1,a,t,e,s,r,0),g("z","y","x",1,-1,a,t,-e,s,r,1),g("x","z","y",1,1,e,a,t,i,s,2),g("x","z","y",1,-1,e,a,-t,i,s,3),g("x","y","z",1,-1,e,t,a,i,r,4),g("x","y","z",-1,-1,e,t,-a,i,r,5),this.setIndex(l),this.setAttribute("position",new Ct(d,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(b,2));function g(m,f,c,_,x,v,w,A,R,k,S){const y=v/R,C=w/k,L=v/2,j=w/2,F=A/2,V=R+1,B=k+1;let J=0,z=0;const ne=new U;for(let oe=0;oe<B;oe++){const he=oe*C-j;for(let we=0;we<V;we++){const Ge=we*y-L;ne[m]=Ge*_,ne[f]=he*x,ne[c]=F,d.push(ne.x,ne.y,ne.z),ne[m]=0,ne[f]=0,ne[c]=A>0?1:-1,h.push(ne.x,ne.y,ne.z),b.push(we/R),b.push(1-oe/k),J+=1}}for(let oe=0;oe<k;oe++)for(let he=0;he<R;he++){const we=p+he+V*oe,Ge=p+he+V*(oe+1),Je=p+(he+1)+V*(oe+1),He=p+(he+1)+V*oe;l.push(we,Ge,He),l.push(Ge,Je,He),z+=6}o.addGroup(u,z,S),u+=z,p+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function In(n){const e={};for(const t in n){e[t]={};for(const a in n[t]){const i=n[t][a];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=i.clone():Array.isArray(i)?e[t][a]=i.slice():e[t][a]=i}}return e}function At(n){const e={};for(let t=0;t<n.length;t++){const a=In(n[t]);for(const i in a)e[i]=a[i]}return e}function Yd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Zd={clone:In,merge:At};var Qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ua extends tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qd,this.fragmentShader=$d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=In(e.uniforms),this.uniformsGroups=Yd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const a={};for(const i in this.extensions)this.extensions[i]===!0&&(a[i]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}}class Qc extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=la,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ta=new U,Oo=new De,Bo=new De;class Bt extends Qc{constructor(e=50,t=1,a=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ii*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ii*2*Math.atan(Math.tan(Zn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){Ta.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ta.x,Ta.y).multiplyScalar(-e/Ta.z),Ta.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ta.x,Ta.y).multiplyScalar(-e/Ta.z)}getViewSize(e,t){return this.getViewBounds(e,Oo,Bo),t.subVectors(Bo,Oo)}setViewOffset(e,t,a,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zn*.5*this.fov)/this.zoom,a=2*t,i=this.aspect*a,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,d=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*a/d,i*=s.width/l,a*=s.height/d}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mn=-90,gn=1;class eh extends bt{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Bt(mn,gn,e,t);i.layers=this.layers,this.add(i);const r=new Bt(mn,gn,e,t);r.layers=this.layers,this.add(r);const s=new Bt(mn,gn,e,t);s.layers=this.layers,this.add(s);const o=new Bt(mn,gn,e,t);o.layers=this.layers,this.add(o);const l=new Bt(mn,gn,e,t);l.layers=this.layers,this.add(l);const d=new Bt(mn,gn,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[a,i,r,s,o,l]=t;for(const d of t)this.remove(d);if(e===la)a.up.set(0,1,0),a.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vi)a.up.set(0,-1,0),a.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,d,h]=this.children,b=e.getRenderTarget(),p=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const m=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,i),e.render(t,r),e.setRenderTarget(a,1,i),e.render(t,s),e.setRenderTarget(a,2,i),e.render(t,o),e.setRenderTarget(a,3,i),e.render(t,l),e.setRenderTarget(a,4,i),e.render(t,d),a.texture.generateMipmaps=m,e.setRenderTarget(a,5,i),e.render(t,h),e.setRenderTarget(b,p,u),e.xr.enabled=g,a.texture.needsPMREMUpdate=!0}}class $c extends Rt{constructor(e=[],t=Cn,a,i,r,s,o,l,d,h){super(e,t,a,i,r,s,o,l,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class th extends Ya{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},i=[a,a,a,a,a,a];this.texture=new $c(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new an(5,5,5),r=new Ua({name:"CubemapFromEquirect",uniforms:In(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Tt,blending:ka});r.uniforms.tEquirect.value=t;const s=new rt(i,r),o=t.minFilter;return t.minFilter===qa&&(t.minFilter=oa),new eh(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,a=!0,i=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,a,i);e.setRenderTarget(r)}}class Jn extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ah={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let i=null,r=null,s=null;const o=this._targetRay,l=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){s=!0;for(const m of e.hand.values()){const f=t.getJointPose(m,a),c=this._getHandJoint(d,m);f!==null&&(c.matrix.fromArray(f.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=f.radius),c.visible=f!==null}const h=d.joints["index-finger-tip"],b=d.joints["thumb-tip"],p=h.position.distanceTo(b.position),u=.02,g=.005;d.inputState.pinching&&p>u+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&p<=u-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,a),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ah)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),d!==null&&(d.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const a=new Jn;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}}class Js{constructor(e,t=1,a=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=a}clone(){return new Js(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class el extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nh extends Rt{constructor(e=null,t=1,a=1,i,r,s,o,l,d=Ht,h=Ht,b,p){super(null,s,o,l,d,h,i,r,b,p),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zo extends _t{constructor(e,t,a,i=1){super(e,t,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vn=new We,Ho=new We,Ci=[],Go=new en,ih=new We,Vn=new rt,Wn=new Nn;class rh extends rt{constructor(e,t,a){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zo(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<a;i++)this.setMatrixAt(i,ih)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new en),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,vn),Go.copy(e.boundingBox).applyMatrix4(vn),this.boundingBox.union(Go)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,vn),Wn.copy(e.boundingSphere).applyMatrix4(vn),this.boundingSphere.union(Wn)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const a=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=a.length+1,s=e*r+1;for(let o=0;o<a.length;o++)a[o]=i[s+o]}raycast(e,t){const a=this.matrixWorld,i=this.count;if(Vn.geometry=this.geometry,Vn.material=this.material,Vn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wn.copy(this.boundingSphere),Wn.applyMatrix4(a),e.ray.intersectsSphere(Wn)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,vn),Ho.multiplyMatrices(a,vn),Vn.matrixWorld=Ho,Vn.raycast(e,Ci);for(let s=0,o=Ci.length;s<o;s++){const l=Ci[s];l.instanceId=r,l.object=this,t.push(l)}Ci.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const a=t.morphTargetInfluences,i=a.length+1;this.morphTexture===null&&(this.morphTexture=new nh(new Float32Array(i*this.count),i,this.count,zs,ca));const r=this.morphTexture.source.data.data;let s=0;for(let d=0;d<a.length;d++)s+=a[d];const o=this.geometry.morphTargetsRelative?1:1-s,l=i*e;r[l]=o,r.set(a,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Sr=new U,sh=new U,oh=new Fe;class Ra{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,i){return this.normal.set(e,t,a),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){const i=Sr.subVectors(a,t).cross(sh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const a=e.delta(Sr),i=this.normal.dot(a);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(a,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const a=t||oh.getNormalMatrix(e),i=this.coplanarPoint(Sr).applyMatrix4(e),r=this.normal.applyMatrix3(a).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oa=new Nn,ch=new De(.5,.5),ki=new U;class Ys{constructor(e=new Ra,t=new Ra,a=new Ra,i=new Ra,r=new Ra,s=new Ra){this.planes=[e,t,a,i,r,s]}set(e,t,a,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(a),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=la,a=!1){const i=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],d=r[3],h=r[4],b=r[5],p=r[6],u=r[7],g=r[8],m=r[9],f=r[10],c=r[11],_=r[12],x=r[13],v=r[14],w=r[15];if(i[0].setComponents(d-s,u-h,c-g,w-_).normalize(),i[1].setComponents(d+s,u+h,c+g,w+_).normalize(),i[2].setComponents(d+o,u+b,c+m,w+x).normalize(),i[3].setComponents(d-o,u-b,c-m,w-x).normalize(),a)i[4].setComponents(l,p,f,v).normalize(),i[5].setComponents(d-l,u-p,c-f,w-v).normalize();else if(i[4].setComponents(d-l,u-p,c-f,w-v).normalize(),t===la)i[5].setComponents(d+l,u+p,c+f,w+v).normalize();else if(t===Vi)i[5].setComponents(l,p,f,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oa)}intersectsSprite(e){Oa.center.set(0,0,0);const t=ch.distanceTo(e.center);return Oa.radius=.7071067811865476+t,Oa.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oa)}intersectsSphere(e){const t=this.planes,a=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(a)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let a=0;a<6;a++){const i=t[a];if(ki.x=i.normal.x>0?e.max.x:e.min.x,ki.y=i.normal.y>0?e.max.y:e.min.y,ki.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ki)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zs extends tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qi=new U,Xi=new U,Vo=new We,qn=new Yi,Di=new Nn,wr=new U,Wo=new U;class lh extends bt{constructor(e=new Wt,t=new Zs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,a=[0];for(let i=1,r=t.count;i<r;i++)qi.fromBufferAttribute(t,i-1),Xi.fromBufferAttribute(t,i),a[i]=a[i-1],a[i]+=qi.distanceTo(Xi);e.setAttribute("lineDistance",new Ct(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const a=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Di.copy(a.boundingSphere),Di.applyMatrix4(i),Di.radius+=r,e.ray.intersectsSphere(Di)===!1)return;Vo.copy(i).invert(),qn.copy(e.ray).applyMatrix4(Vo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,d=this.isLineSegments?2:1,h=a.index,p=a.attributes.position;if(h!==null){const u=Math.max(0,s.start),g=Math.min(h.count,s.start+s.count);for(let m=u,f=g-1;m<f;m+=d){const c=h.getX(m),_=h.getX(m+1),x=Ii(this,e,qn,l,c,_,m);x&&t.push(x)}if(this.isLineLoop){const m=h.getX(g-1),f=h.getX(u),c=Ii(this,e,qn,l,m,f,g-1);c&&t.push(c)}}else{const u=Math.max(0,s.start),g=Math.min(p.count,s.start+s.count);for(let m=u,f=g-1;m<f;m+=d){const c=Ii(this,e,qn,l,m,m+1,m);c&&t.push(c)}if(this.isLineLoop){const m=Ii(this,e,qn,l,g-1,u,g-1);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const i=t[a[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ii(n,e,t,a,i,r,s){const o=n.geometry.attributes.position;if(qi.fromBufferAttribute(o,i),Xi.fromBufferAttribute(o,r),t.distanceSqToSegment(qi,Xi,wr,Wo)>a)return;wr.applyMatrix4(n.matrixWorld);const d=e.ray.origin.distanceTo(wr);if(!(d<e.near||d>e.far))return{distance:d,point:Wo.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const qo=new U,Xo=new U;class tl extends lh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,a=[];for(let i=0,r=t.count;i<r;i+=2)qo.fromBufferAttribute(t,i),Xo.fromBufferAttribute(t,i+1),a[i]=i===0?0:a[i-1],a[i+1]=a[i]+qo.distanceTo(Xo);e.setAttribute("lineDistance",new Ct(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class al extends Rt{constructor(e,t,a=Ka,i,r,s,o=Ht,l=Ht,d,h=ai,b=1){if(h!==ai&&h!==ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:b};super(p,i,r,s,o,l,h,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nl extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ln extends Wt{constructor(e=1,t=1,a=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:i};const r=e/2,s=t/2,o=Math.floor(a),l=Math.floor(i),d=o+1,h=l+1,b=e/o,p=t/l,u=[],g=[],m=[],f=[];for(let c=0;c<h;c++){const _=c*p-s;for(let x=0;x<d;x++){const v=x*b-r;g.push(v,-_,0),m.push(0,0,1),f.push(x/o),f.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<o;_++){const x=_+d*c,v=_+d*(c+1),w=_+1+d*(c+1),A=_+1+d*c;u.push(x,v,A),u.push(v,w,A)}this.setIndex(u),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(m,3)),this.setAttribute("uv",new Ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qs extends Wt{constructor(e=.5,t=1,a=32,i=1,r=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:a,phiSegments:i,thetaStart:r,thetaLength:s},a=Math.max(3,a),i=Math.max(1,i);const o=[],l=[],d=[],h=[];let b=e;const p=(t-e)/i,u=new U,g=new De;for(let m=0;m<=i;m++){for(let f=0;f<=a;f++){const c=r+f/a*s;u.x=b*Math.cos(c),u.y=b*Math.sin(c),l.push(u.x,u.y,u.z),d.push(0,0,1),g.x=(u.x/t+1)/2,g.y=(u.y/t+1)/2,h.push(g.x,g.y)}b+=p}for(let m=0;m<i;m++){const f=m*(a+1);for(let c=0;c<a;c++){const _=c+f,x=_,v=_+a+1,w=_+a+2,A=_+1;o.push(x,v,A),o.push(v,w,A)}}this.setIndex(o),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class si extends tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ws,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dh extends si{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class hh extends tn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ws,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=Fs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fh extends tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uh extends tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $s extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class bh extends $s{constructor(e,t,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ar=new We,Ko=new U,Jo=new U;class il{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=da,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,a=this.matrix;Ko.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ko),Jo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jo),t.updateMatrixWorld(),Ar.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ar,t.coordinateSystem,t.reversedDepth),t.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Ar)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yo=new We,Xn=new U,Tr=new U;class ph extends il{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const a=this.camera,i=this.matrix,r=e.distance||a.far;r!==a.far&&(a.far=r,a.updateProjectionMatrix()),Xn.setFromMatrixPosition(e.matrixWorld),a.position.copy(Xn),Tr.copy(a.position),Tr.add(this._cubeDirections[t]),a.up.copy(this._cubeUps[t]),a.lookAt(Tr),a.updateMatrixWorld(),i.makeTranslation(-Xn.x,-Xn.y,-Xn.z),Yo.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo,a.coordinateSystem,a.reversedDepth)}}class mh extends $s{constructor(e,t,a=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=i,this.shadow=new ph}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rl extends Qc{constructor(e=-1,t=1,a=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=a-e,s=a+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,s=r+d*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gh extends il{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eo extends $s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new gh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vh extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Zo=new We;class sl{constructor(e,t,a=0,i=1/0){this.ray=new Yi(e,t),this.near=a,this.far=i,this.camera=null,this.layers=new Ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zo),this}intersectObject(e,t=!0,a=[]){return Ss(e,this,a,t),a.sort(Qo),a}intersectObjects(e,t=!0,a=[]){for(let i=0,r=e.length;i<r;i++)Ss(e[i],this,a,t);return a.sort(Qo),a}}function Qo(n,e){return n.distance-e.distance}function Ss(n,e,t,a){let i=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(i=!1),i===!0&&a===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Ss(r[s],e,t,!0)}}class $o{constructor(e=1,t=0,a=0){this.radius=e,this.phi=t,this.theta=a}set(e,t,a){return this.radius=e,this.phi=t,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,a){return this.radius=Math.sqrt(e*e+t*t+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(Be(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _h extends tl{constructor(e=10,t=10,a=4473924,i=8947848){a=new Ne(a),i=new Ne(i);const r=t/2,s=e/t,o=e/2,l=[],d=[];for(let p=0,u=0,g=-o;p<=t;p++,g+=s){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const m=p===r?a:i;m.toArray(d,u),u+=3,m.toArray(d,u),u+=3,m.toArray(d,u),u+=3,m.toArray(d,u),u+=3}const h=new Wt;h.setAttribute("position",new Ct(l,3)),h.setAttribute("color",new Ct(d,3));const b=new Zs({vertexColors:!0,toneMapped:!1});super(h,b),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class xh extends tl{constructor(e,t=16776960){const a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Wt;r.setIndex(new _t(a,1)),r.setAttribute("position",new Ct(i,3)),super(r,new Zs({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Mh extends $a{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ec(n,e,t,a){const i=yh(a);switch(t){case zc:return n*e;case zs:return n*e/i.components*i.byteLength;case Hs:return n*e/i.components*i.byteLength;case Gc:return n*e*2/i.components*i.byteLength;case Gs:return n*e*2/i.components*i.byteLength;case Hc:return n*e*3/i.components*i.byteLength;case ea:return n*e*4/i.components*i.byteLength;case Vs:return n*e*4/i.components*i.byteLength;case ji:case Oi:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bi:case zi:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zr:case $r:return Math.max(n,16)*Math.max(e,8)/4;case Yr:case Qr:return Math.max(n,8)*Math.max(e,8)/2;case es:case ts:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case as:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ns:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case is:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rs:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ss:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case os:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case cs:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ls:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ds:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case hs:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fs:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case us:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bs:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ps:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ms:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case gs:case vs:case _s:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xs:case Ms:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ys:case Es:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yh(n){switch(n){case da:case Fc:return{byteLength:1,components:1};case ei:case jc:case oi:return{byteLength:2,components:1};case Os:case Bs:return{byteLength:2,components:4};case Ka:case js:case ca:return{byteLength:4,components:1};case Oc:case Bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ls}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ls);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ol(){let n=null,e=!1,t=null,a=null;function i(r,s){t(r,s),a=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(a=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Eh(n){const e=new WeakMap;function t(o,l){const d=o.array,h=o.usage,b=d.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,d,h),o.onUploadCallback();let u;if(d instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)u=n.HALF_FLOAT;else if(d instanceof Uint16Array)o.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)u=n.SHORT;else if(d instanceof Uint32Array)u=n.UNSIGNED_INT;else if(d instanceof Int32Array)u=n.INT;else if(d instanceof Int8Array)u=n.BYTE;else if(d instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:u,bytesPerElement:d.BYTES_PER_ELEMENT,version:o.version,size:b}}function a(o,l,d){const h=l.array,b=l.updateRanges;if(n.bindBuffer(d,o),b.length===0)n.bufferSubData(d,0,h);else{b.sort((u,g)=>u.start-g.start);let p=0;for(let u=1;u<b.length;u++){const g=b[p],m=b[u];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++p,b[p]=m)}b.length=p+1;for(let u=0,g=b.length;u<g;u++){const m=b[u];n.bufferSubData(d,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const d=e.get(o);if(d===void 0)e.set(o,t(o,l));else if(d.version<o.version){if(d.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,o,l),d.version=o.version}}return{get:i,remove:r,update:s}}var Sh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ah=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ih=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Uh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ph=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$h=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,af=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ff=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_f=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ef=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,If=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$f=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,au=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ru=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,su=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ou=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,du=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_u=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Eu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Su=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ru=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ku=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Du=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Iu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Uu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ju=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ou=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ku=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ju=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$u=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ab=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Sh,alphahash_pars_fragment:wh,alphamap_fragment:Ah,alphamap_pars_fragment:Th,alphatest_fragment:Rh,alphatest_pars_fragment:Ch,aomap_fragment:kh,aomap_pars_fragment:Dh,batching_pars_vertex:Ih,batching_vertex:Uh,begin_vertex:Ph,beginnormal_vertex:Nh,bsdfs:Lh,iridescence_fragment:Fh,bumpmap_pars_fragment:jh,clipping_planes_fragment:Oh,clipping_planes_pars_fragment:Bh,clipping_planes_pars_vertex:zh,clipping_planes_vertex:Hh,color_fragment:Gh,color_pars_fragment:Vh,color_pars_vertex:Wh,color_vertex:qh,common:Xh,cube_uv_reflection_fragment:Kh,defaultnormal_vertex:Jh,displacementmap_pars_vertex:Yh,displacementmap_vertex:Zh,emissivemap_fragment:Qh,emissivemap_pars_fragment:$h,colorspace_fragment:ef,colorspace_pars_fragment:tf,envmap_fragment:af,envmap_common_pars_fragment:nf,envmap_pars_fragment:rf,envmap_pars_vertex:sf,envmap_physical_pars_fragment:gf,envmap_vertex:of,fog_vertex:cf,fog_pars_vertex:lf,fog_fragment:df,fog_pars_fragment:hf,gradientmap_pars_fragment:ff,lightmap_pars_fragment:uf,lights_lambert_fragment:bf,lights_lambert_pars_fragment:pf,lights_pars_begin:mf,lights_toon_fragment:vf,lights_toon_pars_fragment:_f,lights_phong_fragment:xf,lights_phong_pars_fragment:Mf,lights_physical_fragment:yf,lights_physical_pars_fragment:Ef,lights_fragment_begin:Sf,lights_fragment_maps:wf,lights_fragment_end:Af,logdepthbuf_fragment:Tf,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:Cf,logdepthbuf_vertex:kf,map_fragment:Df,map_pars_fragment:If,map_particle_fragment:Uf,map_particle_pars_fragment:Pf,metalnessmap_fragment:Nf,metalnessmap_pars_fragment:Lf,morphinstance_vertex:Ff,morphcolor_vertex:jf,morphnormal_vertex:Of,morphtarget_pars_vertex:Bf,morphtarget_vertex:zf,normal_fragment_begin:Hf,normal_fragment_maps:Gf,normal_pars_fragment:Vf,normal_pars_vertex:Wf,normal_vertex:qf,normalmap_pars_fragment:Xf,clearcoat_normal_fragment_begin:Kf,clearcoat_normal_fragment_maps:Jf,clearcoat_pars_fragment:Yf,iridescence_pars_fragment:Zf,opaque_fragment:Qf,packing:$f,premultiplied_alpha_fragment:eu,project_vertex:tu,dithering_fragment:au,dithering_pars_fragment:nu,roughnessmap_fragment:iu,roughnessmap_pars_fragment:ru,shadowmap_pars_fragment:su,shadowmap_pars_vertex:ou,shadowmap_vertex:cu,shadowmask_pars_fragment:lu,skinbase_vertex:du,skinning_pars_vertex:hu,skinning_vertex:fu,skinnormal_vertex:uu,specularmap_fragment:bu,specularmap_pars_fragment:pu,tonemapping_fragment:mu,tonemapping_pars_fragment:gu,transmission_fragment:vu,transmission_pars_fragment:_u,uv_pars_fragment:xu,uv_pars_vertex:Mu,uv_vertex:yu,worldpos_vertex:Eu,background_vert:Su,background_frag:wu,backgroundCube_vert:Au,backgroundCube_frag:Tu,cube_vert:Ru,cube_frag:Cu,depth_vert:ku,depth_frag:Du,distanceRGBA_vert:Iu,distanceRGBA_frag:Uu,equirect_vert:Pu,equirect_frag:Nu,linedashed_vert:Lu,linedashed_frag:Fu,meshbasic_vert:ju,meshbasic_frag:Ou,meshlambert_vert:Bu,meshlambert_frag:zu,meshmatcap_vert:Hu,meshmatcap_frag:Gu,meshnormal_vert:Vu,meshnormal_frag:Wu,meshphong_vert:qu,meshphong_frag:Xu,meshphysical_vert:Ku,meshphysical_frag:Ju,meshtoon_vert:Yu,meshtoon_frag:Zu,points_vert:Qu,points_frag:$u,shadow_vert:eb,shadow_frag:tb,sprite_vert:ab,sprite_frag:nb},se={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},ia={basic:{uniforms:At([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:At([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:At([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:At([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:At([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:At([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:At([se.points,se.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:At([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:At([se.common,se.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:At([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:At([se.sprite,se.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:At([se.common,se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:At([se.lights,se.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ia.physical={uniforms:At([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ui={r:0,b:0,g:0},Ba=new ta,ib=new We;function rb(n,e,t,a,i,r,s){const o=new Ne(0);let l=r===!0?0:1,d,h,b=null,p=0,u=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function m(x){let v=!1;const w=g(x);w===null?c(o,l):w&&w.isColor&&(c(w,1),v=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?a.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,s),(n.autoClear||v)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(x,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===Ji)?(h===void 0&&(h=new rt(new an(1,1,1),new Ua({name:"BackgroundCubeMaterial",uniforms:In(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ba.copy(v.backgroundRotation),Ba.x*=-1,Ba.y*=-1,Ba.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ba.y*=-1,Ba.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ib.makeRotationFromEuler(Ba)),h.material.toneMapped=Xe.getTransfer(w.colorSpace)!==Ze,(b!==w||p!==w.version||u!==n.toneMapping)&&(h.material.needsUpdate=!0,b=w,p=w.version,u=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(d===void 0&&(d=new rt(new Ln(2,2),new Ua({name:"BackgroundMaterial",uniforms:In(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=w,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.toneMapped=Xe.getTransfer(w.colorSpace)!==Ze,w.matrixAutoUpdate===!0&&w.updateMatrix(),d.material.uniforms.uvTransform.value.copy(w.matrix),(b!==w||p!==w.version||u!==n.toneMapping)&&(d.material.needsUpdate=!0,b=w,p=w.version,u=n.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null))}function c(x,v){x.getRGB(Ui,Zc(n)),a.buffers.color.setClear(Ui.r,Ui.g,Ui.b,v,s)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,c(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,c(o,l)},render:m,addToRenderList:f,dispose:_}}function sb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),a={},i=p(null);let r=i,s=!1;function o(y,C,L,j,F){let V=!1;const B=b(j,L,C);r!==B&&(r=B,d(r.object)),V=u(y,j,L,F),V&&g(y,j,L,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(V||s)&&(s=!1,v(y,C,L,j),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function d(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function b(y,C,L){const j=L.wireframe===!0;let F=a[y.id];F===void 0&&(F={},a[y.id]=F);let V=F[C.id];V===void 0&&(V={},F[C.id]=V);let B=V[j];return B===void 0&&(B=p(l()),V[j]=B),B}function p(y){const C=[],L=[],j=[];for(let F=0;F<t;F++)C[F]=0,L[F]=0,j[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:j,object:y,attributes:{},index:null}}function u(y,C,L,j){const F=r.attributes,V=C.attributes;let B=0;const J=L.getAttributes();for(const z in J)if(J[z].location>=0){const oe=F[z];let he=V[z];if(he===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),oe===void 0||oe.attribute!==he||he&&oe.data!==he.data)return!0;B++}return r.attributesNum!==B||r.index!==j}function g(y,C,L,j){const F={},V=C.attributes;let B=0;const J=L.getAttributes();for(const z in J)if(J[z].location>=0){let oe=V[z];oe===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor));const he={};he.attribute=oe,oe&&oe.data&&(he.data=oe.data),F[z]=he,B++}r.attributes=F,r.attributesNum=B,r.index=j}function m(){const y=r.newAttributes;for(let C=0,L=y.length;C<L;C++)y[C]=0}function f(y){c(y,0)}function c(y,C){const L=r.newAttributes,j=r.enabledAttributes,F=r.attributeDivisors;L[y]=1,j[y]===0&&(n.enableVertexAttribArray(y),j[y]=1),F[y]!==C&&(n.vertexAttribDivisor(y,C),F[y]=C)}function _(){const y=r.newAttributes,C=r.enabledAttributes;for(let L=0,j=C.length;L<j;L++)C[L]!==y[L]&&(n.disableVertexAttribArray(L),C[L]=0)}function x(y,C,L,j,F,V,B){B===!0?n.vertexAttribIPointer(y,C,L,F,V):n.vertexAttribPointer(y,C,L,j,F,V)}function v(y,C,L,j){m();const F=j.attributes,V=L.getAttributes(),B=C.defaultAttributeValues;for(const J in V){const z=V[J];if(z.location>=0){let ne=F[J];if(ne===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),ne!==void 0){const oe=ne.normalized,he=ne.itemSize,we=e.get(ne);if(we===void 0)continue;const Ge=we.buffer,Je=we.type,He=we.bytesPerElement,X=Je===n.INT||Je===n.UNSIGNED_INT||ne.gpuType===js;if(ne.isInterleavedBufferAttribute){const Y=ne.data,be=Y.stride,Ie=ne.offset;if(Y.isInstancedInterleavedBuffer){for(let Ee=0;Ee<z.locationSize;Ee++)c(z.location+Ee,Y.meshPerAttribute);y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Ee=0;Ee<z.locationSize;Ee++)f(z.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Ee=0;Ee<z.locationSize;Ee++)x(z.location+Ee,he/z.locationSize,Je,oe,be*He,(Ie+he/z.locationSize*Ee)*He,X)}else{if(ne.isInstancedBufferAttribute){for(let Y=0;Y<z.locationSize;Y++)c(z.location+Y,ne.meshPerAttribute);y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Y=0;Y<z.locationSize;Y++)f(z.location+Y);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Y=0;Y<z.locationSize;Y++)x(z.location+Y,he/z.locationSize,Je,oe,he*He,he/z.locationSize*Y*He,X)}}else if(B!==void 0){const oe=B[J];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(z.location,oe);break;case 3:n.vertexAttrib3fv(z.location,oe);break;case 4:n.vertexAttrib4fv(z.location,oe);break;default:n.vertexAttrib1fv(z.location,oe)}}}}_()}function w(){k();for(const y in a){const C=a[y];for(const L in C){const j=C[L];for(const F in j)h(j[F].object),delete j[F];delete C[L]}delete a[y]}}function A(y){if(a[y.id]===void 0)return;const C=a[y.id];for(const L in C){const j=C[L];for(const F in j)h(j[F].object),delete j[F];delete C[L]}delete a[y.id]}function R(y){for(const C in a){const L=a[C];if(L[y.id]===void 0)continue;const j=L[y.id];for(const F in j)h(j[F].object),delete j[F];delete L[y.id]}}function k(){S(),s=!0,r!==i&&(r=i,d(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:k,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:m,enableAttribute:f,disableUnusedAttributes:_}}function ob(n,e,t){let a;function i(d){a=d}function r(d,h){n.drawArrays(a,d,h),t.update(h,a,1)}function s(d,h,b){b!==0&&(n.drawArraysInstanced(a,d,h,b),t.update(h,a,b))}function o(d,h,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,h,0,b);let u=0;for(let g=0;g<b;g++)u+=h[g];t.update(u,a,1)}function l(d,h,b,p){if(b===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<d.length;g++)s(d[g],h[g],p[g]);else{u.multiDrawArraysInstancedWEBGL(a,d,0,h,0,p,0,b);let g=0;for(let m=0;m<b;m++)g+=h[m]*p[m];t.update(g,a,1)}}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cb(n,e,t,a){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){return!(R!==ea&&a.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const k=R===oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==da&&a.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ca&&!k)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const h=l(d);h!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const b=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),c=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:d,logarithmicDepthBuffer:b,reversedDepthBuffer:p,maxTextures:u,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:f,maxAttributes:c,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:w,maxSamples:A}}function lb(n){const e=this;let t=null,a=0,i=!1,r=!1;const s=new Ra,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(b,p){const u=b.length!==0||p||a!==0||i;return i=p,a=b.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(b,p){t=h(b,p,0)},this.setState=function(b,p,u){const g=b.clippingPlanes,m=b.clipIntersection,f=b.clipShadows,c=n.get(b);if(!i||g===null||g.length===0||r&&!f)r?h(null):d();else{const _=r?0:a,x=_*4;let v=c.clippingState||null;l.value=v,v=h(g,p,x,u);for(let w=0;w!==x;++w)v[w]=t[w];c.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function d(){l.value!==t&&(l.value=t,l.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function h(b,p,u,g){const m=b!==null?b.length:0;let f=null;if(m!==0){if(f=l.value,g!==!0||f===null){const c=u+m*4,_=p.matrixWorldInverse;o.getNormalMatrix(_),(f===null||f.length<c)&&(f=new Float32Array(c));for(let x=0,v=u;x!==m;++x,v+=4)s.copy(b[x]).applyMatrix4(_,o),s.normal.toArray(f,v),f[v+3]=s.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,f}}function db(n){let e=new WeakMap;function t(s,o){return o===qr?s.mapping=Cn:o===Xr&&(s.mapping=kn),s}function a(s){if(s&&s.isTexture){const o=s.mapping;if(o===qr||o===Xr)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const d=new th(l.height);return d.fromEquirectangularTexture(n,s),e.set(s,d),s.addEventListener("dispose",i),t(d.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:a,dispose:r}}const Sn=4,tc=[.125,.215,.35,.446,.526,.582],Va=20,Rr=new rl,ac=new Ne;let Cr=null,kr=0,Dr=0,Ir=!1;const Ha=(1+Math.sqrt(5))/2,_n=1/Ha,nc=[new U(-Ha,_n,0),new U(Ha,_n,0),new U(-_n,0,Ha),new U(_n,0,Ha),new U(0,Ha,-_n),new U(0,Ha,_n),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],hb=new U;class ws{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,a=.1,i=100,r={}){const{size:s=256,position:o=hb}=r;Cr=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,a,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cr,kr,Dr),this._renderer.xr.enabled=Ir,e.scissorTest=!1,Pi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cn||e.mapping===kn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cr=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:oa,minFilter:oa,generateMipmaps:!1,type:oi,format:ea,colorSpace:Dn,depthBuffer:!1},i=ic(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ic(e,t,a);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fb(r)),this._blurMaterial=ub(r,e,t)}return i}_compileMaterial(e){const t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,Rr)}_sceneToCubeUV(e,t,a,i,r){const l=new Bt(90,1,t,a),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],b=this._renderer,p=b.autoClear,u=b.toneMapping;b.getClearColor(ac),b.toneMapping=Da,b.autoClear=!1,b.state.buffers.depth.getReversed()&&(b.setRenderTarget(i),b.clearDepth(),b.setRenderTarget(null));const m=new ci({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),f=new rt(new an,m);let c=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,c=!0):(m.color.copy(ac),c=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(l.up.set(0,d[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):v===1?(l.up.set(0,0,d[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,d[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));const w=this._cubeSize;Pi(i,v*w,x>2?w:0,w,w),b.setRenderTarget(i),c&&b.render(f,l),b.render(e,l)}f.geometry.dispose(),f.material.dispose(),b.toneMapping=u,b.autoClear=p,e.background=_}_textureToCubeUV(e,t){const a=this._renderer,i=e.mapping===Cn||e.mapping===kn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new rt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Pi(t,0,0,3*l,2*l),a.setRenderTarget(t),a.render(s,Rr)}_applyPMREM(e){const t=this._renderer,a=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=nc[(i-r-1)%nc.length];this._blur(e,r-1,r,s,o)}t.autoClear=a}_blur(e,t,a,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,a,i,"latitudinal",r),this._halfBlur(s,e,a,a,i,"longitudinal",r)}_halfBlur(e,t,a,i,r,s,o){const l=this._renderer,d=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,b=new rt(this._lodPlanes[i],d),p=d.uniforms,u=this._sizeLods[a]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Va-1),m=r/g,f=isFinite(r)?1+Math.floor(h*m):Va;f>Va&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Va}`);const c=[];let _=0;for(let R=0;R<Va;++R){const k=R/m,S=Math.exp(-k*k/2);c.push(S),R===0?_+=S:R<f&&(_+=2*S)}for(let R=0;R<c.length;R++)c[R]=c[R]/_;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=c,p.latitudinal.value=s==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-a;const v=this._sizeLods[i],w=3*v*(i>x-Sn?i-x+Sn:0),A=4*(this._cubeSize-v);Pi(t,w,A,3*v,2*v),l.setRenderTarget(t),l.render(b,Rr)}}function fb(n){const e=[],t=[],a=[];let i=n;const r=n-Sn+1+tc.length;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);let l=1/o;s>n-Sn?l=tc[s-n+Sn-1]:s===0&&(l=0),a.push(l);const d=1/(o-2),h=-d,b=1+d,p=[h,h,b,h,b,b,h,h,b,b,h,b],u=6,g=6,m=3,f=2,c=1,_=new Float32Array(m*g*u),x=new Float32Array(f*g*u),v=new Float32Array(c*g*u);for(let A=0;A<u;A++){const R=A%3*2/3-1,k=A>2?0:-1,S=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];_.set(S,m*g*A),x.set(p,f*g*A);const y=[A,A,A,A,A,A];v.set(y,c*g*A)}const w=new Wt;w.setAttribute("position",new _t(_,m)),w.setAttribute("uv",new _t(x,f)),w.setAttribute("faceIndex",new _t(v,c)),e.push(w),i>Sn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:a}}function ic(n,e,t){const a=new Ya(n,e,t);return a.texture.mapping=Ji,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Pi(n,e,t,a,i){n.viewport.set(e,t,a,i),n.scissor.set(e,t,a,i)}function ub(n,e,t){const a=new Float32Array(Va),i=new U(0,1,0);return new Ua({name:"SphericalGaussianBlur",defines:{n:Va,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function rc(){return new Ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function sc(){return new Ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function to(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bb(n){let e=new WeakMap,t=null;function a(o){if(o&&o.isTexture){const l=o.mapping,d=l===qr||l===Xr,h=l===Cn||l===kn;if(d||h){let b=e.get(o);const p=b!==void 0?b.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new ws(n)),b=d?t.fromEquirectangular(o,b):t.fromCubemap(o,b),b.texture.pmremVersion=o.pmremVersion,e.set(o,b),b.texture;if(b!==void 0)return b.texture;{const u=o.image;return d&&u&&u.height>0||h&&u&&i(u)?(t===null&&(t=new ws(n)),b=d?t.fromEquirectangular(o):t.fromCubemap(o),b.texture.pmremVersion=o.pmremVersion,e.set(o,b),o.addEventListener("dispose",r),b.texture):null}}}return o}function i(o){let l=0;const d=6;for(let h=0;h<d;h++)o[h]!==void 0&&l++;return l===d}function r(o){const l=o.target;l.removeEventListener("dispose",r);const d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:a,dispose:s}}function pb(n){const e={};function t(a){if(e[a]!==void 0)return e[a];let i;switch(a){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(a)}return e[a]=i,i}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){const i=t(a);return i===null&&ri("THREE.WebGLRenderer: "+a+" extension not supported."),i}}}function mb(n,e,t,a){const i={},r=new WeakMap;function s(b){const p=b.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",s),delete i[p.id];const u=r.get(p);u&&(e.remove(u),r.delete(p)),a.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(b,p){return i[p.id]===!0||(p.addEventListener("dispose",s),i[p.id]=!0,t.memory.geometries++),p}function l(b){const p=b.attributes;for(const u in p)e.update(p[u],n.ARRAY_BUFFER)}function d(b){const p=[],u=b.index,g=b.attributes.position;let m=0;if(u!==null){const _=u.array;m=u.version;for(let x=0,v=_.length;x<v;x+=3){const w=_[x+0],A=_[x+1],R=_[x+2];p.push(w,A,A,R,R,w)}}else if(g!==void 0){const _=g.array;m=g.version;for(let x=0,v=_.length/3-1;x<v;x+=3){const w=x+0,A=x+1,R=x+2;p.push(w,A,A,R,R,w)}}else return;const f=new(qc(p)?Yc:Jc)(p,1);f.version=m;const c=r.get(b);c&&e.remove(c),r.set(b,f)}function h(b){const p=r.get(b);if(p){const u=b.index;u!==null&&p.version<u.version&&d(b)}else d(b);return r.get(b)}return{get:o,update:l,getWireframeAttribute:h}}function gb(n,e,t){let a;function i(p){a=p}let r,s;function o(p){r=p.type,s=p.bytesPerElement}function l(p,u){n.drawElements(a,u,r,p*s),t.update(u,a,1)}function d(p,u,g){g!==0&&(n.drawElementsInstanced(a,u,r,p*s,g),t.update(u,a,g))}function h(p,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,u,0,r,p,0,g);let f=0;for(let c=0;c<g;c++)f+=u[c];t.update(f,a,1)}function b(p,u,g,m){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let c=0;c<p.length;c++)d(p[c]/s,u[c],m[c]);else{f.multiDrawElementsInstancedWEBGL(a,u,0,r,p,0,m,0,g);let c=0;for(let _=0;_<g;_++)c+=u[_]*m[_];t.update(c,a,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=b}function vb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(r,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:a}}function _b(n,e,t){const a=new WeakMap,i=new $e;function r(s,o,l){const d=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,b=h!==void 0?h.length:0;let p=a.get(o);if(p===void 0||p.count!==b){let S=function(){R.dispose(),a.delete(o),o.removeEventListener("dispose",S)};p!==void 0&&p.texture.dispose();const u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let x=0;u===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let v=o.attributes.position.count*x,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const A=new Float32Array(v*w*4*b),R=new Xc(A,v,w,b);R.type=ca,R.needsUpdate=!0;const k=x*4;for(let y=0;y<b;y++){const C=f[y],L=c[y],j=_[y],F=v*w*4*y;for(let V=0;V<C.count;V++){const B=V*k;u===!0&&(i.fromBufferAttribute(C,V),A[F+B+0]=i.x,A[F+B+1]=i.y,A[F+B+2]=i.z,A[F+B+3]=0),g===!0&&(i.fromBufferAttribute(L,V),A[F+B+4]=i.x,A[F+B+5]=i.y,A[F+B+6]=i.z,A[F+B+7]=0),m===!0&&(i.fromBufferAttribute(j,V),A[F+B+8]=i.x,A[F+B+9]=i.y,A[F+B+10]=i.z,A[F+B+11]=j.itemSize===4?i.w:1)}}p={count:b,texture:R,size:new De(v,w)},a.set(o,p),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let u=0;for(let m=0;m<d.length;m++)u+=d[m];const g=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",d)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function xb(n,e,t,a){let i=new WeakMap;function r(l){const d=a.render.frame,h=l.geometry,b=e.get(l,h);if(i.get(b)!==d&&(e.update(b),i.set(b,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),i.set(l,d))),l.isSkinnedMesh){const p=l.skeleton;i.get(p)!==d&&(p.update(),i.set(p,d))}return b}function s(){i=new WeakMap}function o(l){const d=l.target;d.removeEventListener("dispose",o),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:r,dispose:s}}const cl=new Rt,oc=new al(1,1),ll=new Xc,dl=new jd,hl=new $c,cc=[],lc=[],dc=new Float32Array(16),hc=new Float32Array(9),fc=new Float32Array(4);function Fn(n,e,t){const a=n[0];if(a<=0||a>0)return n;const i=e*t;let r=cc[i];if(r===void 0&&(r=new Float32Array(i),cc[i]=r),e!==0){a.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(r,o)}return r}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,a=n.length;t<a;t++)if(n[t]!==e[t])return!1;return!0}function mt(n,e){for(let t=0,a=e.length;t<a;t++)n[t]=e[t]}function Zi(n,e){let t=lc[e];t===void 0&&(t=new Int32Array(e),lc[e]=t);for(let a=0;a!==e;++a)t[a]=n.allocateTextureUnit();return t}function Mb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),mt(t,e)}}function Eb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),mt(t,e)}}function Sb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),mt(t,e)}}function wb(n,e){const t=this.cache,a=e.elements;if(a===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,a))return;fc.set(a),n.uniformMatrix2fv(this.addr,!1,fc),mt(t,a)}}function Ab(n,e){const t=this.cache,a=e.elements;if(a===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,a))return;hc.set(a),n.uniformMatrix3fv(this.addr,!1,hc),mt(t,a)}}function Tb(n,e){const t=this.cache,a=e.elements;if(a===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,a))return;dc.set(a),n.uniformMatrix4fv(this.addr,!1,dc),mt(t,a)}}function Rb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2iv(this.addr,e),mt(t,e)}}function kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3iv(this.addr,e),mt(t,e)}}function Db(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4iv(this.addr,e),mt(t,e)}}function Ib(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ub(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2uiv(this.addr,e),mt(t,e)}}function Pb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3uiv(this.addr,e),mt(t,e)}}function Nb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4uiv(this.addr,e),mt(t,e)}}function Lb(n,e,t){const a=this.cache,i=t.allocateTextureUnit();a[0]!==i&&(n.uniform1i(this.addr,i),a[0]=i);let r;this.type===n.SAMPLER_2D_SHADOW?(oc.compareFunction=Vc,r=oc):r=cl,t.setTexture2D(e||r,i)}function Fb(n,e,t){const a=this.cache,i=t.allocateTextureUnit();a[0]!==i&&(n.uniform1i(this.addr,i),a[0]=i),t.setTexture3D(e||dl,i)}function jb(n,e,t){const a=this.cache,i=t.allocateTextureUnit();a[0]!==i&&(n.uniform1i(this.addr,i),a[0]=i),t.setTextureCube(e||hl,i)}function Ob(n,e,t){const a=this.cache,i=t.allocateTextureUnit();a[0]!==i&&(n.uniform1i(this.addr,i),a[0]=i),t.setTexture2DArray(e||ll,i)}function Bb(n){switch(n){case 5126:return Mb;case 35664:return yb;case 35665:return Eb;case 35666:return Sb;case 35674:return wb;case 35675:return Ab;case 35676:return Tb;case 5124:case 35670:return Rb;case 35667:case 35671:return Cb;case 35668:case 35672:return kb;case 35669:case 35673:return Db;case 5125:return Ib;case 36294:return Ub;case 36295:return Pb;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return Ob}}function zb(n,e){n.uniform1fv(this.addr,e)}function Hb(n,e){const t=Fn(e,this.size,2);n.uniform2fv(this.addr,t)}function Gb(n,e){const t=Fn(e,this.size,3);n.uniform3fv(this.addr,t)}function Vb(n,e){const t=Fn(e,this.size,4);n.uniform4fv(this.addr,t)}function Wb(n,e){const t=Fn(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qb(n,e){const t=Fn(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Xb(n,e){const t=Fn(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Kb(n,e){n.uniform1iv(this.addr,e)}function Jb(n,e){n.uniform2iv(this.addr,e)}function Yb(n,e){n.uniform3iv(this.addr,e)}function Zb(n,e){n.uniform4iv(this.addr,e)}function Qb(n,e){n.uniform1uiv(this.addr,e)}function $b(n,e){n.uniform2uiv(this.addr,e)}function ep(n,e){n.uniform3uiv(this.addr,e)}function tp(n,e){n.uniform4uiv(this.addr,e)}function ap(n,e,t){const a=this.cache,i=e.length,r=Zi(t,i);pt(a,r)||(n.uniform1iv(this.addr,r),mt(a,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||cl,r[s])}function np(n,e,t){const a=this.cache,i=e.length,r=Zi(t,i);pt(a,r)||(n.uniform1iv(this.addr,r),mt(a,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||dl,r[s])}function ip(n,e,t){const a=this.cache,i=e.length,r=Zi(t,i);pt(a,r)||(n.uniform1iv(this.addr,r),mt(a,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||hl,r[s])}function rp(n,e,t){const a=this.cache,i=e.length,r=Zi(t,i);pt(a,r)||(n.uniform1iv(this.addr,r),mt(a,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||ll,r[s])}function sp(n){switch(n){case 5126:return zb;case 35664:return Hb;case 35665:return Gb;case 35666:return Vb;case 35674:return Wb;case 35675:return qb;case 35676:return Xb;case 5124:case 35670:return Kb;case 35667:case 35671:return Jb;case 35668:case 35672:return Yb;case 35669:case 35673:return Zb;case 5125:return Qb;case 36294:return $b;case 36295:return ep;case 36296:return tp;case 35678:case 36198:case 36298:case 36306:case 35682:return ap;case 35679:case 36299:case 36307:return np;case 35680:case 36300:case 36308:case 36293:return ip;case 36289:case 36303:case 36311:case 36292:return rp}}class op{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=Bb(t.type)}}class cp{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sp(t.type)}}class lp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],a)}}}const Ur=/(\w+)(\])?(\[|\.)?/g;function uc(n,e){n.seq.push(e),n.map[e.id]=e}function dp(n,e,t){const a=n.name,i=a.length;for(Ur.lastIndex=0;;){const r=Ur.exec(a),s=Ur.lastIndex;let o=r[1];const l=r[2]==="]",d=r[3];if(l&&(o=o|0),d===void 0||d==="["&&s+2===i){uc(t,d===void 0?new op(o,n,e):new cp(o,n,e));break}else{let b=t.map[o];b===void 0&&(b=new lp(o),uc(t,b)),t=b}}}class Hi{constructor(e,t){this.seq=[],this.map={};const a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<a;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);dp(r,s,this)}}setValue(e,t,a,i){const r=this.map[t];r!==void 0&&r.setValue(e,a,i)}setOptional(e,t,a){const i=t[a];i!==void 0&&this.setValue(e,a,i)}static upload(e,t,a,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=a[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const a=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&a.push(s)}return a}}function bc(n,e,t){const a=n.createShader(e);return n.shaderSource(a,t),n.compileShader(a),a}const hp=37297;let fp=0;function up(n,e){const t=n.split(`
`),a=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const o=s+1;a.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return a.join(`
`)}const pc=new Fe;function bp(n){Xe._getMatrix(pc,Xe.workingColorSpace,n);const e=`mat3( ${pc.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(n)){case Gi:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function mc(n,e,t){const a=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(a&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+up(n.getShaderSource(e),o)}else return r}function pp(n,e){const t=bp(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mp(n,e){let t;switch(e){case Ql:t="Linear";break;case $l:t="Reinhard";break;case ed:t="Cineon";break;case Nc:t="ACESFilmic";break;case ad:t="AgX";break;case nd:t="Neutral";break;case td:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ni=new U;function gp(){Xe.getLuminanceCoefficients(Ni);const n=Ni.x.toFixed(4),e=Ni.y.toFixed(4),t=Ni.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yn).join(`
`)}function _p(n){const e=[];for(const t in n){const a=n[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function xp(n,e){const t={},a=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<a;i++){const r=n.getActiveAttrib(e,i),s=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Yn(n){return n!==""}function gc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mp=/^[ \t]*#include +<([\w\d./]+)>/gm;function As(n){return n.replace(Mp,Ep)}const yp=new Map;function Ep(n,e){let t=Oe[e];if(t===void 0){const a=yp.get(e);if(a!==void 0)t=Oe[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return As(t)}const Sp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _c(n){return n.replace(Sp,wp)}function wp(n,e,t,a){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=a.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function xc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ap(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Uc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Pc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ga&&(e="SHADOWMAP_TYPE_VSM"),e}function Tp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Cn:case kn:e="ENVMAP_TYPE_CUBE";break;case Ji:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case kn:e="ENVMAP_MODE_REFRACTION";break}return e}function Cp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Fs:e="ENVMAP_BLENDING_MULTIPLY";break;case Yl:e="ENVMAP_BLENDING_MIX";break;case Zl:e="ENVMAP_BLENDING_ADD";break}return e}function kp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:a,maxMip:t}}function Dp(n,e,t,a){const i=n.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Ap(t),d=Tp(t),h=Rp(t),b=Cp(t),p=kp(t),u=vp(t),g=_p(r),m=i.createProgram();let f,c,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yn).join(`
`),f.length>0&&(f+=`
`),c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yn).join(`
`),c.length>0&&(c+=`
`)):(f=[xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yn).join(`
`),c=[xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",t.envMap?"#define "+b:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Da?"#define TONE_MAPPING":"",t.toneMapping!==Da?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Da?mp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,pp("linearToOutputTexel",t.outputColorSpace),gp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yn).join(`
`)),s=As(s),s=gc(s,t),s=vc(s,t),o=As(o),o=gc(o,t),o=vc(o,t),s=_c(s),o=_c(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,c=["#define varying in",t.glslVersion===yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const x=_+f+s,v=_+c+o,w=bc(i,i.VERTEX_SHADER,x),A=bc(i,i.FRAGMENT_SHADER,v);i.attachShader(m,w),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function R(C){if(n.debug.checkShaderErrors){const L=i.getProgramInfoLog(m)||"",j=i.getShaderInfoLog(w)||"",F=i.getShaderInfoLog(A)||"",V=L.trim(),B=j.trim(),J=F.trim();let z=!0,ne=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,m,w,A);else{const oe=mc(i,w,"vertex"),he=mc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+oe+`
`+he)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||J==="")&&(ne=!1);ne&&(C.diagnostics={runnable:z,programLog:V,vertexShader:{log:B,prefix:f},fragmentShader:{log:J,prefix:c}})}i.deleteShader(w),i.deleteShader(A),k=new Hi(i,m),S=xp(i,m)}let k;this.getUniforms=function(){return k===void 0&&R(this),k};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(m,hp)),y},this.destroy=function(){a.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=A,this}let Ip=0;class Up{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,a=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(a),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){const t=this.shaderCache;let a=t.get(e);return a===void 0&&(a=new Pp(e),t.set(e,a)),a}}class Pp{constructor(e){this.id=Ip++,this.code=e,this.usedTimes=0}}function Np(n,e,t,a,i,r,s){const o=new Ks,l=new Up,d=new Set,h=[],b=i.logarithmicDepthBuffer,p=i.vertexTextures;let u=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return d.add(S),S===0?"uv":`uv${S}`}function f(S,y,C,L,j){const F=L.fog,V=j.geometry,B=S.isMeshStandardMaterial?L.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),z=J&&J.mapping===Ji?J.image.height:null,ne=g[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const oe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,he=oe!==void 0?oe.length:0;let we=0;V.morphAttributes.position!==void 0&&(we=1),V.morphAttributes.normal!==void 0&&(we=2),V.morphAttributes.color!==void 0&&(we=3);let Ge,Je,He,X;if(ne){const Ke=ia[ne];Ge=Ke.vertexShader,Je=Ke.fragmentShader}else Ge=S.vertexShader,Je=S.fragmentShader,l.update(S),He=l.getVertexShaderID(S),X=l.getFragmentShaderID(S);const Y=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Ie=j.isInstancedMesh===!0,Ee=j.isBatchedMesh===!0,Ve=!!S.map,xt=!!S.matcap,D=!!J,nt=!!S.aoMap,Pe=!!S.lightMap,Ce=!!S.bumpMap,ge=!!S.normalMap,it=!!S.displacementMap,ve=!!S.emissiveMap,je=!!S.metalnessMap,gt=!!S.roughnessMap,lt=S.anisotropy>0,T=S.clearcoat>0,M=S.dispersion>0,O=S.iridescence>0,q=S.sheen>0,Z=S.transmission>0,W=lt&&!!S.anisotropyMap,ye=T&&!!S.clearcoatMap,ie=T&&!!S.clearcoatNormalMap,_e=T&&!!S.clearcoatRoughnessMap,xe=O&&!!S.iridescenceMap,te=O&&!!S.iridescenceThicknessMap,de=q&&!!S.sheenColorMap,Re=q&&!!S.sheenRoughnessMap,Me=!!S.specularMap,ce=!!S.specularColorMap,Le=!!S.specularIntensityMap,I=Z&&!!S.transmissionMap,ae=Z&&!!S.thicknessMap,re=!!S.gradientMap,ue=!!S.alphaMap,$=S.alphaTest>0,K=!!S.alphaHash,me=!!S.extensions;let Ue=Da;S.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const tt={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:Ge,fragmentShader:Je,defines:S.defines,customVertexShaderID:He,customFragmentShaderID:X,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Ee,batchingColor:Ee&&j._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&j.instanceColor!==null,instancingMorph:Ie&&j.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Y===null?n.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Dn,alphaToCoverage:!!S.alphaToCoverage,map:Ve,matcap:xt,envMap:D,envMapMode:D&&J.mapping,envMapCubeUVHeight:z,aoMap:nt,lightMap:Pe,bumpMap:Ce,normalMap:ge,displacementMap:p&&it,emissiveMap:ve,normalMapObjectSpace:ge&&S.normalMapType===od,normalMapTangentSpace:ge&&S.normalMapType===Ws,metalnessMap:je,roughnessMap:gt,anisotropy:lt,anisotropyMap:W,clearcoat:T,clearcoatMap:ye,clearcoatNormalMap:ie,clearcoatRoughnessMap:_e,dispersion:M,iridescence:O,iridescenceMap:xe,iridescenceThicknessMap:te,sheen:q,sheenColorMap:de,sheenRoughnessMap:Re,specularMap:Me,specularColorMap:ce,specularIntensityMap:Le,transmission:Z,transmissionMap:I,thicknessMap:ae,gradientMap:re,opaque:S.transparent===!1&&S.blending===An&&S.alphaToCoverage===!1,alphaMap:ue,alphaTest:$,alphaHash:K,combine:S.combine,mapUv:Ve&&m(S.map.channel),aoMapUv:nt&&m(S.aoMap.channel),lightMapUv:Pe&&m(S.lightMap.channel),bumpMapUv:Ce&&m(S.bumpMap.channel),normalMapUv:ge&&m(S.normalMap.channel),displacementMapUv:it&&m(S.displacementMap.channel),emissiveMapUv:ve&&m(S.emissiveMap.channel),metalnessMapUv:je&&m(S.metalnessMap.channel),roughnessMapUv:gt&&m(S.roughnessMap.channel),anisotropyMapUv:W&&m(S.anisotropyMap.channel),clearcoatMapUv:ye&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:te&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:de&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&m(S.sheenRoughnessMap.channel),specularMapUv:Me&&m(S.specularMap.channel),specularColorMapUv:ce&&m(S.specularColorMap.channel),specularIntensityMapUv:Le&&m(S.specularIntensityMap.channel),transmissionMapUv:I&&m(S.transmissionMap.channel),thicknessMapUv:ae&&m(S.thicknessMap.channel),alphaMapUv:ue&&m(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ge||lt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!V.attributes.uv&&(Ve||ue),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:b,reversedDepthBuffer:be,skinning:j.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:we,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ve&&S.map.isVideoTexture===!0&&Xe.getTransfer(S.map.colorSpace)===Ze,decodeVideoTextureEmissive:ve&&S.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(S.emissiveMap.colorSpace)===Ze,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===zt,flipSided:S.side===Tt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:me&&S.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&S.extensions.multiDraw===!0||Ee)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return tt.vertexUv1s=d.has(1),tt.vertexUv2s=d.has(2),tt.vertexUv3s=d.has(3),d.clear(),tt}function c(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)y.push(C),y.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(_(y,S),x(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function _(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function x(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const y=g[S.type];let C;if(y){const L=ia[y];C=Zd.clone(L.uniforms)}else C=S.uniforms;return C}function w(S,y){let C;for(let L=0,j=h.length;L<j;L++){const F=h[L];if(F.cacheKey===y){C=F,++C.usedTimes;break}}return C===void 0&&(C=new Dp(n,y,S,r),h.push(C)),C}function A(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function k(){l.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:v,acquireProgram:w,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:k}}function Lp(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function a(s){n.delete(s)}function i(s,o,l){n.get(s)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:a,update:i,dispose:r}}function Fp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Mc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yc(){const n=[];let e=0;const t=[],a=[],i=[];function r(){e=0,t.length=0,a.length=0,i.length=0}function s(b,p,u,g,m,f){let c=n[e];return c===void 0?(c={id:b.id,object:b,geometry:p,material:u,groupOrder:g,renderOrder:b.renderOrder,z:m,group:f},n[e]=c):(c.id=b.id,c.object=b,c.geometry=p,c.material=u,c.groupOrder=g,c.renderOrder=b.renderOrder,c.z=m,c.group=f),e++,c}function o(b,p,u,g,m,f){const c=s(b,p,u,g,m,f);u.transmission>0?a.push(c):u.transparent===!0?i.push(c):t.push(c)}function l(b,p,u,g,m,f){const c=s(b,p,u,g,m,f);u.transmission>0?a.unshift(c):u.transparent===!0?i.unshift(c):t.unshift(c)}function d(b,p){t.length>1&&t.sort(b||Fp),a.length>1&&a.sort(p||Mc),i.length>1&&i.sort(p||Mc)}function h(){for(let b=e,p=n.length;b<p;b++){const u=n[b];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:a,transparent:i,init:r,push:o,unshift:l,finish:h,sort:d}}function jp(){let n=new WeakMap;function e(a,i){const r=n.get(a);let s;return r===void 0?(s=new yc,n.set(a,[s])):i>=r.length?(s=new yc,r.push(s)):s=r[i],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function Op(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ne};break;case"SpotLight":t={position:new U,direction:new U,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Bp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let zp=0;function Hp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Gp(n){const e=new Op,t=Bp(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new U);const i=new U,r=new We,s=new We;function o(d){let h=0,b=0,p=0;for(let S=0;S<9;S++)a.probe[S].set(0,0,0);let u=0,g=0,m=0,f=0,c=0,_=0,x=0,v=0,w=0,A=0,R=0;d.sort(Hp);for(let S=0,y=d.length;S<y;S++){const C=d[S],L=C.color,j=C.intensity,F=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=L.r*j,b+=L.g*j,p+=L.b*j;else if(C.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(C.sh.coefficients[B],j);R++}else if(C.isDirectionalLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,z=t.get(C);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,a.directionalShadow[u]=z,a.directionalShadowMap[u]=V,a.directionalShadowMatrix[u]=C.shadow.matrix,_++}a.directional[u]=B,u++}else if(C.isSpotLight){const B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(L).multiplyScalar(j),B.distance=F,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,a.spot[m]=B;const J=C.shadow;if(C.map&&(a.spotLightMap[w]=C.map,w++,J.updateMatrices(C),C.castShadow&&A++),a.spotLightMatrix[m]=J.matrix,C.castShadow){const z=t.get(C);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,a.spotShadow[m]=z,a.spotShadowMap[m]=V,v++}m++}else if(C.isRectAreaLight){const B=e.get(C);B.color.copy(L).multiplyScalar(j),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),a.rectArea[f]=B,f++}else if(C.isPointLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const J=C.shadow,z=t.get(C);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,a.pointShadow[g]=z,a.pointShadowMap[g]=V,a.pointShadowMatrix[g]=C.shadow.matrix,x++}a.point[g]=B,g++}else if(C.isHemisphereLight){const B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(j),B.groundColor.copy(C.groundColor).multiplyScalar(j),a.hemi[c]=B,c++}}f>0&&(n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=se.LTC_FLOAT_1,a.rectAreaLTC2=se.LTC_FLOAT_2):(a.rectAreaLTC1=se.LTC_HALF_1,a.rectAreaLTC2=se.LTC_HALF_2)),a.ambient[0]=h,a.ambient[1]=b,a.ambient[2]=p;const k=a.hash;(k.directionalLength!==u||k.pointLength!==g||k.spotLength!==m||k.rectAreaLength!==f||k.hemiLength!==c||k.numDirectionalShadows!==_||k.numPointShadows!==x||k.numSpotShadows!==v||k.numSpotMaps!==w||k.numLightProbes!==R)&&(a.directional.length=u,a.spot.length=m,a.rectArea.length=f,a.point.length=g,a.hemi.length=c,a.directionalShadow.length=_,a.directionalShadowMap.length=_,a.pointShadow.length=x,a.pointShadowMap.length=x,a.spotShadow.length=v,a.spotShadowMap.length=v,a.directionalShadowMatrix.length=_,a.pointShadowMatrix.length=x,a.spotLightMatrix.length=v+w-A,a.spotLightMap.length=w,a.numSpotLightShadowsWithMaps=A,a.numLightProbes=R,k.directionalLength=u,k.pointLength=g,k.spotLength=m,k.rectAreaLength=f,k.hemiLength=c,k.numDirectionalShadows=_,k.numPointShadows=x,k.numSpotShadows=v,k.numSpotMaps=w,k.numLightProbes=R,a.version=zp++)}function l(d,h){let b=0,p=0,u=0,g=0,m=0;const f=h.matrixWorldInverse;for(let c=0,_=d.length;c<_;c++){const x=d[c];if(x.isDirectionalLight){const v=a.directional[b];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),b++}else if(x.isSpotLight){const v=a.spot[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),u++}else if(x.isRectAreaLight){const v=a.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),s.identity(),r.copy(x.matrixWorld),r.premultiply(f),s.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),g++}else if(x.isPointLight){const v=a.point[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){const v=a.hemi[m];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:a}}function Ec(n){const e=new Gp(n),t=[],a=[];function i(h){d.camera=h,t.length=0,a.length=0}function r(h){t.push(h)}function s(h){a.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:d,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function Vp(n){let e=new WeakMap;function t(i,r=0){const s=e.get(i);let o;return s===void 0?(o=new Ec(n),e.set(i,[o])):r>=s.length?(o=new Ec(n),s.push(o)):o=s[r],o}function a(){e=new WeakMap}return{get:t,dispose:a}}const Wp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xp(n,e,t){let a=new Ys;const i=new De,r=new De,s=new $e,o=new fh({depthPacking:sd}),l=new uh,d={},h=t.maxTextureSize,b={[Ia]:Tt,[Tt]:Ia,[zt]:zt},p=new Ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Wp,fragmentShader:qp}),u=p.clone();u.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new rt(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let c=this.type;this.render=function(A,R,k){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const S=n.getRenderTarget(),y=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),L=n.state;L.setBlending(ka),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const j=c!==ga&&this.type===ga,F=c===ga&&this.type!==ga;for(let V=0,B=A.length;V<B;V++){const J=A[V],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const ne=z.getFrameExtents();if(i.multiply(ne),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ne.x),i.x=r.x*ne.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ne.y),i.y=r.y*ne.y,z.mapSize.y=r.y)),z.map===null||j===!0||F===!0){const he=this.type!==ga?{minFilter:Ht,magFilter:Ht}:{};z.map!==null&&z.map.dispose(),z.map=new Ya(i.x,i.y,he),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const oe=z.getViewportCount();for(let he=0;he<oe;he++){const we=z.getViewport(he);s.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),L.viewport(s),z.updateMatrices(J,he),a=z.getFrustum(),v(R,k,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===ga&&_(z,k),z.needsUpdate=!1}c=this.type,f.needsUpdate=!1,n.setRenderTarget(S,y,C)};function _(A,R){const k=e.update(m);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ya(i.x,i.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,k,p,m,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,k,u,m,null)}function x(A,R,k,S){let y=null;const C=k.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)y=C;else if(y=k.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const L=y.uuid,j=R.uuid;let F=d[L];F===void 0&&(F={},d[L]=F);let V=F[j];V===void 0&&(V=y.clone(),F[j]=V,R.addEventListener("dispose",w)),y=V}if(y.visible=R.visible,y.wireframe=R.wireframe,S===ga?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:b[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,k.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const L=n.properties.get(y);L.light=k}return y}function v(A,R,k,S,y){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===ga)&&(!A.frustumCulled||a.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld);const j=e.update(A),F=A.material;if(Array.isArray(F)){const V=j.groups;for(let B=0,J=V.length;B<J;B++){const z=V[B],ne=F[z.materialIndex];if(ne&&ne.visible){const oe=x(A,ne,S,y);A.onBeforeShadow(n,A,R,k,j,oe,z),n.renderBufferDirect(k,null,j,oe,A,z),A.onAfterShadow(n,A,R,k,j,oe,z)}}}else if(F.visible){const V=x(A,F,S,y);A.onBeforeShadow(n,A,R,k,j,V,null),n.renderBufferDirect(k,null,j,V,A,null),A.onAfterShadow(n,A,R,k,j,V,null)}}const L=A.children;for(let j=0,F=L.length;j<F;j++)v(L[j],R,k,S,y)}function w(A){A.target.removeEventListener("dispose",w);for(const k in d){const S=d[k],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Kp={[Or]:Br,[zr]:Vr,[Hr]:Wr,[Rn]:Gr,[Br]:Or,[Vr]:zr,[Wr]:Hr,[Gr]:Rn};function Jp(n,e){function t(){let I=!1;const ae=new $e;let re=null;const ue=new $e(0,0,0,0);return{setMask:function($){re!==$&&!I&&(n.colorMask($,$,$,$),re=$)},setLocked:function($){I=$},setClear:function($,K,me,Ue,tt){tt===!0&&($*=Ue,K*=Ue,me*=Ue),ae.set($,K,me,Ue),ue.equals(ae)===!1&&(n.clearColor($,K,me,Ue),ue.copy(ae))},reset:function(){I=!1,re=null,ue.set(-1,0,0,0)}}}function a(){let I=!1,ae=!1,re=null,ue=null,$=null;return{setReversed:function(K){if(ae!==K){const me=e.get("EXT_clip_control");K?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),ae=K;const Ue=$;$=null,this.setClear(Ue)}},getReversed:function(){return ae},setTest:function(K){K?Y(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(K){re!==K&&!I&&(n.depthMask(K),re=K)},setFunc:function(K){if(ae&&(K=Kp[K]),ue!==K){switch(K){case Or:n.depthFunc(n.NEVER);break;case Br:n.depthFunc(n.ALWAYS);break;case zr:n.depthFunc(n.LESS);break;case Rn:n.depthFunc(n.LEQUAL);break;case Hr:n.depthFunc(n.EQUAL);break;case Gr:n.depthFunc(n.GEQUAL);break;case Vr:n.depthFunc(n.GREATER);break;case Wr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=K}},setLocked:function(K){I=K},setClear:function(K){$!==K&&(ae&&(K=1-K),n.clearDepth(K),$=K)},reset:function(){I=!1,re=null,ue=null,$=null,ae=!1}}}function i(){let I=!1,ae=null,re=null,ue=null,$=null,K=null,me=null,Ue=null,tt=null;return{setTest:function(Ke){I||(Ke?Y(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(Ke){ae!==Ke&&!I&&(n.stencilMask(Ke),ae=Ke)},setFunc:function(Ke,ha,aa){(re!==Ke||ue!==ha||$!==aa)&&(n.stencilFunc(Ke,ha,aa),re=Ke,ue=ha,$=aa)},setOp:function(Ke,ha,aa){(K!==Ke||me!==ha||Ue!==aa)&&(n.stencilOp(Ke,ha,aa),K=Ke,me=ha,Ue=aa)},setLocked:function(Ke){I=Ke},setClear:function(Ke){tt!==Ke&&(n.clearStencil(Ke),tt=Ke)},reset:function(){I=!1,ae=null,re=null,ue=null,$=null,K=null,me=null,Ue=null,tt=null}}}const r=new t,s=new a,o=new i,l=new WeakMap,d=new WeakMap;let h={},b={},p=new WeakMap,u=[],g=null,m=!1,f=null,c=null,_=null,x=null,v=null,w=null,A=null,R=new Ne(0,0,0),k=0,S=!1,y=null,C=null,L=null,j=null,F=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,J=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),B=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),B=J>=2);let ne=null,oe={};const he=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),Ge=new $e().fromArray(he),Je=new $e().fromArray(we);function He(I,ae,re,ue){const $=new Uint8Array(4),K=n.createTexture();n.bindTexture(I,K),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<re;me++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,$):n.texImage2D(ae+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,$);return K}const X={};X[n.TEXTURE_2D]=He(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=He(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=He(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=He(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Y(n.DEPTH_TEST),s.setFunc(Rn),Ce(!1),ge(mo),Y(n.CULL_FACE),nt(ka);function Y(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function be(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Ie(I,ae){return b[I]!==ae?(n.bindFramebuffer(I,ae),b[I]=ae,I===n.DRAW_FRAMEBUFFER&&(b[n.FRAMEBUFFER]=ae),I===n.FRAMEBUFFER&&(b[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ee(I,ae){let re=u,ue=!1;if(I){re=p.get(ae),re===void 0&&(re=[],p.set(ae,re));const $=I.textures;if(re.length!==$.length||re[0]!==n.COLOR_ATTACHMENT0){for(let K=0,me=$.length;K<me;K++)re[K]=n.COLOR_ATTACHMENT0+K;re.length=$.length,ue=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,ue=!0);ue&&n.drawBuffers(re)}function Ve(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const xt={[Ga]:n.FUNC_ADD,[Ul]:n.FUNC_SUBTRACT,[Pl]:n.FUNC_REVERSE_SUBTRACT};xt[Nl]=n.MIN,xt[Ll]=n.MAX;const D={[Fl]:n.ZERO,[jl]:n.ONE,[Ol]:n.SRC_COLOR,[Fr]:n.SRC_ALPHA,[Wl]:n.SRC_ALPHA_SATURATE,[Gl]:n.DST_COLOR,[zl]:n.DST_ALPHA,[Bl]:n.ONE_MINUS_SRC_COLOR,[jr]:n.ONE_MINUS_SRC_ALPHA,[Vl]:n.ONE_MINUS_DST_COLOR,[Hl]:n.ONE_MINUS_DST_ALPHA,[ql]:n.CONSTANT_COLOR,[Xl]:n.ONE_MINUS_CONSTANT_COLOR,[Kl]:n.CONSTANT_ALPHA,[Jl]:n.ONE_MINUS_CONSTANT_ALPHA};function nt(I,ae,re,ue,$,K,me,Ue,tt,Ke){if(I===ka){m===!0&&(be(n.BLEND),m=!1);return}if(m===!1&&(Y(n.BLEND),m=!0),I!==Il){if(I!==f||Ke!==S){if((c!==Ga||v!==Ga)&&(n.blendEquation(n.FUNC_ADD),c=Ga,v=Ga),Ke)switch(I){case An:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case go:n.blendFunc(n.ONE,n.ONE);break;case vo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _o:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case An:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case go:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case vo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _o:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}_=null,x=null,w=null,A=null,R.set(0,0,0),k=0,f=I,S=Ke}return}$=$||ae,K=K||re,me=me||ue,(ae!==c||$!==v)&&(n.blendEquationSeparate(xt[ae],xt[$]),c=ae,v=$),(re!==_||ue!==x||K!==w||me!==A)&&(n.blendFuncSeparate(D[re],D[ue],D[K],D[me]),_=re,x=ue,w=K,A=me),(Ue.equals(R)===!1||tt!==k)&&(n.blendColor(Ue.r,Ue.g,Ue.b,tt),R.copy(Ue),k=tt),f=I,S=!1}function Pe(I,ae){I.side===zt?be(n.CULL_FACE):Y(n.CULL_FACE);let re=I.side===Tt;ae&&(re=!re),Ce(re),I.blending===An&&I.transparent===!1?nt(ka):nt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const ue=I.stencilWrite;o.setTest(ue),ue&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ve(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(I){y!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),y=I)}function ge(I){I!==kl?(Y(n.CULL_FACE),I!==C&&(I===mo?n.cullFace(n.BACK):I===Dl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),C=I}function it(I){I!==L&&(B&&n.lineWidth(I),L=I)}function ve(I,ae,re){I?(Y(n.POLYGON_OFFSET_FILL),(j!==ae||F!==re)&&(n.polygonOffset(ae,re),j=ae,F=re)):be(n.POLYGON_OFFSET_FILL)}function je(I){I?Y(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function gt(I){I===void 0&&(I=n.TEXTURE0+V-1),ne!==I&&(n.activeTexture(I),ne=I)}function lt(I,ae,re){re===void 0&&(ne===null?re=n.TEXTURE0+V-1:re=ne);let ue=oe[re];ue===void 0&&(ue={type:void 0,texture:void 0},oe[re]=ue),(ue.type!==I||ue.texture!==ae)&&(ne!==re&&(n.activeTexture(re),ne=re),n.bindTexture(I,ae||X[I]),ue.type=I,ue.texture=ae)}function T(){const I=oe[ne];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(I){Ge.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ge.copy(I))}function Re(I){Je.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Je.copy(I))}function Me(I,ae){let re=d.get(ae);re===void 0&&(re=new WeakMap,d.set(ae,re));let ue=re.get(I);ue===void 0&&(ue=n.getUniformBlockIndex(ae,I.name),re.set(I,ue))}function ce(I,ae){const ue=d.get(ae).get(I);l.get(ae)!==ue&&(n.uniformBlockBinding(ae,ue,I.__bindingPointIndex),l.set(ae,ue))}function Le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ne=null,oe={},b={},p=new WeakMap,u=[],g=null,m=!1,f=null,c=null,_=null,x=null,v=null,w=null,A=null,R=new Ne(0,0,0),k=0,S=!1,y=null,C=null,L=null,j=null,F=null,Ge.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Y,disable:be,bindFramebuffer:Ie,drawBuffers:Ee,useProgram:Ve,setBlending:nt,setMaterial:Pe,setFlipSided:Ce,setCullFace:ge,setLineWidth:it,setPolygonOffset:ve,setScissorTest:je,activeTexture:gt,bindTexture:lt,unbindTexture:T,compressedTexImage2D:M,compressedTexImage3D:O,texImage2D:xe,texImage3D:te,updateUBOMapping:Me,uniformBlockBinding:ce,texStorage2D:ie,texStorage3D:_e,texSubImage2D:q,texSubImage3D:Z,compressedTexSubImage2D:W,compressedTexSubImage3D:ye,scissor:de,viewport:Re,reset:Le}}function Yp(n,e,t,a,i,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new De,h=new WeakMap;let b;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return u?new OffscreenCanvas(T,M):Wi("canvas")}function m(T,M,O){let q=1;const Z=lt(T);if((Z.width>O||Z.height>O)&&(q=O/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const W=Math.floor(q*Z.width),ye=Math.floor(q*Z.height);b===void 0&&(b=g(W,ye));const ie=M?g(W,ye):b;return ie.width=W,ie.height=ye,ie.getContext("2d").drawImage(T,0,0,W,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+W+"x"+ye+")."),ie}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function f(T){return T.generateMipmaps}function c(T){n.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(T,M,O,q,Z=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=M;if(M===n.RED&&(O===n.FLOAT&&(W=n.R32F),O===n.HALF_FLOAT&&(W=n.R16F),O===n.UNSIGNED_BYTE&&(W=n.R8)),M===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.R8UI),O===n.UNSIGNED_SHORT&&(W=n.R16UI),O===n.UNSIGNED_INT&&(W=n.R32UI),O===n.BYTE&&(W=n.R8I),O===n.SHORT&&(W=n.R16I),O===n.INT&&(W=n.R32I)),M===n.RG&&(O===n.FLOAT&&(W=n.RG32F),O===n.HALF_FLOAT&&(W=n.RG16F),O===n.UNSIGNED_BYTE&&(W=n.RG8)),M===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RG8UI),O===n.UNSIGNED_SHORT&&(W=n.RG16UI),O===n.UNSIGNED_INT&&(W=n.RG32UI),O===n.BYTE&&(W=n.RG8I),O===n.SHORT&&(W=n.RG16I),O===n.INT&&(W=n.RG32I)),M===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGB8UI),O===n.UNSIGNED_SHORT&&(W=n.RGB16UI),O===n.UNSIGNED_INT&&(W=n.RGB32UI),O===n.BYTE&&(W=n.RGB8I),O===n.SHORT&&(W=n.RGB16I),O===n.INT&&(W=n.RGB32I)),M===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),O===n.UNSIGNED_INT&&(W=n.RGBA32UI),O===n.BYTE&&(W=n.RGBA8I),O===n.SHORT&&(W=n.RGBA16I),O===n.INT&&(W=n.RGBA32I)),M===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),M===n.RGBA){const ye=Z?Gi:Xe.getTransfer(q);O===n.FLOAT&&(W=n.RGBA32F),O===n.HALF_FLOAT&&(W=n.RGBA16F),O===n.UNSIGNED_BYTE&&(W=ye===Ze?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function v(T,M){let O;return T?M===null||M===Ka||M===ti?O=n.DEPTH24_STENCIL8:M===ca?O=n.DEPTH32F_STENCIL8:M===ei&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ka||M===ti?O=n.DEPTH_COMPONENT24:M===ca?O=n.DEPTH_COMPONENT32F:M===ei&&(O=n.DEPTH_COMPONENT16),O}function w(T,M){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ht&&T.minFilter!==oa?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){const M=T.target;M.removeEventListener("dispose",A),k(M),M.isVideoTexture&&h.delete(M)}function R(T){const M=T.target;M.removeEventListener("dispose",R),y(M)}function k(T){const M=a.get(T);if(M.__webglInit===void 0)return;const O=T.source,q=p.get(O);if(q){const Z=q[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(T),Object.keys(q).length===0&&p.delete(O)}a.remove(T)}function S(T){const M=a.get(T);n.deleteTexture(M.__webglTexture);const O=T.source,q=p.get(O);delete q[M.__cacheKey],s.memory.textures--}function y(T){const M=a.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),a.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let Z=0;Z<M.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(M.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)n.deleteFramebuffer(M.__webglFramebuffer[q]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=T.textures;for(let q=0,Z=O.length;q<Z;q++){const W=a.get(O[q]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),s.memory.textures--),a.remove(O[q])}a.remove(T)}let C=0;function L(){C=0}function j(){const T=C;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),C+=1,T}function F(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function V(T,M){const O=a.get(T);if(T.isVideoTexture&&je(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,T,M);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+M)}function B(T,M){const O=a.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){X(O,T,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+M)}function J(T,M){const O=a.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){X(O,T,M);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+M)}function z(T,M){const O=a.get(T);if(T.version>0&&O.__version!==T.version){Y(O,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+M)}const ne={[Kr]:n.REPEAT,[Wa]:n.CLAMP_TO_EDGE,[Jr]:n.MIRRORED_REPEAT},oe={[Ht]:n.NEAREST,[id]:n.NEAREST_MIPMAP_NEAREST,[fi]:n.NEAREST_MIPMAP_LINEAR,[oa]:n.LINEAR,[ar]:n.LINEAR_MIPMAP_NEAREST,[qa]:n.LINEAR_MIPMAP_LINEAR},he={[cd]:n.NEVER,[bd]:n.ALWAYS,[ld]:n.LESS,[Vc]:n.LEQUAL,[dd]:n.EQUAL,[ud]:n.GEQUAL,[hd]:n.GREATER,[fd]:n.NOTEQUAL};function we(T,M){if(M.type===ca&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===oa||M.magFilter===ar||M.magFilter===fi||M.magFilter===qa||M.minFilter===oa||M.minFilter===ar||M.minFilter===fi||M.minFilter===qa)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ne[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ne[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ne[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,oe[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,oe[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,he[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ht||M.minFilter!==fi&&M.minFilter!==qa||M.type===ca&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||a.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),a.get(M).__currentAnisotropy=M.anisotropy}}}function Ge(T,M){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",A));const q=M.source;let Z=p.get(q);Z===void 0&&(Z={},p.set(q,Z));const W=F(M);if(W!==T.__cacheKey){Z[W]===void 0&&(Z[W]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,O=!0),Z[W].usedTimes++;const ye=Z[T.__cacheKey];ye!==void 0&&(Z[T.__cacheKey].usedTimes--,ye.usedTimes===0&&S(M)),T.__cacheKey=W,T.__webglTexture=Z[W].texture}return O}function Je(T,M,O){return Math.floor(Math.floor(T/O)/M)}function He(T,M,O,q){const W=T.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,O,q,M.data);else{W.sort((te,de)=>te.start-de.start);let ye=0;for(let te=1;te<W.length;te++){const de=W[ye],Re=W[te],Me=de.start+de.count,ce=Je(Re.start,M.width,4),Le=Je(de.start,M.width,4);Re.start<=Me+1&&ce===Le&&Je(Re.start+Re.count-1,M.width,4)===ce?de.count=Math.max(de.count,Re.start+Re.count-de.start):(++ye,W[ye]=Re)}W.length=ye+1;const ie=n.getParameter(n.UNPACK_ROW_LENGTH),_e=n.getParameter(n.UNPACK_SKIP_PIXELS),xe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let te=0,de=W.length;te<de;te++){const Re=W[te],Me=Math.floor(Re.start/4),ce=Math.ceil(Re.count/4),Le=Me%M.width,I=Math.floor(Me/M.width),ae=ce,re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Le,I,ae,re,O,q,M.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),n.pixelStorei(n.UNPACK_SKIP_ROWS,xe)}}function X(T,M,O){let q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=n.TEXTURE_3D);const Z=Ge(T,M),W=M.source;t.bindTexture(q,T.__webglTexture,n.TEXTURE0+O);const ye=a.get(W);if(W.version!==ye.__version||Z===!0){t.activeTexture(n.TEXTURE0+O);const ie=Xe.getPrimaries(Xe.workingColorSpace),_e=M.colorSpace===Ca?null:Xe.getPrimaries(M.colorSpace),xe=M.colorSpace===Ca||ie===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let te=m(M.image,!1,i.maxTextureSize);te=gt(M,te);const de=r.convert(M.format,M.colorSpace),Re=r.convert(M.type);let Me=x(M.internalFormat,de,Re,M.colorSpace,M.isVideoTexture);we(q,M);let ce;const Le=M.mipmaps,I=M.isVideoTexture!==!0,ae=ye.__version===void 0||Z===!0,re=W.dataReady,ue=w(M,te);if(M.isDepthTexture)Me=v(M.format===ni,M.type),ae&&(I?t.texStorage2D(n.TEXTURE_2D,1,Me,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Me,te.width,te.height,0,de,Re,null));else if(M.isDataTexture)if(Le.length>0){I&&ae&&t.texStorage2D(n.TEXTURE_2D,ue,Me,Le[0].width,Le[0].height);for(let $=0,K=Le.length;$<K;$++)ce=Le[$],I?re&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,ce.width,ce.height,de,Re,ce.data):t.texImage2D(n.TEXTURE_2D,$,Me,ce.width,ce.height,0,de,Re,ce.data);M.generateMipmaps=!1}else I?(ae&&t.texStorage2D(n.TEXTURE_2D,ue,Me,te.width,te.height),re&&He(M,te,de,Re)):t.texImage2D(n.TEXTURE_2D,0,Me,te.width,te.height,0,de,Re,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){I&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Me,Le[0].width,Le[0].height,te.depth);for(let $=0,K=Le.length;$<K;$++)if(ce=Le[$],M.format!==ea)if(de!==null)if(I){if(re)if(M.layerUpdates.size>0){const me=ec(ce.width,ce.height,M.format,M.type);for(const Ue of M.layerUpdates){const tt=ce.data.subarray(Ue*me/ce.data.BYTES_PER_ELEMENT,(Ue+1)*me/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,Ue,ce.width,ce.height,1,de,tt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,ce.width,ce.height,te.depth,de,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Me,ce.width,ce.height,te.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,ce.width,ce.height,te.depth,de,Re,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Me,ce.width,ce.height,te.depth,0,de,Re,ce.data)}else{I&&ae&&t.texStorage2D(n.TEXTURE_2D,ue,Me,Le[0].width,Le[0].height);for(let $=0,K=Le.length;$<K;$++)ce=Le[$],M.format!==ea?de!==null?I?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,ce.width,ce.height,de,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?re&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,ce.width,ce.height,de,Re,ce.data):t.texImage2D(n.TEXTURE_2D,$,Me,ce.width,ce.height,0,de,Re,ce.data)}else if(M.isDataArrayTexture)if(I){if(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Me,te.width,te.height,te.depth),re)if(M.layerUpdates.size>0){const $=ec(te.width,te.height,M.format,M.type);for(const K of M.layerUpdates){const me=te.data.subarray(K*$/te.data.BYTES_PER_ELEMENT,(K+1)*$/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,de,Re,me)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,de,Re,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,te.width,te.height,te.depth,0,de,Re,te.data);else if(M.isData3DTexture)I?(ae&&t.texStorage3D(n.TEXTURE_3D,ue,Me,te.width,te.height,te.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,de,Re,te.data)):t.texImage3D(n.TEXTURE_3D,0,Me,te.width,te.height,te.depth,0,de,Re,te.data);else if(M.isFramebufferTexture){if(ae)if(I)t.texStorage2D(n.TEXTURE_2D,ue,Me,te.width,te.height);else{let $=te.width,K=te.height;for(let me=0;me<ue;me++)t.texImage2D(n.TEXTURE_2D,me,Me,$,K,0,de,Re,null),$>>=1,K>>=1}}else if(Le.length>0){if(I&&ae){const $=lt(Le[0]);t.texStorage2D(n.TEXTURE_2D,ue,Me,$.width,$.height)}for(let $=0,K=Le.length;$<K;$++)ce=Le[$],I?re&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,de,Re,ce):t.texImage2D(n.TEXTURE_2D,$,Me,de,Re,ce);M.generateMipmaps=!1}else if(I){if(ae){const $=lt(te);t.texStorage2D(n.TEXTURE_2D,ue,Me,$.width,$.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Re,te)}else t.texImage2D(n.TEXTURE_2D,0,Me,de,Re,te);f(M)&&c(q),ye.__version=W.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Y(T,M,O){if(M.image.length!==6)return;const q=Ge(T,M),Z=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+O);const W=a.get(Z);if(Z.version!==W.__version||q===!0){t.activeTexture(n.TEXTURE0+O);const ye=Xe.getPrimaries(Xe.workingColorSpace),ie=M.colorSpace===Ca?null:Xe.getPrimaries(M.colorSpace),_e=M.colorSpace===Ca||ye===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const xe=M.isCompressedTexture||M.image[0].isCompressedTexture,te=M.image[0]&&M.image[0].isDataTexture,de=[];for(let K=0;K<6;K++)!xe&&!te?de[K]=m(M.image[K],!0,i.maxCubemapSize):de[K]=te?M.image[K].image:M.image[K],de[K]=gt(M,de[K]);const Re=de[0],Me=r.convert(M.format,M.colorSpace),ce=r.convert(M.type),Le=x(M.internalFormat,Me,ce,M.colorSpace),I=M.isVideoTexture!==!0,ae=W.__version===void 0||q===!0,re=Z.dataReady;let ue=w(M,Re);we(n.TEXTURE_CUBE_MAP,M);let $;if(xe){I&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Le,Re.width,Re.height);for(let K=0;K<6;K++){$=de[K].mipmaps;for(let me=0;me<$.length;me++){const Ue=$[me];M.format!==ea?Me!==null?I?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,Ue.width,Ue.height,Me,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,Le,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,Ue.width,Ue.height,Me,ce,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,Le,Ue.width,Ue.height,0,Me,ce,Ue.data)}}}else{if($=M.mipmaps,I&&ae){$.length>0&&ue++;const K=lt(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Le,K.width,K.height)}for(let K=0;K<6;K++)if(te){I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,de[K].width,de[K].height,Me,ce,de[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Le,de[K].width,de[K].height,0,Me,ce,de[K].data);for(let me=0;me<$.length;me++){const tt=$[me].image[K].image;I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,tt.width,tt.height,Me,ce,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,Le,tt.width,tt.height,0,Me,ce,tt.data)}}else{I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me,ce,de[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Le,Me,ce,de[K]);for(let me=0;me<$.length;me++){const Ue=$[me];I?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,Me,ce,Ue.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,Le,Me,ce,Ue.image[K])}}}f(M)&&c(n.TEXTURE_CUBE_MAP),W.__version=Z.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function be(T,M,O,q,Z,W){const ye=r.convert(O.format,O.colorSpace),ie=r.convert(O.type),_e=x(O.internalFormat,ye,ie,O.colorSpace),xe=a.get(M),te=a.get(O);if(te.__renderTarget=M,!xe.__hasExternalTextures){const de=Math.max(1,M.width>>W),Re=Math.max(1,M.height>>W);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,W,_e,de,Re,M.depth,0,ye,ie,null):t.texImage2D(Z,W,_e,de,Re,0,ye,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ve(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Z,te.__webglTexture,0,it(M)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Z,te.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(T,M,O){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){const q=M.depthTexture,Z=q&&q.isDepthTexture?q.type:null,W=v(M.stencilBuffer,Z),ye=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=it(M);ve(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,W,M.width,M.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,W,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,W,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,T)}else{const q=M.textures;for(let Z=0;Z<q.length;Z++){const W=q[Z],ye=r.convert(W.format,W.colorSpace),ie=r.convert(W.type),_e=x(W.internalFormat,ye,ie,W.colorSpace),xe=it(M);O&&ve(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,_e,M.width,M.height):ve(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,_e,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,_e,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=a.get(M.depthTexture);q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const Z=q.__webglTexture,W=it(M);if(M.depthTexture.format===ai)ve(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(M.depthTexture.format===ni)ve(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ve(T){const M=a.get(T),O=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=q}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=T.texture.mipmaps;q&&q.length>0?Ee(M.__webglFramebuffer[0],T):Ee(M.__webglFramebuffer,T)}else if(O){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=n.createRenderbuffer(),Ie(M.__webglDepthbuffer[q],T,!1);else{const Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=M.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,W)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Ie(M.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(T,M,O){const q=a.get(T);M!==void 0&&be(q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ve(T)}function D(T){const M=T.texture,O=a.get(T),q=a.get(M);T.addEventListener("dispose",R);const Z=T.textures,W=T.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=M.version,s.memory.textures++),W){O.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[ie]=[];for(let _e=0;_e<M.mipmaps.length;_e++)O.__webglFramebuffer[ie][_e]=n.createFramebuffer()}else O.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let ie=0;ie<M.mipmaps.length;ie++)O.__webglFramebuffer[ie]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ye)for(let ie=0,_e=Z.length;ie<_e;ie++){const xe=a.get(Z[ie]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),s.memory.textures++)}if(T.samples>0&&ve(T)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){const _e=Z[ie];O.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ie]);const xe=r.convert(_e.format,_e.colorSpace),te=r.convert(_e.type),de=x(_e.internalFormat,xe,te,_e.colorSpace,T.isXRRenderTarget===!0),Re=it(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,de,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,O.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),we(n.TEXTURE_CUBE_MAP,M);for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)be(O.__webglFramebuffer[ie][_e],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,_e);else be(O.__webglFramebuffer[ie],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);f(M)&&c(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ie=0,_e=Z.length;ie<_e;ie++){const xe=Z[ie],te=a.get(xe);let de=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(de=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,te.__webglTexture),we(de,xe),be(O.__webglFramebuffer,T,xe,n.COLOR_ATTACHMENT0+ie,de,0),f(xe)&&c(de)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),we(ie,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)be(O.__webglFramebuffer[_e],T,M,n.COLOR_ATTACHMENT0,ie,_e);else be(O.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,ie,0);f(M)&&c(ie),t.unbindTexture()}T.depthBuffer&&Ve(T)}function nt(T){const M=T.textures;for(let O=0,q=M.length;O<q;O++){const Z=M[O];if(f(Z)){const W=_(T),ye=a.get(Z).__webglTexture;t.bindTexture(W,ye),c(W),t.unbindTexture()}}}const Pe=[],Ce=[];function ge(T){if(T.samples>0){if(ve(T)===!1){const M=T.textures,O=T.width,q=T.height;let Z=n.COLOR_BUFFER_BIT;const W=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=a.get(T),ie=M.length>1;if(ie)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const _e=T.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);const te=a.get(M[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,O,q,0,0,O,q,Z,n.NEAREST),l===!0&&(Pe.length=0,Ce.length=0,Pe.push(n.COLOR_ATTACHMENT0+xe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Pe.push(W),Ce.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);const te=a.get(M[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function it(T){return Math.min(i.maxSamples,T.samples)}function ve(T){const M=a.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function je(T){const M=s.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function gt(T,M){const O=T.colorSpace,q=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Dn&&O!==Ca&&(Xe.getTransfer(O)===Ze?(q!==ea||Z!==da)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function lt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(d.width=T.naturalWidth||T.width,d.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(d.width=T.displayWidth,d.height=T.displayHeight):(d.width=T.width,d.height=T.height),d}this.allocateTextureUnit=j,this.resetTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=xt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ve}function Zp(n,e){function t(a,i=Ca){let r;const s=Xe.getTransfer(i);if(a===da)return n.UNSIGNED_BYTE;if(a===Os)return n.UNSIGNED_SHORT_4_4_4_4;if(a===Bs)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Oc)return n.UNSIGNED_INT_5_9_9_9_REV;if(a===Bc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(a===Fc)return n.BYTE;if(a===jc)return n.SHORT;if(a===ei)return n.UNSIGNED_SHORT;if(a===js)return n.INT;if(a===Ka)return n.UNSIGNED_INT;if(a===ca)return n.FLOAT;if(a===oi)return n.HALF_FLOAT;if(a===zc)return n.ALPHA;if(a===Hc)return n.RGB;if(a===ea)return n.RGBA;if(a===ai)return n.DEPTH_COMPONENT;if(a===ni)return n.DEPTH_STENCIL;if(a===zs)return n.RED;if(a===Hs)return n.RED_INTEGER;if(a===Gc)return n.RG;if(a===Gs)return n.RG_INTEGER;if(a===Vs)return n.RGBA_INTEGER;if(a===ji||a===Oi||a===Bi||a===zi)if(s===Ze)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(a===ji)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Oi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Bi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===zi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(a===ji)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Oi)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Bi)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===zi)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Yr||a===Zr||a===Qr||a===$r)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(a===Yr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Zr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Qr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===$r)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===es||a===ts||a===as)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(a===es||a===ts)return s===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(a===as)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ns||a===is||a===rs||a===ss||a===os||a===cs||a===ls||a===ds||a===hs||a===fs||a===us||a===bs||a===ps||a===ms)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(a===ns)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===is)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===rs)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ss)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===os)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===cs)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===ls)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ds)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===hs)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===fs)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===us)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===bs)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ps)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===ms)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===gs||a===vs||a===_s)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(a===gs)return s===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===vs)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===_s)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===xs||a===Ms||a===ys||a===Es)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(a===xs)return r.COMPRESSED_RED_RGTC1_EXT;if(a===Ms)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ys)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Es)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ti?n.UNSIGNED_INT_24_8:n[a]!==void 0?n[a]:null}return{convert:t}}const Qp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$p=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class em{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const a=new nl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,a=new Ua({vertexShader:Qp,fragmentShader:$p,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Ln(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tm extends $a{constructor(e,t){super();const a=this;let i=null,r=1,s=null,o="local-floor",l=1,d=null,h=null,b=null,p=null,u=null,g=null;const m=typeof XRWebGLBinding<"u",f=new em,c={},_=t.getContextAttributes();let x=null,v=null;const w=[],A=[],R=new De;let k=null;const S=new Bt;S.viewport=new $e;const y=new Bt;y.viewport=new $e;const C=[S,y],L=new vh;let j=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Y=w[X];return Y===void 0&&(Y=new Er,w[X]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(X){let Y=w[X];return Y===void 0&&(Y=new Er,w[X]=Y),Y.getGripSpace()},this.getHand=function(X){let Y=w[X];return Y===void 0&&(Y=new Er,w[X]=Y),Y.getHandSpace()};function V(X){const Y=A.indexOf(X.inputSource);if(Y===-1)return;const be=w[Y];be!==void 0&&(be.update(X.inputSource,X.frame,d||s),be.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",J);for(let X=0;X<w.length;X++){const Y=A[X];Y!==null&&(A[X]=null,w[X].disconnect(Y))}j=null,F=null,f.reset();for(const X in c)delete c[X];e.setRenderTarget(x),u=null,p=null,b=null,i=null,v=null,He.stop(),a.isPresenting=!1,e.setPixelRatio(k),e.setSize(R.width,R.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||s},this.setReferenceSpace=function(X){d=X},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return b===null&&m&&(b=new XRWebGLBinding(i,t)),b},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",B),i.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(R),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ie=null,Ee=null;_.depth&&(Ee=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=_.stencil?ni:ai,Ie=_.stencil?ti:Ka);const Ve={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};b=this.getBinding(),p=b.createProjectionLayer(Ve),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new Ya(p.textureWidth,p.textureHeight,{format:ea,type:da,depthTexture:new al(p.textureWidth,p.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const be={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,t,be),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new Ya(u.framebufferWidth,u.framebufferHeight,{format:ea,type:da,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),d=null,s=await i.requestReferenceSpace(o),He.setContext(i),He.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function J(X){for(let Y=0;Y<X.removed.length;Y++){const be=X.removed[Y],Ie=A.indexOf(be);Ie>=0&&(A[Ie]=null,w[Ie].disconnect(be))}for(let Y=0;Y<X.added.length;Y++){const be=X.added[Y];let Ie=A.indexOf(be);if(Ie===-1){for(let Ve=0;Ve<w.length;Ve++)if(Ve>=A.length){A.push(be),Ie=Ve;break}else if(A[Ve]===null){A[Ve]=be,Ie=Ve;break}if(Ie===-1)break}const Ee=w[Ie];Ee&&Ee.connect(be)}}const z=new U,ne=new U;function oe(X,Y,be){z.setFromMatrixPosition(Y.matrixWorld),ne.setFromMatrixPosition(be.matrixWorld);const Ie=z.distanceTo(ne),Ee=Y.projectionMatrix.elements,Ve=be.projectionMatrix.elements,xt=Ee[14]/(Ee[10]-1),D=Ee[14]/(Ee[10]+1),nt=(Ee[9]+1)/Ee[5],Pe=(Ee[9]-1)/Ee[5],Ce=(Ee[8]-1)/Ee[0],ge=(Ve[8]+1)/Ve[0],it=xt*Ce,ve=xt*ge,je=Ie/(-Ce+ge),gt=je*-Ce;if(Y.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(gt),X.translateZ(je),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ee[10]===-1)X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const lt=xt+je,T=D+je,M=it-gt,O=ve+(Ie-gt),q=nt*D/T*lt,Z=Pe*D/T*lt;X.projectionMatrix.makePerspective(M,O,q,Z,lt,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function he(X,Y){Y===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Y.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let Y=X.near,be=X.far;f.texture!==null&&(f.depthNear>0&&(Y=f.depthNear),f.depthFar>0&&(be=f.depthFar)),L.near=y.near=S.near=Y,L.far=y.far=S.far=be,(j!==L.near||F!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),j=L.near,F=L.far),L.layers.mask=X.layers.mask|6,S.layers.mask=L.layers.mask&3,y.layers.mask=L.layers.mask&5;const Ie=X.parent,Ee=L.cameras;he(L,Ie);for(let Ve=0;Ve<Ee.length;Ve++)he(Ee[Ve],Ie);Ee.length===2?oe(L,S,y):L.projectionMatrix.copy(S.projectionMatrix),we(X,L,Ie)};function we(X,Y,be){be===null?X.matrix.copy(Y.matrixWorld):(X.matrix.copy(be.matrixWorld),X.matrix.invert(),X.matrix.multiply(Y.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ii*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(p===null&&u===null))return l},this.setFoveation=function(X){l=X,p!==null&&(p.fixedFoveation=X),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=X)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(L)},this.getCameraTexture=function(X){return c[X]};let Ge=null;function Je(X,Y){if(h=Y.getViewerPose(d||s),g=Y,h!==null){const be=h.views;u!==null&&(e.setRenderTargetFramebuffer(v,u.framebuffer),e.setRenderTarget(v));let Ie=!1;be.length!==L.cameras.length&&(L.cameras.length=0,Ie=!0);for(let D=0;D<be.length;D++){const nt=be[D];let Pe=null;if(u!==null)Pe=u.getViewport(nt);else{const ge=b.getViewSubImage(p,nt);Pe=ge.viewport,D===0&&(e.setRenderTargetTextures(v,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(v))}let Ce=C[D];Ce===void 0&&(Ce=new Bt,Ce.layers.enable(D),Ce.viewport=new $e,C[D]=Ce),Ce.matrix.fromArray(nt.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(nt.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),D===0&&(L.matrix.copy(Ce.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ie===!0&&L.cameras.push(Ce)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&m){b=a.getBinding();const D=b.getDepthInformation(be[0]);D&&D.isValid&&D.texture&&f.init(D,i.renderState)}if(Ee&&Ee.includes("camera-access")&&m){e.state.unbindTexture(),b=a.getBinding();for(let D=0;D<be.length;D++){const nt=be[D].camera;if(nt){let Pe=c[nt];Pe||(Pe=new nl,c[nt]=Pe);const Ce=b.getCameraImage(nt);Pe.sourceTexture=Ce}}}}for(let be=0;be<w.length;be++){const Ie=A[be],Ee=w[be];Ie!==null&&Ee!==void 0&&Ee.update(Ie,Y,d||s)}Ge&&Ge(X,Y),Y.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Y}),g=null}const He=new ol;He.setAnimationLoop(Je),this.setAnimationLoop=function(X){Ge=X},this.dispose=function(){}}}const za=new ta,am=new We;function nm(n,e){function t(f,c){f.matrixAutoUpdate===!0&&f.updateMatrix(),c.value.copy(f.matrix)}function a(f,c){c.color.getRGB(f.fogColor.value,Zc(n)),c.isFog?(f.fogNear.value=c.near,f.fogFar.value=c.far):c.isFogExp2&&(f.fogDensity.value=c.density)}function i(f,c,_,x,v){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(f,c):c.isMeshToonMaterial?(r(f,c),b(f,c)):c.isMeshPhongMaterial?(r(f,c),h(f,c)):c.isMeshStandardMaterial?(r(f,c),p(f,c),c.isMeshPhysicalMaterial&&u(f,c,v)):c.isMeshMatcapMaterial?(r(f,c),g(f,c)):c.isMeshDepthMaterial?r(f,c):c.isMeshDistanceMaterial?(r(f,c),m(f,c)):c.isMeshNormalMaterial?r(f,c):c.isLineBasicMaterial?(s(f,c),c.isLineDashedMaterial&&o(f,c)):c.isPointsMaterial?l(f,c,_,x):c.isSpriteMaterial?d(f,c):c.isShadowMaterial?(f.color.value.copy(c.color),f.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(f,c){f.opacity.value=c.opacity,c.color&&f.diffuse.value.copy(c.color),c.emissive&&f.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(f.map.value=c.map,t(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,t(c.alphaMap,f.alphaMapTransform)),c.bumpMap&&(f.bumpMap.value=c.bumpMap,t(c.bumpMap,f.bumpMapTransform),f.bumpScale.value=c.bumpScale,c.side===Tt&&(f.bumpScale.value*=-1)),c.normalMap&&(f.normalMap.value=c.normalMap,t(c.normalMap,f.normalMapTransform),f.normalScale.value.copy(c.normalScale),c.side===Tt&&f.normalScale.value.negate()),c.displacementMap&&(f.displacementMap.value=c.displacementMap,t(c.displacementMap,f.displacementMapTransform),f.displacementScale.value=c.displacementScale,f.displacementBias.value=c.displacementBias),c.emissiveMap&&(f.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,f.emissiveMapTransform)),c.specularMap&&(f.specularMap.value=c.specularMap,t(c.specularMap,f.specularMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest);const _=e.get(c),x=_.envMap,v=_.envMapRotation;x&&(f.envMap.value=x,za.copy(v),za.x*=-1,za.y*=-1,za.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(za.y*=-1,za.z*=-1),f.envMapRotation.value.setFromMatrix4(am.makeRotationFromEuler(za)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=c.reflectivity,f.ior.value=c.ior,f.refractionRatio.value=c.refractionRatio),c.lightMap&&(f.lightMap.value=c.lightMap,f.lightMapIntensity.value=c.lightMapIntensity,t(c.lightMap,f.lightMapTransform)),c.aoMap&&(f.aoMap.value=c.aoMap,f.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,f.aoMapTransform))}function s(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,c.map&&(f.map.value=c.map,t(c.map,f.mapTransform))}function o(f,c){f.dashSize.value=c.dashSize,f.totalSize.value=c.dashSize+c.gapSize,f.scale.value=c.scale}function l(f,c,_,x){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.size.value=c.size*_,f.scale.value=x*.5,c.map&&(f.map.value=c.map,t(c.map,f.uvTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,t(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function d(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.rotation.value=c.rotation,c.map&&(f.map.value=c.map,t(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,t(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function h(f,c){f.specular.value.copy(c.specular),f.shininess.value=Math.max(c.shininess,1e-4)}function b(f,c){c.gradientMap&&(f.gradientMap.value=c.gradientMap)}function p(f,c){f.metalness.value=c.metalness,c.metalnessMap&&(f.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,f.metalnessMapTransform)),f.roughness.value=c.roughness,c.roughnessMap&&(f.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,f.roughnessMapTransform)),c.envMap&&(f.envMapIntensity.value=c.envMapIntensity)}function u(f,c,_){f.ior.value=c.ior,c.sheen>0&&(f.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),f.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(f.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,f.sheenColorMapTransform)),c.sheenRoughnessMap&&(f.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,f.sheenRoughnessMapTransform))),c.clearcoat>0&&(f.clearcoat.value=c.clearcoat,f.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(f.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,f.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(f.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Tt&&f.clearcoatNormalScale.value.negate())),c.dispersion>0&&(f.dispersion.value=c.dispersion),c.iridescence>0&&(f.iridescence.value=c.iridescence,f.iridescenceIOR.value=c.iridescenceIOR,f.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(f.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,f.iridescenceMapTransform)),c.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),c.transmission>0&&(f.transmission.value=c.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(f.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,f.transmissionMapTransform)),f.thickness.value=c.thickness,c.thicknessMap&&(f.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=c.attenuationDistance,f.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(f.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(f.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=c.specularIntensity,f.specularColor.value.copy(c.specularColor),c.specularColorMap&&(f.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,f.specularColorMapTransform)),c.specularIntensityMap&&(f.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,c){c.matcap&&(f.matcap.value=c.matcap)}function m(f,c){const _=e.get(c).light;f.referencePosition.value.setFromMatrixPosition(_.matrixWorld),f.nearDistance.value=_.shadow.camera.near,f.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:i}}function im(n,e,t,a){let i={},r={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const v=x.program;a.uniformBlockBinding(_,v)}function d(_,x){let v=i[_.id];v===void 0&&(g(_),v=h(_),i[_.id]=v,_.addEventListener("dispose",f));const w=x.program;a.updateUBOMapping(_,w);const A=e.render.frame;r[_.id]!==A&&(p(_),r[_.id]=A)}function h(_){const x=b();_.__bindingPointIndex=x;const v=n.createBuffer(),w=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,w,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function b(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){const x=i[_.id],v=_.uniforms,w=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,R=v.length;A<R;A++){const k=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,y=k.length;S<y;S++){const C=k[S];if(u(C,A,S,w)===!0){const L=C.__offset,j=Array.isArray(C.value)?C.value:[C.value];let F=0;for(let V=0;V<j.length;V++){const B=j[V],J=m(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,L+F,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,F),F+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,x,v,w){const A=_.value,R=x+"_"+v;if(w[R]===void 0)return typeof A=="number"||typeof A=="boolean"?w[R]=A:w[R]=A.clone(),!0;{const k=w[R];if(typeof A=="number"||typeof A=="boolean"){if(k!==A)return w[R]=A,!0}else if(k.equals(A)===!1)return k.copy(A),!0}return!1}function g(_){const x=_.uniforms;let v=0;const w=16;for(let R=0,k=x.length;R<k;R++){const S=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,C=S.length;y<C;y++){const L=S[y],j=Array.isArray(L.value)?L.value:[L.value];for(let F=0,V=j.length;F<V;F++){const B=j[F],J=m(B),z=v%w,ne=z%J.boundary,oe=z+ne;v+=ne,oe!==0&&w-oe<J.storage&&(v+=w-oe),L.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=J.storage}}}const A=v%w;return A>0&&(v+=w-A),_.__size=v,_.__cache={},this}function m(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function f(_){const x=_.target;x.removeEventListener("dispose",f);const v=s.indexOf(x.__bindingPointIndex);s.splice(v,1),n.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function c(){for(const _ in i)n.deleteBuffer(i[_]);s=[],i={},r={}}return{bind:l,update:d,dispose:c}}class rm{constructor(e={}){const{canvas:t=Dd(),context:a=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:b=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let u;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=a.getContextAttributes().alpha}else u=s;const g=new Uint32Array(4),m=new Int32Array(4);let f=null,c=null;const _=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Da,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=Ut;let A=0,R=0,k=null,S=-1,y=null;const C=new $e,L=new $e;let j=null;const F=new Ne(0);let V=0,B=t.width,J=t.height,z=1,ne=null,oe=null;const he=new $e(0,0,B,J),we=new $e(0,0,B,J);let Ge=!1;const Je=new Ys;let He=!1,X=!1;const Y=new We,be=new U,Ie=new $e,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function xt(){return k===null?z:1}let D=a;function nt(E,P){return t.getContext(E,P)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:b};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ls}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",$,!1),D===null){const P="webgl2";if(D=nt(P,E),D===null)throw nt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Pe,Ce,ge,it,ve,je,gt,lt,T,M,O,q,Z,W,ye,ie,_e,xe,te,de,Re,Me,ce,Le;function I(){Pe=new pb(D),Pe.init(),Me=new Zp(D,Pe),Ce=new cb(D,Pe,e,Me),ge=new Jp(D,Pe),Ce.reversedDepthBuffer&&p&&ge.buffers.depth.setReversed(!0),it=new vb(D),ve=new Lp,je=new Yp(D,Pe,ge,ve,Ce,Me,it),gt=new db(v),lt=new bb(v),T=new Eh(D),ce=new sb(D,T),M=new mb(D,T,it,ce),O=new xb(D,M,T,it),te=new _b(D,Ce,je),ie=new lb(ve),q=new Np(v,gt,lt,Pe,Ce,ce,ie),Z=new nm(v,ve),W=new jp,ye=new Vp(Pe),xe=new rb(v,gt,lt,ge,O,u,l),_e=new Xp(v,O,Ce),Le=new im(D,it,Ce,ge),de=new ob(D,Pe,it),Re=new gb(D,Pe,it),it.programs=q.programs,v.capabilities=Ce,v.extensions=Pe,v.properties=ve,v.renderLists=W,v.shadowMap=_e,v.state=ge,v.info=it}I();const ae=new tm(v,D);this.xr=ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Pe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Pe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(B,J,!1))},this.getSize=function(E){return E.set(B,J)},this.setSize=function(E,P,H=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,J=P,t.width=Math.floor(E*z),t.height=Math.floor(P*z),H===!0&&(t.style.width=E+"px",t.style.height=P+"px"),this.setViewport(0,0,E,P)},this.getDrawingBufferSize=function(E){return E.set(B*z,J*z).floor()},this.setDrawingBufferSize=function(E,P,H){B=E,J=P,z=H,t.width=Math.floor(E*H),t.height=Math.floor(P*H),this.setViewport(0,0,E,P)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(he)},this.setViewport=function(E,P,H,G){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,P,H,G),ge.viewport(C.copy(he).multiplyScalar(z).round())},this.getScissor=function(E){return E.copy(we)},this.setScissor=function(E,P,H,G){E.isVector4?we.set(E.x,E.y,E.z,E.w):we.set(E,P,H,G),ge.scissor(L.copy(we).multiplyScalar(z).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(E){ge.setScissorTest(Ge=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(E=!0,P=!0,H=!0){let G=0;if(E){let N=!1;if(k!==null){const ee=k.texture.format;N=ee===Vs||ee===Gs||ee===Hs}if(N){const ee=k.texture.type,le=ee===da||ee===Ka||ee===ei||ee===ti||ee===Os||ee===Bs,pe=xe.getClearColor(),fe=xe.getClearAlpha(),Te=pe.r,ke=pe.g,Se=pe.b;le?(g[0]=Te,g[1]=ke,g[2]=Se,g[3]=fe,D.clearBufferuiv(D.COLOR,0,g)):(m[0]=Te,m[1]=ke,m[2]=Se,m[3]=fe,D.clearBufferiv(D.COLOR,0,m))}else G|=D.COLOR_BUFFER_BIT}P&&(G|=D.DEPTH_BUFFER_BIT),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",$,!1),xe.dispose(),W.dispose(),ye.dispose(),ve.dispose(),gt.dispose(),lt.dispose(),O.dispose(),ce.dispose(),Le.dispose(),q.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",aa),ae.removeEventListener("sessionend",lo),Pa.stop()};function re(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=it.autoReset,P=_e.enabled,H=_e.autoUpdate,G=_e.needsUpdate,N=_e.type;I(),it.autoReset=E,_e.enabled=P,_e.autoUpdate=H,_e.needsUpdate=G,_e.type=N}function $(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function K(E){const P=E.target;P.removeEventListener("dispose",K),me(P)}function me(E){Ue(E),ve.remove(E)}function Ue(E){const P=ve.get(E).programs;P!==void 0&&(P.forEach(function(H){q.releaseProgram(H)}),E.isShaderMaterial&&q.releaseShaderCache(E))}this.renderBufferDirect=function(E,P,H,G,N,ee){P===null&&(P=Ee);const le=N.isMesh&&N.matrixWorld.determinant()<0,pe=Sl(E,P,H,G,N);ge.setMaterial(G,le);let fe=H.index,Te=1;if(G.wireframe===!0){if(fe=M.getWireframeAttribute(H),fe===void 0)return;Te=2}const ke=H.drawRange,Se=H.attributes.position;let ze=ke.start*Te,Ye=(ke.start+ke.count)*Te;ee!==null&&(ze=Math.max(ze,ee.start*Te),Ye=Math.min(Ye,(ee.start+ee.count)*Te)),fe!==null?(ze=Math.max(ze,0),Ye=Math.min(Ye,fe.count)):Se!=null&&(ze=Math.max(ze,0),Ye=Math.min(Ye,Se.count));const ct=Ye-ze;if(ct<0||ct===1/0)return;ce.setup(N,G,pe,H,fe);let at,et=de;if(fe!==null&&(at=T.get(fe),et=Re,et.setIndex(at)),N.isMesh)G.wireframe===!0?(ge.setLineWidth(G.wireframeLinewidth*xt()),et.setMode(D.LINES)):et.setMode(D.TRIANGLES);else if(N.isLine){let Ae=G.linewidth;Ae===void 0&&(Ae=1),ge.setLineWidth(Ae*xt()),N.isLineSegments?et.setMode(D.LINES):N.isLineLoop?et.setMode(D.LINE_LOOP):et.setMode(D.LINE_STRIP)}else N.isPoints?et.setMode(D.POINTS):N.isSprite&&et.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ri("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Pe.get("WEBGL_multi_draw"))et.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ae=N._multiDrawStarts,st=N._multiDrawCounts,qe=N._multiDrawCount,Pt=fe?T.get(fe).bytesPerElement:1,nn=ve.get(G).currentProgram.getUniforms();for(let Nt=0;Nt<qe;Nt++)nn.setValue(D,"_gl_DrawID",Nt),et.render(Ae[Nt]/Pt,st[Nt])}else if(N.isInstancedMesh)et.renderInstances(ze,ct,N.count);else if(H.isInstancedBufferGeometry){const Ae=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,st=Math.min(H.instanceCount,Ae);et.renderInstances(ze,ct,st)}else et.render(ze,ct)};function tt(E,P,H){E.transparent===!0&&E.side===zt&&E.forceSinglePass===!1?(E.side=Tt,E.needsUpdate=!0,hi(E,P,H),E.side=Ia,E.needsUpdate=!0,hi(E,P,H),E.side=zt):hi(E,P,H)}this.compile=function(E,P,H=null){H===null&&(H=E),c=ye.get(H),c.init(P),x.push(c),H.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(c.pushLight(N),N.castShadow&&c.pushShadow(N))}),E!==H&&E.traverseVisible(function(N){N.isLight&&N.layers.test(P.layers)&&(c.pushLight(N),N.castShadow&&c.pushShadow(N))}),c.setupLights();const G=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ee=N.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const pe=ee[le];tt(pe,H,N),G.add(pe)}else tt(ee,H,N),G.add(ee)}),c=x.pop(),G},this.compileAsync=function(E,P,H=null){const G=this.compile(E,P,H);return new Promise(N=>{function ee(){if(G.forEach(function(le){ve.get(le).currentProgram.isReady()&&G.delete(le)}),G.size===0){N(E);return}setTimeout(ee,10)}Pe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Ke=null;function ha(E){Ke&&Ke(E)}function aa(){Pa.stop()}function lo(){Pa.start()}const Pa=new ol;Pa.setAnimationLoop(ha),typeof self<"u"&&Pa.setContext(self),this.setAnimationLoop=function(E){Ke=E,ae.setAnimationLoop(E),E===null?Pa.stop():Pa.start()},ae.addEventListener("sessionstart",aa),ae.addEventListener("sessionend",lo),this.render=function(E,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(P),P=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,P,k),c=ye.get(E,x.length),c.init(P),x.push(c),Y.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Je.setFromProjectionMatrix(Y,la,P.reversedDepth),X=this.localClippingEnabled,He=ie.init(this.clippingPlanes,X),f=W.get(E,_.length),f.init(),_.push(f),ae.enabled===!0&&ae.isPresenting===!0){const ee=v.xr.getDepthSensingMesh();ee!==null&&er(ee,P,-1/0,v.sortObjects)}er(E,P,0,v.sortObjects),f.finish(),v.sortObjects===!0&&f.sort(ne,oe),Ve=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Ve&&xe.addToRenderList(f,E),this.info.render.frame++,He===!0&&ie.beginShadows();const H=c.state.shadowsArray;_e.render(H,E,P),He===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=f.opaque,N=f.transmissive;if(c.setupLights(),P.isArrayCamera){const ee=P.cameras;if(N.length>0)for(let le=0,pe=ee.length;le<pe;le++){const fe=ee[le];fo(G,N,E,fe)}Ve&&xe.render(E);for(let le=0,pe=ee.length;le<pe;le++){const fe=ee[le];ho(f,E,fe,fe.viewport)}}else N.length>0&&fo(G,N,E,P),Ve&&xe.render(E),ho(f,E,P);k!==null&&R===0&&(je.updateMultisampleRenderTarget(k),je.updateRenderTargetMipmap(k)),E.isScene===!0&&E.onAfterRender(v,E,P),ce.resetDefaultState(),S=-1,y=null,x.pop(),x.length>0?(c=x[x.length-1],He===!0&&ie.setGlobalState(v.clippingPlanes,c.state.camera)):c=null,_.pop(),_.length>0?f=_[_.length-1]:f=null};function er(E,P,H,G){if(E.visible===!1)return;if(E.layers.test(P.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(P);else if(E.isLight)c.pushLight(E),E.castShadow&&c.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Je.intersectsSprite(E)){G&&Ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Y);const le=O.update(E),pe=E.material;pe.visible&&f.push(E,le,pe,H,Ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Je.intersectsObject(E))){const le=O.update(E),pe=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ie.copy(E.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ie.copy(le.boundingSphere.center)),Ie.applyMatrix4(E.matrixWorld).applyMatrix4(Y)),Array.isArray(pe)){const fe=le.groups;for(let Te=0,ke=fe.length;Te<ke;Te++){const Se=fe[Te],ze=pe[Se.materialIndex];ze&&ze.visible&&f.push(E,le,ze,H,Ie.z,Se)}}else pe.visible&&f.push(E,le,pe,H,Ie.z,null)}}const ee=E.children;for(let le=0,pe=ee.length;le<pe;le++)er(ee[le],P,H,G)}function ho(E,P,H,G){const N=E.opaque,ee=E.transmissive,le=E.transparent;c.setupLightsView(H),He===!0&&ie.setGlobalState(v.clippingPlanes,H),G&&ge.viewport(C.copy(G)),N.length>0&&di(N,P,H),ee.length>0&&di(ee,P,H),le.length>0&&di(le,P,H),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function fo(E,P,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[G.id]===void 0&&(c.state.transmissionRenderTarget[G.id]=new Ya(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float")?oi:da,minFilter:qa,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const ee=c.state.transmissionRenderTarget[G.id],le=G.viewport||C;ee.setSize(le.z*v.transmissionResolutionScale,le.w*v.transmissionResolutionScale);const pe=v.getRenderTarget(),fe=v.getActiveCubeFace(),Te=v.getActiveMipmapLevel();v.setRenderTarget(ee),v.getClearColor(F),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),Ve&&xe.render(H);const ke=v.toneMapping;v.toneMapping=Da;const Se=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),c.setupLightsView(G),He===!0&&ie.setGlobalState(v.clippingPlanes,G),di(E,H,G),je.updateMultisampleRenderTarget(ee),je.updateRenderTargetMipmap(ee),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ye=0,ct=P.length;Ye<ct;Ye++){const at=P[Ye],et=at.object,Ae=at.geometry,st=at.material,qe=at.group;if(st.side===zt&&et.layers.test(G.layers)){const Pt=st.side;st.side=Tt,st.needsUpdate=!0,uo(et,H,G,Ae,st,qe),st.side=Pt,st.needsUpdate=!0,ze=!0}}ze===!0&&(je.updateMultisampleRenderTarget(ee),je.updateRenderTargetMipmap(ee))}v.setRenderTarget(pe,fe,Te),v.setClearColor(F,V),Se!==void 0&&(G.viewport=Se),v.toneMapping=ke}function di(E,P,H){const G=P.isScene===!0?P.overrideMaterial:null;for(let N=0,ee=E.length;N<ee;N++){const le=E[N],pe=le.object,fe=le.geometry,Te=le.group;let ke=le.material;ke.allowOverride===!0&&G!==null&&(ke=G),pe.layers.test(H.layers)&&uo(pe,P,H,fe,ke,Te)}}function uo(E,P,H,G,N,ee){E.onBeforeRender(v,P,H,G,N,ee),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(v,P,H,G,E,ee),N.transparent===!0&&N.side===zt&&N.forceSinglePass===!1?(N.side=Tt,N.needsUpdate=!0,v.renderBufferDirect(H,P,G,N,E,ee),N.side=Ia,N.needsUpdate=!0,v.renderBufferDirect(H,P,G,N,E,ee),N.side=zt):v.renderBufferDirect(H,P,G,N,E,ee),E.onAfterRender(v,P,H,G,N,ee)}function hi(E,P,H){P.isScene!==!0&&(P=Ee);const G=ve.get(E),N=c.state.lights,ee=c.state.shadowsArray,le=N.state.version,pe=q.getParameters(E,N.state,ee,P,H),fe=q.getProgramCacheKey(pe);let Te=G.programs;G.environment=E.isMeshStandardMaterial?P.environment:null,G.fog=P.fog,G.envMap=(E.isMeshStandardMaterial?lt:gt).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?P.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",K),Te=new Map,G.programs=Te);let ke=Te.get(fe);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===le)return po(E,pe),ke}else pe.uniforms=q.getUniforms(E),E.onBeforeCompile(pe,v),ke=q.acquireProgram(pe,fe),Te.set(fe,ke),G.uniforms=pe.uniforms;const Se=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Se.clippingPlanes=ie.uniform),po(E,pe),G.needsLights=Al(E),G.lightsStateVersion=le,G.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=ke,G.uniformsList=null,ke}function bo(E){if(E.uniformsList===null){const P=E.currentProgram.getUniforms();E.uniformsList=Hi.seqWithValue(P.seq,E.uniforms)}return E.uniformsList}function po(E,P){const H=ve.get(E);H.outputColorSpace=P.outputColorSpace,H.batching=P.batching,H.batchingColor=P.batchingColor,H.instancing=P.instancing,H.instancingColor=P.instancingColor,H.instancingMorph=P.instancingMorph,H.skinning=P.skinning,H.morphTargets=P.morphTargets,H.morphNormals=P.morphNormals,H.morphColors=P.morphColors,H.morphTargetsCount=P.morphTargetsCount,H.numClippingPlanes=P.numClippingPlanes,H.numIntersection=P.numClipIntersection,H.vertexAlphas=P.vertexAlphas,H.vertexTangents=P.vertexTangents,H.toneMapping=P.toneMapping}function Sl(E,P,H,G,N){P.isScene!==!0&&(P=Ee),je.resetTextureUnits();const ee=P.fog,le=G.isMeshStandardMaterial?P.environment:null,pe=k===null?v.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Dn,fe=(G.isMeshStandardMaterial?lt:gt).get(G.envMap||le),Te=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ke=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Se=!!H.morphAttributes.position,ze=!!H.morphAttributes.normal,Ye=!!H.morphAttributes.color;let ct=Da;G.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ct=v.toneMapping);const at=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,et=at!==void 0?at.length:0,Ae=ve.get(G),st=c.state.lights;if(He===!0&&(X===!0||E!==y)){const St=E===y&&G.id===S;ie.setState(G,E,St)}let qe=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==st.state.version||Ae.outputColorSpace!==pe||N.isBatchedMesh&&Ae.batching===!1||!N.isBatchedMesh&&Ae.batching===!0||N.isBatchedMesh&&Ae.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ae.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ae.instancing===!1||!N.isInstancedMesh&&Ae.instancing===!0||N.isSkinnedMesh&&Ae.skinning===!1||!N.isSkinnedMesh&&Ae.skinning===!0||N.isInstancedMesh&&Ae.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ae.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ae.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ae.instancingMorph===!1&&N.morphTexture!==null||Ae.envMap!==fe||G.fog===!0&&Ae.fog!==ee||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ie.numPlanes||Ae.numIntersection!==ie.numIntersection)||Ae.vertexAlphas!==Te||Ae.vertexTangents!==ke||Ae.morphTargets!==Se||Ae.morphNormals!==ze||Ae.morphColors!==Ye||Ae.toneMapping!==ct||Ae.morphTargetsCount!==et)&&(qe=!0):(qe=!0,Ae.__version=G.version);let Pt=Ae.currentProgram;qe===!0&&(Pt=hi(G,P,N));let nn=!1,Nt=!1,On=!1;const ot=Pt.getUniforms(),qt=Ae.uniforms;if(ge.useProgram(Pt.program)&&(nn=!0,Nt=!0,On=!0),G.id!==S&&(S=G.id,Nt=!0),nn||y!==E){ge.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ot.setValue(D,"projectionMatrix",E.projectionMatrix),ot.setValue(D,"viewMatrix",E.matrixWorldInverse);const Dt=ot.map.cameraPosition;Dt!==void 0&&Dt.setValue(D,be.setFromMatrixPosition(E.matrixWorld)),Ce.logarithmicDepthBuffer&&ot.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ot.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Nt=!0,On=!0)}if(N.isSkinnedMesh){ot.setOptional(D,N,"bindMatrix"),ot.setOptional(D,N,"bindMatrixInverse");const St=N.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),ot.setValue(D,"boneTexture",St.boneTexture,je))}N.isBatchedMesh&&(ot.setOptional(D,N,"batchingTexture"),ot.setValue(D,"batchingTexture",N._matricesTexture,je),ot.setOptional(D,N,"batchingIdTexture"),ot.setValue(D,"batchingIdTexture",N._indirectTexture,je),ot.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&ot.setValue(D,"batchingColorTexture",N._colorsTexture,je));const Xt=H.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&te.update(N,H,Pt),(Nt||Ae.receiveShadow!==N.receiveShadow)&&(Ae.receiveShadow=N.receiveShadow,ot.setValue(D,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(qt.envMap.value=fe,qt.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&P.environment!==null&&(qt.envMapIntensity.value=P.environmentIntensity),Nt&&(ot.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&wl(qt,On),ee&&G.fog===!0&&Z.refreshFogUniforms(qt,ee),Z.refreshMaterialUniforms(qt,G,z,J,c.state.transmissionRenderTarget[E.id]),Hi.upload(D,bo(Ae),qt,je)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Hi.upload(D,bo(Ae),qt,je),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ot.setValue(D,"center",N.center),ot.setValue(D,"modelViewMatrix",N.modelViewMatrix),ot.setValue(D,"normalMatrix",N.normalMatrix),ot.setValue(D,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const St=G.uniformsGroups;for(let Dt=0,tr=St.length;Dt<tr;Dt++){const Na=St[Dt];Le.update(Na,Pt),Le.bind(Na,Pt)}}return Pt}function wl(E,P){E.ambientLightColor.needsUpdate=P,E.lightProbe.needsUpdate=P,E.directionalLights.needsUpdate=P,E.directionalLightShadows.needsUpdate=P,E.pointLights.needsUpdate=P,E.pointLightShadows.needsUpdate=P,E.spotLights.needsUpdate=P,E.spotLightShadows.needsUpdate=P,E.rectAreaLights.needsUpdate=P,E.hemisphereLights.needsUpdate=P}function Al(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(E,P,H){const G=ve.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),ve.get(E.texture).__webglTexture=P,ve.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,P){const H=ve.get(E);H.__webglFramebuffer=P,H.__useDefaultFramebuffer=P===void 0};const Tl=D.createFramebuffer();this.setRenderTarget=function(E,P=0,H=0){k=E,A=P,R=H;let G=!0,N=null,ee=!1,le=!1;if(E){const fe=ve.get(E);if(fe.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(fe.__webglFramebuffer===void 0)je.setupRenderTarget(E);else if(fe.__hasExternalTextures)je.rebindTextures(E,ve.get(E.texture).__webglTexture,ve.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Se=E.depthTexture;if(fe.__boundDepthTexture!==Se){if(Se!==null&&ve.has(Se)&&(E.width!==Se.image.width||E.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(le=!0);const ke=ve.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[P])?N=ke[P][H]:N=ke[P],ee=!0):E.samples>0&&je.useMultisampledRTT(E)===!1?N=ve.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?N=ke[H]:N=ke,C.copy(E.viewport),L.copy(E.scissor),j=E.scissorTest}else C.copy(he).multiplyScalar(z).floor(),L.copy(we).multiplyScalar(z).floor(),j=Ge;if(H!==0&&(N=Tl),ge.bindFramebuffer(D.FRAMEBUFFER,N)&&G&&ge.drawBuffers(E,N),ge.viewport(C),ge.scissor(L),ge.setScissorTest(j),ee){const fe=ve.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,fe.__webglTexture,H)}else if(le){const fe=P;for(let Te=0;Te<E.textures.length;Te++){const ke=ve.get(E.textures[Te]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Te,ke.__webglTexture,H,fe)}}else if(E!==null&&H!==0){const fe=ve.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fe.__webglTexture,H)}S=-1},this.readRenderTargetPixels=function(E,P,H,G,N,ee,le,pe=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(fe=fe[le]),fe){ge.bindFramebuffer(D.FRAMEBUFFER,fe);try{const Te=E.textures[pe],ke=Te.format,Se=Te.type;if(!Ce.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=E.width-G&&H>=0&&H<=E.height-N&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),D.readPixels(P,H,G,N,Me.convert(ke),Me.convert(Se),ee))}finally{const Te=k!==null?ve.get(k).__webglFramebuffer:null;ge.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(E,P,H,G,N,ee,le,pe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(fe=fe[le]),fe)if(P>=0&&P<=E.width-G&&H>=0&&H<=E.height-N){ge.bindFramebuffer(D.FRAMEBUFFER,fe);const Te=E.textures[pe],ke=Te.format,Se=Te.type;if(!Ce.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ze),D.bufferData(D.PIXEL_PACK_BUFFER,ee.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),D.readPixels(P,H,G,N,Me.convert(ke),Me.convert(Se),0);const Ye=k!==null?ve.get(k).__webglFramebuffer:null;ge.bindFramebuffer(D.FRAMEBUFFER,Ye);const ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Id(D,ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ee),D.deleteBuffer(ze),D.deleteSync(ct),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,P=null,H=0){const G=Math.pow(2,-H),N=Math.floor(E.image.width*G),ee=Math.floor(E.image.height*G),le=P!==null?P.x:0,pe=P!==null?P.y:0;je.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,le,pe,N,ee),ge.unbindTexture()};const Rl=D.createFramebuffer(),Cl=D.createFramebuffer();this.copyTextureToTexture=function(E,P,H=null,G=null,N=0,ee=null){ee===null&&(N!==0?(ri("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=N,N=0):ee=0);let le,pe,fe,Te,ke,Se,ze,Ye,ct;const at=E.isCompressedTexture?E.mipmaps[ee]:E.image;if(H!==null)le=H.max.x-H.min.x,pe=H.max.y-H.min.y,fe=H.isBox3?H.max.z-H.min.z:1,Te=H.min.x,ke=H.min.y,Se=H.isBox3?H.min.z:0;else{const Xt=Math.pow(2,-N);le=Math.floor(at.width*Xt),pe=Math.floor(at.height*Xt),E.isDataArrayTexture?fe=at.depth:E.isData3DTexture?fe=Math.floor(at.depth*Xt):fe=1,Te=0,ke=0,Se=0}G!==null?(ze=G.x,Ye=G.y,ct=G.z):(ze=0,Ye=0,ct=0);const et=Me.convert(P.format),Ae=Me.convert(P.type);let st;P.isData3DTexture?(je.setTexture3D(P,0),st=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(je.setTexture2DArray(P,0),st=D.TEXTURE_2D_ARRAY):(je.setTexture2D(P,0),st=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);const qe=D.getParameter(D.UNPACK_ROW_LENGTH),Pt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),nn=D.getParameter(D.UNPACK_SKIP_PIXELS),Nt=D.getParameter(D.UNPACK_SKIP_ROWS),On=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,at.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),D.pixelStorei(D.UNPACK_SKIP_ROWS,ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Se);const ot=E.isDataArrayTexture||E.isData3DTexture,qt=P.isDataArrayTexture||P.isData3DTexture;if(E.isDepthTexture){const Xt=ve.get(E),St=ve.get(P),Dt=ve.get(Xt.__renderTarget),tr=ve.get(St.__renderTarget);ge.bindFramebuffer(D.READ_FRAMEBUFFER,Dt.__webglFramebuffer),ge.bindFramebuffer(D.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let Na=0;Na<fe;Na++)ot&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.get(E).__webglTexture,N,Se+Na),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.get(P).__webglTexture,ee,ct+Na)),D.blitFramebuffer(Te,ke,le,pe,ze,Ye,le,pe,D.DEPTH_BUFFER_BIT,D.NEAREST);ge.bindFramebuffer(D.READ_FRAMEBUFFER,null),ge.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(N!==0||E.isRenderTargetTexture||ve.has(E)){const Xt=ve.get(E),St=ve.get(P);ge.bindFramebuffer(D.READ_FRAMEBUFFER,Rl),ge.bindFramebuffer(D.DRAW_FRAMEBUFFER,Cl);for(let Dt=0;Dt<fe;Dt++)ot?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Xt.__webglTexture,N,Se+Dt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Xt.__webglTexture,N),qt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.__webglTexture,ee,ct+Dt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,St.__webglTexture,ee),N!==0?D.blitFramebuffer(Te,ke,le,pe,ze,Ye,le,pe,D.COLOR_BUFFER_BIT,D.NEAREST):qt?D.copyTexSubImage3D(st,ee,ze,Ye,ct+Dt,Te,ke,le,pe):D.copyTexSubImage2D(st,ee,ze,Ye,Te,ke,le,pe);ge.bindFramebuffer(D.READ_FRAMEBUFFER,null),ge.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else qt?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(st,ee,ze,Ye,ct,le,pe,fe,et,Ae,at.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(st,ee,ze,Ye,ct,le,pe,fe,et,at.data):D.texSubImage3D(st,ee,ze,Ye,ct,le,pe,fe,et,Ae,at):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ee,ze,Ye,le,pe,et,Ae,at.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ee,ze,Ye,at.width,at.height,et,at.data):D.texSubImage2D(D.TEXTURE_2D,ee,ze,Ye,le,pe,et,Ae,at);D.pixelStorei(D.UNPACK_ROW_LENGTH,qe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,nn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,On),ee===0&&P.generateMipmaps&&D.generateMipmap(st),ge.unbindTexture()},this.initRenderTarget=function(E){ve.get(E).__webglFramebuffer===void 0&&je.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?je.setTextureCube(E,0):E.isData3DTexture?je.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?je.setTexture2DArray(E,0):je.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){A=0,R=0,k=null,ge.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const Sc={type:"change"},ao={type:"start"},fl={type:"end"},Li=new Yi,wc=new Ra,sm=Math.cos(70*Wc.DEG2RAD),ut=new U,It=2*Math.PI,Qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pr=1e-6;class om extends Mh{constructor(e,t=null){super(e,t),this.state=Qe.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wn.ROTATE,MIDDLE:wn.DOLLY,RIGHT:wn.PAN},this.touches={ONE:En.ROTATE,TWO:En.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Ja,this._lastTargetPosition=new U,this._quat=new Ja().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $o,this._sphericalDelta=new $o,this._scale=1,this._panOffset=new U,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new U,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lm.bind(this),this._onPointerDown=cm.bind(this),this._onPointerUp=dm.bind(this),this._onContextMenu=gm.bind(this),this._onMouseWheel=um.bind(this),this._onKeyDown=bm.bind(this),this._onTouchStart=pm.bind(this),this._onTouchMove=mm.bind(this),this._onMouseDown=hm.bind(this),this._onMouseMove=fm.bind(this),this._interceptControlDown=vm.bind(this),this._interceptControlUp=_m.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sc),this.update(),this.state=Qe.NONE}update(e=null){const t=this.object.position;ut.copy(t).sub(this.target),ut.applyQuaternion(this._quat),this._spherical.setFromVector3(ut),this.autoRotate&&this.state===Qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(a)&&isFinite(i)&&(a<-Math.PI?a+=It:a>Math.PI&&(a-=It),i<-Math.PI?i+=It:i>Math.PI&&(i-=It),a<=i?this._spherical.theta=Math.max(a,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+i)/2?Math.max(a,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=s!=this._spherical.radius}if(ut.setFromSpherical(this._spherical),ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=ut.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const d=new U(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(o),this.object.updateMatrixWorld(),s=ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Li.origin.copy(this.object.position),Li.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Li.direction))<sm?this.object.lookAt(this.target):(wc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Li.intersectPlane(wc,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Pr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pr||this._lastTargetPosition.distanceToSquared(this.target)>Pr?(this.dispatchEvent(Sc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?It/60*this.autoRotateSpeed*e:It/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ut.setFromMatrixColumn(t,0),ut.multiplyScalar(-e),this._panOffset.add(ut)}_panUp(e,t){this.screenSpacePanning===!0?ut.setFromMatrixColumn(t,1):(ut.setFromMatrixColumn(t,0),ut.crossVectors(this.object.up,ut)),ut.multiplyScalar(e),this._panOffset.add(ut)}_pan(e,t){const a=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;ut.copy(i).sub(this.target);let r=ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/a.clientHeight,this.object.matrix),this._panUp(2*t*r/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),i=e-a.left,r=t-a.top,s=a.width,o=a.height;this._mouse.x=i/s*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(It*this._rotateDelta.x/t.clientHeight),this._rotateUp(It*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(It*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-It*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(It*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-It*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(a,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(a,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),a=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(a*a+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),i=.5*(e.pageX+a.x),r=.5*(e.pageY+a.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(It*this._rotateDelta.x/t.clientHeight),this._rotateUp(It*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(a,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),a=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(a*a+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function cm(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function lm(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function dm(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fl),this.state=Qe.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function hm(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case wn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Qe.DOLLY;break;case wn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Qe.ROTATE}break;case wn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Qe.PAN}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(ao)}function fm(n){switch(this.state){case Qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function um(n){this.enabled===!1||this.enableZoom===!1||this.state!==Qe.NONE||(n.preventDefault(),this.dispatchEvent(ao),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(fl))}function bm(n){this.enabled!==!1&&this._handleKeyDown(n)}function pm(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case En.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Qe.TOUCH_ROTATE;break;case En.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Qe.TOUCH_PAN;break;default:this.state=Qe.NONE}break;case 2:switch(this.touches.TWO){case En.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Qe.TOUCH_DOLLY_PAN;break;case En.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Qe.TOUCH_DOLLY_ROTATE;break;default:this.state=Qe.NONE}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(ao)}function mm(n){switch(this._trackPointer(n),this.state){case Qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Qe.NONE}}function gm(n){this.enabled!==!1&&n.preventDefault()}function vm(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _m(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class xm extends el{constructor(){super();const e=new an;e.deleteAttribute("uv");const t=new si({side:Tt}),a=new si,i=new mh(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new rt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const s=new rh(e,a,6),o=new bt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),s.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),s.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),s.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),s.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),s.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),s.setMatrixAt(5,o.matrix),this.add(s);const l=new rt(e,xn(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const d=new rt(e,xn(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const h=new rt(e,xn(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const b=new rt(e,xn(43));b.position.set(-.462,8.89,14.52),b.scale.set(4.38,5.441,.088),this.add(b);const p=new rt(e,xn(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const u=new rt(e,xn(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function xn(n){return new hh({color:0,emissive:16777215,emissiveIntensity:n})}function Mm(n,e=!1){const t=n[0].index!==null,a=new Set(Object.keys(n[0].attributes)),i=new Set(Object.keys(n[0].morphAttributes)),r={},s={},o=n[0].morphTargetsRelative,l=new Wt;let d=0;for(let h=0;h<n.length;++h){const b=n[h];let p=0;if(t!==(b.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in b.attributes){if(!a.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(b.attributes[u]),p++}if(p!==a.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==b.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in b.morphAttributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;s[u]===void 0&&(s[u]=[]),s[u].push(b.morphAttributes[u])}if(e){let u;if(t)u=b.index.count;else if(b.attributes.position!==void 0)u=b.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(d,u,h),d+=u}}if(t){let h=0;const b=[];for(let p=0;p<n.length;++p){const u=n[p].index;for(let g=0;g<u.count;++g)b.push(u.getX(g)+h);h+=n[p].attributes.position.count}l.setIndex(b)}for(const h in r){const b=Ac(r[h]);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,b)}for(const h in s){const b=s[h][0].length;if(b===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<b;++p){const u=[];for(let m=0;m<s[h].length;++m)u.push(s[h][m][p]);const g=Ac(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ac(n){let e,t,a,i=-1,r=0;for(let d=0;d<n.length;++d){const h=n[d];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(a===void 0&&(a=h.normalized),a!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const s=new e(r),o=new _t(s,t,a);let l=0;for(let d=0;d<n.length;++d){const h=n[d];if(h.isInterleavedBufferAttribute){const b=l/t;for(let p=0,u=h.count;p<u;p++)for(let g=0;g<t;g++){const m=h.getComponent(p,g);o.setComponent(p+b,g,m)}}else s.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}const no={x:[-125,125],y:[-70,70],z:[0,45],latch:[0,60]};function ym(n,e){if(!e)return 0;const t=Math.max(0,38-n);function a(r){let s=r*Math.PI/180,o=-24.3+4.9*Math.cos(s)+14.7135991518051*Math.sin(s),l=149.7135991518051+4.9*Math.sin(s)-14.7135991518051*Math.cos(s)+t;const d=Math.max(-17-o,0),h=Math.max(134-l,l-137,0);return d*d+h*h>=2.4**2-1e-10}let i=0;for(let r=1;r<233;r++){let s=Math.min(23.199671307747764,r/10);if(!a(s)){for(let o=0;o<25;o++){let l=(i+s)/2;a(l)?i=l:s=l}return-i}i=s}return-23.199671307747764}function Em(n){const e=n.home_cm.slice();for(const t of[3,7,11])e[t]*=10;return new We().set(...e)}function Fi(n,e,t,a=[0,0,0]){return new We().makeTranslation(t[0]+a[0],t[1]+a[1],t[2]+a[2]).multiply(new We().makeRotationAxis(new U(...n),e)).multiply(new We().makeTranslation(-t[0],-t[1],-t[2]))}function Sm(n,e,t,a){const{x:i=0,y:r=0,z:s=0,latch:o=0}=e,l={fixed:[0,0,0],X:[i,0,0],Y:[0,r,0],Z:[i,0,-s],counterweight:[i,0,s],cartridge:t?[-95,r-20,-38]:[i,0,-s],storage:[0,0,0],guard:[0,0,0],enclosure_lid:[0,0,0],stop_button:[0,0,0],laser_pen:[0,0,0],enclosure_lid_button:[0,0,0],laser_pen_button:[0,0,0]};if(l[n])return new We().makeTranslation(...l[n]);if(n==="latch")return Fi([0,0,1],-o*Math.PI/180,[47,165,138.7],[i,0,-s]);const d={X_screw:{axis:[1,0,0],p:[0,245,180],travel:i,shift:[0,0,0]},Y_screw:{axis:[0,1,0],p:[0,145,22],travel:r,shift:[0,0,0]},Z_screw:{axis:[0,0,1],p:[0,209,177.5],travel:-s,shift:[i,0,0]}};if(d[n]){let h=d[n];return Fi(h.axis,-2*Math.PI*h.travel/4,h.p,h.shift)}if(n.startsWith("pulley_")){const[,h,b]=n.split("_");return Fi([1,0,0],s/15,[Number(h),Number(b),370],[i,0,0])}if(n.startsWith("switch_")){let h=n.replace("_roller","_lever");const b=a.switchPivot;if(!b)return new We;let p=0,u=[0,0,0];return h==="switch_X_home_lever"&&(p=-23.2*Math.min(1,Math.max(0,(i+125)/7))),h==="switch_Y_home_lever"&&(p=23.2*Math.min(1,Math.max(0,(r+70)/7))),h==="switch_Z_home_lever"&&(p=23.2*Math.min(1,Math.max(0,s/5)),u=[i,0,0]),h==="switch_Tool_seat_lever"&&(p=ym(s,t),u=[i,0,-s]),Number.isFinite(e.jointAngles?.[h])&&(p=e.jointAngles[h]*180/Math.PI),Fi(a.switchAxis,p*Math.PI/180,b,u)}throw new Error(`Unknown motion group ${n}`)}function wm(n,e,t){return t=Math.max(0,Math.min(1,t)),Object.fromEntries(Object.keys(no).map(a=>[a,n[a]+(e[a]-n[a])*t]))}(function(){var n="b9H79Tebbbe9ok9Geueu9Geub9Gbb9Gruuuuuuueu9Gvuuuuueu9Gduueu9Gluuuueu9Gvuuuuub9Gouuuuuub9Gluuuub9GiuuueuiE8AdilveoveovrrwrrrDDoDrbqqbelve9Weiiviebeoweuec;G:Qdkr:PlCo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8F9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWV9mW4W2be8A9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWVbd8F9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWV9c9V919U9KbiE9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949wWV79P9V9UblY9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWVbv8E9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWV9c9V919U9Kbo8A9TW79O9V9Wt9FW9U9J9V9KW69U9KW949wWV79P9V9UbrE9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JWbwa9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JW9c9V919U9KbDL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9p9JtbqK9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9r919HtbkL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWVT949WbxY9TW79O9V9Wt9FW9U9J9V9KWS9P2tWVJ9V29VVbmE9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OWbza9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OW9ttV9P9WbHa9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9WbOK9TW79O9V9Wt9F79W9Ht9P9H29t9VVt9sW9T9H9WbAl79IV9RbXDwebcekdKYq;i28Adbk:Bhdhud9:8Jjjjjbc;qw9Rgr8KjjjjbcbhwdnaeTmbabcbyd;C:kjjbaoaocb9iEgDc:GeV86bbarc;adfcbcjdz:xjjjb8AdnaiTmbarc;adfadalz:wjjjb8Akarc;abfalfcbcbcjdal9RalcFe0Ez:xjjjb8Aarc;abfarc;adfalz:wjjjb8AarcUf9cb83ibarc8Wf9cb83ibarcyf9cb83ibarcaf9cb83ibarcKf9cb83ibarczf9cb83ibar9cb83iwar9cb83ibcj;abal9Uc;WFbGcjdalca0Ehqdnaicd6mbavcd9imbaDTmbadcefhkaqci2gxal2hmarc;alfclfhParc;qlfceVhsarc;qofclVhzarc;qofcKfhHarc;qofczfhOcbhAincdhCcbhodnavci6mbaH9cb83ibaO9cb83ibar9cb83i;yoar9cb83i;qoadaAfgoybbhXcbhQincbhwcbhLdninaoalfhKaoybbgYaX7aLVhLawcP0meaKhoaYhXawcefgwaQfai6mbkkcbhXarc;qofhwincwh8AcwhEdnaLaX93gocFeGg3cs0mbclhEa3ci0mba3cb9hcethEkdnaocw4cFeGg3cs0mbclh8Aa3ci0mba3cb9hceth8Aka8AaEfh3awydbh5cwh8AcwhEdnaocz4cFeGg8Ecs0mbclhEa8Eci0mba8Ecb9hcethEka3a5fh3dnaocFFFFb0mbclh8AaocFFF8F0mbaocFFFr0ceth8Akawa3aEfa8AfBdbawclfhwaXcefgXcw9hmbkaKhoaYhXaQczfgQai6mbkcbhocehwazhLinawaoaLydbarc;qofaocdtfydb6EhoaLclfhLawcefgwcw9hmbkcihCkcbh3arc;qlfcbcjdz:xjjjb8Aarc;alfcwfcbBdbar9cb83i;alaoclth8Fadhaaqhhakh5inarc;qlfadcba3cufgoaoa30Eal2falz:wjjjb8Aaiahaiah6Ehgdnaqaia39Ra3aqfai6EgYcsfc9WGgoaY9nmbarc;qofaYfcbaoaY9Rz:xjjjb8Akada3al2fh8Jcbh8Kina8Ka8FVcl4hQarc;alfa8Kcdtfh8LaAh8Mcbh8Nina8NaAfhwdndndndndndna8KPldebidkasa8Mc98GgLfhoa5aLfh8Aarc;qlfawc98GgLfRbbhXcwhwinaoRbbawtaXVhXaocefhoawcwfgwca9hmbkaYTmla8Ncith8Ea8JaLfhEcbhKinaERbbhLcwhoa8AhwinawRbbaotaLVhLawcefhwaocwfgoca9hmbkarc;qofaKfaLaX7aQ93a8E486bba8Aalfh8AaEalfhEaLhXaKcefgKaY9hmbxlkkaYTmia8Mc9:Ghoa8NcitcwGhEarc;qlfawceVfRbbcwtarc;qlfawc9:GfRbbVhLarc;qofhwaghXinawa5aofRbbcwtaaaofRbbVg8AaL9RgLcetaLcztcz91cs47cFFiGaE486bbaoalfhoawcefhwa8AhLa3aXcufgX9hmbxikkaYTmda8Jawfhoarc;qlfawfRbbhLarc;qofhwaghXinawaoRbbg8AaL9RgLcetaLcKtcK91cr4786bbawcefhwaoalfhoa8AhLa3aXcufgX9hmbxdkkaYTmeka8LydbhEcbhKarc;qofhoincdhLcbhwinaLaoawfRbbcb9hfhLawcefgwcz9hmbkclhXcbhwinaXaoawfRbbcd0fhXawcefgwcz9hmbkcwh8Acbhwina8AaoawfRbbcP0fh8Aawcefgwcz9hmbkaLaXaLaX6Egwa8Aawa8A6Egwczawcz6EaEfhEaoczfhoaKczfgKaY6mbka8LaEBdbka8Mcefh8Ma8Ncefg8Ncl9hmbka8Kcefg8KaC9hmbkaaamfhaahaxfhha5amfh5a3axfg3ai6mbkcbhocehwaPhLinawaoaLydbarc;alfaocdtfydb6EhoaLclfhLawcefgXhwaCaX9hmbkaraAcd4fa8FcdVaoaocdSE86bbaAclfgAal6mbkkabaefh8Kabcefhoalcd4gecbaDEhkadcefhOarc;abfceVhHcbhmdndninaiam9nmearc;qofcbcjdz:xjjjb8Aa8Kao9Rak6mdadamal2gwfhxcbh8JaOawfhzaocbakz:xjjjbghakfh5aqaiam9Ramaqfai6Egscsfgocl4cifcd4hCaoc9WGg8LThPindndndndndndndndndndnaDTmbara8Jcd4fRbbgLciGPlbedlbkasTmdaxa8Jfhoarc;abfa8JfRbbhLarc;qofhwashXinawaoRbbg8AaL9RgLcetaLcKtcK91cr4786bbawcefhwaoalfhoa8AhLaXcufgXmbxikkasTmia8JcitcwGhEarc;abfa8JceVfRbbcwtarc;abfa8Jc9:GgofRbbVhLaxaofhoarc;qofhwashXinawao8Vbbg8AaL9RgLcetaLcztcz91cs47cFFiGaE486bbawcefhwaoalfhoa8AhLaXcufgXmbxdkkaHa8Jc98GgEfhoazaEfh8Aarc;abfaEfRbbhXcwhwinaoRbbawtaXVhXaocefhoawcwfgwca9hmbkasTmbaLcl4hYa8JcitcKGh3axaEfhEcbhKinaERbbhLcwhoa8AhwinawRbbaotaLVhLawcefhwaocwfgoca9hmbkarc;qofaKfaLaX7aY93a3486bba8Aalfh8AaEalfhEaLhXaKcefgKas9hmbkkaDmbcbhoxlka8LTmbcbhodninarc;qofaofgwcwf8Pibaw8Pib:e9qTmeaoczfgoa8L9pmdxbkkdnavmbcehoxikcbhEaChKaChYinarc;qofaEfgocwf8Pibhyao8Pibh8PcdhLcbhwinaLaoawfRbbcb9hfhLawcefgwcz9hmbkclhXcbhwinaXaoawfRbbcd0fhXawcefgwcz9hmbkcwh8Acbhwina8AaoawfRbbcP0fh8Aawcefgwcz9hmbkaLaXaLaX6Egoa8Aaoa8A6Egoczaocz6EaYfhYaocucbaya8P:e9cb9sEgwaoaw6EaKfhKaEczfgEa8L9pmdxbkkaha8Jcd4fgoaoRbbcda8JcetcoGtV86bbxikdnaKas6mbaYas6mbaha8Jcd4fgoaoRbbcia8JcetcoGtV86bba8Ka59Ras6mra5arc;qofasz:wjjjbasfh5xikaKaY9phokaha8Jcd4fgwawRbbaoa8JcetcoGtV86bbka8Ka59RaC6mla5cbaCz:xjjjbgAaCfhYdndna8LmbaPhoxekdna8KaY9RcK9pmbaPhoxekaocdtc:q1jjbfcj1jjbaDEg5ydxggcetc;:FFFeGh8Fcuh3cuagtcu7cFeGhacbh8Marc;qofhLinarc;qofa8MfhQczhEdndndnagPDbeeeeeeedekcucbaQcwf8PibaQ8Pib:e9cb9sEhExekcbhoa8FhEinaEaaaLaofRbb9nfhEaocefgocz9hmbkkcih8Ecbh8Ainczhwdndndna5a8AcdtfydbgKPDbeeeeeeedekcucbaQcwf8PibaQ8Pib:e9cb9sEhwxekaKcetc;:FFFeGhwcuaKtcu7cFeGhXcbhoinawaXaLaofRbb9nfhwaocefgocz9hmbkkdndnawaE6mbaKa39hmeawaE9hmea5a8EcdtfydbcwSmeka8Ah8EawhEka8Acefg8Aci9hmbkaAa8Mco4fgoaoRbba8Ea8Mci4coGtV86bbdndndna5a8Ecdtfydbg3PDdbbbbbbbebkdncwa39Tg8ETmbcua3tcu7hwdndna3ceSmbcbh8NaLhQinaQhoa8Eh8AcbhXinaoRbbgEawcFeGgKaEaK6EaXa3tVhXaocefhoa8Acufg8AmbkaYaX86bbaQa8EfhQaYcefhYa8Na8Efg8Ncz6mbxdkkcbh8NaLhQinaQhoa8Eh8AcbhXinaoRbbgEawcFeGgKaEaK6EaXcetVhXaocefhoa8Acufg8AmbkaYaX:T9cFe:d9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:9ca188bbaQa8EfhQaYcefhYa8Na8Efg8Ncz6mbkkcbhoinaYaLaofRbbgX86bbaYaXawcFeG9pfhYaocefgocz9hmbxikkdna3ceSmbinaYcb86bbaYcefhYxbkkinaYcb86bbaYcefhYxbkkaYaQ8Pbb83bbaYcwfaQcwf8Pbb83bbaYczfhYka8Mczfg8Ma8L9pgomeaLczfhLa8KaY9RcK9pmbkkaoTmlaYh5aYTmlka8Jcefg8Jal9hmbkarc;abfaxascufal2falz:wjjjb8Aasamfhma5hoa5mbkcbhwxdkdna8Kao9RakalfgwcKcaaDEgLawaL0EgX9pmbcbhwxdkdnawaL9pmbaocbaXaw9Rgwz:xjjjbawfhokaoarc;adfalz:wjjjbalfhodnaDTmbaoaraez:wjjjbaefhokaoab9Rhwxekcbhwkarc;qwf8Kjjjjbawk5babaeadaialcdcbyd;C:kjjbz:bjjjbk9reduaecd4gdaefgicaaica0Eabcj;abae9Uc;WFbGcjdaeca0Egifcufai9Uae2aiadfaicl4cifcd4f2fcefkmbcbabBd;C:kjjbk:Ese5u8Jjjjjbc;ae9Rgl8Kjjjjbcbhvdnaici9UgocHfae0mbabcbyd;m:kjjbgrc;GeV86bbalc;abfcFecjez:xjjjb8AalcUfgw9cu83ibalc8WfgD9cu83ibalcyfgq9cu83ibalcafgk9cu83ibalcKfgx9cu83ibalczfgm9cu83ibal9cu83iwal9cu83ibabaefc9WfhPabcefgsaofhednaiTmbcmcsarcb9kgzEhHcbhOcbhAcbhCcbhXcbhQindnaeaP9nmbcbhvxikaQcufhvadaCcdtfgLydbhKaLcwfydbhYaLclfydbh8AcbhEdndndninalc;abfavcsGcitfgoydlh3dndndnaoydbgoaK9hmba3a8ASmekdnaoa8A9hmba3aY9hmbaEcefhExekaoaY9hmea3aK9hmeaEcdfhEkaEc870mdaXcufhvaLaEciGcx2goc;i1jjbfydbcdtfydbh3aLaoc;e1jjbfydbcdtfydbh8AaLaoc;a1jjbfydbcdtfydbhKcbhodnindnalavcsGcdtfydba39hmbaohYxdkcuhYavcufhvaocefgocz9hmbkkaOa3aOSgvaYce9iaYaH9oVgoGfhOdndndncbcsavEaYaoEgvcs9hmbarce9imba3a3aAa3cefaASgvEgAcefSmecmcsavEhvkasavaEcdtc;WeGV86bbavcs9hmea3aA9Rgvcetavc8F917hvinaeavcFb0crtavcFbGV86bbaecefheavcje6hoavcr4hvaoTmbka3hAxvkcPhvasaEcdtcPV86bba3hAkavTmiavaH9omicdhocehEaQhYxlkavcufhvaEclfgEc;ab9hmbkkdnaLceaYaOSceta8AaOSEcx2gvc;a1jjbfydbcdtfydbgKTaLavc;e1jjbfydbcdtfydbg8AceSGaLavc;i1jjbfydbcdtfydbg3cdSGaOcb9hGazGg5ce9hmbaw9cu83ibaD9cu83ibaq9cu83ibak9cu83ibax9cu83ibam9cu83ibal9cu83iwal9cu83ibcbhOkcbhEaXcufgvhodnindnalaocsGcdtfydba8A9hmbaEhYxdkcuhYaocufhoaEcefgEcz9hmbkkcbhodnindnalavcsGcdtfydba39hmbaohExdkcuhEavcufhvaocefgocz9hmbkkaOaKaOSg8EfhLdndnaYcm0mbaYcefhYxekcbcsa8AaLSgvEhYaLavfhLkdndnaEcm0mbaEcefhExekcbcsa3aLSgvEhEaLavfhLkc9:cua8EEh8FcbhvaEaYcltVgacFeGhodndndninavc:W1jjbfRbbaoSmeavcefgvcz9hmbxdkka5aKaO9havcm0VVmbasavc;WeV86bbxekasa8F86bbaeaa86bbaecefhekdna8EmbaKaA9Rgvcetavc8F917hvinaeavcFb0gocrtavcFbGV86bbavcr4hvaecefheaombkaKhAkdnaYcs9hmba8AaA9Rgvcetavc8F917hvinaeavcFb0gocrtavcFbGV86bbavcr4hvaecefheaombka8AhAkdnaEcs9hmba3aA9Rgvcetavc8F917hvinaeavcFb0gocrtavcFbGV86bbavcr4hvaecefheaombka3hAkalaXcdtfaKBdbaXcefcsGhvdndnaYPzbeeeeeeeeeeeeeebekalavcdtfa8ABdbaXcdfcsGhvkdndnaEPzbeeeeeeeeeeeeeebekalavcdtfa3BdbavcefcsGhvkcihoalc;abfaQcitfgEaKBdlaEa8ABdbaQcefcsGhYcdhEavhXaLhOxekcdhoalaXcdtfa3BdbcehEaXcefcsGhXaQhYkalc;abfaYcitfgva8ABdlava3Bdbalc;abfaQaEfcsGcitfgva3BdlavaKBdbascefhsaQaofcsGhQaCcifgCai6mbkkdnaeaP9nmbcbhvxekcbhvinaeavfavc:W1jjbfRbb86bbavcefgvcz9hmbkaeab9Ravfhvkalc;aef8KjjjjbavkZeeucbhddninadcefgdc8F0meceadtae6mbkkadcrfcFeGcr9Uci2cdfabci9U2cHfkmbcbabBd;m:kjjbk:Adewu8Jjjjjbcz9Rhlcbhvdnaicvfae0mbcbhvabcbRb;m:kjjbc;qeV86bbal9cb83iwabcefhoabaefc98fhrdnaiTmbcbhwcbhDindnaoar6mbcbskadaDcdtfydbgqalcwfawaqav9Rgvavc8F91gv7av9Rc507gwcdtfgkydb9Rgvc8E91c9:Gavcdt7awVhvinaoavcFb0gecrtavcFbGV86bbavcr4hvaocefhoaembkakaqBdbaqhvaDcefgDai9hmbkkdnaoar9nmbcbskaocbBbbaoab9RclfhvkavkBeeucbhddninadcefgdc8F0meceadtae6mbkkadcwfcFeGcr9Uab2cvfk:bvli99dui99ludnaeTmbcuadcetcuftcu7:Zhvdndncuaicuftcu7:ZgoJbbbZMgr:lJbbb9p9DTmbar:Ohwxekcjjjj94hwkcbhicbhDinalclfIdbgrJbbbbJbbjZalIdbgq:lar:lMalcwfIdbgk:lMgr:varJbbbb9BEgrNhxaqarNhrdndnakJbbbb9GTmbaxhqxekJbbjZar:l:tgqaq:maxJbbbb9GEhqJbbjZax:l:tgxax:marJbbbb9GEhrkdndnalcxfIdbgxJbbj:;axJbbj:;9GEgkJbbjZakJbbjZ9FEavNJbbbZJbbb:;axJbbbb9GEMgx:lJbbb9p9DTmbax:Ohmxekcjjjj94hmkdndnaqJbbj:;aqJbbj:;9GEgxJbbjZaxJbbjZ9FEaoNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:OhPxekcjjjj94hPkdndnarJbbj:;arJbbj:;9GEgqJbbjZaqJbbjZ9FEaoNJbbbZJbbb:;arJbbbb9GEMgr:lJbbb9p9DTmbar:Ohsxekcjjjj94hskdndnadcl9hmbabaifgzas86bbazcifam86bbazcdfaw86bbazcefaP86bbxekabaDfgzas87ebazcofam87ebazclfaw87ebazcdfaP87ebkalczfhlaiclfhiaDcwfhDaecufgembkkk;hlld99eud99eudnaeTmbdndncuaicuftcu7:ZgvJbbbZMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikaic;8FiGhrinabcofcicdalclfIdb:lalIdb:l9EgialcwfIdb:lalaicdtfIdb:l9EEgialcxfIdb:lalaicdtfIdb:l9EEgiarV87ebdndnJbbj:;JbbjZalaicdtfIdbJbbbb9DEgoalaicd7cdtfIdbJ;Zl:1ZNNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabcdfaq87ebdndnalaicefciGcdtfIdbJ;Zl:1ZNaoNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabaq87ebdndnaoalaicufciGcdtfIdbJ;Zl:1ZNNgoJbbj:;aoJbbj:;9GEgwJbbjZawJbbjZ9FEavNJbbbZJbbb:;aoJbbbb9GEMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikabclfai87ebabcwfhbalczfhlaecufgembkkk;3viDue99eu8Jjjjjbcjd9Rgo8Kjjjjbadcd4hrdndndndnavcd9hmbadcl6meaohwarhDinawc:CuBdbawclfhwaDcufgDmbkaeTmiadcl6mdarcdthqalhkcbhxinaohwakhDarhminawawydbgPcbaDIdbgs:8cL4cFeGc:cufasJbbbb9BEgzaPaz9kEBdbaDclfhDawclfhwamcufgmmbkakaqfhkaxcefgxaeSmixbkkaeTmdxekaeTmekarcdthkavce9hhqadcl6hdcbhxindndndnaqmbadmdc:CuhDalhwarhminaDcbawIdbgs:8cL4cFeGc:cufasJbbbb9BEgPaDaP9kEhDawclfhwamcufgmmbxdkkc:CuhDdndnavPleddbdkadmdaohwalhmarhPinawcbamIdbgs:8cL4cFeGgzc;:bazc;:b0Ec:cufasJbbbb9BEBdbamclfhmawclfhwaPcufgPmbxdkkadmecbhwarhminaoawfcbalawfIdbgs:8cL4cFeGgPc8AaPc8A0Ec:cufasJbbbb9BEBdbawclfhwamcufgmmbkkadmbcbhwarhPinaDhmdnavceSmbaoawfydbhmkdndnalawfIdbgscjjj;8iamai9RcefgmcLt9R::NJbbbZJbbb:;asJbbbb9GEMgs:lJbbb9p9DTmbas:Ohzxekcjjjj94hzkabawfazcFFFrGamcKtVBdbawclfhwaPcufgPmbkkabakfhbalakfhlaxcefgxae9hmbkkaocjdf8Kjjjjbk:Ylvdud99due99iudnaeTmbceaicufgvthocuaitcu7:Zhrcuavtcu7:Zhwcbhvadcl9hhDcbhqindndnalcwfIdbgkJbbbbakJbbbb9GEgkJbbjZakJbbjZ9FEarNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikdndnalIdbgkJbbbbakJbbbb9GEgkJbbjZakJbbjZ9FEarNJbbbZMgk:lJbbb9p9DTmbak:Ohdxekcjjjj94hdkadai9Rcd9TgxaifhidndnalclfIdbgkJbbbbakJbbbb9GEgkJbbjZakJbbjZ9FEarNJbbbZMgk:lJbbb9p9DTmbak:Ohdxekcjjjj94hdkadai9Rcd9ThddndnalcxfIdbgkJbbbbakJbbbb9GEgkJbbjZakJbbjZ9FEawNJbbbZMgk:lJbbb9p9DTmbak:Ohmxekcjjjj94hmkadaifhiaoamVhmdndnaDmbabavfgPai86bbaPcifam86bbaPcdfad86bbaPcefax86bbxekabaqfgPai87ebaPcofam87ebaPclfad87ebaPcdfax87ebkalczfhlavclfhvaqcwfhqaecufgembkkk;YqdXui998Jjjjjbc:qd9Rgv8Kjjjjbavc:Sefcbc;Kbz:xjjjb8AcbhodnadTmbcbhoaiTmbdndnabaeSmbaehrxekavcuadcdtgwadcFFFFi0Ecbyd;q:kjjbHjjjjbbgrBd:SeavceBd:mdaraeawz:wjjjb8Akavc:GefcwfcbBdbav9cb83i:Geavc:Gefaradaiavc:Sefz:pjjjbavyd:GehDadci9Ugqcbyd;q:kjjbHjjjjbbheavc:Sefavyd:mdgkcdtfaeBdbavakcefgwBd:mdaecbaqz:xjjjbhxavc:SefawcdtfcuaicdtaicFFFFi0Ecbyd;q:kjjbHjjjjbbgmBdbavakcdfgPBd:mdalc;ebfhsaDheamhwinawalIdbasaeydbgzcwazcw6EcdtfIdbMUdbaeclfheawclfhwaicufgimbkavc:SefaPcdtfcuaqcdtadcFFFF970Ecbyd;q:kjjbHjjjjbbgPBdbdnadci6mbarheaPhwaqhiinawamaeydbcdtfIdbamaeclfydbcdtfIdbMamaecwfydbcdtfIdbMUdbaecxfheawclfhwaicufgimbkkakcifhoalc;ebfhHavc;qbfhOavheavyd:KehAavyd:OehCcbhzcbhwcbhXcehQinaehLcihkarawci2gKcdtfgeydbhsaeclfydbhdabaXcx2fgicwfaecwfydbgYBdbaiclfadBdbaiasBdbaxawfce86bbaOaYBdwaOadBdlaOasBdbaPawcdtfcbBdbdnazTmbcihkaLhiinaOakcdtfaiydbgeBdbakaeaY9haeas9haead9hGGfhkaiclfhiazcufgzmbkkaXcefhXcbhzinaCaAarazaKfcdtfydbcdtgifydbcdtfgYheaDaifgdydbgshidnasTmbdninaeydbawSmeaeclfheaicufgiTmdxbkkaeaYascdtfc98fydbBdbadadydbcufBdbkazcefgzci9hmbkdndnakTmbcuhwJbbbbh8Acbhdavyd:KehYavyd:OehKindndnaDaOadcdtfydbcdtgzfydbgembadcefhdxekadcs0hiamazfgsIdbhEasalcbadcefgdaiEcdtfIdbaHaecwaecw6EcdtfIdbMg3Udba3aE:th3aecdthiaKaYazfydbcdtfheinaPaeydbgzcdtfgsa3asIdbMgEUdbaEa8Aa8AaE9DgsEh8AazawasEhwaeclfheaic98fgimbkkadak9hmbkawcu9hmekaQaq9pmdindnaxaQfRbbmbaQhwxdkaqaQcefgQ9hmbxikkakczakcz6EhzaOheaLhOawcu9hmbkkaocdtavc:Seffc98fhedninaoTmeaeydbcbyd;u:kjjbH:bjjjbbaec98fheaocufhoxbkkavc:qdf8Kjjjjbk;IlevucuaicdtgvaicFFFFi0Egocbyd;q:kjjbHjjjjbbhralalyd9GgwcdtfarBdbalawcefBd9GabarBdbaocbyd;q:kjjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdlcuadcdtadcFFFFi0Ecbyd;q:kjjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdwabydbcbavz:xjjjb8Aadci9UhDdnadTmbabydbhoaehladhrinaoalydbcdtfgvavydbcefBdbalclfhlarcufgrmbkkdnaiTmbabydbhlabydlhrcbhvaihoinaravBdbarclfhralydbavfhvalclfhlaocufgombkkdnadci6mbabydlhrabydwhvcbhlinaecwfydbhoaeclfydbhdaraeydbcdtfgwawydbgwcefBdbavawcdtfalBdbaradcdtfgdadydbgdcefBdbavadcdtfalBdbaraocdtfgoaoydbgocefBdbavaocdtfalBdbaecxfheaDalcefgl9hmbkkdnaiTmbabydlheabydbhlinaeaeydbalydb9RBdbalclfhlaeclfheaicufgimbkkkQbabaeadaic;K1jjbz:ojjjbkQbabaeadaic;m:jjjbz:ojjjbk9DeeuabcFeaicdtz:xjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk:Vvioud9:du8Jjjjjbc;Wa9Rgl8Kjjjjbcbhvalcxfcbc;Kbz:xjjjb8AalcuadcitgoadcFFFFe0Ecbyd;q:kjjbHjjjjbbgrBdxalceBd2araeadaicezNjjjbalcuaoadcjjjjoGEcbyd;q:kjjbHjjjjbbgwBdzadcdthednadTmbabhiinaiavBdbaiclfhiadavcefgv9hmbkkawaefhDalabBdwalawBdl9cbhqindnadTmbaq9cq9:hkarhvaDhiadheinaiav8Pibak1:NcFrG87ebavcwfhvaicdfhiaecufgembkkalclfaq:NceGcdtfydbhxalclfaq9ce98gq:NceGcdtfydbhmalc;Wbfcbcjaz:xjjjb8AaDhvadhidnadTmbinalc;Wbfav8VebcdtfgeaeydbcefBdbavcdfhvaicufgimbkkcbhvcbhiinalc;WbfavfgeydbhoaeaiBdbaoaifhiavclfgvcja9hmbkadhvdndnadTmbinalc;WbfaDamydbgicetf8VebcdtfgeaeydbgecefBdbaxaecdtfaiBdbamclfhmavcufgvmbkaq9cv9smdcbhvinabawydbcdtfavBdbawclfhwadavcefgv9hmbxdkkaq9cv9smekkclhvdninavc98Smealcxfavfydbcbyd;u:kjjbH:bjjjbbavc98fhvxbkkalc;Waf8Kjjjjbk:Jwliuo99iud9:cbhv8Jjjjjbca9Rgoczfcwfcbyd:8:kjjbBdbaocb8Pd:0:kjjb83izaocwfcbyd;i:kjjbBdbaocb8Pd;a:kjjb83ibaicd4hrdndnadmbJFFuFhwJFFuuhDJFFuuhqJFFuFhkJFFuuhxJFFuFhmxekarcdthPaehsincbhiinaoczfaifgzasaifIdbgwazIdbgDaDaw9EEUdbaoaifgzawazIdbgDaDaw9DEUdbaiclfgicx9hmbkasaPfhsavcefgvad9hmbkaoIdKhDaoIdwhwaoIdChqaoIdlhkaoIdzhxaoIdbhmkdnadTmbJbbbbJbFu9hJbbbbamax:tgmamJbbbb9DEgmakaq:tgkakam9DEgkawaD:tgwawak9DEgw:vawJbbbb9BEhwdnalmbarcdthoindndnaeclfIdbaq:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:S9cC:ghHdndnaeIdbax:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikaHai:S:ehHdndnaecwfIdbaD:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabaHai:T9cy:g:e83ibaeaofheabcwfhbadcufgdmbxdkkarcdthoindndnaeIdbax:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cv9:9c;j:KM;j:KM;j:Kd:dhOdndnaeclfIdbaq:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cq9:9cM;j:KM;j:KM;jl:daO:ehOdndnaecwfIdbaD:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabaOai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cC9:9c:KM;j:KM;j:KMD:d:e83ibaeaofheabcwfhbadcufgdmbkkk9teiucbcbyd;y:kjjbgeabcifc98GfgbBd;y:kjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;teeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk:3eedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdxaialBdwaialBdlaialBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;y:kjjbgeabcrfc94GfgbBd;y:kjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik9:eiuZbhedndncbyd;y:kjjbgdaecztgi9nmbcuheadai9RcFFifcz4nbcuSmekadhekcbabae9Rcifc98Gcbyd;y:kjjbfgdBd;y:kjjbdnadZbcztge9nmbadae9RcFFifcz4nb8Akkk;Qddbcjwk;mdbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbbbbbbbbbbbbb4:h9w9N94:P:gW:j9O:ye9Pbbbbbbebbbdbbbebbbdbbbbbbbdbbbbbbbebbbbbbb:l29hZ;69:9kZ;N;76Z;rg97Z;z;o9xZ8J;B85Z;:;u9yZ;b;k9HZ:2;Z9DZ9e:l9mZ59A8KZ:r;T3Z:A:zYZ79OHZ;j4::8::Y:D9V8:bbbb9s:49:Z8R:hBZ9M9M;M8:L;z;o8:;8:PG89q;x:J878R:hQ8::M:B;e87bbbbbbjZbbjZbbjZ:E;V;N8::Y:DsZ9i;H;68:xd;R8:;h0838:;W:NoZbbbb:WV9O8:uf888:9i;H;68:9c9G;L89;n;m9m89;D8Ko8:bbbbf:8tZ9m836ZS:2AZL;zPZZ818EZ9e:lxZ;U98F8:819E;68:FFuuFFuuFFuuFFuFFFuFFFuFbc;mqkzebbbebbbdbbb9G:vbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,a=WebAssembly.instantiate(i(n),{}).then(function(u){t=u.instance,t.exports.__wasm_call_ctors(),t.exports.meshopt_encodeVertexVersion(0),t.exports.meshopt_encodeIndexVersion(1)});function i(u){for(var g=new Uint8Array(u.length),m=0;m<u.length;++m){var f=u.charCodeAt(m);g[m]=f>96?f-97:f>64?f-39:f+4}for(var c=0,m=0;m<u.length;++m)g[c++]=g[m]<60?e[g[m]]:(g[m]-60)*64+g[++m];return g.buffer.slice(0,c)}function r(u){if(!u)throw new Error("Assertion failed")}function s(u){return new Uint8Array(u.buffer,u.byteOffset,u.byteLength)}function o(u,g,m,f){var c=t.exports.sbrk,_=c(g.length*4),x=c(m*4),v=new Uint8Array(t.exports.memory.buffer),w=s(g);v.set(w,_),f&&f(_,_,g.length,m);var A=u(x,_,g.length,m);v=new Uint8Array(t.exports.memory.buffer);var R=new Uint32Array(m);new Uint8Array(R.buffer).set(v.subarray(x,x+m*4)),w.set(v.subarray(_,_+g.length*4)),c(_-c(0));for(var k=0;k<g.length;++k)g[k]=R[g[k]];return[R,A]}function l(u,g,m,f){var c=t.exports.sbrk,_=c(m*4),x=c(m*f),v=new Uint8Array(t.exports.memory.buffer);v.set(s(g),x),u(_,x,m,f),v=new Uint8Array(t.exports.memory.buffer);var w=new Uint32Array(m);return new Uint8Array(w.buffer).set(v.subarray(_,_+m*4)),c(_-c(0)),w}function d(u,g,m,f,c,_,x){var v=t.exports.sbrk,w=v(g),A=v(f*c),R=new Uint8Array(t.exports.memory.buffer);R.set(s(m),A);var k=u(w,g,A,f,c,_,x),S=new Uint8Array(k);return S.set(R.subarray(w,w+k)),v(w-v(0)),S}function h(u){for(var g=0,m=0;m<u.length;++m){var f=u[m];g=g<f?f:g}return g}function b(u,g){if(r(g==2||g==4),g==4)return new Uint32Array(u.buffer,u.byteOffset,u.byteLength/4);var m=new Uint16Array(u.buffer,u.byteOffset,u.byteLength/2);return new Uint32Array(m)}function p(u,g,m,f,c,_,x){var v=t.exports.sbrk,w=v(m*f),A=v(m*_),R=new Uint8Array(t.exports.memory.buffer);R.set(s(g),A),u(w,m,f,c,A,x);var k=new Uint8Array(m*f);return k.set(R.subarray(w,w+m*f)),v(w-v(0)),k}return{ready:a,supported:!0,reorderMesh:function(u,g,m){var f=g?m?t.exports.meshopt_optimizeVertexCacheStrip:t.exports.meshopt_optimizeVertexCache:void 0;return o(t.exports.meshopt_optimizeVertexFetchRemap,u,h(u)+1,f)},reorderPoints:function(u,g){return r(u instanceof Float32Array),r(u.length%g==0),r(g>=3),l(t.exports.meshopt_spatialSortRemap,u,u.length/g,g*4)},encodeVertexBuffer:function(u,g,m){r(m>0&&m<=256),r(m%4==0);var f=t.exports.meshopt_encodeVertexBufferBound(g,m);return d(t.exports.meshopt_encodeVertexBuffer,f,u,g,m)},encodeVertexBufferLevel:function(u,g,m,f,c){r(m>0&&m<=256),r(m%4==0),r(f>=0&&f<=3),r(c===void 0||c==0||c==1);var _=t.exports.meshopt_encodeVertexBufferBound(g,m);return d(t.exports.meshopt_encodeVertexBufferLevel,_,u,g,m,f,c||0)},encodeIndexBuffer:function(u,g,m){r(m==2||m==4),r(g%3==0);var f=b(u,m),c=t.exports.meshopt_encodeIndexBufferBound(g,h(f)+1);return d(t.exports.meshopt_encodeIndexBuffer,c,f,g,4)},encodeIndexSequence:function(u,g,m){r(m==2||m==4);var f=b(u,m),c=t.exports.meshopt_encodeIndexSequenceBound(g,h(f)+1);return d(t.exports.meshopt_encodeIndexSequence,c,f,g,4)},encodeGltfBuffer:function(u,g,m,f){var c={ATTRIBUTES:this.encodeVertexBuffer,TRIANGLES:this.encodeIndexBuffer,INDICES:this.encodeIndexSequence};return r(c[f]),c[f](u,g,m)},encodeFilterOct:function(u,g,m,f){return r(m==4||m==8),r(f>=1&&f<=16),p(t.exports.meshopt_encodeFilterOct,u,g,m,f,16)},encodeFilterQuat:function(u,g,m,f){return r(m==8),r(f>=4&&f<=16),p(t.exports.meshopt_encodeFilterQuat,u,g,m,f,16)},encodeFilterExp:function(u,g,m,f,c){r(m>0&&m%4==0),r(f>=1&&f<=24);var _={Separate:0,SharedVector:1,SharedComponent:2,Clamped:3};return p(t.exports.meshopt_encodeFilterExp,u,g,m,f,m,c?_[c]:1)},encodeFilterColor:function(u,g,m,f){return r(m==4||m==8),r(f>=2&&f<=16),p(t.exports.meshopt_encodeFilterColor,u,g,m,f,16)}}})();var Nr=(function(){var n="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuec:W:Odkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq;BZkdbk;jYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbhodnawTmbaxa8Acd4fRbbhokaocFeGh5cbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q1jjbfcj1jjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bbarcwf9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfag9c8F1:NghcKtc8F91aicdfa8J9c8N1:Nfg8KRbbG86bbarcVfcba8KahcjeGcr4fghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fag9c8F1:NgicKtc8F91aha8J9c8N1:NfghRbbG86bbarc96fcbahaicjeGcr4fgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbb83bbarcwfaicwf8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbcbaocl49Rh8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E93aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:XseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbaxcefgOavaiaqaDcsGfRbbgscl49RcsGcdtfydbascz6gPEhDavaias9RcsGcdtfydbaOaPfgzascsGgOEhsaOThOdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiaPfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaOfhiazaOfhxxekaxcbalRbbgHEgAaDc;:eSgDfhzaHcsGhCaHcl4hXdndnaHcs0mbazcefhOxekazhOavaiaX9RcsGcdtfydbhzkdndnaCmbaOcefhxxekaOhxavaiaH9RcsGcdtfydbhOkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhAascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaAhDxekaDcefhDkasce4cbasceG9R7amfgmhAkdndnaXcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhzaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkazhsxekascefhskaPce4cbaPceG9R7amfgmhzkdndnaCcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhOaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkaOhlxekalcefhlkaPce4cbaPceG9R7amfgmhOkdndnadcd9hmbabarcetfgDaA87ebaDclfaO87ebaDcdfaz87ebxekabarcdtfgDaABdbaDcwfaOBdbaDclfazBdbkavc;abfaocitfgDazBdbaDaABdlavaicdtfaABdbavc;abfaocefcsGcitfgDaOBdbaDazBdlavaicefgicsGcdtfazBdbavc;abfaocdfcsGcitfgDaABdbaDaOBdlavaiaHcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnaecvfal9nmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K1jjbgeabcifc98GfgbBd:K1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;teeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk:3eedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdxaialBdwaialBdlaialBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk81dbcjwk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:Kwkl8WNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuec:q:6dkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq;Ctklbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:183lYud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxavaialfgmar9Rgoad;8qbbcj;abad9Uc;WFbGcjdadca0EhPdndndnadTmbaoadfhscbhzinaeaz9nmdamax9RaD6miabazad2fhHaxaDfhOaPaeaz9RazaPfae6EgAcsfgocl4cifcd4hCavcj;cbfaoc9WGgXcetfhQavcj;cbfaXci2fhLavcj;cbfaXfhKcbhYaoc;ab6h8AincbhodnawTmbaxaYcd4fRbbhokaocFeGhEcbh3avcj;cbfh5indndndndnaEa3cet4ciGgoc9:fPdebdkamaO9RaX6mwavcj;cbfa3aX2faOaX;8qbbaOaAfhOxdkavcj;cbfa3aX2fcbaX;8kbxekamaO9RaC6moaoclVcbawEhraOaCfhocbhidna8Ambamao9Rc;Gb6mbcbhlina5alfhidndndndndndnaOalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaiaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaiczfaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaicafaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngicitc:q1jjbfpbibaic:q:yjjbfRbbgipsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaiaoclffaqc:q:yjjbfRbbfhoxikaic8Wfaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngicitc:q1jjbfpbibaic:q:yjjbfRbbgipsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaiaocwffaqc:q:yjjbfRbbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitc:q1jjbfpbibaic:q:yjjbfRbbgipsaoRbegqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqc:q:yjjbfRbbfhokalc;abfhialcjefaX0meaihlamao9Rc;Fb0mbkkdnaiaX9pmbaici4hlinamao9RcK6mwa5aifhqdndndndndndnaOaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spkbbaaaoclffahc:q:yjjbfRbbfhoxikaqaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spkbbaaaocwffahc:q:yjjbfRbbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpkbbaaaocdffahc:q:yjjbfRbbfhokalcdfhlaiczfgiaX6mbkkaohOaoTmoka5aXfh5a3cefg3cl9hmbkdndndndnawTmbasaYcd4fRbbglciGPlbedwbkaXTmdavcjdfaYfhlavaYfpbdbhgcbhoinalavcj;cbfaofpblbg8JaKaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaQaofpblbg8MaLaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Ecep9Ta8Epxeeeeeeeeeeeeeeeeg8Fp9op9Hp9rg8Eagp9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8LaypmwDKYqk8AExm35Ps8E8Fg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Ug8Fp9Abbbaladfgla8Fa8Ea8Epmlvorlvorlvorlvorp9Ug8Fp9Abbbaladfgla8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9Ug8Fp9Abbbaladfgla8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9AbbbaladfhlaoczfgoaX6mbxikkaXTmeavcjdfaYfhlavaYfpbdbhgcbhoinalavcj;cbfaofpblbg8JaKaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaQaofpblbg8MaLaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Ecep:nea8Epxebebebebebebebebg8Fp9op:bep9rg8Eagp:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8LaypmwDKYqk8AExm35Ps8E8Fg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeg8Fp9Abbbaladfgla8Fa8Ea8Epmlvorlvorlvorlvorp:oeg8Fp9Abbbaladfgla8Fa8Ea8EpmwDqkwDqkwDqkwDqkp:oeg8Fp9Abbbaladfgla8Fa8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9AbbbaladfhlaoczfgoaX6mbxdkkaXTmbcbhocbalcl4gl9Rc8FGhiavcjdfaYfhravaYfpbdbh8Finaravcj;cbfaofpblbggaKaofpblbg8JpmbzeHdOiAlCvXoQrLg8KaQaofpblbg8LaLaofpblbg8MpmbzeHdOiAlCvXoQrLg8NpmbezHdiOAlvCXorQLg8Eaip:Rea8Ealp:Sep9qg8Ea8Fp9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Fa8Ka8NpmwDKYqk8AExm35Ps8E8Fg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Faga8JpmwKDYq8AkEx3m5P8Es8Fgga8La8MpmwKDYq8AkEx3m5P8Es8Fg8JpmbezHdiOAlvCXorQLg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Faga8JpmwDKYqk8AExm35Ps8E8Fg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9AbbbaradfhraoczfgoaX6mbkkaYclfgYad6mbkaHavcjdfaAad2;8qbbavavcjdfaAcufad2fad;8qbbaAazfhzc9:hoaOhxaOmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdaPaeao9RaoaPfae6Eaofgoae6mbkaial9Rhxkcbc99amax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbk:TseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbaxcefgOavaiaqaDcsGfRbbgscl49RcsGcdtfydbascz6gPEhDavaias9RcsGcdtfydbaOaPfgzascsGgOEhsaOThOdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiaPfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaOfhiazaOfhxxekaxcbalRbbgHEgAaDc;:eSgDfhzaHcsGhCaHcl4hXdndnaHcs0mbazcefhOxekazhOavaiaX9RcsGcdtfydbhzkdndnaCmbaOcefhxxekaOhxavaiaH9RcsGcdtfydbhOkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhAascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaAhDxekaDcefhDkasce4cbasceG9R7amfgmhAkdndnaXcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhzaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkazhsxekascefhskaPce4cbaPceG9R7amfgmhzkdndnaCcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhOaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkaOhlxekalcefhlkaPce4cbaPceG9R7amfgmhOkdndnadcd9hmbabarcetfgDaA87ebaDclfaO87ebaDcdfaz87ebxekabarcdtfgDaABdbaDcwfaOBdbaDclfazBdbkavc;abfaocitfgDazBdbaDaABdlavaicdtfaABdbavc;abfaocefcsGcitfgDaOBdbaDazBdlavaicefgicsGcdtfazBdbavc;abfaocdfcsGcitfgDaABdbaDaOBdlavaiaHcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnaecvfal9nmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:2Pliur97eue978Jjjjjbc8W9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskaipxFubbFubbFubbFubbgxpklbdnalTmbcbhvabhdinadczfgmampbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraipblbaDaopmlvorxmPsCXQL358E8Fp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgPp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;MeawaqawaPp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiczfpxbbbbbbbbbbbbbbbbgopklbaiaopklbaiabalcitfgdaeciGglcitgv;8qbbaiaxpkladnalTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraipblaaDaopmlvorxmPsCXQL358E8Fp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgPp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;MeawaqawaPp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkadaiav;8qbbkk;Iwllue97euo978Jjjjjbca9Rhidnaec98GglTmbcbhvabhoinaocKfpxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81ZaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkpxibbbibbbibbbibbbp9qp;6ep;NegxaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meaxarczp:Sep;6ep;Megmamp;Meaxaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgxp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgPp9oamaxp;Mearp;Keczp:Rep9qgmaDaxp;Mearp;KeaPp9oaqaxp;Mearp;Keczp:Rep9qgrpmwDKYqk8AExm35Ps8E8FgDp5eakclp:RegxpEi:T:j83ibawaDp5baxpEd:T:j83ibaocwfamarpmbezHdiOAlvCXorQLgrp5eaxpEe:T:j83ibaoarp5baxpEb:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiczfpxbbbbbbbbbbbbbbbbgxpklbaiaxpklbaiabalcitfgoaeciGgvcitgw;8qbbdnavTmbaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81ZaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkpxibbbibbbibbbibbbp9qp;6ep;NegxaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meaxarczp:Sep;6ep;Megmamp;Meaxaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgxp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgPp9oamaxp;Mearp;Keczp:Rep9qgmaDaxp;Mearp;KeaPp9oaqaxp;Mearp;Keczp:Rep9qgrpmwDKYqk8AExm35Ps8E8FgDp5eakclp:RegxpEi:T:j83iKaiaDp5baxpEd:T:j83izaiamarpmbezHdiOAlvCXorQLgrp5eaxpEe:T:j83iwaiarp5baxpEb:T:j83ibkaoaiaw;8qbbkk;uddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaic8WfpxbbbbbbbbbbbbbbbbgopklbaicafaopklbaiczfaopklbaiaopklbaiabavcdtfgdalciGgecdtgv;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkadaiav;8qbbkk:CPvdue97euw97eu8Jjjjjbc8W9Rhiaec98Ghldndnadcl9hmbaipxbbbbbbbbbbbbbbbbgvpklbdnalTmbcbhoabhdinadpbbbhradpxbbuJbbuJbbuJbbuJaipblbarcKp:Tep9qgwcep:Seawp9qgDcdp:SeaDp9qgDclp:SeaDp9qgqp;6ep;NegDarcwp:RecKp:SegkarpxFbbbFbbbFbbbFbbbgxp9ogmp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gPp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oaDamakp:Xearczp:RecKp:Segrp:Uep;6ep;MeaPp;Keaxp9op9qaDamakarp:Uep:Xep;6ep;MeaPp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qaDaqawcep:Rep9oawpxebbbebbbebbbebbbp9op9qp;6ep;MeaPp;KecKp:Rep9qpkbbadczfhdaoclfgoal6mbkkalaeSmeaiavpklaaicafabalcdtfgdaeciGglcdtgo;8qbbaiavpklbdnalTmbaipblahraipxbbuJbbuJbbuJbbuJaipblbarcKp:Tep9qgwcep:Seawp9qgDcdp:SeaDp9qgDclp:SeaDp9qgqp;6ep;NegDarcwp:RecKp:SegkarpxFbbbFbbbFbbbFbbbgxp9ogmp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gPp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oaDamakp:Xearczp:RecKp:Segrp:Uep;6ep;MeaPp;Keaxp9op9qaDamakarp:Uep:Xep;6ep;MeaPp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qaDaqawcep:Rep9oawpxebbbebbbebbbebbbp9op9qp;6ep;MeaPp;KecKp:Rep9qpklakadaicafao;8qbbskaipxbbbbbbbbbbbbbbbbgvpklbdnalTmbcbhoabhdinadczfgspxbFu9hbFu9hbFu9hbFu9hadpbbbgDaspbbbgPpmlvorxmPsCXQL358E8Fgmczp:Teaipblbp9qgrcep:Searp9qgwcdp:Seawp9qgwclp:Seawp9qgwcwp:Seawp9qgqp;6ep;NegwaDaPpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbgPp9ogkaDczp:Segxp:Ueamczp:Reczp:Segmp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gDp;KeaPp9oawakaxamp:Uep:Xep;6ep;MeaDp;Keczp:Rep9qgxawaqarcep:Rep9oarpxebbbebbbebbbebbbp9op9qp;6ep;MeaDp;Keczp:Reawamakp:Uep;6ep;MeaDp;KeaPp9op9qgrpmwDKYqk8AExm35Ps8E8FpkbbadaxarpmbezHdiOAlvCXorQLpkbbadcafhdaoclfgoal6mbkkalaeSmbaiczfpxbbbbbbbbbbbbbbbbgrpklbaiarpklbaiabalcitfgdaeciGglcitgo;8qbbaiavpkladnalTmbaipxbFu9hbFu9hbFu9hbFu9haipblbgDaipblzgPpmlvorxmPsCXQL358E8Fgmczp:Teaipblap9qgrcep:Searp9qgwcdp:Seawp9qgwclp:Seawp9qgwcwp:Seawp9qgqp;6ep;NegwaDaPpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbgPp9ogkaDczp:Segxp:Ueamczp:Reczp:Segmp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gDp;KeaPp9oawakaxamp:Uep:Xep;6ep;MeaDp;Keczp:Rep9qgxawaqarcep:Rep9oarpxebbbebbbebbbebbbp9op9qp;6ep;MeaDp;Keczp:Reawamakp:Uep;6ep;MeaDp;KeaPp9op9qgrpmwDKYqk8AExm35Ps8E8FpklzaiaxarpmbezHdiOAlvCXorQLpklbkadaiao;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),a=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(n),r,s=WebAssembly.instantiate(i,{}).then(function(c){r=c.instance,r.exports.__wasm_call_ctors()});function o(c){for(var _=new Uint8Array(c.length),x=0;x<c.length;++x){var v=c.charCodeAt(x);_[x]=v>96?v-97:v>64?v-39:v+4}for(var w=0,x=0;x<c.length;++x)_[w++]=_[x]<60?a[_[x]]:(_[x]-60)*64+_[++x];return _.buffer.slice(0,w)}function l(c,_,x,v,w,A,R){var k=c.exports.sbrk,S=v+3&-4,y=k(S*w),C=k(A.length),L=new Uint8Array(c.exports.memory.buffer);L.set(A,C);var j=_(y,v,w,C,A.length);if(j==0&&R&&R(y,S,w),x.set(L.subarray(y,y+v*w)),k(y-k(0)),j!=0)throw new Error("Malformed buffer data: "+j)}var d={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},b=[],p=0;function u(c){var _={object:new Worker(c),pending:0,requests:{}};return _.object.onmessage=function(x){var v=x.data;_.pending-=v.count,_.requests[v.id][v.action](v.value),delete _.requests[v.id]},_}function g(c){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+f.name+";"+l.toString()+f.toString(),x=new Blob([_],{type:"text/javascript"}),v=URL.createObjectURL(x),w=b.length;w<c;++w)b[w]=u(v);for(var w=c;w<b.length;++w)b[w].object.postMessage({});b.length=c,URL.revokeObjectURL(v)}function m(c,_,x,v,w){for(var A=b[0],R=1;R<b.length;++R)b[R].pending<A.pending&&(A=b[R]);return new Promise(function(k,S){var y=new Uint8Array(x),C=++p;A.pending+=c,A.requests[C]={resolve:k,reject:S},A.object.postMessage({id:C,count:c,size:_,source:y,mode:v,filter:w},[y.buffer])})}function f(c){var _=c.data;if(!_.id)return self.close();self.ready.then(function(x){try{var v=new Uint8Array(_.count*_.size);l(x,x.exports[_.mode],v,_.count,_.size,_.source,x.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:v},[v.buffer])}catch(w){self.postMessage({id:_.id,count:_.count,action:"reject",value:w})}})}return{ready:s,supported:!0,useWorkers:function(c){g(c)},decodeVertexBuffer:function(c,_,x,v,w){l(r,r.exports.meshopt_decodeVertexBuffer,c,_,x,v,r.exports[d[w]])},decodeIndexBuffer:function(c,_,x,v){l(r,r.exports.meshopt_decodeIndexBuffer,c,_,x,v)},decodeIndexSequence:function(c,_,x,v){l(r,r.exports.meshopt_decodeIndexSequence,c,_,x,v)},decodeGltfBuffer:function(c,_,x,v,w,A){l(r,r.exports[h[w]],c,_,x,v,r.exports[d[A]])},decodeGltfBufferAsync:function(c,_,x,v,w){return b.length>0?m(c,_,x,h[v],d[w]):s.then(function(){var A=new Uint8Array(c*_);return l(r,r.exports[h[v]],A,c,_,x,r.exports[d[w]]),A})}}})();(function(){var n="b9H79Tebbbe:Gez9Geueu9Geub9Gbb9Gsuuuuuuuuuuuu99uueu9Gvuuuuub9Gruuuuuuub9Gouuuuuue999Gvuuuuueu9Gquuuuuuu99uueu9GPuuuuuuuuuuu99uueu9Gquuuuuuuu99ueu9Gruuuuuu99eu9Gwuuuuuu99ueu9Giuuue999Gluuuueu9GiuuueuiXCdilvorlwiDqkxmPbssbelve9Weiiviebeoweuec:G:Pdkr;7eko9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bbz9TW79O9V9Wt9F79P9T9W29P9M95br8E9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9OcttV9P9I91tW7bw8A9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9O9v9W9K9HtWbDQ9TW79O9V9Wt9F79P9T9W29P9M959t29V9W9W95bqX9TW79O9V9Wt9F79P9T9W29P9M959qV919UWbkQ9TW79O9V9Wt9F79P9T9W29P9M959q9V9P9Ut7bxX9TW79O9V9Wt9F79P9T9W29P9M959t9J9H2Wbma9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9WbPl79IV9RbsDwebcekdOAq:d;OeCdbk:J1eo3ue99euE99Cue9:8Jjjjjbcj;sb9Rgs8Kjjjjbcbhzasc:Cefcbc;Kbz:rjjjb8AdnabaeSmbabaeadcdtz:qjjjb8AkdnamcdGTmbalcrfci4gHcbyd1:jjjbHjjjjbbheasc:Cefasyd;8egOcdtfaeBdbasaOcefBd;8eaecbaHz:rjjjbhAcbhlcbhednadTmbcbhlabheadhHinaAaeydbgOci4fgCaCRbbgCceaOcrGgOtV86bbaCcu7aO4ceGalfhlaeclfheaHcufgHmbkcualcdtalcFFFFi0Ehekaecbyd1:jjjbHjjjjbbhzasc:Cefasyd;8egecdtfazBdbasaecefBd;8ealcd4alfhOcehHinaHgecethHaeaO6mbkcbhXcuaecdtgOaecFFFFi0Ecbyd1:jjjbHjjjjbbhHasc:Cefasyd;8egCcdtfaHBdbasaCcefBd;8eaHcFeaOz:rjjjbhQdnadTmbaecufhLcbhKindndnaQabaXcdtfgYydbgCc:v;t;h;Ev2aLGgOcdtfgAydbgHcuSmbceheinazaHcdtfydbaCSmdaOaefhHaecefheaQaHaLGgOcdtfgAydbgHcu9hmbkkazaKcdtfaCBdbaAaKBdbaKhHaKcefhKkaYaHBdbaXcefgXad9hmbkkaQcbyd:m:jjjbH:bjjjbbasasyd;8ecufBd;8ekcbh8AcualcefgecdtaecFFFFi0Ecbyd1:jjjbHjjjjbbhKasc:Cefasyd;8egecdtfaKBdbasaKBdNeasaecefBd;8ecuadcitadcFFFFe0Ecbyd1:jjjbHjjjjbbhEasc:Cefasyd;8egecdtfaEBdbasaEBd:yeasaecefBd;8eascNefabadalcbz:cjjjbcualcdtgealcFFFFi0Eg3cbyd1:jjjbHjjjjbbhCasc:Cefasyd;8egHcdtfaCBdbasaHcefBd;8ea3cbyd1:jjjbHjjjjbbhYasc:Cefasyd;8egHcdtfaYBdbasaHcefBd;8eaCaYaialavazasc:Cefz:djjjbalcbyd1:jjjbHjjjjbbh5asc:Cefasyd;8egHcdtfa5BdbasaHcefBd;8ea3cbyd1:jjjbHjjjjbbhHasc:Cefasyd;8egOcdtfaHBdbasaOcefBd;8ea3cbyd1:jjjbHjjjjbbhOasc:Cefasyd;8egAcdtfaOBdbasaAcefBd;8eaHcFeaez:rjjjbh8EaOcFeaez:rjjjbh8FdnalTmbaEcwfhaindnaKa8AgOcefg8AcdtfydbgAaKaOcdtgefydbgHSmbaAaH9RhhaEaHcitfhga8Faefh8Ja8Eaefh8KcbhQindndnagaQcitfydbgLaO9hmba8KaOBdba8JaOBdbxekdnaKaLcdtg8LfgeclfydbgHaeydbgeSmbaEaecitgAfydbaOSmeaHae9Rh8Maecu7aHfhXaaaAfhHcbheinaXaeSmeaecefheaHydbhAaHcwfhHaAaO9hmbkaea8M6meka8Fa8LfgeaOaLaeydbcuSEBdba8KaLaOa8KydbcuSEBdbkaQcefgQah9hmbkka8Aal9hmbkaChHaYhOa8FhAa8EhQcbheindndnaeaHydbgL9hmbdnaeaOydbgL9hmbaQydbhLdnaAydbgXcu9hmbaLcu9hmba5aefcb86bbxikdnaXcuSmbaLcuSmbaeaXSmbaCaXcdtfydbaCaLcdtfydb9hmba5aefcd86bbxika5aefh8KdnaeaXSmbaeaLSmba8Kce86bbxika8Kcl86bbxdkdnaeaYaLcdtgXfydb9hmbdnaAydbg8KcuSmbaea8KSmbaQydbghcuSmbaeahSmba8FaXfydbggcuSmbagaLSmba8EaXfydbgXcuSmbaXaLSmbdnaCa8KcdtfydbgLaCaXcdtfydb9hmbaLaCahcdtfydbgXSmbaXaCagcdtfydb9hmba5aefcd86bbxlka5aefcl86bbxika5aefcl86bbxdka5aefcl86bbxeka5aefa5aLfRbb86bbkaHclfhHaOclfhOaAclfhAaQclfhQalaecefge9hmbkdnamcaGTmbaEcwfh8Jcbh8Nindndna5a8NfgyRbbg8Pc9:fPibebekdndndnaCa8Ncdtfydbgea8N9hmbdnaqmbcbhgxdkdnazTmbcbhga8NheinagaqazaecdtgefydbfRbbcdGce4VhgaYaefydbgea8N9hmbxikkcbhga8NheinagaqaefRbbcdGce4VhgaYaecdtfydbgea8N9hmbxdkka5aefRbbhexeka8NheindnaKaecdtgafgeclfydbgHaeydbgeSmbaHae9Rh8AaEaecitfh8MaCaafh8Lcbh8Kina8Ma8KcitfydbgXhednindnaKaecdtgLfgeclfydbgHaeydbgeSmbdnaCaEaecitgOfydbcdtfydba8LydbgQ9hmbcehexikaHae9Rhhaecu7aHfhAa8JaOfhHcbheinaAaeSmeaecefheaHydbhOaHcwfhHaCaOcdtfydbaQ9hmbkaeah6hexdkaYaLfydbgeaX9hmbkcbhekagaece7Vhga8Kcefg8Ka8A9hmbkkaYaafydbgea8N9hmbka8PciagceGEhekayae86bbka8Ncefg8Nal9hmbkkdnaqTmbdndnazTmbazheaChHalhOindnaqaeydbfRbbceGTmba5aHydbfcl86bbkaeclfheaHclfhHaOcufgOmbxdkkaChealhHindnaqRbbceGTmba5aeydbfcl86bbkaqcefhqaeclfheaHcufgHmbkkaChealhOa5hHindna5aeydbfRbbcl9hmbaHcl86bbkaeclfheaHcefhHaOcufgOmbkkamceGTmba5healhHindnaeRbbce9hmbaecl86bbkaecefheaHcufgHmbkkcbhIcualcx2alc;v:Q;v:Qe0Ecbyd1:jjjbHjjjjbbhaasc:Cefasyd;8egecdtfaaBdbasaecefBd;8easc:qefcbBdbas9cb83i1eaaaialavazasc1efz:ejjjbh8RdndnaDmbcbh8Scbh8Lxekcbh8LawhecbhHindnaeIdbJbbbb9ETmbasa8LcdtfaHBdba8Lcefh8LkaeclfheaDaHcefgH9hmbkcua8Lal2gecdtaecFFFFi0Ecbyd1:jjjbHjjjjbbh8Sasc:Cefasyd;8egecdtfa8SBdbasaecefBd;8ealTmbdna8Lmbcbh8Lxekarcd4hXdnazTmba8Lcdth8KcbhLa8ShKinaoazaLcdtfydbaX2cdtfhQasheaKhHa8LhOinaHaQaeydbcdtgAfIdbawaAfIdbNUdbaeclfheaHclfhHaOcufgOmbkaKa8KfhKaLcefgLal9hmbxdkka8Lcdth8KcbhLa8ShKinaoaLaX2cdtfhQasheaKhHa8LhOinaHaQaeydbcdtgAfIdbawaAfIdbNUdbaeclfheaHclfhHaOcufgOmbkaKa8KfhKaLcefgLal9hmbkkcualc8S2gHalc;D;O;f8U0EgAcbyd1:jjjbHjjjjbbheasc:Cefasyd;8egOcdtfaeBdbasaOcefBd;8eaecbaHz:rjjjbhycbhqcbh8Ndna8LTmbcbhIaAcbyd1:jjjbHjjjjbbh8Nasc:Cefasyd;8egecdtfa8NBdbasaecefBd;8ea8NcbaHz:rjjjb8Acua8Lal2gecltgHaecFFFFb0Ecbyd1:jjjbHjjjjbbhqasc:Cefasyd;8egecdtfaqBdbasaecefBd;8eaqcbaHz:rjjjb8AamcjjjjdGTmbcualcltgealcFFFFb0Ecbyd1:jjjbHjjjjbbhIasc:Cefasyd;8egHcdtfaIBdbasaHcefBd;8eaIcbaez:rjjjb8AkdnadTmbcbhQabhHinaaaHclfydbgLcx2fgeIdbaaaHydbgKcx2fgOIdbgR:tg8UaaaHcwfydbgXcx2fgAIdlaOIdlg8V:tg8WNaAIdbaR:tg8XaeIdla8V:tg8YN:tg8Zh80aeIdwaOIdwg81:tgBa8XNaAIdwa81:tg83a8UN:tgUh8Xa8Ya83Na8WaBN:tg8Yh8Udna8Za8ZNa8Ya8YNaUaUNMM:rgBJbbbb9EgOTmba8ZaB:vh80aUaB:vh8Xa8YaB:vh8UkayaCaKcdtfydbgAc8S2fgea8UaB:rg8Wa8UNNg85aeIdbMUdbaea8Xa8Wa8XNg86Ng87aeIdlMUdlaea80a8Wa80Ng83Ng88aeIdwMUdwaea86a8UNg86aeIdxMUdxaea83a8UNg89aeIdzMUdzaea83a8XNg8:aeIdCMUdCaea8Ua8Wa80a81Na8UaRNa8Va8XNMM:mgZNg83Ng8UaeIdKMUdKaea8Xa83Ng8XaeId3MUd3aea80a83Ng80aeIdaMUdaaea83aZNg83aeId8KMUd8Kaea8WaeIdyMUdyayaCaLcdtfydbgLc8S2fgea85aeIdbMUdbaea87aeIdlMUdlaea88aeIdwMUdwaea86aeIdxMUdxaea89aeIdzMUdzaea8:aeIdCMUdCaea8UaeIdKMUdKaea8XaeId3MUd3aea80aeIdaMUdaaea83aeId8KMUd8Kaea8WaeIdyMUdyayaCaXcdtfydbgKc8S2fgea85aeIdbMUdbaea87aeIdlMUdlaea88aeIdwMUdwaea86aeIdxMUdxaea89aeIdzMUdzaea8:aeIdCMUdCaea8UaeIdKMUdKaea8XaeId3MUd3aea80aeIdaMUdaaea83aeId8KMUd8Kaea8WaeIdyMUdydnaITmbdnaOTmba8ZaB:vh8ZaUaB:vhUa8YaB:vh8YkaIaAcltfgeaBJbbbZNg8UaUNg8WaeIdlMUdlaea8Ua8ZNg8XaeIdwMUdwaea8Ua8YNg80aeIdbMUdbaea8UaR:ma8YNaUa8VN:ta81a8ZN:tNg8UaeIdxMUdxaIaLcltfgea8WaeIdlMUdlaea8XaeIdwMUdwaea80aeIdbMUdbaea8UaeIdxMUdxaIaKcltfgea8WaeIdlMUdlaea8XaeIdwMUdwaea80aeIdbMUdbaea8UaeIdxMUdxkaHcxfhHaQcifgQad6mbkkdnalTmbJ;n;m;m89J:v:;;w8ZamczGEh8YcbhOaChAaahHayheindnaOaAydb9hmbaecxfgQaQIdbJbbbbMUdbaeczfgQaQIdbJbbbbMUdbaecCfgQaQIdbJbbbbMUdbaea8YaecyfgQIdbg8ZNg8UaeIdbMUdbaeclfgLa8UaLIdbMUdbaecwfgLa8UaLIdbMUdbaecKfgLaLIdbaHIdbg8Xa8UN:tUdbaHcwfIdbh8Waec3fgLaLIdba8UaHclfIdbg80N:tUdbaecafgLaLIdba8Ua8WN:tUdbaec8KfgLIdbhUaQa8Za8UMUdbaLaUa8Ua8Wa8WNa8Xa8XNa80a80NMMNMUdbkaAclfhAaHcxfhHaec8SfhealaOcefgO9hmbkkdnadTmbcbhXabhKinabaXcdtfhLcbhHina5aLaHc:G1jjbfydbcdtfydbgOfRbbhedndna5aKaHfydbgAfRbbgQc99fcFeGcpe0mbaec99fcFeGc;:e6mekdnaQcufcFeGce0mba8EaAcdtfydbaO9hmekdnaecufcFeGce0mba8FaOcdtfydbaA9hmekJbbacJbbacJbbbZaecFeGceSEaQcFeGceSEh88aaaOcx2fgeIdwaaaAcx2fgQIdwgB:tg80:mh86aeIdlaQIdlg83:tg8Z:mh89aeIdbaQIdbgR:tgU:mh8:dnaaaLaHc:K1jjbfydbcdtfydbcx2fgeIdwaB:tg8Va80a80NaUaUNa8Za8ZNMMg8YNa8Va80NaeIdbaR:tg81aUNa8ZaeIdla83:tg85NMMg8Wa80N:tg8Xa8XNa81a8YNa8WaUN:tg8Ua8UNa85a8YNa8Wa8ZN:tg8Wa8WNMM:rg87Jbbbb9ETmba8Xa87:vh8Xa8Wa87:vh8Wa8Ua87:vh8Uka88a8Y:rNg8Ya8XaBNa8UaRNa83a8WNMM:mgZNg87aZNhZa8Xa87Nhna8Wa87Nhca8Ua87Nh9ca8Ya8XNg87a8WNhJa87a8UNh9ea8Ya8WNgTa8UNhSa8Xa87Nh87a8WaTNhTa8Ua8Ya8UNNh9hdnaUa85Na81a89NMg8Xa8XNa8Za8VNa85a86NMg8Ua8UNa80a81Na8Va8:NMg8Wa8WNMM:rg80Jbbbb9ETmba8Xa80:vh8Xa8Wa80:vh8Wa8Ua80:vh8UkayaCaAcdtfydbc8S2fgeaeIdba9ha8Ua88a80:rNg80a8UNNMgUMUdbaeaTa8Wa80a8WNg8VNMg81aeIdlMUdlaea87a8Xa80a8XNg8ZNMg85aeIdwMUdwaeaSa8Va8UNMg8VaeIdxMUdxaea9ea8Za8UNMg87aeIdzMUdzaeaJa8Za8WNMg8ZaeIdCMUdCaea9ca8Ua80a8XaBNa8UaRNa83a8WNMMgB:mNg80NMg8UaeIdKMUdKaeaca8Wa80NMg8WaeId3MUd3aeana8Xa80NMg8XaeIdaMUdaaeaZaBa80N:tg80aeId8KMUd8Kaea8YJbbbbMg8YaeIdyMUdyayaCaOcdtfydbc8S2fgeaUaeIdbMUdbaea81aeIdlMUdlaea85aeIdwMUdwaea8VaeIdxMUdxaea87aeIdzMUdzaea8ZaeIdCMUdCaea8UaeIdKMUdKaea8WaeId3MUd3aea8XaeIdaMUdaaea80aeId8KMUd8Kaea8YaeIdyMUdykaHclfgHcx9hmbkaKcxfhKaXcifgXad6mbka8LTmbcbhKinJbbbbh8YaaabaKcdtfgeclfydbgXcx2fgHIdwaaaeydbg8Kcx2fgOIdwg81:tg8Wa8WNaHIdbaOIdbg85:tg8Xa8XNaHIdlaOIdlg87:tg80a80NMMgRaaaecwfydbghcx2fgeIdwa81:tg8ZNa8Wa8Wa8ZNa8XaeIdba85:tgUNa80aeIdla87:tgBNMMg8UN:tJbbbbJbbjZaRa8Za8ZNaUaUNaBaBNMMg8VNa8Ua8UN:tg83:va83Jbbbb9BEg83Nh89a8Va8WNa8Za8UN:ta83Nh8:aRaBNa80a8UN:ta83NhZa8Va80NaBa8UN:ta83NhnaRaUNa8Xa8UN:ta83Nhca8Va8XNaUa8UN:ta83Nh9ca8XaBNaUa80N:tg8Ua8UNa80a8ZNaBa8WN:tg8Ua8UNa8WaUNa8Za8XN:tg8Ua8UNMM:rJbbbZNh8Ua8Sa8Ka8L2ggcdtfhHa8Saha8L2gEcdtfhOa8SaXa8L2g8JcdtfhAa81:mhJa87:mh9ea85:mhTcbhQa8LhLJbbbbhBJbbbbh83JbbbbhRJbbbbh8VJbbbbh81Jbbbbh85Jbbbbh87Jbbbbh88Jbbbbh86inascjdfaQfgecwfa8Ua8:aAIdbaHIdbg8Z:tg80Na89aOIdba8Z:tgUNMg8WNUdbaeclfa8Uana80NaZaUNMg8XNUdbaea8Ua9ca80NacaUNMg80NUdbaecxfa8UaJa8WNa9ea8XNa8ZaTa80NMMMg8ZNUdba8Ua8Wa8XNNa8VMh8Va8Ua8Wa80NNa81Mh81a8Ua8Xa80NNa85Mh85a8Ua8Za8ZNNa8YMh8Ya8Ua8Wa8ZNNaBMhBa8Ua8Xa8ZNNa83Mh83a8Ua80a8ZNNaRMhRa8Ua8Wa8WNNa87Mh87a8Ua8Xa8XNNa88Mh88a8Ua80a80NNa86Mh86aHclfhHaAclfhAaOclfhOaQczfhQaLcufgLmbka8Na8Kc8S2fgea86aeIdbMUdbaea88aeIdlMUdlaea87aeIdwMUdwaea85aeIdxMUdxaea81aeIdzMUdzaea8VaeIdCMUdCaeaRaeIdKMUdKaea83aeId3MUd3aeaBaeIdaMUdaaea8YaeId8KMUd8Kaea8UaeIdyMUdya8NaXc8S2fgea86aeIdbMUdbaea88aeIdlMUdlaea87aeIdwMUdwaea85aeIdxMUdxaea81aeIdzMUdzaea8VaeIdCMUdCaeaRaeIdKMUdKaea83aeId3MUd3aeaBaeIdaMUdaaea8YaeId8KMUd8Kaea8UaeIdyMUdya8Nahc8S2fgea86aeIdbMUdbaea88aeIdlMUdlaea87aeIdwMUdwaea85aeIdxMUdxaea81aeIdzMUdzaea8VaeIdCMUdCaeaRaeIdKMUdKaea83aeId3MUd3aeaBaeIdaMUdaaea8YaeId8KMUd8Kaea8UaeIdyMUdyaqagcltfhLcbhHa8LhAinaLaHfgeascjdfaHfgOIdbaeIdbMUdbaeclfgQaOclfIdbaQIdbMUdbaecwfgQaOcwfIdbaQIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaAcufgAmbkaqa8JcltfhLcbhHa8LhAinaLaHfgeascjdfaHfgOIdbaeIdbMUdbaeclfgQaOclfIdbaQIdbMUdbaecwfgQaOcwfIdbaQIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaAcufgAmbkaqaEcltfhLcbhHa8LhAinaLaHfgeascjdfaHfgOIdbaeIdbMUdbaeclfgQaOclfIdbaQIdbMUdbaecwfgQaOcwfIdbaQIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaAcufgAmbkaKcifgKad6mbkkcbhOdndnamcwGg9imbJbbbbh85cbh6cbh9kcbh0xekcbh6a3cbyd1:jjjbHjjjjbbh0asc:Cefasyd;8egecdtfa0BdbasaecefBd;8ecua0alabadaCz:fjjjbgAcltaAcjjjjiGEcbyd1:jjjbHjjjjbbh9kasc:Cefasyd;8egecdtfa9kBdbasaecefBd;8ea9kaAa0aaalz:gjjjbJFFuuh85aATmba9kheaAhHinaeIdbg8Ua85a85a8U9EEh85aeclfheaHcufgHmbkaAh6kasydNeh9mdnalTmba9mclfhea9mydbhAa5hHalhQcbhOincbaeydbgLaA9RaHRbbcpeGEaOfhOaHcefhHaeclfheaLhAaQcufgQmbkaOce4hOkcuadaO9Rcifg9ncx2a9nc;v:Q;v:Qe0Ecbyd1:jjjbHjjjjbbh8Pasc:Cefasyd;8egecdtfa8PBdbasaecefBd;8ecua9ncdta9ncFFFFi0Ecbyd1:jjjbHjjjjbbh9oasc:Cefasyd;8egecdtfa9oBdbasaecefBd;8ea3cbyd1:jjjbHjjjjbbhDasc:Cefasyd;8egecdtfaDBdbasaecefBd;8ealcbyd1:jjjbHjjjjbbh9pasc:Cefasyd;8egecdtfa9pBdbasaecefBd;8eaxaxNa8RJbbjZamclGEgnanN:vh88Jbbbbh86dnadak9nmbdna9nci6mbasyd:yeh9qa8Lclth9ra8Pcwfh9sJbbbbh87Jbbbbh86inascNefabadalaCz:cjjjbabh8Kcbh8Mcbh3inaba3cdtfhgcbheindnaCa8KaefydbgOcdtgXfydbgAaCagaec:W1jjbfydbcdtfydbgHcdtghfydbgQSmba5aHfRbbgKcv2a5aOfRbbgLfc;a1jjbfRbbg8JaLcv2aKfgEc;a1jjbfRbbg8AVcFeGTmbdnaQaA9nmbaEc;G1jjbfRbbcFeGmekdnaLcufcFeGce0mbaKTmba8EaXfydbaH9hmekdnaLTmbaKcufcFeGce0mba8FahfydbaO9hmeka8Pa8Mcx2fgAaHaOa8AcFeGgQEBdlaAaOaHaQEBdbaAaQa8JGcb9hBdwa8Mcefh8Mkaeclfgecx9hmbkdna3cifg3ad9pmba8Kcxfh8Ka8Mcifa9n9nmekka8MTmdcbhhinayaCa8Pahcx2fgKydbgQcdtgAfydbc8S2fgeIdwaaaKydlgLcx2fgHIdwg8XNaeIdzaHIdbg80NaeIdaMg8Ua8UMMa8XNaeIdlaHIdlg8ZNaeIdCa8XNaeId3Mg8Ua8UMMa8ZNaeIdba80NaeIdxa8ZNaeIdKMg8Ua8UMMa80NaeId8KMMM:lh8UJbbbbJbbjZaeIdyg8W:va8WJbbbb9BEh8WdndnaKydwg8KmbJFFuuh81xekJbbbbJbbjZayaCaLcdtfydbc8S2fgeIdygU:vaUJbbbb9BEaeIdwaaaQcx2fgHIdwgUNaeIdzaHIdbg8YNaeIdaMgBaBMMaUNaeIdlaHIdlgBNaeIdCaUNaeId3MgUaUMMaBNaeIdba8YNaeIdxaBNaeIdKMgUaUMMa8YNaeId8KMMM:lNh81ka8Wa8UNh8Vdna8LTmba8NaQc8S2fgHIdwa8XNaHIdza80NaHIdaMg8Ua8UMMa8XNaHIdla8ZNaHIdCa8XNaHId3Mg8Ua8UMMa8ZNaHIdba80NaHIdxa8ZNaHIdKMg8Ua8UMMa80NaHId8KMMMh8UaqaQa8L2ggcltfheaHIdyhUa8SaLa8L2gEcdtfgXhHa8LhOinaHIdbg8Wa8WaUNaecxfIdba8XaecwfIdbNa80aeIdbNa8ZaeclfIdbNMMMg8Wa8WM:tNa8UMh8UaHclfhHaeczfheaOcufgOmbkdndna8KmbJbbbbh8Wxeka8NaLc8S2fgOIdwaaaQcx2fgeIdwg8YNaOIdzaeIdbgBNaOIdaMg8Wa8WMMa8YNaOIdlaeIdlg83NaOIdCa8YNaOId3Mg8Wa8WMMa83NaOIdbaBNaOIdxa83NaOIdKMg8Wa8WMMaBNaOId8KMMMh8Wa8SagcdtfhHaqaEcltfheaOIdyhRa8LhOinaHIdbgUaUaRNaecxfIdba8YaecwfIdbNaBaeIdbNa83aeclfIdbNMMMgUaUM:tNa8WMh8WaHclfhHaeczfheaOcufgOmbka8W:lh8Wka8Va8U:lMh8Va81a8WMh81dndndna5aQfRbbc9:fPdbedkdna8Fa8Ea8EaAfydbaLSEaYaAfydbgXcdtfydbgAcu9hmbaYaLcdtfydbhAka8NaXc8S2fgOIdwaaaAcx2fgeIdwg8XNaOIdzaeIdbg80NaOIdaMg8Ua8UMMa8XNaOIdlaeIdlg8ZNaOIdCa8XNaOId3Mg8Ua8UMMa8ZNaOIdba80NaOIdxa8ZNaOIdKMg8Ua8UMMa80NaOId8KMMMh8Ua8SaAa8L2ggcdtfhHaqaXa8L2gEcltfheaOIdyhUa8LhOinaHIdbg8Wa8WaUNaecxfIdba8XaecwfIdbNa80aeIdbNa8ZaeclfIdbNMMMg8Wa8WM:tNa8UMh8UaHclfhHaeczfheaOcufgOmbkdndna8KmbJbbbbh8Wxeka8NaAc8S2fgOIdwaaaXcx2fgeIdwg80NaOIdzaeIdbg8ZNaOIdaMg8Wa8WMMa80NaOIdlaeIdlgUNaOIdCa80NaOId3Mg8Wa8WMMaUNaOIdba8ZNaOIdxaUNaOIdKMg8Wa8WMMa8ZNaOId8KMMMh8Wa8SaEcdtfhHaqagcltfheaOIdyh8Ya8LhOinaHIdbg8Xa8Xa8YNaecxfIdba80aecwfIdbNa8ZaeIdbNaUaeclfIdbNMMMg8Xa8XM:tNa8WMh8WaHclfhHaeczfheaOcufgOmbka8W:lh8Wka8Va8U:lMh8Va81a8WMh81xdkaYaAfydbgAaQSmbina8NaAc8S2fgHIdwa8XNaHIdza80NaHIdaMg8Ua8UMMa8XNaHIdla8ZNaHIdCa8XNaHId3Mg8Ua8UMMa8ZNaHIdba80NaHIdxa8ZNaHIdKMg8Ua8UMMa80NaHId8KMMMh8UaqaAa8L2cltfheaHIdyhUaXhHa8LhOinaHIdbg8Wa8WaUNaecxfIdba8XaecwfIdbNa80aeIdbNa8ZaeclfIdbNMMMg8Wa8WM:tNa8UMh8UaHclfhHaeczfheaOcufgOmbka8Va8U:lMh8VaYaAcdtfydbgAaQ9hmbkka5aLfRbbci9hmba8KTmbaYaLcdtfydbgAaLSmba8SagcdtfhXaaaQcx2fgeIdbh8XaeIdwh80aeIdlh8Zina8NaAc8S2fgHIdwa80NaHIdza8XNaHIdaMg8Ua8UMMa80NaHIdla8ZNaHIdCa80NaHId3Mg8Ua8UMMa8ZNaHIdba8XNaHIdxa8ZNaHIdKMg8Ua8UMMa8XNaHId8KMMMh8UaqaAa8L2cltfheaHIdyhUaXhHa8LhOinaHIdbg8Wa8WaUNaecxfIdba80aecwfIdbNa8XaeIdbNa8ZaeclfIdbNMMMg8Wa8WM:tNa8UMh8UaHclfhHaeczfheaOcufgOmbka81a8U:lMh81aYaAcdtfydbgAaL9hmbkkaKa81a8Va81a8V9DgeEUdwaKaQaLaea8Kcb9hGgeEBdlaKaLaQaeEBdbahcefgha8M9hmbkascjdfcbcj;qbz:rjjjb8Aa9shea8MhHinascjdfaeydbcA4cF8FGgOcFAaOcFA6EcdtfgOaOydbcefBdbaecxfheaHcufgHmbkcbhecbhHinascjdfaefgOydbhAaOaHBdbaAaHfhHaeclfgecj;qb9hmbkcbhea9shHinascjdfaHydbcA4cF8FGgOcFAaOcFA6EcdtfgOaOydbgOcefBdba9oaOcdtfaeBdbaHcxfhHa8Maecefge9hmbkadak9RgOci9Uh9tdnalTmbcbheaDhHinaHaeBdbaHclfhHalaecefge9hmbkkcbh9ua9pcbalz:rjjjbh3aOcO9Uh9va9tce4h9wcbh8Acbh8Jdnina8Pa9oa8Jcdtfydbcx2fgEIdwg8Ua889Emea8Aa9t9pmeJFFuuh8Wdna9wa8M9pmba8Pa9oa9wcdtfydbcx2fIdwJbb;aZNh8Wkdna8Ua8W9ETmba8Ua869ETmba8Aa9v0mdkdna3aCaEydlghcdtg9xfydbgAfg9yRbba3aCaEydbg8Kcdtg9zfydbgefg9ARbbVmba5a8KfRbbh9Bdna9maecdtfgHclfydbgOaHydbgHSmbaOaH9RhQaaaAcx2fhKaaaecx2fhXa9qaHcitfhecbhHcehgdnindnaDaeydbcdtfydbgOaASmbaDaeclfydbcdtfydbgLaASmbaOaLSmbaaaLcx2fgLIdbaaaOcx2fgOIdbg8X:tg8UaXIdlaOIdlg80:tg8YNaXIdba8X:tgBaLIdla80:tg8WN:tg8Za8UaKIdla80:tg83NaKIdba8X:tgRa8WN:tg80Na8WaXIdwaOIdwgU:tg8VNa8YaLIdwaU:tg8XN:tg8Ya8WaKIdwaU:tg81Na83a8XN:tg8WNa8XaBNa8Va8UN:tgUa8XaRNa81a8UN:tg8UNMMa8Za8ZNa8Ya8YNaUaUNMMa80a80Na8Wa8WNa8Ua8UNMMN:rJbbj8:N9FmdkaecwfheaHcefgHaQ6hgaQaH9hmbkkagceGTmba9wcefh9wxekdndndndna9Bc9:fPdebdka8KheinaDaecdtgefahBdbaYaefydbgea8K9hmbxikkdna8Fa8Ea8Ea9zfydbahSEaYa9zfydbg8Kcdtfydbgecu9hmbaYa9xfydbhekaDa9zfahBdbaehhkaDa8KcdtfahBdbka9Ace86bba9yce86bbaEIdwg8Ua86a86a8U9DEh86a9ucefh9ucecda9BceSEa8Afh8Aka8Jcefg8Ja8M9hmbkka9uTmddnalTmbcbhLcbhXindnaDaXcdtgefydbgOaXSmbaCaOcdtfydbh8KdnaXaCaefydb9hghmbaya8Kc8S2fgeayaXc8S2fgHIdbaeIdbMUdbaeaHIdlaeIdlMUdlaeaHIdwaeIdwMUdwaeaHIdxaeIdxMUdxaeaHIdzaeIdzMUdzaeaHIdCaeIdCMUdCaeaHIdKaeIdKMUdKaeaHId3aeId3MUd3aeaHIdaaeIdaMUdaaeaHId8KaeId8KMUd8KaeaHIdyaeIdyMUdyaITmbaIa8KcltfgeaIaXcltfgHIdbaeIdbMUdbaeaHIdlaeIdlMUdlaeaHIdwaeIdwMUdwaeaHIdxaeIdxMUdxka8LTmba8NaOc8S2fgea8NaXc8S2ggfgHIdbaeIdbMUdbaeaHIdlaeIdlMUdlaeaHIdwaeIdwMUdwaeaHIdxaeIdxMUdxaeaHIdzaeIdzMUdzaeaHIdCaeIdCMUdCaeaHIdKaeIdKMUdKaeaHId3aeId3MUd3aeaHIdaaeIdaMUdaaeaHId8KaeId8KMUd8KaeaHIdyaeIdyMUdya9raO2hKaqhHa8LhAinaHaKfgeaHaLfgOIdbaeIdbMUdbaeclfgQaOclfIdbaQIdbMUdbaecwfgQaOcwfIdbaQIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaAcufgAmbkahmbJbbbbJbbjZayagfgeIdyg8U:va8UJbbbb9BEaeIdwaaa8Kcx2fgHIdwg8UNaeIdzaHIdbg8WNaeIdaMg8Xa8XMMa8UNaeIdlaHIdlg8XNaeIdCa8UNaeId3Mg8Ua8UMMa8XNaeIdba8WNaeIdxa8XNaeIdKMg8Ua8UMMa8WNaeId8KMMM:lNg8Ua87a87a8U9DEh87kaLa9rfhLaXcefgXal9hmbkcbhHa8EheindnaeydbgOcuSmbdnaHaDaOcdtgAfydbgO9hmbcuhOa8EaAfydbgAcuSmbaDaAcdtfydbhOkaeaOBdbkaeclfhealaHcefgH9hmbkcbhHa8FheindnaeydbgOcuSmbdnaHaDaOcdtgAfydbgO9hmbcuhOa8FaAfydbgAcuSmbaDaAcdtfydbhOkaeaOBdbkaeclfhealaHcefgH9hmbkka87a86a8LEh87cbhHabhecbhOindnaCaDaeydbcdtfydbgLcdtfydbgAaCaDaeclfydbcdtfydbgKcdtfydbgQSmbaAaCaDaecwfydbcdtfydbg8KcdtfydbgXSmbaQaXSmbabaHcdtfgAaLBdbaAcwfa8KBdbaAclfaKBdbaHcifhHkaecxfheaOcifgOad6mbkdndna9imbaHhdxekdnaHak0mbaHhdxekdna85a879FmbaHhdxekJFFuuh85cbhdabhecbhOindna9ka0aeydbgAcdtfydbcdtfIdbg8Ua879ETmbaeclf8Pdbh9CabadcdtfgQaABdbaQclfa9C83dba8Ua85a85a8U9EEh85adcifhdkaecxfheaOcifgOaH6mbkkadak0mbxdkkascNefabadalaCz:cjjjbkdndnadak0mbadhOxekdna9imbadhOxekdna85a889FmbadhOxekcehLina85Jbb;aZNg8Ua88a8Ua889DEh8XJbbbbh8Udna6Tmba9khea6hHinaeIdbg8Wa8Ua8Wa8X9FEa8Ua8Wa8U9EEh8UaeclfheaHcufgHmbkkJFFuuh85cbhOabhecbhHindna9ka0aeydbgAcdtfydbcdtfIdbg8Wa8X9ETmbaeclf8Pdbh9CabaOcdtfgQaABdbaQclfa9C83dba8Wa85a85a8W9EEh85aOcifhOkaecxfheaHcifgHad6mbkdnaLaOad9hVceGmbadhOxdka8Ua86a86a8U9DEh86aOak9nmecbhLaOhda85a889FmbkkdnamcjjjjdGTmba9pcbalz:rjjjbhLdnaOTmbabheaOhHinaLaeydbgAfa5aAfRbbcl9h86bbaeclfheaHcufgHmbkkascNefabaOalaCz:cjjjbalTmbcbhQasyd:yehgindnaLaQfRbbTmbdna5aQfRbbgecl0mbceaetcQGmekdnaCaQcdtgKfydbgeaQSmbaaaQcx2fgHaaaecx2fge8Pdb83dbaHcwfaecwfydbBdbxekayaQc8S2fgeIdyg8Ua8UJL:3;rUNg8UMh88aeIdwa8UMhRaeIdla8UMh8VaeIdba8UMhUaeIdaa8UaaaQcx2fg8KIdwg89N:th81aeId3a8Ua8KIdlg8:N:th85aeIdKa8KIdbgZa8UN:th8YJbbbbhcaeIdCJbbbbMh87aeIdzJbbbbMhBaeIdxJbbbbMh83dndna8LTmbaQhAinJbbbba88a8NaAc8S2fgHIdyg8U:va8UJbbbb9BEh8UaqaAa8L2cltfheaHIdaa88Na81Mh81aHId3a88Na85Mh85aHIdKa88Na8YMh8YaHIdCa88Na87Mh87aHIdza88NaBMhBaHIdxa88Na83Mh83aHIdwa88NaRMhRaHIdla88Na8VMh8VaHIdba88NaUMhUa8LhHina81aecxfIdbg8ZaecwfIdbg8WNa8UN:th81a85a8ZaeclfIdbg8XNa8UN:th85a87a8Wa8XNa8UN:th87aUaeIdbg80a80Na8UN:thUa8Ya8Za80Na8UN:th8YaBa8Wa80Na8UN:thBa83a8Xa80Na8UN:th83aRa8Wa8WNa8UN:thRa8Va8Xa8XNa8UN:th8VaeczfheaHcufgHmbkaYaAcdtfydbgAaQ9hmbkaITmbaIaQcltfgeIdxhTaeIdwh9caeIdlhJaeIdbh8UxekJbbbbhTJbbbbh9cJbbbbhJJbbbbh8UkaBaU:vg8Xa8YNa81:ta87aBa83aU:vg8WN:tg81a8Va83a8WN:tg8Z:vg80a8Wa8YNa85:tg8VN:th85a9ca8Ua8XN:taJa8Ua8WN:tg83a80N:tg87aRaBa8XN:ta81a80N:tgB:vgR:mh81a83a8Z:vg9c:mhJdnJbbbba8Ua8UaU:vg9eN:ta83a9cN:ta87aRN:tg83:la88J:983:g81Ng8U9ETmba81a85NaJa8VNa9ea8YNaT:tMMa83:vhckaU:la8U9ETmba8Z:la8U9ETmbaB:la8U9ETmba9e:macNa8X:ma81acNa85aB:vMg85Na8W:maJacNa80:ma85Na8Va8Z:vMMg87Na8Y:maU:vMMMh88a9maKfgeclfydbgHaeydbge9RhXagaecitfhKJbbbbh8UdnaHaeSghmbJbbbbh8UaKheaXhAinaaaeclfydbcx2fgHIdwa89:tg8Wa8WNaHIdbaZ:tg8Wa8WNaHIdla8::tg8Wa8WNMMg8Waaaeydbcx2fgHIdwa89:tg8Xa8XNaHIdbaZ:tg8Xa8XNaHIdla8::tg8Xa8XNMMg8Xa8Ua8Ua8X9DEg8Ua8Ua8W9DEh8UaecwfheaAcufgAmbkka85a89:tg8Wa8WNa88aZ:tg8Wa8WNa87a8::tg8Wa8WNMMa8U:rg8Ua8UN9EmbdnahmbcbhAcehhdninaaaKclfydbcx2fgeIdbaaaKydbcx2fgHIdbg8X:tg8Ua8:aHIdlg80:tg8YNaZa8X:tgBaeIdla80:tg8WN:tg8Za8Ua87a80:tg83Na88a8X:tgRa8WN:tg80Na8Wa89aHIdwgU:tg8VNa8YaeIdwaU:tg8XN:tg8Ya8Wa85aU:tg81Na83a8XN:tg8WNa8XaBNa8Va8UN:tgUa8XaRNa81a8UN:tg8UNMMa8Za8ZNa8Ya8YNaUaUNMMa80a80Na8Wa8WNa8Ua8UNMMN:rJbbj8:N9FmeaKcwfhKaAcefgAaX6hhaXaA9hmbkkahceGmeka8Ka85Udwa8Ka87Udla8Ka88UdbkaQcefgQal9hmbkdndna8LTmba8LclthYa8Lcdth8KcbhKa8ShXindnaLaKfRbbTmba5aKfRbbclSmbJbbbbJbbjZa8NaKc8S2fIdyg8U:va8UJbbbb9BEh8UaaaCaKcdtfydbcx2fhHaqheaXhAa8LhQinaAa8UaecwfIdbaHIdwNaeIdbaHIdbNaeclfIdbaHIdlNMMaecxfIdbMNUdbaeczfheaAclfhAaQcufgQmbkkaqaYfhqaXa8KfhXaKcefgKal9hmbkarcd4hXavcd4hYasId:qeh8UasId:meh8WasId1eh8XazTmea8Lcdth8KcbhKindnaLaKfRbbTmbaiazaKcdtfydbgCaY2cdtfgeaaaKcx2fgHIdba8RNa8XMUdbaeaHIdla8RNa8WMUdlaeaHIdwa8RNa8UMUdwaoaCaX2cdtfhQashea8ShHa8LhCinaQaeydbcdtgAfaHIdbawaAfIdb:vUdbaeclfheaHclfhHaCcufgCmbkka8Sa8Kfh8SaKcefgKal9hmbxikkavcd4hCasId:qeh8UasId:meh8WasId1eh8XdnazTmbazheindna9pRbbTmbaiaeydbaC2cdtfgHaaIdba8RNa8XMUdbaHaaclfIdba8RNa8WMUdlaHaacwfIdba8RNa8UMUdwka9pcefh9paeclfheaacxfhaalcufglmbxikkaCcdtheindna9pRbbTmbaiaaIdba8RNa8XMUdbaiclfaaclfIdba8RNa8WMUdbaicwfaacwfIdba8RNa8UMUdbka9pcefh9paacxfhaaiaefhialcufglmbxdkka8Lcdth8KcbhKindnaLaKfRbbTmbaiaKaY2cdtfgeaaaKcx2fgHIdba8RNa8XMUdbaeaHIdla8RNa8WMUdlaeaHIdwa8RNa8UMUdwaoaKaX2cdtfhQashea8ShHa8LhCinaQaeydbcdtgAfaHIdbawaAfIdb:vUdbaeclfheaHclfhHaCcufgCmbkka8Sa8Kfh8SaKcefgKal9hmbkkdnamcjjjjlGTmbazmbaOTmbcbhLabheina5aeydbgAfRbbc3thKaecwfgXydbhHdndna8EaAcdtg8KfydbaeclfgYydbgCSmbcbhQa8FaCcdtfydbaA9hmekcjjjj94hQkaeaKaQVaAVBdba5aCfRbbc3thKdndna8EaCcdtfydbaHSmbcbhQa8FaHcdtfydbaC9hmekcjjjj94hQkaYaKaQVaCVBdba5aHfRbbc3thQdndna8EaHcdtfydbaASmbcbhCa8Fa8KfydbaH9hmekcjjjj94hCkaXaQaCVaHVBdbaecxfheaLcifgLaO6mbkkdnazTmbaOTmbaOheinabazabydbcdtfydbBdbabclfhbaecufgembkkdnaPTmbaPana86:rNUdbkasyd;8egecdtasc:Ceffc98fhHdninaeTmeaHydbcbyd:m:jjjbH:bjjjbbaHc98fhHaecufhexbkkascj;sbf8KjjjjbaOk;Yieouabydlhvabydbclfcbaicdtz:rjjjbhoadci9UhrdnadTmbdnalTmbaehwadhDinaoalawydbcdtfydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbxdkkaehwadhDinaoawydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbkkdnaiTmbcbhDaohwinawydbhqawaDBdbawclfhwaqaDfhDaicufgimbkkdnadci6mbinaecwfydbhwaeclfydbhDaeydbhidnalTmbalawcdtfydbhwalaDcdtfydbhDalaicdtfydbhikavaoaicdtfgqydbcitfaDBdbavaqydbcitfawBdlaqaqydbcefBdbavaoaDcdtfgqydbcitfawBdbavaqydbcitfaiBdlaqaqydbcefBdbavaoawcdtfgwydbcitfaiBdbavawydbcitfaDBdlawawydbcefBdbaecxfhearcufgrmbkkabydbcbBdbk:todDue99aicd4aifhrcehwinawgDcethwaDar6mbkcuaDcdtgraDcFFFFi0Ecbyd1:jjjbHjjjjbbhwaoaoyd9GgqcefBd9GaoaqcdtfawBdbawcFearz:rjjjbhkdnaiTmbalcd4hlaDcufhxcbhminamhDdnavTmbavamcdtfydbhDkcbadaDal2cdtfgDydlgwawcjjjj94SEgwcH4aw7c:F:b:DD2cbaDydbgwawcjjjj94SEgwcH4aw7c;D;O:B8J27cbaDydwgDaDcjjjj94SEgDcH4aD7c:3F;N8N27axGhwamcdthPdndndnavTmbakawcdtfgrydbgDcuSmeadavaPfydbal2cdtfgsIdbhzcehqinaqhrdnadavaDcdtfydbal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmlkarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbxdkkakawcdtfgrydbgDcuSmbadamal2cdtfgsIdbhzcehqinaqhrdnadaDal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmikarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbkkaramBdbamhDkabaPfaDBdbamcefgmai9hmbkkakcbyd:m:jjjbH:bjjjbbaoaoyd9GcufBd9GdnaeTmbaiTmbcbhDaehwinawaDBdbawclfhwaiaDcefgD9hmbkcbhDaehwindnaDabydbgrSmbawaearcdtfgrydbBdbaraDBdbkawclfhwabclfhbaiaDcefgD9hmbkkk:hrdvuv998Jjjjjbca9Rgoczfcwfcbyd11jjbBdbaocb8Pdj1jjb83izaocwfcbydN1jjbBdbaocb8Pd:m1jjb83ibdnadTmbaicd4hrdnabmbdnalTmbcbhwinaealawcdtfydbar2cdtfhDcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxikkarcdthwcbhDincbhiinaoczfaifgqaeaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaeawfheaDcefgDad9hmbxdkkdnalTmbcbhwinabawcx2fgiaealawcdtfydbar2cdtfgDIdbUdbaiaDIdlUdlaiaDIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxdkkarcdthlcbhwaehDinabawcx2fgiaeawar2cdtfgqIdbUdbaiaqIdlUdlaiaqIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaDalfhDawcefgwad9hmbkkJbbbbaoIdbaoIdzgx:tgkakJbbbb9DEgkaoIdlaoIdCgm:tgPaPak9DEgkaoIdwaoIdKgP:tgsasak9DEhsdnabTmbadTmbJbbbbJbbjZas:vasJbbbb9BEhkinabakabIdbax:tNUdbabclfgoakaoIdbam:tNUdbabcwfgoakaoIdbaP:tNUdbabcxfhbadcufgdmbkkdnavTmbavaPUdwavamUdlavaxUdbkask:ZlewudnaeTmbcbhvabhoinaoavBdbaoclfhoaeavcefgv9hmbkkdnaiTmbcbhrinadarcdtfhwcbhDinalawaDcdtgvc:G1jjbfydbcdtfydbcdtfydbhodnabalawavfydbcdtfydbgqcdtfgkydbgvaqSmbinakabavgqcdtfgxydbgvBdbaxhkaqav9hmbkkdnabaocdtfgkydbgvaoSmbinakabavgocdtfgxydbgvBdbaxhkaoav9hmbkkdnaqaoSmbabaqaoaqao0Ecdtfaqaoaqao6EBdbkaDcefgDci9hmbkarcifgrai6mbkkdnaembcbskcbhxindnalaxcdtgvfydbax9hmbaxhodnabavfgDydbgvaxSmbaDhqinaqabavgocdtfgkydbgvBdbakhqaoav9hmbkkaDaoBdbkaxcefgxae9hmbkcbhvabhocbhkindndnavalydbgq9hmbdnavaoydbgq9hmbaoakBdbakcefhkxdkaoabaqcdtfydbBdbxekaoabaqcdtfydbBdbkaoclfhoalclfhlaeavcefgv9hmbkakk;Jiilud99duabcbaecltz:rjjjbhvdnalTmbadhoaihralhwinarcwfIdbhDarclfIdbhqavaoydbcltfgkarIdbakIdbMUdbakclfgxaqaxIdbMUdbakcwfgxaDaxIdbMUdbakcxfgkakIdbJbbjZMUdbaoclfhoarcxfhrawcufgwmbkkdnaeTmbavhraehkinarcxfgoIdbhDaocbBdbararIdbJbbbbJbbjZaD:vaDJbbbb9BEgDNUdbarclfgoaDaoIdbNUdbarcwfgoaDaoIdbNUdbarczfhrakcufgkmbkkdnalTmbinavadydbcltfgrcxfgkaicwfIdbarcwfIdb:tgDaDNaiIdbarIdb:tgDaDNaiclfIdbarclfIdb:tgDaDNMMgDakIdbgqaqaD9DEUdbadclfhdaicxfhialcufglmbkkdnaeTmbavcxfhrinabarIdbUdbarczfhrabclfhbaecufgembkkk8MbabaeadaialavcbcbcbcbcbaoarawaDz:bjjjbk8MbabaeadaialavaoarawaDaqakaxamaPz:bjjjbkRbababaeadaialavaoarawaDaqakaxcjjjjdVamz:bjjjbk:p8Koque99due99iuq998Jjjjjbc;Wb9Rgq8Kjjjjbcbhkaqcxfcbc;Kbz:rjjjb8Aaqcualcx2alc;v:Q;v:Qe0Ecbyd1:jjjbHjjjjbbgxBdxaqceBd2axaialavcbcbz:ejjjb8AaqcualcdtalcFFFFi0Egmcbyd1:jjjbHjjjjbbgiBdzaqcdBd2dndnJFF959eJbbjZawJbbjZawJbbjZ9DE:vawJ9VO:d869DEgw:lJbbb9p9DTmbaw:OhPxekcjjjj94hPkadci9Uhsarco9UhzdndnaombaPcd9imekdnalTmbaPcuf:YhwdnaoTmbcbhvaihHaxhOindndnaoavfRbbceGTmbavcjjjjlVhAxekdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqthAdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXVhAdndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXcCtVhAkaHaABdbaHclfhHaOcxfhOalavcefgv9hmbxdkkaxhvaihOalhHindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcCthAdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqtaAVhAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaOaAaXVBdbavcxfhvaOclfhOaHcufgHmbkkadTmbcbhkaehvcbhOinakaiavclfydbcdtfydbgHaiavcwfydbcdtfydbgA9haiavydbcdtfydbgXaH9haXaA9hGGfhkavcxfhvaOcifgOad6mbkkarci9UhQdndnaz:Z:rJbbbZMgw:lJbbb9p9DTmbaw:Ohvxekcjjjj94hvkaQ:ZhLcbhKc:bwhHdndninashYaHhXaPhrakg8AaQ9pmeaXar9Rcd9imeavaXcufavaX9iEarcefavar9kEhzdnalTmbazcuf:YhwdnaoTmbcbhOaihPaxhvindndnaoaOfRbbceGTmbaOcjjjjlVhHxekdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhHxekcjjjj94hHkaHcqthHdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohsxekcjjjj94hskaHasVhHdndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohsxekcjjjj94hskaHascCtVhHkaPaHBdbaPclfhPavcxfhvalaOcefgO9hmbxdkkaxhvaihOalhPindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhHxekcjjjj94hHkaHcCthHdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohsxekcjjjj94hskascqtaHVhHdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohsxekcjjjj94hskaOaHasVBdbavcxfhvaOclfhOaPcufgPmbkkcbhOdnadTmbaehvcbhPinaOaiavclfydbcdtfydbgHaiavcwfydbcdtfydbgs9haiavydbcdtfydbgAaH9haAas9hGGfhOavcxfhvaPcifgPad6mbkkaYhsaOhkaXhHazhPdnaOaQ9nmbaOhsa8AhkazhHarhPkdndnaKcl0mbdnaY:Zgwa8A:ZgC:taz:YgEar:Y:tg3aEaX:Y:tg5aO:Zg8EaL:tNNNawaL:ta5NaCa8E:tNaCaL:ta3Na8Eaw:tNM:vaEMJbbbZMgw:lJbbb9p9DTmbaw:Ohvxdkcjjjj94hvxekaPaHfcd9ThvkaKcefgKcs9hmbxdkka8AhkarhPkdndndnakmbJbbjZhwcbhicdhvaDmexdkalcd4alfhHcehOinaOgvcethOavaH6mbkcbhOaqcuavcdtgravcFFFFi0Ecbyd1:jjjbHjjjjbbgzBdCaqciBd2aqamcbyd1:jjjbHjjjjbbgXBdKaqclBd2dndndndnalTmbaPcuf:YhwaoTmecbhOaihHaxhPindndnaoaOfRbbceGTmbaOcjjjjlVhsxekdndnaPclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohsxekcjjjj94hskascqthsdndnaPcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkasaAVhsdndnaPIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkasaAcCtVhskaHasBdbaHclfhHaPcxfhPalaOcefgO9hmbxikkazcFearz:rjjjb8AcbhrcbhvxdkaxhOaihPalhHindndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohsxekcjjjj94hskascCthsdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqtasVhsdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaPasaAVBdbaOcxfhOaPclfhPaHcufgHmbkkazcFearz:rjjjbhAavcufhocbhrcbhzindndndnaAaiazcdtgKfydbgHcm4aH7c:v;t;h;Ev2gvcs4av7aoGgPcdtfgsydbgOcuSmbcehvinaiaOcdtgOfydbaHSmdaPavfhOavcefhvaAaOaoGgPcdtfgsydbgOcu9hmbkkasazBdbarhvarcefhrxekaXaOfydbhvkaXaKfavBdbazcefgzal9hmbkcuarc8S2gOarc;D;O;f8U0EhvkcbhAaqavcbyd1:jjjbHjjjjbbgvBd3aqcvBd2avcbaOz:rjjjbhOdnadTmbaehiinJbbnnJbbjZaXaiydbgHcdtfydbgvaXaiclfydbgPcdtfydbgzSavaXaicwfydbgscdtfydbgKSGgoEh8FdnaxaPcx2fgPIdbaxaHcx2fgHIdbg8E:tgCaxascx2fgsIdlaHIdlg3:tgwNasIdba8E:tgEaPIdla3:tgaN:tgLaLNaaasIdwaHIdwg5:tghNawaPIdwa5:tgaN:tgwawNaaaENahaCN:tgCaCNMM:rgEJbbbb9ETmbaLaE:vhLaCaE:vhCawaE:vhwkaOavc8S2fgvavIdbawa8FaE:rNgEawNNgaMUdbavaCaEaCNghNggavIdlMUdlavaLaEaLNg8FNg8JavIdwMUdwavahawNghavIdxMUdxava8FawNg8KavIdzMUdzava8FaCNg8FavIdCMUdCavawaEaLa5Nawa8ENa3aCNMM:mg3Ng8ENgwavIdKMUdKavaCa8ENgCavId3MUd3avaLa8ENgLavIdaMUdaava8Ea3Ng8EavId8KMUd8KavaEavIdyMUdydnaombaOazc8S2fgvaaavIdbMUdbavagavIdlMUdlava8JavIdwMUdwavahavIdxMUdxava8KavIdzMUdzava8FavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava8EavId8KMUd8KavaEavIdyMUdyaOaKc8S2fgvaaavIdbMUdbavagavIdlMUdlava8JavIdwMUdwavahavIdxMUdxava8KavIdzMUdzava8FavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava8EavId8KMUd8KavaEavIdyMUdykaicxfhiaAcifgAad6mbkkcbhHaqcuarcdtgvarcFFFFi0Egicbyd1:jjjbHjjjjbbgPBdaaqcoBd2aqaicbyd1:jjjbHjjjjbbgiBd8KaqcrBd2aPcFeavz:rjjjbhzdnalTmbaXhPinJbbbbJbbjZaOaPydbgsc8S2fgvIdygw:vawJbbbb9BEavIdwaxcwfIdbgwNavIdzaxIdbgCNavIdaMgLaLMMawNavIdlaxclfIdbgLNavIdCawNavId3MgwawMMaLNavIdbaCNavIdxaLNavIdKMgwawMMaCNavId8KMMM:lNhwdndnazascdtgvfgsydbcuSmbaiavfIdbaw9ETmekasaHBdbaiavfawUdbkaPclfhPaxcxfhxalaHcefgH9hmbkkJbbbbhwdnarTmbinaiIdbgCawawaC9DEhwaiclfhiarcufgrmbkkakcd4akfhOcehiinaigvcethiavaO6mbkcbhiaqcuavcdtgOavcFFFFi0Ecbyd1:jjjbHjjjjbbgPBdyaPcFeaOz:rjjjbhsdnadTmbavcufhAcbhrcbhxindnaXaeaxcdtfgvydbcdtfydbgiaXavclfydbcdtfydbgOSmbaiaXavcwfydbcdtfydbgvSmbaOavSmbazavcdtfydbhHdndnazaOcdtfydbgvazaicdtfydbgi9pmbavaH9pmbaHhlaihoavhHxekdnaHai9pmbaHav9pmbaihlavhoxekavhlaHhoaihHkabarcx2fgvaHBdbavcwfaoBdbavclfalBdbdnasaoc:3F;N8N2alc:F:b:DD27aHc;D;O:B8J27aAGgOcdtfgvydbgicuSmbcehPinaPhvdnabaicx2fgiydbaH9hmbaiydlal9hmbaiydwaoSmikavcefhPasaOavfaAGgOcdtfgvydbgicu9hmbkkavarBdbarcefhrkaxcifgxad6mbkarci2hikdnaDmbcwhvxdkaw:rhwcwhvkaDawUdbkavcdthvdninavTmeavc98fgvaqcxffydbcbyd:m:jjjbH:bjjjbbxbkkaqc;Wbf8Kjjjjbaik:2ldwue9:8Jjjjjbc;Wb9Rgr8Kjjjjbcbhwarcxfcbc;Kbz:rjjjb8AdnabaeSmbabaeadcdtz:qjjjb8AkarcualcdtalcFFFFi0EgDcbyd1:jjjbHjjjjbbgqBdxarceBd2aqcbaialavcbarcxfz:djjjbcualcx2alc;v:Q;v:Qe0Ecbyd1:jjjbHjjjjbbhkarcxfaryd2gxcdtgmfakBdbaraxcefgPBd2akaialavcbcbz:ejjjb8AarcxfaPcdtfaDcbyd1:jjjbHjjjjbbgvBdbaraxcdfgiBd2arcxfaicdtfcuavalaeadaqz:fjjjbgecltaecjjjjiGEcbyd1:jjjbHjjjjbbgiBdbaiaeavakalz:gjjjbdnadTmbaoaoNhocbhwabhlcbhkindnaiavalydbgecdtfydbcdtfIdbao9ETmbalclf8PdbhsabawcdtfgqaeBdbaqclfas83dbawcifhwkalcxfhlakcifgkad6mbkkaxcifhlamarcxffcwfhkdninalTmeakydbcbyd:m:jjjbH:bjjjbbakc98fhkalcufhlxbkkarc;Wbf8Kjjjjbawk:FCoDud99rue99iul998Jjjjjbc;Wb9Rgw8KjjjjbdndnarmbcbhDxekawcxfcbc;Kbz:rjjjb8Aawcuadcx2adc;v:Q;v:Qe0Ecbyd1:jjjbHjjjjbbgqBdxawceBd2aqaeadaicbcbz:ejjjb8AawcuadcdtadcFFFFi0Egkcbyd1:jjjbHjjjjbbgxBdzawcdBd2adcd4adfhmceheinaegicetheaiam6mbkcbhPawcuaicdtgsaicFFFFi0Ecbyd1:jjjbHjjjjbbgzBdCawciBd2dndnar:ZgH:rJbbbZMgO:lJbbb9p9DTmbaO:Ohexekcjjjj94hekaicufhAc:bwhmcbhCadhXcbhQinaChLaeamgKcufaeaK9iEaPgDcefaeaD9kEhYdndnadTmbaYcuf:YhOaqhiaxheadhmindndnaiIdbaONJbbbZMg8A:lJbbb9p9DTmba8A:OhCxekcjjjj94hCkaCcCthCdndnaiclfIdbaONJbbbZMg8A:lJbbb9p9DTmba8A:OhExekcjjjj94hEkaEcqtaCVhCdndnaicwfIdbaONJbbbZMg8A:lJbbb9p9DTmba8A:OhExekcjjjj94hEkaeaCaEVBdbaicxfhiaeclfheamcufgmmbkazcFeasz:rjjjbh3cbh5cbhPindna3axaPcdtfydbgCcm4aC7c:v;t;h;Ev2gics4ai7aAGgmcdtfgEydbgecuSmbaeaCSmbcehiina3amaifaAGgmcdtfgEydbgecuSmeaicefhiaeaC9hmbkkaEaCBdba5aecuSfh5aPcefgPad9hmbxdkkazcFeasz:rjjjb8Acbh5kaDaYa5ar0giEhPaLa5aiEhCdna5arSmbaYaKaiEgmaP9Rcd9imbdndnaQcl0mbdnaX:ZgOaL:Zg8A:taY:Yg8EaD:Y:tg8Fa8EaK:Y:tgaa5:ZghaH:tNNNaOaH:taaNa8Aah:tNa8AaH:ta8FNahaO:tNM:va8EMJbbbZMgO:lJbbb9p9DTmbaO:Ohexdkcjjjj94hexekaPamfcd9Theka5aXaiEhXaQcefgQcs9hmekkdndnaCmbcihicbhDxekcbhiawakcbyd1:jjjbHjjjjbbg5BdKawclBd2aPcuf:Yh8AdndnadTmbaqhiaxheadhmindndnaiIdba8ANJbbbZMgO:lJbbb9p9DTmbaO:OhCxekcjjjj94hCkaCcCthCdndnaiclfIdba8ANJbbbZMgO:lJbbb9p9DTmbaO:OhExekcjjjj94hEkaEcqtaCVhCdndnaicwfIdba8ANJbbbZMgO:lJbbb9p9DTmbaO:OhExekcjjjj94hEkaeaCaEVBdbaicxfhiaeclfheamcufgmmbkazcFeasz:rjjjbh3cbhDcbhYindndndna3axaYcdtgKfydbgCcm4aC7c:v;t;h;Ev2gics4ai7aAGgmcdtfgEydbgecuSmbcehiinaxaecdtgefydbaCSmdamaifheaicefhia3aeaAGgmcdtfgEydbgecu9hmbkkaEaYBdbaDhiaDcefhDxeka5aefydbhika5aKfaiBdbaYcefgYad9hmbkcuaDc32giaDc;j:KM;jb0EhexekazcFeasz:rjjjb8AcbhDcbhekawaecbyd1:jjjbHjjjjbbgeBd3awcvBd2aecbaiz:rjjjbhEavcd4hKdnadTmbdnalTmbaKcdth3a5hCaqhealhmadhAinaEaCydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiamIdbaiIdxMUdxaiamclfIdbaiIdzMUdzaiamcwfIdbaiIdCMUdCaiaiIdKJbbjZMUdKaCclfhCaecxfheama3fhmaAcufgAmbxdkka5hmaqheadhCinaEamydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiaiIdxJbbbbMUdxaiaiIdzJbbbbMUdzaiaiIdCJbbbbMUdCaiaiIdKJbbjZMUdKamclfhmaecxfheaCcufgCmbkkdnaDTmbaEhiaDheinaiaiIdbJbbbbJbbjZaicKfIdbgO:vaOJbbbb9BEgONUdbaiclfgmaOamIdbNUdbaicwfgmaOamIdbNUdbaicxfgmaOamIdbNUdbaiczfgmaOamIdbNUdbaicCfgmaOamIdbNUdbaic3fhiaecufgembkkcbhCawcuaDcdtgYaDcFFFFi0Egicbyd1:jjjbHjjjjbbgeBdaawcoBd2awaicbyd1:jjjbHjjjjbbg3Bd8KaecFeaYz:rjjjbhxdnadTmbJbbjZJbbjZa8A:vaPceSEaoNgOaONh8AaKcdthPalheina8Aaec;81jjbalEgmIdwaEa5ydbgAc32fgiIdC:tgOaONamIdbaiIdx:tgOaONamIdlaiIdz:tgOaONMMNaqcwfIdbaiIdw:tgOaONaqIdbaiIdb:tgOaONaqclfIdbaiIdl:tgOaONMMMhOdndnaxaAcdtgifgmydbcuSmba3aifIdbaO9ETmekamaCBdba3aifaOUdbka5clfh5aqcxfhqaeaPfheadaCcefgC9hmbkkabaxaYz:qjjjb8AcrhikaicdthiinaiTmeaic98fgiawcxffydbcbyd:m:jjjbH:bjjjbbxbkkawc;Wbf8KjjjjbaDk:Ydidui99ducbhi8Jjjjjbca9Rglczfcwfcbyd11jjbBdbalcb8Pdj1jjb83izalcwfcbydN1jjbBdbalcb8Pd:m1jjb83ibdndnaembJbbjFhvJbbjFhoJbbjFhrxekadcd4cdthwincbhdinalczfadfgDabadfIdbgvaDIdbgoaoav9EEUdbaladfgDavaDIdbgoaoav9DEUdbadclfgdcx9hmbkabawfhbaicefgiae9hmbkalIdwalIdK:thralIdlalIdC:thoalIdbalIdz:thvkJbbbbavavJbbbb9DEgvaoaoav9DEgvararav9DEk9DeeuabcFeaicdtz:rjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk9teiucbcbyd:q:jjjbgeabcifc98GfgbBd:q:jjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;teeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk:3eedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdxaialBdwaialBdlaialBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd:q:jjjbgeabcrfc94GfgbBd:q:jjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik9:eiuZbhedndncbyd:q:jjjbgdaecztgi9nmbcuheadai9RcFFifcz4nbcuSmekadhekcbabae9Rcifc98Gcbyd:q:jjjbfgdBd:q:jjjbdnadZbcztge9nmbadae9RcFFifcz4nb8Akkk:Iedbcjwk1eFFuuFFuuFFuuFFuFFFuFFFuFbbbbbbbbebbbdbbbbbbbebbbebbbdbbbbbbbbbbbeeeeebebbebbebebbbeebbbbbbbbbbbbeeeeeebebbeeebeebbbbebebbbbbbbbbbbbbbbbbbc1Dkxebbbdbbb:GNbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,a=WebAssembly.instantiate(i(n),{}).then(function(c){t=c.instance,t.exports.__wasm_call_ctors()});function i(c){for(var _=new Uint8Array(c.length),x=0;x<c.length;++x){var v=c.charCodeAt(x);_[x]=v>96?v-97:v>64?v-39:v+4}for(var w=0,x=0;x<c.length;++x)_[w++]=_[x]<60?e[_[x]]:(_[x]-60)*64+_[++x];return _.buffer.slice(0,w)}function r(c){if(!c)throw new Error("Assertion failed")}function s(c){return new Uint8Array(c.buffer,c.byteOffset,c.byteLength)}function o(c,_,x){var v=t.exports.sbrk,w=v(_.length*4),A=v(x*4),R=new Uint8Array(t.exports.memory.buffer),k=s(_);R.set(k,w);var S=c(A,w,_.length,x);R=new Uint8Array(t.exports.memory.buffer);var y=new Uint32Array(x);new Uint8Array(y.buffer).set(R.subarray(A,A+x*4)),k.set(R.subarray(w,w+_.length*4)),v(w-v(0));for(var C=0;C<_.length;++C)_[C]=y[_[C]];return[y,S]}function l(c){for(var _=0,x=0;x<c.length;++x){var v=c[x];_=_<v?v:_}return _}function d(c,_,x,v,w,A,R,k,S){var y=t.exports.sbrk,C=y(4),L=y(x*4),j=y(w*A),F=y(x*4),V=new Uint8Array(t.exports.memory.buffer);V.set(s(v),j),V.set(s(_),F);var B=c(L,F,x,j,w,A,R,k,S,C);V=new Uint8Array(t.exports.memory.buffer);var J=new Uint32Array(B);s(J).set(V.subarray(L,L+B*4));var z=new Float32Array(1);return s(z).set(V.subarray(C,C+4)),y(C-y(0)),[J,z[0]]}function h(c,_,x,v,w,A,R,k,S,y,C,L,j){var F=t.exports.sbrk,V=F(4),B=F(x*4),J=F(w*A),z=F(w*k),ne=F(S.length*4),oe=F(x*4),he=y?F(w):0,we=new Uint8Array(t.exports.memory.buffer);we.set(s(v),J),we.set(s(R),z),we.set(s(S),ne),we.set(s(_),oe),y&&we.set(s(y),he);var Ge=c(B,oe,x,J,w,A,z,k,ne,S.length,he,C,L,j,V);we=new Uint8Array(t.exports.memory.buffer);var Je=new Uint32Array(Ge);s(Je).set(we.subarray(B,B+Ge*4));var He=new Float32Array(1);return s(He).set(we.subarray(V,V+4)),F(V-F(0)),[Je,He[0]]}function b(c,_,x,v,w,A,R,k,S,y,C,L,j){var F=t.exports.sbrk,V=F(4),B=F(w*A),J=F(w*k),z=F(S.length*4),ne=F(x*4),oe=y?F(w):0,he=new Uint8Array(t.exports.memory.buffer);he.set(s(v),B),he.set(s(R),J),he.set(s(S),z),he.set(s(_),ne),y&&he.set(s(y),oe);var we=c(ne,x,B,w,A,J,k,z,S.length,oe,C,L,j,V);he=new Uint8Array(t.exports.memory.buffer),s(_).set(he.subarray(ne,ne+we*4)),s(v).set(he.subarray(B,B+w*A)),s(R).set(he.subarray(J,J+w*k));var Ge=new Float32Array(1);return s(Ge).set(he.subarray(V,V+4)),F(V-F(0)),[we,Ge[0]]}function p(c,_,x,v){var w=t.exports.sbrk,A=w(x*v),R=new Uint8Array(t.exports.memory.buffer);R.set(s(_),A);var k=c(A,x,v);return w(A-w(0)),k}function u(c,_,x,v,w,A,R,k){var S=t.exports.sbrk,y=S(k*4),C=S(x*v),L=S(x*A),j=new Uint8Array(t.exports.memory.buffer);j.set(s(_),C),w&&j.set(s(w),L);var F=c(y,C,x,v,L,A,R,k);j=new Uint8Array(t.exports.memory.buffer);var V=new Uint32Array(F);return s(V).set(j.subarray(y,y+F*4)),S(y-S(0)),V}function g(c,_,x,v,w,A,R,k,S){var y=t.exports.sbrk,C=y(4),L=y(x*4),j=y(w*A),F=y(x*4),V=R?y(w):0,B=new Uint8Array(t.exports.memory.buffer);B.set(s(v),j),B.set(s(_),F),R&&B.set(s(R),V);var J=c(L,F,x,j,w,A,V,k,S,C);B=new Uint8Array(t.exports.memory.buffer);var z=new Uint32Array(J);s(z).set(B.subarray(L,L+J*4));var ne=new Float32Array(1);return s(ne).set(B.subarray(C,C+4)),y(C-y(0)),[z,ne[0]]}function m(c,_,x,v,w,A,R){var k=t.exports.sbrk,S=k(x*4),y=k(w*A),C=k(x*4),L=new Uint8Array(t.exports.memory.buffer);L.set(s(v),y),L.set(s(_),C);var j=c(S,C,x,y,w,A,R);L=new Uint8Array(t.exports.memory.buffer);var F=new Uint32Array(j);return s(F).set(L.subarray(S,S+j*4)),k(S-k(0)),F}var f={LockBorder:1,Sparse:2,ErrorAbsolute:4,Prune:8,Regularize:16,Permissive:32,_InternalDebug:1<<30};return{ready:a,supported:!0,compactMesh:function(c){r(c instanceof Uint32Array||c instanceof Int32Array||c instanceof Uint16Array||c instanceof Int16Array),r(c.length%3==0);var _=c.BYTES_PER_ELEMENT==4?c:new Uint32Array(c);return o(t.exports.meshopt_optimizeVertexFetchRemap,_,l(c)+1)},simplify:function(c,_,x,v,w,A){r(c instanceof Uint32Array||c instanceof Int32Array||c instanceof Uint16Array||c instanceof Int16Array),r(c.length%3==0),r(_ instanceof Float32Array),r(_.length%x==0),r(x>=3),r(v>=0&&v<=c.length),r(v%3==0),r(w>=0);for(var R=0,k=0;k<(A?A.length:0);++k)r(A[k]in f),R|=f[A[k]];var S=c.BYTES_PER_ELEMENT==4?c:new Uint32Array(c),y=d(t.exports.meshopt_simplify,S,c.length,_,_.length/x,x*4,v,w,R);return y[0]=c instanceof Uint32Array?y[0]:new c.constructor(y[0]),y},simplifyWithAttributes:function(c,_,x,v,w,A,R,k,S,y){r(c instanceof Uint32Array||c instanceof Int32Array||c instanceof Uint16Array||c instanceof Int16Array),r(c.length%3==0),r(_ instanceof Float32Array),r(_.length%x==0),r(x>=3),r(v instanceof Float32Array),r(v.length==w*(_.length/x)),r(w>=0),r(R==null||R instanceof Uint8Array),r(R==null||R.length==_.length/x),r(k>=0&&k<=c.length),r(k%3==0),r(S>=0),r(Array.isArray(A)),r(w>=A.length),r(A.length<=32);for(var C=0;C<A.length;++C)r(A[C]>=0);for(var L=0,C=0;C<(y?y.length:0);++C)r(y[C]in f),L|=f[y[C]];var j=c.BYTES_PER_ELEMENT==4?c:new Uint32Array(c),F=h(t.exports.meshopt_simplifyWithAttributes,j,c.length,_,_.length/x,x*4,v,w*4,new Float32Array(A),R,k,S,L);return F[0]=c instanceof Uint32Array?F[0]:new c.constructor(F[0]),F},simplifyWithUpdate:function(c,_,x,v,w,A,R,k,S,y){r(c instanceof Uint32Array||c instanceof Int32Array||c instanceof Uint16Array||c instanceof Int16Array),r(c.length%3==0),r(_ instanceof Float32Array),r(_.length%x==0),r(x>=3),r(v instanceof Float32Array),r(v.length==w*(_.length/x)),r(w>=0),r(R==null||R instanceof Uint8Array),r(R==null||R.length==_.length/x),r(k>=0&&k<=c.length),r(k%3==0),r(S>=0),r(Array.isArray(A)),r(w>=A.length),r(A.length<=32);for(var C=0;C<A.length;++C)r(A[C]>=0);for(var L=0,C=0;C<(y?y.length:0);++C)r(y[C]in f),L|=f[y[C]];var j=c.BYTES_PER_ELEMENT==4?c:new Uint32Array(c),F=b(t.exports.meshopt_simplifyWithUpdate,j,c.length,_,_.length/x,x*4,v,w*4,new Float32Array(A),R,k,S,L);if(c!==j)for(var C=0;C<F[0];++C)c[C]=j[C];return F},getScale:function(c,_){return r(c instanceof Float32Array),r(c.length%_==0),r(_>=3),p(t.exports.meshopt_simplifyScale,c,c.length/_,_*4)},simplifyPoints:function(c,_,x,v,w,A){return r(c instanceof Float32Array),r(c.length%_==0),r(_>=3),r(x>=0&&x<=c.length/_),v?(r(v instanceof Float32Array),r(v.length%w==0),r(w>=3),r(c.length/_==v.length/w),u(t.exports.meshopt_simplifyPoints,c,c.length/_,_*4,v,w*4,A,x)):u(t.exports.meshopt_simplifyPoints,c,c.length/_,_*4,void 0,0,0,x)},simplifySloppy:function(c,_,x,v,w,A){r(c instanceof Uint32Array||c instanceof Int32Array||c instanceof Uint16Array||c instanceof Int16Array),r(c.length%3==0),r(_ instanceof Float32Array),r(_.length%x==0),r(x>=3),r(v==null||v instanceof Uint8Array),r(v==null||v.length==_.length/x),r(w>=0&&w<=c.length),r(w%3==0),r(A>=0);var R=c.BYTES_PER_ELEMENT==4?c:new Uint32Array(c),k=g(t.exports.meshopt_simplifySloppy,R,c.length,_,_.length/x,x*4,v,w,A);return k[0]=c instanceof Uint32Array?k[0]:new c.constructor(k[0]),k},simplifyPrune:function(c,_,x,v){r(c instanceof Uint32Array||c instanceof Int32Array||c instanceof Uint16Array||c instanceof Int16Array),r(c.length%3==0),r(_ instanceof Float32Array),r(_.length%x==0),r(x>=3),r(v>=0);var w=c.BYTES_PER_ELEMENT==4?c:new Uint32Array(c),A=m(t.exports.meshopt_simplifyPrune,w,c.length,_,_.length/x,x*4,v);return A=c instanceof Uint32Array?A:new c.constructor(A),A}}})();(function(){var n="b9H79TebbbeVx9Geueu9Geub9Gbb9Giuuueu9Gmuuuuuuuuuuu9999eu9Gvuuuuueu9Gwuuuuuuuub9Gxuuuuuuuuuuuueu9Gkuuuuuuuuuu99eu9Gouuuuuub9Gruuuuuuub9GluuuubiAOdilvorwDqqDkbiibeilve9Weiiviebeoweuec;G:Odkr;qeDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9I919P29K9nW79O2Wt79c9V919U9KbeX9TW79O9V9Wt9F9I919P29K9nW79O2Wt7bo39TW79O9V9Wt9F9J9V9T9W91tWJ2917tWV9c9V919U9K7br39TW79O9V9Wt9F9J9V9T9W91tW9nW79O2Wt9c9V919U9K7bDE9TW79O9V9Wt9F9J9V9T9W91tW9t9W9OWVW9c9V919U9K7bqL9TW79O9V9Wt9F9V9Wt9P9T9P96W9nW79O2Wtbkl79IV9RbxDwebcekdszq:x9DOdbkIbabaec9:fgefcufae9Ugeabci9Uadfcufad9Ugbaeab0Ek:w8KDPue99eux99dui99euo99iu8Jjjjjbc:WD9Rgm8KjjjjbdndnalmbcbhPxekamc:Cwfcbc;Kbz:ojjjb8Adndnalcb9imbaoal9nmbamcuaocdtaocFFFFi0Egscbyd;u1jjbHjjjjbbgzBd:CwamceBd;8wamascbyd;u1jjbHjjjjbbgHBd:GwamcdBd;8wamcualcdtalcFFFFi0Ecbyd;u1jjbHjjjjbbgOBd:KwamciBd;8waihsalhAinazasydbcdtfcbBdbasclfhsaAcufgAmbkaihsalhAinazasydbcdtfgCaCydbcefBdbasclfhsaAcufgAmbkaihsalhCcbhXindnazasydbcdtgQfgAydbcb9imbaHaQfaXBdbaAaAydbgQcjjjj94VBdbaQaXfhXkasclfhsaCcufgCmbkalci9UhLdnalci6mbcbhsaihAinaAcwfydbhCaAclfydbhXaHaAydbcdtfgQaQydbgQcefBdbaOaQcdtfasBdbaHaXcdtfgXaXydbgXcefBdbaOaXcdtfasBdbaHaCcdtfgCaCydbgCcefBdbaOaCcdtfasBdbaAcxfhAaLascefgs9hmbkkaihsalhAindnazasydbcdtgCfgXydbgQcu9kmbaXaQcFFFFrGgQBdbaHaCfgCaCydbaQ9RBdbkasclfhsaAcufgAmbxdkkamcuaocdtgsaocFFFFi0EgAcbyd;u1jjbHjjjjbbgzBd:CwamceBd;8wamaAcbyd;u1jjbHjjjjbbgHBd:GwamcdBd;8wamcualcdtalcFFFFi0Ecbyd;u1jjbHjjjjbbgOBd:KwamciBd;8wazcbasz:ojjjbhXalci9UhLaihsalhAinaXasydbcdtfgCaCydbcefBdbasclfhsaAcufgAmbkdnaoTmbcbhsaHhAaXhCaohQinaAasBdbaAclfhAaCydbasfhsaCclfhCaQcufgQmbkkdnalci6mbcbhsaihAinaAcwfydbhCaAclfydbhQaHaAydbcdtfgKaKydbgKcefBdbaOaKcdtfasBdbaHaQcdtfgQaQydbgQcefBdbaOaQcdtfasBdbaHaCcdtfgCaCydbgCcefBdbaOaCcdtfasBdbaAcxfhAaLascefgs9hmbkkaoTmbcbhsaohAinaHasfgCaCydbaXasfydb9RBdbasclfhsaAcufgAmbkkamaLcbyd;u1jjbHjjjjbbgsBd:OwamclBd;8wascbaLz:ojjjbhYamcuaLcK2alcjjjjd0Ecbyd;u1jjbHjjjjbbg8ABd:SwamcvBd;8wJbbbbhEdnalci6g3mbarcd4hKaihAa8AhsaLhrJbbbbh5inavaAclfydbaK2cdtfgCIdlh8EavaAydbaK2cdtfgXIdlhEavaAcwfydbaK2cdtfgQIdlh8FaCIdwhaaXIdwhhaQIdwhgasaCIdbg8JaXIdbg8KMaQIdbg8LMJbbnn:vUdbasclfaXIdlaCIdlMaQIdlMJbbnn:vUdbaQIdwh8MaCIdwh8NaXIdwhyascxfa8EaE:tg8Eagah:tggNa8FaE:tg8Faaah:tgaN:tgEJbbbbJbbjZa8Ja8K:tg8Ja8FNa8La8K:tg8Ka8EN:tghahNaEaENaaa8KNaga8JN:tgEaENMM:rg8K:va8KJbbbb9BEg8ENUdbasczfaEa8ENUdbascCfaha8ENUdbascwfa8Maya8NMMJbbnn:vUdba5a8KMh5aAcxfhAascKfhsarcufgrmbka5aL:Z:vJbbbZNhEkamcuaLcdtalcFFFF970Ecbyd;u1jjbHjjjjbbgCBd:WwamcoBd;8waEaq:ZNhEdna3mbcbhsaChAinaAasBdbaAclfhAaLascefgs9hmbkkaE:rhhcuh8PamcuaLcltalcFFFFd0Ecbyd;u1jjbHjjjjbbgIBd:0wamcrBd;8wcbaIa8AaCaLz:djjjb8AJFFuuhyJFFuuh8RJFFuuh8Sdnalci6gXmbJFFuuh8Sa8AhsaLhAJFFuuh8RJFFuuhyinascwfIdbgEayayaE9EEhyasclfIdbgEa8Ra8RaE9EEh8RasIdbgEa8Sa8SaE9EEh8SascKfhsaAcufgAmbkkahJbbbZNhgamaocetgscuaocu9kEcbyd;u1jjbHjjjjbbgABd:4waAcFeasz:ojjjbhCdnaXmbcbhAJFFuuhEa8Ahscuh8PinascwfIdbay:tghahNasIdba8S:tghahNasclfIdba8R:tghahNMM:rghaEa8PcuSahaE9DVgXEhEaAa8PaXEh8PascKfhsaLaAcefgA9hmbkkamczfcbcjwz:ojjjb8Aamcwf9cb83ibam9cb83ibagaxNhRJbbjZak:th8Ncbh8UJbbbbh8VJbbbbh8WJbbbbh8XJbbbbh8YJbbbbh8ZJbbbbh80cbh81cbhPinJbbbbhEdna8UTmbJbbjZa8U:Z:vhEkJbbbbhhdna80a80Na8Ya8YNa8Za8ZNMMg8KJbbbb9BmbJbbjZa8K:r:vhhka8XaENh5a8WaENh8Fa8VaENhaa8PhQdndndndndna8UaPVTmbamydwgBTmea80ahNh8Ja8ZahNh8La8YahNh8Maeamydbcdtfh83cbh3JFFuuhEcvhXcuhQindnaza83a3cdtfydbcdtgsfydbgvTmbaOaHasfydbcdtfhAindndnaCaiaAydbgKcx2fgsclfydbgrcetf8Vebcs4aCasydbgLcetf8Vebcs4faCascwfydbglcetf8Vebcs4fgombcbhsxekcehsazaLcdtfydbgLceSmbcehsazarcdtfydbgrceSmbcehsazalcdtfydbglceSmbdnarcdSaLcdSfalcdSfcd6mbaocefhsxekaocdfhskdnasaX9kmba8AaKcK2fgLIdwa5:thhaLIdla8F:th8KaLIdbaa:th8EdndnakJbbbb9DTmba8E:lg8Ea8K:lg8Ka8Ea8K9EEg8Kah:lgha8Kah9EEag:vJbbjZMhhxekahahNa8Ea8ENa8Ka8KNMM:rag:va8NNJbbjZMJ9VO:d86JbbjZaLIdCa8JNaLIdxa8MNa8LaLIdzNMMakN:tghahJ9VO:d869DENhhkaKaQasaX6ahaE9DVgLEhQasaXaLEhXahaEaLEhEkaAclfhAavcufgvmbkka3cefg3aB9hmbkkaQcu9hmekama5Ud:ODama8FUd:KDamaaUd:GDamcuBd:qDamcFFF;7rBdjDaIcba8AaYamc:GDfakJbbbb9Damc:qDfamcjDfz:ejjjbamyd:qDhQdndnaxJbbbb9ETmba8UaD6mbaQcuSmeceh3amIdjDaR9EmixdkaQcu9hmekdna8UTmbdnamydlgza8Uci2fgsciGTmbadasfcba8Uazcu7fciGcefz:ojjjb8AkabaPcltfgzam8Pib83dbazcwfamcwf8Pib83dbaPcefhPkc3hzinazc98Smvamc:Cwfazfydbcbyd;y1jjbH:bjjjbbazc98fhzxbkkcbh3a8Uaq9pmbamydwaCaiaQcx2fgsydbcetf8Vebcs4aCascwfydbcetf8Vebcs4faCasclfydbcetf8Vebcs4ffaw9nmekcbhscbhAdna81TmbcbhAamczfhXinamczfaAcdtfaXydbgLBdbaXclfhXaAaYaLfRbbTfhAa81cufg81mbkkamydwhlamydbhXam9cu83i:GDam9cu83i:ODam9cu83i:qDam9cu83i:yDaAc;8eaAclfc:bd6Eh81inamcjDfasfcFFF;7rBdbasclfgscz9hmbka81cdthBdnalTmbaeaXcdtfhocbhrindnazaoarcdtfydbcdtgsfydbgvTmbaOaHasfydbcdtfhAcuhLcuhsinazaiaAydbgKcx2fgXclfydbcdtfydbazaXydbcdtfydbfazaXcwfydbcdtfydbfgXasaXas6gXEhsaKaLaXEhLaAclfhAavcufgvmbkaLcuSmba8AaLcK2fgAIdway:tgEaENaAIdba8S:tgEaENaAIdla8R:tgEaENMM:rhEcbhAindndnasamc:qDfaAfgvydbgX6mbasaX9hmeaEamcjDfaAfIdb9FTmekavasBdbamc:GDfaAfaLBdbamcjDfaAfaEUdbxdkaAclfgAcz9hmbkkarcefgral9hmbkkamczfaBfhLcbhscbhAindnamc:GDfasfydbgXcuSmbaLaAcdtfaXBdbaAcefhAkasclfgscz9hmbkaAa81fg81TmbJFFuuhhcuhKamczfhsa81hvcuhLina8AasydbgXcK2fgAIdway:tgEaENaAIdba8S:tgEaENaAIdla8R:tgEaENMM:rhEdndnazaiaXcx2fgAclfydbcdtfydbazaAydbcdtfydbfazaAcwfydbcdtfydbfgAaL6mbaAaL9hmeaEah9DTmekaEhhaAhLaXhKkasclfhsavcufgvmbkaKcuSmbaKhQkdnamaiaQcx2fgrydbarclfydbarcwfydbaCabaeadaPawaqa3z:fjjjbTmbaPcefhPJbbbbh8VJbbbbh8WJbbbbh8XJbbbbh8YJbbbbh8ZJbbbbh80kcbhXinaOaHaraXcdtfydbcdtgAfydbcdtfgKhsazaAfgvydbgLhAdnaLTmbdninasydbaQSmeasclfhsaAcufgATmdxbkkasaKaLcdtfc98fydbBdbavavydbcufBdbkaXcefgXci9hmbka8AaQcK2fgsIdbhEasIdlhhasIdwh8KasIdxh8EasIdzh5asIdCh8FaYaQfce86bba80a8FMh80a8Za5Mh8Za8Ya8EMh8Ya8Xa8KMh8Xa8WahMh8Wa8VaEMh8Vamydxh8Uxbkkamc:WDf8KjjjjbaPk;Vvivuv99lu8Jjjjjbca9Rgv8Kjjjjbdndnalcw0mbaiydbhoaeabcitfgralcdtcufBdlaraoBdbdnalcd6mbaiclfhoalcufhwarcxfhrinaoydbhDarcuBdbarc98faDBdbarcwfhraoclfhoawcufgwmbkkalabfhrxekcbhDavczfcwfcbBdbav9cb83izavcwfcbBdbav9cb83ibJbbjZhqJbbjZhkinadaiaDcdtfydbcK2fhwcbhrinavczfarfgoawarfIdbgxaoIdbgm:tgPakNamMgmUdbavarfgoaPaxam:tNaoIdbMUdbarclfgrcx9hmbkJbbjZaqJbbjZMgq:vhkaDcefgDal9hmbkcbhoadcbcecdavIdlgxavIdwgm9GEgravIdbgPam9GEaraPax9GEgscdtgrfhzavczfarfIdbhxaihralhwinaiaocdtfgDydbhHaDarydbgOBdbaraHBdbarclfhraoazaOcK2fIdbax9Dfhoawcufgwmbkaeabcitfhrdndnaocv6mbaoalc98f6mekaraiydbBdbaralcdtcufBdlaiclfhoalcufhwarcxfhrinaoydbhDarcuBdbarc98faDBdbarcwfhraoclfhoawcufgwmbkalabfhrxekaraxUdbararydlc98GasVBdlabcefaeadaiaoz:djjjbhwararydlciGawabcu7fcdtVBdlawaeadaiaocdtfalao9Rz:djjjbhrkavcaf8Kjjjjbark:;idiud99dndnabaecitfgwydlgDciGgqciSmbinabcbaDcd4gDalaqcdtfIdbawIdb:tgkJbbbb9FEgwaecefgefadaialavaoarz:ejjjbak:larIdb9FTmdabawaD7aefgecitfgwydlgDciGgqci9hmbkkabaecitfgeclfhbdnavmbcuhwindnaiaeydbgDfRbbmbadaDcK2fgqIdwalIdw:tgkakNaqIdbalIdb:tgkakNaqIdlalIdl:tgkakNMM:rgkarIdb9DTmbarakUdbaoaDBdbkaecwfheawcefgwabydbcd46mbxdkkcuhwindnaiaeydbgDfRbbmbadaDcK2fgqIdbalIdb:t:lgkaqIdlalIdl:t:lgxakax9EEgkaqIdwalIdw:t:lgxakax9EEgkarIdb9DTmbarakUdbaoaDBdbkaecwfheawcefgwabydbcd46mbkkk;llevudnabydwgxaladcetfgm8Vebcs4alaecetfgP8Vebgscs4falaicetfgz8Vebcs4ffaD0abydxaq9pVakVgDce9hmbavawcltfgxab8Pdb83dbaxcwfabcwfgx8Pdb83dbdnaxydbgqTmbaoabydbcdtfhxaqhsinalaxydbcetfcFFi87ebaxclfhxascufgsmbkkdnabydxglci2gsabydlgxfgkciGTmbarakfcbalaxcu7fciGcefz:ojjjb8Aabydxci2hsabydlhxabydwhqkab9cb83dwababydbaqfBdbabascifc98GaxfBdlaP8Vebhscbhxkdnascztcz91cu9kmbabaxcefBdwaPax87ebaoabydbcdtfaxcdtfaeBdbkdnam8Uebcu9kmbababydwgxcefBdwamax87ebaoabydbcdtfaxcdtfadBdbkdnaz8Uebcu9kmbababydwgxcefBdwazax87ebaoabydbcdtfaxcdtfaiBdbkarabydlfabydxci2faPRbb86bbarabydlfabydxci2fcefamRbb86bbarabydlfabydxci2fcdfazRbb86bbababydxcefBdxaDk8LbabaeadaialavaoarawaDaDaqJbbbbz:cjjjbk;Nkovud99euv99eul998Jjjjjbc:W;ae9Rgo8KjjjjbdndnadTmbavcd4hrcbhwcbhDindnaiaeclfydbar2cdtfgvIdbaiaeydbar2cdtfgqIdbgk:tgxaiaecwfydbar2cdtfgmIdlaqIdlgP:tgsNamIdbak:tgzavIdlaP:tgPN:tgkakNaPamIdwaqIdwgH:tgONasavIdwaH:tgHN:tgPaPNaHazNaOaxN:tgxaxNMM:rgsJbbbb9Bmbaoc:W:qefawcx2fgAakas:vUdwaAaxas:vUdlaAaPas:vUdbaoc8Wfawc8K2fgAaq8Pdb83dbaAav8Pdb83dxaAam8Pdb83dKaAcwfaqcwfydbBdbaAcCfavcwfydbBdbaAcafamcwfydbBdbawcefhwkaecxfheaDcifgDad6mbkab9cb83dbabcyf9cb83dbabcaf9cb83dbabcKf9cb83dbabczf9cb83dbabcwf9cb83dbawTmeaocbBd8Sao9cb83iKao9cb83izaoczfaoc8Wfawci2cxaoc8Sfcbcrz1jjjbaoIdKhCaoIdChXaoIdzhQao9cb83iwao9cb83ibaoaoc:W:qefawcxaoc8Sfcbciz1jjjbJbbjZhkaoIdwgPJbbbbJbbjZaPaPNaoIdbgPaPNaoIdlgsasNMM:rgx:vaxJbbbb9BEgzNhxasazNhsaPazNhzaoc:W:qefheawhvinaecwfIdbaxNaeIdbazNasaeclfIdbNMMgPakaPak9DEhkaecxfheavcufgvmbkabaCUdwabaXUdlabaQUdbabaoId3UdxdndnakJ;n;m;m899FmbJbbbbhPaoc:W:qefheaoc8WfhvinaCavcwfIdb:taecwfIdbgHNaQavIdb:taeIdbgONaXavclfIdb:taeclfIdbgLNMMaxaHNazaONasaLNMM:vgHaPaHaP9EEhPavc8KfhvaecxfheawcufgwmbkabaxUd8KabasUdaabazUd3abaCaxaPN:tUdKabaXasaPN:tUdCabaQazaPN:tUdzabJbbjZakakN:t:rgkUdydndnaxJbbj:;axJbbj:;9GEgPJbbjZaPJbbjZ9FEJbb;:9cNJbbbZJbbb:;axJbbbb9GEMgP:lJbbb9p9DTmbaP:Ohexekcjjjj94hekabae86b8UdndnasJbbj:;asJbbj:;9GEgPJbbjZaPJbbjZ9FEJbb;:9cNJbbbZJbbb:;asJbbbb9GEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkabav86bRdndnazJbbj:;azJbbj:;9GEgPJbbjZaPJbbjZ9FEJbb;:9cNJbbbZJbbb:;azJbbbb9GEMgP:lJbbb9p9DTmbaP:Ohqxekcjjjj94hqkabaq86b8SdndnaecKtcK91:YJbb;:9c:vax:t:lavcKtcK91:YJbb;:9c:vas:t:laqcKtcK91:YJbb;:9c:vaz:t:lakMMMJbb;:9cNJbbjZMgk:lJbbb9p9DTmbak:Ohexekcjjjj94hekaecFbaecFb9iEhexekabcjjj;8iBdycFbhekabae86b8Vxekab9cb83dbabcyf9cb83dbabcaf9cb83dbabcKf9cb83dbabczf9cb83dbabcwf9cb83dbkaoc:W;aef8Kjjjjbk;Iwwvul99iud99eue99eul998Jjjjjbcje9Rgr8Kjjjjbavcd4hwaicd4hDdndnaoTmbarc;abfcbaocdtgvz:ojjjb8Aarc;Gbfcbavz:ojjjb8AarhvarcafhiaohqinavcFFF97BdbaicFFF;7rBdbaiclfhiavclfhvaqcufgqmbkdnadTmbcbhkinaeakaD2cdtfgvIdwhxavIdlhmavIdbhPalakaw2cdtfIdbhsarc;abfhzarhiarc;GbfhHarcafhqcj1jjbhvaohOinasavcwfIdbaxNavIdbaPNavclfIdbamNMMgAMhCakhXdnaAas:tgAaqIdbgQ9DgLmbaHydbhXkaHaXBdbakhXdnaCaiIdbgK9EmbazydbhXaKhCkazaXBdbaiaCUdbaqaAaQaLEUdbavcxfhvaqclfhqaHclfhHaiclfhiazclfhzaOcufgOmbkakcefgkad9hmbkkadThkJbbbbhCcbhXarc;abfhvarc;Gbfhicbhqinalavydbgzaw2cdtfIdbalaiydbgHaw2cdtfIdbaeazaD2cdtfgzIdwaeaHaD2cdtfgHIdw:tgsasNazIdbaHIdb:tgsasNazIdlaHIdl:tgsasNMM:rMMgsaCasaC9EgzEhCaqaXazEhXaiclfhiavclfhvaoaqcefgq9hmbkaCJbbbZNhKxekadThkcbhXJbbbbhKkJbbbbhCdnaearc;abfaXcdtgifydbgqaD2cdtfgvIdwaearc;GbfaifydbgzaD2cdtfgiIdwgm:tgsasNavIdbaiIdbgY:tgAaANavIdlaiIdlgP:tgQaQNMM:rgxJbbbb9ETmbaxalaqaw2cdtfIdbMalazaw2cdtfIdb:taxaxM:vhCkasaCNamMhmaQaCNaPMhPaAaCNaYMhYdnakmbaDcdthvawcdthiindnalIdbg8AaecwfIdbam:tgCaCNaeIdbaY:tgsasNaeclfIdbaP:tgAaANMM:rgQMgEaK9ETmbJbbbbhxdnaQJbbbb9ETmbaEaK:taQaQM:vhxkaxaCNamMhmaxaANaPMhPaxasNaYMhYa8AaKaQMMJbbbZNhKkaeavfhealaifhladcufgdmbkkabaKUdxabamUdwabaPUdlabaYUdbarcjef8Kjjjjbkjeeiu8Jjjjjbcj8W9Rgr8Kjjjjbaici2hwdnaiTmbawceawce0EhDarhiinaiaeadRbbcdtfydbBdbadcefhdaiclfhiaDcufgDmbkkabarawaladaoz:hjjjbarcj8Wf8Kjjjjbk:Reeeu8Jjjjjbca9Rgo8Kjjjjbab9cb83dbabcyf9cb83dbabcaf9cb83dbabcKf9cb83dbabczf9cb83dbabcwf9cb83dbdnadTmbaocbBd3ao9cb83iwao9cb83ibaoaeadaialaoc3falEavcbalEcrz1jjjbabao8Pib83dbabao8Piw83dwkaocaf8Kjjjjbk:3lequ8JjjjjbcjP9Rgl8Kjjjjbcbhvalcjxfcbaiz:ojjjb8AdndnadTmbcjehoaehrincuhwarhDcuhqavhkdninawakaoalcjxfaDcefRbbfRbb9RcFeGci6aoalcjxfaDRbbfRbb9RcFeGci6faoalcjxfaDcdfRbbfRbb9RcFeGci6fgxaq9mgmEhwdnammbaxce0mdkaxaqaxaq9kEhqaDcifhDadakcefgk9hmbkkaeawci2fgDcdfRbbhqaDcefRbbhxaDRbbhkaeavci2fgDcifaDawav9Rci2z:rjjjb8Aakalcjxffaocefgo86bbaxalcjxffao86bbaDcdfaq86bbaDcefax86bbaDak86bbaqalcjxffao86bbarcifhravcefgvad9hmbkalcFeaicetz:ojjjbhoadci2gDceaDce0EhqcbhxindnaoaeRbbgkcetfgw8UebgDcu9kmbawax87ebaocjlfaxcdtfabakcdtfydbBdbaxhDaxcefhxkaeaD86bbaecefheaqcufgqmbkaxcdthDxekcbhDkabalcjlfaDz:njjjb8AalcjPf8Kjjjjbk9teiucbcbyd;C1jjbgeabcifc98GfgbBd;C1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;teeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk:3eedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdxaialBdwaialBdlaialBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;C1jjbgeabcrfc94GfgbBd;C1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik9:eiuZbhedndncbyd;C1jjbgdaecztgi9nmbcuheadai9RcFFifcz4nbcuSmekadhekcbabae9Rcifc98Gcbyd;C1jjbfgdBd;C1jjbdnadZbcztge9nmbadae9RcFFifcz4nb8Akk:;Deludndndnadch9pmbabaeSmdaeabadfgi9Rcbadcet9R0mekabaead;8qbbxekaeab7ciGhldndndnabae9pmbdnalTmbadhvabhixikdnabciGmbadhvabhixdkadTmiabaeRbb86bbadcufhvdnabcefgiciGmbaecefhexdkavTmiabaeRbe86beadc9:fhvdnabcdfgiciGmbaecdfhexdkavTmiabaeRbd86bdadc99fhvdnabcifgiciGmbaecifhexdkavTmiabaeRbi86biabclfhiaeclfheadc98fhvxekdnalmbdnaiciGTmbadTmlabadcufgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc9:fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc99fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc98fgdfaeadfRbb86bbkadcl6mbdnadc98fgocd4cefciGgiTmbaec98fhlabc98fhvinavadfaladfydbBdbadc98fhdaicufgimbkkaocx6mbaec9Wfhvabc9WfhoinaoadfgicxfavadfglcxfydbBdbaicwfalcwfydbBdbaiclfalclfydbBdbaialydbBdbadc9Wfgdci0mbkkadTmdadhidnadciGglTmbaecufhvabcufhoadhiinaoaifavaifRbb86bbaicufhialcufglmbkkadcl6mdaec98fhlabc98fhvinavaifgecifalaifgdcifRbb86bbaecdfadcdfRbb86bbaecefadcefRbb86bbaeadRbb86bbaic98fgimbxikkavcl6mbdnavc98fglcd4cefcrGgdTmbavadcdt9RhvinaiaeydbBdbaeclfheaiclfhiadcufgdmbkkalc36mbinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaiaeydzBdzaiaeydCBdCaiaeydKBdKaiaeyd3Bd3aecafheaicafhiavc9Gfgvci0mbkkavTmbdndnavcrGgdmbavhlxekavc94GhlinaiaeRbb86bbaicefhiaecefheadcufgdmbkkavcw6mbinaiaeRbb86bbaiaeRbe86beaiaeRbd86bdaiaeRbi86biaiaeRbl86blaiaeRbv86bvaiaeRbo86boaiaeRbr86braicwfhiaecwfhealc94fglmbkkabkk9Tdbcjwk9ubbjZbbbbbbbbbbbbbbjZbbbbbbbbbbbbbbjZ86;nAZ86;nAZ86;nAZ86;nA:;86;nAZ86;nAZ86;nAZ86;nA:;86;nAZ86;nAZ86;nAZ86;nA:;bc;uwkxebbbdbbb9GNbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,a=WebAssembly.instantiate(i(n),{}).then(function(m){t=m.instance,t.exports.__wasm_call_ctors()});function i(m){for(var f=new Uint8Array(m.length),c=0;c<m.length;++c){var _=m.charCodeAt(c);f[c]=_>96?_-97:_>64?_-39:_+4}for(var x=0,c=0;c<m.length;++c)f[x++]=f[c]<60?e[f[c]]:(f[c]-60)*64+f[++c];return f.buffer.slice(0,x)}function r(m){if(!m)throw new Error("Assertion failed")}function s(m){return new Uint8Array(m.buffer,m.byteOffset,m.byteLength)}var o=48,l=16;function d(m,f){var c=m.meshlets[f*4+0],_=m.meshlets[f*4+1],x=m.meshlets[f*4+2],v=m.meshlets[f*4+3];return{vertices:m.vertices.subarray(c,c+x),triangles:m.triangles.subarray(_,_+v*3)}}function h(m,f,c,_,x,v,w){var A=t.exports.sbrk,R=t.exports.meshopt_buildMeshletsBound(m.length,x,v),k=A(R*l),S=A(R*x*4),y=A(R*v*3),C=A(m.byteLength),L=A(f.byteLength),j=new Uint8Array(t.exports.memory.buffer);j.set(s(m),C),j.set(s(f),L);var F=t.exports.meshopt_buildMeshlets(k,S,y,C,m.length,L,c,_,x,v,w);j=new Uint8Array(t.exports.memory.buffer);for(var V=j.subarray(k,k+F*l),B=new Uint32Array(V.buffer,V.byteOffset,V.byteLength/4).slice(),J=0;J<F;++J){var z=B[J*4+0],ne=B[J*4+1],c=B[J*4+2],oe=B[J*4+3];t.exports.meshopt_optimizeMeshlet(S+z*4,y+ne,oe,c)}var he=B[(F-1)*4+0],we=B[(F-1)*4+1],Ge=B[(F-1)*4+2],Je=B[(F-1)*4+3],He=he+Ge,X=we+(Je*3+3&-4),Y={meshlets:B,vertices:new Uint32Array(j.buffer,S,He).slice(),triangles:new Uint8Array(j.buffer,y,X*3).slice(),meshletCount:F};return A(k-A(0)),Y}function b(m){var f=new Float32Array(t.exports.memory.buffer,m,o/4);return{centerX:f[0],centerY:f[1],centerZ:f[2],radius:f[3],coneApexX:f[4],coneApexY:f[5],coneApexZ:f[6],coneAxisX:f[7],coneAxisY:f[8],coneAxisZ:f[9],coneCutoff:f[10]}}function p(m,f,c,_){var x=t.exports.sbrk,v=[],w=x(f.byteLength),A=x(m.vertices.byteLength),R=x(m.triangles.byteLength),k=x(o),S=new Uint8Array(t.exports.memory.buffer);S.set(s(f),w),S.set(s(m.vertices),A),S.set(s(m.triangles),R);for(var y=0;y<m.meshletCount;++y){var C=m.meshlets[y*4+0],L=m.meshlets[y*4+0+1],j=m.meshlets[y*4+0+3];t.exports.meshopt_computeMeshletBounds(k,A+C*4,R+L,j,w,c,_),v.push(b(k))}return x(w-x(0)),v}function u(m,f,c,_){var x=t.exports.sbrk,v=x(o),w=x(m.byteLength),A=x(f.byteLength),R=new Uint8Array(t.exports.memory.buffer);R.set(s(m),w),R.set(s(f),A),t.exports.meshopt_computeClusterBounds(v,w,m.length,A,c,_);var k=b(v);return x(v-x(0)),k}function g(m,f,c,_,x){var v=t.exports.sbrk,w=v(o),A=v(m.byteLength),R=_?v(_.byteLength):0,k=new Uint8Array(t.exports.memory.buffer);k.set(s(m),A),_&&k.set(s(_),R),t.exports.meshopt_computeSphereBounds(w,A,f,c,R,_?x:0);var S=b(w);return v(w-v(0)),S}return{ready:a,supported:!0,buildMeshlets:function(m,f,c,_,x,v){r(m.length%3==0),r(f instanceof Float32Array),r(f.length%c==0),r(c>=3),r(_<=256||_>0),r(x<=512),r(x%4==0),v=v||0;var w=m.BYTES_PER_ELEMENT==4?m:new Uint32Array(m);return h(w,f,f.length/c,c*4,_,x,v)},extractMeshlet:function(m,f){return r(f>=0&&f<m.meshletCount),d(m,f)},computeClusterBounds:function(m,f,c){r(m.length%3==0),r(m.length/3<=512),r(f instanceof Float32Array),r(f.length%c==0),r(c>=3);var _=m.BYTES_PER_ELEMENT==4?m:new Uint32Array(m);return u(_,f,f.length/c,c*4)},computeMeshletBounds:function(m,f,c){return r(m.meshletCount!=0),r(f instanceof Float32Array),r(f.length%c==0),r(c>=3),p(m,f,f.length/c,c*4)},computeSphereBounds:function(m,f,c,_){return r(m instanceof Float32Array),r(m.length%f==0),r(f>=3),r(!c||c instanceof Float32Array),r(!c||c.length%_==0),r(!c||_>=1),r(!c||m.length/f==c.length/_),_=_||0,g(m,m.length/f,f*4,c,_*4)}}})();async function Am(n,e,t){let a=0,i=0;const r=new Array(e.download.chunks.length);async function s(){for(;i<r.length;){const p=i++,u=e.download.chunks[p],g=await fetch(n+"model/"+u.path);if(!g.ok)throw Error("Geometry download failed ("+g.status+")");const m=g.body.getReader(),f=[];for(;;){const{done:x,value:v}=await m.read();if(x)break;f.push(v),a+=v.length,t(a,e.download.bytes)}const c=await new Blob(f).arrayBuffer();if([...new Uint8Array(await crypto.subtle.digest("SHA-256",c))].map(x=>x.toString(16).padStart(2,"0")).join("")!==u.sha256)throw Error("Geometry checksum mismatch");r[p]=c}}await Promise.all(Array.from({length:4},s));const o=await new Response(new Blob(r).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer();await Nr.ready;const l=new Uint8Array(e.download.decodedBytes);let d=0;for(const p of e.meshes){for(const[u,g,m,f]of[["position",p.offset,p.vertices,12],["normal",p.offset+p.vertices*12,p.vertices,12],["index",p.offset+p.vertices*24,p.triangles*3,4]]){const c=p.codec[u],_=new Uint8Array(o,c.offset,c.bytes),x=l.subarray(g,g+m*f);u==="index"?Nr.decodeIndexSequence(x,m,f,_):Nr.decodeVertexBuffer(x,m,f,_)}++d%40===0&&await new Promise(u=>setTimeout(u,0))}const h=await crypto.subtle.digest("SHA-256",l),b=[...new Uint8Array(h)].map(p=>p.toString(16).padStart(2,"0")).join("");if(b!==e.download.sha256)throw Error("Decoded geometry differs from the approved model");return document.body.dataset.geometrySha=b,l.buffer}const Ts="/projects/acuivect/simulator/",Q=n=>document.getElementById(n),ul=Q("app"),Un=Q("viewport"),Et=new el;Et.background=new Ne("#25313a");Et.fog=new Js("#25313a",1800,5e3);const ft=new rm({antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0});ft.setPixelRatio(Math.min(devicePixelRatio,1.5));ft.outputColorSpace=Ut;ft.toneMapping=Nc;ft.toneMappingExposure=.88;ft.shadowMap.enabled=!0;ft.shadowMap.type=Pc;Un.appendChild(ft.domElement);const dt=new Bt(40,1,.5,8e3);dt.up.set(0,0,1);dt.position.set(650,-680,510);const kt=new om(dt,ft.domElement);kt.target.set(-25,175,170);kt.enableDamping=!0;kt.dampingFactor=.08;kt.maxDistance=2400;kt.minDistance=30;kt.autoRotateSpeed=.4;const bl=new xm,pl=new ws(ft);Et.environment=pl.fromScene(bl,.04).texture;bl.dispose();pl.dispose();Et.add(new bh(14216959,3424567,1.8));const Gt=new eo(16773852,3.5);Gt.position.set(-250,-200,800);Gt.target.position.set(0,160,100);Et.add(Gt,Gt.target);Gt.castShadow=!0;Gt.shadow.mapSize.set(2048,2048);Object.assign(Gt.shadow.camera,{left:-600,right:600,top:650,bottom:-550,near:1,far:1900});Gt.shadow.bias=-2e-4;Gt.shadow.normalBias=.15;Gt.shadow.radius=3;const ml=new eo(10014463,2.8);ml.position.set(430,560,420);Et.add(ml);const gl=new eo(13036255,1.1);gl.position.set(0,-500,200);Et.add(gl);const io=new rt(new Ln(6e3,6e3),new si({color:"#25313a",roughness:.88,metalness:.04}));io.position.z=-.5;io.receiveShadow=!0;Et.add(io);const jn=new _h(1700,68,4809067,3491921);jn.rotation.x=Math.PI/2;jn.position.set(0,180,.02);jn.material.transparent=!0;jn.material.opacity=.24;Et.add(jn);const ro=new rt(new an(830,680,9),new si({color:1713195,roughness:.77,metalness:.1}));ro.position.set(-70,167,-5);ro.receiveShadow=!0;Et.add(ro);let va,sa=[],Lr=new Map,Za=[],so=[],Rs=new Map,Cs=null,jt=null,ks=!0,Ds=!0,Is=!1,$n=0,_a=!1,Xa=null,vl=null,Ki=0,_l=0,Us=!1,yn,Tc,Ps={x:0,y:0},Ot=null,xl="iso";const $t={x:0,y:0,z:0,latch:0};let Rc=!1;const Qa=new Jn,Tm=new rt(new Qs(3,3.5,48),new ci({color:8581061,side:zt,depthTest:!1,transparent:!0,opacity:.9}));Qa.add(Tm);for(const n of[0,Math.PI/2]){const e=new rt(new Ln(12,.3),new ci({color:8581061,side:zt,depthTest:!1}));e.rotation.z=n,Qa.add(e)}Qa.renderOrder=20;Et.add(Qa);let na={x:45,y:145,z:85};function Ma(n){Q("toast").textContent=n,Q("toast").classList.add("show"),clearTimeout(Tc),Tc=setTimeout(()=>Q("toast").classList.remove("show"),6500)}function Vt(n){if(!Us){Ma("The simulation engine is still loading.");return}yn.postMessage(n)}function Rm(){yn=new Worker(new URL("/projects/acuivect/simulator/assets/controller.worker-CcDb81j9.js",import.meta.url),{type:"module"}),yn.onmessage=n=>{const e=n.data;if(e.type==="ready"){Us=!0,ul.classList.remove("disconnected"),Q("connection-dot").classList.add("connected"),Q("connection").textContent="Simulator ready";return}if(e.type==="error"){Ma(e.message),e.fatal&&(Q("connection").textContent="Engine failed to load",Q("load-progress").textContent=e.message);return}if(e.type==="csv"){const t=URL.createObjectURL(new Blob([e.csv],{type:"text/csv"})),a=document.createElement("a");a.href=t,a.download="acuivect-run.csv",a.click(),setTimeout(()=>URL.revokeObjectURL(t),5e3);return}e.type==="state"&&(vl=Xa??e.state,Xa=e.state,_l=Ki,Ki=performance.now(),Pm(Xa))},yn.onerror=n=>{Us=!1,Q("connection").textContent="Engine error",Ma(n.message||"Simulation engine could not start. Reload to retry.")},yn.postMessage({type:"init",base:new URL(Ts,location.origin).href}),document.addEventListener("visibilitychange",()=>yn.postMessage({type:"visibility",hidden:document.hidden})),document.querySelector(".download").onclick=n=>{n.preventDefault(),Vt({type:"export"})}}const Cc={Aluminum:12042696,Phenolic:3617582,Bearing:9148575,Steel:9016476,ABS:2370352,Brass:12162120,PETG:3640477,POM:14607584,Gel:14456467,Nylon:14539465,PCB:2387024,Glass:12507102,Copper:13011543,PhosphorBronze:11900769,Zinc:12042437,PVC:2107694,Silicone:2436401},Ml={value:0},kc=new WeakSet;function Cm(n){if(kc.has(n))return;kc.add(n);const e=n.onBeforeCompile,a=n.customProgramCacheKey.bind(n)();n.customProgramCacheKey=()=>a+"-part-explosion",n.onBeforeCompile=(i,r)=>{e(i,r),i.uniforms.explosion=Ml,i.vertexShader=`attribute vec3 explodeVector;uniform float explosion;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed+=explodeVector*explosion;`)}}function km(n,e){const t=(e.appearance||"")+" "+(e.material||""),a=n.material,i=t+"|"+a;if(Lr.has(i))return Lr.get(i);let r=Cc[a]??7506068,s=["Aluminum","Steel","Bearing","Brass","Copper","Zinc","PhosphorBronze"].includes(a)?.82:.02,o=.48;/copper/i.test(t)&&(r=Cc.Copper,s=.86,o=.27),/black oxide|black cable|\bBlack\b|Rubber/i.test(t)&&(r=2370351,s=/oxide/i.test(t)?.5:.02,o=.61),/\bRed\b/.test(t)&&(r=12141124),/\bBlue\b/.test(t)&&(r=3636650),/\bYellow\b/.test(t)&&(r=13281603),/\bGreen\b/.test(t)&&(r=3969380),/\bWhite\b/.test(t)&&(r=15131608),/satin|stainless/i.test(t)&&(r=12174536,s=.9,o=.3),a==="Aluminum"&&(o=.36);const l=new dh({color:r,metalness:s,roughness:o,envMapIntensity:.8,clearcoat:a==="PETG"?.12:0,clearcoatRoughness:.6});(a==="Glass"||/glass|acrylic.*clear/i.test(t))&&(l.color.setHex(11128020),l.transparent=!0,l.opacity=.16,l.roughness=.1,l.metalness=0,l.depthWrite=!1,l.side=zt),a==="Gel"&&(l.color.setHex(14918301),l.roughness=.35,l.metalness=0,l.clearcoat=.4,l.transparent=!0,l.opacity=.8,l.depthWrite=!1,l.side=zt);const d=va.appearance_colors?.[e.appearance],h=d?.opaque_albedo??d?.metal_f0??d?.transparent_color;return h&&l.color.setRGB(h[0]/255,h[1]/255,h[2]/255,Ut),Lr.set(i,l),l}function Dm(){const n=new Map;for(const e of sa)if(e.mechanism==="seat_lever"&&e.pivot_local){const t=e.pivot_local,a=e.origin.map((s,o)=>s+e.basis.reduce((l,d,h)=>l+d[o]*t[h],0)),i=e.basis[1],r=[0,0,0];r[i.map(Math.abs).indexOf(Math.max(...i.map(Math.abs)))]=1,n.set(e.group,{pivot:a,axis:r})}for(const e of sa)if(e.group.startsWith("switch_")){const t=n.get(e.group.replace("_roller","_lever"));t&&(e.switchPivot=t.pivot,e.switchAxis=t.axis)}}function Im(n,e,t){const a=n.clone();return a.userData.uniforms={poseX:{value:0},poseZ:{value:0}},a.customProgramCacheKey=()=>e+JSON.stringify(t.loops?.[0]??{}),a.onBeforeCompile=i=>{Object.assign(i.uniforms,a.userData.uniforms);let r="";if(e==="loop"){const s=t.loops[0],o=l=>`vec3(${l.map(d=>Number(d).toFixed(8)).join(",")})`;r=`vec3 anchor=${o(s.anchor)};vec3 direction=${o(s.direction)};vec3 perp=${o(s.perpendicular)};float along=dot(position-anchor,direction);float across=dot(position-anchor,perp);float P=${s.pose_parameter==="X_Pos"?"poseX":"poseZ"};float L=${Number(s.leg_length).toFixed(8)};float E=${Number(s.end_offset||0).toFixed(8)};float factor=along>=L?0.5:(across<${Number(s.bend_radius).toFixed(8)}?0.5*clamp(along/L,0.0,1.0):1.0-0.5*clamp((along-E)/(L-E),0.0,1.0));transformed+=direction*P*factor;`}e==="cord"&&(r="if(position.z<370.0){if(position.y<200.0)transformed.z-=poseZ*clamp((370.0-position.z)/162.0,0.0,1.0);else if(position.y>310.0)transformed.z+=poseZ*clamp((370.0-position.z)/80.0,0.0,1.0);}"),i.vertexShader=`uniform float poseX;uniform float poseZ;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+r)},a}async function Um(){va=await(await fetch(Ts+"model/assembly.json")).json(),sa=va.parts,Dm(),Q("load-progress").textContent="Loading "+sa.length+" source parts";const n=await Am(Ts,va,(a,i)=>{Q("load-progress").textContent=`Loading geometry · ${(a/1e6).toFixed(1)} / ${(i/1e6).toFixed(1)} MB`,document.querySelector(".load-track i").style.width=Math.min(100,a/i*100)+"%"});Q("load-progress").textContent="Preparing all 723 parts";for(const a of va.meshes){const i=new Wt;i.setAttribute("position",new _t(new Float32Array(n,a.offset,a.vertices*3),3)),i.setAttribute("normal",new _t(new Float32Array(n,a.offset+a.vertices*12,a.vertices*3),3)),i.setIndex(new _t(new Uint32Array(n,a.offset+a.vertices*24,a.triangles*3),1)),i.computeBoundingBox(),i.computeBoundingSphere(),Rs.set(a.id,{geo:i,info:a})}const e=new Map;for(const a of sa){const{geo:i,info:r}=Rs.get(a.mesh),s=Em(a),o=i.boundingBox.getCenter(new U).applyMatrix4(s);a.center=o.toArray(),a.home=s,a.explodeDirection=new U(o.x+50,o.y-190,(o.z-130)*1.4).normalize();const l=new rt(i,new ci);l.matrixAutoUpdate=!1,l.matrix.copy(s),l.updateMatrixWorld(!0),l.userData.part=a,Za.push(l);for(const d of r.segments){let h=km(a,d);const b=a.group==="storage"?"storage":a.group==="guard"?"guard":["Copper","PVC","Silicone","Nylon"].includes(a.material)?"wires":"assembly",p=a.dynamic?`dynamic-${a.index}-${d.start}`:`${a.group}|${b}|${h.uuid}`,u=i.index.array.slice(d.start,d.start+d.count),g=i.clone();g.setIndex(new _t(u,1)),g.applyMatrix4(s),a.dynamic&&(h=Im(h,a.dynamic,a));const m=new Float32Array(g.attributes.position.count*3);for(let c=0;c<m.length;c+=3)m[c]=a.explodeDirection.x*100,m[c+1]=a.explodeDirection.y*100,m[c+2]=a.explodeDirection.z*100;g.setAttribute("explodeVector",new _t(m,3)),Cm(h),e.has(p)||e.set(p,{geometries:[],material:h,group:a.group,cat:b,part:a,indices:[]});const f=e.get(p);f.geometries.push(g),f.indices.push(a.index)}}let t=0;for(const a of e.values()){const i=a.geometries.length===1?a.geometries[0]:Mm(a.geometries),r=new rt(i,a.material);r.matrixAutoUpdate=!1,r.castShadow=!a.material.transparent&&!a.part.dynamic,r.receiveShadow=!a.material.transparent,r.frustumCulled=!1,r.userData=a,Et.add(r),so.push(r),a.geometries.length>1&&a.geometries.forEach(s=>s.dispose()),++t%35===0&&await new Promise(s=>setTimeout(s,0))}yl(),$i("iso",!1),oo(),Q("loading").style.display="none",Q("scene-caption").textContent=`${sa.length} native parts · ${va.meshes.length} component definitions`,document.body.dataset.loaded="true",document.body.dataset.parts=String(sa.length),document.body.dataset.sourceSha=va.source_archive_sha256}function yl(){for(const n of so){const e=n.userData.cat;n.visible=e==="guard"?Ds:e==="storage"?Is:e==="wires"?ks:!0}for(const n of Za){const e=n.userData.part;n.visible=e.group==="guard"?Ds:e.group==="storage"?Is:["Copper","PVC","Silicone","Nylon"].includes(e.material)?ks:!0}}function Qi(n){if(Cs=n,jt&&(Et.remove(jt),jt.geometry.dispose(),jt.material.dispose(),jt=null),!n){Q("part-info").textContent="Click a part in the assembly to inspect its material, mass and source.";return}const e=Q("part-info");e.replaceChildren();let t=document.createElement("b");t.textContent=n.name,e.append(t);const a=document.createElement("dl");for(const[s,o]of[["Part",String(n.index).padStart(3,"0")],["Material",n.material_spec||n.bodies.map(l=>l.material).filter((l,d,h)=>h.indexOf(l)===d).join(", ")],["CAD mass",n.mass_g.toFixed(3)+" g"],["Motion",n.group],["Type",n.kind]]){const l=document.createElement("dt"),d=document.createElement("dd");l.textContent=s,d.textContent=o,a.append(l,d)}e.append(a);const i=document.createElement("p");i.textContent=n.source,e.append(i);const r=Rs.get(n.mesh).geo.boundingBox;jt=new xh(r.clone(),10809809),jt.matrixAutoUpdate=!1,jt.material.depthTest=!1,jt.renderOrder=10,Et.add(jt)}function $i(n,e=!0){xl=n,document.querySelectorAll("[data-view]").forEach(r=>r.classList.toggle("active",r.dataset.view===n));const t=new U(-25,175,170),a=new U(650,-680,510);let i=40;if(n==="front"&&(a.set(0,-960,210),t.set(0,180,190)),n==="top"&&(a.set(0,160,1250),t.set(0,160,130)),n==="head"&&(t.set($t.x+10,165,125-$t.z*.4),a.set($t.x+210,-130,250-$t.z*.4),i=37),n.startsWith("camera-")){const r=n==="camera-left"?-40:40;a.set(r,145,341),t.set(r,145,59),i=56}n.startsWith("camera-")||a.sub(t).multiplyScalar(Math.max(1,1.1/dt.aspect)).add(t),e?Ot={from:dt.position.clone(),to:a,fromTarget:kt.target.clone(),toTarget:t,start:performance.now(),duration:700,fromFov:dt.fov,toFov:i}:(dt.position.copy(a),kt.target.copy(t),dt.fov=i,dt.updateProjectionMatrix(),kt.update())}function oo(){if(!sa.length)return;const n=Number(Q("target-x").value),e=Number(Q("target-y").value);na={x:45+n,y:145+e,z:85};const t=Za.find(r=>r.userData.part.index===87);t.matrix.copy(t.userData.part.home),t.updateMatrixWorld(!0);const i=new sl(new U(na.x,na.y,500),new U(0,0,-1)).intersectObject(t);i.length&&(na.z=i[0].point.z+.25),Qa.position.set(na.x,na.y+$t.y,na.z)}let Ns=!1;ft.domElement.addEventListener("pointerdown",n=>{Ps={x:n.clientX,y:n.clientY},Ns=!0});ft.domElement.addEventListener("pointerup",n=>{if(!Ns||(Ns=!1,Math.hypot(n.clientX-Ps.x,n.clientY-Ps.y)>5)||n.button!==0||!va)return;const e=Un.getBoundingClientRect(),t=new sl;t.setFromCamera(new De((n.clientX-e.left)/e.width*2-1,-(n.clientY-e.top)/e.height*2+1),dt);const a=_a?Za.filter(s=>s.userData.part.index===87):Za.filter(s=>s.visible&&s.userData.part.group!=="guard"&&s.userData.part.material!=="Glass"),i=t.intersectObjects(a,!1);if(!i.length)return;const r=i[0];_a?(Q("target-x").value=Math.max(-45,Math.min(45,r.point.x-45)).toFixed(1),Q("target-y").value=Math.max(-35,Math.min(35,r.point.y-$t.y-145)).toFixed(1),_a=!1,Un.parentElement.classList.remove("picking"),Q("pick-target").classList.remove("active"),oo(),Ma("Target selected. Set depth, then run the insertion cycle.")):Qi(r.object.userData.part)});function Pm(n){for(const[e,t,a,i]of[["speed","speed","speed-value","mm/s"],["backlash","backlash","backlash-value","mm"],["friction","friction","friction-value","N"],["gel","gel_stiffness","gel-value","N/mm"]])document.activeElement!==Q(e)&&(Q(e).value=n.settings[t],Q(a).textContent=n.settings[t]+" "+i);document.activeElement!==Q("fault")&&(Q("fault").value=n.fault),Q("record").disabled=n.replaying,Q("phase").textContent=n.phase,Q("mode-label").textContent=n.mode==="cad"?"CAD reference":"Estimated dynamics",Q("mode-cad").classList.toggle("active",n.mode==="cad"),Q("mode-dynamics").classList.toggle("active",n.mode==="dynamics"),Q("mode-note").textContent=n.mode==="cad"?"Dimensionally faithful motion from the native assembly.":"MuJoCo axis dynamics. Friction, backlash and drives are estimated.";for(const e of Object.keys(no)){const t=Q("axis-"+e);document.activeElement!==t&&(t.value=n.q[e].toFixed(2)),t.classList.toggle("busy",n.busy)}Q("cartridge-state").textContent=n.docked?"Stored in dock":"Retained in head",Q("depth-value").innerHTML=n.depth.toFixed(2)+"<small>mm</small>",Q("force-value").innerHTML=n.force.toFixed(3)+"<small>N</small>",Q("elapsed").textContent=`${String(Math.floor(n.elapsed/60)).padStart(2,"0")}:${String(Math.floor(n.elapsed%60)).padStart(2,"0")}`,Q("pause").textContent=n.paused?"Resume":"Pause",ul.classList.toggle("estopped",n.estopped),Q("record").textContent=n.recording?"■ Stop recording":"● Record",Q("record").classList.toggle("active",n.recording),Q("replay").disabled=n.recorded_frames<2||n.recording||n.busy||n.estopped,Q("engine-label").textContent=n.engine+" · "+(n.mode==="cad"?"kinematic reference":"reduced dynamics"),Q("dock").disabled=n.docked||n.busy||n.estopped,Q("pickup").disabled=!n.docked||n.busy||n.estopped;for(const[e,t]of Object.entries(n.sensors)){let a=document.querySelector(`[data-sensor="${e}"]`);if(!a){a=document.createElement("div"),a.className="sensor",a.dataset.sensor=e;const i=document.createElement("span");i.textContent=e,a.append(i,document.createElement("i")),Q("sensors").append(a)}a.classList.toggle("on",t),a.title=t?"Active":"Inactive"}for(Q("event-log").replaceChildren(...n.events.slice(-4).reverse().map(e=>{const t=document.createElement("div"),a=document.createElement("time");return a.textContent=e.time.toFixed(1)+"s",t.append(a,document.createTextNode(e.message)),t})),document.body.dataset.state=JSON.stringify({q:n.q,docked:n.docked,busy:n.busy,mode:n.mode,phase:n.phase,paused:n.paused,estopped:n.estopped,recorded:n.recorded_frames,replaying:n.replaying,depth:n.depth}),ra.push({time:n.elapsed,depth:n.depth});ra.length>1&&n.elapsed-ra[0].time>20;)ra.shift();n.elapsed<ra[0].time&&(ra=[]),Nm()}let ra=[];function Nm(){const n=Q("chart"),e=n.getContext("2d"),t=n.width,a=n.height;e.clearRect(0,0,t,a),e.strokeStyle="#2c3e48",e.lineWidth=1;for(let i=1;i<4;i++)e.beginPath(),e.moveTo(0,a*i/4),e.lineTo(t,a*i/4),e.stroke();ra.length<2||(e.beginPath(),ra.forEach((i,r)=>{const s=t*(1-(ra.at(-1).time-i.time)/20),o=a-8-Math.min(10,i.depth)/10*(a-16);r===0?e.moveTo(s,o):e.lineTo(s,o)}),e.strokeStyle="#8bdac3",e.lineWidth=1.6,e.stroke())}for(const[n,[e,t]]of Object.entries(no)){const a=document.createElement("div");a.className="axis-row",a.innerHTML=`<label class="axis-label" for="axis-${n}">${n==="latch"?"θ":n.toUpperCase()}</label><input id="axis-${n}" aria-label="${n==="latch"?"Latch angle":n.toUpperCase()+" position"}" type="number" min="${e}" max="${t}" step=".1" value="0.00"><button aria-label="Jog ${n} negative">−</button><button aria-label="Jog ${n} positive">+</button>`,Q("axes").append(a);const i=Q("axis-"+n);i.addEventListener("keydown",r=>{if(r.key==="Enter"){const s=Number(i.value);if(!i.checkValidity()){Ma("Target exceeds the modeled axis range.");return}Vt({type:"move",target:{[n]:s}}),i.blur()}}),a.querySelectorAll("button").forEach((r,s)=>r.onclick=()=>{const o=n==="latch"?5:Number(Q("jog-step").value),l=(Xa?.q[n]??0)+(s?1:-1)*o;Vt({type:"move",target:{[n]:Math.max(e,Math.min(t,l))}})})}for(const n of["pause","stop","estop","reset","record","replay"])Q(n).onclick=()=>{Vt({type:n}),n==="reset"&&(ra=[])};for(const n of["home","park","dock","pickup"])Q(n).onclick=()=>Vt({type:"program",name:n});for(const[n,e]of[["latch-close",0],["latch-open",60]])Q(n).onclick=()=>Vt({type:"move",target:{latch:e}});for(const[n,e]of[["align","target"],["insert","insert"]])Q(n).onclick=()=>Vt({type:"program",name:e,target:{dx:Number(Q("target-x").value),dy:Number(Q("target-y").value),depth:Number(Q("target-depth").value)}});for(const n of["cad","dynamics"])Q("mode-"+n).onclick=()=>Vt({type:"mode",mode:n});for(const[n,e,t,a]of[["speed","speed","speed-value","mm/s"],["backlash","backlash","backlash-value","mm"],["friction","friction","friction-value","N"],["gel","gel_stiffness","gel-value","N/mm"]])Q(n).oninput=()=>Q(t).textContent=Q(n).value+" "+a,Q(n).onchange=()=>Vt({type:"settings",values:{[e]:Number(Q(n).value)}});for(const n of["target-x","target-y","target-depth"])Q(n).onchange=oo;for(const[n,e]of[["show-guard",t=>Ds=t],["show-storage",t=>Is=t],["show-wires",t=>ks=t]])Q(n).onchange=()=>{e(Q(n).checked),yl()};Q("show-grid").onchange=()=>jn.visible=Q("show-grid").checked;Q("auto-orbit").onchange=()=>kt.autoRotate=Q("auto-orbit").checked;Q("explode").oninput=()=>{$n=Number(Q("explode").value)/100,Ml.value=$n,Q("explode-value").textContent=Q("explode").value+"%"};Q("quality").onchange=()=>{const n=Q("quality").value;ft.setPixelRatio(Math.min(devicePixelRatio,n==="ultra"?2:n==="balanced"?1:1.5)),Gt.shadow.mapSize.setScalar(n==="ultra"?4096:n==="balanced"?1024:2048),Gt.shadow.map?.dispose(),Gt.shadow.map=null,co()};Q("fault").onchange=()=>Vt({type:"fault",fault:Q("fault").value});Q("clear-selection").onclick=()=>Qi(null);Q("pick-target").onclick=()=>{_a=!_a,Un.parentElement.classList.toggle("picking",_a),Q("pick-target").classList.toggle("active",_a),_a&&($i("head"),Ma("Click a location on the gel phantom."))};Q("part-search").oninput=()=>{const n=Q("part-search").value.toLowerCase().trim();if(Q("search-results").replaceChildren(),!(n.length<2))for(const e of sa.filter(t=>t.name.toLowerCase().includes(n)).slice(0,7)){const t=document.createElement("button");t.textContent=e.name,t.onclick=()=>{Qi(e);const a=new U(...e.center);Ot={from:dt.position.clone(),to:a.clone().add(new U(150,-180,130)),fromTarget:kt.target.clone(),toTarget:a,start:performance.now(),duration:700,fromFov:dt.fov,toFov:40}},Q("search-results").append(t)}};document.querySelectorAll("[data-view]").forEach(n=>n.onclick=()=>$i(n.dataset.view));Q("help-button").onclick=()=>Q("help").showModal();Q("close-help").onclick=()=>Q("help").close();Q("fullscreen").onclick=()=>{document.fullscreenElement?document.exitFullscreen():Q("app").requestFullscreen?.().catch(()=>Ma("Use the window maximize button for a larger view."))};Q("capture").onclick=()=>{ft.render(Et,dt);const n=document.createElement("a");n.download="Acuivect-virtual-lab.png",n.href=ft.domElement.toDataURL("image/png"),n.click(),Ma("Viewport screenshot saved.")};document.addEventListener("keydown",n=>{["INPUT","SELECT","TEXTAREA"].includes(document.activeElement.tagName)||Q("help").open||(n.code==="Space"&&(n.preventDefault(),Vt({type:"estop"})),n.code==="KeyP"&&Vt({type:"pause"}),n.code==="KeyR"&&$i("iso"),n.code==="Escape"&&(Qi(null),_a=!1))});function co(){const n=Un.getBoundingClientRect(),e=n.width/n.height,t=Math.max(1,1.1/e)/Math.max(1,1.1/dt.aspect);!xl.startsWith("camera-")&&!Ot&&dt.position.sub(kt.target).multiplyScalar(t).add(kt.target),ft.setSize(n.width,n.height),dt.aspect=e,dt.updateProjectionMatrix()}new ResizeObserver(co).observe(Un);co();let Dc=0,Kn=[],Ic=0;function El(n){requestAnimationFrame(El);const e=n-Dc;if(!(e<15.5)){if(Dc=n,e>0&&e<200&&Kn.push(e),Kn.length>120&&Kn.shift(),Xa){const t=Math.min(1,(n-Ki)/Math.max(16,Ki-_l));Object.assign($t,wm(vl.q,Xa.q,t)),Rc=Xa.docked}if(va){const t=new Map;for(const a of sa)t.has(a.group)||t.set(a.group,Sm(a.group,$t,Rc,a));for(const a of so){const i=a.userData;a.matrix.copy(t.get(i.group)),a.matrixWorldNeedsUpdate=!0,a.material.userData.uniforms&&(a.material.userData.uniforms.poseX.value=$t.x,a.material.userData.uniforms.poseZ.value=$t.z)}for(const a of Za){const i=a.userData.part;if(a.matrix.copy(t.get(i.group)),$n){const r=i.explodeDirection.clone().multiplyScalar($n*100);a.matrix.multiply(new We().makeTranslation(r.x,r.y,r.z))}a.matrix.multiply(i.home),a.updateMatrixWorld(!0)}jt&&Cs&&(jt.matrix.copy(Za.find(a=>a.userData.part.index===Cs.index).matrix),jt.matrixWorldNeedsUpdate=!0),Qa.position.set(na.x,na.y+$t.y,na.z),Qa.visible=!$n}if(Ot){const t=Math.min(1,(n-Ot.start)/Ot.duration),a=t*t*(3-2*t);dt.position.lerpVectors(Ot.from,Ot.to,a),kt.target.lerpVectors(Ot.fromTarget,Ot.toTarget,a),dt.fov=Wc.lerp(Ot.fromFov,Ot.toFov,a),dt.updateProjectionMatrix(),t===1&&(Ot=null)}if(kt.update(),ft.render(Et,dt),n-Ic>700){const t=1e3/(Kn.reduce((a,i)=>a+i,0)/Math.max(1,Kn.length));Q("render-stats").textContent=`${t.toFixed(0)} fps · ${(ft.info.render.triangles/1e6).toFixed(2)}M triangles`,document.body.dataset.render=JSON.stringify({fps:Number(t.toFixed(1)),draws:ft.info.render.calls,triangles:ft.info.render.triangles,geometries:ft.info.memory.geometries}),Ic=n}}}const li=document.createElement("button");li.id="quick-estop";li.textContent="■ E-STOP";li.setAttribute("aria-label","Emergency stop immediately");li.onclick=()=>Vt({type:"estop"});document.querySelector(".header-actions").prepend(li);Rm();Um().catch(n=>{console.error(n),Q("load-progress").textContent="Load failed: "+n.message,Ma("Model could not load. Reload the page to retry.")});requestAnimationFrame(El);
