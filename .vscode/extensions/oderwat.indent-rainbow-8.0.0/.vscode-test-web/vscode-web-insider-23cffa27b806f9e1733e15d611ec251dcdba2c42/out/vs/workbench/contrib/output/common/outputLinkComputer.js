/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/(function(){var T=["require","exports","vs/base/common/platform","vs/base/common/extpath","vs/base/common/strings","vs/base/common/network","vs/base/common/uri","vs/base/common/path","vs/base/common/resources","vs/base/common/types","vs/workbench/contrib/output/common/outputLinkComputer","vs/editor/common/core/range"],S=function(O){for(var e=[],u=0,P=O.length;u<P;u++)e[u]=T[O[u]];return e};define(T[3],S([0,1,7,2,4,9]),function(O,e,u,P,c,R){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.parseLineAndColumnAware=e.indexOfPath=e.getDriveLetter=e.hasDriveLetter=e.isRootOrDriveLetter=e.sanitizeFilePath=e.isWindowsDriveLetter=e.isEqualOrParent=e.isEqual=e.isValidBasename=e.isUNC=e.getRoot=e.toPosixPath=e.toSlashes=e.isPathSeparator=void 0;function b(i){return i===47||i===92}e.isPathSeparator=b;function s(i){return i.replace(/[\\/]/g,u.posix.sep)}e.toSlashes=s;function l(i){return i.indexOf("/")===-1&&(i=s(i)),/^[a-zA-Z]:(\/|$)/.test(i)&&(i="/"+i),i}e.toPosixPath=l;function g(i,o=u.posix.sep){if(!i)return"";const d=i.length,C=i.charCodeAt(0);if(b(C)){if(b(i.charCodeAt(1))&&!b(i.charCodeAt(2))){let U=3;const k=U;for(;U<d&&!b(i.charCodeAt(U));U++);if(k!==U&&!b(i.charCodeAt(U+1))){for(U+=1;U<d;U++)if(b(i.charCodeAt(U)))return i.slice(0,U+1).replace(/[\\/]/g,o)}}return o}else if(h(C)&&i.charCodeAt(1)===58)return b(i.charCodeAt(2))?i.slice(0,2)+o:i.slice(0,2);let w=i.indexOf("://");if(w!==-1){for(w+=3;w<d;w++)if(b(i.charCodeAt(w)))return i.slice(0,w+1)}return""}e.getRoot=g;function m(i){if(!P.isWindows||!i||i.length<5)return!1;let o=i.charCodeAt(0);if(o!==92||(o=i.charCodeAt(1),o!==92))return!1;let d=2;const C=d;for(;d<i.length&&(o=i.charCodeAt(d),o!==92);d++);return!(C===d||(o=i.charCodeAt(d+1),isNaN(o)||o===92))}e.isUNC=m;const L=/[\\/:\*\?"<>\|]/g,v=/[\\/]/g,a=/^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])(\.(.*?))?$/i;function t(i,o=P.isWindows){const d=o?L:v;return!(!i||i.length===0||/^\s+$/.test(i)||(d.lastIndex=0,d.test(i))||o&&a.test(i)||i==="."||i===".."||o&&i[i.length-1]==="."||o&&i.length!==i.trim().length||i.length>255)}e.isValidBasename=t;function n(i,o,d){const C=i===o;return!d||C?C:!i||!o?!1:(0,c.equalsIgnoreCase)(i,o)}e.isEqual=n;function r(i,o,d,C=u.sep){if(i===o)return!0;if(!i||!o||o.length>i.length)return!1;if(d){if(!(0,c.startsWithIgnoreCase)(i,o))return!1;if(o.length===i.length)return!0;let U=o.length;return o.charAt(o.length-1)===C&&U--,i.charAt(U)===C}return o.charAt(o.length-1)!==C&&(o+=C),i.indexOf(o)===0}e.isEqualOrParent=r;function h(i){return i>=65&&i<=90||i>=97&&i<=122}e.isWindowsDriveLetter=h;function f(i,o){return P.isWindows&&i.endsWith(":")&&(i+=u.sep),(0,u.isAbsolute)(i)||(i=(0,u.join)(o,i)),i=(0,u.normalize)(i),P.isWindows?(i=(0,c.rtrim)(i,u.sep),i.endsWith(":")&&(i+=u.sep)):(i=(0,c.rtrim)(i,u.sep),i||(i=u.sep)),i}e.sanitizeFilePath=f;function A(i){const o=(0,u.normalize)(i);return P.isWindows?i.length>3?!1:E(o)&&(i.length===2||o.charCodeAt(2)===92):o===u.posix.sep}e.isRootOrDriveLetter=A;function E(i){return P.isWindows?h(i.charCodeAt(0))&&i.charCodeAt(1)===58:!1}e.hasDriveLetter=E;function y(i){return E(i)?i[0]:void 0}e.getDriveLetter=y;function I(i,o,d){return o.length>i.length?-1:i===o?0:(d&&(i=i.toLowerCase(),o=o.toLowerCase()),i.indexOf(o))}e.indexOfPath=I;function q(i){const o=i.split(":");let d,C,w;if(o.forEach(U=>{const k=Number(U);(0,R.isNumber)(k)?C===void 0?C=k:w===void 0&&(w=k):d=d?[d,U].join(":"):U}),!d)throw new Error("Format for `--goto` should be: `FILE:LINE(:COLUMN)`");return{path:d,line:C!==void 0?C:void 0,column:w!==void 0?w:C!==void 0?1:void 0}}e.parseLineAndColumnAware=q}),define(T[5],S([0,1,2,6]),function(O,e,u,P){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FileAccess=e.RemoteAuthorities=e.Schemas=void 0;var c;(function(s){s.inMemory="inmemory",s.vscode="vscode",s.internal="private",s.walkThrough="walkThrough",s.walkThroughSnippet="walkThroughSnippet",s.http="http",s.https="https",s.file="file",s.mailto="mailto",s.untitled="untitled",s.data="data",s.command="command",s.vscodeRemote="vscode-remote",s.vscodeRemoteResource="vscode-remote-resource",s.userData="vscode-userdata",s.vscodeCustomEditor="vscode-custom-editor",s.vscodeNotebook="vscode-notebook",s.vscodeNotebookCell="vscode-notebook-cell",s.vscodeNotebookCellMetadata="vscode-notebook-cell-metadata",s.vscodeNotebookCellOutput="vscode-notebook-cell-output",s.vscodeInteractive="vscode-interactive",s.vscodeInteractiveInput="vscode-interactive-input",s.vscodeSettings="vscode-settings",s.vscodeWorkspaceTrust="vscode-workspace-trust",s.vscodeTerminal="vscode-terminal",s.webviewPanel="webview-panel",s.vscodeWebview="vscode-webview",s.extension="extension",s.vscodeFileResource="vscode-file",s.tmp="tmp"})(c=e.Schemas||(e.Schemas={}));class R{constructor(){this._hosts=Object.create(null),this._ports=Object.create(null),this._connectionTokens=Object.create(null),this._preferredWebSchema="http",this._delegate=null}setPreferredWebSchema(l){this._preferredWebSchema=l}setDelegate(l){this._delegate=l}set(l,g,m){this._hosts[l]=g,this._ports[l]=m}setConnectionToken(l,g){this._connectionTokens[l]=g}rewrite(l){if(this._delegate)return this._delegate(l);const g=l.authority;let m=this._hosts[g];m&&m.indexOf(":")!==-1&&(m=`[${m}]`);const L=this._ports[g],v=this._connectionTokens[g];let a=`path=${encodeURIComponent(l.path)}`;return typeof v=="string"&&(a+=`&tkn=${encodeURIComponent(v)}`),P.URI.from({scheme:u.isWeb?this._preferredWebSchema:c.vscodeRemoteResource,authority:`${m}:${L}`,path:"/vscode-remote-resource",query:a})}}e.RemoteAuthorities=new R;class b{asBrowserUri(l,g){const m=this.toUri(l,g);return m.scheme===c.vscodeRemote?e.RemoteAuthorities.rewrite(m):m.scheme===c.file&&(u.isNative||typeof u.globals.importScripts=="function"&&u.globals.origin===`${c.vscodeFileResource}://${b.FALLBACK_AUTHORITY}`)?m.with({scheme:c.vscodeFileResource,authority:m.authority||b.FALLBACK_AUTHORITY,query:null,fragment:null}):m}asFileUri(l,g){const m=this.toUri(l,g);return m.scheme===c.vscodeFileResource?m.with({scheme:c.file,authority:m.authority!==b.FALLBACK_AUTHORITY?m.authority:null,query:null,fragment:null}):m}toUri(l,g){return P.URI.isUri(l)?l:P.URI.parse(g.toUrl(l))}}b.FALLBACK_AUTHORITY="vscode-app",e.FileAccess=new b}),define(T[8],S([0,1,3,5,7,2,4,6]),function(O,e,u,P,c,R,b,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toLocalResource=e.DataUri=e.distinctParents=e.addTrailingPathSeparator=e.removeTrailingPathSeparator=e.hasTrailingPathSeparator=e.isEqualAuthority=e.isAbsolutePath=e.resolvePath=e.relativePath=e.normalizePath=e.joinPath=e.dirname=e.extname=e.basename=e.basenameOrAuthority=e.getComparisonKey=e.isEqualOrParent=e.isEqual=e.extUriIgnorePathCase=e.extUriBiasedIgnorePathCase=e.extUri=e.ExtUri=e.originalFSPath=void 0;function l(a){return(0,s.uriToFsPath)(a,!0)}e.originalFSPath=l;class g{constructor(t){this._ignorePathCasing=t}compare(t,n,r=!1){return t===n?0:(0,b.compare)(this.getComparisonKey(t,r),this.getComparisonKey(n,r))}isEqual(t,n,r=!1){return t===n?!0:!t||!n?!1:this.getComparisonKey(t,r)===this.getComparisonKey(n,r)}getComparisonKey(t,n=!1){return t.with({path:this._ignorePathCasing(t)?t.path.toLowerCase():void 0,fragment:n?null:void 0}).toString()}ignorePathCasing(t){return this._ignorePathCasing(t)}isEqualOrParent(t,n,r=!1){if(t.scheme===n.scheme){if(t.scheme===P.Schemas.file)return u.isEqualOrParent(l(t),l(n),this._ignorePathCasing(t))&&t.query===n.query&&(r||t.fragment===n.fragment);if((0,e.isEqualAuthority)(t.authority,n.authority))return u.isEqualOrParent(t.path,n.path,this._ignorePathCasing(t),"/")&&t.query===n.query&&(r||t.fragment===n.fragment)}return!1}joinPath(t,...n){return s.URI.joinPath(t,...n)}basenameOrAuthority(t){return(0,e.basename)(t)||t.authority}basename(t){return c.posix.basename(t.path)}extname(t){return c.posix.extname(t.path)}dirname(t){if(t.path.length===0)return t;let n;return t.scheme===P.Schemas.file?n=s.URI.file(c.dirname(l(t))).path:(n=c.posix.dirname(t.path),t.authority&&n.length&&n.charCodeAt(0)!==47&&(console.error(`dirname("${t.toString})) resulted in a relative path`),n="/")),t.with({path:n})}normalizePath(t){if(!t.path.length)return t;let n;return t.scheme===P.Schemas.file?n=s.URI.file(c.normalize(l(t))).path:n=c.posix.normalize(t.path),t.with({path:n})}relativePath(t,n){if(t.scheme!==n.scheme||!(0,e.isEqualAuthority)(t.authority,n.authority))return;if(t.scheme===P.Schemas.file){const f=c.relative(l(t),l(n));return R.isWindows?u.toSlashes(f):f}let r=t.path||"/",h=n.path||"/";if(this._ignorePathCasing(t)){let f=0;for(const A=Math.min(r.length,h.length);f<A&&!(r.charCodeAt(f)!==h.charCodeAt(f)&&r.charAt(f).toLowerCase()!==h.charAt(f).toLowerCase());f++);r=h.substr(0,f)+r.substr(f)}return c.posix.relative(r,h)}resolvePath(t,n){if(t.scheme===P.Schemas.file){const r=s.URI.file(c.resolve(l(t),n));return t.with({authority:r.authority,path:r.path})}return n=u.toPosixPath(n),t.with({path:c.posix.resolve(t.path,n)})}isAbsolutePath(t){return!!t.path&&t.path[0]==="/"}isEqualAuthority(t,n){return t===n||(0,b.equalsIgnoreCase)(t,n)}hasTrailingPathSeparator(t,n=c.sep){if(t.scheme===P.Schemas.file){const r=l(t);return r.length>u.getRoot(r).length&&r[r.length-1]===n}else{const r=t.path;return r.length>1&&r.charCodeAt(r.length-1)===47&&!/^[a-zA-Z]:(\/$|\\$)/.test(t.fsPath)}}removeTrailingPathSeparator(t,n=c.sep){return(0,e.hasTrailingPathSeparator)(t,n)?t.with({path:t.path.substr(0,t.path.length-1)}):t}addTrailingPathSeparator(t,n=c.sep){let r=!1;if(t.scheme===P.Schemas.file){const h=l(t);r=h!==void 0&&h.length===u.getRoot(h).length&&h[h.length-1]===n}else{n="/";const h=t.path;r=h.length===1&&h.charCodeAt(h.length-1)===47}return!r&&!(0,e.hasTrailingPathSeparator)(t,n)?t.with({path:t.path+"/"}):t}}e.ExtUri=g,e.extUri=new g(()=>!1),e.extUriBiasedIgnorePathCase=new g(a=>a.scheme===P.Schemas.file?!R.isLinux:!0),e.extUriIgnorePathCase=new g(a=>!0),e.isEqual=e.extUri.isEqual.bind(e.extUri),e.isEqualOrParent=e.extUri.isEqualOrParent.bind(e.extUri),e.getComparisonKey=e.extUri.getComparisonKey.bind(e.extUri),e.basenameOrAuthority=e.extUri.basenameOrAuthority.bind(e.extUri),e.basename=e.extUri.basename.bind(e.extUri),e.extname=e.extUri.extname.bind(e.extUri),e.dirname=e.extUri.dirname.bind(e.extUri),e.joinPath=e.extUri.joinPath.bind(e.extUri),e.normalizePath=e.extUri.normalizePath.bind(e.extUri),e.relativePath=e.extUri.relativePath.bind(e.extUri),e.resolvePath=e.extUri.resolvePath.bind(e.extUri),e.isAbsolutePath=e.extUri.isAbsolutePath.bind(e.extUri),e.isEqualAuthority=e.extUri.isEqualAuthority.bind(e.extUri),e.hasTrailingPathSeparator=e.extUri.hasTrailingPathSeparator.bind(e.extUri),e.removeTrailingPathSeparator=e.extUri.removeTrailingPathSeparator.bind(e.extUri),e.addTrailingPathSeparator=e.extUri.addTrailingPathSeparator.bind(e.extUri);function m(a,t){const n=[];for(let r=0;r<a.length;r++){const h=t(a[r]);a.some((f,A)=>A===r?!1:(0,e.isEqualOrParent)(h,t(f)))||n.push(a[r])}return n}e.distinctParents=m;var L;(function(a){a.META_DATA_LABEL="label",a.META_DATA_DESCRIPTION="description",a.META_DATA_SIZE="size",a.META_DATA_MIME="mime";function t(n){const r=new Map;n.path.substring(n.path.indexOf(";")+1,n.path.lastIndexOf(";")).split(";").forEach(A=>{const[E,y]=A.split(":");E&&y&&r.set(E,y)});const f=n.path.substring(0,n.path.indexOf(";"));return f&&r.set(a.META_DATA_MIME,f),r}a.parseMetaData=t})(L=e.DataUri||(e.DataUri={}));function v(a,t,n){if(t){let r=a.path;return r&&r[0]!==c.posix.sep&&(r=c.posix.sep+r),a.with({scheme:n,authority:t,path:r})}return a.with({scheme:n})}e.toLocalResource=v}),define(T[10],S([0,1,6,3,8,4,11,2,5]),function(O,e,u,P,c,R,b,s,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.create=e.OutputLinkComputer=void 0;class g{constructor(v,a){this.ctx=v,this.patterns=new Map,this.computePatterns(a)}computePatterns(v){const a=v.workspaceFolders.sort((t,n)=>n.length-t.length).map(t=>u.URI.parse(t));for(const t of a){const n=g.createPatterns(t);this.patterns.set(t,n)}}getModel(v){return this.ctx.getMirrorModels().find(t=>t.uri.toString()===v)}computeLinks(v){const a=this.getModel(v);if(!a)return[];const t=[],n=R.splitLines(a.getValue());for(const[r,h]of this.patterns){const f={toResource:A=>typeof A=="string"?c.joinPath(r,A):null};for(let A=0,E=n.length;A<E;A++)t.push(...g.detectLinks(n[A],A+1,h,f))}return t}static createPatterns(v){const a=[],t=v.scheme===l.Schemas.file?v.fsPath:v.path,n=[t];s.isWindows&&v.scheme===l.Schemas.file&&n.push(P.toSlashes(t));for(const r of n){const h='[^\\s\\(\\):<>"]',A=`${`(?:${h}| ${h})`}+\\.${h}+`,E=`${h}+`;a.push(new RegExp(R.escapeRegExpCharacters(r)+`(${A}) on line ((\\d+)(, column (\\d+))?)`,"gi")),a.push(new RegExp(R.escapeRegExpCharacters(r)+`(${A}):line ((\\d+)(, column (\\d+))?)`,"gi")),a.push(new RegExp(R.escapeRegExpCharacters(r)+`(${A})(\\s?\\((\\d+)(,(\\d+))?)\\)`,"gi")),a.push(new RegExp(R.escapeRegExpCharacters(r)+`(${E})(:(\\d+))?(:(\\d+))?`,"gi"))}return a}static detectLinks(v,a,t,n){const r=[];return t.forEach(h=>{h.lastIndex=0;let f,A=0;for(;(f=h.exec(v))!==null;){const E=R.rtrim(f[1],".").replace(/\\/g,"/");let y;try{const o=n.toResource(E);o&&(y=o.toString())}catch(o){continue}if(f[3]){const o=f[3];if(f[5]){const d=f[5];y=R.format("{0}#{1},{2}",y,o,d)}else y=R.format("{0}#{1}",y,o)}const I=R.rtrim(f[0],"."),q=v.indexOf(I,A);A=q+I.length;const i={startColumn:q+1,startLineNumber:a,endColumn:q+1+I.length,endLineNumber:a};if(r.some(o=>b.Range.areIntersectingOrTouching(o.range,i)))return;r.push({range:i,url:y})}}),r}}e.OutputLinkComputer=g;function m(L,v){return new g(L,v)}e.create=m})}).call(this);

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/23cffa27b806f9e1733e15d611ec251dcdba2c42/core/vs/workbench/contrib/output/common/outputLinkComputer.js.map
