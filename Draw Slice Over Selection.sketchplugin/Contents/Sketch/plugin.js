!function(e,t){for(var n in t)e[n]=t[n]}(this,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"CHECK_BOX",function(){return g}),n.d(r,"DROP_DOWN",function(){return S}),n.d(r,"RADIO_BUTTONS",function(){return x}),n.d(r,"NUMERIC_TEXT_BOX",function(){return w.a}),n.d(r,"STRING_TEXT_BOX",function(){return N}),n.d(r,"TEXT_BOX",function(){});var o=n(1);function i(e){const t={};return function e(t,n,r){Object.keys(t).forEach(function(o){const i=[n,o].filter(Boolean).join("."),c=t[o];"object"!=typeof c||null===c||Array.isArray(c)?r[i]=t[o]:e(c,i,r)})}(e,null,t),t}const c=/\./;function u(e){const t={};return Object.keys(e).forEach(function(n){!function e(t,n,r){const o=t[0];if(1===t.length)return void(r[o]=n);null==r[o]&&(r[o]={});e(t.slice(1),n,r[o])}(n.split(c),e[n],t)}),t}function s(){const e={backgroundColor:"#f9f9f9",padding:100};if(!e)return{};const t={},n=i(e);return Object.keys(n).forEach(function(e){const r=Object(o.sessionVariable)(e),i=Object(o.settingForKey)(e),c=void 0!==r?r:i,u=n[e];t[e]=void 0!==c?c:u}),u(t)}const a=1,l=10,f=17;const d=2,b=20,y=2;const h=20,_=10;function g({width:e,y:t,label:n,value:r}){const o=NSButton.alloc().initWithFrame(NSMakeRect(0,t,e,h));return o.setButtonType(NSSwitchButton),o.setBezelStyle(0),o.setState(r?NSOnState:NSOffState),o.setTitle(n),{view:o,height:h+_,retrieveValue:function(){return"1"==o.stringValue()}}}const p=20,v=15;function S({width:e,y:t,value:n,possibleValues:r}){const o=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,t,e,p));r.forEach(function(e){o.addItemWithTitle(`${e}`)});const i=void 0!==n?r.indexOf(n):0;return o.selectItemAtIndex(i),{view:o,height:p+v,retrieveValue:function(){const e=o.indexOfSelectedItem();return r[e]}}}const O=20,m=10;function x({width:e,y:t,value:n,possibleValues:r}){const o=NSButtonCell.alloc().init();o.setButtonType(NSRadioButton);const i=r.length,c=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,t,e,O),NSRadioModeMatrix,o,1,i);c.setCellSize(CGSizeMake(Math.floor(e/i),O)),c.cells().forEach(function(e,t){e.setTitle(r[t])});const u=void 0!==n?r.indexOf(n):0;return c.selectCellAtRow_column(0,u),{view:c,height:O+m,retrieveValue:function(){const e=c.cells().indexOfObject(c.selectedCell());return r[e]}}}var w=n(4),k=n(2);const N=Object(k.a)(),M=300;function j({title:e,inputs:t}){const n=i(s()),{formView:o,retrieveValues:c}=function({inputsConfig:e,settings:t}){const n=NSView.alloc().init();n.setFlipped(!0);const o={};let i=0;e.forEach(function(e){if("-"===e){const{view:e,height:t}=function({width:e,y:t}){const n=NSView.alloc().initWithFrame(NSMakeRect(0,t+l,e,a));return n.setWantsLayer(1),n.layer().setBackgroundColor(CGColorCreateGenericRGB(127/255,127/255,127/255,.5)),{view:n,height:l+a+f}}({width:M,y:i});return i+=t,void n.addSubview(e)}const{type:c,key:u,label:s,value:h,..._}=e;if(s&&"CHECK_BOX"!==c){const{view:e,height:t}=function({width:e,y:t,label:n}){const r=NSTextField.alloc().initWithFrame(NSMakeRect(0,t+d,e,b));return r.setBezeled(!1),r.setDrawsBackground(!1),r.setEditable(!1),r.setLineBreakMode(NSLineBreakByTruncatingTail),r.setSelectable(!1),r.setStringValue(n),{view:r,height:d+b+y}}({width:M,y:i,label:s});i+=t,n.addSubview(e)}const g=t[u],p=null!=h?h:g,{view:v,height:S,retrieveValue:O}=r[c]({width:M,y:i,label:s,value:p,..._});i+=S,n.addSubview(v),o[u]=O});const c=n.subviews();return c.forEach(function(e,t){t<c.length-1&&e.setNextKeyView(c[t+1])}),n.setFrame(NSMakeRect(0,0,M,i)),{formView:n,retrieveValues:o}}({inputsConfig:t.filter(Boolean),settings:n}),h=function(e){const t=NSAlert.alloc().init();return t.setMessageText(e),t.addButtonWithTitle("OK"),t.addButtonWithTitle("Cancel"),t}(e);h.setAccessoryView(o);const _=o.subviews();if(_[0]&&h.window().setInitialFirstResponder(_[0]),"1000"==h.runModal()){const e={};return Object.keys(c).forEach(function(t){const n=c[t];e[t]=n()}),u(e)}return null}var B=n(5),T=n.n(B);function C(e,t){T.a.message(t&&t.symbol?`${t.symbol} ${e}`:e)}function E(e){C(e,{symbol:"✔"})}function V(e){C(e,{symbol:"✘"})}function R(){const e={backgroundColor:"#f9f9f9",padding:100};if(!e)return;const t=i(e);Object.keys(t).forEach(function(e){Object(o.setSettingForKey)(e,void 0),Object(o.setSessionVariable)(e,void 0)}),C("Reset settings")}const A=X(o.setSettingForKey);X(o.setSessionVariable);function X(e){return function(t,n){if(!t)return;const r=i(t);Object.keys(r).forEach(function(t){const n=r[t];null!=n&&e(t,n)});const o=n&&n.successMessage;o&&C(o)}}n(6),n(7);n(3);var I=n(8);function P(){const e=NSApplication.sharedApplication().orderedDocuments();return Object(I.fromNative)(e[0])}function F(e){return P().selectedPage.sketchObject.addLayers(e)}function W(){return P().selectedPage.layers}function L(){return P().selectedLayers.layers.reverse()}function D(e){return function e(t,n){const r=t.parent;if("Page"===r.type)return n;const o={x:n.x+r.frame.x,y:n.y+r.frame.y};if("Artboard"===r.type)return o;return e(r,o)}(e,{x:e.frame.x,y:e.frame.y})}n.d(t,"g",function(){return s}),n.d(t,"h",function(){return j}),n.d(t,"i",function(){return R}),n.d(t,"j",function(){return A}),n.d(t,"a",function(){return"NUMERIC_TEXT_BOX"}),n.d(t,"b",function(){return"STRING_TEXT_BOX"}),n.d(t,"c",function(){return F}),n.d(t,"d",function(){return D}),n.d(t,"e",function(){return W}),n.d(t,"f",function(){return L}),n.d(t,"l",function(){return E}),n.d(t,"k",function(){return V})},function(e,t){e.exports=require("sketch/settings")},function(e,t,n){"use strict";n.d(t,"a",function(){return i});const r=20,o=15;function i(e){return function({width:t,y:n,value:i,placeholder:c}){const u=NSTextField.alloc().initWithFrame(NSMakeRect(0,n,t,r)),s=null==i?"":`${i}`;return u.setStringValue(s),c&&u.setPlaceholderString(c),{view:u,height:r+o,retrieveValue:function(){const t=`${u.stringValue()}`;return e?e(t):t}}}}},function(e,t){e.exports=require("sketch/dom")},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return createNumericTextBox});var _text_box_factory__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);const createNumericTextBox=Object(_text_box_factory__WEBPACK_IMPORTED_MODULE_0__.a)(function(value){return parseFloat(eval(value))})},function(e,t){e.exports=require("sketch/ui")},function(e,t){e.exports=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}},function(e,t,n){"use strict";const r=async(e,t)=>{let n=0;for(const r of e)await t(await r,n++);return e};e.exports=r,e.exports.default=r},function(e,t){e.exports=require("sketch")},function(e,t,n){e.exports=n(10)},function(e,t,n){e.exports={"draw-slice-over-selection/draw-slice-over-selection":n(13).default,"settings/settings":n(11).default,"settings/reset-settings":n(12).default}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var r=n(0);const o={title:"Settings for Draw Slice Over Selection",inputs:[{type:r.b,key:"backgroundColor",label:"Background Color"},{type:r.a,key:"padding",label:"Padding"}]};function i(){const e=Object(r.h)(o);e&&Object(r.j)(e,{successMessage:"Settings saved"})}},function(e,t,n){"use strict";n.r(t);var r=n(0);t.default=r.i},function(e,t,n){"use strict";n.r(t);var r=n(0);const o="@SliceOverSelection";function i({maximumBounds:e,backgroundColor:t,padding:n}){const r=MSSliceLayer.new(),i=r.frame();if(i.setX(e[0].x-n),i.setY(e[0].y-n),i.setWidth(e[1].x-e[0].x+2*n),i.setHeight(e[1].y-e[0].y+2*n),""!==t&&"#"===t.charAt(0)){r.hasBackgroundColor=!0;const e=(c=t,{r:parseInt(c.substr(1,2),16),g:parseInt(c.substr(3,2),16),b:parseInt(c.substr(5,2),16)});r.setBackgroundColor(MSColor.colorWithRed_green_blue_alpha(e.r/255,e.g/255,e.b/255,1))}var c;return r.setName(o),r.setIsLocked(!0),r}function c({settings:e}){e=e||Object(r.g)();const t=Object(r.f)(),n=t.length>0,o=n?t:Object(r.e)();if(0===o.length)return void Object(r.k)("No layers");const c=function(e){let t=[{x:Number.MAX_VALUE,y:Number.MAX_VALUE},{x:-1*Number.MAX_VALUE,y:-1*Number.MAX_VALUE}];return e.forEach(function(e){const{width:n,height:o}=e.frame,{x:i,y:c}=Object(r.d)(e);t=[{x:Math.min(t[0].x,i),y:Math.min(t[0].y,c)},{x:Math.max(t[1].x,i+n),y:Math.max(t[1].y,c+o)}]}),t}(o),{backgroundColor:u,padding:s}=e,a=i({maximumBounds:c,backgroundColor:u,padding:s});Object(r.c)([a]),Object(r.l)(`Drew slice over ${n?"selection":"all layers"}`)}n.d(t,"default",function(){return c})}]));