(()=>{var Dl="170";var mf=0,Rc=1,gf=2;var Hh=1,xf=2,zi=3,on=0,Ne=1,di=2,an=0,Qn=1,kc=2,Cc=3,Pc=4,yf=5,Mn=100,_f=101,vf=102,Mf=103,bf=104,Sf=200,wf=201,Tf=202,Ef=203,vo=204,Mo=205,Af=206,Rf=207,kf=208,Cf=209,Pf=210,If=211,Lf=212,Df=213,Uf=214,bo=0,So=1,wo=2,is=3,To=4,Eo=5,Ao=6,Ro=7,Ul=0,zf=1,Nf=2,rn=0,Ff=1,Of=2,Bf=3,Hf=4,Vf=5,Gf=6,Wf=7,Ic="attached",Xf="detached",Vh=300,ns=301,ss=302,ko=303,Co=304,cr=306,as=1e3,wn=1001,Po=1002,Qe=1003,Kf=1004;var ra=1005;var Si=1006,Or=1007;var Fi=1008;var Hi=1009,Gh=1010,Wh=1011,Os=1012,zl=1013,Tn=1014,pi=1015,Ks=1016,Nl=1017,Fl=1018,rs=1020,Xh=35902,Kh=1021,$h=1022,ai=1023,qh=1024,Yh=1025,jn=1026,os=1027,Ol=1028,Bl=1029,Zh=1030,Hl=1031;var Vl=1033,Ia=33776,La=33777,Da=33778,Ua=33779,Io=35840,Lo=35841,Do=35842,Uo=35843,zo=36196,No=37492,Fo=37496,Oo=37808,Bo=37809,Ho=37810,Vo=37811,Go=37812,Wo=37813,Xo=37814,Ko=37815,$o=37816,qo=37817,Yo=37818,Zo=37819,Jo=37820,Qo=37821,za=36492,jo=36494,tl=36495,Jh=36283,el=36284,il=36285,nl=36286;var Na=2300,sl=2301,Br=2302,Lc=2400,Dc=2401,Uc=2402;var $f=3200,qf=3201;var Qh=0,Yf=1,sn="",Te="srgb",ms="srgb-linear",hr="linear",re="srgb";var zn=7680;var zc=519,Zf=512,Jf=513,Qf=514,jh=515,jf=516,td=517,ed=518,id=519,Nc=35044;var Fc="300 es",Oi=2e3,Fa=2001,ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Hr=Math.PI/180,al=180/Math.PI;function gs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function $e(n,t,e){return Math.max(t,Math.min(e,n))}function nd(n,t){return(n%t+t)%t}function Vr(n,t,e){return(1-e)*n+e*t}function Rs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Jt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class n{constructor(t,e,i,s,a,r,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,o,c,l)}set(t,e,i,s,a,r,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=a,h[5]=c,h[6]=i,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,a=this.elements,r=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],x=s[0],m=s[3],d=s[6],_=s[1],S=s[4],v=s[7],P=s[2],E=s[5],R=s[8];return a[0]=r*x+o*_+c*P,a[3]=r*m+o*S+c*E,a[6]=r*d+o*v+c*R,a[1]=l*x+h*_+u*P,a[4]=l*m+h*S+u*E,a[7]=l*d+h*v+u*R,a[2]=f*x+p*_+g*P,a[5]=f*m+p*S+g*E,a[8]=f*d+p*v+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*o*l-i*a*h+i*o*c+s*a*l-s*r*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*r-o*l,f=o*c-h*a,p=l*a-r*c,g=e*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*i)*x,t[2]=(o*i-s*r)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*a-o*e)*x,t[6]=p*x,t[7]=(i*c-l*e)*x,t[8]=(r*e-i*a)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,r,o){let c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*r+l*o)+r+t,-s*l,s*c,-s*(-l*r+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Gr.makeScale(t,e)),this}rotate(t){return this.premultiply(Gr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Gr=new Nt;function tu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sd(){let n=Oa("canvas");return n.style.display="block",n}var Oc={};function zs(n){n in Oc||(Oc[n]=!0,console.warn(n))}function ad(n,t,e){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}function rd(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function od(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Zt={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(n.r=Bi(n.r),n.g=Bi(n.g),n.b=Bi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(n.r=ts(n.r),n.g=ts(n.g),n.b=ts(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===sn?hr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ts(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Bc=[.64,.33,.3,.6,.15,.06],Hc=[.2126,.7152,.0722],Vc=[.3127,.329],Gc=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wc=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[ms]:{primaries:Bc,whitePoint:Vc,transfer:hr,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:Hc,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:Bc,whitePoint:Vc,transfer:re,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:Hc,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}});var Nn,rl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Nn===void 0&&(Nn=Oa("canvas")),Nn.width=t.width,Nn.height=t.height;let i=Nn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Nn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Oa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Bi(a[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Bi(e[i]/255)*255):e[i]=Bi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ld=0,Ba=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=gs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Wr(s[r].image)):a.push(Wr(s[r]))}else a=Wr(s);i.url=a}return e||(t.images[this.uuid]=i),i}};function Wr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cd=0,qe=class n extends ln{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=wn,s=wn,a=Si,r=Fi,o=ai,c=Hi,l=n.DEFAULT_ANISOTROPY,h=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=gs(),this.name="",this.source=new Ba(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case as:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case Po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case as:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case Po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Vh;qe.DEFAULT_ANISOTROPY=1;var me=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,v=(p+1)/2,P=(d+1)/2,E=(h+f)/4,R=(u+x)/4,C=(g+m)/4;return S>v&&S>P?S<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(S),s=E/i,a=R/i):v>P?v<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),i=E/s,a=C/s):P<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(P),i=R/a,s=C/a),this.set(i,s,a,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ol=class extends ln{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let a=new qe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ba(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vi=class extends ol{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ha=class extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ll=class extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var je=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,r,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=a[r+0],p=a[r+1],g=a[r+2],x=a[r+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==f||l!==p||h!==g){let m=1-o,d=c*f+l*p+h*g+u*x,_=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){let P=Math.sqrt(S),E=Math.atan2(P,d*_);m=Math.sin(m*E)/P,o=Math.sin(o*E)/P}let v=o*_;if(c=c*m+f*v,l=l*m+p*v,h=h*m+g*v,u=u*m+x*v,m===1-o){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,a,r){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=a[r],f=a[r+1],p=a[r+2],g=a[r+3];return t[e]=o*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-o*p,t[e+2]=l*g+h*p+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(a/2),f=c(i/2),p=c(s/2),g=c(a/2);switch(r){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],a=e[8],r=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(a-l)*p,this._z=(r-s)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(a-l)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(r-s)/p,this._x=(a+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,a=t._z,r=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+r*o+s*l-a*c,this._y=s*h+r*c+a*o-i*l,this._z=a*h+r*l+i*c-s*o,this._w=r*h-i*o-s*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*r+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*a+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=r*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=a*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,c=t.w,l=2*(r*s-o*i),h=2*(o*e-a*s),u=2*(a*i-r*e);return this.x=e+c*l+r*u-o*h,this.y=i+c*h+o*l-a*u,this.z=s+c*u+a*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,a=t.z,r=e.x,o=e.y,c=e.z;return this.x=s*c-a*o,this.y=a*r-i*c,this.z=i*o-s*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xr.copy(this).projectOnVector(t),this.sub(Xr)}reflect(t){return this.sub(Xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xr=new D,Xc=new je,wi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,hi):hi.fromBufferAttribute(a,r),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oa.copy(i.boundingBox)),oa.applyMatrix4(t.matrixWorld),this.union(oa)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),la.subVectors(this.max,ks),Fn.subVectors(t.a,ks),On.subVectors(t.b,ks),Bn.subVectors(t.c,ks),Ji.subVectors(On,Fn),Qi.subVectors(Bn,On),pn.subVectors(Fn,Bn);let e=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-pn.z,pn.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,pn.z,0,-pn.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-pn.y,pn.x,0];return!Kr(e,Fn,On,Bn,la)||(e=[1,0,0,0,1,0,0,0,1],!Kr(e,Fn,On,Bn,la))?!1:(ca.crossVectors(Ji,Qi),e=[ca.x,ca.y,ca.z],Kr(e,Fn,On,Bn,la))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Pi=[new D,new D,new D,new D,new D,new D,new D,new D],hi=new D,oa=new wi,Fn=new D,On=new D,Bn=new D,Ji=new D,Qi=new D,pn=new D,ks=new D,la=new D,ca=new D,mn=new D;function Kr(n,t,e,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){mn.fromArray(n,a);let o=s.x*Math.abs(mn.x)+s.y*Math.abs(mn.y)+s.z*Math.abs(mn.z),c=t.dot(mn),l=e.dot(mn),h=i.dot(mn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var hd=new wi,Cs=new D,$r=new D,Ti=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):hd.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);let e=Cs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Cs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($r.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add($r)),this.expandByPoint(Cs.copy(t.center).sub($r))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ii=new D,qr=new D,ha=new D,ji=new D,Yr=new D,ua=new D,Zr=new D,Bs=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){qr.copy(t).add(e).multiplyScalar(.5),ha.copy(e).sub(t).normalize(),ji.copy(this.origin).sub(qr);let a=t.distanceTo(e)*.5,r=-this.direction.dot(ha),o=ji.dot(this.direction),c=-ji.dot(ha),l=ji.lengthSq(),h=Math.abs(1-r*r),u,f,p,g;if(h>0)if(u=r*c-o,f=r*o-c,g=a*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,p=u*(u+r*f+2*o)+f*(r*u+f+2*c)+l}else f=a,u=Math.max(0,-(r*f+o)),p=-u*u+f*(f+2*c)+l;else f=-a,u=Math.max(0,-(r*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-r*a+o)),f=u>0?-a:Math.min(Math.max(-a,-c),a),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-a,-c),a),p=f*(f+2*c)+l):(u=Math.max(0,-(r*a+o)),f=u>0?a:Math.min(Math.max(-a,-c),a),p=-u*u+f*(f+2*c)+l);else f=r>0?-a:a,u=Math.max(0,-(r*f+o)),p=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qr).addScaledVector(ha,f),p}intersectSphere(t,e){Ii.subVectors(t.center,this.origin);let i=Ii.dot(this.direction),s=Ii.dot(Ii)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,c=i+r;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,r,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(a=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(a=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,i,s,a){Yr.subVectors(e,t),ua.subVectors(i,t),Zr.crossVectors(Yr,ua);let r=this.direction.dot(Zr),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ji.subVectors(this.origin,t);let c=o*this.direction.dot(ua.crossVectors(ji,ua));if(c<0)return null;let l=o*this.direction.dot(Yr.cross(ji));if(l<0||c+l>r)return null;let h=-o*ji.dot(Zr);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class n{constructor(t,e,i,s,a,r,o,c,l,h,u,f,p,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,o,c,l,h,u,f,p,g,x,m)}set(t,e,i,s,a,r,o,c,l,h,u,f,p,g,x,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=a,d[5]=r,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Hn.setFromMatrixColumn(t,0).length(),a=1/Hn.setFromMatrixColumn(t,1).length(),r=1/Hn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){let f=r*h,p=r*u,g=o*h,x=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-x*l,e[9]=-o*c,e[2]=x-f*l,e[6]=g+p*l,e[10]=r*c}else if(t.order==="YXZ"){let f=c*h,p=c*u,g=l*h,x=l*u;e[0]=f+x*o,e[4]=g*o-p,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=p*o-g,e[6]=x+f*o,e[10]=r*c}else if(t.order==="ZXY"){let f=c*h,p=c*u,g=l*h,x=l*u;e[0]=f-x*o,e[4]=-r*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=r*h,e[9]=x-f*o,e[2]=-r*l,e[6]=o,e[10]=r*c}else if(t.order==="ZYX"){let f=r*h,p=r*u,g=o*h,x=o*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=r*c}else if(t.order==="YZX"){let f=r*c,p=r*l,g=o*c,x=o*l;e[0]=c*h,e[4]=x-f*u,e[8]=g*u+p,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=r*c,p=r*l,g=o*c,x=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=r*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ud,t,fd)}lookAt(t,e,i){let s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),tn.crossVectors(i,Ze),tn.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),tn.crossVectors(i,Ze)),tn.normalize(),fa.crossVectors(Ze,tn),s[0]=tn.x,s[4]=fa.x,s[8]=Ze.x,s[1]=tn.y,s[5]=fa.y,s[9]=Ze.y,s[2]=tn.z,s[6]=fa.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,a=this.elements,r=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],_=i[3],S=i[7],v=i[11],P=i[15],E=s[0],R=s[4],C=s[8],w=s[12],M=s[1],k=s[5],G=s[9],B=s[13],W=s[2],Z=s[6],$=s[10],j=s[14],X=s[3],at=s[7],dt=s[11],vt=s[15];return a[0]=r*E+o*M+c*W+l*X,a[4]=r*R+o*k+c*Z+l*at,a[8]=r*C+o*G+c*$+l*dt,a[12]=r*w+o*B+c*j+l*vt,a[1]=h*E+u*M+f*W+p*X,a[5]=h*R+u*k+f*Z+p*at,a[9]=h*C+u*G+f*$+p*dt,a[13]=h*w+u*B+f*j+p*vt,a[2]=g*E+x*M+m*W+d*X,a[6]=g*R+x*k+m*Z+d*at,a[10]=g*C+x*G+m*$+d*dt,a[14]=g*w+x*B+m*j+d*vt,a[3]=_*E+S*M+v*W+P*X,a[7]=_*R+S*k+v*Z+P*at,a[11]=_*C+S*G+v*$+P*dt,a[15]=_*w+S*B+v*j+P*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+a*c*u-s*l*u-a*o*f+i*l*f+s*o*p-i*c*p)+x*(+e*c*p-e*l*f+a*r*f-s*r*p+s*l*h-a*c*h)+m*(+e*l*u-e*o*p-a*r*u+i*r*p+a*o*h-i*l*h)+d*(-s*o*h-e*c*u+e*o*f+s*r*u-i*r*f+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],_=u*m*l-x*f*l+x*c*p-o*m*p-u*c*d+o*f*d,S=g*f*l-h*m*l-g*c*p+r*m*p+h*c*d-r*f*d,v=h*x*l-g*u*l+g*o*p-r*x*p-h*o*d+r*u*d,P=g*u*c-h*x*c-g*o*f+r*x*f+h*o*m-r*u*m,E=e*_+i*S+s*v+a*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return t[0]=_*R,t[1]=(x*f*a-u*m*a-x*s*p+i*m*p+u*s*d-i*f*d)*R,t[2]=(o*m*a-x*c*a+x*s*l-i*m*l-o*s*d+i*c*d)*R,t[3]=(u*c*a-o*f*a-u*s*l+i*f*l+o*s*p-i*c*p)*R,t[4]=S*R,t[5]=(h*m*a-g*f*a+g*s*p-e*m*p-h*s*d+e*f*d)*R,t[6]=(g*c*a-r*m*a-g*s*l+e*m*l+r*s*d-e*c*d)*R,t[7]=(r*f*a-h*c*a+h*s*l-e*f*l-r*s*p+e*c*p)*R,t[8]=v*R,t[9]=(g*u*a-h*x*a-g*i*p+e*x*p+h*i*d-e*u*d)*R,t[10]=(r*x*a-g*o*a+g*i*l-e*x*l-r*i*d+e*o*d)*R,t[11]=(h*o*a-r*u*a-h*i*l+e*u*l+r*i*p-e*o*p)*R,t[12]=P*R,t[13]=(h*x*s-g*u*s+g*i*f-e*x*f-h*i*m+e*u*m)*R,t[14]=(g*o*s-r*x*s-g*i*c+e*x*c+r*i*m-e*o*m)*R,t[15]=(r*u*s-h*o*s+h*i*c-e*u*c-r*i*f+e*o*f)*R,this}scale(t){let e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),a=1-i,r=t.x,o=t.y,c=t.z,l=a*r,h=a*o;return this.set(l*r+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*r,0,l*c-s*o,h*c+s*r,a*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,a=e._x,r=e._y,o=e._z,c=e._w,l=a+a,h=r+r,u=o+o,f=a*l,p=a*h,g=a*u,x=r*h,m=r*u,d=o*u,_=c*l,S=c*h,v=c*u,P=i.x,E=i.y,R=i.z;return s[0]=(1-(x+d))*P,s[1]=(p+v)*P,s[2]=(g-S)*P,s[3]=0,s[4]=(p-v)*E,s[5]=(1-(f+d))*E,s[6]=(m+_)*E,s[7]=0,s[8]=(g+S)*R,s[9]=(m-_)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,a=Hn.set(s[0],s[1],s[2]).length(),r=Hn.set(s[4],s[5],s[6]).length(),o=Hn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],ui.copy(this);let l=1/a,h=1/r,u=1/o;return ui.elements[0]*=l,ui.elements[1]*=l,ui.elements[2]*=l,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,e.setFromRotationMatrix(ui),i.x=a,i.y=r,i.z=o,this}makePerspective(t,e,i,s,a,r,o=Oi){let c=this.elements,l=2*a/(e-t),h=2*a/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),p,g;if(o===Oi)p=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===Fa)p=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,a,r,o=Oi){let c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(r-a),f=(e+t)*l,p=(i+s)*h,g,x;if(o===Oi)g=(r+a)*u,x=-2*u;else if(o===Fa)g=a*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Hn=new D,ui=new $t,ud=new D(0,0,0),fd=new D(1,1,1),tn=new D,fa=new D,Ze=new D,Kc=new $t,$c=new je,Ei=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $c.setFromEuler(this),this.setFromQuaternion($c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ei.DEFAULT_ORDER="XYZ";var Va=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dd=0,qc=new D,Vn=new je,Li=new $t,da=new D,Ps=new D,pd=new D,md=new je,Yc=new D(1,0,0),Zc=new D(0,1,0),Jc=new D(0,0,1),Qc={type:"added"},gd={type:"removed"},Gn={type:"childadded",child:null},Jr={type:"childremoved",child:null},ve=class n extends ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new D,e=new Ei,i=new je,s=new D(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new Nt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vn.setFromAxisAngle(t,e),this.quaternion.multiply(Vn),this}rotateOnWorldAxis(t,e){return Vn.setFromAxisAngle(t,e),this.quaternion.premultiply(Vn),this}rotateX(t){return this.rotateOnAxis(Yc,t)}rotateY(t){return this.rotateOnAxis(Zc,t)}rotateZ(t){return this.rotateOnAxis(Jc,t)}translateOnAxis(t,e){return qc.copy(t).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yc,t)}translateY(t){return this.translateOnAxis(Zc,t)}translateZ(t){return this.translateOnAxis(Jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?da.copy(t):da.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Ps,da,this.up):Li.lookAt(da,Ps,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),Vn.setFromRotationMatrix(Li),this.quaternion.premultiply(Vn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qc),Gn.child=t,this.dispatchEvent(Gn),Gn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gd),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qc),Gn.child=t,this.dispatchEvent(Gn),Gn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];a(t.shapes,u)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(t.materials,this.material[c]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(a(t.animations,c))}}if(e){let o=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};ve.DEFAULT_UP=new D(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new D,Di=new D,Qr=new D,Ui=new D,Wn=new D,Xn=new D,jc=new D,jr=new D,to=new D,eo=new D,io=new me,no=new me,so=new me,bn=class n{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),fi.subVectors(t,e),s.cross(fi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){fi.subVectors(s,e),Di.subVectors(i,e),Qr.subVectors(t,e);let r=fi.dot(fi),o=fi.dot(Di),c=fi.dot(Qr),l=Di.dot(Di),h=Di.dot(Qr),u=r*l-o*o;if(u===0)return a.set(0,0,0),null;let f=1/u,p=(l*c-o*h)*f,g=(r*h-o*c)*f;return a.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,i,s,a,r,o,c){return this.getBarycoord(t,e,i,s,Ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Ui.x),c.addScaledVector(r,Ui.y),c.addScaledVector(o,Ui.z),c)}static getInterpolatedAttribute(t,e,i,s,a,r){return io.setScalar(0),no.setScalar(0),so.setScalar(0),io.fromBufferAttribute(t,e),no.fromBufferAttribute(t,i),so.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(io,a.x),r.addScaledVector(no,a.y),r.addScaledVector(so,a.z),r}static isFrontFacing(t,e,i,s){return fi.subVectors(i,e),Di.subVectors(t,e),fi.cross(Di).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),fi.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,a=this.c,r,o;Wn.subVectors(s,i),Xn.subVectors(a,i),jr.subVectors(t,i);let c=Wn.dot(jr),l=Xn.dot(jr);if(c<=0&&l<=0)return e.copy(i);to.subVectors(t,s);let h=Wn.dot(to),u=Xn.dot(to);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(i).addScaledVector(Wn,r);eo.subVectors(t,a);let p=Wn.dot(eo),g=Xn.dot(eo);if(g>=0&&p<=g)return e.copy(a);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(Xn,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return jc.subVectors(a,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(jc,o);let d=1/(m+x+f);return r=x*d,o=f*d,e.copy(i).addScaledVector(Wn,r).addScaledVector(Xn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},en={h:0,s:0,l:0},pa={h:0,s:0,l:0};function ao(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ht=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Zt.workingColorSpace){if(t=nd(t,1),e=$e(e,0,1),i=$e(i,0,1),e===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=ao(r,a,t+1/3),this.g=ao(r,a,t),this.b=ao(r,a,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Te){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let i=eu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return Zt.fromWorkingColorSpace(ze.copy(this),t),Math.round($e(ze.r*255,0,255))*65536+Math.round($e(ze.g*255,0,255))*256+Math.round($e(ze.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(ze.copy(this),e);let i=ze.r,s=ze.g,a=ze.b,r=Math.max(i,s,a),o=Math.min(i,s,a),c,l,h=(o+r)/2;if(o===r)c=0,l=0;else{let u=r-o;switch(l=h<=.5?u/(r+o):u/(2-r-o),r){case i:c=(s-a)/u+(s<a?6:0);break;case s:c=(a-i)/u+2;break;case a:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Te){Zt.fromWorkingColorSpace(ze.copy(this),t);let e=ze.r,i=ze.g,s=ze.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(en),this.setHSL(en.h+t,en.s+e,en.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(en),t.getHSL(pa);let i=Vr(en.h,pa.h,e),s=Vr(en.s,pa.s,e),a=Vr(en.l,pa.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new Ht;Ht.NAMES=eu;var xd=0,cn=class extends ln{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=gs(),this.name="",this.blending=Qn,this.side=on,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=Mo,this.blendEquation=Mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zn,this.stencilZFail=zn,this.stencilZPass=zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qn&&(i.blending=this.blending),this.side!==on&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vo&&(i.blendSrc=this.blendSrc),this.blendDst!==Mo&&(i.blendDst=this.blendDst),this.blendEquation!==Mn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let c=a[o];delete c.metadata,r.push(c)}return r}if(e){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ee=class extends cn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var we=new D,ma=new Jt,Ge=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Nc,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ma.fromBufferAttribute(this,e),ma.applyMatrix3(t),this.setXY(e,ma.x,ma.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Rs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),i=Ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),i=Ke(i,this.array),s=Ke(s,this.array),a=Ke(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nc&&(t.usage=this.usage),t}};var ls=class extends Ge{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ga=class extends Ge{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ge=class extends Ge{constructor(t,e,i){super(new Float32Array(t),e,i)}},yd=0,si=new $t,ro=new ve,Kn=new D,Je=new wi,Is=new wi,Ce=new D,Fe=class n extends ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tu(t)?Ga:ls)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Nt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,e,i){return si.makeTranslation(t,e,i),this.applyMatrix4(si),this}scale(t,e,i){return si.makeScale(t,e,i),this.applyMatrix4(si),this}lookAt(t){return ro.lookAt(t),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kn).negate(),this.translate(Kn.x,Kn.y,Kn.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ge(i,3))}else{for(let i=0,s=e.count;i<s;i++){let a=t[i];e.setXYZ(i,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let a=e[i];Je.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){let o=e[a];Is.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(Je.min,Is.min),Je.expandByPoint(Ce),Ce.addVectors(Je.max,Is.max),Je.expandByPoint(Ce)):(Je.expandByPoint(Is.min),Je.expandByPoint(Is.max))}Je.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)Ce.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(Ce));if(e)for(let a=0,r=e.length;a<r;a++){let o=e[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ce.fromBufferAttribute(o,l),c&&(Kn.fromBufferAttribute(t,l),Ce.add(Kn)),s=Math.max(s,i.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<i.count;C++)o[C]=new D,c[C]=new D;let l=new D,h=new D,u=new D,f=new Jt,p=new Jt,g=new Jt,x=new D,m=new D;function d(C,w,M){l.fromBufferAttribute(i,C),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,M),f.fromBufferAttribute(a,C),p.fromBufferAttribute(a,w),g.fromBufferAttribute(a,M),h.sub(l),u.sub(l),p.sub(f),g.sub(f);let k=1/(p.x*g.y-g.x*p.y);isFinite(k)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(k),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(k),o[C].add(x),o[w].add(x),o[M].add(x),c[C].add(m),c[w].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let C=0,w=_.length;C<w;++C){let M=_[C],k=M.start,G=M.count;for(let B=k,W=k+G;B<W;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let S=new D,v=new D,P=new D,E=new D;function R(C){P.fromBufferAttribute(s,C),E.copy(P);let w=o[C];S.copy(w),S.sub(P.multiplyScalar(P.dot(w))).normalize(),v.crossVectors(E,w);let k=v.dot(c[C])<0?-1:1;r.setXYZW(C,S.x,S.y,S.z,k)}for(let C=0,w=_.length;C<w;++C){let M=_[C],k=M.start,G=M.count;for(let B=k,W=k+G;B<W;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new D,a=new D,r=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),a.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new Ge(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,i);e.setAttribute(o,l)}let a=this.morphAttributes;for(let o in a){let c=[],l=a[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=t(f,i);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,c=r.length;o<c;o++){let l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},a=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let a=t.morphAttributes;for(let l in a){let h=[],u=a[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,h=r.length;l<h;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},th=new $t,gn=new Bs,ga=new Ti,eh=new D,xa=new D,ya=new D,_a=new D,oo=new D,va=new D,ih=new D,Ma=new D,St=class extends ve{constructor(t=new Fe,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){va.set(0,0,0);for(let c=0,l=a.length;c<l;c++){let h=o[c],u=a[c];h!==0&&(oo.fromBufferAttribute(u,t),r?va.addScaledVector(oo,h):va.addScaledVector(oo.sub(e),h))}e.add(va)}return e}raycast(t,e){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(a),gn.copy(t.ray).recast(t.near),!(ga.containsPoint(gn.origin)===!1&&(gn.intersectSphere(ga,eh)===null||gn.origin.distanceToSquared(eh)>(t.far-t.near)**2))&&(th.copy(a).invert(),gn.copy(t.ray).applyMatrix4(th),!(i.boundingBox!==null&&gn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,gn)))}_computeIntersections(t,e,i){let s,a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=r[m.materialIndex],_=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,P=S;v<P;v+=3){let E=o.getX(v),R=o.getX(v+1),C=o.getX(v+2);s=ba(this,d,t,i,l,h,u,E,R,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let _=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);s=ba(this,r,t,i,l,h,u,_,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=r[m.materialIndex],_=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,P=S;v<P;v+=3){let E=v,R=v+1,C=v+2;s=ba(this,d,t,i,l,h,u,E,R,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let _=m,S=m+1,v=m+2;s=ba(this,r,t,i,l,h,u,_,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function _d(n,t,e,i,s,a,r,o){let c;if(t.side===Ne?c=i.intersectTriangle(r,a,s,!0,o):c=i.intersectTriangle(s,a,r,t.side===on,o),c===null)return null;Ma.copy(o),Ma.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Ma);return l<e.near||l>e.far?null:{distance:l,point:Ma.clone(),object:n}}function ba(n,t,e,i,s,a,r,o,c,l){n.getVertexPosition(o,xa),n.getVertexPosition(c,ya),n.getVertexPosition(l,_a);let h=_d(n,t,e,i,xa,ya,_a,ih);if(h){let u=new D;bn.getBarycoord(ih,xa,ya,_a,u),s&&(h.uv=bn.getInterpolatedAttribute(s,o,c,l,u,new Jt)),a&&(h.uv1=bn.getInterpolatedAttribute(a,o,c,l,u,new Jt)),r&&(h.normal=bn.getInterpolatedAttribute(r,o,c,l,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new D,materialIndex:0};bn.getNormal(xa,ya,_a,f.normal),h.face=f,h.barycoord=u}return h}var Me=class n extends Fe{constructor(t=1,e=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let c=[],l=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,i,e,t,r,a,0),g("z","y","x",1,-1,i,e,-t,r,a,1),g("x","z","y",1,1,t,i,e,s,r,2),g("x","z","y",1,-1,t,i,-e,s,r,3),g("x","y","z",1,-1,t,e,i,s,a,4),g("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(c),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(u,2));function g(x,m,d,_,S,v,P,E,R,C,w){let M=v/R,k=P/C,G=v/2,B=P/2,W=E/2,Z=R+1,$=C+1,j=0,X=0,at=new D;for(let dt=0;dt<$;dt++){let vt=dt*k-B;for(let Dt=0;Dt<Z;Dt++){let te=Dt*M-G;at[x]=te*_,at[m]=vt*S,at[d]=W,l.push(at.x,at.y,at.z),at[x]=0,at[m]=0,at[d]=E>0?1:-1,h.push(at.x,at.y,at.z),u.push(Dt/R),u.push(1-dt/C),j+=1}}for(let dt=0;dt<C;dt++)for(let vt=0;vt<R;vt++){let Dt=f+vt+Z*dt,te=f+vt+Z*(dt+1),q=f+(vt+1)+Z*(dt+1),tt=f+(vt+1)+Z*dt;c.push(Dt,te,tt),c.push(te,q,tt),X+=6}o.addGroup(p,X,w),p+=X,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function cs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function He(n){let t={};for(let e=0;e<n.length;e++){let i=cs(n[e]);for(let s in i)t[s]=i[s]}return t}function vd(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function iu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var Md={clone:cs,merge:He},bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends cn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bd,this.fragmentShader=Sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=vd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Wa=class extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},nn=new D,nh=new Jt,sh=new Jt,Ve=class extends Wa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=al*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return al*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(nn.x,nn.y).multiplyScalar(-t/nn.z),nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nn.x,nn.y).multiplyScalar(-t/nn.z)}getViewSize(t,e){return this.getViewBounds(t,nh,sh),e.subVectors(sh,nh)}setViewOffset(t,e,i,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/c,e-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$n=-90,qn=1,cl=class extends ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve($n,qn,t,e);s.layers=this.layers,this.add(s);let a=new Ve($n,qn,t,e);a.layers=this.layers,this.add(a);let r=new Ve($n,qn,t,e);r.layers=this.layers,this.add(r);let o=new Ve($n,qn,t,e);o.layers=this.layers,this.add(o);let c=new Ve($n,qn,t,e);c.layers=this.layers,this.add(c);let l=new Ve($n,qn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,a,r,o,c]=e;for(let l of e)this.remove(l);if(t===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,a),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Xa=class extends qe{constructor(t,e,i,s,a,r,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ns,super(t,e,i,s,a,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},hl=class extends Vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Xa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Si}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Me(5,5,5),a=new ri({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ne,blending:an});a.uniforms.tEquirect.value=e;let r=new St(s,a),o=e.minFilter;return e.minFilter===Fi&&(e.minFilter=Si),new cl(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(a)}},lo=new D,wd=new D,Td=new Nt,Ni=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=lo.subVectors(i,e).cross(wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(lo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Td.getNormalMatrix(t),s=this.coplanarPoint(lo).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xn=new Ti,Sa=new D,Hs=class{constructor(t=new Ni,e=new Ni,i=new Ni,s=new Ni,a=new Ni,r=new Ni){this.planes=[t,e,i,s,a,r]}set(t,e,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Oi){let i=this.planes,s=t.elements,a=s[0],r=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],_=s[13],S=s[14],v=s[15];if(i[0].setComponents(c-a,f-l,m-p,v-d).normalize(),i[1].setComponents(c+a,f+l,m+p,v+d).normalize(),i[2].setComponents(c+r,f+h,m+g,v+_).normalize(),i[3].setComponents(c-r,f-h,m-g,v-_).normalize(),i[4].setComponents(c-o,f-u,m-x,v-S).normalize(),e===Oi)i[5].setComponents(c+o,f+u,m+x,v+S).normalize();else if(e===Fa)i[5].setComponents(o,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xn)}intersectsSprite(t){return xn.center.set(0,0,0),xn.radius=.7071067811865476,xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(xn)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Sa.x=s.normal.x>0?t.max.x:t.min.x,Sa.y=s.normal.y>0?t.max.y:t.min.y,Sa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nu(){let n=null,t=!1,e=null,i=null;function s(a,r){e(a,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function Ed(n){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:a,update:r}}var ti=class n extends Fe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let a=t/2,r=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=t/o,f=e/c,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){let _=d*f-r;for(let S=0;S<l;S++){let v=S*u-a;g.push(v,-_,0),x.push(0,0,1),m.push(S/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let _=0;_<o;_++){let S=_+l*d,v=_+l*(d+1),P=_+1+l*(d+1),E=_+1+l*d;p.push(S,v,E),p.push(v,P,E)}this.setIndex(p),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rd=`#ifdef USE_ALPHAHASH
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
#endif`,kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ld=`#ifdef USE_AOMAP
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
#endif`,Dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ud=`#ifdef USE_BATCHING
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
#endif`,zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Od=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bd=`#ifdef USE_IRIDESCENCE
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
#endif`,Hd=`#ifdef USE_BUMPMAP
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
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zd=`#define PI 3.141592653589793
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
} // validated`,Jd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qd=`vec3 transformedNormal = objectNormal;
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
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,np="gl_FragColor = linearToOutputTexel( gl_FragColor );",sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ap=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pp=`#ifdef USE_GRADIENTMAP
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
}`,mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yp=`uniform bool receiveShadow;
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
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wp=`PhysicalMaterial material;
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
#endif`,Tp=`struct PhysicalMaterial {
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
}`,Ep=`
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
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zp=`#if defined( USE_POINTS_UV )
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
#endif`,Np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`#ifdef USE_MORPHTARGETS
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
#endif`,Gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yp=`#ifdef USE_NORMALMAP
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
#endif`,Zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,um=`float getShadowMask() {
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
}`,fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mm=`#ifdef USE_SKINNING
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
#endif`,gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Am=`uniform sampler2D t2D;
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`#include <common>
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
}`,Lm=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dm=`#define DISTANCE
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
}`,Um=`#define DISTANCE
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
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
}`,Om=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Vm=`#define LAMBERT
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
}`,Gm=`#define LAMBERT
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define MATCAP
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
}`,Km=`#define NORMAL
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
}`,$m=`#define NORMAL
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
}`,qm=`#define PHONG
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
}`,Ym=`#define PHONG
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
}`,Zm=`#define STANDARD
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
}`,Jm=`#define STANDARD
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
}`,Qm=`#define TOON
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
}`,jm=`#define TOON
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
}`,tg=`uniform float size;
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
}`,eg=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,ng=`uniform vec3 color;
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
}`,sg=`uniform float rotation;
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
}`,ag=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:Ad,alphahash_pars_fragment:Rd,alphamap_fragment:kd,alphamap_pars_fragment:Cd,alphatest_fragment:Pd,alphatest_pars_fragment:Id,aomap_fragment:Ld,aomap_pars_fragment:Dd,batching_pars_vertex:Ud,batching_vertex:zd,begin_vertex:Nd,beginnormal_vertex:Fd,bsdfs:Od,iridescence_fragment:Bd,bumpmap_pars_fragment:Hd,clipping_planes_fragment:Vd,clipping_planes_pars_fragment:Gd,clipping_planes_pars_vertex:Wd,clipping_planes_vertex:Xd,color_fragment:Kd,color_pars_fragment:$d,color_pars_vertex:qd,color_vertex:Yd,common:Zd,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:Qd,displacementmap_pars_vertex:jd,displacementmap_vertex:tp,emissivemap_fragment:ep,emissivemap_pars_fragment:ip,colorspace_fragment:np,colorspace_pars_fragment:sp,envmap_fragment:ap,envmap_common_pars_fragment:rp,envmap_pars_fragment:op,envmap_pars_vertex:lp,envmap_physical_pars_fragment:_p,envmap_vertex:cp,fog_vertex:hp,fog_pars_vertex:up,fog_fragment:fp,fog_pars_fragment:dp,gradientmap_pars_fragment:pp,lightmap_pars_fragment:mp,lights_lambert_fragment:gp,lights_lambert_pars_fragment:xp,lights_pars_begin:yp,lights_toon_fragment:vp,lights_toon_pars_fragment:Mp,lights_phong_fragment:bp,lights_phong_pars_fragment:Sp,lights_physical_fragment:wp,lights_physical_pars_fragment:Tp,lights_fragment_begin:Ep,lights_fragment_maps:Ap,lights_fragment_end:Rp,logdepthbuf_fragment:kp,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Ip,map_fragment:Lp,map_pars_fragment:Dp,map_particle_fragment:Up,map_particle_pars_fragment:zp,metalnessmap_fragment:Np,metalnessmap_pars_fragment:Fp,morphinstance_vertex:Op,morphcolor_vertex:Bp,morphnormal_vertex:Hp,morphtarget_pars_vertex:Vp,morphtarget_vertex:Gp,normal_fragment_begin:Wp,normal_fragment_maps:Xp,normal_pars_fragment:Kp,normal_pars_vertex:$p,normal_vertex:qp,normalmap_pars_fragment:Yp,clearcoat_normal_fragment_begin:Zp,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:Qp,iridescence_pars_fragment:jp,opaque_fragment:tm,packing:em,premultiplied_alpha_fragment:im,project_vertex:nm,dithering_fragment:sm,dithering_pars_fragment:am,roughnessmap_fragment:rm,roughnessmap_pars_fragment:om,shadowmap_pars_fragment:lm,shadowmap_pars_vertex:cm,shadowmap_vertex:hm,shadowmask_pars_fragment:um,skinbase_vertex:fm,skinning_pars_vertex:dm,skinning_vertex:pm,skinnormal_vertex:mm,specularmap_fragment:gm,specularmap_pars_fragment:xm,tonemapping_fragment:ym,tonemapping_pars_fragment:_m,transmission_fragment:vm,transmission_pars_fragment:Mm,uv_pars_fragment:bm,uv_pars_vertex:Sm,uv_vertex:wm,worldpos_vertex:Tm,background_vert:Em,background_frag:Am,backgroundCube_vert:Rm,backgroundCube_frag:km,cube_vert:Cm,cube_frag:Pm,depth_vert:Im,depth_frag:Lm,distanceRGBA_vert:Dm,distanceRGBA_frag:Um,equirect_vert:zm,equirect_frag:Nm,linedashed_vert:Fm,linedashed_frag:Om,meshbasic_vert:Bm,meshbasic_frag:Hm,meshlambert_vert:Vm,meshlambert_frag:Gm,meshmatcap_vert:Wm,meshmatcap_frag:Xm,meshnormal_vert:Km,meshnormal_frag:$m,meshphong_vert:qm,meshphong_frag:Ym,meshphysical_vert:Zm,meshphysical_frag:Jm,meshtoon_vert:Qm,meshtoon_frag:jm,points_vert:tg,points_frag:eg,shadow_vert:ig,shadow_frag:ng,sprite_vert:sg,sprite_frag:ag},rt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},bi={basic:{uniforms:He([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:He([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:He([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:He([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:He([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:He([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:He([rt.points,rt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:He([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:He([rt.common,rt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:He([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:He([rt.sprite,rt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:He([rt.common,rt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:He([rt.lights,rt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};bi.physical={uniforms:He([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var wa={r:0,b:0,g:0},yn=new Ei,rg=new $t;function og(n,t,e,i,s,a,r){let o=new Ht(0),c=a===!0?0:1,l,h,u=null,f=0,p=null;function g(_){let S=_.isScene===!0?_.background:null;return S&&S.isTexture&&(S=(_.backgroundBlurriness>0?e:t).get(S)),S}function x(_){let S=!1,v=g(_);v===null?d(o,c):v&&v.isColor&&(d(v,1),S=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,S){let v=g(S);v&&(v.isCubeTexture||v.mapping===cr)?(h===void 0&&(h=new St(new Me(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:cs(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yn.copy(S.backgroundRotation),yn.x*=-1,yn.y*=-1,yn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(yn.y*=-1,yn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(yn)),h.material.toneMapped=Zt.getTransfer(v.colorSpace)!==re,(u!==v||f!==v.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new St(new ti(2,2),new ri({name:"BackgroundMaterial",uniforms:cs(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(v.colorSpace)!==re,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,p=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function d(_,S){_.getRGB(wa,iu(n)),i.buffers.color.setClear(wa.r,wa.g,wa.b,S,r)}return{getClearColor:function(){return o},setClearColor:function(_,S=1){o.set(_),c=S,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,d(o,c)},render:x,addToRenderList:m}}function lg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),a=s,r=!1;function o(M,k,G,B,W){let Z=!1,$=u(B,G,k);a!==$&&(a=$,l(a.object)),Z=p(M,B,G,W),Z&&g(M,B,G,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,v(M,k,G,B),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,k,G){let B=G.wireframe===!0,W=i[M.id];W===void 0&&(W={},i[M.id]=W);let Z=W[k.id];Z===void 0&&(Z={},W[k.id]=Z);let $=Z[B];return $===void 0&&($=f(c()),Z[B]=$),$}function f(M){let k=[],G=[],B=[];for(let W=0;W<e;W++)k[W]=0,G[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:G,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,k,G,B){let W=a.attributes,Z=k.attributes,$=0,j=G.getAttributes();for(let X in j)if(j[X].location>=0){let dt=W[X],vt=Z[X];if(vt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor)),dt===void 0||dt.attribute!==vt||vt&&dt.data!==vt.data)return!0;$++}return a.attributesNum!==$||a.index!==B}function g(M,k,G,B){let W={},Z=k.attributes,$=0,j=G.getAttributes();for(let X in j)if(j[X].location>=0){let dt=Z[X];dt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));let vt={};vt.attribute=dt,dt&&dt.data&&(vt.data=dt.data),W[X]=vt,$++}a.attributes=W,a.attributesNum=$,a.index=B}function x(){let M=a.newAttributes;for(let k=0,G=M.length;k<G;k++)M[k]=0}function m(M){d(M,0)}function d(M,k){let G=a.newAttributes,B=a.enabledAttributes,W=a.attributeDivisors;G[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),W[M]!==k&&(n.vertexAttribDivisor(M,k),W[M]=k)}function _(){let M=a.newAttributes,k=a.enabledAttributes;for(let G=0,B=k.length;G<B;G++)k[G]!==M[G]&&(n.disableVertexAttribArray(G),k[G]=0)}function S(M,k,G,B,W,Z,$){$===!0?n.vertexAttribIPointer(M,k,G,W,Z):n.vertexAttribPointer(M,k,G,B,W,Z)}function v(M,k,G,B){x();let W=B.attributes,Z=G.getAttributes(),$=k.defaultAttributeValues;for(let j in Z){let X=Z[j];if(X.location>=0){let at=W[j];if(at===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(at=M.instanceColor)),at!==void 0){let dt=at.normalized,vt=at.itemSize,Dt=t.get(at);if(Dt===void 0)continue;let te=Dt.buffer,q=Dt.type,tt=Dt.bytesPerElement,mt=q===n.INT||q===n.UNSIGNED_INT||at.gpuType===zl;if(at.isInterleavedBufferAttribute){let ot=at.data,At=ot.stride,Pt=at.offset;if(ot.isInstancedInterleavedBuffer){for(let Gt=0;Gt<X.locationSize;Gt++)d(X.location+Gt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Gt=0;Gt<X.locationSize;Gt++)m(X.location+Gt);n.bindBuffer(n.ARRAY_BUFFER,te);for(let Gt=0;Gt<X.locationSize;Gt++)S(X.location+Gt,vt/X.locationSize,q,dt,At*tt,(Pt+vt/X.locationSize*Gt)*tt,mt)}else{if(at.isInstancedBufferAttribute){for(let ot=0;ot<X.locationSize;ot++)d(X.location+ot,at.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ot=0;ot<X.locationSize;ot++)m(X.location+ot);n.bindBuffer(n.ARRAY_BUFFER,te);for(let ot=0;ot<X.locationSize;ot++)S(X.location+ot,vt/X.locationSize,q,dt,vt*tt,vt/X.locationSize*ot*tt,mt)}}else if($!==void 0){let dt=$[j];if(dt!==void 0)switch(dt.length){case 2:n.vertexAttrib2fv(X.location,dt);break;case 3:n.vertexAttrib3fv(X.location,dt);break;case 4:n.vertexAttrib4fv(X.location,dt);break;default:n.vertexAttrib1fv(X.location,dt)}}}}_()}function P(){C();for(let M in i){let k=i[M];for(let G in k){let B=k[G];for(let W in B)h(B[W].object),delete B[W];delete k[G]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;let k=i[M.id];for(let G in k){let B=k[G];for(let W in B)h(B[W].object),delete B[W];delete k[G]}delete i[M.id]}function R(M){for(let k in i){let G=i[k];if(G[M.id]===void 0)continue;let B=G[M.id];for(let W in B)h(B[W].object),delete B[W];delete G[M.id]}}function C(){w(),r=!0,a!==s&&(a=s,l(a.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function cg(n,t,e){let i;function s(l){i=l}function a(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function r(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,i,1)}function c(l,h,u,f){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)r(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function hg(n,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==ai&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let C=R===Ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Hi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==pi&&!C)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:P,maxSamples:E}}function ug(n){let t=this,e=null,i=0,s=!1,a=!1,r=new Ni,o=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||a&&!m)a?h(null):l();else{let _=a?0:i,S=_*4,v=d.clippingState||null;c.value=v,v=h(g,f,S,p);for(let P=0;P!==S;++P)v[P]=e[P];d.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let d=p+x*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,v=p;S!==x;++S,v+=4)r.copy(u[S]).applyMatrix4(_,o),r.normal.toArray(m,v),m[v+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function fg(n){let t=new WeakMap;function e(r,o){return o===ko?r.mapping=ns:o===Co&&(r.mapping=ss),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===ko||o===Co)if(t.has(r)){let c=t.get(r).texture;return e(c,r.mapping)}else{let c=r.image;if(c&&c.height>0){let l=new hl(c.height);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var Ka=class extends Wa{constructor(t=-1,e=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Jn=4,ah=[.125,.215,.35,.446,.526,.582],Sn=20,co=new Ka,rh=new Ht,ho=null,uo=0,fo=0,po=!1,vn=(1+Math.sqrt(5))/2,Yn=1/vn,oh=[new D(-vn,Yn,0),new D(vn,Yn,0),new D(-Yn,0,vn),new D(Yn,0,vn),new D(0,vn,-Yn),new D(0,vn,Yn),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],$a=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ho,uo,fo),this._renderer.xr.enabled=po,t.scissorTest=!1,Ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Ks,format:ai,colorSpace:ms,depthBuffer:!1},s=lh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(t,e,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(a)),this._blurMaterial=pg(a,t,e)}return s}_compileMaterial(t){let e=new St(this._lodPlanes[0],t);this._renderer.compile(e,co)}_sceneToCubeUV(t,e,i,s){let o=new Ve(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(rh),h.toneMapping=rn,h.autoClear=!1;let p=new Ee({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new St(new Me,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(rh),x=!0);for(let d=0;d<6;d++){let _=d%3;_===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):_===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));let S=this._cubeSize;Ta(s,_*S,d>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ns||t.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new St(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let c=this._cubeSize;Ta(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,co)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=oh[(s-a-1)%oh.length];this._blur(t,a-1,a,r,o)}e.autoClear=i}_blur(t,e,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,e,i,s,a,r,o){let c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new St(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Sn-1),x=a/g,m=isFinite(a)?1+Math.floor(h*x):Sn;m>Sn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Sn}`);let d=[],_=0;for(let R=0;R<Sn;++R){let C=R/x,w=Math.exp(-C*C/2);d.push(w),R===0?_+=w:R<m&&(_+=2*w)}for(let R=0;R<d.length;R++)d[R]=d[R]/_;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;let v=this._sizeLods[s],P=3*v*(s>S-Jn?s-S+Jn:0),E=4*(this._cubeSize-v);Ta(e,P,E,3*v,2*v),c.setRenderTarget(e),c.render(u,co)}};function dg(n){let t=[],e=[],i=[],s=n,a=n-Jn+1+ah.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);e.push(o);let c=1/o;r>n-Jn?c=ah[r-n+Jn-1]:r===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,d=1,_=new Float32Array(x*g*p),S=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let E=0;E<p;E++){let R=E%3*2/3-1,C=E>2?0:-1,w=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];_.set(w,x*g*E),S.set(f,m*g*E);let M=[E,E,E,E,E,E];v.set(M,d*g*E)}let P=new Fe;P.setAttribute("position",new Ge(_,x)),P.setAttribute("uv",new Ge(S,m)),P.setAttribute("faceIndex",new Ge(v,d)),t.push(P),s>Jn&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function lh(n,t,e){let i=new Vi(n,t,e);return i.texture.mapping=cr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ta(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function pg(n,t,e){let i=new Float32Array(Sn),s=new D(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Sn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function ch(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function hh(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function Gl(){return`

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
	`}function mg(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===ko||c===Co,h=c===ns||c===ss;if(l||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new $a(n)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new $a(n)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function a(o){let c=o.target;c.removeEventListener("dispose",a);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function gg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&zs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function xg(n,t,e,i){let s={},a=new WeakMap;function r(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}f.removeEventListener("dispose",r),delete s[f.id];let p=a.get(f);p&&(t.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,d=x.length;m<d;m++)t.update(x[m],n.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let _=p.array;x=p.version;for(let S=0,v=_.length;S<v;S+=3){let P=_[S+0],E=_[S+1],R=_[S+2];f.push(P,E,E,R,R,P)}}else if(g!==void 0){let _=g.array;x=g.version;for(let S=0,v=_.length/3-1;S<v;S+=3){let P=S+0,E=S+1,R=S+2;f.push(P,E,E,R,R,P)}}else return;let m=new(tu(f)?Ga:ls)(f,1);m.version=x;let d=a.get(u);d&&t.remove(d),a.set(u,m)}function h(u){let f=a.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return a.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function yg(n,t,e){let i;function s(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function c(f,p){n.drawElements(i,p,a,f*r),e.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,a,f*r,g),e.update(p,i,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function u(f,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/r,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,f,0,x,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_]*x[_];e.update(d,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function _g(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=o*(a/3);break;case n.LINES:e.lines+=o*(a/2);break;case n.LINE_STRIP:e.lines+=o*(a-1);break;case n.LINE_LOOP:e.lines+=o*a;break;case n.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function vg(n,t,e){let i=new WeakMap,s=new me;function a(r,o,c){let l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let w=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let v=o.attributes.position.count*S,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*P*4*u),R=new Ha(E,v,P,u);R.type=pi,R.needsUpdate=!0;let C=S*4;for(let M=0;M<u;M++){let k=m[M],G=d[M],B=_[M],W=v*P*4*M;for(let Z=0;Z<k.count;Z++){let $=Z*C;p===!0&&(s.fromBufferAttribute(k,Z),E[W+$+0]=s.x,E[W+$+1]=s.y,E[W+$+2]=s.z,E[W+$+3]=0),g===!0&&(s.fromBufferAttribute(G,Z),E[W+$+4]=s.x,E[W+$+5]=s.y,E[W+$+6]=s.z,E[W+$+7]=0),x===!0&&(s.fromBufferAttribute(B,Z),E[W+$+8]=s.x,E[W+$+9]=s.y,E[W+$+10]=s.z,E[W+$+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new Jt(v,P)},i.set(o,f),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:a}}function Mg(n,t,e,i){let s=new WeakMap;function a(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function r(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:r}}var qa=class extends qe{constructor(t,e,i,s,a,r,o,c,l,h=jn){if(h!==jn&&h!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===jn&&(i=Tn),i===void 0&&h===os&&(i=rs),super(null,s,a,r,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Qe,this.minFilter=c!==void 0?c:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},su=new qe,uh=new qa(1,1),au=new Ha,ru=new ll,ou=new Xa,fh=[],dh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function xs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,a=fh[s];if(a===void 0&&(a=new Float32Array(s),fh[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,n[r].toArray(a,o)}return a}function Ae(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Re(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ur(n,t){let e=dh[t];e===void 0&&(e=new Int32Array(t),dh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function bg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Sg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2fv(this.addr,t),Re(e,t)}}function wg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;n.uniform3fv(this.addr,t),Re(e,t)}}function Tg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4fv(this.addr,t),Re(e,t)}}function Eg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;gh.set(i),n.uniformMatrix2fv(this.addr,!1,gh),Re(e,i)}}function Ag(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;mh.set(i),n.uniformMatrix3fv(this.addr,!1,mh),Re(e,i)}}function Rg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;ph.set(i),n.uniformMatrix4fv(this.addr,!1,ph),Re(e,i)}}function kg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Cg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2iv(this.addr,t),Re(e,t)}}function Pg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3iv(this.addr,t),Re(e,t)}}function Ig(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4iv(this.addr,t),Re(e,t)}}function Lg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Dg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2uiv(this.addr,t),Re(e,t)}}function Ug(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3uiv(this.addr,t),Re(e,t)}}function zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4uiv(this.addr,t),Re(e,t)}}function Ng(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(uh.compareFunction=jh,a=uh):a=su,e.setTexture2D(t||a,s)}function Fg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ru,s)}function Og(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||ou,s)}function Bg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||au,s)}function Hg(n){switch(n){case 5126:return bg;case 35664:return Sg;case 35665:return wg;case 35666:return Tg;case 35674:return Eg;case 35675:return Ag;case 35676:return Rg;case 5124:case 35670:return kg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Dg;case 36295:return Ug;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}function Vg(n,t){n.uniform1fv(this.addr,t)}function Gg(n,t){let e=xs(t,this.size,2);n.uniform2fv(this.addr,e)}function Wg(n,t){let e=xs(t,this.size,3);n.uniform3fv(this.addr,e)}function Xg(n,t){let e=xs(t,this.size,4);n.uniform4fv(this.addr,e)}function Kg(n,t){let e=xs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function $g(n,t){let e=xs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function qg(n,t){let e=xs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Yg(n,t){n.uniform1iv(this.addr,t)}function Zg(n,t){n.uniform2iv(this.addr,t)}function Jg(n,t){n.uniform3iv(this.addr,t)}function Qg(n,t){n.uniform4iv(this.addr,t)}function jg(n,t){n.uniform1uiv(this.addr,t)}function t0(n,t){n.uniform2uiv(this.addr,t)}function e0(n,t){n.uniform3uiv(this.addr,t)}function i0(n,t){n.uniform4uiv(this.addr,t)}function n0(n,t,e){let i=this.cache,s=t.length,a=ur(e,s);Ae(i,a)||(n.uniform1iv(this.addr,a),Re(i,a));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||su,a[r])}function s0(n,t,e){let i=this.cache,s=t.length,a=ur(e,s);Ae(i,a)||(n.uniform1iv(this.addr,a),Re(i,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||ru,a[r])}function a0(n,t,e){let i=this.cache,s=t.length,a=ur(e,s);Ae(i,a)||(n.uniform1iv(this.addr,a),Re(i,a));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||ou,a[r])}function r0(n,t,e){let i=this.cache,s=t.length,a=ur(e,s);Ae(i,a)||(n.uniform1iv(this.addr,a),Re(i,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||au,a[r])}function o0(n){switch(n){case 5126:return Vg;case 35664:return Gg;case 35665:return Wg;case 35666:return Xg;case 35674:return Kg;case 35675:return $g;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return Qg;case 5125:return jg;case 36294:return t0;case 36295:return e0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return s0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return r0}}var ul=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Hg(e.type)}},fl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=o0(e.type)}},dl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,e[o.id],i)}}},mo=/(\w+)(\])?(\[|\.)?/g;function xh(n,t){n.seq.push(t),n.map[t.id]=t}function l0(n,t,e){let i=n.name,s=i.length;for(mo.lastIndex=0;;){let a=mo.exec(i),r=mo.lastIndex,o=a[1],c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===s){xh(e,l===void 0?new ul(o,n,t):new fl(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new dl(o),xh(e,u)),e=u}}}var es=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(e,s),r=t.getUniformLocation(e,a.name);l0(a,r,this)}}setValue(t,e,i,s){let a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,r=e.length;a!==r;++a){let o=e[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in e&&i.push(r)}return i}};function yh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var c0=37297,h0=0;function u0(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}var _h=new Nt;function f0(n){Zt._getMatrix(_h,Zt.workingColorSpace,n);let t=`mat3( ${_h.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(n)){case hr:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function vh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let r=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+u0(n.getShaderSource(t),r)}else return s}function d0(n,t){let e=f0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function p0(n,t){let e;switch(t){case Ff:e="Linear";break;case Of:e="Reinhard";break;case Bf:e="Cineon";break;case Hf:e="ACESFilmic";break;case Gf:e="AgX";break;case Wf:e="Neutral";break;case Vf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ea=new D;function m0(){Zt.getLuminanceCoefficients(Ea);let n=Ea.x.toFixed(4),t=Ea.y.toFixed(4),e=Ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function x0(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function y0(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=n.getActiveAttrib(t,s),r=a.name,o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:n.getAttribLocation(t,r),locationSize:o}}return e}function Ns(n){return n!==""}function Mh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(n){return n.replace(_0,M0)}var v0=new Map;function M0(n,t){let e=Bt[t];if(e===void 0){let i=v0.get(t);if(i!==void 0)e=Bt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return pl(e)}var b0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(n){return n.replace(b0,S0)}function S0(n,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function wh(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function w0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===xf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function T0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ns:case ss:t="ENVMAP_TYPE_CUBE";break;case cr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function E0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function A0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ul:t="ENVMAP_BLENDING_MULTIPLY";break;case zf:t="ENVMAP_BLENDING_MIX";break;case Nf:t="ENVMAP_BLENDING_ADD";break}return t}function R0(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function k0(n,t,e,i){let s=n.getContext(),a=e.defines,r=e.vertexShader,o=e.fragmentShader,c=w0(e),l=T0(e),h=E0(e),u=A0(e),f=R0(e),p=g0(e),g=x0(a),x=s.createProgram(),m,d,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),d.length>0&&(d+=`
`)):(m=[wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),d=[wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==rn?"#define TONE_MAPPING":"",e.toneMapping!==rn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==rn?p0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,d0("linearToOutputTexel",e.outputColorSpace),m0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),r=pl(r),r=Mh(r,e),r=bh(r,e),o=pl(o),o=Mh(o,e),o=bh(o,e),r=Sh(r),o=Sh(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let S=_+m+r,v=_+d+o,P=yh(s,s.VERTEX_SHADER,S),E=yh(s,s.FRAGMENT_SHADER,v);s.attachShader(x,P),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(k){if(n.debug.checkShaderErrors){let G=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(P).trim(),W=s.getShaderInfoLog(E).trim(),Z=!0,$=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,P,E);else{let j=vh(s,P,"vertex"),X=vh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+G+`
`+j+`
`+X)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||W==="")&&($=!1);$&&(k.diagnostics={runnable:Z,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:d}})}s.deleteShader(P),s.deleteShader(E),C=new es(s,x),w=y0(s,x)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,c0)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=h0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=E,this}var C0=0,ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new gl(t),e.set(t,i)),i}},gl=class{constructor(t){this.id=C0++,this.code=t,this.usedTimes=0}};function P0(n,t,e,i,s,a,r){let o=new Va,c=new ml,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,k,G,B){let W=G.fog,Z=B.geometry,$=w.isMeshStandardMaterial?G.environment:null,j=(w.isMeshStandardMaterial?e:t).get(w.envMap||$),X=j&&j.mapping===cr?j.image.height:null,at=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let dt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,vt=dt!==void 0?dt.length:0,Dt=0;Z.morphAttributes.position!==void 0&&(Dt=1),Z.morphAttributes.normal!==void 0&&(Dt=2),Z.morphAttributes.color!==void 0&&(Dt=3);let te,q,tt,mt;if(at){let ae=bi[at];te=ae.vertexShader,q=ae.fragmentShader}else te=w.vertexShader,q=w.fragmentShader,c.update(w),tt=c.getVertexShaderID(w),mt=c.getFragmentShaderID(w);let ot=n.getRenderTarget(),At=n.state.buffers.depth.getReversed(),Pt=B.isInstancedMesh===!0,Gt=B.isBatchedMesh===!0,ue=!!w.map,Wt=!!w.matcap,fe=!!j,z=!!w.aoMap,Be=!!w.lightMap,Xt=!!w.bumpMap,Kt=!!w.normalMap,Et=!!w.displacementMap,se=!!w.emissiveMap,bt=!!w.metalnessMap,T=!!w.roughnessMap,y=w.anisotropy>0,A=w.clearcoat>0,I=w.dispersion>0,F=w.iridescence>0,O=w.sheen>0,it=w.transmission>0,Q=y&&!!w.anisotropyMap,st=A&&!!w.clearcoatMap,It=A&&!!w.clearcoatNormalMap,J=A&&!!w.clearcoatRoughnessMap,ut=F&&!!w.iridescenceMap,Tt=F&&!!w.iridescenceThicknessMap,Rt=O&&!!w.sheenColorMap,pt=O&&!!w.sheenRoughnessMap,Ot=!!w.specularMap,kt=!!w.specularColorMap,Yt=!!w.specularIntensityMap,L=it&&!!w.transmissionMap,lt=it&&!!w.thicknessMap,K=!!w.gradientMap,Y=!!w.alphaMap,ft=w.alphaTest>0,ct=!!w.alphaHash,Ut=!!w.extensions,_e=rn;w.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(_e=n.toneMapping);let De={shaderID:at,shaderType:w.type,shaderName:w.name,vertexShader:te,fragmentShader:q,defines:w.defines,customVertexShaderID:tt,customFragmentShaderID:mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Gt,batchingColor:Gt&&B._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&B.instanceColor!==null,instancingMorph:Pt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ms,alphaToCoverage:!!w.alphaToCoverage,map:ue,matcap:Wt,envMap:fe,envMapMode:fe&&j.mapping,envMapCubeUVHeight:X,aoMap:z,lightMap:Be,bumpMap:Xt,normalMap:Kt,displacementMap:f&&Et,emissiveMap:se,normalMapObjectSpace:Kt&&w.normalMapType===Yf,normalMapTangentSpace:Kt&&w.normalMapType===Qh,metalnessMap:bt,roughnessMap:T,anisotropy:y,anisotropyMap:Q,clearcoat:A,clearcoatMap:st,clearcoatNormalMap:It,clearcoatRoughnessMap:J,dispersion:I,iridescence:F,iridescenceMap:ut,iridescenceThicknessMap:Tt,sheen:O,sheenColorMap:Rt,sheenRoughnessMap:pt,specularMap:Ot,specularColorMap:kt,specularIntensityMap:Yt,transmission:it,transmissionMap:L,thicknessMap:lt,gradientMap:K,opaque:w.transparent===!1&&w.blending===Qn&&w.alphaToCoverage===!1,alphaMap:Y,alphaTest:ft,alphaHash:ct,combine:w.combine,mapUv:ue&&x(w.map.channel),aoMapUv:z&&x(w.aoMap.channel),lightMapUv:Be&&x(w.lightMap.channel),bumpMapUv:Xt&&x(w.bumpMap.channel),normalMapUv:Kt&&x(w.normalMap.channel),displacementMapUv:Et&&x(w.displacementMap.channel),emissiveMapUv:se&&x(w.emissiveMap.channel),metalnessMapUv:bt&&x(w.metalnessMap.channel),roughnessMapUv:T&&x(w.roughnessMap.channel),anisotropyMapUv:Q&&x(w.anisotropyMap.channel),clearcoatMapUv:st&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:It&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:pt&&x(w.sheenRoughnessMap.channel),specularMapUv:Ot&&x(w.specularMap.channel),specularColorMapUv:kt&&x(w.specularColorMap.channel),specularIntensityMapUv:Yt&&x(w.specularIntensityMap.channel),transmissionMapUv:L&&x(w.transmissionMap.channel),thicknessMapUv:lt&&x(w.thicknessMap.channel),alphaMapUv:Y&&x(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Kt||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(ue||Y),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Dt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:ue&&w.map.isVideoTexture===!0&&Zt.getTransfer(w.map.colorSpace)===re,decodeVideoTextureEmissive:se&&w.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(w.emissiveMap.colorSpace)===re,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===di,flipSided:w.side===Ne,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ut&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&w.extensions.multiDraw===!0||Gt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function d(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let k in w.defines)M.push(k),M.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(_(M,w),S(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function _(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function S(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function v(w){let M=g[w.type],k;if(M){let G=bi[M];k=Md.clone(G.uniforms)}else k=w.uniforms;return k}function P(w,M){let k;for(let G=0,B=h.length;G<B;G++){let W=h[G];if(W.cacheKey===M){k=W,++k.usedTimes;break}}return k===void 0&&(k=new k0(n,M,w,a),h.push(k)),k}function E(w){if(--w.usedTimes===0){let M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function R(w){c.remove(w)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:P,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:C}}function I0(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function s(r,o,c){n.get(r)[o]=c}function a(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:a}}function L0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Th(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Eh(){let n=[],t=0,e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function r(u,f,p,g,x,m){let d=n[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),t++,d}function o(u,f,p,g,x,m){let d=r(u,f,p,g,x,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(u,f,p,g,x,m){let d=r(u,f,p,g,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||L0),i.length>1&&i.sort(f||Th),s.length>1&&s.sort(f||Th)}function h(){for(let u=t,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:o,unshift:c,finish:h,sort:l}}function D0(){let n=new WeakMap;function t(i,s){let a=n.get(i),r;return a===void 0?(r=new Eh,n.set(i,[r])):s>=a.length?(r=new Eh,a.push(r)):r=a[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function U0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ht};break;case"SpotLight":e={position:new D,direction:new D,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function z0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var N0=0;function F0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function O0(n){let t=new U0,e=z0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);let s=new D,a=new $t,r=new $t;function o(l){let h=0,u=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,_=0,S=0,v=0,P=0,E=0,R=0;l.sort(F0);for(let w=0,M=l.length;w<M;w++){let k=l[w],G=k.color,B=k.intensity,W=k.distance,Z=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=G.r*B,u+=G.g*B,f+=G.b*B;else if(k.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(k.sh.coefficients[$],B);R++}else if(k.isDirectionalLight){let $=t.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let j=k.shadow,X=e.get(k);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=k.shadow.matrix,_++}i.directional[p]=$,p++}else if(k.isSpotLight){let $=t.get(k);$.position.setFromMatrixPosition(k.matrixWorld),$.color.copy(G).multiplyScalar(B),$.distance=W,$.coneCos=Math.cos(k.angle),$.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),$.decay=k.decay,i.spot[x]=$;let j=k.shadow;if(k.map&&(i.spotLightMap[P]=k.map,P++,j.updateMatrices(k),k.castShadow&&E++),i.spotLightMatrix[x]=j.matrix,k.castShadow){let X=e.get(k);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=Z,v++}x++}else if(k.isRectAreaLight){let $=t.get(k);$.color.copy(G).multiplyScalar(B),$.halfWidth.set(k.width*.5,0,0),$.halfHeight.set(0,k.height*.5,0),i.rectArea[m]=$,m++}else if(k.isPointLight){let $=t.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),$.distance=k.distance,$.decay=k.decay,k.castShadow){let j=k.shadow,X=e.get(k);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=k.shadow.matrix,S++}i.point[g]=$,g++}else if(k.isHemisphereLight){let $=t.get(k);$.skyColor.copy(k.color).multiplyScalar(B),$.groundColor.copy(k.groundColor).multiplyScalar(B),i.hemi[d]=$,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==_||C.numPointShadows!==S||C.numSpotShadows!==v||C.numSpotMaps!==P||C.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+P-E,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,C.directionalLength=p,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=_,C.numPointShadows=S,C.numSpotShadows=v,C.numSpotMaps=P,C.numLightProbes=R,i.version=N0++)}function c(l,h){let u=0,f=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let d=0,_=l.length;d<_;d++){let S=l[d];if(S.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(S.isSpotLight){let v=i.spot[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),r.identity(),a.copy(S.matrixWorld),a.premultiply(m),r.extractRotation(a),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(S.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:i}}function Ah(n){let t=new O0(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function a(h){e.push(h)}function r(h){i.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function B0(n){let t=new WeakMap;function e(s,a=0){let r=t.get(s),o;return r===void 0?(o=new Ah(n),t.set(s,[o])):a>=r.length?(o=new Ah(n),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var xl=class extends cn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yl=class extends cn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},H0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V0=`uniform sampler2D shadow_pass;
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
}`;function G0(n,t,e){let i=new Hs,s=new Jt,a=new Jt,r=new me,o=new xl({depthPacking:qf}),c=new yl,l={},h=e.maxTextureSize,u={[on]:Ne,[Ne]:on,[di]:di},f=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:H0,fragmentShader:V0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Fe;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new St(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let d=this.type;this.render=function(E,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let w=n.getRenderTarget(),M=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),G=n.state;G.setBlending(an),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let B=d!==zi&&this.type===zi,W=d===zi&&this.type!==zi;for(let Z=0,$=E.length;Z<$;Z++){let j=E[Z],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let at=X.getFrameExtents();if(s.multiply(at),a.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/at.x),s.x=a.x*at.x,X.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/at.y),s.y=a.y*at.y,X.mapSize.y=a.y)),X.map===null||B===!0||W===!0){let vt=this.type!==zi?{minFilter:Qe,magFilter:Qe}:{};X.map!==null&&X.map.dispose(),X.map=new Vi(s.x,s.y,vt),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let dt=X.getViewportCount();for(let vt=0;vt<dt;vt++){let Dt=X.getViewport(vt);r.set(a.x*Dt.x,a.y*Dt.y,a.x*Dt.z,a.y*Dt.w),G.viewport(r),X.updateMatrices(j,vt),i=X.getFrustum(),v(R,C,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===zi&&_(X,C),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(w,M,k)};function _(E,R){let C=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Vi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,C,f,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,C,p,x,null)}function S(E,R,C,w){let M=null,k=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(k!==void 0)M=k;else if(M=C.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let G=M.uuid,B=R.uuid,W=l[G];W===void 0&&(W={},l[G]=W);let Z=W[B];Z===void 0&&(Z=M.clone(),W[B]=Z,R.addEventListener("dispose",P)),M=Z}if(M.visible=R.visible,M.wireframe=R.wireframe,w===zi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let G=n.properties.get(M);G.light=C}return M}function v(E,R,C,w,M){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===zi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let B=t.update(E),W=E.material;if(Array.isArray(W)){let Z=B.groups;for(let $=0,j=Z.length;$<j;$++){let X=Z[$],at=W[X.materialIndex];if(at&&at.visible){let dt=S(E,at,w,M);E.onBeforeShadow(n,E,R,C,B,dt,X),n.renderBufferDirect(C,null,B,dt,E,X),E.onAfterShadow(n,E,R,C,B,dt,X)}}}else if(W.visible){let Z=S(E,W,w,M);E.onBeforeShadow(n,E,R,C,B,Z,null),n.renderBufferDirect(C,null,B,Z,E,null),E.onAfterShadow(n,E,R,C,B,Z,null)}}let G=E.children;for(let B=0,W=G.length;B<W;B++)v(G[B],R,C,w,M)}function P(E){E.target.removeEventListener("dispose",P);for(let C in l){let w=l[C],M=E.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var W0={[bo]:So,[wo]:Ao,[To]:Ro,[is]:Eo,[So]:bo,[Ao]:wo,[Ro]:To,[Eo]:is};function X0(n,t){function e(){let L=!1,lt=new me,K=null,Y=new me(0,0,0,0);return{setMask:function(ft){K!==ft&&!L&&(n.colorMask(ft,ft,ft,ft),K=ft)},setLocked:function(ft){L=ft},setClear:function(ft,ct,Ut,_e,De){De===!0&&(ft*=_e,ct*=_e,Ut*=_e),lt.set(ft,ct,Ut,_e),Y.equals(lt)===!1&&(n.clearColor(ft,ct,Ut,_e),Y.copy(lt))},reset:function(){L=!1,K=null,Y.set(-1,0,0,0)}}}function i(){let L=!1,lt=!1,K=null,Y=null,ft=null;return{setReversed:function(ct){if(lt!==ct){let Ut=t.get("EXT_clip_control");lt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);let _e=ft;ft=null,this.setClear(_e)}lt=ct},getReversed:function(){return lt},setTest:function(ct){ct?ot(n.DEPTH_TEST):At(n.DEPTH_TEST)},setMask:function(ct){K!==ct&&!L&&(n.depthMask(ct),K=ct)},setFunc:function(ct){if(lt&&(ct=W0[ct]),Y!==ct){switch(ct){case bo:n.depthFunc(n.NEVER);break;case So:n.depthFunc(n.ALWAYS);break;case wo:n.depthFunc(n.LESS);break;case is:n.depthFunc(n.LEQUAL);break;case To:n.depthFunc(n.EQUAL);break;case Eo:n.depthFunc(n.GEQUAL);break;case Ao:n.depthFunc(n.GREATER);break;case Ro:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Y=ct}},setLocked:function(ct){L=ct},setClear:function(ct){ft!==ct&&(lt&&(ct=1-ct),n.clearDepth(ct),ft=ct)},reset:function(){L=!1,K=null,Y=null,ft=null,lt=!1}}}function s(){let L=!1,lt=null,K=null,Y=null,ft=null,ct=null,Ut=null,_e=null,De=null;return{setTest:function(ae){L||(ae?ot(n.STENCIL_TEST):At(n.STENCIL_TEST))},setMask:function(ae){lt!==ae&&!L&&(n.stencilMask(ae),lt=ae)},setFunc:function(ae,li,ki){(K!==ae||Y!==li||ft!==ki)&&(n.stencilFunc(ae,li,ki),K=ae,Y=li,ft=ki)},setOp:function(ae,li,ki){(ct!==ae||Ut!==li||_e!==ki)&&(n.stencilOp(ae,li,ki),ct=ae,Ut=li,_e=ki)},setLocked:function(ae){L=ae},setClear:function(ae){De!==ae&&(n.clearStencil(ae),De=ae)},reset:function(){L=!1,lt=null,K=null,Y=null,ft=null,ct=null,Ut=null,_e=null,De=null}}}let a=new e,r=new i,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,_=null,S=null,v=null,P=null,E=null,R=new Ht(0,0,0),C=0,w=!1,M=null,k=null,G=null,B=null,W=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,j=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=j>=2);let at=null,dt={},vt=n.getParameter(n.SCISSOR_BOX),Dt=n.getParameter(n.VIEWPORT),te=new me().fromArray(vt),q=new me().fromArray(Dt);function tt(L,lt,K,Y){let ft=new Uint8Array(4),ct=n.createTexture();n.bindTexture(L,ct),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ut=0;Ut<K;Ut++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(lt,0,n.RGBA,1,1,Y,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(lt+Ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return ct}let mt={};mt[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),mt[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),mt[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ot(n.DEPTH_TEST),r.setFunc(is),Xt(!1),Kt(Rc),ot(n.CULL_FACE),z(an);function ot(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function At(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Pt(L,lt){return u[L]!==lt?(n.bindFramebuffer(L,lt),u[L]=lt,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=lt),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=lt),!0):!1}function Gt(L,lt){let K=p,Y=!1;if(L){K=f.get(lt),K===void 0&&(K=[],f.set(lt,K));let ft=L.textures;if(K.length!==ft.length||K[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Ut=ft.length;ct<Ut;ct++)K[ct]=n.COLOR_ATTACHMENT0+ct;K.length=ft.length,Y=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,Y=!0);Y&&n.drawBuffers(K)}function ue(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let Wt={[Mn]:n.FUNC_ADD,[_f]:n.FUNC_SUBTRACT,[vf]:n.FUNC_REVERSE_SUBTRACT};Wt[Mf]=n.MIN,Wt[bf]=n.MAX;let fe={[Sf]:n.ZERO,[wf]:n.ONE,[Tf]:n.SRC_COLOR,[vo]:n.SRC_ALPHA,[Pf]:n.SRC_ALPHA_SATURATE,[kf]:n.DST_COLOR,[Af]:n.DST_ALPHA,[Ef]:n.ONE_MINUS_SRC_COLOR,[Mo]:n.ONE_MINUS_SRC_ALPHA,[Cf]:n.ONE_MINUS_DST_COLOR,[Rf]:n.ONE_MINUS_DST_ALPHA,[If]:n.CONSTANT_COLOR,[Lf]:n.ONE_MINUS_CONSTANT_COLOR,[Df]:n.CONSTANT_ALPHA,[Uf]:n.ONE_MINUS_CONSTANT_ALPHA};function z(L,lt,K,Y,ft,ct,Ut,_e,De,ae){if(L===an){x===!0&&(At(n.BLEND),x=!1);return}if(x===!1&&(ot(n.BLEND),x=!0),L!==yf){if(L!==m||ae!==w){if((d!==Mn||v!==Mn)&&(n.blendEquation(n.FUNC_ADD),d=Mn,v=Mn),ae)switch(L){case Qn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kc:n.blendFunc(n.ONE,n.ONE);break;case Cc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Qn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Cc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}_=null,S=null,P=null,E=null,R.set(0,0,0),C=0,m=L,w=ae}return}ft=ft||lt,ct=ct||K,Ut=Ut||Y,(lt!==d||ft!==v)&&(n.blendEquationSeparate(Wt[lt],Wt[ft]),d=lt,v=ft),(K!==_||Y!==S||ct!==P||Ut!==E)&&(n.blendFuncSeparate(fe[K],fe[Y],fe[ct],fe[Ut]),_=K,S=Y,P=ct,E=Ut),(_e.equals(R)===!1||De!==C)&&(n.blendColor(_e.r,_e.g,_e.b,De),R.copy(_e),C=De),m=L,w=!1}function Be(L,lt){L.side===di?At(n.CULL_FACE):ot(n.CULL_FACE);let K=L.side===Ne;lt&&(K=!K),Xt(K),L.blending===Qn&&L.transparent===!1?z(an):z(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);let Y=L.stencilWrite;o.setTest(Y),Y&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),se(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):At(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(L){M!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),M=L)}function Kt(L){L!==mf?(ot(n.CULL_FACE),L!==k&&(L===Rc?n.cullFace(n.BACK):L===gf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):At(n.CULL_FACE),k=L}function Et(L){L!==G&&($&&n.lineWidth(L),G=L)}function se(L,lt,K){L?(ot(n.POLYGON_OFFSET_FILL),(B!==lt||W!==K)&&(n.polygonOffset(lt,K),B=lt,W=K)):At(n.POLYGON_OFFSET_FILL)}function bt(L){L?ot(n.SCISSOR_TEST):At(n.SCISSOR_TEST)}function T(L){L===void 0&&(L=n.TEXTURE0+Z-1),at!==L&&(n.activeTexture(L),at=L)}function y(L,lt,K){K===void 0&&(at===null?K=n.TEXTURE0+Z-1:K=at);let Y=dt[K];Y===void 0&&(Y={type:void 0,texture:void 0},dt[K]=Y),(Y.type!==L||Y.texture!==lt)&&(at!==K&&(n.activeTexture(K),at=K),n.bindTexture(L,lt||mt[L]),Y.type=L,Y.texture=lt)}function A(){let L=dt[at];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function I(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(L){te.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),te.copy(L))}function pt(L){q.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function Ot(L,lt){let K=l.get(lt);K===void 0&&(K=new WeakMap,l.set(lt,K));let Y=K.get(L);Y===void 0&&(Y=n.getUniformBlockIndex(lt,L.name),K.set(L,Y))}function kt(L,lt){let Y=l.get(lt).get(L);c.get(lt)!==Y&&(n.uniformBlockBinding(lt,Y,L.__bindingPointIndex),c.set(lt,Y))}function Yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},at=null,dt={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,_=null,S=null,v=null,P=null,E=null,R=new Ht(0,0,0),C=0,w=!1,M=null,k=null,G=null,B=null,W=null,te.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:ot,disable:At,bindFramebuffer:Pt,drawBuffers:Gt,useProgram:ue,setBlending:z,setMaterial:Be,setFlipSided:Xt,setCullFace:Kt,setLineWidth:Et,setPolygonOffset:se,setScissorTest:bt,activeTexture:T,bindTexture:y,unbindTexture:A,compressedTexImage2D:I,compressedTexImage3D:F,texImage2D:ut,texImage3D:Tt,updateUBOMapping:Ot,uniformBlockBinding:kt,texStorage2D:It,texStorage3D:J,texSubImage2D:O,texSubImage3D:it,compressedTexSubImage2D:Q,compressedTexSubImage3D:st,scissor:Rt,viewport:pt,reset:Yt}}function Rh(n,t,e,i){let s=K0(i);switch(e){case Kh:return n*t;case qh:return n*t;case Yh:return n*t*2;case Ol:return n*t/s.components*s.byteLength;case Bl:return n*t/s.components*s.byteLength;case Zh:return n*t*2/s.components*s.byteLength;case Hl:return n*t*2/s.components*s.byteLength;case $h:return n*t*3/s.components*s.byteLength;case ai:return n*t*4/s.components*s.byteLength;case Vl:return n*t*4/s.components*s.byteLength;case Ia:case La:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Da:case Ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Lo:case Uo:return Math.max(n,16)*Math.max(t,8)/4;case Io:case Do:return Math.max(n,8)*Math.max(t,8)/2;case zo:case No:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Fo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Go:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case $o:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case qo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Qo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case za:case jo:case tl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Jh:case el:return Math.ceil(n/4)*Math.ceil(t/4)*8;case il:case nl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function K0(n){switch(n){case Hi:case Gh:return{byteLength:1,components:1};case Os:case Wh:case Ks:return{byteLength:2,components:1};case Nl:case Fl:return{byteLength:2,components:4};case Tn:case zl:case pi:return{byteLength:4,components:1};case Xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function $0(n,t,e,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Jt,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return p?new OffscreenCanvas(T,y):Oa("canvas")}function x(T,y,A){let I=1,F=bt(T);if((F.width>A||F.height>A)&&(I=A/Math.max(F.width,F.height)),I<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let O=Math.floor(I*F.width),it=Math.floor(I*F.height);u===void 0&&(u=g(O,it));let Q=y?g(O,it):u;return Q.width=O,Q.height=it,Q.getContext("2d").drawImage(T,0,0,O,it),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+O+"x"+it+")."),Q}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){n.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(T,y,A,I,F=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let O=y;if(y===n.RED&&(A===n.FLOAT&&(O=n.R32F),A===n.HALF_FLOAT&&(O=n.R16F),A===n.UNSIGNED_BYTE&&(O=n.R8)),y===n.RED_INTEGER&&(A===n.UNSIGNED_BYTE&&(O=n.R8UI),A===n.UNSIGNED_SHORT&&(O=n.R16UI),A===n.UNSIGNED_INT&&(O=n.R32UI),A===n.BYTE&&(O=n.R8I),A===n.SHORT&&(O=n.R16I),A===n.INT&&(O=n.R32I)),y===n.RG&&(A===n.FLOAT&&(O=n.RG32F),A===n.HALF_FLOAT&&(O=n.RG16F),A===n.UNSIGNED_BYTE&&(O=n.RG8)),y===n.RG_INTEGER&&(A===n.UNSIGNED_BYTE&&(O=n.RG8UI),A===n.UNSIGNED_SHORT&&(O=n.RG16UI),A===n.UNSIGNED_INT&&(O=n.RG32UI),A===n.BYTE&&(O=n.RG8I),A===n.SHORT&&(O=n.RG16I),A===n.INT&&(O=n.RG32I)),y===n.RGB_INTEGER&&(A===n.UNSIGNED_BYTE&&(O=n.RGB8UI),A===n.UNSIGNED_SHORT&&(O=n.RGB16UI),A===n.UNSIGNED_INT&&(O=n.RGB32UI),A===n.BYTE&&(O=n.RGB8I),A===n.SHORT&&(O=n.RGB16I),A===n.INT&&(O=n.RGB32I)),y===n.RGBA_INTEGER&&(A===n.UNSIGNED_BYTE&&(O=n.RGBA8UI),A===n.UNSIGNED_SHORT&&(O=n.RGBA16UI),A===n.UNSIGNED_INT&&(O=n.RGBA32UI),A===n.BYTE&&(O=n.RGBA8I),A===n.SHORT&&(O=n.RGBA16I),A===n.INT&&(O=n.RGBA32I)),y===n.RGB&&A===n.UNSIGNED_INT_5_9_9_9_REV&&(O=n.RGB9_E5),y===n.RGBA){let it=F?hr:Zt.getTransfer(I);A===n.FLOAT&&(O=n.RGBA32F),A===n.HALF_FLOAT&&(O=n.RGBA16F),A===n.UNSIGNED_BYTE&&(O=it===re?n.SRGB8_ALPHA8:n.RGBA8),A===n.UNSIGNED_SHORT_4_4_4_4&&(O=n.RGBA4),A===n.UNSIGNED_SHORT_5_5_5_1&&(O=n.RGB5_A1)}return(O===n.R16F||O===n.R32F||O===n.RG16F||O===n.RG32F||O===n.RGBA16F||O===n.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function v(T,y){let A;return T?y===null||y===Tn||y===rs?A=n.DEPTH24_STENCIL8:y===pi?A=n.DEPTH32F_STENCIL8:y===Os&&(A=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Tn||y===rs?A=n.DEPTH_COMPONENT24:y===pi?A=n.DEPTH_COMPONENT32F:y===Os&&(A=n.DEPTH_COMPONENT16),A}function P(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Qe&&T.minFilter!==Si?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function E(T){let y=T.target;y.removeEventListener("dispose",E),C(y),y.isVideoTexture&&h.delete(y)}function R(T){let y=T.target;y.removeEventListener("dispose",R),M(y)}function C(T){let y=i.get(T);if(y.__webglInit===void 0)return;let A=T.source,I=f.get(A);if(I){let F=I[y.__cacheKey];F.usedTimes--,F.usedTimes===0&&w(T),Object.keys(I).length===0&&f.delete(A)}i.remove(T)}function w(T){let y=i.get(T);n.deleteTexture(y.__webglTexture);let A=T.source,I=f.get(A);delete I[y.__cacheKey],r.memory.textures--}function M(T){let y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(y.__webglFramebuffer[I]))for(let F=0;F<y.__webglFramebuffer[I].length;F++)n.deleteFramebuffer(y.__webglFramebuffer[I][F]);else n.deleteFramebuffer(y.__webglFramebuffer[I]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[I])}else{if(Array.isArray(y.__webglFramebuffer))for(let I=0;I<y.__webglFramebuffer.length;I++)n.deleteFramebuffer(y.__webglFramebuffer[I]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let I=0;I<y.__webglColorRenderbuffer.length;I++)y.__webglColorRenderbuffer[I]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[I]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let A=T.textures;for(let I=0,F=A.length;I<F;I++){let O=i.get(A[I]);O.__webglTexture&&(n.deleteTexture(O.__webglTexture),r.memory.textures--),i.remove(A[I])}i.remove(T)}let k=0;function G(){k=0}function B(){let T=k;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),k+=1,T}function W(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function Z(T,y){let A=i.get(T);if(T.isVideoTexture&&Et(T),T.isRenderTargetTexture===!1&&T.version>0&&A.__version!==T.version){let I=T.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(A,T,y);return}}e.bindTexture(n.TEXTURE_2D,A.__webglTexture,n.TEXTURE0+y)}function $(T,y){let A=i.get(T);if(T.version>0&&A.__version!==T.version){q(A,T,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,A.__webglTexture,n.TEXTURE0+y)}function j(T,y){let A=i.get(T);if(T.version>0&&A.__version!==T.version){q(A,T,y);return}e.bindTexture(n.TEXTURE_3D,A.__webglTexture,n.TEXTURE0+y)}function X(T,y){let A=i.get(T);if(T.version>0&&A.__version!==T.version){tt(A,T,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+y)}let at={[as]:n.REPEAT,[wn]:n.CLAMP_TO_EDGE,[Po]:n.MIRRORED_REPEAT},dt={[Qe]:n.NEAREST,[Kf]:n.NEAREST_MIPMAP_NEAREST,[ra]:n.NEAREST_MIPMAP_LINEAR,[Si]:n.LINEAR,[Or]:n.LINEAR_MIPMAP_NEAREST,[Fi]:n.LINEAR_MIPMAP_LINEAR},vt={[Zf]:n.NEVER,[id]:n.ALWAYS,[Jf]:n.LESS,[jh]:n.LEQUAL,[Qf]:n.EQUAL,[ed]:n.GEQUAL,[jf]:n.GREATER,[td]:n.NOTEQUAL};function Dt(T,y){if(y.type===pi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Si||y.magFilter===Or||y.magFilter===ra||y.magFilter===Fi||y.minFilter===Si||y.minFilter===Or||y.minFilter===ra||y.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,at[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,at[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,at[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,dt[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,dt[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,vt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Qe||y.minFilter!==ra&&y.minFilter!==Fi||y.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let A=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function te(T,y){let A=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",E));let I=y.source,F=f.get(I);F===void 0&&(F={},f.set(I,F));let O=W(y);if(O!==T.__cacheKey){F[O]===void 0&&(F[O]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,A=!0),F[O].usedTimes++;let it=F[T.__cacheKey];it!==void 0&&(F[T.__cacheKey].usedTimes--,it.usedTimes===0&&w(y)),T.__cacheKey=O,T.__webglTexture=F[O].texture}return A}function q(T,y,A){let I=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(I=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(I=n.TEXTURE_3D);let F=te(T,y),O=y.source;e.bindTexture(I,T.__webglTexture,n.TEXTURE0+A);let it=i.get(O);if(O.version!==it.__version||F===!0){e.activeTexture(n.TEXTURE0+A);let Q=Zt.getPrimaries(Zt.workingColorSpace),st=y.colorSpace===sn?null:Zt.getPrimaries(y.colorSpace),It=y.colorSpace===sn||Q===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let J=x(y.image,!1,s.maxTextureSize);J=se(y,J);let ut=a.convert(y.format,y.colorSpace),Tt=a.convert(y.type),Rt=S(y.internalFormat,ut,Tt,y.colorSpace,y.isVideoTexture);Dt(I,y);let pt,Ot=y.mipmaps,kt=y.isVideoTexture!==!0,Yt=it.__version===void 0||F===!0,L=O.dataReady,lt=P(y,J);if(y.isDepthTexture)Rt=v(y.format===os,y.type),Yt&&(kt?e.texStorage2D(n.TEXTURE_2D,1,Rt,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,Rt,J.width,J.height,0,ut,Tt,null));else if(y.isDataTexture)if(Ot.length>0){kt&&Yt&&e.texStorage2D(n.TEXTURE_2D,lt,Rt,Ot[0].width,Ot[0].height);for(let K=0,Y=Ot.length;K<Y;K++)pt=Ot[K],kt?L&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,pt.width,pt.height,ut,Tt,pt.data):e.texImage2D(n.TEXTURE_2D,K,Rt,pt.width,pt.height,0,ut,Tt,pt.data);y.generateMipmaps=!1}else kt?(Yt&&e.texStorage2D(n.TEXTURE_2D,lt,Rt,J.width,J.height),L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,ut,Tt,J.data)):e.texImage2D(n.TEXTURE_2D,0,Rt,J.width,J.height,0,ut,Tt,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){kt&&Yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,Rt,Ot[0].width,Ot[0].height,J.depth);for(let K=0,Y=Ot.length;K<Y;K++)if(pt=Ot[K],y.format!==ai)if(ut!==null)if(kt){if(L)if(y.layerUpdates.size>0){let ft=Rh(pt.width,pt.height,y.format,y.type);for(let ct of y.layerUpdates){let Ut=pt.data.subarray(ct*ft/pt.data.BYTES_PER_ELEMENT,(ct+1)*ft/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,ct,pt.width,pt.height,1,ut,Ut)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,pt.width,pt.height,J.depth,ut,pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Rt,pt.width,pt.height,J.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,pt.width,pt.height,J.depth,ut,Tt,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,Rt,pt.width,pt.height,J.depth,0,ut,Tt,pt.data)}else{kt&&Yt&&e.texStorage2D(n.TEXTURE_2D,lt,Rt,Ot[0].width,Ot[0].height);for(let K=0,Y=Ot.length;K<Y;K++)pt=Ot[K],y.format!==ai?ut!==null?kt?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,pt.width,pt.height,ut,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,K,Rt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?L&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,pt.width,pt.height,ut,Tt,pt.data):e.texImage2D(n.TEXTURE_2D,K,Rt,pt.width,pt.height,0,ut,Tt,pt.data)}else if(y.isDataArrayTexture)if(kt){if(Yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,lt,Rt,J.width,J.height,J.depth),L)if(y.layerUpdates.size>0){let K=Rh(J.width,J.height,y.format,y.type);for(let Y of y.layerUpdates){let ft=J.data.subarray(Y*K/J.data.BYTES_PER_ELEMENT,(Y+1)*K/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,J.width,J.height,1,ut,Tt,ft)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ut,Tt,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Rt,J.width,J.height,J.depth,0,ut,Tt,J.data);else if(y.isData3DTexture)kt?(Yt&&e.texStorage3D(n.TEXTURE_3D,lt,Rt,J.width,J.height,J.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ut,Tt,J.data)):e.texImage3D(n.TEXTURE_3D,0,Rt,J.width,J.height,J.depth,0,ut,Tt,J.data);else if(y.isFramebufferTexture){if(Yt)if(kt)e.texStorage2D(n.TEXTURE_2D,lt,Rt,J.width,J.height);else{let K=J.width,Y=J.height;for(let ft=0;ft<lt;ft++)e.texImage2D(n.TEXTURE_2D,ft,Rt,K,Y,0,ut,Tt,null),K>>=1,Y>>=1}}else if(Ot.length>0){if(kt&&Yt){let K=bt(Ot[0]);e.texStorage2D(n.TEXTURE_2D,lt,Rt,K.width,K.height)}for(let K=0,Y=Ot.length;K<Y;K++)pt=Ot[K],kt?L&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,ut,Tt,pt):e.texImage2D(n.TEXTURE_2D,K,Rt,ut,Tt,pt);y.generateMipmaps=!1}else if(kt){if(Yt){let K=bt(J);e.texStorage2D(n.TEXTURE_2D,lt,Rt,K.width,K.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,Tt,J)}else e.texImage2D(n.TEXTURE_2D,0,Rt,ut,Tt,J);m(y)&&d(I),it.__version=O.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function tt(T,y,A){if(y.image.length!==6)return;let I=te(T,y),F=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+A);let O=i.get(F);if(F.version!==O.__version||I===!0){e.activeTexture(n.TEXTURE0+A);let it=Zt.getPrimaries(Zt.workingColorSpace),Q=y.colorSpace===sn?null:Zt.getPrimaries(y.colorSpace),st=y.colorSpace===sn||it===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let It=y.isCompressedTexture||y.image[0].isCompressedTexture,J=y.image[0]&&y.image[0].isDataTexture,ut=[];for(let Y=0;Y<6;Y++)!It&&!J?ut[Y]=x(y.image[Y],!0,s.maxCubemapSize):ut[Y]=J?y.image[Y].image:y.image[Y],ut[Y]=se(y,ut[Y]);let Tt=ut[0],Rt=a.convert(y.format,y.colorSpace),pt=a.convert(y.type),Ot=S(y.internalFormat,Rt,pt,y.colorSpace),kt=y.isVideoTexture!==!0,Yt=O.__version===void 0||I===!0,L=F.dataReady,lt=P(y,Tt);Dt(n.TEXTURE_CUBE_MAP,y);let K;if(It){kt&&Yt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Ot,Tt.width,Tt.height);for(let Y=0;Y<6;Y++){K=ut[Y].mipmaps;for(let ft=0;ft<K.length;ft++){let ct=K[ft];y.format!==ai?Rt!==null?kt?L&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft,0,0,ct.width,ct.height,Rt,ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft,Ot,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft,0,0,ct.width,ct.height,Rt,pt,ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft,Ot,ct.width,ct.height,0,Rt,pt,ct.data)}}}else{if(K=y.mipmaps,kt&&Yt){K.length>0&&lt++;let Y=bt(ut[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Ot,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(J){kt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ut[Y].width,ut[Y].height,Rt,pt,ut[Y].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ot,ut[Y].width,ut[Y].height,0,Rt,pt,ut[Y].data);for(let ft=0;ft<K.length;ft++){let Ut=K[ft].image[Y].image;kt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft+1,0,0,Ut.width,Ut.height,Rt,pt,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft+1,Ot,Ut.width,Ut.height,0,Rt,pt,Ut.data)}}else{kt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Rt,pt,ut[Y]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ot,Rt,pt,ut[Y]);for(let ft=0;ft<K.length;ft++){let ct=K[ft];kt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft+1,0,0,Rt,pt,ct.image[Y]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft+1,Ot,Rt,pt,ct.image[Y])}}}m(y)&&d(n.TEXTURE_CUBE_MAP),O.__version=F.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function mt(T,y,A,I,F,O){let it=a.convert(A.format,A.colorSpace),Q=a.convert(A.type),st=S(A.internalFormat,it,Q,A.colorSpace),It=i.get(y),J=i.get(A);if(J.__renderTarget=y,!It.__hasExternalTextures){let ut=Math.max(1,y.width>>O),Tt=Math.max(1,y.height>>O);F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?e.texImage3D(F,O,st,ut,Tt,y.depth,0,it,Q,null):e.texImage2D(F,O,st,ut,Tt,0,it,Q,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),Kt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,I,F,J.__webglTexture,0,Xt(y)):(F===n.TEXTURE_2D||F>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,I,F,J.__webglTexture,O),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(T,y,A){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){let I=y.depthTexture,F=I&&I.isDepthTexture?I.type:null,O=v(y.stencilBuffer,F),it=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=Xt(y);Kt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,O,y.width,y.height):A?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,O,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,O,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,T)}else{let I=y.textures;for(let F=0;F<I.length;F++){let O=I[F],it=a.convert(O.format,O.colorSpace),Q=a.convert(O.type),st=S(O.internalFormat,it,Q,O.colorSpace),It=Xt(y);A&&Kt(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,It,st,y.width,y.height):Kt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It,st,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,st,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function At(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let I=i.get(y.depthTexture);I.__renderTarget=y,(!I.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);let F=I.__webglTexture,O=Xt(y);if(y.depthTexture.format===jn)Kt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0);else if(y.depthTexture.format===os)Kt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function Pt(T){let y=i.get(T),A=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let I=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),I){let F=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,I.removeEventListener("dispose",F)};I.addEventListener("dispose",F),y.__depthDisposeCallback=F}y.__boundDepthTexture=I}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(A)throw new Error("target.depthTexture not supported in Cube render targets");At(y.__webglFramebuffer,T)}else if(A){y.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[I]),y.__webglDepthbuffer[I]===void 0)y.__webglDepthbuffer[I]=n.createRenderbuffer(),ot(y.__webglDepthbuffer[I],T,!1);else{let F=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,O=y.__webglDepthbuffer[I];n.bindRenderbuffer(n.RENDERBUFFER,O),n.framebufferRenderbuffer(n.FRAMEBUFFER,F,n.RENDERBUFFER,O)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ot(y.__webglDepthbuffer,T,!1);else{let I=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,F),n.framebufferRenderbuffer(n.FRAMEBUFFER,I,n.RENDERBUFFER,F)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Gt(T,y,A){let I=i.get(T);y!==void 0&&mt(I.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),A!==void 0&&Pt(T)}function ue(T){let y=T.texture,A=i.get(T),I=i.get(y);T.addEventListener("dispose",R);let F=T.textures,O=T.isWebGLCubeRenderTarget===!0,it=F.length>1;if(it||(I.__webglTexture===void 0&&(I.__webglTexture=n.createTexture()),I.__version=y.version,r.memory.textures++),O){A.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0){A.__webglFramebuffer[Q]=[];for(let st=0;st<y.mipmaps.length;st++)A.__webglFramebuffer[Q][st]=n.createFramebuffer()}else A.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){A.__webglFramebuffer=[];for(let Q=0;Q<y.mipmaps.length;Q++)A.__webglFramebuffer[Q]=n.createFramebuffer()}else A.__webglFramebuffer=n.createFramebuffer();if(it)for(let Q=0,st=F.length;Q<st;Q++){let It=i.get(F[Q]);It.__webglTexture===void 0&&(It.__webglTexture=n.createTexture(),r.memory.textures++)}if(T.samples>0&&Kt(T)===!1){A.__webglMultisampledFramebuffer=n.createFramebuffer(),A.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let Q=0;Q<F.length;Q++){let st=F[Q];A.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,A.__webglColorRenderbuffer[Q]);let It=a.convert(st.format,st.colorSpace),J=a.convert(st.type),ut=S(st.internalFormat,It,J,st.colorSpace,T.isXRRenderTarget===!0),Tt=Xt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,ut,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,A.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(A.__webglDepthRenderbuffer=n.createRenderbuffer(),ot(A.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(O){e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture),Dt(n.TEXTURE_CUBE_MAP,y);for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0)for(let st=0;st<y.mipmaps.length;st++)mt(A.__webglFramebuffer[Q][st],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,st);else mt(A.__webglFramebuffer[Q],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(y)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){for(let Q=0,st=F.length;Q<st;Q++){let It=F[Q],J=i.get(It);e.bindTexture(n.TEXTURE_2D,J.__webglTexture),Dt(n.TEXTURE_2D,It),mt(A.__webglFramebuffer,T,It,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,0),m(It)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let Q=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,I.__webglTexture),Dt(Q,y),y.mipmaps&&y.mipmaps.length>0)for(let st=0;st<y.mipmaps.length;st++)mt(A.__webglFramebuffer[st],T,y,n.COLOR_ATTACHMENT0,Q,st);else mt(A.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,Q,0);m(y)&&d(Q),e.unbindTexture()}T.depthBuffer&&Pt(T)}function Wt(T){let y=T.textures;for(let A=0,I=y.length;A<I;A++){let F=y[A];if(m(F)){let O=_(T),it=i.get(F).__webglTexture;e.bindTexture(O,it),d(O),e.unbindTexture()}}}let fe=[],z=[];function Be(T){if(T.samples>0){if(Kt(T)===!1){let y=T.textures,A=T.width,I=T.height,F=n.COLOR_BUFFER_BIT,O=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=i.get(T),Q=y.length>1;if(Q)for(let st=0;st<y.length;st++)e.bindFramebuffer(n.FRAMEBUFFER,it.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,it.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,it.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let st=0;st<y.length;st++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(F|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(F|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,it.__webglColorRenderbuffer[st]);let It=i.get(y[st]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,It,0)}n.blitFramebuffer(0,0,A,I,0,0,A,I,F,n.NEAREST),c===!0&&(fe.length=0,z.length=0,fe.push(n.COLOR_ATTACHMENT0+st),T.depthBuffer&&T.resolveDepthBuffer===!1&&(fe.push(O),z.push(O),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let st=0;st<y.length;st++){e.bindFramebuffer(n.FRAMEBUFFER,it.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,it.__webglColorRenderbuffer[st]);let It=i.get(y[st]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,it.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.TEXTURE_2D,It,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,it.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Xt(T){return Math.min(s.maxSamples,T.samples)}function Kt(T){let y=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Et(T){let y=r.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function se(T,y){let A=T.colorSpace,I=T.format,F=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||A!==ms&&A!==sn&&(Zt.getTransfer(A)===re?(I!==ai||F!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",A)),y}function bt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=Z,this.setTexture2DArray=$,this.setTexture3D=j,this.setTextureCube=X,this.rebindTextures=Gt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Kt}function q0(n,t){function e(i,s=sn){let a,r=Zt.getTransfer(s);if(i===Hi)return n.UNSIGNED_BYTE;if(i===Nl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gh)return n.BYTE;if(i===Wh)return n.SHORT;if(i===Os)return n.UNSIGNED_SHORT;if(i===zl)return n.INT;if(i===Tn)return n.UNSIGNED_INT;if(i===pi)return n.FLOAT;if(i===Ks)return n.HALF_FLOAT;if(i===Kh)return n.ALPHA;if(i===$h)return n.RGB;if(i===ai)return n.RGBA;if(i===qh)return n.LUMINANCE;if(i===Yh)return n.LUMINANCE_ALPHA;if(i===jn)return n.DEPTH_COMPONENT;if(i===os)return n.DEPTH_STENCIL;if(i===Ol)return n.RED;if(i===Bl)return n.RED_INTEGER;if(i===Zh)return n.RG;if(i===Hl)return n.RG_INTEGER;if(i===Vl)return n.RGBA_INTEGER;if(i===Ia||i===La||i===Da||i===Ua)if(r===re)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ia)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===La)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ia)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===La)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Da)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ua)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Io||i===Lo||i===Do||i===Uo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Io)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Do)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zo||i===No||i===Fo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===zo||i===No)return r===re?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Fo)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Oo||i===Bo||i===Ho||i===Vo||i===Go||i===Wo||i===Xo||i===Ko||i===$o||i===qo||i===Yo||i===Zo||i===Jo||i===Qo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Oo)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bo)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ho)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vo)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Go)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wo)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xo)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ko)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$o)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qo)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yo)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zo)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jo)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qo)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===za||i===jo||i===tl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===za)return r===re?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jh||i===el||i===il||i===nl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===za)return a.COMPRESSED_RED_RGTC1_EXT;if(i===el)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===il)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var _l=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},mi=class extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},Y0={type:"move"},Fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,r=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Y0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new mi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J0=`
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

}`,vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new qe,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ri({vertexShader:Z0,fragmentShader:J0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new ti(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ml=class extends ln{constructor(t,e){super();let i=this,s=null,a=1,r=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null,x=new vl,m=e.getContextAttributes(),d=null,_=null,S=[],v=[],P=new Jt,E=null,R=new Ve;R.viewport=new me;let C=new Ve;C.viewport=new me;let w=[R,C],M=new _l,k=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=S[q];return tt===void 0&&(tt=new Fs,S[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=S[q];return tt===void 0&&(tt=new Fs,S[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=S[q];return tt===void 0&&(tt=new Fs,S[q]=tt),tt.getHandSpace()};function B(q){let tt=v.indexOf(q.inputSource);if(tt===-1)return;let mt=S[tt];mt!==void 0&&(mt.update(q.inputSource,q.frame,l||r),mt.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Z);for(let q=0;q<S.length;q++){let tt=v[q];tt!==null&&(v[q]=null,S[q].disconnect(tt))}k=null,G=null,x.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,_=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Vi(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,mt=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?os:jn,mt=m.stencil?rs:Tn);let At={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:a};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(At),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Vi(f.textureWidth,f.textureHeight,{format:ai,type:Hi,depthTexture:new qa(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(o),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(q){for(let tt=0;tt<q.removed.length;tt++){let mt=q.removed[tt],ot=v.indexOf(mt);ot>=0&&(v[ot]=null,S[ot].disconnect(mt))}for(let tt=0;tt<q.added.length;tt++){let mt=q.added[tt],ot=v.indexOf(mt);if(ot===-1){for(let Pt=0;Pt<S.length;Pt++)if(Pt>=v.length){v.push(mt),ot=Pt;break}else if(v[Pt]===null){v[Pt]=mt,ot=Pt;break}if(ot===-1)break}let At=S[ot];At&&At.connect(mt)}}let $=new D,j=new D;function X(q,tt,mt){$.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(mt.matrixWorld);let ot=$.distanceTo(j),At=tt.projectionMatrix.elements,Pt=mt.projectionMatrix.elements,Gt=At[14]/(At[10]-1),ue=At[14]/(At[10]+1),Wt=(At[9]+1)/At[5],fe=(At[9]-1)/At[5],z=(At[8]-1)/At[0],Be=(Pt[8]+1)/Pt[0],Xt=Gt*z,Kt=Gt*Be,Et=ot/(-z+Be),se=Et*-z;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(se),q.translateZ(Et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),At[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let bt=Gt+Et,T=ue+Et,y=Xt-se,A=Kt+(ot-se),I=Wt*ue/T*bt,F=fe*ue/T*bt;q.projectionMatrix.makePerspective(y,A,I,F,bt,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function at(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let tt=q.near,mt=q.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(mt=x.depthFar)),M.near=C.near=R.near=tt,M.far=C.far=R.far=mt,(k!==M.near||G!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),k=M.near,G=M.far),R.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,M.layers.mask=R.layers.mask|C.layers.mask;let ot=q.parent,At=M.cameras;at(M,ot);for(let Pt=0;Pt<At.length;Pt++)at(At[Pt],ot);At.length===2?X(M,R,C):M.projectionMatrix.copy(R.projectionMatrix),dt(q,M,ot)};function dt(q,tt,mt){mt===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(mt.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=al*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let vt=null;function Dt(q,tt){if(h=tt.getViewerPose(l||r),g=tt,h!==null){let mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let ot=!1;mt.length!==M.cameras.length&&(M.cameras.length=0,ot=!0);for(let Pt=0;Pt<mt.length;Pt++){let Gt=mt[Pt],ue=null;if(p!==null)ue=p.getViewport(Gt);else{let fe=u.getViewSubImage(f,Gt);ue=fe.viewport,Pt===0&&(t.setRenderTargetTextures(_,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(_))}let Wt=w[Pt];Wt===void 0&&(Wt=new Ve,Wt.layers.enable(Pt),Wt.viewport=new me,w[Pt]=Wt),Wt.matrix.fromArray(Gt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Gt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ue.x,ue.y,ue.width,ue.height),Pt===0&&(M.matrix.copy(Wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ot===!0&&M.cameras.push(Wt)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){let Pt=u.getDepthInformation(mt[0]);Pt&&Pt.isValid&&Pt.texture&&x.init(t,Pt,s.renderState)}}for(let mt=0;mt<S.length;mt++){let ot=v[mt],At=S[mt];ot!==null&&At!==void 0&&At.update(ot,tt,l||r)}vt&&vt(q,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}let te=new nu;te.setAnimationLoop(Dt),this.setAnimationLoop=function(q){vt=q},this.dispose=function(){}}},_n=new Ei,Q0=new $t;function j0(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,iu(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,_,S,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(m,d):d.isMeshToonMaterial?(a(m,d),u(m,d)):d.isMeshPhongMaterial?(a(m,d),h(m,d)):d.isMeshStandardMaterial?(a(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(a(m,d),g(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),x(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,_,S):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ne&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ne&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _=t.get(d),S=_.envMap,v=_.envMapRotation;S&&(m.envMap.value=S,_n.copy(v),_n.x*=-1,_n.y*=-1,_n.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(_n.y*=-1,_n.z*=-1),m.envMapRotation.value.setFromMatrix4(Q0.makeRotationFromEuler(_n)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,_,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=S*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ne&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let _=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function tx(n,t,e,i){let s={},a={},r=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,S){let v=S.program;i.uniformBlockBinding(_,v)}function l(_,S){let v=s[_.id];v===void 0&&(g(_),v=h(_),s[_.id]=v,_.addEventListener("dispose",m));let P=S.program;i.updateUBOMapping(_,P);let E=t.render.frame;a[_.id]!==E&&(f(_),a[_.id]=E)}function h(_){let S=u();_.__bindingPointIndex=S;let v=n.createBuffer(),P=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,P,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,v),v}function u(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let S=s[_.id],v=_.uniforms,P=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let E=0,R=v.length;E<R;E++){let C=Array.isArray(v[E])?v[E]:[v[E]];for(let w=0,M=C.length;w<M;w++){let k=C[w];if(p(k,E,w,P)===!0){let G=k.__offset,B=Array.isArray(k.value)?k.value:[k.value],W=0;for(let Z=0;Z<B.length;Z++){let $=B[Z],j=x($);typeof $=="number"||typeof $=="boolean"?(k.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,G+W,k.__data)):$.isMatrix3?(k.__data[0]=$.elements[0],k.__data[1]=$.elements[1],k.__data[2]=$.elements[2],k.__data[3]=0,k.__data[4]=$.elements[3],k.__data[5]=$.elements[4],k.__data[6]=$.elements[5],k.__data[7]=0,k.__data[8]=$.elements[6],k.__data[9]=$.elements[7],k.__data[10]=$.elements[8],k.__data[11]=0):($.toArray(k.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,S,v,P){let E=_.value,R=S+"_"+v;if(P[R]===void 0)return typeof E=="number"||typeof E=="boolean"?P[R]=E:P[R]=E.clone(),!0;{let C=P[R];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return P[R]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(_){let S=_.uniforms,v=0,P=16;for(let R=0,C=S.length;R<C;R++){let w=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,k=w.length;M<k;M++){let G=w[M],B=Array.isArray(G.value)?G.value:[G.value];for(let W=0,Z=B.length;W<Z;W++){let $=B[W],j=x($),X=v%P,at=X%j.boundary,dt=X+at;v+=at,dt!==0&&P-dt<j.storage&&(v+=P-dt),G.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=j.storage}}}let E=v%P;return E>0&&(v+=P-E),_.__size=v,_.__cache={},this}function x(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),S}function m(_){let S=_.target;S.removeEventListener("dispose",m);let v=r.indexOf(S.__bindingPointIndex);r.splice(v,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete a[S.id]}function d(){for(let _ in s)n.deleteBuffer(s[_]);r=[],s={},a={}}return{bind:c,update:l,dispose:d}}var Ya=class{constructor(t={}){let{canvas:e=sd(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,_=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this.toneMapping=rn,this.toneMappingExposure=1;let v=this,P=!1,E=0,R=0,C=null,w=-1,M=null,k=new me,G=new me,B=null,W=new Ht(0),Z=0,$=e.width,j=e.height,X=1,at=null,dt=null,vt=new me(0,0,$,j),Dt=new me(0,0,$,j),te=!1,q=new Hs,tt=!1,mt=!1,ot=new $t,At=new $t,Pt=new D,Gt=new me,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function fe(){return C===null?X:1}let z=i;function Be(b,U){return e.getContext(b,U)}try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dl}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ct,!1),z===null){let U="webgl2";if(z=Be(U,b),z===null)throw Be(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Xt,Kt,Et,se,bt,T,y,A,I,F,O,it,Q,st,It,J,ut,Tt,Rt,pt,Ot,kt,Yt,L;function lt(){Xt=new gg(z),Xt.init(),kt=new q0(z,Xt),Kt=new hg(z,Xt,t,kt),Et=new X0(z,Xt),Kt.reverseDepthBuffer&&f&&Et.buffers.depth.setReversed(!0),se=new _g(z),bt=new I0,T=new $0(z,Xt,Et,bt,Kt,kt,se),y=new fg(v),A=new mg(v),I=new Ed(z),Yt=new lg(z,I),F=new xg(z,I,se,Yt),O=new Mg(z,F,I,se),Rt=new vg(z,Kt,T),J=new ug(bt),it=new P0(v,y,A,Xt,Kt,Yt,J),Q=new j0(v,bt),st=new D0,It=new B0(Xt),Tt=new og(v,y,A,Et,O,p,c),ut=new G0(v,O,Kt),L=new tx(z,se,Kt,Et),pt=new cg(z,Xt,se),Ot=new yg(z,Xt,se),se.programs=it.programs,v.capabilities=Kt,v.extensions=Xt,v.properties=bt,v.renderLists=st,v.shadowMap=ut,v.state=Et,v.info=se}lt();let K=new Ml(v,z);this.xr=K,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let b=Xt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Xt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize($,j,!1))},this.getSize=function(b){return b.set($,j)},this.setSize=function(b,U,H=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,j=U,e.width=Math.floor(b*X),e.height=Math.floor(U*X),H===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set($*X,j*X).floor()},this.setDrawingBufferSize=function(b,U,H){$=b,j=U,X=H,e.width=Math.floor(b*H),e.height=Math.floor(U*H),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(k)},this.getViewport=function(b){return b.copy(vt)},this.setViewport=function(b,U,H,V){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,U,H,V),Et.viewport(k.copy(vt).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(Dt)},this.setScissor=function(b,U,H,V){b.isVector4?Dt.set(b.x,b.y,b.z,b.w):Dt.set(b,U,H,V),Et.scissor(G.copy(Dt).multiplyScalar(X).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(b){Et.setScissorTest(te=b)},this.setOpaqueSort=function(b){at=b},this.setTransparentSort=function(b){dt=b},this.getClearColor=function(b){return b.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(b=!0,U=!0,H=!0){let V=0;if(b){let N=!1;if(C!==null){let et=C.texture.format;N=et===Vl||et===Hl||et===Bl}if(N){let et=C.texture.type,ht=et===Hi||et===Tn||et===Os||et===rs||et===Nl||et===Fl,xt=Tt.getClearColor(),yt=Tt.getClearAlpha(),Lt=xt.r,zt=xt.g,_t=xt.b;ht?(g[0]=Lt,g[1]=zt,g[2]=_t,g[3]=yt,z.clearBufferuiv(z.COLOR,0,g)):(x[0]=Lt,x[1]=zt,x[2]=_t,x[3]=yt,z.clearBufferiv(z.COLOR,0,x))}else V|=z.COLOR_BUFFER_BIT}U&&(V|=z.DEPTH_BUFFER_BIT),H&&(V|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),st.dispose(),It.dispose(),bt.dispose(),y.dispose(),A.dispose(),O.dispose(),Yt.dispose(),L.dispose(),it.dispose(),K.dispose(),K.removeEventListener("sessionstart",vc),K.removeEventListener("sessionend",Mc),dn.stop()};function Y(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let b=se.autoReset,U=ut.enabled,H=ut.autoUpdate,V=ut.needsUpdate,N=ut.type;lt(),se.autoReset=b,ut.enabled=U,ut.autoUpdate=H,ut.needsUpdate=V,ut.type=N}function ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ut(b){let U=b.target;U.removeEventListener("dispose",Ut),_e(U)}function _e(b){De(b),bt.remove(b)}function De(b){let U=bt.get(b).programs;U!==void 0&&(U.forEach(function(H){it.releaseProgram(H)}),b.isShaderMaterial&&it.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,H,V,N,et){U===null&&(U=ue);let ht=N.isMesh&&N.matrixWorld.determinant()<0,xt=ff(b,U,H,V,N);Et.setMaterial(V,ht);let yt=H.index,Lt=1;if(V.wireframe===!0){if(yt=F.getWireframeAttribute(H),yt===void 0)return;Lt=2}let zt=H.drawRange,_t=H.attributes.position,jt=zt.start*Lt,ce=(zt.start+zt.count)*Lt;et!==null&&(jt=Math.max(jt,et.start*Lt),ce=Math.min(ce,(et.start+et.count)*Lt)),yt!==null?(jt=Math.max(jt,0),ce=Math.min(ce,yt.count)):_t!=null&&(jt=Math.max(jt,0),ce=Math.min(ce,_t.count));let de=ce-jt;if(de<0||de===1/0)return;Yt.setup(N,V,xt,H,yt);let Xe,ee=pt;if(yt!==null&&(Xe=I.get(yt),ee=Ot,ee.setIndex(Xe)),N.isMesh)V.wireframe===!0?(Et.setLineWidth(V.wireframeLinewidth*fe()),ee.setMode(z.LINES)):ee.setMode(z.TRIANGLES);else if(N.isLine){let Mt=V.linewidth;Mt===void 0&&(Mt=1),Et.setLineWidth(Mt*fe()),N.isLineSegments?ee.setMode(z.LINES):N.isLineLoop?ee.setMode(z.LINE_LOOP):ee.setMode(z.LINE_STRIP)}else N.isPoints?ee.setMode(z.POINTS):N.isSprite&&ee.setMode(z.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ee.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Mt=N._multiDrawStarts,Ci=N._multiDrawCounts,ie=N._multiDrawCount,ci=yt?I.get(yt).bytesPerElement:1,Un=bt.get(V).currentProgram.getUniforms();for(let Ye=0;Ye<ie;Ye++)Un.setValue(z,"_gl_DrawID",Ye),ee.render(Mt[Ye]/ci,Ci[Ye])}else if(N.isInstancedMesh)ee.renderInstances(jt,de,N.count);else if(H.isInstancedBufferGeometry){let Mt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ci=Math.min(H.instanceCount,Mt);ee.renderInstances(jt,de,Ci)}else ee.render(jt,de)};function ae(b,U,H){b.transparent===!0&&b.side===di&&b.forceSinglePass===!1?(b.side=Ne,b.needsUpdate=!0,aa(b,U,H),b.side=on,b.needsUpdate=!0,aa(b,U,H),b.side=di):aa(b,U,H)}this.compile=function(b,U,H=null){H===null&&(H=b),d=It.get(H),d.init(U),S.push(d),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),b!==H&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();let V=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let et=N.material;if(et)if(Array.isArray(et))for(let ht=0;ht<et.length;ht++){let xt=et[ht];ae(xt,H,N),V.add(xt)}else ae(et,H,N),V.add(et)}),S.pop(),d=null,V},this.compileAsync=function(b,U,H=null){let V=this.compile(b,U,H);return new Promise(N=>{function et(){if(V.forEach(function(ht){bt.get(ht).currentProgram.isReady()&&V.delete(ht)}),V.size===0){N(b);return}setTimeout(et,10)}Xt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let li=null;function ki(b){li&&li(b)}function vc(){dn.stop()}function Mc(){dn.start()}let dn=new nu;dn.setAnimationLoop(ki),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(b){li=b,K.setAnimationLoop(b),b===null?dn.stop():dn.start()},K.addEventListener("sessionstart",vc),K.addEventListener("sessionend",Mc),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(U),U=K.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,U,C),d=It.get(b,S.length),d.init(U),S.push(d),At.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(At),mt=this.localClippingEnabled,tt=J.init(this.clippingPlanes,mt),m=st.get(b,_.length),m.init(),_.push(m),K.enabled===!0&&K.isPresenting===!0){let et=v.xr.getDepthSensingMesh();et!==null&&Fr(et,U,-1/0,v.sortObjects)}Fr(b,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(at,dt),Wt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Wt&&Tt.addToRenderList(m,b),this.info.render.frame++,tt===!0&&J.beginShadows();let H=d.state.shadowsArray;ut.render(H,b,U),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,N=m.transmissive;if(d.setupLights(),U.isArrayCamera){let et=U.cameras;if(N.length>0)for(let ht=0,xt=et.length;ht<xt;ht++){let yt=et[ht];Sc(V,N,b,yt)}Wt&&Tt.render(b);for(let ht=0,xt=et.length;ht<xt;ht++){let yt=et[ht];bc(m,b,yt,yt.viewport)}}else N.length>0&&Sc(V,N,b,U),Wt&&Tt.render(b),bc(m,b,U);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(v,b,U),Yt.resetDefaultState(),w=-1,M=null,S.pop(),S.length>0?(d=S[S.length-1],tt===!0&&J.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Fr(b,U,H,V){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){V&&Gt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(At);let ht=O.update(b),xt=b.material;xt.visible&&m.push(b,ht,xt,H,Gt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){let ht=O.update(b),xt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Gt.copy(b.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Gt.copy(ht.boundingSphere.center)),Gt.applyMatrix4(b.matrixWorld).applyMatrix4(At)),Array.isArray(xt)){let yt=ht.groups;for(let Lt=0,zt=yt.length;Lt<zt;Lt++){let _t=yt[Lt],jt=xt[_t.materialIndex];jt&&jt.visible&&m.push(b,ht,jt,H,Gt.z,_t)}}else xt.visible&&m.push(b,ht,xt,H,Gt.z,null)}}let et=b.children;for(let ht=0,xt=et.length;ht<xt;ht++)Fr(et[ht],U,H,V)}function bc(b,U,H,V){let N=b.opaque,et=b.transmissive,ht=b.transparent;d.setupLightsView(H),tt===!0&&J.setGlobalState(v.clippingPlanes,H),V&&Et.viewport(k.copy(V)),N.length>0&&sa(N,U,H),et.length>0&&sa(et,U,H),ht.length>0&&sa(ht,U,H),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Sc(b,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new Vi(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?Ks:Hi,minFilter:Fi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let et=d.state.transmissionRenderTarget[V.id],ht=V.viewport||k;et.setSize(ht.z,ht.w);let xt=v.getRenderTarget();v.setRenderTarget(et),v.getClearColor(W),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),Wt&&Tt.render(H);let yt=v.toneMapping;v.toneMapping=rn;let Lt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),tt===!0&&J.setGlobalState(v.clippingPlanes,V),sa(b,H,V),T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let _t=0,jt=U.length;_t<jt;_t++){let ce=U[_t],de=ce.object,Xe=ce.geometry,ee=ce.material,Mt=ce.group;if(ee.side===di&&de.layers.test(V.layers)){let Ci=ee.side;ee.side=Ne,ee.needsUpdate=!0,wc(de,H,V,Xe,ee,Mt),ee.side=Ci,ee.needsUpdate=!0,zt=!0}}zt===!0&&(T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et))}v.setRenderTarget(xt),v.setClearColor(W,Z),Lt!==void 0&&(V.viewport=Lt),v.toneMapping=yt}function sa(b,U,H){let V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,et=b.length;N<et;N++){let ht=b[N],xt=ht.object,yt=ht.geometry,Lt=V===null?ht.material:V,zt=ht.group;xt.layers.test(H.layers)&&wc(xt,U,H,yt,Lt,zt)}}function wc(b,U,H,V,N,et){b.onBeforeRender(v,U,H,V,N,et),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(v,U,H,V,b,et),N.transparent===!0&&N.side===di&&N.forceSinglePass===!1?(N.side=Ne,N.needsUpdate=!0,v.renderBufferDirect(H,U,V,N,b,et),N.side=on,N.needsUpdate=!0,v.renderBufferDirect(H,U,V,N,b,et),N.side=di):v.renderBufferDirect(H,U,V,N,b,et),b.onAfterRender(v,U,H,V,N,et)}function aa(b,U,H){U.isScene!==!0&&(U=ue);let V=bt.get(b),N=d.state.lights,et=d.state.shadowsArray,ht=N.state.version,xt=it.getParameters(b,N.state,et,U,H),yt=it.getProgramCacheKey(xt),Lt=V.programs;V.environment=b.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(b.isMeshStandardMaterial?A:y).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",Ut),Lt=new Map,V.programs=Lt);let zt=Lt.get(yt);if(zt!==void 0){if(V.currentProgram===zt&&V.lightsStateVersion===ht)return Ec(b,xt),zt}else xt.uniforms=it.getUniforms(b),b.onBeforeCompile(xt,v),zt=it.acquireProgram(xt,yt),Lt.set(yt,zt),V.uniforms=xt.uniforms;let _t=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(_t.clippingPlanes=J.uniform),Ec(b,xt),V.needsLights=pf(b),V.lightsStateVersion=ht,V.needsLights&&(_t.ambientLightColor.value=N.state.ambient,_t.lightProbe.value=N.state.probe,_t.directionalLights.value=N.state.directional,_t.directionalLightShadows.value=N.state.directionalShadow,_t.spotLights.value=N.state.spot,_t.spotLightShadows.value=N.state.spotShadow,_t.rectAreaLights.value=N.state.rectArea,_t.ltc_1.value=N.state.rectAreaLTC1,_t.ltc_2.value=N.state.rectAreaLTC2,_t.pointLights.value=N.state.point,_t.pointLightShadows.value=N.state.pointShadow,_t.hemisphereLights.value=N.state.hemi,_t.directionalShadowMap.value=N.state.directionalShadowMap,_t.directionalShadowMatrix.value=N.state.directionalShadowMatrix,_t.spotShadowMap.value=N.state.spotShadowMap,_t.spotLightMatrix.value=N.state.spotLightMatrix,_t.spotLightMap.value=N.state.spotLightMap,_t.pointShadowMap.value=N.state.pointShadowMap,_t.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=zt,V.uniformsList=null,zt}function Tc(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=es.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Ec(b,U){let H=bt.get(b);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function ff(b,U,H,V,N){U.isScene!==!0&&(U=ue),T.resetTextureUnits();let et=U.fog,ht=V.isMeshStandardMaterial?U.environment:null,xt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ms,yt=(V.isMeshStandardMaterial?A:y).get(V.envMap||ht),Lt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,zt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),_t=!!H.morphAttributes.position,jt=!!H.morphAttributes.normal,ce=!!H.morphAttributes.color,de=rn;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(de=v.toneMapping);let Xe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ee=Xe!==void 0?Xe.length:0,Mt=bt.get(V),Ci=d.state.lights;if(tt===!0&&(mt===!0||b!==M)){let ni=b===M&&V.id===w;J.setState(V,b,ni)}let ie=!1;V.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Ci.state.version||Mt.outputColorSpace!==xt||N.isBatchedMesh&&Mt.batching===!1||!N.isBatchedMesh&&Mt.batching===!0||N.isBatchedMesh&&Mt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Mt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Mt.instancing===!1||!N.isInstancedMesh&&Mt.instancing===!0||N.isSkinnedMesh&&Mt.skinning===!1||!N.isSkinnedMesh&&Mt.skinning===!0||N.isInstancedMesh&&Mt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Mt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Mt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Mt.instancingMorph===!1&&N.morphTexture!==null||Mt.envMap!==yt||V.fog===!0&&Mt.fog!==et||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==J.numPlanes||Mt.numIntersection!==J.numIntersection)||Mt.vertexAlphas!==Lt||Mt.vertexTangents!==zt||Mt.morphTargets!==_t||Mt.morphNormals!==jt||Mt.morphColors!==ce||Mt.toneMapping!==de||Mt.morphTargetsCount!==ee)&&(ie=!0):(ie=!0,Mt.__version=V.version);let ci=Mt.currentProgram;ie===!0&&(ci=aa(V,U,N));let Un=!1,Ye=!1,Es=!1,pe=ci.getUniforms(),Mi=Mt.uniforms;if(Et.useProgram(ci.program)&&(Un=!0,Ye=!0,Es=!0),V.id!==w&&(w=V.id,Ye=!0),Un||M!==b){Et.buffers.depth.getReversed()?(ot.copy(b.projectionMatrix),rd(ot),od(ot),pe.setValue(z,"projectionMatrix",ot)):pe.setValue(z,"projectionMatrix",b.projectionMatrix),pe.setValue(z,"viewMatrix",b.matrixWorldInverse);let Yi=pe.map.cameraPosition;Yi!==void 0&&Yi.setValue(z,Pt.setFromMatrixPosition(b.matrixWorld)),Kt.logarithmicDepthBuffer&&pe.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pe.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ye=!0,Es=!0)}if(N.isSkinnedMesh){pe.setOptional(z,N,"bindMatrix"),pe.setOptional(z,N,"bindMatrixInverse");let ni=N.skeleton;ni&&(ni.boneTexture===null&&ni.computeBoneTexture(),pe.setValue(z,"boneTexture",ni.boneTexture,T))}N.isBatchedMesh&&(pe.setOptional(z,N,"batchingTexture"),pe.setValue(z,"batchingTexture",N._matricesTexture,T),pe.setOptional(z,N,"batchingIdTexture"),pe.setValue(z,"batchingIdTexture",N._indirectTexture,T),pe.setOptional(z,N,"batchingColorTexture"),N._colorsTexture!==null&&pe.setValue(z,"batchingColorTexture",N._colorsTexture,T));let As=H.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0)&&Rt.update(N,H,ci),(Ye||Mt.receiveShadow!==N.receiveShadow)&&(Mt.receiveShadow=N.receiveShadow,pe.setValue(z,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Mi.envMap.value=yt,Mi.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Mi.envMapIntensity.value=U.environmentIntensity),Ye&&(pe.setValue(z,"toneMappingExposure",v.toneMappingExposure),Mt.needsLights&&df(Mi,Es),et&&V.fog===!0&&Q.refreshFogUniforms(Mi,et),Q.refreshMaterialUniforms(Mi,V,X,j,d.state.transmissionRenderTarget[b.id]),es.upload(z,Tc(Mt),Mi,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(es.upload(z,Tc(Mt),Mi,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pe.setValue(z,"center",N.center),pe.setValue(z,"modelViewMatrix",N.modelViewMatrix),pe.setValue(z,"normalMatrix",N.normalMatrix),pe.setValue(z,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let ni=V.uniformsGroups;for(let Yi=0,Zi=ni.length;Yi<Zi;Yi++){let Ac=ni[Yi];L.update(Ac,ci),L.bind(Ac,ci)}}return ci}function df(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function pf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,U,H){bt.get(b.texture).__webglTexture=U,bt.get(b.depthTexture).__webglTexture=H;let V=bt.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){let H=bt.get(b);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,H=0){C=b,E=U,R=H;let V=!0,N=null,et=!1,ht=!1;if(b){let yt=bt.get(b);if(yt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(z.FRAMEBUFFER,null),V=!1;else if(yt.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(yt.__hasExternalTextures)T.rebindTextures(b,bt.get(b.texture).__webglTexture,bt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let _t=b.depthTexture;if(yt.__boundDepthTexture!==_t){if(_t!==null&&bt.has(_t)&&(b.width!==_t.image.width||b.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}let Lt=b.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ht=!0);let zt=bt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(zt[U])?N=zt[U][H]:N=zt[U],et=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?N=bt.get(b).__webglMultisampledFramebuffer:Array.isArray(zt)?N=zt[H]:N=zt,k.copy(b.viewport),G.copy(b.scissor),B=b.scissorTest}else k.copy(vt).multiplyScalar(X).floor(),G.copy(Dt).multiplyScalar(X).floor(),B=te;if(Et.bindFramebuffer(z.FRAMEBUFFER,N)&&V&&Et.drawBuffers(b,N),Et.viewport(k),Et.scissor(G),Et.setScissorTest(B),et){let yt=bt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,H)}else if(ht){let yt=bt.get(b.texture),Lt=U||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,yt.__webglTexture,H||0,Lt)}w=-1},this.readRenderTargetPixels=function(b,U,H,V,N,et,ht){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ht!==void 0&&(xt=xt[ht]),xt){Et.bindFramebuffer(z.FRAMEBUFFER,xt);try{let yt=b.texture,Lt=yt.format,zt=yt.type;if(!Kt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-V&&H>=0&&H<=b.height-N&&z.readPixels(U,H,V,N,kt.convert(Lt),kt.convert(zt),et)}finally{let yt=C!==null?bt.get(C).__webglFramebuffer:null;Et.bindFramebuffer(z.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(b,U,H,V,N,et,ht){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ht!==void 0&&(xt=xt[ht]),xt){let yt=b.texture,Lt=yt.format,zt=yt.type;if(!Kt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-V&&H>=0&&H<=b.height-N){Et.bindFramebuffer(z.FRAMEBUFFER,xt);let _t=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,_t),z.bufferData(z.PIXEL_PACK_BUFFER,et.byteLength,z.STREAM_READ),z.readPixels(U,H,V,N,kt.convert(Lt),kt.convert(zt),0);let jt=C!==null?bt.get(C).__webglFramebuffer:null;Et.bindFramebuffer(z.FRAMEBUFFER,jt);let ce=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ad(z,ce,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,_t),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,et),z.deleteBuffer(_t),z.deleteSync(ce),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,H=0){b.isTexture!==!0&&(zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);let V=Math.pow(2,-H),N=Math.floor(b.image.width*V),et=Math.floor(b.image.height*V),ht=U!==null?U.x:0,xt=U!==null?U.y:0;T.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,H,0,0,ht,xt,N,et),Et.unbindTexture()},this.copyTextureToTexture=function(b,U,H=null,V=null,N=0){b.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,H=null);let et,ht,xt,yt,Lt,zt,_t,jt,ce,de=b.isCompressedTexture?b.mipmaps[N]:b.image;H!==null?(et=H.max.x-H.min.x,ht=H.max.y-H.min.y,xt=H.isBox3?H.max.z-H.min.z:1,yt=H.min.x,Lt=H.min.y,zt=H.isBox3?H.min.z:0):(et=de.width,ht=de.height,xt=de.depth||1,yt=0,Lt=0,zt=0),V!==null?(_t=V.x,jt=V.y,ce=V.z):(_t=0,jt=0,ce=0);let Xe=kt.convert(U.format),ee=kt.convert(U.type),Mt;U.isData3DTexture?(T.setTexture3D(U,0),Mt=z.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),Mt=z.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),Mt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment);let Ci=z.getParameter(z.UNPACK_ROW_LENGTH),ie=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ci=z.getParameter(z.UNPACK_SKIP_PIXELS),Un=z.getParameter(z.UNPACK_SKIP_ROWS),Ye=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,de.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,de.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,yt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Lt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,zt);let Es=b.isDataArrayTexture||b.isData3DTexture,pe=U.isDataArrayTexture||U.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let Mi=bt.get(b),As=bt.get(U),ni=bt.get(Mi.__renderTarget),Yi=bt.get(As.__renderTarget);Et.bindFramebuffer(z.READ_FRAMEBUFFER,ni.__webglFramebuffer),Et.bindFramebuffer(z.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let Zi=0;Zi<xt;Zi++)Es&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,bt.get(b).__webglTexture,N,zt+Zi),b.isDepthTexture?(pe&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,bt.get(U).__webglTexture,N,ce+Zi),z.blitFramebuffer(yt,Lt,et,ht,_t,jt,et,ht,z.DEPTH_BUFFER_BIT,z.NEAREST)):pe?z.copyTexSubImage3D(Mt,N,_t,jt,ce+Zi,yt,Lt,et,ht):z.copyTexSubImage2D(Mt,N,_t,jt,ce+Zi,yt,Lt,et,ht);Et.bindFramebuffer(z.READ_FRAMEBUFFER,null),Et.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else pe?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(Mt,N,_t,jt,ce,et,ht,xt,Xe,ee,de.data):U.isCompressedArrayTexture?z.compressedTexSubImage3D(Mt,N,_t,jt,ce,et,ht,xt,Xe,de.data):z.texSubImage3D(Mt,N,_t,jt,ce,et,ht,xt,Xe,ee,de):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,N,_t,jt,et,ht,Xe,ee,de.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,N,_t,jt,de.width,de.height,Xe,de.data):z.texSubImage2D(z.TEXTURE_2D,N,_t,jt,et,ht,Xe,ee,de);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ci),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ie),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ci),z.pixelStorei(z.UNPACK_SKIP_ROWS,Un),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ye),N===0&&U.generateMipmaps&&z.generateMipmap(Mt),Et.unbindTexture()},this.copyTextureToTexture3D=function(b,U,H=null,V=null,N=0){return b.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0),zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,H,V,N)},this.initRenderTarget=function(b){bt.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),Et.unbindTexture()},this.resetState=function(){E=0,R=0,C=null,Et.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var Za=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ja=class extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var kh=new D,Ch=new me,Ph=new me,ex=new D,Ih=new $t,Aa=new D,go=new Ti,Lh=new $t,xo=new Bs,Qa=class extends St{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ic,this.bindMatrix=new $t,this.bindMatrixInverse=new $t,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new wi),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Aa),this.boundingBox.expandByPoint(Aa)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ti),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Aa),this.boundingSphere.expandByPoint(Aa)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),go.copy(this.boundingSphere),go.applyMatrix4(s),t.ray.intersectsSphere(go)!==!1&&(Lh.copy(s).invert(),xo.copy(t.ray).applyMatrix4(Lh),!(this.boundingBox!==null&&xo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,xo)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new me,e=this.geometry.attributes.skinWeight;for(let i=0,s=e.count;i<s;i++){t.fromBufferAttribute(e,i);let a=1/t.manhattanLength();a!==1/0?t.multiplyScalar(a):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Ic?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,s=this.geometry;Ch.fromBufferAttribute(s.attributes.skinIndex,t),Ph.fromBufferAttribute(s.attributes.skinWeight,t),kh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let a=0;a<4;a++){let r=Ph.getComponent(a);if(r!==0){let o=Ch.getComponent(a);Ih.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(ex.copy(kh).applyMatrix4(Ih),r)}}return e.applyMatrix4(this.bindMatrixInverse)}},Vs=class extends ve{constructor(){super(),this.isBone=!0,this.type="Bone"}},ja=class extends qe{constructor(t=null,e=1,i=1,s,a,r,o,c,l=Qe,h=Qe,u,f){super(null,r,o,c,l,h,s,a,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Dh=new $t,ix=new $t,tr=class n{constructor(t=[],e=[]){this.uuid=gs(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new $t)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new $t;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,r=t.length;a<r;a++){let o=t[a]?t[a].matrixWorld:ix;Dh.multiplyMatrices(o,e[a]),Dh.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new ja(e,t,t,ai,pi);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,s=t.bones.length;i<s;i++){let a=t.bones[i],r=e[a];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),r=new Vs),this.bones.push(r),this.boneInverses.push(new $t().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let s=0,a=e.length;s<a;s++){let r=e[s];t.bones.push(r.uuid);let o=i[s];t.boneInverses.push(o.toArray())}return t}},Gs=class extends Ge{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Zn=new $t,Uh=new $t,Ra=[],zh=new wi,nx=new $t,Ls=new St,Ds=new Ti,Ws=class extends St{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,nx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Zn),zh.copy(t.boundingBox).applyMatrix4(Zn),this.boundingBox.union(zh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Zn),Ds.copy(t.boundingSphere).applyMatrix4(Zn),this.boundingSphere.union(Ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=t*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(i),t.ray.intersectsSphere(Ds)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Zn),Uh.multiplyMatrices(i,Zn),Ls.matrixWorld=Uh,Ls.raycast(t,Ra);for(let r=0,o=Ra.length;r<o;r++){let c=Ra[r];c.instanceId=a,c.object=this,e.push(c)}Ra.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ja(new Float32Array(s*this.count),s,this.count,Ol,pi));let a=this.morphTexture.source.data.data,r=0;for(let l=0;l<i.length;l++)r+=i[l];let o=this.geometry.morphTargetsRelative?1:1-r,c=s*t;a[c]=o,a.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var er=class extends cn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ir=new D,nr=new D,Nh=new $t,Us=new Bs,ka=new Ti,yo=new D,Fh=new D,sr=class extends ve{constructor(t=new Fe,e=new er){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,a=e.count;s<a;s++)ir.fromBufferAttribute(e,s-1),nr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ir.distanceTo(nr);t.setAttribute("lineDistance",new ge(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(s),ka.radius+=a,t.ray.intersectsSphere(ka)===!1)return;Nh.copy(s).invert(),Us.copy(t.ray).applyMatrix4(Nh);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let x=p,m=g-1;x<m;x+=l){let d=h.getX(x),_=h.getX(x+1),S=Ca(this,t,Us,c,d,_);S&&e.push(S)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),d=Ca(this,t,Us,c,x,m);d&&e.push(d)}}else{let p=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let x=p,m=g-1;x<m;x+=l){let d=Ca(this,t,Us,c,x,x+1);d&&e.push(d)}if(this.isLineLoop){let x=Ca(this,t,Us,c,g-1,p);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function Ca(n,t,e,i,s,a){let r=n.geometry.attributes.position;if(ir.fromBufferAttribute(r,s),nr.fromBufferAttribute(r,a),e.distanceSqToSegment(ir,nr,yo,Fh)>i)return;yo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(yo);if(!(c<t.near||c>t.far))return{distance:c,point:Fh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var hn=class extends qe{constructor(t,e,i,s,a,r,o,c,l){super(t,e,i,s,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hs=class n extends Fe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let a=[],r=[],o=[],c=[],l=new D,h=new Jt;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let p=i+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[f]/t+1)/2,h.y=(r[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(o,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},oi=class n extends Fe{constructor(t=1,e=1,i=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),a=Math.floor(a);let h=[],u=[],f=[],p=[],g=0,x=[],m=i/2,d=0;_(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(f,3)),this.setAttribute("uv",new ge(p,2));function _(){let v=new D,P=new D,E=0,R=(e-t)/i;for(let C=0;C<=a;C++){let w=[],M=C/a,k=M*(e-t)+t;for(let G=0;G<=s;G++){let B=G/s,W=B*c+o,Z=Math.sin(W),$=Math.cos(W);P.x=k*Z,P.y=-M*i+m,P.z=k*$,u.push(P.x,P.y,P.z),v.set(Z,R,$).normalize(),f.push(v.x,v.y,v.z),p.push(B,1-M),w.push(g++)}x.push(w)}for(let C=0;C<s;C++)for(let w=0;w<a;w++){let M=x[w][C],k=x[w+1][C],G=x[w+1][C+1],B=x[w][C+1];(t>0||w!==0)&&(h.push(M,k,B),E+=3),(e>0||w!==a-1)&&(h.push(k,G,B),E+=3)}l.addGroup(d,E,0),d+=E}function S(v){let P=g,E=new Jt,R=new D,C=0,w=v===!0?t:e,M=v===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;let k=g;for(let G=0;G<=s;G++){let W=G/s*c+o,Z=Math.cos(W),$=Math.sin(W);R.x=w*$,R.y=m*M,R.z=w*Z,u.push(R.x,R.y,R.z),f.push(0,M,0),E.x=Z*.5+.5,E.y=$*.5*M+.5,p.push(E.x,E.y),g++}for(let G=0;G<s;G++){let B=P+G,W=k+G;v===!0?h.push(W,W+1,B):h.push(W+1,W,B),C+=3}l.addGroup(d,C,v===!0?1:2),d+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},us=class n extends oi{constructor(t=1,e=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var fs=class n extends Fe{constructor(t=.5,e=1,i=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=t,f=(e-t)/s,p=new D,g=new Jt;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let d=a+m/i*r;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(i+1);for(let d=0;d<i;d++){let _=d+m,S=_,v=_+i+1,P=_+i+2,E=_+1;o.push(S,v,E),o.push(v,P,E)}}this.setIndex(o),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ds=class n extends Fe{constructor(t=1,e=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(r+o,Math.PI),l=0,h=[],u=new D,f=new D,p=[],g=[],x=[],m=[];for(let d=0;d<=i;d++){let _=[],S=d/i,v=0;d===0&&r===0?v=.5/e:d===i&&c===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){let E=P/e;u.x=-t*Math.cos(s+E*a)*Math.sin(r+S*o),u.y=t*Math.cos(r+S*o),u.z=t*Math.sin(s+E*a)*Math.sin(r+S*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(E+v,1-S),_.push(l++)}h.push(_)}for(let d=0;d<i;d++)for(let _=0;_<e;_++){let S=h[d][_+1],v=h[d][_],P=h[d+1][_],E=h[d+1][_+1];(d!==0||r>0)&&p.push(S,v,E),(d!==i-1||c<Math.PI)&&p.push(v,P,E)}this.setIndex(p),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var he=class extends cn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ar=class extends er{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Pa(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function sx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ps=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],a=e[i-1];i:{t:{let r;e:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=e[++i],t<s)break t}r=e.length;break e}if(!(t>=a)){let o=e[1];t<o&&(i=2,a=o);for(let c=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=a,a=e[--i-1],t>=a)break t}r=i,i=0;break e}break i}for(;i<r;){let o=i+r>>>1;t<e[o]?r=o:i=o+1}if(s=e[i],a=e[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)e[r]=i[a+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bl=class extends ps{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lc,endingEnd:Lc}}intervalChanged_(t,e,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],c=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Dc:a=t,o=2*e-i;break;case Uc:a=s.length-2,o=e+s[a]-s[a+1];break;default:a=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Dc:r=t,c=2*i-e;break;case Uc:r=1,c=i+s[1]-s[0];break;default:r=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,e,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,_=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,S=(-1-p)*m+(1.5+p)*x+.5*g,v=p*m-p*x;for(let P=0;P!==o;++P)a[P]=d*r[h+P]+_*r[l+P]+S*r[c+P]+v*r[u+P];return a}},Sl=class extends ps{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)a[f]=r[l+f]*u+r[c+f]*h;return a}},wl=class extends ps{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},gi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pa(e,this.TimeBufferType),this.values=Pa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Pa(t.times,Array),values:Pa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new bl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Na:e=this.InterpolantFactoryMethodDiscrete;break;case sl:e=this.InterpolantFactoryMethodLinear;break;case Br:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Na;case this.InterpolantFactoryMethodLinear:return sl;case this.InterpolantFactoryMethodSmooth:return Br}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>e;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,r),t=!1;break}r=c}if(s!==void 0&&sx(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Br,a=t.length-1,r=1;for(let o=1;o<a;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*i,f=u-i,p=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[p+g]){c=!0;break}}}if(c){if(o!==r){t[r]=t[o];let u=o*i,f=r*i;for(let p=0;p!==i;++p)e[f+p]=e[u+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,c=r*i,l=0;l!==i;++l)e[c+l]=e[o+l];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=sl;var En=class extends gi{constructor(t,e,i){super(t,e,i)}};En.prototype.ValueTypeName="bool";En.prototype.ValueBufferType=Array;En.prototype.DefaultInterpolation=Na;En.prototype.InterpolantFactoryMethodLinear=void 0;En.prototype.InterpolantFactoryMethodSmooth=void 0;var Tl=class extends gi{};Tl.prototype.ValueTypeName="color";var El=class extends gi{};El.prototype.ValueTypeName="number";var Al=class extends ps{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)je.slerpFlat(a,0,r,l-o,r,l,c);return a}},rr=class extends gi{InterpolantFactoryMethodLinear(t){return new Al(this.times,this.values,this.getValueSize(),t)}};rr.prototype.ValueTypeName="quaternion";rr.prototype.InterpolantFactoryMethodSmooth=void 0;var An=class extends gi{constructor(t,e,i){super(t,e,i)}};An.prototype.ValueTypeName="string";An.prototype.ValueBufferType=Array;An.prototype.DefaultInterpolation=Na;An.prototype.InterpolantFactoryMethodLinear=void 0;An.prototype.InterpolantFactoryMethodSmooth=void 0;var Rl=class extends gi{};Rl.prototype.ValueTypeName="vector";var kl=class{constructor(t,e,i){let s=this,a=!1,r=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},ax=new kl,Cl=class{constructor(t){this.manager=t!==void 0?t:ax,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,a){i.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var or=class extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},lr=class extends or{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},_o=new $t,Oh=new D,Bh=new D,Pl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Jt(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new Jt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Oh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oh),Bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bh),e.updateMatrixWorld(),_o.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_o)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Il=class extends Pl{constructor(){super(new Ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xs=class extends or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Il}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Wl="\\[\\]\\.:\\/",rx=new RegExp("["+Wl+"]","g"),Xl="[^"+Wl+"]",ox="[^"+Wl.replace("\\.","")+"]",lx=/((?:WC+[\/:])*)/.source.replace("WC",Xl),cx=/(WCOD+)?/.source.replace("WCOD",ox),hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xl),ux=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xl),fx=new RegExp("^"+lx+cx+hx+ux+"$"),dx=["material","materials","bones","map"],Ll=class{constructor(t,e,i){let s=i||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},xe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rx,"")}static parseTrackName(t){let e=fx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);dx.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,a=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[s];if(r===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=Ll;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ty=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dl);var Ct={half:50,halfW:34,dead:58,postGap:2.75,crossbar:3,postH:14},Rn=1/60,fr=9.81,ei={radius:.13,drag:.0052,windMul:1.7};var dr={FB:"Fullback",WG:"Winger",CE:"Centre",FE:"Five-eighth",HB:"Halfback",PR:"Prop",HK:"Hooker",SR:"Second Row",LK:"Lock"},lu=new Set([8,9,10,11,12,13]),ke={punt:{label:"PUNT",elev:.66,vMin:15,vMax:29,curve:.9,spin:"spiral"},bomb:{label:"BOMB",elev:1.1,vMin:13,vMax:24,curve:.5,spin:"endover"},grubber:{label:"GRUBBER",elev:.06,vMin:7,vMax:19,curve:0,spin:"grubber"},chip:{label:"CHIP",elev:.88,vMin:7,vMax:15,curve:.3,spin:"endover"},fieldgoal:{label:"FIELD GOAL",elev:.5,vMin:16,vMax:28,curve:1.1,spin:"endover"},goal:{label:"GOAL KICK",elev:.56,vMin:17,vMax:31,curve:1.2,spin:"endover"},kickoff:{label:"KICK-OFF",elev:.8,vMin:15,vMax:28,curve:.8,spin:"endover"},shortko:{label:"SHORT KO",elev:.78,vMin:9,vMax:15,curve:.4,spin:"endover"},touch:{label:"FIND TOUCH",elev:.58,vMin:16,vMax:30,curve:.9,spin:"spiral"},dropout:{label:"DROP-OUT",elev:.74,vMin:15,vMax:28,curve:.6,spin:"endover"}};var Kl={easy:{cpuTackle:-.14,humanTackle:.1,cpuReact:.42,cpuEvade:.45,cpuPassErr:1.6,cpuKickErr:1.8,lineSpeed:.78,humanCatch:.08},normal:{cpuTackle:0,humanTackle:.03,cpuReact:.26,cpuEvade:.75,cpuPassErr:1,cpuKickErr:1,lineSpeed:.9,humanCatch:.03},hard:{cpuTackle:.07,humanTackle:0,cpuReact:.14,cpuEvade:1,cpuPassErr:.7,cpuKickErr:.65,lineSpeed:1,humanCatch:0}},$l={calm:{min:0,max:1.5,gust:.1},breezy:{min:2.5,max:5,gust:.25},gusty:{min:5.5,max:9,gust:.45}},ql=["#f1c9a5","#e0ac82","#c68a5e","#a36a42","#7a4a2c","#5a3520","#d9a47a","#8d5a3a"],Yl=["#1a1209","#2b1a0d","#4a2c14","#7a5229","#c9a25a","#0d0d0d","#5e3a1c","#3a2a1a"];var nt=(n,t,e)=>n<t?t:n>e?e:n,We=(n,t,e)=>n+(t-n)*e,Wi=(n,t,e,i)=>We(n,t,1-Math.exp(-e*i));var _s=n=>(n=nt(n,0,1),n*n*(3-2*n));function Zl(n){for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return n}function Jl(n,t,e,i){return n+Zl(t-n)*(1-Math.exp(-e*i))}var wt=(n,t)=>Math.atan2(n,t);var qt=(n,t,e,i)=>Math.hypot(n-e,t-i),ys=(Date.now()^1540483477)>>>0;function cu(n){ys=n>>>0||1}function Vt(){ys=ys+1831565813|0;let n=Math.imul(ys^ys>>>15,1|ys);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}var gt=(n,t)=>n+(t-n)*Vt();var Ft=n=>Vt()<n,Xi=n=>n[Math.floor(Vt()*n.length)];function Pe(){let n=0,t=0;for(;n===0;)n=Vt();for(;t===0;)t=Vt();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*t)}var un={up:["KeyW"],down:["KeyS"],left:["KeyA"],right:["KeyD"],rsUp:["ArrowUp"],rsDown:["ArrowDown"],rsLeft:["ArrowLeft"],rsRight:["ArrowRight"],sprint:["ShiftLeft","ShiftRight"],passL:["KeyQ"],passR:["KeyE"],faceA:["KeyK"],faceB:["KeyL"],faceX:["KeyJ"],faceY:["KeyI"],fieldGoal:["KeyU"],kickMod:["Space"],foot:["KeyV"],k1:["Digit1"],k2:["Digit2"],k3:["Digit3"],camera:["KeyC"],pause:["Escape","KeyP"],help:["KeyH"],confirm:["Enter","NumpadEnter"],menuUp:["KeyW","ArrowUp"],menuDown:["KeyS","ArrowDown"],menuLeft:["KeyA","ArrowLeft"],menuRight:["KeyD","ArrowRight"]},Ql={faceA:[0],faceB:[1],faceX:[2],faceY:[3],passL:[4],passR:[5],kickMod:[6],sprint:[7],camera:[8],pause:[9],fieldGoal:[11],foot:[12],menuUp:[12],menuDown:[13],menuLeft:[14],menuRight:[15],confirm:[0],back:[1]},mr={rsLeft:[2,-1],rsRight:[2,1],rsUp:[3,-1],rsDown:[3,1]},pr=[...new Set([...Object.keys(un),...Object.keys(Ql),...Object.keys(mr),"back"])],gr=class{constructor(){this.keys=new Set,this.tapped=new Set,this.state={},this.prev={},this.holdT={},this.lastHold={},this.move={x:0,y:0},this.usingPad=!1,this.enabled=!0;for(let e of pr)this.state[e]=!1,this.prev[e]=!1,this.holdT[e]=0,this.lastHold[e]=0;this._pressed={},this._released={},this._dbl={},this.lastPress={},this.clock=0;let t=new Set(Object.values(un).flat());window.addEventListener("keydown",e=>{t.has(e.code)&&!(e.target&&/INPUT|SELECT|TEXTAREA/.test(e.target.tagName))&&e.preventDefault(),e.repeat||this.tapped.add(e.code),this.keys.add(e.code),this.usingPad=!1}),window.addEventListener("keyup",e=>{this.keys.delete(e.code)}),window.addEventListener("blur",()=>{this.keys.clear()})}_pad(){let t=navigator.getGamepads?navigator.getGamepads():[];for(let e of t)if(e&&e.connected&&e.buttons.length>=16)return e;return null}poll(t){let e=this._pad(),i=0,s=0,a=l=>un[l]&&un[l].some(h=>this.keys.has(h)||this.tapped.has(h)),r=l=>un[l]&&un[l].some(h=>this.keys.has(h));r("left")&&(i-=1),r("right")&&(i+=1),r("up")&&(s+=1),r("down")&&(s-=1);let o=l=>e&&(Ql[l]&&Ql[l].some(h=>e.buttons[h]&&(e.buttons[h].pressed||e.buttons[h].value>.5))||mr[l]&&(e.axes[mr[l][0]]||0)*mr[l][1]>.55);if(e){let l=e.axes[0]||0,h=e.axes[1]||0,u=Math.hypot(l,h);if(u>.22){let f=Math.min(1,(u-.22)/.7)/u;i=l*f,s=-h*f,this.usingPad=!0}e.buttons.some(f=>f.pressed)&&(this.usingPad=!0)}let c=Math.hypot(i,s);c>1&&(i/=c,s/=c),this.move.x=i,this.move.y=s,this.clock+=t;for(let l of pr){this.prev[l]=this.state[l];let h=un[l]&&un[l].some(f=>this.tapped.has(f)),u=!!(r(l)||o(l));this.state[l]=u,this._pressed[l]=u&&!this.prev[l]||h&&!this.prev[l],this._released[l]=!u&&this.prev[l]||h&&!u,this._dbl[l]=!1,this._pressed[l]&&(this._dbl[l]=this.clock-(this.lastPress[l]??-9)<.3,this.lastPress[l]=this.clock),u&&(this.holdT[l]+=t),this._released[l]&&(this.lastHold[l]=this.holdT[l],this.holdT[l]=0),!u&&!this._released[l]&&(this.holdT[l]=0)}if(this.tapped.clear(),!this.enabled){for(let l of pr)this._pressed[l]=!1;this.move.x=this.move.y=0}}held(t){return this.enabled&&!!this.state[t]}pressed(t){return!!this._pressed[t]}released(t){return this.enabled&&!!this._released[t]}holdTime(t){return this.holdT[t]}doubleTapped(t){return!!this._dbl[t]}releasedHold(t){return this.lastHold[t]}clearEdges(){for(let t of pr)this._pressed[t]=!1,this._released[t]=!1}};var xr=class{constructor(){this.ctx=null,this.master=null,this.crowdGain=null,this.excite=0,this.muted=!1}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.7,this.master.connect(this.ctx.destination);let e=this.ctx.sampleRate*2;this.noise=this.ctx.createBuffer(1,e,this.ctx.sampleRate);let i=this.noise.getChannelData(0),s=0;for(let a=0;a<e;a++){let r=Math.random()*2-1;s=.97*s+.03*r,i[a]=r*.5+s*2.5}this._startCrowd()}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.7)}_startCrowd(){let t=this.ctx,e=t.createBufferSource();e.buffer=this.noise,e.loop=!0;let i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=700,i.Q.value=.6;let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=2400,this.crowdGain=t.createGain(),this.crowdGain.gain.value=.05,e.connect(i),i.connect(s),s.connect(this.crowdGain),this.crowdGain.connect(this.master),e.start(),this.crowdFilter=i}update(t,e){if(!this.ctx)return;this.excite+=(e-this.excite)*Math.min(1,t*1.5);let i=this.ctx.currentTime;this.crowdGain.gain.setTargetAtTime(.045+this.excite*.16,i,.25),this.crowdFilter.frequency.setTargetAtTime(600+this.excite*700,i,.3)}_env(t,e,i,s,a){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(s,e+i),t.gain.exponentialRampToValueAtTime(1e-4,e+i+a)}whistle(t=!1){if(!this.ctx)return;let e=this.ctx,i=e.currentTime,s=t?.9:.35,a=e.createGain();a.connect(this.master),a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(.22,i+.02),a.gain.setValueAtTime(.22,i+s-.05),a.gain.exponentialRampToValueAtTime(1e-4,i+s);let r=e.createOscillator();r.frequency.value=38;let o=e.createGain();o.gain.value=120,r.connect(o);for(let c of[2750,2890]){let l=e.createOscillator();l.type="sine",l.frequency.value=c,o.connect(l.frequency),l.connect(a),l.start(i),l.stop(i+s)}r.start(i),r.stop(i+s)}hooter(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,i=t.createGain();i.connect(this.master),this._env(i,e,.05,.18,1.6);let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=900,s.connect(i);for(let a of[220,221.5,330]){let r=t.createOscillator();r.type="sawtooth",r.frequency.value=a,r.connect(s),r.start(e),r.stop(e+1.7)}}thud(t=1){if(!this.ctx)return;let e=this.ctx,i=e.currentTime,s=e.createGain();s.connect(this.master),this._env(s,i,.005,.35*t,.25);let a=e.createOscillator();a.type="sine",a.frequency.setValueAtTime(110,i),a.frequency.exponentialRampToValueAtTime(45,i+.2),a.connect(s),a.start(i),a.stop(i+.3);let r=e.createBufferSource();r.buffer=this.noise;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=380;let c=e.createGain();this._env(c,i,.003,.5*t,.12),r.connect(o),o.connect(c),c.connect(this.master),r.start(i,Math.random()),r.stop(i+.2)}kick(t=1){if(!this.ctx)return;let e=this.ctx,i=e.currentTime,s=e.createGain();s.connect(this.master),this._env(s,i,.002,.4*(.5+t*.5),.12);let a=e.createOscillator();a.type="triangle",a.frequency.setValueAtTime(180,i),a.frequency.exponentialRampToValueAtTime(70,i+.1),a.connect(s),a.start(i),a.stop(i+.15);let r=e.createBufferSource();r.buffer=this.noise;let o=e.createBiquadFilter();o.type="highpass",o.frequency.value=1500;let c=e.createGain();this._env(c,i,.001,.25,.05),r.connect(o),o.connect(c),c.connect(this.master),r.start(i,Math.random()),r.stop(i+.08)}catchBall(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,i=t.createGain();i.connect(this.master),this._env(i,e,.002,.12,.06);let s=t.createOscillator();s.type="sine",s.frequency.setValueAtTime(320,e),s.frequency.exponentialRampToValueAtTime(160,e+.06),s.connect(i),s.start(e),s.stop(e+.1)}roar(t=1,e=!1){if(!this.ctx)return;let i=this.ctx,s=i.currentTime,a=i.createBufferSource();a.buffer=this.noise,a.loop=!0;let r=i.createBiquadFilter();r.type="bandpass",r.frequency.value=e?330:900,r.Q.value=.5;let o=i.createGain();o.gain.setValueAtTime(1e-4,s),o.gain.exponentialRampToValueAtTime(.32*t,s+.35),o.gain.exponentialRampToValueAtTime(1e-4,s+(e?1.4:3.2)),a.connect(r),r.connect(o),o.connect(this.master),a.start(s,Math.random()),a.stop(s+3.4)}ui(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,i=t.createGain();i.connect(this.master),this._env(i,e,.002,.08,.05);let s=t.createOscillator();s.type="square",s.frequency.value=660,s.connect(i),s.start(e),s.stop(e+.07)}};function vs(n,t,e){let i=n.v,s=n.p,a=Math.min(1,.35+s.y/10),r=e.x*ei.windMul*a,o=e.z*ei.windMul*a,c=i.x-r,l=i.y,h=i.z-o,u=Math.hypot(c,l,h),f=(n.drag??1)*ei.drag*u,p=-f*c,g=-fr-f*l,x=-f*h;if(n.curve){let m=Math.hypot(i.x,i.z);if(m>.5){let d=i.x/m,_=i.z/m,S=n.curve*Math.min(1,m/18);p+=_*S,x+=-d*S}n.curve*=Math.exp(-.25*t)}i.x+=p*t,i.y+=g*t,i.z+=x*t,s.x+=i.x*t,s.y+=i.y*t,s.z+=i.z*t}function _r(n,t,e,i,s=1,a=1.5,r=8){let o={p:{...n},v:{...t},curve:e,drag:s},c=1/60,l=0,h=null;for(;l<r;)if(vs(o,c,i),l+=c,!h&&o.v.y<0&&o.p.y<=a&&(h={x:o.p.x,y:o.p.y,z:o.p.z,t:l}),o.p.y<=ei.radius)return{catchPt:h||{x:o.p.x,y:o.p.y,z:o.p.z,t:l},land:{x:o.p.x,z:o.p.z,t:l},vLand:{...o.v}};return{catchPt:h||{...o.p,t:l},land:{x:o.p.x,z:o.p.z,t:l},vLand:{...o.v}}}var hu={};function yr(n,t,e,i=n.elev){let s=t+":"+i.toFixed(3),a=hu[s];if(!a){a=[];for(let c=0;c<=20;c++){let l=n.vMin+(n.vMax-n.vMin)*(c/20),h=_r({x:0,y:.5,z:0},{x:Math.cos(i)*l,y:Math.sin(i)*l,z:0},0,{x:0,z:0});a.push(h.land.x)}hu[s]=a}let r=Math.max(0,Math.min(1,e))*20,o=Math.min(19,Math.floor(r));return a[o]+(a[o+1]-a[o])*(r-o)}function Ki(n,t,e,i=n.elev){let s=0,a=1;if(yr(n,t,1,i)<e)return 1;for(let r=0;r<18;r++){let o=(s+a)/2;yr(n,t,o,i)<e?s=o:a=o}return(s+a)/2}function jl(n,t){let e=!1;for(let i of[-Ct.half,Ct.half])if(!(Math.abs(n.x-i)>1.2)){for(let s of[-Ct.postGap,Ct.postGap]){if(n.y>Ct.postH)continue;let a=n.x-i,r=n.z-s,o=Math.hypot(a,r),c=(n.y<2?.26:.08)+ei.radius*.8;if(o<c&&o>1e-4){let l=a/o,h=r/o,u=t.x*l+t.z*h;u<0&&(t.x-=1.55*u*l,t.z-=1.55*u*h,t.x*=.85,t.z*=.85,e=!0),n.x=i+l*c,n.z=s+h*c}}if(Math.abs(n.z)<Ct.postGap){let s=n.x-i,a=n.y-Ct.crossbar,r=Math.hypot(s,a),o=.07+ei.radius*.8;if(r<o&&r>1e-4){let c=s/r,l=a/r,h=t.x*c+t.y*l;h<0&&(t.x-=1.5*h*c,t.y-=1.5*h*l,e=!0),n.x=i+c*o,n.y=Ct.crossbar+l*o}}}return e}var le=Ct.half,Oe=Ct.halfW;function Ri(n,t,e){let i=t.team,s=i.dir,a=[];for(let r of i.players){if(r===t||!r.isUpright()||r.state==="ptb"||r.state==="kick")continue;let o=(r.p.z-t.p.z)*s*e,c=(t.p.x-r.p.x)*s;o<1.2||o>32||c<-2.5||c>22||a.push({q:r,lat:o,behind:c,dist:Math.hypot(o,c)})}return a.sort((r,o)=>r.lat-o.lat),a}function tc(n,t,e,i){let s=Ri(n,t,e);return s.length?i&&s.length>1?s[1].q:s[0].q:null}function kn(n,t,e,i={}){let s=n.ball;if(!e||s.carrier!==t)return!1;let a=t.team,r=t.fwd,o=t.p.x+r.x*.15,c=1.1,l=t.p.z+r.z*.15,h=i.offload?9.5:12.5+t.attr.pass*.07+(i.long?3:0)+(i.flat?2.5:-.5),u=Math.hypot(e.p.x-o,e.p.z-l)/h,f=e.p.x,p=e.p.z;for(let C=0;C<4;C++)f=e.p.x+e.v.x*u*.92,p=e.p.z+e.v.z*u*.92,u=Math.hypot(f-o,p-l)/h;u=nt(u,.12,1.7);let g=a.dir,x=Math.hypot(e.v.x,e.v.z);if(i.flat&&!i.offload){x>1&&(f+=e.v.x/x*1,p+=e.v.z/x*1);let C=(f-o-t.v.x*u)*g;C>.5&&(f-=(C-.5)*g)}else i.offload||(f-=g*1.2);let m=Math.hypot(f-o,p-l),d=(1-t.attr.pass/100)*.07+m*.0018+(i.offload?.07:0)+(t.state==="tackled"?.04:0)+(i.long?.015:0);a.human?d*=.8:d*=n.diff.cpuPassErr;let _=(f-o)/Math.max(.01,m),S=(p-l)/Math.max(.01,m),v=Pe()*d*m,P=Pe()*d*m*.5;f+=-S*v+_*P,p+=_*v+S*P;let E=1.15+Pe()*d*2.5;s.release("pass",{team:a,passer:t,target:e,rx:o,rz:l,pvx:t.v.x,t:n.time,offload:!!i.offload,flat:!!i.flat,tx:f,tz:p}),s.p.set(o,c,l),s.v.set((f-o)/u,(E-c)/u+.5*fr*u,(p-l)/u),s.drag=0,s.curve=0,s.spin="spiral",s.grubber=!1,s.lastTouch=t,s.setIgnore(t,n.time+.35),t.passAnim=.3;let R=(e.p.x-t.p.x)*t.right.x+(e.p.z-t.p.z)*t.right.z;return t.passSide=R>0?-1:1,e.ai.passCd=(e.isForward||e.num===2||e.num===5?.7:.45)+Vt()*.4,e.ai.dummyHalf=!1,e.ai.plan=null,n.kickTarget={x:f,z:p,t:n.time+u,pass:!0},n.audio.catchBall(),n.emit("pass",{team:a,player:t,to:e,offload:!!i.offload,kind:i.flat?"flat":"standard"}),i.offload&&a.stats.offloads++,!0}function $s(n,t,e){let i=t.engage;if(!i||n.ball.carrier!==t||i.progress>.88||i.offloadTried)return!1;i.offloadTried=!0;let s=t.team,a=null,r=9.5;for(let l of s.players){if(l===t||!l.isUpright())continue;let h=qt(l.p.x,l.p.z,t.p.x,t.p.z),u=(t.p.x-l.p.x)*s.dir,f=(l.p.z-t.p.z)*s.dir*e;u<-1.5||h>r||e&&f<-1||(r=h,a=l)}if(!a)return!1;if(i.noOffload)return n.message("ARMS PINNED","No offload from a ball-and-all tackle",1,"warn"),!0;let o=i.tacklers.length,c=(i.kind==="low"?.12:0)+.26+t.attr.hand/260+(1-i.progress)*.32-(o-1)*.24-Math.max(0,i.dom)*.25;return Ft(nt(c,.04,.85))?(kn(n,t,a,{offload:!0}),n.message("OFFLOAD!",`${t.name} gets the arm free`,1.2,"good")):ec(n,t,"offload"),!0}function du(n,t,e){if(!(t.cd.dummy>0)){t.cd.dummy=1.1,t.passAnim=.3,t.passSide=e>0?-1:1;for(let i of t.team.opp.players)i.controlled||!i.isUpright()||qt(i.p.x,i.p.z,t.p.x,t.p.z)>8||Ft(.6-(i.attr.tackle-70)/180)&&(i.ai.bite=.6,i.ai.biteX=t.p.x-t.team.dir*1.5,i.ai.biteZ=t.p.z+e*t.team.dir*7);n.emit("dummy",{team:t.team,player:t})}}function ec(n,t,e){let i=n.ball;i.carrier=null,i.state="air",i.kind="loose",i.info={spilledBy:t,team:t.team,cause:e},i.lastTouch=t,i.drag=1,i.curve=0,i.grubber=!1,i.p.set(t.p.x,1,t.p.z);let s=Ft(.68);i.v.set(t.team.dir*(s?gt(1.5,4):-gt(1,3))+t.v.x*.4,gt(1,3),Pe()*1.5+t.v.z*.4),i.setIgnore(t,n.time+1),n.emit("spill",{team:t.team,player:t,cause:e}),s?n.knockOn(t.team,t.p.x,t.p.z):n.message("LOOSE BALL!","Spilled backwards \u2014 play on",1.2,"warn")}function Ai(n,t,e,i,s,a={}){let r=ke[e],o=t.team,c=n.ball,l=a.foot||t.attr.foot,h=l!==t.attr.foot,u=.006+(1-t.attr.kick/100)*.045;h&&(u*=1.9);let f=nt(s,0,1.1)*(h?.93:1);if(s>.93&&(u+=(s-.93)*.45),!a.place&&!a.restart){let E=n.nearest(o.opp.players,t.p.x,t.p.z,R=>R.isUpright());E&&qt(E.p.x,E.p.z,t.p.x,t.p.z)<3&&(u*=1.6)}o.human||(u*=n.diff.cpuKickErr),u+=a.extraErr||0;let p=i+Pe()*u,g=(a.elev??r.elev)+Pe()*u*.5,x=(r.vMin+(r.vMax-r.vMin)*nt(f,0,1.05))*(1+Pe()*u*.25),m=!!a.place,d=m||a.restart?c.p.x:t.p.x+Math.sin(i)*.45,_=m||a.restart?c.p.z:t.p.z+Math.cos(i)*.45,S=m?.3:e==="grubber"?.25:.5,v={team:o,kicker:t,type:e,fromX:d,fromZ:_,t:n.time,bounced:!1,touchedAfter:!1,restart:!!a.restart,penaltyTouch:!!a.penaltyTouch,goal:!!a.goal,fieldGoal:e==="fieldgoal",chargedDown:!1,prevX:d};c.release("kick",v),c.p.set(d,S,_);let P=Math.cos(g);if(c.v.set(Math.sin(p)*P*x,Math.sin(g)*x,Math.cos(p)*P*x),!m&&!a.restart&&e!=="fieldgoal"&&(c.v.x+=t.v.x*.4,c.v.z+=t.v.z*.4),e==="grubber"&&(c.v.y=gt(-1.6,.4)),c.curve=r.curve*(l==="R"?1:-1)*gt(.8,1.2)*nt(f,.4,1),c.spin=r.spin,c.grubber=e==="grubber",c.drag=1,c.lastTouch=t,c.setIgnore(t,n.time+.5),!m&&!a.restart&&!a.penaltyTouch)for(let E of o.opp.players){if(!E.isUpright()&&E.state!=="lunge"&&E.state!=="dive")continue;let R=E.p.x-t.p.x,C=E.p.z-t.p.z,w=Math.hypot(R,C);if(!(w>1.8||(R*Math.sin(i)+C*Math.cos(i))/Math.max(.01,w)<.3)&&Ft(.33+(E.state==="lunge"||E.state==="dive"?.25:0))){c.v.set(-c.v.x*.15+Pe()*2,gt(1.5,4),-c.v.z*.15+Pe()*2),c.curve=0,c.grubber=!1,c.kind="loose",c.info={chargedDown:!0,team:o,by:E},c.lastTouch=E,n.message("CHARGED DOWN!",E.name,1.4,"warn"),n.audio.thud(.5),n.emit("chargedown",{team:E.team,player:E});break}}if(!a.goal)for(let E of o.players)E.kickOffside=E!==t&&(E.p.x-t.p.x)*o.dir>.5;t.anim.foot=l,!m&&!a.restart&&(t.setState("kick",.55),t.stateT=.14),n.audio.kick(f),o.stats.kicks++,n.emit("kick",{team:o,player:t,kind:e}),n.kickAim=null,pu(n)}function pu(n){let t=n.ball;if(t.state==="air"&&t.kind!=="pass"){let e=_r(t.p,t.v,t.curve,n.wind,t.drag,1.5),i=e.catchPt.x,s=e.catchPt.z;if(t.grubber){let a=Math.hypot(e.vLand.x,e.vLand.z);if(a>.5){let r=a*a/6.8*.55;i=e.land.x+e.vLand.x/a*r,s=e.land.z+e.vLand.z/a*r}}n.kickTarget={x:i,z:s,t:n.time+e.catchPt.t,land:e.land}}else if(t.state==="ground"){let e=Math.hypot(t.v.x,t.v.z),i=e>.2?e*e/(2*3.4)*.6:0;n.kickTarget={x:t.p.x+(e>.2?t.v.x/e*i:0),z:t.p.z+(e>.2?t.v.z/e*i:0),t:n.time+.5}}}function mu(n,t){let e=n.ball;if(e.state==="held"||e.state==="dead")return;let i=e.info;if((e.landedThisTick||e.state==="ground"&&Math.floor(n.time*4)!==Math.floor((n.time-t)*4))&&pu(n),e.landedThisTick&&e.kind==="kick"&&i&&!i.bounced&&(i.bounced=!0,i.bounceX=e.p.x,i.bounceZ=e.p.z,i.restart&&!i.touchedAfter&&Math.abs(e.p.z)<Oe&&Math.abs(e.p.x)<le&&(e.p.x-i.fromX)*i.team.dir<10))return n.awardPenalty(i.team.opp,i.type==="dropout"?i.fromX+i.team.dir*10:0,0,"Kick did not go 10m");if(e.kind==="kick"&&i&&i.fieldGoal&&!i.touchedAfter&&e.state==="air"){let a=i.team.dir*le;if((i.prevX-a)*(e.p.x-a)<=0&&i.prevX!==e.p.x&&!i.fgDone&&(i.fgDone=!0,Math.abs(e.p.z)<Ct.postGap-.05&&e.p.y>Ct.crossbar))return px(n,i.team,i.kicker);i.prevX=e.p.x}let s=e.state==="ground"||e.landedThisTick||e.p.y<.3;if(s&&(Math.abs(e.p.x)>Ct.dead||Math.abs(e.p.x)>le&&Math.abs(e.p.z)>Oe))return gx(n);if(s&&Math.abs(e.p.z)>Oe)return mx(n);yx(n)}function px(n,t,e){if(t.score+=1,t.stats.fieldGoals++,n.audio.roar(1.2),n.audio.whistle(),n.message("FIELD GOAL!",`${e.name} \u2014 1 point`,2.4,"try"),n.emit("fieldgoal",{team:t,player:e}),n.hud.flashScore(),n.goldenPoint)return n.ball.state="dead",n.endMatch();n.ball.kind="loose",n.ball.info=null,n.setPhase("whistle",{restart:{type:"kickoff",team:t.opp},dur:2.6})}function mx(n){let t=n.ball,e=t.info,i=nt(t.p.x,-le+1,le-1),s=t.p.z,a=s>0?1:-1;if(t.kind==="kick"&&e&&!e.touchedAfter){let o=e.team;if(e.penaltyTouch)return n.emit("foundtouch",{team:o}),n.whistleStop("FOUND TOUCH",`${o.short} tap restart 10m in`,{type:"ptb",team:o,x:i,z:a*(Oe-10)},{style:"good"});if(e.restart&&!e.bounced)return n.awardPenalty(o.opp,e.type==="dropout"?e.fromX+o.dir*10:0,0,"Out on the full");if(!e.bounced)return n.scrumRestart(o.opp,e.fromX,e.fromZ,"OUT ON THE FULL",`Scrum, ${o.opp.short} feed`);let c=e.fromX*o.dir,l=i*o.dir;if(Math.abs(e.bounceZ??99)<Oe&&(c<-10&&l>30||c<-30&&l>10)){let u=c<-10&&l>30?"40/20!":"20/40!";return n.emit("4020",{team:o,label:u}),n.audio.roar(1),n.whistleStop(u,`${o.short} keep the ball \u2014 fresh set`,{type:"ptb",team:o,x:i,z:a*(Oe-10)},{style:"good"})}return n.scrumRestart(o.opp,i,s,"INTO TOUCH",`Scrum, ${o.opp.short} feed`)}let r=t.lastTouch?t.lastTouch.team:n.poss;n.scrumRestart(r.opp,i,s,"INTO TOUCH",`Scrum, ${r.opp.short} feed`)}function gx(n){let t=n.ball,e=t.info,i=t.p.x>0?1:-1,s=n.teams.find(r=>r.dir===-i),a=t.lastTouch?t.lastTouch.team:null;return t.kind==="kick"&&e&&!e.touchedAfter&&e.team?e.team===s?n.whistleStop("DEAD IN-GOAL",`Goal-line drop-out ${s.short}`,{type:"dropout",team:s}):e.restart&&!e.bounced?n.awardPenalty(s,0,0,"Dead on the full"):n.whistleStop("DEAD BALL",`20m restart ${s.short}`,{type:"ptb",team:s,x:-s.dir*30,z:0}):a===s?n.whistleStop("DEAD IN-GOAL",`Goal-line drop-out ${s.short}`,{type:"dropout",team:s}):n.whistleStop("DEAD BALL",`20m restart ${s.short}`,{type:"ptb",team:s,x:-s.dir*30,z:0})}function xx(n,t,e){let i=n.ball,s=i.info,a,r=Math.hypot(i.v.x,i.v.y,i.v.z);return i.kind==="pass"&&s?(s.team===t.team?a=s.target===t?.975:.88:a=(t.controlled?.34:.15)+(s.flat?.12:0)+(t.attr.hand-70)/300,s.offload&&(a-=.08)):i.kind==="kick"&&s?i.state==="ground"||i.p.y<.45?a=.86:i.bounces>0?a=.76:a=s.type==="bomb"?.8:s.type==="grubber"?.72:.9:a=i.p.y<.45?.82:.74,a+=(t.attr.hand-75)/(i.kind==="pass"?300:160),i.kind!=="pass"&&(a-=Math.max(0,r-16)*.02),e&&(a-=t.jumpT>0?.08:.22),i.grubber&&(a-=.1),t.team.human&&(a+=n.diff.humanCatch),nt(a,.04,.99)}function yx(n){let t=n.ball,e=n.time,i=t.p.y;if(i>3.2)return;let s=[];for(let l of n.players){if(!l.isUpright()||l.state==="kick"||l.state==="celebrate"||!t.canTouch(l,e)||l.kickOffside&&!l.controlled)continue;let h=l.fwd,u=qt(l.p.x+h.x*.25,l.p.z+h.z*.25,t.p.x,t.p.z),f=(i<.5?.9:1.05)+(l.jumpT>0?.2:0),p=2.35+(l.attr.hand>80?.1:0)+(l.jumpT>0?.75:0);!l.controlled&&t.kind!=="pass"&&t.v.y<0&&i>2.1&&i<3&&u<1.4&&l.jumpT===0&&l.doJump(),!(u>f||i>p)&&(t.kind==="pass"&&t.info&&t.info.team!==l.team&&u>(t.info.flat?1:.75)||t.kind==="pass"&&t.info&&t.info.team===l.team&&t.info.target!==l&&u>.6||s.push({p:l,hd:u}))}if(!s.length)return;s.sort((l,h)=>l.hd-h.hd);let a=s[0].p,r=s.find(l=>l.p.team!==a.team),o=!!r&&r.hd<1.5,c=o&&Vt()<.5?[r.p,a]:[a,...r?[r.p]:[]];for(let l of c){if(Ft(xx(n,l,o)))return vx(n,l);if(_x(n,l))return}}function _x(n,t){let e=n.ball;if(e.setIgnore(t,n.time+.6),e.kind==="pass"&&e.info&&e.info.team!==t.team&&Ft(.85))return!1;e.info&&(e.info.touchedAfter=!0),e.lastTouch=t;let i=Ft(.55),s=e.kind==="pass"?.3:.15;e.v.set(t.team.dir*(i?gt(1.5,4.5):-gt(1,3.5))+e.v.x*s,gt(.8,2.5),Pe()*2+e.v.z*s),e.state="air",e.drag=1,e.curve=0,e.grubber=!1;let a=e.info;return e.kind="loose",e.info={spilledBy:t,team:t.team,prev:a},t.catchAnim=.25,n.emit("fumble",{team:t.team,player:t,note:`${a&&a.passer?"pass":a&&a.kicker?"kick:"+a.type:"loose"} ${a&&a.target===t?"target":a&&a.team!==t.team?"opp":"mate"} h=${e.p.y.toFixed(2)} fwd=${i}`}),i?(n.knockOn(t.team,e.p.x,e.p.z),!0):(n.message("FUMBLE!","Ball goes loose \u2014 play on",1.2,"warn"),!0)}function vx(n,t){let e=n.ball,i=e.info,s=e.kind,a=t.team;if(s==="kick"&&i&&i.team===a&&t.kickOffside)return n.awardPenalty(a.opp,t.p.x,t.p.z,"Offside from the kick");if(s==="kick"&&i&&i.restart&&i.team===a&&(t.p.x-i.fromX)*a.dir<10)return n.awardPenalty(a.opp,0,0,"Kick did not go 10m");let r=e.p.y;e.give(t),t.catchAnim=.3,t.catchHigh=r>1.8,t.ai.inGoalCatch=!1,t.ai.passCd=Math.max(t.ai.passCd||0,.25),n.audio.catchBall(),n.kickTarget=null;for(let c of n.players)c.kickOffside=!1;let o=!1;if(s==="pass"&&i)if(i.team===a){if((t.p.x-i.rx-i.pvx*(n.time-i.t))*a.dir>1.3)return e.carrier=null,e.state="ground",n.knockOn(a,i.rx,i.rz,"FORWARD PASS");a.stats.passes++}else o=!0,n.message("INTERCEPT!",`${t.name} picks it off`,1.8,"good"),n.audio.roar(1),n.emit("intercept",{team:a,player:t});else s==="kick"&&i?i.team!==a?(o=!0,i.restart||n.message("ZERO TACKLE",`${a.short} fresh set`,1.1),t.ai.inGoalCatch=t.p.x*a.dir<-le):i.restart||n.message("REGATHERED!",t.name,1.3,"good"):(a!==n.poss&&(o=!0,n.message("TURNOVER",`${a.short} ball`,1.3,"warn")),i&&i.prev&&i.prev.team&&i.prev.team!==a&&t.p.x*a.dir<-le&&(t.ai.inGoalCatch=!0));o&&(n.poss=a,n.tackleCount=0,n.gainLineX=t.p.x,n.lineBreakDone=!1),a.human&&n.setControlled(t),n.emit("catch",{team:a,player:t,kind:s}),t.p.x*a.dir>le&&n.scoreTry(t,t.p.z)}function gu(n,t){let e=t.team,i=t.p.x*e.dir,s=Math.abs(t.p.z);if(s>Oe&&Math.abs(t.p.x)<=le)return n.scrumRestart(e.opp,t.p.x,t.p.z,"INTO TOUCH",`Scrum, ${e.opp.short} feed`);if(t.state!=="tackled"){if(i>le){let a=uu(n,e.opp,t),r;t.controlled?r=n.input.pressed("faceA")||a<1.8||i>le+6.5||s>Oe-.8:r=a<3.8||Math.abs(t.p.z)<5||i>le+5||s>Oe-1,r&&(t.setState("free"),n.scoreTry(t,t.p.z));return}if(i<-le){if(i<-Ct.dead||s>Oe)return n.whistleStop("DEAD IN-GOAL",`Goal-line drop-out ${e.short}`,{type:"dropout",team:e});let a=uu(n,e.opp,t);if(t.controlled?n.input.pressed("faceA"):t.ai.inGoalCatch&&a<10)return t.ai.inGoalCatch?n.whistleStop("TOUCHED DOWN",`20m restart ${e.short}`,{type:"ptb",team:e,x:-e.dir*30,z:0},{style:"good"}):n.whistleStop("TOUCHED DOWN",`Goal-line drop-out ${e.short}`,{type:"dropout",team:e})}}}function uu(n,t,e){let i=99;for(let s of t.players)s.isUpright()&&(i=Math.min(i,qt(s.p.x,s.p.z,e.p.x,e.p.z)));return i}function xu(n){let t=n.ball.info;if(!t||!t.team)return;let e=t.team;for(let i of e.players)if(i.kickOffside){for(let s of e.players)if(s!==i&&!s.kickOffside&&(s.p.x-i.p.x)*e.dir>=0){i.kickOffside=!1;break}}}function yu(n){return nt(9+Math.abs(n)*.5,9,28)}function Mx(n,t,e,i,s,a,r,o,c){let l=a.vMin+(a.vMax-a.vMin)*s,h={p:{x:n,y:.3,z:t},v:{x:Math.sin(e)*Math.cos(i)*l,y:Math.sin(i)*l,z:Math.cos(e)*Math.cos(i)*l},curve:a.curve*(r==="R"?1:-1)*nt(s,.4,1),drag:1},u=1/60;for(let f=0;f<6;f+=u){let p=h.p.x;if(vs(h,u,o),(p-c)*(h.p.x-c)<=0)return{crossed:!0,y:h.p.y,z:h.p.z};if(h.p.y<0)return{crossed:!1,y:0,z:h.p.z}}return{crossed:!1,y:0,z:h.p.z}}function ic(n,t,e,i,s,a,r){let o=wt(i-t,-e),c=Math.hypot(i-t,e),l=nt(Ki(s,"goal",c+14,r),.25,1);for(let h=0;h<14;h++){let u=Mx(t,e,o,r,l,s,a,n.wind,i),f=Math.min(6,2.5+c*.2);!u.crossed||u.y<f?l=Math.min(1,l+.05):u.y>12&&l>.4&&(l-=.03);let p=Math.sin(o);Math.abs(p)>.15&&u.crossed&&(o+=.85*u.z*p*p/(i-t))}return{yaw:o,power:l}}function _u(n,t){let e=t.team,i=t.kicker,s=e.dir*le,a=ic(n,t.x,t.z,s,ke.goal,t.foot,t.elev);t.yaw=a.yaw,t.power=a.power,t.stage="run",t.runT=0}function vu(n){let t=n.pd,e=n.ball;if(t.stage!=="flight"||t.result!==void 0)return;let i=t.team.dir*le,s=t.prevX,a=e.p.x;(s-i)*(a-i)<=0&&s!==a?vr(n,Math.abs(e.p.z)<Ct.postGap-.05&&e.p.y>Ct.crossbar):(e.state==="ground"||e.bounces>0)&&vr(n,!1),t.prevX=a}function vr(n,t){let e=n.pd,i=e.team;e.result===void 0&&(e.result=t,e.stage="result",n.phaseT=0,t?(i.score+=2,i.stats[e.kind==="conversion"?"convM":"penGoals"]++,n.message("GOAL!",e.kind==="conversion"?"Conversion successful":"Penalty goal",2.2,"try"),n.audio.roar(1),n.hud.flashScore()):(n.message("MISSED",e.kind==="conversion"?"No extra points":"Penalty attempt fails",2,"bad"),n.audio.roar(.6,!0)),n.emit("goal",{team:i,good:t,kind:e.kind}))}function Mu(n,t=1.1){let e=n/t%2;return e<1?e:2-e}function bu(n,t,e){let i=n.input,s=e.team,a=s.dir*le;if(i.pressed("foot")&&(e.foot=e.foot==="R"?"L":"R"),e.stage==="place"){let r=e.dist;e.dist=nt(e.dist-i.move.y*9*t,8,40),e.dist!==r&&(e.x=s.dir*(le-e.dist),e.baseYaw=e.yaw=wt(a-e.x,-e.z)),(i.pressed("faceA")||i.pressed("confirm"))&&(e.stage="aim",n.audio.ui())}else e.stage==="aim"?(e.yaw=nt(e.yaw-i.move.x*.45*t,e.baseYaw-.6,e.baseYaw+.6),e.elev=nt(e.elev+i.move.y*.45*t,.3,.95),i.pressed("faceA")&&(e.stage="power",e.holdT=0,e.powerBtn="faceA")):e.stage==="power"&&(e.holdT+=t,e.power=Mu(e.holdT,1.15),(i.released(e.powerBtn)||!i.held(e.powerBtn))&&(e.stage="run",e.runT=0))}function nc(n,t,e,i){let s=n.input;if(e.baseYaw||(e.baseYaw=e.yaw),e.foot===void 0&&(e.foot=n.humanFoot||e.kicker.attr.foot),s.pressed("foot")&&(e.foot=e.foot==="R"?"L":"R"),e.powering)e.holdT+=t,e.power=Mu(e.holdT,1.15),e.yaw=nt(e.yaw-s.move.x*.35*t,e.baseYaw-1.1,e.baseYaw+1.1),(s.released(e.powerBtn)||!s.held(e.powerBtn))&&(e.stage="run",e.runT=0);else{e.yaw=nt(e.yaw-s.move.x*.7*t,e.baseYaw-1.1,e.baseYaw+1.1);let a=s.pressed("faceA")?"faceA":i.length>1&&s.pressed("faceB")?"faceB":null;a&&(e.powering=!0,e.holdT=0,e.powerBtn=a,e.type=a==="faceB"?i[1]:i[0],n.audio.ui())}}function Su(n,t){let e=t.team,i=e.dir,s=t.spot||{x:0,z:0};if(t.foot=t.kicker.attr.foot,t.type==="dropout"){let a=s.x+i*gt(38,50),r=gt(-22,22);t.yaw=wt(a-s.x,r-s.z),t.power=Ki(ke.dropout,"dropout",Math.hypot(a-s.x,r-s.z))}else if(Ft(.08)){t.type="shortko";let a=Xi([-1,1])*gt(8,16),r=i*gt(11,14);t.yaw=wt(r,a),t.power=Ki(ke.shortko,"shortko",Math.hypot(r,a))}else{let a=gt(-24,24),r=i*gt(40,47);t.yaw=wt(r,a),t.power=Ki(ke.kickoff,"kickoff",Math.hypot(r,a)-4)}t.stage="run",t.runT=0}function wu(n,t){let e=t.team,i=t.spot,s=i.z>=0?1:-1,a=i.x+e.dir*gt(20,32),r=s*(Oe+3);t.yaw=wt(a-i.x,r-i.z),t.power=Math.min(1,Ki(ke.touch,"touch",Math.hypot(a-i.x,r-i.z))*1.02),t.foot=t.kicker.attr.foot,t.stage="run"}function Tu(n,t,e){let i=e.x*t.dir,s=le-i,a=Math.hypot(s,e.z),r=t.score-t.opp.score,o=26+t.goalKicker.attr.kick*.2;return a<o&&(n.goldenPoint||n.isLate()&&r>=-2&&r<=6||s<30&&Ft(.55))?"goal":i<20?"touch":Ft(.55)?"tap":"touch"}function Eu(n,t){let e=t.team,i=e.dir,s=t.p.x*i,a=le-s,r=e.score-e.opp.score,o,c,l;if(a<40&&n.isLate()&&r>=-1&&r<=0&&Math.abs(t.p.z)<22){o="fieldgoal";let h=ic(n,t.p.x,t.p.z,i*le,ke.fieldgoal,t.attr.foot,ke.fieldgoal.elev);return Ai(n,t,o,h.yaw,h.power,{})}if(a<15){let h=Vt();h<.5?(o="grubber",c=i*(le+4),l=t.p.z*.5+gt(-8,8)):h<.75?(o="chip",c=i*(le+2),l=t.p.z+gt(-6,6)):(o="bomb",c=i*(le-3),l=Xi([-1,1])*gt(22,29))}else if(a<42)o="bomb",c=i*(le-gt(0,8)),l=Ft(.6)?gt(-10,10):Xi([-1,1])*gt(18,26);else{o="punt";let h=e.opp.get(1),u=h&&h.p.z>0?-1:1;s<-10&&Ft(.3)?(c=i*38,l=u*(Oe-3)):(c=i*Math.min(le-4,s+gt(38,48)),l=u*gt(8,24))}bx(n,t,o,c,l)}function Au(n,t,e,i){let s=t.team,a=s.dir,r=t.p.x*a;if(e==="fieldgoal"){let f=ic({wind:{x:0,z:0}},t.p.x,t.p.z,a*le,ke.fieldgoal,i,ke.fieldgoal.elev);return Ai(n,t,e,f.yaw,f.power,{foot:i})}let o=wt(a,0),c=t.speedH>1.5?Math.atan2(t.v.x,t.v.z):t.heading;c=o+nt((c-o+Math.PI*3)%(Math.PI*2)-Math.PI,-1.2,1.2);let l=le-r,h;e==="grubber"?h=nt(l+5,8,26):e==="chip"?h=nt(l<18?l+3:11,7,18):h=nt(l>55?50:l-4,25,55);let u=e==="grubber"?nt((h-4)/26,.1,1):Ki(ke[e],e,h);Ai(n,t,e,c,u,{foot:i})}function bx(n,t,e,i,s){let a=ke[e],r=wt(i-t.p.x,s-t.p.z),o=Math.hypot(i-t.p.x,s-t.p.z),c;if(e==="grubber")c=nt((o-4)/26,.1,1);else{c=Ki(a,e,o);let l=a.vMin+(a.vMax-a.vMin)*c,h=Math.cos(a.elev),u=_r({x:t.p.x,y:.5,z:t.p.z},{x:Math.sin(r)*h*l,y:Math.sin(a.elev)*l,z:Math.cos(r)*h*l},a.curve*(t.attr.foot==="R"?1:-1),n.wind),f=i-u.land.x,p=s-u.land.z,g=i+f,x=s+p;r=wt(g-t.p.x,x-t.p.z),o=Math.hypot(g-t.p.x,x-t.p.z),c=Ki(a,e,o)}Ai(n,t,e,r,c,{})}function Ms(n,t,e,i,s){let a=t.dir,r=s*a,o=Oe-r,c=Oe+r,l=o>=c?1:-1,h,u,f={2:1,3:1,12:1,5:-1,4:-1,11:-1};switch(e.num){case 9:h=r+l*1.5,u=2;break;case 7:h=r+l*5.5,u=4;break;case 6:h=r+l*12,u=5.5;break;case 8:h=r+l*3,u=2.5;break;case 10:h=r-l*3,u=2.5;break;case 13:h=r-l*6.5,u=3.5;break;case 1:h=r+l*19,u=7;break;case 2:case 5:h=f[e.num]*31,u=6.5;break;case 3:case 4:h=r+(f[e.num]*31-r)*.62,u=6;break;default:h=r+(f[e.num]*31-r)*.33,u=4.5}return h=nt(h,-Oe+1.5,Oe-1.5),{x:nt(i-a*u,-Ct.dead+1,Ct.dead-1),z:h*a}}function Ru(n,t){let e=n.tackleCount,i=[8,10,11,12,13].map(a=>t.get(a)).filter(a=>a.state!=="ground");if(e===5){let a=t.get(7),r=t.get(6);return{kind:"kick",target:a.state==="ground"?r:r.state==="ground"||a.attr.kick>=r.attr.kick?a:r}}let s=Vt();return s<.12?{kind:"run"}:s<(e<=1?.75:.5)&&i.length?{kind:"hitup",target:Xi(i)}:{kind:"shift",target:t.get(7).state==="ground"?t.get(6):t.get(7)}}var fu=Array.from({length:24},()=>new D);function ku(n){let t=n.aimLine,e=n.aimReticle;t.visible=!1,e.visible=!1;let i=null,s=0,a=null,r=.6,o=null,c=!0;if(n.kickAim&&n.ball.carrier){let g=n.ball.carrier;i={x:g.p.x,y:.5,z:g.p.z},s=n.kickAim.yaw,a=n.kickAim.type,r=n.kickAim.power||.05,a==="fieldgoal"&&(c=!1)}else if((n.phase==="kickoff"||n.phase==="touchKick")&&n.pd.team?.human&&n.pd.stage==="aim"){let g=n.ball;i={x:g.p.x,y:.3,z:g.p.z},s=n.pd.yaw,a=n.pd.type,r=n.pd.powering?n.pd.power:.75}if(!i)return;let l=ke[a],h=o??l.elev,u=l.vMin+(l.vMax-l.vMin)*r,f={p:{...i},v:{x:Math.sin(s)*Math.cos(h)*u,y:Math.sin(h)*u,z:Math.cos(s)*Math.cos(h)*u},curve:0,drag:1},p=a==="grubber"?.25:a==="goal"||a==="fieldgoal"?.6:.45;for(let g=0;g<24;g++){fu[g].set(f.p.x,Math.max(.05,f.p.y),f.p.z);for(let x=0;x<2;x++)vs(f,p/48,{x:0,z:0})}if(t.geometry.setFromPoints(fu),t.computeLineDistances(),t.visible=!0,c){let g=a==="grubber"?4+r*26:yr(l,a,r,h);e.position.set(i.x+Math.sin(s)*g,.05,i.z+Math.cos(s)*g),e.visible=!0}}var Sx={faceA:"K",faceB:"L",faceX:"J",faceY:"I",fieldGoal:"U"},wx={faceA:"A",faceB:"B",faceX:"X",faceY:"Y",fieldGoal:"R3"},Ie=(n,t,e,i)=>{let s=document.createElement(n);return t&&(s.className=t),i!==void 0&&(s.innerHTML=i),e&&e.appendChild(s),s},br=class{constructor(t){this.root=Ie("div","hud",t),this.score=Ie("div","scorebug",this.root),this.tackles=Ie("div","tackles",this.root),this.msgBox=Ie("div","msg",this.root),this.msgMain=Ie("div","msg-main",this.msgBox),this.msgSub=Ie("div","msg-sub",this.msgBox),this.feed=Ie("div","feed",this.root),this.card=Ie("div","pcard",this.root),this.kick=Ie("div","kickpanel",this.root),this.meter=Ie("div","meter",this.root,'<div class="meter-label"></div><div class="meter-bar"><div class="meter-fill"></div><div class="meter-tick"></div></div>'),this.hint=Ie("div","hint",this.root),this.mini=Ie("canvas","minimap",this.root),this.mini.width=240,this.mini.height=150,this.tags=Array.from({length:6},()=>Ie("div","ptag",this.root)),this.offTag=Ie("div","ptag off",this.root,"OFFSIDE"),this.fade=Ie("div","fade",t),this.modal=Ie("div","modal hidden",t),this.msgT=0,this.v3=new D,this.visible=!0}setVisible(t){this.visible=t,this.root.style.display=t?"":"none"}attach(t){this.m=t,this.feed.innerHTML="",t.on(e=>this.onEvent(e))}onEvent(t){let e=this.m,i=t.player?t.player.name:"",a={beaten:()=>({step:"SIDESTEP!",fend:"FEND!",bump:"BUMPED OFF!",broken:"TACKLE BUST!"})[t.how]+` ${i}`,bighit:()=>`BIG HIT \u2014 ${i}`,offload:()=>null,tackle:()=>t.n>=3?`Gang tackle (${t.n})`:null,try:()=>`TRY ${t.team.short} \u2014 ${i}`,goal:()=>`${t.team.short} ${t.kind} ${t.good?"kicked":"missed"}`,fieldgoal:()=>`FIELD GOAL ${t.team.short} \u2014 ${i}`,intercept:()=>`Intercept \u2014 ${i}`,4020:()=>`${t.label} ${t.team.short}`,penalty:()=>`Penalty ${t.team.short}: ${t.reason}`,chargedown:()=>`Charge-down \u2014 ${i}`,error:()=>`${t.why} \u2014 ${t.team.short}`,missed:()=>null}[t.type],r=a&&a();if(!r)return;let o=Ie("div","feed-line",this.feed,r);for(t.team&&(o.style.borderLeftColor=t.team.kit.primary),setTimeout(()=>o.classList.add("gone"),3800),setTimeout(()=>o.remove(),4400);this.feed.children.length>5;)this.feed.firstChild.remove()}message(t,e="",i=2,s=""){this.msgMain.textContent=t,this.msgSub.textContent=e,this.msgBox.className="msg show "+s,this.msgT=i,this.msgMain.style.animation="none",this.msgMain.offsetWidth,this.msgMain.style.animation=""}flashScore(){this.score.classList.remove("flash"),this.score.offsetWidth,this.score.classList.add("flash")}fadeOut(){this.fade.classList.add("on")}fadeIn(){setTimeout(()=>this.fade.classList.remove("on"),30)}penaltyChoice(t){let e=this.m?.input.usingPad;this.modal.className="modal",this.modal.innerHTML=`<div class="panel"><h2>PENALTY</h2><p>Your call, skipper</p>
      <button data-c="goal"><b>${e?"A":"K"}</b> Kick for goal (2 pts)</button>
      <button data-c="touch"><b>${e?"B":"L"}</b> Kick for touch (keep the ball)</button>
      <button data-c="tap"><b>${e?"X":"J"}</b> Tap and go</button></div>`;let i=s=>{this.modal.className="modal hidden",this.modal.innerHTML="",this._pc=null,t(s)};this.modal.querySelectorAll("button").forEach(s=>s.addEventListener("click",()=>i(s.dataset.c))),this._pc=i}pollModal(t){this._pc&&(t.pressed("k1")||t.pressed("faceA")?this._pc("goal"):t.pressed("k2")||t.pressed("faceB")?this._pc("touch"):(t.pressed("k3")||t.pressed("faceX"))&&this._pc("tap"))}showBreak(t,e,i,s=""){let[a,r]=t.teams,o=a.stats.possT+r.stats.possT||1,c=[["Tries",a.stats.tries,r.stats.tries],["Conversions",`${a.stats.convM}/${a.stats.convA}`,`${r.stats.convM}/${r.stats.convA}`],["Penalty goals",a.stats.penGoals,r.stats.penGoals],["Field goals",a.stats.fieldGoals,r.stats.fieldGoals],["Possession",Math.round(a.stats.possT/o*100)+"%",Math.round(r.stats.possT/o*100)+"%"],["Runs",a.stats.runs,r.stats.runs],["Tackles",a.stats.tackles,r.stats.tackles],["Missed tackles",a.stats.missed,r.stats.missed],["Tackle busts",a.stats.busts,r.stats.busts],["Line breaks",a.stats.linebreaks,r.stats.linebreaks],["Offloads",a.stats.offloads,r.stats.offloads],["Kicks",a.stats.kicks,r.stats.kicks],["Errors",a.stats.errors,r.stats.errors],["Penalties conceded",a.stats.pensConceded,r.stats.pensConceded]],l=a.score===r.score?"Draw":(a.score>r.score?a.name:r.name)+" win";this.modal.className="modal",this.modal.innerHTML=`<div class="panel wide"><h2>${e}</h2>${s?`<p>${s}</p>`:""}
      <div class="final"><span style="--c:${a.kit.primary}">${a.name}</span><b>${a.score} \u2013 ${r.score}</b><span style="--c:${r.kit.primary}">${r.name}</span></div>
      ${e==="FULL TIME"?`<p class="winner">${l}</p>`:""}
      <table>${c.map(f=>`<tr><td>${f[1]}</td><th>${f[0]}</th><td>${f[2]}</td></tr>`).join("")}</table>
      <div class="btns">${i?'<button data-a="go">Continue \u25B6</button>':'<button data-a="menu">Main menu</button><button data-a="again">Rematch</button>'}</div></div>`;let h=()=>{this.modal.className="modal hidden",this.modal.innerHTML="",this._brk=null},u=f=>{h(),f==="go"?i():f==="menu"?this.onMenu?.():this.onRematch?.()};this.modal.querySelectorAll("button").forEach(f=>f.addEventListener("click",()=>u(f.dataset.a))),this._brk={act:u,cont:!!i,t:performance.now()}}pollBreak(t){!this._brk||performance.now()-this._brk.t<600||(t.pressed("confirm")||t.pressed("faceA"))&&this._brk.act(this._brk.cont?"go":"again")}closeModal(){this.modal.className="modal hidden",this.modal.innerHTML="",this._brk=null,this._pc=null}update(t,e,i){if(!this.visible)return;let[s,a]=t.teams,r=t.half===1?"1ST":t.half===2?"2ND":"GP";this.score.innerHTML=`<span class="tm" style="--c:${s.kit.primary};--c2:${s.kit.secondary}">${s.short}</span><span class="sc">${s.score}</span>
      <span class="clock">${t.clockText()}<small>${t.siren?"SIREN":r}</small></span><span class="sc">${a.score}</span><span class="tm" style="--c:${a.kit.primary};--c2:${a.kit.secondary}">${a.short}</span>`;let o=t.phase==="play"||t.phase==="ptb",c=t.attackTeam();if(o&&c){let C=t.tackleCount;this.tackles.style.display="";let w=Array.from({length:6},(M,k)=>`<i class="${k<C?"on":""}"></i>`).join("");this.tackles.innerHTML=`<span class="who" style="--c:${c.kit.primary}">${c.short}</span><b>${C===5?"LAST TACKLE":C===0?"ZERO TACKLE":"TACKLE "+C}</b><span class="pips">${w}</span>`}else this.tackles.style.display="none";this.msgT>0&&(this.msgT-=i,this.msgT<=0&&(this.msgBox.className="msg"));let l=t.controlled;l&&t.humanTeam?(this.card.style.display="",this.card.innerHTML=`<div class="num" style="--c:${l.team.kit.primary};--c2:${l.team.kit.secondary}">${l.num}</div><div class="info"><b>${l.fullName}</b><small>${dr[l.pos]} \xB7 OVR <b class="ovr">${l.ovr}</b>${l.star?' <span class="star">\u2605</span>':""} \xB7 SPD ${l.attr.speed} \xB7 STR ${l.attr.strength}</small>
        <div class="stam"><i style="width:${Math.round(l.stamina*100)}%;background:${l.stamina<.3?"#ff5a3a":"#7dff5a"}"></i></div></div>`):this.card.style.display="none";let h=t.input.usingPad,u=t.kickAim&&t.kickAim.foot||["goalKick","kickoff","touchKick"].includes(t.phase)&&t.pd.foot||t.humanFoot||(l?l.attr.foot:"R"),p=t.camRig.fwd,g=Math.atan2(t.wind.x*-p.z+t.wind.z*p.x,t.wind.x*p.x+t.wind.z*p.z),x=Math.round(t.wind.speed*3.6),m=h?{A:"A",B:"B",X:"X",Y:"Y",U:"R3",M:"LT"}:{A:"K",B:"L",X:"J",Y:"I",U:"U",M:"Space"},d=t.kickAim?t.kickAim.type:null,_=(C,w,M)=>`<span class="${d===w?"sel":""}"><b>${C}</b> ${M}</span>`,S=t.humanTeam&&t.ball.carrier&&t.ball.carrier.team===t.humanTeam;this.kick.innerHTML=`<div class="wind"><div class="arrow" style="transform:rotate(${g*180/Math.PI}deg)">\u27A4</div><div><b>${x} km/h</b><small>WIND</small></div></div>
      ${t.humanTeam&&S?`<div class="krow"><small>QUICK</small><div class="ktypes">${_(m.A,"-","Punt")}${_(m.B,"-","Grubber")}${_(m.X,"-","Chip")}${_(m.U,"-","Field goal")}</div></div>
      <div class="krow"><small>HOLD ${m.M} +</small><div class="ktypes">${_(m.A,"punt","Punt")}${_(m.B,"grubber","Grubber")}${_(m.X,"chip","Chip")}${_(m.Y,"bomb","Bomb")}${_(m.U,"fieldgoal","FG")}</div></div>`:""}
      ${t.humanTeam?`<div class="foot">FOOT: <b>${u==="L"?"LEFT":"RIGHT"}</b> <small>(${h?"D-pad \u2191":"V"})</small></div>`:""}`;let v=!1,P=0,E="",R=-1;if(t.kickAim?(v=!0,P=t.kickAim.power,E=ke[t.kickAim.type].label+(t.kickAim.over>0?" \u2014 OVERCOOKED!":"")):(t.phase==="goalKick"&&t.pd.team?.human&&t.pd.stage==="power"||(t.phase==="kickoff"||t.phase==="touchKick")&&t.pd.team?.human&&t.pd.powering)&&(v=!0,P=t.pd.power,E=t.phase==="goalKick"?"POWER":ke[t.pd.type].label),this.meter.style.display=v?"":"none",v){this.meter.querySelector(".meter-fill").style.width=`${nt(P,0,1)*100}%`,this.meter.querySelector(".meter-fill").style.background=P>.93?"#ff4a2a":P>.75?"#ffc21a":"#5ae05a",this.meter.querySelector(".meter-label").textContent=E;let C=this.meter.querySelector(".meter-tick");C.style.display=R>=0?"":"none"}this.hint.innerHTML=this.hintText(t,h),this.drawMini(t),this.updateTags(t,e,h)}hintText(t,e){let i=(c,l)=>`<kbd>${e?l:c}</kbd>`,s=t.humanTeam;if(!s)return"";let a=t.pd;if(t.phase==="goalKick"&&a.team===s){if(a.stage==="place")return`${i("W/S","L-stick \u2195")} move the ball back / forward (${a.dist.toFixed(0)}m out) \xB7 ${i("K","A")} set the ball \xB7 ${i("V","D-pad \u2191")} foot`;if(a.stage==="aim")return`${i("A/D","L-stick \u2194")} line up the seam \xB7 ${i("W/S","L-stick \u2195")} trajectory \xB7 hold ${i("K","A")} for power \xB7 mind the wind`;if(a.stage==="power")return"Release before the red zone \u2014 the meter swings back!"}if((t.phase==="kickoff"||t.phase==="touchKick")&&a.team===s&&a.stage==="aim")return`${i("A/D","L-stick \u2194")} aim \xB7 hold ${i("K","A")} for power${t.phase==="kickoff"&&a.type!=="dropout"?` \xB7 hold ${i("L","B")} instead for a short kick-off`:""}`;if(t.phase==="ptb"&&a.team===s)return`Play-the-ball\u2026 ${i("Q/E","LB/RB")} pass from dummy half (+ ${i("K/L/I","A/B/Y")} to pick the runner), or run it`;if(t.phase!=="play")return"";let r=t.ball,o=t.controlled;return t.kickAim?`${i("A/D","L-stick \u2194")} aim \xB7 release ${i(Sx[t.kickAim.btn],wx[t.kickAim.btn])} to kick \xB7 ${i("Q/E","LB/RB")} cancel`:r.carrier&&r.carrier===o?o.state==="tackled"?`In the tackle: ${i("Q/E","LB/RB")} offload \xB7 ${i("Arrows","R-stick")} fight free \xB7 mash ${i("Shift","RT")} leg drive`:o.p.x*s.dir>Ct.half?`${i("K","A")} ground the ball \u2014 run toward the posts for an easier conversion!`:o.p.x*s.dir<-Ct.half?`In your in-goal: ${i("K","A")} touch down, or run it out`:t.input.held("passL")||t.input.held("passR")?`${i("K","A")} 1st man \xB7 ${i("L","B")} 2nd \xB7 ${i("I","Y")} 3rd (cut-out) \xB7 double-tap for a flat ball`:`${i("Q/E","LB/RB")} pass (double-tap = flat) \xB7 ${i("\u2190/\u2192","R-stick \u2194")} step \xB7 ${i("\u2193","R-stick \u2193")} fend (hold) \xB7 ${i("\u2191","R-stick \u2191")} shoulder \xB7 ${i("I","Y")} dummy`:r.carrier&&r.carrier.team!==s?o&&o.state==="tackling"?`${i("J","X")} strip (one-on-one only) \xB7 keep ${i("L","B")} held to hold him down (risky)`:`${i("K","A")} low tackle \xB7 ${i("L","B")} arm-grip \xB7 ${i("I","Y")} dive \xB7 ${i("Q/E","LB/RB")} switch player`:`Chase it down! ${i("J","X")} jump for the high ball \xB7 ${i("Q/E","LB/RB")} switch player`}drawMini(t){let e=this.mini.getContext("2d"),i=this.mini.width,s=this.mini.height,a=i/124,r=s/76,o=t.humanTeam?t.humanTeam.dir:1,c=h=>(h*o+62)*a,l=h=>(h*o+38)*r;e.clearRect(0,0,i,s),e.fillStyle="rgba(20,70,25,0.78)",e.fillRect(c(-58*o)<c(58*o)?c(-58*o):c(58*o),l(-34*o)<l(34*o)?l(-34*o):l(34*o),116*a,68*r),e.strokeStyle="rgba(255,255,255,0.5)",e.lineWidth=1;for(let h=-50;h<=50;h+=10)e.beginPath(),e.moveTo(c(h),l(-34)),e.lineTo(c(h),l(34)),e.stroke();e.strokeRect(Math.min(c(-58),c(58)),Math.min(l(-34),l(34)),116*a,68*r);for(let h of t.players)e.fillStyle=h.team.kit.primary,e.strokeStyle=h.team.kit.secondary,e.beginPath(),e.arc(c(h.p.x),l(h.p.z),h===t.controlled?4:3,0,Math.PI*2),e.fill(),e.stroke(),h===t.controlled&&(e.strokeStyle="#ffe14a",e.lineWidth=2,e.beginPath(),e.arc(c(h.p.x),l(h.p.z),6,0,Math.PI*2),e.stroke(),e.lineWidth=1);e.fillStyle="#fff",e.beginPath(),e.arc(c(t.ball.p.x),l(t.ball.p.z),2.5,0,Math.PI*2),e.fill()}updateTags(t,e,i){let s=t.ball,a=t.controlled,r=()=>{this.tags.forEach(h=>h.style.display="none")};if(this.offTag.style.display="none",a&&(a.offside||a.kickOffside)&&t.phase==="play"&&this.project(this.offTag,a,e),!a||s.carrier!==a||t.phase!=="play"||a.state==="tackled"||t.kickAim)return r();r();let o=t.input.held("passL")?-1:t.input.held("passR")?1:0,c=i?["A","B","Y"]:["K","L","I"],l=0;for(let h of o?[o]:[-1,1])Ri(t,a,h).slice(0,o?3:1).forEach((f,p)=>{let g=this.tags[l++];g.textContent=o?c[p]:h<0?i?"LB":"Q":i?"RB":"E",this.project(g,f.q,e)})}project(t,e,i){if(this.v3.set(e.p.x,2.35,e.p.z).project(i),this.v3.z>1){t.style.display="none";return}t.style.display="",t.style.left=`${(this.v3.x*.5+.5)*window.innerWidth}px`,t.style.top=`${(-this.v3.y*.5+.5)*window.innerHeight}px`}};var Cu={bay:[{num:1,pos:"FB",first:"Kobe",last:"Grady",age:29,heightCm:191,weightKg:86,attr:{speed:81,accel:85,agility:86,strength:56,tackle:74,pass:82,kick:89,hand:85,stamina:75,foot:"R"},skin:"#c68a5e",hair:"#2b1a0d",hairStyle:"afro",headgear:!1,star:!1},{num:2,pos:"WG",first:"Manu",last:"Saisewhe",age:28,heightCm:197,weightKg:97,attr:{speed:93,accel:86,agility:80,strength:64,tackle:61,pass:51,kick:40,hand:83,stamina:81,foot:"R"},skin:"#d9a47a",hair:"#7a5229",hairStyle:"short",headgear:!1,star:!1},{num:3,pos:"CE",first:"Ollie",last:"Pritchard",age:25,heightCm:181,weightKg:98,attr:{speed:81,accel:80,agility:76,strength:73,tackle:85,pass:61,kick:41,hand:76,stamina:83,foot:"R"},skin:"#a36a42",hair:"#4a2c14",hairStyle:"afro",headgear:!1,star:!1},{num:4,pos:"CE",first:"Josh",last:"Mulgrew",age:28,heightCm:187,weightKg:91,attr:{speed:75,accel:72,agility:67,strength:74,tackle:69,pass:57,kick:39,hand:75,stamina:74,foot:"R"},skin:"#8d5a3a",hair:"#5e3a1c",hairStyle:"buzz",headgear:!1,star:!1},{num:5,pos:"WG",first:"Xavier",last:"Vaokavai",age:27,heightCm:190,weightKg:88,attr:{speed:89,accel:89,agility:79,strength:64,tackle:71,pass:55,kick:47,hand:77,stamina:82,foot:"L"},skin:"#7a4a2c",hair:"#0d0d0d",hairStyle:"short",headgear:!1,star:!1},{num:6,pos:"FE",first:"Malakai",last:"Crawley",age:33,heightCm:181,weightKg:89,attr:{speed:90,accel:89,agility:89,strength:66,tackle:53,pass:84,kick:77,hand:81,stamina:79,foot:"R"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"long",headgear:!1,star:!1},{num:7,pos:"HB",first:"Callum",last:"Saorafe",age:28,heightCm:188,weightKg:90,attr:{speed:77,accel:78,agility:83,strength:51,tackle:59,pass:82,kick:93,hand:81,stamina:77,foot:"R"},skin:"#e0ac82",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:8,pos:"PR",first:"Viliami",last:"Hoisewhe",age:25,heightCm:192,weightKg:113,attr:{speed:64,accel:60,agility:44,strength:90,tackle:89,pass:49,kick:35,hand:69,stamina:72,foot:"R"},skin:"#7a4a2c",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:9,pos:"HK",first:"Sione",last:"Nguyen",age:34,heightCm:176,weightKg:83,attr:{speed:70,accel:72,agility:71,strength:58,tackle:94,pass:78,kick:45,hand:85,stamina:92,foot:"L"},skin:"#e0ac82",hair:"#7a5229",hairStyle:"mohawk",headgear:!1,star:!1},{num:10,pos:"PR",first:"Ben",last:"Toelemo",age:28,heightCm:195,weightKg:122,attr:{speed:69,accel:74,agility:59,strength:99,tackle:91,pass:47,kick:35,hand:74,stamina:79,foot:"L"},skin:"#c68a5e",hair:"#4a2c14",hairStyle:"long",headgear:!1,star:!1},{num:11,pos:"SR",first:"Jett",last:"Duggan",age:23,heightCm:189,weightKg:97,attr:{speed:71,accel:68,agility:61,strength:85,tackle:69,pass:65,kick:35,hand:72,stamina:73,foot:"R"},skin:"#f1c9a5",hair:"#c9a25a",hairStyle:"mohawk",headgear:!1,star:!1},{num:12,pos:"SR",first:"Archie",last:"Blackwood",age:24,heightCm:197,weightKg:99,attr:{speed:76,accel:71,agility:62,strength:86,tackle:89,pass:55,kick:37,hand:76,stamina:85,foot:"R"},skin:"#e0ac82",hair:"#5e3a1c",hairStyle:"mohawk",headgear:!0,star:!1},{num:13,pos:"LK",first:"Paddy",last:"Houata",age:28,heightCm:190,weightKg:111,attr:{speed:70,accel:68,agility:59,strength:87,tackle:90,pass:75,kick:35,hand:76,stamina:94,foot:"R"},skin:"#e0ac82",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1}],nth:[{num:1,pos:"FB",first:"Noah",last:"Hawtrey",age:25,heightCm:188,weightKg:81,attr:{speed:87,accel:80,agility:76,strength:56,tackle:64,pass:72,kick:70,hand:90,stamina:86,foot:"R"},skin:"#a36a42",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:2,pos:"WG",first:"Paddy",last:"Faelefe",age:30,heightCm:184,weightKg:96,attr:{speed:94,accel:97,agility:97,strength:68,tackle:50,pass:48,kick:45,hand:82,stamina:78,foot:"R"},skin:"#a36a42",hair:"#0d0d0d",hairStyle:"bald",headgear:!1,star:!1},{num:3,pos:"CE",first:"Blake",last:"Maelelu",age:24,heightCm:181,weightKg:95,attr:{speed:85,accel:81,agility:75,strength:76,tackle:78,pass:59,kick:40,hand:80,stamina:80,foot:"R"},skin:"#e0ac82",hair:"#1a1209",hairStyle:"buzz",headgear:!1,star:!1},{num:4,pos:"CE",first:"Seth",last:"Stanton",age:21,heightCm:182,weightKg:96,attr:{speed:84,accel:82,agility:78,strength:83,tackle:78,pass:59,kick:39,hand:79,stamina:82,foot:"R"},skin:"#f1c9a5",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:5,pos:"WG",first:"Fletcher",last:"Ogilvie",age:27,heightCm:189,weightKg:93,attr:{speed:94,accel:88,agility:83,strength:64,tackle:58,pass:56,kick:42,hand:84,stamina:82,foot:"R"},skin:"#e0ac82",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:6,pos:"FE",first:"Lachlan",last:"Mackenna",age:27,heightCm:184,weightKg:87,attr:{speed:77,accel:75,agility:79,strength:52,tackle:61,pass:99,kick:96,hand:85,stamina:78,foot:"R"},skin:"#e0ac82",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:7,pos:"HB",first:"Corey",last:"Radcliffe",age:27,heightCm:173,weightKg:86,attr:{speed:87,accel:89,agility:93,strength:62,tackle:68,pass:96,kick:84,hand:89,stamina:85,foot:"R"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"bald",headgear:!1,star:!1},{num:8,pos:"PR",first:"Paddy",last:"Radcliffe",age:25,heightCm:192,weightKg:119,attr:{speed:72,accel:74,agility:57,strength:99,tackle:89,pass:61,kick:35,hand:68,stamina:69,foot:"R"},skin:"#a36a42",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:9,pos:"HK",first:"Tai",last:"Grady",age:25,heightCm:172,weightKg:93,attr:{speed:74,accel:80,agility:75,strength:64,tackle:94,pass:99,kick:49,hand:85,stamina:95,foot:"R"},skin:"#d9a47a",hair:"#5e3a1c",hairStyle:"buzz",headgear:!0,star:!1},{num:10,pos:"PR",first:"Eli",last:"Quinlan",age:25,heightCm:189,weightKg:110,attr:{speed:64,accel:61,agility:47,strength:95,tackle:79,pass:47,kick:35,hand:63,stamina:67,foot:"R"},skin:"#f1c9a5",hair:"#c9a25a",hairStyle:"afro",headgear:!1,star:!1},{num:11,pos:"SR",first:"Tyson",last:"Merriman",age:28,heightCm:188,weightKg:95,attr:{speed:69,accel:63,agility:58,strength:75,tackle:87,pass:61,kick:35,hand:75,stamina:81,foot:"R"},skin:"#7a4a2c",hair:"#1a1209",hairStyle:"afro",headgear:!1,star:!1},{num:12,pos:"SR",first:"Tai",last:"Dellar",age:28,heightCm:185,weightKg:94,attr:{speed:76,accel:69,agility:62,strength:80,tackle:85,pass:54,kick:35,hand:73,stamina:83,foot:"L"},skin:"#a36a42",hair:"#5e3a1c",hairStyle:"long",headgear:!1,star:!1},{num:13,pos:"LK",first:"Jack",last:"Foitomo",age:22,heightCm:184,weightKg:115,attr:{speed:67,accel:66,agility:62,strength:87,tackle:99,pass:73,kick:35,hand:72,stamina:86,foot:"L"},skin:"#8d5a3a",hair:"#7a5229",hairStyle:"mohawk",headgear:!1,star:!1}],irn:[{num:1,pos:"FB",first:"Corey",last:"Maorasa",age:24,heightCm:189,weightKg:88,attr:{speed:88,accel:84,agility:86,strength:65,tackle:66,pass:81,kick:72,hand:93,stamina:69,foot:"R"},skin:"#e0ac82",hair:"#2b1a0d",hairStyle:"afro",headgear:!1,star:!1},{num:2,pos:"WG",first:"Malakai",last:"Brannigan",age:25,heightCm:188,weightKg:98,attr:{speed:91,accel:84,agility:76,strength:60,tackle:66,pass:59,kick:43,hand:77,stamina:83,foot:"R"},skin:"#d9a47a",hair:"#5e3a1c",hairStyle:"bald",headgear:!1,star:!1},{num:3,pos:"CE",first:"Ryan",last:"Castellano",age:25,heightCm:182,weightKg:97,attr:{speed:99,accel:96,agility:86,strength:85,tackle:74,pass:70,kick:43,hand:76,stamina:76,foot:"L"},skin:"#d9a47a",hair:"#0d0d0d",hairStyle:"bald",headgear:!1,star:!1},{num:4,pos:"CE",first:"Rhys",last:"Teleata",age:25,heightCm:186,weightKg:105,attr:{speed:84,accel:80,agility:74,strength:75,tackle:75,pass:63,kick:42,hand:78,stamina:80,foot:"R"},skin:"#f1c9a5",hair:"#0d0d0d",hairStyle:"mohawk",headgear:!1,star:!1},{num:5,pos:"WG",first:"Ollie",last:"Kilbride",age:26,heightCm:185,weightKg:95,attr:{speed:97,accel:90,agility:84,strength:68,tackle:61,pass:62,kick:40,hand:84,stamina:85,foot:"L"},skin:"#a36a42",hair:"#7a5229",hairStyle:"short",headgear:!1,star:!1},{num:6,pos:"FE",first:"Jayden",last:"Achterberg",age:20,heightCm:181,weightKg:92,attr:{speed:78,accel:80,agility:80,strength:61,tackle:63,pass:88,kick:83,hand:85,stamina:83,foot:"R"},skin:"#e0ac82",hair:"#1a1209",hairStyle:"long",headgear:!1,star:!1},{num:7,pos:"HB",first:"Ryan",last:"Wellbeck",age:24,heightCm:182,weightKg:79,attr:{speed:77,accel:79,agility:82,strength:50,tackle:61,pass:91,kick:94,hand:85,stamina:86,foot:"R"},skin:"#c68a5e",hair:"#0d0d0d",hairStyle:"short",headgear:!1,star:!1},{num:8,pos:"PR",first:"Jack",last:"Barlow",age:22,heightCm:194,weightKg:110,attr:{speed:67,accel:65,agility:49,strength:99,tackle:83,pass:49,kick:35,hand:68,stamina:70,foot:"R"},skin:"#f1c9a5",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:9,pos:"HK",first:"Tevita",last:"Rourke",age:22,heightCm:172,weightKg:89,attr:{speed:68,accel:71,agility:71,strength:60,tackle:84,pass:85,kick:48,hand:85,stamina:86,foot:"R"},skin:"#a36a42",hair:"#4a2c14",hairStyle:"afro",headgear:!1,star:!1},{num:10,pos:"PR",first:"Tama",last:"Hennessy",age:26,heightCm:197,weightKg:115,attr:{speed:64,accel:63,agility:51,strength:88,tackle:85,pass:50,kick:35,hand:66,stamina:69,foot:"R"},skin:"#c68a5e",hair:"#5e3a1c",hairStyle:"short",headgear:!1,star:!1},{num:11,pos:"SR",first:"Liam",last:"Harrigan",age:27,heightCm:186,weightKg:118,attr:{speed:87,accel:87,agility:79,strength:99,tackle:85,pass:71,kick:35,hand:66,stamina:81,foot:"R"},skin:"#f1c9a5",hair:"#1a1209",hairStyle:"buzz",headgear:!1,star:!1},{num:12,pos:"SR",first:"Paddy",last:"Foelenga",age:28,heightCm:186,weightKg:95,attr:{speed:80,accel:75,agility:65,strength:87,tackle:85,pass:68,kick:44,hand:77,stamina:80,foot:"L"},skin:"#5a3520",hair:"#5e3a1c",hairStyle:"buzz",headgear:!1,star:!1},{num:13,pos:"LK",first:"Kalani",last:"Toulimo",age:24,heightCm:185,weightKg:106,attr:{speed:69,accel:63,agility:55,strength:72,tackle:93,pass:66,kick:35,hand:79,stamina:86,foot:"R"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"long",headgear:!0,star:!1}],sun:[{num:1,pos:"FB",first:"Sam",last:"Garrity",age:23,heightCm:190,weightKg:89,attr:{speed:78,accel:77,agility:78,strength:53,tackle:68,pass:87,kick:88,hand:84,stamina:86,foot:"L"},skin:"#a36a42",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:2,pos:"WG",first:"Declan",last:"Tolhurst",age:23,heightCm:189,weightKg:96,attr:{speed:96,accel:94,agility:90,strength:76,tackle:64,pass:57,kick:37,hand:83,stamina:81,foot:"R"},skin:"#c68a5e",hair:"#7a5229",hairStyle:"mohawk",headgear:!1,star:!1},{num:3,pos:"CE",first:"Tevita",last:"Moorafe",age:28,heightCm:191,weightKg:96,attr:{speed:86,accel:82,agility:76,strength:70,tackle:78,pass:73,kick:46,hand:79,stamina:84,foot:"L"},skin:"#c68a5e",hair:"#4a2c14",hairStyle:"long",headgear:!1,star:!1},{num:4,pos:"CE",first:"Brodie",last:"Gillanders",age:26,heightCm:190,weightKg:105,attr:{speed:93,accel:91,agility:83,strength:84,tackle:73,pass:60,kick:40,hand:75,stamina:83,foot:"R"},skin:"#5a3520",hair:"#5e3a1c",hairStyle:"afro",headgear:!1,star:!1},{num:5,pos:"WG",first:"Malakai",last:"Teanalu",age:29,heightCm:180,weightKg:94,attr:{speed:93,accel:85,agility:78,strength:67,tackle:62,pass:59,kick:42,hand:83,stamina:83,foot:"R"},skin:"#8d5a3a",hair:"#0d0d0d",hairStyle:"buzz",headgear:!1,star:!1},{num:6,pos:"FE",first:"Mason",last:"Saanaki",age:21,heightCm:181,weightKg:84,attr:{speed:83,accel:84,agility:85,strength:60,tackle:64,pass:83,kick:87,hand:82,stamina:81,foot:"R"},skin:"#8d5a3a",hair:"#0d0d0d",hairStyle:"afro",headgear:!1,star:!1},{num:7,pos:"HB",first:"Mosese",last:"Gillanders",age:29,heightCm:182,weightKg:92,attr:{speed:80,accel:88,agility:93,strength:62,tackle:71,pass:99,kick:80,hand:89,stamina:87,foot:"R"},skin:"#8d5a3a",hair:"#2b1a0d",hairStyle:"buzz",headgear:!1,star:!1},{num:8,pos:"PR",first:"Nathan",last:"Saleana",age:27,heightCm:193,weightKg:122,attr:{speed:69,accel:65,agility:45,strength:91,tackle:90,pass:47,kick:35,hand:65,stamina:68,foot:"R"},skin:"#a36a42",hair:"#7a5229",hairStyle:"bald",headgear:!1,star:!1},{num:9,pos:"HK",first:"Wiremu",last:"Kingsley",age:32,heightCm:181,weightKg:92,attr:{speed:77,accel:80,agility:79,strength:63,tackle:87,pass:86,kick:58,hand:75,stamina:91,foot:"R"},skin:"#a36a42",hair:"#c9a25a",hairStyle:"buzz",headgear:!1,star:!1},{num:10,pos:"PR",first:"Eli",last:"Mouana",age:34,heightCm:189,weightKg:109,attr:{speed:72,accel:74,agility:54,strength:99,tackle:71,pass:66,kick:35,hand:74,stamina:66,foot:"R"},skin:"#e0ac82",hair:"#0d0d0d",hairStyle:"long",headgear:!1,star:!1},{num:11,pos:"SR",first:"Brodie",last:"Taitoola",age:20,heightCm:190,weightKg:102,attr:{speed:84,accel:78,agility:68,strength:83,tackle:92,pass:54,kick:35,hand:72,stamina:86,foot:"L"},skin:"#f1c9a5",hair:"#7a5229",hairStyle:"mohawk",headgear:!1,star:!1},{num:12,pos:"SR",first:"Luke",last:"Crawley",age:30,heightCm:198,weightKg:101,attr:{speed:71,accel:66,agility:57,strength:76,tackle:78,pass:62,kick:35,hand:75,stamina:75,foot:"R"},skin:"#c68a5e",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:13,pos:"LK",first:"Wiremu",last:"Toifaola",age:26,heightCm:182,weightKg:112,attr:{speed:74,accel:69,agility:59,strength:79,tackle:84,pass:65,kick:35,hand:77,stamina:90,foot:"R"},skin:"#f1c9a5",hair:"#5e3a1c",hairStyle:"long",headgear:!1,star:!1}],rgr:[{num:1,pos:"FB",first:"Tai",last:"Morrow",age:24,heightCm:199,weightKg:97,attr:{speed:94,accel:93,agility:94,strength:66,tackle:64,pass:76,kick:70,hand:95,stamina:81,foot:"L"},skin:"#e0ac82",hair:"#7a5229",hairStyle:"buzz",headgear:!1,star:!1},{num:2,pos:"WG",first:"Tyson",last:"McCrae",age:29,heightCm:192,weightKg:96,attr:{speed:91,accel:86,agility:83,strength:68,tackle:65,pass:52,kick:37,hand:76,stamina:78,foot:"R"},skin:"#5a3520",hair:"#0d0d0d",hairStyle:"mohawk",headgear:!1,star:!1},{num:3,pos:"CE",first:"Seth",last:"Harrigan",age:29,heightCm:187,weightKg:108,attr:{speed:81,accel:80,agility:75,strength:81,tackle:74,pass:62,kick:39,hand:79,stamina:78,foot:"R"},skin:"#7a4a2c",hair:"#2b1a0d",hairStyle:"mohawk",headgear:!1,star:!1},{num:4,pos:"CE",first:"Eli",last:"Hennessy",age:29,heightCm:191,weightKg:98,attr:{speed:81,accel:75,agility:70,strength:68,tackle:77,pass:60,kick:41,hand:77,stamina:78,foot:"L"},skin:"#8d5a3a",hair:"#0d0d0d",hairStyle:"afro",headgear:!1,star:!1},{num:5,pos:"WG",first:"Bailey",last:"Foleafe",age:30,heightCm:195,weightKg:98,attr:{speed:98,accel:97,agility:89,strength:63,tackle:64,pass:50,kick:42,hand:78,stamina:75,foot:"R"},skin:"#c68a5e",hair:"#7a5229",hairStyle:"short",headgear:!1,star:!1},{num:6,pos:"FE",first:"Darcy",last:"Ostrowski",age:27,heightCm:176,weightKg:91,attr:{speed:77,accel:81,agility:83,strength:67,tackle:69,pass:87,kick:81,hand:92,stamina:86,foot:"R"},skin:"#d9a47a",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:7,pos:"HB",first:"Fletcher",last:"Crawley",age:27,heightCm:181,weightKg:93,attr:{speed:84,accel:88,agility:93,strength:60,tackle:54,pass:99,kick:91,hand:98,stamina:81,foot:"R"},skin:"#7a4a2c",hair:"#c9a25a",hairStyle:"afro",headgear:!1,star:!0},{num:8,pos:"PR",first:"Joel",last:"Calloway",age:26,heightCm:188,weightKg:109,attr:{speed:70,accel:76,agility:63,strength:99,tackle:90,pass:52,kick:35,hand:71,stamina:73,foot:"R"},skin:"#7a4a2c",hair:"#2b1a0d",hairStyle:"short",headgear:!0,star:!1},{num:9,pos:"HK",first:"Joel",last:"Faoravai",age:32,heightCm:170,weightKg:89,attr:{speed:77,accel:86,agility:83,strength:67,tackle:88,pass:95,kick:60,hand:85,stamina:94,foot:"R"},skin:"#8d5a3a",hair:"#4a2c14",hairStyle:"buzz",headgear:!1,star:!1},{num:10,pos:"PR",first:"Fletcher",last:"Duggan",age:19,heightCm:196,weightKg:107,attr:{speed:61,accel:55,agility:42,strength:83,tackle:86,pass:47,kick:35,hand:74,stamina:75,foot:"R"},skin:"#d9a47a",hair:"#c9a25a",hairStyle:"buzz",headgear:!1,star:!1},{num:11,pos:"SR",first:"Tom",last:"Houlita",age:20,heightCm:184,weightKg:104,attr:{speed:78,accel:74,agility:64,strength:84,tackle:74,pass:58,kick:35,hand:72,stamina:74,foot:"R"},skin:"#7a4a2c",hair:"#c9a25a",hairStyle:"long",headgear:!0,star:!1},{num:12,pos:"SR",first:"Koby",last:"Leanafe",age:29,heightCm:187,weightKg:101,attr:{speed:73,accel:67,agility:59,strength:86,tackle:90,pass:55,kick:35,hand:77,stamina:85,foot:"R"},skin:"#f1c9a5",hair:"#7a5229",hairStyle:"short",headgear:!1,star:!1},{num:13,pos:"LK",first:"Viliami",last:"Houmuna",age:28,heightCm:185,weightKg:102,attr:{speed:69,accel:70,agility:65,strength:85,tackle:91,pass:70,kick:45,hand:77,stamina:88,foot:"L"},skin:"#c68a5e",hair:"#5e3a1c",hairStyle:"long",headgear:!0,star:!1}],har:[{num:1,pos:"FB",first:"Noah",last:"Holloway",age:24,heightCm:191,weightKg:93,attr:{speed:84,accel:84,agility:84,strength:71,tackle:76,pass:72,kick:72,hand:88,stamina:86,foot:"R"},skin:"#e0ac82",hair:"#7a5229",hairStyle:"bald",headgear:!1,star:!1},{num:2,pos:"WG",first:"Ollie",last:"Fauata",age:24,heightCm:184,weightKg:90,attr:{speed:99,accel:95,agility:91,strength:72,tackle:69,pass:58,kick:60,hand:80,stamina:84,foot:"L"},skin:"#c68a5e",hair:"#5e3a1c",hairStyle:"short",headgear:!1,star:!1},{num:3,pos:"CE",first:"Zane",last:"Northcott",age:23,heightCm:185,weightKg:92,attr:{speed:84,accel:86,agility:79,strength:78,tackle:73,pass:62,kick:44,hand:76,stamina:80,foot:"R"},skin:"#c68a5e",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:4,pos:"CE",first:"Junior",last:"Grady",age:22,heightCm:192,weightKg:96,attr:{speed:87,accel:83,agility:78,strength:79,tackle:69,pass:72,kick:42,hand:80,stamina:80,foot:"R"},skin:"#f1c9a5",hair:"#5e3a1c",hairStyle:"bald",headgear:!1,star:!1},{num:5,pos:"WG",first:"Brodie",last:"Dellar",age:27,heightCm:183,weightKg:85,attr:{speed:96,accel:95,agility:89,strength:77,tackle:57,pass:48,kick:50,hand:80,stamina:83,foot:"R"},skin:"#5a3520",hair:"#4a2c14",hairStyle:"long",headgear:!1,star:!1},{num:6,pos:"FE",first:"Nikau",last:"Garrity",age:24,heightCm:184,weightKg:90,attr:{speed:80,accel:83,agility:84,strength:65,tackle:66,pass:81,kick:77,hand:83,stamina:82,foot:"L"},skin:"#8d5a3a",hair:"#5e3a1c",hairStyle:"long",headgear:!1,star:!1},{num:7,pos:"HB",first:"Kane",last:"Corrigan",age:24,heightCm:176,weightKg:90,attr:{speed:86,accel:90,agility:96,strength:63,tackle:61,pass:99,kick:99,hand:92,stamina:84,foot:"R"},skin:"#d9a47a",hair:"#c9a25a",hairStyle:"mohawk",headgear:!1,star:!0},{num:8,pos:"PR",first:"Losa",last:"Paiselu",age:33,heightCm:188,weightKg:108,attr:{speed:64,accel:59,agility:44,strength:94,tackle:84,pass:64,kick:35,hand:69,stamina:68,foot:"R"},skin:"#a36a42",hair:"#4a2c14",hairStyle:"short",headgear:!1,star:!1},{num:9,pos:"HK",first:"Keanu",last:"Benning",age:22,heightCm:180,weightKg:90,attr:{speed:76,accel:78,agility:77,strength:65,tackle:95,pass:82,kick:53,hand:81,stamina:91,foot:"L"},skin:"#d9a47a",hair:"#0d0d0d",hairStyle:"afro",headgear:!1,star:!1},{num:10,pos:"PR",first:"Rhys",last:"Maifana",age:27,heightCm:194,weightKg:99,attr:{speed:61,accel:56,agility:47,strength:84,tackle:91,pass:67,kick:37,hand:72,stamina:74,foot:"R"},skin:"#e0ac82",hair:"#c9a25a",hairStyle:"mohawk",headgear:!1,star:!1},{num:11,pos:"SR",first:"Hamish",last:"Duggan",age:22,heightCm:190,weightKg:113,attr:{speed:70,accel:70,agility:64,strength:92,tackle:87,pass:66,kick:35,hand:78,stamina:82,foot:"R"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"buzz",headgear:!1,star:!1},{num:12,pos:"SR",first:"Rawiri",last:"Mauamo",age:24,heightCm:190,weightKg:90,attr:{speed:77,accel:72,agility:69,strength:82,tackle:82,pass:62,kick:35,hand:72,stamina:79,foot:"R"},skin:"#5a3520",hair:"#7a5229",hairStyle:"short",headgear:!1,star:!1},{num:13,pos:"LK",first:"Zane",last:"Taoranga",age:25,heightCm:190,weightKg:116,attr:{speed:71,accel:72,agility:64,strength:92,tackle:97,pass:78,kick:38,hand:74,stamina:88,foot:"R"},skin:"#e0ac82",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1}],out:[{num:1,pos:"FB",first:"Luke",last:"McCrae",age:22,heightCm:185,weightKg:87,attr:{speed:91,accel:91,agility:89,strength:69,tackle:71,pass:76,kick:74,hand:91,stamina:81,foot:"R"},skin:"#a36a42",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:2,pos:"WG",first:"Tama",last:"Leanana",age:23,heightCm:183,weightKg:99,attr:{speed:99,accel:90,agility:81,strength:69,tackle:53,pass:54,kick:39,hand:82,stamina:69,foot:"R"},skin:"#8d5a3a",hair:"#5e3a1c",hairStyle:"buzz",headgear:!1,star:!1},{num:3,pos:"CE",first:"Dane",last:"Duggan",age:23,heightCm:189,weightKg:99,attr:{speed:79,accel:74,agility:70,strength:65,tackle:85,pass:77,kick:47,hand:80,stamina:79,foot:"R"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"long",headgear:!1,star:!1},{num:4,pos:"CE",first:"Seth",last:"Merriman",age:28,heightCm:183,weightKg:109,attr:{speed:90,accel:91,agility:87,strength:75,tackle:86,pass:69,kick:39,hand:72,stamina:88,foot:"R"},skin:"#7a4a2c",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:5,pos:"WG",first:"Semisi",last:"Castellano",age:24,heightCm:196,weightKg:90,attr:{speed:98,accel:93,agility:88,strength:74,tackle:64,pass:67,kick:55,hand:79,stamina:78,foot:"R"},skin:"#e0ac82",hair:"#0d0d0d",hairStyle:"afro",headgear:!1,star:!1},{num:6,pos:"FE",first:"Nikau",last:"Ogilvie",age:21,heightCm:187,weightKg:86,attr:{speed:75,accel:75,agility:78,strength:54,tackle:75,pass:86,kick:96,hand:89,stamina:85,foot:"R"},skin:"#f1c9a5",hair:"#0d0d0d",hairStyle:"afro",headgear:!1,star:!1},{num:7,pos:"HB",first:"Declan",last:"Ingleby",age:25,heightCm:174,weightKg:81,attr:{speed:82,accel:84,agility:91,strength:57,tackle:55,pass:95,kick:86,hand:93,stamina:82,foot:"L"},skin:"#f1c9a5",hair:"#4a2c14",hairStyle:"buzz",headgear:!1,star:!1},{num:8,pos:"PR",first:"Seth",last:"Grady",age:23,heightCm:190,weightKg:101,attr:{speed:69,accel:72,agility:54,strength:99,tackle:80,pass:48,kick:35,hand:66,stamina:69,foot:"L"},skin:"#5a3520",hair:"#0d0d0d",hairStyle:"short",headgear:!1,star:!1},{num:9,pos:"HK",first:"Isaiah",last:"Ferrier",age:31,heightCm:178,weightKg:85,attr:{speed:77,accel:81,agility:77,strength:69,tackle:90,pass:88,kick:47,hand:83,stamina:96,foot:"R"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"buzz",headgear:!1,star:!1},{num:10,pos:"PR",first:"Zac",last:"Toitoki",age:29,heightCm:192,weightKg:114,attr:{speed:69,accel:64,agility:50,strength:90,tackle:84,pass:47,kick:35,hand:63,stamina:68,foot:"R"},skin:"#e0ac82",hair:"#5e3a1c",hairStyle:"short",headgear:!0,star:!1},{num:11,pos:"SR",first:"Sione",last:"Fairbairn",age:27,heightCm:186,weightKg:104,attr:{speed:72,accel:73,agility:66,strength:91,tackle:83,pass:55,kick:35,hand:75,stamina:79,foot:"R"},skin:"#7a4a2c",hair:"#c9a25a",hairStyle:"mohawk",headgear:!1,star:!1},{num:12,pos:"SR",first:"Viliami",last:"Yardley",age:23,heightCm:190,weightKg:102,attr:{speed:71,accel:69,agility:61,strength:87,tackle:89,pass:57,kick:36,hand:74,stamina:85,foot:"R"},skin:"#8d5a3a",hair:"#7a5229",hairStyle:"long",headgear:!1,star:!1},{num:13,pos:"LK",first:"Aaron",last:"Neuanga",age:25,heightCm:181,weightKg:115,attr:{speed:68,accel:65,agility:60,strength:82,tackle:85,pass:76,kick:46,hand:71,stamina:85,foot:"R"},skin:"#d9a47a",hair:"#0d0d0d",hairStyle:"short",headgear:!1,star:!1}],soc:[{num:1,pos:"FB",first:"Viliami",last:"Teorawhe",age:22,heightCm:188,weightKg:81,attr:{speed:92,accel:92,agility:88,strength:61,tackle:65,pass:66,kick:74,hand:87,stamina:84,foot:"L"},skin:"#e0ac82",hair:"#7a5229",hairStyle:"bald",headgear:!1,star:!1},{num:2,pos:"WG",first:"Isaiah",last:"Haleawhe",age:29,heightCm:183,weightKg:88,attr:{speed:95,accel:94,agility:90,strength:74,tackle:57,pass:52,kick:50,hand:77,stamina:72,foot:"L"},skin:"#d9a47a",hair:"#0d0d0d",hairStyle:"bald",headgear:!1,star:!1},{num:3,pos:"CE",first:"Sefa",last:"Saulivai",age:25,heightCm:192,weightKg:101,attr:{speed:88,accel:90,agility:84,strength:90,tackle:76,pass:74,kick:43,hand:84,stamina:81,foot:"R"},skin:"#c68a5e",hair:"#5e3a1c",hairStyle:"mohawk",headgear:!1,star:!1},{num:4,pos:"CE",first:"Riley",last:"Ashby",age:22,heightCm:185,weightKg:110,attr:{speed:85,accel:88,agility:81,strength:88,tackle:78,pass:60,kick:39,hand:83,stamina:78,foot:"R"},skin:"#e0ac82",hair:"#5e3a1c",hairStyle:"bald",headgear:!1,star:!1},{num:5,pos:"WG",first:"Fletcher",last:"Leulisa",age:32,heightCm:189,weightKg:92,attr:{speed:96,accel:91,agility:78,strength:59,tackle:65,pass:53,kick:55,hand:78,stamina:81,foot:"R"},skin:"#8d5a3a",hair:"#2b1a0d",hairStyle:"bald",headgear:!1,star:!1},{num:6,pos:"FE",first:"Jayden",last:"Toumunga",age:22,heightCm:180,weightKg:83,attr:{speed:83,accel:92,agility:96,strength:64,tackle:71,pass:82,kick:76,hand:87,stamina:81,foot:"R"},skin:"#d9a47a",hair:"#4a2c14",hairStyle:"buzz",headgear:!1,star:!1},{num:7,pos:"HB",first:"Noah",last:"Pauliwhe",age:21,heightCm:174,weightKg:81,attr:{speed:77,accel:80,agility:83,strength:49,tackle:55,pass:91,kick:97,hand:80,stamina:84,foot:"R"},skin:"#d9a47a",hair:"#4a2c14",hairStyle:"afro",headgear:!1,star:!1},{num:8,pos:"PR",first:"Nathan",last:"Fairbairn",age:27,heightCm:186,weightKg:117,attr:{speed:60,accel:57,agility:45,strength:90,tackle:91,pass:56,kick:35,hand:76,stamina:77,foot:"L"},skin:"#c68a5e",hair:"#c9a25a",hairStyle:"mohawk",headgear:!1,star:!1},{num:9,pos:"HK",first:"Mason",last:"Vaekana",age:25,heightCm:177,weightKg:81,attr:{speed:80,accel:80,agility:76,strength:70,tackle:83,pass:85,kick:46,hand:90,stamina:87,foot:"L"},skin:"#5a3520",hair:"#c9a25a",hairStyle:"bald",headgear:!0,star:!1},{num:10,pos:"PR",first:"Xavier",last:"Vickery",age:25,heightCm:189,weightKg:109,attr:{speed:59,accel:62,agility:49,strength:99,tackle:86,pass:51,kick:35,hand:75,stamina:74,foot:"R"},skin:"#8d5a3a",hair:"#c9a25a",hairStyle:"short",headgear:!0,star:!1},{num:11,pos:"SR",first:"Reece",last:"Benning",age:32,heightCm:192,weightKg:103,attr:{speed:74,accel:73,agility:70,strength:91,tackle:79,pass:72,kick:45,hand:69,stamina:82,foot:"R"},skin:"#f1c9a5",hair:"#7a5229",hairStyle:"short",headgear:!0,star:!1},{num:12,pos:"SR",first:"Will",last:"Foiselu",age:27,heightCm:191,weightKg:106,attr:{speed:80,accel:76,agility:70,strength:78,tackle:92,pass:54,kick:35,hand:72,stamina:85,foot:"R"},skin:"#e0ac82",hair:"#0d0d0d",hairStyle:"long",headgear:!1,star:!1},{num:13,pos:"LK",first:"Toby",last:"Drummond",age:25,heightCm:186,weightKg:100,attr:{speed:67,accel:64,agility:53,strength:72,tackle:94,pass:71,kick:35,hand:81,stamina:77,foot:"L"},skin:"#c68a5e",hair:"#5e3a1c",hairStyle:"buzz",headgear:!1,star:!1}],tim:[{num:1,pos:"FB",first:"Kane",last:"Nguyen",age:20,heightCm:190,weightKg:91,attr:{speed:84,accel:78,agility:74,strength:60,tackle:65,pass:63,kick:71,hand:90,stamina:84,foot:"R"},skin:"#8d5a3a",hair:"#5e3a1c",hairStyle:"long",headgear:!1,star:!1},{num:2,pos:"WG",first:"Josh",last:"Foumumo",age:25,heightCm:188,weightKg:95,attr:{speed:89,accel:86,agility:82,strength:72,tackle:64,pass:60,kick:45,hand:87,stamina:79,foot:"R"},skin:"#7a4a2c",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:3,pos:"CE",first:"Will",last:"Mackenna",age:21,heightCm:191,weightKg:105,attr:{speed:81,accel:82,agility:74,strength:76,tackle:76,pass:64,kick:39,hand:78,stamina:76,foot:"R"},skin:"#a36a42",hair:"#4a2c14",hairStyle:"short",headgear:!1,star:!1},{num:4,pos:"CE",first:"Tyson",last:"Gillanders",age:28,heightCm:187,weightKg:97,attr:{speed:86,accel:82,agility:71,strength:71,tackle:72,pass:74,kick:57,hand:81,stamina:80,foot:"R"},skin:"#8d5a3a",hair:"#0d0d0d",hairStyle:"short",headgear:!1,star:!1},{num:5,pos:"WG",first:"Sione",last:"Neisemo",age:20,heightCm:182,weightKg:97,attr:{speed:84,accel:86,agility:81,strength:67,tackle:56,pass:48,kick:37,hand:76,stamina:86,foot:"R"},skin:"#f1c9a5",hair:"#4a2c14",hairStyle:"short",headgear:!1,star:!1},{num:6,pos:"FE",first:"Kane",last:"Hoorasa",age:28,heightCm:174,weightKg:91,attr:{speed:86,accel:89,agility:89,strength:77,tackle:68,pass:80,kick:85,hand:83,stamina:81,foot:"R"},skin:"#5a3520",hair:"#5e3a1c",hairStyle:"buzz",headgear:!1,star:!1},{num:7,pos:"HB",first:"Seth",last:"Vaelewhe",age:24,heightCm:185,weightKg:87,attr:{speed:84,accel:89,agility:94,strength:68,tackle:69,pass:92,kick:91,hand:88,stamina:87,foot:"R"},skin:"#d9a47a",hair:"#c9a25a",hairStyle:"afro",headgear:!1,star:!1},{num:8,pos:"PR",first:"Sione",last:"Vaokawhe",age:29,heightCm:195,weightKg:100,attr:{speed:65,accel:62,agility:49,strength:94,tackle:89,pass:52,kick:35,hand:73,stamina:76,foot:"R"},skin:"#c68a5e",hair:"#2b1a0d",hairStyle:"mohawk",headgear:!1,star:!1},{num:9,pos:"HK",first:"Sam",last:"Blackwood",age:28,heightCm:177,weightKg:78,attr:{speed:69,accel:72,agility:69,strength:58,tackle:85,pass:87,kick:48,hand:82,stamina:95,foot:"R"},skin:"#a36a42",hair:"#7a5229",hairStyle:"mohawk",headgear:!0,star:!1},{num:10,pos:"PR",first:"Oscar",last:"Teokasa",age:29,heightCm:189,weightKg:109,attr:{speed:58,accel:57,agility:43,strength:89,tackle:85,pass:50,kick:35,hand:60,stamina:77,foot:"R"},skin:"#7a4a2c",hair:"#1a1209",hairStyle:"mohawk",headgear:!1,star:!1},{num:11,pos:"SR",first:"Mitch",last:"Nguyen",age:29,heightCm:189,weightKg:107,attr:{speed:76,accel:75,agility:67,strength:83,tackle:72,pass:62,kick:35,hand:83,stamina:78,foot:"R"},skin:"#c68a5e",hair:"#7a5229",hairStyle:"buzz",headgear:!1,star:!1},{num:12,pos:"SR",first:"Corey",last:"Teanalu",age:29,heightCm:192,weightKg:95,attr:{speed:83,accel:78,agility:71,strength:83,tackle:92,pass:63,kick:45,hand:73,stamina:84,foot:"L"},skin:"#5a3520",hair:"#4a2c14",hairStyle:"buzz",headgear:!0,star:!1},{num:13,pos:"LK",first:"Junior",last:"Moelena",age:30,heightCm:182,weightKg:107,attr:{speed:79,accel:76,agility:66,strength:85,tackle:85,pass:77,kick:41,hand:72,stamina:85,foot:"R"},skin:"#7a4a2c",hair:"#5e3a1c",hairStyle:"short",headgear:!1,star:!1}],riv:[{num:1,pos:"FB",first:"Ezra",last:"Neuliwhe",age:26,heightCm:190,weightKg:102,attr:{speed:90,accel:91,agility:90,strength:64,tackle:73,pass:61,kick:71,hand:86,stamina:80,foot:"R"},skin:"#d9a47a",hair:"#5e3a1c",hairStyle:"short",headgear:!1,star:!1},{num:2,pos:"WG",first:"Harley",last:"Toitota",age:27,heightCm:195,weightKg:94,attr:{speed:95,accel:88,agility:82,strength:64,tackle:61,pass:50,kick:40,hand:83,stamina:78,foot:"R"},skin:"#c68a5e",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:3,pos:"CE",first:"Manu",last:"Oduya",age:28,heightCm:194,weightKg:100,attr:{speed:84,accel:83,agility:75,strength:70,tackle:74,pass:67,kick:39,hand:79,stamina:80,foot:"R"},skin:"#8d5a3a",hair:"#5e3a1c",hairStyle:"short",headgear:!1,star:!1},{num:4,pos:"CE",first:"Ollie",last:"Kiitoki",age:25,heightCm:189,weightKg:100,attr:{speed:80,accel:75,agility:69,strength:72,tackle:71,pass:68,kick:41,hand:76,stamina:79,foot:"R"},skin:"#e0ac82",hair:"#2b1a0d",hairStyle:"long",headgear:!1,star:!1},{num:5,pos:"WG",first:"Kane",last:"Lindqvist",age:30,heightCm:185,weightKg:88,attr:{speed:96,accel:89,agility:82,strength:55,tackle:58,pass:57,kick:38,hand:83,stamina:77,foot:"R"},skin:"#c68a5e",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:6,pos:"FE",first:"Liam",last:"Neelevai",age:20,heightCm:178,weightKg:86,attr:{speed:80,accel:78,agility:78,strength:55,tackle:61,pass:89,kick:86,hand:86,stamina:79,foot:"L"},skin:"#a36a42",hair:"#4a2c14",hairStyle:"short",headgear:!1,star:!1},{num:7,pos:"HB",first:"Riley",last:"Vaorapu",age:24,heightCm:175,weightKg:85,attr:{speed:85,accel:93,agility:99,strength:64,tackle:62,pass:95,kick:83,hand:86,stamina:87,foot:"R"},skin:"#8d5a3a",hair:"#2b1a0d",hairStyle:"buzz",headgear:!1,star:!1},{num:8,pos:"PR",first:"Ollie",last:"Saoravai",age:27,heightCm:191,weightKg:114,attr:{speed:63,accel:59,agility:48,strength:97,tackle:81,pass:54,kick:35,hand:69,stamina:74,foot:"R"},skin:"#5a3520",hair:"#c9a25a",hairStyle:"afro",headgear:!1,star:!1},{num:9,pos:"HK",first:"Seth",last:"Corrigan",age:26,heightCm:175,weightKg:87,attr:{speed:77,accel:81,agility:75,strength:67,tackle:85,pass:99,kick:45,hand:87,stamina:89,foot:"R"},skin:"#c68a5e",hair:"#5e3a1c",hairStyle:"short",headgear:!1,star:!1},{num:10,pos:"PR",first:"Brodie",last:"Quayle",age:21,heightCm:190,weightKg:108,attr:{speed:70,accel:67,agility:54,strength:95,tackle:83,pass:47,kick:35,hand:67,stamina:81,foot:"R"},skin:"#d9a47a",hair:"#0d0d0d",hairStyle:"afro",headgear:!1,star:!1},{num:11,pos:"SR",first:"Aaron",last:"Marchetti",age:26,heightCm:190,weightKg:104,attr:{speed:85,accel:87,agility:79,strength:89,tackle:71,pass:59,kick:35,hand:65,stamina:74,foot:"R"},skin:"#f1c9a5",hair:"#c9a25a",hairStyle:"buzz",headgear:!1,star:!1},{num:12,pos:"SR",first:"Ollie",last:"Teekawhe",age:27,heightCm:196,weightKg:103,attr:{speed:78,accel:74,agility:70,strength:83,tackle:81,pass:59,kick:35,hand:69,stamina:78,foot:"R"},skin:"#c68a5e",hair:"#4a2c14",hairStyle:"short",headgear:!0,star:!1},{num:13,pos:"LK",first:"Keanu",last:"Toifalu",age:24,heightCm:193,weightKg:105,attr:{speed:82,accel:82,agility:75,strength:99,tackle:91,pass:87,kick:36,hand:80,stamina:82,foot:"R"},skin:"#5a3520",hair:"#0d0d0d",hairStyle:"short",headgear:!1,star:!1}],sal:[{num:1,pos:"FB",first:"Josh",last:"Blackwood",age:26,heightCm:179,weightKg:96,attr:{speed:88,accel:90,agility:88,strength:62,tackle:64,pass:81,kick:81,hand:89,stamina:80,foot:"L"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:2,pos:"WG",first:"Fletcher",last:"Mackenna",age:23,heightCm:186,weightKg:94,attr:{speed:99,accel:99,agility:92,strength:67,tackle:60,pass:58,kick:48,hand:75,stamina:79,foot:"R"},skin:"#5a3520",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:3,pos:"CE",first:"Mason",last:"Castellano",age:30,heightCm:178,weightKg:96,attr:{speed:78,accel:83,agility:81,strength:75,tackle:67,pass:74,kick:43,hand:76,stamina:82,foot:"R"},skin:"#8d5a3a",hair:"#7a5229",hairStyle:"mohawk",headgear:!1,star:!1},{num:4,pos:"CE",first:"Jordan",last:"Yardley",age:23,heightCm:193,weightKg:95,attr:{speed:85,accel:82,agility:71,strength:78,tackle:79,pass:81,kick:42,hand:80,stamina:82,foot:"L"},skin:"#c68a5e",hair:"#4a2c14",hairStyle:"short",headgear:!1,star:!1},{num:5,pos:"WG",first:"Lachlan",last:"Leumuta",age:22,heightCm:181,weightKg:97,attr:{speed:99,accel:97,agility:93,strength:75,tackle:52,pass:49,kick:46,hand:81,stamina:77,foot:"L"},skin:"#e0ac82",hair:"#0d0d0d",hairStyle:"mohawk",headgear:!1,star:!1},{num:6,pos:"FE",first:"Aaron",last:"Northcott",age:20,heightCm:186,weightKg:92,attr:{speed:91,accel:89,agility:92,strength:71,tackle:71,pass:86,kick:76,hand:91,stamina:81,foot:"R"},skin:"#c68a5e",hair:"#1a1209",hairStyle:"bald",headgear:!1,star:!1},{num:7,pos:"HB",first:"Corey",last:"Marchetti",age:24,heightCm:182,weightKg:98,attr:{speed:83,accel:89,agility:90,strength:71,tackle:70,pass:89,kick:87,hand:85,stamina:84,foot:"R"},skin:"#d9a47a",hair:"#5e3a1c",hairStyle:"long",headgear:!1,star:!1},{num:8,pos:"PR",first:"Cody",last:"Neleapu",age:22,heightCm:194,weightKg:106,attr:{speed:63,accel:59,agility:42,strength:90,tackle:78,pass:54,kick:35,hand:74,stamina:70,foot:"R"},skin:"#8d5a3a",hair:"#7a5229",hairStyle:"long",headgear:!1,star:!1},{num:9,pos:"HK",first:"Ben",last:"Mauliki",age:25,heightCm:175,weightKg:89,attr:{speed:68,accel:70,agility:70,strength:57,tackle:90,pass:79,kick:54,hand:83,stamina:96,foot:"R"},skin:"#a36a42",hair:"#7a5229",hairStyle:"mohawk",headgear:!1,star:!1},{num:10,pos:"PR",first:"Josh",last:"Marchetti",age:29,heightCm:186,weightKg:93,attr:{speed:69,accel:66,agility:57,strength:91,tackle:88,pass:48,kick:35,hand:64,stamina:74,foot:"R"},skin:"#e0ac82",hair:"#0d0d0d",hairStyle:"buzz",headgear:!1,star:!1},{num:11,pos:"SR",first:"Malakai",last:"Vaorafe",age:25,heightCm:196,weightKg:109,attr:{speed:88,accel:82,agility:71,strength:89,tackle:95,pass:54,kick:36,hand:74,stamina:82,foot:"R"},skin:"#d9a47a",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:12,pos:"SR",first:"Sam",last:"Quayle",age:30,heightCm:183,weightKg:111,attr:{speed:73,accel:70,agility:62,strength:83,tackle:81,pass:60,kick:35,hand:70,stamina:84,foot:"R"},skin:"#8d5a3a",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:13,pos:"LK",first:"Flynn",last:"Kiuawhe",age:23,heightCm:185,weightKg:99,attr:{speed:68,accel:65,agility:57,strength:81,tackle:87,pass:74,kick:35,hand:80,stamina:85,foot:"R"},skin:"#a36a42",hair:"#5e3a1c",hairStyle:"buzz",headgear:!0,star:!1}],tab:[{num:1,pos:"FB",first:"Kobe",last:"Faorawhe",age:29,heightCm:189,weightKg:94,attr:{speed:93,accel:89,agility:84,strength:62,tackle:75,pass:74,kick:69,hand:87,stamina:86,foot:"R"},skin:"#5a3520",hair:"#5e3a1c",hairStyle:"short",headgear:!1,star:!1},{num:2,pos:"WG",first:"Tyson",last:"Achterberg",age:23,heightCm:178,weightKg:103,attr:{speed:95,accel:88,agility:83,strength:66,tackle:61,pass:54,kick:42,hand:86,stamina:83,foot:"R"},skin:"#c68a5e",hair:"#2b1a0d",hairStyle:"bald",headgear:!1,star:!1},{num:3,pos:"CE",first:"Rawiri",last:"Toelevai",age:22,heightCm:187,weightKg:107,attr:{speed:81,accel:78,agility:72,strength:81,tackle:80,pass:74,kick:40,hand:70,stamina:83,foot:"L"},skin:"#f1c9a5",hair:"#c9a25a",hairStyle:"buzz",headgear:!1,star:!1},{num:4,pos:"CE",first:"Pita",last:"Tauapu",age:28,heightCm:183,weightKg:100,attr:{speed:88,accel:94,agility:91,strength:91,tackle:88,pass:69,kick:41,hand:81,stamina:83,foot:"R"},skin:"#8d5a3a",hair:"#c9a25a",hairStyle:"short",headgear:!1,star:!1},{num:5,pos:"WG",first:"Wiremu",last:"Saoraki",age:29,heightCm:186,weightKg:93,attr:{speed:99,accel:98,agility:93,strength:71,tackle:64,pass:58,kick:52,hand:75,stamina:81,foot:"L"},skin:"#7a4a2c",hair:"#c9a25a",hairStyle:"mohawk",headgear:!1,star:!1},{num:6,pos:"FE",first:"Mitch",last:"Tauliwhe",age:34,heightCm:175,weightKg:80,attr:{speed:75,accel:76,agility:78,strength:54,tackle:72,pass:94,kick:76,hand:88,stamina:83,foot:"R"},skin:"#8d5a3a",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:7,pos:"HB",first:"Eli",last:"Kiokavai",age:26,heightCm:182,weightKg:86,attr:{speed:74,accel:76,agility:80,strength:54,tackle:62,pass:92,kick:99,hand:84,stamina:86,foot:"R"},skin:"#a36a42",hair:"#0d0d0d",hairStyle:"long",headgear:!1,star:!1},{num:8,pos:"PR",first:"Isaiah",last:"Saulisa",age:22,heightCm:194,weightKg:108,attr:{speed:68,accel:65,agility:51,strength:92,tackle:90,pass:47,kick:35,hand:67,stamina:65,foot:"R"},skin:"#7a4a2c",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:9,pos:"HK",first:"Darcy",last:"Upfield",age:23,heightCm:174,weightKg:97,attr:{speed:79,accel:80,agility:77,strength:65,tackle:93,pass:82,kick:44,hand:87,stamina:95,foot:"L"},skin:"#8d5a3a",hair:"#7a5229",hairStyle:"bald",headgear:!1,star:!1},{num:10,pos:"PR",first:"Noah",last:"Strickland",age:27,heightCm:188,weightKg:114,attr:{speed:69,accel:62,agility:44,strength:97,tackle:94,pass:52,kick:35,hand:68,stamina:66,foot:"R"},skin:"#8d5a3a",hair:"#1a1209",hairStyle:"afro",headgear:!1,star:!1},{num:11,pos:"SR",first:"Xavier",last:"Leumuna",age:26,heightCm:187,weightKg:107,attr:{speed:79,accel:76,agility:66,strength:85,tackle:88,pass:62,kick:35,hand:70,stamina:82,foot:"R"},skin:"#d9a47a",hair:"#4a2c14",hairStyle:"long",headgear:!1,star:!1},{num:12,pos:"SR",first:"Malakai",last:"Teorafe",age:25,heightCm:186,weightKg:109,attr:{speed:79,accel:78,agility:65,strength:97,tackle:89,pass:55,kick:35,hand:70,stamina:85,foot:"L"},skin:"#d9a47a",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:13,pos:"LK",first:"Jett",last:"Lennox",age:28,heightCm:187,weightKg:107,attr:{speed:72,accel:68,agility:56,strength:81,tackle:85,pass:66,kick:35,hand:78,stamina:86,foot:"R"},skin:"#c68a5e",hair:"#7a5229",hairStyle:"bald",headgear:!1,star:!1}],cop:[{num:1,pos:"FB",first:"Callum",last:"Benning",age:26,heightCm:180,weightKg:81,attr:{speed:85,accel:85,agility:84,strength:67,tackle:54,pass:72,kick:71,hand:94,stamina:83,foot:"R"},skin:"#f1c9a5",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:2,pos:"WG",first:"Jayden",last:"Hennessy",age:26,heightCm:185,weightKg:96,attr:{speed:87,accel:90,agility:84,strength:69,tackle:61,pass:54,kick:37,hand:79,stamina:82,foot:"R"},skin:"#d9a47a",hair:"#2b1a0d",hairStyle:"long",headgear:!1,star:!1},{num:3,pos:"CE",first:"Joel",last:"Toekamo",age:22,heightCm:181,weightKg:99,attr:{speed:87,accel:83,agility:74,strength:74,tackle:83,pass:62,kick:39,hand:79,stamina:85,foot:"L"},skin:"#5a3520",hair:"#0d0d0d",hairStyle:"buzz",headgear:!1,star:!1},{num:4,pos:"CE",first:"Hudson",last:"Garrity",age:23,heightCm:185,weightKg:97,attr:{speed:84,accel:81,agility:71,strength:66,tackle:79,pass:68,kick:49,hand:75,stamina:82,foot:"R"},skin:"#c68a5e",hair:"#c9a25a",hairStyle:"bald",headgear:!1,star:!1},{num:5,pos:"WG",first:"Blake",last:"Brennan",age:27,heightCm:180,weightKg:94,attr:{speed:90,accel:89,agility:83,strength:81,tackle:62,pass:50,kick:45,hand:79,stamina:81,foot:"R"},skin:"#c68a5e",hair:"#5e3a1c",hairStyle:"bald",headgear:!1,star:!1},{num:6,pos:"FE",first:"Corey",last:"Leifalu",age:31,heightCm:184,weightKg:89,attr:{speed:91,accel:92,agility:91,strength:68,tackle:60,pass:84,kick:92,hand:87,stamina:82,foot:"R"},skin:"#7a4a2c",hair:"#7a5229",hairStyle:"short",headgear:!1,star:!1},{num:7,pos:"HB",first:"Malakai",last:"Ostrowski",age:25,heightCm:183,weightKg:86,attr:{speed:70,accel:73,agility:79,strength:51,tackle:66,pass:86,kick:83,hand:88,stamina:86,foot:"R"},skin:"#8d5a3a",hair:"#5e3a1c",hairStyle:"short",headgear:!1,star:!1},{num:8,pos:"PR",first:"Sefa",last:"Vaisemo",age:32,heightCm:185,weightKg:115,attr:{speed:65,accel:61,agility:45,strength:93,tackle:86,pass:54,kick:35,hand:65,stamina:72,foot:"R"},skin:"#c68a5e",hair:"#1a1209",hairStyle:"buzz",headgear:!1,star:!1},{num:9,pos:"HK",first:"Joel",last:"Petrakis",age:24,heightCm:174,weightKg:88,attr:{speed:78,accel:83,agility:83,strength:69,tackle:93,pass:89,kick:46,hand:87,stamina:93,foot:"R"},skin:"#a36a42",hair:"#5e3a1c",hairStyle:"short",headgear:!0,star:!1},{num:10,pos:"PR",first:"Joel",last:"Kilbride",age:22,heightCm:189,weightKg:115,attr:{speed:66,accel:66,agility:52,strength:99,tackle:81,pass:67,kick:35,hand:60,stamina:77,foot:"R"},skin:"#e0ac82",hair:"#0d0d0d",hairStyle:"buzz",headgear:!0,star:!1},{num:11,pos:"SR",first:"Harley",last:"Strickland",age:29,heightCm:195,weightKg:98,attr:{speed:80,accel:77,agility:71,strength:76,tackle:81,pass:56,kick:35,hand:72,stamina:78,foot:"L"},skin:"#e0ac82",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:12,pos:"SR",first:"Max",last:"Salealu",age:28,heightCm:190,weightKg:107,attr:{speed:74,accel:71,agility:63,strength:89,tackle:85,pass:61,kick:35,hand:73,stamina:84,foot:"L"},skin:"#a36a42",hair:"#5e3a1c",hairStyle:"buzz",headgear:!1,star:!1},{num:13,pos:"LK",first:"Darcy",last:"Teelesa",age:24,heightCm:192,weightKg:96,attr:{speed:71,accel:71,agility:62,strength:84,tackle:97,pass:74,kick:45,hand:79,stamina:84,foot:"R"},skin:"#c68a5e",hair:"#2b1a0d",hairStyle:"buzz",headgear:!1,star:!1}],gec:[{num:1,pos:"FB",first:"Ben",last:"Gillanders",age:30,heightCm:188,weightKg:95,attr:{speed:83,accel:82,agility:83,strength:62,tackle:76,pass:70,kick:70,hand:87,stamina:79,foot:"L"},skin:"#c68a5e",hair:"#0d0d0d",hairStyle:"mohawk",headgear:!1,star:!1},{num:2,pos:"WG",first:"Riley",last:"Merriman",age:22,heightCm:188,weightKg:90,attr:{speed:88,accel:86,agility:79,strength:72,tackle:59,pass:68,kick:60,hand:81,stamina:86,foot:"L"},skin:"#7a4a2c",hair:"#1a1209",hairStyle:"afro",headgear:!1,star:!1},{num:3,pos:"CE",first:"Kalani",last:"Neumuta",age:25,heightCm:187,weightKg:109,attr:{speed:86,accel:86,agility:79,strength:81,tackle:78,pass:60,kick:39,hand:77,stamina:80,foot:"R"},skin:"#f1c9a5",hair:"#c9a25a",hairStyle:"afro",headgear:!1,star:!1},{num:4,pos:"CE",first:"Sam",last:"Ogilvie",age:25,heightCm:185,weightKg:102,attr:{speed:78,accel:72,agility:66,strength:67,tackle:76,pass:63,kick:39,hand:76,stamina:76,foot:"L"},skin:"#e0ac82",hair:"#1a1209",hairStyle:"afro",headgear:!1,star:!1},{num:5,pos:"WG",first:"Tai",last:"Moulife",age:28,heightCm:180,weightKg:86,attr:{speed:95,accel:92,agility:82,strength:61,tackle:67,pass:50,kick:48,hand:81,stamina:84,foot:"R"},skin:"#8d5a3a",hair:"#0d0d0d",hairStyle:"buzz",headgear:!1,star:!1},{num:6,pos:"FE",first:"Ezra",last:"Elphick",age:28,heightCm:169,weightKg:85,attr:{speed:84,accel:86,agility:88,strength:63,tackle:56,pass:84,kick:84,hand:85,stamina:81,foot:"R"},skin:"#e0ac82",hair:"#2b1a0d",hairStyle:"buzz",headgear:!1,star:!1},{num:7,pos:"HB",first:"Nathan",last:"Duggan",age:25,heightCm:174,weightKg:86,attr:{speed:78,accel:80,agility:82,strength:51,tackle:53,pass:92,kick:95,hand:85,stamina:84,foot:"L"},skin:"#f1c9a5",hair:"#5e3a1c",hairStyle:"long",headgear:!1,star:!1},{num:8,pos:"PR",first:"Manu",last:"Nguyen",age:30,heightCm:188,weightKg:109,attr:{speed:71,accel:68,agility:56,strength:91,tackle:88,pass:47,kick:35,hand:58,stamina:65,foot:"R"},skin:"#f1c9a5",hair:"#1a1209",hairStyle:"mohawk",headgear:!1,star:!1},{num:9,pos:"HK",first:"Ariki",last:"Ogilvie",age:26,heightCm:178,weightKg:94,attr:{speed:86,accel:85,agility:87,strength:66,tackle:75,pass:86,kick:46,hand:77,stamina:87,foot:"R"},skin:"#7a4a2c",hair:"#4a2c14",hairStyle:"bald",headgear:!0,star:!1},{num:10,pos:"PR",first:"Pita",last:"Hawtrey",age:31,heightCm:189,weightKg:109,attr:{speed:63,accel:58,agility:44,strength:91,tackle:76,pass:64,kick:35,hand:67,stamina:68,foot:"L"},skin:"#7a4a2c",hair:"#5e3a1c",hairStyle:"buzz",headgear:!0,star:!1},{num:11,pos:"SR",first:"Jarrah",last:"Whitlock",age:23,heightCm:190,weightKg:111,attr:{speed:81,accel:78,agility:68,strength:90,tackle:80,pass:59,kick:35,hand:70,stamina:78,foot:"R"},skin:"#7a4a2c",hair:"#5e3a1c",hairStyle:"short",headgear:!1,star:!1},{num:12,pos:"SR",first:"Jett",last:"Neitolu",age:26,heightCm:188,weightKg:98,attr:{speed:73,accel:70,agility:61,strength:84,tackle:79,pass:62,kick:35,hand:72,stamina:82,foot:"R"},skin:"#5a3520",hair:"#4a2c14",hairStyle:"afro",headgear:!0,star:!1},{num:13,pos:"LK",first:"Bailey",last:"Mulgrew",age:23,heightCm:185,weightKg:106,attr:{speed:69,accel:64,agility:52,strength:79,tackle:94,pass:66,kick:35,hand:76,stamina:80,foot:"R"},skin:"#a36a42",hair:"#0d0d0d",hairStyle:"mohawk",headgear:!1,star:!1}],wom:[{num:1,pos:"FB",first:"Ryan",last:"Hoekavai",age:24,heightCm:194,weightKg:98,attr:{speed:85,accel:86,agility:84,strength:61,tackle:72,pass:67,kick:73,hand:91,stamina:71,foot:"R"},skin:"#8d5a3a",hair:"#c9a25a",hairStyle:"buzz",headgear:!1,star:!1},{num:2,pos:"WG",first:"Jett",last:"Fairbairn",age:27,heightCm:184,weightKg:90,attr:{speed:99,accel:96,agility:89,strength:57,tackle:68,pass:66,kick:47,hand:86,stamina:82,foot:"R"},skin:"#8d5a3a",hair:"#0d0d0d",hairStyle:"afro",headgear:!1,star:!1},{num:3,pos:"CE",first:"Brodie",last:"Taeleola",age:21,heightCm:191,weightKg:92,attr:{speed:97,accel:96,agility:91,strength:75,tackle:78,pass:81,kick:55,hand:81,stamina:74,foot:"L"},skin:"#a36a42",hair:"#5e3a1c",hairStyle:"buzz",headgear:!1,star:!1},{num:4,pos:"CE",first:"Vinnie",last:"Yardley",age:27,heightCm:181,weightKg:97,attr:{speed:77,accel:73,agility:67,strength:71,tackle:73,pass:66,kick:43,hand:76,stamina:78,foot:"R"},skin:"#e0ac82",hair:"#7a5229",hairStyle:"short",headgear:!1,star:!1},{num:5,pos:"WG",first:"Ollie",last:"Radcliffe",age:21,heightCm:192,weightKg:101,attr:{speed:92,accel:90,agility:86,strength:68,tackle:70,pass:55,kick:37,hand:79,stamina:87,foot:"R"},skin:"#7a4a2c",hair:"#4a2c14",hairStyle:"mohawk",headgear:!1,star:!1},{num:6,pos:"FE",first:"Nikau",last:"Fookana",age:30,heightCm:178,weightKg:88,attr:{speed:80,accel:80,agility:85,strength:58,tackle:59,pass:99,kick:85,hand:82,stamina:79,foot:"R"},skin:"#a36a42",hair:"#5e3a1c",hairStyle:"afro",headgear:!1,star:!1},{num:7,pos:"HB",first:"Jordan",last:"Radcliffe",age:24,heightCm:183,weightKg:81,attr:{speed:72,accel:75,agility:81,strength:52,tackle:51,pass:96,kick:88,hand:87,stamina:79,foot:"R"},skin:"#a36a42",hair:"#7a5229",hairStyle:"short",headgear:!1,star:!1},{num:8,pos:"PR",first:"Tevita",last:"Barlow",age:25,heightCm:188,weightKg:115,attr:{speed:61,accel:53,agility:39,strength:91,tackle:84,pass:47,kick:35,hand:69,stamina:69,foot:"R"},skin:"#a36a42",hair:"#4a2c14",hairStyle:"short",headgear:!1,star:!1},{num:9,pos:"HK",first:"Tama",last:"McCrae",age:24,heightCm:175,weightKg:96,attr:{speed:79,accel:85,agility:82,strength:74,tackle:77,pass:89,kick:48,hand:84,stamina:83,foot:"R"},skin:"#f1c9a5",hair:"#c9a25a",hairStyle:"buzz",headgear:!1,star:!1},{num:10,pos:"PR",first:"Toby",last:"Kiuanga",age:29,heightCm:188,weightKg:122,attr:{speed:66,accel:62,agility:46,strength:94,tackle:80,pass:52,kick:35,hand:62,stamina:78,foot:"R"},skin:"#f1c9a5",hair:"#7a5229",hairStyle:"mohawk",headgear:!0,star:!1},{num:11,pos:"SR",first:"Aaron",last:"Holeawhe",age:27,heightCm:189,weightKg:109,attr:{speed:79,accel:84,agility:79,strength:99,tackle:73,pass:61,kick:40,hand:77,stamina:78,foot:"R"},skin:"#8d5a3a",hair:"#2b1a0d",hairStyle:"afro",headgear:!1,star:!1},{num:12,pos:"SR",first:"Brodie",last:"Grady",age:23,heightCm:189,weightKg:103,attr:{speed:86,accel:83,agility:77,strength:90,tackle:80,pass:73,kick:35,hand:77,stamina:80,foot:"R"},skin:"#f1c9a5",hair:"#c9a25a",hairStyle:"afro",headgear:!1,star:!1},{num:13,pos:"LK",first:"Reece",last:"Sheedy",age:27,heightCm:193,weightKg:107,attr:{speed:77,accel:78,agility:75,strength:86,tackle:92,pass:86,kick:53,hand:77,stamina:90,foot:"R"},skin:"#c68a5e",hair:"#2b1a0d",hairStyle:"buzz",headgear:!1,star:!1}],lor:[{num:1,pos:"FB",first:"Viliami",last:"Eastwood",age:22,heightCm:188,weightKg:90,attr:{speed:79,accel:73,agility:68,strength:56,tackle:72,pass:70,kick:71,hand:88,stamina:85,foot:"L"},skin:"#5a3520",hair:"#0d0d0d",hairStyle:"bald",headgear:!1,star:!1},{num:2,pos:"WG",first:"Jarrah",last:"Saanapu",age:30,heightCm:186,weightKg:97,attr:{speed:90,accel:90,agility:87,strength:70,tackle:55,pass:58,kick:42,hand:79,stamina:74,foot:"R"},skin:"#c68a5e",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:3,pos:"CE",first:"Liam",last:"Mulgrew",age:29,heightCm:188,weightKg:99,attr:{speed:80,accel:80,agility:72,strength:76,tackle:81,pass:67,kick:39,hand:76,stamina:77,foot:"R"},skin:"#5a3520",hair:"#c9a25a",hairStyle:"long",headgear:!1,star:!1},{num:4,pos:"CE",first:"Koby",last:"Kiekavai",age:31,heightCm:189,weightKg:101,attr:{speed:87,accel:82,agility:75,strength:75,tackle:60,pass:66,kick:40,hand:75,stamina:79,foot:"R"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"bald",headgear:!1,star:!1},{num:5,pos:"WG",first:"Zane",last:"Tookafe",age:23,heightCm:188,weightKg:84,attr:{speed:90,accel:84,agility:81,strength:55,tackle:65,pass:60,kick:60,hand:83,stamina:72,foot:"L"},skin:"#8d5a3a",hair:"#4a2c14",hairStyle:"mohawk",headgear:!1,star:!1},{num:6,pos:"FE",first:"Xavier",last:"Neleaki",age:25,heightCm:178,weightKg:93,attr:{speed:81,accel:79,agility:79,strength:61,tackle:61,pass:82,kick:99,hand:82,stamina:82,foot:"R"},skin:"#f1c9a5",hair:"#c9a25a",hairStyle:"buzz",headgear:!1,star:!1},{num:7,pos:"HB",first:"Harley",last:"Holloway",age:24,heightCm:174,weightKg:81,attr:{speed:70,accel:72,agility:77,strength:46,tackle:69,pass:81,kick:77,hand:83,stamina:85,foot:"R"},skin:"#e0ac82",hair:"#7a5229",hairStyle:"mohawk",headgear:!1,star:!1},{num:8,pos:"PR",first:"Malakai",last:"Northcott",age:29,heightCm:189,weightKg:110,attr:{speed:64,accel:66,agility:50,strength:99,tackle:95,pass:47,kick:35,hand:69,stamina:73,foot:"R"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"mohawk",headgear:!0,star:!1},{num:9,pos:"HK",first:"Blake",last:"Teulina",age:20,heightCm:171,weightKg:93,attr:{speed:73,accel:82,agility:78,strength:70,tackle:96,pass:83,kick:48,hand:83,stamina:93,foot:"R"},skin:"#d9a47a",hair:"#4a2c14",hairStyle:"mohawk",headgear:!0,star:!1},{num:10,pos:"PR",first:"Mason",last:"Brannigan",age:23,heightCm:197,weightKg:112,attr:{speed:59,accel:61,agility:43,strength:96,tackle:94,pass:52,kick:35,hand:75,stamina:80,foot:"R"},skin:"#f1c9a5",hair:"#0d0d0d",hairStyle:"bald",headgear:!1,star:!1},{num:11,pos:"SR",first:"Tyson",last:"Strickland",age:25,heightCm:192,weightKg:103,attr:{speed:72,accel:70,agility:62,strength:80,tackle:94,pass:55,kick:35,hand:77,stamina:87,foot:"L"},skin:"#a36a42",hair:"#0d0d0d",hairStyle:"short",headgear:!0,star:!1},{num:12,pos:"SR",first:"Ethan",last:"Kilbride",age:29,heightCm:184,weightKg:106,attr:{speed:73,accel:67,agility:59,strength:81,tackle:93,pass:75,kick:35,hand:69,stamina:85,foot:"R"},skin:"#d9a47a",hair:"#0d0d0d",hairStyle:"mohawk",headgear:!1,star:!1},{num:13,pos:"LK",first:"Max",last:"Teulilu",age:25,heightCm:190,weightKg:106,attr:{speed:73,accel:77,agility:67,strength:95,tackle:96,pass:66,kick:41,hand:81,stamina:92,foot:"R"},skin:"#e0ac82",hair:"#0d0d0d",hairStyle:"short",headgear:!0,star:!1}],qul:[{num:1,pos:"FB",first:"Jarrah",last:"Mulgrew",age:29,heightCm:185,weightKg:90,attr:{speed:81,accel:77,agility:74,strength:61,tackle:75,pass:69,kick:69,hand:79,stamina:86,foot:"R"},skin:"#a36a42",hair:"#4a2c14",hairStyle:"mohawk",headgear:!1,star:!1},{num:2,pos:"WG",first:"Dane",last:"Okafor",age:28,heightCm:189,weightKg:101,attr:{speed:89,accel:87,agility:79,strength:62,tackle:67,pass:54,kick:54,hand:82,stamina:86,foot:"R"},skin:"#a36a42",hair:"#c9a25a",hairStyle:"short",headgear:!1,star:!1},{num:3,pos:"CE",first:"Kane",last:"Maorawhe",age:25,heightCm:187,weightKg:105,attr:{speed:92,accel:89,agility:84,strength:78,tackle:72,pass:72,kick:43,hand:82,stamina:70,foot:"R"},skin:"#c68a5e",hair:"#7a5229",hairStyle:"afro",headgear:!1,star:!1},{num:4,pos:"CE",first:"Pita",last:"Rourke",age:28,heightCm:187,weightKg:101,attr:{speed:78,accel:76,agility:69,strength:72,tackle:77,pass:72,kick:39,hand:78,stamina:76,foot:"R"},skin:"#a36a42",hair:"#c9a25a",hairStyle:"short",headgear:!1,star:!1},{num:5,pos:"WG",first:"Eli",last:"Moleanga",age:28,heightCm:181,weightKg:97,attr:{speed:94,accel:90,agility:84,strength:70,tackle:60,pass:60,kick:44,hand:81,stamina:72,foot:"R"},skin:"#a36a42",hair:"#5e3a1c",hairStyle:"buzz",headgear:!1,star:!1},{num:6,pos:"FE",first:"Jack",last:"Vaorafe",age:31,heightCm:177,weightKg:83,attr:{speed:76,accel:79,agility:83,strength:60,tackle:56,pass:90,kick:83,hand:94,stamina:80,foot:"R"},skin:"#f1c9a5",hair:"#1a1209",hairStyle:"buzz",headgear:!1,star:!1},{num:7,pos:"HB",first:"Sefa",last:"Duggan",age:21,heightCm:178,weightKg:90,attr:{speed:94,accel:97,agility:99,strength:71,tackle:63,pass:89,kick:91,hand:87,stamina:80,foot:"R"},skin:"#7a4a2c",hair:"#7a5229",hairStyle:"short",headgear:!1,star:!0},{num:8,pos:"PR",first:"Oscar",last:"Foelena",age:24,heightCm:193,weightKg:107,attr:{speed:60,accel:65,agility:53,strength:96,tackle:96,pass:50,kick:35,hand:73,stamina:81,foot:"R"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"mohawk",headgear:!1,star:!1},{num:9,pos:"HK",first:"Tai",last:"Kianafe",age:30,heightCm:173,weightKg:91,attr:{speed:81,accel:84,agility:82,strength:68,tackle:88,pass:86,kick:58,hand:87,stamina:95,foot:"R"},skin:"#5a3520",hair:"#c9a25a",hairStyle:"short",headgear:!0,star:!1},{num:10,pos:"PR",first:"Jett",last:"Calloway",age:27,heightCm:188,weightKg:108,attr:{speed:65,accel:67,agility:51,strength:99,tackle:81,pass:48,kick:35,hand:65,stamina:70,foot:"R"},skin:"#f1c9a5",hair:"#1a1209",hairStyle:"bald",headgear:!1,star:!1},{num:11,pos:"SR",first:"Seth",last:"Kowalski",age:29,heightCm:184,weightKg:106,attr:{speed:74,accel:70,agility:65,strength:81,tackle:89,pass:68,kick:35,hand:73,stamina:82,foot:"R"},skin:"#c68a5e",hair:"#2b1a0d",hairStyle:"long",headgear:!1,star:!1},{num:12,pos:"SR",first:"Dane",last:"Calloway",age:20,heightCm:192,weightKg:100,attr:{speed:70,accel:65,agility:60,strength:77,tackle:89,pass:69,kick:35,hand:86,stamina:83,foot:"R"},skin:"#5a3520",hair:"#1a1209",hairStyle:"short",headgear:!0,star:!1},{num:13,pos:"LK",first:"Lachlan",last:"Zelinski",age:24,heightCm:189,weightKg:109,attr:{speed:66,accel:72,agility:64,strength:90,tackle:98,pass:72,kick:35,hand:82,stamina:91,foot:"R"},skin:"#f1c9a5",hair:"#0d0d0d",hairStyle:"bald",headgear:!0,star:!1}]};var Sr=["speed","accel","agility","strength","tackle","pass","kick","hand","stamina"],sc={speed:"SPD",accel:"ACC",agility:"AGI",strength:"STR",tackle:"TKL",pass:"PAS",kick:"KCK",hand:"HND",stamina:"STA"},ac={speed:"Speed",accel:"Acceleration",agility:"Agility",strength:"Strength",tackle:"Tackling",pass:"Passing",kick:"Kicking",hand:"Handling",stamina:"Stamina"};var Tx={FB:{speed:.2,agility:.15,hand:.2,kick:.1,tackle:.1,pass:.1,accel:.1,strength:.05},WG:{speed:.3,accel:.15,agility:.15,hand:.15,strength:.1,tackle:.1,stamina:.05},CE:{speed:.15,strength:.2,tackle:.2,hand:.15,agility:.1,accel:.1,pass:.1},FE:{pass:.25,kick:.2,agility:.15,hand:.15,speed:.1,tackle:.1,accel:.05},HB:{pass:.25,kick:.25,agility:.15,hand:.15,speed:.1,tackle:.05,accel:.05},PR:{strength:.3,tackle:.3,stamina:.15,hand:.1,speed:.05,accel:.05,pass:.05},HK:{pass:.2,tackle:.25,hand:.15,stamina:.15,agility:.1,accel:.1,strength:.05},SR:{strength:.25,tackle:.25,speed:.15,hand:.1,stamina:.15,agility:.1},LK:{tackle:.3,strength:.25,stamina:.15,pass:.1,hand:.1,speed:.1}};function qs(n,t){let e=Tx[n],i=0,s=0;for(let a in e)i+=t[a]*e[a],s+=e[a];return Math.round(i/s)}function Pu(n){let t=(c,l)=>c.reduce((h,u)=>h+l(u),0)/Math.max(1,c.length),e=Math.round(t(n,c=>qs(c.pos,c.attr))),i=n.filter(c=>["FB","WG","CE","FE","HB","HK"].includes(c.pos)),s=Math.round(t(i,c=>(c.attr.speed+c.attr.agility+c.attr.pass+c.attr.hand)/4)),a=Math.round(t(n,c=>(c.attr.tackle*2+c.attr.strength)/3)),r=n.filter(c=>["PR","HK","SR","LK"].includes(c.pos)),o=Math.round(t(r,c=>(c.attr.strength+c.attr.tackle+c.attr.stamina)/3));return{ovr:e,attack:s,defence:a,pack:o}}function oc(n){return Pu(wr(n))}var Le=[{id:"bay",name:"Bayside Breakers",short:"BAY",primary:"#123a7a",secondary:"#35c4e8",trim:"#ffffff",pattern:"vee",shorts:"#0c2350",socks:"#123a7a",rating:80,alt:{primary:"#f2f2f2",secondary:"#123a7a",pattern:"vee",shorts:"#f2f2f2",socks:"#123a7a"}},{id:"nth",name:"Northgate Thunder",short:"NTH",primary:"#4b1f7a",secondary:"#f2b51d",trim:"#ffffff",pattern:"sash",shorts:"#2a1046",socks:"#4b1f7a",rating:82,alt:{primary:"#f2b51d",secondary:"#4b1f7a",pattern:"sash",shorts:"#4b1f7a",socks:"#f2b51d"}},{id:"irn",name:"Ironvale Miners",short:"IRN",primary:"#1b1b1b",secondary:"#f26a1b",trim:"#ffffff",pattern:"hoops",shorts:"#1b1b1b",socks:"#f26a1b",rating:77,alt:{primary:"#f26a1b",secondary:"#1b1b1b",pattern:"hoops",shorts:"#1b1b1b",socks:"#1b1b1b"}},{id:"sun",name:"Sunset Coast Pelicans",short:"SUN",primary:"#0f8a8a",secondary:"#ffffff",trim:"#f2c94c",pattern:"yoke",shorts:"#ffffff",socks:"#0f8a8a",rating:79,alt:{primary:"#ffffff",secondary:"#0f8a8a",pattern:"yoke",shorts:"#0f8a8a",socks:"#ffffff"}},{id:"rgr",name:"Red Gum Raptors",short:"RGR",primary:"#7a1424",secondary:"#f1e3c4",trim:"#1b1b1b",pattern:"stripes",shorts:"#f1e3c4",socks:"#7a1424",rating:78,alt:{primary:"#f1e3c4",secondary:"#7a1424",pattern:"stripes",shorts:"#7a1424",socks:"#f1e3c4"}},{id:"har",name:"Harbour Kings",short:"HAR",primary:"#1f4fd1",secondary:"#ffd21f",trim:"#ffffff",pattern:"plain",shorts:"#ffd21f",socks:"#1f4fd1",rating:81,alt:{primary:"#ffd21f",secondary:"#1f4fd1",pattern:"plain",shorts:"#1f4fd1",socks:"#ffd21f"}},{id:"out",name:"Outback Stingers",short:"OUT",primary:"#1f7a3a",secondary:"#f2d21f",trim:"#1b1b1b",pattern:"vee",shorts:"#1b1b1b",socks:"#1f7a3a",rating:76,alt:{primary:"#f2d21f",secondary:"#1f7a3a",pattern:"vee",shorts:"#1f7a3a",socks:"#f2d21f"}},{id:"soc",name:"Southern Comets",short:"SOC",primary:"#d11f2a",secondary:"#ffffff",trim:"#1b1b1b",pattern:"hoops",shorts:"#1b1b1b",socks:"#d11f2a",rating:80,alt:{primary:"#ffffff",secondary:"#d11f2a",pattern:"hoops",shorts:"#d11f2a",socks:"#ffffff"}},{id:"tim",name:"Timberline Possums",short:"TIM",primary:"#1e5631",secondary:"#f2f2f2",trim:"#c9a227",pattern:"yoke",shorts:"#1e5631",socks:"#f2f2f2",rating:80,alt:{primary:"#f2f2f2",secondary:"#1e5631",pattern:"yoke",shorts:"#1e5631",socks:"#1e5631"}},{id:"riv",name:"Riverbend Otters",short:"RIV",primary:"#6b4226",secondary:"#e8c07a",trim:"#ffffff",pattern:"hoops",shorts:"#3d2414",socks:"#6b4226",rating:80,alt:{primary:"#e8c07a",secondary:"#6b4226",pattern:"hoops",shorts:"#6b4226",socks:"#e8c07a"}},{id:"sal",name:"Saltwater Barracudas",short:"SAL",primary:"#4f5d6b",secondary:"#2ee6c8",trim:"#ffffff",pattern:"stripes",shorts:"#2b333b",socks:"#4f5d6b",rating:80,alt:{primary:"#2ee6c8",secondary:"#4f5d6b",pattern:"stripes",shorts:"#4f5d6b",socks:"#2ee6c8"}},{id:"tab",name:"Tablelands Emus",short:"TAB",primary:"#556b2f",secondary:"#efe6c8",trim:"#1b1b1b",pattern:"vee",shorts:"#efe6c8",socks:"#556b2f",rating:80,alt:{primary:"#efe6c8",secondary:"#556b2f",pattern:"vee",shorts:"#556b2f",socks:"#efe6c8"}},{id:"cop",name:"Copperfield Foxes",short:"COP",primary:"#b0552a",secondary:"#14213d",trim:"#ffffff",pattern:"sash",shorts:"#14213d",socks:"#b0552a",rating:80,alt:{primary:"#14213d",secondary:"#b0552a",pattern:"sash",shorts:"#b0552a",socks:"#14213d"}},{id:"gec",name:"Glasshouse Geckos",short:"GEC",primary:"#7bc043",secondary:"#4a2366",trim:"#ffffff",pattern:"plain",shorts:"#4a2366",socks:"#7bc043",rating:80,alt:{primary:"#4a2366",secondary:"#7bc043",pattern:"plain",shorts:"#7bc043",socks:"#4a2366"}},{id:"wom",name:"Stonebridge Wombats",short:"STB",primary:"#3d3d3d",secondary:"#f2c230",trim:"#ffffff",pattern:"hoops",shorts:"#3d3d3d",socks:"#f2c230",rating:80,alt:{primary:"#f2c230",secondary:"#3d3d3d",pattern:"hoops",shorts:"#3d3d3d",socks:"#3d3d3d"}},{id:"lor",name:"Lantern Bay Lorikeets",short:"LBL",primary:"#00897b",secondary:"#ff8f00",trim:"#ffffff",pattern:"vee",shorts:"#00564d",socks:"#ff8f00",rating:80,alt:{primary:"#ff8f00",secondary:"#00897b",pattern:"vee",shorts:"#00897b",socks:"#ff8f00"}},{id:"qul",name:"Quarry Hill Quolls",short:"QHQ",primary:"#d4145a",secondary:"#ffffff",trim:"#1b1b1b",pattern:"stripes",shorts:"#2b2b2b",socks:"#d4145a",rating:80,alt:{primary:"#ffffff",secondary:"#d4145a",pattern:"stripes",shorts:"#d4145a",socks:"#ffffff"}}];function wr(n){return Cu[n.id]||[]}function Lu(n){return wr(n).map(t=>{let e=t.heightCm/100,i=t.weightKg/(e*e);return{num:t.num,pos:t.pos,name:`${t.first[0]}. ${t.last}`,fullName:`${t.first} ${t.last}`,attr:{...t.attr},ovr:qs(t.pos,t.attr),age:t.age,heightCm:t.heightCm,weightKg:t.weightKg,star:t.star,build:{w:nt(i/26.5,.92,1.22),h:nt(t.heightCm/186,.93,1.06)},skin:t.skin,hair:t.hair,hairStyle:t.hairStyle,headgear:t.headgear,mass:t.weightKg}})}function Iu(n){let t=parseInt(n.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function rc(n,t){let e=Iu(n),i=Iu(t);return Math.hypot(e[0]-i[0],e[1]-i[1],e[2]-i[2])}function Du(n,t){let e={primary:n.primary,secondary:n.secondary,trim:n.trim,pattern:n.pattern,shorts:n.shorts,socks:n.socks},i={primary:t.primary,secondary:t.secondary,trim:t.trim,pattern:t.pattern,shorts:t.shorts,socks:t.socks};return(rc(e.primary,i.primary)<140||rc(e.shorts,i.shorts)<60&&rc(e.primary,i.primary)<200)&&(i={...i,...t.alt}),[e,i]}var zu=(n,t,e,i)=>{let s=document.createElement(n);return t&&(s.className=t),i!==void 0&&(s.innerHTML=i),e&&e.appendChild(s),s},Ex=()=>{try{return matchMedia("(pointer: coarse)").matches&&!matchMedia("(any-pointer: fine)").matches}catch{return!1}},Ax=[["Move","W A S D","Left stick"],["Sprint","Shift","RT"],["\u2014 ATTACK \u2014","",""],["Pass left / right to the next man","Q / E","LB / RB"],["Pick the 1st / 2nd / 3rd man (cut-out)","hold Q or E + K / L / I","hold LB or RB + A / B / Y"],["Flat pass (runner hits it at pace, riskier)","double-tap","double-tap"],["Sidestep","\u2190 / \u2192","Flick right stick \u2190 \u2192"],["Fend (hold to keep the arm out)","\u2193","Right stick \u2193"],["Shoulder charge / bust a tackle","\u2191","Right stick \u2191"],["Dummy pass","I","Y"],["Quick kick: punt / grubber / chip / field goal","K / L / J / U","A / B / X / R3"],["Aimed kick: hold, steer with A/D, release","hold Space + K L J I U","hold LT + A B X Y R3"],["   \u2026aimed kick types","punt \xB7 grubber \xB7 chip \xB7 bomb \xB7 field goal",""],["Kicking foot (left / right)","V","D-pad \u2191"],["In a tackle: offload / fight / leg drive","Q,E / arrows / mash Shift","LB,RB / R-stick / mash RT"],["Ground the ball in-goal","K","A"],["\u2014 DEFENCE \u2014","",""],["Low tackle (safe, but arms stay free)","K","A"],['Arm-grip "ball and all" (no offload, risky)',"L \u2014 keep held to hold down","B"],["Dive tackle","I","Y"],["Strip (one-on-one) / jump for a high ball","J","X"],["Switch player (nearest / next)","Q / E","LB / RB (or LT)"],["\u2014 SET PIECES \u2014","",""],["Conversion: move the ball back, then set","W / S, then K","Left stick \u2195, then A"],["Aim (line up the seam) / trajectory","A D / W S","Left stick"],["Power \u2014 release before the red zone","hold K","hold A"],["Short kick-off","hold L","hold B"],["Penalty: goal / touch / tap","K / L / J","A / B / X"],["\u2014 GENERAL \u2014","",""],["Camera (behind / broadcast / high)","C","View"],["Pause","Esc / P","Start"]],Uu=n=>n>=90?"r90":n>=80?"r80":n>=70?"r70":"r60";function Nu(n){let t=n.primary,e=n.secondary;return`<span class="swatch" style="background:${{hoops:`repeating-linear-gradient(180deg,${t} 0 8px,${e} 8px 16px)`,stripes:`repeating-linear-gradient(90deg,${t} 0 6px,${e} 6px 12px)`,vee:`linear-gradient(160deg,${t} 40%,${e} 40% 55%,${t} 55%)`,sash:`linear-gradient(135deg,${t} 38%,${e} 38% 58%,${t} 58%)`,yoke:`linear-gradient(180deg,${e} 30%,${t} 30%)`}[n.pattern]||t}"></span>`}function Fu(n){let t=oc(n),e=wr(n).map(i=>{let s=qs(i.pos,i.attr);return`<tr><td class="n">${i.num}</td><td class="nm">${i.star?'<span class="star" title="Star player">\u2605</span> ':""}${i.first} ${i.last}</td>
      <td title="${dr[i.pos]}">${i.pos}</td><td>${i.age}</td><td>${i.heightCm}</td><td>${i.weightKg}</td>
      <td><b class="rt ${Uu(s)}">${s}</b></td>${Sr.map(a=>`<td><span class="rt ${Uu(i.attr[a])}">${i.attr[a]}</span></td>`).join("")}<td>${i.attr.foot}</td></tr>`}).join("");return`<div class="sq-head">${Nu(n)}<div><b>${n.name}</b><div class="sq-chips"><span>OVR <b>${t.ovr}</b></span><span>ATT <b>${t.attack}</b></span><span>DEF <b>${t.defence}</b></span><span>PACK <b>${t.pack}</b></span></div></div></div>
    <div class="sq-wrap"><table class="sq"><thead><tr><th>#</th><th class="nm">Player</th><th>Pos</th><th>Age</th><th>cm</th><th>kg</th><th>OVR</th>
    ${Sr.map(i=>`<th title="${ac[i]}">${sc[i]}</th>`).join("")}<th title="Kicking foot">Ft</th></tr></thead><tbody>${e}</tbody></table></div>
    <div class="sq-key">${Sr.map(i=>`<span><b>${sc[i]}</b> ${ac[i]}</span>`).join("")}<span><b>\u2605</b> Star player</span></div>`}function Ou(){return`<table class="ctrl">${Ax.map(n=>n[1]===""?`<tr class="sec"><th colspan="3">${n[0]}</th></tr>`:`<tr><td>${n[0]}</td><td><kbd>${n[1]}</kbd></td><td><kbd>${n[2]}</kbd></td></tr>`).join("")}</table>`}var Tr=class{constructor(t,e){this.onStart=e,this.root=zu("div","menu",t),this.cfg={home:0,away:5,side:0,halfLen:1,difficulty:1,wind:1,time:0,camera:0,goldenPoint:0},this.rows=[{key:"home",label:"Home team",vals:Le.map(i=>i.name)},{key:"away",label:"Away team",vals:Le.map(i=>i.name)},{key:"side",label:"You play as",vals:["Home","Away","Watch (CPU v CPU)"]},{key:"halfLen",label:"Half length",vals:["3 min","5 min","8 min","10 min","20 min"],nums:[3,5,8,10,20]},{key:"difficulty",label:"Difficulty",vals:["Easy","Normal","Hard"],ids:["easy","normal","hard"]},{key:"wind",label:"Wind",vals:["Calm","Breezy","Gusty"],ids:["calm","breezy","gusty"]},{key:"time",label:"Kick-off time",vals:["Afternoon","Twilight","Night (floodlights)"],ids:["day","dusk","night"]},{key:"camera",label:"Camera",vals:["Behind play","Broadcast","High"],ids:["behind","broadcast","high"]},{key:"goldenPoint",label:"Golden point",vals:["On","Off"]}],this.sel=0,this.page="main",this.visible=!0,this.render()}config(){let t=this.cfg,e=i=>this.rows.find(s=>s.key===i);return{homeDef:Le[t.home],awayDef:Le[t.away],humanIdx:t.side===2?-1:t.side,settings:{halfLen:e("halfLen").nums[t.halfLen],difficulty:e("difficulty").ids[t.difficulty],wind:e("wind").ids[t.wind],time:e("time").ids[t.time],camera:e("camera").ids[t.camera],goldenPoint:t.goldenPoint===0}}}swatch(t){return Nu(t)}render(){let t=this.root;if(this.page==="controls")t.innerHTML=`<div class="menu-panel"><h1 class="logo small">CONTROLS</h1>${Ou()}<div class="btns"><button data-a="back">\u25C0 Back</button></div></div>`;else if(this.page==="squads")t.innerHTML=`<div class="menu-panel wide"><h1 class="logo small">SQUADS</h1>
        <div class="sq-nav"><button data-a="sqprev">\u25C0</button><span>${this.squadIdx+1} / ${Le.length}</span><button data-a="sqnext">\u25B6</button></div>
        ${Fu(Le[this.squadIdx])}<div class="btns"><button data-a="back">\u25C0 Back</button></div>
        <div class="foot">A/D or \u2190/\u2192 change club \xB7 Esc to go back</div></div>`;else{let e=this.cfg;t.innerHTML=`<div class="menu-panel"><h1 class="logo">FOOTY<span>13</span></h1><div class="tag">Rugby League \xB7 13 v 13 \xB7 Single Match</div>
        <div class="rows">${this.rows.map((i,s)=>`<div class="row ${s===this.sel?"sel":""}" data-i="${s}"><span class="lbl">${i.label}</span>
          <span class="val"><button data-i="${s}" data-d="-1">\u25C0</button><span>${i.key==="home"||i.key==="away"?this.swatch(Le[e[i.key]]):""}${i.vals[e[i.key]]}${i.key==="home"||i.key==="away"?` <em class="ovr">${oc(Le[e[i.key]]).ovr}</em>`:""}</span><button data-i="${s}" data-d="1">\u25B6</button></span></div>`).join("")}</div>
        <div class="btns"><button class="go" data-a="start">KICK OFF \u25B6</button><button data-a="squads">Squads</button><button data-a="controls">Controls</button></div>
        ${Ex()?'<div class="touchnote">Footy 13 is played with a keyboard or a gamepad. Connect one to take control, or pick \u201CWatch\u201D to see a CPU match.</div>':""}
        <div class="foot">Keyboard or gamepad \xB7 W/S choose \xB7 A/D change \xB7 Enter to start \xB7 H for controls</div></div>`}t.querySelectorAll("button[data-d]").forEach(e=>e.addEventListener("click",i=>{i.stopPropagation(),this.change(+e.dataset.i,+e.dataset.d)})),t.querySelectorAll(".row").forEach(e=>e.addEventListener("click",()=>{this.sel=+e.dataset.i,this.render()})),t.querySelectorAll("button[data-a]").forEach(e=>e.addEventListener("click",()=>this.act(e.dataset.a)))}change(t,e){let i=this.rows[t],s=this.cfg,a=i.vals.length;s[i.key]=(s[i.key]+e+a)%a,(i.key==="home"||i.key==="away")&&s.home===s.away&&(s[i.key]=(s[i.key]+e+a)%a),this.sel=t,this.render()}act(t){t==="start"?this.onStart(this.config()):t==="controls"?(this.page="controls",this.render()):t==="back"?(this.page="main",this.render()):t==="squads"?(this.page="squads",this.squadIdx=this.cfg.home,this.render()):(t==="sqprev"||t==="sqnext")&&(this.squadIdx=(this.squadIdx+(t==="sqnext"?1:Le.length-1))%Le.length,this.render())}show(){this.visible=!0,this.page="main",this.root.style.display="",this.render()}hide(){this.visible=!1,this.root.style.display="none"}update(t){if(this.visible){if(this.page==="controls"||this.page==="squads"){this.page==="squads"&&t.pressed("menuLeft")&&this.act("sqprev"),this.page==="squads"&&t.pressed("menuRight")&&this.act("sqnext"),(t.pressed("pause")||t.pressed("confirm")||t.pressed("faceB")||t.pressed("back"))&&this.act("back");return}t.pressed("menuUp")&&(this.sel=(this.sel+this.rows.length-1)%this.rows.length,this.render()),t.pressed("menuDown")&&(this.sel=(this.sel+1)%this.rows.length,this.render()),t.pressed("menuLeft")&&this.change(this.sel,-1),t.pressed("menuRight")&&this.change(this.sel,1),t.pressed("confirm")&&this.act("start"),t.pressed("help")&&this.act("controls")}}},Er=class{constructor(t,e){this.h=e,this.root=zu("div","menu pause",t),this.root.style.display="none",this.visible=!1,this.page="main"}show(){this.visible=!0,this.page="main",this.root.style.display="",this.render()}hide(){this.visible=!1,this.root.style.display="none"}render(){let t=this.h.teams?this.h.teams():[];this.root.innerHTML=this.page==="controls"?`<div class="menu-panel"><h1 class="logo small">CONTROLS</h1>${Ou()}<div class="btns"><button data-a="back">\u25C0 Back</button></div></div>`:this.page==="squads"&&t.length?`<div class="menu-panel wide"><h1 class="logo small">SQUADS</h1><div class="sq-nav"><button data-a="sqswap">\u25C0 \u25B6 ${t[1-(this.side||0)].short}</button></div>
        ${Fu(t[this.side||0])}<div class="btns"><button data-a="back">\u25C0 Back</button></div></div>`:`<div class="menu-panel narrow"><h1 class="logo small">PAUSED</h1><div class="btns col">
        <button data-a="resume">Resume</button><button data-a="camera">Camera: ${this.h.cameraName()}</button><button data-a="squads">Squads</button><button data-a="controls">Controls</button>
        <button data-a="sound">Sound: ${this.h.soundName()}</button><button data-a="restart">Restart match</button><button data-a="quit">Quit to menu</button></div></div>`,this.root.querySelectorAll("button[data-a]").forEach(e=>e.addEventListener("click",()=>this.act(e.dataset.a)))}act(t){if(t==="controls")return this.page="controls",this.render();if(t==="back")return this.page="main",this.render();if(t==="squads")return this.page="squads",this.side=0,this.render();if(t==="sqswap")return this.side=1-(this.side||0),this.render();if(t==="camera")return this.h.camera(),this.render();if(t==="sound")return this.h.sound(),this.render();this.h[t]()}};var Ar=class{constructor(t){this.cam=t,this.mode="behind",this.pos=new D(-30,14,0),this.tgt=new D,this.dPos=new D,this.dTgt=new D,this.shakeT=0,this.shakeA=0,this.orbit=0,this.lastPhase="",this.fwd={x:1,z:0}}shake(t){this.shakeA=Math.max(this.shakeA,t),this.shakeT=.3}toggle(){this.mode=this.mode==="behind"?"broadcast":this.mode==="broadcast"?"high":"behind"}screenRight(){return{x:-this.fwd.z,z:this.fwd.x}}inputToWorld(t,e){let i=this.fwd,s=this.screenRight();return{x:s.x*t+i.x*e,z:s.z*t+i.z*e}}update(t,e){let i=e.ball,s=e.phase,a=e.pd,r=e.humanTeam?e.humanTeam.dir:e.attackTeam()?.dir??1,o=!1;s!==this.lastPhase&&((["kickoff","goalKick","scrum","touchKick"].includes(s)||s==="ptb"&&a.extra===void 0)&&(o=!0),this.lastPhase=s),(s==="ptb"||s==="play")&&(o=!1);let c=4,l=6;if(s==="goalKick"&&a.stage!=="result"||(s==="kickoff"||s==="touchKick")&&a.stage==="aim"){let p=a.yaw,g=Math.sin(p),x=Math.cos(p),m=i.p;if(s==="goalKick"&&a.stage==="flight"){let d=Math.hypot(i.v.x,i.v.z)||1;this.dPos.set(m.x-i.v.x/d*7,Math.max(2.5,m.y*.7+1.5),m.z-i.v.z/d*7),this.dTgt.set(a.team.dir*Ct.half,4,0),c=2.2,l=3}else{let d=s==="goalKick"?7:9.5,_=s==="goalKick"?2.7:4.2,S=s==="goalKick"?1.5:2.2,v=-Math.cos(p),P=Math.sin(p);this.dPos.set(m.x-g*d-v*S,_,m.z-x*d-P*S),this.dTgt.set(m.x+g*30,s==="goalKick"?3.2:1,m.z+x*30),c=5,l=6}}else if(s==="tryCelebration"&&a.scorer){this.orbit+=t*.45;let p=a.scorer.p;this.dPos.set(p.x+Math.cos(this.orbit)*9,3.8,p.z+Math.sin(this.orbit)*9),this.dTgt.set(p.x,1.2,p.z),c=2,l=3}else{let p=new D(i.p.x,0,i.p.z),g=e.controlled;s==="ptb"&&p.set(a.mark.x,0,a.mark.z),g&&i.state!=="held"&&e.kickTarget&&!e.kickTarget.pass?(p.x=(i.p.x+e.kickTarget.x+g.p.x)/3,p.z=(i.p.z+e.kickTarget.z+g.p.z)/3):g&&Rx(g.p,p)<18&&(p.x+=(g.p.x-p.x)*.3,p.z+=(g.p.z-p.z)*.3);let x=i.state==="air"&&i.kind==="kick"?nt(i.p.y/20,0,1):0;this.mode==="broadcast"?(this.dPos.set(p.x*.94,17+x*6,r*42+p.z*.25),this.dTgt.set(p.x,0,p.z*.6)):this.mode==="high"?(this.dPos.set(p.x-r*20,24+x*6,p.z*.7),this.dTgt.set(p.x+r*8,0,p.z*.9)):(this.dPos.set(p.x-r*15.5,10+x*7,p.z*.82),this.dTgt.set(p.x+r*6.5,.5+x*3,p.z*.95)),c=3.6,l=5}if(o||this.pos.distanceTo(this.dPos)>70)this.pos.copy(this.dPos),this.tgt.copy(this.dTgt);else{let p=1-Math.exp(-c*t),g=1-Math.exp(-l*t);this.pos.lerp(this.dPos,p),this.tgt.lerp(this.dTgt,g)}if(this.cam.position.copy(this.pos),this.shakeT>0){this.shakeT-=t;let p=this.shakeA*(this.shakeT/.3);this.cam.position.x+=(Vt()-.5)*p,this.cam.position.y+=(Vt()-.5)*p,this.shakeT<=0&&(this.shakeA=0)}this.cam.lookAt(this.tgt);let h=this.tgt.x-this.pos.x,u=this.tgt.z-this.pos.z,f=Math.hypot(h,u)||1;this.fwd={x:h/f,z:u/f}}};function Rx(n,t){return Math.hypot(n.x-t.x,n.z-t.z)}function Ys(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),a={},r={},o=n[0].morphTargetsRelative,c=new Fe,l=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0,u=[];for(let f=0;f<n.length;++f){let p=n[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(let h in a){let u=Bu(a[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in r){let u=r[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let x=0;x<r[h].length;++x)p.push(r[h][x][f]);let g=Bu(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Bu(n){let t,e,i,s=-1,a=0;for(let l=0;l<n.length;++l){let h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*e}let r=new t(a),o=new Ge(r,e,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<e;g++){let x=h.getComponent(f,g);o.setComponent(f+u,g,x)}}else r.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Hu={day:{top:"#3f7fd8",horizon:"#d7e6ee",sun:16773590,sunI:2.4,hemiI:1.25,ground:4877098,fog:"#c9dbe4",lights:0},dusk:{top:"#2a3a74",horizon:"#f2a46a",sun:16757370,sunI:1.7,hemiI:.95,ground:4082218,fog:"#d99a72",lights:.6},night:{top:"#03060f",horizon:"#18223d",sun:13623551,sunI:.55,hemiI:.5,ground:2042392,fog:"#141c30",lights:1}};function bs(n,t,e,i){let s=document.createElement("canvas");s.width=n,s.height=t,e(s.getContext("2d"),n,t);let a=new hn(s);return a.colorSpace=Te,a.anisotropy=8,i&&(a.wrapS=a.wrapT=as,a.repeat.set(i[0],i[1])),{t:a,c:s}}function Vu(n,t,e){let i=Hu[e.time]||Hu.day,s={flags:[],crowdUniforms:{uTime:{value:0},uExcite:{value:0}}},a=new ds(600,24,12),r=new ri({side:Ne,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ht(i.top)},hor:{value:new Ht(i.horizon)}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 hor; varying vec3 vP; void main(){ float h = clamp(normalize(vP).y*1.6, 0.0, 1.0); gl_FragColor = vec4(mix(hor, top, pow(h,0.7)), 1.0); }"});n.add(new St(a,r)),n.fog=new Za(i.fog,170,520),n.add(new lr(14674687,i.ground,i.hemiI));let o=new Xs(i.sun,i.sunI);if(o.position.set(-60,90,40),n.add(o),i.lights>0)for(let[y,A]of[[70,55],[-70,-55]]){let I=new Xs(16777215,.8*i.lights);I.position.set(y,50,A),n.add(I)}t.setClearColor(i.fog);let c=bs(256,256,(y,A,I)=>{y.fillStyle="#3f8a2c",y.fillRect(0,0,A,I),y.fillStyle="#4b9a33",y.fillRect(0,0,A/2,I);for(let F=0;F<2600;F++)y.fillStyle=`rgba(${Vt()<.5?"20,50,10":"120,170,70"},${gt(.05,.16)})`,y.fillRect(Vt()*A,Vt()*I,2,2)},[128/10,84/10]),l=new St(new ti(128,84),new he({map:c.t}));l.rotation.x=-Math.PI/2,n.add(l);let h=bs(64,64,(y,A,I)=>{y.fillStyle="#3a7429",y.fillRect(0,0,A,I);for(let F=0;F<300;F++)y.fillStyle="rgba(0,0,0,0.06)",y.fillRect(Vt()*A,Vt()*I,2,2)},[60,60]),u=new St(new ti(1400,1400),new he({map:h.t}));u.rotation.x=-Math.PI/2,u.position.y=-.02,n.add(u);let f=new Ee({color:16053488}),p=[],g=new ve,x=(y,A,I,F,O=.12)=>{let it=Math.hypot(I-y,F-A),Q=new ti(it,O);g.rotation.set(-Math.PI/2,0,-Math.atan2(F-A,I-y)),g.position.set((y+I)/2,.012,(A+F)/2),g.updateMatrix(),Q.applyMatrix4(g.matrix),p.push(Q)},m=Ct.half,d=Ct.halfW,_=Ct.dead;x(-_,-d,_,-d,.14),x(-_,d,_,d,.14),x(-_,-d,-_,d,.14),x(_,-d,_,d,.14);for(let y=-50;y<=50;y+=10)x(y,-d,y,d,y===0||Math.abs(y)===50?.16:.1);for(let y=-45;y<=45;y+=5)for(let A of[-d+10,d-10,-d+20,d-20])x(y-.5,A,y+.5,A,.1);n.add(new St(Ys(p),f));for(let y of[-1,1]){let A=bs(1024,128,(F,O,it)=>{F.clearRect(0,0,O,it);let Q=(y<0?e.homeName:e.awayName).toUpperCase();F.font="bold 96px Arial Black, Arial",F.textAlign="center",F.textBaseline="middle",F.fillStyle="rgba(255,255,255,0.55)";let st=F.measureText(Q).width,It=Math.min(1,O*.94/st);F.save(),F.translate(O/2,it/2),F.scale(It,1),F.fillText(Q,0,4),F.restore()}),I=new St(new ti(44,5.5),new Ee({map:A.t,transparent:!0,depthWrite:!1}));I.rotation.x=-Math.PI/2,I.rotation.z=y<0?Math.PI/2:-Math.PI/2,I.position.set(y*54,.013,0),n.add(I)}let S={};for(let y=-40;y<=40;y+=10){let A=50-Math.abs(y);if(!S[A]){let I=bs(128,64,(F,O,it)=>{F.font="bold 54px Arial Black, Arial",F.textAlign="center",F.textBaseline="middle",F.fillStyle="rgba(255,255,255,0.85)",F.fillText(String(A),O/2,it/2+2)});S[A]=new Ee({map:I.t,transparent:!0,depthWrite:!1})}for(let I of[-d+6,d-6]){let F=new St(new ti(3.6,1.8),S[A]);F.rotation.x=-Math.PI/2,F.rotation.z=I<0?0:Math.PI,F.position.set(y,.014,I),n.add(F)}}let v=new he({color:16316664}),P=[new he({color:e.homeColor}),new he({color:e.awayColor})];for(let y of[-1,1]){for(let I of[-Ct.postGap,Ct.postGap]){let F=new St(new oi(.07,.08,Ct.postH,8),v);F.position.set(y*m,Ct.postH/2,I),n.add(F);let O=new St(new oi(.26,.26,2,8),P[y<0?0:1]);O.position.set(y*m,1,I),n.add(O)}let A=new St(new oi(.06,.06,Ct.postGap*2,8),v);A.rotation.x=Math.PI/2,A.position.set(y*m,Ct.crossbar,0),n.add(A)}let E=new he({color:16724e3});for(let y of[-m,m,-_,_])for(let A of[-d,d]){let I=new St(new oi(.04,.04,1.4,6),E);I.position.set(y,.7,A),n.add(I)}let R=["KOALA COLA","BIG PIE CO.","ROO FUEL","SURF & TURF","GUMLEAF BANK","DINGO TYRES","SOUTHERLY AIR","TRADIE MART"],C=bs(1024,64,(y,A,I)=>{let F=["#d11f2a","#123a7a","#f2b51d","#1f7a3a","#1b1b1b","#0f8a8a","#f26a1b","#4b1f7a"];for(let O=0;O<8;O++)y.fillStyle=F[O],y.fillRect(O*128,0,128,I),y.fillStyle="#fff",y.font="bold 19px Arial Black, Arial",y.textAlign="center",y.textBaseline="middle",y.fillText(R[O],O*128+64,I/2)},[1,1]),w=new he({map:C.t,emissive:2236962}),M=(y,A,I,F)=>{let O=C.t.clone();O.needsUpdate=!0,O.wrapS=as,O.repeat.set(y/48,1);let it=new St(new Me(y,.9,.15),[w,w,w,w,new he({map:O,emissive:3355443}),w]);it.position.set(A,.45,I),it.rotation.y=F,n.add(it)};M(124,0,-d-5,0),M(124,0,d+5,Math.PI),M(70,-_-4,0,Math.PI/2),M(70,_+4,0,-Math.PI/2);let k=new he({color:9276036}),G=new he({color:5923440}),B=[],W=(y,A,I,F,O,it,Q=.55)=>{let st=new mi;st.position.set(y,0,A),st.rotation.y=O,n.add(st);let It=F*.95,J=Math.atan2(Q,.95),ut=Math.hypot(It,F*Q),Tt=new St(new Me(I,.6,ut),G);Tt.rotation.x=-J,Tt.position.set(0,1+F*Q/2,it+It/2),st.add(Tt);let Rt=new St(new Me(I+2,F*Q+6,1.2),k);Rt.position.set(0,(F*Q+6)/2,it+It+.8),st.add(Rt);let pt=new St(new Me(I,1.4,.4),k);pt.position.set(0,.7,it-.3),st.add(pt);for(let kt of[-1,1]){let Yt=new St(new Me(1.2,F*Q+4,It+2),k);Yt.position.set(kt*(I/2+.6),(F*Q+4)/2,it+It/2),st.add(Yt)}st.updateMatrixWorld(!0);let Ot=new D;for(let kt=0;kt<F;kt++)for(let Yt=0;Yt<I/.9;Yt++)Vt()<.16||(Ot.set(-I/2+.45+Yt*.9+gt(-.1,.1),1.45+kt*Q,it+.5+kt*.95),st.localToWorld(Ot),B.push({x:Ot.x,y:Ot.y,z:Ot.z,rot:O}));return st};W(0,d+9,118,26,0,0),W(0,-d-9,118,26,Math.PI,0),W(_+10,0,62,18,Math.PI/2,0),W(-_-10,0,62,18,-Math.PI/2,0);let Z=new he({color:14079702});for(let y of[-1,1]){let A=new St(new Me(124,.6,20),Z);A.position.set(0,22,y*(d+9+17)),A.rotation.x=y*.08,n.add(A);for(let I=-55;I<=55;I+=22){let F=new St(new Me(.6,22,.6),k);F.position.set(I,11,y*(d+9+26)),n.add(F)}}let $=new Me(.5,.72,.38);$.translate(0,.36,0);let j=new Me(.22,.24,.22);j.translate(0,.86,0);let X=y=>{let A=new he(y);return A.onBeforeCompile=I=>{I.uniforms.uTime=s.crowdUniforms.uTime,I.uniforms.uExcite=s.crowdUniforms.uExcite,I.vertexShader=`uniform float uTime; uniform float uExcite;
`+I.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
         float ph = instanceMatrix[3].x * 1.7 + instanceMatrix[3].z * 2.3;
         float bob = max(0.0, sin(uTime * (5.0 + fract(ph) * 4.0) + ph));
         transformed.y += bob * (0.03 + uExcite * 0.32);`)},A},at=B.length,dt=new Ws($,X({color:16777215}),at),vt=new Ws(j,X({color:16777215}),at),Dt=new $t,te=new je,q=new D(1,1,1),tt=new D,mt=new Ht,ot=["#f1c9a5","#e0ac82","#c68a5e","#8d5a3a","#5a3520"],At=[e.homeColor,e.homeColor2],Pt=[e.awayColor,e.awayColor2];for(let y=0;y<at;y++){let A=B[y];te.setFromAxisAngle(new D(0,1,0),A.rot+Math.PI),q.setScalar(gt(.92,1.08)),tt.set(A.x,A.y,A.z),Dt.compose(tt,te,q),dt.setMatrixAt(y,Dt),vt.setMatrixAt(y,Dt);let I=Vt();mt.set(I<.42?Xi(At):I<.7?Xi(Pt):`hsl(${Math.floor(Vt()*360)},${30+Vt()*40}%,${30+Vt()*40}%)`),dt.setColorAt(y,mt),vt.setColorAt(y,mt.set(Xi(ot)))}n.add(dt,vt);let Gt=new he({color:10132122}),ue=new Ee({color:i.lights>0?16776168:14211272});for(let y of[-78,78])for(let A of[-62,62]){let I=new St(new oi(.6,1.1,42,6),Gt);I.position.set(y,21,A),n.add(I);let F=new St(new Me(7,4,1),ue);if(F.position.set(y*.97,43,A*.97),F.lookAt(0,0,0),n.add(F),i.lights>0){let O=new St(new ti(12,8),new Ee({color:16774344,transparent:!0,opacity:.25*i.lights,depthWrite:!1,fog:!1}));O.position.copy(F.position),O.lookAt(0,0,0),O.translateZ(.8),n.add(O)}}let Wt=bs(512,256,()=>{}),fe=new St(new ti(22,11),new Ee({map:Wt.t,fog:!1}));fe.position.set(-_-30,24,0),fe.rotation.y=Math.PI/2,n.add(fe);let z=new St(new Me(1,13,24),k);z.position.set(-_-30.6,24,0),n.add(z);let Be=new St(new Me(1,18,1),k);Be.position.set(-_-30.6,9,0),n.add(Be),s.drawScreen=y=>{let A=Wt.c.getContext("2d"),I=512,F=256;A.fillStyle="#05070c",A.fillRect(0,0,I,F),A.fillStyle="#f2b51d",A.fillRect(0,0,I,36),A.fillStyle="#111",A.font="bold 26px Arial Black, Arial",A.textAlign="center",A.fillText(y.title,I/2,28),A.fillStyle="#fff",A.font="bold 64px Arial Black, Arial";let O=A.measureText(y.score).width,it=Math.min(1,(I-40)/O);A.save(),A.translate(I/2,130),A.scale(it,1),A.fillText(y.score,0,0),A.restore(),A.font="bold 30px Arial",A.fillStyle="#9fd3ff",A.fillText(y.sub,I/2,200),A.font="20px Arial",A.fillStyle="#ccc",A.fillText(y.foot||"",I/2,240),Wt.t.needsUpdate=!0};let Xt=new he({color:13421772}),Kt=[e.homeColor,e.awayColor,"#ffffff",e.homeColor2],Et=0;for(let[y,A]of[[-40,d+36],[0,d+36],[40,d+36],[-40,-d-36],[0,-d-36],[40,-d-36]]){let I=new St(new oi(.08,.08,6,6),Xt);I.position.set(y,27,A),n.add(I);let F=new mi;F.position.set(y,29.4,A),n.add(F);let O=new ti(3,1.8,6,1);O.translate(1.5,0,0);let it=new St(O,new he({color:Kt[Et++%4],side:di}));F.add(it),O.computeBoundingSphere(),it.frustumCulled=!1,s.flags.push({pivot:F,flag:it,base:O.attributes.position.array.slice()})}let se=["#7f8a99","#9aa3ad","#6d7787","#b0a593","#8c8f96"].map(y=>new he({color:y})),bt=se.map(()=>[]);for(let y=0;y<70;y++){let A=Vt()*Math.PI*2,I=gt(230,330),F=gt(12,70)*(Math.abs(Math.sin(A))>.6?1.3:.7),O=new Me(gt(12,28),F,gt(12,28));g.rotation.set(0,Vt()*3,0),g.position.set(Math.cos(A)*I,F/2,Math.sin(A)*I),g.updateMatrix(),O.applyMatrix4(g.matrix),bt[y%se.length].push(O)}bt.forEach((y,A)=>n.add(new St(Ys(y),se[A])));let T=new he({color:i.ground,flatShading:!0});for(let y=0;y<9;y++){let A=y/9*Math.PI*2+Vt()*.3,I=new St(new us(gt(90,160),gt(40,90),6),T);I.position.set(Math.cos(A)*470,0,Math.sin(A)*470),n.add(I)}return s.update=(y,A,I,F)=>{s.crowdUniforms.uTime.value=A,s.crowdUniforms.uExcite.value=F;let O=Math.atan2(-I.z,I.x),it=Math.hypot(I.x,I.z);if(!(!Number.isFinite(it)||!Number.isFinite(A)))for(let Q of s.flags){Q.pivot.rotation.y=O;let st=Q.flag.geometry.attributes.position.array,It=Q.base;for(let J=0;J<st.length;J+=3){let ut=It[J];st[J+2]=Math.sin(A*(4+it)-ut*2.2)*.14*ut*(.3+it/8),st[J+1]=It[J+1]-ut*(.5-Math.min(.45,it/18))}Q.flag.geometry.attributes.position.needsUpdate=!0}},s}var Ss=new Set(["free","step","fend","bump","stumble","celebrate","kick"]),Zs=class{constructor(t,e,i){this.team=t,this.num=e.num,this.pos=e.pos,this.name=e.name,this.attr=e.attr,this.mass=e.mass,this.fullName=e.fullName||e.name,this.ovr=e.ovr??0,this.age=e.age,this.heightCm=e.heightCm,this.weightKg=e.weightKg,this.star=!!e.star,this.isForward=lu.has(e.num),this.model=i,this.p=new D,this.v=new D,this.heading=0,this.wish={x:0,z:0},this.wantSprint=!1,this.faceTarget=null,this.speedCap=1,this.state="free",this.stateT=0,this.stateDur=0,this.anim={t:0,side:1,fall:0,faceUp:!1,kt:0,foot:"R",preKick:!1,roll:0,dur:.5},this.stamina=1,this.cd={step:0,fend:0,bump:0,tackle:0,dummy:0},this.speedMul=1,this.offside=!1,this.passAnim=0,this.passSide=1,this.catchAnim=0,this.catchHigh=!1,this.refSignal=0,this.hasBall=!1,this.carrySide=1,this.lateralLean=0,this.accelLean=0,this.readyStance=!1,this.legDriveVis=0,this.jumpY=0,this.jumpT=0,this.fendHold=0,this.speedH=0,this.ai={role:"none",react:0,bite:0,biteX:0,biteZ:0,evadeChecked:null,think:Math.random()*.2},this.engage=null,this.lunge=null,this.controlled=!1,this.stats={tackles:0,missed:0,runs:0,metres:0,tries:0}}get topSpeed(){return(5.6+this.attr.speed*.042)*(this.hasBall?.96:1)*(.84+.16*this.stamina)*this.speedMul}get visualState(){return this.state}get right(){return{x:-Math.cos(this.heading),z:Math.sin(this.heading)}}get fwd(){return{x:Math.sin(this.heading),z:Math.cos(this.heading)}}canAct(){return this.state==="free"||this.state==="bump"||this.state==="step"||this.state==="fend"}isUpright(){return!["ground","getup","lunge","dive","tackling","tackled","scrum"].includes(this.state)}setState(t,e=0){this.state=t,this.stateT=0,this.stateDur=e,this.anim.t=0}knockDown(t,e=!1){this.setState("ground",t),this.anim.fall=1,this.anim.faceUp=e,this.lunge=null}update(t){this.stateT+=t,this.anim.t+=t;for(let s in this.cd)this.cd[s]>0&&(this.cd[s]-=t);this.passAnim>0&&(this.passAnim-=t),this.catchAnim>0&&(this.catchAnim-=t),this.refSignal>0&&(this.refSignal-=t),this.speedMul=Wi(this.speedMul,1,1.2,t),this.ai.bite>0&&(this.ai.bite-=t),this.jumpT>0?(this.jumpT=Math.max(0,this.jumpT-t),this.jumpY=Math.sin((1-this.jumpT/.6)*Math.PI)*.55):this.jumpY=0;let e=this.state;if(this.stateDur>0&&this.stateT>=this.stateDur&&(e==="ground"?(this.setState("getup",.45),this.anim.dur=.45):(e==="getup"||e==="step"||e==="fend"||e==="bump"||e==="stumble"||e==="kick")&&this.setState("free")),e==="ground"&&(this.anim.fall=Math.min(1,this.anim.fall+t*4)),Ss.has(this.state))this.locomote(t);else if(this.state==="ground"||this.state==="getup"||this.state==="scrum"||this.state==="ptb"||this.state==="goalkick"){let s=Math.exp(-6*t);this.v.x*=s,this.v.z*=s,this.p.x+=this.v.x*t,this.p.z+=this.v.z*t}this.speedH=Math.hypot(this.v.x,this.v.z)}locomote(t){let e=this.topSpeed*this.speedCap,i=e*.64,s=this.wish.x,a=this.wish.z,r=Math.hypot(s,a);r>1&&(s/=r,a/=r,r=1);let o=r*(this.wantSprint?e:i);this.state==="stumble"&&(o*=.35),this.state==="fend"&&(o*=.96),this.state==="kick"&&(o*=.5),this.state==="celebrate"&&(o*=.5);let c=r>.01?s/r*o:0,l=r>.01?a/r*o:0,h=Math.hypot(this.v.x,this.v.z),u=(4.2+this.attr.accel*.04)*(1-.55*Math.min(1,h/Math.max(1,e))),f=11,p=(7+this.attr.agility*.06)*(1.25-.55*Math.min(1,h/Math.max(1,e))),g=c-this.v.x,x=l-this.v.z,m=0,d=0;if(h>1){let S=this.v.x/h,v=this.v.z/h,P=g*S+x*v,E=g-P*S,R=x-P*v;P=nt(P,-f*t,u*t);let C=Math.hypot(E,R),w=p*t;C>w&&(E*=w/C,R*=w/C),this.v.x+=P*S+E,this.v.z+=P*v+R;let M=this.right;m=(E*M.x+R*M.z)/t,d=P/t}else{let S=Math.hypot(g,x),v=u*1.5*t;S>v&&(g*=v/S,x*=v/S),this.v.x+=g,this.v.z+=x,d=S/t}this.p.x+=this.v.x*t,this.p.z+=this.v.z*t;let _=Math.hypot(this.v.x,this.v.z);this.wantSprint&&_>i*1.02?this.stamina=Math.max(0,this.stamina-t*.05*(1.45-this.attr.stamina/100)):this.stamina=Math.min(1,this.stamina+t*(_<2?.07:.04)),_>.8?this.heading=Jl(this.heading,wt(this.v.x,this.v.z),14,t):this.faceTarget!==null&&(this.heading=Jl(this.heading,this.faceTarget,7,t)),this.lateralLean=Wi(this.lateralLean,nt(m/30,-.32,.32),10,t),this.accelLean=Wi(this.accelLean,nt(d/8,-.5,1),6,t)}doStep(t){if(this.cd.step>0||!(this.state==="free"||this.state==="bump"))return!1;this.setState("step",.38),this.anim.side=t;let e=this.right,i=4.3+this.attr.agility*.035,s=this.fwd,a=this.v.x*s.x+this.v.z*s.z;return this.v.x=s.x*a*.88+e.x*t*i+(this.v.x-s.x*a)*.3,this.v.z=s.z*a*.88+e.z*t*i+(this.v.z-s.z*a)*.3,this.cd.step=.85,this.stamina=Math.max(0,this.stamina-.035),!0}doFend(t){return this.cd.fend>0||!(this.state==="free"||this.state==="step")?!1:(this.setState("fend",.5),this.fendHold=0,t&&(this.carrySide=-t),this.cd.fend=.95,this.stamina=Math.max(0,this.stamina-.03),!0)}doBump(){return this.cd.bump>0||!(this.state==="free"||this.state==="step")?!1:(this.setState("bump",.5),this.v.x*=1.05,this.v.z*=1.05,this.cd.bump=1,this.stamina=Math.max(0,this.stamina-.04),!0)}doJump(){return this.jumpT>0||!(this.state==="free"||this.state==="stumble")?!1:(this.jumpT=.6,this.catchAnim=.6,this.catchHigh=!0,this.stamina=Math.max(0,this.stamina-.02),!0)}holdFend(){this.state==="fend"&&this.stateT<.9&&(this.stateDur=Math.max(this.stateDur,this.stateT+.08),this.fendHold=this.stateT)}stepWindow(){return this.state==="step"&&this.stateT>.02&&this.stateT<.34}fendWindow(){return this.state==="fend"&&(this.stateT<.42||this.fendHold>=this.stateT-.05)}bumpWindow(){return this.state==="bump"&&this.stateT<.45}faceHeading(t){this.heading=t}lookAt(t,e){this.faceTarget=wt(t-this.p.x,e-this.p.z)}};var oe={back0:13,front:14,side:15,top:16,sleeve:17,shorts:18,socks:19,boots:20,gear:21,skin:22,face:30,hair:38};function lc(n,t,e,i,s){switch(n.fillStyle=i.primary,n.fillRect(0,0,t,e),n.fillStyle=i.secondary,i.pattern){case"vee":n.beginPath(),n.moveTo(0,0),n.lineTo(t*.5,e*.55),n.lineTo(t,0),n.lineTo(t,e*.18),n.lineTo(t*.5,e*.75),n.lineTo(0,e*.18),n.closePath(),n.fill();break;case"hoops":for(let a=0;a<5;a++)a%2===1&&n.fillRect(0,a*e/5,t,e/5);break;case"sash":n.beginPath(),n.moveTo(s?0:t,e*.05),n.lineTo(s?t*.28:t*.72,0),n.lineTo(s?t:0,e*.72),n.lineTo(s?t:0,e),n.lineTo(s?t*.78:t*.22,e),n.closePath(),n.fill();break;case"stripes":for(let a=0;a<7;a++)a%2===1&&n.fillRect(a*t/7,0,t/7,e);break;case"yoke":n.fillRect(0,0,t,e*.3),n.fillStyle=i.trim,n.fillRect(0,e*.3,t,e*.04);break;default:n.fillRect(0,e*.88,t,e*.12)}n.fillStyle=i.trim,n.fillRect(t*.36,0,t*.28,e*.05)}function cc(n,t){let e=document.createElement("canvas");e.width=e.height=1024;let i=e.getContext("2d"),s=(c,l)=>{i.save(),i.translate(c%8*128,Math.floor(c/8)*128),i.beginPath(),i.rect(0,0,128,128),i.clip(),l(i,128,128),i.restore()},a=c=>(l,h,u)=>{l.fillStyle=c,l.fillRect(0,0,h,u)},r=c=>["#ffffff","#f2f2f2","#f1e3c4","#ffd21f","#f2d21f","#f2b51d","#c6f01e"].includes(c);for(let c=1;c<=14;c++)s(c===14?oe.back0:c-1,(l,h,u)=>{lc(l,h,u,n,!1),!(c===14||t==="ref")&&(l.font="bold 66px Arial Black, Arial",l.textAlign="center",l.textBaseline="middle",l.lineWidth=7,l.strokeStyle=r(n.primary)?n.secondary:"#111",l.fillStyle=n.trim===n.primary||r(n.primary)&&r(n.trim)?n.secondary:n.trim,l.strokeText(String(c),h/2,u*.52),l.fillText(String(c),h/2,u*.52))});s(oe.front,(c,l,h)=>{lc(c,l,h,n,!0),c.fillStyle=n.trim,c.beginPath(),c.arc(l*.72,h*.25,8,0,Math.PI*2),c.fill(),t!=="ref"&&(c.fillStyle="rgba(255,255,255,0.85)",c.fillRect(l*.16,h*.55,l*.68,h*.14),c.fillStyle="#222",c.font="bold 15px Arial",c.textAlign="center",c.fillText("ROO FUEL",l/2,h*.66))}),s(oe.side,(c,l,h)=>lc(c,l,h,n,!0)),s(oe.top,a(n.pattern==="yoke"||n.pattern==="vee"?n.secondary:n.primary)),s(oe.sleeve,a(n.pattern==="yoke"?n.secondary:n.primary)),s(oe.shorts,a(n.shorts)),s(oe.socks,(c,l,h)=>{c.fillStyle=n.socks,c.fillRect(0,0,l,h),c.fillStyle=n.secondary,c.fillRect(0,h*.1,l,h*.12),c.fillRect(0,h*.3,l,h*.06),c.fillStyle="#f4f4f4",c.fillRect(0,h*.85,l,h*.15)}),s(oe.boots,a("#161616")),s(oe.gear,a("#202020")),ql.forEach((c,l)=>{s(oe.skin+l,a(c)),s(oe.face+l,h=>{h.fillStyle=c,h.fillRect(0,0,128,128),h.scale(2,2),h.fillStyle="rgba(0,0,0,0.12)",h.fillRect(28,26,8,16),h.fillStyle="#fff",h.fillRect(14,22,12,7),h.fillRect(38,22,12,7),h.fillStyle="#2a1a0c",h.fillRect(19,22,5,7),h.fillRect(40,22,5,7),h.fillStyle="rgba(30,18,8,0.85)",h.fillRect(12,16,15,3),h.fillRect(37,16,15,3),h.fillStyle="#7a2a22",h.fillRect(22,46,20,4)})}),Yl.forEach((c,l)=>s(oe.hair+l,a(c)));let o=new hn(e);return o.colorSpace=Te,o.anisotropy=4,o.minFilter=Fi,{tex:o,mat:new he({map:o})}}function kx(n){let t=n%8,e=Math.floor(n/8),i=4/1024;return{u0:t/8+i,u1:(t+1)/8-i,v0:1-(e+1)/8+i,v1:1-e/8-i}}function be(n,t,e,i,s,a,r){let o=new Me(n,t,e);r&&o.translate(0,-t/2,0),o.translate(a[0],a[1],a[2]);let c=o.attributes.uv;for(let l=0;l<6;l++){let h=kx(Array.isArray(i)?i[l]:i);for(let u=0;u<4;u++){let f=l*4+u;c.setXY(f,h.u0+c.getX(f)*(h.u1-h.u0),h.v0+c.getY(f)*(h.v1-h.v0))}}return o.clearGroups(),o.userData.bone=s,o}var Cx=new hs(.45,14),Px=new Ee({color:0,transparent:!0,opacity:.32,depthWrite:!1}),Js=class{constructor(t,e){let i=e.build?.w??1,s=e.build?.h??1;this.root=new mi;let a=Math.max(0,ql.indexOf(e.skin)),r=Math.max(0,Yl.indexOf(e.hair)),o=oe.skin+a,c=oe.hair+r,l=(R,C,w,M,k)=>{let G=new Vs;return G.name=R,G.position.set(w,M,k),C&&C.add(G),G};this.body=l("body",null,0,0,0),this.pelvis=l("pelvis",this.body,0,.98,0),this.torso=l("torso",this.pelvis,0,.1,0),this.head=l("head",this.torso,0,.66,0);let h=l("shL",this.torso,.31,.55,0),u=l("elL",h,0,-.32,0),f=l("shR",this.torso,-.31,.55,0),p=l("elR",f,0,-.32,0),g=l("hipL",this.pelvis,.11,0,0),x=l("knL",g,0,-.44,0),m=l("hipR",this.pelvis,-.11,0,0),d=l("knR",m,0,-.44,0);this.armL={sh:h,el:u},this.armR={sh:f,el:p},this.legL={hip:g,knee:x},this.legR={hip:m,knee:d};let _=[this.body,this.pelvis,this.torso,this.head,h,u,f,p,g,x,m,d];this.body.updateMatrixWorld(!0);let S=e.number>=1&&e.number<=13?e.number-1:oe.back0,v=[be(.38,.2,.25,oe.shorts,this.pelvis,[0,.02,0]),be(.5,.6,.29,[oe.side,oe.side,oe.top,oe.shorts,oe.front,S],this.torso,[0,.3,0]),be(.11,.08,.11,o,this.torso,[0,.63,0]),be(.24,.28,.26,[o,o,o,o,oe.face+a,o],this.head,[0,.14,0])],P=e.headgear?"gear":e.hairStyle||"short";P==="gear"?v.push(be(.27,.16,.29,oe.gear,this.head,[0,.22,-.005]),be(.27,.1,.06,oe.gear,this.head,[0,.12,-.12])):P==="short"?v.push(be(.255,.07,.275,c,this.head,[0,.29,-.005]),be(.255,.16,.05,c,this.head,[0,.2,-.12])):P==="buzz"?v.push(be(.248,.03,.268,c,this.head,[0,.285,0])):P==="mohawk"?v.push(be(.06,.09,.26,c,this.head,[0,.32,0])):P==="long"?v.push(be(.26,.07,.28,c,this.head,[0,.29,-.005]),be(.26,.3,.06,c,this.head,[0,.1,-.13])):P==="afro"&&v.push(be(.32,.18,.32,c,this.head,[0,.3,-.02]));for(let[R,C]of[[h,u],[f,p]])v.push(be(.15,.15,.15,oe.sleeve,R,[0,-.04,0]),be(.12,.3,.12,o,R,[0,-.06,0],!0),be(.11,.27,.11,o,C,[0,0,0],!0),be(.1,.1,.1,o,C,[0,-.26,0],!0));for(let[R,C]of[[g,x],[m,d]])v.push(be(.19,.24,.2,oe.shorts,R,[0,.04,0],!0),be(.15,.26,.16,o,R,[0,-.18,0],!0),be(.135,.44,.145,oe.socks,C,[0,0,0],!0),be(.125,.09,.27,oe.boots,C,[0,-.42,.05],!0));for(let R of v){let C=_.indexOf(R.userData.bone);R.applyMatrix4(R.userData.bone.matrixWorld);let w=R.attributes.position.count,M=new Uint16Array(w*4),k=new Float32Array(w*4);for(let G=0;G<w;G++)M[G*4]=C,k[G*4]=1;R.setAttribute("skinIndex",new ls(M,4)),R.setAttribute("skinWeight",new ge(k,4))}let E=Ys(v,!1);for(let R of v)R.dispose();this.mesh=new Qa(E,t.mat),this.mesh.add(this.body),this.mesh.bind(new tr(_)),this.mesh.frustumCulled=!1,this.mesh.scale.set(i,s,i),this.root.add(this.mesh),this.ballAnchor=new ve,this.ballAnchor.position.set(-.2,.26,.2),this.torso.add(this.ballAnchor),this.shadow=new St(Cx,Px),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.015,this.root.add(this.shadow),this.phase=Math.random()*6,this.j={lean:0,twist:0,roll:0,bodyX:0,bodyZ:0,bodyY:0,shLx:0,shLz:.1,shRx:0,shRz:-.1,elL:-.3,elR:-.3,hipL:0,hipR:0,knL:.1,knR:.1,hipLz:0,hipRz:0,head:0},this._t={}}update(t,e,i){let s=this.j,a=this._t,r=t.speedH;this.root.position.set(t.p.x,0,t.p.z),this.root.rotation.y=t.heading;let o=t.anim,c=t.visualState,l=nt(r/8.5,0,1);this.phase+=e*(1.35*r+(r>.25?1.5:0));let h=this.phase,u=Math.sin(h),f=Math.cos(h);if(a.lean=.06+l*.22+t.accelLean*.15,a.twist=u*.12*l,a.roll=0,a.bodyX=0,a.bodyZ=t.lateralLean,a.bodyY=Math.abs(f)*.05*l,a.hipL=-u*.95*l,a.hipR=u*.95*l,a.knL=.15+Math.max(0,-f)*1.4*l,a.knR=.15+Math.max(0,f)*1.4*l,a.hipLz=0,a.hipRz=0,a.shLx=u*.85*l,a.shRx=-u*.85*l,a.shLz=.12,a.shRz=-.12,a.elL=-.25-l*1.1,a.elR=-.25-l*1.1,a.head=0,r<.3){let x=Math.sin(i*2.2+this.phase)*.02;a.lean=t.readyStance?.3:.05+x,a.knL=a.knR=t.readyStance?.45:.08,a.hipL=a.hipR=t.readyStance?-.25:0,a.shLx=a.shRx=t.readyStance?-.45:.05,a.elL=a.elR=t.readyStance?-.9:-.2,a.bodyY=t.readyStance?-.08:0}if(t.hasBall&&!["ground","goalkick"].includes(c)){let x=t.carrySide,m=x>0?"R":"L";a["sh"+m+"x"]=-.55,a["sh"+m+"z"]=x>0?.25:-.25,a["el"+m]=-1.75,this.ballAnchor.position.set(-.19*x,.27,.2)}switch(c){case"step":{let x=_s(o.t/.12)*(1-_s((o.t-.25)/.15));a.bodyZ=o.side*.45*x,a.hipLz=.25*x,a.hipRz=-.25*x;break}case"fend":{let x=Math.min(1,o.t/.08)*(1-_s((o.t-.35)/.15)),m=t.carrySide>0?"L":"R";a["sh"+m+"x"]=We(a["sh"+m+"x"],-1.5,x),a["sh"+m+"z"]=(m==="L"?.25:-.25)*x,a["el"+m]=We(a["el"+m],-.05,x),a.twist=(m==="L"?-.3:.3)*x;break}case"bump":{let x=Math.min(1,o.t/.1)*(1-_s((o.t-.4)/.15));a.lean=We(a.lean,.75,x),a.twist=.45*x*-t.carrySide,a.head=-.3*x;break}case"lunge":case"dive":{let x=Math.min(1,o.t/.15);a.bodyX=(c==="dive"?1.25:.75)*x,a.bodyY=-(c==="dive"?.35:.1)*x,a.shLx=a.shRx=-1.7,a.shLz=.35,a.shRz=-.35,a.elL=a.elR=-.35,a.hipL=.4,a.hipR=.6,a.knL=a.knR=.4;break}case"tackling":{a.bodyX=.55,a.lean=.35,a.shLx=a.shRx=-1.45,a.shLz=.55,a.shRz=-.55,a.elL=a.elR=-.9,a.knL=a.knR=.6,a.hipL=-.3,a.hipR=-.1;break}case"tackled":{let x=t.legDriveVis;a.lean=.45,a.bodyX=.15*o.fall,a.hipL=-u*.6*x,a.hipR=u*.6*x,a.knL=.5+Math.max(0,-f)*.8*x,a.knR=.5+Math.max(0,f)*.8*x,this.phase+=e*9*x;break}case"ground":{let x=o.fall??1,m=o.faceUp?-1:1;a.bodyX=m*1.5*x,a.bodyY=-.72*x,a.lean=0,a.twist=0,a.shLx=a.shRx=m>0?-2.4*x:-.2,a.shLz=.4,a.shRz=-.4,a.elL=a.elR=-.3,a.hipL=.05,a.hipR=-.1,a.knL=.3,a.knR=.1,a.bodyZ=0;break}case"getup":{let x=1-_s(o.t/o.dur),m=o.faceUp?-1:1;a.bodyX=m*1.5*x,a.bodyY=-.72*x,a.knL=a.knR=.3+x*.8,a.hipL=a.hipR=-.6*x;break}case"ptb":{if(a.lean=.55,a.shLx=a.shRx=-.3,a.elL=a.elR=-.6,a.knL=a.knR=.3,a.hipL=a.hipR=-.25,o.roll>0){let x=Math.sin(nt(o.roll,0,1)*Math.PI);a.hipR=-.25+x*.9,a.knR=.3+x*.6}a.bodyY=-.05;break}case"kick":case"goalkick":{let x=o.kt??0,m=o.foot==="L"?"L":"R",d=m==="L"?"R":"L",_,S;if(x<.16){let v=x/.16;_=We(0,.9,v),S=We(.2,1.5,v)}else if(x<.24){let v=(x-.16)/.08;_=We(.9,-1.2,v),S=We(1.5,.1,v)}else{let v=nt((x-.24)/.3,0,1);_=We(-1.6,-.2,v),S=We(.05,.3,v)}o.preKick&&(_=0,S=.15),a["hip"+m]=_,a["kn"+m]=S,a["hip"+d]=.1,a["kn"+d]=.15,a.shLz=.9,a.shRz=-.9,a.shLx=a.shRx=-.2,a.elL=a.elR=-.3,a.lean=x>.16&&x<.4?-.15:.15,!o.preKick&&x<.6&&(a.bodyY=0,a.bodyZ=0);break}case"celebrate":{let x=Math.abs(Math.sin(i*7+this.phase));a.shLx=a.shRx=-2.8,a.shLz=.3,a.shRz=-.3,a.elL=a.elR=-.2,a.bodyY=x*.25,a.lean=-.1,a.knL=a.knR=.3*(1-x);break}case"scrum":{a.lean=1.25,a.bodyY=-.28,a.shLx=a.shRx=-1.3,a.shLz=.5,a.shRz=-.5,a.elL=a.elR=-.6,a.hipL=-.75+Math.sin(i*3+this.phase)*.1,a.hipR=-.6,a.knL=1.1,a.knR=1,a.head=-.5;break}case"signal":{a.shRx=-2.6,a.shRz=-.2,a.elR=-.05;break}}if(t.passAnim>0&&!["ground","getup","tackled"].includes(c)){let x=Math.sin(nt(t.passAnim/.3,0,1)*Math.PI),m=t.passSide;a.shLx=a.shRx=We(a.shLx,-1.2,x),a.elL=a.elR=We(a.elL,-.35,x),a.shLz=.2+m*.5*x,a.shRz=-.2+m*.5*x,a.twist=m*.7*x}if(t.catchAnim>0&&!["ground","getup"].includes(c)){let x=Math.min(1,t.catchAnim/.15);a.shLx=a.shRx=We(a.shLx,t.catchHigh?-2.6:-1.3,x),a.elL=a.elR=We(a.elL,-.4,x),a.shLz=.3,a.shRz=-.3}t.refSignal>0&&(a.shRx=-2.7,a.elR=-.05,a.shRz=-.25);let g=c==="lunge"||c==="dive"||c==="step"?30:16;for(let x in a)s[x]=Wi(s[x],a[x],g,e);this.body.rotation.set(s.bodyX,0,s.bodyZ),this.body.position.y=s.bodyY+(t.jumpY||0),this.torso.rotation.set(s.lean,s.twist,0),this.head.rotation.x=s.head-s.lean*.6,this.armL.sh.rotation.set(s.shLx,0,s.shLz),this.armR.sh.rotation.set(s.shRx,0,s.shRz),this.armL.el.rotation.x=s.elL,this.armR.el.rotation.x=s.elR,this.legL.hip.rotation.set(s.hipL,0,s.hipLz),this.legR.hip.rotation.set(s.hipR,0,s.hipRz),this.legL.knee.rotation.x=s.knL,this.legR.knee.rotation.x=s.knR,this.shadow.scale.setScalar(c==="ground"?1.6:1)}};function Ix(){let n=document.createElement("canvas");n.width=128,n.height=64;let t=n.getContext("2d");t.fillStyle="#f6eec8",t.fillRect(0,0,128,64),t.fillStyle="#d4202c",t.fillRect(0,6,128,6),t.fillRect(0,52,128,6),t.fillStyle="#1d3d8f",t.fillRect(0,13,128,3),t.fillRect(0,48,128,3),t.strokeStyle="rgba(60,40,20,0.55)",t.lineWidth=1.5;for(let i=0;i<4;i++)t.beginPath(),t.moveTo(i*32+1,0),t.lineTo(i*32+1,64),t.stroke();t.fillStyle="#222",t.font="bold 10px Arial",t.fillText("FOOTY 13",40,36);let e=new hn(n);return e.colorSpace=Te,e}var Rr=class{constructor(t){let e=new ds(1,14,10);e.scale(.125,.19,.125),e.rotateX(Math.PI/2),this.mesh=new St(e,new he({map:Ix()})),t.add(this.mesh);let i=new St(new hs(.2,12),new Ee({color:0,transparent:!0,opacity:.35,depthWrite:!1}));i.rotation.x=-Math.PI/2,t.add(i),this.shadow=i,this.p=new D(0,ei.radius,0),this.v=new D,this.state="dead",this.carrier=null,this.kind="loose",this.info=null,this.curve=0,this.drag=1,this.spin="endover",this.spinAngle=0,this.spinRate=0,this.grubber=!1,this.ignore=new Map,this.airTime=0,this.bounces=0,this.lastTouch=null,this.landedThisTick=!1,this.hitPostThisTick=!1,this.tmpQ=new je,this.tmpQ2=new je,this.axisZ=new D(0,0,1),this.axisX=new D(1,0,0),this.lookDir=new D(1,0,0)}give(t){this.state="held",this.carrier=t,this.kind="loose",this.info=null,this.v.set(0,0,0),this.curve=0,this.grubber=!1,this.lastTouch=t,this.bounces=0}release(t,e){this.carrier=null,this.state="air",this.kind=t,this.info=e,this.airTime=0,this.bounces=0}setIgnore(t,e){this.ignore.set(t,e)}canTouch(t,e){let i=this.ignore.get(t);return i===void 0||e>=i}step(t,e){if(this.landedThisTick=!1,this.hitPostThisTick=!1,this.state==="held"||this.state==="dead")return;if(this.airTime+=t,this.state==="air"){if(vs(this,t,e),jl(this.p,this.v)&&(this.hitPostThisTick=!0),this.p.y<=ei.radius){this.p.y=ei.radius,this.landedThisTick=!0;let s=Math.hypot(this.v.x,this.v.z);this.v.y<-1.4||this.grubber&&s>2.5?this._bounce(s):(this.v.y=0,this.state="ground")}}else if(this.state==="ground"){let s=Math.hypot(this.v.x,this.v.z);if(s<.12)this.v.set(0,0,0);else{let a=Math.min(s,3.4*t);this.v.x-=this.v.x/s*a,this.v.z-=this.v.z/s*a;let r=Pe()*.04,o=Math.cos(r),c=Math.sin(r),l=this.v.x,h=this.v.z;this.v.x=l*o-h*c,this.v.z=l*c+h*o,this.p.x+=this.v.x*t,this.p.z+=this.v.z*t}this.p.y=ei.radius,jl(this.p,this.v)&&(this.hitPostThisTick=!0)}let i=this.v.length();this.state==="air"?this.spinAngle+=t*(this.spin==="spiral"?14:this.spin==="grubber"?i*2.2:9):this.spinAngle+=t*i*3}_bounce(t){this.bounces++;let e=gt(.32,.62),i=gt(.68,.86),s=Pe()*.32;if(this.grubber){e=gt(.2,.95),i=gt(.78,.93),s=Pe()*.22;let l=gt(.4,3.6)*Math.min(1,t/12);this.v.y=Math.max(-this.v.y*e,l),t<3&&(this.grubber=!1)}else Vt()<.18?(e*=1.5,i*=.6):Vt()<.2&&(e*=.5,i=Math.min(.95,i*1.15)),this.v.y=-this.v.y*e;let a=Math.cos(s),r=Math.sin(s),o=this.v.x*i,c=this.v.z*i;this.v.x=o*a-c*r,this.v.z=o*r+c*a,this.curve*=.3,this.v.y<1&&!this.grubber&&(this.v.y=0,this.state="ground")}syncMesh(t,e){let i=this.mesh;if(this.state==="held"&&t)this.p.copy(t),i.position.copy(t),i.rotation.set(.35,e,0,"YXZ");else{i.position.copy(this.p);let a=Math.hypot(this.v.x,this.v.z);a>.3&&this.lookDir.set(this.v.x,this.state==="air"?this.v.y*.6:0,this.v.z).normalize(),this.tmpQ.setFromUnitVectors(this.axisZ,this.lookDir),this.spin==="spiral"&&this.state==="air"?this.tmpQ2.setFromAxisAngle(this.axisZ,this.spinAngle):this.tmpQ2.setFromAxisAngle(this.axisX,this.spinAngle),this.state==="ground"&&a<.12&&this.tmpQ2.setFromAxisAngle(this.axisX,Math.PI/2*0),i.quaternion.copy(this.tmpQ).multiply(this.tmpQ2),this.state==="dead"&&this.p.y<=ei.radius+.01&&i.rotation.set(0,i.rotation.y,0)}this.shadow.position.set(this.p.x,.02,this.p.z);let s=Math.max(0,this.p.y);this.shadow.scale.setScalar(1+s*.08),this.shadow.material.opacity=Math.max(.08,.35-s*.02)}};var kr=Ct.half,Lx=Ct.halfW,Gu={normal:2,low:1.9,grip:1.8,hit:1.8,dive:3.4,auto:1},Dx={normal:.22,low:.22,grip:.24,hit:.26,dive:.42,auto:.12},Ux={normal:.85,low:.85,grip:.8,hit:.8,dive:1,auto:.95};function Cn(n,t,e,i={}){let s=n.ball,a=s.carrier;if(n.phase!=="play"||!a||s.state!=="held"||a.team===t.team||t.state!=="free"||t.cd.tackle>0||t.lunge||a.state==="ground"||a.state==="getup")return!1;let r=qt(t.p.x,t.p.z,a.p.x,a.p.z);return t.offside?(t.controlled&&r<Gu[e]+.5&&n.awardPenalty(a.team,a.p.x,a.p.z,"Offside"),!1):r>Gu[e]?(i.human&&r<5&&Wu(n,t,e,a,!0),!1):(Wu(n,t,e,a,!1),!0)}function Wu(n,t,e,i,s){let a=Dx[e],r=i.p.x+i.v.x*a*.85,o=i.p.z+i.v.z*a*.85,c=r-t.p.x,l=o-t.p.z,h=Math.hypot(c,l)||1,u=nt(Math.max(h/a,t.speedH+1.5,e==="dive"?7.5:5.5),3.5,e==="dive"?10.8:9.4);t.lunge={kind:e,t:0,dur:s?a*.8:a,target:i,whiff:s},t.setState(e==="dive"?"dive":"lunge"),t.v.x=c/h*u,t.v.z=l/h*u,t.heading=wt(c,l),t.cd.tackle=.7}function zx(n,t,e){let i=t.lunge;i.t+=e;let s=n.ball.carrier,a=i.target,r=s===a&&!i.whiff&&n.ball.state==="held"&&a.state!=="ground";if(r){let o=i.kind==="dive"?i.t<.1?6:0:8;if(o>0){let c=s.p.x-t.p.x,l=s.p.z-t.p.z,h=Math.hypot(c,l)||1,u=Math.hypot(t.v.x,t.v.z),f=1-Math.exp(-o*e);t.v.x+=(c/h*u-t.v.x)*f,t.v.z+=(l/h*u-t.v.z)*f}}if(t.p.x+=t.v.x*e,t.p.z+=t.v.z*e,t.speedH=Math.hypot(t.v.x,t.v.z),r&&qt(t.p.x,t.p.z,s.p.x,s.p.z)<Ux[i.kind]){t.lunge=null,Ku(n,t,s,i.kind);return}if(i.t>=i.dur){t.lunge=null;let o=a&&qt(t.p.x,t.p.z,a.p.x,a.p.z)<3.5&&!i.whiff;i.kind==="dive"?t.knockDown(1):t.setState("stumble",i.kind==="hit"?.6:.42),o&&(t.stats.missed++,t.team.stats.missed++,n.emit("missed",{team:t.team,player:t}))}}function Cr(n,t,e,i,s=0){s>0?t.knockDown(s,i!=="step"):t.setState("stumble",.55),t.stats.missed++,t.team.stats.missed++,e.team.stats.busts++,n.emit("beaten",{team:e.team,player:e,how:i,defender:t})}function Ku(n,t,e,i){if(e.engage)return $u(n,e.engage,t);let s=e.speedH,a=t.speedH,r=s>1?e.v.x/s:e.fwd.x,o=s>1?e.v.z/s:e.fwd.z,c=t.p.x-e.p.x,l=t.p.z-e.p.z,h=Math.hypot(c,l)||1;c/=h,l/=h;let u=r*c+o*l,f=e.right,p=f.x*c+f.z*l,g=Math.max(0,-((t.v.x-e.v.x)*c+(t.v.z-e.v.z)*l)),x=t.team.human?t.controlled?n.diff.humanTackle:.02:n.diff.cpuTackle;if(e.stepWindow()){let P=.56+(e.attr.agility-t.attr.tackle)/140+(u>.3?.12:-.25)+(i==="dive"?.1:0)+(i==="hit"?.08:0)-x;if(Math.sign(p)===e.anim.side&&Math.abs(p)>.3&&(P-=.35),Ft(nt(P,.05,.95))){Cr(n,t,e,"step",i==="dive"?1:0);return}}if(e.fendWindow()&&u>-.4){let P=-e.carrySide,E=.38+(e.attr.strength-t.attr.strength)/110+(e.attr.strength-t.attr.tackle)/220+(i==="dive"?.18:0)-(i==="hit"?.12:0)-x;if(E+=(P>0?p>-.2:p<.2)?.1:-.15,e.fendHold>.2&&(E+=.1),E+=(e.stamina-t.stamina)*.12,Ft(nt(E,.05,.92))){t.v.x=c*3.5,t.v.z=l*3.5,e.speedMul*=.9,Cr(n,t,e,"fend",.9),n.audio.thud(.5);return}}let m=null;if(e.bumpWindow()&&u>0){let P=e.mass*Math.max(2,s)*1.3,E=t.mass*Math.max(2,a)*(i==="hit"?1.3:1),R=.26+(P-E)/(P+E)*1.1+(e.attr.strength-t.attr.tackle)/240-x;if(Ft(nt(R,.05,.9))){t.v.x=c*4,t.v.z=l*4,e.speedMul*=.72,e.v.x*=.8,e.v.z*=.8,Cr(n,t,e,"bump",1.1),n.audio.thud(1),n.camRig.shake(.25);return}m=.55}let _={normal:.9,low:.93,grip:.85,hit:.72,dive:.78,auto:.8}[i]+(t.attr.tackle-72)/180-(e.attr.agility-70)/450-Math.max(0,s-6)*.018+(u<-.3?-.06:0)+x;if(_-=Math.max(0,e.attr.strength-t.attr.strength)/500,_-=(1-t.stamina)*.16,_+=(1-e.stamina)*.06,e.isForward&&t.mass<85&&e.mass>100&&(_-=.06),m===null&&!Ft(nt(_,.1,.97))){let P=e.attr.strength>t.attr.strength+gt(-15,25)?.7:0;e.speedMul*=.82,Cr(n,t,e,"broken",P),n.audio.thud(.6);return}let S=m??(t.attr.strength*.45+t.attr.tackle*.45+(i==="hit"?28:i==="grip"?14:i==="low"?-8:0)+g*3.5-e.attr.strength*.75-s*2.2)/50;S=nt(S+Pe()*.15,-1,1);let v=Nx(n,e,t,S,i);if(t.stamina=Math.max(0,t.stamina-.05),e.stamina=Math.max(0,e.stamina-.04),i==="grip"&&(v.noOffload=!0,v.gripBy=t),(i==="hit"||i==="grip")&&S>.25&&(n.emit("bighit",{team:t.team,player:t}),n.camRig.shake(.35),Ft((i==="grip"?.07:.1)+S*.14-(e.attr.hand-70)/400))){$i(n,v,!1),ec(n,e,"hit");return}(i==="grip"||i==="hit")&&Ft(t.controlled?.06:.015)&&(v.penalty="High tackle")}function Nx(n,t,e,i,s){let a={carrier:t,tacklers:[e],progress:0,dom:i,t:0,legDrive:0,kind:s,inGoalChecked:!1,heldUp:!1,offloadTried:!1,breakTried:!1};n.engagements.push(a),t.setState("tackled"),t.engage=a,t.anim.fall=0,t.lunge=null,e.setState("tackling"),e.engage=a;let r=e.p.x-t.p.x,o=e.p.z-t.p.z,c=Math.hypot(r,o)||1;e.engageOff={x:r/c*.55,z:o/c*.55};let l=i>.4?.2:.55;return t.v.x*=l,t.v.z*=l,n.audio.thud(.6+Math.max(0,i)*.7),i>.5&&n.camRig.shake(.2),n.emit("contact",{team:e.team,player:e,dom:i}),!t.controlled&&Ft(.25*(n.diff.cpuEvade||1))&&Qs(n,t),a}function $u(n,t,e){if(t.tacklers.includes(e)||t.tacklers.length>=3)return;t.tacklers.push(e),e.setState("tackling"),e.engage=t,e.lunge=null;let i=t.tacklers.length*2.1;e.engageOff={x:Math.cos(i)*.55,z:Math.sin(i)*.55},t.dom=nt(t.dom+.14,-1,1),t.progress+=.08,n.audio.thud(.4)}function qu(n,t){let e=t.engage;if(!e||e.stripTried||n.ball.carrier!==e.carrier||e.progress>.9)return!1;e.stripTried=!0;let i=e.carrier;if(e.tacklers.length>1)return e.penalty="Two-man strip",!1;let s=.24+(t.attr.strength-i.attr.hand)/260+Math.max(0,e.dom)*.15;return Ft(nt(s,.05,.55))?($i(n,e,!1),i.knockDown(.7),n.ball.give(t),t.setState("free"),n.poss=t.team,n.tackleCount=0,n.gainLineX=t.p.x,n.lineBreakDone=!1,n.message("STRIPPED!",`${t.name} rips it free`,1.6,"good"),n.audio.roar(.9),n.emit("strip",{team:t.team,player:t}),t.team.human&&n.setControlled(t),!0):(e.progress+=.05,Ft(.2)&&(e.penalty="Strip (ball not held by one)"),!1)}function Qs(n,t){let e=t.engage;if(!e||e.breakTried||e.progress>.5)return!1;if(e.breakTried=!0,e.tacklers.length>1)return e.progress+=.05,!1;let i=e.tacklers[0],s=.16+(t.attr.strength-i.attr.strength)/140+(t.attr.agility-70)/300-Math.max(0,e.dom)*.4;return Ft(nt(s,.03,.6))?($i(n,e,!1),t.setState("free"),t.speedMul=.6,i.knockDown(.8),i.stats.missed++,i.team.stats.missed++,t.team.stats.busts++,n.emit("beaten",{team:t.team,player:t,how:"broken",defender:i}),!0):(e.progress+=.1,!1)}function $i(n,t,e){let i=n.engagements.indexOf(t);i>=0&&n.engagements.splice(i,1),t.carrier.engage=null,t.tacklers.forEach((s,a)=>{s.engage=null,e?s.knockDown(.45+Vt()*.6+a*.3):s.state==="tackling"&&s.setState("stumble",.4)})}function Fx(n,t,e){let i=t.carrier,s=i.team,a=t.tacklers.length,r=n.ball.carrier===i&&n.ball.state==="held";t.t+=e,t.legDrive*=Math.exp(-2.5*e);let o=.85+.6*(a-1)+t.dom*.35-t.legDrive*.25;i.controlled||(o-=(i.attr.strength-75)/300),t.progress+=Math.max(.35,o)*e;let c=t.tacklers.reduce((u,f)=>u+f.attr.strength,0)/a,l=2.4+(i.attr.strength-c)/28-(a-1)*1.3+t.legDrive*1.6-t.dom*2.5;!i.controlled&&r&&(l+=gt(0,.6)),l=nt(l,-2.2,3.6)*(1-Math.min(1,t.progress)*.7),i.v.x=Wi(i.v.x,s.dir*l,4,e),i.v.z=Wi(i.v.z,0,3,e),i.p.x+=i.v.x*e,i.p.z+=i.v.z*e,i.legDriveVis=nt(.3+t.legDrive*.6+Math.max(0,l)/4,0,1),i.speedH=Math.hypot(i.v.x,i.v.z),i.anim.fall=Math.min(1,t.progress);for(let u of t.tacklers)u.p.x=i.p.x+u.engageOff.x,u.p.z=i.p.z+u.engageOff.z,u.v.copy(i.v),u.heading=wt(-u.engageOff.x,-u.engageOff.z);if(t.gripBy&&t.gripBy.controlled&&n.input.held("faceB")&&(t.holdDown=(t.holdDown||0)+e),r&&a<3&&t.progress<.8){for(let u of s.opp.players)if(!(u.controlled||u.state!=="free"||u.offside||u.engage)&&qt(u.p.x,u.p.z,i.p.x,i.p.z)<2&&Ft(e*4)){$u(n,t,u);break}}if(!r){t.progress>=1&&($i(n,t,!0),i.knockDown(1));return}let h=i.p.x*s.dir;if(Math.abs(i.p.z)>Lx)return $i(n,t,!0),n.scrumRestart(s.opp,i.p.x,i.p.z,"INTO TOUCH",`Bundled out \u2014 scrum ${s.opp.short} feed`);if(h>kr&&!t.inGoalChecked&&(t.inGoalChecked=!0,t.heldUp=Ft(.1+.13*a+(t.dom>.3?.15:0)),!t.heldUp))return $i(n,t,!0),i.setState("free"),n.scoreTry(i,i.p.z);if(t.progress>=1){if(h>kr&&t.heldUp)return $i(n,t,!0),i.knockDown(1),n.whistleStop("HELD UP!",`Goal-line drop-out ${s.opp.short}`,{type:"dropout",team:s.opp},{style:"warn"});if(h>kr-1.2&&Ft(.55-.2*(a-1)))return $i(n,t,!0),i.setState("free"),i.p.x=s.dir*(kr+.3),n.message("REACHES OUT!","",1,"good"),n.scoreTry(i,i.p.z);Ox(n,t)}}function Ox(n,t){let e=t.carrier;(t.holdDown||0)>.7&&(t.dom=Math.min(1,t.dom+.6),!t.penalty&&Ft(.32)&&(t.penalty="Holding down")),$i(n,t,!0),e.knockDown(99,t.dom>.35);let i=t.tacklers[0];i.stats.tackles++,i.team.stats.tackles++;for(let s=1;s<t.tacklers.length;s++)t.tacklers[s].stats.tackles++;n.emit("tackle",{team:i.team,player:i,carrier:e,n:t.tacklers.length,dom:t.dom}),n.onTackleComplete(t)}function Yu(n,t){for(let e of n.players)e.lunge&&zx(n,e,t);for(let e of[...n.engagements])n.engagements.includes(e)&&Fx(n,e,t)}var Xu=new Set(["ground","scrum","tackled","tackling","ptb","goalkick"]);function Zu(n){let t=n.players,e=t.length,i=n.ball.state==="held"?n.ball.carrier:null;for(let s=0;s<e;s++){let a=t[s];if(!Xu.has(a.state))for(let r=s+1;r<e;r++){let o=t[r];if(Xu.has(o.state))continue;let c=o.p.x-a.p.x,l=o.p.z-a.p.z;if(Math.abs(c)>.8||Math.abs(l)>.8)continue;let h=Math.hypot(c,l),u=.72;if(h>=u||h<1e-4)continue;let f=c/h,p=l/h,g=u-h,x=o.mass/(a.mass+o.mass),m=1-x;a.p.x-=f*g*x,a.p.z-=p*g*x,o.p.x+=f*g*m,o.p.z+=p*g*m;let d=(o.v.x-a.v.x)*f+(o.v.z-a.v.z)*p;if(d<0&&(a.v.x+=f*d*x*.8,a.v.z+=p*d*x*.8,o.v.x-=f*d*m*.8,o.v.z-=p*d*m*.8),i&&n.phase==="play"&&(a===i||o===i)){let _=a===i?o:a;_.team!==i.team&&_.state==="free"&&!_.offside&&_.cd.tackle<=0&&!_.lunge&&i.state!=="tackled"&&(_.cd.tackle=.7,Ku(n,_,i,"auto"))}}}}var xi=Ct.half,ii=Ct.halfW;function ne(n,t,e,i={}){let s=t-n.p.x,a=e-n.p.z,r=Math.hypot(s,a);if(r<(i.stop??.4))return n.wish.x=n.wish.z=0,n.wantSprint=!1,r;let o=Math.min(1,r/(i.arrive??2.5))*(i.speed??1);return n.wish.x=s/r*o,n.wish.z=a/r*o,n.wantSprint=!!i.sprint&&r>(i.sprintDist??3),r}var uc=(n,t,e)=>{n.faceTarget=wt(t-n.p.x,e-n.p.z)},Pn=(n,t)=>{n.faceTarget=wt(t,0)},ws=n=>Ss.has(n.state);function tf(n,t){for(let e of n.players)e.readyStance=!1,e.speedCap=1;n.phase==="play"?Vx(n,t):n.phase==="ptb"?Hx(n,t):Bx(n,t)}function Bx(n,t){let e=n.phase,i=n.ball;for(let s of n.players)if(ws(s)){if(s.controlled&&e!=="tryCelebration"&&e!=="whistle"&&e!=="transition"&&e!=="penaltyChoice"){s.wish.x=s.wish.z=0,s.ai.hold&&ne(s,s.ai.hold.x,s.ai.hold.z,{speed:.5}),uc(s,i.p.x,i.p.z);continue}if(uc(s,i.p.x,i.p.z),e==="tryCelebration"){let a=n.pd,r=a.scorer;if(s.team===a.team){if(s===r)continue;ne(s,r.p.x-s.team.dir*1.5,r.p.z+(s.num%3-1)*1.2,{sprint:!0,stop:1.6})<2.2&&n.phaseT>.6&&s.setState("celebrate")}else ne(s,s.team.dir*-xi-s.team.dir*1.5,nt(s.p.z*.3,-12,12),{speed:.45,stop:1})}else if(e==="whistle"||e==="transition"||e==="halftime"||e==="fulltime")s.wish.x=s.wish.z=0,s.wantSprint=!1;else if(e==="penaltyChoice"){let a=n.pd.team;s.team!==a&&s.p.x*s.team.dir>n.onsideAx-.5?ne(s,(n.onsideAx-2)*s.team.dir,s.p.z,{speed:.8}):s.wish.x=s.wish.z=0}else s.ai.hold?ne(s,s.ai.hold.x,s.ai.hold.z,{speed:.6,stop:.3}):s.wish.x=s.wish.z=0}}function Hx(n){let t=n.pd,e=t.team,i=e.opp,s=t.mark,a=e.dir,r=t.plan;for(let u of e.players){if(u===t.ptbPlayer||!ws(u))continue;if(u===t.dummy){ne(u,s.x-a*1.3,s.z,{sprint:!0,arrive:1.2,stop:.2}),Pn(u,a);continue}if(u.controlled)continue;let f=Ms(n,e,u,s.x,s.z);if(r&&r.target===u){if(r.kind==="hitup"){let g=(u.p.z-s.z)*a>=0?1:-1;f={x:s.x-a*6,z:s.z+g*a*3.5}}(r.kind==="kick"||r.kind==="shift")&&(f={x:s.x-a*6,z:f.z})}let p=ne(u,f.x,f.z,{sprint:qt(u.p.x,u.p.z,f.x,f.z)>7});Pn(u,a),p<.6&&(u.readyStance=!0)}let o=t.onsideAx,c=o*i.dir,l=n.tackleCount>=4,h=[];for(let u of i.players)if(!(!ws(u)||u.controlled)){if(u.ai.marker){let f=t.markers.indexOf(u);ne(u,s.x+a*1.1,s.z+(f===0?0:.6),{sprint:!0,stop:.2}),Pn(u,-a),u.readyStance=!0;continue}if(u.num===1){let f=Math.max(-xi-3,o-(l?26:16));ne(u,f*i.dir,s.z*.4,{sprint:!0}),Pn(u,-a);continue}if(l&&(u.num===2||u.num===5)){let f=Math.max(-xi-2,o-20);ne(u,f*i.dir,(u.p.z>0?1:-1)*22,{sprint:!0}),Pn(u,-a);continue}h.push(u)}ef(n,i,h,e.players.filter(u=>u!==t.ptbPlayer),()=>c,s.z,!1)}function ef(n,t,e,i,s,a,r,o={}){if(!e.length)return;let l=i.filter(p=>p.isUpright()||p.state==="getup").map(p=>({a:p,imp:Math.abs(p.p.z-a)})).sort((p,g)=>p.imp-g.imp).slice(0,e.length).map(p=>p.a).map(p=>({z:p.p.z+(a-p.p.z)*.12,a:p}));for(;l.length<e.length;)l.push({z:a+(l.length%2?1:-1)*(6+l.length*3),a:null});l.sort((p,g)=>p.z-g.z);for(let p=1;p<l.length;p++)l[p].z-l[p-1].z<2.4&&(l[p].z=l[p-1].z+2.4);let h=l[l.length-1].z-(ii-1.5);if(h>0)for(let p of l)p.z-=h;for(let p=0;p<l.length;p++)l[p].z<-ii+1.5&&(l[p].z=-ii+1.5+p*2.4);let u=[...e].sort((p,g)=>p.p.z-g.p.z),f=t.opp.dir;for(let p=0;p<u.length;p++){let g=u[p],x=l[p],m=s(x.a),d=ne(g,m,x.z,{speed:r?o.lineSpeed??.95:1,sprint:qt(g.p.x,g.p.z,m,x.z)>(r?6:4),arrive:2});g.faceTarget=wt(-f,0),d<1.2&&(g.readyStance=!0)}}function Vx(n,t){let e=n.ball;if(e.state==="held"&&e.carrier){let i=e.carrier;Ju(n,i.team,i,null,t),ju(n,i.team.opp,i,!1,t)}else if(e.kind==="pass"&&e.state==="air"&&e.info){let i=e.info;Ju(n,i.team,null,i.target,t),ju(n,i.team.opp,i.target,!0,t)}else Kx(n,t)}function Ju(n,t,e,i,s){let a=t.dir,r=n.ball,o=e?e.p.x:r.p.x,c=e?e.p.z:r.p.z,l=n.lineBreakDone;for(let h of t.players){if(h.controlled)continue;if(h===e){Gx(n,h,s);continue}if(!ws(h))continue;if(h===i){let p=n.kickTarget||r.p;ne(h,p.x+a*.6,p.z,{sprint:!0,arrive:.6,stop:0});continue}let u=Ms(n,t,h,o,c),f=!1;if(e){let p=qt(h.p.x,h.p.z,e.p.x,e.p.z),g=(h.p.z-e.p.z)*a>=0?1:-1;l&&p<35?(u={x:e.p.x-a*3.5,z:e.p.z+g*a*(4+h.num%3*3.5)},f=!0):e.ai.plan&&e.ai.plan.target===h&&e.ai.dummyHalf&&n.time-(n.playStartT||0)<1.4?(u={x:e.p.x-a*.9,z:e.p.z+g*a*3.2},f=!0):p<15&&(u.x=e.p.x-a*Math.max(2.2,Math.abs(u.x-o)*.55),f=!0)}(u.x-o)*a>-.8&&(u.x=o-a*.8),u.z=nt(u.z,-ii+1.5,ii-1.5),ne(h,u.x,u.z,{sprint:f||qt(h.p.x,h.p.z,u.x,u.z)>6}),h.speedH<.5&&Pn(h,a)}}function Qu(n,t,e,i){let s=i.dir,a=25;for(let r of i.opp.players){if(!r.isUpright()&&r.state!=="getup")continue;let o=(r.p.x-t)*s,c=Math.abs(r.p.z-e);if(o<-1||c>3.5+Math.max(0,o)*.35)continue;let l=Math.max(0,o)+c*.6;l<a&&(a=l)}return Math.abs(e)>ii-3&&(a-=4),a}function Gx(n,t,e){let i=t.team,s=i.dir,a=t.ai,r=i.opp;if(a.passCd=Math.max(0,(a.passCd||0)-e),t.state==="tackled"){let u=t.engage,f=u&&t.team.players.some(p=>p!==t&&p.isUpright()&&qt(p.p.x,p.p.z,t.p.x,t.p.z)<5&&(t.p.x-p.p.x)*t.team.dir>-1);u&&f&&!u.noOffload&&u.tacklers.length===1&&!u.offloadTried&&u.progress<.45&&Ft(e*.35*(t.attr.hand>82?1.6:1))&&$s(n,t,0),u&&!u.breakTried&&u.progress<.3&&t.isForward&&Ft(e*.8)&&Qs(n,t);return}if(!t.canAct())return;let o=t.p.x*s;if(o>xi){ne(t,s*(xi+3),0,{sprint:!0});return}o<-xi&&t.ai.inGoalCatch&&ne(t,-s*(xi-2),t.p.z,{sprint:!0});let c=null,l=99;for(let u of r.players){if(!u.isUpright())continue;let f=qt(u.p.x,u.p.z,t.p.x,t.p.z);f<l&&(l=f,c=u)}if(a.dummyHalf&&a.plan){if(a.passDelay-=e,a.passDelay>0){t.wish.x=t.wish.z=0,Pn(t,s);return}let u=a.plan;if(a.dummyHalf=!1,a.plan=null,u.kind!=="run"){let f=u.target&&u.target!==t&&u.target.isUpright()?u.target:null;if(f&&((t.p.x-f.p.x)*s<-2||qt(f.p.x,f.p.z,t.p.x,t.p.z)>24)&&(f=null),f||(f=tc(n,t,t.p.z*s>0?-1:1,!1)||tc(n,t,t.p.z*s>0?1:-1,!1)),f){kn(n,t,f,{long:qt(f.p.x,f.p.z,t.p.x,t.p.z)>12}),u.kind==="kick"&&(f.ai.plan={kind:"kick"},f.ai.kickDelay=gt(.35,1)),u.kind==="shift"&&(f.ai.shift=Ft(.6)?.9:0);return}}}let h=[7,6,1];if(a.plan&&a.plan.kind==="kick"||n.tackleCount===5&&h.includes(t.num)){if(a.kickDelay=(a.kickDelay??gt(.3,.9))-e,a.kickDelay<=0||l<4.5){a.plan=null,a.kickDelay=null,Eu(n,t);return}}else if(n.tackleCount===5&&a.passCd<=0){let u=[i.get(7),i.get(6),i.get(1)].find(f=>f!==t&&f.isUpright()&&(t.p.x-f.p.x)*s>-1.5&&qt(f.p.x,f.p.z,t.p.x,t.p.z)<20);if(u&&l>1.5){kn(n,t,u,{}),u.ai.plan={kind:"kick"},u.ai.kickDelay=gt(.3,.8);return}}if(c&&l<3.3){let u=(c.p.x-t.p.x)/l,f=(c.p.z-t.p.z)/l,p=t.fwd,g=t.right;if(p.x*u+p.z*f>.15&&a.evadeFor!==c){a.evadeFor=c;let x=i.human?1:n.diff.cpuEvade,m=g.x*u+g.z*f>0?1:-1,d=Vt();t.attr.agility>=76&&d<.26*x?t.doStep(-m):t.isForward&&t.attr.strength>80&&d<.36*x?t.doBump():d<.4*x&&t.doFend(m)}}a.think=(a.think||0)-e,!(a.think<=0&&(a.think=.1,a.shift&&(a.shift-=.1),a.passCd<=0&&Wx(n,t,l)))&&Xx(n,t,e,l)}function Wx(n,t,e){let i=t.team,s=t.ai,a=[7,6,1,9].includes(t.num),r=a?.75:t.num===2||t.num===5||t.isForward?.2:.45,o=s.shift>0;if(e>4&&!o)return!1;let c=Qu(n,t.p.x,t.p.z,i)+(t.isForward&&n.tackleCount<4?2:0),l=null,h=-1e9;for(let f of[-1,1])for(let p of Ri(n,t,f).slice(0,2)){let g=p.q;if(p.behind>7)continue;let x=Qu(n,g.p.x+g.v.x*.5,g.p.z+g.v.z*.5,i)-p.behind*.6-p.lat*.04+(g.num===2||g.num===5?1:0);x>h&&(h=x,l=p)}if(!l)return!1;if(h>c+(o?1:3)&&Ft(r*(e<2.8?.8:.4)+(o?.3:0))){let f=Ri(n,t,Math.sign((l.q.p.z-t.p.z)*i.dir)||1).indexOf(l);return kn(n,t,l.q,{long:l.lat>11||f>0}),a&&Ft(.2)&&(l.q.ai.shift=.5),s.shift=0,!0}return!1}function Xx(n,t,e,i){let s=t.team,a=s.dir,r=s.opp,o=t.ai;if(o.lineT=(o.lineT||0)-e,o.lineT<=0){o.lineT=.15;let l=wt(a,0),h=Math.max(5,t.topSpeed*.9),u=t.isForward&&n.tackleCount<4,f=-1e9,p=0;for(let g=-55;g<=55;g+=11){let x=l+g*Math.PI/180,m=Math.sin(x),d=Math.cos(x),_=m*a*(u?14:10)-Math.abs(Math.sin(g*Math.PI/180))*3;for(let S of[.4,.8,1.2]){let v=t.p.x+m*h*S,P=t.p.z+d*h*S;Math.abs(P)>ii-3&&(_-=25*S);for(let E of r.players){if(!E.isUpright())continue;let R=qt(E.p.x,E.p.z,v,P)-Math.min(E.topSpeed,8.5)*S*.8-.9;R<0&&(_+=R*(u?.8:1.6)/S)}}_-=Math.abs(g-(o.runA||0))*.02,_>f&&(f=_,p=g)}o.runA=p}let c=wt(a,0)+(o.runA||0)*Math.PI/180;t.wish.x=Math.sin(c),t.wish.z=Math.cos(c),t.wantSprint=t.stamina>.15||i<8}function hc(n,t){let e=t.p.x-n.p.x,i=t.p.z-n.p.z,s=t.v.x,a=t.v.z,r=Math.max(5,n.topSpeed*.97),o=s*s+a*a-r*r,c=2*(e*s+i*a),l=e*e+i*i,h=null;if(Math.abs(o)<1e-6)c<0&&(h=-l/c);else{let u=c*c-4*o*l;if(u>=0){let f=Math.sqrt(u),p=(-c-f)/(2*o),g=(-c+f)/(2*o);h=[p,g].filter(x=>x>0).sort((x,m)=>x-m)[0]??null}}return h===null||h>4?{t:Math.hypot(e,i)/r+4,x:t.p.x+s*.9,z:t.p.z+a*.9}:{t:h,x:t.p.x+s*h,z:nt(t.p.z+a*h,-ii+.5,ii-.5)}}function ju(n,t,e,i,s){if(!e)return;let a=t.opp,r=a.dir,o=n.lineBreakDone,c=t.human?.17:n.diff.cpuReact,l=t.players.filter(_=>!_.controlled&&ws(_)&&!_.engage&&_.state!=="kick"),h=l.filter(_=>!_.offside).map(_=>{let S=hc(_,e),v=S.t;return(_.p.x-e.p.x)*r<-1.5&&!o&&(v+=1.5),{p:_,tti:v,ic:S}}).sort((_,S)=>_.tti-S.tti),u=new Map(h.map(_=>[_.p,_.ic])),f=n.controlled&&n.controlled.team===t&&qt(n.controlled.p.x,n.controlled.p.z,e.p.x,e.p.z)<6,p=o?4:f?1:2,g=new Set(h.slice(0,p).map(_=>_.p)),x=n.tackleCount>=4,m=[];for(let _ of l){if(_.offside){ne(_,(n.onsideAx-1.5)*t.dir,_.p.z,{sprint:!0});continue}if(g.has(_)){if(_.ai.bite>0){ne(_,_.ai.biteX,_.ai.biteZ,{sprint:!0,stop:0});continue}let S=qt(_.p.x,_.p.z,e.p.x,e.p.z),v=u.get(_),P=S<3?nt(S/Math.max(5,_.topSpeed),0,.35):null;P!==null?ne(_,e.p.x+e.v.x*P,e.p.z+e.v.z*P,{sprint:!0,arrive:.6,stop:0}):ne(_,v.x,v.z,{sprint:!0,arrive:.6,stop:0});let E=_.ai.marker&&n.time-(n.playStartT||0)<.55;if(!i&&n.ball.carrier===e&&e.state!=="tackled"&&!E){let R=qt(_.p.x,_.p.z,e.p.x+e.v.x*.22,e.p.z+e.v.z*.22),C=qt(_.p.x,_.p.z,e.p.x+e.v.x*.4,e.p.z+e.v.z*.4);if(S<1.95&&R<1.8){if(_.ai.react+=s,_.ai.react>c){_.ai.react=0;let w=(e.fwd.x*(_.p.x-e.p.x)+e.fwd.z*(_.p.z-e.p.z))/Math.max(.1,S)>.5;Cn(n,_,w&&_.attr.strength>80&&Ft(.15)?"grip":Ft(.3)?"low":"normal")}}else S<3.4&&C<3.2&&(_.p.x-e.p.x)*r<.5&&e.speedH>_.speedH*.9&&Ft(s*3)?Cn(n,_,"dive"):_.ai.react=Math.max(0,_.ai.react-s*.5)}continue}if((_.p.x-e.p.x)*r<-1.5){let S=hc(_,e);ne(_,S.x,S.z,{sprint:!0});continue}if(_.num===1){if(o||Math.abs(e.p.x-_.p.x)<18){let v=hc(_,e);ne(_,v.x,v.z,{sprint:!0});continue}let S=nt(e.p.x+r*(x?22:14),-xi-2,xi+2);ne(_,S,e.p.z*.6,{}),_.faceTarget=wt(-r,0);continue}if(x&&(_.num===2||_.num===5)&&!o){let S=nt(e.p.x+r*20,-xi-2,xi+2);ne(_,S,(_.p.z>0?1:-1)*22);continue}m.push(_)}let d=a.players.filter(_=>_!==e);ef(n,t,m,d,_=>{let v=(_||e).p.x+r*2.2;return(v-e.p.x)*r<.5&&(v=e.p.x+r*.5),v},e.p.z,!0,{lineSpeed:t.human?.95:n.diff.lineSpeed})}function Kx(n,t){let e=n.ball,i=e.info,s=n.kickTarget||{x:e.p.x+e.v.x*.4,z:e.p.z+e.v.z*.4},a=e.kind==="kick"&&i&&i.team?i.team:null;for(let r of n.teams){let o=r.dir;r.players.filter(l=>!l.controlled&&ws(l)).map(l=>({p:l,t:qt(l.p.x,l.p.z,s.x,s.z)/Math.max(5,l.topSpeed)})).sort((l,h)=>l.t-h.t).forEach((l,h)=>{let u=l.p;if(a===r){if(u.kickOffside){u.wish.x=-o*.3,u.wish.z=0,u.wantSprint=!1;return}h<4?ne(u,s.x,s.z,{sprint:!0,stop:.2,arrive:.8}):ne(u,s.x-o*(8+h),nt(s.z+(h%2?1:-1)*(4+h*2),-ii+2,ii-2),{sprint:!1})}else if(a)h===0?ne(u,s.x,s.z,{sprint:!0,stop:.05,arrive:.7}):h===1?ne(u,s.x-o*4,s.z+2,{sprint:!0}):ne(u,s.x+o*(5+h%4*3),nt(s.z+(h%2?1:-1)*(3+h*2.2),-ii+2,ii-2),{sprint:h<5});else if(h<2)ne(u,s.x,s.z,{sprint:!0,stop:0,arrive:.5});else{let f=Ms(n,r,u,e.p.x,e.p.z);ne(u,f.x,f.z,{})}u.speedH<.5&&uc(u,e.p.x,e.p.z)})}}var nf=Ct.half,sf={faceA:"punt",faceB:"grubber",faceX:"chip",fieldGoal:"fieldgoal"},af={faceA:"punt",faceB:"grubber",faceX:"chip",faceY:"bomb",fieldGoal:"fieldgoal"},fc={faceA:0,faceB:1,faceY:2},$x={passL:{used:!1,pending:null},passR:{used:!1,pending:null}};function lf(n,t){let e=n.humanTeam,i=n.input;if(!e||(n.phase==="play"&&i.pressed("foot")&&!n.kickAim&&(n.humanFoot=(n.humanFoot||n.controlled?.attr.foot||"R")==="R"?"L":"R",n.audio.ui()),n.phase!=="play"&&n.phase!=="ptb"))return;qx(n);let s=n.controlled;if(!s)return;let a=n.camRig.inputToWorld(i.move.x,i.move.y),r=n.ball;if(n.phase==="ptb"){if(s.team===n.pd.team)return;if(Ss.has(s.state)){s.wish.x=a.x,s.wish.z=a.z,s.wantSprint=i.held("sprint"),s.faceTarget=wt(-s.team.opp.dir,0);let o=s.team;!s.ai.marker&&s.p.x*o.dir>n.pd.onsideAx-.3&&s.wish.x*o.dir>0&&!s.offside&&(s.wish.x=0)}i.pressed("passL")&&Ts(n,0),(i.pressed("passR")||i.pressed("kickMod"))&&Ts(n,i.pressed("kickMod")?0:1);return}if(Ss.has(s.state)&&s.state!=="kick"&&(s.wish.x=a.x,s.wish.z=a.z,s.wantSprint=i.held("sprint"),s.faceTarget=null),r.state==="held"&&r.carrier===s)return Zx(n,s,a,t);if(r.state==="held"&&r.carrier&&r.carrier.team!==e||s.state==="tackling")return of(n,s);r.state!=="held"&&(i.pressed("passL")&&Ts(n,0),i.pressed("passR")&&Ts(n,1),i.pressed("faceX")&&s.doJump())}function qx(n){let t=n.ball,e=n.humanTeam;if(t.state==="held"&&t.carrier){if(t.carrier.team===e){n.setControlled(t.carrier);return}(!n.controlled||n.controlled.team!==e)&&n.setControlled(n.nearest(e.players,t.carrier.p.x,t.carrier.p.z,a=>a.isUpright()));return}if(t.state==="air"&&t.kind==="pass"&&t.info){if(t.info.team===e){n.setControlled(t.info.target);return}if(n.lastSwitchFor!==t.info&&n.settings.autoSwitch!==!1){n.lastSwitchFor=t.info;let a=t.info.tx,r=t.info.tz,o=n.nearest(e.players,a,r,l=>l.isUpright()),c=n.controlled;o&&c&&o!==c&&qt(c.p.x,c.p.z,a,r)>qt(o.p.x,o.p.z,a,r)+4&&n.setControlled(o)}return}let i=t.info?t.info:t,s=`${t.bounces}`;if(n.lastSwitchFor!==i||n.lastSwitchStamp!==s){n.lastSwitchFor=i,n.lastSwitchStamp=s;let a=n.kickTarget||t.p,r=n.nearest(e.players,a.x,a.z,o=>o.isUpright()&&!o.kickOffside);r&&n.setControlled(r)}}function Ts(n,t){let e=n.humanTeam,i=n.ball,s=i.carrier||i,a=s.p.x,r=s.p.z,o=e.players.filter(l=>l.isUpright()||l.state==="getup").sort((l,h)=>qt(l.p.x,l.p.z,a,r)-qt(h.p.x,h.p.z,a,r));if(!o.length)return;let c=o[0];if(t===0&&c===n.controlled&&o[1]&&(c=o[1]),t===1){let l=o.indexOf(n.controlled);c=o[(l+1)%Math.min(o.length,5)]||o[0]}n.setControlled(c),n.audio.ui()}function rf(n,t,e){let i=n.camRig.inputToWorld(e,0),s=t.right;return i.x*s.x+i.z*s.z>=0?1:-1}function Yx(n,t,e){let i=t.right,s=e.x*i.x+e.z*i.z;if(Math.abs(s)>.3)return s>0?1:-1;let a=Ri(n,t,1).length,r=Ri(n,t,-1).length;return a>=r?1:-1}function Zx(n,t,e,i){let s=n.input,a=t.team;if(t.state==="tackled"){s.pressed("passL")?$s(n,t,-1):s.pressed("passR")&&$s(n,t,1),(s.pressed("rsUp")||s.pressed("rsDown")||s.pressed("rsLeft")||s.pressed("rsRight"))&&Qs(n,t),s.pressed("sprint")&&t.engage&&(t.engage.legDrive=Math.min(1.6,t.engage.legDrive+.35));return}if(n.kickAim)return Jx(n,t,i);let r=t.p.x*a.dir>nf;for(let l of["passL","passR"]){let h=l==="passL"?-1:1,u=$x[l];if(s.pressed(l)&&(u.used=!1,u.pending=null),s.held(l))for(let f in fc)s.pressed(f)&&(u.used=!0,u.pending&&u.pending.face===f&&s.doubleTapped(f)?(dc(n,t,h,fc[f],!0),u.pending=null):u.pending={face:f,t:.22});if(u.pending&&(u.pending.t-=i,u.pending.t<=0&&(dc(n,t,h,fc[u.pending.face],!1),u.pending=null)),s.released(l)&&!u.used&&dc(n,t,h,0,s.doubleTapped(l)),n.ball.carrier!==t)return}let o=s.held("passL")||s.held("passR");if(!r){if(s.pressed("rsLeft")&&t.doStep(rf(n,t,-1)),s.pressed("rsRight")&&t.doStep(rf(n,t,1)),s.pressed("rsUp")&&t.doBump(),s.pressed("rsDown")){let l=n.nearest(a.opp.players,t.p.x,t.p.z,f=>f.isUpright()),h=t.right,u=l?(l.p.x-t.p.x)*h.x+(l.p.z-t.p.z)*h.z>0?1:-1:1;t.doFend(u)}s.held("rsDown")&&t.holdFend()}if(o||r||!t.canAct())return;let c=s.held("kickMod");for(let l of Object.keys(c?af:sf)){if(!s.pressed(l))continue;let h=(c?af:sf)[l],u=n.humanFoot||t.attr.foot;if(c){let f=h==="fieldgoal"?wt(a.dir*nf-t.p.x,-t.p.z):wt(a.dir,0);n.kickAim={type:h,btn:l,yaw:f,holdT:0,power:0,foot:u,over:0}}else Au(n,t,h,u);return}!c&&s.pressed("faceY")&&du(n,t,Yx(n,t,e))}function dc(n,t,e,i,s){if(n.ball.carrier!==t||t.state==="tackled")return;let a=Ri(n,t,e);if(!a.length)return;let r=a[Math.min(i,a.length-1)];kn(n,t,r.q,{long:i>0||r.lat>12,flat:s})}function Jx(n,t,e){let i=n.input,s=n.kickAim,a=t.team;if(!i.held(s.btn)&&!i.released(s.btn)){n.kickAim=null;return}s.holdT+=e;let r=n.camRig.screenRight(),o=Math.cos(s.yaw)*r.x-Math.sin(s.yaw)*r.z;s.yaw+=i.move.x*1.7*e*(o>=0?1:-1);let c=wt(a.dir,0);s.yaw=c+nt(Zl(s.yaw-c),-1.5,1.5),s.power=Math.min(1,s.holdT/1),s.over=Math.max(0,s.holdT-1);let l=nt(.7+i.move.y*.3,.25,1);if(t.wish.x=a.dir*l,t.wish.z=0,i.pressed("foot")&&(s.foot=s.foot==="R"?"L":"R",n.humanFoot=s.foot),i.pressed("passL")||i.pressed("passR")){n.kickAim=null;return}if(i.released(s.btn)){let h=n.kickAim;n.kickAim=null,Ai(n,t,h.type,h.yaw,Math.max(.05,h.power),{foot:h.foot,extraErr:Math.min(.12,h.over*.1)})}}function of(n,t){let e=n.input,i=n.ball.carrier;if(t.state==="tackling"){e.pressed("faceX")&&qu(n,t);return}if(e.pressed("passL")||e.pressed("kickMod"))return Ts(n,0);if(e.pressed("passR"))return Ts(n,1);!i||t.state!=="free"||(e.pressed("faceA")?Cn(n,t,"low",{human:!0}):e.pressed("faceB")?Cn(n,t,"grip",{human:!0}):e.pressed("faceY")&&Cn(n,t,"dive",{human:!0}))}var ye=Ct.half,Se=Ct.halfW;function Qx(){return{tries:0,convM:0,convA:0,penGoals:0,penA:0,fieldGoals:0,tackles:0,missed:0,runs:0,metres:0,offloads:0,linebreaks:0,errors:0,pensConceded:0,possT:0,kicks:0,busts:0,passes:0}}var Pr=class{constructor(t,e,i){this.idx=t,this.def=e,this.kit=i,this.name=e.name,this.short=e.short,this.dir=t===0?1:-1,this.players=[],this.score=0,this.stats=Qx(),this.human=!1}get(t){return this.players.find(e=>e.num===t)}get goalKicker(){return[...this.players].sort((t,e)=>e.attr.kick-t.attr.kick)[0]}get color(){return this.kit.primary}},Ir=class{constructor(t){this.scene=t.scene,this.audio=t.audio,this.hud=t.hud,this.input=t.input,this.camRig=t.camRig,this.settings=t.settings,this.diff=Kl[t.settings.difficulty]||Kl.normal,this.humanIdx=t.humanIdx;let e=Du(t.homeDef,t.awayDef);this.teams=[new Pr(0,t.homeDef,e[0]),new Pr(1,t.awayDef,e[1])],this.teams[0].opp=this.teams[1],this.teams[1].opp=this.teams[0],this.humanIdx>=0&&(this.teams[this.humanIdx].human=!0),this.humanTeam=this.humanIdx>=0?this.teams[this.humanIdx]:null,this.players=[];for(let o of this.teams){let c=cc(o.kit,o.def.id+o.idx);for(let l of Lu(o.def)){let h=new Js(c,{...l,number:l.num});this.scene.add(h.root);let u=new Zs(o,l,h);o.players.push(u),this.players.push(u)}}let i=cc({primary:"#c6f01e",secondary:"#111111",trim:"#111111",pattern:"yoke",shorts:"#111111",socks:"#111111"},"ref"),s=new Js(i,{number:0,build:{w:.95,h:.98},skin:"#e0ac82",hair:"#3a2a1a",hairStyle:"short",isRef:!0});this.scene.add(s.root),this.ref=new Zs(null,{num:0,pos:"REF",name:"Referee",attr:{speed:80,accel:80,agility:70,strength:50,tackle:0,pass:0,kick:0,hand:0,stamina:99,foot:"R"},mass:75},s),this.ball=new Rr(this.scene);let a=$l[t.settings.wind]||$l.breezy;this.windBase={ang:Vt()*Math.PI*2,speed:gt(a.min,a.max),gust:a.gust},this.wind={x:0,z:0,speed:0,ang:0},this.updateWind(0),this.time=0,this.clock=0,this.half=1,this.siren=!1,this.clockRate=2400/(Math.max(1,t.settings.halfLen)*60),this.phase="none",this.phaseT=0,this.pd={},this.poss=this.teams[0],this.tackleCount=0,this.engagements=[],this.controlled=null,this.kickAim=null,this.humanFoot=null,this.kickTarget=null,this.events=[],this.eventLog=[],this.gainLineX=0,this.lineBreakDone=!1,this.excite=0,this.firstKickTeam=Ft(.5)?this.teams[0]:this.teams[1],this.over=!1,this.goldenPoint=!1,this.listeners=[];let r=new fs(.55,.75,24);this.ring=new St(r,new Ee({color:16769354,transparent:!0,opacity:.9,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.scene.add(this.ring),this.arrow=new St(new us(.18,.4,4),new Ee({color:16769354})),this.arrow.rotation.x=Math.PI,this.scene.add(this.arrow),this.landMarker=new St(new fs(.6,.9,20),new Ee({color:4911359,transparent:!0,opacity:.7,depthWrite:!1})),this.landMarker.rotation.x=-Math.PI/2,this.landMarker.visible=!1,this.scene.add(this.landMarker),this.aimLine=new sr(new Fe().setFromPoints(Array.from({length:24},()=>new D)),new ar({color:16777215,dashSize:.6,gapSize:.4,transparent:!0,opacity:.9})),this.aimLine.visible=!1,this.aimLine.frustumCulled=!1,this.scene.add(this.aimLine),this.aimReticle=new St(new fs(1,1.35,24),new Ee({color:16738858,transparent:!0,opacity:.85,depthWrite:!1})),this.aimReticle.rotation.x=-Math.PI/2,this.aimReticle.visible=!1,this.scene.add(this.aimReticle),this.tee=new St(new oi(.06,.1,.12,8),new he({color:16747008})),this.tee.visible=!1,this.scene.add(this.tee)}opp(t){return t.opp}ax(t,e){return e*t.dir}on(t){this.listeners.push(t)}emit(t,e={}){let i={type:t,t:this.time,clock:this.clock,half:this.half,...e};this.eventLog.push({type:t,t:+this.time.toFixed(2),half:this.half,team:e.team?.short,who:e.player?.name,note:e.note,how:e.how,why:e.why,kind:e.kind}),this.eventLog.length>400&&this.eventLog.shift();for(let s of this.listeners)s(i)}message(t,e="",i=2,s=""){this.hud?.message(t,e,i,s)}isLate(){return this.half>=2&&this.clock>2400*.78}clockText(){let t=this.half===1?this.clock:this.half===2?2400+this.clock:4800+this.clock,e=Math.floor(t/60),i=Math.floor(t%60);return`${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}`}updateWind(t){let e=this.windBase,i=this.time,s=1+Math.sin(i*.31)*e.gust*.6+Math.sin(i*.83+1.3)*e.gust*.4,a=e.ang+Math.sin(i*.05)*.25;this.wind.speed=Math.max(0,e.speed*s),this.wind.ang=a,this.wind.x=Math.cos(a)*this.wind.speed,this.wind.z=Math.sin(a)*this.wind.speed}setPhase(t,e={}){this.phase=t,this.phaseT=0,this.pd=e,this.emit("phase",{phase:t})}setControlled(t){this.controlled!==t&&(this.controlled&&(this.controlled.controlled=!1),this.controlled=t,t&&(t.controlled=!0,t.ai.react=0))}nearest(t,e,i,s=()=>!0){let a=null,r=1/0;for(let o of t){if(!s(o))continue;let c=qt(o.p.x,o.p.z,e,i);c<r&&(r=c,a=o)}return a}clampField(t,e,i=1){return{x:nt(t,-ye+.5,ye-.5),z:nt(e,-Se+i,Se-i)}}attackTeam(){let t=this.ball;return t.state==="held"&&t.carrier?t.carrier.team:t.kind==="pass"&&t.info?t.info.team:this.poss}start(){this.setupKickoff(this.firstKickTeam,!0)}place(t,e,i,s){t.p.set(e,0,i),t.v.set(0,0,0),t.heading=s,t.setState("free"),t.lunge=null,t.engage=null,t.offside=!1,t.kickOffside=!1,t.wish.x=t.wish.z=0,t.ai.hold={x:e,z:i},t.ai.role="hold",t.faceTarget=s}resetAll(){this.engagements.length=0;for(let t of this.players)t.lunge=null,t.engage=null,t.offside=!1,t.kickOffside=!1,t.speedMul=1,t.ai.hold=null,t.ai.plan=null,t.readyStance=!1;this.kickAim=null,this.kickTarget=null,this.tee.visible=!1}setupKickoff(t,e=!1){let i=t.opp,s=()=>{this.resetAll();let a=t.dir,r=t.goalKicker;for(let c of t.players){if(c===r)continue;let l=t.players.filter(h=>h!==r).indexOf(c);this.place(c,-a*1.5,-30+l*5.2+gt(-.5,.5),wt(a,0))}this.place(r,-a*4.5,-1.2,wt(a,0));let o={8:[12,-8],10:[12,8],9:[14,0],11:[16,-18],12:[16,18],13:[18,0],3:[26,14],4:[26,-14],6:[30,-5],7:[30,6],2:[38,22],5:[38,-22],1:[45,0]};for(let c of i.players){let l=o[c.num];this.place(c,a*l[0],l[1]*i.dir,wt(-a,0))}this.ball.state="dead",this.ball.carrier=null,this.ball.p.set(0,.3,0),this.ball.v.set(0,0,0),this.tee.visible=!0,this.tee.position.set(0,.06,0),this.poss=i,this.tackleCount=0,this.setPhase("kickoff",{team:t,kicker:r,stage:"aim",type:"kickoff",yaw:wt(a,0),power:0,holdT:0,cpuT:gt(1.2,2),runT:0}),t.human?this.setControlled(r):this.humanTeam&&this.setControlled(this.humanTeam.get(1)),this.message(e?"KICK-OFF":"RESTART",`${t.name} kick off`,1.8),this.audio.whistle()};e?s():this.transition(s)}transition(t){this.setPhase("transition",{fn:t,done:!1}),this.hud?.fadeOut()}phase_transition(){if(!this.pd.done&&this.phaseT>=.32){this.pd.done=!0;let t=this.pd.fn;t(),this.hud?.fadeIn()}}whistleStop(t,e,i,s={}){if(this.phase!=="whistle"){for(let a of this.engagements){a.carrier.state==="tackled"&&a.carrier.setState("free");for(let r of a.tacklers)r.setState("stumble",.4)}this.engagements.length=0,this.ball.state==="held"&&(this.ball.carrier=null,this.ball.state="ground",this.ball.v.set(0,0,0)),this.kickAim=null,this.audio.whistle(s.long),this.ref.refSignal=1.2,this.message(t,e,2,s.style||"bad"),this.setPhase("whistle",{restart:i,dur:s.dur||1.8})}}phase_whistle(){if(this.phaseT>=this.pd.dur){if(this.siren&&!this.pd.restart.ignoreSiren)return this.endPeriod();this.executeRestart(this.pd.restart)}}executeRestart(t){switch(t.type){case"scrum":return this.setupScrum(t.team,t.x,t.z);case"penalty":return this.setupPenalty(t.team,t.x,t.z);case"ptb":return this.transition(()=>this.setupPTB(t.team,{x:t.x,z:t.z},{restart:!0,zero:!0}));case"dropout":return this.setupDropout(t.team);case"kickoff":return this.setupKickoff(t.team)}}scrumRestart(t,e,i,s,a){this.whistleStop(s,a,{type:"scrum",team:t,x:e,z:i})}knockOn(t,e,i,s="KNOCK ON"){t.stats.errors++,this.emit("error",{team:t,why:s}),this.audio.roar(.6,!0);let a=e*t.dir;if(a<-ye)return this.whistleStop(s,`${t.short} error in-goal \u2014 goal-line drop-out`,{type:"dropout",team:t});if(a>ye)return this.whistleStop(s,`${t.short} error in-goal \u2014 20m restart`,{type:"ptb",team:t.opp,x:-t.opp.dir*30,z:0});this.scrumRestart(t.opp,e,i,s,`Scrum, ${t.opp.short} feed`)}awardPenalty(t,e,i,s){t.opp.stats.pensConceded++,this.emit("penalty",{team:t,reason:s}),this.whistleStop("PENALTY",`${s} \u2014 ${t.short} ball`,{type:"penalty",team:t,x:e,z:i},{style:"warn"})}setupDropout(t){this.transition(()=>{this.resetAll();let e=t.dir,i=-e*ye,s=t.goalKicker;t.players.forEach((a,r)=>{a!==s&&this.place(a,i+e*gt(.5,3),-28+r*4.7,wt(e,0))}),this.place(s,i-e*1.5,0,wt(e,0)),t.opp.players.forEach((a,r)=>this.place(a,i+e*(12+(a.num===1?30:r%3*6)),-28+r*4.7,wt(-e,0))),this.ball.state="dead",this.ball.carrier=null,this.ball.p.set(i,.3,0),this.poss=t.opp,this.tackleCount=0,this.setPhase("kickoff",{team:t,kicker:s,stage:"aim",type:"dropout",yaw:wt(e,0),power:0,holdT:0,cpuT:gt(1,1.6),runT:0,spot:{x:i,z:0}}),t.human?this.setControlled(s):this.humanTeam&&this.setControlled(this.humanTeam.get(1)),this.message("GOAL-LINE DROP-OUT",`${t.name}`,1.8)})}phase_kickoff(t){let e=this.pd,i=e.kicker,s=e.team,a=e.spot||{x:0,z:0};if(e.stage==="aim")i.setState("goalkick"),i.anim.preKick=!0,i.p.set(a.x-Math.sin(e.yaw)*3.5,0,a.z-Math.cos(e.yaw)*3.5),i.heading=e.yaw,this.ball.p.set(a.x,e.type==="dropout"?1:.3,a.z),s.human?nc(this,t,e,e.type==="dropout"?["dropout"]:["kickoff","shortko"]):this.phaseT>e.cpuT&&Su(this,e);else if(e.stage==="run"){e.runT+=t;let r=Math.min(1,e.runT/.55);i.p.set(a.x-Math.sin(e.yaw)*(3.5-r*3),0,a.z-Math.cos(e.yaw)*(3.5-r*3)),i.anim.preKick=!1,i.anim.kt=e.runT>.4?e.runT-.4+.12:0,i.anim.foot=e.foot,i.v.set(Math.sin(e.yaw)*5.5,0,Math.cos(e.yaw)*5.5),i.speedH=r<1?5.5:0,e.runT>=.47&&!e.kicked&&(e.kicked=!0,this.tee.visible=!1,Ai(this,i,e.type,e.yaw,e.power,{place:e.type!=="dropout",restart:!0,foot:e.foot,elev:e.elev}),i.setState("kick",.55),i.stateT=.2,this.setPhase("play",{}))}}phase_play(){}updateBall(t){let e=this.ball;if(e.state==="held"&&e.carrier){let i=e.carrier,s=i.fwd,a=i.right;e.p.set(i.p.x+s.x*.2+a.x*.2*i.carrySide,i.state==="ground"?.3:1.12,i.p.z+s.z*.2+a.z*.2*i.carrySide),e.v.copy(i.v)}else e.state!=="dead"&&e.step(t,this.wind);this.phase==="play"?mu(this,t):this.phase==="goalKick"?vu(this):e.state==="ground"||e.state}rulesLive(t){let e=this.ball;e.state==="held"&&e.carrier&&gu(this,e.carrier,t),e.kind==="kick"&&e.info&&e.state!=="held"&&xu(this);for(let s of this.players){if(!s.offside)continue;let a=s.team,r=s.p.x*a.dir<=(this.onsideAx??-99)+.4,o=e.carrier,c=o&&o.team!==a&&(o.p.x-s.p.x)*o.team.dir>.5;(r||c||this.time-(this.playStartT??0)>3)&&(s.offside=!1)}let i=e.carrier;if(i&&e.state==="held"){let s=i.team,a=s.opp.players.filter(o=>o.isUpright()&&(o.p.x-i.p.x)*s.dir>-.5&&Math.abs(o.p.z-i.p.z)<22).length;!this.lineBreakDone&&a<=1&&(i.p.x-this.gainLineX)*s.dir>6&&(this.lineBreakDone=!0,s.stats.linebreaks++,this.emit("linebreak",{team:s,player:i}),this.message("LINE BREAK!",i.name,1.5,"good"),this.audio.roar(.8));let r=i.p.x*s.dir;this.excite=nt((r+10)/60,0,1)*.6+(this.lineBreakDone?.4:0)}else this.excite*=.98}onTackleComplete(t){let e=t.carrier,i=e.team;if(this.siren)return this.endPeriod();if(t.penalty)return this.awardPenalty(i,e.p.x,e.p.z,t.penalty);if(e.p.x*i.dir<-ye)return this.whistleStop("TACKLED IN-GOAL",`Goal-line drop-out ${i.short}`,{type:"dropout",team:i});this.tackleCount++,i.stats.runs++;let a=i,r=null;t.tacklers.length>=2&&Ft(.03+.015*t.tacklers.length)&&this.tackleCount<6&&(this.tackleCount=0,r=["SIX AGAIN","Ruck infringement"],i.opp.stats.pensConceded++,this.emit("sixagain",{team:i})),this.tackleCount>=6&&(a=i.opp,this.tackleCount=0,r=["HANDOVER",`${a.short} ball`],this.poss=a,this.emit("handover",{team:a})),r&&this.message(r[0],r[1],1.6,r[0]==="HANDOVER"?"warn":"good"),this.audio.whistle(),this.setupPTB(a,{x:e.p.x,z:e.p.z},{tackled:e,e:t,handover:a!==i})}setupPTB(t,e,i={}){let s=t.opp,a=t.dir;i.restart&&this.resetAll();let r=nt(e.x,-ye+1,ye-1)*1,o=nt(e.z,-Se+1.5,Se-1.5),c=r;r*a>ye-.5&&(c=a*(ye-.5)),i.zero&&(this.tackleCount=0),this.poss=t;let l=i.tackled&&!i.handover?i.tackled:this.nearest(t.players,c,o,d=>d.state!=="ground"||i.restart);if(i.restart){for(let _ of t.players){let S=Ms(this,t,_,c,o);this.place(_,S.x,S.z,wt(a,0))}let d=Math.max(-ye,c*s.dir-10);for(let _ of s.players){let S=nt(-Se+4+(_.num-1)*5,-Se+2,Se-2);this.place(_,(d-(_.num===1?18:0))*s.dir,S,wt(-a,0))}l=this.nearest(t.players,c,o)}let h=t.get(9);(h===l||qt(h.p.x,h.p.z,c,o)>18||!h.isUpright())&&(h=this.nearest(t.players,c-a*1.5,o,d=>d!==l&&d.isUpright()));let u=i.e?i.e.tacklers.length:1,f=i.e?Math.max(0,i.e.dom):0,p=nt(1.15+.35*(u-1)+f*.8+Vt()*.35,1,3);i.handover&&(p+=1),i.restart&&(p=1.6);let g=[];if(i.e)for(let d of i.e.tacklers)g.length<2&&g.push(d);for(;g.length<(i.restart?1:2);){let d=this.nearest(s.players,c,o,_=>!g.includes(_));if(!d)break;g.push(d)}let x=Math.max(-ye,c*s.dir-10);this.onsideAx=x;for(let d of s.players)d.ai.marker=g.includes(d),d.offside=!d.ai.marker&&d.p.x*s.dir>x+.4;for(let d of t.players)d.ai.marker=!1,d.offside=!1,d.kickOffside=!1;l.state!=="ground"&&l.knockDown(.01),this.ball.state="dead",this.ball.carrier=null,this.ball.kind="loose",this.ball.info=null,this.ball.p.set(c,.3,o);let m=Ru(this,t);this.setPhase("ptb",{team:t,mark:{x:c,z:o},ptbPlayer:l,dummy:h,playAt:p,stage:"down",markers:g,onsideAx:x,plan:m,extra:0});for(let d of t.players)d.ai.plan=null;t.human?this.setControlled(h):this.humanTeam&&(!this.controlled||this.controlled.team!==s||i.handover||i.restart)&&this.setControlled(this.nearest(s.players,c+s.dir*-1*0+(x*s.dir-c)*0,o,d=>!g.includes(d))||s.get(13)),this.gainLineX=c,this.lineBreakDone=!1,this.kickTarget=null}phase_ptb(t){let e=this.pd,i=e.team,s=i.dir,a=e.ptbPlayer,r=e.dummy,o=e.mark;e.stage==="down"&&this.phaseT>.45&&(e.stage="up",a.setState("ptb"),a.p.set(o.x,0,o.z),a.v.set(0,0,0),a.heading=wt(s,0)),(e.stage==="up"||e.stage==="roll")&&(a.p.set(o.x,0,o.z),a.heading=wt(s,0),a.anim.roll=0,this.ball.p.set(o.x+s*.25,.25,o.z));let c={x:o.x-s*1.3,z:o.z},l=qt(r.p.x,r.p.z,c.x,c.z)<1.6;if(e.stage==="up"&&this.phaseT>=e.playAt-.3&&(l||this.phaseT>e.playAt+1.5)&&(e.stage="roll"),e.stage==="roll"){e.rollT=(e.rollT||0)+t,a.anim.roll=e.rollT/.35;let h=nt(e.rollT/.35,0,1);this.ball.p.set(o.x+s*.25-s*1.2*h,.15,o.z),e.rollT>=.35&&(l||(r.p.set(c.x,0,c.z),r.v.set(0,0,0)),r.heading=wt(s,0),r.setState("free"),this.ball.give(r),a.setState("free"),a.anim.roll=0,this.playStartT=this.time,this.setPhase("play",{}),r.ai.plan=e.plan,r.ai.passDelay=gt(.12,.35),r.ai.dummyHalf=!0,r.ai.passCd=0,i.human&&this.setControlled(r),this.emit("ptb",{team:i}))}}setupScrum(t,e,i){this.transition(()=>{this.resetAll();let s=nt(e,-ye+10,ye-10),a=nt(i,-Se+20,Se-20),r={};for(let o of this.teams){let c=o.dir,l={8:[-.7,-.6],9:[-.7,0],10:[-.7,.6],11:[-1.5,-.35],12:[-1.5,.35],13:[-2.3,0]};for(let g of o.players){let x=l[g.num];x&&(this.place(g,s+c*x[0],a+x[1],wt(c,0)),g.setState("scrum"))}let h=o.get(7);o===t?this.place(h,s,a+(a>0?-1.6:1.6),wt(0,a>0?1:-1)):this.place(h,s-c*1.2,a+(a>0?-2.2:2.2),wt(c,0));let u=5,f=[6,1,2,3,4,5],p=a>0?-1:1;f.forEach((g,x)=>{let m=o.get(g),d=g===1?p*8:p*(6+x*6.5),_=o===t?g===1?14:7+x*.8:g===1?22:u+3;this.place(m,s-c*_,nt(a+d,-Se+2,Se-2),wt(c,0))}),r[o.idx]=!0}this.ball.state="dead",this.ball.carrier=null,this.ball.p.set(s,.15,a+(a>0?-1.2:1.2)),this.poss=t,this.tackleCount=0,this.setPhase("scrum",{feed:t,x:s,z:a}),this.humanTeam&&this.setControlled(this.humanTeam===t?t.get(7):this.humanTeam.get(6)),this.message("SCRUM",`${t.short} feed`,1.6)})}phase_scrum(){let t=this.pd,e=t.feed,i=e.dir;if(this.phaseT>1.4&&this.phaseT<2.6&&this.ball.p.set(t.x-i*(this.phaseT-1.4)*2,.15,t.z),this.phaseT>=2.6){let s=e.get(7),a=t.x-i*2.9;s.p.set(a-i*.4,0,t.z),s.heading=wt(i,0);for(let r of this.players)r.state==="scrum"&&(r.setState("getup",.35),r.anim.dur=.35,r.anim.faceUp=!1);this.ball.give(s),s.ai.plan={kind:"shift"},s.ai.passDelay=gt(.2,.5),s.ai.dummyHalf=!0,this.gainLineX=t.x,this.lineBreakDone=!1,this.playStartT=this.time,this.onsideAx=-99,this.setPhase("play",{}),e.human&&this.setControlled(s)}}setupPenalty(t,e,i){let s=this.clampField(e,i,5);s.x*t.dir>ye-10&&(s.x=t.dir*(ye-10)),this.resetAll(),this.poss=t,this.tackleCount=0,this.ball.state="dead",this.ball.carrier=null,this.ball.p.set(s.x,.15,s.z),this.onsideAx=Math.max(-ye,s.x*t.opp.dir-10),this.setPhase("penaltyChoice",{team:t,mark:s,cpuT:1.2}),t.human&&this.hud.penaltyChoice(a=>this.penaltyDecision(a))}phase_penaltyChoice(){let t=this.pd;!t.team.human&&this.phaseT>t.cpuT&&!t.decided&&(t.decided=!0,this.penaltyDecision(Tu(this,t.team,t.mark)))}penaltyDecision(t){let e=this.pd,i=e.team,s=e.mark;this.phase==="penaltyChoice"&&(this.emit("penaltyChoice",{team:i,choice:t}),t==="goal"?this.setupGoalKick(i,"penalty",s.x,s.z):t==="touch"?this.setupTouchKick(i,s):this.transition(()=>this.setupPTB(i,s,{restart:!0,zero:!0,tap:!0})))}setupTouchKick(t,e){this.transition(()=>{this.resetAll();let i=t.goalKicker,s=t.dir,a=e.z>=0?1:-1,r=wt(s*.75,a*.66);this.place(i,e.x,e.z,r);for(let o of t.players)o!==i&&this.place(o,e.x-s*gt(3,12),nt(e.z+gt(-20,20),-Se+2,Se-2),wt(s,0));for(let o of t.opp.players)this.place(o,e.x+s*gt(10,40),nt(gt(-Se+3,Se-3),-Se+2,Se-2),wt(-s,0));this.ball.give(i),this.setPhase("touchKick",{team:t,kicker:i,stage:"aim",type:"touch",yaw:r,power:0,holdT:0,cpuT:1.4,spot:{x:e.x,z:e.z}}),t.human&&this.setControlled(i)})}phase_touchKick(t){let e=this.pd,i=e.kicker;i.p.set(e.spot.x,0,e.spot.z),i.v.set(0,0,0),i.heading=e.yaw,e.stage==="aim"?e.team.human?nc(this,t,e,["touch"]):this.phaseT>e.cpuT&&wu(this,e):e.stage==="run"&&(Ai(this,i,"touch",e.yaw,e.power,{penaltyTouch:!0,foot:e.foot}),this.setPhase("play",{}))}setupGoalKick(t,e,i,s){this.transition(()=>{this.resetAll();let a=t.dir,r=t.goalKicker,o=nt(s,-Se+1,Se-1),c=e==="conversion"?yu(o):ye-i*a;e==="penalty"&&(c=Math.max(10,c));let l=a*(ye-c);this.ball.state="dead",this.ball.carrier=null,this.ball.p.set(l,.3,o),this.ball.v.set(0,0,0),this.tee.visible=!0,this.tee.position.set(l,.06,o);let h=wt(a*ye-l,-o);t.opp.players.forEach((u,f)=>this.place(u,a*(ye+2+f%3),-9+f*1.5,wt(-a,0))),t.players.forEach((u,f)=>{u!==r&&this.place(u,l-a*(8+f%4*2),o*.7-12+f*2,wt(a,0))}),this.place(r,l-Math.sin(h)*3.5,o-Math.cos(h)*3.5,h),this.setPhase("goalKick",{team:t,kicker:r,kind:e,stage:e==="conversion"?"place":"aim",x:l,z:o,dist:c,yaw:h,baseYaw:h,elev:ke.goal.elev,power:0,holdT:0,foot:this.humanFoot&&t.human?this.humanFoot:r.attr.foot,cpuT:gt(1.6,2.4),runT:0}),t.stats[e==="conversion"?"convA":"penA"]++,t.human&&this.setControlled(r),this.message(e==="conversion"?"CONVERSION":"PENALTY GOAL",`${r.name} lines it up`,1.6)})}phase_goalKick(t){let e=this.pd,i=e.kicker,s=e.team;if(e.stage==="place"||e.stage==="aim"||e.stage==="power"){let a=e.x,r=e.z;this.ball.p.set(a,.3,r),this.tee.position.set(a,.06,r),this.tee.visible=!0,this.ball.lookDir.set(Math.sin(e.yaw),.25+e.elev*.4,Math.cos(e.yaw)).normalize(),this.ball.spinAngle=0,i.setState("goalkick"),i.anim.preKick=!0,i.heading=e.yaw,i.p.set(a-Math.sin(e.yaw)*3.5,0,r-Math.cos(e.yaw)*3.5),s.human?bu(this,t,e):this.phaseT>e.cpuT&&_u(this,e)}else if(e.stage==="run"){e.runT+=t;let a=Math.min(1,e.runT/.6);i.p.set(e.x-Math.sin(e.yaw)*(3.5-a*3),0,e.z-Math.cos(e.yaw)*(3.5-a*3)),i.anim.preKick=!1,i.anim.kt=e.runT>.45?e.runT-.45+.12:0,i.anim.foot=e.foot,i.speedH=a<1?4.5:0,i.heading=e.yaw,e.runT>=.52&&!e.kicked&&(e.kicked=!0,this.tee.visible=!1,Ai(this,i,"goal",e.yaw,e.power,{place:!0,elev:e.elev,foot:e.foot,goal:!0}),e.stage="flight",e.flightT=0,e.prevX=this.ball.p.x)}else if(e.stage==="flight")e.flightT+=t,i.anim.kt=e.runT-.45+.12+e.flightT,e.flightT>4.5&&!e.result&&vr(this,!1);else if(e.stage==="result"&&this.phaseT>2.4){if(this.goldenPoint&&e.result)return this.endMatch();if(this.siren)return this.endPeriod();if(e.kind==="penalty"&&!e.result)return this.transition(()=>this.setupPTB(s.opp,{x:-s.opp.dir*30,z:0},{restart:!0,zero:!0}));this.setupKickoff(s.opp)}}scoreTry(t,e){if(this.phase!=="play")return;let i=t.team;i.score+=4,i.stats.tries++,t.stats.tries++,this.engagements.length=0,this.ball.state="dead",this.ball.carrier=null,this.ball.p.set(t.p.x+i.dir*.4,.15,t.p.z),this.audio.whistle(!0),this.audio.roar(1.4),this.message("TRY!",`${t.name} \u2014 ${i.name}`,2.6,"try"),this.emit("try",{team:i,player:t}),this.hud.flashScore(),t.setState("celebrate"),this.setPhase("tryCelebration",{team:i,scorer:t,z:e,x:t.p.x}),this.excite=1}phase_tryCelebration(){let t=this.pd;if(this.phaseT>3.2){for(let e of this.players)e.state==="celebrate"&&e.setState("free");if(this.goldenPoint)return this.endMatch();this.setupGoalKick(t.team,"conversion",t.x,t.z)}}endPeriod(){if(this.siren=!1,this.engagements.length=0,this.kickAim=null,this.audio.whistle(!0),this.half===1)this.setPhase("halftime",{next:()=>this.startSecondHalf()}),this.humanTeam&&this.hud.showBreak(this,"HALF TIME",()=>this.startSecondHalf());else if(this.half===2&&this.teams[0].score===this.teams[1].score&&this.settings.goldenPoint){let t=()=>{this.half=3,this.clock=0,this.goldenPoint=!0,this.setupKickoff(Ft(.5)?this.teams[0]:this.teams[1])};this.setPhase("halftime",{next:t}),this.humanTeam?this.hud.showBreak(this,"GOLDEN POINT",t,"Scores level \u2014 first to score wins!"):this.message("GOLDEN POINT","First to score wins",2.5,"warn")}else this.endMatch()}phase_halftime(){!this.humanTeam&&this.phaseT>3&&!this.pd.auto&&(this.pd.auto=!0,this.hud.closeModal(),(this.pd.next||(()=>this.startSecondHalf()))())}startSecondHalf(){this.half=2,this.clock=0;for(let t of this.teams)t.dir*=-1;for(let t of this.players)t.stamina=Math.min(1,t.stamina+.5);this.setupKickoff(this.firstKickTeam.opp)}endMatch(){this.over||(this.over=!0,this.audio.hooter(),this.setPhase("fulltime",{}),this.emit("fulltime",{}),(this.humanTeam||this.showResults)&&this.hud.showBreak(this,"FULL TIME",null))}updateClock(t){if(["play","ptb","scrum","whistle"].includes(this.phase)){this.clock+=t*this.clockRate;let i=this.half<=2?2400:600;!this.siren&&this.clock>=i&&(this.clock=i,this.siren=!0,this.audio.hooter(),this.message("SIREN","Play on until the ball is dead",2,"warn"),(this.phase==="ptb"||this.phase==="scrum")&&this.endPeriod()),this.siren&&(this.clock=i)}let e=this.attackTeam();e&&(this.phase==="play"||this.phase==="ptb")&&(e.stats.possT+=t)}updateRef(t){let e=this.ref,i=this.ball,s=i.p.x,a=i.p.z+(i.p.z>0?-8:8);if(this.phase==="ptb"){let l=this.pd.team.opp;s=this.pd.onsideAx*l.dir,a=this.pd.mark.z+(this.pd.mark.z>0?-5:5)}else if(this.phase==="goalKick"||this.phase==="kickoff")s=this.pd.team.dir*(this.phase==="goalKick"?ye+1:0),a=this.phase==="goalKick"?4.5:14;else if(this.phase==="tryCelebration")s=this.pd.x,a=this.pd.z+3;else{let l=this.attackTeam();s-=(l?l.dir:1)*3}s=nt(s,-ye-6,ye+6),a=nt(a,-Se+1,Se-1);let r=s-e.p.x,o=a-e.p.z,c=Math.hypot(r,o);c>.6?(e.wish.x=r/c*Math.min(1,c/3),e.wish.z=o/c*Math.min(1,c/3),e.wantSprint=c>10):e.wish.x=e.wish.z=0,e.lookAt(i.p.x,i.p.z),e.update(t)}update(t){if(this.over&&this.phase==="fulltime"){for(let i of this.players)i.wish.x=i.wish.z=0,i.update(t);return}this.time+=t,this.phaseT+=t,this.updateWind(t),lf(this,t),tf(this,t);let e=this["phase_"+this.phase];e&&e.call(this,t);for(let i of this.players)i.state==="kick"&&(i.anim.kt=i.stateT),i.hasBall=this.ball.state==="held"&&this.ball.carrier===i,i.update(t);Yu(this,t),Zu(this,t),this.updateRef(t),this.updateBall(t),this.phase==="play"&&this.rulesLive(t),this.updateClock(t)}syncVisuals(t,e){for(let l of this.players)l.model.update(l,t,e);this.ref.model.update(this.ref,t,e);let i=this.ball,s=null,a=0;i.state==="held"&&i.carrier&&(i.carrier.model.root.updateMatrixWorld(!0),s=new D,i.carrier.model.ballAnchor.getWorldPosition(s),a=i.carrier.heading),i.syncMesh(s,a);let r=this.controlled,o=["goalKick","kickoff","touchKick"].includes(this.phase)&&this.pd.kicker===r;if(this.ring.visible=this.arrow.visible=!!r&&!o&&this.phase!=="fulltime"&&this.phase!=="halftime",r){this.ring.position.set(r.p.x,.03,r.p.z);let l=1+Math.sin(e*6)*.06;this.ring.scale.setScalar(l),this.arrow.position.set(r.p.x,2.45+Math.sin(e*4)*.08,r.p.z),this.ring.material.color.set(r.offside||r.kickOffside?16728128:16769354)}let c=this.kickTarget;this.landMarker.visible=!!c&&(i.state==="air"||i.state==="ground")&&this.phase==="play",c&&(this.landMarker.position.set(c.x,.04,c.z),this.landMarker.scale.setScalar(1+Math.sin(e*8)*.08)),ku(this)}};var qi=new URLSearchParams(location.search);qi.get("seed")&&cu(+qi.get("seed"));var Dr=document.getElementById("app"),Dn=new Ya({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:qi.has("test")});Dn.setPixelRatio(Math.min(window.devicePixelRatio,1.75));Dn.setSize(window.innerWidth,window.innerHeight);Dn.outputColorSpace=Te;Dr.appendChild(Dn.domElement);var ea=new Ve(52,window.innerWidth/window.innerHeight,.3,1600),yi=new gr,fn=new xr,In=new Ar(ea),vi=new br(Dr),js=null,xc=null,Qt=null,_i="menu",Ln=!1,ta=0,Ur=null,mc="",gc=+(qi.get("speed")||1);function zr(n,t=!1){vi.closeModal(),js=new Ja;let e=n.settings;xc=Vu(js,Dn,{time:e.time,homeName:n.homeDef.name,awayName:n.awayDef.name,homeColor:n.homeDef.primary,homeColor2:n.homeDef.secondary,awayColor:n.awayDef.primary,awayColor2:n.awayDef.secondary}),Qt=new Ir({scene:js,audio:fn,hud:vi,input:yi,camRig:In,settings:{...e,autoSwitch:!0},homeDef:n.homeDef,awayDef:n.awayDef,humanIdx:t?-1:n.humanIdx}),In.mode=t?"behind":e.camera,vi.attach(Qt),Qt.showResults=!t,Qt.start(),ta=0,mc="",window.__game.match=Qt,window.__game.scene=js}function yc(){let n=Math.floor(Vt()*Le.length),t=Math.floor(Vt()*Le.length);return t===n&&(t=(n+3)%Le.length),{homeDef:Le[n],awayDef:Le[t],humanIdx:-1,settings:{halfLen:5,difficulty:"normal",wind:"breezy",time:"day",camera:"behind",goldenPoint:!0}}}function _c(){_i="menu",Ln=!1,na.hide(),zr(yc(),!0),vi.setVisible(!1),ia.show()}function Nr(n){fn.init(),Ur=n,_i="playing",Ln=!1,ia.hide(),na.hide(),vi.setVisible(!0),zr(n,(n.humanIdx<0,!1))}var ia=new Tr(Dr,n=>Nr(n)),na=new Er(Dr,{resume:()=>Lr(!1),restart:()=>{Lr(!1),Nr(Ur)},quit:()=>_c(),camera:()=>In.toggle(),cameraName:()=>({behind:"Behind play",broadcast:"Broadcast",high:"High"})[In.mode],sound:()=>fn.setMuted(!fn.muted),soundName:()=>fn.muted?"Off":"On",teams:()=>Qt?Qt.teams.map(n=>n.def):[]});vi.onMenu=()=>_c();vi.onRematch=()=>Nr(Ur);function Lr(n){Ln=n,n?na.show():na.hide()}function cf(){_i==="playing"&&yi.pressed("pause")&&!Qt.over&&Lr(!Ln),_i==="playing"&&yi.pressed("help")&&!Ln&&(Lr(!0),na.act("controls")),yi.pressed("camera")&&_i==="playing"&&In.toggle()}window.addEventListener("pointerdown",()=>fn.init(),{once:!1});window.addEventListener("keydown",()=>{_i==="playing"&&fn.init()});window.addEventListener("resize",()=>{Dn.setSize(window.innerWidth,window.innerHeight),ea.aspect=window.innerWidth/window.innerHeight,ea.updateProjectionMatrix()});function jx(){let[n,t]=Qt.teams,e=`${n.score}-${t.score}-${Math.floor(Qt.clock/60)}-${Qt.half}`;e!==mc&&(mc=e,xc.drawScreen({title:"FOOTY 13 \xB7 LIVE",score:`${n.short} ${n.score} \u2013 ${t.score} ${t.short}`,sub:`${Qt.clockText()}  ${Qt.half===1?"1st half":Qt.half===2?"2nd half":"Golden point"}`,foot:"Grab a pie at Big Pie Co."}))}var hf=performance.now(),pc=0;function uf(n){requestAnimationFrame(uf);let t=Math.min(.1,(n-hf)/1e3);if(hf=n,pc+=t,Qt&&_i==="menu"&&Qt.over&&Qt.phaseT>6&&!qi.has("autoplay")&&zr(yc(),!0),Qt&&!Ln){ta+=t*gc;let e=0,i=10*Math.max(1,gc);for(;ta>=Rn&&e<i&&(yi.poll(Rn),cf(),!Ln);)_i==="menu"&&ia.update(yi),vi.pollModal(yi),vi.pollBreak(yi),Qt.update(Rn),ta-=Rn,e++;e>=i&&(ta=0)}else yi.poll(t),cf(),_i==="menu"&&ia.update(yi);Qt&&(Qt.syncVisuals(t,pc),In.update(t,Qt),xc.update(t,pc,Qt.wind,Qt.excite),fn.update(t,_i==="playing"?Qt.excite:0),vi.update(Qt,ea,t),jx(),Dn.render(js,ea))}window.__game={match:null,input:yi,camRig:In,sim(n){let t=Math.round(n/Rn);for(let e=0;e<t;e++)Qt.update(Rn);return this.summary()},summary(){let[n,t]=Qt.teams;return{phase:Qt.phase,half:Qt.half,clock:Qt.clockText(),score:`${n.short} ${n.score}-${t.score} ${t.short}`,tackle:Qt.tackleCount,over:Qt.over}},start(n){Nr(n)},setSpeed(n){gc=n}};if(qi.has("autoplay")){let n=yc();n.settings.halfLen=+(qi.get("half")||5),qi.get("time")&&(n.settings.time=qi.get("time")),_i="playing",Ur=n,ia.hide(),zr(n,!0),vi.setVisible(!0)}else _c();requestAnimationFrame(uf);})();
