(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{969:function(e,t,n){"use strict";var o=n(970);e.exports=o},970:function(e,t,n){"use strict";var o=n(971),r=n(972),y=n(978);function d(e){this.eth=e}Object.defineProperty(d.prototype,"registry",{get:function(){return new r(this)},enumerable:!0}),Object.defineProperty(d.prototype,"resolverMethodHandler",{get:function(){return new y(this.registry)},enumerable:!0}),d.prototype.resolver=function(e){return this.registry.resolver(e)},d.prototype.getAddress=function(e,t){return this.resolverMethodHandler.method(e,"addr",[]).call(t)},d.prototype.setAddress=function(e,address,t,n){return this.resolverMethodHandler.method(e,"setAddr",[address]).send(t,n)},d.prototype.getPubkey=function(e,t){return this.resolverMethodHandler.method(e,"pubkey",[],t).call(t)},d.prototype.setPubkey=function(e,t,n,o,r){return this.resolverMethodHandler.method(e,"setPubkey",[t,n]).send(o,r)},d.prototype.getContent=function(e,t){return this.resolverMethodHandler.method(e,"content",[]).call(t)},d.prototype.setContent=function(e,t,n,o){return this.resolverMethodHandler.method(e,"setContent",[t]).send(n,o)},d.prototype.getMultihash=function(e,t){return this.resolverMethodHandler.method(e,"multihash",[]).call(t)},d.prototype.setMultihash=function(e,t,n,o){return this.resolverMethodHandler.method(e,"multihash",[t]).send(n,o)},d.prototype.checkNetwork=function(){var e=this;return e.eth.getBlock("latest").then((function(t){var n=new Date/1e3-t.timestamp;if(n>3600)throw new Error("Network not synced; last block was "+n+" seconds ago");return e.eth.net.getNetworkType()})).then((function(e){var t=o.addresses[e];if(void 0===t)throw new Error("ENS is not supported on network "+e);return t}))},e.exports=d},971:function(e,t,n){"use strict";e.exports={addresses:{main:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",ropsten:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",rinkeby:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",goerli:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"}}},972:function(e,t,n){"use strict";var o=n(46),r=n(468),y=n(469),d=n(229),m=n(976),c=n(977);function h(e){var t=this;this.ens=e,this.contract=e.checkNetwork().then((function(address){var e=new r(m,address);return e.setProvider(t.ens.eth.currentProvider),e}))}h.prototype.owner=function(e,t){var n=new d(!0);return this.contract.then((function(r){r.methods.owner(y.hash(e)).call().then((function(e){n.resolve(e),o.isFunction(t)&&t(e)})).catch((function(e){n.reject(e),o.isFunction(t)&&t(e)}))})),n.eventEmitter},h.prototype.resolver=function(e){var t=this;return this.contract.then((function(t){return t.methods.resolver(y.hash(e)).call()})).then((function(address){var e=new r(c,address);return e.setProvider(t.ens.eth.currentProvider),e}))},e.exports=h},976:function(e,t,n){"use strict";e.exports=[{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"resolver",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"label",type:"bytes32"},{name:"owner",type:"address"}],name:"setSubnodeOwner",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"ttl",type:"uint64"}],name:"setTTL",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"ttl",outputs:[{name:"",type:"uint64"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"resolver",type:"address"}],name:"setResolver",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"owner",type:"address"}],name:"setOwner",outputs:[],payable:!1,type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"owner",type:"address"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!0,name:"label",type:"bytes32"},{indexed:!1,name:"owner",type:"address"}],name:"NewOwner",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"resolver",type:"address"}],name:"NewResolver",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"ttl",type:"uint64"}],name:"NewTTL",type:"event"}]},977:function(e,t,n){"use strict";e.exports=[{constant:!0,inputs:[{name:"interfaceID",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"},{name:"contentTypes",type:"uint256"}],name:"ABI",outputs:[{name:"contentType",type:"uint256"},{name:"data",type:"bytes"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"hash",type:"bytes"}],name:"setMultihash",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"multihash",outputs:[{name:"",type:"bytes"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"x",type:"bytes32"},{name:"y",type:"bytes32"}],name:"setPubkey",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"content",outputs:[{name:"ret",type:"bytes32"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"addr",outputs:[{name:"ret",type:"address"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"contentType",type:"uint256"},{name:"data",type:"bytes"}],name:"setABI",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"name",outputs:[{name:"ret",type:"string"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"name",type:"string"}],name:"setName",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"hash",type:"bytes32"}],name:"setContent",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"pubkey",outputs:[{name:"x",type:"bytes32"},{name:"y",type:"bytes32"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"addr",type:"address"}],name:"setAddr",outputs:[],payable:!1,type:"function"},{inputs:[{name:"ensAddr",type:"address"}],payable:!1,type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"a",type:"address"}],name:"AddrChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"hash",type:"bytes32"}],name:"ContentChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"name",type:"string"}],name:"NameChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!0,name:"contentType",type:"uint256"}],name:"ABIChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"x",type:"bytes32"},{indexed:!1,name:"y",type:"bytes32"}],name:"PubkeyChanged",type:"event"}]},978:function(e,t,n){"use strict";var o=n(229),r=n(469),y=n(46);function d(e){this.registry=e}d.prototype.method=function(e,t,n,o){return{call:this.call.bind({ensName:e,methodName:t,methodArguments:n,callback:o,parent:this}),send:this.send.bind({ensName:e,methodName:t,methodArguments:n,callback:o,parent:this})}},d.prototype.call=function(e){var t=this,n=new o,r=this.parent.prepareArguments(this.ensName,this.methodArguments);return this.parent.registry.resolver(this.ensName).then((function(o){t.parent.handleCall(n,o.methods[t.methodName],r,e)})).catch((function(e){n.reject(e)})),n.eventEmitter},d.prototype.send=function(e,t){var n=this,r=new o,y=this.parent.prepareArguments(this.ensName,this.methodArguments);return this.parent.registry.resolver(this.ensName).then((function(o){n.parent.handleSend(r,o.methods[n.methodName],y,e,t)})).catch((function(e){r.reject(e)})),r.eventEmitter},d.prototype.handleCall=function(e,t,n,o){return t.apply(this,n).call().then((function(t){e.resolve(t),y.isFunction(o)&&o(t)})).catch((function(t){e.reject(t),y.isFunction(o)&&o(t)})),e},d.prototype.handleSend=function(e,t,n,o,r){return t.apply(this,n).send(o).on("transactionHash",(function(t){e.eventEmitter.emit("transactionHash",t)})).on("confirmation",(function(t,n){e.eventEmitter.emit("confirmation",t,n)})).on("receipt",(function(t){e.eventEmitter.emit("receipt",t),e.resolve(t),y.isFunction(r)&&r(t)})).on("error",(function(t){e.eventEmitter.emit("error",t),e.reject(t),y.isFunction(r)&&r(t)})),e},d.prototype.prepareArguments=function(e,t){var n=r.hash(e);return t.length>0?(t.unshift(n),t):[n]},e.exports=d}}]);