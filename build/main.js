/**
 *To include js file from libraries write: `//= include ./path-to-file`
 * */

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */

!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});


/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from being retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		checkVisibility: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',
		slideTransition: '',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				// TODO: Should be computed from number of min width items in stage
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat > 0) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				repeat -= 1;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			this.$stage.children('.center').removeClass('center');
			if (this.settings.center) {
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Create the stage DOM element
	 */
	Owl.prototype.initializeStage = function() {
		this.$stage = this.$element.find('.' + this.settings.stageClass);

		// if the stage is already in the DOM, grab it and skip stage initialization
		if (this.$stage.length) {
			return;
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + '>', {
			"class": this.settings.stageClass
		}).wrap( $( '<div/>', {
			"class": this.settings.stageOuterClass
		}));

		// append stage
		this.$element.append(this.$stage.parent());
	};

	/**
	 * Create item DOM elements
	 */
	Owl.prototype.initializeItems = function() {
		var $items = this.$element.find('.owl-item');

		// if the items are already in the DOM, grab them and skip item initialization
		if ($items.length) {
			this._items = $items.get().map(function(item) {
				return $(item);
			});

			this._mergers = this._items.map(function() {
				return 1;
			});

			this.refresh();

			return;
		}

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.isVisible()) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);
	};

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.initializeStage();
		this.initializeItems();

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * @returns {Boolean} visibility of $element
	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
	 */
	Owl.prototype.isVisible = function() {
		return this.settings.checkVisibility
			? this.$element.is(':visible')
			: true;
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.isVisible()) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's' + (
					this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
				)
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			if (iterator) {
				reciprocalItemsWidth = this._items[--iterator].width();
				elementWidth = this.$element.width();
				while (iterator--) {
					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
					if (reciprocalItemsWidth > elementWidth) {
						break;
					}
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.isVisible()) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.remove();
		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);


/**
 * CUSTOM SCRIPTS
 **/

