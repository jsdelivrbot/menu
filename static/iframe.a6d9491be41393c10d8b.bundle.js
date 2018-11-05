(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{504:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Menu",{enumerable:!0,get:function(){return a.Menu}}),Object.defineProperty(t,"MenuItem",{enumerable:!0,get:function(){return r.MenuItem}}),n(614);var a=n(615),r=n(618);try{Menu.displayName="Menu",Menu.__docgenInfo={description:"",displayName:"Menu",props:{classname:{defaultValue:null,description:"additional classname for menu",name:"classname",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../src/index.ts#Menu"]={docgenInfo:Menu.__docgenInfo,name:"Menu",path:"../src/index.ts#Menu"})}catch(e){}try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{children:{defaultValue:null,description:"menuItem title",name:"children",required:!0,type:{name:"string | (string & {}) | (ReactElement<any> & string) | (ReactNodeArray & string) | (ReactPortal & string)"}},classname:{defaultValue:null,description:"additional classname for menuItem",name:"classname",required:!1,type:{name:"string"}},subNav:{defaultValue:null,description:"the sub-nav appears when the mouse moves over the menuItem title",name:"subNav",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../src/index.ts#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"../src/index.ts#MenuItem"})}catch(e){}},565:function(e,t,n){n(217),n(566),e.exports=n(567)},567:function(e,t,n){"use strict";n.r(t),function(e){var t=n(492),a=n(562);Object(a.withOptions)({name:"One React",url:"https://github.com/one-react/menu",goFullScreen:!1,showAddonPanel:!0,addonPanelInRight:!0});var r=n(581);Object(t.configure)(function(){r.keys().forEach(function(e){return r(e)})},e)}.call(this,n(494)(e))},581:function(e,t,n){var a={"./index.story.tsx":582};function r(e){var t=i(e);return n(t)}function i(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=581},582:function(e,t,n){"use strict";(function(e){var t=n(2),a=n(583),r=n(492),i=t(n(1)),l=n(504),s=n(619),u=t(n(813));n(818),(0,r.storiesOf)("or-menu",e).addDecorator((0,a.withInfo)({inline:!0,propTables:[l.MenuItem],propTablesExclude:[u.default],styles:{jsxInfoContent:{borderTop:"none",margin:0}}})).add("example",function(){return i.default.createElement(u.default,null)},{info:{source:!1,text:(0,s.previewCode)(n(819))}})}).call(this,n(130)(e))},586:function(e,t,n){var a={"./nestedObjectAssign":499,"./nestedObjectAssign.js":499};function r(e){var t=i(e);return n(t)}function i(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=586},614:function(e,t,n){},615:function(e,t,n){"use strict";var a=n(16),r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.Menu=void 0;var i=r(n(4)),l=r(n(6)),s=r(n(8)),u=r(n(9)),d=r(n(10)),o=r(n(505)),c=a(n(506)),m=function(e){function t(){return(0,i.default)(this,t),(0,s.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.classname,n=e.children,a=(0,o.default)(t,"or-menu");return c.default.createElement("div",{className:a},c.default.Children.map(n,function(e){return c.default.cloneElement(e)}))}}]),t}(c.PureComponent);t.Menu=m;try{m.displayName="Menu",m.__docgenInfo={description:"",displayName:"Menu",props:{classname:{defaultValue:null,description:"additional classname for menu",name:"classname",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../src/Menu.tsx#Menu"]={docgenInfo:m.__docgenInfo,name:"Menu",path:"../src/Menu.tsx#Menu"})}catch(e){}},618:function(e,t,n){"use strict";var a=n(16),r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.MenuItem=void 0;var i=r(n(4)),l=r(n(6)),s=r(n(8)),u=r(n(9)),d=r(n(10)),o=r(n(32)),c=r(n(12)),m=r(n(505)),p=a(n(506)),f=function(e){function t(){var e,n;(0,i.default)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return n=(0,s.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(r))),(0,c.default)((0,o.default)((0,o.default)(n)),"state",{active:!1}),(0,c.default)((0,o.default)((0,o.default)(n)),"handleMouseEnter",function(){n.setState({active:!0})}),(0,c.default)((0,o.default)((0,o.default)(n)),"handleMouseLeave",function(){n.setState({active:!1})}),n}return(0,d.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.classname,n=e.children,a=e.subNav,r=(0,m.default)({"or-menu-item-active":this.state.active},t,"or-menu-item");return p.default.createElement("div",{className:r,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},p.default.createElement("div",{className:"or-menu-item-name"},n),this.state.active&&a&&p.default.createElement("div",{className:"or-sub-nav"},a))}}]),t}(p.PureComponent);t.MenuItem=f;try{f.displayName="MenuItem",f.__docgenInfo={description:"",displayName:"MenuItem",props:{children:{defaultValue:null,description:"menuItem title",name:"children",required:!0,type:{name:"string | (string & {}) | (ReactElement<any> & string) | (ReactNodeArray & string) | (ReactPortal & string)"}},classname:{defaultValue:null,description:"additional classname for menuItem",name:"classname",required:!1,type:{name:"string"}},subNav:{defaultValue:null,description:"the sub-nav appears when the mouse moves over the menuItem title",name:"subNav",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../src/MenuItem.tsx#MenuItem"]={docgenInfo:f.__docgenInfo,name:"MenuItem",path:"../src/MenuItem.tsx#MenuItem"})}catch(e){}},619:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.previewCode=l;var r=a(n(1)),i=a(n(1048));function l(e){return r.default.createElement(i.default,{title:"Story Source",lang:"tsx",code:e})}try{l.displayName="previewCode",l.__docgenInfo={description:"",displayName:"previewCode",props:{toString:{defaultValue:null,description:"Returns a string representation of a string.",name:"toString",required:!0,type:{name:"() => string"}},charAt:{defaultValue:null,description:"Returns the character at the specified index.\n@param pos The zero-based index of the desired character.",name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:"Returns the Unicode value of the character at the specified location.\n@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.",name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},concat:{defaultValue:null,description:"Returns a string that contains the concatenation of two or more strings.\n@param strings The strings to append to the end of the string.",name:"concat",required:!0,type:{name:"(...strings: string[]) => string"}},indexOf:{defaultValue:null,description:"Returns the position of the first occurrence of a substring.\n@param searchString The substring to search for in the string\n@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.",name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},lastIndexOf:{defaultValue:null,description:"Returns the last occurrence of a substring in the string.\n@param searchString The substring to search for.\n@param position The index at which to begin searching. If omitted, the search begins at the end of the string.",name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},localeCompare:{defaultValue:null,description:"Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.\n@param that String to compare to target string\n@param that String to compare to target string\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.\n@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.",name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[], options?: CollatorOptions): number; }"}},match:{defaultValue:null,description:"Matches a string with a regular expression, and returns an array containing the results of that search.\nMatches a string an object that supports being matched against, and returns an array containing the results of that search.\n@param regexp A variable name or string literal containing the regular expression pattern and flags.\n@param matcher An object that supports being matched against.",name:"match",required:!0,type:{name:"{ (regexp: string | RegExp): RegExpMatchArray; (matcher: { [Symbol.match](string: string): RegExpMatchArray; }): RegExpMatchArray; }"}},replace:{defaultValue:null,description:"Replaces text in a string, using a regular expression or search string.\nReplaces text in a string, using a regular expression or search string.\nReplaces text in a string, using an object that supports replacement within a string.\nReplaces text in a string, using an object that supports replacement within a string.\n@param searchValue A string to search for.\n@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\n@param searchValue A string to search for.\n@param replacer A function that returns the replacement text.\n@param searchValue A object can search for and replace matches within a string.\n@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\n@param searchValue A object can search for and replace matches within a string.\n@param replacer A function that returns the replacement text.",name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substri..."}},search:{defaultValue:null,description:"Finds the first substring match in a regular expression search.\nFinds the first substring match in a regular expression search.\n@param regexp The regular expression pattern and applicable flags.\n@param searcher An object which supports searching within a string.",name:"search",required:!0,type:{name:"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"}},slice:{defaultValue:null,description:"Returns a section of a string.\n@param start The index to the beginning of the specified portion of stringObj.\n@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\nIf this value is not specified, the substring continues to the end of stringObj.",name:"slice",required:!0,type:{name:"(start?: number, end?: number) => string"}},split:{defaultValue:null,description:"Split a string into substrings using the specified separator and return them as an array.\nSplit a string into substrings using the specified separator and return them as an array.\n@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.\n@param limit A value used to limit the number of elements returned in the array.\n@param splitter An object that can split a string.\n@param limit A value used to limit the number of elements returned in the array.",name:"split",required:!0,type:{name:"{ (separator: string | RegExp, limit?: number): string[]; (splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[]; }"}},substring:{defaultValue:null,description:"Returns the substring at the specified location within a String object.\n@param start The zero-based index number indicating the beginning of the substring.\n@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\nIf end is omitted, the characters from start through the end of the original string are returned.",name:"substring",required:!0,type:{name:"(start: number, end?: number) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"() => string"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"() => string"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:"Gets a substring beginning at the specified location and having the specified length.\n@param from The starting position of the desired substring. The index of the first character in the string is zero.\n@param length The number of characters to include in the returned substring.",name:"substr",required:!0,type:{name:"(from: number, length?: number) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!0,type:{name:"() => string"}},codePointAt:{defaultValue:null,description:"Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\nthe String resulting from converting this object to a String.\nIf there is no element at that position, the result is undefined.\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.",name:"codePointAt",required:!0,type:{name:"(pos: number) => number"}},includes:{defaultValue:null,description:"Returns true if searchString appears as a substring of the result of converting this\nobject to a String, at one or more positions that are\ngreater than or equal to position; otherwise, returns false.\n@param searchString search string\n@param position If position is undefined, 0 is assumed, so as to search all of the String.",name:"includes",required:!0,type:{name:"(searchString: string, position?: number) => boolean"}},endsWith:{defaultValue:null,description:"Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nendPosition – length(this). Otherwise returns false.",name:"endsWith",required:!0,type:{name:"(searchString: string, endPosition?: number) => boolean"}},normalize:{defaultValue:null,description:'Returns the String value result of normalizing the string into the normalization form\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\nReturns the String value result of normalizing the string into the normalization form\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\n@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\nis "NFC"\n@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\nis "NFC"',name:"normalize",required:!0,type:{name:'{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string): string; }'}},repeat:{defaultValue:null,description:"Returns a String value that is made from count copies appended together. If count is 0,\nthe empty string is returned.\n@param count number of copies to append",name:"repeat",required:!0,type:{name:"(count: number) => string"}},startsWith:{defaultValue:null,description:"Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nposition. Otherwise returns false.",name:"startsWith",required:!0,type:{name:"(searchString: string, position?: number) => boolean"}},anchor:{defaultValue:null,description:"Returns an <a> HTML anchor element and sets the name attribute to the text value\n@param name",name:"anchor",required:!0,type:{name:"(name: string) => string"}},big:{defaultValue:null,description:"Returns a <big> HTML element",name:"big",required:!0,type:{name:"() => string"}},blink:{defaultValue:null,description:"Returns a <blink> HTML element",name:"blink",required:!0,type:{name:"() => string"}},bold:{defaultValue:null,description:"Returns a <b> HTML element",name:"bold",required:!0,type:{name:"() => string"}},fixed:{defaultValue:null,description:"Returns a <tt> HTML element",name:"fixed",required:!0,type:{name:"() => string"}},fontcolor:{defaultValue:null,description:"Returns a <font> HTML element and sets the color attribute value",name:"fontcolor",required:!0,type:{name:"(color: string) => string"}},fontsize:{defaultValue:null,description:"Returns a <font> HTML element and sets the size attribute value\nReturns a <font> HTML element and sets the size attribute value",name:"fontsize",required:!0,type:{name:"{ (size: number): string; (size: string): string; }"}},italics:{defaultValue:null,description:"Returns an <i> HTML element",name:"italics",required:!0,type:{name:"() => string"}},link:{defaultValue:null,description:"Returns an <a> HTML element and sets the href attribute value",name:"link",required:!0,type:{name:"(url: string) => string"}},small:{defaultValue:null,description:"Returns a <small> HTML element",name:"small",required:!0,type:{name:"() => string"}},strike:{defaultValue:null,description:"Returns a <strike> HTML element",name:"strike",required:!0,type:{name:"() => string"}},sub:{defaultValue:null,description:"Returns a <sub> HTML element",name:"sub",required:!0,type:{name:"() => string"}},sup:{defaultValue:null,description:"Returns a <sup> HTML element",name:"sup",required:!0,type:{name:"() => string"}},"__@iterator":{defaultValue:null,description:"Iterator",name:"__@iterator",required:!0,type:{name:"() => IterableIterator<string>"}},padStart:{defaultValue:null,description:'Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the start (left) of the current string.\n@param maxLength The length of the resulting string once the current string has been padded.\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n@param fillString The string to pad the current string with.\nIf this string is too long, it will be truncated and the left-most part will be applied.\nThe default value for this parameter is " " (U+0020).',name:"padStart",required:!0,type:{name:"(maxLength: number, fillString?: string) => string"}},padEnd:{defaultValue:null,description:'Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the end (right) of the current string.\n@param maxLength The length of the resulting string once the current string has been padded.\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n@param fillString The string to pad the current string with.\nIf this string is too long, it will be truncated and the left-most part will be applied.\nThe default value for this parameter is " " (U+0020).',name:"padEnd",required:!0,type:{name:"(maxLength: number, fillString?: string) => string"}},trimLeft:{defaultValue:null,description:"Removes whitespace from the left end of a string.",name:"trimLeft",required:!0,type:{name:"() => string"}},trimRight:{defaultValue:null,description:"Removes whitespace from the right end of a string.",name:"trimRight",required:!0,type:{name:"() => string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/util.tsx#previewCode"]={docgenInfo:l.__docgenInfo,name:"previewCode",path:"stories/util.tsx#previewCode"})}catch(e){}},813:function(e,t,n){"use strict";var a=n(16),r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(4)),l=r(n(6)),s=r(n(8)),u=r(n(9)),d=r(n(10)),o=n(504),c=a(n(1)),m=function(e){function t(){return(0,i.default)(this,t),(0,s.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"example-wrapper"},c.default.createElement(o.Menu,null,c.default.createElement(o.MenuItem,{subNav:p},"MAKEUP"),c.default.createElement(o.MenuItem,{subNav:f},"PERFUME"),c.default.createElement(o.MenuItem,{subNav:v},"HANDBAGS"),c.default.createElement(o.MenuItem,{subNav:g},"ACCESSORIES"),c.default.createElement(o.MenuItem,{subNav:p},"MAKEUP"),c.default.createElement(o.MenuItem,{subNav:f},"CLOTHING"),c.default.createElement(o.MenuItem,{subNav:v},"HANDBAGS"),c.default.createElement(o.MenuItem,null,"NO-SUBNAV")))}}]),t}(c.PureComponent);t.default=m;var p=c.default.createElement("div",{className:"sub-nav-overlay"},c.default.createElement("div",{className:"item-wrapper"},c.default.createElement("div",{className:"title"},"FACE"),c.default.createElement("div",null,"New Arrivals"),c.default.createElement("div",null,"Foundation"),c.default.createElement("div",null,"Concealer"),c.default.createElement("div",null,"Blush"),c.default.createElement("div",null,"Powder"),c.default.createElement("div",null,"Primer")),c.default.createElement("div",{className:"item-wrapper"},c.default.createElement("div",{className:"title"},"LIP"),c.default.createElement("div",null,"Lipstick"),c.default.createElement("div",null,"Liquid Lipcolor"),c.default.createElement("div",null,"Lip Gloss"),c.default.createElement("div",null,"Lip Pencil"),c.default.createElement("div",null,"Matte Finish")),c.default.createElement("div",{className:"item-wrapper"},c.default.createElement("div",{className:"title"},"COLLECTIONS"),c.default.createElement("div",null,"New Arrivals"),c.default.createElement("div",null,"Pure Color"),c.default.createElement("div",null,"Poppy"),c.default.createElement("div",null,"Suger"),c.default.createElement("div",null,"Sunset Collection")),c.default.createElement("div",{className:"item-wrapper"},c.default.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(n(814),")")}}))),f=c.default.createElement("div",{className:"sub-nav-overlay"},c.default.createElement("div",{className:"item-wrapper"},c.default.createElement("div",{className:"title"},"MEN"),c.default.createElement("div",null,"Wood Sage & Sea Salt"),c.default.createElement("div",null,"Orris & Sandalwood"),c.default.createElement("div",null,"Lime Basil & Mandarin"),c.default.createElement("div",null,"Amber & Lavender"),c.default.createElement("div",null,"Pomegranate Noir")),c.default.createElement("div",{className:"item-wrapper"},c.default.createElement("div",{className:"title"},"WOMEN"),c.default.createElement("div",null,"English Pear"),c.default.createElement("div",null,"Lime Basil"),c.default.createElement("div",null,"Honeysuckle & Davana "),c.default.createElement("div",null,"Red Roses"),c.default.createElement("div",null,"Wild Bluebel")),c.default.createElement("div",{className:"item-wrapper"},c.default.createElement("div",{className:"title"},"GIFTS"),c.default.createElement("div",null,"Home Candle"),c.default.createElement("div",null,"Deluxe Candle"),c.default.createElement("div",null,"Cologne"),c.default.createElement("div",null,"Grapefruit Candle")),c.default.createElement("div",{className:"item-wrapper"},c.default.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(n(815),")")}}))),v=c.default.createElement("div",{className:"sub-nav-overlay"},c.default.createElement("div",{className:"item-wrapper"},c.default.createElement("div",{className:"title"},"TOTES"),c.default.createElement("div",null,"New Arrivals"),c.default.createElement("div",null,"Foundation"),c.default.createElement("div",null,"Concealer"),c.default.createElement("div",null,"Blush"),c.default.createElement("div",null,"Powder"),c.default.createElement("div",null,"Primer")),c.default.createElement("div",{className:"item-wrapper"},c.default.createElement("div",{className:"title"},"SATCHES"),c.default.createElement("div",null,"Lipstick"),c.default.createElement("div",null,"Liquid Lipcolor"),c.default.createElement("div",null,"Lip Gloss"),c.default.createElement("div",null,"Lip Pencil"),c.default.createElement("div",null,"Matte Finish")),c.default.createElement("div",{className:"item-wrapper"},c.default.createElement("div",{className:"title"},"COLLECTIONS"),c.default.createElement("div",null,"New Arrivals"),c.default.createElement("div",null,"Pure Color"),c.default.createElement("div",null,"Poppy"),c.default.createElement("div",null,"Suger"),c.default.createElement("div",null,"Sunset Collection")),c.default.createElement("div",{className:"item-wrapper"},c.default.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(n(816),")")}}))),g=c.default.createElement("div",{className:"sub-nav-overlay"},c.default.createElement("div",{className:"item-wrapper"},c.default.createElement("div",{className:"title"},"MEN"),c.default.createElement("div",null,"Wood Sage & Sea Salt"),c.default.createElement("div",null,"Orris & Sandalwood"),c.default.createElement("div",null,"Lime Basil & Mandarin"),c.default.createElement("div",null,"Amber & Lavender"),c.default.createElement("div",null,"Pomegranate Noir")),c.default.createElement("div",{className:"item-wrapper"},c.default.createElement("div",{className:"title"},"WOMEN"),c.default.createElement("div",null,"English Pear"),c.default.createElement("div",null,"Lime Basil"),c.default.createElement("div",null,"Honeysuckle & Davana "),c.default.createElement("div",null,"Red Roses"),c.default.createElement("div",null,"Wild Bluebel")),c.default.createElement("div",{className:"item-wrapper"},c.default.createElement("div",{className:"title"},"GIFTS"),c.default.createElement("div",null,"Home Candle"),c.default.createElement("div",null,"Deluxe Candle"),c.default.createElement("div",null,"Cologne"),c.default.createElement("div",null,"Grapefruit Candle")),c.default.createElement("div",{className:"item-wrapper"},c.default.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(n(817),")")}})));try{example.displayName="example",example.__docgenInfo={description:"",displayName:"example",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/example.tsx#example"]={docgenInfo:example.__docgenInfo,name:"example",path:"stories/example.tsx#example"})}catch(e){}},814:function(e,t,n){e.exports=n.p+"static/media/face.c39e9597.png"},815:function(e,t,n){e.exports=n.p+"static/media/perfume.700122ea.png"},816:function(e,t,n){e.exports=n.p+"static/media/lip.7983ba27.png"},817:function(e,t,n){e.exports=n.p+"static/media/ear.3ce99dd7.png"},818:function(e,t,n){},819:function(e,t){e.exports='import { Menu, MenuItem } from \'or-menu\'\nimport React, { PureComponent } from \'react\'\n\nexport default class Example extends PureComponent<{}, {}> {\n  render() {\n    return (\n      <div className="example-wrapper">\n        <Menu>\n          <MenuItem subNav={subNav1}>MAKEUP</MenuItem>\n          <MenuItem subNav={subNav2}>PERFUME</MenuItem>\n          <MenuItem subNav={subNav3}>HANDBAGS</MenuItem>\n          <MenuItem subNav={subNav4}>ACCESSORIES</MenuItem>\n          <MenuItem subNav={subNav1}>MAKEUP</MenuItem>\n          <MenuItem subNav={subNav2}>CLOTHING</MenuItem>\n          <MenuItem subNav={subNav3}>HANDBAGS</MenuItem>\n          <MenuItem>NO-SUBNAV</MenuItem>\n        </Menu>\n      </div>\n    )\n  }\n}\n\nconst subNav1 = (\n  <div className="sub-nav-overlay">\n    <div className="item-wrapper">\n      <div className="title">FACE</div>\n      <div>New Arrivals</div>\n      <div>Foundation</div>\n      <div>Concealer</div>\n      <div>Blush</div>\n      <div>Powder</div>\n      <div>Primer</div>\n    </div>\n    <div className="item-wrapper">\n      <div className="title">LIP</div>\n      <div>Lipstick</div>\n      <div>Liquid Lipcolor</div>\n      <div>Lip Gloss</div>\n      <div>Lip Pencil</div>\n      <div>Matte Finish</div>\n    </div>\n    <div className="item-wrapper">\n      <div className="title">COLLECTIONS</div>\n      <div>New Arrivals</div>\n      <div>Pure Color</div>\n      <div>Poppy</div>\n      <div>Suger</div>\n      <div>Sunset Collection</div>\n    </div>\n    <div className="item-wrapper">\n      <div\n        className="image"\n        style={{ backgroundImage: `url(${require(\'./images/face.png\')})` }}\n      />\n    </div>\n  </div>\n)\n\nconst subNav2 = (\n  <div className="sub-nav-overlay">\n    <div className="item-wrapper">\n      <div className="title">MEN</div>\n      <div>Wood Sage & Sea Salt</div>\n      <div>Orris & Sandalwood</div>\n      <div>Lime Basil & Mandarin</div>\n      <div>Amber & Lavender</div>\n      <div>Pomegranate Noir</div>\n    </div>\n    <div className="item-wrapper">\n      <div className="title">WOMEN</div>\n      <div>English Pear</div>\n      <div>Lime Basil</div>\n      <div>Honeysuckle & Davana </div>\n      <div>Red Roses</div>\n      <div>Wild Bluebel</div>\n    </div>\n    <div className="item-wrapper">\n      <div className="title">GIFTS</div>\n      <div>Home Candle</div>\n      <div>Deluxe Candle</div>\n      <div>Cologne</div>\n      <div>Grapefruit Candle</div>\n    </div>\n    <div className="item-wrapper">\n      <div\n        className="image"\n        style={{ backgroundImage: `url(${require(\'./images/perfume.png\')})` }}\n      />\n    </div>\n  </div>\n)\n\nconst subNav3 = (\n  <div className="sub-nav-overlay">\n    <div className="item-wrapper">\n      <div className="title">TOTES</div>\n      <div>New Arrivals</div>\n      <div>Foundation</div>\n      <div>Concealer</div>\n      <div>Blush</div>\n      <div>Powder</div>\n      <div>Primer</div>\n    </div>\n    <div className="item-wrapper">\n      <div className="title">SATCHES</div>\n      <div>Lipstick</div>\n      <div>Liquid Lipcolor</div>\n      <div>Lip Gloss</div>\n      <div>Lip Pencil</div>\n      <div>Matte Finish</div>\n    </div>\n    <div className="item-wrapper">\n      <div className="title">COLLECTIONS</div>\n      <div>New Arrivals</div>\n      <div>Pure Color</div>\n      <div>Poppy</div>\n      <div>Suger</div>\n      <div>Sunset Collection</div>\n    </div>\n    <div className="item-wrapper">\n      <div\n        className="image"\n        style={{ backgroundImage: `url(${require(\'./images/lip.png\')})` }}\n      />\n    </div>\n  </div>\n)\n\nconst subNav4 = (\n  <div className="sub-nav-overlay">\n    <div className="item-wrapper">\n      <div className="title">MEN</div>\n      <div>Wood Sage & Sea Salt</div>\n      <div>Orris & Sandalwood</div>\n      <div>Lime Basil & Mandarin</div>\n      <div>Amber & Lavender</div>\n      <div>Pomegranate Noir</div>\n    </div>\n    <div className="item-wrapper">\n      <div className="title">WOMEN</div>\n      <div>English Pear</div>\n      <div>Lime Basil</div>\n      <div>Honeysuckle & Davana </div>\n      <div>Red Roses</div>\n      <div>Wild Bluebel</div>\n    </div>\n    <div className="item-wrapper">\n      <div className="title">GIFTS</div>\n      <div>Home Candle</div>\n      <div>Deluxe Candle</div>\n      <div>Cologne</div>\n      <div>Grapefruit Candle</div>\n    </div>\n    <div className="item-wrapper">\n      <div\n        className="image"\n        style={{ backgroundImage: `url(${require(\'./images/ear.png\')})` }}\n      />\n    </div>\n  </div>\n)\n'}},[[565,2,4]]]);
//# sourceMappingURL=iframe.a6d9491be41393c10d8b.bundle.js.map