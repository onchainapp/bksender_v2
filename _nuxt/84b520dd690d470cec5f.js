(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{904:function(e,t,r){"use strict";r.r(t);r(83),r(68),r(43),r(60),r(231);var n,c=r(5),o=(r(122),r(128),r(154),r(105),r(106),r(41),r(905),r(84),r(49),r(0)),d=r(208),m=r.n(d),l=r(622),f=r(611),w=r.n(f),h=r(616),k=r.n(h),E=r(2),O=r(66),v=r(1);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function T(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var N,j,_,A,P,S,I,R,y,C,L,F,B,D,W,G,M=function(e){var t=e.newAccount;(0,e.commit)("IDENTIFY",Object(E.toChecksumAddress)(t[0])),window.location.reload()},U={netId:function(e){return e.netId},isApiValible:function(e){return 1==e.netId},networkName:function(e){return O.a["netId".concat(e.netId)].networkName},currency:function(e){return O.a["netId".concat(e.netId)]?O.a["netId".concat(e.netId)].currencyName:"ETH"},disableBurnerFeature:function(e){if(O.a["netId".concat(e.netId)]){var t=O.a["netId".concat(e.netId)].disableBurnerFeature;return null!=t&&null!=t&&t}return!1},networkConfig:function(e){return O.a["netId".concat(e.netId)]},getEthereumProvider:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,c,o,d,m,f,h,E,v,x;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.providerName,e.networkName,n=e.prepareNetId,c=e.walletName,t.t0=r,t.next="fortmatic"===t.t0?4:"naboxWallet"===t.t0?7:"okexWallet"===t.t0?8:"walletConnect"===t.t0?9:"walletLink"===t.t0?19:("mewConnect"===t.t0||t.t0,31);break;case 4:return o=new k.a("pk_live_16BBFE98905B1AA1"),t.abrupt("return",o.getProvider());case 7:return t.abrupt("return",window.NaboxWallet);case 8:return t.abrupt("return",window.okexchain);case 9:if(!window.walletProviderForBulksender){t.next=11;break}return t.abrupt("return",window.walletProviderForBulksender);case 11:for(m in d={},O.a)f=parseInt(m.replace("netId","")),d[f]=O.a[m].rpcUrl;return h={rpc:d,bridge:"https://bridge.walletconnect.org",qrcode:!0,pollingInterval:15e3},"imToken"!=c&&(h.chainId=n),E=new l.a(h),window.walletProviderForBulksender=E,t.abrupt("return",E);case 19:if(!window.walletLinkForBulksender){t.next=23;break}return t.abrupt("return",window.walletLinkForBulksender);case 23:return"Token Bulksender","https://assets.dapp.review/dapp-logo/2020.02.21/AnCYWMmWd4xPSeT4tpCBxHcyixyQj5tW.png",1,v=new w.a({appName:"Token Bulksender",appLogoUrl:"https://assets.dapp.review/dapp-logo/2020.02.21/AnCYWMmWd4xPSeT4tpCBxHcyixyQj5tW.png",darkMode:!1}),x=v.makeWeb3Provider("https://api.mycryptoapi.com/eth",1),window.walletLinkForBulksender=x,t.abrupt("return",x);case 30:return t.abrupt("break",32);case 31:return t.abrupt("return",window.ethereum);case 32:case"end":return t.stop()}}),t)})))},customRPCProvider:function(e,t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.networkConfig.rpcUrl,n=new m.a.providers.HttpProvider(r),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})))},web3:function(e,t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getEthereumProvider();case 2:return r=e.sent,e.abrupt("return",Object.freeze(new m.a(r)));case 4:case"end":return e.stop()}}),e)})))},customRPCWeb3:function(e,t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.networkConfig.rpcUrl,n=new m.a.providers.HttpProvider(r),e.abrupt("return",Object.freeze(new m.a(n)));case 3:case"end":return e.stop()}}),e)})))}},H={IDENTIFY:function(e,t){e.ethAccount=t},SET_NET_ID:function(e,t){t=parseInt(t,10),e.netId=t},SET_PREPARE_NET_ID:function(e,t){e.prepareNetId=t},SET_BALANCE:function(e,t){e.balance=Object(E.fromWei)(t)},SET_WALLET_STATE:function(e,t){e.walletState=t},SET_ADDRESS:function(e,t){var address=t.address,r=t.valid,n=void 0!==r&&r;e.address={value:address,valid:n}},SAVE_GAS_PRICE:function(e,t){e.gasPrice=t},SET_GAS_PRICE_ORACLE_LOCKED:function(e,t){e.gasPriceOracleLocked=t},SAVE_TOKENS:function(e,t){e.tokens=t},SET_TOKEN_ADDRESS:function(e,t){e.tokenAddress=t},SET_FETCHING:function(e,t){e.isFetching=t},SET_PROVIDER_NAME:function(e,t){e.providerName=t},SET_NETWORK_NAME:function(e,t){e.networkName=t},SET_INITIALIZED:function(e,t){e.initialized=t},SET_IS_IMTOKEN:function(e,t){e.isImToken=t},SET_IS_TRUSTWALLET:function(e,t){e.isTrustWallet=t},SET_WALLET_NAME:function(e,t){e.walletName=t},SAVE_ETH_PRICE:function(e,t){e.ethPrice=t},SET_ETH_PRICE_LOADED:function(e,t){e.ethPriceLoaded=t},SET_QR_MODAL_CLOSED:function(e,t){e.qrModalClosed=t},SET_NETWORK_BASEFEE:function(e,t){e.networkBaseFee=t},SET_SUPPORT_EIP1559:function(e,t){e.supportEIP1559=t}},V=(n={setAddress:function(e,t){e.dispatch;var r=e.commit,address=t.address;r("SET_ADDRESS",{address:address,valid:address.length>=42&&Object(E.isAddress)(address)})},setTokenAddress:function(e,t){e.dispatch;(0,e.commit)("SET_TOKEN_ADDRESS",t.address)},setWalletName:function(e,t){var r=e.dispatch,n=e.commit,c=t.walletName;n("SET_WALLET_NAME",c),r("common/saveLastUsedWalletName",{walletName:c},{root:!0})},onNetworkChanged:function(e,t){(0,e.commit)("SET_NET_ID",t.netId)},onChainIdChanged:function(e,t){var r=e.commit,n=t.chainId;r("SET_NET_ID",Object(E.hexToNumber)(n))},closeProvider:(G=Object(o.a)(regeneratorRuntime.mark((function e(t,r){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dispatch,t.state,t.getters,n=t.commit,c=r.providerName,e.t0=c,e.next="walletConnect"===e.t0?5:"walletLink"===e.t0?9:"mewConnect"===e.t0?13:17;break;case 5:if(!window.walletProviderForBulksender){e.next=9;break}return e.next=8,window.walletProviderForBulksender.disconnect();case 8:window.walletProviderForBulksender=void 0;case 9:if(!window.walletLinkForBulksender){e.next=13;break}return e.next=12,window.walletLinkForBulksender.close();case 12:window.walletLinkForBulksender=void 0;case 13:if(!window.connectMewForBulksender){e.next=17;break}return e.next=16,window.connectMewForBulksender.disconnect();case 16:window.connectMewForBulksender=void 0;case 17:return e.abrupt("break",18);case 18:return n("IDENTIFY",null),n("SET_PROVIDER_NAME",""),n("SET_WALLET_NAME",""),n("SET_PREPARE_NET_ID",1),e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e)}))),function(e,t){return G.apply(this,arguments)}),switchNetwork:(W=Object(o.a)(regeneratorRuntime.mark((function e(t,r){var n,c,o,d,m,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch,t.state,n=t.getters,t.commit,c=r.networkId,o=Object(E.toHex)(c),e.prev=3,e.next=6,ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:o}]});case 6:e.next=24;break;case 8:if(e.prev=8,e.t0=e.catch(3),4902!==e.t0.code){e.next=24;break}return e.prev=11,e.next=14,n.getEthereumProvider();case 14:return d=e.sent,m=O.a["netId".concat(c)],l={chainId:o,chainName:m.networkName,nativeCurrency:{name:m.currencyName,symbol:m.currencyName,decimals:18},rpcUrls:[m.rpcUrl],blockExplorerUrls:[m.explorerUrl.tx.replace("tx","")]},e.next=19,d.request({method:"wallet_addEthereumChain",params:[l]});case 19:e.next=24;break;case 21:e.prev=21,e.t1=e.catch(11),console.info(e.t1);case 24:case"end":return e.stop()}}),e,null,[[3,8],[11,21]])}))),function(e,t){return W.apply(this,arguments)}),getBalance:function(e){var t=e.dispatch,r=e.state,n=e.getters.networkConfig.rpcCallRetryAttempt;return new Promise((function(e,c){var d=function(){var m=Object(o.a)(regeneratorRuntime.mark((function o(m){var l,f,w,h;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return l=m.retryAttempt,f=void 0===l?1:l,f++,o.prev=2,w={method:"eth_getBalance",params:[r.ethAccount,"latest"]},o.next=6,t("metamask/sendAsync",w,{root:!0});case 6:h=o.sent,e(h),o.next=13;break;case 10:o.prev=10,o.t0=o.catch(2),f>=n?c(o.t0):d({retryAttempt:f});case 13:case"end":return o.stop()}}),o,null,[[2,10]])})));return function(e){return m.apply(this,arguments)}}();d({})}))},getAllSupportedNetworks:function(e){e.dispatch,e.commit;return O.a},askPermission:function(e,t){var r=e.commit,n=e.dispatch,c=e.getters,d=e.rootGetters,m=(e.state,t.providerName),l=t.networkName,f=t.prepareNetId,w=t.walletName;return new Promise(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t,o){var h,k,O,v,x,T,N;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r("SET_PROVIDER_NAME",m),r("SET_NETWORK_NAME",l),r("SET_PREPARE_NET_ID",f),r("SET_WALLET_NAME",w),r("SET_INITIALIZED",!1),e.next=7,c.getEthereumProvider();case 7:return h=e.sent,e.prev=8,null==h&&(r("SET_WALLET_STATE",-1),o(new Error("Please Install Metamask"))),h.wc&&(r("SET_QR_MODAL_CLOSED",!1),h.wc.on("display_uri",(function(e,t){})),h.wc.on("modal_closed",(function(e,t){r("SET_QR_MODAL_CLOSED",!0)}))),k=[],e.prev=12,e.next=15,h.enable();case 15:k=e.sent,e.next=23;break;case 18:return e.prev=18,e.t0=e.catch(12),e.next=22,h.request({method:"eth_requestAccounts"});case 22:k=e.sent;case 23:return 0===k.length&&(r("SET_WALLET_STATE",-2),o(new Error("lockedMetamask"))),r("SET_WALLET_STATE",1),O=Object(E.toChecksumAddress)(k[0]),r("IDENTIFY",O),n("setAddress",{address:O}),e.next=30,n("getBalance");case 30:return v=e.sent,v=Object(E.hexToNumberString)(v),n("saveUserBalance",{balance:v}),e.next=35,n("sendAsync",{method:"eth_chainId",params:[]});case 35:x=e.sent,T=Object(E.hexToNumber)(x),n("onNetworkChanged",{netId:T});try{(window.imToken||window.ethereum.isImToken)&&r("SET_IS_IMTOKEN",!0),null!=window.trustProvider&&r("SET_IS_TRUSTWALLET",!0),h.on&&(h.on("accountsChanged",(function(e){return M({dispatch:n,commit:r,newAccount:e})})),h.on("chainChanged",(function(e){return window.location.reload()})),h.on("networkChanged",(function(e){return n("onNetworkChanged",{netId:e})})))}catch(e){console.info(e)}return N=d["metamask/networkConfig"].supportEIP1559,r("SET_SUPPORT_EIP1559",N),r("SET_INITIALIZED",!0),e.next=44,n("common/saveLastUsedProviderName",{providerName:m},{root:!0});case 44:return e.next=46,n("fetchTokenList",{});case 46:n("bulksender/initBaseParams",{},{root:!0}),n("common/initBaseParams",{},{root:!0}),n("token/initBaseParams",{},{root:!0});try{n("fetchCoinPrice")}catch(e){}t({netId:T,ethAccount:k[0]}),e.next=56;break;case 53:e.prev=53,e.t1=e.catch(8),o(e.t1);case 56:case"end":return e.stop()}}),e,null,[[8,53],[12,18]])})));return function(t,r){return e.apply(this,arguments)}}())},saveUserBalance:function(e,t){(0,e.commit)("SET_BALANCE",t.balance)},fetchETHBalance:(D=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.dispatch,t.commit,e.prev=1,e.next=4,r("getBalance");case 4:n=e.sent,n=Object(E.hexToNumberString)(n),r("saveUserBalance",{balance:n}),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])}))),function(e){return D.apply(this,arguments)}),fetchTokenList:(B=Object(o.a)(regeneratorRuntime.mark((function e(t,r){var n,c,o,d,m,l,f,w,h,k,E,O,x,T,N,j,_,A,P,S,I,R,y,C,L,F,B,D,W,G,M;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.rootState,c=t.commit,o=t.dispatch,d=t.rootGetters,t.state,m=r.oracleIndex,l=void 0===m?0:m,(f=d["metamask/networkConfig"]).smartContractPollTime,f.gasPrice,w=f.tokenOracleUrls,h=f.currencyName,k=f.networkName,E=f.specialTokenList,O=f.supportTokensAPI,x=n.metamask,T=x.netId,x.isFetching,N=x.ethAccount,x.tokens,j=x.balance,_=x.ethCoinName,A=n.common.language,!O){e.next=52;break}if(e.prev=6,l!=w.length){e.next=12;break}return e.next=10,o("setDefaultTokenList");case 10:e.next=43;break;case 12:return P=1==T,S=w[l%w.length],I=S.indexOf("api.covalenthq")>-1,R=S.indexOf("api/?module=account&action=tokenlist")>-1||S.indexOf("api?module=account&action=tokenlist")>-1,y=S.indexOf("oklink")>-1,S=S.replace("{chain_id}",T).replace("{address}",N).replace("{timestamp}",(new Date).getTime()),e.next=20,fetch(S);case 20:if(200!==(C=e.sent).status){e.next=42;break}return e.next=24,C.json();case 24:if(!(1==(L=e.sent).status||0==L.error||L.success||0==L.status||0==L.code||null!=L.context&&200==L.context.code||L.hasOwnProperty("tokens"))){e.next=39;break}F=[],B=["0x0000000000000000000000000000000000000000"].concat(E),D=k+_,"CN"==A&&P&&(D="以太币"),F.push({symbol:h,name:D,balance:Object(v.a)(j).times(Object(v.a)(10).pow(18)).toString(10),displayBalance:j,contractAddress:"0x0000000000000000000000000000000000000000",decimals:"18",isETH:!0}),I?(W=L.data.items,G=0,W.forEach((function(e){if(G>0){var t={name:e.contract_name,symbol:e.contract_ticker_symbol,decimals:e.contract_decimals,balance:e.balance,displayBalance:Object(v.a)(e.balance).div(Object(v.a)(10).pow(parseInt(e.contract_decimals))).toString(10),contractAddress:e.contract_address};F.push(t),E.includes(t.contractAddress.toLowerCase())||B.push(t.contractAddress.toLowerCase())}G+=1}))):R?(W=L.result).forEach((function(e){var t={name:e.name,symbol:e.symbol,decimals:e.decimals,balance:e.balance,displayBalance:Object(v.a)(e.balance).div(Object(v.a)(10).pow(parseInt(e.decimals))).toString(10),contractAddress:e.contractAddress};F.push(t),E.includes(t.contractAddress.toLowerCase())||B.push(t.contractAddress.toLowerCase())})):y?(W=L.data.hits).forEach((function(e){var t={name:e.coinName,symbol:e.symbol,decimals:e.precision,balance:0,displayBalance:Object(v.a)(0).div(Object(v.a)(10).pow(parseInt(e.precision))).toString(10),contractAddress:e.tokenContractAddress};F.push(t),E.includes(t.contractAddress.toLowerCase())||B.push(t.contractAddress.toLowerCase())})):L.tokens.forEach((function(e){var t=e.tokenInfo,r={name:t.name,symbol:t.symbol,decimals:t.decimals,balance:e.balance,displayBalance:Object(v.a)(e.balance).div(Object(v.a)(10).pow(parseInt(t.decimals))).toString(10),contractAddress:t.address};F.push(r),E.includes(r.contractAddress.toLowerCase())||B.push(r.contractAddress.toLowerCase())})),F.sort((function(a,b){return B.indexOf(a.contractAddress)-B.indexOf(b.contractAddress)})),M=[],F.forEach((function(e){null==e.name&&(e.name="Token"),null==e.symbol&&(e.symbol="Token"),M.push(e)})),c("SAVE_TOKENS",M),c("SET_FETCHING",!1),e.next=40;break;case 39:throw Error("Fetch tokens failed");case 40:e.next=43;break;case 42:throw Error("Fetch tokens failed");case 43:e.next=50;break;case 45:e.prev=45,e.t0=e.catch(6),console.error(e.t0),l++,o("fetchTokenList",{oracleIndex:l});case 50:e.next=54;break;case 52:return e.next=54,o("setDefaultTokenList");case 54:case"end":return e.stop()}}),e,null,[[6,45]])}))),function(e,t){return B.apply(this,arguments)}),setDefaultTokenList:(F=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n,c,o,d,m,l,f,w,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.rootState,n=t.commit,t.dispatch,c=t.rootGetters,t.state,(o=c["metamask/networkConfig"]).smartContractPollTime,o.gasPrice,o.tokenOracleUrls,d=o.currencyName,m=o.networkName,o.specialTokenList,(l=r.metamask).netId,l.isFetching,l.ethAccount,l.tokens,f=l.balance,w=l.ethCoinName,r.common.language,(h=[]).push({symbol:d,name:m+w,balance:Object(v.a)(f).times(Object(v.a)(10).pow(18)).toString(10),displayBalance:f,contractAddress:"0x0000000000000000000000000000000000000000",decimals:"18",isETH:!0}),n("SAVE_TOKENS",h),n("SET_FETCHING",!1);case 8:case"end":return e.stop()}}),e)}))),function(e){return F.apply(this,arguments)}),fetchGasPrice:(L=Object(o.a)(regeneratorRuntime.mark((function e(t,r){var n,c,o,d,m,l,f,w,h,k,O,x,N,j,_,A,P,S,I,R,y,C,L,F,B;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.rootState,c=t.commit,o=t.dispatch,d=t.rootGetters,m=t.state,l=r.oracleIndex,f=void 0===l?0:l,w=d["metamask/networkConfig"],h=w.smartContractPollTime,k=w.gasPrice,O=w.gasOracleUrls,x=w.useRPCGasPrice,N=w.supportEIP1559,j=n.metamask.netId,!m.gasPriceOracleLocked){e.next=8;break}return console.info("GasPrice Oracle locked"),setTimeout((function(){return o("fetchGasPrice",{})}),1e3*h),e.abrupt("return");case 8:if(e.prev=8,1!==j&&137!==j&&80001!==j){e.next=41;break}return _=O[f%O.length],A=_.indexOf("etherchain")>-1,P=_.indexOf("codefi.network")>-1,e.next=15,fetch(_);case 15:if(200!==(S=e.sent).status){e.next=37;break}return e.next=19,S.json();case 19:if((I=e.sent).hasOwnProperty("data")&&(I=I.data),R=T({},k),I.slow&&(R.slow=Number(I.slow),Number(I.slow)>Number(Object(E.toWei)("0.001","gwei"))&&(R.slow=Math.ceil(Number(Object(E.fromWei)(Number(I.slow).toString(),"gwei"))))),I.safeLow&&(R.slow=Number(I.safeLow)),I.fast&&(R.fast=Number(I.fast),Number(I.fast)>Number(Object(E.toWei)("0.001","gwei"))&&(R.fast=Math.ceil(Number(Object(E.fromWei)(Number(I.fast).toString(),"gwei"))))),I.standard&&(R.standard=Number(I.standard),Number(I.standard)>Number(Object(E.toWei)("0.001","gwei"))&&(R.standard=Math.ceil(Number(Object(E.fromWei)(Number(I.standard).toString(),"gwei"))))),I.instant&&(R.instant=Number(I.instant)),I.fastest&&(R.instant=Number(I.fastest)),I.rapid&&(R.instant=Number(I.rapid),Number(I.rapid)>Number(Object(E.toWei)("0.001","gwei"))&&(R.instant=Math.ceil(Number(Object(E.fromWei)(Number(I.rapid).toString(),"gwei"))))),1===j){y=1,C=1,L=2,F=10,B=Number(R.standard);try{A&&(B=Number(I.currentBaseFee),B=Object(v.a)(B).times(Object(v.a)(1.125)).toFixed(2),!isNaN(B)&&B>0&&(y=R.slow,C=R.standard,L=R.fast,F=R.instant)),P&&(B=Number(I.estimatedBaseFee),B=Object(v.a)(B).times(Object(v.a)(1.125)).toFixed(2),!isNaN(estimatedBaseFee)&&estimatedBaseFee>0&&(B=Number(I.low.estimatedBaseFee),y=I.low.suggestedMaxPriorityFeePerGas,C=I.medium.suggestedMaxPriorityFeePerGas,L=I.high.suggestedMaxPriorityFeePerGas))}catch(e){}R.slow=Object(v.a)(B).plus(Object(v.a)(y)).toNumber(),R.standard=Object(v.a)(B).plus(Object(v.a)(C)).toNumber(),R.fast=Object(v.a)(B).plus(Object(v.a)(L)).toNumber(),R.instant=Object(v.a)(B).plus(Object(v.a)(F)).toNumber(),c("SET_NETWORK_BASEFEE",B)}R.fast<=R.standard&&(R.fast=Object(v.a)(R.standard).plus(Object(v.a)(2)).toNumber()),R.instant<=R.fast&&(R.instant=Object(v.a)(R.fast).plus(Object(v.a)(4)).toNumber()),137===j&&(R.instant=Object(v.a)(R.instant).plus(Object(v.a)(3)).toNumber()),c("SAVE_GAS_PRICE",R),e.next=38;break;case 37:throw Error("Fetch gasPrice failed");case 38:setTimeout((function(){return o("fetchGasPrice",{})}),1e3*h),e.next=52;break;case 41:if(null==x||!x){e.next=51;break}if(!N){e.next=47;break}return e.next=45,o("buildChainGasPriceFromRpcForEIP1559");case 45:e.next=49;break;case 47:return e.next=49,o("buildChainGasPriceFromRpc");case 49:e.next=52;break;case 51:c("SAVE_GAS_PRICE",k);case 52:e.next=59;break;case 54:e.prev=54,e.t0=e.catch(8),console.error(e.t0),f++,setTimeout((function(){return o("fetchGasPrice",{oracleIndex:f})}),1e3*h);case 59:case"end":return e.stop()}}),e,null,[[8,54]])}))),function(e,t){return L.apply(this,arguments)}),updateGasPrice:(C=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.state,t.getters,t.rootGetters,t.rootState,t.dispatch,n=t.commit,c=r.gasPrices,(o=Object.assign({},c)).fast=40,n("SAVE_GAS_PRICE",o);case 5:case"end":return e.stop()}}),e)}))),function(e){return C.apply(this,arguments)}),buildChainGasPriceFromRpc:(y=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n,c,o,d,m,l,f,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.state,t.getters,n=t.rootGetters,t.rootState,c=t.dispatch,o=t.commit,d=n["metamask/networkConfig"].gasPrice,e.prev=2,e.next=5,c("fetchGasPriceFromChain");case 5:m=e.sent,l=Object(E.hexToNumberString)(m),f=Math.ceil(Number(Object(E.fromWei)(l,"gwei"))),w=T({},l),30==r.netId?(w.slow=Number(Object(E.fromWei)(l,"gwei")),w.standard=Object(v.a)(w.slow).toNumber(),w.fast=Object(v.a)(w.standard).plus(Object(v.a)(.01)).toNumber(),w.instant=Object(v.a)(w.fast).plus(Object(v.a)(.02)).toNumber()):421611==r.netId||42161==r.netId?(w.slow=Number(Object(E.fromWei)(l,"gwei")),w.standard=Object(v.a)(w.slow).toNumber(),w.fast=Object(v.a)(w.standard).plus(Object(v.a)(.1)).toNumber(),w.instant=Object(v.a)(w.fast).plus(Object(v.a)(1)).toNumber()):56==r.netId||97==r.netId?(w.slow=Number(Object(E.fromWei)(l,"gwei")),w.standard=Object(v.a)(w.slow).toNumber(),w.fast=Object(v.a)(w.standard).plus(Object(v.a)(1)).toNumber(),w.instant=Object(v.a)(w.fast).plus(Object(v.a)(5)).toNumber()):42220==r.netId||1285==r.netId?(w.slow=Number(Object(E.fromWei)(l,"gwei")),w.standard=Object(v.a)(w.slow).toNumber(),w.fast=Object(v.a)(w.standard).plus(Object(v.a)(.1)).toNumber(),w.instant=Object(v.a)(w.fast).plus(Object(v.a)(.5)).toNumber()):(w.slow=Object(v.a)(w.slow).plus(Object(v.a)(1)).toNumber(),w.standard=f,w.fast=Object(v.a)(w.standard).plus(Object(v.a)(5)).toNumber(),w.instant=Object(v.a)(w.fast).plus(Object(v.a)(10)).toNumber()),o("SAVE_GAS_PRICE",w),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),console.info(e.t0),o("SAVE_GAS_PRICE",d);case 17:case"end":return e.stop()}}),e,null,[[2,13]])}))),function(e){return y.apply(this,arguments)}),buildChainGasPriceFromRpcForEIP1559:(R=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n,c,o,d,m,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.state,t.getters,r=t.rootGetters,t.rootState,n=t.dispatch,c=t.commit,o=r["metamask/networkConfig"].gasPrice,e.prev=2,e.next=5,n("fetchBaseFeeFromChain");case 5:d=e.sent,m=Object(v.a)(Object(E.fromWei)(Object(E.hexToNumberString)(d.baseFeePerGas),"gwei")).times(Object(v.a)(1.25)).toFixed(9),l=T({},o),c("SET_NETWORK_BASEFEE",m),Object(v.a)(m).plus(Object(v.a)(1)).toNumber(),l.slow=Object(v.a)(m).plus(Object(v.a)(.1)).toNumber(),l.standard=Object(v.a)(m).plus(Object(v.a)(1)).toNumber(),l.fast=Object(v.a)(m).plus(Object(v.a)(3)).toNumber(),l.instant=Object(v.a)(m).plus(Object(v.a)(5)).toNumber(),c("SAVE_GAS_PRICE",l),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(2),console.info(e.t0),c("SET_NETWORK_BASEFEE",1),c("SAVE_GAS_PRICE",o);case 22:case"end":return e.stop()}}),e,null,[[2,17]])}))),function(e){return R.apply(this,arguments)}),fetchGasPriceFromChain:(I=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.state,t.getters,t.rootGetters,t.rootState,n=t.dispatch,t.commit,e.abrupt("return",new Promise((function(e,t){var c=function(){var d=Object(o.a)(regeneratorRuntime.mark((function o(d){var m,l,f,w;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return m=d.retryAttempt,l=void 0===m?1:m,l++,o.prev=2,f={from:r.ethAccount,method:"eth_gasPrice",params:[]},o.next=6,n("metamask/sendAsync",f,{root:!0});case 6:w=o.sent,e(w),o.next=13;break;case 10:o.prev=10,o.t0=o.catch(2),l>=2?t(o.t0):c({retryAttempt:l});case 13:case"end":return o.stop()}}),o,null,[[2,10]])})));return function(e){return d.apply(this,arguments)}}();c({})})));case 3:case"end":return e.stop()}}),e)}))),function(e){return I.apply(this,arguments)}),fetchBaseFeeFromChain:(S=Object(o.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.state,t.getters,t.rootGetters,t.rootState,r=t.dispatch,t.commit,e.abrupt("return",new Promise((function(e,t){var n=function(){var c=Object(o.a)(regeneratorRuntime.mark((function c(o){var d,m,l,f;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return d=o.retryAttempt,m=void 0===d?1:d,m++,c.prev=2,l={method:"eth_getBlockByNumber",params:["latest",!1]},c.next=6,r("metamask/sendAsync",l,{root:!0});case 6:f=c.sent,e(f),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(2),m>=2?t(c.t0):n({retryAttempt:m});case 13:case"end":return c.stop()}}),c,null,[[2,10]])})));return function(e){return c.apply(this,arguments)}}();n({})})));case 3:case"end":return e.stop()}}),e)}))),function(e){return S.apply(this,arguments)}),fetchCoinPrice:(P=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n,c,d,m,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.rootState,n=t.commit,t.dispatch,c=t.rootGetters,t.state,(d=c["metamask/networkConfig"]).smartContractPollTime,m=d.extraFeeOracle,l=d.supportExtraFee,r.metamask.netId,l){e.next=6;break}return n("SET_ETH_PRICE_LOADED",!0),e.abrupt("return");case 6:return e.abrupt("return",new Promise((function(e,t){var r=function(){var c=Object(o.a)(regeneratorRuntime.mark((function c(o){var d,l,f,w,h,k,E;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return d=o.retryAttempt,l=void 0===d?1:d,l++,c.prev=2,f=new AbortController,w=setTimeout((function(){return f.abort()}),4e3),c.next=7,fetch(m.coinPriceUrl,{signal:f.signal});case 7:if(200!==(h=c.sent).status){c.next=20;break}return c.next=11,h.json();case 11:k=c.sent,E=0,k.hasOwnProperty(m.coinId)&&(E=k[m.coinId].usd),clearTimeout(w),n("SAVE_ETH_PRICE",E),n("SET_ETH_PRICE_LOADED",!0),e(E),c.next=22;break;case 20:throw clearTimeout(w),Error("Fetch coin price failed");case 22:c.next=27;break;case 24:c.prev=24,c.t0=c.catch(2),l>=2?t(c.t0):r({retryAttempt:l});case 27:case"end":return c.stop()}}),c,null,[[2,24]])})));return function(e){return c.apply(this,arguments)}}();r({})})));case 8:case"end":return e.stop()}}),e)}))),function(e){return P.apply(this,arguments)})},Object(c.a)(n,"updateGasPrice",(A=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.state,t.getters,t.rootGetters,t.rootState,t.dispatch,n=t.commit,c=r.gasPrices,(o=Object.assign({},c)).fast=40,n("SAVE_GAS_PRICE",o);case 5:case"end":return e.stop()}}),e)}))),function(e){return A.apply(this,arguments)})),Object(c.a)(n,"lockGasPriceOracle",(_=Object(o.a)(regeneratorRuntime.mark((function e(t,r){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.state,t.getters,t.rootGetters,t.rootState,t.dispatch,n=t.commit,c=r.gasPriceOracleLocked,n("SET_GAS_PRICE_ORACLE_LOCKED",c);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return _.apply(this,arguments)})),Object(c.a)(n,"getTransactionReceipt",(j=Object(o.a)(regeneratorRuntime.mark((function e(t,r){var n,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,t.getters,t.rootGetters,t.rootState,c=t.dispatch,t.commit,d=r.txHash,e.abrupt("return",new Promise((function(e,t){var r=function(){var m=Object(o.a)(regeneratorRuntime.mark((function o(m){var l,f,w,h;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return l=m.retryAttempt,f=void 0===l?1:l,f++,o.prev=2,w={from:n.ethAccount,method:"eth_getTransactionReceipt",params:[d]},o.next=6,c("metamask/sendAsync",w,{root:!0});case 6:h=o.sent,e(h),o.next=13;break;case 10:o.prev=10,o.t0=o.catch(2),f>=2?t(o.t0):r({retryAttempt:f});case 13:case"end":return o.stop()}}),o,null,[[2,10]])})));return function(e){return m.apply(this,arguments)}}();r({})})));case 4:case"end":return e.stop()}}),e)}))),function(e,t){return j.apply(this,arguments)})),Object(c.a)(n,"getTransactionCount",(N=Object(o.a)(regeneratorRuntime.mark((function e(t,r){var n,c,address;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,t.getters,t.rootGetters,t.rootState,c=t.dispatch,t.commit,address=r.address,e.abrupt("return",new Promise((function(e,t){var r=function(){var d=Object(o.a)(regeneratorRuntime.mark((function o(d){var m,l,f,w;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return m=d.retryAttempt,l=void 0===m?1:m,l++,o.prev=2,f={from:n.ethAccount,method:"eth_getTransactionCount",params:[address,"latest"]},o.next=6,c("metamask/sendAsync",f,{root:!0});case 6:w=o.sent,e(w),o.next=13;break;case 10:o.prev=10,o.t0=o.catch(2),l>=2?t(o.t0):r({retryAttempt:l});case 13:case"end":return o.stop()}}),o,null,[[2,10]])})));return function(e){return d.apply(this,arguments)}}();r({})})));case 4:case"end":return e.stop()}}),e)}))),function(e,t){return N.apply(this,arguments)})),Object(c.a)(n,"sendAsync",(function(e,t){var r=e.state,n=e.getters,c=e.rootState,d=t.method,m=t.from,l=t.params;switch(n.netId){case 77:case 99:break;case 100:m=void 0}var f=c.common.isMobile;return new Promise(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t,c){var o,w,h,k,E,O,v,x,T,N;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getEthereumProvider();case 2:if(o=e.sent,!1,"walletConnect"!=r.providerName){e.next=55;break}return e.prev=5,e.next=8,o.getWalletConnector();case 8:return w=e.sent,e.next=11,n.web3();case 11:if(e.sent,"eth_sendTransaction"!=d){e.next=20;break}return h=l[0],e.next=16,w.sendTransaction(h);case 16:return k=e.sent,console.info(k),t(k),e.abrupt("return");case 20:if("eth_signTransaction"!=d){e.next=25;break}return e.next=23,w.signTransaction(txParam);case 23:E=e.sent,t(E);case 25:if("eth_signTypedData_v3"!=d){e.next=34;break}return l=[l[0],l[1]],e.next=29,w.signTypedData(l);case 29:O=e.sent,console.info(O),t(O),e.next=38;break;case 34:return e.next=36,o.send({id:1314,method:d,params:l,jsonrpc:"2.0",from:m});case 36:(v=e.sent)?t(v):c("get result by walletConnect failed");case 38:e.next=53;break;case 40:return e.prev=40,e.t0=e.catch(5),console.info(e.t0,d),e.prev=43,e.next=46,o.send({id:1314,method:d,params:l,jsonrpc:"2.0"});case 46:(x=e.sent)?t(x):c("Send RPC by walletConnect failed"),e.next=53;break;case 50:e.prev=50,e.t1=e.catch(43),c("Send RPC by walletConnect failed");case 53:e.next=56;break;case 55:try{"walletLink"==r.providerName&&"eth_signTypedData_v3"==d&&(l=[l[0],JSON.parse(l[1])]),T={id:520,method:d,params:l,jsonrpc:"2.0",from:m},f&&delete T.from,o.sendAsync(T,(function(e,r){e&&c(e),r.error?c(r.error):t(r.result)}))}catch(e){N={id:520,method:d,params:l,jsonrpc:"2.0",from:m},f&&delete N.from;try{o.send(N,(function(e,r){e&&c(e),r.error?c(r.error):t(r.result)}))}catch(e){o.request(N).then((function(e){t(e)})).catch((function(e){c(e)}))}}case 56:case"end":return e.stop()}}),e,null,[[5,40],[43,50]])})));return function(t,r){return e.apply(this,arguments)}}())})),Object(c.a)(n,"sendAsync_custom",(function(e,t){e.state;var r=e.getters,n=t.method,c=t.from,d=t.params;switch(r.netId){case 77:case 99:break;case 100:c=void 0}return new Promise(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t,o){var m,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.customRPCWeb3();case 2:return m=e.sent,console.info(m.currentProvider),e.next=6,r.customRPCProvider();case 6:l=e.sent,console.info(l),console.log("sendAsync `method, from, params`",n,c,d),m.currentProvider.send({method:n,params:d,jsonrpc:"2.0"},(function(e,r){console.info(r),console.info(e),e&&o(e),r.error?o(r.error):t(r.result)}));case 10:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}())})),n);t.default={namespaced:!0,state:function(){return{ethAccount:null,netId:1,currency:"ETH",domainData:{},balance:"0",initialized:!1,address:{value:null,valid:!1},gasPrice:{fast:10,low:5,standard:5,instant:20},gasPriceOracleLocked:!1,providerName:"",networkName:"",tokens:[],tokensForTestnet:[],tokenAddress:"",isFetching:!0,ethCoinName:" Native Currency",walletState:1,isImToken:!1,isTrustWallet:!1,isMetamask:!0,walletName:"",ethPrice:0,ethPriceLoaded:!1,prepareNetId:1,qrModalClosed:!1,networkBaseFee:100,supportEIP1559:!1}},getters:U,mutations:H,actions:V}}}]);