$(document).ready(function () {
    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });
    /**
     * STICKY-HEADER
     **/
    let scrolled;

    function addScrollClass() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 40) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    }

    addScrollClass();

    $(window).on('scroll', function () {
        addScrollClass();
    });

    /**
     *  TOGGLE ACTIVE CLASS
     * */
    const nav = $('.main-nav');

    $('.main-nav .decor').click(function (e) {
        e.preventDefault();
        $('.decor').removeClass('decor_active');
        $(this).addClass('decor_active');

        nav.removeClass('open');
        jQuery('.backdrop').fadeOut();
    });

    const navFooter = $('.footer-nav');

    $('.footer-nav .decor').click(function (e) {
        e.preventDefault();
        $('.decor').removeClass('decor_active');
        $(this).addClass('decor_active');

        navFooter.removeClass('open');
        jQuery('.backdrop').fadeOut();
    });

    /**
     * MOB MENU SCRIPT
     **/

    $('.burger').click(function (e) {
        e.preventDefault();
        nav.addClass('open');
        jQuery('.backdrop').fadeIn();
    });

    $('.close-nav, .backdrop').click(function (e) {
        e.preventDefault();
        nav.removeClass('open');
        jQuery('.backdrop').fadeOut();
    });

    /**
     * OWL-CAROUSEL SCRIPT
     **/
    const owl = jQuery("#slider-carousel");
    owl.owlCarousel({
        items: 3,
        itemsDesktop: [1000, 4],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false,
        pagination: false,
        responsive: {
                    0: {
            items: 1
        },
        768: {
            items: 2
        },
        970: {
            items: 3,
            loop: false,
            rewind: true
        }
    }
    });
    $(".owl-next").click(function() {
        owl.trigger('owl.next');
    });
    $(".owl-prev").click(function() {
        owl.trigger('owl.prev');
    })
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCIuLi9saWIvanF1ZXJ5LTMuMy4xLm1pbi5qcyIsIi4uL2xpYi9vd2wtc2xpZGVyL2pzL293bC5jYXJvdXNlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUNMQTtFQUNBO0VBQ0E7QURLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBRWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUZ2c0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqVG8gaW5jbHVkZSBqcyBmaWxlIGZyb20gbGlicmFyaWVzIHdyaXRlOiBgLy89IGluY2x1ZGUgLi9wYXRoLXRvLWZpbGVgXHJcbiAqICovXHJcblxyXG4vLz0gaW5jbHVkZSAuLi9saWIvanF1ZXJ5LTMuMy4xLm1pbi5qc1xyXG4vLz0gaW5jbHVkZSAuLi9saWIvb3dsLXNsaWRlci9qcy9vd2wuY2Fyb3VzZWwuanNcclxuXHJcbi8qKlxyXG4gKiBDVVNUT00gU0NSSVBUU1xyXG4gKiovXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdhW2hyZWY9XCIjXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICAgIC8qKlxyXG4gICAgICogU1RJQ0tZLUhFQURFUlxyXG4gICAgICoqL1xyXG4gICAgbGV0IHNjcm9sbGVkO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFNjcm9sbENsYXNzKCkge1xyXG4gICAgICAgIHNjcm9sbGVkID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgaWYgKHNjcm9sbGVkID4gNDApIHtcclxuICAgICAgICAgICAgJCgnLmhlYWRlcicpLmFkZENsYXNzKCdzY3JvbGwnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ3Njcm9sbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRTY3JvbGxDbGFzcygpO1xyXG5cclxuICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGFkZFNjcm9sbENsYXNzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKipcclxuICAgICAqICBUT0dHTEUgQUNUSVZFIENMQVNTXHJcbiAgICAgKiAqL1xyXG4gICAgY29uc3QgbmF2ID0gJCgnLm1haW4tbmF2Jyk7XHJcblxyXG4gICAgJCgnLm1haW4tbmF2IC5kZWNvcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5kZWNvcicpLnJlbW92ZUNsYXNzKCdkZWNvcl9hY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdkZWNvcl9hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgbmF2LnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYmFja2Ryb3AnKS5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBuYXZGb290ZXIgPSAkKCcuZm9vdGVyLW5hdicpO1xyXG5cclxuICAgICQoJy5mb290ZXItbmF2IC5kZWNvcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJy5kZWNvcicpLnJlbW92ZUNsYXNzKCdkZWNvcl9hY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdkZWNvcl9hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgbmF2Rm9vdGVyLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYmFja2Ryb3AnKS5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1PQiBNRU5VIFNDUklQVFxyXG4gICAgICoqL1xyXG5cclxuICAgICQoJy5idXJnZXInKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBuYXYuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICBqUXVlcnkoJy5iYWNrZHJvcCcpLmZhZGVJbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmNsb3NlLW5hdiwgLmJhY2tkcm9wJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbmF2LnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuYmFja2Ryb3AnKS5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9XTC1DQVJPVVNFTCBTQ1JJUFRcclxuICAgICAqKi9cclxuICAgIGNvbnN0IG93bCA9IGpRdWVyeShcIiNzbGlkZXItY2Fyb3VzZWxcIik7XHJcbiAgICBvd2wub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgIGl0ZW1zRGVza3RvcDogWzEwMDAsIDRdLFxyXG4gICAgICAgIGl0ZW1zRGVza3RvcFNtYWxsOiBbOTAwLCAyXSxcclxuICAgICAgICBpdGVtc1RhYmxldDogWzYwMCwgMV0sXHJcbiAgICAgICAgaXRlbXNNb2JpbGU6IGZhbHNlLFxyXG4gICAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk3MDoge1xyXG4gICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIHJld2luZDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIH0pO1xyXG4gICAgJChcIi5vd2wtbmV4dFwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBvd2wudHJpZ2dlcignb3dsLm5leHQnKTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5vd2wtcHJldlwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBvd2wudHJpZ2dlcignb3dsLnByZXYnKTtcclxuICAgIH0pXHJcbn0pOyIsIi8qISBqUXVlcnkgdjMuMy4xIHwgKGMpIEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUuZG9jdW1lbnQ/dChlLCEwKTpmdW5jdGlvbihlKXtpZighZS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiB0KGUpfTp0KGUpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49W10scj1lLmRvY3VtZW50LGk9T2JqZWN0LmdldFByb3RvdHlwZU9mLG89bi5zbGljZSxhPW4uY29uY2F0LHM9bi5wdXNoLHU9bi5pbmRleE9mLGw9e30sYz1sLnRvU3RyaW5nLGY9bC5oYXNPd25Qcm9wZXJ0eSxwPWYudG9TdHJpbmcsZD1wLmNhbGwoT2JqZWN0KSxoPXt9LGc9ZnVuY3Rpb24gZSh0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZcIm51bWJlclwiIT10eXBlb2YgdC5ub2RlVHlwZX0seT1mdW5jdGlvbiBlKHQpe3JldHVybiBudWxsIT10JiZ0PT09dC53aW5kb3d9LHY9e3R5cGU6ITAsc3JjOiEwLG5vTW9kdWxlOiEwfTtmdW5jdGlvbiBtKGUsdCxuKXt2YXIgaSxvPSh0PXR8fHIpLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoby50ZXh0PWUsbilmb3IoaSBpbiB2KW5baV0mJihvW2ldPW5baV0pO3QuaGVhZC5hcHBlbmRDaGlsZChvKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pfWZ1bmN0aW9uIHgoZSl7cmV0dXJuIG51bGw9PWU/ZStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2xbYy5jYWxsKGUpXXx8XCJvYmplY3RcIjp0eXBlb2YgZX12YXIgYj1cIjMuMy4xXCIsdz1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgdy5mbi5pbml0KGUsdCl9LFQ9L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nO3cuZm49dy5wcm90b3R5cGU9e2pxdWVyeTpcIjMuMy4xXCIsY29uc3RydWN0b3I6dyxsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIG8uY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP28uY2FsbCh0aGlzKTplPDA/dGhpc1tlK3RoaXMubGVuZ3RoXTp0aGlzW2VdfSxwdXNoU3RhY2s6ZnVuY3Rpb24oZSl7dmFyIHQ9dy5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksZSk7cmV0dXJuIHQucHJldk9iamVjdD10aGlzLHR9LGVhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIHcuZWFjaCh0aGlzLGUpfSxtYXA6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHcubWFwKHRoaXMsZnVuY3Rpb24odCxuKXtyZXR1cm4gZS5jYWxsKHQsbix0KX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soby5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxlcTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmxlbmd0aCxuPStlKyhlPDA/dDowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobj49MCYmbjx0P1t0aGlzW25dXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IoKX0scHVzaDpzLHNvcnQ6bi5zb3J0LHNwbGljZTpuLnNwbGljZX0sdy5leHRlbmQ9dy5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgZSx0LG4scixpLG8sYT1hcmd1bWVudHNbMF18fHt9LHM9MSx1PWFyZ3VtZW50cy5sZW5ndGgsbD0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBhJiYobD1hLGE9YXJndW1lbnRzW3NdfHx7fSxzKyspLFwib2JqZWN0XCI9PXR5cGVvZiBhfHxnKGEpfHwoYT17fSkscz09PXUmJihhPXRoaXMscy0tKTtzPHU7cysrKWlmKG51bGwhPShlPWFyZ3VtZW50c1tzXSkpZm9yKHQgaW4gZSluPWFbdF0sYSE9PShyPWVbdF0pJiYobCYmciYmKHcuaXNQbGFpbk9iamVjdChyKXx8KGk9QXJyYXkuaXNBcnJheShyKSkpPyhpPyhpPSExLG89biYmQXJyYXkuaXNBcnJheShuKT9uOltdKTpvPW4mJncuaXNQbGFpbk9iamVjdChuKT9uOnt9LGFbdF09dy5leHRlbmQobCxvLHIpKTp2b2lkIDAhPT1yJiYoYVt0XT1yKSk7cmV0dXJuIGF9LHcuZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKFwiMy4zLjFcIitNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihlKX0sbm9vcDpmdW5jdGlvbigpe30saXNQbGFpbk9iamVjdDpmdW5jdGlvbihlKXt2YXIgdCxuO3JldHVybiEoIWV8fFwiW29iamVjdCBPYmplY3RdXCIhPT1jLmNhbGwoZSkpJiYoISh0PWkoZSkpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZihuPWYuY2FsbCh0LFwiY29uc3RydWN0b3JcIikmJnQuY29uc3RydWN0b3IpJiZwLmNhbGwobik9PT1kKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihlKXt2YXIgdDtmb3IodCBpbiBlKXJldHVybiExO3JldHVybiEwfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGUpe20oZSl9LGVhY2g6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTA7aWYoQyhlKSl7Zm9yKG49ZS5sZW5ndGg7cjxuO3IrKylpZighMT09PXQuY2FsbChlW3JdLHIsZVtyXSkpYnJlYWt9ZWxzZSBmb3IociBpbiBlKWlmKCExPT09dC5jYWxsKGVbcl0scixlW3JdKSlicmVhaztyZXR1cm4gZX0sdHJpbTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOihlK1wiXCIpLnJlcGxhY2UoVCxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGUsdCl7dmFyIG49dHx8W107cmV0dXJuIG51bGwhPWUmJihDKE9iamVjdChlKSk/dy5tZXJnZShuLFwic3RyaW5nXCI9PXR5cGVvZiBlP1tlXTplKTpzLmNhbGwobixlKSksbn0saW5BcnJheTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIG51bGw9PXQ/LTE6dS5jYWxsKHQsZSxuKX0sbWVyZ2U6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49K3QubGVuZ3RoLHI9MCxpPWUubGVuZ3RoO3I8bjtyKyspZVtpKytdPXRbcl07cmV0dXJuIGUubGVuZ3RoPWksZX0sZ3JlcDpmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByLGk9W10sbz0wLGE9ZS5sZW5ndGgscz0hbjtvPGE7bysrKShyPSF0KGVbb10sbykpIT09cyYmaS5wdXNoKGVbb10pO3JldHVybiBpfSxtYXA6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz0wLHM9W107aWYoQyhlKSlmb3Iocj1lLmxlbmd0aDtvPHI7bysrKW51bGwhPShpPXQoZVtvXSxvLG4pKSYmcy5wdXNoKGkpO2Vsc2UgZm9yKG8gaW4gZSludWxsIT0oaT10KGVbb10sbyxuKSkmJnMucHVzaChpKTtyZXR1cm4gYS5hcHBseShbXSxzKX0sZ3VpZDoxLHN1cHBvcnQ6aH0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKHcuZm5bU3ltYm9sLml0ZXJhdG9yXT1uW1N5bWJvbC5pdGVyYXRvcl0pLHcuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsdCl7bFtcIltvYmplY3QgXCIrdCtcIl1cIl09dC50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gQyhlKXt2YXIgdD0hIWUmJlwibGVuZ3RoXCJpbiBlJiZlLmxlbmd0aCxuPXgoZSk7cmV0dXJuIWcoZSkmJiF5KGUpJiYoXCJhcnJheVwiPT09bnx8MD09PXR8fFwibnVtYmVyXCI9PXR5cGVvZiB0JiZ0PjAmJnQtMSBpbiBlKX12YXIgRT1mdW5jdGlvbihlKXt2YXIgdCxuLHIsaSxvLGEscyx1LGwsYyxmLHAsZCxoLGcseSx2LG0seCxiPVwic2l6emxlXCIrMSpuZXcgRGF0ZSx3PWUuZG9jdW1lbnQsVD0wLEM9MCxFPWFlKCksaz1hZSgpLFM9YWUoKSxEPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9PT10JiYoZj0hMCksMH0sTj17fS5oYXNPd25Qcm9wZXJ0eSxBPVtdLGo9QS5wb3AscT1BLnB1c2gsTD1BLnB1c2gsSD1BLnNsaWNlLE89ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjtuKyspaWYoZVtuXT09PXQpcmV0dXJuIG47cmV0dXJuLTF9LFA9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLE09XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLFI9XCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXDAtXFxcXHhhMF0pK1wiLEk9XCJcXFxcW1wiK00rXCIqKFwiK1IrXCIpKD86XCIrTStcIiooWypeJHwhfl0/PSlcIitNK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrUitcIikpfClcIitNK1wiKlxcXFxdXCIsVz1cIjooXCIrUitcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrSStcIikqKXwuKilcXFxcKXwpXCIsJD1uZXcgUmVnRXhwKE0rXCIrXCIsXCJnXCIpLEI9bmV3IFJlZ0V4cChcIl5cIitNK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitNK1wiKyRcIixcImdcIiksRj1uZXcgUmVnRXhwKFwiXlwiK00rXCIqLFwiK00rXCIqXCIpLF89bmV3IFJlZ0V4cChcIl5cIitNK1wiKihbPit+XXxcIitNK1wiKVwiK00rXCIqXCIpLHo9bmV3IFJlZ0V4cChcIj1cIitNK1wiKihbXlxcXFxdJ1xcXCJdKj8pXCIrTStcIipcXFxcXVwiLFwiZ1wiKSxYPW5ldyBSZWdFeHAoVyksVT1uZXcgUmVnRXhwKFwiXlwiK1IrXCIkXCIpLFY9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitSK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK1IrXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitSK1wifFsqXSlcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK0kpLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK1cpLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK00rXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitNK1wiKig/OihbKy1dfClcIitNK1wiKihcXFxcZCspfCkpXCIrTStcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitQK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrTStcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrTStcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrTStcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sRz0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFk9L15oXFxkJC9pLFE9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxKPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLEs9L1srfl0vLFo9bmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiK00rXCI/fChcIitNK1wiKXwuKVwiLFwiaWdcIiksZWU9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVwiMHhcIit0LTY1NTM2O3JldHVybiByIT09cnx8bj90OnI8MD9TdHJpbmcuZnJvbUNoYXJDb2RlKHIrNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUocj4+MTB8NTUyOTYsMTAyMyZyfDU2MzIwKX0sdGU9LyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFwwLVxceDFmXFx4N2YtXFx1RkZGRlxcdy1dL2csbmU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD9cIlxcMFwiPT09ZT9cIlxcdWZmZmRcIjplLnNsaWNlKDAsLTEpK1wiXFxcXFwiK2UuY2hhckNvZGVBdChlLmxlbmd0aC0xKS50b1N0cmluZygxNikrXCIgXCI6XCJcXFxcXCIrZX0scmU9ZnVuY3Rpb24oKXtwKCl9LGllPW1lKGZ1bmN0aW9uKGUpe3JldHVybiEwPT09ZS5kaXNhYmxlZCYmKFwiZm9ybVwiaW4gZXx8XCJsYWJlbFwiaW4gZSl9LHtkaXI6XCJwYXJlbnROb2RlXCIsbmV4dDpcImxlZ2VuZFwifSk7dHJ5e0wuYXBwbHkoQT1ILmNhbGwody5jaGlsZE5vZGVzKSx3LmNoaWxkTm9kZXMpLEFbdy5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZSl7TD17YXBwbHk6QS5sZW5ndGg/ZnVuY3Rpb24oZSx0KXtxLmFwcGx5KGUsSC5jYWxsKHQpKX06ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmxlbmd0aCxyPTA7d2hpbGUoZVtuKytdPXRbcisrXSk7ZS5sZW5ndGg9bi0xfX19ZnVuY3Rpb24gb2UoZSx0LHIsaSl7dmFyIG8scyxsLGMsZixoLHYsbT10JiZ0Lm93bmVyRG9jdW1lbnQsVD10P3Qubm9kZVR5cGU6OTtpZihyPXJ8fFtdLFwic3RyaW5nXCIhPXR5cGVvZiBlfHwhZXx8MSE9PVQmJjkhPT1UJiYxMSE9PVQpcmV0dXJuIHI7aWYoIWkmJigodD90Lm93bmVyRG9jdW1lbnR8fHQ6dykhPT1kJiZwKHQpLHQ9dHx8ZCxnKSl7aWYoMTEhPT1UJiYoZj1KLmV4ZWMoZSkpKWlmKG89ZlsxXSl7aWYoOT09PVQpe2lmKCEobD10LmdldEVsZW1lbnRCeUlkKG8pKSlyZXR1cm4gcjtpZihsLmlkPT09bylyZXR1cm4gci5wdXNoKGwpLHJ9ZWxzZSBpZihtJiYobD1tLmdldEVsZW1lbnRCeUlkKG8pKSYmeCh0LGwpJiZsLmlkPT09bylyZXR1cm4gci5wdXNoKGwpLHJ9ZWxzZXtpZihmWzJdKXJldHVybiBMLmFwcGx5KHIsdC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKSkscjtpZigobz1mWzNdKSYmbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZ0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEwuYXBwbHkocix0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobykpLHJ9aWYobi5xc2EmJiFTW2UrXCIgXCJdJiYoIXl8fCF5LnRlc3QoZSkpKXtpZigxIT09VCltPXQsdj1lO2Vsc2UgaWYoXCJvYmplY3RcIiE9PXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7KGM9dC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/Yz1jLnJlcGxhY2UodGUsbmUpOnQuc2V0QXR0cmlidXRlKFwiaWRcIixjPWIpLHM9KGg9YShlKSkubGVuZ3RoO3doaWxlKHMtLSloW3NdPVwiI1wiK2MrXCIgXCIrdmUoaFtzXSk7dj1oLmpvaW4oXCIsXCIpLG09Sy50ZXN0KGUpJiZnZSh0LnBhcmVudE5vZGUpfHx0fWlmKHYpdHJ5e3JldHVybiBMLmFwcGx5KHIsbS5xdWVyeVNlbGVjdG9yQWxsKHYpKSxyfWNhdGNoKGUpe31maW5hbGx5e2M9PT1iJiZ0LnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIHUoZS5yZXBsYWNlKEIsXCIkMVwiKSx0LHIsaSl9ZnVuY3Rpb24gYWUoKXt2YXIgZT1bXTtmdW5jdGlvbiB0KG4saSl7cmV0dXJuIGUucHVzaChuK1wiIFwiKT5yLmNhY2hlTGVuZ3RoJiZkZWxldGUgdFtlLnNoaWZ0KCldLHRbbitcIiBcIl09aX1yZXR1cm4gdH1mdW5jdGlvbiBzZShlKXtyZXR1cm4gZVtiXT0hMCxlfWZ1bmN0aW9uIHVlKGUpe3ZhciB0PWQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO3RyeXtyZXR1cm4hIWUodCl9Y2F0Y2goZSl7cmV0dXJuITF9ZmluYWxseXt0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSx0PW51bGx9fWZ1bmN0aW9uIGxlKGUsdCl7dmFyIG49ZS5zcGxpdChcInxcIiksaT1uLmxlbmd0aDt3aGlsZShpLS0pci5hdHRySGFuZGxlW25baV1dPXR9ZnVuY3Rpb24gY2UoZSx0KXt2YXIgbj10JiZlLHI9biYmMT09PWUubm9kZVR5cGUmJjE9PT10Lm5vZGVUeXBlJiZlLnNvdXJjZUluZGV4LXQuc291cmNlSW5kZXg7aWYocilyZXR1cm4gcjtpZihuKXdoaWxlKG49bi5uZXh0U2libGluZylpZihuPT09dClyZXR1cm4tMTtyZXR1cm4gZT8xOi0xfWZ1bmN0aW9uIGZlKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm5cImlucHV0XCI9PT10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJnQudHlwZT09PWV9fWZ1bmN0aW9uIHBlKGUpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgbj10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PW58fFwiYnV0dG9uXCI9PT1uKSYmdC50eXBlPT09ZX19ZnVuY3Rpb24gZGUoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVyblwiZm9ybVwiaW4gdD90LnBhcmVudE5vZGUmJiExPT09dC5kaXNhYmxlZD9cImxhYmVsXCJpbiB0P1wibGFiZWxcImluIHQucGFyZW50Tm9kZT90LnBhcmVudE5vZGUuZGlzYWJsZWQ9PT1lOnQuZGlzYWJsZWQ9PT1lOnQuaXNEaXNhYmxlZD09PWV8fHQuaXNEaXNhYmxlZCE9PSFlJiZpZSh0KT09PWU6dC5kaXNhYmxlZD09PWU6XCJsYWJlbFwiaW4gdCYmdC5kaXNhYmxlZD09PWV9fWZ1bmN0aW9uIGhlKGUpe3JldHVybiBzZShmdW5jdGlvbih0KXtyZXR1cm4gdD0rdCxzZShmdW5jdGlvbihuLHIpe3ZhciBpLG89ZShbXSxuLmxlbmd0aCx0KSxhPW8ubGVuZ3RoO3doaWxlKGEtLSluW2k9b1thXV0mJihuW2ldPSEocltpXT1uW2ldKSl9KX0pfWZ1bmN0aW9uIGdlKGUpe3JldHVybiBlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmZX1uPW9lLnN1cHBvcnQ9e30sbz1vZS5pc1hNTD1mdW5jdGlvbihlKXt2YXIgdD1lJiYoZS5vd25lckRvY3VtZW50fHxlKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuISF0JiZcIkhUTUxcIiE9PXQubm9kZU5hbWV9LHA9b2Uuc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oZSl7dmFyIHQsaSxhPWU/ZS5vd25lckRvY3VtZW50fHxlOnc7cmV0dXJuIGEhPT1kJiY5PT09YS5ub2RlVHlwZSYmYS5kb2N1bWVudEVsZW1lbnQ/KGQ9YSxoPWQuZG9jdW1lbnRFbGVtZW50LGc9IW8oZCksdyE9PWQmJihpPWQuZGVmYXVsdFZpZXcpJiZpLnRvcCE9PWkmJihpLmFkZEV2ZW50TGlzdGVuZXI/aS5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIscmUsITEpOmkuYXR0YWNoRXZlbnQmJmkuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLHJlKSksbi5hdHRyaWJ1dGVzPXVlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNsYXNzTmFtZT1cImlcIiwhZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxuLmdldEVsZW1lbnRzQnlUYWdOYW1lPXVlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmFwcGVuZENoaWxkKGQuY3JlYXRlQ29tbWVudChcIlwiKSksIWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLG4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1RLnRlc3QoZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxuLmdldEJ5SWQ9dWUoZnVuY3Rpb24oZSl7cmV0dXJuIGguYXBwZW5kQ2hpbGQoZSkuaWQ9YiwhZC5nZXRFbGVtZW50c0J5TmFtZXx8IWQuZ2V0RWxlbWVudHNCeU5hbWUoYikubGVuZ3RofSksbi5nZXRCeUlkPyhyLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UoWixlZSk7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcImlkXCIpPT09dH19LHIuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRCeUlkJiZnKXt2YXIgbj10LmdldEVsZW1lbnRCeUlkKGUpO3JldHVybiBuP1tuXTpbXX19KTooci5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKFosZWUpO3JldHVybiBmdW5jdGlvbihlKXt2YXIgbj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRBdHRyaWJ1dGVOb2RlJiZlLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gbiYmbi52YWx1ZT09PXR9fSxyLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50QnlJZCYmZyl7dmFyIG4scixpLG89dC5nZXRFbGVtZW50QnlJZChlKTtpZihvKXtpZigobj1vLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSkmJm4udmFsdWU9PT1lKXJldHVybltvXTtpPXQuZ2V0RWxlbWVudHNCeU5hbWUoZSkscj0wO3doaWxlKG89aVtyKytdKWlmKChuPW8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dfXJldHVybltdfX0pLHIuZmluZC5UQUc9bi5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihlLHQpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlUYWdOYW1lP3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk6bi5xc2E/dC5xdWVyeVNlbGVjdG9yQWxsKGUpOnZvaWQgMH06ZnVuY3Rpb24oZSx0KXt2YXIgbixyPVtdLGk9MCxvPXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk7aWYoXCIqXCI9PT1lKXt3aGlsZShuPW9baSsrXSkxPT09bi5ub2RlVHlwZSYmci5wdXNoKG4pO3JldHVybiByfXJldHVybiBvfSxyLmZpbmQuQ0xBU1M9bi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmcpcmV0dXJuIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlKX0sdj1bXSx5PVtdLChuLnFzYT1RLnRlc3QoZC5xdWVyeVNlbGVjdG9yQWxsKSkmJih1ZShmdW5jdGlvbihlKXtoLmFwcGVuZENoaWxkKGUpLmlubmVySFRNTD1cIjxhIGlkPSdcIitiK1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrYitcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGUucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmeS5wdXNoKFwiWypeJF09XCIrTStcIiooPzonJ3xcXFwiXFxcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHkucHVzaChcIlxcXFxbXCIrTStcIiooPzp2YWx1ZXxcIitQK1wiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK2IrXCItXVwiKS5sZW5ndGh8fHkucHVzaChcIn49XCIpLGUucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8eS5wdXNoKFwiOmNoZWNrZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIitiK1wiKypcIikubGVuZ3RofHx5LnB1c2goXCIuIy4rWyt+XVwiKX0pLHVlKGZ1bmN0aW9uKGUpe2UuaW5uZXJIVE1MPVwiPGEgaHJlZj0nJyBkaXNhYmxlZD0nZGlzYWJsZWQnPjwvYT48c2VsZWN0IGRpc2FibGVkPSdkaXNhYmxlZCc+PG9wdGlvbi8+PC9zZWxlY3Q+XCI7dmFyIHQ9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIiksZS5hcHBlbmRDaGlsZCh0KS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJEXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCYmeS5wdXNoKFwibmFtZVwiK00rXCIqWypeJHwhfl0/PVwiKSwyIT09ZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RoJiZ5LnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGguYXBwZW5kQ2hpbGQoZSkuZGlzYWJsZWQ9ITAsMiE9PWUucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGgmJnkucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSx5LnB1c2goXCIsLio6XCIpfSkpLChuLm1hdGNoZXNTZWxlY3Rvcj1RLnRlc3QobT1oLm1hdGNoZXN8fGgud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxoLm1vek1hdGNoZXNTZWxlY3Rvcnx8aC5vTWF0Y2hlc1NlbGVjdG9yfHxoLm1zTWF0Y2hlc1NlbGVjdG9yKSkmJnVlKGZ1bmN0aW9uKGUpe24uZGlzY29ubmVjdGVkTWF0Y2g9bS5jYWxsKGUsXCIqXCIpLG0uY2FsbChlLFwiW3MhPScnXTp4XCIpLHYucHVzaChcIiE9XCIsVyl9KSx5PXkubGVuZ3RoJiZuZXcgUmVnRXhwKHkuam9pbihcInxcIikpLHY9di5sZW5ndGgmJm5ldyBSZWdFeHAodi5qb2luKFwifFwiKSksdD1RLnRlc3QoaC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbikseD10fHxRLnRlc3QoaC5jb250YWlucyk/ZnVuY3Rpb24oZSx0KXt2YXIgbj05PT09ZS5ub2RlVHlwZT9lLmRvY3VtZW50RWxlbWVudDplLHI9dCYmdC5wYXJlbnROb2RlO3JldHVybiBlPT09cnx8ISghcnx8MSE9PXIubm9kZVR5cGV8fCEobi5jb250YWlucz9uLmNvbnRhaW5zKHIpOmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24ocikpKX06ZnVuY3Rpb24oZSx0KXtpZih0KXdoaWxlKHQ9dC5wYXJlbnROb2RlKWlmKHQ9PT1lKXJldHVybiEwO3JldHVybiExfSxEPXQ/ZnVuY3Rpb24oZSx0KXtpZihlPT09dClyZXR1cm4gZj0hMCwwO3ZhciByPSFlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSF0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiByfHwoMSYocj0oZS5vd25lckRvY3VtZW50fHxlKT09PSh0Lm93bmVyRG9jdW1lbnR8fHQpP2UuY29tcGFyZURvY3VtZW50UG9zaXRpb24odCk6MSl8fCFuLnNvcnREZXRhY2hlZCYmdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKT09PXI/ZT09PWR8fGUub3duZXJEb2N1bWVudD09PXcmJngodyxlKT8tMTp0PT09ZHx8dC5vd25lckRvY3VtZW50PT09dyYmeCh3LHQpPzE6Yz9PKGMsZSktTyhjLHQpOjA6NCZyPy0xOjEpfTpmdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBmPSEwLDA7dmFyIG4scj0wLGk9ZS5wYXJlbnROb2RlLG89dC5wYXJlbnROb2RlLGE9W2VdLHM9W3RdO2lmKCFpfHwhbylyZXR1cm4gZT09PWQ/LTE6dD09PWQ/MTppPy0xOm8/MTpjP08oYyxlKS1PKGMsdCk6MDtpZihpPT09bylyZXR1cm4gY2UoZSx0KTtuPWU7d2hpbGUobj1uLnBhcmVudE5vZGUpYS51bnNoaWZ0KG4pO249dDt3aGlsZShuPW4ucGFyZW50Tm9kZSlzLnVuc2hpZnQobik7d2hpbGUoYVtyXT09PXNbcl0pcisrO3JldHVybiByP2NlKGFbcl0sc1tyXSk6YVtyXT09PXc/LTE6c1tyXT09PXc/MTowfSxkKTpkfSxvZS5tYXRjaGVzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG9lKGUsbnVsbCxudWxsLHQpfSxvZS5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oZSx0KXtpZigoZS5vd25lckRvY3VtZW50fHxlKSE9PWQmJnAoZSksdD10LnJlcGxhY2UoeixcIj0nJDEnXVwiKSxuLm1hdGNoZXNTZWxlY3RvciYmZyYmIVNbdCtcIiBcIl0mJighdnx8IXYudGVzdCh0KSkmJigheXx8IXkudGVzdCh0KSkpdHJ5e3ZhciByPW0uY2FsbChlLHQpO2lmKHJ8fG4uZGlzY29ubmVjdGVkTWF0Y2h8fGUuZG9jdW1lbnQmJjExIT09ZS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gcn1jYXRjaChlKXt9cmV0dXJuIG9lKHQsZCxudWxsLFtlXSkubGVuZ3RoPjB9LG9lLmNvbnRhaW5zPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKGUub3duZXJEb2N1bWVudHx8ZSkhPT1kJiZwKGUpLHgoZSx0KX0sb2UuYXR0cj1mdW5jdGlvbihlLHQpeyhlLm93bmVyRG9jdW1lbnR8fGUpIT09ZCYmcChlKTt2YXIgaT1yLmF0dHJIYW5kbGVbdC50b0xvd2VyQ2FzZSgpXSxvPWkmJk4uY2FsbChyLmF0dHJIYW5kbGUsdC50b0xvd2VyQ2FzZSgpKT9pKGUsdCwhZyk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1vP286bi5hdHRyaWJ1dGVzfHwhZz9lLmdldEF0dHJpYnV0ZSh0KToobz1lLmdldEF0dHJpYnV0ZU5vZGUodCkpJiZvLnNwZWNpZmllZD9vLnZhbHVlOm51bGx9LG9lLmVzY2FwZT1mdW5jdGlvbihlKXtyZXR1cm4oZStcIlwiKS5yZXBsYWNlKHRlLG5lKX0sb2UuZXJyb3I9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrZSl9LG9lLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oZSl7dmFyIHQscj1bXSxpPTAsbz0wO2lmKGY9IW4uZGV0ZWN0RHVwbGljYXRlcyxjPSFuLnNvcnRTdGFibGUmJmUuc2xpY2UoMCksZS5zb3J0KEQpLGYpe3doaWxlKHQ9ZVtvKytdKXQ9PT1lW29dJiYoaT1yLnB1c2gobykpO3doaWxlKGktLSllLnNwbGljZShyW2ldLDEpfXJldHVybiBjPW51bGwsZX0saT1vZS5nZXRUZXh0PWZ1bmN0aW9uKGUpe3ZhciB0LG49XCJcIixyPTAsbz1lLm5vZGVUeXBlO2lmKG8pe2lmKDE9PT1vfHw5PT09b3x8MTE9PT1vKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZS50ZXh0Q29udGVudClyZXR1cm4gZS50ZXh0Q29udGVudDtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpbis9aShlKX1lbHNlIGlmKDM9PT1vfHw0PT09bylyZXR1cm4gZS5ub2RlVmFsdWV9ZWxzZSB3aGlsZSh0PWVbcisrXSluKz1pKHQpO3JldHVybiBufSwocj1vZS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzpzZSxtYXRjaDpWLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS5yZXBsYWNlKFosZWUpLGVbM109KGVbM118fGVbNF18fGVbNV18fFwiXCIpLnJlcGxhY2UoWixlZSksXCJ+PVwiPT09ZVsyXSYmKGVbM109XCIgXCIrZVszXStcIiBcIiksZS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWVbMV0uc2xpY2UoMCwzKT8oZVszXXx8b2UuZXJyb3IoZVswXSksZVs0XT0rKGVbNF0/ZVs1XSsoZVs2XXx8MSk6MiooXCJldmVuXCI9PT1lWzNdfHxcIm9kZFwiPT09ZVszXSkpLGVbNV09KyhlWzddK2VbOF18fFwib2RkXCI9PT1lWzNdKSk6ZVszXSYmb2UuZXJyb3IoZVswXSksZX0sUFNFVURPOmZ1bmN0aW9uKGUpe3ZhciB0LG49IWVbNl0mJmVbMl07cmV0dXJuIFYuQ0hJTEQudGVzdChlWzBdKT9udWxsOihlWzNdP2VbMl09ZVs0XXx8ZVs1XXx8XCJcIjpuJiZYLnRlc3QobikmJih0PWEobiwhMCkpJiYodD1uLmluZGV4T2YoXCIpXCIsbi5sZW5ndGgtdCktbi5sZW5ndGgpJiYoZVswXT1lWzBdLnNsaWNlKDAsdCksZVsyXT1uLnNsaWNlKDAsdCkpLGUuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UoWixlZSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWU/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oZSl7cmV0dXJuIGUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXR9fSxDTEFTUzpmdW5jdGlvbihlKXt2YXIgdD1FW2UrXCIgXCJdO3JldHVybiB0fHwodD1uZXcgUmVnRXhwKFwiKF58XCIrTStcIilcIitlK1wiKFwiK00rXCJ8JClcIikpJiZFKGUsZnVuY3Rpb24oZSl7cmV0dXJuIHQudGVzdChcInN0cmluZ1wiPT10eXBlb2YgZS5jbGFzc05hbWUmJmUuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBmdW5jdGlvbihyKXt2YXIgaT1vZS5hdHRyKHIsZSk7cmV0dXJuIG51bGw9PWk/XCIhPVwiPT09dDohdHx8KGkrPVwiXCIsXCI9XCI9PT10P2k9PT1uOlwiIT1cIj09PXQ/aSE9PW46XCJePVwiPT09dD9uJiYwPT09aS5pbmRleE9mKG4pOlwiKj1cIj09PXQ/biYmaS5pbmRleE9mKG4pPi0xOlwiJD1cIj09PXQ/biYmaS5zbGljZSgtbi5sZW5ndGgpPT09bjpcIn49XCI9PT10PyhcIiBcIitpLnJlcGxhY2UoJCxcIiBcIikrXCIgXCIpLmluZGV4T2Yobik+LTE6XCJ8PVwiPT09dCYmKGk9PT1ufHxpLnNsaWNlKDAsbi5sZW5ndGgrMSk9PT1uK1wiLVwiKSl9fSxDSElMRDpmdW5jdGlvbihlLHQsbixyLGkpe3ZhciBvPVwibnRoXCIhPT1lLnNsaWNlKDAsMyksYT1cImxhc3RcIiE9PWUuc2xpY2UoLTQpLHM9XCJvZi10eXBlXCI9PT10O3JldHVybiAxPT09ciYmMD09PWk/ZnVuY3Rpb24oZSl7cmV0dXJuISFlLnBhcmVudE5vZGV9OmZ1bmN0aW9uKHQsbix1KXt2YXIgbCxjLGYscCxkLGgsZz1vIT09YT9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIix5PXQucGFyZW50Tm9kZSx2PXMmJnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxtPSF1JiYhcyx4PSExO2lmKHkpe2lmKG8pe3doaWxlKGcpe3A9dDt3aGlsZShwPXBbZ10paWYocz9wLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT12OjE9PT1wLm5vZGVUeXBlKXJldHVybiExO2g9Zz1cIm9ubHlcIj09PWUmJiFoJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYoaD1bYT95LmZpcnN0Q2hpbGQ6eS5sYXN0Q2hpbGRdLGEmJm0pe3g9KGQ9KGw9KGM9KGY9KHA9eSlbYl18fChwW2JdPXt9KSlbcC51bmlxdWVJRF18fChmW3AudW5pcXVlSURdPXt9KSlbZV18fFtdKVswXT09PVQmJmxbMV0pJiZsWzJdLHA9ZCYmeS5jaGlsZE5vZGVzW2RdO3doaWxlKHA9KytkJiZwJiZwW2ddfHwoeD1kPTApfHxoLnBvcCgpKWlmKDE9PT1wLm5vZGVUeXBlJiYrK3gmJnA9PT10KXtjW2VdPVtULGQseF07YnJlYWt9fWVsc2UgaWYobSYmKHg9ZD0obD0oYz0oZj0ocD10KVtiXXx8KHBbYl09e30pKVtwLnVuaXF1ZUlEXXx8KGZbcC51bmlxdWVJRF09e30pKVtlXXx8W10pWzBdPT09VCYmbFsxXSksITE9PT14KXdoaWxlKHA9KytkJiZwJiZwW2ddfHwoeD1kPTApfHxoLnBvcCgpKWlmKChzP3Aubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXY6MT09PXAubm9kZVR5cGUpJiYrK3gmJihtJiYoKGM9KGY9cFtiXXx8KHBbYl09e30pKVtwLnVuaXF1ZUlEXXx8KGZbcC51bmlxdWVJRF09e30pKVtlXT1bVCx4XSkscD09PXQpKWJyZWFrO3JldHVybih4LT1pKT09PXJ8fHglcj09MCYmeC9yPj0wfX19LFBTRVVETzpmdW5jdGlvbihlLHQpe3ZhciBuLGk9ci5wc2V1ZG9zW2VdfHxyLnNldEZpbHRlcnNbZS50b0xvd2VyQ2FzZSgpXXx8b2UuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2UpO3JldHVybiBpW2JdP2kodCk6aS5sZW5ndGg+MT8obj1bZSxlLFwiXCIsdF0sci5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGUudG9Mb3dlckNhc2UoKSk/c2UoZnVuY3Rpb24oZSxuKXt2YXIgcixvPWkoZSx0KSxhPW8ubGVuZ3RoO3doaWxlKGEtLSllW3I9TyhlLG9bYV0pXT0hKG5bcl09b1thXSl9KTpmdW5jdGlvbihlKXtyZXR1cm4gaShlLDAsbil9KTppfX0scHNldWRvczp7bm90OnNlKGZ1bmN0aW9uKGUpe3ZhciB0PVtdLG49W10scj1zKGUucmVwbGFjZShCLFwiJDFcIikpO3JldHVybiByW2JdP3NlKGZ1bmN0aW9uKGUsdCxuLGkpe3ZhciBvLGE9cihlLG51bGwsaSxbXSkscz1lLmxlbmd0aDt3aGlsZShzLS0pKG89YVtzXSkmJihlW3NdPSEodFtzXT1vKSl9KTpmdW5jdGlvbihlLGksbyl7cmV0dXJuIHRbMF09ZSxyKHQsbnVsbCxvLG4pLHRbMF09bnVsbCwhbi5wb3AoKX19KSxoYXM6c2UoZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBvZShlLHQpLmxlbmd0aD4wfX0pLGNvbnRhaW5zOnNlKGZ1bmN0aW9uKGUpe3JldHVybiBlPWUucmVwbGFjZShaLGVlKSxmdW5jdGlvbih0KXtyZXR1cm4odC50ZXh0Q29udGVudHx8dC5pbm5lclRleHR8fGkodCkpLmluZGV4T2YoZSk+LTF9fSksbGFuZzpzZShmdW5jdGlvbihlKXtyZXR1cm4gVS50ZXN0KGV8fFwiXCIpfHxvZS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2UpLGU9ZS5yZXBsYWNlKFosZWUpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24odCl7dmFyIG47ZG97aWYobj1nP3QubGFuZzp0LmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHx0LmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuKG49bi50b0xvd2VyQ2FzZSgpKT09PWV8fDA9PT1uLmluZGV4T2YoZStcIi1cIil9d2hpbGUoKHQ9dC5wYXJlbnROb2RlKSYmMT09PXQubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbih0KXt2YXIgbj1lLmxvY2F0aW9uJiZlLmxvY2F0aW9uLmhhc2g7cmV0dXJuIG4mJm4uc2xpY2UoMSk9PT10LmlkfSxyb290OmZ1bmN0aW9uKGUpe3JldHVybiBlPT09aH0sZm9jdXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1kLmFjdGl2ZUVsZW1lbnQmJighZC5oYXNGb2N1c3x8ZC5oYXNGb2N1cygpKSYmISEoZS50eXBlfHxlLmhyZWZ8fH5lLnRhYkluZGV4KX0sZW5hYmxlZDpkZSghMSksZGlzYWJsZWQ6ZGUoITApLGNoZWNrZWQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PXQmJiEhZS5jaGVja2VkfHxcIm9wdGlvblwiPT09dCYmISFlLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXJlbnROb2RlJiZlLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCwhMD09PWUuc2VsZWN0ZWR9LGVtcHR5OmZ1bmN0aW9uKGUpe2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZylpZihlLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihlKXtyZXR1cm4hci5wc2V1ZG9zLmVtcHR5KGUpfSxoZWFkZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIFkudGVzdChlLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIEcudGVzdChlLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiZcImJ1dHRvblwiPT09ZS50eXBlfHxcImJ1dHRvblwiPT09dH0sdGV4dDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm5cImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09ZS50eXBlJiYobnVsbD09KHQ9ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT10LnRvTG93ZXJDYXNlKCkpfSxmaXJzdDpoZShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6aGUoZnVuY3Rpb24oZSx0KXtyZXR1cm5bdC0xXX0pLGVxOmhlKGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm5bbjwwP24rdDpuXX0pLGV2ZW46aGUoZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MDtuPHQ7bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxvZGQ6aGUoZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MTtuPHQ7bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxsdDpoZShmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPW48MD9uK3Q6bjstLXI+PTA7KWUucHVzaChyKTtyZXR1cm4gZX0pLGd0OmhlKGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9bjwwP24rdDpuOysrcjx0OyllLnB1c2gocik7cmV0dXJuIGV9KX19KS5wc2V1ZG9zLm50aD1yLnBzZXVkb3MuZXE7Zm9yKHQgaW57cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pci5wc2V1ZG9zW3RdPWZlKHQpO2Zvcih0IGlue3N1Ym1pdDohMCxyZXNldDohMH0pci5wc2V1ZG9zW3RdPXBlKHQpO2Z1bmN0aW9uIHllKCl7fXllLnByb3RvdHlwZT1yLmZpbHRlcnM9ci5wc2V1ZG9zLHIuc2V0RmlsdGVycz1uZXcgeWUsYT1vZS50b2tlbml6ZT1mdW5jdGlvbihlLHQpe3ZhciBuLGksbyxhLHMsdSxsLGM9a1tlK1wiIFwiXTtpZihjKXJldHVybiB0PzA6Yy5zbGljZSgwKTtzPWUsdT1bXSxsPXIucHJlRmlsdGVyO3doaWxlKHMpe24mJiEoaT1GLmV4ZWMocykpfHwoaSYmKHM9cy5zbGljZShpWzBdLmxlbmd0aCl8fHMpLHUucHVzaChvPVtdKSksbj0hMSwoaT1fLmV4ZWMocykpJiYobj1pLnNoaWZ0KCksby5wdXNoKHt2YWx1ZTpuLHR5cGU6aVswXS5yZXBsYWNlKEIsXCIgXCIpfSkscz1zLnNsaWNlKG4ubGVuZ3RoKSk7Zm9yKGEgaW4gci5maWx0ZXIpIShpPVZbYV0uZXhlYyhzKSl8fGxbYV0mJiEoaT1sW2FdKGkpKXx8KG49aS5zaGlmdCgpLG8ucHVzaCh7dmFsdWU6bix0eXBlOmEsbWF0Y2hlczppfSkscz1zLnNsaWNlKG4ubGVuZ3RoKSk7aWYoIW4pYnJlYWt9cmV0dXJuIHQ/cy5sZW5ndGg6cz9vZS5lcnJvcihlKTprKGUsdSkuc2xpY2UoMCl9O2Z1bmN0aW9uIHZlKGUpe2Zvcih2YXIgdD0wLG49ZS5sZW5ndGgscj1cIlwiO3Q8bjt0Kyspcis9ZVt0XS52YWx1ZTtyZXR1cm4gcn1mdW5jdGlvbiBtZShlLHQsbil7dmFyIHI9dC5kaXIsaT10Lm5leHQsbz1pfHxyLGE9biYmXCJwYXJlbnROb2RlXCI9PT1vLHM9QysrO3JldHVybiB0LmZpcnN0P2Z1bmN0aW9uKHQsbixpKXt3aGlsZSh0PXRbcl0paWYoMT09PXQubm9kZVR5cGV8fGEpcmV0dXJuIGUodCxuLGkpO3JldHVybiExfTpmdW5jdGlvbih0LG4sdSl7dmFyIGwsYyxmLHA9W1Qsc107aWYodSl7d2hpbGUodD10W3JdKWlmKCgxPT09dC5ub2RlVHlwZXx8YSkmJmUodCxuLHUpKXJldHVybiEwfWVsc2Ugd2hpbGUodD10W3JdKWlmKDE9PT10Lm5vZGVUeXBlfHxhKWlmKGY9dFtiXXx8KHRbYl09e30pLGM9Zlt0LnVuaXF1ZUlEXXx8KGZbdC51bmlxdWVJRF09e30pLGkmJmk9PT10Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpdD10W3JdfHx0O2Vsc2V7aWYoKGw9Y1tvXSkmJmxbMF09PT1UJiZsWzFdPT09cylyZXR1cm4gcFsyXT1sWzJdO2lmKGNbb109cCxwWzJdPWUodCxuLHUpKXJldHVybiEwfXJldHVybiExfX1mdW5jdGlvbiB4ZShlKXtyZXR1cm4gZS5sZW5ndGg+MT9mdW5jdGlvbih0LG4scil7dmFyIGk9ZS5sZW5ndGg7d2hpbGUoaS0tKWlmKCFlW2ldKHQsbixyKSlyZXR1cm4hMTtyZXR1cm4hMH06ZVswXX1mdW5jdGlvbiBiZShlLHQsbil7Zm9yKHZhciByPTAsaT10Lmxlbmd0aDtyPGk7cisrKW9lKGUsdFtyXSxuKTtyZXR1cm4gbn1mdW5jdGlvbiB3ZShlLHQsbixyLGkpe2Zvcih2YXIgbyxhPVtdLHM9MCx1PWUubGVuZ3RoLGw9bnVsbCE9dDtzPHU7cysrKShvPWVbc10pJiYobiYmIW4obyxyLGkpfHwoYS5wdXNoKG8pLGwmJnQucHVzaChzKSkpO3JldHVybiBhfWZ1bmN0aW9uIFRlKGUsdCxuLHIsaSxvKXtyZXR1cm4gciYmIXJbYl0mJihyPVRlKHIpKSxpJiYhaVtiXSYmKGk9VGUoaSxvKSksc2UoZnVuY3Rpb24obyxhLHMsdSl7dmFyIGwsYyxmLHA9W10sZD1bXSxoPWEubGVuZ3RoLGc9b3x8YmUodHx8XCIqXCIscy5ub2RlVHlwZT9bc106cyxbXSkseT0hZXx8IW8mJnQ/Zzp3ZShnLHAsZSxzLHUpLHY9bj9pfHwobz9lOmh8fHIpP1tdOmE6eTtpZihuJiZuKHksdixzLHUpLHIpe2w9d2UodixkKSxyKGwsW10scyx1KSxjPWwubGVuZ3RoO3doaWxlKGMtLSkoZj1sW2NdKSYmKHZbZFtjXV09ISh5W2RbY11dPWYpKX1pZihvKXtpZihpfHxlKXtpZihpKXtsPVtdLGM9di5sZW5ndGg7d2hpbGUoYy0tKShmPXZbY10pJiZsLnB1c2goeVtjXT1mKTtpKG51bGwsdj1bXSxsLHUpfWM9di5sZW5ndGg7d2hpbGUoYy0tKShmPXZbY10pJiYobD1pP08obyxmKTpwW2NdKT4tMSYmKG9bbF09IShhW2xdPWYpKX19ZWxzZSB2PXdlKHY9PT1hP3Yuc3BsaWNlKGgsdi5sZW5ndGgpOnYpLGk/aShudWxsLGEsdix1KTpMLmFwcGx5KGEsdil9KX1mdW5jdGlvbiBDZShlKXtmb3IodmFyIHQsbixpLG89ZS5sZW5ndGgsYT1yLnJlbGF0aXZlW2VbMF0udHlwZV0scz1hfHxyLnJlbGF0aXZlW1wiIFwiXSx1PWE/MTowLGM9bWUoZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT10fSxzLCEwKSxmPW1lKGZ1bmN0aW9uKGUpe3JldHVybiBPKHQsZSk+LTF9LHMsITApLHA9W2Z1bmN0aW9uKGUsbixyKXt2YXIgaT0hYSYmKHJ8fG4hPT1sKXx8KCh0PW4pLm5vZGVUeXBlP2MoZSxuLHIpOmYoZSxuLHIpKTtyZXR1cm4gdD1udWxsLGl9XTt1PG87dSsrKWlmKG49ci5yZWxhdGl2ZVtlW3VdLnR5cGVdKXA9W21lKHhlKHApLG4pXTtlbHNle2lmKChuPXIuZmlsdGVyW2VbdV0udHlwZV0uYXBwbHkobnVsbCxlW3VdLm1hdGNoZXMpKVtiXSl7Zm9yKGk9Kyt1O2k8bztpKyspaWYoci5yZWxhdGl2ZVtlW2ldLnR5cGVdKWJyZWFrO3JldHVybiBUZSh1PjEmJnhlKHApLHU+MSYmdmUoZS5zbGljZSgwLHUtMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWVbdS0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShCLFwiJDFcIiksbix1PGkmJkNlKGUuc2xpY2UodSxpKSksaTxvJiZDZShlPWUuc2xpY2UoaSkpLGk8byYmdmUoZSkpfXAucHVzaChuKX1yZXR1cm4geGUocCl9ZnVuY3Rpb24gRWUoZSx0KXt2YXIgbj10Lmxlbmd0aD4wLGk9ZS5sZW5ndGg+MCxvPWZ1bmN0aW9uKG8sYSxzLHUsYyl7dmFyIGYsaCx5LHY9MCxtPVwiMFwiLHg9byYmW10sYj1bXSx3PWwsQz1vfHxpJiZyLmZpbmQuVEFHKFwiKlwiLGMpLEU9VCs9bnVsbD09dz8xOk1hdGgucmFuZG9tKCl8fC4xLGs9Qy5sZW5ndGg7Zm9yKGMmJihsPWE9PT1kfHxhfHxjKTttIT09ayYmbnVsbCE9KGY9Q1ttXSk7bSsrKXtpZihpJiZmKXtoPTAsYXx8Zi5vd25lckRvY3VtZW50PT09ZHx8KHAoZikscz0hZyk7d2hpbGUoeT1lW2grK10paWYoeShmLGF8fGQscykpe3UucHVzaChmKTticmVha31jJiYoVD1FKX1uJiYoKGY9IXkmJmYpJiZ2LS0sbyYmeC5wdXNoKGYpKX1pZih2Kz1tLG4mJm0hPT12KXtoPTA7d2hpbGUoeT10W2grK10peSh4LGIsYSxzKTtpZihvKXtpZih2PjApd2hpbGUobS0tKXhbbV18fGJbbV18fChiW21dPWouY2FsbCh1KSk7Yj13ZShiKX1MLmFwcGx5KHUsYiksYyYmIW8mJmIubGVuZ3RoPjAmJnYrdC5sZW5ndGg+MSYmb2UudW5pcXVlU29ydCh1KX1yZXR1cm4gYyYmKFQ9RSxsPXcpLHh9O3JldHVybiBuP3NlKG8pOm99cmV0dXJuIHM9b2UuY29tcGlsZT1mdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT1bXSxvPVNbZStcIiBcIl07aWYoIW8pe3R8fCh0PWEoZSkpLG49dC5sZW5ndGg7d2hpbGUobi0tKShvPUNlKHRbbl0pKVtiXT9yLnB1c2gobyk6aS5wdXNoKG8pOyhvPVMoZSxFZShpLHIpKSkuc2VsZWN0b3I9ZX1yZXR1cm4gb30sdT1vZS5zZWxlY3Q9ZnVuY3Rpb24oZSx0LG4saSl7dmFyIG8sdSxsLGMsZixwPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUsZD0haSYmYShlPXAuc2VsZWN0b3J8fGUpO2lmKG49bnx8W10sMT09PWQubGVuZ3RoKXtpZigodT1kWzBdPWRbMF0uc2xpY2UoMCkpLmxlbmd0aD4yJiZcIklEXCI9PT0obD11WzBdKS50eXBlJiY5PT09dC5ub2RlVHlwZSYmZyYmci5yZWxhdGl2ZVt1WzFdLnR5cGVdKXtpZighKHQ9KHIuZmluZC5JRChsLm1hdGNoZXNbMF0ucmVwbGFjZShaLGVlKSx0KXx8W10pWzBdKSlyZXR1cm4gbjtwJiYodD10LnBhcmVudE5vZGUpLGU9ZS5zbGljZSh1LnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1vPVYubmVlZHNDb250ZXh0LnRlc3QoZSk/MDp1Lmxlbmd0aDt3aGlsZShvLS0pe2lmKGw9dVtvXSxyLnJlbGF0aXZlW2M9bC50eXBlXSlicmVhaztpZigoZj1yLmZpbmRbY10pJiYoaT1mKGwubWF0Y2hlc1swXS5yZXBsYWNlKFosZWUpLEsudGVzdCh1WzBdLnR5cGUpJiZnZSh0LnBhcmVudE5vZGUpfHx0KSkpe2lmKHUuc3BsaWNlKG8sMSksIShlPWkubGVuZ3RoJiZ2ZSh1KSkpcmV0dXJuIEwuYXBwbHkobixpKSxuO2JyZWFrfX19cmV0dXJuKHB8fHMoZSxkKSkoaSx0LCFnLG4sIXR8fEsudGVzdChlKSYmZ2UodC5wYXJlbnROb2RlKXx8dCksbn0sbi5zb3J0U3RhYmxlPWIuc3BsaXQoXCJcIikuc29ydChEKS5qb2luKFwiXCIpPT09YixuLmRldGVjdER1cGxpY2F0ZXM9ISFmLHAoKSxuLnNvcnREZXRhY2hlZD11ZShmdW5jdGlvbihlKXtyZXR1cm4gMSZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpKX0pLHVlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGxlKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbilyZXR1cm4gZS5nZXRBdHRyaWJ1dGUodCxcInR5cGVcIj09PXQudG9Mb3dlckNhc2UoKT8xOjIpfSksbi5hdHRyaWJ1dGVzJiZ1ZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGUuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8bGUoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbiYmXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXJldHVybiBlLmRlZmF1bHRWYWx1ZX0pLHVlKGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGxlKFAsZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKCFuKXJldHVybiEwPT09ZVt0XT90LnRvTG93ZXJDYXNlKCk6KHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSYmci5zcGVjaWZpZWQ/ci52YWx1ZTpudWxsfSksb2V9KGUpO3cuZmluZD1FLHcuZXhwcj1FLnNlbGVjdG9ycyx3LmV4cHJbXCI6XCJdPXcuZXhwci5wc2V1ZG9zLHcudW5pcXVlU29ydD13LnVuaXF1ZT1FLnVuaXF1ZVNvcnQsdy50ZXh0PUUuZ2V0VGV4dCx3LmlzWE1MRG9jPUUuaXNYTUwsdy5jb250YWlucz1FLmNvbnRhaW5zLHcuZXNjYXBlU2VsZWN0b3I9RS5lc2NhcGU7dmFyIGs9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVtdLGk9dm9pZCAwIT09bjt3aGlsZSgoZT1lW3RdKSYmOSE9PWUubm9kZVR5cGUpaWYoMT09PWUubm9kZVR5cGUpe2lmKGkmJncoZSkuaXMobikpYnJlYWs7ci5wdXNoKGUpfXJldHVybiByfSxTPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPVtdO2U7ZT1lLm5leHRTaWJsaW5nKTE9PT1lLm5vZGVUeXBlJiZlIT09dCYmbi5wdXNoKGUpO3JldHVybiBufSxEPXcuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7ZnVuY3Rpb24gTihlLHQpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10LnRvTG93ZXJDYXNlKCl9dmFyIEE9L148KFthLXpdW15cXC9cXDA+OlxceDIwXFx0XFxyXFxuXFxmXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXC8/Pig/OjxcXC9cXDE+fCkkL2k7ZnVuY3Rpb24gaihlLHQsbil7cmV0dXJuIGcodCk/dy5ncmVwKGUsZnVuY3Rpb24oZSxyKXtyZXR1cm4hIXQuY2FsbChlLHIsZSkhPT1ufSk6dC5ub2RlVHlwZT93LmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4gZT09PXQhPT1ufSk6XCJzdHJpbmdcIiE9dHlwZW9mIHQ/dy5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuIHUuY2FsbCh0LGUpPi0xIT09bn0pOncuZmlsdGVyKHQsZSxuKX13LmZpbHRlcj1mdW5jdGlvbihlLHQsbil7dmFyIHI9dFswXTtyZXR1cm4gbiYmKGU9XCI6bm90KFwiK2UrXCIpXCIpLDE9PT10Lmxlbmd0aCYmMT09PXIubm9kZVR5cGU/dy5maW5kLm1hdGNoZXNTZWxlY3RvcihyLGUpP1tyXTpbXTp3LmZpbmQubWF0Y2hlcyhlLHcuZ3JlcCh0LGZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZX0pKX0sdy5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPXRoaXMubGVuZ3RoLGk9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gdGhpcy5wdXNoU3RhY2sodyhlKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodD0wO3Q8cjt0KyspaWYody5jb250YWlucyhpW3RdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihuPXRoaXMucHVzaFN0YWNrKFtdKSx0PTA7dDxyO3QrKyl3LmZpbmQoZSxpW3RdLG4pO3JldHVybiByPjE/dy51bmlxdWVTb3J0KG4pOm59LGZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaih0aGlzLGV8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaih0aGlzLGV8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGUpe3JldHVybiEhaih0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBlJiZELnRlc3QoZSk/dyhlKTplfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBxLEw9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC87KHcuZm4uaW5pdD1mdW5jdGlvbihlLHQsbil7dmFyIGksbztpZighZSlyZXR1cm4gdGhpcztpZihuPW58fHEsXCJzdHJpbmdcIj09dHlwZW9mIGUpe2lmKCEoaT1cIjxcIj09PWVbMF0mJlwiPlwiPT09ZVtlLmxlbmd0aC0xXSYmZS5sZW5ndGg+PTM/W251bGwsZSxudWxsXTpMLmV4ZWMoZSkpfHwhaVsxXSYmdClyZXR1cm4hdHx8dC5qcXVlcnk/KHR8fG4pLmZpbmQoZSk6dGhpcy5jb25zdHJ1Y3Rvcih0KS5maW5kKGUpO2lmKGlbMV0pe2lmKHQ9dCBpbnN0YW5jZW9mIHc/dFswXTp0LHcubWVyZ2UodGhpcyx3LnBhcnNlSFRNTChpWzFdLHQmJnQubm9kZVR5cGU/dC5vd25lckRvY3VtZW50fHx0OnIsITApKSxBLnRlc3QoaVsxXSkmJncuaXNQbGFpbk9iamVjdCh0KSlmb3IoaSBpbiB0KWcodGhpc1tpXSk/dGhpc1tpXSh0W2ldKTp0aGlzLmF0dHIoaSx0W2ldKTtyZXR1cm4gdGhpc31yZXR1cm4obz1yLmdldEVsZW1lbnRCeUlkKGlbMl0pKSYmKHRoaXNbMF09byx0aGlzLmxlbmd0aD0xKSx0aGlzfXJldHVybiBlLm5vZGVUeXBlPyh0aGlzWzBdPWUsdGhpcy5sZW5ndGg9MSx0aGlzKTpnKGUpP3ZvaWQgMCE9PW4ucmVhZHk/bi5yZWFkeShlKTplKHcpOncubWFrZUFycmF5KGUsdGhpcyl9KS5wcm90b3R5cGU9dy5mbixxPXcocik7dmFyIEg9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sTz17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTt3LmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGUpe3ZhciB0PXcoZSx0aGlzKSxuPXQubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8bjtlKyspaWYody5jb250YWlucyh0aGlzLHRbZV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10aGlzLmxlbmd0aCxvPVtdLGE9XCJzdHJpbmdcIiE9dHlwZW9mIGUmJncoZSk7aWYoIUQudGVzdChlKSlmb3IoO3I8aTtyKyspZm9yKG49dGhpc1tyXTtuJiZuIT09dDtuPW4ucGFyZW50Tm9kZSlpZihuLm5vZGVUeXBlPDExJiYoYT9hLmluZGV4KG4pPi0xOjE9PT1uLm5vZGVUeXBlJiZ3LmZpbmQubWF0Y2hlc1NlbGVjdG9yKG4sZSkpKXtvLnB1c2gobik7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKG8ubGVuZ3RoPjE/dy51bmlxdWVTb3J0KG8pOm8pfSxpbmRleDpmdW5jdGlvbihlKXtyZXR1cm4gZT9cInN0cmluZ1wiPT10eXBlb2YgZT91LmNhbGwodyhlKSx0aGlzWzBdKTp1LmNhbGwodGhpcyxlLmpxdWVyeT9lWzBdOmUpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHcudW5pcXVlU29ydCh3Lm1lcmdlKHRoaXMuZ2V0KCksdyhlLHQpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmFkZChudWxsPT1lP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGUpKX19KTtmdW5jdGlvbiBQKGUsdCl7d2hpbGUoKGU9ZVt0XSkmJjEhPT1lLm5vZGVUeXBlKTtyZXR1cm4gZX13LmVhY2goe3BhcmVudDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJjExIT09dC5ub2RlVHlwZT90Om51bGx9LHBhcmVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIGsoZSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGsoZSxcInBhcmVudE5vZGVcIixuKX0sbmV4dDpmdW5jdGlvbihlKXtyZXR1cm4gUChlLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oZSl7cmV0dXJuIFAoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihlKXtyZXR1cm4gayhlLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIGsoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gayhlLFwibmV4dFNpYmxpbmdcIixuKX0scHJldlVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gayhlLFwicHJldmlvdXNTaWJsaW5nXCIsbil9LHNpYmxpbmdzOmZ1bmN0aW9uKGUpe3JldHVybiBTKChlLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGUpfSxjaGlsZHJlbjpmdW5jdGlvbihlKXtyZXR1cm4gUyhlLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihlKXtyZXR1cm4gTihlLFwiaWZyYW1lXCIpP2UuY29udGVudERvY3VtZW50OihOKGUsXCJ0ZW1wbGF0ZVwiKSYmKGU9ZS5jb250ZW50fHxlKSx3Lm1lcmdlKFtdLGUuY2hpbGROb2RlcykpfX0sZnVuY3Rpb24oZSx0KXt3LmZuW2VdPWZ1bmN0aW9uKG4scil7dmFyIGk9dy5tYXAodGhpcyx0LG4pO3JldHVyblwiVW50aWxcIiE9PWUuc2xpY2UoLTUpJiYocj1uKSxyJiZcInN0cmluZ1wiPT10eXBlb2YgciYmKGk9dy5maWx0ZXIocixpKSksdGhpcy5sZW5ndGg+MSYmKE9bZV18fHcudW5pcXVlU29ydChpKSxILnRlc3QoZSkmJmkucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhpKX19KTt2YXIgTT0vW15cXHgyMFxcdFxcclxcblxcZl0rL2c7ZnVuY3Rpb24gUihlKXt2YXIgdD17fTtyZXR1cm4gdy5lYWNoKGUubWF0Y2goTSl8fFtdLGZ1bmN0aW9uKGUsbil7dFtuXT0hMH0pLHR9dy5DYWxsYmFja3M9ZnVuY3Rpb24oZSl7ZT1cInN0cmluZ1wiPT10eXBlb2YgZT9SKGUpOncuZXh0ZW5kKHt9LGUpO3ZhciB0LG4scixpLG89W10sYT1bXSxzPS0xLHU9ZnVuY3Rpb24oKXtmb3IoaT1pfHxlLm9uY2Uscj10PSEwO2EubGVuZ3RoO3M9LTEpe249YS5zaGlmdCgpO3doaWxlKCsrczxvLmxlbmd0aCkhMT09PW9bc10uYXBwbHkoblswXSxuWzFdKSYmZS5zdG9wT25GYWxzZSYmKHM9by5sZW5ndGgsbj0hMSl9ZS5tZW1vcnl8fChuPSExKSx0PSExLGkmJihvPW4/W106XCJcIil9LGw9e2FkZDpmdW5jdGlvbigpe3JldHVybiBvJiYobiYmIXQmJihzPW8ubGVuZ3RoLTEsYS5wdXNoKG4pKSxmdW5jdGlvbiB0KG4pe3cuZWFjaChuLGZ1bmN0aW9uKG4scil7ZyhyKT9lLnVuaXF1ZSYmbC5oYXMocil8fG8ucHVzaChyKTpyJiZyLmxlbmd0aCYmXCJzdHJpbmdcIiE9PXgocikmJnQocil9KX0oYXJndW1lbnRzKSxuJiYhdCYmdSgpKSx0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gdy5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihlLHQpe3ZhciBuO3doaWxlKChuPXcuaW5BcnJheSh0LG8sbikpPi0xKW8uc3BsaWNlKG4sMSksbjw9cyYmcy0tfSksdGhpc30saGFzOmZ1bmN0aW9uKGUpe3JldHVybiBlP3cuaW5BcnJheShlLG8pPi0xOm8ubGVuZ3RoPjB9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIG8mJihvPVtdKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGk9YT1bXSxvPW49XCJcIix0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFvfSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGk9YT1bXSxufHx0fHwobz1uPVwiXCIpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiEhaX0sZmlyZVdpdGg6ZnVuY3Rpb24oZSxuKXtyZXR1cm4gaXx8KG49W2UsKG49bnx8W10pLnNsaWNlP24uc2xpY2UoKTpuXSxhLnB1c2gobiksdHx8dSgpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGwuZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFyfX07cmV0dXJuIGx9O2Z1bmN0aW9uIEkoZSl7cmV0dXJuIGV9ZnVuY3Rpb24gVyhlKXt0aHJvdyBlfWZ1bmN0aW9uICQoZSx0LG4scil7dmFyIGk7dHJ5e2UmJmcoaT1lLnByb21pc2UpP2kuY2FsbChlKS5kb25lKHQpLmZhaWwobik6ZSYmZyhpPWUudGhlbik/aS5jYWxsKGUsdCxuKTp0LmFwcGx5KHZvaWQgMCxbZV0uc2xpY2UocikpfWNhdGNoKGUpe24uYXBwbHkodm9pZCAwLFtlXSl9fXcuZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbih0KXt2YXIgbj1bW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLHcuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLHcuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLDJdLFtcInJlc29sdmVcIixcImRvbmVcIix3LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHcuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMCxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLHcuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksdy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwxLFwicmVqZWN0ZWRcIl1dLHI9XCJwZW5kaW5nXCIsaT17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gcn0sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIG8uZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSxcImNhdGNoXCI6ZnVuY3Rpb24oZSl7cmV0dXJuIGkudGhlbihudWxsLGUpfSxwaXBlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzO3JldHVybiB3LkRlZmVycmVkKGZ1bmN0aW9uKHQpe3cuZWFjaChuLGZ1bmN0aW9uKG4scil7dmFyIGk9ZyhlW3JbNF1dKSYmZVtyWzRdXTtvW3JbMV1dKGZ1bmN0aW9uKCl7dmFyIGU9aSYmaS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7ZSYmZyhlLnByb21pc2UpP2UucHJvbWlzZSgpLnByb2dyZXNzKHQubm90aWZ5KS5kb25lKHQucmVzb2x2ZSkuZmFpbCh0LnJlamVjdCk6dFtyWzBdK1wiV2l0aFwiXSh0aGlzLGk/W2VdOmFyZ3VtZW50cyl9KX0pLGU9bnVsbH0pLnByb21pc2UoKX0sdGhlbjpmdW5jdGlvbih0LHIsaSl7dmFyIG89MDtmdW5jdGlvbiBhKHQsbixyLGkpe3JldHVybiBmdW5jdGlvbigpe3ZhciBzPXRoaXMsdT1hcmd1bWVudHMsbD1mdW5jdGlvbigpe3ZhciBlLGw7aWYoISh0PG8pKXtpZigoZT1yLmFwcGx5KHMsdSkpPT09bi5wcm9taXNlKCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZW5hYmxlIHNlbGYtcmVzb2x1dGlvblwiKTtsPWUmJihcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSkmJmUudGhlbixnKGwpP2k/bC5jYWxsKGUsYShvLG4sSSxpKSxhKG8sbixXLGkpKToobysrLGwuY2FsbChlLGEobyxuLEksaSksYShvLG4sVyxpKSxhKG8sbixJLG4ubm90aWZ5V2l0aCkpKToociE9PUkmJihzPXZvaWQgMCx1PVtlXSksKGl8fG4ucmVzb2x2ZVdpdGgpKHMsdSkpfX0sYz1pP2w6ZnVuY3Rpb24oKXt0cnl7bCgpfWNhdGNoKGUpe3cuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayYmdy5EZWZlcnJlZC5leGNlcHRpb25Ib29rKGUsYy5zdGFja1RyYWNlKSx0KzE+PW8mJihyIT09VyYmKHM9dm9pZCAwLHU9W2VdKSxuLnJlamVjdFdpdGgocyx1KSl9fTt0P2MoKToody5EZWZlcnJlZC5nZXRTdGFja0hvb2smJihjLnN0YWNrVHJhY2U9dy5EZWZlcnJlZC5nZXRTdGFja0hvb2soKSksZS5zZXRUaW1lb3V0KGMpKX19cmV0dXJuIHcuRGVmZXJyZWQoZnVuY3Rpb24oZSl7blswXVszXS5hZGQoYSgwLGUsZyhpKT9pOkksZS5ub3RpZnlXaXRoKSksblsxXVszXS5hZGQoYSgwLGUsZyh0KT90OkkpKSxuWzJdWzNdLmFkZChhKDAsZSxnKHIpP3I6VykpfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lP3cuZXh0ZW5kKGUsaSk6aX19LG89e307cmV0dXJuIHcuZWFjaChuLGZ1bmN0aW9uKGUsdCl7dmFyIGE9dFsyXSxzPXRbNV07aVt0WzFdXT1hLmFkZCxzJiZhLmFkZChmdW5jdGlvbigpe3I9c30sblszLWVdWzJdLmRpc2FibGUsblszLWVdWzNdLmRpc2FibGUsblswXVsyXS5sb2NrLG5bMF1bM10ubG9jayksYS5hZGQodFszXS5maXJlKSxvW3RbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIG9bdFswXStcIldpdGhcIl0odGhpcz09PW8/dm9pZCAwOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxvW3RbMF0rXCJXaXRoXCJdPWEuZmlyZVdpdGh9KSxpLnByb21pc2UobyksdCYmdC5jYWxsKG8sbyksb30sd2hlbjpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49dCxyPUFycmF5KG4pLGk9by5jYWxsKGFyZ3VtZW50cyksYT13LkRlZmVycmVkKCkscz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24obil7cltlXT10aGlzLGlbZV09YXJndW1lbnRzLmxlbmd0aD4xP28uY2FsbChhcmd1bWVudHMpOm4sLS10fHxhLnJlc29sdmVXaXRoKHIsaSl9fTtpZih0PD0xJiYoJChlLGEuZG9uZShzKG4pKS5yZXNvbHZlLGEucmVqZWN0LCF0KSxcInBlbmRpbmdcIj09PWEuc3RhdGUoKXx8ZyhpW25dJiZpW25dLnRoZW4pKSlyZXR1cm4gYS50aGVuKCk7d2hpbGUobi0tKSQoaVtuXSxzKG4pLGEucmVqZWN0KTtyZXR1cm4gYS5wcm9taXNlKCl9fSk7dmFyIEI9L14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87dy5EZWZlcnJlZC5leGNlcHRpb25Ib29rPWZ1bmN0aW9uKHQsbil7ZS5jb25zb2xlJiZlLmNvbnNvbGUud2FybiYmdCYmQi50ZXN0KHQubmFtZSkmJmUuY29uc29sZS53YXJuKFwialF1ZXJ5LkRlZmVycmVkIGV4Y2VwdGlvbjogXCIrdC5tZXNzYWdlLHQuc3RhY2ssbil9LHcucmVhZHlFeGNlcHRpb249ZnVuY3Rpb24odCl7ZS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgdH0pfTt2YXIgRj13LkRlZmVycmVkKCk7dy5mbi5yZWFkeT1mdW5jdGlvbihlKXtyZXR1cm4gRi50aGVuKGUpW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZSl7dy5yZWFkeUV4Y2VwdGlvbihlKX0pLHRoaXN9LHcuZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLHJlYWR5OmZ1bmN0aW9uKGUpeyghMD09PWU/LS13LnJlYWR5V2FpdDp3LmlzUmVhZHkpfHwody5pc1JlYWR5PSEwLCEwIT09ZSYmLS13LnJlYWR5V2FpdD4wfHxGLnJlc29sdmVXaXRoKHIsW3ddKSl9fSksdy5yZWFkeS50aGVuPUYudGhlbjtmdW5jdGlvbiBfKCl7ci5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLF8pLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixfKSx3LnJlYWR5KCl9XCJjb21wbGV0ZVwiPT09ci5yZWFkeVN0YXRlfHxcImxvYWRpbmdcIiE9PXIucmVhZHlTdGF0ZSYmIXIuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsP2Uuc2V0VGltZW91dCh3LnJlYWR5KTooci5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLF8pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixfKSk7dmFyIHo9ZnVuY3Rpb24oZSx0LG4scixpLG8sYSl7dmFyIHM9MCx1PWUubGVuZ3RoLGw9bnVsbD09bjtpZihcIm9iamVjdFwiPT09eChuKSl7aT0hMDtmb3IocyBpbiBuKXooZSx0LHMsbltzXSwhMCxvLGEpfWVsc2UgaWYodm9pZCAwIT09ciYmKGk9ITAsZyhyKXx8KGE9ITApLGwmJihhPyh0LmNhbGwoZSxyKSx0PW51bGwpOihsPXQsdD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIGwuY2FsbCh3KGUpLG4pfSkpLHQpKWZvcig7czx1O3MrKyl0KGVbc10sbixhP3I6ci5jYWxsKGVbc10scyx0KGVbc10sbikpKTtyZXR1cm4gaT9lOmw/dC5jYWxsKGUpOnU/dChlWzBdLG4pOm99LFg9L14tbXMtLyxVPS8tKFthLXpdKS9nO2Z1bmN0aW9uIFYoZSx0KXtyZXR1cm4gdC50b1VwcGVyQ2FzZSgpfWZ1bmN0aW9uIEcoZSl7cmV0dXJuIGUucmVwbGFjZShYLFwibXMtXCIpLnJlcGxhY2UoVSxWKX12YXIgWT1mdW5jdGlvbihlKXtyZXR1cm4gMT09PWUubm9kZVR5cGV8fDk9PT1lLm5vZGVUeXBlfHwhK2Uubm9kZVR5cGV9O2Z1bmN0aW9uIFEoKXt0aGlzLmV4cGFuZG89dy5leHBhbmRvK1EudWlkKyt9US51aWQ9MSxRLnByb3RvdHlwZT17Y2FjaGU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZVt0aGlzLmV4cGFuZG9dO3JldHVybiB0fHwodD17fSxZKGUpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dDpPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0aGlzLmV4cGFuZG8se3ZhbHVlOnQsY29uZmlndXJhYmxlOiEwfSkpKSx0fSxzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9dGhpcy5jYWNoZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgdClpW0codCldPW47ZWxzZSBmb3IociBpbiB0KWlbRyhyKV09dFtyXTtyZXR1cm4gaX0sZ2V0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQ/dGhpcy5jYWNoZShlKTplW3RoaXMuZXhwYW5kb10mJmVbdGhpcy5leHBhbmRvXVtHKHQpXX0sYWNjZXNzOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdm9pZCAwPT09dHx8dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQmJnZvaWQgMD09PW4/dGhpcy5nZXQoZSx0KToodGhpcy5zZXQoZSx0LG4pLHZvaWQgMCE9PW4/bjp0KX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1lW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09cil7aWYodm9pZCAwIT09dCl7bj0odD1BcnJheS5pc0FycmF5KHQpP3QubWFwKEcpOih0PUcodCkpaW4gcj9bdF06dC5tYXRjaChNKXx8W10pLmxlbmd0aDt3aGlsZShuLS0pZGVsZXRlIHJbdFtuXV19KHZvaWQgMD09PXR8fHcuaXNFbXB0eU9iamVjdChyKSkmJihlLm5vZGVUeXBlP2VbdGhpcy5leHBhbmRvXT12b2lkIDA6ZGVsZXRlIGVbdGhpcy5leHBhbmRvXSl9fSxoYXNEYXRhOmZ1bmN0aW9uKGUpe3ZhciB0PWVbdGhpcy5leHBhbmRvXTtyZXR1cm4gdm9pZCAwIT09dCYmIXcuaXNFbXB0eU9iamVjdCh0KX19O3ZhciBKPW5ldyBRLEs9bmV3IFEsWj0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sZWU9L1tBLVpdL2c7ZnVuY3Rpb24gdGUoZSl7cmV0dXJuXCJ0cnVlXCI9PT1lfHxcImZhbHNlXCIhPT1lJiYoXCJudWxsXCI9PT1lP251bGw6ZT09PStlK1wiXCI/K2U6Wi50ZXN0KGUpP0pTT04ucGFyc2UoZSk6ZSl9ZnVuY3Rpb24gbmUoZSx0LG4pe3ZhciByO2lmKHZvaWQgMD09PW4mJjE9PT1lLm5vZGVUeXBlKWlmKHI9XCJkYXRhLVwiK3QucmVwbGFjZShlZSxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLFwic3RyaW5nXCI9PXR5cGVvZihuPWUuZ2V0QXR0cmlidXRlKHIpKSl7dHJ5e249dGUobil9Y2F0Y2goZSl7fUsuc2V0KGUsdCxuKX1lbHNlIG49dm9pZCAwO3JldHVybiBufXcuZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiBLLmhhc0RhdGEoZSl8fEouaGFzRGF0YShlKX0sZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIEsuYWNjZXNzKGUsdCxuKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe0sucmVtb3ZlKGUsdCl9LF9kYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gSi5hY2Nlc3MoZSx0LG4pfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe0oucmVtb3ZlKGUsdCl9fSksdy5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbz10aGlzWzBdLGE9byYmby5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWUpe2lmKHRoaXMubGVuZ3RoJiYoaT1LLmdldChvKSwxPT09by5ub2RlVHlwZSYmIUouZ2V0KG8sXCJoYXNEYXRhQXR0cnNcIikpKXtuPWEubGVuZ3RoO3doaWxlKG4tLSlhW25dJiYwPT09KHI9YVtuXS5uYW1lKS5pbmRleE9mKFwiZGF0YS1cIikmJihyPUcoci5zbGljZSg1KSksbmUobyxyLGlbcl0pKTtKLnNldChvLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBpfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlP3RoaXMuZWFjaChmdW5jdGlvbigpe0suc2V0KHRoaXMsZSl9KTp6KHRoaXMsZnVuY3Rpb24odCl7dmFyIG47aWYobyYmdm9pZCAwPT09dCl7aWYodm9pZCAwIT09KG49Sy5nZXQobyxlKSkpcmV0dXJuIG47aWYodm9pZCAwIT09KG49bmUobyxlKSkpcmV0dXJuIG59ZWxzZSB0aGlzLmVhY2goZnVuY3Rpb24oKXtLLnNldCh0aGlzLGUsdCl9KX0sbnVsbCx0LGFyZ3VtZW50cy5sZW5ndGg+MSxudWxsLCEwKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Sy5yZW1vdmUodGhpcyxlKX0pfX0pLHcuZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYoZSlyZXR1cm4gdD0odHx8XCJmeFwiKStcInF1ZXVlXCIscj1KLmdldChlLHQpLG4mJighcnx8QXJyYXkuaXNBcnJheShuKT9yPUouYWNjZXNzKGUsdCx3Lm1ha2VBcnJheShuKSk6ci5wdXNoKG4pKSxyfHxbXX0sZGVxdWV1ZTpmdW5jdGlvbihlLHQpe3Q9dHx8XCJmeFwiO3ZhciBuPXcucXVldWUoZSx0KSxyPW4ubGVuZ3RoLGk9bi5zaGlmdCgpLG89dy5fcXVldWVIb29rcyhlLHQpLGE9ZnVuY3Rpb24oKXt3LmRlcXVldWUoZSx0KX07XCJpbnByb2dyZXNzXCI9PT1pJiYoaT1uLnNoaWZ0KCksci0tKSxpJiYoXCJmeFwiPT09dCYmbi51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgby5zdG9wLGkuY2FsbChlLGEsbykpLCFyJiZvJiZvLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oZSx0KXt2YXIgbj10K1wicXVldWVIb29rc1wiO3JldHVybiBKLmdldChlLG4pfHxKLmFjY2VzcyhlLG4se2VtcHR5OncuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7Si5yZW1vdmUoZSxbdCtcInF1ZXVlXCIsbl0pfSl9KX19KSx3LmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBlJiYodD1lLGU9XCJmeFwiLG4tLSksYXJndW1lbnRzLmxlbmd0aDxuP3cucXVldWUodGhpc1swXSxlKTp2b2lkIDA9PT10P3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIG49dy5xdWV1ZSh0aGlzLGUsdCk7dy5fcXVldWVIb29rcyh0aGlzLGUpLFwiZnhcIj09PWUmJlwiaW5wcm9ncmVzc1wiIT09blswXSYmdy5kZXF1ZXVlKHRoaXMsZSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dy5kZXF1ZXVlKHRoaXMsZSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5xdWV1ZShlfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0xLGk9dy5EZWZlcnJlZCgpLG89dGhpcyxhPXRoaXMubGVuZ3RoLHM9ZnVuY3Rpb24oKXstLXJ8fGkucmVzb2x2ZVdpdGgobyxbb10pfTtcInN0cmluZ1wiIT10eXBlb2YgZSYmKHQ9ZSxlPXZvaWQgMCksZT1lfHxcImZ4XCI7d2hpbGUoYS0tKShuPUouZ2V0KG9bYV0sZStcInF1ZXVlSG9va3NcIikpJiZuLmVtcHR5JiYocisrLG4uZW1wdHkuYWRkKHMpKTtyZXR1cm4gcygpLGkucHJvbWlzZSh0KX19KTt2YXIgcmU9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLGllPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK3JlK1wiKShbYS16JV0qKSRcIixcImlcIiksb2U9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLGFlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuXCJub25lXCI9PT0oZT10fHxlKS5zdHlsZS5kaXNwbGF5fHxcIlwiPT09ZS5zdHlsZS5kaXNwbGF5JiZ3LmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKSYmXCJub25lXCI9PT13LmNzcyhlLFwiZGlzcGxheVwiKX0sc2U9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhPXt9O2ZvcihvIGluIHQpYVtvXT1lLnN0eWxlW29dLGUuc3R5bGVbb109dFtvXTtpPW4uYXBwbHkoZSxyfHxbXSk7Zm9yKG8gaW4gdCllLnN0eWxlW29dPWFbb107cmV0dXJuIGl9O2Z1bmN0aW9uIHVlKGUsdCxuLHIpe3ZhciBpLG8sYT0yMCxzPXI/ZnVuY3Rpb24oKXtyZXR1cm4gci5jdXIoKX06ZnVuY3Rpb24oKXtyZXR1cm4gdy5jc3MoZSx0LFwiXCIpfSx1PXMoKSxsPW4mJm5bM118fCh3LmNzc051bWJlclt0XT9cIlwiOlwicHhcIiksYz0ody5jc3NOdW1iZXJbdF18fFwicHhcIiE9PWwmJit1KSYmaWUuZXhlYyh3LmNzcyhlLHQpKTtpZihjJiZjWzNdIT09bCl7dS89MixsPWx8fGNbM10sYz0rdXx8MTt3aGlsZShhLS0pdy5zdHlsZShlLHQsYytsKSwoMS1vKSooMS0obz1zKCkvdXx8LjUpKTw9MCYmKGE9MCksYy89bztjKj0yLHcuc3R5bGUoZSx0LGMrbCksbj1ufHxbXX1yZXR1cm4gbiYmKGM9K2N8fCt1fHwwLGk9blsxXT9jKyhuWzFdKzEpKm5bMl06K25bMl0sciYmKHIudW5pdD1sLHIuc3RhcnQ9YyxyLmVuZD1pKSksaX12YXIgbGU9e307ZnVuY3Rpb24gY2UoZSl7dmFyIHQsbj1lLm93bmVyRG9jdW1lbnQscj1lLm5vZGVOYW1lLGk9bGVbcl07cmV0dXJuIGl8fCh0PW4uYm9keS5hcHBlbmRDaGlsZChuLmNyZWF0ZUVsZW1lbnQocikpLGk9dy5jc3ModCxcImRpc3BsYXlcIiksdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpLFwibm9uZVwiPT09aSYmKGk9XCJibG9ja1wiKSxsZVtyXT1pLGkpfWZ1bmN0aW9uIGZlKGUsdCl7Zm9yKHZhciBuLHIsaT1bXSxvPTAsYT1lLmxlbmd0aDtvPGE7bysrKShyPWVbb10pLnN0eWxlJiYobj1yLnN0eWxlLmRpc3BsYXksdD8oXCJub25lXCI9PT1uJiYoaVtvXT1KLmdldChyLFwiZGlzcGxheVwiKXx8bnVsbCxpW29dfHwoci5zdHlsZS5kaXNwbGF5PVwiXCIpKSxcIlwiPT09ci5zdHlsZS5kaXNwbGF5JiZhZShyKSYmKGlbb109Y2UocikpKTpcIm5vbmVcIiE9PW4mJihpW29dPVwibm9uZVwiLEouc2V0KHIsXCJkaXNwbGF5XCIsbikpKTtmb3Iobz0wO288YTtvKyspbnVsbCE9aVtvXSYmKGVbb10uc3R5bGUuZGlzcGxheT1pW29dKTtyZXR1cm4gZX13LmZuLmV4dGVuZCh7c2hvdzpmdW5jdGlvbigpe3JldHVybiBmZSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBmZSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGUpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgZT9lP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe2FlKHRoaXMpP3codGhpcykuc2hvdygpOncodGhpcykuaGlkZSgpfSl9fSk7dmFyIHBlPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLGRlPS88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKykvaSxoZT0vXiR8Xm1vZHVsZSR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLGdlPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07Z2Uub3B0Z3JvdXA9Z2Uub3B0aW9uLGdlLnRib2R5PWdlLnRmb290PWdlLmNvbGdyb3VwPWdlLmNhcHRpb249Z2UudGhlYWQsZ2UudGg9Z2UudGQ7ZnVuY3Rpb24geWUoZSx0KXt2YXIgbjtyZXR1cm4gbj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRFbGVtZW50c0J5VGFnTmFtZT9lLmdldEVsZW1lbnRzQnlUYWdOYW1lKHR8fFwiKlwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5xdWVyeVNlbGVjdG9yQWxsP2UucXVlcnlTZWxlY3RvckFsbCh0fHxcIipcIik6W10sdm9pZCAwPT09dHx8dCYmTihlLHQpP3cubWVyZ2UoW2VdLG4pOm59ZnVuY3Rpb24gdmUoZSx0KXtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjtuKyspSi5zZXQoZVtuXSxcImdsb2JhbEV2YWxcIiwhdHx8Si5nZXQodFtuXSxcImdsb2JhbEV2YWxcIikpfXZhciBtZT0vPHwmIz9cXHcrOy87ZnVuY3Rpb24geGUoZSx0LG4scixpKXtmb3IodmFyIG8sYSxzLHUsbCxjLGY9dC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkscD1bXSxkPTAsaD1lLmxlbmd0aDtkPGg7ZCsrKWlmKChvPWVbZF0pfHwwPT09bylpZihcIm9iamVjdFwiPT09eChvKSl3Lm1lcmdlKHAsby5ub2RlVHlwZT9bb106byk7ZWxzZSBpZihtZS50ZXN0KG8pKXthPWF8fGYuYXBwZW5kQ2hpbGQodC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxzPShkZS5leGVjKG8pfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSx1PWdlW3NdfHxnZS5fZGVmYXVsdCxhLmlubmVySFRNTD11WzFdK3cuaHRtbFByZWZpbHRlcihvKSt1WzJdLGM9dVswXTt3aGlsZShjLS0pYT1hLmxhc3RDaGlsZDt3Lm1lcmdlKHAsYS5jaGlsZE5vZGVzKSwoYT1mLmZpcnN0Q2hpbGQpLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBwLnB1c2godC5jcmVhdGVUZXh0Tm9kZShvKSk7Zi50ZXh0Q29udGVudD1cIlwiLGQ9MDt3aGlsZShvPXBbZCsrXSlpZihyJiZ3LmluQXJyYXkobyxyKT4tMSlpJiZpLnB1c2gobyk7ZWxzZSBpZihsPXcuY29udGFpbnMoby5vd25lckRvY3VtZW50LG8pLGE9eWUoZi5hcHBlbmRDaGlsZChvKSxcInNjcmlwdFwiKSxsJiZ2ZShhKSxuKXtjPTA7d2hpbGUobz1hW2MrK10paGUudGVzdChvLnR5cGV8fFwiXCIpJiZuLnB1c2gobyl9cmV0dXJuIGZ9IWZ1bmN0aW9uKCl7dmFyIGU9ci5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkuYXBwZW5kQ2hpbGQoci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSx0PXIuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO3Quc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksdC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLHQuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxlLmFwcGVuZENoaWxkKHQpLGguY2hlY2tDbG9uZT1lLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxlLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixoLm5vQ2xvbmVDaGVja2VkPSEhZS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWV9KCk7dmFyIGJlPXIuZG9jdW1lbnRFbGVtZW50LHdlPS9ea2V5LyxUZT0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sQ2U9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiBFZSgpe3JldHVybiEwfWZ1bmN0aW9uIGtlKCl7cmV0dXJuITF9ZnVuY3Rpb24gU2UoKXt0cnl7cmV0dXJuIHIuYWN0aXZlRWxlbWVudH1jYXRjaChlKXt9fWZ1bmN0aW9uIERlKGUsdCxuLHIsaSxvKXt2YXIgYSxzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0KXtcInN0cmluZ1wiIT10eXBlb2YgbiYmKHI9cnx8bixuPXZvaWQgMCk7Zm9yKHMgaW4gdClEZShlLHMsbixyLHRbc10sbyk7cmV0dXJuIGV9aWYobnVsbD09ciYmbnVsbD09aT8oaT1uLHI9bj12b2lkIDApOm51bGw9PWkmJihcInN0cmluZ1wiPT10eXBlb2Ygbj8oaT1yLHI9dm9pZCAwKTooaT1yLHI9bixuPXZvaWQgMCkpLCExPT09aSlpPWtlO2Vsc2UgaWYoIWkpcmV0dXJuIGU7cmV0dXJuIDE9PT1vJiYoYT1pLChpPWZ1bmN0aW9uKGUpe3JldHVybiB3KCkub2ZmKGUpLGEuYXBwbHkodGhpcyxhcmd1bWVudHMpfSkuZ3VpZD1hLmd1aWR8fChhLmd1aWQ9dy5ndWlkKyspKSxlLmVhY2goZnVuY3Rpb24oKXt3LmV2ZW50LmFkZCh0aGlzLHQsaSxyLG4pfSl9dy5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihlLHQsbixyLGkpe3ZhciBvLGEscyx1LGwsYyxmLHAsZCxoLGcseT1KLmdldChlKTtpZih5KXtuLmhhbmRsZXImJihuPShvPW4pLmhhbmRsZXIsaT1vLnNlbGVjdG9yKSxpJiZ3LmZpbmQubWF0Y2hlc1NlbGVjdG9yKGJlLGkpLG4uZ3VpZHx8KG4uZ3VpZD13Lmd1aWQrKyksKHU9eS5ldmVudHMpfHwodT15LmV2ZW50cz17fSksKGE9eS5oYW5kbGUpfHwoYT15LmhhbmRsZT1mdW5jdGlvbih0KXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgdyYmdy5ldmVudC50cmlnZ2VyZWQhPT10LnR5cGU/dy5ldmVudC5kaXNwYXRjaC5hcHBseShlLGFyZ3VtZW50cyk6dm9pZCAwfSksbD0odD0odHx8XCJcIikubWF0Y2goTSl8fFtcIlwiXSkubGVuZ3RoO3doaWxlKGwtLSlkPWc9KHM9Q2UuZXhlYyh0W2xdKXx8W10pWzFdLGg9KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksZCYmKGY9dy5ldmVudC5zcGVjaWFsW2RdfHx7fSxkPShpP2YuZGVsZWdhdGVUeXBlOmYuYmluZFR5cGUpfHxkLGY9dy5ldmVudC5zcGVjaWFsW2RdfHx7fSxjPXcuZXh0ZW5kKHt0eXBlOmQsb3JpZ1R5cGU6ZyxkYXRhOnIsaGFuZGxlcjpuLGd1aWQ6bi5ndWlkLHNlbGVjdG9yOmksbmVlZHNDb250ZXh0OmkmJncuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChpKSxuYW1lc3BhY2U6aC5qb2luKFwiLlwiKX0sbyksKHA9dVtkXSl8fCgocD11W2RdPVtdKS5kZWxlZ2F0ZUNvdW50PTAsZi5zZXR1cCYmITEhPT1mLnNldHVwLmNhbGwoZSxyLGgsYSl8fGUuYWRkRXZlbnRMaXN0ZW5lciYmZS5hZGRFdmVudExpc3RlbmVyKGQsYSkpLGYuYWRkJiYoZi5hZGQuY2FsbChlLGMpLGMuaGFuZGxlci5ndWlkfHwoYy5oYW5kbGVyLmd1aWQ9bi5ndWlkKSksaT9wLnNwbGljZShwLmRlbGVnYXRlQ291bnQrKywwLGMpOnAucHVzaChjKSx3LmV2ZW50Lmdsb2JhbFtkXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdSxsLGMsZixwLGQsaCxnLHk9Si5oYXNEYXRhKGUpJiZKLmdldChlKTtpZih5JiYodT15LmV2ZW50cykpe2w9KHQ9KHR8fFwiXCIpLm1hdGNoKE0pfHxbXCJcIl0pLmxlbmd0aDt3aGlsZShsLS0paWYocz1DZS5leGVjKHRbbF0pfHxbXSxkPWc9c1sxXSxoPShzWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQpe2Y9dy5ldmVudC5zcGVjaWFsW2RdfHx7fSxwPXVbZD0ocj9mLmRlbGVnYXRlVHlwZTpmLmJpbmRUeXBlKXx8ZF18fFtdLHM9c1syXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGE9bz1wLmxlbmd0aDt3aGlsZShvLS0pYz1wW29dLCFpJiZnIT09Yy5vcmlnVHlwZXx8biYmbi5ndWlkIT09Yy5ndWlkfHxzJiYhcy50ZXN0KGMubmFtZXNwYWNlKXx8ciYmciE9PWMuc2VsZWN0b3ImJihcIioqXCIhPT1yfHwhYy5zZWxlY3Rvcil8fChwLnNwbGljZShvLDEpLGMuc2VsZWN0b3ImJnAuZGVsZWdhdGVDb3VudC0tLGYucmVtb3ZlJiZmLnJlbW92ZS5jYWxsKGUsYykpO2EmJiFwLmxlbmd0aCYmKGYudGVhcmRvd24mJiExIT09Zi50ZWFyZG93bi5jYWxsKGUsaCx5LmhhbmRsZSl8fHcucmVtb3ZlRXZlbnQoZSxkLHkuaGFuZGxlKSxkZWxldGUgdVtkXSl9ZWxzZSBmb3IoZCBpbiB1KXcuZXZlbnQucmVtb3ZlKGUsZCt0W2xdLG4sciwhMCk7dy5pc0VtcHR5T2JqZWN0KHUpJiZKLnJlbW92ZShlLFwiaGFuZGxlIGV2ZW50c1wiKX19LGRpc3BhdGNoOmZ1bmN0aW9uKGUpe3ZhciB0PXcuZXZlbnQuZml4KGUpLG4scixpLG8sYSxzLHU9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpLGw9KEouZ2V0KHRoaXMsXCJldmVudHNcIil8fHt9KVt0LnR5cGVdfHxbXSxjPXcuZXZlbnQuc3BlY2lhbFt0LnR5cGVdfHx7fTtmb3IodVswXT10LG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXVbbl09YXJndW1lbnRzW25dO2lmKHQuZGVsZWdhdGVUYXJnZXQ9dGhpcywhYy5wcmVEaXNwYXRjaHx8ITEhPT1jLnByZURpc3BhdGNoLmNhbGwodGhpcyx0KSl7cz13LmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyx0LGwpLG49MDt3aGlsZSgobz1zW24rK10pJiYhdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXt0LmN1cnJlbnRUYXJnZXQ9by5lbGVtLHI9MDt3aGlsZSgoYT1vLmhhbmRsZXJzW3IrK10pJiYhdC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKXQucm5hbWVzcGFjZSYmIXQucm5hbWVzcGFjZS50ZXN0KGEubmFtZXNwYWNlKXx8KHQuaGFuZGxlT2JqPWEsdC5kYXRhPWEuZGF0YSx2b2lkIDAhPT0oaT0oKHcuZXZlbnQuc3BlY2lhbFthLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8YS5oYW5kbGVyKS5hcHBseShvLmVsZW0sdSkpJiYhMT09PSh0LnJlc3VsdD1pKSYmKHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGMucG9zdERpc3BhdGNoJiZjLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsdCksdC5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGEscz1bXSx1PXQuZGVsZWdhdGVDb3VudCxsPWUudGFyZ2V0O2lmKHUmJmwubm9kZVR5cGUmJiEoXCJjbGlja1wiPT09ZS50eXBlJiZlLmJ1dHRvbj49MSkpZm9yKDtsIT09dGhpcztsPWwucGFyZW50Tm9kZXx8dGhpcylpZigxPT09bC5ub2RlVHlwZSYmKFwiY2xpY2tcIiE9PWUudHlwZXx8ITAhPT1sLmRpc2FibGVkKSl7Zm9yKG89W10sYT17fSxuPTA7bjx1O24rKyl2b2lkIDA9PT1hW2k9KHI9dFtuXSkuc2VsZWN0b3IrXCIgXCJdJiYoYVtpXT1yLm5lZWRzQ29udGV4dD93KGksdGhpcykuaW5kZXgobCk+LTE6dy5maW5kKGksdGhpcyxudWxsLFtsXSkubGVuZ3RoKSxhW2ldJiZvLnB1c2gocik7by5sZW5ndGgmJnMucHVzaCh7ZWxlbTpsLGhhbmRsZXJzOm99KX1yZXR1cm4gbD10aGlzLHU8dC5sZW5ndGgmJnMucHVzaCh7ZWxlbTpsLGhhbmRsZXJzOnQuc2xpY2UodSl9KSxzfSxhZGRQcm9wOmZ1bmN0aW9uKGUsdCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHcuRXZlbnQucHJvdG90eXBlLGUse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpnKHQpP2Z1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiB0KHRoaXMub3JpZ2luYWxFdmVudCl9OmZ1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnRbZV19LHNldDpmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxlLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSl9fSl9LGZpeDpmdW5jdGlvbihlKXtyZXR1cm4gZVt3LmV4cGFuZG9dP2U6bmV3IHcuRXZlbnQoZSl9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXMhPT1TZSgpJiZ0aGlzLmZvY3VzKXJldHVybiB0aGlzLmZvY3VzKCksITF9LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXM9PT1TZSgpJiZ0aGlzLmJsdXIpcmV0dXJuIHRoaXMuYmx1cigpLCExfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKFwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljayYmTih0aGlzLFwiaW5wdXRcIikpcmV0dXJuIHRoaXMuY2xpY2soKSwhMX0sX2RlZmF1bHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIE4oZS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dm9pZCAwIT09ZS5yZXN1bHQmJmUub3JpZ2luYWxFdmVudCYmKGUub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1lLnJlc3VsdCl9fX19LHcucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oZSx0LG4pe2UucmVtb3ZlRXZlbnRMaXN0ZW5lciYmZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbil9LHcuRXZlbnQ9ZnVuY3Rpb24oZSx0KXtpZighKHRoaXMgaW5zdGFuY2VvZiB3LkV2ZW50KSlyZXR1cm4gbmV3IHcuRXZlbnQoZSx0KTtlJiZlLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1lLHRoaXMudHlwZT1lLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1lLmRlZmF1bHRQcmV2ZW50ZWQmJiExPT09ZS5yZXR1cm5WYWx1ZT9FZTprZSx0aGlzLnRhcmdldD1lLnRhcmdldCYmMz09PWUudGFyZ2V0Lm5vZGVUeXBlP2UudGFyZ2V0LnBhcmVudE5vZGU6ZS50YXJnZXQsdGhpcy5jdXJyZW50VGFyZ2V0PWUuY3VycmVudFRhcmdldCx0aGlzLnJlbGF0ZWRUYXJnZXQ9ZS5yZWxhdGVkVGFyZ2V0KTp0aGlzLnR5cGU9ZSx0JiZ3LmV4dGVuZCh0aGlzLHQpLHRoaXMudGltZVN0YW1wPWUmJmUudGltZVN0YW1wfHxEYXRlLm5vdygpLHRoaXNbdy5leHBhbmRvXT0hMH0sdy5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOncuRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOmtlLGlzUHJvcGFnYXRpb25TdG9wcGVkOmtlLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOmtlLGlzU2ltdWxhdGVkOiExLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPUVlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPUVlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD1FZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sdy5lYWNoKHthbHRLZXk6ITAsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGNoYW5nZWRUb3VjaGVzOiEwLGN0cmxLZXk6ITAsZGV0YWlsOiEwLGV2ZW50UGhhc2U6ITAsbWV0YUtleTohMCxwYWdlWDohMCxwYWdlWTohMCxzaGlmdEtleTohMCx2aWV3OiEwLFwiY2hhclwiOiEwLGNoYXJDb2RlOiEwLGtleTohMCxrZXlDb2RlOiEwLGJ1dHRvbjohMCxidXR0b25zOiEwLGNsaWVudFg6ITAsY2xpZW50WTohMCxvZmZzZXRYOiEwLG9mZnNldFk6ITAscG9pbnRlcklkOiEwLHBvaW50ZXJUeXBlOiEwLHNjcmVlblg6ITAsc2NyZWVuWTohMCx0YXJnZXRUb3VjaGVzOiEwLHRvRWxlbWVudDohMCx0b3VjaGVzOiEwLHdoaWNoOmZ1bmN0aW9uKGUpe3ZhciB0PWUuYnV0dG9uO3JldHVybiBudWxsPT1lLndoaWNoJiZ3ZS50ZXN0KGUudHlwZSk/bnVsbCE9ZS5jaGFyQ29kZT9lLmNoYXJDb2RlOmUua2V5Q29kZTohZS53aGljaCYmdm9pZCAwIT09dCYmVGUudGVzdChlLnR5cGUpPzEmdD8xOjImdD8zOjQmdD8yOjA6ZS53aGljaH19LHcuZXZlbnQuYWRkUHJvcCksdy5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGUsdCl7dy5ldmVudC5zcGVjaWFsW2VdPXtkZWxlZ2F0ZVR5cGU6dCxiaW5kVHlwZTp0LGhhbmRsZTpmdW5jdGlvbihlKXt2YXIgbixyPXRoaXMsaT1lLnJlbGF0ZWRUYXJnZXQsbz1lLmhhbmRsZU9iajtyZXR1cm4gaSYmKGk9PT1yfHx3LmNvbnRhaW5zKHIsaSkpfHwoZS50eXBlPW8ub3JpZ1R5cGUsbj1vLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGUudHlwZT10KSxufX19KSx3LmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIERlKHRoaXMsZSx0LG4scil9LG9uZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gRGUodGhpcyxlLHQsbixyLDEpfSxvZmY6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk7aWYoZSYmZS5wcmV2ZW50RGVmYXVsdCYmZS5oYW5kbGVPYmopcmV0dXJuIHI9ZS5oYW5kbGVPYmosdyhlLmRlbGVnYXRlVGFyZ2V0KS5vZmYoci5uYW1lc3BhY2U/ci5vcmlnVHlwZStcIi5cIityLm5hbWVzcGFjZTpyLm9yaWdUeXBlLHIuc2VsZWN0b3Isci5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXtmb3IoaSBpbiBlKXRoaXMub2ZmKGksdCxlW2ldKTtyZXR1cm4gdGhpc31yZXR1cm4hMSE9PXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fChuPXQsdD12b2lkIDApLCExPT09biYmKG49a2UpLHRoaXMuZWFjaChmdW5jdGlvbigpe3cuZXZlbnQucmVtb3ZlKHRoaXMsZSxuLHQpfSl9fSk7dmFyIE5lPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKilbXj5dKilcXC8+L2dpLEFlPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLGplPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2kscWU9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO2Z1bmN0aW9uIExlKGUsdCl7cmV0dXJuIE4oZSxcInRhYmxlXCIpJiZOKDExIT09dC5ub2RlVHlwZT90OnQuZmlyc3RDaGlsZCxcInRyXCIpP3coZSkuY2hpbGRyZW4oXCJ0Ym9keVwiKVswXXx8ZTplfWZ1bmN0aW9uIEhlKGUpe3JldHVybiBlLnR5cGU9KG51bGwhPT1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2UudHlwZSxlfWZ1bmN0aW9uIE9lKGUpe3JldHVyblwidHJ1ZS9cIj09PShlLnR5cGV8fFwiXCIpLnNsaWNlKDAsNSk/ZS50eXBlPWUudHlwZS5zbGljZSg1KTplLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksZX1mdW5jdGlvbiBQZShlLHQpe3ZhciBuLHIsaSxvLGEscyx1LGw7aWYoMT09PXQubm9kZVR5cGUpe2lmKEouaGFzRGF0YShlKSYmKG89Si5hY2Nlc3MoZSksYT1KLnNldCh0LG8pLGw9by5ldmVudHMpKXtkZWxldGUgYS5oYW5kbGUsYS5ldmVudHM9e307Zm9yKGkgaW4gbClmb3Iobj0wLHI9bFtpXS5sZW5ndGg7bjxyO24rKyl3LmV2ZW50LmFkZCh0LGksbFtpXVtuXSl9Sy5oYXNEYXRhKGUpJiYocz1LLmFjY2VzcyhlKSx1PXcuZXh0ZW5kKHt9LHMpLEsuc2V0KHQsdSkpfX1mdW5jdGlvbiBNZShlLHQpe3ZhciBuPXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcImlucHV0XCI9PT1uJiZwZS50ZXN0KGUudHlwZSk/dC5jaGVja2VkPWUuY2hlY2tlZDpcImlucHV0XCIhPT1uJiZcInRleHRhcmVhXCIhPT1ufHwodC5kZWZhdWx0VmFsdWU9ZS5kZWZhdWx0VmFsdWUpfWZ1bmN0aW9uIFJlKGUsdCxuLHIpe3Q9YS5hcHBseShbXSx0KTt2YXIgaSxvLHMsdSxsLGMsZj0wLHA9ZS5sZW5ndGgsZD1wLTEseT10WzBdLHY9Zyh5KTtpZih2fHxwPjEmJlwic3RyaW5nXCI9PXR5cGVvZiB5JiYhaC5jaGVja0Nsb25lJiZqZS50ZXN0KHkpKXJldHVybiBlLmVhY2goZnVuY3Rpb24oaSl7dmFyIG89ZS5lcShpKTt2JiYodFswXT15LmNhbGwodGhpcyxpLG8uaHRtbCgpKSksUmUobyx0LG4scil9KTtpZihwJiYoaT14ZSh0LGVbMF0ub3duZXJEb2N1bWVudCwhMSxlLHIpLG89aS5maXJzdENoaWxkLDE9PT1pLmNoaWxkTm9kZXMubGVuZ3RoJiYoaT1vKSxvfHxyKSl7Zm9yKHU9KHM9dy5tYXAoeWUoaSxcInNjcmlwdFwiKSxIZSkpLmxlbmd0aDtmPHA7ZisrKWw9aSxmIT09ZCYmKGw9dy5jbG9uZShsLCEwLCEwKSx1JiZ3Lm1lcmdlKHMseWUobCxcInNjcmlwdFwiKSkpLG4uY2FsbChlW2ZdLGwsZik7aWYodSlmb3IoYz1zW3MubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsdy5tYXAocyxPZSksZj0wO2Y8dTtmKyspbD1zW2ZdLGhlLnRlc3QobC50eXBlfHxcIlwiKSYmIUouYWNjZXNzKGwsXCJnbG9iYWxFdmFsXCIpJiZ3LmNvbnRhaW5zKGMsbCkmJihsLnNyYyYmXCJtb2R1bGVcIiE9PShsLnR5cGV8fFwiXCIpLnRvTG93ZXJDYXNlKCk/dy5fZXZhbFVybCYmdy5fZXZhbFVybChsLnNyYyk6bShsLnRleHRDb250ZW50LnJlcGxhY2UocWUsXCJcIiksYyxsKSl9cmV0dXJuIGV9ZnVuY3Rpb24gSWUoZSx0LG4pe2Zvcih2YXIgcixpPXQ/dy5maWx0ZXIodCxlKTplLG89MDtudWxsIT0ocj1pW29dKTtvKyspbnx8MSE9PXIubm9kZVR5cGV8fHcuY2xlYW5EYXRhKHllKHIpKSxyLnBhcmVudE5vZGUmJihuJiZ3LmNvbnRhaW5zKHIub3duZXJEb2N1bWVudCxyKSYmdmUoeWUocixcInNjcmlwdFwiKSksci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHIpKTtyZXR1cm4gZX13LmV4dGVuZCh7aHRtbFByZWZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKE5lLFwiPCQxPjwvJDI+XCIpfSxjbG9uZTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscz1lLmNsb25lTm9kZSghMCksdT13LmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKTtpZighKGgubm9DbG9uZUNoZWNrZWR8fDEhPT1lLm5vZGVUeXBlJiYxMSE9PWUubm9kZVR5cGV8fHcuaXNYTUxEb2MoZSkpKWZvcihhPXllKHMpLHI9MCxpPShvPXllKGUpKS5sZW5ndGg7cjxpO3IrKylNZShvW3JdLGFbcl0pO2lmKHQpaWYobilmb3Iobz1vfHx5ZShlKSxhPWF8fHllKHMpLHI9MCxpPW8ubGVuZ3RoO3I8aTtyKyspUGUob1tyXSxhW3JdKTtlbHNlIFBlKGUscyk7cmV0dXJuKGE9eWUocyxcInNjcmlwdFwiKSkubGVuZ3RoPjAmJnZlKGEsIXUmJnllKGUsXCJzY3JpcHRcIikpLHN9LGNsZWFuRGF0YTpmdW5jdGlvbihlKXtmb3IodmFyIHQsbixyLGk9dy5ldmVudC5zcGVjaWFsLG89MDt2b2lkIDAhPT0obj1lW29dKTtvKyspaWYoWShuKSl7aWYodD1uW0ouZXhwYW5kb10pe2lmKHQuZXZlbnRzKWZvcihyIGluIHQuZXZlbnRzKWlbcl0/dy5ldmVudC5yZW1vdmUobixyKTp3LnJlbW92ZUV2ZW50KG4scix0LmhhbmRsZSk7bltKLmV4cGFuZG9dPXZvaWQgMH1uW0suZXhwYW5kb10mJihuW0suZXhwYW5kb109dm9pZCAwKX19fSksdy5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbihlKXtyZXR1cm4gSWUodGhpcyxlLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGUpe3JldHVybiBJZSh0aGlzLGUpfSx0ZXh0OmZ1bmN0aW9uKGUpe3JldHVybiB6KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWU/dy50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWUpfSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIFJlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHxMZSh0aGlzLGUpLmFwcGVuZENoaWxkKGUpfSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gUmUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciB0PUxlKHRoaXMsZSk7dC5pbnNlcnRCZWZvcmUoZSx0LmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gUmUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gUmUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD0wO251bGwhPShlPXRoaXNbdF0pO3QrKykxPT09ZS5ub2RlVHlwZSYmKHcuY2xlYW5EYXRhKHllKGUsITEpKSxlLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihlLHQpe3JldHVybiBlPW51bGwhPWUmJmUsdD1udWxsPT10P2U6dCx0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiB3LmNsb25lKHRoaXMsZSx0KX0pfSxodG1sOmZ1bmN0aW9uKGUpe3JldHVybiB6KHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc1swXXx8e30sbj0wLHI9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09ZSYmMT09PXQubm9kZVR5cGUpcmV0dXJuIHQuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhQWUudGVzdChlKSYmIWdlWyhkZS5leGVjKGUpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2U9dy5odG1sUHJlZmlsdGVyKGUpO3RyeXtmb3IoO248cjtuKyspMT09PSh0PXRoaXNbbl18fHt9KS5ub2RlVHlwZSYmKHcuY2xlYW5EYXRhKHllKHQsITEpKSx0LmlubmVySFRNTD1lKTt0PTB9Y2F0Y2goZSl7fX10JiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGUpfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGU9W107cmV0dXJuIFJlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKHQpe3ZhciBuPXRoaXMucGFyZW50Tm9kZTt3LmluQXJyYXkodGhpcyxlKTwwJiYody5jbGVhbkRhdGEoeWUodGhpcykpLG4mJm4ucmVwbGFjZUNoaWxkKHQsdGhpcykpfSxlKX19KSx3LmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oZSx0KXt3LmZuW2VdPWZ1bmN0aW9uKGUpe2Zvcih2YXIgbixyPVtdLGk9dyhlKSxvPWkubGVuZ3RoLTEsYT0wO2E8PW87YSsrKW49YT09PW8/dGhpczp0aGlzLmNsb25lKCEwKSx3KGlbYV0pW3RdKG4pLHMuYXBwbHkocixuLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2socil9fSk7dmFyIFdlPW5ldyBSZWdFeHAoXCJeKFwiK3JlK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLCRlPWZ1bmN0aW9uKHQpe3ZhciBuPXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gbiYmbi5vcGVuZXJ8fChuPWUpLG4uZ2V0Q29tcHV0ZWRTdHlsZSh0KX0sQmU9bmV3IFJlZ0V4cChvZS5qb2luKFwifFwiKSxcImlcIik7IWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe2lmKGMpe2wuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHg7d2lkdGg6NjBweDttYXJnaW4tdG9wOjFweDtwYWRkaW5nOjA7Ym9yZGVyOjBcIixjLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzpzY3JvbGw7bWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt3aWR0aDo2MCU7dG9wOjElXCIsYmUuYXBwZW5kQ2hpbGQobCkuYXBwZW5kQ2hpbGQoYyk7dmFyIHQ9ZS5nZXRDb21wdXRlZFN0eWxlKGMpO2k9XCIxJVwiIT09dC50b3AsdT0xMj09PW4odC5tYXJnaW5MZWZ0KSxjLnN0eWxlLnJpZ2h0PVwiNjAlXCIscz0zNj09PW4odC5yaWdodCksbz0zNj09PW4odC53aWR0aCksYy5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsYT0zNj09PWMub2Zmc2V0V2lkdGh8fFwiYWJzb2x1dGVcIixiZS5yZW1vdmVDaGlsZChsKSxjPW51bGx9fWZ1bmN0aW9uIG4oZSl7cmV0dXJuIE1hdGgucm91bmQocGFyc2VGbG9hdChlKSl9dmFyIGksbyxhLHMsdSxsPXIuY3JlYXRlRWxlbWVudChcImRpdlwiKSxjPXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtjLnN0eWxlJiYoYy5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsYy5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsaC5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09Yy5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCx3LmV4dGVuZChoLHtib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiB0KCksb30scGl4ZWxCb3hTdHlsZXM6ZnVuY3Rpb24oKXtyZXR1cm4gdCgpLHN9LHBpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gdCgpLGl9LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiB0KCksdX0sc2Nyb2xsYm94U2l6ZTpmdW5jdGlvbigpe3JldHVybiB0KCksYX19KSl9KCk7ZnVuY3Rpb24gRmUoZSx0LG4pe3ZhciByLGksbyxhLHM9ZS5zdHlsZTtyZXR1cm4obj1ufHwkZShlKSkmJihcIlwiIT09KGE9bi5nZXRQcm9wZXJ0eVZhbHVlKHQpfHxuW3RdKXx8dy5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl8fChhPXcuc3R5bGUoZSx0KSksIWgucGl4ZWxCb3hTdHlsZXMoKSYmV2UudGVzdChhKSYmQmUudGVzdCh0KSYmKHI9cy53aWR0aCxpPXMubWluV2lkdGgsbz1zLm1heFdpZHRoLHMubWluV2lkdGg9cy5tYXhXaWR0aD1zLndpZHRoPWEsYT1uLndpZHRoLHMud2lkdGg9cixzLm1pbldpZHRoPWkscy5tYXhXaWR0aD1vKSksdm9pZCAwIT09YT9hK1wiXCI6YX1mdW5jdGlvbiBfZShlLHQpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtpZighZSgpKXJldHVybih0aGlzLmdldD10KS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7ZGVsZXRlIHRoaXMuZ2V0fX19dmFyIHplPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxYZT0vXi0tLyxVZT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sVmU9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifSxHZT1bXCJXZWJraXRcIixcIk1velwiLFwibXNcIl0sWWU9ci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlO2Z1bmN0aW9uIFFlKGUpe2lmKGUgaW4gWWUpcmV0dXJuIGU7dmFyIHQ9ZVswXS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSksbj1HZS5sZW5ndGg7d2hpbGUobi0tKWlmKChlPUdlW25dK3QpaW4gWWUpcmV0dXJuIGV9ZnVuY3Rpb24gSmUoZSl7dmFyIHQ9dy5jc3NQcm9wc1tlXTtyZXR1cm4gdHx8KHQ9dy5jc3NQcm9wc1tlXT1RZShlKXx8ZSksdH1mdW5jdGlvbiBLZShlLHQsbil7dmFyIHI9aWUuZXhlYyh0KTtyZXR1cm4gcj9NYXRoLm1heCgwLHJbMl0tKG58fDApKSsoclszXXx8XCJweFwiKTp0fWZ1bmN0aW9uIFplKGUsdCxuLHIsaSxvKXt2YXIgYT1cIndpZHRoXCI9PT10PzE6MCxzPTAsdT0wO2lmKG49PT0ocj9cImJvcmRlclwiOlwiY29udGVudFwiKSlyZXR1cm4gMDtmb3IoO2E8NDthKz0yKVwibWFyZ2luXCI9PT1uJiYodSs9dy5jc3MoZSxuK29lW2FdLCEwLGkpKSxyPyhcImNvbnRlbnRcIj09PW4mJih1LT13LmNzcyhlLFwicGFkZGluZ1wiK29lW2FdLCEwLGkpKSxcIm1hcmdpblwiIT09biYmKHUtPXcuY3NzKGUsXCJib3JkZXJcIitvZVthXStcIldpZHRoXCIsITAsaSkpKToodSs9dy5jc3MoZSxcInBhZGRpbmdcIitvZVthXSwhMCxpKSxcInBhZGRpbmdcIiE9PW4/dSs9dy5jc3MoZSxcImJvcmRlclwiK29lW2FdK1wiV2lkdGhcIiwhMCxpKTpzKz13LmNzcyhlLFwiYm9yZGVyXCIrb2VbYV0rXCJXaWR0aFwiLCEwLGkpKTtyZXR1cm4hciYmbz49MCYmKHUrPU1hdGgubWF4KDAsTWF0aC5jZWlsKGVbXCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKV0tby11LXMtLjUpKSksdX1mdW5jdGlvbiBldChlLHQsbil7dmFyIHI9JGUoZSksaT1GZShlLHQsciksbz1cImJvcmRlci1ib3hcIj09PXcuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxyKSxhPW87aWYoV2UudGVzdChpKSl7aWYoIW4pcmV0dXJuIGk7aT1cImF1dG9cIn1yZXR1cm4gYT1hJiYoaC5ib3hTaXppbmdSZWxpYWJsZSgpfHxpPT09ZS5zdHlsZVt0XSksKFwiYXV0b1wiPT09aXx8IXBhcnNlRmxvYXQoaSkmJlwiaW5saW5lXCI9PT13LmNzcyhlLFwiZGlzcGxheVwiLCExLHIpKSYmKGk9ZVtcIm9mZnNldFwiK3RbMF0udG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpXSxhPSEwKSwoaT1wYXJzZUZsb2F0KGkpfHwwKStaZShlLHQsbnx8KG8/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksYSxyLGkpK1wicHhcIn13LmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihlLHQpe2lmKHQpe3ZhciBuPUZlKGUsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1uP1wiMVwiOm59fX19LGNzc051bWJlcjp7YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsY29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e30sc3R5bGU6ZnVuY3Rpb24oZSx0LG4scil7aWYoZSYmMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiZlLnN0eWxlKXt2YXIgaSxvLGEscz1HKHQpLHU9WGUudGVzdCh0KSxsPWUuc3R5bGU7aWYodXx8KHQ9SmUocykpLGE9dy5jc3NIb29rc1t0XXx8dy5jc3NIb29rc1tzXSx2b2lkIDA9PT1uKXJldHVybiBhJiZcImdldFwiaW4gYSYmdm9pZCAwIT09KGk9YS5nZXQoZSwhMSxyKSk/aTpsW3RdO1wic3RyaW5nXCI9PShvPXR5cGVvZiBuKSYmKGk9aWUuZXhlYyhuKSkmJmlbMV0mJihuPXVlKGUsdCxpKSxvPVwibnVtYmVyXCIpLG51bGwhPW4mJm49PT1uJiYoXCJudW1iZXJcIj09PW8mJihuKz1pJiZpWzNdfHwody5jc3NOdW1iZXJbc10/XCJcIjpcInB4XCIpKSxoLmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PW58fDAhPT10LmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwobFt0XT1cImluaGVyaXRcIiksYSYmXCJzZXRcImluIGEmJnZvaWQgMD09PShuPWEuc2V0KGUsbixyKSl8fCh1P2wuc2V0UHJvcGVydHkodCxuKTpsW3RdPW4pKX19LGNzczpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscz1HKHQpO3JldHVybiBYZS50ZXN0KHQpfHwodD1KZShzKSksKGE9dy5jc3NIb29rc1t0XXx8dy5jc3NIb29rc1tzXSkmJlwiZ2V0XCJpbiBhJiYoaT1hLmdldChlLCEwLG4pKSx2b2lkIDA9PT1pJiYoaT1GZShlLHQscikpLFwibm9ybWFsXCI9PT1pJiZ0IGluIFZlJiYoaT1WZVt0XSksXCJcIj09PW58fG4/KG89cGFyc2VGbG9hdChpKSwhMD09PW58fGlzRmluaXRlKG8pP298fDA6aSk6aX19KSx3LmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihlLHQpe3cuY3NzSG9va3NbdF09e2dldDpmdW5jdGlvbihlLG4scil7aWYobilyZXR1cm4hemUudGVzdCh3LmNzcyhlLFwiZGlzcGxheVwiKSl8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg/ZXQoZSx0LHIpOnNlKGUsVWUsZnVuY3Rpb24oKXtyZXR1cm4gZXQoZSx0LHIpfSl9LHNldDpmdW5jdGlvbihlLG4scil7dmFyIGksbz0kZShlKSxhPVwiYm9yZGVyLWJveFwiPT09dy5jc3MoZSxcImJveFNpemluZ1wiLCExLG8pLHM9ciYmWmUoZSx0LHIsYSxvKTtyZXR1cm4gYSYmaC5zY3JvbGxib3hTaXplKCk9PT1vLnBvc2l0aW9uJiYocy09TWF0aC5jZWlsKGVbXCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKV0tcGFyc2VGbG9hdChvW3RdKS1aZShlLHQsXCJib3JkZXJcIiwhMSxvKS0uNSkpLHMmJihpPWllLmV4ZWMobikpJiZcInB4XCIhPT0oaVszXXx8XCJweFwiKSYmKGUuc3R5bGVbdF09bixuPXcuY3NzKGUsdCkpLEtlKGUsbixzKX19fSksdy5jc3NIb29rcy5tYXJnaW5MZWZ0PV9lKGgucmVsaWFibGVNYXJnaW5MZWZ0LGZ1bmN0aW9uKGUsdCl7aWYodClyZXR1cm4ocGFyc2VGbG9hdChGZShlLFwibWFyZ2luTGVmdFwiKSl8fGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC1zZShlLHttYXJnaW5MZWZ0OjB9LGZ1bmN0aW9uKCl7cmV0dXJuIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pKStcInB4XCJ9KSx3LmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihlLHQpe3cuY3NzSG9va3NbZSt0XT17ZXhwYW5kOmZ1bmN0aW9uKG4pe2Zvcih2YXIgcj0wLGk9e30sbz1cInN0cmluZ1wiPT10eXBlb2Ygbj9uLnNwbGl0KFwiIFwiKTpbbl07cjw0O3IrKylpW2Urb2Vbcl0rdF09b1tyXXx8b1tyLTJdfHxvWzBdO3JldHVybiBpfX0sXCJtYXJnaW5cIiE9PWUmJih3LmNzc0hvb2tzW2UrdF0uc2V0PUtlKX0pLHcuZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oZSx0KXtyZXR1cm4geih0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89e30sYT0wO2lmKEFycmF5LmlzQXJyYXkodCkpe2ZvcihyPSRlKGUpLGk9dC5sZW5ndGg7YTxpO2ErKylvW3RbYV1dPXcuY3NzKGUsdFthXSwhMSxyKTtyZXR1cm4gb31yZXR1cm4gdm9pZCAwIT09bj93LnN0eWxlKGUsdCxuKTp3LmNzcyhlLHQpfSxlLHQsYXJndW1lbnRzLmxlbmd0aD4xKX19KTtmdW5jdGlvbiB0dChlLHQsbixyLGkpe3JldHVybiBuZXcgdHQucHJvdG90eXBlLmluaXQoZSx0LG4scixpKX13LlR3ZWVuPXR0LHR0LnByb3RvdHlwZT17Y29uc3RydWN0b3I6dHQsaW5pdDpmdW5jdGlvbihlLHQsbixyLGksbyl7dGhpcy5lbGVtPWUsdGhpcy5wcm9wPW4sdGhpcy5lYXNpbmc9aXx8dy5lYXNpbmcuX2RlZmF1bHQsdGhpcy5vcHRpb25zPXQsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPXIsdGhpcy51bml0PW98fCh3LmNzc051bWJlcltuXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBlPXR0LnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBlJiZlLmdldD9lLmdldCh0aGlzKTp0dC5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oZSl7dmFyIHQsbj10dC5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPXQ9dy5lYXNpbmdbdGhpcy5lYXNpbmddKGUsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmUsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9dD1lLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSp0K3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLG4mJm4uc2V0P24uc2V0KHRoaXMpOnR0LnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319LHR0LnByb3RvdHlwZS5pbml0LnByb3RvdHlwZT10dC5wcm90b3R5cGUsdHQucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiAxIT09ZS5lbGVtLm5vZGVUeXBlfHxudWxsIT1lLmVsZW1bZS5wcm9wXSYmbnVsbD09ZS5lbGVtLnN0eWxlW2UucHJvcF0/ZS5lbGVtW2UucHJvcF06KHQ9dy5jc3MoZS5lbGVtLGUucHJvcCxcIlwiKSkmJlwiYXV0b1wiIT09dD90OjB9LHNldDpmdW5jdGlvbihlKXt3LmZ4LnN0ZXBbZS5wcm9wXT93LmZ4LnN0ZXBbZS5wcm9wXShlKToxIT09ZS5lbGVtLm5vZGVUeXBlfHxudWxsPT1lLmVsZW0uc3R5bGVbdy5jc3NQcm9wc1tlLnByb3BdXSYmIXcuY3NzSG9va3NbZS5wcm9wXT9lLmVsZW1bZS5wcm9wXT1lLm5vdzp3LnN0eWxlKGUuZWxlbSxlLnByb3AsZS5ub3crZS51bml0KX19fSx0dC5wcm9wSG9va3Muc2Nyb2xsVG9wPXR0LnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oZSl7ZS5lbGVtLm5vZGVUeXBlJiZlLmVsZW0ucGFyZW50Tm9kZSYmKGUuZWxlbVtlLnByb3BdPWUubm93KX19LHcuZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LHN3aW5nOmZ1bmN0aW9uKGUpe3JldHVybi41LU1hdGguY29zKGUqTWF0aC5QSSkvMn0sX2RlZmF1bHQ6XCJzd2luZ1wifSx3LmZ4PXR0LnByb3RvdHlwZS5pbml0LHcuZnguc3RlcD17fTt2YXIgbnQscnQsaXQ9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLG90PS9xdWV1ZUhvb2tzJC87ZnVuY3Rpb24gYXQoKXtydCYmKCExPT09ci5oaWRkZW4mJmUucmVxdWVzdEFuaW1hdGlvbkZyYW1lP2UucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGF0KTplLnNldFRpbWVvdXQoYXQsdy5meC5pbnRlcnZhbCksdy5meC50aWNrKCkpfWZ1bmN0aW9uIHN0KCl7cmV0dXJuIGUuc2V0VGltZW91dChmdW5jdGlvbigpe250PXZvaWQgMH0pLG50PURhdGUubm93KCl9ZnVuY3Rpb24gdXQoZSx0KXt2YXIgbixyPTAsaT17aGVpZ2h0OmV9O2Zvcih0PXQ/MTowO3I8NDtyKz0yLXQpaVtcIm1hcmdpblwiKyhuPW9lW3JdKV09aVtcInBhZGRpbmdcIituXT1lO3JldHVybiB0JiYoaS5vcGFjaXR5PWkud2lkdGg9ZSksaX1mdW5jdGlvbiBsdChlLHQsbil7Zm9yKHZhciByLGk9KHB0LnR3ZWVuZXJzW3RdfHxbXSkuY29uY2F0KHB0LnR3ZWVuZXJzW1wiKlwiXSksbz0wLGE9aS5sZW5ndGg7bzxhO28rKylpZihyPWlbb10uY2FsbChuLHQsZSkpcmV0dXJuIHJ9ZnVuY3Rpb24gY3QoZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsLGMsZj1cIndpZHRoXCJpbiB0fHxcImhlaWdodFwiaW4gdCxwPXRoaXMsZD17fSxoPWUuc3R5bGUsZz1lLm5vZGVUeXBlJiZhZShlKSx5PUouZ2V0KGUsXCJmeHNob3dcIik7bi5xdWV1ZXx8KG51bGw9PShhPXcuX3F1ZXVlSG9va3MoZSxcImZ4XCIpKS51bnF1ZXVlZCYmKGEudW5xdWV1ZWQ9MCxzPWEuZW1wdHkuZmlyZSxhLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXthLnVucXVldWVkfHxzKCl9KSxhLnVucXVldWVkKysscC5hbHdheXMoZnVuY3Rpb24oKXtwLmFsd2F5cyhmdW5jdGlvbigpe2EudW5xdWV1ZWQtLSx3LnF1ZXVlKGUsXCJmeFwiKS5sZW5ndGh8fGEuZW1wdHkuZmlyZSgpfSl9KSk7Zm9yKHIgaW4gdClpZihpPXRbcl0saXQudGVzdChpKSl7aWYoZGVsZXRlIHRbcl0sbz1vfHxcInRvZ2dsZVwiPT09aSxpPT09KGc/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWl8fCF5fHx2b2lkIDA9PT15W3JdKWNvbnRpbnVlO2c9ITB9ZFtyXT15JiZ5W3JdfHx3LnN0eWxlKGUscil9aWYoKHU9IXcuaXNFbXB0eU9iamVjdCh0KSl8fCF3LmlzRW1wdHlPYmplY3QoZCkpe2YmJjE9PT1lLm5vZGVUeXBlJiYobi5vdmVyZmxvdz1baC5vdmVyZmxvdyxoLm92ZXJmbG93WCxoLm92ZXJmbG93WV0sbnVsbD09KGw9eSYmeS5kaXNwbGF5KSYmKGw9Si5nZXQoZSxcImRpc3BsYXlcIikpLFwibm9uZVwiPT09KGM9dy5jc3MoZSxcImRpc3BsYXlcIikpJiYobD9jPWw6KGZlKFtlXSwhMCksbD1lLnN0eWxlLmRpc3BsYXl8fGwsYz13LmNzcyhlLFwiZGlzcGxheVwiKSxmZShbZV0pKSksKFwiaW5saW5lXCI9PT1jfHxcImlubGluZS1ibG9ja1wiPT09YyYmbnVsbCE9bCkmJlwibm9uZVwiPT09dy5jc3MoZSxcImZsb2F0XCIpJiYodXx8KHAuZG9uZShmdW5jdGlvbigpe2guZGlzcGxheT1sfSksbnVsbD09bCYmKGM9aC5kaXNwbGF5LGw9XCJub25lXCI9PT1jP1wiXCI6YykpLGguZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksbi5vdmVyZmxvdyYmKGgub3ZlcmZsb3c9XCJoaWRkZW5cIixwLmFsd2F5cyhmdW5jdGlvbigpe2gub3ZlcmZsb3c9bi5vdmVyZmxvd1swXSxoLm92ZXJmbG93WD1uLm92ZXJmbG93WzFdLGgub3ZlcmZsb3dZPW4ub3ZlcmZsb3dbMl19KSksdT0hMTtmb3IociBpbiBkKXV8fCh5P1wiaGlkZGVuXCJpbiB5JiYoZz15LmhpZGRlbik6eT1KLmFjY2VzcyhlLFwiZnhzaG93XCIse2Rpc3BsYXk6bH0pLG8mJih5LmhpZGRlbj0hZyksZyYmZmUoW2VdLCEwKSxwLmRvbmUoZnVuY3Rpb24oKXtnfHxmZShbZV0pLEoucmVtb3ZlKGUsXCJmeHNob3dcIik7Zm9yKHIgaW4gZCl3LnN0eWxlKGUscixkW3JdKX0pKSx1PWx0KGc/eVtyXTowLHIscCksciBpbiB5fHwoeVtyXT11LnN0YXJ0LGcmJih1LmVuZD11LnN0YXJ0LHUuc3RhcnQ9MCkpfX1mdW5jdGlvbiBmdChlLHQpe3ZhciBuLHIsaSxvLGE7Zm9yKG4gaW4gZSlpZihyPUcobiksaT10W3JdLG89ZVtuXSxBcnJheS5pc0FycmF5KG8pJiYoaT1vWzFdLG89ZVtuXT1vWzBdKSxuIT09ciYmKGVbcl09byxkZWxldGUgZVtuXSksKGE9dy5jc3NIb29rc1tyXSkmJlwiZXhwYW5kXCJpbiBhKXtvPWEuZXhwYW5kKG8pLGRlbGV0ZSBlW3JdO2ZvcihuIGluIG8pbiBpbiBlfHwoZVtuXT1vW25dLHRbbl09aSl9ZWxzZSB0W3JdPWl9ZnVuY3Rpb24gcHQoZSx0LG4pe3ZhciByLGksbz0wLGE9cHQucHJlZmlsdGVycy5sZW5ndGgscz13LkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIHUuZWxlbX0pLHU9ZnVuY3Rpb24oKXtpZihpKXJldHVybiExO2Zvcih2YXIgdD1udHx8c3QoKSxuPU1hdGgubWF4KDAsbC5zdGFydFRpbWUrbC5kdXJhdGlvbi10KSxyPTEtKG4vbC5kdXJhdGlvbnx8MCksbz0wLGE9bC50d2VlbnMubGVuZ3RoO288YTtvKyspbC50d2VlbnNbb10ucnVuKHIpO3JldHVybiBzLm5vdGlmeVdpdGgoZSxbbCxyLG5dKSxyPDEmJmE/bjooYXx8cy5ub3RpZnlXaXRoKGUsW2wsMSwwXSkscy5yZXNvbHZlV2l0aChlLFtsXSksITEpfSxsPXMucHJvbWlzZSh7ZWxlbTplLHByb3BzOncuZXh0ZW5kKHt9LHQpLG9wdHM6dy5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOncuZWFzaW5nLl9kZWZhdWx0fSxuKSxvcmlnaW5hbFByb3BlcnRpZXM6dCxvcmlnaW5hbE9wdGlvbnM6bixzdGFydFRpbWU6bnR8fHN0KCksZHVyYXRpb246bi5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24odCxuKXt2YXIgcj13LlR3ZWVuKGUsbC5vcHRzLHQsbixsLm9wdHMuc3BlY2lhbEVhc2luZ1t0XXx8bC5vcHRzLmVhc2luZyk7cmV0dXJuIGwudHdlZW5zLnB1c2gocikscn0sc3RvcDpmdW5jdGlvbih0KXt2YXIgbj0wLHI9dD9sLnR3ZWVucy5sZW5ndGg6MDtpZihpKXJldHVybiB0aGlzO2ZvcihpPSEwO248cjtuKyspbC50d2VlbnNbbl0ucnVuKDEpO3JldHVybiB0PyhzLm5vdGlmeVdpdGgoZSxbbCwxLDBdKSxzLnJlc29sdmVXaXRoKGUsW2wsdF0pKTpzLnJlamVjdFdpdGgoZSxbbCx0XSksdGhpc319KSxjPWwucHJvcHM7Zm9yKGZ0KGMsbC5vcHRzLnNwZWNpYWxFYXNpbmcpO288YTtvKyspaWYocj1wdC5wcmVmaWx0ZXJzW29dLmNhbGwobCxlLGMsbC5vcHRzKSlyZXR1cm4gZyhyLnN0b3ApJiYody5fcXVldWVIb29rcyhsLmVsZW0sbC5vcHRzLnF1ZXVlKS5zdG9wPXIuc3RvcC5iaW5kKHIpKSxyO3JldHVybiB3Lm1hcChjLGx0LGwpLGcobC5vcHRzLnN0YXJ0KSYmbC5vcHRzLnN0YXJ0LmNhbGwoZSxsKSxsLnByb2dyZXNzKGwub3B0cy5wcm9ncmVzcykuZG9uZShsLm9wdHMuZG9uZSxsLm9wdHMuY29tcGxldGUpLmZhaWwobC5vcHRzLmZhaWwpLmFsd2F5cyhsLm9wdHMuYWx3YXlzKSx3LmZ4LnRpbWVyKHcuZXh0ZW5kKHUse2VsZW06ZSxhbmltOmwscXVldWU6bC5vcHRzLnF1ZXVlfSkpLGx9dy5BbmltYXRpb249dy5leHRlbmQocHQse3R3ZWVuZXJzOntcIipcIjpbZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLmNyZWF0ZVR3ZWVuKGUsdCk7cmV0dXJuIHVlKG4uZWxlbSxlLGllLmV4ZWModCksbiksbn1dfSx0d2VlbmVyOmZ1bmN0aW9uKGUsdCl7ZyhlKT8odD1lLGU9W1wiKlwiXSk6ZT1lLm1hdGNoKE0pO2Zvcih2YXIgbixyPTAsaT1lLmxlbmd0aDtyPGk7cisrKW49ZVtyXSxwdC50d2VlbmVyc1tuXT1wdC50d2VlbmVyc1tuXXx8W10scHQudHdlZW5lcnNbbl0udW5zaGlmdCh0KX0scHJlZmlsdGVyczpbY3RdLHByZWZpbHRlcjpmdW5jdGlvbihlLHQpe3Q/cHQucHJlZmlsdGVycy51bnNoaWZ0KGUpOnB0LnByZWZpbHRlcnMucHVzaChlKX19KSx3LnNwZWVkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1lJiZcIm9iamVjdFwiPT10eXBlb2YgZT93LmV4dGVuZCh7fSxlKTp7Y29tcGxldGU6bnx8IW4mJnR8fGcoZSkmJmUsZHVyYXRpb246ZSxlYXNpbmc6biYmdHx8dCYmIWcodCkmJnR9O3JldHVybiB3LmZ4Lm9mZj9yLmR1cmF0aW9uPTA6XCJudW1iZXJcIiE9dHlwZW9mIHIuZHVyYXRpb24mJihyLmR1cmF0aW9uIGluIHcuZnguc3BlZWRzP3IuZHVyYXRpb249dy5meC5zcGVlZHNbci5kdXJhdGlvbl06ci5kdXJhdGlvbj13LmZ4LnNwZWVkcy5fZGVmYXVsdCksbnVsbCE9ci5xdWV1ZSYmITAhPT1yLnF1ZXVlfHwoci5xdWV1ZT1cImZ4XCIpLHIub2xkPXIuY29tcGxldGUsci5jb21wbGV0ZT1mdW5jdGlvbigpe2coci5vbGQpJiZyLm9sZC5jYWxsKHRoaXMpLHIucXVldWUmJncuZGVxdWV1ZSh0aGlzLHIucXVldWUpfSxyfSx3LmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiB0aGlzLmZpbHRlcihhZSkuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OnR9LGUsbixyKX0sYW5pbWF0ZTpmdW5jdGlvbihlLHQsbixyKXt2YXIgaT13LmlzRW1wdHlPYmplY3QoZSksbz13LnNwZWVkKHQsbixyKSxhPWZ1bmN0aW9uKCl7dmFyIHQ9cHQodGhpcyx3LmV4dGVuZCh7fSxlKSxvKTsoaXx8Si5nZXQodGhpcyxcImZpbmlzaFwiKSkmJnQuc3RvcCghMCl9O3JldHVybiBhLmZpbmlzaD1hLGl8fCExPT09by5xdWV1ZT90aGlzLmVhY2goYSk6dGhpcy5xdWV1ZShvLnF1ZXVlLGEpfSxzdG9wOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1mdW5jdGlvbihlKXt2YXIgdD1lLnN0b3A7ZGVsZXRlIGUuc3RvcCx0KG4pfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZSYmKG49dCx0PWUsZT12b2lkIDApLHQmJiExIT09ZSYmdGhpcy5xdWV1ZShlfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PSEwLGk9bnVsbCE9ZSYmZStcInF1ZXVlSG9va3NcIixvPXcudGltZXJzLGE9Si5nZXQodGhpcyk7aWYoaSlhW2ldJiZhW2ldLnN0b3AmJnIoYVtpXSk7ZWxzZSBmb3IoaSBpbiBhKWFbaV0mJmFbaV0uc3RvcCYmb3QudGVzdChpKSYmcihhW2ldKTtmb3IoaT1vLmxlbmd0aDtpLS07KW9baV0uZWxlbSE9PXRoaXN8fG51bGwhPWUmJm9baV0ucXVldWUhPT1lfHwob1tpXS5hbmltLnN0b3AobiksdD0hMSxvLnNwbGljZShpLDEpKTshdCYmbnx8dy5kZXF1ZXVlKHRoaXMsZSl9KX0sZmluaXNoOmZ1bmN0aW9uKGUpe3JldHVybiExIT09ZSYmKGU9ZXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdCxuPUouZ2V0KHRoaXMpLHI9bltlK1wicXVldWVcIl0saT1uW2UrXCJxdWV1ZUhvb2tzXCJdLG89dy50aW1lcnMsYT1yP3IubGVuZ3RoOjA7Zm9yKG4uZmluaXNoPSEwLHcucXVldWUodGhpcyxlLFtdKSxpJiZpLnN0b3AmJmkuc3RvcC5jYWxsKHRoaXMsITApLHQ9by5sZW5ndGg7dC0tOylvW3RdLmVsZW09PT10aGlzJiZvW3RdLnF1ZXVlPT09ZSYmKG9bdF0uYW5pbS5zdG9wKCEwKSxvLnNwbGljZSh0LDEpKTtmb3IodD0wO3Q8YTt0Kyspclt0XSYmclt0XS5maW5pc2gmJnJbdF0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIG4uZmluaXNofSl9fSksdy5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihlLHQpe3ZhciBuPXcuZm5bdF07dy5mblt0XT1mdW5jdGlvbihlLHIsaSl7cmV0dXJuIG51bGw9PWV8fFwiYm9vbGVhblwiPT10eXBlb2YgZT9uLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUodXQodCwhMCksZSxyLGkpfX0pLHcuZWFjaCh7c2xpZGVEb3duOnV0KFwic2hvd1wiKSxzbGlkZVVwOnV0KFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTp1dChcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGUsdCl7dy5mbltlXT1mdW5jdGlvbihlLG4scil7cmV0dXJuIHRoaXMuYW5pbWF0ZSh0LGUsbixyKX19KSx3LnRpbWVycz1bXSx3LmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgZSx0PTAsbj13LnRpbWVycztmb3IobnQ9RGF0ZS5ub3coKTt0PG4ubGVuZ3RoO3QrKykoZT1uW3RdKSgpfHxuW3RdIT09ZXx8bi5zcGxpY2UodC0tLDEpO24ubGVuZ3RofHx3LmZ4LnN0b3AoKSxudD12b2lkIDB9LHcuZngudGltZXI9ZnVuY3Rpb24oZSl7dy50aW1lcnMucHVzaChlKSx3LmZ4LnN0YXJ0KCl9LHcuZnguaW50ZXJ2YWw9MTMsdy5meC5zdGFydD1mdW5jdGlvbigpe3J0fHwocnQ9ITAsYXQoKSl9LHcuZnguc3RvcD1mdW5jdGlvbigpe3J0PW51bGx9LHcuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LHcuZm4uZGVsYXk9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdD13LmZ4P3cuZnguc3BlZWRzW3RdfHx0OnQsbj1ufHxcImZ4XCIsdGhpcy5xdWV1ZShuLGZ1bmN0aW9uKG4scil7dmFyIGk9ZS5zZXRUaW1lb3V0KG4sdCk7ci5zdG9wPWZ1bmN0aW9uKCl7ZS5jbGVhclRpbWVvdXQoaSl9fSl9LGZ1bmN0aW9uKCl7dmFyIGU9ci5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksdD1yLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIikuYXBwZW5kQ2hpbGQoci5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKTtlLnR5cGU9XCJjaGVja2JveFwiLGguY2hlY2tPbj1cIlwiIT09ZS52YWx1ZSxoLm9wdFNlbGVjdGVkPXQuc2VsZWN0ZWQsKGU9ci5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnZhbHVlPVwidFwiLGUudHlwZT1cInJhZGlvXCIsaC5yYWRpb1ZhbHVlPVwidFwiPT09ZS52YWx1ZX0oKTt2YXIgZHQsaHQ9dy5leHByLmF0dHJIYW5kbGU7dy5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4geih0aGlzLHcuYXR0cixlLHQsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dy5yZW1vdmVBdHRyKHRoaXMsZSl9KX19KSx3LmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPWUubm9kZVR5cGU7aWYoMyE9PW8mJjghPT1vJiYyIT09bylyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgZS5nZXRBdHRyaWJ1dGU/dy5wcm9wKGUsdCxuKTooMT09PW8mJncuaXNYTUxEb2MoZSl8fChpPXcuYXR0ckhvb2tzW3QudG9Mb3dlckNhc2UoKV18fCh3LmV4cHIubWF0Y2guYm9vbC50ZXN0KHQpP2R0OnZvaWQgMCkpLHZvaWQgMCE9PW4/bnVsbD09PW4/dm9pZCB3LnJlbW92ZUF0dHIoZSx0KTppJiZcInNldFwiaW4gaSYmdm9pZCAwIT09KHI9aS5zZXQoZSxuLHQpKT9yOihlLnNldEF0dHJpYnV0ZSh0LG4rXCJcIiksbik6aSYmXCJnZXRcImluIGkmJm51bGwhPT0ocj1pLmdldChlLHQpKT9yOm51bGw9PShyPXcuZmluZC5hdHRyKGUsdCkpP3ZvaWQgMDpyKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oZSx0KXtpZighaC5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT10JiZOKGUsXCJpbnB1dFwiKSl7dmFyIG49ZS52YWx1ZTtyZXR1cm4gZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsdCksbiYmKGUudmFsdWU9biksdH19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MCxpPXQmJnQubWF0Y2goTSk7aWYoaSYmMT09PWUubm9kZVR5cGUpd2hpbGUobj1pW3IrK10pZS5yZW1vdmVBdHRyaWJ1dGUobil9fSksZHQ9e3NldDpmdW5jdGlvbihlLHQsbil7cmV0dXJuITE9PT10P3cucmVtb3ZlQXR0cihlLG4pOmUuc2V0QXR0cmlidXRlKG4sbiksbn19LHcuZWFjaCh3LmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oZSx0KXt2YXIgbj1odFt0XXx8dy5maW5kLmF0dHI7aHRbdF09ZnVuY3Rpb24oZSx0LHIpe3ZhciBpLG8sYT10LnRvTG93ZXJDYXNlKCk7cmV0dXJuIHJ8fChvPWh0W2FdLGh0W2FdPWksaT1udWxsIT1uKGUsdCxyKT9hOm51bGwsaHRbYV09byksaX19KTt2YXIgZ3Q9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSx5dD0vXig/OmF8YXJlYSkkL2k7dy5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oZSx0KXtyZXR1cm4geih0aGlzLHcucHJvcCxlLHQsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbdy5wcm9wRml4W2VdfHxlXX0pfX0pLHcuZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89ZS5ub2RlVHlwZTtpZigzIT09byYmOCE9PW8mJjIhPT1vKXJldHVybiAxPT09byYmdy5pc1hNTERvYyhlKXx8KHQ9dy5wcm9wRml4W3RdfHx0LGk9dy5wcm9wSG9va3NbdF0pLHZvaWQgMCE9PW4/aSYmXCJzZXRcImluIGkmJnZvaWQgMCE9PShyPWkuc2V0KGUsbix0KSk/cjplW3RdPW46aSYmXCJnZXRcImluIGkmJm51bGwhPT0ocj1pLmdldChlLHQpKT9yOmVbdF19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihlKXt2YXIgdD13LmZpbmQuYXR0cihlLFwidGFiaW5kZXhcIik7cmV0dXJuIHQ/cGFyc2VJbnQodCwxMCk6Z3QudGVzdChlLm5vZGVOYW1lKXx8eXQudGVzdChlLm5vZGVOYW1lKSYmZS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KSxoLm9wdFNlbGVjdGVkfHwody5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJnQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH0sc2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTt0JiYodC5zZWxlY3RlZEluZGV4LHQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpfX0pLHcuZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXt3LnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSk7ZnVuY3Rpb24gdnQoZSl7cmV0dXJuKGUubWF0Y2goTSl8fFtdKS5qb2luKFwiIFwiKX1mdW5jdGlvbiBtdChlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCJ9ZnVuY3Rpb24geHQoZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/ZTpcInN0cmluZ1wiPT10eXBlb2YgZT9lLm1hdGNoKE0pfHxbXTpbXX13LmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGksbyxhLHMsdT0wO2lmKGcoZSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbih0KXt3KHRoaXMpLmFkZENsYXNzKGUuY2FsbCh0aGlzLHQsbXQodGhpcykpKX0pO2lmKCh0PXh0KGUpKS5sZW5ndGgpd2hpbGUobj10aGlzW3UrK10paWYoaT1tdChuKSxyPTE9PT1uLm5vZGVUeXBlJiZcIiBcIit2dChpKStcIiBcIil7YT0wO3doaWxlKG89dFthKytdKXIuaW5kZXhPZihcIiBcIitvK1wiIFwiKTwwJiYocis9bytcIiBcIik7aSE9PShzPXZ0KHIpKSYmbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHMpfXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaSxvLGEscyx1PTA7aWYoZyhlKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKHQpe3codGhpcykucmVtb3ZlQ2xhc3MoZS5jYWxsKHRoaXMsdCxtdCh0aGlzKSkpfSk7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuYXR0cihcImNsYXNzXCIsXCJcIik7aWYoKHQ9eHQoZSkpLmxlbmd0aCl3aGlsZShuPXRoaXNbdSsrXSlpZihpPW10KG4pLHI9MT09PW4ubm9kZVR5cGUmJlwiIFwiK3Z0KGkpK1wiIFwiKXthPTA7d2hpbGUobz10W2ErK10pd2hpbGUoci5pbmRleE9mKFwiIFwiK28rXCIgXCIpPi0xKXI9ci5yZXBsYWNlKFwiIFwiK28rXCIgXCIsXCIgXCIpO2khPT0ocz12dChyKSkmJm4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixzKX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oZSx0KXt2YXIgbj10eXBlb2YgZSxyPVwic3RyaW5nXCI9PT1ufHxBcnJheS5pc0FycmF5KGUpO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgdCYmcj90P3RoaXMuYWRkQ2xhc3MoZSk6dGhpcy5yZW1vdmVDbGFzcyhlKTpnKGUpP3RoaXMuZWFjaChmdW5jdGlvbihuKXt3KHRoaXMpLnRvZ2dsZUNsYXNzKGUuY2FsbCh0aGlzLG4sbXQodGhpcyksdCksdCl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdCxpLG8sYTtpZihyKXtpPTAsbz13KHRoaXMpLGE9eHQoZSk7d2hpbGUodD1hW2krK10pby5oYXNDbGFzcyh0KT9vLnJlbW92ZUNsYXNzKHQpOm8uYWRkQ2xhc3ModCl9ZWxzZSB2b2lkIDAhPT1lJiZcImJvb2xlYW5cIiE9PW58fCgodD1tdCh0aGlzKSkmJkouc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsdCksdGhpcy5zZXRBdHRyaWJ1dGUmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIix0fHwhMT09PWU/XCJcIjpKLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj0wO3Q9XCIgXCIrZStcIiBcIjt3aGlsZShuPXRoaXNbcisrXSlpZigxPT09bi5ub2RlVHlwZSYmKFwiIFwiK3Z0KG10KG4pKStcIiBcIikuaW5kZXhPZih0KT4tMSlyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgYnQ9L1xcci9nO3cuZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGk9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gcj1nKGUpLHRoaXMuZWFjaChmdW5jdGlvbihuKXt2YXIgaTsxPT09dGhpcy5ub2RlVHlwZSYmKG51bGw9PShpPXI/ZS5jYWxsKHRoaXMsbix3KHRoaXMpLnZhbCgpKTplKT9pPVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIGk/aSs9XCJcIjpBcnJheS5pc0FycmF5KGkpJiYoaT13Lm1hcChpLGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6ZStcIlwifSkpLCh0PXcudmFsSG9va3NbdGhpcy50eXBlXXx8dy52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldKSYmXCJzZXRcImluIHQmJnZvaWQgMCE9PXQuc2V0KHRoaXMsaSxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT1pKSl9KTtpZihpKXJldHVybih0PXcudmFsSG9va3NbaS50eXBlXXx8dy52YWxIb29rc1tpLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldKSYmXCJnZXRcImluIHQmJnZvaWQgMCE9PShuPXQuZ2V0KGksXCJ2YWx1ZVwiKSk/bjpcInN0cmluZ1wiPT10eXBlb2Yobj1pLnZhbHVlKT9uLnJlcGxhY2UoYnQsXCJcIik6bnVsbD09bj9cIlwiOm59fX0pLHcuZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dy5maW5kLmF0dHIoZSxcInZhbHVlXCIpO3JldHVybiBudWxsIT10P3Q6dnQody50ZXh0KGUpKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpPWUub3B0aW9ucyxvPWUuc2VsZWN0ZWRJbmRleCxhPVwic2VsZWN0LW9uZVwiPT09ZS50eXBlLHM9YT9udWxsOltdLHU9YT9vKzE6aS5sZW5ndGg7Zm9yKHI9bzwwP3U6YT9vOjA7cjx1O3IrKylpZigoKG49aVtyXSkuc2VsZWN0ZWR8fHI9PT1vKSYmIW4uZGlzYWJsZWQmJighbi5wYXJlbnROb2RlLmRpc2FibGVkfHwhTihuLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKHQ9dyhuKS52YWwoKSxhKXJldHVybiB0O3MucHVzaCh0KX1yZXR1cm4gc30sc2V0OmZ1bmN0aW9uKGUsdCl7dmFyIG4scixpPWUub3B0aW9ucyxvPXcubWFrZUFycmF5KHQpLGE9aS5sZW5ndGg7d2hpbGUoYS0tKSgocj1pW2FdKS5zZWxlY3RlZD13LmluQXJyYXkody52YWxIb29rcy5vcHRpb24uZ2V0KHIpLG8pPi0xKSYmKG49ITApO3JldHVybiBufHwoZS5zZWxlY3RlZEluZGV4PS0xKSxvfX19fSksdy5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe3cudmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihlLHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIGUuY2hlY2tlZD13LmluQXJyYXkodyhlKS52YWwoKSx0KT4tMX19LGguY2hlY2tPbnx8KHcudmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT09ZS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6ZS52YWx1ZX0pfSksaC5mb2N1c2luPVwib25mb2N1c2luXCJpbiBlO3ZhciB3dD0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8sVHQ9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKX07dy5leHRlbmQody5ldmVudCx7dHJpZ2dlcjpmdW5jdGlvbih0LG4saSxvKXt2YXIgYSxzLHUsbCxjLHAsZCxoLHY9W2l8fHJdLG09Zi5jYWxsKHQsXCJ0eXBlXCIpP3QudHlwZTp0LHg9Zi5jYWxsKHQsXCJuYW1lc3BhY2VcIik/dC5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKHM9aD11PWk9aXx8ciwzIT09aS5ub2RlVHlwZSYmOCE9PWkubm9kZVR5cGUmJiF3dC50ZXN0KG0rdy5ldmVudC50cmlnZ2VyZWQpJiYobS5pbmRleE9mKFwiLlwiKT4tMSYmKG09KHg9bS5zcGxpdChcIi5cIikpLnNoaWZ0KCkseC5zb3J0KCkpLGM9bS5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrbSx0PXRbdy5leHBhbmRvXT90Om5ldyB3LkV2ZW50KG0sXCJvYmplY3RcIj09dHlwZW9mIHQmJnQpLHQuaXNUcmlnZ2VyPW8/MjozLHQubmFtZXNwYWNlPXguam9pbihcIi5cIiksdC5ybmFtZXNwYWNlPXQubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIit4LmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLHQucmVzdWx0PXZvaWQgMCx0LnRhcmdldHx8KHQudGFyZ2V0PWkpLG49bnVsbD09bj9bdF06dy5tYWtlQXJyYXkobixbdF0pLGQ9dy5ldmVudC5zcGVjaWFsW21dfHx7fSxvfHwhZC50cmlnZ2VyfHwhMSE9PWQudHJpZ2dlci5hcHBseShpLG4pKSl7aWYoIW8mJiFkLm5vQnViYmxlJiYheShpKSl7Zm9yKGw9ZC5kZWxlZ2F0ZVR5cGV8fG0sd3QudGVzdChsK20pfHwocz1zLnBhcmVudE5vZGUpO3M7cz1zLnBhcmVudE5vZGUpdi5wdXNoKHMpLHU9czt1PT09KGkub3duZXJEb2N1bWVudHx8cikmJnYucHVzaCh1LmRlZmF1bHRWaWV3fHx1LnBhcmVudFdpbmRvd3x8ZSl9YT0wO3doaWxlKChzPXZbYSsrXSkmJiF0LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpaD1zLHQudHlwZT1hPjE/bDpkLmJpbmRUeXBlfHxtLChwPShKLmdldChzLFwiZXZlbnRzXCIpfHx7fSlbdC50eXBlXSYmSi5nZXQocyxcImhhbmRsZVwiKSkmJnAuYXBwbHkocyxuKSwocD1jJiZzW2NdKSYmcC5hcHBseSYmWShzKSYmKHQucmVzdWx0PXAuYXBwbHkocyxuKSwhMT09PXQucmVzdWx0JiZ0LnByZXZlbnREZWZhdWx0KCkpO3JldHVybiB0LnR5cGU9bSxvfHx0LmlzRGVmYXVsdFByZXZlbnRlZCgpfHxkLl9kZWZhdWx0JiYhMSE9PWQuX2RlZmF1bHQuYXBwbHkodi5wb3AoKSxuKXx8IVkoaSl8fGMmJmcoaVttXSkmJiF5KGkpJiYoKHU9aVtjXSkmJihpW2NdPW51bGwpLHcuZXZlbnQudHJpZ2dlcmVkPW0sdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZoLmFkZEV2ZW50TGlzdGVuZXIobSxUdCksaVttXSgpLHQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmaC5yZW1vdmVFdmVudExpc3RlbmVyKG0sVHQpLHcuZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCx1JiYoaVtjXT11KSksdC5yZXN1bHR9fSxzaW11bGF0ZTpmdW5jdGlvbihlLHQsbil7dmFyIHI9dy5leHRlbmQobmV3IHcuRXZlbnQsbix7dHlwZTplLGlzU2ltdWxhdGVkOiEwfSk7dy5ldmVudC50cmlnZ2VyKHIsbnVsbCx0KX19KSx3LmZuLmV4dGVuZCh7dHJpZ2dlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt3LmV2ZW50LnRyaWdnZXIoZSx0LHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpc1swXTtpZihuKXJldHVybiB3LmV2ZW50LnRyaWdnZXIoZSx0LG4sITApfX0pLGguZm9jdXNpbnx8dy5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbihlKXt3LmV2ZW50LnNpbXVsYXRlKHQsZS50YXJnZXQsdy5ldmVudC5maXgoZSkpfTt3LmV2ZW50LnNwZWNpYWxbdF09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIHI9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGk9Si5hY2Nlc3Mocix0KTtpfHxyLmFkZEV2ZW50TGlzdGVuZXIoZSxuLCEwKSxKLmFjY2VzcyhyLHQsKGl8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciByPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxpPUouYWNjZXNzKHIsdCktMTtpP0ouYWNjZXNzKHIsdCxpKTooci5yZW1vdmVFdmVudExpc3RlbmVyKGUsbiwhMCksSi5yZW1vdmUocix0KSl9fX0pO3ZhciBDdD1lLmxvY2F0aW9uLEV0PURhdGUubm93KCksa3Q9L1xcPy87dy5wYXJzZVhNTD1mdW5jdGlvbih0KXt2YXIgbjtpZighdHx8XCJzdHJpbmdcIiE9dHlwZW9mIHQpcmV0dXJuIG51bGw7dHJ5e249KG5ldyBlLkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKHQsXCJ0ZXh0L3htbFwiKX1jYXRjaChlKXtuPXZvaWQgMH1yZXR1cm4gbiYmIW4uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGh8fHcuZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrdCksbn07dmFyIFN0PS9cXFtcXF0kLyxEdD0vXFxyP1xcbi9nLE50PS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxBdD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24ganQoZSx0LG4scil7dmFyIGk7aWYoQXJyYXkuaXNBcnJheSh0KSl3LmVhY2godCxmdW5jdGlvbih0LGkpe258fFN0LnRlc3QoZSk/cihlLGkpOmp0KGUrXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBpJiZudWxsIT1pP3Q6XCJcIikrXCJdXCIsaSxuLHIpfSk7ZWxzZSBpZihufHxcIm9iamVjdFwiIT09eCh0KSlyKGUsdCk7ZWxzZSBmb3IoaSBpbiB0KWp0KGUrXCJbXCIraStcIl1cIix0W2ldLG4scil9dy5wYXJhbT1mdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT1mdW5jdGlvbihlLHQpe3ZhciBuPWcodCk/dCgpOnQ7cltyLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGUpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChudWxsPT1uP1wiXCI6bil9O2lmKEFycmF5LmlzQXJyYXkoZSl8fGUuanF1ZXJ5JiYhdy5pc1BsYWluT2JqZWN0KGUpKXcuZWFjaChlLGZ1bmN0aW9uKCl7aSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihuIGluIGUpanQobixlW25dLHQsaSk7cmV0dXJuIHIuam9pbihcIiZcIil9LHcuZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdy5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPXcucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGU/dy5tYWtlQXJyYXkoZSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBlPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhdyh0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmQXQudGVzdCh0aGlzLm5vZGVOYW1lKSYmIU50LnRlc3QoZSkmJih0aGlzLmNoZWNrZWR8fCFwZS50ZXN0KGUpKX0pLm1hcChmdW5jdGlvbihlLHQpe3ZhciBuPXcodGhpcykudmFsKCk7cmV0dXJuIG51bGw9PW4/bnVsbDpBcnJheS5pc0FycmF5KG4pP3cubWFwKG4sZnVuY3Rpb24oZSl7cmV0dXJue25hbWU6dC5uYW1lLHZhbHVlOmUucmVwbGFjZShEdCxcIlxcclxcblwiKX19KTp7bmFtZTp0Lm5hbWUsdmFsdWU6bi5yZXBsYWNlKER0LFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pO3ZhciBxdD0vJTIwL2csTHQ9LyMuKiQvLEh0PS8oWz8mXSlfPVteJl0qLyxPdD0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLFB0PS9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLE10PS9eKD86R0VUfEhFQUQpJC8sUnQ9L15cXC9cXC8vLEl0PXt9LFd0PXt9LCR0PVwiKi9cIi5jb25jYXQoXCIqXCIpLEJ0PXIuY3JlYXRlRWxlbWVudChcImFcIik7QnQuaHJlZj1DdC5ocmVmO2Z1bmN0aW9uIEZ0KGUpe3JldHVybiBmdW5jdGlvbih0LG4pe1wic3RyaW5nXCIhPXR5cGVvZiB0JiYobj10LHQ9XCIqXCIpO3ZhciByLGk9MCxvPXQudG9Mb3dlckNhc2UoKS5tYXRjaChNKXx8W107aWYoZyhuKSl3aGlsZShyPW9baSsrXSlcIitcIj09PXJbMF0/KHI9ci5zbGljZSgxKXx8XCIqXCIsKGVbcl09ZVtyXXx8W10pLnVuc2hpZnQobikpOihlW3JdPWVbcl18fFtdKS5wdXNoKG4pfX1mdW5jdGlvbiBfdChlLHQsbixyKXt2YXIgaT17fSxvPWU9PT1XdDtmdW5jdGlvbiBhKHMpe3ZhciB1O3JldHVybiBpW3NdPSEwLHcuZWFjaChlW3NdfHxbXSxmdW5jdGlvbihlLHMpe3ZhciBsPXModCxuLHIpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBsfHxvfHxpW2xdP28/ISh1PWwpOnZvaWQgMDoodC5kYXRhVHlwZXMudW5zaGlmdChsKSxhKGwpLCExKX0pLHV9cmV0dXJuIGEodC5kYXRhVHlwZXNbMF0pfHwhaVtcIipcIl0mJmEoXCIqXCIpfWZ1bmN0aW9uIHp0KGUsdCl7dmFyIG4scixpPXcuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IobiBpbiB0KXZvaWQgMCE9PXRbbl0mJigoaVtuXT9lOnJ8fChyPXt9KSlbbl09dFtuXSk7cmV0dXJuIHImJncuZXh0ZW5kKCEwLGUsciksZX1mdW5jdGlvbiBYdChlLHQsbil7dmFyIHIsaSxvLGEscz1lLmNvbnRlbnRzLHU9ZS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT11WzBdKXUuc2hpZnQoKSx2b2lkIDA9PT1yJiYocj1lLm1pbWVUeXBlfHx0LmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihyKWZvcihpIGluIHMpaWYoc1tpXSYmc1tpXS50ZXN0KHIpKXt1LnVuc2hpZnQoaSk7YnJlYWt9aWYodVswXWluIG4pbz11WzBdO2Vsc2V7Zm9yKGkgaW4gbil7aWYoIXVbMF18fGUuY29udmVydGVyc1tpK1wiIFwiK3VbMF1dKXtvPWk7YnJlYWt9YXx8KGE9aSl9bz1vfHxhfWlmKG8pcmV0dXJuIG8hPT11WzBdJiZ1LnVuc2hpZnQobyksbltvXX1mdW5jdGlvbiBVdChlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9e30sYz1lLmRhdGFUeXBlcy5zbGljZSgpO2lmKGNbMV0pZm9yKGEgaW4gZS5jb252ZXJ0ZXJzKWxbYS50b0xvd2VyQ2FzZSgpXT1lLmNvbnZlcnRlcnNbYV07bz1jLnNoaWZ0KCk7d2hpbGUobylpZihlLnJlc3BvbnNlRmllbGRzW29dJiYobltlLnJlc3BvbnNlRmllbGRzW29dXT10KSwhdSYmciYmZS5kYXRhRmlsdGVyJiYodD1lLmRhdGFGaWx0ZXIodCxlLmRhdGFUeXBlKSksdT1vLG89Yy5zaGlmdCgpKWlmKFwiKlwiPT09bylvPXU7ZWxzZSBpZihcIipcIiE9PXUmJnUhPT1vKXtpZighKGE9bFt1K1wiIFwiK29dfHxsW1wiKiBcIitvXSkpZm9yKGkgaW4gbClpZigocz1pLnNwbGl0KFwiIFwiKSlbMV09PT1vJiYoYT1sW3UrXCIgXCIrc1swXV18fGxbXCIqIFwiK3NbMF1dKSl7ITA9PT1hP2E9bFtpXTohMCE9PWxbaV0mJihvPXNbMF0sYy51bnNoaWZ0KHNbMV0pKTticmVha31pZighMCE9PWEpaWYoYSYmZVtcInRocm93c1wiXSl0PWEodCk7ZWxzZSB0cnl7dD1hKHQpfWNhdGNoKGUpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6YT9lOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK3UrXCIgdG8gXCIrb319fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOnR9fXcuZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDpDdC5ocmVmLHR5cGU6XCJHRVRcIixpc0xvY2FsOlB0LnRlc3QoQ3QucHJvdG9jb2wpLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOiR0LHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpKU09OLnBhcnNlLFwidGV4dCB4bWxcIjp3LnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD96dCh6dChlLHcuYWpheFNldHRpbmdzKSx0KTp6dCh3LmFqYXhTZXR0aW5ncyxlKX0sYWpheFByZWZpbHRlcjpGdChJdCksYWpheFRyYW5zcG9ydDpGdChXdCksYWpheDpmdW5jdGlvbih0LG4pe1wib2JqZWN0XCI9PXR5cGVvZiB0JiYobj10LHQ9dm9pZCAwKSxuPW58fHt9O3ZhciBpLG8sYSxzLHUsbCxjLGYscCxkLGg9dy5hamF4U2V0dXAoe30sbiksZz1oLmNvbnRleHR8fGgseT1oLmNvbnRleHQmJihnLm5vZGVUeXBlfHxnLmpxdWVyeSk/dyhnKTp3LmV2ZW50LHY9dy5EZWZlcnJlZCgpLG09dy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSx4PWguc3RhdHVzQ29kZXx8e30sYj17fSxUPXt9LEM9XCJjYW5jZWxlZFwiLEU9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihlKXt2YXIgdDtpZihjKXtpZighcyl7cz17fTt3aGlsZSh0PU90LmV4ZWMoYSkpc1t0WzFdLnRvTG93ZXJDYXNlKCldPXRbMl19dD1zW2UudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PXQ/bnVsbDp0fSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gYz9hOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbD09YyYmKGU9VFtlLnRvTG93ZXJDYXNlKCldPVRbZS50b0xvd2VyQ2FzZSgpXXx8ZSxiW2VdPXQpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWMmJihoLm1pbWVUeXBlPWUpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoZSlpZihjKUUuYWx3YXlzKGVbRS5zdGF0dXNdKTtlbHNlIGZvcih0IGluIGUpeFt0XT1beFt0XSxlW3RdXTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZXx8QztyZXR1cm4gaSYmaS5hYm9ydCh0KSxrKDAsdCksdGhpc319O2lmKHYucHJvbWlzZShFKSxoLnVybD0oKHR8fGgudXJsfHxDdC5ocmVmKStcIlwiKS5yZXBsYWNlKFJ0LEN0LnByb3RvY29sK1wiLy9cIiksaC50eXBlPW4ubWV0aG9kfHxuLnR5cGV8fGgubWV0aG9kfHxoLnR5cGUsaC5kYXRhVHlwZXM9KGguZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKE0pfHxbXCJcIl0sbnVsbD09aC5jcm9zc0RvbWFpbil7bD1yLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3RyeXtsLmhyZWY9aC51cmwsbC5ocmVmPWwuaHJlZixoLmNyb3NzRG9tYWluPUJ0LnByb3RvY29sK1wiLy9cIitCdC5ob3N0IT1sLnByb3RvY29sK1wiLy9cIitsLmhvc3R9Y2F0Y2goZSl7aC5jcm9zc0RvbWFpbj0hMH19aWYoaC5kYXRhJiZoLnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2YgaC5kYXRhJiYoaC5kYXRhPXcucGFyYW0oaC5kYXRhLGgudHJhZGl0aW9uYWwpKSxfdChJdCxoLG4sRSksYylyZXR1cm4gRTsoZj13LmV2ZW50JiZoLmdsb2JhbCkmJjA9PXcuYWN0aXZlKysmJncuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxoLnR5cGU9aC50eXBlLnRvVXBwZXJDYXNlKCksaC5oYXNDb250ZW50PSFNdC50ZXN0KGgudHlwZSksbz1oLnVybC5yZXBsYWNlKEx0LFwiXCIpLGguaGFzQ29udGVudD9oLmRhdGEmJmgucHJvY2Vzc0RhdGEmJjA9PT0oaC5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmKGguZGF0YT1oLmRhdGEucmVwbGFjZShxdCxcIitcIikpOihkPWgudXJsLnNsaWNlKG8ubGVuZ3RoKSxoLmRhdGEmJihoLnByb2Nlc3NEYXRhfHxcInN0cmluZ1wiPT10eXBlb2YgaC5kYXRhKSYmKG8rPShrdC50ZXN0KG8pP1wiJlwiOlwiP1wiKStoLmRhdGEsZGVsZXRlIGguZGF0YSksITE9PT1oLmNhY2hlJiYobz1vLnJlcGxhY2UoSHQsXCIkMVwiKSxkPShrdC50ZXN0KG8pP1wiJlwiOlwiP1wiKStcIl89XCIrRXQrKytkKSxoLnVybD1vK2QpLGguaWZNb2RpZmllZCYmKHcubGFzdE1vZGlmaWVkW29dJiZFLnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLHcubGFzdE1vZGlmaWVkW29dKSx3LmV0YWdbb10mJkUuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIix3LmV0YWdbb10pKSwoaC5kYXRhJiZoLmhhc0NvbnRlbnQmJiExIT09aC5jb250ZW50VHlwZXx8bi5jb250ZW50VHlwZSkmJkUuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLGguY29udGVudFR5cGUpLEUuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLGguZGF0YVR5cGVzWzBdJiZoLmFjY2VwdHNbaC5kYXRhVHlwZXNbMF1dP2guYWNjZXB0c1toLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09aC5kYXRhVHlwZXNbMF0/XCIsIFwiKyR0K1wiOyBxPTAuMDFcIjpcIlwiKTpoLmFjY2VwdHNbXCIqXCJdKTtmb3IocCBpbiBoLmhlYWRlcnMpRS5zZXRSZXF1ZXN0SGVhZGVyKHAsaC5oZWFkZXJzW3BdKTtpZihoLmJlZm9yZVNlbmQmJighMT09PWguYmVmb3JlU2VuZC5jYWxsKGcsRSxoKXx8YykpcmV0dXJuIEUuYWJvcnQoKTtpZihDPVwiYWJvcnRcIixtLmFkZChoLmNvbXBsZXRlKSxFLmRvbmUoaC5zdWNjZXNzKSxFLmZhaWwoaC5lcnJvciksaT1fdChXdCxoLG4sRSkpe2lmKEUucmVhZHlTdGF0ZT0xLGYmJnkudHJpZ2dlcihcImFqYXhTZW5kXCIsW0UsaF0pLGMpcmV0dXJuIEU7aC5hc3luYyYmaC50aW1lb3V0PjAmJih1PWUuc2V0VGltZW91dChmdW5jdGlvbigpe0UuYWJvcnQoXCJ0aW1lb3V0XCIpfSxoLnRpbWVvdXQpKTt0cnl7Yz0hMSxpLnNlbmQoYixrKX1jYXRjaChlKXtpZihjKXRocm93IGU7aygtMSxlKX19ZWxzZSBrKC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIGsodCxuLHIscyl7dmFyIGwscCxkLGIsVCxDPW47Y3x8KGM9ITAsdSYmZS5jbGVhclRpbWVvdXQodSksaT12b2lkIDAsYT1zfHxcIlwiLEUucmVhZHlTdGF0ZT10PjA/NDowLGw9dD49MjAwJiZ0PDMwMHx8MzA0PT09dCxyJiYoYj1YdChoLEUscikpLGI9VXQoaCxiLEUsbCksbD8oaC5pZk1vZGlmaWVkJiYoKFQ9RS5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIikpJiYody5sYXN0TW9kaWZpZWRbb109VCksKFQ9RS5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIikpJiYody5ldGFnW29dPVQpKSwyMDQ9PT10fHxcIkhFQURcIj09PWgudHlwZT9DPVwibm9jb250ZW50XCI6MzA0PT09dD9DPVwibm90bW9kaWZpZWRcIjooQz1iLnN0YXRlLHA9Yi5kYXRhLGw9IShkPWIuZXJyb3IpKSk6KGQ9QywhdCYmQ3x8KEM9XCJlcnJvclwiLHQ8MCYmKHQ9MCkpKSxFLnN0YXR1cz10LEUuc3RhdHVzVGV4dD0obnx8QykrXCJcIixsP3YucmVzb2x2ZVdpdGgoZyxbcCxDLEVdKTp2LnJlamVjdFdpdGgoZyxbRSxDLGRdKSxFLnN0YXR1c0NvZGUoeCkseD12b2lkIDAsZiYmeS50cmlnZ2VyKGw/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW0UsaCxsP3A6ZF0pLG0uZmlyZVdpdGgoZyxbRSxDXSksZiYmKHkudHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFtFLGhdKSwtLXcuYWN0aXZlfHx3LmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiBFfSxnZXRKU09OOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdy5nZXQoZSx0LG4sXCJqc29uXCIpfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdy5nZXQoZSx2b2lkIDAsdCxcInNjcmlwdFwiKX19KSx3LmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGUsdCl7d1t0XT1mdW5jdGlvbihlLG4scixpKXtyZXR1cm4gZyhuKSYmKGk9aXx8cixyPW4sbj12b2lkIDApLHcuYWpheCh3LmV4dGVuZCh7dXJsOmUsdHlwZTp0LGRhdGFUeXBlOmksZGF0YTpuLHN1Y2Nlc3M6cn0sdy5pc1BsYWluT2JqZWN0KGUpJiZlKSl9fSksdy5fZXZhbFVybD1mdW5jdGlvbihlKXtyZXR1cm4gdy5hamF4KHt1cmw6ZSx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixjYWNoZTohMCxhc3luYzohMSxnbG9iYWw6ITEsXCJ0aHJvd3NcIjohMH0pfSx3LmZuLmV4dGVuZCh7d3JhcEFsbDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gdGhpc1swXSYmKGcoZSkmJihlPWUuY2FsbCh0aGlzWzBdKSksdD13KGUsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZ0Lmluc2VydEJlZm9yZSh0aGlzWzBdKSx0Lm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXM7d2hpbGUoZS5maXJzdEVsZW1lbnRDaGlsZCllPWUuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGV9KS5hcHBlbmQodGhpcykpLHRoaXN9LHdyYXBJbm5lcjpmdW5jdGlvbihlKXtyZXR1cm4gZyhlKT90aGlzLmVhY2goZnVuY3Rpb24odCl7dyh0aGlzKS53cmFwSW5uZXIoZS5jYWxsKHRoaXMsdCkpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9dyh0aGlzKSxuPXQuY29udGVudHMoKTtuLmxlbmd0aD9uLndyYXBBbGwoZSk6dC5hcHBlbmQoZSl9KX0sd3JhcDpmdW5jdGlvbihlKXt2YXIgdD1nKGUpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24obil7dyh0aGlzKS53cmFwQWxsKHQ/ZS5jYWxsKHRoaXMsbik6ZSl9KX0sdW53cmFwOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnBhcmVudChlKS5ub3QoXCJib2R5XCIpLmVhY2goZnVuY3Rpb24oKXt3KHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KSx0aGlzfX0pLHcuZXhwci5wc2V1ZG9zLmhpZGRlbj1mdW5jdGlvbihlKXtyZXR1cm4hdy5leHByLnBzZXVkb3MudmlzaWJsZShlKX0sdy5leHByLnBzZXVkb3MudmlzaWJsZT1mdW5jdGlvbihlKXtyZXR1cm4hIShlLm9mZnNldFdpZHRofHxlLm9mZnNldEhlaWdodHx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCl9LHcuYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IGUuWE1MSHR0cFJlcXVlc3R9Y2F0Y2goZSl7fX07dmFyIFZ0PXswOjIwMCwxMjIzOjIwNH0sR3Q9dy5hamF4U2V0dGluZ3MueGhyKCk7aC5jb3JzPSEhR3QmJlwid2l0aENyZWRlbnRpYWxzXCJpbiBHdCxoLmFqYXg9R3Q9ISFHdCx3LmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24odCl7dmFyIG4scjtpZihoLmNvcnN8fEd0JiYhdC5jcm9zc0RvbWFpbilyZXR1cm57c2VuZDpmdW5jdGlvbihpLG8pe3ZhciBhLHM9dC54aHIoKTtpZihzLm9wZW4odC50eXBlLHQudXJsLHQuYXN5bmMsdC51c2VybmFtZSx0LnBhc3N3b3JkKSx0LnhockZpZWxkcylmb3IoYSBpbiB0LnhockZpZWxkcylzW2FdPXQueGhyRmllbGRzW2FdO3QubWltZVR5cGUmJnMub3ZlcnJpZGVNaW1lVHlwZSYmcy5vdmVycmlkZU1pbWVUeXBlKHQubWltZVR5cGUpLHQuY3Jvc3NEb21haW58fGlbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoaVtcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKTtmb3IoYSBpbiBpKXMuc2V0UmVxdWVzdEhlYWRlcihhLGlbYV0pO249ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7biYmKG49cj1zLm9ubG9hZD1zLm9uZXJyb3I9cy5vbmFib3J0PXMub250aW1lb3V0PXMub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJhYm9ydFwiPT09ZT9zLmFib3J0KCk6XCJlcnJvclwiPT09ZT9cIm51bWJlclwiIT10eXBlb2Ygcy5zdGF0dXM/bygwLFwiZXJyb3JcIik6byhzLnN0YXR1cyxzLnN0YXR1c1RleHQpOm8oVnRbcy5zdGF0dXNdfHxzLnN0YXR1cyxzLnN0YXR1c1RleHQsXCJ0ZXh0XCIhPT0ocy5yZXNwb25zZVR5cGV8fFwidGV4dFwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIHMucmVzcG9uc2VUZXh0P3tiaW5hcnk6cy5yZXNwb25zZX06e3RleHQ6cy5yZXNwb25zZVRleHR9LHMuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LHMub25sb2FkPW4oKSxyPXMub25lcnJvcj1zLm9udGltZW91dD1uKFwiZXJyb3JcIiksdm9pZCAwIT09cy5vbmFib3J0P3Mub25hYm9ydD1yOnMub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09PXMucmVhZHlTdGF0ZSYmZS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7biYmcigpfSl9LG49bihcImFib3J0XCIpO3RyeXtzLnNlbmQodC5oYXNDb250ZW50JiZ0LmRhdGF8fG51bGwpfWNhdGNoKGUpe2lmKG4pdGhyb3cgZX19LGFib3J0OmZ1bmN0aW9uKCl7biYmbigpfX19KSx3LmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24oZSl7ZS5jcm9zc0RvbWFpbiYmKGUuY29udGVudHMuc2NyaXB0PSExKX0pLHcuYWpheFNldHVwKHthY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi9cXGIoPzpqYXZhfGVjbWEpc2NyaXB0XFxiL30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKGUpe3JldHVybiB3Lmdsb2JhbEV2YWwoZSksZX19fSksdy5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oZSl7dm9pZCAwPT09ZS5jYWNoZSYmKGUuY2FjaGU9ITEpLGUuY3Jvc3NEb21haW4mJihlLnR5cGU9XCJHRVRcIil9KSx3LmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIixmdW5jdGlvbihlKXtpZihlLmNyb3NzRG9tYWluKXt2YXIgdCxuO3JldHVybntzZW5kOmZ1bmN0aW9uKGksbyl7dD13KFwiPHNjcmlwdD5cIikucHJvcCh7Y2hhcnNldDplLnNjcmlwdENoYXJzZXQsc3JjOmUudXJsfSkub24oXCJsb2FkIGVycm9yXCIsbj1mdW5jdGlvbihlKXt0LnJlbW92ZSgpLG49bnVsbCxlJiZvKFwiZXJyb3JcIj09PWUudHlwZT80MDQ6MjAwLGUudHlwZSl9KSxyLmhlYWQuYXBwZW5kQ2hpbGQodFswXSl9LGFib3J0OmZ1bmN0aW9uKCl7biYmbigpfX19fSk7dmFyIFl0PVtdLFF0PS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87dy5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGU9WXQucG9wKCl8fHcuZXhwYW5kbytcIl9cIitFdCsrO3JldHVybiB0aGlzW2VdPSEwLGV9fSksdy5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKHQsbixyKXt2YXIgaSxvLGEscz0hMSE9PXQuanNvbnAmJihRdC50ZXN0KHQudXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiB0LmRhdGEmJjA9PT0odC5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmUXQudGVzdCh0LmRhdGEpJiZcImRhdGFcIik7aWYoc3x8XCJqc29ucFwiPT09dC5kYXRhVHlwZXNbMF0pcmV0dXJuIGk9dC5qc29ucENhbGxiYWNrPWcodC5qc29ucENhbGxiYWNrKT90Lmpzb25wQ2FsbGJhY2soKTp0Lmpzb25wQ2FsbGJhY2sscz90W3NdPXRbc10ucmVwbGFjZShRdCxcIiQxXCIraSk6ITEhPT10Lmpzb25wJiYodC51cmwrPShrdC50ZXN0KHQudXJsKT9cIiZcIjpcIj9cIikrdC5qc29ucCtcIj1cIitpKSx0LmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBhfHx3LmVycm9yKGkrXCIgd2FzIG5vdCBjYWxsZWRcIiksYVswXX0sdC5kYXRhVHlwZXNbMF09XCJqc29uXCIsbz1lW2ldLGVbaV09ZnVuY3Rpb24oKXthPWFyZ3VtZW50c30sci5hbHdheXMoZnVuY3Rpb24oKXt2b2lkIDA9PT1vP3coZSkucmVtb3ZlUHJvcChpKTplW2ldPW8sdFtpXSYmKHQuanNvbnBDYWxsYmFjaz1uLmpzb25wQ2FsbGJhY2ssWXQucHVzaChpKSksYSYmZyhvKSYmbyhhWzBdKSxhPW89dm9pZCAwfSksXCJzY3JpcHRcIn0pLGguY3JlYXRlSFRNTERvY3VtZW50PWZ1bmN0aW9uKCl7dmFyIGU9ci5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikuYm9keTtyZXR1cm4gZS5pbm5lckhUTUw9XCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiLDI9PT1lLmNoaWxkTm9kZXMubGVuZ3RofSgpLHcucGFyc2VIVE1MPWZ1bmN0aW9uKGUsdCxuKXtpZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm5bXTtcImJvb2xlYW5cIj09dHlwZW9mIHQmJihuPXQsdD0hMSk7dmFyIGksbyxhO3JldHVybiB0fHwoaC5jcmVhdGVIVE1MRG9jdW1lbnQ/KChpPSh0PXIuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpKS5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKSkuaHJlZj1yLmxvY2F0aW9uLmhyZWYsdC5oZWFkLmFwcGVuZENoaWxkKGkpKTp0PXIpLG89QS5leGVjKGUpLGE9IW4mJltdLG8/W3QuY3JlYXRlRWxlbWVudChvWzFdKV06KG89eGUoW2VdLHQsYSksYSYmYS5sZW5ndGgmJncoYSkucmVtb3ZlKCksdy5tZXJnZShbXSxvLmNoaWxkTm9kZXMpKX0sdy5mbi5sb2FkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT10aGlzLHM9ZS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gcz4tMSYmKHI9dnQoZS5zbGljZShzKSksZT1lLnNsaWNlKDAscykpLGcodCk/KG49dCx0PXZvaWQgMCk6dCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJihpPVwiUE9TVFwiKSxhLmxlbmd0aD4wJiZ3LmFqYXgoe3VybDplLHR5cGU6aXx8XCJHRVRcIixkYXRhVHlwZTpcImh0bWxcIixkYXRhOnR9KS5kb25lKGZ1bmN0aW9uKGUpe289YXJndW1lbnRzLGEuaHRtbChyP3coXCI8ZGl2PlwiKS5hcHBlbmQody5wYXJzZUhUTUwoZSkpLmZpbmQocik6ZSl9KS5hbHdheXMobiYmZnVuY3Rpb24oZSx0KXthLmVhY2goZnVuY3Rpb24oKXtuLmFwcGx5KHRoaXMsb3x8W2UucmVzcG9uc2VUZXh0LHQsZV0pfSl9KSx0aGlzfSx3LmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihlLHQpe3cuZm5bdF09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMub24odCxlKX19KSx3LmV4cHIucHNldWRvcy5hbmltYXRlZD1mdW5jdGlvbihlKXtyZXR1cm4gdy5ncmVwKHcudGltZXJzLGZ1bmN0aW9uKHQpe3JldHVybiBlPT09dC5lbGVtfSkubGVuZ3RofSx3Lm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjPXcuY3NzKGUsXCJwb3NpdGlvblwiKSxmPXcoZSkscD17fTtcInN0YXRpY1wiPT09YyYmKGUuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxzPWYub2Zmc2V0KCksbz13LmNzcyhlLFwidG9wXCIpLHU9dy5jc3MoZSxcImxlZnRcIiksKGw9KFwiYWJzb2x1dGVcIj09PWN8fFwiZml4ZWRcIj09PWMpJiYobyt1KS5pbmRleE9mKFwiYXV0b1wiKT4tMSk/KGE9KHI9Zi5wb3NpdGlvbigpKS50b3AsaT1yLmxlZnQpOihhPXBhcnNlRmxvYXQobyl8fDAsaT1wYXJzZUZsb2F0KHUpfHwwKSxnKHQpJiYodD10LmNhbGwoZSxuLHcuZXh0ZW5kKHt9LHMpKSksbnVsbCE9dC50b3AmJihwLnRvcD10LnRvcC1zLnRvcCthKSxudWxsIT10LmxlZnQmJihwLmxlZnQ9dC5sZWZ0LXMubGVmdCtpKSxcInVzaW5nXCJpbiB0P3QudXNpbmcuY2FsbChlLHApOmYuY3NzKHApfX0sdy5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbihlKXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT1lP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKHQpe3cub2Zmc2V0LnNldE9mZnNldCh0aGlzLGUsdCl9KTt2YXIgdCxuLHI9dGhpc1swXTtpZihyKXJldHVybiByLmdldENsaWVudFJlY3RzKCkubGVuZ3RoPyh0PXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbj1yLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcse3RvcDp0LnRvcCtuLnBhZ2VZT2Zmc2V0LGxlZnQ6dC5sZWZ0K24ucGFnZVhPZmZzZXR9KTp7dG9wOjAsbGVmdDowfX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgZSx0LG4scj10aGlzWzBdLGk9e3RvcDowLGxlZnQ6MH07aWYoXCJmaXhlZFwiPT09dy5jc3MocixcInBvc2l0aW9uXCIpKXQ9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtlbHNle3Q9dGhpcy5vZmZzZXQoKSxuPXIub3duZXJEb2N1bWVudCxlPXIub2Zmc2V0UGFyZW50fHxuLmRvY3VtZW50RWxlbWVudDt3aGlsZShlJiYoZT09PW4uYm9keXx8ZT09PW4uZG9jdW1lbnRFbGVtZW50KSYmXCJzdGF0aWNcIj09PXcuY3NzKGUsXCJwb3NpdGlvblwiKSllPWUucGFyZW50Tm9kZTtlJiZlIT09ciYmMT09PWUubm9kZVR5cGUmJigoaT13KGUpLm9mZnNldCgpKS50b3ArPXcuY3NzKGUsXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxpLmxlZnQrPXcuY3NzKGUsXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpfXJldHVybnt0b3A6dC50b3AtaS50b3Atdy5jc3MocixcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OnQubGVmdC1pLmxlZnQtdy5jc3MocixcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vZmZzZXRQYXJlbnQ7d2hpbGUoZSYmXCJzdGF0aWNcIj09PXcuY3NzKGUsXCJwb3NpdGlvblwiKSllPWUub2Zmc2V0UGFyZW50O3JldHVybiBlfHxiZX0pfX0pLHcuZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24oZSx0KXt2YXIgbj1cInBhZ2VZT2Zmc2V0XCI9PT10O3cuZm5bZV09ZnVuY3Rpb24ocil7cmV0dXJuIHoodGhpcyxmdW5jdGlvbihlLHIsaSl7dmFyIG87aWYoeShlKT9vPWU6OT09PWUubm9kZVR5cGUmJihvPWUuZGVmYXVsdFZpZXcpLHZvaWQgMD09PWkpcmV0dXJuIG8/b1t0XTplW3JdO28/by5zY3JvbGxUbyhuP28ucGFnZVhPZmZzZXQ6aSxuP2k6by5wYWdlWU9mZnNldCk6ZVtyXT1pfSxlLHIsYXJndW1lbnRzLmxlbmd0aCl9fSksdy5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihlLHQpe3cuY3NzSG9va3NbdF09X2UoaC5waXhlbFBvc2l0aW9uLGZ1bmN0aW9uKGUsbil7aWYobilyZXR1cm4gbj1GZShlLHQpLFdlLnRlc3Qobik/dyhlKS5wb3NpdGlvbigpW3RdK1wicHhcIjpufSl9KSx3LmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oZSx0KXt3LmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2UsY29udGVudDp0LFwiXCI6XCJvdXRlclwiK2V9LGZ1bmN0aW9uKG4scil7dy5mbltyXT1mdW5jdGlvbihpLG8pe3ZhciBhPWFyZ3VtZW50cy5sZW5ndGgmJihufHxcImJvb2xlYW5cIiE9dHlwZW9mIGkpLHM9bnx8KCEwPT09aXx8ITA9PT1vP1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuIHoodGhpcyxmdW5jdGlvbih0LG4saSl7dmFyIG87cmV0dXJuIHkodCk/MD09PXIuaW5kZXhPZihcIm91dGVyXCIpP3RbXCJpbm5lclwiK2VdOnQuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrZV06OT09PXQubm9kZVR5cGU/KG89dC5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgodC5ib2R5W1wic2Nyb2xsXCIrZV0sb1tcInNjcm9sbFwiK2VdLHQuYm9keVtcIm9mZnNldFwiK2VdLG9bXCJvZmZzZXRcIitlXSxvW1wiY2xpZW50XCIrZV0pKTp2b2lkIDA9PT1pP3cuY3NzKHQsbixzKTp3LnN0eWxlKHQsbixpLHMpfSx0LGE/aTp2b2lkIDAsYSl9fSl9KSx3LmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgcmVzaXplIHNjcm9sbCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsdCl7dy5mblt0XT1mdW5jdGlvbihlLG4pe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjA/dGhpcy5vbih0LG51bGwsZSxuKTp0aGlzLnRyaWdnZXIodCl9fSksdy5mbi5leHRlbmQoe2hvdmVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMubW91c2VlbnRlcihlKS5tb3VzZWxlYXZlKHR8fGUpfX0pLHcuZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5vbihlLG51bGwsdCxuKX0sdW5iaW5kOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMub2ZmKGUsbnVsbCx0KX0sZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMub24odCxlLG4scil9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihlLFwiKipcIik6dGhpcy5vZmYodCxlfHxcIioqXCIsbil9fSksdy5wcm94eT1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCYmKG49ZVt0XSx0PWUsZT1uKSxnKGUpKXJldHVybiByPW8uY2FsbChhcmd1bWVudHMsMiksaT1mdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KHR8fHRoaXMsci5jb25jYXQoby5jYWxsKGFyZ3VtZW50cykpKX0saS5ndWlkPWUuZ3VpZD1lLmd1aWR8fHcuZ3VpZCsrLGl9LHcuaG9sZFJlYWR5PWZ1bmN0aW9uKGUpe2U/dy5yZWFkeVdhaXQrKzp3LnJlYWR5KCEwKX0sdy5pc0FycmF5PUFycmF5LmlzQXJyYXksdy5wYXJzZUpTT049SlNPTi5wYXJzZSx3Lm5vZGVOYW1lPU4sdy5pc0Z1bmN0aW9uPWcsdy5pc1dpbmRvdz15LHcuY2FtZWxDYXNlPUcsdy50eXBlPXgsdy5ub3c9RGF0ZS5ub3csdy5pc051bWVyaWM9ZnVuY3Rpb24oZSl7dmFyIHQ9dy50eXBlKGUpO3JldHVybihcIm51bWJlclwiPT09dHx8XCJzdHJpbmdcIj09PXQpJiYhaXNOYU4oZS1wYXJzZUZsb2F0KGUpKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiB3fSk7dmFyIEp0PWUualF1ZXJ5LEt0PWUuJDtyZXR1cm4gdy5ub0NvbmZsaWN0PWZ1bmN0aW9uKHQpe3JldHVybiBlLiQ9PT13JiYoZS4kPUt0KSx0JiZlLmpRdWVyeT09PXcmJihlLmpRdWVyeT1KdCksd30sdHx8KGUualF1ZXJ5PWUuJD13KSx3fSk7XG4iLCIvKipcbiAqIE93bCBjYXJvdXNlbFxuICogQHZlcnNpb24gMi4zLjRcbiAqIEBhdXRob3IgQmFydG9zeiBXb2pjaWVjaG93c2tpXG4gKiBAYXV0aG9yIERhdmlkIERldXRzY2hcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogQHRvZG8gTGF6eSBMb2FkIEljb25cbiAqIEB0b2RvIHByZXZlbnQgYW5pbWF0aW9uZW5kIGJ1YmxpbmdcbiAqIEB0b2RvIGl0ZW1zU2NhbGVVcFxuICogQHRvZG8gVGVzdCBaZXB0b1xuICogQHRvZG8gc3RhZ2VQYWRkaW5nIGNhbGN1bGF0ZSB3cm9uZyBhY3RpdmUgY2xhc3Nlc1xuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgY2Fyb3VzZWwuXG5cdCAqIEBjbGFzcyBUaGUgT3dsIENhcm91c2VsLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8alF1ZXJ5fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gY3JlYXRlIHRoZSBjYXJvdXNlbCBmb3IuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBUaGUgb3B0aW9uc1xuXHQgKi9cblx0ZnVuY3Rpb24gT3dsKGVsZW1lbnQsIG9wdGlvbnMpIHtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgc2V0dGluZ3MgZm9yIHRoZSBjYXJvdXNlbC5cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy5zZXR0aW5ncyA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IG9wdGlvbnMgc2V0IGJ5IHRoZSBjYWxsZXIgaW5jbHVkaW5nIGRlZmF1bHRzLlxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgT3dsLkRlZmF1bHRzLCBvcHRpb25zKTtcblxuXHRcdC8qKlxuXHRcdCAqIFBsdWdpbiBlbGVtZW50LlxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHR0aGlzLiRlbGVtZW50ID0gJChlbGVtZW50KTtcblxuXHRcdC8qKlxuXHRcdCAqIFByb3hpZWQgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge307XG5cblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2VzIHRvIHRoZSBydW5uaW5nIHBsdWdpbnMgb2YgdGhpcyBjYXJvdXNlbC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fcGx1Z2lucyA9IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudGx5IHN1cHByZXNzZWQgZXZlbnRzIHRvIHByZXZlbnQgdGhlbSBmcm9tIGJlaW5nIHJldHJpZ2dlcmVkLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9zdXByZXNzID0ge307XG5cblx0XHQvKipcblx0XHQgKiBBYnNvbHV0ZSBjdXJyZW50IHBvc2l0aW9uLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9jdXJyZW50ID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIEFuaW1hdGlvbiBzcGVlZCBpbiBtaWxsaXNlY29uZHMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX3NwZWVkID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIENvb3JkaW5hdGVzIG9mIGFsbCBpdGVtcyBpbiBwaXhlbC5cblx0XHQgKiBAdG9kbyBUaGUgbmFtZSBvZiB0aGlzIG1lbWJlciBpcyBtaXNzbGVhZGluZy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fY29vcmRpbmF0ZXMgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgYnJlYWtwb2ludC5cblx0XHQgKiBAdG9kbyBSZWFsIG1lZGlhIHF1ZXJpZXMgd291bGQgYmUgbmljZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fYnJlYWtwb2ludCA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHdpZHRoIG9mIHRoZSBwbHVnaW4gZWxlbWVudC5cblx0XHQgKi9cblx0XHR0aGlzLl93aWR0aCA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBBbGwgcmVhbCBpdGVtcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5faXRlbXMgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIEFsbCBjbG9uZWQgaXRlbXMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2Nsb25lcyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogTWVyZ2UgdmFsdWVzIG9mIGFsbCBpdGVtcy5cblx0XHQgKiBAdG9kbyBNYXliZSB0aGlzIGNvdWxkIGJlIHBhcnQgb2YgYSBwbHVnaW4uXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX21lcmdlcnMgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIFdpZHRocyBvZiBhbGwgaXRlbXMuXG5cdFx0ICovXG5cdFx0dGhpcy5fd2lkdGhzID0gW107XG5cblx0XHQvKipcblx0XHQgKiBJbnZhbGlkYXRlZCBwYXJ0cyB3aXRoaW4gdGhlIHVwZGF0ZSBwcm9jZXNzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9pbnZhbGlkYXRlZCA9IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogT3JkZXJlZCBsaXN0IG9mIHdvcmtlcnMgZm9yIHRoZSB1cGRhdGUgcHJvY2Vzcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fcGlwZSA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBzdGF0ZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGRyYWcgb3BlcmF0aW9uLlxuXHRcdCAqIEB0b2RvICMyNjFcblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fZHJhZyA9IHtcblx0XHRcdHRpbWU6IG51bGwsXG5cdFx0XHR0YXJnZXQ6IG51bGwsXG5cdFx0XHRwb2ludGVyOiBudWxsLFxuXHRcdFx0c3RhZ2U6IHtcblx0XHRcdFx0c3RhcnQ6IG51bGwsXG5cdFx0XHRcdGN1cnJlbnQ6IG51bGxcblx0XHRcdH0sXG5cdFx0XHRkaXJlY3Rpb246IG51bGxcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBzdGF0ZSBpbmZvcm1hdGlvbiBhbmQgdGhlaXIgdGFncy5cblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9zdGF0ZXMgPSB7XG5cdFx0XHRjdXJyZW50OiB7fSxcblx0XHRcdHRhZ3M6IHtcblx0XHRcdFx0J2luaXRpYWxpemluZyc6IFsgJ2J1c3knIF0sXG5cdFx0XHRcdCdhbmltYXRpbmcnOiBbICdidXN5JyBdLFxuXHRcdFx0XHQnZHJhZ2dpbmcnOiBbICdpbnRlcmFjdGluZycgXVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQkLmVhY2goWyAnb25SZXNpemUnLCAnb25UaHJvdHRsZWRSZXNpemUnIF0sICQucHJveHkoZnVuY3Rpb24oaSwgaGFuZGxlcikge1xuXHRcdFx0dGhpcy5faGFuZGxlcnNbaGFuZGxlcl0gPSAkLnByb3h5KHRoaXNbaGFuZGxlcl0sIHRoaXMpO1xuXHRcdH0sIHRoaXMpKTtcblxuXHRcdCQuZWFjaChPd2wuUGx1Z2lucywgJC5wcm94eShmdW5jdGlvbihrZXksIHBsdWdpbikge1xuXHRcdFx0dGhpcy5fcGx1Z2luc1trZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSldXG5cdFx0XHRcdD0gbmV3IHBsdWdpbih0aGlzKTtcblx0XHR9LCB0aGlzKSk7XG5cblx0XHQkLmVhY2goT3dsLldvcmtlcnMsICQucHJveHkoZnVuY3Rpb24ocHJpb3JpdHksIHdvcmtlcikge1xuXHRcdFx0dGhpcy5fcGlwZS5wdXNoKHtcblx0XHRcdFx0J2ZpbHRlcic6IHdvcmtlci5maWx0ZXIsXG5cdFx0XHRcdCdydW4nOiAkLnByb3h5KHdvcmtlci5ydW4sIHRoaXMpXG5cdFx0XHR9KTtcblx0XHR9LCB0aGlzKSk7XG5cblx0XHR0aGlzLnNldHVwKCk7XG5cdFx0dGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zIGZvciB0aGUgY2Fyb3VzZWwuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdE93bC5EZWZhdWx0cyA9IHtcblx0XHRpdGVtczogMyxcblx0XHRsb29wOiBmYWxzZSxcblx0XHRjZW50ZXI6IGZhbHNlLFxuXHRcdHJld2luZDogZmFsc2UsXG5cdFx0Y2hlY2tWaXNpYmlsaXR5OiB0cnVlLFxuXG5cdFx0bW91c2VEcmFnOiB0cnVlLFxuXHRcdHRvdWNoRHJhZzogdHJ1ZSxcblx0XHRwdWxsRHJhZzogdHJ1ZSxcblx0XHRmcmVlRHJhZzogZmFsc2UsXG5cblx0XHRtYXJnaW46IDAsXG5cdFx0c3RhZ2VQYWRkaW5nOiAwLFxuXG5cdFx0bWVyZ2U6IGZhbHNlLFxuXHRcdG1lcmdlRml0OiB0cnVlLFxuXHRcdGF1dG9XaWR0aDogZmFsc2UsXG5cblx0XHRzdGFydFBvc2l0aW9uOiAwLFxuXHRcdHJ0bDogZmFsc2UsXG5cblx0XHRzbWFydFNwZWVkOiAyNTAsXG5cdFx0Zmx1aWRTcGVlZDogZmFsc2UsXG5cdFx0ZHJhZ0VuZFNwZWVkOiBmYWxzZSxcblxuXHRcdHJlc3BvbnNpdmU6IHt9LFxuXHRcdHJlc3BvbnNpdmVSZWZyZXNoUmF0ZTogMjAwLFxuXHRcdHJlc3BvbnNpdmVCYXNlRWxlbWVudDogd2luZG93LFxuXG5cdFx0ZmFsbGJhY2tFYXNpbmc6ICdzd2luZycsXG5cdFx0c2xpZGVUcmFuc2l0aW9uOiAnJyxcblxuXHRcdGluZm86IGZhbHNlLFxuXG5cdFx0bmVzdGVkSXRlbVNlbGVjdG9yOiBmYWxzZSxcblx0XHRpdGVtRWxlbWVudDogJ2RpdicsXG5cdFx0c3RhZ2VFbGVtZW50OiAnZGl2JyxcblxuXHRcdHJlZnJlc2hDbGFzczogJ293bC1yZWZyZXNoJyxcblx0XHRsb2FkZWRDbGFzczogJ293bC1sb2FkZWQnLFxuXHRcdGxvYWRpbmdDbGFzczogJ293bC1sb2FkaW5nJyxcblx0XHRydGxDbGFzczogJ293bC1ydGwnLFxuXHRcdHJlc3BvbnNpdmVDbGFzczogJ293bC1yZXNwb25zaXZlJyxcblx0XHRkcmFnQ2xhc3M6ICdvd2wtZHJhZycsXG5cdFx0aXRlbUNsYXNzOiAnb3dsLWl0ZW0nLFxuXHRcdHN0YWdlQ2xhc3M6ICdvd2wtc3RhZ2UnLFxuXHRcdHN0YWdlT3V0ZXJDbGFzczogJ293bC1zdGFnZS1vdXRlcicsXG5cdFx0Z3JhYkNsYXNzOiAnb3dsLWdyYWInXG5cdH07XG5cblx0LyoqXG5cdCAqIEVudW1lcmF0aW9uIGZvciB3aWR0aC5cblx0ICogQHB1YmxpY1xuXHQgKiBAcmVhZG9ubHlcblx0ICogQGVudW0ge1N0cmluZ31cblx0ICovXG5cdE93bC5XaWR0aCA9IHtcblx0XHREZWZhdWx0OiAnZGVmYXVsdCcsXG5cdFx0SW5uZXI6ICdpbm5lcicsXG5cdFx0T3V0ZXI6ICdvdXRlcidcblx0fTtcblxuXHQvKipcblx0ICogRW51bWVyYXRpb24gZm9yIHR5cGVzLlxuXHQgKiBAcHVibGljXG5cdCAqIEByZWFkb25seVxuXHQgKiBAZW51bSB7U3RyaW5nfVxuXHQgKi9cblx0T3dsLlR5cGUgPSB7XG5cdFx0RXZlbnQ6ICdldmVudCcsXG5cdFx0U3RhdGU6ICdzdGF0ZSdcblx0fTtcblxuXHQvKipcblx0ICogQ29udGFpbnMgYWxsIHJlZ2lzdGVyZWQgcGx1Z2lucy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0T3dsLlBsdWdpbnMgPSB7fTtcblxuXHQvKipcblx0ICogTGlzdCBvZiB3b3JrZXJzIGludm9sdmVkIGluIHRoZSB1cGRhdGUgcHJvY2Vzcy5cblx0ICovXG5cdE93bC5Xb3JrZXJzID0gWyB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5fd2lkdGggPSB0aGlzLiRlbGVtZW50LndpZHRoKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKGNhY2hlKSB7XG5cdFx0XHRjYWNoZS5jdXJyZW50ID0gdGhpcy5faXRlbXMgJiYgdGhpcy5faXRlbXNbdGhpcy5yZWxhdGl2ZSh0aGlzLl9jdXJyZW50KV07XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oJy5jbG9uZWQnKS5yZW1vdmUoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oY2FjaGUpIHtcblx0XHRcdHZhciBtYXJnaW4gPSB0aGlzLnNldHRpbmdzLm1hcmdpbiB8fCAnJyxcblx0XHRcdFx0Z3JpZCA9ICF0aGlzLnNldHRpbmdzLmF1dG9XaWR0aCxcblx0XHRcdFx0cnRsID0gdGhpcy5zZXR0aW5ncy5ydGwsXG5cdFx0XHRcdGNzcyA9IHtcblx0XHRcdFx0XHQnd2lkdGgnOiAnYXV0bycsXG5cdFx0XHRcdFx0J21hcmdpbi1sZWZ0JzogcnRsID8gbWFyZ2luIDogJycsXG5cdFx0XHRcdFx0J21hcmdpbi1yaWdodCc6IHJ0bCA/ICcnIDogbWFyZ2luXG5cdFx0XHRcdH07XG5cblx0XHRcdCFncmlkICYmIHRoaXMuJHN0YWdlLmNoaWxkcmVuKCkuY3NzKGNzcyk7XG5cblx0XHRcdGNhY2hlLmNzcyA9IGNzcztcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oY2FjaGUpIHtcblx0XHRcdHZhciB3aWR0aCA9ICh0aGlzLndpZHRoKCkgLyB0aGlzLnNldHRpbmdzLml0ZW1zKS50b0ZpeGVkKDMpIC0gdGhpcy5zZXR0aW5ncy5tYXJnaW4sXG5cdFx0XHRcdG1lcmdlID0gbnVsbCxcblx0XHRcdFx0aXRlcmF0b3IgPSB0aGlzLl9pdGVtcy5sZW5ndGgsXG5cdFx0XHRcdGdyaWQgPSAhdGhpcy5zZXR0aW5ncy5hdXRvV2lkdGgsXG5cdFx0XHRcdHdpZHRocyA9IFtdO1xuXG5cdFx0XHRjYWNoZS5pdGVtcyA9IHtcblx0XHRcdFx0bWVyZ2U6IGZhbHNlLFxuXHRcdFx0XHR3aWR0aDogd2lkdGhcblx0XHRcdH07XG5cblx0XHRcdHdoaWxlIChpdGVyYXRvci0tKSB7XG5cdFx0XHRcdG1lcmdlID0gdGhpcy5fbWVyZ2Vyc1tpdGVyYXRvcl07XG5cdFx0XHRcdG1lcmdlID0gdGhpcy5zZXR0aW5ncy5tZXJnZUZpdCAmJiBNYXRoLm1pbihtZXJnZSwgdGhpcy5zZXR0aW5ncy5pdGVtcykgfHwgbWVyZ2U7XG5cblx0XHRcdFx0Y2FjaGUuaXRlbXMubWVyZ2UgPSBtZXJnZSA+IDEgfHwgY2FjaGUuaXRlbXMubWVyZ2U7XG5cblx0XHRcdFx0d2lkdGhzW2l0ZXJhdG9yXSA9ICFncmlkID8gdGhpcy5faXRlbXNbaXRlcmF0b3JdLndpZHRoKCkgOiB3aWR0aCAqIG1lcmdlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl93aWR0aHMgPSB3aWR0aHM7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGNsb25lcyA9IFtdLFxuXHRcdFx0XHRpdGVtcyA9IHRoaXMuX2l0ZW1zLFxuXHRcdFx0XHRzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MsXG5cdFx0XHRcdC8vIFRPRE86IFNob3VsZCBiZSBjb21wdXRlZCBmcm9tIG51bWJlciBvZiBtaW4gd2lkdGggaXRlbXMgaW4gc3RhZ2Vcblx0XHRcdFx0dmlldyA9IE1hdGgubWF4KHNldHRpbmdzLml0ZW1zICogMiwgNCksXG5cdFx0XHRcdHNpemUgPSBNYXRoLmNlaWwoaXRlbXMubGVuZ3RoIC8gMikgKiAyLFxuXHRcdFx0XHRyZXBlYXQgPSBzZXR0aW5ncy5sb29wICYmIGl0ZW1zLmxlbmd0aCA/IHNldHRpbmdzLnJld2luZCA/IHZpZXcgOiBNYXRoLm1heCh2aWV3LCBzaXplKSA6IDAsXG5cdFx0XHRcdGFwcGVuZCA9ICcnLFxuXHRcdFx0XHRwcmVwZW5kID0gJyc7XG5cblx0XHRcdHJlcGVhdCAvPSAyO1xuXG5cdFx0XHR3aGlsZSAocmVwZWF0ID4gMCkge1xuXHRcdFx0XHQvLyBTd2l0Y2ggdG8gb25seSB1c2luZyBhcHBlbmRlZCBjbG9uZXNcblx0XHRcdFx0Y2xvbmVzLnB1c2godGhpcy5ub3JtYWxpemUoY2xvbmVzLmxlbmd0aCAvIDIsIHRydWUpKTtcblx0XHRcdFx0YXBwZW5kID0gYXBwZW5kICsgaXRlbXNbY2xvbmVzW2Nsb25lcy5sZW5ndGggLSAxXV1bMF0ub3V0ZXJIVE1MO1xuXHRcdFx0XHRjbG9uZXMucHVzaCh0aGlzLm5vcm1hbGl6ZShpdGVtcy5sZW5ndGggLSAxIC0gKGNsb25lcy5sZW5ndGggLSAxKSAvIDIsIHRydWUpKTtcblx0XHRcdFx0cHJlcGVuZCA9IGl0ZW1zW2Nsb25lc1tjbG9uZXMubGVuZ3RoIC0gMV1dWzBdLm91dGVySFRNTCArIHByZXBlbmQ7XG5cdFx0XHRcdHJlcGVhdCAtPSAxO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9jbG9uZXMgPSBjbG9uZXM7XG5cblx0XHRcdCQoYXBwZW5kKS5hZGRDbGFzcygnY2xvbmVkJykuYXBwZW5kVG8odGhpcy4kc3RhZ2UpO1xuXHRcdFx0JChwcmVwZW5kKS5hZGRDbGFzcygnY2xvbmVkJykucHJlcGVuZFRvKHRoaXMuJHN0YWdlKTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcnRsID0gdGhpcy5zZXR0aW5ncy5ydGwgPyAxIDogLTEsXG5cdFx0XHRcdHNpemUgPSB0aGlzLl9jbG9uZXMubGVuZ3RoICsgdGhpcy5faXRlbXMubGVuZ3RoLFxuXHRcdFx0XHRpdGVyYXRvciA9IC0xLFxuXHRcdFx0XHRwcmV2aW91cyA9IDAsXG5cdFx0XHRcdGN1cnJlbnQgPSAwLFxuXHRcdFx0XHRjb29yZGluYXRlcyA9IFtdO1xuXG5cdFx0XHR3aGlsZSAoKytpdGVyYXRvciA8IHNpemUpIHtcblx0XHRcdFx0cHJldmlvdXMgPSBjb29yZGluYXRlc1tpdGVyYXRvciAtIDFdIHx8IDA7XG5cdFx0XHRcdGN1cnJlbnQgPSB0aGlzLl93aWR0aHNbdGhpcy5yZWxhdGl2ZShpdGVyYXRvcildICsgdGhpcy5zZXR0aW5ncy5tYXJnaW47XG5cdFx0XHRcdGNvb3JkaW5hdGVzLnB1c2gocHJldmlvdXMgKyBjdXJyZW50ICogcnRsKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcGFkZGluZyA9IHRoaXMuc2V0dGluZ3Muc3RhZ2VQYWRkaW5nLFxuXHRcdFx0XHRjb29yZGluYXRlcyA9IHRoaXMuX2Nvb3JkaW5hdGVzLFxuXHRcdFx0XHRjc3MgPSB7XG5cdFx0XHRcdFx0J3dpZHRoJzogTWF0aC5jZWlsKE1hdGguYWJzKGNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzLmxlbmd0aCAtIDFdKSkgKyBwYWRkaW5nICogMixcblx0XHRcdFx0XHQncGFkZGluZy1sZWZ0JzogcGFkZGluZyB8fCAnJyxcblx0XHRcdFx0XHQncGFkZGluZy1yaWdodCc6IHBhZGRpbmcgfHwgJydcblx0XHRcdFx0fTtcblxuXHRcdFx0dGhpcy4kc3RhZ2UuY3NzKGNzcyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKGNhY2hlKSB7XG5cdFx0XHR2YXIgaXRlcmF0b3IgPSB0aGlzLl9jb29yZGluYXRlcy5sZW5ndGgsXG5cdFx0XHRcdGdyaWQgPSAhdGhpcy5zZXR0aW5ncy5hdXRvV2lkdGgsXG5cdFx0XHRcdGl0ZW1zID0gdGhpcy4kc3RhZ2UuY2hpbGRyZW4oKTtcblxuXHRcdFx0aWYgKGdyaWQgJiYgY2FjaGUuaXRlbXMubWVyZ2UpIHtcblx0XHRcdFx0d2hpbGUgKGl0ZXJhdG9yLS0pIHtcblx0XHRcdFx0XHRjYWNoZS5jc3Mud2lkdGggPSB0aGlzLl93aWR0aHNbdGhpcy5yZWxhdGl2ZShpdGVyYXRvcildO1xuXHRcdFx0XHRcdGl0ZW1zLmVxKGl0ZXJhdG9yKS5jc3MoY2FjaGUuY3NzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChncmlkKSB7XG5cdFx0XHRcdGNhY2hlLmNzcy53aWR0aCA9IGNhY2hlLml0ZW1zLndpZHRoO1xuXHRcdFx0XHRpdGVtcy5jc3MoY2FjaGUuY3NzKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ2l0ZW1zJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLl9jb29yZGluYXRlcy5sZW5ndGggPCAxICYmIHRoaXMuJHN0YWdlLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKGNhY2hlKSB7XG5cdFx0XHRjYWNoZS5jdXJyZW50ID0gY2FjaGUuY3VycmVudCA/IHRoaXMuJHN0YWdlLmNoaWxkcmVuKCkuaW5kZXgoY2FjaGUuY3VycmVudCkgOiAwO1xuXHRcdFx0Y2FjaGUuY3VycmVudCA9IE1hdGgubWF4KHRoaXMubWluaW11bSgpLCBNYXRoLm1pbih0aGlzLm1heGltdW0oKSwgY2FjaGUuY3VycmVudCkpO1xuXHRcdFx0dGhpcy5yZXNldChjYWNoZS5jdXJyZW50KTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3Bvc2l0aW9uJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLmFuaW1hdGUodGhpcy5jb29yZGluYXRlcyh0aGlzLl9jdXJyZW50KSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdwb3NpdGlvbicsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJ0bCA9IHRoaXMuc2V0dGluZ3MucnRsID8gMSA6IC0xLFxuXHRcdFx0XHRwYWRkaW5nID0gdGhpcy5zZXR0aW5ncy5zdGFnZVBhZGRpbmcgKiAyLFxuXHRcdFx0XHRiZWdpbiA9IHRoaXMuY29vcmRpbmF0ZXModGhpcy5jdXJyZW50KCkpICsgcGFkZGluZyxcblx0XHRcdFx0ZW5kID0gYmVnaW4gKyB0aGlzLndpZHRoKCkgKiBydGwsXG5cdFx0XHRcdGlubmVyLCBvdXRlciwgbWF0Y2hlcyA9IFtdLCBpLCBuO1xuXG5cdFx0XHRmb3IgKGkgPSAwLCBuID0gdGhpcy5fY29vcmRpbmF0ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdGlubmVyID0gdGhpcy5fY29vcmRpbmF0ZXNbaSAtIDFdIHx8IDA7XG5cdFx0XHRcdG91dGVyID0gTWF0aC5hYnModGhpcy5fY29vcmRpbmF0ZXNbaV0pICsgcGFkZGluZyAqIHJ0bDtcblxuXHRcdFx0XHRpZiAoKHRoaXMub3AoaW5uZXIsICc8PScsIGJlZ2luKSAmJiAodGhpcy5vcChpbm5lciwgJz4nLCBlbmQpKSlcblx0XHRcdFx0XHR8fCAodGhpcy5vcChvdXRlciwgJzwnLCBiZWdpbikgJiYgdGhpcy5vcChvdXRlciwgJz4nLCBlbmQpKSkge1xuXHRcdFx0XHRcdG1hdGNoZXMucHVzaChpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbignLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCc6ZXEoJyArIG1hdGNoZXMuam9pbignKSwgOmVxKCcpICsgJyknKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cblx0XHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCcuY2VudGVyJykucmVtb3ZlQ2xhc3MoJ2NlbnRlcicpO1xuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MuY2VudGVyKSB7XG5cdFx0XHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCkuZXEodGhpcy5jdXJyZW50KCkpLmFkZENsYXNzKCdjZW50ZXInKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gXTtcblxuXHQvKipcblx0ICogQ3JlYXRlIHRoZSBzdGFnZSBET00gZWxlbWVudFxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5pbml0aWFsaXplU3RhZ2UgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLiRzdGFnZSA9IHRoaXMuJGVsZW1lbnQuZmluZCgnLicgKyB0aGlzLnNldHRpbmdzLnN0YWdlQ2xhc3MpO1xuXG5cdFx0Ly8gaWYgdGhlIHN0YWdlIGlzIGFscmVhZHkgaW4gdGhlIERPTSwgZ3JhYiBpdCBhbmQgc2tpcCBzdGFnZSBpbml0aWFsaXphdGlvblxuXHRcdGlmICh0aGlzLiRzdGFnZS5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLiRlbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5sb2FkaW5nQ2xhc3MpO1xuXG5cdFx0Ly8gY3JlYXRlIHN0YWdlXG5cdFx0dGhpcy4kc3RhZ2UgPSAkKCc8JyArIHRoaXMuc2V0dGluZ3Muc3RhZ2VFbGVtZW50ICsgJz4nLCB7XG5cdFx0XHRcImNsYXNzXCI6IHRoaXMuc2V0dGluZ3Muc3RhZ2VDbGFzc1xuXHRcdH0pLndyYXAoICQoICc8ZGl2Lz4nLCB7XG5cdFx0XHRcImNsYXNzXCI6IHRoaXMuc2V0dGluZ3Muc3RhZ2VPdXRlckNsYXNzXG5cdFx0fSkpO1xuXG5cdFx0Ly8gYXBwZW5kIHN0YWdlXG5cdFx0dGhpcy4kZWxlbWVudC5hcHBlbmQodGhpcy4kc3RhZ2UucGFyZW50KCkpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDcmVhdGUgaXRlbSBET00gZWxlbWVudHNcblx0ICovXG5cdE93bC5wcm90b3R5cGUuaW5pdGlhbGl6ZUl0ZW1zID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyICRpdGVtcyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnLm93bC1pdGVtJyk7XG5cblx0XHQvLyBpZiB0aGUgaXRlbXMgYXJlIGFscmVhZHkgaW4gdGhlIERPTSwgZ3JhYiB0aGVtIGFuZCBza2lwIGl0ZW0gaW5pdGlhbGl6YXRpb25cblx0XHRpZiAoJGl0ZW1zLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5faXRlbXMgPSAkaXRlbXMuZ2V0KCkubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRcdFx0cmV0dXJuICQoaXRlbSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5fbWVyZ2VycyA9IHRoaXMuX2l0ZW1zLm1hcChmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5yZWZyZXNoKCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBhcHBlbmQgY29udGVudFxuXHRcdHRoaXMucmVwbGFjZSh0aGlzLiRlbGVtZW50LmNoaWxkcmVuKCkubm90KHRoaXMuJHN0YWdlLnBhcmVudCgpKSk7XG5cblx0XHQvLyBjaGVjayB2aXNpYmlsaXR5XG5cdFx0aWYgKHRoaXMuaXNWaXNpYmxlKCkpIHtcblx0XHRcdC8vIHVwZGF0ZSB2aWV3XG5cdFx0XHR0aGlzLnJlZnJlc2goKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gaW52YWxpZGF0ZSB3aWR0aFxuXHRcdFx0dGhpcy5pbnZhbGlkYXRlKCd3aWR0aCcpO1xuXHRcdH1cblxuXHRcdHRoaXMuJGVsZW1lbnRcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubG9hZGluZ0NsYXNzKVxuXHRcdFx0LmFkZENsYXNzKHRoaXMub3B0aW9ucy5sb2FkZWRDbGFzcyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIHRoZSBjYXJvdXNlbC5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5lbnRlcignaW5pdGlhbGl6aW5nJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCdpbml0aWFsaXplJyk7XG5cblx0XHR0aGlzLiRlbGVtZW50LnRvZ2dsZUNsYXNzKHRoaXMuc2V0dGluZ3MucnRsQ2xhc3MsIHRoaXMuc2V0dGluZ3MucnRsKTtcblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLmF1dG9XaWR0aCAmJiAhdGhpcy5pcygncHJlLWxvYWRpbmcnKSkge1xuXHRcdFx0dmFyIGltZ3MsIG5lc3RlZFNlbGVjdG9yLCB3aWR0aDtcblx0XHRcdGltZ3MgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ2ltZycpO1xuXHRcdFx0bmVzdGVkU2VsZWN0b3IgPSB0aGlzLnNldHRpbmdzLm5lc3RlZEl0ZW1TZWxlY3RvciA/ICcuJyArIHRoaXMuc2V0dGluZ3MubmVzdGVkSXRlbVNlbGVjdG9yIDogdW5kZWZpbmVkO1xuXHRcdFx0d2lkdGggPSB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKG5lc3RlZFNlbGVjdG9yKS53aWR0aCgpO1xuXG5cdFx0XHRpZiAoaW1ncy5sZW5ndGggJiYgd2lkdGggPD0gMCkge1xuXHRcdFx0XHR0aGlzLnByZWxvYWRBdXRvV2lkdGhJbWFnZXMoaW1ncyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5pbml0aWFsaXplU3RhZ2UoKTtcblx0XHR0aGlzLmluaXRpYWxpemVJdGVtcygpO1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnRIYW5kbGVycygpO1xuXG5cdFx0dGhpcy5sZWF2ZSgnaW5pdGlhbGl6aW5nJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCdpbml0aWFsaXplZCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdmlzaWJpbGl0eSBvZiAkZWxlbWVudFxuXHQgKiAgICAgICAgICAgICAgICAgICAgaWYgeW91IGtub3cgdGhlIGNhcm91c2VsIHdpbGwgYWx3YXlzIGJlIHZpc2libGUgeW91IGNhbiBzZXQgYGNoZWNrVmlzaWJpbGl0eWAgdG8gYGZhbHNlYCB0b1xuXHQgKiAgICAgICAgICAgICAgICAgICAgcHJldmVudCB0aGUgZXhwZW5zaXZlIGJyb3dzZXIgbGF5b3V0IGZvcmNlZCByZWZsb3cgdGhlICRlbGVtZW50LmlzKCc6dmlzaWJsZScpIGRvZXNcblx0ICovXG5cdE93bC5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0dGluZ3MuY2hlY2tWaXNpYmlsaXR5XG5cdFx0XHQ/IHRoaXMuJGVsZW1lbnQuaXMoJzp2aXNpYmxlJylcblx0XHRcdDogdHJ1ZTtcblx0fTtcblxuXHQvKipcblx0ICogU2V0dXBzIHRoZSBjdXJyZW50IHNldHRpbmdzLlxuXHQgKiBAdG9kbyBSZW1vdmUgcmVzcG9uc2l2ZSBjbGFzc2VzLiBXaHkgc2hvdWxkIGFkYXB0aXZlIGRlc2lnbnMgYmUgYnJvdWdodCBpbnRvIElFOD9cblx0ICogQHRvZG8gU3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllcyBieSB1c2luZyBgbWF0Y2hNZWRpYWAgd291bGQgYmUgbmljZS5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB2aWV3cG9ydCA9IHRoaXMudmlld3BvcnQoKSxcblx0XHRcdG92ZXJ3cml0ZXMgPSB0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZSxcblx0XHRcdG1hdGNoID0gLTEsXG5cdFx0XHRzZXR0aW5ncyA9IG51bGw7XG5cblx0XHRpZiAoIW92ZXJ3cml0ZXMpIHtcblx0XHRcdHNldHRpbmdzID0gJC5leHRlbmQoe30sIHRoaXMub3B0aW9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQuZWFjaChvdmVyd3JpdGVzLCBmdW5jdGlvbihicmVha3BvaW50KSB7XG5cdFx0XHRcdGlmIChicmVha3BvaW50IDw9IHZpZXdwb3J0ICYmIGJyZWFrcG9pbnQgPiBtYXRjaCkge1xuXHRcdFx0XHRcdG1hdGNoID0gTnVtYmVyKGJyZWFrcG9pbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0c2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zLCBvdmVyd3JpdGVzW21hdGNoXSk7XG5cdFx0XHRpZiAodHlwZW9mIHNldHRpbmdzLnN0YWdlUGFkZGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRzZXR0aW5ncy5zdGFnZVBhZGRpbmcgPSBzZXR0aW5ncy5zdGFnZVBhZGRpbmcoKTtcblx0XHRcdH1cblx0XHRcdGRlbGV0ZSBzZXR0aW5ncy5yZXNwb25zaXZlO1xuXG5cdFx0XHQvLyByZXNwb25zaXZlIGNsYXNzXG5cdFx0XHRpZiAoc2V0dGluZ3MucmVzcG9uc2l2ZUNsYXNzKSB7XG5cdFx0XHRcdHRoaXMuJGVsZW1lbnQuYXR0cignY2xhc3MnLFxuXHRcdFx0XHRcdHRoaXMuJGVsZW1lbnQuYXR0cignY2xhc3MnKS5yZXBsYWNlKG5ldyBSZWdFeHAoJygnICsgdGhpcy5vcHRpb25zLnJlc3BvbnNpdmVDbGFzcyArICctKVxcXFxTK1xcXFxzJywgJ2cnKSwgJyQxJyArIG1hdGNoKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcignY2hhbmdlJywgeyBwcm9wZXJ0eTogeyBuYW1lOiAnc2V0dGluZ3MnLCB2YWx1ZTogc2V0dGluZ3MgfSB9KTtcblx0XHR0aGlzLl9icmVha3BvaW50ID0gbWF0Y2g7XG5cdFx0dGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuXHRcdHRoaXMuaW52YWxpZGF0ZSgnc2V0dGluZ3MnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ2NoYW5nZWQnLCB7IHByb3BlcnR5OiB7IG5hbWU6ICdzZXR0aW5ncycsIHZhbHVlOiB0aGlzLnNldHRpbmdzIH0gfSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgb3B0aW9uIGxvZ2ljIGlmIG5lY2Vzc2VyeS5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vcHRpb25zTG9naWMgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy5zZXR0aW5ncy5hdXRvV2lkdGgpIHtcblx0XHRcdHRoaXMuc2V0dGluZ3Muc3RhZ2VQYWRkaW5nID0gZmFsc2U7XG5cdFx0XHR0aGlzLnNldHRpbmdzLm1lcmdlID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBQcmVwYXJlcyBhbiBpdGVtIGJlZm9yZSBhZGQuXG5cdCAqIEB0b2RvIFJlbmFtZSBldmVudCBwYXJhbWV0ZXIgYGNvbnRlbnRgIHRvIGBpdGVtYC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcmV0dXJucyB7alF1ZXJ5fEhUTUxFbGVtZW50fSAtIFRoZSBpdGVtIGNvbnRhaW5lci5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucHJlcGFyZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHR2YXIgZXZlbnQgPSB0aGlzLnRyaWdnZXIoJ3ByZXBhcmUnLCB7IGNvbnRlbnQ6IGl0ZW0gfSk7XG5cblx0XHRpZiAoIWV2ZW50LmRhdGEpIHtcblx0XHRcdGV2ZW50LmRhdGEgPSAkKCc8JyArIHRoaXMuc2V0dGluZ3MuaXRlbUVsZW1lbnQgKyAnLz4nKVxuXHRcdFx0XHQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLml0ZW1DbGFzcykuYXBwZW5kKGl0ZW0pXG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKCdwcmVwYXJlZCcsIHsgY29udGVudDogZXZlbnQuZGF0YSB9KTtcblxuXHRcdHJldHVybiBldmVudC5kYXRhO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRoZSB2aWV3LlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpID0gMCxcblx0XHRcdG4gPSB0aGlzLl9waXBlLmxlbmd0aCxcblx0XHRcdGZpbHRlciA9ICQucHJveHkoZnVuY3Rpb24ocCkgeyByZXR1cm4gdGhpc1twXSB9LCB0aGlzLl9pbnZhbGlkYXRlZCksXG5cdFx0XHRjYWNoZSA9IHt9O1xuXG5cdFx0d2hpbGUgKGkgPCBuKSB7XG5cdFx0XHRpZiAodGhpcy5faW52YWxpZGF0ZWQuYWxsIHx8ICQuZ3JlcCh0aGlzLl9waXBlW2ldLmZpbHRlciwgZmlsdGVyKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRoaXMuX3BpcGVbaV0ucnVuKGNhY2hlKTtcblx0XHRcdH1cblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHR0aGlzLl9pbnZhbGlkYXRlZCA9IHt9O1xuXG5cdFx0IXRoaXMuaXMoJ3ZhbGlkJykgJiYgdGhpcy5lbnRlcigndmFsaWQnKTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgd2lkdGggb2YgdGhlIHZpZXcuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtPd2wuV2lkdGh9IFtkaW1lbnNpb249T3dsLldpZHRoLkRlZmF1bHRdIC0gVGhlIGRpbWVuc2lvbiB0byByZXR1cm4uXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gVGhlIHdpZHRoIG9mIHRoZSB2aWV3IGluIHBpeGVsLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS53aWR0aCA9IGZ1bmN0aW9uKGRpbWVuc2lvbikge1xuXHRcdGRpbWVuc2lvbiA9IGRpbWVuc2lvbiB8fCBPd2wuV2lkdGguRGVmYXVsdDtcblx0XHRzd2l0Y2ggKGRpbWVuc2lvbikge1xuXHRcdFx0Y2FzZSBPd2wuV2lkdGguSW5uZXI6XG5cdFx0XHRjYXNlIE93bC5XaWR0aC5PdXRlcjpcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3dpZHRoO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3dpZHRoIC0gdGhpcy5zZXR0aW5ncy5zdGFnZVBhZGRpbmcgKiAyICsgdGhpcy5zZXR0aW5ncy5tYXJnaW47XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZWZyZXNoZXMgdGhlIGNhcm91c2VsIHByaW1hcmlseSBmb3IgYWRhcHRpdmUgcHVycG9zZXMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZW50ZXIoJ3JlZnJlc2hpbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3JlZnJlc2gnKTtcblxuXHRcdHRoaXMuc2V0dXAoKTtcblxuXHRcdHRoaXMub3B0aW9uc0xvZ2ljKCk7XG5cblx0XHR0aGlzLiRlbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5yZWZyZXNoQ2xhc3MpO1xuXG5cdFx0dGhpcy51cGRhdGUoKTtcblxuXHRcdHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnJlZnJlc2hDbGFzcyk7XG5cblx0XHR0aGlzLmxlYXZlKCdyZWZyZXNoaW5nJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCdyZWZyZXNoZWQnKTtcblx0fTtcblxuXHQvKipcblx0ICogQ2hlY2tzIHdpbmRvdyBgcmVzaXplYCBldmVudC5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vblRocm90dGxlZFJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lcik7XG5cdFx0dGhpcy5yZXNpemVUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuX2hhbmRsZXJzLm9uUmVzaXplLCB0aGlzLnNldHRpbmdzLnJlc3BvbnNpdmVSZWZyZXNoUmF0ZSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIENoZWNrcyB3aW5kb3cgYHJlc2l6ZWAgZXZlbnQuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE93bC5wcm90b3R5cGUub25SZXNpemUgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIXRoaXMuX2l0ZW1zLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLl93aWR0aCA9PT0gdGhpcy4kZWxlbWVudC53aWR0aCgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmlzVmlzaWJsZSgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbnRlcigncmVzaXppbmcnKTtcblxuXHRcdGlmICh0aGlzLnRyaWdnZXIoJ3Jlc2l6ZScpLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG5cdFx0XHR0aGlzLmxlYXZlKCdyZXNpemluZycpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuaW52YWxpZGF0ZSgnd2lkdGgnKTtcblxuXHRcdHRoaXMucmVmcmVzaCgpO1xuXG5cdFx0dGhpcy5sZWF2ZSgncmVzaXppbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3Jlc2l6ZWQnKTtcblx0fTtcblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGV2ZW50IGhhbmRsZXJzLlxuXHQgKiBAdG9kbyBDaGVjayBgbXNQb2ludGVyRW5hYmxlZGBcblx0ICogQHRvZG8gIzI2MVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlZ2lzdGVyRXZlbnRIYW5kbGVycyA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICgkLnN1cHBvcnQudHJhbnNpdGlvbikge1xuXHRcdFx0dGhpcy4kc3RhZ2Uub24oJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kICsgJy5vd2wuY29yZScsICQucHJveHkodGhpcy5vblRyYW5zaXRpb25FbmQsIHRoaXMpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5yZXNwb25zaXZlICE9PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5vbih3aW5kb3csICdyZXNpemUnLCB0aGlzLl9oYW5kbGVycy5vblRocm90dGxlZFJlc2l6ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MubW91c2VEcmFnKSB7XG5cdFx0XHR0aGlzLiRlbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5kcmFnQ2xhc3MpO1xuXHRcdFx0dGhpcy4kc3RhZ2Uub24oJ21vdXNlZG93bi5vd2wuY29yZScsICQucHJveHkodGhpcy5vbkRyYWdTdGFydCwgdGhpcykpO1xuXHRcdFx0dGhpcy4kc3RhZ2Uub24oJ2RyYWdzdGFydC5vd2wuY29yZSBzZWxlY3RzdGFydC5vd2wuY29yZScsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2UgfSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MudG91Y2hEcmFnKXtcblx0XHRcdHRoaXMuJHN0YWdlLm9uKCd0b3VjaHN0YXJ0Lm93bC5jb3JlJywgJC5wcm94eSh0aGlzLm9uRHJhZ1N0YXJ0LCB0aGlzKSk7XG5cdFx0XHR0aGlzLiRzdGFnZS5vbigndG91Y2hjYW5jZWwub3dsLmNvcmUnLCAkLnByb3h5KHRoaXMub25EcmFnRW5kLCB0aGlzKSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGB0b3VjaHN0YXJ0YCBhbmQgYG1vdXNlZG93bmAgZXZlbnRzLlxuXHQgKiBAdG9kbyBIb3Jpem9udGFsIHN3aXBlIHRocmVzaG9sZCBhcyBvcHRpb25cblx0ICogQHRvZG8gIzI2MVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUub25EcmFnU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciBzdGFnZSA9IG51bGw7XG5cblx0XHRpZiAoZXZlbnQud2hpY2ggPT09IDMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoJC5zdXBwb3J0LnRyYW5zZm9ybSkge1xuXHRcdFx0c3RhZ2UgPSB0aGlzLiRzdGFnZS5jc3MoJ3RyYW5zZm9ybScpLnJlcGxhY2UoLy4qXFwofFxcKXwgL2csICcnKS5zcGxpdCgnLCcpO1xuXHRcdFx0c3RhZ2UgPSB7XG5cdFx0XHRcdHg6IHN0YWdlW3N0YWdlLmxlbmd0aCA9PT0gMTYgPyAxMiA6IDRdLFxuXHRcdFx0XHR5OiBzdGFnZVtzdGFnZS5sZW5ndGggPT09IDE2ID8gMTMgOiA1XVxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RhZ2UgPSB0aGlzLiRzdGFnZS5wb3NpdGlvbigpO1xuXHRcdFx0c3RhZ2UgPSB7XG5cdFx0XHRcdHg6IHRoaXMuc2V0dGluZ3MucnRsID9cblx0XHRcdFx0XHRzdGFnZS5sZWZ0ICsgdGhpcy4kc3RhZ2Uud2lkdGgoKSAtIHRoaXMud2lkdGgoKSArIHRoaXMuc2V0dGluZ3MubWFyZ2luIDpcblx0XHRcdFx0XHRzdGFnZS5sZWZ0LFxuXHRcdFx0XHR5OiBzdGFnZS50b3Bcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXMoJ2FuaW1hdGluZycpKSB7XG5cdFx0XHQkLnN1cHBvcnQudHJhbnNmb3JtID8gdGhpcy5hbmltYXRlKHN0YWdlLngpIDogdGhpcy4kc3RhZ2Uuc3RvcCgpXG5cdFx0XHR0aGlzLmludmFsaWRhdGUoJ3Bvc2l0aW9uJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy4kZWxlbWVudC50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuZ3JhYkNsYXNzLCBldmVudC50eXBlID09PSAnbW91c2Vkb3duJyk7XG5cblx0XHR0aGlzLnNwZWVkKDApO1xuXG5cdFx0dGhpcy5fZHJhZy50aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0dGhpcy5fZHJhZy50YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG5cdFx0dGhpcy5fZHJhZy5zdGFnZS5zdGFydCA9IHN0YWdlO1xuXHRcdHRoaXMuX2RyYWcuc3RhZ2UuY3VycmVudCA9IHN0YWdlO1xuXHRcdHRoaXMuX2RyYWcucG9pbnRlciA9IHRoaXMucG9pbnRlcihldmVudCk7XG5cblx0XHQkKGRvY3VtZW50KS5vbignbW91c2V1cC5vd2wuY29yZSB0b3VjaGVuZC5vd2wuY29yZScsICQucHJveHkodGhpcy5vbkRyYWdFbmQsIHRoaXMpKTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uZSgnbW91c2Vtb3ZlLm93bC5jb3JlIHRvdWNobW92ZS5vd2wuY29yZScsICQucHJveHkoZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdHZhciBkZWx0YSA9IHRoaXMuZGlmZmVyZW5jZSh0aGlzLl9kcmFnLnBvaW50ZXIsIHRoaXMucG9pbnRlcihldmVudCkpO1xuXG5cdFx0XHQkKGRvY3VtZW50KS5vbignbW91c2Vtb3ZlLm93bC5jb3JlIHRvdWNobW92ZS5vd2wuY29yZScsICQucHJveHkodGhpcy5vbkRyYWdNb3ZlLCB0aGlzKSk7XG5cblx0XHRcdGlmIChNYXRoLmFicyhkZWx0YS54KSA8IE1hdGguYWJzKGRlbHRhLnkpICYmIHRoaXMuaXMoJ3ZhbGlkJykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR0aGlzLmVudGVyKCdkcmFnZ2luZycpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdkcmFnJyk7XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIHRoZSBgdG91Y2htb3ZlYCBhbmQgYG1vdXNlbW92ZWAgZXZlbnRzLlxuXHQgKiBAdG9kbyAjMjYxXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vbkRyYWdNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgbWluaW11bSA9IG51bGwsXG5cdFx0XHRtYXhpbXVtID0gbnVsbCxcblx0XHRcdHB1bGwgPSBudWxsLFxuXHRcdFx0ZGVsdGEgPSB0aGlzLmRpZmZlcmVuY2UodGhpcy5fZHJhZy5wb2ludGVyLCB0aGlzLnBvaW50ZXIoZXZlbnQpKSxcblx0XHRcdHN0YWdlID0gdGhpcy5kaWZmZXJlbmNlKHRoaXMuX2RyYWcuc3RhZ2Uuc3RhcnQsIGRlbHRhKTtcblxuXHRcdGlmICghdGhpcy5pcygnZHJhZ2dpbmcnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5sb29wKSB7XG5cdFx0XHRtaW5pbXVtID0gdGhpcy5jb29yZGluYXRlcyh0aGlzLm1pbmltdW0oKSk7XG5cdFx0XHRtYXhpbXVtID0gdGhpcy5jb29yZGluYXRlcyh0aGlzLm1heGltdW0oKSArIDEpIC0gbWluaW11bTtcblx0XHRcdHN0YWdlLnggPSAoKChzdGFnZS54IC0gbWluaW11bSkgJSBtYXhpbXVtICsgbWF4aW11bSkgJSBtYXhpbXVtKSArIG1pbmltdW07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1pbmltdW0gPSB0aGlzLnNldHRpbmdzLnJ0bCA/IHRoaXMuY29vcmRpbmF0ZXModGhpcy5tYXhpbXVtKCkpIDogdGhpcy5jb29yZGluYXRlcyh0aGlzLm1pbmltdW0oKSk7XG5cdFx0XHRtYXhpbXVtID0gdGhpcy5zZXR0aW5ncy5ydGwgPyB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWluaW11bSgpKSA6IHRoaXMuY29vcmRpbmF0ZXModGhpcy5tYXhpbXVtKCkpO1xuXHRcdFx0cHVsbCA9IHRoaXMuc2V0dGluZ3MucHVsbERyYWcgPyAtMSAqIGRlbHRhLnggLyA1IDogMDtcblx0XHRcdHN0YWdlLnggPSBNYXRoLm1heChNYXRoLm1pbihzdGFnZS54LCBtaW5pbXVtICsgcHVsbCksIG1heGltdW0gKyBwdWxsKTtcblx0XHR9XG5cblx0XHR0aGlzLl9kcmFnLnN0YWdlLmN1cnJlbnQgPSBzdGFnZTtcblxuXHRcdHRoaXMuYW5pbWF0ZShzdGFnZS54KTtcblx0fTtcblxuXHQvKipcblx0ICogSGFuZGxlcyB0aGUgYHRvdWNoZW5kYCBhbmQgYG1vdXNldXBgIGV2ZW50cy5cblx0ICogQHRvZG8gIzI2MVxuXHQgKiBAdG9kbyBUaHJlc2hvbGQgZm9yIGNsaWNrIGV2ZW50XG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vbkRyYWdFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciBkZWx0YSA9IHRoaXMuZGlmZmVyZW5jZSh0aGlzLl9kcmFnLnBvaW50ZXIsIHRoaXMucG9pbnRlcihldmVudCkpLFxuXHRcdFx0c3RhZ2UgPSB0aGlzLl9kcmFnLnN0YWdlLmN1cnJlbnQsXG5cdFx0XHRkaXJlY3Rpb24gPSBkZWx0YS54ID4gMCBeIHRoaXMuc2V0dGluZ3MucnRsID8gJ2xlZnQnIDogJ3JpZ2h0JztcblxuXHRcdCQoZG9jdW1lbnQpLm9mZignLm93bC5jb3JlJyk7XG5cblx0XHR0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5ncmFiQ2xhc3MpO1xuXG5cdFx0aWYgKGRlbHRhLnggIT09IDAgJiYgdGhpcy5pcygnZHJhZ2dpbmcnKSB8fCAhdGhpcy5pcygndmFsaWQnKSkge1xuXHRcdFx0dGhpcy5zcGVlZCh0aGlzLnNldHRpbmdzLmRyYWdFbmRTcGVlZCB8fCB0aGlzLnNldHRpbmdzLnNtYXJ0U3BlZWQpO1xuXHRcdFx0dGhpcy5jdXJyZW50KHRoaXMuY2xvc2VzdChzdGFnZS54LCBkZWx0YS54ICE9PSAwID8gZGlyZWN0aW9uIDogdGhpcy5fZHJhZy5kaXJlY3Rpb24pKTtcblx0XHRcdHRoaXMuaW52YWxpZGF0ZSgncG9zaXRpb24nKTtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cblx0XHRcdHRoaXMuX2RyYWcuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXG5cdFx0XHRpZiAoTWF0aC5hYnMoZGVsdGEueCkgPiAzIHx8IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5fZHJhZy50aW1lID4gMzAwKSB7XG5cdFx0XHRcdHRoaXMuX2RyYWcudGFyZ2V0Lm9uZSgnY2xpY2sub3dsLmNvcmUnLCBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuaXMoJ2RyYWdnaW5nJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmxlYXZlKCdkcmFnZ2luZycpO1xuXHRcdHRoaXMudHJpZ2dlcignZHJhZ2dlZCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBjbG9zZXN0IGl0ZW0gZm9yIGEgY29vcmRpbmF0ZS5cblx0ICogQHRvZG8gU2V0dGluZyBgZnJlZURyYWdgIG1ha2VzIGBjbG9zZXN0YCBub3QgcmV1c2FibGUuIFNlZSAjMTY1LlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBjb29yZGluYXRlIC0gVGhlIGNvb3JkaW5hdGUgaW4gcGl4ZWwuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkaXJlY3Rpb24gLSBUaGUgZGlyZWN0aW9uIHRvIGNoZWNrIGZvciB0aGUgY2xvc2VzdCBpdGVtLiBFdGhlciBgbGVmdGAgb3IgYHJpZ2h0YC5cblx0ICogQHJldHVybiB7TnVtYmVyfSAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgY2xvc2VzdCBpdGVtLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24oY29vcmRpbmF0ZSwgZGlyZWN0aW9uKSB7XG5cdFx0dmFyIHBvc2l0aW9uID0gLTEsXG5cdFx0XHRwdWxsID0gMzAsXG5cdFx0XHR3aWR0aCA9IHRoaXMud2lkdGgoKSxcblx0XHRcdGNvb3JkaW5hdGVzID0gdGhpcy5jb29yZGluYXRlcygpO1xuXG5cdFx0aWYgKCF0aGlzLnNldHRpbmdzLmZyZWVEcmFnKSB7XG5cdFx0XHQvLyBjaGVjayBjbG9zZXN0IGl0ZW1cblx0XHRcdCQuZWFjaChjb29yZGluYXRlcywgJC5wcm94eShmdW5jdGlvbihpbmRleCwgdmFsdWUpIHtcblx0XHRcdFx0Ly8gb24gYSBsZWZ0IHB1bGwsIGNoZWNrIG9uIGN1cnJlbnQgaW5kZXhcblx0XHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnICYmIGNvb3JkaW5hdGUgPiB2YWx1ZSAtIHB1bGwgJiYgY29vcmRpbmF0ZSA8IHZhbHVlICsgcHVsbCkge1xuXHRcdFx0XHRcdHBvc2l0aW9uID0gaW5kZXg7XG5cdFx0XHRcdC8vIG9uIGEgcmlnaHQgcHVsbCwgY2hlY2sgb24gcHJldmlvdXMgaW5kZXhcblx0XHRcdFx0Ly8gdG8gZG8gc28sIHN1YnRyYWN0IHdpZHRoIGZyb20gdmFsdWUgYW5kIHNldCBwb3NpdGlvbiA9IGluZGV4ICsgMVxuXHRcdFx0XHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyAmJiBjb29yZGluYXRlID4gdmFsdWUgLSB3aWR0aCAtIHB1bGwgJiYgY29vcmRpbmF0ZSA8IHZhbHVlIC0gd2lkdGggKyBwdWxsKSB7XG5cdFx0XHRcdFx0cG9zaXRpb24gPSBpbmRleCArIDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5vcChjb29yZGluYXRlLCAnPCcsIHZhbHVlKVxuXHRcdFx0XHRcdCYmIHRoaXMub3AoY29vcmRpbmF0ZSwgJz4nLCBjb29yZGluYXRlc1tpbmRleCArIDFdICE9PSB1bmRlZmluZWQgPyBjb29yZGluYXRlc1tpbmRleCArIDFdIDogdmFsdWUgLSB3aWR0aCkpIHtcblx0XHRcdFx0XHRwb3NpdGlvbiA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gaW5kZXggKyAxIDogaW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHBvc2l0aW9uID09PSAtMTtcblx0XHRcdH0sIHRoaXMpKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuc2V0dGluZ3MubG9vcCkge1xuXHRcdFx0Ly8gbm9uIGxvb3AgYm91bmRyaWVzXG5cdFx0XHRpZiAodGhpcy5vcChjb29yZGluYXRlLCAnPicsIGNvb3JkaW5hdGVzW3RoaXMubWluaW11bSgpXSkpIHtcblx0XHRcdFx0cG9zaXRpb24gPSBjb29yZGluYXRlID0gdGhpcy5taW5pbXVtKCk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMub3AoY29vcmRpbmF0ZSwgJzwnLCBjb29yZGluYXRlc1t0aGlzLm1heGltdW0oKV0pKSB7XG5cdFx0XHRcdHBvc2l0aW9uID0gY29vcmRpbmF0ZSA9IHRoaXMubWF4aW11bSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBwb3NpdGlvbjtcblx0fTtcblxuXHQvKipcblx0ICogQW5pbWF0ZXMgdGhlIHN0YWdlLlxuXHQgKiBAdG9kbyAjMjcwXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGNvb3JkaW5hdGUgLSBUaGUgY29vcmRpbmF0ZSBpbiBwaXhlbHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbihjb29yZGluYXRlKSB7XG5cdFx0dmFyIGFuaW1hdGUgPSB0aGlzLnNwZWVkKCkgPiAwO1xuXG5cdFx0dGhpcy5pcygnYW5pbWF0aW5nJykgJiYgdGhpcy5vblRyYW5zaXRpb25FbmQoKTtcblxuXHRcdGlmIChhbmltYXRlKSB7XG5cdFx0XHR0aGlzLmVudGVyKCdhbmltYXRpbmcnKTtcblx0XHRcdHRoaXMudHJpZ2dlcigndHJhbnNsYXRlJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCQuc3VwcG9ydC50cmFuc2Zvcm0zZCAmJiAkLnN1cHBvcnQudHJhbnNpdGlvbikge1xuXHRcdFx0dGhpcy4kc3RhZ2UuY3NzKHtcblx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoJyArIGNvb3JkaW5hdGUgKyAncHgsMHB4LDBweCknLFxuXHRcdFx0XHR0cmFuc2l0aW9uOiAodGhpcy5zcGVlZCgpIC8gMTAwMCkgKyAncycgKyAoXG5cdFx0XHRcdFx0dGhpcy5zZXR0aW5ncy5zbGlkZVRyYW5zaXRpb24gPyAnICcgKyB0aGlzLnNldHRpbmdzLnNsaWRlVHJhbnNpdGlvbiA6ICcnXG5cdFx0XHRcdClcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAoYW5pbWF0ZSkge1xuXHRcdFx0dGhpcy4kc3RhZ2UuYW5pbWF0ZSh7XG5cdFx0XHRcdGxlZnQ6IGNvb3JkaW5hdGUgKyAncHgnXG5cdFx0XHR9LCB0aGlzLnNwZWVkKCksIHRoaXMuc2V0dGluZ3MuZmFsbGJhY2tFYXNpbmcsICQucHJveHkodGhpcy5vblRyYW5zaXRpb25FbmQsIHRoaXMpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy4kc3RhZ2UuY3NzKHtcblx0XHRcdFx0bGVmdDogY29vcmRpbmF0ZSArICdweCdcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogQ2hlY2tzIHdoZXRoZXIgdGhlIGNhcm91c2VsIGlzIGluIGEgc3BlY2lmaWMgc3RhdGUgb3Igbm90LlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RhdGUgLSBUaGUgc3RhdGUgdG8gY2hlY2suXG5cdCAqIEByZXR1cm5zIHtCb29sZWFufSAtIFRoZSBmbGFnIHdoaWNoIGluZGljYXRlcyBpZiB0aGUgY2Fyb3VzZWwgaXMgYnVzeS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuaXMgPSBmdW5jdGlvbihzdGF0ZSkge1xuXHRcdHJldHVybiB0aGlzLl9zdGF0ZXMuY3VycmVudFtzdGF0ZV0gJiYgdGhpcy5fc3RhdGVzLmN1cnJlbnRbc3RhdGVdID4gMDtcblx0fTtcblxuXHQvKipcblx0ICogU2V0cyB0aGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGN1cnJlbnQgaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uXSAtIFRoZSBuZXcgYWJzb2x1dGUgcG9zaXRpb24gb3Igbm90aGluZyB0byBsZWF2ZSBpdCB1bmNoYW5nZWQuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IGl0ZW0uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fY3VycmVudDtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5faXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemUocG9zaXRpb24pO1xuXG5cdFx0aWYgKHRoaXMuX2N1cnJlbnQgIT09IHBvc2l0aW9uKSB7XG5cdFx0XHR2YXIgZXZlbnQgPSB0aGlzLnRyaWdnZXIoJ2NoYW5nZScsIHsgcHJvcGVydHk6IHsgbmFtZTogJ3Bvc2l0aW9uJywgdmFsdWU6IHBvc2l0aW9uIH0gfSk7XG5cblx0XHRcdGlmIChldmVudC5kYXRhICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZShldmVudC5kYXRhKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fY3VycmVudCA9IHBvc2l0aW9uO1xuXG5cdFx0XHR0aGlzLmludmFsaWRhdGUoJ3Bvc2l0aW9uJyk7XG5cblx0XHRcdHRoaXMudHJpZ2dlcignY2hhbmdlZCcsIHsgcHJvcGVydHk6IHsgbmFtZTogJ3Bvc2l0aW9uJywgdmFsdWU6IHRoaXMuX2N1cnJlbnQgfSB9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5fY3VycmVudDtcblx0fTtcblxuXHQvKipcblx0ICogSW52YWxpZGF0ZXMgdGhlIGdpdmVuIHBhcnQgb2YgdGhlIHVwZGF0ZSByb3V0aW5lLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW3BhcnRdIC0gVGhlIHBhcnQgdG8gaW52YWxpZGF0ZS5cblx0ICogQHJldHVybnMge0FycmF5LjxTdHJpbmc+fSAtIFRoZSBpbnZhbGlkYXRlZCBwYXJ0cy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uKHBhcnQpIHtcblx0XHRpZiAoJC50eXBlKHBhcnQpID09PSAnc3RyaW5nJykge1xuXHRcdFx0dGhpcy5faW52YWxpZGF0ZWRbcGFydF0gPSB0cnVlO1xuXHRcdFx0dGhpcy5pcygndmFsaWQnKSAmJiB0aGlzLmxlYXZlKCd2YWxpZCcpO1xuXHRcdH1cblx0XHRyZXR1cm4gJC5tYXAodGhpcy5faW52YWxpZGF0ZWQsIGZ1bmN0aW9uKHYsIGkpIHsgcmV0dXJuIGkgfSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlc2V0cyB0aGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGN1cnJlbnQgaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIG5ldyBpdGVtLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0cG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbik7XG5cblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX3NwZWVkID0gMDtcblx0XHR0aGlzLl9jdXJyZW50ID0gcG9zaXRpb247XG5cblx0XHR0aGlzLnN1cHByZXNzKFsgJ3RyYW5zbGF0ZScsICd0cmFuc2xhdGVkJyBdKTtcblxuXHRcdHRoaXMuYW5pbWF0ZSh0aGlzLmNvb3JkaW5hdGVzKHBvc2l0aW9uKSk7XG5cblx0XHR0aGlzLnJlbGVhc2UoWyAndHJhbnNsYXRlJywgJ3RyYW5zbGF0ZWQnIF0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBOb3JtYWxpemVzIGFuIGFic29sdXRlIG9yIGEgcmVsYXRpdmUgcG9zaXRpb24gb2YgYW4gaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBUaGUgYWJzb2x1dGUgb3IgcmVsYXRpdmUgcG9zaXRpb24gdG8gbm9ybWFsaXplLlxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtyZWxhdGl2ZT1mYWxzZV0gLSBXaGV0aGVyIHRoZSBnaXZlbiBwb3NpdGlvbiBpcyByZWxhdGl2ZSBvciBub3QuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gVGhlIG5vcm1hbGl6ZWQgcG9zaXRpb24uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBvc2l0aW9uLCByZWxhdGl2ZSkge1xuXHRcdHZhciBuID0gdGhpcy5faXRlbXMubGVuZ3RoLFxuXHRcdFx0bSA9IHJlbGF0aXZlID8gMCA6IHRoaXMuX2Nsb25lcy5sZW5ndGg7XG5cblx0XHRpZiAoIXRoaXMuaXNOdW1lcmljKHBvc2l0aW9uKSB8fCBuIDwgMSkge1xuXHRcdFx0cG9zaXRpb24gPSB1bmRlZmluZWQ7XG5cdFx0fSBlbHNlIGlmIChwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gbiArIG0pIHtcblx0XHRcdHBvc2l0aW9uID0gKChwb3NpdGlvbiAtIG0gLyAyKSAlIG4gKyBuKSAlIG4gKyBtIC8gMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gcG9zaXRpb247XG5cdH07XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGFuIGFic29sdXRlIHBvc2l0aW9uIG9mIGFuIGl0ZW0gaW50byBhIHJlbGF0aXZlIG9uZS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gdG8gY29udmVydC5cblx0ICogQHJldHVybnMge051bWJlcn0gLSBUaGUgY29udmVydGVkIHBvc2l0aW9uLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZWxhdGl2ZSA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0cG9zaXRpb24gLT0gdGhpcy5fY2xvbmVzLmxlbmd0aCAvIDI7XG5cdFx0cmV0dXJuIHRoaXMubm9ybWFsaXplKHBvc2l0aW9uLCB0cnVlKTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgbWF4aW11bSBwb3NpdGlvbiBmb3IgdGhlIGN1cnJlbnQgaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtyZWxhdGl2ZT1mYWxzZV0gLSBXaGV0aGVyIHRvIHJldHVybiBhbiBhYnNvbHV0ZSBwb3NpdGlvbiBvciBhIHJlbGF0aXZlIHBvc2l0aW9uLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfVxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5tYXhpbXVtID0gZnVuY3Rpb24ocmVsYXRpdmUpIHtcblx0XHR2YXIgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLFxuXHRcdFx0bWF4aW11bSA9IHRoaXMuX2Nvb3JkaW5hdGVzLmxlbmd0aCxcblx0XHRcdGl0ZXJhdG9yLFxuXHRcdFx0cmVjaXByb2NhbEl0ZW1zV2lkdGgsXG5cdFx0XHRlbGVtZW50V2lkdGg7XG5cblx0XHRpZiAoc2V0dGluZ3MubG9vcCkge1xuXHRcdFx0bWF4aW11bSA9IHRoaXMuX2Nsb25lcy5sZW5ndGggLyAyICsgdGhpcy5faXRlbXMubGVuZ3RoIC0gMTtcblx0XHR9IGVsc2UgaWYgKHNldHRpbmdzLmF1dG9XaWR0aCB8fCBzZXR0aW5ncy5tZXJnZSkge1xuXHRcdFx0aXRlcmF0b3IgPSB0aGlzLl9pdGVtcy5sZW5ndGg7XG5cdFx0XHRpZiAoaXRlcmF0b3IpIHtcblx0XHRcdFx0cmVjaXByb2NhbEl0ZW1zV2lkdGggPSB0aGlzLl9pdGVtc1stLWl0ZXJhdG9yXS53aWR0aCgpO1xuXHRcdFx0XHRlbGVtZW50V2lkdGggPSB0aGlzLiRlbGVtZW50LndpZHRoKCk7XG5cdFx0XHRcdHdoaWxlIChpdGVyYXRvci0tKSB7XG5cdFx0XHRcdFx0cmVjaXByb2NhbEl0ZW1zV2lkdGggKz0gdGhpcy5faXRlbXNbaXRlcmF0b3JdLndpZHRoKCkgKyB0aGlzLnNldHRpbmdzLm1hcmdpbjtcblx0XHRcdFx0XHRpZiAocmVjaXByb2NhbEl0ZW1zV2lkdGggPiBlbGVtZW50V2lkdGgpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWF4aW11bSA9IGl0ZXJhdG9yICsgMTtcblx0XHR9IGVsc2UgaWYgKHNldHRpbmdzLmNlbnRlcikge1xuXHRcdFx0bWF4aW11bSA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1heGltdW0gPSB0aGlzLl9pdGVtcy5sZW5ndGggLSBzZXR0aW5ncy5pdGVtcztcblx0XHR9XG5cblx0XHRpZiAocmVsYXRpdmUpIHtcblx0XHRcdG1heGltdW0gLT0gdGhpcy5fY2xvbmVzLmxlbmd0aCAvIDI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgubWF4KG1heGltdW0sIDApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBtaW5pbXVtIHBvc2l0aW9uIGZvciB0aGUgY3VycmVudCBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlbGF0aXZlPWZhbHNlXSAtIFdoZXRoZXIgdG8gcmV0dXJuIGFuIGFic29sdXRlIHBvc2l0aW9uIG9yIGEgcmVsYXRpdmUgcG9zaXRpb24uXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm1pbmltdW0gPSBmdW5jdGlvbihyZWxhdGl2ZSkge1xuXHRcdHJldHVybiByZWxhdGl2ZSA/IDAgOiB0aGlzLl9jbG9uZXMubGVuZ3RoIC8gMjtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyBhbiBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgcmVsYXRpdmUgcG9zaXRpb24uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbl0gLSBUaGUgcmVsYXRpdmUgcG9zaXRpb24gb2YgdGhlIGl0ZW0uXG5cdCAqIEByZXR1cm4ge2pRdWVyeXxBcnJheS48alF1ZXJ5Pn0gLSBUaGUgaXRlbSBhdCB0aGUgZ2l2ZW4gcG9zaXRpb24gb3IgYWxsIGl0ZW1zIGlmIG5vIHBvc2l0aW9uIHdhcyBnaXZlbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuaXRlbXMgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5faXRlbXMuc2xpY2UoKTtcblx0XHR9XG5cblx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uLCB0cnVlKTtcblx0XHRyZXR1cm4gdGhpcy5faXRlbXNbcG9zaXRpb25dO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIGFuIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCByZWxhdGl2ZSBwb3NpdGlvbi5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uXSAtIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbS5cblx0ICogQHJldHVybiB7alF1ZXJ5fEFycmF5LjxqUXVlcnk+fSAtIFRoZSBpdGVtIGF0IHRoZSBnaXZlbiBwb3NpdGlvbiBvciBhbGwgaXRlbXMgaWYgbm8gcG9zaXRpb24gd2FzIGdpdmVuLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5tZXJnZXJzID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX21lcmdlcnMuc2xpY2UoKTtcblx0XHR9XG5cblx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uLCB0cnVlKTtcblx0XHRyZXR1cm4gdGhpcy5fbWVyZ2Vyc1twb3NpdGlvbl07XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGFic29sdXRlIHBvc2l0aW9ucyBvZiBjbG9uZXMgZm9yIGFuIGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbl0gLSBUaGUgcmVsYXRpdmUgcG9zaXRpb24gb2YgdGhlIGl0ZW0uXG5cdCAqIEByZXR1cm5zIHtBcnJheS48TnVtYmVyPn0gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb25zIG9mIGNsb25lcyBmb3IgdGhlIGl0ZW0gb3IgYWxsIGlmIG5vIHBvc2l0aW9uIHdhcyBnaXZlbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuY2xvbmVzID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHR2YXIgb2RkID0gdGhpcy5fY2xvbmVzLmxlbmd0aCAvIDIsXG5cdFx0XHRldmVuID0gb2RkICsgdGhpcy5faXRlbXMubGVuZ3RoLFxuXHRcdFx0bWFwID0gZnVuY3Rpb24oaW5kZXgpIHsgcmV0dXJuIGluZGV4ICUgMiA9PT0gMCA/IGV2ZW4gKyBpbmRleCAvIDIgOiBvZGQgLSAoaW5kZXggKyAxKSAvIDIgfTtcblxuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gJC5tYXAodGhpcy5fY2xvbmVzLCBmdW5jdGlvbih2LCBpKSB7IHJldHVybiBtYXAoaSkgfSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICQubWFwKHRoaXMuX2Nsb25lcywgZnVuY3Rpb24odiwgaSkgeyByZXR1cm4gdiA9PT0gcG9zaXRpb24gPyBtYXAoaSkgOiBudWxsIH0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBjdXJyZW50IGFuaW1hdGlvbiBzcGVlZC5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NwZWVkXSAtIFRoZSBhbmltYXRpb24gc3BlZWQgaW4gbWlsbGlzZWNvbmRzIG9yIG5vdGhpbmcgdG8gbGVhdmUgaXQgdW5jaGFuZ2VkLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSBjdXJyZW50IGFuaW1hdGlvbiBzcGVlZCBpbiBtaWxsaXNlY29uZHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnNwZWVkID0gZnVuY3Rpb24oc3BlZWQpIHtcblx0XHRpZiAoc3BlZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5fc3BlZWQgPSBzcGVlZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5fc3BlZWQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGNvb3JkaW5hdGUgb2YgYW4gaXRlbS5cblx0ICogQHRvZG8gVGhlIG5hbWUgb2YgdGhpcyBtZXRob2QgaXMgbWlzc2xlYW5kaW5nLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbSB3aXRoaW4gYG1pbmltdW0oKWAgYW5kIGBtYXhpbXVtKClgLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfEFycmF5LjxOdW1iZXI+fSAtIFRoZSBjb29yZGluYXRlIG9mIHRoZSBpdGVtIGluIHBpeGVsIG9yIGFsbCBjb29yZGluYXRlcy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuY29vcmRpbmF0ZXMgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdHZhciBtdWx0aXBsaWVyID0gMSxcblx0XHRcdG5ld1Bvc2l0aW9uID0gcG9zaXRpb24gLSAxLFxuXHRcdFx0Y29vcmRpbmF0ZTtcblxuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gJC5tYXAodGhpcy5fY29vcmRpbmF0ZXMsICQucHJveHkoZnVuY3Rpb24oY29vcmRpbmF0ZSwgaW5kZXgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29vcmRpbmF0ZXMoaW5kZXgpO1xuXHRcdFx0fSwgdGhpcykpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLmNlbnRlcikge1xuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MucnRsKSB7XG5cdFx0XHRcdG11bHRpcGxpZXIgPSAtMTtcblx0XHRcdFx0bmV3UG9zaXRpb24gPSBwb3NpdGlvbiArIDE7XG5cdFx0XHR9XG5cblx0XHRcdGNvb3JkaW5hdGUgPSB0aGlzLl9jb29yZGluYXRlc1twb3NpdGlvbl07XG5cdFx0XHRjb29yZGluYXRlICs9ICh0aGlzLndpZHRoKCkgLSBjb29yZGluYXRlICsgKHRoaXMuX2Nvb3JkaW5hdGVzW25ld1Bvc2l0aW9uXSB8fCAwKSkgLyAyICogbXVsdGlwbGllcjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29vcmRpbmF0ZSA9IHRoaXMuX2Nvb3JkaW5hdGVzW25ld1Bvc2l0aW9uXSB8fCAwO1xuXHRcdH1cblxuXHRcdGNvb3JkaW5hdGUgPSBNYXRoLmNlaWwoY29vcmRpbmF0ZSk7XG5cblx0XHRyZXR1cm4gY29vcmRpbmF0ZTtcblx0fTtcblxuXHQvKipcblx0ICogQ2FsY3VsYXRlcyB0aGUgc3BlZWQgZm9yIGEgdHJhbnNsYXRpb24uXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGZyb20gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIHN0YXJ0IGl0ZW0uXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB0byAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgdGFyZ2V0IGl0ZW0uXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbZmFjdG9yPXVuZGVmaW5lZF0gLSBUaGUgdGltZSBmYWN0b3IgaW4gbWlsbGlzZWNvbmRzLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlIHRyYW5zbGF0aW9uLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5kdXJhdGlvbiA9IGZ1bmN0aW9uKGZyb20sIHRvLCBmYWN0b3IpIHtcblx0XHRpZiAoZmFjdG9yID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoTWF0aC5hYnModG8gLSBmcm9tKSwgMSksIDYpICogTWF0aC5hYnMoKGZhY3RvciB8fCB0aGlzLnNldHRpbmdzLnNtYXJ0U3BlZWQpKTtcblx0fTtcblxuXHQvKipcblx0ICogU2xpZGVzIHRvIHRoZSBzcGVjaWZpZWQgaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBUaGUgcG9zaXRpb24gb2YgdGhlIGl0ZW0uXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUudG8gPSBmdW5jdGlvbihwb3NpdGlvbiwgc3BlZWQpIHtcblx0XHR2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudCgpLFxuXHRcdFx0cmV2ZXJ0ID0gbnVsbCxcblx0XHRcdGRpc3RhbmNlID0gcG9zaXRpb24gLSB0aGlzLnJlbGF0aXZlKGN1cnJlbnQpLFxuXHRcdFx0ZGlyZWN0aW9uID0gKGRpc3RhbmNlID4gMCkgLSAoZGlzdGFuY2UgPCAwKSxcblx0XHRcdGl0ZW1zID0gdGhpcy5faXRlbXMubGVuZ3RoLFxuXHRcdFx0bWluaW11bSA9IHRoaXMubWluaW11bSgpLFxuXHRcdFx0bWF4aW11bSA9IHRoaXMubWF4aW11bSgpO1xuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MubG9vcCkge1xuXHRcdFx0aWYgKCF0aGlzLnNldHRpbmdzLnJld2luZCAmJiBNYXRoLmFicyhkaXN0YW5jZSkgPiBpdGVtcyAvIDIpIHtcblx0XHRcdFx0ZGlzdGFuY2UgKz0gZGlyZWN0aW9uICogLTEgKiBpdGVtcztcblx0XHRcdH1cblxuXHRcdFx0cG9zaXRpb24gPSBjdXJyZW50ICsgZGlzdGFuY2U7XG5cdFx0XHRyZXZlcnQgPSAoKHBvc2l0aW9uIC0gbWluaW11bSkgJSBpdGVtcyArIGl0ZW1zKSAlIGl0ZW1zICsgbWluaW11bTtcblxuXHRcdFx0aWYgKHJldmVydCAhPT0gcG9zaXRpb24gJiYgcmV2ZXJ0IC0gZGlzdGFuY2UgPD0gbWF4aW11bSAmJiByZXZlcnQgLSBkaXN0YW5jZSA+IDApIHtcblx0XHRcdFx0Y3VycmVudCA9IHJldmVydCAtIGRpc3RhbmNlO1xuXHRcdFx0XHRwb3NpdGlvbiA9IHJldmVydDtcblx0XHRcdFx0dGhpcy5yZXNldChjdXJyZW50KTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRoaXMuc2V0dGluZ3MucmV3aW5kKSB7XG5cdFx0XHRtYXhpbXVtICs9IDE7XG5cdFx0XHRwb3NpdGlvbiA9IChwb3NpdGlvbiAlIG1heGltdW0gKyBtYXhpbXVtKSAlIG1heGltdW07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBvc2l0aW9uID0gTWF0aC5tYXgobWluaW11bSwgTWF0aC5taW4obWF4aW11bSwgcG9zaXRpb24pKTtcblx0XHR9XG5cblx0XHR0aGlzLnNwZWVkKHRoaXMuZHVyYXRpb24oY3VycmVudCwgcG9zaXRpb24sIHNwZWVkKSk7XG5cdFx0dGhpcy5jdXJyZW50KHBvc2l0aW9uKTtcblxuXHRcdGlmICh0aGlzLmlzVmlzaWJsZSgpKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogU2xpZGVzIHRvIHRoZSBuZXh0IGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZF0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2l0aW9uLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oc3BlZWQpIHtcblx0XHRzcGVlZCA9IHNwZWVkIHx8IGZhbHNlO1xuXHRcdHRoaXMudG8odGhpcy5yZWxhdGl2ZSh0aGlzLmN1cnJlbnQoKSkgKyAxLCBzcGVlZCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNsaWRlcyB0byB0aGUgcHJldmlvdXMgaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NwZWVkXSAtIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlIHRyYW5zaXRpb24uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbihzcGVlZCkge1xuXHRcdHNwZWVkID0gc3BlZWQgfHwgZmFsc2U7XG5cdFx0dGhpcy50byh0aGlzLnJlbGF0aXZlKHRoaXMuY3VycmVudCgpKSAtIDEsIHNwZWVkKTtcblx0fTtcblxuXHQvKipcblx0ICogSGFuZGxlcyB0aGUgZW5kIG9mIGFuIGFuaW1hdGlvbi5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9uVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cblx0XHQvLyBpZiBjc3MyIGFuaW1hdGlvbiB0aGVuIGV2ZW50IG9iamVjdCBpcyB1bmRlZmluZWRcblx0XHRpZiAoZXZlbnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdC8vIENhdGNoIG9ubHkgb3dsLXN0YWdlIHRyYW5zaXRpb25FbmQgZXZlbnRcblx0XHRcdGlmICgoZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQgfHwgZXZlbnQub3JpZ2luYWxUYXJnZXQpICE9PSB0aGlzLiRzdGFnZS5nZXQoMCkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMubGVhdmUoJ2FuaW1hdGluZycpO1xuXHRcdHRoaXMudHJpZ2dlcigndHJhbnNsYXRlZCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHZpZXdwb3J0IHdpZHRoLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm4ge051bWJlcn0gLSBUaGUgd2lkdGggaW4gcGl4ZWwuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnZpZXdwb3J0ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHdpZHRoO1xuXHRcdGlmICh0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZUJhc2VFbGVtZW50ICE9PSB3aW5kb3cpIHtcblx0XHRcdHdpZHRoID0gJCh0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZUJhc2VFbGVtZW50KS53aWR0aCgpO1xuXHRcdH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGgpIHtcblx0XHRcdHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0fSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSB7XG5cdFx0XHR3aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKCdDYW4gbm90IGRldGVjdCB2aWV3cG9ydCB3aWR0aC4nKTtcblx0XHR9XG5cdFx0cmV0dXJuIHdpZHRoO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZXBsYWNlcyB0aGUgY3VycmVudCBjb250ZW50LlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8alF1ZXJ5fFN0cmluZ30gY29udGVudCAtIFRoZSBuZXcgY29udGVudC5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcblx0XHR0aGlzLiRzdGFnZS5lbXB0eSgpO1xuXHRcdHRoaXMuX2l0ZW1zID0gW107XG5cblx0XHRpZiAoY29udGVudCkge1xuXHRcdFx0Y29udGVudCA9IChjb250ZW50IGluc3RhbmNlb2YgalF1ZXJ5KSA/IGNvbnRlbnQgOiAkKGNvbnRlbnQpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLm5lc3RlZEl0ZW1TZWxlY3Rvcikge1xuXHRcdFx0Y29udGVudCA9IGNvbnRlbnQuZmluZCgnLicgKyB0aGlzLnNldHRpbmdzLm5lc3RlZEl0ZW1TZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0Y29udGVudC5maWx0ZXIoZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5ub2RlVHlwZSA9PT0gMTtcblx0XHR9KS5lYWNoKCQucHJveHkoZnVuY3Rpb24oaW5kZXgsIGl0ZW0pIHtcblx0XHRcdGl0ZW0gPSB0aGlzLnByZXBhcmUoaXRlbSk7XG5cdFx0XHR0aGlzLiRzdGFnZS5hcHBlbmQoaXRlbSk7XG5cdFx0XHR0aGlzLl9pdGVtcy5wdXNoKGl0ZW0pO1xuXHRcdFx0dGhpcy5fbWVyZ2Vycy5wdXNoKGl0ZW0uZmluZCgnW2RhdGEtbWVyZ2VdJykuYWRkQmFjaygnW2RhdGEtbWVyZ2VdJykuYXR0cignZGF0YS1tZXJnZScpICogMSB8fCAxKTtcblx0XHR9LCB0aGlzKSk7XG5cblx0XHR0aGlzLnJlc2V0KHRoaXMuaXNOdW1lcmljKHRoaXMuc2V0dGluZ3Muc3RhcnRQb3NpdGlvbikgPyB0aGlzLnNldHRpbmdzLnN0YXJ0UG9zaXRpb24gOiAwKTtcblxuXHRcdHRoaXMuaW52YWxpZGF0ZSgnaXRlbXMnKTtcblx0fTtcblxuXHQvKipcblx0ICogQWRkcyBhbiBpdGVtLlxuXHQgKiBAdG9kbyBVc2UgYGl0ZW1gIGluc3RlYWQgb2YgYGNvbnRlbnRgIGZvciB0aGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8alF1ZXJ5fFN0cmluZ30gY29udGVudCAtIFRoZSBpdGVtIGNvbnRlbnQgdG8gYWRkLlxuXHQgKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uXSAtIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiBhdCB3aGljaCB0byBpbnNlcnQgdGhlIGl0ZW0gb3RoZXJ3aXNlIHRoZSBpdGVtIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGVuZC5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oY29udGVudCwgcG9zaXRpb24pIHtcblx0XHR2YXIgY3VycmVudCA9IHRoaXMucmVsYXRpdmUodGhpcy5fY3VycmVudCk7XG5cblx0XHRwb3NpdGlvbiA9IHBvc2l0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLl9pdGVtcy5sZW5ndGggOiB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbiwgdHJ1ZSk7XG5cdFx0Y29udGVudCA9IGNvbnRlbnQgaW5zdGFuY2VvZiBqUXVlcnkgPyBjb250ZW50IDogJChjb250ZW50KTtcblxuXHRcdHRoaXMudHJpZ2dlcignYWRkJywgeyBjb250ZW50OiBjb250ZW50LCBwb3NpdGlvbjogcG9zaXRpb24gfSk7XG5cblx0XHRjb250ZW50ID0gdGhpcy5wcmVwYXJlKGNvbnRlbnQpO1xuXG5cdFx0aWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCA9PT0gMCB8fCBwb3NpdGlvbiA9PT0gdGhpcy5faXRlbXMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLl9pdGVtcy5sZW5ndGggPT09IDAgJiYgdGhpcy4kc3RhZ2UuYXBwZW5kKGNvbnRlbnQpO1xuXHRcdFx0dGhpcy5faXRlbXMubGVuZ3RoICE9PSAwICYmIHRoaXMuX2l0ZW1zW3Bvc2l0aW9uIC0gMV0uYWZ0ZXIoY29udGVudCk7XG5cdFx0XHR0aGlzLl9pdGVtcy5wdXNoKGNvbnRlbnQpO1xuXHRcdFx0dGhpcy5fbWVyZ2Vycy5wdXNoKGNvbnRlbnQuZmluZCgnW2RhdGEtbWVyZ2VdJykuYWRkQmFjaygnW2RhdGEtbWVyZ2VdJykuYXR0cignZGF0YS1tZXJnZScpICogMSB8fCAxKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5faXRlbXNbcG9zaXRpb25dLmJlZm9yZShjb250ZW50KTtcblx0XHRcdHRoaXMuX2l0ZW1zLnNwbGljZShwb3NpdGlvbiwgMCwgY29udGVudCk7XG5cdFx0XHR0aGlzLl9tZXJnZXJzLnNwbGljZShwb3NpdGlvbiwgMCwgY29udGVudC5maW5kKCdbZGF0YS1tZXJnZV0nKS5hZGRCYWNrKCdbZGF0YS1tZXJnZV0nKS5hdHRyKCdkYXRhLW1lcmdlJykgKiAxIHx8IDEpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2l0ZW1zW2N1cnJlbnRdICYmIHRoaXMucmVzZXQodGhpcy5faXRlbXNbY3VycmVudF0uaW5kZXgoKSk7XG5cblx0XHR0aGlzLmludmFsaWRhdGUoJ2l0ZW1zJyk7XG5cblx0XHR0aGlzLnRyaWdnZXIoJ2FkZGVkJywgeyBjb250ZW50OiBjb250ZW50LCBwb3NpdGlvbjogcG9zaXRpb24gfSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgYW4gaXRlbSBieSBpdHMgcG9zaXRpb24uXG5cdCAqIEB0b2RvIFVzZSBgaXRlbWAgaW5zdGVhZCBvZiBgY29udGVudGAgZm9yIHRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHRvIHJlbW92ZS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uLCB0cnVlKTtcblxuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKCdyZW1vdmUnLCB7IGNvbnRlbnQ6IHRoaXMuX2l0ZW1zW3Bvc2l0aW9uXSwgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuXG5cdFx0dGhpcy5faXRlbXNbcG9zaXRpb25dLnJlbW92ZSgpO1xuXHRcdHRoaXMuX2l0ZW1zLnNwbGljZShwb3NpdGlvbiwgMSk7XG5cdFx0dGhpcy5fbWVyZ2Vycy5zcGxpY2UocG9zaXRpb24sIDEpO1xuXG5cdFx0dGhpcy5pbnZhbGlkYXRlKCdpdGVtcycpO1xuXG5cdFx0dGhpcy50cmlnZ2VyKCdyZW1vdmVkJywgeyBjb250ZW50OiBudWxsLCBwb3NpdGlvbjogcG9zaXRpb24gfSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFByZWxvYWRzIGltYWdlcyB3aXRoIGF1dG8gd2lkdGguXG5cdCAqIEB0b2RvIFJlcGxhY2UgYnkgYSBtb3JlIGdlbmVyaWMgYXBwcm9hY2hcblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5wcmVsb2FkQXV0b1dpZHRoSW1hZ2VzID0gZnVuY3Rpb24oaW1hZ2VzKSB7XG5cdFx0aW1hZ2VzLmVhY2goJC5wcm94eShmdW5jdGlvbihpLCBlbGVtZW50KSB7XG5cdFx0XHR0aGlzLmVudGVyKCdwcmUtbG9hZGluZycpO1xuXHRcdFx0ZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cdFx0XHQkKG5ldyBJbWFnZSgpKS5vbmUoJ2xvYWQnLCAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0ZWxlbWVudC5hdHRyKCdzcmMnLCBlLnRhcmdldC5zcmMpO1xuXHRcdFx0XHRlbGVtZW50LmNzcygnb3BhY2l0eScsIDEpO1xuXHRcdFx0XHR0aGlzLmxlYXZlKCdwcmUtbG9hZGluZycpO1xuXHRcdFx0XHQhdGhpcy5pcygncHJlLWxvYWRpbmcnKSAmJiAhdGhpcy5pcygnaW5pdGlhbGl6aW5nJykgJiYgdGhpcy5yZWZyZXNoKCk7XG5cdFx0XHR9LCB0aGlzKSkuYXR0cignc3JjJywgZWxlbWVudC5hdHRyKCdzcmMnKSB8fCBlbGVtZW50LmF0dHIoJ2RhdGEtc3JjJykgfHwgZWxlbWVudC5hdHRyKCdkYXRhLXNyYy1yZXRpbmEnKSk7XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgY2Fyb3VzZWwuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdE93bC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dGhpcy4kZWxlbWVudC5vZmYoJy5vd2wuY29yZScpO1xuXHRcdHRoaXMuJHN0YWdlLm9mZignLm93bC5jb3JlJyk7XG5cdFx0JChkb2N1bWVudCkub2ZmKCcub3dsLmNvcmUnKTtcblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLnJlc3BvbnNpdmUgIT09IGZhbHNlKSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZXIpO1xuXHRcdFx0dGhpcy5vZmYod2luZG93LCAncmVzaXplJywgdGhpcy5faGFuZGxlcnMub25UaHJvdHRsZWRSZXNpemUpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgaW4gdGhpcy5fcGx1Z2lucykge1xuXHRcdFx0dGhpcy5fcGx1Z2luc1tpXS5kZXN0cm95KCk7XG5cdFx0fVxuXG5cdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oJy5jbG9uZWQnKS5yZW1vdmUoKTtcblxuXHRcdHRoaXMuJHN0YWdlLnVud3JhcCgpO1xuXHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCkuY29udGVudHMoKS51bndyYXAoKTtcblx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbigpLnVud3JhcCgpO1xuXHRcdHRoaXMuJHN0YWdlLnJlbW92ZSgpO1xuXHRcdHRoaXMuJGVsZW1lbnRcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMucmVmcmVzaENsYXNzKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5sb2FkaW5nQ2xhc3MpXG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRlZENsYXNzKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5ydGxDbGFzcylcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZHJhZ0NsYXNzKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5ncmFiQ2xhc3MpXG5cdFx0XHQuYXR0cignY2xhc3MnLCB0aGlzLiRlbGVtZW50LmF0dHIoJ2NsYXNzJykucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMub3B0aW9ucy5yZXNwb25zaXZlQ2xhc3MgKyAnLVxcXFxTK1xcXFxzJywgJ2cnKSwgJycpKVxuXHRcdFx0LnJlbW92ZURhdGEoJ293bC5jYXJvdXNlbCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBPcGVyYXRvcnMgdG8gY2FsY3VsYXRlIHJpZ2h0LXRvLWxlZnQgYW5kIGxlZnQtdG8tcmlnaHQuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFthXSAtIFRoZSBsZWZ0IHNpZGUgb3BlcmFuZC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IFtvXSAtIFRoZSBvcGVyYXRvci5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtiXSAtIFRoZSByaWdodCBzaWRlIG9wZXJhbmQuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9wID0gZnVuY3Rpb24oYSwgbywgYikge1xuXHRcdHZhciBydGwgPSB0aGlzLnNldHRpbmdzLnJ0bDtcblx0XHRzd2l0Y2ggKG8pIHtcblx0XHRcdGNhc2UgJzwnOlxuXHRcdFx0XHRyZXR1cm4gcnRsID8gYSA+IGIgOiBhIDwgYjtcblx0XHRcdGNhc2UgJz4nOlxuXHRcdFx0XHRyZXR1cm4gcnRsID8gYSA8IGIgOiBhID4gYjtcblx0XHRcdGNhc2UgJz49Jzpcblx0XHRcdFx0cmV0dXJuIHJ0bCA/IGEgPD0gYiA6IGEgPj0gYjtcblx0XHRcdGNhc2UgJzw9Jzpcblx0XHRcdFx0cmV0dXJuIHJ0bCA/IGEgPj0gYiA6IGEgPD0gYjtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogQXR0YWNoZXMgdG8gYW4gaW50ZXJuYWwgZXZlbnQuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCBzb3VyY2UuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBldmVudCBuYW1lLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIFRoZSBldmVudCBoYW5kbGVyIHRvIGF0dGFjaC5cblx0ICogQHBhcmFtIHtCb29sZWFufSBjYXB0dXJlIC0gV2V0aGVyIHRoZSBldmVudCBzaG91bGQgYmUgaGFuZGxlZCBhdCB0aGUgY2FwdHVyaW5nIHBoYXNlIG9yIG5vdC5cblx0ICovXG5cdE93bC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihlbGVtZW50LCBldmVudCwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcblx0XHRpZiAoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBjYXB0dXJlKTtcblx0XHR9IGVsc2UgaWYgKGVsZW1lbnQuYXR0YWNoRXZlbnQpIHtcblx0XHRcdGVsZW1lbnQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXRhY2hlcyBmcm9tIGFuIGludGVybmFsIGV2ZW50LlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZXZlbnQgc291cmNlLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBUaGUgYXR0YWNoZWQgZXZlbnQgaGFuZGxlciB0byBkZXRhY2guXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gY2FwdHVyZSAtIFdldGhlciB0aGUgYXR0YWNoZWQgZXZlbnQgaGFuZGxlciB3YXMgcmVnaXN0ZXJlZCBhcyBhIGNhcHR1cmluZyBsaXN0ZW5lciBvciBub3QuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGVsZW1lbnQsIGV2ZW50LCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuXHRcdGlmIChlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuXHRcdH0gZWxzZSBpZiAoZWxlbWVudC5kZXRhY2hFdmVudCkge1xuXHRcdFx0ZWxlbWVudC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFRyaWdnZXJzIGEgcHVibGljIGV2ZW50LlxuXHQgKiBAdG9kbyBSZW1vdmUgYHN0YXR1c2AsIGByZWxhdGVkVGFyZ2V0YCBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gVGhlIGV2ZW50IG5hbWUuXG5cdCAqIEBwYXJhbSB7Kn0gW2RhdGE9bnVsbF0gLSBUaGUgZXZlbnQgZGF0YS5cblx0ICogQHBhcmFtIHtTdHJpbmd9IFtuYW1lc3BhY2U9Y2Fyb3VzZWxdIC0gVGhlIGV2ZW50IG5hbWVzcGFjZS5cblx0ICogQHBhcmFtIHtTdHJpbmd9IFtzdGF0ZV0gLSBUaGUgc3RhdGUgd2hpY2ggaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBldmVudC5cblx0ICogQHBhcmFtIHtCb29sZWFufSBbZW50ZXI9ZmFsc2VdIC0gSW5kaWNhdGVzIGlmIHRoZSBjYWxsIGVudGVycyB0aGUgc3BlY2lmaWVkIHN0YXRlIG9yIG5vdC5cblx0ICogQHJldHVybnMge0V2ZW50fSAtIFRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihuYW1lLCBkYXRhLCBuYW1lc3BhY2UsIHN0YXRlLCBlbnRlcikge1xuXHRcdHZhciBzdGF0dXMgPSB7XG5cdFx0XHRpdGVtOiB7IGNvdW50OiB0aGlzLl9pdGVtcy5sZW5ndGgsIGluZGV4OiB0aGlzLmN1cnJlbnQoKSB9XG5cdFx0fSwgaGFuZGxlciA9ICQuY2FtZWxDYXNlKFxuXHRcdFx0JC5ncmVwKFsgJ29uJywgbmFtZSwgbmFtZXNwYWNlIF0sIGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYgfSlcblx0XHRcdFx0LmpvaW4oJy0nKS50b0xvd2VyQ2FzZSgpXG5cdFx0KSwgZXZlbnQgPSAkLkV2ZW50KFxuXHRcdFx0WyBuYW1lLCAnb3dsJywgbmFtZXNwYWNlIHx8ICdjYXJvdXNlbCcgXS5qb2luKCcuJykudG9Mb3dlckNhc2UoKSxcblx0XHRcdCQuZXh0ZW5kKHsgcmVsYXRlZFRhcmdldDogdGhpcyB9LCBzdGF0dXMsIGRhdGEpXG5cdFx0KTtcblxuXHRcdGlmICghdGhpcy5fc3VwcmVzc1tuYW1lXSkge1xuXHRcdFx0JC5lYWNoKHRoaXMuX3BsdWdpbnMsIGZ1bmN0aW9uKG5hbWUsIHBsdWdpbikge1xuXHRcdFx0XHRpZiAocGx1Z2luLm9uVHJpZ2dlcikge1xuXHRcdFx0XHRcdHBsdWdpbi5vblRyaWdnZXIoZXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5yZWdpc3Rlcih7IHR5cGU6IE93bC5UeXBlLkV2ZW50LCBuYW1lOiBuYW1lIH0pO1xuXHRcdFx0dGhpcy4kZWxlbWVudC50cmlnZ2VyKGV2ZW50KTtcblxuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MgJiYgdHlwZW9mIHRoaXMuc2V0dGluZ3NbaGFuZGxlcl0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dGhpcy5zZXR0aW5nc1toYW5kbGVyXS5jYWxsKHRoaXMsIGV2ZW50KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIEVudGVycyBhIHN0YXRlLlxuXHQgKiBAcGFyYW0gbmFtZSAtIFRoZSBzdGF0ZSBuYW1lLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5lbnRlciA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0XHQkLmVhY2goWyBuYW1lIF0uY29uY2F0KHRoaXMuX3N0YXRlcy50YWdzW25hbWVdIHx8IFtdKSwgJC5wcm94eShmdW5jdGlvbihpLCBuYW1lKSB7XG5cdFx0XHRpZiAodGhpcy5fc3RhdGVzLmN1cnJlbnRbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLl9zdGF0ZXMuY3VycmVudFtuYW1lXSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3N0YXRlcy5jdXJyZW50W25hbWVdKys7XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBMZWF2ZXMgYSBzdGF0ZS5cblx0ICogQHBhcmFtIG5hbWUgLSBUaGUgc3RhdGUgbmFtZS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUubGVhdmUgPSBmdW5jdGlvbihuYW1lKSB7XG5cdFx0JC5lYWNoKFsgbmFtZSBdLmNvbmNhdCh0aGlzLl9zdGF0ZXMudGFnc1tuYW1lXSB8fCBbXSksICQucHJveHkoZnVuY3Rpb24oaSwgbmFtZSkge1xuXHRcdFx0dGhpcy5fc3RhdGVzLmN1cnJlbnRbbmFtZV0tLTtcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhbiBldmVudCBvciBzdGF0ZS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IC0gVGhlIGV2ZW50IG9yIHN0YXRlIHRvIHJlZ2lzdGVyLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uKG9iamVjdCkge1xuXHRcdGlmIChvYmplY3QudHlwZSA9PT0gT3dsLlR5cGUuRXZlbnQpIHtcblx0XHRcdGlmICghJC5ldmVudC5zcGVjaWFsW29iamVjdC5uYW1lXSkge1xuXHRcdFx0XHQkLmV2ZW50LnNwZWNpYWxbb2JqZWN0Lm5hbWVdID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGlmICghJC5ldmVudC5zcGVjaWFsW29iamVjdC5uYW1lXS5vd2wpIHtcblx0XHRcdFx0dmFyIF9kZWZhdWx0ID0gJC5ldmVudC5zcGVjaWFsW29iamVjdC5uYW1lXS5fZGVmYXVsdDtcblx0XHRcdFx0JC5ldmVudC5zcGVjaWFsW29iamVjdC5uYW1lXS5fZGVmYXVsdCA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRpZiAoX2RlZmF1bHQgJiYgX2RlZmF1bHQuYXBwbHkgJiYgKCFlLm5hbWVzcGFjZSB8fCBlLm5hbWVzcGFjZS5pbmRleE9mKCdvd2wnKSA9PT0gLTEpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX2RlZmF1bHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGUubmFtZXNwYWNlICYmIGUubmFtZXNwYWNlLmluZGV4T2YoJ293bCcpID4gLTE7XG5cdFx0XHRcdH07XG5cdFx0XHRcdCQuZXZlbnQuc3BlY2lhbFtvYmplY3QubmFtZV0ub3dsID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKG9iamVjdC50eXBlID09PSBPd2wuVHlwZS5TdGF0ZSkge1xuXHRcdFx0aWYgKCF0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0pIHtcblx0XHRcdFx0dGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdID0gb2JqZWN0LnRhZ3M7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0gPSB0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0uY29uY2F0KG9iamVjdC50YWdzKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdID0gJC5ncmVwKHRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXSwgJC5wcm94eShmdW5jdGlvbih0YWcsIGkpIHtcblx0XHRcdFx0cmV0dXJuICQuaW5BcnJheSh0YWcsIHRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXSkgPT09IGk7XG5cdFx0XHR9LCB0aGlzKSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBTdXBwcmVzc2VzIGV2ZW50cy5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0FycmF5LjxTdHJpbmc+fSBldmVudHMgLSBUaGUgZXZlbnRzIHRvIHN1cHByZXNzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5zdXBwcmVzcyA9IGZ1bmN0aW9uKGV2ZW50cykge1xuXHRcdCQuZWFjaChldmVudHMsICQucHJveHkoZnVuY3Rpb24oaW5kZXgsIGV2ZW50KSB7XG5cdFx0XHR0aGlzLl9zdXByZXNzW2V2ZW50XSA9IHRydWU7XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZWxlYXNlcyBzdXBwcmVzc2VkIGV2ZW50cy5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0FycmF5LjxTdHJpbmc+fSBldmVudHMgLSBUaGUgZXZlbnRzIHRvIHJlbGVhc2UuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlbGVhc2UgPSBmdW5jdGlvbihldmVudHMpIHtcblx0XHQkLmVhY2goZXZlbnRzLCAkLnByb3h5KGZ1bmN0aW9uKGluZGV4LCBldmVudCkge1xuXHRcdFx0ZGVsZXRlIHRoaXMuX3N1cHJlc3NbZXZlbnRdO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB1bmlmaWVkIHBvaW50ZXIgY29vcmRpbmF0ZXMgZnJvbSBldmVudC5cblx0ICogQHRvZG8gIzI2MVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7RXZlbnR9IC0gVGhlIGBtb3VzZWRvd25gIG9yIGB0b3VjaHN0YXJ0YCBldmVudC5cblx0ICogQHJldHVybnMge09iamVjdH0gLSBDb250YWlucyBgeGAgYW5kIGB5YCBjb29yZGluYXRlcyBvZiBjdXJyZW50IHBvaW50ZXIgcG9zaXRpb24uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnBvaW50ZXIgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciByZXN1bHQgPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcblxuXHRcdGV2ZW50ID0gZXZlbnQub3JpZ2luYWxFdmVudCB8fCBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG5cblx0XHRldmVudCA9IGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggP1xuXHRcdFx0ZXZlbnQudG91Y2hlc1swXSA6IGV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA/XG5cdFx0XHRcdGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogZXZlbnQ7XG5cblx0XHRpZiAoZXZlbnQucGFnZVgpIHtcblx0XHRcdHJlc3VsdC54ID0gZXZlbnQucGFnZVg7XG5cdFx0XHRyZXN1bHQueSA9IGV2ZW50LnBhZ2VZO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQueCA9IGV2ZW50LmNsaWVudFg7XG5cdFx0XHRyZXN1bHQueSA9IGV2ZW50LmNsaWVudFk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHQvKipcblx0ICogRGV0ZXJtaW5lcyBpZiB0aGUgaW5wdXQgaXMgYSBOdW1iZXIgb3Igc29tZXRoaW5nIHRoYXQgY2FuIGJlIGNvZXJjZWQgdG8gYSBOdW1iZXJcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8T2JqZWN0fEFycmF5fEJvb2xlYW58UmVnRXhwfEZ1bmN0aW9ufFN5bWJvbH0gLSBUaGUgaW5wdXQgdG8gYmUgdGVzdGVkXG5cdCAqIEByZXR1cm5zIHtCb29sZWFufSAtIEFuIGluZGljYXRpb24gaWYgdGhlIGlucHV0IGlzIGEgTnVtYmVyIG9yIGNhbiBiZSBjb2VyY2VkIHRvIGEgTnVtYmVyXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmlzTnVtZXJpYyA9IGZ1bmN0aW9uKG51bWJlcikge1xuXHRcdHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChudW1iZXIpKTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgZGlmZmVyZW5jZSBvZiB0d28gdmVjdG9ycy5cblx0ICogQHRvZG8gIzI2MVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSAtIFRoZSBmaXJzdCB2ZWN0b3IuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSAtIFRoZSBzZWNvbmQgdmVjdG9yLlxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSAtIFRoZSBkaWZmZXJlbmNlLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5kaWZmZXJlbmNlID0gZnVuY3Rpb24oZmlyc3QsIHNlY29uZCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR4OiBmaXJzdC54IC0gc2Vjb25kLngsXG5cdFx0XHR5OiBmaXJzdC55IC0gc2Vjb25kLnlcblx0XHR9O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBUaGUgalF1ZXJ5IFBsdWdpbiBmb3IgdGhlIE93bCBDYXJvdXNlbFxuXHQgKiBAdG9kbyBOYXZpZ2F0aW9uIHBsdWdpbiBgbmV4dGAgYW5kIGBwcmV2YFxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHQkLmZuLm93bENhcm91c2VsID0gZnVuY3Rpb24ob3B0aW9uKSB7XG5cdFx0dmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXG5cdFx0XHRcdGRhdGEgPSAkdGhpcy5kYXRhKCdvd2wuY2Fyb3VzZWwnKTtcblxuXHRcdFx0aWYgKCFkYXRhKSB7XG5cdFx0XHRcdGRhdGEgPSBuZXcgT3dsKHRoaXMsIHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uKTtcblx0XHRcdFx0JHRoaXMuZGF0YSgnb3dsLmNhcm91c2VsJywgZGF0YSk7XG5cblx0XHRcdFx0JC5lYWNoKFtcblx0XHRcdFx0XHQnbmV4dCcsICdwcmV2JywgJ3RvJywgJ2Rlc3Ryb3knLCAncmVmcmVzaCcsICdyZXBsYWNlJywgJ2FkZCcsICdyZW1vdmUnXG5cdFx0XHRcdF0sIGZ1bmN0aW9uKGksIGV2ZW50KSB7XG5cdFx0XHRcdFx0ZGF0YS5yZWdpc3Rlcih7IHR5cGU6IE93bC5UeXBlLkV2ZW50LCBuYW1lOiBldmVudCB9KTtcblx0XHRcdFx0XHRkYXRhLiRlbGVtZW50Lm9uKGV2ZW50ICsgJy5vd2wuY2Fyb3VzZWwuY29yZScsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIGUucmVsYXRlZFRhcmdldCAhPT0gdGhpcykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN1cHByZXNzKFsgZXZlbnQgXSk7XG5cdFx0XHRcdFx0XHRcdGRhdGFbZXZlbnRdLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG5cdFx0XHRcdFx0XHRcdHRoaXMucmVsZWFzZShbIGV2ZW50IF0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIGRhdGEpKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnICYmIG9wdGlvbi5jaGFyQXQoMCkgIT09ICdfJykge1xuXHRcdFx0XHRkYXRhW29wdGlvbl0uYXBwbHkoZGF0YSwgYXJncyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIGpRdWVyeSBQbHVnaW5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3RvciA9IE93bDtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuIl19
