if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,f,r)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const s={uri:location.origin+c.slice(1)};return Promise.all(f.map(c=>{switch(c){case"exports":return i;case"module":return s;default:return e(c)}})).then(e=>{const c=r(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-df8cbb17"],(function(e){"use strict";e.setCacheNameDetails({prefix:"arvore-educacao-pwa"}),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"arvore_icon.png",revision:"c0e31133498946d4586e154156bb2630"},{url:"book_lover.svg",revision:"8e09c3d130553250d36a9972c8dfd4a5"},{url:"coin.png",revision:"441b175ab9a923992f54c983a769e6b1"},{url:"css/2.725987a1.css",revision:"9e50673cec0fc6329558c4a9284f0fdc"},{url:"css/3.dc104ef7.css",revision:"65a2ec02ed38c80d306c8b3f7b8ed5b4"},{url:"css/4.d59359fb.css",revision:"008840edcf3b504c5f8d5b8636a70033"},{url:"css/5.76e56a59.css",revision:"62b63ee26503de996fcd412ee0a21341"},{url:"css/app.465dc8e7.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/vendor.18b5168f.css",revision:"b77c020c51c311beeabbd083d9d1cb6c"},{url:"epubs/49709315336.jpg",revision:"c2a73c80b57aeb99eb15393a32640495"},{url:"epubs/49709315346.jpg",revision:"64d5b8b21e965ca293c3da410a5b6527"},{url:"epubs/49709315446.jpg",revision:"201634002d160e43e0152637eb2df64f"},{url:"epubs/49709315483.jpg",revision:"bff5b88bdc4bb00398e9856c5332143c"},{url:"epubs/hp.jpg",revision:"f76565a3134402eb1d8755d562a77187"},{url:"epubs/lotr.jpg",revision:"a9d55cc57d184c957c2089a87b813a85"},{url:"epubs/pj.jpg",revision:"7befc189730142435c3907627c7abc3c"},{url:"favicon.ico",revision:"79e44f7bc3321b94fffad73be4c293df"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"fonts/fa-brands-400.31015e86.woff2",revision:"a06da7f0950f9dd366fc9db9d56d618a"},{url:"fonts/fa-brands-400.ee26f57b.woff",revision:"ec3cfddedb8bebd2d7a3fdf511f7c1cc"},{url:"fonts/fa-regular-400.8b892b79.woff",revision:"f89ea91ecd1ca2db7e09baa2c4b156d1"},{url:"fonts/fa-regular-400.c5240512.woff2",revision:"c20b5b7362d8d7bb7eddf94344ace33e"},{url:"fonts/fa-solid-900.9451d5fe.woff2",revision:"b15db15f746f29ffa02638cb455b8ec0"},{url:"fonts/fa-solid-900.a940d584.woff",revision:"bea989e82b07e9687c26fc58a4805021"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.2d36eb59.woff",revision:"463cfa6bda38af7123b1770d4982ad3c"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.492281ee.woff2",revision:"8ff0ce021911cf276edc22fb8ca59ec7"},{url:"icons/apple-icon-120x120.png",revision:"d6c657187b595467da0a6b25274fe4e6"},{url:"icons/apple-icon-152x152.png",revision:"b4315e6dd5cce3b524b61f650c130e8b"},{url:"icons/apple-icon-167x167.png",revision:"3c59a7d386e472f622c05febc3ebbbdf"},{url:"icons/apple-icon-180x180.png",revision:"76d8ece725b0ca839ebb7f15bc76796c"},{url:"icons/apple-launch-1125x2436.png",revision:"bf7168c483de4c09c68f21d9d5e5aaf4"},{url:"icons/apple-launch-1242x2208.png",revision:"49e014a37ed8cf91ff5f79f9834d2b1a"},{url:"icons/apple-launch-1242x2688.png",revision:"6209445e8a03654742435f368fb1f0c7"},{url:"icons/apple-launch-1536x2048.png",revision:"6e2d12c66a7c5fa95c1d0ed83039bbb6"},{url:"icons/apple-launch-1668x2224.png",revision:"1194d20083da7be9421c49e9c79b03fa"},{url:"icons/apple-launch-1668x2388.png",revision:"3fab8874f667437e866fae03397274aa"},{url:"icons/apple-launch-2048x2732.png",revision:"1081e2944030d635cd97a7fa711a2e00"},{url:"icons/apple-launch-640x1136.png",revision:"5b5975c9809cfece3629c5d3d1bfdc4c"},{url:"icons/apple-launch-750x1334.png",revision:"224053814329e36492097e4c6b3aef18"},{url:"icons/apple-launch-828x1792.png",revision:"0461bcecd75014315835fd66a6d9ed2c"},{url:"icons/favicon-128x128.png",revision:"5d11c84e4c72ba2674acb1e753b44cd1"},{url:"icons/favicon-16x16.png",revision:"50d9b420dd5f279bbb48ebc5641c78fc"},{url:"icons/favicon-32x32.png",revision:"3bd712aa403033aca745159fd480fc7d"},{url:"icons/favicon-96x96.png",revision:"9ca3ba29fe5079406723a00753313301"},{url:"icons/icon-128x128.png",revision:"5d11c84e4c72ba2674acb1e753b44cd1"},{url:"icons/icon-192x192.png",revision:"058ac9baffbf230c4add4122ff8a7ec1"},{url:"icons/icon-256x256.png",revision:"c8a8c3b8705912cc9cd2f9ddb023c31f"},{url:"icons/icon-384x384.png",revision:"a7fa5ce48219c13dce09112ae7f3d73c"},{url:"icons/icon-512x512.png",revision:"71c55f9c88ce4bba016051bb91531e7f"},{url:"icons/ms-icon-144x144.png",revision:"be4e9873eaf7b631053e2b6b175022c0"},{url:"icons/safari-pinned-tab.svg",revision:"a46b904066c5ddbab50f780273d07d61"},{url:"index.html",revision:"e1d8402a6428bee3389f2bbe5753c25d"},{url:"js/10.1d94264c.js",revision:"950c2322bc14db93d746095cc7e8ec4d"},{url:"js/2.cbd13a5a.js",revision:"8312fe6dbdd12407fffd2bc520e3ff0b"},{url:"js/3.4431b1e2.js",revision:"3029721568e3449c86ec72e470c39007"},{url:"js/4.0a47c6b2.js",revision:"ab911874458d131d292b1046b4cf4b08"},{url:"js/5.1e87cfe2.js",revision:"c8834e585e2866b69ce05881f2e4b582"},{url:"js/6.f8ebce3b.js",revision:"944ad35222e666cf75d13b27bcc94929"},{url:"js/7.8fc88cd5.js",revision:"a7d4f057e3dd90c523b9d37c4d0e9b1b"},{url:"js/8.b09c49cf.js",revision:"d79c830b51461f268676131b8d725e65"},{url:"js/9.ba664b27.js",revision:"5f95a5ea94168acaf587fdc7fa4d08c8"},{url:"js/app.4036f759.js",revision:"60aeb6f1f7a280de6d4a1f8ab0bf4b98"},{url:"js/vendor.d3a998c7.js",revision:"ca110bfe4d247890268f2f8e83cfb66b"},{url:"logo_arvore.svg",revision:"ab6a6140d6872c0ea3b594519907a8ec"},{url:"logo_arvore_educacao.svg",revision:"6b9a42fd46562d263cef39b926cf9aef"},{url:"manifest.json",revision:"743049202ec8ecbfb508c737cff87d31"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
