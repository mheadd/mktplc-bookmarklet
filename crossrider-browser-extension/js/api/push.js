var Push=function(c){this._connected=!1;this.connect=function(a){"undefined"!==typeof Crossrider?Crossrider.connect():chrome.extension.sendRequest({action:"connect",passCallback:!0},function(){this._connected=!0;"function"===typeof a&&a.call(this)}.bind(this))};this.publish=function(a,b){"undefined"!==typeof Crossrider?Crossrider.publish(a,b):chrome.extension.sendRequest({action:"publish",params:[a,b]},function(){})};this.subscribe=function(a,b,e){if("undefined"!==typeof Crossrider)Crossrider.subscribe(a,
b);else{var d=e?"asyncCallbacks":"callbacks";c._faye[d][a]&&delete c._faye[d][a];var f=function(){chrome.extension.sendRequest({action:"subscribe",params:[a,null,c.tabID,e]},function(){c._faye[d][a]=b}.bind(this))}.bind(this);this._connected?f():this.connect(f)}};this.unsubscribe=function(a,b){if("undefined"!==typeof Crossrider)Crossrider.unsubscribe(a,"background");else if(c._faye[b?"asyncCallbacks":"callbacks"][a])delete c._faye[b?"asyncCallbacks":"callbacks"][a],chrome.extension.sendRequest({action:"unsubscribe",
params:[a,c.tabID,b]},function(){})};return this};