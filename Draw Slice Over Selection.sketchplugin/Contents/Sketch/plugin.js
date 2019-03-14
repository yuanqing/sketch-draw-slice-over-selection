!function(e,t){for(var n in t)e[n]=t[n]}(this,function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){e.exports={openSettingsDialog:n(7),readSettings:n(2),saveSettings:n(17),...n(18),...n(19)}},function(e,t,n){e.exports={TEXT_BOX:n(11),RADIO_BUTTONS:n(12),DROP_DOWN:n(13)}},function(e,t,n){const i=n(3),{packageJsonConfigKey:o}=n(14),r=n(15);e.exports=function(){const{defaultSettings:e}=r()[o];return Object.keys(e).reduce(function(t,n){const o=i.settingForKey(n),r=e[n];return t[n]=void 0!==o?o:r,t},{})}},function(e,t){e.exports=require("sketch/settings")},function(e,t){e.exports=require("sketch/ui")},function(e,t,n){e.exports={"draw-slice-over-selection":n(6).default}},function(e,t,n){"use strict";n.r(t);const{getAllLayers:i,getPage:o,getSelectedLayers:r,openSettingsDialog:s,saveSettings:c,showMessage:u}=n(0),a=n(21),l=n(22),d=n(23);t.default=function(){const e=s(d);e&&c({settings:e});const t=r(),n=t.length>0,f=n?t:i();if(0==f.length)return;const g=a(f),p=l(e,g);o().sketchObject.addLayers([p]),u(n?"Drew Slice over selection":"Drew Slice over all layers")}},function(e,t,n){const i=n(8),o=n(9),r=n(10),s=n(1),c=n(2),{inputHeight:u,inputPaddingBottom:a,labelHeight:l,labelPaddingBottom:d,width:f}=n(16);e.exports=function({title:e,inputs:t}){const n=c(),{inputs:g,views:p,stackViewHeight:h}=function({inputsConfig:e,settings:t}){const n={},i=[];let r=0;return e.forEach(function({type:e,key:c,label:g,...p}){if(g){const e=o({label:g,width:f,height:l});i.push({view:e,paddingBottom:d}),r+=l+d}const h=t[c],{view:S,retrieveValue:y}=s[e]({value:h,width:f,height:u,...p});i.push({view:S,paddingBottom:a}),r+=u+a,n[c]=y}),{inputs:n,views:i,stackViewHeight:r-=a}}({inputsConfig:t,settings:n}),S=r({width:f,height:h,views:p}),y=i(e);return y.setAccessoryView(S),"1000"==y.runModal()?Object.keys(g).reduce(function(e,t){const n=g[t];return e[t]=n(),e},{}):null}},function(e,t){e.exports=function(e){const t=NSAlert.alloc().init();return t.window().setAutorecalculatesKeyViewLoop(!0),t.setMessageText(e),t.addButtonWithTitle("OK"),t.addButtonWithTitle("Cancel"),t}},function(e,t){e.exports=function({label:e,width:t,height:n}){const i=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,t,n));return i.setBezeled(!1),i.setDrawsBackground(!1),i.setEditable(!1),i.setLineBreakMode(NSLineBreakByTruncatingTail),i.setSelectable(!1),i.setStringValue(e),i}},function(e,t){e.exports=function({width:e,height:t,views:n}){const i=NSStackView.alloc().initWithFrame(NSMakeRect(0,0,e,t));return i.setAlignment(NSLayoutAttributeLeft),i.setOrientation(NSUserInterfaceLayoutOrientationVertical),i.setSpacing(0),i.setTranslatesAutoresizingMaskIntoConstraints(!0),i.updateConstraintsForSubtreeIfNeeded(),n.forEach(function({view:e,paddingBottom:t}){i.addView_inGravity_(e,NSStackViewGravityTop),i.setCustomSpacing_afterView_(t,e)}),i}},function(e,t){e.exports=function({width:e,height:t,value:n,placeholder:i}){const o=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,e,t));return o.setStringValue(n),i&&o.setPlaceholderString(i),{view:o,retrieveValue:function(){return o.stringValue()}}}},function(e,t){e.exports=function({width:e,height:t,value:n,possibleValues:i}){const o=NSButtonCell.alloc().init();o.setButtonType(NSRadioButton);const r=i.length,s=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,0,e,t),NSRadioModeMatrix,o,1,r);s.setCellSize(CGSizeMake(Math.floor(e/r),t)),s.cells().forEach(function(e,t){e.setTitle(i[t])});const c=i.indexOf(n);return s.selectCellAtRow_column(0,c),{view:s,retrieveValue:function(){const e=s.cells().indexOfObject(s.selectedCell());return i[e]}}}},function(e,t){e.exports=function({width:e,height:t,value:n,possibleValues:i}){const o=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,0,e,t));i.forEach(function(e){o.addItemWithTitle(e)});const r=i.indexOf(n);return o.selectItemAtIndex(r),{view:o,retrieveValue:function(){const e=o.indexOfSelectedItem();return i[e]}}}},function(e,t){e.exports={appcastFileName:"appcast.xml",bundleFileName:"plugin.js",manifestFileName:"manifest.json",packageJsonConfigKey:"sketch-plugin-helper",sourceDirectory:"./src"}},function(e,t){e.exports=function(){return JSON.parse('{\n  "private": true,\n  "version": "0.3.1",\n  "devDependencies": {\n    "sketch-plugin-helper": "/Users/yuanqing/Desktop/Git/sketch-plugin-helper"\n  },\n  "sketch-plugin-helper": {\n    "pluginName": "Draw Slice Over Selection",\n    "pluginDescription": "A Sketch plugin to draw a slice over the selection",\n    "authorName": "Lim Yuan Qing",\n    "githubUserName": "yuanqing",\n    "githubRepositoryName": "sketch-draw-slice-over-selection",\n    "menu": [\n      {\n        "handler": "draw-slice-over-selection",\n        "label": "Draw Slice Over Selection"\n      }\n    ],\n    "defaultSettings": {\n      "backgroundColor": "#f9f9f9",\n      "padding": "100"\n    }\n  }\n}\n')}},function(e,t){e.exports={inputHeight:20,inputPaddingBottom:12,labelHeight:20,labelPaddingBottom:6,width:300}},function(e,t,n){const i=n(3),o=n(4);e.exports=function({settings:e,successMessage:t}){void 0!==e&&(Object.keys(e).forEach(function(t){const n=e[t];void 0!==n&&i.setSettingForKey(t,n)}),t&&o.message(t))}},function(e,t,n){const i=n(1),o=Object.keys(i).reduce(function(e,t){return e[t]=t,e},{});e.exports=o},function(e,t,n){const i=n(20),o=n(4);function r(){return i.getSelectedDocument().selectedPage.layers}e.exports={getAllArtboards:function(){return r().filter(function(e){return"Artboard"==e.type})},getAllLayers:r,getPage:function(){return i.getSelectedDocument().selectedPage},getSelectedLayers:function(){return i.getSelectedDocument().selectedLayers},showMessage:function(e){o.message(e)}}},function(e,t){e.exports=require("sketch/dom")},function(e,t){e.exports=function(e){let t=[{x:Number.MAX_VALUE,y:Number.MAX_VALUE},{x:-1*Number.MAX_VALUE,y:-1*Number.MAX_VALUE}];return e.forEach(function(e){const{x:n,y:i,width:o,height:r}=e.frame;t=[{x:Math.min(t[0].x,n),y:Math.min(t[0].y,i)},{x:Math.max(t[1].x,n+o),y:Math.max(t[1].y,i+r)}]}),t}},function(e,t){const n="@SliceOverSelection";e.exports=function({backgroundColor:e,padding:t},i){const o=MSSliceLayer.new(),r=o.frame();if(r.setX(i[0].x-t),r.setY(i[0].y-t),r.setWidth(i[1].x-i[0].x+2*t),r.setHeight(i[1].y-i[0].y+2*t),""!=e&&"#"==e.charAt(0)){o.hasBackgroundColor=!0;const t=(s=e,{r:parseInt(s.substr(1,2),16),g:parseInt(s.substr(3,2),16),b:parseInt(s.substr(5,2),16)});o.setBackgroundColor(MSColor.colorWithRed_green_blue_alpha(t.r/255,t.g/255,t.b/255,1))}var s;return o.setName(n),o.setIsLocked(!0),o}},function(e,t,n){const{TEXT_BOX:i}=n(0);e.exports={title:"Draw Slice Over Selection",inputs:[{key:"backgroundColor",label:"Background Color",type:i},{key:"padding",label:"Padding",type:i}]}}]));