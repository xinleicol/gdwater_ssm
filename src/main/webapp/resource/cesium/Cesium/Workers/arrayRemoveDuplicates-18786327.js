define(["exports","./RuntimeError-346a3079","./when-4bbc8319","./ComponentDatatype-93750d1a"],function(e,n,h,i){"use strict";var o=i.CesiumMath.EPSILON10;e.arrayRemoveDuplicates=function(e,n,i,d){if(h.defined(e)){i=h.defaultValue(i,!1);var t=h.defined(d),r=e.length;if(r<2)return e;for(var f,a,u=e[0],s=0,l=-1,c=1;c<r;++c)n(u,f=e[c],o)?(h.defined(a)||(a=e.slice(0,c),s=c-1,l=0),t&&d.push(c)):(h.defined(a)&&(a.push(f),s=c,t&&(l=d.length)),u=f);return i&&n(e[0],e[r-1],o)&&(t&&(h.defined(a)?d.splice(l,0,s):d.push(r-1)),h.defined(a)?--a.length:a=e.slice(0,-1)),h.defined(a)?a:e}}});