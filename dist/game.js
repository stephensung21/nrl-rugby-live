(()=>{var $l="170";var Lf=0,Vc=1,Df=2;var eu=1,zf=2,Vi=3,dn=0,Be=1,_i=2,un=0,rs=1,Gc=2,Wc=3,Xc=4,Uf=5,kn=100,Nf=101,Ff=102,Of=103,Bf=104,Hf=200,Vf=201,Gf=202,Wf=203,Do=204,zo=205,Xf=206,Kf=207,Yf=208,$f=209,qf=210,Zf=211,Jf=212,Qf=213,jf=214,Uo=0,No=1,Fo=2,hs=3,Oo=4,Bo=5,Ho=6,Vo=7,ql=0,td=1,ed=2,fn=0,id=1,nd=2,sd=3,ad=4,rd=5,od=6,ld=7,Kc="attached",cd="detached",iu=300,us=301,fs=302,Go=303,Wo=304,xr=306,ds=1e3,In=1001,Xo=1002,ti=1003,hd=1004;var ma=1005;var Ai=1006,jr=1007;var Wi=1008;var Yi=1009,nu=1010,su=1011,Ks=1012,Zl=1013,Ln=1014,bi=1015,js=1016,Jl=1017,Ql=1018,ps=1020,au=35902,ru=1021,ou=1022,hi=1023,lu=1024,cu=1025,os=1026,ms=1027,jl=1028,tc=1029,hu=1030,ec=1031;var ic=1033,Ha=33776,Va=33777,Ga=33778,Wa=33779,Ko=35840,Yo=35841,$o=35842,qo=35843,Zo=36196,Jo=37492,Qo=37496,jo=37808,tl=37809,el=37810,il=37811,nl=37812,sl=37813,al=37814,rl=37815,ol=37816,ll=37817,cl=37818,hl=37819,ul=37820,fl=37821,Xa=36492,dl=36494,pl=36495,uu=36283,ml=36284,gl=36285,yl=36286;var Ka=2300,xl=2301,to=2302,Yc=2400,$c=2401,qc=2402;var ud=3200,fd=3201;var fu=0,dd=1,hn="",Re="srgb",Ss="srgb-linear",vr="linear",oe="srgb";var Wn=7680;var Zc=519,pd=512,md=513,gd=514,du=515,yd=516,xd=517,vd=518,_d=519,Jc=35044;var Qc="300 es",Xi=2e3,Ya=2001,pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var eo=Math.PI/180,vl=180/Math.PI;function ws(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]).toLowerCase()}function $e(n,t,e){return Math.max(t,Math.min(e,n))}function bd(n,t){return(n%t+t)%t}function io(n,t,e){return(1-e)*n+e*t}function zs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ye(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ee=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ot=class n{constructor(t,e,i,s,a,r,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,o,c,l)}set(t,e,i,s,a,r,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=a,h[5]=c,h[6]=i,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,a=this.elements,r=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],x=s[1],_=s[4],b=s[7],R=s[2],E=s[5],A=s[8];return a[0]=r*y+o*x+c*R,a[3]=r*m+o*_+c*E,a[6]=r*p+o*b+c*A,a[1]=l*y+h*x+u*R,a[4]=l*m+h*_+u*E,a[7]=l*p+h*b+u*A,a[2]=d*y+f*x+g*R,a[5]=d*m+f*_+g*E,a[8]=d*p+f*b+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*o*l-i*a*h+i*o*c+s*a*l-s*r*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*r-o*l,d=o*c-h*a,f=l*a-r*c,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*l-h*i)*y,t[2]=(o*i-s*r)*y,t[3]=d*y,t[4]=(h*e-s*c)*y,t[5]=(s*a-o*e)*y,t[6]=f*y,t[7]=(i*c-l*e)*y,t[8]=(r*e-i*a)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,r,o){let c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*r+l*o)+r+t,-s*l,s*c,-s*(-l*r+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(no.makeScale(t,e)),this}rotate(t){return this.premultiply(no.makeRotation(-t)),this}translate(t,e){return this.premultiply(no.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},no=new Ot;function pu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function $a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Md(){let n=$a("canvas");return n.style.display="block",n}var jc={};function Gs(n){n in jc||(jc[n]=!0,console.warn(n))}function Sd(n,t,e){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}function wd(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Td(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var te={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(n.r=Ki(n.r),n.g=Ki(n.g),n.b=Ki(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(n.r=ls(n.r),n.g=ls(n.g),n.b=ls(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===hn?vr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var th=[.64,.33,.3,.6,.15,.06],eh=[.2126,.7152,.0722],ih=[.3127,.329],nh=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Ss]:{primaries:th,whitePoint:ih,transfer:vr,toXYZ:nh,fromXYZ:sh,luminanceCoefficients:eh,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:th,whitePoint:ih,transfer:oe,toXYZ:nh,fromXYZ:sh,luminanceCoefficients:eh,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}});var Xn,_l=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xn===void 0&&(Xn=$a("canvas")),Xn.width=t.width,Xn.height=t.height;let i=Xn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Xn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=$a("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Ki(a[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ki(e[i]/255)*255):e[i]=Ki(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ed=0,qa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=ws(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(so(s[r].image)):a.push(so(s[r]))}else a=so(s);i.url=a}return e||(t.images[this.uuid]=i),i}};function so(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_l.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ad=0,qe=class n extends pn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=In,s=In,a=Ai,r=Wi,o=hi,c=Yi,l=n.DEFAULT_ANISOTROPY,h=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=ws(),this.name="",this.source=new qa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==iu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ds:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ds:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=iu;qe.DEFAULT_ANISOTROPY=1;var ye=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,b=(f+1)/2,R=(p+1)/2,E=(h+d)/4,A=(u+y)/4,P=(g+m)/4;return _>b&&_>R?_<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(_),s=E/i,a=A/i):b>R?b<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(b),i=E/s,a=P/s):R<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(R),i=A/a,s=P/a),this.set(i,s,a,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-y)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bl=class extends pn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let a=new qe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new qa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$i=class extends bl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Za=class extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ti,this.minFilter=ti,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ml=class extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ti,this.minFilter=ti,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ei=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,r,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=a[r+0],f=a[r+1],g=a[r+2],y=a[r+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=y;return}if(u!==y||c!==d||l!==f||h!==g){let m=1-o,p=c*d+l*f+h*g+u*y,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),E=Math.atan2(R,p*x);m=Math.sin(m*E)/R,o=Math.sin(o*E)/R}let b=o*x;if(c=c*m+d*b,l=l*m+f*b,h=h*m+g*b,u=u*m+y*b,m===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,a,r){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=a[r],d=a[r+1],f=a[r+2],g=a[r+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(a/2),d=c(i/2),f=c(s/2),g=c(a/2);switch(r){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],a=e[8],r=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(a-l)*f,this._z=(r-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(a-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(r-s)/f,this._x=(a+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,a=t._z,r=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+r*o+s*l-a*c,this._y=s*h+r*c+a*o-i*l,this._z=a*h+r*l+i*c-s*o,this._w=r*h-i*o-s*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*a+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ah.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ah.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,c=t.w,l=2*(r*s-o*i),h=2*(o*e-a*s),u=2*(a*i-r*e);return this.x=e+c*l+r*u-o*h,this.y=i+c*h+o*l-a*u,this.z=s+c*u+a*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,a=t.z,r=e.x,o=e.y,c=e.z;return this.x=s*c-a*o,this.y=a*r-i*c,this.z=i*o-s*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ao.copy(this).projectOnVector(t),this.sub(ao)}reflect(t){return this.sub(ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos($e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ao=new z,ah=new ei,Ri=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,yi):yi.fromBufferAttribute(a,r),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(t.matrixWorld),this.union(ga)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Us),ya.subVectors(this.max,Us),Kn.subVectors(t.a,Us),Yn.subVectors(t.b,Us),$n.subVectors(t.c,Us),sn.subVectors(Yn,Kn),an.subVectors($n,Yn),Mn.subVectors(Kn,$n);let e=[0,-sn.z,sn.y,0,-an.z,an.y,0,-Mn.z,Mn.y,sn.z,0,-sn.x,an.z,0,-an.x,Mn.z,0,-Mn.x,-sn.y,sn.x,0,-an.y,an.x,0,-Mn.y,Mn.x,0];return!ro(e,Kn,Yn,$n,ya)||(e=[1,0,0,0,1,0,0,0,1],!ro(e,Kn,Yn,$n,ya))?!1:(xa.crossVectors(sn,an),e=[xa.x,xa.y,xa.z],ro(e,Kn,Yn,$n,ya))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ni=[new z,new z,new z,new z,new z,new z,new z,new z],yi=new z,ga=new Ri,Kn=new z,Yn=new z,$n=new z,sn=new z,an=new z,Mn=new z,Us=new z,ya=new z,xa=new z,Sn=new z;function ro(n,t,e,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){Sn.fromArray(n,a);let o=s.x*Math.abs(Sn.x)+s.y*Math.abs(Sn.y)+s.z*Math.abs(Sn.z),c=t.dot(Sn),l=e.dot(Sn),h=i.dot(Sn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Rd=new Ri,Ns=new z,oo=new z,ki=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Rd.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);let e=Ns.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ns,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(oo)),this.expandByPoint(Ns.copy(t.center).sub(oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Fi=new z,lo=new z,va=new z,rn=new z,co=new z,_a=new z,ho=new z,Ys=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){lo.copy(t).add(e).multiplyScalar(.5),va.copy(e).sub(t).normalize(),rn.copy(this.origin).sub(lo);let a=t.distanceTo(e)*.5,r=-this.direction.dot(va),o=rn.dot(this.direction),c=-rn.dot(va),l=rn.lengthSq(),h=Math.abs(1-r*r),u,d,f,g;if(h>0)if(u=r*c-o,d=r*o-c,g=a*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+r*d+2*o)+d*(r*u+d+2*c)+l}else d=a,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;else d=-a,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-r*a+o)),d=u>0?-a:Math.min(Math.max(-a,-c),a),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-a,-c),a),f=d*(d+2*c)+l):(u=Math.max(0,-(r*a+o)),d=u>0?a:Math.min(Math.max(-a,-c),a),f=-u*u+d*(d+2*c)+l);else d=r>0?-a:a,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(lo).addScaledVector(va,d),f}intersectSphere(t,e){Fi.subVectors(t.center,this.origin);let i=Fi.dot(this.direction),s=Fi.dot(Fi)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,c=i+r;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,r,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(a=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(a=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,i,s,a){co.subVectors(e,t),_a.subVectors(i,t),ho.crossVectors(co,_a);let r=this.direction.dot(ho),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;rn.subVectors(this.origin,t);let c=o*this.direction.dot(_a.crossVectors(rn,_a));if(c<0)return null;let l=o*this.direction.dot(co.cross(rn));if(l<0||c+l>r)return null;let h=-o*rn.dot(ho);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class n{constructor(t,e,i,s,a,r,o,c,l,h,u,d,f,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,r,o,c,l,h,u,d,f,g,y,m)}set(t,e,i,s,a,r,o,c,l,h,u,d,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=a,p[5]=r,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/qn.setFromMatrixColumn(t,0).length(),a=1/qn.setFromMatrixColumn(t,1).length(),r=1/qn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){let d=r*h,f=r*u,g=o*h,y=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-y*l,e[9]=-o*c,e[2]=y-d*l,e[6]=g+f*l,e[10]=r*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,y=l*u;e[0]=d+y*o,e[4]=g*o-f,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=f*o-g,e[6]=y+d*o,e[10]=r*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,y=l*u;e[0]=d-y*o,e[4]=-r*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=r*h,e[9]=y-d*o,e[2]=-r*l,e[6]=o,e[10]=r*c}else if(t.order==="ZYX"){let d=r*h,f=r*u,g=o*h,y=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+y,e[1]=c*u,e[5]=y*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=r*c}else if(t.order==="YZX"){let d=r*c,f=r*l,g=o*c,y=o*l;e[0]=c*h,e[4]=y-d*u,e[8]=g*u+f,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=r*c,f=r*l,g=o*c,y=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+y,e[5]=r*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kd,t,Cd)}lookAt(t,e,i){let s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),on.crossVectors(i,Qe),on.lengthSq()===0&&(Math.abs(i.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),on.crossVectors(i,Qe)),on.normalize(),ba.crossVectors(Qe,on),s[0]=on.x,s[4]=ba.x,s[8]=Qe.x,s[1]=on.y,s[5]=ba.y,s[9]=Qe.y,s[2]=on.z,s[6]=ba.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,a=this.elements,r=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],x=i[3],_=i[7],b=i[11],R=i[15],E=s[0],A=s[4],P=s[8],w=s[12],M=s[1],C=s[5],G=s[9],O=s[13],K=s[2],J=s[6],W=s[10],it=s[14],Y=s[3],ot=s[7],ft=s[11],xt=s[15];return a[0]=r*E+o*M+c*K+l*Y,a[4]=r*A+o*C+c*J+l*ot,a[8]=r*P+o*G+c*W+l*ft,a[12]=r*w+o*O+c*it+l*xt,a[1]=h*E+u*M+d*K+f*Y,a[5]=h*A+u*C+d*J+f*ot,a[9]=h*P+u*G+d*W+f*ft,a[13]=h*w+u*O+d*it+f*xt,a[2]=g*E+y*M+m*K+p*Y,a[6]=g*A+y*C+m*J+p*ot,a[10]=g*P+y*G+m*W+p*ft,a[14]=g*w+y*O+m*it+p*xt,a[3]=x*E+_*M+b*K+R*Y,a[7]=x*A+_*C+b*J+R*ot,a[11]=x*P+_*G+b*W+R*ft,a[15]=x*w+_*O+b*it+R*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+a*c*u-s*l*u-a*o*d+i*l*d+s*o*f-i*c*f)+y*(+e*c*f-e*l*d+a*r*d-s*r*f+s*l*h-a*c*h)+m*(+e*l*u-e*o*f-a*r*u+i*r*f+a*o*h-i*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*r*u-i*r*d+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],x=u*m*l-y*d*l+y*c*f-o*m*f-u*c*p+o*d*p,_=g*d*l-h*m*l-g*c*f+r*m*f+h*c*p-r*d*p,b=h*y*l-g*u*l+g*o*f-r*y*f-h*o*p+r*u*p,R=g*u*c-h*y*c-g*o*d+r*y*d+h*o*m-r*u*m,E=e*x+i*_+s*b+a*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return t[0]=x*A,t[1]=(y*d*a-u*m*a-y*s*f+i*m*f+u*s*p-i*d*p)*A,t[2]=(o*m*a-y*c*a+y*s*l-i*m*l-o*s*p+i*c*p)*A,t[3]=(u*c*a-o*d*a-u*s*l+i*d*l+o*s*f-i*c*f)*A,t[4]=_*A,t[5]=(h*m*a-g*d*a+g*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(g*c*a-r*m*a-g*s*l+e*m*l+r*s*p-e*c*p)*A,t[7]=(r*d*a-h*c*a+h*s*l-e*d*l-r*s*f+e*c*f)*A,t[8]=b*A,t[9]=(g*u*a-h*y*a-g*i*f+e*y*f+h*i*p-e*u*p)*A,t[10]=(r*y*a-g*o*a+g*i*l-e*y*l-r*i*p+e*o*p)*A,t[11]=(h*o*a-r*u*a-h*i*l+e*u*l+r*i*f-e*o*f)*A,t[12]=R*A,t[13]=(h*y*s-g*u*s+g*i*d-e*y*d-h*i*m+e*u*m)*A,t[14]=(g*o*s-r*y*s-g*i*c+e*y*c+r*i*m-e*o*m)*A,t[15]=(r*u*s-h*o*s+h*i*c-e*u*c-r*i*d+e*o*d)*A,this}scale(t){let e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),a=1-i,r=t.x,o=t.y,c=t.z,l=a*r,h=a*o;return this.set(l*r+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*r,0,l*c-s*o,h*c+s*r,a*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,a=e._x,r=e._y,o=e._z,c=e._w,l=a+a,h=r+r,u=o+o,d=a*l,f=a*h,g=a*u,y=r*h,m=r*u,p=o*u,x=c*l,_=c*h,b=c*u,R=i.x,E=i.y,A=i.z;return s[0]=(1-(y+p))*R,s[1]=(f+b)*R,s[2]=(g-_)*R,s[3]=0,s[4]=(f-b)*E,s[5]=(1-(d+p))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+_)*A,s[9]=(m-x)*A,s[10]=(1-(d+y))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,a=qn.set(s[0],s[1],s[2]).length(),r=qn.set(s[4],s[5],s[6]).length(),o=qn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],xi.copy(this);let l=1/a,h=1/r,u=1/o;return xi.elements[0]*=l,xi.elements[1]*=l,xi.elements[2]*=l,xi.elements[4]*=h,xi.elements[5]*=h,xi.elements[6]*=h,xi.elements[8]*=u,xi.elements[9]*=u,xi.elements[10]*=u,e.setFromRotationMatrix(xi),i.x=a,i.y=r,i.z=o,this}makePerspective(t,e,i,s,a,r,o=Xi){let c=this.elements,l=2*a/(e-t),h=2*a/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),f,g;if(o===Xi)f=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===Ya)f=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,a,r,o=Xi){let c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(r-a),d=(e+t)*l,f=(i+s)*h,g,y;if(o===Xi)g=(r+a)*u,y=-2*u;else if(o===Ya)g=a*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},qn=new z,xi=new Xt,kd=new z(0,0,0),Cd=new z(1,1,1),on=new z,ba=new z,Qe=new z,rh=new Xt,oh=new ei,ui=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oh.setFromEuler(this),this.setFromQuaternion(oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var Ja=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Pd=0,lh=new z,Zn=new ei,Oi=new Xt,Ma=new z,Fs=new z,Id=new z,Ld=new ei,ch=new z(1,0,0),hh=new z(0,1,0),uh=new z(0,0,1),fh={type:"added"},Dd={type:"removed"},Jn={type:"childadded",child:null},uo={type:"childremoved",child:null},Me=class n extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new z,e=new ui,i=new ei,s=new z(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Ot}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zn.setFromAxisAngle(t,e),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(t,e){return Zn.setFromAxisAngle(t,e),this.quaternion.premultiply(Zn),this}rotateX(t){return this.rotateOnAxis(ch,t)}rotateY(t){return this.rotateOnAxis(hh,t)}rotateZ(t){return this.rotateOnAxis(uh,t)}translateOnAxis(t,e){return lh.copy(t).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ch,t)}translateY(t){return this.translateOnAxis(hh,t)}translateZ(t){return this.translateOnAxis(uh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ma.copy(t):Ma.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Fs,Ma,this.up):Oi.lookAt(Ma,Fs,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),Zn.setFromRotationMatrix(Oi),this.quaternion.premultiply(Zn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fh),Jn.child=t,this.dispatchEvent(Jn),Jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dd),uo.child=t,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fh),Jn.child=t,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,Id),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Ld,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];a(t.shapes,u)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(t.materials,this.material[c]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(a(t.animations,c))}}if(e){let o=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Me.DEFAULT_UP=new z(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vi=new z,Bi=new z,fo=new z,Hi=new z,Qn=new z,jn=new z,dh=new z,po=new z,mo=new z,go=new z,yo=new ye,xo=new ye,vo=new ye,Cn=class n{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),vi.subVectors(t,e),s.cross(vi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){vi.subVectors(s,e),Bi.subVectors(i,e),fo.subVectors(t,e);let r=vi.dot(vi),o=vi.dot(Bi),c=vi.dot(fo),l=Bi.dot(Bi),h=Bi.dot(fo),u=r*l-o*o;if(u===0)return a.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(r*h-o*c)*d;return a.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(t,e,i,s,a,r,o,c){return this.getBarycoord(t,e,i,s,Hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Hi.x),c.addScaledVector(r,Hi.y),c.addScaledVector(o,Hi.z),c)}static getInterpolatedAttribute(t,e,i,s,a,r){return yo.setScalar(0),xo.setScalar(0),vo.setScalar(0),yo.fromBufferAttribute(t,e),xo.fromBufferAttribute(t,i),vo.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(yo,a.x),r.addScaledVector(xo,a.y),r.addScaledVector(vo,a.z),r}static isFrontFacing(t,e,i,s){return vi.subVectors(i,e),Bi.subVectors(t,e),vi.cross(Bi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),vi.cross(Bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,a=this.c,r,o;Qn.subVectors(s,i),jn.subVectors(a,i),po.subVectors(t,i);let c=Qn.dot(po),l=jn.dot(po);if(c<=0&&l<=0)return e.copy(i);mo.subVectors(t,s);let h=Qn.dot(mo),u=jn.dot(mo);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(i).addScaledVector(Qn,r);go.subVectors(t,a);let f=Qn.dot(go),g=jn.dot(go);if(g>=0&&f<=g)return e.copy(a);let y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(jn,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return dh.subVectors(a,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(dh,o);let p=1/(m+y+d);return r=y*p,o=d*p,e.copy(i).addScaledVector(Qn,r).addScaledVector(jn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ln={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function _o(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Vt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=bd(t,1),e=$e(e,0,1),i=$e(i,0,1),e===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=_o(r,a,t+1/3),this.g=_o(r,a,t),this.b=_o(r,a,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=Re){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let i=mu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return te.fromWorkingColorSpace(Oe.copy(this),t),Math.round($e(Oe.r*255,0,255))*65536+Math.round($e(Oe.g*255,0,255))*256+Math.round($e(Oe.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Oe.copy(this),e);let i=Oe.r,s=Oe.g,a=Oe.b,r=Math.max(i,s,a),o=Math.min(i,s,a),c,l,h=(o+r)/2;if(o===r)c=0,l=0;else{let u=r-o;switch(l=h<=.5?u/(r+o):u/(2-r-o),r){case i:c=(s-a)/u+(s<a?6:0);break;case s:c=(a-i)/u+2;break;case a:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Re){te.fromWorkingColorSpace(Oe.copy(this),t);let e=Oe.r,i=Oe.g,s=Oe.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ln),this.setHSL(ln.h+t,ln.s+e,ln.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ln),t.getHSL(Sa);let i=io(ln.h,Sa.h,e),s=io(ln.s,Sa.s,e),a=io(ln.l,Sa.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oe=new Vt;Vt.NAMES=mu;var zd=0,mn=class extends pn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=ws(),this.name="",this.blending=rs,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=zo,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==dn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Do&&(i.blendSrc=this.blendSrc),this.blendDst!==zo&&(i.blendDst=this.blendDst),this.blendEquation!==kn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let c=a[o];delete c.metadata,r.push(c)}return r}if(e){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},we=class extends mn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ae=new z,wa=new ee,Xe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Jc,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)wa.fromBufferAttribute(this,e),wa.applyMatrix3(t),this.setXY(e,wa.x,wa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=zs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ye(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),s=Ye(s,this.array),a=Ye(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jc&&(t.usage=this.usage),t}};var gs=class extends Xe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Qa=class extends Xe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var xe=class extends Xe{constructor(t,e,i){super(new Float32Array(t),e,i)}},Ud=0,ci=new Xt,bo=new Me,ts=new z,je=new Ri,Os=new Ri,Ie=new z,He=class n extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pu(t)?Qa:gs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Ot().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,e,i){return ci.makeTranslation(t,e,i),this.applyMatrix4(ci),this}scale(t,e,i){return ci.makeScale(t,e,i),this.applyMatrix4(ci),this}lookAt(t){return bo.lookAt(t),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new xe(i,3))}else{for(let i=0,s=e.count;i<s;i++){let a=t[i];e.setXYZ(i,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let a=e[i];je.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let i=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){let o=e[a];Os.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(je.min,Os.min),je.expandByPoint(Ie),Ie.addVectors(je.max,Os.max),je.expandByPoint(Ie)):(je.expandByPoint(Os.min),je.expandByPoint(Os.max))}je.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)Ie.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(Ie));if(e)for(let a=0,r=e.length;a<r;a++){let o=e[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ie.fromBufferAttribute(o,l),c&&(ts.fromBufferAttribute(t,l),Ie.add(ts)),s=Math.max(s,i.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new z,c[P]=new z;let l=new z,h=new z,u=new z,d=new ee,f=new ee,g=new ee,y=new z,m=new z;function p(P,w,M){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,M),d.fromBufferAttribute(a,P),f.fromBufferAttribute(a,w),g.fromBufferAttribute(a,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[P].add(y),o[w].add(y),o[M].add(y),c[P].add(m),c[w].add(m),c[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,w=x.length;P<w;++P){let M=x[P],C=M.start,G=M.count;for(let O=C,K=C+G;O<K;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let _=new z,b=new z,R=new z,E=new z;function A(P){R.fromBufferAttribute(s,P),E.copy(R);let w=o[P];_.copy(w),_.sub(R.multiplyScalar(R.dot(w))).normalize(),b.crossVectors(E,w);let C=b.dot(c[P])<0?-1:1;r.setXYZW(P,_.x,_.y,_.z,C)}for(let P=0,w=x.length;P<w;++P){let M=x[P],C=M.start,G=M.count;for(let O=C,K=C+G;O<K;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new z,a=new z,r=new z,o=new z,c=new z,l=new z,h=new z,u=new z;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,y),r.fromBufferAttribute(e,m),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),a.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?f=c[y]*o.data.stride+o.offset:f=c[y]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Xe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,i);e.setAttribute(o,l)}let a=this.morphAttributes;for(let o in a){let c=[],l=a[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,c=r.length;o<c;o++){let l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},a=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let a=t.morphAttributes;for(let l in a){let h=[],u=a[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,h=r.length;l<h;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ph=new Xt,wn=new Ys,Ta=new ki,mh=new z,Ea=new z,Aa=new z,Ra=new z,Mo=new z,ka=new z,gh=new z,Ca=new z,Et=class extends Me{constructor(t=new He,e=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){ka.set(0,0,0);for(let c=0,l=a.length;c<l;c++){let h=o[c],u=a[c];h!==0&&(Mo.fromBufferAttribute(u,t),r?ka.addScaledVector(Mo,h):ka.addScaledVector(Mo.sub(e),h))}e.add(ka)}return e}raycast(t,e){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(a),wn.copy(t.ray).recast(t.near),!(Ta.containsPoint(wn.origin)===!1&&(wn.intersectSphere(Ta,mh)===null||wn.origin.distanceToSquared(mh)>(t.far-t.near)**2))&&(ph.copy(a).invert(),wn.copy(t.ray).applyMatrix4(ph),!(i.boundingBox!==null&&wn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,wn)))}_computeIntersections(t,e,i){let s,a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=r[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,R=_;b<R;b+=3){let E=o.getX(b),A=o.getX(b+1),P=o.getX(b+2);s=Pa(this,p,t,i,l,h,u,E,A,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let x=o.getX(m),_=o.getX(m+1),b=o.getX(m+2);s=Pa(this,r,t,i,l,h,u,x,_,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=r[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,R=_;b<R;b+=3){let E=b,A=b+1,P=b+2;s=Pa(this,p,t,i,l,h,u,E,A,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let x=m,_=m+1,b=m+2;s=Pa(this,r,t,i,l,h,u,x,_,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Nd(n,t,e,i,s,a,r,o){let c;if(t.side===Be?c=i.intersectTriangle(r,a,s,!0,o):c=i.intersectTriangle(s,a,r,t.side===dn,o),c===null)return null;Ca.copy(o),Ca.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Ca);return l<e.near||l>e.far?null:{distance:l,point:Ca.clone(),object:n}}function Pa(n,t,e,i,s,a,r,o,c,l){n.getVertexPosition(o,Ea),n.getVertexPosition(c,Aa),n.getVertexPosition(l,Ra);let h=Nd(n,t,e,i,Ea,Aa,Ra,gh);if(h){let u=new z;Cn.getBarycoord(gh,Ea,Aa,Ra,u),s&&(h.uv=Cn.getInterpolatedAttribute(s,o,c,l,u,new ee)),a&&(h.uv1=Cn.getInterpolatedAttribute(a,o,c,l,u,new ee)),r&&(h.normal=Cn.getInterpolatedAttribute(r,o,c,l,u,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new z,materialIndex:0};Cn.getNormal(Ea,Aa,Ra,d.normal),h.face=d,h.barycoord=u}return h}var Te=class n extends He{constructor(t=1,e=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,r,a,0),g("z","y","x",1,-1,i,e,-t,r,a,1),g("x","z","y",1,1,t,i,e,s,r,2),g("x","z","y",1,-1,t,i,-e,s,r,3),g("x","y","z",1,-1,t,e,i,s,a,4),g("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2));function g(y,m,p,x,_,b,R,E,A,P,w){let M=b/A,C=R/P,G=b/2,O=R/2,K=E/2,J=A+1,W=P+1,it=0,Y=0,ot=new z;for(let ft=0;ft<W;ft++){let xt=ft*C-O;for(let zt=0;zt<J;zt++){let Mt=zt*M-G;ot[y]=Mt*x,ot[m]=xt*_,ot[p]=K,l.push(ot.x,ot.y,ot.z),ot[y]=0,ot[m]=0,ot[p]=E>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(zt/A),u.push(1-ft/P),it+=1}}for(let ft=0;ft<P;ft++)for(let xt=0;xt<A;xt++){let zt=d+xt+J*ft,Mt=d+xt+J*(ft+1),X=d+(xt+1)+J*(ft+1),tt=d+(xt+1)+J*ft;c.push(zt,Mt,tt),c.push(Mt,X,tt),Y+=6}o.addGroup(f,Y,w),f+=Y,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ys(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ge(n){let t={};for(let e=0;e<n.length;e++){let i=ys(n[e]);for(let s in i)t[s]=i[s]}return t}function Fd(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function gu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Od={clone:ys,merge:Ge},Bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fi=class extends mn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bd,this.fragmentShader=Hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=Fd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ja=class extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Xi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cn=new z,yh=new ee,xh=new ee,We=class extends ja{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=vl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vl*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cn.x,cn.y).multiplyScalar(-t/cn.z),cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cn.x,cn.y).multiplyScalar(-t/cn.z)}getViewSize(t,e){return this.getViewBounds(t,yh,xh),e.subVectors(xh,yh)}setViewOffset(t,e,i,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(eo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/c,e-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},es=-90,is=1,Sl=class extends Me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(es,is,t,e);s.layers=this.layers,this.add(s);let a=new We(es,is,t,e);a.layers=this.layers,this.add(a);let r=new We(es,is,t,e);r.layers=this.layers,this.add(r);let o=new We(es,is,t,e);o.layers=this.layers,this.add(o);let c=new We(es,is,t,e);c.layers=this.layers,this.add(c);let l=new We(es,is,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,a,r,o,c]=e;for(let l of e)this.remove(l);if(t===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,a),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},tr=class extends qe{constructor(t,e,i,s,a,r,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:us,super(t,e,i,s,a,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},wl=class extends $i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new tr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ai}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Te(5,5,5),a=new fi({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Be,blending:un});a.uniforms.tEquirect.value=e;let r=new Et(s,a),o=e.minFilter;return e.minFilter===Wi&&(e.minFilter=Ai),new Sl(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(a)}},So=new z,Vd=new z,Gd=new Ot,Gi=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=So.subVectors(i,e).cross(Vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(So),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Gd.getNormalMatrix(t),s=this.coplanarPoint(So).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Tn=new ki,Ia=new z,$s=class{constructor(t=new Gi,e=new Gi,i=new Gi,s=new Gi,a=new Gi,r=new Gi){this.planes=[t,e,i,s,a,r]}set(t,e,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Xi){let i=this.planes,s=t.elements,a=s[0],r=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],y=s[10],m=s[11],p=s[12],x=s[13],_=s[14],b=s[15];if(i[0].setComponents(c-a,d-l,m-f,b-p).normalize(),i[1].setComponents(c+a,d+l,m+f,b+p).normalize(),i[2].setComponents(c+r,d+h,m+g,b+x).normalize(),i[3].setComponents(c-r,d-h,m-g,b-x).normalize(),i[4].setComponents(c-o,d-u,m-y,b-_).normalize(),e===Xi)i[5].setComponents(c+o,d+u,m+y,b+_).normalize();else if(e===Ya)i[5].setComponents(o,u,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(t){return Tn.center.set(0,0,0),Tn.radius=.7071067811865476,Tn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ia.x=s.normal.x>0?t.max.x:t.min.x,Ia.y=s.normal.y>0?t.max.y:t.min.y,Ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yu(){let n=null,t=!1,e=null,i=null;function s(a,r){e(a,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function Wd(n){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];n.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:a,update:r}}var ii=class n extends He{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let a=t/2,r=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let x=p*d-r;for(let _=0;_<l;_++){let b=_*u-a;g.push(b,-x,0),y.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let _=x+l*p,b=x+l*(p+1),R=x+1+l*(p+1),E=x+1+l*p;f.push(_,b,E),f.push(b,R,E)}this.setIndex(f),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(y,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kd=`#ifdef USE_ALPHAHASH
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
#endif`,Yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jd=`#ifdef USE_AOMAP
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
#endif`,Qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jd=`#ifdef USE_BATCHING
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
#endif`,tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sp=`#ifdef USE_IRIDESCENCE
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
#endif`,ap=`#ifdef USE_BUMPMAP
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pp=`#define PI 3.141592653589793
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
} // validated`,mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gp=`vec3 transformedNormal = objectNormal;
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
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ip=`#ifdef USE_GRADIENTMAP
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
}`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Up=`uniform bool receiveShadow;
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
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vp=`PhysicalMaterial material;
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
#endif`,Gp=`struct PhysicalMaterial {
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
}`,Wp=`
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
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$p=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tm=`#if defined( USE_POINTS_UV )
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
#endif`,em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
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
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
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
#endif`,pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,km=`float getShadowMask() {
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
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,Dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xm=`uniform sampler2D t2D;
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
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
}`,Jm=`#if DEPTH_PACKING == 3200
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
}`,Qm=`#define DISTANCE
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
}`,jm=`#define DISTANCE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,n0=`uniform vec3 diffuse;
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
}`,s0=`#include <common>
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
}`,a0=`uniform vec3 diffuse;
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
}`,r0=`#define LAMBERT
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
}`,o0=`#define LAMBERT
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
}`,l0=`#define MATCAP
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
}`,c0=`#define MATCAP
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
}`,h0=`#define NORMAL
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
}`,u0=`#define NORMAL
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
}`,f0=`#define PHONG
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
}`,d0=`#define PHONG
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
}`,p0=`#define STANDARD
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
}`,m0=`#define STANDARD
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
}`,g0=`#define TOON
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
}`,y0=`#define TOON
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
}`,x0=`uniform float size;
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
}`,v0=`uniform vec3 diffuse;
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
}`,_0=`#include <common>
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
}`,b0=`uniform vec3 color;
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
}`,M0=`uniform float rotation;
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
}`,S0=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Xd,alphahash_pars_fragment:Kd,alphamap_fragment:Yd,alphamap_pars_fragment:$d,alphatest_fragment:qd,alphatest_pars_fragment:Zd,aomap_fragment:Jd,aomap_pars_fragment:Qd,batching_pars_vertex:jd,batching_vertex:tp,begin_vertex:ep,beginnormal_vertex:ip,bsdfs:np,iridescence_fragment:sp,bumpmap_pars_fragment:ap,clipping_planes_fragment:rp,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:lp,clipping_planes_vertex:cp,color_fragment:hp,color_pars_fragment:up,color_pars_vertex:fp,color_vertex:dp,common:pp,cube_uv_reflection_fragment:mp,defaultnormal_vertex:gp,displacementmap_pars_vertex:yp,displacementmap_vertex:xp,emissivemap_fragment:vp,emissivemap_pars_fragment:_p,colorspace_fragment:bp,colorspace_pars_fragment:Mp,envmap_fragment:Sp,envmap_common_pars_fragment:wp,envmap_pars_fragment:Tp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Np,envmap_vertex:Ap,fog_vertex:Rp,fog_pars_vertex:kp,fog_fragment:Cp,fog_pars_fragment:Pp,gradientmap_pars_fragment:Ip,lightmap_pars_fragment:Lp,lights_lambert_fragment:Dp,lights_lambert_pars_fragment:zp,lights_pars_begin:Up,lights_toon_fragment:Fp,lights_toon_pars_fragment:Op,lights_phong_fragment:Bp,lights_phong_pars_fragment:Hp,lights_physical_fragment:Vp,lights_physical_pars_fragment:Gp,lights_fragment_begin:Wp,lights_fragment_maps:Xp,lights_fragment_end:Kp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:$p,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:Zp,map_fragment:Jp,map_pars_fragment:Qp,map_particle_fragment:jp,map_particle_pars_fragment:tm,metalnessmap_fragment:em,metalnessmap_pars_fragment:im,morphinstance_vertex:nm,morphcolor_vertex:sm,morphnormal_vertex:am,morphtarget_pars_vertex:rm,morphtarget_vertex:om,normal_fragment_begin:lm,normal_fragment_maps:cm,normal_pars_fragment:hm,normal_pars_vertex:um,normal_vertex:fm,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:pm,clearcoat_normal_fragment_maps:mm,clearcoat_pars_fragment:gm,iridescence_pars_fragment:ym,opaque_fragment:xm,packing:vm,premultiplied_alpha_fragment:_m,project_vertex:bm,dithering_fragment:Mm,dithering_pars_fragment:Sm,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Am,shadowmap_vertex:Rm,shadowmask_pars_fragment:km,skinbase_vertex:Cm,skinning_pars_vertex:Pm,skinning_vertex:Im,skinnormal_vertex:Lm,specularmap_fragment:Dm,specularmap_pars_fragment:zm,tonemapping_fragment:Um,tonemapping_pars_fragment:Nm,transmission_fragment:Fm,transmission_pars_fragment:Om,uv_pars_fragment:Bm,uv_pars_vertex:Hm,uv_vertex:Vm,worldpos_vertex:Gm,background_vert:Wm,background_frag:Xm,backgroundCube_vert:Km,backgroundCube_frag:Ym,cube_vert:$m,cube_frag:qm,depth_vert:Zm,depth_frag:Jm,distanceRGBA_vert:Qm,distanceRGBA_frag:jm,equirect_vert:t0,equirect_frag:e0,linedashed_vert:i0,linedashed_frag:n0,meshbasic_vert:s0,meshbasic_frag:a0,meshlambert_vert:r0,meshlambert_frag:o0,meshmatcap_vert:l0,meshmatcap_frag:c0,meshnormal_vert:h0,meshnormal_frag:u0,meshphong_vert:f0,meshphong_frag:d0,meshphysical_vert:p0,meshphysical_frag:m0,meshtoon_vert:g0,meshtoon_frag:y0,points_vert:x0,points_frag:v0,shadow_vert:_0,shadow_frag:b0,sprite_vert:M0,sprite_frag:S0},lt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Ei={basic:{uniforms:Ge([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ge([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ge([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ge([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ge([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ge([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ge([lt.points,lt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ge([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ge([lt.common,lt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ge([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ge([lt.sprite,lt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ge([lt.common,lt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ge([lt.lights,lt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Ei.physical={uniforms:Ge([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var La={r:0,b:0,g:0},En=new ui,w0=new Xt;function T0(n,t,e,i,s,a,r){let o=new Vt(0),c=a===!0?0:1,l,h,u=null,d=0,f=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function y(x){let _=!1,b=g(x);b===null?p(o,c):b&&b.isColor&&(p(b,1),_=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,_){let b=g(_);b&&(b.isCubeTexture||b.mapping===xr)?(h===void 0&&(h=new Et(new Te(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:ys(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),En.copy(_.backgroundRotation),En.x*=-1,En.y*=-1,En.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(w0.makeRotationFromEuler(En)),h.material.toneMapped=te.getTransfer(b.colorSpace)!==oe,(u!==b||d!==b.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Et(new ii(2,2),new fi({name:"BackgroundMaterial",uniforms:ys(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=te.getTransfer(b.colorSpace)!==oe,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,f=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,_){x.getRGB(La,gu(n)),i.buffers.color.setClear(La.r,La.g,La.b,_,r)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:y,addToRenderList:m}}function E0(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),a=s,r=!1;function o(M,C,G,O,K){let J=!1,W=u(O,G,C);a!==W&&(a=W,l(a.object)),J=f(M,O,G,K),J&&g(M,O,G,K),K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(J||r)&&(r=!1,b(M,C,G,O),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,C,G){let O=G.wireframe===!0,K=i[M.id];K===void 0&&(K={},i[M.id]=K);let J=K[C.id];J===void 0&&(J={},K[C.id]=J);let W=J[O];return W===void 0&&(W=d(c()),J[O]=W),W}function d(M){let C=[],G=[],O=[];for(let K=0;K<e;K++)C[K]=0,G[K]=0,O[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:G,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,C,G,O){let K=a.attributes,J=C.attributes,W=0,it=G.getAttributes();for(let Y in it)if(it[Y].location>=0){let ft=K[Y],xt=J[Y];if(xt===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor)),ft===void 0||ft.attribute!==xt||xt&&ft.data!==xt.data)return!0;W++}return a.attributesNum!==W||a.index!==O}function g(M,C,G,O){let K={},J=C.attributes,W=0,it=G.getAttributes();for(let Y in it)if(it[Y].location>=0){let ft=J[Y];ft===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor));let xt={};xt.attribute=ft,ft&&ft.data&&(xt.data=ft.data),K[Y]=xt,W++}a.attributes=K,a.attributesNum=W,a.index=O}function y(){let M=a.newAttributes;for(let C=0,G=M.length;C<G;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){let G=a.newAttributes,O=a.enabledAttributes,K=a.attributeDivisors;G[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),K[M]!==C&&(n.vertexAttribDivisor(M,C),K[M]=C)}function x(){let M=a.newAttributes,C=a.enabledAttributes;for(let G=0,O=C.length;G<O;G++)C[G]!==M[G]&&(n.disableVertexAttribArray(G),C[G]=0)}function _(M,C,G,O,K,J,W){W===!0?n.vertexAttribIPointer(M,C,G,K,J):n.vertexAttribPointer(M,C,G,O,K,J)}function b(M,C,G,O){y();let K=O.attributes,J=G.getAttributes(),W=C.defaultAttributeValues;for(let it in J){let Y=J[it];if(Y.location>=0){let ot=K[it];if(ot===void 0&&(it==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),it==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),ot!==void 0){let ft=ot.normalized,xt=ot.itemSize,zt=t.get(ot);if(zt===void 0)continue;let Mt=zt.buffer,X=zt.type,tt=zt.bytesPerElement,pt=X===n.INT||X===n.UNSIGNED_INT||ot.gpuType===Zl;if(ot.isInterleavedBufferAttribute){let at=ot.data,gt=at.stride,Lt=ot.offset;if(at.isInstancedInterleavedBuffer){for(let Wt=0;Wt<Y.locationSize;Wt++)p(Y.location+Wt,at.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Wt=0;Wt<Y.locationSize;Wt++)m(Y.location+Wt);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let Wt=0;Wt<Y.locationSize;Wt++)_(Y.location+Wt,xt/Y.locationSize,X,ft,gt*tt,(Lt+xt/Y.locationSize*Wt)*tt,pt)}else{if(ot.isInstancedBufferAttribute){for(let at=0;at<Y.locationSize;at++)p(Y.location+at,ot.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let at=0;at<Y.locationSize;at++)m(Y.location+at);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let at=0;at<Y.locationSize;at++)_(Y.location+at,xt/Y.locationSize,X,ft,xt*tt,xt/Y.locationSize*at*tt,pt)}}else if(W!==void 0){let ft=W[it];if(ft!==void 0)switch(ft.length){case 2:n.vertexAttrib2fv(Y.location,ft);break;case 3:n.vertexAttrib3fv(Y.location,ft);break;case 4:n.vertexAttrib4fv(Y.location,ft);break;default:n.vertexAttrib1fv(Y.location,ft)}}}}x()}function R(){P();for(let M in i){let C=i[M];for(let G in C){let O=C[G];for(let K in O)h(O[K].object),delete O[K];delete C[G]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;let C=i[M.id];for(let G in C){let O=C[G];for(let K in O)h(O[K].object),delete O[K];delete C[G]}delete i[M.id]}function A(M){for(let C in i){let G=i[C];if(G[M.id]===void 0)continue;let O=G[M.id];for(let K in O)h(O[K].object),delete O[K];delete G[M.id]}}function P(){w(),r=!0,a!==s&&(a=s,l(a.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function A0(n,t,e){let i;function s(l){i=l}function a(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function r(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)r(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];e.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function R0(n,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(A){return!(A!==hi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let P=A===js&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Yi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==bi&&!P)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:R,maxSamples:E}}function k0(n){let t=this,e=null,i=0,s=!1,a=!1,r=new Gi,o=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||a&&!m)a?h(null):l();else{let x=a?0:i,_=x*4,b=p.clippingState||null;c.value=b,b=h(g,d,_,f);for(let R=0;R!==_;++R)b[R]=e[R];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=f+y*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,b=f;_!==y;++_,b+=4)r.copy(u[_]).applyMatrix4(x,o),r.normal.toArray(m,b),m[b+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function C0(n){let t=new WeakMap;function e(r,o){return o===Go?r.mapping=us:o===Wo&&(r.mapping=fs),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===Go||o===Wo)if(t.has(r)){let c=t.get(r).texture;return e(c,r.mapping)}else{let c=r.image;if(c&&c.height>0){let l=new wl(c.height);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var er=class extends ja{constructor(t=-1,e=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},as=4,vh=[.125,.215,.35,.446,.526,.582],Pn=20,wo=new er,_h=new Vt,To=null,Eo=0,Ao=0,Ro=!1,Rn=(1+Math.sqrt(5))/2,ns=1/Rn,bh=[new z(-Rn,ns,0),new z(Rn,ns,0),new z(-ns,0,Rn),new z(ns,0,Rn),new z(0,Rn,-ns),new z(0,Rn,ns),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],ir=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){To=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(To,Eo,Ao),this._renderer.xr.enabled=Ro,t.scissorTest=!1,Da(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),To=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:js,format:hi,colorSpace:Ss,depthBuffer:!1},s=Mh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(t,e,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P0(a)),this._blurMaterial=I0(a,t,e)}return s}_compileMaterial(t){let e=new Et(this._lodPlanes[0],t);this._renderer.compile(e,wo)}_sceneToCubeUV(t,e,i,s){let o=new We(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(_h),h.toneMapping=fn,h.autoClear=!1;let f=new we({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new Et(new Te,f),y=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,y=!0):(f.color.copy(_h),y=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let _=this._cubeSize;Da(s,x*_,p>2?_:0,_,_),h.setRenderTarget(s),y&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===us||t.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new Et(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let c=this._cubeSize;Da(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,wo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=bh[(s-a-1)%bh.length];this._blur(t,a-1,a,r,o)}e.autoClear=i}_blur(t,e,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,e,i,s,a,r,o){let c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Et(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Pn-1),y=a/g,m=isFinite(a)?1+Math.floor(h*y):Pn;m>Pn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pn}`);let p=[],x=0;for(let A=0;A<Pn;++A){let P=A/y,w=Math.exp(-P*P/2);p.push(w),A===0?x+=w:A<m&&(x+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let b=this._sizeLods[s],R=3*b*(s>_-as?s-_+as:0),E=4*(this._cubeSize-b);Da(e,R,E,3*b,2*b),c.setRenderTarget(e),c.render(u,wo)}};function P0(n){let t=[],e=[],i=[],s=n,a=n-as+1+vh.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);e.push(o);let c=1/o;r>n-as?c=vh[r-n+as-1]:r===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,m=2,p=1,x=new Float32Array(y*g*f),_=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let E=0;E<f;E++){let A=E%3*2/3-1,P=E>2?0:-1,w=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];x.set(w,y*g*E),_.set(d,m*g*E);let M=[E,E,E,E,E,E];b.set(M,p*g*E)}let R=new He;R.setAttribute("position",new Xe(x,y)),R.setAttribute("uv",new Xe(_,m)),R.setAttribute("faceIndex",new Xe(b,p)),t.push(R),s>as&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Mh(n,t,e){let i=new $i(n,t,e);return i.texture.mapping=xr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Da(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function I0(n,t,e){let i=new Float32Array(Pn),s=new z(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nc(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Sh(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function wh(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function L0(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===Go||c===Wo,h=c===us||c===fs;if(l||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ir(n)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ir(n)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function a(o){let c=o.target;c.removeEventListener("dispose",a);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function D0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Gs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function z0(n,t,e,i){let s={},a=new WeakMap;function r(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}d.removeEventListener("dispose",r),delete s[d.id];let f=a.get(d);f&&(t.remove(f),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],n.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(f!==null){let x=f.array;y=f.version;for(let _=0,b=x.length;_<b;_+=3){let R=x[_+0],E=x[_+1],A=x[_+2];d.push(R,E,E,A,A,R)}}else if(g!==void 0){let x=g.array;y=g.version;for(let _=0,b=x.length/3-1;_<b;_+=3){let R=_+0,E=_+1,A=_+2;d.push(R,E,E,A,A,R)}}else return;let m=new(pu(d)?Qa:gs)(d,1);m.version=y;let p=a.get(u);p&&t.remove(p),a.set(u,m)}function h(u){let d=a.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return a.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function U0(n,t,e){let i;function s(d){i=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function c(d,f){n.drawElements(i,f,a,d*r),e.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,a,d*r,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,a,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/r,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,a,d,0,y,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*y[x];e.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function N0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=o*(a/3);break;case n.LINES:e.lines+=o*(a/2);break;case n.LINE_STRIP:e.lines+=o*(a-1);break;case n.LINE_LOOP:e.lines+=o*a;break;case n.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function F0(n,t,e){let i=new WeakMap,s=new ye;function a(r,o,c){let l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let w=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),y===!0&&(_=3);let b=o.attributes.position.count*_,R=1;b>t.maxTextureSize&&(R=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let E=new Float32Array(b*R*4*u),A=new Za(E,b,R,u);A.type=bi,A.needsUpdate=!0;let P=_*4;for(let M=0;M<u;M++){let C=m[M],G=p[M],O=x[M],K=b*R*4*M;for(let J=0;J<C.count;J++){let W=J*P;f===!0&&(s.fromBufferAttribute(C,J),E[K+W+0]=s.x,E[K+W+1]=s.y,E[K+W+2]=s.z,E[K+W+3]=0),g===!0&&(s.fromBufferAttribute(G,J),E[K+W+4]=s.x,E[K+W+5]=s.y,E[K+W+6]=s.z,E[K+W+7]=0),y===!0&&(s.fromBufferAttribute(O,J),E[K+W+8]=s.x,E[K+W+9]=s.y,E[K+W+10]=s.z,E[K+W+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new ee(b,R)},i.set(o,d),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:a}}function O0(n,t,e,i){let s=new WeakMap;function a(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function r(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:r}}var nr=class extends qe{constructor(t,e,i,s,a,r,o,c,l,h=os){if(h!==os&&h!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===os&&(i=Ln),i===void 0&&h===ms&&(i=ps),super(null,s,a,r,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ti,this.minFilter=c!==void 0?c:ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},xu=new qe,Th=new nr(1,1),vu=new Za,_u=new Ml,bu=new tr,Eh=[],Ah=[],Rh=new Float32Array(16),kh=new Float32Array(9),Ch=new Float32Array(4);function Ts(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,a=Eh[s];if(a===void 0&&(a=new Float32Array(s),Eh[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,n[r].toArray(a,o)}return a}function ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ce(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function _r(n,t){let e=Ah[t];e===void 0&&(e=new Int32Array(t),Ah[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function B0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function H0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2fv(this.addr,t),Ce(e,t)}}function V0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;n.uniform3fv(this.addr,t),Ce(e,t)}}function G0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4fv(this.addr,t),Ce(e,t)}}function W0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(ke(e,i))return;Ch.set(i),n.uniformMatrix2fv(this.addr,!1,Ch),Ce(e,i)}}function X0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(ke(e,i))return;kh.set(i),n.uniformMatrix3fv(this.addr,!1,kh),Ce(e,i)}}function K0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(ke(e,i))return;Rh.set(i),n.uniformMatrix4fv(this.addr,!1,Rh),Ce(e,i)}}function Y0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function $0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2iv(this.addr,t),Ce(e,t)}}function q0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3iv(this.addr,t),Ce(e,t)}}function Z0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4iv(this.addr,t),Ce(e,t)}}function J0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Q0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2uiv(this.addr,t),Ce(e,t)}}function j0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3uiv(this.addr,t),Ce(e,t)}}function tg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4uiv(this.addr,t),Ce(e,t)}}function eg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(Th.compareFunction=du,a=Th):a=xu,e.setTexture2D(t||a,s)}function ig(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||_u,s)}function ng(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||bu,s)}function sg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||vu,s)}function ag(n){switch(n){case 5126:return B0;case 35664:return H0;case 35665:return V0;case 35666:return G0;case 35674:return W0;case 35675:return X0;case 35676:return K0;case 5124:case 35670:return Y0;case 35667:case 35671:return $0;case 35668:case 35672:return q0;case 35669:case 35673:return Z0;case 5125:return J0;case 36294:return Q0;case 36295:return j0;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return sg}}function rg(n,t){n.uniform1fv(this.addr,t)}function og(n,t){let e=Ts(t,this.size,2);n.uniform2fv(this.addr,e)}function lg(n,t){let e=Ts(t,this.size,3);n.uniform3fv(this.addr,e)}function cg(n,t){let e=Ts(t,this.size,4);n.uniform4fv(this.addr,e)}function hg(n,t){let e=Ts(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ug(n,t){let e=Ts(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function fg(n,t){let e=Ts(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function dg(n,t){n.uniform1iv(this.addr,t)}function pg(n,t){n.uniform2iv(this.addr,t)}function mg(n,t){n.uniform3iv(this.addr,t)}function gg(n,t){n.uniform4iv(this.addr,t)}function yg(n,t){n.uniform1uiv(this.addr,t)}function xg(n,t){n.uniform2uiv(this.addr,t)}function vg(n,t){n.uniform3uiv(this.addr,t)}function _g(n,t){n.uniform4uiv(this.addr,t)}function bg(n,t,e){let i=this.cache,s=t.length,a=_r(e,s);ke(i,a)||(n.uniform1iv(this.addr,a),Ce(i,a));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||xu,a[r])}function Mg(n,t,e){let i=this.cache,s=t.length,a=_r(e,s);ke(i,a)||(n.uniform1iv(this.addr,a),Ce(i,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||_u,a[r])}function Sg(n,t,e){let i=this.cache,s=t.length,a=_r(e,s);ke(i,a)||(n.uniform1iv(this.addr,a),Ce(i,a));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||bu,a[r])}function wg(n,t,e){let i=this.cache,s=t.length,a=_r(e,s);ke(i,a)||(n.uniform1iv(this.addr,a),Ce(i,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||vu,a[r])}function Tg(n){switch(n){case 5126:return rg;case 35664:return og;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return fg;case 5124:case 35670:return dg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return yg;case 36294:return xg;case 36295:return vg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return wg}}var Tl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ag(e.type)}},El=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tg(e.type)}},Al=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,e[o.id],i)}}},ko=/(\w+)(\])?(\[|\.)?/g;function Ph(n,t){n.seq.push(t),n.map[t.id]=t}function Eg(n,t,e){let i=n.name,s=i.length;for(ko.lastIndex=0;;){let a=ko.exec(i),r=ko.lastIndex,o=a[1],c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===s){Ph(e,l===void 0?new Tl(o,n,t):new El(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Al(o),Ph(e,u)),e=u}}}var cs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(e,s),r=t.getUniformLocation(e,a.name);Eg(a,r,this)}}setValue(t,e,i,s){let a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,r=e.length;a!==r;++a){let o=e[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in e&&i.push(r)}return i}};function Ih(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Ag=37297,Rg=0;function kg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}var Lh=new Ot;function Cg(n){te._getMatrix(Lh,te.workingColorSpace,n);let t=`mat3( ${Lh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case vr:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Dh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let r=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+kg(n.getShaderSource(t),r)}else return s}function Pg(n,t){let e=Cg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ig(n,t){let e;switch(t){case id:e="Linear";break;case nd:e="Reinhard";break;case sd:e="Cineon";break;case ad:e="ACESFilmic";break;case od:e="AgX";break;case ld:e="Neutral";break;case rd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var za=new z;function Lg(){te.getLuminanceCoefficients(za);let n=za.x.toFixed(4),t=za.y.toFixed(4),e=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function zg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ug(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=n.getActiveAttrib(t,s),r=a.name,o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:n.getAttribLocation(t,r),locationSize:o}}return e}function Ws(n){return n!==""}function zh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(n){return n.replace(Ng,Og)}var Fg=new Map;function Og(n,t){let e=Ht[t];if(e===void 0){let i=Fg.get(t);if(i!==void 0)e=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Rl(e)}var Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(n){return n.replace(Bg,Hg)}function Hg(n,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Fh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Vg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===eu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===zf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vi&&(t="SHADOWMAP_TYPE_VSM"),t}function Gg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case us:case fs:t="ENVMAP_TYPE_CUBE";break;case xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fs:t="ENVMAP_MODE_REFRACTION";break}return t}function Xg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ql:t="ENVMAP_BLENDING_MULTIPLY";break;case td:t="ENVMAP_BLENDING_MIX";break;case ed:t="ENVMAP_BLENDING_ADD";break}return t}function Kg(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Yg(n,t,e,i){let s=n.getContext(),a=e.defines,r=e.vertexShader,o=e.fragmentShader,c=Vg(e),l=Gg(e),h=Wg(e),u=Xg(e),d=Kg(e),f=Dg(e),g=zg(a),y=s.createProgram(),m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ws).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ws).join(`
`),p.length>0&&(p+=`
`)):(m=[Fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),p=[Fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fn?"#define TONE_MAPPING":"",e.toneMapping!==fn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==fn?Ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Pg("linearToOutputTexel",e.outputColorSpace),Lg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),r=Rl(r),r=zh(r,e),r=Uh(r,e),o=Rl(o),o=zh(o,e),o=Uh(o,e),r=Nh(r),o=Nh(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=x+m+r,b=x+p+o,R=Ih(s,s.VERTEX_SHADER,_),E=Ih(s,s.FRAGMENT_SHADER,b);s.attachShader(y,R),s.attachShader(y,E),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(C){if(n.debug.checkShaderErrors){let G=s.getProgramInfoLog(y).trim(),O=s.getShaderInfoLog(R).trim(),K=s.getShaderInfoLog(E).trim(),J=!0,W=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,R,E);else{let it=Dh(s,R,"vertex"),Y=Dh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+it+`
`+Y)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(O===""||K==="")&&(W=!1);W&&(C.diagnostics={runnable:J,programLog:G,vertexShader:{log:O,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(R),s.deleteShader(E),P=new cs(s,y),w=Ug(s,y)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,Ag)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=E,this}var $g=0,kl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Cl(t),e.set(t,i)),i}},Cl=class{constructor(t){this.id=$g++,this.code=t,this.usedTimes=0}};function qg(n,t,e,i,s,a,r){let o=new Ja,c=new kl,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,C,G,O){let K=G.fog,J=O.geometry,W=w.isMeshStandardMaterial?G.environment:null,it=(w.isMeshStandardMaterial?e:t).get(w.envMap||W),Y=it&&it.mapping===xr?it.image.height:null,ot=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let ft=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xt=ft!==void 0?ft.length:0,zt=0;J.morphAttributes.position!==void 0&&(zt=1),J.morphAttributes.normal!==void 0&&(zt=2),J.morphAttributes.color!==void 0&&(zt=3);let Mt,X,tt,pt;if(ot){let re=Ei[ot];Mt=re.vertexShader,X=re.fragmentShader}else Mt=w.vertexShader,X=w.fragmentShader,c.update(w),tt=c.getVertexShaderID(w),pt=c.getFragmentShaderID(w);let at=n.getRenderTarget(),gt=n.state.buffers.depth.getReversed(),Lt=O.isInstancedMesh===!0,Wt=O.isBatchedMesh===!0,pe=!!w.map,Jt=!!w.matcap,be=!!it,U=!!w.aoMap,Ue=!!w.lightMap,Kt=!!w.bumpMap,Yt=!!w.normalMap,kt=!!w.displacementMap,ce=!!w.emissiveMap,At=!!w.metalnessMap,T=!!w.roughnessMap,v=w.anisotropy>0,B=w.clearcoat>0,k=w.dispersion>0,D=w.iridescence>0,I=w.sheen>0,q=w.transmission>0,Z=v&&!!w.anisotropyMap,nt=B&&!!w.clearcoatMap,Rt=B&&!!w.clearcoatNormalMap,Q=B&&!!w.clearcoatRoughnessMap,ct=D&&!!w.iridescenceMap,St=D&&!!w.iridescenceThicknessMap,Ct=I&&!!w.sheenColorMap,mt=I&&!!w.sheenRoughnessMap,$t=!!w.specularMap,Ut=!!w.specularColorMap,ie=!!w.specularIntensityMap,L=q&&!!w.transmissionMap,rt=q&&!!w.thicknessMap,$=!!w.gradientMap,j=!!w.alphaMap,dt=w.alphaTest>0,ht=!!w.alphaHash,Nt=!!w.extensions,Se=fn;w.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Se=n.toneMapping);let Ne={shaderID:ot,shaderType:w.type,shaderName:w.name,vertexShader:Mt,fragmentShader:X,defines:w.defines,customVertexShaderID:tt,customFragmentShaderID:pt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Wt,batchingColor:Wt&&O._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&O.instanceColor!==null,instancingMorph:Lt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ss,alphaToCoverage:!!w.alphaToCoverage,map:pe,matcap:Jt,envMap:be,envMapMode:be&&it.mapping,envMapCubeUVHeight:Y,aoMap:U,lightMap:Ue,bumpMap:Kt,normalMap:Yt,displacementMap:d&&kt,emissiveMap:ce,normalMapObjectSpace:Yt&&w.normalMapType===dd,normalMapTangentSpace:Yt&&w.normalMapType===fu,metalnessMap:At,roughnessMap:T,anisotropy:v,anisotropyMap:Z,clearcoat:B,clearcoatMap:nt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Q,dispersion:k,iridescence:D,iridescenceMap:ct,iridescenceThicknessMap:St,sheen:I,sheenColorMap:Ct,sheenRoughnessMap:mt,specularMap:$t,specularColorMap:Ut,specularIntensityMap:ie,transmission:q,transmissionMap:L,thicknessMap:rt,gradientMap:$,opaque:w.transparent===!1&&w.blending===rs&&w.alphaToCoverage===!1,alphaMap:j,alphaTest:dt,alphaHash:ht,combine:w.combine,mapUv:pe&&y(w.map.channel),aoMapUv:U&&y(w.aoMap.channel),lightMapUv:Ue&&y(w.lightMap.channel),bumpMapUv:Kt&&y(w.bumpMap.channel),normalMapUv:Yt&&y(w.normalMap.channel),displacementMapUv:kt&&y(w.displacementMap.channel),emissiveMapUv:ce&&y(w.emissiveMap.channel),metalnessMapUv:At&&y(w.metalnessMap.channel),roughnessMapUv:T&&y(w.roughnessMap.channel),anisotropyMapUv:Z&&y(w.anisotropyMap.channel),clearcoatMapUv:nt&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:St&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:mt&&y(w.sheenRoughnessMap.channel),specularMapUv:$t&&y(w.specularMap.channel),specularColorMapUv:Ut&&y(w.specularColorMap.channel),specularIntensityMapUv:ie&&y(w.specularIntensityMap.channel),transmissionMapUv:L&&y(w.transmissionMap.channel),thicknessMapUv:rt&&y(w.thicknessMap.channel),alphaMapUv:j&&y(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Yt||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!J.attributes.uv&&(pe||j),fog:!!K,useFog:w.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:gt,skinning:O.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:zt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Se,decodeVideoTexture:pe&&w.map.isVideoTexture===!0&&te.getTransfer(w.map.colorSpace)===oe,decodeVideoTextureEmissive:ce&&w.emissiveMap.isVideoTexture===!0&&te.getTransfer(w.emissiveMap.colorSpace)===oe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_i,flipSided:w.side===Be,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Nt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&w.extensions.multiDraw===!0||Wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function p(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let C in w.defines)M.push(C),M.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(x(M,w),_(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function x(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function _(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function b(w){let M=g[w.type],C;if(M){let G=Ei[M];C=Od.clone(G.uniforms)}else C=w.uniforms;return C}function R(w,M){let C;for(let G=0,O=h.length;G<O;G++){let K=h[G];if(K.cacheKey===M){C=K,++C.usedTimes;break}}return C===void 0&&(C=new Yg(n,M,w,a),h.push(C)),C}function E(w){if(--w.usedTimes===0){let M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function A(w){c.remove(w)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:P}}function Zg(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function s(r,o,c){n.get(r)[o]=c}function a(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:a}}function Jg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Oh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Bh(){let n=[],t=0,e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function r(u,d,f,g,y,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),t++,p}function o(u,d,f,g,y,m){let p=r(u,d,f,g,y,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,y,m){let p=r(u,d,f,g,y,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Jg),i.length>1&&i.sort(d||Oh),s.length>1&&s.sort(d||Oh)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:o,unshift:c,finish:h,sort:l}}function Qg(){let n=new WeakMap;function t(i,s){let a=n.get(i),r;return a===void 0?(r=new Bh,n.set(i,[r])):s>=a.length?(r=new Bh,a.push(r)):r=a[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function jg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Vt};break;case"SpotLight":e={position:new z,direction:new z,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function ty(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var ey=0;function iy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ny(n){let t=new jg,e=ty(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new z);let s=new z,a=new Xt,r=new Xt;function o(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,x=0,_=0,b=0,R=0,E=0,A=0;l.sort(iy);for(let w=0,M=l.length;w<M;w++){let C=l[w],G=C.color,O=C.intensity,K=C.distance,J=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=G.r*O,u+=G.g*O,d+=G.b*O;else if(C.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(C.sh.coefficients[W],O);A++}else if(C.isDirectionalLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let it=C.shadow,Y=e.get(C);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=J,i.directionalShadowMatrix[f]=C.shadow.matrix,x++}i.directional[f]=W,f++}else if(C.isSpotLight){let W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(G).multiplyScalar(O),W.distance=K,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,i.spot[y]=W;let it=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,it.updateMatrices(C),C.castShadow&&E++),i.spotLightMatrix[y]=it.matrix,C.castShadow){let Y=e.get(C);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,i.spotShadow[y]=Y,i.spotShadowMap[y]=J,b++}y++}else if(C.isRectAreaLight){let W=t.get(C);W.color.copy(G).multiplyScalar(O),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=W,m++}else if(C.isPointLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){let it=C.shadow,Y=e.get(C);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,Y.shadowCameraNear=it.camera.near,Y.shadowCameraFar=it.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=C.shadow.matrix,_++}i.point[g]=W,g++}else if(C.isHemisphereLight){let W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(O),W.groundColor.copy(C.groundColor).multiplyScalar(O),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==_||P.numSpotShadows!==b||P.numSpotMaps!==R||P.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=b+R-E,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=y,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=_,P.numSpotShadows=b,P.numSpotMaps=R,P.numLightProbes=A,i.version=ey++)}function c(l,h){let u=0,d=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){let _=l[p];if(_.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(_.isSpotLight){let b=i.spot[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),r.identity(),a.copy(_.matrixWorld),a.premultiply(m),r.extractRotation(a),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let b=i.hemi[y];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:o,setupView:c,state:i}}function Hh(n){let t=new ny(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function a(h){e.push(h)}function r(h){i.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function sy(n){let t=new WeakMap;function e(s,a=0){let r=t.get(s),o;return r===void 0?(o=new Hh(n),t.set(s,[o])):a>=r.length?(o=new Hh(n),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Pl=class extends mn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Il=class extends mn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ry=`uniform sampler2D shadow_pass;
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
}`;function oy(n,t,e){let i=new $s,s=new ee,a=new ee,r=new ye,o=new Pl({depthPacking:fd}),c=new Il,l={},h=e.maxTextureSize,u={[dn]:Be,[Be]:dn,[_i]:_i},d=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:ay,fragmentShader:ry}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new He;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Et(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eu;let p=this.type;this.render=function(E,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let w=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),G=n.state;G.setBlending(un),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let O=p!==Vi&&this.type===Vi,K=p===Vi&&this.type!==Vi;for(let J=0,W=E.length;J<W;J++){let it=E[J],Y=it.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ot=Y.getFrameExtents();if(s.multiply(ot),a.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/ot.x),s.x=a.x*ot.x,Y.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/ot.y),s.y=a.y*ot.y,Y.mapSize.y=a.y)),Y.map===null||O===!0||K===!0){let xt=this.type!==Vi?{minFilter:ti,magFilter:ti}:{};Y.map!==null&&Y.map.dispose(),Y.map=new $i(s.x,s.y,xt),Y.map.texture.name=it.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let ft=Y.getViewportCount();for(let xt=0;xt<ft;xt++){let zt=Y.getViewport(xt);r.set(a.x*zt.x,a.y*zt.y,a.x*zt.z,a.y*zt.w),G.viewport(r),Y.updateMatrices(it,xt),i=Y.getFrustum(),b(A,P,Y.camera,it,this.type)}Y.isPointLightShadow!==!0&&this.type===Vi&&x(Y,P),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,M,C)};function x(E,A){let P=t.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new $i(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,P,d,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,P,f,y,null)}function _(E,A,P,w){let M=null,C=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let G=M.uuid,O=A.uuid,K=l[G];K===void 0&&(K={},l[G]=K);let J=K[O];J===void 0&&(J=M.clone(),K[O]=J,A.addEventListener("dispose",R)),M=J}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Vi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let G=n.properties.get(M);G.light=P}return M}function b(E,A,P,w,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Vi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let O=t.update(E),K=E.material;if(Array.isArray(K)){let J=O.groups;for(let W=0,it=J.length;W<it;W++){let Y=J[W],ot=K[Y.materialIndex];if(ot&&ot.visible){let ft=_(E,ot,w,M);E.onBeforeShadow(n,E,A,P,O,ft,Y),n.renderBufferDirect(P,null,O,ft,E,Y),E.onAfterShadow(n,E,A,P,O,ft,Y)}}}else if(K.visible){let J=_(E,K,w,M);E.onBeforeShadow(n,E,A,P,O,J,null),n.renderBufferDirect(P,null,O,J,E,null),E.onAfterShadow(n,E,A,P,O,J,null)}}let G=E.children;for(let O=0,K=G.length;O<K;O++)b(G[O],A,P,w,M)}function R(E){E.target.removeEventListener("dispose",R);for(let P in l){let w=l[P],M=E.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var ly={[Uo]:No,[Fo]:Ho,[Oo]:Vo,[hs]:Bo,[No]:Uo,[Ho]:Fo,[Vo]:Oo,[Bo]:hs};function cy(n,t){function e(){let L=!1,rt=new ye,$=null,j=new ye(0,0,0,0);return{setMask:function(dt){$!==dt&&!L&&(n.colorMask(dt,dt,dt,dt),$=dt)},setLocked:function(dt){L=dt},setClear:function(dt,ht,Nt,Se,Ne){Ne===!0&&(dt*=Se,ht*=Se,Nt*=Se),rt.set(dt,ht,Nt,Se),j.equals(rt)===!1&&(n.clearColor(dt,ht,Nt,Se),j.copy(rt))},reset:function(){L=!1,$=null,j.set(-1,0,0,0)}}}function i(){let L=!1,rt=!1,$=null,j=null,dt=null;return{setReversed:function(ht){if(rt!==ht){let Nt=t.get("EXT_clip_control");rt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);let Se=dt;dt=null,this.setClear(Se)}rt=ht},getReversed:function(){return rt},setTest:function(ht){ht?at(n.DEPTH_TEST):gt(n.DEPTH_TEST)},setMask:function(ht){$!==ht&&!L&&(n.depthMask(ht),$=ht)},setFunc:function(ht){if(rt&&(ht=ly[ht]),j!==ht){switch(ht){case Uo:n.depthFunc(n.NEVER);break;case No:n.depthFunc(n.ALWAYS);break;case Fo:n.depthFunc(n.LESS);break;case hs:n.depthFunc(n.LEQUAL);break;case Oo:n.depthFunc(n.EQUAL);break;case Bo:n.depthFunc(n.GEQUAL);break;case Ho:n.depthFunc(n.GREATER);break;case Vo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=ht}},setLocked:function(ht){L=ht},setClear:function(ht){dt!==ht&&(rt&&(ht=1-ht),n.clearDepth(ht),dt=ht)},reset:function(){L=!1,$=null,j=null,dt=null,rt=!1}}}function s(){let L=!1,rt=null,$=null,j=null,dt=null,ht=null,Nt=null,Se=null,Ne=null;return{setTest:function(re){L||(re?at(n.STENCIL_TEST):gt(n.STENCIL_TEST))},setMask:function(re){rt!==re&&!L&&(n.stencilMask(re),rt=re)},setFunc:function(re,mi,zi){($!==re||j!==mi||dt!==zi)&&(n.stencilFunc(re,mi,zi),$=re,j=mi,dt=zi)},setOp:function(re,mi,zi){(ht!==re||Nt!==mi||Se!==zi)&&(n.stencilOp(re,mi,zi),ht=re,Nt=mi,Se=zi)},setLocked:function(re){L=re},setClear:function(re){Ne!==re&&(n.clearStencil(re),Ne=re)},reset:function(){L=!1,rt=null,$=null,j=null,dt=null,ht=null,Nt=null,Se=null,Ne=null}}}let a=new e,r=new i,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,y=!1,m=null,p=null,x=null,_=null,b=null,R=null,E=null,A=new Vt(0,0,0),P=0,w=!1,M=null,C=null,G=null,O=null,K=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,it=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=it>=1):Y.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=it>=2);let ot=null,ft={},xt=n.getParameter(n.SCISSOR_BOX),zt=n.getParameter(n.VIEWPORT),Mt=new ye().fromArray(xt),X=new ye().fromArray(zt);function tt(L,rt,$,j){let dt=new Uint8Array(4),ht=n.createTexture();n.bindTexture(L,ht),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Nt=0;Nt<$;Nt++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(rt,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,dt):n.texImage2D(rt+Nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,dt);return ht}let pt={};pt[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),pt[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pt[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),at(n.DEPTH_TEST),r.setFunc(hs),Kt(!1),Yt(Vc),at(n.CULL_FACE),U(un);function at(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function gt(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Lt(L,rt){return u[L]!==rt?(n.bindFramebuffer(L,rt),u[L]=rt,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=rt),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=rt),!0):!1}function Wt(L,rt){let $=f,j=!1;if(L){$=d.get(rt),$===void 0&&($=[],d.set(rt,$));let dt=L.textures;if($.length!==dt.length||$[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,Nt=dt.length;ht<Nt;ht++)$[ht]=n.COLOR_ATTACHMENT0+ht;$.length=dt.length,j=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,j=!0);j&&n.drawBuffers($)}function pe(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let Jt={[kn]:n.FUNC_ADD,[Nf]:n.FUNC_SUBTRACT,[Ff]:n.FUNC_REVERSE_SUBTRACT};Jt[Of]=n.MIN,Jt[Bf]=n.MAX;let be={[Hf]:n.ZERO,[Vf]:n.ONE,[Gf]:n.SRC_COLOR,[Do]:n.SRC_ALPHA,[qf]:n.SRC_ALPHA_SATURATE,[Yf]:n.DST_COLOR,[Xf]:n.DST_ALPHA,[Wf]:n.ONE_MINUS_SRC_COLOR,[zo]:n.ONE_MINUS_SRC_ALPHA,[$f]:n.ONE_MINUS_DST_COLOR,[Kf]:n.ONE_MINUS_DST_ALPHA,[Zf]:n.CONSTANT_COLOR,[Jf]:n.ONE_MINUS_CONSTANT_COLOR,[Qf]:n.CONSTANT_ALPHA,[jf]:n.ONE_MINUS_CONSTANT_ALPHA};function U(L,rt,$,j,dt,ht,Nt,Se,Ne,re){if(L===un){y===!0&&(gt(n.BLEND),y=!1);return}if(y===!1&&(at(n.BLEND),y=!0),L!==Uf){if(L!==m||re!==w){if((p!==kn||b!==kn)&&(n.blendEquation(n.FUNC_ADD),p=kn,b=kn),re)switch(L){case rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gc:n.blendFunc(n.ONE,n.ONE);break;case Wc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,_=null,R=null,E=null,A.set(0,0,0),P=0,m=L,w=re}return}dt=dt||rt,ht=ht||$,Nt=Nt||j,(rt!==p||dt!==b)&&(n.blendEquationSeparate(Jt[rt],Jt[dt]),p=rt,b=dt),($!==x||j!==_||ht!==R||Nt!==E)&&(n.blendFuncSeparate(be[$],be[j],be[ht],be[Nt]),x=$,_=j,R=ht,E=Nt),(Se.equals(A)===!1||Ne!==P)&&(n.blendColor(Se.r,Se.g,Se.b,Ne),A.copy(Se),P=Ne),m=L,w=!1}function Ue(L,rt){L.side===_i?gt(n.CULL_FACE):at(n.CULL_FACE);let $=L.side===Be;rt&&($=!$),Kt($),L.blending===rs&&L.transparent===!1?U(un):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);let j=L.stencilWrite;o.setTest(j),j&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ce(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(L){M!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),M=L)}function Yt(L){L!==Lf?(at(n.CULL_FACE),L!==C&&(L===Vc?n.cullFace(n.BACK):L===Df?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):gt(n.CULL_FACE),C=L}function kt(L){L!==G&&(W&&n.lineWidth(L),G=L)}function ce(L,rt,$){L?(at(n.POLYGON_OFFSET_FILL),(O!==rt||K!==$)&&(n.polygonOffset(rt,$),O=rt,K=$)):gt(n.POLYGON_OFFSET_FILL)}function At(L){L?at(n.SCISSOR_TEST):gt(n.SCISSOR_TEST)}function T(L){L===void 0&&(L=n.TEXTURE0+J-1),ot!==L&&(n.activeTexture(L),ot=L)}function v(L,rt,$){$===void 0&&(ot===null?$=n.TEXTURE0+J-1:$=ot);let j=ft[$];j===void 0&&(j={type:void 0,texture:void 0},ft[$]=j),(j.type!==L||j.texture!==rt)&&(ot!==$&&(n.activeTexture($),ot=$),n.bindTexture(L,rt||pt[L]),j.type=L,j.texture=rt)}function B(){let L=ft[ot];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function k(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function D(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function I(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(L){Mt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Mt.copy(L))}function mt(L){X.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function $t(L,rt){let $=l.get(rt);$===void 0&&($=new WeakMap,l.set(rt,$));let j=$.get(L);j===void 0&&(j=n.getUniformBlockIndex(rt,L.name),$.set(L,j))}function Ut(L,rt){let j=l.get(rt).get(L);c.get(rt)!==j&&(n.uniformBlockBinding(rt,j,L.__bindingPointIndex),c.set(rt,j))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ot=null,ft={},u={},d=new WeakMap,f=[],g=null,y=!1,m=null,p=null,x=null,_=null,b=null,R=null,E=null,A=new Vt(0,0,0),P=0,w=!1,M=null,C=null,G=null,O=null,K=null,Mt.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:at,disable:gt,bindFramebuffer:Lt,drawBuffers:Wt,useProgram:pe,setBlending:U,setMaterial:Ue,setFlipSided:Kt,setCullFace:Yt,setLineWidth:kt,setPolygonOffset:ce,setScissorTest:At,activeTexture:T,bindTexture:v,unbindTexture:B,compressedTexImage2D:k,compressedTexImage3D:D,texImage2D:ct,texImage3D:St,updateUBOMapping:$t,uniformBlockBinding:Ut,texStorage2D:Rt,texStorage3D:Q,texSubImage2D:I,texSubImage3D:q,compressedTexSubImage2D:Z,compressedTexSubImage3D:nt,scissor:Ct,viewport:mt,reset:ie}}function Vh(n,t,e,i){let s=hy(i);switch(e){case ru:return n*t;case lu:return n*t;case cu:return n*t*2;case jl:return n*t/s.components*s.byteLength;case tc:return n*t/s.components*s.byteLength;case hu:return n*t*2/s.components*s.byteLength;case ec:return n*t*2/s.components*s.byteLength;case ou:return n*t*3/s.components*s.byteLength;case hi:return n*t*4/s.components*s.byteLength;case ic:return n*t*4/s.components*s.byteLength;case Ha:case Va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ga:case Wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yo:case qo:return Math.max(n,16)*Math.max(t,8)/4;case Ko:case $o:return Math.max(n,8)*Math.max(t,8)/2;case Zo:case Jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case el:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case il:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case nl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case sl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case al:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case rl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ll:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case cl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case hl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ul:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case fl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Xa:case dl:case pl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case uu:case ml:return Math.ceil(n/4)*Math.ceil(t/4)*8;case gl:case yl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hy(n){switch(n){case Yi:case nu:return{byteLength:1,components:1};case Ks:case su:case js:return{byteLength:2,components:1};case Jl:case Ql:return{byteLength:2,components:4};case Ln:case Zl:case bi:return{byteLength:4,components:1};case au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function uy(n,t,e,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ee,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return f?new OffscreenCanvas(T,v):$a("canvas")}function y(T,v,B){let k=1,D=At(T);if((D.width>B||D.height>B)&&(k=B/Math.max(D.width,D.height)),k<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let I=Math.floor(k*D.width),q=Math.floor(k*D.height);u===void 0&&(u=g(I,q));let Z=v?g(I,q):u;return Z.width=I,Z.height=q,Z.getContext("2d").drawImage(T,0,0,I,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+I+"x"+q+")."),Z}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function x(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(T,v,B,k,D=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let I=v;if(v===n.RED&&(B===n.FLOAT&&(I=n.R32F),B===n.HALF_FLOAT&&(I=n.R16F),B===n.UNSIGNED_BYTE&&(I=n.R8)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(I=n.R8UI),B===n.UNSIGNED_SHORT&&(I=n.R16UI),B===n.UNSIGNED_INT&&(I=n.R32UI),B===n.BYTE&&(I=n.R8I),B===n.SHORT&&(I=n.R16I),B===n.INT&&(I=n.R32I)),v===n.RG&&(B===n.FLOAT&&(I=n.RG32F),B===n.HALF_FLOAT&&(I=n.RG16F),B===n.UNSIGNED_BYTE&&(I=n.RG8)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(I=n.RG8UI),B===n.UNSIGNED_SHORT&&(I=n.RG16UI),B===n.UNSIGNED_INT&&(I=n.RG32UI),B===n.BYTE&&(I=n.RG8I),B===n.SHORT&&(I=n.RG16I),B===n.INT&&(I=n.RG32I)),v===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(I=n.RGB8UI),B===n.UNSIGNED_SHORT&&(I=n.RGB16UI),B===n.UNSIGNED_INT&&(I=n.RGB32UI),B===n.BYTE&&(I=n.RGB8I),B===n.SHORT&&(I=n.RGB16I),B===n.INT&&(I=n.RGB32I)),v===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(I=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(I=n.RGBA16UI),B===n.UNSIGNED_INT&&(I=n.RGBA32UI),B===n.BYTE&&(I=n.RGBA8I),B===n.SHORT&&(I=n.RGBA16I),B===n.INT&&(I=n.RGBA32I)),v===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(I=n.RGB9_E5),v===n.RGBA){let q=D?vr:te.getTransfer(k);B===n.FLOAT&&(I=n.RGBA32F),B===n.HALF_FLOAT&&(I=n.RGBA16F),B===n.UNSIGNED_BYTE&&(I=q===oe?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(I=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(I=n.RGB5_A1)}return(I===n.R16F||I===n.R32F||I===n.RG16F||I===n.RG32F||I===n.RGBA16F||I===n.RGBA32F)&&t.get("EXT_color_buffer_float"),I}function b(T,v){let B;return T?v===null||v===Ln||v===ps?B=n.DEPTH24_STENCIL8:v===bi?B=n.DEPTH32F_STENCIL8:v===Ks&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ln||v===ps?B=n.DEPTH_COMPONENT24:v===bi?B=n.DEPTH_COMPONENT32F:v===Ks&&(B=n.DEPTH_COMPONENT16),B}function R(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==ti&&T.minFilter!==Ai?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function E(T){let v=T.target;v.removeEventListener("dispose",E),P(v),v.isVideoTexture&&h.delete(v)}function A(T){let v=T.target;v.removeEventListener("dispose",A),M(v)}function P(T){let v=i.get(T);if(v.__webglInit===void 0)return;let B=T.source,k=d.get(B);if(k){let D=k[v.__cacheKey];D.usedTimes--,D.usedTimes===0&&w(T),Object.keys(k).length===0&&d.delete(B)}i.remove(T)}function w(T){let v=i.get(T);n.deleteTexture(v.__webglTexture);let B=T.source,k=d.get(B);delete k[v.__cacheKey],r.memory.textures--}function M(T){let v=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(v.__webglFramebuffer[k]))for(let D=0;D<v.__webglFramebuffer[k].length;D++)n.deleteFramebuffer(v.__webglFramebuffer[k][D]);else n.deleteFramebuffer(v.__webglFramebuffer[k]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[k])}else{if(Array.isArray(v.__webglFramebuffer))for(let k=0;k<v.__webglFramebuffer.length;k++)n.deleteFramebuffer(v.__webglFramebuffer[k]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let k=0;k<v.__webglColorRenderbuffer.length;k++)v.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[k]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let B=T.textures;for(let k=0,D=B.length;k<D;k++){let I=i.get(B[k]);I.__webglTexture&&(n.deleteTexture(I.__webglTexture),r.memory.textures--),i.remove(B[k])}i.remove(T)}let C=0;function G(){C=0}function O(){let T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function K(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function J(T,v){let B=i.get(T);if(T.isVideoTexture&&kt(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){let k=T.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,T,v);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function W(T,v){let B=i.get(T);if(T.version>0&&B.__version!==T.version){X(B,T,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function it(T,v){let B=i.get(T);if(T.version>0&&B.__version!==T.version){X(B,T,v);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function Y(T,v){let B=i.get(T);if(T.version>0&&B.__version!==T.version){tt(B,T,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}let ot={[ds]:n.REPEAT,[In]:n.CLAMP_TO_EDGE,[Xo]:n.MIRRORED_REPEAT},ft={[ti]:n.NEAREST,[hd]:n.NEAREST_MIPMAP_NEAREST,[ma]:n.NEAREST_MIPMAP_LINEAR,[Ai]:n.LINEAR,[jr]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},xt={[pd]:n.NEVER,[_d]:n.ALWAYS,[md]:n.LESS,[du]:n.LEQUAL,[gd]:n.EQUAL,[vd]:n.GEQUAL,[yd]:n.GREATER,[xd]:n.NOTEQUAL};function zt(T,v){if(v.type===bi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ai||v.magFilter===jr||v.magFilter===ma||v.magFilter===Wi||v.minFilter===Ai||v.minFilter===jr||v.minFilter===ma||v.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ot[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ot[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ot[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ft[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ft[v.minFilter]),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,xt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ti||v.minFilter!==ma&&v.minFilter!==Wi||v.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Mt(T,v){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",E));let k=v.source,D=d.get(k);D===void 0&&(D={},d.set(k,D));let I=K(v);if(I!==T.__cacheKey){D[I]===void 0&&(D[I]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,B=!0),D[I].usedTimes++;let q=D[T.__cacheKey];q!==void 0&&(D[T.__cacheKey].usedTimes--,q.usedTimes===0&&w(v)),T.__cacheKey=I,T.__webglTexture=D[I].texture}return B}function X(T,v,B){let k=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(k=n.TEXTURE_3D);let D=Mt(T,v),I=v.source;e.bindTexture(k,T.__webglTexture,n.TEXTURE0+B);let q=i.get(I);if(I.version!==q.__version||D===!0){e.activeTexture(n.TEXTURE0+B);let Z=te.getPrimaries(te.workingColorSpace),nt=v.colorSpace===hn?null:te.getPrimaries(v.colorSpace),Rt=v.colorSpace===hn||Z===nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Q=y(v.image,!1,s.maxTextureSize);Q=ce(v,Q);let ct=a.convert(v.format,v.colorSpace),St=a.convert(v.type),Ct=_(v.internalFormat,ct,St,v.colorSpace,v.isVideoTexture);zt(k,v);let mt,$t=v.mipmaps,Ut=v.isVideoTexture!==!0,ie=q.__version===void 0||D===!0,L=I.dataReady,rt=R(v,Q);if(v.isDepthTexture)Ct=b(v.format===ms,v.type),ie&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,Ct,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,Ct,Q.width,Q.height,0,ct,St,null));else if(v.isDataTexture)if($t.length>0){Ut&&ie&&e.texStorage2D(n.TEXTURE_2D,rt,Ct,$t[0].width,$t[0].height);for(let $=0,j=$t.length;$<j;$++)mt=$t[$],Ut?L&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,mt.width,mt.height,ct,St,mt.data):e.texImage2D(n.TEXTURE_2D,$,Ct,mt.width,mt.height,0,ct,St,mt.data);v.generateMipmaps=!1}else Ut?(ie&&e.texStorage2D(n.TEXTURE_2D,rt,Ct,Q.width,Q.height),L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,ct,St,Q.data)):e.texImage2D(n.TEXTURE_2D,0,Ct,Q.width,Q.height,0,ct,St,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ut&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,rt,Ct,$t[0].width,$t[0].height,Q.depth);for(let $=0,j=$t.length;$<j;$++)if(mt=$t[$],v.format!==hi)if(ct!==null)if(Ut){if(L)if(v.layerUpdates.size>0){let dt=Vh(mt.width,mt.height,v.format,v.type);for(let ht of v.layerUpdates){let Nt=mt.data.subarray(ht*dt/mt.data.BYTES_PER_ELEMENT,(ht+1)*dt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,ht,mt.width,mt.height,1,ct,Nt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,mt.width,mt.height,Q.depth,ct,mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Ct,mt.width,mt.height,Q.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,mt.width,mt.height,Q.depth,ct,St,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,Ct,mt.width,mt.height,Q.depth,0,ct,St,mt.data)}else{Ut&&ie&&e.texStorage2D(n.TEXTURE_2D,rt,Ct,$t[0].width,$t[0].height);for(let $=0,j=$t.length;$<j;$++)mt=$t[$],v.format!==hi?ct!==null?Ut?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,mt.width,mt.height,ct,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,$,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?L&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,mt.width,mt.height,ct,St,mt.data):e.texImage2D(n.TEXTURE_2D,$,Ct,mt.width,mt.height,0,ct,St,mt.data)}else if(v.isDataArrayTexture)if(Ut){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,rt,Ct,Q.width,Q.height,Q.depth),L)if(v.layerUpdates.size>0){let $=Vh(Q.width,Q.height,v.format,v.type);for(let j of v.layerUpdates){let dt=Q.data.subarray(j*$/Q.data.BYTES_PER_ELEMENT,(j+1)*$/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,ct,St,dt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ct,St,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ct,Q.width,Q.height,Q.depth,0,ct,St,Q.data);else if(v.isData3DTexture)Ut?(ie&&e.texStorage3D(n.TEXTURE_3D,rt,Ct,Q.width,Q.height,Q.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ct,St,Q.data)):e.texImage3D(n.TEXTURE_3D,0,Ct,Q.width,Q.height,Q.depth,0,ct,St,Q.data);else if(v.isFramebufferTexture){if(ie)if(Ut)e.texStorage2D(n.TEXTURE_2D,rt,Ct,Q.width,Q.height);else{let $=Q.width,j=Q.height;for(let dt=0;dt<rt;dt++)e.texImage2D(n.TEXTURE_2D,dt,Ct,$,j,0,ct,St,null),$>>=1,j>>=1}}else if($t.length>0){if(Ut&&ie){let $=At($t[0]);e.texStorage2D(n.TEXTURE_2D,rt,Ct,$.width,$.height)}for(let $=0,j=$t.length;$<j;$++)mt=$t[$],Ut?L&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,ct,St,mt):e.texImage2D(n.TEXTURE_2D,$,Ct,ct,St,mt);v.generateMipmaps=!1}else if(Ut){if(ie){let $=At(Q);e.texStorage2D(n.TEXTURE_2D,rt,Ct,$.width,$.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct,St,Q)}else e.texImage2D(n.TEXTURE_2D,0,Ct,ct,St,Q);m(v)&&p(k),q.__version=I.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function tt(T,v,B){if(v.image.length!==6)return;let k=Mt(T,v),D=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+B);let I=i.get(D);if(D.version!==I.__version||k===!0){e.activeTexture(n.TEXTURE0+B);let q=te.getPrimaries(te.workingColorSpace),Z=v.colorSpace===hn?null:te.getPrimaries(v.colorSpace),nt=v.colorSpace===hn||q===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Rt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,ct=[];for(let j=0;j<6;j++)!Rt&&!Q?ct[j]=y(v.image[j],!0,s.maxCubemapSize):ct[j]=Q?v.image[j].image:v.image[j],ct[j]=ce(v,ct[j]);let St=ct[0],Ct=a.convert(v.format,v.colorSpace),mt=a.convert(v.type),$t=_(v.internalFormat,Ct,mt,v.colorSpace),Ut=v.isVideoTexture!==!0,ie=I.__version===void 0||k===!0,L=D.dataReady,rt=R(v,St);zt(n.TEXTURE_CUBE_MAP,v);let $;if(Rt){Ut&&ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,rt,$t,St.width,St.height);for(let j=0;j<6;j++){$=ct[j].mipmaps;for(let dt=0;dt<$.length;dt++){let ht=$[dt];v.format!==hi?Ct!==null?Ut?L&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,0,0,ht.width,ht.height,Ct,ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,$t,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,0,0,ht.width,ht.height,Ct,mt,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,$t,ht.width,ht.height,0,Ct,mt,ht.data)}}}else{if($=v.mipmaps,Ut&&ie){$.length>0&&rt++;let j=At(ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,rt,$t,j.width,j.height)}for(let j=0;j<6;j++)if(Q){Ut?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ct[j].width,ct[j].height,Ct,mt,ct[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,ct[j].width,ct[j].height,0,Ct,mt,ct[j].data);for(let dt=0;dt<$.length;dt++){let Nt=$[dt].image[j].image;Ut?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,0,0,Nt.width,Nt.height,Ct,mt,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,$t,Nt.width,Nt.height,0,Ct,mt,Nt.data)}}else{Ut?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ct,mt,ct[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,Ct,mt,ct[j]);for(let dt=0;dt<$.length;dt++){let ht=$[dt];Ut?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,0,0,Ct,mt,ht.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,$t,Ct,mt,ht.image[j])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),I.__version=D.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function pt(T,v,B,k,D,I){let q=a.convert(B.format,B.colorSpace),Z=a.convert(B.type),nt=_(B.internalFormat,q,Z,B.colorSpace),Rt=i.get(v),Q=i.get(B);if(Q.__renderTarget=v,!Rt.__hasExternalTextures){let ct=Math.max(1,v.width>>I),St=Math.max(1,v.height>>I);D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?e.texImage3D(D,I,nt,ct,St,v.depth,0,q,Z,null):e.texImage2D(D,I,nt,ct,St,0,q,Z,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),Yt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,D,Q.__webglTexture,0,Kt(v)):(D===n.TEXTURE_2D||D>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&D<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,D,Q.__webglTexture,I),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(T,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer){let k=v.depthTexture,D=k&&k.isDepthTexture?k.type:null,I=b(v.stencilBuffer,D),q=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=Kt(v);Yt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,I,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,I,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,I,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,T)}else{let k=v.textures;for(let D=0;D<k.length;D++){let I=k[D],q=a.convert(I.format,I.colorSpace),Z=a.convert(I.type),nt=_(I.internalFormat,q,Z,I.colorSpace),Rt=Kt(v);B&&Yt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,nt,v.width,v.height):Yt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt,nt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,nt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function gt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let k=i.get(v.depthTexture);k.__renderTarget=v,(!k.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);let D=k.__webglTexture,I=Kt(v);if(v.depthTexture.format===os)Yt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,D,0,I):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,D,0);else if(v.depthTexture.format===ms)Yt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,D,0,I):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,D,0);else throw new Error("Unknown depthTexture format")}function Lt(T){let v=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let k=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),k){let D=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,k.removeEventListener("dispose",D)};k.addEventListener("dispose",D),v.__depthDisposeCallback=D}v.__boundDepthTexture=k}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");gt(v.__webglFramebuffer,T)}else if(B){v.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[k]),v.__webglDepthbuffer[k]===void 0)v.__webglDepthbuffer[k]=n.createRenderbuffer(),at(v.__webglDepthbuffer[k],T,!1);else{let D=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,I=v.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,I),n.framebufferRenderbuffer(n.FRAMEBUFFER,D,n.RENDERBUFFER,I)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),at(v.__webglDepthbuffer,T,!1);else{let k=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,D=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,D),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,D)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(T,v,B){let k=i.get(T);v!==void 0&&pt(k.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Lt(T)}function pe(T){let v=T.texture,B=i.get(T),k=i.get(v);T.addEventListener("dispose",A);let D=T.textures,I=T.isWebGLCubeRenderTarget===!0,q=D.length>1;if(q||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=v.version,r.memory.textures++),I){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let nt=0;nt<v.mipmaps.length;nt++)B.__webglFramebuffer[Z][nt]=n.createFramebuffer()}else B.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<v.mipmaps.length;Z++)B.__webglFramebuffer[Z]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(q)for(let Z=0,nt=D.length;Z<nt;Z++){let Rt=i.get(D[Z]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=n.createTexture(),r.memory.textures++)}if(T.samples>0&&Yt(T)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<D.length;Z++){let nt=D[Z];B.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let Rt=a.convert(nt.format,nt.colorSpace),Q=a.convert(nt.type),ct=_(nt.internalFormat,Rt,Q,nt.colorSpace,T.isXRRenderTarget===!0),St=Kt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,St,ct,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),at(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(I){e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),zt(n.TEXTURE_CUBE_MAP,v);for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)pt(B.__webglFramebuffer[Z][nt],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,nt);else pt(B.__webglFramebuffer[Z],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(q){for(let Z=0,nt=D.length;Z<nt;Z++){let Rt=D[Z],Q=i.get(Rt);e.bindTexture(n.TEXTURE_2D,Q.__webglTexture),zt(n.TEXTURE_2D,Rt),pt(B.__webglFramebuffer,T,Rt,n.COLOR_ATTACHMENT0+Z,n.TEXTURE_2D,0),m(Rt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let Z=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Z,k.__webglTexture),zt(Z,v),v.mipmaps&&v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)pt(B.__webglFramebuffer[nt],T,v,n.COLOR_ATTACHMENT0,Z,nt);else pt(B.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,Z,0);m(v)&&p(Z),e.unbindTexture()}T.depthBuffer&&Lt(T)}function Jt(T){let v=T.textures;for(let B=0,k=v.length;B<k;B++){let D=v[B];if(m(D)){let I=x(T),q=i.get(D).__webglTexture;e.bindTexture(I,q),p(I),e.unbindTexture()}}}let be=[],U=[];function Ue(T){if(T.samples>0){if(Yt(T)===!1){let v=T.textures,B=T.width,k=T.height,D=n.COLOR_BUFFER_BIT,I=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=i.get(T),Z=v.length>1;if(Z)for(let nt=0;nt<v.length;nt++)e.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let nt=0;nt<v.length;nt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(D|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(D|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,q.__webglColorRenderbuffer[nt]);let Rt=i.get(v[nt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Rt,0)}n.blitFramebuffer(0,0,B,k,0,0,B,k,D,n.NEAREST),c===!0&&(be.length=0,U.length=0,be.push(n.COLOR_ATTACHMENT0+nt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(be.push(I),U.push(I),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let nt=0;nt<v.length;nt++){e.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.RENDERBUFFER,q.__webglColorRenderbuffer[nt]);let Rt=i.get(v[nt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.TEXTURE_2D,Rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let v=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Kt(T){return Math.min(s.maxSamples,T.samples)}function Yt(T){let v=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function kt(T){let v=r.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function ce(T,v){let B=T.colorSpace,k=T.format,D=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Ss&&B!==hn&&(te.getTransfer(B)===oe?(k!==hi||D!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function At(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=G,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=it,this.setTextureCube=Y,this.rebindTextures=Wt,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Yt}function fy(n,t){function e(i,s=hn){let a,r=te.getTransfer(s);if(i===Yi)return n.UNSIGNED_BYTE;if(i===Jl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ql)return n.UNSIGNED_SHORT_5_5_5_1;if(i===au)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nu)return n.BYTE;if(i===su)return n.SHORT;if(i===Ks)return n.UNSIGNED_SHORT;if(i===Zl)return n.INT;if(i===Ln)return n.UNSIGNED_INT;if(i===bi)return n.FLOAT;if(i===js)return n.HALF_FLOAT;if(i===ru)return n.ALPHA;if(i===ou)return n.RGB;if(i===hi)return n.RGBA;if(i===lu)return n.LUMINANCE;if(i===cu)return n.LUMINANCE_ALPHA;if(i===os)return n.DEPTH_COMPONENT;if(i===ms)return n.DEPTH_STENCIL;if(i===jl)return n.RED;if(i===tc)return n.RED_INTEGER;if(i===hu)return n.RG;if(i===ec)return n.RG_INTEGER;if(i===ic)return n.RGBA_INTEGER;if(i===Ha||i===Va||i===Ga||i===Wa)if(r===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ha)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ha)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Va)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ga)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ko||i===Yo||i===$o||i===qo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ko)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$o)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zo||i===Jo||i===Qo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Zo||i===Jo)return r===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Qo)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jo||i===tl||i===el||i===il||i===nl||i===sl||i===al||i===rl||i===ol||i===ll||i===cl||i===hl||i===ul||i===fl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===jo)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tl)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===el)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===il)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nl)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sl)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===al)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rl)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ol)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ll)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cl)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hl)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ul)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fl)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xa||i===dl||i===pl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Xa)return r===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uu||i===ml||i===gl||i===yl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Xa)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ml)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Ll=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Mi=class extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}},dy={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,r=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dy)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Mi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},py=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,my=`
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

}`,Dl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new qe,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new fi({vertexShader:py,fragmentShader:my,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zl=class extends pn{constructor(t,e){super();let i=this,s=null,a=1,r=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,y=new Dl,m=e.getContextAttributes(),p=null,x=null,_=[],b=[],R=new ee,E=null,A=new We;A.viewport=new ye;let P=new We;P.viewport=new ye;let w=[A,P],M=new Ll,C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=_[X];return tt===void 0&&(tt=new Xs,_[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=_[X];return tt===void 0&&(tt=new Xs,_[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=_[X];return tt===void 0&&(tt=new Xs,_[X]=tt),tt.getHandSpace()};function O(X){let tt=b.indexOf(X.inputSource);if(tt===-1)return;let pt=_[tt];pt!==void 0&&(pt.update(X.inputSource,X.frame,l||r),pt.dispatchEvent({type:X.type,data:X.inputSource}))}function K(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",J);for(let X=0;X<_.length;X++){let tt=b[X];tt!==null&&(b[X]=null,_[X].disconnect(tt))}C=null,G=null,y.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,x=null,Mt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",K),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new $i(f.framebufferWidth,f.framebufferHeight,{format:hi,type:Yi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,pt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?ms:os,pt=m.stencil?ps:Ln);let gt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:a};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(gt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new $i(d.textureWidth,d.textureHeight,{format:hi,type:Yi,depthTexture:new nr(d.textureWidth,d.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(o),Mt.setContext(s),Mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(X){for(let tt=0;tt<X.removed.length;tt++){let pt=X.removed[tt],at=b.indexOf(pt);at>=0&&(b[at]=null,_[at].disconnect(pt))}for(let tt=0;tt<X.added.length;tt++){let pt=X.added[tt],at=b.indexOf(pt);if(at===-1){for(let Lt=0;Lt<_.length;Lt++)if(Lt>=b.length){b.push(pt),at=Lt;break}else if(b[Lt]===null){b[Lt]=pt,at=Lt;break}if(at===-1)break}let gt=_[at];gt&&gt.connect(pt)}}let W=new z,it=new z;function Y(X,tt,pt){W.setFromMatrixPosition(tt.matrixWorld),it.setFromMatrixPosition(pt.matrixWorld);let at=W.distanceTo(it),gt=tt.projectionMatrix.elements,Lt=pt.projectionMatrix.elements,Wt=gt[14]/(gt[10]-1),pe=gt[14]/(gt[10]+1),Jt=(gt[9]+1)/gt[5],be=(gt[9]-1)/gt[5],U=(gt[8]-1)/gt[0],Ue=(Lt[8]+1)/Lt[0],Kt=Wt*U,Yt=Wt*Ue,kt=at/(-U+Ue),ce=kt*-U;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ce),X.translateZ(kt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),gt[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let At=Wt+kt,T=pe+kt,v=Kt-ce,B=Yt+(at-ce),k=Jt*pe/T*At,D=be*pe/T*At;X.projectionMatrix.makePerspective(v,B,k,D,At,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ot(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let tt=X.near,pt=X.far;y.texture!==null&&(y.depthNear>0&&(tt=y.depthNear),y.depthFar>0&&(pt=y.depthFar)),M.near=P.near=A.near=tt,M.far=P.far=A.far=pt,(C!==M.near||G!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,G=M.far),A.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;let at=X.parent,gt=M.cameras;ot(M,at);for(let Lt=0;Lt<gt.length;Lt++)ot(gt[Lt],at);gt.length===2?Y(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),ft(X,M,at)};function ft(X,tt,pt){pt===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(pt.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=vl*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let xt=null;function zt(X,tt){if(h=tt.getViewerPose(l||r),g=tt,h!==null){let pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let at=!1;pt.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let Lt=0;Lt<pt.length;Lt++){let Wt=pt[Lt],pe=null;if(f!==null)pe=f.getViewport(Wt);else{let be=u.getViewSubImage(d,Wt);pe=be.viewport,Lt===0&&(t.setRenderTargetTextures(x,be.colorTexture,d.ignoreDepthValues?void 0:be.depthStencilTexture),t.setRenderTarget(x))}let Jt=w[Lt];Jt===void 0&&(Jt=new We,Jt.layers.enable(Lt),Jt.viewport=new ye,w[Lt]=Jt),Jt.matrix.fromArray(Wt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Wt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(pe.x,pe.y,pe.width,pe.height),Lt===0&&(M.matrix.copy(Jt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(Jt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")){let Lt=u.getDepthInformation(pt[0]);Lt&&Lt.isValid&&Lt.texture&&y.init(t,Lt,s.renderState)}}for(let pt=0;pt<_.length;pt++){let at=b[pt],gt=_[pt];at!==null&&gt!==void 0&&gt.update(at,tt,l||r)}xt&&xt(X,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}let Mt=new yu;Mt.setAnimationLoop(zt),this.setAnimationLoop=function(X){xt=X},this.dispose=function(){}}},An=new ui,gy=new Xt;function yy(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,gu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),u(m,p)):p.isMeshPhongMaterial?(a(m,p),h(m,p)):p.isMeshStandardMaterial?(a(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),y(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Be&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Be&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=t.get(p),_=x.envMap,b=x.envMapRotation;_&&(m.envMap.value=_,An.copy(b),An.x*=-1,An.y*=-1,An.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(An.y*=-1,An.z*=-1),m.envMapRotation.value.setFromMatrix4(gy.makeRotationFromEuler(An)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xy(n,t,e,i){let s={},a={},r=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,_){let b=_.program;i.uniformBlockBinding(x,b)}function l(x,_){let b=s[x.id];b===void 0&&(g(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",m));let R=_.program;i.updateUBOMapping(x,R);let E=t.render.frame;a[x.id]!==E&&(d(x),a[x.id]=E)}function h(x){let _=u();x.__bindingPointIndex=_;let b=n.createBuffer(),R=x.__size,E=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,b),b}function u(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let _=s[x.id],b=x.uniforms,R=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let E=0,A=b.length;E<A;E++){let P=Array.isArray(b[E])?b[E]:[b[E]];for(let w=0,M=P.length;w<M;w++){let C=P[w];if(f(C,E,w,R)===!0){let G=C.__offset,O=Array.isArray(C.value)?C.value:[C.value],K=0;for(let J=0;J<O.length;J++){let W=O[J],it=y(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,G+K,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,K),K+=it.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,_,b,R){let E=x.value,A=_+"_"+b;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{let P=R[A];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return R[A]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(x){let _=x.uniforms,b=0,R=16;for(let A=0,P=_.length;A<P;A++){let w=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,C=w.length;M<C;M++){let G=w[M],O=Array.isArray(G.value)?G.value:[G.value];for(let K=0,J=O.length;K<J;K++){let W=O[K],it=y(W),Y=b%R,ot=Y%it.boundary,ft=Y+ot;b+=ot,ft!==0&&R-ft<it.storage&&(b+=R-ft),G.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=it.storage}}}let E=b%R;return E>0&&(b+=R-E),x.__size=b,x.__cache={},this}function y(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){let _=x.target;_.removeEventListener("dispose",m);let b=r.indexOf(_.__bindingPointIndex);r.splice(b,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete a[_.id]}function p(){for(let x in s)n.deleteBuffer(s[x]);r=[],s={},a={}}return{bind:c,update:l,dispose:p}}var sr=class{constructor(t={}){let{canvas:e=Md(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,x=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this.toneMapping=fn,this.toneMappingExposure=1;let b=this,R=!1,E=0,A=0,P=null,w=-1,M=null,C=new ye,G=new ye,O=null,K=new Vt(0),J=0,W=e.width,it=e.height,Y=1,ot=null,ft=null,xt=new ye(0,0,W,it),zt=new ye(0,0,W,it),Mt=!1,X=new $s,tt=!1,pt=!1,at=new Xt,gt=new Xt,Lt=new z,Wt=new ye,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function be(){return P===null?Y:1}let U=i;function Ue(S,N){return e.getContext(S,N)}try{let S={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$l}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),U===null){let N="webgl2";if(U=Ue(N,S),U===null)throw Ue(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Kt,Yt,kt,ce,At,T,v,B,k,D,I,q,Z,nt,Rt,Q,ct,St,Ct,mt,$t,Ut,ie,L;function rt(){Kt=new D0(U),Kt.init(),Ut=new fy(U,Kt),Yt=new R0(U,Kt,t,Ut),kt=new cy(U,Kt),Yt.reverseDepthBuffer&&d&&kt.buffers.depth.setReversed(!0),ce=new N0(U),At=new Zg,T=new uy(U,Kt,kt,At,Yt,Ut,ce),v=new C0(b),B=new L0(b),k=new Wd(U),ie=new E0(U,k),D=new z0(U,k,ce,ie),I=new O0(U,D,k,ce),Ct=new F0(U,Yt,T),Q=new k0(At),q=new qg(b,v,B,Kt,Yt,ie,Q),Z=new yy(b,At),nt=new Qg,Rt=new sy(Kt),St=new T0(b,v,B,kt,I,f,c),ct=new oy(b,I,Yt),L=new xy(U,ce,Yt,kt),mt=new A0(U,Kt,ce),$t=new U0(U,Kt,ce),ce.programs=q.programs,b.capabilities=Yt,b.extensions=Kt,b.properties=At,b.renderLists=nt,b.shadowMap=ct,b.state=kt,b.info=ce}rt();let $=new zl(b,U);this.xr=$,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=Kt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Kt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(W,it,!1))},this.getSize=function(S){return S.set(W,it)},this.setSize=function(S,N,H=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,it=N,e.width=Math.floor(S*Y),e.height=Math.floor(N*Y),H===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(W*Y,it*Y).floor()},this.setDrawingBufferSize=function(S,N,H){W=S,it=N,Y=H,e.width=Math.floor(S*H),e.height=Math.floor(N*H),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(xt)},this.setViewport=function(S,N,H,V){S.isVector4?xt.set(S.x,S.y,S.z,S.w):xt.set(S,N,H,V),kt.viewport(C.copy(xt).multiplyScalar(Y).round())},this.getScissor=function(S){return S.copy(zt)},this.setScissor=function(S,N,H,V){S.isVector4?zt.set(S.x,S.y,S.z,S.w):zt.set(S,N,H,V),kt.scissor(G.copy(zt).multiplyScalar(Y).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(S){kt.setScissorTest(Mt=S)},this.setOpaqueSort=function(S){ot=S},this.setTransparentSort=function(S){ft=S},this.getClearColor=function(S){return S.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(S=!0,N=!0,H=!0){let V=0;if(S){let F=!1;if(P!==null){let st=P.texture.format;F=st===ic||st===ec||st===tc}if(F){let st=P.texture.type,ut=st===Yi||st===Ln||st===Ks||st===ps||st===Jl||st===Ql,vt=St.getClearColor(),_t=St.getClearAlpha(),Dt=vt.r,Ft=vt.g,bt=vt.b;ut?(g[0]=Dt,g[1]=Ft,g[2]=bt,g[3]=_t,U.clearBufferuiv(U.COLOR,0,g)):(y[0]=Dt,y[1]=Ft,y[2]=bt,y[3]=_t,U.clearBufferiv(U.COLOR,0,y))}else V|=U.COLOR_BUFFER_BIT}N&&(V|=U.DEPTH_BUFFER_BIT),H&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),nt.dispose(),Rt.dispose(),At.dispose(),v.dispose(),B.dispose(),I.dispose(),ie.dispose(),L.dispose(),q.dispose(),$.dispose(),$.removeEventListener("sessionstart",Dc),$.removeEventListener("sessionend",zc),bn.stop()};function j(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let S=ce.autoReset,N=ct.enabled,H=ct.autoUpdate,V=ct.needsUpdate,F=ct.type;rt(),ce.autoReset=S,ct.enabled=N,ct.autoUpdate=H,ct.needsUpdate=V,ct.type=F}function ht(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Nt(S){let N=S.target;N.removeEventListener("dispose",Nt),Se(N)}function Se(S){Ne(S),At.remove(S)}function Ne(S){let N=At.get(S).programs;N!==void 0&&(N.forEach(function(H){q.releaseProgram(H)}),S.isShaderMaterial&&q.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,H,V,F,st){N===null&&(N=pe);let ut=F.isMesh&&F.matrixWorld.determinant()<0,vt=Cf(S,N,H,V,F);kt.setMaterial(V,ut);let _t=H.index,Dt=1;if(V.wireframe===!0){if(_t=D.getWireframeAttribute(H),_t===void 0)return;Dt=2}let Ft=H.drawRange,bt=H.attributes.position,ne=Ft.start*Dt,ue=(Ft.start+Ft.count)*Dt;st!==null&&(ne=Math.max(ne,st.start*Dt),ue=Math.min(ue,(st.start+st.count)*Dt)),_t!==null?(ne=Math.max(ne,0),ue=Math.min(ue,_t.count)):bt!=null&&(ne=Math.max(ne,0),ue=Math.min(ue,bt.count));let me=ue-ne;if(me<0||me===1/0)return;ie.setup(F,V,vt,H,_t);let Ke,se=mt;if(_t!==null&&(Ke=k.get(_t),se=$t,se.setIndex(Ke)),F.isMesh)V.wireframe===!0?(kt.setLineWidth(V.wireframeLinewidth*be()),se.setMode(U.LINES)):se.setMode(U.TRIANGLES);else if(F.isLine){let wt=V.linewidth;wt===void 0&&(wt=1),kt.setLineWidth(wt*be()),F.isLineSegments?se.setMode(U.LINES):F.isLineLoop?se.setMode(U.LINE_LOOP):se.setMode(U.LINE_STRIP)}else F.isPoints?se.setMode(U.POINTS):F.isSprite&&se.setMode(U.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)se.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))se.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let wt=F._multiDrawStarts,Ui=F._multiDrawCounts,ae=F._multiDrawCount,gi=_t?k.get(_t).bytesPerElement:1,Gn=At.get(V).currentProgram.getUniforms();for(let Je=0;Je<ae;Je++)Gn.setValue(U,"_gl_DrawID",Je),se.render(wt[Je]/gi,Ui[Je])}else if(F.isInstancedMesh)se.renderInstances(ne,me,F.count);else if(H.isInstancedBufferGeometry){let wt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ui=Math.min(H.instanceCount,wt);se.renderInstances(ne,me,Ui)}else se.render(ne,me)};function re(S,N,H){S.transparent===!0&&S.side===_i&&S.forceSinglePass===!1?(S.side=Be,S.needsUpdate=!0,pa(S,N,H),S.side=dn,S.needsUpdate=!0,pa(S,N,H),S.side=_i):pa(S,N,H)}this.compile=function(S,N,H=null){H===null&&(H=S),p=Rt.get(H),p.init(N),_.push(p),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==H&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let V=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let st=F.material;if(st)if(Array.isArray(st))for(let ut=0;ut<st.length;ut++){let vt=st[ut];re(vt,H,F),V.add(vt)}else re(st,H,F),V.add(st)}),_.pop(),p=null,V},this.compileAsync=function(S,N,H=null){let V=this.compile(S,N,H);return new Promise(F=>{function st(){if(V.forEach(function(ut){At.get(ut).currentProgram.isReady()&&V.delete(ut)}),V.size===0){F(S);return}setTimeout(st,10)}Kt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let mi=null;function zi(S){mi&&mi(S)}function Dc(){bn.stop()}function zc(){bn.start()}let bn=new yu;bn.setAnimationLoop(zi),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(S){mi=S,$.setAnimationLoop(S),S===null?bn.stop():bn.start()},$.addEventListener("sessionstart",Dc),$.addEventListener("sessionend",zc),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,N,P),p=Rt.get(S,_.length),p.init(N),_.push(p),gt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(gt),pt=this.localClippingEnabled,tt=Q.init(this.clippingPlanes,pt),m=nt.get(S,x.length),m.init(),x.push(m),$.enabled===!0&&$.isPresenting===!0){let st=b.xr.getDepthSensingMesh();st!==null&&Qr(st,N,-1/0,b.sortObjects)}Qr(S,N,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ot,ft),Jt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Jt&&St.addToRenderList(m,S),this.info.render.frame++,tt===!0&&Q.beginShadows();let H=p.state.shadowsArray;ct.render(H,S,N),tt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){let st=N.cameras;if(F.length>0)for(let ut=0,vt=st.length;ut<vt;ut++){let _t=st[ut];Nc(V,F,S,_t)}Jt&&St.render(S);for(let ut=0,vt=st.length;ut<vt;ut++){let _t=st[ut];Uc(m,S,_t,_t.viewport)}}else F.length>0&&Nc(V,F,S,N),Jt&&St.render(S),Uc(m,S,N);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(b,S,N),ie.resetDefaultState(),w=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],tt===!0&&Q.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Qr(S,N,H,V){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){V&&Wt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(gt);let ut=I.update(S),vt=S.material;vt.visible&&m.push(S,ut,vt,H,Wt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){let ut=I.update(S),vt=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Wt.copy(S.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Wt.copy(ut.boundingSphere.center)),Wt.applyMatrix4(S.matrixWorld).applyMatrix4(gt)),Array.isArray(vt)){let _t=ut.groups;for(let Dt=0,Ft=_t.length;Dt<Ft;Dt++){let bt=_t[Dt],ne=vt[bt.materialIndex];ne&&ne.visible&&m.push(S,ut,ne,H,Wt.z,bt)}}else vt.visible&&m.push(S,ut,vt,H,Wt.z,null)}}let st=S.children;for(let ut=0,vt=st.length;ut<vt;ut++)Qr(st[ut],N,H,V)}function Uc(S,N,H,V){let F=S.opaque,st=S.transmissive,ut=S.transparent;p.setupLightsView(H),tt===!0&&Q.setGlobalState(b.clippingPlanes,H),V&&kt.viewport(C.copy(V)),F.length>0&&da(F,N,H),st.length>0&&da(st,N,H),ut.length>0&&da(ut,N,H),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Nc(S,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new $i(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?js:Yi,minFilter:Wi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let st=p.state.transmissionRenderTarget[V.id],ut=V.viewport||C;st.setSize(ut.z,ut.w);let vt=b.getRenderTarget();b.setRenderTarget(st),b.getClearColor(K),J=b.getClearAlpha(),J<1&&b.setClearColor(16777215,.5),b.clear(),Jt&&St.render(H);let _t=b.toneMapping;b.toneMapping=fn;let Dt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),tt===!0&&Q.setGlobalState(b.clippingPlanes,V),da(S,H,V),T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let bt=0,ne=N.length;bt<ne;bt++){let ue=N[bt],me=ue.object,Ke=ue.geometry,se=ue.material,wt=ue.group;if(se.side===_i&&me.layers.test(V.layers)){let Ui=se.side;se.side=Be,se.needsUpdate=!0,Fc(me,H,V,Ke,se,wt),se.side=Ui,se.needsUpdate=!0,Ft=!0}}Ft===!0&&(T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st))}b.setRenderTarget(vt),b.setClearColor(K,J),Dt!==void 0&&(V.viewport=Dt),b.toneMapping=_t}function da(S,N,H){let V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,st=S.length;F<st;F++){let ut=S[F],vt=ut.object,_t=ut.geometry,Dt=V===null?ut.material:V,Ft=ut.group;vt.layers.test(H.layers)&&Fc(vt,N,H,_t,Dt,Ft)}}function Fc(S,N,H,V,F,st){S.onBeforeRender(b,N,H,V,F,st),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(b,N,H,V,S,st),F.transparent===!0&&F.side===_i&&F.forceSinglePass===!1?(F.side=Be,F.needsUpdate=!0,b.renderBufferDirect(H,N,V,F,S,st),F.side=dn,F.needsUpdate=!0,b.renderBufferDirect(H,N,V,F,S,st),F.side=_i):b.renderBufferDirect(H,N,V,F,S,st),S.onAfterRender(b,N,H,V,F,st)}function pa(S,N,H){N.isScene!==!0&&(N=pe);let V=At.get(S),F=p.state.lights,st=p.state.shadowsArray,ut=F.state.version,vt=q.getParameters(S,F.state,st,N,H),_t=q.getProgramCacheKey(vt),Dt=V.programs;V.environment=S.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(S.isMeshStandardMaterial?B:v).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Dt===void 0&&(S.addEventListener("dispose",Nt),Dt=new Map,V.programs=Dt);let Ft=Dt.get(_t);if(Ft!==void 0){if(V.currentProgram===Ft&&V.lightsStateVersion===ut)return Bc(S,vt),Ft}else vt.uniforms=q.getUniforms(S),S.onBeforeCompile(vt,b),Ft=q.acquireProgram(vt,_t),Dt.set(_t,Ft),V.uniforms=vt.uniforms;let bt=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(bt.clippingPlanes=Q.uniform),Bc(S,vt),V.needsLights=If(S),V.lightsStateVersion=ut,V.needsLights&&(bt.ambientLightColor.value=F.state.ambient,bt.lightProbe.value=F.state.probe,bt.directionalLights.value=F.state.directional,bt.directionalLightShadows.value=F.state.directionalShadow,bt.spotLights.value=F.state.spot,bt.spotLightShadows.value=F.state.spotShadow,bt.rectAreaLights.value=F.state.rectArea,bt.ltc_1.value=F.state.rectAreaLTC1,bt.ltc_2.value=F.state.rectAreaLTC2,bt.pointLights.value=F.state.point,bt.pointLightShadows.value=F.state.pointShadow,bt.hemisphereLights.value=F.state.hemi,bt.directionalShadowMap.value=F.state.directionalShadowMap,bt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,bt.spotShadowMap.value=F.state.spotShadowMap,bt.spotLightMatrix.value=F.state.spotLightMatrix,bt.spotLightMap.value=F.state.spotLightMap,bt.pointShadowMap.value=F.state.pointShadowMap,bt.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Ft,V.uniformsList=null,Ft}function Oc(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=cs.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Bc(S,N){let H=At.get(S);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Cf(S,N,H,V,F){N.isScene!==!0&&(N=pe),T.resetTextureUnits();let st=N.fog,ut=V.isMeshStandardMaterial?N.environment:null,vt=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ss,_t=(V.isMeshStandardMaterial?B:v).get(V.envMap||ut),Dt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ft=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),bt=!!H.morphAttributes.position,ne=!!H.morphAttributes.normal,ue=!!H.morphAttributes.color,me=fn;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(me=b.toneMapping);let Ke=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=Ke!==void 0?Ke.length:0,wt=At.get(V),Ui=p.state.lights;if(tt===!0&&(pt===!0||S!==M)){let li=S===M&&V.id===w;Q.setState(V,S,li)}let ae=!1;V.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Ui.state.version||wt.outputColorSpace!==vt||F.isBatchedMesh&&wt.batching===!1||!F.isBatchedMesh&&wt.batching===!0||F.isBatchedMesh&&wt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&wt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&wt.instancing===!1||!F.isInstancedMesh&&wt.instancing===!0||F.isSkinnedMesh&&wt.skinning===!1||!F.isSkinnedMesh&&wt.skinning===!0||F.isInstancedMesh&&wt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&wt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&wt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&wt.instancingMorph===!1&&F.morphTexture!==null||wt.envMap!==_t||V.fog===!0&&wt.fog!==st||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Q.numPlanes||wt.numIntersection!==Q.numIntersection)||wt.vertexAlphas!==Dt||wt.vertexTangents!==Ft||wt.morphTargets!==bt||wt.morphNormals!==ne||wt.morphColors!==ue||wt.toneMapping!==me||wt.morphTargetsCount!==se)&&(ae=!0):(ae=!0,wt.__version=V.version);let gi=wt.currentProgram;ae===!0&&(gi=pa(V,N,F));let Gn=!1,Je=!1,Ls=!1,ge=gi.getUniforms(),Ti=wt.uniforms;if(kt.useProgram(gi.program)&&(Gn=!0,Je=!0,Ls=!0),V.id!==w&&(w=V.id,Je=!0),Gn||M!==S){kt.buffers.depth.getReversed()?(at.copy(S.projectionMatrix),wd(at),Td(at),ge.setValue(U,"projectionMatrix",at)):ge.setValue(U,"projectionMatrix",S.projectionMatrix),ge.setValue(U,"viewMatrix",S.matrixWorldInverse);let en=ge.map.cameraPosition;en!==void 0&&en.setValue(U,Lt.setFromMatrixPosition(S.matrixWorld)),Yt.logarithmicDepthBuffer&&ge.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ge.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Je=!0,Ls=!0)}if(F.isSkinnedMesh){ge.setOptional(U,F,"bindMatrix"),ge.setOptional(U,F,"bindMatrixInverse");let li=F.skeleton;li&&(li.boneTexture===null&&li.computeBoneTexture(),ge.setValue(U,"boneTexture",li.boneTexture,T))}F.isBatchedMesh&&(ge.setOptional(U,F,"batchingTexture"),ge.setValue(U,"batchingTexture",F._matricesTexture,T),ge.setOptional(U,F,"batchingIdTexture"),ge.setValue(U,"batchingIdTexture",F._indirectTexture,T),ge.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&ge.setValue(U,"batchingColorTexture",F._colorsTexture,T));let Ds=H.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0)&&Ct.update(F,H,gi),(Je||wt.receiveShadow!==F.receiveShadow)&&(wt.receiveShadow=F.receiveShadow,ge.setValue(U,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ti.envMap.value=_t,Ti.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Ti.envMapIntensity.value=N.environmentIntensity),Je&&(ge.setValue(U,"toneMappingExposure",b.toneMappingExposure),wt.needsLights&&Pf(Ti,Ls),st&&V.fog===!0&&Z.refreshFogUniforms(Ti,st),Z.refreshMaterialUniforms(Ti,V,Y,it,p.state.transmissionRenderTarget[S.id]),cs.upload(U,Oc(wt),Ti,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(cs.upload(U,Oc(wt),Ti,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ge.setValue(U,"center",F.center),ge.setValue(U,"modelViewMatrix",F.modelViewMatrix),ge.setValue(U,"normalMatrix",F.normalMatrix),ge.setValue(U,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let li=V.uniformsGroups;for(let en=0,nn=li.length;en<nn;en++){let Hc=li[en];L.update(Hc,gi),L.bind(Hc,gi)}}return gi}function Pf(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function If(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,N,H){At.get(S.texture).__webglTexture=N,At.get(S.depthTexture).__webglTexture=H;let V=At.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){let H=At.get(S);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,H=0){P=S,E=N,A=H;let V=!0,F=null,st=!1,ut=!1;if(S){let _t=At.get(S);if(_t.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(U.FRAMEBUFFER,null),V=!1;else if(_t.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(_t.__hasExternalTextures)T.rebindTextures(S,At.get(S.texture).__webglTexture,At.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let bt=S.depthTexture;if(_t.__boundDepthTexture!==bt){if(bt!==null&&At.has(bt)&&(S.width!==bt.image.width||S.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}let Dt=S.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ut=!0);let Ft=At.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?F=Ft[N][H]:F=Ft[N],st=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?F=At.get(S).__webglMultisampledFramebuffer:Array.isArray(Ft)?F=Ft[H]:F=Ft,C.copy(S.viewport),G.copy(S.scissor),O=S.scissorTest}else C.copy(xt).multiplyScalar(Y).floor(),G.copy(zt).multiplyScalar(Y).floor(),O=Mt;if(kt.bindFramebuffer(U.FRAMEBUFFER,F)&&V&&kt.drawBuffers(S,F),kt.viewport(C),kt.scissor(G),kt.setScissorTest(O),st){let _t=At.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,_t.__webglTexture,H)}else if(ut){let _t=At.get(S.texture),Dt=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,_t.__webglTexture,H||0,Dt)}w=-1},this.readRenderTargetPixels=function(S,N,H,V,F,st,ut){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=At.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){kt.bindFramebuffer(U.FRAMEBUFFER,vt);try{let _t=S.texture,Dt=_t.format,Ft=_t.type;if(!Yt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-V&&H>=0&&H<=S.height-F&&U.readPixels(N,H,V,F,Ut.convert(Dt),Ut.convert(Ft),st)}finally{let _t=P!==null?At.get(P).__webglFramebuffer:null;kt.bindFramebuffer(U.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(S,N,H,V,F,st,ut){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=At.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){let _t=S.texture,Dt=_t.format,Ft=_t.type;if(!Yt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-V&&H>=0&&H<=S.height-F){kt.bindFramebuffer(U.FRAMEBUFFER,vt);let bt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,bt),U.bufferData(U.PIXEL_PACK_BUFFER,st.byteLength,U.STREAM_READ),U.readPixels(N,H,V,F,Ut.convert(Dt),Ut.convert(Ft),0);let ne=P!==null?At.get(P).__webglFramebuffer:null;kt.bindFramebuffer(U.FRAMEBUFFER,ne);let ue=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Sd(U,ue,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,bt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,st),U.deleteBuffer(bt),U.deleteSync(ue),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,N=null,H=0){S.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);let V=Math.pow(2,-H),F=Math.floor(S.image.width*V),st=Math.floor(S.image.height*V),ut=N!==null?N.x:0,vt=N!==null?N.y:0;T.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,ut,vt,F,st),kt.unbindTexture()},this.copyTextureToTexture=function(S,N,H=null,V=null,F=0){S.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],N=arguments[2],F=arguments[3]||0,H=null);let st,ut,vt,_t,Dt,Ft,bt,ne,ue,me=S.isCompressedTexture?S.mipmaps[F]:S.image;H!==null?(st=H.max.x-H.min.x,ut=H.max.y-H.min.y,vt=H.isBox3?H.max.z-H.min.z:1,_t=H.min.x,Dt=H.min.y,Ft=H.isBox3?H.min.z:0):(st=me.width,ut=me.height,vt=me.depth||1,_t=0,Dt=0,Ft=0),V!==null?(bt=V.x,ne=V.y,ue=V.z):(bt=0,ne=0,ue=0);let Ke=Ut.convert(N.format),se=Ut.convert(N.type),wt;N.isData3DTexture?(T.setTexture3D(N,0),wt=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),wt=U.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),wt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);let Ui=U.getParameter(U.UNPACK_ROW_LENGTH),ae=U.getParameter(U.UNPACK_IMAGE_HEIGHT),gi=U.getParameter(U.UNPACK_SKIP_PIXELS),Gn=U.getParameter(U.UNPACK_SKIP_ROWS),Je=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,me.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,me.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_t),U.pixelStorei(U.UNPACK_SKIP_ROWS,Dt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ft);let Ls=S.isDataArrayTexture||S.isData3DTexture,ge=N.isDataArrayTexture||N.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Ti=At.get(S),Ds=At.get(N),li=At.get(Ti.__renderTarget),en=At.get(Ds.__renderTarget);kt.bindFramebuffer(U.READ_FRAMEBUFFER,li.__webglFramebuffer),kt.bindFramebuffer(U.DRAW_FRAMEBUFFER,en.__webglFramebuffer);for(let nn=0;nn<vt;nn++)Ls&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.get(S).__webglTexture,F,Ft+nn),S.isDepthTexture?(ge&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.get(N).__webglTexture,F,ue+nn),U.blitFramebuffer(_t,Dt,st,ut,bt,ne,st,ut,U.DEPTH_BUFFER_BIT,U.NEAREST)):ge?U.copyTexSubImage3D(wt,F,bt,ne,ue+nn,_t,Dt,st,ut):U.copyTexSubImage2D(wt,F,bt,ne,ue+nn,_t,Dt,st,ut);kt.bindFramebuffer(U.READ_FRAMEBUFFER,null),kt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ge?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(wt,F,bt,ne,ue,st,ut,vt,Ke,se,me.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(wt,F,bt,ne,ue,st,ut,vt,Ke,me.data):U.texSubImage3D(wt,F,bt,ne,ue,st,ut,vt,Ke,se,me):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,bt,ne,st,ut,Ke,se,me.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,bt,ne,me.width,me.height,Ke,me.data):U.texSubImage2D(U.TEXTURE_2D,F,bt,ne,st,ut,Ke,se,me);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ui),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae),U.pixelStorei(U.UNPACK_SKIP_PIXELS,gi),U.pixelStorei(U.UNPACK_SKIP_ROWS,Gn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Je),F===0&&N.generateMipmaps&&U.generateMipmap(wt),kt.unbindTexture()},this.copyTextureToTexture3D=function(S,N,H=null,V=null,F=0){return S.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,S=arguments[2],N=arguments[3],F=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,N,H,V,F)},this.initRenderTarget=function(S){At.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),kt.unbindTexture()},this.resetState=function(){E=0,A=0,P=null,kt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var ar=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},rr=class extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Gh=new z,Wh=new ye,Xh=new ye,vy=new z,Kh=new Xt,Ua=new z,Co=new ki,Yh=new Xt,Po=new Ys,or=class extends Et{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kc,this.bindMatrix=new Xt,this.bindMatrixInverse=new Xt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ri),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Ua),this.boundingBox.expandByPoint(Ua)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ki),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Ua),this.boundingSphere.expandByPoint(Ua)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Co.copy(this.boundingSphere),Co.applyMatrix4(s),t.ray.intersectsSphere(Co)!==!1&&(Yh.copy(s).invert(),Po.copy(t.ray).applyMatrix4(Yh),!(this.boundingBox!==null&&Po.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Po)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ye,e=this.geometry.attributes.skinWeight;for(let i=0,s=e.count;i<s;i++){t.fromBufferAttribute(e,i);let a=1/t.manhattanLength();a!==1/0?t.multiplyScalar(a):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Kc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,s=this.geometry;Wh.fromBufferAttribute(s.attributes.skinIndex,t),Xh.fromBufferAttribute(s.attributes.skinWeight,t),Gh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let a=0;a<4;a++){let r=Xh.getComponent(a);if(r!==0){let o=Wh.getComponent(a);Kh.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(vy.copy(Gh).applyMatrix4(Kh),r)}}return e.applyMatrix4(this.bindMatrixInverse)}},qs=class extends Me{constructor(){super(),this.isBone=!0,this.type="Bone"}},lr=class extends qe{constructor(t=null,e=1,i=1,s,a,r,o,c,l=ti,h=ti,u,d){super(null,r,o,c,l,h,s,a,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$h=new Xt,_y=new Xt,cr=class n{constructor(t=[],e=[]){this.uuid=ws(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Xt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new Xt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,r=t.length;a<r;a++){let o=t[a]?t[a].matrixWorld:_y;$h.multiplyMatrices(o,e[a]),$h.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new lr(e,t,t,hi,bi);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,s=t.bones.length;i<s;i++){let a=t.bones[i],r=e[a];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),r=new qs),this.bones.push(r),this.boneInverses.push(new Xt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let s=0,a=e.length;s<a;s++){let r=e[s];t.bones.push(r.uuid);let o=i[s];t.boneInverses.push(o.toArray())}return t}},Zs=class extends Xe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ss=new Xt,qh=new Xt,Na=[],Zh=new Ri,by=new Xt,Bs=new Et,Hs=new ki,Js=class extends Et{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,by)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ss),Zh.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(Zh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ss),Hs.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=t*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(i),t.ray.intersectsSphere(Hs)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,ss),qh.multiplyMatrices(i,ss),Bs.matrixWorld=qh,Bs.raycast(t,Na);for(let r=0,o=Na.length;r<o;r++){let c=Na[r];c.instanceId=a,c.object=this,e.push(c)}Na.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new lr(new Float32Array(s*this.count),s,this.count,jl,bi));let a=this.morphTexture.source.data.data,r=0;for(let l=0;l<i.length;l++)r+=i[l];let o=this.geometry.morphTargetsRelative?1:1-r,c=s*t;a[c]=o,a.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var hr=class extends mn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ur=new z,fr=new z,Jh=new Xt,Vs=new Ys,Fa=new ki,Io=new z,Qh=new z,dr=class extends Me{constructor(t=new He,e=new hr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,a=e.count;s<a;s++)ur.fromBufferAttribute(e,s-1),fr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ur.distanceTo(fr);t.setAttribute("lineDistance",new xe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=a,t.ray.intersectsSphere(Fa)===!1)return;Jh.copy(s).invert(),Vs.copy(t.ray).applyMatrix4(Jh);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let y=f,m=g-1;y<m;y+=l){let p=h.getX(y),x=h.getX(y+1),_=Oa(this,t,Vs,c,p,x);_&&e.push(_)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=Oa(this,t,Vs,c,y,m);p&&e.push(p)}}else{let f=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let y=f,m=g-1;y<m;y+=l){let p=Oa(this,t,Vs,c,y,y+1);p&&e.push(p)}if(this.isLineLoop){let y=Oa(this,t,Vs,c,g-1,f);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function Oa(n,t,e,i,s,a){let r=n.geometry.attributes.position;if(ur.fromBufferAttribute(r,s),fr.fromBufferAttribute(r,a),e.distanceSqToSegment(ur,fr,Io,Qh)>i)return;Io.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Io);if(!(c<t.near||c>t.far))return{distance:c,point:Qh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var gn=class extends qe{constructor(t,e,i,s,a,r,o,c,l){super(t,e,i,s,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xs=class n extends He{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let a=[],r=[],o=[],c=[],l=new z,h=new ee;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(o,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ze=class n extends He{constructor(t=1,e=1,i=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),a=Math.floor(a);let h=[],u=[],d=[],f=[],g=0,y=[],m=i/2,p=0;x(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(f,2));function x(){let b=new z,R=new z,E=0,A=(e-t)/i;for(let P=0;P<=a;P++){let w=[],M=P/a,C=M*(e-t)+t;for(let G=0;G<=s;G++){let O=G/s,K=O*c+o,J=Math.sin(K),W=Math.cos(K);R.x=C*J,R.y=-M*i+m,R.z=C*W,u.push(R.x,R.y,R.z),b.set(J,A,W).normalize(),d.push(b.x,b.y,b.z),f.push(O,1-M),w.push(g++)}y.push(w)}for(let P=0;P<s;P++)for(let w=0;w<a;w++){let M=y[w][P],C=y[w+1][P],G=y[w+1][P+1],O=y[w][P+1];(t>0||w!==0)&&(h.push(M,C,O),E+=3),(e>0||w!==a-1)&&(h.push(C,G,O),E+=3)}l.addGroup(p,E,0),p+=E}function _(b){let R=g,E=new ee,A=new z,P=0,w=b===!0?t:e,M=b===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let C=g;for(let G=0;G<=s;G++){let K=G/s*c+o,J=Math.cos(K),W=Math.sin(K);A.x=w*W,A.y=m*M,A.z=w*J,u.push(A.x,A.y,A.z),d.push(0,M,0),E.x=J*.5+.5,E.y=W*.5*M+.5,f.push(E.x,E.y),g++}for(let G=0;G<s;G++){let O=R+G,K=C+G;b===!0?h.push(K,K+1,O):h.push(K+1,K,O),P+=3}l.addGroup(p,P,b===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vs=class n extends Ze{constructor(t=1,e=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var _s=class n extends He{constructor(t=.5,e=1,i=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new z,g=new ee;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let p=a+m/i*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<s;y++){let m=y*(i+1);for(let p=0;p<i;p++){let x=p+m,_=x,b=x+i+1,R=x+i+2,E=x+1;o.push(_,b,E),o.push(b,R,E)}}this.setIndex(o),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var bs=class n extends He{constructor(t=1,e=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(r+o,Math.PI),l=0,h=[],u=new z,d=new z,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let x=[],_=p/i,b=0;p===0&&r===0?b=.5/e:p===i&&c===Math.PI&&(b=-.5/e);for(let R=0;R<=e;R++){let E=R/e;u.x=-t*Math.cos(s+E*a)*Math.sin(r+_*o),u.y=t*Math.cos(r+_*o),u.z=t*Math.sin(s+E*a)*Math.sin(r+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(E+b,1-_),x.push(l++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<e;x++){let _=h[p][x+1],b=h[p][x],R=h[p+1][x],E=h[p+1][x+1];(p!==0||r>0)&&f.push(_,b,E),(p!==i-1||c<Math.PI)&&f.push(b,R,E)}this.setIndex(f),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(y,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var fe=class extends mn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fu,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var pr=class extends hr{static get type(){return"LineDashedMaterial"}constructor(t){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Ba(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function My(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ms=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],a=e[i-1];i:{t:{let r;e:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=e[++i],t<s)break t}r=e.length;break e}if(!(t>=a)){let o=e[1];t<o&&(i=2,a=o);for(let c=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=a,a=e[--i-1],t>=a)break t}r=i,i=0;break e}break i}for(;i<r;){let o=i+r>>>1;t<e[o]?r=o:i=o+1}if(s=e[i],a=e[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)e[r]=i[a+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ul=class extends Ms{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yc,endingEnd:Yc}}intervalChanged_(t,e,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],c=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case $c:a=t,o=2*e-i;break;case qc:a=s.length-2,o=e+s[a]-s[a+1];break;default:a=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case $c:r=t,c=2*i-e;break;case qc:r=1,c=i+s[1]-s[0];break;default:r=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,e,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,x=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*y+.5*g,b=f*m-f*y;for(let R=0;R!==o;++R)a[R]=p*r[h+R]+x*r[l+R]+_*r[c+R]+b*r[u+R];return a}},Nl=class extends Ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)a[d]=r[l+d]*u+r[c+d]*h;return a}},Fl=class extends Ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Si=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ba(e,this.TimeBufferType),this.values=Ba(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ba(t.times,Array),values:Ba(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ul(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ka:e=this.InterpolantFactoryMethodDiscrete;break;case xl:e=this.InterpolantFactoryMethodLinear;break;case to:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ka;case this.InterpolantFactoryMethodLinear:return xl;case this.InterpolantFactoryMethodSmooth:return to}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>e;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,r),t=!1;break}r=c}if(s!==void 0&&My(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===to,a=t.length-1,r=1;for(let o=1;o<a;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[f+g]){c=!0;break}}}if(c){if(o!==r){t[r]=t[o];let u=o*i,d=r*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,c=r*i,l=0;l!==i;++l)e[c+l]=e[o+l];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=xl;var Dn=class extends Si{constructor(t,e,i){super(t,e,i)}};Dn.prototype.ValueTypeName="bool";Dn.prototype.ValueBufferType=Array;Dn.prototype.DefaultInterpolation=Ka;Dn.prototype.InterpolantFactoryMethodLinear=void 0;Dn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ol=class extends Si{};Ol.prototype.ValueTypeName="color";var Bl=class extends Si{};Bl.prototype.ValueTypeName="number";var Hl=class extends Ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)ei.slerpFlat(a,0,r,l-o,r,l,c);return a}},mr=class extends Si{InterpolantFactoryMethodLinear(t){return new Hl(this.times,this.values,this.getValueSize(),t)}};mr.prototype.ValueTypeName="quaternion";mr.prototype.InterpolantFactoryMethodSmooth=void 0;var zn=class extends Si{constructor(t,e,i){super(t,e,i)}};zn.prototype.ValueTypeName="string";zn.prototype.ValueBufferType=Array;zn.prototype.DefaultInterpolation=Ka;zn.prototype.InterpolantFactoryMethodLinear=void 0;zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends Si{};Vl.prototype.ValueTypeName="vector";var Gl=class{constructor(t,e,i){let s=this,a=!1,r=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Sy=new Gl,Wl=class{constructor(t){this.manager=t!==void 0?t:Sy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,a){i.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Wl.DEFAULT_MATERIAL_NAME="__DEFAULT";var gr=class extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},yr=class extends gr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Lo=new Xt,jh=new z,tu=new z,Xl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(jh),tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tu),e.updateMatrixWorld(),Lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Kl=class extends Xl{constructor(){super(new er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qs=class extends gr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Kl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var sc="\\[\\]\\.:\\/",wy=new RegExp("["+sc+"]","g"),ac="[^"+sc+"]",Ty="[^"+sc.replace("\\.","")+"]",Ey=/((?:WC+[\/:])*)/.source.replace("WC",ac),Ay=/(WCOD+)?/.source.replace("WCOD",Ty),Ry=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ac),ky=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ac),Cy=new RegExp("^"+Ey+Ay+Ry+ky+"$"),Py=["material","materials","bones","map"],Yl=class{constructor(t,e,i){let s=i||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ve=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wy,"")}static parseTrackName(t){let e=Cy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);Py.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,a=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[s];if(r===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=Yl;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$l);var Pt={half:50,halfW:34,dead:58,postGap:2.75,crossbar:3,postH:14},Un=1/60,ta=.75,br=9.81,ni={radius:.13,drag:.0052,windMul:1.7};var Mr={FB:"Fullback",WG:"Winger",CE:"Centre",FE:"Five-eighth",HB:"Halfback",PR:"Prop",HK:"Hooker",SR:"Second Row",LK:"Lock"},Mu=new Set([8,9,10,11,12,13]),Pe={punt:{label:"PUNT",elev:.66,vMin:15,vMax:29,curve:.9,spin:"spiral"},bomb:{label:"BOMB",elev:1.1,vMin:13,vMax:24,curve:.5,spin:"endover"},grubber:{label:"GRUBBER",elev:.06,vMin:7,vMax:19,curve:0,spin:"grubber"},chip:{label:"CHIP",elev:.88,vMin:7,vMax:15,curve:.3,spin:"endover"},fieldgoal:{label:"FIELD GOAL",elev:.5,vMin:16,vMax:28,curve:1.1,spin:"endover"},goal:{label:"GOAL KICK",elev:.56,vMin:17,vMax:31,curve:1.2,spin:"endover"},kickoff:{label:"KICK-OFF",elev:.8,vMin:15,vMax:28,curve:.8,spin:"endover"},shortko:{label:"SHORT KO",elev:.78,vMin:9,vMax:15,curve:.4,spin:"endover"},touch:{label:"FIND TOUCH",elev:.58,vMin:16,vMax:30,curve:.9,spin:"spiral"},dropout:{label:"DROP-OUT",elev:.74,vMin:15,vMax:28,curve:.6,spin:"endover"}};var rc={easy:{cpuTackle:-.14,humanTackle:.1,cpuReact:.42,cpuEvade:.45,cpuPassErr:1.6,cpuKickErr:1.8,lineSpeed:.78,humanCatch:.08},normal:{cpuTackle:0,humanTackle:.03,cpuReact:.26,cpuEvade:.75,cpuPassErr:1,cpuKickErr:1,lineSpeed:.9,humanCatch:.03},hard:{cpuTackle:.07,humanTackle:0,cpuReact:.14,cpuEvade:1,cpuPassErr:.7,cpuKickErr:.65,lineSpeed:1,humanCatch:0}},oc={calm:{min:0,max:1.5,gust:.1},breezy:{min:2.5,max:5,gust:.25},gusty:{min:5.5,max:9,gust:.45}},lc=["#f1c9a5","#e0ac82","#c68a5e","#a36a42","#7a4a2c","#5a3520","#d9a47a","#8d5a3a"],cc=["#1a1209","#2b1a0d","#4a2c14","#7a5229","#c9a25a","#0d0d0d","#5e3a1c","#3a2a1a"];var et=(n,t,e)=>n<t?t:n>e?e:n,Zt=(n,t,e)=>n+(t-n)*e,si=(n,t,e,i)=>Zt(n,t,1-Math.exp(-e*i));var ai=n=>(n=et(n,0,1),n*n*(3-2*n));function yn(n){for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return n}function As(n,t,e,i){return n+yn(t-n)*(1-Math.exp(-e*i))}var Tt=(n,t)=>Math.atan2(n,t);var qt=(n,t,e,i)=>Math.hypot(n-e,t-i),Es=(Date.now()^1540483477)>>>0;function Su(n){Es=n>>>0||1}function Gt(){Es=Es+1831565813|0;let n=Math.imul(Es^Es>>>15,1|Es);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}var yt=(n,t)=>n+(t-n)*Gt();var Bt=n=>Gt()<n,Zi=n=>n[Math.floor(Gt()*n.length)];function Le(){let n=0,t=0;for(;n===0;)n=Gt();for(;t===0;)t=Gt();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*t)}var xn={up:["KeyW"],down:["KeyS"],left:["KeyA"],right:["KeyD"],rsUp:["ArrowUp"],rsDown:["ArrowDown"],rsLeft:["ArrowLeft"],rsRight:["ArrowRight"],sprint:["ShiftLeft","ShiftRight"],passL:["KeyQ"],passR:["KeyE"],faceA:["KeyK"],faceB:["KeyL"],faceX:["KeyJ"],faceY:["KeyI"],fieldGoal:["KeyU"],kickMod:["Space"],foot:["KeyV"],k1:["Digit1"],k2:["Digit2"],k3:["Digit3"],camera:["KeyC"],pause:["Escape","KeyP"],help:["KeyH"],confirm:["Enter","NumpadEnter"],menuUp:["KeyW","ArrowUp"],menuDown:["KeyS","ArrowDown"],menuLeft:["KeyA","ArrowLeft"],menuRight:["KeyD","ArrowRight"]},hc={faceA:[0],faceB:[1],faceX:[2],faceY:[3],passL:[4],passR:[5],kickMod:[6],sprint:[7],camera:[8],pause:[9],fieldGoal:[11],foot:[12],menuUp:[12],menuDown:[13],menuLeft:[14],menuRight:[15],confirm:[0],back:[1]},wr={rsLeft:[2,-1],rsRight:[2,1],rsUp:[3,-1],rsDown:[3,1]},Sr=[...new Set([...Object.keys(xn),...Object.keys(hc),...Object.keys(wr),"back","cutL","cutR"])],Tr=class{constructor(){this.keys=new Set,this.tapped=new Set,this.state={},this.prev={},this.holdT={},this.lastHold={},this.move={x:0,y:0},this.usingPad=!1,this.usingTouch=!1,this.virt={},this.virtTap=new Set,this.virtStick={x:0,y:0,active:!1},this.enabled=!0;for(let e of Sr)this.state[e]=!1,this.prev[e]=!1,this.holdT[e]=0,this.lastHold[e]=0;this._pressed={},this._released={},this._dbl={},this.lastPress={},this.clock=0;let t=new Set(Object.values(xn).flat());window.addEventListener("keydown",e=>{t.has(e.code)&&!(e.target&&/INPUT|SELECT|TEXTAREA/.test(e.target.tagName))&&e.preventDefault(),e.repeat||this.tapped.add(e.code),this.keys.add(e.code),this.usingPad=!1,this.usingTouch=!1}),window.addEventListener("keyup",e=>{this.keys.delete(e.code)}),window.addEventListener("blur",()=>{this.keys.clear()})}_pad(){let t=navigator.getGamepads?navigator.getGamepads():[];for(let e of t)if(e&&e.connected&&e.buttons.length>=16)return e;return null}poll(t){let e=this._pad(),i=0,s=0,a=l=>xn[l]&&xn[l].some(h=>this.keys.has(h)||this.tapped.has(h)),r=l=>xn[l]&&xn[l].some(h=>this.keys.has(h));r("left")&&(i-=1),r("right")&&(i+=1),r("up")&&(s+=1),r("down")&&(s-=1);let o=l=>e&&(hc[l]&&hc[l].some(h=>e.buttons[h]&&(e.buttons[h].pressed||e.buttons[h].value>.5))||wr[l]&&(e.axes[wr[l][0]]||0)*wr[l][1]>.55);if(e){let l=e.axes[0]||0,h=e.axes[1]||0,u=Math.hypot(l,h);if(u>.22){let d=Math.min(1,(u-.22)/.7)/u;i=l*d,s=-h*d,this.usingPad=!0}e.buttons.some(d=>d.pressed)&&(this.usingPad=!0)}this.virtStick.active&&(i=this.virtStick.x,s=this.virtStick.y);let c=Math.hypot(i,s);c>1&&(i/=c,s/=c),this.move.x=i,this.move.y=s,this.clock+=t;for(let l of Sr){this.prev[l]=this.state[l];let h=xn[l]&&xn[l].some(d=>this.tapped.has(d))||this.virtTap.has(l),u=!!(r(l)||o(l)||this.virt[l]);this.state[l]=u,this._pressed[l]=u&&!this.prev[l]||h&&!this.prev[l],this._released[l]=!u&&this.prev[l]||h&&!u,this._dbl[l]=!1,this._pressed[l]&&(this._dbl[l]=this.clock-(this.lastPress[l]??-9)<.3,this.lastPress[l]=this.clock),u&&(this.holdT[l]+=t),this._released[l]&&(this.lastHold[l]=this.holdT[l],this.holdT[l]=0),!u&&!this._released[l]&&(this.holdT[l]=0)}if(this.tapped.clear(),this.virtTap.clear(),!this.enabled){for(let l of Sr)this._pressed[l]=!1;this.move.x=this.move.y=0}}held(t){return this.enabled&&!!this.state[t]}pressed(t){return!!this._pressed[t]}released(t){return this.enabled&&!!this._released[t]}holdTime(t){return this.holdT[t]}doubleTapped(t){return!!this._dbl[t]}releasedHold(t){return this.lastHold[t]}clearEdges(){for(let t of Sr)this._pressed[t]=!1,this._released[t]=!1}};var Er=class{constructor(){this.ctx=null,this.master=null,this.crowdGain=null,this.excite=0,this.muted=!1}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.7,this.master.connect(this.ctx.destination);let e=this.ctx.sampleRate*2;this.noise=this.ctx.createBuffer(1,e,this.ctx.sampleRate);let i=this.noise.getChannelData(0),s=0;for(let a=0;a<e;a++){let r=Math.random()*2-1;s=.97*s+.03*r,i[a]=r*.5+s*2.5}this._startCrowd()}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.7)}_startCrowd(){let t=this.ctx,e=t.createBufferSource();e.buffer=this.noise,e.loop=!0;let i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=700,i.Q.value=.6;let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=2400,this.crowdGain=t.createGain(),this.crowdGain.gain.value=.05,e.connect(i),i.connect(s),s.connect(this.crowdGain),this.crowdGain.connect(this.master),e.start(),this.crowdFilter=i}update(t,e){if(!this.ctx)return;this.excite+=(e-this.excite)*Math.min(1,t*1.5);let i=this.ctx.currentTime;this.crowdGain.gain.setTargetAtTime(.045+this.excite*.16,i,.25),this.crowdFilter.frequency.setTargetAtTime(600+this.excite*700,i,.3)}_env(t,e,i,s,a){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(s,e+i),t.gain.exponentialRampToValueAtTime(1e-4,e+i+a)}whistle(t=!1){if(!this.ctx)return;let e=this.ctx,i=e.currentTime,s=t?.9:.35,a=e.createGain();a.connect(this.master),a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(.22,i+.02),a.gain.setValueAtTime(.22,i+s-.05),a.gain.exponentialRampToValueAtTime(1e-4,i+s);let r=e.createOscillator();r.frequency.value=38;let o=e.createGain();o.gain.value=120,r.connect(o);for(let c of[2750,2890]){let l=e.createOscillator();l.type="sine",l.frequency.value=c,o.connect(l.frequency),l.connect(a),l.start(i),l.stop(i+s)}r.start(i),r.stop(i+s)}hooter(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,i=t.createGain();i.connect(this.master),this._env(i,e,.05,.18,1.6);let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=900,s.connect(i);for(let a of[220,221.5,330]){let r=t.createOscillator();r.type="sawtooth",r.frequency.value=a,r.connect(s),r.start(e),r.stop(e+1.7)}}thud(t=1){if(!this.ctx)return;let e=this.ctx,i=e.currentTime,s=e.createGain();s.connect(this.master),this._env(s,i,.005,.35*t,.25);let a=e.createOscillator();a.type="sine",a.frequency.setValueAtTime(110,i),a.frequency.exponentialRampToValueAtTime(45,i+.2),a.connect(s),a.start(i),a.stop(i+.3);let r=e.createBufferSource();r.buffer=this.noise;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=380;let c=e.createGain();this._env(c,i,.003,.5*t,.12),r.connect(o),o.connect(c),c.connect(this.master),r.start(i,Math.random()),r.stop(i+.2)}kick(t=1){if(!this.ctx)return;let e=this.ctx,i=e.currentTime,s=e.createGain();s.connect(this.master),this._env(s,i,.002,.4*(.5+t*.5),.12);let a=e.createOscillator();a.type="triangle",a.frequency.setValueAtTime(180,i),a.frequency.exponentialRampToValueAtTime(70,i+.1),a.connect(s),a.start(i),a.stop(i+.15);let r=e.createBufferSource();r.buffer=this.noise;let o=e.createBiquadFilter();o.type="highpass",o.frequency.value=1500;let c=e.createGain();this._env(c,i,.001,.25,.05),r.connect(o),o.connect(c),c.connect(this.master),r.start(i,Math.random()),r.stop(i+.08)}catchBall(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,i=t.createGain();i.connect(this.master),this._env(i,e,.002,.12,.06);let s=t.createOscillator();s.type="sine",s.frequency.setValueAtTime(320,e),s.frequency.exponentialRampToValueAtTime(160,e+.06),s.connect(i),s.start(e),s.stop(e+.1)}roar(t=1,e=!1){if(!this.ctx)return;let i=this.ctx,s=i.currentTime,a=i.createBufferSource();a.buffer=this.noise,a.loop=!0;let r=i.createBiquadFilter();r.type="bandpass",r.frequency.value=e?330:900,r.Q.value=.5;let o=i.createGain();o.gain.setValueAtTime(1e-4,s),o.gain.exponentialRampToValueAtTime(.32*t,s+.35),o.gain.exponentialRampToValueAtTime(1e-4,s+(e?1.4:3.2)),a.connect(r),r.connect(o),o.connect(this.master),a.start(s,Math.random()),a.stop(s+3.4)}ui(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,i=t.createGain();i.connect(this.master),this._env(i,e,.002,.08,.05);let s=t.createOscillator();s.type="square",s.frequency.value=660,s.connect(i),s.start(e),s.stop(e+.07)}};function Rs(n,t,e){let i=n.v,s=n.p,a=Math.min(1,.35+s.y/10),r=e.x*ni.windMul*a,o=e.z*ni.windMul*a,c=i.x-r,l=i.y,h=i.z-o,u=Math.hypot(c,l,h),d=(n.drag??1)*ni.drag*u,f=-d*c,g=-br-d*l,y=-d*h;if(n.curve){let m=Math.hypot(i.x,i.z);if(m>.5){let p=i.x/m,x=i.z/m,_=n.curve*Math.min(1,m/18);f+=x*_,y+=-p*_}n.curve*=Math.exp(-.25*t)}i.x+=f*t,i.y+=g*t,i.z+=y*t,s.x+=i.x*t,s.y+=i.y*t,s.z+=i.z*t}function Rr(n,t,e,i,s=1,a=1.5,r=8){let o={p:{...n},v:{...t},curve:e,drag:s},c=1/60,l=0,h=null;for(;l<r;)if(Rs(o,c,i),l+=c,!h&&o.v.y<0&&o.p.y<=a&&(h={x:o.p.x,y:o.p.y,z:o.p.z,t:l}),o.p.y<=ni.radius)return{catchPt:h||{x:o.p.x,y:o.p.y,z:o.p.z,t:l},land:{x:o.p.x,z:o.p.z,t:l},vLand:{...o.v}};return{catchPt:h||{...o.p,t:l},land:{x:o.p.x,z:o.p.z,t:l},vLand:{...o.v}}}var wu={};function Ar(n,t,e,i=n.elev){let s=t+":"+i.toFixed(3),a=wu[s];if(!a){a=[];for(let c=0;c<=20;c++){let l=n.vMin+(n.vMax-n.vMin)*(c/20),h=Rr({x:0,y:.5,z:0},{x:Math.cos(i)*l,y:Math.sin(i)*l,z:0},0,{x:0,z:0});a.push(h.land.x)}wu[s]=a}let r=Math.max(0,Math.min(1,e))*20,o=Math.min(19,Math.floor(r));return a[o]+(a[o+1]-a[o])*(r-o)}function Ji(n,t,e,i=n.elev){let s=0,a=1;if(Ar(n,t,1,i)<e)return 1;for(let r=0;r<18;r++){let o=(s+a)/2;Ar(n,t,o,i)<e?s=o:a=o}return(s+a)/2}function uc(n,t){let e=!1;for(let i of[-Pt.half,Pt.half])if(!(Math.abs(n.x-i)>1.2)){for(let s of[-Pt.postGap,Pt.postGap]){if(n.y>Pt.postH)continue;let a=n.x-i,r=n.z-s,o=Math.hypot(a,r),c=(n.y<2?.26:.08)+ni.radius*.8;if(o<c&&o>1e-4){let l=a/o,h=r/o,u=t.x*l+t.z*h;u<0&&(t.x-=1.55*u*l,t.z-=1.55*u*h,t.x*=.85,t.z*=.85,e=!0),n.x=i+l*c,n.z=s+h*c}}if(Math.abs(n.z)<Pt.postGap){let s=n.x-i,a=n.y-Pt.crossbar,r=Math.hypot(s,a),o=.07+ni.radius*.8;if(r<o&&r>1e-4){let c=s/r,l=a/r,h=t.x*c+t.y*l;h<0&&(t.x-=1.5*h*c,t.y-=1.5*h*l,e=!0),n.x=i+c*o,n.y=Pt.crossbar+l*o}}}return e}var he=Pt.half,Ve=Pt.halfW;function Pi(n,t,e){let i=t.team,s=i.dir,a=[];for(let r of i.players){if(r===t||!r.isUpright()||r.state==="ptb"||r.state==="kick")continue;let o=(r.p.z-t.p.z)*s*e,c=(t.p.x-r.p.x)*s;o<1.2||o>32||c<-2.5||c>22||a.push({q:r,lat:o,behind:c,dist:Math.hypot(o,c)})}return a.sort((r,o)=>r.lat-o.lat),a}function fc(n,t,e,i){let s=Pi(n,t,e);return s.length?i&&s.length>1?s[1].q:s[0].q:null}var Tu=.1;function Nn(n,t,e,i={}){if(!e||n.ball.carrier!==t||t.pendingPass)return!1;if(i.offload||i.instant||t.state==="tackled")return ku(n,t,e,i);let s=(e.p.x-t.p.x)*t.right.x+(e.p.z-t.p.z)*t.right.z;return t.pendingPass={q:e,o:i,t:Tu,dur:Tu,side:s>0?-1:1},e.ai.dummyHalf=!1,e.ai.plan=null,!0}function Ru(n,t){for(let e of n.players){let i=e.pendingPass;if(i){if(i.t-=t,n.ball.carrier!==e||n.ball.state!=="held"||e.state==="ground"||e.state==="getup"){e.pendingPass=null;continue}i.t<=0&&(e.pendingPass=null,i.q.isUpright()&&ku(n,e,i.q,{...i.o,afterWindup:!0}))}}}function ku(n,t,e,i={}){let s=n.ball;if(!e||s.carrier!==t)return!1;let a=t.team,r=t.fwd,o=t.p.x+r.x*.15,c=1.1,l=t.p.z+r.z*.15,h=i.offload?9.5:12.5+t.attr.pass*.07+(i.long?3:0)+(i.flat?2.5:-.5),u=Math.hypot(e.p.x-o,e.p.z-l)/h,d=e.p.x,f=e.p.z;for(let P=0;P<4;P++)d=e.p.x+e.v.x*u*.92,f=e.p.z+e.v.z*u*.92,u=Math.hypot(d-o,f-l)/h;u=et(u,.12,1.7);let g=a.dir,y=Math.hypot(e.v.x,e.v.z);if(i.flat&&!i.offload){y>1&&(d+=e.v.x/y*1,f+=e.v.z/y*1);let P=(d-o-t.v.x*u)*g;P>.5&&(d-=(P-.5)*g)}else i.offload||(d-=g*1.2);let m=Math.hypot(d-o,f-l),p=(1-t.attr.pass/100)*.07+m*.0018+(i.offload?.07:0)+(t.state==="tackled"?.04:0)+(i.long?.015:0);a.human?p*=.8:p*=n.diff.cpuPassErr;let x=(d-o)/Math.max(.01,m),_=(f-l)/Math.max(.01,m),b=Le()*p*m,R=Le()*p*m*.5;d+=-_*b+x*R,f+=x*b+_*R;let E=1.15+Le()*p*2.5;s.release("pass",{team:a,passer:t,target:e,rx:o,rz:l,pvx:t.v.x,t:n.time,offload:!!i.offload,flat:!!i.flat,tx:d,tz:f}),s.p.set(o,c,l),s.v.set((d-o)/u,(E-c)/u+.5*br*u,(f-l)/u),s.drag=0,s.curve=0,s.spin="spiral",s.grubber=!1,s.lastTouch=t,s.setIgnore(t,n.time+.35),t.passAnim=.35;let A=(e.p.x-t.p.x)*t.right.x+(e.p.z-t.p.z)*t.right.z;return t.passSide=A>0?-1:1,e.ai.passCd=(e.isForward||e.num===2||e.num===5?.7:.45)+Gt()*.4,i.afterWindup||(e.ai.dummyHalf=!1,e.ai.plan=null),n.kickTarget={x:d,z:f,t:n.time+u,pass:!0},n.audio.catchBall(),n.emit("pass",{team:a,player:t,to:e,offload:!!i.offload,kind:i.flat?"flat":"standard"}),i.offload&&a.stats.offloads++,!0}function ea(n,t,e){let i=t.engage;if(!i||n.ball.carrier!==t||i.progress>.88||i.offloadTried)return!1;i.offloadTried=!0;let s=t.team,a=null,r=9.5;for(let l of s.players){if(l===t||!l.isUpright())continue;let h=qt(l.p.x,l.p.z,t.p.x,t.p.z),u=(t.p.x-l.p.x)*s.dir,d=(l.p.z-t.p.z)*s.dir*e;u<-1.5||h>r||e&&d<-1||(r=h,a=l)}if(!a)return!1;if(i.noOffload)return n.message("ARMS PINNED","No offload from a ball-and-all tackle",1,"warn"),!0;let o=i.tacklers.length,c=(i.kind==="low"?.12:0)+.26+t.attr.hand/260+(1-i.progress)*.32-(o-1)*.24-Math.max(0,i.dom)*.25;return Bt(et(c,.04,.85))?(Nn(n,t,a,{offload:!0}),n.message("OFFLOAD!",`${t.name} gets the arm free`,1.2,"good")):dc(n,t,"offload"),!0}function Cu(n,t,e){if(!(t.cd.dummy>0)){t.cd.dummy=1.1,t.passAnim=.3,t.passSide=e>0?-1:1;for(let i of t.team.opp.players)i.controlled||!i.isUpright()||qt(i.p.x,i.p.z,t.p.x,t.p.z)>8||Bt(.6-(i.attr.tackle-70)/180)&&(i.ai.bite=.6,i.ai.biteX=t.p.x-t.team.dir*1.5,i.ai.biteZ=t.p.z+e*t.team.dir*7);n.emit("dummy",{team:t.team,player:t})}}function dc(n,t,e){let i=n.ball;i.carrier=null,i.state="air",i.kind="loose",i.info={spilledBy:t,team:t.team,cause:e},i.lastTouch=t,i.drag=1,i.curve=0,i.grubber=!1,i.p.set(t.p.x,1,t.p.z);let s=Bt(.68);i.v.set(t.team.dir*(s?yt(1.5,4):-yt(1,3))+t.v.x*.4,yt(1,3),Le()*1.5+t.v.z*.4),i.setIgnore(t,n.time+1),n.emit("spill",{team:t.team,player:t,cause:e}),s?n.knockOn(t.team,t.p.x,t.p.z):n.message("LOOSE BALL!","Spilled backwards \u2014 play on",1.2,"warn")}function Ci(n,t,e,i,s,a={}){let r=Pe[e],o=t.team,c=n.ball,l=a.foot||t.attr.foot,h=l!==t.attr.foot,u=.006+(1-t.attr.kick/100)*.045;h&&(u*=1.9);let d=et(s,0,1.1)*(h?.93:1);if(s>.93&&(u+=(s-.93)*.45),!a.place&&!a.restart){let E=n.nearest(o.opp.players,t.p.x,t.p.z,A=>A.isUpright());E&&qt(E.p.x,E.p.z,t.p.x,t.p.z)<3&&(u*=1.6)}o.human||(u*=n.diff.cpuKickErr),u+=a.extraErr||0;let f=i+Le()*u,g=(a.elev??r.elev)+Le()*u*.5,y=(r.vMin+(r.vMax-r.vMin)*et(d,0,1.05))*(1+Le()*u*.25),m=!!a.place,p=m||a.restart?c.p.x:t.p.x+Math.sin(i)*.45,x=m||a.restart?c.p.z:t.p.z+Math.cos(i)*.45,_=m?.3:e==="grubber"?.25:.5,b={team:o,kicker:t,type:e,fromX:p,fromZ:x,t:n.time,bounced:!1,touchedAfter:!1,restart:!!a.restart,penaltyTouch:!!a.penaltyTouch,goal:!!a.goal,fieldGoal:e==="fieldgoal",chargedDown:!1,prevX:p};c.release("kick",b),c.p.set(p,_,x);let R=Math.cos(g);if(c.v.set(Math.sin(f)*R*y,Math.sin(g)*y,Math.cos(f)*R*y),!m&&!a.restart&&e!=="fieldgoal"&&(c.v.x+=t.v.x*.4,c.v.z+=t.v.z*.4),e==="grubber"&&(c.v.y=yt(-1.6,.4)),c.curve=r.curve*(l==="R"?1:-1)*yt(.8,1.2)*et(d,.4,1),c.spin=r.spin,c.grubber=e==="grubber",c.drag=1,c.lastTouch=t,c.setIgnore(t,n.time+.5),!m&&!a.restart&&!a.penaltyTouch)for(let E of o.opp.players){if(!E.isUpright()&&E.state!=="lunge"&&E.state!=="dive")continue;let A=E.p.x-t.p.x,P=E.p.z-t.p.z,w=Math.hypot(A,P);if(!(w>1.8||(A*Math.sin(i)+P*Math.cos(i))/Math.max(.01,w)<.3)&&Bt(.33+(E.state==="lunge"||E.state==="dive"?.25:0))){c.v.set(-c.v.x*.15+Le()*2,yt(1.5,4),-c.v.z*.15+Le()*2),c.curve=0,c.grubber=!1,c.kind="loose",c.info={chargedDown:!0,team:o,by:E},c.lastTouch=E,n.message("CHARGED DOWN!",E.name,1.4,"warn"),n.audio.thud(.5),n.emit("chargedown",{team:E.team,player:E});break}}if(!a.goal)for(let E of o.players)E.kickOffside=E!==t&&(E.p.x-t.p.x)*o.dir>.5;t.anim.foot=l,!m&&!a.restart&&(t.setState("kick",.55),t.stateT=.14),n.audio.kick(d),o.stats.kicks++,n.emit("kick",{team:o,player:t,kind:e}),n.kickAim=null,Pu(n)}function Pu(n){let t=n.ball;if(t.state==="air"&&t.kind!=="pass"){let e=Rr(t.p,t.v,t.curve,n.wind,t.drag,1.5),i=e.catchPt.x,s=e.catchPt.z;if(t.grubber){let a=Math.hypot(e.vLand.x,e.vLand.z);if(a>.5){let r=a*a/6.8*.55;i=e.land.x+e.vLand.x/a*r,s=e.land.z+e.vLand.z/a*r}}n.kickTarget={x:i,z:s,t:n.time+e.catchPt.t,land:e.land}}else if(t.state==="ground"){let e=Math.hypot(t.v.x,t.v.z),i=e>.2?e*e/(2*3.4)*.6:0;n.kickTarget={x:t.p.x+(e>.2?t.v.x/e*i:0),z:t.p.z+(e>.2?t.v.z/e*i:0),t:n.time+.5}}}function Iu(n,t){let e=n.ball;if(e.state==="held"||e.state==="dead")return;let i=e.info;if((e.landedThisTick||e.state==="ground"&&Math.floor(n.time*4)!==Math.floor((n.time-t)*4))&&Pu(n),e.landedThisTick&&e.kind==="kick"&&i&&!i.bounced&&(i.bounced=!0,i.bounceX=e.p.x,i.bounceZ=e.p.z,i.restart&&!i.touchedAfter&&Math.abs(e.p.z)<Ve&&Math.abs(e.p.x)<he&&(e.p.x-i.fromX)*i.team.dir<10))return n.awardPenalty(i.team.opp,i.type==="dropout"?i.fromX+i.team.dir*10:0,0,"Kick did not go 10m");if(e.kind==="kick"&&i&&i.fieldGoal&&!i.touchedAfter&&e.state==="air"){let a=i.team.dir*he;if((i.prevX-a)*(e.p.x-a)<=0&&i.prevX!==e.p.x&&!i.fgDone&&(i.fgDone=!0,Math.abs(e.p.z)<Pt.postGap-.05&&e.p.y>Pt.crossbar))return Iy(n,i.team,i.kicker);i.prevX=e.p.x}let s=e.state==="ground"||e.landedThisTick||e.p.y<.3;if(s&&(Math.abs(e.p.x)>Pt.dead||Math.abs(e.p.x)>he&&Math.abs(e.p.z)>Ve))return Dy(n);if(s&&Math.abs(e.p.z)>Ve)return Ly(n);Uy(n)}function Iy(n,t,e){if(t.score+=1,t.stats.fieldGoals++,n.audio.roar(1.2),n.audio.whistle(),n.message("FIELD GOAL!",`${e.name} \u2014 1 point`,2.4,"try"),n.emit("fieldgoal",{team:t,player:e}),n.hud.flashScore(),n.goldenPoint)return n.ball.state="dead",n.endMatch();n.ball.kind="loose",n.ball.info=null,n.setPhase("whistle",{restart:{type:"kickoff",team:t.opp},dur:2.6})}function Ly(n){let t=n.ball,e=t.info,i=et(t.p.x,-he+1,he-1),s=t.p.z,a=s>0?1:-1;if(t.kind==="kick"&&e&&!e.touchedAfter){let o=e.team;if(e.penaltyTouch)return n.emit("foundtouch",{team:o}),n.whistleStop("FOUND TOUCH",`${o.short} tap restart 10m in`,{type:"ptb",team:o,x:i,z:a*(Ve-10)},{style:"good"});if(e.restart&&!e.bounced)return n.awardPenalty(o.opp,e.type==="dropout"?e.fromX+o.dir*10:0,0,"Out on the full");if(!e.bounced)return n.scrumRestart(o.opp,e.fromX,e.fromZ,"OUT ON THE FULL",`Scrum, ${o.opp.short} feed`);let c=e.fromX*o.dir,l=i*o.dir;if(Math.abs(e.bounceZ??99)<Ve&&(c<-10&&l>30||c<-30&&l>10)){let u=c<-10&&l>30?"40/20!":"20/40!";return n.emit("4020",{team:o,label:u}),n.audio.roar(1),n.whistleStop(u,`${o.short} keep the ball \u2014 fresh set`,{type:"ptb",team:o,x:i,z:a*(Ve-10)},{style:"good"})}return n.scrumRestart(o.opp,i,s,"INTO TOUCH",`Scrum, ${o.opp.short} feed`)}let r=t.lastTouch?t.lastTouch.team:n.poss;n.scrumRestart(r.opp,i,s,"INTO TOUCH",`Scrum, ${r.opp.short} feed`)}function Dy(n){let t=n.ball,e=t.info,i=t.p.x>0?1:-1,s=n.teams.find(r=>r.dir===-i),a=t.lastTouch?t.lastTouch.team:null;return t.kind==="kick"&&e&&!e.touchedAfter&&e.team?e.team===s?n.whistleStop("DEAD IN-GOAL",`Goal-line drop-out ${s.short}`,{type:"dropout",team:s}):e.restart&&!e.bounced?n.awardPenalty(s,0,0,"Dead on the full"):n.whistleStop("DEAD BALL",`20m restart ${s.short}`,{type:"ptb",team:s,x:-s.dir*30,z:0}):a===s?n.whistleStop("DEAD IN-GOAL",`Goal-line drop-out ${s.short}`,{type:"dropout",team:s}):n.whistleStop("DEAD BALL",`20m restart ${s.short}`,{type:"ptb",team:s,x:-s.dir*30,z:0})}function zy(n,t,e){let i=n.ball,s=i.info,a,r=Math.hypot(i.v.x,i.v.y,i.v.z);return i.kind==="pass"&&s?(s.team===t.team?a=s.target===t?.975:.88:a=(t.controlled?.34:.15)+(s.flat?.12:0)+(t.attr.hand-70)/300,s.offload&&(a-=.08)):i.kind==="kick"&&s?i.state==="ground"||i.p.y<.45?a=.86:i.bounces>0?a=.76:a=s.type==="bomb"?.8:s.type==="grubber"?.72:.9:a=i.p.y<.45?.82:.74,a+=(t.attr.hand-75)/(i.kind==="pass"?300:160),i.kind!=="pass"&&(a-=Math.max(0,r-16)*.02),e&&(a-=t.jumpT>0?.08:.22),i.grubber&&(a-=.1),t.team.human&&(a+=n.diff.humanCatch),et(a,.04,.99)}function Uy(n){let t=n.ball,e=n.time,i=t.p.y;if(i>3.2)return;let s=[];for(let l of n.players){if(!l.isUpright()||l.state==="kick"||l.state==="celebrate"||!t.canTouch(l,e)||l.kickOffside&&!l.controlled)continue;let h=l.fwd,u=qt(l.p.x+h.x*.25,l.p.z+h.z*.25,t.p.x,t.p.z),d=(i<.5?.9:1.05)+(l.jumpT>0?.2:0),f=2.35+(l.attr.hand>80?.1:0)+(l.jumpT>0?.75:0);!l.controlled&&t.kind!=="pass"&&t.v.y<0&&i>2.1&&i<3&&u<1.4&&l.jumpT===0&&l.doJump(),!(u>d||i>f)&&(t.kind==="pass"&&t.info&&t.info.team!==l.team&&u>(t.info.flat?1:.75)||t.kind==="pass"&&t.info&&t.info.team===l.team&&t.info.target!==l&&u>.6||s.push({p:l,hd:u}))}if(!s.length)return;s.sort((l,h)=>l.hd-h.hd);let a=s[0].p,r=s.find(l=>l.p.team!==a.team),o=!!r&&r.hd<1.5,c=o&&Gt()<.5?[r.p,a]:[a,...r?[r.p]:[]];for(let l of c){if(Bt(zy(n,l,o)))return Fy(n,l);if(Ny(n,l))return}}function Ny(n,t){let e=n.ball;if(e.setIgnore(t,n.time+.6),e.kind==="pass"&&e.info&&e.info.team!==t.team&&Bt(.85))return!1;e.info&&(e.info.touchedAfter=!0),e.lastTouch=t;let i=Bt(.55),s=e.kind==="pass"?.3:.15;e.v.set(t.team.dir*(i?yt(1.5,4.5):-yt(1,3.5))+e.v.x*s,yt(.8,2.5),Le()*2+e.v.z*s),e.state="air",e.drag=1,e.curve=0,e.grubber=!1;let a=e.info;return e.kind="loose",e.info={spilledBy:t,team:t.team,prev:a},t.catchAnim=.25,n.emit("fumble",{team:t.team,player:t,note:`${a&&a.passer?"pass":a&&a.kicker?"kick:"+a.type:"loose"} ${a&&a.target===t?"target":a&&a.team!==t.team?"opp":"mate"} h=${e.p.y.toFixed(2)} fwd=${i}`}),i?(n.knockOn(t.team,e.p.x,e.p.z),!0):(n.message("FUMBLE!","Ball goes loose \u2014 play on",1.2,"warn"),!0)}function Fy(n,t){let e=n.ball,i=e.info,s=e.kind,a=t.team;if(s==="kick"&&i&&i.team===a&&t.kickOffside)return n.awardPenalty(a.opp,t.p.x,t.p.z,"Offside from the kick");if(s==="kick"&&i&&i.restart&&i.team===a&&(t.p.x-i.fromX)*a.dir<10)return n.awardPenalty(a.opp,0,0,"Kick did not go 10m");let r=e.p.y;e.give(t),t.catchAnim=.3,t.catchHigh=r>1.8,t.ai.inGoalCatch=!1,t.ai.passCd=Math.max(t.ai.passCd||0,.25),n.audio.catchBall(),n.kickTarget=null;for(let c of n.players)c.kickOffside=!1;let o=!1;if(s==="pass"&&i)if(i.team===a){if((t.p.x-i.rx-i.pvx*(n.time-i.t))*a.dir>1.3)return e.carrier=null,e.state="ground",n.knockOn(a,i.rx,i.rz,"FORWARD PASS");a.stats.passes++}else o=!0,n.message("INTERCEPT!",`${t.name} picks it off`,1.8,"good"),n.audio.roar(1),n.emit("intercept",{team:a,player:t});else s==="kick"&&i?i.team!==a?(o=!0,i.restart||n.message("ZERO TACKLE",`${a.short} fresh set`,1.1),t.ai.inGoalCatch=t.p.x*a.dir<-he):i.restart||n.message("REGATHERED!",t.name,1.3,"good"):(a!==n.poss&&(o=!0,n.message("TURNOVER",`${a.short} ball`,1.3,"warn")),i&&i.prev&&i.prev.team&&i.prev.team!==a&&t.p.x*a.dir<-he&&(t.ai.inGoalCatch=!0));o&&(n.poss=a,n.tackleCount=0,n.gainLineX=t.p.x,n.lineBreakDone=!1),a.human&&n.setControlled(t),n.emit("catch",{team:a,player:t,kind:s}),t.p.x*a.dir>he&&n.scoreTry(t,t.p.z)}function Lu(n,t){let e=t.team,i=t.p.x*e.dir,s=Math.abs(t.p.z);if(s>Ve&&Math.abs(t.p.x)<=he)return n.scrumRestart(e.opp,t.p.x,t.p.z,"INTO TOUCH",`Scrum, ${e.opp.short} feed`);if(t.state!=="tackled"){if(i>he){let a=Eu(n,e.opp,t),r;t.controlled?r=n.input.pressed("faceA")||a<1.8||i>he+6.5||s>Ve-.8:r=a<3.8||Math.abs(t.p.z)<5||i>he+5||s>Ve-1,r&&(t.setState("free"),n.scoreTry(t,t.p.z));return}if(i<-he){if(i<-Pt.dead||s>Ve)return n.whistleStop("DEAD IN-GOAL",`Goal-line drop-out ${e.short}`,{type:"dropout",team:e});let a=Eu(n,e.opp,t);if(t.controlled?n.input.pressed("faceA"):t.ai.inGoalCatch&&a<10)return t.ai.inGoalCatch?n.whistleStop("TOUCHED DOWN",`20m restart ${e.short}`,{type:"ptb",team:e,x:-e.dir*30,z:0},{style:"good"}):n.whistleStop("TOUCHED DOWN",`Goal-line drop-out ${e.short}`,{type:"dropout",team:e})}}}function Eu(n,t,e){let i=99;for(let s of t.players)s.isUpright()&&(i=Math.min(i,qt(s.p.x,s.p.z,e.p.x,e.p.z)));return i}function Du(n){let t=n.ball.info;if(!t||!t.team)return;let e=t.team;for(let i of e.players)if(i.kickOffside){for(let s of e.players)if(s!==i&&!s.kickOffside&&(s.p.x-i.p.x)*e.dir>=0){i.kickOffside=!1;break}}}function zu(n){return et(9+Math.abs(n)*.5,9,28)}function Oy(n,t,e,i,s,a,r,o,c){let l=a.vMin+(a.vMax-a.vMin)*s,h={p:{x:n,y:.3,z:t},v:{x:Math.sin(e)*Math.cos(i)*l,y:Math.sin(i)*l,z:Math.cos(e)*Math.cos(i)*l},curve:a.curve*(r==="R"?1:-1)*et(s,.4,1),drag:1},u=1/60;for(let d=0;d<6;d+=u){let f=h.p.x;if(Rs(h,u,o),(f-c)*(h.p.x-c)<=0)return{crossed:!0,y:h.p.y,z:h.p.z};if(h.p.y<0)return{crossed:!1,y:0,z:h.p.z}}return{crossed:!1,y:0,z:h.p.z}}function pc(n,t,e,i,s,a,r){let o=Tt(i-t,-e),c=Math.hypot(i-t,e),l=et(Ji(s,"goal",c+14,r),.25,1);for(let h=0;h<14;h++){let u=Oy(t,e,o,r,l,s,a,n.wind,i),d=Math.min(6,2.5+c*.2);!u.crossed||u.y<d?l=Math.min(1,l+.05):u.y>12&&l>.4&&(l-=.03);let f=Math.sin(o);Math.abs(f)>.15&&u.crossed&&(o+=.85*u.z*f*f/(i-t))}return{yaw:o,power:l}}function Uu(n,t){let e=t.team,i=t.kicker,s=e.dir*he,a=pc(n,t.x,t.z,s,Pe.goal,t.foot,t.elev);t.yaw=a.yaw,t.power=a.power,t.stage="run",t.runT=0}function Nu(n){let t=n.pd,e=n.ball;if(t.stage!=="flight"||t.result!==void 0)return;let i=t.team.dir*he,s=t.prevX,a=e.p.x;(s-i)*(a-i)<=0&&s!==a?kr(n,Math.abs(e.p.z)<Pt.postGap-.05&&e.p.y>Pt.crossbar):(e.state==="ground"||e.bounces>0)&&kr(n,!1),t.prevX=a}function kr(n,t){let e=n.pd,i=e.team;e.result===void 0&&(e.result=t,e.stage="result",n.phaseT=0,t?(i.score+=2,i.stats[e.kind==="conversion"?"convM":"penGoals"]++,n.message("GOAL!",e.kind==="conversion"?"Conversion successful":"Penalty goal",2.2,"try"),n.audio.roar(1),n.hud.flashScore()):(n.message("MISSED",e.kind==="conversion"?"No extra points":"Penalty attempt fails",2,"bad"),n.audio.roar(.6,!0)),n.emit("goal",{team:i,good:t,kind:e.kind}))}function Fu(n,t=1.1){let e=n/t%2;return e<1?e:2-e}function Ou(n,t,e){let i=n.input,s=e.team,a=s.dir*he;if(i.pressed("foot")&&(e.foot=e.foot==="R"?"L":"R"),e.stage==="place"){let r=e.dist;e.dist=et(e.dist-i.move.y*9*t,8,40),e.dist!==r&&(e.x=s.dir*(he-e.dist),e.baseYaw=e.yaw=Tt(a-e.x,-e.z)),(i.pressed("faceA")||i.pressed("confirm"))&&(e.stage="aim",n.audio.ui())}else e.stage==="aim"?(e.yaw=et(e.yaw-i.move.x*.45*t,e.baseYaw-.6,e.baseYaw+.6),e.elev=et(e.elev+i.move.y*.45*t,.3,.95),i.pressed("faceA")&&(e.stage="power",e.holdT=0,e.powerBtn="faceA")):e.stage==="power"&&(e.holdT+=t,e.power=Fu(e.holdT,1.15),(i.released(e.powerBtn)||!i.held(e.powerBtn))&&(e.stage="run",e.runT=0))}function mc(n,t,e,i){let s=n.input;if(e.baseYaw||(e.baseYaw=e.yaw),e.foot===void 0&&(e.foot=n.humanFoot||e.kicker.attr.foot),s.pressed("foot")&&(e.foot=e.foot==="R"?"L":"R"),e.powering)e.holdT+=t,e.power=Fu(e.holdT,1.15),e.yaw=et(e.yaw-s.move.x*.35*t,e.baseYaw-1.1,e.baseYaw+1.1),(s.released(e.powerBtn)||!s.held(e.powerBtn))&&(e.stage="run",e.runT=0);else{e.yaw=et(e.yaw-s.move.x*.7*t,e.baseYaw-1.1,e.baseYaw+1.1);let a=s.pressed("faceA")?"faceA":i.length>1&&s.pressed("faceB")?"faceB":null;a&&(e.powering=!0,e.holdT=0,e.powerBtn=a,e.type=a==="faceB"?i[1]:i[0],n.audio.ui())}}function Bu(n,t){let e=t.team,i=e.dir,s=t.spot||{x:0,z:0};if(t.foot=t.kicker.attr.foot,t.type==="dropout"){let a=s.x+i*yt(38,50),r=yt(-22,22);t.yaw=Tt(a-s.x,r-s.z),t.power=Ji(Pe.dropout,"dropout",Math.hypot(a-s.x,r-s.z))}else if(Bt(.08)){t.type="shortko";let a=Zi([-1,1])*yt(8,16),r=i*yt(11,14);t.yaw=Tt(r,a),t.power=Ji(Pe.shortko,"shortko",Math.hypot(r,a))}else{let a=yt(-24,24),r=i*yt(40,47);t.yaw=Tt(r,a),t.power=Ji(Pe.kickoff,"kickoff",Math.hypot(r,a)-4)}t.stage="run",t.runT=0}function Hu(n,t){let e=t.team,i=t.spot,s=i.z>=0?1:-1,a=i.x+e.dir*yt(20,32),r=s*(Ve+3);t.yaw=Tt(a-i.x,r-i.z),t.power=Math.min(1,Ji(Pe.touch,"touch",Math.hypot(a-i.x,r-i.z))*1.02),t.foot=t.kicker.attr.foot,t.stage="run"}function Vu(n,t,e){let i=e.x*t.dir,s=he-i,a=Math.hypot(s,e.z),r=t.score-t.opp.score,o=26+t.goalKicker.attr.kick*.2;return a<o&&(n.goldenPoint||n.isLate()&&r>=-2&&r<=6||s<30&&Bt(.55))?"goal":i<20?"touch":Bt(.55)?"tap":"touch"}function Gu(n,t){let e=t.team,i=e.dir,s=t.p.x*i,a=he-s,r=e.score-e.opp.score,o,c,l;if(a<40&&n.isLate()&&r>=-1&&r<=0&&Math.abs(t.p.z)<22){o="fieldgoal";let h=pc(n,t.p.x,t.p.z,i*he,Pe.fieldgoal,t.attr.foot,Pe.fieldgoal.elev);return Ci(n,t,o,h.yaw,h.power,{})}if(a<15){let h=Gt();h<.5?(o="grubber",c=i*(he+4),l=t.p.z*.5+yt(-8,8)):h<.75?(o="chip",c=i*(he+2),l=t.p.z+yt(-6,6)):(o="bomb",c=i*(he-3),l=Zi([-1,1])*yt(22,29))}else if(a<42)o="bomb",c=i*(he-yt(0,8)),l=Bt(.6)?yt(-10,10):Zi([-1,1])*yt(18,26);else{o="punt";let h=e.opp.get(1),u=h&&h.p.z>0?-1:1;s<-10&&Bt(.3)?(c=i*38,l=u*(Ve-3)):(c=i*Math.min(he-4,s+yt(38,48)),l=u*yt(8,24))}By(n,t,o,c,l)}function Wu(n,t,e,i){let s=t.team,a=s.dir,r=t.p.x*a;if(e==="fieldgoal"){let d=pc({wind:{x:0,z:0}},t.p.x,t.p.z,a*he,Pe.fieldgoal,i,Pe.fieldgoal.elev);return Ci(n,t,e,d.yaw,d.power,{foot:i})}let o=Tt(a,0),c=t.speedH>1.5?Math.atan2(t.v.x,t.v.z):t.heading;c=o+et((c-o+Math.PI*3)%(Math.PI*2)-Math.PI,-1.2,1.2);let l=he-r,h;e==="grubber"?h=et(l+5,8,26):e==="chip"?h=et(l<18?l+3:11,7,18):h=et(l>55?50:l-4,25,55);let u=e==="grubber"?et((h-4)/26,.1,1):Ji(Pe[e],e,h);Ci(n,t,e,c,u,{foot:i})}function By(n,t,e,i,s){let a=Pe[e],r=Tt(i-t.p.x,s-t.p.z),o=Math.hypot(i-t.p.x,s-t.p.z),c;if(e==="grubber")c=et((o-4)/26,.1,1);else{c=Ji(a,e,o);let l=a.vMin+(a.vMax-a.vMin)*c,h=Math.cos(a.elev),u=Rr({x:t.p.x,y:.5,z:t.p.z},{x:Math.sin(r)*h*l,y:Math.sin(a.elev)*l,z:Math.cos(r)*h*l},a.curve*(t.attr.foot==="R"?1:-1),n.wind),d=i-u.land.x,f=s-u.land.z,g=i+d,y=s+f;r=Tt(g-t.p.x,y-t.p.z),o=Math.hypot(g-t.p.x,y-t.p.z),c=Ji(a,e,o)}Ci(n,t,e,r,c,{})}function ks(n,t,e,i,s){let a=t.dir,r=s*a,o=Ve-r,c=Ve+r,l=o>=c?1:-1,h,u,d={2:1,3:1,12:1,5:-1,4:-1,11:-1};switch(e.num){case 9:h=r+l*1.5,u=2;break;case 7:h=r+l*5.5,u=4;break;case 6:h=r+l*12,u=5.5;break;case 8:h=r+l*3,u=2.5;break;case 10:h=r-l*3,u=2.5;break;case 13:h=r-l*6.5,u=3.5;break;case 1:h=r+l*19,u=7;break;case 2:case 5:h=d[e.num]*31,u=6.5;break;case 3:case 4:h=r+(d[e.num]*31-r)*.62,u=6;break;default:h=r+(d[e.num]*31-r)*.33,u=4.5}return h=et(h,-Ve+1.5,Ve-1.5),{x:et(i-a*u,-Pt.dead+1,Pt.dead-1),z:h*a}}function Xu(n,t){let e=n.tackleCount,i=[8,10,11,12,13].map(a=>t.get(a)).filter(a=>a.state!=="ground");if(e===5){let a=t.get(7),r=t.get(6);return{kind:"kick",target:a.state==="ground"?r:r.state==="ground"||a.attr.kick>=r.attr.kick?a:r}}let s=Gt();return s<.12?{kind:"run"}:s<(e<=1?.75:.5)&&i.length?{kind:"hitup",target:Zi(i)}:{kind:"shift",target:t.get(7).state==="ground"?t.get(6):t.get(7)}}var Au=Array.from({length:24},()=>new z);function Ku(n){let t=n.aimLine,e=n.aimReticle;t.visible=!1,e.visible=!1;let i=null,s=0,a=null,r=.6,o=null,c=!0;if(n.kickAim&&n.ball.carrier){let g=n.ball.carrier;i={x:g.p.x,y:.5,z:g.p.z},s=n.kickAim.yaw,a=n.kickAim.type,r=n.kickAim.power||.05,a==="fieldgoal"&&(c=!1)}else if((n.phase==="kickoff"||n.phase==="touchKick")&&n.pd.team?.human&&n.pd.stage==="aim"){let g=n.ball;i={x:g.p.x,y:.3,z:g.p.z},s=n.pd.yaw,a=n.pd.type,r=n.pd.powering?n.pd.power:.75}if(!i)return;let l=Pe[a],h=o??l.elev,u=l.vMin+(l.vMax-l.vMin)*r,d={p:{...i},v:{x:Math.sin(s)*Math.cos(h)*u,y:Math.sin(h)*u,z:Math.cos(s)*Math.cos(h)*u},curve:0,drag:1},f=a==="grubber"?.25:a==="goal"||a==="fieldgoal"?.6:.45;for(let g=0;g<24;g++){Au[g].set(d.p.x,Math.max(.05,d.p.y),d.p.z);for(let y=0;y<2;y++)Rs(d,f/48,{x:0,z:0})}if(t.geometry.setFromPoints(Au),t.computeLineDistances(),t.visible=!0,c){let g=a==="grubber"?4+r*26:Ar(l,a,r,h);e.position.set(i.x+Math.sin(s)*g,.05,i.z+Math.cos(s)*g),e.visible=!0}}var Hy={faceA:"K",faceB:"L",faceX:"J",faceY:"I",fieldGoal:"U"},Vy={faceA:"A",faceB:"B",faceX:"X",faceY:"Y",fieldGoal:"R3"},De=(n,t,e,i)=>{let s=document.createElement(n);return t&&(s.className=t),i!==void 0&&(s.innerHTML=i),e&&e.appendChild(s),s},Pr=class{constructor(t){this.root=De("div","hud",t),this.score=De("div","scorebug",this.root),this.tackles=De("div","tackles",this.root),this.msgBox=De("div","msg",this.root),this.msgMain=De("div","msg-main",this.msgBox),this.msgSub=De("div","msg-sub",this.msgBox),this.feed=De("div","feed",this.root),this.card=De("div","pcard",this.root),this.kick=De("div","kickpanel",this.root),this.meter=De("div","meter",this.root,'<div class="meter-label"></div><div class="meter-bar"><div class="meter-fill"></div><div class="meter-tick"></div></div>'),this.hint=De("div","hint",this.root),this.mini=De("canvas","minimap",this.root),this.mini.width=240,this.mini.height=150,this.tags=Array.from({length:6},()=>De("div","ptag",this.root)),this.offTag=De("div","ptag off",this.root,"OFFSIDE"),this.fade=De("div","fade",t),this.modal=De("div","modal hidden",t),this.msgT=0,this.v3=new z,this.visible=!0}setVisible(t){this.visible=t,this.root.style.display=t?"":"none"}attach(t){this.m=t,this.feed.innerHTML="",t.on(e=>this.onEvent(e))}onEvent(t){let e=this.m,i=t.player?t.player.name:"",a={beaten:()=>({step:"SIDESTEP!",fend:"FEND!",bump:"BUMPED OFF!",broken:"TACKLE BUST!"})[t.how]+` ${i}`,bighit:()=>`BIG HIT \u2014 ${i}`,offload:()=>null,tackle:()=>t.n>=3?`Gang tackle (${t.n})`:null,try:()=>`TRY ${t.team.short} \u2014 ${i}`,goal:()=>`${t.team.short} ${t.kind} ${t.good?"kicked":"missed"}`,fieldgoal:()=>`FIELD GOAL ${t.team.short} \u2014 ${i}`,intercept:()=>`Intercept \u2014 ${i}`,4020:()=>`${t.label} ${t.team.short}`,penalty:()=>`Penalty ${t.team.short}: ${t.reason}`,chargedown:()=>`Charge-down \u2014 ${i}`,error:()=>`${t.why} \u2014 ${t.team.short}`,missed:()=>null}[t.type],r=a&&a();if(!r)return;let o=De("div","feed-line",this.feed,r);for(t.team&&(o.style.borderLeftColor=t.team.kit.primary),setTimeout(()=>o.classList.add("gone"),3800),setTimeout(()=>o.remove(),4400);this.feed.children.length>5;)this.feed.firstChild.remove()}message(t,e="",i=2,s=""){this.msgMain.textContent=t,this.msgSub.textContent=e,this.msgBox.className="msg show "+s,this.msgT=i,this.msgMain.style.animation="none",this.msgMain.offsetWidth,this.msgMain.style.animation=""}flashScore(){this.score.classList.remove("flash"),this.score.offsetWidth,this.score.classList.add("flash")}fadeOut(){this.fade.classList.add("on")}fadeIn(){setTimeout(()=>this.fade.classList.remove("on"),30)}penaltyChoice(t){let e=this.m?.input.usingPad;this.modal.className="modal",this.modal.innerHTML=`<div class="panel"><h2>PENALTY</h2><p>Your call, skipper</p>
      <button data-c="goal"><b>${e?"A":"K"}</b> Kick for goal (2 pts)</button>
      <button data-c="touch"><b>${e?"B":"L"}</b> Kick for touch (keep the ball)</button>
      <button data-c="tap"><b>${e?"X":"J"}</b> Tap and go</button></div>`;let i=s=>{this.modal.className="modal hidden",this.modal.innerHTML="",this._pc=null,t(s)};this.modal.querySelectorAll("button").forEach(s=>s.addEventListener("click",()=>i(s.dataset.c))),this._pc=i}pollModal(t){this._pc&&(t.pressed("k1")||t.pressed("faceA")?this._pc("goal"):t.pressed("k2")||t.pressed("faceB")?this._pc("touch"):(t.pressed("k3")||t.pressed("faceX"))&&this._pc("tap"))}showBreak(t,e,i,s=""){let[a,r]=t.teams,o=a.stats.possT+r.stats.possT||1,c=[["Tries",a.stats.tries,r.stats.tries],["Conversions",`${a.stats.convM}/${a.stats.convA}`,`${r.stats.convM}/${r.stats.convA}`],["Penalty goals",a.stats.penGoals,r.stats.penGoals],["Field goals",a.stats.fieldGoals,r.stats.fieldGoals],["Possession",Math.round(a.stats.possT/o*100)+"%",Math.round(r.stats.possT/o*100)+"%"],["Runs",a.stats.runs,r.stats.runs],["Tackles",a.stats.tackles,r.stats.tackles],["Missed tackles",a.stats.missed,r.stats.missed],["Tackle busts",a.stats.busts,r.stats.busts],["Line breaks",a.stats.linebreaks,r.stats.linebreaks],["Offloads",a.stats.offloads,r.stats.offloads],["Kicks",a.stats.kicks,r.stats.kicks],["Errors",a.stats.errors,r.stats.errors],["Penalties conceded",a.stats.pensConceded,r.stats.pensConceded]],l=a.score===r.score?"Draw":(a.score>r.score?a.name:r.name)+" win";this.modal.className="modal",this.modal.innerHTML=`<div class="panel wide"><h2>${e}</h2>${s?`<p>${s}</p>`:""}
      <div class="final"><span style="--c:${a.kit.primary}">${a.name}</span><b>${a.score} \u2013 ${r.score}</b><span style="--c:${r.kit.primary}">${r.name}</span></div>
      ${e==="FULL TIME"?`<p class="winner">${l}</p>`:""}
      <table>${c.map(d=>`<tr><td>${d[1]}</td><th>${d[0]}</th><td>${d[2]}</td></tr>`).join("")}</table>
      <div class="btns">${i?'<button data-a="go">Continue \u25B6</button>':'<button data-a="menu">Main menu</button><button data-a="again">Rematch</button>'}</div></div>`;let h=()=>{this.modal.className="modal hidden",this.modal.innerHTML="",this._brk=null},u=d=>{h(),d==="go"?i():d==="menu"?this.onMenu?.():this.onRematch?.()};this.modal.querySelectorAll("button").forEach(d=>d.addEventListener("click",()=>u(d.dataset.a))),this._brk={act:u,cont:!!i,t:performance.now()}}pollBreak(t){!this._brk||performance.now()-this._brk.t<600||(t.pressed("confirm")||t.pressed("faceA"))&&this._brk.act(this._brk.cont?"go":"again")}closeModal(){this.modal.className="modal hidden",this.modal.innerHTML="",this._brk=null,this._pc=null}update(t,e,i){if(!this.visible)return;let[s,a]=t.teams,r=t.half===1?"1ST":t.half===2?"2ND":"GP";this.score.innerHTML=`<span class="tm" style="--c:${s.kit.primary};--c2:${s.kit.secondary}">${s.short}</span><span class="sc">${s.score}</span>
      <span class="clock">${t.clockText()}<small>${t.siren?"SIREN":r}</small></span><span class="sc">${a.score}</span><span class="tm" style="--c:${a.kit.primary};--c2:${a.kit.secondary}">${a.short}</span>`;let o=t.phase==="play"||t.phase==="ptb",c=t.attackTeam();if(o&&c){let P=t.tackleCount;this.tackles.style.display="";let w=Array.from({length:6},(M,C)=>`<i class="${C<P?"on":""}"></i>`).join("");this.tackles.innerHTML=`<span class="who" style="--c:${c.kit.primary}">${c.short}</span><b>${P===5?"LAST TACKLE":P===0?"ZERO TACKLE":"TACKLE "+P}</b><span class="pips">${w}</span>`}else this.tackles.style.display="none";this.msgT>0&&(this.msgT-=i,this.msgT<=0&&(this.msgBox.className="msg"));let l=t.controlled;l&&t.humanTeam?(this.card.style.display="",this.card.innerHTML=`<div class="num" style="--c:${l.team.kit.primary};--c2:${l.team.kit.secondary}">${l.num}</div><div class="info"><b>${l.fullName}</b><small>${Mr[l.pos]} \xB7 OVR <b class="ovr">${l.ovr}</b>${l.star?' <span class="star">\u2605</span>':""} \xB7 SPD ${l.attr.speed} \xB7 STR ${l.attr.strength}</small>
        <div class="stam"><i style="width:${Math.round(l.stamina*100)}%;background:${l.stamina<.3?"#ff5a3a":"#7dff5a"}"></i></div></div>`):this.card.style.display="none";let h=t.input.usingPad,u=t.kickAim&&t.kickAim.foot||["goalKick","kickoff","touchKick"].includes(t.phase)&&t.pd.foot||t.humanFoot||(l?l.attr.foot:"R"),f=t.camRig.fwd,g=Math.atan2(t.wind.x*-f.z+t.wind.z*f.x,t.wind.x*f.x+t.wind.z*f.z),y=Math.round(t.wind.speed*3.6),m=h?{A:"A",B:"B",X:"X",Y:"Y",U:"R3",M:"LT"}:{A:"K",B:"L",X:"J",Y:"I",U:"U",M:"Space"},p=t.kickAim?t.kickAim.type:null,x=(P,w,M)=>`<span class="${p===w?"sel":""}"><b>${P}</b> ${M}</span>`,_=t.humanTeam&&t.ball.carrier&&t.ball.carrier.team===t.humanTeam;this.kick.innerHTML=`<div class="wind"><div class="arrow" style="transform:rotate(${g*180/Math.PI}deg)">\u27A4</div><div><b>${y} km/h</b><small>WIND</small></div></div>
      ${t.humanTeam&&_?`<div class="krow"><small>QUICK</small><div class="ktypes">${x(m.A,"-","Punt")}${x(m.B,"-","Grubber")}${x(m.X,"-","Chip")}${x(m.U,"-","Field goal")}</div></div>
      <div class="krow"><small>HOLD ${m.M} +</small><div class="ktypes">${x(m.A,"punt","Punt")}${x(m.B,"grubber","Grubber")}${x(m.X,"chip","Chip")}${x(m.Y,"bomb","Bomb")}${x(m.U,"fieldgoal","FG")}</div></div>`:""}
      ${t.humanTeam&&!t.input.usingTouch?`<div class="foot">FOOT: <b>${u==="L"?"LEFT":"RIGHT"}</b> <small>(${h?"D-pad \u2191":"V"})</small></div>`:""}`;let b=!1,R=0,E="",A=-1;if(t.kickAim?(b=!0,R=t.kickAim.power,E=Pe[t.kickAim.type].label+(t.kickAim.over>0?" \u2014 OVERCOOKED!":"")):(t.phase==="goalKick"&&t.pd.team?.human&&t.pd.stage==="power"||(t.phase==="kickoff"||t.phase==="touchKick")&&t.pd.team?.human&&t.pd.powering)&&(b=!0,R=t.pd.power,E=t.phase==="goalKick"?"POWER":Pe[t.pd.type].label),this.meter.style.display=b?"":"none",b){this.meter.querySelector(".meter-fill").style.width=`${et(R,0,1)*100}%`,this.meter.querySelector(".meter-fill").style.background=R>.93?"#ff4a2a":R>.75?"#ffc21a":"#5ae05a",this.meter.querySelector(".meter-label").textContent=E;let P=this.meter.querySelector(".meter-tick");P.style.display=A>=0?"":"none"}this.hint.innerHTML=this.hintText(t,h),this.drawMini(t),this.updateTags(t,e,h)}hintText(t,e){let i=t.input.usingTouch,s=(l,h,u)=>`<kbd>${i?u??h:e?h:l}</kbd>`,a=t.humanTeam;if(!a)return"";let r=t.pd;if(t.phase==="goalKick"&&r.team===a){if(r.stage==="place")return`${s("W/S","L-stick \u2195","stick \u2195")} move the ball back / forward (${r.dist.toFixed(0)}m out) \xB7 ${s("K","A","SET")} set the ball \xB7 ${s("V","D-pad \u2191","FOOT")} foot`;if(r.stage==="aim")return`${s("A/D","L-stick \u2194","stick \u2194")} line up the seam \xB7 ${s("W/S","L-stick \u2195","stick \u2195")} trajectory \xB7 hold ${s("K","A","KICK")} for power \xB7 mind the wind`;if(r.stage==="power")return"Release before the red zone \u2014 the meter swings back!"}if((t.phase==="kickoff"||t.phase==="touchKick")&&r.team===a&&r.stage==="aim")return`${s("A/D","L-stick \u2194","stick \u2194")} aim \xB7 hold ${s("K","A","LONG")} for power${t.phase==="kickoff"&&r.type!=="dropout"?` \xB7 hold ${s("L","B","SHORT")} instead for a short kick-off`:""}`;if(t.phase==="ptb"&&r.team===a)return i?`Play-the-ball\u2026 tap ${s("","","PASS")} now and it goes as soon as the ball is out`:`Play-the-ball\u2026 ${s("Q/E","LB/RB")} pass from dummy half (+ ${s("K/L/I","A/B/Y")} to pick the runner), or run it`;if(t.phase!=="play")return"";let o=t.ball,c=t.controlled;return t.kickAim?`${s("A/D","L-stick \u2194","stick \u2194")} aim \xB7 release ${s(Hy[t.kickAim.btn],Vy[t.kickAim.btn],"RELEASE")} to kick \xB7 ${s("Q/E","LB/RB","PASS")} cancel`:o.carrier&&o.carrier===c?c.state==="tackled"?`In the tackle: ${s("Q/E","LB/RB","OFFLOAD")} offload \xB7 ${s("Arrows","R-stick","swipe")} fight free \xB7 mash ${s("Shift","RT","DRIVE")} leg drive`:c.p.x*a.dir>Pt.half?`${s("K","A","GROUND")} ground the ball \u2014 run toward the posts for an easier conversion!`:c.p.x*a.dir<-Pt.half?`In your in-goal: ${s("K","A","TOUCH DOWN")} touch down, or run it out`:t.input.held("passL")||t.input.held("passR")?`${s("K","A")} 1st man \xB7 ${s("L","B")} 2nd \xB7 ${s("I","Y")} 3rd (cut-out) \xB7 double-tap for a flat ball`:i?`${s("","","PASS")} tap \xB7 double-tap flat \xB7 hold cut-out \xB7 swipe ${s("","","\u2190\u2192")} step ${s("","","\u2191")} shoulder ${s("","","\u2193")} fend \xB7 ${s("","","AIM")} then a kick button to aim`:`${s("Q/E","LB/RB")} pass (double-tap = flat) \xB7 ${s("\u2190/\u2192","R-stick \u2194")} step \xB7 ${s("\u2193","R-stick \u2193")} fend (hold) \xB7 ${s("\u2191","R-stick \u2191")} shoulder \xB7 ${s("I","Y")} dummy`:o.carrier&&o.carrier.team!==a?c&&c.state==="tackling"?`${s("J","X","STRIP")} strip (one-on-one only) \xB7 keep ${s("L","B","GRIP")} held to hold him down (risky)`:`${s("K","A","TACKLE")} low tackle \xB7 ${s("L","B","GRIP")} arm-grip \xB7 ${s("I","Y","DIVE")} dive \xB7 ${s("Q/E","LB/RB","SWITCH")} switch player`:`Chase it down! ${s("J","X","JUMP")} jump for the high ball \xB7 ${s("Q/E","LB/RB","SWITCH")} switch player`}drawMini(t){let e=this.mini.getContext("2d"),i=this.mini.width,s=this.mini.height,a=i/124,r=s/76,o=t.humanTeam?t.humanTeam.dir:1,c=h=>(h*o+62)*a,l=h=>(h*o+38)*r;e.clearRect(0,0,i,s),e.fillStyle="rgba(20,70,25,0.78)",e.fillRect(c(-58*o)<c(58*o)?c(-58*o):c(58*o),l(-34*o)<l(34*o)?l(-34*o):l(34*o),116*a,68*r),e.strokeStyle="rgba(255,255,255,0.5)",e.lineWidth=1;for(let h=-50;h<=50;h+=10)e.beginPath(),e.moveTo(c(h),l(-34)),e.lineTo(c(h),l(34)),e.stroke();e.strokeRect(Math.min(c(-58),c(58)),Math.min(l(-34),l(34)),116*a,68*r);for(let h of t.players)e.fillStyle=h.team.kit.primary,e.strokeStyle=h.team.kit.secondary,e.beginPath(),e.arc(c(h.p.x),l(h.p.z),h===t.controlled?4:3,0,Math.PI*2),e.fill(),e.stroke(),h===t.controlled&&(e.strokeStyle="#ffe14a",e.lineWidth=2,e.beginPath(),e.arc(c(h.p.x),l(h.p.z),6,0,Math.PI*2),e.stroke(),e.lineWidth=1);e.fillStyle="#fff",e.beginPath(),e.arc(c(t.ball.p.x),l(t.ball.p.z),2.5,0,Math.PI*2),e.fill()}updateTags(t,e,i){let s=t.ball,a=t.controlled,r=()=>{this.tags.forEach(h=>h.style.display="none")};if(this.offTag.style.display="none",a&&(a.offside||a.kickOffside)&&t.phase==="play"&&this.project(this.offTag,a,e),!a||s.carrier!==a||t.phase!=="play"||a.state==="tackled"||t.kickAim)return r();r();let o=t.input.held("passL")?-1:t.input.held("passR")?1:0,c=i?["A","B","Y"]:["K","L","I"],l=0;for(let h of o?[o]:[-1,1])Pi(t,a,h).slice(0,o?3:1).forEach((d,f)=>{let g=this.tags[l++];g.textContent=o?c[f]:t.input.usingTouch?h<0?"\u25C0":"\u25B6":h<0?i?"LB":"Q":i?"RB":"E",this.project(g,d.q,e)})}project(t,e,i){if(this.v3.set(e.p.x,2.35,e.p.z).project(i),this.v3.z>1){t.style.display="none";return}t.style.display="",t.style.left=`${(this.v3.x*.5+.5)*window.innerWidth}px`,t.style.top=`${(-this.v3.y*.5+.5)*window.innerHeight}px`}};var Yu={bay:[{num:1,pos:"FB",first:"Reece",last:"Walzh",age:24,heightCm:177,weightKg:88,attr:{speed:81,accel:85,agility:86,strength:56,tackle:74,pass:82,kick:89,hand:85,stamina:75,foot:"R"},skin:"#c68a5e",hair:"#2b1a0d",hairStyle:"afro",headgear:!1,star:!1},{num:2,pos:"WG",first:"Josiah",last:"Karapany",age:24,heightCm:197,weightKg:97,attr:{speed:93,accel:86,agility:80,strength:64,tackle:61,pass:51,kick:40,hand:83,stamina:81,foot:"R"},skin:"#d9a47a",hair:"#7a5229",hairStyle:"short",headgear:!1,star:!1},{num:3,pos:"CE",first:"Kotoni",last:"Stags",age:28,heightCm:185,weightKg:95,attr:{speed:81,accel:80,agility:76,strength:73,tackle:85,pass:61,kick:41,hand:76,stamina:83,foot:"R"},skin:"#a36a42",hair:"#4a2c14",hairStyle:"afro",headgear:!1,star:!1},{num:4,pos:"CE",first:"Gehamat",last:"Shibassaki",age:28,heightCm:187,weightKg:91,attr:{speed:75,accel:72,agility:67,strength:74,tackle:69,pass:57,kick:39,hand:75,stamina:74,foot:"R"},skin:"#8d5a3a",hair:"#5e3a1c",hairStyle:"buzz",headgear:!1,star:!1},{num:5,pos:"WG",first:"Deine",last:"Marinar",age:23,heightCm:185,weightKg:89,attr:{speed:89,accel:89,agility:79,strength:64,tackle:71,pass:55,kick:47,hand:77,stamina:82,foot:"L"},skin:"#7a4a2c",hair:"#0d0d0d",hairStyle:"short",headgear:!1,star:!1},{num:6,pos:"FE",first:"Ezra",last:"Mem",age:23,heightCm:176,weightKg:85,attr:{speed:90,accel:89,agility:89,strength:66,tackle:53,pass:84,kick:77,hand:81,stamina:79,foot:"R"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"long",headgear:!1,star:!1},{num:7,pos:"HB",first:"Adam",last:"Reynulds",age:28,heightCm:188,weightKg:90,attr:{speed:77,accel:78,agility:83,strength:51,tackle:59,pass:82,kick:93,hand:81,stamina:77,foot:"R"},skin:"#e0ac82",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:8,pos:"PR",first:"Corey",last:"Jensan",age:32,heightCm:188,weightKg:107,attr:{speed:64,accel:60,agility:44,strength:90,tackle:89,pass:49,kick:35,hand:69,stamina:72,foot:"R"},skin:"#7a4a2c",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:9,pos:"HK",first:"Cory",last:"Peix",age:26,heightCm:178,weightKg:89,attr:{speed:70,accel:72,agility:71,strength:58,tackle:94,pass:78,kick:45,hand:85,stamina:92,foot:"L"},skin:"#e0ac82",hair:"#7a5229",hairStyle:"mohawk",headgear:!1,star:!1},{num:10,pos:"PR",first:"Payne",last:"Haes",age:28,heightCm:195,weightKg:122,attr:{speed:69,accel:74,agility:59,strength:99,tackle:91,pass:47,kick:35,hand:74,stamina:79,foot:"L"},skin:"#c68a5e",hair:"#4a2c14",hairStyle:"long",headgear:!1,star:!1},{num:11,pos:"SR",first:"Brendan",last:"Piakora",age:24,heightCm:189,weightKg:102,attr:{speed:71,accel:68,agility:61,strength:85,tackle:69,pass:65,kick:35,hand:72,stamina:73,foot:"R"},skin:"#f1c9a5",hair:"#c9a25a",hairStyle:"mohawk",headgear:!1,star:!1},{num:12,pos:"SR",first:"Jordan",last:"Riky",age:26,heightCm:190,weightKg:105,attr:{speed:76,accel:71,agility:62,strength:86,tackle:89,pass:55,kick:37,hand:76,stamina:85,foot:"R"},skin:"#e0ac82",hair:"#5e3a1c",hairStyle:"mohawk",headgear:!0,star:!1},{num:13,pos:"LK",first:"Patrick",last:"Carrigen",age:28,heightCm:190,weightKg:106,attr:{speed:70,accel:68,agility:59,strength:87,tackle:90,pass:75,kick:35,hand:76,stamina:94,foot:"R"},skin:"#e0ac82",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1}],nth:[{num:1,pos:"FB",first:"William",last:"Kennady",age:29,heightCm:183,weightKg:88,attr:{speed:87,accel:80,agility:76,strength:56,tackle:64,pass:72,kick:70,hand:90,stamina:86,foot:"R"},skin:"#a36a42",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:2,pos:"WG",first:"Sione",last:"Kattoa",age:29,heightCm:180,weightKg:88,attr:{speed:94,accel:97,agility:97,strength:68,tackle:50,pass:48,kick:45,hand:82,stamina:78,foot:"R"},skin:"#a36a42",hair:"#0d0d0d",hairStyle:"bald",headgear:!1,star:!1},{num:3,pos:"CE",first:"Jesse",last:"Ramyen",age:29,heightCm:184,weightKg:98,attr:{speed:85,accel:81,agility:75,strength:76,tackle:78,pass:59,kick:40,hand:80,stamina:80,foot:"R"},skin:"#e0ac82",hair:"#1a1209",hairStyle:"buzz",headgear:!1,star:!1},{num:4,pos:"CE",first:"KL",last:"Iru",age:26,heightCm:186,weightKg:97,attr:{speed:84,accel:82,agility:78,strength:83,tackle:78,pass:59,kick:39,hand:79,stamina:82,foot:"R"},skin:"#f1c9a5",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:5,pos:"WG",first:"Ronaldo",last:"Mullitalo",age:27,heightCm:190,weightKg:95,attr:{speed:94,accel:88,agility:83,strength:64,tackle:58,pass:56,kick:42,hand:84,stamina:82,foot:"R"},skin:"#e0ac82",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:6,pos:"FE",first:"Braydon",last:"Trindal",age:27,heightCm:180,weightKg:90,attr:{speed:77,accel:75,agility:79,strength:52,tackle:61,pass:99,kick:96,hand:85,stamina:78,foot:"R"},skin:"#e0ac82",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:7,pos:"HB",first:"Nicholas",last:"Hynas",age:30,heightCm:188,weightKg:90,attr:{speed:87,accel:89,agility:93,strength:62,tackle:68,pass:96,kick:84,hand:89,stamina:85,foot:"R"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"bald",headgear:!1,star:!1},{num:8,pos:"PR",first:"Addin",last:"Fonue-Blake",age:31,heightCm:189,weightKg:123,attr:{speed:72,accel:74,agility:57,strength:99,tackle:89,pass:61,kick:35,hand:68,stamina:69,foot:"R"},skin:"#a36a42",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:9,pos:"HK",first:"Blayke",last:"Brailei",age:28,heightCm:180,weightKg:80,attr:{speed:74,accel:80,agility:75,strength:64,tackle:94,pass:99,kick:49,hand:85,stamina:95,foot:"R"},skin:"#d9a47a",hair:"#5e3a1c",hairStyle:"buzz",headgear:!0,star:!1},{num:10,pos:"PR",first:"Toby",last:"Rudulf",age:30,heightCm:190,weightKg:106,attr:{speed:64,accel:61,agility:47,strength:95,tackle:79,pass:47,kick:35,hand:63,stamina:67,foot:"R"},skin:"#f1c9a5",hair:"#c9a25a",hairStyle:"afro",headgear:!1,star:!1},{num:11,pos:"SR",first:"Briton",last:"Nikore",age:28,heightCm:185,weightKg:94,attr:{speed:69,accel:63,agility:58,strength:75,tackle:87,pass:61,kick:35,hand:75,stamina:81,foot:"R"},skin:"#7a4a2c",hair:"#1a1209",hairStyle:"afro",headgear:!1,star:!1},{num:12,pos:"SR",first:"Teig",last:"Wiltun",age:27,heightCm:186,weightKg:98,attr:{speed:76,accel:69,agility:62,strength:80,tackle:85,pass:54,kick:35,hand:73,stamina:83,foot:"L"},skin:"#a36a42",hair:"#5e3a1c",hairStyle:"long",headgear:!1,star:!1},{num:13,pos:"LK",first:"Cameron",last:"McInnas",age:22,heightCm:184,weightKg:115,attr:{speed:67,accel:66,agility:62,strength:87,tackle:99,pass:73,kick:35,hand:72,stamina:86,foot:"L"},skin:"#8d5a3a",hair:"#7a5229",hairStyle:"mohawk",headgear:!1,star:!1}],irn:[{num:1,pos:"FB",first:"Tom",last:"Trbojewic",age:30,heightCm:194,weightKg:102,attr:{speed:88,accel:84,agility:86,strength:65,tackle:66,pass:81,kick:72,hand:93,stamina:69,foot:"R"},skin:"#e0ac82",hair:"#2b1a0d",hairStyle:"afro",headgear:!1,star:!1},{num:2,pos:"WG",first:"Jason",last:"Saeb",age:26,heightCm:199,weightKg:101,attr:{speed:91,accel:84,agility:76,strength:60,tackle:66,pass:59,kick:43,hand:77,stamina:83,foot:"R"},skin:"#d9a47a",hair:"#5e3a1c",hairStyle:"bald",headgear:!1,star:!1},{num:3,pos:"CE",first:"Tolutau",last:"Koulla",age:24,heightCm:180,weightKg:88,attr:{speed:99,accel:96,agility:86,strength:85,tackle:74,pass:70,kick:43,hand:76,stamina:76,foot:"L"},skin:"#d9a47a",hair:"#0d0d0d",hairStyle:"bald",headgear:!1,star:!1},{num:4,pos:"CE",first:"Reuben",last:"Garryck",age:29,heightCm:188,weightKg:98,attr:{speed:84,accel:80,agility:74,strength:75,tackle:75,pass:63,kick:42,hand:78,stamina:80,foot:"R"},skin:"#f1c9a5",hair:"#0d0d0d",hairStyle:"mohawk",headgear:!1,star:!1},{num:5,pos:"WG",first:"Lehi",last:"Hopoata",age:21,heightCm:190,weightKg:84,attr:{speed:97,accel:90,agility:84,strength:68,tackle:61,pass:62,kick:40,hand:84,stamina:85,foot:"L"},skin:"#a36a42",hair:"#7a5229",hairStyle:"short",headgear:!1,star:!1},{num:6,pos:"FE",first:"Luke",last:"Broocs",age:31,heightCm:180,weightKg:88,attr:{speed:78,accel:80,agility:80,strength:61,tackle:63,pass:88,kick:83,hand:85,stamina:83,foot:"R"},skin:"#e0ac82",hair:"#1a1209",hairStyle:"long",headgear:!1,star:!1},{num:7,pos:"HB",first:"Jamal",last:"Fogarti",age:32,heightCm:174,weightKg:87,attr:{speed:77,accel:79,agility:82,strength:50,tackle:61,pass:91,kick:94,hand:85,stamina:86,foot:"R"},skin:"#c68a5e",hair:"#0d0d0d",hairStyle:"short",headgear:!1,star:!1},{num:8,pos:"PR",first:"Taniela",last:"Paseca",age:29,heightCm:197,weightKg:120,attr:{speed:67,accel:65,agility:49,strength:99,tackle:83,pass:49,kick:35,hand:68,stamina:70,foot:"R"},skin:"#f1c9a5",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:9,pos:"HK",first:"Brandon",last:"Wakaham",age:27,heightCm:172,weightKg:78,attr:{speed:68,accel:71,agility:71,strength:60,tackle:84,pass:85,kick:48,hand:85,stamina:86,foot:"R"},skin:"#a36a42",hair:"#4a2c14",hairStyle:"afro",headgear:!1,star:!1},{num:10,pos:"PR",first:"Kobe",last:"Hetheryngton",age:27,heightCm:197,weightKg:115,attr:{speed:64,accel:63,agility:51,strength:88,tackle:85,pass:50,kick:35,hand:66,stamina:69,foot:"R"},skin:"#c68a5e",hair:"#5e3a1c",hairStyle:"short",headgear:!1,star:!1},{num:11,pos:"SR",first:"Haumole",last:"Olakau'ato",age:28,heightCm:196,weightKg:113,attr:{speed:87,accel:87,agility:79,strength:99,tackle:85,pass:71,kick:35,hand:66,stamina:81,foot:"R"},skin:"#f1c9a5",hair:"#1a1209",hairStyle:"buzz",headgear:!1,star:!1},{num:12,pos:"SR",first:"Ben",last:"Trbojewic",age:25,heightCm:193,weightKg:105,attr:{speed:80,accel:75,agility:65,strength:87,tackle:85,pass:68,kick:44,hand:77,stamina:80,foot:"L"},skin:"#5a3520",hair:"#5e3a1c",hairStyle:"buzz",headgear:!1,star:!1},{num:13,pos:"LK",first:"Jake",last:"Trbojevik",age:32,heightCm:185,weightKg:107,attr:{speed:69,accel:63,agility:55,strength:72,tackle:93,pass:66,kick:35,hand:79,stamina:86,foot:"R"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"long",headgear:!0,star:!1}],sun:[{num:1,pos:"FB",first:"Scott",last:"Drinkwatter",age:29,heightCm:181,weightKg:91,attr:{speed:78,accel:77,agility:78,strength:53,tackle:68,pass:87,kick:88,hand:84,stamina:86,foot:"L"},skin:"#a36a42",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:2,pos:"WG",first:"Braidon",last:"Borns",age:30,heightCm:185,weightKg:97,attr:{speed:96,accel:94,agility:90,strength:76,tackle:64,pass:57,kick:37,hand:83,stamina:81,foot:"R"},skin:"#c68a5e",hair:"#7a5229",hairStyle:"mohawk",headgear:!1,star:!1},{num:3,pos:"CE",first:"Jaxon",last:"Purdua",age:21,heightCm:186,weightKg:83,attr:{speed:86,accel:82,agility:76,strength:70,tackle:78,pass:73,kick:46,hand:79,stamina:84,foot:"L"},skin:"#c68a5e",hair:"#4a2c14",hairStyle:"long",headgear:!1,star:!1},{num:4,pos:"CE",first:"Tom",last:"Chezter",age:25,heightCm:182,weightKg:89,attr:{speed:93,accel:91,agility:83,strength:84,tackle:73,pass:60,kick:40,hand:75,stamina:83,foot:"R"},skin:"#5a3520",hair:"#5e3a1c",hairStyle:"afro",headgear:!1,star:!1},{num:5,pos:"WG",first:"Murray",last:"Taullagi",age:29,heightCm:180,weightKg:94,attr:{speed:93,accel:85,agility:78,strength:67,tackle:62,pass:59,kick:42,hand:83,stamina:83,foot:"R"},skin:"#8d5a3a",hair:"#0d0d0d",hairStyle:"buzz",headgear:!1,star:!1},{num:6,pos:"FE",first:"Jake",last:"Cliford",age:28,heightCm:184,weightKg:92,attr:{speed:83,accel:84,agility:85,strength:60,tackle:64,pass:83,kick:87,hand:82,stamina:81,foot:"R"},skin:"#8d5a3a",hair:"#0d0d0d",hairStyle:"afro",headgear:!1,star:!1},{num:7,pos:"HB",first:"Tom",last:"Deardan",age:25,heightCm:177,weightKg:87,attr:{speed:80,accel:88,agility:93,strength:62,tackle:71,pass:99,kick:80,hand:89,stamina:87,foot:"R"},skin:"#8d5a3a",hair:"#2b1a0d",hairStyle:"buzz",headgear:!1,star:!1},{num:8,pos:"PR",first:"Coen",last:"Hes",age:30,heightCm:190,weightKg:114,attr:{speed:69,accel:65,agility:45,strength:91,tackle:90,pass:47,kick:35,hand:65,stamina:68,foot:"R"},skin:"#a36a42",hair:"#7a5229",hairStyle:"bald",headgear:!1,star:!1},{num:9,pos:"HK",first:"Reed",last:"Mahonei",age:28,heightCm:175,weightKg:86,attr:{speed:77,accel:80,agility:79,strength:63,tackle:87,pass:86,kick:58,hand:75,stamina:91,foot:"R"},skin:"#a36a42",hair:"#c9a25a",hairStyle:"buzz",headgear:!1,star:!1},{num:10,pos:"PR",first:"Jason",last:"Taumallolo",age:33,heightCm:191,weightKg:115,attr:{speed:72,accel:74,agility:54,strength:99,tackle:71,pass:66,kick:35,hand:74,stamina:66,foot:"R"},skin:"#e0ac82",hair:"#0d0d0d",hairStyle:"long",headgear:!1,star:!1},{num:11,pos:"SR",first:"Heilum",last:"Luky",age:25,heightCm:195,weightKg:103,attr:{speed:84,accel:78,agility:68,strength:83,tackle:92,pass:54,kick:35,hand:72,stamina:86,foot:"L"},skin:"#f1c9a5",hair:"#7a5229",hairStyle:"mohawk",headgear:!1,star:!1},{num:12,pos:"SR",first:"Sam",last:"McIntyra",age:28,heightCm:190,weightKg:101,attr:{speed:71,accel:66,agility:57,strength:76,tackle:78,pass:62,kick:35,hand:75,stamina:75,foot:"R"},skin:"#c68a5e",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:13,pos:"LK",first:"Reuben",last:"Coter",age:27,heightCm:180,weightKg:95,attr:{speed:74,accel:69,agility:59,strength:79,tackle:84,pass:65,kick:35,hand:77,stamina:90,foot:"R"},skin:"#f1c9a5",hair:"#5e3a1c",hairStyle:"long",headgear:!1,star:!1}],rgr:[{num:1,pos:"FB",first:"Sualauvi",last:"Faalugo",age:23,heightCm:175,weightKg:82,attr:{speed:94,accel:93,agility:94,strength:66,tackle:64,pass:76,kick:70,hand:95,stamina:81,foot:"L"},skin:"#e0ac82",hair:"#7a5229",hairStyle:"buzz",headgear:!1,star:!1},{num:2,pos:"WG",first:"Will",last:"Warbrik",age:28,heightCm:193,weightKg:105,attr:{speed:91,accel:86,agility:83,strength:68,tackle:65,pass:52,kick:37,hand:76,stamina:78,foot:"R"},skin:"#5a3520",hair:"#0d0d0d",hairStyle:"mohawk",headgear:!1,star:!1},{num:3,pos:"CE",first:"Jack",last:"Hovarth",age:24,heightCm:193,weightKg:105,attr:{speed:81,accel:80,agility:75,strength:81,tackle:74,pass:62,kick:39,hand:79,stamina:78,foot:"R"},skin:"#7a4a2c",hair:"#2b1a0d",hairStyle:"mohawk",headgear:!1,star:!1},{num:4,pos:"CE",first:"Nick",last:"Meanay",age:29,heightCm:191,weightKg:98,attr:{speed:81,accel:75,agility:70,strength:68,tackle:77,pass:60,kick:41,hand:77,stamina:78,foot:"L"},skin:"#8d5a3a",hair:"#0d0d0d",hairStyle:"afro",headgear:!1,star:!1},{num:5,pos:"WG",first:"Moses",last:"Leu",age:29,heightCm:188,weightKg:95,attr:{speed:98,accel:97,agility:89,strength:63,tackle:64,pass:50,kick:42,hand:78,stamina:75,foot:"R"},skin:"#c68a5e",hair:"#7a5229",hairStyle:"short",headgear:!1,star:!1},{num:6,pos:"FE",first:"Cameron",last:"Munstar",age:32,heightCm:185,weightKg:89,attr:{speed:77,accel:81,agility:83,strength:67,tackle:69,pass:87,kick:81,hand:92,stamina:86,foot:"R"},skin:"#d9a47a",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:7,pos:"HB",first:"Jahrome",last:"Hughas",age:32,heightCm:183,weightKg:90,attr:{speed:84,accel:88,agility:93,strength:60,tackle:54,pass:99,kick:91,hand:98,stamina:81,foot:"R"},skin:"#7a4a2c",hair:"#c9a25a",hairStyle:"afro",headgear:!1,star:!0},{num:8,pos:"PR",first:"Stefano",last:"Utoikamano",age:26,heightCm:190,weightKg:111,attr:{speed:70,accel:76,agility:63,strength:99,tackle:90,pass:52,kick:35,hand:71,stamina:73,foot:"R"},skin:"#7a4a2c",hair:"#2b1a0d",hairStyle:"short",headgear:!0,star:!1},{num:9,pos:"HK",first:"Harry",last:"Grent",age:28,heightCm:177,weightKg:87,attr:{speed:77,accel:86,agility:83,strength:67,tackle:88,pass:95,kick:60,hand:85,stamina:94,foot:"R"},skin:"#8d5a3a",hair:"#4a2c14",hairStyle:"buzz",headgear:!1,star:!1},{num:10,pos:"PR",first:"Josh",last:"Kyng",age:30,heightCm:187,weightKg:105,attr:{speed:61,accel:55,agility:42,strength:83,tackle:86,pass:47,kick:35,hand:74,stamina:75,foot:"R"},skin:"#d9a47a",hair:"#c9a25a",hairStyle:"buzz",headgear:!1,star:!1},{num:11,pos:"SR",first:"Joe",last:"Chen",age:24,heightCm:190,weightKg:94,attr:{speed:78,accel:74,agility:64,strength:84,tackle:74,pass:58,kick:35,hand:72,stamina:74,foot:"R"},skin:"#7a4a2c",hair:"#c9a25a",hairStyle:"long",headgear:!0,star:!1},{num:12,pos:"SR",first:"Ativalu",last:"Lissati",age:25,heightCm:183,weightKg:99,attr:{speed:73,accel:67,agility:59,strength:86,tackle:90,pass:55,kick:35,hand:77,stamina:85,foot:"R"},skin:"#f1c9a5",hair:"#7a5229",hairStyle:"short",headgear:!1,star:!1},{num:13,pos:"LK",first:"Trent",last:"Loierro",age:25,heightCm:192,weightKg:104,attr:{speed:69,accel:70,agility:65,strength:85,tackle:91,pass:70,kick:45,hand:77,stamina:88,foot:"L"},skin:"#c68a5e",hair:"#5e3a1c",hairStyle:"long",headgear:!0,star:!1}],har:[{num:1,pos:"FB",first:"Dylan",last:"Edwerds",age:30,heightCm:183,weightKg:94,attr:{speed:84,accel:84,agility:84,strength:71,tackle:76,pass:72,kick:72,hand:88,stamina:86,foot:"R"},skin:"#e0ac82",hair:"#7a5229",hairStyle:"bald",headgear:!1,star:!1},{num:2,pos:"WG",first:"Thomas",last:"Jencins",age:25,heightCm:188,weightKg:94,attr:{speed:99,accel:95,agility:91,strength:72,tackle:69,pass:58,kick:60,hand:80,stamina:84,foot:"L"},skin:"#c68a5e",hair:"#5e3a1c",hairStyle:"short",headgear:!1,star:!1},{num:3,pos:"CE",first:"Paul",last:"Alamotti",age:22,heightCm:183,weightKg:98,attr:{speed:84,accel:86,agility:79,strength:78,tackle:73,pass:62,kick:44,hand:76,stamina:80,foot:"R"},skin:"#c68a5e",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:4,pos:"CE",first:"Casey",last:"McLeen",age:20,heightCm:187,weightKg:95,attr:{speed:87,accel:83,agility:78,strength:79,tackle:69,pass:72,kick:42,hand:80,stamina:80,foot:"R"},skin:"#f1c9a5",hair:"#5e3a1c",hairStyle:"bald",headgear:!1,star:!1},{num:5,pos:"WG",first:"Brian",last:"To'u",age:28,heightCm:182,weightKg:97,attr:{speed:96,accel:95,agility:89,strength:77,tackle:57,pass:48,kick:50,hand:80,stamina:83,foot:"R"},skin:"#5a3520",hair:"#4a2c14",hairStyle:"long",headgear:!1,star:!1},{num:6,pos:"FE",first:"Blaize",last:"Talagy",age:21,heightCm:184,weightKg:90,attr:{speed:80,accel:83,agility:84,strength:65,tackle:66,pass:81,kick:77,hand:83,stamina:82,foot:"L"},skin:"#8d5a3a",hair:"#5e3a1c",hairStyle:"long",headgear:!1,star:!1},{num:7,pos:"HB",first:"Nathan",last:"Clearie",age:29,heightCm:182,weightKg:92,attr:{speed:86,accel:90,agility:96,strength:63,tackle:61,pass:99,kick:99,hand:92,stamina:84,foot:"R"},skin:"#d9a47a",hair:"#c9a25a",hairStyle:"mohawk",headgear:!1,star:!0},{num:8,pos:"PR",first:"Moses",last:"Leotta",age:31,heightCm:182,weightKg:107,attr:{speed:64,accel:59,agility:44,strength:94,tackle:84,pass:64,kick:35,hand:69,stamina:68,foot:"R"},skin:"#a36a42",hair:"#4a2c14",hairStyle:"short",headgear:!1,star:!1},{num:9,pos:"HK",first:"Freddy",last:"Lussyck",age:26,heightCm:180,weightKg:85,attr:{speed:76,accel:78,agility:77,strength:65,tackle:95,pass:82,kick:53,hand:81,stamina:91,foot:"L"},skin:"#d9a47a",hair:"#0d0d0d",hairStyle:"afro",headgear:!1,star:!1},{num:10,pos:"PR",first:"Lindsay",last:"Smyth",age:26,heightCm:194,weightKg:106,attr:{speed:61,accel:56,agility:47,strength:84,tackle:91,pass:67,kick:37,hand:72,stamina:74,foot:"R"},skin:"#e0ac82",hair:"#c9a25a",hairStyle:"mohawk",headgear:!1,star:!1},{num:11,pos:"SR",first:"Isaiah",last:"Papaly'i",age:28,heightCm:182,weightKg:111,attr:{speed:70,accel:70,agility:64,strength:92,tackle:87,pass:66,kick:35,hand:78,stamina:82,foot:"R"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"buzz",headgear:!1,star:!1},{num:12,pos:"SR",first:"Liam",last:"Martyn",age:29,heightCm:183,weightKg:103,attr:{speed:77,accel:72,agility:69,strength:82,tackle:82,pass:62,kick:35,hand:72,stamina:79,foot:"R"},skin:"#5a3520",hair:"#7a5229",hairStyle:"short",headgear:!1,star:!1},{num:13,pos:"LK",first:"Isaah",last:"Yeu",age:32,heightCm:195,weightKg:106,attr:{speed:71,accel:72,agility:64,strength:92,tackle:97,pass:78,kick:38,hand:74,stamina:88,foot:"R"},skin:"#e0ac82",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1}],out:[{num:1,pos:"FB",first:"James",last:"Tedezco",age:33,heightCm:184,weightKg:95,attr:{speed:91,accel:91,agility:89,strength:69,tackle:71,pass:76,kick:74,hand:91,stamina:81,foot:"R"},skin:"#a36a42",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:2,pos:"WG",first:"Daniel",last:"Tupoo",age:23,heightCm:183,weightKg:99,attr:{speed:99,accel:90,agility:81,strength:69,tackle:53,pass:54,kick:39,hand:82,stamina:69,foot:"R"},skin:"#8d5a3a",hair:"#5e3a1c",hairStyle:"buzz",headgear:!1,star:!1},{num:3,pos:"CE",first:"Hugo",last:"Savela",age:24,heightCm:194,weightKg:96,attr:{speed:79,accel:74,agility:70,strength:65,tackle:85,pass:77,kick:47,hand:80,stamina:79,foot:"R"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"long",headgear:!1,star:!1},{num:4,pos:"CE",first:"Robert",last:"Toie",age:22,heightCm:183,weightKg:100,attr:{speed:90,accel:91,agility:87,strength:75,tackle:86,pass:69,kick:39,hand:72,stamina:88,foot:"R"},skin:"#7a4a2c",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:5,pos:"WG",first:"Mark",last:"Nawaqannitawase",age:26,heightCm:190,weightKg:100,attr:{speed:98,accel:93,agility:88,strength:74,tackle:64,pass:67,kick:55,hand:79,stamina:78,foot:"R"},skin:"#e0ac82",hair:"#0d0d0d",hairStyle:"afro",headgear:!1,star:!1},{num:6,pos:"FE",first:"Daly",last:"Cherri-Evans",age:21,heightCm:187,weightKg:86,attr:{speed:75,accel:75,agility:78,strength:54,tackle:75,pass:86,kick:96,hand:89,stamina:85,foot:"R"},skin:"#f1c9a5",hair:"#0d0d0d",hairStyle:"afro",headgear:!1,star:!1},{num:7,pos:"HB",first:"Sam",last:"Walkar",age:24,heightCm:183,weightKg:78,attr:{speed:82,accel:84,agility:91,strength:57,tackle:55,pass:95,kick:86,hand:93,stamina:82,foot:"L"},skin:"#f1c9a5",hair:"#4a2c14",hairStyle:"buzz",headgear:!1,star:!1},{num:8,pos:"PR",first:"Naufahu",last:"Whyta",age:24,heightCm:192,weightKg:106,attr:{speed:69,accel:72,agility:54,strength:99,tackle:80,pass:48,kick:35,hand:66,stamina:69,foot:"L"},skin:"#5a3520",hair:"#0d0d0d",hairStyle:"short",headgear:!1,star:!1},{num:9,pos:"HK",first:"Reece",last:"Robsun",age:28,heightCm:180,weightKg:93,attr:{speed:77,accel:81,agility:77,strength:69,tackle:90,pass:88,kick:47,hand:83,stamina:96,foot:"R"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"buzz",headgear:!1,star:!1},{num:10,pos:"PR",first:"Lindsay",last:"Colins",age:30,heightCm:194,weightKg:106,attr:{speed:69,accel:64,agility:50,strength:90,tackle:84,pass:47,kick:35,hand:63,stamina:68,foot:"R"},skin:"#e0ac82",hair:"#5e3a1c",hairStyle:"short",headgear:!0,star:!1},{num:11,pos:"SR",first:"Angus",last:"Crichtun",age:27,heightCm:186,weightKg:104,attr:{speed:72,accel:73,agility:66,strength:91,tackle:83,pass:55,kick:35,hand:75,stamina:79,foot:"R"},skin:"#7a4a2c",hair:"#c9a25a",hairStyle:"mohawk",headgear:!1,star:!1},{num:12,pos:"SR",first:"Siua",last:"Wung",age:23,heightCm:189,weightKg:107,attr:{speed:71,accel:69,agility:61,strength:87,tackle:89,pass:57,kick:36,hand:74,stamina:85,foot:"R"},skin:"#8d5a3a",hair:"#7a5229",hairStyle:"long",headgear:!1,star:!1},{num:13,pos:"LK",first:"Victor",last:"Radlay",age:28,heightCm:182,weightKg:92,attr:{speed:68,accel:65,agility:60,strength:82,tackle:85,pass:76,kick:46,hand:71,stamina:85,foot:"R"},skin:"#d9a47a",hair:"#0d0d0d",hairStyle:"short",headgear:!1,star:!1}],soc:[{num:1,pos:"FB",first:"Kaeo",last:"Weeces",age:24,heightCm:183,weightKg:90,attr:{speed:92,accel:92,agility:88,strength:61,tackle:65,pass:66,kick:74,hand:87,stamina:84,foot:"L"},skin:"#e0ac82",hair:"#7a5229",hairStyle:"bald",headgear:!1,star:!1},{num:2,pos:"WG",first:"Savelio",last:"Tamala",age:21,heightCm:182,weightKg:96,attr:{speed:95,accel:94,agility:90,strength:74,tackle:57,pass:52,kick:50,hand:77,stamina:72,foot:"L"},skin:"#d9a47a",hair:"#0d0d0d",hairStyle:"bald",headgear:!1,star:!1},{num:3,pos:"CE",first:"Simi",last:"Sassagi",age:25,heightCm:184,weightKg:102,attr:{speed:88,accel:90,agility:84,strength:90,tackle:76,pass:74,kick:43,hand:84,stamina:81,foot:"R"},skin:"#c68a5e",hair:"#5e3a1c",hairStyle:"mohawk",headgear:!1,star:!1},{num:4,pos:"CE",first:"Matthew",last:"Timoku",age:26,heightCm:183,weightKg:97,attr:{speed:85,accel:88,agility:81,strength:88,tackle:78,pass:60,kick:39,hand:83,stamina:78,foot:"R"},skin:"#e0ac82",hair:"#5e3a1c",hairStyle:"bald",headgear:!1,star:!1},{num:5,pos:"WG",first:"Xavier",last:"Savege",age:24,heightCm:185,weightKg:95,attr:{speed:96,accel:91,agility:78,strength:59,tackle:65,pass:53,kick:55,hand:78,stamina:81,foot:"R"},skin:"#8d5a3a",hair:"#2b1a0d",hairStyle:"bald",headgear:!1,star:!1},{num:6,pos:"FE",first:"Ethan",last:"Stranga",age:22,heightCm:186,weightKg:92,attr:{speed:83,accel:92,agility:96,strength:64,tackle:71,pass:82,kick:76,hand:87,stamina:81,foot:"R"},skin:"#d9a47a",hair:"#4a2c14",hairStyle:"buzz",headgear:!1,star:!1},{num:7,pos:"HB",first:"Ethan",last:"Sandars",age:22,heightCm:185,weightKg:91,attr:{speed:77,accel:80,agility:83,strength:49,tackle:55,pass:91,kick:97,hand:80,stamina:84,foot:"R"},skin:"#d9a47a",hair:"#4a2c14",hairStyle:"afro",headgear:!1,star:!1},{num:8,pos:"PR",first:"Corey",last:"Horzburgh",age:27,heightCm:186,weightKg:117,attr:{speed:60,accel:57,agility:45,strength:90,tackle:91,pass:56,kick:35,hand:76,stamina:77,foot:"L"},skin:"#c68a5e",hair:"#c9a25a",hairStyle:"mohawk",headgear:!1,star:!1},{num:9,pos:"HK",first:"Tom",last:"Starlyng",age:25,heightCm:177,weightKg:81,attr:{speed:80,accel:80,agility:76,strength:70,tackle:83,pass:85,kick:46,hand:90,stamina:87,foot:"L"},skin:"#5a3520",hair:"#c9a25a",hairStyle:"bald",headgear:!0,star:!1},{num:10,pos:"PR",first:"Joseph",last:"Tapinne",age:32,heightCm:190,weightKg:106,attr:{speed:59,accel:62,agility:49,strength:99,tackle:86,pass:51,kick:35,hand:75,stamina:74,foot:"R"},skin:"#8d5a3a",hair:"#c9a25a",hairStyle:"short",headgear:!0,star:!1},{num:11,pos:"SR",first:"Hudson",last:"Yoong",age:28,heightCm:183,weightKg:98,attr:{speed:74,accel:73,agility:70,strength:91,tackle:79,pass:72,kick:45,hand:69,stamina:82,foot:"R"},skin:"#f1c9a5",hair:"#7a5229",hairStyle:"short",headgear:!0,star:!1},{num:12,pos:"SR",first:"Noah",last:"Martyn",age:21,heightCm:185,weightKg:98,attr:{speed:80,accel:76,agility:70,strength:78,tackle:92,pass:54,kick:35,hand:72,stamina:85,foot:"R"},skin:"#e0ac82",hair:"#0d0d0d",hairStyle:"long",headgear:!1,star:!1},{num:13,pos:"LK",first:"Jayden",last:"Brailie",age:30,heightCm:180,weightKg:86,attr:{speed:67,accel:64,agility:53,strength:72,tackle:94,pass:71,kick:35,hand:81,stamina:77,foot:"L"},skin:"#c68a5e",hair:"#5e3a1c",hairStyle:"buzz",headgear:!1,star:!1}],tim:[{num:1,pos:"FB",first:"Connor",last:"Tracie",age:30,heightCm:183,weightKg:88,attr:{speed:84,accel:78,agility:74,strength:60,tackle:65,pass:63,kick:71,hand:90,stamina:84,foot:"R"},skin:"#8d5a3a",hair:"#5e3a1c",hairStyle:"long",headgear:!1,star:!1},{num:2,pos:"WG",first:"Jacob",last:"Kirez",age:25,heightCm:187,weightKg:92,attr:{speed:89,accel:86,agility:82,strength:72,tackle:64,pass:60,kick:45,hand:87,stamina:79,foot:"R"},skin:"#7a4a2c",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:3,pos:"CE",first:"Bronson",last:"Xerry",age:26,heightCm:187,weightKg:99,attr:{speed:81,accel:82,agility:74,strength:76,tackle:76,pass:64,kick:39,hand:78,stamina:76,foot:"R"},skin:"#a36a42",hair:"#4a2c14",hairStyle:"short",headgear:!1,star:!1},{num:4,pos:"CE",first:"Stephen",last:"Crichtun",age:26,heightCm:193,weightKg:99,attr:{speed:86,accel:82,agility:71,strength:71,tackle:72,pass:74,kick:57,hand:81,stamina:80,foot:"R"},skin:"#8d5a3a",hair:"#0d0d0d",hairStyle:"short",headgear:!1,star:!1},{num:5,pos:"WG",first:"Marcelo",last:"Muntoya",age:20,heightCm:182,weightKg:97,attr:{speed:84,accel:86,agility:81,strength:67,tackle:56,pass:48,kick:37,hand:76,stamina:86,foot:"R"},skin:"#f1c9a5",hair:"#4a2c14",hairStyle:"short",headgear:!1,star:!1},{num:6,pos:"FE",first:"Matt",last:"Burtun",age:26,heightCm:196,weightKg:101,attr:{speed:86,accel:89,agility:89,strength:77,tackle:68,pass:80,kick:85,hand:83,stamina:81,foot:"R"},skin:"#5a3520",hair:"#5e3a1c",hairStyle:"buzz",headgear:!1,star:!1},{num:7,pos:"HB",first:"Lachlan",last:"Galwin",age:21,heightCm:190,weightKg:85,attr:{speed:84,accel:89,agility:94,strength:68,tackle:69,pass:92,kick:91,hand:88,stamina:87,foot:"R"},skin:"#d9a47a",hair:"#c9a25a",hairStyle:"afro",headgear:!1,star:!1},{num:8,pos:"PR",first:"Max",last:"Kyng",age:29,heightCm:188,weightKg:105,attr:{speed:65,accel:62,agility:49,strength:94,tackle:89,pass:52,kick:35,hand:73,stamina:76,foot:"R"},skin:"#c68a5e",hair:"#2b1a0d",hairStyle:"mohawk",headgear:!1,star:!1},{num:9,pos:"HK",first:"Bailey",last:"Haywerd",age:25,heightCm:175,weightKg:89,attr:{speed:69,accel:72,agility:69,strength:58,tackle:85,pass:87,kick:48,hand:82,stamina:95,foot:"R"},skin:"#a36a42",hair:"#7a5229",hairStyle:"mohawk",headgear:!0,star:!1},{num:10,pos:"PR",first:"Leo",last:"Thompzon",age:26,heightCm:186,weightKg:107,attr:{speed:58,accel:57,agility:43,strength:89,tackle:85,pass:50,kick:35,hand:60,stamina:77,foot:"R"},skin:"#7a4a2c",hair:"#1a1209",hairStyle:"mohawk",headgear:!1,star:!1},{num:11,pos:"SR",first:"Viliame",last:"Kikeu",age:31,heightCm:196,weightKg:114,attr:{speed:76,accel:75,agility:67,strength:83,tackle:72,pass:62,kick:35,hand:83,stamina:78,foot:"R"},skin:"#c68a5e",hair:"#7a5229",hairStyle:"buzz",headgear:!1,star:!1},{num:12,pos:"SR",first:"Jacob",last:"Prezton",age:25,heightCm:189,weightKg:100,attr:{speed:83,accel:78,agility:71,strength:83,tackle:92,pass:63,kick:45,hand:73,stamina:84,foot:"L"},skin:"#5a3520",hair:"#4a2c14",hairStyle:"buzz",headgear:!0,star:!1},{num:13,pos:"LK",first:"Jaeman",last:"Salmun",age:27,heightCm:187,weightKg:94,attr:{speed:79,accel:76,agility:66,strength:85,tackle:85,pass:77,kick:41,hand:72,stamina:85,foot:"R"},skin:"#7a4a2c",hair:"#5e3a1c",hairStyle:"short",headgear:!1,star:!1}],riv:[{num:1,pos:"FB",first:"Taine",last:"Tuaupici",age:27,heightCm:178,weightKg:83,attr:{speed:90,accel:91,agility:90,strength:64,tackle:73,pass:61,kick:71,hand:86,stamina:80,foot:"R"},skin:"#d9a47a",hair:"#5e3a1c",hairStyle:"short",headgear:!1,star:!1},{num:2,pos:"WG",first:"Dallin",last:"Watene-Zelezniek",age:31,heightCm:186,weightKg:97,attr:{speed:95,accel:88,agility:82,strength:64,tackle:61,pass:50,kick:40,hand:83,stamina:78,foot:"R"},skin:"#c68a5e",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:3,pos:"CE",first:"Ali",last:"Leiataoa",age:23,heightCm:188,weightKg:102,attr:{speed:84,accel:83,agility:75,strength:70,tackle:74,pass:67,kick:39,hand:79,stamina:80,foot:"R"},skin:"#8d5a3a",hair:"#5e3a1c",hairStyle:"short",headgear:!1,star:!1},{num:4,pos:"CE",first:"Adam",last:"Pompei",age:28,heightCm:190,weightKg:101,attr:{speed:80,accel:75,agility:69,strength:72,tackle:71,pass:68,kick:41,hand:76,stamina:79,foot:"R"},skin:"#e0ac82",hair:"#2b1a0d",hairStyle:"long",headgear:!1,star:!1},{num:5,pos:"WG",first:"Alofiana",last:"Khan-Peraira",age:25,heightCm:183,weightKg:85,attr:{speed:96,accel:89,agility:82,strength:55,tackle:58,pass:57,kick:38,hand:83,stamina:77,foot:"R"},skin:"#c68a5e",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:6,pos:"FE",first:"Chanel",last:"Haris-Tavita",age:27,heightCm:183,weightKg:89,attr:{speed:80,accel:78,agility:78,strength:55,tackle:61,pass:89,kick:86,hand:86,stamina:79,foot:"L"},skin:"#a36a42",hair:"#4a2c14",hairStyle:"short",headgear:!1,star:!1},{num:7,pos:"HB",first:"Te",last:"Maire Martyn",age:31,heightCm:181,weightKg:87,attr:{speed:85,accel:93,agility:99,strength:64,tackle:62,pass:95,kick:83,hand:86,stamina:87,foot:"R"},skin:"#8d5a3a",hair:"#2b1a0d",hairStyle:"buzz",headgear:!1,star:!1},{num:8,pos:"PR",first:"James",last:"Fishar-Harris",age:30,heightCm:187,weightKg:103,attr:{speed:63,accel:59,agility:48,strength:97,tackle:81,pass:54,kick:35,hand:69,stamina:74,foot:"R"},skin:"#5a3520",hair:"#c9a25a",hairStyle:"afro",headgear:!1,star:!1},{num:9,pos:"HK",first:"Wayde",last:"Egen",age:29,heightCm:185,weightKg:91,attr:{speed:77,accel:81,agility:75,strength:67,tackle:85,pass:99,kick:45,hand:87,stamina:89,foot:"R"},skin:"#c68a5e",hair:"#5e3a1c",hairStyle:"short",headgear:!1,star:!1},{num:10,pos:"PR",first:"Jackson",last:"Furd",age:28,heightCm:187,weightKg:101,attr:{speed:70,accel:67,agility:54,strength:95,tackle:83,pass:47,kick:35,hand:67,stamina:81,foot:"R"},skin:"#d9a47a",hair:"#0d0d0d",hairStyle:"afro",headgear:!1,star:!1},{num:11,pos:"SR",first:"Leka",last:"Halasyma",age:21,heightCm:185,weightKg:100,attr:{speed:85,accel:87,agility:79,strength:89,tackle:71,pass:59,kick:35,hand:65,stamina:74,foot:"R"},skin:"#f1c9a5",hair:"#c9a25a",hairStyle:"buzz",headgear:!1,star:!1},{num:12,pos:"SR",first:"Jacob",last:"Laben",age:22,heightCm:189,weightKg:110,attr:{speed:78,accel:74,agility:70,strength:83,tackle:81,pass:59,kick:35,hand:69,stamina:78,foot:"R"},skin:"#c68a5e",hair:"#4a2c14",hairStyle:"short",headgear:!0,star:!1},{num:13,pos:"LK",first:"Erin",last:"Clerk",age:29,heightCm:180,weightKg:98,attr:{speed:82,accel:82,agility:75,strength:99,tackle:91,pass:87,kick:36,hand:80,stamina:82,foot:"R"},skin:"#5a3520",hair:"#0d0d0d",hairStyle:"short",headgear:!1,star:!1}],sal:[{num:1,pos:"FB",first:"Kalyn",last:"Ponge",age:28,heightCm:184,weightKg:92,attr:{speed:88,accel:90,agility:88,strength:62,tackle:64,pass:81,kick:81,hand:89,stamina:80,foot:"L"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:2,pos:"WG",first:"Dominic",last:"Yoong",age:25,heightCm:200,weightKg:107,attr:{speed:99,accel:99,agility:92,strength:67,tackle:60,pass:58,kick:48,hand:75,stamina:79,foot:"R"},skin:"#5a3520",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:3,pos:"CE",first:"Dane",last:"Gagay",age:35,heightCm:182,weightKg:92,attr:{speed:78,accel:83,agility:81,strength:75,tackle:67,pass:74,kick:43,hand:76,stamina:82,foot:"R"},skin:"#8d5a3a",hair:"#7a5229",hairStyle:"mohawk",headgear:!1,star:!1},{num:4,pos:"CE",first:"Bradman",last:"Bezt",age:25,heightCm:182,weightKg:103,attr:{speed:85,accel:82,agility:71,strength:78,tackle:79,pass:81,kick:42,hand:80,stamina:82,foot:"L"},skin:"#c68a5e",hair:"#4a2c14",hairStyle:"short",headgear:!1,star:!1},{num:5,pos:"WG",first:"Greg",last:"Marzhev",age:29,heightCm:177,weightKg:104,attr:{speed:99,accel:97,agility:93,strength:75,tackle:52,pass:49,kick:46,hand:81,stamina:77,foot:"L"},skin:"#e0ac82",hair:"#0d0d0d",hairStyle:"mohawk",headgear:!1,star:!1},{num:6,pos:"FE",first:"Fletcher",last:"Sharpa",age:22,heightCm:186,weightKg:86,attr:{speed:91,accel:89,agility:92,strength:71,tackle:71,pass:86,kick:76,hand:91,stamina:81,foot:"R"},skin:"#c68a5e",hair:"#1a1209",hairStyle:"bald",headgear:!1,star:!1},{num:7,pos:"HB",first:"Dylan",last:"Brovn",age:26,heightCm:183,weightKg:89,attr:{speed:83,accel:89,agility:90,strength:71,tackle:70,pass:89,kick:87,hand:85,stamina:84,foot:"R"},skin:"#d9a47a",hair:"#5e3a1c",hairStyle:"long",headgear:!1,star:!1},{num:8,pos:"PR",first:"Jacob",last:"Saifity",age:30,heightCm:195,weightKg:114,attr:{speed:63,accel:59,agility:42,strength:90,tackle:78,pass:54,kick:35,hand:74,stamina:70,foot:"R"},skin:"#8d5a3a",hair:"#7a5229",hairStyle:"long",headgear:!1,star:!1},{num:9,pos:"HK",first:"Phoenix",last:"Crosland",age:26,heightCm:183,weightKg:86,attr:{speed:68,accel:70,agility:70,strength:57,tackle:90,pass:79,kick:54,hand:83,stamina:96,foot:"R"},skin:"#a36a42",hair:"#7a5229",hairStyle:"mohawk",headgear:!1,star:!1},{num:10,pos:"PR",first:"Trey",last:"Moonei",age:24,heightCm:188,weightKg:106,attr:{speed:69,accel:66,agility:57,strength:91,tackle:88,pass:48,kick:35,hand:64,stamina:74,foot:"R"},skin:"#e0ac82",hair:"#0d0d0d",hairStyle:"buzz",headgear:!1,star:!1},{num:11,pos:"SR",first:"Dylan",last:"Lukas",age:26,heightCm:184,weightKg:96,attr:{speed:88,accel:82,agility:71,strength:89,tackle:95,pass:54,kick:36,hand:74,stamina:82,foot:"R"},skin:"#d9a47a",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:12,pos:"SR",first:"Jermaine",last:"McEwan",age:21,heightCm:185,weightKg:106,attr:{speed:73,accel:70,agility:62,strength:83,tackle:81,pass:60,kick:35,hand:70,stamina:84,foot:"R"},skin:"#8d5a3a",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:13,pos:"LK",first:"Mat",last:"Crocer",age:27,heightCm:191,weightKg:108,attr:{speed:68,accel:65,agility:57,strength:81,tackle:87,pass:74,kick:35,hand:80,stamina:85,foot:"R"},skin:"#a36a42",hair:"#5e3a1c",hairStyle:"buzz",headgear:!0,star:!1}],tab:[{num:1,pos:"FB",first:"Hamiso",last:"Tabuay-Fidow",age:25,heightCm:186,weightKg:89,attr:{speed:93,accel:89,agility:84,strength:62,tackle:75,pass:74,kick:69,hand:87,stamina:86,foot:"R"},skin:"#5a3520",hair:"#5e3a1c",hairStyle:"short",headgear:!1,star:!1},{num:2,pos:"WG",first:"Jamayne",last:"Isaeko",age:30,heightCm:180,weightKg:95,attr:{speed:95,accel:88,agility:83,strength:66,tackle:61,pass:54,kick:42,hand:86,stamina:83,foot:"R"},skin:"#c68a5e",hair:"#2b1a0d",hairStyle:"bald",headgear:!1,star:!1},{num:3,pos:"CE",first:"Jack",last:"Bostuck",age:23,heightCm:194,weightKg:97,attr:{speed:81,accel:78,agility:72,strength:81,tackle:80,pass:74,kick:40,hand:70,stamina:83,foot:"L"},skin:"#f1c9a5",hair:"#c9a25a",hairStyle:"buzz",headgear:!1,star:!1},{num:4,pos:"CE",first:"Herbie",last:"Farnvorth",age:26,heightCm:190,weightKg:106,attr:{speed:88,accel:94,agility:91,strength:91,tackle:88,pass:69,kick:41,hand:81,stamina:83,foot:"R"},skin:"#8d5a3a",hair:"#c9a25a",hairStyle:"short",headgear:!1,star:!1},{num:5,pos:"WG",first:"Selwyn",last:"Cobbu",age:24,heightCm:192,weightKg:105,attr:{speed:99,accel:98,agility:93,strength:71,tackle:64,pass:58,kick:52,hand:75,stamina:81,foot:"L"},skin:"#7a4a2c",hair:"#c9a25a",hairStyle:"mohawk",headgear:!1,star:!1},{num:6,pos:"FE",first:"Kodi",last:"Nikorrima",age:32,heightCm:174,weightKg:82,attr:{speed:75,accel:76,agility:78,strength:54,tackle:72,pass:94,kick:76,hand:88,stamina:83,foot:"R"},skin:"#8d5a3a",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:7,pos:"HB",first:"Isaiya",last:"Kattoa",age:22,heightCm:181,weightKg:91,attr:{speed:74,accel:76,agility:80,strength:54,tackle:62,pass:92,kick:99,hand:84,stamina:86,foot:"R"},skin:"#a36a42",hair:"#0d0d0d",hairStyle:"long",headgear:!1,star:!1},{num:8,pos:"PR",first:"Thomas",last:"Fleglar",age:27,heightCm:190,weightKg:110,attr:{speed:68,accel:65,agility:51,strength:92,tackle:90,pass:47,kick:35,hand:67,stamina:65,foot:"R"},skin:"#7a4a2c",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:9,pos:"HK",first:"Jeremy",last:"Marshell-King",age:30,heightCm:186,weightKg:83,attr:{speed:79,accel:80,agility:77,strength:65,tackle:93,pass:82,kick:44,hand:87,stamina:95,foot:"L"},skin:"#8d5a3a",hair:"#7a5229",hairStyle:"bald",headgear:!1,star:!1},{num:10,pos:"PR",first:"Francis",last:"Mollo",age:32,heightCm:183,weightKg:112,attr:{speed:69,accel:62,agility:44,strength:97,tackle:94,pass:52,kick:35,hand:68,stamina:66,foot:"R"},skin:"#8d5a3a",hair:"#1a1209",hairStyle:"afro",headgear:!1,star:!1},{num:11,pos:"SR",first:"Connelly",last:"Lemuelo",age:28,heightCm:190,weightKg:106,attr:{speed:79,accel:76,agility:66,strength:85,tackle:88,pass:62,kick:35,hand:70,stamina:82,foot:"R"},skin:"#d9a47a",hair:"#4a2c14",hairStyle:"long",headgear:!1,star:!1},{num:12,pos:"SR",first:"Kulikefu",last:"Finefeuiaci",age:22,heightCm:190,weightKg:105,attr:{speed:79,accel:78,agility:65,strength:97,tackle:89,pass:55,kick:35,hand:70,stamina:85,foot:"L"},skin:"#d9a47a",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:13,pos:"LK",first:"Morgan",last:"Knowlas",age:30,heightCm:180,weightKg:96,attr:{speed:72,accel:68,agility:56,strength:81,tackle:85,pass:66,kick:35,hand:78,stamina:86,foot:"R"},skin:"#c68a5e",hair:"#7a5229",hairStyle:"bald",headgear:!1,star:!1}],cop:[{num:1,pos:"FB",first:"Keano",last:"Kinni",age:22,heightCm:177,weightKg:83,attr:{speed:85,accel:85,agility:84,strength:67,tackle:54,pass:72,kick:71,hand:94,stamina:83,foot:"R"},skin:"#f1c9a5",hair:"#1a1209",hairStyle:"short",headgear:!1,star:!1},{num:2,pos:"WG",first:"Sialetili",last:"Faeamanni",age:22,heightCm:175,weightKg:94,attr:{speed:87,accel:90,agility:84,strength:69,tackle:61,pass:54,kick:37,hand:79,stamina:82,foot:"R"},skin:"#d9a47a",hair:"#2b1a0d",hairStyle:"long",headgear:!1,star:!1},{num:3,pos:"CE",first:"Jojo",last:"Fifite",age:23,heightCm:184,weightKg:104,attr:{speed:87,accel:83,agility:74,strength:74,tackle:83,pass:62,kick:39,hand:79,stamina:85,foot:"L"},skin:"#5a3520",hair:"#0d0d0d",hairStyle:"buzz",headgear:!1,star:!1},{num:4,pos:"CE",first:"AJ",last:"Brimsun",age:28,heightCm:181,weightKg:89,attr:{speed:84,accel:81,agility:71,strength:66,tackle:79,pass:68,kick:49,hand:75,stamina:82,foot:"R"},skin:"#c68a5e",hair:"#c9a25a",hairStyle:"bald",headgear:!1,star:!1},{num:5,pos:"WG",first:"Phillip",last:"Samy",age:29,heightCm:186,weightKg:97,attr:{speed:90,accel:89,agility:83,strength:81,tackle:62,pass:50,kick:45,hand:79,stamina:81,foot:"R"},skin:"#c68a5e",hair:"#5e3a1c",hairStyle:"bald",headgear:!1,star:!1},{num:6,pos:"FE",first:"Jayden",last:"Campbel",age:26,heightCm:183,weightKg:84,attr:{speed:91,accel:92,agility:91,strength:68,tackle:60,pass:84,kick:92,hand:87,stamina:82,foot:"R"},skin:"#7a4a2c",hair:"#7a5229",hairStyle:"short",headgear:!1,star:!1},{num:7,pos:"HB",first:"Zane",last:"Harrizon",age:20,heightCm:176,weightKg:84,attr:{speed:70,accel:73,agility:79,strength:51,tackle:66,pass:86,kick:83,hand:88,stamina:86,foot:"R"},skin:"#8d5a3a",hair:"#5e3a1c",hairStyle:"short",headgear:!1,star:!1},{num:8,pos:"PR",first:"Moeaki",last:"Fotuaike",age:27,heightCm:185,weightKg:110,attr:{speed:65,accel:61,agility:45,strength:93,tackle:86,pass:54,kick:35,hand:65,stamina:72,foot:"R"},skin:"#c68a5e",hair:"#1a1209",hairStyle:"buzz",headgear:!1,star:!1},{num:9,pos:"HK",first:"Oliver",last:"Paskoe",age:27,heightCm:183,weightKg:83,attr:{speed:78,accel:83,agility:83,strength:69,tackle:93,pass:89,kick:46,hand:87,stamina:93,foot:"R"},skin:"#a36a42",hair:"#5e3a1c",hairStyle:"short",headgear:!0,star:!1},{num:10,pos:"PR",first:"Tino",last:"Fa'asuemaleaui",age:26,heightCm:197,weightKg:115,attr:{speed:66,accel:66,agility:52,strength:99,tackle:81,pass:67,kick:35,hand:60,stamina:77,foot:"R"},skin:"#e0ac82",hair:"#0d0d0d",hairStyle:"buzz",headgear:!0,star:!1},{num:11,pos:"SR",first:"Arama",last:"Hao",age:22,heightCm:190,weightKg:104,attr:{speed:80,accel:77,agility:71,strength:76,tackle:81,pass:56,kick:35,hand:72,stamina:78,foot:"L"},skin:"#e0ac82",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:12,pos:"SR",first:"Beau",last:"Fermur",age:28,heightCm:189,weightKg:99,attr:{speed:74,accel:71,agility:63,strength:89,tackle:85,pass:61,kick:35,hand:73,stamina:84,foot:"L"},skin:"#a36a42",hair:"#5e3a1c",hairStyle:"buzz",headgear:!1,star:!1},{num:13,pos:"LK",first:"Chris",last:"Randal",age:30,heightCm:183,weightKg:94,attr:{speed:71,accel:71,agility:62,strength:84,tackle:97,pass:74,kick:45,hand:79,stamina:84,foot:"R"},skin:"#c68a5e",hair:"#2b1a0d",hairStyle:"buzz",headgear:!1,star:!1}],gec:[{num:1,pos:"FB",first:"Isaiah",last:"Iongy",age:23,heightCm:180,weightKg:86,attr:{speed:83,accel:82,agility:83,strength:62,tackle:76,pass:70,kick:70,hand:87,stamina:79,foot:"L"},skin:"#c68a5e",hair:"#0d0d0d",hairStyle:"mohawk",headgear:!1,star:!1},{num:2,pos:"WG",first:"Brian",last:"Kelli",age:30,heightCm:181,weightKg:94,attr:{speed:88,accel:86,agility:79,strength:72,tackle:59,pass:68,kick:60,hand:81,stamina:86,foot:"L"},skin:"#7a4a2c",hair:"#1a1209",hairStyle:"afro",headgear:!1,star:!1},{num:3,pos:"CE",first:"Will",last:"Penizini",age:24,heightCm:183,weightKg:101,attr:{speed:86,accel:86,agility:79,strength:81,tackle:78,pass:60,kick:39,hand:77,stamina:80,foot:"R"},skin:"#f1c9a5",hair:"#c9a25a",hairStyle:"afro",headgear:!1,star:!1},{num:4,pos:"CE",first:"Sean",last:"Russall",age:25,heightCm:185,weightKg:102,attr:{speed:78,accel:72,agility:66,strength:67,tackle:76,pass:63,kick:39,hand:76,stamina:76,foot:"L"},skin:"#e0ac82",hair:"#1a1209",hairStyle:"afro",headgear:!1,star:!1},{num:5,pos:"WG",first:"Josh",last:"Addu-Carr",age:31,heightCm:183,weightKg:90,attr:{speed:95,accel:92,agility:82,strength:61,tackle:67,pass:50,kick:48,hand:81,stamina:84,foot:"R"},skin:"#8d5a3a",hair:"#0d0d0d",hairStyle:"buzz",headgear:!1,star:!1},{num:6,pos:"FE",first:"Ronald",last:"Volcman",age:24,heightCm:179,weightKg:91,attr:{speed:84,accel:86,agility:88,strength:63,tackle:56,pass:84,kick:84,hand:85,stamina:81,foot:"R"},skin:"#e0ac82",hair:"#2b1a0d",hairStyle:"buzz",headgear:!1,star:!1},{num:7,pos:"HB",first:"Mitchell",last:"Mosas",age:32,heightCm:182,weightKg:87,attr:{speed:78,accel:80,agility:82,strength:51,tackle:53,pass:92,kick:95,hand:85,stamina:84,foot:"L"},skin:"#f1c9a5",hair:"#5e3a1c",hairStyle:"long",headgear:!1,star:!1},{num:8,pos:"PR",first:"Luca",last:"Moreti",age:26,heightCm:188,weightKg:102,attr:{speed:71,accel:68,agility:56,strength:91,tackle:88,pass:47,kick:35,hand:58,stamina:65,foot:"R"},skin:"#f1c9a5",hair:"#1a1209",hairStyle:"mohawk",headgear:!1,star:!1},{num:9,pos:"HK",first:"Tallyn",last:"Da Silwa",age:21,heightCm:182,weightKg:89,attr:{speed:86,accel:85,agility:87,strength:66,tackle:75,pass:86,kick:46,hand:77,stamina:87,foot:"R"},skin:"#7a4a2c",hair:"#4a2c14",hairStyle:"bald",headgear:!0,star:!1},{num:10,pos:"PR",first:"Junior",last:"Paulu",age:33,heightCm:185,weightKg:110,attr:{speed:63,accel:58,agility:44,strength:91,tackle:76,pass:64,kick:35,hand:67,stamina:68,foot:"L"},skin:"#7a4a2c",hair:"#5e3a1c",hairStyle:"buzz",headgear:!0,star:!1},{num:11,pos:"SR",first:"Kelma",last:"Tuilagy",age:23,heightCm:190,weightKg:111,attr:{speed:81,accel:78,agility:68,strength:90,tackle:80,pass:59,kick:35,hand:70,stamina:78,foot:"R"},skin:"#7a4a2c",hair:"#5e3a1c",hairStyle:"short",headgear:!1,star:!1},{num:12,pos:"SR",first:"Kitione",last:"Kauttoga",age:24,heightCm:185,weightKg:104,attr:{speed:73,accel:70,agility:61,strength:84,tackle:79,pass:62,kick:35,hand:72,stamina:82,foot:"R"},skin:"#5a3520",hair:"#4a2c14",hairStyle:"afro",headgear:!0,star:!1},{num:13,pos:"LK",first:"Jack",last:"De Belyn",age:23,heightCm:185,weightKg:106,attr:{speed:69,accel:64,agility:52,strength:79,tackle:94,pass:66,kick:35,hand:76,stamina:80,foot:"R"},skin:"#a36a42",hair:"#0d0d0d",hairStyle:"mohawk",headgear:!1,star:!1}],wom:[{num:1,pos:"FB",first:"Jye",last:"Grai",age:22,heightCm:170,weightKg:78,attr:{speed:85,accel:86,agility:84,strength:61,tackle:72,pass:67,kick:73,hand:91,stamina:71,foot:"R"},skin:"#8d5a3a",hair:"#c9a25a",hairStyle:"buzz",headgear:!1,star:!1},{num:2,pos:"WG",first:"Alex",last:"Johnstun",age:31,heightCm:185,weightKg:95,attr:{speed:99,accel:96,agility:89,strength:57,tackle:68,pass:66,kick:47,hand:86,stamina:82,foot:"R"},skin:"#8d5a3a",hair:"#0d0d0d",hairStyle:"afro",headgear:!1,star:!1},{num:3,pos:"CE",first:"Latrell",last:"Mitchall",age:29,heightCm:193,weightKg:105,attr:{speed:97,accel:96,agility:91,strength:75,tackle:78,pass:81,kick:55,hand:81,stamina:74,foot:"L"},skin:"#a36a42",hair:"#5e3a1c",hairStyle:"buzz",headgear:!1,star:!1},{num:4,pos:"CE",first:"Jack",last:"Wightun",age:33,heightCm:190,weightKg:96,attr:{speed:77,accel:73,agility:67,strength:71,tackle:73,pass:66,kick:43,hand:76,stamina:78,foot:"R"},skin:"#e0ac82",hair:"#7a5229",hairStyle:"short",headgear:!1,star:!1},{num:5,pos:"WG",first:"Campbell",last:"Grahem",age:27,heightCm:197,weightKg:98,attr:{speed:92,accel:90,agility:86,strength:68,tackle:70,pass:55,kick:37,hand:79,stamina:87,foot:"R"},skin:"#7a4a2c",hair:"#4a2c14",hairStyle:"mohawk",headgear:!1,star:!1},{num:6,pos:"FE",first:"Cody",last:"Walkar",age:36,heightCm:179,weightKg:90,attr:{speed:80,accel:80,agility:85,strength:58,tackle:59,pass:99,kick:85,hand:82,stamina:79,foot:"R"},skin:"#a36a42",hair:"#5e3a1c",hairStyle:"afro",headgear:!1,star:!1},{num:7,pos:"HB",first:"Ashton",last:"Werd",age:22,heightCm:183,weightKg:74,attr:{speed:72,accel:75,agility:81,strength:52,tackle:51,pass:96,kick:88,hand:87,stamina:79,foot:"R"},skin:"#a36a42",hair:"#7a5229",hairStyle:"short",headgear:!1,star:!1},{num:8,pos:"PR",first:"Tevita",last:"Tattola",age:25,heightCm:188,weightKg:115,attr:{speed:61,accel:53,agility:39,strength:91,tackle:84,pass:47,kick:35,hand:69,stamina:69,foot:"R"},skin:"#a36a42",hair:"#4a2c14",hairStyle:"short",headgear:!1,star:!1},{num:9,pos:"HK",first:"Brandon",last:"Smyth",age:30,heightCm:180,weightKg:98,attr:{speed:79,accel:85,agility:82,strength:74,tackle:77,pass:89,kick:48,hand:84,stamina:83,foot:"R"},skin:"#f1c9a5",hair:"#c9a25a",hairStyle:"buzz",headgear:!1,star:!1},{num:10,pos:"PR",first:"Keaon",last:"Koloamatangy",age:28,heightCm:191,weightKg:110,attr:{speed:66,accel:62,agility:46,strength:94,tackle:80,pass:52,kick:35,hand:62,stamina:78,foot:"R"},skin:"#f1c9a5",hair:"#7a5229",hairStyle:"mohawk",headgear:!0,star:!1},{num:11,pos:"SR",first:"David",last:"Fifite",age:26,heightCm:186,weightKg:115,attr:{speed:79,accel:84,agility:79,strength:99,tackle:73,pass:61,kick:40,hand:77,stamina:78,foot:"R"},skin:"#8d5a3a",hair:"#2b1a0d",hairStyle:"afro",headgear:!1,star:!1},{num:12,pos:"SR",first:"Tallis",last:"Dunkan",age:24,heightCm:186,weightKg:95,attr:{speed:86,accel:83,agility:77,strength:90,tackle:80,pass:73,kick:35,hand:77,stamina:80,foot:"R"},skin:"#f1c9a5",hair:"#c9a25a",hairStyle:"afro",headgear:!1,star:!1},{num:13,pos:"LK",first:"Cameron",last:"Murrai",age:28,heightCm:184,weightKg:96,attr:{speed:77,accel:78,agility:75,strength:86,tackle:92,pass:86,kick:53,hand:77,stamina:90,foot:"R"},skin:"#c68a5e",hair:"#2b1a0d",hairStyle:"buzz",headgear:!1,star:!1}],lor:[{num:1,pos:"FB",first:"Clinton",last:"Gutherzon",age:32,heightCm:190,weightKg:96,attr:{speed:79,accel:73,agility:68,strength:56,tackle:72,pass:70,kick:71,hand:88,stamina:85,foot:"L"},skin:"#5a3520",hair:"#0d0d0d",hairStyle:"bald",headgear:!1,star:!1},{num:2,pos:"WG",first:"Setu",last:"Tue",age:28,heightCm:186,weightKg:96,attr:{speed:90,accel:90,agility:87,strength:70,tackle:55,pass:58,kick:42,hand:79,stamina:74,foot:"R"},skin:"#c68a5e",hair:"#2b1a0d",hairStyle:"short",headgear:!1,star:!1},{num:3,pos:"CE",first:"Moses",last:"Suly",age:28,heightCm:189,weightKg:109,attr:{speed:80,accel:80,agility:72,strength:76,tackle:81,pass:67,kick:39,hand:76,stamina:77,foot:"R"},skin:"#5a3520",hair:"#c9a25a",hairStyle:"long",headgear:!1,star:!1},{num:4,pos:"CE",first:"Valentine",last:"Holmas",age:31,heightCm:181,weightKg:94,attr:{speed:87,accel:82,agility:75,strength:75,tackle:60,pass:66,kick:40,hand:75,stamina:79,foot:"R"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"bald",headgear:!1,star:!1},{num:5,pos:"WG",first:"Tyrell",last:"Sloen",age:23,heightCm:188,weightKg:84,attr:{speed:90,accel:84,agility:81,strength:55,tackle:65,pass:60,kick:60,hand:83,stamina:72,foot:"L"},skin:"#8d5a3a",hair:"#4a2c14",hairStyle:"mohawk",headgear:!1,star:!1},{num:6,pos:"FE",first:"Daniel",last:"Atkinzon",age:25,heightCm:185,weightKg:89,attr:{speed:81,accel:79,agility:79,strength:61,tackle:61,pass:82,kick:99,hand:82,stamina:82,foot:"R"},skin:"#f1c9a5",hair:"#c9a25a",hairStyle:"buzz",headgear:!1,star:!1},{num:7,pos:"HB",first:"Kyle",last:"Flanagen",age:28,heightCm:183,weightKg:85,attr:{speed:70,accel:72,agility:77,strength:46,tackle:69,pass:81,kick:77,hand:83,stamina:85,foot:"R"},skin:"#e0ac82",hair:"#7a5229",hairStyle:"mohawk",headgear:!1,star:!1},{num:8,pos:"PR",first:"Loko",last:"Jnr Passifiki Tonga",age:21,heightCm:196,weightKg:116,attr:{speed:64,accel:66,agility:50,strength:99,tackle:95,pass:47,kick:35,hand:69,stamina:73,foot:"R"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"mohawk",headgear:!0,star:!1},{num:9,pos:"HK",first:"Damien",last:"Couk",age:20,heightCm:171,weightKg:93,attr:{speed:73,accel:82,agility:78,strength:70,tackle:96,pass:83,kick:48,hand:83,stamina:93,foot:"R"},skin:"#d9a47a",hair:"#4a2c14",hairStyle:"mohawk",headgear:!0,star:!1},{num:10,pos:"PR",first:"Toby",last:"Couchmen",age:23,heightCm:188,weightKg:102,attr:{speed:59,accel:61,agility:43,strength:96,tackle:94,pass:52,kick:35,hand:75,stamina:80,foot:"R"},skin:"#f1c9a5",hair:"#0d0d0d",hairStyle:"bald",headgear:!1,star:!1},{num:11,pos:"SR",first:"Dylan",last:"Egen",age:22,heightCm:181,weightKg:98,attr:{speed:72,accel:70,agility:62,strength:80,tackle:94,pass:55,kick:35,hand:77,stamina:87,foot:"L"},skin:"#a36a42",hair:"#0d0d0d",hairStyle:"short",headgear:!0,star:!1},{num:12,pos:"SR",first:"Hamish",last:"Stevart",age:22,heightCm:184,weightKg:106,attr:{speed:73,accel:67,agility:59,strength:81,tackle:93,pass:75,kick:35,hand:69,stamina:85,foot:"R"},skin:"#d9a47a",hair:"#0d0d0d",hairStyle:"mohawk",headgear:!1,star:!1},{num:13,pos:"LK",first:"Ryan",last:"Couchmen",age:23,heightCm:188,weightKg:100,attr:{speed:73,accel:77,agility:67,strength:95,tackle:96,pass:66,kick:41,hand:81,stamina:92,foot:"R"},skin:"#e0ac82",hair:"#0d0d0d",hairStyle:"short",headgear:!0,star:!1}],qul:[{num:1,pos:"FB",first:"Jahream",last:"Bulla",age:24,heightCm:187,weightKg:93,attr:{speed:81,accel:77,agility:74,strength:61,tackle:75,pass:69,kick:69,hand:79,stamina:86,foot:"R"},skin:"#a36a42",hair:"#4a2c14",hairStyle:"mohawk",headgear:!1,star:!1},{num:2,pos:"WG",first:"Sunia",last:"Turova",age:24,heightCm:181,weightKg:88,attr:{speed:89,accel:87,agility:79,strength:62,tackle:67,pass:54,kick:54,hand:82,stamina:86,foot:"R"},skin:"#a36a42",hair:"#c9a25a",hairStyle:"short",headgear:!1,star:!1},{num:3,pos:"CE",first:"Taylan",last:"Mai",age:25,heightCm:181,weightKg:88,attr:{speed:92,accel:89,agility:84,strength:78,tackle:72,pass:72,kick:43,hand:82,stamina:70,foot:"R"},skin:"#c68a5e",hair:"#7a5229",hairStyle:"afro",headgear:!1,star:!1},{num:4,pos:"CE",first:"Patrick",last:"Herbart",age:29,heightCm:181,weightKg:94,attr:{speed:78,accel:76,agility:69,strength:72,tackle:77,pass:72,kick:39,hand:78,stamina:76,foot:"R"},skin:"#a36a42",hair:"#c9a25a",hairStyle:"short",headgear:!1,star:!1},{num:5,pos:"WG",first:"Luke",last:"Laulylii",age:28,heightCm:181,weightKg:97,attr:{speed:94,accel:90,agility:84,strength:70,tackle:60,pass:60,kick:44,hand:81,stamina:72,foot:"R"},skin:"#a36a42",hair:"#5e3a1c",hairStyle:"buzz",headgear:!1,star:!1},{num:6,pos:"FE",first:"Jarome",last:"Luay",age:29,heightCm:184,weightKg:90,attr:{speed:76,accel:79,agility:83,strength:60,tackle:56,pass:90,kick:83,hand:94,stamina:80,foot:"R"},skin:"#f1c9a5",hair:"#1a1209",hairStyle:"buzz",headgear:!1,star:!1},{num:7,pos:"HB",first:"Adam",last:"Douaihi",age:28,heightCm:190,weightKg:97,attr:{speed:94,accel:97,agility:99,strength:71,tackle:63,pass:89,kick:91,hand:87,stamina:80,foot:"R"},skin:"#7a4a2c",hair:"#7a5229",hairStyle:"short",headgear:!1,star:!0},{num:8,pos:"PR",first:"Terrell",last:"Mai",age:27,heightCm:183,weightKg:108,attr:{speed:60,accel:65,agility:53,strength:96,tackle:96,pass:50,kick:35,hand:73,stamina:81,foot:"R"},skin:"#5a3520",hair:"#2b1a0d",hairStyle:"mohawk",headgear:!1,star:!1},{num:9,pos:"HK",first:"Apisai",last:"Koroizau",age:34,heightCm:172,weightKg:88,attr:{speed:81,accel:84,agility:82,strength:68,tackle:88,pass:86,kick:58,hand:87,stamina:95,foot:"R"},skin:"#5a3520",hair:"#c9a25a",hairStyle:"short",headgear:!0,star:!1},{num:10,pos:"PR",first:"Fonua",last:"Pola",age:24,heightCm:184,weightKg:110,attr:{speed:65,accel:67,agility:51,strength:99,tackle:81,pass:48,kick:35,hand:65,stamina:70,foot:"R"},skin:"#f1c9a5",hair:"#1a1209",hairStyle:"bald",headgear:!1,star:!1},{num:11,pos:"SR",first:"Samuela",last:"Fainnu",age:22,heightCm:194,weightKg:109,attr:{speed:74,accel:70,agility:65,strength:81,tackle:89,pass:68,kick:35,hand:73,stamina:82,foot:"R"},skin:"#c68a5e",hair:"#2b1a0d",hairStyle:"long",headgear:!1,star:!1},{num:12,pos:"SR",first:"Kai",last:"Pearke-Paul",age:25,heightCm:198,weightKg:108,attr:{speed:70,accel:65,agility:60,strength:77,tackle:89,pass:69,kick:35,hand:86,stamina:83,foot:"R"},skin:"#5a3520",hair:"#1a1209",hairStyle:"short",headgear:!0,star:!1},{num:13,pos:"LK",first:"Alex",last:"Twel",age:30,heightCm:191,weightKg:102,attr:{speed:66,accel:72,agility:64,strength:90,tackle:98,pass:72,kick:35,hand:82,stamina:91,foot:"R"},skin:"#f1c9a5",hair:"#0d0d0d",hairStyle:"bald",headgear:!0,star:!1}]};var Ir=["speed","accel","agility","strength","tackle","pass","kick","hand","stamina"],gc={speed:"SPD",accel:"ACC",agility:"AGI",strength:"STR",tackle:"TKL",pass:"PAS",kick:"KCK",hand:"HND",stamina:"STA"},yc={speed:"Speed",accel:"Acceleration",agility:"Agility",strength:"Strength",tackle:"Tackling",pass:"Passing",kick:"Kicking",hand:"Handling",stamina:"Stamina"};var Gy={FB:{speed:.2,agility:.15,hand:.2,kick:.1,tackle:.1,pass:.1,accel:.1,strength:.05},WG:{speed:.3,accel:.15,agility:.15,hand:.15,strength:.1,tackle:.1,stamina:.05},CE:{speed:.15,strength:.2,tackle:.2,hand:.15,agility:.1,accel:.1,pass:.1},FE:{pass:.25,kick:.2,agility:.15,hand:.15,speed:.1,tackle:.1,accel:.05},HB:{pass:.25,kick:.25,agility:.15,hand:.15,speed:.1,tackle:.05,accel:.05},PR:{strength:.3,tackle:.3,stamina:.15,hand:.1,speed:.05,accel:.05,pass:.05},HK:{pass:.2,tackle:.25,hand:.15,stamina:.15,agility:.1,accel:.1,strength:.05},SR:{strength:.25,tackle:.25,speed:.15,hand:.1,stamina:.15,agility:.1},LK:{tackle:.3,strength:.25,stamina:.15,pass:.1,hand:.1,speed:.1}};function ia(n,t){let e=Gy[n],i=0,s=0;for(let a in e)i+=t[a]*e[a],s+=e[a];return Math.round(i/s)}function $u(n){let t=(c,l)=>c.reduce((h,u)=>h+l(u),0)/Math.max(1,c.length),e=Math.round(t(n,c=>ia(c.pos,c.attr))),i=n.filter(c=>["FB","WG","CE","FE","HB","HK"].includes(c.pos)),s=Math.round(t(i,c=>(c.attr.speed+c.attr.agility+c.attr.pass+c.attr.hand)/4)),a=Math.round(t(n,c=>(c.attr.tackle*2+c.attr.strength)/3)),r=n.filter(c=>["PR","HK","SR","LK"].includes(c.pos)),o=Math.round(t(r,c=>(c.attr.strength+c.attr.tackle+c.attr.stamina)/3));return{ovr:e,attack:s,defence:a,pack:o}}function vc(n){return $u(Lr(n))}var ze=[{id:"bay",name:"Bayside Breakers",short:"BAY",primary:"#123a7a",secondary:"#35c4e8",trim:"#ffffff",pattern:"vee",shorts:"#0c2350",socks:"#123a7a",rating:80,alt:{primary:"#f2f2f2",secondary:"#123a7a",pattern:"vee",shorts:"#f2f2f2",socks:"#123a7a"}},{id:"nth",name:"Northgate Thunder",short:"NTH",primary:"#4b1f7a",secondary:"#f2b51d",trim:"#ffffff",pattern:"sash",shorts:"#2a1046",socks:"#4b1f7a",rating:82,alt:{primary:"#f2b51d",secondary:"#4b1f7a",pattern:"sash",shorts:"#4b1f7a",socks:"#f2b51d"}},{id:"irn",name:"Ironvale Miners",short:"IRN",primary:"#1b1b1b",secondary:"#f26a1b",trim:"#ffffff",pattern:"hoops",shorts:"#1b1b1b",socks:"#f26a1b",rating:77,alt:{primary:"#f26a1b",secondary:"#1b1b1b",pattern:"hoops",shorts:"#1b1b1b",socks:"#1b1b1b"}},{id:"sun",name:"Sunset Coast Pelicans",short:"SUN",primary:"#0f8a8a",secondary:"#ffffff",trim:"#f2c94c",pattern:"yoke",shorts:"#ffffff",socks:"#0f8a8a",rating:79,alt:{primary:"#ffffff",secondary:"#0f8a8a",pattern:"yoke",shorts:"#0f8a8a",socks:"#ffffff"}},{id:"rgr",name:"Red Gum Raptors",short:"RGR",primary:"#7a1424",secondary:"#f1e3c4",trim:"#1b1b1b",pattern:"stripes",shorts:"#f1e3c4",socks:"#7a1424",rating:78,alt:{primary:"#f1e3c4",secondary:"#7a1424",pattern:"stripes",shorts:"#7a1424",socks:"#f1e3c4"}},{id:"har",name:"Harbour Kings",short:"HAR",primary:"#1f4fd1",secondary:"#ffd21f",trim:"#ffffff",pattern:"plain",shorts:"#ffd21f",socks:"#1f4fd1",rating:81,alt:{primary:"#ffd21f",secondary:"#1f4fd1",pattern:"plain",shorts:"#1f4fd1",socks:"#ffd21f"}},{id:"out",name:"Outback Stingers",short:"OUT",primary:"#1f7a3a",secondary:"#f2d21f",trim:"#1b1b1b",pattern:"vee",shorts:"#1b1b1b",socks:"#1f7a3a",rating:76,alt:{primary:"#f2d21f",secondary:"#1f7a3a",pattern:"vee",shorts:"#1f7a3a",socks:"#f2d21f"}},{id:"soc",name:"Southern Comets",short:"SOC",primary:"#d11f2a",secondary:"#ffffff",trim:"#1b1b1b",pattern:"hoops",shorts:"#1b1b1b",socks:"#d11f2a",rating:80,alt:{primary:"#ffffff",secondary:"#d11f2a",pattern:"hoops",shorts:"#d11f2a",socks:"#ffffff"}},{id:"tim",name:"Timberline Possums",short:"TIM",primary:"#1e5631",secondary:"#f2f2f2",trim:"#c9a227",pattern:"yoke",shorts:"#1e5631",socks:"#f2f2f2",rating:80,alt:{primary:"#f2f2f2",secondary:"#1e5631",pattern:"yoke",shorts:"#1e5631",socks:"#1e5631"}},{id:"riv",name:"Riverbend Otters",short:"RIV",primary:"#6b4226",secondary:"#e8c07a",trim:"#ffffff",pattern:"hoops",shorts:"#3d2414",socks:"#6b4226",rating:80,alt:{primary:"#e8c07a",secondary:"#6b4226",pattern:"hoops",shorts:"#6b4226",socks:"#e8c07a"}},{id:"sal",name:"Saltwater Barracudas",short:"SAL",primary:"#4f5d6b",secondary:"#2ee6c8",trim:"#ffffff",pattern:"stripes",shorts:"#2b333b",socks:"#4f5d6b",rating:80,alt:{primary:"#2ee6c8",secondary:"#4f5d6b",pattern:"stripes",shorts:"#4f5d6b",socks:"#2ee6c8"}},{id:"tab",name:"Tablelands Emus",short:"TAB",primary:"#556b2f",secondary:"#efe6c8",trim:"#1b1b1b",pattern:"vee",shorts:"#efe6c8",socks:"#556b2f",rating:80,alt:{primary:"#efe6c8",secondary:"#556b2f",pattern:"vee",shorts:"#556b2f",socks:"#efe6c8"}},{id:"cop",name:"Copperfield Foxes",short:"COP",primary:"#b0552a",secondary:"#14213d",trim:"#ffffff",pattern:"sash",shorts:"#14213d",socks:"#b0552a",rating:80,alt:{primary:"#14213d",secondary:"#b0552a",pattern:"sash",shorts:"#b0552a",socks:"#14213d"}},{id:"gec",name:"Glasshouse Geckos",short:"GEC",primary:"#7bc043",secondary:"#4a2366",trim:"#ffffff",pattern:"plain",shorts:"#4a2366",socks:"#7bc043",rating:80,alt:{primary:"#4a2366",secondary:"#7bc043",pattern:"plain",shorts:"#7bc043",socks:"#4a2366"}},{id:"wom",name:"Stonebridge Wombats",short:"STB",primary:"#3d3d3d",secondary:"#f2c230",trim:"#ffffff",pattern:"hoops",shorts:"#3d3d3d",socks:"#f2c230",rating:80,alt:{primary:"#f2c230",secondary:"#3d3d3d",pattern:"hoops",shorts:"#3d3d3d",socks:"#3d3d3d"}},{id:"lor",name:"Lantern Bay Lorikeets",short:"LBL",primary:"#00897b",secondary:"#ff8f00",trim:"#ffffff",pattern:"vee",shorts:"#00564d",socks:"#ff8f00",rating:80,alt:{primary:"#ff8f00",secondary:"#00897b",pattern:"vee",shorts:"#00897b",socks:"#ff8f00"}},{id:"qul",name:"Quarry Hill Quolls",short:"QHQ",primary:"#d4145a",secondary:"#ffffff",trim:"#1b1b1b",pattern:"stripes",shorts:"#2b2b2b",socks:"#d4145a",rating:80,alt:{primary:"#ffffff",secondary:"#d4145a",pattern:"stripes",shorts:"#d4145a",socks:"#ffffff"}}];function Lr(n){return Yu[n.id]||[]}function Zu(n){return Lr(n).map(t=>{let e=t.heightCm/100,i=t.weightKg/(e*e);return{num:t.num,pos:t.pos,name:`${t.first[0]}. ${t.last}`,fullName:`${t.first} ${t.last}`,attr:{...t.attr},ovr:ia(t.pos,t.attr),age:t.age,heightCm:t.heightCm,weightKg:t.weightKg,star:t.star,build:{w:et(i/26.5,.92,1.22),h:et(t.heightCm/186,.93,1.06)},skin:t.skin,hair:t.hair,hairStyle:t.hairStyle,headgear:t.headgear,mass:t.weightKg}})}function qu(n){let t=parseInt(n.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function xc(n,t){let e=qu(n),i=qu(t);return Math.hypot(e[0]-i[0],e[1]-i[1],e[2]-i[2])}function Ju(n,t){let e={primary:n.primary,secondary:n.secondary,trim:n.trim,pattern:n.pattern,shorts:n.shorts,socks:n.socks},i={primary:t.primary,secondary:t.secondary,trim:t.trim,pattern:t.pattern,shorts:t.shorts,socks:t.socks};return(xc(e.primary,i.primary)<140||xc(e.shorts,i.shorts)<60&&xc(e.primary,i.primary)<200)&&(i={...i,...t.alt}),[e,i]}var ju=(n,t,e,i)=>{let s=document.createElement(n);return t&&(s.className=t),i!==void 0&&(s.innerHTML=i),e&&e.appendChild(s),s},Wy=()=>{try{return matchMedia("(pointer: coarse)").matches&&!matchMedia("(any-pointer: fine)").matches}catch{return!1}},Xy=[["Move","W A S D","Left stick","Joystick (left half)"],["Sprint","Shift","RT","Push the joystick to the edge"],["\u2014 ATTACK \u2014","","",""],["Pass left / right to the next man","Q / E","LB / RB","Tap \u25C0 PASS / PASS \u25B6"],["Pick the 1st / 2nd / 3rd man (cut-out)","hold Q or E + K / L / I","hold LB or RB + A / B / Y","Hold PASS for a cut-out"],["Flat pass (runner hits it at pace, riskier)","double-tap","double-tap","Double-tap PASS"],["Sidestep","\u2190 / \u2192","Flick right stick \u2190 \u2192","Swipe \u2190 \u2192 (right half)"],["Fend (hold to keep the arm out)","\u2193","Right stick \u2193","Swipe \u2193 and hold"],["Shoulder charge / bust a tackle","\u2191","Right stick \u2191","Swipe \u2191"],["Dummy pass","I","Y","DUMMY"],["Quick kick: punt / grubber / chip / field goal","K / L / J / U","A / B / X / R3","PUNT / GRUBBER / CHIP / FIELD GOAL"],["Aimed kick: hold, steer, release","hold Space + K L J I U","hold LT + A B X Y R3","Tap AIM, then hold a kick button"],["   \u2026aimed kick types","punt \xB7 grubber \xB7 chip \xB7 bomb \xB7 field goal","",""],["Kicking foot (left / right)","V","D-pad \u2191","FOOT"],["In a tackle: offload / fight / leg drive","Q,E / arrows / mash Shift or K","LB,RB / R-stick / mash RT or A","OFFLOAD / swipe / mash DRIVE"],["Ground the ball in-goal","K","A","GROUND"],["\u2014 DEFENCE \u2014","","",""],["Low tackle (safe, but arms stay free)","K","A","TACKLE"],['Arm-grip "ball and all" (no offload, risky)',"L \u2014 keep held to hold down","B","GRIP"],["Dive tackle","I","Y","DIVE"],["Strip (one-on-one) / jump for a high ball","J","X","STRIP / JUMP"],["Switch player (nearest / next)","Q / E","LB / RB (or LT)","\u25C0 SWITCH / SWITCH \u25B6"],["\u2014 SET PIECES \u2014","","",""],["Conversion: move the ball back, then set","W / S, then K","Left stick \u2195, then A","Joystick \u2195, then SET"],["Aim (line up the seam) / trajectory","A D / W S","Left stick","Joystick"],["Power \u2014 release before the red zone","hold K","hold A","Hold KICK"],["Short kick-off","hold L","hold B","Hold SHORT"],["Penalty: goal / touch / tap","K / L / J","A / B / X","Tap your choice"],["\u2014 GENERAL \u2014","","",""],["Camera (behind / broadcast / high)","C","View","CAM"],["Pause","Esc / P","Start","II"]],Qu=n=>n>=90?"r90":n>=80?"r80":n>=70?"r70":"r60";function tf(n){let t=n.primary,e=n.secondary;return`<span class="swatch" style="background:${{hoops:`repeating-linear-gradient(180deg,${t} 0 8px,${e} 8px 16px)`,stripes:`repeating-linear-gradient(90deg,${t} 0 6px,${e} 6px 12px)`,vee:`linear-gradient(160deg,${t} 40%,${e} 40% 55%,${t} 55%)`,sash:`linear-gradient(135deg,${t} 38%,${e} 38% 58%,${t} 58%)`,yoke:`linear-gradient(180deg,${e} 30%,${t} 30%)`}[n.pattern]||t}"></span>`}function ef(n){let t=vc(n),e=Lr(n).map(i=>{let s=ia(i.pos,i.attr);return`<tr><td class="n">${i.num}</td><td class="nm">${i.star?'<span class="star" title="Star player">\u2605</span> ':""}${i.first} ${i.last}</td>
      <td title="${Mr[i.pos]}">${i.pos}</td><td>${i.age}</td><td>${i.heightCm}</td><td>${i.weightKg}</td>
      <td><b class="rt ${Qu(s)}">${s}</b></td>${Ir.map(a=>`<td><span class="rt ${Qu(i.attr[a])}">${i.attr[a]}</span></td>`).join("")}<td>${i.attr.foot}</td></tr>`}).join("");return`<div class="sq-head">${tf(n)}<div><b>${n.name}</b><div class="sq-chips"><span>OVR <b>${t.ovr}</b></span><span>ATT <b>${t.attack}</b></span><span>DEF <b>${t.defence}</b></span><span>PACK <b>${t.pack}</b></span></div></div></div>
    <div class="sq-wrap"><table class="sq"><thead><tr><th>#</th><th class="nm">Player</th><th>Pos</th><th>Age</th><th>cm</th><th>kg</th><th>OVR</th>
    ${Ir.map(i=>`<th title="${yc[i]}">${gc[i]}</th>`).join("")}<th title="Kicking foot">Ft</th></tr></thead><tbody>${e}</tbody></table></div>
    <div class="sq-key">${Ir.map(i=>`<span><b>${gc[i]}</b> ${yc[i]}</span>`).join("")}<span><b>\u2605</b> Star player</span></div>`}function nf(){let n=t=>t?`<kbd>${t}</kbd>`:"";return`<div class="ctrl-wrap"><table class="ctrl"><tr class="hdr"><th></th><th>Keyboard</th><th>Gamepad</th><th>Touch</th></tr>${Xy.map(t=>t[1]===""?`<tr class="sec"><th colspan="4">${t[0]}</th></tr>`:`<tr><td>${t[0]}</td><td>${n(t[1])}</td><td>${n(t[2])}</td><td>${n(t[3])}</td></tr>`).join("")}</table></div>`}var Dr=class{constructor(t,e){this.onStart=e,this.root=ju("div","menu",t),this.cfg={home:0,away:5,side:0,halfLen:1,difficulty:1,wind:1,time:0,camera:0,goldenPoint:0,gameSpeed:0},this.rows=[{key:"home",label:"Home team",vals:ze.map(i=>i.name)},{key:"away",label:"Away team",vals:ze.map(i=>i.name)},{key:"side",label:"You play as",vals:["Home","Away","Watch (CPU v CPU)"]},{key:"halfLen",label:"Half length",vals:["3 min","5 min","8 min","10 min","20 min"],nums:[3,5,8,10,20]},{key:"gameSpeed",label:"Game speed",vals:["Steady (75%)","Brisk (90%)","Full (100%)"],nums:[.75,.9,1]},{key:"difficulty",label:"Difficulty",vals:["Easy","Normal","Hard"],ids:["easy","normal","hard"]},{key:"wind",label:"Wind",vals:["Calm","Breezy","Gusty"],ids:["calm","breezy","gusty"]},{key:"time",label:"Kick-off time",vals:["Afternoon","Twilight","Night (floodlights)"],ids:["day","dusk","night"]},{key:"camera",label:"Camera",vals:["Behind play","Broadcast","High"],ids:["behind","broadcast","high"]},{key:"goldenPoint",label:"Golden point",vals:["On","Off"]}],this.sel=0,this.page="main",this.visible=!0,this.render()}config(){let t=this.cfg,e=i=>this.rows.find(s=>s.key===i);return{homeDef:ze[t.home],awayDef:ze[t.away],humanIdx:t.side===2?-1:t.side,settings:{halfLen:e("halfLen").nums[t.halfLen],difficulty:e("difficulty").ids[t.difficulty],wind:e("wind").ids[t.wind],time:e("time").ids[t.time],camera:e("camera").ids[t.camera],goldenPoint:t.goldenPoint===0,gameSpeed:e("gameSpeed").nums[t.gameSpeed]}}}swatch(t){return tf(t)}render(){let t=this.root;if(this.page==="controls")t.innerHTML=`<div class="menu-panel"><h1 class="logo small">CONTROLS</h1>${nf()}<div class="btns"><button data-a="back">\u25C0 Back</button></div></div>`;else if(this.page==="squads")t.innerHTML=`<div class="menu-panel wide"><h1 class="logo small">SQUADS</h1>
        <div class="sq-nav"><button data-a="sqprev">\u25C0</button><span>${this.squadIdx+1} / ${ze.length}</span><button data-a="sqnext">\u25B6</button></div>
        ${ef(ze[this.squadIdx])}<div class="btns"><button data-a="back">\u25C0 Back</button></div>
        <div class="foot">A/D or \u2190/\u2192 change club \xB7 Esc to go back</div></div>`;else{let e=this.cfg;t.innerHTML=`<div class="menu-panel"><h1 class="logo">FOOTY<span>13</span></h1><div class="tag">Rugby League \xB7 13 v 13 \xB7 Single Match</div>
        <div class="rows">${this.rows.map((i,s)=>`<div class="row ${s===this.sel?"sel":""}" data-i="${s}"><span class="lbl">${i.label}</span>
          <span class="val"><button data-i="${s}" data-d="-1">\u25C0</button><span>${i.key==="home"||i.key==="away"?this.swatch(ze[e[i.key]]):""}${i.vals[e[i.key]]}${i.key==="home"||i.key==="away"?` <em class="ovr">${vc(ze[e[i.key]]).ovr}</em>`:""}</span><button data-i="${s}" data-d="1">\u25B6</button></span></div>`).join("")}</div>
        <div class="btns"><button class="go" data-a="start">KICK OFF \u25B6</button><button data-a="squads">Squads</button><button data-a="controls">Controls</button></div>
        ${Wy()?'<div class="touchnote">Touch screen: turn your phone sideways. Joystick on the left, swipe and buttons on the right.</div>':""}
        <div class="foot">Keyboard, gamepad or touch \xB7 W/S choose \xB7 A/D change \xB7 Enter to start \xB7 H for controls</div></div>`}t.querySelectorAll("button[data-d]").forEach(e=>e.addEventListener("click",i=>{i.stopPropagation(),this.change(+e.dataset.i,+e.dataset.d)})),t.querySelectorAll(".row").forEach(e=>e.addEventListener("click",()=>{this.sel=+e.dataset.i,this.render()})),t.querySelectorAll("button[data-a]").forEach(e=>e.addEventListener("click",()=>this.act(e.dataset.a)))}change(t,e){let i=this.rows[t],s=this.cfg,a=i.vals.length;s[i.key]=(s[i.key]+e+a)%a,(i.key==="home"||i.key==="away")&&s.home===s.away&&(s[i.key]=(s[i.key]+e+a)%a),this.sel=t,this.render()}act(t){t==="start"?this.onStart(this.config()):t==="controls"?(this.page="controls",this.render()):t==="back"?(this.page="main",this.render()):t==="squads"?(this.page="squads",this.squadIdx=this.cfg.home,this.render()):(t==="sqprev"||t==="sqnext")&&(this.squadIdx=(this.squadIdx+(t==="sqnext"?1:ze.length-1))%ze.length,this.render())}show(){this.visible=!0,this.page="main",this.root.style.display="",this.render()}hide(){this.visible=!1,this.root.style.display="none"}update(t){if(this.visible){if(this.page==="controls"||this.page==="squads"){this.page==="squads"&&t.pressed("menuLeft")&&this.act("sqprev"),this.page==="squads"&&t.pressed("menuRight")&&this.act("sqnext"),(t.pressed("pause")||t.pressed("confirm")||t.pressed("faceB")||t.pressed("back"))&&this.act("back");return}t.pressed("menuUp")&&(this.sel=(this.sel+this.rows.length-1)%this.rows.length,this.render()),t.pressed("menuDown")&&(this.sel=(this.sel+1)%this.rows.length,this.render()),t.pressed("menuLeft")&&this.change(this.sel,-1),t.pressed("menuRight")&&this.change(this.sel,1),t.pressed("confirm")&&this.act("start"),t.pressed("help")&&this.act("controls")}}},zr=class{constructor(t,e){this.h=e,this.root=ju("div","menu pause",t),this.root.style.display="none",this.visible=!1,this.page="main"}show(){this.visible=!0,this.page="main",this.root.style.display="",this.render()}hide(){this.visible=!1,this.root.style.display="none"}render(){let t=this.h.teams?this.h.teams():[];this.root.innerHTML=this.page==="controls"?`<div class="menu-panel"><h1 class="logo small">CONTROLS</h1>${nf()}<div class="btns"><button data-a="back">\u25C0 Back</button></div></div>`:this.page==="squads"&&t.length?`<div class="menu-panel wide"><h1 class="logo small">SQUADS</h1><div class="sq-nav"><button data-a="sqswap">\u25C0 \u25B6 ${t[1-(this.side||0)].short}</button></div>
        ${ef(t[this.side||0])}<div class="btns"><button data-a="back">\u25C0 Back</button></div></div>`:`<div class="menu-panel narrow"><h1 class="logo small">PAUSED</h1><div class="btns col">
        <button data-a="resume">Resume</button><button data-a="camera">Camera: ${this.h.cameraName()}</button><button data-a="squads">Squads</button><button data-a="controls">Controls</button>
        <button data-a="sound">Sound: ${this.h.soundName()}</button><button data-a="restart">Restart match</button><button data-a="quit">Quit to menu</button></div></div>`,this.root.querySelectorAll("button[data-a]").forEach(e=>e.addEventListener("click",()=>this.act(e.dataset.a)))}act(t){if(t==="controls")return this.page="controls",this.render();if(t==="back")return this.page="main",this.render();if(t==="squads")return this.page="squads",this.side=0,this.render();if(t==="sqswap")return this.side=1-(this.side||0),this.render();if(t==="camera")return this.h.camera(),this.render();if(t==="sound")return this.h.sound(),this.render();this.h[t]()}};var Ur=class{constructor(t){this.cam=t,this.mode="behind",this.pos=new z(-30,14,0),this.tgt=new z,this.dPos=new z,this.dTgt=new z,this.shakeT=0,this.shakeA=0,this.orbit=0,this.lastPhase="",this.fwd={x:1,z:0}}shake(t){this.shakeA=Math.max(this.shakeA,t),this.shakeT=.3}toggle(){this.mode=this.mode==="behind"?"broadcast":this.mode==="broadcast"?"high":"behind"}screenRight(){return{x:-this.fwd.z,z:this.fwd.x}}inputToWorld(t,e){let i=this.fwd,s=this.screenRight();return{x:s.x*t+i.x*e,z:s.z*t+i.z*e}}update(t,e){if(this.override){let f=this.override;this.cam.position.set(f.pos[0],f.pos[1],f.pos[2]),this.cam.lookAt(f.tgt[0],f.tgt[1],f.tgt[2]);return}let i=e.ball,s=e.phase,a=e.pd,r=e.humanTeam?e.humanTeam.dir:e.attackTeam()?.dir??1,o=!1;s!==this.lastPhase&&((["kickoff","goalKick","scrum","touchKick"].includes(s)||s==="ptb"&&a.extra===void 0)&&(o=!0),this.lastPhase=s),(s==="ptb"||s==="play")&&(o=!1);let c=4,l=6;if(s==="goalKick"&&a.stage!=="result"||(s==="kickoff"||s==="touchKick")&&a.stage==="aim"){let f=a.yaw,g=Math.sin(f),y=Math.cos(f),m=i.p;if(s==="goalKick"&&a.stage==="flight"){let p=Math.hypot(i.v.x,i.v.z)||1;this.dPos.set(m.x-i.v.x/p*7,Math.max(2.5,m.y*.7+1.5),m.z-i.v.z/p*7),this.dTgt.set(a.team.dir*Pt.half,4,0),c=2.2,l=3}else{let p=s==="goalKick"?7:9.5,x=s==="goalKick"?2.7:4.2,_=s==="goalKick"?1.5:2.2,b=-Math.cos(f),R=Math.sin(f);this.dPos.set(m.x-g*p-b*_,x,m.z-y*p-R*_),this.dTgt.set(m.x+g*30,s==="goalKick"?3.2:1,m.z+y*30),c=5,l=6}}else if(s==="tryCelebration"&&a.scorer){this.orbit+=t*.45;let f=a.scorer.p;this.dPos.set(f.x+Math.cos(this.orbit)*9,3.8,f.z+Math.sin(this.orbit)*9),this.dTgt.set(f.x,1.2,f.z),c=2,l=3}else{let f=new z(i.p.x,0,i.p.z),g=e.controlled;s==="ptb"&&f.set(a.mark.x,0,a.mark.z),g&&i.state!=="held"&&e.kickTarget&&!e.kickTarget.pass?(f.x=(i.p.x+e.kickTarget.x+g.p.x)/3,f.z=(i.p.z+e.kickTarget.z+g.p.z)/3):g&&Ky(g.p,f)<18&&(f.x+=(g.p.x-f.x)*.3,f.z+=(g.p.z-f.z)*.3);let y=i.state==="air"&&i.kind==="kick"?et(i.p.y/20,0,1):0;this.mode==="broadcast"?(this.dPos.set(f.x*.94,17+y*6,r*42+f.z*.25),this.dTgt.set(f.x,0,f.z*.6)):this.mode==="high"?(this.dPos.set(f.x-r*20,24+y*6,f.z*.7),this.dTgt.set(f.x+r*8,0,f.z*.9)):(this.dPos.set(f.x-r*15.5,10+y*7,f.z*.82),this.dTgt.set(f.x+r*6.5,.5+y*3,f.z*.95)),c=3.6,l=5}if(o||this.pos.distanceTo(this.dPos)>70)this.pos.copy(this.dPos),this.tgt.copy(this.dTgt);else{let f=1-Math.exp(-c*t),g=1-Math.exp(-l*t);this.pos.lerp(this.dPos,f),this.tgt.lerp(this.dTgt,g)}if(this.cam.position.copy(this.pos),this.shakeT>0){this.shakeT-=t;let f=this.shakeA*(this.shakeT/.3);this.cam.position.x+=(Gt()-.5)*f,this.cam.position.y+=(Gt()-.5)*f,this.shakeT<=0&&(this.shakeA=0)}this.cam.lookAt(this.tgt);let h=this.tgt.x-this.pos.x,u=this.tgt.z-this.pos.z,d=Math.hypot(h,u)||1;this.fwd={x:h/d,z:u/d}}};function Ky(n,t){return Math.hypot(n.x-t.x,n.z-t.z)}function Cs(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),a={},r={},o=n[0].morphTargetsRelative,c=new He,l=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(u)}for(let h in a){let u=sf(a[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in r){let u=r[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<r[h].length;++y)f.push(r[h][y][d]);let g=sf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function sf(n){let t,e,i,s=-1,a=0;for(let l=0;l<n.length;++l){let h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*e}let r=new t(a),o=new Xe(r,e,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let y=h.getComponent(d,g);o.setComponent(d+u,g,y)}}else r.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var af={day:{top:"#3f7fd8",horizon:"#d7e6ee",sun:16773590,sunI:2.4,hemiI:1.25,ground:4877098,fog:"#c9dbe4",lights:0},dusk:{top:"#2a3a74",horizon:"#f2a46a",sun:16757370,sunI:1.7,hemiI:.95,ground:4082218,fog:"#d99a72",lights:.6},night:{top:"#03060f",horizon:"#18223d",sun:13623551,sunI:.55,hemiI:.5,ground:2042392,fog:"#141c30",lights:1}};function Ps(n,t,e,i){let s=document.createElement("canvas");s.width=n,s.height=t,e(s.getContext("2d"),n,t);let a=new gn(s);return a.colorSpace=Re,a.anisotropy=8,i&&(a.wrapS=a.wrapT=ds,a.repeat.set(i[0],i[1])),{t:a,c:s}}function rf(n,t,e){let i=af[e.time]||af.day,s={flags:[],crowdUniforms:{uTime:{value:0},uExcite:{value:0}}},a=new bs(600,24,12),r=new fi({side:Be,depthWrite:!1,fog:!1,uniforms:{top:{value:new Vt(i.top)},hor:{value:new Vt(i.horizon)}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 hor; varying vec3 vP; void main(){ float h = clamp(normalize(vP).y*1.6, 0.0, 1.0); gl_FragColor = vec4(mix(hor, top, pow(h,0.7)), 1.0); }"});n.add(new Et(a,r)),n.fog=new ar(i.fog,170,520),n.add(new yr(14674687,i.ground,i.hemiI));let o=new Qs(i.sun,i.sunI);if(o.position.set(-60,90,40),n.add(o),i.lights>0)for(let[k,D]of[[70,55],[-70,-55]]){let I=new Qs(16777215,.8*i.lights);I.position.set(k,50,D),n.add(I)}t.setClearColor(i.fog);let c=Ps(256,256,(k,D,I)=>{k.fillStyle="#3f8a2c",k.fillRect(0,0,D,I),k.fillStyle="#4b9a33",k.fillRect(0,0,D/2,I);for(let q=0;q<2600;q++)k.fillStyle=`rgba(${Gt()<.5?"20,50,10":"120,170,70"},${yt(.05,.16)})`,k.fillRect(Gt()*D,Gt()*I,2,2)},[128/10,84/10]),l=new Et(new ii(128,84),new fe({map:c.t}));l.rotation.x=-Math.PI/2,n.add(l);let h=Ps(64,64,(k,D,I)=>{k.fillStyle="#3a7429",k.fillRect(0,0,D,I);for(let q=0;q<300;q++)k.fillStyle="rgba(0,0,0,0.06)",k.fillRect(Gt()*D,Gt()*I,2,2)},[60,60]),u=new Et(new ii(1400,1400),new fe({map:h.t}));u.rotation.x=-Math.PI/2,u.position.y=-.02,n.add(u);let d=new we({color:16053488}),f=[],g=[],y=new Me,m=(k,D,I,q,Z=.12,nt=f)=>{let Rt=Math.hypot(I-k,q-D),Q=new ii(Rt,Z);y.rotation.set(-Math.PI/2,0,-Math.atan2(q-D,I-k)),y.position.set((k+I)/2,.012,(D+q)/2),y.updateMatrix(),Q.applyMatrix4(y.matrix),nt.push(Q)},p=Pt.half,x=Pt.halfW,_=Pt.dead;m(-_,-x,_,-x,.14),m(-_,x,_,x,.14),m(-_,-x,-_,x,.14),m(_,-x,_,x,.14);let b=k=>Math.abs(k)===30||Math.abs(k)===10;for(let k=-50;k<=50;k+=10)m(k,-x,k,x,k===0||Math.abs(k)===50?.16:b(k)?.14:.1,b(k)?g:f);for(let k=-45;k<=45;k+=5)for(let D of[-x+10,x-10,-x+20,x-20])m(k-.5,D,k+.5,D,.1);n.add(new Et(Cs(f),d)),n.add(new Et(Cs(g),new we({color:14165548})));for(let k of[-1,1]){let D=Ps(1024,128,(q,Z,nt)=>{q.clearRect(0,0,Z,nt);let Rt=(k<0?e.homeName:e.awayName).toUpperCase();q.font="bold 96px Arial Black, Arial",q.textAlign="center",q.textBaseline="middle",q.fillStyle="rgba(255,255,255,0.55)";let Q=q.measureText(Rt).width,ct=Math.min(1,Z*.94/Q);q.save(),q.translate(Z/2,nt/2),q.scale(ct,1),q.fillText(Rt,0,4),q.restore()}),I=new Et(new ii(44,5.5),new we({map:D.t,transparent:!0,depthWrite:!1}));I.rotation.x=-Math.PI/2,I.rotation.z=k<0?Math.PI/2:-Math.PI/2,I.position.set(k*54,.013,0),n.add(I)}let R={};for(let k=-40;k<=40;k+=10){let D=50-Math.abs(k);if(!R[D]){let I=Ps(128,64,(q,Z,nt)=>{q.font="bold 54px Arial Black, Arial",q.textAlign="center",q.textBaseline="middle",q.fillStyle="rgba(255,255,255,0.85)",q.fillText(String(D),Z/2,nt/2+2)});R[D]=new we({map:I.t,transparent:!0,depthWrite:!1})}for(let I of[-x+6,x-6]){let q=new Et(new ii(3.6,1.8),R[D]);q.rotation.x=-Math.PI/2,q.rotation.z=I<0?0:Math.PI,q.position.set(k,.014,I),n.add(q)}}let E=new fe({color:16316664}),A=[new fe({color:e.homeColor}),new fe({color:e.awayColor})];for(let k of[-1,1]){for(let I of[-Pt.postGap,Pt.postGap]){let q=new Et(new Ze(.07,.08,Pt.postH,8),E);q.position.set(k*p,Pt.postH/2,I),n.add(q);let Z=new Et(new Ze(.26,.26,2,8),A[k<0?0:1]);Z.position.set(k*p,1,I),n.add(Z)}let D=new Et(new Ze(.06,.06,Pt.postGap*2,8),E);D.rotation.x=Math.PI/2,D.position.set(k*p,Pt.crossbar,0),n.add(D)}let P=new fe({color:16724e3});for(let k of[-p,p,-_,_])for(let D of[-x,x]){let I=new Et(new Ze(.04,.04,1.4,6),P);I.position.set(k,.7,D),n.add(I)}let w=["KOALA COLA","BIG PIE CO.","ROO FUEL","SURF & TURF","GUMLEAF BANK","DINGO TYRES","SOUTHERLY AIR","TRADIE MART"],M=Ps(1024,64,(k,D,I)=>{let q=["#d11f2a","#123a7a","#f2b51d","#1f7a3a","#1b1b1b","#0f8a8a","#f26a1b","#4b1f7a"];for(let Z=0;Z<8;Z++)k.fillStyle=q[Z],k.fillRect(Z*128,0,128,I),k.fillStyle="#fff",k.font="bold 19px Arial Black, Arial",k.textAlign="center",k.textBaseline="middle",k.fillText(w[Z],Z*128+64,I/2)},[1,1]),C=new fe({map:M.t,emissive:2236962}),G=(k,D,I,q)=>{let Z=M.t.clone();Z.needsUpdate=!0,Z.wrapS=ds,Z.repeat.set(k/48,1);let nt=new Et(new Te(k,.9,.15),[C,C,C,C,new fe({map:Z,emissive:3355443}),C]);nt.position.set(D,.45,I),nt.rotation.y=q,n.add(nt)};G(124,0,-x-5,0),G(124,0,x+5,Math.PI),G(70,-_-4,0,Math.PI/2),G(70,_+4,0,-Math.PI/2);let O=new fe({color:9276036}),K=new fe({color:5923440}),J=[],W=(k,D,I,q,Z,nt,Rt=.55)=>{let Q=new Mi;Q.position.set(k,0,D),Q.rotation.y=Z,n.add(Q);let ct=q*.95,St=Math.atan2(Rt,.95),Ct=Math.hypot(ct,q*Rt),mt=new Et(new Te(I,.6,Ct),K);mt.rotation.x=-St,mt.position.set(0,1+q*Rt/2,nt+ct/2),Q.add(mt);let $t=new Et(new Te(I+2,q*Rt+6,1.2),O);$t.position.set(0,(q*Rt+6)/2,nt+ct+.8),Q.add($t);let Ut=new Et(new Te(I,1.4,.4),O);Ut.position.set(0,.7,nt-.3),Q.add(Ut);for(let L of[-1,1]){let rt=new Et(new Te(1.2,q*Rt+4,ct+2),O);rt.position.set(L*(I/2+.6),(q*Rt+4)/2,nt+ct/2),Q.add(rt)}Q.updateMatrixWorld(!0);let ie=new z;for(let L=0;L<q;L++)for(let rt=0;rt<I/.9;rt++)Gt()<.16||(ie.set(-I/2+.45+rt*.9+yt(-.1,.1),1.45+L*Rt,nt+.5+L*.95),Q.localToWorld(ie),J.push({x:ie.x,y:ie.y,z:ie.z,rot:Z}));return Q};W(0,x+9,118,26,0,0),W(0,-x-9,118,26,Math.PI,0),W(_+10,0,62,18,Math.PI/2,0),W(-_-10,0,62,18,-Math.PI/2,0);let it=new fe({color:14079702});for(let k of[-1,1]){let D=new Et(new Te(124,.6,20),it);D.position.set(0,22,k*(x+9+17)),D.rotation.x=k*.08,n.add(D);for(let I=-55;I<=55;I+=22){let q=new Et(new Te(.6,22,.6),O);q.position.set(I,11,k*(x+9+26)),n.add(q)}}let Y=new Te(.5,.72,.38);Y.translate(0,.36,0);let ot=new Te(.22,.24,.22);ot.translate(0,.86,0);let ft=k=>{let D=new fe(k);return D.onBeforeCompile=I=>{I.uniforms.uTime=s.crowdUniforms.uTime,I.uniforms.uExcite=s.crowdUniforms.uExcite,I.vertexShader=`uniform float uTime; uniform float uExcite;
`+I.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
         float ph = instanceMatrix[3].x * 1.7 + instanceMatrix[3].z * 2.3;
         float bob = max(0.0, sin(uTime * (5.0 + fract(ph) * 4.0) + ph));
         transformed.y += bob * (0.03 + uExcite * 0.32);`)},D},xt=J.length,zt=new Js(Y,ft({color:16777215}),xt),Mt=new Js(ot,ft({color:16777215}),xt),X=new Xt,tt=new ei,pt=new z(1,1,1),at=new z,gt=new Vt,Lt=["#f1c9a5","#e0ac82","#c68a5e","#8d5a3a","#5a3520"],Wt=[e.homeColor,e.homeColor2],pe=[e.awayColor,e.awayColor2];for(let k=0;k<xt;k++){let D=J[k];tt.setFromAxisAngle(new z(0,1,0),D.rot+Math.PI),pt.setScalar(yt(.92,1.08)),at.set(D.x,D.y,D.z),X.compose(at,tt,pt),zt.setMatrixAt(k,X),Mt.setMatrixAt(k,X);let I=Gt();gt.set(I<.42?Zi(Wt):I<.7?Zi(pe):`hsl(${Math.floor(Gt()*360)},${30+Gt()*40}%,${30+Gt()*40}%)`),zt.setColorAt(k,gt),Mt.setColorAt(k,gt.set(Zi(Lt)))}n.add(zt,Mt);let Jt=new fe({color:10132122}),be=new we({color:i.lights>0?16776168:14211272});for(let k of[-78,78])for(let D of[-62,62]){let I=new Et(new Ze(.6,1.1,42,6),Jt);I.position.set(k,21,D),n.add(I);let q=new Et(new Te(7,4,1),be);if(q.position.set(k*.97,43,D*.97),q.lookAt(0,0,0),n.add(q),i.lights>0){let Z=new Et(new ii(12,8),new we({color:16774344,transparent:!0,opacity:.25*i.lights,depthWrite:!1,fog:!1}));Z.position.copy(q.position),Z.lookAt(0,0,0),Z.translateZ(.8),n.add(Z)}}let U=Ps(512,256,()=>{}),Ue=new Et(new ii(22,11),new we({map:U.t,fog:!1}));Ue.position.set(-_-30,24,0),Ue.rotation.y=Math.PI/2,n.add(Ue);let Kt=new Et(new Te(1,13,24),O);Kt.position.set(-_-30.6,24,0),n.add(Kt);let Yt=new Et(new Te(1,18,1),O);Yt.position.set(-_-30.6,9,0),n.add(Yt),s.drawScreen=k=>{let D=U.c.getContext("2d"),I=512,q=256;D.fillStyle="#05070c",D.fillRect(0,0,I,q),D.fillStyle="#f2b51d",D.fillRect(0,0,I,36),D.fillStyle="#111",D.font="bold 26px Arial Black, Arial",D.textAlign="center",D.fillText(k.title,I/2,28),D.fillStyle="#fff",D.font="bold 64px Arial Black, Arial";let Z=D.measureText(k.score).width,nt=Math.min(1,(I-40)/Z);D.save(),D.translate(I/2,130),D.scale(nt,1),D.fillText(k.score,0,0),D.restore(),D.font="bold 30px Arial",D.fillStyle="#9fd3ff",D.fillText(k.sub,I/2,200),D.font="20px Arial",D.fillStyle="#ccc",D.fillText(k.foot||"",I/2,240),U.t.needsUpdate=!0};let kt=new fe({color:13421772}),ce=[e.homeColor,e.awayColor,"#ffffff",e.homeColor2],At=0;for(let[k,D]of[[-40,x+36],[0,x+36],[40,x+36],[-40,-x-36],[0,-x-36],[40,-x-36]]){let I=new Et(new Ze(.08,.08,6,6),kt);I.position.set(k,27,D),n.add(I);let q=new Mi;q.position.set(k,29.4,D),n.add(q);let Z=new ii(3,1.8,6,1);Z.translate(1.5,0,0);let nt=new Et(Z,new fe({color:ce[At++%4],side:_i}));q.add(nt),Z.computeBoundingSphere(),nt.frustumCulled=!1,s.flags.push({pivot:q,flag:nt,base:Z.attributes.position.array.slice()})}let T=["#7f8a99","#9aa3ad","#6d7787","#b0a593","#8c8f96"].map(k=>new fe({color:k})),v=T.map(()=>[]);for(let k=0;k<70;k++){let D=Gt()*Math.PI*2,I=yt(230,330),q=yt(12,70)*(Math.abs(Math.sin(D))>.6?1.3:.7),Z=new Te(yt(12,28),q,yt(12,28));y.rotation.set(0,Gt()*3,0),y.position.set(Math.cos(D)*I,q/2,Math.sin(D)*I),y.updateMatrix(),Z.applyMatrix4(y.matrix),v[k%T.length].push(Z)}v.forEach((k,D)=>n.add(new Et(Cs(k),T[D])));let B=new fe({color:i.ground,flatShading:!0});for(let k=0;k<9;k++){let D=k/9*Math.PI*2+Gt()*.3,I=new Et(new vs(yt(90,160),yt(40,90),6),B);I.position.set(Math.cos(D)*470,0,Math.sin(D)*470),n.add(I)}return s.update=(k,D,I,q)=>{s.crowdUniforms.uTime.value=D,s.crowdUniforms.uExcite.value=q;let Z=Math.atan2(-I.z,I.x),nt=Math.hypot(I.x,I.z);if(!(!Number.isFinite(nt)||!Number.isFinite(D)))for(let Rt of s.flags){Rt.pivot.rotation.y=Z;let Q=Rt.flag.geometry.attributes.position.array,ct=Rt.base;for(let St=0;St<Q.length;St+=3){let Ct=ct[St];Q[St+2]=Math.sin(D*(4+nt)-Ct*2.2)*.14*Ct*(.3+nt/8),Q[St+1]=ct[St+1]-Ct*(.5-Math.min(.45,nt/18))}Rt.flag.geometry.attributes.position.needsUpdate=!0}},s}var Fn=new Set(["free","step","fend","bump","stumble","celebrate","kick"]),na=class{constructor(t,e,i){this.team=t,this.num=e.num,this.pos=e.pos,this.name=e.name,this.attr=e.attr,this.mass=e.mass,this.fullName=e.fullName||e.name,this.ovr=e.ovr??0,this.age=e.age,this.heightCm=e.heightCm,this.weightKg=e.weightKg,this.star=!!e.star,this.isForward=Mu.has(e.num),this.model=i,this.p=new z,this.v=new z,this.heading=0,this.wish={x:0,z:0},this.wantSprint=!1,this.faceTarget=null,this.speedCap=1,this.state="free",this.stateT=0,this.stateDur=0,this.anim={t:0,side:1,fall:0,faceUp:!1,kt:0,foot:"R",preKick:!1,roll:0,dur:.5,pile:0},this.stamina=1,this.cd={step:0,fend:0,bump:0,tackle:0,dummy:0},this.speedMul=1,this.offside=!1,this.passAnim=0,this.passSide=1,this.catchAnim=0,this.catchHigh=!1,this.refSignal=0,this.hasBall=!1,this.carrySide=1,this.pendingPass=null,this.lateralLean=0,this.accelLean=0,this.readyStance=!1,this.legDriveVis=0,this.jumpY=0,this.jumpT=0,this.fendHold=0,this.speedH=0,this.ai={role:"none",react:0,bite:0,biteX:0,biteZ:0,evadeChecked:null,think:Math.random()*.2},this.engage=null,this.lunge=null,this.controlled=!1,this.stats={tackles:0,missed:0,runs:0,metres:0,tries:0}}get topSpeed(){return(5.6+this.attr.speed*.042)*(this.hasBall?.96:1)*(.84+.16*this.stamina)*this.speedMul}get visualState(){return this.state}get right(){return{x:-Math.cos(this.heading),z:Math.sin(this.heading)}}get fwd(){return{x:Math.sin(this.heading),z:Math.cos(this.heading)}}canAct(){return this.state==="free"||this.state==="bump"||this.state==="step"||this.state==="fend"}isUpright(){return!["ground","getup","lunge","dive","tackling","tackled","scrum"].includes(this.state)}setState(t,e=0){this.state=t,this.stateT=0,this.stateDur=e,this.anim.t=0,this.anim.quick=!1}knockDown(t,e=!1,i={}){this.setState("ground",t),this.anim.fall=i.fall??.35,this.anim.faceUp=e,this.anim.pile=i.pile||0,this.lunge=null,this.pendingPass=null}update(t){this.stateT+=t,this.anim.t+=t;for(let s in this.cd)this.cd[s]>0&&(this.cd[s]-=t);this.passAnim>0&&(this.passAnim-=t),this.catchAnim>0&&(this.catchAnim-=t),this.refSignal>0&&(this.refSignal-=t),this.speedMul=si(this.speedMul,1,1.2,t),this.ai.bite>0&&(this.ai.bite-=t),this.jumpT>0?(this.jumpT=Math.max(0,this.jumpT-t),this.jumpY=Math.sin((1-this.jumpT/.6)*Math.PI)*.55):this.jumpY=0;let e=this.state;if(this.stateDur>0&&this.stateT>=this.stateDur&&(e==="ground"?(this.setState("getup",.6),this.anim.dur=.6):(e==="getup"||e==="step"||e==="fend"||e==="bump"||e==="stumble"||e==="kick")&&this.setState("free")),e==="ground"&&(this.anim.fall=Math.min(1,this.anim.fall+t*4)),Fn.has(this.state))this.locomote(t);else if(this.state==="ground"||this.state==="getup"||this.state==="scrum"||this.state==="ptb"||this.state==="goalkick"){let s=Math.exp(-6*t);this.v.x*=s,this.v.z*=s,this.p.x+=this.v.x*t,this.p.z+=this.v.z*t}this.speedH=Math.hypot(this.v.x,this.v.z)}locomote(t){let e=this.topSpeed*this.speedCap,i=e*.64,s=this.wish.x,a=this.wish.z,r=Math.hypot(s,a);r>1&&(s/=r,a/=r,r=1);let o=r*(this.wantSprint?e:i);this.state==="stumble"&&(o*=.35),this.state==="fend"&&(o*=.96),this.state==="kick"&&(o*=.5),this.state==="celebrate"&&(o*=.5);let c=r>.01?s/r*o:0,l=r>.01?a/r*o:0,h=Math.hypot(this.v.x,this.v.z),u=(4.2+this.attr.accel*.04)*(1-.55*Math.min(1,h/Math.max(1,e))),d=11,f=(7+this.attr.agility*.06)*(1.25-.55*Math.min(1,h/Math.max(1,e))),g=c-this.v.x,y=l-this.v.z,m=0,p=0;if(h>1){let _=this.v.x/h,b=this.v.z/h,R=g*_+y*b,E=g-R*_,A=y-R*b;R=et(R,-d*t,u*t);let P=Math.hypot(E,A),w=f*t;P>w&&(E*=w/P,A*=w/P),this.v.x+=R*_+E,this.v.z+=R*b+A;let M=this.right;m=(E*M.x+A*M.z)/t,p=R/t}else{let _=Math.hypot(g,y),b=u*1.5*t;_>b&&(g*=b/_,y*=b/_),this.v.x+=g,this.v.z+=y,p=_/t}this.p.x+=this.v.x*t,this.p.z+=this.v.z*t;let x=Math.hypot(this.v.x,this.v.z);this.wantSprint&&x>i*1.02?this.stamina=Math.max(0,this.stamina-t*.05*(1.45-this.attr.stamina/100)):this.stamina=Math.min(1,this.stamina+t*(x<2?.07:.04)),x>.8?this.heading=As(this.heading,Tt(this.v.x,this.v.z),14,t):this.faceTarget!==null&&(this.heading=As(this.heading,this.faceTarget,7,t)),this.lateralLean=si(this.lateralLean,et(m/30,-.32,.32),10,t),this.accelLean=si(this.accelLean,et(p/8,-.5,1),6,t)}doStep(t){if(this.cd.step>0||!(this.state==="free"||this.state==="bump"))return!1;this.setState("step",.38),this.anim.side=t;let e=this.right,i=4.3+this.attr.agility*.035,s=this.fwd,a=this.v.x*s.x+this.v.z*s.z;return this.v.x=s.x*a*.88+e.x*t*i+(this.v.x-s.x*a)*.3,this.v.z=s.z*a*.88+e.z*t*i+(this.v.z-s.z*a)*.3,this.cd.step=.85,this.stamina=Math.max(0,this.stamina-.035),!0}doFend(t){return this.cd.fend>0||!(this.state==="free"||this.state==="step")?!1:(this.setState("fend",.5),this.fendHold=0,t&&(this.carrySide=-t),this.cd.fend=.95,this.stamina=Math.max(0,this.stamina-.03),!0)}doBump(){return this.cd.bump>0||!(this.state==="free"||this.state==="step")?!1:(this.setState("bump",.5),this.v.x*=1.05,this.v.z*=1.05,this.cd.bump=1,this.stamina=Math.max(0,this.stamina-.04),!0)}doJump(){return this.jumpT>0||!(this.state==="free"||this.state==="stumble")?!1:(this.jumpT=.6,this.catchAnim=.6,this.catchHigh=!0,this.stamina=Math.max(0,this.stamina-.02),!0)}holdFend(){this.state==="fend"&&this.stateT<.9&&(this.stateDur=Math.max(this.stateDur,this.stateT+.08),this.fendHold=this.stateT)}stepWindow(){return this.state==="step"&&this.stateT>.02&&this.stateT<.34}fendWindow(){return this.state==="fend"&&(this.stateT<.42||this.fendHold>=this.stateT-.05)}bumpWindow(){return this.state==="bump"&&this.stateT<.45}faceHeading(t){this.heading=t}lookAt(t,e){this.faceTarget=Tt(t-this.p.x,e-this.p.z)}};var It={back0:13,front:14,side:15,top:16,sleeve:17,shorts:18,socks:19,boots:20,gear:21,skin:22,face:30,hair:38,tape:46,boots2:47,face2:48,tattoo:56};function _c(n,t,e,i,s){switch(n.fillStyle=i.primary,n.fillRect(0,0,t,e),n.fillStyle=i.secondary,i.pattern){case"vee":n.beginPath(),n.moveTo(0,0),n.lineTo(t*.5,e*.55),n.lineTo(t,0),n.lineTo(t,e*.18),n.lineTo(t*.5,e*.75),n.lineTo(0,e*.18),n.closePath(),n.fill();break;case"hoops":for(let a=0;a<5;a++)a%2===1&&n.fillRect(0,a*e/5,t,e/5);break;case"sash":n.beginPath(),n.moveTo(s?0:t,e*.05),n.lineTo(s?t*.28:t*.72,0),n.lineTo(s?t:0,e*.72),n.lineTo(s?t:0,e),n.lineTo(s?t*.78:t*.22,e),n.closePath(),n.fill();break;case"stripes":for(let a=0;a<7;a++)a%2===1&&n.fillRect(a*t/7,0,t/7,e);break;case"yoke":n.fillRect(0,0,t,e*.3),n.fillStyle=i.trim,n.fillRect(0,e*.3,t,e*.04);break;default:n.fillRect(0,e*.88,t,e*.12)}n.fillStyle=i.trim,n.fillRect(t*.36,0,t*.28,e*.05)}function of(n,t,e){n.fillStyle=t,n.fillRect(0,0,128,128),n.scale(2,2),n.fillStyle="rgba(0,0,0,0.10)",n.fillRect(0,0,64,8),n.fillStyle="rgba(0,0,0,0.13)",n.fillRect(29,27,6,14),n.fillStyle="rgba(0,0,0,0.08)",n.fillRect(6,34,10,10),n.fillRect(48,34,10,10);let i=e?5:7;n.fillStyle="#f4f0ea",n.fillRect(14,23,12,i),n.fillRect(38,23,12,i),n.fillStyle="#2a1a0c",n.fillRect(19,23,5,i),n.fillRect(40,23,5,i),n.fillStyle="rgba(25,15,6,0.9)",e?(n.fillRect(11,17,17,4),n.fillRect(36,17,17,4)):(n.fillRect(13,18,14,3),n.fillRect(37,18,14,3)),n.fillStyle="#6e2a22",n.fillRect(e?20:23,47,e?24:18,3),n.fillStyle="rgba(0,0,0,0.12)",n.fillRect(24,52,16,2)}function Yy(n,t){n.fillStyle=t,n.fillRect(0,0,128,128),n.strokeStyle="rgba(15,12,10,0.82)",n.fillStyle="rgba(15,12,10,0.82)",n.lineWidth=5;for(let e=6;e<128;e+=26){n.fillRect(0,e,128,4),n.beginPath();for(let i=0;i<=128;i+=16)n.lineTo(i,e+8),n.lineTo(i+8,e+18);n.stroke()}}function Sc(n,t){let e=document.createElement("canvas");e.width=e.height=1024;let i=e.getContext("2d"),s=(c,l)=>{i.save(),i.translate(c%8*128,Math.floor(c/8)*128),i.beginPath(),i.rect(0,0,128,128),i.clip(),l(i,128,128),i.restore()},a=c=>(l,h,u)=>{l.fillStyle=c,l.fillRect(0,0,h,u)},r=c=>["#ffffff","#f2f2f2","#f1e3c4","#ffd21f","#f2d21f","#f2b51d","#c6f01e"].includes(c);for(let c=1;c<=14;c++)s(c===14?It.back0:c-1,(l,h,u)=>{_c(l,h,u,n,!1),!(c===14||t==="ref")&&(l.font="bold 66px Arial Black, Arial",l.textAlign="center",l.textBaseline="middle",l.lineWidth=7,l.strokeStyle=r(n.primary)?n.secondary:"#111",l.fillStyle=n.trim===n.primary||r(n.primary)&&r(n.trim)?n.secondary:n.trim,l.strokeText(String(c),h/2,u*.45),l.fillText(String(c),h/2,u*.45))});s(It.front,(c,l,h)=>{_c(c,l,h,n,!0),c.fillStyle=n.trim,c.beginPath(),c.arc(l*.72,h*.2,8,0,Math.PI*2),c.fill(),t!=="ref"&&(c.fillStyle="rgba(255,255,255,0.85)",c.fillRect(l*.16,h*.42,l*.68,h*.14),c.fillStyle="#222",c.font="bold 15px Arial",c.textAlign="center",c.fillText("ROO FUEL",l/2,h*.53))}),s(It.side,(c,l,h)=>_c(c,l,h,n,!0)),s(It.top,a(n.pattern==="yoke"||n.pattern==="vee"?n.secondary:n.primary)),s(It.sleeve,(c,l,h)=>{c.fillStyle=n.pattern==="yoke"?n.secondary:n.primary,c.fillRect(0,0,l,h),c.fillStyle=n.trim,c.fillRect(0,h*.86,l,h*.14)}),s(It.shorts,(c,l,h)=>{c.fillStyle=n.shorts,c.fillRect(0,0,l,h),c.fillStyle=n.secondary===n.shorts?n.primary:n.secondary,c.fillRect(0,h*.9,l,h*.1)}),s(It.socks,(c,l,h)=>{c.fillStyle=n.socks,c.fillRect(0,0,l,h),c.fillStyle=n.secondary,c.fillRect(0,h*.08,l,h*.12),c.fillRect(0,h*.27,l,h*.06)}),s(It.boots,(c,l,h)=>{c.fillStyle="#161616",c.fillRect(0,0,l,h),c.fillStyle="#e8e8e8",c.fillRect(0,h*.4,l,h*.1)}),s(It.boots2,(c,l,h)=>{c.fillStyle=t.charCodeAt(0)%2?"#f26b1d":"#e9ecef",c.fillRect(0,0,l,h),c.fillStyle="#111",c.fillRect(0,h*.4,l,h*.1)}),s(It.gear,a("#202020")),s(It.tape,(c,l,h)=>{c.fillStyle="#f2f2ee",c.fillRect(0,0,l,h),c.fillStyle="rgba(0,0,0,0.08)";for(let u=0;u<h;u+=16)c.fillRect(0,u,l,3)}),lc.forEach((c,l)=>{s(It.skin+l,a(c)),s(It.face+l,h=>of(h,c,0)),s(It.face2+l,h=>of(h,c,1)),s(It.tattoo+l,h=>Yy(h,c))}),cc.forEach((c,l)=>s(It.hair+l,a(c)));let o=new gn(e);return o.colorSpace=Re,o.anisotropy=4,o.minFilter=Wi,{tex:o,mat:new fe({map:o})}}function $y(n){let t=Array.isArray(n)?n[0]:n,e=t%8,i=Math.floor(t/8),s=4/1024,a=e/8+s,r=(e+1)/8-s,o=1-(i+1)/8+s,c=1-i/8-s;return Array.isArray(n)?{u0:a,u1:r,v0:o+(c-o)*n[1],v1:o+(c-o)*n[2]}:{u0:a,u1:r,v0:o,v1:c}}function qy(n,t){let e=n.attributes.uv,i=n.attributes.normal;for(let s=0;s<e.count;s++){let a=t;if(Array.isArray(t)&&t.length===6){let o=i.getX(s),c=i.getY(s),l=i.getZ(s),h=Math.abs(o),u=Math.abs(c),d=Math.abs(l),f=h>=u&&h>=d?o>0?0:1:u>=d?c>0?2:3:l>0?4:5;a=t[f]}let r=$y(a);e.setXY(s,r.u0+et(e.getX(s),0,1)*(r.u1-r.u0),r.v0+et(e.getY(s),0,1)*(r.v1-r.v0))}}function le(n,t,e,i,s,a={}){let r=a.round?2:1,o=new Te(1,1,1,r,r,r),c=o.attributes.position;for(let l=0;l<c.count;l++){let h=c.getX(l),u=c.getY(l),d=c.getZ(l);if(a.round){let g=Math.hypot(h,u,d)||1,y=a.round,m=h/g*.5*1.15,p=u/g*.5*1.15,x=d/g*.5*1.15;h=Zt(h,et(m,-.5,.5),y),u=Zt(u,et(p,-.5,.5),y),d=Zt(d,et(x,-.5,.5),y)}let f=u+.5;c.setXYZ(l,h*Zt(n,t,f),u*e,d*Zt(i,s,f)+(a.lean||0)*f)}return o.computeVertexNormals(),o}function Ii(n,t,e,i={}){let s=new Ze(n,t,e,i.sides||7,1,!1);return s.scale(1,1,i.flat||1),s.translate(0,-e/2,0),s}function de(n,t,e,i=[0,0,0],s=null){return s&&n.applyMatrix4(new Xt().makeRotationFromEuler(new ui(s[0],s[1],s[2]))),n.translate(i[0],i[1],i[2]),qy(n,t),n.clearGroups(),n.userData.bone=e,n}function Zy(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}var Jy=new xs(.45,14),Qy=new we({color:0,transparent:!0,opacity:.32,depthWrite:!1}),bc=.96,Mc=["bodyX","bodyZ","bodyY","lean","chestX","twist","headX","headY","shLx","shLy","shLz","shRx","shRy","shRz","elL","elR","hipL","hipR","hipLz","hipRz","knL","knR"];function Nr(){let n={};for(let t of Mc)n[t]=0;return n}var sa=class{constructor(t,e){let i=e.build?.w??1,s=e.build?.h??1;this.root=new Mi;let a=Zy(e.fullName||e.name||String(e.number)),r=(Mt,X)=>(a>>>Mt)%X,o=Math.max(0,lc.indexOf(e.skin)),c=Math.max(0,cc.indexOf(e.hair)),l=It.skin+o,h=It.hair+c,u=e.mass||90,d=et((u-88)/30,0,1),f=1+d*.22,g=1+d*.16,y=1+d*.35;this.isRef=!!e.isRef;let m=(Mt,X,tt,pt,at)=>{let gt=new qs;return gt.name=Mt,gt.position.set(tt,pt,at),X&&X.add(gt),gt};this.body=m("body",null,0,bc,0),this.pelvis=m("pelvis",this.body,0,0,0),this.spine=m("spine",this.pelvis,0,.1,0),this.chest=m("chest",this.spine,0,.22,0),this.head=m("head",this.chest,0,.31,.01);let p=m("shL",this.chest,.235,.235,0),x=m("elL",p,0,-.3,0),_=m("shR",this.chest,-.235,.235,0),b=m("elR",_,0,-.3,0),R=m("hipL",this.pelvis,.105,-.02,0),E=m("knL",R,0,-.44,0),A=m("hipR",this.pelvis,-.105,-.02,0),P=m("knR",A,0,-.44,0);this.torso=this.chest,this.armL={sh:p,el:x},this.armR={sh:_,el:b},this.legL={hip:R,knee:E},this.legR={hip:A,knee:P};let w=[this.body,this.pelvis,this.spine,this.chest,this.head,p,x,_,b,R,E,A,P];this.body.updateMatrixWorld(!0);let M=e.number>=1&&e.number<=13?e.number-1:It.back0,C=(r(3,2)?It.face2:It.face)+o,G=1+d*.1,O=[de(le(.37*G,.36*G,.24,.25,.24,{round:.25}),It.shorts,this.pelvis,[0,-.02,0]),de(le(.36*G,.4*G,.24,.23+d*.04,.25+d*.02,{round:.2}),[It.side,It.side,It.top,It.shorts,[It.front,0,.3],[M,0,.3]],this.spine,[0,.1,0]),de(le(.4*G,.5*G,.3,.25,.27,{round:.2,lean:.015}),[It.side,It.side,It.top,It.top,[It.front,.3,1],[M,.3,1]],this.chest,[0,.13,0]),de(le(.3*y,.14*y,.08,.17,.12),It.top,this.chest,[0,.3,-.01]),de(Ii(.06*y,.07*y,.1),l,this.head,[0,.05,-.01]),de(le(.215,.23,.25,.235,.25,{round:.42}),[l,l,l,l,C,l],this.head,[0,.15,0]),de(le(.15,.2,.06,.15,.2,{round:.3}),l,this.head,[0,.035,.03]),de(le(.035,.035,.07,.04,.03),l,this.head,[0,.12,.125]),de(le(.03,.03,.06,.05,.05),l,this.head,[.115,.14,-.01]),de(le(.03,.03,.06,.05,.05),l,this.head,[-.115,.14,-.01])],K=e.headgear?"gear":e.hairStyle||"short",J=K==="short"&&r(5,4)===0?"fade":K==="buzz"&&r(5,3)===0?"bald":K==="long"&&r(5,2)?"bun":K,W=(Mt,X)=>O.push(de(Mt,h,this.head,X));J==="gear"?O.push(de(le(.25,.22,.17,.27,.23,{round:.5}),It.gear,this.head,[0,.235,-.01]),de(le(.05,.05,.12,.08,.08),It.gear,this.head,[.12,.13,-.01]),de(le(.05,.05,.12,.08,.08),It.gear,this.head,[-.12,.13,-.01])):J==="short"?(W(le(.235,.2,.08,.255,.21,{round:.5}),[0,.27,-.005]),W(le(.235,.235,.14,.05,.05),[0,.2,-.11])):J==="fade"?W(le(.2,.17,.07,.22,.18,{round:.5}),[0,.28,.005]):J==="buzz"?W(le(.228,.2,.05,.25,.21,{round:.5}),[0,.27,-.005]):J==="mohawk"?W(le(.06,.05,.08,.24,.2),[0,.3,-.01]):J==="long"?(W(le(.24,.21,.08,.26,.22,{round:.5}),[0,.275,-.005]),W(le(.24,.24,.26,.06,.06),[0,.13,-.12])):J==="bun"?(W(le(.235,.2,.07,.255,.21,{round:.5}),[0,.275,-.005]),W(le(.1,.09,.09,.1,.09,{round:.6}),[0,.3,-.12])):J==="afro"&&W(le(.3,.27,.19,.31,.27,{round:.6}),[0,.28,-.02]);let it=this.isRef?0:r(8,6);(it===1||it===2)&&W(le(.16,.21,it===1?.07:.1,.13,.2,{round:.3}),[0,it===1?.03:.025,.045]),it===3&&W(le(.07,.07,.05,.05,.05),[0,.02,.12]),(it===1||it===4)&&W(le(.09,.09,.02,.03,.03),[0,.085,.125]);let Y=!this.isRef&&r(11,4)===0?r(13,2)?1:-1:0,ot=!this.isRef&&r(15,3)===0;for(let[Mt,X,tt]of[[p,x,1],[_,b,-1]]){let pt=Y===tt?It.tattoo+o:l;O.push(de(le(.16*f,.17*f,.15,.15*f,.15*f,{round:.5}),It.sleeve,Mt,[.01*tt,-.04,0]),de(Ii(.058*f,.047*f,.25,{flat:1.05}),pt,Mt,[.01*tt,-.07,0]),de(Ii(.05*f,.036*f,.25,{flat:.85}),pt,X,[0,0,0]),de(le(.065,.075,.1,.05,.06,{round:.3}),l,X,[0,-.28,.005])),ot&&O.push(de(Ii(.042*f,.04*f,.05,{flat:.9}),It.tape,X,[0,-.19,0]))}let ft=!this.isRef&&r(17,5)===0,xt=!this.isRef&&r(20,4)===0?It.boots2:It.boots;for(let[Mt,X]of[[R,E],[A,P]])O.push(de(Ii(.1*g,.092*g,.24,{flat:1.05}),It.shorts,Mt,[0,.03,0]),de(Ii(.088*g,.064*g,.26,{flat:1.08}),l,Mt,[0,-.19,.005])),ft?O.push(de(Ii(.064*g,.068*g,.17,{flat:1.05}),l,X,[0,.01,-.005]),de(Ii(.068*g,.046,.25,{flat:1.05}),It.socks,X,[0,-.16,-.005])):O.push(de(Ii(.064*g,.07*g,.17,{flat:1.05}),It.socks,X,[0,.01,-.005]),de(Ii(.07*g,.044,.25,{flat:1.05}),It.socks,X,[0,-.16,-.005])),O.push(de(le(.1,.095,.085,.27,.22,{round:.25}),xt,X,[0,-.475,.045]));for(let Mt of O){let X=w.indexOf(Mt.userData.bone);Mt.applyMatrix4(Mt.userData.bone.matrixWorld);let tt=Mt.attributes.position.count,pt=new Uint16Array(tt*4),at=new Float32Array(tt*4);for(let gt=0;gt<tt;gt++)pt[gt*4]=X,at[gt*4]=1;Mt.setAttribute("skinIndex",new gs(pt,4)),Mt.setAttribute("skinWeight",new xe(at,4)),Mt.index}let zt=Cs(O.map(Mt=>Mt.index?Mt.toNonIndexed():Mt),!1);for(let Mt of O)Mt.dispose();this.mesh=new or(zt,t.mat),this.mesh.add(this.body),this.mesh.bind(new cr(w)),this.mesh.frustumCulled=!1,this.mesh.scale.set(i,s,i),this.root.add(this.mesh),this.ballAnchor=new Me,this.ballAnchor.position.set(-.19,.1,.19),this.chest.add(this.ballAnchor),this.handL=new Me,this.handL.position.set(-.03,-.3,.06),x.add(this.handL),this.handR=new Me,this.handR.position.set(.03,-.3,.06),b.add(this.handR),this.shadow=new Et(Jy,Qy),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.015,this.root.add(this.shadow),this.phase=Math.random()*6,this.j=Nr(),this.j.shLz=.1,this.j.shRz=-.1,this.j.elL=this.j.elR=-.3,this.j.knL=this.j.knR=.1,this._t=Nr(),this._a=Nr(),this._b=Nr(),this.twoHand=0,this.lastSt="free",this.blendL=16,this._v=new z,this._w=new z}ballWorld(t){return this.twoHand>.5?(this.handL.getWorldPosition(t),this.handR.getWorldPosition(this._w),t.add(this._w).multiplyScalar(.5)):this.ballAnchor.getWorldPosition(t)}run(t,e,i,s){let a=et(i/7,0,1),r=Math.sin(this.phase),o=Math.cos(this.phase),c=.3+.62*a;t.lean=.05+a*.2+e.accelLean*.16,t.chestX=.02*a,t.twist=-r*.1*a,t.bodyZ=e.lateralLean,t.bodyX=0,t.bodyY=a*(.05*Math.abs(r)-.04)-.01,t.hipL=-r*c,t.hipR=r*c,t.knL=.12+a*(1.55*Math.pow(Math.max(0,Math.cos(this.phase+.8)),1.4)+.25*Math.max(0,-o)),t.knR=.12+a*(1.55*Math.pow(Math.max(0,Math.cos(this.phase+.8+Math.PI)),1.4)+.25*Math.max(0,o)),t.hipLz=.02,t.hipRz=-.02;let l=.2+.75*a;t.shLx=r*l-.1*a,t.shRx=-r*l-.1*a,t.shLz=.12,t.shRz=-.12,t.shLy=.1,t.shRy=-.1,t.elL=-.35-a*(1.05+.25*Math.max(0,-r)),t.elR=-.35-a*(1.05+.25*Math.max(0,r)),t.headX=-t.lean*.8,t.headY=0,i<.3&&this.idle(t,e,s)}idle(t,e,i){let s=Math.sin(i*2.1+this.phase)*.015,a=Math.sin(i*.6+this.phase*2)*.03;if(e.readyStance){let r=Math.sin(i*5+this.phase)*.015;t.lean=.32,t.chestX=.08,t.bodyY=-.1+r,t.bodyX=0,t.bodyZ=0,t.hipL=-.4,t.hipR=-.3,t.knL=.75,t.knR=.65,t.hipLz=.12,t.hipRz=-.12,t.shLx=-.75,t.shRx=-.75,t.shLz=.25,t.shRz=-.25,t.shLy=-.3,t.shRy=.3,t.elL=t.elR=-1.25,t.headX=-.35}else t.lean=.04+s,t.chestX=-.02,t.bodyY=-.005,t.bodyZ=a*.5,t.bodyX=0,t.hipL=-.05,t.hipR=.05,t.knL=.1,t.knR=.06,t.hipLz=.06+a,t.hipRz=-.06+a,t.shLx=.05,t.shRx=.02,t.shLz=.14,t.shRz=-.14,t.shLy=.15,t.shRy=-.15,t.elL=-.3,t.elR=-.25,t.headX=0}ground(t,e,i,s=0,a=0){if(t.bodyX=i*1.42*e,t.bodyY=(-bc+.16+s)*e,t.bodyZ=0,t.lean=.05,t.chestX=0,t.twist=0,i>0){if(t.shLx=-2.3,t.shRx=-2,t.shLz=.55,t.shRz=-.45,t.shLy=0,t.shRy=0,t.elL=-.7,t.elR=-.9,t.hipL=.12,t.hipR=-.05,t.knL=.75,t.knR=.25,t.hipLz=.12,t.hipRz=-.08,t.headX=-.55,t.headY=.6,a){let r=a>0?"R":"L";t["sh"+r+"x"]=-.6,t["el"+r]=-2.1,t["sh"+r+"z"]=a>0?.2:-.2}}else if(t.shLx=-.4,t.shRx=-.2,t.shLz=1,t.shRz=-.8,t.shLy=0,t.shRy=0,t.elL=-.5,t.elR=-.9,t.hipL=-.9,t.hipR=-.1,t.knL=1.5,t.knR=.2,t.hipLz=.1,t.hipRz=-.12,t.headX=.35,t.headY=-.3,a){let r=a>0?"R":"L";t["sh"+r+"x"]=-.6,t["el"+r]=-2.1,t["sh"+r+"z"]=a>0?.25:-.25}}kneel(t){t.bodyX=.15,t.bodyY=-.42,t.bodyZ=0,t.lean=.55,t.chestX=.1,t.twist=.1,t.hipL=-1.45,t.knL=1.5,t.hipR=.15,t.knR=1.65,t.hipLz=.1,t.hipRz=-.05,t.shLx=-.9,t.shLz=.1,t.elL=-.6,t.shRx=-.4,t.shRz=-.25,t.elR=-.4,t.shLy=0,t.shRy=0,t.headX=-.4}wrap(t,e,i){let s=Math.sin(e*11+this.phase);t.bodyX=.18,t.bodyY=-.2,t.bodyZ=0,t.lean=.55,t.chestX=.3,t.twist=.18,t.shLx=-1.25,t.shRx=-1.35,t.shLy=-1.05,t.shRy=1.05,t.shLz=.15,t.shRz=-.15,t.elL=-1.35,t.elR=-1.45,t.hipL=-.75-s*.35*i,t.hipR=-.55+s*.35*i,t.knL=.95+Math.max(0,s)*.4*i,t.knR=.85+Math.max(0,-s)*.4*i,t.hipLz=.15,t.hipRz=-.15,t.headX=-.8,t.headY=.55}update(t,e,i,s){if(this.root.position.set(t.p.x,0,t.p.z),this.root.rotation.y=t.heading,e<=0)return;let a=this._t,r=t.speedH,o=t.anim,c=t.visualState;this.phase+=e*(r>.25?4.4+.72*r:0),this.run(a,t,r,i);let l=t.hasBall&&!["ground","goalkick","ptb","scrum"].includes(c),h=0;if(l){let m=t.carrySide,p=m>0?"R":"L";t.pendingPass||r<2.5&&c==="free"?h=1:(a["sh"+p+"x"]=-.5,a["sh"+p+"z"]=m>0?.22:-.22,a["sh"+p+"y"]=m>0?.25:-.25,a["el"+p]=-1.85),this.ballAnchor.position.set(-.17*m,.1,.18)}let u=15;switch(c){case"step":{let m=ai(o.t/.1)*(1-ai((o.t-.24)/.14));a.bodyZ=o.side*.38*m,a.hipLz=.02+.3*m,a.hipRz=-(.02+.3*m),a.twist=-o.side*.25*m,a.bodyY-=.08*m,a.knL+=.3*m,a.knR+=.3*m,a.headY=-o.side*.2*m,u=26;break}case"fend":{let m=Math.min(1,o.t/.08)*(1-ai((o.t-.35)/.15)),p=t.carrySide>0?"L":"R",x=p==="L"?1:-1;a["sh"+p+"x"]=Zt(a["sh"+p+"x"],-1.45,m),a["sh"+p+"z"]=x*.3*m,a["sh"+p+"y"]=0,a["el"+p]=Zt(a["el"+p],-.05,m),a.twist=-x*.35*m,a.lean+=.1*m,a.headY=x*.2*m,u=24;break}case"bump":{let m=Math.min(1,o.t/.1)*(1-ai((o.t-.4)/.15));a.lean=Zt(a.lean,.7,m),a.chestX+=.2*m,a.twist=.5*m*-t.carrySide,a.headX=-.2*m,a.bodyY-=.12*m;let p=t.carrySide>0?"L":"R";a["sh"+p+"x"]=Zt(a["sh"+p+"x"],-.3,m),a["el"+p]=Zt(a["el"+p],-1.9,m),u=22;break}case"lunge":{let m=Math.min(1,o.t/.12);a.bodyX=.35*m,a.bodyY=-.22*m,a.lean=.45,a.chestX=.25,a.shLx=a.shRx=-1.35,a.shLz=.55,a.shRz=-.55,a.shLy=-.5,a.shRy=.5,a.elL=a.elR=-.7,a.hipL=-.9,a.hipR=.45,a.knL=.9,a.knR=.35,a.headX=-.6,u=26;break}case"dive":{let m=Math.min(1,o.t/.18);a.bodyX=1.3*m,a.bodyY=-.5*m,a.lean=.05,a.chestX=-.1,a.shLx=a.shRx=-2.6,a.shLz=.3,a.shRz=-.3,a.shLy=a.shRy=0,a.elL=a.elR=-.25,a.hipL=.15,a.hipR=.3,a.knL=.25,a.knR=.5,a.headX=-1,u=22;break}case"tackling":{this.wrap(a,i,1);let m=ai(o.fall??0);m>0&&(this.ground(this._a,1,1,.16),this.blend(a,this._a,m)),u=18;break}case"tackled":{let m=t.legDriveVis,p=Math.sin(this.phase),x=o.faceUp?-1:1;a.lean=.42,a.chestX=.15,a.bodyY=-.1,a.bodyX=.05,a.hipL=-.45-p*.5*m,a.hipR=-.45+p*.5*m,a.knL=.6+Math.max(0,-Math.cos(this.phase))*.8*m,a.knR=.6+Math.max(0,Math.cos(this.phase))*.8*m;let _=t.carrySide>0?"L":"R";a["sh"+_+"x"]=-.9,a["sh"+_+"z"]=_==="L"?.5:-.5,a["el"+_]=-.5,a.headX=-.3,this.phase+=e*9*m;let b=o.fall??0,R=ai(b/.55),E=ai((b-.3)/.7);a.bodyY-=.18*R,a.knL+=.4*R,a.knR+=.4*R,E>0&&(this.ground(this._a,1,x,0,t.hasBall?t.carrySide:0),this.blend(a,this._a,E)),u=14;break}case"ground":{let m=ai(o.fall??1);this.ground(this._a,1,o.faceUp?-1:1,o.pile||0,t.hasBall?t.carrySide:0),this.blend(a,this._a,Math.max(m,.001)),u=9;break}case"getup":{if(o.quick)break;let m=et(o.t/(o.dur||.45),0,1),p=o.faceUp?-1:1;this.ground(this._a,1,p,o.pile||0),this.kneel(this._b),m<.5?(this.blend(this._b,this._a,1-ai(m/.5)),this.blend(a,this._b,1)):this.blend(a,this._b,1-ai((m-.5)/.5)),u=18;break}case"ptb":{if(a.bodyX=.1,a.lean=.5,a.chestX=.35,a.shLx=a.shRx=-.55,a.shLz=.2,a.shRz=-.2,a.shLy=a.shRy=0,a.elL=a.elR=-.5,a.knL=a.knR=.45,a.hipL=a.hipR=-.45,a.hipLz=.12,a.hipRz=-.12,o.roll>0){let m=Math.sin(et(o.roll,0,1)*Math.PI);a.hipR=-.45+m*1,a.knR=.45+m*.7}a.bodyY=-.12,a.headX=-.4,u=10;break}case"kick":case"goalkick":{let m=o.kt??0,p=o.foot==="L"?"L":"R",x=p==="L"?"R":"L",_,b;if(m<.16){let R=m/.16;_=Zt(0,.9,R),b=Zt(.2,1.5,R)}else if(m<.24){let R=(m-.16)/.08;_=Zt(.9,-1.2,R),b=Zt(1.5,.1,R)}else{let R=et((m-.24)/.3,0,1);_=Zt(-1.6,-.2,R),b=Zt(.05,.3,R)}o.preKick&&(_=0,b=.15),a["hip"+p]=_,a["kn"+p]=b,a["hip"+x]=.1,a["kn"+x]=.25,a.shLz=.9,a.shRz=-.9,a.shLx=a.shRx=-.2,a.shLy=a.shRy=0,a.elL=a.elR=-.3,a.lean=m>.16&&m<.4?-.15:.15,a.chestX=0,a.headX=.25,!o.preKick&&m<.6&&(a.bodyY=0,a.bodyZ=0),h=0,u=30;break}case"celebrate":{let m=Math.abs(Math.sin(i*7+this.phase));a.shLx=a.shRx=-2.8,a.shLz=.3,a.shRz=-.3,a.elL=a.elR=-.2,a.bodyY=m*.25,a.lean=-.1,a.headX=-.3,a.knL=a.knR=.3*(1-m);break}case"scrum":{a.lean=.7,a.chestX=.55,a.bodyY=-.3,a.shLx=a.shRx=-1.3,a.shLz=.5,a.shRz=-.5,a.elL=a.elR=-.6,a.hipL=-.85+Math.sin(i*3+this.phase)*.1,a.hipR=-.7,a.knL=1.1,a.knR=1,a.headX=-.6;break}case"signal":{a.shRx=-2.6,a.shRz=-.2,a.elR=-.05;break}}h&&(a.shLx=-.55,a.shRx=-.55,a.shLz=-.05,a.shRz=.05,a.shLy=-.55,a.shRy=.55,a.elL=a.elR=-1.25);let d=!["ground","getup","tackled","tackling","dive"].includes(c);if(t.pendingPass&&d){let m=t.pendingPass.side,p=ai(1-t.pendingPass.t/t.pendingPass.dur);a.twist=-m*.55*p,a.chestX+=.1*p,a.headY=m*.5,a.shLz=Zt(a.shLz,-m*.35,p),a.shRz=Zt(a.shRz,-m*.35,p),a.shLx=Zt(a.shLx,-.35,p),a.shRx=Zt(a.shRx,-.35,p),u=30}else if(t.passAnim>0&&d){let m=1-et(t.passAnim/.35,0,1),p=m<.6?1:1-ai((m-.6)/.4),x=t.passSide;a.shLx=Zt(a.shLx,-1.3,p),a.shRx=Zt(a.shRx,-1.3,p),a.elL=Zt(a.elL,-.12,p),a.elR=Zt(a.elR,-.12,p),a.shLy=Zt(a.shLy,0,p),a.shRy=Zt(a.shRy,0,p),a.shLz=Zt(a.shLz,.12+x*.55,p),a.shRz=Zt(a.shRz,-.12+x*.55,p),a.twist=Zt(a.twist,x*.5,p),a.headY=x*.55*p,u=26}if(t.catchAnim>0&&!["ground","getup"].includes(c)){let m=Math.min(1,t.catchAnim/.15);a.shLx=Zt(a.shLx,t.catchHigh?-2.6:-1.2,m),a.shRx=Zt(a.shRx,t.catchHigh?-2.6:-1.2,m),a.elL=Zt(a.elL,-.5,m),a.elR=Zt(a.elR,-.5,m),a.shLz=.15,a.shRz=-.15,a.shLy=-.3,a.shRy=.3}if(t.refSignal>0&&(a.shRx=-2.7,a.elR=-.05,a.shRz=-.25),s&&!t.hasBall&&d&&c!=="kick"&&c!=="goalkick"){let m=yn(Math.atan2(s.x-t.p.x,s.z-t.p.z)-t.heading);a.headY=et(m,-1,1)*.8,a.twist+=et(m,-1,1)*.12}(this.lastSt==="ground"||this.lastSt==="getup"||this.lastSt==="tackled")&&d&&(this.blendL=7),this.blendL=si(this.blendL,u,3,e),this.lastSt=c,this.twoHand=si(this.twoHand,h,22,e);let f=this.j,g=Math.min(u,this.blendL);for(let m of Mc)f[m]=si(f[m],a[m],g,e);this.body.rotation.set(f.bodyX,0,f.bodyZ),this.body.position.y=bc+f.bodyY+(t.jumpY||0),this.spine.rotation.set(f.lean*.5,f.twist*.5,0),this.chest.rotation.set(f.lean*.5+f.chestX,f.twist*.5,0),this.head.rotation.set(f.headX-f.lean*.4-f.chestX*.5,f.headY,0),this.armL.sh.rotation.set(f.shLx,f.shLy,f.shLz),this.armR.sh.rotation.set(f.shRx,f.shRy,f.shRz),this.armL.el.rotation.x=f.elL,this.armR.el.rotation.x=f.elR,this.legL.hip.rotation.set(f.hipL,0,f.hipLz),this.legR.hip.rotation.set(f.hipR,0,f.hipRz),this.legL.knee.rotation.x=f.knL,this.legR.knee.rotation.x=f.knR;let y=et(-f.bodyY/.7,0,1);this.shadow.scale.set(1+y*.3,1+y*.9,1),this.shadow.position.z=Math.sin(f.bodyX)*.45}blend(t,e,i){for(let s of Mc)t[s]=Zt(t[s],e[s],i)}};function jy(){let n=document.createElement("canvas");n.width=128,n.height=64;let t=n.getContext("2d");t.fillStyle="#f6eec8",t.fillRect(0,0,128,64),t.fillStyle="#d4202c",t.fillRect(0,6,128,6),t.fillRect(0,52,128,6),t.fillStyle="#1d3d8f",t.fillRect(0,13,128,3),t.fillRect(0,48,128,3),t.strokeStyle="rgba(60,40,20,0.55)",t.lineWidth=1.5;for(let i=0;i<4;i++)t.beginPath(),t.moveTo(i*32+1,0),t.lineTo(i*32+1,64),t.stroke();t.fillStyle="#222",t.font="bold 10px Arial",t.fillText("FOOTY 13",40,36);let e=new gn(n);return e.colorSpace=Re,e}var Fr=class{constructor(t){let e=new bs(1,14,10);e.scale(.125,.19,.125),e.rotateX(Math.PI/2),this.mesh=new Et(e,new fe({map:jy()})),t.add(this.mesh);let i=new Et(new xs(.2,12),new we({color:0,transparent:!0,opacity:.35,depthWrite:!1}));i.rotation.x=-Math.PI/2,t.add(i),this.shadow=i,this.p=new z(0,ni.radius,0),this.v=new z,this.state="dead",this.carrier=null,this.kind="loose",this.info=null,this.curve=0,this.drag=1,this.spin="endover",this.spinAngle=0,this.spinRate=0,this.grubber=!1,this.ignore=new Map,this.airTime=0,this.bounces=0,this.lastTouch=null,this.landedThisTick=!1,this.hitPostThisTick=!1,this.tmpQ=new ei,this.tmpQ2=new ei,this.axisZ=new z(0,0,1),this.axisX=new z(1,0,0),this.lookDir=new z(1,0,0)}give(t){this.state="held",this.carrier=t,this.kind="loose",this.info=null,this.v.set(0,0,0),this.curve=0,this.grubber=!1,this.lastTouch=t,this.bounces=0}release(t,e){this.carrier=null,this.state="air",this.kind=t,this.info=e,this.airTime=0,this.bounces=0}setIgnore(t,e){this.ignore.set(t,e)}canTouch(t,e){let i=this.ignore.get(t);return i===void 0||e>=i}step(t,e){if(this.landedThisTick=!1,this.hitPostThisTick=!1,this.state==="held"||this.state==="dead")return;if(this.airTime+=t,this.state==="air"){if(Rs(this,t,e),uc(this.p,this.v)&&(this.hitPostThisTick=!0),this.p.y<=ni.radius){this.p.y=ni.radius,this.landedThisTick=!0;let s=Math.hypot(this.v.x,this.v.z);this.v.y<-1.4||this.grubber&&s>2.5?this._bounce(s):(this.v.y=0,this.state="ground")}}else if(this.state==="ground"){let s=Math.hypot(this.v.x,this.v.z);if(s<.12)this.v.set(0,0,0);else{let a=Math.min(s,3.4*t);this.v.x-=this.v.x/s*a,this.v.z-=this.v.z/s*a;let r=Le()*.04,o=Math.cos(r),c=Math.sin(r),l=this.v.x,h=this.v.z;this.v.x=l*o-h*c,this.v.z=l*c+h*o,this.p.x+=this.v.x*t,this.p.z+=this.v.z*t}this.p.y=ni.radius,uc(this.p,this.v)&&(this.hitPostThisTick=!0)}let i=this.v.length();this.state==="air"?this.spinAngle+=t*(this.spin==="spiral"?14:this.spin==="grubber"?i*2.2:9):this.spinAngle+=t*i*3}_bounce(t){this.bounces++;let e=yt(.32,.62),i=yt(.68,.86),s=Le()*.32;if(this.grubber){e=yt(.2,.95),i=yt(.78,.93),s=Le()*.22;let l=yt(.4,3.6)*Math.min(1,t/12);this.v.y=Math.max(-this.v.y*e,l),t<3&&(this.grubber=!1)}else Gt()<.18?(e*=1.5,i*=.6):Gt()<.2&&(e*=.5,i=Math.min(.95,i*1.15)),this.v.y=-this.v.y*e;let a=Math.cos(s),r=Math.sin(s),o=this.v.x*i,c=this.v.z*i;this.v.x=o*a-c*r,this.v.z=o*r+c*a,this.curve*=.3,this.v.y<1&&!this.grubber&&(this.v.y=0,this.state="ground")}syncMesh(t,e){let i=this.mesh;if(this.state==="held"&&t)this.p.copy(t),i.position.copy(t),i.rotation.set(.35,e,0,"YXZ");else{i.position.copy(this.p);let a=Math.hypot(this.v.x,this.v.z);a>.3&&this.lookDir.set(this.v.x,this.state==="air"?this.v.y*.6:0,this.v.z).normalize(),this.tmpQ.setFromUnitVectors(this.axisZ,this.lookDir),this.spin==="spiral"&&this.state==="air"?this.tmpQ2.setFromAxisAngle(this.axisZ,this.spinAngle):this.tmpQ2.setFromAxisAngle(this.axisX,this.spinAngle),this.state==="ground"&&a<.12&&this.tmpQ2.setFromAxisAngle(this.axisX,Math.PI/2*0),i.quaternion.copy(this.tmpQ).multiply(this.tmpQ2),this.state==="dead"&&this.p.y<=ni.radius+.01&&i.rotation.set(0,i.rotation.y,0)}this.shadow.position.set(this.p.x,.02,this.p.z);let s=Math.max(0,this.p.y);this.shadow.scale.setScalar(1+s*.08),this.shadow.material.opacity=Math.max(.08,.35-s*.02)}};var Or=Pt.half,tx=Pt.halfW,lf={normal:2,low:1.9,grip:1.8,hit:1.8,dive:3.4,auto:1},ex={normal:.22,low:.22,grip:.24,hit:.26,dive:.42,auto:.12},aa=.64,ix={normal:.85,low:.85,grip:.8,hit:.8,dive:1,auto:.95};function On(n,t,e,i={}){let s=n.ball,a=s.carrier;if(n.phase!=="play"||n.dhHold||!a||s.state!=="held"||a.team===t.team||t.state!=="free"||t.cd.tackle>0||t.lunge||a.state==="ground"||a.state==="getup")return!1;let r=qt(t.p.x,t.p.z,a.p.x,a.p.z);return t.offside?(t.controlled&&r<lf[e]+.5&&n.awardPenalty(a.team,a.p.x,a.p.z,"Offside"),!1):r>lf[e]?(i.human&&r<5&&cf(n,t,e,a,!0),!1):(cf(n,t,e,a,!1),!0)}function cf(n,t,e,i,s){let a=ex[e],r=i.p.x+i.v.x*a*.85,o=i.p.z+i.v.z*a*.85,c=r-t.p.x,l=o-t.p.z,h=Math.hypot(c,l)||1,u=et(Math.max(h/a,t.speedH+1.5,e==="dive"?7.5:5.5),3.5,e==="dive"?10.8:9.4);t.lunge={kind:e,t:0,dur:s?a*.8:a,target:i,whiff:s},t.setState(e==="dive"?"dive":"lunge"),t.v.x=c/h*u,t.v.z=l/h*u,t.heading=Tt(c,l),t.cd.tackle=.7}function nx(n,t,e){let i=t.lunge;i.t+=e;let s=n.ball.carrier,a=i.target,r=s===a&&!i.whiff&&n.ball.state==="held"&&a.state!=="ground";if(r){let o=i.kind==="dive"?i.t<.1?6:0:8;if(o>0){let c=s.p.x-t.p.x,l=s.p.z-t.p.z,h=Math.hypot(c,l)||1,u=Math.hypot(t.v.x,t.v.z),d=1-Math.exp(-o*e);t.v.x+=(c/h*u-t.v.x)*d,t.v.z+=(l/h*u-t.v.z)*d}}if(t.p.x+=t.v.x*e,t.p.z+=t.v.z*e,t.speedH=Math.hypot(t.v.x,t.v.z),r&&qt(t.p.x,t.p.z,s.p.x,s.p.z)<ix[i.kind]){t.lunge=null,uf(n,t,s,i.kind);return}if(i.t>=i.dur){t.lunge=null;let o=a&&qt(t.p.x,t.p.z,a.p.x,a.p.z)<3.5&&!i.whiff;i.kind==="dive"?t.knockDown(1):t.setState("stumble",i.kind==="hit"?.6:.42),o&&(t.stats.missed++,t.team.stats.missed++,n.emit("missed",{team:t.team,player:t}))}}function Br(n,t,e,i,s=0){s>0?t.knockDown(s,i!=="step"):t.setState("stumble",.55),t.stats.missed++,t.team.stats.missed++,e.team.stats.busts++,n.emit("beaten",{team:e.team,player:e,how:i,defender:t})}function uf(n,t,e,i){if(e.engage)return ff(n,e.engage,t);let s=e.speedH,a=t.speedH,r=s>1?e.v.x/s:e.fwd.x,o=s>1?e.v.z/s:e.fwd.z,c=t.p.x-e.p.x,l=t.p.z-e.p.z,h=Math.hypot(c,l)||1;c/=h,l/=h;let u=r*c+o*l,d=e.right,f=d.x*c+d.z*l,g=Math.max(0,-((t.v.x-e.v.x)*c+(t.v.z-e.v.z)*l)),y=t.team.human?t.controlled?n.diff.humanTackle:.02:n.diff.cpuTackle;if(e.stepWindow()){let R=.56+(e.attr.agility-t.attr.tackle)/140+(u>.3?.12:-.25)+(i==="dive"?.1:0)+(i==="hit"?.08:0)-y;if(Math.sign(f)===e.anim.side&&Math.abs(f)>.3&&(R-=.35),Bt(et(R,.05,.95))){Br(n,t,e,"step",i==="dive"?1:0);return}}if(e.fendWindow()&&u>-.4){let R=-e.carrySide,E=.38+(e.attr.strength-t.attr.strength)/110+(e.attr.strength-t.attr.tackle)/220+(i==="dive"?.18:0)-(i==="hit"?.12:0)-y;if(E+=(R>0?f>-.2:f<.2)?.1:-.15,e.fendHold>.2&&(E+=.1),E+=(e.stamina-t.stamina)*.12,Bt(et(E,.05,.92))){t.v.x=c*3.5,t.v.z=l*3.5,e.speedMul*=.9,Br(n,t,e,"fend",.9),n.audio.thud(.5);return}}let m=null;if(e.bumpWindow()&&u>0){let R=e.mass*Math.max(2,s)*1.3,E=t.mass*Math.max(2,a)*(i==="hit"?1.3:1),A=.26+(R-E)/(R+E)*1.1+(e.attr.strength-t.attr.tackle)/240-y;if(Bt(et(A,.05,.9))){t.v.x=c*4,t.v.z=l*4,e.speedMul*=.72,e.v.x*=.8,e.v.z*=.8,Br(n,t,e,"bump",1.1),n.audio.thud(1),n.camRig.shake(.25);return}m=.55}let x={normal:.9,low:.93,grip:.85,hit:.72,dive:.78,auto:.8}[i]+(t.attr.tackle-72)/180-(e.attr.agility-70)/450-Math.max(0,s-6)*.018+(u<-.3?-.06:0)+y;if(x-=Math.max(0,e.attr.strength-t.attr.strength)/500,x-=(1-t.stamina)*.16,x+=(1-e.stamina)*.06,e.isForward&&t.mass<85&&e.mass>100&&(x-=.06),m===null&&!Bt(et(x,.1,.97))){let R=e.attr.strength>t.attr.strength+yt(-15,25)?.7:0;e.speedMul*=.82,Br(n,t,e,"broken",R),n.audio.thud(.6);return}let _=m??(t.attr.strength*.45+t.attr.tackle*.45+(i==="hit"?28:i==="grip"?14:i==="low"?-8:0)+g*3.5-e.attr.strength*.75-s*2.2)/50;_=et(_+Le()*.15,-1,1);let b=sx(n,e,t,_,i);if(t.stamina=Math.max(0,t.stamina-.05),e.stamina=Math.max(0,e.stamina-.04),i==="grip"&&(b.noOffload=!0,b.gripBy=t),(i==="hit"||i==="grip")&&_>.25&&(n.emit("bighit",{team:t.team,player:t}),n.camRig.shake(.35),Bt((i==="grip"?.07:.1)+_*.14-(e.attr.hand-70)/400))){Qi(n,b,!1),dc(n,e,"hit");return}(i==="grip"||i==="hit")&&Bt(t.controlled?.06:.015)&&(b.penalty="High tackle")}function sx(n,t,e,i,s){let a={carrier:t,tacklers:[e],progress:0,dom:i,t:0,legDrive:0,kind:s,inGoalChecked:!1,heldUp:!1,offloadTried:!1,breakTried:!1};n.engagements.push(a),t.setState("tackled"),t.engage=a,t.anim.fall=0,t.lunge=null,e.setState("tackling"),e.engage=a,e.anim.fall=0;let r=e.p.x-t.p.x,o=e.p.z-t.p.z,c=Math.hypot(r,o)||1;e.engageOff={x:r/c*aa,z:o/c*aa};let l=Tt(r,o),h=yn(l-t.heading);Math.abs(h)<Math.PI/2?(a.faceUp=i>.15,a.fallHeading=a.faceUp?l:l+(h>=0?-1.3:1.3)):(a.faceUp=!1,a.fallHeading=l+Math.PI);let u=i>.4?.2:.55;return t.v.x*=u,t.v.z*=u,n.audio.thud(.6+Math.max(0,i)*.7),i>.5&&n.camRig.shake(.2),n.emit("contact",{team:e.team,player:e,dom:i}),!t.controlled&&Bt(.25*(n.diff.cpuEvade||1))&&ra(n,t),a}function ff(n,t,e){if(t.tacklers.includes(e)||t.tacklers.length>=3)return;t.tacklers.push(e),e.setState("tackling"),e.engage=t,e.lunge=null,e.anim.fall=0;let i=Math.atan2(e.p.z-t.carrier.p.z,e.p.x-t.carrier.p.x);for(let s=0;s<4&&t.tacklers.some(r=>r!==e&&r.engageOff&&Math.abs(yn(Math.atan2(r.engageOff.z,r.engageOff.x)-i))<1.2);s++)i+=1.3;e.engageOff={x:Math.cos(i)*aa,z:Math.sin(i)*aa},t.dom=et(t.dom+.14,-1,1),t.progress+=.08,n.audio.thud(.4)}function df(n,t){let e=t.engage;if(!e||e.stripTried||n.ball.carrier!==e.carrier||e.progress>.9)return!1;e.stripTried=!0;let i=e.carrier;if(e.tacklers.length>1)return e.penalty="Two-man strip",!1;let s=.24+(t.attr.strength-i.attr.hand)/260+Math.max(0,e.dom)*.15;return Bt(et(s,.05,.55))?(Qi(n,e,!1),i.knockDown(.7),n.ball.give(t),t.setState("free"),n.poss=t.team,n.tackleCount=0,n.gainLineX=t.p.x,n.lineBreakDone=!1,n.message("STRIPPED!",`${t.name} rips it free`,1.6,"good"),n.audio.roar(.9),n.emit("strip",{team:t.team,player:t}),t.team.human&&n.setControlled(t),!0):(e.progress+=.05,Bt(.2)&&(e.penalty="Strip (ball not held by one)"),!1)}function ra(n,t){let e=t.engage;if(!e||e.breakTried||e.progress>.5)return!1;if(e.breakTried=!0,e.tacklers.length>1)return e.progress+=.05,!1;let i=e.tacklers[0],s=.16+(t.attr.strength-i.attr.strength)/140+(t.attr.agility-70)/300-Math.max(0,e.dom)*.4;return Bt(et(s,.03,.6))?(Qi(n,e,!1),t.setState("free"),t.speedMul=.6,i.knockDown(.8),i.stats.missed++,i.team.stats.missed++,t.team.stats.busts++,n.emit("beaten",{team:t.team,player:t,how:"broken",defender:i}),!0):(e.progress+=.1,!1)}function Qi(n,t,e){let i=n.engagements.indexOf(t);i>=0&&n.engagements.splice(i,1),t.carrier.engage=null,t.tacklers.forEach((s,a)=>{s.engage=null,e?s.knockDown(.45+Gt()*.6+a*.3,!1,{fall:Math.max(.35,s.anim.fall||0),pile:.16}):s.state==="tackling"&&s.setState("stumble",.4)})}function ax(n,t,e){let i=t.carrier,s=i.team,a=t.tacklers.length,r=n.ball.carrier===i&&n.ball.state==="held";t.t+=e,t.legDrive*=Math.exp(-2.5*e);let o=.85+.6*(a-1)+t.dom*.35-t.legDrive*.25;i.controlled||(o-=(i.attr.strength-75)/300),t.progress+=Math.max(.35,o)*e;let c=t.tacklers.reduce((f,g)=>f+g.attr.strength,0)/a,l=2.4+(i.attr.strength-c)/28-(a-1)*1.3+t.legDrive*1.6-t.dom*2.5;!i.controlled&&r&&(l+=yt(0,.6)),l=et(l,-2.2,3.6)*(1-Math.min(1,t.progress)*.7),i.v.x=si(i.v.x,s.dir*l,4,e),i.v.z=si(i.v.z,0,3,e),i.p.x+=i.v.x*e,i.p.z+=i.v.z*e,i.legDriveVis=et(.3+t.legDrive*.6+Math.max(0,l)/4,0,1),i.speedH=Math.hypot(i.v.x,i.v.z),i.anim.fall=Math.min(1,t.progress),i.anim.faceUp=t.faceUp,i.heading=As(i.heading,t.fallHeading,5,e);let h=et((t.progress-.3)/.7,0,1),u=aa+h*.3;for(let f of t.tacklers){let g=Math.hypot(f.engageOff.x,f.engageOff.z)||1,y=i.p.x+f.engageOff.x/g*u,m=i.p.z+f.engageOff.z/g*u;f.p.x=si(f.p.x,y,14,e),f.p.z=si(f.p.z,m,14,e),f.v.copy(i.v),f.heading=As(f.heading,Tt(i.p.x-f.p.x,i.p.z-f.p.z),12,e),f.anim.fall=h}if(t.gripBy&&t.gripBy.controlled&&n.input.held("faceB")&&(t.holdDown=(t.holdDown||0)+e),r&&a<3&&t.progress<.8){for(let f of s.opp.players)if(!(f.controlled||f.state!=="free"||f.offside||f.engage)&&qt(f.p.x,f.p.z,i.p.x,i.p.z)<2&&Bt(e*4)){ff(n,t,f);break}}if(!r){t.progress>=1&&(Qi(n,t,!0),i.knockDown(1,!!t.faceUp,{fall:1}));return}let d=i.p.x*s.dir;if(Math.abs(i.p.z)>tx)return Qi(n,t,!0),n.scrumRestart(s.opp,i.p.x,i.p.z,"INTO TOUCH",`Bundled out \u2014 scrum ${s.opp.short} feed`);if(d>Or&&!t.inGoalChecked&&(t.inGoalChecked=!0,t.heldUp=Bt(.1+.13*a+(t.dom>.3?.15:0)),!t.heldUp))return Qi(n,t,!0),i.setState("free"),n.scoreTry(i,i.p.z);if(t.progress>=1){if(d>Or&&t.heldUp)return Qi(n,t,!0),i.knockDown(1),n.whistleStop("HELD UP!",`Goal-line drop-out ${s.opp.short}`,{type:"dropout",team:s.opp},{style:"warn"});if(d>Or-1.2&&Bt(.55-.2*(a-1)))return Qi(n,t,!0),i.setState("free"),i.p.x=s.dir*(Or+.3),n.message("REACHES OUT!","",1,"good"),n.scoreTry(i,i.p.z);rx(n,t)}}function rx(n,t){let e=t.carrier;(t.holdDown||0)>.7&&(t.dom=Math.min(1,t.dom+.6),!t.penalty&&Bt(.32)&&(t.penalty="Holding down")),Qi(n,t,!0),e.knockDown(99,!!t.faceUp,{fall:1});let i=t.tacklers[0];i.stats.tackles++,i.team.stats.tackles++;for(let s=1;s<t.tacklers.length;s++)t.tacklers[s].stats.tackles++;n.emit("tackle",{team:i.team,player:i,carrier:e,n:t.tacklers.length,dom:t.dom}),n.onTackleComplete(t)}function pf(n,t){for(let e of n.players)e.lunge&&nx(n,e,t);for(let e of[...n.engagements])n.engagements.includes(e)&&ax(n,e,t)}var Hr=new Set(["ground","scrum","tackled","tackling","ptb","goalkick"]),hf=.36;function ox(n,t){let e=t.p.x,i=t.p.z,s=hf;if(t.state==="ground"||t.state==="getup"){let d=Math.sin(t.heading),f=Math.cos(t.heading),g=et((n.p.x-t.p.x)*d+(n.p.z-t.p.z)*f,-.75,.85);e+=d*g,i+=f*g,s=.3}let a=n.p.x-e,r=n.p.z-i,o=s+hf;if(Math.abs(a)>o||Math.abs(r)>o)return;let c=Math.hypot(a,r);if(c>=o)return;let l=c>1e-4?a/c:1,h=c>1e-4?r/c:0;n.p.x+=l*(o-c),n.p.z+=h*(o-c);let u=n.v.x*l+n.v.z*h;u<0&&(n.v.x-=l*u,n.v.z-=h*u)}function mf(n){let t=n.players,e=t.length,i=n.ball.state==="held"?n.ball.carrier:null;if(n.phase==="play"||n.phase==="ptb"){for(let a of t)if(!(!Hr.has(a.state)||a.state==="goalkick"))for(let r of t)r===a||Hr.has(r.state)||r.lunge||Math.abs(r.p.x-a.p.x)>2||Math.abs(r.p.z-a.p.z)>2||ox(r,a)}for(let a=0;a<e;a++){let r=t[a];if(!Hr.has(r.state))for(let o=a+1;o<e;o++){let c=t[o];if(Hr.has(c.state))continue;let l=c.p.x-r.p.x,h=c.p.z-r.p.z;if(Math.abs(l)>.8||Math.abs(h)>.8)continue;let u=Math.hypot(l,h),d=.72;if(u>=d||u<1e-4)continue;let f=l/u,g=h/u,y=d-u,m=c.mass/(r.mass+c.mass),p=1-m;r.p.x-=f*y*m,r.p.z-=g*y*m,c.p.x+=f*y*p,c.p.z+=g*y*p;let x=(c.v.x-r.v.x)*f+(c.v.z-r.v.z)*g;if(x<0&&(r.v.x+=f*x*m*.8,r.v.z+=g*x*m*.8,c.v.x-=f*x*p*.8,c.v.z-=g*x*p*.8),i&&n.phase==="play"&&!n.dhHold&&(r===i||c===i)){let _=r===i?c:r;_.team!==i.team&&_.state==="free"&&!_.offside&&_.cd.tackle<=0&&!_.lunge&&i.state!=="tackled"&&(_.cd.tackle=.7,uf(n,_,i,"auto"))}}}}var ri=Pt.half,oi=Pt.halfW;function Qt(n,t,e,i={}){let s=t-n.p.x,a=e-n.p.z,r=Math.hypot(s,a);if(r<(i.stop??.4))return n.wish.x=n.wish.z=0,n.wantSprint=!1,r;let o=Math.min(1,r/(i.arrive??2.5))*(i.speed??1);return n.wish.x=s/r*o,n.wish.z=a/r*o,n.wantSprint=!!i.sprint&&r>(i.sprintDist??3),r}var Tc=(n,t,e)=>{n.faceTarget=Tt(t-n.p.x,e-n.p.z)},Li=(n,t)=>{n.faceTarget=Tt(t,0)},Bn=n=>Fn.has(n.state);function vf(n,t){for(let e of n.players)e.readyStance=!1,e.speedCap=1;n.phase==="play"?ux(n,t):n.phase==="ptb"?cx(n,t):lx(n,t)}function lx(n,t){let e=n.phase,i=n.ball;for(let s of n.players)if(Bn(s)){if(s.controlled&&e!=="tryCelebration"&&e!=="whistle"&&e!=="transition"&&e!=="penaltyChoice"){s.wish.x=s.wish.z=0,s.ai.hold&&Qt(s,s.ai.hold.x,s.ai.hold.z,{speed:.5}),Tc(s,i.p.x,i.p.z);continue}if(Tc(s,i.p.x,i.p.z),e==="tryCelebration"){let a=n.pd,r=a.scorer;if(s.team===a.team){if(s===r)continue;Qt(s,r.p.x-s.team.dir*1.5,r.p.z+(s.num%3-1)*1.2,{sprint:!0,stop:1.6})<2.2&&n.phaseT>.6&&s.setState("celebrate")}else Qt(s,s.team.dir*-ri-s.team.dir*1.5,et(s.p.z*.3,-12,12),{speed:.45,stop:1})}else if(e==="whistle"||e==="transition"||e==="halftime"||e==="fulltime")s.wish.x=s.wish.z=0,s.wantSprint=!1;else if(e==="penaltyChoice"){let a=n.pd.team;s.team!==a&&s.p.x*s.team.dir>n.onsideAx-.5?Qt(s,(n.onsideAx-2)*s.team.dir,s.p.z,{speed:.8}):s.wish.x=s.wish.z=0}else s.ai.hold?Qt(s,s.ai.hold.x,s.ai.hold.z,{speed:.6,stop:.3}):s.wish.x=s.wish.z=0}}function cx(n){let t=n.pd,e=t.team,i=e.opp,s=t.mark,a=e.dir,r=t.plan;for(let u of e.players){if(u===t.ptbPlayer||!Bn(u))continue;if(u===t.dummy){let g=Qt(u,s.x-a*1.3,s.z,{sprint:!0,arrive:1.2,stop:.2});Li(u,a),g<.8&&(u.readyStance=!0);continue}if(u.controlled)continue;let d=ks(n,e,u,s.x,s.z);if(r&&r.target===u){if(r.kind==="hitup"){let g=(u.p.z-s.z)*a>=0?1:-1;d={x:s.x-a*6,z:s.z+g*a*3.5}}(r.kind==="kick"||r.kind==="shift")&&(d={x:s.x-a*6,z:d.z})}let f=Qt(u,d.x,d.z,{sprint:qt(u.p.x,u.p.z,d.x,d.z)>7});Li(u,a),f<.6&&(u.readyStance=!0)}let o=t.onsideAx,c=o*i.dir,l=n.tackleCount>=4,h=[];for(let u of i.players)if(!(!Bn(u)||u.controlled)){if(u.ai.marker){let d=t.markers.indexOf(u);Qt(u,s.x+a*1.1,s.z+(d===0?0:.6),{sprint:!0,stop:.2}),Li(u,-a),u.readyStance=!0;continue}if(u.num===1){let d=Math.max(-ri-3,o-(l?26:16));Qt(u,d*i.dir,s.z*.4,{sprint:!0}),Li(u,-a);continue}if(l&&(u.num===2||u.num===5)){let d=Math.max(-ri-2,o-20);Qt(u,d*i.dir,(u.p.z>0?1:-1)*22,{sprint:!0}),Li(u,-a);continue}h.push(u)}Ec(n,i,h,e.players.filter(u=>u!==t.ptbPlayer),()=>c,s.z,!1)}function hx(n,t,e){let i=n.dhHold,s=i.mark,a=t.opp.dir,r=i.onsideAx,o=n.tackleCount>=4,c=[];for(let l of t.players)if(!(!Bn(l)||l.controlled)){if(i.markers.includes(l)){let h=i.markers.indexOf(l);Qt(l,s.x+a*1.1,s.z+(h===0?0:.6),{speed:.6,stop:.25}),Li(l,-a),l.readyStance=!0;continue}if(l.offside){Qt(l,(r-1.5)*t.dir,l.p.z,{sprint:!0});continue}if(l.num===1){let h=Math.max(-ri-3,r-(o?26:16));Qt(l,h*t.dir,s.z*.4,{}),Li(l,-a);continue}if(o&&(l.num===2||l.num===5)){let h=Math.max(-ri-2,r-20);Qt(l,h*t.dir,(l.p.z>0?1:-1)*22,{}),Li(l,-a);continue}c.push(l)}Ec(n,t,c,t.opp.players.filter(l=>l!==e),()=>r*t.dir,e.p.z,!1)}function Ec(n,t,e,i,s,a,r,o={}){if(!e.length)return;let l=i.filter(f=>f.isUpright()||f.state==="getup").map(f=>({a:f,imp:Math.abs(f.p.z-a)})).sort((f,g)=>f.imp-g.imp).slice(0,e.length).map(f=>f.a).map(f=>({z:f.p.z+(a-f.p.z)*.12,a:f}));for(;l.length<e.length;)l.push({z:a+(l.length%2?1:-1)*(6+l.length*3),a:null});l.sort((f,g)=>f.z-g.z);for(let f=1;f<l.length;f++)l[f].z-l[f-1].z<2.4&&(l[f].z=l[f-1].z+2.4);let h=l[l.length-1].z-(oi-1.5);if(h>0)for(let f of l)f.z-=h;for(let f=0;f<l.length;f++)l[f].z<-oi+1.5&&(l[f].z=-oi+1.5+f*2.4);let u=[...e].sort((f,g)=>f.p.z-g.p.z),d=t.opp.dir;for(let f=0;f<u.length;f++){let g=u[f],y=l[f],m=s(y.a),p=Qt(g,m,y.z,{speed:r?o.lineSpeed??.95:1,sprint:qt(g.p.x,g.p.z,m,y.z)>(r?6:4),arrive:2});g.faceTarget=Tt(-d,0),p<1.2&&(g.readyStance=!0)}}function ux(n,t){let e=n.ball;if(e.state==="held"&&e.carrier){let i=e.carrier;gf(n,i.team,i,null,t),n.dhHold?hx(n,i.team.opp,i):xf(n,i.team.opp,i,!1,t)}else if(e.kind==="pass"&&e.state==="air"&&e.info){let i=e.info;gf(n,i.team,null,i.target,t),xf(n,i.team.opp,i.target,!0,t)}else mx(n,t)}function gf(n,t,e,i,s){let a=t.dir,r=n.ball,o=e?e.p.x:r.p.x,c=e?e.p.z:r.p.z,l=n.lineBreakDone;for(let h of t.players){if(h.controlled)continue;if(h===e){fx(n,h,s);continue}if(!Bn(h))continue;if(h===i){let f=n.kickTarget||r.p;Qt(h,f.x+a*.6,f.z,{sprint:!0,arrive:.6,stop:0});continue}let u=ks(n,t,h,o,c),d=!1;if(e){let f=qt(h.p.x,h.p.z,e.p.x,e.p.z),g=(h.p.z-e.p.z)*a>=0?1:-1;l&&f<35?(u={x:e.p.x-a*3.5,z:e.p.z+g*a*(4+h.num%3*3.5)},d=!0):e.ai.plan&&e.ai.plan.target===h&&e.ai.dummyHalf&&n.time-(n.playStartT||0)<1.4?(u={x:e.p.x-a*.9,z:e.p.z+g*a*3.2},d=!0):f<15&&(u.x=e.p.x-a*Math.max(2.2,Math.abs(u.x-o)*.55),d=!0)}(u.x-o)*a>-.8&&(u.x=o-a*.8),u.z=et(u.z,-oi+1.5,oi-1.5),Qt(h,u.x,u.z,{sprint:d||qt(h.p.x,h.p.z,u.x,u.z)>6}),h.speedH<.5&&Li(h,a)}}function yf(n,t,e,i){let s=i.dir,a=25;for(let r of i.opp.players){if(!r.isUpright()&&r.state!=="getup")continue;let o=(r.p.x-t)*s,c=Math.abs(r.p.z-e);if(o<-1||c>3.5+Math.max(0,o)*.35)continue;let l=Math.max(0,o)+c*.6;l<a&&(a=l)}return Math.abs(e)>oi-3&&(a-=4),a}function fx(n,t,e){let i=t.team,s=i.dir,a=t.ai,r=i.opp;if(a.passCd=Math.max(0,(a.passCd||0)-e),t.state==="tackled"){let u=t.engage,d=u&&t.team.players.some(f=>f!==t&&f.isUpright()&&qt(f.p.x,f.p.z,t.p.x,t.p.z)<5&&(t.p.x-f.p.x)*t.team.dir>-1);u&&d&&!u.noOffload&&u.tacklers.length===1&&!u.offloadTried&&u.progress<.45&&Bt(e*.35*(t.attr.hand>82?1.6:1))&&ea(n,t,0),u&&!u.breakTried&&u.progress<.3&&t.isForward&&Bt(e*.8)&&ra(n,t);return}if(!t.canAct()||t.pendingPass)return;let o=t.p.x*s;if(o>ri){Qt(t,s*(ri+3),0,{sprint:!0});return}o<-ri&&t.ai.inGoalCatch&&Qt(t,-s*(ri-2),t.p.z,{sprint:!0});let c=null,l=99;for(let u of r.players){if(!u.isUpright())continue;let d=qt(u.p.x,u.p.z,t.p.x,t.p.z);d<l&&(l=d,c=u)}if(a.dummyHalf&&a.plan){if(a.passDelay-=e,a.passDelay>0){t.wish.x=t.wish.z=0,Li(t,s);return}let u=a.plan;if(a.dummyHalf=!1,a.plan=null,u.kind!=="run"){let d=u.target&&u.target!==t&&u.target.isUpright()?u.target:null;if(d&&((t.p.x-d.p.x)*s<-2||qt(d.p.x,d.p.z,t.p.x,t.p.z)>24)&&(d=null),d||(d=fc(n,t,t.p.z*s>0?-1:1,!1)||fc(n,t,t.p.z*s>0?1:-1,!1)),d){Nn(n,t,d,{long:qt(d.p.x,d.p.z,t.p.x,t.p.z)>12}),u.kind==="kick"&&(d.ai.plan={kind:"kick"},d.ai.kickDelay=yt(.35,1)),u.kind==="shift"&&(d.ai.shift=Bt(.6)?.9:0);return}}}let h=[7,6,1];if(a.plan&&a.plan.kind==="kick"||n.tackleCount===5&&h.includes(t.num)){if(a.kickDelay=(a.kickDelay??yt(.3,.9))-e,a.kickDelay<=0||l<4.5){a.plan=null,a.kickDelay=null,Gu(n,t);return}}else if(n.tackleCount===5&&a.passCd<=0){let u=[i.get(7),i.get(6),i.get(1)].find(d=>d!==t&&d.isUpright()&&(t.p.x-d.p.x)*s>-1.5&&qt(d.p.x,d.p.z,t.p.x,t.p.z)<20);if(u&&l>1.5){Nn(n,t,u,{}),u.ai.plan={kind:"kick"},u.ai.kickDelay=yt(.3,.8);return}}if(c&&l<3.3){let u=(c.p.x-t.p.x)/l,d=(c.p.z-t.p.z)/l,f=t.fwd,g=t.right;if(f.x*u+f.z*d>.15&&a.evadeFor!==c){a.evadeFor=c;let y=i.human?1:n.diff.cpuEvade,m=g.x*u+g.z*d>0?1:-1,p=Gt();t.attr.agility>=76&&p<.26*y?t.doStep(-m):t.isForward&&t.attr.strength>80&&p<.36*y?t.doBump():p<.4*y&&t.doFend(m)}}a.think=(a.think||0)-e,!(a.think<=0&&(a.think=.1,a.shift&&(a.shift-=.1),a.passCd<=0&&dx(n,t,l)))&&px(n,t,e,l)}function dx(n,t,e){let i=t.team,s=t.ai,a=[7,6,1,9].includes(t.num),r=a?.75:t.num===2||t.num===5||t.isForward?.2:.45,o=s.shift>0;if(e>4&&!o)return!1;let c=yf(n,t.p.x,t.p.z,i)+(t.isForward&&n.tackleCount<4?2:0),l=null,h=-1e9;for(let d of[-1,1])for(let f of Pi(n,t,d).slice(0,2)){let g=f.q;if(f.behind>7)continue;let y=yf(n,g.p.x+g.v.x*.5,g.p.z+g.v.z*.5,i)-f.behind*.6-f.lat*.04+(g.num===2||g.num===5?1:0);y>h&&(h=y,l=f)}if(!l)return!1;if(h>c+(o?1:3)&&Bt(r*(e<2.8?.8:.4)+(o?.3:0))){let d=Pi(n,t,Math.sign((l.q.p.z-t.p.z)*i.dir)||1).indexOf(l);return Nn(n,t,l.q,{long:l.lat>11||d>0}),a&&Bt(.2)&&(l.q.ai.shift=.5),s.shift=0,!0}return!1}function px(n,t,e,i){let s=t.team,a=s.dir,r=s.opp,o=t.ai;if(o.lineT=(o.lineT||0)-e,o.lineT<=0){o.lineT=.15;let l=Tt(a,0),h=Math.max(5,t.topSpeed*.9),u=t.isForward&&n.tackleCount<4,d=-1e9,f=0;for(let g=-55;g<=55;g+=11){let y=l+g*Math.PI/180,m=Math.sin(y),p=Math.cos(y),x=m*a*(u?14:10)-Math.abs(Math.sin(g*Math.PI/180))*3;for(let _ of[.4,.8,1.2]){let b=t.p.x+m*h*_,R=t.p.z+p*h*_;Math.abs(R)>oi-3&&(x-=25*_);for(let E of r.players){if(!E.isUpright())continue;let A=qt(E.p.x,E.p.z,b,R)-Math.min(E.topSpeed,8.5)*_*.8-.9;A<0&&(x+=A*(u?.8:1.6)/_)}}x-=Math.abs(g-(o.runA||0))*.02,x>d&&(d=x,f=g)}o.runA=f}let c=Tt(a,0)+(o.runA||0)*Math.PI/180;t.wish.x=Math.sin(c),t.wish.z=Math.cos(c),t.wantSprint=t.stamina>.15||i<8}function wc(n,t){let e=t.p.x-n.p.x,i=t.p.z-n.p.z,s=t.v.x,a=t.v.z,r=Math.max(5,n.topSpeed*.97),o=s*s+a*a-r*r,c=2*(e*s+i*a),l=e*e+i*i,h=null;if(Math.abs(o)<1e-6)c<0&&(h=-l/c);else{let u=c*c-4*o*l;if(u>=0){let d=Math.sqrt(u),f=(-c-d)/(2*o),g=(-c+d)/(2*o);h=[f,g].filter(y=>y>0).sort((y,m)=>y-m)[0]??null}}return h===null||h>4?{t:Math.hypot(e,i)/r+4,x:t.p.x+s*.9,z:t.p.z+a*.9}:{t:h,x:t.p.x+s*h,z:et(t.p.z+a*h,-oi+.5,oi-.5)}}function xf(n,t,e,i,s){if(!e)return;let a=t.opp,r=a.dir,o=n.lineBreakDone,c=t.human?.17:n.diff.cpuReact,l=t.players.filter(x=>!x.controlled&&Bn(x)&&!x.engage&&x.state!=="kick"),h=l.filter(x=>!x.offside).map(x=>{let _=wc(x,e),b=_.t;return(x.p.x-e.p.x)*r<-1.5&&!o&&(b+=1.5),{p:x,tti:b,ic:_}}).sort((x,_)=>x.tti-_.tti),u=new Map(h.map(x=>[x.p,x.ic])),d=n.controlled&&n.controlled.team===t&&qt(n.controlled.p.x,n.controlled.p.z,e.p.x,e.p.z)<6,f=o?4:d?1:2,g=new Set(h.slice(0,f).map(x=>x.p)),y=n.tackleCount>=4,m=[];for(let x of l){if(x.offside){Qt(x,(n.onsideAx-1.5)*t.dir,x.p.z,{sprint:!0});continue}if(g.has(x)){if(x.ai.bite>0){Qt(x,x.ai.biteX,x.ai.biteZ,{sprint:!0,stop:0});continue}let _=qt(x.p.x,x.p.z,e.p.x,e.p.z),b=u.get(x),R=_<3?et(_/Math.max(5,x.topSpeed),0,.35):null;R!==null?Qt(x,e.p.x+e.v.x*R,e.p.z+e.v.z*R,{sprint:!0,arrive:.6,stop:0}):Qt(x,b.x,b.z,{sprint:!0,arrive:.6,stop:0});let E=x.ai.marker&&n.time-(n.playStartT||0)<.55;if(!i&&n.ball.carrier===e&&e.state!=="tackled"&&!E){let A=qt(x.p.x,x.p.z,e.p.x+e.v.x*.22,e.p.z+e.v.z*.22),P=qt(x.p.x,x.p.z,e.p.x+e.v.x*.4,e.p.z+e.v.z*.4);if(_<1.95&&A<1.8){if(x.ai.react+=s,x.ai.react>c){x.ai.react=0;let w=(e.fwd.x*(x.p.x-e.p.x)+e.fwd.z*(x.p.z-e.p.z))/Math.max(.1,_)>.5;On(n,x,w&&x.attr.strength>80&&Bt(.15)?"grip":Bt(.3)?"low":"normal")}}else _<3.4&&P<3.2&&(x.p.x-e.p.x)*r<.5&&e.speedH>x.speedH*.9&&Bt(s*3)?On(n,x,"dive"):x.ai.react=Math.max(0,x.ai.react-s*.5)}continue}if((x.p.x-e.p.x)*r<-1.5){let _=wc(x,e);Qt(x,_.x,_.z,{sprint:!0});continue}if(x.num===1){if(o||Math.abs(e.p.x-x.p.x)<18){let b=wc(x,e);Qt(x,b.x,b.z,{sprint:!0});continue}let _=et(e.p.x+r*(y?22:14),-ri-2,ri+2);Qt(x,_,e.p.z*.6,{}),x.faceTarget=Tt(-r,0);continue}if(y&&(x.num===2||x.num===5)&&!o){let _=et(e.p.x+r*20,-ri-2,ri+2);Qt(x,_,(x.p.z>0?1:-1)*22);continue}m.push(x)}let p=a.players.filter(x=>x!==e);Ec(n,t,m,p,x=>{let b=(x||e).p.x+r*2.2;return(b-e.p.x)*r<.5&&(b=e.p.x+r*.5),b},e.p.z,!0,{lineSpeed:t.human?.95:n.diff.lineSpeed})}function mx(n,t){let e=n.ball,i=e.info,s=n.kickTarget||{x:e.p.x+e.v.x*.4,z:e.p.z+e.v.z*.4},a=e.kind==="kick"&&i&&i.team?i.team:null;for(let r of n.teams){let o=r.dir;r.players.filter(l=>!l.controlled&&Bn(l)).map(l=>({p:l,t:qt(l.p.x,l.p.z,s.x,s.z)/Math.max(5,l.topSpeed)})).sort((l,h)=>l.t-h.t).forEach((l,h)=>{let u=l.p;if(a===r){if(u.kickOffside){u.wish.x=-o*.3,u.wish.z=0,u.wantSprint=!1;return}h<4?Qt(u,s.x,s.z,{sprint:!0,stop:.2,arrive:.8}):Qt(u,s.x-o*(8+h),et(s.z+(h%2?1:-1)*(4+h*2),-oi+2,oi-2),{sprint:!1})}else if(a)h===0?Qt(u,s.x,s.z,{sprint:!0,stop:.05,arrive:.7}):h===1?Qt(u,s.x-o*4,s.z+2,{sprint:!0}):Qt(u,s.x+o*(5+h%4*3),et(s.z+(h%2?1:-1)*(3+h*2.2),-oi+2,oi-2),{sprint:h<5});else if(h<2)Qt(u,s.x,s.z,{sprint:!0,stop:0,arrive:.5});else{let d=ks(n,r,u,e.p.x,e.p.z);Qt(u,d.x,d.z,{})}u.speedH<.5&&Tc(u,e.p.x,e.p.z)})}}var _f=Pt.half,bf={faceA:"punt",faceB:"grubber",faceX:"chip",fieldGoal:"fieldgoal"},Mf={faceA:"punt",faceB:"grubber",faceX:"chip",faceY:"bomb",fieldGoal:"fieldgoal"},Ac={faceA:0,faceB:1,faceY:2},gx={passL:{used:!1,pending:null,tapWait:0},passR:{used:!1,pending:null,tapWait:0}};function Tf(n,t){let e=n.humanTeam,i=n.input;if(!e||(n.phase==="play"&&i.pressed("foot")&&!n.kickAim&&(n.humanFoot=(n.humanFoot||n.controlled?.attr.foot||"R")==="R"?"L":"R",n.audio.ui()),n.phase!=="play"&&n.phase!=="ptb"))return;yx(n);let s=n.controlled;if(!s)return;let a=n.camRig.inputToWorld(i.move.x,i.move.y),r=n.ball;if(n.phase==="ptb"){if(s.team===n.pd.team)return;if(Fn.has(s.state)){s.wish.x=a.x,s.wish.z=a.z,s.wantSprint=i.held("sprint"),s.faceTarget=Tt(-s.team.opp.dir,0);let o=s.team;!s.ai.marker&&s.p.x*o.dir>n.pd.onsideAx-.3&&s.wish.x*o.dir>0&&!s.offside&&(s.wish.x=0)}i.pressed("passL")&&vn(n,0),(i.pressed("passR")||i.pressed("kickMod"))&&vn(n,i.pressed("kickMod")?0:1);return}if(n.dhHold&&s.team!==n.dhHold.team){if(Fn.has(s.state)){s.wish.x=a.x,s.wish.z=a.z,s.wantSprint=i.held("sprint"),s.faceTarget=Tt(-s.team.opp.dir,0);let o=s.team,c=n.dhHold.markers.includes(s)?n.dhHold.mark.x*o.dir-.9:n.dhHold.onsideAx-.3;s.p.x*o.dir>c&&s.wish.x*o.dir>0&&(s.wish.x=0)}i.pressed("passL")&&vn(n,0),(i.pressed("passR")||i.pressed("kickMod"))&&vn(n,i.pressed("kickMod")?0:1);return}if(Fn.has(s.state)&&s.state!=="kick"&&(s.wish.x=a.x,s.wish.z=a.z,s.wantSprint=i.held("sprint"),s.faceTarget=null),r.state==="held"&&r.carrier===s)return vx(n,s,a,t);if(r.state==="held"&&r.carrier&&r.carrier.team!==e||s.state==="tackling")return wf(n,s);r.state!=="held"&&(i.pressed("passL")&&vn(n,0),i.pressed("passR")&&vn(n,1),i.pressed("faceX")&&s.doJump())}function yx(n){let t=n.ball,e=n.humanTeam;if(t.state==="held"&&t.carrier){if(t.carrier.team===e){n.setControlled(t.carrier);return}(!n.controlled||n.controlled.team!==e)&&n.setControlled(n.nearest(e.players,t.carrier.p.x,t.carrier.p.z,a=>a.isUpright()));return}if(t.state==="air"&&t.kind==="pass"&&t.info){if(t.info.team===e){n.setControlled(t.info.target);return}if(n.lastSwitchFor!==t.info&&n.settings.autoSwitch!==!1){n.lastSwitchFor=t.info;let a=t.info.tx,r=t.info.tz,o=n.nearest(e.players,a,r,l=>l.isUpright()),c=n.controlled;o&&c&&o!==c&&qt(c.p.x,c.p.z,a,r)>qt(o.p.x,o.p.z,a,r)+4&&n.setControlled(o)}return}let i=t.info?t.info:t,s=`${t.bounces}`;if(n.lastSwitchFor!==i||n.lastSwitchStamp!==s){n.lastSwitchFor=i,n.lastSwitchStamp=s;let a=n.kickTarget||t.p,r=n.nearest(e.players,a.x,a.z,o=>o.isUpright()&&!o.kickOffside);r&&n.setControlled(r)}}function vn(n,t){let e=n.humanTeam,i=n.ball,s=i.carrier||i,a=s.p.x,r=s.p.z,o=e.players.filter(l=>l.isUpright()||l.state==="getup").sort((l,h)=>qt(l.p.x,l.p.z,a,r)-qt(h.p.x,h.p.z,a,r));if(!o.length)return;let c=o[0];if(t===0&&c===n.controlled&&o[1]&&(c=o[1]),t===1){let l=o.indexOf(n.controlled);c=o[(l+1)%Math.min(o.length,5)]||o[0]}n.setControlled(c),n.audio.ui()}function Sf(n,t,e){let i=n.camRig.inputToWorld(e,0),s=t.right;return i.x*s.x+i.z*s.z>=0?1:-1}function xx(n,t,e){let i=t.right,s=e.x*i.x+e.z*i.z;if(Math.abs(s)>.3)return s>0?1:-1;let a=Pi(n,t,1).length,r=Pi(n,t,-1).length;return a>=r?1:-1}function vx(n,t,e,i){let s=n.input,a=t.team;if(t.pendingPass)return;if(t.state==="tackled"){s.pressed("passL")?ea(n,t,-1):s.pressed("passR")&&ea(n,t,1),(s.pressed("rsUp")||s.pressed("rsDown")||s.pressed("rsLeft")||s.pressed("rsRight"))&&ra(n,t),(s.pressed("sprint")||s.pressed("faceA"))&&t.engage&&(t.engage.legDrive=Math.min(1.6,t.engage.legDrive+.35));return}if(n.kickAim)return _x(n,t,i);let r=t.p.x*a.dir>_f;for(let l of["passL","passR"]){let h=l==="passL"?-1:1,u=gx[l];if(s.pressed(l)){if(u.tapWait>0){if(u.tapWait=0,u.used=!0,Is(n,t,h,0,!0),n.ball.carrier!==t)return;continue}u.used=!1,u.pending=null}if(s.held(l))for(let d in Ac)s.pressed(d)&&(u.used=!0,u.pending&&u.pending.face===d&&s.doubleTapped(d)?(Is(n,t,h,Ac[d],!0),u.pending=null):u.pending={face:d,t:.22});if(u.pending&&(u.pending.t-=i,u.pending.t<=0&&(Is(n,t,h,Ac[u.pending.face],!1),u.pending=null)),s.released(l)&&!u.used&&(u.used=!0,u.tapWait=.2),u.tapWait>0&&!s.held(l)&&(u.tapWait-=i,u.tapWait<=0&&(u.tapWait=0,Is(n,t,h,0,!1))),n.ball.carrier!==t)return}if(s.pressed("cutL")&&(Is(n,t,-1,1,!1),n.ball.carrier!==t)||s.pressed("cutR")&&(Is(n,t,1,1,!1),n.ball.carrier!==t))return;let o=s.held("passL")||s.held("passR");if(!r){if(s.pressed("rsLeft")&&t.doStep(Sf(n,t,-1)),s.pressed("rsRight")&&t.doStep(Sf(n,t,1)),s.pressed("rsUp")&&t.doBump(),s.pressed("rsDown")){let l=n.nearest(a.opp.players,t.p.x,t.p.z,d=>d.isUpright()),h=t.right,u=l?(l.p.x-t.p.x)*h.x+(l.p.z-t.p.z)*h.z>0?1:-1:1;t.doFend(u)}s.held("rsDown")&&t.holdFend()}if(o||r||!t.canAct())return;let c=s.held("kickMod");for(let l of Object.keys(c?Mf:bf)){if(!s.pressed(l))continue;let h=(c?Mf:bf)[l],u=n.humanFoot||t.attr.foot;if(c){let d=h==="fieldgoal"?Tt(a.dir*_f-t.p.x,-t.p.z):Tt(a.dir,0);n.kickAim={type:h,btn:l,yaw:d,holdT:0,power:0,foot:u,over:0}}else Wu(n,t,h,u);return}!c&&s.pressed("faceY")&&Cu(n,t,xx(n,t,e))}function Is(n,t,e,i,s){if(n.ball.carrier!==t||t.state==="tackled")return;let a=Pi(n,t,e);if(!a.length)return;let r=a[Math.min(i,a.length-1)];Nn(n,t,r.q,{long:i>0||r.lat>12,flat:s})}function _x(n,t,e){let i=n.input,s=n.kickAim,a=t.team;if(!i.held(s.btn)&&!i.released(s.btn)){n.kickAim=null;return}s.holdT+=e;let r=n.camRig.screenRight(),o=Math.cos(s.yaw)*r.x-Math.sin(s.yaw)*r.z;s.yaw+=i.move.x*1.7*e*(o>=0?1:-1);let c=Tt(a.dir,0);s.yaw=c+et(yn(s.yaw-c),-1.5,1.5),s.power=Math.min(1,s.holdT/1),s.over=Math.max(0,s.holdT-1);let l=et(.7+i.move.y*.3,.25,1);if(t.wish.x=a.dir*l,t.wish.z=0,i.pressed("foot")&&(s.foot=s.foot==="R"?"L":"R",n.humanFoot=s.foot),i.pressed("passL")||i.pressed("passR")){n.kickAim=null;return}if(i.released(s.btn)){let h=n.kickAim;n.kickAim=null,Ci(n,t,h.type,h.yaw,Math.max(.05,h.power),{foot:h.foot,extraErr:Math.min(.12,h.over*.1)})}}function wf(n,t){let e=n.input,i=n.ball.carrier;if(t.state==="tackling"){e.pressed("faceX")&&df(n,t);return}if(e.pressed("passL")||e.pressed("kickMod"))return vn(n,0);if(e.pressed("passR"))return vn(n,1);!i||t.state!=="free"||(e.pressed("faceA")?On(n,t,"low",{human:!0}):e.pressed("faceB")?On(n,t,"grip",{human:!0}):e.pressed("faceY")&&On(n,t,"dive",{human:!0}))}var _e=Pt.half,Ee=Pt.halfW;function bx(){return{tries:0,convM:0,convA:0,penGoals:0,penA:0,fieldGoals:0,tackles:0,missed:0,runs:0,metres:0,offloads:0,linebreaks:0,errors:0,pensConceded:0,possT:0,kicks:0,busts:0,passes:0}}var Vr=class{constructor(t,e,i){this.idx=t,this.def=e,this.kit=i,this.name=e.name,this.short=e.short,this.dir=t===0?1:-1,this.players=[],this.score=0,this.stats=bx(),this.human=!1}get(t){return this.players.find(e=>e.num===t)}get goalKicker(){return[...this.players].sort((t,e)=>e.attr.kick-t.attr.kick)[0]}get color(){return this.kit.primary}},Gr=class{constructor(t){this.scene=t.scene,this.audio=t.audio,this.hud=t.hud,this.input=t.input,this.camRig=t.camRig,this.settings=t.settings,this.diff=rc[t.settings.difficulty]||rc.normal,this.humanIdx=t.humanIdx;let e=Ju(t.homeDef,t.awayDef);this.teams=[new Vr(0,t.homeDef,e[0]),new Vr(1,t.awayDef,e[1])],this.teams[0].opp=this.teams[1],this.teams[1].opp=this.teams[0],this.humanIdx>=0&&(this.teams[this.humanIdx].human=!0),this.humanTeam=this.humanIdx>=0?this.teams[this.humanIdx]:null,this.players=[];for(let o of this.teams){let c=Sc(o.kit,o.def.id+o.idx);for(let l of Zu(o.def)){let h=new sa(c,{...l,number:l.num});this.scene.add(h.root);let u=new na(o,l,h);o.players.push(u),this.players.push(u)}}let i=Sc({primary:"#c6f01e",secondary:"#111111",trim:"#111111",pattern:"yoke",shorts:"#111111",socks:"#111111"},"ref"),s=new sa(i,{number:0,build:{w:.95,h:.98},skin:"#e0ac82",hair:"#3a2a1a",hairStyle:"short",isRef:!0});this.scene.add(s.root),this.ref=new na(null,{num:0,pos:"REF",name:"Referee",attr:{speed:80,accel:80,agility:70,strength:50,tackle:0,pass:0,kick:0,hand:0,stamina:99,foot:"R"},mass:75},s),this.ball=new Fr(this.scene);let a=oc[t.settings.wind]||oc.breezy;this.windBase={ang:Gt()*Math.PI*2,speed:yt(a.min,a.max),gust:a.gust},this.wind={x:0,z:0,speed:0,ang:0},this.updateWind(0),this.time=0,this.clock=0,this.half=1,this.siren=!1,this.clockRate=2400/(Math.max(1,t.settings.halfLen)*60*(t.settings.gameSpeed||ta)),this.phase="none",this.phaseT=0,this.pd={},this.poss=this.teams[0],this.tackleCount=0,this.engagements=[],this.controlled=null,this.kickAim=null,this.humanFoot=null,this.kickTarget=null,this.events=[],this.eventLog=[],this.gainLineX=0,this.lineBreakDone=!1,this.excite=0,this.firstKickTeam=Bt(.5)?this.teams[0]:this.teams[1],this.over=!1,this.goldenPoint=!1,this.listeners=[];let r=new _s(.55,.75,24);this.ring=new Et(r,new we({color:16769354,transparent:!0,opacity:.9,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.scene.add(this.ring),this.arrow=new Et(new vs(.18,.4,4),new we({color:16769354})),this.arrow.rotation.x=Math.PI,this.scene.add(this.arrow),this.landMarker=new Et(new _s(.6,.9,20),new we({color:4911359,transparent:!0,opacity:.7,depthWrite:!1})),this.landMarker.rotation.x=-Math.PI/2,this.landMarker.visible=!1,this.scene.add(this.landMarker),this.aimLine=new dr(new He().setFromPoints(Array.from({length:24},()=>new z)),new pr({color:16777215,dashSize:.6,gapSize:.4,transparent:!0,opacity:.9})),this.aimLine.visible=!1,this.aimLine.frustumCulled=!1,this.scene.add(this.aimLine),this.aimReticle=new Et(new _s(1,1.35,24),new we({color:16738858,transparent:!0,opacity:.85,depthWrite:!1})),this.aimReticle.rotation.x=-Math.PI/2,this.aimReticle.visible=!1,this.scene.add(this.aimReticle),this.tee=new Et(new Ze(.06,.1,.12,8),new fe({color:16747008})),this.tee.visible=!1,this.scene.add(this.tee)}opp(t){return t.opp}ax(t,e){return e*t.dir}on(t){this.listeners.push(t)}emit(t,e={}){let i={type:t,t:this.time,clock:this.clock,half:this.half,...e};this.eventLog.push({type:t,t:+this.time.toFixed(2),half:this.half,team:e.team?.short,who:e.player?.name,note:e.note,how:e.how,why:e.why,kind:e.kind}),this.eventLog.length>400&&this.eventLog.shift();for(let s of this.listeners)s(i)}message(t,e="",i=2,s=""){this.hud?.message(t,e,i,s)}isLate(){return this.half>=2&&this.clock>2400*.78}clockText(){let t=this.half===1?this.clock:this.half===2?2400+this.clock:4800+this.clock,e=Math.floor(t/60),i=Math.floor(t%60);return`${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}`}updateWind(t){let e=this.windBase,i=this.time,s=1+Math.sin(i*.31)*e.gust*.6+Math.sin(i*.83+1.3)*e.gust*.4,a=e.ang+Math.sin(i*.05)*.25;this.wind.speed=Math.max(0,e.speed*s),this.wind.ang=a,this.wind.x=Math.cos(a)*this.wind.speed,this.wind.z=Math.sin(a)*this.wind.speed}setPhase(t,e={}){this.phase=t,this.phaseT=0,this.pd=e,t!=="play"&&(this.dhHold=null),this.emit("phase",{phase:t})}setControlled(t){this.controlled!==t&&(this.controlled&&(this.controlled.controlled=!1),this.controlled=t,t&&(t.controlled=!0,t.ai.react=0))}nearest(t,e,i,s=()=>!0){let a=null,r=1/0;for(let o of t){if(!s(o))continue;let c=qt(o.p.x,o.p.z,e,i);c<r&&(r=c,a=o)}return a}clampField(t,e,i=1){return{x:et(t,-_e+.5,_e-.5),z:et(e,-Ee+i,Ee-i)}}attackTeam(){let t=this.ball;return t.state==="held"&&t.carrier?t.carrier.team:t.kind==="pass"&&t.info?t.info.team:this.poss}start(){this.setupKickoff(this.firstKickTeam,!0)}place(t,e,i,s){t.p.set(e,0,i),t.v.set(0,0,0),t.heading=s,t.setState("free"),t.lunge=null,t.engage=null,t.offside=!1,t.kickOffside=!1,t.wish.x=t.wish.z=0,t.ai.hold={x:e,z:i},t.ai.role="hold",t.faceTarget=s}resetAll(){this.engagements.length=0,this.dhHold=null;for(let t of this.players)t.lunge=null,t.engage=null,t.pendingPass=null,t.anim.pile=0,t.offside=!1,t.kickOffside=!1,t.speedMul=1,t.ai.hold=null,t.ai.plan=null,t.readyStance=!1;this.kickAim=null,this.kickTarget=null,this.tee.visible=!1}setupKickoff(t,e=!1){let i=t.opp,s=()=>{this.resetAll();let a=t.dir,r=t.goalKicker;for(let c of t.players){if(c===r)continue;let l=t.players.filter(h=>h!==r).indexOf(c);this.place(c,-a*1.5,-30+l*5.2+yt(-.5,.5),Tt(a,0))}this.place(r,-a*4.5,-1.2,Tt(a,0));let o={8:[12,-8],10:[12,8],9:[14,0],11:[16,-18],12:[16,18],13:[18,0],3:[26,14],4:[26,-14],6:[30,-5],7:[30,6],2:[38,22],5:[38,-22],1:[45,0]};for(let c of i.players){let l=o[c.num];this.place(c,a*l[0],l[1]*i.dir,Tt(-a,0))}this.ball.state="dead",this.ball.carrier=null,this.ball.p.set(0,.3,0),this.ball.v.set(0,0,0),this.tee.visible=!0,this.tee.position.set(0,.06,0),this.poss=i,this.tackleCount=0,this.setPhase("kickoff",{team:t,kicker:r,stage:"aim",type:"kickoff",yaw:Tt(a,0),power:0,holdT:0,cpuT:yt(1.2,2),runT:0}),t.human?this.setControlled(r):this.humanTeam&&this.setControlled(this.humanTeam.get(1)),this.message(e?"KICK-OFF":"RESTART",`${t.name} kick off`,1.8),this.audio.whistle()};e?s():this.transition(s)}transition(t){this.setPhase("transition",{fn:t,done:!1}),this.hud?.fadeOut()}phase_transition(){if(!this.pd.done&&this.phaseT>=.32){this.pd.done=!0;let t=this.pd.fn;t(),this.hud?.fadeIn()}}whistleStop(t,e,i,s={}){if(this.phase!=="whistle"){for(let a of this.engagements){a.carrier.state==="tackled"&&a.carrier.setState("free");for(let r of a.tacklers)r.setState("stumble",.4)}this.engagements.length=0,this.ball.state==="held"&&(this.ball.carrier=null,this.ball.state="ground",this.ball.v.set(0,0,0)),this.kickAim=null,this.audio.whistle(s.long),this.ref.refSignal=1.2,this.message(t,e,2,s.style||"bad"),this.setPhase("whistle",{restart:i,dur:s.dur||1.8})}}phase_whistle(){if(this.phaseT>=this.pd.dur){if(this.siren&&!this.pd.restart.ignoreSiren)return this.endPeriod();this.executeRestart(this.pd.restart)}}executeRestart(t){switch(t.type){case"scrum":return this.setupScrum(t.team,t.x,t.z);case"penalty":return this.setupPenalty(t.team,t.x,t.z);case"ptb":return this.transition(()=>this.setupPTB(t.team,{x:t.x,z:t.z},{restart:!0,zero:!0}));case"dropout":return this.setupDropout(t.team);case"kickoff":return this.setupKickoff(t.team)}}scrumRestart(t,e,i,s,a){this.whistleStop(s,a,{type:"scrum",team:t,x:e,z:i})}knockOn(t,e,i,s="KNOCK ON"){t.stats.errors++,this.emit("error",{team:t,why:s}),this.audio.roar(.6,!0);let a=e*t.dir;if(a<-_e)return this.whistleStop(s,`${t.short} error in-goal \u2014 goal-line drop-out`,{type:"dropout",team:t});if(a>_e)return this.whistleStop(s,`${t.short} error in-goal \u2014 20m restart`,{type:"ptb",team:t.opp,x:-t.opp.dir*30,z:0});this.scrumRestart(t.opp,e,i,s,`Scrum, ${t.opp.short} feed`)}awardPenalty(t,e,i,s){t.opp.stats.pensConceded++,this.emit("penalty",{team:t,reason:s}),this.whistleStop("PENALTY",`${s} \u2014 ${t.short} ball`,{type:"penalty",team:t,x:e,z:i},{style:"warn"})}setupDropout(t){this.transition(()=>{this.resetAll();let e=t.dir,i=-e*_e,s=t.goalKicker;t.players.forEach((a,r)=>{a!==s&&this.place(a,i+e*yt(.5,3),-28+r*4.7,Tt(e,0))}),this.place(s,i-e*1.5,0,Tt(e,0)),t.opp.players.forEach((a,r)=>this.place(a,i+e*(12+(a.num===1?30:r%3*6)),-28+r*4.7,Tt(-e,0))),this.ball.state="dead",this.ball.carrier=null,this.ball.p.set(i,.3,0),this.poss=t.opp,this.tackleCount=0,this.setPhase("kickoff",{team:t,kicker:s,stage:"aim",type:"dropout",yaw:Tt(e,0),power:0,holdT:0,cpuT:yt(1,1.6),runT:0,spot:{x:i,z:0}}),t.human?this.setControlled(s):this.humanTeam&&this.setControlled(this.humanTeam.get(1)),this.message("GOAL-LINE DROP-OUT",`${t.name}`,1.8)})}phase_kickoff(t){let e=this.pd,i=e.kicker,s=e.team,a=e.spot||{x:0,z:0};if(e.stage==="aim")i.setState("goalkick"),i.anim.preKick=!0,i.p.set(a.x-Math.sin(e.yaw)*3.5,0,a.z-Math.cos(e.yaw)*3.5),i.heading=e.yaw,this.ball.p.set(a.x,e.type==="dropout"?1:.3,a.z),s.human?mc(this,t,e,e.type==="dropout"?["dropout"]:["kickoff","shortko"]):this.phaseT>e.cpuT&&Bu(this,e);else if(e.stage==="run"){e.runT+=t;let r=Math.min(1,e.runT/.55);i.p.set(a.x-Math.sin(e.yaw)*(3.5-r*3),0,a.z-Math.cos(e.yaw)*(3.5-r*3)),i.anim.preKick=!1,i.anim.kt=e.runT>.4?e.runT-.4+.12:0,i.anim.foot=e.foot,i.v.set(Math.sin(e.yaw)*5.5,0,Math.cos(e.yaw)*5.5),i.speedH=r<1?5.5:0,e.runT>=.47&&!e.kicked&&(e.kicked=!0,this.tee.visible=!1,Ci(this,i,e.type,e.yaw,e.power,{place:e.type!=="dropout",restart:!0,foot:e.foot,elev:e.elev}),i.setState("kick",.55),i.stateT=.2,this.setPhase("play",{}))}}phase_play(){}updateBall(t){let e=this.ball;if(e.state==="held"&&e.carrier){let i=e.carrier,s=i.fwd,a=i.right;e.p.set(i.p.x+s.x*.2+a.x*.2*i.carrySide,i.state==="ground"?.3:1.12,i.p.z+s.z*.2+a.z*.2*i.carrySide),e.v.copy(i.v)}else e.state!=="dead"&&e.step(t,this.wind);this.phase==="play"?Iu(this,t):this.phase==="goalKick"?Nu(this):e.state==="ground"||e.state}updateDummyHalfHold(){let t=this.dhHold;if(!t)return;let e=this.ball,i=t.player;(this.phase!=="play"||e.state!=="held"||e.carrier!==i||i.state!=="free"||i.pendingPass||qt(i.p.x,i.p.z,t.x,t.z)>1)&&(this.dhHold=null,this.playStartT=this.time)}rulesLive(t){let e=this.ball;e.state==="held"&&e.carrier&&Lu(this,e.carrier,t),e.kind==="kick"&&e.info&&e.state!=="held"&&Du(this);for(let s of this.players){if(!s.offside)continue;let a=s.team,r=s.p.x*a.dir<=(this.onsideAx??-99)+.4,o=e.carrier,c=o&&o.team!==a&&(o.p.x-s.p.x)*o.team.dir>.5;(r||c||!this.dhHold&&this.time-(this.playStartT??0)>3)&&(s.offside=!1)}let i=e.carrier;if(i&&e.state==="held"){let s=i.team,a=s.opp.players.filter(o=>o.isUpright()&&(o.p.x-i.p.x)*s.dir>-.5&&Math.abs(o.p.z-i.p.z)<22).length;!this.lineBreakDone&&a<=1&&(i.p.x-this.gainLineX)*s.dir>6&&(this.lineBreakDone=!0,s.stats.linebreaks++,this.emit("linebreak",{team:s,player:i}),this.message("LINE BREAK!",i.name,1.5,"good"),this.audio.roar(.8));let r=i.p.x*s.dir;this.excite=et((r+10)/60,0,1)*.6+(this.lineBreakDone?.4:0)}else this.excite*=.98}onTackleComplete(t){let e=t.carrier,i=e.team;if(this.siren)return this.endPeriod();if(t.penalty)return this.awardPenalty(i,e.p.x,e.p.z,t.penalty);if(e.p.x*i.dir<-_e)return this.whistleStop("TACKLED IN-GOAL",`Goal-line drop-out ${i.short}`,{type:"dropout",team:i});this.tackleCount++,i.stats.runs++;let a=i,r=null;t.tacklers.length>=2&&Bt(.03+.015*t.tacklers.length)&&this.tackleCount<6&&(this.tackleCount=0,r=["SIX AGAIN","Ruck infringement"],i.opp.stats.pensConceded++,this.emit("sixagain",{team:i})),this.tackleCount>=6&&(a=i.opp,this.tackleCount=0,r=["HANDOVER",`${a.short} ball`],this.poss=a,this.emit("handover",{team:a})),r&&this.message(r[0],r[1],1.6,r[0]==="HANDOVER"?"warn":"good"),this.audio.whistle(),this.setupPTB(a,{x:e.p.x,z:e.p.z},{tackled:e,e:t,handover:a!==i})}setupPTB(t,e,i={}){let s=t.opp,a=t.dir;i.restart&&this.resetAll();let r=et(e.x,-_e+1,_e-1)*1,o=et(e.z,-Ee+1.5,Ee-1.5),c=r;r*a>_e-.5&&(c=a*(_e-.5)),i.zero&&(this.tackleCount=0),this.poss=t;let l=i.tackled&&!i.handover?i.tackled:this.nearest(t.players,c,o,p=>p.state!=="ground"||i.restart);if(i.restart){for(let x of t.players){let _=ks(this,t,x,c,o);this.place(x,_.x,_.z,Tt(a,0))}let p=Math.max(-_e,c*s.dir-10);for(let x of s.players){let _=et(-Ee+4+(x.num-1)*5,-Ee+2,Ee-2);this.place(x,(p-(x.num===1?18:0))*s.dir,_,Tt(-a,0))}l=this.nearest(t.players,c,o)}let h=t.get(9);(h===l||qt(h.p.x,h.p.z,c,o)>18||!h.isUpright())&&(h=this.nearest(t.players,c-a*1.5,o,p=>p!==l&&p.isUpright()));let u=i.e?i.e.tacklers.length:1,d=i.e?Math.max(0,i.e.dom):0,f=et(1.15+.35*(u-1)+d*.8+Gt()*.35,1,3);i.handover&&(f+=1),i.restart&&(f=1.6);let g=[];if(i.e)for(let p of i.e.tacklers)g.length<2&&g.push(p);for(;g.length<(i.restart?1:2);){let p=this.nearest(s.players,c,o,x=>!g.includes(x));if(!p)break;g.push(p)}let y=Math.max(-_e,c*s.dir-10);this.onsideAx=y;for(let p of s.players)p.ai.marker=g.includes(p),p.offside=!p.ai.marker&&p.p.x*s.dir>y+.4;for(let p of t.players)p.ai.marker=!1,p.offside=!1,p.kickOffside=!1;l.state!=="ground"&&l.knockDown(.01),this.ball.state="dead",this.ball.carrier=null,this.ball.kind="loose",this.ball.info=null,this.ball.p.set(c,.3,o);let m=Xu(this,t);this.setPhase("ptb",{team:t,mark:{x:c,z:o},ptbPlayer:l,dummy:h,playAt:f,stage:"down",markers:g,onsideAx:y,plan:m,extra:0});for(let p of t.players)p.ai.plan=null;t.human?this.setControlled(h):this.humanTeam&&(!this.controlled||this.controlled.team!==s||i.handover||i.restart)&&this.setControlled(this.nearest(s.players,c+s.dir*-1*0+(y*s.dir-c)*0,o,p=>!g.includes(p))||s.get(13)),this.gainLineX=c,this.lineBreakDone=!1,this.kickTarget=null}phase_ptb(t){let e=this.pd,i=e.team,s=i.dir,a=e.ptbPlayer,r=e.dummy,o=e.mark;e.stage==="down"&&this.phaseT>.45&&(e.stage="up",a.setState("ptb"),a.p.set(o.x,0,o.z),a.v.set(0,0,0),a.heading=Tt(s,0)),(e.stage==="up"||e.stage==="roll")&&(a.p.set(o.x,0,o.z),a.heading=Tt(s,0),a.anim.roll=0,this.ball.p.set(o.x+s*.25,.25,o.z));for(let h of this.players){if(h===a||h.state!=="ground"&&h.state!=="getup")continue;let u=h.p.x-o.x,d=h.p.z-o.z,f=Math.hypot(u,d);if(f>1.3)continue;let g=f>.05?u/f:0,y=f>.05?d/f:1;h.p.x+=g*1.8*t,h.p.z+=(y+(Math.abs(y)<.3?Math.sign(h.p.z-o.z||1)*.6:0))*1.8*t}let c={x:o.x-s*1.3,z:o.z},l=qt(r.p.x,r.p.z,c.x,c.z)<1.6;if(e.stage==="up"&&this.phaseT>=e.playAt-.3&&(l||this.phaseT>e.playAt+1.5)&&(e.stage="roll"),e.stage==="roll"){e.rollT=(e.rollT||0)+t,a.anim.roll=e.rollT/.35;let h=et(e.rollT/.35,0,1);this.ball.p.set(o.x+s*.25-s*1.2*h,.15,o.z),e.rollT>=.35&&(l||(r.p.set(c.x,0,c.z),r.v.set(0,0,0)),r.heading=Tt(s,0),r.setState("free"),this.ball.give(r),a.setState("free"),a.anim.roll=0,this.playStartT=this.time,this.dhHold={team:i,player:r,x:r.p.x,z:r.p.z,mark:{...o},markers:e.markers,onsideAx:e.onsideAx},this.setPhase("play",{}),r.ai.plan=e.plan,r.ai.passDelay=yt(.12,.35),r.ai.dummyHalf=!0,r.ai.passCd=0,i.human&&this.setControlled(r),this.emit("ptb",{team:i}))}}setupScrum(t,e,i){this.transition(()=>{this.resetAll();let s=et(e,-_e+10,_e-10),a=et(i,-Ee+20,Ee-20),r={};for(let o of this.teams){let c=o.dir,l={8:[-.7,-.6],9:[-.7,0],10:[-.7,.6],11:[-1.5,-.35],12:[-1.5,.35],13:[-2.3,0]};for(let g of o.players){let y=l[g.num];y&&(this.place(g,s+c*y[0],a+y[1],Tt(c,0)),g.setState("scrum"))}let h=o.get(7);o===t?this.place(h,s,a+(a>0?-1.6:1.6),Tt(0,a>0?1:-1)):this.place(h,s-c*1.2,a+(a>0?-2.2:2.2),Tt(c,0));let u=5,d=[6,1,2,3,4,5],f=a>0?-1:1;d.forEach((g,y)=>{let m=o.get(g),p=g===1?f*8:f*(6+y*6.5),x=o===t?g===1?14:7+y*.8:g===1?22:u+3;this.place(m,s-c*x,et(a+p,-Ee+2,Ee-2),Tt(c,0))}),r[o.idx]=!0}this.ball.state="dead",this.ball.carrier=null,this.ball.p.set(s,.15,a+(a>0?-1.2:1.2)),this.poss=t,this.tackleCount=0,this.setPhase("scrum",{feed:t,x:s,z:a}),this.humanTeam&&this.setControlled(this.humanTeam===t?t.get(7):this.humanTeam.get(6)),this.message("SCRUM",`${t.short} feed`,1.6)})}phase_scrum(){let t=this.pd,e=t.feed,i=e.dir;if(this.phaseT>1.4&&this.phaseT<2.6&&this.ball.p.set(t.x-i*(this.phaseT-1.4)*2,.15,t.z),this.phaseT>=2.6){let s=e.get(7),a=t.x-i*2.9;s.p.set(a-i*.4,0,t.z),s.heading=Tt(i,0);for(let r of this.players)r.state==="scrum"&&(r.setState("getup",.35),r.anim.dur=.35,r.anim.faceUp=!1,r.anim.quick=!0);this.ball.give(s),s.ai.plan={kind:"shift"},s.ai.passDelay=yt(.2,.5),s.ai.dummyHalf=!0,this.gainLineX=t.x,this.lineBreakDone=!1,this.playStartT=this.time,this.onsideAx=-99,this.setPhase("play",{}),e.human&&this.setControlled(s)}}setupPenalty(t,e,i){let s=this.clampField(e,i,5);s.x*t.dir>_e-10&&(s.x=t.dir*(_e-10)),this.resetAll(),this.poss=t,this.tackleCount=0,this.ball.state="dead",this.ball.carrier=null,this.ball.p.set(s.x,.15,s.z),this.onsideAx=Math.max(-_e,s.x*t.opp.dir-10),this.setPhase("penaltyChoice",{team:t,mark:s,cpuT:1.2}),t.human&&this.hud.penaltyChoice(a=>this.penaltyDecision(a))}phase_penaltyChoice(){let t=this.pd;!t.team.human&&this.phaseT>t.cpuT&&!t.decided&&(t.decided=!0,this.penaltyDecision(Vu(this,t.team,t.mark)))}penaltyDecision(t){let e=this.pd,i=e.team,s=e.mark;this.phase==="penaltyChoice"&&(this.emit("penaltyChoice",{team:i,choice:t}),t==="goal"?this.setupGoalKick(i,"penalty",s.x,s.z):t==="touch"?this.setupTouchKick(i,s):this.transition(()=>this.setupPTB(i,s,{restart:!0,zero:!0,tap:!0})))}setupTouchKick(t,e){this.transition(()=>{this.resetAll();let i=t.goalKicker,s=t.dir,a=e.z>=0?1:-1,r=Tt(s*.75,a*.66);this.place(i,e.x,e.z,r);for(let o of t.players)o!==i&&this.place(o,e.x-s*yt(3,12),et(e.z+yt(-20,20),-Ee+2,Ee-2),Tt(s,0));for(let o of t.opp.players)this.place(o,e.x+s*yt(10,40),et(yt(-Ee+3,Ee-3),-Ee+2,Ee-2),Tt(-s,0));this.ball.give(i),this.setPhase("touchKick",{team:t,kicker:i,stage:"aim",type:"touch",yaw:r,power:0,holdT:0,cpuT:1.4,spot:{x:e.x,z:e.z}}),t.human&&this.setControlled(i)})}phase_touchKick(t){let e=this.pd,i=e.kicker;i.p.set(e.spot.x,0,e.spot.z),i.v.set(0,0,0),i.heading=e.yaw,e.stage==="aim"?e.team.human?mc(this,t,e,["touch"]):this.phaseT>e.cpuT&&Hu(this,e):e.stage==="run"&&(Ci(this,i,"touch",e.yaw,e.power,{penaltyTouch:!0,foot:e.foot}),this.setPhase("play",{}))}setupGoalKick(t,e,i,s){this.transition(()=>{this.resetAll();let a=t.dir,r=t.goalKicker,o=et(s,-Ee+1,Ee-1),c=e==="conversion"?zu(o):_e-i*a;e==="penalty"&&(c=Math.max(10,c));let l=a*(_e-c);this.ball.state="dead",this.ball.carrier=null,this.ball.p.set(l,.3,o),this.ball.v.set(0,0,0),this.tee.visible=!0,this.tee.position.set(l,.06,o);let h=Tt(a*_e-l,-o);t.opp.players.forEach((u,d)=>this.place(u,a*(_e+2+d%3),-9+d*1.5,Tt(-a,0))),t.players.forEach((u,d)=>{u!==r&&this.place(u,l-a*(8+d%4*2),o*.7-12+d*2,Tt(a,0))}),this.place(r,l-Math.sin(h)*3.5,o-Math.cos(h)*3.5,h),this.setPhase("goalKick",{team:t,kicker:r,kind:e,stage:e==="conversion"?"place":"aim",x:l,z:o,dist:c,yaw:h,baseYaw:h,elev:Pe.goal.elev,power:0,holdT:0,foot:this.humanFoot&&t.human?this.humanFoot:r.attr.foot,cpuT:yt(1.6,2.4),runT:0}),t.stats[e==="conversion"?"convA":"penA"]++,t.human&&this.setControlled(r),this.message(e==="conversion"?"CONVERSION":"PENALTY GOAL",`${r.name} lines it up`,1.6)})}phase_goalKick(t){let e=this.pd,i=e.kicker,s=e.team;if(e.stage==="place"||e.stage==="aim"||e.stage==="power"){let a=e.x,r=e.z;this.ball.p.set(a,.3,r),this.tee.position.set(a,.06,r),this.tee.visible=!0,this.ball.lookDir.set(Math.sin(e.yaw),.25+e.elev*.4,Math.cos(e.yaw)).normalize(),this.ball.spinAngle=0,i.setState("goalkick"),i.anim.preKick=!0,i.heading=e.yaw,i.p.set(a-Math.sin(e.yaw)*3.5,0,r-Math.cos(e.yaw)*3.5),s.human?Ou(this,t,e):this.phaseT>e.cpuT&&Uu(this,e)}else if(e.stage==="run"){e.runT+=t;let a=Math.min(1,e.runT/.6);i.p.set(e.x-Math.sin(e.yaw)*(3.5-a*3),0,e.z-Math.cos(e.yaw)*(3.5-a*3)),i.anim.preKick=!1,i.anim.kt=e.runT>.45?e.runT-.45+.12:0,i.anim.foot=e.foot,i.speedH=a<1?4.5:0,i.heading=e.yaw,e.runT>=.52&&!e.kicked&&(e.kicked=!0,this.tee.visible=!1,Ci(this,i,"goal",e.yaw,e.power,{place:!0,elev:e.elev,foot:e.foot,goal:!0}),e.stage="flight",e.flightT=0,e.prevX=this.ball.p.x)}else if(e.stage==="flight")e.flightT+=t,i.anim.kt=e.runT-.45+.12+e.flightT,e.flightT>4.5&&!e.result&&kr(this,!1);else if(e.stage==="result"&&this.phaseT>2.4){if(this.goldenPoint&&e.result)return this.endMatch();if(this.siren)return this.endPeriod();if(e.kind==="penalty"&&!e.result)return this.transition(()=>this.setupPTB(s.opp,{x:-s.opp.dir*30,z:0},{restart:!0,zero:!0}));this.setupKickoff(s.opp)}}scoreTry(t,e){if(this.phase!=="play")return;let i=t.team;i.score+=4,i.stats.tries++,t.stats.tries++,this.engagements.length=0,this.ball.state="dead",this.ball.carrier=null,this.ball.p.set(t.p.x+i.dir*.4,.15,t.p.z),this.audio.whistle(!0),this.audio.roar(1.4),this.message("TRY!",`${t.name} \u2014 ${i.name}`,2.6,"try"),this.emit("try",{team:i,player:t}),this.hud.flashScore(),t.setState("celebrate"),this.setPhase("tryCelebration",{team:i,scorer:t,z:e,x:t.p.x}),this.excite=1}phase_tryCelebration(){let t=this.pd;if(this.phaseT>3.2){for(let e of this.players)e.state==="celebrate"&&e.setState("free");if(this.goldenPoint)return this.endMatch();this.setupGoalKick(t.team,"conversion",t.x,t.z)}}endPeriod(){if(this.siren=!1,this.engagements.length=0,this.kickAim=null,this.audio.whistle(!0),this.half===1)this.setPhase("halftime",{next:()=>this.startSecondHalf()}),this.humanTeam&&this.hud.showBreak(this,"HALF TIME",()=>this.startSecondHalf());else if(this.half===2&&this.teams[0].score===this.teams[1].score&&this.settings.goldenPoint){let t=()=>{this.half=3,this.clock=0,this.goldenPoint=!0,this.setupKickoff(Bt(.5)?this.teams[0]:this.teams[1])};this.setPhase("halftime",{next:t}),this.humanTeam?this.hud.showBreak(this,"GOLDEN POINT",t,"Scores level \u2014 first to score wins!"):this.message("GOLDEN POINT","First to score wins",2.5,"warn")}else this.endMatch()}phase_halftime(){!this.humanTeam&&this.phaseT>3&&!this.pd.auto&&(this.pd.auto=!0,this.hud.closeModal(),(this.pd.next||(()=>this.startSecondHalf()))())}startSecondHalf(){this.half=2,this.clock=0;for(let t of this.teams)t.dir*=-1;for(let t of this.players)t.stamina=Math.min(1,t.stamina+.5);this.setupKickoff(this.firstKickTeam.opp)}endMatch(){this.over||(this.over=!0,this.audio.hooter(),this.setPhase("fulltime",{}),this.emit("fulltime",{}),(this.humanTeam||this.showResults)&&this.hud.showBreak(this,"FULL TIME",null))}updateClock(t){if(["play","ptb","scrum","whistle"].includes(this.phase)){this.clock+=t*this.clockRate;let i=this.half<=2?2400:600;!this.siren&&this.clock>=i&&(this.clock=i,this.siren=!0,this.audio.hooter(),this.message("SIREN","Play on until the ball is dead",2,"warn"),(this.phase==="ptb"||this.phase==="scrum")&&this.endPeriod()),this.siren&&(this.clock=i)}let e=this.attackTeam();e&&(this.phase==="play"||this.phase==="ptb")&&(e.stats.possT+=t)}updateRef(t){let e=this.ref,i=this.ball,s=i.p.x,a=i.p.z+(i.p.z>0?-8:8);if(this.phase==="ptb"){let l=this.pd.team.opp;s=this.pd.onsideAx*l.dir,a=this.pd.mark.z+(this.pd.mark.z>0?-5:5)}else if(this.phase==="goalKick"||this.phase==="kickoff")s=this.pd.team.dir*(this.phase==="goalKick"?_e+1:0),a=this.phase==="goalKick"?4.5:14;else if(this.phase==="tryCelebration")s=this.pd.x,a=this.pd.z+3;else{let l=this.attackTeam();s-=(l?l.dir:1)*3}s=et(s,-_e-6,_e+6),a=et(a,-Ee+1,Ee-1);let r=s-e.p.x,o=a-e.p.z,c=Math.hypot(r,o);c>.6?(e.wish.x=r/c*Math.min(1,c/3),e.wish.z=o/c*Math.min(1,c/3),e.wantSprint=c>10):e.wish.x=e.wish.z=0,e.lookAt(i.p.x,i.p.z),e.update(t)}update(t){if(this.over&&this.phase==="fulltime"){for(let i of this.players)i.wish.x=i.wish.z=0,i.update(t);return}this.time+=t,this.phaseT+=t,this.updateWind(t),this.updateDummyHalfHold(),Tf(this,t),vf(this,t);let e=this["phase_"+this.phase];e&&e.call(this,t),Ru(this,t);for(let i of this.players)i.state==="kick"&&(i.anim.kt=i.stateT),i.hasBall=this.ball.state==="held"&&this.ball.carrier===i,i.update(t);pf(this,t),mf(this,t),this.updateRef(t),this.updateBall(t),this.phase==="play"&&this.rulesLive(t),this.updateClock(t)}syncVisuals(t,e){for(let l of this.players)l.model.update(l,t,e,this.ball.p);this.ref.model.update(this.ref,t,e,this.ball.p);let i=this.ball,s=null,a=0;i.state==="held"&&i.carrier&&(i.carrier.model.root.updateMatrixWorld(!0),s=i.carrier.model.ballWorld(new z),a=i.carrier.heading+(i.carrier.model.twoHand>.5?Math.PI/2:0)),i.syncMesh(s,a);let r=this.controlled,o=["goalKick","kickoff","touchKick"].includes(this.phase)&&this.pd.kicker===r;if(this.ring.visible=this.arrow.visible=!!r&&!o&&this.phase!=="fulltime"&&this.phase!=="halftime",r){this.ring.position.set(r.p.x,.03,r.p.z);let l=1+Math.sin(e*6)*.06;this.ring.scale.setScalar(l),this.arrow.position.set(r.p.x,2.45+Math.sin(e*4)*.08,r.p.z),this.ring.material.color.set(r.offside||r.kickOffside?16728128:16769354)}let c=this.kickTarget;this.landMarker.visible=!!c&&(i.state==="air"||i.state==="ground")&&this.phase==="play",c&&(this.landMarker.position.set(c.x,.04,c.z),this.landMarker.scale.setScalar(1+Math.sin(e*8)*.08)),Ku(this)}};var Di=(n,t,e,i)=>{let s=document.createElement(n);return t&&(s.className=t),i!==void 0&&(s.innerHTML=i),e&&e.appendChild(s),s},Wr=56,Xr=(n,t)=>{try{n.setPointerCapture(t)}catch{}},Kr=class{constructor(t,e,i={}){this.input=e,this.h=i,this.root=Di("div","touchpad",t),this.aim=!1,this.bufferedPass=null;let s=Di("div","tp-zone tp-left",this.root);this.base=Di("div","tp-base",s),this.knob=Di("div","tp-knob",this.base),this.bindStick(s);let a=Di("div","tp-zone tp-right",this.root);Di("div","tp-swipe-hint",a,"SWIPE &nbsp;\u2190\u2192 step &nbsp;\u2191 shoulder &nbsp;\u2193 fend"),this.bindSwipe(a),this.btn={};let r=(c,l,h)=>{let u=Di("button","tp-btn "+l,this.root);return u.type="button",u.dataset.key=c,this.btn[c]=u,this.bindHold(u,h),u};r("A","face fa","faceA"),r("B","face fb","faceB"),r("X","face fx","faceX"),r("Y","face fy","faceY"),r("FG","small sfg","fieldGoal");for(let[c,l]of[["PL","passL"],["PR","passR"]]){let h=Di("button","tp-btn pill "+(c==="PL"?"ppl":"ppr"),this.root);h.type="button",this.btn[c]=h,this.bindPass(h,l)}let o=(c,l,h)=>{let u=Di("button","tp-btn small "+l,this.root);return u.type="button",this.btn[c]=u,u.addEventListener("pointerdown",d=>{d.preventDefault(),this.touched(d),h()}),u};o("AIM","saim",()=>{this.aim=!this.aim,this.input.virt.kickMod=this.aim}),o("FOOT","sfoot",()=>this.input.virtTap.add("foot")),o("PAUSE","top tpause",()=>this.input.virtTap.add("pause")).textContent="II",o("CAM","top tcam",()=>this.input.virtTap.add("camera")).textContent="CAM",o("FS","top tfs",()=>this.h.fullscreen?.()).textContent="\u26F6",this.rotate=Di("div","rotate",t,"<div><b>Turn your phone sideways</b><span>Footy 13 plays in landscape</span></div>"),window.addEventListener("touchstart",()=>this.markTouch(),{passive:!0})}markTouch(){this.input.usingTouch||(this.input.usingTouch=!0,this.input.usingPad=!1)}touched(t){(t.pointerType==="touch"||t.pointerType==="pen")&&this.markTouch()}bindHold(t,e){let i=this.input.virt,s=()=>{i[e]=!1,t.classList.remove("on"),this.aim&&["faceA","faceB","faceX","faceY","fieldGoal"].includes(e)&&(this.aim=!1,i.kickMod=!1)};t.addEventListener("pointerdown",a=>{a.preventDefault(),this.touched(a),Xr(t,a.pointerId),i[e]=!0,t.classList.add("on")}),t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s)}bindPass(t,e){let i=0,s=null;t.addEventListener("pointerdown",r=>{r.preventDefault(),this.touched(r),Xr(t,r.pointerId),t.classList.add("on"),i=performance.now(),s=setTimeout(()=>t.classList.add("long"),300)});let a=()=>{if(!i)return;clearTimeout(s),t.classList.remove("on","long");let r=performance.now()-i>=300;i=0;let o=r&&this.canCut?e==="passL"?"cutL":"cutR":e;this.bufferPasses?this.bufferedPass=o:this.input.virtTap.add(o)};t.addEventListener("pointerup",a),t.addEventListener("pointercancel",a)}bindStick(t){let e=null,i=0,s=0,a=this.input.virtStick,r=this.input.virt;t.addEventListener("pointerdown",c=>{if(e!==null)return;c.preventDefault(),this.touched(c),e=c.pointerId,Xr(t,e);let l=t.getBoundingClientRect();i=c.clientX,s=c.clientY,this.base.style.left=`${i-l.left}px`,this.base.style.top=`${s-l.top}px`,this.base.classList.add("show"),a.active=!0,a.x=a.y=0}),t.addEventListener("pointermove",c=>{if(c.pointerId!==e)return;let l=(c.clientX-i)/Wr,h=(c.clientY-s)/Wr,u=Math.hypot(l,h);u>1&&(l/=u,h/=u),a.x=l,a.y=-h;let d=u>.92;r.sprint=d,this.knob.style.transform=`translate(${l*Wr}px, ${h*Wr}px)`,this.knob.classList.toggle("sprint",d)});let o=c=>{c.pointerId===e&&(e=null,a.active=!1,a.x=a.y=0,r.sprint=!1,this.knob.style.transform="",this.knob.classList.remove("sprint"),this.base.classList.remove("show"))};t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o)}bindSwipe(t){let e=null,i=0,s=0,a=!1,r=this.input.virt;t.addEventListener("pointerdown",c=>{e===null&&(c.preventDefault(),this.touched(c),e=c.pointerId,Xr(t,e),i=c.clientX,s=c.clientY,a=!1)}),t.addEventListener("pointermove",c=>{if(c.pointerId!==e||a)return;let l=c.clientX-i,h=c.clientY-s;if(Math.hypot(l,h)<28)return;a=!0;let u=Math.abs(l)>Math.abs(h)?l<0?"rsLeft":"rsRight":h<0?"rsUp":"rsDown";u==="rsDown"?r.rsDown=!0:this.input.virtTap.add(u)});let o=c=>{c.pointerId===e&&(e=null,r.rsDown=!1)};t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o)}update(t,e,i){let s=this.input.usingTouch&&e&&!!t&&!t.over;if(document.body.classList.toggle("touch",this.input.usingTouch),this.root.classList.toggle("show",s&&!i),this.rotate.classList.toggle("show",this.input.usingTouch&&e&&window.innerHeight>window.innerWidth),!s)return;let a={A:"",B:"",X:"",Y:"",PL:"",PR:"",FG:"",AIM:"",FOOT:""},r=t.humanTeam,o=t.controlled,c=t.ball,l=t.pd,h=t.phase;if(this.bufferPasses=!1,this.canCut=!1,r&&h==="play")if(c.state==="held"&&c.carrier===o){let u=o.p.x*r.dir;o.state==="tackled"?Object.assign(a,{A:"DRIVE",PL:"\u25C0 OFFLOAD",PR:"OFFLOAD \u25B6"}):u>Pt.half?a.A="GROUND":u<-Pt.half?Object.assign(a,{A:"TOUCH DOWN",PL:"\u25C0 PASS",PR:"PASS \u25B6"}):t.kickAim?a[{faceA:"A",faceB:"B",faceX:"X",faceY:"Y",fieldGoal:"FG"}[t.kickAim.btn]]="RELEASE":(Object.assign(a,{A:"PUNT",B:"GRUBBER",X:"CHIP",Y:this.aim?"BOMB":"DUMMY",FG:"FIELD GOAL",PL:"\u25C0 PASS",PR:"PASS \u25B6",AIM:this.aim?"AIM ON":"AIM",FOOT:"FOOT "+(t.humanFoot||o.attr.foot)}),this.canCut=!0)}else c.state==="held"&&c.carrier&&c.carrier.team!==r?Object.assign(a,{A:"TACKLE",B:"GRIP",Y:"DIVE",X:o&&o.state==="tackling"?"STRIP":"",PL:"\u25C0 SWITCH",PR:"SWITCH \u25B6"}):Object.assign(a,{X:"JUMP",PL:"\u25C0 SWITCH",PR:"SWITCH \u25B6"});else r&&h==="ptb"?l.team===r?(Object.assign(a,{PL:"\u25C0 PASS",PR:"PASS \u25B6"}),this.bufferPasses=!0,this.canCut=!0):Object.assign(a,{PL:"\u25C0 SWITCH",PR:"SWITCH \u25B6"}):r&&h==="goalKick"&&l.team===r?Object.assign(a,{A:l.stage==="place"?"SET":l.stage==="aim"||l.stage==="power"?"HOLD: KICK":"",FOOT:"FOOT "+(l.foot||"R")}):r&&(h==="kickoff"||h==="touchKick")&&l.team===r&&l.stage==="aim"&&Object.assign(a,{A:h==="kickoff"&&l.type!=="dropout"?"HOLD: LONG":"HOLD: KICK",B:h==="kickoff"&&l.type!=="dropout"?"HOLD: SHORT":"",FOOT:"FOOT "+(l.foot||"R")});this.bufferedPass&&h==="play"&&(this.input.virtTap.add(this.bufferedPass),this.bufferedPass=null),h!=="ptb"&&h!=="play"&&(this.bufferedPass=null);for(let u in a){let d=this.btn[u];d&&(d.dataset.label!==a[u]&&(d.dataset.label=a[u],d.textContent=a[u]),d.classList.toggle("idle",!a[u]))}this.btn.AIM.classList.toggle("latched",this.aim)}};var ji=new URLSearchParams(location.search);ji.get("seed")&&Su(+ji.get("seed"));var fa=document.getElementById("app"),Vn=new sr({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:ji.has("test")});Vn.setPixelRatio(Math.min(window.devicePixelRatio,matchMedia("(pointer: coarse)").matches?1.5:1.75));Vn.setSize(window.innerWidth,window.innerHeight);Vn.outputColorSpace=Re;fa.appendChild(Vn.domElement);var ca=new We(52,window.innerWidth/window.innerHeight,.3,1600),di=new Tr,_n=new Er,Hn=new Ur(ca),wi=new Pr(fa),oa=null,Pc=null,jt=null,pi="menu",tn=!1,la=0,qr=null,kc="",Yr=+(ji.get("speed")||1),Cc=ta;function Zr(n,t=!1){wi.closeModal(),oa=new rr;let e=n.settings;Pc=rf(oa,Vn,{time:e.time,homeName:n.homeDef.name,awayName:n.awayDef.name,homeColor:n.homeDef.primary,homeColor2:n.homeDef.secondary,awayColor:n.awayDef.primary,awayColor2:n.awayDef.secondary}),jt=new Gr({scene:oa,audio:_n,hud:wi,input:di,camRig:Hn,settings:{...e,autoSwitch:!0},homeDef:n.homeDef,awayDef:n.awayDef,humanIdx:t?-1:n.humanIdx}),Hn.mode=t?"behind":e.camera,wi.attach(jt),jt.showResults=!t,jt.start(),Cc=e.gameSpeed||ta,la=0,kc="",window.__game.match=jt,window.__game.scene=oa}function Ic(){let n=Math.floor(Gt()*ze.length),t=Math.floor(Gt()*ze.length);return t===n&&(t=(n+3)%ze.length),{homeDef:ze[n],awayDef:ze[t],humanIdx:-1,settings:{halfLen:5,difficulty:"normal",wind:"breezy",time:"day",camera:"behind",goldenPoint:!0}}}function Lc(){pi="menu",tn=!1,ua.hide(),Zr(Ic(),!0),wi.setVisible(!1),ha.show()}function Jr(n){_n.init(),qr=n,pi="playing",tn=!1,ha.hide(),ua.hide(),wi.setVisible(!0),Zr(n,(n.humanIdx<0,!1))}var ha=new Dr(fa,n=>Jr(n)),ua=new zr(fa,{resume:()=>$r(!1),restart:()=>{$r(!1),Jr(qr)},quit:()=>Lc(),camera:()=>Hn.toggle(),cameraName:()=>({behind:"Behind play",broadcast:"Broadcast",high:"High"})[Hn.mode],sound:()=>_n.setMuted(!_n.muted),soundName:()=>_n.muted?"Off":"On",teams:()=>jt?jt.teams.map(n=>n.def):[]}),Rf=new Kr(fa,di,{fullscreen:()=>{let n=document.documentElement;try{(document.fullscreenElement?document.exitFullscreen():n.requestFullscreen?.())?.catch?.(()=>{})}catch{}}});wi.onMenu=()=>Lc();wi.onRematch=()=>Jr(qr);function $r(n){tn=n,n?ua.show():ua.hide()}function Ef(){pi==="playing"&&di.pressed("pause")&&!jt.over&&$r(!tn),pi==="playing"&&di.pressed("help")&&!tn&&($r(!0),ua.act("controls")),di.pressed("camera")&&pi==="playing"&&Hn.toggle()}window.addEventListener("pointerdown",()=>_n.init(),{once:!1});window.addEventListener("keydown",()=>{pi==="playing"&&_n.init()});window.addEventListener("resize",()=>{Vn.setSize(window.innerWidth,window.innerHeight),ca.aspect=window.innerWidth/window.innerHeight,ca.updateProjectionMatrix()});function Mx(){let[n,t]=jt.teams,e=`${n.score}-${t.score}-${Math.floor(jt.clock/60)}-${jt.half}`;e!==kc&&(kc=e,Pc.drawScreen({title:"FOOTY 13 \xB7 LIVE",score:`${n.short} ${n.score} \u2013 ${t.score} ${t.short}`,sub:`${jt.clockText()}  ${jt.half===1?"1st half":jt.half===2?"2nd half":"Golden point"}`,foot:"Grab a pie at Big Pie Co."}))}var Af=performance.now(),Rc=0;function kf(n){requestAnimationFrame(kf);let t=Math.min(.1,(n-Af)/1e3);if(Af=n,Rc+=t,jt&&pi==="menu"&&jt.over&&jt.phaseT>6&&!ji.has("autoplay")&&Zr(Ic(),!0),jt&&!tn){la+=t*Yr*Cc;let e=0,i=10*Math.max(1,Yr);for(;la>=Un&&e<i&&(di.poll(Un),Ef(),!tn);)pi==="menu"&&ha.update(di),wi.pollModal(di),wi.pollBreak(di),jt.update(Un),la-=Un,e++;e>=i&&(la=0)}else di.poll(t),Ef(),pi==="menu"&&ha.update(di);if(jt){let e=tn?0:t*(Yr||1)*Cc;jt.syncVisuals(e,Rc),Hn.update(t,jt),Pc.update(t,Rc,jt.wind,jt.excite),_n.update(t,pi==="playing"?jt.excite:0),wi.update(jt,ca,t),Rf.update(jt,pi==="playing",tn),Mx(),Vn.render(oa,ca)}}window.__game={match:null,input:di,camRig:Hn,touch:Rf,sim(n){let t=Math.round(n/Un);for(let e=0;e<t;e++)jt.update(Un);return this.summary()},summary(){let[n,t]=jt.teams;return{phase:jt.phase,half:jt.half,clock:jt.clockText(),score:`${n.short} ${n.score}-${t.score} ${t.short}`,tackle:jt.tackleCount,over:jt.over}},start(n){Jr(n)},setSpeed(n){Yr=n}};if(ji.has("autoplay")){let n=Ic();n.settings.halfLen=+(ji.get("half")||5),ji.get("time")&&(n.settings.time=ji.get("time")),pi="playing",qr=n,ha.hide(),Zr(n,!0),wi.setVisible(!0)}else Lc();requestAnimationFrame(kf);})();
