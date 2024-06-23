"use strict";(self["webpackChunkvueShoppingCart"]=self["webpackChunkvueShoppingCart"]||[]).push([[943],{8246:function(e,t,s){s.d(t,{A:function(){return c}});s(4114);var i=s(1723),n=s(5471),l=s(9456),o=s(8767),a=s(3661),r=s(4961),h=s(6960),c=n.Ay.extend({name:"v-simple-checkbox",functional:!0,directives:{Ripple:i.A},props:{...o.A.options.props,...a.A.options.props,disabled:Boolean,ripple:{type:Boolean,default:!0},value:Boolean,indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},onIcon:{type:String,default:"$checkboxOn"},offIcon:{type:String,default:"$checkboxOff"}},render(e,{props:t,data:s,listeners:n}){const a=[];let c=t.offIcon;if(t.indeterminate?c=t.indeterminateIcon:t.value&&(c=t.onIcon),a.push(e(l.A,o.A.options.methods.setTextColor(t.value&&t.color,{props:{disabled:t.disabled,dark:t.dark,light:t.light}}),c)),t.ripple&&!t.disabled){const s=e("div",o.A.options.methods.setTextColor(t.color,{staticClass:"v-input--selection-controls__ripple",directives:[{def:i.A,name:"ripple",value:{center:!0}}]}));a.push(s)}return e("div",(0,r.Ay)(s,{class:{"v-simple-checkbox":!0,"v-simple-checkbox--disabled":t.disabled},on:{click:e=>{e.stopPropagation(),s.on&&s.on.input&&!t.disabled&&(0,h.BN)(s.on.input).forEach((e=>e(!t.value)))}}}),[e("div",{staticClass:"v-input--selection-controls__input"},a)])}})},3882:function(e,t,s){s.d(t,{A:function(){return m}});s(4114);var i=s(3507),n=s(1906),l=s(7889),o=s(8767),a=s(4387),r=s(3661),h=s(9748),c=s(8010),u=s(1713),d=s(5604),p=s(6960),m=(0,i.A)(o.A,u.A,c.A,r.A,(0,a.P)("chipGroup"),(0,h.P)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...c.A.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(c.A.options.computed.isClickable.call(this)||this.chipGroup)}},created(){const e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((([e,t])=>{this.$attrs.hasOwnProperty(e)&&(0,d.q4)(e,t,this)}))},methods:{click(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter(){const e=[];return this.isActive&&e.push(this.$createElement(l.A,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(n.SM,e)},genClose(){return this.$createElement(l.A,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:e=>{e.stopPropagation(),e.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),(0,p.$c)(this),this.hasClose&&this.genClose()])}},render(e){const t=[this.genContent()];let{tag:s,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const n=this.textColor||this.outlined&&this.color;return e(s,this.setTextColor(n,i),t)}})},654:function(e,t,s){var i=s(3882);t.A=i.A},7410:function(e,t,s){s(158);var i=s(6960);t.A=(0,i.Gn)("spacer","div","v-spacer")},1556:function(e,t,s){s.d(t,{A:function(){return E}});s(4114),s(8245);var i=s(654),n=s(6160),l=n.A,o=s(8246),a=s(1770),r=a.A,h=s(2006),c=h.A,u=s(1075),d=s(6315),p=s(7382),m=s(2987),v=s(1723),g=s(8767),f=s(3661),y=s(6960),$=s(3507),b=(0,$.A)(g.A,f.A).extend({name:"v-select-list",directives:{ripple:v.A},props:{action:Boolean,dense:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},noDataText:String,noFilter:Boolean,searchInput:null,selectedItems:{type:Array,default:()=>[]}},computed:{parsedItems(){return this.selectedItems.map((e=>this.getValue(e)))},tileActiveClass(){return Object.keys(this.setTextColor(this.color).class||{}).join(" ")},staticNoDataTile(){const e={attrs:{role:void 0},on:{mousedown:e=>e.preventDefault()}};return this.$createElement(u.A,e,[this.genTileContent(this.noDataText)])}},methods:{genAction(e,t){return this.$createElement(d.A,[this.$createElement(o.A,{props:{color:this.color,value:t,ripple:!1},on:{input:()=>this.$emit("select",e)}})])},genDivider(e){return this.$createElement(r,{props:e})},genFilteredText(e){if(e=e||"",!this.searchInput||this.noFilter)return e;const{start:t,middle:s,end:i}=this.getMaskedCharacters(e);return[t,this.genHighlight(s),i]},genHeader(e){return this.$createElement(c,{props:e},e.header)},genHighlight(e){return this.$createElement("span",{staticClass:"v-list-item__mask"},e)},getMaskedCharacters(e){const t=(this.searchInput||"").toString().toLocaleLowerCase(),s=e.toLocaleLowerCase().indexOf(t);if(s<0)return{start:e,middle:"",end:""};const i=e.slice(0,s),n=e.slice(s,s+t.length),l=e.slice(s+t.length);return{start:i,middle:n,end:l}},genTile({item:e,index:t,disabled:s=null,value:i=!1}){i||(i=this.hasItem(e)),e===Object(e)&&(s=null!==s?s:this.getDisabled(e));const n={attrs:{"aria-selected":String(i),id:`list-item-${this._uid}-${t}`,role:"option"},on:{mousedown:e=>{e.preventDefault()},click:()=>s||this.$emit("select",e)},props:{activeClass:this.tileActiveClass,disabled:s,ripple:!0,inputValue:i}};if(!this.$scopedSlots.item)return this.$createElement(u.A,n,[this.action&&!this.hideSelected&&this.items.length>0?this.genAction(e,i):null,this.genTileContent(e,t)]);const l=this,o=this.$scopedSlots.item({parent:l,item:e,attrs:{...n.attrs,...n.props},on:n.on});return this.needsTile(o)?this.$createElement(u.A,n,o):o},genTileContent(e,t=0){return this.$createElement(p.pr,[this.$createElement(p.UZ,[this.genFilteredText(this.getText(e))])])},hasItem(e){return this.parsedItems.indexOf(this.getValue(e))>-1},needsTile(e){return 1!==e.length||null==e[0].componentOptions||"v-list-item"!==e[0].componentOptions.Ctor.options.name},getDisabled(e){return Boolean((0,y.TD)(e,this.itemDisabled,!1))},getText(e){return String((0,y.TD)(e,this.itemText,e))},getValue(e){return(0,y.TD)(e,this.itemValue,this.getText(e))}},render(){const e=[],t=this.items.length;for(let s=0;s<t;s++){const t=this.items[s];this.hideSelected&&this.hasItem(t)||(null==t?e.push(this.genTile({item:t,index:s})):t.header?e.push(this.genHeader(t)):t.divider?e.push(this.genDivider(t)):e.push(this.genTile({item:t,index:s})))}return e.length||e.push(this.$slots["no-data"]||this.staticNoDataTile),this.$slots["prepend-item"]&&e.unshift(this.$slots["prepend-item"]),this.$slots["append-item"]&&e.push(this.$slots["append-item"]),this.$createElement(m.A,{staticClass:"v-select-list",class:this.themeClasses,attrs:{role:"listbox",tabindex:-1},on:{mousedown:e=>{e.preventDefault()}},props:{dense:this.dense}},e)}}),I=s(3960),A=s(3406),x=s(5088),C=s(9623),S=s(5471),k=S.Ay.extend({name:"filterable",props:{noDataText:{type:String,default:"$vuetify.noDataText"}}}),T=s(8734),w=s(4961),D=s(5604);const P={closeOnClick:!1,closeOnContentClick:!1,disableKeys:!0,openOnClick:!1,maxHeight:304},M=(0,$.A)(A.A,x.A,C.A,k);var E=M.extend().extend({name:"v-select",directives:{ClickOutside:T.A},props:{appendIcon:{type:String,default:"$dropdown"},attach:{type:null,default:!1},cacheItems:Boolean,chips:Boolean,clearable:Boolean,deletableChips:Boolean,disableLookup:Boolean,eager:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemColor:{type:String,default:"primary"},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},menuProps:{type:[String,Array,Object],default:()=>P},multiple:Boolean,openOnClear:Boolean,returnObject:Boolean,smallChips:Boolean},data(){return{cachedItems:this.cacheItems?this.items:[],menuIsBooted:!1,isMenuActive:!1,lastItem:20,lazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,selectedIndex:-1,selectedItems:[],keyboardLookupPrefix:"",keyboardLookupLastTime:0}},computed:{allItems(){return this.filterDuplicates(this.cachedItems.concat(this.items))},classes(){return{...A.A.options.computed.classes.call(this),"v-select":!0,"v-select--chips":this.hasChips,"v-select--chips--small":this.smallChips,"v-select--is-menu-active":this.isMenuActive,"v-select--is-multi":this.multiple}},computedItems(){return this.allItems},computedOwns(){return`list-${this._uid}`},computedCounterValue(){var e;const t=this.multiple?this.selectedItems:(null!==(e=this.getText(this.selectedItems[0]))&&void 0!==e?e:"").toString();return"function"===typeof this.counterValue?this.counterValue(t):t.length},directives(){return this.isFocused?[{name:"click-outside",value:{handler:this.blur,closeConditional:this.closeConditional,include:()=>this.getOpenDependentElements()}}]:void 0},dynamicHeight(){return"auto"},hasChips(){return this.chips||this.smallChips},hasSlot(){return Boolean(this.hasChips||this.$scopedSlots.selection)},isDirty(){return this.selectedItems.length>0},listData(){const e=this.$vnode&&this.$vnode.context.$options._scopeId,t=e?{[e]:!0}:{};return{attrs:{...t,id:this.computedOwns},props:{action:this.multiple,color:this.itemColor,dense:this.dense,hideSelected:this.hideSelected,items:this.virtualizedItems,itemDisabled:this.itemDisabled,itemText:this.itemText,itemValue:this.itemValue,noDataText:this.$vuetify.lang.t(this.noDataText),selectedItems:this.selectedItems},on:{select:this.selectItem},scopedSlots:{item:this.$scopedSlots.item}}},staticList(){return(this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"])&&(0,D.yA)("assert: staticList should not be called if slots are used"),this.$createElement(b,this.listData)},virtualizedItems(){return this.$_menuProps.auto?this.computedItems:this.computedItems.slice(0,this.lastItem)},menuCanShow:()=>!0,$_menuProps(){let e="string"===typeof this.menuProps?this.menuProps.split(","):this.menuProps;return Array.isArray(e)&&(e=e.reduce(((e,t)=>(e[t.trim()]=!0,e)),{})),{...P,eager:this.eager,value:this.menuCanShow&&this.isMenuActive,nudgeBottom:e.offsetY?1:0,...e}}},watch:{internalValue(e){this.initialValue=e,this.setSelectedItems(),this.multiple&&this.$nextTick((()=>{var e;null===(e=this.$refs.menu)||void 0===e||e.updateDimensions()})),this.hideSelected&&this.$nextTick((()=>{this.onScroll()}))},isMenuActive(e){window.setTimeout((()=>this.onMenuActiveChange(e)))},items:{immediate:!0,handler(e){this.cacheItems&&this.$nextTick((()=>{this.cachedItems=this.filterDuplicates(this.cachedItems.concat(e))})),this.setSelectedItems()}}},methods:{blur(e){A.A.options.methods.blur.call(this,e),this.isMenuActive=!1,this.isFocused=!1,this.selectedIndex=-1,this.setMenuIndex(-1)},activateMenu(){this.isInteractive&&!this.isMenuActive&&(this.isMenuActive=!0)},clearableCallback(){this.setValue(this.multiple?[]:null),this.setMenuIndex(-1),this.$nextTick((()=>this.$refs.input&&this.$refs.input.focus())),this.openOnClear&&(this.isMenuActive=!0)},closeConditional(e){return!this.isMenuActive||!this._isDestroyed&&(!this.getContent()||!this.getContent().contains(e.target))&&this.$el&&!this.$el.contains(e.target)&&e.target!==this.$el},filterDuplicates(e){const t=new Map;for(let s=0;s<e.length;++s){const i=e[s];if(null==i)continue;if(i.header||i.divider){t.set(i,i);continue}const n=this.getValue(i);!t.has(n)&&t.set(n,i)}return Array.from(t.values())},findExistingIndex(e){const t=this.getValue(e);return(this.internalValue||[]).findIndex((e=>this.valueComparator(this.getValue(e),t)))},getContent(){return this.$refs.menu&&this.$refs.menu.$refs.content},genChipSelection(e,t){const s=this.isDisabled||this.getDisabled(e),n=!s&&this.isInteractive;return this.$createElement(i.A,{staticClass:"v-chip--select",attrs:{tabindex:-1},props:{close:this.deletableChips&&n,disabled:s,inputValue:t===this.selectedIndex,small:this.smallChips},on:{click:e=>{n&&(e.stopPropagation(),this.selectedIndex=t)},"click:close":()=>this.onChipInput(e)},key:JSON.stringify(this.getValue(e))},this.getText(e))},genCommaSelection(e,t,s){const i=t===this.selectedIndex&&this.computedColor,n=this.isDisabled||this.getDisabled(e);return this.$createElement("div",this.setTextColor(i,{staticClass:"v-select__selection v-select__selection--comma",class:{"v-select__selection--disabled":n},key:JSON.stringify(this.getValue(e))}),`${this.getText(e)}${s?"":", "}`)},genDefaultSlot(){const e=this.genSelections(),t=this.genInput();return Array.isArray(e)?e.push(t):(e.children=e.children||[],e.children.push(t)),[this.genFieldset(),this.$createElement("div",{staticClass:"v-select__slot",directives:this.directives},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,e,this.suffix?this.genAffix("suffix"):null,this.genClearIcon(),this.genIconSlot(),this.genHiddenInput()]),this.genMenu(),this.genProgress()]},genIcon(e,t,s){const i=I.A.options.methods.genIcon.call(this,e,t,s);return"append"===e&&(i.children[0].data=(0,w.Ay)(i.children[0].data,{attrs:{tabindex:i.children[0].componentOptions.listeners&&"-1","aria-hidden":"true","aria-label":void 0}})),i},genInput(){const e=A.A.options.methods.genInput.call(this);return delete e.data.attrs.name,e.data=(0,w.Ay)(e.data,{domProps:{value:null},attrs:{readonly:!0,type:"text","aria-readonly":String(this.isReadonly),"aria-activedescendant":(0,y.no)(this.$refs.menu,"activeTile.id"),autocomplete:(0,y.no)(e.data,"attrs.autocomplete","off"),placeholder:this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?void 0:this.placeholder},on:{keypress:this.onKeyPress}}),e},genHiddenInput(){return this.$createElement("input",{domProps:{value:this.lazyValue},attrs:{type:"hidden",name:this.attrs$.name}})},genInputSlot(){const e=A.A.options.methods.genInputSlot.call(this);return e.data.attrs={...e.data.attrs,role:"button","aria-haspopup":"listbox","aria-expanded":String(this.isMenuActive),"aria-owns":this.computedOwns},e},genList(){return this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"]?this.genListWithSlot():this.staticList},genListWithSlot(){const e=["prepend-item","no-data","append-item"].filter((e=>this.$slots[e])).map((e=>this.$createElement("template",{slot:e},this.$slots[e])));return this.$createElement(b,{...this.listData},e)},genMenu(){const e=this.$_menuProps;return e.activator=this.$refs["input-slot"],"attach"in e||(""===this.attach||!0===this.attach||"attach"===this.attach?e.attach=this.$el:e.attach=this.attach),this.$createElement(l,{attrs:{role:void 0},props:e,on:{input:e=>{this.isMenuActive=e,this.isFocused=e},scroll:this.onScroll},ref:"menu"},[this.genList()])},genSelections(){let e=this.selectedItems.length;const t=new Array(e);let s;s=this.$scopedSlots.selection?this.genSlotSelection:this.hasChips?this.genChipSelection:this.genCommaSelection;while(e--)t[e]=s(this.selectedItems[e],e,e===t.length-1);return this.$createElement("div",{staticClass:"v-select__selections"},t)},genSlotSelection(e,t){return this.$scopedSlots.selection({attrs:{class:"v-chip--select"},parent:this,item:e,index:t,select:e=>{e.stopPropagation(),this.selectedIndex=t},selected:t===this.selectedIndex,disabled:!this.isInteractive})},getMenuIndex(){return this.$refs.menu?this.$refs.menu.listIndex:-1},getDisabled(e){return(0,y.TD)(e,this.itemDisabled,!1)},getText(e){return(0,y.TD)(e,this.itemText,e)},getValue(e){return(0,y.TD)(e,this.itemValue,this.getText(e))},onBlur(e){e&&this.$emit("blur",e)},onChipInput(e){this.multiple?this.selectItem(e):this.setValue(null),0===this.selectedItems.length?this.isMenuActive=!0:this.isMenuActive=!1,this.selectedIndex=-1},onClick(e){this.isInteractive&&(this.isAppendInner(e.target)||(this.isMenuActive=!0),this.isFocused||(this.isFocused=!0,this.$emit("focus")),this.$emit("click",e))},onEscDown(e){e.preventDefault(),this.isMenuActive&&(e.stopPropagation(),this.isMenuActive=!1)},onKeyPress(e){if(this.multiple||!this.isInteractive||this.disableLookup||e.key.length>1||e.ctrlKey||e.metaKey||e.altKey)return;const t=1e3,s=performance.now();s-this.keyboardLookupLastTime>t&&(this.keyboardLookupPrefix=""),this.keyboardLookupPrefix+=e.key.toLowerCase(),this.keyboardLookupLastTime=s;const i=this.allItems.findIndex((e=>{var t;const s=(null!==(t=this.getText(e))&&void 0!==t?t:"").toString();return s.toLowerCase().startsWith(this.keyboardLookupPrefix)})),n=this.allItems[i];-1!==i&&(this.lastItem=Math.max(this.lastItem,i+5),this.setValue(this.returnObject?n:this.getValue(n)),this.$nextTick((()=>this.$refs.menu.getTiles())),setTimeout((()=>this.setMenuIndex(i))))},onKeyDown(e){if(this.isReadonly&&e.keyCode!==y.uP.tab)return;const t=e.keyCode,s=this.$refs.menu;return this.$emit("keydown",e),s?(this.isMenuActive&&[y.uP.up,y.uP.down,y.uP.home,y.uP.end,y.uP.enter].includes(t)&&this.$nextTick((()=>{s.changeListIndex(e),this.$emit("update:list-index",s.listIndex)})),[y.uP.enter,y.uP.space].includes(t)&&this.activateMenu(),!this.isMenuActive&&[y.uP.up,y.uP.down,y.uP.home,y.uP.end].includes(t)?this.onUpDown(e):t===y.uP.esc?this.onEscDown(e):t===y.uP.tab?this.onTabDown(e):t===y.uP.space?this.onSpaceDown(e):void 0):void 0},onMenuActiveChange(e){if(this.multiple&&!e||this.getMenuIndex()>-1)return;const t=this.$refs.menu;if(t&&this.isDirty){this.$refs.menu.getTiles();for(let e=0;e<t.tiles.length;e++)if("true"===t.tiles[e].getAttribute("aria-selected")){this.setMenuIndex(e);break}}},onMouseUp(e){this.hasMouseDown&&3!==e.which&&this.isInteractive&&this.isAppendInner(e.target)&&this.$nextTick((()=>this.isMenuActive=!this.isMenuActive)),A.A.options.methods.onMouseUp.call(this,e)},onScroll(){if(this.isMenuActive){if(this.lastItem>this.computedItems.length)return;const e=this.getContent().scrollHeight-(this.getContent().scrollTop+this.getContent().clientHeight)<200;e&&(this.lastItem+=20)}else requestAnimationFrame((()=>{const e=this.getContent();e&&(e.scrollTop=0)}))},onSpaceDown(e){e.preventDefault()},onTabDown(e){const t=this.$refs.menu;if(!t)return;const s=t.activeTile;!this.multiple&&s&&this.isMenuActive?(e.preventDefault(),e.stopPropagation(),s.click()):this.blur(e)},onUpDown(e){const t=this.$refs.menu;if(!t)return;if(e.preventDefault(),this.multiple)return this.activateMenu();const s=e.keyCode;t.isBooted=!0,window.requestAnimationFrame((()=>{if(t.getTiles(),!t.hasClickableTiles)return this.activateMenu();switch(s){case y.uP.up:t.prevTile();break;case y.uP.down:t.nextTile();break;case y.uP.home:t.firstTile();break;case y.uP.end:t.lastTile();break}this.selectItem(this.allItems[this.getMenuIndex()])}))},selectItem(e){if(this.multiple){const t=(this.internalValue||[]).slice(),s=this.findExistingIndex(e);if(-1!==s?t.splice(s,1):t.push(e),this.setValue(t.map((e=>this.returnObject?e:this.getValue(e)))),this.hideSelected)this.setMenuIndex(-1);else{const t=this.computedItems.indexOf(e);~t&&(this.$nextTick((()=>this.$refs.menu.getTiles())),setTimeout((()=>this.setMenuIndex(t))))}}else this.setValue(this.returnObject?e:this.getValue(e)),this.isMenuActive=!1},setMenuIndex(e){this.$refs.menu&&(this.$refs.menu.listIndex=e)},setSelectedItems(){const e=[],t=this.multiple&&Array.isArray(this.internalValue)?this.internalValue:[this.internalValue];for(const s of t){const t=this.allItems.findIndex((e=>this.valueComparator(this.getValue(e),this.getValue(s))));t>-1&&e.push(this.allItems[t])}this.selectedItems=e},setValue(e){this.valueComparator(e,this.internalValue)||(this.internalValue=e,this.$emit("change",e))},isAppendInner(e){const t=this.$refs["append-inner"];return t&&(t===e||t.contains(e))}}})},2006:function(e,t,s){s.d(t,{A:function(){return o}});var i=s(3661),n=s(3507),l=s(6960),o=(0,n.A)(i.A).extend({name:"v-subheader",props:{inset:Boolean},render(e){return e("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},(0,l.$c)(this))}})},123:function(e,t,s){s.d(t,{A:function(){return a}});var i=s(4847),n=i.A,l=s(6960),o=s(5471),a=o.Ay.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const e=new n({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();const t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=(0,l.fl)(this.$el)),this.overlay.value=!0)})),!0},removeOverlay(e=!0){this.overlay&&((0,l.d7)(this.overlay.$el,"transitionend",(()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener(e){if("key"in e){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;const t=[l.uP.up,l.uP.pageup],s=[l.uP.down,l.uP.pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!s.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return(["auto","scroll"].includes(t.overflowY)||"SELECT"===e.tagName)&&e.scrollHeight>e.clientHeight||["auto","scroll"].includes(t.overflowX)&&e.scrollWidth>e.clientWidth},shouldScroll(e,t){if(e.hasAttribute("data-app"))return!1;const s=t.shiftKey||t.deltaX?"x":"y",i="y"===s?t.deltaY:t.deltaX||t.deltaY;let n,l;"y"===s?(n=0===e.scrollTop,l=e.scrollTop+e.clientHeight===e.scrollHeight):(n=0===e.scrollLeft,l=e.scrollLeft+e.clientWidth===e.scrollWidth);const o=i<0,a=i>0;return!(n||!o)||(!(l||!a)||!(!n&&!l||!e.parentNode)&&this.shouldScroll(e.parentNode,t))},isInside(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath(e){const t=(0,l.K9)(e);if("keydown"===e.type&&t[0]===document.body){const t=this.$refs.dialog,s=window.getSelection().anchorNode;return!(t&&this.hasScrollbar(t)&&this.isInside(s,t))||!this.shouldScroll(t,e)}for(let s=0;s<t.length;s++){const i=t[s];if(i===document)return!0;if(i===document.documentElement)return!0;if(i===this.$refs.content)return!0;if(this.hasScrollbar(i))return!this.shouldScroll(i,e)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,l.P4)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);
//# sourceMappingURL=943.edd2377f.js.map